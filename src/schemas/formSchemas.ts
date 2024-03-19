import * as z from "zod";

export const registerSchema = z.object({
  first_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const reviewSchema = z.object({
  stars: z.string().max(1),
  first_name: z
    .string()
    .min(2, { message: "Name must be at leat 2 characters" }),
  last_name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email(),
  review: z.string().min(1),
});

export const appointmentSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
  last_name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
  address: z
    .string()
    .min(2, { message: "Address must be at least 2 characters" }),
  email: z.string().email(),
  phone_number: z
    .string()
    .max(12, { message: "Phone numbers can't be more than 12 characters" }),
  date: z.date(),
  hh: z.string().max(2),
  mm: z.string().max(2),
  period: z.string().max(2),
});

export const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email(),
  message: z.string().min(1, { message: "Message can not be empty" }).max(300),
});

export const billingSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: "Name must ne at least 2 characters" }),
  last_name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email(),
  phoneNumber: z
    .string()
    .max(11, { message: "Phone number should not be more than 12 characters" }),
  address1: z.string().min(1, { message: "Field is required" }),
  address2: z.string().optional(),
  town: z.string().min(1),
  state: z.string().min(1),
  country: z.string().min(1),
  postal_code: z.string().min(3),
  order_note: z.string().min(1),
});

export const categorySchema = z.object({
  title: z.string().min(1, { message: "Title cannot be empty" }),
  styles: z.string(),
});

export const productSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  price: z.string(),
  discount_percentage: z.string(),
  description: z
    .string()
    .min(5, { message: "Description must not be less than 5 letters" }),
  is_featured: z.boolean(),
  style: z.string(),
});
