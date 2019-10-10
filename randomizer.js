
function randomItems() {
//gets the probability number and passes into the finalName which represents rarity
var probsA = [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5];
var  random1 = probsA[Math.floor(Math.random() * probsA.length)];
var probsB = [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5];
var  random2 = probsB[Math.floor(Math.random() * probsB.length)];
var probsC = [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5];
var  random3 = probsC[Math.floor(Math.random() * probsC.length)];
var finalName = random1 * random2 * random3;
if (finalName <= 10) {var randomType = "common";}
else if (finalName <= 27) {var randomType = "uncommon";}
else if (finalName <= 40) {var randomType = "sturdy";}
else if (finalName <= 60) {var randomType = "strong";}
else if (finalName <= 70) {var randomType = "superior";}
else if (finalName <= 80) {var randomType = "elven-made";}
else if (finalName <= 100) {var randomType = "hell-forged";}
else if (finalName <= 125) {var randomType = "divine";}
var finalRandom = randomType;
//gets the type of item, all of which are equal 
var itemsA = ["helmet", "sword", "shield", "shoulder-plate", "boot", "belt", "chest-plate", "knife","ring","neclace","bracelet"];
var randomItem1 = itemsA[Math.floor(Math.random() * itemsA.length)];
console.log(randomItem1);
var finalItem = randomItem1;
var typeA = ["general-purpose", "firey", "poisonous", "ice", "frightening", "quick", "heavy","annointed"];
var randomType1 = typeA[Math.floor(Math.random() * typeA.length)];
console.log(randomType1);
var finalType = randomType1;
$('.equipment-hold').append("<p class='equipment'>" + finalRandom + " " + finalType + " " + finalItem + "</p>");
 $('.running-dialogue').prepend('<p><strong>A new item has been added to your Equipment!</strong></p>');
}

