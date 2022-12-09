;/*FB_PKG_DELIM*/

__d("CometInputWithCommands.react",["CometComponentWithKeyCommands.react","CometKeys","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useMemo;function a(a){var b=i(function(){var b=[];a.enter!=null&&b.push({command:{key:c("CometKeys").ENTER},description:a.enter.description,handler:a.enter.handler,triggerFromInputs:!0});a["delete"]!=null&&b.push({command:{key:c("CometKeys").DELETE},description:a["delete"].description,handler:a["delete"].handler,triggerFromInputs:!0});a.up!=null&&b.push({command:{key:c("CometKeys").UP},description:a.up.description,handler:a.up.handler,triggerFromInputs:!0});a.down!=null&&b.push({command:{key:c("CometKeys").DOWN},description:a.down.description,handler:a.down.handler,triggerFromInputs:!0});a.tab!=null&&b.push({command:{key:c("CometKeys").TAB},description:a.tab.description,handler:a.tab.handler,triggerFromInputs:!0});a.esc!=null&&b.push({command:{key:c("CometKeys").ESCAPE},description:a.esc.description,handler:a.esc.handler,triggerFromInputs:!0});return b},[a["delete"],a.down,a.enter,a.esc,a.tab,a.up]);return h.jsx(c("CometComponentWithKeyCommands.react"),{commandConfigs:b,debugName:"InputSubmit",elementType:a.isInline===!0?"span":"div",xstyle:a.xstyle,children:a.children})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("cometReportBugDefaultOptions",["fbt","ix","fbicon"],(function(a,b,c,d,e,f,g,h,i){"use strict";a="public";b=h._("__JHASH__Sqzl58OucnB__JHASH__");c={addOnPrimary:{icon:d("fbicon")._(i("899558"),24),size:60,type:"contained-icon"},body:h._("__JHASH__5q7igOED7sX__JHASH__"),dialogTitle:h._("__JHASH__OPf0ZWrh9kh__JHASH__"),headline:h._("__JHASH__mBwCXx86-aM__JHASH__")};e={addOnPrimary:{icon:d("fbicon")._(i("502063"),24),size:60,type:"contained-icon"},body:h._("__JHASH__T0wDs12oUvR__JHASH__"),dialogTitle:h._("__JHASH__d8pLVqIL7yK__JHASH__"),headline:h._("__JHASH__06damxz0Ivb__JHASH__")};g.defaultProductListType=a;g.defaultInitialTitle=b;g.defaultFeedbackProblemTypeItem=c;g.defaultBugProblemTypeItem=e}),98);
__d("useCometReportBug",["fbt","CometCardedDialogLoadingStateLegacy.react","JSResourceForInteraction","cometReportBugDefaultOptions","promiseDone","react","useCometLazyDialog"],(function(a,b,c,d,e,f,g,h){"use strict";b=d("react");var i=c("react"),j=b.useCallback,k=b.useRef,l=c("JSResourceForInteraction")("CometBugReportingDialog.react").__setRef("useCometReportBug"),m=c("JSResourceForInteraction")("VideoPlayerShakaPerformanceLogger").__setRef("useCometReportBug"),n=!1;function a(a){var b=k(null),e=c("useCometLazyDialog")(l,function(b){return i.jsx(c("CometCardedDialogLoadingStateLegacy.react"),{onClose:b,title:a==null?h._("__JHASH__Sqzl58OucnB__JHASH__"):h._("__JHASH___hkwAd2dM-2__JHASH__",[h._param("product name",a)]),withCloseButton:!0})}),f=e[0];e=j(function(b,e){if(!n){var g;c("promiseDone")(m.load().then(function(a){a.flushQueuedLogs()}));f(babelHelpers["extends"]({productName:a},b,{bugProblemTypeItem:(g=b==null?void 0:b.bugProblemTypeItem)!=null?g:d("cometReportBugDefaultOptions").defaultBugProblemTypeItem,feedbackProblemTypeItem:(g=b==null?void 0:b.feedbackProblemTypeItem)!=null?g:d("cometReportBugDefaultOptions").defaultFeedbackProblemTypeItem,initialTitle:(g=b==null?void 0:b.initialTitle)!=null?g:d("cometReportBugDefaultOptions").defaultInitialTitle,productListType:(g=b==null?void 0:b.productListType)!=null?g:d("cometReportBugDefaultOptions").defaultProductListType}),function(){e!=null&&e(),n=!1});n=!0}},[f]);return[e,b]}g["default"]=a}),98);
__d("CixWarningScreensFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743358");c=b("FalcoLoggerInternal").create("cix_warning_screens",a);e.exports=c}),null);
__d("WarningScreenType",[],(function(a,b,c,d,e,f){a=Object.freeze({GRAPHIC:"Violence and Gore",HATE:"Hate",CHILD_ABUSE_NON_SEXUAL:"Child Abuse (non-sexual)",SENSITIVE:"Sensitive",CRUEL:"Cruel",MATURE_ONLY_14_AND_OVER:"Mature Only 14 And Over",SENSITIVE_TEXT:"Sensitive Text",FALSE_NEWS:"False News",FALSE_HEADLINE_NEWS:"False Headline News",MISLEADING_NEWS:"Misleading News",ALTERED_MEDIA:"Altered Media",MISSING_CONTEXT:"Missing Context",GOVERNMENT_CORRECTION:"Government Correction",CENSUS_BORDERLINE:"Census Borderline",WIDELY_DEBUNKED_HOAX_COVID:"Widely Debunked Hoax Covid",HEALTH_GENERIC:"Health Generic",GENERIC_INFORM_TREATMENT:"Generic Inform Treatment",CLIMATE_GENERIC_INFORM_TREATMENT:"Climate Science Generic Inform Treatment",NEWSWORTHY:"Newsworthy",SELF_APPLIED_GRAPHIC_VIOLENCE:"Self Applied Graphic Violence",CIVIC_VOTER_INFORM_TREATMENT:"Civic Voter Inform Treatment",CIVIC_VOTER_INFORM_TREATMENT_FOR_MM:"Civic Voter Inform Treatment For Myanmar",CIVIC_VOTER_INFORM_TREATMENT_FOR_BR:"Civic Voter Inform Treatment For Brazil",CIVIC_VOTER_INFORM_TREATMENT_FOR_ID:"Civic Voter Inform Treatment For Indonesia",CIVIC_FACTS_ABOUT_VOTING_INFORM_TREATMENT:"Civic Facts About Voting Inform Treatment",HACK_AND_LEAK:"Hack And Leak",GRAPHIC_MISINFO:"Graphic Misinfo",WIDELY_DEBUNKED_HOAX_VACCINE:"Widely Debunked Hoax Vaccine",WORK_RECRUITING_GROUP_POST:"Recruiting Group Post",USER_APPLIED:"User Applied",BLOCKS:"Blocks",MISINFORMATION:"Misinformation",GENERIC_CIVIC:"Generic Civic",COMPASS:"Compass",GENERIC_INFORM:"Generic Inform",DUMMY_GIT:"Dummy GIT",ANIMAL_VIOLENCE:"Animal Violence",POLITICAL:"Politically Charged",PROFANITY:"Profanity",CENSUS_MISINFO:"Census Misinfo",COVID_ELECTION_BORDERLINE:"Covd Election Borderline",OBJECTIONABLE:"Sexual"});f["default"]=a}),66);
__d("CometWarningScreenClientLogger",["CixWarningScreensFalcoEvent","WarningScreenType"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b,d=(b=a.contentIDRaw)==null?void 0:b.split(":").filter(function(a){return a!==""}).pop();c("CixWarningScreensFalcoEvent").log(function(){return{action:a.action,attribution_id_v2:a.attribution_id_v2,blocks_logging_data:a.blocksLoggingData,content_id_raw:d,event:a.event,inform_session_id:a.session_id,integrity_ui_element:a.integrityUIElement,product:a.product,render_type:a.renderType,story_ent_identifier_graphql_id:a.storyID,story_render_location:a.storyRenderLocation,surface:a.surface,top_warning_screen_category:h(a.objectionableCategory),vpvd:a.vpvd}})}function h(a){if(a==null)return null;a=a;return c("WarningScreenType")[a]}g.logInformTreatmentEvent=a}),98);
__d("updateTagReducer",["SharedAIProductTagUtils"],(function(a,b,c,d,e,f,g){"use strict";function h(a,b,c){return d("SharedAIProductTagUtils").isPointNearbyPoint(a,b,c.x,c.y)}function a(a,b){var c;switch(b.type){case"REMOVE_TAG":return babelHelpers["extends"]({},a,{tags:((c=a.tags)!=null?c:[]).filter(function(a){return(a==null?void 0:(a=a.taggee)==null?void 0:a.id)!==b.tagToDelete})});case"ADD_TAG":return babelHelpers["extends"]({},a,{tags:[].concat((c=a.tags)!=null?c:[],[b.newTag]),unknownProductTagSuggestions:((c=a.unknownProductTagSuggestions)!=null?c:[]).filter(function(a){return!h(a.x,a.y,b.newTag)})});case"SET_VIDEO_PRODUCT_TAGS":return babelHelpers["extends"]({},a,{videoProductTags:(c=b.videoProductTags)!=null?c:[]});case"ADD_KNOWN_AI_SUGGESTED_PRODUCT_TAG":var d={source:b.newAISuggestedProductTag.source,taggee:b.newAISuggestedProductTag.taggee,x:b.newAISuggestedProductTag.x,y:b.newAISuggestedProductTag.y};return babelHelpers["extends"]({},a,{tags:((c=a.tags)!=null?c:[]).filter(function(a){return a.taggee.id===d.taggee.id}).length>0?(c=a.tags)!=null?c:[]:[].concat((c=a.tags)!=null?c:[],[d])});case"ADD_UNKNOWN_AI_SUGGESTED_PRODUCT_TAG":return babelHelpers["extends"]({},a,{unknownProductTagSuggestions:((c=a.unknownProductTagSuggestions)!=null?c:[]).includes(b.newUnknownSuggestedProductTag)||((c=a.tags)!=null?c:[]).some(function(a){return h(b.newUnknownSuggestedProductTag.x,b.newUnknownSuggestedProductTag.y,a)})?(c=a.unknownProductTagSuggestions)!=null?c:[]:[].concat((c=a.unknownProductTagSuggestions)!=null?c:[],[b.newUnknownSuggestedProductTag])});case"SET_SAVE_PRODUCT_TAGS_DISABLED":return babelHelpers["extends"]({},a,{isSaveProductTagsDisabled:b.shouldDisable});case"RESET":if(b.finalMutatedMediaAttachment.fileType==="PHOTO"){return babelHelpers["extends"]({},a,{tags:((c=b.finalMutatedMediaAttachment.data.tags)!=null?c:[]).filter(Boolean)})}}return a}g["default"]=a}),98);
__d("StoriesArchiveCardStoreForBlue",[],(function(a,b,c,d,e,f){"use strict";a={DeletedStoryList:new Set(),SeenStoryList:new Set(),StoriesArchiveDataMap:new Map()};f["default"]=a}),66);
__d("CometMediaRemoveTagFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743382");c=b("FalcoLoggerInternal").create("comet_media_remove_tag",a);e.exports=c}),null);
__d("CometMediaVpvdFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743384");c=b("FalcoLoggerInternal").create("comet_media_vpvd",a);e.exports=c}),null);/*FB_PKG_DELIM*/
__d("useCometSettingsDropdownAdditionalProfileListCell_query.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:"eligible_for_direct_switching_from_prodash",args:[{kind:"Literal",name:"gk_name",value:"community_presence_prodash_voice_switcher"}],concreteType:"EntGKCheck",kind:"LinkedField",name:"gk_check",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"passes_gk",storageKey:null}],storageKey:'gk_check(gk_name:"community_presence_prodash_voice_switcher")'};return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"useCometSettingsDropdownAdditionalProfileListCell_query",selections:[{args:null,kind:"FragmentSpread",name:"useCometProfileSwitchMutation_query"},{kind:"RequiredField",field:{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{kind:"RequiredField",field:{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_failing_page_publishing_authorization",storageKey:null},{kind:"RequiredField",field:{alias:"first_profile",args:[{kind:"Literal",name:"first",value:1}],concreteType:"UserProfileSwitcherEligibleProfilesConnection",kind:"LinkedField",name:"profile_switcher_eligible_profiles",plural:!1,selections:[{alias:null,args:null,concreteType:"ProfileSwitcherEligibleProfile",kind:"LinkedField",name:"nodes",plural:!0,selections:[{kind:"RequiredField",field:{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile",plural:!1,selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},action:"THROW",path:"viewer.actor.first_profile.nodes.profile.id"},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:36},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:36}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"is_comet",value:!0}],kind:"ScalarField",name:"unseen_update_count",storageKey:"unseen_update_count(is_comet:true)"},a],storageKey:null},action:"THROW",path:"viewer.actor.first_profile.nodes.profile"}],storageKey:null}],storageKey:"profile_switcher_eligible_profiles(first:1)"},action:"THROW",path:"viewer.actor.first_profile"},a],type:"User",abstractKey:null}],storageKey:null},action:"THROW",path:"viewer.actor"}],storageKey:null},action:"THROW",path:"viewer"}],type:"Query",abstractKey:null}}();e.exports=a}),null);
__d("useCometSettingsDropdownAdditionalProfileListCell",["CometRelay","getProfileSwitcherListCellProps","gkx","react","useCometProfessionalDashboardIsRouteComingFromProDash","useCometProfileSwitchMutation","useCometProfileSwitchTracer","useCometSettingsDropdownAdditionalProfileListCell_query.graphql","useProfileSwitcherEngagementClickCallback","useSwitchProfileSwitcherByController"],(function(a,b,c,d,e,f,g){"use strict";var h;d("react");function a(a,e,f,g){var i,j,k;g===void 0&&(g=!1);a=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometSettingsDropdownAdditionalProfileListCell_query.graphql"),a);i=((i=a.viewer.actor.eligible_for_direct_switching_from_prodash)==null?void 0:i.passes_gk)===!0;var l=(a==null?void 0:(j=a.viewer)==null?void 0:(j=j.actor)==null?void 0:(j=j.first_profile)==null?void 0:j.nodes.length)?a==null?void 0:(j=a.viewer)==null?void 0:(j=j.actor)==null?void 0:(j=j.first_profile)==null?void 0:j.nodes[0].profile:null;j=(j=a==null?void 0:(j=a.viewer)==null?void 0:(j=j.actor)==null?void 0:j.is_failing_page_publishing_authorization)!=null?j:!1;k=(l==null?void 0:(k=l.eligible_for_direct_switching_from_prodash)==null?void 0:k.passes_gk)===!0;i=c("useCometProfessionalDashboardIsRouteComingFromProDash")()&&(i||k);var m=c("useCometProfileSwitchMutation")({data:a,onCompleted:e,onError:e}),n=i?window.location.href:void 0,o=c("useCometProfileSwitchTracer")({origin:"voice_switcher"}),p=c("useProfileSwitcherEngagementClickCallback")({item_type:"profile",product_bucket:"profile_account_switcher",profile_id_dummy:l==null?void 0:l.id,subsurface:"settings_menu",surface:"navigation"});k=c("useSwitchProfileSwitcherByController")(l==null?void 0:l.id);a=k.form;var q=k.onSubmit;if(l==null)return{cellProps:{},itemKey:"profile-account-switcher",render:!1};i={id:l.id,name:l.name,profile_picture:{height:(e=l.profile_picture)==null?void 0:e.height,scale:(i=l.profile_picture)==null?void 0:i.scale,uri:(k=l.profile_picture)==null?void 0:k.uri,width:(e=l.profile_picture)==null?void 0:e.width},unseen_update_count:l.unseen_update_count};var r=c("gkx")("6106");return{cellProps:c("getProfileSwitcherListCellProps")({hiddenForm:r&&a?a:null,isFailingPagePublishingAuthorization:j,onPress:function(a){f&&f(a),p(),o(function(a){r&&q?(a.markTraceAsSuccessOnUnload(),q()):m(l==null?void 0:l.id,a,n,"voice_switcher")})},selected:g,size:36,testid:"comet-settings-dropdown-additional-profile-cell",user:i}),itemKey:"profile-account-switcher",render:!0}}g["default"]=a}),98);
__d("PaymentsCometTransactionHubSettingsRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5784148898268922"}),null);/*FB_PKG_DELIM*/
__d("MWTextPairing.react",["MDSTextPairing.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsx(c("MDSTextPairing.react"),babelHelpers["extends"]({},a))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("XCometRestrictedAccountsControllerRouteBuilder",["jsExtraRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsExtraRouteBuilder")("/messages/restricted/t/{thread_key}/",Object.freeze({}),["/messages/restricted/"],void 0);b=a;g["default"]=b}),98);
__d("XMessengerDotComCometRestrictedAccountsControllerRouteBuilder",["jsExtraRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsExtraRouteBuilder")("/restricted/t/{thread_key}/",Object.freeze({}),["/restricted/"],void 0);b=a;g["default"]=b}),98);
__d("MWInboxRestrictedAccountsRouteBuilder.bs",["CurrentEnvironment","XCometRestrictedAccountsControllerRouteBuilder","XMessengerDotComCometRestrictedAccountsControllerRouteBuilder"],(function(a,b,c,d,e,f,g){"use strict";a=c("CurrentEnvironment").facebookdotcom?{buildURL:function(a){return c("XCometRestrictedAccountsControllerRouteBuilder").buildURL(a)},buildURLWithoutThread:function(a){return c("XCometRestrictedAccountsControllerRouteBuilder").buildExtraURL("/messages/restricted/",a)}}:{buildURL:function(a){return c("XMessengerDotComCometRestrictedAccountsControllerRouteBuilder").buildURL(a)},buildURLWithoutThread:function(a){return c("XMessengerDotComCometRestrictedAccountsControllerRouteBuilder").buildExtraURL("/restricted/",a)}};b=a.buildURL;d=a.buildURLWithoutThread;g.routeBuilderModule=a;g.buildURL=b;g.buildURLWithoutThread=d}),98);
__d("LSPlatformLogout.bs",["LSCookie.bs","Promise","Promise.bs","QPLUserFlow","cr:3571","qpl","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function i(a){if(b("cr:3571")==null)return b("Promise").resolve();else{c("QPLUserFlow").start(c("qpl")._(25311266,"236"),{cancelOnUnload:!0,timeoutInMs:3e3});return d("Promise.bs").$$catch(b("Promise").all([b("cr:3571").deleteDB(),d("LSCookie.bs").deleteCookie()]).then(function(a){c("QPLUserFlow").endSuccess(c("qpl")._(25311266,"236"));return b("Promise").resolve()}),function(a){c("QPLUserFlow").endFailure(c("qpl")._(25311266,"236"),"fail");return b("Promise").resolve()})}}function a(a){return h.useCallback(i,[])}g.LSPersistedDatabaseProvider=b("cr:3571");g.logout=i;g.useHook=a}),98);
__d("MessengerWellbeingRestrictFailedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("474");c=b("FalcoLoggerInternal").create("messenger_wellbeing_restrict_failed",a);e.exports=c}),null);
__d("MessengerWellbeingRestrictFailedFalcoEvent.bs",["MessengerWellbeingRestrictFailedFalcoEvent"],(function(a,b,c,d,e,f){"use strict";function a(a){b("MessengerWellbeingRestrictFailedFalcoEvent").log(a)}function c(a){b("MessengerWellbeingRestrictFailedFalcoEvent").logAsync(a)}function d(a){b("MessengerWellbeingRestrictFailedFalcoEvent").logImmediately(a)}function e(a){b("MessengerWellbeingRestrictFailedFalcoEvent").logCritical(a)}f.log=a;f.logAsync=c;f.logImmediately=d;f.logCritical=e}),null);
__d("MessengerWellbeingRestrictSucceededFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("480");c=b("FalcoLoggerInternal").create("messenger_wellbeing_restrict_succeeded",a);e.exports=c}),null);
__d("MessengerWellbeingRestrictSucceededFalcoEvent.bs",["MessengerWellbeingRestrictSucceededFalcoEvent"],(function(a,b,c,d,e,f){"use strict";function a(a){b("MessengerWellbeingRestrictSucceededFalcoEvent").log(a)}function c(a){b("MessengerWellbeingRestrictSucceededFalcoEvent").logAsync(a)}function d(a){b("MessengerWellbeingRestrictSucceededFalcoEvent").logImmediately(a)}function e(a){b("MessengerWellbeingRestrictSucceededFalcoEvent").logCritical(a)}f.log=a;f.logAsync=c;f.logImmediately=d;f.logCritical=e}),null);
__d("MessengerWellbeingRestrictTappedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("481");c=b("FalcoLoggerInternal").create("messenger_wellbeing_restrict_tapped",a);e.exports=c}),null);
__d("MessengerWellbeingRestrictTappedFalcoEvent.bs",["MessengerWellbeingRestrictTappedFalcoEvent"],(function(a,b,c,d,e,f){"use strict";function a(a){b("MessengerWellbeingRestrictTappedFalcoEvent").log(a)}function c(a){b("MessengerWellbeingRestrictTappedFalcoEvent").logAsync(a)}function d(a){b("MessengerWellbeingRestrictTappedFalcoEvent").logImmediately(a)}function e(a){b("MessengerWellbeingRestrictTappedFalcoEvent").logCritical(a)}f.log=a;f.logAsync=c;f.logImmediately=d;f.logCritical=e}),null);
__d("MessengerWellbeingUnrestrictFailedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("482");c=b("FalcoLoggerInternal").create("messenger_wellbeing_unrestrict_failed",a);e.exports=c}),null);
__d("MessengerWellbeingUnrestrictFailedFalcoEvent.bs",["MessengerWellbeingUnrestrictFailedFalcoEvent"],(function(a,b,c,d,e,f){"use strict";function a(a){b("MessengerWellbeingUnrestrictFailedFalcoEvent").log(a)}function c(a){b("MessengerWellbeingUnrestrictFailedFalcoEvent").logAsync(a)}function d(a){b("MessengerWellbeingUnrestrictFailedFalcoEvent").logImmediately(a)}function e(a){b("MessengerWellbeingUnrestrictFailedFalcoEvent").logCritical(a)}f.log=a;f.logAsync=c;f.logImmediately=d;f.logCritical=e}),null);
__d("MessengerWellbeingUnrestrictSucceededFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("483");c=b("FalcoLoggerInternal").create("messenger_wellbeing_unrestrict_succeeded",a);e.exports=c}),null);
__d("MessengerWellbeingUnrestrictSucceededFalcoEvent.bs",["MessengerWellbeingUnrestrictSucceededFalcoEvent"],(function(a,b,c,d,e,f){"use strict";function a(a){b("MessengerWellbeingUnrestrictSucceededFalcoEvent").log(a)}function c(a){b("MessengerWellbeingUnrestrictSucceededFalcoEvent").logAsync(a)}function d(a){b("MessengerWellbeingUnrestrictSucceededFalcoEvent").logImmediately(a)}function e(a){b("MessengerWellbeingUnrestrictSucceededFalcoEvent").logCritical(a)}f.log=a;f.logAsync=c;f.logImmediately=d;f.logCritical=e}),null);
__d("MessengerWellbeingUnrestrictTappedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("484");c=b("FalcoLoggerInternal").create("messenger_wellbeing_unrestrict_tapped",a);e.exports=c}),null);
__d("MessengerWellbeingUnrestrictTappedFalcoEvent.bs",["MessengerWellbeingUnrestrictTappedFalcoEvent"],(function(a,b,c,d,e,f){"use strict";function a(a){b("MessengerWellbeingUnrestrictTappedFalcoEvent").log(a)}function c(a){b("MessengerWellbeingUnrestrictTappedFalcoEvent").logAsync(a)}function d(a){b("MessengerWellbeingUnrestrictTappedFalcoEvent").logImmediately(a)}function e(a){b("MessengerWellbeingUnrestrictTappedFalcoEvent").logCritical(a)}f.log=a;f.logAsync=c;f.logImmediately=d;f.logCritical=e}),null);
__d("LsMessageRequestsEntryPoint.bs",["bs_caml_int64"],(function(a,b,c,d,e,f){"use strict";a=b("bs_caml_int64").zero;c=b("bs_caml_int64").one;d=[0,2];e=[0,3];b=[0,4];var g=[0,5];f.settings=a;f.pendingRequests=c;f.notifications=d;f.chatTabSettings=e;f.chatTabPendingRequests=b;f.inboxFolderList=g}),null);