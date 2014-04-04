(function () {
  'use strict';

  var loaded = {};
  var config = {
    compile: function (source, done) {
      done(source);
    },
    render: function (element, template, context) {
      element.innerHTML = template(context);
    },
    destAttr: 'data-template-name',
    domProperty: 'template',
    prefix: 'templates/',
    selector: '[data-template]',
    srcAttr: 'data-template',
    suffix: '.html'
  };

  skate(config.selector, {
    ready: function (done) {
      function loadUsingAjax () {
        var request = new XMLHttpRequest();
        request.open('GET', config.prefix + templateName + config.suffix, true);
        request.onreadystatechange = function () {
          if (request.readyState === 4 && request.status === 200) {
            return compileAndRender(request.responseText, context);
          }
        };
        request.send();
      }

      function compile (src, done) {
        config.compile(src, function (compiled) {
          done(loaded[templateName] = compiled);
        });
      }

      function compileAndRender (src, ctx) {
        compile(src, function () {
          render(ctx);
        });
      }

      function render (ctx) {
        that[config.domProperty] = config.render(that, loaded[templateName], ctx);
        done();
      }

      var that = this;
      var context = {};
      var templateName = this.getAttribute(config.srcAttr);

      if (loaded[templateName]) {
        return render(context);
      }

      var templateNode = document.querySelector('[' + config.destAttr + '="' + templateName + '"]');

      if (templateNode) {
        return compileAndRender(templateNode.innerHTML, context);
      }

      return loadUsingAjax();
    }
  });
}());
