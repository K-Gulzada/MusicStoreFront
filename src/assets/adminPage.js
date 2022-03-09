
(function ($) {
    $(document).ready(function () {
        $("#makeVisible").click(function (event) {
            var clicked = $(this);
    
            console.log(clicked);
            $('.hiddenDiv').css("display", "block");
        });
    });

});