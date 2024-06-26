"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+94 77 597 1667",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "myahya2919@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Kandy, Sri Lanka",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false); // Correctly defined isSuccess state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      service: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field} is required`;
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      emailjs
        .send("service_grxk1wj", "template_6cx91eg", formData, "iO9J_x62tSs6HQZi1")
        .then(
          (result) => {
            console.log(result.text);
            // Reset form fields
            setFormData({
              firstname: "",
              lastname: "",
              email: "",
              phone: "",
              service: "",
              message: "",
            });
            // Show success message
            setIsSuccess(true);
            // Hide success message after 3 seconds
            setTimeout(() => setIsSuccess(false), 5000);
          },
          (error) => {
            console.log(error.text);
          }
        );

      console.log("Form submitted", formData);
    }
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
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Lets Work Together</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                {errors.firstname && (
                  <span className="text-red-500">{errors.firstname}</span>
                )}
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                {errors.lastname && (
                  <span className="text-red-500">{errors.lastname}</span>
                )}
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email}</span>
                )}
                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <span className="text-red-500">{errors.phone}</span>
                )}
              </div>
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="UI/UX">UI/UX</SelectItem>
                    <SelectItem value="SEO">SEO</SelectItem>
                    <SelectItem value="Content Optimization">
                      Content Optimization
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.service && (
                <span className="text-red-500">{errors.service}</span>
              )}
              <Textarea
                className="h-full"
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <span className="text-red-500">{errors.message}</span>
              )}
              <Button size="md" className="max-w-40" type="submit">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10 ">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div
                      className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] 
                    text-accent rounded-md flex items-center justify-center"
                    >
                      <div className="text-[28px]">{item.icon}</div>
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
      {isSuccess && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-primary bg-opacity-50">
          <div className="bg-accent p-6 rounded-lg shadow-lg text-primary">
            <h2 className="text-2xl mb-4">Message Sent Successfully!</h2>
            <p>Thank you for contacting us. We will get back to you shortly.</p>
            <Button
              className="mt-4 px-4 py-2 bg-primary text-white"
              onClick={() => setIsSuccess(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Contact;
