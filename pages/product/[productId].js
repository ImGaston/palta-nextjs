import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar/Navbar'


const ProductItem = () => {
    const router = useRouter();
    const [product, setproduct] = useState([]);

    useEffect(() => {
        window.fetch(`/api/palta/${router.query.productId}`)
        .then(response => response.json())
        .then((data) => { setproduct(data) })
        .catch(err => console.error(err.message) )
    }, [router.query])
    return (
        <div>
            <div>El nombre del producto es: {product.name} </div>
            <div>Sale: {product.price} </div>
        </div>
    )
}

export default ProductItem