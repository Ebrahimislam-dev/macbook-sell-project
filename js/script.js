function setProductPrice(product, cost) {
    const productCost = document.getElementById(product + '-price');
    productCost.innerText = cost;
    return productCost
    // calculateTotal();
}
/* function getInputValue() {

}
function calculateTotal() {
    const extraMemoryCost = document.getElementById('memory-price').innerText;
    const extraStorageCost = document.getElementById('storage-cost').innerText
    let totalBalance = parseInt(extraMemoryCost);
    console.log(totalBalance);

    // const totalBalance = document.getElementById('total-balance');

} */

// memory 8gb event handeler
document.getElementById('btn-memory-8gb').addEventListener('click', function () {

    const memory8gbCost = setProductPrice('memory', 0);
    ret

})
// memory 16gb event handeler
document.getElementById('btn-memory-16gb').addEventListener('click', function () {

    const memory16gbCost = setProductPrice('memory', 180);

})
// Storage 256gb event handeler
document.getElementById('btn-storage-256gb').addEventListener('click', function () {

    const storage256gbCost = setProductPrice('storage', 0);

})
// Storage 512gb event handeler
document.getElementById('btn-storage-512gb').addEventListener('click', function () {

    const storage512gbCost = setProductPrice('storage', 100);

})
// Storage 1TB event handeler
document.getElementById('btn-storage-1tb').addEventListener('click', function () {

    const storage1tbCost = setProductPrice('storage', 180);

})

//  free delivery event handeler
document.getElementById('btn-free-delivery').addEventListener('click', function () {

    const deliveryfreeCost = setProductPrice('delivery', 0);

})
//  costly delivery event handeler
document.getElementById('btn-delivery-cost').addEventListener('click', function () {

    const deliveryCostly = setProductPrice('delivery', 20);

})



// bonus part
document.getElementById('pomo-btn').
    addEventListener('click', function () {
        const pomofiled = document.getElementById('pomo-filed');
        const userpomo = pomofiled.value;
        const total = document.getElementById('totalcost');
        const totalcost = parseFloat(total.innerText);
        
      
        
       if (userpomo == 'stevekaku') {
            const totalvalue = totalcost*.2;
            total.innerText = totalcost-totalvalue;
        }
        else {
            alert('invalid pomocode')
        } 
        pomofiled.value="";
    })