import React from 'react'
import { HStack, Input, Text } from '@chakra-ui/react'
import { audio1  } from '../../assets/audioFiles'
function Progressbar() {
    return (
        <HStack display={'flex'} justify={'space-around'} width={'100%'} pl={'4.5%'}>
            <Text width={'10%'}>08: 40</Text>
            <Input type={'range'} width={'60%'} cursor={'pointer'} src={audio1} />
            {/* <audio src={'../../assets/song1.mp3'} controls/> */}
            <Text width={'10%'} textAlign={'right'}>05: 00</Text>
        </HStack>
    )
}

export default Progressbar
