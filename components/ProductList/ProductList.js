import React from 'react'
import Link from 'next/link'

const mapProductstoCards = (products) => 
    products.map((product) => (
        <div key={product.id}>
            <Link href={`/product/${product.id}`}>
                <a>{product.name}</a>
            </Link>
        </div>
    ))

const ProductList = (products) => (
        <div>
            {/* { mapProductstoCards(products) } */}
            {products.name}
        </div>
    )


export default ProductList