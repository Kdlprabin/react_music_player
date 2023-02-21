import React from 'react'
import { VStack } from '@chakra-ui/react'
import Progressbar from './Progressbar'
import MainController from './mainController'
function index() {
  return (
    <VStack borderTop={'2px solid #341a3e'} paddingBottom={'10px'} backgroundColor={'#2a2826'} textColor={'white'} position={'fixed'} bottom={'0'} gap={'2'} width={'100%'}>
      <Progressbar/>
      <MainController />
    </VStack>
  )
}

export default index
