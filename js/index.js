var currentPulse = 5;
function alternatePulse(){
	var newPulse;
	switch (currentPulse){
		case 1:
			newPulse = 2;
			break;
		case 2:
			newPulse = 6;
			break;
		case 3:
			newPulse = 4;
			break;
		case 4:
			newPulse = 5;
			break;
		case 5:
			newPulse = 1;
			break;
		case 6:
			newPulse = 3;
			break;
	}

	$('#kid-' + newPulse + ' img.kid-elipse').addClass('pulsing');
	$('#kid-' + currentPulse + ' img.kid-elipse').removeClass('pulsing');

	currentPulse = (newPulse);

	setTimeout( alternatePulse, 4100);
}


$(document).ready(function () {

	$('[data-toggle=tooltip]').tooltip();
	$(".top").tooltip({
		placement: "top"
	});
	$('[data-toggle="tooltip"]').tooltip({
		container: 'body'
		
	}).on("show.bs.tooltip", function(e, ui){
		console.log("tooltipopen", e, ui)
	});
	// $('[data-toggle="tooltip"]').on("tooltipopen", function(e, ui){
	// 	console.log("tooltipopen", e, ui)
	// });

	$('.back-to-top').click(() => {
		scrollfn("#overview");
	})

	$('.back-to-top').on("keyup", function (e) {

		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 13) {
			scrollfn("#overview");
		}
	});

	$(window).scroll(function () {
		((window.pageYOffset || document.documentElement.scrollTop) > 100) 
			? $('.back-to-top').css({ opacity: 1, visibility: "visible" }) 
			: $('.back-to-top').css({ opacity: 0, visibility: "hidden" });
	});

	function scrollfn(e) {
		let $target = $(e),
		offSet = e === "#overview" ? 0 : $target.offset().top;
		$('html, body').stop().animate({
			'scrollTop': offSet
		}, 1200, 'swing');

	}


	// $("a, button, input, [tabindex='0'], .slideToggle").on("keyup", function (e) {
	// 	var code = (e.keyCode ? e.keyCode : e.which);
	// 	if (code == 9) {
	// 		$(this).css('outline', 'dashed 3px #4599ff')
	// 	}

	// })
	// $("a, button, input, [tabindex='0'], .slideToggle").on('focusout', function() {
	// 	$(this).css('outline', 'none')
	// })

	// $(" .slideToggle").on("keyup", function (e) {
	// 	var code = (e.keyCode ? e.keyCode : e.which);
	// 	if (code == 9) {
	// 		$(this).find('.heading').css('outline', 'dashed 3px #4599ff')
	// 	}

	// })
	// $(".slideToggle").on('focusout', function() {
	// 	$(this).find('.heading').css('outline', 'none')
	// })


	// $(".cards").on("keyup", function (e) {
	// 	var code = (e.keyCode ? e.keyCode : e.which);
	// 	if (code == 9) {
	// 		$(this).find('.flip-card').css('outline', 'dashed 3px #4599ff')
	// 	}

	// })
	// $(".cards").on('focusout', function() {
	// 	$(this).find('.flip-card').css('outline', 'none')
	// })

	$('.cards').on("keyup", function (e) {

		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 13) {

			var $inner = $(this).find('.flip-card-inner');
			if ( $inner.hasClass('flipIt') ){
				$inner.find('span').attr("tabindex", -1);
				$inner.find('a').attr("tabindex", -1);
			}else{
				$inner.find('span').attr("tabindex", 0);
				$inner.find('a').attr("tabindex", 0);
			}
			$inner.toggleClass('flipIt');
		}
	});

	$('.whiteBubble').on("keyup", function (e) {
		// console.log(e);

		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 13) {


			$('#myModal').modal('show');
			setModalTab(e.target);
		}
	});



	// $('.whiteBubble').on('mouseenter',function() {
	// 	$(this).find('.rightBubble').hide()
	// 	$(this).find('.new').show().css('display', 'flex')
	// })

	// $('.whiteBubble').on('mouseleave',function() {
	// 	$(this).find('.rightBubble').show()
	// 	$(this).find('.new').hide().css('display', 'none')
	// })



	$('.radio-inline input').on('keyup', function(e) {

		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9 ) {

			$('.radio-inline input').change(function (e) {

				setReasonActive();

			})

			function setReasonActive() {
				$('.radio-inline input').each(function () {
					if ($(this).prop('checked')) {
						$(this).parents('.vertical').css('background' ,'#166da1');

					} else {
						$(this).parents('.vertical').css( 'background' ,'transparent')
					}
				})
			}

			setReasonActive()


		}
	})

	$('.radio-inline input').change(function (e) {

		setReasonActive();

	})

	function setReasonActive() {
		$('.radio-inline input').each(function () {
			if ($(this).prop('checked')) {
				$(this).closest('.vertical').find('.fas').css('color', '#7bc043')
				$(this).parents('.vertical').css('background' ,'#166da1');

			} else {
				$(this).parents('.vertical').css( 'background' ,'transparent')
				$(this).closest('.vertical').find('.fas').css('color', 'white')
			}
		})
	}

	setReasonActive()



	$('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li').on('click', function (e) {

		e.preventDefault();
		scrollfn($(this).attr('data-target'));
	});


	$('.menu-buttons-floating li').click(function() {
		$(this).addClass('activated')
	})



	$('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li').on('keypress', function (e) {

		e.preventDefault();
		scrollfn($(this).attr('data-target'));
	});

	$('.collapse').on('show.bs.collapse', function () {
		$('a[href="#' + this.id + '"] .caret-down').css({
			transform: "rotate(180deg)"
		});
		$('a[href="#' + this.id + '"] .iques').css({
			opacity: "1"
		});
	});
	$('.collapse').on('hide.bs.collapse', function () {
		$('a[href="#' + this.id + '"] .caret-down').css({
			transform: "rotate(0deg)"
		});
		$('a[href="#' + this.id + '"] .iques').css({
			opacity: "0.4"
		});
	});



	$(window).scroll(function () {
		var distanceY = window.pageYOffset || document.documentElement.scrollTop;
		if (distanceY > 555) {
			$('.btnContact').css({
				top: "92px"
			})
			$('.menu-buttons-floating').css({
				opacity: '1',
				visibility: 'visible'
			})
		} else {
			$('.btnContact').css({
				top: "192px"
			})
			$('.menu-buttons-floating').css({
				opacity: '0',
				visibility: 'hidden'
			})
		}
	});


	var toggle = function (){
		var $this = $(this),
			expanded = ( $this.attr('aria-expanded') == 'true' );

		$this.closest('.key1').find('.slideUp').slideToggle('800');

		$this.closest('.key1').find('.navyFont i').toggleClass('rotate');

		$this.attr('aria-expanded', !expanded);
	}
	$('.slideToggle').keypress(
		toggle

	).click(
		toggle
	);


	var toggleAll = function (){
		var that = this;
		if (!$(this).hasClass('hiddenKey')) {

			$(this).html('<i class="far fa-expand-arrows"></i> key').addClass('hiddenKey')

			$(this).closest('.row').find('.col-lg-4').removeClass('col-lg-4').addClass('col-lg-2')

			$(this).closest('.keys').find('.key1').slideUp('800')

			$(this).addClass('funBubble')

			if ($(document).innerWidth() > 767) {
				setTimeout(function() {
					// $('.toggleAll').css({
					$(that).css({
						"transform" : "rotate(-90deg)"
					});
				}, 500)
			}


		}

		else {

			$('.toggleAll').hide()
			$(this).html('collapse all <i class="far fa-compress-arrows-alt"></i>').removeClass('hiddenKey')

			$(this).closest('.row').find('.col-lg-2').removeClass('col-lg-2').addClass('col-lg-4')

			$(this).closest('.keys').find('.key1').slideDown('800')

			$(this).removeClass('funBubble')

			if ($(document).innerWidth() > 767) {
				setTimeout(function() {

					$('.toggleAll').show()

					// $('.toggleAll').css({
					$(that).css({
						"transform" : "rotate(0deg)"
					});
				}, 500)

			}


		}

	}
	$('.toggleAll').keypress(
		toggleAll

	).click(
		toggleAll
	);



	var allStickyRels = $(".allResults");


	var closeAllStickyRels = function(){
		for( i=0; i<allStickyRels.length; i++ ){
			$(allStickyRels[i]).removeClass("showDiv");
		}
	}

	var bubbleSlide = function(){

		if( $(this).hasClass('purple1')) {

			$(this).closest('.whiteBubble').find('.slideThisDown').addClass('purpleSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('aquaSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('blueSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('salmonSlide')

			$(this).closest('.whiteBubble').find('.slideThisDown p').html('Every child and youth in FS088 should be reported either in FS005 or FS006.')

		}

		if( $(this).hasClass('purple2')) {

			$(this).closest('.whiteBubble').find('.slideThisDown').addClass('purpleSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('aquaSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('blueSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('salmonSlide')

			$(this).closest('.whiteBubble').find('.slideThisDown p').html('Every child and youth reported in FS005 must have at least one removal in FS007.')

		}


		if( $(this).hasClass('aqua2')) {

			$(this).closest('.whiteBubble').find('.slideThisDown').addClass('aquaSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('purpleSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('blueSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('salmonSlide')

			$(this).closest('.whiteBubble').find('.slideThisDown p').html('Every child and youth in FS088 should be reported either in FS005 or FS006.')
		}

		if( $(this).hasClass('periwinkle')) {

			$(this).closest('.whiteBubble').find('.slideThisDown').addClass('blueSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('purpleSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('aquaSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('salmonSlide')

			$(this).closest('.whiteBubble').find('.slideThisDown p').html('Every child and youth counted in FS088 must have at least one removal counted in FS143.')
		}

		if( $(this).hasClass('salmon1')) {

			$(this).closest('.whiteBubble').find('.slideThisDown').addClass('salmonSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('purpleSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('aquaSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('blueSlide')

			$(this).closest('.whiteBubble').find('.slideThisDown p').html('Every child and youth with an expulsion in FS006 should be included in FS144.')
		}

		if( $(this).hasClass('salmon2')) {

			$(this).closest('.whiteBubble').find('.slideThisDown').addClass('salmonSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('purpleSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('aquaSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('blueSlide')

			$(this).closest('.whiteBubble').find('.slideThisDown p').html('Both students with disabilities and students without disabilities are included in FS144.')
		}

		if (!$(this).hasClass('showDiv')) {


			var $slide = $(this).closest('.whiteBubble').find('.slideThisDown');
			$slide.slideDown();
			$slide.find('p').attr('role', 'alert');
			$(this).closest('.whiteBubble').addClass('clear')
			closeAllStickyRels();
			$(this).addClass("showDiv");
		};
	}

	$(".allResults").mouseenter(bubbleSlide);
	$(".allResults").focusin(bubbleSlide);

	var bubbleSlideUp = function(e) {
		$(this).removeClass("showDiv");
		closeAllStickyRels();
		$(this).closest('.whiteBubble').removeClass('clear')
		var $slide = $(this).closest('.whiteBubble').find('.slideThisDown');
		$slide.slideUp();
		$slide.find('p').removeAttr('role');

	}
	$('.filter-attr-list').on('mouseleave', bubbleSlideUp);
	$(".allResults").focusout(bubbleSlideUp);



	// $('#carousel').carousel({wrap: false});
	$('#carousel').slick({
		centerMode: true,
		centerPadding: '4vw',
		dots: true,
		infinite: false,
		slidesToShow: 1
	});

	function handleFirstTab(e) {
		if (e.keyCode === 9) { // the "I am a keyboard user" key
			document.body.classList.add('user-is-tabbing');
			window.removeEventListener('keydown', handleFirstTab);
		}
	}

	function removeTabClass() {
		if (document.body.classList.contains('user-is-tabbing')){
			document.body.classList.remove('user-is-tabbing');
		}
	}

	$('ul.nav li.nav-item').click(function(){
		$('li.nav-item.active').removeClass('active');
		$(this).addClass('active');
	})
	
	function setModalTab(self){
		var el;

		if (this === window){
			console.log("self");
			el = self;
		}else{
			console.log("this");
			el = this;
		}
		console.log("el", el);
		window.el = el;

		//get tag from el (add to elements)
		var tab = el.getAttribute('tab-id');
		//grab tab with tag (add to tabs)
		//trigger tab click
		console.log('tab-id', tab);
		$('li.nav-item[tab-id="' + tab + '"] a').click();
	}

	function innerButtonClick(){
		event.stopPropagation();
		setModalTab(this);
		$('#myModal').modal('show');
	}

	$('li.allResults').click(innerButtonClick);
	$('.whiteBubble').click(setModalTab);

	function closeTopTooltip(){
		$(this).parent().parent().find('img.kid-img').blur();
	}

	$('#kid-container i.tip-close').click(closeTopTooltip);

	function tapCard(){
		var $section = $('#Guide')
		// var $el = $(this);

		if ($section.hasClass("untapped")){
			$section.removeClass("untapped")
		}

		// if ($el.hasClass('untapped')){
		// 	$el.css({background: "red"});
		// }
		// $el.toggleClass('untapped');
		$(this).toggleClass('tapped');
		// $('body').toggleClass('tapped');
	}
	$('.flip-card').on('touchend', tapCard);


	$('button.close').on('keydown', function(e){
		if(e.keyCode === 9 && e.shiftKey){
			e.preventDefault();
			var tabID = $('li.active').attr('tab-id');
			$('#last-' + tabID).focus();
		}
	});

	$('.last-focus-modal').on('keydown', function(e){
		if(e.keyCode === 9 && !e.shiftKey){
			e.preventDefault();
			$('button.close').focus();
		}
	});


	window.addEventListener('keydown', handleFirstTab);
	window.addEventListener('click', function(){
		removeTabClass();
		window.addEventListener('keydown', handleFirstTab);	
	});

	if (window.innerWidth < 421){
		// alert("test");
		$('.modal-content').css("max-height", window.innerHeight - 90 + "px");
		
		$(window).resize(function(){
			$('.modal-content').css("max-height", window.innerHeight - 90 + "px");
		});

	}
})
