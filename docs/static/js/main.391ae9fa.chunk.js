(this["webpackJsonpreact-auth"]=this["webpackJsonpreact-auth"]||[]).push([[0],{54:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(16),s=a.n(n),i=a(9),j=a(6),l=a(14),u=a.n(l),o=a(15),b=a(7),d=a(60),O=a(58),h=a(59),p=a(56),x=a(32),m=a.n(x),f=(a(45),m.a.initializeApp({apiKey:"AIzaSyBVitr7NObGXU4HA_EMC0-KgKSMkl-0CAY",authDomain:"react-auth-a9fe1.firebaseapp.com",databaseURL:"https://react-auth-a9fe1-default-rtdb.firebaseio.com",projectId:"react-auth-a9fe1",storageBucket:"react-auth-a9fe1.appspot.com",messagingSenderId:"87178370403",appId:"1:87178370403:web:970afbc48c243f8080c756"})),v=f.auth(),w=a(1),g=r.a.createContext();function y(e){var t=e.children,a=Object(c.useState)(),r=Object(b.a)(a,2),n=r[0],s=r[1],i=Object(c.useState)(!0),j=Object(b.a)(i,2),l=j[0],u=j[1];Object(c.useEffect)((function(){return v.onAuthStateChanged((function(e){s(e),u(!1)}))}),[]);var o={currentUser:n,login:function(e,t){return v.signInWithEmailAndPassword(e,t)},signup:function(e,t){return v.createUserWithEmailAndPassword(e,t)},logout:function(){return v.signOut()},resetPassword:function(e){return v.sendPasswordResetEmail(e)},updateEmail:function(e){return n.updateEmail(e)},updatePassword:function(e){return n.updatePassword(e)}};return Object(w.jsx)(g.Provider,{value:o,children:!l&&t})}var N=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),r=Object(c.useContext)(g).signup,n=Object(c.useState)(""),s=Object(b.a)(n,2),l=s[0],x=s[1],m=Object(c.useState)(!1),f=Object(b.a)(m,2),v=f[0],y=f[1],N=Object(j.g)();function S(){return(S=Object(o.a)(u.a.mark((function c(n){return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(n.preventDefault(),t.current.value===a.current.value){c.next=3;break}return c.abrupt("return",x("Passwords do not match"));case 3:return c.prev=3,x(""),y(!0),c.next=8,r(e.current.value,t.current.value);case 8:N.push("/login"),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(3),x("Failed to create an account");case 14:y(!1);case 15:case"end":return c.stop()}}),c,null,[[3,11]])})))).apply(this,arguments)}return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(d.a,{children:Object(w.jsxs)(d.a.Body,{children:[Object(w.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),l&&Object(w.jsx)(O.a,{variant:"danger",children:l}),Object(w.jsxs)(h.a,{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(w.jsxs)(h.a.Group,{id:"email",className:"mt-2",children:[Object(w.jsx)(h.a.Label,{children:"Email"}),Object(w.jsx)(h.a.Control,{type:"email",ref:e,required:!0})]}),Object(w.jsxs)(h.a.Group,{id:"password",className:"mt-2",children:[Object(w.jsx)(h.a.Label,{children:"Password"}),Object(w.jsx)(h.a.Control,{type:"password",ref:t,required:!0})]}),Object(w.jsxs)(h.a.Group,{id:"password-confirm",className:"mt-2",children:[Object(w.jsx)(h.a.Label,{children:"Password Confirm"}),Object(w.jsx)(h.a.Control,{type:"password",ref:a,required:!0})]}),Object(w.jsx)(p.a,{className:"w-100 mt-5",type:"submit",disabled:v,children:"Sign Up"})]})]})}),Object(w.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(w.jsx)(i.b,{to:"login",children:"Log In"})]})]})},S=a(57),C=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),a=t[0],r=t[1],n=Object(c.useContext)(g),s=n.currentUser,l=n.logout,h=Object(j.g)(),x=function(){var e=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(""),e.prev=1,e.next=4,l();case 4:h.pushState("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),r("Failed to LogOut");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(d.a,{children:Object(w.jsxs)(d.a.Body,{children:[Object(w.jsx)("h2",{className:"text-center mb-4",children:"Profile"}),a&&Object(w.jsx)(O.a,{variant:"danger",children:a}),Object(w.jsx)("strong",{children:"Email:"})," ",s.email,Object(w.jsx)(i.b,{to:"/update-profile",className:"btn btn-primary w-100 mt-3",children:"Update Profile"})]})}),Object(w.jsx)("div",{className:"w-100 text-center mt-2",children:Object(w.jsx)(p.a,{variant:"link",onClick:x,children:"Log Out"})})]})},P=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useContext)(g).login,r=Object(c.useState)(""),n=Object(b.a)(r,2),s=n[0],l=n[1],x=Object(c.useState)(!1),m=Object(b.a)(x,2),f=m[0],v=m[1],y=Object(j.g)();function N(){return(N=Object(o.a)(u.a.mark((function c(r){return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r.preventDefault(),c.prev=1,l(""),v(!0),c.next=6,a(e.current.value,t.current.value);case 6:y.push("/"),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(1),l("Failed to log in");case 12:v(!1);case 13:case"end":return c.stop()}}),c,null,[[1,9]])})))).apply(this,arguments)}return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(d.a,{children:Object(w.jsxs)(d.a.Body,{children:[Object(w.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),s&&Object(w.jsx)(O.a,{variant:"danger",children:s}),Object(w.jsxs)(h.a,{onSubmit:function(e){return N.apply(this,arguments)},children:[Object(w.jsxs)(h.a.Group,{id:"email",className:"mt-2",children:[Object(w.jsx)(h.a.Label,{children:"Email"}),Object(w.jsx)(h.a.Control,{type:"email",ref:e,required:!0})]}),Object(w.jsxs)(h.a.Group,{id:"password",className:"mt-2",children:[Object(w.jsx)(h.a.Label,{children:"Password"}),Object(w.jsx)(h.a.Control,{type:"password",ref:t,required:!0})]}),Object(w.jsx)(p.a,{className:"w-100 mt-5",type:"submit",disabled:f,children:"Log In"})]}),Object(w.jsx)("div",{className:"w-100 text-center mt-3",children:Object(w.jsx)(i.b,{to:"forgot-password",children:"Forgot Password?"})})]})}),Object(w.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(w.jsx)(i.b,{to:"/signup",children:"Sign Up"})]})]})},k=a(20),L=function(e){var t=e.component,a=e.rest,r=Object(c.useContext)(g).currentUser;return Object(w.jsx)(j.b,Object(k.a)(Object(k.a)({},a),{},{render:function(e){return r?Object(w.jsx)(t,Object(k.a)({},e)):Object(w.jsx)(j.a,{to:"/login"})}}))},E=function(){var e=Object(c.useRef)(),t=Object(c.useContext)(g).resetPassword,a=Object(c.useState)(""),r=Object(b.a)(a,2),n=r[0],s=r[1],j=Object(c.useState)(!1),l=Object(b.a)(j,2),x=l[0],m=l[1],f=Object(c.useState)(""),v=Object(b.a)(f,2),y=v[0],N=v[1];function S(){return(S=Object(o.a)(u.a.mark((function a(c){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.prev=1,N(""),s(""),m(!0),a.next=7,t(e.current.value);case 7:N("Check your inbox for futher instructions"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),s("Failed to reset password");case 13:m(!1);case 14:case"end":return a.stop()}}),a,null,[[1,10]])})))).apply(this,arguments)}return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(d.a,{children:Object(w.jsxs)(d.a.Body,{children:[Object(w.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),n&&Object(w.jsx)(O.a,{variant:"danger",children:n}),y&&Object(w.jsx)(O.a,{variant:"success",children:y}),Object(w.jsxs)(h.a,{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(w.jsxs)(h.a.Group,{id:"email",className:"mt-2",children:[Object(w.jsx)(h.a.Label,{children:"Email"}),Object(w.jsx)(h.a.Control,{type:"email",ref:e,required:!0})]}),Object(w.jsx)(p.a,{className:"w-100 mt-5",type:"submit",disabled:x,children:"Reset Password"})]}),Object(w.jsx)("div",{className:"w-100 text-center mt-3",children:Object(w.jsx)(i.b,{to:"login",children:"Log In"})})]})}),Object(w.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(w.jsx)(i.b,{to:"/signup",children:"Sign Up"})]})]})},U=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),r=Object(c.useContext)(g),n=r.currentUser,s=r.updateEmail,l=r.updatePassword,u=Object(c.useState)(""),o=Object(b.a)(u,2),x=o[0],m=o[1],f=Object(c.useState)(!1),v=Object(b.a)(f,2),y=v[0],N=v[1],S=Object(j.g)();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(d.a,{children:Object(w.jsxs)(d.a.Body,{children:[Object(w.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),x&&Object(w.jsx)(O.a,{variant:"danger",children:x}),Object(w.jsxs)(h.a,{onSubmit:function(c){if(c.preventDefault(),t.current.value!==a.current.value)return m("Passwords do not match");var r=[];N(!0),m(""),e.current.value!==n.email&&r.push(s(e.current.value)),t.current.value&&r.push(l(t.current.value)),Promise.all(r).then((function(){S.push("/")})).catch((function(){m("Filed to create account")})).finally((function(){N(!1)}))},children:[Object(w.jsxs)(h.a.Group,{id:"email",className:"mt-2",children:[Object(w.jsx)(h.a.Label,{children:"Email"}),Object(w.jsx)(h.a.Control,{type:"email",ref:e,defaultValue:n.email,required:!0})]}),Object(w.jsxs)(h.a.Group,{id:"password",className:"mt-2",children:[Object(w.jsx)(h.a.Label,{children:"Password"}),Object(w.jsx)(h.a.Control,{type:"password",ref:t,placeholder:"Leave to keep the same"})]}),Object(w.jsxs)(h.a.Group,{id:"password-confirm",className:"mt-2",children:[Object(w.jsx)(h.a.Label,{children:"Password Confirm"}),Object(w.jsx)(h.a.Control,{type:"password",ref:a})]}),Object(w.jsx)(p.a,{className:"w-100 mt-5",type:"submit",placeholder:"Leave to keep the same",disabled:y,children:"Update"})]})]})}),Object(w.jsx)("div",{className:"w-100 text-center mt-2",children:Object(w.jsx)(i.b,{to:"/",children:"Cancel"})})]})},R=function(){return Object(w.jsx)(S.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(w.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(w.jsx)(i.a,{children:Object(w.jsx)(y,{children:Object(w.jsxs)(j.d,{children:[Object(w.jsx)(L,{exact:!0,path:"/",component:C}),Object(w.jsx)(L,{path:"/update-profile",component:U}),Object(w.jsx)(j.b,{path:"/signup",component:N}),Object(w.jsx)(j.b,{path:"/login",component:P}),Object(w.jsx)(j.b,{path:"/forgot-password",component:E})]})})})})})};a(53);s.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(R,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.391ae9fa.chunk.js.map