import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#251C31", // Cor de fundo (exemplo: cinza escuro)
        color: "white", // Cor do texto
      },
    },
  },
});

export default Theme;
