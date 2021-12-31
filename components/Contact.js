import { useState } from "react";
import SectionHeader from "./elements/SectionHeader";
import { FaCheck } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
  const blankForm = {
    name: "",
    email: "",
    phone: "",
    details: "",
  };

  const [inputs, setInputs] = useState(blankForm);

  const [status, setStatus] = useState(false);

  const changeInputs = (key, val) => {
    let newInputs = { ...inputs };
    newInputs[key] = val;
    console.log(key, val);
    setInputs(newInputs);
  };

  const submitform = async () => {
    console.log(JSON.stringify(inputs));

    const response = await fetch("/api/formsubmit", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setInputs(blankForm);
        setStatus(true);
      })
      .catch((err) => {
        console.log("Failed to submit form.", err);
      });
  };

  return (
    <div
      id="contact"
      className="flex flex-col space-y-4 md:space-y-8 justify-center items-center p-8 bg-neutral-900 md:p-16"
    >
      <div className="uppercase text-xl tracking-widest md:text-4xl">
        Contact
      </div>
      <div>
        <hr className="m-auto w-32 md:w-64" />
      </div>
      <div className="w-full space-y-4 text-center md:w-1/3">
        <div className="md:text-2xl md:leading-10">
          <div className="flex items-center justify-center space-x-2">
            <div>
              <MdEmail />
            </div>
            <div>konceptdetailing@gmail.com</div>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div>
              <MdPhone />
            </div>
            <div>813-679-4397</div>
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
    </div>
  );
};

export default Contact;
