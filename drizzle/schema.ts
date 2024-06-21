import { text, timestamp, pgSchema } from "drizzle-orm/pg-core";

export const konceptSchema = pgSchema("koncept_detailing");

export const contactFormTable = konceptSchema.table("contact_form", {
	submitted_at: timestamp("created_at").notNull().defaultNow(),
	name: text("name").notNull(),
	email: text("email").notNull(),
	phone: text("phone").notNull(),
	details: text("details").notNull(),
});
