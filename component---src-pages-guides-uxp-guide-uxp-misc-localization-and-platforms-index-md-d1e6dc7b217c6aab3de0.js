(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"2ST9":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return d}));var o=n("wx14"),a=n("zLVn"),s=(n("q1tI"),n("7ljp")),i=n("LHWr"),r=(n("qKvR"),{}),c={_frontmatter:r},l=i.a;function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.mdx)(l,Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"localization-and-platforms"},"Localization and Platforms"),Object(s.mdx)("h2",{id:"localization"},"Localization"),Object(s.mdx)("p",null,"Sometimes it's necesssary (for localization or other reasons) to find out what a plugin's host environment is. Here's how to do that:"),Object(s.mdx)("pre",null,Object(s.mdx)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const host = require('uxp').host;\nconst locale = host.uiLocale;\nconst hostName = host.name\nconst hostVersion = host.version;\n\nconsole.log(`locale: ${locale}  host ${hostName} version ${hostVersion}`);\n")),Object(s.mdx)("p",null,"You can use the returned strings in ",Object(s.mdx)("inlineCode",{parentName:"p"},"switch")," statements (or other control flow techniques) to alter your plugin's behavior, such as outputting the correct strings in messages and dialogs."),Object(s.mdx)("p",null,"You can also use it to change properties of HTML components in your panels (typically the ",Object(s.mdx)("inlineCode",{parentName:"p"},"innerHTML")," or ",Object(s.mdx)("inlineCode",{parentName:"p"},"innerText")," property) so they contain the correct language strings."),Object(s.mdx)("h2",{id:"os-identification"},"OS Identification"),Object(s.mdx)("p",null,"Sometimes you need to write different code depending upon whether your plugin is hosted on macOS or Windows. You can find out what app your plugin is hosted in with this methods:"),Object(s.mdx)("pre",null,Object(s.mdx)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const hostOS = require('os').platform(); \n// note that this is a method, not a property.\n")),Object(s.mdx)("p",null,Object(s.mdx)("inlineCode",{parentName:"p"},"hostOS"),' will contain the string "darwin" for macOS and "windows" for, well, Windows.'))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-uxp-guide-uxp-misc-localization-and-platforms-index-md-d1e6dc7b217c6aab3de0.js.map