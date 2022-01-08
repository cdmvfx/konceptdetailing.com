import { useState, useEffect, useCallback } from "react";
import { FaCheck } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3';
import { PopupButton } from "react-calendly";

const ContactForm = () => {

	const { executeRecaptcha } = useGoogleReCaptcha();

	const blankForm = {
    name: "",
    email: "",
    phone: "",
    details: "",
  };

  const [inputs, setInputs] = useState(blankForm);

	const [token, setToken] = useState('');

  const [status, setStatus] = useState(false);

  const changeInputs = (key, val) => {
    let newInputs = { ...inputs };
    newInputs[key] = val;
    setInputs(newInputs);
  };

  const submitform = async () => {

		setStatus(true);

		let formdata = {...inputs};

		formdata.token = token;

		console.log('formdata: ', formdata);

    const response = await fetch("/api/formsubmit", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formdata),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setInputs(blankForm);
      })
      .catch((err) => {
        console.log("Failed to submit form.", err);
				setStatus(false);
      });
  };

	const handleReCaptchaVerify = useCallback(
		async () => {
			
			if (!executeRecaptcha) {
				console.log('Execute recaptcha not yet available');
				return;
			}

			const new_token = await executeRecaptcha('contactFormTest');

			setToken(new_token);
		},
		[executeRecaptcha],
	);

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);


  return (
    <div className="pt-4 w-full space-y-8 text-center md:w-2/3 xl:w-1/3">
			<PopupButton 
					url="https://calendly.com/konceptdetailing" 
				  text="SCHEDULE A DETAIL"
					pageSettings={{
						backgroundColor: 'ffffff',
						hideEventTypeDetails: false,
						hideGdprBanner: true,
						hideLandingPageDetails: false,
						primaryColor: '00a2ff',
						textColor: '4d5055'
					}}
					styles={{letterSpacing: "2px", border: "1px solid white", cursor: "pointer", textAlign: "center", padding: "1rem" }}
				/>
      <div className="md:text-2xl md:leading-10 space-y-4">
        <div className="space-y-4">
          <p>If you would like to schedule a date and time that works best for you, please click the button above to see my availability!</p>
					<p>If you have any questions, feel free to call, text or email me, or fill out the form below and I'll reach back out to you as soon as possible!</p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <div>
            <MdPhone />
          </div>
          <div><a href="tel:8136794397">813-679-4397</a></div>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <div>
            <MdEmail />
          </div>
          <div><a href="mailto:konceptdetailing@gmail.com">konceptdetailing@gmail.com</a></div>
        </div>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          className="w-full h-10 text-black text-center font-bold"
          type="text"
          autoComplete="name"
          id="name"
          required
          value={inputs.name}
          onChange={(e) => changeInputs("name", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">Email</label>
        <input
          className="w-full h-10 text-black text-center font-bold"
          type="text"
          autoComplete="email"
          id="email"
          required
          value={inputs.email}
          onChange={(e) => changeInputs("email", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">Phone Number</label>
        <input
          className="w-full h-10 text-black text-center font-bold"
          type="number"
          autoComplete="phone"
          id="phone"
          required
          value={inputs.phone}
          onChange={(e) => changeInputs("phone", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">Additional Details</label>
        <textarea
          className="w-full h-10 text-black font-bold p-2"
          type="text"
          autoComplete="details"
          id="details"
          required
          rows={4}
          value={inputs.details}
          onChange={(e) => changeInputs("details", e.target.value)}
        />
      </div>
      <div>
        <button
          disabled={status}
          className="bg-neutral-800 w-full py-2 px-4"
          type="button"
          onClick={submitform}
        >
          {status ? (
            <div className="flex flex-col justify-center items-center text-green-400">
              <FaCheck /> Submitted! I'll get back to you as soon as possible!
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
