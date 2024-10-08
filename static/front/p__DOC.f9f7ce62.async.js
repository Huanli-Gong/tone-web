(self.webpackChunktone_front=self.webpackChunktone_front||[]).push([[9724],{24458:function(He,ie,t){"use strict";var E=t(20228),Z=t(11382),K=t(20310),R=t(67294),u=t(12788),o=t(85893),f,me,n=u.ZP.div(f||(f=(0,K.Z)([`
    width : 100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`]))),a=u.ZP.div(me||(me=(0,K.Z)([`
    position: absolute;
    background-color: #fff;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
`]))),i=function(r){var s=r.loading;return s?(0,o.jsx)(a,{children:(0,o.jsx)(n,{children:(0,o.jsx)(Z.Z,{spinning:s})})}):(0,o.jsx)(o.Fragment,{})};ie.Z=i},5363:function(He,ie,t){"use strict";t.r(ie),t.d(ie,{default:function(){return Gt}});var E=t(11849),Z=t(2824),K=t(13062),R=t(71230),u=t(20310),o=t(67294),f=t(12788),me=t(57663),n=t(71577),a=t(402),i=t(97272),S=t(19273),r=t(39428),s=t(3182),z=t(49101),j=t(99185),P=t(20009),C=t(16917),Ue=t(90900),Ke=t(57865),ze=t(59250),ge=t(13013),A=t(30887),se=t(28682),xe=t(71153),le=t(60331),ye=t(54029),ce=t(79166),Ze=t(34792),je=t(48086),Re=t(93224),We=t(89628),De=t(9690),$e=t(80766),Be=t(92977),Ae=t(94184),Ie=t.n(Ae),e=t(85893),H=["index","onMove","title","active","tags","disable","className","refresh"],be,q,m,de,ue,fe,Ee,Ce=f.ZP.div(be||(be=(0,u.Z)([`
    width: 30px;
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
`]))),ve=f.ZP.div(q||(q=(0,u.Z)([`
    width: 16px;
    height: 100%;
    display: flex;
    cursor: pointer;
    background-color: rgba(0,0,0,.04);
    align-items: center;
    justify-content: center;
    visibility: hidden;
`]))),Oe=f.ZP.div(m||(m=(0,u.Z)([`
    width: 16px;
    height: 100%;
`]))),he=(0,f.ZP)(i.Z.Text)(de||(de=(0,u.Z)([`

`]))),Se=f.ZP.div(ue||(ue=(0,u.Z)([`
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
`])),ve,Ce,he),we=f.ZP.div(fe||(fe=(0,u.Z)([`
    width: calc(100% - 30px);
    height: 100%;
    display: flex;
    align-items: center;
`]))),Me=f.ZP.div(Ee||(Ee=(0,u.Z)([`
    width: calc(100% - 16px);
    padding: 0 8px;
    .ant-typography {
        width: calc(100% - 14px - 38px - 16px);
    }
`]))),X="DragableBodyRow",ee=function(l){return new Map([["mustRead","\u5FC5\u770B"],["course","\u6559\u7A0B"],["docs","\u6587\u6863"],["maintain","\u7EF4\u62A4"],["notice","\u901A\u77E5"],["upgrade","\u5347\u7EA7"],["stop","\u6682\u505C"],["mustRead","\u5FC5\u770B"]]).get(l)},Pe=function(l,d){return l==="help"&&d===0?"#108ee9":d===0?"#FF4D4D":"rgba(0,0,0,.04)"},Te=function(l){var d=l.index,N=l.onMove,T=l.title,L=l.active,te=l.tags,$=l.disable,k=l.className,w=l.refresh,U=(0,Re.Z)(l,H),Y=(0,P.UO)(),W=Y.doc_type,ne=Y.doc_id,V=(0,C.md)(),Q=(0,o.useRef)(),ae=(0,We.L)({accept:X,collect:function(c){var D=c.getItem()||{},g=D.index;return g===d?{}:{isOver:c.isOver(),dropClassName:g<d?" drop-over-downward":" drop-over-upward"}},drop:function(c){N(c.index,d)},canDrop:function(){return!$&&d!==0}}),G=(0,Z.Z)(ae,2),_=G[0],M=_.isOver,oe=_.dropClassName,pe=G[1],v=(0,De.c)({type:X,item:{index:d},canDrag:function(){return!$&&d!==0},collect:function(c){return{isDragging:c.isDragging()}}}),b=(0,Z.Z)(v,2),h=b[1];pe(h(Q));var x=function(){var p=(0,s.Z)((0,r.Z)().mark(function c(D){var g,B,I,O;return(0,r.Z)().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return g=D.id,J.next=3,(0,j.oe)({id:g});case 3:if(B=J.sent,I=B.code,O=B.msg,I===200){J.next=9;break}return je.default.warning(O),J.abrupt("return");case 9:g===+ne&&C.m8.push("/".concat(W)),w();case 11:case"end":return J.stop()}},c)}));return function(D){return p.apply(this,arguments)}}(),y=function(c){var D=c.key;D==="delete"&&x(l)};return(0,e.jsxs)(Se,(0,E.Z)((0,E.Z)({ref:Q},U),{},{className:Ie()(k,d===0?"can-not-drap":"can-drap",M&&oe),children:[(0,e.jsxs)(we,{children:[(0,e.jsx)(C.Nv,{accessible:V.IsSysTestAdmin(),fallback:(0,e.jsx)(Oe,{}),children:(0,e.jsx)(ve,{children:(0,e.jsx)($e.Z,{})})}),(0,e.jsxs)(Me,{children:[(0,e.jsx)(ce.Z,{style:{marginRight:6},status:L?"success":"error"}),(0,e.jsx)(le.Z,{color:Pe(W,d),style:{border:"transparent",color:d===0?"#fff":"rgba(0,0,0,.65)"},children:ee(te)}),(0,e.jsx)(he,{ellipsis:{tooltip:!0},children:T})]})]}),(0,e.jsx)(C.Nv,{accessible:V.IsSysTestAdmin(),children:(0,e.jsx)(ge.Z,{trigger:["click"],overlay:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(se.Z,{onClick:y,items:[{key:"delete",label:"\u5220\u9664"}]})}),children:(0,e.jsx)(Ce,{children:(0,e.jsx)(Be.Z,{})})})})]}))},Fe=Te,Le=t(24458),Ye=t(13254),Ne=t(14277),Je,Xe,vt=f.ZP.div(Je||(Je=(0,u.Z)([`
    position: absolute;
    background-color: #fff;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
`]))),ht=f.ZP.div(Xe||(Xe=(0,u.Z)([`
    width : 100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`]))),pt=function(){return(0,e.jsx)(vt,{children:(0,e.jsx)(ht,{children:(0,e.jsx)(Ne.Z,{image:Ne.Z.PRESENTED_IMAGE_DEFAULT})})})},Ve=pt,ke,Qe,_e,mt=(0,f.ZP)(R.Z)(ke||(ke=(0,u.Z)([`
    height: 100%;
    width: 334px;
    overflow: hidden;
    background-color:#fff;
    flex-direction: column;
`]))),gt=(0,f.ZP)(R.Z)(Qe||(Qe=(0,u.Z)([`
    width: 100%;
    height: 48px;
    padding: 0 20px;
    border-bottom: 1px solid rgba(0,0,0,.1);
`]))),xt=(0,f.ZP)(R.Z)(_e||(_e=(0,u.Z)([`
    width: 100%;
    padding: 8px 0;
    position: relative;
`]))),yt=function(l){var d=l.onChange,N=(0,P.UO)(),T=N.doc_type,L=N.doc_id,te=(0,C.md)(),$=(0,o.useState)([]),k=(0,Z.Z)($,2),w=k[0],U=k[1],Y=(0,o.useState)(!0),W=(0,Z.Z)(Y,2),ne=W[0],V=W[1],Q=(0,o.useState)({}),ae=(0,Z.Z)(Q,2),G=ae[0],_=ae[1],M=function(){var h=(0,s.Z)((0,r.Z)().mark(function x(){var y,p,c;return(0,r.Z)().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return V(!0),g.next=3,(0,j.Z0)({doc_type:T,page_size:1e3});case 3:return y=g.sent,p=y.data,c=y.code,U(c===200?p:[]),V(!1),g.abrupt("return",p);case 9:case"end":return g.stop()}},x)}));return function(){return h.apply(this,arguments)}}(),oe=function(x){_((0,E.Z)({},x)),d((0,E.Z)({},x))};(0,o.useEffect)(function(){w.length&&oe(L?w.filter(function(h){return h.id===+L})[0]:w[0])},[L,w]),(0,o.useEffect)(function(){return M(),function(){_({}),U([])}},[]);var pe=function(){var h=(0,s.Z)((0,r.Z)().mark(function x(y,p){var c,D,g;return(0,r.Z)().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:if(y!==p){I.next=2;break}return I.abrupt("return");case 2:return c=w.filter(function(O,re){return(0,S.Z)(O),y===re})[0],U(w.reduce(function(O,re,J){return J===y&&re.id===c.id?O:J===p?y<p?O.concat(re,c):O.concat(c,re):O.concat(re)},[])),I.next=6,(0,j.r7)({id:c.id,order_id:p+1});case 6:D=I.sent,g=D.code,g!=200&&M();case 9:case"end":return I.stop()}},x)}));return function(y,p){return h.apply(this,arguments)}}(),v=function(x){x.id!==L&&(oe(x),C.m8.replace("/".concat(T,"/").concat(x.id)))},b=function(){return C.m8.push("/".concat(T,"/create"))};return(0,e.jsxs)(mt,{children:[(0,e.jsxs)(gt,{justify:"space-between",align:"middle",children:[(0,e.jsx)(i.Z.Text,{children:T==="help_doc"?"\u5E2E\u52A9\u6587\u6863":"\u516C\u544A"}),(0,e.jsx)(C.Nv,{accessible:te.IsSysTestAdmin(),children:(0,e.jsx)(n.Z,{type:"primary",size:"small",onClick:b,style:{padding:"0 4px"},children:(0,e.jsx)(z.Z,{})})})]}),(0,e.jsxs)("div",{style:{height:"calc(100% - 48px)",position:"relative",width:"100%",overflowY:"auto"},children:[(0,e.jsx)(Ue.W,{backend:Ke.PD,children:(0,e.jsx)(xt,{children:w.map(function(h,x){return(0,e.jsx)(Fe,(0,E.Z)((0,E.Z)({},h),{},{index:x,className:(G==null?void 0:G.id)===h.id&&"doc_active",onClick:function(){return v(h)},onMove:pe,refresh:M}),h.id)})})}),w.length===0&&(0,e.jsx)(Ve,{}),(0,e.jsx)(Le.Z,{loading:ne})]})]})},Zt=yt,Qt=t(49111),qe=t(19650),jt=t(52638),et=t(28991),Dt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z"}}]},name:"edit",theme:"filled"},bt=Dt,Et=t(27029),Ct=function(l,d){return o.createElement(Et.Z,(0,et.Z)((0,et.Z)({},l),{},{ref:d,icon:bt}))},Ot=o.forwardRef(Ct),St=Ot,wt=t(43951),tt,nt,Mt=f.ZP.div(tt||(tt=(0,u.Z)([`
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
`]))),Pt=f.ZP.div(nt||(nt=(0,u.Z)([`
    width: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
    padding: 4px 0 4px 20px;
