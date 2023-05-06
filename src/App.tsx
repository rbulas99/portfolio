import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  
  return (
    <>
      <ChakraProvider >
        <ColorModeProvider >
          <Header />
          <Main />
          <Footer />
        </ColorModeProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
