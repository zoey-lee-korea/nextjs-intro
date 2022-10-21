import Head from "next/head"

export default function MyHead({title}) {
    return (
        <div>
            <Head>
                <title>{title} | Next Movies</title>
            </Head>
        </div>
    )
}