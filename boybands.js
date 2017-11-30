var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand; 
// Keep track of which veggie we're on in the loop
var currentVeggie; 

var bandElem = document.getElementById('boy-bands')

// Get a reference to the appropriate DOM element for vegetables
var vegElem = document.getElementById('vegetables');

// Start looping
for (let i = 0; i < loopCount; i += 1) {
  currentBand = bands[i]
  console.log(currentBand);
  bandElem.innerHTML+= `<p>${bands[i]}</p>`;

  
  currentVeggie = vegetables[i];
  console.log(currentVeggie);
  vegElem.innerHTML+= `<p>${vegetables[i]}</p>`;
  


}