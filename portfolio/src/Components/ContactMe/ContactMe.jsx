import { MapPin, Send } from "lucide-react";
import React, { useEffect, useState } from "react";
import { SiChatbot } from "react-icons/si";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { Mail } from "lucide-react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  emailjs.init("O14IazXdphuobWLUn");
  const SERVICE_ID = "service_t0dqbbq";
  const TEMPLATE_ID = "template_qrcmh3q";
  const PUBLIC_KEY = "O14IazXdphuobWLUn";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "Error",
        message: "Please fill all the fields out there",
      });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "Error", message: "Please enter a valid Email" });
      return;
    }

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus({
            type: "success",
            message:
              "The message has been sent successfully I am gonna get you soon",
          });
          setTimeout(() => {
            setFormData({
              name: "",
              email: "",
              message: "",
            });
            setStatus({
              type: "",
              message: "",
            });
          }, 5000);
        },
        (error) => {
          setStatus({
            type: "error",
            message: "Failed to send message",
          });
        },
      );
  };
  // useEffect(() => {
  //   console.log(formData, status);
  // }, [formData, status]);
  return (
    <section className="mt-20 " id="contact-me">
      <div className="flex flex-col gap-3 ">
        <div>
          <div className="flex items-center justify-center gap-2 border border-primary/60 w-fit px-2 py-[2px] rounded-lg bg-primary/10 my-2 mx-auto">
            <SiChatbot className="text-primary" />
            <span className="text-secondary">Get In Touch</span>
          </div>
          <p className="text-center opacity-80 my-2 text-black/80 dark:text-white/80">
            You can send me a message anytime
          </p>
          <div className="flex flex-col gap-5 md:flex-row items-center">
            <div className="w-full">
              <form
                onSubmit={handleSubmit}
                className="dark:bg-accent bg-accent/5 flex flex-col gap-4 rounded-lg p-5"
              >
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-black dark:text-white">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="px-4 py-2 bg-secondary/10  rounded-lg outline-none text-black/80 dark:text-white/80"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-black dark:text-white">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="px-4 py-2 bg-secondary/10 rounded-lg outline-none text-black/80 dark:text-white/80"
                  />
                </div>
                <div className="flex flex-col gap1">
                  <label htmlFor="message" className="text-black dark:text-white">Message</label>
                  <textarea
                    id="message"
                    type="text"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message here..."
                    className="px-4 py-2 bg-secondary/10 rounded-lg outline-none text-black/80 dark:text-white/80"
                  ></textarea>
                </div>
                <div className="group">
                  <button
                    type="submit"
                    className="flex justify-center gap-2 border border-primary/30 group-hover:border-primary/50 w-full py-2  rounded-lg group  transition-all duration-300 cursor-pointer"
                  >
                    <span className=" text-secondary dark:group-hover:[text-shadow:0_0_5px_rgba(82,159,237,0.9)] transition-all duration-300">
                      Send Message
                    </span>
                    <Send className="w-4 text-primary opacity-80 group-hover:opacity-100 transition-all duration-300" />
                  </button>
                </div>
              </form>
              {status.message && (
                <div
                  className={`py-1 px-3   text-center ${status.type === "success" ? "text-green-500 " : "text-red-500"}`}
                >
                  {status.message}
                </div>
              )}
            </div>
            <div className="w-full flex flex-col gap-4">
              <div>
                <p className="text-2xl text-black dark:text-white">Let's connect</p>
                <p className="opacity-70 text-black/80 dark:text-white/80">Feel free to reach out</p>
              </div>
              <div className="flex items-center gap-3 p-2 border border-primary/30 rounded-lg">
                <Mail className="text-primary" />
                <div className="text-secondary">
                  <p>Email</p>
                  <p>eyobalayu15@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 border border-primary/30 rounded-lg">
                <MapPin className="text-primary" />
                <div className="text-secondary">
                  <p>Location</p>
                  <p>Bahirdar University</p>
                </div>
              </div>
              <div>
                <p className="text-black/70 darK:text-white/70">You can get me through</p>
                <div className="flex gap-3">
                  <div className="p-2 border border-transparent w-fit rounded-lg hover:border hover:border-primary group transition-all duration-300">
                    <a href="https://github.com/eyobScar" target="_blank">
                      <FaGithub className="text-2xl  group-hover:text-primary/80 transition-all duration-300 text-black dark:text-white" />
                    </a>
                  </div>
                  <div className="p-2 border border-transparent w-fit rounded-lg hover:border hover:border-primary group transition-all duration-300">
                    <a href="http://www.linkedin.com/in/eyobScar">
                      <FaLinkedin className="text-2xl  group-hover:text-primary/80 transition-all duration-300 text-black dark:text-white" />
                    </a>
                  </div>
                  <div className="p-2 border border-transparent w-fit rounded-lg hover:border hover:border-primary group transition-all duration-300">
                    <a href="https://t.me/eyob_Scar" target="_blank">
                      <FaTelegram className="text-2xl  group-hover:text-primary/80 transition-all duration-300 text-black dark:text-white"  />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
