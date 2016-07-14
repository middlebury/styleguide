(function($) {

  $(document).ready(function() {

    var $nav = $('#editorial-nav');

    var $scrollContainer = $('.content');

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


    /**
     * set up markjs for search and keyword highlighting
     */
    var $searchInput = $('.search input[name="keyword"]');
    var $context = $('.js-mark-context');

    var mark = function() {
      var keyword = $searchInput.val();

      $context.unmark();

      var options = {
        done: function() {
          $context.find('section').not(':has(mark)').hide();

          // scroll first mark into view
          document.querySelector('mark').scrollIntoView()
        }
      };

      $context.find('section').show();

      if(keyword) {
        $context.mark(keyword, options);
      }

    }

    // bind mark func to search input
    $searchInput.on('input', mark);



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
