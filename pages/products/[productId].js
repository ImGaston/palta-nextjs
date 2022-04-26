import React from 'react'
import { useRouter } from 'next/router'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"

const ProductItem = () => {
    // const router = useRouter();
    const { query:{ productId } } = useRouter();
    return (
        <div>
            <div>El nombre del producto es: {productId}</div>
            <Button colorScheme='teal' variant='solid' m={[3]}>Comprar {productId}</Button>
        </div>
    )
}

export default ProductItem