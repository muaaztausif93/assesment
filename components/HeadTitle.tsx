import Head from "next/head";

interface headTitleInterface {
    title: string;
}

const HeadTitle = ({title}: headTitleInterface) => {
    return <Head>
    <title>{title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
};
export default HeadTitle;