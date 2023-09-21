(self.webpackChunktone_front=self.webpackChunktone_front||[]).push([[9724],{74127:function(Ne,Q,t){"use strict";t.d(Q,{Z:function(){return F}});function F(Z){if(Z==null)throw new TypeError("Cannot destructure undefined")}},19763:function(Ne,Q,t){"use strict";t.r(Q),t.d(Q,{default:function(){return Ft}});var F=t(20418),Z=t(39190),zt=t(14320),G=t(53479),v=t(41428),c=t(22374),f=t(97939),Bt=t(46721),Me=t(94867),Ut=t(31650),Y=t(25100),Re=t(74127),H=t(35832),V=t(32326),$e=t(72882),X=t(29316),K=t(24812),D=t(22812),we=t(59556),Fe=t(16357),Ht=t(87967),We=t(65320),Jt=t(52730),Ae=t(25205),Gt=t(51937),ze=t(34516),Yt=t(90846),Be=t(56511),Kt=t(81138),Ue=t(96146),He=t(488),Je=t(93667),Ge=t(24112),Ye=t(74495),Ke=t(93980),Qe=t(68591),_=t.n(Qe),e=t(52454),Ve=["index","onMove","title","active","tags","disable","className","refresh"],ee,te,ne,re,ae,ie,oe,se=f.ZP.div(ee||(ee=(0,v.Z)([`
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
`]))),Xe=f.ZP.div(ne||(ne=(0,v.Z)([`
    width: 16px;
    height: 100%;
`]))),le=(0,f.ZP)(Y.Z.Text)(re||(re=(0,v.Z)([`

`]))),ke=f.ZP.div(ae||(ae=(0,v.Z)([`
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
`])),ce,se,le),qe=f.ZP.div(ie||(ie=(0,v.Z)([`
    width: calc(100% - 30px);
    height: 100%;
    display: flex;
    align-items: center;
`]))),_e=f.ZP.div(oe||(oe=(0,v.Z)([`
    width: calc(100% - 16px);
    padding: 0 8px;
    .ant-typography {
        width: calc(100% - 14px - 38px - 16px);
    }
`]))),de="DragableBodyRow",et=function(r){return new Map([["mustRead","\u5FC5\u770B"],["course","\u6559\u7A0B"],["docs","\u6587\u6863"],["maintain","\u7EF4\u62A4"],["notice","\u901A\u77E5"],["upgrade","\u5347\u7EA7"],["stop","\u6682\u505C"],["mustRead","\u5FC5\u770B"]]).get(r)},tt=function(r,a){return r==="help"&&a===0?"#108ee9":a===0?"#FF4D4D":"rgba(0,0,0,.04)"},nt=function(r){var a=r.index,E=r.onMove,y=r.title,j=r.active,$=r.tags,S=r.disable,M=r.className,g=r.refresh,b=(0,He.Z)(r,Ve),O=(0,K.UO)(),P=O.doc_type,R=O.doc_id,T=(0,D.md)(),W=(0,c.useRef)(),A=(0,Je.L)({accept:de,collect:function(n){var h=n.getItem()||{},d=h.index;return d===a?{}:{isOver:n.isOver(),dropClassName:d<a?" drop-over-downward":" drop-over-upward"}},drop:function(n){E(n.index,a)},canDrop:function(){return!S&&a!==0}}),I=(0,Z.Z)(A,2),w=I[0],x=w.isOver,z=w.dropClassName,J=I[1],o=(0,Ge.c)({type:de,item:{index:a},canDrag:function(){return!S&&a!==0},collect:function(n){return{isDragging:n.isDragging()}}}),m=(0,Z.Z)(o,2),s=m[1];J(s(W));var u=function(){var i=(0,V.Z)((0,H.Z)().mark(function n(h){var d,B,p,L;return(0,H.Z)().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return d=h.id,N.next=3,(0,X.oe)({id:d});case 3:if(B=N.sent,p=B.code,L=B.msg,p===200){N.next=9;break}return Ue.default.warning(L),N.abrupt("return");case 9:d===+R&&D.m8.push("/".concat(P)),g();case 11:case"end":return N.stop()}},n)}));return function(h){return i.apply(this,arguments)}}(),l=function(n){var h=n.key;h==="delete"&&u(r)};return(0,e.jsxs)(ke,(0,F.Z)((0,F.Z)({ref:W},b),{},{className:_()(M,a===0?"can-not-drap":"can-drap",x&&z),children:[(0,e.jsxs)(qe,{children:[(0,e.jsx)(D.Nv,{accessible:T.IsSysTestAdmin(),fallback:(0,e.jsx)(Xe,{}),children:(0,e.jsx)(ce,{children:(0,e.jsx)(Ye.Z,{})})}),(0,e.jsxs)(_e,{children:[(0,e.jsx)(Be.Z,{style:{marginRight:6},status:j?"success":"error"}),(0,e.jsx)(ze.Z,{color:tt(P,a),style:{border:"transparent",color:a===0?"#fff":"rgba(0,0,0,.65)"},children:et($)}),(0,e.jsx)(le,{ellipsis:{tooltip:!0},children:y})]})]}),(0,e.jsx)(D.Nv,{accessible:T.IsSysTestAdmin(),children:(0,e.jsx)(We.Z,{trigger:["click"],overlay:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(Ae.Z,{onClick:l,items:[{key:"delete",label:"\u5220\u9664"}]})}),children:(0,e.jsx)(se,{children:(0,e.jsx)(Ke.Z,{})})})})]}))},rt=nt,ue=t(51893),Qt=t(64510),ve=t(87445),fe,he,at=f.ZP.div(fe||(fe=(0,v.Z)([`
    position: absolute;
    background-color: #fff;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
`]))),it=f.ZP.div(he||(he=(0,v.Z)([`
    width : 100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`]))),ot=function(){return(0,e.jsx)(at,{children:(0,e.jsx)(it,{children:(0,e.jsx)(ve.Z,{image:ve.Z.PRESENTED_IMAGE_DEFAULT})})})},k=ot,pe,ge,me,st=(0,f.ZP)(G.Z)(pe||(pe=(0,v.Z)([`
    height: 100%;
    width: 334px;
    overflow: hidden;
    background-color:#fff;
    flex-direction: column;
`]))),ct=(0,f.ZP)(G.Z)(ge||(ge=(0,v.Z)([`
    width: 100%;
    height: 48px;
    padding: 0 20px;
    border-bottom: 1px solid rgba(0,0,0,.1);
`]))),lt=(0,f.ZP)(G.Z)(me||(me=(0,v.Z)([`
    width: 100%;
    padding: 8px 0;
    position: relative;
`]))),dt=function(r){var a=r.onChange,E=(0,K.UO)(),y=E.doc_type,j=E.doc_id,$=(0,D.md)(),S=(0,c.useState)([]),M=(0,Z.Z)(S,2),g=M[0],b=M[1],O=(0,c.useState)(!0),P=(0,Z.Z)(O,2),R=P[0],T=P[1],W=(0,c.useState)({}),A=(0,Z.Z)(W,2),I=A[0],w=A[1],x=function(){var s=(0,V.Z)((0,H.Z)().mark(function u(){var l,i,n;return(0,H.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return T(!0),d.next=3,(0,X.Z0)({doc_type:y,page_size:1e3});case 3:return l=d.sent,i=l.data,n=l.code,b(n===200?i:[]),T(!1),d.abrupt("return",i);case 9:case"end":return d.stop()}},u)}));return function(){return s.apply(this,arguments)}}(),z=function(u){w((0,F.Z)({},u)),a((0,F.Z)({},u))};(0,c.useEffect)(function(){g.length&&z(j?g.filter(function(s){return s.id===+j})[0]:g[0])},[j,g]),(0,c.useEffect)(function(){return x(),function(){w({}),b([])}},[]);var J=function(){var s=(0,V.Z)((0,H.Z)().mark(function u(l,i){var n,h,d;return(0,H.Z)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(l!==i){p.next=2;break}return p.abrupt("return");case 2:return n=g.filter(function(L,U){return(0,Re.Z)(L),l===U})[0],b(g.reduce(function(L,U,N){return N===l&&U.id===n.id?L:N===i?l<i?L.concat(U,n):L.concat(n,U):L.concat(U)},[])),p.next=6,(0,X.r7)({id:n.id,order_id:i+1});case 6:h=p.sent,d=h.code,d!=200&&x();case 9:case"end":return p.stop()}},u)}));return function(l,i){return s.apply(this,arguments)}}(),o=function(u){u.id!==j&&(z(u),D.m8.replace("/".concat(y,"/").concat(u.id)))},m=function(){return D.m8.push("/".concat(y,"/create"))};return(0,e.jsxs)(st,{children:[(0,e.jsxs)(ct,{justify:"space-between",align:"middle",children:[(0,e.jsx)(Y.Z.Text,{children:y==="help_doc"?"\u5E2E\u52A9\u6587\u6863":"\u516C\u544A"}),(0,e.jsx)(D.Nv,{accessible:$.IsSysTestAdmin(),children:(0,e.jsx)(Me.Z,{type:"primary",size:"small",onClick:m,style:{padding:"0 4px"},children:(0,e.jsx)($e.Z,{})})})]}),(0,e.jsxs)("div",{style:{height:"calc(100% - 48px)",position:"relative",width:"100%",overflowY:"auto"},children:[(0,e.jsx)(we.W,{backend:Fe.PD,children:(0,e.jsx)(lt,{children:g.map(function(s,u){return(0,e.jsx)(rt,(0,F.Z)((0,F.Z)({},s),{},{index:u,className:(I==null?void 0:I.id)===s.id&&"doc_active",onClick:function(){return o(s)},onMove:J,refresh:x}),s.id)})})}),g.length===0&&(0,e.jsx)(k,{}),(0,e.jsx)(ue.Z,{loading:R})]})]})},ut=dt,Vt=t(57359),vt=t(34423),ft=t(42923),xe=t(45972),ht={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z"}}]},name:"edit",theme:"filled"},pt=ht,gt=t(25078),Ze=function(r,a){return c.createElement(gt.Z,(0,xe.Z)((0,xe.Z)({},r),{},{ref:a,icon:pt}))};Ze.displayName="EditFilled";var mt=c.forwardRef(Ze),xt=t(69193),ye,je,Zt=f.ZP.div(ye||(ye=(0,v.Z)([`
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
`]))),yt=f.ZP.div(je||(je=(0,v.Z)([`
    width: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
    padding: 4px 0 4px 20px;
`]))),q=function(r){var a=r.level,E=r.text,y;return document.querySelectorAll(".ProseMirror h".concat(a)).forEach(function(j){j.innerText===E&&(y=j)}),y},jt=function(r){var a=r.source,E=(0,K.TH)(),y=E.pathname,j=E.hash,$=c.useState(void 0),S=(0,Z.Z)($,2),M=S[0],g=S[1],b=c.useState(void 0),O=(0,Z.Z)(b,2),P=O[0],R=O[1],T=c.useState(!0),W=(0,Z.Z)(T,2),A=W[0],I=W[1],w=function(m){g(m),R(new Date().getTime()),I(!1),(0,xt.Z)(q(m),{behavior:"smooth",block:"start",inline:"start"})};c.useEffect(function(){if(!!A){if(M){D.m8.replace("".concat(y,"#").concat(M.text)),g(void 0);return}var o=document.querySelector(".ProseMirror"),m=x==null?void 0:x.reduce(function(s,u){var l,i,n=Math.abs(((l=q(u))===null||l===void 0?void 0:l.offsetTop)-o.scrollTop),h=Math.abs(((i=q(s))===null||i===void 0?void 0:i.offsetTop)-o.scrollTop);return n<h?u:s});D.m8.replace("".concat(y,"#").concat(m.text))}},[A]),c.useEffect(function(){if(!!P){var o=setInterval(function(){new Date().getTime()-P>200&&I(!0)},60);return function(){clearInterval(o)}}},[P]);var x=c.useMemo(function(){return a?a==null?void 0:a.filter(function(o){var m=o.text;return m&&!!m.trim()}):[]},[a]),z=function(){R(new Date().getTime()),I(!1)};c.useEffect(function(){var o=x.findIndex(function(s){var u=s.text;return"#".concat(u)===decodeURI(j)});if(!!~o){var m=setTimeout(function(){return w(x[o])},1e3);return function(){clearTimeout(m)}}},[x]),c.useEffect(function(){var o=document.querySelector(".ProseMirror");if(!!o)return o.addEventListener("scroll",z),function(){o.removeEventListener("scroll",z)}},[]);var J=c.useMemo(function(){var o=x.reduce(function(l,i){var n=i.level;return l[n]=l[n]?l[n]+1:1,l},{}),m=Object.keys(o),s=m.sort(function(l,i){return l-i}),u=s!=null&&s[0]?+(s==null?void 0:s[0]):1;return u},[x]);return(0,e.jsx)(Zt,{children:(0,e.jsx)("div",{className:"catalog-box",children:x.map(function(o){return(0,e.jsx)(yt,{onClick:function(){return w(o)},className:_()(j==="#".concat(o.text)&&"item-active"),children:(0,e.jsx)(Y.Z.Text,{ellipsis:{tooltip:{placement:"left"}},style:{textIndent:o.level-J+"em"},children:o.text})},o.index)})})})},Dt=jt,Ct=t(21801),De,Ce,Ee,Se,be,Oe,Et=(0,f.ZP)(G.Z)(De||(De=(0,v.Z)([`
    height: 100%;
    width:100%;
    position: relative;
    padding: 20px;
`]))),St=f.ZP.div(Ce||(Ce=(0,v.Z)([`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    flex-direction: row;
`]))),bt=f.ZP.div(Ee||(Ee=(0,v.Z)([`
    width: `,`;
    height: 100%;
    display: flex;
    overflow-y: auto;
    /* padding-top: 20px; */
    flex-direction: column;
    gap: 8px;
`])),function(C){var r=C.hasCatalog;return r?"calc(100% - 230px)":"100%"}),Ot=f.ZP.div(Se||(Se=(0,v.Z)([`
    display:flex;
    width: 100%;
    height: 38px;
    align-items: center;
    justify-content: space-between;
    /* padding-right: 20px; */
    h2 {
        margin: 0 !important;
    }
`]))),Pt=f.ZP.div(be||(be=(0,v.Z)([`
    width: 100%;
    min-height : calc(100% - 80px);
`]))),Tt=f.ZP.span(Oe||(Oe=(0,v.Z)([`
    cursor: pointer;
    width: 60px;
    &:hover {
        color :#108ee9;
    }
`]))),It=function(r){var a=r.id,E=r.title,y=r.gmt_modified,j=(0,K.UO)(),$=j.doc_type,S=(0,D.md)(),M=(0,c.useState)(!0),g=(0,Z.Z)(M,2),b=g[0],O=g[1],P=(0,c.useState)(),R=(0,Z.Z)(P,2),T=R[0],W=R[1],A=(0,c.useState)(!1),I=(0,Z.Z)(A,2),w=I[0],x=I[1],z=c.useState(""),J=(0,Z.Z)(z,2),o=J[0],m=J[1],s=(0,c.useRef)(null),u=function(){var i=(0,V.Z)((0,H.Z)().mark(function n(){var h,d;return(0,H.Z)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(O(!0),!a){p.next=7;break}return p.next=4,(0,X.Z0)({id:a});case 4:h=p.sent,d=h.data,d[0]&&m((0,Ct.l5)(d[0].content));case 7:O(!1);case 8:case"end":return p.stop()}},n)}));return function(){return i.apply(this,arguments)}}();(0,c.useEffect)(function(){return u(),function(){O(!0),x(!1)}},[a]);var l=(0,c.useMemo)(function(){if(!T)return[];var i=T.getJSON(),n=i.content;return n==null?void 0:n.filter(function(h){var d=h.type,B=h.content;return d==="heading"&&B}).reduce(function(h,d,B){var p=d.attrs,L=d.content;if(!L)return h;var U=L.reduce(function(Wt,At){return Wt+=At.text},""),N=p.level;return h.concat({level:N,text:U,node:d,index:B})},[])},[T]);return(0,e.jsxs)(Et,{children:[(0,e.jsxs)(St,{children:[!b&&!o?(0,e.jsx)(k,{}):(0,e.jsxs)(bt,{hasCatalog:l.length?1:0,children:[E&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(Ot,{children:[(0,e.jsx)(Y.Z.Title,{ellipsis:{tooltip:!0},level:2,children:E}),(0,e.jsx)(D.Nv,{accessible:S.IsSysTestAdmin(),children:(0,e.jsx)(Tt,{onClick:function(){return D.m8.push("/".concat($,"/edit/").concat(a))},children:(0,e.jsxs)(vt.Z,{children:[(0,e.jsx)(mt,{}),"\u7F16\u8F91"]})})})]}),(0,e.jsxs)(Y.Z.Text,{type:"secondary",children:["\u66F4\u65B0\u65F6\u95F4\uFF1A",y]})]}),(0,e.jsx)(Pt,{ref:s,children:(0,e.jsx)(ft.Z,{editable:!1,content:o,onCreate:function(n){var h=n.editor;W(h)}})})]}),!!l.length&&(0,e.jsx)(Dt,{source:l})]}),w&&(0,e.jsx)(k,{}),(0,e.jsx)(ue.Z,{loading:b})]})},Lt=It,Nt=t(526),Pe=c.createContext(null),Xt=function(){return React.useContext(Pe)},Te,Ie,Le,Mt=(0,f.ZP)(G.Z)(Te||(Te=(0,v.Z)([`
    width: 100%;
    height: `,`;
    padding:0 20px;
    display: flex;
    flex-direction: column;
`])),function(C){var r=C.height;return r?r+"px":"100%"}),Rt=(0,f.ZP)(G.Z)(Ie||(Ie=(0,v.Z)([`
    width: 100%;
    height: 100%;
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    gap: 24px;
`]))),$t=(0,f.ZP)(G.Z)(Le||(Le=(0,v.Z)([`
    width: calc(100% - 334px - 24px);
    height: 100%;
    background-color: #ffffff;
`]))),wt=function(){var r=(0,Nt.CR)(),a=r.height,E=(0,K.UO)(),y=E.doc_type,j=(0,c.useState)({}),$=(0,Z.Z)(j,2),S=$[0],M=$[1],g=(0,c.useState)(!0),b=(0,Z.Z)(g,2),O=b[0],P=b[1],R=(0,c.useMemo)(function(){return JSON.stringify(S)==="{}"?"".concat(y==="notice"?"\u516C\u544A":"\u5E2E\u52A9\u6587\u6863"," \u2014 T-One"):"".concat(S.title," \u2014 T-One")},[S]),T={initLoading:O,setInitLoading:P};return(0,e.jsxs)(Mt,{height:a-70,children:[(0,e.jsx)(D.ql,{children:(0,e.jsx)("title",{children:R})}),(0,e.jsx)(Pe.Provider,{value:T,children:(0,e.jsxs)(Rt,{children:[(0,e.jsx)(ut,{onChange:M}),(0,e.jsx)($t,{children:(0,e.jsx)(Lt,(0,F.Z)({},S))})]})})]})},Ft=wt}}]);
