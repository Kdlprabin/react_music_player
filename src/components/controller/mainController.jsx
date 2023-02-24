import { HStack, Box, Text, IconButton } from '@chakra-ui/react'
import { BsShuffle, BsFillPlayCircleFill, BsArrowsAngleExpand } from 'react-icons/bs'
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi'
import { HiOutlineSpeakerWave } from 'react-icons/hi2';
import { CgMiniPlayer } from 'react-icons/cg';
import { FiMoreHorizontal } from 'react-icons/fi';
import { TfiLoop } from 'react-icons/tfi'
function mainController() {
    return (
        <HStack px={'110'} width={'100vw'} display={'flex'} justify={'space-between'}>
            <HStack gap={'10'} width={'30vw'}>
                <Box height={'10vh'} width={'10vh'} backgroundColor={'transparent'} borderRadius={'5px'} border={'1px solid #fefefe'}></Box>
                    <Text width={'20vw'} fontSize={'1.5rem'} noOfLines={'1'} behavior={'scroll'}>Timile- Sushant KC covered by</Text>
            </HStack>
            <HStack gap={5} width={'30vw'} justify={'center'}>
                <IconButton icon={<BsShuffle size={'24px'} />} />
                <IconButton icon={<BiSkipPrevious size={'32px'} />} />
                <IconButton icon={<BsFillPlayCircleFill size={'40px'} />} />
                <IconButton icon={<BiSkipNext size={'32px'} />} />
                <IconButton icon={<TfiLoop size={'24px'} />} />
            </HStack>
            <HStack gap={10} width={'30vw'} justify={'right'}>
                <IconButton icon={<HiOutlineSpeakerWave size={'24px'} />} />
                <IconButton icon={<BsArrowsAngleExpand size={'16px'} />} />
                <IconButton icon={<CgMiniPlayer size={'24px'} />} />
                <IconButton icon={<FiMoreHorizontal size={'24px'} />} />
            </HStack>
        </HStack>
    )
}

export default mainController
