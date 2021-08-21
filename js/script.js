function setProductPrice(product, cost) {
    const productCost = document.getElementById(product + '-price');
    productCost.innerText = cost;
    const productCosting = parseFloat(productCost.innerText)
    const totalBalance = document.getElementById('total-balance');
    const prevtotal = parseFloat(totalBalance.innerText);
    totalBalance.innerText = prevtotal + productCosting;
    let totalcost = document.getElementById('totalcost');
    // let totalcosting = parseFloat(totalcost.innerText);

    totalcost.innerText = totalBalance.innerText;
}


// memory 8gb event handeler
document.getElementById('btn-memory-8gb').addEventListener('click', function () {

    const memory8gbCost = setProductPrice('memory', 10);



})
// memory 16gb event handeler
document.getElementById('btn-memory-16gb').addEventListener('click', function () {
    setProductPrice('memory', 180);

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

/* let totalcost = document.getElementById('totalcost');
let totalcosting = parseFloat(totalcost.innerText);
const totalbalance = document.getElementById('total-balance');
const totalbalancecost = parseFloat(totalbalance.innerText);
totalcost.innerText = totalbalancecost; */

// bonus part
 document.getElementById('pomo-btn').
    addEventListener('click', function () {
        const pomofiled = document.getElementById('pomo-filed');
        const userpomo = pomofiled.value;
        const totalcost = document.getElementById('totalcost');
        let totalcosting = parseFloat(totalcost.innerText);
       




        if (userpomo == 'stevekaku') {
           const totalcostdiscount = totalcosting * 0.2;
            totalcost.innerText = totalcosting - totalcostdiscount;
        }
        else {
            alert('invalid pomocode')
        }
        pomofiled.value = "";

    }) 