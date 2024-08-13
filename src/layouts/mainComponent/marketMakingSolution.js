import {Box, Typography} from "@mui/material";
import Image from "next/image";
import testImg from '../../../public/images/flexiblePrimeCC.png'


export const MarketMakingSolution = () => {
    console.log(testImg.src)
    return (
        <Box>
            <Box>
               <Box>
                   <Typography
                       variant='h2'
                   >
                        Flexible Market Making Solution
                   </Typography>
                   <Typography
                    variant='p'
                   >
                       PRIME.CC provides cutting edge market making execution capabilities, building volumes and providing healthy liquidity for projects as a service.
                   </Typography>
                   <Typography
                    variant='p'
                   >
                       We are integrated with the top 60 exchanges and trade thousands of crypto asset pairs which includes spots and derivatives.
                   </Typography>
                   <Typography
                    variant='p'
                   >
                       For our partners, we provide high-touch, 24/7 coverage service to trade through the volumes and provide liquidity needed.
                   </Typography>
                   <button>Contact US</button>
               </Box>
                <Box>
                   <Image
                       src={testImg.src}
                       alt=''
                       width={300}
                       height={200}
                   />
                </Box>
            </Box>
            <Box>

            </Box>
        </Box>
    )
}