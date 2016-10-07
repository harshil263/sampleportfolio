/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    var arr = [5, 10, 452, 4, 6];
    $('span#before_reverse').append("[");
    for (var i = 0; i < arr.length; i++) {
        $('span#before_reverse').append(arr[i]);
        $('span#before_reverse').append(" ");
    }
    $('span#before_reverse').append("]");

    function reverse_array(ary) {
        var first = 0;
        var last = ary.length - 1;

        while (first < last) {
            var temp = ary[first];
            ary[first] = ary[last];
            ary[last] = temp;

            first++;
            last--;
        }
        return ary;
    }
    var reversed_array = [];
    reversed_array = reverse_array(arr);

    $('span#after_reverse').append("[");
    for (var i = 0; i < reversed_array.length; i++) {
        $('span#after_reverse').append(reversed_array[i]);
        $('span#after_reverse').append(" ");
    }
    $('span#after_reverse').append("]");
});
