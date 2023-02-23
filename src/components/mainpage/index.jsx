import React,{useEffect} from 'react'
import { VStack, HStack, Text } from '@chakra-ui/react'
import MediaItem from './MediaItem';
import { useSelector, useDispatch } from 'react-redux'
import { getMusic } from '../../redux/slices/musicApiSlice';
function index() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    console.log(state.music)
    state.music.play
  })
  useEffect(()=>{
    dispatch(getMusic())
  },[])
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
