(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),r=n(3),s=n.n(r),o=(n(12),n(4)),c=n(5),l=n(7),u=n(6),h=(n.p,n(13),n(0)),m=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={text:""},a.sub=function(){a.setState({text:"Thank you. you are all set"})},a.submitHandler=function(t){t.preventDefault();var e=a.emailEl.current.value;if(0!==e.trim().length){var n={email:e};fetch("http://localhost:8080/home/email",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(t){if(200!==t.status&&201!==t.status)throw new Error("Failed");return t.json()})).then((function(t){console.log(t.userid)})).catch((function(t){console.log(t)}))}},a.emailEl=i.a.createRef(),a}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state.text;return Object(h.jsx)(i.a.Fragment,{children:Object(h.jsxs)("form",{className:"auth-form",onSubmit:this.submitHandler,children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{htmlFor:"email",children:"E-Mail.Please after you entered your email, press submit and close the window"}),Object(h.jsx)("input",{type:"email",id:"email",ref:this.emailEl})]}),Object(h.jsx)("div",{children:t}),Object(h.jsx)("div",{className:"form-actions",children:Object(h.jsx)("button",{type:"submit",onChange:this.sub,children:"Submit"})})]})})}}]),n}(a.Component);s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.82b617b6.chunk.js.map