import { ChakraProvider } from "@chakra-ui/react"
import { customTheme } from "../styles/theme"
import { Provider } from "next-auth/client"
import 'swiper/css';
import { DataProvider } from "../context/GlobalState";
import '../styles/swiper.css';


function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <DataProvider>
        <ChakraProvider theme={customTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </DataProvider>
    </Provider>
  )
}

export default MyApp
