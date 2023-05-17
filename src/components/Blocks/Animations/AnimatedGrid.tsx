import {FC, useRef, useEffect} from 'react'
import { Text, Grid, GridItem, Box } from "@chakra-ui/react";
import { motion, useAnimation } from 'framer-motion';
import useHover from '@/hooks/useHover';

const AnimatedGrid:FC<{count: string; description: string, border?: string}> = ({count, description, border}: {count: string; description: string, border?: string}) => {
    const ref = useRef(null);
    const isHovered = useHover(ref);



    return <Grid ref={ref} 
            templateColumns={"repeat(7, 1fr)"} gap={16} 
            _hover={{bg: 'black'}}
            borderBottomWidth={border || 1}
            borderColor={'gray.600'} 
            color="gray.500"
            py={10}  px={{ base: 4, '2xl': 28 }} cursor={"pointer"}
            >
            <Box as={GridItem} colSpan={3}>
                <Text fontSize={148} color={isHovered ? 'white' : "inherit"} >{count}</Text>
            </Box>
            <Box as={GridItem} colSpan={4}>
                <Text fontSize={24} color={isHovered ? 'white' : "gray.600"} lineHeight={1.5} mt={6}>
                    {description}
                </Text>
            </Box>
        </Grid>
}

export default AnimatedGrid
