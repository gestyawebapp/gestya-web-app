import InfoBar from "../InfoBar";
import Navbar from "../Navbar";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <InfoBar />
      <Navbar />
    </header>
  );
};

export default Header;
