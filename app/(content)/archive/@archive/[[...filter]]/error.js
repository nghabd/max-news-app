"use client";
export default function FilterError({ error }) {
	return (
		<div>
			<h1>Error occured ...</h1>
			<p>{error.message}</p>
		</div>
	);
}
