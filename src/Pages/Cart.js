import React from 'react'
import useTitle from '../Hooks/useTitle'
import Card from '../components/Card'

const Cart = () => {

  useTitle("Cart")

  const products = [
    { "id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.jpg" },
    { "id": 2, "name": "bOAt Rockerz 450", "price": 49, "image": "/assets/images/1002.jpg" }
]
  return (
    <div>
    {products.map((product) => (
      <Card key={product.id} product={product} />
    ))}
      
    </div>
  )
}

export default Cart
