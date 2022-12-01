import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";
import Image from "next/image";
 
import imagezinha from "../public/images/desert.jpg"

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
      </div>

      <div>
        <h1 className={styles.title}>Hello World NextJS</h1>
        <Image
          src={imagezinha}
          width={400}
          height={400}
          alt="Desert"
        />
      </div>
    </>
  );
}
