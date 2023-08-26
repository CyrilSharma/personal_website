/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
export default function ProjectPage() {
    return (
        <div className="mt-10 ml-20 grid grid-cols-4 gap-4">
            {Project("CFlat", "/projects/compilers", "./CFG.png")}
            {Project("Regex Compiler", "/projects/compilers", "./NFA.png")}
            {Project("Discrete Optimization", "/projects/compilers", "./TSP.png")}
        </div>
    );
}

function Project(name: string, path: string, img: string) {
    return (
        <Link className="project-card" href={path}>
            <div className="flex flex-col items-center flex-1">
                <img className="h-28 w-full" alt="Control Flow Graph" src={img}></img>
                <Link className="text-center hover:text-blue-300 text-white font-bold text-md" href={path}>{name}</Link>
            </div>            
        </Link>
    )
}