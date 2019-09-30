(window["webpackJsonp@fseehawer/react-circular-slider"]=window["webpackJsonp@fseehawer/react-circular-slider"]||[]).push([[0],{13:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(5),l=a.n(n),i=(a(13),a(1)),c=a(6),s=a(7),u=function(e){var t=e.isDragging,a=e.knobPosition,r=e.knobColor,n=e.knobRadius,l=void 0===n?12:n,c=e.knobSize,s=void 0===c?36:c,u=e.onMouseDown,d=i.a.create({knob:{position:"absolute",left:"-".concat(s/2,"px"),top:"-".concat(s/2,"px"),cursor:"grab",zIndex:3},dragging:{cursor:"grabbing"},pause:{animationPlayState:"paused"},animation:{animationDuration:"1500ms",transformOrigin:"50% 50%",animationIterationCount:"infinite",animationTimingFunction:"ease-out",animationName:[{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.8)"},"100%":{transform:"scale(1)"}}]}});return o.a.createElement("div",{style:{transform:"translate(".concat(a.x,"px, ").concat(a.y,"px)")},className:Object(i.b)(d.knob,t&&d.dragging),onMouseDown:u,onTouchStart:u},o.a.createElement("svg",{width:"".concat(s,"px"),height:"".concat(s,"px"),viewBox:"0 0 ".concat(s," ").concat(s)},o.a.createElement("circle",{className:Object(i.b)(d.animation,t&&d.pause),fill:r,fillOpacity:"0.2",stroke:"none",cx:s/2,cy:s/2,r:s/2}),o.a.createElement("circle",{fill:r,stroke:"none",cx:s/2,cy:s/2,r:l}),o.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"14",width:"8",height:"1"}),o.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"17",width:"8",height:"1"}),o.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"20",width:"8",height:"1"})))},d=function(e){var t=e.labelColor,a=e.labelFontSize,r=e.labelValueFontSize,n=e.labelVerticalOffset,l=e.labelHide,c=e.label,s=e.value,u=i.a.create({labels:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"".concat(t),zIndex:1},value:{fontSize:"".concat(r),marginBottom:"calc(".concat(n,")")},hide:{display:"none"}});return o.a.createElement("div",{className:Object(i.b)(u.labels,l&&u.hide)},o.a.createElement("div",{style:{fontSize:a}},c),o.a.createElement("div",{className:Object(i.b)(u.value)},o.a.createElement("code",null,s)))},b=function(e){var t=e.width,a=e.label,r=e.strokeDasharray,n=e.strokeDashoffset,l=e.progressColorFrom,c=e.progressColorTo,s=e.trackColor,u=e.progressSize,d=e.trackSize,b=e.svgFullPath,f=e.radiansOffset,m=e.progressLineCap,p=i.a.create({svg:{position:"relative",zIndex:2}});return o.a.createElement("svg",{width:"".concat(t,"px"),height:"".concat(t,"px"),viewBox:"0 0 ".concat(t," ").concat(t),overflow:"visible",className:Object(i.b)(p.svg)},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:a,x1:"100%",x2:"0%"},o.a.createElement("stop",{offset:"0%",stopColor:l}),o.a.createElement("stop",{offset:"100%",stopColor:c}))),o.a.createElement("circle",{strokeWidth:d,fill:"none",stroke:s,cx:t/2,cy:t/2,r:t/2}),o.a.createElement("path",{ref:b,strokeDasharray:r,strokeDashoffset:n,strokeWidth:u,style:{transform:"rotate(".concat(f,"rad)"),transformOrigin:"center center"},strokeLinecap:"round"!==m?"butt":"round",fill:"none",stroke:"url(#".concat(a,")"),d:"\n                        M ".concat(t/2,", ").concat(t/2,"\n                        m 0, -").concat(t/2,"\n                        a ").concat(t/2,",").concat(t/2," 0 0,1 0,").concat(t,"\n                        a -").concat(t/2,",-").concat(t/2," 0 0,1 0,-").concat(t,"\n                    ")}))};function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p="ontouchstart"in window,g={DOWN:p?"touchstart":"mousedown",UP:p?"touchend":"mouseup",MOVE:p?"touchmove":"mousemove"},h=function(e){var t=e.label,a=void 0===t?"DEGREES":t,n=e.width,l=void 0===n?280:n,c=e.knobColor,f=void 0===c?"#4e63ea":c,p=e.knobStartPosition,h=void 0===p?"top":p,v=e.labelColor,E=void 0===v?"#272b77":v,C=e.labelFontSize,k=void 0===C?"1rem":C,O=e.labelValueFontSize,w=void 0===O?"4rem":O,F=e.labelVerticalOffset,y=void 0===F?"2rem":F,S=e.labelHide,x=void 0!==S&&S,D=e.progressColorFrom,j=void 0===D?"#80C3F3":D,z=e.progressColorTo,P=void 0===z?"#4990E2":z,M=e.progressSize,I=void 0===M?6:M,A=e.trackColor,N=void 0===A?"#DDDEFB":A,L=e.trackSize,T=void 0===L?6:L,V=e.data,B=void 0===V?[]:V,R=e.knobAtDataIndex,H=void 0===R?0:R,U=e.progressLineCap,W=void 0===U?"round":U,X=e.onChange,Y=void 0===X?function(e){}:X,G=Object(r.useState)({mounted:!1,isDragging:!1,width:l,radius:l/2,label:0,radians:0,knob:{x:0,y:0},dashFullArray:0,dashFullOffset:0}),J=Object(s.a)(G,2),K=J[0],Q=J[1],Z={top:Math.PI/2,right:0,bottom:-Math.PI/2,left:-Math.PI},q=Object(r.useRef)(null),$=Object(r.useRef)(null),_=Object(r.useCallback)((function(){var e=q.current.getBoundingClientRect(),t=window.pageXOffset||document.documentElement.scrollLeft,a=window.pageYOffset||document.documentElement.scrollTop;return{top:e.top+a,left:e.left+t}}),[]),ee=Object(r.useCallback)((function(e){var t=K.radius,a=e+Z[h],r=(a>0?a:2*Math.PI+a)*(360/(2*Math.PI)),o=K.dashFullArray-r/360*K.dashFullArray,n=0;if(B.length){var l=Math.ceil(360/B.length);n=Math.floor(r/l)}var i=B.length?B[n]:Math.round(r);Q((function(a){return m({},a,{dashFullOffset:o,label:i,knob:{x:t*Math.cos(e)+t,y:t*Math.sin(e)+t}})})),Y(i)}),[K.dashFullArray,K.radius,B,Z,h,Y]),te=Object(r.useCallback)((function(e){Q((function(e){return m({},e,{isDragging:!0})}))}),[]),ae=Object(r.useCallback)((function(e){if(e.preventDefault(),K.isDragging){var t;"touchmove"===e.type&&(t=e.changedTouches[0]);var a=("touchmove"===e.type?t.pageX:e.pageX)-(_().left+K.radius),r=("touchmove"===e.type?t.pageY:e.pageY)-(_().top+K.radius),o=Math.atan2(r,a);ee(o)}}),[K.isDragging,K.radius,ee,_]),re=function(e){Q((function(e){return m({},e,{isDragging:!1})}))};Object(r.useEffect)((function(){var e=$.current.getTotalLength();Q((function(t){return m({},t,{mounted:!0,dashFullArray:e})}))}),[]),Object(r.useEffect)((function(){var e=B.length,t=H>e-1?e:H;if(Q((function(e){return m({},e,{radians:Math.PI/2-Z[h]})})),t&&e){var a=t*Math.ceil(360/e)*Math.PI/180-Z[h];return ee(a+.005)}return ee(.005-Z[h])}),[K.dashFullArray,H,B.length]),Object(r.useEffect)((function(){if(K.isDragging)return window.addEventListener(g.MOVE,ae,{passive:!1}),window.addEventListener(g.UP,re,{passive:!1}),function(){window.removeEventListener(g.MOVE,ae),window.removeEventListener(g.UP,re)}}),[K.isDragging,ae]);var oe=i.a.create({circularSlider:{position:"relative",display:"inline-block",opacity:0,transition:"opacity 1s ease-in"},mounted:{opacity:1}});return o.a.createElement("div",{className:Object(i.b)(oe.circularSlider,K.mounted&&oe.mounted),ref:q},o.a.createElement(b,{width:l,label:a,strokeDasharray:K.dashFullArray,strokeDashoffset:K.dashFullOffset,progressColorFrom:j,progressColorTo:P,trackColor:N,progressSize:I,trackSize:T,svgFullPath:$,radiansOffset:K.radians,progressLineCap:W}),o.a.createElement(u,{isDragging:K.isDragging,knobPosition:{x:K.knob.x,y:K.knob.y},knobColor:f,onMouseDown:te}),o.a.createElement(d,{labelColor:E,labelFontSize:k,labelVerticalOffset:y,labelValueFontSize:w,labelHide:x,label:a,value:"".concat(K.label)}))},v=function(){var e=i.a.create({wrapper:{margin:"2rem"},h2:{borderBottom:"1px solid #eeeeee",paddingBottom:"0.5rem"},h3:{margin:"2rem 0"}});return o.a.createElement("div",{className:Object(i.b)(e.wrapper)},o.a.createElement("h2",{className:Object(i.b)(e.h2)},"react-circular-slider"),o.a.createElement("h3",{className:Object(i.b)(e.h3)},"example 1:"),o.a.createElement("pre",null,"<CircularSlider\n    onChange={onSliderChange}\n/>"),o.a.createElement("p",null,"\xa0"),o.a.createElement(h,{onChange:function(e){}}),o.a.createElement("p",null,"\xa0"),o.a.createElement("h3",{className:Object(i.b)(e.h3)},"example 2:"),o.a.createElement("pre",null,'<CircularSlider\n    label="savings"\n    data=["1\u20ac","2\u20ac",...]\n    knobAtDataIndex={10}\n    labelColor="#005a58"\n    knobColor="#005a58"\n    progressColorFrom="#00bfbd"\n    progressColorTo="#005a58"\n    progressSize={24}\n    trackColor="#eeeeee"\n    trackSize={24}\n/>'),o.a.createElement("p",null,"\xa0"),o.a.createElement(h,{label:"savings",labelColor:"#005a58",knobColor:"#005a58",progressColorFrom:"#00bfbd",progressColorTo:"#009c9a",progressSize:24,trackColor:"#eeeeee",trackSize:24,knobAtDataIndex:10,data:["1\u20ac","2\u20ac","3\u20ac","4\u20ac","5\u20ac","6\u20ac","7\u20ac","8\u20ac","9\u20ac","10\u20ac","20\u20ac","30\u20ac","40\u20ac","50\u20ac","60\u20ac","70\u20ac","80\u20ac","90\u20ac","100\u20ac","200\u20ac","300\u20ac","400\u20ac","500\u20ac","600\u20ac","700\u20ac","800\u20ac","900\u20ac","1000\u20ac","2000\u20ac","3000\u20ac","4000\u20ac","5000\u20ac","6000\u20ac","7000\u20ac","8000\u20ac","9000\u20ac","10000\u20ac"]}),o.a.createElement("p",null,"\xa0"),o.a.createElement("h3",{className:Object(i.b)(e.h3)},"example 3:"),o.a.createElement("pre",null,'<CircularSlider\n    label="Alphabet"\n    width={200}\n    data=["A","B","C",...]\n    labelColor="#212121"\n    labelValueFontSize="6rem"\n    knobColor="#212121"\n    progressLineCap="flat"\n    progressColorFrom="#ff8500"\n    progressColorTo="#a15400"\n    progressSize={8}\n    trackColor="#eeeeee"\n    trackSize={4}\n/>'),o.a.createElement("p",null,"\xa0"),o.a.createElement(h,{label:"Alphabet",width:250,labelColor:"#212121",labelValueFontSize:"6rem",knobColor:"#212121",progressColorFrom:"#ff8500",progressColorTo:"#a15400",progressSize:8,trackColor:"#eeeeee",trackSize:4,progressLineCap:"flat",data:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")}),o.a.createElement("p",null,"\xa0"))};l.a.render(o.a.createElement(v,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.a3e7bf32.chunk.js.map