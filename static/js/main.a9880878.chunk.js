(this["webpackJsonpwould-you-rather"]=this["webpackJsonpwould-you-rather"]||[]).push([[0],{144:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(35),a=n.n(c),r=n(12),i=(n(144),n(13)),o=n(127),l=n(165),j=n(103),u=(n(149),n(18)),d=n(7),b=n.p+"static/media/sara.a8a1e723.jpg",f=n.p+"static/media/john.103fc5ba.jpg",O={sarahedo:{key:"sarahedo",text:"Sarah Edo",value:"Sarah Edo",image:{avatar:!0,src:b},answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"],password:"1234"},tylermcginnis:{key:"tylermcginnis",text:"Tyler McGinnis",value:"Tyler McGinnis",image:{avatar:!0,src:n.p+"static/media/tyler.e6a9ee54.jpg"},answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"],password:"1234"},johndoe:{key:"johndoe",text:"John Doe",value:"John Doe",image:{avatar:!0,src:f},answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"],password:"1234"}},h={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function x(e){return new Promise((function(t,n){var s=e.author,c=function(e){var t=e.optionOneText,n=e.optionTwoText,s=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:s,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);setTimeout((function(){h=Object(d.a)(Object(d.a)({},h),{},Object(u.a)({},c.id,c)),O=Object(d.a)(Object(d.a)({},O),{},Object(u.a)({},s,Object(d.a)(Object(d.a)({},O[s]),{},{questions:O[s].questions.concat([c.id])}))),t(c)}),1e3)}))}var m=function(e){var t=Object.keys(e),n=[];return t.forEach((function(t){n.push(e[t])})),n},p=function(e,t){Object(s.useEffect)((function(){e.logged||(t("/signin"),setTimeout((function(){return alert("Please login to view the app")}),100))}),[e,t])};var v="SIGN_IN",g="SIGN_OUT",w=function(e){return function(t){return function(e){return new Promise((function(t,n){setTimeout((function(){e,t()}),0)}))}(e).then((function(){return t(function(e){return{type:v,user:e,logged:!0}}(e))}))}},N=n(5),y=n(29),k=n(1),T=function(){var e=m(Object(i.c)((function(e){return e.users}))),t=Object(s.useState)(e[0].text),n=Object(r.a)(t,2),c=n[0],a=n[1],u=Object(s.useState)(e[0].image.src),d=Object(r.a)(u,2),b=d[0],f=d[1],O=Object(s.useState)(""),h=Object(r.a)(O,2),x=h[0],p=h[1],v=Object(s.useState)(!1),g=Object(r.a)(v,2),T=g[0],S=g[1],q=Object(i.b)(),z=Object(N.f)(),U=function(e,t){e.preventDefault(),x===t.password?q(w(t)).then((function(){return z("/")})):alert("Incorrect Password!")};return Object(k.jsxs)("div",{className:"signin container bg-dark text-white",children:[Object(k.jsx)(o.a,{src:b,centered:!0,circular:!0,size:"small"}),Object(k.jsxs)("div",{className:"dropdown flex container",children:[Object(k.jsxs)("span",{className:"fs-400 ff-sans-cond text-white",children:["Select Your User Name:",Object(k.jsx)(l.a,{className:"fs-400 ff-sans-normal text-white",inline:!0,options:e,defaultValue:e[0].value,onChange:function(e){a(e.currentTarget.textContent),f(e.currentTarget.firstChild.getAttribute("src"))}})]}),Object(k.jsx)("input",{className:"form-input bg-dark text-white fs-400 ff-sans-cond",type:"password",name:"password",value:x,onChange:function(e){/^[0-9\b]+$/.test(e.target.value)||""===e.target.value?p(e.target.value):S(!0),setTimeout((function(){return S(!1)}),5e3)},placeholder:"Password"}),Object(k.jsx)("div",{className:T?"":"hide",children:Object(k.jsx)(j.a,{basic:!0,color:"red",pointing:!0,children:"Please enter numbers only!"})})]}),Object(k.jsx)("div",{className:"underline-indicators container",children:Object(k.jsx)("button",{className:"d-block fs-500 ff-serif bg-dark text-accent",onClick:function(t){if(c)for(var n=0;n<e.length;n++){var s=e[n];s.text===c&&U(t,s)}else alert("Please Select Your User Name")},children:"Sign In"})}),Object(k.jsx)(y.b,{to:"/signup",className:"d-block fs-400 ff-serif bg-dark text-accent",children:"New User? Sign Up here."})]})},S=function(){var e=Object(i.c)((function(e){return e.signIn.user})),t=Object(s.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],o=Object(s.useState)(!1),l=Object(r.a)(o,2),j=l[0],u=l[1],d=Object(i.b)(),b=Object(N.f)(),f=function(){d({type:g,user:{},logged:!1}),b("/signin")};return Object(k.jsxs)("div",{className:"primary-header flex bg-dark",children:[Object(k.jsxs)("p",{className:"fs-300 ff-serif text-white user-name",children:["Welcome ",Object(k.jsx)("span",{className:"ff-serif fs-400 text-accent",children:e&&e.text}),"!"]}),Object(k.jsx)("button",{onClick:function(e){return function(e){e.preventDefault(),j?(u(!1),a(!1)):(u(!0),a(!0))}(e)},"aria-expanded":c,className:"mobile-nav-toggle",children:Object(k.jsx)("span",{className:"sr-only",children:"Menu"})}),Object(k.jsxs)("div",{"data-visible":j,className:"nav primary-navigation underline-indicators flex",children:[Object(k.jsx)(y.b,{to:"/",exact:"true",className:"fs-400 ff-sans-cond text-white",children:"Home"}),Object(k.jsx)(y.b,{to:"/new",className:"fs-400 ff-sans-cond text-white",children:"New Poll"}),Object(k.jsx)(y.b,{to:"/leaderboard",className:"fs-400 ff-sans-cond text-white",children:"Leaderboard"}),Object(k.jsx)(y.b,{to:"/signin",onClick:function(){return f()},className:"fs-400 ff-sans-cond text-white",children:"Sign Out"})]})]})},q=n(168),z=n(81),U=n(166),P=n(164),C="GET_QUESTIONS",E="ADD_QUESTION",D="ANSWER_QUESTION",I=function(){return function(e){return new Promise((function(e,t){setTimeout((function(){return e(Object(d.a)({},h))}),1e3)})).then((function(t){return e(function(e){return{type:C,questions:e}}(t))}))}},L=function(e){return function(t){return x(e).then((function(e){return t(function(e){return{type:E,question:e}}(e))}))}},R=function(e){return function(t){return function(e){var t=e.authedUser,n=e.qid,s=e.answer;return new Promise((function(e,c){setTimeout((function(){O=Object(d.a)(Object(d.a)({},O),{},Object(u.a)({},t,Object(d.a)(Object(d.a)({},O[t]),{},{answers:Object(d.a)(Object(d.a)({},O[t].answers),{},Object(u.a)({},n,s))}))),h=Object(d.a)(Object(d.a)({},h),{},Object(u.a)({},n,Object(d.a)(Object(d.a)({},h[n]),{},Object(u.a)({},s,Object(d.a)(Object(d.a)({},h[n][s]),{},{votes:h[n][s].votes.concat([t])}))))),e()}),500)}))}(e).then((function(){return t(function(e){return{type:D,authedUser:e.authedUser,qid:e.qid,answer:e.answer}}(e))}))}},A=function(e){var t=e.viewed,n=e.poll,c=n.id,a=n.author,l=n.optionOne,j=n.optionTwo,u=Object(i.c)((function(e){return e.users})),d=Object(i.c)((function(e){return e.signIn.user})),b=Object(s.useState)(!1),f=Object(r.a)(b,2),O=f[0],h=f[1],x=Object(s.useState)(""),m=Object(r.a)(x,2),p=m[0],v=m[1],g=Object(s.useState)(!1),w=Object(r.a)(g,2),T=w[0],S=w[1];Object(s.useEffect)((function(){l.votes.includes(d.key)||j.votes.includes(d.key)?h(!0):h(!1)}),[]);var C=Object(N.f)(),E=Object(i.b)(),D=u[a],I=l.votes.length,L=j.votes.length,A=I+L;return Object(k.jsxs)("div",{className:"flex text-white card ff-serif",children:[Object(k.jsxs)("div",{className:"card-header flex",children:[Object(k.jsxs)("p",{className:"fs-400",children:[D.text," asked:"]}),t&&Object(k.jsx)(q.a,{icon:!0,floated:"right",size:"mini",compact:!0,circular:!0,onClick:function(e){return function(e){e.preventDefault(),C(-1)}(e)},children:Object(k.jsx)(z.a,{name:"left arrow"})})]}),Object(k.jsxs)("div",{className:"card-content flex",children:[Object(k.jsx)("div",{className:"card-img",children:Object(k.jsx)(o.a,{src:D.image.src,alt:"user avatar",size:"massive",avatar:!0,wrapped:!0})}),Object(k.jsxs)("div",{className:"card-info",children:[!t&&Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{className:"uppercase text-accent",children:"Would You Rather?"}),Object(k.jsxs)("p",{className:"fs-400 ff-sans-cond",children:[n.optionOne.text," or ..."]}),Object(k.jsx)(y.b,{className:"button d-block fs-500 ff-serif bg-trans text-accent",to:"/poll/".concat(n.id),children:"View"})]}),t&&O&&Object(k.jsxs)("div",{className:"flex col",children:[Object(k.jsx)("p",{children:"Would You Rather?"}),Object(k.jsxs)("div",{className:n.optionOne.votes.includes(d.key)?"selected-answer flex col card-answer":"not-selected-answer flex col card-answer",children:[Object(k.jsx)("p",{children:n.optionOne.text}),Object(k.jsx)("div",{className:"prog",children:Object(k.jsx)(U.a,{inverted:!0,percent:Math.round(I/A*100),progress:!0,indicating:!0})}),Object(k.jsxs)("p",{children:[I," out of ",A," votes"]})]}),Object(k.jsxs)("div",{className:n.optionTwo.votes.includes(d.key)?"selected-answer flex col card-answer":"not-selected-answer flex col card-answer",children:[Object(k.jsx)("p",{children:n.optionTwo.text}),Object(k.jsx)("div",{className:"prog",children:Object(k.jsx)(U.a,{inverted:!0,percent:Math.round(L/A*100),progress:!0,indicating:!0})}),Object(k.jsxs)("p",{children:[L," out of ",A," votes"]})]})]}),t&&!1===O&&Object(k.jsx)("form",{onSubmit:function(e){return function(e){if(e.preventDefault(),""!==p){S(!0);var t={authedUser:d.key,qid:c,answer:p};E(R(t)).then((function(){h(!0),S(!1)}))}else alert("Please choose an answer!")}(e)},className:"flow form",children:T?Object(k.jsxs)("div",{className:"grid relative",children:[Object(k.jsx)("div",{children:Object(k.jsx)(P.a,{active:!0,size:"massive"})}),Object(k.jsx)("span",{className:"fs-500 ff-serif text-accent loading",children:"Loading Data..."})]}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("p",{children:"Would You Rather?"}),Object(k.jsxs)("div",{className:"flex",children:[Object(k.jsx)("input",{type:"radio",id:"optionOne",name:"options",value:n.optionOne.text,onChange:function(e){return v(e.target.id)}}),Object(k.jsx)("label",{className:"ff-sans-cond fs-400",htmlFor:"optionOne",children:n.optionOne.text})]}),Object(k.jsxs)("div",{className:"flex",children:[Object(k.jsx)("input",{type:"radio",id:"optionTwo",name:"options",value:n.optionTwo.text,onChange:function(e){return v(e.target.id)}}),Object(k.jsx)("label",{className:"ff-sans-cond fs-400",htmlFor:"optionTwo",children:n.optionTwo.text})]}),Object(k.jsx)("button",{type:"submit",className:"bg-trans text-accent button",children:"Submit"})]})})]})]})]})},F=function(){var e=Object(i.c)((function(e){return e.questions})),t=Object(i.c)((function(e){return e.signIn})),n=Object(s.useState)(!1),c=Object(r.a)(n,2),a=c[0],o=c[1],l=Object(N.f)(),j=[],u=[];return Object.keys(e).forEach((function(n){e[n].optionTwo.votes.includes(t.user.key)||e[n].optionOne.votes.includes(t.user.key)?j.push(e[n]):u.push(e[n])})),j.sort((function(e,t){return t.timestamp-e.timestamp})),u.sort((function(e,t){return t.timestamp-e.timestamp})),p(t,l),Object(k.jsxs)("div",{className:"fill bg-dark",children:[Object(k.jsx)(S,{}),Object(k.jsxs)("div",{className:"home-menu flex bg-black underline-indicators",children:[Object(k.jsx)("button",{className:a?"active bg-trans":"bg-trans text-accent",onClick:function(){return o(!0)},children:"Answered"}),Object(k.jsx)("button",{className:a?"bg-trans text-accent":"active bg-trans",onClick:function(){return o(!1)},children:"Not Answered"})]}),Object(k.jsx)("ul",{className:"cards-container",children:!0===a?j.map((function(e){return Object(k.jsx)("li",{children:Object(k.jsx)(A,{poll:e,answered:!0})},e.id)})):u.map((function(e){return Object(k.jsx)("li",{children:Object(k.jsx)(A,{poll:e,answered:!1})},e.id)}))})]})},G=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),o=Object(r.a)(a,2),l=o[0],j=o[1],u=Object(s.useState)(!1),d=Object(r.a)(u,2),b=d[0],f=d[1],O=Object(i.c)((function(e){return e.signIn})),h=Object(N.f)();p(O,h);var x=Object(i.b)();return Object(k.jsxs)("div",{className:"fill new",children:[Object(k.jsx)(S,{}),Object(k.jsxs)("div",{className:"card text-white flex",children:[Object(k.jsx)("div",{className:"card-header",children:Object(k.jsxs)("p",{children:["Posting as ",O.user.text]})}),Object(k.jsx)("form",{className:"flow form",onSubmit:function(e){return function(e){e.preventDefault(),f(!0);var t={optionOneText:n,optionTwoText:l,author:O.user.key};x(L(t)).then((function(){h("/"),f(!1)}))}(e)},children:b?Object(k.jsxs)("div",{className:"grid relative",children:[Object(k.jsx)("div",{children:Object(k.jsx)(P.a,{active:!0,size:"massive"})}),Object(k.jsx)("span",{className:"fs-500 ff-serif text-accent loading",children:"Submitting"})]}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{className:"form flex",children:[Object(k.jsx)("p",{className:"text-accent",children:"Would You Rather?"}),Object(k.jsx)("input",{className:"form-input bg-dark text-white fs-400 ff-sans-cond",type:"text",placeholder:"Enter Option One",value:n,onChange:function(e){return c(e.target.value)}}),Object(k.jsx)("p",{children:"Or"}),Object(k.jsx)("input",{className:"form-input bg-dark text-white fs-400 ff-sans-cond",type:"text",placeholder:"Enter Option Two",value:l,onChange:function(e){return j(e.target.value)}})]}),Object(k.jsx)("button",{className:"button d-block fs-500 ff-serif bg-trans text-accent",type:"submit",children:"Submit"})]})})]})]})},M=function(e){var t=e.user,n=m(t.answers).length,s=t.questions.length,c=n+s;return Object(k.jsxs)("div",{className:"card text-white ff-serif flex",children:[Object(k.jsx)("div",{className:"card-header",children:Object(k.jsxs)("p",{className:"fs-400",children:["User Name: ",Object(k.jsx)("span",{className:"text-accent",children:t.text})]})}),Object(k.jsxs)("div",{className:"card-content flex",children:[Object(k.jsx)("div",{className:"card-img",children:Object(k.jsx)(o.a,{src:t.image.src,size:"massive",avatar:!0,wrapped:!0})}),Object(k.jsxs)("div",{className:"card-info",children:[Object(k.jsxs)("div",{className:"flex",children:[Object(k.jsx)("p",{className:"fs-400",children:"Answered Questions "}),Object(k.jsx)("span",{className:"text-accent",children:n})]}),Object(k.jsxs)("div",{className:"flex",children:[Object(k.jsx)("p",{className:"fs-400",children:"Created Questions "}),Object(k.jsx)("span",{className:"text-accent",children:s})]})]})]}),Object(k.jsx)("div",{className:"card-fotter",children:Object(k.jsxs)("p",{children:["Total Score ",Object(k.jsx)("span",{className:"text-accent",children:c})]})})]})},W=function(){var e=Object(i.c)((function(e){return e.users})),t=m(e).map((function(e){var t=m(e.answers).length+e.questions.length;return Object(d.a)(Object(d.a)({},e),{},{score:t})})).sort((function(e,t){return t.score-e.score})),n=Object(i.c)((function(e){return e.signIn})),s=Object(N.f)();return p(n,s),Object(k.jsxs)("div",{className:"fill",children:[Object(k.jsx)(S,{}),Object(k.jsx)("ul",{className:"cards-container",children:t.map((function(e){return Object(k.jsx)("li",{children:Object(k.jsx)(M,{user:e})},e.key)}))})]})},_="GET_USERS",Y="ADD_USER",J=function(){return function(e){return new Promise((function(e,t){setTimeout((function(){return e(Object(d.a)({},O))}),1e3)})).then((function(t){return e({type:_,users:t})}))}},Q=function(e){return function(t){return function(e){return new Promise((function(t,n){var s=function(e){var t=e.url,n=e.username,s=e.password;return{key:n.toLowerCase().replace(/\s/g,""),text:n,value:n,image:{avatar:!0,src:t},answers:{},questions:[],password:s}}(e);setTimeout((function(){O=Object(d.a)(Object(d.a)({},O),{},Object(u.a)({},s.key,s)),t(s)}),1e3)}))}(e).then((function(e){return t(function(e){return{type:Y,user:e}}(e))}))}},$=n(167),B=function(){var e=Object(N.f)(),t=Object(i.c)((function(e){return e.signIn}));p(t,e);var n=Object(N.g)().id,s=Object(i.c)((function(e){return e.questions})),c=s[n];return c?Object(k.jsxs)("div",{className:"container fill",children:[Object(k.jsx)(S,{}),Object(k.jsx)("div",{className:"poll-view",children:Object(k.jsx)(A,{poll:c,viewed:!0})})]}):Object(k.jsxs)("div",{className:"container fill",children:[Object(k.jsx)(S,{}),Object(k.jsxs)($.a,{negative:!0,size:"massive",children:[Object(k.jsx)($.a.Header,{children:"We're sorry we couldn't find this poll"}),Object(k.jsx)("p",{children:"Error 404 NOT FOUND"}),Object(k.jsx)(q.a,{labelPosition:"right",label:"Go back",icon:!0,floated:"left",compact:!0,circular:!0,onClick:function(t){return function(t){t.preventDefault(),e(-1)}(t)},children:Object(k.jsx)(z.a,{name:"left arrow"})})]})]})},H=n.p+"static/media/profile.9f4aa540.png",V=n(123),K=function(){var e=Object(s.useState)(null),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),l=Object(r.a)(a,2),u=l[0],d=l[1],b=Object(s.useState)(""),f=Object(r.a)(b,2),O=f[0],h=f[1],x=Object(s.useState)(!1),m=Object(r.a)(x,2),p=m[0],v=m[1],g=Object(s.useState)(!1),w=Object(r.a)(g,2),y=w[0],T=w[1],S=Object(i.b)(),z=Object(N.f)();return Object(k.jsxs)("div",{className:"flex col text-white",children:[Object(k.jsx)(q.a,{label:"Back to Login",color:"facebook",icon:"left arrow",size:"small",onClick:function(){return z("/signin")}}),Object(k.jsxs)("form",{className:"form flex",onSubmit:function(e){return function(e){e.preventDefault(),n?""!==u?""===O||O.length<4?alert("Password should be 4 characters long!"):(T(!0),S(Q({url:n,username:u,password:O})).then((function(){setTimeout((function(){z("/signin"),T(!1)}),300)}))):alert("Please add a user name!"):alert("Please choose a profile picture!")}(e)},children:[Object(k.jsx)(o.a,{src:n||H,avatar:!0,size:"small"}),Object(k.jsx)("input",{type:"file",onChange:function(e){return c(window.URL.createObjectURL(e.target.files[0]))}}),Object(k.jsx)("label",{htmlFor:"user-name",children:"User Name"}),Object(k.jsx)("input",{className:"form-input bg-dark text-white fs-400 ff-sans-cond",id:"user-name",name:"user-name",value:u,type:"text",placeholder:"User Name",onChange:function(e){return d(e.target.value)}}),Object(k.jsx)("label",{htmlFor:"password",children:"Password"}),Object(k.jsx)("input",{className:"form-input bg-dark text-white fs-400 ff-sans-cond",id:"password",name:"password",value:O,type:"password",placeholder:"Password",onChange:function(e){/^[0-9\b]+$/.test(e.target.value)||""===e.target.value?h(e.target.value):v(!0),setTimeout((function(){return v(!1)}),5e3)}}),Object(k.jsx)(V.a,{className:"text-accent fs-200 ff-sans-cond",rules:["minLength"],value:O,minLength:4,iconSize:10,messages:{minLength:"Password should be 4 characters long!"}}),Object(k.jsx)("div",{className:p?"":"hide",children:Object(k.jsx)(j.a,{basic:!0,color:"red",pointing:!0,children:"Please enter numbers only!"})}),Object(k.jsx)("button",{disabled:y,type:"submit",className:"button bg-trans text-accent",children:y?Object(k.jsx)(P.a,{active:!0,inverted:!0,size:"small"}):"Sign Up"})]})]})},X=function(){var e=Object(s.useState)(!0),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.c)((function(e){return e.signIn})),o=Object(i.b)(),l=Object(N.f)();return Object(s.useEffect)((function(){o(J()).then((function(){return o(I())})).then((function(){return c(!1)})),a||l("/signin")}),[o]),Object(k.jsx)(s.Fragment,{children:Object(k.jsx)("div",{children:!0===n?Object(k.jsxs)("div",{className:"grid",children:[Object(k.jsx)("div",{children:Object(k.jsx)(P.a,{active:!0,size:"massive"})}),Object(k.jsx)("span",{className:"fs-500 ff-serif text-dark loading",children:"Loading Data..."})]}):Object(k.jsxs)(N.c,{children:[Object(k.jsx)(N.a,{path:"/",element:Object(k.jsx)(F,{})}),Object(k.jsx)(N.a,{path:"/signin",element:Object(k.jsx)(T,{})}),Object(k.jsx)(N.a,{path:"/signup",element:Object(k.jsx)(K,{})}),Object(k.jsx)(N.a,{path:"/new",element:Object(k.jsx)(G,{})}),Object(k.jsx)(N.a,{path:"/leaderboard",element:Object(k.jsx)(W,{})}),Object(k.jsx)(N.a,{path:"/poll/:id",element:Object(k.jsx)(B,{})})]})})})},Z=n(71),ee=Object(Z.b)({signIn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{},logged:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:case g:return{user:t.user,logged:t.logged};default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return t.users;case E:return Object(d.a)(Object(d.a)({},e),{},Object(u.a)({},t.question.author,Object(d.a)(Object(d.a)({},e[t.question.author]),{},{questions:e[t.question.author].questions.concat([t.authedUser])})));case D:return Object(d.a)(Object(d.a)({},e),{},Object(u.a)({},t.authedUser,Object(d.a)(Object(d.a)({},e[t.authedUser]),{},{answers:Object(d.a)(Object(d.a)({},e[t.authedUser].answers),{},Object(u.a)({},t.qid,t.answer))})));case Y:return Object(d.a)(Object(d.a)({},e),{},Object(u.a)({},t.user.key,t.user));default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return t.questions;case E:return Object(d.a)(Object(d.a)({},e),{},Object(u.a)({},t.question.id,t.question));case D:return Object(d.a)(Object(d.a)({},e),{},Object(u.a)({},t.qid,Object(d.a)(Object(d.a)({},e[t.qid]),{},Object(u.a)({},t.answer,Object(d.a)(Object(d.a)({},e[t.qid][t.answer]),{},{votes:e[t.qid][t.answer].votes.concat([t.authedUser])})))));default:return e}}}),te=n(126),ne=function(e){return function(t){return function(n){console.group(n.type),console.log("The Action: ",n);var s=t(n);return console.log("The New State: ",e.getState()),console.groupEnd(),s}}},se=Object(Z.a)(te.a,ne),ce=Object(Z.c)(ee,se);a.a.render(Object(k.jsx)(y.a,{children:Object(k.jsx)(i.a,{store:ce,children:Object(k.jsx)(X,{})})}),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.a9880878.chunk.js.map