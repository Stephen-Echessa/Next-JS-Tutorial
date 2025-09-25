import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="border-black/10 border-b h-[40px] flex items-center justify-between">
        <div className="px-20">
            <Image 
                src="globe.svg"
                alt="Vercel Logo"
                width={30}
                height={30}
                priority
            />
        </div>
        <ul className="flex items-center gap-3 px-20">
            <li>
                <Link href="/">Home</Link>   
            </li>
            <li>
                <Link href="/posts">Posts</Link>
            </li>
        </ul>
    </div>
)};