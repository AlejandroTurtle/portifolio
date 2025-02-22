import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const initialValues = {
    nome: "",
    email: "",
    mensagem: "",
  };

  const validationSchema = Yup.object({
    nome: Yup.string().required("Nome é obrigatório"),
    email: Yup.string().email("Email inválido").required("Email é obrigatório"),
    mensagem: Yup.string().required("Mensagem é obrigatória"),
  });

  const handleSubmit = async (values: typeof initialValues) => {
    console.log(values);
    const response = await fetch(
      "https://api-apontamento.vercel.app/api/apontamento/entraremContato",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    if (response.ok) {
      alert("Mensagem enviada com sucesso!");
    } else {
      alert("Erro ao enviar mensagem.");
    }
  };
  return (
    <Box p={8} borderRadius="lg" boxShadow="lg" maxW="600px" mx="auto">
      <Heading as="h2" size="xl" mb={4} textAlign="center">
        Entre em Contato
      </Heading>
      <Text mb={8} textAlign="center">
        Preencha o formulário abaixo para enviar uma mensagem.
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <VStack spacing={4}>
              <FormControl isInvalid={!!errors.nome && touched.nome}>
                <FormLabel htmlFor="nome">Nome</FormLabel>
                <Field
                  as={Input}
                  id="nome"
                  name="nome"
                  placeholder="Seu nome"
                />
                <FormErrorMessage>{errors.nome}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.email && touched.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Seu email"
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.mensagem && touched.mensagem}>
                <FormLabel htmlFor="mensagem">Mensagem</FormLabel>
                <Field
                  as={Textarea}
                  id="mensagem"
                  name="mensagem"
                  placeholder="Sua mensagem"
                />
                <FormErrorMessage>{errors.mensagem}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="blue" width="full">
                Enviar
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ContactForm;
