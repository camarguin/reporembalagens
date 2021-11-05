import { extendTheme } from "@chakra-ui/react";
import { buttonStyles as Button } from "./buttonStyles";
import { textStyles as Text } from "./textStyles";

const breakpoints = ['420px', '620px', '1024px', '1900px']

breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.md = breakpoints[2]
breakpoints.md = breakpoints[3]

export const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Red Hat Text",
        padding: '0',
        margin: '0'
      },
    },
  },
  colors: {
    myGreen: {
      100: '#86B8A4',
      200: '#6DAA92',
      300: '#0C7149',
    }
  },
  components: {
    Button,
    Text,
  },
  breakpoints
})