import React from 'react'
import {HStack,Text} from '@chakra-ui/react'
import {AiOutlinePlayCircle} from 'react-icons/ai'
function Header() {
  return (
    <HStack width={'100%'}>
      <AiOutlinePlayCircle />
      <Text>Music Player</Text>
    </HStack>
  )
}

export default Header
