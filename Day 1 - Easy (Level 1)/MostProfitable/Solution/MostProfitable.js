var test_case1 = {

    cost : [100,120,150,1000],
    price : [110,110,200,2000],
    sales : [20,100,50,3],
    items : ["Video Card","256M Mem","CPU/Mobo combo","Complete machine"],
    expected : "Complete machine"

},

test_case2 = {

    cost : [100],
    price : [100],
    sales : [134],
    items : ["Service, at cost"],
    expected : " "

}

test_case3 = {

    cost : [38,24],
    price : [37,23],
    sales : [1000,643],
    items : ["Letter","Postcard"],
    expected : " "

}

test_case4 = {

    cost : [10,10],
    price : [11,12],
    sales : [2,1],
    items : ["A","B"],
    expected : "A"

}

console.log("\n Case 1, Expected Result: "+test_case1.expected+", Output: "+bestItem(test_case1.cost,test_case1.price,test_case1.sales,test_case1.items));
console.log("\n Case 2, Expected Result: "+test_case2.expected+", Output: "+bestItem(test_case2.cost,test_case2.price,test_case2.sales,test_case2.items));
console.log("\n Case 3, Expected Result: "+test_case3.expected+", Output: "+bestItem(test_case3.cost,test_case3.price,test_case3.sales,test_case3.items));
console.log("\n Case 4, Expected Result: "+test_case4.expected+", Output: "+bestItem(test_case4.cost,test_case4.price,test_case4.sales,test_case4.items));

function bestItem(cost,price,sales,items){
    //Variable declaration and initialization
	var n = cost.length;
    var MaxProfit = 0;
    var MostProfitable = 0;

    //Itearate through all items
    for (var i = 0; i < n; i++) {
        var profit = (price[i] - cost[i]) * sales[i]; //Calculating profit for each item
        if (profit > MaxProfit) {
        MaxProfit = profit; 	//Storing most profitable iteme and its index.
        MostProfitable = i;
        }
    }
    if (MaxProfit == 0)
        return "";
    else
        return items[MostProfitable];
}