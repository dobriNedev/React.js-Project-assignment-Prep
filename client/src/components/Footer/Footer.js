import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <p>
        All rights reserved &copy; Dobri Nedev - March, 2023. Click{" "}
        <a
          href="https://github.com/dobriNedev"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>{" "}
        to check out other projects by me on GitHub{" "}
      </p>
    </footer>
  );
};
