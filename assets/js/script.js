$(document).ready(function () {
    // Displays the current date at the top of the page
    const currentDay = dayjs();
    $('#currentDay').text(currentDay.format('MMM D, YYYY, h:mm'));

    // Update time block classes
    updateTimeBlockClasses();

    // Save user input when the save button is clicked
    $(".saveBtn").on("click", function() {
        const timeBlockID = $(this).closest(".time-block").attr("id");
        const userInput = $(this).siblings(".description").val();
        localStorage.setItem(timeBlockID, userInput);
    });

    // Retrieve and display user inputs from local storage
    $(".time-block").each(function() {
        const timeBlockID = $(this).attr("id");
        const storedInput = localStorage.getItem(timeBlockID);
        if (storedInput) {
            $(this).find(".description").val(storedInput);
        }
    });

    function updateTimeBlockClasses() {
        $(".time-block").each(function() {
            const timeBlockID = $(this).attr("id");
            const timeBlockHour = parseInt(timeBlockID.split("-")[1]);
            const currentHour = currentDay.hour()

            if (currentHour === timeBlockHour) {
                $(this).removeClass("past future").addClass("present");
            } else if (currentHour > timeBlockHour) {
                $(this).removeClass("future present").addClass("past");
            } else {
                $(this).removeClass("past present").addClass("future");
            }
        });
    }
});