import { HStack, Box, Text, IconButton } from '@chakra-ui/react'
import { BsShuffle, BsFillPlayCircleFill } from 'react-icons/bs'
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi'
function mainController() {
    return (
        <HStack gap={'2'}>
            <Box height={'10vh'} width={'10vw'} backgroundColor={'white'} borderRadius={'5px'}></Box>
            <Text>Name</Text>
            <Box>
                <IconButton icon={<BsShuffle/>} />
                <IconButton icon={<BiSkipPrevious/>} />
                <IconButton icon={<BsFillPlayCircleFill/>} />
                <IconButton icon={<BiSkipNext/>} />
                <IconButton icon={<BsShuffle/>} />
            </Box>
        </HStack>
    )
}

export default mainController
