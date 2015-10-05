(function (){


//QUESTION NUMBER ONE
var prices = items.map( function(item){
  return item.price;

});
 
 //Add all the prices together
 var sum = prices.reduce(function(previous, next){
  return previous + next;
});

//Divide by total number of items
var avg = sum / items.length;

//Convert to 2 decimal places
var converted = avg.toFixed(2);

//Make it a string
 var str = 'The average price is $' + converted;

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

//Pop out the elements to individual variables
var titleString3 = rangeArray.pop();
var titleString2 = rangeArray.pop();
var titleString1 = rangeArray.pop();

//Essentially unnecessary extra step, i think
var answer2a = titleString1;
var answer2b = titleString2;
var answer2c = titleString3;

//Introduce the popped elements into the html
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

// var woodArray = [];

// var woodish = items.filter(function(obj){
//   if (obj.materials.indexOf("wood") !== -1){
//     woodArray.push(obj.title);
//   }
// });
// console.log(woodArray);

// var item1 = woodArray.shift();
// var item2 = woodArray.shift();
// var item3 = woodArray.shift();
// var item4 = woodArray.shift();
// var item5 = woodArray.shift();

// var answerFourA = document.querySelector('#answerFourA')
// var textNode = document.createTextNode(item1)
// answerFourA.appendChild(textNode);

// var answerFourB = document.querySelector('#answerFourB')
// var textNode = document.createTextNode(item2)
// answerFourB.appendChild(textNode);

// var answerFourC = document.querySelector('#answerFourC')
// var textNode = document.createTextNode(item3)
// answerFourC.appendChild(textNode);

// var answerFourD = document.querySelector('#answerFourD')
// var textNode = document.createTextNode(item4)
// answerFourD.appendChild(textNode);

// var answerFourE = document.querySelector('#answerFourE')
// var textNode = document.createTextNode(item5)
// answerFourE.appendChild(textNode);


var woodish3 = [];

var woodish = items.filter(function (obj){
  return obj.materials.indexOf('wood') !== -1;
});

var woodish1 = woodish.filter(function (obj){
    woodish3.push(obj.title);
});

  addList('#answerFour', woodish3);


//QUESTION NUMBER FIVE
//Creates paragraph
function addParagraph(selector, text){
  var container = document.querySelector(selector);
  var p = document.createElement('p');
  var node = document.createTextNode(text);
  p.appendChild(node);
  container.appendChild(p);
}
//Creates list
function addList(selector, list){
  var container = document.querySelector(selector);
  var ul = document.createElement('ul');
  list.forEach(function(item){
    var li = document.createElement('li');
    var node = document.createTextNode(item);
    li.appendChild(node);
    ul.appendChild(li);
  });
container.appendChild(ul);
}

var madeOf = items.filter(function(obj){
  if (obj.materials.length > 7){
    return true
  }
});
madeOf.forEach(function(obj){
  addParagraph('#answerFive', obj.title + ' has ' + obj.materials.length + ' materials:');
  addList('#answerFive', obj.materials);
})



//QUESTION NUMBER SIX

var creatorArray = [];

items.filter(function(maker){
  if (maker.who_made === 'i_did'){
    creatorArray.push(maker.title)
  };
});
var sellerInfo = creatorArray.length + ' were made by their sellers';

var answerSix = document.querySelector('#answerSix')
var textNode = document.createTextNode(sellerInfo)
answerSix.appendChild(textNode);



})();