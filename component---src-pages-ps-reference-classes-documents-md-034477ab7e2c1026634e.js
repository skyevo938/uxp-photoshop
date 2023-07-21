"use strict";(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[3845],{92688:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return i}});var n=a(87462),m=a(63366),r=(a(15007),a(64983)),d=a(91515),o=["components"],p={},l={_frontmatter:p},s=d.Z;function i(e){var t=e.components,a=(0,m.Z)(e,o);return(0,r.mdx)(s,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"documents"},"Documents"),(0,r.mdx)("p",null,"A collections class allowing for array access into the application's\nlist of documents that are currently open,\nwhile also providing familiar methods from ExtendScript, like ",(0,r.mdx)("inlineCode",{parentName:"p"},"getByName"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Iterate through all the documents\napp.documents.forEach(h => console.log(h.title));\n")),(0,r.mdx)("h2",{id:"indexable"},"Indexable"),(0,r.mdx)("p",null,"▪ ","[index: ",(0,r.mdx)("em",{parentName:"p"},"number"),"]",": ",(0,r.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/document/"},(0,r.mdx)("em",{parentName:"a"},"Document"))),(0,r.mdx)("p",null,"Used to access the documents in the collection."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Iterate through all the documents\napp.documents.forEach(h => console.log(h.title));\n")),(0,r.mdx)("h2",{id:"properties"},"Properties"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Access"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Min Version"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"length"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"number")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"R"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"22.5"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Number of ",(0,r.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/classes/document/"},"Document")," elements in this collection.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"parent"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/classes/photoshop/"},(0,r.mdx)("em",{parentName:"a"},"Photoshop"))),(0,r.mdx)("td",{parentName:"tr",align:"left"},"R"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"22.5"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The owner application of this Documents collection.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"typename"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"R"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"22.5"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The name for this object collection: Documents.")))),(0,r.mdx)("h2",{id:"methods"},"Methods"),(0,r.mdx)("h3",{id:"add"},"add"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"22.5"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"async")," : ",(0,r.mdx)("em",{parentName:"p"},"Promise"),"<",(0,r.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/document/"},(0,r.mdx)("em",{parentName:"a"},"Document")),">"),(0,r.mdx)("p",null,"Create a new document."),(0,r.mdx)("p",null,'No options will create a document of 7 x 5 inches at 300 pixels per inch.\nThis is the same as the "Default Photoshop Size" preset.'),(0,r.mdx)("p",null,"An object with a 'preset' string parameter can be used to specify any of\nthe other presets that come installed with Photoshop or created by users."),(0,r.mdx)("p",null,"An object with one or more parameters can also be supplied. Any parameter\nmissing will be set to the default of: width 2100 pixels, height 1500 pixels,\nresolution 300 pixels per inch, mode: @RGBColorMode and a fill of white with\nno transparency."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'// "Default Photoshop Size" 7x5 inches at 300ppi\nlet newDoc1 = await app.documents.add();\nlet newDoc2 = await app.documents.add({\n   width: 800, \n   height: 600, \n   resolution: 300, \n   mode: "RGBColorMode", \n   fill: "transparent"\n});\nlet newDoc3 = await app.documents.add({preset: "My Default Size 1"});\n')),(0,r.mdx)("h4",{id:"parameters"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"options?")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/objects/createoptions/documentcreateoptions/"},(0,r.mdx)("em",{parentName:"a"},"DocumentCreateOptions"))),(0,r.mdx)("td",{parentName:"tr",align:"left"},"@DocumentCreateOptions")))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"getbyname"},"getByName"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"22.5"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/document/"},(0,r.mdx)("em",{parentName:"a"},"Document"))),(0,r.mdx)("p",null,"Find the first document with the matching name."),(0,r.mdx)("h4",{id:"parameters-1"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"name")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"string"))))))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-classes-documents-md-034477ab7e2c1026634e.js.map