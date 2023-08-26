import Link from "next/link";

export default function NavBar() {
    return (
        <div className="w-screen h-10 flex flex-row bg-gray-700 text-white m-0
            justify-center items-center shadow-slate-600 shadow-lg">
            <Link className="navbar-item" href="/">Home</Link>
            <Link className="navbar-item" href="/projects">Projects</Link>
            <Link className="navbar-item" href="/resume">Resume</Link>
            <Link className="navbar-item" href="/reading-list">Reading List</Link>
        </div>
    );
}