import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { SlideFade } from "@chakra-ui/react";
const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setOpen] = useState(true);

  const toggleNavBarVisbility = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setOpen(false);
    } else {
      // if scroll up show the navbar
      setOpen(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    const onScroll = (event) => {
      toggleNavBarVisbility();
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [lastScrollY]);

  return (
    <SlideFade in={isOpen} offsetY="20px">
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration="1s"
        transitionTimingFunction="ease-in-out"
        backgroundColor="#18181b"
      >
        <Box color="white" maxWidth="1280px" margin="0 auto">
          <HStack
            px={16}
            py={1}
            justifyContent="space-between"
            alignItems="center"
          >
            <nav>
              <HStack spacing={2}>
                {socials.map((social) => (
                  <a key={social.url} href={social.url}>
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                ))}
              </HStack>
            </nav>
            <nav>
              <HStack spacing={8}>
                {
                  <a href="#projects" onClick={handleClick("projects")}>
                    Projects
                  </a>
                }
                {
                  <a href="#contact-me" onClick={handleClick("contactme")}>
                    Contact Me
                  </a>
                }
              </HStack>
            </nav>
          </HStack>
        </Box>
      </Box>
    </SlideFade>
  );
};
export default Header;
