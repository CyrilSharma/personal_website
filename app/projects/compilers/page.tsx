import Link from "next/link";
export default function CompilerPage() {
    return (
        <div>
            <p>Contents</p>
            <Link href="#structure">Structure</Link>
            <Link href="#tokenization">Tokenization</Link>
            <Link href="#parsing">Parsing</Link>
            <section id="structure"></section>
            <section id="tokenizing"></section>
            <section id="parsing"></section>
        </div>
    );
}