/* eslint-disable @next/next/link-passhref */
import Link from "next/link";

export function Header(){
  return (
    <header>
      <Link href="/">
        <h5>Jonathan Celio</h5>
      </Link>
    </header>
  );
}