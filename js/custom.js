$(document).ready(function() {

	

	$(".toggle-password").click(function() {
		$(this).toggleClass("fa-eye fa-eye-slash");
		input = $(this).parent().find("input");
		if (input.attr("type") == "password") {
			input.attr("type", "text");
		} else {
			input.attr("type", "password");
		}
	});

	$('.carousel').slick({
		slidesToShow: 1.1,
		dots:false,
		centerMode: false,
		
	});
	var QtyInput = (function () {
		var $qtyInputs = $(".qty-input");
	
		if (!$qtyInputs.length) {
			return;
		}
	
		var $inputs = $qtyInputs.find(".product-qty");
		var $countBtn = $qtyInputs.find(".qty-count");
		var qtyMin = parseInt($inputs.attr("min"));
		var qtyMax = parseInt($inputs.attr("max"));
	
		$inputs.change(function () {
			var $this = $(this);
			var $minusBtn = $this.siblings(".qty-count--minus");
			var $addBtn = $this.siblings(".qty-count--add");
			var qty = parseInt($this.val());
	
			if (isNaN(qty) || qty <= qtyMin) {
				$this.val(qtyMin);
				$minusBtn.attr("disabled", true);
			} else {
				$minusBtn.attr("disabled", false);
				
				if(qty >= qtyMax){
					$this.val(qtyMax);
					$addBtn.attr('disabled', true);
				} else {
					$this.val(qty);
					$addBtn.attr('disabled', false);
				}
			}
		});
	
		$countBtn.click(function () {
			var operator = this.dataset.action;
			var $this = $(this);
			var $input = $this.siblings(".product-qty");
			var qty = parseInt($input.val());
	
			if (operator == "add") {
				qty += 1;
				if (qty >= qtyMin + 1) {
					$this.siblings(".qty-count--minus").attr("disabled", false);
				}
	
				if (qty >= qtyMax) {
					$this.attr("disabled", true);
				}
			} else {
				qty = qty <= qtyMin ? qtyMin : (qty -= 1);
				
				if (qty == qtyMin) {
					$this.attr("disabled", true);
				}
	
				if (qty < qtyMax) {
					$this.siblings(".qty-count--add").attr("disabled", false);
				}
			}
	
			$input.val(qty);
		});
	})();
	

	$('.author-slide').slick({
		centerMode: false,
		autoplay: false,
  	 autoplaySpeed: 5000,
	 dots: false,
	   infinite: false,
	   arrows: false,
	   speed: 800,
	   slidesToShow: 3,
	   arrows: true,
	   responsive: [
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 3,
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 1,
		  }
		}
	  ]
	});

	$('.top-slider').slick({
		autoplay: false,
  	 autoplaySpeed: 5000,
	 	dots: true,
	   infinite: false,
	   arrows: true,
	   slidesToShow: 1,
	   arrows: true,
	   fade: true,
	   speed: 900,
	   cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
	   touchThreshold: 100
	});


	
	$('.featured-book-slide').slick({
		centerMode: false,
		autoplay: false,
  	 autoplaySpeed: 5000,
	 dots: false,
	   infinite: false,
	   arrows: false,
	   speed: 800,
	   slidesToShow: 2.1,
	   arrows: true,
	   responsive: [
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 2.1,
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 1.1,
		  }
		}
	  ]
	});
	$('.related-book-slide').slick({
		centerMode: false,
		autoplay: false,
  	 autoplaySpeed: 5000,
	 dots: false,
	   infinite: false,
	   arrows: false,
	   speed: 800,
	   slidesToShow: 4.1,
	   arrows: true,
	});

	$('.author-book-slide').slick({
		centerMode: false,
		autoplay: false,
  	 autoplaySpeed: 5000,
	 dots: false,
	   infinite: false,
	   arrows: false,
	   speed: 800,
	   slidesToShow: 4,
	   arrows: true,
	});

	$('.testimonial-slider').slick({
		centerMode: false,
		autoplay: false,
  	 autoplaySpeed: 5000,
	 dots: true,
	   infinite: false,
	   arrows: false,
	   speed: 800,
	   slidesToShow: 1,
	   arrows: true,
	});

	/*====================== js for sticky and mobile menu ====================== */
	var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
	$(".main_page").css('min-height', min_height + 'px');
	$(window).resize(function() {
		var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
		$(".main_page").css('min-height', min_height + 'px');
	});

	$(window).scroll(function() {
		var navHeight = $('#custom-header').height();
		var sticky = $('#custom-header');
		if ($(window).scrollTop() > 0) {
			sticky.addClass("sticky")
			$('#dashboard-page').css('padding-top', navHeight + "px");
		} else {
			sticky.removeClass("sticky");
			$('#dashboard-page').css('padding-top', 0);
		}
	});
	$('.jb_front_nav_close button').on('click', function() {
		$('.navbar-collapse').collapse('hide');
	});

	var kursorx = new kursor({
		type: 4,
		color: 'rgba(0,0,0,0)',
	})


	/*====================== js for scrollTop ====================== */
	var btn = $('#button');

	$(window).scroll(function() {
		if ($(window).scrollTop() > 500) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});

	btn.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, '500');
	});
	/*====================== js for scrollTop ====================== */


/*====================== filter-slider start ====================== */
	var $owl = $('#filter-slider');

	$owl.children().each(function(index) {
		$(this).attr('data-position', index);
	});


	$('#about_slider').owlCarousel({
        loop: true,
        center: true,
        items: 1,
        animateOut: 'fadeOut',
        autoplay: false,
        dots: false,
        nav: false,
        autoplayTimeout: 4000,
        smartSpeed: 950,
    });


	$('#services_slider').owlCarousel({
        loop: true,	    
        items: 3,
        animateOut: 'fadeOut',
		autoplay: false,
        dots: false,
        nav: false,
        autoplayTimeout: 4000,
        smartSpeed: 950,
    });

    $('.count').each(function() {

		$(this).prop('counter', 0).animate({
	
		counter: $(this).text()
	
		}, {
	
		duration: 10000,
	
		easing: 'swing',
	
		step: function(now) {
	
			$(this).text(Math.ceil(now));
		}
		});
	});


	
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav',
		   autoplay: false,
	  });
	  $('.slider-nav').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		autoplay:false,
		prevArrow: ' <i class="fa fa-chevron-left" aria-hidden="true"></i>',
    	nextArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
		responsive: [	
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		  ]
	  });
			  
	

/*====================== filter-slider end ====================== */

/*====================== js for scrollTop ====================== */

	// // Add smooth scrolling to all links
	$(".nav_jump").on('click', function(event) {
		var _href = $(this).attr('href');
		// Make sure this.hash has a value before overriding default behavior
		if (_href !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $(_href).offset().top
			}, 800, function() {});
		} // End if
	});

	var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #ff908369}";
        document.body.appendChild(css);
    };

	AOS.init({
		duration: 1200,
	});

	

}); /*====================== all js end ====================== */