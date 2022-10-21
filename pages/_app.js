import NavBar from "../components/NavBar"
import "../styles/globals.css"

export default function MyApp({Component, pageProps}) {
    return (
        <div>
            <NavBar/>
            <Component {...pageProps} />
            <style jsx global>{`
                a {
                    color: green;
                }
            `}</style>
        </div>
    )
}