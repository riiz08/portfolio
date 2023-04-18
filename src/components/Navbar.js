import React from "react";
import { Navbar } from "flowbite-react";

const NavigationBar = () => {
  return (
    <div>
      <Navbar
        fluid={true}
        className="dark:bg-gray-900/50 backdrop-blur-md fixed w-full z-20 top-0 left-0"
        rounded={true}
      >
        <Navbar.Brand>
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="#about">About</Navbar.Link>
          <Navbar.Link href="#projects">Project</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
