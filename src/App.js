import './App.css';
import SimpleSidebar from './components/SimpleSidebar';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
      <SimpleSidebar/>
    </div>
    </ChakraProvider>
    
  );
}

export default App;
