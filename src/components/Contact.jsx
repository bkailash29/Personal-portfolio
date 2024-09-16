import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_v4idvcg',
        'template_z7kc48l',
        {
          from_name: form.name,
          to_name: "Kailash Balachandiran",
          from_email: form.email,
          to_email: "bkailash29@gmail.com",
          message: form.message,
        },
        '-4h5P9SzQB0fjL0_k'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <div className="flex xl:flex-row flex-col gap-10 overflow-hidden">
        {/* Contact Info Section */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.5] bg-black-100 p-8 rounded-2xl text-center"
        >
          <p className={styles.sectionSubText}>Contact Info</p>
          <h3 className={styles.sectionHeadText}>Let's Connect.</h3>

          {/* Phone Number */}
          <div className="mt-8">
            <h4 className="text-white font-bold text-lg">Phone:</h4>
            <p className="text-secondary text-lg">+44 7467173676</p>
          </div>

          {/* Email */}
          <div className="mt-6">
            <h4 className="text-white font-bold text-lg">Email:</h4>
            <p className="text-secondary text-lg">bkailash29@gmail.com</p>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl text-center"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");