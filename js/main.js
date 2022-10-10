var empty = [];
var products =
  
[   { id: 1, Name: "tv", price: 40000, size: "40" },
    { id: 2, Name: "phone", price: 20000, Ram: "6gp"},
    { id: 3, Name: "fridge", price: 60000, color: "black" },
    { id: 4, Name: "washingmachine", price: 30000, color: "blue"}];


var btnEle=document.getElementById("add");
var btn2Ele=document.getElementById("incre");
var btn3Ele=document.getElementById("decre");
var btn4Ele=document.getElementById("del");


btnEle.addEventListener("click",function(){
    let value=parseInt(prompt("enter value"));
if(value){

    let result=products.find(function(order){
    return order.id===value;
})
    result.qty=1;
    empty.push(result);
    console.log(empty);
}
})


function increment(){
    let a=parseInt(prompt("increment +"));

    empty.map((order)=>{
        if(order.id==a){

           order.qty+=1;
        }   
    })
    console.log(empty);
}
btn2Ele.addEventListener("click",increment);

function decrement(){
    let a=parseInt(prompt("decrement -"));

    empty.map((order)=>{
        if(order.id==a){
            order.qty-=1;
            console.log(empty);
            empty.map((order)=>{
                if(order.qty==0){
                    empty.splice(0);
                    console.log(empty);
                }
            })
        }
        
    })
}
btn3Ele.addEventListener("click",decrement);

function del(){
let a=parseInt(prompt("delete your protect"));
let find = empty.find(element => element.id === a);
if(find){
    let ind=empty.findIndex(mugesh => mugesh.id === a);
    empty.splice(ind,1)
}
console.log(empty);
}
btn4Ele.addEventListener("click",del);



