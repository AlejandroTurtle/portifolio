import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#251C31",
        color: "white",
      },
    },
  },
});

export default Theme;
