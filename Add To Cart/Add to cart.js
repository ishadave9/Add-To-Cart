var cartItems=[];
var isTotalHidden=true;

var Product1={
	name: "Product1",
	price: 700,
}

var Product2={
	name: "Product2",
	price: 500,
}

var Product3={
	name: "Product3",
	price: 250,
}

var Product4={
	name: "Product4",
	price: 900,
}

var Product5={
	name: "Product5",
	price: 350,
}

function addToCart(item){
	cartItems.push(item);

	document.getElementById("itemCounter").innerHTML=cartItems.length;
	console.log(cartItems);
	showTotal();
}

function clickCart(){
	isTotalHidden = !isTotalHidden;
	showTotal();
}

function showTotal(){
	var orderTotal=document.getElementById("orderTotal");
	orderTotal.innerHTML="";


	if(isTotalHidden === false){
		var total=0;
		for (var i = 0; i < cartItems.length; i++) {
			total += cartItems[i].price;
		}
		orderTotal.innerHTML += "Total: $" + total;
	}
}



