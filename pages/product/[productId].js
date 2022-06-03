import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ProductAttributes from '@/components/ProductAttributes/ProductAttributes';


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
            <div className='pb-6'>Sale: {product.price} </div>
            <table className='table-fixed border border-slate-400'>
                <thread>
                    <tr>
                        <th className='px-6 py-4'>Attributes</th>
                    </tr>
                </thread>
                <tbody>
                <tr>
                    <td className='border border-slate-300 px-6 py-4'>Shape</td>
                    <td className='border border-slate-300 px-6 py-4'>{product.name}</td>
                </tr>
                <tr>
                    <td className='border border-slate-300 px-6 py-4'>Hardiness</td>
                    <td className='border border-slate-300 px-6 py-4'>{product.name}</td>
                </tr>
                <tr>
                    <td className='border border-slate-300 px-6 py-4'>Taste</td>
                    <td className='border border-slate-300 px-6 py-4'>{product.name}</td>
                </tr>
                </tbody>
            </table>
            <ProductAttributes {...product.attributes}/>
        </div>
    )
}

export default ProductItem