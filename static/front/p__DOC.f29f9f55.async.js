(self.webpackChunktone_front=self.webpackChunktone_front||[]).push([[9724],{74127:function(Re,Q,t){"use strict";t.d(Q,{Z:function(){return W}});function W(Z){if(Z==null)throw new TypeError("Cannot destructure undefined")}},19763:function(Re,Q,t){"use strict";t.r(Q),t.d(Q,{default:function(){return Wt}});var W=t(20418),Z=t(39190),Bt=t(14320),G=t(53479),v=t(41428),c=t(22374),f=t(97939),Ut=t(46721),we=t(94867),Ht=t(31650),Y=t(25100),$e=t(74127),H=t(35832),V=t(32326),Fe=t(72882),X=t(29316),K=t(24812),y=t(22812),Ne=t(59556),We=t(16357),Jt=t(87967),Ae=t(65320),Gt=t(52730),ze=t(25205),Yt=t(51937),Be=t(34516),Kt=t(90846),Ue=t(56511),Qt=t(81138),He=t(96146),Je=t(488),Ge=t(93667),Ye=t(24112),Ke=t(74495),Qe=t(93980),Ve=t(68591),_=t.n(Ve),e=t(52454),Xe=["index","onMove","title","active","tags","disable","className","refresh"],ee,te,ne,re,ae,ie,oe,se=f.ZP.div(ee||(ee=(0,v.Z)([`
    width: 30px;
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
`]))),ce=f.ZP.div(te||(te=(0,v.Z)([`
    width: 16px;
    height: 100%;
    display: flex;
    cursor: pointer;
    background-color: rgba(0,0,0,.04);
    align-items: center;
    justify-content: center;
    visibility: hidden;
`]))),ke=f.ZP.div(ne||(ne=(0,v.Z)([`
    width: 16px;
    height: 100%;
`]))),le=(0,f.ZP)(Y.Z.Text)(re||(re=(0,v.Z)([`

`]))),qe=f.ZP.div(ae||(ae=(0,v.Z)([`
    width: 100%;
    height: 36px;
    cursor: pointer;
    display: flex;
    flex-direction:row;

    &.drop-over-downward {
        border-bottom: 2px dashed #1890ff;
    } 
    &.drop-over-upward {
        border-top: 2px dashed #1890ff;
    }

    &.can-drap:hover {
        background-color : rgb(248, 249, 250);
        `,` {
            visibility: visible;
        }
    }

    &:hover {
        background-color: rgb(248, 249, 250);
        `,` {
            visibility: visible;
        }
    }

    &.doc_active {
        background-color: rgb(248,249,250);
        `,` {
            color :#1890ff;
        }
    }
`])),ce,se,le),_e=f.ZP.div(ie||(ie=(0,v.Z)([`
    width: calc(100% - 30px);
    height: 100%;
    display: flex;
    align-items: center;
`]))),et=f.ZP.div(oe||(oe=(0,v.Z)([`
    width: calc(100% - 16px);
    padding: 0 8px;
    .ant-typography {
        width: calc(100% - 14px - 38px - 16px);
    }
`]))),de="DragableBodyRow",tt=function(r){return new Map([["mustRead","\u5FC5\u770B"],["course","\u6559\u7A0B"],["docs","\u6587\u6863"],["maintain","\u7EF4\u62A4"],["notice","\u901A\u77E5"],["upgrade","\u5347\u7EA7"],["stop","\u6682\u505C"],["mustRead","\u5FC5\u770B"]]).get(r)},nt=function(r,i){return r==="help"&&i===0?"#108ee9":i===0?"#FF4D4D":"rgba(0,0,0,.04)"},rt=function(r){var i=r.index,L=r.onMove,C=r.title,E=r.active,$=r.tags,j=r.disable,M=r.className,g=r.refresh,S=(0,Je.Z)(r,Xe),b=(0,K.UO)(),O=b.doc_type,R=b.doc_id,P=(0,y.md)(),A=(0,c.useRef)(),z=(0,Ge.L)({accept:de,collect:function(n){var h=n.getItem()||{},s=h.index;return s===i?{}:{isOver:n.isOver(),dropClassName:s<i?" drop-over-downward":" drop-over-upward"}},drop:function(n){L(n.index,i)},canDrop:function(){return!j&&i!==0}}),T=(0,Z.Z)(z,2),F=T[0],m=F.isOver,B=F.dropClassName,J=T[1],a=(0,Ye.c)({type:de,item:{index:i},canDrag:function(){return!j&&i!==0},collect:function(n){return{isDragging:n.isDragging()}}}),x=(0,Z.Z)(a,2),l=x[1];J(l(A));var d=function(){var o=(0,V.Z)((0,H.Z)().mark(function n(h){var s,U,p,w;return(0,H.Z)().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return s=h.id,I.next=3,(0,X.oe)({id:s});case 3:if(U=I.sent,p=U.code,w=U.msg,p===200){I.next=9;break}return He.default.warning(w),I.abrupt("return");case 9:s===+R&&y.m8.push("/".concat(O)),g();case 11:case"end":return I.stop()}},n)}));return function(h){return o.apply(this,arguments)}}(),u=function(n){var h=n.key;h==="delete"&&d(r)};return(0,e.jsxs)(qe,(0,W.Z)((0,W.Z)({ref:A},S),{},{className:_()(M,i===0?"can-not-drap":"can-drap",m&&B),children:[(0,e.jsxs)(_e,{children:[(0,e.jsx)(y.Nv,{accessible:P.IsSysTestAdmin(),fallback:(0,e.jsx)(ke,{}),children:(0,e.jsx)(ce,{children:(0,e.jsx)(Ke.Z,{})})}),(0,e.jsxs)(et,{children:[(0,e.jsx)(Ue.Z,{style:{marginRight:6},status:E?"success":"error"}),(0,e.jsx)(Be.Z,{color:nt(O,i),style:{border:"transparent",color:i===0?"#fff":"rgba(0,0,0,.65)"},children:tt($)}),(0,e.jsx)(le,{ellipsis:{tooltip:!0},children:C})]})]}),(0,e.jsx)(y.Nv,{accessible:P.IsSysTestAdmin(),children:(0,e.jsx)(Ae.Z,{trigger:["click"],overlay:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(ze.Z,{onClick:u,items:[{key:"delete",label:"\u5220\u9664"}]})}),children:(0,e.jsx)(se,{children:(0,e.jsx)(Qe.Z,{})})})})]}))},at=rt,ue=t(51893),Vt=t(64510),ve=t(87445),fe,he,it=f.ZP.div(fe||(fe=(0,v.Z)([`
    position: absolute;
    background-color: #fff;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
`]))),ot=f.ZP.div(he||(he=(0,v.Z)([`
    width : 100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`]))),st=function(){return(0,e.jsx)(it,{children:(0,e.jsx)(ot,{children:(0,e.jsx)(ve.Z,{image:ve.Z.PRESENTED_IMAGE_DEFAULT})})})},q=st,pe,ge,me,ct=(0,f.ZP)(G.Z)(pe||(pe=(0,v.Z)([`
    height: 100%;
    width: 334px;
    overflow: hidden;
    background-color:#fff;
    flex-direction: column;
`]))),lt=(0,f.ZP)(G.Z)(ge||(ge=(0,v.Z)([`
    width: 100%;
    height: 48px;
    padding: 0 20px;
    border-bottom: 1px solid rgba(0,0,0,.1);
`]))),dt=(0,f.ZP)(G.Z)(me||(me=(0,v.Z)([`
    width: 100%;
    padding: 8px 0;
    position: relative;
`]))),ut=function(r){var i=r.onChange,L=(0,K.UO)(),C=L.doc_type,E=L.doc_id,$=(0,y.md)(),j=(0,c.useState)([]),M=(0,Z.Z)(j,2),g=M[0],S=M[1],b=(0,c.useState)(!0),O=(0,Z.Z)(b,2),R=O[0],P=O[1],A=(0,c.useState)({}),z=(0,Z.Z)(A,2),T=z[0],F=z[1],m=function(){var l=(0,V.Z)((0,H.Z)().mark(function d(){var u,o,n;return(0,H.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return P(!0),s.next=3,(0,X.Z0)({doc_type:C,page_size:1e3});case 3:return u=s.sent,o=u.data,n=u.code,S(n===200?o:[]),P(!1),s.abrupt("return",o);case 9:case"end":return s.stop()}},d)}));return function(){return l.apply(this,arguments)}}(),B=function(d){F((0,W.Z)({},d)),i((0,W.Z)({},d))};(0,c.useEffect)(function(){g.length&&B(E?g.filter(function(l){return l.id===+E})[0]:g[0])},[E,g]),(0,c.useEffect)(function(){return m(),function(){F({}),S([])}},[]);var J=function(){var l=(0,V.Z)((0,H.Z)().mark(function d(u,o){var n,h,s;return(0,H.Z)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(u!==o){p.next=2;break}return p.abrupt("return");case 2:return n=g.filter(function(w,N){return(0,$e.Z)(w),u===N})[0],S(g.reduce(function(w,N,I){return I===u&&N.id===n.id?w:I===o?u<o?w.concat(N,n):w.concat(n,N):w.concat(N)},[])),p.next=6,(0,X.r7)({id:n.id,order_id:o+1});case 6:h=p.sent,s=h.code,s!=200&&m();case 9:case"end":return p.stop()}},d)}));return function(u,o){return l.apply(this,arguments)}}(),a=function(d){d.id!==E&&(B(d),y.m8.replace("/".concat(C,"/").concat(d.id)))},x=function(){return y.m8.push("/".concat(C,"/create"))};return(0,e.jsxs)(ct,{children:[(0,e.jsxs)(lt,{justify:"space-between",align:"middle",children:[(0,e.jsx)(Y.Z.Text,{children:C==="help_doc"?"\u5E2E\u52A9\u6587\u6863":"\u516C\u544A"}),(0,e.jsx)(y.Nv,{accessible:$.IsSysTestAdmin(),children:(0,e.jsx)(we.Z,{type:"primary",size:"small",onClick:x,style:{padding:"0 4px"},children:(0,e.jsx)(Fe.Z,{})})})]}),(0,e.jsxs)("div",{style:{height:"calc(100% - 48px)",position:"relative",width:"100%",overflowY:"auto"},children:[(0,e.jsx)(Ne.W,{backend:We.PD,children:(0,e.jsx)(dt,{children:g.map(function(l,d){return(0,e.jsx)(at,(0,W.Z)((0,W.Z)({},l),{},{index:d,className:(T==null?void 0:T.id)===l.id&&"doc_active",onClick:function(){return a(l)},onMove:J,refresh:m}),l.id)})})}),g.length===0&&(0,e.jsx)(q,{}),(0,e.jsx)(ue.Z,{loading:R})]})]})},vt=ut,Xt=t(57359),ft=t(34423),ht=t(42923),xe=t(45972),pt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z"}}]},name:"edit",theme:"filled"},gt=pt,mt=t(25078),Ze=function(r,i){return c.createElement(mt.Z,(0,xe.Z)((0,xe.Z)({},r),{},{ref:i,icon:gt}))};Ze.displayName="EditFilled";var xt=c.forwardRef(Ze),Zt=t(69193),ye,je,yt=f.ZP.div(ye||(ye=(0,v.Z)([`
    width: 230px;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    position: relative;
    .catalog-box {
        position: absolute;
        left: -1px;
        top: 0;
        z-index: 10;
        overflow: auto;
        width: 100%;
        height: 100%;
        .item-active {
            border-left: 1px solid #1890ff;
            span {
                color: #1890ff;
            }
        }
    }
