/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function () {
    var array_object = {};
    var $node_val_container = $("#node_val");
    var $edge_val_container = $("#edge_val");
    var Input = $('input');
    var default_value = Input.val();

    $(Input).focus(function () {
        if ($(this).val() == default_value)
        {
            $(this).val("");
        }
    }).blur(function () {
        if ($(this).val().length == 0)
        {
            $(this).val(default_value);
        }
    });

    $('#node_val').keydown(function (e) {
        if (e.which === 32) {
            e.preventDefault();
        }
    }).blur(function () {
        $(this).val(function (i, oldVal) {
            return oldVal.replace(/\s/g, '');
        });
    });
    $('#edge_val').keydown(function (e) {
        $('#node_val').keydown();
    });
    function add_edge(nod_val, edge_val)
    {
        // Check if node and edge value are not same.
        if (nod_val != edge_val)
        {
            // Function to create node and add edge.
            addValue(array_object, nod_val, edge_val)
        }
    }
    function addValue(obj, key, value) {

        if (obj.hasOwnProperty(key)) {
            // if node exist then edges will be added.
            obj[key].push(value);
        } else {
            // if node is not exist new node will be created.
            obj[key] = [value];
        }
    }
    // Function to print the graph.
    function print_graph()
    {
        var span_node;
        var edge_node;
        var i = 0;
        $.each(array_object, function (key, value) {
            var graph_div = $('<div />').attr({'class': 'graph_container'}).html('------------------------------------------');
            ;
            span_node = "<span class='node_vals'>Node <strong>" + key + "</strong>  has following edges --> </span>";
            $('.di_graph').append(span_node);
            $.each(value, function (key, value) {
                edge_node = "<span class='edge_vals'> " + value + " </span>";
                $('.di_graph').append(edge_node);
            });
            $('.di_graph').append(graph_div);
        });
    }
    /* comment this function if you want to run the for randon static numbers */
    $("#_add_edges_btn").on("click", function () {
        var node_value = $node_val_container.val();
        var edge_value = $edge_val_container.val();
        add_edge(node_value, edge_value);
        print_graph();
    });
    
    // Uncomment these below lines if you want to run for random numbers. 
    // And comment the _add_edges_btn event listener.
    /*
     add_edge(2, 5);
     add_edge(6, 9);
     add_edge(6, 49);
     add_edge(2, 9);
     add_edge(4, 3);
     add_edge(4, 4);
     add_edge(4, 2);
     add_edge(2, 6);
     print_graph();
     */
  
});