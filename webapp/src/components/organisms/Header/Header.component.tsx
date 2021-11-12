/* eslint-disable @next/next/link-passhref */
import Link from "next/link";

export function Header(){
  return (
    <header>
      <h5>
        <Link href="/">
          <a>Jonathan Celio</a>
        </Link>
      </h5>
    </header>
  );
}