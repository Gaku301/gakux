import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

import style from "../styles/Home.module.css";
import Logo from "../public/logo.png"
import Layout from "./layout";


export default function Home() {
  return (
    <Layout>
      <div className="container w-screen h-screen mx-auto">
        <header className="flex justify-center align-middle h-full items-center">
          <div className="block relative xs:w-3/4 md:w-1/2 h-1/2 max-w-xs lg:max-w-md">
            <div className="flex w-full h-1/2 items-center justify-center pb-2 xs:text-4xl md:text-6xl">
              <h1 className="font-serif font-bold">GAKUX</h1>
              <Image src={Logo} className={style.img} alt="logo"/>
            </div>
            <nav className="flex font-medium justify-between h-1/2 items-start">
              <ul className="flex font-medium items-center justify-center text-lg pt-2">
                <li className="mx-2">
                  <Link href="/about"><a>about</a></Link>
                </li>
                <li className="mx-2">
                  <Link href="/works"><a>works</a></Link>
                </li>
                <li className="mx-2">
                  <Link href="/posts"><a>posts</a></Link>
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
              <ul className="flex items-center justify-center">
                <li className="mx-1">
                  <Link href="https://www.instagram.com/takane_xx/">
                    <a target="_blank" rel="noreferrer noopener">
                      <FontAwesomeIcon 
                        icon={faInstagram}
                        size="2x"
                      />
                    </a>
                  </Link>
                </li>
                <li className="mx-1">
                  <Link href="https://twitter.com/takane_x">
                    <a target="_blank" rel="noreferrer noopener">
                      <FontAwesomeIcon 
                        icon={faTwitter}
                        size="2x"
                      />
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </Layout>
  );
}