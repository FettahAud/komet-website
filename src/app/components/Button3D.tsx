import styles from "./components.module.scss";

export default function Button3D({ text }: { text: string }) {
  return (
    <button className={`${styles.button3d} but`}>
      <span>Needs update</span>
    </button>
  );
}
