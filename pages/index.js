import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import ProductList from '@/components/ProductList/ProductList';

const Home = () => {
    const [productList, setproductList] = useState([]);

    useEffect(() => {
        window.fetch('/api/palta')
        .then((response) => response.json())
        .then(({ data }) => {
            setproductList(data)
        })
    }, [])


    return (
        <div>
            <h1>Hola!</h1>
            {/* <ProductList products={productList}></ProductList> */}
            {productList.map((product) => (
                <div key={product.id}>
                    <Link href={`/product/${product.id}`}>
                        <a>{product.name}</a>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Home 