(self.webpackChunktone_front=self.webpackChunktone_front||[]).push([[3491,2485],{62012:function(J){J.exports={layout:"layout___1AuGf",ws_slider:"ws_slider___3lcpB",ws_menu_styles:"ws_menu_styles___4oN0Y",ws_sb_st:"ws_sb_st___3SYzX",content:"content___W65cE",tab_style:"tab_style___2SmSZ",ws_join_audit:"ws_join_audit___s_vDx"}},87415:function(J,A,n){"use strict";n.d(A,{mQ:function(){return I},gM:function(){return S},nU:function(){return F}});var p=n(58024),Y=n(91894),h=n(20310),o=n(12788),x,l,d,e,I=(0,o.ZP)(Y.Z)(x||(x=(0,h.Z)([`
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
`]))),F=(0,o.ZP)(_)(e||(e=(0,h.Z)([`
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
`])))},47586:function(J,A,n){"use strict";n.r(A),n.d(A,{default:function(){return ft}});var p=n(11849),Y=n(18106),h=n(73272),o=n(39428),x=n(3182),l=n(2824),d=n(67294),e=n(16917),I=n(20009),S=n(90105),_=n(13062),F=n(71230),Ct=n(63185),ot=n(9676),bt=n(66456),dt=n(79764),Tt=n(57663),E=n(71577),Et=n(54029),lt=n(79166),q=n(86582),Ot=n(94233),ct=n(51890),Pt=n(34792),tt=n(48086),Ht=n(49111),C=n(19650),wt=n(402),W=n(97272),Dt=n(71153),ut=n(60331),z=n(24480),t=n(85893),nt=function(j){var N=(0,e.YB)(),Z=N.formatMessage,V=j.onChange,b=j.match.params.ws_id,B=j.status,K=(0,d.useState)([]),m=(0,l.Z)(K,2),Q=m[0],G=m[1],R=(0,d.useState)(!0),O=(0,l.Z)(R,2),X=O[0],P=O[1],U=(0,d.useState)([]),y=(0,l.Z)(U,2),g=y[0],T=y[1],H=(0,d.useState)(!1),w=(0,l.Z)(H,2),at=w[0],v=w[1],ht=(0,d.useState)(0),et=(0,l.Z)(ht,2),vt=et[0],xt=et[1],jt=(0,d.useState)({page_num:1,page_size:20}),st=(0,l.Z)(jt,2),$=st[0],Zt=st[1],k=function(){var r=(0,x.Z)((0,o.Z)().mark(function a(){var s,c,u,f,L;return(0,o.Z)().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return P(!0),M.next=3,(0,S.J4)((0,p.Z)({status:j.status,object_id:b,ws_id:b,action:"join"},$));case 3:s=M.sent,c=s.total,u=s.data,f=s.code,L=s.msg,f===200?(G(u),xt(c)):(0,z.EV)(f,L),P(!1);case 10:case"end":return M.stop()}},a)}));return function(){return r.apply(this,arguments)}}(),yt=+B==0?{selectedRowKeys:g,onChange:function(a){T(a)}}:void 0,St=function(a){switch(a.object_type){case"workspace":return(0,t.jsxs)("div",{children:[(0,t.jsx)(ut.Z,{color:"#1890FF",children:(0,t.jsx)(e._H,{id:"add"})}),(0,t.jsx)(W.Z.Text,{children:(0,t.jsx)(e._H,{id:"join.workspace"})})]});default:return(0,t.jsx)(C.Z,{})}},rt=function(){var r=(0,x.Z)((0,o.Z)().mark(function a(s){var c,u,f;return(0,o.Z)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(!at){i.next=2;break}return i.abrupt("return");case 2:return v(!0),i.next=5,(0,S.su)({action:s.name,id:s.id,ws_id:b});case 5:c=i.sent,u=c.code,f=c.msg,u===200?(k(),tt.default.success(Z({id:"operation.success"})),V()):(0,z.EV)(u,f),v(!1);case 10:case"end":return i.stop()}},a)}));return function(s){return r.apply(this,arguments)}}(),D=[{title:(0,t.jsx)(e._H,{id:"application.type"}),dataIndex:"name",render:function(a,s){return(0,t.jsx)(St,(0,p.Z)({},s))}},{title:(0,t.jsx)(e._H,{id:"proposer_name"}),dataIndex:"name",render:function(a,s){return(0,t.jsxs)(C.Z,{children:[(0,t.jsx)(ct.C,{size:25,src:s.proposer_avatar}),(0,t.jsx)(W.Z.Text,{children:s.proposer_name})]})}},{title:(0,t.jsx)(e._H,{id:"application.reason"}),dataIndex:"reason"},{title:(0,t.jsx)(e._H,{id:"application.time"}),dataIndex:"gmt_created"}];B==="1"?D=[].concat((0,q.Z)(D),[{title:(0,t.jsx)(e._H,{id:"approval.time"}),dataIndex:"gmt_modified"},{title:(0,t.jsx)(e._H,{id:"approval.result"}),render:function(a){return(0,t.jsxs)(C.Z,{children:[(0,t.jsx)(lt.Z,{status:a.status==="passed"?"success":"warning"}),(0,t.jsx)(W.Z.Text,{children:a.status==="passed"?(0,t.jsx)(e._H,{id:"passed"}):(0,t.jsx)(e._H,{id:"rejected"})})]})}}]):D=[].concat((0,q.Z)(D),[{title:(0,t.jsx)(e._H,{id:"Table.columns.operation"}),render:function(a){return(0,t.jsxs)(C.Z,{children:[(0,t.jsx)(E.Z,{style:{padding:0},type:"link",onClick:function(){return rt({id:a.id,name:"pass"})},children:(0,t.jsx)(e._H,{id:"operation.pass"})}),(0,t.jsx)(E.Z,{style:{padding:0},type:"link",onClick:function(){return rt({id:a.id,name:"refuse"})},children:(0,t.jsx)(e._H,{id:"operation.refuse"})})]})}}]);var it=function(){var r=(0,x.Z)((0,o.Z)().mark(function a(s){var c,u,f;return(0,o.Z)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,S.su)({ws_id:b,id_list:g,action:s});case 2:c=i.sent,u=c.code,f=c.msg,u===200?(T([]),k(),tt.default.success(Z({id:"operation.success"}))):(0,z.EV)(u,f);case 6:case"end":return i.stop()}},a)}));return function(s){return r.apply(this,arguments)}}();return(0,d.useEffect)(function(){k()},[$]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(dt.Z,{size:"small",columns:D,rowKey:"id",rowSelection:yt,loading:X,dataSource:Q,pagination:{showQuickJumper:!0,defaultCurrent:1,showTotal:function(a){return Z({id:"pagination.total.strip"},{data:a})},total:vt,pageSize:$.page_size,onChange:function(a,s){return Zt((0,p.Z)((0,p.Z)({},$),{},{page_num:a,page_size:s}))}}}),g.length>0&&(0,t.jsxs)(F.Z,{justify:"space-between",style:{paddingRight:20,height:64,position:"absolute",left:0,bottom:-64,width:"100%",background:"#fff",paddingLeft:24,boxShadow:"0 -9px 28px 8px rgba(0,0,0,0.05), 0 -6px 16px 0 rgba(0,0,0,0.08), 0 -3px 6px -4px rgba(0,0,0,0.12)"},children:[(0,t.jsxs)(C.Z,{children:[(0,t.jsx)(ot.Z,{indeterminate:!0}),(0,t.jsx)(W.Z.Text,{children:Z({id:"selected.item"},{data:g.length})}),(0,t.jsx)(E.Z,{type:"link",onClick:function(){return T([])},children:(0,t.jsx)(e._H,{id:"operation.cancel"})})]}),(0,t.jsxs)(C.Z,{children:[(0,t.jsx)(E.Z,{onClick:function(){return it("refuse")},children:(0,t.jsx)(e._H,{id:"batch.reject"})}),(0,t.jsx)(E.Z,{onClick:function(){return it("pass")},type:"primary",children:(0,t.jsx)(e._H,{id:"batch.pass"})})]})]})]})},pt=n(62012),mt=n.n(pt),gt=n(87415),ft=function(j){var N=(0,e.YB)(),Z=N.formatMessage,V=(0,I.UO)(),b=V.ws_id,B=(0,d.useState)("0"),K=(0,l.Z)(B,2),m=K[0],Q=K[1],G=(0,d.useState)({backlog_count:0,finished_count:0}),R=(0,l.Z)(G,2),O=R[0],X=R[1],P=function(){var U=(0,x.Z)((0,o.Z)().mark(function y(){var g,T,H,w;return(0,o.Z)().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,S.EX)({ws_id:b,action:"join"});case 2:g=v.sent,T=g.data,H=g.code,w=g.msg,H===200?X(T):(0,z.EV)(H,w);case 7:case"end":return v.stop()}},y)}));return function(){return U.apply(this,arguments)}}();return(0,d.useEffect)(function(){P()},[m]),(0,t.jsxs)(gt.mQ,{title:(0,t.jsxs)(h.Z,{className:mt().tab_style,defaultActiveKey:m,onChange:function(y){return Q(y)},children:[(0,t.jsx)(h.Z.TabPane,{tab:"".concat(Z({id:"approval.pending"})," ").concat(O.backlog_count)},"0"),(0,t.jsx)(h.Z.TabPane,{tab:"".concat(Z({id:"approval.record"})," ").concat(O.finished_count)},"1")]}),children:[m==="0"&&(0,t.jsx)(nt,(0,p.Z)((0,p.Z)({},j),{},{status:m,onChange:P})),m==="1"&&(0,t.jsx)(nt,(0,p.Z)((0,p.Z)({},j),{},{status:m}))]})}}}]);
