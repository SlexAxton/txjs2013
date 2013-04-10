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
});
