"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
	const router = usePathname();

	return (
		<nav className="nav">
			<ul>
				<li>
					<Link href={href} className={router.startsWith(href) ? "active" : ""}>
						{children}
					</Link>
				</li>
			</ul>
		</nav>
	);
}