`]))),jt=f.ZP.div(je||(je=(0,v.Z)([`
    width: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
    padding: 4px 0 4px 20px;
`]))),Dt=function(r){var i=r.source,L=(0,K.TH)(),C=L.pathname,E=L.hash,$=c.useState(void 0),j=(0,Z.Z)($,2),M=j[0],g=j[1],S=c.useState(void 0),b=(0,Z.Z)(S,2),O=b[0],R=b[1],P=c.useState(!0),A=(0,Z.Z)(P,2),z=A[0],T=A[1],F=function(x){g(x),R(new Date().getTime()),T(!1),(0,Zt.Z)(x.dom,{behavior:"smooth",block:"start",inline:"start"})};c.useEffect(function(){if(!!z){if(M){console.log("start"),y.m8.replace("".concat(C,"#").concat(M.text)),g(void 0);return}var a=document.querySelector(".ProseMirror"),x=m==null?void 0:m.reduce(function(l,d){var u=Math.abs(d.dom.offsetTop-a.scrollTop),o=Math.abs(l.dom.offsetTop-a.scrollTop);return u<o?d:l});y.m8.replace("".concat(C,"#").concat(x.text))}},[z]),c.useEffect(function(){if(!!O){var a=setInterval(function(){new Date().getTime()-O>200&&T(!0)},60);return function(){clearInterval(a)}}},[O]);var m=c.useMemo(function(){return i?i==null?void 0:i.filter(function(a){var x=a.text;return!!x.trim()}):[]},[i]),B=function(){R(new Date().getTime()),T(!1)};c.useEffect(function(){var a=m.findIndex(function(l){var d=l.text;return"#".concat(d)===decodeURI(E)});if(!!~a){var x=setTimeout(function(){return F(m[a])},1e3);return function(){clearTimeout(x)}}},[m]),c.useEffect(function(){var a=document.querySelector(".ProseMirror");if(!!a)return a.addEventListener("scroll",B),function(){a.removeEventListener("scroll",B)}},[]);var J=c.useMemo(function(){var a=m.reduce(function(u,o){var n=o.level;return u[n]=u[n]?u[n]+1:1,u},{}),x=Object.keys(a),l=x.sort(function(u,o){return u-o}),d=l.at(0)?+l.at(0):1;return d},[m]);return(0,e.jsx)(yt,{children:(0,e.jsx)("div",{className:"catalog-box",children:m.map(function(a){return(0,e.jsx)(jt,{onClick:function(){return F(a)},className:_()(E==="#".concat(a.text)&&"item-active"),children:(0,e.jsx)(Y.Z.Text,{ellipsis:{tooltip:{placement:"left"}},style:{textIndent:a.level-J+"em"},children:a.text})},a.index)})})})},Ct=Dt,Et=t(21801),De,Ce,Ee,Se,be,Oe,St=(0,f.ZP)(G.Z)(De||(De=(0,v.Z)([`
    height: 100%;
    width:100%;
    position: relative;
    padding: 20px;
