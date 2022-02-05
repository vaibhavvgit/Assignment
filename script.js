
const myCart = `{
    "data": [
        {
            "name": "Cosmetics",
            "productList": [
                {
                    "name": "Hair Oil",
                    "price": 122
                },
                {
                    "name": "Face wash",
                    "price": 123
                }
            ]
        },
        {
            "name": "Household",
            "productList": [
                {
                    "name": "Hair Oil",
                    "price": 122
                },
                {
                    "name": "Face wash",
                    "price": 123
                }
            ]
        }
    ]
}`

const Cart = JSON.parse(myCart)


function b1()
{

    if(Cart.data[0].name=="Cosmetics")
    {
    
        console.log(Cart.data[0].productList[0]);
  console.log("Product Added to the cart");
  console.log("List of products present in cart array:")
  console.log(Cart.data[1].productList[1]);
    document.getElementById("A").innerHTML=Cart.data[0].productList[0].name
    document.getElementById("B").innerHTML=Cart.data[0].productList[0].price
    }
  
  

}




function b2()
{
  
    if(Cart.data[0].name=="Cosmetics")
    {
        console.log(Cart.data[0].productList.pop())
    
  console.log("Product removed from the cart");
  console.log("List of products present in cart array:")
  console.log(Cart.data[0].productList[0]);
  document.getElementById("A").innerHTML=Cart.data[0].productList[0].name
  document.getElementById("B").innerHTML=Cart.data[0].productList[0].price
    }

  
  
  
}
function b3()
{
if(Cart.data[0].name=="Cosmetics")
{
    console.log(Cart.data[0].productList[1]);

  console.log("Product Added to the cart");
  console.log("List of products present in cart array:")
  console.log(Cart.data[1].productList[1]);
  document.getElementById("C").innerHTML=Cart.data[0].productList[0].name
  document.getElementById("D").innerHTML=Cart.data[0].productList[0].price

}
}




function b4()
{
    if(Cart.data[0].name=="Cosmetics")
    {
  console.log(Cart.data[0].productList.pop())
  console.log("Product removed from the cart");
  console.log("List of products present in cart array:")
  console.log(Cart.data[0].productList[1]);
  document.getElementById("C").innerHTML=Cart.data[0].productList[1].name
  document.getElementById("D").innerHTML=Cart.data[0].productList[1].price
    }
}




function b5()
{
    if(Cart.data[1].name=="Household")
    {
  console.log(Cart.data[1].productList[0]);
  console.log("Product Added to the cart");
  console.log("List of products present in cart array:")
  console.log(Cart.data[1].productList[1]);
  document.getElementById("E").innerHTML=Cart.data[0].productList[1].name
  document.getElementById("F").innerHTML=Cart.data[0].productList[1].price
    }
}




function b6()

{
    if(Cart.data[1].name=="Household")
    {
  console.log(Cart.data[1].productList.pop())
  console.log("Product removed from the cart");
  console.log("List of products present in cart array:")
  console.log(Cart.data[1].productList[0]);
  document.getElementById("E").innerHTML=Cart.data[1].productList[0].name
  document.getElementById("F").innerHTML=Cart.data[1].productList[0].price
    }
}




function b7()
{
    if(Cart.data[1].name=="Household")
    {
        console.log(Cart.data[1].productList[1]);
  console.log("Product Added to the cart");
  console.log("List of products present in cart array:")
  console.log(Cart.data[1].productList[1]);
  document.getElementById("G").innerHTML=Cart.data[0].productList[1].name
  document.getElementById("H").innerHTML=Cart.data[0].productList[1].price
    }
}




function b8()
{

    if(Cart.data[1].name=="Household")
    {
  console.log(Cart.data[1].productList.pop())
  console.log("Product removed from the cart");
  console.log("List of products present in cart array:")
  console.log(Cart.data[1].productList[1]);
  document.getElementById("G").innerHTML=Cart.data[1].productList[1].name
  document.getElementById("H").innerHTML=Cart.data[1].productList[1].price
    }
}