(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{231:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return d}));var a=n(243),r=n(0),i=n.n(r),s=n(110),c=n(232),o=n.n(c),u=function(e){e.input;var t=e.meta,n=t.error,a=t.touched,r=e.children,s=n&&a;return i.a.createElement("div",{className:o.a.formControler+" "+(s?o.a.error:"")},i.a.createElement("div",null,r),s&&i.a.createElement("div",{className:o.a.errText},n))},l=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return i.a.createElement(u,e,i.a.createElement("textarea",Object.assign({},t,n)))},m=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return i.a.createElement(u,e,i.a.createElement("input",Object.assign({},t,n)))},d=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return i.a.createElement("div",null,i.a.createElement(s.a,Object.assign({placeholder:e,name:t,component:n,validate:a},r))," ",c)}},232:function(e,t,n){e.exports={formControler:"FormsControls_formControler__2SE9W",error:"FormsControls_error__tWJpB",errText:"FormsControls_errText__3cYxS"}},234:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(!(t&&t.length<e))return"Max length is ".concat(e," symbols")}}},236:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__1zR4W",dialogsItems:"Dialogs_dialogsItems__3TEXg",messages:"Dialogs_messages__3ER5l",item:"Dialogs_item__Hw3bA"}},241:function(e,t,n){"use strict";var a=n(33),r=n(34),i=n(36),s=n(35),c=n(0),o=n.n(c),u=n(6),l=n(19),m=function(e){return{isAuth:e.auth.isAuth}};t.a=function(e){var t=function(t){Object(i.a)(c,t);var n=Object(s.a)(c);function c(){return Object(a.a)(this,c),n.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return this.props.isAuth?o.a.createElement(e,this.props):o.a.createElement(u.a,{to:"/login"})}}]),c}(o.a.Component);return Object(l.b)(m)(t)}},306:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(75),s=n(236),c=n.n(s),o=n(13),u=n(59),l=n.n(u),m=function(e){var t=e.id,n=e.name,a="/dialog/".concat(t);return r.a.createElement("div",{className:c.a.item},r.a.createElement("img",{alt:"user",src:l.a}),r.a.createElement(o.b,{to:a},n))},d=function(e){var t=e.message;return r.a.createElement("div",{className:c.a.message},t)},g=n(111),f=n(231),b=n(234),v=Object(b.a)(50),p=Object(g.a)({form:"dialogs"})((function(e){var t=e.handleSubmit;return r.a.createElement("form",{onSubmit:t},Object(f.c)("Enter your message","messageText",f.b,[b.b,v]),r.a.createElement("div",null,r.a.createElement("button",null,"Send")))})),E=function(e){var t=e.dialogsPage,n=e.onSendMessageClick,a=t.dialogs.map((function(e){return r.a.createElement(m,{name:e.name,id:e.id})})),i=t.messages.map((function(e){return r.a.createElement(d,{message:e.message,id:e.id})}));return r.a.createElement("div",{className:c.a.dialogs},r.a.createElement("div",{className:c.a.dialogsItems},a),r.a.createElement("div",{className:c.a.messages},r.a.createElement("div",null,i),r.a.createElement(p,{onSubmit:function(e){n(e.messageText)}})))},_=n(19),h=n(241),j=n(17);t.default=Object(j.d)(h.a,Object(_.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{onSendMessageClick:function(t){var n=Object(i.b)(t);e(n)}}})))(E)}}]);
//# sourceMappingURL=5.f33666f0.chunk.js.map