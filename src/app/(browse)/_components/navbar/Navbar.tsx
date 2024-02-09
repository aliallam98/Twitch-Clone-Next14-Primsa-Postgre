import Link from "next/link";
import Logo from "../../../../components/Logo";
import Actions from "./Actions";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <header className="p-4 border-b bg-[#252731]">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Logo size={30} />
        </Link>
        <SearchBar />
        <Actions />
      </nav>
    </header>
  );
};

export default Navbar;
