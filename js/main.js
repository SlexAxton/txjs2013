require({
  baseUrl: '/js',
  shim: {
    'mbp': {
      exports: 'MBP'
    }
  }
}, ['jquery', 'mbp'], function ($, MBP) {
  MBP.scaleFix();
  MBP.hideUrlBarOnLoad();
  $(function () {
    $('article h2').click(function() {
      $('.active').not(this).removeClass('active').siblings('.details').hide();
      $(this).toggleClass('active').siblings('.details').slideToggle();
    });

    var targetEl = $(window.location.hash);
    if (targetEl.length) {
      targetEl.find('h2').click();
    }
  });
});
