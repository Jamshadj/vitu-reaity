import Link from "next/link";
import Image from "next/image";

import logo from "../../assets/svgs/logo.svg";
const Header = () => {
  return (
    <header className=" text-white pt-[62px] pl-[78px]">
      <nav className="flex justify-between items-center">
        {/* Logo on the Left */}
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={225} height={72} />
        </div>
        <div className="flex pr-[145px] font-medium text-2xl text-black">
          <Link href="/" className="mr-[82px]">
            Home
          </Link>
          <Link href="/about" className="mr-[86px]">
            About
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
