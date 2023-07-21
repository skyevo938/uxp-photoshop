"use strict";(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[5293],{96490:function(e,t,o){o.r(t),o.d(t,{_frontmatter:function(){return r},default:function(){return u}});var a=o(87462),s=o(63366),n=(o(15007),o(64983)),l=o(91515),p=["components"],r={},i={_frontmatter:r},m=l.Z;function u(e){var t=e.components,o=(0,s.Z)(e,p);return(0,n.mdx)(m,(0,a.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"code-samples"},"Code Samples"),(0,n.mdx)("p",null,"Below you will find various code samples with links to starter projects that expand on them. These should help you get\nstarted quickly with your idea, and help you develop a plugin for Photoshop in UXP."),(0,n.mdx)("p",null,"The samples are all available on GitHub ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/uxp-photoshop-plugin-samples"},"here")," where you can clone or fork them. If you're not familiar with GitHub and just want to download the examples, click on the link above and just click the green ",(0,n.mdx)("inlineCode",{parentName:"p"},"Code"),' button, then click "Download ZIP."'),(0,n.mdx)("h2",{id:"theme-awareness"},"Theme Awareness"),(0,n.mdx)("p",null,"Photoshop provides light and dark themes. Using Spectrum UXP, you can access the Photoshop colors to make your UI look as native as possible."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-css"},"body {\n  background-color: var(--uxp-host-background-color);\n  color: var(--uxp-host-text-color);\n  border-color: var(--uxp-host-border-color);\n  font-size: var(--uxp-host-font-size);\n}\n")),(0,n.mdx)("p",null,"See ",(0,n.mdx)("a",{parentName:"p",href:"/uxp-photoshop/guides/theme-awareness/"},"Theme Awareness")," for more details."),(0,n.mdx)("h2",{id:"entrypoints"},"Entrypoints"),(0,n.mdx)("h3",{id:"menu-items"},"Menu Items"),(0,n.mdx)("p",null,"If your plugin is meant to automate a simple workflow, or you don't need to collect user input, you can expose commands as entry points in your manifest. These kind of plugins will run headless. A \"command\" type of entry point will define which global scope method in your plugin's JS file should be called when user clicks the menu item."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-json"},'"entrypoints": [\n    {\n      "type": "command",\n      "id": "writelayers",\n      "label": {\n        "default": "Export Top Layers..."\n      }\n    }\n  ]\n')),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},'async function writelayers() {\n  // This method will be called by Photoshop when user clicks "Plugins > <Your Plugin> > Export Top Layers...\n}\n')),(0,n.mdx)("p",null,"See ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/direct-action-js-sample"},"direct-action-js-sample")," as an example that will gather the top layers in the current document, ask user where they want to save, and export them to the folder."),(0,n.mdx)("p",null,"Using this method, you can write one plugin with multiple functionalities."),(0,n.mdx)("h3",{id:"panels"},"Panels"),(0,n.mdx)("p",null,"Plugins can present panels that look and feel like the built in panels in Photoshop. "),(0,n.mdx)("p",null,'Defining a "panel" type entrypoint will cause Photoshop to do two things:'),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Add a menu item for your plugin with the name defined in the ",(0,n.mdx)("inlineCode",{parentName:"li"},"label")," field, based on locale."),(0,n.mdx)("li",{parentName:"ul"},"When menu item is clicked, load the ",(0,n.mdx)("inlineCode",{parentName:"li"},"main")," field in manifest for the contents of the panel.")),(0,n.mdx)("p",null,"See ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/vanilla-js-sample"},"vanilla-js-sample")," as an example project."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-json"},'"entrypoints": [\n    {\n      "type": "panel",\n      "id": "vanilla",\n      "label": {\n        "default": "Vanilla JS Sample"\n      },\n      ...\n    }\n  ]\n')),(0,n.mdx)("p",null,"For all details that go into a panel entrypoint, see ",(0,n.mdx)("a",{parentName:"p",href:"/uxp-photoshop/guides/uxp_guide/uxp-misc/manifest-v4/"},"UXP Manifest docs"),"."),(0,n.mdx)("h3",{id:"coming-soon---one-off-scripts"},"Coming Soon - One Off Scripts"),(0,n.mdx)("p",null,"For those used to ExtendScript jsx files, we are working on one off scripts where Photoshop can be provided a JavaScript\nfile which will be ran on the fly and then be cleaned up. "),(0,n.mdx)("h2",{id:"ui-libraries"},"UI Libraries"),(0,n.mdx)("p",null,"While writing a simple JS/HTML/CSS plugin is possible, those who are building plugins that have internal state management,\nor more complicated UI may benefit from commonly used UI libraries. Below examples are not necessarily only ones you can use,\nbut can serve as good starters if you already are familiar with a library."),(0,n.mdx)("p",null,"We do not suggest that you use any particular library for your plugins, but suggest that you read about them and decide\nfor yourself what will work the best for you."),(0,n.mdx)("h3",{id:"react"},"React"),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"https://reactjs.org/"},"React.js")," is one of the most used UI libraries. It's declarative and component based, helping you\nbreak your UI into reusable components. "),(0,n.mdx)("p",null,"See ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/ui-react-starter"},"ui-react-starter")," for the sample project."),(0,n.mdx)("h3",{id:"vue"},"Vue"),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"https://vuejs.org/"},"Vue.js")," is another declarative UI library that's easy to learn. "),(0,n.mdx)("p",null,"See ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/ui-vue-starter"},"ui-vue-starter")," for the sample project."),(0,n.mdx)("h3",{id:"svelte"},"Svelte"),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"https://svelte.dev/"},"Svelte")," is different from the other two libraries, in the sense that it compiles your code to a\nsimple JS application, shrinking it's size."),(0,n.mdx)("p",null,"See ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/ui-svelte-starter"},"ui-svelte-starter")," for the sample project."),(0,n.mdx)("h2",{id:"uxp-core-apis"},"UXP Core APIs"),(0,n.mdx)("p",null,"While all APIs under ",(0,n.mdx)("inlineCode",{parentName:"p"},'require("photoshop")')," are provided by Photoshop, UXP itself provides core functionality that is shared across\napplications, such as file system access, secure storage and web requests."),(0,n.mdx)("h3",{id:"file-system-access"},"File System Access"),(0,n.mdx)("p",null,"With UXP, plugins have access only to their own plugin folder, a data folder and a temporary folder. All other file locations\nhave to be explicitly given access to by the user. See ",(0,n.mdx)("a",{parentName:"p",href:"/uxp-photoshop/uxp-api/reference-js/Modules/uxp/Persistent%20File%20Storage/FileSystemProvider/"},"FileSystemProvider"),"\nfor information on what APIs and folders are available to you."),(0,n.mdx)("p",null,"See ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/jszip-sample"},"jszip-sample")," for an example of how temporary folder is accessed."),(0,n.mdx)("h3",{id:"secure-storage"},"Secure Storage"),(0,n.mdx)("p",null,"This allows you to store data across sessions. Secure storage APIs are all asynchronous."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},'const secureStorage = require("uxp").storage.secureStorage;\nconst value = await secureStorage.getItem("key");\n')),(0,n.mdx)("p",null,"See ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/secure-storage-sample"},"secure-storage-sample")," for an example use of these APIs."),(0,n.mdx)("h3",{id:"web-requests"},"Web Requests"),(0,n.mdx)("p",null,"UXP provides ",(0,n.mdx)("inlineCode",{parentName:"p"},"fetch")," method globally, matching HTML DOM ",(0,n.mdx)("inlineCode",{parentName:"p"},"fetch")," method. See ",(0,n.mdx)("a",{parentName:"p",href:"/uxp-photoshop/uxp-api/reference-js/Global%20Members/Data%20Transfers/fetch/"},"fetch")," for more details."),(0,n.mdx)("p",null,"See ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/web-service-call-js-sample"},"web-service-call-js-sample"),"\nfor an example plugin that communicates with a web server."),(0,n.mdx)("h2",{id:"oauth-workflows"},"OAuth Workflows"),(0,n.mdx)("p",null,"You can use OAuth to connect to any supporting service that supports it, and provide online functionality in your plugin."),(0,n.mdx)("p",null,"See ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/oauth-workflow-sample"},"oauth-workflow-sample")," to see it in action."),(0,n.mdx)("h2",{id:"cross-compatible-javascript"},"Cross Compatible JavaScript"),(0,n.mdx)("p",null,"UXP, as a unified platform, helps you write plugins for multiple Adobe products. Using ",(0,n.mdx)("inlineCode",{parentName:"p"},'require("uxp").host')," you can grab the current host\napplication's name, and alter your code accordingly. This way, you can write a plugin once, and use it in multiple applications."),(0,n.mdx)("p",null,"See ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/cross-compatible-js-sample"},"cross-compatible-js-sample")," to see it in action."),(0,n.mdx)("h2",{id:"external-processes"},"External Processes"),(0,n.mdx)("p",null,"Currently, we do not support external objects like ExtendScript. However, you can use websockets in UXP to communicate with other\napplications and processes. For an example, see ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/desktop-helper-sample"},"desktop-helper-sample")," and\n",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/io-websocket-sample"},"io-websocket-sample")),(0,n.mdx)("p",null,"UXP also supports WebAssembly. See ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/wasm-rust-sample"},"wasm-rust-sample")," for an example project\nthat compiles Rust code into WASM and runs it via the UXP plugin."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-code-samples-index-md-071c31801cf9555bbe94.js.map