`]))),bt=f.ZP.div(Ce||(Ce=(0,v.Z)([`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    flex-direction: row;
`]))),Ot=f.ZP.div(Ee||(Ee=(0,v.Z)([`
    width: `,`;
    height: 100%;
    display: flex;
    overflow-y: auto;
    /* padding-top: 20px; */
    flex-direction: column;
    gap: 8px;
`])),function(D){var r=D.hasCatalog;return r?"calc(100% - 230px)":"100%"}),Pt=f.ZP.div(Se||(Se=(0,v.Z)([`
    display:flex;
    width: 100%;
    height: 38px;
    align-items: center;
    justify-content: space-between;
    /* padding-right: 20px; */
    h2 {
        margin: 0 !important;
    }
`]))),Tt=f.ZP.div(be||(be=(0,v.Z)([`
    width: 100%;
    min-height : calc(100% - 80px);
`]))),It=f.ZP.span(Oe||(Oe=(0,v.Z)([`
    cursor: pointer;
    width: 60px;
    &:hover {
        color :#108ee9;
    }
`]))),Lt=function(r){var i=r.id,L=r.title,C=r.gmt_modified,E=(0,K.UO)(),$=E.doc_type,j=(0,y.md)(),M=(0,c.useState)(!0),g=(0,Z.Z)(M,2),S=g[0],b=g[1],O=(0,c.useState)(),R=(0,Z.Z)(O,2),P=R[0],A=R[1],z=(0,c.useState)(!1),T=(0,Z.Z)(z,2),F=T[0],m=T[1],B=c.useState(""),J=(0,Z.Z)(B,2),a=J[0],x=J[1],l=(0,c.useRef)(null),d=function(){var o=(0,V.Z)((0,H.Z)().mark(function n(){var h,s;return(0,H.Z)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(b(!0),!i){p.next=7;break}return p.next=4,(0,X.Z0)({id:i});case 4:h=p.sent,s=h.data,s[0]&&x((0,Et.l5)(s[0].content));case 7:b(!1);case 8:case"end":return p.stop()}},n)}));return function(){return o.apply(this,arguments)}}();(0,c.useEffect)(function(){return d(),function(){b(!0),m(!1)}},[i]);var u=(0,c.useMemo)(function(){if(!P)return[];var o=P.getJSON(),n=o.content;return n==null?void 0:n.filter(function(h){var s=h.type,U=h.content;return s==="heading"&&U}).reduce(function(h,s,U){var p=s.attrs;if(!s.content)return h;var w=s.content&&s.content.length>0?s.content[0]:{},N=w.text,I=p.level,k=void 0;if(document.querySelectorAll(".ProseMirror h".concat(I)).forEach(function(Me){Me.innerText===N&&(k=Me)}),k){var At=k,zt=At.offsetTop;return h.concat({level:I,text:N,node:s,index:U,dom:k,position:zt})}return h},[])},[P]);return(0,e.jsxs)(St,{children:[(0,e.jsxs)(bt,{children:[!S&&!a?(0,e.jsx)(q,{}):(0,e.jsxs)(Ot,{hasCatalog:u.length?1:0,children:[L&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(Pt,{children:[(0,e.jsx)(Y.Z.Title,{ellipsis:{tooltip:!0},level:2,children:L}),(0,e.jsx)(y.Nv,{accessible:j.IsSysTestAdmin(),children:(0,e.jsx)(It,{onClick:function(){return y.m8.push("/".concat($,"/edit/").concat(i))},children:(0,e.jsxs)(ft.Z,{children:[(0,e.jsx)(xt,{}),"\u7F16\u8F91"]})})})]}),(0,e.jsxs)(Y.Z.Text,{type:"secondary",children:["\u66F4\u65B0\u65F6\u95F4\uFF1A",C]})]}),(0,e.jsx)(Tt,{ref:l,children:(0,e.jsx)(ht.Z,{editable:!1,content:a,onCreate:function(n){var h=n.editor;A(h)}})})]}),!!u.length&&(0,e.jsx)(Ct,{source:u})]}),F&&(0,e.jsx)(q,{}),(0,e.jsx)(ue.Z,{loading:S})]})},Mt=Lt,Rt=t(526),Pe=c.createContext(null),kt=function(){return React.useContext(Pe)},Te,Ie,Le,wt=(0,f.ZP)(G.Z)(Te||(Te=(0,v.Z)([`
    width: 100%;
    height: `,`;
    padding:0 20px;
    display: flex;
    flex-direction: column;
