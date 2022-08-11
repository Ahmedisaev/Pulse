
$(function() {
	  
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() { //ul.catalog__tabs получаем данный элемент; click означает, что мы будем кликать на один из элементов которые внутри находятся, но с условием, что мы кликаем на list item у которого нет класса .catalog__tab_active
	$(this) // this ссылается на тот этомент на который мы нажали.
		.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active') //когда мы нажали на таб который не активен, то нам необходимо добавить этот класс catalog__tab_active. siblings означает, что все соседние табы которые не включает тот таб на который мы нажали, мы у них должны удалить данный класс catalog__tab_active.
		.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active'); // .closest означает, что мы находим ближайший элемент, а именно мы находим какой-то блок с классом container. find означает, что внутри container нужно найти блок с классом catalog__content. removeClass означает, что те элементы которые нашли, будут удалять класс catalog__content_active. .eq($(this).index()) команда означает, что на получает тот номер элемента на который я нажимаю и с помошью этой команды я к оперделенному content под определенным номером будет добавляться класс активности addClass.
	});

	function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-items__content').eq(i).toggleClass('catalog-items__content_active');
				$('.catalog-items__list').eq(i).toggleClass('catalog-items__list_active');
			})
		});
	};

	toggleSlide('.catalog-items__link');
	toggleSlide('.catalog-items__back');

});




var slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	controls: false,
	nav: false,
	navPosition: "bottom",
	responsive: {
		350: {
			gutter: 20,
			items: 1,
			nav: true,
			autoWidth: true
		},
		700: {
			gutter: 30,
		},
		900: {
			items: 1,
			nav: false
		}
		}
	});

	document.querySelector('.prev').addEventListener('click', function () {
		slider.goTo('prev');
	});

	document.querySelector('.next').addEventListener('click', function () {
		slider.goTo('next');
	});





 
