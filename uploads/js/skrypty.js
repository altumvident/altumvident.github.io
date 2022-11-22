

$(document).ready(function() {
var window_width = $(document).width();
var baner_pos = -(2000-window_width)/2;

$('#baner_wraper').css({left:baner_pos});



	//Set Default State of each portfolio piece

	$(".paging").show();

	$(".paging a:first").addClass("active");
	$("#map_s .paging a:first").addClass("active2");
$("#map_s .paging a:first").css({'left':'-=2px','top':'-=2px'});

		

	//Get size of images, how many there are, then determin the size of the image reel.

	var imageWidth = $(".window").width();

	var imageSum = $(".image_reel li").size();

	var imageReelWidth = imageWidth * imageSum;

	

	//Adjust the image reel to its new size

	$(".image_reel").css({'width' : imageReelWidth});

	

	//Paging + Slider Function

	rotate = function(){	

		var triggerID = $active.attr("rel") - 1; //Get number of times to slide

		var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide
$active2 = $('#map_s .paging a.active').next();
$active3 = $('#map .paging a.active').next();


		$active2.css({'left':'+=2px','top':'+=2px'});
		$(".paging a").removeClass('active');
		$(".paging a").removeClass('active2');//Remove all active class

$('#map_s').animate({'opacity':0.6},500,function(){
$('#map_s').animate({'opacity':1},500);
});

$active2.hide();


$active.addClass('active2');

$active2.css({'left':'-=2px','top':'-=2px'});
$active2.fadeIn();
$active.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)

 
		//Slider Animation
$("#info").fadeOut(500, function(){
		$(".image_reel").css({ 

			left: -image_reelPosition

		});

		$("#info").fadeIn(500);

});
		


	}; 

		rotate2 = function(){	

		var triggerID = $active.attr("rel") - 1; //Get number of times to slide

		var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide
$active2 = $('#map_s .paging a.active').next();
$active3 = $('#map .paging a.active').next();


		$active2.css({'left':'+=2px','top':'+=2px'});
		$(".paging a").removeClass('active');
		$(".paging a").removeClass('active2');//Remove all active class


$active2.hide();


$active.addClass('active2');

$active2.css({'left':'-=2px','top':'-=2px'});
$active2.fadeIn();
$active.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)

 
		//Slider Animation
$("#info").fadeOut(500, function(){
		$(".image_reel").css({ 

			left: -image_reelPosition

		});

		$("#info").fadeIn(500);

});
		


	}; 

	

	//Rotation + Timing Event

	rotateSwitch = function(){		

		play = setInterval(function(){ //Set timer - this will repeat itself every 3 seconds

			$active = $('.paging a.active').next();

			if ( $active.length === 0) { //If paging reaches the end...

				$active = $('.paging a:first'); //go back to first

			}

			rotate(); //Trigger the paging and slider function

		}, 8000); //Timer speed in milliseconds (3 seconds)

	};
	
	
var strona=1;
	scrollBg = function (){
  //alert('test');
		if(strona==1){
		strona=2;
		$('#baner_wraper').animate({left: '-=100'},5000, function(){
		scrollBg();
		});
		}
		if(strona==2){
		strona=3;
		$('#baner_wraper').animate({top: '-=100'},5000, function(){
		scrollBg();
		});
		}
		if(strona==3){
		strona=4;
		$('#baner_wraper').animate({left: '+=100'},5000, function(){
		scrollBg();
		});
		}
		if(strona==4){
		strona=1;
		$('#baner_wraper').animate({top: '+=100'},5000, function(){
		scrollBg();
		});
		}

		//$('#baner_wraper').css("background-position",current+"px 0");
	}
	
	
	rotateSwitch(); //Run function on launch
	
scrollBg();
	//On Hover
/*
	$(".image_reel li a").hover(function() {

		clearInterval(play); //Stop the rotation

	}, function() {

		rotateSwitch(); //Resume rotation

	});	
*/
	$(".vtip").hover(function(e) {
  
            this.t = this.title;
            this.title = ''; 
		this.top = (-18); this.left = (-13);
		$(this).append( '<p id="vtip">' + this.t + '</p>' );
               //  Cufon.refresh();       
           // $('p#vtip #vtipArrow').attr("src", 'images/vtip_arrow.png');
            $('p#vtip').css("top", this.top+"px").css("left", this.left+"px").fadeIn(50);
						//alert(this.t)
	}, function() {
this.title = this.t;

           $("p#vtip").fadeOut("slow").remove();
	});	
	

	//On Click

	$(".paging a").click(function() {	

		$active = $(this); //Activate the clicked paging

		//Reset Timer

		clearInterval(play); //Stop the rotation

		//rotate(); //Trigger rotation immediately
		
		rotate2();

		rotateSwitch(); // Resume rotation

		return false; //Prevent browser jump to link anchor

	});	

	

});



