import { type NextApiHandler } from "next";
import { z } from "zod";
import { db } from "../../drizzle";
import { contactFormTable } from "../../drizzle/schema";

const handler: NextApiHandler = async (req, res) => {
	const captchaSecret = process.env.CAPTCHA_SECRET;

	if (!captchaSecret) {
		res.status(500).json({
			status: "failed",
			message: "Captcha secret not found.",
		});
		return;
	}

	const inputSchema = z.object({
		name: z.string().min(1),
		email: z.string().email(),
		phone: z.string().min(10).max(15),
		details: z.string().min(1),
		token: z.string().min(1),
	});

	try {
		const { name, email, phone, details, token } = inputSchema.parse(
			req.body,
		);

		const verify = await fetch(
			`https://www.google.com/recaptcha/api/siteverify?secret=${captchaSecret}&response=${token}`,
			{
				method: "POST",
			},
		)
			.then((data) => {
				return data.json() as Promise<{
					success: boolean;
					challenge_ts: string;
					hostname: string;
					score: number;
					action: string;
				}>;
			})
			.catch((err: unknown) => {
				console.error(err);
				throw new Error("Failed to verify captcha.");
			});

		if (!verify.success) {
			throw new Error("Failed to verify captcha.");
		}

		await db
			.insert(contactFormTable)
			.values({
				name,
				email,
				phone,
				details,
			})
			.execute();

		res.status(200).json({ success: true, message: "Thank you!" });
	} catch (err) {
		res.status(400).json({
			success: false,
			message: err instanceof Error ? err.message : "Unknown error.",
		});
	}
};

export default handler;
