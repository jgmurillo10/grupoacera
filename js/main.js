$(document).ready(function() {
      "use strict";
      $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
      $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
      $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">&nbsp;</a>");
      $(".menu > ul > li").hover(function(e) {
        if ($(window).width() > 943) {
          $(this).children("ul").stop(true, false).fadeToggle(150);
          e.preventDefault();
        }
      });
      $(".menu > ul > li").click(function() {
        if ($(window).width() <= 943) {
          $(this).children("ul").fadeToggle(300);
        }
        console.log($('.menu > ul > li'));
        if ($('.menu > ul > li > ul:not(:has(ul))') ){
        }

      });
      $('.menu > ul > li#no-drop').click(function () {
        $(".menu > ul").removeClass('show-on-mobile');
      });
      $(".menu > ul > li > ul > li").click(function () {
        $(".menu > ul").removeClass('show-on-mobile', 1000);
      });
      $(".menu-mobile").click(function(e) {
        $(".menu > ul").toggleClass('show-on-mobile',1000);
        e.preventDefault();
      });

    });
    $(window).resize(function() {
      console.log('resize');
      $(".menu > ul > li").children("ul").hide();
      $(".menu > ul").removeClass('show-on-mobile');
    });
