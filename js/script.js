// ******* Script for just turning all boxes with same class red ********

// $(document).ready(function() {
//     $('.box').on('click', function() {
//      When we click an element that has a class
//      name of box this code will be executed
//         var classNames = $(this).attr('class').split(' ');
//         $('.' + classNames[1]).css('background-color', 'red');
//     });
// });


$(document).ready(function () {
    $('.box').on('click', function () {
        // When we click an element that has a class
        // name of box this code will be executed
        var classNames = $(this).attr('class').split(' ');
        var boxClass = classNames[0];
        var className = classNames[1];
        if ($(this).css('background-color') == 'rgb(255, 0, 0') {
            // If this object is already red turn it black
            $('.' + className).css('background-color', '#000');
        } else {
            // Else turn all elements with a box class black
            // and then change the colour of all elements 
            // with the same class name as the clicked element
            // to red
            $('.' + boxClass).css('background-color', '#000');
            $('.' + className).css('background-color', 'red');
        };
    }); 
});

