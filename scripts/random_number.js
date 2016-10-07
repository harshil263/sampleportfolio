/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* This file have logic for Question 3 and Question 4.*/
/* Question 3: Give M random non-negative integers less than some value N*/
/* Question 4: To get M non-negative values less than N*/

$(document).ready(function () {

    var $n_container = $("#n_val");
    var $m_container = $("#m_val");

    var $max_val_arr = $("#max_val_arry");
    var $m_random_pos = $("#random_posiiton");

    // On focus default value of input box will be erased.
    var Input = $('input');
    var default_value = Input.val();

    $(Input).focus(function () {
        if ($(this).val() == default_value)
        {
            $(this).val("");
        }
    }).blur(function () {
        if ($(this).val().length == 0) /*Small update*/
        {
            $(this).val(default_value);
        }
    });
    // Input have only positive numbers.
    function check_input(event)
    {
        if (event.shiftKey) {
            event.preventDefault();
        }

        if (event.keyCode == 46 || event.keyCode == 8) {
        }
        else {
            if (event.keyCode < 95) {
                if (event.keyCode < 48 || event.keyCode > 57) {
                    event.preventDefault();
                }
            }
            else {
                if (event.keyCode < 96 || event.keyCode > 105) {
                    event.preventDefault();
                }
            }
        }
    }
    // Event listener for input box change.
    // Give M random non-negative integers less than some value N.
    $("#n_val").keydown(function (event) {
        check_input(event);
    });
    $("#m_val").keydown(function (event) {
        check_input(event);
    });

    //Give M random elements from array from different position.
    $("#max_val_arry").keydown(function (event) {
        check_input(event);
    });
    $("#random_posiiton").keydown(function (event) {
        check_input(event);
    });
    var random_val_arry = [];
    //Logic for M random elements from array from different position. 
    $("#_button_random_elements").on("click", function () {
        var arr_value = $max_val_arr.val();
        var random_value = $m_random_pos.val();
        if (arr_value > random_value)
        {
            if (parseInt(arr_value) > 0 && parseInt(random_value) > 0)
            {
                if (parseInt(arr_value) > parseInt(random_value))
                {
                    for (var i = 0; i < arr_value; i++)
                    {
                        random_val_arry.push(i);
                    }
                    shuffleArray(random_val_arry);
                    for (var j = 0; j < random_value; j++)
                    {
                        $('span#rand_elems').append("<br/>" + random_val_arry[j] + " is at " + j + " position.(index val is: " + j + " )");
                    }
                }
            }
        }
        else
        {
            alert("Array size must be greater than random number");
        }

    });
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    //Logic to get M non-negative values less than N
    var n_val_arry = [];
    $("#_submit_button").on("click", function () {
        var n_value = $n_container.val();
        var m_value = $m_container.val();

        if (parseInt(m_value) < parseInt(n_value))
        {
            for (var i = 0; i < n_value; i++)
            {
                n_val_arry.push(i);
            }
            shuffleArray(n_val_arry);
            for (var j = 0; j < m_value; j++)
            {
                var temp = n_val_arry[j];
                $('span#m_rand_nums').append("<br/>" + n_val_arry[j]);
            }
        }
        else {
            alert("M number should be less than N value");
        }

    });
});
