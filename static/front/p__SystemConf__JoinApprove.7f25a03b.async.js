(self.webpackChunktone_front=self.webpackChunktone_front||[]).push([[7133,2485],{88062:function(W){W.exports={pagination:"pagination___ooSI8",hidden:"hidden___3mzqN",table_empty:"table_empty___KRJ5E"}},51672:function(W){W.exports={ellipsis:"ellipsis___2ZImK"}},36196:function(W){W.exports={title:"title___33Rnf",company:"company___3DZ6B",department:"department___3m500",content:"content___2_tps",img:"img___DxRsk",face:"face___1jIDF",hidden:"hidden___1qkrq"}},65113:function(W){W.exports={layout:"layout___3rpA5",side:"side___1Eun6",menu:"menu___3HFIQ",menuItem:"menuItem___3mKuU",selected:"selected___1JoUm",tab_style:"tab_style___qheVA"}},82078:function(W,w,t){"use strict";var a=t(67448),_=t(47548),g=t(36142),O=t(76837),R=t(20418),n=t(488),D=t(22374),H=t(22812),N=t(88062),E=t.n(N),p=t(79390),r=t(52454),m=["total","loading","handlePage","showPagination","page","paginationBottom","pageSize","className"],c=function(x){var U=x.total,M=U===void 0?0:U,Y=x.loading,le=x.handlePage,F=x.showPagination,Ce=F===void 0?!0:F,J=x.page,fe=J===void 0?1:J,re=x.paginationBottom,Ze=re===void 0?!1:re,se=x.pageSize,l=se===void 0?10:se,me=x.className,he=(0,n.Z)(x,m),I=(0,H.YB)(),h=I.formatMessage,P=(0,D.useRef)(null),S=function A(C){var v=C.offsetTop;return C.offsetParent!=null&&(v+=A(C.offsetParent)),v},z=function(){var C=S(P.current);if(C!=0){var v=C-200;C<=377&&(v=C-377),window.scrollTo({top:v,behavior:"smooth"})}};return(0,r.jsxs)(_.Z,{spinning:Y,children:[(0,r.jsx)("div",{ref:P}),(0,r.jsx)(p.sL,(0,R.Z)({size:"small",className:"".concat(E().table_empty," ").concat(me),pagination:!1},he)),Ce&&(0,r.jsx)("div",{className:"".concat(Ze?null:"common_pagination"," ").concat(!Y&&M?E().pagination:E().hidden),children:M>=1&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:M==0?E().hidden:"",children:h({id:"pagination.total.strip"},{data:M})}),(0,r.jsx)(O.Z,{className:M==0?E().hidden:"",showQuickJumper:!0,showSizeChanger:!0,current:fe,pageSize:l,defaultCurrent:1,size:"small",onChange:function(C,v){le(C,v),z()},onShowSizeChange:function(C,v){le(C,v),z()},total:M})]})})]})};w.Z=c},89901:function(W,w,t){"use strict";var a=t(79625),_=t(96584),g=t(39190),O=t(22374),R=t(51672),n=t.n(R),D=t(52454),H=function(E){var p=E.title,r=E.width,m=r===void 0?"100%":r,c=E.children,i=E.refData,x=E.customStyle,U=x||{width:m},M=(0,O.useRef)(null),Y=(0,O.useState)(!1),le=(0,g.Z)(Y,2),F=le[0],Ce=le[1],J=function(){var Ze=M.current.clientWidth,se=M.current.scrollWidth;Ce(Ze<se)};(0,O.useEffect)(function(){J()},[i]);var fe=function(){return c?O.cloneElement(c):p||"-"};return F?(0,D.jsx)(_.Z,{placement:"topLeft",title:p,children:(0,D.jsx)("div",{ref:M,className:n().ellipsis,style:U,children:fe()})}):(0,D.jsx)("div",{ref:M,className:n().ellipsis,style:U,children:fe()})};w.Z=H},75073:function(W,w,t){"use strict";t.d(w,{mQ:function(){return N},gM:function(){return E},nU:function(){return r}});var a=t(40204),_=t(10724),g=t(41428),O=t(97939),R,n,D,H,N=(0,O.ZP)(_.Z)(R||(R=(0,g.Z)([`
    border:none !important;
    .ant-card-head {
        min-height: 48px;
        .ant-tabs-tab { min-height : 48px; }
        .ant-card-head-title{
            padding: 0;
        }
        .ant-card-extra {
            padding: 0;
        }
    }
    .common_pagination { padding-bottom:0 ;}
`]))),E=(0,O.ZP)(N)(n||(n=(0,g.Z)([`
    border:none!important;
    .ant-card-head .ant-card-head-wrapper { min-height:48px; }
    .ant-card-head-title { font-weight: normal; font-size:14px;}
    .commom_pagination { margin-bottom:0 ;}
    .ant-tabs-nav { margin : 0 ;}
    .ant-spin-nested-loading > div > .ant-spin {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`]))),p=(0,O.ZP)(_.Z)(D||(D=(0,g.Z)([`
    border:none !important;
    .ant-card-head {
        min-height: 48px;
        padding: 0 32px;
        .ant-tabs-tab { min-height : 48px; }
        .ant-card-head-title{
            padding: 0;
        }
        .ant-card-extra {
            padding: 0;
        }
    }
    .ant-card-body{
        padding: 24px 24px 24px 0px;
    }
    .common_pagination { padding-bottom:0 ;}
`]))),r=(0,O.ZP)(p)(H||(H=(0,g.Z)([`
    border:none!important;
    .ant-card-head .ant-card-head-wrapper { min-height:48px; }
    .ant-card-head-title { font-weight: normal; font-size:14px;}
    .commom_pagination { margin-bottom:0 ;}
    .ant-tabs-nav { margin : 0 ;}
    .ant-spin-nested-loading > div > .ant-spin {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`])))},11349:function(W,w,t){"use strict";t.r(w),t.d(w,{default:function(){return vt}});var a=t(35832),_=t(32326),g=t(39190),O=t(54905),R=t(90087),n=t(22374),D=t(67515),H=t(41083),N=t(67448),E=t(47548),p=t(14320),r=t(53479),m=t(20418),c=t(70772),i=t(6701),x=t(46721),U=t(94867),M=t(31650),Y=t(25100),le=t(90846),F=t(56511),Ce=t(57359),J=t(34423),fe=t(98604),re=t(68917),Ze=t(81138),se=t(96146),l=t(22812);function me(u){return he.apply(this,arguments)}function he(){return he=(0,_.Z)((0,a.Z)().mark(function u(d){return(0,a.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,l.WY)("/api/sys/approve/",{params:d}));case 1:case"end":return s.stop()}},u)})),he.apply(this,arguments)}function I(u){return h.apply(this,arguments)}function h(){return h=(0,_.Z)((0,a.Z)().mark(function u(d){return(0,a.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,l.WY)("/api/sys/approve/ ",{method:"POST",data:(0,m.Z)({},d)}));case 1:case"end":return s.stop()}},u)})),h.apply(this,arguments)}function P(){return S.apply(this,arguments)}function S(){return S=(0,_.Z)((0,a.Z)().mark(function u(){return(0,a.Z)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,l.WY)("/api/sys/approve/quantity/"));case 1:case"end":return o.stop()}},u)})),S.apply(this,arguments)}function z(u){return A.apply(this,arguments)}function A(){return A=(0,_.Z)((0,a.Z)().mark(function u(d){return(0,a.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,l.WY)("/api/sys/approve/detail/".concat(d,"/")));case 1:case"end":return s.stop()}},u)})),A.apply(this,arguments)}var C=t(36196),v=t.n(C),ye=t(82078),Se=t(52642),ge=t(9518),oe,ue,be=["svgRef","title"];function K(){return K=Object.assign?Object.assign.bind():function(u){for(var d=1;d<arguments.length;d++){var o=arguments[d];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(u[s]=o[s])}return u},K.apply(this,arguments)}function Ae(u,d){if(u==null)return{};var o=Re(u,d),s,j;if(Object.getOwnPropertySymbols){var Z=Object.getOwnPropertySymbols(u);for(j=0;j<Z.length;j++)s=Z[j],!(d.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(u,s)||(o[s]=u[s]))}return o}function Re(u,d){if(u==null)return{};var o={},s=Object.keys(u),j,Z;for(Z=0;Z<s.length;Z++)j=s[Z],!(d.indexOf(j)>=0)&&(o[j]=u[j]);return o}var xe=function(d){var o=d.svgRef,s=d.title,j=Ae(d,be);return n.createElement("svg",K({width:"16px",height:"16px",viewBox:"0 0 16 16",ref:o},j),s?n.createElement("title",null,s):null,oe||(oe=n.createElement("desc",null,"Created with Sketch.")),ue||(ue=n.createElement("g",{id:"\\u8D85\\u7BA1-\\u7533\\u8BF7\\u5BA1\\u6279",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},n.createElement("g",{id:"4-\\u5BA1\\u6279\\u8BB0\\u5F55",transform:"translate(-250.000000, -285.000000)"},n.createElement("g",{id:"\\u8868\\u683C",transform:"translate(238.000000, 111.000000)"},n.createElement("g",{transform:"translate(0.000000, 45.000000)",id:"\\u5185\\u5BB9"},n.createElement("g",null,n.createElement("g",{id:"\\u521B\\u5EFA\\u4EBA\\u5907\\u4EFD-3"},n.createElement("g",{id:"ws\\u6CE8\\u9500",transform:"translate(12.000000, 129.000000)"},n.createElement("rect",{id:"\\u77E9\\u5F62\\u5907\\u4EFD-5",fill:"#F5222D",x:0,y:0,width:16,height:16,rx:2}),n.createElement("polygon",{id:"W",fill:"#FFFFFF",fillRule:"nonzero",points:"6.51 12 8.14 6.05 8.17 6.05 9.79 12 10.7 12 12.75 4.86 11.83 4.86 10.26 10.85 10.22 10.85 8.6 4.86 7.71 4.86 6.08 10.85 6.04 10.85 4.47 4.86 3.55 4.86 5.6 12"}))))))))))},de=n.forwardRef(function(u,d){return n.createElement(xe,K({svgRef:d},u))}),te=t.p+"static/ws_cancel.74393df2.svg",V,Me,Ie=["svgRef","title"];function Oe(){return Oe=Object.assign?Object.assign.bind():function(u){for(var d=1;d<arguments.length;d++){var o=arguments[d];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(u[s]=o[s])}return u},Oe.apply(this,arguments)}function We(u,d){if(u==null)return{};var o=ne(u,d),s,j;if(Object.getOwnPropertySymbols){var Z=Object.getOwnPropertySymbols(u);for(j=0;j<Z.length;j++)s=Z[j],!(d.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(u,s)||(o[s]=u[s]))}return o}function ne(u,d){if(u==null)return{};var o={},s=Object.keys(u),j,Z;for(Z=0;Z<s.length;Z++)j=s[Z],!(d.indexOf(j)>=0)&&(o[j]=u[j]);return o}var L=function(d){var o=d.svgRef,s=d.title,j=We(d,Ie);return n.createElement("svg",Oe({width:"16px",height:"16px",viewBox:"0 0 16 16",ref:o},j),s?n.createElement("title",null,s):null,V||(V=n.createElement("desc",null,"Created with Sketch.")),Me||(Me=n.createElement("g",{id:"\\u8D85\\u7BA1-\\u7533\\u8BF7\\u5BA1\\u6279",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},n.createElement("g",{id:"4-\\u5BA1\\u6279\\u8BB0\\u5F55",transform:"translate(-250.000000, -230.000000)"},n.createElement("g",{id:"\\u8868\\u683C",transform:"translate(238.000000, 111.000000)"},n.createElement("g",{transform:"translate(0.000000, 45.000000)",id:"\\u5185\\u5BB9"},n.createElement("g",null,n.createElement("g",{id:"\\u521B\\u5EFA\\u4EBA\\u5907\\u4EFD-3"},n.createElement("g",{id:"\\u7F16\\u7EC4-3",transform:"translate(12.000000, 74.000000)"},n.createElement("rect",{id:"\\u77E9\\u5F62",fill:"#1890FF",x:0,y:0,width:16,height:16,rx:2}),n.createElement("polygon",{id:"W",fill:"#FFFFFF",fillRule:"nonzero",points:"6.01 12 7.64 6.05 7.67 6.05 9.29 12 10.2 12 12.25 4.86 11.33 4.86 9.76 10.85 9.72 10.85 8.1 4.86 7.21 4.86 5.58 10.85 5.54 10.85 3.97 4.86 3.05 4.86 5.1 12"}))))))))))},k=n.forwardRef(function(u,d){return n.createElement(L,Oe({svgRef:d},u))}),ce=t.p+"static/ws_create.4827c556.svg",Q=t(89901),Le=t(96579),ze=t(13059),we=t(53676),Be=t(8281),Te=t(58591),He=t(20693),Ne=t(3278),e=t(52454),it=(0,n.forwardRef)(function(u,d){var o=(0,n.useState)(!1),s=(0,g.Z)(o,2),j=s[0],Z=s[1],De=(0,n.useState)(""),Pe=(0,g.Z)(De,2),pe=Pe[0],ae=Pe[1],ve=function(q){Z(q||!1),ae("")};(0,n.useImperativeHandle)(d,function(){return{show:function(){Z(!0)},hide:function(){ve()}}});var je=function(){var G=(0,_.Z)((0,a.Z)().mark(function q(){return(0,a.Z)().wrap(function($){for(;;)switch($.prev=$.next){case 0:u.onOk(pe);case 1:case"end":return $.stop()}},q)}));return function(){return G.apply(this,arguments)}}();return(0,e.jsx)(we.Z,{title:(0,e.jsx)(l._H,{id:"JoinApprove.application.join"}),trigger:"click",visible:j,onVisibleChange:ve,content:(0,e.jsxs)(r.Z,{children:[(0,e.jsx)(i.Z,{span:24,style:{marginBottom:8},children:(0,e.jsxs)(J.Z,{children:[(0,e.jsx)(Y.Z.Text,{children:(0,e.jsx)(l._H,{id:"JoinApprove.refuse.reason"})}),(0,e.jsxs)(Y.Z.Text,{disabled:!0,children:["(",(0,e.jsx)(l._H,{id:"JoinApprove.option"}),")"]})]})}),(0,e.jsx)(i.Z,{span:24,children:(0,e.jsx)(Ne.Z.TextArea,{value:pe,rows:3,maxLength:200,onChange:function(q){return ae(q.target.value)}})}),(0,e.jsx)(Te.Z,{style:{marginTop:20,marginBottom:10}}),(0,e.jsx)(i.Z,{span:24,children:(0,e.jsx)(r.Z,{justify:"end",children:(0,e.jsxs)(J.Z,{children:[(0,e.jsx)(U.Z,{onClick:function(){return ve()},children:(0,e.jsx)(l._H,{id:"operation.cancel"})}),(0,e.jsx)(U.Z,{onClick:je,children:(0,e.jsx)(l._H,{id:"JoinApprove.confirm.refuse"})})]})})})]}),children:(0,e.jsx)(U.Z,{onClick:function(){return Z(!0)},children:(0,e.jsx)(l._H,{id:"operation.refuse"})})})}),lt=t(39935),Je=t(6130),ot=function(d){var o=d.status,s=d.onRef,j=d.getNum,Z=(0,l.YB)(),De=Z.formatMessage,Pe=(0,n.useState)({}),pe=(0,g.Z)(Pe,2),ae=pe[0],ve=pe[1],je=(0,n.useState)(!0),G=(0,g.Z)(je,2),q=G[0],ie=G[1],$=(0,n.useState)(!0),_e=(0,g.Z)($,2),Ee=_e[0],Ve=_e[1],ft=(0,n.useState)(1),Qe=(0,g.Z)(ft,2),mt=Qe[0],ht=Qe[1],gt=(0,n.useState)(10),Ge=(0,g.Z)(gt,2),xt=Ge[0],jt=Ge[1],_t=(0,n.useState)(!1),ke=(0,g.Z)(_t,2),Et=ke[0],Ue=ke[1],qe=(0,n.useRef)(null),Ct={id:null,object_type:"",action:"",approver:"",approver_name:"",description:"",gmt_created:"",gmt_modified:"",object_id:1,proposer:1,proposer_avatar:"",proposer_dep:"",proposer_name:"",reason:"",status:"",title:"",is_public:!0,ws_logo:""},Zt=(0,n.useState)(Ct),et=(0,g.Z)(Zt,2),y=et[0],yt=et[1],St=function(){Ue(!1)},Ke=function(){var B=(0,_.Z)((0,a.Z)().mark(function b(f){var X;return(0,a.Z)().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return ie(!0),ve([]),T.next=4,me(f);case 4:X=T.sent,ve(X),ie(!1);case 7:case"end":return T.stop()}},b)}));return function(f){return B.apply(this,arguments)}}(),bt={page_num:1,page_size:10,status:o};(0,n.useEffect)(function(){Ke(bt)},[o]);var Rt=function(b,f){var X={page_num:b,page_size:f,status:o};Ke(X),ht(b),jt(f)},tt=function(){var b={page_num:mt,page_size:xt,status:o};Ke(b)};(0,n.useImperativeHandle)(s,function(){return{handleTab:tt}});var Ot=(0,n.useState)(!1),nt=(0,g.Z)(Ot,2),at=nt[0],$e=nt[1],rt=function(){var B=(0,_.Z)((0,a.Z)().mark(function b(f){var X;return(0,a.Z)().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return Ue(!0),Ve(!0),T.next=4,z(f.id);case 4:X=T.sent,X&&yt(X.data),Ve(!1);case 7:case"end":return T.stop()}},b)}));return function(f){return B.apply(this,arguments)}}(),st=function(){var B=(0,_.Z)((0,a.Z)().mark(function b(f,X){var Fe,T;return(0,a.Z)().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:if(!at){ee.next=2;break}return ee.abrupt("return");case 2:return $e(!0),Fe={action:f,id:y.id,reason:f=="refuse"?X:void 0},ee.next=6,I(Fe);case 6:if(T=ee.sent,qe.current.hide(),T.code===200){ee.next=12;break}return(0,lt.EV)(T.code,T.msg),$e(!1),ee.abrupt("return");case 12:return $e(!1),Ue(!1),ee.next=16,j();case 16:return ee.next=18,tt();case 18:se.default.success(De({id:"operation.success"}));case 19:case"end":return ee.stop()}},b)}));return function(f,X){return B.apply(this,arguments)}}(),Pt=[{title:(0,e.jsx)(l._H,{id:"JoinApprove.table.category"}),dataIndex:"name",width:120,ellipsis:!0,render:function(b,f){return(0,e.jsx)("div",{style:{display:"flex",alignItems:"center"},children:f.object_type=="workspace"&&f.action=="create"?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(k,{style:{float:"left",marginRight:"5px",height:20}}),(0,e.jsx)(Q.Z,{title:f.title})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(de,{style:{float:"left",marginRight:"5px",height:20}}),(0,e.jsx)(Q.Z,{title:f.title})]})})}},{title:(0,e.jsx)(l._H,{id:"JoinApprove.table.applicant"}),dataIndex:"name",width:150,ellipsis:{showTitle:!1},render:function(b,f){return(0,e.jsxs)(J.Z,{children:[(0,e.jsx)(re.C,{size:25,src:f.proposer_avatar}),f.proposer_name]})}},{title:(0,e.jsx)(l._H,{id:"JoinApprove.table.reason"}),dataIndex:"reason",width:200,ellipsis:{showTitle:!1},render:function(b,f){return(0,e.jsx)(Je.K,{ellipsis:{tooltip:!0},children:f.reason})}},{title:(0,e.jsx)(l._H,{id:"JoinApprove.table.start"}),dataIndex:"gmt_created",ellipsis:{showTitle:!1},width:150,render:function(b,f){return(0,e.jsx)(Je.K,{ellipsis:{tooltip:!0},children:f.gmt_created})}},o==1&&{title:(0,e.jsx)(l._H,{id:"JoinApprove.table.end"}),dataIndex:"gmt_modified",width:150,ellipsis:{showTitle:!1},render:function(b,f){return(0,e.jsx)(Je.K,{ellipsis:{tooltip:!0},children:f.gmt_modified})}},o==1&&{title:(0,e.jsx)(l._H,{id:"JoinApprove.table.result"}),key:"result",render:function(b,f){return(0,e.jsxs)(J.Z,{children:[f.status=="passed"&&f.action=="create"&&(0,e.jsx)(F.Z,{status:"success",text:(0,e.jsx)(l._H,{id:"JoinApprove.create_passed"})}),f.status!="passed"&&f.action=="create"&&(0,e.jsx)(F.Z,{status:"default",text:(0,e.jsx)(l._H,{id:"JoinApprove.create_refused"})}),f.status=="passed"&&f.action=="delete"&&(0,e.jsx)(F.Z,{status:"success",text:(0,e.jsx)(l._H,{id:"JoinApprove.logout_passed"})}),f.status!="passed"&&f.action=="delete"&&(0,e.jsx)(F.Z,{status:"default",text:(0,e.jsx)(l._H,{id:"JoinApprove.logout_refused"})}),(0,e.jsx)(Y.Z.Link,{onClick:function(){return rt(f)},children:(0,e.jsx)(l._H,{id:"operation.detail"})})]})},width:150},o==0&&{title:(0,e.jsx)(l._H,{id:"JoinApprove.table.operation"}),key:"operation",fixed:"right",width:120,render:function(b,f){return(0,e.jsx)(J.Z,{children:(0,e.jsx)(Y.Z.Link,{onClick:function(){return rt(f)},children:(0,e.jsx)(l._H,{id:"operation.detail"})})})}}],At=ae.data,Lt=o==0?(0,e.jsxs)(J.Z,{children:[(0,e.jsx)(it,{ref:qe,onOk:function(b){return st("refuse",b)}}),(0,e.jsx)(U.Z,{loading:at,onClick:function(){return st("pass")},type:"primary",children:(0,e.jsx)(l._H,{id:"operation.pass"})})]}):null;return(0,e.jsxs)("div",{children:[(0,e.jsx)(H.Z,{title:(0,e.jsx)(l._H,{id:"JoinApprove.ws.details"}),open:Et,width:"53.3%",centered:!0,onCancel:St,footer:Lt,maskClosable:!1,children:(0,e.jsxs)(E.Z,{spinning:Ee,children:[(0,e.jsxs)(r.Z,{gutter:12,children:[(0,e.jsx)(i.Z,{className:v().title,span:4,children:(0,e.jsx)(l._H,{id:"JoinApprove.cover"})}),(0,e.jsx)(i.Z,{className:v().content,span:20,children:(0,e.jsx)(Le.Z,(0,m.Z)((0,m.Z)({},(0,m.Z)((0,m.Z)({},y),{},{show_name:y.title,logo:y.ws_logo})),{},{size:"large"}))})]}),(0,e.jsxs)(r.Z,{gutter:12,children:[(0,e.jsx)(i.Z,{className:v().title,span:4,children:(0,e.jsx)(l._H,{id:"JoinApprove.name"})}),(0,e.jsx)(i.Z,{className:v().company,span:20,children:y.title})]}),(0,e.jsxs)(r.Z,{gutter:12,children:[(0,e.jsx)(i.Z,{className:v().title,span:4,children:(0,e.jsx)(l._H,{id:"JoinApprove.introduction"})}),(0,e.jsx)(i.Z,{className:v().content,span:20,children:y.description})]}),(0,e.jsxs)(r.Z,{gutter:12,children:[(0,e.jsx)(i.Z,{className:v().title,span:4,children:(0,e.jsx)(l._H,{id:"JoinApprove.application.reason"})}),(0,e.jsx)(i.Z,{className:v().content,span:20,children:y.reason||(0,e.jsx)(l._H,{id:"nothing"})})]}),(0,e.jsxs)(r.Z,{gutter:12,children:[(0,e.jsx)(i.Z,{className:v().title,span:4,children:(0,e.jsx)(l._H,{id:"JoinApprove.permission"})}),(0,e.jsx)(i.Z,{className:v().content,span:20,children:y.is_public?(0,e.jsxs)("div",{children:[(0,e.jsx)(Se.r,{}),(0,e.jsx)("span",{style:{paddingLeft:"6px"},children:(0,e.jsx)(l._H,{id:"JoinApprove.public"})})]}):(0,e.jsxs)("div",{children:[(0,e.jsx)(ge.r,{}),(0,e.jsx)("span",{style:{paddingLeft:"6px"},children:(0,e.jsx)(l._H,{id:"JoinApprove.private"})})]})})]}),(0,e.jsxs)(r.Z,{gutter:12,children:[(0,e.jsx)(i.Z,{className:v().title,span:4,children:(0,e.jsx)(l._H,{id:"JoinApprove.table.applicant"})}),(0,e.jsxs)(i.Z,{className:v().content,span:20,children:[(0,e.jsx)("div",{children:(0,e.jsxs)(J.Z,{children:[(0,e.jsx)(re.C,{size:25,src:y.proposer_avatar}),(0,e.jsx)("span",{children:y.proposer_name})]})}),(0,e.jsx)("div",{className:v().department,children:y.proposer_dep})]})]}),(0,e.jsxs)(r.Z,{gutter:12,children:[(0,e.jsx)(i.Z,{className:v().title,span:4,children:(0,e.jsx)(l._H,{id:"JoinApprove.table.category"})}),(0,e.jsx)(i.Z,{className:v().content,span:20,children:y.object_type=="workspace"&&y.action=="create"?(0,e.jsxs)("span",{children:[(0,e.jsx)(k,{style:{float:"left",marginRight:"5px",height:20}}),(0,e.jsx)(l._H,{id:"JoinApprove.ws.create"})]}):(0,e.jsxs)("span",{children:[(0,e.jsx)(de,{style:{float:"left",marginRight:"5px",height:20}}),(0,e.jsx)(l._H,{id:"JoinApprove.ws.logout"})]})})]}),(0,e.jsxs)(r.Z,{gutter:12,children:[(0,e.jsx)(i.Z,{className:v().title,span:4,children:(0,e.jsx)(l._H,{id:"JoinApprove.table.start"})}),(0,e.jsx)(i.Z,{className:v().content,span:20,children:y.gmt_created})]}),o==1&&(0,e.jsxs)(r.Z,{gutter:12,children:[(0,e.jsx)(i.Z,{className:v().title,span:4,children:(0,e.jsx)(l._H,{id:"JoinApprove.table.result"})}),(0,e.jsxs)(i.Z,{className:v().content,span:20,children:[y.status=="passed"&&y.action=="create"&&(0,e.jsx)(F.Z,{status:"success",text:(0,e.jsx)(l._H,{id:"JoinApprove.create_passed"})}),y.status!="passed"&&y.action=="create"&&(0,e.jsx)(F.Z,{status:"default",text:(0,e.jsx)(l._H,{id:"JoinApprove.create_refused"})}),y.status=="passed"&&y.action=="delete"&&(0,e.jsx)(F.Z,{status:"success",text:(0,e.jsx)(l._H,{id:"JoinApprove.logout_passed"})}),y.status!="passed"&&y.action=="delete"&&(0,e.jsx)(F.Z,{status:"default",text:(0,e.jsx)(l._H,{id:"JoinApprove.logout_refused"})})]})]}),o==1&&(0,e.jsxs)(r.Z,{gutter:12,children:[(0,e.jsx)(i.Z,{className:v().title,span:4,style:{paddingBottom:0},children:(0,e.jsx)(l._H,{id:"JoinApprove.table.end"})}),(0,e.jsx)(i.Z,{className:v().content,span:20,style:{paddingBottom:0},children:y.gmt_modified})]})]})}),(0,e.jsx)(ye.Z,{size:"small",columns:Pt,name:"sys-join-ws",dataSource:At,refreshDeps:[o],loading:q,page:ae.page_num,pageSize:ae.page_size,totalPage:ae.total_page,total:ae.total,handlePage:Rt})]})},Xe=ot,ut=t(65113),dt=t.n(ut),ct=t(75073),Ye=R.Z.TabPane,pt=function(){var d=(0,n.useRef)(null),o=(0,n.useRef)(null),s=(0,n.useState)({backlog_count:0,finished_count:0}),j=(0,g.Z)(s,2),Z=j[0],De=j[1],Pe=(0,n.useState)("1"),pe=(0,g.Z)(Pe,2),ae=pe[0],ve=pe[1],je=function(){var q=(0,_.Z)((0,a.Z)().mark(function ie(){var $;return(0,a.Z)().wrap(function(Ee){for(;;)switch(Ee.prev=Ee.next){case 0:return Ee.next=2,P();case 2:$=Ee.sent,$.code===200&&De($.data);case 4:case"end":return Ee.stop()}},ie)}));return function(){return q.apply(this,arguments)}}();(0,n.useEffect)(function(){je()},[]);var G=function(ie){var $,_e;switch(ie){case"1":($=d.current)===null||$===void 0||$.handleTab();break;case"2":(_e=o.current)===null||_e===void 0||_e.handleTab();break;default:break}ve(ie),je()};return(0,e.jsx)(ct.mQ,{title:(0,e.jsxs)(R.Z,{defaultActiveKey:"1",onChange:G,className:dt().tab_style,children:[(0,e.jsx)(Ye,{tab:(0,e.jsxs)("span",{children:[(0,e.jsx)(l._H,{id:"sys.approve.tab.pending"})," ",Z.backlog_count]})},"1"),(0,e.jsx)(Ye,{tab:(0,e.jsxs)("span",{children:[(0,e.jsx)(l._H,{id:"sys.approve.tab.record"})," ",Z.finished_count]})},"2")]}),children:ae==="1"?(0,e.jsx)(Xe,{onRef:d,status:0,getNum:je}):(0,e.jsx)(Xe,{onRef:o,status:1})})},vt=pt},79390:function(W,w,t){"use strict";t.d(w,{sL:function(){return he},ny:function(){return l},Fu:function(){return me}});var a=t(20418),_=t(39190),g=t(488),O=t(26388),R=t(11407),n=t(41604),D=t(2605),H=t(74127),N=t(41428),E=t(22374),p=t(48434),r=t(97939),m=t(99648),c=t(52454),i=["width","onResizeStart","onResize","onResizeStop","resize"],x=["columns","name","onColumnsChange"],U,M,Y,le=r.ZP.div(U||(U=(0,N.Z)([`
    position: relative;
    width: 100%;
`]))),F=r.ZP.div.attrs(function(I){return{style:{left:I.left,height:I==null?void 0:I.height}}})(M||(M=(0,N.Z)([`
    width: 0px;
    position: absolute;
    left: 0;
    top: 0;
    border-left: 1px dashed #d9d9d9;
    z-index: 99;
`]))),Ce=(0,r.ZP)(p.Resizable)(Y||(Y=(0,N.Z)([`
    user-select: none;
    &::before {
        position: absolute;
        top: 50%;
        right: 0;
        width: 1px;
        height: 1.6em;
        background-color: rgba(0,0,0,.06);
        transform: translateY(-50%);
        transition: background-color .3s;
        content: "";
    }
    
    &:last-child::before {
        display: none;
    }

    .react-resizable {
        position: relative;
        background-clip: padding-box;
    }
    
    .react-resizable-handle {
        position: absolute;
        width: 10px;
        height: 100%;
        bottom: 0;
        right: -5px;
        cursor: `,`;
        background-image:none;
        z-index: 1;
    }
`])),function(I){var h=I.resize;return h?"col-resize":"default"}),J=function(h){var P=h.width,S=h.onResizeStart,z=h.onResize,A=h.onResizeStop,C=h.resize,v=(0,g.Z)(h,i);return(0,c.jsx)(Ce,(0,a.Z)((0,a.Z)({width:P||100,height:0,draggableOpts:{enableUserSelectHack:!1},onResizeStart:S,onResize:z,onResizeStop:A,resize:C?1:0},v),{},{children:(0,c.jsx)("th",(0,a.Z)({},v))}))},fe=function(h){var P=h.columns,S=P===void 0?[]:P,z=h.name,A=h.onColumnsChange,C=(0,g.Z)(h,x),v=E.useState(0),ye=(0,_.Z)(v,2),Se=ye[0],ge=ye[1],oe=E.useState(0),ue=(0,_.Z)(oe,2),be=ue[0],K=ue[1],Ae=E.useState(!1),Re=(0,_.Z)(Ae,2),xe=Re[0],de=Re[1],te=E.useRef(null),V=(0,m.Z)(te),Me=function(L){return function(k,ce){var Q;if((0,H.Z)(ce),!!S[L].ellipsis){var Le=k.clientX,ze=Le-((Q=te.current)===null||Q===void 0?void 0:Q.getBoundingClientRect().x);K(ze),ge(ze),de(!0)}}},Ie=function(){return function(L){var k,ce=L.clientX,Q=ce-((k=te.current)===null||k===void 0?void 0:k.getBoundingClientRect().x);ge(Q)}},Oe=function(L){return function(k,ce){var Q,Le=ce.size,ze=k.clientX,we=ze-((Q=te.current)===null||Q===void 0?void 0:Q.getBoundingClientRect().x),Be=(0,D.Z)(S);if(Be[L].ellipsis){var Te=Le.width+=we-be,He=Be[L],Ne=He.dataIndex,e=He.key;Te>20&&(Be[L]=(0,a.Z)((0,a.Z)({},Be[L]),{},{width:Te}),z&&me(z,Ne||e,Te),A==null||A())}ge(0),K(0),de(!1)}},We=E.useMemo(function(){return S.reduce(function(ne,L){return L.width?ne+=L==null?void 0:L.width:ne},0)},[S]);return(0,c.jsxs)(le,{ref:te,className:"resize-table-wrapper",children:[(0,c.jsx)(n.Z,(0,a.Z)((0,a.Z)({},C),{},{components:{header:{cell:J}},scroll:(h==null?void 0:h.scroll)||{x:We||(V==null?void 0:V.width)},columns:S.filter(Boolean).map(function(ne,L){return(0,a.Z)((0,a.Z)({},ne),{},{onHeaderCell:function(ce){return{resize:!!ne.ellipsis,width:ce.width,onResizeStart:Me(L),onResize:Ie(),onResizeStop:Oe(L)}}})})})),xe&&(0,c.jsx)(F,{height:V==null?void 0:V.height,left:Se||be})]})},re=fe,Ze=["name","columns","refreshDeps","onColumnsChange"],se="umi_locale",l=function(h,P){var S=localStorage.getItem(h),z=localStorage.getItem(se)||"zh-CN";if(!!S)return JSON.parse(S)["".concat(z,"-").concat(P)]},me=function(h,P,S){var z=localStorage.getItem(h),A=localStorage.getItem(se)||"zh-CN",C=(0,O.Z)({},"".concat(A,"-").concat(P),S);z?localStorage.setItem(h,JSON.stringify(Object.assign(JSON.parse(z),C))):localStorage.setItem(h,JSON.stringify(C))},he=function(h){var P=h.name,S=h.columns,z=h.refreshDeps,A=z===void 0?[]:z,C=h.onColumnsChange,v=(0,g.Z)(h,Ze),ye=E.useState([]),Se=(0,_.Z)(ye,2),ge=Se[0],oe=Se[1],ue=function(){return(S==null?void 0:S.filter(Boolean).map(function(K){var Ae=K.dataIndex,Re=K.key,xe=K.width,de=Ae||Re,te=l(P,de);!te&&xe&&me(P,de,xe);var V=te||xe;return V&&(K.width=V),K}))||[]};return E.useEffect(function(){oe(ue())},A),(0,c.jsx)(re,(0,a.Z)({name:P,columns:ge,setColumns:oe,size:"small",onColumnsChange:function(){C==null||C(),oe(ue())}},v))}},9518:function(W,w,t){"use strict";t.d(w,{r:function(){return N}});var a=t(22374),_,g,O=["svgRef","title"];function R(){return R=Object.assign?Object.assign.bind():function(p){for(var r=1;r<arguments.length;r++){var m=arguments[r];for(var c in m)Object.prototype.hasOwnProperty.call(m,c)&&(p[c]=m[c])}return p},R.apply(this,arguments)}function n(p,r){if(p==null)return{};var m=D(p,r),c,i;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(p);for(i=0;i<x.length;i++)c=x[i],!(r.indexOf(c)>=0)&&(!Object.prototype.propertyIsEnumerable.call(p,c)||(m[c]=p[c]))}return m}function D(p,r){if(p==null)return{};var m={},c=Object.keys(p),i,x;for(x=0;x<c.length;x++)i=c[x],!(r.indexOf(i)>=0)&&(m[i]=p[i]);return m}var H=function(r){var m=r.svgRef,c=r.title,i=n(r,O);return a.createElement("svg",R({width:"12px",height:"13px",viewBox:"0 0 12 13",ref:m},i),c?a.createElement("title",null,c):null,_||(_=a.createElement("desc",null,"Created with Sketch.")),g||(g=a.createElement("g",{id:"\\u9996\\u9875/\\u52A0\\u5165",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.createElement("g",{id:"4-\\u8D85\\u7EA7\\u7BA1\\u7406\\u5458-\\u9996\\u9875",transform:"translate(-863.000000, -925.000000)",fillRule:"nonzero"},a.createElement("g",{id:"\\u6700\\u5E38\\u4F7F\\u7528",transform:"translate(20.000000, 669.000000)"},a.createElement("g",{id:"\\u7F16\\u7EC4-2",transform:"translate(20.000000, 64.000000)"},a.createElement("g",{id:"\\u6743\\u9650",transform:"translate(820.000000, 19.500000)"},a.createElement("g",{id:"\\u79C1\\u5BC6",transform:"translate(1.000000, 171.000000)"},a.createElement("rect",{id:"\\u77E9\\u5F62",fill:"#000000",opacity:0,x:0,y:0,width:16,height:16}),a.createElement("path",{d:"M8.14814814,3.18518519 C8.77777777,3.18518519 9.37185184,3.43259259 9.82074073,3.88296297 C10.2711111,4.33185186 10.5185185,4.92592592 10.5185185,5.55555556 L10.5185185,8.07407408 C10.5185185,8.43407408 10.437037,8.89481481 10.2903704,9.37185186 C10.1333333,9.88148148 9.90962963,10.3851852 9.64444444,10.8251852 C9.37777777,11.2681482 9.08148147,11.6251852 8.78814814,11.8607407 C8.62518517,11.9911111 8.38074073,12.1481481 8.14814814,12.1481481 L7.85185186,12.1481481 C7.61925927,12.1481481 7.37481483,11.9925926 7.21185186,11.8607407 C6.91851853,11.6251852 6.62222223,11.2681481 6.35555556,10.8251852 C6.09037038,10.3837037 5.86666667,9.88148148 5.70814814,9.37037038 C5.56148147,8.89481481 5.48,8.43407408 5.48,8.07259259 L5.48,5.55555556 C5.48,4.92592594 5.72740741,4.33185186 6.17777778,3.88296297 C6.62814816,3.43259259 7.22222222,3.18518519 7.85185186,3.18518519 L8.14814814,3.18518519 M8.14814814,2 L7.85185186,2 C5.8962963,2 4.2962963,3.6 4.2962963,5.55555556 L4.2962963,8.07407408 C4.2962963,10.0296296 5.8962963,13.3333333 7.85185186,13.3333333 L8.14814814,13.3333333 C10.1037037,13.3333333 11.7037037,10.0296296 11.7037037,8.07407408 L11.7037037,5.55555556 C11.7037037,3.6 10.1037037,2 8.14814814,2 Z M12.0785185,6 L3.92148148,6 C3.23111111,6 2.66666667,6.53333333 2.66666667,7.18518519 L2.66666667,12.8148148 C2.66666667,13.4666667 3.23111111,14 3.92148148,14 L12.0785185,14 C12.7688889,14 13.3333333,13.4666667 13.3333333,12.8148148 L13.3333333,7.18518519 C13.3333333,6.53333333 12.7688889,6 12.0785185,6 Z M8.62814814,11.2 C8.62814814,11.5274074 8.34666666,11.7925926 8,11.7925926 C7.65333334,11.7925926 7.37185186,11.5274074 7.37185186,11.2 L7.37185186,9.12592592 C7.37185186,8.79851852 7.65333334,8.53333333 8,8.53333333 C8.34666666,8.53333333 8.62814814,8.79851852 8.62814814,9.12592592 L8.62814814,11.2 Z",id:"\\u5F62\\u72B6",fill:"#CCCCCC"})))))))))},N=a.forwardRef(function(p,r){return a.createElement(H,R({svgRef:r},p))}),E=t.p+"static/no_public.39b7b7ef.svg"},52642:function(W,w,t){"use strict";t.d(w,{r:function(){return N}});var a=t(22374),_,g,O=["svgRef","title"];function R(){return R=Object.assign?Object.assign.bind():function(p){for(var r=1;r<arguments.length;r++){var m=arguments[r];for(var c in m)Object.prototype.hasOwnProperty.call(m,c)&&(p[c]=m[c])}return p},R.apply(this,arguments)}function n(p,r){if(p==null)return{};var m=D(p,r),c,i;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(p);for(i=0;i<x.length;i++)c=x[i],!(r.indexOf(c)>=0)&&(!Object.prototype.propertyIsEnumerable.call(p,c)||(m[c]=p[c]))}return m}function D(p,r){if(p==null)return{};var m={},c=Object.keys(p),i,x;for(x=0;x<c.length;x++)i=c[x],!(r.indexOf(i)>=0)&&(m[i]=p[i]);return m}var H=function(r){var m=r.svgRef,c=r.title,i=n(r,O);return a.createElement("svg",R({width:"12px",height:"12px",viewBox:"0 0 12 12",ref:m},i),c?a.createElement("title",null,c):null,_||(_=a.createElement("desc",null,"Created with Sketch.")),g||(g=a.createElement("g",{id:"\\u9996\\u9875/\\u52A0\\u5165",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.createElement("g",{id:"4-\\u8D85\\u7EA7\\u7BA1\\u7406\\u5458-\\u9996\\u9875",transform:"translate(-746.000000, -187.000000)",fillRule:"nonzero"},a.createElement("g",{id:"\\u7F16\\u7EC4",transform:"translate(20.000000, 99.000000)"},a.createElement("g",{id:"\\u9009\\u9879\\u5907\\u4EFD",transform:"translate(532.000000, 56.000000)"},a.createElement("g",{id:"\\u9009\\u62E9\\u9879"},a.createElement("g",{id:"\\u516C\\u5F00",transform:"translate(192.000000, 30.000000)"},a.createElement("rect",{id:"\\u77E9\\u5F62",fill:"#000000",opacity:0,x:0,y:0,width:16,height:16}),a.createElement("path",{d:"M8.14814814,3.18518519 C8.77777777,3.18518519 9.37185184,3.43259259 9.82074073,3.88296297 C10.2711111,4.33185186 10.5185185,4.92592592 10.5185185,5.55555556 L10.5185185,8.07407408 C10.5185185,8.43407408 10.437037,8.89481481 10.2903704,9.37185186 C10.1333333,9.88148148 9.90962963,10.3851852 9.64444444,10.8251852 C9.37777777,11.2681482 9.08148147,11.6251852 8.78814814,11.8607407 C8.62518517,11.9911111 8.38074073,12.1481481 8.14814814,12.1481481 L7.85185186,12.1481481 C7.61925927,12.1481481 7.37481483,11.9925926 7.21185186,11.8607407 C6.91851853,11.6251852 6.62222223,11.2681481 6.35555556,10.8251852 C6.09037038,10.3837037 5.86666667,9.88148148 5.70814814,9.37037038 C5.56148147,8.89481481 5.48,8.43407408 5.48,8.07259259 L5.48,5.55555556 C5.48,4.92592594 5.72740741,4.33185186 6.17777778,3.88296297 C6.62814816,3.43259259 7.22222222,3.18518519 7.85185186,3.18518519 L8.14814814,3.18518519 M8.14814814,2 L7.85185186,2 C5.8962963,2 4.2962963,3.6 4.2962963,5.55555556 L4.2962963,8.07407408 C4.2962963,10.0296296 5.8962963,13.3333333 7.85185186,13.3333333 L8.14814814,13.3333333 C10.1037037,13.3333333 11.7037037,10.0296296 11.7037037,8.07407408 L11.7037037,5.55555556 C11.7037037,3.6 10.1037037,2 8.14814814,2 Z M12.0785185,6 L3.92148148,6 C3.23111111,6 2.66666667,6.53333333 2.66666667,7.18518519 L2.66666667,12.8148148 C2.66666667,13.4666667 3.23111111,14 3.92148148,14 L12.0785185,14 C12.7688889,14 13.3333333,13.4666667 13.3333333,12.8148148 L13.3333333,7.18518519 C13.3333333,6.53333333 12.7688889,6 12.0785185,6 Z M8.62814814,11.2 C8.62814814,11.5274074 8.34666666,11.7925926 8,11.7925926 C7.65333334,11.7925926 7.37185186,11.5274074 7.37185186,11.2 L7.37185186,9.12592592 C7.37185186,8.79851852 7.65333334,8.53333333 8,8.53333333 C8.34666666,8.53333333 8.62814814,8.79851852 8.62814814,9.12592592 L8.62814814,11.2 Z",id:"\\u5F62\\u72B6",fill:"#1890FF"}),a.createElement("polygon",{id:"\\u77E9\\u5F62",fill:"#FFFFFF",points:"10 5 12 4.51932905 12 6 10 6"})))))))))},N=a.forwardRef(function(p,r){return a.createElement(H,R({svgRef:r},p))}),E=t.p+"static/public.026e2f76.svg"}}]);
