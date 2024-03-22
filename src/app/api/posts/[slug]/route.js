import { Flow_Rounded } from "next/font/google";
import { NextResponse } from "next/server";

export async function GET(request, context) {
    const { params } = context
    const { slug } = params
    console.log(request,context)
    return NextResponse.json({slug:slug})
}

