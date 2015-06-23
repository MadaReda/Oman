var introvideo;

$(document).ready(function() {
    console.log("hhh");

    introvideo = document.getElementById("intro");

    introvideo.onended = function() {
        console.log("llll");
        $("#intro").css({
            'opacity': 0
        });
        $("#panel").css({
            'opacity': 1
        });
        $("#panelbg").css({
            'opacity': 1
        });
        $("#sphere").css({
            'opacity': 1
        });
        $("#text_btn").click(function(){
            console.log("ggg");
        });
       /* //var div = $("#panel").children();
        var trig_width=parseInt($("#panel").siblings().css('width'));
	    var trig_height=parseInt($("#panel").siblings().css('height'));
	    var trig_left=parseInt($("#panel").css('left'));
	    var trig_top=parseInt($("#panel").css('top'));
	    var child_width=parseInt($("#panel").css('width'));
	    var child_height=parseInt($("#panel").css('height'));
	    var con_left=((trig_width/2)-(child_width/2)+trig_left)+'px';
	    var con_top=((trig_height/2)-(child_height/2)+trig_top)+'px';
        console.log(trig_width+"  "+trig_height+"  "+trig_left+"  "+trig_top+"  "+child_width+"  "+child_height);
	    var spacing=parseInt(15);
        $("#panel").children().each(function(key) {
            
            var rd = ((72 * (Math.PI / 180)) * key);
            var x = parseInt(con_left) + ((parseInt(con_left) + spacing) * Math.cos(rd));
            var y = parseInt(con_top) + ((parseInt(con_top) + spacing) * Math.sin(rd));
            console.log(key+"  "+x+"  "+y);
            $(this).animate({ top: y,left:x }, {duration: 300});
        });*/
    };
});