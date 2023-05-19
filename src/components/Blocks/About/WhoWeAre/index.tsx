import { FC } from 'react'
import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import Reveal from '../../Animations/Reveal'

const WhoWeAre: FC = () => {
  return (
    <Box
      w="full"
      bgSize="cover"
      alignItems={"center"}
      position={"relative"}
      px={{ base: 4, '2xl': 28 }} 
      py={28}
      bg="base.black"
    >
      <Text fontSize={52} color={"base.yellow"}>Who We Are</Text>
      <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}} gap={16} color="white" fontSize={14} >
          <Box as={GridItem} mt={12}>
             <Reveal from='left'>
               <Text lineHeight={1.6}fontSize={24} >
                We connect the dots from your books to your 
                money strategy by providing your CFO, CPA, 
                and bookkeeper all in one package. That allows 
                us to really get into your business and provide 
                you with a holistic financial solution
              </Text>
             </Reveal>
          </Box>
          <Box as={GridItem} mt={{base: 4, md: 12}}>
              <Reveal from='right'>
                  <Text lineHeight={1.6} fontSize={24}>
                    As your CFO and financial visibility partner, we 
                    care about keeping your lights on for the long 
                    haul. We’ll help you make sense of your numbers, 
                    get the right answers, and implement your strategy 
                    so you have a sustainable and healthy business.
                  </Text>
              </Reveal>
          </Box>
      </Grid>
    </Box>
  )
}

export default WhoWeAre
