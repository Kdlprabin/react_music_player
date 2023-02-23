import React from 'react'
import { HStack, Input, Text } from '@chakra-ui/react'
import { audio1  } from '../../assets/audioFiles'
function Progressbar() {
    return (
        <HStack gap={'6'}>
            <Text width={'10vw'}>08: 40</Text>
            {/* <Input type={'range'} width={'70vw'} cursor={'pointer'} src={audio1} /> */}
            <audio src={'../../assets/song1.mp3'} controls/>
            <Text width={'10vw'}>05: 00</Text>
        </HStack>
    )
}

export default Progressbar
