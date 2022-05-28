import React from 'react'
import Link from 'next/link'

// const mapProductstoCards = (products) => 
//     products.map((product) => (
//         <div key={product.id}>
//             <Link href={`/product/${product.id}`}>
//                 <a>{product.name}</a>
//             </Link>
//         </div>
//     ))

// const ProductList = (products) => (
//         <div>
//             {/* { mapProductstoCards(products) } */}
//             {products.name}
//         </div>
//     )

    const mapProductsToCards = (products) =>
    products.map(({ name, id, price, image }) => (
        <div  key={id}>
            <Link href={`/product/${id}`}>
                    <a>{name}</a>
            </Link>
        </div>
    ))

const ProductList = ({ products }) => (
    <div>
        {mapProductsToCards(products)}
    </div>
)

export default ProductList