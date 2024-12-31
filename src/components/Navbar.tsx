import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex font-specialElite fixed top-0 w-screen z-40 navbar bg-cover bg-center bg-[url('/navbarBg.jpg')]">
      <div className="flex mb-auto mt-10">
        <Image
          className="ml-10 invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </div>
      <div className="mx-auto h-[400px] flex flex-col justify-center items-center gap-10">
        <h1 className="navH1 text-7xl firefox">Customer Register</h1>
        <div className="text-3xl links flex gap-10 firefox">
          <Link href="/">Home</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/customers">Sample</Link>
        </div>
      </div>
      <div className="flex mb-auto mt-10">
        <button className="mr-16 rounded-xl border-2 border-slate-200 shadow-teal-50 shadow-xl h-12 w-28 pt-1 text-white text-xl font-bold hover:bg-amber-400 hover:text-black">
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
