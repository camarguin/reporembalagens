import { ChakraProvider } from "@chakra-ui/react"
import { customTheme } from "../styles/theme"
import { Provider } from "next-auth/client"
import 'swiper/css';
import '../styles/swiper.css';


function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
