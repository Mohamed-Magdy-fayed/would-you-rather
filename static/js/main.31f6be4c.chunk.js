(this["webpackJsonpwould-you-rather"]=this["webpackJsonpwould-you-rather"]||[]).push([[0],{139:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(35),a=n.n(s),r=n(14),i=(n(139),n(12)),o=n(122),l=n(159),j=(n(144),n(19)),u=n(7),d={sarahedo:{key:"sarahedo",text:"Sarah Edo",value:"Sarah Edo",image:{avatar:!0,src:"./favicon.ico"},answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{key:"tylermcginnis",text:"Tyler McGinnis",value:"Tyler McGinnis",image:{avatar:!0,src:"./favicon.ico"},answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{key:"johndoe",text:"John Doe",value:"John Doe",image:{avatar:!0,src:"./favicon.ico"},answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},b={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function f(e){return new Promise((function(t,n){var c=e.author,s=function(e){var t=e.optionOneText,n=e.optionTwoText,c=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:c,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);setTimeout((function(){b=Object(u.a)(Object(u.a)({},b),{},Object(j.a)({},s.id,s)),d=Object(u.a)(Object(u.a)({},d),{},Object(j.a)({},c,Object(u.a)(Object(u.a)({},d[c]),{},{questions:d[c].questions.concat([s.id])}))),t(s)}),1e3)}))}var O=function(e){var t=Object.keys(e),n=[];return t.forEach((function(t){n.push(e[t])})),n},x=function(e,t){Object(c.useEffect)((function(){e.logged||(t("/signin"),setTimeout((function(){return alert("Please login to view the app")}),100))}),[e,t])};var h="SIGN_IN",m="SIGN_OUT",p=function(e){return function(t){return function(e){return new Promise((function(t,n){setTimeout((function(){e,t()}),0)}))}(e).then((function(){return t(function(e){return{type:h,user:e,logged:!0}}(e))}))}},v=n(5),g=n(1),w=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(null),j=Object(r.a)(a,2),u=j[0],d=j[1],b=Object(i.b)(),f=Object(v.f)(),x=Object(i.c)((function(e){return e.users})),h=Object(i.c)((function(e){return e.signIn}));Object(c.useEffect)((function(){var e=O(x);s(e),h.logged&&f("/")}),[]);var m=function(e,t){e.preventDefault(),b(p(t)).then((function(){return f("/")}))};return Object(g.jsxs)("div",{className:"signin container bg-dark text-white",children:[Object(g.jsx)(o.a,{src:"./favicon.ico",centered:!0,circular:!0,size:"small"}),Object(g.jsxs)("div",{className:"dropdown flex container",children:[Object(g.jsx)("span",{className:"fs-400 ff-sans-cond text-white",children:"Select Your User Name:"}),Object(g.jsx)(l.a,{className:"fs-400 ff-sans-normal text-white",options:n,onChange:function(e){d(e.currentTarget.textContent)}})]}),Object(g.jsx)("div",{className:"underline-indicators container",children:Object(g.jsx)("button",{className:"d-block fs-500 ff-serif bg-dark text-accent",onClick:function(e){if(u)for(var t=0;t<n.length;t++){var c=n[t];c.text===u&&m(e,c)}else alert("Please Select Your User Name")},children:"Sign In"})})]})},N=n(27),y=function(){var e=Object(i.c)((function(e){return e.signIn.user})),t=Object(c.useState)(!0),n=Object(r.a)(t,2),s=n[0],a=(n[1],Object(i.b)()),o=Object(v.f)(),l=function(){a({type:m,user:{},logged:!1}),o("/signin")};return s?Object(g.jsxs)("div",{className:"primary-header flex bg-dark",children:[Object(g.jsxs)("p",{className:"fs-300 ff-serif text-white user-name",children:["Welcome ",Object(g.jsx)("span",{className:"ff-serif fs-400 text-accent",children:e&&e.text}),"!"]}),Object(g.jsx)("button",{onClick:function(e){return function(e){e.preventDefault();var t=document.querySelector(".mobile-nav-toggle"),n=document.querySelector(".primary-navigation");"false"===n.getAttribute("data-visible")?(n.setAttribute("data-visible",!0),t.setAttribute("aria-expanded",!0)):(n.setAttribute("data-visible",!1),t.setAttribute("aria-expanded",!1))}(e)},"aria-expanded":"false",className:"mobile-nav-toggle",children:Object(g.jsx)("span",{className:"sr-only",children:"Menu"})}),Object(g.jsxs)("div",{"datatype-visible":"false",className:"nav primary-navigation underline-indicators flex",children:[Object(g.jsx)(N.b,{to:"/",exact:"true",className:"ff-sans-cond uppercase text-white letter-spacing-2",children:"Home"}),Object(g.jsx)(N.b,{to:"/new",className:"ff-sans-cond uppercase text-white letter-spacing-2",children:"New Poll"}),Object(g.jsx)(N.b,{to:"/leaderboard",className:"ff-sans-cond uppercase text-white letter-spacing-2",children:"Leaderboard"}),Object(g.jsx)(N.b,{to:"/signin",onClick:function(){return l()},className:"container fs-400 ff-sans-cond",children:Object(g.jsx)("span",{className:"text-accent",children:"Sign Out"})})]})]}):Object(g.jsxs)("div",{className:"nav",children:[Object(g.jsx)(N.b,{to:"/",exact:"true",className:"text-dark bg-accent container fs-400 ff-sans-cond",children:"Home"}),Object(g.jsx)(N.b,{to:"/new",className:"text-dark bg-accent container fs-400 ff-sans-cond",children:"New Poll"}),Object(g.jsx)(N.b,{to:"/leaderboard",className:"text-dark bg-accent container fs-400 ff-sans-cond",children:"Leaderboard"}),Object(g.jsxs)("p",{className:"fs-300 ff-serif",children:["Welcome ",e&&e.text," !"]}),Object(g.jsx)(N.b,{to:"/signin",onClick:function(){return l()},className:"text-dark bg-accent container fs-400 ff-sans-cond",children:"Sign Out"})]})},k=n(162),T=n(77),q=n(160),S="GET_QUESTIONS",z="ADD_QUESTION",E="ANSWER_QUESTION",I=function(){return function(e){return new Promise((function(e,t){setTimeout((function(){return e(Object(u.a)({},b))}),1e3)})).then((function(t){return e(function(e){return{type:S,questions:e}}(t))}))}},U=function(e){return function(t){return f(e).then((function(e){return t(function(e){return{type:z,question:e}}(e))}))}},C=function(e){return function(t){return function(e){var t=e.authedUser,n=e.qid,c=e.answer;return new Promise((function(e,s){setTimeout((function(){d=Object(u.a)(Object(u.a)({},d),{},Object(j.a)({},t,Object(u.a)(Object(u.a)({},d[t]),{},{answers:Object(u.a)(Object(u.a)({},d[t].answers),{},Object(j.a)({},n,c))}))),b=Object(u.a)(Object(u.a)({},b),{},Object(j.a)({},n,Object(u.a)(Object(u.a)({},b[n]),{},Object(j.a)({},c,Object(u.a)(Object(u.a)({},b[n][c]),{},{votes:b[n][c].votes.concat([t])}))))),e()}),500)}))}(e).then((function(){return t(function(e){return{type:E,authedUser:e.authedUser,qid:e.qid,answer:e.answer}}(e))}))}},D=function(e){var t=e.viewed,n=e.poll,s=n.id,a=n.author,l=n.optionOne,j=n.optionTwo,u=Object(i.c)((function(e){return e.users})),d=Object(i.c)((function(e){return e.signIn.user})),b=Object(c.useState)(!1),f=Object(r.a)(b,2),O=f[0],x=f[1],h=Object(c.useState)(""),m=Object(r.a)(h,2),p=m[0],w=m[1];Object(c.useEffect)((function(){l.votes.includes(d.key)||j.votes.includes(d.key)?x(!0):x(!1)}),[]);var y=Object(v.f)(),S=Object(i.b)(),z=u[a],E=l.votes.length,I=j.votes.length,U=E+I;return Object(g.jsxs)("div",{className:"flex text-white card ff-serif",children:[Object(g.jsxs)("div",{className:"card-header flex",children:[Object(g.jsxs)("p",{className:"fs-400",children:[z.text," asked:"]}),t&&Object(g.jsx)(k.a,{icon:!0,floated:"right",size:"mini",compact:!0,circular:!0,onClick:function(e){return function(e){e.preventDefault(),y(-1)}(e)},children:Object(g.jsx)(T.a,{name:"left arrow"})})]}),Object(g.jsxs)("div",{className:"card-content flex",children:[Object(g.jsx)("div",{className:"card-img",children:Object(g.jsx)(o.a,{src:".././favicon.ico",alt:"user avatar",circular:!0})}),Object(g.jsxs)("div",{className:"card-info",children:[!t&&Object(g.jsxs)("div",{children:[Object(g.jsx)("p",{className:"uppercase text-accent",children:"Would You Rather?"}),Object(g.jsxs)("p",{className:"fs-400 ff-sans-cond",children:[n.optionOne.text," or ..."]}),Object(g.jsx)(N.b,{className:"button d-block fs-500 ff-serif bg-trans text-accent",to:"/poll/".concat(n.id),children:"View"})]}),t&&O&&Object(g.jsxs)("div",{className:"flex col",children:[Object(g.jsx)("p",{children:"Would You Rather?"}),Object(g.jsxs)("div",{className:n.optionOne.votes.includes(d.key)?"selected-answer flex col card-answer":"not-selected-answer flex col card-answer",children:[Object(g.jsx)("p",{children:n.optionOne.text}),Object(g.jsx)("div",{className:"prog",children:Object(g.jsx)(q.a,{inverted:!0,percent:Math.round(E/U*100),progress:!0,indicating:!0})}),Object(g.jsxs)("p",{children:[E," out of ",U," votes"]})]}),Object(g.jsxs)("div",{className:n.optionTwo.votes.includes(d.key)?"selected-answer flex col card-answer":"not-selected-answer flex col card-answer",children:[Object(g.jsx)("p",{children:n.optionTwo.text}),Object(g.jsx)("div",{className:"prog",children:Object(g.jsx)(q.a,{inverted:!0,percent:Math.round(I/U*100),progress:!0,indicating:!0})}),Object(g.jsxs)("p",{children:[I," out of ",U," votes"]})]})]}),t&&!1===O&&Object(g.jsxs)("form",{onSubmit:function(e){return function(e){if(e.preventDefault(),""!==p){var t={authedUser:d.key,qid:s,answer:p};S(C(t)).then((function(){x(!0)}))}else alert("Please choose an answer!")}(e)},className:"flow form",children:[Object(g.jsx)("p",{children:"Would You Rather?"}),Object(g.jsxs)("div",{className:"flex",children:[Object(g.jsx)("input",{type:"radio",id:"optionOne",name:"options",value:n.optionOne.text,onChange:function(e){return w(e.target.id)}}),Object(g.jsx)("p",{className:"ff-sans-cond fs-400",children:n.optionOne.text})]}),Object(g.jsxs)("div",{className:"flex",children:[Object(g.jsx)("input",{type:"radio",id:"optionTwo",name:"options",value:n.optionTwo.text,onChange:function(e){return w(e.target.id)}}),Object(g.jsx)("p",{className:"ff-sans-cond fs-400",children:n.optionTwo.text})]}),Object(g.jsx)("button",{type:"submit",className:"bg-trans text-accent button",children:"Submit"})]})]})]})]})},P=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(i.c)((function(e){return e.questions})),o=Object(i.c)((function(e){return e.signIn})),l=Object(v.f)(),j=[],u=[];return Object.keys(a).forEach((function(e){a[e].optionTwo.votes.includes(o.user.key)||a[e].optionOne.votes.includes(o.user.key)?j.push(a[e]):u.push(a[e])})),j.sort((function(e,t){return t.timestamp-e.timestamp})),u.sort((function(e,t){return t.timestamp-e.timestamp})),x(o,l),Object(g.jsxs)("div",{className:"fill bg-dark",children:[Object(g.jsx)(y,{}),Object(g.jsxs)("div",{className:"home-menu flex bg-black underline-indicators",children:[Object(g.jsx)("button",{className:n?"active bg-trans":"bg-trans text-accent",onClick:function(){return s(!0)},children:"Answered"}),Object(g.jsx)("button",{className:n?"bg-trans text-accent":"active bg-trans",onClick:function(){return s(!1)},children:"Not Answered"})]}),Object(g.jsx)("ul",{className:"flow cards-container",children:!0===n?j.map((function(e){return Object(g.jsx)("li",{children:Object(g.jsx)(D,{poll:e,answered:!0})},e.id)})):u.map((function(e){return Object(g.jsx)("li",{children:Object(g.jsx)(D,{poll:e,answered:!1})},e.id)}))})]})},A=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),o=Object(r.a)(a,2),l=o[0],j=o[1],u=Object(i.c)((function(e){return e.signIn})),d=Object(v.f)();x(u,d);var b=Object(i.b)();return Object(g.jsxs)("div",{className:"fill new",children:[Object(g.jsx)(y,{}),Object(g.jsxs)("div",{className:"card text-white flex",children:[Object(g.jsx)("div",{className:"card-header",children:Object(g.jsxs)("p",{children:["Posting as ",u.user.text]})}),Object(g.jsxs)("form",{className:"flow form",onSubmit:function(e){return function(e){e.preventDefault();var t={optionOneText:n,optionTwoText:l,author:u.user.key};console.log(t),b(U(t)),d("/")}(e)},children:[Object(g.jsxs)("div",{className:"form flex",children:[Object(g.jsx)("p",{className:"text-accent",children:"Would You Rather?"}),Object(g.jsx)("input",{className:"form-input bg-dark text-white fs-400 ff-sans-cond",type:"text",placeholder:"Enter Option One",value:n,onChange:function(e){return s(e.target.value)}}),Object(g.jsx)("p",{children:"Or"}),Object(g.jsx)("input",{className:"form-input bg-dark text-white fs-400 ff-sans-cond",type:"text",placeholder:"Enter Option Two",value:l,onChange:function(e){return j(e.target.value)}})]}),Object(g.jsx)("button",{className:"button d-block fs-500 ff-serif bg-trans text-accent",type:"submit",children:"Submit"})]})]})]})},W=function(e){var t=e.user,n=O(t.answers).length,c=t.questions.length,s=n+c;return Object(g.jsxs)("div",{className:"card text-white ff-serif flex",children:[Object(g.jsx)("div",{className:"card-header",children:Object(g.jsxs)("p",{className:"fs-400",children:["User Name: ",Object(g.jsx)("span",{className:"text-accent",children:t.text})]})}),Object(g.jsxs)("div",{className:"card-content flex",children:[Object(g.jsx)("div",{className:"card-img",children:Object(g.jsx)(o.a,{src:".././favicon.ico",avatar:!0,size:"small"})}),Object(g.jsxs)("div",{className:"card-info",children:[Object(g.jsxs)("div",{className:"flex",children:[Object(g.jsx)("p",{className:"fs-400",children:"Answered Questions "}),Object(g.jsx)("span",{className:"text-accent",children:n})]}),Object(g.jsxs)("div",{className:"flex",children:[Object(g.jsx)("p",{className:"fs-400",children:"Created Questions "}),Object(g.jsx)("span",{className:"text-accent",children:c})]})]})]}),Object(g.jsx)("div",{className:"card-fotter",children:Object(g.jsxs)("p",{children:["Total Score ",Object(g.jsx)("span",{className:"text-accent",children:s})]})})]})},G=function(){var e=Object(i.c)((function(e){return e.users})),t=O(e).map((function(e){var t=O(e.answers).length+e.questions.length;return Object(u.a)(Object(u.a)({},e),{},{score:t})})).sort((function(e,t){return t.score-e.score})),n=Object(i.c)((function(e){return e.signIn})),c=Object(v.f)();return x(n,c),Object(g.jsxs)("div",{className:"fill",children:[Object(g.jsx)(y,{}),Object(g.jsx)("ul",{className:"flow cards-container",children:t.map((function(e){return Object(g.jsx)("li",{children:Object(g.jsx)(W,{user:e})},e.key)}))})]})},M="GET_USERS",R=function(){return function(e){return new Promise((function(e,t){setTimeout((function(){return e(Object(u.a)({},d))}),1e3)})).then((function(t){return e({type:M,users:t})}))}},Y=n(158),_=n(161),J=function(){var e=Object(v.f)(),t=Object(i.c)((function(e){return e.signIn}));x(t,e);var n=Object(v.g)().id,c=Object(i.c)((function(e){return e.questions})),s=c[n];return s?Object(g.jsxs)("div",{className:"container fill",children:[Object(g.jsx)(y,{}),Object(g.jsx)(D,{poll:s,viewed:!0})]}):Object(g.jsxs)("div",{className:"container fill",children:[Object(g.jsx)(y,{}),Object(g.jsxs)(_.a,{negative:!0,size:"massive",children:[Object(g.jsx)(_.a.Header,{children:"We're sorry we couldn't find this poll"}),Object(g.jsx)("p",{children:"Error 404 NOT FOUND"}),Object(g.jsx)(k.a,{labelPosition:"right",label:"Go back",icon:!0,floated:"left",compact:!0,circular:!0,onClick:function(t){return function(t){t.preventDefault(),e(-1)}(t)},children:Object(g.jsx)(T.a,{name:"left arrow"})})]})]})},Q=function(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(i.c)((function(e){return e.signIn})),o=Object(i.b)(),l=Object(v.f)();return Object(c.useEffect)((function(){o(R()).then((function(){return o(I())})).then((function(){return s(!1)})),a||l("/signin")}),[o]),Object(g.jsx)(c.Fragment,{children:Object(g.jsx)("div",{children:!0===n?Object(g.jsxs)("div",{className:"grid",children:[Object(g.jsx)("div",{children:Object(g.jsx)(Y.a,{active:!0,size:"massive"})}),Object(g.jsx)("span",{className:"fs-500 ff-serif text-dark loading",children:"Loading Data..."})]}):Object(g.jsxs)(v.c,{children:[Object(g.jsx)(v.a,{path:"/",element:Object(g.jsx)(P,{})}),Object(g.jsx)(v.a,{path:"/signin",element:Object(g.jsx)(w,{})}),Object(g.jsx)(v.a,{path:"/new",element:Object(g.jsx)(A,{})}),Object(g.jsx)(v.a,{path:"/leaderboard",element:Object(g.jsx)(G,{})}),Object(g.jsx)(v.a,{path:"/poll/:id",element:Object(g.jsx)(J,{})})]})})})},H=n(69),L=Object(H.b)({signIn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{},logged:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:case m:return{user:t.user,logged:t.logged};default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return t.users;case E:return Object(u.a)(Object(u.a)({},e),{},Object(j.a)({},t.authedUser,Object(u.a)(Object(u.a)({},e[t.authedUser]),{},{answers:Object(u.a)(Object(u.a)({},e[t.authedUser].answers),{},Object(j.a)({},t.qid,t.answer))})));default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return t.questions;case z:return Object(u.a)(Object(u.a)({},e),{},Object(j.a)({},t.question.id,t.question));case E:return Object(u.a)(Object(u.a)({},e),{},Object(j.a)({},t.qid,Object(u.a)(Object(u.a)({},e[t.qid]),{},Object(j.a)({},t.answer,Object(u.a)(Object(u.a)({},e[t.qid][t.answer]),{},{votes:e[t.qid][t.answer].votes.concat([t.authedUser])})))));default:return e}}}),F=n(121),$=function(e){return function(t){return function(n){console.group(n.type),console.log("The Action: ",n);var c=t(n);return console.log("The New State: ",e.getState()),console.groupEnd(),c}}},B=Object(H.a)(F.a,$),V=Object(H.c)(L,B);a.a.render(Object(g.jsx)(N.a,{children:Object(g.jsx)(i.a,{store:V,children:Object(g.jsx)(Q,{})})}),document.getElementById("root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.31f6be4c.chunk.js.map