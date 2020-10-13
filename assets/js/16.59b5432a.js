(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{664:function(t,s,n){"use strict";n.r(s);var e=n(5),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("摘要")]),t._v(" "),n("ol",[n("li",[t._v("类图用来描述类、类属性和类关系")]),t._v(" "),n("li",[t._v("js 中常见的实例关系有"),n("strong",[t._v("泛化")]),t._v("（继承）及 "),n("strong",[t._v("关联")]),t._v(" （引用）")])])]),t._v(" "),n("h2",{attrs:{id:"什么是类图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是类图"}},[t._v("#")]),t._v(" 什么是类图")]),t._v(" "),n("blockquote",[n("p",[t._v("类图是软件工程的统一建模语言一种静态结构图，该图描述了系统的类集合，类的属性和类之间的关系。")])]),t._v(" "),n("h2",{attrs:{id:"类图的规范"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#类图的规范"}},[t._v("#")]),t._v(" 类图的规范")]),t._v(" "),n("h3",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://images.xifan.fun/%E7%94%A8plantuml%E7%94%BBuml%E7%B1%BB%E5%9B%BE-2020-10-14-07-08-40.png",alt:"用plantuml画uml类图-2020-10-14-07-08-40"}})]),t._v(" "),n("ul",[n("li",[t._v("首行：类名")]),t._v(" "),n("li",[t._v("次行：属性")]),t._v(" "),n("li",[t._v("末行：方法")])]),t._v(" "),n("h3",{attrs:{id:"成员"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#成员"}},[t._v("#")]),t._v(" 成员")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("+")]),t._v(" public")]),t._v(" "),n("li",[n("code",[t._v("-")]),t._v(" privite")]),t._v(" "),n("li",[n("code",[t._v("#")]),t._v(" protected")])]),t._v(" "),n("h3",{attrs:{id:"实例关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实例关系"}},[t._v("#")]),t._v(" 实例关系")]),t._v(" "),n("p",[n("code",[t._v("js")]),t._v(" 中常用的类关系有："),n("strong",[t._v("泛化")]),t._v("和"),n("strong",[t._v("关联")]),t._v("。")]),t._v(" "),n("p",[n("strong",[t._v("泛化（Generalization）")]),t._v("，即继承关系，"),n("code",[t._v("⇨")]),t._v(" 空心箭头指向父类。")]),t._v(" "),n("p",[n("strong",[t._v("关联")]),t._v(" 即引用关系，"),n("code",[t._v("→")]),t._v(" 实心箭头指向被引用类。")]),t._v(" "),n("h2",{attrs:{id:"使用-plantuml-画图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-plantuml-画图"}},[t._v("#")]),t._v(" 使用 plantuml 画图")]),t._v(" "),n("div",{staticClass:"language-plaintext line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("@startuml\nclass Person {\n  +name : String\n  +age : Number\n  +eat() : void\n}\nclass Student {\n  +study(grade: Grade): void\n}\n\nclass Grade {\n  +index:Number\n  +subjects:Array\n}\n\nStudent --|> Person\nStudent --\x3e Grade\n@enduml\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br")])]),n("svg",{staticStyle:{width:"308px",height:"211px",background:"#000000"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",contentScriptType:"application/ecmascript",contentStyleType:"text/css",height:"211px",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 308 211",width:"308px",zoomAndPan:"magnify"}},[n("defs"),n("g",[n("text",{attrs:{fill:"#33FF02","font-family":"sans-serif","font-size":"14","font-weight":"bold",lengthAdjust:"spacingAndGlyphs",textLength:"261",x:"5",y:"19"}},[t._v("Dot Executable: /opt/local/bin/dot")]),n("text",{attrs:{fill:"#33FF02","font-family":"sans-serif","font-size":"14","font-weight":"bold",lengthAdjust:"spacingAndGlyphs",textLength:"145",x:"5",y:"35.2969"}},[t._v("File does not exist")]),n("text",{attrs:{fill:"#33FF02","font-family":"sans-serif","font-size":"14","font-weight":"bold",lengthAdjust:"spacingAndGlyphs",textLength:"291",x:"5",y:"51.5938"}},[t._v("Cannot find Graphviz. You should try")]),n("text",{attrs:{fill:"#33FF02","font-family":"sans-serif","font-size":"14","font-weight":"bold",lengthAdjust:"spacingAndGlyphs",textLength:"0",x:"10",y:"67.8906"}}),n("text",{attrs:{fill:"#33FF02","font-family":"sans-serif","font-size":"14","font-weight":"bold",lengthAdjust:"spacingAndGlyphs",textLength:"79",x:"5",y:"84.1875"}},[t._v("@startuml")]),n("text",{attrs:{fill:"#33FF02","font-family":"sans-serif","font-size":"14","font-weight":"bold",lengthAdjust:"spacingAndGlyphs",textLength:"57",x:"5",y:"100.4844"}},[t._v("testdot")]),n("text",{attrs:{fill:"#33FF02","font-family":"sans-serif","font-size":"14","font-weight":"bold",lengthAdjust:"spacingAndGlyphs",textLength:"72",x:"5",y:"116.7813"}},[t._v("@enduml")]),n("text",{attrs:{fill:"#33FF02","font-family":"sans-serif","font-size":"14","font-weight":"bold",lengthAdjust:"spacingAndGlyphs",textLength:"0",x:"10",y:"133.0781"}}),n("text",{attrs:{fill:"#33FF02","font-family":"sans-serif","font-size":"14","font-weight":"bold",lengthAdjust:"spacingAndGlyphs",textLength:"17",x:"10",y:"149.375"}},[t._v("or")]),n("text",{attrs:{fill:"#33FF02","font-family":"sans-serif","font-size":"14","font-weight":"bold",lengthAdjust:"spacingAndGlyphs",textLength:"0",x:"10",y:"165.6719"}}),n("text",{attrs:{fill:"#33FF02","font-family":"sans-serif","font-size":"14","font-weight":"bold",lengthAdjust:"spacingAndGlyphs",textLength:"227",x:"5",y:"181.9688"}},[t._v("java -jar plantuml.jar -testdot")]),n("text",{attrs:{fill:"#33FF02","font-family":"sans-serif","font-size":"14","font-weight":"bold",lengthAdjust:"spacingAndGlyphs",textLength:"0",x:"10",y:"198.2656"}})])]),n("hr"),t._v(" "),n("p",[n("a",{attrs:{href:"https://plantuml.com/zh/class-diagram",target:"_blank",rel:"noopener noreferrer"}},[t._v("🏡 plantuml 类图官方教程 "),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=a.exports}}]);