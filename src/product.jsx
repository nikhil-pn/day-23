import React, { useEffect, useState } from 'react'

function Product() {
    const [categories, setCategories] = useState([])
    const [products, setproducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)

    function getAllCategories(){
        fetch(`https://fakestoreapi.com/products/categories`)
            .then(res=>res.json())
            .then(json=>{ 
                setCategories(json)
                console.log(json);
            })
    }
    function getProducts(){
        fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
            .then(res=>res.json())
            .then(products =>{
                console.log(products, "products");
                setproducts(products)
            })
    }
    const handleChange = (e)=>{
        console.log(e.target.value);
        setSelectedCategory(e.target.value)
    }
    useEffect(()=>{
        getAllCategories()
    },[])

    useEffect(()=>{
        console.log("use effect wil be called when modifed");
        if(selectedCategory){
            getProducts()
        }

    },[selectedCategory])

    return (
    <div>
        <select name='categories' id='categories' onChange={handleChange} >
            {categories.map(category => <option key={category} value={category}  >{category}</option>)}
        </select>
        <section>
            <h1>{selectedCategory}</h1>
            {products.map(product=> {
                return(<section className='product-item'  key={product.id}>
                <img style={{height : 200, width : 200, objectFit: "contain"}} src={product.image} />
                <section>
                    <h2>{product.title}</h2>
                    <h3>{product.description}</h3>
                </section>
            </section>)
            })}
        </section>
    </div>
  )
}

export default Product