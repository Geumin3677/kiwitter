(this.webpackJsonpkiwitter=this.webpackJsonpkiwitter||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),i=a(27),r=a.n(i),s=a(3),l=a(17),o=a(2),u=a(4),d=a.n(u),j=a(9),b=a(13);a(35),a(37),a(50);b.initializeApp({apiKey:"AIzaSyAXmcOvblZJn-KomDMuFSrAtljUbNWghrE",authDomain:"kiwitter-97c66.firebaseapp.com",projectId:"kiwitter-97c66",storageBucket:"kiwitter-97c66.appspot.com",messagingSenderId:"357198507774",appId:"1:357198507774:web:5c12d49f6bda5e11357faf"});var f=b,h=b.auth(),m=b.firestore(),O=b.storage(),p=(a(22),a(0)),x=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(""),r=Object(s.a)(i,2),l=r[0],o=r[1],u=Object(c.useState)(!0),b=Object(s.a)(u,2),f=b[0],m=b[1],O=Object(c.useState)(""),x=Object(s.a)(O,2),v=x[0],g=x[1],w=function(){var e=Object(j.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!f){e.next=8;break}return e.next=5,h.createUserWithEmailAndPassword(a,l);case 5:c=e.sent,e.next=11;break;case 8:return e.next=10,h.signInWithEmailAndPassword(a,l);case 10:c=e.sent;case 11:console.log(c),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),N=function(e){var t=e.target,a=t.name,c=t.value;"email"===a?n(c):"password"===a&&o(c)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"subtitle",children:f?"Create Account":"Sign up"}),Object(p.jsxs)("form",{onSubmit:w,className:"container",children:[Object(p.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:a,onChange:N,className:"AuthInput"}),Object(p.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:l,onChange:N,className:"AuthInput"}),Object(p.jsx)("input",{type:"submit",value:f?"Create Account":"Log In",className:"AuthSubmit"}),Object(p.jsx)("div",{className:"AuthError",children:v})]}),Object(p.jsx)("span",{className:"AuthSwitch",onClick:function(){return m((function(e){return!e}))},children:f?"Sign in":"Create Account"})]})},v=function(){var e=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new f.auth.GoogleAuthProvider,e.next=3,h.signInWithPopup(t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new f.auth.GithubAuthProvider,e.next=3,h.signInWithPopup(t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("script",{type:"module",src:"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"}),Object(p.jsx)("script",{nomodule:!0,src:"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"}),Object(p.jsxs)("div",{className:"Authbackground",children:[Object(p.jsx)("div",{className:"title",children:"KIWITTER"}),Object(p.jsx)(x,{}),Object(p.jsxs)("div",{className:"SocialLoginContainer",children:[Object(p.jsxs)("a",{className:"SocialLoginGoogle",onClick:e,name:"google",target:"_blank",rel:"nofollow",children:[Object(p.jsx)("span",{}),Object(p.jsx)("svg",{class:"SocialLoginIcon",fill:"none","aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"google",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 488 512",children:Object(p.jsx)("path",{fill:"currentColor",d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"})})]}),Object(p.jsxs)("a",{className:"SocialLoginGithub",onClick:t,name:"github",target:"_blank",rel:"nofollow",children:[Object(p.jsx)("span",{}),Object(p.jsx)("svg",{class:"SocialLoginIcon","aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",children:Object(p.jsx)("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})})]})]})]})]})},g=a(18),w=(a(42),a(23),function(e){var t=e.kiwittObj,a=e.isOwner,n=Object(c.useState)(!1),i=Object(s.a)(n,2),r=i[0],l=i[1],o=Object(c.useState)(t.text),u=Object(s.a)(o,2),b=u[0],f=u[1],h=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you Sure?")){e.next=6;break}return e.next=4,m.doc("kiwitts/".concat(t.id)).delete();case 4:return e.next=6,O.refFromURL(t.attUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){return l((function(e){return!e}))},v=function(){var e=Object(j.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,m.doc("kiwitts/".concat(t.id)).update({text:b});case 3:l(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{children:r?Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{className:"KiwittEditForm",onSubmit:v,children:[Object(p.jsx)("div",{className:"Text",children:Object(p.jsx)("input",{className:"KiwitMessage",type:"text",placeholder:"Edit your kiwitt",value:b,required:!0,onChange:function(e){var t=e.target.value;f(t)}})}),Object(p.jsxs)("div",{className:"EditBt",children:[Object(p.jsx)("input",{className:"Update_b",type:"submit",value:"Update"}),Object(p.jsx)("button",{className:"Cancel_b",onClick:x,children:"Cancel"})]})]})}):Object(p.jsxs)("div",{className:"KiwittContainer",children:[Object(p.jsxs)("div",{className:"KiwittInfo",children:[t.attUrl&&Object(p.jsx)("img",{className:"KiwittImg",src:t.attUrl}),Object(p.jsx)("div",{className:"KiwittText",children:t.text})]}),Object(p.jsxs)("div",{className:"KiwitterName",children:[t.creatorName,"\u318d",new Date(t.createdAt).getMonth(),"/",new Date(t.createdAt).getDate()," - ",new Date(t.createdAt).getHours(),":",new Date(t.createdAt).getMinutes(),":",new Date(t.createdAt).getSeconds()]}),a&&Object(p.jsxs)("div",{className:"KiwittBt",children:[Object(p.jsx)("button",{className:"KiwittBt_Delete",onClick:h,children:Object(p.jsx)("svg",{class:"KiwittBtIcon","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"trash",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(p.jsx)("path",{fill:"currentColor",d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"})})}),Object(p.jsx)("button",{className:"KiwittBt_Edit",onClick:x,children:Object(p.jsx)("svg",{class:"KiwittBtIcon","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"pencil-alt",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(p.jsx)("path",{fill:"currentColor",d:"M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"})})})]})]})})}),N=a(52),k=function(e){var t=e.userObj,a=Object(c.useState)(""),n=Object(s.a)(a,2),i=n[0],r=n[1],l=Object(c.useState)(""),o=Object(s.a)(l,2),u=o[0],b=o[1],f=function(){var e=Object(j.a)(d.a.mark((function e(a){var c,n,s,l,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n="",""===u){e.next=10;break}return s=O.ref().child("".concat(t.uid,"/").concat(Object(N.a)())),e.next=6,s.putString(u,"data_url");case 6:return l=e.sent,e.next=9,l.ref.getDownloadURL();case 9:n=e.sent;case 10:o={text:i,createdAt:Date.now(),creatorId:t.uid,attUrl:n,creatorName:(null===t||void 0===t||null===(c=t.displayName)||void 0===c?void 0:c.length)?"".concat(t.displayName):"User"},m.collection("kiwitts").add(o),r(""),b("");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("form",{onSubmit:f,className:"KiwittForm",children:[Object(p.jsxs)("div",{className:"Texts",children:[Object(p.jsx)("input",{id:"kiwitt_",className:"KiwitMessage","aria-hidden":"true",value:i,onChange:function(e){var t=e.target.value;r(t)},placeholder:"\uc5b4\ub5a4 \uc0dd\uac01\uc744 \ud558\uace0 \uacc4\uc2e0\uac00\uc694?",maxLength:120,required:!0}),Object(p.jsx)("input",{className:"Kiwitt_b",type:"submit",value:"Kiwitt"})]}),u&&Object(p.jsxs)("div",{className:"ImgContainer",children:[Object(p.jsx)("img",{src:u,className:"AddedImage"}),Object(p.jsx)("button",{className:"AddedImageBtt_Cancel",onClick:function(){return b(null)},children:"X"})]}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{className:"Buttons",children:Object(p.jsxs)("label",{for:"attach_file",class:"AddImage",children:[Object(p.jsx)("span",{children:"Add Image"}),Object(p.jsx)("input",{id:"attach_file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;b(t)},a.readAsDataURL(t)}})]})})]})},y=function(e){var t=e.userObj,a=Object(c.useState)([]),n=Object(s.a)(a,2),i=n[0],r=n[1];return Object(c.useEffect)((function(){m.collection("kiwitts").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(g.a)({id:e.id},e.data())}));r(t)}))}),[]),Object(p.jsxs)("div",{className:"KiwittsContainer",children:[Object(p.jsx)(k,{userObj:t}),Object(p.jsx)("div",{children:i.map((function(e){return Object(p.jsx)(w,{Key:e.id,kiwittObj:e,isOwner:e.creatorId===t.uid})}))})]})},C=(a(43),function(e){var t,a=e.userObj;return Object(p.jsx)("nav",{children:Object(p.jsxs)("div",{className:"NavigationBg",children:[Object(p.jsx)("a",{className:"Kiwitter",href:"#/",children:"KIWITTER"}),Object(p.jsx)("a",{className:"Home_n",href:"#/",children:"Home"}),Object(p.jsx)("a",{className:"Profile_n",href:"#/profile",children:(null===a||void 0===a||null===(t=a.displayName)||void 0===t?void 0:t.length)?"".concat(a.displayName," \ub2d8\uc758 Profile"):"Profile"})]})})}),S=(a(44),function(e){var t,a=e.refreshUser,n=e.userObj,i=Object(c.useState)(!1),r=Object(s.a)(i,2),l=r[0],u=r[1],b=Object(c.useState)([]),f=Object(s.a)(b,2),O=f[0],x=f[1],v=Object(o.g)(),N=Object(c.useState)(n.displayName),k=Object(s.a)(N,2),y=k[0],C=k[1],S=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n.displayName===y){e.next=6;break}return e.next=4,n.updateProfile({displayName:y});case 4:a(),I();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){return u((function(e){return!e}))};return Object(c.useEffect)((function(){m.collection("kiwitts").where("creatorId","==",n.uid).orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(g.a)({id:e.id},e.data())}));x(t)}))}),[]),Object(p.jsxs)("div",{className:"ProfileContainer",children:[l?Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{onSubmit:S,className:"ProfileForm",children:[Object(p.jsx)("input",{className:"ProfileFormNewname",onChange:function(e){var t=e.target.value;C(t)},type:"text",placeholder:"Display name",value:y}),Object(p.jsxs)("div",{className:"EditBt",children:[Object(p.jsx)("input",{className:"ProfileFormUpdate",type:"submit",value:"Update"}),Object(p.jsx)("button",{className:"ProfileFormCancel",onClick:I,children:"Cancel"})]})]})}):Object(p.jsxs)("div",{className:"Profile",children:[Object(p.jsx)("div",{className:"ProfileName",children:(null===n||void 0===n||null===(t=n.displayName)||void 0===t?void 0:t.length)?"".concat(n.displayName," \ub2d8\uc758 Profile"):"User \ub2d8\uc758 Profile"}),Object(p.jsx)("button",{className:"EditProfile",onClick:I,children:Object(p.jsx)("svg",{class:"KiwittBtIcon","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"pencil-alt",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(p.jsx)("path",{fill:"currentColor",d:"M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"})})})]}),Object(p.jsx)("div",{className:"MyKiwitt",children:Object(p.jsx)("div",{className:"MyKiwitt_t",children:"\ub098\uc758 KIWITT"})}),Object(p.jsx)("div",{children:O.map((function(e){return Object(p.jsx)(w,{Key:e.id,kiwittObj:e,isOwner:!1})}))}),Object(p.jsx)("button",{className:"LogoutBt",onClick:function(){h.signOut(),v.push("/"),a()},children:"Log Out"})]})}),I=function(e){var t=e.refreshUser,a=e.isLoggedIn,c=e.userObj;return Object(p.jsxs)(l.a,{children:[a&&Object(p.jsx)(C,{userObj:c}),Object(p.jsx)(o.d,{children:a?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(o.b,{exact:!0,path:"/",children:Object(p.jsx)(y,{userObj:c})}),Object(p.jsx)(o.b,{exact:!0,path:"/profile",children:Object(p.jsx)(S,{userObj:c,refreshUser:t})}),Object(p.jsx)(o.a,{from:"*",to:"/"})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/",children:Object(p.jsx)(v,{})}),Object(p.jsx)(o.a,{from:"*",to:"/"})]})})]})};var A=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(!1),r=Object(s.a)(i,2),l=r[0],o=r[1],u=Object(c.useState)(null),d=Object(s.a)(u,2),j=d[0],b=d[1];return Object(c.useEffect)((function(){h.onAuthStateChanged((function(e){e?(o(!0),b({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})):(o(!1),b(null)),n(!0)}))}),[]),Object(p.jsx)(p.Fragment,{children:a?Object(p.jsx)(I,{refreshUser:function(){var e=h.currentUser;b({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:l,userObj:j}):Object(p.jsx)("div",{className:"init",children:"Initializing..."})})};r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.fb0dff48.chunk.js.map