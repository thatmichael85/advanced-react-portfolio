import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Slide, Collapse, SlideFade, useDisclosure  } from "@chakra-ui/react";
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
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toggleNavBarVisbility = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      onClose();
    } else {
      // if scroll up show the navbar
      onOpen();
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    const onScroll = (event) => {
      event.preventDefault();
      toggleNavBarVisbility();
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [lastScrollY]);

  return (
    <Collapse in={isOpen} transition={{exit: {duration: 0.1}, enter: {duration: 0.1}}}>
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
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
    </Collapse>
  );
};
export default Header;
