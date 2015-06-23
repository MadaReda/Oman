var introvideo;
var currentMap;

$(document).ready(function() {
    console.log("hhh");

    $("#title").animate({
            top: "5%"
        }, 1000,
        'easeOutElastic'
    );
    $("#panellst").children().each(function (i){
        console.log(this);
        newpos = $(this).position().top-85 * i-1200;
        console.log(newpos);
       $(this).delay(700).animate({
            top:newpos
        }, 1000,
        'easeOutElastic'
    )
        
    });
       
    /*$("#white").animate({
        top: "0",
    }, {
        duration: 2000,
        complete: function() {
            $("#whiteline").animate({
                bottom: "0"
            }, {
                duration: 1000,
                complete: function() {
                    $("#logo").animate({
                        right: "0"
                    }, {
                        duration: 1000,
                        complete: function() {
                            $("#title").animate({
                                top: "5%"
                            }, {
                                duration: 1000,
                                complete: function() {
                                    $("#ball").animate({
                                        right: "0"
                                    }, {
                                        duration: 1000,
                                        complete: function() {
                                            $("#panellst").animate({
                                                top: "35%"
                                            }, {
                                                duration: 1000,
                                                easing:"easeInElastic",
                                                complete: function() {

                                                }
                                            });
                                        }
                                    });

                                }
                            });
                        }
                    });

                }
            });
        }
    });
*/


    /******************/

    /*   $("#clickme").click(function() {
        $("#book").animate({
            width: "toggle",
            height: "toggle"
        }, {
            duration: 5000,
            
            complete: function() {
                $(this).after("<div>Animation complete.</div>");
            }
        });
    });*/


    /* console.log("llll");
        $("#intro").css({
            'opacity': 0,
            'width': 0,
            'height': 0,
            'min-width': 0
        });
        $("#panel").css({
            'opacity': 1
        });
        $("#panelbg").css({
            'opacity': 1
        });
        $("#sphere").css({
            'opacity': 1
        });*/

    $("#text_btn").click(function() {
        console.log("text");
    });
    //**********************Maps *******************//
    $("#map_btn").click(function() {
        console.log("maps");
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

    function showmap(e) {
        $('#menu').multilevelpushmenu('collapse');
        $("#key").children().remove();
        $("#map").children().remove();

        scalevalue = 0;
        console.log(arguments[2].attr("id") + " Clicked ");
        mapid = arguments[2].attr("id").substring(arguments[2].attr("id").indexOf("_") + 1);
        maptype = arguments[2].attr("id").substr(0, arguments[2].attr("id").indexOf("_"));

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
                    $("#up").click(function() {
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


                }

            }
        }
        if (arrQarat[mapid - 1].items) {

            $("#key").append("<img src='images/01.png' width='25' height='25' id='keybtn'/>");
            $("#key").append("<img src='images/02.png' width='25' height='25' id='shwallbtn'/>");
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
                            'left': leftvalue + 'px',
                            'top': topvalue + 'px',
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
                    $("#key").animate({
                        bottom: "-200px"
                    }, 700, function() {
                        // Animation complete.
                    });
                    keyon = false;
                } else {
                    $("#key").animate({
                        bottom: "15px"
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
                if (!shwall) {
                    shwall = true;

                    $.each(arrQarat[currentMap].items, function(id, value) {
                        $("#map").append("<img id='" + value.id + "' class='lay' src='" + value.layer + "'/>");
                    });
                } else {
                    shwall = false;
                    $("#map").children().remove();
                    $("#map").append("<img id='bg' class='lay'  src='" + arrQarat[mapid - 1].bg + "'/>");
                }
            });

        } else { //if there is no kerys hide the key panel
            $("#key").animate({
                bottom: "-225px"
            }, 700, function() {
                // Animation complete.
            });
        }
    }





    function writescale() {
        $("#scale").children().remove();
        //add scale values
        console.log(scalevalue);

        console.log(scalevalue);
        $("#scale").append("<span class='scalevalue'> صفر </span> <span class='scalevalue'>" + Math.floor(scalevalue) + "</span> <span class='scalevalue'>" + Math.floor(2 * scalevalue) + "</span> <span class='scalevalue'>" + Math.floor(3 * scalevalue) + "</span> <span class='scalevalue'>" + Math.floor(4 * scalevalue) + "</span>");
        //end of adding scale values
    }
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