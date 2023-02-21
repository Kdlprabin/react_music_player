import React from 'react'
import { VStack, HStack, Text, Box } from '@chakra-ui/react'

function MediaItem() {
  return (
    <VStack>
      <Box width={"200px"} height={'200px'} borderRadius={'5px'} border={'1px solid #aeabaa'} backgroundColor={'#1b1a1a'}>
      </Box>
      <Text>Name</Text>
    </VStack>);
}


function index() {
  return (
    <VStack backgroundColor={'#2a2826'} width={'100%'} height={'100%'} alignItems={'Left'} paddingLeft={'50'} overflow={'scroll'} overscroll={'contain'} gap={'10'}>
      <Text
        fontSize={'40px'}
      >Home</Text>
      <Text
        fontSize={'24px'}
      >Recent Media</Text>
      <HStack gap={'10'}>
        <MediaItem />
        <MediaItem />
        <MediaItem />
        <MediaItem />
        <MediaItem />
      </HStack>
      <HStack gap={'10'}>
        <MediaItem />
        <MediaItem />
        <MediaItem />
        <MediaItem />
        <MediaItem />
      </HStack>
      <HStack gap={'10'}>
        <MediaItem />
        <MediaItem />
        <MediaItem />
        <MediaItem />
        <MediaItem />
      </HStack>
    </VStack>
  )
}

export default index
