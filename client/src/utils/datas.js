import blog from "../assets/firebase_blog.png";
import bulkmail from "../assets/bulkmail.png";
import countrycard from "../assets/countrycard.png";
import ecommerce from "../assets/E-commerce.png"
import greenden from "../assets/greenden.png";
import netflix from "../assets/netflix3.png"
import nostra from "../assets/nostra.png";
import quiz from "../assets/quiz.png";
import registration from "../assets/registration.png";
import trip from "../assets/trip.png";
import udemy from "../assets/udemy.png";
import weather from "../assets/weather.png";
import todo from "../assets/ActTODO.png";

import { useState } from "react";


export const projects = [

   {
    title: "E - Commerece",
    image: ecommerce,
    description:"A full pledged MERN application build with CRUD operations.",
    technologies: ["MERN Stack"],
    gitLink: "https://github.com/Muthu0512/E-commerce-Admin-Payment.git",
    liveLink: "https://e-commerce-admin-payment.onrender.com"
  },
    {
    title: "Netfilx Clone",
    image: netflix,
    description:"A full pledged MERN application build using real time movie API",
    technologies: ["MERN Stack","Real time API"],
    gitLink: "https://github.com/Muthu0512/Movie_streaming_app.git",
    liveLink: "https://movie-streaming-app-8d90.onrender.com"
  },
  {
    title: "Blog Portfolio",
    image: blog,
    description:
      "MERN-based blog platform with Firebase authentication. Features include secure user portals, dynamic content rendering, and a fully responsive dashboard .",
    technologies: ["FrontEnd", "Firebase"],
    gitLink: "https://github.com/Muthu0512/blog-project.git",
    liveLink: "https://blog-project-henna-one.vercel.app",
  },
 
  {
    title: "Country Stats",
    image: countrycard,
    description: "Country card app created with API integration",
    technologies: ["Frontend", "API"],
    gitLink: "https://github.com/Muthu0512/country_card.git",
    liveLink: "https://country-card-lovat.vercel.app",
  },
  {
    title: "Live Weather Tracker",
    image: weather,
    description:"Live Weather Application built using Real Time API along with HTML,Tailwind_CSS and JavaScript ",
    technologies: ["Frontend","API"],
    gitLink: "https://github.com/Muthu0512/Weather_App_FrontEnd.git",
    liveLink: "https://weather-app-front-end-wine.vercel.app"
  },
  
  {
    title: "Quiz app",
    image: quiz,
    description: "Quiz app created using HTML,CSS and JavaScript  ",
    technologies: ["React", "Tailwind CSS"],
    gitLink: "https://github.com/Muthu0512/quiz_app.git",
    liveLink: "https://quiz-app-flame-seven-66.vercel.app",
  },
  // {
  //   title: "Student Registration Form",
  //   image: registration,
  //   description:"Student registration form with JS functionaliy along with HTML and CSS..  ",
  //   technologies: ["Html","Css","JavaScript"],
  //   gitLink: "https://github.com/Muthu0512/Student_Form.git",
  //   liveLink: "https://student-form-azure.vercel.app"
  // },
  
  
   {
    title: "Bulk Mail",
    image: bulkmail,
    description:
      "Functioanlity called NODEMAILER which is used to build this app to send multiple Emails at once...",
    technologies: ["Frontend", "Express.js", "Node.js", "Node Mailer"],
    gitLink: "https://github.com/Muthu0512/node_mailer.git",
    liveLink: "https://node-mailer-neon.vercel.app",
  },
  {
     title: "Activity Tracker",
    image: todo,
    description:"TODO app using frontend frame work #React..",
    technologies: ["Frontend"],
    gitLink: "https://github.com/Muthu0512/Actodo-react.git",
    liveLink: "https://actodo-react-virid.vercel.app"
  },
   {
    title: "Simple E-commerce",
    image: nostra,
    description:
      "Simple E-commerce website using JS functionallity along with HTML and CSS.. ",
    technologies: ["Html", "CSS", "JavaScript"],
    gitLink: "https://github.com/Muthu0512/Nostra_E-Commerce.git",
    liveLink: "https://nostra-e-commerce-xi.vercel.app"
  },
  {
    title: "Udemy ",
    image: udemy,
    description:"Udemy clone app build using HTML and CSS ",
    technologies: ["Html","Css"],
    gitLink: "https://github.com/Muthu0512/udemy-clone-react.git",
    liveLink: "https://udemy-clone-react-nine-tawny.vercel.app",
  },
 
  {
    title: "Trip Advisor",
    image: trip,
    description:"Trip adivisor with HTML and CSS",
    technologies: ["Html","CSS"],
    gitLink: "https://github.com/Muthu0512/Tripadivisor-clone.git",
    liveLink: "https://tripadivisor-clone-nine.vercel.app"
  },
  {
    title: "Greenden",
    image: greenden,
    description: "website for plants created with HTML and TAILWIND_CSS ",
    technologies: ["Html", "Tailwind CSS"],
    gitLink: "https://github.com/Muthu0512/Greenden-tailwindcss.git",
    liveLink: "https://greenden-tailwindcss.vercel.app",
  },

 
];


 
