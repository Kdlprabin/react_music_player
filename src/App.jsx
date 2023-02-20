import Header from './components/Header'
import Navbar from './components/navbar'
import Mainpage from './components/mainpage'
import Controller from './components/controller'
import { HStack, VStack } from '@chakra-ui/react'
function App() {
  return (
    <VStack>
      <HStack className="App" width={'100vw'} height={'100vh'}>
        <Navbar />
        <VStack width={'100%'} height={'100vh'}>
          <Header />
          <Mainpage />
        </VStack>
      </HStack>
      <Controller />
    </VStack>
  )
}

export default App
