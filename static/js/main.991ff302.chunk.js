(this.webpackJsonptexteditor=this.webpackJsonptexteditor||[]).push([[0],{23:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(15),l=c.n(r),o=c(10),s=c(0),i=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("h1",{className:"text-center my-3",children:"This is Made by - Adil Khan"})})},d=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("footer",{style:{background:"light"===e.mode?"#ff8c00ad":"#212529"},className:"foot page-footer font-small blue mt-4 text-".concat("light"===e.mode?"dark":"light"),children:Object(s.jsx)("div",{className:"footer-copyright text-center py-3",children:"\xa9 2021 Copyright by Adil Khan"})})})},b=c(8),j=(c(23),function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("nav",{style:{background:"light"===e.mode?"#ff8c00ad":"#212529"},className:"nav-grid navbar navbar-expand-lg navbar-".concat(e.mode),"data-toggle":"affix",children:[Object(s.jsxs)("div",{className:"mx-auto d-block flex-sm-nowrap title",children:[Object(s.jsx)("button",{className:"navbar-toggler ",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsx)("div",{className:"collapse navbar-collapse text-center",id:"navbarSupportedContent",children:Object(s.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(s.jsx)(b.b,{className:"navbar-brand",to:"/",children:e.title}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.b,{className:"nav-link",to:"./About",children:"About"})})]})})]}),Object(s.jsxs)("div",{className:"form-check form-switch mx-3 text-".concat("light"===e.mode?"dark":"light"),children:[Object(s.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})})}),m=function(e){var t={background:(e.mode,"black"),color:(e.mode,"white"),height:"60px",borderTopLeftRadius:"8px",borderTopRightRadius:"8px"};return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"mb-5 card",style:{width:"15rem",margin:"17px 17px 17px 0",borderRadius:"10px",border:"light"===e.mode?"2px solid black":"2px solid white"},children:[Object(s.jsxs)("div",{style:t,className:"card-body p-0",children:[Object(s.jsx)("h4",{className:"card-title text-center pt-3",children:e.title}),Object(s.jsx)("hr",{})]}),Object(s.jsx)("p",{className:"card-text text-center pb-3 pt-3 text-".concat((e.mode,"black")),children:e.length})]})})},h=function(e){var t=Object(a.useState)(""),c=Object(o.a)(t,2),n=c[0],r=c[1];function l(e){return(e=(e=(e=e.replace(/(^\s*)|(\s*$)/gi,"")).replace(/[ ]{2,}/gi," ")).replace(/\n /,"\n")).split(/\s+/).filter((function(e){return 0!==e.length})).length}return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"body",children:[Object(s.jsx)("h1",{className:"mb-4 mt-2",children:"Enter your text below : "}),Object(s.jsxs)("div",{className:"mb-3",children:[Object(s.jsx)("textarea",{className:"form-control rounded-3 bg-".concat("dark"===e.mode?"black":"white"," text-").concat("dark"===e.mode?"white":"black"),id:"exampleFormControlTextarea1",value:n,onChange:function(e){r(e.target.value)},rows:"5",placeholder:"Enter your text here..."}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary mt-3",onClick:function(){r(n.toUpperCase())},children:"UPPERCASE"}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary mt-3 mx-2",onClick:function(){r(n.toLowerCase())},children:"lowercase"}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary mt-3 mx-2",onClick:function(){r(n.replace(/\s+/g," ").trim())},children:"Remove Spaces"}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary mt-3 mx-2",onClick:function(){""!==n&&r("")},children:"Clear"})]}),Object(s.jsxs)("div",{className:"d-flex flex-wrap",children:[Object(s.jsx)(m,{mode:e.mode,title:"Characters",length:n.length}),Object(s.jsx)(m,{mode:e.mode,title:"Words",length:l(n)}),Object(s.jsx)(m,{mode:e.mode,title:"Reading Time",length:.48*l(n)+" Sec"})]}),Object(s.jsxs)("div",{className:"container p-0",children:[Object(s.jsx)("h2",{children:"You can Read from below"}),""===n?"Enter text above to preview it":n]})]})})},x=c(2),u=function(){var e=Object(a.useState)("light"),t=Object(o.a)(e,2),c=t[0],n=t[1],r=function(){"light"===c?(n("dark"),document.body.style.backgroundColor="gray",document.body.style.color="white"):(n("light"),document.body.style.backgroundColor="white",document.body.style.color="black")};return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(b.a,{children:[Object(s.jsx)(j,{title:"Text Manupulation",mode:c,toggleMode:r}),Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)(x.c,{children:[Object(s.jsx)(x.a,{path:"/about",children:Object(s.jsx)(i,{})}),Object(s.jsx)(x.a,{path:"/",children:Object(s.jsx)(h,{mode:c,toggleMode:r})})]})}),Object(s.jsx)(d,{mode:c,toggleMode:r})]})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,30)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,l=t.getTTFB;c(e),a(e),n(e),r(e),l(e)}))};l.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(u,{})}),document.getElementById("root")),g()}},[[29,1,2]]]);
//# sourceMappingURL=main.991ff302.chunk.js.map