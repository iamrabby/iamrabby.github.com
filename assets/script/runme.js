// Modal script
$(".js-open-modal").click(function(){
    $(".im_modal_wrapper").addClass("visible");
});
  
$(".js-close-modal").click(function(){
    $(".im_modal_wrapper").removeClass("visible");
});
  
$(document).click(function(event) {
	//if you click on anything except the modal itself or the "open modal" link, close the modal
	if (!$(event.target).closest(".modal,.js-open-modal").length) {
	  $("body").find(".im_modal_wrapper").removeClass("visible");
	}
});





// Button Hover Effect
var $cta = $('.hover_effect');

function drawGlow(e) {
	var $t = $(this)
	var x = e.pageX - $t.offset().left; 
	var y = e.pageY - $t.offset().top; 
	$t.find('.hover-glow').css({
		'transform': 'translate('+x +'px,' + y  +'px)',
		'opacity': 1
	})
}

function killGlow() {
	var $t = $(this);
	$t.find('.hover-glow').css({
		'opacity' : 0
	})
}


$cta.on({
	'mousemove': drawGlow,
	'mouseleave': killGlow
})


// particles.js config
// I'm here for Particles effect customization
particlesJS("particles-js", {
	"particles": {
	  "number": {
		"value": 100,
		"density": {
		  "enable": true,
		  "value_area":1000
		}
	  },
	  "color": {
		//"value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
		"value": ["#ffffff", "#ffffff", "#ffffff", "#ffffff"]
	  },
	  
	  "shape": {
		"type": "circle",
		"stroke": {
		  "width": 0,
		  "color": "#fff"
		},
		"polygon": {
		  "nb_sides": 5
		},
		"image": {
		  "src": "img/github.svg",
		  "width": 100,
		  "height": 100
		}
	  },
	  "opacity": {
		"value": 0.6,
		"random": false,
		"anim": {
		  "enable": false,
		  "speed": 1,
		  "opacity_min": 0.1,
		  "sync": false
		}
	  },
	  "size": {
		"value": 2,
		"random": true,
		"anim": {
		  "enable": false,
		  "speed": 40,
		  "size_min": 0.1,
		  "sync": false
		}
	  },
	  "line_linked": {
		"enable": true,
		"distance": 120,
		"color": "#ffffff",
		"opacity": 0.4,
		"width": 1
	  },
	},
	"interactivity": {
	  "detect_on": "canvas",
	  "events": {
		"onhover": {
		  "enable": true,
		  "mode": "grab"
		},
		"onclick": {
		  "enable": false
		},
		"resize": true
	  },
	  "modes": {
		"grab": {
		  "distance": 140,
		  "line_linked": {
			"opacity": 1
		  }
		},
		"bubble": {
		  "distance": 400,
		  "size": 40,
		  "duration": 2,
		  "opacity": 8,
		  "speed": 3
		},
		"repulse": {
		  "distance": 200,
		  "duration": 0.4
		},
		"push": {
		  "particles_nb": 4
		},
		"remove": {
		  "particles_nb": 2
		}
	  }
	},
	"retina_detect": true
});


// I'm here for cursor
document.addEventListener("DOMContentLoaded", function (event) {
    var cursor = document.querySelector(".custom-cursor");
    var links = document.querySelectorAll("a");
    var initCursor = false;

    for (var i = 0; i < links.length; i++) {
        var selfLink = links[i];

        selfLink.addEventListener("mouseover", function () {
        cursor.classList.add("custom-cursor--link");
        });
        selfLink.addEventListener("mouseout", function () {
        cursor.classList.remove("custom-cursor--link");
        });
    }

    window.onmousemove = function (e) {
        var mouseX = e.clientX;
        var mouseY = e.clientY;

        if (!initCursor) {
        // cursor.style.opacity = 1;
        TweenLite.to(cursor, 0.3, {
            opacity: 1,
        });
        initCursor = true;
        }

        TweenLite.to(cursor, 0, {
        top: mouseY + "px",
        left: mouseX + "px",
        });
    };

    window.onmouseout = function (e) {
        TweenLite.to(cursor, 0.3, {
        opacity: 0,
        });
        initCursor = false;
    };
});