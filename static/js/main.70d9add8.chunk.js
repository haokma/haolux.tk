(this.webpackJsonpshoes=this.webpackJsonpshoes||[]).push([[1],{11:function(e,t,n){"use strict";var r=n(3),c=n.n(r),a=n(6),s=n(44),i=n.n(s),o=n(111),l=n.n(o),u=i.a.create({baseURL:"",paramsSerializer:function(e){return l.a.stringify(e)}});u.interceptors.request.use(function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=JSON.parse(localStorage.getItem("token")))&&(t.headers.Authorization="Bearer "+n),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),u.interceptors.response.use((function(e){return e}),(function(e){throw e})),t.a=u},12:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"l",(function(){return s})),n.d(t,"j",(function(){return i})),n.d(t,"k",(function(){return o})),n.d(t,"i",(function(){return l})),n.d(t,"g",(function(){return u})),n.d(t,"h",(function(){return j})),n.d(t,"f",(function(){return d})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return h}));var r="ADD_TO_CART_SUCCESS",c="ADD_TO_CART_FAIL",a="ADD_TO_CART_REQUEST",s="UPDATE_CART_SUCCESS",i="UPDATE_CART_FAIL",o="UPDATE_CART_REQUEST",l="GET_CART_SUCCESS",u="GET_CART_FAIL",j="GET_CART_REQUEST",d="DELETE_CART_SUCCESS",b="DELETE_CART_FAIL",h="DELETE_CART_REQUEST"},158:function(e,t,n){},160:function(e,t,n){},161:function(e,t,n){},162:function(e,t,n){},163:function(e,t,n){},164:function(e,t,n){},17:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"i",(function(){return s})),n.d(t,"g",(function(){return i})),n.d(t,"h",(function(){return o})),n.d(t,"f",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return j}));var r="LOGIN_SUCCESS",c="LOGIN_FAIL",a="LOGIN_REQUEST",s="REGISTER_SUCCESS",i="REGISTER_FAIL",o="REGISTER_REQUEST",l="LOGOUT_SUCCESS",u="LOGOUT_FAIL",j="LOGOUT_REQUEST"},263:function(e,t,n){},264:function(e,t,n){},265:function(e,t,n){},266:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),s=n(23),i=n.n(s),o=n(7),l=n(3),u=n.n(l),j=n(6),d=n(9),b=n(13),h=n(2),m=n(55),p=n(77);n(160);function f(e){var t=e.item;return Object(r.jsx)("li",{className:"dropdown-item",children:Object(r.jsx)(h.b,{to:"/danh-muc/".concat(t.slug),className:"dropdown-item__link",children:t.name})})}f.defaultProps={item:{}};var O=f;function x(e){var t=e.category;return Object(r.jsxs)("li",{className:"nav-item",children:[Object(r.jsxs)(h.b,{className:"nav-item__link",to:"/danh-muc/".concat(t.slug),children:[Object(r.jsx)("span",{children:t.name}),t.children.length>0&&Object(r.jsx)("i",{className:"bx bx-chevron-down"})]}),t.children.length>0?Object(r.jsx)("ul",{className:"dropdown",children:t.children.map((function(e,t){return Object(r.jsx)(O,{item:e},t)}))}):null]})}x.defaultProps={category:{}};var g=x,v=(n(161),n(47)),_=n(15),N=(n(61),function(e){var t=e.setToggle,n=e.user,c=e.cartLength,a=Object(b.b)();return Object(r.jsx)("div",{className:"header-top",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"top",children:[Object(r.jsxs)("div",{className:"top-left",children:[Object(r.jsx)("div",{className:"top-left__button",onClick:function(){return t(!0)},children:Object(r.jsx)("i",{className:"bx bx-menu"})}),Object(r.jsxs)("div",{className:"top-left__phone",children:[Object(r.jsx)("i",{className:"bx bx-phone"}),Object(r.jsx)("span",{children:"+189 284 5679"})]})]}),Object(r.jsxs)("ul",{className:"top-right",children:[!n.name&&Object(r.jsxs)("li",{className:"top-item",children:[Object(r.jsx)("i",{className:"bx bx-user"}),Object(r.jsx)(h.b,{to:"/dang-nhap",children:"\u0110\u0103ng nh\u1eadp"}),Object(r.jsx)("span",{children:" / "}),Object(r.jsx)(h.b,{to:"/dang-ky",children:"\u0110\u0103ng k\xfd"})]}),n.name&&Object(r.jsxs)("li",{className:"top-item",children:[Object(r.jsx)("i",{className:"bx bx-user"}),Object(r.jsx)(h.b,{to:"/login",children:n.name}),Object(r.jsx)("span",{children:" / "}),Object(r.jsx)("span",{onClick:function(){return function(){var e=Object(v.b)();a(e).then((function(){localStorage.removeItem("token"),localStorage.removeItem("refresh-token"),localStorage.removeItem("userInfo"),localStorage.removeItem("result"),_.b.success("\u0110\u0103ng xu\u1ea5t th\xe0nh c\xf4ng",{position:_.b.POSITION.TOP_RIGHT})})).catch((function(e){_.b.error(e,{position:_.b.POSITION.TOP_RIGHT})}))}()},children:"\u0110\u0103ng xu\u1ea5t"})]}),Object(r.jsxs)(h.b,{to:"/gio-hang",className:"top-item top-item--cart",children:[Object(r.jsx)("i",{className:"bx bx-cart"}),Object(r.jsxs)("p",{children:[" ",c," s\u1ea3n ph\u1ea9m "]})]})]})]})})})}),y=function(e){var t=e.setToggle,n=Object(b.b)(),a=Object(b.c)((function(e){return e.user})),s=Object(b.c)((function(e){return e.category})),i=Object(b.c)((function(e){return e.cart.result})),o=Object(c.useState)([]),l=Object(d.a)(o,2),u=l[0],j=l[1],f=Object(c.useState)(""),O=Object(d.a)(f,2),x=O[0],v=O[1],_=Object(c.useState)(!1),y=Object(d.a)(_,2),S=y[0],T=y[1],I=Object(c.useState)(!1),k=Object(d.a)(I,2),C=k[0],E=k[1],P=Object(c.useRef)();return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)(N,{user:a,setToggle:t,cartLength:i}),Object(r.jsx)("div",{className:"header-mid",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("nav",{className:"nav",children:[Object(r.jsx)(h.b,{to:"/",className:"nav__logo",children:Object(r.jsx)("img",{src:"/images/logo.png",alt:""})}),Object(r.jsxs)("div",{className:"nav-right",children:[Object(r.jsx)("ul",{className:"nav-menu",children:s.map((function(e,t){return Object(r.jsx)(g,{category:e},t)}))}),Object(r.jsxs)("div",{className:"nav-search",children:[Object(r.jsx)("i",{className:"bx bx-search search",onClick:function(){return E(!C)}}),Object(r.jsxs)("div",{className:C?"modal-search active ":"modal-search ",children:[Object(r.jsxs)("div",{className:"search-heading",children:[Object(r.jsx)("h3",{className:"search-heading__title",children:"T\xecm ki\u1ebfm"}),Object(r.jsx)("div",{className:"search-heading__close",onClick:function(){return E(!C)},children:Object(r.jsx)("span",{children:"X"})})]}),Object(r.jsxs)("div",{className:"search-content",children:[Object(r.jsx)("input",{type:"text",placeholder:"T\xecm ki\u1ebfm s\u1ea3n ph\u1ea9m",onChange:function(e){return function(e){var t=e.target.value;P.current&&clearInterval(P.current),v(t),P.current=setTimeout((function(){j([]),T(!0);var e=Object(m.c)(t);n(e).then((function(e){T(!1);var t=e.data.products;t&&j(t)})).catch((function(e){T(!1)}))}),200)}(e)}}),Object(r.jsx)("i",{className:"bx bx-search search-icon"})]}),Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"search-product",children:Object(r.jsxs)("div",{className:"row",children:[x&&!u.length&&S?Object(r.jsx)("h1",{className:"error",children:"Loading ..."}):null,!x||u.length||S?null:Object(r.jsx)("h1",{className:"error",children:"Kh\xf4ng c\xf3 s\u1ea3n ph\u1ea9m n\xe0o"}),u.length?u.map((function(e,t){return Object(r.jsx)(h.b,{to:"/san-pham/".concat(e.slug),className:" col-xl-3 col-lg-4 col-sm-6 product-search",onClick:function(){return E(!C)},children:Object(r.jsx)(p.a,{product:e})},t)})):null]})})})]})]})]})]})})})]})},S=(n(162),function(){return Object(r.jsx)("div",{className:"footer",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"footer__content",children:[Object(r.jsxs)("ul",{className:"footer-list",children:[Object(r.jsx)("li",{className:"footer-list__item footer-list__item--title",children:"H\u1ec6 TH\u1ed0NG C\u1eecA H\xc0NG"}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"\u0110\u1ecba ch\u1ec9: S\u1ed1 16 Ng\xf5 58 Tr\u1ea7n B\xecnh, Mai D\u1ecbch, C\u1ea7u Gi\u1ea5y, HN"})}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i: 0911139666"})}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"Email: hao2016vt@gmail.com"})})]}),Object(r.jsxs)("ul",{className:"footer-list",children:[Object(r.jsx)("li",{className:"footer-list__item footer-list__item--title",children:"H\u1ed6 TR\u1ee2"}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"H\u01b0\u1edbng d\u1eabn ch\u1ecdn c\u1ee1 gi\xe0y"})}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"Ch\xednh s\xe1ch \u0111\u1ed5i tr\u1ea3/ ho\xe0n ti\u1ec1n"})}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"Ch\xednh s\xe1ch b\u1ea3o m\u1eadt th\xf4ng tin"})}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"Ch\xednh s\xe1ch b\u1ea3o h\xe0nh"})}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"H\u01b0\u1edbng d\u1eabn mua h\xe0ng"})})]}),Object(r.jsxs)("ul",{className:"footer-list",children:[Object(r.jsx)("li",{className:"footer-list__item footer-list__item--title",children:"LI\xcaN H\u1ec6 V\u1edaI SHOP"}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"H\u01b0\u1edbng d\u1eabn \u0111\u1eb7t h\xe0ng"})}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"Th\xf4ng tin thanh to\xe1n"})}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"Ch\xednh s\xe1ch giao h\xe0ng v\xe0 nh\u1eadn h\xe0ng"})}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"Li\xean h\u1ec7"})}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"S\u01a1 \u0111\u1ed3 website"})})]}),Object(r.jsxs)("ul",{className:"footer-list",children:[Object(r.jsx)("li",{className:"footer-list__item footer-list__item--title",children:"CONTACT US"}),Object(r.jsxs)("li",{className:"footer-list__item footer-list__item--flex",children:[Object(r.jsx)("span",{children:Object(r.jsx)("i",{className:"bx bxs-edit-location"})}),"159/3 Ch\u1ee3 Ph\xf9ng Khoang H\xe0 \u0110\xf4ng H\xe0 N\u1ed9i"]}),Object(r.jsxs)("li",{className:"footer-list__item footer-list__item--flex",children:[Object(r.jsx)("span",{children:Object(r.jsx)("i",{className:"bx bx-envelope-open"})}),"nguyenchihao2001vt@gmail.com"]}),Object(r.jsxs)("li",{className:"footer-list__item footer-list__item--flex",children:[Object(r.jsx)("span",{children:Object(r.jsx)("i",{className:"bx bxs-phone"})}),"0964572402"]}),Object(r.jsxs)("li",{className:"footer-list__item footer-list__item--flex",children:[Object(r.jsx)("span",{children:Object(r.jsx)("i",{className:"bx bxs-edit-location"})}),"H\xe0 N\u1ed9i, VN"]})]})]})})})}),T=(n(163),function(e){var t=e.item,n=e.setToggle;return Object(r.jsx)("li",{className:"dropdown-item",children:Object(r.jsx)(h.b,{onClick:function(){return n()},to:"/danh-muc/".concat(t.slug),className:"dropdown-item__link",children:t.name})})});function I(e){var t=e.category,n=e.setToggle,a=Object(c.useState)(!1),s=Object(d.a)(a,2),i=s[0],o=s[1];return Object(r.jsxs)("li",{className:"sub-menu",children:[Object(r.jsxs)("div",{className:"mobile-item",children:[Object(r.jsx)(h.b,{to:"/danh-muc/".concat(t.slug),className:"mobile-item__link",onClick:function(){return n()},children:t.name}),Object(r.jsx)("span",{className:i?"mobile-item__button active":"mobile-item__button",onClick:function(){return o(!i)},children:Object(r.jsx)("i",{className:"bx bx-caret-down"})})]}),t.children.length>0?Object(r.jsx)("ul",{className:i?"dropdown active":"dropdown",children:t.children.map((function(e,t){return Object(r.jsx)(T,{item:e,setToggle:n},t)}))}):null]})}I.defaultProps={category:{}};var k=I;var C=function(e){var t=e.toggle,n=e.setToggle,c=Object(b.c)((function(e){return e.user})),a=Object(b.c)((function(e){return e.category})),s=Object(b.b)();return Object(r.jsxs)("div",{className:"menu-mobile",children:[Object(r.jsxs)("div",{className:t?"menu-mobile__content active":"menu-mobile__content",children:[!c.name&&Object(r.jsxs)("div",{className:"mobile-heading",children:[Object(r.jsx)(h.b,{to:"/dang-nhap",onClick:function(){return n()},children:"\u0110\u0103ng nh\u1eadp"}),Object(r.jsx)(h.b,{to:"/dang-ky",onClick:function(){return n()},children:"\u0110\u0103ng k\xfd"})]}),c.name&&Object(r.jsxs)("div",{className:"mobile-user",children:[Object(r.jsxs)("div",{className:"user-info",children:[Object(r.jsx)("img",{src:"./images/user1.png",alt:""}),Object(r.jsxs)("div",{className:"user-info__text",children:[Object(r.jsx)("h3",{children:c.name}),Object(r.jsx)("span",{children:c.email})]})]}),Object(r.jsxs)("ul",{className:"user-list",children:[Object(r.jsxs)(h.b,{to:"/gio-hang",className:"user-list__item",onClick:function(){return n()},children:[Object(r.jsx)("span",{children:"Gi\u1ecf h\xe0ng"}),Object(r.jsxs)("span",{children:["(",c.cart.length,")"]})]}),Object(r.jsx)(h.b,{to:"/trang-ca-nhan",className:"user-list__item",onClick:function(){return n()},children:Object(r.jsx)("span",{children:"Trang c\xe1 nh\xe2n"})}),Object(r.jsx)(h.b,{to:"/sua-thong-tin",className:"user-list__item",onClick:function(){return n()},children:Object(r.jsx)("span",{children:"S\u1eeda th\xf4ng tin"})}),Object(r.jsx)(h.b,{to:"/",className:"user-list__item",onClick:function(){return n()},children:Object(r.jsx)("span",{onClick:function(){return function(){var e=Object(v.b)();n(),s(e).then((function(){localStorage.removeItem("token"),localStorage.removeItem("refresh-token"),localStorage.removeItem("userInfo"),localStorage.removeItem("result"),_.b.success("\u0110\u0103ng xu\u1ea5t th\xe0nh c\xf4ng",{position:_.b.POSITION.TOP_RIGHT})})).catch((function(e){_.b.error("\u0110\u0103ng xu\u1ea5t th\u1ea5t b\u1ea1i",{position:_.b.POSITION.TOP_RIGHT})}))}()},children:"\u0110\u0103ng xu\u1ea5t"})})]})]}),Object(r.jsx)("ul",{className:"mobile-list",children:a.map((function(e,t){return Object(r.jsx)(k,{category:e,setToggle:n},t)}))})]}),Object(r.jsx)("div",{className:t?"menu-mobile__overlay active":"menu-mobile__overlay",onClick:function(){return n()}})]})},E=n(39),P=n(8),w=n(11),L={getAllCategory:function(){var e="".concat(P.a,"/category");return w.a.get(e)}},A="GET_ALL_CATEGORY_SUCCESS",R=n(78),G=function(e){var t=e.children,n=Object(b.b)(),a=Object(c.useState)(!1),s=Object(d.a)(a,2),i=s[0],o=s[1];function l(){return(l=Object(j.a)(u.a.mark((function e(t){var n,r,c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.refreshToken(t);case 2:n=e.sent,r=n.data,c=r.token,a=r.refreshToken,localStorage.setItem("token",JSON.stringify(c)),localStorage.setItem("refresh-token",JSON.stringify(a));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("refresh-token"));e&&setTimeout((function(){!function(e){l.apply(this,arguments)}(e)}),354e4)}),[]),Object(c.useEffect)((function(){var e=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_ALL_CATEGORY_REQUEST"}),e.prev=1,e.next=4,L.getAllCategory();case 4:return n=e.sent,r=n.data.categories,t({type:A,payload:r}),e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(1),t({type:"GET_ALL_CATEGORY_FAIL"}),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();n(e)}),[n]),Object(c.useEffect)((function(){var e=Object(m.a)();n(e)}),[n]),Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("token")),t=JSON.parse(localStorage.getItem("result"));if(e&&0!==t&&null!==t){var r=Object(R.b)();n(r)}}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(y,{setToggle:o}),Object(r.jsx)(C,{toggle:i,setToggle:o}),Object(r.jsx)(_.a,{}),t,Object(r.jsx)(S,{})]})},U=(n(164),n(34)),D=n(37),H=n(56),J=n(30);var F=function(e){var t=e.product;return Object(r.jsxs)("li",{className:"order-list__item order-list__item--price",children:[Object(r.jsxs)("span",{children:[t.title,"  \xd7",Object(r.jsx)("span",{className:"quantity",children:t.qty}),Object(r.jsxs)("span",{className:"size",children:["Size : ",t.size]})]}),Object(r.jsx)("span",{children:Object(J.a)(t.price*t.qty)})]})},z=n(44),Q=n.n(z),V=n(5);function q(e){var t=e.placeholder,n=e.field,c=e.form,a=e.options,s=e.onChangeFiled,i=n.name,o=n.value,l=c.errors,u=c.touched,j=l[i]&&u[i];return Object(r.jsxs)("div",{className:"form__field",children:[Object(r.jsx)("div",{className:"form__group",children:Object(r.jsxs)("select",Object(V.a)(Object(V.a)({name:i,value:o},n),{},{onChange:function(e){return function(e){var t=e.target,n=t.name,r=t.value;c.setFieldValue(n,r),"city"===n&&(s(e),c.setFieldValue("district",""))}(e)},children:[Object(r.jsx)("option",{value:"",children:t}),a.map((function(e,t){return Object(r.jsx)("option",{value:e.Title,children:e.Title},t)}))]}))}),j?Object(r.jsx)("div",{className:"form__error",children:l[i]}):null]})}q.defaultProps={type:"text",title:"",label:"",placeholder:"",disable:!1,options:[]};var B=q,Y={postOrder:function(e){var t="".concat(P.a,"/order/create");return w.a.post(t,e)}};var M=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.cart})),n=JSON.parse(localStorage.getItem("token")),a=Object(o.g)(),s=Object(c.useState)([]),i=Object(d.a)(s,2),l=i[0],h=i[1],m=Object(c.useState)(1),p=Object(d.a)(m,2),f=p[0],O=p[1],x=Object(c.useState)([]),g=Object(d.a)(x,2),v=g[0],N=g[1],y=D.b().shape({name:D.d().required("Vui l\xf2ng nh\u1eadp h\u1ecd v\xe0 t\xean "),phone:D.a().required("Vui l\xf2ng nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i "),city:D.d().required("Vui l\xf2ng nh\u1eadp th\xe0nh ph\u1ed1"),district:D.d().required("Vui l\xf2ng nh\u1eadp huy\u1ec7n"),address:D.d().required("Vui l\xf2ng nh\u1eadp \u0111\u1ecba ch\u1ec9")}),S=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="".concat(P.b),Q.a.get(t).then((function(e){h(e.data.LtsItem)})).catch((function(e){console.log("error",e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(e){var t=e.target,n=t.name,r=t.value;if("city"===n){var c=l.find((function(e){return e.Title===r}));c&&O(c.ID)}};return Object(c.useEffect)((function(){S()}),[]),Object(c.useEffect)((function(){!function(){var e="".concat(P.b,"/").concat(f,"/district");Q.a.get(e).then((function(e){N(e.data)})).catch((function(e){console.log("error",e)}))}()}),[f]),n?t.cartItems.length?Object(r.jsx)("div",{className:"checkout",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(U.d,{initialValues:{name:"",phone:"",city:"Ti\u1ec1n Giang",district:"",address:""},validationSchema:y,onSubmit:function(n){var r=n.name,c=n.phone,s=n.city,i=n.district,o=n.address,l=t.cartItems.map((function(e){return{productId:e.prod_id,payablePrice:e.price,purchaseQty:e.qty}}));console.log(t);var d=function(e){return function(){var t=Object(j.a)(u.a.mark((function t(n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y.postOrder(e);case 3:return r=t.sent,console.log(r),t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}({cardId:t.id,cart:l,name:r,phone:c,city:s,town:i,address:o,fee:3e4,totalAmount:t.totalPrice});e(d).then((function(){a.push("/"),_.b.success("B\u1ea1n \u0111\xe3 \u0111\u1eb7t h\xe0ng th\xe0nh c\xf4ng",{position:_.b.POSITION.TOP_RIGHT})}))},children:function(e){return Object(r.jsx)("div",{className:"checkout__content",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-xl-6",children:Object(r.jsxs)(U.c,{className:"checkout-form",children:[Object(r.jsx)("div",{className:"checkout-form__title",children:"Thanh to\xe1n v\xe0 giao h\xe0ng"}),Object(r.jsx)(U.a,{type:"text",component:H.a,name:"name",placeholder:"H\u1ecd v\xe0 t\xean"}),Object(r.jsx)(U.a,{type:"number",component:H.a,name:"phone",placeholder:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),Object(r.jsx)(U.b,{component:B,name:"city",placeholder:"Th\xe0nh ph\u1ed1",options:l,onChangeFiled:T}),Object(r.jsx)(U.b,{component:B,name:"district",placeholder:" Qu\u1eadn/Huy\u1ec7n",options:v,onChangeFiled:T}),Object(r.jsx)(U.a,{type:"text",component:H.a,name:"address",placeholder:"\u0110\u1ecba ch\u1ec9"})]})}),Object(r.jsx)("div",{className:"col-xl-6",children:Object(r.jsxs)("div",{className:"checkout-order",children:[Object(r.jsx)("h2",{className:"checkout-order__title",children:"\u0110\u01a1n h\xe0ng c\u1ee7a b\u1ea1n"}),Object(r.jsxs)("ul",{className:"order-list",children:[Object(r.jsxs)("li",{className:"order-list__item",children:[Object(r.jsx)("span",{children:"S\u1ea3n ph\u1ea9m"}),Object(r.jsx)("span",{children:"T\u1ea1m t\xednh"})]}),t.cartItems.map((function(e,t){return Object(r.jsx)(F,{product:e},t)})),Object(r.jsxs)("li",{className:"order-list__item",children:[Object(r.jsx)("span",{children:"T\u1ea1m t\xednh"}),Object(r.jsx)("span",{children:Object(J.a)(t.totalPrice)})]}),Object(r.jsxs)("li",{className:"order-list__item",children:[Object(r.jsx)("span",{children:"Giao h\xe0ng"}),Object(r.jsx)("span",{children:Object(J.a)(3e4)})]}),Object(r.jsxs)("li",{className:"order-list__item",children:[Object(r.jsx)("span",{children:"T\u1ed5ng"}),Object(r.jsx)("span",{children:Object(J.a)(t.totalPrice+3e4)})]})]}),Object(r.jsxs)("ul",{className:"checkout-payment",children:[Object(r.jsxs)("li",{className:"checkout-payment__item",children:[Object(r.jsx)("input",{type:"radio",name:"payment_method",value:"cod",checked:!0,onChange:function(){}}),Object(r.jsx)("label",{htmlFor:"",children:"Thanh to\xe1n khi nh\u1eadn h\xe0ng"})]}),Object(r.jsxs)("li",{className:"checkout-payment__item",children:[Object(r.jsx)("input",{type:"radio",name:"payment_method",value:"bacs",onChange:function(){}}),Object(r.jsx)("label",{htmlFor:"",children:"Chuy\u1ec3n kho\u1ea3n ng\xe2n h\xe0ng"})]})]}),Object(r.jsx)("div",{className:"checkout-button",children:Object(r.jsx)("button",{type:"submit",onClick:function(){return e.handleSubmit()},children:"\u0110\u1eb7t h\xe0ng"})})]})})]})})}})})}):null:(a.push("/dang-nhap"),null)},X=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,336))})),K=a.a.lazy((function(){return n.e(8).then(n.bind(null,333))})),W=a.a.lazy((function(){return n.e(9).then(n.bind(null,334))})),Z=a.a.lazy((function(){return Promise.all([n.e(4),n.e(7)]).then(n.bind(null,337))})),$=a.a.lazy((function(){return n.e(10).then(n.bind(null,339))})),ee=a.a.lazy((function(){return n.e(11).then(n.bind(null,335))})),te=[{component:X,extra:!0,path:"/"},{component:Z,extra:!0,path:"/danh-muc/:slug"},{component:K,extra:!0,path:"/dang-nhap",isPrivate:!0},{component:W,extra:!0,path:"/dang-ky",isPrivate:!0},{component:$,extra:!0,path:"/gio-hang",isPrivate:!1},{component:a.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,338))})),extra:!0,path:"/san-pham/:slug",isPrivate:!1},{component:M,extra:!0,path:"/thanh-toan",isPrivate:!1},{component:ee,extra:!0,path:"",isPrivate:!1}],ne=n(118);function re(e){var t=e.component,n=Object(ne.a)(e,["component"]),c=JSON.parse(localStorage.getItem("userInfo"));return Object(r.jsx)(o.b,Object(V.a)(Object(V.a)({},n),{},{render:function(e){return c?Object(r.jsx)(o.a,{to:"/"}):Object(r.jsx)(t,Object(V.a)({},e))}}))}n(263);var ce=function(){return Object(r.jsx)("div",{className:"loading",children:Object(r.jsx)("div",{className:"lds-heart",children:Object(r.jsx)("div",{})})})};n(264);var ae=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1];return window.addEventListener("scroll",(function(){window.scrollY>800?a(!0):a(!1)})),Object(r.jsx)("div",{className:n?"scroll active":"scroll",onClick:function(){return window.scroll({top:0,left:0,behavior:"smooth"})},children:Object(r.jsx)("i",{className:"bx bxs-chevron-left"})})};var se=function(){return Object(r.jsxs)("div",{className:"App",style:{overflow:"hidden"},children:[Object(r.jsx)(ae,{}),Object(r.jsx)(c.Suspense,{fallback:Object(r.jsx)(ce,{}),children:Object(r.jsx)(G,{children:Object(r.jsx)(o.d,{children:te.map((function(e,t){return e.isPrivate?Object(r.jsx)(re,{component:e.component,exact:!0,path:e.path},t):Object(r.jsx)(o.b,{component:e.component,path:e.path,exact:!0},t)}))})})})]})},ie=(n(265),n(33)),oe=n(17),le=JSON.parse(localStorage.getItem("userInfo"))||{name:"",email:"",cart:"",role:null},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe.c:var n=t.payload,r=n.role,c=n.name,a=n.email,s=n.cart;return Object(V.a)(Object(V.a)({},e),{},{role:r,email:a,cart:s,name:c});case oe.i:var i=t.payload,o=i.role,l=i.name,u=i.email,j=i.cart;return Object(V.a)(Object(V.a)({},e),{},{role:o,email:u,cart:j,name:l});case oe.f:var d="",b="",h="",m="";return Object(V.a)(Object(V.a)({},e),{},{role:d,email:h,cart:m,name:b});default:return e}},je=n(20),de=[],be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:var n=Object(je.a)(t.payload);return n;default:return e}},he=n(27),me={productList:[],saleProducts:[],newProducts:[]},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case he.c:var c=r.saleProducts,a=r.newProducts;return Object(V.a)(Object(V.a)({},e),{},{saleProducts:c,newProducts:a});default:return e}},fe=n(12),Oe={result:localStorage.getItem("result")||null,cartItems:[],totalPrice:null,id:null},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case fe.c:var c={cartItems:r.cart,result:r.result,totalPrice:r.totalPrice,id:r.id};return localStorage.setItem("result",JSON.stringify(r.result)),c;case fe.i:var a={cartItems:r.cart,result:r.result,totalPrice:r.totalPrice,id:r.id};return localStorage.setItem("result",JSON.stringify(r.result)),a;case fe.g:return localStorage.removeItem("result"),Object(V.a)(Object(V.a)({},e),{},{cartItems:[],result:null,totalPrice:null});case fe.f:console.log(r);var s={cartItems:r.cartItems,result:r.result,totalPrice:r.totalPrice};return localStorage.setItem("result",JSON.stringify(r.result)),s;case fe.l:return Object(V.a)(Object(V.a)({},e),{},{cartItems:r.cartItems,totalPrice:r.totalPrice});default:return e}},ge=Object(ie.c)({user:ue,category:be,product:pe,cart:xe}),ve=n(117),_e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ie.d,Ne=Object(ie.e)(ge,_e(Object(ie.a)(ve.a)));i.a.render(Object(r.jsx)(b.a,{store:Ne,children:Object(r.jsx)(h.a,{children:Object(r.jsx)(se,{})})}),document.getElementById("root"))},27:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"f",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return o}));var r="GET_ALL_PRODUCT_SUCCESS",c="GET_ALL_PRODUCT_FAIL",a="GET_ALL_PRODUCT_REQUEST",s="GET_PRODUCT_SLUG_SUCCESS",i="GET_PRODUCT_SLUG_FAIL",o="GET_PRODUCT_SLUG_REQUEST"},30:function(e,t,n){"use strict";t.a=function(e){return e=e.toLocaleString("vi",{style:"currency",currency:"VND"})}},39:function(e,t,n){"use strict";var r=n(8),c=n(11),a={signup:function(e){var t="".concat(r.a,"/user/signup");return c.a.post(t,e)},login:function(e){var t="".concat(r.a,"/user/login");return c.a.post(t,e)},refreshToken:function(e){var t="".concat(r.a,"/user/refresh-token");return c.a.post(t,{refToken:e})},logout:function(){var e="".concat(r.a,"/user/signout");return c.a.get(e)}};t.a=a},47:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var r=n(3),c=n.n(r),a=n(6),s=n(39),i=n(17),o=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r,a,o,l,u,j,d,b,h,m;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:i.h}),t.prev=1,t.next=4,s.a.signup(e);case 4:return r=t.sent,a=r.data,o=a.token,l=a.refreshToken,u=r.data.result,j=u.email,d=u.name,b=u.role,h=u.cart,m={name:d,email:j,role:b,cart:h},n({type:i.i,payload:r.data.result}),o&&(localStorage.setItem("token",JSON.stringify(o)),localStorage.setItem("refresh-token",JSON.stringify(l)),localStorage.setItem("userInfo",JSON.stringify(m))),t.abrupt("return",r);case 13:return t.prev=13,t.t0=t.catch(1),n({type:i.g}),t.abrupt("return",Promise.reject(t.t0.response.data.message));case 17:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r,a,o,l,u,j,d,b,h,m;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:i.b}),t.prev=1,t.next=4,s.a.login(e);case 4:return r=t.sent,a=r.data,o=a.token,l=a.refreshToken,u=r.data.result,j=u.email,d=u.name,b=u.role,h=u.cart,m={name:d,email:j,role:b,cart:h},n({type:i.c,payload:r.data.result}),o&&(localStorage.setItem("token",JSON.stringify(o)),localStorage.setItem("refresh-token",JSON.stringify(l)),localStorage.setItem("userInfo",JSON.stringify(m))),t.abrupt("return",r);case 13:return t.prev=13,t.t0=t.catch(1),n({type:i.a}),t.abrupt("return",Promise.reject(t.t0.response.data.message));case 17:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}()},u=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:i.e}),e.prev=1,e.next=4,s.a.logout();case 4:return n=e.sent,console.log(n),t({type:i.f}),e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(1),t({type:i.d}),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()}},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u}));var r=n(3),c=n.n(r),a=n(6),s=n(57),i=n(27),o=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:i.b}),e.prev=1,e.next=4,s.a.getAllProduct();case 4:return n=e.sent,t({type:i.c,payload:n.data}),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),t({type:i.a}),e.abrupt("return",Promise.reject(e.t0.response.data.message));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:i.e}),t.prev=1,t.next=4,s.a.getProductSlug(e);case 4:return r=t.sent,n({type:i.f}),t.abrupt("return",r);case 9:return t.prev=9,t.t0=t.catch(1),n({type:i.d}),t.abrupt("return",Promise.reject(t.t0.response.data.message));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},u=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.searchProduct(e);case 3:return r=t.sent,console.log(r),t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",Promise.reject(t.t0.response.data.message));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}},56:function(e,t,n){"use strict";var r=n(0),c=n(5);n(1);function a(e){var t=e.type,n=e.placeholder,a=e.field,s=e.form,i=e.src,o=a.name,l=a.value,u=s.errors,j=s.touched,d=u[o]&&j[o];return Object(r.jsxs)("div",{className:"form__field",children:[Object(r.jsxs)("div",{className:"form__group",children:[Object(r.jsx)("img",{src:i,alt:""}),Object(r.jsx)("input",Object(c.a)({type:t,name:o,value:l,placeholder:n},a))]}),d?Object(r.jsx)("div",{className:"form__error",children:u[o]}):null]})}a.defaultProps={type:"text",title:"",label:"",placeholder:"",disable:!1},t.a=a},57:function(e,t,n){"use strict";var r=n(8),c=n(11),a={getAllProduct:function(){var e="".concat(r.a,"/products/initial-data");return c.a.get(e)},getProductSlug:function(e){var t="".concat(r.a,"/products/detail/").concat(e);return c.a.get(t)},getProduct:function(e){return c.a.get(e)},searchProduct:function(e){var t="".concat(r.a,"/products?search=").concat(e);return c.a.get(t)}};t.a=a},71:function(e,t,n){"use strict";t.a=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}},77:function(e,t,n){"use strict";var r=n(0),c=(n(1),n(2)),a=(n(158),n(30)),s=n(73),i=n(71);function o(e){var t=e.product;return Object(r.jsxs)("div",{className:"product-item",children:[Object(r.jsxs)("div",{className:"product-item__img",children:[Object(r.jsx)(s.LazyLoadImage,{src:t.productImage[0].img,alt:""}),Object(r.jsx)(s.LazyLoadImage,{src:t.productImage[1].img,alt:""}),t.sale?Object(r.jsxs)("div",{className:"sale",children:["GI\u1ea2M ",t.sale,"%"]}):null,Object(r.jsxs)("ul",{className:"product-button",children:[Object(r.jsx)("li",{className:"product-button__item",children:Object(r.jsx)("i",{className:"bx bx-cart"})}),Object(r.jsx)(c.b,{to:"/san-pham/".concat(t.slug),className:"product-button__item",onClick:function(){return Object(i.a)()},children:Object(r.jsx)("i",{className:"bx bx-search-alt-2"})}),Object(r.jsx)("li",{className:"product-button__item",children:Object(r.jsx)("i",{className:"bx bx-refresh"})}),Object(r.jsx)("li",{className:"product-button__item",children:Object(r.jsx)("i",{className:"bx bx-heart"})})]})]}),Object(r.jsx)(c.b,{to:"/san-pham/".concat(t.slug),className:"product-item__title",onClick:function(){return Object(i.a)()},children:t.title}),Object(r.jsxs)("div",{className:"product-item__rating",children:[Object(r.jsx)("i",{className:"star-gold fas fa-star"}),Object(r.jsx)("i",{className:"star-gold fas fa-star"}),Object(r.jsx)("i",{className:"star-gold fas fa-star"}),Object(r.jsx)("i",{className:" star-gold fas fa-star"}),Object(r.jsx)("i",{className:"fas fa-star"})]}),Object(r.jsx)("p",{className:"product-item__price",children:Object(a.a)(t.price)}),Object(r.jsxs)("ul",{className:"product-item__button",children:[Object(r.jsx)("li",{className:"button__item",children:Object(r.jsx)("i",{className:"bx bx-cart"})}),Object(r.jsx)("li",{className:"button__item",children:Object(r.jsx)("i",{className:"bx bx-refresh"})}),Object(r.jsx)("li",{className:"button__item",children:Object(r.jsx)("i",{className:"bx bx-heart"})})]})]})}o.defaultProps={product:{}},t.a=o},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return j})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(3),c=n.n(r),a=n(6),s=n(8),i=n(11),o={addToCart:function(e){var t="".concat(s.a,"/cart/create");return i.a.post(t,e)},updateCart:function(e,t,n){var r="".concat(s.a,"/cart/update/").concat(n,"?size=").concat(t,"&quantity=").concat(e);return i.a.post(r)},removeCartItem:function(e){console.log(e);var t="".concat(s.a,"/cart/remove/").concat(e);return console.log(t),i.a.delete(t)},getCart:function(){var e="".concat(s.a,"/cart");return i.a.get(e)}},l=n(12),u=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:l.b}),t.prev=1,console.log(e),t.next=5,o.addToCart(e);case 5:return r=t.sent,n({type:l.c,payload:r.data}),t.abrupt("return",r);case 10:return t.prev=10,t.t0=t.catch(1),n({type:l.a}),t.abrupt("return",Promise.reject(t.t0.response.data.message));case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},j=function(e,t,n){return function(){var r=Object(a.a)(c.a.mark((function r(a){var s;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a({type:l.k}),r.prev=1,r.next=4,o.updateCart(e,t,n);case 4:return s=r.sent,a({type:l.l,payload:s.data}),r.abrupt("return",s);case 9:return r.prev=9,r.t0=r.catch(1),a({type:l.j}),r.abrupt("return",Promise.reject(r.t0.response.data.message));case 13:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:l.e}),t.prev=1,t.next=4,o.removeCartItem(e);case 4:return r=t.sent,n({type:l.f,payload:r.data}),t.abrupt("return",r);case 9:t.prev=9,t.t0=t.catch(1),n({type:l.d});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},b=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:l.h}),e.prev=1,e.next=4,o.getCart();case 4:return n=e.sent,t({type:l.i,payload:n.data}),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),t({type:l.g}),e.abrupt("return",Promise.reject(e.t0.response.data.message));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}},8:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return s}));var r="https://haolux01api.herokuapp.com",c="https://thongtindoanhnghiep.co/api/city",a=12,s=16}},[[266,2,3]]]);
//# sourceMappingURL=main.70d9add8.chunk.js.map