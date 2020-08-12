var workHours = ["6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

var today = new Date();
var date = today.getFullYear() + ("") + '-' + ("") + (today.getMonth() + 1) + ("") + '-' + ("") + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var hour = today.getHours()
var dateTime = date + ' ' + time;

// This method adds the current date and time to the currentDay id
$("#currentDay").append(dateTime);


// This function is what renders the hour blocks onto the screen and contains the if/else statement which determines 
// which color the blocks will turn depending on the time of day
function renderHours() {

    for (var i = 0; i < workHours.length; i++) {

        var row = $("<div>");
        row.addClass("row");
        row.addClass("border");
       
        var timeCol = $("<div>")
        timeCol.addClass("col-md-2");
        // timeCol.addClass("border");
        timeCol.text(workHours[i])
        timeCol.addClass("m-auto");
        timeCol.addClass("text-center");
        
        var inputCol = $("<div>");
        var textArea = $("<textarea>")
        textArea.attr("id", "textarea-"+ parseInt(workHours[i]));
        inputCol.addClass("col-md-8");
        // inputCol.addClass("border");
        inputCol.addClass("m-auto");
        inputCol.addClass("text-center");
        inputCol.append(textArea)
       
        var saveCol = $("<div>");
        var saveBtn = $("<button>");
        saveBtn.text("SAVE");
        saveBtn.attr("id", parseInt(workHours[i]))
        saveBtn.addClass("btn btn-primary saveBtn");
        saveCol.addClass("col-md-2");
        // saveCol.addClass("border");
        saveCol.addClass("m-auto");
        saveCol.addClass("text-center");
        saveCol.append(saveBtn);

        row.append(timeCol, inputCol, saveCol);
        $("#hourBlocks").append(row);


         // statement sets the color depeneding on the hour
        var calNum = parseInt(workHours[i]);

        if (calNum === hour) {
            row.addClass("present");

        }
        else if (calNum < hour) {
            row.addClass("past");
        }
        else {
            row.addClass("future");

        }
    }

}

function renderLastRegistered() {

var time = localStorage.getItem("inputField");

}


$(document).on("click", ".saveBtn", function(){
event.preventDefault();

var time = $(this).attr("id");

var inputField = $("#textarea-"+ time) .val();
localStorage.setItem(time, inputField);

renderLastRegistered();

})

renderHours()



