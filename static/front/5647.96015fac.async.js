(self.webpackChunktone_front=self.webpackChunktone_front||[]).push([[5647],{69183:function(pe){pe.exports={cover:"cover___3PIkw"}},53674:function(pe){pe.exports={popover_group:"popover_group___IHI8-",job_compare:"job_compare___1_D5r",title:"title___1c0Gv",job_card:"job_card___3UEp7",job_index:"job_index___21-8z",job_detail:"job_detail___2CJBE",job_id:"job_id___1JRQn",job_creator:"job_creator___2TJh_",remove_active:"remove_active___1igZz",remove:"remove___1aCnX",job_delete:"job_delete___373RN",job_group:"job_group___2Qdj0",job_group_title:"job_group_title___QcEKp",job_item:"job_item___2_-nV",job_item_span:"job_item_span___5EB5v",delete:"delete___23RNK",operate:"operate___12fkp",list_container:"list_container___3WGnU",ViewTableStyle:"ViewTableStyle___1E2RD",result_table_row:"result_table_row___35tpX"}},41170:function(pe){pe.exports={popover_group:"popover_group___j2Kz6",job_compare:"job_compare___3XF0q",title:"title___3eiur",job_card:"job_card___1MV_c",job_index:"job_index___24peF",job_detail:"job_detail___37loK",job_id:"job_id___6_EU3",job_creator:"job_creator___3dH-U",remove_active:"remove_active___1zgwl",remove:"remove___i7J9x",job_delete:"job_delete___2EJje",job_group:"job_group___3L14X",job_group_title:"job_group_title___crAIG",job_item:"job_item___2Yq-b",job_item_span:"job_item_span___31i5J",delete:"delete___3vces",operate:"operate___264-O",popover_job:"popover_job___TPuXS",hrefUrl:"hrefUrl___fKrDG",row_table:"row_table___fqOAE",question_icon:"question_icon___39kbo"}},22911:function(pe,de,e){"use strict";e.d(de,{Z:function(){return j}});var C=e(57359),K=e(34423),Y=e(46721),ie=e(94867),le=e(8281),Q=e(58591),n=e(69230),oe=e(33821),g=e(67448),d=e(47548),u=e(35832),_=e(32326),a=e(39190),f=e(22374),ue=e(24812),x=e(22812);function _e(r){return(0,x.WY)("/api/auth/user/",{params:r})}var Ee=e(69183),s=e.n(Ee),U=e(52454),he=function(W){var $=W.confirm,S=W.onConfirm,q=W.value,be=W.page_size,i=W.mode,ge=i===void 0?"multiple":i,t=(0,ue.UO)(),o=t.ws_id,H=(0,f.useState)([]),R=(0,a.Z)(H,2),P=R[0],ee=R[1],E=(0,f.useState)(),se=(0,a.Z)(E,2),je=se[0],ye=se[1],xe=(0,f.useState)(),te=(0,a.Z)(xe,2),ne=te[0],re=te[1],V=(0,f.useState)(!0),b=(0,a.Z)(V,2),N=b[0],B=b[1],Z=(0,f.useState)(!1),p=(0,a.Z)(Z,2),L=p[0],Re=p[1],me=function(){var c=(0,_.Z)((0,u.Z)().mark(function O(h){var z,k,F;return(0,u.Z)().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if(z=h&&h.replace(/\s*/g,""),!(je&&je==z)){A.next=3;break}return A.abrupt("return");case 3:return ye(z),B(!0),A.next=7,_e({ws_id:o,keyword:z,page_size:be||10,page_num:1});case 7:k=A.sent,F=k.data,ee(Array.isArray(F)?F:[]),B(!1);case 11:case"end":return A.stop()}},O)}));return function(h){return c.apply(this,arguments)}}();(0,f.useEffect)(function(){me()},[]);var ve=function(){me()};return(0,U.jsxs)("div",{style:{padding:8},children:[(0,U.jsx)("div",{className:s().cover,onClick:function(){L||$==null||$()}}),(0,U.jsx)(oe.Z,{mode:ge,allowClear:!0,notFoundContent:N?(0,U.jsx)(d.Z,{size:"small"}):"Not Found",filterOption:!1,showSearch:!0,onSearch:me,style:{width:"100%"},onChange:function(O){return re(O)},onDeselect:ve,onClear:ve,showArrow:!1,autoFocus:!0,value:ne,onFocus:function(){Re(!0)},onBlur:function(){setTimeout(function(){Re(!1)},200)},options:P==null?void 0:P.map(function(c){return{label:c.last_name,value:c.id}})}),(0,U.jsx)(Q.Z,{style:{marginTop:"10px",marginBottom:"4px"}}),(0,U.jsxs)(K.Z,{children:[(0,U.jsx)(ie.Z,{onClick:function(){$==null||$(),S(ne)},type:"link",size:"small",style:{width:75},children:(0,U.jsx)(x._H,{id:"operation.search"})}),(0,U.jsx)(ie.Z,{type:"text",onClick:function(){$==null||$(),re(void 0),S(void 0),me()},size:"small",style:{width:75,border:"none"},children:(0,U.jsx)(x._H,{id:"operation.reset"})})]})]})},j=he},75647:function(pe,de,e){"use strict";e.d(de,{Z:function(){return xe}});var C=e(67448),K=e(47548),Y=e(57359),ie=e(34423),le=e(20632),Q=e(71853),n=e(79625),oe=e(96584),g=e(35832),d=e(81138),u=e(96146),_=e(20418),a=e(32326),f=e(39190),ue=e(41428),x=e(22374),_e=e(97939),Ee=e(98683),s=e(22812),U=e(24812),he=e(59300),j=e(76742),r=e(93299),W=e(46721),$=e(94867),S=e(53674),q=e.n(S),be=e(28972),i=e(89948),ge=e(39935),t=e(52454),o=function(te){var ne=(0,U.UO)(),re=ne.ws_id,V=te.selectedChange,b=te.allGroup,N=te.selectedRowKeys,B=(0,x.useRef)(null),Z=(0,x.useRef)(null),p=(0,x.useState)(!1),L=(0,f.Z)(p,2),Re=L[0],me=L[1],ve=function(){var m=document.querySelector("#job_group li"),D=document.getElementById("job_group");if(m&&D){var T=m.clientWidth+1,ae=D.clientWidth;(b.length+1)*T>ae&&me(!0)}};(0,x.useEffect)(function(){return window.addEventListener("resize",ve),function(){window.removeEventListener("resize",ve)}},[]),(0,x.useEffect)(function(){ve()},[b]);var c=function(){V()},O=function(m,D,T){if(m===200){var ae=b.map(function(ce,M){ce.job_total=ce.job_total.map(function(y){return String(y)});var l=T.filter(function(y){return ce.job_total.includes(String(y.id))}),v={name:"Group".concat(M+1),product_version:"Group".concat(M+1),members:l};return v});window.sessionStorage.setItem("".concat(re,"-compareData"),JSON.stringify(ae)),window.sessionStorage.setItem("".concat(re,"-originType"),"test_plan"),s.m8.push("/ws/".concat(re,"/test_analysis/compare"))}else(0,ge.EV)(m,D)},h=(0,g.Z)().mark(function G(m){return(0,g.Z)().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,(0,he.W3)(m);case 2:case"end":return T.stop()}},G)}),z=function(){var m={plan_instance_list:N.join(","),ws_id:re},D=h(m),T=D.next();T.value.then(function(ae){var ce=ae.code,M=ae.msg,l=ae.data;O(ce,M,l)})};(0,x.useEffect)(function(){Z.current=document.querySelectorAll("#box li"),Z.current&&(Z.current=Array.from(Z.current))},[b]);var k=function(m){if(Z.current&&Z.current[0]){var D=parseInt(window.getComputedStyle(Z.current[0]).width);return m*D}return 0},F=function(){if(B.current){var m=B.current.getScrollLeft();return m}},Ce=function(){var m=document.getElementById("job_group"),D=m.clientWidth;if(B.current){var T=F();B.current.scrollLeft(T+D-230)}},A={width:"100%"};return(0,t.jsxs)("div",{className:q().job_compare,style:{display:b.length?"block":"none"},children:[(0,t.jsxs)("div",{className:q().title,children:[(0,t.jsx)(s._H,{id:"plan.comparison.column"}),(0,t.jsxs)("span",{children:["\uFF08",b.length,"\uFF09"]})]}),(0,t.jsxs)("div",{className:q().job_group,id:"job_group",children:[(0,t.jsx)(be.$B,{style:A,ref:B,children:(0,t.jsx)("ul",{id:"box",children:b.map(function(G,m){var D=k(m);return(0,t.jsx)("li",{style:{borderRight:b.length>1&&m!==b.length-1?"1px dashed rgba(151, 151, 151, 0.4)":"none",position:"absolute",left:"".concat(D,"px")},children:(0,t.jsx)("div",{className:q().job_group_title,children:"Group".concat(m+1,"(Job Num:").concat(G.job_total&&G.job_total.length||0,")")})},G.id)})})}),(0,t.jsx)("div",{className:q().operate,children:(0,t.jsxs)(ie.Z,{children:[(0,t.jsx)(i.Z,{onClick:Ce,style:{opacity:Re?1:0}}),(0,t.jsx)($.Z,{onClick:c,children:(0,t.jsx)(s._H,{id:"operation.cancel"})}),(0,t.jsx)($.Z,{type:"primary",onClick:z,children:(0,t.jsx)(s._H,{id:"operation.next"})})]})})]})]})},H=e(20038),R=e(79390),P=e(6130),ee,E,se=_e.ZP.span(ee||(ee=(0,ue.Z)([`
    color:#1890FF;
    cursor:pointer;
`]))),je=_e.ZP.div(E||(E=(0,ue.Z)([`
    height : 36px;
    width : 100%;
    text-align:center;
    cursor:pointer;
    line-height:36px;
    color:rgba(0,0,0,.65);
    border-top:1px solid #f0f0f0;
`]))),ye=function(ne){var re=(0,s.YB)(),V=re.formatMessage,b=(0,U.UO)(),N=b.ws_id,B=(0,s.md)(),Z=ne.plan_id,p=ne.showPagination,L=p===void 0?!1:p,Re=ne.callBackViewTotal,me=(0,x.useState)({page_size:10,page_num:1,ws_id:N,plan_id:Z}),ve=(0,f.Z)(me,2),c=ve[0],O=ve[1],h=(0,x.useState)([]),z=(0,f.Z)(h,2),k=z[0],F=z[1],Ce=(0,x.useState)([]),A=(0,f.Z)(Ce,2),G=A[0],m=A[1],D=(0,ge.YM)(c),T=(0,s.QT)(function(X){return(0,he.kB)(X)},{initialData:{data:[]},manual:!0,formatResult:function(I){return I}}),ae=T.data,ce=T.run,M=T.loading,l=(0,ge.YM)(ae);(0,x.useEffect)(function(){ce(c)},[Z,c]);var v=(0,x.useCallback)(function(X){s.m8.push("/ws/".concat(N,"/test_plan/view/detail/").concat(X.id))},[]),y=function(){var X=(0,a.Z)((0,g.Z)().mark(function I(fe){var Oe,De,Te,Me;return(0,g.Z)().wrap(function(Se){for(;;)switch(Se.prev=Se.next){case 0:return Oe=D.current.page_size,Se.next=3,(0,he.Fg)({plan_instance_id:fe.id,ws_id:N});case 3:if(De=Se.sent,Te=De.code,Me=De.msg,Te===200){Se.next=9;break}return(0,ge.EV)(Te,Me),Se.abrupt("return");case 9:Re(),O((0,_.Z)((0,_.Z)({},c),{},{page_num:(0,ge.NG)(D,l),page_size:Oe})),u.default.success(V({id:"plan.operation.success"}));case 12:case"end":return Se.stop()}},I)}));return function(fe){return X.apply(this,arguments)}}(),J=[(0,_.Z)({dataIndex:"name",title:(0,t.jsx)(s._H,{id:"plan.plan.name"}),ellipsis:{showTitle:!1},fixed:"left",className:"plan_name_hover",render:function(I,fe){return(0,t.jsx)("span",{onClick:function(){return v(fe)},children:I||"-"})}},(0,r.QT)(c,O,"name")),(0,_.Z)({dataIndex:"state",title:(0,t.jsx)(s._H,{id:"plan.state"}),width:120,render:function(I){return(0,t.jsx)(Ee.kK,{state:I})}},(0,r.Ht)(c,O,[{name:"Complate",value:"success"},{name:"Fail",value:"fail"},{name:"Running",value:"running"},{name:"Pedding",value:"pedding"}],"state")),{title:(0,t.jsx)(s._H,{id:"plan.total/success/failure"}),width:180,key:"total",render:function(I){return(0,t.jsx)(Ee.Bs,(0,_.Z)({},I.statistics))}},{dataIndex:"trigger_name",width:100,title:(0,t.jsx)(s._H,{id:"plan.trigger"}),ellipsis:{showTitle:!1},render:function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"-";return(0,t.jsx)(oe.Z,{placement:"topLeft",title:I,children:I})}},{dataIndex:"start_time",title:(0,t.jsx)(s._H,{id:"plan.start_time"}),width:180,ellipsis:{showTitle:!1},render:function(I,fe){return(0,t.jsx)(P.K,{ellipsis:{tooltip:!0},children:fe.start_time||"-"})}},{dataIndex:"end_time",title:(0,t.jsx)(s._H,{id:"plan.end_time"}),ellipsis:{showTitle:!1},width:180,render:function(I,fe){return(0,t.jsx)(P.K,{ellipsis:{tooltip:!0},children:fe.end_time||"-"})}},{title:(0,t.jsx)(s._H,{id:"Table.columns.operation"}),width:150,ellipsis:{showTitle:!1},fixed:"right",key:"operation",className:"option",render:function(I){return(0,t.jsxs)(ie.Z,{children:[(0,t.jsx)(se,{className:"option-detail",onClick:function(){return v(I)},children:(0,t.jsx)(s._H,{id:"operation.detail"})}),(0,t.jsx)(s.Nv,{accessible:B.WsTourist(),children:(0,t.jsx)(s.Nv,{accessible:B.WsMemberOperateSelf(I.creator),fallback:(0,t.jsx)(se,{className:"option-delete",onClick:function(){return(0,ge.WR)()},children:(0,t.jsx)(s._H,{id:"operation.delete"})}),children:(0,t.jsx)(Q.Z,{title:(0,t.jsx)(s._H,{id:"delete.prompt"}),okText:(0,t.jsx)(s._H,{id:"operation.ok"}),cancelText:(0,t.jsx)(s._H,{id:"operation.cancel"}),onConfirm:function(){return y(I)},children:(0,t.jsx)(se,{className:"option-delete",children:(0,t.jsx)(s._H,{id:"operation.delete"})})})})}),(0,t.jsx)(H.Z,{className:"option-detail",dreType:"left",title:V({id:"plan.report"}),ws_id:N,jobInfo:I,origin:"jobList"})]})}}],w=function(){F([]),m([])},Ze=(0,x.useRef)(null),Pe=(0,x.useCallback)(function(X){s.m8.push("/ws/".concat(N,"/test_plan/view/summary/").concat(X))},[N]);return(0,t.jsx)("div",{ref:Ze,className:q().list_container,children:(0,t.jsxs)(K.Z,{spinning:M,children:[(0,t.jsx)(R.sL,{className:q().ViewTableStyle,rowClassName:q().result_table_row,columns:J,name:"ws-test-plan-view-table",refreshDeps:[N,c,B],dataSource:ae.data,size:"small",pagination:!1,rowKey:"id"}),L&&(0,t.jsx)(j.Z,{total:ae.total,pageSize:c.page_size,currentPage:c.page_num,onPageChange:function(I,fe){O((0,_.Z)((0,_.Z)({},c),{},{page_num:I,page_size:fe}))}}),(0,t.jsx)(o,{selectedRowKeys:k,allGroup:G,selectedChange:w}),L?null:ae.total>10&&(0,t.jsx)(je,{onClick:function(){return Pe(Z)},children:"\u67E5\u770B\u5168\u90E8"})]})})},xe=ye},98683:function(pe,de,e){"use strict";e.d(de,{kK:function(){return Ee},Bs:function(){return s},IT:function(){return he}});var C=e(57359),K=e(34423),Y=e(41428),ie=e(22374),le=e(22812),Q=e(97939),n=e(52454),oe,g,d,u=Q.ZP.span(oe||(oe=(0,Y.Z)([`
    color:`,`;
    background : `,`;
    height: 18px;
    min-width: 36px;
    font-size: 14px;
    line-height:18px;
    text-align : center;
    // font-weight: 700;
    display:inline-block;
    padding:0 7px;
`])),function(j){return j.color},function(j){return a(j.color)}),_=Q.ZP.span(g||(g=(0,Y.Z)([`
    color:`,`;
    background : `,`;
    height: 18px;
    min-width: 36px;
    font-size: 14px;
    line-height:18px;
    text-align : center;
    display:inline-block;
    border-radius: 12px;
    // font-weight: 700;
    padding:0 7px;
`])),function(j){return j.color},function(j){return a(j.color)});function a(j){if(j=="")return"";j=j.substring(1),j=j.toLowerCase();for(var r=new Array,W=0;W<3;W++)r[0]=j.substr(W*2,2),r[3]="0123456789abcdef",r[1]=r[0].substr(0,1),r[2]=r[0].substr(1,1),r[20+W]=r[3].indexOf(r[1])*16+r[3].indexOf(r[2]);return"rgba("+r[20]+","+r[21]+","+r[22]+",.1)"}var f="#000000a6",ue="#C84C5A",x="#39C15B",_e="#649FF6",Ee=function(r){var W=r.state;switch(W){case"pending":return(0,n.jsx)(u,{color:f,children:"Pending"});case"running":return(0,n.jsx)(u,{color:_e,children:"Running"});case"success":return(0,n.jsx)(u,{color:x,children:"Complete"});case"fail":return(0,n.jsx)(u,{color:ue,children:"Fail"});default:return(0,n.jsx)(n.Fragment,{children:"-"})}return(0,n.jsx)(n.Fragment,{children:"-"})},s=function(r){var W=r.total,$=r.pass,S=r.fail;return(0,n.jsxs)(K.Z,{children:[(0,n.jsx)(_,{color:_e,children:W||"-"}),(0,n.jsx)(_,{color:x,children:$||"-"}),(0,n.jsx)(_,{color:ue,children:S||"-"})]})},U=(0,Q.ZP)(K.Z)(d||(d=(0,Y.Z)([`
    span { font-size : 12px; }
`]))),he=function(r){return(0,n.jsxs)(U,{children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)("span",{children:[(0,n.jsx)(le._H,{id:"plan.trigger_count"}),"\uFF1A"]}),(0,n.jsx)("span",{style:{marginRight:8,color:_e},children:r.trigger_count}),(0,n.jsxs)("span",{children:[(0,n.jsx)(le._H,{id:"plan.success"}),"\uFF1A"]}),(0,n.jsx)("span",{style:{marginRight:8,color:x},children:r.success_count}),(0,n.jsxs)("span",{children:[(0,n.jsx)(le._H,{id:"plan.fail"}),"\uFF1A"]}),(0,n.jsx)("span",{style:{marginRight:8,color:ue},children:r.fail_count})]}),r.last_time&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("span",{children:[(0,n.jsx)(le._H,{id:"plan.last_time"}),"\uFF1A"]}),(0,n.jsx)("span",{children:r.last_time})]}),r.next_time&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("span",{children:[(0,n.jsx)(le._H,{id:"plan.next_time"}),"\uFF1A"]}),(0,n.jsx)("span",{children:r.next_time})]})]})}},59300:function(pe,de,e){"use strict";e.d(de,{oW:function(){return ie},kB:function(){return le},Fg:function(){return n},W3:function(){return oe}});var C=e(35832),K=e(32326),Y=e(22812),ie=function(){var g=(0,K.Z)((0,C.Z)().mark(function d(u){return(0,C.Z)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,Y.WY)("/api/plan/view/",{params:u}));case 1:case"end":return a.stop()}},d)}));return function(u){return g.apply(this,arguments)}}(),le=function(){var g=(0,K.Z)((0,C.Z)().mark(function d(u){return(0,C.Z)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,Y.WY)("/api/plan/result/",{params:u}));case 1:case"end":return a.stop()}},d)}));return function(u){return g.apply(this,arguments)}}(),Q=null,n=function(){var g=(0,K.Z)((0,C.Z)().mark(function d(u){return(0,C.Z)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,Y.WY)("/api/plan/result/",{data:u,method:"delete"}));case 1:case"end":return a.stop()}},d)}));return function(u){return g.apply(this,arguments)}}(),oe=function(d){return(0,Y.WY)("/api/plan/constraint/",{params:d})}},20038:function(pe,de,e){"use strict";var C=e(13059),K=e(53676),Y=e(46721),ie=e(94867),le=e(31650),Q=e(25100),n=e(11407),oe=e(41604),g=e(35832),d=e(32326),u=e(20418),_=e(39190),a=e(22374),f=e(41170),ue=e.n(f),x=e(28972),_e=e(44851),Ee=e.n(_e),s=e(12590),U=e(22911),he=e(31784),j=e(39881),r=e(22812),W=e(24812),$=e(97207),S=e.n($),q=e(6130),be=e(89689),i=e(52454),ge={container:245,button_width:122};de.Z=function(t){var o=(0,r.YB)(),H=o.formatMessage,R=(0,W.UO)(),P=R.ws_id,ee=t.dreType,E=t.jobInfo,se=t.origin,je=t.buttonStyle,ye=je===void 0?{}:je,xe=t.title,te=E&&E.report_li,ne={name:"",creator_name:""},re=(0,a.useState)(!0),V=(0,_.Z)(re,2),b=V[0],N=V[1],B=(0,a.useState)(ne),Z=(0,_.Z)(B,2),p=Z[0],L=Z[1],Re=(0,a.useState)([]),me=(0,_.Z)(Re,2),ve=me[0],c=me[1],O=(0,a.useState)(!1),h=(0,_.Z)(O,2),z=h[0],k=h[1],F=a.useRef(null);(0,be.Z)(function(){k(!1)},[F]);var Ce=function(l,v){var y=S().cloneDeep(v);return l&&(y=y.filter(function(J){var w=l.split(",").map(function(Pe){return Pe&&(Pe==null?void 0:Pe.trim())}),Ze=S().get(J,"creator");return w.includes(String(Ze))})),y},A=function(l,v){var y=S().cloneDeep(v);return l&&(y=y.filter(function(J){var w=S().get(J,"name");return w.includes(l.trim())})),y},G=function(l,v){var y=l||"";S().isArray(y)&&(y=y.join(","));var J={};J[v]=y;var w=S().cloneDeep(te);y===""?w=A(p.name||"",w):(w=A(p.name||"",w),w=Ce(y,w)),c(w),L((0,u.Z)((0,u.Z)({},p),J))},m=[{dataIndex:"name",title:(0,i.jsx)(r._H,{id:"ws.result.list.report.name"}),width:165,ellipsis:{showTitle:!1},className:"report_name_hover",filterDropdown:function(l){var v=l.confirm;return(0,i.jsx)(s.Z,{confirm:v,autoFocus:b,styleObj:ge,onConfirm:function(J){var w=S().cloneDeep(te);J===void 0?w=Ce(p.creator_name||"",w):(w=Ce(p.creator_name||"",w),w=A(J,w)),c(w),L((0,u.Z)((0,u.Z)({},p),{},{name:J}))},placeholder:H({id:"ws.result.list.report.name.placeholder"})})},onFilterDropdownVisibleChange:function(l){l&&N(!b)},filterIcon:function(){return(0,i.jsx)(he.Z,{style:{color:p.name?"#1890ff":void 0}})},render:function(l,v){return(0,i.jsx)(q.K,{ellipsis:{tooltip:v.name},children:(0,i.jsx)(Ee(),{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[p.name||""],autoEscape:!0,textToHighlight:v&&v.name||"-",onClick:function(){return window.open("/ws/".concat(P,"/test_report/").concat(v.id))}})})}},{dataIndex:"creator_name",width:100,title:(0,i.jsx)(r._H,{id:"ws.result.list.creators"}),filterDropdown:function(l){var v=l.confirm;return(0,i.jsx)(U.Z,{autoFocus:b,confirm:v,onConfirm:function(J){return G(J,"creator_name")},page_size:20})},onFilterDropdownVisibleChange:function(l){l&&N(!b)},filterIcon:function(){return(0,i.jsx)(he.Z,{style:{color:p.creator_name?"#1890ff":void 0}})},render:function(l){return(0,i.jsx)(q.K,{ellipsis:{tooltip:!0},children:l||"-"})}},{dataIndex:"gmt_created",title:(0,i.jsx)(r._H,{id:"ws.result.list.gmt_created"}),width:200,render:function(l){return(0,i.jsx)(q.K,{ellipsis:{tooltip:!0},children:l||"-"})}}],D=function(){var M=(0,d.Z)((0,g.Z)().mark(function l(v){return(0,g.Z)().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:window.open("/ws/".concat(P,"/test_report/").concat(v));case 1:case"end":return J.stop()}},l)}));return function(v){return M.apply(this,arguments)}}(),T=function(l,v){if(l.stopPropagation(),S().isArray(v)||(v=[]),v.length===1){D(v[0].id);return}k(!z),c(v)},ae=function(l){return(0,i.jsx)("div",{ref:F,children:(0,i.jsx)(x.$B,{style:{height:244},children:(0,i.jsx)(oe.Z,{size:"small",rowKey:"id",columns:m,dataSource:l,pagination:!1,rowClassName:ue().row_table})})})},ce=S().get(E,"report_li")&&E.report_li.length;return(0,i.jsx)("div",{className:ue().conf_item_box,children:(0,i.jsx)(K.Z,{placement:ee,title:(0,i.jsx)(r._H,{id:"ws.result.list.view.report"}),content:ae(ve),trigger:"click",overlayClassName:ue().popover_job,open:z,children:se==="jobList"?(0,i.jsx)(Q.Z.Text,{style:{color:"#1890FF",cursor:"pointer",display:ce?"inlineBlock":"none"},children:(0,i.jsxs)("span",{onClick:S().partial(T,S(),E&&E.report_li),style:{display:"flex",alignItems:"center"},children:[xe||(0,i.jsx)(r._H,{id:"ws.result.list.view.report"}),(0,i.jsx)(j.Z,{style:{display:ce>1?"inline-block":"none",marginLeft:"2px",marginTop:"2px"}})]})}):(0,i.jsxs)(ie.Z,{type:"primary",onClick:S().partial(T,S(),E&&E.report_li),style:(0,u.Z)({marginRight:8,display:ce?"inlineBlock":"none"},ye),children:[xe||(0,i.jsx)(r._H,{id:"ws.result.list.view.report"}),(0,i.jsx)(j.Z,{style:{display:ce>1?"inline-block":"none",marginLeft:"2px",marginTop:"2px"}})]})})})}},79390:function(pe,de,e){"use strict";e.d(de,{sL:function(){return ge},ny:function(){return be},Fu:function(){return i}});var C=e(20418),K=e(39190),Y=e(488),ie=e(26388),le=e(11407),Q=e(41604),n=e(2605),oe=e(74127),g=e(41428),d=e(22374),u=e(48434),_=e(97939),a=e(99648),f=e(52454),ue=["width","onResizeStart","onResize","onResizeStop","resize"],x=["columns","name","onColumnsChange"],_e,Ee,s,U=_.ZP.div(_e||(_e=(0,g.Z)([`
    position: relative;
    width: 100%;
`]))),he=_.ZP.div.attrs(function(t){return{style:{left:t.left,height:t==null?void 0:t.height}}})(Ee||(Ee=(0,g.Z)([`
    width: 0px;
    position: absolute;
    left: 0;
    top: 0;
    border-left: 1px dashed #d9d9d9;
    z-index: 99;
`]))),j=(0,_.ZP)(u.Resizable)(s||(s=(0,g.Z)([`
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
`])),function(t){var o=t.resize;return o?"col-resize":"default"}),r=function(o){var H=o.width,R=o.onResizeStart,P=o.onResize,ee=o.onResizeStop,E=o.resize,se=(0,Y.Z)(o,ue);return(0,f.jsx)(j,(0,C.Z)((0,C.Z)({width:H||100,height:0,draggableOpts:{enableUserSelectHack:!1},onResizeStart:R,onResize:P,onResizeStop:ee,resize:E?1:0},se),{},{children:(0,f.jsx)("th",(0,C.Z)({},se))}))},W=function(o){var H=o.columns,R=H===void 0?[]:H,P=o.name,ee=o.onColumnsChange,E=(0,Y.Z)(o,x),se=d.useState(0),je=(0,K.Z)(se,2),ye=je[0],xe=je[1],te=d.useState(0),ne=(0,K.Z)(te,2),re=ne[0],V=ne[1],b=d.useState(!1),N=(0,K.Z)(b,2),B=N[0],Z=N[1],p=d.useRef(null),L=(0,a.Z)(p),Re=function(h){return function(z,k){var F;if((0,oe.Z)(k),!!R[h].ellipsis){var Ce=z.clientX,A=Ce-((F=p.current)===null||F===void 0?void 0:F.getBoundingClientRect().x);V(A),xe(A),Z(!0)}}},me=function(){return function(h){var z,k=h.clientX,F=k-((z=p.current)===null||z===void 0?void 0:z.getBoundingClientRect().x);xe(F)}},ve=function(h){return function(z,k){var F,Ce=k.size,A=z.clientX,G=A-((F=p.current)===null||F===void 0?void 0:F.getBoundingClientRect().x),m=(0,n.Z)(R);if(m[h].ellipsis){var D=Ce.width+=G-re,T=m[h],ae=T.dataIndex,ce=T.key;D>20&&(m[h]=(0,C.Z)((0,C.Z)({},m[h]),{},{width:D}),P&&i(P,ae||ce,D),ee==null||ee())}xe(0),V(0),Z(!1)}},c=d.useMemo(function(){return R.reduce(function(O,h){return h.width?O+=h==null?void 0:h.width:O},0)},[R]);return(0,f.jsxs)(U,{ref:p,className:"resize-table-wrapper",children:[(0,f.jsx)(Q.Z,(0,C.Z)((0,C.Z)({},E),{},{components:{header:{cell:r}},scroll:(o==null?void 0:o.scroll)||{x:c||(L==null?void 0:L.width)},columns:R.filter(Boolean).map(function(O,h){return(0,C.Z)((0,C.Z)({},O),{},{onHeaderCell:function(k){return{resize:!!O.ellipsis,width:k.width,onResizeStart:Re(h),onResize:me(),onResizeStop:ve(h)}}})})})),B&&(0,f.jsx)(he,{height:L==null?void 0:L.height,left:ye||re})]})},$=W,S=["name","columns","refreshDeps","onColumnsChange"],q="umi_locale",be=function(o,H){var R=localStorage.getItem(o),P=localStorage.getItem(q)||"zh-CN";if(!!R)return JSON.parse(R)["".concat(P,"-").concat(H)]},i=function(o,H,R){var P=localStorage.getItem(o),ee=localStorage.getItem(q)||"zh-CN",E=(0,ie.Z)({},"".concat(ee,"-").concat(H),R);P?localStorage.setItem(o,JSON.stringify(Object.assign(JSON.parse(P),E))):localStorage.setItem(o,JSON.stringify(E))},ge=function(o){var H=o.name,R=o.columns,P=o.refreshDeps,ee=P===void 0?[]:P,E=o.onColumnsChange,se=(0,Y.Z)(o,S),je=d.useState([]),ye=(0,K.Z)(je,2),xe=ye[0],te=ye[1],ne=function(){return(R==null?void 0:R.filter(Boolean).map(function(V){var b=V.dataIndex,N=V.key,B=V.width,Z=b||N,p=be(H,Z);!p&&B&&i(H,Z,B);var L=p||B;return L&&(V.width=L),V}))||[]};return d.useEffect(function(){te(ne())},ee),(0,f.jsx)($,(0,C.Z)({name:H,columns:xe,setColumns:te,size:"small",onColumnsChange:function(){E==null||E(),te(ne())}},se))}},89689:function(pe,de,e){"use strict";e.d(de,{Z:function(){return ie}});var C=e(22374),K=e(23101),Y="click";function ie(le,Q,n){n===void 0&&(n=Y);var oe=(0,C.useRef)(le);oe.current=le,(0,C.useEffect)(function(){var g=function(u){var _=Array.isArray(Q)?Q:[Q];_.some(function(a){var f=(0,K.n)(a);return!f||(f==null?void 0:f.contains(u.target))})||oe.current(u)};return document.addEventListener(n,g),function(){document.removeEventListener(n,g)}},[Q,n])}}}]);
