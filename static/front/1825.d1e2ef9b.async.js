(self.webpackChunktone_front=self.webpackChunktone_front||[]).push([[1825],{29704:function(U){U.exports={job_test_form:"job_test_form___YaoQn",divider_styles:"divider_styles___1N62U",kernal_wrapper_styles:"kernal_wrapper_styles___SaJbW"}},96791:function(U){U.exports={job_test_form:"job_test_form___9jbiJ",save_template:"save_template___1y982",table_question_tooltip:"table_question_tooltip___3qPEG"}},13438:function(U,L,r){"use strict";var a=r(13062),u=r(71230),l=r(49111),g=r(19650),P=r(402),W=r(97272),D=r(11849),C=r(9715),b=r(20526),c=r(47673),h=r(4107),O=r(19273),d=r(39428),f=r(3182),p=r(67294),v=r(73171),i=r(49101),o=r(16917),M=r(20009),s=r(53909),y=r(85893),x=function(B){var Z=(0,o.YB)(),w=B.disabled,K=B.form,$=(0,M.TH)(),m=$.pathname;return(0,y.jsx)(b.Z.Item,(0,D.Z)((0,D.Z)({label:Z.formatMessage({id:"kernel.kernel_packages.label"}),required:!0},B),{},{children:(0,y.jsx)(b.Z.List,{name:"kernel_packages",initialValue:[""],rules:[{validator:function(){var _=(0,f.Z)((0,d.Z)().mark(function t(){return(0,d.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve());case 1:case"end":return e.stop()}},t)}));function n(){return _.apply(this,arguments)}return n}()}],children:function(n,t,E){var e=t.add,S=t.remove;return(0,O.Z)(E),(0,y.jsxs)(u.Z,{style:{flexDirection:"column",gap:8,width:"100%"},children:[n.map(function(F,Y){return(0,y.jsxs)("div",{style:{position:"relative"},children:[(0,y.jsx)(b.Z.Item,(0,D.Z)((0,D.Z)({},F),{},{rules:[{required:!0,message:Z.formatMessage({id:"kernel.kernel_packages".concat(Y!==0?".other":"",".rules.empty")})}],children:(0,y.jsx)(h.Z,{disabled:w,style:{width:"100%"},allowClear:!0,placeholder:Z.formatMessage({id:"kernel.kernel_packages".concat(Y!==0?".other":"",".placeholder")})})})),!w&&Y!==0&&n.length>1?(0,y.jsx)(v.Z,{style:{position:"absolute",right:0,top:0,transform:"translate(150%,60%)"},onClick:function(){return S(F.name)}}):null,!!~m.indexOf("/test_result/")&&(0,y.jsx)(s.db,{style:{right:-20},onCopy:function(){var T;return K==null||(T=K.getFieldValue("kernel_packages"))===null||T===void 0?void 0:T[Y]}})]},Y)}),!w&&(0,y.jsx)(W.Z.Link,{onClick:function(){return e()},children:(0,y.jsxs)(g.Z,{children:[(0,y.jsx)(i.Z,{}),(0,y.jsx)(W.Z.Link,{children:Z.formatMessage({id:"kernel.kernel_packages.add"})})]})})]})}})}))};L.Z=x},45680:function(U,L,r){"use strict";r.d(L,{ZP:function(){return g},cR:function(){return P},Zy:function(){return W},Kc:function(){return D},sP:function(){return C}});var a=r(39428),u=r(3182),l=r(16917),g=function(c){return(0,l.WY)("/api/sys/kernel/",{params:c})},P=function(c){return(0,l.WY)("/api/sys/kernel/",{method:"post",data:c})},W=function(c){return(0,l.WY)("/api/sys/kernel/",{method:"put",data:c})},D=function(c){return(0,l.WY)("/api/sys/kernel/",{method:"delete",data:c})},C=function(){var b=(0,u.Z)((0,a.Z)().mark(function c(h){return(0,a.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,l.WY)("/api/sys/sync_kernel/",{method:"post",data:h}));case 1:case"end":return d.stop()}},c)}));return function(h){return b.apply(this,arguments)}}()},8142:function(U,L,r){"use strict";r.d(L,{VX:function(){return g},Ir:function(){return P},ry:function(){return W},nM:function(){return D},Zf:function(){return C},OV:function(){return b},c0:function(){return c},lk:function(){return h},$L:function(){return O},YK:function(){return d},ty:function(){return f},th:function(){return p},_L:function(){return v},E7:function(){return i},h4:function(){return o},GW:function(){return M},cQ:function(){return s},fW:function(){return y},xN:function(){return x},h5:function(){return j},yE:function(){return B},vS:function(){return Z},Qj:function(){return w},o_:function(){return K},NA:function(){return $},ff:function(){return m}});var a=r(39428),u=r(3182),l=r(16917),g=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/product/",{params:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}(),P=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/product/",{method:"delete",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}(),W=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/product/",{method:"post",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}(),D=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/product/",{method:"put",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}(),C=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/product/drag/",{method:"put",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}(),b=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/product/drag/",{params:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}(),c=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/project/drag/",{method:"put",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}(),h=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/project/drag/",{params:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}(),O=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/project/",{method:"post",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}(),d=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/project/",{params:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}(),f=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/project/",{method:"put",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}(),p=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/project/",{method:"delete",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}(),v=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/repository/",{params:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}(),i=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/repository/project/",{params:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}(),o=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/repository/",{method:"post",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}(),M=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/repository/",{method:"put",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}(),s=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/repository/",{method:"delete",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}(),y=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/branch/relation/",{params:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}(),x=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/branch/relation/",{method:"post",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}(),j=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/branch/relation/",{method:"put",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}(),B=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/branch/relation/",{method:"delete",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}(),Z=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/branch/",{params:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}(),w=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/branch/",{method:"post",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}(),K=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/branch/",{method:"put",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}(),$=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/branch/",{method:"delete",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}(),m=function(){var _=(0,u.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.WY)("/api/sys/check/gitlab/",{method:"post",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return _.apply(this,arguments)}}()},96719:function(U,L,r){"use strict";r.d(L,{C:function(){return W}});var a=r(11849),u=r(2824),l=r(67294),g=r(73171),P=r(85893),W=function(C){var b=C.remove,c=C.field,h=C.position,O=C.deleteCallback,d=(0,l.useState)(""),f=(0,u.Z)(d,2),p=f[0],v=f[1];return(0,P.jsx)("div",{onMouseEnter:function(){return v("red")},onMouseLeave:function(){return v("")},style:(0,a.Z)({position:"absolute"},h),children:(0,P.jsx)(g.Z,{onClick:function(){b(c.name)},style:{color:p}})})}},60306:function(U,L,r){"use strict";var a=r(47673),u=r(4107),l=r(11849),g=r(9715),P=r(20526),W=r(43358),D=r(34041),C=r(91220),b=r(2824),c=r(67294),h=r(17617),O=r(29704),d=r.n(O),f=r(55201),p=r(16917),v=r(8142),i=r(63885),o=r(85893),M=!0,s=function(x){var j=x.disabled,B=x.project_id,Z=x.form,w=x.needScriptList,K=x.isPlan,$=K===void 0?!1:K,m=(0,p.YB)(),_=m.formatMessage,n=(0,c.useState)(Z==null?void 0:Z.getFieldValue("code_repo")),t=(0,b.Z)(n,2),E=t[0],e=t[1],S=(0,p.QT)(function(){return(0,v.E7)({project_id:B})},{initialData:[],manual:!0}),F=S.data,Y=F===void 0?[]:F,H=S.run,T=j?{backgroundColor:"#f5f5f5"}:{},J=(0,c.useMemo)(function(){var R=(0,C.Z)(Y),k;try{for(R.s();!(k=R.n()).done;){var A=k.value;if(A.repo_id===E)return A.branch_dict}}catch(I){R.e(I)}finally{R.f()}return[]},[E,Y]);(0,c.useEffect)(function(){M&&H()},[B]);var N=function(k){e(k),Z==null||Z.setFieldsValue({code_branch:null})},G=(0,p.QT)(i.nL,{initialData:[],manual:M}),V=G.data,Q=function(k){var A=V.findIndex(function(z){return z.id===k}),I=V[A];Z==null||Z.setFieldsValue({code_repo:I.repo,code_branch:I==null?void 0:I.current_branch,compile_branch:I.builder_branch})};return(0,o.jsx)(P.Z.Item,{label:" ",children:(0,o.jsxs)(P.Z.Item,{className:d().kernal_wrapper_styles,children:[M?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(P.Z.Item,(0,l.Z)((0,l.Z)({},f.W),{},{label:(0,o.jsx)(p._H,{id:"kernel.form.code_repo"}),name:"code_repo",rules:[{required:!0,message:_({id:"kernel.form.code_repo.message"})}],children:(0,o.jsx)(D.Z,{disabled:j,placeholder:_({id:"kernel.form.code_repo.placeholder"}),style:T,onChange:N,allowClear:!0,showSearch:!0,filterOption:function(k,A){var I;return((I=A==null?void 0:A.label)!==null&&I!==void 0?I:"").toLowerCase().includes(k.toLowerCase())},options:Y.map(function(R){return{value:R.repo_id,label:R.repo_git_url}})})})),(0,o.jsx)(P.Z.Item,(0,l.Z)((0,l.Z)({},f.W),{},{label:(0,o.jsx)(p._H,{id:"kernel.form.code_branch"}),name:"code_branch",rules:[{required:!0,message:_({id:"kernel.form.code_branch.message"})}],children:(0,o.jsx)(D.Z,{style:T,disabled:j,showSearch:!0,allowClear:!0,placeholder:_({id:"kernel.form.code_branch.message"}),filterOption:function(k,A){var I;return((I=A==null?void 0:A.label)!==null&&I!==void 0?I:"").toLowerCase().includes(k.toLowerCase())},options:J==null?void 0:J.map(function(R){return{value:R.id,label:R.name}})})}))]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(P.Z.Item,(0,l.Z)((0,l.Z)({},f.W),{},{label:_({id:"kernel.form.cbc.product"}),name:$?"product_name":"name",rules:[{required:!0,message:_({id:"kernel.form.cbc.product.empty"})}],children:(0,o.jsx)(D.Z,{disabled:j,placeholder:_({id:"kernel.form.cbc.product.empty"}),onChange:Q,filterOption:function(k,A){var I;return((I=A==null?void 0:A.label)!==null&&I!==void 0?I:"").toLowerCase().includes(k.toLowerCase())},style:T,allowClear:!0,showSearch:!0,options:V==null?void 0:V.map(function(R){return{value:R.id,label:R.name}})})})),(0,o.jsx)(P.Z.Item,(0,l.Z)((0,l.Z)({},f.W),{},{label:(0,o.jsx)(p._H,{id:"kernel.form.code_repo"}),name:"code_repo",rules:[{required:!0,message:_({id:"kernel.form.code_repo.message"})}],children:(0,o.jsx)(u.Z,{style:T,disabled:j,placeholder:_({id:"kernel.form.code_repo.placeholder"})})})),(0,o.jsx)(P.Z.Item,(0,l.Z)((0,l.Z)({},f.W),{},{label:(0,o.jsx)(p._H,{id:"kernel.form.code_branch"}),name:"code_branch",rules:[{required:!0,message:_({id:"kernel.form.code_branch.message"})}],children:(0,o.jsx)(u.Z,{style:T,disabled:j,placeholder:_({id:"kernel.form.code_branch.message"})})}))]}),(0,o.jsx)(P.Z.Item,(0,l.Z)((0,l.Z)({},f.W),{},{label:(0,o.jsx)(p._H,{id:"kernel.form.compile_branch"}),name:"compile_branch",children:(0,o.jsx)(u.Z,{style:T,readOnly:j,autoComplete:"off",placeholder:_({id:"kernel.form.compile_branch.message"})})})),(0,o.jsx)(P.Z.Item,(0,l.Z)((0,l.Z)({},f.W),{},{label:(0,o.jsx)(p._H,{id:"kernel.form.cpu_arch"}),name:"cpu_arch",rules:[{required:!0,message:_({id:"kernel.form.cpu_arch.message"})}],children:(0,o.jsxs)(D.Z,{disabled:j,placeholder:_({id:"kernel.form.cpu_arch.placeholder"}),children:[(0,o.jsx)(D.Z.Option,{value:"x86_64",children:"x86_64"}),(0,o.jsx)(D.Z.Option,{value:"aarch64",children:"aarch64"})]})})),(0,o.jsx)(P.Z.Item,(0,l.Z)((0,l.Z)({},f.W),{},{label:"Commit ID",name:"commit_id",children:(0,o.jsx)(u.Z,{style:T,readOnly:j,autoComplete:"off",placeholder:_({id:"kernel.form.commit_id.placeholder"})})})),(0,o.jsx)(P.Z.Item,(0,l.Z)((0,l.Z)({},f.W),{},{label:"Build Config",name:"build_config",children:(0,o.jsx)(u.Z,{style:T,readOnly:j,autoComplete:"off",placeholder:_({id:"kernel.form.build_config.placeholder"})})})),(0,o.jsx)(P.Z.Item,(0,l.Z)((0,l.Z)({},f.W),{},{label:"Build Server",name:"build_machine",children:(0,o.jsx)(u.Z,{style:T,readOnly:j,autoComplete:"off",placeholder:_({id:"kernel.form.build_machine.placeholder"})})})),w&&(0,o.jsx)(h.Z,{form:Z,disabled:j})]})})};L.Z=s},84739:function(U,L,r){"use strict";var a=r(88983),u=r(47933),l=r(11849),g=r(9715),P=r(20526),W=r(43358),D=r(34041),C=r(67294),b=r(17617),c=r(29704),h=r.n(c),O=r(55201),d=r(16917),f=r(13438),p=r(85893),v=function(o){var M=o.kernelList,s=M===void 0?[]:M,y=o.form,x=o.disabled,j=x===void 0?!1:x,B=o.needScriptList,Z=B===void 0?!0:B,w=(0,d.YB)(),K=w.formatMessage,$=function(_){var n=s.findIndex(function(S){return S.version===_});if(n>-1){var t=s[n],E=t.version,e=t.kernel_packages;y.setFieldsValue({kernel_version:E,kernel_packages:e})}};return(0,C.useEffect)(function(){var m=y.getFieldValue("kernel_info");m&&JSON.stringify(m)!=="{}"&&y.setFieldsValue({hotfix_install:m==null?void 0:m.hotfix_install,scripts:m==null?void 0:m.scripts})},[y]),(0,p.jsx)(P.Z.Item,{label:" ",children:(0,p.jsxs)(P.Z.Item,{className:h().kernal_wrapper_styles,children:[(0,p.jsx)(P.Z.Item,(0,l.Z)((0,l.Z)({},O.W),{},{label:(0,p.jsx)(d._H,{id:"kernel.form.kernel_version"}),name:"kernel_version",rules:[{required:!0,message:K({id:"kernel.form.kernel_version.message"})}],children:(0,p.jsx)(D.Z,{placeholder:K({id:"please.select"}),onChange:$,disabled:j,showSearch:!0,getPopupContainer:function(_){return _.parentNode},filterOption:function(_,n){var t;return((t=n==null?void 0:n.label)!==null&&t!==void 0?t:"").toLowerCase().includes(_.toLowerCase())},options:s.map(function(m){return{value:m.version,label:m.version}})})})),(0,p.jsx)(f.Z,(0,l.Z)((0,l.Z)((0,l.Z)({},o),O.W),{},{disabled:!0})),(0,p.jsx)(P.Z.Item,(0,l.Z)((0,l.Z)({},O.W),{},{label:"hotfix_install",name:"hotfix_install",rules:[{required:!0,message:K({id:"please.select"})}],children:(0,p.jsxs)(u.ZP.Group,{disabled:j,children:[(0,p.jsx)(u.ZP,{value:!0,children:(0,p.jsx)(d._H,{id:"operation.yes"})}),(0,p.jsx)(u.ZP,{value:!1,children:(0,p.jsx)(d._H,{id:"operation.no"})})]})})),Z&&(0,p.jsx)(b.Z,{form:y,disabled:j})]})})};L.Z=v},17617:function(U,L,r){"use strict";var a=r(57663),u=r(71577),l=r(13062),g=r(71230),P=r(89032),W=r(15746),D=r(88983),C=r(47933),b=r(9715),c=r(20526),h=r(47673),O=r(4107),d=r(48736),f=r(27049),p=r(67294),v=r(96719),i=r(16917),o=r(20009),M=r(53909),s=r(85893),y=function(j){var B=j.disabled,Z=B===void 0?!1:B,w=j.form,K=(0,i.YB)(),$=K.formatMessage,m=(0,o.TH)(),_=m.pathname;return(0,s.jsx)(c.Z.List,{name:"scripts",children:function(t,E){var e=E.add,S=E.remove;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f.Z,{style:{margin:"8px 0"},dashed:!0}),t.map(function(F,Y){return(0,s.jsxs)(g.Z,{children:[(0,s.jsxs)(W.Z,{span:24,style:{position:"relative"},children:[(0,s.jsx)(c.Z.Item,{label:(0,s.jsx)(i._H,{id:"kernel.form.script"}),name:[F.name,"script"],wrapperCol:{span:17},labelCol:{span:6},children:(0,s.jsx)(O.Z.TextArea,{placeholder:$({id:"kernel.form.script.placeholder"}),disabled:Z})}),!Z&&Y>0&&(0,s.jsx)(v.C,{position:{right:0,top:0},remove:S,field:F}),!!~_.indexOf("/test_result/")&&(0,s.jsx)(M.db,{onCopy:function(){var T;return w==null||(T=w.getFieldValue("scripts"))===null||T===void 0?void 0:T[Y].script}}),(0,s.jsx)(g.Z,{children:(0,s.jsx)(W.Z,{span:18,offset:6,children:(0,s.jsx)(c.Z.Item,{label:(0,s.jsx)(i._H,{id:"kernel.form.pos"}),name:[F.name,"pos"],style:{marginBottom:0},children:(0,s.jsxs)(C.ZP.Group,{disabled:Z,children:[(0,s.jsx)(C.ZP,{value:"before",children:(0,s.jsx)(i._H,{id:"kernel.form.pos.before"})}),(0,s.jsx)(C.ZP,{value:"after",children:(0,s.jsx)(i._H,{id:"kernel.form.pos.after"})})]})})})})]}),(0,s.jsx)(f.Z,{style:{margin:"8px 0 5px"},dashed:!0})]},F.key)}),!Z&&(0,s.jsx)(c.Z.Item,{label:" ",labelCol:{span:6},style:{marginBottom:0},children:(0,s.jsx)(u.Z,{type:"link",onClick:function(){return e({pos:"before"})},size:"small",style:{padding:0,fontSize:12},children:(0,s.jsx)(i._H,{id:"kernel.form.add.kernel"})})})]})}})};L.Z=y},55787:function(U,L,r){"use strict";var a=r(9715),u=r(20526),l=r(11849),g=r(67294),P=r(17617),W=r(29704),D=r.n(W),C=r(13438),b=r(55201),c=r(85893),h=function(d){var f=d.disabled,p=f===void 0?!1:f,v=d.needScriptList,i=v===void 0?!0:v,o=d.form;return(0,c.jsx)(u.Z.Item,{label:" ",children:(0,c.jsxs)(u.Z.Item,{className:D().kernal_wrapper_styles,children:[(0,c.jsx)(C.Z,(0,l.Z)((0,l.Z)({},d),b.W)),i&&(0,c.jsx)(P.Z,{form:o,disabled:p})]})})};L.Z=h},55201:function(U,L,r){"use strict";r.d(L,{W:function(){return a}});var a={wrapperCol:{span:17},labelCol:{span:6}}},53909:function(U,L,r){"use strict";r.d(L,{lR:function(){return j},db:function(){return B},fD:function(){return Z},O6:function(){return w},zW:function(){return K}});var a=r(49111),u=r(19650),l=r(22385),g=r(89456),P=r(71153),W=r(60331),D=r(402),C=r(97272),b=r(20310),c=r(67294),h=r(1870),O=r(94184),d=r.n(O),f=r(96791),p=r.n(f),v=r(12788),i=r(41623),o=r(60035),M=r(16917),s=r(85893),y,x=(0,v.ZP)(C.Z.Link)(y||(y=(0,b.Z)([`
    position: absolute;
    right: 5px;
    top: 2px;
    &:hover {
        svg path{
            fill: #1890ff;
        }
    }
`]))),j=function(m){var _,n,t=m.label,E=m.closable,e=m.onClose,S=m.value;return(0,s.jsx)(W.Z,{color:(_=t.props)===null||_===void 0?void 0:_.color,closable:E,onClose:e,style:{marginRight:3},children:((n=t.props)===null||n===void 0?void 0:n.children)||S})},B=function(m){var _=m.onCopy,n=m.style,t=(0,M.YB)(),E=(0,o.oM)(t.formatMessage({id:"request.copy.success"}));return(0,s.jsx)(x,{onClick:function(){return E(_==null?void 0:_())},style:n||{},children:(0,s.jsx)(i.r,{})})},Z=function(m){var _=m.title,n=m.desc,t=m.className;return(0,s.jsxs)(u.Z,{children:[(0,s.jsx)("span",{style:{color:"rgba(0, 0, 0, 0.85)"},children:_}),(0,s.jsx)(g.Z,{overlayClassName:d()(p().table_question_tooltip,t),placement:"bottom",arrowPointAtCenter:!0,title:n,color:"#fff",children:(0,s.jsx)(h.Z,{style:{color:"rgba(0, 0, 0, 0.65)"}})})]})},w=function(m){if(m&&JSON.stringify(m)!=="{}"){for(var _=Object.keys(m),n=0,t=_.length;n<t;n++)if(m[_[n]].length>1)return!0}return!1},K=function(m){return m&&typeof+m=="number"?parseInt(m)+"":""}},63885:function(U,L,r){"use strict";r.d(L,{NQ:function(){return g},_r:function(){return P},Ls:function(){return D},YK:function(){return C},bU:function(){return b},Eh:function(){return c},MD:function(){return h},VF:function(){return O},VV:function(){return d},nL:function(){return f},uz:function(){return p}});var a=r(39428),u=r(3182),l=r(16917),g=function(){var v=(0,u.Z)((0,a.Z)().mark(function i(o){return(0,a.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,l.WY)("/api/job/test/",{params:o}));case 1:case"end":return s.stop()}},i)}));return function(o){return v.apply(this,arguments)}}(),P=function(){var v=(0,u.Z)((0,a.Z)().mark(function i(o){return(0,a.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,l.WY)("/api/job/test/",{data:o,method:"post"}));case 1:case"end":return s.stop()}},i)}));return function(o){return v.apply(this,arguments)}}(),W=null,D=function(){var v=(0,u.Z)((0,a.Z)().mark(function i(o){return(0,a.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,l.WY)("/api/job/template/detail/",{params:o}));case 1:case"end":return s.stop()}},i)}));return function(o){return v.apply(this,arguments)}}(),C=function(){var v=(0,u.Z)((0,a.Z)().mark(function i(o){return(0,a.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,l.WY)("/api/sys/project/",{params:o}));case 1:case"end":return s.stop()}},i)}));return function(o){return v.apply(this,arguments)}}(),b=function(){var v=(0,u.Z)((0,a.Z)().mark(function i(o){return(0,a.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,l.WY)("/api/baseline/list/",{params:o}));case 1:case"end":return s.stop()}},i)}));return function(o){return v.apply(this,arguments)}}(),c=function(){var v=(0,u.Z)((0,a.Z)().mark(function i(o){return(0,a.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,l.WY)("/api/rerun/config/",{params:o}));case 1:case"end":return s.stop()}},i)}));return function(o){return v.apply(this,arguments)}}(),h=function(){var v=(0,u.Z)((0,a.Z)().mark(function i(o){return(0,a.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,l.WY)("/api/report/template/list/",{params:o}));case 1:case"end":return s.stop()}},i)}));return function(o){return v.apply(this,arguments)}}(),O=function(){var v=(0,u.Z)((0,a.Z)().mark(function i(o){return(0,a.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,l.WY)("/api/job/yaml_data_verify/",{data:o,method:"post"}));case 1:case"end":return s.stop()}},i)}));return function(o){return v.apply(this,arguments)}}(),d=function(){var v=(0,u.Z)((0,a.Z)().mark(function i(o){return(0,a.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,l.WY)("/api/job/data_conversion/",{data:o,method:"post"}));case 1:case"end":return s.stop()}},i)}));return function(o){return v.apply(this,arguments)}}(),f=function(){var v=(0,u.Z)((0,a.Z)().mark(function i(){return(0,a.Z)().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.abrupt("return",(0,l.WY)("/api/job/test/product"));case 1:case"end":return M.stop()}},i)}));return function(){return v.apply(this,arguments)}}(),p=function(){var v=(0,u.Z)((0,a.Z)().mark(function i(o){return(0,a.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,l.WY)("/api/job/template/check/",{params:o}));case 1:case"end":return s.stop()}},i)}));return function(o){return v.apply(this,arguments)}}()},41623:function(U,L,r){"use strict";r.d(L,{r:function(){return C}});var a=r(67294),u,l=["svgRef","title"];function g(){return g=Object.assign?Object.assign.bind():function(c){for(var h=1;h<arguments.length;h++){var O=arguments[h];for(var d in O)Object.prototype.hasOwnProperty.call(O,d)&&(c[d]=O[d])}return c},g.apply(this,arguments)}function P(c,h){if(c==null)return{};var O=W(c,h),d,f;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(c);for(f=0;f<p.length;f++)d=p[f],!(h.indexOf(d)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,d)||(O[d]=c[d]))}return O}function W(c,h){if(c==null)return{};var O={},d=Object.keys(c),f,p;for(p=0;p<d.length;p++)f=d[p],!(h.indexOf(f)>=0)&&(O[f]=c[f]);return O}var D=function(h){var O=h.svgRef,d=h.title,f=P(h,l);return a.createElement("svg",g({width:"12px",height:"12px",viewBox:"0 0 12 12",ref:O},f),d?a.createElement("title",null,d):null,u||(u=a.createElement("g",{id:"\\u5206\\u6790",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.createElement("g",{id:"0.\\u6027\\u80FD-\\u5185\\u7F51-\\u9009\\u62E9\\u6807\\u7B7E",transform:"translate(-1194.000000, -133.000000)",fill:"#000000"},a.createElement("g",{id:"Group-21",transform:"translate(20.000000, 110.000000)"},a.createElement("g",{id:"\\u94FE\\u63A5",transform:"translate(1172.000000, 21.000000)"},a.createElement("rect",{id:"Rectangle",fillRule:"nonzero",opacity:0,x:0,y:0,width:16,height:16}),a.createElement("path",{d:"M11.91,7.92 C11.7153722,8.09503346 11.4186893,8.09033311 11.2297039,7.90922206 C11.0407184,7.72811102 11.0234032,7.43189657 11.19,7.23 L12.06,6.32 C12.709515,5.51696592 12.6264975,4.34816777 11.87,3.645 C11.115,2.86 10,2.79 9.37,3.45 L6.94,6 C6.29048502,6.80303408 6.37350246,7.97183223 7.13,8.675 C7.3238618,8.87001873 7.3238618,9.18498127 7.13,9.38 C7.0361167,9.47465633 6.90831877,9.52789916 6.775,9.52789916 C6.64168123,9.52789916 6.5138833,9.47465633 6.42,9.38 C5.29380253,8.29148422 5.21051969,6.51405308 6.23,5.325 L8.66,2.79 C9.705,1.7 11.48,1.79 12.61,2.99 C13.7040886,4.07696429 13.7802373,5.82185565 12.785,7 L11.91,7.92 Z M3.59,8.08 C3.78462784,7.90496654 4.0813107,7.90966689 4.27029614,8.09077794 C4.45928159,8.27188898 4.47659677,8.56810343 4.31,8.77 L3.44,9.68 C2.79048502,10.4830341 2.87350246,11.6518322 3.63,12.355 C4.385,13.14 5.5,13.21 6.13,12.55 L8.56,10 C9.20951498,9.19696592 9.12649754,8.02816777 8.37,7.325 C8.1761382,7.12998127 8.1761382,6.81501873 8.37,6.62 C8.4638833,6.52534367 8.59168123,6.47210084 8.725,6.47210084 C8.85831877,6.47210084 8.9861167,6.52534367 9.08,6.62 C10.2061975,7.70851578 10.2894803,9.48594692 9.27,10.675 L6.84,13.21 C5.795,14.3 4.02,14.21 2.89,13.01 C1.79591137,11.9230357 1.71976275,10.1781444 2.715,9 L3.59,8.08 Z",id:"Shape",fillOpacity:.65})))))))},C=a.forwardRef(function(c,h){return a.createElement(D,g({svgRef:h},c))}),b=r.p+"static/icon_link.e1b9133e.svg"}}]);
