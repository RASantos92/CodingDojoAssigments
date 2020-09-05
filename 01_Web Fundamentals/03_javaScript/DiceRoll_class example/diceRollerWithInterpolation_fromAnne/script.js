$(document).ready(function () {

    function roll(){
        return Math.ceil(Math.random() * 20);
    }

    function statsUntilDoubles() {
        $('#rolls').html('');
        $('#stats').html('');

        var count = 0;
        var sum = 0;
        var max = 0;
        var min = 0;
        var prevRoll = 0;
        var double = false;

        $('#rolls').append(`<h3>The array of dice rolled:</h3>`);

        while (double == false) {

            var roll = Math.ceil(Math.random() * 20); 

            $('#rolls').append(`<div class="dice sm">${roll}</div>`);

            if (count == 0) {
                min = roll;
                max = roll;
            }

            count++;

            sum = sum + roll;

            if (roll > max) {
                max = roll;
            }

            if (roll < min) {
                min = roll
            }

            if (roll == prevRoll) {
                double = true;
            }

            prevRoll = roll;
        }

        $('#stats').append(`<div class="stat"><h3>The number of rolls was:</h3><div class="dice sm">${count}</div></div>`);

        $('#stats').append(`<div class="stat"><h3>The minimum roll was:</h3><div class="dice sm">${min}</div></div>`);

        $('#stats').append(`<div class="stat"><h3>The maximum roll was:</h3><div class="dice sm">${max}</div></div>`);
        
        $('#stats').append(`<div class="stat"><h3>The average of all rolled values:</h3><div class="dice sm">${Math.round(sum/count)}</div></div>`);
    }

    $('#roller').click(function(){
        $(this).text(roll());
    });

    $('button').click(function(){
        statsUntilDoubles();
    });
});