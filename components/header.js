import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Logo from "../public/logo.png"


const Header = () => {
  return (
    <header className="container h-30 items-center mx-auto mt-5">
      <nav className="flex justify-around items-center max-w-xs mx-auto lg:max-w-md">
        <Link href="/" className="">
          <a className="flex items-end justify-center pb-2 xs:items-center">
            <p className="font-serif font-bold text-3xl">GAKUX</p>
            <Image 
              src={Logo} 
              width={100} 
              height={80}
              alt="logo"
            />
          </a>
        </Link>
        <ul className="flex items-center justify-center">
          <li className="mx-2">
            <Link href="https://www.instagram.com/takane_xx/">
              <a target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon 
                  icon={faInstagram}
                  size="1x"
                />
              </a>
            </Link>
          </li>
          <li className="mx-2">
            <Link href="https://twitter.com/takane_x">
              <a target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon 
                  icon={faTwitter}
                  size="1x"
                />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center mx-auto pb-10 mt-5">
        <ul className="flex font-medium justify-center">
          <li className="mx-5">
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>
          <li className="mx-5">
            <Link href="/works">
              <a>works</a>
            </Link>
          </li>
          <li className="mx-5">
            <Link href="/posts">
              <a>posts</a>
            </Link>
          </li>
          <li className="mx-5">
            <Link href="/sake-log">
              <a>sake</a>
            </Link>
          </li>
          <style jsx>{`
            a{
              position: relative;
              display: inline-block;
            }
            a::after {
              position: absolute;
              bottom: 0;
              left: 50%;
              content: '';
              width: 0;
              height: 2px;
              background-color: black;
              transition: .3s;
              transform: translateX(-50%);
            }
            a:hover::after {
              width: 100%;
            }
          `}</style>
        </ul>
      </div>
    </header>
  )
}


export default Header