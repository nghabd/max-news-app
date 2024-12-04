import { NextResponse } from "next/server";

export function middleware(request) {
	console.log("hello from middleware");
	return NextResponse.next();
}
export const config = {
	matcher: "/news",
};
