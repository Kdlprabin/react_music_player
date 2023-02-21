import React from 'react'
import { VStack } from '@chakra-ui/react'
import Progressbar from './Progressbar'
import MainController from './mainController'
function index() {
  return (
    <VStack textColor={'white'} position={'fixed'} bottom={'10'} gap={'2'}>
      <Progressbar/>
      <MainController />
    </VStack>
  )
}

export default index
