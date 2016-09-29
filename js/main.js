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
      });
  });

})(jQuery);
