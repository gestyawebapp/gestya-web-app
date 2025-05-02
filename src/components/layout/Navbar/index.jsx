import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.logo} href="/">
        <Image
          src="/images/logo-xl.png"
          alt="Logo"
          fill
          sizes="(max-width: 768px) 100px, 125px"
          style={{ objectFit: "contain" }}
        />
      </Link>
      <NavbarDesktop />
      <NavbarMobile />
    </nav>
  );
};

export default Navbar;
