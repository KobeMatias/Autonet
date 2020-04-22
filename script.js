$(document).ready(function() {
    function updateTime() {
        var date = moment().format('MMMM Do YYYY, h:mm:ss a');
        $("#currentDay").text(date);
    }
    setInterval(updateTime, 1000);
    
})