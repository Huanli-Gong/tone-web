(self.webpackChunktone_front=self.webpackChunktone_front||[]).push([[1614],{36662:function(ut,q,t){"use strict";t.r(q),t.d(q,{default:function(){return Qe}});var dt=t(20693),Se=t(3278),ct=t(46721),Ce=t(94867),vt=t(81138),V=t(96146),C=t(35832),I=t(20418),J=t(32326),j=t(39190),ft=t(14320),W=t(53479),y=t(41428),s=t(22374),S=t(97939),_=t(24812),z=t(22812),$e=t(526),e=t(52454),ee,Re=(0,S.ZP)(W.Z)(ee||(ee=(0,y.Z)([`
    width: 100%;
    height: `,`;
    display: flex;
    flex-direction: column;
`])),function(b){var c=b.height;return c?c+"px":"100%"}),be=function(c){var m=c.children,i=(0,$e.CR)(),v=i.height;return(0,e.jsx)(Re,{height:v-50,children:m})},Oe=be,G=t(29316),ht=t(38519),Fe=t(16416),mt=t(69230),te=t(33821),pt=t(88966),Y=t(11048),gt=t(8281),ne=t(58591),xt=t(89963),X=t(70077),Zt=t(31650),M=t(25100),jt=t(65790),U=t(17187),Ee=t(54217),re,Te=(0,S.ZP)(W.Z)(re||(re=(0,y.Z)([`
    background-color: #fff;
    position: absolute;
    left: 20px;
    top: 60px;
    width:240px;
    .ant-form-item {
        margin-bottom: 8px;
    }
`]))),Pe=[{id:"mustRead",name:"\u5FC5\u770B"},{id:"course",name:"\u6559\u7A0B"},{id:"docs",name:"\u6587\u6863"}],Be=[{id:"maintain",name:"\u7EF4\u62A4"},{id:"notice",name:"\u901A\u77E5"},{id:"upgrade",name:"\u5347\u7EA7"},{id:"stop",name:"\u6682\u505C"}],ae={help_doc:Pe,notice:Be},Le=function(c,m){var i=U.Z.useForm(),v=(0,j.Z)(i,1),D=v[0],O=(0,_.UO)(),p=O.doc_type,F=O.doc_id,H=(0,s.useState)(!0),E=(0,j.Z)(H,2),T=E[0],$=E[1];(0,s.useImperativeHandle)(m,function(){return(0,I.Z)({},D)});var r=function(l){$(l.target.value)};return(0,e.jsx)(Te,{children:(0,e.jsxs)(W.Z,{style:{flexDirection:"column",width:"100%"},children:[(0,e.jsx)(W.Z,{align:"middle",style:{padding:"8px 20px",gap:6},children:(0,e.jsxs)(X.Z,{children:[(0,e.jsx)(X.Z.Item,{children:(0,e.jsx)(Ee.rU,{to:"/".concat(p),children:(0,e.jsx)(M.Z.Link,{style:{cursor:"pointer"},children:p==="help_doc"?"\u5E2E\u52A9\u6587\u6863":"\u516C\u544A"})})}),(0,e.jsx)(X.Z.Item,{children:(0,e.jsx)(M.Z.Text,{children:F?"\u7F16\u8F91":"\u65B0\u5EFA"})})]})}),(0,e.jsx)(ne.Z,{style:{margin:0}}),(0,e.jsxs)(U.Z,{form:D,style:{width:"100%",padding:20},layout:"vertical",initialValues:{active:1,is_top:!1,tags:ae[p][0].id},children:[(0,e.jsx)(U.Z.Item,{label:"\u662F\u5426\u751F\u6548",name:"active",required:!0,children:(0,e.jsxs)(Y.ZP.Group,{onChange:r,children:[(0,e.jsx)(Y.ZP,{value:1,children:"\u662F"}),(0,e.jsx)(Y.ZP,{value:0,children:"\u5426"})]})}),(0,e.jsx)(U.Z.Item,{label:"\u7C7B\u578B",name:"tags",required:!0,children:(0,e.jsx)(te.Z,{children:ae[p].map(function(n){return(0,e.jsx)(te.Z.Option,{value:n.id,children:n.name},n.id)})})}),(0,e.jsx)(U.Z.Item,{noStyle:!0,name:"is_top",valuePropName:"checked",children:(0,e.jsx)(Fe.Z,{disabled:!T,children:"\u7F6E\u9876\u8BE5\u6587\u6863"})})]})]})})},Ie=(0,s.forwardRef)(Le),yt=t(57359),De=t(34423),Ae=t(69193),ie,se,We=S.ZP.div(ie||(ie=(0,y.Z)([`
    position: absolute;
    right: 20px;
    top: 60px;
    width:250px;
`]))),ze=S.ZP.span(se||(se=(0,y.Z)([`
    cursor: pointer;
    display: inline-flex;
    text-indent: `,`;
    &:hover span {
        color: #1890ff;
    }
`])),function(b){var c=b.textIndent;return c>1?c-1+"rem":"unset"}),Ue=function(c){var m=c.json;if(!m)return(0,e.jsx)(e.Fragment,{});var i=m.content;if(!i)return(0,e.jsx)(e.Fragment,{});var v=i==null?void 0:i.filter(function(r){var n=r.type;return n==="heading"}).reduce(function(r,n,l){var g=n.attrs,R=g.level;if(!n.content)return r;var P=n.content.reduce(function(B,L){return B+=L.text},"");return r.concat({level:R,text:P,node:n,index:l})},[]),D=s.useCallback(function(r){var n=r.content,l=r.attrs,g=l.level;document.querySelectorAll(".ProseMirror h".concat(g)).forEach(function(R){var P=n.reduce(function(B,L){return B+=L.text},"");R.innerText===P&&(0,Ae.Z)(R,{behavior:"smooth",block:"start",inline:"start"})})},[m]),O=s.useMemo(function(){var r;return(v==null||(r=v.map(function(n){var l=n.level;return l}).sort(function(n,l){return n-l}))===null||r===void 0?void 0:r[0])||0},[v]),p=s.useState(0),F=(0,j.Z)(p,2),H=F[0],E=F[1],T=s.useRef(null),$=function(){var n,l,g;!T.current||E(((n=document.body)===null||n===void 0||(l=n.getBoundingClientRect())===null||l===void 0?void 0:l.height)-((g=T.current.getBoundingClientRect())===null||g===void 0?void 0:g.y)-20)};return s.useEffect(function(){return $(),window.addEventListener("resize",$),function(){window.removeEventListener("resize",$)}},[]),(0,e.jsx)(We,{children:(0,e.jsxs)(De.Z,{direction:"vertical",style:{width:"100%"},children:[(0,e.jsx)(M.Z.Title,{level:4,style:{fontWeight:"normal",margin:0},children:"\u5927\u7EB2"}),(0,e.jsx)(ne.Z,{style:{margin:0}}),(0,e.jsx)("div",{ref:T,style:{overflowY:"scroll",overflowX:"hidden",height:H,width:250},children:v==null?void 0:v.filter(function(r){var n=r.text;return n&&!!n.trim()}).map(function(r){var n=r.level,l=r.text,g=r.index,R=r.node;return(0,e.jsx)(ze,{textIndent:n-O,onClick:function(){return D(R)},children:(0,e.jsx)(M.Z.Text,{ellipsis:{tooltip:{placement:"left"}},style:{width:250},children:l})},g)})})]})})},He=Ue,Je=t(18406),Me=t(51893),Ne=t(42923),le=t(21801),oe,ue,de,ce,ve,Ve=S.ZP.div(oe||(oe=(0,y.Z)([`
    width: 100%;
    height: calc(100% - 50px - 10px);
`]))),Ge=S.ZP.div(ue||(ue=(0,y.Z)([`
    width: 850px;
    margin: 10px auto;
    height: 100%;
    background-color: #ffffff;
    box-shadow: 0 2px 10px rgb(0 0 0 / 12%);
    padding: 20px;
    /* overflow: auto; */
`]))),Ye=S.ZP.div(de||(de=(0,y.Z)([`
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
`]))),Xe=S.ZP.div(ce||(ce=(0,y.Z)([`
    width: 100%;
    height: calc(100% - 64px );
`]))),we=(0,S.ZP)(W.Z)(ve||(ve=(0,y.Z)([`
    background-color: #fff;
    height: 50px;
    padding:0 20px;
`]))),Ke=function(){var c=(0,_.UO)(),m=c.doc_type,i=c.doc_id,v=(0,z.md)(),D=(0,s.useState)(""),O=(0,j.Z)(D,2),p=O[0],F=O[1],H=(0,s.useState)(!0),E=(0,j.Z)(H,2),T=E[0],$=E[1],r=s.useState(""),n=(0,j.Z)(r,2),l=n[0],g=n[1],R=s.useState(),P=(0,j.Z)(R,2),B=P[0],L=P[1],ke=s.useState(),fe=(0,j.Z)(ke,2),qe=fe[0],he=fe[1],_e=s.useState(!1),me=(0,j.Z)(_e,2),pe=me[0],w=me[1],K=(0,s.useRef)(),et=(0,s.useRef)(),tt=(0,s.useRef)(),nt=function(){var Z=(0,J.Z)((0,C.Z)().mark(function o(){var a,x,u,f,A;return(0,C.Z)().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if($(!0),!i){h.next=13;break}return h.next=4,(0,G.Z0)({id:i});case 4:if(a=h.sent,x=a.code,u=a.data,x!==200){h.next=13;break}if(!(!!u.length&&JSON.stringify(u[0])!=="{}")){h.next=12;break}return A=u[0].active,(f=K.current)===null||f===void 0||f.setFieldsValue((0,I.Z)((0,I.Z)({},u[0]),{},{active:A?1:0})),h.abrupt("return",u[0]);case 12:return h.abrupt("return",{});case 13:return h.abrupt("return",!1);case 14:case"end":return h.stop()}},o)}));return function(){return Z.apply(this,arguments)}}(),rt=function(o){var a=o.title,x=o.content;a&&F(a),x&&g((0,le.l5)(x))},at=function(){var Z=(0,J.Z)((0,C.Z)().mark(function o(){var a;return(0,C.Z)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(v.IsSysTestAdmin()){u.next=2;break}return u.abrupt("return",z.m8.push("/"));case 2:return u.next=4,nt();case 4:a=u.sent,$(!1),rt(a);case 7:case"end":return u.stop()}},o)}));return function(){return Z.apply(this,arguments)}}();(0,s.useEffect)(function(){at()},[i]),s.useEffect(function(){return function(){L(void 0)}},[]);var it=function(o){var a=o.target;return F((a==null?void 0:a.value)||"")},st=function(){z.m8.push("/".concat(m).concat(i?"/"+i:""))},lt=function(){var Z=(0,J.Z)((0,C.Z)().mark(function o(){var a,x;return(0,C.Z)().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(a=(0,le.uY)((B==null?void 0:B.getHTML())||""),a){f.next=3;break}return f.abrupt("return",V.default.warning("\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A\uFF01"));case 3:if(p){f.next=5;break}return f.abrupt("return",V.default.warning("\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A\uFF01"));case 5:if(x=K.current,!pe){f.next=8;break}return f.abrupt("return");case 8:w(!0),x==null||x.validateFields().then(function(){var A=(0,J.Z)((0,C.Z)().mark(function Q(h){var k,N,ge,xe,Ze,je,ye;return(0,C.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(k=(0,I.Z)({title:p,content:a,doc_type:m},h),i){d.next=7;break}return d.next=4,(0,G.do)(k);case 4:d.t0=d.sent,d.next=10;break;case 7:return d.next=9,(0,G.r7)((0,I.Z)((0,I.Z)({},k),{},{id:i}));case 9:d.t0=d.sent;case 10:if(N=d.t0,ge=N.code,xe=N.msg,Ze=N.data,ge===200){d.next=18;break}return w(!1),V.default.error(xe),d.abrupt("return");case 18:w(!1),je=i?"/".concat(i):"/".concat(Ze.id),ye="/".concat(m).concat(je),z.m8.push(ye);case 22:case"end":return d.stop()}},Q)}));return function(Q){return A.apply(this,arguments)}}()).catch(function(A){console.log(A)});case 10:case"end":return f.stop()}},o)}));return function(){return Z.apply(this,arguments)}}(),ot=(0,s.useMemo)(function(){return"".concat(i?"\u7F16\u8F91":"\u65B0\u5EFA").concat(m==="notice"?"\u516C\u544A":"\u5E2E\u52A9\u6587\u6863"," \u2014 T-One")},[p,i]);return(0,e.jsxs)(Oe,{children:[(0,e.jsx)(z.ql,{children:(0,e.jsx)("title",{children:ot})}),(0,e.jsxs)(Ve,{children:[(0,e.jsxs)(we,{justify:"space-between",align:"middle",children:[(0,e.jsx)("span",{style:{cursor:"pointer"},onClick:st,children:(0,e.jsx)(Je.Z,{style:{fontSize:20}})}),(0,e.jsx)(Ce.Z,{type:"primary",onClick:lt,loading:pe,children:i?"\u66F4\u65B0":"\u53D1\u5E03"})]}),(0,e.jsxs)(Ge,{ref:tt,children:[(0,e.jsx)(Ye,{children:(0,e.jsx)(Se.Z,{value:p,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",autoComplete:"off",onChange:it})}),(0,e.jsx)(Xe,{ref:et,children:(0,e.jsx)(Ne.Z,{content:l,placeholder:"\u8BF4\u70B9\u4EC0\u4E48\uFF1F",onCreate:function(o){var a=o.editor;L(a),he(a.getJSON())},onUpdate:function(o){var a=o.editor;L(a),he(a.getJSON())}})})]}),(0,e.jsx)(Ie,{ref:K}),(0,e.jsx)(He,{json:qe})]}),(0,e.jsx)(Me.Z,{loading:T})]})},Qe=Ke}}]);
