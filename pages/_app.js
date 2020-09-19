import '../styles/globals.css';
import {
  ChakraProvider,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/core';
import { theme } from '../theme/theme';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.200', '#1A202C');
  const color = useColorModeValue('gray.200', 'gray.800');
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AnimatePresence initial={false} exitBeforeEnter>
        <Navbar />
        <Component {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;
