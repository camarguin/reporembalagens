import { ChakraProvider } from "@chakra-ui/react"
import { customTheme } from "../styles/theme"
import 'swiper/css';
import '../styles/swiper.css';


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
