(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{320:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("除了 element-ui 组件以及脚手架内置的业务组件，有时我们还需要引入其他外部组件，这里以引入 "),s("a",{attrs:{href:"https://github.com/PanJiaChen/vue-countTo",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-count-to"),s("OutboundLink")],1),t._v(" 为例进行介绍。")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("在终端输入下面的命令完成安装：")]),t._v(" "),t._m(2),t._m(3),t._v(" "),s("br"),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),s("br"),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("在 Vuejs 项目中使用 JavaScript 库的一个优雅方式是将其代理到 Vue 的原型对象上去. 按照这种方式, 我们引入 Moment 库:")]),t._v(" "),t._m(13),t._v(" "),t._m(14),s("p",[t._v("由于所有的组件都会从 Vue 的原型对象上继承它们的方法, 因此在所有组件/实例中都可以通过 this.$moment. 的方式访问 Moment 而不需要定义全局变量或者手动的引入:")]),t._v(" "),t._m(15),t._v(" "),t._m(16),s("p",[t._v("在诸多 Vue.js 应用中, Lodash, Moment, Axios, Async 等都是一些非常有用的 JavaScript 库. 但随着项目越来越复杂, 可能会采取组件化和模块化的方式来组织代码, 还可能要使应用支持不同环境下的服务端渲染. 除非你找到了一个简单而又健壮的方式来引入这些库供不同的组件和模块使用, 不然, 这些第三方库的管理会给你带来一些麻烦,这里来介绍一下 Vue.js 中使用第三方库的方式详情见该 "),s("a",{attrs:{href:"https://github.com/dwqs/blog/issues/51",target:"_blank",rel:"noopener noreferrer"}},[t._v("blog"),s("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),s("p",[t._v("详细的可见文章："),s("a",{attrs:{href:"https://segmentfault.com/a/1190000009090836",target:"_blank",rel:"noopener noreferrer"}},[t._v("手摸手，带你封装一个 vue component"),s("OutboundLink")],1)])])}),[function(){var t=this._self._c;return t("h1",{attrs:{id:"引入外部模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引入外部模块"}},[this._v("#")]),this._v(" 引入外部模块")])},function(){var t=this._self._c;return t("h2",{attrs:{id:"引入依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖"}},[this._v("#")]),this._v(" 引入依赖")])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" vue-count-to --save\n")])])])},function(){var t=this._self._c;return t("blockquote",[t("p",[this._v("加上 "),t("code",[this._v("--save")]),this._v(" 参数会自动添加依赖到 package.json 中去。")])])},function(){var t=this._self._c;return t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[this._v("#")]),this._v(" 使用")])},function(){var t=this._self._c;return t("h3",{attrs:{id:"全局注册"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局注册"}},[this._v("#")]),this._v(" 全局注册")])},function(){var t=this._self._c;return t("p",[t("strong",[this._v("main.js")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" countTo "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-count-to'")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'countTo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" countTo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("countTo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":startVal")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("startVal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":endVal")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("endVal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":duration")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("3000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("countTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this._self._c;return t("h3",{attrs:{id:"局部注册"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#局部注册"}},[this._v("#")]),this._v(" 局部注册")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("countTo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":startVal")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("startVal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":endVal")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("endVal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":duration")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("3000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("countTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" countTo "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-count-to'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("components")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" countTo "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("startVal")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("endVal")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this._self._c;return t("p",[t("img",{attrs:{src:"https://panjiachen.gitee.io/gitee-cdn/vue-element-admin-site/8b95fac0-6691-4ad6-ba6c-e5d84527da06.gif",alt:""}})])},function(){var t=this._self._c;return t("h2",{attrs:{id:"在-vue-中优雅的使用第三方库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-vue-中优雅的使用第三方库"}},[this._v("#")]),this._v(" 在 vue 中优雅的使用第三方库")])},function(){var t=this._self._c;return t("p",[t("strong",[this._v("main.js")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" moment "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'moment'")]),t._v("\nObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$moment'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" moment "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this._self._c;return t("p",[t("strong",[this._v("MyNewComponent.vue")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("created")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The time is '")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$moment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HH:mm'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this._self._c;return t("h2",{attrs:{id:"自己封装一个非-vue-组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自己封装一个非-vue-组件"}},[this._v("#")]),this._v(" 自己封装一个非 vue 组件")])},function(){var t=this._self._c;return t("p",[this._v("很多时候我们会发现，有些组件并没有 vue 版本，其实在 vue 中引入第三方组件是很简单的。只要在合适的生命周期里面初始化它就好了。一般在 "),t("code",[this._v("mounted")]),this._v("中，之后和正常使用它就没什么区别了。")])}],!1,null,null,null);s.default=e.exports}}]);