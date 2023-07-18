(self.webpackChunktone_front=self.webpackChunktone_front||[]).push([[1614],{36662:function(it,Q,t){"use strict";t.r(Q),t.d(Q,{default:function(){return He}});var st=t(20693),xe=t(3278),lt=t(46721),ge=t(94867),ot=t(81138),W=t(96146),C=t(35832),$=t(20418),B=t(32326),O=t(39190),dt=t(14320),b=t(53479),g=t(41428),l=t(22374),Z=t(97939),X=t(24812),R=t(22812),Ze=t(526),e=t(52454),w,je=(0,Z.ZP)(b.Z)(w||(w=(0,g.Z)([`
    width: 100%;
    height: `,`;
    display: flex;
    flex-direction: column;
`])),function(F){var u=F.height;return u?u+"px":"100%"}),ye=function(u){var v=u.children,a=(0,Ze.CR)(),j=a.height;return(0,e.jsx)(je,{height:j-50,children:v})},Se=ye,U=t(29316),ut=t(38519),Ce=t(16416),ct=t(69230),k=t(33821),vt=t(88966),J=t(11048),ht=t(8281),q=t(58591),ft=t(89963),N=t(70077),pt=t(31650),L=t(25100),mt=t(65790),I=t(17187),Oe=t(54217),_,Fe=(0,Z.ZP)(b.Z)(_||(_=(0,g.Z)([`
    background-color: #fff;
    position: absolute;
    left: 20px;
    top: 60px;
    width:240px;
    .ant-form-item {
        margin-bottom: 8px;
    }
`]))),Te=[{id:"mustRead",name:"\u5FC5\u770B"},{id:"course",name:"\u6559\u7A0B"},{id:"docs",name:"\u6587\u6863"}],$e=[{id:"maintain",name:"\u7EF4\u62A4"},{id:"notice",name:"\u901A\u77E5"},{id:"upgrade",name:"\u5347\u7EA7"},{id:"stop",name:"\u6682\u505C"}],ee={help_doc:Te,notice:$e},be=function(u,v){var a=I.Z.useForm(),j=(0,O.Z)(a,1),P=j[0],i=(0,X.UO)(),r=i.doc_type,m=i.doc_id,y=(0,l.useState)(!0),h=(0,O.Z)(y,2),S=h[0],D=h[1];(0,l.useImperativeHandle)(v,function(){return(0,$.Z)({},P)});var z=function(M){D(M.target.value)};return(0,e.jsx)(Fe,{children:(0,e.jsxs)(b.Z,{style:{flexDirection:"column",width:"100%"},children:[(0,e.jsx)(b.Z,{align:"middle",style:{padding:"8px 20px",gap:6},children:(0,e.jsxs)(N.Z,{children:[(0,e.jsx)(N.Z.Item,{children:(0,e.jsx)(Oe.rU,{to:"/".concat(r),children:(0,e.jsx)(L.Z.Link,{style:{cursor:"pointer"},children:r==="help_doc"?"\u5E2E\u52A9\u6587\u6863":"\u516C\u544A"})})}),(0,e.jsx)(N.Z.Item,{children:(0,e.jsx)(L.Z.Text,{children:m?"\u7F16\u8F91":"\u65B0\u5EFA"})})]})}),(0,e.jsx)(q.Z,{style:{margin:0}}),(0,e.jsxs)(I.Z,{form:P,style:{width:"100%",padding:20},layout:"vertical",initialValues:{active:1,is_top:!1,tags:ee[r][0].id},children:[(0,e.jsx)(I.Z.Item,{label:"\u662F\u5426\u751F\u6548",name:"active",required:!0,children:(0,e.jsxs)(J.ZP.Group,{onChange:z,children:[(0,e.jsx)(J.ZP,{value:1,children:"\u662F"}),(0,e.jsx)(J.ZP,{value:0,children:"\u5426"})]})}),(0,e.jsx)(I.Z.Item,{label:"\u7C7B\u578B",name:"tags",required:!0,children:(0,e.jsx)(k.Z,{children:ee[r].map(function(T){return(0,e.jsx)(k.Z.Option,{value:T.id,children:T.name},T.id)})})}),(0,e.jsx)(I.Z.Item,{noStyle:!0,name:"is_top",valuePropName:"checked",children:(0,e.jsx)(Ce.Z,{disabled:!S,children:"\u7F6E\u9876\u8BE5\u6587\u6863"})})]})]})})},Pe=(0,l.forwardRef)(be),xt=t(57359),Ee=t(34423),Re=t(69193),te,ne,Ie=(0,Z.ZP)(b.Z)(te||(te=(0,g.Z)([`
    position: absolute;
    right: 20px;
    top: 60px;
    width:250px;
`]))),Be=Z.ZP.span(ne||(ne=(0,g.Z)([`
    cursor: pointer;
    display: inline-flex;
    text-indent: `,`;
    &:hover span {
        color: #1890ff;
    }
`])),function(F){var u=F.textIndent;return u>1?u-1+"rem":"unset"}),Le=function(u){var v=u.json;if(!v)return(0,e.jsx)(e.Fragment,{});var a=v.content;if(!a)return(0,e.jsx)(e.Fragment,{});var j=a==null?void 0:a.filter(function(i){var r=i.type;return r==="heading"}).reduce(function(i,r,m){var y=r.attrs,h=y.level;if(!r.content)return i;var S=r.content[0].text;return i.concat({level:h,text:S,node:r,index:m})},[]),P=l.useCallback(function(i){var r=i.content,m=i.attrs,y=r[0].text,h=m.level;document.querySelectorAll(".ProseMirror h".concat(h)).forEach(function(S){S.innerText===y&&(0,Re.Z)(S,{behavior:"smooth",block:"start",inline:"start"})})},[v]);return(0,e.jsx)(Ie,{children:(0,e.jsxs)(Ee.Z,{direction:"vertical",style:{width:"100%"},children:[(0,e.jsx)(L.Z.Title,{level:4,style:{fontWeight:"normal",margin:0},children:"\u5927\u7EB2"}),(0,e.jsx)(q.Z,{style:{margin:0}}),j==null?void 0:j.filter(function(i){var r=i.text;return!!r.trim()}).map(function(i){var r=i.level,m=i.text,y=i.index,h=i.node;return(0,e.jsx)(Be,{textIndent:r,onClick:function(){return P(h)},children:(0,e.jsx)(L.Z.Text,{ellipsis:{tooltip:!0},style:{width:250},children:m})},y)})]})})},De=Le,Ae=t(18406),We=t(51893),Ue=t(42923),re=t(21801),ae,ie,se,le,oe,Je=Z.ZP.div(ae||(ae=(0,g.Z)([`
    width: 100%;
    height: calc(100% - 50px - 10px);
`]))),Ne=Z.ZP.div(ie||(ie=(0,g.Z)([`
    width: 850px;
    margin: 10px auto;
    height: 100%;
    background-color: #ffffff;
    box-shadow: 0 2px 10px rgb(0 0 0 / 12%);
    padding: 20px;
    /* overflow: auto; */
`]))),ze=Z.ZP.div(se||(se=(0,g.Z)([`
    padding: 0 0 20px 0;
    /* border-bottom: 1px solid #e8e8e8; */
    input {
        outline: none;
        border:0 !important;
        box-shadow: unset!important;
        font-size: 30px;
        width: 100%;
        line-height: 1;
    }
`]))),Me=Z.ZP.div(le||(le=(0,g.Z)([`
    width: 100%;
    height: calc(100% - 64px );
`]))),Ve=(0,Z.ZP)(b.Z)(oe||(oe=(0,g.Z)([`
    background-color: #fff;
    height: 50px;
    padding:0 20px;
`]))),Ge=function(){var u=(0,X.UO)(),v=u.doc_type,a=u.doc_id,j=(0,R.md)(),P=(0,l.useState)(""),i=(0,O.Z)(P,2),r=i[0],m=i[1],y=(0,l.useState)(!0),h=(0,O.Z)(y,2),S=h[0],D=h[1],z=l.useState(""),T=(0,O.Z)(z,2),M=T[0],Ye=T[1],Ke=l.useState(),de=(0,O.Z)(Ke,2),V=de[0],G=de[1],Qe=l.useState(),ue=(0,O.Z)(Qe,2),Xe=ue[0],ce=ue[1],H=(0,l.useRef)(),we=(0,l.useRef)(),ke=(0,l.useRef)(),qe=function(){var x=(0,B.Z)((0,C.Z)().mark(function s(){var n,f,o,p,E;return(0,C.Z)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(D(!0),!a){c.next=13;break}return c.next=4,(0,U.Z0)({id:a});case 4:if(n=c.sent,f=n.code,o=n.data,f!==200){c.next=13;break}if(!(!!o.length&&JSON.stringify(o[0])!=="{}")){c.next=12;break}return E=o[0].active,(p=H.current)===null||p===void 0||p.setFieldsValue((0,$.Z)((0,$.Z)({},o[0]),{},{active:E?1:0})),c.abrupt("return",o[0]);case 12:return c.abrupt("return",{});case 13:return c.abrupt("return",!1);case 14:case"end":return c.stop()}},s)}));return function(){return x.apply(this,arguments)}}(),_e=function(s){var n=s.title,f=s.content;n&&m(n),f&&Ye((0,re.l5)(f))},et=function(){var x=(0,B.Z)((0,C.Z)().mark(function s(){var n;return(0,C.Z)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(j.IsSysTestAdmin()){o.next=2;break}return o.abrupt("return",R.m8.push("/"));case 2:return o.next=4,qe();case 4:n=o.sent,D(!1),_e(n);case 7:case"end":return o.stop()}},s)}));return function(){return x.apply(this,arguments)}}();(0,l.useEffect)(function(){et()},[a]),l.useEffect(function(){return function(){G(void 0)}},[]);var tt=function(s){var n=s.target;return m((n==null?void 0:n.value)||"")},nt=function(){R.m8.push("/".concat(v).concat(a?"/"+a:""))},rt=function(){var x=(0,B.Z)((0,C.Z)().mark(function s(){var n,f;return(0,C.Z)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(n=(0,re.uY)((V==null?void 0:V.getHTML())||""),n){p.next=3;break}return p.abrupt("return",W.default.warning("\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A\uFF01"));case 3:if(r){p.next=5;break}return p.abrupt("return",W.default.warning("\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A\uFF01"));case 5:f=H.current,f==null||f.validateFields().then(function(){var E=(0,B.Z)((0,C.Z)().mark(function Y(c){var K,A,ve,he,fe,pe,me;return(0,C.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(K=(0,$.Z)({title:r,content:n,doc_type:v},c),a){d.next=7;break}return d.next=4,(0,U.do)(K);case 4:d.t0=d.sent,d.next=10;break;case 7:return d.next=9,(0,U.r7)((0,$.Z)((0,$.Z)({},K),{},{id:a}));case 9:d.t0=d.sent;case 10:if(A=d.t0,ve=A.code,he=A.msg,fe=A.data,ve===200){d.next=17;break}return W.default.error(he),d.abrupt("return");case 17:pe=a?"/".concat(a):"/".concat(fe.id),me="/".concat(v).concat(pe),R.m8.push(me);case 20:case"end":return d.stop()}},Y)}));return function(Y){return E.apply(this,arguments)}}()).catch(function(E){console.log(E)});case 7:case"end":return p.stop()}},s)}));return function(){return x.apply(this,arguments)}}(),at=(0,l.useMemo)(function(){return"".concat(a?"\u7F16\u8F91":"\u65B0\u5EFA").concat(v==="notice"?"\u516C\u544A":"\u5E2E\u52A9\u6587\u6863"," \u2014 T-One")},[r,a]);return(0,e.jsxs)(Se,{children:[(0,e.jsx)(R.ql,{children:(0,e.jsx)("title",{children:at})}),(0,e.jsxs)(Je,{children:[(0,e.jsxs)(Ve,{justify:"space-between",align:"middle",children:[(0,e.jsx)("span",{style:{cursor:"pointer"},onClick:nt,children:(0,e.jsx)(Ae.Z,{style:{fontSize:20}})}),(0,e.jsx)(ge.Z,{type:"primary",onClick:rt,children:a?"\u66F4\u65B0":"\u53D1\u5E03"})]}),(0,e.jsxs)(Ne,{ref:ke,children:[(0,e.jsx)(ze,{children:(0,e.jsx)(xe.Z,{value:r,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",autoComplete:"off",onChange:tt})}),(0,e.jsx)(Me,{ref:we,children:(0,e.jsx)(Ue.Z,{content:M,placeholder:"\u8BF4\u70B9\u4EC0\u4E48\uFF1F",onCreate:function(s){var n=s.editor;G(n),ce(n.getJSON())},onUpdate:function(s){var n=s.editor;G(n),ce(n.getJSON())}})})]}),(0,e.jsx)(Pe,{ref:H}),(0,e.jsx)(De,{json:Xe})]}),(0,e.jsx)(We.Z,{loading:S})]})},He=Ge}}]);
