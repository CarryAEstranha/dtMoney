(this.webpackJsonpdtmoney=this.webpackJsonpdtmoney||[]).push([[0],{101:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),i=t(28),c=t.n(i),o=t(33),s=t(6),d=t(16),l=t.n(d),b=t(10),h=t.n(b),u=t(63),j=t(34),m=t(17),p=t(49),g=t.n(p).a.create({baseURL:"http://localhost:3000/api"}),x=t(0),O=Object(r.createContext)({});function f(n){var e=n.children,t=Object(r.useState)([]),a=Object(s.a)(t,2),i=a[0],c=a[1];function o(){return(o=Object(m.a)(h.a.mark((function n(e){var t,r;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.post("/transactions",Object(j.a)(Object(j.a)({},e),{},{createdAt:new Date}));case 2:t=n.sent,r=t.data.transaction,c([].concat(Object(u.a)(i),[r]));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(r.useEffect)((function(){g.get("transactions").then((function(n){return c(n.data.transactions)}))}),[]),Object(x.jsx)(O.Provider,{value:{transactions:i,createTransaction:function(n){return o.apply(this,arguments)}},children:e})}function y(){return Object(r.useContext)(O)}var v,w,k=t(3),C=t(4),F=C.b.header(v||(v=Object(k.a)(["\n    background: var(--blue);\n\n    height: 13.25rem;\n"]))),N=C.b.div(w||(w=Object(k.a)(["\n    display: flex;\n\n    align-items: center;\n    justify-content: space-between;\n\n    margin: 0 auto 4.25rem auto;\n    padding: 0 1rem 0 1rem;\n\n    max-width: 70rem;\n    height: 9rem;\n\n    button{\n        background: var(--blue-light);\n\n        color: #FFF;\n        font-size: 1rem;\n\n        border: 0;\n        border-radius: 0.25rem;\n\n        padding: 0 2rem;\n\n        transition: filter 0.2s;\n\n        height: 3rem;\n\n        &:hover{\n            filter: brightness(0.85);\n        }\n    }\n"]))),S=t.p+"static/media/logo.614d71d1.svg";function D(n){var e=n.onOpenNewTransactionModal;return Object(x.jsx)(F,{children:Object(x.jsxs)(N,{children:[Object(x.jsx)("img",{src:S,alt:"dt money"}),Object(x.jsx)("button",{type:"button",onClick:e,children:"Nova transa\xe7\xe3o"})]})})}var z,E,B=t.p+"static/media/income.d58effe2.svg",L=t.p+"static/media/outcome.6eb96d30.svg",R=t.p+"static/media/total.e90c2d1e.svg",T=C.b.section(z||(z=Object(k.a)(["\n    display: flex;\n\n    justify-content: space-between;\n\n    div{\n        background: var(--shape);\n\n        display: flex;\n        flex-direction: column;\n\n        justify-content: center;\n\n        color: var(--text-title);\n\n        border-radius: 6px;\n\n        margin: -4.25rem 0 0 0;\n        padding: 0 2rem 0 2rem;\n\n        width: 22rem;\n        height: 8.5rem;\n\n        header{\n            display: flex;\n\n            align-items: center;\n            justify-content: space-between;\n\n            margin: 0 0 0.46rem 0;\n        }\n\n        strong{\n            font-size: 2rem;\n            font-weight: 500;\n        }\n\n        &.greenlight{\n            background: var(--green);\n\n            color: var(--shape);\n        }\n    }\n"])));function q(){var n=y().transactions.reduce((function(n,e){return"deposit"===e.type?(n.deposits+=e.amount,n.total+=e.amount):(n.withdraws+=e.amount,n.total-=e.amount),n}),{deposits:0,withdraws:0,total:0});return Object(x.jsxs)(T,{children:[Object(x.jsxs)("div",{children:[Object(x.jsxs)("header",{children:[Object(x.jsx)("p",{children:"Entradas"}),Object(x.jsx)("img",{src:B,alt:"Entradas"})]}),Object(x.jsx)("strong",{children:n.deposits.toLocaleString("pt-br",{style:"currency",currency:"BRL"})})]}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("header",{children:[Object(x.jsx)("p",{children:"Sa\xeddas"}),Object(x.jsx)("img",{src:L,alt:"Sa\xeddas"})]}),Object(x.jsx)("strong",{children:n.withdraws.toLocaleString("pt-br",{style:"currency",currency:"BRL"})})]}),Object(x.jsxs)("div",{className:"greenlight",children:[Object(x.jsxs)("header",{children:[Object(x.jsx)("p",{children:"Total"}),Object(x.jsx)("img",{src:R,alt:"Total"})]}),Object(x.jsx)("strong",{children:n.total.toLocaleString("pt-br",{style:"currency",currency:"BRL"})})]})]})}var A,M=C.b.section(E||(E=Object(k.a)(["    \n    table{\n        color: var(--text-body);\n\n        border-spacing: 0 0.5rem;\n\n        margin: 2rem 0 0 0;\n\n        width: 100%;\n\n        th{\n            font-weight: 400;\n            text-align: left;\n\n            height: 3.5rem;\n\n            &:first-child{\n                padding: 0 2rem 0 2rem;\n\n                width: 34rem;\n            }\n\n            &:nth-child(2){\n                width: 13.25rem;\n            }\n        }\n\n        td{\n            background: var(--shape);\n\n            height: 4rem;\n\n            &:first-child{\n                color: var(--text-title);\n\n                border-radius: 6px 0 0 6px;\n\n                padding: 0 2rem 0 2rem;\n\n                width: 34rem;\n            }\n\n            &:nth-child(2){\n                width: 13.25rem;\n            }\n\n            &:nth-child(3){\n                width: 13.25rem;\n            }\n\n            &:last-child{\n                border-radius: 0 6px 6px 0;\n            }\n\n            &.deposit{\n            color: var(--green);\n            }\n\n            &.withdraw{\n                color: var(--red);\n            }\n        }\n    }\n"])));function P(){var n=y().transactions;return Object(x.jsx)(M,{children:Object(x.jsxs)("table",{children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"T\xedtulo      "}),Object(x.jsx)("th",{children:"Pre\xe7o       "}),Object(x.jsx)("th",{children:"Categoria   "}),Object(x.jsx)("th",{children:"Data        "})]})}),Object(x.jsx)("tbody",{children:n.map((function(n){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:n.title}),Object(x.jsxs)("td",{className:n.type,children:["deposit"===n.type?"":"- ",n.amount.toLocaleString("pt-br",{style:"currency",currency:"BRL"})]}),Object(x.jsx)("td",{children:n.category}),Object(x.jsx)("td",{children:new Intl.DateTimeFormat("pt-BR").format(new Date(n.createdAt))})]},n.id)}))})]})})}var J=C.b.main(A||(A=Object(k.a)(["\n    margin: 0 auto;\n    padding: 0 1rem 0 1rem;\n\n    max-width: 70rem;\n"])));function I(){return Object(x.jsxs)(J,{children:[Object(x.jsx)(q,{}),Object(x.jsx)(P,{})]})}var U,G,H,K=t(62),Q=C.b.form(U||(U=Object(k.a)(["\n    h2{\n        color: var(--text-title);\n\n        font-size: 1.5rem;\n        font-weight: 600;\n\n        padding: 0 0 2rem 0;\n    }\n\n    input{\n        background: #E7E9EE;\n\n        color: var(--text-body);\n\n        font-size: 1rem;\n        font-weight: 400;\n\n        border: 1px solid #D7D7D7;\n        border-radius: 6px;\n\n        box-sizing: border-box;\n        outline: none;\n\n        margin: 0 0 1rem 0;\n        padding: 0 1.5rem 0 1.5rem;\n\n        width: 100%;\n        height: 4rem;\n\n        &::placeholder{\n            color: var(--text-body);\n\n            font-size: 1rem;\n            font-weight: 400;\n        }\n    }\n\n    button.submit{\n        background: var(--green);\n\n        color: var(--shape);\n\n        font-size: 1rem;\n        font-weight: 600;\n\n        border: none;\n        border-radius: 6px;\n\n        outline: none;\n\n        margin: 0.5rem 0 0 0;\n\n        transition: filter 0.2s;\n\n        width: 100%;\n        height: 4rem;\n\n        &:hover{\n            filter: brightness(0.85);\n        }\n    }\n\n    .hide{\n        position: absolute;\n\n        overflow: hidden;\n\n        opacity: 0;\n\n        width: 0px;\n        height: 0px;\n    }\n"]))),V=C.b.div(G||(G=Object(k.a)(["\n    margin: 0 0 1rem 0;\n\n    display: flex;\n\n    justify-content: space-between;\n\n    button{\n        background: transparent;\n\n        display: flex;\n\n        align-items: center;\n        justify-content: center;\n\n        border: 1px solid #969CB2;\n        border-radius: 6px;\n\n        box-sizing: border-box;\n        outline: none;\n\n        width: 14.75rem;\n        height: 4rem;\n\n        img{\n            margin: 0 1rem 0 0;\n\n            width: 2rem;\n            height: 2rem;\n        }\n\n        span{\n            color: var(--text-title);\n\n            font-size: 1rem;\n            font-weight: 400;\n        }\n\n        transition: 0.2s;\n\n        &:hover{\n            border-color: ",";\n        }\n    }\n\n    button.deposit{\n        background: rgba(18, 164, 84, 0.1);\n    }\n\n    button.withdraw{\n        background: rgba(230, 46, 78, 0.1);\n    }\n"])),Object(K.a)(.6,"#969CB2")),W=t.p+"static/media/close.f62862c6.svg";function X(n){var e=n.isOpen,t=n.onRequestClose,a=y().createTransaction,i=Object(r.useState)(""),c=Object(s.a)(i,2),o=c[0],d=c[1],b=Object(r.useState)(0),u=Object(s.a)(b,2),j=u[0],p=u[1],g=Object(r.useState)("deposit"),O=Object(s.a)(g,2),f=O[0],v=O[1],w=Object(r.useState)(""),k=Object(s.a)(w,2),C=k[0],F=k[1];function N(){return(N=Object(m.a)(h.a.mark((function n(e){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.next=3,a({title:o,amount:j,category:C,type:f});case 3:d(""),p(0),v("desposit"),F(""),t();case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(x.jsxs)(l.a,{isOpen:e,onRequestClose:t,overlayClassName:"react-modal-overlay",className:"react-modal-class",children:[Object(x.jsx)("button",{type:"button",className:"closeModal",onClick:t,children:Object(x.jsx)("img",{src:W,alt:"Close modal"})}),Object(x.jsxs)(Q,{onSubmit:function(n){return N.apply(this,arguments)},children:[Object(x.jsx)("h2",{children:"Cadastrar transa\xe7\xe3o"}),Object(x.jsx)("label",{htmlFor:"title",className:"hide",children:"Nome"}),Object(x.jsx)("input",{id:"title",name:"title",type:"text",placeholder:"Nome",value:o,onChange:function(n){return d(n.target.value)},required:!0})," ",Object(x.jsx)("br",{}),Object(x.jsx)("label",{htmlFor:"price",className:"hide",children:"Pre\xe7o"}),Object(x.jsx)("input",{id:"price",name:"price",type:"number",placeholder:"Pre\xe7o",value:j,onChange:function(n){return p(Number(n.target.value))},min:"0",required:!0})," ",Object(x.jsx)("br",{}),Object(x.jsxs)(V,{children:[Object(x.jsxs)("button",{type:"button",className:"deposit"===f?"deposit":"",onClick:function(){v("deposit")},children:[Object(x.jsx)("img",{src:B,alt:""}),Object(x.jsx)("span",{children:"Entrada"})]}),Object(x.jsxs)("button",{type:"button",className:"deposit"===f?"":"withdraw",onClick:function(){v("withdraw")},children:[Object(x.jsx)("img",{src:L,alt:""}),Object(x.jsx)("span",{children:"Sa\xedda"})]})]}),Object(x.jsx)("label",{htmlFor:"category",className:"hide",children:"Categoria"}),Object(x.jsx)("input",{id:"category",name:"category",type:"text",placeholder:"Categoria",value:C,onChange:function(n){return F(n.target.value)},required:!0})," ",Object(x.jsx)("br",{}),Object(x.jsx)("button",{type:"submit",className:"submit",children:"Cadastrar"})]})]})}var Y=Object(C.a)(H||(H=Object(k.a)(['\n    :root{\n        --red: #E52E4D;\n        --green: #33CC95;\n        --blue: #5429CC;\n\n        --blue-light: #6933FF;\n\n        --text-title: #363F5F;\n        --text-body: #969CB2;\n\n        --background: #F0F2F5;\n        --shape: #FFFFFF;\n    }\n    \n    *{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    html{\n        @media(max-width: 1080px){\n            font-size: 93.75%;\n        }\n        \n        @media(max-width: 720px){\n            font-size: 87.5%;\n        }\n    }\n\n    body{\n        background: var(--background);\n        -webkit-font-smoothing: antialiased;\n    }\n\n    body, input, textarea, button{\n        font-family: "Poppins", sans-serif;\n        font-weight: 400;\n    }\n\n    h1, h2, h3, h4, h5, h6, strong{\n        font-weight: 600;\n    }\n\n    button{\n        cursor: pointer;\n    }\n\n    [disabled]{\n        opacity: 0.6;\n        cursor: not-allowed;\n    }\n\n    .react-modal-overlay{\n        background: rgba(0, 0, 0, 0.5);\n\n        display: flex;\n\n        align-items: center;\n        justify-content: center;\n\n        position: fixed;\n\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n    }\n\n    .react-modal-class{\n        background: var(--background);\n\n        position: relative;\n\n        padding: 4rem 3rem 4rem 3rem;\n\n        width: 36rem;\n\n        button.closeModal{\n            background: transparent;\n\n            position: absolute;\n\n            display: flex;\n\n            align-items: center;\n            justify-content: center;\n\n            border: none;\n            border-radius: 50%;\n\n            top: 0;\n            right: 0;\n\n            margin: 1.25rem 1.25rem 0 0;\n\n            transition: 0.2s;\n\n            width: 1.5rem;\n            height: 1.5rem;\n\n            &:hover{\n                background: rgba(0, 0, 0, 0.1);\n            }\n        }\n    }\n'])));function Z(){var n=Object(r.useState)(!1),e=Object(s.a)(n,2),t=e[0],a=e[1];return Object(x.jsxs)(f,{children:[Object(x.jsx)(D,{onOpenNewTransactionModal:function(){a(!0)}}),Object(x.jsx)(I,{}),Object(x.jsx)(X,{isOpen:t,onRequestClose:function(){a(!1)}}),Object(x.jsx)(Y,{})]})}l.a.setAppElement("#root"),Object(o.b)({models:{transaction:o.a},seeds:function(n){n.db.loadData({transactions:[{id:1,title:"Freelancer de website",type:"deposit",category:"Dev",amount:6e3,createdAt:new Date("2021-02-12 09:00:00")},{id:2,title:"Aluguel",type:"withdraw",category:"Casa",amount:2100,createdAt:new Date("2021-02-14 11:00:00")}]})},routes:function(){var n=this;this.namespace="api",this.get("/transactions",(function(){return n.schema.all("transaction")})),this.post("/transactions",(function(n,e){var t=JSON.parse(e.requestBody);return n.create("transaction",t)}))}}),c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(Z,{})}),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.b7aa761b.chunk.js.map