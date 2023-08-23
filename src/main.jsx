import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  ChakraProvider,
  ColorModeScript,
  ThemeProvider,
} from "@chakra-ui/react";
import theme from "./theme";

// const config = {
//   initialColorMode: "dark",
//   useSystemColorMode: false
// }

// const theme = extendTheme({
//   config
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
   
  </ChakraProvider>
);
