"use strict";(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[553],{91302:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return r},default:function(){return h}});var a,o=t(87462),i=t(63366),p=(t(15007),t(64983)),l=t(91515),s=["components"],r={},d=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.mdx)("div",e)}),m={_frontmatter:r},u=l.Z;function h(e){var n=e.components,t=(0,i.Z)(e,s);return(0,p.mdx)(u,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,p.mdx)("h1",{id:"creating-your-first-uxp-based-photoshop-plugin"},"Creating your first UXP-based Photoshop plugin"),(0,p.mdx)("p",null,"In this tutorial, you will create your first own Photoshop plugin using UXP."),(0,p.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,p.mdx)("p",null,"To follow this tutorial, you need ",(0,p.mdx)("strong",{parentName:"p"},"Photoshop v23 or above")," and the ",(0,p.mdx)("strong",{parentName:"p"},"UXP Developer Tool (UDT)"),". You can\ninstall both applications with the Creative Cloud Desktop app. You also need ",(0,p.mdx)("strong",{parentName:"p"},"basic knowledge of HTML and JavaScript"),"."),(0,p.mdx)("h2",{id:"step-1-create-the-plugin"},"Step 1: Create the plugin"),(0,p.mdx)("p",null,"Open the UXP Developer Tool and click the ",(0,p.mdx)("em",{parentName:"p"},'"Create plugin..."')," button. In the dialog that opens, enter the following\ndetails:"),(0,p.mdx)("table",null,(0,p.mdx)("thead",{parentName:"table"},(0,p.mdx)("tr",{parentName:"thead"},(0,p.mdx)("th",{parentName:"tr",align:null},"Field"),(0,p.mdx)("th",{parentName:"tr",align:null},"Value"))),(0,p.mdx)("tbody",{parentName:"table"},(0,p.mdx)("tr",{parentName:"tbody"},(0,p.mdx)("td",{parentName:"tr",align:null},"Plugin Name"),(0,p.mdx)("td",{parentName:"tr",align:null},"My first plugin")),(0,p.mdx)("tr",{parentName:"tbody"},(0,p.mdx)("td",{parentName:"tr",align:null},"Plugin Id"),(0,p.mdx)("td",{parentName:"tr",align:null},"my.first.plugin")),(0,p.mdx)("tr",{parentName:"tbody"},(0,p.mdx)("td",{parentName:"tr",align:null},"Plugin Version"),(0,p.mdx)("td",{parentName:"tr",align:null},"1.0.0")),(0,p.mdx)("tr",{parentName:"tbody"},(0,p.mdx)("td",{parentName:"tr",align:null},"Host Application"),(0,p.mdx)("td",{parentName:"tr",align:null},"Adobe Photoshop")),(0,p.mdx)("tr",{parentName:"tbody"},(0,p.mdx)("td",{parentName:"tr",align:null},"Host Application Version"),(0,p.mdx)("td",{parentName:"tr",align:null},"23.0.0")),(0,p.mdx)("tr",{parentName:"tbody"},(0,p.mdx)("td",{parentName:"tr",align:null},"Template"),(0,p.mdx)("td",{parentName:"tr",align:null},"quick-layers-starter")))),(0,p.mdx)("p",null,"Click ",(0,p.mdx)("em",{parentName:"p"},'"Select Folder"')," and select a new, empty folder where you want to develop your plugin. The Developer Tool creates\nthe necessary files in your selected folder and adds the plugin to the list of plugins."),(0,p.mdx)("p",null,"You should now be able to see the following files in your selected folder:"),(0,p.mdx)("ul",null,(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("inlineCode",{parentName:"li"},"icons"),": a folder containing a set of icons for your plugin"),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("inlineCode",{parentName:"li"},"index.html"),": your plugin's entrypoint. This gets loaded when the plugin loads"),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("inlineCode",{parentName:"li"},"manifest.json"),": a file containing the metadata you specified in UDT as well as a pointer to the ",(0,p.mdx)("inlineCode",{parentName:"li"},"index.html")," as an\nentrypoint.")),(0,p.mdx)("p",null,'As well as some other "meta" files like ',(0,p.mdx)("inlineCode",{parentName:"p"},"LICENSE"),", ",(0,p.mdx)("inlineCode",{parentName:"p"},"README.md"),", etc."),(0,p.mdx)("h2",{id:"step-2-run-the-plugin"},"Step 2: Run the plugin"),(0,p.mdx)("p",null,"Open Adobe Photoshop and create some sample file you can use with your plugin."),(0,p.mdx)("p",null,"To run your plugin within Photoshop, click the ",(0,p.mdx)("em",{parentName:"p"},'"•••"')," button on the right of your plugin's row within the UDT and select ",(0,p.mdx)("em",{parentName:"p"},'"\nLoad"'),". This loads your plugin in Photoshop and automatically opens the plugin's panel."),(0,p.mdx)("p",null,"The ",(0,p.mdx)("em",{parentName:"p"},"quick-layers-starter")," template initially contains a panel with a ",(0,p.mdx)("em",{parentName:"p"},'"Populate Layers"')," button that allows you to populate a box\nwithin the panel with the layer names:"),(0,p.mdx)("p",null,(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"245px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"148.97959183673467%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/ce4e1de7693cacd5bee67f4ddbd82ed1/a12e7/panel-base.webp 245w"],sizes:"(max-width: 245px) 100vw, 245px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/ce4e1de7693cacd5bee67f4ddbd82ed1/c05a7/panel-base.png 245w"],sizes:"(max-width: 245px) 100vw, 245px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-photoshop/static/ce4e1de7693cacd5bee67f4ddbd82ed1/c05a7/panel-base.png",alt:'A Photoshop panel with a list of layer names and a button called "Populate Layers"',title:'A Photoshop panel with a list of layer names and a button called "Populate Layers"',loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("p",null,"Let's take a look at what's going on in the background when running this plugin."),(0,p.mdx)("p",null,"In the ",(0,p.mdx)("inlineCode",{parentName:"p"},"manifest.json")," file, the ",(0,p.mdx)("inlineCode",{parentName:"p"},'"main"')," field points to the ",(0,p.mdx)("inlineCode",{parentName:"p"},"index.html")," file:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "my.first.plugin",\n  "name": "My first plugin",\n  "version": "1.0.0",\n  "main": "index.html",\n  "host": [\n    /* ... */\n  ],\n  "manifestVersion": 4,\n  "entrypoints": [\n    {\n      "type": "panel",\n      "id": "vanilla",\n      // [...]\n      "icons": [\n        // [...]\n      ],\n      "label": {\n        "default": "Starter Panel"\n      }\n    }\n  ],\n  "icons": [\n    // [...]\n  ]\n}\n')),(0,p.mdx)("p",null,"When Photoshop loads the plugin, it loads the ",(0,p.mdx)("inlineCode",{parentName:"p"},"index.html")," file specified here. The ",(0,p.mdx)("inlineCode",{parentName:"p"},"index.html")," file, in turn, defines\nour panel's UI:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <script src="index.js"><\/script>\n  </head>\n  <style>\n    /* [...] */\n  </style>\n  <body>\n    <sp-heading>Layers</sp-heading>\n    <sp-body id="layers"> No layers </sp-body>\n    <footer>\n      <sp-button id="btnPopulate">Populate Layers</sp-button>\n    </footer>\n  </body>\n</html>\n')),(0,p.mdx)("p",null,"As you can see, the ",(0,p.mdx)("inlineCode",{parentName:"p"},"index.html")," file then loads the ",(0,p.mdx)("inlineCode",{parentName:"p"},"index.js"),"."),(0,p.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,p.mdx)("p",null,"Note that while this looks like fairly standard HTML, the UXP environment is not a browser and only supports a ",(0,p.mdx)("a",{parentName:"p",href:"/uxp-photoshop/src/pages/uxp-api/reference-html/General/Unsupported%20Elements.md"},"subset of HTML/CSS/JS features"),". You can also see some custom components like ",(0,p.mdx)("inlineCode",{parentName:"p"},"<sp-heading>"),", ",(0,p.mdx)("inlineCode",{parentName:"p"},"<sp-body>"),", and ",(0,p.mdx)("inlineCode",{parentName:"p"},"<sp-button>"),". These are so-called ",(0,p.mdx)("a",{parentName:"p",href:"/uxp-photoshop/src/pages/uxp-api/reference-spectrum/index.md"},"Spectrum UXP components")," that implement the Spectrum Design system and allow plugins to feel native in the surrounding Photoshop environment."),(0,p.mdx)("p",null,"The ",(0,p.mdx)("inlineCode",{parentName:"p"},"index.js")," file then sets up a ",(0,p.mdx)("inlineCode",{parentName:"p"},"click")," listener on the ",(0,p.mdx)("em",{parentName:"p"},'"Populate\nLayers"')," button and uses the ",(0,p.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/photoshop/uxp/2022/ps_reference/"},"Photoshop API")," to populate the ",(0,p.mdx)("inlineCode",{parentName:"p"},'<sp-body id="layers" />')," element with the layer names:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-js"},'function showLayerNames() {\n  const app = window.require("photoshop").app;\n  const allLayers = app.activeDocument.layers;\n  const allLayerNames = allLayers.map((layer) => layer.name);\n  const sortedNames = allLayerNames.sort((a, b) =>\n    a < b ? -1 : a > b ? 1 : 0\n  );\n  document.getElementById("layers").innerHTML = `\n      <ul>${sortedNames.map((name) => `<li>${name}</li>`).join("")}</ul>`;\n}\n\ndocument\n  .getElementById("btnPopulate")\n  .addEventListener("click", showLayerNames);\n')),(0,p.mdx)("p",null,"Note that you can use the ",(0,p.mdx)("inlineCode",{parentName:"p"},"window.require()")," function to import various API modules, like ",(0,p.mdx)("inlineCode",{parentName:"p"},"require('photoshop')")," in this\nexample."),(0,p.mdx)("h2",{id:"step-3-adjust-the-plugin"},"Step 3: Adjust the plugin"),(0,p.mdx)("p",null,(0,p.mdx)("em",{parentName:"p"},"We could call this good enough, but let's face it: This doesn't feel like you've built your own\nplugin. So let us at least add some customization to it by adding additional information about our layer to the output.")),(0,p.mdx)("p",null,"Have a look at the ",(0,p.mdx)("a",{parentName:"p",href:"/uxp-photoshop/src/pages/ps_reference/classes/layer.md"},(0,p.mdx)("inlineCode",{parentName:"a"},"Layer")," class API Reference"),". This page lists all the\nproperties and functions available on a layer object. You can choose whatever property you want, but for this tutorial,\nwe will just use the ",(0,p.mdx)("a",{parentName:"p",href:"/uxp-photoshop/src/pages/ps_reference/classes/layer.md#properties"},(0,p.mdx)("inlineCode",{parentName:"a"},"opacity: number")," property"),"."),(0,p.mdx)("p",null,"Adjust the ",(0,p.mdx)("inlineCode",{parentName:"p"},"main.js")," to also include the new property in the output:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-js"},"function showLayerNames() {\n  // [...]\n  const allLayerNames = allLayers.map(\n    (layer) => `${layer.name} (${layer.opacity} %)`\n  );\n  // [...]\n}\n\n// [...]\n")),(0,p.mdx)("p",null,"With your ",(0,p.mdx)("inlineCode",{parentName:"p"},"main.js")," file saved, you need to reload the plugin to run the plugin including your changes. You can do this\nby selecting the ",(0,p.mdx)("em",{parentName:"p"},'"••• > Reload"')," option in the UXP Developer Tool."),(0,p.mdx)(d,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,p.mdx)("p",null,"If you change anything in the ",(0,p.mdx)("inlineCode",{parentName:"p"},"manifest.json")," file, you need to do a full reload of the plugin to reflect the changes.\nTo do this, first select ",(0,p.mdx)("em",{parentName:"p"},'"Unload"')," and then ",(0,p.mdx)("em",{parentName:"p"},'"Load"')," in the UXP Developer Tool."),(0,p.mdx)("p",null,"Alternatively, you can also watch your plugin folder for changes to reload the plugin automatically whenever you change\nsomething. To do so, run the ",(0,p.mdx)("em",{parentName:"p"},'"Watch"')," option in your plugin actions menu in the UDT."),(0,p.mdx)("p",null,"Back in Photoshop, when you click ",(0,p.mdx)("em",{parentName:"p"},'"Populate Layers"')," again, you should see that your property is now also included in\nthe output:"),(0,p.mdx)("p",null,(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"262px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"144.27480916030535%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/76d8aa644644bf60f613ddd8d3d8c585/6de2e/panel-with-opacity.webp 262w"],sizes:"(max-width: 262px) 100vw, 262px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/76d8aa644644bf60f613ddd8d3d8c585/6ae65/panel-with-opacity.png 262w"],sizes:"(max-width: 262px) 100vw, 262px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-photoshop/static/76d8aa644644bf60f613ddd8d3d8c585/6ae65/panel-with-opacity.png",alt:'A Photoshop panel showing a list of layers including their opacity and a button called "Populate Layers"',title:'A Photoshop panel showing a list of layers including their opacity and a button called "Populate Layers"',loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("p",null,"Also, you may find the icon missing when docking the plugin panel in a toolbar. It can be resolved by changing ",(0,p.mdx)("inlineCode",{parentName:"p"},'"path"')," field to the updated icon filename in ",(0,p.mdx)("inlineCode",{parentName:"p"},"manifest.json"),". For example, ",(0,p.mdx)("inlineCode",{parentName:"p"},'"path": "icons/dark.png",')," corresponds to following icon files"),(0,p.mdx)("p",null,(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"230px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.913043478260875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/0b2f6d7c09d16e534c512bc9a8f077c4/5f64f/icon-file.webp 230w"],sizes:"(max-width: 230px) 100vw, 230px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-photoshop/static/0b2f6d7c09d16e534c512bc9a8f077c4/5578e/icon-file.png 230w"],sizes:"(max-width: 230px) 100vw, 230px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-photoshop/static/0b2f6d7c09d16e534c512bc9a8f077c4/5578e/icon-file.png",alt:'screenshot of a file structure. The folder icons contains two files: "dark@1x.png" and "dark@2x.png"',title:'screenshot of a file structure. The folder icons contains two files: "dark@1x.png" and "dark@2x.png"',loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("h2",{id:"next-steps"},"Next steps"),(0,p.mdx)("p",null,"You've now built your first own plugin. It doesn't look like much right now, but by taking a look at what's available in the ",(0,p.mdx)("a",{parentName:"p",href:"/uxp-photoshop/src/pages/ps_reference/index.md"},"API Reference"),", you can already do a lot of things with the knowledge of this tutorial, alone."),(0,p.mdx)("p",null,(0,p.mdx)("a",{parentName:"p",href:"../editing-the-document/index.md"},"In the next tutorial"),", you'll learn how you can not only get information about your document, but actually make changes to it, as well."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-getting-started-creating-your-first-plugin-index-md-4d3d12dbf7cef92e65d1.js.map