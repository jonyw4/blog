import Link from "next/link";
import Image from "next/image";

export function ProfileCard() {
  return (
    <Link href="/">
      <a style={{ display: "flex", color: "initial", textDecoration: "none" }}>
        <div
          style={{ display: "flex", borderRadius: 40, marginRight: "0.5em",     overflow: 'overlay' }}
        >
          <Image src="/images/jony.jpg" alt="" width="40" height="40" />
        </div>
        <div>
          <h5>Jonathan Celio</h5>
          <small>Software Engineer</small>
        </div>
      </a>
    </Link>
  );
}
