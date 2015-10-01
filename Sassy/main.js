(function (){


console.log(items)
var priceArray = [];



items.map(function(){
  for(i =0; i < items.length; i++)
  var item = items[i].price * parseInt(items[i].quantity);
  priceArray.push(item);

})


console.log(priceArray);

})();