`]))),Ge=function(l){var d=l.level,N=l.text,T;return document.querySelectorAll(".ProseMirror h".concat(d)).forEach(function(L){L.innerText===N&&(T=L)}),T},Tt=function(l){var d=l.source,N=(0,P.TH)(),T=N.pathname,L=N.hash,te=o.useState(void 0),$=(0,Z.Z)(te,2),k=$[0],w=$[1],U=o.useState(void 0),Y=(0,Z.Z)(U,2),W=Y[0],ne=Y[1],V=o.useState(!0),Q=(0,Z.Z)(V,2),ae=Q[0],G=Q[1],_=function(b){w(b),ne(new Date().getTime()),G(!1),(0,wt.Z)(Ge(b),{behavior:"smooth",block:"start",inline:"start"})};o.useEffect(function(){if(!!ae){if(k){C.m8.replace("".concat(T,"#").concat(k.text)),w(void 0);return}var v=document.querySelector(".ProseMirror"),b=M==null?void 0:M.reduce(function(h,x){var y,p,c=Math.abs(((y=Ge(x))===null||y===void 0?void 0:y.offsetTop)-v.scrollTop),D=Math.abs(((p=Ge(h))===null||p===void 0?void 0:p.offsetTop)-v.scrollTop);return c<D?x:h});C.m8.replace("".concat(T,"#").concat(b.text))}},[ae]),o.useEffect(function(){if(!!W){var v=setInterval(function(){new Date().getTime()-W>200&&G(!0)},60);return function(){clearInterval(v)}}},[W]);var M=o.useMemo(function(){return d?d==null?void 0:d.filter(function(v){var b=v.text;return b&&!!b.trim()}):[]},[d]),oe=function(){ne(new Date().getTime()),G(!1)};o.useEffect(function(){var v=M.findIndex(function(h){var x=h.text;return"#".concat(x)===decodeURI(L)});if(!!~v){var b=setTimeout(function(){return _(M[v])},1e3);return function(){clearTimeout(b)}}},[M]),o.useEffect(function(){var v=document.querySelector(".ProseMirror");if(!!v)return v.addEventListener("scroll",oe),function(){v.removeEventListener("scroll",oe)}},[]);var pe=o.useMemo(function(){var v=M.reduce(function(y,p){var c=p.level;return y[c]=y[c]?y[c]+1:1,y},{}),b=Object.keys(v),h=b.sort(function(y,p){return y-p}),x=h!=null&&h[0]?+(h==null?void 0:h[0]):1;return x},[M]);return(0,e.jsx)(Mt,{children:(0,e.jsx)("div",{className:"catalog-box",children:M.map(function(v){return(0,e.jsx)(Pt,{onClick:function(){return _(v)},className:Ie()(L==="#".concat(v.text)&&"item-active"),children:(0,e.jsx)(i.Z.Text,{ellipsis:{tooltip:{placement:"left"}},style:{textIndent:v.level-pe+"em"},children:v.text})},v.index)})})})},Lt=Tt,Rt=t(81284),rt,at,ot,it,st,lt,Wt=(0,f.ZP)(R.Z)(rt||(rt=(0,u.Z)([`
    height: 100%;
    width:100%;
    position: relative;
    padding: 20px;
