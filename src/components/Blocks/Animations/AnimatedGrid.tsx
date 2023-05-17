import {FC, useRef, useEffect} from 'react'
import { Text, Grid, GridItem, Box, Flex } from "@chakra-ui/react";
import { motion, useAnimation } from 'framer-motion';
import useHover from '@/hooks/useHover';

const AnimatedGrid:FC<{count: string; description: string, border?: string}> = ({count, description, border}: {count: string; description: string, border?: string}) => {
    const ref = useRef(null);
    const isHovered = useHover(ref);



    return <Grid as={Flex} ref={ref} 
            templateColumns={"repeat(7, 1fr)"} gap={16} 
            borderBottomWidth={border || 1}
            borderColor={'gray.600'} 
            color="gray.500"
            align={"center"}
            py={10}  px={{ base: 4, '2xl': 28 }}
            cursor={"pointer"}
            >
            <Box as={GridItem} colSpan={3}>
                <Text fontSize={148}  color={isHovered ? 'black' : "gray.400"} >{count}</Text>
            </Box>
            <Box as={GridItem} colSpan={4}>
                <Text fontSize={24} color={isHovered ? 'black' : "gray.500"} lineHeight={1.5} mt={-4}>
                    {description}
                </Text>
            </Box>
        </Grid>
}

export default AnimatedGrid
