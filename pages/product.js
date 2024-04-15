import React from 'react'
import Product from './components/Product';

const product = (props) => {
  return (
    <div className='container'>
      <div className='row'>
        {
          props.products.map(item => {
            return <Product date={item} key={item.id} />
          })
        }
      </div>
    </div>
  )
}

export default product
export async function getServerSideProps () {
  const response = await fetch("http://80.75.14.90:9090/products");
  const data = await response.json();
  return {
    props: {
      products: data,
    }


  }
}