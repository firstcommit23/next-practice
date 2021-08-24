import Head from 'next/head'

const HeadInfo = ({title, keyword, contents}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta keyword={keyword} />
            <meta keyword={contents} />
        </Head>
    )
}

HeadInfo.defaultProps = {
    title : 'Jimin Kim',
    keyword : 'Jimin Kim Blog',
    contents : 'next js'
}

export default HeadInfo
