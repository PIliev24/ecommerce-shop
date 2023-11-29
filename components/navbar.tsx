import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import Image from "next/image";
import logo from "../public/logo_with_text.svg";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <Image height={40} width={40} src={logo} alt={""} />
          </Link>
          <MainNav data={categories} />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
