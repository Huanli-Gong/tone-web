(self.webpackChunktone_front=self.webpackChunktone_front||[]).push([[5180],{36338:function(et,R,t){"use strict";t.d(R,{B1:function(){return o},PV:function(){return E},gt:function(){return p},YL:function(){return d},Sh:function(){return c}});var o=function(h){var g={normal:"normal",increase:"increase",decline:"decline",invalid:"invalid"};return g[h]},E=function(h){var g={normal:"-",invalid:"\u2298",increase:"\u2191",decline:"\u2193"};return g[h]},F=function(h,g){var a=h.conf_list.map(function(f,P){for(var T=[],S=[],X=0;X<5;X++)S.push([]);return f.metric_list.forEach(function(U){var w=U.compare_data[g];w.compare_result==="decline"?w.sortNum=0:w.compare_result==="increase"?w.sortNum=1:w.compare_result==="normal"?w.sortNum=2:w.compare_result==="invalid"?w.sortNum=3:w.sortNum=4,S.push(U)}),T=S.reduce(function(U,w){return U.concat(w)},[]),_objectSpread(_objectSpread({},f),{},{metric_list:T})}),r=function(P){var T=P===void 0?0:P.replace("%","");return T=Number(T),T},n=function(P){return r(P.sort(function(T,S){return r(T.compare_data[g].compare_value)-r(S.compare_data[g].compare_value)})[0].compare_data[g].compare_value)},e=a.sort(function(f,P){return n(f.metric_list)-n(P.metric_list)}),i=function(P){return P.sort(function(T,S){return T.compare_data[g].sortNum-S.compare_data[g].sortNum})[0].compare_data[g].sortNum},l=e.sort(function(f,P){return i(f.metric_list)-i(P.metric_list)})},p=function(h){var g=Number(h*100).toFixed(1);return g+="%",g},d=function(h){return h==0?"0":h||"-"},c=function(h){if(h=="Pass")return"#81BF84";if(h=="Fail")return"#C84C5A";if(h=="Skip")return"rgba(0,0,0,0.85)"}},79638:function(et,R,t){"use strict";var o=t(79625),E=t(96584),F=t(20418),p=t(39190),d=t(488),c=t(41428),v=t(22374),h=t(97939),g=t(526),a=t(52454),r=["title","children","width","color","placement","style"],n,e=h.ZP.div(n||(n=(0,c.Z)([`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`]))),i=function(f){var P=f.title,T=f.children,S=f.width,X=f.color,U=f.placement,w=U===void 0?"topLeft":U,B=f.style,G=(0,d.Z)(f,r),J=(0,v.useRef)(null),$=(0,v.useState)(!1),u=(0,p.Z)($,2),mt=u[0],at=u[1],K=(0,g.CR)(),ot=K.width,_t=function(){var q,it,pt=J==null||(q=J.current)===null||q===void 0?void 0:q.clientWidth,vt=J==null||(it=J.current)===null||it===void 0?void 0:it.scrollWidth;at(pt<vt)};(0,v.useEffect)(function(){_t()},[P,ot]);var lt=(0,a.jsx)(e,(0,F.Z)((0,F.Z)({ref:J,style:(0,F.Z)({width:S,color:X},B)},G),{},{children:T||P||"-"}));return mt?(0,a.jsx)(E.Z,{title:P,placement:w,overlayStyle:{wordBreak:"break-all"},children:lt}):lt};R.Z=i},89638:function(et,R,t){"use strict";t.d(R,{w:function(){return o},U:function(){return E}});var o=function(p,d){var c=JSON.stringify(p);return d==="volatility"?c.search("increase")!==-1||c.search("decline")!==-1:c.search(d)!==-1},E=function(p){return JSON.stringify(p)==="{}"?"-":"".concat(p.test_value,"\xB1").concat(p.cv_value)}},72069:function(et,R,t){"use strict";t.d(R,{c:function(){return mt}});var o=t(79625),E=t(96584),F=t(14320),p=t(53479),d=t(31650),c=t(25100),v=t(39190),h=t(41428),g=t(22374),a=t(97939),r,n,e,i,l="110",f=function(K){return K?K==1?"calc( 100% - ".concat(l,"px )"):"calc( (100% - ".concat(l,"px) / ").concat(K,")"):""},P=a.ZP.div(r||(r=(0,h.Z)([`
    width:`,`px;
    float:left;
    padding-left:16px;
    border-right:1px solid rgba(0,0,0,0.10);
`])),l),T=a.ZP.div(n||(n=(0,h.Z)([`
    border: 1px solid rgba(0,0,0,0.10);
    /* min-height:200px; */
    /* margin-bottom:13px; */
    border-bottom:none;
    border-right:none;
`]))),S=(0,a.ZP)(P)(e||(e=(0,h.Z)([`
    height:40px;
    line-height:40px;
    color:rgba(0,0,0,0.85);
    border-bottom:1px solid rgba(0,0,0,0.10);
    font-weight:500;
`]))),X=a.ZP.div(i||(i=(0,h.Z)([`
    width: `,`;
    /* float:left; */
    padding:0px 13px;
    border-right:1px solid rgba(0,0,0,0.10);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height:40px;
    line-height:40px;
    border-bottom:1px solid rgba(0,0,0,0.10);
    border-right:1px solid rgba(0,0,0,0.10);
`])),function(at){var K=at.gLen;return f(K)}),U=t(41777),w=t(22812),B=t(52454),G,J,$=(0,a.F4)(G||(G=(0,h.Z)([`
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(3px);
    }
`]))),u=a.ZP.div(J||(J=(0,h.Z)([`
    align-items: center;
    justify-content: center;
    height: 40px;
    line-height: 40px;
    display: inline-flex;
    width: 100px;
    margin: 0 auto;
    cursor: pointer;
    color: #1890FF;
    animation: `,` .5s ease-in-out .5s infinite alternate;
`])),$),mt=function(K){var ot=K.envData,_t=K.environmentResult,lt=K.group,st=_t.count,q=(0,w.YB)(),it=g.useState(!1),pt=(0,v.Z)(it,2),vt=pt[0],Ot=pt[1];return g.useEffect(function(){return function(){Ot(!1)}},[]),ot?(0,B.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[new Array(vt?st:1).fill("").map(function(Gt,Pt){return(0,B.jsx)(T,{children:[["IP","ip/sn"],[q.formatMessage({id:"report.server.distro",defaultMessage:"\u673A\u578B"}),"distro"],["CPU","cpu_info"],[q.formatMessage({id:"report.server.memory_info",defaultMessage:"\u5185\u5B58"}),"memory_info"],[q.formatMessage({id:"report.server.disk",defaultMessage:"\u78C1\u76D8"}),"disk"],[q.formatMessage({id:"report.server.ether",defaultMessage:"\u7F51\u7EDC"}),"ether"],["OS","os"],["Kernel","kernel"],["GCC","gcc"],["Glibc","glibc"]].map(function(Bt,Wt){var jt=(0,v.Z)(Bt,2),Dt=jt[0],At=jt[1];return(0,B.jsxs)(p.Z,{children:[(0,B.jsx)(S,{style:{background:"#fafafa"},children:Dt}),new Array(lt).fill("").map(function(zt,Lt){var xt,bt,yt,Zt=((xt=ot[Lt])===null||xt===void 0||(bt=xt.server_info)===null||bt===void 0||(yt=bt[Pt])===null||yt===void 0?void 0:yt[At])||"-";return(0,B.jsx)(X,{gLen:lt,children:(0,B.jsx)(c.Z.Text,{ellipsis:{tooltip:{title:(0,B.jsx)("span",{dangerouslySetInnerHTML:{__html:Zt.replace(/\n/g,"<br />")}})}},children:Zt})},Lt)})]},Wt)})},Pt)}),st>1&&!vt&&(0,B.jsx)(u,{onClick:function(){return Ot(!0)},children:(0,B.jsx)(E.Z,{title:q.formatMessage({id:"report.server.collapsed.tooltip.title",defaultMessage:"\u5C55\u5F00\u67E5\u770B\u66F4\u591A\u673A\u5668\u4FE1\u606F"}),children:(0,B.jsx)("span",{children:(0,B.jsx)(U.Z,{style:{transform:"rotate(90deg)",transformOrigin:"center"}})})})})]}):(0,B.jsx)(B.Fragment,{})}},15401:function(et,R,t){"use strict";t.d(R,{_V:function(){return E},xP:function(){return F},VX:function(){return p},J1:function(){return d},OF:function(){return c},on:function(){return v},gQ:function(){return h},k3:function(){return n},lI:function(){return e},a4:function(){return i}});var o=t(22812),E=function(f){return(0,o.WY)("/api/job/test/",{params:f})},F=function(f){return(0,o.WY)("/api/baseline/list/",{params:f})},p=function(f){return(0,o.WY)("/api/get/product/version/",{params:f})},d=function(f){return(0,o.WY)("/api/job/result/compare/suite/",{method:"post",data:f})},c=function(f){return(0,o.WY)("/api/job/result/compare/conf/",{method:"post",data:f})},v=function(f){return(0,o.WY)("/api/job/result/compare/list/",{method:"post",data:f})},h=function(f){return(0,o.WY)("/api/job/result/compare/info/",{method:"post",data:f})},g=function(f){return request("/api/plan/view/",{params:f})},a=function(f){return request("/api/plan/result/",{params:f})},r=function(f){return request("/api/plan/constraint/",{params:f})},n=function(f){return(0,o.WY)("/api/report/domain/group/",{method:"post",data:f})},e=function(f){return(0,o.WY)("/api/sys/product/",{params:f})},i=function(f){return(0,o.WY)("/api/job/result/compare/duplicate/",{method:"post",data:f})}},395:function(et,R,t){"use strict";t.d(R,{he:function(){return At},dv:function(){return zt},BK:function(){return Lt},JI:function(){return xt},ZI:function(){return bt},Xv:function(){return yt},KP:function(){return Zt},ER:function(){return Ht},HA:function(){return Nt},i1:function(){return Xt},xM:function(){return Qt},Xb:function(){return Yt},Rr:function(){return kt},DK:function(){return Jt},ZA:function(){return $t},Ll:function(){return Z},Y0:function(){return s},gb:function(){return b},yO:function(){return j},uP:function(){return D},h$:function(){return O},h:function(){return I},iM:function(){return m},Qz:function(){return W},TG:function(){return N},j3:function(){return M},r0:function(){return y},WF:function(){return H},KW:function(){return ut},LQ:function(){return nt},lu:function(){return dt},Km:function(){return rt},ly:function(){return Y},GH:function(){return _},Lc:function(){return tt},bH:function(){return z},Qq:function(){return V}});var o=t(31650),E=t(25100),F=t(14320),p=t(53479),d=t(41428),c=t(97939),v=t(2488),h,g,a,r,n,e,i,l,f,P,T,S,X,U,w,B,G,J,$,u,mt,at,K,ot,_t,lt,st,q,it,pt,vt,Ot,Gt,Pt,Bt,Wt,jt,Dt=360,At=c.ZP.div(h||(h=(0,d.Z)([`
    position:fixed;
    left:50%;
    top:50%;
    z-index:999;
    transform: translate(-50%,-50%);
    cursor:pointer;
    font-size:14px;
    .my-loading-span {
        position: relative;
        display: inline-block;
        font-size: 32px;
        width: 1em;
        height: 1em;
        transform: rotateZ(45deg);
        transition: transform .3s cubic-bezier(.78, .14, .15, .86);
        animation: Rotate45 1.2s infinite linear;
    }
    .my-loading-span > i {
        height: 14px;
        width: 14px;
        background-color: #1890ff;
        display: block;
        position: absolute;
        border-radius: 100%;
        transform: scale(.75);
        transform-origin: 50% 50%;
        opacity: .3;
        animation: myAnimationMove 1s infinite linear alternate;
    }
    .my-loading-span:nth-child(1) {
        top: 0;
        left: 0;
    }
    .my-loading-span :nth-child(2) {
        top: 0;
        right: 0;
        animation-delay: .4s;
    }
    .my-loading-span :nth-child(3) {
        bottom: 0;
        right: 0;
        animation-delay: .8s;
    }
    .my-loading-span :nth-child(4) {
        left: 0;
        bottom: 0;
        animation-delay: 1.2s;
    }
    @keyframes Rotate45 {
        to {
        transform: rotate(405deg);
        }
    };
    @keyframes myAnimationMove {
        to {
            opacity: 1;
        }
    }
`]))),zt=(0,c.ZP)(p.Z)(g||(g=(0,d.Z)([`
    margin:0 auto !important;
    height:100%;   
    padding:0 20px;
`]))),Lt=c.ZP.div(a||(a=(0,d.Z)([`
    height:74px;
    line-height:74px;
    .btn{
        display:inline-block;
        float: right;
    }
`]))),xt=c.ZP.span(r||(r=(0,d.Z)([`
    float: right;
    padding-top: 12px;
`]))),bt=(0,c.ZP)(E.Z.Text)(n||(n=(0,d.Z)([`
    font-size:32px;
    font-family: PingFangSC-Semibold;
    color:rgba(0,0,0,0.85);
`]))),yt=c.ZP.div(e||(e=(0,d.Z)([`
    overflow-x:scroll;
`]))),Zt=c.ZP.div(i||(i=(0,d.Z)([`
    background:#fff;
    padding:16px 20px;
    margin-bottom:16px;
`]))),Ht=c.ZP.div(l||(l=(0,d.Z)([`
    font-size:16px;
    font-weight:bold;
    color:rgba(0,0,0,0.85); 
    margin-bottom: 16px;
    .line{
        width:2px;
        height:16px;
        background:#1890FF;
        margin: 4px 8px 4px -10px;
        float:left;
    }
`]))),Nt=c.ZP.div(f||(f=(0,d.Z)([`
    border: 1px solid rgba(0,0,0,0.10);
    height:48px;
    line-height:48px;
    color:#000;
    font-weight:500;
    margin-bottom:13px;
    border-right:none;
    display:flex;
`]))),Vt=function(C,Ct){return C==1?"calc( 100% - ".concat(110,"px )"):"calc((100% - ".concat(110,"px) / ",C,")")},Xt=c.ZP.div(P||(P=(0,d.Z)([`
    width: `,`px;
    float:left;
    padding-left:16px;
    border-right:1px solid rgba(0,0,0,0.10);
`])),110),Qt=c.ZP.div(T||(T=(0,d.Z)([`
    width: `,`;
    display:flex;
    padding-left:13px;
    border-right:1px solid rgba(0,0,0,0.10);
`])),function(x){var C=x.gLen,Ct=x.enLocale;return Vt(C,Ct)}),Yt=c.ZP.div(S||(S=(0,d.Z)([`
    height: 24px;
    width: 64px;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: rgba(0,0,0,0.85);
    line-height: 24px;
    margin:16px 0;
`]))),kt=c.ZP.div(X||(X=(0,d.Z)([`
    border:1px solid rgba(0,0,0,0.1);
    border-radius:4px;
`]))),Jt=c.ZP.div(U||(U=(0,d.Z)([`
    font-size:16px;
    font-weight:bold;
    color:rgba(0,0,0,0.85); 
    margin-bottom: 16px;
    .line{
        width:2px;
        height:16px;
        background:#1890FF;
        margin: 4px 8px 4px -10px;
        float:left;
    }
`]))),Ft=`
    float:left;
    font-size:14px;
    padding-left:16px;
    color:rgba(0,0,0,0.85);
    font-family: PingFangSC-Medium;
`,Et=function(C){return C==1?"50%":"".concat(Dt,"px")},Mt=function(C){return C==1?"50%":"calc((100% - ".concat(Dt,"px) / ").concat(C,")")},$t=c.ZP.div(w||(w=(0,d.Z)([`
    height:48px;
    display:flex;
    //border:1px solid rgba(0,0,0,0.10);
`]))),Z=c.ZP.div(B||(B=(0,d.Z)([`
    width : `,`;
    border-right:1px solid rgba(0,0,0,0.10);
    border-bottom:none;
    line-height:48px; 
    float:left;
    padding-left:16px;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #000000;
`])),function(x){var C=x.gLen;return Et(C)}),s=c.ZP.div(G||(G=(0,d.Z)([`
    width : `,`;
    display:flex;
    border-bottom:none;
    `,`
    &:last-child {
        border-right:none;
    }
    line-height:48px; 
    font-family: PingFangSC-Medium;
    border-right:1px solid rgba(0,0,0,0.10);
`])),function(x){var C=x.gLen;return Mt(C)},Ft),b=c.ZP.div(J||(J=(0,d.Z)([`
    height:auto;
    background:rgba(0,0,0,0.03);
    // margin:0 16px 18px 16px;
    padding-bottom: 18px;
`]))),j=c.ZP.div($||($=(0,d.Z)([`
    height:41px;
    line-height:41px;
    padding-left:16px;
    font-size:14px;
    font-family: PingFangSC-Medium;
    color:rgba(0,0,0,0.85);
    background:rgba(0,0,0,0.04);
    position:relative;
`]))),D=c.ZP.div(u||(u=(0,d.Z)([`
    margin: 0px 15px 0px 17px;
    border-top:1px solid rgba(0,0,0,0.10);
`]))),O=c.ZP.div(mt||(mt=(0,d.Z)([`
    margin: 10px 0px 3px 0px;
    height:22px;
    padding-left:16px;
`]))),I=c.ZP.div(at||(at=(0,d.Z)([`
    float:left;
    font-size:12px;
    color: rgba(0,0,0,0.45);
    width : `,`;
`])),function(x){var C=x.gLen;return Et(C)}),m=c.ZP.div(K||(K=(0,d.Z)([`
    float:left;
    font-size:12px;
    color: rgba(0,0,0,0.45);
    width : `,`;
    //overflow: hidden;
    white-space: nowrap;
    //text-overflow: ellipsis;
    &:last-child {
        border-right:none;
    }
`])),function(x){var C=x.gLen;return Mt(C)}),W=c.ZP.span(ot||(ot=(0,d.Z)([`
    //display:inline-block;
    float:right;
    padding-right:9px;

    .normal{
        color: rgba(0,0,0,1);
        font-size: 14px;
   }
   .invalid{
        color: rgba(0,0,0,0.25);
        font-size: 14px;
   }
   .increase{
        font-size: 14px;
        color: #81BF84;
    }
    .decline{
        font-size: 14px;
        color: #C84C5A;
    }
`]))),N=c.ZP.div(_t||(_t=(0,d.Z)([`
    height:38px;
    line-height:38px;
    background:rgba(0,0,0,0.02);
`]))),M=c.ZP.div(lt||(lt=(0,d.Z)([`
    width : `,`;
    `,`
`])),function(x){var C=x.gLen;return Et(C)},Ft),y=c.ZP.div(st||(st=(0,d.Z)([`
    width : `,`;
    `,`
`])),function(x){var C=x.gLen;return Mt(C)},Ft),H=c.ZP.div(q||(q=(0,d.Z)([`
    height:38px;
    line-height:38px;
    background:#ffffff;
    border-bottom: 1px solid rgba(0,0,0,0.10);
    &:last-child{
        border-bottom:none;
    }
`]))),ct=`
    float:left;
    font-size:14px;
    color:rgba(0,0,0,0.65);
    font-family:PingFangSC-Regular;
`,ut=c.ZP.div(it||(it=(0,d.Z)([`
    width : `,`;
    padding-left:36px;
    white-space: nowrap;
    border-right: 1px solid rgba(0,0,0,0.10);
    `,`
`])),function(x){var C=x.gLen;return Et(C)},ct),nt=c.ZP.div(pt||(pt=(0,d.Z)([`
    width : `,`;
    padding-left:16px;
    `,`
    white-space: nowrap;
    border-right: 1px solid rgba(0,0,0,0.10);
    &:last-child{
        border-right:none;
    }
`])),function(x){var C=x.gLen;return Mt(C)},ct),dt=c.ZP.div(vt||(vt=(0,d.Z)([`
    height:40px;
    background:#fafafa;
    border: 1px solid rgba(0,0,0,0.10);
    border-right:none;
    border-top: none;
    /* &:first-child {
        border-top:1px solid rgba(0,0,0,0.10);
    } */
`]))),ft=`
    float:left;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color:rgba(0,0,0,0.85)
`,rt=c.ZP.div(Ot||(Ot=(0,d.Z)([`
    width : `,`;
    height:40px;
    line-height:40px;
    border-right: 1px solid rgba(0,0,0,0.10);
    `,`
`])),function(x){var C=x.gLen;return Et(C)},ft),Y=(0,c.ZP)(rt)(Gt||(Gt=(0,d.Z)([`
    padding-left:36px;
    height:38px;
    line-height:38px;
    font-family: PingFangSC-Regular;
    color:rgba(0,0,0,0.65);
`]))),_=c.ZP.div(Pt||(Pt=(0,d.Z)([`
    height:38px;
    background:#fff;
    border: 1px solid rgba(0,0,0,0.10);
    border-top:none;
    border-right:none;
`]))),tt=c.ZP.div(Bt||(Bt=(0,d.Z)([`
    width : `,`;
    height:40px;
    line-height:40px;
    padding-left:16px;
    border-right: 1px solid rgba(0,0,0,0.10);
    `,`
`])),function(x){var C=x.gLen;return Mt(C)},ft),z=(0,c.ZP)(tt)(Wt||(Wt=(0,d.Z)([`
    height:38px;
    line-height:38px;
`]))),V=(0,c.ZP)(v.Z)(jt||(jt=(0,d.Z)([`
    cursor:pointer;
    padding:13px 0px 13px 8px;

`])))},27165:function(et,R,t){"use strict";t.d(R,{F:function(){return B}});var o=t(79625),E=t(96584),F=t(14320),p=t(53479),d=t(70772),c=t(6701),v=t(41428),h=t(22374),g=t(74066),a=t(22812),r=t(97939),n=t(52454),e,i,l,f,P,T=r.ZP.span(e||(e=(0,v.Z)([`
    color: rgba(0,0,0,0.65);
`]))),S=r.ZP.div(i||(i=(0,v.Z)([`
    width: 320px;
    height: 200px;
    border: 1px solid #ccc;
`]))),X=r.ZP.div(l||(l=(0,v.Z)([`
    height: 40px;
    line-height: 20px;
`]))),U=r.ZP.span(f||(f=(0,v.Z)([`
    height: 22px; 
    width: 88px;
    text-align: center;
    background: #0089FF; 
    border-radius: 4px;
    color: #fff;
    float: right;
    margin: 8px 8px 0 0;
`]))),w=r.ZP.div(P||(P=(0,v.Z)([`
    border-right: 1px solid #ccc;
    height: 150px;
    padding-left: 12px;
`]))),B=function(){return(0,n.jsx)(E.Z,{color:"#fff",overlayStyle:{minWidth:350},title:(0,n.jsxs)(T,{children:[(0,n.jsx)(a._H,{id:"analysis.differentiation.info"}),(0,n.jsx)("br",{}),(0,n.jsx)(a._H,{id:"analysis.rules.as.follows"}),(0,n.jsx)("br",{}),(0,n.jsxs)(S,{children:[(0,n.jsx)(p.Z,{children:(0,n.jsx)(c.Z,{span:16,children:(0,n.jsx)(X,{children:(0,n.jsx)(U,{children:(0,n.jsx)(a._H,{id:"analysis.benchmark.group"})})})})}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)(c.Z,{span:8,children:(0,n.jsx)(w,{style:{paddingLeft:0,textAlign:"center"},children:(0,n.jsx)("span",{style:{paddingTop:60,display:"block"},children:(0,n.jsx)(a._H,{id:"analysis.from.top.to.bottom"})})})}),(0,n.jsx)(c.Z,{span:8,children:(0,n.jsxs)(w,{children:[(0,n.jsx)("p",{children:"pass"}),(0,n.jsx)("p",{children:"fail"}),(0,n.jsx)("p",{children:"fail"}),(0,n.jsx)("p",{children:"pass"})]})}),(0,n.jsx)(c.Z,{span:8,children:(0,n.jsxs)(w,{style:{borderRight:"none"},children:[(0,n.jsx)("p",{children:"fail"}),(0,n.jsx)("p",{children:"pass"}),(0,n.jsx)("p",{children:"fail"}),(0,n.jsx)("p",{children:"pass"})]})})]})]})]}),children:(0,n.jsx)(g.Z,{})})}},99788:function(et,R,t){"use strict";var o=t(20418),E=t(57359),F=t(34423),p=t(31650),d=t(25100),c=t(79625),v=t(96584),h=t(22374),g=t(22812),a=t(88856),r=t(88948),n=t(79638),e=t(395),i=t(52454),l=function(P){var T=P.envData,S=P.group,X=P.isData,U=P.enLocale,w=function(G){var J=G.is_group,$=G.is_baseline,u=G.tag;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(F.Z,{children:[J&&(0,i.jsx)(v.Z,{title:(0,i.jsx)(g._H,{id:"analysis.benchmark.group"}),children:(0,i.jsx)(a.r,{style:{marginRight:4,marginTop:17,width:10,height:14}})}),$?(0,i.jsxs)(v.Z,{title:(0,i.jsx)(g._H,{id:"analysis.baseline.group"}),children:[(0,i.jsx)(r.r,{style:{marginRight:4,marginTop:17,width:10,height:14}}),(0,i.jsxs)(d.Z.Text,{children:["\uFF08",(0,i.jsx)(g._H,{id:"analysis.test.baseline"}),"\uFF09"]})]}):null]}),(0,i.jsx)(n.Z,{title:u,width:"calc(100% - 130px)"})]})};return(0,i.jsx)(i.Fragment,{children:Array.isArray(T)&&T.map(function(B,G){return X?(0,i.jsx)(e.Y0,{gLen:S,children:(0,i.jsx)(w,(0,o.Z)({},B))},G):(0,i.jsx)(e.xM,{gLen:S,enLocale:U,children:(0,i.jsx)(w,(0,o.Z)({},B))},G)})})};R.Z=l},24492:function(et,R,t){"use strict";t.d(R,{Z:function(){return $t}});var o=t(57359),E=t(34423),F=t(79625),p=t(96584),d=t(35832),c=t(32326),v=t(39190),h=t(31650),g=t(25100),a=t(14320),r=t(53479),n=t(41428),e=t(22374),i=t(22812),l=t(97939),f,P=["svgRef","title"];function T(){return T=Object.assign?Object.assign.bind():function(Z){for(var s=1;s<arguments.length;s++){var b=arguments[s];for(var j in b)Object.prototype.hasOwnProperty.call(b,j)&&(Z[j]=b[j])}return Z},T.apply(this,arguments)}function S(Z,s){if(Z==null)return{};var b=X(Z,s),j,D;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(Z);for(D=0;D<O.length;D++)j=O[D],!(s.indexOf(j)>=0)&&(!Object.prototype.propertyIsEnumerable.call(Z,j)||(b[j]=Z[j]))}return b}function X(Z,s){if(Z==null)return{};var b={},j=Object.keys(Z),D,O;for(O=0;O<j.length;O++)D=j[O],!(s.indexOf(D)>=0)&&(b[D]=Z[D]);return b}var U=function(s){var b=s.svgRef,j=s.title,D=S(s,P);return e.createElement("svg",T({width:"10px",height:"14px",viewBox:"0 0 10 14",ref:b},D),j?e.createElement("title",null,j):null,f||(f=e.createElement("g",{id:"\\u9875\\u9762-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},e.createElement("g",{id:"3\\u4E2Agroup\\u76EE\\u5F55\\u6536\\u8D77",transform:"translate(-263.000000, -767.000000)",fillRule:"nonzero"},e.createElement("g",{id:"\\u7F16\\u7EC4-2",transform:"translate(119.000000, 686.000000)"},e.createElement("g",{id:"\\u7F16\\u7EC4-8",transform:"translate(21.000000, 64.000000)"},e.createElement("g",{id:"basegroup",transform:"translate(120.000000, 16.000000)"},e.createElement("rect",{id:"\\u77E9\\u5F62",fill:"#FFFFFF",opacity:0,x:0,y:0,width:16,height:16,rx:2}),e.createElement("path",{d:"M4,1 C3.72417824,1.00077249 3.50077249,1.22417824 3.5,1.5 L3.5,14.5 C3.5,14.7761424 3.72385763,15 4,15 C4.27614237,15 4.5,14.7761424 4.5,14.5 L4.5,1.5 C4.49922751,1.22417824 4.27582176,1.00077249 4,1 L4,1 Z M4.5,2 L12.5,6.5 L4.5,11",id:"\\u5F62\\u72B6",fill:"#8c8c8c"}))))))))},w=e.forwardRef(function(Z,s){return e.createElement(U,T({svgRef:s},Z))}),B=t.p+"static/GaryBaseIcon.c2b59494.svg",G=t(79638),J=t(15401),$=t(20507),u=t(52454),mt=function(s){var b=s.setLegend,j=s.name,D=s.envData,O=s.data,I=s.chartType,m=s.loading,W=(0,e.useRef)();return(0,e.useEffect)(function(){var N=O.length>4?parseInt(parseFloat(4/O.length)*100):O.length,M=$.S1(W.current);M.clear(),M.setOption({title:{subtext:"more is better"},grid:{left:40,right:8},animation:!1,xAxis:{data:O,axisTick:{show:!1},axisLabel:{interval:0,width:110,formatter:function(H){return H.length>16?H.substr(0,16)+"...":H}}},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{type:"dashed"}},axisLabel:{showMinLabel:!0,showMaxLabel:!0,fontSize:10},boundaryGap:!0,min:0,max:5e3},dataZoom:[{show:I!=="1",realtime:!0,start:0,end:N,left:"20%",height:8,right:"20%"},{type:"inside",realtime:!0,zoomOnMouseWheel:!1,start:0,end:N}]})},[I]),(0,u.jsx)("div",{ref:W,style:{width:I!=="1"?"100%":268,height:376,display:"inline-block",flexShrink:0}})},at=mt,K=t(36338),ot=function(s){var b={normal:"rgba(0,0,0,1)",increase:"#81BF84",decline:"#C84C5A",invalid:"rgba(0,0,0,0.25)"};return b[s]},_t=function(s){var b="";switch(s){case"increase":b="more is better";break;case"\u4E0A\u5347":b="more is better";break;case"decline":b="less is better";break;case"\u4E0B\u964D":b="less is better";break;default:b="-";break}return b},lt=function(s){var b=s.callBackColor,j=s.name,D=s.envData,O=s.chartType,I=s.time,m=s.data,W=(0,e.useRef)(),N=(0,e.useRef)();(0,e.useEffect)(function(){var y;(y=N.current)===null||y===void 0||y.dispatchAction({name:j,type:"legendToggleSelect"})},[j]);var M=(0,e.useMemo)(function(){var y={series:[],xAxisData:[],legData:[],subText:[],dataZoom_end:100},H=[],ct=[],ut=0,nt=0;y.legData.push(D.base_group.tag);for(var dt=D.compare_groups,ft=0;ft<dt.length;ft++)y.legData.push(dt[ft].tag);if(O=="1"){y.subText.push(m.direction);for(var rt=m.compare_data,Y=0;Y<rt.length;Y++){var _,tt,z;H.push({value:(_=rt[Y])===null||_===void 0?void 0:_.test_value,compare_value:(tt=rt[Y])===null||tt===void 0?void 0:tt.compare_value,compare_result:(z=rt[Y])===null||z===void 0?void 0:z.compare_result}),nt=rt.length}y.xAxisData.push(m.metric);for(var V=0;V<nt;V++)y.series.push({type:"bar",data:[{value:H[V].value,compare_value:H[V].compare_value,compare_result:H[V].compare_result}],name:y.legData[V],barWidth:"10px",barGap:"80%",barCategoryGap:"40%",barMinHeight:1})}else{if(O=="2"){m.length>5&&(y.dataZoom_end=5/m.length*100);for(var x=0;x<m.length;x++)y.xAxisData.push(m[x].conf_name),y.subText.push(m[x].direction),nt=m[x].compare_data.length,ut=m.length;for(var C=function(wt){m==null||m.forEach(function(L){var A;(A=L.compare_data)===null||A===void 0||A.forEach(function(Q,k){k===wt&&H.push({value:Q.test_value,compare_value:Q.compare_value,compare_result:Q.compare_result})})})},Ct=0;Ct<nt;Ct++)C(Ct)}if(O=="3"){var It;m.metric_list.length>5&&(y.dataZoom_end=5/m.metric_list.length*100);for(var Tt=0,St=m.metric_list;Tt<St.length;Tt++)y.xAxisData.push(St[Tt].metric),nt=St[Tt].compare_data.length,ut=St.length;(It=m.metric_list)===null||It===void 0||It.forEach(function(Rt){var wt;(wt=Rt.compare_data)===null||wt===void 0||wt.forEach(function(L){H.push({value:L.test_value,compare_value:L.compare_value,compare_result:L.compare_result,cv_threshold:Rt.cv_threshold,cmp_threshold:Rt.cmp_threshold})})})}for(var Ut=0,qt=H.length;Ut<qt;Ut+=ut)ct.push(H.slice(Ut,Ut+ut));for(var Kt=0;Kt<nt;Kt++)y.series.push({type:"bar",data:ct[Kt],name:y.legData[Kt],barWidth:"10px",barGap:"80%",barCategoryGap:"40%",barMinHeight:1})}return y},[m]);return(0,e.useEffect)(function(){var y=M.series,H=M.subText,ct=M.xAxisData,ut=M.legData,nt=M.dataZoom_end,dt=I.reduce(function(Y,_){return Y+=_*2},0),ft={title:{subtext:O=="3"?"":_t(H.toString())},grid:{left:40,right:8,bottom:O==="1"?"15%":"30%"},animation:!1,xAxis:{data:ct,type:"category",nameLocation:"start",axisTick:{show:!1},axisLabel:{interval:0,formatter:function(_){for(var tt=_.split(""),z="",V=0,x;x=tt[V++];)z+=x,V%15||(z+=`
`);return z}}},legend:{data:ut,show:!1},tooltip:{trigger:O=="1"?"item":"axis",axisPointer:{type:"shadow"},confine:!0,show:!0,renderMode:"html",backgroundColor:"#fff",borderColor:"#fff",textStyle:{color:"rgba(0,0,0,0.65)",fontSize:14},extraCssText:"box-shadow: 0 2px 8px 0 rgba(0,0,0,0.15);border-radius: 2px;padding:12px;z-index:9999",formatter:function(_){for(var tt="",z=0;z<_.length;z++){var V,x,C;tt+=`
                            <div style="display:flex;flex-wrap:wrap;">
                                <div style="width:8px;height:8px;border-radius:50%;background:`.concat(_[z].color,`;margin-top:5px;"></div>
                                <div style="padding-left:9px;width:120px;word-break:break-all;white-space:normal;">`).concat(_[z].seriesName,`</div>
                                <div style="padding-left:16px;">`).concat(_[z].value||"-",`</div>
                                <div style="padding-left:9px;width:30px;">
                                    <i style="font-style:normal;color:`).concat(ot((V=_[z].data)===null||V===void 0?void 0:V.compare_result)||"",`">
                                        `).concat(((x=_[z].data)===null||x===void 0?void 0:x.compare_value)||"",`
                                        `).concat((0,K.PV)((C=_[z].data)===null||C===void 0?void 0:C.compare_result)||"",`
                                    </i>
                                </div>
                            </div>
                            `)}return O=="1"?`
                                <div style="width:260px;">
                                    <div style="display:flex;flex-warp:wrap">
                                        <div style="width:180px;word-break:break-all;white-space:normal;font-weight:bold;padding-right:5px">`.concat(m.metric,`</div>
                                        (`,"".concat((0,K.gt)(m.cv_threshold),"/").concat((0,K.gt)(m.cmp_threshold)),`)
                                    </div>
                                    <div style="display:flex;flex-warp:wrap">
                                        <div style="width:8px;height:8px;border-radius:50%;background:`).concat(_.color,`;margin-top:5px;"></div>
                                        <div style="padding-left:9px;width:120px;word-break:break-all;white-space:normal;">`).concat(_.seriesName,`</div>
                                        <div style="padding-left:16px;">`).concat(_.value||"-",`</div>
                                        <div style="padding-left:9px;width:30px;">
                                            <i style="font-style:normal;color:`).concat(ot(_.data.compare_result)||"",`">
                                            `).concat(_.data.compare_value||"",`
                                            `).concat((0,K.PV)(_.data.compare_result)||"",`
                                            </i>
                                        </div>
                                    </div>
                                </div>`):O=="2"?`<div style="width:260px;">
                                    <div style="font-weight:bold">`.concat(_[0].name,`</div>
                                    `).concat(tt,`
                                </div>`):`<div style="width:260px;">
                                    <div>
                                        <span style="font-weight:bold;padding-right:5px">`.concat(_[0].name,`</span>
                                        (`,"".concat((0,K.gt)(_[0].data.cv_threshold),"/").concat((0,K.gt)(_[0].data.cmp_threshold)),`)
                                    </div>
                                    `).concat(tt,`
                                </div>
                               `)}},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1,inside:!0},splitLine:{show:!0,lineStyle:{type:"dashed"}},axisLabel:{showMinLabel:!0,showMaxLabel:!0,interval:0,fontSize:10,margin:2,formatter:function(_){return _>=1e4&&_<1e8&&(_=_/1e4+"\u4E07"),_>=1e8&&_<1e12&&(_=_/1e8+"\u4EBF"),_}},boundaryGap:!0},series:y,dataZoom:[{type:"slider",show:O!=="1",realtime:!0,start:0,end:nt,handleSize:8,height:8},{type:"inside",realtime:!0,start:0,end:nt,zoomOnMouseWheel:!1,moveOnMouseMove:!0,moveOnMouseWheel:!0,preventDefaultMouseMove:!1}]},rt=setTimeout(function(){var Y=$.S1(W.current,void 0,{renderer:"svg"});Y.setOption(ft),b(Y.getOption().color),N.current=Y},dt);return function(){rt&&clearTimeout(rt),N.current&&N.current.dispose()}},[M]),(0,u.jsx)("div",{ref:W,style:{width:O!=="1"?"100%":268,height:340,display:"inline-block",flexShrink:0}})},st=e.memo(lt),q,it=l.ZP.div(q||(q=(0,n.Z)([`
    height:340px;
    width:100%;
    display: flex;
    overflow-x:scroll;
    overflow-y:hidden;
    flex-wrap: nowrap;
    flex-shrink: 0;
    background: `,`;
    margin-bottom:10px;
    &::-webkit-scrollbar { 
        /* \u9690\u85CF\u9ED8\u8BA4\u7684\u6EDA\u52A8\u6761 */
        -webkit-appearance: none;
    }
    &::-webkit-scrollbar:horizontal{
        /* \u8BBE\u7F6E\u6C34\u5E73\u6EDA\u52A8\u6761\u539A\u5EA6 */
        height: 8px;
    }
    &::-webkit-scrollbar-thumb { 
        border-radius: 3px; 
        // border: 2px solid rgba(255,255,255,.4); 
        background-color: rgba(0, 0, 0, .5);
    }
`])),function(Z){var s=Z.is_active;return s?"rgba(59,160,255,0.05)":""}),pt=function(s){var b=s.callBackColor,j=s.legend,D=s.envData,O=s.chartData,I=s.time,m=s.is_active,W=s.chartType;return W==="1"?(0,u.jsx)(it,{is_active:m,children:O.metric_list.length===0?(0,u.jsx)(at,{chartType:W,data:[""],is_active:m}):O.metric_list.map(function(N,M){return(0,u.jsx)(st,{callBackColor:b,name:j,envData:D,chartType:W,time:I.concat(M),data:N})})}):(0,u.jsx)(it,{is_active:m,children:JSON.stringify(O)==="{}"?(0,u.jsx)(at,{chartType:W,data:[""],is_active:m}):(0,u.jsx)(st,{callBackColor:b,name:j,envData:D,chartType:W,time:I,data:O})})},vt=function(s){var b=s.current,j=s.handleChartColor,D=s.legend,O=s.envData,I=s.loading,m=s.chartConf,W=s.chartType,N=(0,e.useMemo)(function(){return m&&m.map(function(M,y){return(0,u.jsxs)("div",{id:"".concat(M.conf_name,"-").concat(y),style:{width:"100%"},children:[(0,u.jsx)("div",{style:b==="".concat(M.conf_name,"-").concat(y)?{background:"rgba(59,160,255,0.05)"}:{},children:(0,u.jsx)(g.Z.Title,{level:5,style:b==="".concat(M.conf_name,"-").concat(y)?{color:"#1890FF"}:{},children:M.conf_name})}),(0,u.jsx)(pt,{callBackColor:j,legend:D,envData:O,loading:I,chartData:M,time:[y],is_active:b==="".concat(M.conf_name,"-").concat(y),chartType:W},M==null?void 0:M.conf_name)]},y)})},[b,D,I,m,W]);return N},Ot=vt,Gt=t(67448),Pt=t(47548),Bt=function(s){var b=s.current,j=s.handleChartColor,D=s.legend,O=s.envData,I=s.loading,m=s.chartMetric,W=s.chartType,N=(0,e.useMemo)(function(){return m&&(0,u.jsx)(u.Fragment,{children:JSON.stringify(m.metric_dic)==="{}"?(0,u.jsx)(at,{chartType:W,data:[""]}):m.metric_dic&&Object.keys(m.metric_dic).map(function(M,y){return(0,u.jsxs)("div",{id:"".concat(M,"-").concat(y),style:{width:"100%",overflow:"hidden"},children:[(0,u.jsx)("div",{style:b==="".concat(M,"-").concat(y)?{background:"rgba(59,160,255,0.05)"}:{},children:(0,u.jsx)(g.Z.Title,{level:5,style:b==="".concat(M,"-").concat(y)?{color:"#1890FF"}:{},children:M})}),(0,u.jsx)(Pt.Z,{spinning:I,children:(0,u.jsx)(st,{callBackColor:j,name:D,envData:O,chartType:W,time:[y],data:m.metric_dic[M]})})]},y)})})},[b,D,I,m,W]);return N},Wt=Bt,jt=t(97207),Dt,At,zt,Lt,xt,bt,yt,Zt,Ht,Nt=(0,l.ZP)(r.Z)(Dt||(Dt=(0,n.Z)([`
    width:100%;
`]))),Vt=(0,l.ZP)(Nt)(At||(At=(0,n.Z)([`
    margin-top:20px;
    border: 1px solid rgba(0,0,0,0.1);
`]))),Xt=(0,l.ZP)(Nt)(zt||(zt=(0,n.Z)([`
    background:rgba(0,0,0,.02);
    min-height:40px;
    align-items:center;
    padding:0 20px;
    // overflow-x: scroll;
    // white-space: nowrap;
    word-break: break-all;
`]))),Qt=l.ZP.div(Lt||(Lt=(0,n.Z)([`
    width:8px;height:8px;
    display:inline-block;
    background:`,`;
`])),function(Z){var s=Z.color;return s}),Yt=(0,l.ZP)(Nt)(xt||(xt=(0,n.Z)([`
    padding:20px 16px;
    background:#fff;
`]))),kt=l.ZP.div(bt||(bt=(0,n.Z)([`
    height:100%;
    overflow-y:auto;
    overflow-x:hidden;
    width:340px;
    min-height:367px;
`]))),Jt=(0,l.ZP)(g.Z.Text)(yt||(yt=(0,n.Z)([`
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color:rgba(0,0,0,.65);
`]))),Ft=(0,l.ZP)(g.Z.Text)(Zt||(Zt=(0,n.Z)([`
    cursor:pointer;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color:rgba(0,0,0,.85);
    `,`
`])),function(Z){var s=Z.is_active;return s&&"color:#1890FF;"}),Et=l.ZP.div(Ht||(Ht=(0,n.Z)([`
    width:calc( 100% - 340px );
    .ant-typography { margin-bottom:0;}
`]))),Mt=function(s){var b=(0,i.YB)(),j=b.formatMessage,D=s.chartType,O=s.suite_id,I=s.conf_list,m=s.suite_name,W=s.envData,N=s.base_index,M=(0,e.useState)(""),y=(0,v.Z)(M,2),H=y[0],ct=y[1],ut=(0,e.useState)(null),nt=(0,v.Z)(ut,2),dt=nt[0],ft=nt[1],rt=(0,e.useState)(!1),Y=(0,v.Z)(rt,2),_=Y[0],tt=Y[1],z=(0,e.useState)(null),V=(0,v.Z)(z,2),x=V[0],C=V[1],Ct=(0,e.useState)([]),It=(0,v.Z)(Ct,2),Tt=It[0],St=It[1],Ut=function(){var L=(0,c.Z)((0,d.Z)().mark(function A(Q){var k;return(0,d.Z)().wrap(function(gt){for(;;)switch(gt.prev=gt.next){case 0:return tt(!0),gt.next=3,(0,J.on)(Q);case 3:k=gt.sent,k.code===200&&(tt(!1),C(k.data));case 5:case"end":return gt.stop()}},A)}));return function(Q){return L.apply(this,arguments)}}();(0,e.useEffect)(function(){var L={};L.suite_id=O,L.suite_name=m,L.is_all=0,L.async_request=1,L.base_index=N;var A=[],Q=[],k=[];I==null||I.forEach(function(ht,gt){k=ht.conf_compare_data||ht.compare_conf_list,Q.push({conf_id:ht.conf_id,conf_name:ht.conf_name})}),k.forEach(function(ht){A.push({job_list:[].concat(ht.obj_id)})}),L.group_jobs=A,L.conf_info=Q,L.show_type=2,D==="2"&&Ut(L)},[D]);var qt=function(A,Q){var k,ht=A.conf_name,gt="".concat(ht,"-").concat(Q);ft(gt),(k=document.getElementById(gt))===null||k===void 0||k.scrollIntoView()},Kt=function(A){ct(A),setTimeout(function(){ct("")},100)},Rt=function(A){St(A)},wt=(0,e.useMemo)(function(){var L=[],A=(0,jt.cloneDeep)(W);A.compare_groups.splice(N,0,W.base_group);for(var Q=A.compare_groups,k=0;k<Q.length;k++)L.push({name:"".concat(Q[k].tag),inner:(0,u.jsxs)(E.Z,{align:"start",style:{cursor:"pointer"},children:[(0,u.jsx)(Qt,{color:Tt[k]}),N===k&&(0,u.jsx)(p.Z,{title:j({id:"report.benchmark.group"}),children:(0,u.jsx)(w,{style:{transform:"translateY(3px)",marginLeft:8}})}),(0,u.jsx)(g.Z.Text,{strong:!0,children:Q[k].tag})]})});return L},[W,Tt]);return(0,u.jsxs)(Vt,{children:[(0,u.jsx)(Xt,{children:(0,u.jsxs)(E.Z,{align:"start",children:[(0,u.jsx)(E.Z,{style:{whiteSpace:"nowrap",marginRight:16},children:(0,u.jsx)(g.Z.Text,{strong:!0,children:(0,u.jsx)(i._H,{id:"report.legend.comparison.group"})})}),wt.map(function(L,A){return(0,u.jsx)(E.Z,{size:28,style:{marginRight:16},children:(0,u.jsx)("span",{onClick:function(){return Kt(L.name)},children:L.inner})},A)})]})}),D==="2"?(0,u.jsxs)(Yt,{children:[(0,u.jsx)(kt,{children:(0,u.jsxs)(E.Z,{direction:"vertical",children:[(0,u.jsx)(Jt,{children:j({id:"report.conf.list"},{data:"(".concat(I.length,")")})}),I.map(function(L,A){return(0,u.jsx)("span",{children:(0,u.jsx)(Ft,{children:(0,u.jsx)(G.Z,{width:330,title:L.conf_name})})},A)})]})}),(0,u.jsx)(Et,{children:(0,u.jsx)(Wt,{current:dt,handleChartColor:Rt,legend:H,envData:W,loading:_,chartMetric:x,chartType:D})})]}):(0,u.jsxs)(Yt,{children:[(0,u.jsx)(kt,{children:(0,u.jsxs)(E.Z,{direction:"vertical",children:[(0,u.jsx)(Jt,{children:j({id:"report.conf.list"},{data:"(".concat(I.length,")")})}),I.map(function(L,A){return(0,u.jsx)("span",{onClick:function(){return qt(L,A)},children:(0,u.jsx)(Ft,{is_active:dt==="".concat(L.conf_name,"-").concat(A)?1:0,children:(0,u.jsx)(G.Z,{width:330,title:L.conf_name})})},A)})]})}),(0,u.jsx)(Et,{children:(0,u.jsx)(Ot,{current:dt,handleChartColor:Rt,legend:H,envData:W,loading:_,chartConf:I,chartType:D})})]})]})},$t=e.memo(Mt)},81849:function(et,R,t){"use strict";var o=t(57359),E=t(34423),F=t(69230),p=t(33821),d=t(31650),c=t(25100),v=t(20418),h=t(39190),g=t(22374),a=t(22812),r=t(52454),n=function(i){var l=i.btn,f=i.isReport,P=i.obj,T=i.suiteId,S=i.setPerData,X=(0,g.useState)("1"),U=(0,h.Z)(X,2),w=U[0],B=U[1],G=function($){B($),S(f?(0,v.Z)((0,v.Z)({},P),{},{list:P.list.map(function(u){return T===u.suite_id?(0,v.Z)((0,v.Z)({},u),{},{chartType:$}):u})}):P.map(function(u){return T===u.suite_id?(0,v.Z)((0,v.Z)({},u),{},{chartType:$}):u}))};return(0,r.jsx)(r.Fragment,{children:!l&&(0,r.jsxs)(E.Z,{style:{position:"absolute",right:12},children:[(0,r.jsxs)(c.Z.Text,{children:[(0,r.jsx)(a._H,{id:"report.view"}),"\uFF1A"]}),(0,r.jsxs)(p.Z,{value:w,style:{width:395},onChange:G,children:[(0,r.jsx)(p.Z.Option,{value:"1",children:(0,r.jsx)(a._H,{id:"report.type1"})}),(0,r.jsx)(p.Z.Option,{value:"2",children:(0,r.jsx)(a._H,{id:"report.type2"})}),(0,r.jsx)(p.Z.Option,{value:"3",children:(0,r.jsx)(a._H,{id:"report.type3"})})]})]})})};R.Z=n},88856:function(et,R,t){"use strict";t.d(R,{r:function(){return h}});var o=t(22374),E,F=["svgRef","title"];function p(){return p=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(a[e]=n[e])}return a},p.apply(this,arguments)}function d(a,r){if(a==null)return{};var n=c(a,r),e,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(i=0;i<l.length;i++)e=l[i],!(r.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,e)||(n[e]=a[e]))}return n}function c(a,r){if(a==null)return{};var n={},e=Object.keys(a),i,l;for(l=0;l<e.length;l++)i=e[l],!(r.indexOf(i)>=0)&&(n[i]=a[i]);return n}var v=function(r){var n=r.svgRef,e=r.title,i=d(r,F);return o.createElement("svg",p({width:"10px",height:"14px",viewBox:"0 0 10 14",ref:n},i),e?o.createElement("title",null,e):null,E||(E=o.createElement("g",{id:"\\u9875\\u9762-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},o.createElement("g",{id:"3\\u4E2Agroup\\u76EE\\u5F55\\u6536\\u8D77",transform:"translate(-263.000000, -767.000000)",fillRule:"nonzero"},o.createElement("g",{id:"\\u7F16\\u7EC4-2",transform:"translate(119.000000, 686.000000)"},o.createElement("g",{id:"\\u7F16\\u7EC4-8",transform:"translate(21.000000, 64.000000)"},o.createElement("g",{id:"basegroup",transform:"translate(120.000000, 16.000000)"},o.createElement("rect",{id:"\\u77E9\\u5F62",fill:"#FFFFFF",opacity:0,x:0,y:0,width:16,height:16,rx:2}),o.createElement("path",{d:"M4,1 C3.72417824,1.00077249 3.50077249,1.22417824 3.5,1.5 L3.5,14.5 C3.5,14.7761424 3.72385763,15 4,15 C4.27614237,15 4.5,14.7761424 4.5,14.5 L4.5,1.5 C4.49922751,1.22417824 4.27582176,1.00077249 4,1 L4,1 Z M4.5,2 L12.5,6.5 L4.5,11",id:"\\u5F62\\u72B6",fill:"#1890FF"}))))))))},h=o.forwardRef(function(a,r){return o.createElement(v,p({svgRef:r},a))}),g=t.p+"static/BaseIcon.af28ec3e.svg"},88948:function(et,R,t){"use strict";t.d(R,{r:function(){return h}});var o=t(22374),E,F=["svgRef","title"];function p(){return p=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(a[e]=n[e])}return a},p.apply(this,arguments)}function d(a,r){if(a==null)return{};var n=c(a,r),e,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(i=0;i<l.length;i++)e=l[i],!(r.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,e)||(n[e]=a[e]))}return n}function c(a,r){if(a==null)return{};var n={},e=Object.keys(a),i,l;for(l=0;l<e.length;l++)i=e[l],!(r.indexOf(i)>=0)&&(n[i]=a[i]);return n}var v=function(r){var n=r.svgRef,e=r.title,i=d(r,F);return o.createElement("svg",p({width:"6px",height:"13px",viewBox:"0 0 6 13",ref:n},i),e?o.createElement("title",null,e):null,E||(E=o.createElement("g",{id:"\\u9875\\u9762-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},o.createElement("g",{id:"3\\u4E2Agroup\\u76EE\\u5F55\\u6536\\u8D77",transform:"translate(-964.000000, -766.000000)",fillRule:"nonzero"},o.createElement("g",{id:"\\u7F16\\u7EC4-2",transform:"translate(119.000000, 686.000000)"},o.createElement("g",{id:"\\u7F16\\u7EC4-8",transform:"translate(21.000000, 64.000000)"},o.createElement("g",{id:"\\u7F16\\u7EC4",transform:"translate(819.000000, 15.000000)"},o.createElement("rect",{id:"\\u77E9\\u5F62",fill:"#000000",opacity:0,transform:"translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) ",x:3.3137085,y:3.3137085,width:16,height:16}),o.createElement("polygon",{id:"\\u8DEF\\u5F84",fill:"#1890FF",transform:"translate(7.759021, 7.759021) rotate(-315.000000) translate(-7.759021, -7.759021) ",points:"1.759021 5.04315003 5.04315003 1.759021 5.89476293 2.6106339 4.25347261 4.25347261 4.69166616 4.69166616 6.33450487 3.04882745 6.99566616 3.70998874 5.90095648 4.80469842 6.33915003 5.24289197 7.43385971 4.14818229 8.09037584 4.80469842 6.99566616 5.8994081 7.43385971 6.33760164 8.52856939 5.24289197 9.18508552 5.8994081 7.54224681 7.54224681 7.98044035 7.98044035 9.62327906 6.33760164 10.2797952 6.99411777 9.18508552 8.08882745 9.62327906 8.527021 10.7179887 7.43231132 11.3745049 8.08882745 10.2797952 9.18353713 10.7179887 9.62173068 11.8126984 8.527021 12.4692145 9.18353713 10.8263758 10.8263758 11.2645694 11.2645694 12.9074081 9.62173068 13.759021 10.4733436 10.474892 13.759021 1.759021 5.04315003"}))))))))},h=o.forwardRef(function(a,r){return o.createElement(v,p({svgRef:r},a))}),g=t.p+"static/BaseLine.94a7202f.svg"},22598:function(et,R,t){"use strict";t.d(R,{r:function(){return h}});var o=t(22374),E,F=["svgRef","title"];function p(){return p=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(a[e]=n[e])}return a},p.apply(this,arguments)}function d(a,r){if(a==null)return{};var n=c(a,r),e,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(i=0;i<l.length;i++)e=l[i],!(r.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,e)||(n[e]=a[e]))}return n}function c(a,r){if(a==null)return{};var n={},e=Object.keys(a),i,l;for(l=0;l<e.length;l++)i=e[l],!(r.indexOf(i)>=0)&&(n[i]=a[i]);return n}var v=function(r){var n=r.svgRef,e=r.title,i=d(r,F);return o.createElement("svg",p({width:"12px",height:"12px",viewBox:"0 0 12 12",ref:n},i),e?o.createElement("title",null,e):null,E||(E=o.createElement("g",{id:"\\u5BF9\\u6BD4",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},o.createElement("g",{id:"14.\\u5BF9\\u6BD4\\u7ED3\\u679C\\u5C55\\u5F00",transform:"translate(-906.000000, -657.000000)",fillRule:"nonzero"},o.createElement("g",{id:"Group-42",transform:"translate(0.000000, 534.000000)"},o.createElement("g",{id:"Group-41",transform:"translate(0.000000, 107.000000)"},o.createElement("g",{id:"Group-22",transform:"translate(20.000000, 1.000000)"},o.createElement("g",{id:"Group-21-Copy-2",transform:"translate(884.000000, 10.000000)"},o.createElement("g",{id:"\\u6392\\u5E8F",transform:"translate(0.000000, 3.000000)"},o.createElement("rect",{id:"Rectangle",fill:"#000000",opacity:0,x:0,y:0,width:16,height:16}),o.createElement("path",{d:"M10.2344,13.1928927 C10.0731411,13.1956471 9.91764813,13.1328419 9.80360311,13.0187969 C9.68955809,12.9047519 9.62675294,12.7492589 9.6296,12.588 L9.6296,3.4152 C9.62960001,3.08117819 9.90037819,2.81040003 10.2344,2.81040003 C10.5684218,2.81040003 10.8392,3.08117819 10.8392,3.4152 L10.8392,12.588 C10.8311885,12.9186465 10.5650465,13.1847885 10.2344,13.1928927 L10.2344,13.1928927 Z M13.04,6.82241461 C12.8786856,6.82354413 12.7241825,6.75745275 12.6136,6.64 L9.8136,3.84 C9.6624052,3.6888052 9.60335691,3.46843398 9.65869805,3.26189805 C9.71403919,3.05536211 9.87536211,2.89403919 10.081898,2.83869805 C10.288434,2.78335691 10.5088052,2.8424052 10.66,2.9936 L13.46,5.7936 C13.5757196,5.9039601 13.6412002,6.05689262 13.6412002,6.2168 C13.6412002,6.37670738 13.5757196,6.5296399 13.46,6.64 C13.3487327,6.75264685 13.1982728,6.81798944 13.04,6.82241461 L13.04,6.82241461 Z M5.6984,13.1928927 C5.53714112,13.1956471 5.38164813,13.1328419 5.26760311,13.0187969 C5.15355809,12.9047519 5.09075294,12.7492589 5.0936,12.588 L5.0936,3.4152 C5.0936,3.08117818 5.36437818,2.8104 5.6984,2.8104 C6.03242182,2.8104 6.3032,3.08117818 6.3032,3.4152 L6.3032,12.588 C6.29518849,12.9186465 6.02904649,13.1847885 5.6984,13.1928927 L5.6984,13.1928927 Z M5.6984,13.1928024 C5.53831678,13.1932636 5.3851604,13.1275424 5.2752,13.0112 L2.4752,10.2112 C2.24014761,9.97813584 2.23853584,9.59865239 2.4716,9.3636 C2.70466416,9.12854761 3.08414761,9.12693584 3.3192,9.36 L6.1192,12.16 C6.28848676,12.3327837 6.33853901,12.5898175 6.2464558,12.8134978 C6.1543726,13.0371782 5.93786735,13.1844774 5.696,13.188 L5.6984,13.1928024 Z",id:"Shape",fill:"#595959"}))))))))))},h=o.forwardRef(function(a,r){return o.createElement(v,p({svgRef:r},a))}),g=t.p+"static/icon_arrow.e81d8e24.svg"},15363:function(et,R,t){"use strict";t.d(R,{r:function(){return h}});var o=t(22374),E,F=["svgRef","title"];function p(){return p=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(a[e]=n[e])}return a},p.apply(this,arguments)}function d(a,r){if(a==null)return{};var n=c(a,r),e,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(i=0;i<l.length;i++)e=l[i],!(r.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,e)||(n[e]=a[e]))}return n}function c(a,r){if(a==null)return{};var n={},e=Object.keys(a),i,l;for(l=0;l<e.length;l++)i=e[l],!(r.indexOf(i)>=0)&&(n[i]=a[i]);return n}var v=function(r){var n=r.svgRef,e=r.title,i=d(r,F);return o.createElement("svg",p({width:"12px",height:"12px",viewBox:"0 0 12 12",ref:n},i),e?o.createElement("title",null,e):null,E||(E=o.createElement("g",{id:"\\u5BF9\\u6BD4",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},o.createElement("g",{id:"14.\\u5BF9\\u6BD4\\u7ED3\\u679C\\u5C55\\u5F00",transform:"translate(-906.000000, -657.000000)",fillRule:"nonzero"},o.createElement("g",{id:"Group-42",transform:"translate(0.000000, 534.000000)"},o.createElement("g",{id:"Group-41",transform:"translate(0.000000, 107.000000)"},o.createElement("g",{id:"Group-22",transform:"translate(20.000000, 1.000000)"},o.createElement("g",{id:"Group-21-Copy-2",transform:"translate(884.000000, 10.000000)"},o.createElement("g",{id:"\\u6392\\u5E8F",transform:"translate(0.000000, 3.000000)"},o.createElement("rect",{id:"Rectangle",fill:"#000000",opacity:0,x:0,y:0,width:16,height:16}),o.createElement("path",{d:"M10.2344,13.1928927 C10.0731411,13.1956471 9.91764813,13.1328419 9.80360311,13.0187969 C9.68955809,12.9047519 9.62675294,12.7492589 9.6296,12.588 L9.6296,3.4152 C9.62960001,3.08117819 9.90037819,2.81040003 10.2344,2.81040003 C10.5684218,2.81040003 10.8392,3.08117819 10.8392,3.4152 L10.8392,12.588 C10.8311885,12.9186465 10.5650465,13.1847885 10.2344,13.1928927 L10.2344,13.1928927 Z M13.04,6.82241461 C12.8786856,6.82354413 12.7241825,6.75745275 12.6136,6.64 L9.8136,3.84 C9.6624052,3.6888052 9.60335691,3.46843398 9.65869805,3.26189805 C9.71403919,3.05536211 9.87536211,2.89403919 10.081898,2.83869805 C10.288434,2.78335691 10.5088052,2.8424052 10.66,2.9936 L13.46,5.7936 C13.5757196,5.9039601 13.6412002,6.05689262 13.6412002,6.2168 C13.6412002,6.37670738 13.5757196,6.5296399 13.46,6.64 C13.3487327,6.75264685 13.1982728,6.81798944 13.04,6.82241461 L13.04,6.82241461 Z M5.6984,13.1928927 C5.53714112,13.1956471 5.38164813,13.1328419 5.26760311,13.0187969 C5.15355809,12.9047519 5.09075294,12.7492589 5.0936,12.588 L5.0936,3.4152 C5.0936,3.08117818 5.36437818,2.8104 5.6984,2.8104 C6.03242182,2.8104 6.3032,3.08117818 6.3032,3.4152 L6.3032,12.588 C6.29518849,12.9186465 6.02904649,13.1847885 5.6984,13.1928927 L5.6984,13.1928927 Z M5.6984,13.1928024 C5.53831678,13.1932636 5.3851604,13.1275424 5.2752,13.0112 L2.4752,10.2112 C2.24014761,9.97813584 2.23853584,9.59865239 2.4716,9.3636 C2.70466416,9.12854761 3.08414761,9.12693584 3.3192,9.36 L6.1192,12.16 C6.28848676,12.3327837 6.33853901,12.5898175 6.2464558,12.8134978 C6.1543726,13.0371782 5.93786735,13.1844774 5.696,13.188 L5.6984,13.1928024 Z",id:"Shape",fill:"#1890FF"}))))))))))},h=o.forwardRef(function(a,r){return o.createElement(v,p({svgRef:r},a))}),g=t.p+"static/icon_arrow_blue.8713f364.svg"},68210:function(et,R,t){"use strict";t.d(R,{r:function(){return h}});var o=t(22374),E,F=["svgRef","title"];function p(){return p=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(a[e]=n[e])}return a},p.apply(this,arguments)}function d(a,r){if(a==null)return{};var n=c(a,r),e,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(i=0;i<l.length;i++)e=l[i],!(r.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,e)||(n[e]=a[e]))}return n}function c(a,r){if(a==null)return{};var n={},e=Object.keys(a),i,l;for(l=0;l<e.length;l++)i=e[l],!(r.indexOf(i)>=0)&&(n[i]=a[i]);return n}var v=function(r){var n=r.svgRef,e=r.title,i=d(r,F);return o.createElement("svg",p({width:"12px",height:"12px",viewBox:"0 0 12 12",ref:n},i),e?o.createElement("title",null,e):null,E||(E=o.createElement("g",{id:"\\u5BF9\\u6BD4",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},o.createElement("g",{id:"13.\\u5BF9\\u6BD4\\u7ED3\\u679C",transform:"translate(-399.000000, -706.000000)",fill:"#000000",fillRule:"nonzero"},o.createElement("g",{id:"Group-42",transform:"translate(0.000000, 534.000000)"},o.createElement("g",{id:"Group-41",transform:"translate(0.000000, 107.000000)"},o.createElement("g",{id:"Group-22",transform:"translate(20.000000, 1.000000)"},o.createElement("g",{id:"Group",transform:"translate(377.000000, 59.000000)"},o.createElement("g",{id:"\\u94FE\\u63A5",transform:"translate(0.000000, 3.000000)"},o.createElement("rect",{id:"Rectangle",opacity:0,x:0,y:0,width:16,height:16}),o.createElement("path",{d:"M11.91,7.92 C11.7153722,8.09503346 11.4186893,8.09033311 11.2297039,7.90922206 C11.0407184,7.72811102 11.0234032,7.43189657 11.19,7.23 L12.06,6.32 C12.709515,5.51696592 12.6264975,4.34816777 11.87,3.645 C11.115,2.86 10,2.79 9.37,3.45 L6.94,6 C6.29048502,6.80303408 6.37350246,7.97183223 7.13,8.675 C7.3238618,8.87001873 7.3238618,9.18498127 7.13,9.38 C7.0361167,9.47465633 6.90831877,9.52789916 6.775,9.52789916 C6.64168123,9.52789916 6.5138833,9.47465633 6.42,9.38 C5.29380253,8.29148422 5.21051969,6.51405308 6.23,5.325 L8.66,2.79 C9.705,1.7 11.48,1.79 12.61,2.99 C13.7040886,4.07696429 13.7802373,5.82185565 12.785,7 L11.91,7.92 Z M3.59,8.08 C3.78462784,7.90496654 4.0813107,7.90966689 4.27029614,8.09077794 C4.45928159,8.27188898 4.47659677,8.56810343 4.31,8.77 L3.44,9.68 C2.79048502,10.4830341 2.87350246,11.6518322 3.63,12.355 C4.385,13.14 5.5,13.21 6.13,12.55 L8.56,10 C9.20951498,9.19696592 9.12649754,8.02816777 8.37,7.325 C8.1761382,7.12998127 8.1761382,6.81501873 8.37,6.62 C8.4638833,6.52534367 8.59168123,6.47210084 8.725,6.47210084 C8.85831877,6.47210084 8.9861167,6.52534367 9.08,6.62 C10.2061975,7.70851578 10.2894803,9.48594692 9.27,10.675 L6.84,13.21 C5.795,14.3 4.02,14.21 2.89,13.01 C1.79591137,11.9230357 1.71976275,10.1781444 2.715,9 L3.59,8.08 Z",id:"Shape"}))))))))))},h=o.forwardRef(function(a,r){return o.createElement(v,p({svgRef:r},a))}),g=t.p+"static/icon_link.2a9a12ad.svg"}}]);
