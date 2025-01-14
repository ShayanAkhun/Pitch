import Navbar from "../Compnents/Navbar";

export default function Layout({ children }: Readonly<{ childern: React.ReactNode }>) {
    return (
        <main className="font-work-sans">
            <Navbar/>
            {children}
        </main>
    )
}