`])),function(D){var r=D.height;return r?r+"px":"100%"}),$t=(0,f.ZP)(G.Z)(Ie||(Ie=(0,v.Z)([`
    width: 100%;
    height: 100%;
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    gap: 24px;
`]))),Ft=(0,f.ZP)(G.Z)(Le||(Le=(0,v.Z)([`
    width: calc(100% - 334px - 24px);
    height: 100%;
    background-color: #ffffff;
`]))),Nt=function(){var r=(0,Rt.CR)(),i=r.height,L=(0,K.UO)(),C=L.doc_type,E=(0,c.useState)({}),$=(0,Z.Z)(E,2),j=$[0],M=$[1],g=(0,c.useState)(!0),S=(0,Z.Z)(g,2),b=S[0],O=S[1],R=(0,c.useMemo)(function(){return JSON.stringify(j)==="{}"?"".concat(C==="notice"?"\u516C\u544A":"\u5E2E\u52A9\u6587\u6863"," \u2014 T-One"):"".concat(j.title," \u2014 T-One")},[j]),P={initLoading:b,setInitLoading:O};return(0,e.jsxs)(wt,{height:i-70,children:[(0,e.jsx)(y.ql,{children:(0,e.jsx)("title",{children:R})}),(0,e.jsx)(Pe.Provider,{value:P,children:(0,e.jsxs)($t,{children:[(0,e.jsx)(vt,{onChange:M}),(0,e.jsx)(Ft,{children:(0,e.jsx)(Mt,(0,W.Z)({},j))})]})})]})},Wt=Nt}}]);
