import { darken } from "@chakra-ui/theme-tools"

export const buttonStyles = {
  baseStyle: {},
  sizes: {},
  variants: {
    primary: {
      bg: "myGreen.300",
      color: "white",
      _hover: {
        bg: darken("myGreen.300", 10),
        _disabled: {
          bgColor: "myGreen.300"
        }
      },
    },
    link: {
      bg: "transparent",
      color: "myGreen.100",
      fontSize: "xl",
      _focus: {
        outline: "none"
      },
      _hover: {
        cursor: "pointer",
        textDecoration: "none"
      }
    },
    linkMobile: {
      bg: "transparent",
      color: "myGreen.50",
      fontSize: "2xl",
      _focus: {
        outline: "none"
      },
      _hover: {
        cursor: "pointer",
        textDecoration: "none"
      }
    }
  }
}