$(function(){
	$("#map").hide();
	$("#info").hide();
	
	$("#info").fadeIn(800);
	$("#map_s").hover(function(){
		triggerID = $('#map_s .paging a.active').attr("rel");
	
		$("#map .paging a[rel='"+triggerID+"']").addClass('active');
	
		$("#map").stop();
		$("#map_s").stop();
		$("#map").fadeTo(600,1.0, function(){
		$("#map_s").hide();
		});
		$("#map .paging").show();
		//alert($('.paging a.active').attr("rel"));
			
			});
			
		$("#map").mouseleave(	function(){
		
		triggerID = $('#map .paging a.active').attr("rel");
		$("#map_s .paging a[rel='"+triggerID+"']").addClass('active');
		$("#map_s .paging a[rel='"+triggerID+"']").addClass('active2');
		//$("#map .paging a").removeClass('active');
		$("#map").stop();
		$("#map_s").stop();
		$("#map").fadeTo(600,0, function(){
		$("#map").hide();
		$("#map_s").show();
		$("#map .paging").hide();
		
		});
		$("#map_s").fadeIn(400);
		$("#map_s .paging").show();
		
		});
		
		

		
		
		$('#map a').click(function(){
			
			var url = $(this).attr('href');
			

                $('#info').fadeOut(1000, function(){
					

                    $('#info').load(url);
					
					$('#info').fadeIn(1000);
					
					
				});
			return false;
			});
		
	/*$("#info p").mousemove(function(){
		$(this).css('margin','40px');
		});	*/
	
	
	});
	
	
	
/* $(function(){
    
        $('#loading').hide();
		$("#map").hide();
	$("#info").hide();
	$("#map_s").mousemove(function(){
		
		$("#map").fadeIn(1000);
		/*$("#info").load('krakow.html')
		$("#info").show(2000);
		});
    
        $('a').click(function(){
        
            var adres = $(this).attr('href');
        
            $.ajax({
                url: adres,
                timeout: 2500,
                cache: false,
                success: function(html){
                    $('div').html(html);
                    $('#loading').hide();
                },
                beforeSend: function(){
                    $('#loading').show();
                },
                error: function(){
                    $('info').html('Błąd pobierania danych!');
                    $('#loading').hide();
                }
            });
            
            return false;
        });
        
    });	

*/
$(document).ready(function(){	



			$(".slider").easySlider({
				auto: true, 
				continuous: true,
				numeric: true
			});
		});	
	


