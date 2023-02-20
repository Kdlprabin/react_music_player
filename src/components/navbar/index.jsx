import { VStack, Divider, IconButton } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineHome, AiOutlineMenuUnfold } from 'react-icons/ai'
import { HiOutlineMusicNote } from 'react-icons/hi'
import { BsMusicPlayer } from 'react-icons/bs'
import { TfiVideoClapper } from 'react-icons/tfi'
function index() {
    return (
        <VStack margin={'10px'} width={'40px'} height={'100%'}>
            <IconButton icon={<AiOutlineMenu />} />
            <IconButton icon={<AiOutlineSearch />} />
            <IconButton icon={<AiOutlineHome />} />
            <IconButton icon={<HiOutlineMusicNote />} />
            <IconButton icon={<TfiVideoClapper />} />
            <Divider />
            <IconButton icon={<AiOutlineMenuUnfold />} />
            <IconButton icon={<BsMusicPlayer />} />
        </VStack>
    )
}

export default index
