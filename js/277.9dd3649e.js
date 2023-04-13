"use strict";(self["webpackChunkfast_front"]=self["webpackChunkfast_front"]||[]).push([[277],{72277:function(e,t,n){n.r(t),n.d(t,{autoCloseTags:function(){return T},esLint:function(){return I},javascript:function(){return S},javascriptLanguage:function(){return $},jsxLanguage:function(){return v},localCompletionSource:function(){return b},snippets:function(){return c},tsxLanguage:function(){return x},typescriptLanguage:function(){return w}});var r=n(24632),o=n(66388),i=n(20718),a=n(82489),l=n(31241),s=n(58114);const c=[(0,l.Gn)("function ${name}(${params}) {\n\t${}\n}",{label:"function",detail:"definition",type:"keyword"}),(0,l.Gn)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}",{label:"for",detail:"loop",type:"keyword"}),(0,l.Gn)("for (let ${name} of ${collection}) {\n\t${}\n}",{label:"for",detail:"of loop",type:"keyword"}),(0,l.Gn)("do {\n\t${}\n} while (${})",{label:"do",detail:"loop",type:"keyword"}),(0,l.Gn)("while (${}) {\n\t${}\n}",{label:"while",detail:"loop",type:"keyword"}),(0,l.Gn)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}",{label:"try",detail:"/ catch block",type:"keyword"}),(0,l.Gn)("if (${}) {\n\t${}\n}",{label:"if",detail:"block",type:"keyword"}),(0,l.Gn)("if (${}) {\n\t${}\n} else {\n\t${}\n}",{label:"if",detail:"/ else block",type:"keyword"}),(0,l.Gn)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}",{label:"class",detail:"definition",type:"keyword"}),(0,l.Gn)('import {${names}} from "${module}"\n${}',{label:"import",detail:"named",type:"keyword"}),(0,l.Gn)('import ${name} from "${module}"\n${}',{label:"import",detail:"default",type:"keyword"})],u=new s.hr,f=new Set(["Script","Block","FunctionExpression","FunctionDeclaration","ArrowFunction","MethodDeclaration","ForStatement"]);function d(e){return(t,n)=>{let r=t.node.getChild("VariableDefinition");return r&&n(r,e),!0}}const p=["FunctionDeclaration"],m={FunctionDeclaration:d("function"),ClassDeclaration:d("class"),ClassExpression:()=>!0,EnumDeclaration:d("constant"),TypeAliasDeclaration:d("type"),NamespaceDeclaration:d("namespace"),VariableDefinition(e,t){e.matchContext(p)||t(e,"variable")},TypeDefinition(e,t){t(e,"type")},__proto__:null};function y(e,t){let n=u.get(t);if(n)return n;let r=[],o=!0;function i(t,n){let o=e.sliceString(t.from,t.to);r.push({label:o,type:n})}return t.cursor(s.vj.IncludeAnonymous).iterate((t=>{if(o)o=!1;else if(t.name){let e=m[t.name];if(e&&e(t,i)||f.has(t.name))return!1}else if(t.to-t.from>8192){for(let n of y(e,t.node))r.push(n);return!1}})),u.set(t,r),r}const g=/^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,h=["TemplateString","String","RegExp","LineComment","BlockComment","VariableDefinition","TypeDefinition","Label","PropertyDefinition","PropertyName","PrivatePropertyDefinition","PrivatePropertyName"];function b(e){let t=(0,o.qz)(e.state).resolveInner(e.pos,-1);if(h.indexOf(t.name)>-1)return null;let n=t.to-t.from<20&&g.test(e.state.sliceDoc(t.from,t.to));if(!n&&!e.explicit)return null;let r=[];for(let o=t;o;o=o.parent)f.has(o.name)&&(r=r.concat(y(e.state.doc,o)));return{options:r,from:n?t.from:e.pos,validFor:g}}const $=o.qp.define({parser:r.E.configure({props:[o.uj.add({IfStatement:(0,o.tC)({except:/^\s*({|else\b)/}),TryStatement:(0,o.tC)({except:/^\s*({|catch\b|finally\b)/}),LabeledStatement:o.ze,SwitchBody:e=>{let t=e.textAfter,n=/^\s*\}/.test(t),r=/^\s*(case|default)\b/.test(t);return e.baseIndent+(n?0:r?1:2)*e.unit},Block:(0,o.vw)({closing:"}"}),ArrowFunction:e=>e.baseIndent+e.unit,"TemplateString BlockComment":()=>null,"Statement Property":(0,o.tC)({except:/^{/}),JSXElement(e){let t=/^\s*<\//.test(e.textAfter);return e.lineIndent(e.node.from)+(t?0:e.unit)},JSXEscape(e){let t=/\s*\}/.test(e.textAfter);return e.lineIndent(e.node.from)+(t?0:e.unit)},"JSXOpenTag JSXSelfClosingTag"(e){return e.column(e.node.from)+e.unit}}),o.x0.add({"Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression":o.Dv,BlockComment(e){return{from:e.from+2,to:e.to-2}}})]}),languageData:{closeBrackets:{brackets:["(","[","{","'",'"',"`"]},commentTokens:{line:"//",block:{open:"/*",close:"*/"}},indentOnInput:/^\s*(?:case |default:|\{|\}|<\/)$/,wordChars:"$"}}),w=$.configure({dialect:"ts"}),v=$.configure({dialect:"jsx"}),x=$.configure({dialect:"jsx ts"}),k="break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map((e=>({label:e,type:"keyword"})));function S(e={}){let t=e.jsx?e.typescript?x:v:e.typescript?w:$;return new o.ri(t,[$.data.of({autocomplete:(0,l.eC)(h,(0,l.Mb)(c.concat(k)))}),$.data.of({autocomplete:b}),e.jsx?T:[]])}function C(e,t,n=e.length){if(!t)return"";let r=t.getChild("JSXIdentifier");return r?e.sliceString(r.from,Math.min(r.to,n)):""}const D="object"==typeof navigator&&/Android\b/.test(navigator.userAgent),T=a.tk.inputHandler.of(((e,t,n,r)=>{if((D?e.composing:e.compositionStarted)||e.state.readOnly||t!=n||">"!=r&&"/"!=r||!$.isActiveAt(e.state,t,-1))return!1;let{state:a}=e,l=a.changeByRange((e=>{var t,n,l;let s,{head:c}=e,u=(0,o.qz)(a).resolveInner(c,-1);if("JSXStartTag"==u.name&&(u=u.parent),">"==r&&"JSXFragmentTag"==u.name)return{range:i.jT.cursor(c+1),changes:{from:c,insert:"><>"}};if(">"==r&&"JSXIdentifier"==u.name){if("JSXEndTag"!=(null===(n=null===(t=u.parent)||void 0===t?void 0:t.lastChild)||void 0===n?void 0:n.name)&&(s=C(a.doc,u.parent,c)))return{range:i.jT.cursor(c+1),changes:{from:c,insert:`></${s}>`}}}else if("/"==r&&"JSXFragmentTag"==u.name){let e=u.parent,t=null===e||void 0===e?void 0:e.parent;if(e.from==c-1&&"JSXEndTag"!=(null===(l=t.lastChild)||void 0===l?void 0:l.name)&&(s=C(a.doc,null===t||void 0===t?void 0:t.firstChild,c))){let e=`/${s}>`;return{range:i.jT.cursor(c+e.length),changes:{from:c,insert:e}}}}return{range:e}}));return!l.changes.empty&&(e.dispatch(l,{userEvent:"input.type",scrollIntoView:!0}),!0)}));function I(e,t){return t||(t={parserOptions:{ecmaVersion:2019,sourceType:"module"},env:{browser:!0,node:!0,es6:!0,es2015:!0,es2017:!0,es2020:!0},rules:{}},e.getRules().forEach(((e,n)=>{e.meta.docs.recommended&&(t.rules[n]=2)}))),n=>{let{state:r}=n,o=[];for(let{from:i,to:a}of $.findRegions(r)){let n=r.doc.lineAt(i),l={line:n.number-1,col:i-n.from,pos:i};for(let s of e.verify(r.sliceDoc(i,a),t))o.push(E(s,r.doc,l))}return o}}function j(e,t,n,r){return n.line(e+r.line).from+t+(1==e?r.col-1:-1)}function E(e,t,n){let r=j(e.line,e.column,t,n),o={from:r,to:null!=e.endLine&&1!=e.endColumn?j(e.endLine,e.endColumn,t,n):r,message:e.message,source:e.ruleId?"eslint:"+e.ruleId:"eslint",severity:1==e.severity?"warning":"error"};if(e.fix){let{range:t,text:i}=e.fix,a=t[0]+n.pos-r,l=t[1]+n.pos-r;o.actions=[{name:"fix",apply(e,t){e.dispatch({changes:{from:t+a,to:t+l,insert:i},scrollIntoView:!0})}}]}return o}}}]);