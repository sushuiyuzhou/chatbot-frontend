(this["webpackJsonpchatbot-frontend"]=this["webpackJsonpchatbot-frontend"]||[]).push([[0],{115:function(e,t,n){e.exports=n(146)},146:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),l=n.n(c),o=n(11),i=n(69),s=n(15),u={test:{key:"value"},user:{name:"Guest",icon:2,open:!0},chat:[{party:"bot",time:(new Date).toLocaleString(),content:"Let's talk! Feel free to ask me anything :) I'm smart, kind of.."}]},m=Object(o.c)({test:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.test,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TEST":return Object(s.a)(Object(s.a)({},e),{},{key:t.text});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.user,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_USER_NAME":return Object(s.a)(Object(s.a)({},e),{},{name:t.name});case"CHANGE_USER_ICON":return Object(s.a)(Object(s.a)({},e),{},{icon:t.icon});case"TWEAK_USER_DIALOG":return Object(s.a)(Object(s.a)({},e),{},{open:t.open});default:return e}},chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.chat,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUBMIT_USER_QUESTION":return[].concat(Object(i.a)(e),[{party:"user",time:(new Date).toLocaleString(),content:t.question}]);case"GET_CHATBOT_ANSWER":return[].concat(Object(i.a)(e),[{party:"bot",time:(new Date).toLocaleString(),content:t.answer}]);case"RESTART_CHAT":return[];default:return e}}}),f=n(88),E=n.n(f),d=n(89),h=n(18),p=n(99),b=n(177),g=n(190),v=n(180),y=n(27),x=n(90),w=n.n(x),j=function(e){return{type:"CHANGE_USER_NAME",name:e}},O=function(e){return{type:"CHANGE_USER_ICON",icon:e}},N=function(e){return{type:"TWEAK_USER_DIALOG",open:e}},C=function(e){return{type:"SUBMIT_USER_QUESTION",question:e}},T=function(){return{type:"RESTART_CHAT"}},I=function(e){return function(t){w.a.post("https://soulin.io:80/",{question:e}).then((function(e){t({type:"GET_CHATBOT_ANSWER",answer:e.data.answer})})).catch((function(e){e.message&&"Network Error"===e.message&&t({type:"GET_CHATBOT_ANSWER",answer:"It seems I'm not here at the moment"})}))}},S=n(199),_=n(188),U=n(186),A=n(191),k=n(196),R=n(195),D=n(183),W=n(194),G=n(23),H=n.n(G),B=n(39),L=n.n(B),F=n(40),z=n.n(F),M=n(41),Q=n.n(M),q=n(147),V=Object(b.a)((function(e){return{form:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",margin:e.spacing(1),width:225},title:{textAlign:"center"},inputLabel:{textAlign:"center",width:200},formControl:{width:200}}})),K=Object(h.b)((function(e){return{name:e.user.name,icon:e.user.icon,open:e.user.open}}),(function(e){return{changeUserName:Object(o.b)(j,e),changeUserIcon:Object(o.b)(O,e),tweakUserDialog:Object(o.b)(N,e)}}))((function(e){var t=e.name,n=e.icon,a=e.open,c=e.changeUserName,l=e.changeUserIcon,o=e.tweakUserDialog,i=(Object(y.a)(e,["name","icon","open","changeUserName","changeUserIcon","tweakUserDialog"]),V());return r.a.createElement(W.a,{open:a},r.a.createElement(D.a,null,r.a.createElement(q.a,{variant:"subtitle1",className:i.title},"Chatbot Settings")),r.a.createElement("div",{className:i.form},r.a.createElement(S.a,{label:"User Nickname",defaultValue:t,className:i.inputLabel,onChange:function(e){return c(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(U.a,{className:i.formControl},r.a.createElement(R.a,{id:"user-icon"},"Choose your user icon"),r.a.createElement(A.a,{labelId:"user-icon",id:"user-icon",value:n,onChange:function(e){return l(e.target.value)}},r.a.createElement(k.a,{value:1},r.a.createElement(H.a,null)," - the git master"),r.a.createElement(k.a,{value:2},r.a.createElement(L.a,null)," - droid expert"),r.a.createElement(k.a,{value:3},r.a.createElement(z.a,null)," - not without surprise"),r.a.createElement(k.a,{value:4},r.a.createElement(Q.a,null)," - in a rush"))),r.a.createElement("br",null),r.a.createElement(_.a,{variant:"contained",color:"primary",onClick:function(){return o(!1)}},"Confirm"),r.a.createElement("br",null)))})),J=n(100),X=n(94),P=n.n(X),Y=Object(b.a)((function(e){return{userInputRoot:{display:"flex",alignItems:"center",backgroundColor:"azure",marginBottom:e.spacing(1)},inputGroup:{display:"flex",alignItems:"center"},textField:{width:"250px"},profile:{display:"flex",flexDirection:"column",alignItems:"center"}}})),$=Object(h.b)((function(e){return{name:e.user.name,icon:e.user.icon}}),(function(e){return{submitUserQuestion:Object(o.b)(C,e),submitForChatbotAnswer:Object(o.b)(I,e)}}))((function(e){var t=e.name,n=e.icon,c=e.submitUserQuestion,l=e.submitForChatbotAnswer,o=(Object(y.a)(e,["name","icon","submitUserQuestion","submitForChatbotAnswer"]),Y()),i=Object(a.useState)(""),s=Object(J.a)(i,2),u=s[0],m=s[1];return r.a.createElement(v.a,{className:o.userInputRoot},r.a.createElement("div",{className:o.inputGroup},"\xa0",r.a.createElement(P.a,null),"\xa0",r.a.createElement(S.a,{label:"Enter",className:o.textField,value:u,onChange:function(e){return m(e.target.value)},onKeyDown:function(e){13===e.keyCode&&(c(u),m(""),l(u))}})),r.a.createElement("div",{className:o.profile},r.a.createElement(q.a,{variant:"caption"},t),function(e){switch(e){case 1:return r.a.createElement(H.a,null);case 2:return r.a.createElement(L.a,null);case 3:return r.a.createElement(z.a,null);case 4:return r.a.createElement(Q.a,null);default:return r.a.createElement(H.a,null)}}(n)),"\xa0")})),Z=n(197),ee=n(189),te=Object(b.a)((function(e){return{indent:{display:"flex",justifyContent:"flex-start"},sentence:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",maxWidth:"85%"},profile:{},avatar:{color:e.palette.getContrastText(ee.a[500]),backgroundColor:ee.a[500]},content:{minWidth:"60%"},timeWrapper:{display:"flex",justifyContent:"flex-end"},time:Object(s.a)(Object(s.a)({},e.typography.button),{},{fontSize:"10px"})}})),ne=function(e){var t=e.time,n=e.sentence,a=te();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.indent},r.a.createElement("div",{elevation:2,className:a.profile},r.a.createElement(Z.a,{className:a.avatar},r.a.createElement(H.a,null))),"\xa0",r.a.createElement("div",null,r.a.createElement(v.a,{elevation:2,className:a.sentence},"\xa0",r.a.createElement("div",{className:a.content},r.a.createElement("div",{className:a.timeWrapper},r.a.createElement(q.a,{variant:"caption",color:"secondary",className:a.time},t)),r.a.createElement(q.a,{variant:"body2"},n)),"\xa0"))),r.a.createElement("br",null))},ae=n(64),re=Object(b.a)((function(e){return{indent:{display:"flex",justifyContent:"flex-end"},sentence:{display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center",maxWidth:"70%"},profile:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",maxHeight:"50px"},content:{},timeWrapper:{display:"flex",justifyContent:"flex-end"},time:Object(s.a)(Object(s.a)({},e.typography.button),{},{fontSize:"10px"}),avatar:{color:e.palette.getContrastText(ae.a[400]),backgroundColor:ae.a[400],width:e.spacing(3),height:e.spacing(3)},icon:{width:e.spacing(2),height:e.spacing(2)}}})),ce=Object(h.b)((function(e){return{icon:e.user.icon}}),(function(e){return{}}))((function(e){var t=e.time,n=e.sentence,a=e.icon,c=re();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:c.indent},r.a.createElement(v.a,{elevation:2,className:c.sentence},"\xa0",r.a.createElement("div",{className:c.content},r.a.createElement("div",{className:c.timeWrapper},r.a.createElement(q.a,{variant:"caption",fontSize:"small",color:"secondary",className:c.time},t)),r.a.createElement(q.a,{variant:"body2"},n)),"\xa0"),"\xa0",r.a.createElement(Z.a,{className:c.avatar},function(e){switch(e){case 1:return r.a.createElement(H.a,{className:c.icon});case 2:return r.a.createElement(L.a,{className:c.icon});case 3:return r.a.createElement(z.a,{className:c.icon});case 4:return r.a.createElement(Q.a,{className:c.icon});default:return r.a.createElement(H.a,{className:c.icon})}}(a))),r.a.createElement("br",null))})),le=Object(b.a)((function(e){return{root:{width:"450px",overflow:"auto",marginTop:"5px"},scroll1:{width:"100%",height:"75vh",overflow:"hidden"},scroll2:{width:"100%",height:"100%",overflowY:"scroll",paddingRight:"17px",boxSizing:"content-box"}}})),oe=Object(h.b)((function(e){return{ctns:e.chat}}),(function(e){return{submitUserQuestion:Object(o.b)(C,e)}}))((function(e){var t=e.ctns,n=(Object(y.a)(e,["ctns"]),le());return Object(a.useEffect)((function(){!function(){var e=document.querySelector("#chat-window");e.scrollTop=e.scrollHeight-e.clientHeight}()}),[t]),r.a.createElement("div",{className:n.root},r.a.createElement("div",{className:n.scroll1},r.a.createElement("div",{id:"chat-window",className:n.scroll2},function(e){if(e)return e.map((function(e){return"bot"===e.party?r.a.createElement(ne,{time:e.time,sentence:e.content}):r.a.createElement(ce,{time:e.time,sentence:e.content})}))}(t))))})),ie=n(96),se=n.n(ie),ue=n(97),me=n.n(ue),fe=n(66),Ee=n(65),de=n(193),he=Object(b.a)((function(e){return{menuRoot:{display:"flex",justifyContent:"space-evenly",alignItems:"center",height:"100%",width:"150px",marginTop:e.spacing(1)},homeButton:{color:e.palette.getContrastText(fe.a[500]),backgroundColor:fe.a[500]},refreshButton:{color:e.palette.getContrastText(Ee.a[500]),backgroundColor:Ee.a[500]}}})),pe=Object(h.b)((function(e){return{}}),(function(e){return{restartChat:Object(o.b)(T,e)}}))((function(e){var t=e.restartChat,n=(Object(y.a)(e,["restartChat"]),he());return r.a.createElement("div",{className:n.menuRoot},r.a.createElement(de.a,{title:"To Github","aria-label":"home"},r.a.createElement(Z.a,{onClick:function(){window.location.href="https://github.com/sushuiyuzhou"},className:n.homeButton},r.a.createElement(se.a,null))),r.a.createElement(de.a,{title:"Restart chat","aria-label":"refresh"},r.a.createElement(Z.a,{onClick:t,className:n.refreshButton},r.a.createElement(me.a,null))))})),be=n(98),ge=n.n(be),ve=Object(p.a)({status:{}}),ye=function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d;return Object(o.e)(m,e,t(Object(o.a)(d.a,E()())))}(),xe=Object(b.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"grey"},mainView:{width:"100%",maxWidth:"600px",minHeight:"96vh",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",textAlign:"center",backgroundImage:"url(".concat(ge.a,")"),margin:"1vh"},menu:{height:"6vh"},chatWindow:{height:"80vh",display:"flex",flexDirection:"column",justifyContent:"center"},userInput:{height:"10vh",display:"flex",flexDirection:"column",justifyContent:"center"}}})),we=function(){var e=xe();return r.a.createElement(g.a,{theme:ve},r.a.createElement(h.a,{store:ye},r.a.createElement("div",{className:e.root},r.a.createElement(v.a,{elevation:3,className:e.mainView},r.a.createElement(K,null),r.a.createElement("div",{className:e.menu},r.a.createElement(pe,null)),r.a.createElement("div",{className:e.chatWindow},r.a.createElement(oe,null)),r.a.createElement("div",{className:e.userInput},r.a.createElement($,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(we,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},98:function(e,t,n){e.exports=n.p+"static/media/rain.84ff5913.jpg"}},[[115,1,2]]]);
//# sourceMappingURL=main.a63847f7.chunk.js.map