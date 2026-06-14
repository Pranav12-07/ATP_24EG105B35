function Product(props){          //props:{productObj:{}}   props reseve data from parent component
	// console.log(props.productObj)
	const {productObj} = props;
//state
//return a react element
return(
	<div className="shadow-2xl p-5">
	<h2 className="text-2xl">{productObj.title}</h2>
	<img src={productObj.image} alt=""/>
	<p className="text-bol">{productObj.description}</p>
	<p className="text-lg">{productObj.price}</p>
	</div>
)
}

export default Product;