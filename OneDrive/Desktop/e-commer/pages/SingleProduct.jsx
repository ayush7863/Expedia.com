import React from 'react'

function SingleProduct(data) {
    console.log(data);
    const {id,image}=data
  return (
    <>
        <div>
            <image src={image}/>
            <p>{id}</p>
        </div>
    
    </>
  )
}

export default SingleProduct