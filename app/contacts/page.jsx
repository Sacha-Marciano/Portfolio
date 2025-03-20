"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { emailjs } from "emailjs";

import {
  Select,
  SelectGroup,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";
import { useState } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+972) 53-708-0183",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "momarciano26@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Ra'anana, Israel",
  },
];

const Contacts = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    note: "",
  });

  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    window.alert(
      "A mail has been sent with an offer of 25K$/month !                                Just kidding, my mailJS account is broken, I am fixing it now, if you want to contact me, please send a mail to momarciano26@gmail.com"
    );

    // emailjs
    //   .send(
    //     "service_s9xyt8p", // Replace with your EmailJS Service ID
    //     "template_9201vqr", // Replace with your EmailJS Template ID
    //     {
    //       name: inputs.name,
    //       phone: inputs.phone,
    //       email: inputs.email,
    //       note: inputs.note,
    //     },
    //     "m1aI-1ke3rMEavsXN" // Replace with your EmailJS Public Key
    //   )
    //   .then(
    //     (response) => {
    //       console.log("Email sent successfully!", response);
    //       alert("Email sent successfully!");
    //     },
    //     (error) => {
    //       console.error("Error sending email:", error);
    //       alert("Failed to send email.");
    //     }
    //   );
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* forms */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent"> Let's work together !</h3>
              <p className="text-white/60">
                Wether you are an entrepreneur with the century's idea or a
                talent aquisition specialist for a big company we can work
                together ! Don't hesitate to contact me directly or leave me
                your info in the form, and I will contact you !
              </p>
              {/* inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="Firstname"
                  name="firstName"
                  onChange={handleChange}
                />
                <Input
                  type="lastname"
                  placeholder="Lastname"
                  name="lastName"
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  placeholder="Email adress"
                  name="email"
                  onChange={handleChange}
                />
                <Input
                  type="phone"
                  placeholder="Phone number"
                  name="phone"
                  onChange={handleChange}
                />
              </div>
              {/* select */}
              <Select name="subject" onChange={handleChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a subject</SelectLabel>
                    <SelectItem value="Job Interview">Job Interview</SelectItem>
                    <SelectItem value="Skills discussion">
                      Skills discussion
                    </SelectItem>
                    <SelectItem value="Project planning">
                      Project planning
                    </SelectItem>
                    <SelectItem value="Brainstorming">Brainstorming</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                name="note"
                onChange={handleChange}
              />
              {/* submit */}
              <Button size="md" className="max-w-40" onClick={handleSubmit}>
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap6 ">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon} </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contacts;
