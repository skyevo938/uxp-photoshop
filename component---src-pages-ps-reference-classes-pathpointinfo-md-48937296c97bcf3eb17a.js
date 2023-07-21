"use strict";(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[335],{35905:function(t,e,n){n.r(e),n.d(e,{_frontmatter:function(){return m},default:function(){return h}});var a=n(87462),r=n(63366),o=(n(15007),n(64983)),i=n(91515),p=["components"],m={},d={_frontmatter:m},s=i.Z;function h(t){var e=t.components,n=(0,r.Z)(t,p);return(0,o.mdx)(s,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"path-point-info"},"Path Point Info"),(0,o.mdx)("p",null,"Used to create a ",(0,o.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/pathpoint/"},"PathPoint"),", which represents the anchor and control-handle endpoints for a path segment.\nEach point (the anchor point, left-direction point, and right-direction point) is an array containing X and Y\nposition coordinates."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Use the JavaScript ",(0,o.mdx)("inlineCode",{parentName:"p"},"new")," operator to create these objects, and store them in the ",(0,o.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/subpathinfo/#entiresubpath"},"SubPathInfo.entireSubPath"),"\nproperty before using that object to create a path item with ",(0,o.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/pathitems/#add"},"PathItems.add"),"()")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"The resulting ",(0,o.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/subpathitem/"},"SubPathItem")," object contains the resulting ",(0,o.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/pathpoint/"},"PathPoint")," objects. Use the ",(0,o.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/pathpoint/"},"PathPoint")," object\nto retrieve information about the points that describe existing path segments. The properties are read-only."))),(0,o.mdx)("p",null,'For paths that are straight segments (not curved), the coordinates of all three points are the same. For curved\nsegments, the coordinates are different. The difference between the anchor point and the left or right\ndirection points determines the arc of the curve. Use the left direction point to bend the curve "outward" or\nmake it convex; or use the right direction point to bend the curve "inward" or make it concave.'),(0,o.mdx)("h2",{id:"pathpointinfo-sample-script"},"PathPointInfo sample script"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-typescript"},'     function drawLine(doc: Document, start: number[], stop: number[]) {\n         const startPoint = new PathPointInfo();\n         startPoint.anchor = start;\n         startPoint.leftDirection = start;\n         startPoint.rightDirection = start;\n         startPoint.kind = Constants.PointKind.CORNERPOINT;\n\n         const stopPoint = new PathPointInfo();\n         stopPoint.anchor = stop;\n         stopPoint.leftDirection = stop;\n         stopPoint.rightDirection = stop;\n         stopPoint.kind = Constants.PointKind.CORNERPOINT;\n\n         const spi = new SubPathInfo();\n         spi.closed = false;\n         spi.operation = Constants.ShapeOperation.SHAPEXOR;\n         spi.entireSubPath = [startPoint, stopPoint];\n\n         const line = doc.pathItems.add("Line", [spi]);\n         line.strokePath(Constants.ToolType.PENCIL);\n         line.remove();\n     }\n\n     drawLine(app.activeDocument, [100,100], [200,200]);\n')),(0,o.mdx)("h2",{id:"properties"},"Properties"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,o.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,o.mdx)("th",{parentName:"tr",align:"left"},"Access"),(0,o.mdx)("th",{parentName:"tr",align:"left"},"Min Version"),(0,o.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},"anchor"),(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("em",{parentName:"td"},"number"),"[]"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"23.3"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"The X and Y coordinates of the anchor point of the curve.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},"kind"),(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/modules/constants/#pointkind"},(0,o.mdx)("em",{parentName:"a"},"PointKind"))),(0,o.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"23.3"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"The role (corner or smooth) this point plays in the containing path segment.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},"leftDirection"),(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("em",{parentName:"td"},"number"),"[]"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"23.3"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"The location of the left-direction endpoint(","'","in","'"," position).")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},"rightDirection"),(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("em",{parentName:"td"},"number"),"[]"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"23.3"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"The location of the right-direction endpoint(","'","out","'"," position).")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},"typename"),(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("em",{parentName:"td"},"string")),(0,o.mdx)("td",{parentName:"tr",align:"left"},"R"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"23.3"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"The class name of the referenced object: ",(0,o.mdx)("em",{parentName:"td"},'"',"PathPointInfo",'"'),".")))))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-classes-pathpointinfo-md-48937296c97bcf3eb17a.js.map