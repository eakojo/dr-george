import { FC, useRef, ReactNode, useState } from 'react'
import { Box, Button, Flex, Grid, GridItem, Image, Text, Icon } from '@chakra-ui/react'
import useHover from '@/hooks/useHover';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FiArrowUpCircle } from 'react-icons/fi';

interface  IChildProp {
  image: ReactNode;
  description: string, 
  title: ReactNode, 
  border?: string, 
  details: {
        title: string;
        description: string;
    }[];
}
const GridBox:FC<IChildProp> = (
    {image, description, border, title, details}: IChildProp
  ) => {
    const ref = useRef(null);
    const isHovered = useHover(ref);
    const [isOpen, setOpen] = useState(false);

    return <Box
              borderBottomWidth={border || 1}
              px={{ base: 4, '2xl': 28 }} cursor={"pointer"}
              borderColor={{base: 'gray.300', md: "gray.600"}} 
            >
              <Grid ref={ref} 
                  templateColumns={{base: "repeat(1, 1fr)", md: "repeat(7, 1fr)"}} gap={16} pt={20} pb={8}
                  color="gray.500"
                  >
                  <GridItem as={Flex} colSpan={3} align={"center"} justify={'center'}>
                      <Flex direction={"column"} alignItems={"center"}  justify={"center"} {...isHovered ? { filter: "invert(0)"}:{ filter: "invert(0.3)"}}>
                          {image}
                          <Text fontWeight={600} fontSize={28} color={"blackAlpha.700"}>{ title }</Text>
                      </Flex>
                  </GridItem>
                  <Box as={GridItem} colSpan={4}>
                      <Text fontSize={20} color={isHovered ? 'black' : "gray.500"} lineHeight={1.5}>
                          {description}
                      </Text>
                      <Button 
                        h={20} 
                        py={5} 
                        px={12} 
                        mt={4}
                        rounded={0} 
                        fontWeight={500} 
                        bg="black" 
                        _hover={{bg: "black"}} 
                        color="base.yellow" 
                        fontSize={28}
                        onClick={() => setOpen(!isOpen)}
                      >
                        Explore
                        <Icon ml={2} fontSize={24} as={FaArrowLeftLong} {...{ transform: 'rotate(180deg)' }}/>
                      </Button>
                  </Box>
              </Grid>
              <Box>
                {isOpen && details.map(item => (
                  <Grid key={item.title}
                      templateColumns={{base: "repeat(1, 1fr)", md: "repeat(7, 1fr)"}} gap={16} pt={4} pb={8}
                      color="gray.500"
                      >
                      <GridItem as={Flex} colSpan={3} align={"flex-start"} justify={'center'}>
                      </GridItem>
                      <Box as={GridItem} colSpan={4}>
                          <Text fontWeight={600} fontSize={28} color={"blackAlpha.700"}>{ item.title }</Text>
                          <Text fontSize={20} color={isHovered ? 'black' : "gray.500"} lineHeight={1.5} fontWeight={400}>
                              {item.description}
                          </Text>
                      </Box>
                  </Grid>
                ))}
                {isOpen && <Grid
                      templateColumns={{base: "repeat(1, 1fr)", md: "repeat(7, 1fr)"}} gap={16} pt={4} pb={8}
                      color="gray.500"
                      >
                      <GridItem as={Flex} colSpan={3} align={"flex-start"} justify={'center'}>
                      </GridItem>
                      <Box as={GridItem} colSpan={4}>
                          <Button 
                            pb={3}
                            fontSize={24}
                            color="gray.400"
                            borderBottomWidth={2} 
                            borderColor={'gray.500'} 
                            rounded={0} bg="white"
                            onClick={() => setOpen(false)}
                            >
                              See less
                              <Icon as={FiArrowUpCircle}  ml={3} fontSize={36}/>
                            </Button>
                      </Box>
                </Grid>}
              </Box>
          </Box>
}

