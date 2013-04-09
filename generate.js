var fs = require('fs');

var marked = require('marked');
marked.setOptions({
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  langPrefix: 'language-',
  highlight: function(code, lang) {
    if (lang === 'js') {
      return highlighter.javascript(code);
    }
    return code;
  }
});

var file = fs.readFileSync('./_index.html', 'utf-8');

var matches = file.match(/<\!\-\-MD\s+([^\s]+)\s+\-\->/ig);
matches.forEach(function (match) {
  file = file.replace(match, marked(fs.readFileSync('./' + match.replace('<!--MD ', '').replace(' -->', '') + '.md', 'utf-8')));
});

fs.writeFileSync('./index.html', file);
