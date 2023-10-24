//linking Day.js to keep live track of the current date and timel


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // Displays current date and time at the top of the page
    const currentDay = dayjs()
    $('#currentDay').text(currentDay.format('MMM D, YYYY, h:mm')); // Format for the date can be altered to suit my needs
   
    $(".saveBtn").on("click", function() {
        // Find the associated time-block ID
        const timeBlockID = $(this).closest(".time-block").attr("id");
        // Get the user's input for this time-block
        const userInput = $(this).siblings(".description").val();
        // Save the input to local storage with the time-block ID as the key
        localStorage.setItem(timeBlockID, userInput);
    });

    // To display the users inputs in each time-block with saved text
    $(".time-block").each(function() {
        const timeBlockID = $(this).attr("id");
        const storedInput = localStorage.getItem(timeBlockID);
        if (storedInput) {
            $(this).find(".description").val(storedInput);
        }
    });
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });