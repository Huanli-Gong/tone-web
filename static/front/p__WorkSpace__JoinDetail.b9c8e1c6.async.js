(self.webpackChunktone_front=self.webpackChunktone_front||[]).push([[3491,2485],{68485:function(J){J.exports={layout:"layout___1AuGf",ws_slider:"ws_slider___3lcpB",ws_menu_styles:"ws_menu_styles___4oN0Y",ws_sb_st:"ws_sb_st___3SYzX",content:"content___W65cE",tab_style:"tab_style___2SmSZ",ws_join_audit:"ws_join_audit___s_vDx"}},75073:function(J,A,n){"use strict";n.d(A,{mQ:function(){return I},gM:function(){return S},nU:function(){return N}});var p=n(40204),Y=n(10724),h=n(41428),o=n(97939),x,l,d,e,I=(0,o.ZP)(Y.Z)(x||(x=(0,h.Z)([`
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
`]))),S=(0,o.ZP)(I)(l||(l=(0,h.Z)([`
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
`]))),_=(0,o.ZP)(Y.Z)(d||(d=(0,h.Z)([`
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
`]))),N=(0,o.ZP)(_)(e||(e=(0,h.Z)([`
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
`])))},95543:function(J,A,n){"use strict";n.r(A),n.d(A,{default:function(){return ft}});var p=n(20418),Y=n(54905),h=n(90087),o=n(35832),x=n(32326),l=n(39190),d=n(22374),e=n(22812),I=n(24812),S=n(29197),_=n(14320),N=n(53479),Ct=n(38519),ot=n(16416),bt=n(11407),dt=n(41604),Tt=n(46721),E=n(94867),Et=n(90846),lt=n(56511),q=n(2605),Ot=n(98604),ct=n(68917),Pt=n(81138),tt=n(96146),Ht=n(57359),C=n(34423),Dt=n(31650),W=n(25100),wt=n(51937),ut=n(34516),z=n(39935),t=n(52454),nt=function(Z){var V=(0,e.YB)(),j=V.formatMessage,F=Z.onChange,b=Z.match.params.ws_id,B=Z.status,K=(0,d.useState)([]),m=(0,l.Z)(K,2),Q=m[0],G=m[1],R=(0,d.useState)(!0),O=(0,l.Z)(R,2),X=O[0],P=O[1],U=(0,d.useState)([]),y=(0,l.Z)(U,2),g=y[0],T=y[1],H=(0,d.useState)(!1),D=(0,l.Z)(H,2),at=D[0],v=D[1],ht=(0,d.useState)(0),et=(0,l.Z)(ht,2),vt=et[0],xt=et[1],Zt=(0,d.useState)({page_num:1,page_size:20}),st=(0,l.Z)(Zt,2),$=st[0],jt=st[1],k=function(){var r=(0,x.Z)((0,o.Z)().mark(function a(){var s,c,u,f,L;return(0,o.Z)().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return P(!0),M.next=3,(0,S.J4)((0,p.Z)({status:Z.status,object_id:b,ws_id:b,action:"join"},$));case 3:s=M.sent,c=s.total,u=s.data,f=s.code,L=s.msg,f===200?(G(u),xt(c)):(0,z.EV)(f,L),P(!1);case 10:case"end":return M.stop()}},a)}));return function(){return r.apply(this,arguments)}}(),yt=+B==0?{selectedRowKeys:g,onChange:function(a){T(a)}}:void 0,St=function(a){switch(a.object_type){case"workspace":return(0,t.jsxs)("div",{children:[(0,t.jsx)(ut.Z,{color:"#1890FF",children:(0,t.jsx)(e._H,{id:"add"})}),(0,t.jsx)(W.Z.Text,{children:(0,t.jsx)(e._H,{id:"join.workspace"})})]});default:return(0,t.jsx)(C.Z,{})}},rt=function(){var r=(0,x.Z)((0,o.Z)().mark(function a(s){var c,u,f;return(0,o.Z)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(!at){i.next=2;break}return i.abrupt("return");case 2:return v(!0),i.next=5,(0,S.su)({action:s.name,id:s.id,ws_id:b});case 5:c=i.sent,u=c.code,f=c.msg,u===200?(k(),tt.default.success(j({id:"operation.success"})),F()):(0,z.EV)(u,f),v(!1);case 10:case"end":return i.stop()}},a)}));return function(s){return r.apply(this,arguments)}}(),w=[{title:(0,t.jsx)(e._H,{id:"application.type"}),dataIndex:"name",render:function(a,s){return(0,t.jsx)(St,(0,p.Z)({},s))}},{title:(0,t.jsx)(e._H,{id:"proposer_name"}),dataIndex:"name",render:function(a,s){return(0,t.jsxs)(C.Z,{children:[(0,t.jsx)(ct.C,{size:25,src:s.proposer_avatar}),(0,t.jsx)(W.Z.Text,{children:s.proposer_name})]})}},{title:(0,t.jsx)(e._H,{id:"application.reason"}),dataIndex:"reason"},{title:(0,t.jsx)(e._H,{id:"application.time"}),dataIndex:"gmt_created"}];B==="1"?w=[].concat((0,q.Z)(w),[{title:(0,t.jsx)(e._H,{id:"approval.time"}),dataIndex:"gmt_modified"},{title:(0,t.jsx)(e._H,{id:"approval.result"}),render:function(a){return(0,t.jsxs)(C.Z,{children:[(0,t.jsx)(lt.Z,{status:a.status==="passed"?"success":"warning"}),(0,t.jsx)(W.Z.Text,{children:a.status==="passed"?(0,t.jsx)(e._H,{id:"passed"}):(0,t.jsx)(e._H,{id:"rejected"})})]})}}]):w=[].concat((0,q.Z)(w),[{title:(0,t.jsx)(e._H,{id:"Table.columns.operation"}),render:function(a){return(0,t.jsxs)(C.Z,{children:[(0,t.jsx)(E.Z,{style:{padding:0},type:"link",onClick:function(){return rt({id:a.id,name:"pass"})},children:(0,t.jsx)(e._H,{id:"operation.pass"})}),(0,t.jsx)(E.Z,{style:{padding:0},type:"link",onClick:function(){return rt({id:a.id,name:"refuse"})},children:(0,t.jsx)(e._H,{id:"operation.refuse"})})]})}}]);var it=function(){var r=(0,x.Z)((0,o.Z)().mark(function a(s){var c,u,f;return(0,o.Z)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,S.su)({ws_id:b,id_list:g,action:s});case 2:c=i.sent,u=c.code,f=c.msg,u===200?(T([]),k(),tt.default.success(j({id:"operation.success"}))):(0,z.EV)(u,f);case 6:case"end":return i.stop()}},a)}));return function(s){return r.apply(this,arguments)}}();return(0,d.useEffect)(function(){k()},[$]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(dt.Z,{size:"small",columns:w,rowKey:"id",rowSelection:yt,loading:X,dataSource:Q,pagination:{showQuickJumper:!0,defaultCurrent:1,showTotal:function(a){return j({id:"pagination.total.strip"},{data:a})},total:vt,pageSize:$.page_size,onChange:function(a,s){return jt((0,p.Z)((0,p.Z)({},$),{},{page_num:a,page_size:s}))}}}),g.length>0&&(0,t.jsxs)(N.Z,{justify:"space-between",style:{paddingRight:20,height:64,position:"absolute",left:0,bottom:-64,width:"100%",background:"#fff",paddingLeft:24,boxShadow:"0 -9px 28px 8px rgba(0,0,0,0.05), 0 -6px 16px 0 rgba(0,0,0,0.08), 0 -3px 6px -4px rgba(0,0,0,0.12)"},children:[(0,t.jsxs)(C.Z,{children:[(0,t.jsx)(ot.Z,{indeterminate:!0}),(0,t.jsx)(W.Z.Text,{children:j({id:"selected.item"},{data:g.length})}),(0,t.jsx)(E.Z,{type:"link",onClick:function(){return T([])},children:(0,t.jsx)(e._H,{id:"operation.cancel"})})]}),(0,t.jsxs)(C.Z,{children:[(0,t.jsx)(E.Z,{onClick:function(){return it("refuse")},children:(0,t.jsx)(e._H,{id:"batch.reject"})}),(0,t.jsx)(E.Z,{onClick:function(){return it("pass")},type:"primary",children:(0,t.jsx)(e._H,{id:"batch.pass"})})]})]})]})},pt=n(68485),mt=n.n(pt),gt=n(75073),ft=function(Z){var V=(0,e.YB)(),j=V.formatMessage,F=(0,I.UO)(),b=F.ws_id,B=(0,d.useState)("0"),K=(0,l.Z)(B,2),m=K[0],Q=K[1],G=(0,d.useState)({backlog_count:0,finished_count:0}),R=(0,l.Z)(G,2),O=R[0],X=R[1],P=function(){var U=(0,x.Z)((0,o.Z)().mark(function y(){var g,T,H,D;return(0,o.Z)().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,S.EX)({ws_id:b,action:"join"});case 2:g=v.sent,T=g.data,H=g.code,D=g.msg,H===200?X(T):(0,z.EV)(H,D);case 7:case"end":return v.stop()}},y)}));return function(){return U.apply(this,arguments)}}();return(0,d.useEffect)(function(){P()},[m]),(0,t.jsxs)(gt.mQ,{title:(0,t.jsxs)(h.Z,{className:mt().tab_style,defaultActiveKey:m,onChange:function(y){return Q(y)},children:[(0,t.jsx)(h.Z.TabPane,{tab:"".concat(j({id:"approval.pending"})," ").concat(O.backlog_count)},"0"),(0,t.jsx)(h.Z.TabPane,{tab:"".concat(j({id:"approval.record"})," ").concat(O.finished_count)},"1")]}),children:[m==="0"&&(0,t.jsx)(nt,(0,p.Z)((0,p.Z)({},Z),{},{status:m,onChange:P})),m==="1"&&(0,t.jsx)(nt,(0,p.Z)((0,p.Z)({},Z),{},{status:m}))]})}}}]);
