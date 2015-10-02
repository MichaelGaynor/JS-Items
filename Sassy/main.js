(function (){


// }); 

//QUESTION NUMBER ONE
var prices = items.map( function(item){
  return item.price;

});
 // console.log(prices);
 
 //Add all the prices together
 var sum = prices.reduce(function(previous, next){
  return previous + next;

});
// console.log(sum);

//Divide by total number of items
var avg = sum / items.length;

// console.log(avg);

//Convert to 2 decimal places
var converted = avg.toFixed(2);

// console.log(converted);

//Make it a string
 var str = 'The average price is ' + converted;

//Make it show up on the page
var answerOne = document.querySelector('#answerOne')
var textNode = document.createTextNode(str);

answerOne.appendChild(textNode);



//QUESTION NUMBER TWO
var rangeArray = [];

  //Filter for price range
  items.filter(function(value){
    if (value.price > 14 && value.price < 18){
      rangeArray.push(value.title);
    }
  })

//
var titleString3 = rangeArray.pop();
var titleString2 = rangeArray.pop();
var titleString1 = rangeArray.pop();

var answer2a = titleString1;
var answer2b = titleString2;
var answer2c = titleString3;

var answerTwoA = document.querySelector('#answerTwoA')
var textNode =document.createTextNode(answer2a);
answerTwoA.appendChild(textNode);

var answerTwoB = document.querySelector('#answerTwoB')
var textNode =document.createTextNode(answer2b);
answerTwoB.appendChild(textNode);

var answerTwoC = document.querySelector('#answerTwoC')
var textNode =document.createTextNode(answer2c);
answerTwoC.appendChild(textNode);



//QUESTION NUMBER THREE

var currencyArray = [];

items.filter(function(value){
  if (value.currency_code === "GBP"){
    currencyArray.push(value.title, value.price)
  }
});

var aspect2 = currencyArray.pop();
var aspect1 = currencyArray.pop();

var answerThreeA = document.querySelector('#answerThreeA')
var textNode = document.createTextNode(aspect1)
answerThreeA.appendChild(textNode);

var answerThreeB = document.querySelector('#answerThreeB')
var textNode = document.createTextNode(aspect2)
answerThreeB.appendChild(textNode);



//QUESTION NUMBER FOUR




})();