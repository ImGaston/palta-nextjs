import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
//@TODO: Aplicar grid para hacer que sean dos paltas por fila

    const mapProductsToCards = (products) =>
    products.map(({ name, id, price, image }) => (
            <Link key={id} href={`/product/${id}`}>
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm m-4">
                    <Image src={`${image}`}alt="palta" width="120" height="120" />
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <div className="card-actions justify-end">
                        <a><button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">explorar</button></a>
                        </div>
                    </div>
                </div>
            </Link>
    ))

const ProductList = ({ products }) => (
    <div>
        {mapProductsToCards(products)}
    </div>
)

export default ProductList