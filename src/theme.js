// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
// 3. extend the theme
const theme = extendTheme({ config });

export function deleteColorModeInLocalStorage() {
  window.localStorage.removeItem("chakra-ui-color-mode");
  console.log('deleted "chakra-ui-color-mode" from local storage');
  console.log("You can now refresh to see how a first visit looks like.");
}

// After 3s reset the localStorage
setTimeout(deleteColorModeInLocalStorage, );

export default theme;
