(self.webpackChunktone_front=self.webpackChunktone_front||[]).push([[9658],{75307:function(S){S.exports={CollapseContainer:"CollapseContainer___1a70q"}},52053:function(S,V,t){"use strict";t.r(V),t.d(V,{default:function(){return st}});var dt=t(18106),P=t(73272),G=t(16917),g=t(20310),x=t(12788),T,w,E,H=x.ZP.div(T||(T=(0,g.Z)([`
    width:`,`px;
    min-height:`,`px;
    // padding: 12px 20px 0;
    overflow:auto;
`])),function(l){return l.width},function(l){return l.height}),M=x.ZP.div(w||(w=(0,g.Z)([`
    width:100%;
    min-height:100%;
    background:#fff;
    padding-bottom:20px;
`]))),N=(0,x.ZP)(P.Z)(E||(E=(0,g.Z)([`
    .ant-tabs-nav::before{
        border-bottom: 1px solid #f0f0f0;
    }
`]))),rt=t(20228),$=t(11382),vt=t(49111),J=t(19650),ft=t(13254),L=t(14277),ut=t(7359),O=t(7964),ct=t(13062),K=t(71230),Q=t(11849),R=t(39428),U=t(3182),p=t(2824),r=t(67294),X=t(96348),Y=t(25782),b=t(93082),k=t(11468),q=t(75307),_=t.n(q),tt=t(24480),a=t(85893),at=function(v){var o=v.ws_id,y=(0,r.useState)([]),f=(0,p.Z)(y,2),s=f[0],u=f[1],Z=(0,r.useState)({data:[],total:1}),I=(0,p.Z)(Z,2),B=I[0],lt=I[1],ot=(0,r.useState)(!0),D=(0,p.Z)(ot,2),it=D[0],W=D[1],F=function(){var n=(0,U.Z)((0,R.Z)().mark(function j(){var c,e,h,m,i,z,C=arguments;return(0,R.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return c=C.length>0&&C[0]!==void 0?C[0]:{ws_id:o,page_num:1,page_size:500},W(!0),d.next=4,(0,k.oW)(c);case 4:e=d.sent,h=e.data,m=e.total,i=e.code,z=e.msg,i===200?lt({data:h,total:m}):(0,tt.EV)(i,z),W(!1);case 11:case"end":return d.stop()}},j)}));return function(){return n.apply(this,arguments)}}();return(0,r.useEffect)(function(){F()},[]),(0,a.jsx)($.Z,{spinning:it,children:(0,a.jsx)(J.Z,{direction:"vertical",style:{width:"100%",paddingLeft:20,paddingRight:20},children:B.data.length>0?B.data.map(function(n){return(0,a.jsx)(O.Z,{className:_().CollapseContainer,expandIcon:function(c){var e=c.isActive;if(e&&s.indexOf(n.id)<0){var h=s.concat([n.id]);u(h)}else if(!e&&s.indexOf(n.id)>=0){var m=s.filter(function(i){return i!==n.id});u(m)}return(0,a.jsx)(Y.Z,{rotate:e?90:0})},style:{background:s.indexOf(n.id)>-1?"#fafafa":"#fff"},children:(0,a.jsx)(O.Z.Panel,{style:{borderBottom:"none"},header:(0,a.jsxs)(K.Z,{justify:"space-between",children:[(0,a.jsx)("b",{children:n.name}),(0,a.jsx)(X.IT,(0,Q.Z)({},n))]}),children:(0,a.jsx)(b.Z,{ws_id:o,plan_id:n.id,callBackViewTotal:F})},n.id)},n.id)}):(0,a.jsx)(L.Z,{image:L.Z.PRESENTED_IMAGE_SIMPLE})})})},nt=at,A=t(60035),et=function(v){var o=v.route,y=v.match,f=y.params.ws_id,s=(0,A.CR)(),u=s.height,Z=s.width;return(0,A.jk)("Workspace.TestPlan.".concat(o.name)),(0,a.jsx)(H,{height:u-50,width:Z,children:(0,a.jsx)(M,{children:(0,a.jsx)(N,{tabBarStyle:{height:64,background:"#FAFBFC"},children:(0,a.jsx)(P.Z.TabPane,{tab:(0,a.jsx)(G._H,{id:"Workspace.TestPlan.".concat(o.name)}),children:(0,a.jsx)(nt,{ws_id:f})})})})})},st=et}}]);
