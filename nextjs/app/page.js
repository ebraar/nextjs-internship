import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Inter, Roboto } from 'next/font/google'
import { cookies } from 'next/headers'
import Trial from './trial'
import { redirect } from 'next/navigation'

const inter = Inter({
    subsets: ['latin'],
    // default can also use "swap" to ensure custom font always shows
    display: 'optional',
})

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'optional'
})

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

// const fetchData = async () => {
//     const res = await fetch('https://restcountries.eu/rest/v2/name/eesti')
//     //bunu çektikten sonra (fetch) res içerisinde tutulacak.
//     return res.json();
// }



const page = async() => {
    await sleep(3000)
    const newCookies = cookies();
    let nav1 = false

    // const data = await fetchData();
    // console.log(data, "data");

    if(nav1){
        redirect('/about')
    }

    console.log("berkant");

    console.log(newCookies.getAll())
    return (
        <>
        <div>page</div>
        <Link className={inter.className} href="/about">Yönlendirme1</Link>
        <Link className={roboto.className} href="/about?name=berkant&surname=kaya">Yönlendirme2</Link>
        <Link href={{
            pathname : "/about",
            query : {
                name : "berkant",
                surname: "kaya"
            }
        }}>Yönlendirme3</Link>
        <Image src='https://images.pexels.com/photos/15574931/pexels-photo-15574931/free-photo-of-pencereler-camlar-kentsel-cephe.jpeg'
        width={300}
        height={300}
        />
        <Trial/>
        </>
    )
}

export default page;