`]))),It=f.ZP.div(at||(at=(0,u.Z)([`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    flex-direction: row;
`]))),Ft=f.ZP.div(ot||(ot=(0,u.Z)([`
    width: `,`;
    height: 100%;
    display: flex;
    overflow-y: auto;
    /* padding-top: 20px; */
    flex-direction: column;
    gap: 8px;
`])),function(F){var l=F.hasCatalog;return l?"calc(100% - 230px)":"100%"}),Nt=f.ZP.div(it||(it=(0,u.Z)([`
    display:flex;
    width: 100%;
    height: 38px;
    align-items: center;
    justify-content: space-between;
    /* padding-right: 20px; */
    h2 {
        margin: 0 !important;
    }
`]))),$t=f.ZP.div(st||(st=(0,u.Z)([`
    width: 100%;
    min-height : calc(100% - 80px);
`]))),Bt=f.ZP.span(lt||(lt=(0,u.Z)([`
    cursor: pointer;
    width: 60px;
    &:hover {
        color :#108ee9;
    }
`]))),At=function(l){var d=l.id,N=l.title,T=l.gmt_created,L=l.gmt_modified,te=(0,P.UO)(),$=te.doc_type,k=(0,C.md)(),w=(0,o.useState)(!0),U=(0,Z.Z)(w,2),Y=U[0],W=U[1],ne=(0,o.useState)(),V=(0,Z.Z)(ne,2),Q=V[0],ae=V[1],G=(0,o.useState)(!1),_=(0,Z.Z)(G,2),M=_[0],oe=_[1],pe=o.useState(""),v=(0,Z.Z)(pe,2),b=v[0],h=v[1],x=(0,o.useRef)(null),y=function(){var c=(0,s.Z)((0,r.Z)().mark(function D(){var g,B;return(0,r.Z)().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:if(W(!0),!d){O.next=7;break}return O.next=4,(0,j.Z0)({id:d});case 4:g=O.sent,B=g.data,B[0]&&h((0,Rt.l5)(B[0].content));case 7:W(!1);case 8:case"end":return O.stop()}},D)}));return function(){return c.apply(this,arguments)}}();(0,o.useEffect)(function(){return y(),function(){W(!0),oe(!1)}},[d]);var p=(0,o.useMemo)(function(){if(!Q)return[];var c=Q.getJSON(),D=c.content;return D==null?void 0:D.filter(function(g){var B=g.type,I=g.content;return B==="heading"&&I}).reduce(function(g,B,I){var O=B.attrs,re=B.content;if(!re)return g;var J=re.reduce(function(Xt,kt){return Xt+=kt.text},""),Jt=O.level;return g.concat({level:Jt,text:J,node:B,index:I})},[])},[Q]);return(0,e.jsxs)(Wt,{children:[(0,e.jsxs)(It,{children:[!Y&&!b?(0,e.jsx)(Ve,{}):(0,e.jsxs)(Ft,{hasCatalog:p.length?1:0,children:[N&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(Nt,{children:[(0,e.jsx)(i.Z.Title,{ellipsis:{tooltip:!0},level:2,children:N}),(0,e.jsx)(C.Nv,{accessible:k.IsSysTestAdmin(),children:(0,e.jsx)(Bt,{onClick:function(){return C.m8.push("/".concat($,"/edit/").concat(d))},children:(0,e.jsxs)(qe.Z,{children:[(0,e.jsx)(St,{}),"\u7F16\u8F91"]})})})]}),(0,e.jsxs)(qe.Z,{size:16,children:[(0,e.jsxs)(i.Z.Text,{type:"secondary",children:["\u521B\u5EFA\u65F6\u95F4\uFF1A",T]}),(0,e.jsxs)(i.Z.Text,{type:"secondary",children:["\u66F4\u65B0\u65F6\u95F4\uFF1A",L]})]})]}),(0,e.jsx)($t,{ref:x,children:(0,e.jsx)(jt.Z,{editable:!1,content:b,onCreate:function(D){var g=D.editor;ae(g)}})})]}),!!p.length&&(0,e.jsx)(Lt,{source:p})]}),M&&(0,e.jsx)(Ve,{}),(0,e.jsx)(Le.Z,{loading:Y})]})},Ht=At,Ut=t(60035),ct=o.createContext(null),_t=function(){return React.useContext(ct)},dt,ut,ft,Kt=(0,f.ZP)(R.Z)(dt||(dt=(0,u.Z)([`
    width: 100%;
    height: `,`;
    padding:0 20px;
    display: flex;
    flex-direction: column;
