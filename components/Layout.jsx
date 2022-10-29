import Link from "next/link"

const Header = () => {
    return(
        <header className="text-sm md:text-base flex items-center border border-gray-300">
            <nav className="container flex justify-between items-center gap-2">
            <h1><Link href="/" className="font-bold text-lg md:text-2xl">Travel Blog</Link></h1>
            <ul className="flex justify-between items-center gap-2">
                <li><Link className="hover:underline hover:text-main py-1 px-3 tranistion-all duration-300" href="/">Home</Link></li>
                <li><Link href="/create/article" className="bg-main text-white py-1 px-3 rounded border hover:border-main hover:bg-white hover:text-slate-800 tranistion-all duration-300">Create Article</Link></li>         
            </ul>
            </nav>
        </header>
    )
}

const Footer = () => {
    return <footer className="h-[60px] flex justify-center items-center border-t border-gray-300">Coded & Developed By <Link href="https://github.com/lamiaagabriel" target='_blank' className="hover:underline hover:text-main py-1 px-3 tranistion-all duration-300">Lamiaa Gabriel</Link> </footer>
}
const Layout = ({ children }) => {
    return (
        <>
        <Header />
        
        <main className="py-6 bg-gray-50">
            <div className="container grow">{ children }</div>
        </main>
        <Footer />
        </>
    );
}

export default Layout;
