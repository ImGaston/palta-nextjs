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
        <main className=''>
            <h1 className="text-3xl font-bold text-center">Palta Shop</h1>
            <ProductList products={productList}></ProductList>
        </main>
    )
}

export default Home 