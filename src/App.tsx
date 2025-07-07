import { Outlet } from "react-router";
import { NavMenu } from "./components/NavMenu/NavMenu";
import styles from "./App.module.css";

export function App() {
  return (
    <div className={styles.container}>
      <NavMenu />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}
