import getDomain from "../lib/getDomain"

import BlogCard from "./card"

async function getData() {
    //1 endpoint - API?
    //const domain = getDomain()
    //const endpoint = '${domain}/api/posts'
    const endpoint = "http://localhost:3000/api/posts" // --. third party server
    
    const res = await fetch(endpoint, { next: { revalidate: 10 } })// HTTP GET

    if (!res.ok) {
        throw new error("Failed to fetch data")
    }

    if (res.headers.get("content-type") !== "application/json"){
        return { items: [] }
    }
    
    return res.json()
   // return{items: []}
}

export default async function BlogPage() {
    const data = await getData()
    const items = data && data.items ? [...data.items] : []
    
    //console.log(process.env.NEXT_PUBLIC_VERCEL_URL)
    return <main>
        <h1>Hello Tamrat!</h1>
        <p> Posts:</p>
        {items && items.map((item, idx) => {
            return <BlogCard title={item.title} key={'post-${idx}'}/>
        })}
    </main>
}