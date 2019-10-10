var items = ["super", "extremely" , "pitiable" , "parasitic" , "smelly"];
var  randomItem = items[Math.floor(Math.random() * items.length)];
console.log(randomItem);
var items2 = ["putrid", "grimey" , "smackworthy" , "liceridden" , "smallminded"];
var  randomItem2 = items2[Math.floor(Math.random() * items2.length)];
var items3 = ["smockmongerer", "spraytanner" , "gumswallower" , "gunkslurper" , "wormkisser"];
var  randomItem3 = items3[Math.floor(Math.random() * items3.length)];

var finalName = (randomItem + ", " + randomItem2 + ", " + randomItem3);

displayName.textContent = finalName;
