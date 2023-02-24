import React from 'react'
import {HStack,Text} from '@chakra-ui/react'
import {AiOutlinePlayCircle} from 'react-icons/ai'
function Header() {
  return (
    <HStack width={'100%'} padding={'10px'}>
      <AiOutlinePlayCircle />
      <Text
      fontSize={'16px'}
      >Music Player</Text>
    </HStack>
  )
}

export default Header
