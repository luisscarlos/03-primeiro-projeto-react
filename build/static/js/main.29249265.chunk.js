(this["webpackJsonp05-primeiro-projeto-react"]=this["webpackJsonp05-primeiro-projeto-react"]||[]).push([[0],{15:function(n,e,t){n.exports=t.p+"static/media/logo.18e060ec.svg"},33:function(n,e,t){n.exports=t.p+"static/media/github-background.88c2d35e.svg"},41:function(n,e,t){n.exports=t(68)},68:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(32),l=t.n(o),i=t(7),c=t(4),u=t(5),p=t(33),s=t.n(p);function m(){var n=Object(c.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background: #F5F5F5 url(",") no-repeat 70% top;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font: 16px Roboto, sans-serif;\n  }\n\n  #root {\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 20px;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return m=function(){return n},n}var d=Object(u.a)(m(),s.a),f=t(1),b=t(17),g=t.n(b),x=t(40),E=t(37),h=t(8),v=t(13),j=t(38),y=t.n(j).a.create({baseURL:"https://api.github.com"}),O=t(15),k=t.n(O),w=t(39);function z(){var n=Object(c.a)(["\n  margin-top: 80px;\n  max-width: 700px;\n\n  a {\n    background: #fff;\n    border-radius: 5px;\n    width: 100%;\n    padding: 24px;\n    display: block;\n    text-decoration: none;\n\n    display: flex;\n    align-items: center;\n    transition: transform 0.2s;\n\n    &:hover {\n      transform: translateX(10px);\n    }\n\n    & + a {\n      margin-top: 16px;\n    }\n\n    img {\n      width: 64px;\n      height: 64px;\n      border-radius: 50%;\n    }\n\n    div {\n      margin: 0 16px;\n      flex: 1;\n\n      strong {\n        font-size: 20px;\n        color: #3d3d4d;\n      }\n\n      p {\n        font-size: 18px;\n        color: #a8a8b3;\n        margin-top: 4px;\n      }\n    }\n\n    svg {\n      margin-left: auto;\n      color: #cbcbd6;\n    }\n  }\n"]);return z=function(){return n},n}function S(){var n=Object(c.a)(["\n  display: block;\n  color: #c53030;\n  margin-top: 8px;\n"]);return S=function(){return n},n}function _(){var n=Object(c.a)(["\n        border-color: #c53030;\n      "]);return _=function(){return n},n}function F(){var n=Object(c.a)(["\n  margin-top: 40px;\n  max-width: 700px;\n\n  display: flex;\n\n  input {\n    flex: 1;\n    height: 70px;\n    padding: 0 24px;\n    border: 0;\n    border-radius: 5px 0 0 5px;\n    color: #3a3a3a;\n    border: 2px solid #fff;\n    border-right: 0px;\n\n    /* acessando a propriedade hasError do Form para aplicar borda usado a forma\n    simplifcada do IF: Se o retorno (props.hasError) da fun\xe7\xe3o tiver conte\xfado\n    (truthy), executa o que tem ap\xf3s o &&, no caso, aplica o css no input. */\n    ","\n\n    &::placeholder {\n      color: #a8a8b3;\n    }\n  }\n\n  button {\n    width: 210px;\n    height: 70px;\n    background: #04d361;\n    border: 0;\n    border-radius: 0 5px 5px 0;\n    color: #fff;\n    font-weight: bold;\n    transition: background-color 0.2s;\n\n    &:hover {\n      background: ",";\n    }\n  }\n"]);return F=function(){return n},n}function G(){var n=Object(c.a)(["\n  font-size: 48px;\n  color: #3a3a3a;\n  max-width: 450px;\n  line-height: 56px;\n\n  margin-top: 80px;\n"]);return G=function(){return n},n}var I=u.c.h1(G()),J=u.c.form(F(),(function(n){return n.hasError&&Object(u.b)(_())}),Object(w.a)(.2,"#04d361")),D=u.c.span(S()),q=u.c.div(z()),C=function(){var n=Object(r.useState)(""),e=Object(h.a)(n,2),t=e[0],o=e[1],l=Object(r.useState)(""),c=Object(h.a)(l,2),u=c[0],p=c[1],s=Object(r.useState)((function(){var n=localStorage.getItem("@Githubexplorer:repositories");return n?JSON.parse(n):[]})),m=Object(h.a)(s,2),d=m[0],f=m[1];function b(){return(b=Object(E.a)(g.a.mark((function n(e){var r,a;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),t){n.next=4;break}return p("Digite autor/nome do reposit\xf3rio"),n.abrupt("return");case 4:return n.prev=4,n.next=7,y.get("repos/".concat(t));case 7:r=n.sent,a=r.data,f([].concat(Object(x.a)(d),[a])),o(""),p(""),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(4),p("Erro na busca por esse reposit\xf3rio");case 17:case"end":return n.stop()}}),n,null,[[4,14]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){localStorage.setItem("@Githubexplorer:repositories",JSON.stringify(d))}),[d]),a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:k.a,alt:"Github Explorer"}),a.a.createElement(I,null,"Explore reposit\xf3rios no Github"),a.a.createElement(J,{hasError:!!u,onSubmit:function(n){return b.apply(this,arguments)}},a.a.createElement("input",{value:t,onChange:function(n){return o(n.target.value)},placeholder:"Digite o nome do reposit\xf3rio"}),a.a.createElement("button",{type:"submit"},"Pesquisar")),u&&a.a.createElement(D,null,u),a.a.createElement(q,null,d.map((function(n){return a.a.createElement(i.b,{key:n.full_name,to:"/repository/".concat(n.full_name)},a.a.createElement("img",{src:n.owner.avatar_url,alt:n.owner.login}),a.a.createElement("div",null,a.a.createElement("strong",null,n.full_name),a.a.createElement("p",null,n.description)),a.a.createElement(v.b,{size:20}))}))))};function N(){var n=Object(c.a)(["\n  margin-top: 80px;\n\n  a {\n    background: #fff;\n    border-radius: 5px;\n    width: 100%;\n    padding: 24px;\n    display: block;\n    text-decoration: none;\n\n    display: flex;\n    align-items: center;\n    transition: transform 0.2s;\n\n    &:hover {\n      transform: translateX(10px);\n    }\n\n    & + a {\n      margin-top: 16px;\n    }\n\n    div {\n      margin: 0 16px;\n      flex: 1;\n\n      strong {\n        font-size: 20px;\n        color: #3d3d4d;\n      }\n\n      p {\n        font-size: 18px;\n        color: #a8a8b3;\n        margin-top: 4px;\n      }\n    }\n\n    svg {\n      margin-left: auto;\n      color: #cbcbd6;\n    }\n  }\n"]);return N=function(){return n},n}function R(){var n=Object(c.a)(["\n  margin-top: 80px;\n\n  header {\n    display: flex;\n    align-items: center;\n\n    img {\n      width: 120px;\n      height: 120px;\n      border-radius: 50%;\n    }\n\n    div {\n      margin-left: 24px;\n\n      strong {\n        font-size: 36px;\n        color: #3d3d4d;\n      }\n\n      p {\n        font-size: 18px;\n        color: #737380;\n        margin-top: 4px;\n      }\n    }\n  }\n\n  ul {\n    display: flex;\n    list-style: none;\n    margin-top: 40px;\n\n    li {\n      & + li {\n        margin-left: 80px;\n      }\n\n      strong {\n        display: block;\n        font-size: 36px;\n        color: #3d3d4d;\n      }\n\n      span {\n        display: block;\n        margin-top: 4px;\n        color: #6c6c80;\n      }\n    }\n  }\n"]);return R=function(){return n},n}function X(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  a {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: #a8a8b3;\n    transition: color 0.2s;\n\n    &:hover {\n      color: #666;\n    }\n\n    svg {\n      margin-right: 4px;\n    }\n  }\n"]);return X=function(){return n},n}var B=u.c.header(X()),L=u.c.section(R()),M=u.c.div(N()),P=function(){var n=Object(r.useState)(null),e=Object(h.a)(n,2),t=e[0],o=e[1],l=Object(r.useState)([]),c=Object(h.a)(l,2),u=c[0],p=c[1],s=Object(f.f)().params;return Object(r.useEffect)((function(){y.get("repos/".concat(s.repository)).then((function(n){o(n.data)})),y.get("repos/".concat(s.repository,"/issues")).then((function(n){p(n.data)}))}),[s.repository]),a.a.createElement(a.a.Fragment,null,a.a.createElement(B,null,a.a.createElement("img",{src:k.a,alt:"Github Explorer"}),a.a.createElement(i.b,{to:"/"},a.a.createElement(v.a,{size:16}),"Voltar")),t?a.a.createElement(L,null,a.a.createElement("header",null,a.a.createElement("img",{src:t.owner.avatar_url,alt:t.owner.login}),a.a.createElement("div",null,a.a.createElement("strong",null,t.full_name),a.a.createElement("p",null,t.description))),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("strong",null,t.stargazers_count),a.a.createElement("span",null,"Stars")),a.a.createElement("li",null,a.a.createElement("strong",null,t.forks_count),a.a.createElement("span",null,"Forks")),a.a.createElement("li",null,a.a.createElement("strong",null,t.open_issues_count),a.a.createElement("span",null,"Issues")))):a.a.createElement("p",null,"Carregando"),a.a.createElement(M,null,u.map((function(n){return a.a.createElement("a",{key:n.id,href:n.html_url},a.a.createElement("div",null,a.a.createElement("strong",null,n.title),a.a.createElement("p",null,n.user.login)),a.a.createElement(v.b,{size:20}))}))))},U=function(){return a.a.createElement(f.c,null,a.a.createElement(f.a,{path:"/",exact:!0,component:C}),a.a.createElement(f.a,{path:"/repository/:repository+",component:P}))},V=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,null,a.a.createElement(U,null)),a.a.createElement(d,null))};l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(V,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.29249265.chunk.js.map