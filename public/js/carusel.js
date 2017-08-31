var myCarousel = document.getElementById('carusel');

if (myCarousel && myCarousel.hasChildNodes()) {
    var imagesWrapper = document.getElementById('wrapper');
    var prevArrow = document.getElementById('prev');
    var nextArrow = document.getElementById('next');
    var childNodes = myCarousel.childNodes;
    var imagesArray = [];

    for (var i = 0; i < childNodes.length; i++) {
        var currentNode = childNodes[i];
        if (currentNode.nodeName === 'IMG') {
            imagesArray.push(currentNode.src);
            currentNode.classList.add('hide');
        }
    }

imagesWrapper.style.backgroundImage = 'url(' + imagesArray[0] + ')';
var currentImage = 0;
var numberOfImages = imagesArray.length;

prevArrow.onclick = function () {
    handleSlideshowArrow('prev');
};

nextArrow.onclick = function () {
    handleSlideshowArrow('next');
};

function handleSlideshowArrow(val) {
    if (val === 'prev') {
        if (currentImage > 0) {
            currentImage--;
        } else {
            currentImage = numberOfImages - 1;
        }
    } else if (val === 'next') {
        if (currentImage < numberOfImages - 1) {
            currentImage++;
        } else {
            currentImage = 0;
        }
    }

    imagesWrapper.classList.add('fade-out');
    imagesWrapper.style.backgroundImage = 'url(' + imagesArray[currentImage] + ')';
    imagesWrapper.classList.remove('fade-out');
}

}



$(document).ready(function () {

    /*var $cart = $('.cart-items');*/
    var menu_navigation = $('#main-nav'),
          /*$L = 900,*/
          /*cart_trigger = $('#cart-trigger'),*/
          h_menu = $('#h-menu'),
          /*cart = $('#cart'),*/
          shadow_layer = $('#shadow-layer');


    shadow_layer.on('click', function () {
        cart.removeClass('speed-in');
        menu_navigation.removeClass('speed-in');
        shadow_layer.removeClass('is-visible');
        $('body').removeClass('overflow-hidden');
    });

    h_menu.on('click', function () {
        /*cart.removeClass('speed-in');*/
        toggle_panel_visibility(menu_navigation, shadow_layer, $('body'));
    });

    $('.Ukraine').on('mouseover', function () {
      $('.photo1').toggleClass('speed-in');
    });
    $('.Ukraine').on('mouseout', function () {
      $('.photo1').removeClass('speed-in');
    });

    $('.world').on('mouseover', function () {
      $('.photo2').toggleClass('speed-in');
    });
    $('.world').on('mouseout', function () {
      $('.photo2').removeClass('speed-in');
    });

    $('.people').on('mouseover', function () {
      $('.photo3').toggleClass('speed-in');
    });
    $('.people').on('mouseout', function () {
      $('.photo3').removeClass('speed-in');
    });

    $('.animals').on('mouseover', function () {
      $('.photo4').toggleClass('speed-in');
    });
    $('.animals').on('mouseout', function () {
      $('.photo4').removeClass('speed-in');
    });

    $('.nature').on('mouseover', function () {
      $('.photo5').toggleClass('speed-in');
    });
    $('.nature').on('mouseout', function () {
      $('.photo5').removeClass('speed-in');
    });


    /*$('#p1').on('mouseover', function () {

        $('.img-title').find('h5, article, button').stop().animate({
            opacity: '1',
            marginLeft: '230px'
        }, 300);
    }, function () {
        $('.img-title').find('h5, article', 'button').stop().animate({
            opacity: '0',
            marginLeft: '0px'
        }, 100);
    });*/
      //url: 'https://raw.githubusercontent.com/cerise77/shop/master/dog.html'
      /*$.ajax({
        url: 'dog.html',
        dataType: 'html',
        success: function(result){
          $.each(data, function() {
          });
        }
      });*/

    /*$('#p1').on('click', function () {
      $('body').load('dog.html');
      console.log('dgdfgfdg');
    });*/



    /*$('#p1').on('click', function () {
      $.ajax({
        url: 'dog.html',
        dataType: 'html',
        success: function(data) {
          console.log('dataa');
          //alert( "Data Saved: " + data );
        }
      });
    });*/

    /*move_navigation(menu_navigation, $L);*/

    /*$(window).on('resize', function () {
        move_navigation(menu_navigation, $L);
        if ($(window).width() >= $L && menu_navigation.hasClass('speed-in')) {
            menu_navigation.removeClass('speed-in');
            shadow_layer.removeClass('is-visible');
            $('body').removeClass('overflow-hidden');
        }
    });*/


    /*$('body').on('click', '.cart-items .item-remove', function () {
        var $this = $(this),
        $item = $this.parents('li');
        $item.remove();
        calculateSubtotal($item);
        updateCartQuantity();
        calculateAndUpdate();
    });*/
});





function toggle_panel_visibility(panel, background_layer, body) {
if (panel.hasClass('speed-in')) {
    panel.removeClass('speed-in');
    background_layer.removeClass('is-visible');
    body.removeClass('overflow-hidden');
} else {
    panel.addClass('speed-in');
    background_layer.addClass('is-visible');
    body.addClass('overflow-hidden');
}
}

/*function move_navigation(navigation, $MQ) {
if ($(window).width() >= $MQ) {
    navigation.detach();
    navigation.appendTo('header');
} else {
    navigation.detach();
    navigation.insertAfter('header');
}
}*/
