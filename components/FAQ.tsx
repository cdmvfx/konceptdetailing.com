import { motion } from "framer-motion";

const FAQ = () => {
  const faq = [
    {
      q: "Where are you located?",
      a: "I am based in Tampa, and will drive to you anywhere in the Tampa area to detail your vehicle.",
    },
    {
      q: "I'm not in Tampa. Can you drive to me?",
      a: "Yes, but I will charge you for an additional $10 per 10 miles to cover the gas and time expenses, up to 70 miles.",
    },
    {
      q: "Where will you detail my car?",
      a: "If you live in a house, I can detail it right in your driveway. Otherwise, I do free pickup and delivery from your residence.",
    },
    {
      q: "How much do you charge?",
      a: 'Every detail is different depending on the services you need. Please click the "Schedule A Detail" button below to view packages and check availability!',
    },
    {
      q: "There are things in your packages I need or don't need. Can you add or remove something?",
      a: "Yes, my packages are flexible! Please contact me to confirm switching out specific services.",
    },
  ];
  return (
    <div
      id="faq"
      className="text-center px-8 py-16 space-y-4 md:space-y-8 w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { type: "tween", duration: 1, ease: "easeOut" },
        }}
        viewport={{ amount: "500px" as any, once: true }}
        className="uppercase text-xl tracking-widest md:text-4xl">
        FAQ
      </motion.div>
      <div>
        <motion.hr
          initial={{ width: 0 }}
          whileInView={{
            width: "200px",
            transition: {
              type: "tween",
              duration: 1,
              ease: "easeOut",
            },
          }}
          viewport={{ amount: "200px" as any, once: true }}
          className="m-auto w-32 md:w-64"
        />
      </div>
      <div className="space-y-8 leading-8 md:text-2xl md:leading-10 md:max-w-2xl md:m-auto">
        {faq.map(({ q, a }, index) => (
          <div className="" key={"faq-" + index}>
            <div className="font-extrabold">{q}</div>
            <div>{a}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
