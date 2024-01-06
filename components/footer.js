import Link from "next/link"

/**
 * Common Footer
 */
export default function Footer() {
  return(
    <footer className="text-center pt-10">
      <ul className="md:flex xs:flex-wrap items-center justify-center leading-loose">
        <li className="mx-2">
          <Link href="/privacy-policy">
            <a>プライパシーポリシー</a>
          </Link>
        </li>
        <li className="mx-2">
          <Link href="/terms-of-use">
            <a>利用規約</a>
          </Link>
        </li>
      </ul>
      <div className="text-center p-5">
        <span>&copy; </span>
        <Link href="/">
          <a className="font-bold font-serif">GAKUX</a>
        </Link>
        <span> 2024</span>
      </div>
    </footer> 
  )
}