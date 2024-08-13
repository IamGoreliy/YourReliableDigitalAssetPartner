import {Box, Button, Container, Typography} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import firstImg from '../../../public/images/latestNewsFirstImg.png';
import secondImg from '../../../public/images/latestNewsSecondImg.png';
import treeImg from '../../../public/images/latestNewTreeImg.png';
import styled from "@emotion/styled";
import {ContactUs} from "@/layouts/mainComponent/contactUs";
import {ExtraLink, TriangleRight} from "../../../public/images/svgIcon/getSvg";
import {CustomTypography} from "@/styleComponent";

const CardWrapper = styled(props => {
    return <Box {...props}/>
})(() => {
    return {
        border: '1px solid black',
        padding: '10px',
        borderRadius: '25px',
    }
});

const CardInternalSetup = styled(props => {
    return <Box {...props}/>
})(() => {
    return {
        display: 'flex',
        alignItems: 'center',
    }
});


const CardImg = styled(props => {
    const {src, ...other} = props;
    return <Image
                src={src}
                alt=''
                {...other}
           />
})(() => {
    return {
        width: 'auto',
        height: 'auto',
    }
});

const WrapperSubLineText = styled(props => {
    return <Box {...props}/>
})(() => {
    return {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '10px',
    }
});

const PublicationDate = styled(props => {
    return <p {...props}/>
})(() => {
    return {
        color: 'black'
    }
});

const AllMoreNews = styled(props => {
    const {href, ...other} = props;
    return <a href={`${href}`} {...other}/>
})(() => {
    return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'end',
        marginTop: '50px',
        textDecoration: 'none',
        columnGap: '10px',
        fontFamily: "Montserrat, sans-serif",
    }
});


export const LatestNews = () => {
    return (
        <Box
            sx={{
                padding: '100px',
                backgroundColor: '#f3eff5',
            }}
        >
            <Container
                sx={{
                    maxWidth: '1440px'
                }}
            >
                <CustomTypography
                    variant='h2'
                    sx={{
                        textAlign: 'center',
                        fontWeight: 600,
                    }}
                >
                    Latest News
                </CustomTypography>
                <Box
                    sx={{
                        display: 'flex',
                        columnGap: '20px',
                        marginTop: '30px',
                    }}
                >
                    <CardWrapper>
                        <CardInternalSetup>
                            <CustomTypography
                                variant='h3'
                                sx={{
                                    fontSize: '24px'
                                }}
                            >
                                5 Reasons To Start Your Own Brokerage
                            </CustomTypography>
                            <CardImg
                                src={firstImg}
                            />
                        </CardInternalSetup>
                        <WrapperSubLineText>
                            <CustomTypography
                                variant={'text'}
                                sx={{
                                    display: 'inline-flex',
                                    color: '#491361',
                                    alignItems: 'center',
                                }}
                            >
                                Read More
                                <TriangleRight
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                    }}
                                />
                            </CustomTypography>
                            <PublicationDate>
                                06/05/2024
                            </PublicationDate>
                        </WrapperSubLineText>
                    </CardWrapper>
                    <CardWrapper>
                        <CardInternalSetup>
                            <CustomTypography
                                variant='h3'
                                sx={{
                                    fontSize: '24px',
                                }}
                            >
                                5 Reasons To Start Your Own Brokerage
                            </CustomTypography>
                            <CardImg
                                src={secondImg}
                            />
                        </CardInternalSetup>
                        <WrapperSubLineText>
                            <CustomTypography
                                variant={"text"}
                                sx={{
                                    display: 'inline-flex',
                                    color: '#491361',
                                    alignItems: 'center',
                                }}
                            >
                                Read More
                                <TriangleRight
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                    }}
                                />
                            </CustomTypography>
                            <PublicationDate>
                                06/05/2024
                            </PublicationDate>
                        </WrapperSubLineText>
                    </CardWrapper>
                    <CardWrapper>
                        <CardInternalSetup>
                            <CustomTypography
                                variant='h3'
                                sx={{
                                    fontSize: '24px',
                                }}
                            >
                                5 Reasons To Start Your Own Brokerage
                            </CustomTypography>
                            <CardImg
                                src={treeImg}
                            />
                        </CardInternalSetup>
                        <WrapperSubLineText>
                            <CustomTypography
                                variant={'text'}
                                sx={{
                                    display: 'inline-flex',
                                    color: '#491361',
                                    alignItems: 'center',
                                }}
                            >
                                Read More
                                <TriangleRight
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                    }}
                                />
                            </CustomTypography>
                            <PublicationDate>
                                06/05/2024
                            </PublicationDate>
                        </WrapperSubLineText>
                    </CardWrapper>
                </Box>
                <AllMoreNews href=''>
                    Read All News
                    <ExtraLink
                        style={{
                            fill: '#491361',
                            width: '20px',
                            height: '20px',
                        }}
                    />
                </AllMoreNews>
                <ContactUs/>
            </Container>
        </Box>
    )
}