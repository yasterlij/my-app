import { Flow_Rounded } from "next/font/google";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({items: [{id: 1, title:"Meklit from api posts GET Method"}]})
}

// export async function POST() {
//     return NextResponse.json({id:1,title:"Hello from api posts & POST method"})
// }