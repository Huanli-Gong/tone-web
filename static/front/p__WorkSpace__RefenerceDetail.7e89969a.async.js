(self.webpackChunktone_front=self.webpackChunktone_front||[]).push([[5402],{77429:function(le){le.exports={test_result_name:"test_result_name___1RBzL",test_summary_item:"test_summary_item___3-Yoh",test_summary_item_right:"test_summary_item_right___2UQVi",test_summary_item_right_unellipsis:"test_summary_item_right_unellipsis___2cRIc",test_summary_job:"test_summary_job___2a2-P",test_summary_row:"test_summary_row___1zXMg",detail_collection:"detail_collection___1_th-",offline_flag:"offline_flag___3BdpH",ellips_column_refclass:"ellips_column_refclass___30H4W",tag_popover_style:"tag_popover_style___1x8MG",table_question_tooltip:"table_question_tooltip___1Ur7e",join_baseline:"join_baseline___Jgafh",select_baseline:"select_baseline___2nHPA"}},1752:function(le,J,n){"use strict";n.r(J);var U=n(20228),Y=n(11382),xe=n(66456),M=n(79764),Ee=n(22385),F=n(89456),d=n(36017),j=n(35247),X=n(93224),v=n(11849),B=n(39428),je=n(3182),f=n(2824),Ye=n(7359),Z=n(7964),oe=n(20310),I=n(67294),L=n(25782),Pe=n(60035),H=n(86213),A=n(20009),ye=n(16917),ie=n(12788),q=n(72529),h=n(40694),P=n(24480),s=n(85893),_e=["code","msg"],Ce=["code","msg"],e=["code","msg"],ee,ue=ie.ZP.div(ee||(ee=(0,oe.Z)([`
    .breadcrumb{
        height:50px;
        line-height:50px;
        padding-left:24px;
    }
    .content{
        //background:#fff;
        /* width: 97%; */
        margin: 0 auto;
        height: auto;
        .site-collapse-custom-collapse{
            margin-bottom:16px;
            background:#fff;
            .total{
                height:20px;
                width:30px;
                border-radius: 12px;
                background: rgba(140,140,140,0.10);
                display: inline-block;
                text-align: center;
                margin-left:7px;
                color:rgba(0,0,0,0.75);
                font-size:12px;
                vertical-align: middle;
            }
            .tip{
                .ant-tooltip-inner{
                    max-width:400px;
                }
            }
            .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box{
                padding-top:2px;
                padding-bottom: 1px;
            }
        }
    }
`]))),W=Z.Z.Panel,De=function(){var ce=(0,A.UO)(),m=ce.type,C=ce.ws_id,Me=(0,A.TH)(),Oe=Me.query,Q=Oe.pk,de=(0,I.useState)(!0),Te=(0,f.Z)(de,2),me=Te[0],S=Te[1],Ze=(0,I.useState)({page_num:1,page_size:10}),te=(0,f.Z)(Ze,2),p=te[0],ne=te[1],V=(0,I.useState)({page_num:1,page_size:10}),K=(0,f.Z)(V,2),w=K[0],Ie=K[1],Ae=(0,Pe.CR)(),be=Ae.height,Re=I.useState(void 0),pe=(0,f.Z)(Re,2),o=pe[0],t=pe[1],r=I.useState(),_=(0,f.Z)(r,2),a=_[0],O=_[1],z=I.useState(),T=(0,f.Z)(z,2),g=T[0],R=T[1],ve=function(){var E=(0,je.Z)((0,B.Z)().mark(function c(){var l,u,y;return(0,B.Z)().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,(0,h.Ic)({pk:Q});case 2:if(l=b.sent,u=l.data,y=l.code,y===200){b.next=7;break}return b.abrupt("return");case 7:t(u);case 8:case"end":return b.stop()}},c)}));return function(){return E.apply(this,arguments)}}(),Be=function(){var E=(0,je.Z)((0,B.Z)().mark(function c(){var l,u,y,Le,b,$,fe,We,Fe,we,he,Se,ze,Ne,ge,Ke,$e,Je;return(0,B.Z)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(l=+m,u=o.test_type,y=o.id,S(!0),Le=(0,v.Z)({flag:"job",ws_id:C,suite_id_list:"",case_id_list:y,test_type:u},p),b=(0,v.Z)({flag:"template",ws_id:C,suite_id_list:"",case_id_list:y,test_type:u},w),l!==1){i.next=32;break}return i.next=8,(0,h.J1)(Le);case 8:if(fe=i.sent,We=fe.code,Fe=fe.msg,we=(0,X.Z)(fe,_e),We===200){i.next=16;break}return(0,P.EV)(We,Fe),S(!1),i.abrupt("return");case 16:return O(we),i.next=19,(0,h.J1)(b);case 19:if(he=i.sent,Se=he.code,ze=he.msg,Ne=(0,X.Z)(he,Ce),Se===200){i.next=27;break}return(0,P.EV)(Se,ze),S(!1),i.abrupt("return");case 27:return R(Ne),S(!1),i.abrupt("return");case 32:if(l!==2){i.next=38;break}return i.next=35,(0,h.Wt)((0,v.Z)({jt_id:y},p));case 35:$=i.sent,i.next=65;break;case 38:if(l!==3){i.next=44;break}return i.next=41,(0,h.Ce)((0,v.Z)({template_id:y},p));case 41:$=i.sent,i.next=65;break;case 44:if(l!==4){i.next=50;break}return i.next=47,(0,h.Pm)((0,v.Z)({server_id:y,run_mode:"standalone",server_provider:"aligroup"},p));case 47:$=i.sent,i.next=65;break;case 50:if(l!==5){i.next=56;break}return i.next=53,(0,h.Pm)((0,v.Z)({server_id:y,run_mode:"cluster",server_provider:"aligroup"},p));case 53:$=i.sent,i.next=65;break;case 56:if(l!==6){i.next=62;break}return i.next=59,(0,h.Pm)((0,v.Z)({server_id:y,run_mode:"standalone",server_provider:"aliyun"},p));case 59:$=i.sent,i.next=65;break;case 62:return i.next=64,(0,h.Pm)((0,v.Z)({server_id:y,run_mode:"cluster",server_provider:"aliyun"},p));case 64:$=i.sent;case 65:if(ge=$,Ke=ge.code,$e=ge.msg,Je=(0,X.Z)(ge,e),Ke===200){i.next=70;break}return(0,P.EV)(Ke,$e),S(!1),i.abrupt("return");case 70:O(Je),S(!1);case 72:case"end":return i.stop()}},c)}));return function(){return E.apply(this,arguments)}}();I.useEffect(function(){!o||Be()},[o,p,w]),I.useEffect(function(){Q&&ve()},[Q]);var x={};+m==1?(x.path="/ws/".concat(C,"/test_suite"),x.name="Test Suite\u7BA1\u7406"):+m==2?(x.path="/ws/".concat(C,"/job/types"),x.name="Job\u7C7B\u578B\u7BA1\u7406"):+m==3?(x.path="/ws/".concat(C,"/job/templates"),x.name="\u6A21\u677F\u5217\u8868"):+m==4?(x.path="/ws/".concat(C,"/device/group"),x.name="".concat(P.ZZ,"\u5355\u673A")):+m==5?(x.path="/ws/".concat(C,"/device/group"),x.name="".concat(P.ZZ,"\u96C6\u7FA4")):+m==6?(x.path="/ws/".concat(C,"/device/group"),x.name="".concat(P.CI,"\u5355\u673A")):+m==7&&(x.path="/ws/".concat(C,"/device/group"),x.name="".concat(P.CI,"\u96C6\u7FA4"));var D="";+m==1?D="Test Suite":+m==2?D="Job\u7C7B\u578B":+m==3?D="\u6A21\u677F":+m==4?D="".concat(P.ZZ,"\u5355\u673A"):+m==5?D="".concat(P.ZZ,"\u96C6\u7FA4"):+m==6?D="".concat(P.CI,"\u5355\u673A"):+m==7&&(D="".concat(P.CI,"\u96C6\u7FA4"));var ae=function(){return(0,s.jsxs)(j.Z,{className:"breadcrumb",children:[(0,s.jsx)(j.Z.Item,{children:(0,s.jsx)("span",{style:{cursor:"pointer"},onClick:function(){return ye.m8.push(x.path)},children:x.name})}),(0,s.jsx)(j.Z.Item,{children:(0,s.jsxs)("span",{style:{cursor:"pointer",color:"rgba(0,0,0,0.85)"},children:[D,(0,s.jsxs)("span",{style:{color:"rgba(0,0,0,0.65)"},children:["(",o==null?void 0:o.name,")"]}),"\u5F15\u7528\u8BE6\u60C5"]})})]})},se=(0,I.useMemo)(function(){return(a==null?void 0:a.total)>0},[a==null?void 0:a.total]),re=[{title:"Conf",dataIndex:"case_name_list",key:"case_name_list",width:400,ellipsis:{shwoTitle:!1},render:function(c){return(0,s.jsx)(F.Z,{overlayStyle:{maxWidth:390},overlay:(0,s.jsx)("div",{children:c.replace(/,/g,"/")}),placement:"topLeft",children:(0,s.jsx)("span",{children:c.replace(/,/g," / ")})})}},{title:"Job ID",dataIndex:"id",key:"id"},{title:"Job\u540D\u79F0",dataIndex:"name",key:"name",render:function(c,l){return(0,s.jsx)("span",{onClick:function(){return window.open("/ws/".concat(l.ws_id,"/test_result/").concat(l.id))},style:{color:"#1890FF",cursor:"pointer"},children:c})}},{title:"\u72B6\u6001",dataIndex:"state",key:"state",render:function(c,l){return(0,s.jsx)(q.JQ,(0,v.Z)({},l))}},{title:"\u521B\u5EFA\u4EBA",dataIndex:"creator_name",key:"creator_name"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"gmt_created",key:"gmt_created"}],k=[{title:(o==null?void 0:o.test_type)&&(0,s.jsx)(s.Fragment,{children:"Conf"}),dataIndex:"case_name_list",key:"case_name_list",width:o!=null&&o.test_type?400:1,ellipsis:{shwoTitle:!1},render:function(c){return(o==null?void 0:o.test_type)&&(0,s.jsx)(F.Z,{overlayStyle:{maxWidth:390},overlay:(0,s.jsx)("div",{children:c.replace(/,/g,"/")}),placement:"topLeft",children:(0,s.jsx)("span",{children:c.replace(/,/g," / ")})})}},{title:"\u6A21\u677F\u540D\u79F0",dataIndex:"name",key:"name",render:function(c,l){return(0,s.jsx)("span",{onClick:function(){return window.open("/ws/".concat(C,"/test_template/").concat(l.id,"/preview"))},style:{color:"#1890FF",cursor:"pointer"},children:c})}},{title:"\u521B\u5EFA\u4EBA",dataIndex:"creator_name",key:"creator_name"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"gmt_created",key:"gmt_created"}],G=[{title:"\u8BA1\u5212\u540D\u79F0",dataIndex:"name",key:"name",render:function(c){return(0,s.jsx)("span",{onClick:function(){return window.open("/ws/".concat(C,"/test_plan"))},style:{color:"#1890FF",cursor:"pointer"},children:c})}},{title:"\u521B\u5EFA\u4EBA",dataIndex:"creator_name",key:"creator_name"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"gmt_created",key:"gmt_created"}],N=function(){return+m==1?(0,s.jsxs)(s.Fragment,{children:[(a==null?void 0:a.total)>0&&(0,s.jsx)(Z.Z,{bordered:!1,ghost:!0,defaultActiveKey:"1",expandIcon:function(l){var u=l.isActive;return(0,s.jsx)(L.Z,{rotate:u?90:0})},className:"site-collapse-custom-collapse",children:(0,s.jsxs)(W,{header:(0,s.jsxs)("div",{children:["Job\u5217\u8868",(0,s.jsx)("span",{className:"total",children:(a==null?void 0:a.total)||0})]}),className:"site-collapse-custom-panel",children:[(0,s.jsx)(M.Z,{dataSource:a==null?void 0:a.data,columns:re,size:"small",rowKey:"id",pagination:!1}),(0,s.jsx)(H.Z,{pageSize:p.page_size,currentPage:p.page_num,total:a==null?void 0:a.total,onPageChange:function(l,u){return ne((0,v.Z)((0,v.Z)({},p),{},{page_size:u,page_num:l}))}})]},"1")}),(g==null?void 0:g.total)>0&&(0,s.jsx)(Z.Z,{bordered:!1,ghost:!0,defaultActiveKey:se?"0":"1",expandIcon:function(l){var u=l.isActive;return(0,s.jsx)(L.Z,{rotate:u?90:0})},className:"site-collapse-custom-collapse",children:(0,s.jsxs)(W,{header:(0,s.jsxs)("div",{children:["\u6A21\u7248\u5217\u8868",(0,s.jsx)("span",{className:"total",children:(g==null?void 0:g.total)||0})]}),className:"site-collapse-custom-panel",children:[(0,s.jsx)(M.Z,{dataSource:(g==null?void 0:g.data)||[],columns:k,size:"small",loading:me,rowKey:"id",pagination:!1}),(0,s.jsx)(H.Z,{pageSize:w.page_size,currentPage:w.page_num,total:g==null?void 0:g.total,onPageChange:function(l,u){return Ie((0,v.Z)((0,v.Z)({},w),{},{page_size:u,page_num:l}))}})]},"1")})]}):+m==3?(0,s.jsx)(Z.Z,{bordered:!1,ghost:!0,defaultActiveKey:"1",expandIcon:function(l){var u=l.isActive;return(0,s.jsx)(L.Z,{rotate:u?90:0})},className:"site-collapse-custom-collapse",children:(0,s.jsxs)(W,{header:(0,s.jsxs)("div",{children:["\u8BA1\u5212\u5217\u8868",(0,s.jsx)("span",{className:"total",children:(a==null?void 0:a.total)||0})]}),className:"site-collapse-custom-panel",children:[(0,s.jsx)(M.Z,{dataSource:a==null?void 0:a.data,columns:G,size:"small",rowKey:"id",pagination:!1}),(0,s.jsx)(H.Z,{pageSize:p.page_size,currentPage:p.page_num,total:a==null?void 0:a.total,onPageChange:function(l,u){return ne((0,v.Z)((0,v.Z)({},p),{},{page_size:u,page_num:l}))}})]},"1")}):(0,s.jsx)(Z.Z,{bordered:!1,ghost:!0,defaultActiveKey:"1",expandIcon:function(l){var u=l.isActive;return(0,s.jsx)(L.Z,{rotate:u?90:0})},className:"site-collapse-custom-collapse",children:(0,s.jsxs)(W,{header:(0,s.jsxs)("div",{children:["\u6A21\u7248\u5217\u8868",(0,s.jsx)("span",{className:"total",children:(a==null?void 0:a.total)||0})]}),className:"site-collapse-custom-panel",children:[(0,s.jsx)(M.Z,{dataSource:a==null?void 0:a.data,columns:k,size:"small",rowKey:"id",pagination:!1}),(0,s.jsx)(H.Z,{pageSize:p.page_size,currentPage:p.page_num,total:a==null?void 0:a.total,onPageChange:function(l,u){return ne((0,v.Z)((0,v.Z)({},p),{},{page_size:u,page_num:l}))}})]},"1")})};return(0,s.jsxs)(ue,{children:[(0,s.jsx)(ae,{}),(0,s.jsx)("div",{className:"content",style:{height:be-88,overflowY:"auto"},children:(0,s.jsx)(Y.Z,{spinning:me,children:(0,s.jsx)(N,{})})})]})};J.default=De},40694:function(le,J,n){"use strict";n.d(J,{J1:function(){return Y},Wt:function(){return xe},Ce:function(){return M},Pm:function(){return Ee},Ic:function(){return F}});var U=n(16917),Y=function(j){return(0,U.WY)("/api/case/ws_case/confirm/",{data:j,method:"post"})},xe=function(j){return(0,U.WY)("/api/job/type/del/",{method:"post",data:j})},M=function(j){return(0,U.WY)("/api/job/template/del/",{method:"post",data:j})},Ee=function(j){return(0,U.WY)("/api/server/del_confirm/",{method:"post",data:j})},F=function(j){return(0,U.WY)("/api/case/ws_case/params/",{params:j})}},72529:function(le,J,n){"use strict";n.d(J,{gN:function(){return De},tZ:function(){return C},yQ:function(){return Me},Pc:function(){return Oe},KS:function(){return me},YV:function(){return S},Nq:function(){return Ze},JQ:function(){return Ie},iK:function(){return Ae},fD:function(){return be},QN:function(){return Re},ud:function(){return pe}});var U=n(402),Y=n(97272),xe=n(49111),M=n(19650),Ee=n(20136),F=n(55241),d=n(11849),j=n(71153),X=n(60331),v=n(89032),B=n(15746),je=n(13062),f=n(71230),Ye=n(22385),Z=n(89456),oe=n(20310),I=n(36017),L=n(35247),Pe=n(67294),H=n(77429),A=n.n(H),ye=n(8212),ie=n(1870),q=n(20009),h=n(16917),P=n(12788),s=n(24480),_e=n(60035),Ce=n(10753),e=n(85893),ee,ue,W=new Map([["success","#81BF84"],["pass","#81BF84"],["running","#649FF6"],["fail","#C84C5A"]]),De=function(t){var r=(0,q.UO)(),_=r.ws_id;return(0,e.jsxs)(L.Z,{style:{marginBottom:t.bottomHeight},children:[(0,e.jsx)(L.Z.Item,{children:(0,e.jsx)("span",{style:{cursor:"pointer"},onClick:function(){return h.m8.push("/ws/".concat(_,"/test_result"))},children:(0,e.jsx)(h._H,{id:"ws.result.details.test.result"})})}),(0,e.jsx)(L.Z.Item,{children:(0,e.jsx)(h._H,{id:"ws.result.details.result.details"})})]})},Ue=new Map([["success","#81BF84"],["fail","#C84C5A"],["running","#649FF6"],["stop","#1D1D1D"],["pending","#1D1D1D"],["skip","#1D1D1D"],["warning","#faad14"]]),ce=function(t){return Ue.get(t)||""},m=P.ZP.span(ee||(ee=(0,oe.Z)([`
    color: `,`;
    fontWeight: 500;
    text-transform: capitalize;
`])),function(o){var t=o.color;return t}),C=function(t){var r=t;return Object.prototype.toString.call(t)==="[object Boolean]"&&(r=t?"success":"fail"),(0,e.jsx)(m,{color:ce(r),children:r})},Me=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"-";return{ellipsis:{showTitle:!1},render:function(_){return _?(0,e.jsx)(Ce.K,{ellipsis:{tooltip:!0},children:_}):t}}},Oe=function(t){var r=t.title,_=t.width,a=_===void 0?"100%":_,O=t.onEdit,z=t.access,T=(0,Pe.useRef)(),g=(0,q.UO)(),R=g.share_id;return(0,e.jsx)("div",{ref:T,style:{width:a},children:(0,e.jsxs)(f.Z,{style:{width:a},justify:"start",align:"middle",children:[(0,e.jsx)(Z.Z,{placement:"topLeft",title:r,children:(0,e.jsx)("span",{style:{maxWidth:54,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r||"-"})}),!R&&(0,e.jsx)(ye.Z,{style:{marginLeft:6,cursor:"pointer"},onClick:function(){return z?O():(0,s.WR)()}})]})})},Q=function(t){return W.get(t)||"#D9D9D9"},de=function(t){var r=t.text,_=(0,h.YB)(),a=(0,_e.oM)(_.formatMessage({id:"request.copy.success"}));return(0,e.jsx)("span",{style:{cursor:"pointer",color:"#1890ff"},onClick:function(){return a(r)},children:_.formatMessage({id:"operation.copy",defaultMessage:"\u590D\u5236"})})},Te=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"-";return{ellipsis:{showTitle:!1},render:function(_){return _?_jsx(_Tooltip,{overlayClassName:styles.tootip_overflow,placement:"topLeft",title:_jsxs(_Row,{children:[_jsx(_Col,{span:24,style:{whiteSpace:"break-spaces"},children:_}),_jsx(_Col,{span:24,children:_jsx(_Row,{justify:"center",children:_jsx(de,{text:_})})})]}),children:_}):t}}},me=function(t){var r=t.text,_=t.defaultText,a=_===void 0?"-":_;return r?(0,e.jsx)(Z.Z,{overlayClassName:A().tootip_overflow,placement:"topLeft",title:(0,e.jsxs)(f.Z,{children:[(0,e.jsx)(B.Z,{span:24,style:{whiteSpace:"break-spaces"},children:r}),(0,e.jsx)(B.Z,{span:24,children:(0,e.jsx)(f.Z,{justify:"center",children:(0,e.jsx)(de,{text:r})})})]}),children:r}):a},S=function(t){return t==="decline"?"#C84C5A":t==="normal"?"#000000":t==="increase"?"#81BF84":""},Ze=function(t,r,_){return t==="decline"?(0,e.jsx)("span",{style:{color:"#C84C5A"},children:_({id:"ws.result.details.".concat(t)})}):t==="normal"?(0,e.jsx)("span",{style:{color:"#000000"},children:_({id:"ws.result.details.".concat(t)})}):t==="increase"?(0,e.jsx)("span",{style:{color:"#81BF84"},children:_({id:"ws.result.details.".concat(t)})}):r||"-"},te=(0,P.ZP)(X.Z)(ue||(ue=(0,oe.Z)([`
    font-weight: 500;
    width: 72px;
    text-align: center;
    `,`
    text-transform: capitalize;
`])),function(o){var t=o.no_margin;return t?"margin-right: 0;":""}),p=function(t){return(0,e.jsx)(te,(0,d.Z)({},(0,d.Z)((0,d.Z)({},t),{},{collection:void 0})))},ne=function(t){var r=(0,h.YB)(),_=r.formatMessage;return(0,e.jsx)(Z.Z,{title:_({id:"ws.result.details.job_state"}),placement:"bottom",children:(0,e.jsx)(te,(0,d.Z)({},t))})},V=function(t){var r=t.title;return(0,e.jsx)(F.Z,{title:r,placement:"right",trigger:"hover",overlayClassName:A().tag_popover_style,children:(0,e.jsx)(ie.Z,{style:{color:"rgba(0, 0, 0, 0.65)",verticalAlign:"middle"}})})},K=function(t){var r=t.state;return(0,e.jsx)(p,(0,d.Z)((0,d.Z)({},t),{},{color:Q(r),style:W.get(r)?void 0:{color:"#1d1d1d"},children:r==="success"?"complete":r}))},w=function(t){var r=t.state;return(0,e.jsx)(ne,(0,d.Z)((0,d.Z)({},t),{},{color:Q(r),style:W.get(r)?void 0:{color:"#1d1d1d"},children:r==="success"?"complete":r}))},Ie=function(t){var r=(0,h.YB)(),_=r.formatMessage,a=t.state,O=t.run_state,z=O===void 0?"":O,T=t.state_desc,g=(0,q.UO)(),R=g.ws_id;return a==="running"?T?(0,e.jsxs)(M.Z,{size:0,children:[(0,e.jsx)(K,(0,d.Z)((0,d.Z)({},t),{},{children:a})),(0,e.jsx)(V,{title:(0,e.jsx)("span",{dangerouslySetInnerHTML:{__html:T.replace(/(\d+)/g,'<a href="/ws/'.concat(R,'/test_result/$1" target="_blank">$1</a>'))}})})]}):z?(0,e.jsxs)(M.Z,{size:0,children:[(0,e.jsx)(K,(0,d.Z)((0,d.Z)({},t),{},{children:a})),(0,e.jsx)(V,{title:_({id:"ws.result.details.not.assigned.server"})})]}):(0,e.jsxs)(M.Z,{size:0,children:[(0,e.jsx)(K,(0,d.Z)((0,d.Z)({},t),{},{children:a})),(0,e.jsx)(V,{title:_({id:"ws.result.details.running,please.wait"})})]}):a==="pending"&&T?(0,e.jsxs)(M.Z,{size:0,children:[(0,e.jsx)(K,(0,d.Z)((0,d.Z)({},t),{},{children:a})),(0,e.jsx)(V,{title:(0,e.jsx)("span",{dangerouslySetInnerHTML:{__html:T.replace(/(\d+)/g,'<a href="/ws/'.concat(R,'/test_result/$1" target="_blank">$1</a>'))}})})]}):(0,e.jsx)(K,(0,d.Z)({},t))},Ae=function(t){return(0,e.jsx)(w,(0,d.Z)((0,d.Z)({},t),{},{no_margin:1}))},be=function(t){var r=t.title,_=t.desc,a=t.placement,O=a===void 0?"bottom":a;return(0,e.jsxs)(M.Z,{children:[(0,e.jsx)("span",{style:{color:"rgba(0, 0, 0, 0.85)"},children:r}),(0,e.jsx)(Z.Z,{overlayClassName:A().table_question_tooltip,placement:O,arrowPointAtCenter:!0,title:_,color:"#fff",children:(0,e.jsx)(ie.Z,{style:{color:"rgba(0, 0, 0, 0.65)"}})})]})},Re=function(t){var r=t.title,_=t.test_value,a=t.value_list,O=t.cv_value,z=t.max_value,T=t.min_value,g=t.metric,R=t.result,ve=(0,h.YB)(),Be=ve.formatMessage,x=(0,_e.oM)(Be({id:"request.copy.success"})),D=function(u){return u?new Number(u).toFixed(2):null},ae=D(z),se=D(T),re=O,k=D(_),G=a.map(function(l){return D(l)}),N="".concat(g," ").concat(r,`:
Avg: `).concat(k,`
CV:  `).concat(re);N+=ae?`
Max: `.concat(ae):"",N+=se?`
Min: `.concat(se):"",N+=G.length?`
Test Record
`:"",N+=G.reduce(function(l,u,y){return l.concat("(".concat(y+1,") ").concat(u,`
`))},"");var E="".concat(k,"\xB1").concat(re),c=function(){return R==="decline"?(0,e.jsx)("span",{className:A().result_popover_span,style:{color:"#C84C5A"},children:E}):R==="increase"?(0,e.jsx)("span",{className:A().result_popover_span,style:{color:"#81BF84"},children:E}):(0,e.jsx)("span",{className:A().result_popover_span,style:{color:"rgba(0, 0, 0, 0.65)"},children:E})};return(0,e.jsx)(F.Z,{overlayClassName:A().metric_list_copy,title:(0,e.jsxs)(f.Z,{justify:"space-between",children:[(0,e.jsx)("b",{children:r}),(0,e.jsx)("span",{onClick:function(){return x(N)},style:{color:"#1890FF",cursor:"pointer",marginLeft:"8px"},children:(0,e.jsx)(h._H,{id:"operation.copy"})})]}),content:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(f.Z,{children:[(0,e.jsx)("b",{children:"Avg\uFF1A"}),(0,e.jsx)("span",{children:k})]}),(0,e.jsxs)(f.Z,{children:[(0,e.jsx)("b",{children:"CV\uFF1A"}),(0,e.jsx)("span",{children:re})]}),(0,e.jsxs)(f.Z,{children:[(0,e.jsx)("b",{children:"Max\uFF1A"}),(0,e.jsx)("span",{children:ae})]}),(0,e.jsxs)(f.Z,{children:[(0,e.jsx)("b",{children:"Min\uFF1A"}),(0,e.jsx)("span",{children:se})]}),G.length>0&&(0,e.jsx)(f.Z,{style:{marginTop:16},children:(0,e.jsx)("b",{children:"Test Record"})}),G.map(function(l,u){return(0,e.jsx)(f.Z,{children:"(".concat(u+1,")").concat(l)},u)})]}),children:c()})},pe=function(t,r){return r&&(0,e.jsx)(B.Z,{span:24,children:(0,e.jsxs)(f.Z,{children:[(0,e.jsx)(Y.Z.Text,{style:{width:70,fontWeight:600,marginRight:8},children:t}),(0,e.jsx)(Y.Z.Paragraph,{style:{width:"calc( 100% - 70px - 8px)"},ellipsis:!0,children:r})]})})}}}]);
