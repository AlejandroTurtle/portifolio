import React from "react";
import { Box, Heading, Text, Button, Image, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProjetoApontamento from "../../assets/ProjetoApontamento.png";
import ProjetoLoja from "../../assets/ProjetoLoja.jpg";
import ProjetoRelacionamento from "../../assets/ProjetoRelacionamento.jpg";
import ApiAleInformatica from "../../assets/ApiAleInformatica.png";
import ApiLivros from "../../assets/ApiLivros.png";
import MvcCSharp from "../../assets/MvcCSharp.png";
import ApiApontamento from "../../assets/ApiApontamento.png";
import ApiLoja from "../../assets/ApiLoja.png";
import ApiDelivery from "../../assets/ApiDelivery.png";

const projects = [
  {
    title: "App de relacionamento",
    desc: "App parecido com o Tinder, mas que para conversar com outras pessoas é necessário realizar o pagamento.",
    img: ProjetoRelacionamento,
    link: "https://github.com/AlejandroTurtle",
  },
  {
    title: "App Ale Informática",
    desc: "App para a minha loja de informática contendo todos os produtos disponíveis para a venda.",
    img: ProjetoLoja,
    link: "https://play.google.com/store/apps/details?id=com.aleinformatica&pcampaignid=web_share",
  },
  {
    title: "Site de apontamento de horas",
    desc: "Site desenvolvido para apontamento de horas de trabalho.",
    img: ProjetoApontamento,
    link: "https://apontamento-pi.vercel.app/",
  },
  {
    title: "API Ale Informática",
    desc: "API desenvolvida para a minha loja de informática.",
    img: ApiAleInformatica,
    link: "https://github.com/AlejandroTurtle/API-AleInformatica",
  },
  {
    title: "Api de livros",
    desc: "CRUD de livros com verificação de conclusão de leitura.",
    img: ApiLivros,
    link: "https://github.com/AlejandroTurtle/API-Livros",
  },
  {
    title: "API com MVC em C#",
    desc: "API desenvolvida em C# com MVC.",
    img: MvcCSharp,
    link: "https://github.com/AlejandroTurtle/Crud-MVC",
  },
  {
    title: "API site de apontamento de horas",
    desc: "API desenvolvida para o site de apontamento de horas.",
    img: ApiApontamento,
    link: "https://github.com/AlejandroTurtle/API-Apontamento",
  },
  {
    title: "API de Loja",
    desc: "API de um sistema de loja onde é possível cadastrar fornecedores, clientes, produtos, vendas e tudo armazenado em tabelas com banco de dados SQL.",
    img: ApiLoja,
    link: "https://github.com/AlejandroTurtle/API-LOJA",
  },
  {
    title: "API de delivery",
    desc: "API de delivery que consegue controlar pedidos de um delivery baseado em um arquivo .JSON e consegue também criar pedidos seguindo os padrões dos pedidos do arquivo.",
    img: ApiDelivery,
    link: "https://github.com/AlejandroTurtle/DELIVERY-API",
  },
];

function ProjectsCarousel() {
  return (
    <Box id="projetos" textAlign="center" py={10}>
      <Heading fontSize="3xl">Portfólio</Heading>
      <Text fontSize="lg" color="gray.500">
        Trabalhos mais recentes
      </Text>

      <Box
        maxW="800px"
        mx="auto"
        mt={8}
        position="relative"
        pb="50px"
        sx={{ ".swiper-pagination": { position: "absolute", bottom: "-5px" } }}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Flex align="center" justify="center" p={5}>
                <Image
                  src={project.img}
                  alt={project.title}
                  borderRadius="md"
                  boxSize="300px"
                  objectFit="contain"
                />
                <Box ml={6} textAlign="left">
                  <Heading fontSize="2xl">{project.title}</Heading>
                  <Text
                    mt={2}
                    w={{ base: "100%", md: "300px" }}
                    fontFamily={"monospace"}
                    fontSize={"xl"}
                  >
                    {project.desc}
                  </Text>
                  <Button
                    mt={4}
                    colorScheme="red"
                    as="a"
                    href={project.link}
                    target="_blank"
                  >
                    Demo
                  </Button>
                </Box>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default ProjectsCarousel;
