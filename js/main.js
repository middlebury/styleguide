(function($) {

  $(document).ready(function() {

    var $nav = $('#editorial-nav');

    var $scrollContainer = $('.main');

    $scrollContainer
      .scrollspy({ target: '#editorial-nav' })
      .on('activate.bs.scrollspy', function(e) {
        if(!window.history.pushState || $nav.hasClass('scrolling')) {
          return false;
        }

        var hash = $(e.target).find('a').attr('href');

        window.history.pushState(null, null, hash);
      })

    $nav.affix({
      target: $scrollContainer,
      offset: {
        // top: 100,
        bottom: function () {
          return (this.bottom = $('.footer').outerHeight(true))
        }
      }
    });

    // $nav.find('a').on('click', function() {
    //   var href = $(this).attr('href');
    //
    //   $nav.addClass('scrolling');
    //
    //   $scrollContainer.animate({
    //     scrollTop: $(href).offset().top
    //   }, 1000, function() {
    //     $nav.removeClass('scrolling');
    //   });
    // });
    // 
  });

})(jQuery);
