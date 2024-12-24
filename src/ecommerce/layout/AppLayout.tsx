import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import './applayout.css';

interface Props {
    children: React.ReactNode
}


export const AppLayout = ({children}: Props) => {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}