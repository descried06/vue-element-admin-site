(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{251:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("El diseño general de la página es la estructura de un producto y a menudo incluye navegación, barras laterales, breadcrumbs y contenido. Para comprender un proyecto de administración, primero comprende su diseño básico.")]),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Código")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/tree/master/src/layout",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/layout"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("code",[t._v("@")]),t._v(" es el "),a("a",{attrs:{href:"https://webpack.js.org/configuration/resolve/#resolve-alias",target:"_blank",rel:"noopener noreferrer"}},[t._v("alias"),a("OutboundLink")],1),t._v(" de webpack. Si no lo entiendes por favor estudíalo por tu cuenta.")]),t._v(" "),a("br"),t._v(" "),t._m(2),t._v(" "),t._m(3),a("p",[t._v("Esto utiliza vue-router "),a("a",{attrs:{href:"https://router.vuejs.org/guide/essentials/nested-routes.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("anidación de enrutamiento"),a("OutboundLink")],1),t._v(", por lo que, en general, agregar o modificar una página solo afectará el cuerpo principal de app-main. Otro contenido en el diseño, como: la barra lateral o la barra de navegación no cambiará con tu página principal.")]),t._v(" "),t._m(4),a("br"),t._v(" "),t._m(5),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Código")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/layout/components/AppMain.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/layout/components/AppMain"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("Aquí hay una capa de "),a("code",[t._v("keep-alive")]),t._v(", afuera "),a("code",[t._v("app-main")]),t._v(" es principalmente para almacenar en caché "),a("code",[t._v("<router-view>")]),t._v(", con la navegación de la pestaña "),a("code",[t._v("tabs-view")]),t._v(" de la página, si no lo necesitas "),a("router-link",{attrs:{to:"./tags-view.html"}},[t._v("eliminalo")]),t._v(".")],1),t._v(" "),a("p",[a("code",[t._v("transition")]),t._v(" define la animación de cambio entre páginas, puedes modificar la animación de transición según tus propias necesidades. "),a("a",{attrs:{href:"https://vuejs.org/v2/guide/transitions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Documentación"),a("OutboundLink")],1),t._v(" relacionada.")]),t._v(" "),a("p",[t._v("Se proporcionan dos animaciones de transición de forma predeterminada "),a("code",[t._v("fade")]),t._v(" y "),a("code",[t._v("fade-transform")]),t._v(". Para la implementación específica de CSS, consulta "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/styles/transition.scss",target:"_blank",rel:"noopener noreferrer"}},[t._v("transition.scss"),a("OutboundLink")],1),t._v(". Si necesitas cambiarla, puedes modificar "),a("code",[t._v("name")]),t._v(" de "),a("code",[t._v("transition")]),t._v(" en "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/layout/components/AppMain.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("AppMain.vue"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("br"),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("El mismo componente se utiliza para crear y editar páginas. Por defecto, cuando se cambien estas dos páginas, no se activarán los hooks creados o montados de vue. "),a("a",{attrs:{href:"https://router.vuejs.org/guide/advanced/data-fetching.html#data-fetching",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oficialmente dice"),a("OutboundLink")],1),t._v(" que puedes hacer esto a través del cambio de reloj "),a("code",[t._v("$route")]),t._v(". A decir verdad, sigue siendo muy problemático. Más tarde descubrí que simplemente podía agregar una clave única a router-view para asegurar que los hooks de enrutamiento se vuelvan a representar cuando se cambia la ruta. Es mucho más simple.")]),t._v(" "),t._m(9),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("Código: "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/tree/master/src/views/example",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/views/example"),a("OutboundLink")],1)])]),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("En pocas palabras, este proyecto no se adaptará a móvil. Es una respuesta simple y puedes modificarlo tu mismo.")])])}),[function(){var t=this._self._c;return t("h1",{attrs:{id:"diseno"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#diseno"}},[this._v("#")]),this._v(" Diseño")])},function(){var t=this._self._c;return t("p",[t("img",{attrs:{src:"https://panjiachen.gitee.io/gitee-cdn/vue-element-admin-site/7066d74f-12c5-47d6-b6ad-f22b43fec917.png",alt:""}})])},function(){var t=this,a=t._self._c;return a("p",[t._v("La mayoría de las páginas en "),a("code",[t._v("vue-element-admin")]),t._v(" se basan en este "),a("code",[t._v("layout")]),t._v(", excepto las páginas individuales como: "),a("code",[t._v("login")]),t._v(", "),a("code",[t._v("404")]),t._v(", "),a("code",[t._v("401")]),t._v(", etc., las cuales no utilizan este diseño. También es fácil si se quiere tener varios diseños en un proyecto, simplemente hay que elegir un componente de diseño diferente en el enrutamiento de primer nivel.")])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Sin diseño")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/401'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'errorPage/401'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Con diseño")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/documentation'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Puedes elegir diferentes componentes de diseño")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Layout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Aquí la ruta se muestra en app-main")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("children")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'documentation/index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'documentation'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this._self._c;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("/foo                                  /bar\n+------------------+                  +-----------------+\n| layout           |                  | layout          |\n| +--------------+ |                  | +-------------+ |\n| | foo.vue      | |  +------------\x3e  | | bar.vue     | |\n| |              | |                  | |             | |\n| +--------------+ |                  | +-------------+ |\n+------------------+                  +-----------------+\n")])])])},function(){var t=this._self._c;return t("h2",{attrs:{id:"app-main"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-main"}},[this._v("#")]),this._v(" app-main")])},function(){var t=this._self._c;return t("h2",{attrs:{id:"router-view"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#router-view"}},[this._v("#")]),this._v(" router-view")])},function(){var t=this._self._c;return t("p",[t("strong",[this._v("Diferente enrutador, el mismo componente vue")]),this._v(" En un trabajo real, hay muchas situaciones como:")])},function(){var t=this._self._c;return t("p",[t("img",{attrs:{src:"https://panjiachen.gitee.io/gitee-cdn/vue-element-admin-site/ac5047c9-cb75-4415-89e3-9386c42f3ef9.jpeg",alt:""}})])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("router"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("view "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("router"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("view"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("computed")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// solo asegúrate de que la clave (key) sea única")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fullPath\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this._self._c;return t("p",[t("strong",[this._v("O")]),this._v(" Puedes declarar dos vistas diferentes, como "),t("code",[this._v("editForm")]),this._v(" y "),t("code",[this._v("createForm")]),this._v(" en este proyecto, pero introducirlo en el mismo componente.")])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- create.vue --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("article-detail")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":is-edit")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("false"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("article-detail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" //crear\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ArticleDetail "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./components/ArticleDetail'")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- edit.vue --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("article-detail")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":is-edit")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("article-detail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" //editar\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ArticleDetail "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./components/ArticleDetail'")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this._self._c;return t("h2",{attrs:{id:"movil"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#movil"}},[this._v("#")]),this._v(" Móvil")])},function(){var t=this._self._c;return t("p",[this._v("La posición oficial de "),t("code",[this._v("element-ui")]),this._v(" es de framework del lado del escritorio, y la mayoría de los proyectos de administración son complejos, es imposible cumplir con las interacciones del lado del escritorio y del lado del móvil a través de una simple adaptación. Por lo tanto, la interacción entre los dos extremos debe ser diferente. Se recomienda volver a hacer un sistema para dispositivos móviles.")])}],!1,null,null,null);a.default=n.exports}}]);