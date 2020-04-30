// from data.js
var tableData = data;
publishtable(tableData)

// for every siting in the table used add a row containing it in the table
function publishtable(intable) {
    var tbody = d3.select("tbody");
    for (var i=0; i<intable.length; i++) {
        var row=tbody.append("tr");
        var rowdata=intable[i];
        row.append("td").text(rowdata.datetime);
        row.append("td").text(rowdata.city.toUpperCase());
        row.append("td").text(rowdata.state.toUpperCase());
        row.append("td").text(rowdata.country.toUpperCase());
        row.append("td").text(rowdata.shape);
        row.append("td").text(rowdata.durationMinutes);
        row.append("td").text(rowdata.comments);
    }
}


// get button
var button = d3.select("#filter-btn");

//get date entry
var dtchg = d3.select("#datetime");

//set default filtered data table as the original data table
var fildat=tableData

// filter table by date
function newdt(nd) {
    filtab=[]
    for (var k=0; k<tableData.length; k++) {
        if (tableData[k].datatime===nd) {
            filtab.push(tableData[k]);
        }
    }
// if the date is not in the table, return the entire table
    if (filtab===[]) {filtab=tableData;}
    return filtab;
}


dtchg.on("change", function() {
    var newdate=d3.event.target.value;
    return newdate;
});

button.on("click", revise());

function revise() {dtchg.on("change", function() {
    var newdate=d3.event.target.value;
    newdt(newdate);
    publishtable(filtab);
})}