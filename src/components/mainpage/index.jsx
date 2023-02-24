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
    <VStack backgroundColor={'#2a2826'} width={'100%'} height={'100%'} alignItems={'center'} paddingBottom={'110px'} paddingLeft={'50'} overflow={'scroll'} overscroll={'contain'} gap={'10'}>
      <Text
        fontSize={'32px'}
        textAlign={'left'}
        width={'100%'}
        display={'inline'}
        paddingLeft={'4%'}
      >Home</Text>
      <Text
        paddingLeft={'4%'}
        fontSize={'20px'}
        textAlign={'left'}
        width={'100%'}
        display={'inline'}
      >Recent media</Text>
      <HStack width={'100%'} display={'flex'} justify={'space-evenly'}>
        <MediaItem />
        <MediaItem />
        <MediaItem />
        <MediaItem />
        <MediaItem />
      </HStack>
      <HStack width={'100%'} display={'flex'} justify={'space-evenly'}>
        <MediaItem />
        <MediaItem />
        <MediaItem />
        <MediaItem />
        <MediaItem />
      </HStack>
      <HStack width={'100%'} display={'flex'} justify={'space-evenly'}>
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
