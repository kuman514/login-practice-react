(this["webpackJsonplogin-practice-react"]=this["webpackJsonplogin-practice-react"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(3),i=n.n(c),o=n(12),a=n.n(o),r=(n(18),n(4)),s=n(5),p=n(7),l=n(6),u=n.p+"static/media/logo.6ce24c58.svg",g=(n(19),n(13)),j=n(9),b=(n(20),{apiKey:"AIzaSyAXv06SLYXMimug4Lnx685YqQOZQI3eeas",authDomain:"loginpractice-b0ccd.firebaseapp.com",projectId:"loginpractice-b0ccd",storageBucket:"loginpractice-b0ccd.appspot.com",messagingSenderId:"379283789713",appId:"1:379283789713:web:1f3397916031138fe92c30"}),d=n(1),h=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"Login",children:Object(d.jsx)("button",{onClick:function(t){e.props.googleLogin&&e.props.googleLogin(t)},children:"Sign in with Google"})})}}]),n}(i.a.Component),O=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"Logout",children:Object(d.jsx)("button",{onClick:function(t){e.props.logOut&&e.props.logOut(t)},children:"Sign out"})})}}]),n}(i.a.Component),f=j.a.initializeApp(b).auth(),v={googleProvider:new j.a.auth.GoogleAuthProvider},m=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.signOut,c=e.signInWithGoogle;return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("img",{src:u,className:"App-logo",alt:"logo"}),Object(d.jsx)("h1",{children:"React + TypeScript: Login Practice"}),t?Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{children:["Hello, ",t.displayName,"!"]}),Object(d.jsx)(O,{logOut:n})]}):Object(d.jsx)(h,{googleLogin:c})]})})}}]),n}(i.a.Component),x=Object(g.a)({providers:v,firebaseAppAuth:f})(m),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),o(e),a(e)}))};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),y()}},[[23,1,2]]]);
//# sourceMappingURL=main.a8a7c2b1.chunk.js.map