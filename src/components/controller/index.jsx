import React from 'react'
import { VStack } from '@chakra-ui/react'
import Progressbar from './Progressbar'
import MainController from './mainController'
function index() {
  return (
    <VStack backgroundColor={'gray'} textColor={'white'} position={'fixed'} bottom={'10'} gap={'2'} width={'100%'}>
      <Progressbar/>
      <MainController />
    </VStack>
  )
}

export default index