const data = [
  {
    title: "Wealth Management",
    image: {
      url: "/images/Services D.png",
      // style: {w :"50%"}
    },
    description: "Wealth management is not just about accumulating wealth but also about sustaining wealth for the long term. High-wealth individuals and families must adopt the right strategies and professional guidance to manage wealth and pass it on from generation to generation. Wibexly offers a comprehensive suite of financial services designed to build a customized investment strategy and manage the financial plan and risk management strategy to help our clients sustain wealth.",
    children: [
      {
        title: "Investment Management",
        description: "Investment management is a critical component of financial planning and wealth management. High Net wealth individuals must make the right investment decisions to build and sustain wealth. Our wealth managers work with clients to develop a customized investment strategy that aligns with their financial goals, risk tolerance, and time horizon. We provide investment advice and decisions based on market trend analysis, economic conditions, and assessment of risk potential. We are not your fund managers, but we would be the face interacting with your fund managers to ensure your investment is at the right place and you are gaining value."
      },
      {
        title: "Financial Planning",
        description: "Financial planning is another essential aspect of wealth management. Wealth managers will help their clients develop a comprehensive financial plan that covers everything from retirement planning, tax planning, estate planning, insurance planning, and more."
      },
      {
        title: "Risk management",
        description: "Identifying, assessing, and mitigating risks is essential for managing uncertainty, protecting assets, and sustaining wealth. We are experienced in diagnosing operational processes, financial systems, economic situations, and internal and external shocks that affect investment decisions. Based on the diagnostics our team of experts devise a strategy to mitigate the risk and continuously monitor and review our approach to managing the risk."
      },
      {
        title: "Tax Planning",
        description: "Understanding the tax laws and regulations is very relevant to tax planning which could save a lot of money. This is what Wibexly brings on board to relieve individuals or businesses from the stress of effectively planning their taxes. We help clients to optimize their tax situation by developing a tax-efficient investment strategy, taking advantage of tax credits, tax exemptions, and other tax incentives to influence their investment decisions and business planning decisions."
      },
    ]
  },
  {
    title: <Text>Accounting and Bookkeeping <br/> services</Text>,
    image: {
      url: "/images/Services E.png",
      style: {}
    },
    description: "Our bookkeeping and accounting services aim to help businesses, organizations, Nonprofit organizations, freelancers, and independent contractors with their day-to-day financial operations, including recording transactions, reconciling accounts, and preparing financial statements.",
    children: [
      {
        title: "Bookkeeping and financial reporting",
        description: "We support maintaining accurate financial records of the day-to-day transactions of our clients. This involves tracking transactions, managing accounts receivable, and account payables, and preparing bank reconciliation statements."
      },
      {
        title: "Financial Reporting",
        description: "Financial statements provide a snapshot of a company’s financial health to relevant stakeholders, which is important for decision-making. This includes the statement of financial position, the income statement, and the cash flow statement."
      },
      {
        title: "Tax preparation and Filling",
        description: "For every jurisdiction, it is a requirement for all organizations to prepare tax statements and file yearly returns. Upon completion of the financial report, we lead both the tax and financial report audit exercise on behalf of all our clients and ensure the financial report is filled with the right authorities and in accordance with the regulations within the jurisdiction of operation."
      },
      {
        title: "Payroll Services",
        description: "For larger organizations, payroll management is a big deal of an exercise due to the number of people that needs to be paid the accurate amount and on time. We take ownership of the entire payroll process calculating wages and salaries, managing employee benefits, filing taxes with respect to tax deductions on wages and salaries, and managing paycheck processing."
      },
    ]
  },
  {
    title: <Text>Business Advisory and <br /> consultancy</Text>,
    image: {
      url: "/images/Services E.png",
      style: {}
    },
    description: "We work with experts to help our clients maximize their potential for growth, wealth, profitability, and financial stability. WIBEXLY partners with corporate organizations, government agencies, and individuals to understand their business and financial goals, diagnose their business and its entire financial system, understand business goals, develop customized strategies, and provide ongoing support to support them achieve their financial goals. Our Business Advisory and consultancy service line provides offers research, grant application support, audit readiness, and investment readiness support to clients.",
    children: [
      {
        title: "Research",
        description: "In-depth research and data-driven investment or financial insights help organizations stay ahead of their competitors and investors to make sound investment decisions. We feed our clients with high-quality, timely, and accurate information through our market research, investment analysis, risk assessment, and due diligence exercise."
      },
      {
        title: "Grant application support",
        description: "Leveraging the expertise of a team with a track record increases the chances of success in securing funding. Preparing grant applications can be time-consuming, and complex, and requires some expertise to succeed. We take our clients through a journey from identifying funding opportunities to developing and submitting compelling proposals. Our grant writers and consultants would work with our clients to understand their funding requirements and support them throughout the process."
      },
      {
        title: "Audit readiness",
        description: "We understand that not all organizations have internal audit structures to assess the effectiveness of their internal controls and risk management processes. Organizations with poor or no internal audit structures are likely to have issues during annual audits of their financial statement and internal controls. We support our clients to ensure that all necessary documentation, processes, and procedures are in place. We work with the clients to identify potential areas of risk and implement strategies to mitigate those risks, ensuring that your organization is fully prepared for any audits that may come their way."
      },
      {
        title: "Investment readiness",
        description: "We understand the struggle to navigate the complex investment landscape and are here to support our clients to overcome the challenge and make them more attractive to investors. Every client is unique hence we tailor our solution by working closely with them to understand their unique circumstances, offer valuable insight, conduct a comprehensive assessment of their financials, operations, and strategy, and grant them access to a network of potential investors."
      },
    ]
  },
  {
    title: "Training & Development",
    image: {
      url: "/images/Services G.png",
      style: {w: "50%"}
    },
    description: "Wibexly prepares and delivers high-quality training programs that enhance employee knowledge, skills, and performance, increase employees' compliance levels, and improve productivity and business outcomes. We deliver both virtual and in-person training to both individuals and organizations to learn the skill of making sound financial decisions, evaluating financial risks, avoiding common financial mistakes, and creating a financial plan that aligns with their goals and values.",
    children: [
      {
        title: "Staff training/Workshops",
        description: "Provide training to the organization's accounting staff on accounting principles, software systems, and policies and procedures to help them execute the accounting process effectively."
      },
      {
        title: "Personal Coaching",
        description: "We help individuals improve their financial situations by providing guidance, education, and support. Financial education on various topics helps our clients appropriately plan and track their spending, manage debt, save and invest and adopt some financial principles that shape their financial decisions to build wealth and achieve their financial goals."
      }
    ]
  },
  {
    title: "Administrative support",
    image: {
      url: "/images/Services F.png",
    },
    description: "Our administrative support services focus on building an entire business process flow, accounting process design, and resources. An existing accounting structure or system should work to successfully get rolling accounting and bookkeeping services. We support our clients in selecting the right systems, processes, and teams to deliver.",
    children: [
      {
        title: "Accounting system selection",
        description: "There are many accounting systems in the open market, but it is always important to understand the nature, size of the business, and the type of support required to make the right accounting software system to use."
      },
      {
        title: "Accounting process design",
        description: "Design a streamlined accounting process flow to help the organization achieve efficiency, accuracy, and compliance in its financial reporting. In designing the accounting process, it is vital to implement effective internal controls to ensure that financial transactions are properly authorized, recorded, and reported."
      },
      {
        title: "Chart of accounts design",
        description: "Wibexly supports young businesses, start-ups, and SMEs to create a framework to organize and track financial transactions. Designing a chat of account can be a complex process yet very important to ensure accurate and effective recording of financial transactions. The chart of accounts provides a standardized numbering system and structure for categorizing financial transactions in a way that is easy to understand and report."
      },
      {
        title: "Compliance, Policies, and procedures development",
        description: "Business operations are governed by the relevant laws, regulations, and best practices required by authorities to get the right certification to operate. We help our partners to establish the right guidelines, policies, and procedures to ensure compliance as they seek to achieve the organization’s goals and objectives. We help in business registration and certification for expatriates and clients not familiar with the regulatory environment within which they seek to operate."
      }
    ]
  }
]


const RenownedService: FC = () => {
  return (
    <Box
      w="full"
      bgSize="cover"
      alignItems={"center"}
      position={"relative"}
    >
        <Box mt={12} fontWeight={500} color="base.black" fontSize={{base: 40, md:60}} lineHeight={1.2}  px={{ base: 4, '2xl': 28 }} >
            <Text>Premium</Text>
            <Text>Services</Text>
        </Box>
        <Box>
            {data.map(item => (
              <GridBox 
                key={item.image.url}
                image={ <Image src={item.image.url} alt="" {...item.image.style}/>} 
                title={item.title}
                description={item.description}
                details={item.children}
              />
            ))}
        </Box>
    </Box>
  )
}

export default RenownedService
