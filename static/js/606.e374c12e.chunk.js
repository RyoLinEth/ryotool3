"use strict";(self.webpackChunkelstar=self.webpackChunkelstar||[]).push([[606],{4630:function(e,s,r){var a=r(9439),n=r(2791);s.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,s=(0,n.useState)(""),r=(0,a.Z)(s,2),i=r[0],t=r[1];return(0,n.useEffect)((function(){if(i){var s=setTimeout((function(){return t("")}),e);return function(){clearTimeout(s)}}}),[i]),[i,t]}},5885:function(e,s,r){r.r(s),r.d(s,{default:function(){return h}});r(2791);var a=r(4165),n=r(5861),i=r(9439),t=r(93),o=r(8135),l=r(4630),c=r(2506),d=r(1724),m=r(3110),u=r(3329),f=d.Ry().shape({userName:d.Z_().required("Please enter your user name"),email:d.Z_().email("Invalid email").required("Please enter your email"),password:d.Z_().required("Please enter your password"),confirmPassword:d.Z_().oneOf([d.iH("password"),null],"Your passwords do not match")}),p=function(e){var s=e.disableSubmit,r=void 0!==s&&s,d=e.className,p=e.signInUrl,h=void 0===p?"/sign-in":p,x=(0,m.Z)().signUp,w=(0,l.Z)(),v=(0,i.Z)(w,2),g=v[0],j=v[1],b=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(s,r){var n,i,t,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.userName,i=s.password,t=s.email,r(!0),e.next=4,x({userName:n,password:i,email:t});case 4:"failed"===(o=e.sent).status&&j(o.message),r(!1);case 7:case"end":return e.stop()}}),e)})));return function(s,r){return e.apply(this,arguments)}}();return(0,u.jsxs)("div",{className:d,children:[g&&(0,u.jsx)(t.bZ,{className:"mb-4",type:"danger",showIcon:!0,children:g}),(0,u.jsx)(c.J9,{initialValues:{userName:"admin1",password:"123Qwe1",confirmPassword:"123Qwe1",email:"test@testmail.com"},validationSchema:f,onSubmit:function(e,s){var a=s.setSubmitting;r?a(!1):b(e,a)},children:function(e){var s=e.touched,r=e.errors,a=e.isSubmitting;return(0,u.jsx)(c.l0,{children:(0,u.jsxs)(t.Yb,{children:[(0,u.jsx)(t.xJ,{label:"User Name",invalid:r.userName&&s.userName,errorMessage:r.userName,children:(0,u.jsx)(c.gN,{type:"text",autoComplete:"off",name:"userName",placeholder:"User Name",component:t.II})}),(0,u.jsx)(t.xJ,{label:"Email",invalid:r.email&&s.email,errorMessage:r.email,children:(0,u.jsx)(c.gN,{type:"email",autoComplete:"off",name:"email",placeholder:"Email",component:t.II})}),(0,u.jsx)(t.xJ,{label:"Password",invalid:r.password&&s.password,errorMessage:r.password,children:(0,u.jsx)(c.gN,{autoComplete:"off",name:"password",placeholder:"Password",component:o.WU})}),(0,u.jsx)(t.xJ,{label:"Confirm Password",invalid:r.confirmPassword&&s.confirmPassword,errorMessage:r.confirmPassword,children:(0,u.jsx)(c.gN,{autoComplete:"off",name:"confirmPassword",placeholder:"Confirm Password",component:o.WU})}),(0,u.jsx)(t.zx,{block:!0,loading:a,variant:"solid",type:"submit",children:a?"Creating Account...":"Sign Up"}),(0,u.jsxs)("div",{className:"mt-4 text-center",children:[(0,u.jsx)("span",{children:"Already have an account? "}),(0,u.jsx)(o.vm,{to:h,children:"Sign in"})]})]})})}})]})},h=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"mb-8",children:[(0,u.jsx)("h3",{className:"mb-1",children:"Sign Up"}),(0,u.jsx)("p",{children:"And lets get started with your free trial"})]}),(0,u.jsx)(p,{disableSubmit:!1})]})}}}]);
//# sourceMappingURL=606.e374c12e.chunk.js.map