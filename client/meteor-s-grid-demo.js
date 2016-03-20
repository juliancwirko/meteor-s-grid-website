'use strict';

var goTopFunc = function () {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
};

Template.backBtn.rendered = function () {
    var $backToTopButton = this.$('.js-back-to-top-btn');
    if ($backToTopButton.length) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 700) {
                $backToTopButton.removeClass('hidden');
            } else {
                $backToTopButton.addClass('hidden');
            }
        });
        $backToTopButton.on('click', goTopFunc);
    }
};

Template.stickyHeder.rendered = function () {
    var $stickyHeader = this.$('.js-sticky-header');
    if ($stickyHeader.length) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $stickyHeader.addClass('active');
            } else {
                $stickyHeader.removeClass('active');
            }
        });
    }
};

Template.stickyHeder.events({
    'click .js-go-to-paragraph': function (e) {
        e.preventDefault();
        var goToId = $(e.target).attr('href');
        $('html, body').stop(true, false).animate({
            scrollTop: $(goToId).position().top - 45
        }, 'slow', 'linear');
    },
    'click .js-go-top': function (e) {
        e.preventDefault();
        goTopFunc();
    }
});

Template.main.events({
    'click .js-go-to-install': function (e) {
        e.preventDefault();
        $('html, body').stop(true, false).animate({
            scrollTop: $('.docs').position().top
        }, 'slow', 'linear');
    }
});