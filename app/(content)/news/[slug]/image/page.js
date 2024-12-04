// import { DUMMY_NEWS } from "@/dummy-news";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function ImageFullScreen({ params }) {
	const newsItemSlug = params.slug;
	const newsItem = await getNewsItem(newsItemSlug);
	// news = await getAllNews();
	// const newsItem = news.find((newsItem) => newsItem.slug === newsItemSlug);

	if (!newsItem) {
		notFound();
	}

	return (
		<div className="fullscreen-image">
			<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
		</div>
	);
}
