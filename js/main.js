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
      $(this).toggleClass('active').siblings('.details').slideToggle();
    });
  });
});
