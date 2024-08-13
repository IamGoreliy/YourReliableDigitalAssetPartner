import {TitlePage} from "@/layouts/mainComponent/titlePage";
import {MarketMakingSolution} from "@/layouts/mainComponent/marketMakingSolution";
import {MeetTheTeam} from "@/layouts/mainComponent/meetTheTeam";
import {Partnerships} from "@/layouts/mainComponent/partnerships";
import {LatestNews} from "@/layouts/mainComponent/latestNews";
import {ContactUs} from "@/layouts/mainComponent/contactUs";
export const Main = () => {
    return (
        <>
           <TitlePage/>
           <MarketMakingSolution/>
           <MeetTheTeam/>
           <Partnerships/>
           <LatestNews/>
           {/*<ContactUs/>*/}
        </>
    )
}