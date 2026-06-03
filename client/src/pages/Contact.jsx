import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { SendHorizonal } from "lucide-react";
import { toast } from "react-hot-toast";
import {FaLinkedin,FaWhatsapp,FaGithub,} from "react-icons/fa";
import Confetti from "react-confetti";

const Contact = () => {
  
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [active, setActive] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  function sendEmail() {
    return emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      userData,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY,
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setActive(true);
    setShowConfetti(true);
    try {
      console.log(userData);
      await sendEmail();
      toast.success("Your message has been sent successfully .", {
        id: "once",
      });

      setActive(false);
      setUserData({name:"",email:"",subject:"",message:""})

      setTimeout(() => {
        setShowConfetti(false);
      }, 2000);
    } catch (error) {
      console.log(error.message);
      setActive(false);
      setShowConfetti(false);
      toast.error("Failed to send,Please try again", { id: "once" });
    }
  };
  return (
    <div
      id="contact"
      className="relative min-h-screen max-w-full scroll-mt-16"
    >
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          gravity={0.3}
          style={{ zIndex:10 }}
          numberOfPieces={600}
        />
      )}
      <h2 className="text-center text-3xl mt-16 py-2 bg-gray-800/50">Contact </h2>
      <div className="container  max-w-7xl  flex flex-col md:flex-row justify-evenly items-center gap-10 relative px-16 mt-8">
        <form
          className=" bg-blue-900/15  rounded-2xl w-72 sm:w-[70%]  shadow-inner shadow-blue-900 px-3 py-5"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col  px-6 py-3 gap-6">
            <div className="flex justify-between items-center  ">
              <label htmlFor="name" className="hover:underline text-left whitespace-nowrap">
                Name :
              </label>
              <input
                id="name"
                required
                type="text"
                placeholder="Your Name ...."
                value={userData.name}
                className="focus:outline-none border w-2/3 border-blue-600 rounded-md px-2 py-1"
                onChange={(e) => {
                  setUserData({ ...userData, name: e.target.value });
                }}
              />
            </div>
            <div className="flex justify-between items-center ">
              <label htmlFor="email" className="hover:underline text-left whitespace-nowrap">
                Email :
              </label>
              <input
                id="email"
                type="email"
                value={userData.email}
                required
                placeholder="Your Email ...."
                className="focus:outline-none border w-2/3  border-blue-600 rounded-md px-2 py-1"
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
              ></input>
            </div>
            <div className="flex justify-between items-center  ">
              <label htmlFor="subject" className="hover:underline text-left whitespace-nowrap">
                Subject :
              </label>
              <input 
                id="subject"
                type="text"
                value={userData.subject}
                required
                placeholder="Title?"
                className="focus:outline-none border w-2/3 border-blue-600 rounded-md px-2 py-1"
                onChange={(e) => {
                  setUserData({ ...userData, subject: e.target.value });
                }}
              ></input>
            </div>
            <div className="flex justify-between items-center  ">
              <label htmlFor="message" className="hover:underline text-left whitespace-nowrap">
                Message :
              </label>
              <textarea
                id="message"
                required
                value={userData.message}
                placeholder="Your Message ......."
                className=" focus:outline-none border  h-16 sm:h-12 w-2/3 border-blue-600 rounded-md px-2 py-1"
                onChange={(e) => {
                  setUserData({ ...userData, message: e.target.value });
                }}
              ></textarea>
            </div>
          </div>
          {/* send button */}

          <motion.button
            whileTap={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 2000, damping: 5 }}
            className="w-full  bg-blue-800/50 hover:bg-blue-600/50 outline-none focus:ring ring-blue-500 rounded-md px-4 py-2 cursor-pointer  "
            type="submit"
            disabled={active}
          >
            {" "}
            {active ? "Please wait..." : "Send Message"}
            <SendHorizonal className="size-7 inline mx-2" />
          </motion.button>
        </form>
        <div className="space-y-4">
          <h2 className="text-2xl md:text-4xl mb-4 whitespace-nowrap ">Connect with Me </h2>
          <div className="flex justify-evenly text-3xl gap-2  ">
            <a
              href={"https://github.com/Muthu0512?tab=repositories"}
              target="blank" rel="noopener noreferrer"
            >
              <FaGithub className="size-6 md:size-12  fill-gray-400  rounded-md shadow-xl shadow-white/80 hover:scale-110 transition-all duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/muthupandi-full-stack-web-developer"
              target="blank" rel="noopener noreferrer"
            >
              <FaLinkedin className="size-6 md:size-12   fill-sky-600 rounded-md shadow-xl shadow-blue-700 hover:scale-110 transition-all duration-300" />
            </a>
            <a href={"https://wa.me/7502033862"} target="blank" rel="noopener noreferrer">
              <FaWhatsapp className="size-6 md:size-12   fill-green-600  rounded-md shadow-xl shadow-green-700 hover:scale-110 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Contact;
