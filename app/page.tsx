export default function HomePage() {
    return (
      <div className="flex flex-row mt-5 justify-center">
        <img className="w-80 h-80 object-cover -scale-x-100" alt="No Cactus :((" src="/Cactus.gif"></img>
        <div>
            <h1 className="header text-center">Hi!</h1>
            <p className="paragraph text-center">
                {"I'm Cyril, I'm interested in AI, Compilers, HPC, and Algorithms more broadly."}
            </p>
            <p className="paragraph text-center">
                {"I also enjoy playing Badminton, crushing my opponents in Foosball, and reading."}
            </p>
        </div>
        <img className="w-80 h-80 object-cover" alt="No Cactus :((" src="/Cactus.gif"></img>
      </div>
    );
  }