/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {

    var fileInput = $('#file_upload');

    $('#button_upload').on('click', function () {
        if (!window.FileReader) {
            alert('Your browser is not supported')
        }
        var input = fileInput.get(0);
        // Create a reader object
        var reader = new FileReader();
        if (input.files.length) {
            var textFile = input.files[0];
            reader.readAsText(textFile);
            $(reader).on('load', countwords);
        } else {
            alert('Please upload a file before continuing')
        }
    });

    function countwords(e) {
        var file = e.target.result,
                results;
        if (file && file.length) {
            
            var temparray = new Array();
            results = file.split("\n");
            
            for (var i = 0, len = results.length; i < len; i++) {
                var each_words = results[i].split(' ');
                for (var j = 0; j < each_words.length; j++) {
                    temparray.push(each_words[j]);
                }
            }
            // Counting occurance of each words in file.
            var obj = {};
            for (var i = 0, j = temparray.length; i < j; i++) {
                if (obj[temparray[i]]) {
                    obj[temparray[i]]++;
                }
                else {
                    obj[temparray[i]] = 1;
                }
            }
           
            // Displaying result in SPAN tag.
            $.each(obj, function (key, value) {
                $('span#no_of_words').append( "<br/>" + key + ": " + value + "<br/>");
            });


        }
    }

});

