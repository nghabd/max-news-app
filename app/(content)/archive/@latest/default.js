import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default async function LatestNews() {
	const news = await getLatestNews();
	return (
		<>
			<header id="news-header">
				<h1>latest news</h1>
			</header>
			<nav>
				{/* <ul>
					{news.map((newsA) => (
						<li key={newsA.id}>{newsA.title}</li>
					))}
				</ul> */}
				<NewsList news={news} />
			</nav>
		</>
	);
}
