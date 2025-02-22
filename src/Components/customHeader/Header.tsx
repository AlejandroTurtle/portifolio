import { Box, Flex, Heading, Link, Text, IconButton } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  return (
    <Flex
      as="header"
      justify="space-between"
      p={4}
      width="100%"
      position="fixed"
      top="0"
      zIndex="1000"
      boxShadow="md"
    >
      <Text
        as={"h1"}
        fontWeight={"bold"}
        fontFamily={"monospace"}
        fontSize={"xl"}
      >
        Alejandro Dev
      </Text>
      <Box display="flex" gap="20px" alignItems="center">
        <ScrollLink to="inicio" smooth={true} duration={500}>
          <Link>
            <Heading as="h1" size="md" fontFamily={"monospace"}>
              Ínicio
            </Heading>
          </Link>
        </ScrollLink>
        <ScrollLink to="projetos" smooth={true} duration={500}>
          <Link>
            <Heading as="h1" size="md" fontFamily={"monospace"}>
              Projetos
            </Heading>
          </Link>
        </ScrollLink>
        <ScrollLink to="contato" smooth={true} duration={500}>
          <Link>
            <Heading as="h1" size="md" fontFamily={"monospace"}>
              Contato
            </Heading>
          </Link>
        </ScrollLink>
        <Link href="https://github.com/AlejandroTurtle" isExternal>
          <IconButton
            aria-label="GitHub"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
                fill="#181717"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.125-.305-.535-1.527.115-3.18 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.875.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.81 1.1.81 2.22v3.285c0 .32.215.695.825.575C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            }
            variant="ghost"
            size="lg"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/alejandro-gomes/" isExternal>
          <IconButton
            aria-label="LinkedIn"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
                fill="#0A66C2"
              >
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.58c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.15 1.45-2.15 2.95v5.71h-3.56V9h3.42v1.56h.05c.48-.91 1.66-1.86 3.42-1.86 3.66 0 4.34 2.41 4.34 5.54v6.21z" />
              </svg>
            }
            variant="ghost"
            size="lg"
          />
        </Link>
      </Box>
    </Flex>
  );
}

export default Header;