(function($) {

	$.fn.easySlider = function(options){
	  
		// default configuration properties
		var defaults = {			
			prevId: 		'prevBtn',
			prevText: 		'Previous',
			nextId: 		'nextBtn',	
			nextText: 		'Next',
			controlsShow:	true,
			controlsBefore:	'',
			controlsAfter:	'',	
			controlsFade:	true,
			firstId: 		'firstBtn',
			firstText: 		'First',
			firstShow:		false,
			lastId: 		'lastBtn',	
			lastText: 		'Last',
			lastShow:		false,				
			vertical:		false,
			speed: 			600,
			auto:			true,
			pause:			4000,
			continuous:		true, 
			numeric: 		false,
			numericId: 		'controls'
		}; 
		
		var options = $.extend(defaults, options);  
				
		this.each(function() {  
			var obj = $(this); 				
			var s = $("li", obj).length;
			var w = $("li", obj).width(); 
			var h = $("li", obj).height(); 
			var clickable = true;
			obj.width(w); 
			obj.height(h); 
			obj.css("overflow","hidden");
			var ts = s-1;
			var t = 0;
			$("ul", obj).css('width',s*w);			
			
			if(options.continuous){
				$("ul", obj).prepend($("ul li:last-child", obj).clone().css("margin-left","-"+ w +"px"));
				$("ul", obj).append($("ul li:nth-child(2)", obj).clone());
				$("ul", obj).css('width',(s+1)*w);
			};				
			
			if(!options.vertical) $("li", obj).css('float','left');
								
			if(options.controlsShow){
				var html = options.controlsBefore;				
				if(options.numeric){
					html += '<ol id="'+ options.numericId +'"></ol>';
				}  {
					if(options.firstShow) html += '<span id="'+ options.firstId +'"><a href=\"javascript:void(0);\">'+ options.firstText +'</a></span>';
					html += ' <span id="'+ options.prevId +'"><a href=\"javascript:void(0);\">'+ options.prevText +'</a></span>';
					html += ' <span id="'+ options.nextId +'"><a href=\"javascript:void(0);\">'+ options.nextText +'</a></span>';
					if(options.lastShow) html += ' <span id="'+ options.lastId +'"><a href=\"javascript:void(0);\">'+ options.lastText +'</a></span>';				
				};
				
				html += options.controlsAfter;						
				$(obj).after(html);										
			};
			
			if(options.numeric){									
				for(var i=0;i<s;i++){						
					$(document.createElement("li"))
						.attr('id',options.numericId + (i+1))
						.html('<a rel='+ i +' href=\"javascript:void(0);\">&nbsp;</a>')
						.appendTo($("#"+ options.numericId))
						.click(function(){							
							animate($("a",$(this)).attr('rel'),true);
						}); 												
				};							
			}  {
				$("a","#"+options.nextId).click(function(){		
					animate("next",true);
				});
				$("a","#"+options.prevId).click(function(){		
					animate("prev",true);				
				});	
				$("a","#"+options.firstId).click(function(){		
					animate("first",true);
				});				
				$("a","#"+options.lastId).click(function(){		
					animate("last",true);				
				});				
			};
			
			function setCurrent(i){
				i = parseInt(i)+1;
				$("li", "#" + options.numericId).removeClass("current");
				$("li#" + options.numericId + i).addClass("current");
			};
			
			function adjust(){
				if(t>ts) t=0;		
				if(t<0) t=ts;	
				if(!options.vertical) {
					$("ul",obj).css("margin-left",(t*w*-1));
				} else {
					$("ul",obj).css("margin-left",(t*h*-1));
				}
				clickable = true;
				if(options.numeric) setCurrent(t);
			};
			
			function animate(dir,clicked){
				if (clickable){
					clickable = false;
					var ot = t;				
					switch(dir){
						case "next":
							t = (ot>=ts) ? (options.continuous ? t+1 : ts) : t+1;						
							break; 
						case "prev":
							t = (t<=0) ? (options.continuous ? t-1 : 0) : t-1;
							break; 
						case "first":
							t = 0;
							break; 
						case "last":
							t = ts;
							break; 
						default:
							t = parseInt(dir);
							break; 
					};	
					var diff = Math.abs(ot-t);
					var speed = diff*options.speed;						
					if(!options.vertical) {
						p = (t*w*-1);
						$("ul",obj).animate(
							{ marginLeft: p }, 
							{ queue:false, duration:speed, complete:adjust }
						);				
					} else {
						p = (t*h*-1);
						$("ul",obj).animate(
							{ marginTop: p }, 
							{ queue:false, duration:speed, complete:adjust }
						);					
					};
					
					if(!options.continuous && options.controlsFade){					
						if(t==ts){
							$("a","#"+options.nextId).hide();
							$("a","#"+options.lastId).hide();
						} else {
							$("a","#"+options.nextId).show();
							$("a","#"+options.lastId).show();					
						};
						if(t==0){
							$("a","#"+options.prevId).hide();
							$("a","#"+options.firstId).hide();
						} else {
							$("a","#"+options.prevId).show();
							$("a","#"+options.firstId).show();
						};					
					};				
					
					//if(clicked) clearTimeout(timeout);
					if(options.auto && dir=="next" && !clicked){;
						timeout = setTimeout(function(){
							animate("next",false);
						},diff*options.speed+options.pause);
					};
			
				};
				
			};
			// init
			var timeout;
			if(options.auto){;
				timeout = setTimeout(function(){
					animate("next",false);
				},options.pause);
			};		
			
			if(options.numeric) setCurrent(0);
		
			if(!options.continuous && options.controlsFade){					
				$("a","#"+options.prevId).hide();
				$("a","#"+options.firstId).hide();				
			};				
			
		});
	  
	};

})(jQuery);


