(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ConfigDiscovery"],{cf55:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-data-iterator",{attrs:{items:t.items,"item-key":"host","hide-default-footer":"","single-expand":t.expand},scopedSlots:t._u([{key:"header",fn:function(){return[a("v-toolbar",{staticClass:"mb-1",attrs:{color:"primary lighten-1",dense:""}},[a("v-toolbar-title",[t._v("Discovery Agents")]),a("v-spacer"),a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-plus-box")]),a("span",[t._v("Add Discovery Agent")])],1)],1)]},proxy:!0},{key:"no-data",fn:function(){return[a("v-alert",{staticClass:"ma-8",attrs:{border:"left",outlined:"",type:"primary"}},[a("span",[t._v("No Discovery Agents are defined."),a("v-btn",{staticClass:"ml-2",attrs:{color:t.navColor+" darken-2",small:""},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[a("span",[t._v("Add Discovery Agent")])])],1)])]},proxy:!0},{key:"default",fn:function(e){var s=e.items,o=e.isExpanded,i=e.expand;return[a("v-row",t._l(s,(function(e){return a("v-col",{key:e.host,attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[a("v-card",[a("v-toolbar",{attrs:{dense:""}},[a("v-toolbar-title",[a("span",[t._v(t._s(e.host))])]),a("v-spacer"),a("v-switch",{staticClass:"mt-4",attrs:{color:t.navColor,"input-value":o(e),label:o(e)?"Editing":"Edit"},on:{change:function(t){return i(e,t)}}})],1),o(e)?a("v-list",{attrs:{dense:""}},[a("v-list-item",[a("v-list-item-content",[a("v-text-field",{attrs:{label:"Discovery Hostname"},model:{value:e.host,callback:function(a){t.$set(e,"host",a)},expression:"item.host"}})],1),a("v-list-item-content",{staticClass:"align-end"})],1),a("v-list-item",[a("v-list-item-content",[a("v-text-field",{attrs:{label:"Non-encrypted Agent URL"},model:{value:e.ws_url,callback:function(a){t.$set(e,"ws_url",a)},expression:"item.ws_url"}})],1),a("v-list-item-content",{staticClass:"align-end"})],1),a("v-list-item",[a("v-list-item-content",[a("v-text-field",{attrs:{label:"Encrypted Agent URL"},model:{value:e.wss_url,callback:function(a){t.$set(e,"wss_url",a)},expression:"item.wss_url"}})],1),a("v-list-item-content",{staticClass:"align-end"})],1),a("v-list-item",[a("v-btn",{attrs:{color:"success"},on:{click:function(a){return t.save(e)}}},[t._v("Save")]),a("v-spacer"),a("v-btn",{attrs:{color:"error"},on:{click:function(a){return t.remove(e)}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-delete")]),a("span",[t._v("Delete")])],1)],1)],1):t._e()],1)],1)})),1)]}}])}),a("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline primary",attrs:{"primary-title":""}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-plus-box")]),a("span",[t._v("Add Discovery Agent")])],1),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"Hostname",required:""},model:{value:t.newitem.host,callback:function(e){t.$set(t.newitem,"host",e)},expression:"newitem.host"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{value:"1234",label:"Port",hint:"Default discovery port is 1234",required:""},model:{value:t.newitem.port,callback:function(e){t.$set(t.newitem,"port",e)},expression:"newitem.port"}})],1)],1)],1)],1),a("v-card-actions",[a("v-btn",{staticClass:"ma-2",attrs:{color:"success"},on:{click:function(e){return t.createAgent()}}},[t._v("Create Discovery Agent")]),a("v-btn",{staticClass:"ma-2",attrs:{color:"error"},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")])],1)],1)],1),t.deleteitem?a("v-dialog",{attrs:{"max-width":"400"},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline red--text"},[t._v("Delete Agent: "),a("strong",[t._v(t._s(t.deleteitem.host))]),t._v("?")])]),a("v-card-text",[a("h3",[t._v(t._s(t.deleteitem.host))]),a("div",[t._v("Are you sure you want to delete this Discovery Agent?")])]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(e){t.deleteDialog=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"red darken-1"},on:{click:function(e){return t.removeAgent()}}},[t._v("Delete")])],1)],1)],1):t._e()],1)},o=[],i=(a("99af"),a("07ac"),{name:"ConfigDiscovery",components:{},data:function(){return{search:"",filter:{},dialog:!1,deleteDialog:!1,newitem:{},deleteitem:null,expand:!0}},computed:{items:function(){return Object.values(this.$store.state.data.discoveries)}},methods:{save:function(t){this.$store.commit("data/updateDiscovery",{key:t.host,data:t})},createAgent:function(){this.dialog=!1,this.logDebug("Creating new discovery agent: "+this.newitem.host);var t="ws",e={host:this.newitem.host,port:this.newitem.port,url:"".concat(t,"://").concat(this.newitem.host,":").concat(this.newitem.port)};this.$store.commit("data/addDiscovery",{key:e.host,data:e})},remove:function(t){this.deleteitem=t,this.deleteDialog=!0},removeAgent:function(){this.logDebug("Deleting agent: "+this.deleteitem.host),this.$store.commit("data/removeDiscovery",this.deleteitem.host),this.deleteitem=null}}}),n=i,r=a("2877"),l=a("6544"),c=a.n(l),d=a("0798"),v=a("8336"),m=a("b0af"),u=a("99d9"),p=a("62ad"),f=a("a523"),h=a("c377"),g=a("169a"),b=a("132d"),w=a("8860"),_=a("da13"),y=a("5d23"),x=a("0fd9"),D=a("2fa4"),k=a("b73d"),C=a("8654"),A=a("71d9"),V=a("2a7f"),$=Object(r["a"])(n,s,o,!1,null,null,null);e["default"]=$.exports;c()($,{VAlert:d["a"],VBtn:v["a"],VCard:m["a"],VCardActions:u["a"],VCardText:u["c"],VCardTitle:u["d"],VCol:p["a"],VContainer:f["a"],VDataIterator:h["a"],VDialog:g["a"],VIcon:b["a"],VList:w["a"],VListItem:_["a"],VListItemContent:y["a"],VRow:x["a"],VSpacer:D["a"],VSwitch:k["a"],VTextField:C["a"],VToolbar:A["a"],VToolbarTitle:V["b"]})}}]);
//# sourceMappingURL=ConfigDiscovery.b333f548.js.map