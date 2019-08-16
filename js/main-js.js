//========== nav ==========//
(function($){
	$(function() {
		$('.menu__icon').on('click', function() {
			$(this).closest('.menu').toggleClass('menu_state_open');
		});
		$('.menu__links-item').on('click', function() {
      // do something

      $(this).closest('.menu')
      .removeClass('menu_state_open');
  });
	});
})(jQuery);




//   ========== isotope =========
$(document).ready(function(){
	var $gallery = $('.gallery');

	$gallery.isotope({
		itemSelector: '.item'
	});


	// filter buttons
	$('#filter button').click(function(){
		console.log(this);
		var $this = $(this);
		if(!$this.hasClass('is-checked')){
			$this.parent('#options').find('.is-checked').removeClass('is-checked');
			$this.addClass('is-checked');	
		}
		var selector = $this.attr('data-filter');
		$gallery.isotope({
			filter: selector
		});
		return false;
	});
});

	// add and remove button's classes
	$('#filter button').click(function() {  
		$(this).siblings().removeClass('is-checked');
		$(this).addClass('is-checked');
	});



//========== for video (android) ==========//
var v = document.getElementById("movie");
v.onclick = function() {
	if (v.paused) {
		v.play();
	} else {
		v.pause();
	}
};



//========== for slick-slider =========//
$(".regular").slick({
	dots: true,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3
});


//========== for more load =========//
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
	if(xhr.readyState === 4){
		document.getElementById('ajax').innerHTML = xhr.responseText;
	}
}

xhr.open('GET', './data.html');
function sendAJAX(){
	xhr.send();
	document.getElementById('load').style.display = 'none';
}

//for button load-more
$(function(){

	$('.load-more').on('click', function(){
		const btn = $(this);
		const loder = btn('.ba-our-work__btn');
		$.ajax({
			url: 'data.html',
			type: 'GET',
			beforeSend: function(){
				btn.attr('diabled', true);
				loader.addClass('d-innline-block');
			},
			succcess: function(response){
				setTimeout(function(){
					loader.removeClass('d-innline-block');
					btn.attr('diabled', false);
					console.log(response);
				}, 1000);
			},
			error: function(){
				alert('Error!');
				loader.removeClass('d-innline-block');
				btn.attr('diabled', false);
			}
		})	
	});



})


//========== for up&down button ==========//
$(function() {
	var $elem = $('body');

	$('#nav_up').fadeIn('slow');
	$('#nav_down').fadeIn('slow');

	$(window).bind('scrollstart', function(){
		$('#nav_up,#nav_down').stop().animate({'opacity':'0.2'});
	});
	$(window).bind('scrollstop', function(){
		$('#nav_up,#nav_down').stop().animate({'opacity':'1'});
	});

	$('#nav_down').click(
		function (e) {
			console.log($elem.height())
			// $('html, body').animate({scrollTop: $elem.height()+'px'}, 800);
			$('html, body').animate({scrollTop: $elem.height()+'px'}, 3000);
		}
		);
	$('#nav_up').click(
		function (e) {console.log(e)
			$('html, body').animate({scrollTop: '0px'}, 3000);
		}
		);
});


//========== validation ==========//
// вешаем обработчик на отправку формы
$('#to-write-us').on('submit', function(e){

    // отменяем действие по умолчанию (делаем так что бы страница не перезагружалась)
    e.preventDefault();

    // записываем инпуты которые нужно валидировать в переменные
    let inputEmail = $('#email'),
    inputName = $('#name');


    // прячем все сообщения об ошибках
    $('.ba-form-error').css('display', 'none');

    // создаем регулярное выражение проверки email
    let validateEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    
    // проверяем если значение инпута не является имейлом
    if (!validateEmail.test(inputEmail.val())){
        // делаем блок с описание ошибки под инпутом видимым
        inputEmail.closest('.ba-form-control').find('.ba-form-error').css('display', 'block')
    }
    
    // потом проверяем блок на пустоту, это же можем сделать просто 
    // добавив к инпуту аттрибут required (но в этом случае мы не сможем показать свою ошибку, разве что только с помощью css)
    if( inputName.val() === '' ){
        // делаем блок с описание ошибки под инпутом видимым
        inputName.closest('.ba-form-control').find('.ba-form-error').css('display', 'block')
    }
})