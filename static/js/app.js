// from data.js
var tableData = data;

// select tbody 
tbody = d3.select("tbody")

// using Object.entries to get key, value data inside of the table
// and loop through them to add to the table in html
function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

//select the web user's input and the filter button
var dateInputText = d3.select("#datetime")
// var cityInputText = d3.select("#city")
// var stateInputText = d3.select("#state")
// var countryInputText = d3.select("#country")
// var shapeInputText = d3.select("#shape")
var button = d3.select("filter-btn")

// filter data with date that the user inputs
function datetimeSelect(){
    //don't refresh the page!
    d3.event.preventDefault();
    //print the value that was input
    console.log(dateInputText.property("value"));
    //create a new table showing only the filterd data
    var new_table = tableData.filter(sighting => sighting.datetime===dateInputText.property("value"))
    //display the new table
    displayData(new_table);
}

// function citySelect(){
//     //don't refresh the page!
//     d3.event.preventDefault();
//     //print the value that was input
//     console.log(cityInputText.property("value"));
//     //create a new table showing only the filterd data
//     var new_table = tableData.filter(sighting => sighting.city===cityInputText.property("value"))
//     //display the new table
//     displayData(new_table);
// }


// function stateSelect(){
//     //don't refresh the page!
//     d3.event.preventDefault();
//     //print the value that was input
//     console.log(stateInputText.property("value"));
//     //create a new table showing only the filterd data
//     var new_table = tableData.filter(sighting => sighting.state===stateInputText.property("value"))
//     //display the new table
//     displayData(new_table);
// }

// function countrySelect(){
//     //don't refresh the page!
//     d3.event.preventDefault();
//     //print the value that was input
//     console.log(countryInputText.property("value"));
//     //create a new table showing only the filterd data
//     var new_table = tableData.filter(sighting => sighting.country===countryInputText.property("value"))
//     //display the new table
//     displayData(new_table);
// }

// function shapeSelect(){
//     //don't refresh the page!
//     d3.event.preventDefault();
//     //print the value that was input
//     console.log(shapeInputText.property("value"));
//     //create a new table showing only the filterd data
//     var new_table = tableData.filter(sighting => sighting.shape===shapeInputText.property("value"))
//     //display the new table
//     displayData(new_table);
// }
// event listener to handle change and click
dateInputText.on("change", datetimeSelect)
// cityInputText.on("change",citySelect)
// stateInputText.on("change",stateSelect)
// countryInputText.on("change",countrySelect)
// shapeInputText.on("change",shapeSelect)
