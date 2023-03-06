"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[60504],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return b}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=c(n),p=r,b=f["".concat(s,".").concat(p)]||f[p]||d[p]||o;return n?a.createElement(b,i(i({ref:t},l),{},{components:n})):a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[f]="string"==typeof e?e:r,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return S}});var a=n(83117),r=n(67294),o=n(86010),i=n(12466),u=n(16550),s=n(91980),c=n(67392),l=n(50012);function f(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:f(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function b(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,u.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function m(e){var t,n,a,o,i=e.defaultValue,u=e.queryString,s=void 0!==u&&u,c=e.groupId,f=d(e),m=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:f})})),v=m[0],g=m[1],h=b({queryString:s,groupId:c}),y=h[0],k=h[1],S=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,l.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=S[0],x=S[1],N=function(){var e=null!=y?y:w;return p({value:e,tabValues:f})?e:null}();return(0,r.useLayoutEffect)((function(){N&&g(N)}),[N]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),x(e)}),[k,x,f]),tabValues:f}}var v=n(72389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var t=e.className,n=e.block,u=e.selectedValue,s=e.selectValue,c=e.tabValues,l=[],f=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=l.indexOf(t),a=c[n].value;a!==u&&(f(t),s(a))},p=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;n=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var o,i=l.indexOf(e.currentTarget)-1;n=null!=(o=l[i])?o:l[l.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return l.push(e)},onKeyDown:p,onClick:d},i,{className:(0,o.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":u===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function k(e){var t=m(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function S(e){var t=(0,v.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},19643:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return f}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=(n(74866),n(85162),["components"]),u={id:"status-bar",title:"Different status bar configuration based on route",sidebar_label:"Different status bar configuration based on route"},s=void 0,c={unversionedId:"status-bar",id:"version-5.x/status-bar",title:"Different status bar configuration based on route",description:"If you don't have a navigation header, or your navigation header changes color based on the route, you'll want to ensure that the correct color is used for the content.",source:"@site/versioned_docs/version-5.x/status-bar.md",sourceDirName:".",slug:"/status-bar",permalink:"/docs/5.x/status-bar",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/status-bar.md",tags:[],version:"5.x",frontMatter:{id:"status-bar",title:"Different status bar configuration based on route",sidebar_label:"Different status bar configuration based on route"},sidebar:"version-5.x/docs",previous:{title:"Hiding tab bar in specific screens",permalink:"/docs/5.x/hiding-tabbar-in-screens"},next:{title:"Screen options with nested navigators",permalink:"/docs/5.x/screen-options-resolution"}},l={},f=[{value:"Stack",id:"stack",level:2},{value:"Tabs and Drawer",id:"tabs-and-drawer",level:2}],d={toc:f},p="wrapper";function b(e){var t=e.components,u=(0,r.Z)(e,i);return(0,o.kt)(p,(0,a.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you don't have a navigation header, or your navigation header changes color based on the route, you'll want to ensure that the correct color is used for the content."),(0,o.kt)("h2",{id:"stack"},"Stack"),(0,o.kt)("p",null,"This is a simple task when using a stack. You can render the ",(0,o.kt)("inlineCode",{parentName:"p"},"StatusBar")," component, which is exposed by React Native, and set your config."),(0,o.kt)("samp",{id:"status-bar"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Text, StatusBar, Button, StyleSheet } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\nimport { SafeAreaProvider } from 'react-native-safe-area-context';\nimport SafeAreaView from 'react-native-safe-area-view';\n\nfunction Screen1({ navigation }) {\n  return (\n    <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>\n      <StatusBar barStyle=\"light-content\" backgroundColor=\"#6a51ae\" />\n      <Text style={{ color: '#fff' }}>Light Screen</Text>\n      <Button\n        title=\"Next screen\"\n        onPress={() => navigation.navigate('Screen2')}\n        color=\"#fff\"\n      />\n    </SafeAreaView>\n  );\n}\n\nfunction Screen2({ navigation }) {\n  return (\n    <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>\n      <StatusBar barStyle=\"dark-content\" backgroundColor=\"#ecf0f1\" />\n      <Text>Dark Screen</Text>\n      <Button\n        title=\"Next screen\"\n        onPress={() => navigation.navigate('Screen1')}\n      />\n    </SafeAreaView>\n  );\n}\n\nconst Stack = createStackNavigator();\n\nexport default function App() {\n  return (\n    <SafeAreaProvider>\n      <NavigationContainer>\n        <Stack.Navigator headerMode=\"none\">\n          <Stack.Screen name=\"Screen1\" component={Screen1} />\n          <Stack.Screen name=\"Screen2\" component={Screen2} />\n        </Stack.Navigator>\n      </NavigationContainer>\n    </SafeAreaProvider>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },\n});\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"StackNavigator with different StatusBar configs",src:n(27267).Z,width:"895",height:"843"})),(0,o.kt)("h2",{id:"tabs-and-drawer"},"Tabs and Drawer"),(0,o.kt)("p",null,"If you're using a tab or drawer navigator, it's a bit more complex because all of the screens in the navigator might be rendered at once and kept rendered - that means that the last ",(0,o.kt)("inlineCode",{parentName:"p"},"StatusBar")," config you set will be used (likely on the final tab of your tab navigator, not what the user is seeing)."),(0,o.kt)("p",null,"To fix this, we'll have to do make the status bar component aware of screen focus and render it only when the screen is focused. We can achieve this by using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/use-is-focused"},(0,o.kt)("inlineCode",{parentName:"a"},"useIsFocused")," hook")," and creating a wrapper component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { StatusBar } from 'react-native';\nimport { useIsFocused } from '@react-navigation/native';\n\nfunction FocusAwareStatusBar(props) {\n  const isFocused = useIsFocused();\n\n  return isFocused ? <StatusBar {...props} /> : null;\n}\n")),(0,o.kt)("p",null,"Now, our screens (both ",(0,o.kt)("inlineCode",{parentName:"p"},"Screen1.js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Screen2.js"),") will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"FocusAwareStatusBar")," component instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"StatusBar")," component from React Native:"),(0,o.kt)("samp",{id:"focus-status-bar"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function Screen1({ navigation }) {\n  return (\n    <SafeAreaView style={[styles.container, { backgroundColor: \'#6a51ae\' }]}>\n      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" />\n      <Text style={{ color: \'#fff\' }}>Light Screen</Text>\n      <Button\n        title="Next screen"\n        onPress={() => navigation.navigate(\'Screen2\')}\n        color="#fff"\n      />\n    </SafeAreaView>\n  );\n}\n\nfunction Screen2({ navigation }) {\n  return (\n    <SafeAreaView style={[styles.container, { backgroundColor: \'#ecf0f1\' }]}>\n      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />\n      <Text>Dark Screen</Text>\n      <Button\n        title="Next screen"\n        onPress={() => navigation.navigate(\'Screen1\')}\n      />\n    </SafeAreaView>\n  );\n}\n')),(0,o.kt)("p",null,"Although not necessary, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"FocusAwareStatusBar")," component in the screens of the stack navigator as well."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DrawerNavigator with different StatusBar configs",src:n(72293).Z,width:"895",height:"843"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TabNavigator with different StatusBar configs",src:n(63065).Z,width:"879",height:"862"})))}b.isMDXComponent=!0},72293:function(e,t,n){t.Z=n.p+"assets/images/statusbar-drawer-demo-3f6ce5c56a2086d8aba8ab2f1f3f513e.gif"},27267:function(e,t,n){t.Z=n.p+"assets/images/statusbar-stack-demo-695c18cfc1489cd5c4c18827bc66befb.gif"},63065:function(e,t,n){t.Z=n.p+"assets/images/statusbar-tab-demo-c5f932fea901d54665ed07f921ad8322.gif"}}]);