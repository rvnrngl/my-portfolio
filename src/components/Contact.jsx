import React, { useRef, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UseIsMobile } from "./UseIsMobile";

const Contact = () => {
  const [formObject, setFormObject] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { isMobile } = UseIsMobile();
  const SUCCESS = "success";
  const FAIL = "fail";
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const validation = await formValidation();

    if (!validation.isSuccess) {
      notify(FAIL, validation.responseMessage);
      return;
    }

    await emailjs
      .sendForm(
        "service_19tap3a",
        "template_ldq7oio",
        form.current,
        "nGSj8IUlPjIin2IFF"
      )
      .then(
        (result) => {
          notify(SUCCESS, validation.responseMessage);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          notify(FAIL, "An unexpected error occurred. Please try again later.");
        }
      );
  };

  const formValidation = async () => {
    const nameRegex = /^[^\W_0-9][A-Za-z\s]{2,}$/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    // check if input fields are empty
    if (
      formObject.name === "" ||
      formObject.email === "" ||
      formObject.message === ""
    ) {
      return {
        isSuccess: false,
        responseMessage: "Please fill in all required fields.",
      };
    }

    // check if name is not valid
    // It should be 3 or more characters
    // It should not start in special characters or white space
    if (!nameRegex.test(formObject.name)) {
      return {
        isSuccess: false,
        responseMessage:
          "Username must be at least 3 characters long and should not start with special characters.",
      };
    }

    // check if email is not valid
    if (!emailRegex.test(formObject.email)) {
      return {
        isSuccess: false,
        responseMessage: "Please enter a valid email address.",
      };
    }

    // return true if its all valid
    return {
      isSuccess: true,
      responseMessage: "Your email has been sent successfully.",
    };
  };

  const notify = (res, message) => {
    if (res === SUCCESS) {
      toast.success(message, {
        position: "top-center",
        autoClose: 3000,
        transition: Slide,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    } else if (res === FAIL) {
      toast.error(message, {
        position: "top-center",
        autoClose: 3000,
        transition: Slide,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
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
            <div className="flex flex-col gap-10 lg:flex-row justify-center items-center">
              {/* headline */}
              <motion.div
                variants={isMobile ? fadeIn("up", 0.2) : fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
                className="flex-1 lg:max-w-[500px]"
              >
                <div className=" flex flex-col justify-center items-center lg:items-start">
                  <h3 className=" text-[#e16162] text-md md:text-2xl uppercase font-medium lg:font-semibold">
                    Get in touch
                  </h3>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center lg:text-left font-semibold lg:font-bold leading-[1] mb-4">
                    <span className=" text-paragraph block">Let's work </span>
                    together!
                  </h2>
                </div>
              </motion.div>
              {/* form */}
              <motion.form
                variants={isMobile ? fadeIn("up", 0.4) : fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
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
                  value={formObject.name}
                  placeholder="Your name"
                  onChange={(event) =>
                    setFormObject((prev) => ({
                      ...prev,
                      name: event.target.value,
                    }))
                  }
                />
                <input
                  className="w-full bg-transparent outline-none border-b p-2 border-paragraph/50 hover:border-headline focus:border-headline transition-all duration-300 mb-4"
                  type="email"
                  name="user_email"
                  value={formObject.email}
                  placeholder="Your email"
                  onChange={(event) =>
                    setFormObject((prev) => ({
                      ...prev,
                      email: event.target.value,
                    }))
                  }
                />
                <textarea
                  className="w-full bg-transparent outline-none border-b p-2 border-paragraph/50 hover:border-headline focus:border-headline transition-all duration-300"
                  name="message"
                  value={formObject.message}
                  cols={50}
                  rows={7}
                  placeholder="Your message..."
                  onChange={(event) =>
                    setFormObject((prev) => ({
                      ...prev,
                      message: event.target.value,
                    }))
                  }
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
