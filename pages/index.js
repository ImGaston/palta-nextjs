import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
    const [productList, setproductList] = useState([]);

    useEffect(() => {
        //pido la info
        window.fetch('/api/palta')
        //lo transformo en un JSON
        .then((response) => response.json())
        //lo cargo en el estado de productos
        .then(({ data, length }) => {
            setproductList(data)
        })
    }, [])


    return (
        <div>
            <h1>Hola!</h1>
            <Navbar />
            {productList.map((product) => (
                <div>
                    <div>{product.name}</div>
                    <div>{product.image}</div>
                </div>
            ))}
        </div>
    )
}

export default Home 