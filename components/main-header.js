import Link from "next/link";
import NavLink from "./nav-link";
export default function MainHeader() {
	return (
		<header id="main-header">
			<div id="logo">
				<Link href={"/"}>nextnews</Link>
			</div>
			<nav className="nav">
				<ul>
					<li>
						<NavLink href={"/news"}>News</NavLink>
					</li>
					<li>
						<NavLink href={"/archive"}>Archive</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
