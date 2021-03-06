var current_fs, next_fs, previous_fs;
var left, opacity, scale;
var animating;
$(".next").click(function () {
    if (animating)
        return false;
    animating = true;
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    $("#step_progressbar li").eq($(".impl_step").index(next_fs)).addClass("active");
    next_fs.show();
    current_fs.animate( {
        opacity : 0
    },
    {
        step : function (now, mx) {
            current_fs.css( {
                'transform' : 'scale(' + scale + ')', 'position' : 'absolute'
            });
            next_fs.css( {
                'left' : left, 'opacity' : opacity
            });
        },
        duration : 0, complete : function () {
            current_fs.hide();
            animating = false;
        },
        easing : 'easeInOutBack'
    });
});
$(".submit").click(function () {
    return false;
})