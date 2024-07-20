import React from 'react';

const ProductList = React.lazy(() => {
  return import("./ProductList")
})

export default function Index() {
  const [count, setCount] = React.useState(0)
  const [showProducts, setShowProducts] = React.useState(false)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <>
      <h1>The current count is {count}</h1>
      <button className="button" onClick={decrement}>
        -
            </button>
      <button className="button" onClick={increment}>
        +
      </button>
      <br />
      <button
        className="button"
        onClick={() => setShowProducts(prev => !prev)}
      >
        Show Products
            </button>
      <br />
      <br />
      <div className="products-list">
        {showProducts && <ProductsList />}
      </div>
    </>
  )
}