async function getData() {
    //1 endpoint - API?
    // const endpoint = "http://ocalhost:3000/api/posts"// --. third party server
    // const res = await fetch(endpoint)// HTTP GET

    // if (!res.ok) {
    //     throw new error("Failed to fetch data")
    // }
    // return res.json()
    src/app/blog
}

export default async function BlogPage() {
    const data = await getData()
    const items = data && data.items ? [...data.items] : []
    console.log(items)
    return <main>
        <h1>Hello Tamrat!</h1>
        <p> Posts:</p>
        {items && items.map((item, idx) => {
            return <li key={'post-${idx}'}>{ item.title}</li>
        })}
    </main>
}