"use strict";(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[1019],{51109:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return s}});var m=a(87462),r=a(63366),n=(a(15007),a(64983)),d=a(91515),l=["components"],p={},o={_frontmatter:p},i=d.Z;function s(e){var t=e.components,a=(0,r.Z)(e,l);return(0,n.mdx)(i,(0,m.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"layercomp"},"LayerComp"),(0,n.mdx)("p",null,"Represents a single layer comp in the document."),(0,n.mdx)("h2",{id:"properties"},"Properties"),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,n.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,n.mdx)("th",{parentName:"tr",align:"left"},"Access"),(0,n.mdx)("th",{parentName:"tr",align:"left"},"Min Version"),(0,n.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},"appearance"),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("em",{parentName:"td"},"boolean")),(0,n.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"24.0"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"If true, the layer comp will remember the layers","'"," appearance (layer style) settings.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},"childComp"),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("em",{parentName:"td"},"boolean")),(0,n.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"24.0"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"If true, the layer comp will remember which of the Smart Object","'","s layer comps are set in the Properties panel.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},"comment"),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("em",{parentName:"td"},"string")),(0,n.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"24.0"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"The description of the layer comp.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},"docId"),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("em",{parentName:"td"},"number")),(0,n.mdx)("td",{parentName:"tr",align:"left"},"R"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"24.0"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"The ID of the document of this layer comp.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},"id"),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("em",{parentName:"td"},"number")),(0,n.mdx)("td",{parentName:"tr",align:"left"},"R"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"24.0"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"For use with batchPlay operations. This layer comp ID, along with its document ID can be used to represent this layer comp for the lifetime of this document or the layer comp.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},"name"),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("em",{parentName:"td"},"string")),(0,n.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"24.0"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"The name of the layer comp.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},"parent"),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/classes/document/"},(0,n.mdx)("em",{parentName:"a"},"Document"))),(0,n.mdx)("td",{parentName:"tr",align:"left"},"R"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"24.0"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"Owner document of this layer comp")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},"position"),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("em",{parentName:"td"},"boolean")),(0,n.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"24.0"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"If true, the layer comp will remember layers","'"," positions.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},"selected"),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("em",{parentName:"td"},"boolean")),(0,n.mdx)("td",{parentName:"tr",align:"left"},"R"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"24.0"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"If true, the layer comp is currently selected in the Layer Comps panel.  Note: selected does not mean that this layer comp is applied to document.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},"typename"),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("em",{parentName:"td"},"string")),(0,n.mdx)("td",{parentName:"tr",align:"left"},"R"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"24.0"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"The class name of the referenced LayerComp object")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},"visibility"),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("em",{parentName:"td"},"boolean")),(0,n.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"24.0"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"If true, the layer comp will remember layers","'"," visibilities.")))),(0,n.mdx)("h2",{id:"methods"},"Methods"),(0,n.mdx)("h3",{id:"apply"},"apply"),(0,n.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"24.0"),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"async")," : ",(0,n.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,n.mdx)("p",null,"Applies the layer comp to the document."),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"duplicate"},"duplicate"),(0,n.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"24.0"),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"async")," : ",(0,n.mdx)("em",{parentName:"p"},"Promise"),"<",(0,n.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/layercomp/"},(0,n.mdx)("em",{parentName:"a"},"LayerComp")),">"),(0,n.mdx)("p",null,"Duplicates this layer comp"),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"recapture"},"recapture"),(0,n.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"24.0"),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"async")," : ",(0,n.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,n.mdx)("p",null,"Updates the recorded states of the layers for this layer comp."),(0,n.mdx)("p",null,"Applies to all layers and all properties supported by this layer comp."),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"async")," : ",(0,n.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,n.mdx)("p",null,"Updates the recorded states of the layers for this layer comp."),(0,n.mdx)("h4",{id:"parameters"},"Parameters"),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,n.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,n.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("inlineCode",{parentName:"td"},"arg")),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/objects/options/layercomprecaptureoptions/"},(0,n.mdx)("em",{parentName:"a"},"LayerCompRecaptureOptions"))),(0,n.mdx)("td",{parentName:"tr",align:"left"},"-")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("inlineCode",{parentName:"td"},"layers?")),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/classes/layer/"},(0,n.mdx)("em",{parentName:"a"},"Layer")),"[]"),(0,n.mdx)("td",{parentName:"tr",align:"left"},"if this argument is passed then only specified layers will be recaptured.")))),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"remove"},"remove"),(0,n.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"24.0"),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"async")," : ",(0,n.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,n.mdx)("p",null,"Deletes this object from document."),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"resetlayercomp"},"resetLayerComp"),(0,n.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"24.0"),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"async")," : ",(0,n.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,n.mdx)("p",null,"Resets the layer comp state to the document state."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-classes-layercomp-md-a0cfb954d3a8d3a2927d.js.map