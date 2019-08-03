// Слайдер 
let slider = $('.slider'),
    cloneElementFirst = $('.slide').eq(0).clone(),
    cloneElementSecond = $('.slide').eq(1).clone();

slider.append(cloneElementFirst);
slider.append(cloneElementSecond);

let arrowRight = $('.arrow-right'),
    arrowLeft = $('.arrow-left'),
    slide = $('.slide');



let i = 1;

arrowRight.click(function () {                 

    if (i == slide.length - 2) {

        // circleSlider.css({
        //     'left' : '0'
        // });

        slider.animate({
            
            'left' : '-' + (50 * i) + '%'

        }, 500, function () {

            slider.css({
                'left' : '0'
            });
    
        });

        i = 1;

    }else{

        // circleSlider.css({
        //     'left' : (i * 100 / (sliderItem.length - 1)) + '%'
        // });

        slider.animate({
            'left' : '-' + (50 * i) + '%'
        }, 500);

        i++;

    }

});


arrowLeft.click(function () {

    if (i == 1) {

        // circleSlider.css({
        //     'left' : (sliderItem.length - 2) * 100 / (sliderItem.length - 1) + '%'
        // });

        slider.css({
            'left' : '-' + 50 * (slide.length - 2) + '%'
        });

        slider.animate({
            'left' : '-' + 50 * (slide.length - 3) + '%'
        }, 500);

        i = slide.length - 2;

    }else{
        
        // circleSlider.css({
        //     'left' : (i - 2) * 100 / (sliderItem.length - 1) + '%'
        // });

        slider.animate({
            'left' : '-' + ( 50 * (i - 2) ) + '%'
        }, 500);

        i--;
    }

});


// popup каталог
let catalog = $('.catalog'),
    popupCatalog = $('.popup-catalog');

// catalog.mouseenter( function () {
//     popupCatalog.slideDown(500);
// } );

$('body').click( function (e) {
    if ( catalog.is(e.target) ) {
        popupCatalog.slideDown(500);
    } else {
        popupCatalog.slideUp(500);
    }
} );