import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
// import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default async function InterceptedImageFullScreen({ params }) {
	const newsItemSlug = params.slug;
	const newsItem = await getNewsItem(newsItemSlug);
	// const news = await getAllNews();
	// const newsItem = news.find((newsItem) => newsItem.slug === newsItemSlug);

	if (!newsItem) {
		notFound();
	}

	return (
		<>
			<ModalBackdrop />
			<dialog className="modal" open>
				<div className="fullscreen-image">
					<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
				</div>
			</dialog>
		</>
	);
}
