import Head from "next/head";
import 'normalize.css/normalize.css';

const App = (props) => {
    const {Component, pageProps} = props;
    return (
        <>
            <Head>
                <title>
                    Your Reliable Digital Asset Partner
                </title>
                <meta
                    name='viewport'
                    content='initial-scale=1, width=device-width'
                />
                <link rel='stylesheet' href=''/>
            </Head>
            <Component {... pageProps}/>
        </>
    )
}
export default App;