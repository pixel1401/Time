console.log ('hello world');

function ibg() {

    $.each($('.ibg'), function (index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });
}

ibg();


$('.header-burger') .click(function () {
    $('.header-burger, .header-top__m').toggleClass('active');
    $('body').toggleClass('lock');
});


function ibg() {
    $.each($('.ibg'), function (index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });
}


let user = document.querySelector('.header-top__profil');
user.addEventListener("click", function (e) {
    let  user = document.querySelector('.hover-user');
    user.classList.toggle('_active');
});


$(document).ready(function () {
    $('.main-slider__body').slick({
       

    });
});

$(document).ready(function () {
    $('.bet-slider').slick({
        slidesToShow: 3,
        // autoplay: true,
        slidesToScroll: 2,
        
        responsive: [
            {
                breakpoint: 583,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    
                }
            },
            {
                breakpoint: 839,
                settings: {
                    slidesToShow: 2,
                    
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
        ]
    });
});

$(document).ready(function () {
    $('.quote__slider').slick({  
        // autoplay:true,
        


    });
});

