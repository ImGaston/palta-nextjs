import React, { useEffect, useState } from 'react'
import Link from 'next/link';

const Home = () => {
    const [productList, setproductList] = useState([]);

    useEffect(() => {
        //pido la info
        window.fetch('/api/palta')
        //lo transformo en un JSON
        .then((response) => response.json())
        //lo cargo en el estado de productos
        .then(({ data, length }) => {
            setproductList(data)
        })
    }, [])


    return (
        <div>
            <h1>Hola!</h1>
            {productList.map((product) => (
                <div>
                    <Link href={`/product/${product.id}`}>
                        <a>{product.name}</a>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Home 