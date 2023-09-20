(self.webpackChunktone_front=self.webpackChunktone_front||[]).push([[1683],{85311:function(Ke,Ve,t){"use strict";t.d(Ve,{Z:function(){return ct}});var ue=t(45972),T=t(22374),ot={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"}}]},name:"plus-circle",theme:"filled"},Xe=ot,te=t(25078),ke=function(pt,J){return T.createElement(te.Z,(0,ue.Z)((0,ue.Z)({},pt),{},{ref:J,icon:Xe}))};ke.displayName="PlusCircleFilled";var ct=T.forwardRef(ke)},74127:function(Ke,Ve,t){"use strict";t.d(Ve,{Z:function(){return ue}});function ue(T){if(T==null)throw new TypeError("Cannot destructure undefined")}},26449:function(Ke){Ke.exports={job_plan_form:"job_plan_form___24esx",cascaderStyle:"cascaderStyle___1QF0V"}},6937:function(Ke){Ke.exports={job_plan_form:"job_plan_form___2XoMb",templateListDrawerSpace:"templateListDrawerSpace____VYHT"}},74711:function(Ke){Ke.exports={stepsWrapper_1:"stepsWrapper_1___1goW7",stepsWrapper_2:"stepsWrapper_2___JR3TX",plan_step_btn:"plan_step_btn___2ttxd"}},86252:function(Ke){Ke.exports={test_result_name:"test_result_name___1RBzL",test_summary_item:"test_summary_item___3-Yoh",test_summary_item_right:"test_summary_item_right___2UQVi",test_summary_item_right_unellipsis:"test_summary_item_right_unellipsis___2cRIc",test_summary_job:"test_summary_job___2a2-P",test_summary_row:"test_summary_row___1zXMg",detail_collection:"detail_collection___1_th-",offline_flag:"offline_flag___3BdpH",ellips_column_refclass:"ellips_column_refclass___30H4W",tag_popover_style:"tag_popover_style___1x8MG",table_question_tooltip:"table_question_tooltip___1Ur7e",join_baseline:"join_baseline___Jgafh",select_baseline:"select_baseline___2nHPA"}},67808:function(){},46448:function(Ke,Ve,t){"use strict";t.r(Ve),t.d(Ve,{default:function(){return ka}});var ue=t(67448),T=t(47548),ot=t(90846),Xe=t(56511),te=t(70772),ke=t(6701),ct=t(73124),Te=t(91771),pt=t(14320),J=t(53479),Ce=t(57359),ne=t(34423),Ot=t(46721),j=t(94867),It=t(79716),qe=t(71924),yt=t(89963),ht=t(70077),o=t(20418),L=t(488),it=t(81138),ie=t(96146),g=t(35832),$=t(32326),C=t(39190),s=t(22374),vt=t(88966),r=t(11048),gt=t(69230),D=t(33821),K=t(20693),P=t(3278),w=t(65790),i=t(17187),a=t(41428),n=t(22812),y=t(24812),G=t(75841),Pe=t(14582),q=t(6937),Ye=t.n(q),et=t(96211),xe=t(78938),re=t(39854),d=t(97939),A=t(39935),e=t(52454),$e,Qe,z=d.ZP.span($e||($e=(0,a.Z)([`
    position:absolute;
    right: 30px;
    top: 4px;
    font-size: 12px;
    color:rgba(0,0,0,.45);
`]))),l=d.ZP.div(Qe||(Qe=(0,a.Z)([`
    position:relative;
`]))),I=function(u,E){var p=(0,n.YB)(),m=p.formatMessage,v=u.template,he=u.show,Re=(0,y.UO)(),Se=Re.ws_id,Ee=i.Z.useForm(),me=(0,C.Z)(Ee,1),V=me[0],ye=(0,s.useState)("no"),B=(0,C.Z)(ye,2),le=B[0],we=B[1],Y=(0,s.useState)("rpm"),k=(0,C.Z)(Y,2),ee=k[0],ge=k[1],Ie=(0,n.QT)(function(){return(0,G.YK)({ws_id:Se,page_size:500})},{initialData:[]}),Ae=Ie.data,oe=(0,n.QT)(function(){return(0,G.bU)({ws_id:Se,page_size:500})},{initialData:[]}),Fe=oe.data,He=(0,n.QT)(function(){return(0,Pe.ZP)({enable:"True"})}),Be=He.data,ze=function(W){we(W.target.value),V.setFieldsValue({test_obj:ee}),V.resetFields(["kernel_packages","kernel_version"])};(0,s.useImperativeHandle)(E,function(){return{validate:function(){return V.validateFields()}}}),(0,s.useEffect)(function(){if(v&&JSON.stringify(v)!=="{}"){var F=v.build_pkg_info,W=v.kernel_info,Q=v.kernel_version,Ze=v.test_obj;ge(Ze),Ze==="kernel"&&(JSON.stringify(F)!=="{}"&&we("install_build_kernel"),JSON.stringify(W)!=="{}"&&we(Q?"install_push":"install_un_push")),V.setFieldsValue((0,o.Z)((0,o.Z)((0,o.Z)({},W),F),v))}},[v]);var O={allowClear:!0,getPopupContainer:function(W){return W.parentNode},showSearch:!0,filterOption:function(W,Q){var Ze;return((Ze=Q==null?void 0:Q.label)!==null&&Ze!==void 0?Ze:"").toLowerCase().includes(W.toLowerCase())}};return(0,e.jsx)("div",{style:{display:he,width:"100%",height:"100%",overflowY:"auto",paddingTop:20,paddingBottom:20},children:(0,e.jsxs)(i.Z,{form:V,layout:"horizontal",size:"small",labelCol:{span:4},wrapperCol:{span:12},style:{width:"100%"},colon:!1,className:Ye().job_plan_form,initialValues:{hotfix_install:!0,test_obj:"rpm",scripts:[{pos:"before",script:""}]},children:[(0,e.jsx)(i.Z.Item,{name:"name",label:(0,e.jsx)(n._H,{id:"plan.plan.name"}),rules:[{required:!0,message:m({id:"plan.plan.name.message"}),max:64}],children:(0,e.jsx)(P.Z,{autoComplete:"off",placeholder:m({id:"plan.plan.name.placeholder"})})}),(0,e.jsx)(i.Z.Item,{name:"description",label:(0,e.jsx)(n._H,{id:"plan.plan.description"}),children:(0,e.jsx)(P.Z.TextArea,{autoComplete:"off",placeholder:m({id:"plan.plan.description.placeholder"})})}),(0,e.jsx)(i.Z.Item,{name:"project_id",label:"Project",children:(0,e.jsx)(D.Z,(0,o.Z)((0,o.Z)({},O),{},{placeholder:m({id:"plan.plan.project_id"}),options:Ae.map(function(F){return{value:F.id,label:"".concat(F.name,"(").concat(F.product_name,")")}})}))}),(0,e.jsxs)(i.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.test.baseline"}),children:[(0,e.jsxs)(l,{children:[(0,e.jsx)(i.Z.Item,{name:"func_baseline",children:(0,e.jsx)(D.Z,(0,o.Z)((0,o.Z)({},O),{},{placeholder:m({id:"plan.func_baseline.placeholder"}),options:Fe.filter(function(F){return F.test_type==="functional"}).map(function(F){return{value:F.id,label:F.name}})}))}),(0,e.jsx)(z,{children:(0,e.jsx)(n._H,{id:"plan.function"})})]}),(0,e.jsxs)(l,{children:[(0,e.jsx)(i.Z.Item,{name:"perf_baseline",children:(0,e.jsx)(D.Z,(0,o.Z)((0,o.Z)({},O),{},{placeholder:m({id:"plan.perf_baseline.placeholder"}),options:Fe.filter(function(F){return F.test_type==="performance"}).map(function(F){return{value:F.id,label:F.name}})}))}),(0,e.jsx)(z,{children:(0,e.jsx)(n._H,{id:"plan.performance"})})]})]}),(0,e.jsx)(i.Z.Item,{name:"test_obj",label:(0,e.jsx)(n._H,{id:"plan.tested.object"}),children:(0,e.jsxs)(D.Z,(0,o.Z)((0,o.Z)({},O),{},{filterOption:!1,onChange:function(W){return ge(W)},placeholder:"\u8BF7\u9009\u62E9\u88AB\u6D4B\u5BF9\u8C61",children:[(0,e.jsx)(D.Z.Option,{value:"kernel",children:(0,e.jsx)(n._H,{id:"plan.kernel.package"})}),(0,e.jsx)(D.Z.Option,{value:"rpm",children:(0,e.jsx)(n._H,{id:"plan.others.soft"})})]}))}),ee=="kernel"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.kernel"}),children:(0,e.jsxs)(r.ZP.Group,{value:le,onChange:ze,children:[(0,e.jsx)(r.ZP,{value:"no",children:(0,e.jsx)(n._H,{id:"ws.result.details.install_no"})}),(0,e.jsx)(r.ZP,{value:"install_push",children:(0,e.jsx)(n._H,{id:"plan.install_push"})}),(0,e.jsx)(r.ZP,{value:"install_un_push",children:(0,e.jsx)(n._H,{id:"plan.install_un_push"})}),(0,e.jsx)(r.ZP,{value:"install_build_kernel",children:(0,e.jsx)(n._H,{id:"plan.install_build_kernel"})})]})}),le==="install_push"&&(0,e.jsx)(et.Z,{form:V,kernel:le,kernelList:Be,needScriptList:!A.lU.includes(Se)}),le==="install_un_push"&&(0,e.jsx)(xe.Z,{form:V,needScriptList:!A.lU.includes(Se)}),le==="install_build_kernel"&&(0,e.jsx)(re.Z,{needScriptList:!1,form:V,isPlan:!0})]}),(0,e.jsx)(i.Z.Item,{name:"rpm_info",label:(0,e.jsx)(n._H,{id:"plan.rpm_info"}),children:(0,e.jsx)(P.Z.TextArea,{placeholder:m({id:"plan.rpm_info.placeholder"})})}),(0,e.jsx)(i.Z.Item,{name:"env_info",label:(0,e.jsx)(n._H,{id:"plan.env_info"}),rules:[function(){return{validator:function(W,Q){if(Q){var Ze=/^(\w+=((('[^']+'|"[^"]+")|.+)(\n)))*\w+=(('[^']+'|"[^"]+")|.+)$/;return Ze.test(Q)?Promise.resolve():Promise.reject(m({id:"plan.env_info.reject"}))}return Promise.resolve()}}}],children:(0,e.jsx)(P.Z.TextArea,{placeholder:m({id:"plan.env_info.reject"})})}),(0,e.jsx)(i.Z.Item,{name:"notice_name",label:(0,e.jsx)(n._H,{id:"plan.notice_name"}),children:(0,e.jsx)(P.Z,{autoComplete:"off",placeholder:m({id:"plan.notice_name.placeholder"},{date:"{date}"})})}),(0,e.jsx)(i.Z.Item,{name:"email_info",label:(0,e.jsx)(n._H,{id:"plan.email_info"}),rules:[function(){return{validator:function(W,Q){if(Q){var Ze=Q.split(/,|，|\s/g),We=/(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})+)/,fe=Ze.filter(function(Z){return!We.test(Z)}).length;return fe===0?Promise.resolve():Promise.reject(m({id:"plan.email_info.reject"}))}return Promise.resolve()}}}],children:(0,e.jsx)(P.Z,{autoComplete:"off",placeholder:m({id:"plan.email_info.placeholder"})})}),(0,e.jsx)(i.Z.Item,{name:"ding_talk_info",label:(0,e.jsx)(n._H,{id:"plan.ding_talk_info"}),children:(0,e.jsx)(P.Z,{autoComplete:"off",placeholder:m({id:"plan.ding_talk_info.placeholder"})})}),(0,e.jsx)(i.Z.Item,{name:"enable",label:(0,e.jsx)(n._H,{id:"plan.enable"}),initialValue:!0,children:(0,e.jsxs)(r.ZP.Group,{children:[(0,e.jsx)(r.ZP,{value:!0,children:(0,e.jsx)(n._H,{id:"operation.yes"})}),(0,e.jsx)(r.ZP,{value:!1,children:(0,e.jsx)(n._H,{id:"operation.no"})})]})})]})})},H=(0,s.forwardRef)(I),je=t(31650),pe=t(25100),dt=t(76740),Me=t(83396),at=t(87967),tt=t(65320),st=t(79625),lt=t(96584),xt=t(52730),Je=t(25205),Ht=t(88018),Tt=t(58414),Bt=t(38519),Dt=t(16416),_t=t(2605),Pt=t(32237),Ft=t(2514),Wt=t(97207),nt=t.n(Wt),jt=function(u,E){var p=u.ws_id,m=u.onOk,v=(0,s.useState)(!1),he=(0,C.Z)(v,2),Re=he[0],Se=he[1],Ee=(0,s.useState)(""),me=(0,C.Z)(Ee,2),V=me[0],ye=me[1],B=(0,s.useState)(null),le=(0,C.Z)(B,2),we=le[0],Y=le[1],k=(0,s.useState)([]),ee=(0,C.Z)(k,2),ge=ee[0],Ie=ee[1],Ae=(0,s.useState)(null),oe=(0,C.Z)(Ae,2),Fe=oe[0],He=oe[1],Be=(0,s.useState)(null),ze=(0,C.Z)(Be,2),O=ze[0],F=ze[1],W=(0,s.useState)([]),Q=(0,C.Z)(W,2),Ze=Q[0],We=Q[1],fe=(0,s.useState)([]),Z=(0,C.Z)(fe,2),ce=Z[0],Ge=Z[1],b=(0,s.useState)(!0),c=(0,C.Z)(b,2),h=c[0],_=c[1],S=function(){var X=(0,$.Z)((0,g.Z)().mark(function ve(){var Le,rt,Zt;return(0,g.Z)().wrap(function(ut){for(;;)switch(ut.prev=ut.next){case 0:return _(!0),ut.next=3,(0,Pt.qi)({ws_id:p,enable:"True",name:V,page_size:100});case 3:if(Le=ut.sent,rt=Le.data,Zt=Le.code,_(!1),Zt===200){ut.next=10;break}return We([]),ut.abrupt("return");case 10:V.length===0&&Ge(rt),We(rt);case 12:case"end":return ut.stop()}},ve)}));return function(){return X.apply(this,arguments)}}();(0,s.useImperativeHandle)(E,function(){return{show:function(ve,Le,rt,Zt){typeof rt=="number"&&(He(rt),F(Zt)),Se(!0),S(),(0,Wt.isArray)(ve)&&(Ie(ve.map(function(kt){return kt.id})),Y(Le))}}},[]);var Ne=function(){Se(!1),Ie([]),Y(null),F(null),He(null),We([]),ye("")},M=function(){m({list:ce.filter(function(ve){if(ge.filter(function(Le){return ve.id===Le}).length>0)return ve}),dataIndex:we}),Ne()},mt=function(ve){if(ve.target.checked&&ge.length>=15){ie.default.warning("\u5355\u4E2A\u6D4B\u8BD5\u9636\u6BB5\u4E2D\u6D4B\u8BD5\u6A21\u7248\u6570\u91CF\u4E0D\u5F97\u8D85\u8FC715\u4E2A\uFF01");return}var Le=ve.target.value,rt=ge.slice(0);ve.target.checked?rt=rt.concat(Le):rt=rt.filter(function(Zt){return Zt!==Le}),Ie((0,_t.Z)(new Set((0,_t.Z)(rt))))},Ue=function(ve){m((0,o.Z)((0,o.Z)({},ve),{},{rowkey:Fe,dataIndex:we,replaceId:O})),Ne()};return(0,e.jsx)(Tt.Z,{maskClosable:!1,keyboard:!1,title:(0,e.jsx)(n._H,{id:"plan.template.list"}),open:Re,width:"376",onClose:Ne,footer:typeof O!="number"&&(0,e.jsx)("div",{style:{textAlign:"right"},children:(0,e.jsxs)(ne.Z,{children:[(0,e.jsx)(j.Z,{onClick:Ne,children:(0,e.jsx)(n._H,{id:"operation.cancel"})}),(0,e.jsx)(j.Z,{type:"primary",onClick:M,children:(0,e.jsx)(n._H,{id:"operation.ok"})})]})}),children:(0,e.jsxs)(ne.Z,{direction:"vertical",style:{width:"100%"},className:Ye().templateListDrawerSpace,children:[(0,e.jsx)(P.Z,{prefix:(0,e.jsx)(Ft.Z,{}),value:V,onPressEnter:S,onChange:function(ve){var Le=ve.target;return ye(Le.value)}}),(0,e.jsx)(T.Z,{spinning:h,children:typeof Fe!="number"?(0,e.jsx)(Dt.Z.Group,{style:{width:"100%"},value:ge,children:Ze.map(function(X){return(0,e.jsx)(Dt.Z,{style:{width:"100%",marginLeft:0},value:X.id,onChange:mt,children:(0,e.jsx)(lt.Z,{title:X.name,children:(0,e.jsx)(pe.Z.Text,{ellipsis:!0,children:X.name})})},X.id)})}):Ze.map(function(X){return(0,e.jsx)(J.Z,{style:{cursor:"pointer",width:"100%"},children:(0,e.jsx)(lt.Z,{title:X.name,children:O===X.id?(0,e.jsx)(pe.Z.Link,{onClick:function(){return Ue(X)},ellipsis:!0,style:{width:"100%"},children:X.name}):ge.includes(X.id)?(0,e.jsx)(pe.Z.Text,{disabled:!0,type:"secondary",ellipsis:!0,style:{width:"100%"},children:X.name}):(0,e.jsx)("span",{onClick:function(){return Ue(X)},style:{width:"100%"},children:(0,e.jsx)(pe.Z.Text,{style:{width:"100%"},ellipsis:!0,children:X.name})})})},X.id)})})]})})},Vt=(0,s.forwardRef)(jt),Lr=t(77033),kr=t(53919),an,Mr=(0,d.ZP)(i.Z)(an||(an=(0,a.Z)([`
    .ant-form-item{
        margin-bottom: 8px;
    }
`]))),Rr=function(u,E){var p=(0,n.YB)(),m=p.formatMessage,v=u.ws_id,he=u.onOk,Re=(0,s.useState)(!1),Se=(0,C.Z)(Re,2),Ee=Se[0],me=Se[1],V=(0,s.useState)(null),ye=(0,C.Z)(V,2),B=ye[0],le=ye[1],we=i.Z.useForm(),Y=(0,C.Z)(we,1),k=Y[0],ee=(0,s.useState)(!1),ge=(0,C.Z)(ee,2),Ie=ge[0],Ae=ge[1];(0,s.useImperativeHandle)(E,function(){return{show:function(ze,O){me(!0),le(ze),O&&k.setFieldsValue(O)}}});var oe=function(){me(!1),Ae(!1),k.resetFields(),le(null)},Fe=function(){Ie||(Ae(!0),k.validateFields().then(function(){var ze=(0,$.Z)((0,g.Z)().mark(function O(F){return(0,g.Z)().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return Q.next=2,he(F,B);case 2:oe();case 3:case"end":return Q.stop()}},O)}));return function(O){return ze.apply(this,arguments)}}()).catch(function(){Ae(!1)}))},He=(0,s.useMemo)(function(){return typeof B=="number"?(0,e.jsx)(n._H,{id:"plan.edit.machine"}):(0,e.jsx)(n._H,{id:"plan.add.machine"})},[B]);return(0,e.jsx)(Tt.Z,{maskClosable:!1,keyboard:!1,title:He,open:Ee,width:"376",onClose:oe,footer:(0,e.jsx)("div",{style:{textAlign:"right"},children:(0,e.jsxs)(ne.Z,{children:[(0,e.jsx)(j.Z,{onClick:oe,children:(0,e.jsx)(n._H,{id:"operation.cancel"})}),(0,e.jsx)(j.Z,{type:"primary",onClick:Fe,children:(0,e.jsx)(n._H,{id:"operation.ok"})})]})}),children:(0,e.jsxs)(Mr,{layout:"vertical",form:k,scrollToFirstError:!0,children:[(0,e.jsx)(i.Z.Item,{name:"channel_type",label:(0,e.jsx)(n._H,{id:"plan.channel_type"}),initialValue:"toneagent",rules:[{required:!0,message:m({id:"plan.channel_type.message"})}],children:(0,e.jsx)(kr.k,{placeholder:m({id:"plan.channel_type.placeholder"})})}),(0,e.jsx)(i.Z.Item,{name:"machine",validateTrigger:"onBlur",label:"",rules:[function(){return{validator:function(ze,O){return(0,$.Z)((0,g.Z)().mark(function F(){var W,Q,Ze,We;return(0,g.Z)().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:if(W=k.getFieldValue("channel_type"),W){Z.next=4;break}return k.validateFields(["channel_type"]),Z.abrupt("return");case 4:return Z.next=6,(0,Lr.bD)({ws_id:v,ips:[O],channel_type:W});case 6:if(Q=Z.sent,Ze=Q.data,We=Q.msg,Ze.errors.length!==0){Z.next=11;break}return Z.abrupt("return",Promise.resolve());case 11:return Z.abrupt("return",Promise.reject(We.toString()));case 12:case"end":return Z.stop()}},F)}))()}}}],children:(0,e.jsx)(P.Z,{placeholder:"".concat(m({id:"plan.please.enter.IP"})).concat(""),autoComplete:"off"})}),!A.lU.includes(v)&&(0,e.jsx)(i.Z.Item,{name:"script",label:(0,e.jsx)(n._H,{id:"plan.custom.script"}),rules:[{required:!0,message:m({id:"plan.custom.script.cannot.empty"})}],children:(0,e.jsx)(P.Z.TextArea,{rows:4,placeholder:m({id:"plan.custom.script"})})})]})})},Nr=(0,s.forwardRef)(Rr),Yt=t(85311),Ar=t(72882),sn=t(53770),ln,Hr=["svgRef","title"];function $t(){return $t=Object.assign?Object.assign.bind():function(f){for(var u=1;u<arguments.length;u++){var E=arguments[u];for(var p in E)Object.prototype.hasOwnProperty.call(E,p)&&(f[p]=E[p])}return f},$t.apply(this,arguments)}function Br(f,u){if(f==null)return{};var E=Wr(f,u),p,m;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(f);for(m=0;m<v.length;m++)p=v[m],!(u.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(f,p)||(E[p]=f[p]))}return E}function Wr(f,u){if(f==null)return{};var E={},p=Object.keys(f),m,v;for(v=0;v<p.length;v++)m=p[v],!(u.indexOf(m)>=0)&&(E[m]=f[m]);return E}var $r=function(u){var E=u.svgRef,p=u.title,m=Br(u,Hr);return s.createElement("svg",$t({width:"16px",height:"16px",viewBox:"0 0 16 16",ref:E},m),p?s.createElement("title",null,p):null,ln||(ln=s.createElement("g",{id:"\\u521B\\u5EFA\\u8BA1\\u5212",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},s.createElement("g",{id:"\\u6D4B\\u8BD5\\u914D\\u7F6E-\\u5220\\u9664\\u9636\\u6BB5",transform:"translate(-1214.000000, -160.000000)",fillRule:"nonzero"},s.createElement("g",{id:"\\u8868\\u5355",transform:"translate(0.000000, 101.000000)"},s.createElement("g",{id:"\\u7F16\\u7EC4-4",transform:"translate(323.000000, 14.000000)"},s.createElement("g",{id:"\\u7F16\\u7EC4-7",transform:"translate(521.000000, 0.000000)"},s.createElement("g",{id:"\\u5220-\\u9664-red",transform:"translate(370.000000, 45.000000)"},s.createElement("rect",{id:"\\u77E9\\u5F62",fill:"#000000",opacity:0,x:0,y:0,width:16,height:16}),s.createElement("path",{d:"M8.08734375,0.337640625 C6.52017188,0.337640625 5.24823438,1.58004687 5.19410938,3.13982812 L1.54067187,3.13982812 C1.13475,3.13982812 0.802625,3.4695 0.802625,3.87789062 C0.802625,4.28382812 1.13229687,4.61596875 1.5406875,4.61596875 L2.35501562,4.61596875 L2.35501562,12.8724687 C2.35501562,14.4224063 3.40553125,15.6894219 4.70454688,15.6894219 L11.3225156,15.6894219 C12.6190781,15.6894219 13.6720469,14.4297969 13.6720469,12.8724687 L13.6720469,4.62089063 L14.4101094,4.62089063 C14.8160469,4.62089063 15.1481719,4.29120312 15.1481719,3.8828125 C15.1481719,3.476875 14.8185,3.14475 14.4101094,3.14475 L10.9756406,3.14475 C10.9288906,1.5800625 9.6545,0.337640625 8.08734375,0.337640625 L8.08734375,0.337640625 Z M6.57676562,3.13982812 C6.63089062,2.34026562 7.28285937,1.72029687 8.08979688,1.72029687 C8.89673438,1.72029687 9.54870312,2.34271875 9.59545312,3.13982812 L6.57676562,3.13982812 Z M4.70207812,14.3092344 C4.24201562,14.3092344 3.73520312,13.7187812 3.73520312,12.8724687 L3.73520312,4.62089063 L12.2869375,4.62089063 L12.2869375,12.8798437 C12.2869375,13.7237031 11.780125,14.316625 11.3200625,14.316625 L4.70207812,14.316625 L4.70207812,14.3092344 Z M5.69354687,12.5354219 C6.03057812,12.5354219 6.30859375,12.198375 6.30859375,11.7752188 L6.30859375,7.43784375 C6.30859375,7.0146875 6.03304687,6.677625 5.69354687,6.677625 C5.35648437,6.677625 5.07848437,7.0146875 5.07848437,7.43784375 L5.07848437,11.7752188 C5.07848437,12.1959063 5.34910937,12.5354219 5.69354687,12.5354219 Z M7.92004688,12.5354219 C8.25709375,12.5354219 8.53509375,12.198375 8.53509375,11.7752188 L8.53509375,7.43784375 C8.53509375,7.0146875 8.25954688,6.677625 7.92004688,6.677625 C7.583,6.677625 7.30498438,7.0146875 7.30498438,7.43784375 L7.30498438,11.7752188 C7.30498438,12.1959063 7.583,12.5354219 7.92004688,12.5354219 L7.92004688,12.5354219 Z M10.2621719,12.5354219 C10.5992187,12.5354219 10.8772344,12.198375 10.8772344,11.7752188 L10.8772344,7.43784375 C10.8772344,7.0146875 10.6016875,6.677625 10.2621719,6.677625 C9.925125,6.677625 9.647125,7.0146875 9.647125,7.43784375 L9.647125,11.7752188 C9.647125,12.1959063 9.91528125,12.5354219 10.2621719,12.5354219 Z",id:"\\u5F62\\u72B6",fill:"#F5222D"})))))))))},zr=s.forwardRef(function(f,u){return s.createElement($r,$t({svgRef:u},f))}),Aa=t.p+"static/delete.3e8fe546.svg",on,Ur=["svgRef","title"];function zt(){return zt=Object.assign?Object.assign.bind():function(f){for(var u=1;u<arguments.length;u++){var E=arguments[u];for(var p in E)Object.prototype.hasOwnProperty.call(E,p)&&(f[p]=E[p])}return f},zt.apply(this,arguments)}function Kr(f,u){if(f==null)return{};var E=Vr(f,u),p,m;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(f);for(m=0;m<v.length;m++)p=v[m],!(u.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(f,p)||(E[p]=f[p]))}return E}function Vr(f,u){if(f==null)return{};var E={},p=Object.keys(f),m,v;for(v=0;v<p.length;v++)m=p[v],!(u.indexOf(m)>=0)&&(E[m]=f[m]);return E}var Yr=function(u){var E=u.svgRef,p=u.title,m=Kr(u,Ur);return s.createElement("svg",zt({width:"16px",height:"16px",viewBox:"0 0 16 16",ref:E},m),p?s.createElement("title",null,p):null,on||(on=s.createElement("g",{id:"\\u521B\\u5EFA\\u8BA1\\u5212",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd",opacity:.449999988},s.createElement("g",{id:"\\u6D4B\\u8BD5\\u914D\\u7F6E-\\u6DFB\\u52A0\\u65B0\\u9636\\u6BB5\\u540E",transform:"translate(-1214.000000, -160.000000)",fill:"#000000",fillRule:"nonzero"},s.createElement("g",{id:"\\u8868\\u5355",transform:"translate(0.000000, 101.000000)"},s.createElement("g",{id:"\\u7F16\\u7EC4-4",transform:"translate(323.000000, 51.000000)"},s.createElement("g",{id:"\\u7F16\\u7EC4-7",transform:"translate(521.000000, 0.000000)"},s.createElement("g",{id:"\\u5220-\\u9664",transform:"translate(370.000000, 8.000000)"},s.createElement("rect",{id:"\\u77E9\\u5F62",opacity:0,x:0,y:0,width:16,height:16}),s.createElement("path",{d:"M8.08734375,0.337640625 C6.52017188,0.337640625 5.24823438,1.58004687 5.19410938,3.13982812 L1.54067187,3.13982812 C1.13475,3.13982812 0.802625,3.4695 0.802625,3.87789062 C0.802625,4.28382812 1.13229687,4.61596875 1.5406875,4.61596875 L2.35501562,4.61596875 L2.35501562,12.8724687 C2.35501562,14.4224063 3.40553125,15.6894219 4.70454688,15.6894219 L11.3225156,15.6894219 C12.6190781,15.6894219 13.6720469,14.4297969 13.6720469,12.8724687 L13.6720469,4.62089063 L14.4101094,4.62089063 C14.8160469,4.62089063 15.1481719,4.29120312 15.1481719,3.8828125 C15.1481719,3.476875 14.8185,3.14475 14.4101094,3.14475 L10.9756406,3.14475 C10.9288906,1.5800625 9.6545,0.337640625 8.08734375,0.337640625 L8.08734375,0.337640625 Z M6.57676562,3.13982812 C6.63089062,2.34026562 7.28285937,1.72029687 8.08979688,1.72029687 C8.89673438,1.72029687 9.54870312,2.34271875 9.59545312,3.13982812 L6.57676562,3.13982812 Z M4.70207812,14.3092344 C4.24201562,14.3092344 3.73520312,13.7187812 3.73520312,12.8724687 L3.73520312,4.62089063 L12.2869375,4.62089063 L12.2869375,12.8798437 C12.2869375,13.7237031 11.780125,14.316625 11.3200625,14.316625 L4.70207812,14.316625 L4.70207812,14.3092344 Z M5.69354687,12.5354219 C6.03057812,12.5354219 6.30859375,12.198375 6.30859375,11.7752188 L6.30859375,7.43784375 C6.30859375,7.0146875 6.03304687,6.677625 5.69354687,6.677625 C5.35648437,6.677625 5.07848437,7.0146875 5.07848437,7.43784375 L5.07848437,11.7752188 C5.07848437,12.1959063 5.34910937,12.5354219 5.69354687,12.5354219 Z M7.92004688,12.5354219 C8.25709375,12.5354219 8.53509375,12.198375 8.53509375,11.7752188 L8.53509375,7.43784375 C8.53509375,7.0146875 8.25954688,6.677625 7.92004688,6.677625 C7.583,6.677625 7.30498438,7.0146875 7.30498438,7.43784375 L7.30498438,11.7752188 C7.30498438,12.1959063 7.583,12.5354219 7.92004688,12.5354219 L7.92004688,12.5354219 Z M10.2621719,12.5354219 C10.5992187,12.5354219 10.8772344,12.198375 10.8772344,11.7752188 L10.8772344,7.43784375 C10.8772344,7.0146875 10.6016875,6.677625 10.2621719,6.677625 C9.925125,6.677625 9.647125,7.0146875 9.647125,7.43784375 L9.647125,11.7752188 C9.647125,12.1959063 9.91528125,12.5354219 10.2621719,12.5354219 Z",id:"\\u5F62\\u72B6"})))))))))},Qr=s.forwardRef(function(f,u){return s.createElement(Yr,zt({svgRef:u},f))}),Ha=t.p+"static/delete_icon.1ec90906.svg",cn,dn,un,pn,hn,mn,fn,vn,gn,xn,jn,Zn,bn,Cn,yn,_n,Pn,Sn,En,On,Tn,Dn,wn,In,Fn,Ln,kn,Mn,Rn,Nn,An,Hn,Bn,Wn,$n,zn,Un,Kn,Jr=(0,d.ZP)(J.Z)(cn||(cn=(0,a.Z)([`
    width : 100% ;
    height : 100% ;
    // padding-left : 180px ;
    overflow : auto ;
    // padding-right:160px;
    // white-space:nowrap;    
    flex-direction: column;
`]))),Vn=(0,d.ZP)(J.Z)(dn||(dn=(0,a.Z)([`
    height:40px;
    line-height:40px;
    color : rgba(0,0,0,.65);
    text-align:left;
`]))),Yn=d.ZP.div(un||(un=(0,a.Z)([`
    height:40px;
    width:366px;
    position:relative;
`]))),Qn=d.ZP.input(pn||(pn=(0,a.Z)([`
    height: 40px;
    width: 366px;
    background: #FFFFFF;
    border: 2px solid rgba(24,144,255,0.45);
    border-radius: 20px;
    outline:none;
    padding-left : 1em;
    padding-right:1em;
    font-size:16px;
    color : rgba(0,0,0,.65);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
`]))),Jn=`
    height:2px;
    position:absolute;
    top:50%;
    background:#CECECE;
`,Gn=d.ZP.div(hn||(hn=(0,a.Z)([`
    `,`;
    width:20px;
    left:-20px;
`])),Jn),Xn=d.ZP.div(mn||(mn=(0,a.Z)([`
    `,`;
    width:32px;
    right : -32px;
`])),Jn),Qt=`
    position:absolute;
    color:#1890FF;
    cursor:pointer;
    background:#fff;
    border-radius:50%;
`,qn=(0,d.ZP)(Yt.Z)(fn||(fn=(0,a.Z)([`
    `,`
    top : 50%;
    left : -5px;
    transform:translate(-50% , -7px);
`])),Qt),er=(0,d.ZP)(Yt.Z)(vn||(vn=(0,a.Z)([`
    `,`
    top : 50%;
    right : -20px;
    transform:translate(-50% , -7px);
`])),Qt),Gr=d.ZP.span(gn||(gn=(0,a.Z)([`
    display:flex;
    justify-content:center;
    align-items : center;
    width: 14.3px;
    cursor:pointer;
    height:15.4px;
`]))),tr=(0,d.ZP)(zr)(xn||(xn=(0,a.Z)([`
    visibility:hidden;
`]))),nr=(0,d.ZP)(Qr)(jn||(jn=(0,a.Z)([`
    visibility:hidden;
`]))),rr=function(u){var E=(0,s.useState)(!1),p=(0,C.Z)(E,2),m=p[0],v=p[1],he=function(){v(!0)},Re=function(){v(!1)};return(0,e.jsx)(Gr,(0,o.Z)((0,o.Z)({},u),{},{onMouseEnter:he,onMouseLeave:Re,children:m?(0,e.jsx)(tr,{}):(0,e.jsx)(nr,{})}))},Xr=d.ZP.div(Zn||(Zn=(0,a.Z)([`
    width:166px;
    height:100%;
    // background:#CECECE;
    text-align:center;
    display:inline-block;
    position:relative;
`]))),qr=d.ZP.div(bn||(bn=(0,a.Z)([`
    height: 12px;
    width: 12px;
    background: #CECECE;
    border-radius: 24px;
    margin : 55px auto 16px;
`]))),ea=d.ZP.div(Cn||(Cn=(0,a.Z)([`
    font-size: 16px;
    color:rgba(0,0,0,.65);
`]))),ta=d.ZP.div(yn||(yn=(0,a.Z)([`
    width: 75px;
    height: 2px;
    background: #CECECE;
    position: absolute;
    left: 50%;
    top: 60px;
`]))),ar=d.ZP.div(_n||(_n=(0,a.Z)([`
    height: 12px;
    width: 12px;
    background: #FFFFFF;
    border: 1px solid #649FF6;
    border-radius: 24px;
    margin-top:-5px;
`]))),sr=(0,d.ZP)(ar)(Pn||(Pn=(0,a.Z)([`
    background:#1890FF;
`]))),ir=(0,d.ZP)(Ar.Z)(Sn||(Sn=(0,a.Z)([`
    color : #1890FF;
`]))),lr=d.ZP.div(En||(En=(0,a.Z)([`
    width : 100%;
    padding-top:13px;
    overflow:hidden;
`]))),Jt=d.ZP.div(On||(On=(0,a.Z)([`
    height: 46px;
    width: 316px;
    background: rgba(0,0,0,0.04);
    border-radius: 4px;
    display:flex;
    align-items:center;
    cursor:pointer;
    padding-left: 20px;
    flex-wrap:no-wrap;
`]))),Gt=d.ZP.div(Tn||(Tn=(0,a.Z)([`
    width : 100%;
    height : 64px;
    padding-left:40px;
    position:relative;
    padding-top: 18px;
    visibility:hidden;
`]))),or=(0,d.ZP)(Yt.Z)(Dn||(Dn=(0,a.Z)([`
    `,`
    position: relative;
    margin-right:8px;
    margin-left:14px;
`])),Qt),Xt=d.ZP.div(wn||(wn=(0,a.Z)([`
    width : 28px;
    height: 73px;
    border-left : 2px dashed #1890FF;
    border-bottom:2px dashed #1890FF;
    border-top : transparent;
    border-right:transparent;
    border-radius: 0 15px;
    display: inline-block;
    position:absolute;
    left: 25px;
    top: -31px;
    z-index:0;
    &::after {
        content:'';
        width: 0px;
        height: 0px;
        display: inline-block;
        border-left: 5px solid #1890FF;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-right: 5px solid transparent;
        position:absolute;
        right:-10px;
        bottom:-6px;
    }
`]))),cr=d.ZP.div(In||(In=(0,a.Z)([`
    width: 30px;
    height: `,`;
    border-left: 2px solid #CECECE;
    border-bottom: 2px solid #CECECE;
    border-top: transparent;
    border-right: transparent;
    border-radius: 0 15px;
    display: inline-block;
    position: absolute;
    left: 25px;
    top: `,`; 
    &::after {
        content:'';
        width: 0px;
        height: 0px;
        display: inline-block;
        border-left: 5px solid #CECECE;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-right: 5px solid transparent;
        position:absolute;
        right:-10px;bottom:-6px;
    }
`])),function(f){var u=f.type;return u==="env"?"98px":"109px"},function(f){var u=f.type;return u==="env"?"-81px":"-84px"}),dr=d.ZP.div(Fn||(Fn=(0,a.Z)([`
    width : 100%;
    height : 46px;
    line-height:46px;
    text-align:left;
    display:flex;
    // margin-top: 13px;
    padding-left:12px;
    position:relative;
    cursor:pointer;
`]))),ur=(0,d.ZP)(sn.Z)(Ln||(Ln=(0,a.Z)([`
    width:16px;
    height:16px;
    position:absolute;
    right: 15px;
    top: 16px;
    visibility:hidden;
`]))),na=d.ZP.div(kn||(kn=(0,a.Z)([`
    width:100%;
    position:relative;
    padding-left : 49px;
    // transform: translate(0px, -5px);
    // padding-top:13px;
    :hover {
        `,` {
            background: rgba(0,0,0,0.04);
            border-radius: 4px;
            color: #1890FF;
        }
        `,` {
            visibility:visible;
        }
    }
`])),dr,ur),ra=d.ZP.div(Mn||(Mn=(0,a.Z)([`
    width:20px;
    height:20px;
    border-radius:50%;
    background:rgb(24,144,255 , .1);
    color:rgb(24,144,255);
    text-align:center;
    line-height:20px;
    margin-top:13px;
    // margin-top:6px;
    margin-right:10px;
`]))),aa=d.ZP.div(Rn||(Rn=(0,a.Z)([`
    width:calc(100% - 30px);
`]))),Ba=d.ZP.div(Nn||(Nn=(0,a.Z)([`
    width:2px;
    height:`,`px;
`])),function(f){return f.index*30}),pr=d.ZP.div(An||(An=(0,a.Z)([`
    width : 398px;
    min-height : 100%;
    padding : 0 10px;
    text-align:center;
    margin-right: 31px;
    display:inline-block;
    position:relative;
    &:hover {
        background: #FAFAFA;
        `,` , 
        `,` ,
        `,` {
            visibility:visible;
        }
    }
    &:last-child{
        margin-right:160px
    }
`])),tr,Gt,nr),hr=d.ZP.div(Hn||(Hn=(0,a.Z)([`
    color:rgba(0,0,0,.85);
    font-weight:600;
`]))),mr=d.ZP.div(Bn||(Bn=(0,a.Z)([`
    color:rgba(0,0,0,.65);
    word-break: break-all;
    width:100%;
    max-height:45px;
    overflow: scroll;
`]))),sa=d.ZP.div(Wn||(Wn=(0,a.Z)([`
    position:absolute;
    left : 10px;
    top : 7px ;
    width:20px;
    height:20px;
    border-radius:50%;
    background:rgb(24,144,255 , .1);
    color:rgb(24,144,255);
    text-align:center;
`]))),fr=(0,d.ZP)(sn.Z)($n||($n=(0,a.Z)([`
    position : absolute;
    right:10px;
    top:10px;
    cursor:pointer;
    visibility:hidden;
`]))),ia=d.ZP.div(zn||(zn=(0,a.Z)([`
    width: 310px;
    position: relative;
    text-align: left;
    padding-left: 40px;
    padding-top:8px;
    padding-right:35px;
    padding-bottom:8px;
    &:hover {
        background: rgba(0,0,0,0.04);
        border-radius: 4px;
        `,` , 
        `,` { color: #1890FF; }
        `,` { visibility: visible; }
    }
`])),hr,mr,fr),la=d.ZP.div(Un||(Un=(0,a.Z)([`
    width: 100%;
    padding-left: 55px;
    cursor:pointer;
    // padding-top: 18px;
    position: relative;
`]))),oa=(0,d.ZP)(Gt)(Kn||(Kn=(0,a.Z)([`
    padding-left: 50px;
    cursor:pointer;
    `,` {
        width: 28px;
        height: 126px;
        border-left: 2px dashed #1890FF;
        border-bottom: 2px dashed #1890FF;
        border-top: transparent;
        border-right: transparent;
        border-radius: 0 15px;
        display: inline-block;
        position: absolute;
        left: 25px;
        top: -84px;
        z-index: 0;
    }
    `,` { padding-left : 0 ;}
`])),Xt,Jt),ca=["replaceId","dataIndex","rowkey"],da=function(u){var E=(0,n.YB)(),p=E.formatMessage,m=u.show,v=u.onChange,he=u.template,Re=(0,y.UO)(),Se=Re.ws_id,Ee={name:p({id:"job.types.env"}),machine_info:[],visible:!1},me={name:p({id:"plan.new.stage"}),template:[],impact_next:!1},V=(0,s.useState)([me]),ye=(0,C.Z)(V,2),B=ye[0],le=ye[1],we=(0,s.useState)(Ee),Y=(0,C.Z)(we,2),k=Y[0],ee=Y[1],ge=(0,s.useRef)(),Ie=(0,s.useRef)();(0,s.useEffect)(function(){if(he&&JSON.stringify(he)!=="{}"){var b=he.test_config,c=he.env_prep;b&&le(b),c&&ee((0,o.Z)((0,o.Z)({},c),{},{visible:!0}))}},[he]);var Ae=function(){ee((0,o.Z)((0,o.Z)({},k),{},{visible:!0}))},oe=function(){return{name:"".concat(p({id:"plan.new.stage"})).concat(B.length+1),template:[],impact_next:!1}},Fe=function(c){if(B.length>4){ie.default.warning(p({id:"plan.stage.maximum5"}));return}var h=[];B.forEach(function(_,S){S===c&&h.push(oe()),h.push(_)}),c===B.length&&h.push(oe()),le(h)},He=function(c){var h=c.hasEnv,_=c.index,S=c.children;return(0,e.jsx)(tt.Z,{trigger:["click"],overlay:(0,e.jsxs)(Je.Z,{children:[h&&(0,e.jsx)(Je.Z.Item,{onClick:Ae,children:(0,e.jsxs)(ne.Z,{children:[(0,e.jsx)(ir,{}),(0,e.jsx)("span",{children:(0,e.jsx)(n._H,{id:"plan.pre.stage"})})]})}),(0,e.jsx)(Je.Z.Item,{onClick:function(){return Fe(_)},children:(0,e.jsxs)(ne.Z,{children:[(0,e.jsx)(ir,{}),(0,e.jsx)("span",{children:(0,e.jsx)(n._H,{id:"plan.new.stage"})})]})})]}),placement:"bottom",arrow:!0,children:(0,e.jsx)(lt.Z,{placement:"top",title:p({id:"plan.add.stage"}),children:S})})},Be=function(c,h){le(B.map(function(_,S){return S===h?(0,o.Z)((0,o.Z)({},_),{},{impact_next:c}):_}))},ze=function(c){B.length!==1&&le(B.filter(function(h,_){return c!==_}))},O=function(){ee(Ee)},F=function(){Ie.current.show()},W=function(c){ge.current.show(B[c].template,c)},Q=function(c,h){if(c.length>20){ie.default.warning(p({id:"plan.enter.up.20.characters"}));return}le(B.map(function(_,S){return S===h?(0,o.Z)((0,o.Z)({},_),{},{name:c}):_}))},Ze=function(c){if(c.list){var h=c.list,_=c.dataIndex;le(B.map(function(Ue,X){return _===X?(0,o.Z)((0,o.Z)({},Ue),{},{template:h}):Ue}))}else{var S=c.replaceId,Ne=c.dataIndex,M=c.rowkey,mt=(0,L.Z)(c,ca);le(B.map(function(Ue,X){return X===Ne?(0,o.Z)((0,o.Z)({},Ue),{},{template:Ue.template.map(function(ve,Le){return Le===M?mt:ve})}):Ue}))}},We=function(c,h){if(h!=null)return ee((0,o.Z)((0,o.Z)({},k),{},{machine_info:k.machine_info.map(function(_,S){return h===S?c:_})}));ee((0,o.Z)((0,o.Z)({},k),{},{machine_info:k.machine_info.concat(c)}))},fe=function(c){ee((0,o.Z)((0,o.Z)({},k),{},{machine_info:k.machine_info.filter(function(h,_){return c!==_})}))};(0,s.useEffect)(function(){v({test_config:B,env_prep:k})},[B,k]);var Z=function(c,h){le(B.map(function(_,S){if(S===c){var Ne=_.template.filter(function(M){return M.id!==h});return(0,o.Z)((0,o.Z)({},_),{},{template:Ne})}return _}))},ce=function(c,h){Ie.current.show(c,h)},Ge=function(c,h,_){ge.current.show(B[c].template,c,h,_)};return(0,e.jsx)(Jr,{style:{display:m},children:(0,e.jsxs)(J.Z,{style:{height:"100%"},children:[(0,e.jsxs)("div",{style:{display:"flex",margin:"0 auto"},children:[(0,e.jsxs)(Xr,{children:[(0,e.jsx)(qr,{}),(0,e.jsx)(ea,{children:(0,e.jsx)(n._H,{id:"plan.start"})}),(0,e.jsx)(ta,{})]}),k.visible&&(0,e.jsxs)(pr,{children:[(0,e.jsxs)(Vn,{justify:"space-between",align:"middle",children:[(0,e.jsx)("span",{}),(0,e.jsx)(rr,{onClick:O})]}),(0,e.jsxs)(Yn,{children:[(0,e.jsx)(Gn,{}),(0,e.jsx)(Qn,{value:k.name,onChange:function(c){var h=c.target;return ee((0,o.Z)((0,o.Z)({},k),{},{name:h.value}))}}),(0,e.jsxs)(Xn,{children:[(0,e.jsx)(sr,{}),(0,e.jsx)(He,{index:0,children:(0,e.jsx)(er,{})})]})]}),(0,e.jsxs)(lr,{children:[k.machine_info.map(function(b,c){return(0,e.jsxs)(la,{children:[(0,e.jsx)(cr,{type:"env"}),(0,e.jsxs)(ia,{onClick:function(_){_.stopPropagation(),ce(c,b)},children:[(0,e.jsx)(fr,{onClick:function(_){_.stopPropagation(),fe(c)}}),(0,e.jsx)(sa,{children:c+1}),(0,e.jsxs)(hr,{children:[b.machine," "]}),(0,e.jsx)(mr,{children:b.script})]})]},c)}),(0,e.jsxs)(oa,{onClick:F,children:[(0,e.jsx)(Xt,{}),(0,e.jsxs)(Jt,{children:[(0,e.jsx)(or,{}),(0,e.jsx)("span",{children:(0,e.jsx)(n._H,{id:"plan.add.machine"})})]})]})]})]}),B.map(function(b,c){return(0,e.jsxs)(pr,{children:[(0,e.jsxs)(Vn,{justify:"space-between",align:"middle",children:[(0,e.jsxs)(ne.Z,{children:[(0,e.jsx)("span",{children:(0,e.jsx)(n._H,{id:"plan.subsequent.steps"})}),(0,e.jsx)(Me.Z,{onChange:function(_){return Be(_,c)},checkedChildren:(0,e.jsx)(n._H,{id:"operation.yes"}),unCheckedChildren:(0,e.jsx)(n._H,{id:"operation.no"}),checked:b.impact_next})]}),(0,e.jsx)(rr,{onClick:function(){return ze(c)}})]}),(0,e.jsxs)(Yn,{children:[(0,e.jsx)(Gn,{children:c===0&&!k.visible?(0,e.jsx)(He,{hasEnv:c===0&&!k.visible,index:c,children:(0,e.jsx)(qn,{})}):(0,e.jsx)(lt.Z,{placement:"top",title:p({id:"plan.add.stage"}),children:(0,e.jsx)(qn,{onClick:function(){return Fe(c)}})})}),(0,e.jsx)(Qn,{value:b.name,onChange:function(_){var S=_.target;return Q(S.value,c)}}),(0,e.jsxs)(Xn,{children:[b.impact_next?(0,e.jsx)(sr,{}):(0,e.jsx)(ar,{}),(0,e.jsx)(lt.Z,{placement:"top",title:p({id:"plan.add.stage"}),children:(0,e.jsx)(er,{onClick:function(){return Fe(c+1)}})})]})]}),(0,e.jsxs)(lr,{children:[b.template.map(function(h,_){return(0,e.jsxs)(na,{children:[(0,e.jsx)(cr,{}),(0,e.jsxs)(dr,{onClick:function(){return Ge(c,_,h.id)},children:[(0,e.jsx)(ra,{children:_+1}),(0,e.jsx)(aa,{children:(0,e.jsx)(lt.Z,{title:h.name,children:(0,e.jsx)(pe.Z.Text,{ellipsis:!0,style:{width:"90%"},children:h.name})})}),(0,e.jsx)(ur,{onClick:function(Ne){Ne.stopPropagation(),Z(c,h.id)}})]})]},_)}),b.template.length<15&&(0,e.jsxs)(Gt,{children:[(0,e.jsx)(Xt,{}),(0,e.jsxs)(Jt,{onClick:function(){return W(c)},children:[(0,e.jsx)(or,{}),(0,e.jsx)("span",{children:(0,e.jsx)(n._H,{id:"plan.add.template"})})]})]})]})]},c)})]}),(0,e.jsx)(Vt,{ws_id:Se,ref:ge,onOk:Ze}),(0,e.jsx)(Nr,{ws_id:Se,ref:Ie,onOk:We})]})})},ua=da,Wa=t(13998),pa=t(76784),vr=t(78358),ha=t(26449),gr=t.n(ha),ma=(0,s.forwardRef)(function(f,u){var E=(0,n.YB)(),p=E.formatMessage,m=f.show,v=f.template,he=f.route,Re=(0,y.UO)(),Se=Re.ws_id,Ee=i.Z.useForm(),me=(0,C.Z)(Ee,1),V=me[0],ye=(0,s.useState)(!1),B=(0,C.Z)(ye,2),le=B[0],we=B[1],Y=(0,s.useState)([]),k=(0,C.Z)(Y,2),ee=k[0],ge=k[1],Ie=(0,s.useState)("no"),Ae=(0,C.Z)(Ie,2),oe=Ae[0],Fe=Ae[1],He=(0,s.useState)([]),Be=(0,C.Z)(He,2),ze=Be[0],O=Be[1],F=(0,s.useState)([]),W=(0,C.Z)(F,2),Q=W[0],Ze=W[1],We=function(){var fe=(0,$.Z)((0,g.Z)().mark(function Z(){var ce,Ge,b,c,h;return(0,g.Z)().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.prev=0,S.next=3,(0,G.MD)({ws_id:Se,page_size:99999});case 3:ce=S.sent,Ge=ce.code,b=ce.data,Ge===200&&(c=nt().isArray(b)?b:[],h=nt().find(c,{is_default:!0}),ge(c),he.name==="Create"&&V.setFieldsValue({report_template_id:h.id})),S.next=12;break;case 9:S.prev=9,S.t0=S.catch(0),console.log(S.t0);case 12:case"end":return S.stop()}},Z,null,[[0,9]])}));return function(){return fe.apply(this,arguments)}}();return(0,s.useEffect)(function(){We()},[]),(0,s.useEffect)(function(){if(v&&Object.keys(v).length){var fe=v.auto_report,Z=v.group_method,ce=Z===void 0?"no":Z,Ge=v.base_group,b=v.base_group_info,c=v.report_template_id,h=v.test_config,_=b||{},S=_.stage_id;if(we(fe),fe){var Ne=nt().find(ee,{is_default:!0}),M={};if(ce==="job"&&(M={base_group_job:S?[S,Ge]:[]}),ce==="stage"&&(M={base_group_stage:Ge||void 0}),V.setFieldsValue((0,o.Z)((0,o.Z)((0,o.Z)({},v),{},{group_method:ce},M),{},{report_template_id:c||nt().get(Ne,"id")})),Fe(ce),h){var mt=(h==null?void 0:h.map(function(Ue,X){var ve;return{value:X+1,label:Ue.name,children:(Ue==null||(ve=Ue.template)===null||ve===void 0?void 0:ve.map(function(Le){return{value:Le.id,label:Le.name}}))||[]}}))||[];O(h),Ze(mt)}}}},[v,ee]),(0,s.useImperativeHandle)(u,function(){return{validate:function(){var fe=(0,$.Z)((0,g.Z)().mark(function ce(){return(0,g.Z)().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.abrupt("return",V.validateFields());case 1:case"end":return b.stop()}},ce)}));function Z(){return fe.apply(this,arguments)}return Z}(),refreshData:function(Z){if(Z){var ce=(Z==null?void 0:Z.map(function(S,Ne){var M;return{value:Ne+1,label:S.name,key:Ne,children:(S==null||(M=S.template)===null||M===void 0?void 0:M.map(function(mt){return{value:mt.id,label:mt.name}}))||[]}}))||[];if(O(Z),Ze(ce),oe==="stage"){var Ge=V.getFieldValue("base_group_stage");Ge>(Z==null?void 0:Z.length)&&V.setFieldsValue({base_group_stage:void 0})}else if(oe==="job"){var b=V.getFieldValue("base_group_job");if(Array.isArray(b)){var c,h,_=b[0];_&&!((c=ce[_-1])!==null&&c!==void 0&&(h=c.children)!==null&&h!==void 0&&h.map(function(S){return S.value}).includes(b[1]))&&V.setFieldsValue({base_group_job:void 0})}}}}}}),(0,e.jsx)("div",{style:{width:"100%",height:"100%",paddingTop:50,display:m},children:(0,e.jsxs)(i.Z,{form:V,layout:"horizontal",size:"small",labelCol:{span:4},wrapperCol:{span:12},style:{width:"100%"},colon:!1,className:gr().job_plan_form,initialValues:{group_method:"no"},children:[(0,e.jsx)(i.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.generate.reports"}),name:"auto_report",children:(0,e.jsx)(Me.Z,{onChange:we,checked:le,size:"default",checkedChildren:(0,e.jsx)(n._H,{id:"plan.checked"}),unCheckedChildren:(0,e.jsx)(n._H,{id:"plan.unChecked"})})}),le&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.report_name"}),children:(0,e.jsxs)("div",{style:{position:"relative"},children:[(0,e.jsx)(i.Z.Item,{name:"report_name",children:(0,e.jsx)(P.Z,{autoComplete:"off",placeholder:p({id:"plan.report_name.placeholder"},{Job_name:"{Job_name}",report_seq_id:"{report_seq_id}"})})}),(0,e.jsx)("div",{style:{position:"absolute",right:-22,top:-4},children:(0,e.jsx)(vr.fD,{title:"",placement:"bottomRight",desc:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(J.Z,{children:(0,e.jsx)(pe.Z.Text,{children:(0,e.jsx)(n._H,{id:"plan.available.placeholders"})})}),(0,e.jsx)(J.Z,{children:(0,e.jsx)(pe.Z.Text,{children:"{date} {plan_name} {plan_id} {product_version}"})})]})})})]})}),(0,e.jsx)(i.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.select.report.template"}),name:"report_template_id",children:(0,e.jsx)(D.Z,{placeholder:p({id:"please.select"}),getPopupContainer:function(Z){return Z.parentNode},showSearch:!0,optionFilterProp:"children",filterOption:function(Z,ce){return ce.children.toLowerCase().indexOf(Z.toLowerCase())>=0},children:ee.map(function(fe){return(0,e.jsx)(D.Z.Option,{value:fe.id,children:fe.name},fe.id)})})}),(0,e.jsx)(i.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.group_method"}),name:"group_method",children:(0,e.jsxs)(r.ZP.Group,{onChange:function(Z){Fe(Z.target.value)},children:[(0,e.jsx)(r.ZP,{value:"no",children:(0,e.jsx)(n._H,{id:"plan.group_method.not"})}),(0,e.jsx)(r.ZP,{value:"job",children:(0,e.jsx)(n._H,{id:"plan.group_method.job"})}),(0,e.jsx)(r.ZP,{value:"stage",children:(0,e.jsx)(n._H,{id:"plan.group_method.stage"})})]})}),oe==="job"&&(0,e.jsx)(i.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.select.base_group"}),name:"base_group_job",rules:[{required:!0,message:p({id:"plan.select.base_group.message"})}],children:(0,e.jsx)(pa.Z,{placeholder:p({id:"plan.select.base_group.message"}),options:Q||[],expandTrigger:"hover",className:gr().cascaderStyle})}),oe==="stage"&&(0,e.jsx)(i.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.select.base_group"}),name:"base_group_stage",rules:[{required:!0,message:p({id:"plan.select.base_group.message"})}],children:(0,e.jsx)(D.Z,{placeholder:p({id:"plan.select.base_group.message"}),getPopupContainer:function(Z){return Z.parentNode},children:ze.map(function(fe,Z){return(0,e.jsx)(D.Z.Option,{value:Z+1,children:fe.name},Z+1)})})}),(0,e.jsx)(i.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.report_description"}),name:"report_description",rules:[{required:!1},{max:500,message:p({id:"plan.limit.characters"})}],children:(0,e.jsx)(P.Z.TextArea,{placeholder:p({id:"plan.report_description.placeholder"})})})]})]})})}),Lt=t(68176),qt="plan.trigger.rule",fa=[["format",5,"example"],["symbols",4],["example",4]],va=function(){var u=(0,n.YB)();return(0,e.jsx)("div",{style:{position:"absolute",right:-22,top:-4},children:(0,e.jsx)(vr.fD,{title:"",placement:"left",desc:(0,e.jsx)(ne.Z,{direction:"vertical",style:{width:"100%"},children:fa.map(function(E){var p,m=(0,C.Z)(E,3),v=m[0],he=m[1],Re=m[2];return(0,e.jsxs)(s.Fragment,{children:[(0,e.jsx)(pe.Z.Text,{strong:!0,children:u.formatMessage({id:"".concat(qt,".").concat(v)})}),Re&&(0,e.jsx)(pe.Z.Text,{children:u.formatMessage({id:"".concat(qt,".").concat(v,".").concat(Re)})}),(p=new Array(he).fill(""))===null||p===void 0?void 0:p.map(function(Se,Ee){return(0,e.jsx)(pe.Z.Text,{style:{textIndent:"2em",display:"inline-block"},children:u.formatMessage({id:"".concat(qt,".").concat(v,".").concat(Ee+1)})},Ee)})]},v)})})})})},ga=va,xa=function(u,E){var p=(0,n.YB)(),m=p.formatMessage,v=u.show,he=u.template,Re=i.Z.useForm(),Se=(0,C.Z)(Re,1),Ee=Se[0],me=(0,s.useState)(!1),V=(0,C.Z)(me,2),ye=V[0],B=V[1],le=(0,s.useState)([]),we=(0,C.Z)(le,2),Y=we[0],k=we[1];return(0,s.useImperativeHandle)(E,function(){return{validate:function(){var ee=(0,$.Z)((0,g.Z)().mark(function Ie(){return(0,g.Z)().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:return oe.abrupt("return",Ee.validateFields());case 1:case"end":return oe.stop()}},Ie)}));function ge(){return ee.apply(this,arguments)}return ge}()}}),(0,s.useEffect)(function(){if(he&&JSON.stringify(he)!=="{}"){var ee=he.cron_schedule;B(ee),Ee.setFieldsValue(he)}},[he]),(0,e.jsx)("div",{style:{width:"100%",height:"100%",paddingTop:50,display:v},children:(0,e.jsxs)(i.Z,{form:Ee,layout:"horizontal",size:"small",labelCol:{span:4},wrapperCol:{span:12},style:{width:"100%"},colon:!1,className:Ye().job_plan_form,initialValues:{blocking_strategy:1},children:[(0,e.jsx)(i.Z.Item,{name:"cron_schedule",label:(0,e.jsx)(n._H,{id:"plan.timed.trigger"}),valuePropName:"checked",children:(0,e.jsx)(Me.Z,{onChange:B,size:"default",checked:!0,checkedChildren:(0,e.jsx)(n._H,{id:"operation.open"}),unCheckedChildren:(0,e.jsx)(n._H,{id:"operation.close"})})}),ye&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.trigger.rule"}),required:!0,children:(0,e.jsxs)("div",{style:{position:"relative"},children:[(0,e.jsx)(i.Z.Item,{name:"cron_info",validateTrigger:"onBlur",rules:[function(){return{validator:function(ge,Ie){return(0,$.Z)((0,g.Z)().mark(function Ae(){var oe,Fe,He,Be;return(0,g.Z)().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:if(k([]),Ie){O.next=3;break}return O.abrupt("return",Promise.reject(m({id:"plan.cron_info.empty"})));case 3:return O.next=5,(0,Lt.uy)({cron_express:Ie});case 5:if(O.t0=O.sent,O.t0){O.next=8;break}O.t0={};case 8:if(oe=O.t0,Fe=oe.code,He=oe.data,Be=He===void 0?[]:He,Fe!==200){O.next=15;break}return k(Be),O.abrupt("return",Promise.resolve());case 15:return O.abrupt("return",Promise.reject(m({id:"plan.cron_info.reject"})));case 16:case"end":return O.stop()}},Ae)}))()}}}],children:(0,e.jsx)(P.Z,{autoComplete:"off",placeholder:m({id:"plan.trigger.rule"})})}),(0,e.jsx)(ga,{})]})}),!!(Y!=null&&Y.length)&&(0,e.jsxs)(i.Z.Item,{label:" ",children:[(0,e.jsxs)("span",{children:[(0,e.jsx)(n._H,{id:"plan.next.three.trigger.times"}),"\uFF1A"]}),Y.map(function(ee,ge){return(0,e.jsxs)("div",{style:{marginLeft:20},children:[ge+1,". ",ee]},ee)})]}),(0,e.jsx)(i.Z.Item,{name:"blocking_strategy",label:(0,e.jsx)(n._H,{id:"plan.blocking_strategy"}),children:(0,e.jsxs)(r.ZP.Group,{children:[(0,e.jsx)(r.ZP,{value:1,children:(0,e.jsx)(n._H,{id:"plan.blocking_strategy1"})}),(0,e.jsx)("br",{}),(0,e.jsx)(r.ZP,{value:2,children:(0,e.jsx)(n._H,{id:"plan.blocking_strategy2"})}),(0,e.jsx)("br",{}),(0,e.jsx)(r.ZP,{value:3,children:(0,e.jsx)(n._H,{id:"plan.blocking_strategy3"})}),(0,e.jsx)("br",{})]})})]})]})})},ja=(0,s.forwardRef)(xa),xr=t(526),Za=t(18406),ba=t(55679),jr,Zr,br,Cr,yr,_r,Pr,Sr,Ca=d.ZP.div(jr||(jr=(0,a.Z)([`
    width : 100%;
    /* height : `,`px; */
    background-color: #f5f5f5;
`])),function(f){return f.height-50}),ya=(0,d.ZP)(J.Z)(Zr||(Zr=(0,a.Z)([`
    height : `,`px;
    width : 100%;
    padding-left : 20px;
    background : #fff;

    .dom-hide {
        display: none;
    }
`])),function(f){return f.height-100}),_a=d.ZP.div(br||(br=(0,a.Z)([`
    height : 100%;
    width : 240px;
    border-right : 1px solid rgba(0,0,0,.1);
    padding-top : 24px;
    padding-left : 65px;
    `,`
    `,`
`])),function(f){var u=f.state;return u&&`
            .ant-steps-item-process .ant-steps-item-tail::after{
                background-color: #1890ff!important;
            }
            .ant-steps-item-wait .ant-steps-item-icon {
                border-color: #1890ff!important;
            }
            .ant-steps-item-wait .ant-steps-item-tail::after{
                background-color: #1890ff!important;
            }
            .ant-steps-item-wait .ant-steps-icon {
                color : #1890ff!important;
            }
        `},function(f){var u=f.enLocale;return u&&`
            width: 300px;
        `}),Pa=d.ZP.div(Cr||(Cr=(0,a.Z)([`
    height : 100%;
    width : calc( 100% - 240px );
    overflow : hidden;
    `,`
`])),function(f){var u=f.enLocale;return u&&`
            width: calc( 100% - 300px );
        `}),Sa=d.ZP.div(yr||(yr=(0,a.Z)([`
    width : 100% ;
    height : 50px ;
    background : #fff ;
    border-bottom : 1px solid rgba(0,0,0,.1) ;
    padding-left : 20px ;
    padding-right : 20px;
`]))),Ea=d.ZP.div(_r||(_r=(0,a.Z)([`
    width : 100% ;
    height : calc( 100% - 50px ) ;
    overflow : hidden ;
`]))),Oa=(0,d.ZP)(J.Z)(Pr||(Pr=(0,a.Z)([`
    height : 50px;
    width : 100%;
    padding-left : 20px;
`]))),Ta=(0,d.ZP)(J.Z)(Sr||(Sr=(0,a.Z)([`
    // height: 140px;
    width: 1072px;
    background: rgba(0,0,0,0.04);
    padding:20px 40px;
    margin:0 auto;
`]))),Da=t(74711),Ut=t.n(Da),Kt=t(20905),wa=["headers","devel","hotfix_install","scripts","kernel","build_config","build_machine","code_branch","code_repo","commit_id","compile_branch","cpu_arch","product_name"],Ia=["headers","devel","hotfix_install","scripts","kernel","build_config","build_machine","code_branch","code_repo","kernel_packages","commit_id","compile_branch","cpu_arch","product_name"],Fa=["base_group_job","base_group_stage"],La=function(u){var E=(0,n.YB)(),p=E.formatMessage,m=(0,n.Kd)()==="en-US",v=(0,n.md)(),he=(0,xr.CR)(),Re=he.height,Se=(0,y.TH)(),Ee=Se.state,me=u.route;(0,xr.jk)("Workspace.TestPlan.".concat(me.name));var V=u.match.params,ye=V.ws_id,B=V.plan_id,le=(0,s.useState)(0),we=(0,C.Z)(le,2),Y=we[0],k=we[1],ee=(0,s.useState)(me.name!=="Create"),ge=(0,C.Z)(ee,2),Ie=ge[0],Ae=ge[1],oe=(0,s.useState)(!0),Fe=(0,C.Z)(oe,2),He=Fe[0],Be=Fe[1],ze=(0,s.useState)(!1),O=(0,C.Z)(ze,2),F=O[0],W=O[1],Q=(0,s.useRef)(),Ze=(0,s.useRef)(),We=(0,s.useRef)(),fe=(0,s.useState)({basic:{},pipline:{},touch:{}}),Z=(0,C.Z)(fe,2),ce=Z[0],Ge=Z[1],b=(0,s.useState)(null),c=(0,C.Z)(b,2),h=c[0],_=c[1],S=(0,s.useState)(null),Ne=(0,C.Z)(S,2),M=Ne[0],mt=Ne[1],Ue=function(){var de=(0,$.Z)((0,g.Z)().mark(function ae(){var R,x,N;return(0,g.Z)().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:return _e.next=2,(0,Lt.jW)({ws_id:ye,id:B});case 2:R=_e.sent,x=R.data,N=R.code,N===200&&(_(x),Ae(!1));case 6:case"end":return _e.stop()}},ae)}));return function(){return de.apply(this,arguments)}}();(0,s.useEffect)(function(){var de=me.name;de!=="Create"&&Ue()},[me]);var X=function(){k(Y-1)},ve=function(){return new Promise(function(ae,R){var x=ce.pipline,N=x||{},be=N.env_prep,_e=be===void 0?{}:be,U=N.test_config,De=U===void 0?[]:U,se=p({id:"plan.cannot.be.empty"});_e.machine_info&&!_e.machine_info.length&&(ie.default.error("".concat(_e.name).concat(se)),R()),De.length?De.forEach(function(bt){var St=bt.name,Ct=bt.template,Et=Ct===void 0?[]:Ct;Et.length||(ie.default.error("".concat(St).concat(se)),R())}):(ie.default.error("".concat(_e.name).concat(se)),R()),ae()})},Le=function(){var de=(0,$.Z)((0,g.Z)().mark(function ae(R){var x,N,be,_e,U,De,se,bt,St,Ct,Et,Mt,Rt,Nt,At;return(0,g.Z)().wrap(function(Oe){for(;;)switch(Oe.prev=Oe.next){case 0:if(!F){Oe.next=2;break}return Oe.abrupt("return");case 2:if(W(!0),Oe.prev=3,Y!==0){Oe.next=10;break}return Oe.next=7,Q.current.validate();case 7:x=Oe.sent,N=x.headers,be=x.devel,_e=x.hotfix_install,U=x.scripts,De=x.kernel,se=x.build_config,bt=x.build_machine,St=x.code_branch,Ct=x.code_repo,Et=x.commit_id,Mt=x.compile_branch,Rt=x.cpu_arch,Nt=x.product_name,At=(0,L.Z)(x,wa),Ge((0,o.Z)((0,o.Z)({},ce),{},{basic:(0,o.Z)((0,o.Z)({},At),{},{kernel_info:{headers:N,devel:be,hotfix_install:_e,kernel:De,scripts:U},build_pkg_info:{build_config:se,build_machine:bt,code_branch:St,code_repo:Ct,commit_id:Et,compile_branch:Mt,cpu_arch:Rt,name:Nt}})}));case 10:if(Y!==1){Oe.next=15;break}return Oe.next=13,ve();case 13:Oe.next=18;break;case 15:if(Y!==2){Oe.next=18;break}return Oe.next=18,We.current.validate();case 18:me.name==="Edit"&&R!=="NextStep"?k(R):k(Y+1),Oe.next=24;break;case 21:Oe.prev=21,Oe.t0=Oe.catch(3),console.log(Oe.t0,8888);case 24:W(!1);case 25:case"end":return Oe.stop()}},ae,null,[[3,21]])}));return function(R){return de.apply(this,arguments)}}(),rt=function(){var de=(0,$.Z)((0,g.Z)().mark(function ae(R){return(0,g.Z)().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:if(!(R>Y)){N.next=5;break}return N.next=3,Le(R);case 3:N.next=6;break;case 5:k(R);case 6:case"end":return N.stop()}},ae)}));return function(R){return de.apply(this,arguments)}}(),Zt=function(ae){var R=ae.test_config,x=ae.env_prep;Ge((0,o.Z)((0,o.Z)({},ce),{},{pipline:{env_prep:x.visible?x:{},test_config:R.map(function(N){return(0,o.Z)((0,o.Z)({},N),{},{template:N.template.map(function(be){return be.id})})})}})),We.current.refreshData(R)},kt=function(ae){if(ae){var R=ae.errorFields;if(R&&nt().isArray(R)&&R.length>0){var x=R[0].errors;ie.default.error(x.toString())}}},ut=function(){var de=(0,$.Z)((0,g.Z)().mark(function ae(){var R,x,N,be,_e,U,De,se,bt,St,Ct,Et,Mt,Rt,Nt,At,tn,Oe,Er,Or,Tr,Dr,wr,nn,wt,rn,Ir,Fr;return(0,g.Z)().wrap(function(ft){for(;;)switch(ft.prev=ft.next){case 0:return ft.next=2,Q.current.validate();case 2:return x=ft.sent,ft.next=5,We.current.validate();case 5:return N=ft.sent,ft.next=8,Ze.current.validate();case 8:return be=ft.sent,_e=ce.pipline,U=x.headers,De=x.devel,se=x.hotfix_install,bt=x.scripts,St=x.kernel,Ct=x.build_config,Et=x.build_machine,Mt=x.code_branch,Rt=x.code_repo,Nt=x.kernel_packages,At=x.commit_id,tn=x.compile_branch,Oe=x.cpu_arch,Er=x.product_name,Or=(0,L.Z)(x,Ia),Tr=N.base_group_job,Dr=N.base_group_stage,wr=(0,L.Z)(N,Fa),nn=N.group_method,wt=(0,o.Z)({},wr),nn==="job"&&(rn=(0,C.Z)(Tr,2),Ir=rn[0],Fr=rn[1],wt=Object.assign(wt,{stage_id:Ir,base_group:Fr})),nn==="stage"&&(wt=Object.assign(wt,{base_group:Dr})),ft.abrupt("return",(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},Or),{},{kernel_info:{headers:U,devel:De,hotfix_install:se,scripts:bt,kernel:St,kernel_packages:Nt},build_pkg_info:{build_config:Ct,build_machine:Et,code_branch:Mt,code_repo:Rt,commit_id:At,compile_branch:tn,cpu_arch:Oe,name:Er}},wt),be),{},{cron_info:(R=be==null?void 0:be.cron_info)!==null&&R!==void 0?R:ce==null?void 0:ce.cron_info},_e));case 17:case"end":return ft.stop()}},ae)}));return function(){return de.apply(this,arguments)}}(),Ma=function(){var de=(0,$.Z)((0,g.Z)().mark(function ae(){var R,x,N,be,_e;return(0,g.Z)().wrap(function(De){for(;;)switch(De.prev=De.next){case 0:if(!F){De.next=2;break}return De.abrupt("return");case 2:return W(!0),De.next=5,ut();case 5:return R=De.sent,De.next=8,(0,Lt.lY)((0,o.Z)((0,o.Z)({},R),{},{ws_id:ye}));case 8:if(x=De.sent,N=x.code,be=x.msg,_e=x.data,N===200){De.next=16;break}return(0,A.EV)(N,be),W(!1),De.abrupt("return");case 16:mt(_e),Be(!1);case 18:case"end":return De.stop()}},ae)}));return function(){return de.apply(this,arguments)}}(),en=function(){var de=(0,$.Z)((0,g.Z)().mark(function ae(){var R,x,N,be,_e,U=arguments;return(0,g.Z)().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:if(R=U.length>0&&U[0]!==void 0?U[0]:!1,!F){se.next=3;break}return se.abrupt("return");case 3:return W(!0),se.prev=4,se.next=7,ut();case 7:return x=se.sent,se.next=10,(0,Lt.g3)((0,o.Z)((0,o.Z)({},x),{},{is_save:R,ws_id:ye,plan_id:B}));case 10:if(N=se.sent,be=N.code,_e=N.msg,be===200){se.next=17;break}return(0,A.EV)(be,_e),W(!1),se.abrupt("return");case 17:n.m8.push("/ws/".concat(ye,"/test_plan?").concat((0,Kt.stringify)(Ee))),se.next=25;break;case 20:se.prev=20,se.t0=se.catch(4),console.log(se.t0),W(!1),kt(se.t0);case 25:case"end":return se.stop()}},ae,null,[[4,20]])}));return function(){return de.apply(this,arguments)}}(),Ra=function(){return n.m8.push("/ws/".concat(ye,"/test_plan?").concat((0,Kt.stringify)(Ee)))},Na=function(){var de=(0,$.Z)((0,g.Z)().mark(function ae(){var R,x,N,be;return(0,g.Z)().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:if(!F){U.next=2;break}return U.abrupt("return");case 2:return W(!0),U.prev=3,U.next=6,ut();case 6:return R=U.sent,U.next=9,(0,Lt.qW)((0,o.Z)((0,o.Z)({},R),{},{ws_id:ye,plan_id:B}));case 9:if(x=U.sent,N=x.code,be=x.msg,N===200){U.next=16;break}return(0,A.EV)(N,be),W(!1),U.abrupt("return");case 16:n.m8.push("/ws/".concat(ye,"/test_plan?").concat((0,Kt.stringify)(Ee))),U.next=24;break;case 19:U.prev=19,U.t0=U.catch(3),console.log(U.t0),W(!1),kt(U.t0);case 24:case"end":return U.stop()}},ae,null,[[3,19]])}));return function(){return de.apply(this,arguments)}}();return(0,e.jsx)(T.Z,{spinning:Ie,children:(0,e.jsxs)(Ca,{height:Re,children:[(0,e.jsx)(Oa,{align:"middle",children:(0,e.jsxs)(ht.Z,{children:[(0,e.jsx)(ht.Z.Item,{onClick:Ra,children:(0,e.jsx)("span",{style:{cursor:"pointer"},children:(0,e.jsx)(n._H,{id:"menu.Workspace.TestPlan.Manage"})})}),(0,e.jsx)(ht.Z.Item,{children:(0,e.jsx)(n._H,{id:"Workspace.TestPlan.".concat(me.name)})})]})}),(0,e.jsx)(ya,{height:Re,children:He?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(_a,{state:me.name!=="Create",enLocale:m,children:(0,e.jsxs)(qe.Z,{current:Y,direction:"vertical",style:{height:201},onChange:rt,children:[(0,e.jsx)(qe.Z.Step,{title:(0,e.jsx)(n._H,{id:"plan.basic.configuration"}),className:Ut()[["Run","Edit"].includes(me.name)?"stepsWrapper_1":"stepsWrapper"]},0),(0,e.jsx)(qe.Z.Step,{title:(0,e.jsx)(n._H,{id:"plan.test.configuration"}),className:Ut()[["Run","Edit"].includes(me.name)?"stepsWrapper_2":"stepsWrapper"]},1),(0,e.jsx)(qe.Z.Step,{title:(0,e.jsx)(n._H,{id:"plan.report.configuration"})},2),(0,e.jsx)(qe.Z.Step,{title:(0,e.jsx)(n._H,{id:"plan.trigger.configuration"})},3)]})}),(0,e.jsxs)(Pa,{enLocale:m,children:[(0,e.jsx)(Sa,{children:(0,e.jsxs)(J.Z,{justify:"space-between",align:"middle",children:[(0,e.jsx)("div",{className:Ut().plan_step_btn,onClick:X,children:Y===0?null:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Za.Z,{}),(0,e.jsx)("span",{children:(0,e.jsx)(n._H,{id:"operation.previous"})})]})}),(0,e.jsxs)(ne.Z,{children:[me.name==="Run"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(j.Z,{onClick:function(){return en()},children:(0,e.jsx)(n._H,{id:"plan.run.only"})}),(0,e.jsx)(n.Nv,{accessible:v.WsTourist(),children:(0,e.jsx)(n.Nv,{accessible:v.WsMemberOperateSelf(h==null?void 0:h.creator),fallback:(0,e.jsx)(j.Z,{onClick:function(){return(0,A.WR)()},type:"primary",children:(0,e.jsx)(n._H,{id:"plan.run.and.save"})}),children:(0,e.jsx)(j.Z,{onClick:function(){return en(!0)},type:"primary",children:(0,e.jsx)(n._H,{id:"plan.run.and.save"})})})})]}),me.name==="Edit"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(j.Z,{onClick:Na,type:"primary",children:(0,e.jsx)(n._H,{id:"plan.save"})}),(0,e.jsx)(n.Nv,{accessible:v.WsTourist(),children:(0,e.jsx)(n.Nv,{accessible:v.WsMemberOperateSelf(h==null?void 0:h.creator),fallback:(0,e.jsx)(j.Z,{onClick:function(){return(0,A.WR)()},children:(0,e.jsx)(n._H,{id:"plan.save.and.run"})}),children:(0,e.jsx)(j.Z,{onClick:function(){return en(!0)},children:(0,e.jsx)(n._H,{id:"plan.save.and.run"})})})})]}),(0,e.jsx)("div",{className:Ut().plan_step_btn,onClick:function(){return Le("NextStep")},children:Y<3&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{style:{fontSize:14},children:(0,e.jsx)(n._H,{id:"operation.next"})}),(0,e.jsx)(ba.Z,{})]})}),Y===3&&(0,e.jsx)(e.Fragment,{children:me.name==="Create"&&(0,e.jsx)(j.Z,{type:"primary",onClick:Ma,children:(0,e.jsx)(n._H,{id:"plan.release"})})})]})]})}),(0,e.jsxs)(Ea,{children:[(0,e.jsx)(H,{show:Y===0?"block":"none",ref:Q,template:h}),(0,e.jsx)(ua,{show:Y===1?"block":"none",template:h,onChange:Zt}),(0,e.jsx)(ma,(0,o.Z)((0,o.Z)({},u),{},{show:Y===2?"block":"none",ref:We,template:h})),(0,e.jsx)(ja,{ref:Ze,template:h,show:Y===3?"block":"none"})]})]})]}):(0,e.jsxs)("div",{style:{width:"100%"},children:[(0,e.jsx)(Te.ZP,{status:"success",style:{margin:"0 auto"},title:(0,e.jsx)(n._H,{id:"plan.created.success"}),subTitle:(0,e.jsx)(n._H,{id:"plan.the.test.plan.can"}),extra:[(0,e.jsx)(j.Z,{type:"primary",onClick:function(){return n.m8.push("/ws/".concat(ye,"/test_plan?").concat((0,Kt.stringify)(Ee)))},children:(0,e.jsx)(n._H,{id:"plan.return.management"})},"console")]}),(0,e.jsxs)(Ta,{children:[(0,e.jsx)(ke.Z,{span:24,children:(0,e.jsx)("b",{children:(0,e.jsx)(n._H,{id:"plan.configuration.information"})})}),(0,e.jsx)(ke.Z,{span:24,children:(0,e.jsxs)(J.Z,{children:[(M==null?void 0:M.name)&&(0,e.jsx)(ke.Z,{span:12,children:(0,e.jsxs)(ne.Z,{children:[(0,e.jsxs)("span",{children:[(0,e.jsx)(n._H,{id:"plan.table.name"}),"\uFF1A"]}),(0,e.jsx)("span",{children:M==null?void 0:M.name})]})}),(M==null?void 0:M.cron_info)&&(0,e.jsx)(ke.Z,{span:12,children:(0,e.jsxs)(ne.Z,{children:[(0,e.jsxs)("span",{children:[(0,e.jsx)(n._H,{id:"plan.table.cron_info"}),"\uFF1A"]}),(0,e.jsx)("span",{children:M==null?void 0:M.cron_info})]})}),(M==null?void 0:M.enable)&&(0,e.jsx)(ke.Z,{span:12,children:(0,e.jsxs)(ne.Z,{children:[(0,e.jsxs)("span",{children:[(0,e.jsx)(n._H,{id:"plan.table.enable"}),"\uFF1A"]}),(0,e.jsx)("span",{children:M!=null&&M.enable?(0,e.jsx)(Xe.Z,{status:"processing",text:(0,e.jsx)(n._H,{id:"operation.yes"})}):(0,e.jsx)(Xe.Z,{status:"default",text:(0,e.jsx)(n._H,{id:"operation.no"})})})]})}),(M==null?void 0:M.next_time)&&(0,e.jsx)(ke.Z,{span:12,children:(0,e.jsxs)(ne.Z,{children:[(0,e.jsxs)("span",{children:[(0,e.jsx)(n._H,{id:"plan.next_time"}),"\uFF1A"]}),(0,e.jsx)("span",{children:M==null?void 0:M.next_time})]})})]})})]})]})})]})})},ka=La},68176:function(Ke,Ve,t){"use strict";t.d(Ve,{d3:function(){return T},lY:function(){return ot},g3:function(){return Xe},NH:function(){return te},jW:function(){return ke},qW:function(){return ct},uy:function(){return Te},Nm:function(){return pt}});var ue=t(22812),T=function(Ce){return(0,ue.WY)("/api/plan/list/",{params:Ce})},ot=function(Ce){return(0,ue.WY)("/api/plan/list/",{data:Ce,method:"post"})},Xe=function(Ce){return(0,ue.WY)("/api/plan/run/",{data:Ce,method:"post"})},te=function(Ce){return(0,ue.WY)("/api/plan/detail/",{data:Ce,method:"delete"})},ke=function(Ce){return(0,ue.WY)("/api/plan/detail/",{params:Ce})},ct=function(Ce){return(0,ue.WY)("/api/plan/detail/",{data:Ce,method:"put"})},Te=function(Ce){return(0,ue.WY)("/api/plan/check/cron_expression/",{data:Ce,method:"post"})},pt=function(Ce){return(0,ue.WY)("/api/plan/copy/",{data:Ce,method:"post"})}},78358:function(Ke,Ve,t){"use strict";t.d(Ve,{gN:function(){return K},tZ:function(){return P},yQ:function(){return w},Pc:function(){return i},cQ:function(){return y},YV:function(){return G},Nq:function(){return Pe},JQ:function(){return A},iK:function(){return e},fD:function(){return $e},QN:function(){return Qe}});var ue=t(57359),T=t(34423),ot=t(13059),Xe=t(53676),te=t(20418),ke=t(51937),ct=t(34516),Te=t(41428),pt=t(70772),J=t(6701),Ce=t(14320),ne=t(53479),Ot=t(79625),j=t(96584),It=t(89963),qe=t(70077),yt=t(22374),ht=t(86252),o=t.n(ht),L=t(93329),it=t(74066),ie=t(24812),g=t(22812),$=t(97939),C=t(39935),s=t(526),vt=t(6130),r=t(52454),gt,D=new Map([["success","#81BF84"],["pass","#81BF84"],["running","#649FF6"],["fail","#C84C5A"]]),K=function(l){var I=(0,ie.UO)(),H=I.ws_id;return(0,r.jsxs)(qe.Z,{style:{marginBottom:l.bottomHeight},children:[(0,r.jsx)(qe.Z.Item,{children:(0,r.jsx)("span",{style:{cursor:"pointer"},onClick:function(){return g.m8.push("/ws/".concat(H,"/test_result"))},children:(0,r.jsx)(g._H,{id:"ws.result.details.test.result"})})}),(0,r.jsx)(qe.Z.Item,{children:(0,r.jsx)(g._H,{id:"ws.result.details.result.details"})})]})},P=function(l){return l==="success"||l===!0?(0,r.jsx)("span",{style:{fontWeight:500,color:"#81BF84"},children:"Success"}):l==="fail"||l===!1?(0,r.jsx)("span",{style:{fontWeight:500,color:"#C84C5A"},children:"Fail"}):l==="running"?(0,r.jsx)("span",{style:{fontWeight:500,color:"#649FF6"},children:"Running"}):l==="stop"?(0,r.jsx)("span",{style:{fontWeight:500,color:"#1D1D1D"},children:"Stop"}):l==="pending"?(0,r.jsx)("span",{style:{fontWeight:500,color:"#1D1D1D"},children:"Pending"}):l==="skip"?(0,r.jsx)("span",{style:{fontWeight:500,color:"#1D1D1D"},children:"Skip"}):(0,r.jsx)(r.Fragment,{})},w=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"-";return{ellipsis:{showTitle:!1},render:function(H){return H?(0,r.jsx)(vt.K,{ellipsis:{tooltip:!0},children:H}):l}}},i=function(l){var I=l.title,H=l.width,je=H===void 0?"100%":H,pe=l.onEdit,dt=l.access,Me=(0,yt.useRef)(),at=dt?(0,r.jsx)(L.Z,{style:{marginLeft:6,cursor:"pointer"},onClick:pe}):(0,r.jsx)(L.Z,{style:{marginLeft:6,cursor:"pointer"},onClick:function(){return(0,C.WR)()}});return(0,r.jsx)("div",{ref:Me,style:{width:je},children:(0,r.jsxs)(ne.Z,{style:{width:je},justify:"start",align:"middle",children:[(0,r.jsx)(j.Z,{placement:"topLeft",title:I,children:(0,r.jsx)("span",{style:{maxWidth:54,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:I||"-"})}),at]})})},a=function(l){return D.get(l)||"#D9D9D9"},n=function(l){var I=l.text,H=(0,g.YB)(),je=(0,s.oM)(H.formatMessage({id:"request.copy.success"}));return(0,r.jsx)("span",{style:{cursor:"pointer",color:"#1890ff"},onClick:function(){return je(I)},children:H.formatMessage({id:"operation.copy",defaultMessage:"\u590D\u5236"})})},y=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"-";return{ellipsis:{showTitle:!1},render:function(H){return H?(0,r.jsx)(j.Z,{overlayClassName:o().tootip_overflow,placement:"topLeft",title:(0,r.jsxs)(ne.Z,{children:[(0,r.jsx)(J.Z,{span:24,children:H}),(0,r.jsx)(J.Z,{span:24,children:(0,r.jsx)(ne.Z,{justify:"center",children:(0,r.jsx)(n,{text:H})})})]}),children:H}):l}}},G=function(l){return l==="decline"?"#C84C5A":l==="normal"?"#000000":l==="increase"?"#81BF84":""},Pe=function(l,I,H){return l==="decline"?(0,r.jsx)("span",{style:{color:"#C84C5A"},children:H({id:"ws.result.details.".concat(l)})}):l==="normal"?(0,r.jsx)("span",{style:{color:"#000000"},children:H({id:"ws.result.details.".concat(l)})}):l==="increase"?(0,r.jsx)("span",{style:{color:"#81BF84"},children:H({id:"ws.result.details.".concat(l)})}):I||"-"},q=(0,$.ZP)(ct.Z)(gt||(gt=(0,Te.Z)([`
    font-weight: 500;
    width: 72px;
    text-align: center;
    `,`
    text-transform: capitalize;
`])),function(z){var l=z.no_margin;return l?"margin-right: 0;":""}),Ye=function(l){return(0,r.jsx)(q,(0,te.Z)({},l))},et=function(l){var I=(0,g.YB)(),H=I.formatMessage;return(0,r.jsx)(j.Z,{title:H({id:"ws.result.details.job_state"}),placement:"bottom",children:(0,r.jsx)(q,(0,te.Z)({},l))})},xe=function(l){var I=l.title;return(0,r.jsx)(Xe.Z,{title:I,placement:"right",trigger:"hover",overlayClassName:o().tag_popover_style,children:(0,r.jsx)(it.Z,{style:{color:"rgba(0, 0, 0, 0.65)",verticalAlign:"middle"}})})},re=function(l){var I=l.state;return(0,r.jsx)(Ye,(0,te.Z)((0,te.Z)({},l),{},{color:a(I),style:!D.get(I)&&{color:"#1d1d1d"},children:I==="success"?"complete":I}))},d=function(l){var I=l.state;return(0,r.jsx)(et,(0,te.Z)((0,te.Z)({},l),{},{color:a(I),style:!D.get(I)&&{color:"#1d1d1d"},children:I==="success"?"complete":I}))},A=function(l){var I=(0,g.YB)(),H=I.formatMessage,je=l.state,pe=l.run_state,dt=pe===void 0?"":pe,Me=l.state_desc,at=(0,ie.UO)(),tt=at.ws_id;return je==="running"?Me?(0,r.jsxs)(T.Z,{size:0,children:[(0,r.jsx)(re,(0,te.Z)((0,te.Z)({},l),{},{children:je})),(0,r.jsx)(xe,{title:(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:Me.replace(/(\d+)/g,'<a href="/ws/'.concat(tt,'/test_result/$1" target="_blank">$1</a>'))}})})]}):dt?(0,r.jsxs)(T.Z,{size:0,children:[(0,r.jsx)(re,(0,te.Z)((0,te.Z)({},l),{},{children:je})),(0,r.jsx)(xe,{title:H({id:"ws.result.details.not.assigned.server"})})]}):(0,r.jsxs)(T.Z,{size:0,children:[(0,r.jsx)(re,(0,te.Z)((0,te.Z)({},l),{},{children:je})),(0,r.jsx)(xe,{title:H({id:"ws.result.details.running,please.wait"})})]}):je==="pending"&&Me?(0,r.jsxs)(T.Z,{size:0,children:[(0,r.jsx)(re,(0,te.Z)((0,te.Z)({},l),{},{children:je})),(0,r.jsx)(xe,{title:(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:Me.replace(/(\d+)/g,'<a href="/ws/'.concat(tt,'/test_result/$1" target="_blank">$1</a>'))}})})]}):(0,r.jsx)(re,(0,te.Z)({},l))},e=function(l){return(0,r.jsx)(d,(0,te.Z)((0,te.Z)({},l),{},{no_margin:1}))},$e=function(l){var I=l.title,H=l.desc,je=l.placement,pe=je===void 0?"bottom":je;return(0,r.jsxs)(T.Z,{children:[(0,r.jsx)("span",{style:{color:"rgba(0, 0, 0, 0.85)"},children:I}),(0,r.jsx)(j.Z,{overlayClassName:o().table_question_tooltip,placement:pe,arrowPointAtCenter:!0,title:H,color:"#fff",children:(0,r.jsx)(it.Z,{style:{color:"rgba(0, 0, 0, 0.65)"}})})]})},Qe=function(l){var I=l.title,H=l.test_value,je=l.value_list,pe=l.cv_value,dt=l.max_value,Me=l.min_value,at=l.metric,tt=l.result,st=(0,g.YB)(),lt=st.formatMessage,xt=(0,s.oM)(lt({id:"request.copy.success"})),Je=function(jt){return jt?new Number(jt).toFixed(2):null},Ht=Je(dt),Tt=Je(Me),Bt=pe,Dt=Je(H),_t=je.map(function(nt){return Je(nt)}),Pt="".concat(at," ").concat(I,`:
Avg: `).concat(Dt,`
CV:  `).concat(Bt);Pt+=Ht?`
Max: `.concat(Ht):"",Pt+=Tt?`
Min: `.concat(Tt):"",Pt+=_t.length?`
Test Record
`:"",Pt+=_t.reduce(function(nt,jt,Vt){return nt.concat("(".concat(Vt+1,") ").concat(jt,`
`))},"");var Ft="".concat(Dt,"\xB1").concat(Bt),Wt=function(){return tt==="decline"?(0,r.jsx)("span",{className:o().result_popover_span,style:{color:"#C84C5A"},children:Ft}):tt==="increase"?(0,r.jsx)("span",{className:o().result_popover_span,style:{color:"#81BF84"},children:Ft}):(0,r.jsx)("span",{className:o().result_popover_span,style:{color:"rgba(0, 0, 0, 0.65)"},children:Ft})};return(0,r.jsx)(Xe.Z,{overlayClassName:o().metric_list_copy,title:(0,r.jsxs)(ne.Z,{justify:"space-between",children:[(0,r.jsx)("b",{children:I}),(0,r.jsx)("span",{onClick:function(){return xt(Pt)},style:{color:"#1890FF",cursor:"pointer",marginLeft:"8px"},children:(0,r.jsx)(g._H,{id:"operation.copy"})})]}),content:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(ne.Z,{children:[(0,r.jsx)("b",{children:"Avg\uFF1A"}),(0,r.jsx)("span",{children:Dt})]}),(0,r.jsxs)(ne.Z,{children:[(0,r.jsx)("b",{children:"CV\uFF1A"}),(0,r.jsx)("span",{children:Bt})]}),(0,r.jsxs)(ne.Z,{children:[(0,r.jsx)("b",{children:"Max\uFF1A"}),(0,r.jsx)("span",{children:Ht})]}),(0,r.jsxs)(ne.Z,{children:[(0,r.jsx)("b",{children:"Min\uFF1A"}),(0,r.jsx)("span",{children:Tt})]}),_t.length>0&&(0,r.jsx)(ne.Z,{style:{marginTop:16},children:(0,r.jsx)("b",{children:"Test Record"})}),_t.map(function(nt,jt){return(0,r.jsx)(ne.Z,{children:"(".concat(jt+1,")").concat(nt)},jt)})]}),children:Wt()})}},71924:function(Ke,Ve,t){"use strict";t.d(Ve,{Z:function(){return gt}});var ue=t(29700),T=t(77335),ot=t(60061),Xe=t(53770),te=t(68591),ke=t.n(te),ct=t(45972),Te=t(10929),pt=t(52318),J=t(31279),Ce=t(65284),ne=t(31762),Ot=t(51129),j=t(22374),It=["className","prefixCls","style","active","status","iconPrefix","icon","wrapperStyle","stepNumber","disabled","description","title","subTitle","progressDot","stepIcon","tailContent","icons","stepIndex","onStepClick","onClick"];function qe(D){return typeof D=="string"}var yt=function(D){(0,ne.Z)(P,D);var K=(0,Ot.Z)(P);function P(){var w;(0,pt.Z)(this,P);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return w=K.call.apply(K,[this].concat(a)),(0,T.Z)((0,Ce.Z)(w),"onClick",function(){var y=w.props,G=y.onClick,Pe=y.onStepClick,q=y.stepIndex;G&&G.apply(void 0,arguments),Pe(q)}),w}return(0,J.Z)(P,[{key:"renderIconNode",value:function(){var i,a=this.props,n=a.prefixCls,y=a.progressDot,G=a.stepIcon,Pe=a.stepNumber,q=a.status,Ye=a.title,et=a.description,xe=a.icon,re=a.iconPrefix,d=a.icons,A,e=ke()("".concat(n,"-icon"),"".concat(re,"icon"),(i={},(0,T.Z)(i,"".concat(re,"icon-").concat(xe),xe&&qe(xe)),(0,T.Z)(i,"".concat(re,"icon-check"),!xe&&q==="finish"&&(d&&!d.finish||!d)),(0,T.Z)(i,"".concat(re,"icon-cross"),!xe&&q==="error"&&(d&&!d.error||!d)),i)),$e=j.createElement("span",{className:"".concat(n,"-icon-dot")});return y?typeof y=="function"?A=j.createElement("span",{className:"".concat(n,"-icon")},y($e,{index:Pe-1,status:q,title:Ye,description:et})):A=j.createElement("span",{className:"".concat(n,"-icon")},$e):xe&&!qe(xe)?A=j.createElement("span",{className:"".concat(n,"-icon")},xe):d&&d.finish&&q==="finish"?A=j.createElement("span",{className:"".concat(n,"-icon")},d.finish):d&&d.error&&q==="error"?A=j.createElement("span",{className:"".concat(n,"-icon")},d.error):xe||q==="finish"||q==="error"?A=j.createElement("span",{className:e}):A=j.createElement("span",{className:"".concat(n,"-icon")},Pe),G&&(A=G({index:Pe-1,status:q,title:Ye,description:et,node:A})),A}},{key:"render",value:function(){var i,a=this.props,n=a.className,y=a.prefixCls,G=a.style,Pe=a.active,q=a.status,Ye=q===void 0?"wait":q,et=a.iconPrefix,xe=a.icon,re=a.wrapperStyle,d=a.stepNumber,A=a.disabled,e=a.description,$e=a.title,Qe=a.subTitle,z=a.progressDot,l=a.stepIcon,I=a.tailContent,H=a.icons,je=a.stepIndex,pe=a.onStepClick,dt=a.onClick,Me=(0,Te.Z)(a,It),at=ke()("".concat(y,"-item"),"".concat(y,"-item-").concat(Ye),n,(i={},(0,T.Z)(i,"".concat(y,"-item-custom"),xe),(0,T.Z)(i,"".concat(y,"-item-active"),Pe),(0,T.Z)(i,"".concat(y,"-item-disabled"),A===!0),i)),tt=(0,ct.Z)({},G),st={};return pe&&!A&&(st.role="button",st.tabIndex=0,st.onClick=this.onClick),j.createElement("div",(0,ue.Z)({},Me,{className:at,style:tt}),j.createElement("div",(0,ue.Z)({onClick:dt},st,{className:"".concat(y,"-item-container")}),j.createElement("div",{className:"".concat(y,"-item-tail")},I),j.createElement("div",{className:"".concat(y,"-item-icon")},this.renderIconNode()),j.createElement("div",{className:"".concat(y,"-item-content")},j.createElement("div",{className:"".concat(y,"-item-title")},$e,Qe&&j.createElement("div",{title:typeof Qe=="string"?Qe:void 0,className:"".concat(y,"-item-subtitle")},Qe)),e&&j.createElement("div",{className:"".concat(y,"-item-description")},e))))}}]),P}(j.Component),ht=["prefixCls","style","className","children","direction","type","labelPlacement","iconPrefix","status","size","current","progressDot","stepIcon","initial","icons","onChange","items"],o=function(D){(0,ne.Z)(P,D);var K=(0,Ot.Z)(P);function P(){var w;(0,pt.Z)(this,P);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return w=K.call.apply(K,[this].concat(a)),(0,T.Z)((0,Ce.Z)(w),"onStepClick",function(y){var G=w.props,Pe=G.onChange,q=G.current;Pe&&q!==y&&Pe(y)}),w}return(0,J.Z)(P,[{key:"render",value:function(){var i,a=this,n=this.props,y=n.prefixCls,G=n.style,Pe=G===void 0?{}:G,q=n.className,Ye=n.children,et=n.direction,xe=n.type,re=n.labelPlacement,d=n.iconPrefix,A=n.status,e=n.size,$e=n.current,Qe=n.progressDot,z=n.stepIcon,l=n.initial,I=n.icons,H=n.onChange,je=n.items,pe=je===void 0?[]:je,dt=(0,Te.Z)(n,ht),Me=xe==="navigation",at=Qe?"vertical":re,tt=ke()(y,"".concat(y,"-").concat(et),q,(i={},(0,T.Z)(i,"".concat(y,"-").concat(e),e),(0,T.Z)(i,"".concat(y,"-label-").concat(at),et==="horizontal"),(0,T.Z)(i,"".concat(y,"-dot"),!!Qe),(0,T.Z)(i,"".concat(y,"-navigation"),Me),i));return j.createElement("div",(0,ue.Z)({className:tt,style:Pe},dt),pe.filter(function(st){return st}).map(function(st,lt){var xt=(0,ct.Z)({},st),Je=l+lt;return A==="error"&&lt===$e-1&&(xt.className="".concat(y,"-next-error")),xt.status||(Je===$e?xt.status=A:Je<$e?xt.status="finish":xt.status="wait"),j.createElement(yt,(0,ue.Z)({},xt,{active:Je===$e,stepNumber:Je+1,stepIndex:Je,key:Je,prefixCls:y,iconPrefix:d,wrapperStyle:Pe,progressDot:Qe,stepIcon:z,icons:I,onStepClick:H&&a.onStepClick}))}))}}]),P}(j.Component);(0,T.Z)(o,"Step",yt),(0,T.Z)(o,"defaultProps",{type:"default",prefixCls:"rc-steps",iconPrefix:"rc",direction:"horizontal",labelPlacement:"horizontal",initial:0,current:0,status:"process",size:"",progressDot:!1});var L=o,it=t(53532),ie=t(57605),g=t(95327),$=t(1155);function C(D){return D.filter(function(K){return K})}function s(D,K){if(D)return D;var P=(0,$.Z)(K).map(function(w){if(j.isValidElement(w)){var i=w.props,a=(0,ue.Z)({},i);return a}return null});return C(P)}var vt=function(D,K){var P={};for(var w in D)Object.prototype.hasOwnProperty.call(D,w)&&K.indexOf(w)<0&&(P[w]=D[w]);if(D!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,w=Object.getOwnPropertySymbols(D);i<w.length;i++)K.indexOf(w[i])<0&&Object.prototype.propertyIsEnumerable.call(D,w[i])&&(P[w[i]]=D[w[i]]);return P},r=function(K){var P,w=K.percent,i=K.size,a=K.className,n=K.direction,y=K.items,G=K.responsive,Pe=G===void 0?!0:G,q=K.current,Ye=q===void 0?0:q,et=K.children,xe=vt(K,["percent","size","className","direction","items","responsive","current","children"]),re=(0,ie.Z)(Pe),d=re.xs,A=j.useContext(it.E_),e=A.getPrefixCls,$e=A.direction,Qe=j.useCallback(function(){return Pe&&d?"vertical":n},[d,n]),z=e("steps",K.prefixCls),l=e("",K.iconPrefix),I=s(y,et),H=ke()((P={},(0,T.Z)(P,"".concat(z,"-rtl"),$e==="rtl"),(0,T.Z)(P,"".concat(z,"-with-progress"),w!==void 0),P),a),je={finish:j.createElement(ot.Z,{className:"".concat(z,"-finish-icon")}),error:j.createElement(Xe.Z,{className:"".concat(z,"-error-icon")})},pe=function(Me){var at=Me.node,tt=Me.status;if(tt==="process"&&w!==void 0){var st=i==="small"?32:40;return j.createElement("div",{className:"".concat(z,"-progress-icon")},j.createElement(g.Z,{type:"circle",percent:w,width:st,strokeWidth:4,format:function(){return null}}),at)}return at};return j.createElement(L,(0,ue.Z)({icons:je},xe,{current:Ye,size:i,items:I,direction:Qe(),stepIcon:pe,prefixCls:z,iconPrefix:l,className:H}))};r.Step=L.Step;var gt=r},79716:function(Ke,Ve,t){"use strict";var ue=t(49132),T=t.n(ue),ot=t(67808),Xe=t.n(ot),te=t(81830)},83396:function(Ke,Ve,t){"use strict";t.d(Ve,{Z:function(){return o}});var ue=t(29700),T=t(77335),ot=t(57556),Xe=t(68591),te=t.n(Xe),ke=t(85628),ct=t(10929),Te=t(22374),pt=t(41140),J=t(39448),Ce=Te.forwardRef(function(L,it){var ie,g=L.prefixCls,$=g===void 0?"rc-switch":g,C=L.className,s=L.checked,vt=L.defaultChecked,r=L.disabled,gt=L.loadingIcon,D=L.checkedChildren,K=L.unCheckedChildren,P=L.onClick,w=L.onChange,i=L.onKeyDown,a=(0,ct.Z)(L,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),n=(0,pt.Z)(!1,{value:s,defaultValue:vt}),y=(0,ke.Z)(n,2),G=y[0],Pe=y[1];function q(re,d){var A=G;return r||(A=re,Pe(A),w==null||w(A,d)),A}function Ye(re){re.which===J.Z.LEFT?q(!1,re):re.which===J.Z.RIGHT&&q(!0,re),i==null||i(re)}function et(re){var d=q(!G,re);P==null||P(d,re)}var xe=te()($,C,(ie={},(0,T.Z)(ie,"".concat($,"-checked"),G),(0,T.Z)(ie,"".concat($,"-disabled"),r),ie));return Te.createElement("button",Object.assign({},a,{type:"button",role:"switch","aria-checked":G,disabled:r,className:xe,ref:it,onKeyDown:Ye,onClick:et}),gt,Te.createElement("span",{className:"".concat($,"-inner")},G?D:K))});Ce.displayName="Switch";var ne=Ce,Ot=t(53532),j=t(4631),It=t(19245),qe=t(65526),yt=function(L,it){var ie={};for(var g in L)Object.prototype.hasOwnProperty.call(L,g)&&it.indexOf(g)<0&&(ie[g]=L[g]);if(L!=null&&typeof Object.getOwnPropertySymbols=="function")for(var $=0,g=Object.getOwnPropertySymbols(L);$<g.length;$++)it.indexOf(g[$])<0&&Object.prototype.propertyIsEnumerable.call(L,g[$])&&(ie[g[$]]=L[g[$]]);return ie},ht=Te.forwardRef(function(L,it){var ie,g=L.prefixCls,$=L.size,C=L.disabled,s=L.loading,vt=L.className,r=vt===void 0?"":vt,gt=yt(L,["prefixCls","size","disabled","loading","className"]),D=Te.useContext(Ot.E_),K=D.getPrefixCls,P=D.direction,w=Te.useContext(It.Z),i=Te.useContext(j.Z),a=(C!=null?C:i)||s,n=K("switch",g),y=Te.createElement("div",{className:"".concat(n,"-handle")},s&&Te.createElement(ot.Z,{className:"".concat(n,"-loading-icon")})),G=te()((ie={},(0,T.Z)(ie,"".concat(n,"-small"),($||w)==="small"),(0,T.Z)(ie,"".concat(n,"-loading"),s),(0,T.Z)(ie,"".concat(n,"-rtl"),P==="rtl"),ie),r);return Te.createElement(qe.Z,{insertExtraNode:!0},Te.createElement(ne,(0,ue.Z)({},gt,{prefixCls:n,className:G,disabled:a,ref:it,loadingIcon:y})))});ht.__ANT_SWITCH=!0;var o=ht}}]);
