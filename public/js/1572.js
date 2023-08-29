"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1572],{3744:(e,t)=>{t.Z=(e,t)=>{const o=e.__vccOpts||e;for(const[e,n]of t)o[e]=n;return o}},8050:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(821),r={class:"md:grid md:grid-cols-3 md:gap-6"},s={class:"mt-5 md:mt-0 md:col-span-2"},a={class:"px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg"};var c=o(5218);const i=(0,n.defineComponent)({components:{JetSectionTitle:c.Z}});const l=(0,o(3744).Z)(i,[["render",function(e,t,o,c,i,l){var d=(0,n.resolveComponent)("jet-section-title");return(0,n.openBlock)(),(0,n.createElementBlock)("div",r,[(0,n.createVNode)(d,null,{title:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"title")]})),description:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"description")]})),_:3}),(0,n.createElementVNode)("div",s,[(0,n.createElementVNode)("div",a,[(0,n.renderSlot)(e.$slots,"content")])])])}]])},9714:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(821),r=["type"];const s=(0,n.defineComponent)({props:{type:{type:String,default:"submit"}}});const a=(0,o(3744).Z)(s,[["render",function(e,t,o,s,a,c){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-indigo-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},[(0,n.renderSlot)(e.$slots,"default")],8,r)}]])},3309:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(821),r=["type"];const s=(0,n.defineComponent)({props:{type:{type:String,default:"button"}}});const a=(0,o(3744).Z)(s,[["render",function(e,t,o,s,a,c){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:e.type,class:"inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 active:bg-red-600 disabled:opacity-25 transition"},[(0,n.renderSlot)(e.$slots,"default")],8,r)}]])},7637:(e,t,o)=>{o.d(t,{Z:()=>d});var n=o(821),r={class:"px-6 py-4"},s={class:"text-lg"},a={class:"mt-4"},c={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"};var i=o(5658);const l=(0,n.defineComponent)({emits:["close"],components:{Modal:i.Z},props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0}},methods:{close:function(){this.$emit("close")}}});const d=(0,o(3744).Z)(l,[["render",function(e,t,o,i,l,d){var u=(0,n.resolveComponent)("modal");return(0,n.openBlock)(),(0,n.createBlock)(u,{show:e.show,"max-width":e.maxWidth,closeable:e.closeable,onClose:e.close},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",r,[(0,n.createElementVNode)("div",s,[(0,n.renderSlot)(e.$slots,"title")]),(0,n.createElementVNode)("div",a,[(0,n.renderSlot)(e.$slots,"content")])]),(0,n.createElementVNode)("div",c,[(0,n.renderSlot)(e.$slots,"footer")])]})),_:3},8,["show","max-width","closeable","onClose"])}]])},7292:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(821),r=["value"];const s=(0,n.defineComponent)({props:["modelValue"],emits:["update:modelValue"],methods:{focus:function(){this.$refs.input.focus()}}});const a=(0,o(3744).Z)(s,[["render",function(e,t,o,s,a,c){return(0,n.openBlock)(),(0,n.createElementBlock)("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:e.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)}),ref:"input"},null,40,r)}]])},675:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(821),r={class:"text-sm text-red-600"};const s=(0,n.defineComponent)({props:["message"]});const a=(0,o(3744).Z)(s,[["render",function(e,t,o,s,a,c){return(0,n.withDirectives)(((0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createElementVNode)("p",r,(0,n.toDisplayString)(e.message),1)],512)),[[n.vShow,e.message]])}]])},5658:(e,t,o)=>{o.d(t,{Z:()=>c});var n=o(821),r={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},s=[(0,n.createElementVNode)("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1)];const a=(0,n.defineComponent)({emits:["close"],props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0}},watch:{show:{immediate:!0,handler:function(e){document.body.style.overflow=e?"hidden":null}}},setup:function(e,t){var o=t.emit,r=function(){e.closeable&&o("close")},s=function(t){"Escape"===t.key&&e.show&&r()};return(0,n.onMounted)((function(){return document.addEventListener("keydown",s)})),(0,n.onUnmounted)((function(){document.removeEventListener("keydown",s),document.body.style.overflow=null})),{close:r}},computed:{maxWidthClass:function(){return{sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[this.maxWidth]}}});const c=(0,o(3744).Z)(a,[["render",function(e,t,o,a,c,i){return(0,n.openBlock)(),(0,n.createBlock)(n.Teleport,{to:"body"},[(0,n.createVNode)(n.Transition,{"leave-active-class":"duration-200"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createElementVNode)("div",r,[(0,n.createVNode)(n.Transition,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createElementVNode)("div",{class:"fixed inset-0 transform transition-all",onClick:t[0]||(t[0]=function(){return e.close&&e.close.apply(e,arguments)})},s,512),[[n.vShow,e.show]])]})),_:1}),(0,n.createVNode)(n.Transition,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createElementVNode)("div",{class:(0,n.normalizeClass)(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",e.maxWidthClass])},[e.show?(0,n.renderSlot)(e.$slots,"default",{key:0}):(0,n.createCommentVNode)("",!0)],2),[[n.vShow,e.show]])]})),_:3})],512),[[n.vShow,e.show]])]})),_:3})])}]])},5515:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(821),r=["type"];const s=(0,n.defineComponent)({props:{type:{type:String,default:"button"}}});const a=(0,o(3744).Z)(s,[["render",function(e,t,o,s,a,c){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 disabled:opacity-25 transition"},[(0,n.renderSlot)(e.$slots,"default")],8,r)}]])},5218:(e,t,o)=>{o.d(t,{Z:()=>d});var n=o(821),r={class:"md:col-span-1 flex justify-between"},s={class:"px-4 sm:px-0"},a={class:"text-lg font-medium text-gray-900"},c={class:"mt-1 text-sm text-gray-600"},i={class:"px-4 sm:px-0"};const l={},d=(0,o(3744).Z)(l,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("div",r,[(0,n.createElementVNode)("div",s,[(0,n.createElementVNode)("h3",a,[(0,n.renderSlot)(e.$slots,"title")]),(0,n.createElementVNode)("p",c,[(0,n.renderSlot)(e.$slots,"description")])]),(0,n.createElementVNode)("div",i,[(0,n.renderSlot)(e.$slots,"aside")])])}]])},1572:(e,t,o)=>{o.r(t),o.d(t,{default:()=>J});var n=o(821),r=(0,n.createTextVNode)(" Autentificación de doble paso "),s=(0,n.createTextVNode)(" Protege tu cuenta agregando doble paso de autentificación "),a={key:0,class:"text-lg font-medium text-gray-900"},c={key:1,class:"text-lg font-medium text-gray-900"},i=(0,n.createElementVNode)("div",{class:"mt-3 max-w-xl text-sm text-gray-600"},[(0,n.createElementVNode)("p",null," Cuando la autenticación de dos factores está habilitada, se le solicitará un token aleatorio seguro durante la autenticación. Puede recuperar este token desde la aplicación Google Authenticator de su teléfono. ")],-1),l={key:2},d={key:0},u=(0,n.createElementVNode)("div",{class:"mt-4 max-w-xl text-sm text-gray-600"},[(0,n.createElementVNode)("p",{class:"font-semibold"}," La autenticación de dos factores ahora está habilitada. Escanee el siguiente código QR usando la aplicación de autenticación de su teléfono. ")],-1),m=["innerHTML"],f={key:1},p=(0,n.createElementVNode)("div",{class:"mt-4 max-w-xl text-sm text-gray-600"},[(0,n.createElementVNode)("p",{class:"font-semibold"}," Guarde estos códigos de recuperación en un administrador de contraseñas seguro. Se pueden utilizar para recuperar el acceso a su cuenta si pierde su dispositivo de autenticación de dos factores. ")],-1),g={class:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg"},h={class:"mt-5"},w={key:0},v=(0,n.createTextVNode)(" Permitir "),x={key:1},y=(0,n.createTextVNode)(" Regenerar códigos de recuperación "),C=(0,n.createTextVNode)(" Mostrar códigos de recuperación "),b=(0,n.createTextVNode)(" Desactivar ");var k=o(8050),V=o(9714),N={class:"mt-4"},E=(0,n.createTextVNode)(" Cancel ");var B=o(7637),S=o(7292),Z=o(675),$=o(5515);const T=(0,n.defineComponent)({emits:["confirmed"],props:{title:{default:"Confirmar Password"},content:{default:"Por su seguridad, confirme su contraseña para continuar."},button:{default:"Confirmar"}},components:{JetButton:V.Z,JetDialogModal:B.Z,JetInput:S.Z,JetInputError:Z.Z,JetSecondaryButton:$.Z},data:function(){return{confirmingPassword:!1,form:{password:"",error:""}}},methods:{startConfirmingPassword:function(){var e=this;axios.get(route("password.confirmation")).then((function(t){t.data.confirmed?e.$emit("confirmed"):(e.confirmingPassword=!0,setTimeout((function(){return e.$refs.password.focus()}),250))}))},confirmPassword:function(){var e=this;this.form.processing=!0,axios.post(route("password.confirm"),{password:this.form.password}).then((function(){e.form.processing=!1,e.closeModal(),e.$nextTick((function(){return e.$emit("confirmed")}))})).catch((function(t){e.form.processing=!1,e.form.error=t.response.data.errors.password[0],e.$refs.password.focus()}))},closeModal:function(){this.confirmingPassword=!1,this.form.password="",this.form.error=""}}});var _=o(3744);const P=(0,_.Z)(T,[["render",function(e,t,o,r,s,a){var c=(0,n.resolveComponent)("jet-input"),i=(0,n.resolveComponent)("jet-input-error"),l=(0,n.resolveComponent)("jet-secondary-button"),d=(0,n.resolveComponent)("jet-button"),u=(0,n.resolveComponent)("jet-dialog-modal");return(0,n.openBlock)(),(0,n.createElementBlock)("span",null,[(0,n.createElementVNode)("span",{onClick:t[0]||(t[0]=function(){return e.startConfirmingPassword&&e.startConfirmingPassword.apply(e,arguments)})},[(0,n.renderSlot)(e.$slots,"default")]),(0,n.createVNode)(u,{show:e.confirmingPassword,onClose:e.closeModal},{title:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.title),1)]})),content:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.content)+" ",1),(0,n.createElementVNode)("div",N,[(0,n.createVNode)(c,{type:"password",class:"mt-1 block w-3/4",placeholder:"Password",ref:"password",modelValue:e.form.password,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.form.password=t}),onKeyup:(0,n.withKeys)(e.confirmPassword,["enter"])},null,8,["modelValue","onKeyup"]),(0,n.createVNode)(i,{message:e.form.error,class:"mt-2"},null,8,["message"])])]})),footer:(0,n.withCtx)((function(){return[(0,n.createVNode)(l,{onClick:e.closeModal},{default:(0,n.withCtx)((function(){return[E]})),_:1},8,["onClick"]),(0,n.createVNode)(d,{class:(0,n.normalizeClass)(["ml-3",{"opacity-25":e.form.processing}]),onClick:e.confirmPassword,disabled:e.form.processing},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.button),1)]})),_:1},8,["onClick","class","disabled"])]})),_:1},8,["show","onClose"])])}]]);var j=o(3309);const D=(0,n.defineComponent)({components:{JetActionSection:k.Z,JetButton:V.Z,JetConfirmsPassword:P,JetDangerButton:j.Z,JetSecondaryButton:$.Z},data:function(){return{enabling:!1,disabling:!1,qrCode:null,recoveryCodes:[]}},methods:{enableTwoFactorAuthentication:function(){var e=this;this.enabling=!0,this.$inertia.post("/user/two-factor-authentication",{},{preserveScroll:!0,onSuccess:function(){return Promise.all([e.showQrCode(),e.showRecoveryCodes()])},onFinish:function(){return e.enabling=!1}})},showQrCode:function(){var e=this;return axios.get("/user/two-factor-qr-code").then((function(t){e.qrCode=t.data.svg}))},showRecoveryCodes:function(){var e=this;return axios.get("/user/two-factor-recovery-codes").then((function(t){e.recoveryCodes=t.data}))},regenerateRecoveryCodes:function(){var e=this;axios.post("/user/two-factor-recovery-codes").then((function(t){e.showRecoveryCodes()}))},disableTwoFactorAuthentication:function(){var e=this;this.disabling=!0,this.$inertia.delete("/user/two-factor-authentication",{preserveScroll:!0,onSuccess:function(){return e.disabling=!1}})}},computed:{twoFactorEnabled:function(){return!this.enabling&&this.$page.props.user.two_factor_enabled}}}),J=(0,_.Z)(D,[["render",function(e,t,o,k,V,N){var E=(0,n.resolveComponent)("jet-button"),B=(0,n.resolveComponent)("jet-confirms-password"),S=(0,n.resolveComponent)("jet-secondary-button"),Z=(0,n.resolveComponent)("jet-danger-button"),$=(0,n.resolveComponent)("jet-action-section");return(0,n.openBlock)(),(0,n.createBlock)($,null,{title:(0,n.withCtx)((function(){return[r]})),description:(0,n.withCtx)((function(){return[s]})),content:(0,n.withCtx)((function(){return[e.twoFactorEnabled?((0,n.openBlock)(),(0,n.createElementBlock)("h3",a," Tienes habilitado el doble paso en tu cuenta ")):((0,n.openBlock)(),(0,n.createElementBlock)("h3",c," Aún no tienes habilitado el doble paso en la autentificación ")),i,e.twoFactorEnabled?((0,n.openBlock)(),(0,n.createElementBlock)("div",l,[e.qrCode?((0,n.openBlock)(),(0,n.createElementBlock)("div",d,[u,(0,n.createElementVNode)("div",{class:"mt-4",innerHTML:e.qrCode},null,8,m)])):(0,n.createCommentVNode)("",!0),e.recoveryCodes.length>0?((0,n.openBlock)(),(0,n.createElementBlock)("div",f,[p,(0,n.createElementVNode)("div",g,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.recoveryCodes,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("div",{key:e},(0,n.toDisplayString)(e),1)})),128))])])):(0,n.createCommentVNode)("",!0)])):(0,n.createCommentVNode)("",!0),(0,n.createElementVNode)("div",h,[e.twoFactorEnabled?((0,n.openBlock)(),(0,n.createElementBlock)("div",x,[(0,n.createVNode)(B,{onConfirmed:e.regenerateRecoveryCodes},{default:(0,n.withCtx)((function(){return[e.recoveryCodes.length>0?((0,n.openBlock)(),(0,n.createBlock)(S,{key:0,class:"mr-3"},{default:(0,n.withCtx)((function(){return[y]})),_:1})):(0,n.createCommentVNode)("",!0)]})),_:1},8,["onConfirmed"]),(0,n.createVNode)(B,{onConfirmed:e.showRecoveryCodes},{default:(0,n.withCtx)((function(){return[0===e.recoveryCodes.length?((0,n.openBlock)(),(0,n.createBlock)(S,{key:0,class:"mr-3"},{default:(0,n.withCtx)((function(){return[C]})),_:1})):(0,n.createCommentVNode)("",!0)]})),_:1},8,["onConfirmed"]),(0,n.createVNode)(B,{onConfirmed:e.disableTwoFactorAuthentication},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(Z,{class:(0,n.normalizeClass)({"opacity-25":e.disabling}),disabled:e.disabling},{default:(0,n.withCtx)((function(){return[b]})),_:1},8,["class","disabled"])]})),_:1},8,["onConfirmed"])])):((0,n.openBlock)(),(0,n.createElementBlock)("div",w,[(0,n.createVNode)(B,{onConfirmed:e.enableTwoFactorAuthentication},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(E,{type:"button",class:(0,n.normalizeClass)({"opacity-25":e.enabling}),disabled:e.enabling},{default:(0,n.withCtx)((function(){return[v]})),_:1},8,["class","disabled"])]})),_:1},8,["onConfirmed"])]))])]})),_:1})}]])}}]);