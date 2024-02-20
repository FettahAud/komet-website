import styles from "./components.module.scss";

export default function Button3D({ text }: { text: string }) {
  return (
    <button className={`${styles.button3d} but`}>
      <span>{text}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.85725 2.43396C5.05871 2.24509 5.37512 2.2553 5.56399 2.45676L8.56399 5.65676C8.7443 5.84909 8.7443 6.14837 8.56399 6.3407L5.56399 9.5407C5.37512 9.74216 5.05871 9.75236 4.85725 9.5635C4.65579 9.37463 4.64559 9.05821 4.83445 8.85676L7.51385 5.99873L4.83445 3.1407C4.64559 2.93924 4.65579 2.62282 4.85725 2.43396Z"
          fill="#F7F7F7"
        />
      </svg>
    </button>
  );
}
