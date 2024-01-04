import Link from "next/link";

export default function Navbar () {
    return (
        <header className="flex justify-between bg-white py-6 px-10 md:px-12 lg:px-24 xl:px-40 2xl:px-96 items-center">
            <div className="flex space-x-2">
                <div className="bg-yellow-400 p-2 px-3 rounded-xl">
                    <div className="p-2 bg-white rounded-md"></div>
                </div>
                <h1 className="font-semibold text-2xl">Corn QR</h1>
            </div>
            <ul className="text-slate-600 text-lg">
                <li>
                    <Link href={"https://aryatjiutanto.vercel.app/"} className="hover:text-yellow-400
                     duration-200">
                        my portofolio
                    </Link>
                </li>
            </ul>
        </header>
    )
}