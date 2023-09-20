(self.webpackChunktone_front=self.webpackChunktone_front||[]).push([[3235,2485],{75073:function(N,$,t){"use strict";t.d($,{mQ:function(){return W},gM:function(){return R},nU:function(){return V}});var X=t(40204),B=t(10724),k=t(41428),w=t(97939),J,A,o,g,W=(0,w.ZP)(B.Z)(J||(J=(0,k.Z)([`
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
`]))),R=(0,w.ZP)(W)(A||(A=(0,k.Z)([`
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
`]))),F=(0,w.ZP)(B.Z)(o||(o=(0,k.Z)([`
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
`]))),V=(0,w.ZP)(F)(g||(g=(0,k.Z)([`
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
`])))},54843:function(N,$,t){"use strict";t.r($),t.d($,{default:function(){return de}});var X=t(11407),B=t(41604),k=t(57359),w=t(34423),J=t(90846),A=t(56511),o=t(35832),g=t(32326),W=t(81138),R=t(96146),F=t(20418),V=t(67515),Q=t(41083),he=t(46721),b=t(94867),K=t(39190),d=t(22374),a=t(22812),q=t(24812),P=t(2656),z=t(39935),Y=t(46601),_=t(5888),ee=t(38755),me=t(14320),ne=t(53479),ve=t(20693),te=t(3278),e=t(52454),ae=function(c){var H=c.priority,M=c.id,p=c.onChange,v=c.size,T=function(j){var h=j.target;H!==+h.value&&typeof+h.value=="number"&&p(M,+h.value)};return(0,e.jsx)(te.Z,{defaultValue:H,style:{textAlign:"center"},size:v||void 0,onBlur:T})},re=function(c,H){var M=c.onOk,p=(0,d.useState)(!1),v=(0,K.Z)(p,2),T=v[0],f=v[1],j=(0,d.useState)(void 0),h=(0,K.Z)(j,2),l=h[0],O=h[1],S=function(){var x=(0,g.Z)((0,o.Z)().mark(function y(){var I;return(0,o.Z)().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:if(l){Z.next=2;break}return Z.abrupt("return");case 2:return Z.next=4,(0,z.MR)({name:l.name,id:l.id});case 4:I=Z.sent,I&&window.open("/ws/".concat(l.ws_id,"/refenerce/2/?pk=").concat(I));case 6:case"end":return Z.stop()}},y)}));return function(){return x.apply(this,arguments)}}(),E=function(){var x=(0,g.Z)((0,o.Z)().mark(function y(){return(0,o.Z)().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:m(),M(l);case 2:case"end":return D.stop()}},y)}));return function(){return x.apply(this,arguments)}}(),m=function(){console.log("cancel"),f(!1),O(void 0)};return(0,d.useImperativeHandle)(H,function(){return{show:function(y){f(!0),y&&O(y)}}}),(0,e.jsx)(Q.Z,{width:600,title:(0,e.jsx)(a._H,{id:"job.types.delete.prompt"}),open:T,onCancel:m,footer:(0,e.jsx)(ne.Z,{justify:"end",children:(0,e.jsxs)(w.Z,{children:[l!=null&&l.is_first?(0,e.jsx)(b.Z,{disabled:!0,children:(0,e.jsx)(a._H,{id:"job.types.confirm.Delete"})}):(0,e.jsx)(b.Z,{onClick:E,children:(0,e.jsx)(a._H,{id:"job.types.confirm.Delete"})}),(0,e.jsx)(b.Z,{onClick:m,type:"primary",children:(0,e.jsx)(a._H,{id:"operation.cancel"})})]})}),children:l!=null&&l.is_first?(0,e.jsx)("span",{children:(0,e.jsx)(a._H,{id:"job.types.delete.prompt1"})}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{style:{color:"red",marginBottom:5},children:[(0,e.jsx)(Y.Z,{style:{marginRight:4}}),(0,e.jsx)(a._H,{id:"job.types.delete.prompt2"})]}),(0,e.jsxs)("div",{style:{color:"rgba(0,0,0,0.45)",marginBottom:5},children:[(0,e.jsx)(a._H,{id:"job.types.delete.prompt3"}),"\uFF1A",(0,e.jsx)("br",{}),(0,e.jsx)(a._H,{id:"job.types.delete.prompt.ps1"}),(0,e.jsx)("br",{}),(0,e.jsx)(a._H,{id:"job.types.delete.prompt.ps2"})]}),(0,e.jsx)("div",{style:{color:"#1890FF",cursor:"pointer"},onClick:S,children:(0,e.jsx)(a._H,{id:"job.types.view.reference.details"})})]})})},ie=d.forwardRef(re),se=t(75073),G=t(6130),le=function(c,H){var M=c.onOk,p=d.useState(!1),v=(0,K.Z)(p,2),T=v[0],f=v[1],j=d.useState(void 0),h=(0,K.Z)(j,2),l=h[0],O=h[1];d.useImperativeHandle(H,function(){return{show:function(x){f(!0),O(x)}}});var S=function(){f(!1),O(void 0)},E=function(){M(l),S()};return d.useEffect(function(){return function(){S()}},[]),(0,e.jsx)(Q.Z,{title:(0,e.jsx)(a._H,{id:"delete.prompt"}),centered:!0,open:T,onCancel:function(){return f(!1)},footer:[(0,e.jsx)(b.Z,{onClick:E,children:(0,e.jsx)(a._H,{id:"operation.ok"})},"submit"),(0,e.jsx)(b.Z,{type:"primary",onClick:function(){return f(!1)},children:(0,e.jsx)(a._H,{id:"operation.cancel"})},"back")],width:300,children:(0,e.jsxs)("div",{style:{color:"red",marginBottom:5},children:[(0,e.jsx)(Y.Z,{style:{marginRight:4,verticalAlign:"middle"}}),(0,e.jsx)(a._H,{id:"delete.prompt"})]})})},oe=d.forwardRef(le),de=function(){var L=(0,a.YB)(),c=L.formatMessage,H=(0,a.Kd)()==="en-US",M=(0,q.UO)(),p=M.ws_id,v=d.useRef(null),T=(0,d.useRef)(null),f=(0,a.tT)("@@initialState"),j=f.initialState,h=f.setInitialState,l=(0,a.QT)(function(){return(0,P.Wt)({ws_id:p})},{manual:!0}),O=l.data,S=l.loading,E=l.run,m=function(){E().then(function(){h((0,F.Z)((0,F.Z)({},j),{},{refreshMenu:!(j!=null&&j.refreshMenu)}))}),R.default.success(c({id:"operation.success"}))},x=function(n){n.code===200?m():(0,z.EV)(n.code,n.msg)},y=function(){var r=(0,g.Z)((0,o.Z)().mark(function n(s,u){var U;return(0,o.Z)().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:if(typeof+u!="number"){C.next=11;break}if(!(+u>0)){C.next=8;break}return C.next=4,(0,P.LZ)({priority:u,jt_id:s});case 4:U=C.sent,x(U),C.next=9;break;case 8:R.default.error(c({id:"job.types.sort.ps1"}));case 9:C.next=12;break;case 11:R.default.error(c({id:"job.types.sort.ps2"}));case 12:case"end":return C.stop()}},n)}));return function(s,u){return r.apply(this,arguments)}}();d.useEffect(function(){E()},[p]);var I=function(){var r=(0,g.Z)((0,o.Z)().mark(function n(s){var u;return(0,o.Z)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,P.Wd)({jt_id:s.id});case 2:u=i.sent,u.data.length>0?T.current.show(s):v.current.show(s);case 4:case"end":return i.stop()}},n)}));return function(s){return r.apply(this,arguments)}}(),D=function(){var r=(0,g.Z)((0,o.Z)().mark(function n(s){var u;return(0,o.Z)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,P.CC)({jt_id:s.id,ws_id:p});case 2:u=i.sent,u.code===200?m():(0,z.EV)(u.code,u.msg);case 4:case"end":return i.stop()}},n)}));return function(s){return r.apply(this,arguments)}}(),Z=(0,d.useCallback)(function(r){(r||r===0)&&a.m8.push("/ws/".concat(p,"/job/update/").concat(r))},[p]),ue=(0,d.useCallback)(function(r){a.m8.push("/ws/".concat(p,"/test_job/").concat(r,"/preview"))},[]),ce=function(){var r=(0,g.Z)((0,o.Z)().mark(function n(s){var u;return(0,o.Z)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(s.enable){i.next=2;break}return i.abrupt("return");case 2:return i.next=4,(0,P.LZ)({is_first:!0,jt_id:s.id,ws_id:p});case 4:u=i.sent,x(u);case 6:case"end":return i.stop()}},n)}));return function(s){return r.apply(this,arguments)}}(),pe=[{title:(0,e.jsx)(a._H,{id:"job.types.default"}),fixed:"left",width:H?100:50,render:function(n){return n.is_first?(0,e.jsx)(_.Z,{style:{width:17.5,height:17.5,color:"#1890ff"}}):(0,e.jsx)(ee.Z,{onClick:function(){return ce(n)},style:{cursor:"pointer",width:17.5,height:17.5,color:"rgba(0,0,0,.1)"}})}},{title:(0,e.jsx)(a._H,{id:"job.types.sort"}),fixed:"left",width:75,render:function(n){return(0,e.jsx)(ae,{size:"small",id:n.id,priority:n.priority,onChange:y})}},{title:(0,e.jsx)(a._H,{id:"job.types.type_name"}),dataIndex:"name",ellipsis:{shwoTitle:!1},fixed:"left",render:function(n){return(0,e.jsx)(G.K,{ellipsis:{tooltip:!0},children:n})}},{title:(0,e.jsx)(a._H,{id:"job.types.test_type"}),dataIndex:"test_type",render:function(n){return(0,z.lN)(n,c)}},{title:(0,e.jsx)(a._H,{id:"job.types.server_type"}),dataIndex:"server_type",render:function(n){return(0,z.a5)(n,c)}},{title:(0,e.jsx)(a._H,{id:"job.types.creator_name"}),dataIndex:"creator_name",render:function(n){return n||"-"}},{title:(0,e.jsx)(a._H,{id:"job.types.gmt_created"}),width:176,dataIndex:"gmt_created",render:function(n){return n||"-"}},{title:(0,e.jsx)(a._H,{id:"job.types.enable.state"}),dataIndex:"enable",render:function(n){return(0,e.jsx)(A.Z,{status:n?"success":"error",text:n?(0,e.jsx)(a._H,{id:"job.types.enable"}):(0,e.jsx)(a._H,{id:"job.types.stop"})})}},{title:(0,e.jsx)(a._H,{id:"job.types.description"}),dataIndex:"description",ellipsis:{shwoTitle:!1},render:function(n){return(0,e.jsx)(G.K,{ellipsis:{tooltip:!0},children:n})}},{title:(0,e.jsx)(a._H,{id:"Table.columns.operation"}),fixed:"right",render:function(n){return(0,e.jsxs)(w.Z,{children:[(0,e.jsx)(b.Z,{style:{padding:0},size:"small",type:"link",onClick:function(){return Z(n.id)},children:(0,e.jsx)(a._H,{id:"operation.edit"})}),(0,e.jsx)(b.Z,{onClick:function(){return ue(n.id)},style:{padding:0},size:"small",type:"link",children:(0,e.jsx)(a._H,{id:"operation.preview"})}),n.creator_name==="\u7CFB\u7EDF\u9884\u8BBE"||n.creator_name!=="\u7CFB\u7EDF\u9884\u8BBE"&&n.is_first?(0,e.jsx)(e.Fragment,{}):(0,e.jsx)(b.Z,{type:"link",size:"small",style:{padding:0},onClick:function(){return I(n)},children:(0,e.jsx)(a._H,{id:"operation.delete"})})]})}}],fe=(0,d.useCallback)(function(){return a.m8.push("/ws/".concat(p,"/job/types/create"))},[]);return O?(0,e.jsxs)(se.gM,{title:(0,e.jsx)(a._H,{id:"job.types.manage"}),extra:(0,e.jsx)(b.Z,{type:"primary",onClick:fe,children:(0,e.jsx)(a._H,{id:"job.types.create"})}),children:[(0,e.jsx)(B.Z,{size:"small",rowKey:"id",loading:S,columns:pe,dataSource:O||[],pagination:!1,scroll:{x:1500}}),(0,e.jsx)(ie,{ref:T,onOk:D}),(0,e.jsx)(oe,{ref:v,onOk:D})]}):(0,e.jsx)(e.Fragment,{})}}}]);
