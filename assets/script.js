$(document).ready(function () {
    //Get todays current date (month day year format)
    $("#currentDay").text(moment().format("MMMM Do YYYY"));

    //for loop, iterated through all save buttons and saves the schedule description along with the hour block
    $(".saveBtn").on("click", function() {
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        console.log(time, text);

        //save to local storage
        localStorage.setItem(time,text);
    })

    //save each hour associated to local storage (hour and descrption associated)
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    //Checks the time and colors the block accordingly
    function timeCheck(){
        var currentHour = moment().hour();
        
        $(".time-block").each(function() {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            //console.log(blockHour, currentHour);

            if(blockHour < currentHour){
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }

            else if(blockHour == currentHour){
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            if(blockHour > currentHour){
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

    //Checks the time and makes the change accordingly
    timeCheck();
});