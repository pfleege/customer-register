import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar flex bg-cover bg-center bg-[url('/navbarBg.jpg')]">
      <Image
        className="ml-10 invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <div className="mx-auto h-[200px] flex flex-col justify-center items-center gap-5 ">
        <h1 className="font-specialElite text-7xl">Customer Register</h1>
        <div className="font-specialElite text-3xl links flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/customers">Customers</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
