import React from 'react'
const sale = (props) => {
  return (
    <>
    </>
  )
}

export default sale
export async function getStaticProps(context) {
  const response = await fetch("http://80.75.14.90:9090/public/mainSlider");
  const data = await response.json();
  return {
    props: {
      slideBar1: data,
    },
    revalidate: 5000,

  };
}
