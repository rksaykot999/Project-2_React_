import React from 'react'

export default function Products() {
    const product = {
        id:1,
        name: "Shoes",
        brand:"Nike",
        description: "If a dog chews shoes whose shoes does he choose?",
        img:"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    }
    const handleClick =(item) =>{
        console.log(item)
    }
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={product.img}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <h3 className="card-title">{product.brand}</h3>
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>handleClick(product)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}
