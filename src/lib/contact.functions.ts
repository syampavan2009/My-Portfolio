import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { contactMessageSchema } from "./contact-schema";

/** Saves one message from the portfolio contact form. Public: anyone may send. */
export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactMessageSchema.parse(input))
  .handler(async ({ data }) => {
    // Honeypot filled in → silently accept without saving (bots).
    if (data.website) return { ok: true as const };

    const url = process.env["SUPABASE_URL"]!;
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const supabase = createClient<Database>(url, key, {
      auth: { persistSession: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
            h.delete("Authorization");
          }
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });

    const { error } = await supabase.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      subject: data.subject || null,
      message: data.message,
    });
    if (error) {
      console.error("contact insert failed", error.message);
      throw new Error("Your message couldn't be sent. Please try again.");
    }
    return { ok: true as const };
  });
