(function (){


// items.forEach ( function(item){
// console.log(item.price);

// }); 

var prices = items.map( function(item){
  return item.price;

});
 console.log(prices);
 
 //Add all the prices together
 var sum = prices.reduce(function(previous, next){
  return previous + next;

});
console.log(sum);

//Divide by total number of items
var avg = sum / items.length;

console.log(avg);

//Convert to 2 decimal places
var converted = avg.toFixed(2);

console.log(converted);

//Make it a string
 var str = 'The average price is ' + converted;

//Make it show up on the page
var answerOne = document.querySelector('#answerOne')
var textNode = document.createTextNode(str);

answerOne.appendChild(textNode);


// console.log(items)
// var priceArray = [];



// items.map(function(){
//   for(i =0; i < items.length; i++)
//   var item = items[i].price * parseInt(items[i].quantity);
//   priceArray.push(item);

// })


// console.log(priceArray);

})();