import { z } from "zod";

export const contactMessageSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name must be under 100 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email")
    .email("Please enter a valid email")
    .max(255, "Email must be under 255 characters"),
  subject: z.string().trim().max(150, "Subject must be under 150 characters").optional().default(""),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
  /** Hidden honeypot field — real visitors leave it empty. */
  website: z.string().max(200).optional().default(""),
});

export type ContactMessageInput = z.input<typeof contactMessageSchema>;
