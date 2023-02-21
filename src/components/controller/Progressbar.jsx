import React from 'react'
import { HStack, Progress, Text } from '@chakra-ui/react'
function Progressbar() {
    return (
        <HStack gap={'6'}>
            <Text width={'10vw'}>Prog Time</Text>
            <Progress value={80} colorScheme='blue' width={'60vw'} isIndeterminate />
            <Text width={'10vw'}>Total Time</Text>
        </HStack>
    )
}

export default Progressbar
