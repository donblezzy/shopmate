import React from 'react'
import './Card.css'

const Card = ({ product }) => {
    const { name, price, image } = product
    
    return (
        <main>
            <section className='cartCard'>
                <img src={image} alt={name} />
                <p className='productName'>{name}</p>
                <p className='productPrice'>${price}</p>
                <button>Remove</button>
            </section>
        </main>
    )
}

export default Card 
