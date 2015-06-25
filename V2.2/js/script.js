var introvideo;
var currentMap;

$(document).ready(function() {
    console.log("hhh");

    $("#title").animate({
            top: "5%"
        }, 1000,
        'easeOutElastic'
    );
    $("#panellst").children().each(function(i) {
        console.log(this);
        newpos = $(this).position().top - 85 * (5 - i) - 1100;
        console.log(newpos);
        $(this).delay(1000).animate({
                top: newpos
            }, 3000,
            'easeOutElastic'
        )

    });


    $("#text_btn").click(function() {
        console.log("text");
    });
    //**********************Maps *******************//
    $("#map_btn").click(function() {
        console.log("maps");
        $(this).css({
            'background-color': ' #a0d87d'
        });
        $("#sublst").animate({
            left: '10%',
            duration: 3000,
            easing: 'easeOutElastic'
        });


        $("#qaratmaps").click(function() {
            console.log("hi");
            $("#panel").css({
                'opacity': 0,
                'display': 'none'
            });
            $("#menu").css({
                'opacity': 1
            });
            $("#map").css({
                'opacity': 1
            });
            $("#key").css({
                'opacity': 1,
                'z-index': 5
            });
            createmenu(1);
            // $.each(qaratmenu.items, function(id, value) {
            //  $("#key").append("<p id='" + value.id + "'><img src='" + /*value.icon +*/ "'/>" + value.name + "</p>");
            // $("#" + value.id + "").click();
            // }); //end of each
        });



        /*$("#panel").css({
            'opacity': 0,
            'display': 'none'
        });*/
        /*$("#panelbg").css({
            'opacity': 0,
            'display': 'none'
        });
        $("#sphere").css({
            'opacity': 0,
            'display': 'none'
        });*/
        /*$("#menu").css({
            'opacity': 1
        });
        $("#map").css({
            'opacity': 1
        });
        $("#key").css({
            'opacity': 1,
            'z-index': 5
        });
        $('#menu').multilevelpushmenu({
            menu: arrMenu,
            direction: 'rtl',
            menuWidth: '275px',
            backText: 'الرجوع',
            swipe: 'both',
            collapsed: false,
            onItemClick: showmap

        });*/
    });






    //*************************************************//
    $("#video_btn").click(function() {
        console.log("video");
    });

    $("#country_btn").click(function() {
        console.log("country");
    });

    $("#gallery_btn").click(function() {
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

});


function createmenu(num) {
    console.log(menu[num].length);
    switch (num) {
        case 1:
            menutitle = "خرائط العالم";
            break;
        case 2:
            menutitle = "خرائط القارات";
            break;
        case 3:
            menutitle = "خرائط الوطن";
            break;
    }
    $("#menu").append("<p id='menutitle'><img src='" + /*value.icon +*/ "'/>" + menutitle + "</p>");
    $.each(menu[num], function(id, value) {
        $("#menu").append("<p id='" + value.id + "'><img src='" + /*value.icon +*/ "'/>" + value.name + "</p>");
        $("#" + value.id + "").bind("click", function() {
            console.log("gi");
            /*  $('#menu').multilevelpushmenu('collapse');*/
            $("#key").children().remove();
            $("#map").children().remove();

            scalevalue = 0;
            console.log($(this).attr('id') + " Clicked ");
            mapid = $(this).attr('id').substring($(this).attr('id').indexOf("_") + 1);
            maptype = $(this).attr('id').substr(0, $(this).attr('id').indexOf("_"));

            console.log(maptype + " of " + mapid);
            widthzoomvalue = $("#map").width();
            heightzoomvalue = $("#map").height();

            topvalue = $("#map").offset().top;
            leftvalue = $("#map").offset().left;



            if (arrQarat[mapid - 1]) {

                if (arrQarat[mapid - 1].bg) {
                    //get the value if scale for this map
                    scalevalue = arrQarat[mapid - 1].scale;
                    //set backgroound
                    if ($("#map").children('img#bg').length == 0) {
                        console.log("bg added");
                        $("#map").append("<img id='bg' class='lay'  src='" + arrQarat[mapid - 1].bg + "'/>");
                        $("#bg").css({
                            'width': widthzoomvalue + 'px',
                            'height': heightzoomvalue + 'px',
                            /* 'left': leftvalue + 'px',
                                'top': topvalue + 'px',*/
                        });
                        writescale();
                        //add zoom lesinter
                        $("#zoomin").click(function() {
                            //zoomvalue += 20;
                            widthzoomvalue *= 1.2;
                            heightzoomvalue *= 1.2;
                            scalevalue /= 1.2;
                            console.log("vv");
                            writescale();
                            $("#map").children().animate({
                                'width': widthzoomvalue + 'px',
                                'height': heightzoomvalue + 'px'
                            });
                            console.log(widthzoomvalue + "   " + heightzoomvalue);
                        });

                        $("#zoomout").click(function() {
                            //zoomvalue -= 20;
                            widthzoomvalue /= 1.2;
                            heightzoomvalue /= 1.2;
                            scalevalue *= 1.2;
                            console.log("vv");
                            writescale();
                            $("#map").children().animate({
                                'width': widthzoomvalue + 'px',
                                'height': heightzoomvalue + 'px'
                            });

                        });

                        ////end zoom lesinter

                        //add moving listener
                        /*        $("#up").click(function() {
                            topvalue -= 50;
                            $("#map").children().animate({
                                'top': topvalue + 'px',
                            });

                        });
                        $("#down").click(function() {
                            topvalue += 50;
                            $("#map").children().animate({
                                'top': topvalue + 'px',
                            });

                        });
                        $("#left").click(function() {
                            leftvalue -= 50;
                            $("#map").children().animate({
                                'left': leftvalue + 'px',
                            });

                        });
                        $("#right").click(function() {
                            leftvalue += 50;
                            $("#map").children().animate({
                                'left': leftvalue + 'px',
                            });

                        });
*/

                    }

                }
            }
            if (arrQarat[mapid - 1].items) {

                $("#key").append("<i class='fa fa-arrow-left fa-2x '  id='keybtn'></i>");
                //fa-arrow-left
                $("#key").append("<i class='fa fa-eye fa-2x' id='shwallbtn'></i>");
                //fa-eye-slash to hide all
                $("#key").css({
                    'height': arrQarat[mapid - 1].items.length * 80 + 'px',
                });
                //console.log("The Length ..."+arrQarat[mapid - 1].items.length);
                currentMap = mapid - 1;
                $.each(arrQarat[mapid - 1].items, function(id, value) {

                    // $.each(value.items, function(id2, value2) {
                    console.log(value.id);
                    //});

                    $("#key").append("<p id='" + value.id + "'><img src='" + /*value.icon +*/ "'/>" + value.text + "</p>");
                    //add Listener on key
                    $("#" + value.id + "").click(function() {
                        console.log("p Clciked" + value.id);
                        console.log($("#map").children('img#' + value.id).length);
                        //check if image exist
                        if ($("#map").children('img#' + value.id).length == 0) {
                            //add image if not exists
                            $("#map").append("<img id='" + value.id + "' class='lay' src='" + value.layer + "'/>");
                            //to make sure the new image will be in the right place
                            $("#" + value.id).css({
                                'width': widthzoomvalue + 'px',
                                'height': heightzoomvalue + 'px',
                                /* 'left': leftvalue + 'px',
                                'top': topvalue + 'px',*/
                            });
                        } else {
                            //remove image if exists
                            $("#map").children('img#' + value.id).remove();
                            console.log("removed");
                        }


                    });

                });

                $("#key").animate({
                    bottom: "+15px"
                }, 700, function() {
                    // Animation complete.
                });

                //Show and hide the key panel
                var keyon = true;
                $("#keybtn").click(function() {
                    if (keyon) {
                        $(this).removeClass('fa fa-arrow-left fa-2x').addClass('fa fa-arrow-right fa-2x');
                        $("#key").animate({
                           left: "-160px"
                        }, 700, function() {
                            // Animation complete.
                        });
                        keyon = false;
                    } else {
                        $(this).removeClass('fa fa-arrow-right fa-2x').addClass('fa fa-arrow-left fa-2x');
                        $("#key").animate({
                            left: "0px"
                        }, 700, function() {
                            // Animation complete.
                        });
                        keyon = true;

                    }

                });

                //Show and hide the all keys 
                var shwall = false;
                $("#shwallbtn").click(function() {

                    $("#map").children().remove();
                    $("#map").append("<img id='bg' class='lay'  src='" + arrQarat[mapid - 1].bg + "'/>");
                    $("#bg").css({
                        'width': widthzoomvalue + 'px',
                        'height': heightzoomvalue + 'px',
                        /* 'left': leftvalue + 'px',
                                'top': topvalue + 'px',*/
                    });
                    if (!shwall) {
                        shwall = true;
                        $(this).removeClass('fa fa-eye fa-2x').addClass('fa fa-eye-slash fa-2x');
                        $.each(arrQarat[currentMap].items, function(id, value) {
                            $("#map").append("<img id='" + value.id + "' class='lay' src='" + value.layer + "'/>");
                            $("#" + value.id).css({
                                'width': widthzoomvalue + 'px',
                                'height': heightzoomvalue + 'px',
                                /* 'left': leftvalue + 'px',
                                'top': topvalue + 'px',*/
                            });
                        });
                    } else {
                        shwall = false;
                        $(this).removeClass('fa fa-eye-slash fa-2x').addClass('fa fa-eye fa-2x');
                        $("#map").children().remove();
                        $("#map").append("<img id='bg' class='lay'  src='" + arrQarat[mapid - 1].bg + "'/>");
                        $("#bg").css({
                            'width': widthzoomvalue + 'px',
                            'height': heightzoomvalue + 'px',
                            /*'left': leftvalue + 'px',
                                'top': topvalue + 'px',*/
                        });
                    }
                });

            } else { //if there is no kerys hide the key panel
                $("#key").animate({
                    bottom: "-225px"
                }, 700, function() {
                    // Animation complete.
                });
            }
        });
    }); //end of each
}


function writescale() {
    $("#scale").children().remove();
    //add scale values
    console.log(scalevalue);

    console.log(scalevalue);
    $("#scale").append("<span class='scalevalue'> 0 </span> <span class='scalevalue'>" + Math.floor(scalevalue) + "</span> <span class='scalevalue'>" + Math.floor(2 * scalevalue) + "</span> <span class='scalevalue'>" + Math.floor(3 * scalevalue) + "</span> <span class='scalevalue'>" + Math.floor(4 * scalevalue) + "</span>");
    //end of adding scale values
}