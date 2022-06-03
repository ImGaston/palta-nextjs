import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
//@TODO: Definir centrado width y centrarlo

    const mapProductsToCards = (products) =>
    products.map(({ name, id, price, image }) => (
            <Link key={id} href={`/product/${id}`}>
                <a className="inline-block p-6 rounded-lg shadow-lg bg-white max-w-sm m-4">
                    <div>
                        <Image src={`${image}`}alt="palta" width="240" height="240" />
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p className="card-content">{price}</p>
                        </div>
                    </div>
                </a>
            </Link>
    ))

const ProductList = ({ products }) => (
    <div className="grid grid-cols-2 gap-4 justify-center justify-items-center">
        {mapProductsToCards(products)}
    </div>
)

export default ProductList