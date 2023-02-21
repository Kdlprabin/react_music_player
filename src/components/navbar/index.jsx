import { VStack, Box, Divider, IconButton } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineMenu, AiFillSetting, AiOutlineSearch, AiOutlineHome, AiOutlineMenuUnfold } from 'react-icons/ai'
import { HiOutlineMusicNote } from 'react-icons/hi'
import { BsMusicPlayer } from 'react-icons/bs'
import { TfiVideoClapper } from 'react-icons/tfi'
function index() {
    return (
        <VStack justify={'space-between'} padding={'10px'} height={'100%'} paddingTop={'30px'} backgroundColor={'#1b1a1a'}>
            <VStack gap={'12'}>
                <IconButton width={'24px'} height={'24px'} icon={<AiOutlineMenu />} />
                <IconButton width={'24px'} height={'24px'} icon={<AiOutlineSearch />} />
                <IconButton width={'24px'} height={'24px'} icon={<AiOutlineHome />} />
                <IconButton width={'24px'} height={'24px'} icon={<HiOutlineMusicNote />} />
                <IconButton width={'24px'} height={'24px'} icon={<TfiVideoClapper />} />
                <Divider />
                <IconButton width={'24px'} height={'24px'} icon={<AiOutlineMenuUnfold />} />
                <IconButton width={'24px'} height={'24px'} icon={<BsMusicPlayer />} />
            </VStack>
            <IconButton width={'24px'} height={'18px'} icon={<AiFillSetting />} />
        </VStack>
    )
}

export default index
