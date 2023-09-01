import Link from "next/link";
export default function CompilerPage() {
    return (
        <div className="flex justify-center">
        <div className="w-7/12">
            {TOC(["Structure", "Tokenization", "Parsing"])}
            <section id="structure" className="header">
            Structure
            <p className="paragraph">{`
                This compiler takes a subset of C all the way down to ASM (ARMv8 ASM to be precise).
                In a nutshell, here's how it does it.
            `}</p>
            <p className="mt-10 paragraph">{`First, the raw text is parsed into semantically
                meaningful tokens, i.e FOR, IF, INT, {INTEGER}, {STRING}, etc. These tokens are stitched
                together according to a Grammar, a set of rules which specify valid language constructs. 
                Here's an example: IF_STATEMENT == IF LPAREN INTEGER RPARAN COMPOUND_STATEMENT. As you can
                see with just this grammar rule, grammar constructs often refer to other grammar constructs.
                Hence, a natural representation of the language is a tree, called the Abstract Syntax Tree (AST).
            `}</p>
            <p className="mt-10 paragraph">{`
                I use Lalrpop to handle parsing the source text into an AST. From here, I check that the code
                adheres to the rules of the language. Variables must be defined before they are used (accounting for 
                scopes), the argument types and number of argument a function receives must make sense, etc. Once this
                is done, the code is now considered valid, and no more error checking is done.
            `}</p>
            <p className="mt-10 paragraph">{`
                We then lower the AST to an IR. This IR is the simplest representation of the source code we have throughout the entire process. 
                We convert this IR to a Control-Flow Graph in order to enable several processing passes, like constant value
                propogation, dead code elimination etc.
            `}</p>
            <p className="mt-10 paragraph">{`
                Once we're done with the IR, we can transform it into Abstract Assembly.
                Abstract Assembly is just assembly but with unlimited registers. Doing this well requires minimizing
                the number / complexity of instructions necessary for each expression. From here, we use a Graph Coloring
                algorithm to ensure our Assembly only uses the 30ish registers available to my machine, and we're done!
            `}</p>
            </section>
            <section className="header" id="tokenizing"></section>
            <section className="parsing" id="parsing"></section>
        </div>
        </div>
    );
}

function TOC(names: string[]) {
    return (
        <div className="flex flex-col items-start bg-gray-200 rounded-lg m-4 p-4">
        <div className="font-sans font-bold text-3xl">
            Table of Contents
        </div>
        {names.map((name, index) => (
            <Link key={index} className="hover:text-blue-600 font-sans font-light text-left"
                href={`#${name.toLowerCase()}`}>
                {index}. {name}
            </Link>
        ))}
        </div>
    )
}