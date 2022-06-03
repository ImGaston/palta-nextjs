import React from 'react' 

const ProductAttributes = (description, ...otherAttributes) => {
    console.log(otherAttributes)
    return (
        <section className='pt-6 pb-6'>
            <h2>About this palta</h2>
            {/* <p>{ description }</p> */}
        </section>
    )
}

export default ProductAttributes