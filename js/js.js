(function ($) {

    function behaviors() {

        $('[data-ui-dialog-link]')
            .once('ui-dialog')
            .click(function () {
                var $this = $(this);
                var code = $this.attr('data-ui-dialog-link');
                var orderName = $this.attr('data-order-name');

                var dialog = $('[data-ui-dialog="' + code + '"]');

                if (!dialog.length) return false;

                if (orderName) {
                    dialog.find('input[name="order_name"]').val(orderName);
                }

                var width = dialog.attr('data-ui-dialog-width');
                var title = dialog.attr('data-ui-dialog-title');
                var className = dialog.attr('data-ui-dialog-class');

                dialog.dialog({
                    width: width,
                    title: title,
                    modal: true,
                    dialogClass: className
                });

                behaviors();

                return false;
            });


        $('select:visible')
            .once('select2', function () {
                $(this).select2({
                    width: 'auto',
                    dropdownParent: $(this).closest('.form-group')
                });
            });


        $('a.colorbox')
            .once()
            .colorbox({
                maxWidth: '100%',
                maxHeight: '100%'
            });


        $('.products-list.owl-carousel')
            .once()
            .owlCarousel({
                nav: false,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0,
                        dots: true
                    },
                    768: {
                        margin: 30,
                        autoWidth: true,
                        dots: true
                    },
                    1640: {
                        items: 3,
                        margin: 80,
                        dots: false
                    }
                }
            });


        $('[data-our-services-link]')
            .once()
            .click(function () {
                var key = $(this).attr('data-our-services-link');

                $('[data-our-services-link]').removeClass('active');
                $('[data-our-services-link="' + key + '"]').addClass('active');

                $('[data-our-services-img]').removeClass('active');
                $('[data-our-services-img="' + key + '"]').addClass('active');

                $('[data-our-services-info]').removeClass('active');
                $('[data-our-services-info="' + key + '"]').addClass('active');

                return false;
            });


        $('.doctors-list.owl-carousel')
            .once()
            .owlCarousel({
                nav: true,
                dots: false,
                responsive: {
                    0: {
                        items: 1,
                        margin: 30
                    },
                    768: {
                        autoWidth: true,
                        margin: 30
                    },
                    1640: {
                        autoWidth: true,
                        margin: 80
                    }
                }
            });


        $('.slider-block .slider .owl-carousel')
            .once()
            .owlCarousel({
                items: 1,
                nav: true,
                dots: false,
            })
            .on('changed.owl.carousel', function (event) {
                $('[data-slider-block-counter-current]').html(zeroPad(event.item.index + 1, 2));
            });


        $('.slider-block .thumbs .owl-carousel')
            .once()
            .owlCarousel({
                autoWidth: true,
                margin: 42,
                nav: false,
                dots: false,
                slideBy: 1
            });

        $('.slider-block .thumbs .item')
            .once(function () {
                var index = 0;

                $('.slider-block .thumbs .item').each(function () {
                    $(this).attr('data-index', index);

                    index++;
                });
            })
            .click(function () {
                var index = parseInt($(this).attr('data-index'));

                $('.slider-block .slider .owl-carousel').trigger('to.owl.carousel', [index]);
            });


        $('.licenses-list.owl-carousel')
            .once()
            .owlCarousel({
                nav: true,
                dots: false,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    768: {
                        autoWidth: true,
                        margin: 20,
                    },
                    1640: {
                        autoWidth: true,
                        margin: 80,
                    }
                }
            });


        $('.prices-menu-block > ul > li > a')
            .once()
            .click(function () {
                var li = $(this).closest('li');

                li.toggleClass('open');

                $(this)
                    .closest('.prices-menu-block')
                    .find('li.open')
                    .not(li)
                    .removeClass('open');

                return false;
            });


        $('[data-prices-box-toggle]')
            .once()
            .click(function () {
                $(this)
                    .closest('[data-prices-box]')
                    .find('[data-prices-box-item-invisible]')
                    .toggleClass('visible');

                $(this).toggleClass('open');

                return false;
            });


        $('[data-tabs-link]')
            .once()
            .click(function () {
                var key = $(this).attr('data-tabs-link');
                var wrapper = $(this).closest('[data-tabs]');

                wrapper.find('[data-tabs-link]').removeClass('active');
                wrapper.find('[data-tabs-link="' + key + '"]').addClass('active');

                wrapper.find('[data-tabs-content]').removeClass('active');
                wrapper.find('[data-tabs-content="' + key + '"]').addClass('active');

                return false;
            });


        $('.tabs .owl-carousel')
            .once()
            .owlCarousel({
                autoWidth: true,
                nav: false,
                dots: false,
                margin: 30
            });


        $('[data-mobile-menu-toggle]')
            .once()
            .click(function () {
                $('[data-mobile-menu]').toggle();

                $('.mobile-menu .inner').trigger('initPerfectScrollbar');

                return false;
            });


        $('[data-footer-item] .name')
            .once()
            .click(function () {
                var wrapper = $(this)
                    .closest('[data-footer-item]');

                wrapper
                    .find('[data-footer-item-content]')
                    .toggle();

                wrapper.toggleClass('open');
            });


        $('.contacts-page .map')
            .once(function () {
                if (typeof ymaps === "undefined") return;


                ymaps.ready(function () {
                    let coords = [55.727004, 37.574552];

                    let map = new ymaps.Map('map', {
                        center: coords,
                        zoom: 16,
                        controls: ['zoomControl']
                    });

                    map.behaviors.disable('scrollZoom');

                    let myPlacemark = new ymaps.Placemark(coords, {
                        hintContent: 'Трубецкая улица, 12',
                        balloonContent: 'Трубецкая улица, 12'
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/mark.png',
                        iconImageSize: [49, 64],
                        iconImageOffset: [-24, -60]
                    });

                    map.geoObjects.add(myPlacemark);
                });
            });


        $('[data-faq-menu-link]')
            .once()
            .click(function () {
                var key = $(this).attr('data-faq-menu-link');

                $('[data-faq-menu-link]').removeClass('active');
                $('[data-faq-menu-link="' + key + '"]').addClass('active');

                $('[data-faq-list]').removeClass('active');
                $('[data-faq-list="' + key + '"]').addClass('active');

                return false;
            });


        $('.before-after .owl-carousel')
            .once()
            .owlCarousel({
                items: 1,
                dots: false,
                nav: true
            });


        $('.mobile-menu .menu a')
            .once()
            .click(function () {
                var ul = $(this).closest('li').children('ul');

                if (ul.length) {
                    ul.toggle();

                    return false;
                }
            });


        $('.mobile-menu .inner')
            .once()
            .on('initPerfectScrollbar', function () {
                $(this).once('scrollbar', function () {
                    new PerfectScrollbar(this, {
                        wheelSpeed: 2,
                        wheelPropagation: true,
                        minScrollbarLength: 20
                    });
                });
            });

    }


    $(document).ready(function () {
        behaviors();
    });


    $(document).ajaxComplete(function () {
        behaviors();
    });

})(jQuery);