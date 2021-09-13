(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{81:function(n,t,e){"use strict";e.r(t);var i,r,c,a,o,s=e(0),d=e(11),j=e.n(d),l=e(16),u=e(30),b=e(26),x=e(48),p=e.n(x),h=e(53),m=e(117),O=e(108),f=e(21),v=e(22),g=v.a.div(i||(i=Object(f.a)(["\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    width: 100%;\n    border: 1px solid lightblue;\n    border-radius: 20px;\n    height: 100%;\n\n    button {\n      border-radius: 0 0 20px 20px;\n    }\n    \n    img {\n      max-height: 250px;\n      object-fit: cover;\n      border-radius: 20px 20px 0 0;\n    }\n    \n    div {\n      font-family: Arial, Helvetica, sans-serif;\n      padding: 1rem;\n      height: 100%;\n    }\n"]))),C=e(4),w=function(n){var t=n.item,e=n.handleAddToCart;return Object(C.jsxs)(g,{children:[Object(C.jsx)("img",{src:t.image,alt:t.title}),Object(C.jsxs)("div",{children:[Object(C.jsx)("h3",{children:t.title}),Object(C.jsx)("p",{children:t.description}),Object(C.jsxs)("p",{children:["$",t.price]})]}),Object(C.jsx)(O.a,{onClick:function(){return e(t)},children:"Add to cart"})]})},y=v.a.div(r||(r=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  font-family: Arial, Helvetica, sans-serif;\n  border-bottom: 1px solid lightblue;\n  padding-bottom: 20px;\n\n  div {\n    flex: 1;\n  }\n\n  .information,\n  .buttons {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  img {\n    max-width: 80px;\n    object-fit: cover;\n    margin-left: 40px;\n  }\n"]))),k=function(n){var t=n.item,e=n.addToCart,i=n.removeFromCart;return Object(C.jsxs)(y,{children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("h3",{children:t.title}),Object(C.jsxs)("div",{className:"information",children:[Object(C.jsxs)("p",{children:["Price: $",t.price]}),Object(C.jsxs)("p",{children:["Total: $",(t.amount*t.price).toFixed(2)]})]}),Object(C.jsxs)("div",{className:"buttons",children:[Object(C.jsx)(O.a,{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return i(t.id)},children:"-"}),Object(C.jsx)("p",{children:t.amount}),Object(C.jsx)(O.a,{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return e(t)},children:"+"})]})]}),Object(C.jsx)("img",{src:t.image,alt:t.title})]})},T=v.a.aside(c||(c=Object(f.a)(["\n    font-family: Arial, Helvetica, sans-serif;\n    width: 500px;\n    padding: 20px;\n  "]))),A=function(n){var t,e=n.cartItems,i=n.addToCart,r=n.removeFromCart;return Object(C.jsxs)(T,{children:[Object(C.jsx)("h2",{children:"Your Shopping Cart"}),0===e.length?Object(C.jsx)("p",{children:"No items in cart."}):null,e.map((function(n){return Object(C.jsx)(k,{item:n,addToCart:i,removeFromCart:r},n.id)})),Object(C.jsxs)("h2",{children:["Total: $",(t=e,t.reduce((function(n,t){return n+t.amount*t.price}),0)).toFixed(2)]})]})},F=e(115),S=e(112),$=e(114),z=e(58),E=e.n(z),H=e(113),I=e(111),N=v.a.div(a||(a=Object(f.a)(["\n    margin: 40px;\n"]))),J=Object(v.a)(I.a)(o||(o=Object(f.a)(["\n    position: fixed;\n    z-index: 100;\n    right: 20px;\n    top: 20px;\n"]))),B=function(){var n=Object(h.a)(p.a.mark((function n(){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://fakestoreapi.com/products");case 2:return n.next=4,n.sent.json();case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();var L=function(){var n,t=Object(s.useState)(!1),e=Object(b.a)(t,2),i=e[0],r=e[1],c=Object(s.useState)([]),a=Object(b.a)(c,2),o=a[0],d=a[1],j=Object(m.a)("products",B),x=j.data,p=j.isLoading,h=j.error,O=function(n){d((function(t){return t.find((function(t){return t.id===n.id}))?t.map((function(t){return t.id===n.id?Object(u.a)(Object(u.a)({},t),{},{amount:t.amount+1}):t})):[].concat(Object(l.a)(t),[Object(u.a)(Object(u.a)({},n),{},{amount:1})])}))};return p?Object(C.jsx)(S.a,{}):h?Object(C.jsx)("div",{children:"Something went wrong..."}):Object(C.jsxs)(N,{children:[Object(C.jsx)(F.a,{anchor:"right",open:i,onClose:function(){return r(!1)},children:Object(C.jsx)(A,{cartItems:o,addToCart:O,removeFromCart:function(n){d((function(t){return t.reduce((function(t,e){return e.id===n?1===e.amount?t:[].concat(Object(l.a)(t),[Object(u.a)(Object(u.a)({},e),{},{amount:e.amount-1})]):[].concat(Object(l.a)(t),[e])}),[])}))}})}),Object(C.jsx)(J,{onClick:function(){return r(!0)},children:Object(C.jsx)(H.a,{badgeContent:(n=o,n.reduce((function(n,t){return n+t.amount}),0)),color:"error",children:Object(C.jsx)(E.a,{})})}),Object(C.jsx)($.a,{container:!0,spacing:3,children:null===x||void 0===x?void 0:x.map((function(n){return Object(C.jsx)($.a,{item:!0,xs:12,sm:4,children:Object(C.jsx)(w,{item:n,handleAddToCart:O})},n.id)}))})]})},P=e(116),Y=e(57),q=new P.a;j.a.render(Object(C.jsx)(Y.a,{client:q,children:Object(C.jsx)(L,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.a4b82fde.chunk.js.map