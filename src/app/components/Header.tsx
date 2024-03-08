import Button3D from "./Button3D";

export default function Header() {
  return (
    <div id="header">
      <div className="logo-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="24"
          viewBox="0 0 22 24"
          fill="none"
        >
          <g clip-path="url(#clip0_1231_44974)">
            <path
              d="M21.3664 0H0.333283C0.150304 0 0 0.150304 0 0.333283V11.7099C0 15.5699 4.66669 17.5035 7.39685 14.7734L21.6031 0.569994C21.9161 0.257042 21.8101 0 21.3664 0Z"
              fill="black"
            />
            <path
              d="M21.6028 23.4291L12.2331 14.0623C12.1031 13.9324 11.8933 13.9324 11.7633 14.0623L11.7168 14.1088L9.22338 16.6022C6.49322 19.3324 8.42684 23.9991 12.2868 23.9991H21.3668C21.8104 23.9991 21.9172 23.7428 21.6035 23.4291H21.6028Z"
              fill="black"
            />
            <path
              d="M3.00027 24.0005C4.65728 24.0005 6.00054 22.6573 6.00054 21.0003C6.00054 19.3433 4.65728 18 3.00027 18C1.34327 18 0 19.3433 0 21.0003C0 22.6573 1.34327 24.0005 3.00027 24.0005Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_1231_44974">
              <rect width="21.7832" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span>Komet</span>
      </div>
      <nav>
        <ul>
          <li>Work</li>
          <li>Capabilities</li>
          <li>About</li>
          <li>Careers</li>
        </ul>
      </nav>
      <button className="but but-primary">
        <span>Get in touch</span>
      </button>
    </div>
  );
}
