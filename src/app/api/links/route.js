import { Flow_Rounded } from "next/font/google";
import { NextResponse } from "next/server";


export async function POST() {
    // FORM DATA
    // API JSON POST DATA
    return NextResponse.json({id:1,title:"Hello from api posts & POST method"})
}