import {Box, Container, Typography, Button} from "@mui/material";
import Image from "next/image";
import teamImgHero from '../../../public/images/titlePhoto.png';
import firstImg from '../../../public/images/firstImgMeetTheTeam.png';
import secondImg from '../../../public/images/secondImgMeetTheTeam.png';
import treeImg from '../../../public/images/treeImgMeetTheTeam.png';
import fourImg from '../../../public/images/fourImgMeetTheTeam.png';
import fiveImg from '../../../public/images/fiveImgMeetTheTeam.png';
import {CustomButton, CustomTypography} from "@/styleComponent";
import {Linkedin} from "../../../public/images/svgIcon/getSvg";

export const MeetTheTeam = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                padding: '80px 0px',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '80px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '100%',
                    backgroundImage: `url(./images/humanBrain.jpeg)`,
                    backgroundSize: '600px',
                    backgroundRepeat: 'no-repeat',
                    // backgroundPosition: 'top center',
                    // filter: 'blur(10px)',
                    zIndex: -1,
                    borderRadius: '40%'
                },
            }}
        >
            <Container
                // maxWidth={'xl'}
                sx={{
                    maxWidth: '1440px'
                }}
            >
                <Box
                    sx={{
                        mt: '50px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        rowGap: '30px'
                    }}
                >
                    <CustomTypography
                        variant='h2'
                        sx={{
                            fontWeight: 600
                        }}
                    >
                        Meet The Team
                    </CustomTypography>
                    <CustomTypography
                        variant='subtitle2'
                        sx={{

                        }}
                    >
                        The industry`&apos;`s most talented people work for prime.cc
                    </CustomTypography>
                    <CustomButton
                        variant={'contained'}
                    >
                        <Linkedin
                            style={{
                                width: '25px',
                                height: '25px',
                                fill: 'white',
                            }}
                        />
                        Our Linkedin Page
                    </CustomButton>
                </Box>
                <Box
                    sx={{
                        mt: '50px'
                    }}
                >
                    <Box>
                        <Image
                            src={teamImgHero}
                            alt=''
                            style={{
                                width: '100%',
                                height: '500px',
                                borderRadius: '15px',
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mt: '20px',
                            columnGap: '20px',
                        }}
                    >
                        <Box
                            sx={{
                                width: '160px',
                                height: '90px',
                                borderRadius: '100px',
                                backgroundImage: 'url(./images/firstImgMeetTheTeam.png)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '170px',
                                backgroundPosition: 'center'
                            }}
                        >

                        </Box>
                        <Box
                            sx={{
                                width: '160px',
                                height: '90px',
                                borderRadius: '100px',
                                backgroundImage: 'url(./images/secondImgMeetTheTeam.png)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '170px',
                                backgroundPosition: 'center'
                            }}
                        >

                        </Box>
                        <Box
                            sx={{
                                width: '160px',
                                height: '90px',
                                borderRadius: '100px',
                                backgroundImage: 'url(./images/treeImgMeetTheTeam.png)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '180px',
                                backgroundPosition: 'center',
                                padding: '4px',
                                border: '2px solid #5e2378',
                            }}
                        >

                        </Box>
                        <Box
                            sx={{
                                width: '160px',
                                height: '90px',
                                borderRadius: '100px',
                                backgroundImage: 'url(./images/fourImgMeetTheTeam.png)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '170px',
                                backgroundPosition: 'center'
                            }}
                        >

                        </Box>
                        <Box
                            sx={{
                                width: '160px',
                                height: '90px',
                                borderRadius: '100px',
                                backgroundImage: 'url(./images/fiveImgMeetTheTeam.png)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '170px',
                                backgroundPosition: 'center'
                            }}
                        >

                        </Box>

                    </Box>
                </Box>
            </Container>
        </Box>
    )
}