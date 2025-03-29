import {
  ChakraProvider,
  Box,
  Image,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import perfil from "./assets/perfil.jpg";
import Theme from "./theme";
import Header from "./Components/customHeader/Header";
import Typical from "react-typical";
import Projects from "./Components/CustomProjects/Projects";
import Skills from "./Components/CustomSkills/Skills";
import ContactForm from "./Components/CustomContact/Contact";

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <Header />
      <Flex
        justify="center"
        align="center"
        h="100vh"
        p={8}
        flexWrap="wrap"
        id="Inócio"
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Image
          src={perfil}
          alt="Perfil"
          borderRadius="3xl"
          width={{ base: "80%", md: "40%", lg: "30%" }}
          p="4"
          borderWidth={2}
          borderColor="blackAlpha.900"
          boxShadow="lg"
        />
        <Box
          maxW={{ base: "100%", md: "700px" }}
          ml={{ base: 0, md: 10 }}
          mt={{ base: 6, md: 0 }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            color="white"
          >
            Olá! <br /> Meu nome é Alejandro
          </Text>
          <Text fontSize={{ base: "2xl", md: "3xl" }} mt="4" color="white">
            <Typical
              steps={["Sou desenvolvedor Mobile", 50000, "", 1000]}
              loop={Infinity}
              wrapper="span"
            />
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            mt="4"
            color="white"
            lineHeight="1.6"
          >
            Olá! Sou <strong>Alejandro</strong>, desenvolvedor mobile com
            experiência em <strong>React Native</strong>, criando aplicações
            robustas e funcionais.
            <br />
            <br />
            Com 24 anos e uma <strong>paixão genuína por tecnologia</strong>,
            sempre busco aprimorar minhas habilidades para entregar soluções
            inovadoras e eficientes. Atualmente, estou expandindo meus
            conhecimentos em <strong>Kotlin</strong> para aprofundar minha
            atuação no desenvolvimento mobile e oferecer ainda mais valor aos
            projetos em que trabalho.
            <br />
            <br />
            Estou sempre em busca de <strong>novos desafios</strong> e
            oportunidades para crescer profissionalmente. <br />
          </Text>
          <Button
            mt={4}
            colorScheme="blue"
            size="lg"
            onClick={() =>
              window.open("/CurrículoAlejandroGomes.pdf", "_blank")
            }
          >
            Baixar Currículo Português
          </Button>
          <Button
            mt={4}
            ml={4}
            colorScheme="blue"
            size="lg"
            onClick={() =>
              window.open("/CurrículoAlejandroGomesInglês.pdf", "_blank")
            }
          >
            Baixar Currículo Inglês
          </Button>
        </Box>
      </Flex>
      <Projects />
      <Skills />
      <Box id="contato" p={8}>
        <ContactForm />
      </Box>
    </ChakraProvider>
  );
}

export default App;
