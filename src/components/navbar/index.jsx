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
                <IconButton width={'32px'} height={'32px'} icon={<AiOutlineMenu size={'16px'}  />} />
                <IconButton width={'32px'} height={'32px'} icon={<AiOutlineSearch size={'16px'}   />} />
                <IconButton width={'32px'} height={'32px'} icon={<AiOutlineHome size={'16px'}   />} />
                <IconButton width={'32px'} height={'32px'} icon={<HiOutlineMusicNote size={'16px'}   />} />
                <IconButton width={'32px'} height={'32px'} icon={<TfiVideoClapper size={'16px'}   />} />
                <Divider />
                <IconButton width={'32px'} height={'32px'} icon={<AiOutlineMenuUnfold size={'16px'}   />} />
                <IconButton width={'32px'} height={'32px'} icon={<BsMusicPlayer size={'16px'}   />} />
            </VStack>
            <IconButton width={'24px'} height={'18px'} icon={<AiFillSetting size={'16px'}   />} />
        </VStack>
    )
}

export default index
