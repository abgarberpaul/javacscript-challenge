// Get a reference to the table body
var tbody = d3.select("tbody");

// from data.js
var tableData = data;

// YOUR CODE HERE!

// Sets up initial table format of tables and rows
// (runs when page loads)
data.forEach(function(UFO_Data) {
  console.log(UFO_Data);
  var row = tbody.append("tr");
  Object.entries(UFO_Data).forEach(function([key, value]) {
    console.log(key, value);
    // set up cells (format)
    var cell = row.append("td");
    cell.text(value);
  });
});

// ACTIONS responding to button click:
// (property("value") is user entry)

// BUTTON: Datetime
function selectdate(){
var datetime = d3.select("#datetime").property("value")
var filterdata = data.filter((sighting) => {
  return sighting.datetime == datetime;
})

// BUTTON: Country
var country = d3.select("#country").property("value")
if(country){
var filterdata = filterdata.filter((sighting) => {
  return sighting.country == country;
})

// // BUTTON: State
var state = d3.select("#state").property("value")
if(state){
var filterdata = filterdata.filter((sighting) => {
  return sighting.state == state;
})

// // BUTTON: City
var city = d3.select("#city").property("value")
if(city){
var filterdata = filterdata.filter((sighting) => {
  return sighting.city == city;
})

// BUTTON: Shape
var shape = d3.select("#shape").property("value")
if(shape){
var filterdata = filterdata.filter((sighting) => {
  return sighting.shape == shape;
})
}
}
}
}
// // BUTTON: VAR DURATION
// var duration = d3.select("#duration").property("value")
// if(duration){
// var filterdata = filterdata.filter((sighting) => {
//   return sighting.durationMinutes == duration;
// })
// }

//set table to blank before search
tbody.html("")

//Rebuilds table based on search filter:
filterdata.forEach(function(UFO_Data) {
    console.log(UFO_Data);
    var row = tbody.append("tr");
    Object.entries(UFO_Data).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

// // BUTTON: WORD IN TEXT

function descriptionSearch(){
var descriptionSearch = d3.select("#descriptionSearch").property("value")
if(descriptionSearch){
var filterdata = filterdata.filter((sighting) => {
  return sighting.comments == descriptionSearch;
})

//set table to blank before search
tbody.html("")

//Rebuilds table based on search filter:
filterdata.forEach(function(UFO_Data) {
    console.log(UFO_Data);
    var row = tbody.append("tr");
    Object.entries(UFO_Data).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
}

//sets the page up to "listen" to perform function on click event
d3.select("#filter-btn").on("click", selectdate)


//sets up the page to "listen" to perform function on second button
d3.select("#filter-btn-2").on("click", descriptionSearch)