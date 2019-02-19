// Compiled using marko@4.15.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nodealura$1.0.0/src/app/views/livros/home/home.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    Layout = marko_loadTemplate(require.resolve("./layout.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_dynamicTag = marko_helpers.d,
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    await_tag = marko_loadTag(require("marko/src/taglibs/core/await/renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  marko_dynamicTag(Layout, {
      cabecalho: {
          renderBody: function renderBody(out) {
            out.w("<h1>Casa do Código - Home</h1>");
          }
        }
    }, null, out, __component, "0");

  var livrosPromise = new Promise((resolve, reject) => {
   setTimeout(function() {
       resolve([
           {
               titulo: 'Cangaceiro Node'
           },
           {
               titulo: 'Node na prática'
           }
       ]);
   }, 1000);
});

  await_tag({
      _provider: livrosPromise,
      _name: "livrosPromise",
      then: {
          renderBody: function renderBody(out, livros) {
            var for__5 = 0;

            marko_forEach(livros, function(livro) {
              var keyscope__6 = "[" + ((for__5++) + "]");

              out.w("<div>Título: " +
                marko_escapeXml(livro.titulo) +
                "</div>");
            });
          }
        }
    }, out, __component, "3");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nodealura$1.0.0/src/app/views/livros/home/home.marko",
    tags: [
      "./layout.marko",
      "marko/src/taglibs/core/await/renderer"
    ]
  };
