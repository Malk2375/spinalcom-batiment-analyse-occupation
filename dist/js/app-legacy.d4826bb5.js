(function(){"use strict";var t={7711:function(t,e,n){n(3792),n(3362),n(9085),n(9391);var i=n(5471),a=n(173),o=function(){var t=this,e=t._self._c;return e("router-view")},r=[],s={},c=s,l=n(1656),u=(0,l.A)(c,o,r,!1,null,null,null),d=u.exports,p=n(4048),f=n(388),m=(n(113),n(6099),n(5353)),g=n(4335);i["default"].use(m.Ay);var h=new m.Ay.Store({state:{buildings:[],roomDetails:{}},mutations:{SET_BUILDINGS:function(t,e){t.buildings=e},SET_ROOM_DETAILS:function(t,e){var n=e.roomId,a=e.details;i["default"].set(t.roomDetails,n,a)}},actions:{fetchBuildings:function(t){return(0,f.A)((0,p.A)().mark((function e(){var n,i;return(0,p.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,g.A.get("https://api-developers.spinalcom.com/api/v1/geographicContext/space");case 4:i=e.sent,n("SET_BUILDINGS",i.data),e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})))()},fetchRoomDetails:function(t,e){return(0,f.A)((0,p.A)().mark((function n(){var i,a,o,r;return(0,p.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=t.commit,n.prev=1,n.next=4,g.A.get("https://api-developers.spinalcom.com/api/v1/room/".concat(e,"/control_endpoint_list"));case 4:a=n.sent,o=a.data[0].endpoints.find((function(t){return"Occupation"===t.type})),r=!!o&&o.currentValue,i("SET_ROOM_DETAILS",{roomId:e,details:{occupation:r}}),n.next=12;break;case 10:n.prev=10,n.t0=n["catch"](1);case 12:case"end":return n.stop()}}),n,null,[[1,10]])})))()}},getters:{getRoomDetails:function(t){return function(e){return t.roomDetails[e]||{}}}}}),v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper",class:{"nav-open":t.$sidebar.showSidebar}},[e("side-bar",{attrs:{"sidebar-item-color":t.sidebarBackground,"sidebar-background-image":t.sidebarBackgroundImage}},[e("mobile-menu",{attrs:{slot:"content"},slot:"content"}),e("sidebar-link",{attrs:{to:"/dashboard"}},[e("md-icon",[t._v("dashboard")]),e("p",[t._v("Analyse d'occupation")])],1)],1),e("div",{staticClass:"main-panel"},[e("top-navbar"),e("fixed-plugin",{attrs:{color:t.sidebarBackground,image:t.sidebarBackgroundImage},on:{"update:color":function(e){t.sidebarBackground=e},"update:image":function(e){t.sidebarBackgroundImage=e}}}),e("dashboard-content"),t.$route.meta.hideFooter?t._e():e("content-footer")],1)],1)},b=[],C=(n(2010),function(){var t=this,e=t._self._c;return e("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[e("div",{staticClass:"md-toolbar-row"},[e("div",{staticClass:"md-toolbar-section-start"},[e("h3",{staticClass:"md-title"},[t._v(t._s(t.$route.name))])]),e("div",{staticClass:"md-toolbar-section-end"},[e("md-button",{staticClass:"md-just-icon md-simple md-toolbar-toggle",class:{toggled:t.$sidebar.showSidebar},on:{click:t.toggleSidebar}},[e("span",{staticClass:"icon-bar"}),e("span",{staticClass:"icon-bar"}),e("span",{staticClass:"icon-bar"})])],1)])])}),k=[],A={data:function(){return{}},methods:{toggleSidebar:function(){this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)}}},_=A,x=(0,l.A)(_,C,k,!1,null,null,null),y=x.exports,I=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"copyright text-center"},[t._v(" © "+t._s((new Date).getFullYear())+" "),e("a",{attrs:{href:"https://portfolio-malk.vercel.app/",target:"_blank"}},[t._v(" Malk ")]),t._v(", Developpé pour SpinalCom "),e("i",{staticClass:"fa fa-heart heart"})])])])},w=[function(){var t=this,e=t._self._c;return e("nav",[e("ul",[e("li",[e("a",{attrs:{href:"https://www.linkedin.com/in/mohamed-abdelmalek-dorbani/",target:"_blank"}},[t._v(" LinkedIn ")])]),e("li",[e("a",{attrs:{href:"https://portfolio-malk.vercel.app/",target:"_blank"}},[t._v(" Portfolio ")])]),e("li",[e("a",{attrs:{href:"https://github.com/Malk2375",target:"_blank"}},[t._v(" Github ")])])])])}],D={},E=D,S=(0,l.A)(E,I,w,!1,null,null,null),O=S.exports,R=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)},B=[],M={},j=M,J=(0,l.A)(j,R,B,!1,null,null,null),Q=J.exports,P=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"nav nav-mobile-menu"})},F=[],K={data:function(){return{}}},G=K,L=(0,l.A)(G,P,F,!1,null,null,null),T=L.exports,N=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeDropDown,expression:"closeDropDown"}],staticClass:"fixed-plugin"},[e("div",{staticClass:"dropdown show-dropdown",class:{show:t.isOpen}},[e("a",{attrs:{"data-toggle":"dropdown"}},[e("i",{staticClass:"fa fa-cog fa-2x",on:{click:t.toggleDropDown}})]),e("ul",{staticClass:"dropdown-menu",class:{show:t.isOpen}},[e("li",{staticClass:"header-title"},[t._v("Filtre de couleurs")]),e("li",{staticClass:"adjustments-line text-center"},t._l(t.sidebarColors,(function(n){return e("span",{key:n.color,staticClass:"badge filter",class:["badge-".concat(n.color),{active:n.active}],attrs:{"data-color":n.color},on:{click:function(e){return t.changeSidebarBackground(n)}}})})),0),e("li",{staticClass:"header-title"},[t._v("Images")]),t._l(t.sidebarImages,(function(n){return e("li",{key:n.image,class:{active:n.active},on:{click:function(e){return t.changeSidebarImage(n)}}},[e("a",{staticClass:"img-holder switch-trigger"},[e("img",{attrs:{src:n.image,alt:""}})])])}))],2)])])},Y=[],V=(n(3500),n(6738));i["default"].use(V.A,{useCache:!0});var U={components:{},data:function(){return{documentationLink:"https://creativetimofficial.github.io/vue-material-dashboard/documentation",shareUrl:"https://www.creative-tim.com/product/vue-material-dashboard",buyUrl:"",freeUrl:"https://www.creative-tim.com/product/vue-material-dashboard",isOpen:!1,sidebarColors:[{color:"purple",active:!1},{color:"blue",active:!1},{color:"green",active:!0},{color:"orange",active:!1},{color:"red",active:!1}],sidebarImages:[{image:n(1685),active:!1},{image:n(7482),active:!0},{image:n(2934),active:!1},{image:n(3865),active:!1}]}},methods:{toggleDropDown:function(){this.isOpen=!this.isOpen},closeDropDown:function(){this.isOpen=!1},toggleList:function(t,e){t.forEach((function(t){t.active=!1})),e.active=!0},updateValue:function(t,e){this.$emit("update:".concat(t),e)},changeSidebarBackground:function(t){this.$emit("update:color",t.color),this.toggleList(this.sidebarColors,t)},changeSidebarImage:function(t){this.$emit("update:image",t.image),this.toggleList(this.sidebarImages,t)}}},X=U,z=(0,l.A)(X,N,Y,!1,null,null,null),H=z.exports,W={components:{TopNavbar:y,DashboardContent:Q,ContentFooter:O,MobileMenu:T,FixedPlugin:H},data:function(){return{sidebarBackground:"green",sidebarBackgroundImage:n(1685)}}},q=W,Z=(0,l.A)(q,v,b,!1,null,null,null),$=Z.exports,tt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"building-container"},[0===t.buildings.length?e("div",[t._v("Aucun bâtiment disponible")]):t._e(),t._l(t.buildings,(function(n){return e("div",{key:n.dynamicId},[e("h1",{staticClass:"building-title"},[t._v("Bâtiment : "+t._s(n.name))]),e("FloorView",{attrs:{floors:n.children||[]}})],1)}))],2)},et=[],nt=n(9201),it=(n(9868),function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-container"},[e("div",{staticClass:"left-pane"},[0===t.floors.length?e("div",[t._v("Aucun étage disponible")]):t._e(),t._l(t.floors,(function(n,i){return e("div",{key:n.dynamicId},[e("stats-card",{attrs:{"data-background-color":t.selectedFloorIndex===i?"green":""},on:{click:function(e){return t.selectFloor(i)}}},[e("template",{slot:"header"},[e("h2",[t._v(" Étage n° "+t._s(i)+" : "),e("span",{staticClass:"floor-name"},[t._v(t._s(n.name))])])]),e("template",{slot:"content"},[e("h3",{staticClass:"category"},[t._v(" Pourcentage d'occupation : "+t._s(t.getFloorOccupationPercentage(n.children).toFixed(0))+"% ")]),e("p",[t._v("Nombre total de pièces : "+t._s(t.getTotalRooms(n.children)))])])],2)],1)}))],2),e("div",{staticClass:"right-pane"},[t.selectedFloor?e("RoomView",{attrs:{rooms:t.selectedFloor.children||[]}}):t._e()],1)])}),at=[],ot=function(){var t=this,e=t._self._c;return e("div",{staticClass:"room-container"},[0===t.rooms.length?e("div",[t._v("Aucune pièce disponible")]):t._e(),t._l(t.rooms,(function(n,i){return e("div",{key:n.dynamicId,staticClass:"room-card"},[e("div",{staticClass:"PieceHeader"},[e("h4",[t._v("Pièce n° "+t._s(i+1)+" : "+t._s(n.name))]),e("h4",[t._v(t._s(n.dynamicId))])]),e("p",{staticClass:"occupation"},[t._v(" Occupation : "),e("span",{class:t.getOccupationClass(n.dynamicId)},[t._v(t._s(t.getRoomOccupation(n.dynamicId)))])])])}))],2)},rt=[],st={name:"RoomView",props:{rooms:{type:Array,required:!0,default:function(){return[]}}},computed:(0,nt.A)({},(0,m.L8)(["getRoomDetails"])),methods:(0,nt.A)((0,nt.A)({},(0,m.i0)(["fetchRoomDetails"])),{},{getRoomOccupation:function(t){var e=this.getRoomDetails(t);return e&&void 0!==e.occupation?e.occupation?"Occupée":"Non Occupée":"INDÉFINIE"},getOccupationClass:function(t){var e=this.getRoomDetails(t);return e&&void 0!==e.occupation?e.occupation?"true-occupation":"false-occupation":"undefined-occupation"}}),watch:{rooms:{immediate:!0,handler:function(t){var e=this;t.forEach((function(t){return e.fetchRoomDetails(t.dynamicId)}))}}}},ct=st,lt=(0,l.A)(ct,ot,rt,!1,null,null,null),ut=lt.exports,dt=function(){var t=this,e=t._self._c;return e("div",{class:["stats-card",t.dataBackgroundColor],on:{click:t.handleClick}},[e("div",{staticClass:"header"},[t._t("header")],2),e("div",{staticClass:"content"},[t._t("content")],2)])},pt=[],ft={name:"StatsCard",props:{dataBackgroundColor:{type:String,default:""}},methods:{handleClick:function(){this.$emit("click")}}},mt=ft,gt=(0,l.A)(mt,dt,pt,!1,null,null,null),ht=gt.exports,vt={name:"FloorView",components:{RoomView:ut,StatsCard:ht},props:{floors:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{selectedFloorIndex:0}},computed:(0,nt.A)((0,nt.A)({},(0,m.L8)(["getRoomDetails"])),{},{selectedFloor:function(){return this.floors[this.selectedFloorIndex]}}),methods:(0,nt.A)((0,nt.A)({},(0,m.i0)(["fetchRoomDetails"])),{},{getFloorOccupationPercentage:function(t){var e=this,n=0,i=0;return t.forEach((function(t){var a=e.getRoomDetails(t.dynamicId);a&&(void 0!==a.occupation?(!0===a.occupation&&n++,i++):i++)})),i>0?100*n/i:0},getTotalRooms:function(t){return t.length},selectFloor:function(t){this.selectedFloorIndex=t}}),watch:{floors:{immediate:!0,handler:function(t){var e=this;t.forEach((function(t){t.children&&t.children.forEach((function(t){return e.fetchRoomDetails(t.dynamicId)}))}))}}}},bt=vt,Ct=(0,l.A)(bt,it,at,!1,null,null,null),kt=Ct.exports,At={name:"BuildingView",components:{FloorView:kt},computed:(0,nt.A)({},(0,m.aH)({buildings:function(t){return t.buildings.children||[]}})),created:function(){this.fetchBuildings()},methods:(0,nt.A)({},(0,m.i0)(["fetchBuildings"]))},_t=At,xt=(0,l.A)(_t,tt,et,!1,null,null,null),yt=xt.exports,It=[{path:"/",component:$,redirect:"/dashboard",children:[{path:"dashboard",name:"Analyse d'occupation",component:yt}]}],wt=It,Dt={install:function(t){}},Et=Dt,St=n(9499),Ot={install:function(t){t.directive("click-outside",St.u$)}},Rt=Ot,Bt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar",style:t.sidebarStyle,attrs:{"data-color":t.sidebarItemColor,"data-image":t.sidebarBackgroundImage}},[e("div",{staticClass:"logo"},[e("a",{staticClass:"simple-text logo-mini",attrs:{href:"#"}},[e("div",{staticClass:"logo-img"},[e("img",{attrs:{src:t.imgLogo,alt:""}})])]),e("a",{staticClass:"simple-text logo-normal",attrs:{href:"https://www.creative-tim.com/product/vue-material-dashboard",target:"_blank"}},[t._v(" "+t._s(t.title)+" ")])]),e("div",{staticClass:"sidebar-wrapper"},[t._t("content"),e("md-list",{staticClass:"nav"},[t._t("default",(function(){return t._l(t.sidebarLinks,(function(t,n){return e("sidebar-link",{key:t.name+n,attrs:{to:t.path,link:t}})}))}))],2)],2)])},Mt=[],jt=(n(778),function(){var t=this,e=t._self._c;return e("li",{staticClass:"md-list-item"},[e("router-link",t._b({staticClass:"md-list-item-router md-list-item-container md-button-clean",on:{click:t.hideSidebar}},"router-link",t.$attrs,!1),[e("div",{staticClass:"md-list-item-content md-ripple"},[t._t("default",(function(){return[e("md-icon",[t._v(t._s(t.link.icon))]),e("p",[t._v(t._s(t.link.name))])]}))],2)])],1)}),Jt=[],Qt={inject:{autoClose:{default:!0}},props:{link:{type:[String,Object],default:function(){return{name:"",path:"",icon:""}}},tag:{type:String,default:"router-link"}},methods:{hideSidebar:function(){this.autoClose&&this.$sidebar&&!0===this.$sidebar.showSidebar&&this.$sidebar.displaySidebar(!1)}}},Pt=Qt,Ft=(0,l.A)(Pt,jt,Jt,!1,null,null,null),Kt=Ft.exports,Gt={components:{SidebarLink:Kt},props:{title:{type:String,default:"SpinalCom"},sidebarBackgroundImage:{type:String,default:n(7023)},imgLogo:{type:String,default:n(1167)},sidebarItemColor:{type:String,default:"green",validator:function(t){var e=["","purple","blue","green","orange","red"];return-1!==e.indexOf(t)}},sidebarLinks:{type:Array,default:function(){return[]}},autoClose:{type:Boolean,default:!0}},provide:function(){return{autoClose:this.autoClose}},computed:{sidebarStyle:function(){return{backgroundImage:"url(".concat(this.sidebarBackgroundImage,")")}}}},Lt=Gt,Tt=(0,l.A)(Lt,Bt,Mt,!1,null,null,null),Nt=Tt.exports,Yt={showSidebar:!1,displaySidebar:function(t){this.showSidebar=t}},Vt={install:function(t){t.mixin({data:function(){return{sidebarStore:Yt}}}),Object.defineProperty(t.prototype,"$sidebar",{get:function(){return this.$root.sidebarStore}}),t.component("side-bar",Nt),t.component("sidebar-link",Kt)}},Ut=Vt,Xt=n(444),zt=n.n(Xt),Ht=(n(5542),{install:function(t){t.use(Ut),t.use(zt())}}),Wt=n(9592),qt=n.n(Wt),Zt=new a.Ay({routes:wt,linkExactActiveClass:"nav-item active"});i["default"].prototype.$Chartist=qt(),i["default"].use(a.Ay),i["default"].use(Ht),i["default"].use(Et),i["default"].use(Rt),new i["default"]({el:"#app",store:h,render:function(t){return t(d)},router:Zt,data:{Chartist:qt()}})},1685:function(t,e,n){t.exports=n.p+"img/Batiment1.292dcf01.jpg"},7482:function(t,e,n){t.exports=n.p+"img/Batiment2.0ec84a10.jpg"},2934:function(t,e,n){t.exports=n.p+"img/Escalator.1e8cb4fc.jpg"},1167:function(t){t.exports="data:image/png;base64,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"},3865:function(t,e,n){t.exports=n.p+"img/main_numerique_page_equipe-1.114ae65c.png"},7023:function(t,e,n){t.exports=n.p+"img/sidebar-2.261b92e1.jpg"}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={exports:{}};return t[i].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,a,o){if(!i){var r=1/0;for(u=0;u<t.length;u++){i=t[u][0],a=t[u][1],o=t[u][2];for(var s=!0,c=0;c<i.length;c++)(!1&o||r>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[c])}))?i.splice(c--,1):(s=!1,o<r&&(r=o));if(s){t.splice(u--,1);var l=a();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[i,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,o,r=i[0],s=i[1],c=i[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var u=c(n)}for(e&&e(i);l<r.length;l++)o=r[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},i=self["webpackChunkvue_material_dashboard"]=self["webpackChunkvue_material_dashboard"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[504],(function(){return n(7711)}));i=n.O(i)})();
//# sourceMappingURL=app-legacy.d4826bb5.js.map