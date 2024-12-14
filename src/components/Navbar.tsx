import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Customer Register</h1>
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/customers">Customers</Link>
      </div>
    </nav>
  );
};

export default Navbar;
