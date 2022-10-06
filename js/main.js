let btnEle = document.getElementById("btn");
let addEle = document.getElementById("add");
var empty = []
var qt = 0;
var products = [
    { id: 1, Name: "tv", price: 40000, size: "40",qty:0 },
    { id: 2, Name: "phone", price: 20000, Ram: "6gp",qty:0 },
    { id: 3, Name: "fridge", price: 60000, color: "black",qty:0 },
    { id: 4, Name: "washingmachine", price: 30000, color: "blue",qty:0 }
]


function select() {
    let valueEle = parseInt(prompt("give value"));
    let findValue = products.find(function(item){
        return item.id==valueEle

    })
    empty.push(findValue)
    console.log(empty)
}
addEle.addEventListener("click",function(){
    qt+=1;
    var total = empty.qty =qt
    console.log(empty)
})
btnEle.addEventListener("click", function () {
    select();
})
