(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[5801],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,k=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(67294),i=n(80944),r=n(86010),l="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,p=39;var d=function(e){var t=e.lazy,n=e.block,d=e.defaultValue,u=e.values,c=e.groupId,h=e.className,k=(0,i.Z)(),m=k.tabGroupChoices,N=k.setTabGroupChoices,f=(0,a.useState)(d),g=f[0],v=f[1],b=a.Children.toArray(e.children),C=[];if(null!=c){var y=m[c];null!=y&&y!==g&&u.some((function(e){return e.value===y}))&&v(y)}var S=function(e){var t=e.currentTarget,n=C.indexOf(t),a=u[n].value;v(a),null!=c&&(N(c,a),setTimeout((function(){var e,n,a,i,r,l,s,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,l=window,s=l.innerHeight,p=l.innerWidth,n>=0&&r<=p&&i<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case p:var a=C.indexOf(e.target)+1;n=C[a]||C[0];break;case s:var i=C.indexOf(e.target)-1;n=C[i]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},h)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":g===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:w,onFocus:S,onClick:S},n)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},80944:function(e,t,n){"use strict";var a=n(67294),i=n(79443);t.Z=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},50105:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(74034),i=n(79973),r=(n(67294),n(3905)),l=n(41395),o=n(58215),s={id:"native-stack-navigator",title:"Native Stack Navigator",sidebar_label:"Native Stack"},p={unversionedId:"native-stack-navigator",id:"version-6.x/native-stack-navigator",isDocsHomePage:!1,title:"Native Stack Navigator",description:"Native Stack Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack.",source:"@site/versioned_docs/version-6.x/native-stack-navigator.md",sourceDirName:".",slug:"/native-stack-navigator",permalink:"/docs/native-stack-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/native-stack-navigator.md",version:"6.x",sidebar_label:"Native Stack",frontMatter:{id:"native-stack-navigator",title:"Native Stack Navigator",sidebar_label:"Native Stack"},sidebar:"version-6.x/docs",previous:{title:"Stack Navigator",permalink:"/docs/stack-navigator"},next:{title:"Drawer Navigator",permalink:"/docs/drawer-navigator"}},d=[{value:"API Definition",id:"api-definition",children:[{value:"Props",id:"props",children:[]},{value:"Options",id:"options",children:[]},{value:"Events",id:"events",children:[]},{value:"Helpers",id:"helpers",children:[]}]},{value:"Example",id:"example",children:[]}],u={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Native Stack Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack."),(0,r.kt)("p",null,"This navigator uses the native APIs ",(0,r.kt)("inlineCode",{parentName:"p"},"UINavigationController")," on iOS and ",(0,r.kt)("inlineCode",{parentName:"p"},"Fragment")," on Android so that navigation built with ",(0,r.kt)("inlineCode",{parentName:"p"},"createNativeStackNavigator")," will behave exactly the same and have the same performance characteristics as apps built natively on top of those APIs. It also offers basic Web support using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/necolas/react-native-web"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-web")),"."),(0,r.kt)("p",null,"One thing to keep in mind is that while ",(0,r.kt)("inlineCode",{parentName:"p"},"createNativeStackNavigator")," offers native performance and exposes native features such as large title on iOS etc., it isn't as customizable as ",(0,r.kt)("a",{parentName:"p",href:"/docs/stack-navigator"},(0,r.kt)("inlineCode",{parentName:"a"},"createStackNavigator")),", So if you need more customization than what's possible in this navigator, consider using ",(0,r.kt)("inlineCode",{parentName:"p"},"createStackNavigator")," instead - which is a more customizable JavaScript based implementation."),(0,r.kt)("p",null,"To use this navigator, ensure that you have ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started"},(0,r.kt)("inlineCode",{parentName:"a"},"@react-navigation/native")," and its dependencies (follow this guide)"),", then install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/main/packages/native-stack"},(0,r.kt)("inlineCode",{parentName:"a"},"@react-navigation/native-stack")),":"),(0,r.kt)(l.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-navigation/native-stack\n"))),(0,r.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-navigation/native-stack\n")))),(0,r.kt)("h2",{id:"api-definition"},"API Definition"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 If you encounter any bugs while using ",(0,r.kt)("inlineCode",{parentName:"p"},"createNativeStackNavigator"),", please open issues on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-screens"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-screens"))," rather than the ",(0,r.kt)("inlineCode",{parentName:"p"},"react-navigation")," repository!")),(0,r.kt)("p",null,"To use this navigator, import it from ",(0,r.kt)("inlineCode",{parentName:"p"},"@react-navigation/native-stack"),":"),(0,r.kt)("samp",{id:"simple-native-stack"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { createNativeStackNavigator } from \'@react-navigation/native-stack\';\n\nconst Stack = createNativeStackNavigator();\n\nfunction MyStack() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={Home} />\n      <Stack.Screen name="Notifications" component={Notifications} />\n      <Stack.Screen name="Profile" component={Profile} />\n      <Stack.Screen name="Settings" component={Settings} />\n    </Stack.Navigator>\n  );\n}\n')),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Stack.Navigator")," component accepts following props:"),(0,r.kt)("h4",{id:"initialroutename"},(0,r.kt)("inlineCode",{parentName:"h4"},"initialRouteName")),(0,r.kt)("p",null,"The name of the route to render on first load of the navigator."),(0,r.kt)("h4",{id:"screenoptions"},(0,r.kt)("inlineCode",{parentName:"h4"},"screenOptions")),(0,r.kt)("p",null,"Default options to use for the screens in the navigator."),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("p",null,"The following ",(0,r.kt)("a",{parentName:"p",href:"/docs/screen-options"},"options")," can be used to configure the screens in the navigator:"),(0,r.kt)("h4",{id:"title"},(0,r.kt)("inlineCode",{parentName:"h4"},"title")),(0,r.kt)("p",null,"String that can be used as a fallback for ",(0,r.kt)("inlineCode",{parentName:"p"},"headerTitle"),"."),(0,r.kt)("h4",{id:"headerbackvisible"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerBackVisible")),(0,r.kt)("p",null,"Whether the back button is visible in the header. You can use it to show a back button alongside ",(0,r.kt)("inlineCode",{parentName:"p"},"headerLeft")," if you have specified it."),(0,r.kt)("p",null,"This will have no effect on the first screen in the stack."),(0,r.kt)("h4",{id:"headerbacktitle"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerBackTitle")),(0,r.kt)("p",null,"Title string used by the back button on iOS. Defaults to the previous scene's title, or \"Back\" if there's not enough space. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"headerBackTitleVisible: false")," to hide it."),(0,r.kt)("p",null,"Only supported on iOS."),(0,r.kt)("h4",{id:"headerbacktitlevisible"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerBackTitleVisible")),(0,r.kt)("p",null,"Whether the back button title should be visible or not."),(0,r.kt)("p",null,"Only supported on iOS."),(0,r.kt)("h4",{id:"headerbacktitlestyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerBackTitleStyle")),(0,r.kt)("p",null,"Style object for header back title. Supported properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fontFamily")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fontSize"))),(0,r.kt)("p",null,"Only supported on iOS."),(0,r.kt)("h4",{id:"headerbackimagesource"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerBackImageSource")),(0,r.kt)("p",null,"Image to display in the header as the icon in the back button.  Defaults to back icon image for the platform"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A chevron on iOS"),(0,r.kt)("li",{parentName:"ul"},"An arrow on Android")),(0,r.kt)("h4",{id:"headerlargestyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerLargeStyle")),(0,r.kt)("p",null,"Style of the header when a large title is shown. The large title is shown if ",(0,r.kt)("inlineCode",{parentName:"p"},"headerLargeTitle")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and the edge of any scrollable content reaches the matching edge of the header."),(0,r.kt)("p",null,"Supported properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"backgroundColor")),(0,r.kt)("p",null,"Only supported on iOS."),(0,r.kt)("h4",{id:"headerlargetitle"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerLargeTitle")),(0,r.kt)("p",null,"Whether to enable header with large title which collapses to regular header on scroll."),(0,r.kt)("p",null,"For large title to collapse on scroll, the content of the screen should be wrapped in a scrollable view such as ",(0,r.kt)("inlineCode",{parentName:"p"},"ScrollView")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"FlatList"),". If the scrollable area doesn't fill the screen, the large title won't collapse on scroll."),(0,r.kt)("p",null,"Only supported on iOS."),(0,r.kt)("h4",{id:"headerlargetitleshadowvisible"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerLargeTitleShadowVisible")),(0,r.kt)("p",null,"Whether drop shadow of header is visible when a large title is shown."),(0,r.kt)("h4",{id:"headerlargetitlestyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerLargeTitleStyle")),(0,r.kt)("p",null,"Style object for large title in header. Supported properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fontFamily")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fontSize")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fontWeight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"color"))),(0,r.kt)("p",null,"Only supported on iOS."),(0,r.kt)("h4",{id:"headershown"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerShown")),(0,r.kt)("p",null,"Whether to show the header. The header is shown by default. Setting this to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," hides the header."),(0,r.kt)("h4",{id:"headerstyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerStyle")),(0,r.kt)("p",null,"Style object for header. Supported properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"backgroundColor"))),(0,r.kt)("h4",{id:"headershadowvisible"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerShadowVisible")),(0,r.kt)("p",null,"Whether to hide the elevation shadow (Android) or the bottom border (iOS) on the header."),(0,r.kt)("h4",{id:"headertransparent"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerTransparent")),(0,r.kt)("p",null,"Boolean indicating whether the navigation bar is translucent."),(0,r.kt)("p",null,"Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". Setting this to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," makes the header absolutely positioned - so that the header floats over the screen so that it overlaps the content underneath, and changes the background color to ",(0,r.kt)("inlineCode",{parentName:"p"},"transparent")," unless specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"headerStyle"),"."),(0,r.kt)("p",null,"This is useful if you want to render a semi-transparent header or a blurred background."),(0,r.kt)("p",null,"Note that if you don't want your content to appear under the header, you need to manually add a top margin to your content. React Navigation won't do it automatically."),(0,r.kt)("p",null,"To get the height of the header, you can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/elements#headerheightcontext"},(0,r.kt)("inlineCode",{parentName:"a"},"HeaderHeightContext"))," with ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html#contextconsumer"},"React's Context API")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/elements#useheaderheight"},(0,r.kt)("inlineCode",{parentName:"a"},"useHeaderHeight")),"."),(0,r.kt)("h4",{id:"headerblureffect"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerBlurEffect")),(0,r.kt)("p",null,"Blur effect for the translucent header. The ",(0,r.kt)("inlineCode",{parentName:"p"},"headerTransparent")," option needs to be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," for this to work."),(0,r.kt)("p",null,"Supported values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"extraLight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"light")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dark")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"regular")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prominent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"systemUltraThinMaterial")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"systemThinMaterial")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"systemMaterial")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"systemThickMaterial")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"systemChromeMaterial")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"systemUltraThinMaterialLight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"systemThinMaterialLight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"systemMaterialLight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"systemThickMaterialLight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"systemChromeMaterialLight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"systemUltraThinMaterialDark")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"systemThinMaterialDark")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"systemMaterialDark")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"systemThickMaterialDark")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"systemChromeMaterialDark'"))),(0,r.kt)("p",null,"Only supported on iOS."),(0,r.kt)("h4",{id:"headertintcolor"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerTintColor")),(0,r.kt)("p",null,"Tint color for the header. Changes the color of back button and title."),(0,r.kt)("h4",{id:"headerleft"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerLeft")),(0,r.kt)("p",null,"Function which returns a React Element to display on the left side of the header. This replaces the back button. See ",(0,r.kt)("inlineCode",{parentName:"p"},"headerBackVisible")," to show the back button along side left element."),(0,r.kt)("h4",{id:"headerright"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerRight")),(0,r.kt)("p",null,"Function which returns a React Element to display on the right side of the header."),(0,r.kt)("h4",{id:"headertitle"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerTitle")),(0,r.kt)("p",null,"String or a function that returns a React Element to be used by the header. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," or name of the screen."),(0,r.kt)("p",null,"When a function is passed, it receives ",(0,r.kt)("inlineCode",{parentName:"p"},"tintColor")," and",(0,r.kt)("inlineCode",{parentName:"p"},"children")," in the options object as an argument. The title string is passed in ",(0,r.kt)("inlineCode",{parentName:"p"},"children"),"."),(0,r.kt)("p",null,"Note that if you render a custom element by passing a function, animations for the title won't work."),(0,r.kt)("h4",{id:"headertitlealign"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerTitleAlign")),(0,r.kt)("p",null,"How to align the header title. Possible values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"left")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"center"))),(0,r.kt)("p",null,"Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"left")," on platforms other than iOS."),(0,r.kt)("p",null,"Not supported on iOS. It's always ",(0,r.kt)("inlineCode",{parentName:"p"},"center")," on iOS and cannot be changed."),(0,r.kt)("h4",{id:"headertitlestyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerTitleStyle")),(0,r.kt)("p",null,"Style object for header title. Supported properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fontFamily")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fontSize")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fontWeight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"color"))),(0,r.kt)("h4",{id:"headersearchbaroptions"},(0,r.kt)("inlineCode",{parentName:"h4"},"headerSearchBarOptions")),(0,r.kt)("p",null,"Options to render a native search bar on iOS. Search bars are rarely static so normally it is controlled by passing an object to ",(0,r.kt)("inlineCode",{parentName:"p"},"searchBar")," navigation option in the component's body."),(0,r.kt)("p",null,"Search bar is only supported on iOS."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"React.useEffect(() => {\n  navigation.setOptions({\n    headerSearchBar: {\n      // search bar options\n    }\n  });\n}, [navigation]);\n")),(0,r.kt)("p",null,"Supported properties are described below."),(0,r.kt)("h5",{id:"autocapitalize"},(0,r.kt)("inlineCode",{parentName:"h5"},"autoCapitalize")),(0,r.kt)("p",null,"Controls whether the text is automatically auto-capitalized as it is entered by the user.\nPossible values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"none")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"words")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sentences")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"characters"))),(0,r.kt)("p",null,"Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"sentences"),"."),(0,r.kt)("h5",{id:"bartintcolor"},(0,r.kt)("inlineCode",{parentName:"h5"},"barTintColor")),(0,r.kt)("p",null,"The search field background color."),(0,r.kt)("p",null,"By default bar tint color is translucent."),(0,r.kt)("h5",{id:"hidenavigationbar"},(0,r.kt)("inlineCode",{parentName:"h5"},"hideNavigationBar")),(0,r.kt)("p",null,"Boolean indicating whether to hide the navigation bar during searching."),(0,r.kt)("p",null,"Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h5",{id:"hidewhenscrolling"},(0,r.kt)("inlineCode",{parentName:"h5"},"hideWhenScrolling")),(0,r.kt)("p",null,"Boolean indicating whether to hide the search bar when scrolling."),(0,r.kt)("p",null,"Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h5",{id:"obscurebackground"},(0,r.kt)("inlineCode",{parentName:"h5"},"obscureBackground")),(0,r.kt)("p",null,"Boolean indicating whether to obscure the underlying content with semi-transparent overlay."),(0,r.kt)("p",null,"Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h5",{id:"onblur"},(0,r.kt)("inlineCode",{parentName:"h5"},"onBlur")),(0,r.kt)("p",null,"A callback that gets called when search bar has lost focus."),(0,r.kt)("h5",{id:"oncancelbuttonpress"},(0,r.kt)("inlineCode",{parentName:"h5"},"onCancelButtonPress")),(0,r.kt)("p",null,"A callback that gets called when the cancel button is pressed."),(0,r.kt)("h5",{id:"onchangetext"},(0,r.kt)("inlineCode",{parentName:"h5"},"onChangeText")),(0,r.kt)("p",null,"A callback that gets called when the text changes. It receives the current text value of the search bar."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const [search, setSearch] = React.useState('');\n\nReact.useEffect(() => {\n  navigation.setOptions({\n    headerSearchBar: {\n      onChangeText: (event) => setSearch(event.nativeEvent.text),\n    }\n  });\n}, [navigation]);\n")),(0,r.kt)("h4",{id:"statusbaranimation"},(0,r.kt)("inlineCode",{parentName:"h4"},"statusBarAnimation")),(0,r.kt)("p",null,"Sets the status bar animation (similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"StatusBar")," component)."),(0,r.kt)("p",null,"Requires setting ",(0,r.kt)("inlineCode",{parentName:"p"},"View controller-based status bar appearance -> YES")," (or removing the config) in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Info.plist")," file."),(0,r.kt)("p",null,"Only supported on iOS."),(0,r.kt)("h4",{id:"statusbarhidden"},(0,r.kt)("inlineCode",{parentName:"h4"},"statusBarHidden")),(0,r.kt)("p",null," Whether the status bar should be hidden on this screen."),(0,r.kt)("p",null,"Requires setting ",(0,r.kt)("inlineCode",{parentName:"p"},"View controller-based status bar appearance -> YES")," (or removing the config) in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Info.plist")," file."),(0,r.kt)("p",null,"Only supported on iOS."),(0,r.kt)("h4",{id:"statusbarstyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"statusBarStyle")),(0,r.kt)("p",null,"Sets the status bar color (similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"StatusBar")," component)."),(0,r.kt)("p",null,"Requires setting ",(0,r.kt)("inlineCode",{parentName:"p"},"View controller-based status bar appearance -> YES")," (or removing the config) in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Info.plist")," file."),(0,r.kt)("p",null,"Only supported on iOS."),(0,r.kt)("h4",{id:"contentstyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"contentStyle")),(0,r.kt)("p",null,"Style object for the scene content."),(0,r.kt)("h4",{id:"gestureenabled"},(0,r.kt)("inlineCode",{parentName:"h4"},"gestureEnabled")),(0,r.kt)("p",null,"Whether you can use gestures to dismiss this screen. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". Only supported on iOS."),(0,r.kt)("h4",{id:"animationtypeforreplace"},(0,r.kt)("inlineCode",{parentName:"h4"},"animationTypeForReplace")),(0,r.kt)("p",null,"The type of animation to use when this screen replaces another screen. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"pop"),"."),(0,r.kt)("p",null,"Supported values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"push"),": the new screen will perform push animation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pop"),": the new screen will perform pop animation.")),(0,r.kt)("h4",{id:"animation"},(0,r.kt)("inlineCode",{parentName:"h4"},"animation")),(0,r.kt)("p",null,"How the screen should animate when pushed or popped."),(0,r.kt)("p",null,"Supported values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default"),": use the platform default animation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fade"),": fade screen in or out"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flip"),': flip the screen, requires stackPresentation: "modal" (iOS only)'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"slide_from_right"),": slide in the new screen from right (Android only, uses default animation on iOS)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"slide_from_left"),": slide in the new screen from left (Android only, uses default animation on iOS)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"none"),": don't animate the screen")),(0,r.kt)("p",null,"Only supported on Android and iOS."),(0,r.kt)("h4",{id:"presentation"},(0,r.kt)("inlineCode",{parentName:"h4"},"presentation")),(0,r.kt)("p",null,"How should the screen be presented."),(0,r.kt)("p",null,"Supported values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"card"),": the new screen will be pushed onto a stack, which means the default animation will be slide from the side on iOS, the animation on Android will vary depending on the OS version and theme."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"modal"),": the new screen will be presented modally. this also allows for a nested stack to be rendered inside the screen."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transparentModal"),": the new screen will be presented modally, but in addition, the previous screen will stay so that the content below can still be seen if the screen has translucent background."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"containedModal"),': will use "UIModalPresentationCurrentContext" modal style on iOS and will fallback to "modal" on Android.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"containedTransparentModal"),': will use "UIModalPresentationOverCurrentContext" modal style on iOS and will fallback to "transparentModal" on Android.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fullScreenModal"),': will use "UIModalPresentationFullScreen" modal style on iOS and will fallback to "modal" on Android.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"formSheet"),': will use "UIModalPresentationFormSheet" modal style on iOS and will fallback to "modal" on Android.')),(0,r.kt)("p",null,"Only supported on Android and iOS."),(0,r.kt)("h4",{id:"orientation"},(0,r.kt)("inlineCode",{parentName:"h4"},"orientation")),(0,r.kt)("p",null,"The display orientation to use for the screen."),(0,r.kt)("p",null,"Supported values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default"),' - resolves to "all" without "portrait_down" on iOS. On Android, this lets the system decide the best orientation.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"all"),": all orientations are permitted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"portrait"),": portrait orientations are permitted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"portrait_up"),": right-side portrait orientation is permitted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"portrait_down"),": upside-down portrait orientation is permitted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"landscape"),": landscape orientations are permitted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"landscape_left"),": landscape-left orientation is permitted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"landscape_right"),": landscape-right orientation is permitted.")),(0,r.kt)("p",null,"Only supported on Android and iOS."),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("p",null,"The navigator can ",(0,r.kt)("a",{parentName:"p",href:"/docs/navigation-events"},"emit events")," on certain actions. Supported events are:"),(0,r.kt)("h4",{id:"transitionstart"},(0,r.kt)("inlineCode",{parentName:"h4"},"transitionStart")),(0,r.kt)("p",null,"This event is fired when the transition animation starts for the current screen."),(0,r.kt)("p",null,"Event data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"e.data.closing")," - Boolean indicating whether the screen is being opened or closed.")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('transitionStart', (e) => {\n    // Do something\n  });\n\n  return unsubscribe;\n}, [navigation]);\n")),(0,r.kt)("h4",{id:"transitionend"},(0,r.kt)("inlineCode",{parentName:"h4"},"transitionEnd")),(0,r.kt)("p",null,"This event is fired when the transition animation ends for the current screen."),(0,r.kt)("p",null,"Event data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"e.data.closing")," - Boolean indicating whether the screen was opened or closed.")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('transitionEnd', (e) => {\n    // Do something\n  });\n\n  return unsubscribe;\n}, [navigation]);\n")),(0,r.kt)("h3",{id:"helpers"},"Helpers"),(0,r.kt)("p",null,"The native stack navigator adds the following methods to the navigation prop:"),(0,r.kt)("h4",{id:"push"},(0,r.kt)("inlineCode",{parentName:"h4"},"push")),(0,r.kt)("p",null,"Pushes a new screen to top of the stack and navigate to it. The method accepts following arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," - ",(0,r.kt)("em",{parentName:"li"},"string")," - Name of the route to push onto the stack."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"params")," - ",(0,r.kt)("em",{parentName:"li"},"object")," - Screen params to pass to the destination route.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"navigation.push('Profile', { owner: 'Micha\u015b' });\n")),(0,r.kt)("h4",{id:"pop"},(0,r.kt)("inlineCode",{parentName:"h4"},"pop")),(0,r.kt)("p",null,"Pops the current screen from the stack and navigates back to the previous screen. It takes one optional argument (",(0,r.kt)("inlineCode",{parentName:"p"},"count"),"), which allows you to specify how many screens to pop back by."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"navigation.pop();\n")),(0,r.kt)("h4",{id:"poptotop"},(0,r.kt)("inlineCode",{parentName:"h4"},"popToTop")),(0,r.kt)("p",null,"Pops all of the screens in the stack except the first one and navigates to it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"navigation.popToTop();\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { createStackNavigator } from '@react-navigation/native-stack';\n\nconst Stack = createStackNavigator();\n\nfunction MyStack() {\n  return (\n    <Stack.Navigator\n      initialRouteName=\"Home\"\n      screenOptions={{\n        headerTintColor: 'white',\n        headerStyle: { backgroundColor: 'tomato' },\n      }}\n    >\n      <Stack.Screen\n        name=\"Home\"\n        component={Home}\n        options={{\n          title: 'Awesome app',\n        }}\n      />\n      <Stack.Screen\n        name=\"Profile\"\n        component={Profile}\n        options={{\n          title: 'My profile',\n        }}\n      />\n      <Stack.Screen\n        name=\"Settings\"\n        component={Settings}\n        options={{\n          gestureEnabled: false,\n        }}\n      />\n    </Stack.Navigator>\n  );\n}\n")))}c.isMDXComponent=!0},86010:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);