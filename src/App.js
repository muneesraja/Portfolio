import React from "react";
import "./Core_styles/Styles.scss";
import Nav from "./Components/UI/Nav";
import Hero from "./Components/UI/Hero";
import About from "./Components/UI/About";
import Skills from "./Components/UI/Skills";

const App = () => {
  const skills = [
    {
      name: "HTML",
      skillLevel: 100,
    },
    {
      name: "CSS",
      skillLevel: 100,
    },
    {
      name: "js",
      skillLevel: 100,
    },
    {
      name: "Bootstrap",
      skillLevel: 90,
    },
    {
      name: "React",
      skillLevel: 80,
    },
    {
      name: "Node.js",
      skillLevel: 80,
    },
    {
      name: "Express.js",
      skillLevel: 80,
    },
    {
      name: "MongoDB",
      skillLevel: 80,
    },
  ];
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills skills={skills} />
    </>
  );
};

export default App;
