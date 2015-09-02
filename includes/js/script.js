/*

My Custom JS
============

 Author:  Victoria Kudenko
 Created: October 2014

*/

$(function() {

    $('#alertMe').click(function(e) {

        e.preventDefault();

        $('#successAlert').slideDown();

    });

    $('a.pop').click(function(e) {
        e.preventDefault();
    });

    $('a.pop').popover();

    $('[rel="tooltip"]').tooltip();

});