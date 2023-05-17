import { FC, ReactNode, useRef, useEffect } from 'react'
import { Box, Button, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import { BiArrowBack } from 'react-icons/bi'
import { motion, useAnimation, useInView } from 'framer-motion'
import { initial } from 'lodash'

interface IProp {
    from?: string,
    children?: ReactNode;
}

const MotionBox = motion(Box)

const setHidden = (from) => {
    if(!from) from = 'bottom'
    let opacity = 0
    let x = 0, y= 0
    switch (from) {
        case 'top':
            y = -100
        case 'bottom':
            y = 100
        case 'left':
            x = -100
        case 'right':
            x = 100
        default:
            break;
    }
    return {opacity, x, y}
}

const setVisible = (from) => {
    if(!from) from = 'bottom'
    let opacity = 1
    if(from === 'top' || from === 'bottom') return {opacity, y: 0}
    return {opacity, x: 0}
}

const Reveal: FC<IProp> = ({
    from,
    children
}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true}) 
    const mainControls = useAnimation();


    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
        }
    }, [isInView])
    

    return (
        <Box ref={ref} width={"fit-content"} position={"relative"}>
            <MotionBox 
            variants={{
                hidden: setHidden(from),
                visible: setVisible(from)
            }}
            initial={"hidden"}
            animate={mainControls}
            transition={{duration: 0.5, delay: 0.3}}
            >
                {children}
            </MotionBox>
        </Box>
    )
}

export default Reveal
