import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Inter, Roboto } from 'next/font/google'
import { cookies } from 'next/headers'

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

const page = () => {
    const newCookies = cookies();
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
        height={300}/>
        </>
    )
}

export default page; 