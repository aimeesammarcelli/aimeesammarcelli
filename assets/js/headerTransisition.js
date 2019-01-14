$(function() {
  
  var $headerHeight = 117;
  var $projectsWrapper = $('#projects-wrapper');
  $(window).scroll(function() {
    var $responsiveHeaderTopProject = $(window).scrollTop()+$headerHeight - $projectsWrapper.offset().top;
    var $responsiveHeaderBottomProject = $responsiveHeaderTopProject - $projectsWrapper.outerHeight(true);

    if ($responsiveHeaderTopProject > 0 && $responsiveHeaderTopProject < $headerHeight ) {
      $('#bottom-responsive').css('height', $responsiveHeaderTopProject);
      $('#bottom-responsive').css('top', $headerHeight-$responsiveHeaderTopProject);
    }
    else if($responsiveHeaderTopProject > $headerHeight) {
      $('#bottom-responsive').css('height', $headerHeight);
      $('#bottom-responsive').css('top', '0');
    }
    else if ($responsiveHeaderTopProject < 0 && $responsiveHeaderBottomProject < 0) {
      $('#bottom-responsive').css('height', '0');
      $('#bottom-responsive').css('top', $headerHeight);
    }

    if ($responsiveHeaderBottomProject > 0 && $responsiveHeaderBottomProject < $headerHeight ) {
      $('#bottom-responsive').css('height', $headerHeight-$responsiveHeaderBottomProject);
      $('#bottom-responsive').css('top', '0');
    }
    else if($responsiveHeaderBottomProject > $headerHeight) {
      $('#bottom-responsive').css('height', '0');
    }
    else if ($responsiveHeaderBottomProject < 0 && $responsiveHeaderTopProject > $headerHeight) {
      $('#bottom-responsive').css('height', $headerHeight);
    }

  });
})
