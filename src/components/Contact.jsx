import React, { useRef } from "react";
import { easeInOut, motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const SUCCESS = "success";
  const FAIL = "fail";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_19tap3a",
        "template_ldq7oio",
        form.current,
        "nGSj8IUlPjIin2IFF"
      )
      .then(
        (result) => {
          console.log(result.text);
          notify("success");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          notify("fail");
        }
      );
  };

  const notify = (res) => {
    if (res === SUCCESS) {
      toast.success("Message sent!", {
        position: "top-center",
        autoClose: 3000,
        transition: Slide,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
    } else if (res === FAIL) {
      toast.error("Message not sent!", {
        position: "top-center",
        autoClose: 3000,
        transition: Slide,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <>
      <div className="w-screen relative">
        <div className="bg-grain lg:opacity-90 opacity-50"></div>
        <section
          id="contact"
          className="w-full max-w-[1240px] min-h-screen py-8 mx-auto px-6 font-khand flex justify-center items-center"
        >
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-center items-center">
              {/* headline */}
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="flex-1 lg:max-w-[500px]"
              >
                <div className=" flex flex-col justify-center items-center lg:items-start">
                  <h3 className=" text-[#e16162] text-md md:text-2xl uppercase font-semibold">
                    Get in touch
                  </h3>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center lg:text-left font-bold leading-[1] mb-4">
                    <span className=" text-paragraph block">Let's work </span>
                    together!
                  </h2>
                </div>
              </motion.div>
              {/* form */}
              <motion.form
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                ref={form}
                onSubmit={sendEmail}
                className="flex-1 font-switzer border flex flex-col lg:max-w-[500px]
                        justify-center items-center border-paragraph/50 rounded-lg p-4 pb-8 
                        text-sm lg:text-lg"
              >
                <input
                  className="w-full bg-transparent outline-none border-b p-2 border-paragraph/50 hover:border-headline focus:border-headline transition-all duration-300 mb-4"
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                />
                <input
                  className="w-full bg-transparent outline-none border-b p-2 border-paragraph/50 hover:border-headline focus:border-headline transition-all duration-300 mb-4"
                  type="email"
                  name="user_email"
                  placeholder="Your email"
                />
                <textarea
                  className="w-full bg-transparent outline-none border-b p-2 border-paragraph/50 hover:border-headline focus:border-headline transition-all duration-300"
                  name="message"
                  cols={50}
                  rows={7}
                  placeholder="Your message..."
                ></textarea>
                <input
                  type="submit"
                  value="Send message"
                  className="bg-btn-color cursor-pointer text-btn-text-color text-md sm:text-xl md:text-2xl font-khand font-semibold lg:font-bold rounded-sm p-2 
                               mt-8 duration-200 ease-in hover:drop-shadow-[5px_5px_0px_#000000] hover:translate-x-[-2px] z-[2]"
                />
              </motion.form>
            </div>
          </div>
          <ToastContainer />
        </section>
      </div>
    </>
  );
};

export default Contact;
