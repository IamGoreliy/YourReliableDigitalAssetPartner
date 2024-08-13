import {Headers} from "@/layouts/headers";
import BodyLayout from "@/layouts/body";
import {Main} from "@/layouts/mainComponent/main";
import {Footer} from "@/layouts/footer";

const Page = () => {
    return (
        <BodyLayout>
            <Headers/>
            <Main/>
            <Footer/>
        </BodyLayout>
    )
}
export default Page;