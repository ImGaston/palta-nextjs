import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar/Navbar'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"


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
            <Navbar />
            <div>El nombre del producto es: {product.name} </div>
            <div>Sale: {product.price} </div>
            <Button colorScheme='teal' variant='solid' m={[3]}>Comprar</Button>
        </div>
    )
}

export default ProductItem