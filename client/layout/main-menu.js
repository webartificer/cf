Template.mainMenu.events({

    'click .menutoggle': function (e) {
        // $('.menu').css('display','block');
        $('.menu').show();
        // $('.overlay').show();
        $('.menutoggle').hide();
        $('.menuclose').show();
        $('.cftop').removeClass("wow")
        // $('body').css('transform','translateX(-100px)');
    },
    'click .menuclose': function (e) {
        $('.menu').fadeOut(200);
        // $('.overlay').fadeOut(200);
        $('.menutoggle').show();
        $('.menuclose').hide();
        $('.cftop').addClass("wow")
        // $('#hero').css('transform','translateX(-200px)');
    },

});
