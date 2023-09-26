(self.webpackChunktone_front=self.webpackChunktone_front||[]).push([[3927],{149:function(__,E,_){"use strict";_.r(E);var A=_(20418),n_=_(31650),K=_(25100),e_=_(89963),i=_(70077),c=_(35832),x=_(32326),b=_(39190),t_=_(14320),h=_(53479),t=_(41428),P=_(22374),a=_(97939),l=_(22812),w=_(98683),V=_(75647),p=_(526),S=_(39935),H=_(59300),n=_(52454),D,v,O,M,f,$=a.ZP.div(D||(D=(0,t.Z)([`
    width:`,`px;
    min-height:`,`px;
    overflow:auto;
    background-color: #f5f5f5;
    min-height:100%;
`])),function(r){return r.width},function(r){return r.height}),F=a.ZP.div(v||(v=(0,t.Z)([`
    // height:182px;
    width:100%;
    background:#fff;
    padding:20px;
`]))),z=(0,a.ZP)(h.Z)(O||(O=(0,t.Z)([`
    margin-top:8px;
`]))),G=a.ZP.div(M||(M=(0,t.Z)([`
    background:#fff;
    padding:20px;
    margin-top:10px;
`]))),J=a.ZP.span(f||(f=(0,t.Z)([`
    cursor:pointer;
    &:hover {
        color : #1890FF;
    }
`]))),N=function(g){var T=g.route,Q=g.match,j=Q.params,C=j.plan_id,d=j.ws_id,X=(0,P.useState)({}),W=(0,b.Z)(X,2),e=W[0],Y=W[1];(0,p.jk)("Workspace.TestPlan.".concat(T.name));var L=(0,p.CR)(),k=L.height,q=L.width,U=function(){var y=(0,x.Z)((0,c.Z)().mark(function B(){var I,o,R,m,Z,u=arguments;return(0,c.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return I=u.length>0&&u[0]!==void 0?u[0]:{ws_id:d,plan_id:C},s.next=3,(0,H.oW)(I);case 3:o=s.sent,R=o.data,m=o.code,Z=o.msg,m===200?Y(R):(0,S.EV)(m,Z);case 8:case"end":return s.stop()}},B)}));return function(){return y.apply(this,arguments)}}();return(0,P.useEffect)(function(){U()},[]),(0,n.jsxs)($,{height:k-50,width:q,children:[(0,n.jsxs)(F,{children:[(0,n.jsx)(h.Z,{style:{marginBottom:8},children:(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(i.Z.Item,{children:(0,n.jsx)(J,{onClick:function(){return l.m8.push("/ws/".concat(d,"/test_plan/view"))},children:(0,n.jsx)(l._H,{id:"Workspace.TestPlan.View"})})}),(0,n.jsx)(i.Z.Item,{children:(0,n.jsx)(l._H,{id:"Workspace.TestPlan.".concat(T.name)})})]})}),(0,n.jsx)(K.Z.Title,{level:3,children:e==null?void 0:e.name}),(0,n.jsx)(w.IT,(0,A.Z)({},e)),(0,n.jsx)(z,{children:e==null?void 0:e.description})]}),(0,n.jsx)(G,{children:(0,n.jsx)(V.Z,{plan_id:C,ws_id:d,showPagination:!0,callBackViewTotal:U})})]})};E.default=N}}]);
