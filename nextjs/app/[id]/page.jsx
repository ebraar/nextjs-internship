import React from "react";

const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}

const page = async ({params}) => {

    const data = await fetchPosts();

    console.log(data, "data");
    // console.log(params.id, "paramssss");

    return (
        <div>page</div>
    )
}

export default page;

export async function generateStaticParams(){
    const posts = await fetchPosts();
    return posts.map(post => ({id : post.id.toString()}))
}