"use strict";(self.webpackChunkelstar=self.webpackChunkelstar||[]).push([[546],{4630:function(e,n,i){var r=i(9439),t=i(2791);n.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,n=(0,t.useState)(""),i=(0,r.Z)(n,2),a=i[0],s=i[1];return(0,t.useEffect)((function(){if(a){var n=setTimeout((function(){return s("")}),e);return function(){clearTimeout(n)}}}),[a]),[a,s]}},5546:function(e,n,i){i.r(n),i.d(n,{default:function(){return f}});var r=i(2791),t=i(4165),a=i(5861),s=i(9439),l=i(8109),c=i(8135),o=i(2789),u=i(4630),d=i(2506),m=i(2797),h=i(3329),v=m.Ry().shape({email:m.Z_().required("Please enter your email")}),x=function(e){var n=e.disableSubmit,i=void 0!==n&&n,m=e.className,x=e.signInUrl,f=void 0===x?"/sign-in":x,p=(0,r.useState)(!1),j=(0,s.Z)(p,2),b=j[0],g=j[1],S=(0,u.Z)(),y=(0,s.Z)(S,2),Z=y[0],k=y[1],N=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n,i){var r,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,e.next=4,(0,o.tH)(n);case 4:e.sent.data&&(i(!1),g(!0)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),k((null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.message)||e.t0.toString()),i(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n,i){return e.apply(this,arguments)}}();return(0,h.jsxs)("div",{className:m,children:[(0,h.jsx)("div",{className:"mb-6",children:b?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h3",{className:"mb-1",children:"Check your email"}),(0,h.jsx)("p",{children:"We have sent a password recovery instruction to your email"})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h3",{className:"mb-1",children:"Forgot Password"}),(0,h.jsx)("p",{children:"Please enter your email address to receive a verification code"})]})}),Z&&(0,h.jsx)(l.bZ,{className:"mb-4",type:"danger",showIcon:!0,children:Z}),(0,h.jsx)(d.J9,{initialValues:{email:"admin@mail.com"},validationSchema:v,onSubmit:function(e,n){var r=n.setSubmitting;i?r(!1):N(e,r)},children:function(e){var n=e.touched,i=e.errors,r=e.isSubmitting;return(0,h.jsx)(d.l0,{children:(0,h.jsxs)(l.Yb,{children:[(0,h.jsx)("div",{className:b?"hidden":"",children:(0,h.jsx)(l.xJ,{invalid:i.email&&n.email,errorMessage:i.email,children:(0,h.jsx)(d.gN,{type:"email",autoComplete:"off",name:"email",placeholder:"Email",component:l.II})})}),(0,h.jsx)(l.zx,{block:!0,loading:r,variant:"solid",type:"submit",children:b?"Resend Email":"Send Email"}),(0,h.jsxs)("div",{className:"mt-4 text-center",children:[(0,h.jsx)("span",{children:"Back to "}),(0,h.jsx)(c.vm,{to:f,children:"Sign in"})]})]})})}})]})},f=function(){return(0,h.jsx)(x,{disableSubmit:!1})}}}]);
//# sourceMappingURL=546.5db7d83f.chunk.js.map