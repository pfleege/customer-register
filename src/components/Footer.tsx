import Image from "next/image";

const Footer = () => {
  return (
    // <footer className="w-full bottom-0 footer opacity-80 flex justify-center items-center bg-gradient-to-b from-stone-950 to-stone-50 text-white z-40">
    <footer className="w-full bottom-0 footer opacity-90 flex justify-center items-center bg-cover bg-bottom bg-[url('/navbarBg.jpg')] text-white z-40 shadow-inner shadow-black">
      <div className="flex justify-center items-center h-72 ">
        <h2 className="text-2xl">
          Next.js demo created by:{" "}
          <a href="https://iceeqsolutions.fi" target="_blank">
            <Image
              className="inline mb-1"
              src="/iCeeqSolutionsLogo.png"
              alt="iCeeqSolutions logo"
              width={200}
              height={40}
            />
          </a>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