`])),function(F){var l=F.height;return l?l+"px":"100%"}),zt=(0,f.ZP)(R.Z)(ut||(ut=(0,u.Z)([`
    width: 100%;
    height: 100%;
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    gap: 24px;
`]))),Yt=(0,f.ZP)(R.Z)(ft||(ft=(0,u.Z)([`
    width: calc(100% - 334px - 24px);
    height: 100%;
    background-color: #ffffff;
`]))),Vt=function(){var l=(0,Ut.CR)(),d=l.height,N=(0,P.UO)(),T=N.doc_type,L=(0,o.useState)({}),te=(0,Z.Z)(L,2),$=te[0],k=te[1],w=(0,o.useState)(!0),U=(0,Z.Z)(w,2),Y=U[0],W=U[1],ne=(0,o.useMemo)(function(){return JSON.stringify($)==="{}"?"".concat(T==="notice"?"\u516C\u544A":"\u5E2E\u52A9\u6587\u6863"," \u2014 T-One"):"".concat($.title," \u2014 T-One")},[$]),V={initLoading:Y,setInitLoading:W};return(0,e.jsxs)(Kt,{height:d-70,children:[(0,e.jsx)(C.ql,{children:(0,e.jsx)("title",{children:ne})}),(0,e.jsx)(ct.Provider,{value:V,children:(0,e.jsxs)(zt,{children:[(0,e.jsx)(Zt,{onChange:k}),(0,e.jsx)(Yt,{children:(0,e.jsx)(Ht,(0,E.Z)({},$))})]})})]})},Gt=Vt},99185:function(He,ie,t){"use strict";t.d(ie,{Z0:function(){return R},do:function(){return u},r7:function(){return o},oe:function(){return f}});var E=t(39428),Z=t(3182),K=t(16917),R=function(){var n=(0,Z.Z)((0,E.Z)().mark(function a(i){return(0,E.Z)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,K.WY)("/api/sys/help_doc/",{params:i}));case 1:case"end":return r.stop()}},a)}));return function(i){return n.apply(this,arguments)}}(),u=function(a){return(0,K.WY)("/api/sys/help_doc/",{method:"post",data:a})},o=function(){var n=(0,Z.Z)((0,E.Z)().mark(function a(i){return(0,E.Z)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,K.WY)("/api/sys/help_doc/",{method:"put",data:i}));case 1:case"end":return r.stop()}},a)}));return function(i){return n.apply(this,arguments)}}(),f=function(){var n=(0,Z.Z)((0,E.Z)().mark(function a(i){return(0,E.Z)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,K.WY)("/api/sys/help_doc/",{method:"delete",data:i}));case 1:case"end":return r.stop()}},a)}));return function(i){return n.apply(this,arguments)}}(),me=null},43951:function(He,ie,t){"use strict";t.d(ie,{Z:function(){return me}});const E=n=>typeof n=="object"&&n!=null&&n.nodeType===1,Z=(n,a)=>(!a||n!=="hidden")&&n!=="visible"&&n!=="clip",K=(n,a)=>{if(n.clientHeight<n.scrollHeight||n.clientWidth<n.scrollWidth){const i=getComputedStyle(n,null);return Z(i.overflowY,a)||Z(i.overflowX,a)||(S=>{const r=(s=>{if(!s.ownerDocument||!s.ownerDocument.defaultView)return null;try{return s.ownerDocument.defaultView.frameElement}catch(z){return null}})(S);return!!r&&(r.clientHeight<S.scrollHeight||r.clientWidth<S.scrollWidth)})(n)}return!1},R=(n,a,i,S,r,s,z,j)=>s<n&&z>a||s>n&&z<a?0:s<=n&&j<=i||z>=a&&j>=i?s-n-S:z>a&&j<i||s<n&&j>i?z-a+r:0,u=n=>{const a=n.parentElement;return a==null?n.getRootNode().host||null:a},o=(n,a)=>{var i,S,r,s;if(typeof document=="undefined")return[];const{scrollMode:z,block:j,inline:P,boundary:C,skipOverflowHiddenElements:Ue}=a,Ke=typeof C=="function"?C:q=>q!==C;if(!E(n))throw new TypeError("Invalid target");const ze=document.scrollingElement||document.documentElement,ge=[];let A=n;for(;E(A)&&Ke(A);){if(A=u(A),A===ze){ge.push(A);break}A!=null&&A===document.body&&K(A)&&!K(document.documentElement)||A!=null&&K(A,Ue)&&ge.push(A)}const se=(S=(i=window.visualViewport)==null?void 0:i.width)!=null?S:innerWidth,xe=(s=(r=window.visualViewport)==null?void 0:r.height)!=null?s:innerHeight,{scrollX:le,scrollY:ye}=window,{height:ce,width:Ze,top:je,right:Re,bottom:We,left:De}=n.getBoundingClientRect(),{top:$e,right:Be,bottom:Ae,left:Ie}=(q=>{const m=window.getComputedStyle(q);return{top:parseFloat(m.scrollMarginTop)||0,right:parseFloat(m.scrollMarginRight)||0,bottom:parseFloat(m.scrollMarginBottom)||0,left:parseFloat(m.scrollMarginLeft)||0}})(n);let e=j==="start"||j==="nearest"?je-$e:j==="end"?We+Ae:je+ce/2-$e+Ae,H=P==="center"?De+Ze/2-Ie+Be:P==="end"?Re+Be:De-Ie;const be=[];for(let q=0;q<ge.length;q++){const m=ge[q],{height:de,width:ue,top:fe,right:Ee,bottom:Ce,left:ve}=m.getBoundingClientRect();if(z==="if-needed"&&je>=0&&De>=0&&We<=xe&&Re<=se&&je>=fe&&We<=Ce&&De>=ve&&Re<=Ee)return be;const Oe=getComputedStyle(m),he=parseInt(Oe.borderLeftWidth,10),Se=parseInt(Oe.borderTopWidth,10),we=parseInt(Oe.borderRightWidth,10),Me=parseInt(Oe.borderBottomWidth,10);let X=0,ee=0;const Pe="offsetWidth"in m?m.offsetWidth-m.clientWidth-he-we:0,Te="offsetHeight"in m?m.offsetHeight-m.clientHeight-Se-Me:0,Fe="offsetWidth"in m?m.offsetWidth===0?0:ue/m.offsetWidth:0,Le="offsetHeight"in m?m.offsetHeight===0?0:de/m.offsetHeight:0;if(ze===m)X=j==="start"?e:j==="end"?e-xe:j==="nearest"?R(ye,ye+xe,xe,Se,Me,ye+e,ye+e+ce,ce):e-xe/2,ee=P==="start"?H:P==="center"?H-se/2:P==="end"?H-se:R(le,le+se,se,he,we,le+H,le+H+Ze,Ze),X=Math.max(0,X+ye),ee=Math.max(0,ee+le);else{X=j==="start"?e-fe-Se:j==="end"?e-Ce+Me+Te:j==="nearest"?R(fe,Ce,de,Se,Me+Te,e,e+ce,ce):e-(fe+de/2)+Te/2,ee=P==="start"?H-ve-he:P==="center"?H-(ve+ue/2)+Pe/2:P==="end"?H-Ee+we+Pe:R(ve,Ee,ue,he,we+Pe,H,H+Ze,Ze);const{scrollLeft:Ye,scrollTop:Ne}=m;X=Le===0?0:Math.max(0,Math.min(Ne+X/Le,m.scrollHeight-de/Le+Te)),ee=Fe===0?0:Math.max(0,Math.min(Ye+ee/Fe,m.scrollWidth-ue/Fe+Pe)),e+=Ne-X,H+=Ye-ee}be.push({el:m,top:X,left:ee})}return be},f=n=>n===!1?{block:"end",inline:"nearest"}:(a=>a===Object(a)&&Object.keys(a).length!==0)(n)?n:{block:"start",inline:"nearest"};function me(n,a){if(!n.isConnected||!(r=>{let s=r;for(;s&&s.parentNode;){if(s.parentNode===document)return!0;s=s.parentNode instanceof ShadowRoot?s.parentNode.host:s.parentNode}return!1})(n))return;const i=(r=>{const s=window.getComputedStyle(r);return{top:parseFloat(s.scrollMarginTop)||0,right:parseFloat(s.scrollMarginRight)||0,bottom:parseFloat(s.scrollMarginBottom)||0,left:parseFloat(s.scrollMarginLeft)||0}})(n);if((r=>typeof r=="object"&&typeof r.behavior=="function")(a))return a.behavior(o(n,a));const S=typeof a=="boolean"||a==null?void 0:a.behavior;for(const{el:r,top:s,left:z}of o(n,f(a))){const j=s-i.top+i.bottom,P=z-i.left+i.right;r.scroll({top:j,left:P,behavior:S})}}}}]);
