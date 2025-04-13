import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import Links from "./Links";

const Navbar = async () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        <Image src="/images/logo-xl.png" alt="Logo" width={150} height={50} />
      </Link>
      <Links />
    </div>
  );
};

export default Navbar;
