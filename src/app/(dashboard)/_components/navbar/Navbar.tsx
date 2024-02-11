import Link from "next/link";
import Actions from "./Actions";
import DashboardLogo from "./Logo";

const Navbar = () => {
  return (
    <header className="p-4 border-b bg-[#252731]">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <DashboardLogo size={30} />
        </Link>
        <Actions />
      </nav>
    </header>
  );
};

export default Navbar;
