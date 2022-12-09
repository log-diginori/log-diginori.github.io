;/*FB_PKG_DELIM*/

__d("CometMarketplaceNoAccessContentContainerQuery.graphql",["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"scale"}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometMarketplaceNoAccessContentContainerQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometMarketplaceNoAccessContent_viewer"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometMarketplaceNoAccessContentContainerQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:"MarketplaceSettings",kind:"LinkedField",name:"marketplace_settings",plural:!1,selections:[{alias:null,args:null,concreteType:"MarketplaceAccessDeniedWarning",kind:"LinkedField",name:"access_denied_warning",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"warning_subtitle",plural:!1,selections:[{args:null,fragment:b("CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"),kind:"FragmentSpread"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"button_text",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"contact_facebook_url",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:"5063559107079065",metadata:{},name:"CometMarketplaceNoAccessContentContainerQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("CometMarketplaceNoAccessContent_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometMarketplaceNoAccessContent_viewer",selections:[{alias:null,args:null,concreteType:"MarketplaceSettings",kind:"LinkedField",name:"marketplace_settings",plural:!1,selections:[{alias:null,args:null,concreteType:"MarketplaceAccessDeniedWarning",kind:"LinkedField",name:"access_denied_warning",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"warning_subtitle",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"button_text",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"contact_facebook_url",storageKey:null}],storageKey:null}],storageKey:null}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("CometMarketplaceNoAccessContent.react",["CometLinkedEntityRenderer","CometMarketplaceNoAccessContent_viewer.graphql","CometRelay","CometTextWithEntitiesRelay.react","NullStatePermissions","TetraButton.react","TetraNullState.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometMarketplaceNoAccessContent_viewer.graphql"),a.viewer);a=a==null?void 0:(a=a.marketplace_settings)==null?void 0:a.access_denied_warning;var f=a==null?void 0:a.warning_subtitle;return i.jsx("div",{className:"x6s0dn4 x78zum5 xdt5ytf x1q1vt7x xl56j7k xh8yej3",children:i.jsx("div",{className:"x1gfrnbc",children:i.jsx(c("TetraNullState.react"),{action:i.jsx(c("TetraButton.react"),{label:(e=a==null?void 0:a.button_text)!=null?e:"",linkProps:{url:a==null?void 0:a.contact_facebook_url}}),body:f!=null?i.jsx(c("CometTextWithEntitiesRelay.react"),{renderers:{"*":[c("CometLinkedEntityRenderer")]},textWithEntities:f}):void 0,headline:(e=a==null?void 0:a.title)!=null?e:"",icon:c("NullStatePermissions")})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometMarketplaceNoAccessContentContainer.react",["CometErrorBoundary.react","CometMarketplaceFeedGlimmer.react","CometMarketplaceNoAccessContentContainerQuery.graphql","CometPlaceholder.react","CometRelay","MarketplaceCriticalErrorMessage.react","WebPixelRatio","deferredLoadComponent","react","requireDeferredForDisplay"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=c("deferredLoadComponent")(c("requireDeferredForDisplay")("CometMarketplaceNoAccessContent.react").__setRef("CometMarketplaceNoAccessContentContainer.react")),k=h!==void 0?h:h=b("CometMarketplaceNoAccessContentContainerQuery.graphql");function a(a){a.queries;a=d("CometRelay").useLazyLoadQuery(k,{scale:d("WebPixelRatio").get()});return i.jsx(c("CometErrorBoundary.react"),{fallback:function(){return i.jsx(c("MarketplaceCriticalErrorMessage.react"),{})},children:i.jsx(c("CometPlaceholder.react"),{fallback:i.jsx(c("CometMarketplaceFeedGlimmer.react"),{}),children:i.jsx(j,{viewer:a.viewer})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);