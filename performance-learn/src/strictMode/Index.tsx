import React from "react"
import Product from "./Product"
import productsData from "./data"
import { slowCountItems } from "./utils"

export default function Index() {
  const [count, setCount] = React.useState(0)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }
  
  const productsCount = React.useMemo(() => {
    return slowCountItems(productsData, 500)
  }, [productsData])
  
  // const productsCount = slowCountItems(productsData, 500)

  return (
    <>
      <h1>The current count is {count}</h1>
      <button className="button" onClick={decrement}>-</button>
      <button className="button" onClick={increment}>+</button>
      <br />
      <br />
      <h2>There are {productsCount} products</h2>
      <div className="products-list">
        {
          productsData.map(product => (
            <Product key={product.id} product={product} />
          ))
        }
      </div>
    </>
  )
}