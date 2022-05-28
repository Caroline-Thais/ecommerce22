import React from 'react'

const Home = () => {
  return (
    <>
      HomeBanner
      <div>
        {['Product1', 'Product2'].map(
          (product) => product
        )}
      </div>
      Footer
    </>
  )
}

export default Home