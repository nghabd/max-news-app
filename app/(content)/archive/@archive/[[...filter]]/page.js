import NewsList from "@/components/news-list";
import {
	getAvailableNewsMonths,
	getNewsByYear,
	getNewsForYearAndMonth,
	getNewsYears,
} from "@/lib/news";
import Link from "next/link";
import { Suspense } from "react";

export default async function NewsByYear({ params }) {
	const filter = params.filter;
	console.log(filter);

	const getYear = filter?.[0];
	const getMonth = filter?.[1];

	let news = [];
	let links = await getNewsYears();

	// console.log(links);

	if (getYear && !getMonth) {
		news = await getNewsByYear(getYear);
		links = getAvailableNewsMonths(getYear);
	}
	if (getYear && getMonth) {
		news = await getNewsForYearAndMonth(getYear, getMonth);
		links = [];
	}
	let newsContent = <p>No news found for the selected period.</p>;
	if (news && news.length > 0) {
		newsContent = <NewsList news={news} />;
	}

	const availableYears = await getNewsYears();

	if (
		(getYear && !availableYears.includes(getYear)) ||
		(getMonth && !getAvailableNewsMonths(getYear).includes(getMonth))
	) {
		throw new Error("error occured with a year or month ");
	}

	return (
		<>
			<Suspense fallback={<p>loading</p>}>
				<header id="archive-header">
					<nav>
						<ul>
							{links.map((link) => {
								const href = getYear
									? `/archive/${getYear}/${link}`
									: `/archive/${link}`;
								return (
									<li key={link}>
										<Link href={href}>{link}</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</header>
				{/* <h1>News of {year}</h1> */}
				<nav>{newsContent}</nav>
			</Suspense>
		</>
	);
}
