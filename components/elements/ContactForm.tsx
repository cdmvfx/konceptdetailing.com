import { useState, useRef, useEffect } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { PopupButton, useCalendlyEventListener } from "react-calendly";
import { sendGAEvent } from "@next/third-parties/google";
import { useInView } from "framer-motion";

declare global {
	interface Window {
		grecaptcha: {
			ready: (callback: () => void) => void;
			execute: (
				siteKey: string,
				properties: Record<string, string>,
			) => Promise<string>;
		};
	}
}

const loadReCaptchaScript = (): Promise<void> => {
	return new Promise((resolve, reject) => {
		if (document.getElementById("recaptcha-script")) {
			resolve();
			return;
		}

		const script = document.createElement("script");
		script.id = "recaptcha-script";
		script.src =
			"https://www.google.com/recaptcha/api.js?render=6LfkvOcdAAAAAA9bdAgSLgmyCfr0N8uej7Ia4WMQ";
		script.async = true;
		script.defer = true;
		script.onload = () => {
			resolve();
		};
		script.onerror = reject;
		document.body.appendChild(script);
	});
};

function ContactForm(): JSX.Element {
	const blankForm = {
		name: "",
		email: "",
		phone: "",
		details: "",
	};

	const rootRef = useRef<HTMLFormElement>(null);

	const [inputs, setInputs] = useState(blankForm);

	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<null | string>(null);

	const isInView = useInView(rootRef, {
		amount: 0.1,
		once: true,
	});

	useEffect(() => {
		if (!isInView) {
			return;
		}

		void loadReCaptchaScript();
	}, [isInView]);

	useCalendlyEventListener({
		onProfilePageViewed: () => {
			sendGAEvent("event", "calendly_profile_page_viewed");
		},
		onDateAndTimeSelected: () => {
			sendGAEvent("event", "calendly_date_and_time_selected");
		},
		onEventTypeViewed: () => {
			sendGAEvent("event", "calendly_event_type_viewed");
		},
		onEventScheduled: (e) => {
			sendGAEvent("event", "calendly_event_scheduled", {
				event: e.data.payload.event.uri,
				invitee: e.data.payload.invitee.uri,
			});
		},
		onPageHeightResize: (e) => {
			sendGAEvent("event", "calendly_page_height_resized", {
				height: e.data.payload.height,
			});
		},
	});

	const changeInputs = (
		key: "name" | "email" | "phone" | "details",
		val: string,
	): void => {
		const newInputs = { ...inputs };
		newInputs[key] = val;
		setInputs(newInputs);
	};

	const handleSubmit = async (): Promise<void> => {
		setLoading(true);
		setError(null);

		const token = await new Promise<string>((resolve, reject) => {
			window.grecaptcha.ready(function captchaReadyCallback() {
				window.grecaptcha
					.execute("6LfkvOcdAAAAAA9bdAgSLgmyCfr0N8uej7Ia4WMQ", {
						action: "submit",
					})
					.then(resolve)
					.catch(() => {
						reject(new Error("Failed to execute reCAPTCHA"));
					});
			});
		});

		const formdata = {
			name: inputs.name,
			email: inputs.email,
			phone: inputs.phone,
			details: inputs.details,
			token,
		};

		await fetch("/api/formsubmit", {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formdata),
		})
			.then((res) => {
				return res.json() as Promise<{
					success: boolean;
					message: string;
				}>;
			})
			.then((res) => {
				if (!res.success) {
					throw new Error(res.message);
				}

				// eslint-disable-next-line no-console -- testing
				console.log("sendGAEvent");
				sendGAEvent("event", "contact_form_submit", {
					email: formdata.email,
				});
				setInputs(blankForm);
				setSuccess(true);
				setLoading(false);
			})
			.catch((err: unknown) => {
				setSuccess(false);
				setLoading(false);
				setError(
					err instanceof Error ? err.message : "An error occurred.",
				);
			});
	};

	return (
		<form
			className="pt-4 w-full space-y-8 text-center z-20 md:w-2/3 xl:w-1/3"
			ref={rootRef}
		>
			<PopupButton
				rootElement={rootRef.current as HTMLElement}
				url="https://calendly.com/konceptdetailing"
				text="SCHEDULE A DETAIL"
				className="hover:bg-white hover:text-black transition-all"
				pageSettings={{
					backgroundColor: "ffffff",
					hideEventTypeDetails: false,
					hideGdprBanner: true,
					hideLandingPageDetails: false,
					primaryColor: "00a2ff",
					textColor: "4d5055",
				}}
				styles={{
					letterSpacing: "2px",
					border: "1px solid white",
					cursor: "pointer",
					textAlign: "center",
					padding: "1rem",
				}}
			/>
			<div className="md:text-2xl md:leading-10 space-y-4 leading-8">
				<div className="space-y-4">
					<p>
						If you would like to schedule a date and time that works
						best for you, please click the button above to see my
						availability!
					</p>
					<p>
						If you have any questions, feel free to call, text or
						email me, or fill out the form below and I&apos;ll reach
						back out to you as soon as possible!
					</p>
				</div>
				<div className="flex items-center justify-center space-x-2">
					<div>
						<MdPhone />
					</div>
					<div>
						<a href="tel:8136794397">813-679-4397</a>
					</div>
				</div>
				<div className="flex items-center justify-center space-x-2">
					<div>
						<MdEmail />
					</div>
					<div>
						<a href="mailto:konceptdetailing@gmail.com">
							konceptdetailing@gmail.com
						</a>
					</div>
				</div>
			</div>
			<div>
				<label htmlFor="name">Name</label>
				<input
					className="w-full h-10 text-white bg-neutral-900 border border-neutral-800 text-center font-bold"
					type="text"
					autoComplete="name"
					id="name"
					required
					value={inputs.name}
					disabled={loading}
					onChange={(e) => {
						changeInputs("name", e.target.value);
					}}
				/>
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input
					className="w-full h-10 text-white bg-neutral-900 border border-neutral-800 text-center font-bold"
					type="email"
					autoComplete="email"
					id="email"
					required
					value={inputs.email}
					disabled={loading}
					onChange={(e) => {
						changeInputs("email", e.target.value);
					}}
				/>
			</div>
			<div>
				<label htmlFor="phone">Phone Number</label>
				<input
					className="w-full h-10 text-white bg-neutral-900 border border-neutral-800 text-center font-bold"
					type="tel"
					autoComplete="mobile tel"
					id="phone"
					required
					disabled={loading}
					value={inputs.phone}
					onChange={(e) => {
						changeInputs("phone", e.target.value);
					}}
				/>
			</div>
			<div>
				<label htmlFor="details">Additional Details</label>
				<textarea
					className="w-full h-10 text-white bg-neutral-900 border border-neutral-800 text-center font-bold p-2"
					autoComplete="details"
					id="details"
					required
					rows={4}
					value={inputs.details}
					disabled={loading}
					onChange={(e) => {
						changeInputs("details", e.target.value);
					}}
				/>
			</div>
			<div>
				{error !== null && (
					<p className="text-red-400 mb-4">
						<FaTimes className="inline" /> There was an error
						submitting your details. Please ensure all fields are
						filled out correctly and try again.
					</p>
				)}
				{Boolean(success) && (
					<div className="flex flex-col justify-center items-center text-green-400 ">
						<FaCheck /> Submitted! I&apos;ll get back to you as soon
						as possible!
					</div>
				)}
				{!success && (
					<button
						disabled={loading}
						className="bg-neutral-800 w-full py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none disabled:bg-neutral-900"
						type="button"
						onClick={() => void handleSubmit()}
					>
						Submit
					</button>
				)}
			</div>
		</form>
	);
}

export default ContactForm;
