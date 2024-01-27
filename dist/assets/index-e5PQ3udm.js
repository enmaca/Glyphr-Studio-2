var Gx=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Gp=Gx(N=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();function s({tag:r="span",className:e,id:t,content:n,title:a,elementRoot:i,tabIndex:o=!1,attributes:x={},style:A=!1,innerHTML:E=!1,onClick:l=!1,doc:c=document}={}){if(!c||!c.createElement)return console.warn("no document or createElement"),console.warn(c),"";const L=c.createElement(r);if(e&&L.setAttribute("class",e),t?L.setAttribute("id",t):window.getUniqueControlID&&L.setAttribute("id",document.getUniqueControlID()),n&&(L.innerHTML=n),a&&L.setAttribute("title",a),i&&(L.elementRoot=i),o===!0?L.setAttribute("tabIndex","0"):o!==!1&&L.setAttribute("tabIndex",o),Object.keys(x).forEach(T=>L.setAttribute(T,x[T])),A&&L.setAttribute("style",A),E){const T=document.createElement("template");T.innerHTML=E,L.appendChild(T.content)}return l&&L.addEventListener("click",l),L}function R(r,e=[]){Array.isArray(e)?e.forEach(t=>{Array.isArray(t)?R(r,t):r.appendChild(t)}):r.appendChild(e)}function O(r){return s({innerHTML:r}).firstElementChild}function Ot(r,e){r.parentNode.insertBefore(e,r.nextSibling)}const Px="*{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:var(--global-transition)}:host{margin-right:8px;display:inline-block;width:max-content;min-width:40px;--fancy-gradient: linear-gradient( 135deg, var(--blue-l55), var(--purple-l45), var(--orange-l50), var(--purple-l45), var(--blue-l55), var(--purple-l45) );--fancy-animation: gradFade 120s linear infinite;--fancy-background-size: 500% 500%}@keyframes gradFade{0%{background-position:0% 0%}to{background-position:100% 100%}}:host(:active) .wrapper{top:1px;left:1px;box-shadow:none}:host([disabled]:active) .wrapper{top:0;left:0}.wrapper{display:inline-block;position:relative;top:0;left:0;margin:0;padding:2px;height:100%;width:100%;border-style:solid;border-width:0px;border-radius:5px;animation:var(--fancy-animation);box-shadow:var(--l2-shadow);background:var(--fancy-gradient);background-size:var(--fancy-background-size)}.wrapper:hover,.wrapper *:hover,.wrapper:focus,.wrapper *:focus{cursor:pointer}.wrapper:focus{outline:var(--global-focus-style)}.buttonContent{display:flex;align-items:center;padding:0;border-radius:3px;background-color:transparent;width:100%;height:100%}.buttonText{display:inline-block;width:max-content;height:max-content;margin:5px 10px;color:#fff;animation:var(--fancy-animation);background-color:transparent}.wrapper[secondary] .buttonContent{background-color:#fffffff2}.wrapper[secondary] .buttonText{background:var(--fancy-gradient);background-size:var(--fancy-background-size);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.wrapper:hover .buttonContent,.wrapper:active .buttonContent{background-color:#ffffff1a}.wrapper[secondary]:hover .buttonContent,.wrapper[secondary]:active .buttonContent{background-color:#fff}.wrapper[minimal]{padding:1px;box-shadow:var(--l1-shadow);background:linear-gradient(135deg,var(--blue-l70),var(--blue-l90));animation:var(--fancy-animation)}.wrapper[minimal] .buttonContent{background-color:#fffffff2}.wrapper[minimal] .buttonText{background:linear-gradient(135deg,var(--blue-l70),var(--blue-l90));background-size:var(--fancy-background-size);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.wrapper[minimal]:hover,.wrapper[minimal]:active{box-shadow:var(--l2-shadow);background:linear-gradient(135deg,var(--blue-l40),var(--blue-l70))}.wrapper[minimal]:hover .buttonContent,.wrapper[minimal]:active .buttonContent{background-color:#fff}.wrapper[minimal]:hover .buttonText,.wrapper[minimal]:active .buttonText{background:linear-gradient(135deg,var(--blue-l40),var(--blue-l70));background-size:var(--fancy-background-size);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.wrapper[danger]{background:linear-gradient(135deg,var(--orange-l50),var(--red));animation:var(--fancy-animation)}.wrapper[danger] .buttonText{background:#fff;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.wrapper[secondary][danger] .buttonText{background:var(--red);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.wrapper[disabled],.wrapper[disabled]:hover,.wrapper[disabled]:focus,.wrapper[disabled]:active{background-image:none;background-color:var(--disabled-border);cursor:default;box-shadow:none}.wrapper[disabled] .buttonContent,.wrapper[disabled]:hover .buttonContent,.wrapper[disabled]:focus .buttonContent,.wrapper[disabled]:active .buttonContent{background-color:var(--disabled-background);cursor:default}.wrapper[disabled] .buttonText,.wrapper[disabled]:hover .buttonText,.wrapper[disabled]:focus .buttonText,.wrapper[disabled]:active .buttonText{background-color:var(--disabled-background);background-clip:none;-webkit-text-fill-color:var(--disabled-border);color:var(--disabled-border);cursor:default}";class bx extends HTMLElement{constructor(e={}){super(),Object.keys(e).forEach(a=>this.setAttribute(a,e[a])),this.wrapper=s({className:"wrapper"}),this.buttonContent=s({className:"buttonContent"}),this.buttonText=s({tag:"slot",className:"buttonText"}),this.hasAttribute("secondary")&&this.wrapper.setAttribute("secondary",""),this.hasAttribute("danger")&&this.wrapper.setAttribute("danger",""),this.hasAttribute("minimal")&&this.wrapper.setAttribute("minimal",""),this.hasAttribute("disabled")?(this.wrapper.setAttribute("disabled",""),this.disabled=!0):(this.wrapper.setAttribute("tabIndex","0"),this.disabled=!1);let t=this.attachShadow({mode:"open"}),n=s({tag:"style",innerHTML:Px});t.appendChild(n),this.buttonContent.appendChild(this.buttonText),this.wrapper.appendChild(this.buttonContent),t.appendChild(this.wrapper),this.disabled||(this.addEventListener("click",this.toggle),this.addEventListener("keydown",this.keyPress))}static get observedAttributes(){return["disabled","secondary","danger","minimal"]}attributeChangedCallback(e,t,n){e==="disabled"&&(n===""?this.wrapper.setAttribute("disabled",""):t===""&&this.wrapper.removeAttribute("disabled")),e==="secondary"&&(n===""?this.wrapper.setAttribute("secondary",""):t===""&&this.wrapper.removeAttribute("secondary")),e==="danger"&&(n===""?this.wrapper.setAttribute("danger",""):t===""&&this.wrapper.removeAttribute("danger")),e==="minimal"&&(n===""?this.wrapper.setAttribute("minimal",""):t===""&&this.wrapper.removeAttribute("minimal"))}keyPress(e){if(e.keyCode===13){let t=new MouseEvent("click",{shiftKey:e.shiftKey,ctrlKey:e.ctrlKey,altKey:e.altKey,metaKey:e.metaKey});this.dispatchEvent(t),this.flashAsPressed(this)}}flashAsPressed(e){e.wrapper.style.top="1px",e.wrapper.style.left="1px",e.wrapper.style.boxShadow="none",setTimeout(function(){e.wrapper.style.top="0px",e.wrapper.style.left="0px",e.wrapper.style.boxShadow="2px 2px 2px rgba(0, 0, 0, 0.3)"},100)}}function Rr(r={}){const e=Object.keys(r);return e.length?e[0]:!1}function vo(r,e){let t=1;e=e||"id";let n=""+e+t;for(;r[n];)t+=1,n=""+e+t;return n}function Oe(r){return Object.keys(r).length}function ze(r){try{return structuredClone(r)}catch{const t=Array.isArray(r)?[]:{};for(const n of Object.keys(r))r[n]&&typeof r[n]=="object"&&n!=="parent"&&n!=="cache"?t[n]=ze(r[n]):t[n]=r[n];return t}}function qt(r,e){if(r=ze(r),e)return JSON.stringify(r);{let t=JSON.stringify(r,void 0,2);return t=t||"",t=t.replace(/\n/g,`\r
`),t=t.replaceAll(`\r
                  "`,'"'),t=t.replaceAll(`\r
                }`,"}"),t=t.replaceAll(`\r
                "`,'"'),t=t.replaceAll(`\r
              }`,"}"),t=t.replaceAll('},"','}, "'),t}}function Yo(r,e){if(typeof r!="object"&&typeof e!="object")return r===e;for(const t of Object.keys(r))if(e[t]){if(typeof r[t]=="object"&&typeof e[t]=="object"){if(!Yo(r[t],e[t]))return!1}else if(r[t]!==e[t])return!1}else return!1;return!0}function se(r,e,t=1){return!!(r.x===e.x&&r.y===e.y||x0(r.x,e.x,t)&&x0(r.y,e.y,t))}function x0(r,e,t=1){return r===e||Math.abs(r-e)<=t}function ue(r,e){const t=e?1:-1;return g(r)+.5*t}function g(r,e=0){return r&&+(Math.round(`${r}e${e}`)+`e-${e}`)||0}function Ve(r){r=parseFloat(r);const e=""+r;return(e.indexOf("0000")>-1||e.indexOf("9999")>-1)&&(r=g(r,3)),r<1e-5&&r>0&&(r=0),r}function wo(r){return r=parseFloat(r),!(isNaN(r)||r!==Math.round(r))}function v0(r=""){return r=String(r),r.replace(/[<>'"\\]/g,"")}function Y0(r=""){if(r=String(r),r==='""'||r==="''")return"";try{return r=r.replace(/^\s+|\s+$/g,""),r.replace(/(\r\n|\n|\r|\t)/gm,"")}catch{return""}}function ir(r="",e=""){return r=String(r),r=r.split(e),r=r.join(""),r||""}function Wo(r=""){let e="";for(let t=0;t<r.length;t++){let n=r.charCodeAt(t);n<=90&&n>=65&&(e+="-"),e+=r.charAt(t).toLowerCase()}return e}function Ux(r=""){let e="";for(let t=0;t<r.length;t++)r.charAt(t)==="-"?(t++,e+=r.charAt(t).toUpperCase()):e+=r.charAt(t);return e}function ko(r=""){if(typeof r=="string"){if(r==='""'||r==="''")return"";r.indexOf("&")>-1&&(r=r.replace(/&/g,"&amp;")),r.indexOf('"')>-1&&(r=r.replace(/"/g,"&quot;")),r.indexOf("'")>-1&&(r=r.replace(/'/g,"&apos;")),r.indexOf("<")>-1&&(r=r.replace(/</g,"&lt;")),r.indexOf(">")>-1&&(r=r.replace(/>/g,"&gt;"))}return r}function q(r){return r===0||r===!1?!0:r==null||typeof r=="object"&&Object.keys(r).length===0?!1:!!r}function Ia(r){if(!r)return!0;for(const e of Object.keys(r))if(!q(r[e])||r[e]===Number.MAX_SAFE_INTEGER||r[e]===Number.MIN_SAFE_INTEGER)return!0;return!1}function xr(r,e,t){return t.indexOf(r)===e}function Mt(r=10){return new Promise(e=>{setTimeout(()=>{e("fast")},r)})}const Ln=["top-left","middle-left","baseline-left","bottom-left","top-center","middle-center","baseline-center","bottom-center","top-right","middle-right","baseline-right","bottom-right"];function w0(r=0,e=0,t,n){Ln.indexOf(n)<0&&(n="baseline-left");let a={deltaX:0,deltaY:0};if(e!==0&&(n.includes("top")&&(a.deltaY=e*-1),n.includes("middle")&&(a.deltaY=e/-2),n.includes("baseline"))){let i=(e+t.height)/t.height,o=t.yMax*i,x=(t.yMax-o)*-1;a.deltaY=x-e}return r!==0&&(n.includes("right")&&(a.deltaX=r*-1),n.includes("center")&&(a.deltaX=r/-2)),a}function _r(r,e={x:0,y:0}){let t=Math.atan2(r.y-e.y,r.x-e.x);return isNaN(t)&&(console.warn(`calculateAngle returned NaN
`+qt(r)+`
${t}`),this.wrapper=s({className:"wrapper"}),this.wrapper.style.backgroundSize=`auto ${i}px`,this.hasAttribute("selected")&&this.wrapper.setAttribute("selected",""),this.showingOtherProject&&this.removeAttribute("selected"),this.glyph&&this.glyph.advanceWidth?(this.thumbnail=s({tag:"span",className:"thumbnail"}),this.thumbnail.width=i,this.thumbnail.height=i):(this.thumbnail=s({className:"thumbnail"}),Jx(ir(t,"glyph-"))?this.thumbnail.innerHTML=`
					<div class="whitespace-char-thumbnail">white space</div>
				`:n?this.thumbnail.innerHTML=n:this.thumbnail.innerHTML=`
						<div class="whitespace-char-thumbnail">${t}</div>
					`),this.name=s({className:"name"}),n?this.name.innerHTML=t==="glyph-0x20"?"Space":n:this.name.innerHTML=a.replaceAll("Component ","comp-");const o=this.attachShadow({mode:"open"}),x=s({tag:"style",innerHTML:zx});o.appendChild(x),this.wrapper.appendChild(this.thumbnail),this.wrapper.appendChild(this.name),o.appendChild(this.wrapper),this.redraw()}attributeChangedCallback(){const e=this.shadowRoot?this.shadowRoot.querySelector(".wrapper"):!1;e&&!this.showingOtherProject&&(this.hasAttribute("selected")?e.setAttribute("selected",""):e.removeAttribute("selected"))}redraw(){var e,t;(t=(e=this.glyph)==null?void 0:e.shapes)!=null&&t.length&&(this.thumbnail.innerHTML=this.project.makeItemThumbnail(this.glyph))}}const oe={gray:{l97:"hsl(200, 81%, 97%)",l95:"hsl(200, 81%, 94%)",l90:"hsl(200, 60%, 88%)",l85:"hsl(200, 52%, 82%)",l80:"hsl(200, 47%, 76%)",l75:"hsl(200, 42%, 71%)",l70:"hsl(200, 33%, 65%)",l65:"hsl(200, 27%, 60%)",l60:"hsl(200, 22%, 55%)",l55:"hsl(200, 18%, 50%)",l50:"hsl(200, 17%, 45%)",l45:"hsl(200, 17%, 40%)",l40:"hsl(200, 18%, 36%)",l35:"hsl(200, 18%, 31%)",l30:"hsl(200, 17%, 27%)",l25:"hsl(200, 18%, 23%)",l20:"hsl(200, 18%, 19%)",l15:"hsl(200, 17%, 15%)",l10:"hsl(200, 19%, 11%)",l05:"hsl(200, 18%, 7%)"},blue:{l95:"hsl(200, 100%, 94%)",l90:"hsl(200, 94%, 87%)",l85:"hsl(200, 100%, 80%)",l80:"hsl(200, 100%, 73%)",l75:"hsl(200, 100%, 64%)",l70:"hsl(200, 100%, 58%)",l65:"hsl(200, 100%, 49%)",l60:"hsl(200, 100%, 45%)",l55:"hsl(200, 100%, 41%)",l50:"hsl(200, 100%, 37%)",l45:"hsl(200, 100%, 33%)",l40:"hsl(200, 100%, 30%)",l35:"hsl(200, 100%, 25%)",l30:"hsl(200, 100%, 22%)",l25:"hsl(200, 100%, 19%)",l20:"hsl(200, 100%, 15%)",l15:"hsl(200, 100%, 12%)",l10:"hsl(200, 100%, 9%)",l05:"hsl(200, 100%, 6%)"},orange:{l95:"hsl(20, 100%, 95%)",l90:"hsl(20, 100%, 89%)",l85:"hsl(20, 100%, 84%)",l80:"hsl(20, 100%, 78%)",l75:"hsl(20, 100%, 72%)",l70:"hsl(20, 100%, 66%)",l65:"hsl(20, 100%, 56%)",l60:"hsl(20, 100%, 50%)",l55:"hsl(20, 100%, 46%)",l50:"hsl(20, 100%, 42%)",l45:"hsl(20, 100%, 37%)",l40:"hsl(20, 100%, 33%)",l35:"hsl(20, 100%, 29%)",l30:"hsl(20, 100%, 25%)",l25:"hsl(20, 100%, 22%)",l20:"hsl(20, 100%, 17%)",l15:"hsl(20, 100%, 14%)",l10:"hsl(20, 100%, 10%)",l05:"hsl(20, 100%, 6%)"},green:{l95:"hsl(125, 100%, 82%)",l90:"hsl(125, 97%, 74%)",l85:"hsl(125, 83%, 66%)",l80:"hsl(125, 74%, 58%)",l75:"hsl(125, 67%, 50%)",l70:"hsl(125, 82%, 43%)",l65:"hsl(125, 100%, 36%)",l60:"hsl(125, 100%, 33%)",l55:"hsl(125, 100%, 30%)",l50:"hsl(125, 100%, 27%)",l45:"hsl(125, 100%, 24%)",l40:"hsl(125, 95%, 22%)",l35:"hsl(125, 100%, 19%)",l30:"hsl(125, 100%, 16%)",l25:"hsl(125, 100%, 14%)",l20:"hsl(125, 100%, 11%)",l15:"hsl(125, 100%, 9%)",l10:"hsl(125, 100%, 6%)",l05:"hsl(125, 100%, 4%)"},purple:{l95:"hsl(285, 100%, 96%)",l90:"hsl(285, 100%, 92%)",l85:"hsl(285, 100%, 89%)",l80:"hsl(285, 100%, 85%)",l75:"hsl(285, 100%, 81%)",l70:"hsl(285, 100%, 77%)",l65:"hsl(285, 100%, 72%)",l60:"hsl(285, 100%, 66%)",l55:"hsl(285, 100%, 61%)",l50:"hsl(285, 100%, 50%)",l45:"hsl(285, 100%, 45%)",l40:"hsl(285, 100%, 40%)",l35:"hsl(285, 100%, 36%)",l30:"hsl(285, 100%, 31%)",l25:"hsl(285, 100%, 27%)",l20:"hsl(285, 100%, 22%)",l15:"hsl(285, 100%, 17%)",l10:"hsl(285, 100%, 13%)",l05:"hsl(285, 100%, 10%)"}},Ri=oe.blue.l65,br={accent:Ri,offWhite:"hsl(200, 81%, 97%)",darkRed:"hsl(0, 100%, 23%)",red:"hsl(0, 100%, 48%)",lightRed:"hsl(0, 100%, 90%)",enabled:{resting:{text:"hsl(0, 0%, 5%)",lightText:"hsl(0, 0%, 10%)",border:"hsl(0, 0%, 75%)",fill:"hsl(0, 0%, 39%)",background:"hsl(0, 0%, 98%)"},restingLight:{text:"hsl(0, 0%, 20%)",lightText:"hsl(0, 0%, 30%)",border:"hsla(0, 0%, 75%, 0.2)",fill:"hsl(0, 0%, 39%, 0.4)",background:"hsl(0, 0%, 98%)"},focus:{text:"hsl(0, 0%, 0%)",lightText:"hsl(0, 0%, 10%)",border:"hsl(0, 0%, 63%)",fill:"hsl(200, 25%, 15%)",background:"white"},active:{text:"hsl(0, 0%, 0%)",lightText:"hsl(0, 0%, 10%)",border:"hsl(0, 0%, 63%)",fill:Ri,background:"white"}},disabled:{text:"hsl(0, 0%, 40%)",border:"hsl(0, 0%, 82%)",fill:"hsl(0, 0%, 82%)",background:"hsl(0, 0%, 94%)"}};function cn(r){const e={r:0,g:0,b:0,a:1};return typeof r!="string"||(r.charAt(0)==="#"?(r=r.substring(1,7),e.r=parseInt(r.substring(0,2),16),e.g=parseInt(r.substring(2,4),16),e.b=parseInt(r.substring(4,6),16)):r.substring(0,4)==="rgb("&&(r=r.split("(")[1].split(")")[0].split(","),e.r=parseInt(r[0],10),e.g=parseInt(r[1],10),e.b=parseInt(r[2],10),e.a=parseInt(r[3],10)||1)),e}function l0(r){let e=cn(r),t=e.r.toString(16).toUpperCase();t.length===1&&(t=`0${t}`);let n=e.g.toString(16).toUpperCase();n.length===1&&(n=`0${n}`);let a=e.b.toString(16).toUpperCase();return a.length===1&&(a=`0${a}`),`#${t}${n}${a}`}function Xx(r,e,t){e=Math.max(0,Math.min(e,1));const n=cn(r);return n.r=Math.max(0,Math.min(n.r,255)),n.g=Math.max(0,Math.min(n.g,255)),n.b=Math.max(0,Math.min(n.b,255)),t?(n.r=g((255-n.r)*e+n.r),n.g=g((255-n.g)*e+n.g),n.b=g((255-n.b)*e+n.b)):(n.r=g(n.r-n.r*e),n.g=g(n.g-n.g*e),n.b=g(n.b-n.b*e)),`rgb(${n.r},${n.g},${n.b})`}function lr(r,e){const t=cn(r),n=g((255-t.r)*(1-e)),a=g((255-t.g)*(1-e)),i=g((255-t.b)*(1-e)),o=t.r+n,x=t.g+a,A=t.b+i;return`rgb(${o},${x},${A})`}function et(r){const e=parseInt(r);return!e||isNaN(e)?1:e>100?0:e<0?1:(100-r)/100}function eA(){const r=Math.floor(Math.random()*5)*51,e=[],t=Math.floor(Math.random()*3);switch(e[t]=r,t){case 0:e[1]=0,e[2]=255;break;case 1:e[0]=0,e[2]=255;break;case 2:e[0]=255,e[1]=0;break}return"rgb("+e[0]+","+e[1]+","+e[2]+")"}const jx=Object.freeze(Object.defineProperty({__proto__:null,accentColors:oe,getColorFromRGBA:lr,makeRandomSaturatedColor:eA,parseColorString:cn,rgbToHex:l0,shiftColor:Xx,transparencyToAlpha:et,uiColors:br},Symbol.toStringTag,{value:"Module"}));let _={};function rt(r){let e=20;r.name&&r.name.indexOf("page_")===0&&(e=24),r.name&&r.name.indexOf("panel_")===0&&(e=24);let t=r.color||"rgb(76,81,86)",n="";return _[r.name]&&(_[r.name].outline?n=_[r.name].outline:n=_[r.name]),`
		<svg version="1.1"
			xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px" y="0px" width="${e}px" height="${e}px" viewBox="0 0 ${e} ${e}"
		>
			<defs></defs>
			<rect fill="transparent" width="${e}" height="${e}"/>
			<g pointer-events="none" fill="${t}">
				${n}
			</g>
		</svg>
	`}_.panel_layers=`
	<polygon points="12 9 0 4.574 12 0 24 4.5 12 9"/>
	<polygon points="12 14 0 9.5 4 8 12 11 20 8 24 9.5 12 14"/>
	<polygon points="12 19 0 14.5 4 13 12 16 20 13 24 14.5 12 19"/>
	<polygon points="12 24 0 19.5 4 18 12 21 20 18 24 19.5 12 24"/>
`;_.panel_guides=`
	<polygon points="2 17 5 20 5 17 2 17"/>
	<polygon points="24 22 0 22 0 23 24 23 24 22 24 22"/>
	<polygon points="24 7 0 7 0 8 24 8 24 7 24 7"/>
	<polygon points="24 3 0 3 0 3.5 24 3.5 24 3 24 3"/>
	<polygon points="24 1 0 1 0 2 24 2 24 1 24 1"/>
	<polygon points="24 15 0 15 0 17 24 17 24 15 24 15"/>
	<polygon points="7 0 5 0 5 24 7 24 7 0 7 0"/>
	<polygon points="22.5 0 22 0 22 24 22.5 24 22.5 0 22.5 0"/>
`;_.panel_contextCharacters=`
	<path d="m8.942,16.997h-2.672v-.55c-.412.432-.882.647-1.407.647-.53,0-.973-.213-1.329-.64s-.534-.966-.534-1.621c0-.668.193-1.221.578-1.661s.875-.66,1.469-.66c.412,0,.82.141,1.224.424v-.737c0-.375-.047-.641-.139-.796s-.259-.233-.5-.233c-.322,0-.544.181-.666.542l-1.829-.383c.539-1.006,1.455-1.508,2.747-1.508.752,0,1.344.179,1.775.535s.646.879.646,1.569v3.57h.639v1.502Zm-2.672-1.801v-1.052c-.172-.216-.367-.324-.585-.324-.2,0-.358.083-.476.252-.118.168-.177.392-.177.669,0,.272.055.482.167.63s.264.221.459.221c.24,0,.444-.132.612-.397Z"/>
	<path d="m9.547,16.997v-1.502h.666v-6.995h-.666v-1.502h2.699v3.651h.027c.299-.496.727-.745,1.285-.745.594,0,1.068.292,1.424.876s.534,1.432.534,2.545c0,1.214-.171,2.146-.513,2.795s-.828.973-1.458.973c-.499,0-.931-.218-1.299-.657v.559h-2.699Zm2.699-3.987v1.416c0,.394.042.686.126.878.084.191.232.288.445.288.249,0,.409-.147.479-.441s.105-.843.105-1.648c0-.726-.04-1.23-.119-1.509-.079-.28-.239-.42-.479-.42-.213,0-.359.109-.439.326s-.119.587-.119,1.11Z"/>
	<path d="m19.429,14.229l1.571.598c-.258,1.581-1.079,2.371-2.461,2.371-.834,0-1.49-.334-1.968-1.001s-.717-1.587-.717-2.76c0-1.057.207-1.909.622-2.559s.958-.973,1.628-.973c.644,0,1.077.29,1.299.869h.027v-.757h1.462v2.823h-1.462c-.032-.505-.11-.878-.235-1.12-.125-.241-.312-.362-.561-.362-.263,0-.44.159-.53.476s-.136.85-.136,1.6c0,.819.044,1.401.133,1.746s.296.517.622.517c.227,0,.392-.118.496-.354s.174-.608.211-1.113Z"/>
	<path d="m18,4v-1h4v-1h-5v2h-1V0h-8v4h-1v-2H2v1h4v1H0v16h6v1H2v1h5v-2h1v4h8v-4h1v2h5v-1h-4v-1h6V4h-6ZM9,1h6v3h-6V1Zm6,22h-6v-3h6v3Zm7-5H2V6h20v12Z"/>
`;_.panel_history=`
	<path d="m19.075,18.133l-.021.022c-.181.185-.478.189-.663.008l-5.229-5.102c-.185-.181.491-.874.676-.693l5.229,5.102c.185.181.189.478.008.663Z"/>
	<path d="m16.1,9.358l.022.021c.185.181.189.478.008.663l-2.291,2.348c-.181.185-.874-.491-.693-.676l2.291-2.348c.181-.185.478-.189.663-.008Z"/>
	<circle cx="13.165" cy="12.387" r="1.033"/>
	<path d="m19.551,5.842c.149.145.282.3.418.452l1.747-1.747c-.146-.159-.283-.322-.439-.475-2.259-2.204-5.187-3.302-8.112-3.302-3.021,0-6.039,1.171-8.315,3.504-2.196,2.251-3.287,5.166-3.295,8.08h2.475c.008-2.294.865-4.587,2.589-6.354,1.736-1.779,4.06-2.758,6.546-2.758,2.4,0,4.667.923,6.386,2.6Z"/>
	<path d="m1.608,11.33H.2l2.609,4.174,2.609-4.174h-1.166c-.954-.008-1.986-.008-2.644,0Z"/>
	<path d="m21.916,6.021l-.736.736c1.133,1.605,1.769,3.503,1.794,5.509.032,2.62-.958,5.096-2.788,6.971-1.862,1.908-4.355,2.959-7.022,2.959-2.574,0-5.007-.99-6.85-2.788-1.066-1.041-1.855-2.286-2.353-3.645l-.677,1.084c.541,1.201,1.309,2.324,2.309,3.3,2.108,2.057,4.841,3.082,7.571,3.082,2.819,0,5.636-1.093,7.761-3.27,3.747-3.841,4.05-9.742.991-13.938Z"/>
`;_.panel_attributes=`
	<polygon points="12 10 0 10 0 11 12 11 12 10 12 10"/>
	<polygon points="12 12 0 12 0 13 12 13 12 12 12 12"/>
	<polygon points="12 14 0 14 0 15 12 15 12 14 12 14"/>
	<polygon points="24 2 12 2 12 3 24 3 24 2 24 2"/>
	<polygon points="24 4 12 4 12 5 24 5 24 4 24 4"/>
	<polygon points="24 6 12 6 12 7 24 7 24 6 24 6"/>
	<path d="m14,10v5c0,.552.448,1,1,1h8c.552,0,1-.448,1-1v-5c0-.552-.448-1-1-1h-8c-.552,0-1,.448-1,1Zm1,4l2-3,2,3h-4Zm6,0l-2-3h4l-2,3Z"/>
	<polygon points="12 18 0 18 0 19 12 19 12 18 12 18"/>
	<polygon points="12 20 0 20 0 21 12 21 12 20 12 20"/>
	<polygon points="12 22 0 22 0 23 12 23 12 22 12 22"/>
	<path d="m14,18v5c0,.552.448,1,1,1h8c.552,0,1-.448,1-1v-5c0-.552-.448-1-1-1h-8c-.552,0-1,.448-1,1Zm1,4l2-3,2,3h-4Zm6,0l-2-3h4l-2,3Z"/>
	<path d="m9,1H1c-.552,0-1,.448-1,1v5c0,.552.448,1,1,1h8c.552,0,1-.448,1-1V2c0-.552-.448-1-1-1Zm-4.5,5.5l-2.5-2.5,1-1,1.5,1.5,2.5-2.5,1,1-3.5,3.5Z"/>
`;_.panel_view=`
	<circle cx="12" cy="13" r="4"/>
	<path d="m24,13h-2v-1c0-3.237-4.368-7-10-7S2,8.763,2,12v1H0v-1C0,7.29,5.72,3,12,3s12,4.29,12,9v1Z"/>
`;_.command_save=`
	<path d="M0,0V17.22l2.78,2.78H20V0H0ZM5,1H15V10H5V1Zm2,18v-3h1v3h-1Zm2,0v-3h5v3h-5ZM19,3h-1v1h1v15h-4v-4H6v4H3.5l-2.5-2.5V1h3V11h12V1h3V3Z"/>
`;_.command_export=`
	<polygon points="10 19.06 10 5.06 15.25 10.31 16 9.56 9.5 3.06 3 9.56 3.75 10.31 9 5.06 9 19.06 10 19.06"/>
	<rect width="19" height="1"/>
`;_.command_newTab=`
	<polygon points="10.35 10.35 18.94 1.77 18.94 9 20 9 20 0 11 0 11 1.06 18.23 1.06 9.65 9.65 10.35 10.35"/>
	<polygon points="15 10 14.98 19 1 19 1 5 10 5 11 4 0 4 0 20 15.98 20 16 9 15 10"/>
`;_.command_info=`
	<path d="M10,1c4.13,0,6.4,0,7.7,1.3,1.3,1.3,1.3,3.57,1.3,7.7s0,6.4-1.3,7.7c-1.3,1.3-3.57,1.3-7.7,1.3s-6.4,0-7.7-1.3c-1.3-1.3-1.3-3.57-1.3-7.7S1,3.6,2.3,2.3c1.3-1.3,3.57-1.3,7.7-1.3m0-1C5.62,0,3.18,0,1.59,1.59,0,3.18,0,5.62,0,10s0,6.82,1.59,8.41c1.59,1.59,4.03,1.59,8.41,1.59s6.82,0,8.41-1.59c1.59-1.59,1.59-4.03,1.59-8.41s0-6.82-1.59-8.41c-1.59-1.59-4.03-1.59-8.41-1.59h0Z"/>
	<path d="M9.28,14.06v-4.76h-1.13v-1.28h2.57v6.04h1.13v1.28h-3.7v-1.28h1.13Zm-.2-8.53c0-.23,.08-.43,.25-.6s.37-.26,.62-.26c.24,0,.44,.08,.61,.25s.26,.37,.26,.61-.09,.45-.26,.62c-.17,.17-.38,.25-.61,.25s-.45-.09-.62-.26-.25-.37-.25-.61Z"/>
`;_.command_help=`
	<path d="M10,1c4.13,0,6.4,0,7.7,1.3,1.3,1.3,1.3,3.57,1.3,7.7s0,6.4-1.3,7.7c-1.3,1.3-3.57,1.3-7.7,1.3s-6.4,0-7.7-1.3c-1.3-1.3-1.3-3.57-1.3-7.7S1,3.6,2.3,2.3c1.3-1.3,3.57-1.3,7.7-1.3m0-1C5.62,0,3.18,0,1.59,1.59,0,3.18,0,5.62,0,10s0,6.82,1.59,8.41c1.59,1.59,4.03,1.59,8.41,1.59s6.82,0,8.41-1.59c1.59-1.59,1.59-4.03,1.59-8.41s0-6.82-1.59-8.41c-1.59-1.59-4.03-1.59-8.41-1.59h0Z"/>
	<path d="M10.06,12.65h-.82l-.19-3.53c.25,.06,.5,.1,.75,.1,.7,0,1.2-.18,1.5-.53s.46-.77,.46-1.25c0-.56-.17-1-.5-1.31-.33-.31-.75-.47-1.27-.47-.62,0-1.08,.18-1.39,.53s-.45,.8-.45,1.33c0,.11,0,.24,0,.39h-1.49c0-.14,0-.27,0-.37,0-1.09,.32-1.9,.97-2.41s1.42-.77,2.31-.77c1.08,0,1.91,.29,2.5,.87,.59,.58,.89,1.34,.89,2.28s-.28,1.64-.84,2.18-1.22,.81-1.98,.81c-.06,0-.14,0-.25,0l-.2,2.16Zm-1.41,2.99v-1.96h1.96v1.96h-1.96Z"/>
`;_.command_autoFit=`
	<polygon points="6 9 3 9 4.75 7.25 4 6.5 1 9.5 4.25 12.25 5 11.5 3 10 6 10 6 9"/>
	<polygon points="14 9 17 9 15.25 7.25 16 6.5 19 9.5 15.75 12.25 15 11.5 17 10 14 10 14 9"/>
	<rect y="4" width="1" height="11"/>
	<rect x="19" y="4" width="1" height="11"/>
	<rect x="12" y="9" width="1" height="1"/>
	<rect x="7" y="9" width="1" height="1"/>
	<rect x="9" y="9" width="2" height="1"/>
`;_.command_verticalBar='<rect x="9" y="0" width="2" height="18"/>';_.command_horizontalBar='<rect y="9" x="1" height="2" width="19"/>';_.command_crossProjectActions=`
  <path d="m18.916,7.084c-.962-.962-2.426-1.07-4.92-1.082-.013-2.48-.121-3.959-1.08-4.918-1.084-1.084-2.8-1.084-5.916-1.084S2.168,0,1.084,1.084,0,3.884,0,7s0,4.832,1.084,5.916c.959.959,2.437,1.068,4.918,1.081.012,2.493.12,3.958,1.082,4.919,1.084,1.084,2.8,1.084,5.916,1.084s4.832,0,5.916-1.084,1.084-2.8,1.084-5.916,0-4.832-1.084-5.916Zm-17.916-.084c0-2.849,0-4.418.791-5.209s2.36-.791,5.209-.791,4.418,0,5.209.791c.691.691.777,1.996.788,4.209-2.356,0-3.91.002-4.997.472v-.472h-2v2h.472c-.47,1.087-.472,2.641-.472,4.997-2.211-.011-3.518-.097-4.209-.788-.791-.791-.791-2.36-.791-5.209Zm17.209,11.209c-.791.791-2.36.791-5.209.791s-4.418,0-5.209-.791-.791-2.36-.791-5.209,0-4.418.791-5.209,2.36-.791,5.209-.791,4.418,0,5.209.791.791,2.36.791,5.209,0,4.418-.791,5.209Z"/>
  <rect x="9" y="9" width="2" height="2"/>
  <rect x="12" y="9" width="2" height="2"/>
  <rect x="9" y="12" width="2" height="2"/>
  <rect x="9" y="15" width="2" height="2"/>
  <rect x="12" y="12" width="2" height="2"/>
  <rect x="15" y="9" width="2" height="2"/>
  <rect x="3" y="3" width="2" height="2"/>
  <rect x="6" y="3" width="2" height="2"/>
  <rect x="3" y="6" width="2" height="2"/>
  <rect x="3" y="9" width="2" height="2"/>
  <rect x="9" y="3" width="2" height="2"/>
`;_.page_about=`
	<path d="m12,1.2c4.955,0,7.684,0,9.242,1.558,1.558,1.558,1.558,4.287,1.558,9.242s0,7.684-1.558,9.242c-1.558,1.558-4.287,1.558-9.242,1.558s-7.684,0-9.242-1.558c-1.558-1.558-1.558-4.287-1.558-9.242s0-7.684,1.558-9.242c1.558-1.558,4.287-1.558,9.242-1.558m0-1.2C6.742,0,3.818,0,1.909,1.909,0,3.818,0,6.742,0,12s0,8.182,1.909,10.091c1.909,1.909,4.832,1.909,10.091,1.909s8.182,0,10.091-1.909c1.909-1.909,1.909-4.832,1.909-10.091s0-8.182-1.909-10.091c-1.909-1.909-4.832-1.909-10.091-1.909h0Z"/>
	<path d="m11,17v-6h-2v-2h4v8h2v2s-6,0-6,0v-2h2Zm-.95-11.258c0-.468.165-.877.495-1.223s.748-.52,1.255-.52c.477,0,.888.168,1.233.504s.517.749.517,1.238-.173.905-.517,1.244c-.345.342-.756.514-1.233.514-.487,0-.9-.174-1.24-.52s-.51-.758-.51-1.238Z"/>
`;_.page_help=`
	<path d="m12,1.2c4.955,0,7.684,0,9.242,1.558,1.558,1.558,1.558,4.287,1.558,9.242s0,7.684-1.558,9.242c-1.558,1.558-4.287,1.558-9.242,1.558s-7.684,0-9.242-1.558c-1.558-1.558-1.558-4.287-1.558-9.242s0-7.684,1.558-9.242c1.558-1.558,4.287-1.558,9.242-1.558m0-1.2C6.742,0,3.818,0,1.909,1.909,0,3.818,0,6.742,0,12s0,8.182,1.909,10.091c1.909,1.909,4.832,1.909,10.091,1.909s8.182,0,10.091-1.909c1.909-1.909,1.909-4.832,1.909-10.091s0-8.182-1.909-10.091c-1.909-1.909-4.832-1.909-10.091-1.909h0Z"/>
	<path d="m12.398,16h-2v-4.5c2,0,4.202-.5,4.202-3,0-1.5-.6-2.5-2.202-2.5-2,0-2.398,1.3-2.398,2v1h-2v-1c0-1,.398-4,4.398-4,2.602,0,4.602,1.5,4.602,4.5s-2.602,4.5-4.102,4.5l-.5,3Z"/>
	<rect x="10" y="17" width="3" height="3" rx=".75" ry=".75"/>
`;_.page_exportFont=`
	<polygon points="30.1,9.9 40.1,0 50,9.9 42.5,9.9 42.5,18.8 37.6,18.8 37.6,9.9"/>
	<path d="M15.2,12.7l-9.9,9.9V50h29.8V12.7H15.2z M26.7,29.1h-1.9l0.7-2.9H20L18.8,31h4.7l-0.4,1.8h-4.7l-1.3,5.4h1.7l-0.4,1.8H13l0.4-1.8h1.4l2.9-12h-1.5l0.4-1.8h11.3L26.7,29.1z"/>
`;_.page_exportSVG=`
	<polygon points="7 4 4 0 1 4 3 4 3 7 5 7 5 4 7 4"/>
	<path d="m17.026,6H7v18h15v-12.75l-4.974-5.25Zm-5.835,11.758c-.272.247-.613.371-1.022.371-.359,0-.684-.115-.976-.344v.303h-.949v-1.575h.949c0,.369.051.608.154.718.103.11.238.165.406.165.15,0,.267-.043.351-.128.084-.084.126-.202.126-.353,0-.12-.048-.247-.143-.38-.095-.131-.332-.334-.711-.604-.511-.361-.836-.657-.978-.889-.141-.232-.212-.46-.212-.684,0-.339.124-.617.371-.834.247-.217.561-.326.94-.326.188,0,.353.022.494.065.141.045.309.137.503.279v-.303h.949v1.463h-.949c0-.308-.047-.515-.141-.62s-.228-.158-.402-.158c-.127,0-.227.033-.302.098-.075.065-.113.153-.113.262,0,.135.044.253.131.354.088.101.26.236.519.405.582.383.962.702,1.142.959.18.256.269.53.269.823,0,.375-.136.687-.408.934Zm5.908-3.793h-.437l-1.455,4.201h-1.213l-1.402-4.201h-.455v-.725h2.318v.725h-.464l.727,2.313.719-2.313h-.536v-.725h2.198v.725Zm3.308,3.02c-.062.274-.163.51-.304.706s-.313.341-.514.436-.43.142-.685.142c-.526,0-.941-.217-1.244-.65-.303-.435-.455-1.054-.455-1.857,0-.812.123-1.441.369-1.889.246-.448.591-.672,1.036-.672.299,0,.554.146.766.441h.014v-.366h.783v1.675h-.783c-.007-.31-.054-.542-.142-.695-.088-.154-.205-.23-.35-.23-.176,0-.288.101-.337.303-.049.201-.073.633-.073,1.295,0,.524.012.914.036,1.168.024.255.065.427.125.519.059.091.147.137.263.137.278,0,.42-.272.427-.817h-.328v-.734h1.49c0,.453-.031.817-.092,1.092Z"/>
`;_.page_importAndExport=`
	<polygon points="17 20 20 24 23 20 21 20 21 17 19 17 19 20 17 20"/>
	<polygon points="7 4 4 0 1 4 3 4 3 7 5 7 5 4 7 4"/>
	<path d="m13.684,6h-6.684v12h10v-8.5l-3.316-3.5Zm1.316,9h-5v-1h5v1Zm0-2h-5v-1h5v1Zm0-2h-7v-1h7v1Z"/>
`;_.page_settings=`
	<path d="m23.404,15.538c.366-1.11.572-2.291.596-3.518l-3.267-1.344c-.041-.326-.101-.645-.176-.959l2.601-2.372c-.448-1.126-1.057-2.169-1.806-3.098l-3.375,1.073c-.227-.21-.465-.408-.714-.594l.47-3.506c-1.043-.567-2.18-.982-3.381-1.221l-1.897,2.993c-.152-.008-.301-.023-.455-.023s-.303.015-.455.023l-1.897-2.993c-1.201.238-2.338.653-3.381,1.221l.47,3.506c-.249.186-.487.384-.714.594l-3.375-1.073c-.749.929-1.358,1.972-1.806,3.098l2.601,2.372c-.075.314-.135.633-.176.959l-3.267,1.344c.024,1.227.23,2.408.596,3.518l3.516.145c.153.308.319.607.505.893l-1.634,3.121c.785.893,1.699,1.665,2.715,2.294l2.777-2.142c.323.141.656.264.998.366l.752,3.43c.58.086,1.17.145,1.774.145s1.194-.059,1.774-.145l.752-3.43c.342-.102.675-.225.998-.366l2.777,2.142c1.016-.628,1.93-1.401,2.715-2.294l-1.634-3.121c.186-.286.353-.585.505-.893l3.516-.145Zm-11.404,1.284c-2.761,0-5-2.239-5-5s2.239-5,5-5,5,2.239,5,5-2.239,5-5,5Z"/>
`;_.page_globalActions=`
	<path d="m22.198,17.785l-3.6-3.6c1.293-1.339,2.093-3.157,2.093-5.166,0-1.751-.609-3.358-1.621-4.629-.016.554-.129,1.161-.344,1.811-.555,1.67-1.718,3.448-3.277,5.006-2.205,2.205-4.81,3.581-6.833,3.625,1.272,1.016,2.882,1.627,4.636,1.627,1.923,0,3.669-.735,4.989-1.932l1.582,1.582c-3.828,3.509-9.79,3.421-13.497-.287-3.707-3.707-3.795-9.669-.287-13.497l1.705,1.705c-1.197,1.32-1.932,3.067-1.932,4.989,0,1.739.601,3.334,1.6,4.601,1.567.793,4.737-.5,7.343-3.106,1.453-1.453,2.532-3.095,3.04-4.622.377-1.137.382-2.067.055-2.715-1.266-.998-2.861-1.598-4.598-1.598-2.008,0-3.827.799-5.166,2.093L4.485.072c-.097-.097-.253-.097-.35,0s-.097.253,0,.35l.855.855c-4.085,4.406-3.998,11.309.287,15.593,1.774,1.774,4,2.818,6.31,3.157v1.583c-2.439.05-4.32.347-4.32.71v.96c0,.398,2.257.72,5.04.72s5.04-.322,5.04-.72v-.96c0-.362-1.881-.659-4.32-.71v-1.46c.068.001.136.01.205.01,2.747,0,5.487-1.009,7.638-3.003l.978.978c.048.048.112.073.175.073s.127-.024.175-.073c.097-.097.097-.253,0-.35Z"/>
`;_.page_livePreview=`
	<rect x="20" y="5" width="1" height="15"/>
	<rect x="17" y="3.98" width="3" height="1"/>
	<rect x="21" y="4" width="3" height="1"/>
	<rect x="17" y="19.98" width="3" height="1"/>
	<rect x="21" y="20" width="3" height="1"/>
	<path d="m0,16v-2s2,0,2,0v-6H0v-2h6v2h-2v6h3v-2h2v4S0,16,0,16Z"/>
	<path d="m14,18v2h-4v-2h1v-7h-1v-2h3v.879c.618-.654,1.308-.981,2.069-.981.92,0,1.644.365,2.173,1.096s.794,1.582.794,2.554c0,1.03-.273,1.882-.819,2.558-.546.675-1.274,1.013-2.184,1.013-.742,0-1.42-.29-2.033-.869v2.751s1,0,1,0Zm1.759-5.495c0-.608-.126-1.063-.377-1.365s-.583-.453-.995-.453c-.417,0-.756.154-1.017.463s-.392.77-.392,1.383c0,.551.129.994.388,1.329s.603.503,1.035.503c.398,0,.723-.151.977-.453s.381-.771.381-1.408Z"/>
`;_.page_kerning=`
	<path d="m16.697,18l-4.164-10.513h-1.534v-1.487h4.892v1.487h-1.432l3.156,7.976,3.072-7.976h-1.446v-1.487h4.758v1.487h-1.505l-4.078,10.513h-1.72Z"/>
	<path d="m11.616,16.5l-3.41-9h1.495v-1.5H3.379v1.5h1.445l-3.327,9H0v1.5h4.873v-1.5h-1.503l.946-2.714h4.456l.92,2.714h-1.538v1.5h4.846v-1.5h-1.384Zm-6.839-4.12l1.667-4.88h.26l1.602,4.88h-3.529Z"/>
	<rect x="11" y="2" width="13" height="1"/>
	<rect x="11" width="1" height="5"/>
	<rect y="21" width="13" height="1"/>
	<rect x="12" y="19" width="1" height="5"/>
`;_.page_ligatures=`
	<path id="b" data-name="ligatures" d="m21,21v-13s-8,0-8,0c-.002-.479,0-1.249,0-2.083s.2-2.917,2.2-2.917c.642,0,2.572,0,2.572,1.423,0,.899.943,1.524,1.826,1.402.891-.116,1.402-.825,1.402-1.825,0-2-2.376-4-5-4-1.75,0-2.704.202-3.87,1.194-.541.461-1.147,1.187-1.525,2.294-.723-1.025-1.865-1.545-3.438-1.545-3.166,0-4.206,2.057-4.206,5.196v.861l-2.96-.035v3.035h3v10H0v3h24v-3h-3ZM6,7.142c0-1.076,0-2.596,1.383-2.596.701,0,1.107.518,1.218,1.553l1.634-.251v2.152h-4.236v-.858Zm0,13.858v-10h4v10h-4Zm7,0v-10h5v10h-5Z"/>
`;_.page_components=`
	<path d="m9.831,15.308c-.899-.912-2.012-1.368-3.338-1.368-1.38,0-2.544.544-3.493,1.632v-5.572H0v1.986l1,.014v10H0v2h3.028l-.028-1.602c.279.405.736.773,1.373,1.104.637.332,1.34.497,2.109.497,1.373,0,2.499-.489,3.378-1.468.879-.978,1.318-2.184,1.318-3.617,0-1.493-.449-2.695-1.348-3.607Zm-.531,3.75c0,.979-.3,1.755-.9,2.329-.6.574-1.292.861-2.076.861-.008,0-.016-.002-.024-.002-.008,0-.016.002-.024.002-.784,0-1.477-.287-2.076-.861-.6-.574-.9-1.35-.9-2.329,0-.031.006-.057.007-.088,0-.03-.007-.057-.007-.087,0-.992.297-1.762.89-2.31.593-.548,1.288-.822,2.086-.822.008,0,.016.002.024.002.008,0,.016-.002.024-.002.797,0,1.493.274,2.086.822.593.548.89,1.318.89,2.31,0,.031-.006.057-.007.087,0,.031.007.057.007.088Z"/>
	<path d="m12.821,18.915c0,1.433.439,2.638,1.318,3.617.879.978,2.005,1.468,3.378,1.468.77,0,1.473-.166,2.109-.497.637-.332,1.094-.7,1.373-1.104l-.028,1.602h3.028s0-2,0-2h-1v-10l1-.014v-1.986s-3,0-3,0v5.572c-.949-1.088-2.113-1.632-3.493-1.632-1.327,0-2.439.456-3.338,1.368-.899.912-1.348,2.114-1.348,3.607Zm1.886.055c0-.03-.007-.057-.007-.087,0-.992.297-1.762.89-2.31.593-.548,1.289-.822,2.086-.822.008,0,.016.002.024.002.008,0,.016-.002.024-.002.797,0,1.493.274,2.086.822.593.548.89,1.318.89,2.31,0,.031-.006.057-.007.087,0,.031.007.057.007.088,0,.979-.3,1.755-.9,2.329-.6.574-1.292.861-2.076.861-.008,0-.016-.002-.024-.002-.008,0-.016.002-.024.002-.784,0-1.477-.287-2.076-.861-.6-.574-.9-1.35-.9-2.329,0-.031.006-.057.007-.088Z"/>
	<path d="m15,3.131c0-.992-.297-1.762-.89-2.31-.593-.548-1.288-.822-2.086-.822-.008,0-.016.002-.024.002-.008,0-.016-.002-.024-.002-.797,0-1.493.274-2.086.822-.593.548-.89,1.318-.89,2.31,0,.031.006.057.007.087,0,.031-.007.057-.007.088,0,.979.3,1.755.9,2.329.6.574,1.292.861,2.076.861.008,0,.016-.002.024-.002.008,0,.016.002.024.002.784,0,1.477-.287,2.076-.861.6-.574.9-1.35.9-2.329,0-.031-.006-.057-.007-.088,0-.03.007-.057.007-.087Z"/>
	<path d="m15.001,13.5c-.17,0-.335-.087-.429-.243l-2.571-4.285-2.571,4.285c-.142.236-.45.314-.686.172-.237-.142-.313-.449-.171-.686l3.429-5.715,3.429,5.715c.142.236.065.544-.171.686-.081.049-.169.071-.257.071Z"/>
`;_.page_characters=`
	<path d="m13.548,0h2.452v6l-2.452.004c-.785-2.073-2.148-3.002-4.088-3.002-1.602,0-2.814.466-3.634,1.557s-1.231,2.399-1.231,3.923c0,1.594.434,2.884,1.302,3.87s1.973,1.479,3.316,1.479c1.1,0,3.795-.823,4.796-3.825l2.992,1.001c-1.225,3.805-3.923,5.84-8.094,5.84-2.945,0-5.166-.793-6.662-2.38S0,10.874,0,8.447c0-1.728.389-3.24,1.166-4.536S2.99,1.64,4.306.984s2.759-.984,4.33-.984c1.956,0,3.593.511,4.913,1.532V0Z"/>
	<polygon points="21 21 21 20.5 22 20.5 22 20 23 20 23 17 23 16.5 22.5 16.5 22.5 16 22 16 22 15.5 21.5 15.5 21.5 15 21 15 21 14.5 20.5 14.5 20.5 14 20 14 20 13.5 19.5 13.5 19.5 13 19 13 19 12.5 18.5 12.5 18.5 12 18 12 18 11.5 17.5 11.5 17.5 11 17 11 17 12 17.5 12 17.5 13 18 13 18 14 18.5 14 18.5 15 19 15 19 16 19.5 16 20 16 20 16.5 20.5 16.5 20.5 17.5 20 17.5 20 18 19.5 18 19 18 19 17.5 18.5 17.5 18.5 16.5 19 16.5 19 16 18.5 16 18.5 15 18 15 18 14 17.5 14 17.5 13 17 13 17 19 17 19.5 17.5 19.5 17.5 20 18 20 18 20.5 18.5 20.5 18.5 21 19 21 19 21.5 19.5 21.5 20 21.5 20 21 21 21"/>
	<polygon points="24 22 24 21 23.5 21 23.5 20 23 20 23 20.5 22 20.5 22 21 21 21 21 21.5 20 21.5 20 22 20 22.5 20.5 22.5 20.5 23.5 21.5 23.5 21.5 23 22.5 23 22.5 22.5 23.5 22.5 23.5 22 24 22"/>
`;_.page_overview=`
	<path d="m7,9.646v1.362h-2.161v-.951c-.701.72-1.483,1.08-2.347,1.08-.671,0-1.254-.231-1.749-.693S0,9.39,0,8.671C0,7.946.263,7.344.789,6.866s1.16-.717,1.901-.717c.691,0,1.359.22,2.004.661v-.773c0-.397-.036-.704-.107-.918s-.238-.408-.499-.58-.603-.258-1.025-.258c-.726,0-1.252.306-1.577.918l-1.387-.387c.615-1.214,1.677-1.821,3.185-1.821.554,0,1.033.079,1.436.238s.705.363.903.612.331.52.4.81.103.752.103,1.386v3.609h.873Zm-2.306-1.539c-.625-.516-1.257-.773-1.898-.773-.401,0-.737.124-1.006.371s-.404.567-.404.959c0,.365.118.671.354.918s.558.371.964.371c.701,0,1.364-.312,1.989-.935v-.91Z"/>
	<path d="m8,11.007v-1.362h.925V1.362h-.925V0h2.343v4.312c.726-.881,1.618-1.321,2.675-1.321,1.016,0,1.868.369,2.557,1.108s1.033,1.712,1.033,2.921c0,1.16-.337,2.136-1.01,2.929s-1.536,1.188-2.587,1.188c-.589,0-1.128-.134-1.616-.403s-.838-.567-1.052-.894v1.168h-2.343Zm2.388-3.883c0,.811.235,1.454.705,1.93s1.012.713,1.627.713c.645,0,1.201-.252,1.669-.757s.701-1.182.701-2.03c0-.822-.232-1.46-.697-1.914s-1.01-.681-1.635-.681c-.615,0-1.163.235-1.646.705s-.724,1.148-.724,2.034Z"/>
	<path d="m24,3v3s-1.25,0-1.25,0c-.064-.564-.393-.999-.75-1.3s-.884-.294-1.356-.294c-.629,0-1.141.243-1.534.729s-.59,1.124-.59,1.914c0,.736.187,1.384.561,1.946s.915.842,1.623.842c.983,0,1.697-.51,2.139-1.531l1.158.596c-.639,1.552-1.758,2.328-3.356,2.328-1.131,0-2.021-.422-2.67-1.265s-.974-1.815-.974-2.917c0-1.176.354-2.147,1.062-2.913s1.524-1.148,2.449-1.148c.792,0,1.693.255,2.239.765v-.753h1.25Z"/>
	<path d="m4.047,17.842l-1.444,1.806h.941v1.406H0v-1.406h1.076l2.196-2.731-2.098-2.511H.189v-1.406h3.43v1.406h-.91l1.314,1.578,1.269-1.578h-.744v-1.406h3.452v1.406h-1.205l-2.002,2.503,2.281,2.739h.925v1.406h-3.452v-1.406h1.008l-1.51-1.806Z"/>
	<path d="m12.492,20.2l-2.503-5.798h-.989v-1.402h3.492v1.402h-.913l1.645,4.198,1.613-4.198h-1.007v-1.402h3.17v1.402h-.613l-3.883,9.598h-2.498v-1.5h1.593l.892-2.3Z"/>
	<path d="m18,21.054v-1.315l4.37-5.433h-3.12v.694h-1.25v-2h6v1.406l-4.387,5.333h3.191v-.74h1.196v2.054h-6Z"/>
`;function Qx(r="baseline-left"){let e=oe.gray.l25,t=oe.blue.l70,n=0;r.includes("center")&&(n=7),r.includes("right")&&(n=14);let a=0;return r.includes("middle")&&(a=8),r.includes("baseline")&&(a=11),r.includes("bottom")&&(a=15),`
	<svg version="1.1"
	xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20">
	<defs></defs>
	<rect fill="transparent" width="20" height="20"/>
	<g pointer-events="none" width="20" height="20">
			<path d="m2,2v16h15V2H2Zm14,15H3v-3h13v3Zm0-4H3V3h13v10Z"/>
			<rect x="${n}" y="${a}" width="5" height="5" style="fill: ${e};"/>
			<rect x="${n+1}" y="${a+1}" width="3" height="3" style="fill: ${t};"/>
		</g>
	</svg>
	`}_.back='<polygon points="37,23 20,23 25,18 22,15 12,25 22,35 25,32 20,27 37,27"/>';_.more='<polygon points="0,0 0,10 5,5"/>';_.selected='<polygon points="6,6 6,14 14,10"/>';_.notSelected='<rect x="5" y="9.75" width="10" height="0.5"/>';_.keyboard=`
	<rect x="12" y="29" width="26" height="7"/>
	<rect y="29" width="10" height="7"/>
	<rect y="21" width="8" height="6"/>
	<rect x="10" y="21" width="6" height="6"/>
	<rect x="18" y="21" width="6" height="6"/>
	<rect x="26" y="21" width="6" height="6"/>
	<rect x="34" y="21" width="6" height="6"/>
	<rect x="42" y="21" width="8" height="6"/>
	<rect x="6" y="13" width="6" height="6"/>
	<rect x="14" y="13" width="6" height="6"/>
	<rect x="22" y="13" width="6" height="6"/>
	<rect x="38" y="13" width="6" height="6"/>
	<rect x="30" y="13" width="6" height="6"/>
	<rect x="46" y="13" width="4" height="6"/>
	<rect y="13" width="4" height="6"/>
	<rect x="40" y="29" width="10" height="7"/>
`;function Xt(r,e,t={x:0,y:0,z:1},n=1,a="#000"){if(!r.shapes)return console.warn(`Glyph ${r.id} has no shapes to draw`),!1;let i;return e.beginPath(),r.shapes.forEach(o=>{if(i=Tn(o,e,t),!i&&o.objType==="ComponentInstance"&&!B().getItem(o.link)){console.warn(`>>> Component Instance has bad link: ${o.link} from ${r.id}`);const x=r.shapes.indexOf(o);x>-1&&(r.shapes.splice(x,1),console.warn(">>> Deleted the Instance"))}}),e.closePath(),e.fillStyle=a,e.globalAlpha=n,e.fill("nonzero"),e.globalAlpha=1,r.advanceWidth*t.dz}function Tn(r,e,t){return r.objType==="ComponentInstance"?qx(r,e,t):$x(r,e,t)}function qx(r,e,t){const n=r.transformedGlyph;if(!n)return!1;let a=!1,i=!1;return n.shapes.forEach(o=>{a=Tn(o,e,t),i=i||!a}),!i}function $x(r,e,t,n=!1){if(!(r!=null&&r.pathPoints)||r.pathPoints===!1||r.pathPoints.length<2)return!1;let a,i;const o=n?0:9,x=xe(g(r.pathPoints[0].p.x,o),t),A=ee(g(r.pathPoints[0].p.y,o),t);let E,l,c,L,T,I;e.moveTo(x,A);for(let d=0;d<r.pathPoints.length;d++)a=r.pathPoints[d],i=r.pathPoints[r.getNextPointNum(d)],!a.h2.use&&!i.h1.use?(T=xe(g(i.p.x,o),t),I=ee(g(i.p.y,o),t),e.lineTo(T,I)):(E=xe(g(a.h2.x,o),t),l=ee(g(a.h2.y,o),t),c=xe(g(i.h1.x,o),t),L=ee(g(i.h1.y,o),t),T=xe(g(i.p.x,o),t),I=ee(g(i.p.y,o),t),e.bezierCurveTo(E,l,c,L,T,I));return!0}function hn(r,e="",t=[],n=!1){let a=`current${r.objType}`;a==="currentControlPoint"&&(a=`currentPathPoint.${r.type}`);let i=[a].concat(t);e&&(e+=":&ensp;");let o=s({tag:"label",innerHTML:`${e}x${In()}y`}),x=s({tag:"div",className:"doubleInput"}),A=Fe(r,"x",i,"input-number"),E=Fe(r,"y",i,"input-number");return n&&(A.setAttribute("disabled",""),E.setAttribute("disabled","")),x.appendChild(A),x.appendChild(dn()),x.appendChild(E),[o,x]}function W0(r,e=!1){let t=[],n=`current${r.objType}`,a=K(`width${In()}height`),i=s({tag:"div",className:"doubleInput"}),o=Fe(r,"width",n,"input-number"),x=Fe(r,"height",n,"input-number");if(e&&(o.setAttribute("disabled",""),x.setAttribute("disabled","")),i.appendChild(o),i.appendChild(dn()),i.appendChild(x),t.push(a),t.push(i),!e){let A=["top-left","baseline-left","bottom-left","top-right","baseline-right","bottom-right","middle-center"];A=Ln;let E=K("transform origin",`With increases or decreases to width or height,
		the transform origin is the point that stays fixed.
		<br><br>
		This only takes effect when directly entering values
		into the width or height inputs.`),l=s({tag:"option-chooser",attributes:{"selected-id":r.transformOrigin,"selected-name":r.transformOrigin.replace("-"," ")}});A.forEach(T=>{let I=s({tag:"option",attributes:{"selection-id":T},innerHTML:`${Qx(T)}${T.replace("-"," ")}`});I.addEventListener("click",()=>{r.transformOrigin=T,h().publish("editCanvasView",r)}),l.appendChild(I)});let c=K("lock aspect ratio",`
			When either the width or height is adjusted,
			the overall size will be kept proportional.
			<br><br>
			Maintaining aspect ratio will override value
			locks if need be.
		`),L=lt(r,"ratioLock",n);t.push(E),t.push(l),t.push(c),t.push(L)}return t}function Fe(r,e,t,n,a=[]){let i=Array.isArray(t)?t:[t],o=s({tag:n,className:`singleInput-${e}`,attributes:{"pubsub-topic":i[0]}}),x=n==="input"?r[e]:g(r[e],3);o.setAttribute("value",x),r.isLockable&&(o.setAttribute("is-locked",r.isLocked(e)),o.addEventListener("lock",E=>{E.detail.isLocked?r.lock(e):r.unlock(e);const l=h();i.forEach(c=>l.publish(c,r))}));function A(E){if(r.isLockable&&r.isLocked(e))return;let l=E.target.value;const c=h();if(e==="leftSideBearing"){let L=c.view;c.view.dx-=(l-r.leftSideBearing)*L.dz,c.publish("editCanvasView",r)}if((r.objType==="Glyph"||r.objType==="VirtualGlyph"||r.objType==="Path")&&(e==="width"||e==="height")){let L={width:!1,height:!1};L.ratioLock=r.ratioLock,L.transformOrigin=r.transformOrigin,e==="width"?L.width=l:L.height=l,r.objType==="Path"?r.setShapeSize(L):r.setGlyphSize(L)}else r[e]=l;r.objType==="VirtualGlyph"?i.forEach(L=>c.publish(L,c.selectedItem)):r.objType==="VirtualShape"?i.forEach(L=>c.publish(L,c.selectedItem)):i.forEach(L=>c.publish(L,r))}return o.addEventListener("change",A),a&&a.forEach(E=>{o.addEventListener(E,A)}),h().subscribe({topic:i,subscriberID:`attributesPanel.${i[0]}.${e}`,callback:E=>{if(E&&(E[e]||E[e]===0)){let l;n==="input"?l=E[e]:l=g(E[e],3),o.value=l,o.setAttribute("value",l)}}}),o}function lt(r,e,t){let n=s({tag:"input",attributes:{type:"checkbox"}});return r[e]&&n.setAttribute("checked",""),n.addEventListener("change",a=>{let i=a.target.checked;r[e]=!!i,t&&(h().publish(t,r),e==="use"&&(va(r.type,!!i),r.parent.reconcileHandle(r.type)))}),t&&h().subscribe({topic:t,subscriberID:`attributesPanel.${t}.${e}`,callback:a=>{a[e]?(n.setAttribute("checked",""),e==="use"&&va(r.type,!0)):(n.removeAttribute("checked"),e==="use"&&va(r.type,!1))}}),n}function va(r,e){let t=document.getElementById(`${r}InputGroup`);t&&(t.style.display=e?"grid":"none")}function K(r,e=!1,t=!1,n=!1){let a=s({content:r}),i=s({tag:"label"});if(t&&i.setAttribute("for",t),i.appendChild(a),e){let o=s({tag:"info-bubble",content:e});i.appendChild(o),i.classList.add("info")}return n&&i.setAttribute("class",n),i}function Or(){return s({tag:"div",className:"rowPad"})}function In(){return'<span class="dimSplit">&#x2044;</span>'}function dn(){return s({className:"dimSplit",innerHTML:"&#x2044;"})}function Je(r,e,t,n=!1){let a=s({tag:"input",attributes:{type:"checkbox"}});return r[e]&&a.setAttribute("checked",""),n&&a.setAttribute("id",n),a.addEventListener("change",i=>{let o=i.target.checked;r[e]=!!o,t&&t(o)}),a}function rA(r){const e=h(),t=B(),n=e.project.getItem(r);let a=s({className:"item-link__row",attributes:{"target-item-id":r}});return a.addEventListener("click",()=>{n.displayType==="Glyph"&&(e.nav.page="Characters"),n.displayType==="Component"&&(e.nav.page="Components"),n.displayType==="Ligature"&&(e.nav.page="Ligatures"),e.selectedItemID=r,e.navigate()}),a.appendChild(s({className:"item-link__thumbnail",attributes:{"target-item-id":r},innerHTML:t.makeItemThumbnail(n)})),a.appendChild(s({className:"item-link__title",innerHTML:`${(n==null?void 0:n.name)||"ERROR"}`})),a.appendChild(s({className:"item-link__subtitle",innerHTML:`${(n==null?void 0:n.displayType)||"ERROR"}&ensp;|&ensp;${r}`})),a}/*! https://mths.be/codepointat v0.2.0 by @mathias */String.prototype.codePointAt||function(){var r=function(){try{var t={},n=Object.defineProperty,a=n(t,t,t)&&n}catch{}return a}(),e=function(t){if(this==null)throw TypeError();var n=String(this),a=n.length,i=t?Number(t):0;if(i!=i&&(i=0),!(i<0||i>=a)){var o=n.charCodeAt(i),x;return o>=55296&&o<=56319&&a>i+1&&(x=n.charCodeAt(i+1),x>=56320&&x<=57343)?(o-55296)*1024+x-56320+65536:o}};r?r(String.prototype,"codePointAt",{value:e,configurable:!0,writable:!0}):String.prototype.codePointAt=e}();var k0=0,tA=-3;function rn(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function eE(r,e){this.source=r,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=e,this.destLen=0,this.ltree=new rn,this.dtree=new rn}var nA=new rn,aA=new rn,K0=new Uint8Array(30),V0=new Uint16Array(30),iA=new Uint8Array(30),oA=new Uint16Array(30),rE=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),gi=new rn,Sr=new Uint8Array(320);function AA(r,e,t,n){var a,i;for(a=0;a<t;++a)r[a]=0;for(a=0;a<30-t;++a)r[a+t]=a/t|0;for(i=n,a=0;a<30;++a)e[a]=i,i+=1<<r[a]}function tE(r,e){var t;for(t=0;t<7;++t)r.table[t]=0;for(r.table[7]=24,r.table[8]=152,r.table[9]=112,t=0;t<24;++t)r.trans[t]=256+t;for(t=0;t<144;++t)r.trans[24+t]=t;for(t=0;t<8;++t)r.trans[168+t]=280+t;for(t=0;t<112;++t)r.trans[176+t]=144+t;for(t=0;t<5;++t)e.table[t]=0;for(e.table[5]=32,t=0;t<32;++t)e.trans[t]=t}var yi=new Uint16Array(16);function Ya(r,e,t,n){var a,i;for(a=0;a<16;++a)r.table[a]=0;for(a=0;a<n;++a)r.table[e[t+a]]++;for(r.table[0]=0,i=0,a=0;a<16;++a)yi[a]=i,i+=r.table[a];for(a=0;a<n;++a)e[t+a]&&(r.trans[yi[e[t+a]]++]=a)}function nE(r){r.bitcount--||(r.tag=r.source[r.sourceIndex++],r.bitcount=7);var e=r.tag&1;return r.tag>>>=1,e}function yr(r,e,t){if(!e)return t;for(;r.bitcount<24;)r.tag|=r.source[r.sourceIndex++]<<r.bitcount,r.bitcount+=8;var n=r.tag&65535>>>16-e;return r.tag>>>=e,r.bitcount-=e,n+t}function s0(r,e){for(;r.bitcount<24;)r.tag|=r.source[r.sourceIndex++]<<r.bitcount,r.bitcount+=8;var t=0,n=0,a=0,i=r.tag;do n=2*n+(i&1),i>>>=1,++a,t+=e.table[a],n-=e.table[a];while(n>=0);return r.tag=i,r.bitcount-=a,e.trans[t+n]}function aE(r,e,t){var n,a,i,o,x,A;for(n=yr(r,5,257),a=yr(r,5,1),i=yr(r,4,4),o=0;o<19;++o)Sr[o]=0;for(o=0;o<i;++o){var E=yr(r,3,0);Sr[rE[o]]=E}for(Ya(gi,Sr,0,19),x=0;x<n+a;){var l=s0(r,gi);switch(l){case 16:var c=Sr[x-1];for(A=yr(r,2,3);A;--A)Sr[x++]=c;break;case 17:for(A=yr(r,3,3);A;--A)Sr[x++]=0;break;case 18:for(A=yr(r,7,11);A;--A)Sr[x++]=0;break;default:Sr[x++]=l;break}}Ya(e,Sr,0,n),Ya(t,Sr,n,a)}function Ni(r,e,t){for(;;){var n=s0(r,e);if(n===256)return k0;if(n<256)r.dest[r.destLen++]=n;else{var a,i,o,x;for(n-=257,a=yr(r,K0[n],V0[n]),i=s0(r,t),o=r.destLen-yr(r,iA[i],oA[i]),x=o;x<o+a;++x)r.dest[r.destLen++]=r.dest[x]}}}function iE(r){for(var e,t,n;r.bitcount>8;)r.sourceIndex--,r.bitcount-=8;if(e=r.source[r.sourceIndex+1],e=256*e+r.source[r.sourceIndex],t=r.source[r.sourceIndex+3],t=256*t+r.source[r.sourceIndex+2],e!==(~t&65535))return tA;for(r.sourceIndex+=4,n=e;n;--n)r.dest[r.destLen++]=r.source[r.sourceIndex++];return r.bitcount=0,k0}function oE(r,e){var t=new eE(r,e),n,a,i;do{switch(n=nE(t),a=yr(t,2,0),a){case 0:i=iE(t);break;case 1:i=Ni(t,nA,aA);break;case 2:aE(t,t.ltree,t.dtree),i=Ni(t,t.ltree,t.dtree);break;default:i=tA}if(i!==k0)throw new Error("Data error")}while(!n);return t.destLen<t.dest.length?typeof t.dest.slice=="function"?t.dest.slice(0,t.destLen):t.dest.subarray(0,t.destLen):t.dest}tE(nA,aA);AA(K0,V0,4,3);AA(iA,oA,2,1);K0[28]=0;V0[28]=258;var AE=oE;function gt(r,e,t,n,a){return Math.pow(1-a,3)*r+3*Math.pow(1-a,2)*a*e+3*(1-a)*Math.pow(a,2)*t+Math.pow(a,3)*n}function Yr(){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN}Yr.prototype.isEmpty=function(){return isNaN(this.x1)||isNaN(this.y1)||isNaN(this.x2)||isNaN(this.y2)};Yr.prototype.addPoint=function(r,e){typeof r=="number"&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=r,this.x2=r),r<this.x1&&(this.x1=r),r>this.x2&&(this.x2=r)),typeof e=="number"&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=e,this.y2=e),e<this.y1&&(this.y1=e),e>this.y2&&(this.y2=e))};Yr.prototype.addX=function(r){this.addPoint(r,null)};Yr.prototype.addY=function(r){this.addPoint(null,r)};Yr.prototype.addBezier=function(r,e,t,n,a,i,o,x){var A=[r,e],E=[t,n],l=[a,i],c=[o,x];this.addPoint(r,e),this.addPoint(o,x);for(var L=0;L<=1;L++){var T=6*A[L]-12*E[L]+6*l[L],I=-3*A[L]+9*E[L]-9*l[L]+3*c[L],d=3*E[L]-3*A[L];if(I===0){if(T===0)continue;var p=-d/T;0<p&&p<1&&(L===0&&this.addX(gt(A[L],E[L],l[L],c[L],p)),L===1&&this.addY(gt(A[L],E[L],l[L],c[L],p)));continue}var S=Math.pow(T,2)-4*d*I;if(!(S<0)){var u=(-T+Math.sqrt(S))/(2*I);0<u&&u<1&&(L===0&&this.addX(gt(A[L],E[L],l[L],c[L],u)),L===1&&this.addY(gt(A[L],E[L],l[L],c[L],u)));var y=(-T-Math.sqrt(S))/(2*I);0<y&&y<1&&(L===0&&this.addX(gt(A[L],E[L],l[L],c[L],y)),L===1&&this.addY(gt(A[L],E[L],l[L],c[L],y)))}}};Yr.prototype.addQuad=function(r,e,t,n,a,i){var o=r+.6666666666666666*(t-r),x=e+2/3*(n-e),A=o+1/3*(a-r),E=x+1/3*(i-e);this.addBezier(r,e,o,x,A,E,a,i)};function Be(){this.commands=[],this.fill="black",this.stroke=null,this.strokeWidth=1}Be.prototype.moveTo=function(r,e){this.commands.push({type:"M",x:r,y:e})};Be.prototype.lineTo=function(r,e){this.commands.push({type:"L",x:r,y:e})};Be.prototype.curveTo=Be.prototype.bezierCurveTo=function(r,e,t,n,a,i){this.commands.push({type:"C",x1:r,y1:e,x2:t,y2:n,x:a,y:i})};Be.prototype.quadTo=Be.prototype.quadraticCurveTo=function(r,e,t,n){this.commands.push({type:"Q",x1:r,y1:e,x:t,y:n})};Be.prototype.close=Be.prototype.closePath=function(){this.commands.push({type:"Z"})};Be.prototype.extend=function(r){if(r.commands)r=r.commands;else if(r instanceof Yr){var e=r;this.moveTo(e.x1,e.y1),this.lineTo(e.x2,e.y1),this.lineTo(e.x2,e.y2),this.lineTo(e.x1,e.y2),this.close();return}Array.prototype.push.apply(this.commands,r)};Be.prototype.getBoundingBox=function(){for(var r=new Yr,e=0,t=0,n=0,a=0,i=0;i<this.commands.length;i++){var o=this.commands[i];switch(o.type){case"M":r.addPoint(o.x,o.y),e=n=o.x,t=a=o.y;break;case"L":r.addPoint(o.x,o.y),n=o.x,a=o.y;break;case"Q":r.addQuad(n,a,o.x1,o.y1,o.x,o.y),n=o.x,a=o.y;break;case"C":r.addBezier(n,a,o.x1,o.y1,o.x2,o.y2,o.x,o.y),n=o.x,a=o.y;break;case"Z":n=e,a=t;break;default:throw new Error("Unexpected path command "+o.type)}}return r.isEmpty()&&r.addPoint(0,0),r};Be.prototype.draw=function(r){r.beginPath();for(var e=0;e<this.commands.length;e+=1){var t=this.commands[e];t.type==="M"?r.moveTo(t.x,t.y):t.type==="L"?r.lineTo(t.x,t.y):t.type==="C"?r.bezierCurveTo(t.x1,t.y1,t.x2,t.y2,t.x,t.y):t.type==="Q"?r.quadraticCurveTo(t.x1,t.y1,t.x,t.y):t.type==="Z"&&r.closePath()}this.fill&&(r.fillStyle=this.fill,r.fill()),this.stroke&&(r.strokeStyle=this.stroke,r.lineWidth=this.strokeWidth,r.stroke())};Be.prototype.toPathData=function(r){r=r!==void 0?r:2;function e(o){return Math.round(o)===o?""+Math.round(o):o.toFixed(r)}function t(){for(var o=arguments,x="",A=0;A<arguments.length;A+=1){var E=o[A];E>=0&&A>0&&(x+=" "),x+=e(E)}return x}for(var n="",a=0;a<this.commands.length;a+=1){var i=this.commands[a];i.type==="M"?n+="M"+t(i.x,i.y):i.type==="L"?n+="L"+t(i.x,i.y):i.type==="C"?n+="C"+t(i.x1,i.y1,i.x2,i.y2,i.x,i.y):i.type==="Q"?n+="Q"+t(i.x1,i.y1,i.x,i.y):i.type==="Z"&&(n+="Z")}return n};Be.prototype.toSVG=function(r){var e='<path d="';return e+=this.toPathData(r),e+='"',this.fill&&this.fill!=="black"&&(this.fill===null?e+=' fill="none"':e+=' fill="'+this.fill+'"'),this.stroke&&(e+=' stroke="'+this.stroke+'" stroke-width="'+this.strokeWidth+'"'),e+="/>",e};Be.prototype.toDOMElement=function(r){var e=this.toPathData(r),t=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("d",e),t};function xA(r){throw new Error(r)}function Di(r,e){r||xA(e)}var V={fail:xA,argument:Di,assert:Di},mi=32768,Oi=2147483648,Gt={},f={},W={};function hr(r){return function(){return r}}f.BYTE=function(r){return V.argument(r>=0&&r<=255,"Byte value should be between 0 and 255."),[r]};W.BYTE=hr(1);f.CHAR=function(r){return[r.charCodeAt(0)]};W.CHAR=hr(1);f.CHARARRAY=function(r){for(var e=[],t=0;t<r.length;t+=1)e[t]=r.charCodeAt(t);return e};W.CHARARRAY=function(r){return r.length};f.USHORT=function(r){return[r>>8&255,r&255]};W.USHORT=hr(2);f.SHORT=function(r){return r>=mi&&(r=-(2*mi-r)),[r>>8&255,r&255]};W.SHORT=hr(2);f.UINT24=function(r){return[r>>16&255,r>>8&255,r&255]};W.UINT24=hr(3);f.ULONG=function(r){return[r>>24&255,r>>16&255,r>>8&255,r&255]};W.ULONG=hr(4);f.LONG=function(r){return r>=Oi&&(r=-(2*Oi-r)),[r>>24&255,r>>16&255,r>>8&255,r&255]};W.LONG=hr(4);f.FIXED=f.ULONG;W.FIXED=W.ULONG;f.FWORD=f.SHORT;W.FWORD=W.SHORT;f.UFWORD=f.USHORT;W.UFWORD=W.USHORT;f.LONGDATETIME=function(r){return[0,0,0,0,r>>24&255,r>>16&255,r>>8&255,r&255]};W.LONGDATETIME=hr(8);f.TAG=function(r){return V.argument(r.length===4,"Tag should be exactly 4 ASCII characters."),[r.charCodeAt(0),r.charCodeAt(1),r.charCodeAt(2),r.charCodeAt(3)]};W.TAG=hr(4);f.Card8=f.BYTE;W.Card8=W.BYTE;f.Card16=f.USHORT;W.Card16=W.USHORT;f.OffSize=f.BYTE;W.OffSize=W.BYTE;f.SID=f.USHORT;W.SID=W.USHORT;f.NUMBER=function(r){return r>=-107&&r<=107?[r+139]:r>=108&&r<=1131?(r=r-108,[(r>>8)+247,r&255]):r>=-1131&&r<=-108?(r=-r-108,[(r>>8)+251,r&255]):r>=-32768&&r<=32767?f.NUMBER16(r):f.NUMBER32(r)};W.NUMBER=function(r){return f.NUMBER(r).length};f.NUMBER16=function(r){return[28,r>>8&255,r&255]};W.NUMBER16=hr(3);f.NUMBER32=function(r){return[29,r>>24&255,r>>16&255,r>>8&255,r&255]};W.NUMBER32=hr(5);f.REAL=function(r){var e=r.toString(),t=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(e);if(t){var n=parseFloat("1e"+((t[2]?+t[2]:0)+t[1].length));e=(Math.round(r*n)/n).toString()}for(var a="",i=0,o=e.length;i<o;i+=1){var x=e[i];x==="e"?a+=e[++i]==="-"?"c":"b":x==="."?a+="a":x==="-"?a+="e":a+=x}a+=a.length&1?"f":"ff";for(var A=[30],E=0,l=a.length;E<l;E+=2)A.push(parseInt(a.substr(E,2),16));return A};W.REAL=function(r){return f.REAL(r).length};f.NAME=f.CHARARRAY;W.NAME=W.CHARARRAY;f.STRING=f.CHARARRAY;W.STRING=W.CHARARRAY;Gt.UTF8=function(r,e,t){for(var n=[],a=t,i=0;i<a;i++,e+=1)n[i]=r.getUint8(e);return String.fromCharCode.apply(null,n)};Gt.UTF16=function(r,e,t){for(var n=[],a=t/2,i=0;i<a;i++,e+=2)n[i]=r.getUint16(e);return String.fromCharCode.apply(null,n)};f.UTF16=function(r){for(var e=[],t=0;t<r.length;t+=1){var n=r.charCodeAt(t);e[e.length]=n>>8&255,e[e.length]=n&255}return e};W.UTF16=function(r){return r.length*2};var L0={"x-mac-croatian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ","x-mac-cyrillic":"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю","x-mac-gaelic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ","x-mac-greek":"Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­","x-mac-icelandic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-inuit":"ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł","x-mac-ce":"ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",macintosh:"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-romanian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-turkish":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ"};Gt.MACSTRING=function(r,e,t,n){var a=L0[n];if(a!==void 0){for(var i="",o=0;o<t;o++){var x=r.getUint8(e+o);x<=127?i+=String.fromCharCode(x):i+=a[x&127]}return i}};var Gn=typeof WeakMap=="function"&&new WeakMap,Pn,xE=function(r){if(!Pn){Pn={};for(var e in L0)Pn[e]=new String(e)}var t=Pn[r];if(t!==void 0){if(Gn){var n=Gn.get(t);if(n!==void 0)return n}var a=L0[r];if(a!==void 0){for(var i={},o=0;o<a.length;o++)i[a.charCodeAt(o)]=o+128;return Gn&&Gn.set(t,i),i}}};f.MACSTRING=function(r,e){var t=xE(e);if(t!==void 0){for(var n=[],a=0;a<r.length;a++){var i=r.charCodeAt(a);if(i>=128&&(i=t[i],i===void 0))return;n[a]=i}return n}};W.MACSTRING=function(r,e){var t=f.MACSTRING(r,e);return t!==void 0?t.length:0};function c0(r){return r>=-128&&r<=127}function EE(r,e,t){for(var n=0,a=r.length;e<a&&n<64&&r[e]===0;)++e,++n;return t.push(128|n-1),e}function lE(r,e,t){for(var n=0,a=r.length,i=e;i<a&&n<64;){var o=r[i];if(!c0(o)||o===0&&i+1<a&&r[i+1]===0)break;++i,++n}t.push(n-1);for(var x=e;x<i;++x)t.push(r[x]+256&255);return i}function sE(r,e,t){for(var n=0,a=r.length,i=e;i<a&&n<64;){var o=r[i];if(o===0||c0(o)&&i+1<a&&c0(r[i+1]))break;++i,++n}t.push(64|n-1);for(var x=e;x<i;++x){var A=r[x];t.push(A+65536>>8&255,A+256&255)}return i}f.VARDELTAS=function(r){for(var e=0,t=[];e<r.length;){var n=r[e];n===0?e=EE(r,e,t):n>=-128&&n<=127?e=lE(r,e,t):e=sE(r,e,t)}return t};f.INDEX=function(r){for(var e=1,t=[e],n=[],a=0;a<r.length;a+=1){var i=f.OBJECT(r[a]);Array.prototype.push.apply(n,i),e+=i.length,t.push(e)}if(n.length===0)return[0,0];for(var o=[],x=1+Math.floor(Math.log(e)/Math.log(2))/8|0,A=[void 0,f.BYTE,f.USHORT,f.UINT24,f.ULONG][x],E=0;E<t.length;E+=1){var l=A(t[E]);Array.prototype.push.apply(o,l)}return Array.prototype.concat(f.Card16(r.length),f.OffSize(x),o,n)};W.INDEX=function(r){return f.INDEX(r).length};f.DICT=function(r){for(var e=[],t=Object.keys(r),n=t.length,a=0;a<n;a+=1){var i=parseInt(t[a],0),o=r[i];e=e.concat(f.OPERAND(o.value,o.type)),e=e.concat(f.OPERATOR(i))}return e};W.DICT=function(r){return f.DICT(r).length};f.OPERATOR=function(r){return r<1200?[r]:[12,r-1200]};f.OPERAND=function(r,e){var t=[];if(Array.isArray(e))for(var n=0;n<e.length;n+=1)V.argument(r.length===e.length,"Not enough arguments given for type"+e),t=t.concat(f.OPERAND(r[n],e[n]));else if(e==="SID")t=t.concat(f.NUMBER(r));else if(e==="offset")t=t.concat(f.NUMBER32(r));else if(e==="number")t=t.concat(f.NUMBER(r));else if(e==="real")t=t.concat(f.REAL(r));else throw new Error("Unknown operand type "+e);return t};f.OP=f.BYTE;W.OP=W.BYTE;var bn=typeof WeakMap=="function"&&new WeakMap;f.CHARSTRING=function(r){if(bn){var e=bn.get(r);if(e!==void 0)return e}for(var t=[],n=r.length,a=0;a<n;a+=1){var i=r[a];t=t.concat(f[i.type](i.value))}return bn&&bn.set(r,t),t};W.CHARSTRING=function(r){return f.CHARSTRING(r).length};f.OBJECT=function(r){var e=f[r.type];return V.argument(e!==void 0,"No encoding function for type "+r.type),e(r.value)};W.OBJECT=function(r){var e=W[r.type];return V.argument(e!==void 0,"No sizeOf function for type "+r.type),e(r.value)};f.TABLE=function(r){for(var e=[],t=r.fields.length,n=[],a=[],i=0;i<t;i+=1){var o=r.fields[i],x=f[o.type];V.argument(x!==void 0,"No encoding function for field type "+o.type+" ("+o.name+")");var A=r[o.name];A===void 0&&(A=o.value);var E=x(A);o.type==="TABLE"?(a.push(e.length),e=e.concat([0,0]),n.push(E)):e=e.concat(E)}for(var l=0;l<n.length;l+=1){var c=a[l],L=e.length;V.argument(L<65536,"Table "+r.tableName+" too big."),e[c]=L>>8,e[c+1]=L&255,e=e.concat(n[l])}return e};W.TABLE=function(r){for(var e=0,t=r.fields.length,n=0;n<t;n+=1){var a=r.fields[n],i=W[a.type];V.argument(i!==void 0,"No sizeOf function for field type "+a.type+" ("+a.name+")");var o=r[a.name];o===void 0&&(o=a.value),e+=i(o),a.type==="TABLE"&&(e+=2)}return e};f.RECORD=f.TABLE;W.RECORD=W.TABLE;f.LITERAL=function(r){return r};W.LITERAL=function(r){return r.length};function We(r,e,t){for(var n=0;n<e.length;n+=1){var a=e[n];this[a.name]=a.value}if(this.tableName=r,this.fields=e,t)for(var i=Object.keys(t),o=0;o<i.length;o+=1){var x=i[o],A=t[x];this[x]!==void 0&&(this[x]=A)}}We.prototype.encode=function(){return f.TABLE(this)};We.prototype.sizeOf=function(){return W.TABLE(this)};function tn(r,e,t){t===void 0&&(t=e.length);var n=new Array(e.length+1);n[0]={name:r+"Count",type:"USHORT",value:t};for(var a=0;a<e.length;a++)n[a+1]={name:r+a,type:"USHORT",value:e[a]};return n}function T0(r,e,t){var n=e.length,a=new Array(n+1);a[0]={name:r+"Count",type:"USHORT",value:n};for(var i=0;i<n;i++)a[i+1]={name:r+i,type:"TABLE",value:t(e[i],i)};return a}function $n(r,e,t){var n=e.length,a=[];a[0]={name:r+"Count",type:"USHORT",value:n};for(var i=0;i<n;i++)a=a.concat(t(e[i],i));return a}function ea(r){r.format===1?We.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:1}].concat(tn("glyph",r.glyphs))):V.assert(!1,"Can't create coverage table format 2 yet.")}ea.prototype=Object.create(We.prototype);ea.prototype.constructor=ea;function ra(r){We.call(this,"scriptListTable",$n("scriptRecord",r,function(e,t){var n=e.script,a=n.defaultLangSys;return V.assert(!!a,"Unable to write GSUB: script "+e.tag+" has no default language system."),[{name:"scriptTag"+t,type:"TAG",value:e.tag},{name:"script"+t,type:"TABLE",value:new We("scriptTable",[{name:"defaultLangSys",type:"TABLE",value:new We("defaultLangSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:a.reqFeatureIndex}].concat(tn("featureIndex",a.featureIndexes)))}].concat($n("langSys",n.langSysRecords,function(i,o){var x=i.langSys;return[{name:"langSysTag"+o,type:"TAG",value:i.tag},{name:"langSys"+o,type:"TABLE",value:new We("langSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:x.reqFeatureIndex}].concat(tn("featureIndex",x.featureIndexes)))}]})))}]}))}ra.prototype=Object.create(We.prototype);ra.prototype.constructor=ra;function ta(r){We.call(this,"featureListTable",$n("featureRecord",r,function(e,t){var n=e.feature;return[{name:"featureTag"+t,type:"TAG",value:e.tag},{name:"feature"+t,type:"TABLE",value:new We("featureTable",[{name:"featureParams",type:"USHORT",value:n.featureParams}].concat(tn("lookupListIndex",n.lookupListIndexes)))}]}))}ta.prototype=Object.create(We.prototype);ta.prototype.constructor=ta;function na(r,e){We.call(this,"lookupListTable",T0("lookup",r,function(t){var n=e[t.lookupType];return V.assert(!!n,"Unable to write GSUB lookup type "+t.lookupType+" tables."),new We("lookupTable",[{name:"lookupType",type:"USHORT",value:t.lookupType},{name:"lookupFlag",type:"USHORT",value:t.lookupFlag}].concat(T0("subtable",t.subtables,n)))}))}na.prototype=Object.create(We.prototype);na.prototype.constructor=na;var Y={Table:We,Record:We,Coverage:ea,ScriptList:ra,FeatureList:ta,LookupList:na,ushortList:tn,tableList:T0,recordList:$n};function Bi(r,e){return r.getUint8(e)}function aa(r,e){return r.getUint16(e,!1)}function LE(r,e){return r.getInt16(e,!1)}function J0(r,e){return r.getUint32(e,!1)}function EA(r,e){var t=r.getInt16(e,!1),n=r.getUint16(e+2,!1);return t+n/65535}function cE(r,e){for(var t="",n=e;n<e+4;n+=1)t+=String.fromCharCode(r.getInt8(n));return t}function TE(r,e,t){for(var n=0,a=0;a<t;a+=1)n<<=8,n+=r.getUint8(e+a);return n}function hE(r,e,t){for(var n=[],a=e;a<t;a+=1)n.push(r.getUint8(a));return n}function IE(r){for(var e="",t=0;t<r.length;t+=1)e+=String.fromCharCode(r[t]);return e}var dE={byte:1,uShort:2,short:2,uLong:4,fixed:4,longDateTime:8,tag:4};function C(r,e){this.data=r,this.offset=e,this.relativeOffset=0}C.prototype.parseByte=function(){var r=this.data.getUint8(this.offset+this.relativeOffset);return this.relativeOffset+=1,r};C.prototype.parseChar=function(){var r=this.data.getInt8(this.offset+this.relativeOffset);return this.relativeOffset+=1,r};C.prototype.parseCard8=C.prototype.parseByte;C.prototype.parseUShort=function(){var r=this.data.getUint16(this.offset+this.relativeOffset);return this.relativeOffset+=2,r};C.prototype.parseCard16=C.prototype.parseUShort;C.prototype.parseSID=C.prototype.parseUShort;C.prototype.parseOffset16=C.prototype.parseUShort;C.prototype.parseShort=function(){var r=this.data.getInt16(this.offset+this.relativeOffset);return this.relativeOffset+=2,r};C.prototype.parseF2Dot14=function(){var r=this.data.getInt16(this.offset+this.relativeOffset)/16384;return this.relativeOffset+=2,r};C.prototype.parseULong=function(){var r=J0(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,r};C.prototype.parseOffset32=C.prototype.parseULong;C.prototype.parseFixed=function(){var r=EA(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,r};C.prototype.parseString=function(r){var e=this.data,t=this.offset+this.relativeOffset,n="";this.relativeOffset+=r;for(var a=0;a<r;a++)n+=String.fromCharCode(e.getUint8(t+a));return n};C.prototype.parseTag=function(){return this.parseString(4)};C.prototype.parseLongDateTime=function(){var r=J0(this.data,this.offset+this.relativeOffset+4);return r-=2082844800,this.relativeOffset+=8,r};C.prototype.parseVersion=function(r){var e=aa(this.data,this.offset+this.relativeOffset),t=aa(this.data,this.offset+this.relativeOffset+2);return this.relativeOffset+=4,r===void 0&&(r=4096),e+t/r/10};C.prototype.skip=function(r,e){e===void 0&&(e=1),this.relativeOffset+=dE[r]*e};C.prototype.parseULongList=function(r){r===void 0&&(r=this.parseULong());for(var e=new Array(r),t=this.data,n=this.offset+this.relativeOffset,a=0;a<r;a++)e[a]=t.getUint32(n),n+=4;return this.relativeOffset+=r*4,e};C.prototype.parseOffset16List=C.prototype.parseUShortList=function(r){r===void 0&&(r=this.parseUShort());for(var e=new Array(r),t=this.data,n=this.offset+this.relativeOffset,a=0;a<r;a++)e[a]=t.getUint16(n),n+=2;return this.relativeOffset+=r*2,e};C.prototype.parseShortList=function(r){for(var e=new Array(r),t=this.data,n=this.offset+this.relativeOffset,a=0;a<r;a++)e[a]=t.getInt16(n),n+=2;return this.relativeOffset+=r*2,e};C.prototype.parseByteList=function(r){for(var e=new Array(r),t=this.data,n=this.offset+this.relativeOffset,a=0;a<r;a++)e[a]=t.getUint8(n++);return this.relativeOffset+=r,e};C.prototype.parseList=function(r,e){e||(e=r,r=this.parseUShort());for(var t=new Array(r),n=0;n<r;n++)t[n]=e.call(this);return t};C.prototype.parseList32=function(r,e){e||(e=r,r=this.parseULong());for(var t=new Array(r),n=0;n<r;n++)t[n]=e.call(this);return t};C.prototype.parseRecordList=function(r,e){e||(e=r,r=this.parseUShort());for(var t=new Array(r),n=Object.keys(e),a=0;a<r;a++){for(var i={},o=0;o<n.length;o++){var x=n[o],A=e[x];i[x]=A.call(this)}t[a]=i}return t};C.prototype.parseRecordList32=function(r,e){e||(e=r,r=this.parseULong());for(var t=new Array(r),n=Object.keys(e),a=0;a<r;a++){for(var i={},o=0;o<n.length;o++){var x=n[o],A=e[x];i[x]=A.call(this)}t[a]=i}return t};C.prototype.parseStruct=function(r){if(typeof r=="function")return r.call(this);for(var e=Object.keys(r),t={},n=0;n<e.length;n++){var a=e[n],i=r[a];t[a]=i.call(this)}return t};C.prototype.parseValueRecord=function(r){if(r===void 0&&(r=this.parseUShort()),r!==0){var e={};return r&1&&(e.xPlacement=this.parseShort()),r&2&&(e.yPlacement=this.parseShort()),r&4&&(e.xAdvance=this.parseShort()),r&8&&(e.yAdvance=this.parseShort()),r&16&&(e.xPlaDevice=void 0,this.parseShort()),r&32&&(e.yPlaDevice=void 0,this.parseShort()),r&64&&(e.xAdvDevice=void 0,this.parseShort()),r&128&&(e.yAdvDevice=void 0,this.parseShort()),e}};C.prototype.parseValueRecordList=function(){for(var r=this.parseUShort(),e=this.parseUShort(),t=new Array(e),n=0;n<e;n++)t[n]=this.parseValueRecord(r);return t};C.prototype.parsePointer=function(r){var e=this.parseOffset16();if(e>0)return new C(this.data,this.offset+e).parseStruct(r)};C.prototype.parsePointer32=function(r){var e=this.parseOffset32();if(e>0)return new C(this.data,this.offset+e).parseStruct(r)};C.prototype.parseListOfLists=function(r){for(var e=this.parseOffset16List(),t=e.length,n=this.relativeOffset,a=new Array(t),i=0;i<t;i++){var o=e[i];if(o===0){a[i]=void 0;continue}if(this.relativeOffset=o,r){for(var x=this.parseOffset16List(),A=new Array(x.length),E=0;E<x.length;E++)this.relativeOffset=o+x[E],A[E]=r.call(this);a[i]=A}else a[i]=this.parseUShortList()}return this.relativeOffset=n,a};C.prototype.parseCoverage=function(){var r=this.offset+this.relativeOffset,e=this.parseUShort(),t=this.parseUShort();if(e===1)return{format:1,glyphs:this.parseUShortList(t)};if(e===2){for(var n=new Array(t),a=0;a<t;a++)n[a]={start:this.parseUShort(),end:this.parseUShort(),index:this.parseUShort()};return{format:2,ranges:n}}throw new Error("0x"+r.toString(16)+": Coverage format must be 1 or 2.")};C.prototype.parseClassDef=function(){var r=this.offset+this.relativeOffset,e=this.parseUShort();if(e===1)return{format:1,startGlyph:this.parseUShort(),classes:this.parseUShortList()};if(e===2)return{format:2,ranges:this.parseRecordList({start:C.uShort,end:C.uShort,classId:C.uShort})};throw new Error("0x"+r.toString(16)+": ClassDef format must be 1 or 2.")};C.list=function(r,e){return function(){return this.parseList(r,e)}};C.list32=function(r,e){return function(){return this.parseList32(r,e)}};C.recordList=function(r,e){return function(){return this.parseRecordList(r,e)}};C.recordList32=function(r,e){return function(){return this.parseRecordList32(r,e)}};C.pointer=function(r){return function(){return this.parsePointer(r)}};C.pointer32=function(r){return function(){return this.parsePointer32(r)}};C.tag=C.prototype.parseTag;C.byte=C.prototype.parseByte;C.uShort=C.offset16=C.prototype.parseUShort;C.uShortList=C.prototype.parseUShortList;C.uLong=C.offset32=C.prototype.parseULong;C.uLongList=C.prototype.parseULongList;C.struct=C.prototype.parseStruct;C.coverage=C.prototype.parseCoverage;C.classDef=C.prototype.parseClassDef;var Hi={reserved:C.uShort,reqFeatureIndex:C.uShort,featureIndexes:C.uShortList};C.prototype.parseScriptList=function(){return this.parsePointer(C.recordList({tag:C.tag,script:C.pointer({defaultLangSys:C.pointer(Hi),langSysRecords:C.recordList({tag:C.tag,langSys:C.pointer(Hi)})})}))||[]};C.prototype.parseFeatureList=function(){return this.parsePointer(C.recordList({tag:C.tag,feature:C.pointer({featureParams:C.offset16,lookupListIndexes:C.uShortList})}))||[]};C.prototype.parseLookupList=function(r){return this.parsePointer(C.list(C.pointer(function(){var e=this.parseUShort();V.argument(1<=e&&e<=9,"GPOS/GSUB lookup type "+e+" unknown.");var t=this.parseUShort(),n=t&16;return{lookupType:e,lookupFlag:t,subtables:this.parseList(C.pointer(r[e])),markFilteringSet:n?this.parseUShort():void 0}})))||[]};C.prototype.parseFeatureVariationsList=function(){return this.parsePointer32(function(){var r=this.parseUShort(),e=this.parseUShort();V.argument(r===1&&e<1,"GPOS/GSUB feature variations table unknown.");var t=this.parseRecordList32({conditionSetOffset:C.offset32,featureTableSubstitutionOffset:C.offset32});return t})||[]};var b={getByte:Bi,getCard8:Bi,getUShort:aa,getCard16:aa,getShort:LE,getULong:J0,getFixed:EA,getTag:cE,getOffset:TE,getBytes:hE,bytesToString:IE,Parser:C};function pE(r,e){e.parseUShort(),r.length=e.parseULong(),r.language=e.parseULong();var t;r.groupCount=t=e.parseULong(),r.glyphIndexMap={};for(var n=0;n<t;n+=1)for(var a=e.parseULong(),i=e.parseULong(),o=e.parseULong(),x=a;x<=i;x+=1)r.glyphIndexMap[x]=o,o++}function SE(r,e,t,n,a){r.length=e.parseUShort(),r.language=e.parseUShort();var i;r.segCount=i=e.parseUShort()>>1,e.skip("uShort",3),r.glyphIndexMap={};for(var o=new b.Parser(t,n+a+14),x=new b.Parser(t,n+a+16+i*2),A=new b.Parser(t,n+a+16+i*4),E=new b.Parser(t,n+a+16+i*6),l=n+a+16+i*8,c=0;c<i-1;c+=1)for(var L=void 0,T=o.parseUShort(),I=x.parseUShort(),d=A.parseShort(),p=E.parseUShort(),S=I;S<=T;S+=1)p!==0?(l=E.offset+E.relativeOffset-2,l+=p,l+=(S-I)*2,L=b.getUShort(t,l),L!==0&&(L=L+d&65535)):L=S+d&65535,r.glyphIndexMap[S]=L}function CE(r,e){var t={};t.version=b.getUShort(r,e),V.argument(t.version===0,"cmap table version should be 0."),t.numTables=b.getUShort(r,e+2);for(var n=-1,a=t.numTables-1;a>=0;a-=1){var i=b.getUShort(r,e+4+a*8),o=b.getUShort(r,e+4+a*8+2);if(i===3&&(o===0||o===1||o===10)||i===0&&(o===0||o===1||o===2||o===3||o===4)){n=b.getULong(r,e+4+a*8+4);break}}if(n===-1)throw new Error("No valid cmap sub-tables found.");var x=new b.Parser(r,e+n);if(t.format=x.parseUShort(),t.format===12)pE(t,x);else if(t.format===4)SE(t,x,r,e,n);else throw new Error("Only format 4 and 12 cmap tables are supported (found format "+t.format+").");return t}function uE(r,e,t){r.segments.push({end:e,start:e,delta:-(e-t),offset:0,glyphIndex:t})}function RE(r){r.segments.push({end:65535,start:65535,delta:1,offset:0})}function gE(r){var e=!0,t;for(t=r.length-1;t>0;t-=1){var n=r.get(t);if(n.unicode>65535){console.log("Adding CMAP format 12 (needed!)"),e=!1;break}}var a=[{name:"version",type:"USHORT",value:0},{name:"numTables",type:"USHORT",value:e?1:2},{name:"platformID",type:"USHORT",value:3},{name:"encodingID",type:"USHORT",value:1},{name:"offset",type:"ULONG",value:e?12:20}];e||(a=a.concat([{name:"cmap12PlatformID",type:"USHORT",value:3},{name:"cmap12EncodingID",type:"USHORT",value:10},{name:"cmap12Offset",type:"ULONG",value:0}])),a=a.concat([{name:"format",type:"USHORT",value:4},{name:"cmap4Length",type:"USHORT",value:0},{name:"language",type:"USHORT",value:0},{name:"segCountX2",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);var i=new Y.Table("cmap",a);for(i.segments=[],t=0;t<r.length;t+=1){for(var o=r.get(t),x=0;x<o.unicodes.length;x+=1)uE(i,o.unicodes[x],t);i.segments=i.segments.sort(function(u,y){return u.start-y.start})}RE(i);var A=i.segments.length,E=0,l=[],c=[],L=[],T=[],I=[],d=[];for(t=0;t<A;t+=1){var p=i.segments[t];p.end<=65535&&p.start<=65535?(l=l.concat({name:"end_"+t,type:"USHORT",value:p.end}),c=c.concat({name:"start_"+t,type:"USHORT",value:p.start}),L=L.concat({name:"idDelta_"+t,type:"SHORT",value:p.delta}),T=T.concat({name:"idRangeOffset_"+t,type:"USHORT",value:p.offset}),p.glyphId!==void 0&&(I=I.concat({name:"glyph_"+t,type:"USHORT",value:p.glyphId}))):E+=1,!e&&p.glyphIndex!==void 0&&(d=d.concat({name:"cmap12Start_"+t,type:"ULONG",value:p.start}),d=d.concat({name:"cmap12End_"+t,type:"ULONG",value:p.end}),d=d.concat({name:"cmap12Glyph_"+t,type:"ULONG",value:p.glyphIndex}))}if(i.segCountX2=(A-E)*2,i.searchRange=Math.pow(2,Math.floor(Math.log(A-E)/Math.log(2)))*2,i.entrySelector=Math.log(i.searchRange/2)/Math.log(2),i.rangeShift=i.segCountX2-i.searchRange,i.fields=i.fields.concat(l),i.fields.push({name:"reservedPad",type:"USHORT",value:0}),i.fields=i.fields.concat(c),i.fields=i.fields.concat(L),i.fields=i.fields.concat(T),i.fields=i.fields.concat(I),i.cmap4Length=14+l.length*2+2+c.length*2+L.length*2+T.length*2+I.length*2,!e){var S=16+d.length*4;i.cmap12Offset=12+2*2+4+i.cmap4Length,i.fields=i.fields.concat([{name:"cmap12Format",type:"USHORT",value:12},{name:"cmap12Reserved",type:"USHORT",value:0},{name:"cmap12Length",type:"ULONG",value:S},{name:"cmap12Language",type:"ULONG",value:0},{name:"cmap12nGroups",type:"ULONG",value:d.length/3}]),i.fields=i.fields.concat(d)}return i}var lA={parse:CE,make:gE},Vn=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","266 ff","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],yE=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],NE=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],xt=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"];function sA(r){this.font=r}sA.prototype.charToGlyphIndex=function(r){var e=r.codePointAt(0),t=this.font.glyphs;if(t){for(var n=0;n<t.length;n+=1)for(var a=t.get(n),i=0;i<a.unicodes.length;i+=1)if(a.unicodes[i]===e)return n}return null};function LA(r){this.cmap=r}LA.prototype.charToGlyphIndex=function(r){return this.cmap.glyphIndexMap[r.codePointAt(0)]||0};function ia(r,e){this.encoding=r,this.charset=e}ia.prototype.charToGlyphIndex=function(r){var e=r.codePointAt(0),t=this.encoding[e];return this.charset.indexOf(t)};function _0(r){switch(r.version){case 1:this.names=xt.slice();break;case 2:this.names=new Array(r.numberOfGlyphs);for(var e=0;e<r.numberOfGlyphs;e++)r.glyphNameIndex[e]<xt.length?this.names[e]=xt[r.glyphNameIndex[e]]:this.names[e]=r.names[r.glyphNameIndex[e]-xt.length];break;case 2.5:this.names=new Array(r.numberOfGlyphs);for(var t=0;t<r.numberOfGlyphs;t++)this.names[t]=xt[t+r.glyphNameIndex[t]];break;case 3:this.names=[];break;default:this.names=[];break}}_0.prototype.nameToGlyphIndex=function(r){return this.names.indexOf(r)};_0.prototype.glyphIndexToName=function(r){return this.names[r]};function DE(r){for(var e,t=r.tables.cmap.glyphIndexMap,n=Object.keys(t),a=0;a<n.length;a+=1){var i=n[a],o=t[i];e=r.glyphs.get(o),e.addUnicode(parseInt(i))}for(var x=0;x<r.glyphs.length;x+=1)e=r.glyphs.get(x),r.cffEncoding?r.isCIDFont?e.name="gid"+x:e.name=r.cffEncoding.charset[x]:r.glyphNames.names&&(e.name=r.glyphNames.glyphIndexToName(x))}function mE(r){r._IndexToUnicodeMap={};for(var e=r.tables.cmap.glyphIndexMap,t=Object.keys(e),n=0;n<t.length;n+=1){var a=t[n],i=e[a];r._IndexToUnicodeMap[i]===void 0?r._IndexToUnicodeMap[i]={unicodes:[parseInt(a)]}:r._IndexToUnicodeMap[i].unicodes.push(parseInt(a))}}function OE(r,e){e.lowMemory?mE(r):DE(r)}function BE(r,e,t,n,a){r.beginPath(),r.moveTo(e,t),r.lineTo(n,a),r.stroke()}var it={line:BE};function HE(r,e){var t=e||new Be;return{configurable:!0,get:function(){return typeof t=="function"&&(t=t()),t},set:function(n){t=n}}}function rr(r){this.bindConstructorValues(r)}rr.prototype.bindConstructorValues=function(r){this.index=r.index||0,this.name=r.name||null,this.unicode=r.unicode||void 0,this.unicodes=r.unicodes||r.unicode!==void 0?[r.unicode]:[],r.xMin&&(this.xMin=r.xMin),r.yMin&&(this.yMin=r.yMin),r.xMax&&(this.xMax=r.xMax),r.yMax&&(this.yMax=r.yMax),r.advanceWidth&&(this.advanceWidth=r.advanceWidth),Object.defineProperty(this,"path",HE(this,r.path))};rr.prototype.addUnicode=function(r){this.unicodes.length===0&&(this.unicode=r),this.unicodes.push(r)};rr.prototype.getBoundingBox=function(){return this.path.getBoundingBox()};rr.prototype.getPath=function(r,e,t,n,a){r=r!==void 0?r:0,e=e!==void 0?e:0,t=t!==void 0?t:72;var i,o;n||(n={});var x=n.xScale,A=n.yScale;if(n.hinting&&a&&a.hinting&&(o=this.path&&a.hinting.exec(this,t)),o)i=a.hinting.getCommands(o),r=Math.round(r),e=Math.round(e),x=A=1;else{i=this.path.commands;var E=1/(this.path.unitsPerEm||1e3)*t;x===void 0&&(x=E),A===void 0&&(A=E)}for(var l=new Be,c=0;c<i.length;c+=1){var L=i[c];L.type==="M"?l.moveTo(r+L.x*x,e+-L.y*A):L.type==="L"?l.lineTo(r+L.x*x,e+-L.y*A):L.type==="Q"?l.quadraticCurveTo(r+L.x1*x,e+-L.y1*A,r+L.x*x,e+-L.y*A):L.type==="C"?l.curveTo(r+L.x1*x,e+-L.y1*A,r+L.x2*x,e+-L.y2*A,r+L.x*x,e+-L.y*A):L.type==="Z"&&l.closePath()}return l};rr.prototype.getContours=function(){if(this.points===void 0)return[];for(var r=[],e=[],t=0;t<this.points.length;t+=1){var n=this.points[t];e.push(n),n.lastPointOfContour&&(r.push(e),e=[])}return V.argument(e.length===0,"There are still points left in the current contour."),r};rr.prototype.getMetrics=function(){for(var r=this.path.commands,e=[],t=[],n=0;n<r.length;n+=1){var a=r[n];a.type!=="Z"&&(e.push(a.x),t.push(a.y)),(a.type==="Q"||a.type==="C")&&(e.push(a.x1),t.push(a.y1)),a.type==="C"&&(e.push(a.x2),t.push(a.y2))}var i={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,t),xMax:Math.max.apply(null,e),yMax:Math.max.apply(null,t),leftSideBearing:this.leftSideBearing};return isFinite(i.xMin)||(i.xMin=0),isFinite(i.xMax)||(i.xMax=this.advanceWidth),isFinite(i.yMin)||(i.yMin=0),isFinite(i.yMax)||(i.yMax=0),i.rightSideBearing=this.advanceWidth-i.leftSideBearing-(i.xMax-i.xMin),i};rr.prototype.draw=function(r,e,t,n,a){this.getPath(e,t,n,a).draw(r)};rr.prototype.drawPoints=function(r,e,t,n){function a(c,L,T,I){r.beginPath();for(var d=0;d<c.length;d+=1)r.moveTo(L+c[d].x*I,T+c[d].y*I),r.arc(L+c[d].x*I,T+c[d].y*I,2,0,Math.PI*2,!1);r.closePath(),r.fill()}e=e!==void 0?e:0,t=t!==void 0?t:0,n=n!==void 0?n:24;for(var i=1/this.path.unitsPerEm*n,o=[],x=[],A=this.path,E=0;E<A.commands.length;E+=1){var l=A.commands[E];l.x!==void 0&&o.push({x:l.x,y:-l.y}),l.x1!==void 0&&x.push({x:l.x1,y:-l.y1}),l.x2!==void 0&&x.push({x:l.x2,y:-l.y2})}r.fillStyle="blue",a(o,e,t,i),r.fillStyle="red",a(x,e,t,i)};rr.prototype.drawMetrics=function(r,e,t,n){var a;e=e!==void 0?e:0,t=t!==void 0?t:0,n=n!==void 0?n:24,a=1/this.path.unitsPerEm*n,r.lineWidth=1,r.strokeStyle="black",it.line(r,e,-1e4,e,1e4),it.line(r,-1e4,t,1e4,t);var i=this.xMin||0,o=this.yMin||0,x=this.xMax||0,A=this.yMax||0,E=this.advanceWidth||0;r.strokeStyle="blue",it.line(r,e+i*a,-1e4,e+i*a,1e4),it.line(r,e+x*a,-1e4,e+x*a,1e4),it.line(r,-1e4,t+-o*a,1e4,t+-o*a),it.line(r,-1e4,t+-A*a,1e4,t+-A*a),r.strokeStyle="green",it.line(r,e+E*a,-1e4,e+E*a,1e4)};function Un(r,e,t){Object.defineProperty(r,e,{get:function(){return r.path,r[t]},set:function(n){r[t]=n},enumerable:!0,configurable:!0})}function Z0(r,e){if(this.font=r,this.glyphs={},Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];n.path.unitsPerEm=r.unitsPerEm,this.glyphs[t]=n}this.length=e&&e.length||0}Z0.prototype.get=function(r){if(this.glyphs[r]===void 0){this.font._push(r),typeof this.glyphs[r]=="function"&&(this.glyphs[r]=this.glyphs[r]());var e=this.glyphs[r],t=this.font._IndexToUnicodeMap[r];if(t)for(var n=0;n<t.unicodes.length;n++)e.addUnicode(t.unicodes[n]);this.font.cffEncoding?this.font.isCIDFont?e.name="gid"+r:e.name=this.font.cffEncoding.charset[r]:this.font.glyphNames.names&&(e.name=this.font.glyphNames.glyphIndexToName(r)),this.glyphs[r].advanceWidth=this.font._hmtxTableData[r].advanceWidth,this.glyphs[r].leftSideBearing=this.font._hmtxTableData[r].leftSideBearing}else typeof this.glyphs[r]=="function"&&(this.glyphs[r]=this.glyphs[r]());return this.glyphs[r]};Z0.prototype.push=function(r,e){this.glyphs[r]=e,this.length++};function FE(r,e){return new rr({index:e,font:r})}function fE(r,e,t,n,a,i){return function(){var o=new rr({index:e,font:r});return o.path=function(){t(o,n,a);var x=i(r.glyphs,o);return x.unitsPerEm=r.unitsPerEm,x},Un(o,"xMin","_xMin"),Un(o,"xMax","_xMax"),Un(o,"yMin","_yMin"),Un(o,"yMax","_yMax"),o}}function ME(r,e,t,n){return function(){var a=new rr({index:e,font:r});return a.path=function(){var i=t(r,a,n);return i.unitsPerEm=r.unitsPerEm,i},a}}var Dr={GlyphSet:Z0,glyphLoader:FE,ttfGlyphLoader:fE,cffGlyphLoader:ME};function cA(r,e){if(r===e)return!0;if(Array.isArray(r)&&Array.isArray(e)){if(r.length!==e.length)return!1;for(var t=0;t<r.length;t+=1)if(!cA(r[t],e[t]))return!1;return!0}else return!1}function h0(r){var e;return r.length<1240?e=107:r.length<33900?e=1131:e=32768,e}function Vr(r,e,t){var n=[],a=[],i=b.getCard16(r,e),o,x;if(i!==0){var A=b.getByte(r,e+2);o=e+(i+1)*A+2;for(var E=e+3,l=0;l<i+1;l+=1)n.push(b.getOffset(r,E,A)),E+=A;x=o+n[i]}else x=e+2;for(var c=0;c<n.length-1;c+=1){var L=b.getBytes(r,o+n[c],o+n[c+1]);t&&(L=t(L)),a.push(L)}return{objects:a,startOffset:e,endOffset:x}}function GE(r,e){var t=[],n=b.getCard16(r,e),a,i;if(n!==0){var o=b.getByte(r,e+2);a=e+(n+1)*o+2;for(var x=e+3,A=0;A<n+1;A+=1)t.push(b.getOffset(r,x,o)),x+=o;i=a+t[n]}else i=e+2;return{offsets:t,startOffset:e,endOffset:i}}function PE(r,e,t,n,a){var i=b.getCard16(t,n),o=0;if(i!==0){var x=b.getByte(t,n+2);o=n+(i+1)*x+2}var A=b.getBytes(t,o+e[r],o+e[r+1]);return a&&(A=a(A)),A}function bE(r){for(var e="",t=15,n=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"];;){var a=r.parseByte(),i=a>>4,o=a&15;if(i===t||(e+=n[i],o===t))break;e+=n[o]}return parseFloat(e)}function UE(r,e){var t,n,a,i;if(e===28)return t=r.parseByte(),n=r.parseByte(),t<<8|n;if(e===29)return t=r.parseByte(),n=r.parseByte(),a=r.parseByte(),i=r.parseByte(),t<<24|n<<16|a<<8|i;if(e===30)return bE(r);if(e>=32&&e<=246)return e-139;if(e>=247&&e<=250)return t=r.parseByte(),(e-247)*256+t+108;if(e>=251&&e<=254)return t=r.parseByte(),-(e-251)*256-t-108;throw new Error("Invalid b0 "+e)}function vE(r){for(var e={},t=0;t<r.length;t+=1){var n=r[t][0],a=r[t][1],i=void 0;if(a.length===1?i=a[0]:i=a,e.hasOwnProperty(n)&&!isNaN(e[n]))throw new Error("Object "+e+" already has key "+n);e[n]=i}return e}function TA(r,e,t){e=e!==void 0?e:0;var n=new b.Parser(r,e),a=[],i=[];for(t=t!==void 0?t:r.length;n.relativeOffset<t;){var o=n.parseByte();o<=21?(o===12&&(o=1200+n.parseByte()),a.push([o,i]),i=[]):i.push(UE(n,o))}return vE(a)}function jt(r,e){return e<=390?e=Vn[e]:e=r[e-391],e}function hA(r,e,t){for(var n={},a,i=0;i<e.length;i+=1){var o=e[i];if(Array.isArray(o.type)){var x=[];x.length=o.type.length;for(var A=0;A<o.type.length;A++)a=r[o.op]!==void 0?r[o.op][A]:void 0,a===void 0&&(a=o.value!==void 0&&o.value[A]!==void 0?o.value[A]:null),o.type[A]==="SID"&&(a=jt(t,a)),x[A]=a;n[o.name]=x}else a=r[o.op],a===void 0&&(a=o.value!==void 0?o.value:null),o.type==="SID"&&(a=jt(t,a)),n[o.name]=a}return n}function YE(r,e){var t={};return t.formatMajor=b.getCard8(r,e),t.formatMinor=b.getCard8(r,e+1),t.size=b.getCard8(r,e+2),t.offsetSize=b.getCard8(r,e+3),t.startOffset=e,t.endOffset=e+4,t}var IA=[{name:"version",op:0,type:"SID"},{name:"notice",op:1,type:"SID"},{name:"copyright",op:1200,type:"SID"},{name:"fullName",op:2,type:"SID"},{name:"familyName",op:3,type:"SID"},{name:"weight",op:4,type:"SID"},{name:"isFixedPitch",op:1201,type:"number",value:0},{name:"italicAngle",op:1202,type:"number",value:0},{name:"underlinePosition",op:1203,type:"number",value:-100},{name:"underlineThickness",op:1204,type:"number",value:50},{name:"paintType",op:1205,type:"number",value:0},{name:"charstringType",op:1206,type:"number",value:2},{name:"fontMatrix",op:1207,type:["real","real","real","real","real","real"],value:[.001,0,0,.001,0,0]},{name:"uniqueId",op:13,type:"number"},{name:"fontBBox",op:5,type:["number","number","number","number"],value:[0,0,0,0]},{name:"strokeWidth",op:1208,type:"number",value:0},{name:"xuid",op:14,type:[],value:null},{name:"charset",op:15,type:"offset",value:0},{name:"encoding",op:16,type:"offset",value:0},{name:"charStrings",op:17,type:"offset",value:0},{name:"private",op:18,type:["number","offset"],value:[0,0]},{name:"ros",op:1230,type:["SID","SID","number"]},{name:"cidFontVersion",op:1231,type:"number",value:0},{name:"cidFontRevision",op:1232,type:"number",value:0},{name:"cidFontType",op:1233,type:"number",value:0},{name:"cidCount",op:1234,type:"number",value:8720},{name:"uidBase",op:1235,type:"number"},{name:"fdArray",op:1236,type:"offset"},{name:"fdSelect",op:1237,type:"offset"},{name:"fontName",op:1238,type:"SID"}],dA=[{name:"subrs",op:19,type:"offset",value:0},{name:"defaultWidthX",op:20,type:"number",value:0},{name:"nominalWidthX",op:21,type:"number",value:0}];function wE(r,e){var t=TA(r,0,r.byteLength);return hA(t,IA,e)}function pA(r,e,t,n){var a=TA(r,e,t);return hA(a,dA,n)}function Fi(r,e,t,n){for(var a=[],i=0;i<t.length;i+=1){var o=new DataView(new Uint8Array(t[i]).buffer),x=wE(o,n);x._subrs=[],x._subrsBias=0;var A=x.private[0],E=x.private[1];if(A!==0&&E!==0){var l=pA(r,E+e,A,n);if(x._defaultWidthX=l.defaultWidthX,x._nominalWidthX=l.nominalWidthX,l.subrs!==0){var c=E+l.subrs,L=Vr(r,c+e);x._subrs=L.objects,x._subrsBias=h0(x._subrs)}x._privateDict=l}a.push(x)}return a}function WE(r,e,t,n){var a,i,o=new b.Parser(r,e);t-=1;var x=[".notdef"],A=o.parseCard8();if(A===0)for(var E=0;E<t;E+=1)a=o.parseSID(),x.push(jt(n,a));else if(A===1)for(;x.length<=t;){a=o.parseSID(),i=o.parseCard8();for(var l=0;l<=i;l+=1)x.push(jt(n,a)),a+=1}else if(A===2)for(;x.length<=t;){a=o.parseSID(),i=o.parseCard16();for(var c=0;c<=i;c+=1)x.push(jt(n,a)),a+=1}else throw new Error("Unknown charset format "+A);return x}function kE(r,e,t){var n,a={},i=new b.Parser(r,e),o=i.parseCard8();if(o===0)for(var x=i.parseCard8(),A=0;A<x;A+=1)n=i.parseCard8(),a[n]=A;else if(o===1){var E=i.parseCard8();n=1;for(var l=0;l<E;l+=1)for(var c=i.parseCard8(),L=i.parseCard8(),T=c;T<=c+L;T+=1)a[T]=n,n+=1}else throw new Error("Unknown encoding format "+o);return new ia(a,t)}function fi(r,e,t){var n,a,i,o,x=new Be,A=[],E=0,l=!1,c=!1,L=0,T=0,I,d,p,S;if(r.isCIDFont){var u=r.tables.cff.topDict._fdSelect[e.index],y=r.tables.cff.topDict._fdArray[u];I=y._subrs,d=y._subrsBias,p=y._defaultWidthX,S=y._nominalWidthX}else I=r.tables.cff.topDict._subrs,d=r.tables.cff.topDict._subrsBias,p=r.tables.cff.topDict._defaultWidthX,S=r.tables.cff.topDict._nominalWidthX;var G=p;function m(v,J){c&&x.closePath(),x.moveTo(v,J),c=!0}function D(){var v;v=A.length%2!==0,v&&!l&&(G=A.shift()+S),E+=A.length>>1,A.length=0,l=!0}function H(v){for(var J,Q,X,Ie,Ye,ge,te,ye,Te,Ce,He,$e,Ne=0;Ne<v.length;){var ke=v[Ne];switch(Ne+=1,ke){case 1:D();break;case 3:D();break;case 4:A.length>1&&!l&&(G=A.shift()+S,l=!0),T+=A.pop(),m(L,T);break;case 5:for(;A.length>0;)L+=A.shift(),T+=A.shift(),x.lineTo(L,T);break;case 6:for(;A.length>0&&(L+=A.shift(),x.lineTo(L,T),A.length!==0);)T+=A.shift(),x.lineTo(L,T);break;case 7:for(;A.length>0&&(T+=A.shift(),x.lineTo(L,T),A.length!==0);)L+=A.shift(),x.lineTo(L,T);break;case 8:for(;A.length>0;)n=L+A.shift(),a=T+A.shift(),i=n+A.shift(),o=a+A.shift(),L=i+A.shift(),T=o+A.shift(),x.curveTo(n,a,i,o,L,T);break;case 10:Ye=A.pop()+d,ge=I[Ye],ge&&H(ge);break;case 11:return;case 12:switch(ke=v[Ne],Ne+=1,ke){case 35:n=L+A.shift(),a=T+A.shift(),i=n+A.shift(),o=a+A.shift(),te=i+A.shift(),ye=o+A.shift(),Te=te+A.shift(),Ce=ye+A.shift(),He=Te+A.shift(),$e=Ce+A.shift(),L=He+A.shift(),T=$e+A.shift(),A.shift(),x.curveTo(n,a,i,o,te,ye),x.curveTo(Te,Ce,He,$e,L,T);break;case 34:n=L+A.shift(),a=T,i=n+A.shift(),o=a+A.shift(),te=i+A.shift(),ye=o,Te=te+A.shift(),Ce=o,He=Te+A.shift(),$e=T,L=He+A.shift(),x.curveTo(n,a,i,o,te,ye),x.curveTo(Te,Ce,He,$e,L,T);break;case 36:n=L+A.shift(),a=T+A.shift(),i=n+A.shift(),o=a+A.shift(),te=i+A.shift(),ye=o,Te=te+A.shift(),Ce=o,He=Te+A.shift(),$e=Ce+A.shift(),L=He+A.shift(),x.curveTo(n,a,i,o,te,ye),x.curveTo(Te,Ce,He,$e,L,T);break;case 37:n=L+A.shift(),a=T+A.shift(),i=n+A.shift(),o=a+A.shift(),te=i+A.shift(),ye=o+A.shift(),Te=te+A.shift(),Ce=ye+A.shift(),He=Te+A.shift(),$e=Ce+A.shift(),Math.abs(He-L)>Math.abs($e-T)?L=He+A.shift():T=$e+A.shift(),x.curveTo(n,a,i,o,te,ye),x.curveTo(Te,Ce,He,$e,L,T);break;default:console.log("Glyph "+e.index+": unknown operator 1200"+ke),A.length=0}break;case 14:A.length>0&&!l&&(G=A.shift()+S,l=!0),c&&(x.closePath(),c=!1);break;case 18:D();break;case 19:case 20:D(),Ne+=E+7>>3;break;case 21:A.length>2&&!l&&(G=A.shift()+S,l=!0),T+=A.pop(),L+=A.pop(),m(L,T);break;case 22:A.length>1&&!l&&(G=A.shift()+S,l=!0),L+=A.pop(),m(L,T);break;case 23:D();break;case 24:for(;A.length>2;)n=L+A.shift(),a=T+A.shift(),i=n+A.shift(),o=a+A.shift(),L=i+A.shift(),T=o+A.shift(),x.curveTo(n,a,i,o,L,T);L+=A.shift(),T+=A.shift(),x.lineTo(L,T);break;case 25:for(;A.length>6;)L+=A.shift(),T+=A.shift(),x.lineTo(L,T);n=L+A.shift(),a=T+A.shift(),i=n+A.shift(),o=a+A.shift(),L=i+A.shift(),T=o+A.shift(),x.curveTo(n,a,i,o,L,T);break;case 26:for(A.length%2&&(L+=A.shift());A.length>0;)n=L,a=T+A.shift(),i=n+A.shift(),o=a+A.shift(),L=i,T=o+A.shift(),x.curveTo(n,a,i,o,L,T);break;case 27:for(A.length%2&&(T+=A.shift());A.length>0;)n=L+A.shift(),a=T,i=n+A.shift(),o=a+A.shift(),L=i+A.shift(),T=o,x.curveTo(n,a,i,o,L,T);break;case 28:J=v[Ne],Q=v[Ne+1],A.push((J<<24|Q<<16)>>16),Ne+=2;break;case 29:Ye=A.pop()+r.gsubrsBias,ge=r.gsubrs[Ye],ge&&H(ge);break;case 30:for(;A.length>0&&(n=L,a=T+A.shift(),i=n+A.shift(),o=a+A.shift(),L=i+A.shift(),T=o+(A.length===1?A.shift():0),x.curveTo(n,a,i,o,L,T),A.length!==0);)n=L+A.shift(),a=T,i=n+A.shift(),o=a+A.shift(),T=o+A.shift(),L=i+(A.length===1?A.shift():0),x.curveTo(n,a,i,o,L,T);break;case 31:for(;A.length>0&&(n=L+A.shift(),a=T,i=n+A.shift(),o=a+A.shift(),T=o+A.shift(),L=i+(A.length===1?A.shift():0),x.curveTo(n,a,i,o,L,T),A.length!==0);)n=L,a=T+A.shift(),i=n+A.shift(),o=a+A.shift(),L=i+A.shift(),T=o+(A.length===1?A.shift():0),x.curveTo(n,a,i,o,L,T);break;default:ke<32?console.log("Glyph "+e.index+": unknown operator "+ke):ke<247?A.push(ke-139):ke<251?(J=v[Ne],Ne+=1,A.push((ke-247)*256+J+108)):ke<255?(J=v[Ne],Ne+=1,A.push(-(ke-251)*256-J-108)):(J=v[Ne],Q=v[Ne+1],X=v[Ne+2],Ie=v[Ne+3],Ne+=4,A.push((J<<24|Q<<16|X<<8|Ie)/65536))}}}return H(t),e.advanceWidth=G,x}function KE(r,e,t,n){var a=[],i,o=new b.Parser(r,e),x=o.parseCard8();if(x===0)for(var A=0;A<t;A++){if(i=o.parseCard8(),i>=n)throw new Error("CFF table CID Font FDSelect has bad FD index value "+i+" (FD count "+n+")");a.push(i)}else if(x===3){var E=o.parseCard16(),l=o.parseCard16();if(l!==0)throw new Error("CFF Table CID Font FDSelect format 3 range has bad initial GID "+l);for(var c,L=0;L<E;L++){if(i=o.parseCard8(),c=o.parseCard16(),i>=n)throw new Error("CFF table CID Font FDSelect has bad FD index value "+i+" (FD count "+n+")");if(c>t)throw new Error("CFF Table CID Font FDSelect format 3 range has bad GID "+c);for(;l<c;l++)a.push(i);l=c}if(c!==t)throw new Error("CFF Table CID Font FDSelect format 3 range has bad final GID "+c)}else throw new Error("CFF Table CID Font FDSelect table has unsupported format "+x);return a}function VE(r,e,t,n){t.tables.cff={};var a=YE(r,e),i=Vr(r,a.endOffset,b.bytesToString),o=Vr(r,i.endOffset),x=Vr(r,o.endOffset,b.bytesToString),A=Vr(r,x.endOffset);t.gsubrs=A.objects,t.gsubrsBias=h0(t.gsubrs);var E=Fi(r,e,o.objects,x.objects);if(E.length!==1)throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = "+E.length);var l=E[0];if(t.tables.cff.topDict=l,l._privateDict&&(t.defaultWidthX=l._privateDict.defaultWidthX,t.nominalWidthX=l._privateDict.nominalWidthX),l.ros[0]!==void 0&&l.ros[1]!==void 0&&(t.isCIDFont=!0),t.isCIDFont){var c=l.fdArray,L=l.fdSelect;if(c===0||L===0)throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");c+=e;var T=Vr(r,c),I=Fi(r,e,T.objects,x.objects);l._fdArray=I,L+=e,l._fdSelect=KE(r,L,t.numGlyphs,I.length)}var d=e+l.private[1],p=pA(r,d,l.private[0],x.objects);if(t.defaultWidthX=p.defaultWidthX,t.nominalWidthX=p.nominalWidthX,p.subrs!==0){var S=d+p.subrs,u=Vr(r,S);t.subrs=u.objects,t.subrsBias=h0(t.subrs)}else t.subrs=[],t.subrsBias=0;var y;n.lowMemory?(y=GE(r,e+l.charStrings),t.nGlyphs=y.offsets.length):(y=Vr(r,e+l.charStrings),t.nGlyphs=y.objects.length);var G=WE(r,e+l.charset,t.nGlyphs,x.objects);if(l.encoding===0?t.cffEncoding=new ia(yE,G):l.encoding===1?t.cffEncoding=new ia(NE,G):t.cffEncoding=kE(r,e+l.encoding,G),t.encoding=t.encoding||t.cffEncoding,t.glyphs=new Dr.GlyphSet(t),n.lowMemory)t._push=function(H){var v=PE(H,y.offsets,r,e+l.charStrings);t.glyphs.push(H,Dr.cffGlyphLoader(t,H,fi,v))};else for(var m=0;m<t.nGlyphs;m+=1){var D=y.objects[m];t.glyphs.push(m,Dr.cffGlyphLoader(t,m,fi,D))}}function SA(r,e){var t,n=Vn.indexOf(r);return n>=0&&(t=n),n=e.indexOf(r),n>=0?t=n+Vn.length:(t=Vn.length+e.length,e.push(r)),t}function JE(){return new Y.Record("Header",[{name:"major",type:"Card8",value:1},{name:"minor",type:"Card8",value:0},{name:"hdrSize",type:"Card8",value:4},{name:"major",type:"Card8",value:1}])}function _E(r){var e=new Y.Record("Name INDEX",[{name:"names",type:"INDEX",value:[]}]);e.names=[];for(var t=0;t<r.length;t+=1)e.names.push({name:"name_"+t,type:"NAME",value:r[t]});return e}function CA(r,e,t){for(var n={},a=0;a<r.length;a+=1){var i=r[a],o=e[i.name];o!==void 0&&!cA(o,i.value)&&(i.type==="SID"&&(o=SA(o,t)),n[i.op]={name:i.name,type:i.type,value:o})}return n}function Mi(r,e){var t=new Y.Record("Top DICT",[{name:"dict",type:"DICT",value:{}}]);return t.dict=CA(IA,r,e),t}function Gi(r){var e=new Y.Record("Top DICT INDEX",[{name:"topDicts",type:"INDEX",value:[]}]);return e.topDicts=[{name:"topDict_0",type:"TABLE",value:r}],e}function ZE(r){var e=new Y.Record("String INDEX",[{name:"strings",type:"INDEX",value:[]}]);e.strings=[];for(var t=0;t<r.length;t+=1)e.strings.push({name:"string_"+t,type:"STRING",value:r[t]});return e}function zE(){return new Y.Record("Global Subr INDEX",[{name:"subrs",type:"INDEX",value:[]}])}function XE(r,e){for(var t=new Y.Record("Charsets",[{name:"format",type:"Card8",value:0}]),n=0;n<r.length;n+=1){var a=r[n],i=SA(a,e);t.fields.push({name:"glyph_"+n,type:"SID",value:i})}return t}function jE(r){var e=[],t=r.path;e.push({name:"width",type:"NUMBER",value:r.advanceWidth});for(var n=0,a=0,i=0;i<t.commands.length;i+=1){var o=void 0,x=void 0,A=t.commands[i];if(A.type==="Q"){var E=.3333333333333333,l=2/3;A={type:"C",x:A.x,y:A.y,x1:E*n+l*A.x1,y1:E*a+l*A.y1,x2:E*A.x+l*A.x1,y2:E*A.y+l*A.y1}}if(A.type==="M")o=Math.round(A.x-n),x=Math.round(A.y-a),e.push({name:"dx",type:"NUMBER",value:o}),e.push({name:"dy",type:"NUMBER",value:x}),e.push({name:"rmoveto",type:"OP",value:21}),n=Math.round(A.x),a=Math.round(A.y);else if(A.type==="L")o=Math.round(A.x-n),x=Math.round(A.y-a),e.push({name:"dx",type:"NUMBER",value:o}),e.push({name:"dy",type:"NUMBER",value:x}),e.push({name:"rlineto",type:"OP",value:5}),n=Math.round(A.x),a=Math.round(A.y);else if(A.type==="C"){var c=Math.round(A.x1-n),L=Math.round(A.y1-a),T=Math.round(A.x2-A.x1),I=Math.round(A.y2-A.y1);o=Math.round(A.x-A.x2),x=Math.round(A.y-A.y2),e.push({name:"dx1",type:"NUMBER",value:c}),e.push({name:"dy1",type:"NUMBER",value:L}),e.push({name:"dx2",type:"NUMBER",value:T}),e.push({name:"dy2",type:"NUMBER",value:I}),e.push({name:"dx",type:"NUMBER",value:o}),e.push({name:"dy",type:"NUMBER",value:x}),e.push({name:"rrcurveto",type:"OP",value:8}),n=Math.round(A.x),a=Math.round(A.y)}}return e.push({name:"endchar",type:"OP",value:14}),e}function QE(r){for(var e=new Y.Record("CharStrings INDEX",[{name:"charStrings",type:"INDEX",value:[]}]),t=0;t<r.length;t+=1){var n=r.get(t),a=jE(n);e.charStrings.push({name:n.name,type:"CHARSTRING",value:a})}return e}function qE(r,e){var t=new Y.Record("Private DICT",[{name:"dict",type:"DICT",value:{}}]);return t.dict=CA(dA,r,e),t}function $E(r,e){for(var t=new Y.Table("CFF ",[{name:"header",type:"RECORD"},{name:"nameIndex",type:"RECORD"},{name:"topDictIndex",type:"RECORD"},{name:"stringIndex",type:"RECORD"},{name:"globalSubrIndex",type:"RECORD"},{name:"charsets",type:"RECORD"},{name:"charStringsIndex",type:"RECORD"},{name:"privateDict",type:"RECORD"}]),n=1/e.unitsPerEm,a={version:e.version,fullName:e.fullName,familyName:e.familyName,weight:e.weightName,fontBBox:e.fontBBox||[0,0,0,0],fontMatrix:[n,0,0,n,0,0],charset:999,encoding:0,charStrings:999,private:[0,999]},i={},o=[],x,A=1;A<r.length;A+=1)x=r.get(A),o.push(x.name);var E=[];t.header=JE(),t.nameIndex=_E([e.postScriptName]);var l=Mi(a,E);t.topDictIndex=Gi(l),t.globalSubrIndex=zE(),t.charsets=XE(o,E),t.charStringsIndex=QE(r),t.privateDict=qE(i,E),t.stringIndex=ZE(E);var c=t.header.sizeOf()+t.nameIndex.sizeOf()+t.topDictIndex.sizeOf()+t.stringIndex.sizeOf()+t.globalSubrIndex.sizeOf();return a.charset=c,a.encoding=0,a.charStrings=a.charset+t.charsets.sizeOf(),a.private[1]=a.charStrings+t.charStringsIndex.sizeOf(),l=Mi(a,E),t.topDictIndex=Gi(l),t}var uA={parse:VE,make:$E};function el(r,e){var t={},n=new b.Parser(r,e);return t.version=n.parseVersion(),t.fontRevision=Math.round(n.parseFixed()*1e3)/1e3,t.checkSumAdjustment=n.parseULong(),t.magicNumber=n.parseULong(),V.argument(t.magicNumber===1594834165,"Font header has wrong magic number."),t.flags=n.parseUShort(),t.unitsPerEm=n.parseUShort(),t.created=n.parseLongDateTime(),t.modified=n.parseLongDateTime(),t.xMin=n.parseShort(),t.yMin=n.parseShort(),t.xMax=n.parseShort(),t.yMax=n.parseShort(),t.macStyle=n.parseUShort(),t.lowestRecPPEM=n.parseUShort(),t.fontDirectionHint=n.parseShort(),t.indexToLocFormat=n.parseShort(),t.glyphDataFormat=n.parseShort(),t}function rl(r){var e=Math.round(new Date().getTime()/1e3)+2082844800,t=e;return r.createdTimestamp&&(t=r.createdTimestamp+2082844800),new Y.Table("head",[{name:"version",type:"FIXED",value:65536},{name:"fontRevision",type:"FIXED",value:65536},{name:"checkSumAdjustment",type:"ULONG",value:0},{name:"magicNumber",type:"ULONG",value:1594834165},{name:"flags",type:"USHORT",value:0},{name:"unitsPerEm",type:"USHORT",value:1e3},{name:"created",type:"LONGDATETIME",value:t},{name:"modified",type:"LONGDATETIME",value:e},{name:"xMin",type:"SHORT",value:0},{name:"yMin",type:"SHORT",value:0},{name:"xMax",type:"SHORT",value:0},{name:"yMax",type:"SHORT",value:0},{name:"macStyle",type:"USHORT",value:r.macStyle},{name:"lowestRecPPEM",type:"USHORT",value:0},{name:"fontDirectionHint",type:"SHORT",value:2},{name:"indexToLocFormat",type:"SHORT",value:0},{name:"glyphDataFormat",type:"SHORT",value:0}],r)}var RA={parse:el,make:rl};function tl(r,e){var t={},n=new b.Parser(r,e);return t.version=n.parseVersion(),t.ascender=n.parseShort(),t.descender=n.parseShort(),t.lineGap=n.parseShort(),t.advanceWidthMax=n.parseUShort(),t.minLeftSideBearing=n.parseShort(),t.minRightSideBearing=n.parseShort(),t.xMaxExtent=n.parseShort(),t.caretSlopeRise=n.parseShort(),t.caretSlopeRun=n.parseShort(),t.caretOffset=n.parseShort(),n.relativeOffset+=8,t.metricDataFormat=n.parseShort(),t.numberOfHMetrics=n.parseUShort(),t}function nl(r){return new Y.Table("hhea",[{name:"version",type:"FIXED",value:65536},{name:"ascender",type:"FWORD",value:0},{name:"descender",type:"FWORD",value:0},{name:"lineGap",type:"FWORD",value:0},{name:"advanceWidthMax",type:"UFWORD",value:0},{name:"minLeftSideBearing",type:"FWORD",value:0},{name:"minRightSideBearing",type:"FWORD",value:0},{name:"xMaxExtent",type:"FWORD",value:0},{name:"caretSlopeRise",type:"SHORT",value:1},{name:"caretSlopeRun",type:"SHORT",value:0},{name:"caretOffset",type:"SHORT",value:0},{name:"reserved1",type:"SHORT",value:0},{name:"reserved2",type:"SHORT",value:0},{name:"reserved3",type:"SHORT",value:0},{name:"reserved4",type:"SHORT",value:0},{name:"metricDataFormat",type:"SHORT",value:0},{name:"numberOfHMetrics",type:"USHORT",value:0}],r)}var gA={parse:tl,make:nl};function al(r,e,t,n,a){for(var i,o,x=new b.Parser(r,e),A=0;A<n;A+=1){A<t&&(i=x.parseUShort(),o=x.parseShort());var E=a.get(A);E.advanceWidth=i,E.leftSideBearing=o}}function il(r,e,t,n,a){r._hmtxTableData={};for(var i,o,x=new b.Parser(e,t),A=0;A<a;A+=1)A<n&&(i=x.parseUShort(),o=x.parseShort()),r._hmtxTableData[A]={advanceWidth:i,leftSideBearing:o}}function ol(r,e,t,n,a,i,o){o.lowMemory?il(r,e,t,n,a):al(e,t,n,a,i)}function Al(r){for(var e=new Y.Table("hmtx",[]),t=0;t<r.length;t+=1){var n=r.get(t),a=n.advanceWidth||0,i=n.leftSideBearing||0;e.fields.push({name:"advanceWidth_"+t,type:"USHORT",value:a}),e.fields.push({name:"leftSideBearing_"+t,type:"SHORT",value:i})}return e}var yA={parse:ol,make:Al};function xl(r){for(var e=new Y.Table("ltag",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"numTags",type:"ULONG",value:r.length}]),t="",n=12+r.length*4,a=0;a<r.length;++a){var i=t.indexOf(r[a]);i<0&&(i=t.length,t+=r[a]),e.fields.push({name:"offset "+a,type:"USHORT",value:n+i}),e.fields.push({name:"length "+a,type:"USHORT",value:r[a].length})}return e.fields.push({name:"stringPool",type:"CHARARRAY",value:t}),e}function El(r,e){var t=new b.Parser(r,e),n=t.parseULong();V.argument(n===1,"Unsupported ltag table version."),t.skip("uLong",1);for(var a=t.parseULong(),i=[],o=0;o<a;o++){for(var x="",A=e+t.parseUShort(),E=t.parseUShort(),l=A;l<A+E;++l)x+=String.fromCharCode(r.getInt8(l));i.push(x)}return i}var NA={make:xl,parse:El};function ll(r,e){var t={},n=new b.Parser(r,e);return t.version=n.parseVersion(),t.numGlyphs=n.parseUShort(),t.version===1&&(t.maxPoints=n.parseUShort(),t.maxContours=n.parseUShort(),t.maxCompositePoints=n.parseUShort(),t.maxCompositeContours=n.parseUShort(),t.maxZones=n.parseUShort(),t.maxTwilightPoints=n.parseUShort(),t.maxStorage=n.parseUShort(),t.maxFunctionDefs=n.parseUShort(),t.maxInstructionDefs=n.parseUShort(),t.maxStackElements=n.parseUShort(),t.maxSizeOfInstructions=n.parseUShort(),t.maxComponentElements=n.parseUShort(),t.maxComponentDepth=n.parseUShort()),t}function sl(r){return new Y.Table("maxp",[{name:"version",type:"FIXED",value:20480},{name:"numGlyphs",type:"USHORT",value:r}])}var DA={parse:ll,make:sl},mA=["copyright","fontFamily","fontSubfamily","uniqueID","fullName","version","postScriptName","trademark","manufacturer","designer","description","manufacturerURL","designerURL","license","licenseURL","reserved","preferredFamily","preferredSubfamily","compatibleFullName","sampleText","postScriptFindFontName","wwsFamily","wwsSubfamily"],OA={0:"en",1:"fr",2:"de",3:"it",4:"nl",5:"sv",6:"es",7:"da",8:"pt",9:"no",10:"he",11:"ja",12:"ar",13:"fi",14:"el",15:"is",16:"mt",17:"tr",18:"hr",19:"zh-Hant",20:"ur",21:"hi",22:"th",23:"ko",24:"lt",25:"pl",26:"hu",27:"es",28:"lv",29:"se",30:"fo",31:"fa",32:"ru",33:"zh",34:"nl-BE",35:"ga",36:"sq",37:"ro",38:"cz",39:"sk",40:"si",41:"yi",42:"sr",43:"mk",44:"bg",45:"uk",46:"be",47:"uz",48:"kk",49:"az-Cyrl",50:"az-Arab",51:"hy",52:"ka",53:"mo",54:"ky",55:"tg",56:"tk",57:"mn-CN",58:"mn",59:"ps",60:"ks",61:"ku",62:"sd",63:"bo",64:"ne",65:"sa",66:"mr",67:"bn",68:"as",69:"gu",70:"pa",71:"or",72:"ml",73:"kn",74:"ta",75:"te",76:"si",77:"my",78:"km",79:"lo",80:"vi",81:"id",82:"tl",83:"ms",84:"ms-Arab",85:"am",86:"ti",87:"om",88:"so",89:"sw",90:"rw",91:"rn",92:"ny",93:"mg",94:"eo",128:"cy",129:"eu",130:"ca",131:"la",132:"qu",133:"gn",134:"ay",135:"tt",136:"ug",137:"dz",138:"jv",139:"su",140:"gl",141:"af",142:"br",143:"iu",144:"gd",145:"gv",146:"ga",147:"to",148:"el-polyton",149:"kl",150:"az",151:"nn"},Ll={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:5,11:1,12:4,13:0,14:6,15:0,16:0,17:0,18:0,19:2,20:4,21:9,22:21,23:3,24:29,25:29,26:29,27:29,28:29,29:0,30:0,31:4,32:7,33:25,34:0,35:0,36:0,37:0,38:29,39:29,40:0,41:5,42:7,43:7,44:7,45:7,46:7,47:7,48:7,49:7,50:4,51:24,52:23,53:7,54:7,55:7,56:7,57:27,58:7,59:4,60:4,61:4,62:4,63:26,64:9,65:9,66:9,67:13,68:13,69:11,70:10,71:12,72:17,73:16,74:14,75:15,76:18,77:19,78:20,79:22,80:30,81:0,82:0,83:0,84:4,85:28,86:28,87:28,88:0,89:0,90:0,91:0,92:0,93:0,94:0,128:0,129:0,130:0,131:0,132:0,133:0,134:0,135:7,136:4,137:26,138:0,139:0,140:0,141:0,142:0,143:28,144:0,145:0,146:0,147:0,148:6,149:0,150:0,151:0},BA={1078:"af",1052:"sq",1156:"gsw",1118:"am",5121:"ar-DZ",15361:"ar-BH",3073:"ar",2049:"ar-IQ",11265:"ar-JO",13313:"ar-KW",12289:"ar-LB",4097:"ar-LY",6145:"ary",8193:"ar-OM",16385:"ar-QA",1025:"ar-SA",10241:"ar-SY",7169:"aeb",14337:"ar-AE",9217:"ar-YE",1067:"hy",1101:"as",2092:"az-Cyrl",1068:"az",1133:"ba",1069:"eu",1059:"be",2117:"bn",1093:"bn-IN",8218:"bs-Cyrl",5146:"bs",1150:"br",1026:"bg",1027:"ca",3076:"zh-HK",5124:"zh-MO",2052:"zh",4100:"zh-SG",1028:"zh-TW",1155:"co",1050:"hr",4122:"hr-BA",1029:"cs",1030:"da",1164:"prs",1125:"dv",2067:"nl-BE",1043:"nl",3081:"en-AU",10249:"en-BZ",4105:"en-CA",9225:"en-029",16393:"en-IN",6153:"en-IE",8201:"en-JM",17417:"en-MY",5129:"en-NZ",13321:"en-PH",18441:"en-SG",7177:"en-ZA",11273:"en-TT",2057:"en-GB",1033:"en",12297:"en-ZW",1061:"et",1080:"fo",1124:"fil",1035:"fi",2060:"fr-BE",3084:"fr-CA",1036:"fr",5132:"fr-LU",6156:"fr-MC",4108:"fr-CH",1122:"fy",1110:"gl",1079:"ka",3079:"de-AT",1031:"de",5127:"de-LI",4103:"de-LU",2055:"de-CH",1032:"el",1135:"kl",1095:"gu",1128:"ha",1037:"he",1081:"hi",1038:"hu",1039:"is",1136:"ig",1057:"id",1117:"iu",2141:"iu-Latn",2108:"ga",1076:"xh",1077:"zu",1040:"it",2064:"it-CH",1041:"ja",1099:"kn",1087:"kk",1107:"km",1158:"quc",1159:"rw",1089:"sw",1111:"kok",1042:"ko",1088:"ky",1108:"lo",1062:"lv",1063:"lt",2094:"dsb",1134:"lb",1071:"mk",2110:"ms-BN",1086:"ms",1100:"ml",1082:"mt",1153:"mi",1146:"arn",1102:"mr",1148:"moh",1104:"mn",2128:"mn-CN",1121:"ne",1044:"nb",2068:"nn",1154:"oc",1096:"or",1123:"ps",1045:"pl",1046:"pt",2070:"pt-PT",1094:"pa",1131:"qu-BO",2155:"qu-EC",3179:"qu",1048:"ro",1047:"rm",1049:"ru",9275:"smn",4155:"smj-NO",5179:"smj",3131:"se-FI",1083:"se",2107:"se-SE",8251:"sms",6203:"sma-NO",7227:"sms",1103:"sa",7194:"sr-Cyrl-BA",3098:"sr",6170:"sr-Latn-BA",2074:"sr-Latn",1132:"nso",1074:"tn",1115:"si",1051:"sk",1060:"sl",11274:"es-AR",16394:"es-BO",13322:"es-CL",9226:"es-CO",5130:"es-CR",7178:"es-DO",12298:"es-EC",17418:"es-SV",4106:"es-GT",18442:"es-HN",2058:"es-MX",19466:"es-NI",6154:"es-PA",15370:"es-PY",10250:"es-PE",20490:"es-PR",3082:"es",1034:"es",21514:"es-US",14346:"es-UY",8202:"es-VE",2077:"sv-FI",1053:"sv",1114:"syr",1064:"tg",2143:"tzm",1097:"ta",1092:"tt",1098:"te",1054:"th",1105:"bo",1055:"tr",1090:"tk",1152:"ug",1058:"uk",1070:"hsb",1056:"ur",2115:"uz-Cyrl",1091:"uz",1066:"vi",1106:"cy",1160:"wo",1157:"sah",1144:"ii",1130:"yo"};function cl(r,e,t){switch(r){case 0:if(e===65535)return"und";if(t)return t[e];break;case 1:return OA[e];case 3:return BA[e]}}var I0="utf-16",Tl={0:"macintosh",1:"x-mac-japanese",2:"x-mac-chinesetrad",3:"x-mac-korean",6:"x-mac-greek",7:"x-mac-cyrillic",9:"x-mac-devanagai",10:"x-mac-gurmukhi",11:"x-mac-gujarati",12:"x-mac-oriya",13:"x-mac-bengali",14:"x-mac-tamil",15:"x-mac-telugu",16:"x-mac-kannada",17:"x-mac-malayalam",18:"x-mac-sinhalese",19:"x-mac-burmese",20:"x-mac-khmer",21:"x-mac-thai",22:"x-mac-lao",23:"x-mac-georgian",24:"x-mac-armenian",25:"x-mac-chinesesimp",26:"x-mac-tibetan",27:"x-mac-mongolian",28:"x-mac-ethiopic",29:"x-mac-ce",30:"x-mac-vietnamese",31:"x-mac-extarabic"},hl={15:"x-mac-icelandic",17:"x-mac-turkish",18:"x-mac-croatian",24:"x-mac-ce",25:"x-mac-ce",26:"x-mac-ce",27:"x-mac-ce",28:"x-mac-ce",30:"x-mac-icelandic",37:"x-mac-romanian",38:"x-mac-ce",39:"x-mac-ce",40:"x-mac-ce",143:"x-mac-inuit",146:"x-mac-gaelic"};function HA(r,e,t){switch(r){case 0:return I0;case 1:return hl[t]||Tl[e];case 3:if(e===1||e===10)return I0;break}}function Il(r,e,t){for(var n={},a=new b.Parser(r,e),i=a.parseUShort(),o=a.parseUShort(),x=a.offset+a.parseUShort(),A=0;A<o;A++){var E=a.parseUShort(),l=a.parseUShort(),c=a.parseUShort(),L=a.parseUShort(),T=mA[L]||L,I=a.parseUShort(),d=a.parseUShort(),p=cl(E,c,t),S=HA(E,l,c);if(S!==void 0&&p!==void 0){var u=void 0;if(S===I0?u=Gt.UTF16(r,x+d,I):u=Gt.MACSTRING(r,x+d,I,S),u){var y=n[T];y===void 0&&(y=n[T]={}),y[p]=u}}}return i===1&&a.parseUShort(),n}function wa(r){var e={};for(var t in r)e[r[t]]=parseInt(t);return e}function Pi(r,e,t,n,a,i){return new Y.Record("NameRecord",[{name:"platformID",type:"USHORT",value:r},{name:"encodingID",type:"USHORT",value:e},{name:"languageID",type:"USHORT",value:t},{name:"nameID",type:"USHORT",value:n},{name:"length",type:"USHORT",value:a},{name:"offset",type:"USHORT",value:i}])}function dl(r,e){var t=r.length,n=e.length-t+1;e:for(var a=0;a<n;a++)for(;a<n;a++){for(var i=0;i<t;i++)if(e[a+i]!==r[i])continue e;return a}return-1}function bi(r,e){var t=dl(r,e);if(t<0){t=e.length;for(var n=0,a=r.length;n<a;++n)e.push(r[n])}return t}function pl(r,e){var t,n=[],a={},i=wa(mA);for(var o in r){var x=i[o];if(x===void 0&&(x=o),t=parseInt(x),isNaN(t))throw new Error('Name table entry "'+o+'" does not exist, see nameTableNames for complete list.');a[t]=r[o],n.push(t)}for(var A=wa(OA),E=wa(BA),l=[],c=[],L=0;L<n.length;L++){t=n[L];var T=a[t];for(var I in T){var d=T[I],p=1,S=A[I],u=Ll[S],y=HA(p,u,S),G=f.MACSTRING(d,y);G===void 0&&(p=0,S=e.indexOf(I),S<0&&(S=e.length,e.push(I)),u=4,G=f.UTF16(d));var m=bi(G,c);l.push(Pi(p,u,S,t,G.length,m));var D=E[I];if(D!==void 0){var H=f.UTF16(d),v=bi(H,c);l.push(Pi(3,1,D,t,H.length,v))}}}l.sort(function(X,Ie){return X.platformID-Ie.platformID||X.encodingID-Ie.encodingID||X.languageID-Ie.languageID||X.nameID-Ie.nameID});for(var J=new Y.Table("name",[{name:"format",type:"USHORT",value:0},{name:"count",type:"USHORT",value:l.length},{name:"stringOffset",type:"USHORT",value:6+l.length*12}]),Q=0;Q<l.length;Q++)J.fields.push({name:"record_"+Q,type:"RECORD",value:l[Q]});return J.fields.push({name:"strings",type:"LITERAL",value:c}),J}var FA={parse:Il,make:pl},d0=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}];function Sl(r){for(var e=0;e<d0.length;e+=1){var t=d0[e];if(r>=t.begin&&r<t.end)return e}return-1}function Cl(r,e){var t={},n=new b.Parser(r,e);t.version=n.parseUShort(),t.xAvgCharWidth=n.parseShort(),t.usWeightClass=n.parseUShort(),t.usWidthClass=n.parseUShort(),t.fsType=n.parseUShort(),t.ySubscriptXSize=n.parseShort(),t.ySubscriptYSize=n.parseShort(),t.ySubscriptXOffset=n.parseShort(),t.ySubscriptYOffset=n.parseShort(),t.ySuperscriptXSize=n.parseShort(),t.ySuperscriptYSize=n.parseShort(),t.ySuperscriptXOffset=n.parseShort(),t.ySuperscriptYOffset=n.parseShort(),t.yStrikeoutSize=n.parseShort(),t.yStrikeoutPosition=n.parseShort(),t.sFamilyClass=n.parseShort(),t.panose=[];for(var a=0;a<10;a++)t.panose[a]=n.parseByte();return t.ulUnicodeRange1=n.parseULong(),t.ulUnicodeRange2=n.parseULong(),t.ulUnicodeRange3=n.parseULong(),t.ulUnicodeRange4=n.parseULong(),t.achVendID=String.fromCharCode(n.parseByte(),n.parseByte(),n.parseByte(),n.parseByte()),t.fsSelection=n.parseUShort(),t.usFirstCharIndex=n.parseUShort(),t.usLastCharIndex=n.parseUShort(),t.sTypoAscender=n.parseShort(),t.sTypoDescender=n.parseShort(),t.sTypoLineGap=n.parseShort(),t.usWinAscent=n.parseUShort(),t.usWinDescent=n.parseUShort(),t.version>=1&&(t.ulCodePageRange1=n.parseULong(),t.ulCodePageRange2=n.parseULong()),t.version>=2&&(t.sxHeight=n.parseShort(),t.sCapHeight=n.parseShort(),t.usDefaultChar=n.parseUShort(),t.usBreakChar=n.parseUShort(),t.usMaxContent=n.parseUShort()),t}function ul(r){return new Y.Table("OS/2",[{name:"version",type:"USHORT",value:3},{name:"xAvgCharWidth",type:"SHORT",value:0},{name:"usWeightClass",type:"USHORT",value:0},{name:"usWidthClass",type:"USHORT",value:0},{name:"fsType",type:"USHORT",value:0},{name:"ySubscriptXSize",type:"SHORT",value:650},{name:"ySubscriptYSize",type:"SHORT",value:699},{name:"ySubscriptXOffset",type:"SHORT",value:0},{name:"ySubscriptYOffset",type:"SHORT",value:140},{name:"ySuperscriptXSize",type:"SHORT",value:650},{name:"ySuperscriptYSize",type:"SHORT",value:699},{name:"ySuperscriptXOffset",type:"SHORT",value:0},{name:"ySuperscriptYOffset",type:"SHORT",value:479},{name:"yStrikeoutSize",type:"SHORT",value:49},{name:"yStrikeoutPosition",type:"SHORT",value:258},{name:"sFamilyClass",type:"SHORT",value:0},{name:"bFamilyType",type:"BYTE",value:0},{name:"bSerifStyle",type:"BYTE",value:0},{name:"bWeight",type:"BYTE",value:0},{name:"bProportion",type:"BYTE",value:0},{name:"bContrast",type:"BYTE",value:0},{name:"bStrokeVariation",type:"BYTE",value:0},{name:"bArmStyle",type:"BYTE",value:0},{name:"bLetterform",type:"BYTE",value:0},{name:"bMidline",type:"BYTE",value:0},{name:"bXHeight",type:"BYTE",value:0},{name:"ulUnicodeRange1",type:"ULONG",value:0},{name:"ulUnicodeRange2",type:"ULONG",value:0},{name:"ulUnicodeRange3",type:"ULONG",value:0},{name:"ulUnicodeRange4",type:"ULONG",value:0},{name:"achVendID",type:"CHARARRAY",value:"XXXX"},{name:"fsSelection",type:"USHORT",value:0},{name:"usFirstCharIndex",type:"USHORT",value:0},{name:"usLastCharIndex",type:"USHORT",value:0},{name:"sTypoAscender",type:"SHORT",value:0},{name:"sTypoDescender",type:"SHORT",value:0},{name:"sTypoLineGap",type:"SHORT",value:0},{name:"usWinAscent",type:"USHORT",value:0},{name:"usWinDescent",type:"USHORT",value:0},{name:"ulCodePageRange1",type:"ULONG",value:0},{name:"ulCodePageRange2",type:"ULONG",value:0},{name:"sxHeight",type:"SHORT",value:0},{name:"sCapHeight",type:"SHORT",value:0},{name:"usDefaultChar",type:"USHORT",value:0},{name:"usBreakChar",type:"USHORT",value:0},{name:"usMaxContext",type:"USHORT",value:0}],r)}var p0={parse:Cl,make:ul,unicodeRanges:d0,getUnicodeRange:Sl};function Rl(r,e){var t={},n=new b.Parser(r,e);switch(t.version=n.parseVersion(),t.italicAngle=n.parseFixed(),t.underlinePosition=n.parseShort(),t.underlineThickness=n.parseShort(),t.isFixedPitch=n.parseULong(),t.minMemType42=n.parseULong(),t.maxMemType42=n.parseULong(),t.minMemType1=n.parseULong(),t.maxMemType1=n.parseULong(),t.version){case 1:t.names=xt.slice();break;case 2:t.numberOfGlyphs=n.parseUShort(),t.glyphNameIndex=new Array(t.numberOfGlyphs);for(var a=0;a<t.numberOfGlyphs;a++)t.glyphNameIndex[a]=n.parseUShort();t.names=[];for(var i=0;i<t.numberOfGlyphs;i++)if(t.glyphNameIndex[i]>=xt.length){var o=n.parseChar();t.names.push(n.parseString(o))}break;case 2.5:t.numberOfGlyphs=n.parseUShort(),t.offset=new Array(t.numberOfGlyphs);for(var x=0;x<t.numberOfGlyphs;x++)t.offset[x]=n.parseChar();break}return t}function gl(r){return new Y.Table("post",[{name:"version",type:"FIXED",value:196608},{name:"italicAngle",type:"FIXED",value:Math.round(r.italicAngle*65536)},{name:"underlinePosition",type:"FWORD",value:0},{name:"underlineThickness",type:"FWORD",value:0},{name:"isFixedPitch",type:"ULONG",value:0},{name:"minMemType42",type:"ULONG",value:0},{name:"maxMemType42",type:"ULONG",value:0},{name:"minMemType1",type:"ULONG",value:0},{name:"maxMemType1",type:"ULONG",value:0}])}var fA={parse:Rl,make:gl},Lr=new Array(9);Lr[1]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:1,coverage:this.parsePointer(C.coverage),deltaGlyphId:this.parseUShort()};if(t===2)return{substFormat:2,coverage:this.parsePointer(C.coverage),substitute:this.parseOffset16List()};V.assert(!1,"0x"+e.toString(16)+": lookup type 1 format must be 1 or 2.")};Lr[2]=function(){var e=this.parseUShort();return V.argument(e===1,"GSUB Multiple Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(C.coverage),sequences:this.parseListOfLists()}};Lr[3]=function(){var e=this.parseUShort();return V.argument(e===1,"GSUB Alternate Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(C.coverage),alternateSets:this.parseListOfLists()}};Lr[4]=function(){var e=this.parseUShort();return V.argument(e===1,"GSUB ligature table identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(C.coverage),ligatureSets:this.parseListOfLists(function(){return{ligGlyph:this.parseUShort(),components:this.parseUShortList(this.parseUShort()-1)}})}};var Bt={sequenceIndex:C.uShort,lookupListIndex:C.uShort};Lr[5]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:t,coverage:this.parsePointer(C.coverage),ruleSets:this.parseListOfLists(function(){var i=this.parseUShort(),o=this.parseUShort();return{input:this.parseUShortList(i-1),lookupRecords:this.parseRecordList(o,Bt)}})};if(t===2)return{substFormat:t,coverage:this.parsePointer(C.coverage),classDef:this.parsePointer(C.classDef),classSets:this.parseListOfLists(function(){var i=this.parseUShort(),o=this.parseUShort();return{classes:this.parseUShortList(i-1),lookupRecords:this.parseRecordList(o,Bt)}})};if(t===3){var n=this.parseUShort(),a=this.parseUShort();return{substFormat:t,coverages:this.parseList(n,C.pointer(C.coverage)),lookupRecords:this.parseRecordList(a,Bt)}}V.assert(!1,"0x"+e.toString(16)+": lookup type 5 format must be 1, 2 or 3.")};Lr[6]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:1,coverage:this.parsePointer(C.coverage),chainRuleSets:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(Bt)}})};if(t===2)return{substFormat:2,coverage:this.parsePointer(C.coverage),backtrackClassDef:this.parsePointer(C.classDef),inputClassDef:this.parsePointer(C.classDef),lookaheadClassDef:this.parsePointer(C.classDef),chainClassSet:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(Bt)}})};if(t===3)return{substFormat:3,backtrackCoverage:this.parseList(C.pointer(C.coverage)),inputCoverage:this.parseList(C.pointer(C.coverage)),lookaheadCoverage:this.parseList(C.pointer(C.coverage)),lookupRecords:this.parseRecordList(Bt)};V.assert(!1,"0x"+e.toString(16)+": lookup type 6 format must be 1, 2 or 3.")};Lr[7]=function(){var e=this.parseUShort();V.argument(e===1,"GSUB Extension Substitution subtable identifier-format must be 1");var t=this.parseUShort(),n=new C(this.data,this.offset+this.parseULong());return{substFormat:1,lookupType:t,extension:Lr[t].call(n)}};Lr[8]=function(){var e=this.parseUShort();return V.argument(e===1,"GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(C.coverage),backtrackCoverage:this.parseList(C.pointer(C.coverage)),lookaheadCoverage:this.parseList(C.pointer(C.coverage)),substitutes:this.parseUShortList()}};function yl(r,e){e=e||0;var t=new C(r,e),n=t.parseVersion(1);return V.argument(n===1||n===1.1,"Unsupported GSUB table version."),n===1?{version:n,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(Lr)}:{version:n,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(Lr),variations:t.parseFeatureVariationsList()}}var ua=new Array(9);ua[1]=function(e){return e.substFormat===1?new Y.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new Y.Coverage(e.coverage)},{name:"deltaGlyphID",type:"USHORT",value:e.deltaGlyphId}]):new Y.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:2},{name:"coverage",type:"TABLE",value:new Y.Coverage(e.coverage)}].concat(Y.ushortList("substitute",e.substitute)))};ua[3]=function(e){return V.assert(e.substFormat===1,"Lookup type 3 substFormat must be 1."),new Y.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new Y.Coverage(e.coverage)}].concat(Y.tableList("altSet",e.alternateSets,function(t){return new Y.Table("alternateSetTable",Y.ushortList("alternate",t))})))};ua[4]=function(e){return V.assert(e.substFormat===1,"Lookup type 4 substFormat must be 1."),new Y.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new Y.Coverage(e.coverage)}].concat(Y.tableList("ligSet",e.ligatureSets,function(t){return new Y.Table("ligatureSetTable",Y.tableList("ligature",t,function(n){return new Y.Table("ligatureTable",[{name:"ligGlyph",type:"USHORT",value:n.ligGlyph}].concat(Y.ushortList("component",n.components,n.components.length+1)))}))})))};function Nl(r){return new Y.Table("GSUB",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new Y.ScriptList(r.scripts)},{name:"features",type:"TABLE",value:new Y.FeatureList(r.features)},{name:"lookups",type:"TABLE",value:new Y.LookupList(r.lookups,ua)}])}var MA={parse:yl,make:Nl};function Dl(r,e){var t=new b.Parser(r,e),n=t.parseULong();V.argument(n===1,"Unsupported META table version."),t.parseULong(),t.parseULong();for(var a=t.parseULong(),i={},o=0;o<a;o++){var x=t.parseTag(),A=t.parseULong(),E=t.parseULong(),l=Gt.UTF8(r,e+A,E);i[x]=l}return i}function ml(r){var e=Object.keys(r).length,t="",n=16+e*12,a=new Y.Table("meta",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"offset",type:"ULONG",value:n},{name:"numTags",type:"ULONG",value:e}]);for(var i in r){var o=t.length;t+=r[i],a.fields.push({name:"tag "+i,type:"TAG",value:i}),a.fields.push({name:"offset "+i,type:"ULONG",value:n+o}),a.fields.push({name:"length "+i,type:"ULONG",value:r[i].length})}return a.fields.push({name:"stringPool",type:"CHARARRAY",value:t}),a}var GA={parse:Dl,make:ml};function Ui(r){return Math.log(r)/Math.log(2)|0}function z0(r){for(;r.length%4!==0;)r.push(0);for(var e=0,t=0;t<r.length;t+=4)e+=(r[t]<<24)+(r[t+1]<<16)+(r[t+2]<<8)+r[t+3];return e%=Math.pow(2,32),e}function vi(r,e,t,n){return new Y.Record("Table Record",[{name:"tag",type:"TAG",value:r!==void 0?r:""},{name:"checkSum",type:"ULONG",value:e!==void 0?e:0},{name:"offset",type:"ULONG",value:t!==void 0?t:0},{name:"length",type:"ULONG",value:n!==void 0?n:0}])}function PA(r){var e=new Y.Table("sfnt",[{name:"version",type:"TAG",value:"OTTO"},{name:"numTables",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);e.tables=r,e.numTables=r.length;var t=Math.pow(2,Ui(e.numTables));e.searchRange=16*t,e.entrySelector=Ui(t),e.rangeShift=e.numTables*16-e.searchRange;for(var n=[],a=[],i=e.sizeOf()+vi().sizeOf()*e.numTables;i%4!==0;)i+=1,a.push({name:"padding",type:"BYTE",value:0});for(var o=0;o<r.length;o+=1){var x=r[o];V.argument(x.tableName.length===4,"Table name"+x.tableName+" is invalid.");var A=x.sizeOf(),E=vi(x.tableName,z0(x.encode()),i,A);for(n.push({name:E.tag+" Table Record",type:"RECORD",value:E}),a.push({name:x.tableName+" table",type:"RECORD",value:x}),i+=A,V.argument(!isNaN(i),"Something went wrong calculating the offset.");i%4!==0;)i+=1,a.push({name:"padding",type:"BYTE",value:0})}return n.sort(function(l,c){return l.value.tag>c.value.tag?1:-1}),e.fields=e.fields.concat(n),e.fields=e.fields.concat(a),e}function Yi(r,e,t){for(var n=0;n<e.length;n+=1){var a=r.charToGlyphIndex(e[n]);if(a>0){var i=r.glyphs.get(a);return i.getMetrics()}}return t}function Ol(r){for(var e=0,t=0;t<r.length;t+=1)e+=r[t];return e/r.length}function Bl(r){for(var e=[],t=[],n=[],a=[],i=[],o=[],x=[],A,E=0,l=0,c=0,L=0,T=0,I=0;I<r.glyphs.length;I+=1){var d=r.glyphs.get(I),p=d.unicode|0;if(isNaN(d.advanceWidth))throw new Error("Glyph "+d.name+" ("+I+"): advanceWidth is not a number.");(A>p||A===void 0)&&p>0&&(A=p),E<p&&(E=p);var S=p0.getUnicodeRange(p);if(S<32)l|=1<<S;else if(S<64)c|=1<<S-32;else if(S<96)L|=1<<S-64;else if(S<123)T|=1<<S-96;else throw new Error("Unicode ranges bits > 123 are reserved for internal usage");if(d.name!==".notdef"){var u=d.getMetrics();e.push(u.xMin),t.push(u.yMin),n.push(u.xMax),a.push(u.yMax),o.push(u.leftSideBearing),x.push(u.rightSideBearing),i.push(d.advanceWidth)}}var y={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,t),xMax:Math.max.apply(null,n),yMax:Math.max.apply(null,a),advanceWidthMax:Math.max.apply(null,i),advanceWidthAvg:Ol(i),minLeftSideBearing:Math.min.apply(null,o),maxLeftSideBearing:Math.max.apply(null,o),minRightSideBearing:Math.min.apply(null,x)};y.ascender=r.ascender,y.descender=r.descender;var G=0;r.italicAngle<0&&(G|=2),r.weightClass>=600&&(G|=1);var m=RA.make({flags:3,unitsPerEm:r.unitsPerEm,xMin:y.xMin,yMin:y.yMin,xMax:y.xMax,yMax:y.yMax,lowestRecPPEM:3,macStyle:G,createdTimestamp:r.createdTimestamp}),D=gA.make({ascender:y.ascender,descender:y.descender,advanceWidthMax:y.advanceWidthMax,minLeftSideBearing:y.minLeftSideBearing,minRightSideBearing:y.minRightSideBearing,xMaxExtent:y.maxLeftSideBearing+(y.xMax-y.xMin),numberOfHMetrics:r.glyphs.length,slope:r.slope}),H=DA.make(r.glyphs.length),v=p0.make(Object.assign({xAvgCharWidth:Math.round(y.advanceWidthAvg),usFirstCharIndex:A,usLastCharIndex:E,ulUnicodeRange1:l,ulUnicodeRange2:c,ulUnicodeRange3:L,ulUnicodeRange4:T,sTypoAscender:y.ascender,sTypoDescender:y.descender,sTypoLineGap:0,usWinAscent:y.yMax,usWinDescent:Math.abs(y.yMin),ulCodePageRange1:1,sxHeight:Yi(r,"xyvw",{yMax:Math.round(y.ascender/2)}).yMax,sCapHeight:Yi(r,"HIKLEFJMNTZBDPRAGOQSUVWXY",y).yMax,usDefaultChar:r.hasChar(" ")?32:0,usBreakChar:r.hasChar(" ")?32:0},r.tables.os2)),J=yA.make(r.glyphs),Q=lA.make(r.glyphs),X=r.getEnglishName("fontFamily"),Ie=r.getEnglishName("fontSubfamily"),Ye=X+" "+Ie,ge=r.getEnglishName("postScriptName");ge||(ge=X.replace(/\s/g,"")+"-"+Ie);var te={};for(var ye in r.names)te[ye]=r.names[ye];te.uniqueID||(te.uniqueID={en:r.getEnglishName("manufacturer")+":"+Ye}),te.postScriptName||(te.postScriptName={en:ge}),te.preferredFamily||(te.preferredFamily=r.names.fontFamily),te.preferredSubfamily||(te.preferredSubfamily=r.names.fontSubfamily);var Te=[],Ce=FA.make(te,Te),He=Te.length>0?NA.make(Te):void 0,$e=fA.make(r),Ne=uA.make(r.glyphs,{version:r.getEnglishName("version"),fullName:Ye,familyName:X,weightName:Ie,postScriptName:ge,unitsPerEm:r.unitsPerEm,fontBBox:[0,y.yMin,y.ascender,y.advanceWidthMax]}),ke=r.metas&&Object.keys(r.metas).length>0?GA.make(r.metas):void 0,fn=[m,D,H,v,Ce,Q,$e,Ne,J];He&&fn.push(He),r.tables.gsub&&fn.push(MA.make(r.tables.gsub)),ke&&fn.push(ke);for(var ba=PA(fn),fx=ba.encode(),Mx=z0(fx),Ua=ba.fields,Si=!1,Mn=0;Mn<Ua.length;Mn+=1)if(Ua[Mn].name==="head table"){Ua[Mn].value.checkSumAdjustment=2981146554-Mx,Si=!0;break}if(!Si)throw new Error("Could not find head table with checkSum to adjust.");return ba}var Hl={make:PA,fontToTable:Bl,computeCheckSum:z0};function Wa(r,e){for(var t=0,n=r.length-1;t<=n;){var a=t+n>>>1,i=r[a].tag;if(i===e)return a;i<e?t=a+1:n=a-1}return-t-1}function wi(r,e){for(var t=0,n=r.length-1;t<=n;){var a=t+n>>>1,i=r[a];if(i===e)return a;i<e?t=a+1:n=a-1}return-t-1}function Wi(r,e){for(var t,n=0,a=r.length-1;n<=a;){var i=n+a>>>1;t=r[i];var o=t.start;if(o===e)return t;o<e?n=i+1:a=i-1}if(n>0)return t=r[n-1],e>t.end?0:t}function pn(r,e){this.font=r,this.tableName=e}pn.prototype={searchTag:Wa,binSearch:wi,getTable:function(r){var e=this.font.tables[this.tableName];return!e&&r&&(e=this.font.tables[this.tableName]=this.createDefaultTable()),e},getScriptNames:function(){var r=this.getTable();return r?r.scripts.map(function(e){return e.tag}):[]},getDefaultScriptName:function(){var r=this.getTable();if(r){for(var e=!1,t=0;t<r.scripts.length;t++){var n=r.scripts[t].tag;if(n==="DFLT")return n;n==="latn"&&(e=!0)}if(e)return"latn"}},getScriptTable:function(r,e){var t=this.getTable(e);if(t){r=r||"DFLT";var n=t.scripts,a=Wa(t.scripts,r);if(a>=0)return n[a].script;if(e){var i={tag:r,script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}};return n.splice(-1-a,0,i),i.script}}},getLangSysTable:function(r,e,t){var n=this.getScriptTable(r,t);if(n){if(!e||e==="dflt"||e==="DFLT")return n.defaultLangSys;var a=Wa(n.langSysRecords,e);if(a>=0)return n.langSysRecords[a].langSys;if(t){var i={tag:e,langSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]}};return n.langSysRecords.splice(-1-a,0,i),i.langSys}}},getFeatureTable:function(r,e,t,n){var a=this.getLangSysTable(r,e,n);if(a){for(var i,o=a.featureIndexes,x=this.font.tables[this.tableName].features,A=0;A<o.length;A++)if(i=x[o[A]],i.tag===t)return i.feature;if(n){var E=x.length;return V.assert(E===0||t>=x[E-1].tag,"Features must be added in alphabetical order."),i={tag:t,feature:{params:0,lookupListIndexes:[]}},x.push(i),o.push(E),i.feature}}},getLookupTables:function(r,e,t,n,a){var i=this.getFeatureTable(r,e,t,a),o=[];if(i){for(var x,A=i.lookupListIndexes,E=this.font.tables[this.tableName].lookups,l=0;l<A.length;l++)x=E[A[l]],x.lookupType===n&&o.push(x);if(o.length===0&&a){x={lookupType:n,lookupFlag:0,subtables:[],markFilteringSet:void 0};var c=E.length;return E.push(x),A.push(c),[x]}}return o},getGlyphClass:function(r,e){switch(r.format){case 1:return r.startGlyph<=e&&e<r.startGlyph+r.classes.length?r.classes[e-r.startGlyph]:0;case 2:var t=Wi(r.ranges,e);return t?t.classId:0}},getCoverageIndex:function(r,e){switch(r.format){case 1:var t=wi(r.glyphs,e);return t>=0?t:-1;case 2:var n=Wi(r.ranges,e);return n?n.index+e-n.start:-1}},expandCoverage:function(r){if(r.format===1)return r.glyphs;for(var e=[],t=r.ranges,n=0;n<t.length;n++)for(var a=t[n],i=a.start,o=a.end,x=i;x<=o;x++)e.push(x);return e}};function Sn(r){pn.call(this,r,"gpos")}Sn.prototype=pn.prototype;Sn.prototype.init=function(){var r=this.getDefaultScriptName();this.defaultKerningTables=this.getKerningTables(r)};Sn.prototype.getKerningValue=function(r,e,t){for(var n=0;n<r.length;n++)for(var a=r[n].subtables,i=0;i<a.length;i++){var o=a[i],x=this.getCoverageIndex(o.coverage,e);if(!(x<0))switch(o.posFormat){case 1:for(var A=o.pairSets[x],E=0;E<A.length;E++){var l=A[E];if(l.secondGlyph===t)return l.value1&&l.value1.xAdvance||0}break;case 2:var c=this.getGlyphClass(o.classDef1,e),L=this.getGlyphClass(o.classDef2,t),T=o.classRecords[c][L];return T.value1&&T.value1.xAdvance||0}}return 0};Sn.prototype.getKerningTables=function(r,e){if(this.font.tables.gpos)return this.getLookupTables(r,e,"kern",2)};function Ir(r){pn.call(this,r,"gsub")}function Fl(r,e){var t=r.length;if(t!==e.length)return!1;for(var n=0;n<t;n++)if(r[n]!==e[n])return!1;return!0}function bA(r,e,t){for(var n=r.subtables,a=0;a<n.length;a++){var i=n[a];if(i.substFormat===e)return i}if(t)return n.push(t),t}Ir.prototype=pn.prototype;Ir.prototype.createDefaultTable=function(){return{version:1,scripts:[{tag:"DFLT",script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}}],features:[],lookups:[]}};Ir.prototype.getSingle=function(r,e,t){for(var n=[],a=this.getLookupTables(e,t,r,1),i=0;i<a.length;i++)for(var o=a[i].subtables,x=0;x<o.length;x++){var A=o[x],E=this.expandCoverage(A.coverage),l=void 0;if(A.substFormat===1){var c=A.deltaGlyphId;for(l=0;l<E.length;l++){var L=E[l];n.push({sub:L,by:L+c})}}else{var T=A.substitute;for(l=0;l<E.length;l++)n.push({sub:E[l],by:T[l]})}}return n};Ir.prototype.getAlternates=function(r,e,t){for(var n=[],a=this.getLookupTables(e,t,r,3),i=0;i<a.length;i++)for(var o=a[i].subtables,x=0;x<o.length;x++)for(var A=o[x],E=this.expandCoverage(A.coverage),l=A.alternateSets,c=0;c<E.length;c++)n.push({sub:E[c],by:l[c]});return n};Ir.prototype.getLigatures=function(r,e,t){for(var n=[],a=this.getLookupTables(e,t,r,4),i=0;i<a.length;i++)for(var o=a[i].subtables,x=0;x<o.length;x++)for(var A=o[x],E=this.expandCoverage(A.coverage),l=A.ligatureSets,c=0;c<E.length;c++)for(var L=E[c],T=l[c],I=0;I<T.length;I++){var d=T[I];n.push({sub:[L].concat(d.components),by:d.ligGlyph})}return n};Ir.prototype.addSingle=function(r,e,t,n){var a=this.getLookupTables(t,n,r,1,!0)[0],i=bA(a,2,{substFormat:2,coverage:{format:1,glyphs:[]},substitute:[]});V.assert(i.coverage.format===1,"Ligature: unable to modify coverage table format "+i.coverage.format);var o=e.sub,x=this.binSearch(i.coverage.glyphs,o);x<0&&(x=-1-x,i.coverage.glyphs.splice(x,0,o),i.substitute.splice(x,0,0)),i.substitute[x]=e.by};Ir.prototype.addAlternate=function(r,e,t,n){var a=this.getLookupTables(t,n,r,3,!0)[0],i=bA(a,1,{substFormat:1,coverage:{format:1,glyphs:[]},alternateSets:[]});V.assert(i.coverage.format===1,"Ligature: unable to modify coverage table format "+i.coverage.format);var o=e.sub,x=this.binSearch(i.coverage.glyphs,o);x<0&&(x=-1-x,i.coverage.glyphs.splice(x,0,o),i.alternateSets.splice(x,0,0)),i.alternateSets[x]=e.by};Ir.prototype.addLigature=function(r,e,t,n){var a=this.getLookupTables(t,n,r,4,!0)[0],i=a.subtables[0];i||(i={substFormat:1,coverage:{format:1,glyphs:[]},ligatureSets:[]},a.subtables[0]=i),V.assert(i.coverage.format===1,"Ligature: unable to modify coverage table format "+i.coverage.format);var o=e.sub[0],x=e.sub.slice(1),A={ligGlyph:e.by,components:x},E=this.binSearch(i.coverage.glyphs,o);if(E>=0){for(var l=i.ligatureSets[E],c=0;c<l.length;c++)if(Fl(l[c].components,x))return;l.push(A)}else E=-1-E,i.coverage.glyphs.splice(E,0,o),i.ligatureSets.splice(E,0,[A])};Ir.prototype.getFeature=function(r,e,t){if(/ss\d\d/.test(r))return this.getSingle(r,e,t);switch(r){case"aalt":case"salt":return this.getSingle(r,e,t).concat(this.getAlternates(r,e,t));case"dlig":case"liga":case"rlig":return this.getLigatures(r,e,t)}};Ir.prototype.add=function(r,e,t,n){if(/ss\d\d/.test(r))return this.addSingle(r,e,t,n);switch(r){case"aalt":case"salt":return typeof e.by=="number"?this.addSingle(r,e,t,n):this.addAlternate(r,e,t,n);case"dlig":case"liga":case"rlig":return this.addLigature(r,e,t,n)}};function fl(){return typeof window<"u"}function UA(r){for(var e=new ArrayBuffer(r.length),t=new Uint8Array(e),n=0;n<r.length;++n)t[n]=r[n];return e}function Ml(r){for(var e=new Buffer(r.byteLength),t=new Uint8Array(r),n=0;n<e.length;++n)e[n]=t[n];return e}function _t(r,e){if(!r)throw e}function ki(r,e,t,n,a){var i;return(e&n)>0?(i=r.parseByte(),e&a||(i=-i),i=t+i):(e&a)>0?i=t:i=t+r.parseShort(),i}function vA(r,e,t){var n=new b.Parser(e,t);r.numberOfContours=n.parseShort(),r._xMin=n.parseShort(),r._yMin=n.parseShort(),r._xMax=n.parseShort(),r._yMax=n.parseShort();var a,i;if(r.numberOfContours>0){for(var o=r.endPointIndices=[],x=0;x<r.numberOfContours;x+=1)o.push(n.parseUShort());r.instructionLength=n.parseUShort(),r.instructions=[];for(var A=0;A<r.instructionLength;A+=1)r.instructions.push(n.parseByte());var E=o[o.length-1]+1;a=[];for(var l=0;l<E;l+=1)if(i=n.parseByte(),a.push(i),(i&8)>0)for(var c=n.parseByte(),L=0;L<c;L+=1)a.push(i),l+=1;if(V.argument(a.length===E,"Bad flags."),o.length>0){var T=[],I;if(E>0){for(var d=0;d<E;d+=1)i=a[d],I={},I.onCurve=!!(i&1),I.lastPointOfContour=o.indexOf(d)>=0,T.push(I);for(var p=0,S=0;S<E;S+=1)i=a[S],I=T[S],I.x=ki(n,i,p,2,16),p=I.x;for(var u=0,y=0;y<E;y+=1)i=a[y],I=T[y],I.y=ki(n,i,u,4,32),u=I.y}r.points=T}else r.points=[]}else if(r.numberOfContours===0)r.points=[];else{r.isComposite=!0,r.points=[],r.components=[];for(var G=!0;G;){a=n.parseUShort();var m={glyphIndex:n.parseUShort(),xScale:1,scale01:0,scale10:0,yScale:1,dx:0,dy:0};(a&1)>0?(a&2)>0?(m.dx=n.parseShort(),m.dy=n.parseShort()):m.matchedPoints=[n.parseUShort(),n.parseUShort()]:(a&2)>0?(m.dx=n.parseChar(),m.dy=n.parseChar()):m.matchedPoints=[n.parseByte(),n.parseByte()],(a&8)>0?m.xScale=m.yScale=n.parseF2Dot14():(a&64)>0?(m.xScale=n.parseF2Dot14(),m.yScale=n.parseF2Dot14()):(a&128)>0&&(m.xScale=n.parseF2Dot14(),m.scale01=n.parseF2Dot14(),m.scale10=n.parseF2Dot14(),m.yScale=n.parseF2Dot14()),r.components.push(m),G=!!(a&32)}if(a&256){r.instructionLength=n.parseUShort(),r.instructions=[];for(var D=0;D<r.instructionLength;D+=1)r.instructions.push(n.parseByte())}}}function ka(r,e){for(var t=[],n=0;n<r.length;n+=1){var a=r[n],i={x:e.xScale*a.x+e.scale01*a.y+e.dx,y:e.scale10*a.x+e.yScale*a.y+e.dy,onCurve:a.onCurve,lastPointOfContour:a.lastPointOfContour};t.push(i)}return t}function Gl(r){for(var e=[],t=[],n=0;n<r.length;n+=1){var a=r[n];t.push(a),a.lastPointOfContour&&(e.push(t),t=[])}return V.argument(t.length===0,"There are still points left in the current contour."),e}function YA(r){var e=new Be;if(!r)return e;for(var t=Gl(r),n=0;n<t.length;++n){var a=t[n],i=null,o=a[a.length-1],x=a[0];if(o.onCurve)e.moveTo(o.x,o.y);else if(x.onCurve)e.moveTo(x.x,x.y);else{var A={x:(o.x+x.x)*.5,y:(o.y+x.y)*.5};e.moveTo(A.x,A.y)}for(var E=0;E<a.length;++E)if(i=o,o=x,x=a[(E+1)%a.length],o.onCurve)e.lineTo(o.x,o.y);else{var l=x;i.onCurve||((o.x+i.x)*.5,(o.y+i.y)*.5),x.onCurve||(l={x:(o.x+x.x)*.5,y:(o.y+x.y)*.5}),e.quadraticCurveTo(o.x,o.y,l.x,l.y)}e.closePath()}return e}function wA(r,e){if(e.isComposite)for(var t=0;t<e.components.length;t+=1){var n=e.components[t],a=r.get(n.glyphIndex);if(a.getPath(),a.points){var i=void 0;if(n.matchedPoints===void 0)i=ka(a.points,n);else{if(n.matchedPoints[0]>e.points.length-1||n.matchedPoints[1]>a.points.length-1)throw Error("Matched points out of range in "+e.name);var o=e.points[n.matchedPoints[0]],x=a.points[n.matchedPoints[1]],A={xScale:n.xScale,scale01:n.scale01,scale10:n.scale10,yScale:n.yScale,dx:0,dy:0};x=ka([x],A)[0],A.dx=o.x-x.x,A.dy=o.y-x.y,i=ka(a.points,A)}e.points=e.points.concat(i)}}return YA(e.points)}function Pl(r,e,t,n){for(var a=new Dr.GlyphSet(n),i=0;i<t.length-1;i+=1){var o=t[i],x=t[i+1];o!==x?a.push(i,Dr.ttfGlyphLoader(n,i,vA,r,e+o,wA)):a.push(i,Dr.glyphLoader(n,i))}return a}function bl(r,e,t,n){var a=new Dr.GlyphSet(n);return n._push=function(i){var o=t[i],x=t[i+1];o!==x?a.push(i,Dr.ttfGlyphLoader(n,i,vA,r,e+o,wA)):a.push(i,Dr.glyphLoader(n,i))},a}function Ul(r,e,t,n,a){return a.lowMemory?bl(r,e,t,n):Pl(r,e,t,n)}var WA={getPath:YA,parse:Ul},kA,ct,KA,S0;function VA(r){this.font=r,this.getCommands=function(e){return WA.getPath(e).commands},this._fpgmState=this._prepState=void 0,this._errorState=0}function vl(r){return r}function JA(r){return Math.sign(r)*Math.round(Math.abs(r))}function Yl(r){return Math.sign(r)*Math.round(Math.abs(r*2))/2}function wl(r){return Math.sign(r)*(Math.round(Math.abs(r)+.5)-.5)}function Wl(r){return Math.sign(r)*Math.ceil(Math.abs(r))}function kl(r){return Math.sign(r)*Math.floor(Math.abs(r))}var _A=function(r){var e=this.srPeriod,t=this.srPhase,n=this.srThreshold,a=1;return r<0&&(r=-r,a=-1),r+=n-t,r=Math.trunc(r/e)*e,r+=t,r<0?t*a:r*a},Nr={x:1,y:0,axis:"x",distance:function(r,e,t,n){return(t?r.xo:r.x)-(n?e.xo:e.x)},interpolate:function(r,e,t,n){var a,i,o,x,A,E,l;if(!n||n===this){if(a=r.xo-e.xo,i=r.xo-t.xo,A=e.x-e.xo,E=t.x-t.xo,o=Math.abs(a),x=Math.abs(i),l=o+x,l===0){r.x=r.xo+(A+E)/2;return}r.x=r.xo+(A*x+E*o)/l;return}if(a=n.distance(r,e,!0,!0),i=n.distance(r,t,!0,!0),A=n.distance(e,e,!1,!0),E=n.distance(t,t,!1,!0),o=Math.abs(a),x=Math.abs(i),l=o+x,l===0){Nr.setRelative(r,r,(A+E)/2,n,!0);return}Nr.setRelative(r,r,(A*x+E*o)/l,n,!0)},normalSlope:Number.NEGATIVE_INFINITY,setRelative:function(r,e,t,n,a){if(!n||n===this){r.x=(a?e.xo:e.x)+t;return}var i=a?e.xo:e.x,o=a?e.yo:e.y,x=i+t*n.x,A=o+t*n.y;r.x=x+(r.y-A)/n.normalSlope},slope:0,touch:function(r){r.xTouched=!0},touched:function(r){return r.xTouched},untouch:function(r){r.xTouched=!1}},fr={x:0,y:1,axis:"y",distance:function(r,e,t,n){return(t?r.yo:r.y)-(n?e.yo:e.y)},interpolate:function(r,e,t,n){var a,i,o,x,A,E,l;if(!n||n===this){if(a=r.yo-e.yo,i=r.yo-t.yo,A=e.y-e.yo,E=t.y-t.yo,o=Math.abs(a),x=Math.abs(i),l=o+x,l===0){r.y=r.yo+(A+E)/2;return}r.y=r.yo+(A*x+E*o)/l;return}if(a=n.distance(r,e,!0,!0),i=n.distance(r,t,!0,!0),A=n.distance(e,e,!1,!0),E=n.distance(t,t,!1,!0),o=Math.abs(a),x=Math.abs(i),l=o+x,l===0){fr.setRelative(r,r,(A+E)/2,n,!0);return}fr.setRelative(r,r,(A*x+E*o)/l,n,!0)},normalSlope:0,setRelative:function(r,e,t,n,a){if(!n||n===this){r.y=(a?e.yo:e.y)+t;return}var i=a?e.xo:e.x,o=a?e.yo:e.y,x=i+t*n.x,A=o+t*n.y;r.y=A+n.normalSlope*(r.x-x)},slope:Number.POSITIVE_INFINITY,touch:function(r){r.yTouched=!0},touched:function(r){return r.yTouched},untouch:function(r){r.yTouched=!1}};Object.freeze(Nr);Object.freeze(fr);function Cn(r,e){this.x=r,this.y=e,this.axis=void 0,this.slope=e/r,this.normalSlope=-r/e,Object.freeze(this)}Cn.prototype.distance=function(r,e,t,n){return this.x*Nr.distance(r,e,t,n)+this.y*fr.distance(r,e,t,n)};Cn.prototype.interpolate=function(r,e,t,n){var a,i,o,x,A,E,l;if(o=n.distance(r,e,!0,!0),x=n.distance(r,t,!0,!0),a=n.distance(e,e,!1,!0),i=n.distance(t,t,!1,!0),A=Math.abs(o),E=Math.abs(x),l=A+E,l===0){this.setRelative(r,r,(a+i)/2,n,!0);return}this.setRelative(r,r,(a*E+i*A)/l,n,!0)};Cn.prototype.setRelative=function(r,e,t,n,a){n=n||this;var i=a?e.xo:e.x,o=a?e.yo:e.y,x=i+t*n.x,A=o+t*n.y,E=n.normalSlope,l=this.slope,c=r.x,L=r.y;r.x=(l*c-E*x+A-L)/(l-E),r.y=l*(r.x-c)+L};Cn.prototype.touch=function(r){r.xTouched=!0,r.yTouched=!0};function un(r,e){var t=Math.sqrt(r*r+e*e);return r/=t,e/=t,r===1&&e===0?Nr:r===0&&e===1?fr:new Cn(r,e)}function Gr(r,e,t,n){this.x=this.xo=Math.round(r*64)/64,this.y=this.yo=Math.round(e*64)/64,this.lastPointOfContour=t,this.onCurve=n,this.prevPointOnContour=void 0,this.nextPointOnContour=void 0,this.xTouched=!1,this.yTouched=!1,Object.preventExtensions(this)}Gr.prototype.nextTouched=function(r){for(var e=this.nextPointOnContour;!r.touched(e)&&e!==this;)e=e.nextPointOnContour;return e};Gr.prototype.prevTouched=function(r){for(var e=this.prevPointOnContour;!r.touched(e)&&e!==this;)e=e.prevPointOnContour;return e};var nn=Object.freeze(new Gr(0,0)),Kl={cvCutIn:17/16,deltaBase:9,deltaShift:.125,loop:1,minDis:1,autoFlip:!0};function Xr(r,e){switch(this.env=r,this.stack=[],this.prog=e,r){case"glyf":this.zp0=this.zp1=this.zp2=1,this.rp0=this.rp1=this.rp2=0;case"prep":this.fv=this.pv=this.dpv=Nr,this.round=JA}}VA.prototype.exec=function(r,e){if(typeof e!="number")throw new Error("Point size is not a number!");if(!(this._errorState>2)){var t=this.font,n=this._prepState;if(!n||n.ppem!==e){var a=this._fpgmState;if(!a){Xr.prototype=Kl,a=this._fpgmState=new Xr("fpgm",t.tables.fpgm),a.funcs=[],a.font=t,N.DEBUG&&(console.log("---EXEC FPGM---"),a.step=-1);try{ct(a)}catch(E){console.log("Hinting error in FPGM:"+E),this._errorState=3;return}}Xr.prototype=a,n=this._prepState=new Xr("prep",t.tables.prep),n.ppem=e;var i=t.tables.cvt;if(i)for(var o=n.cvt=new Array(i.length),x=e/t.unitsPerEm,A=0;A<i.length;A++)o[A]=i[A]*x;else n.cvt=[];N.DEBUG&&(console.log("---EXEC PREP---"),n.step=-1);try{ct(n)}catch(E){this._errorState<2&&console.log("Hinting error in PREP:"+E),this._errorState=2}}if(!(this._errorState>1))try{return KA(r,n)}catch(E){this._errorState<1&&(console.log("Hinting error:"+E),console.log("Note: further hinting errors are silenced")),this._errorState=1;return}}};KA=function(r,e){var t=e.ppem/e.font.unitsPerEm,n=t,a=r.components,i,o,x;if(Xr.prototype=e,!a)x=new Xr("glyf",r.instructions),N.DEBUG&&(console.log("---EXEC GLYPH---"),x.step=-1),S0(r,x,t,n),o=x.gZone;else{var A=e.font;o=[],i=[];for(var E=0;E<a.length;E++){var l=a[E],c=A.glyphs.get(l.glyphIndex);x=new Xr("glyf",c.instructions),N.DEBUG&&(console.log("---EXEC COMP "+E+"---"),x.step=-1),S0(c,x,t,n);for(var L=Math.round(l.dx*t),T=Math.round(l.dy*n),I=x.gZone,d=x.contours,p=0;p<I.length;p++){var S=I[p];S.xTouched=S.yTouched=!1,S.xo=S.x=S.x+L,S.yo=S.y=S.y+T}var u=o.length;o.push.apply(o,I);for(var y=0;y<d.length;y++)i.push(d[y]+u)}r.instructions&&!x.inhibitGridFit&&(x=new Xr("glyf",r.instructions),x.gZone=x.z0=x.z1=x.z2=o,x.contours=i,o.push(new Gr(0,0),new Gr(Math.round(r.advanceWidth*t),0)),N.DEBUG&&(console.log("---EXEC COMPOSITE---"),x.step=-1),ct(x),o.length-=2)}return o};S0=function(r,e,t,n){for(var a=r.points||[],i=a.length,o=e.gZone=e.z0=e.z1=e.z2=[],x=e.contours=[],A,E=0;E<i;E++)A=a[E],o[E]=new Gr(A.x*t,A.y*n,A.lastPointOfContour,A.onCurve);for(var l,c,L=0;L<i;L++)A=o[L],l||(l=A,x.push(L)),A.lastPointOfContour?(A.nextPointOnContour=l,l.prevPointOnContour=A,l=void 0):(c=o[L+1],A.nextPointOnContour=c,c.prevPointOnContour=A);if(!e.inhibitGridFit){if(N.DEBUG){console.log("PROCESSING GLYPH",e.stack);for(var T=0;T<i;T++)console.log(T,o[T].x,o[T].y)}if(o.push(new Gr(0,0),new Gr(Math.round(r.advanceWidth*t),0)),ct(e),o.length-=2,N.DEBUG){console.log("FINISHED GLYPH",e.stack);for(var I=0;I<i;I++)console.log(I,o[I].x,o[I].y)}}};ct=function(r){var e=r.prog;if(e){var t=e.length,n;for(r.ip=0;r.ip<t;r.ip++){if(N.DEBUG&&r.step++,n=kA[e[r.ip]],!n)throw new Error("unknown instruction: 0x"+Number(e[r.ip]).toString(16));n(r)}}};function Ra(r){for(var e=r.tZone=new Array(r.gZone.length),t=0;t<e.length;t++)e[t]=new Gr(0,0)}function ZA(r,e){var t=r.prog,n=r.ip,a=1,i;do if(i=t[++n],i===88)a++;else if(i===89)a--;else if(i===64)n+=t[n+1]+1;else if(i===65)n+=2*t[n+1]+1;else if(i>=176&&i<=183)n+=i-176+1;else if(i>=184&&i<=191)n+=(i-184+1)*2;else if(e&&a===1&&i===27)break;while(a>0);r.ip=n}function Ki(r,e){N.DEBUG&&console.log(e.step,"SVTCA["+r.axis+"]"),e.fv=e.pv=e.dpv=r}function Vi(r,e){N.DEBUG&&console.log(e.step,"SPVTCA["+r.axis+"]"),e.pv=e.dpv=r}function Ji(r,e){N.DEBUG&&console.log(e.step,"SFVTCA["+r.axis+"]"),e.fv=r}function _i(r,e){var t=e.stack,n=t.pop(),a=t.pop(),i=e.z2[n],o=e.z1[a];N.DEBUG&&console.log("SPVTL["+r+"]",n,a);var x,A;r?(x=i.y-o.y,A=o.x-i.x):(x=o.x-i.x,A=o.y-i.y),e.pv=e.dpv=un(x,A)}function Zi(r,e){var t=e.stack,n=t.pop(),a=t.pop(),i=e.z2[n],o=e.z1[a];N.DEBUG&&console.log("SFVTL["+r+"]",n,a);var x,A;r?(x=i.y-o.y,A=o.x-i.x):(x=o.x-i.x,A=o.y-i.y),e.fv=un(x,A)}function Vl(r){var e=r.stack,t=e.pop(),n=e.pop();N.DEBUG&&console.log(r.step,"SPVFS[]",t,n),r.pv=r.dpv=un(n,t)}function Jl(r){var e=r.stack,t=e.pop(),n=e.pop();N.DEBUG&&console.log(r.step,"SPVFS[]",t,n),r.fv=un(n,t)}function _l(r){var e=r.stack,t=r.pv;N.DEBUG&&console.log(r.step,"GPV[]"),e.push(t.x*16384),e.push(t.y*16384)}function Zl(r){var e=r.stack,t=r.fv;N.DEBUG&&console.log(r.step,"GFV[]"),e.push(t.x*16384),e.push(t.y*16384)}function zl(r){r.fv=r.pv,N.DEBUG&&console.log(r.step,"SFVTPV[]")}function Xl(r){var e=r.stack,t=e.pop(),n=e.pop(),a=e.pop(),i=e.pop(),o=e.pop(),x=r.z0,A=r.z1,E=x[t],l=x[n],c=A[a],L=A[i],T=r.z2[o];N.DEBUG&&console.log("ISECT[], ",t,n,a,i,o);var I=E.x,d=E.y,p=l.x,S=l.y,u=c.x,y=c.y,G=L.x,m=L.y,D=(I-p)*(y-m)-(d-S)*(u-G),H=I*S-d*p,v=u*m-y*G;T.x=(H*(u-G)-v*(I-p))/D,T.y=(H*(y-m)-v*(d-S))/D}function jl(r){r.rp0=r.stack.pop(),N.DEBUG&&console.log(r.step,"SRP0[]",r.rp0)}function Ql(r){r.rp1=r.stack.pop(),N.DEBUG&&console.log(r.step,"SRP1[]",r.rp1)}function ql(r){r.rp2=r.stack.pop(),N.DEBUG&&console.log(r.step,"SRP2[]",r.rp2)}function $l(r){var e=r.stack.pop();switch(N.DEBUG&&console.log(r.step,"SZP0[]",e),r.zp0=e,e){case 0:r.tZone||Ra(r),r.z0=r.tZone;break;case 1:r.z0=r.gZone;break;default:throw new Error("Invalid zone pointer")}}function es(r){var e=r.stack.pop();switch(N.DEBUG&&console.log(r.step,"SZP1[]",e),r.zp1=e,e){case 0:r.tZone||Ra(r),r.z1=r.tZone;break;case 1:r.z1=r.gZone;break;default:throw new Error("Invalid zone pointer")}}function rs(r){var e=r.stack.pop();switch(N.DEBUG&&console.log(r.step,"SZP2[]",e),r.zp2=e,e){case 0:r.tZone||Ra(r),r.z2=r.tZone;break;case 1:r.z2=r.gZone;break;default:throw new Error("Invalid zone pointer")}}function ts(r){var e=r.stack.pop();switch(N.DEBUG&&console.log(r.step,"SZPS[]",e),r.zp0=r.zp1=r.zp2=e,e){case 0:r.tZone||Ra(r),r.z0=r.z1=r.z2=r.tZone;break;case 1:r.z0=r.z1=r.z2=r.gZone;break;default:throw new Error("Invalid zone pointer")}}function ns(r){r.loop=r.stack.pop(),N.DEBUG&&console.log(r.step,"SLOOP[]",r.loop)}function as(r){N.DEBUG&&console.log(r.step,"RTG[]"),r.round=JA}function is(r){N.DEBUG&&console.log(r.step,"RTHG[]"),r.round=wl}function os(r){var e=r.stack.pop();N.DEBUG&&console.log(r.step,"SMD[]",e),r.minDis=e/64}function As(r){N.DEBUG&&console.log(r.step,"ELSE[]"),ZA(r,!1)}function xs(r){var e=r.stack.pop();N.DEBUG&&console.log(r.step,"JMPR[]",e),r.ip+=e-1}function Es(r){var e=r.stack.pop();N.DEBUG&&console.log(r.step,"SCVTCI[]",e),r.cvCutIn=e/64}function ls(r){var e=r.stack;N.DEBUG&&console.log(r.step,"DUP[]"),e.push(e[e.length-1])}function Ka(r){N.DEBUG&&console.log(r.step,"POP[]"),r.stack.pop()}function ss(r){N.DEBUG&&console.log(r.step,"CLEAR[]"),r.stack.length=0}function Ls(r){var e=r.stack,t=e.pop(),n=e.pop();N.DEBUG&&console.log(r.step,"SWAP[]"),e.push(t),e.push(n)}function cs(r){var e=r.stack;N.DEBUG&&console.log(r.step,"DEPTH[]"),e.push(e.length)}function Ts(r){var e=r.stack,t=e.pop(),n=e.pop();N.DEBUG&&console.log(r.step,"LOOPCALL[]",t,n);var a=r.ip,i=r.prog;r.prog=r.funcs[t];for(var o=0;o<n;o++)ct(r),N.DEBUG&&console.log(++r.step,o+1<n?"next loopcall":"done loopcall",o);r.ip=a,r.prog=i}function hs(r){var e=r.stack.pop();N.DEBUG&&console.log(r.step,"CALL[]",e);var t=r.ip,n=r.prog;r.prog=r.funcs[e],ct(r),r.ip=t,r.prog=n,N.DEBUG&&console.log(++r.step,"returning from",e)}function Is(r){var e=r.stack,t=e.pop();N.DEBUG&&console.log(r.step,"CINDEX[]",t),e.push(e[e.length-t])}function ds(r){var e=r.stack,t=e.pop();N.DEBUG&&console.log(r.step,"MINDEX[]",t),e.push(e.splice(e.length-t,1)[0])}function ps(r){if(r.env!=="fpgm")throw new Error("FDEF not allowed here");var e=r.stack,t=r.prog,n=r.ip,a=e.pop(),i=n;for(N.DEBUG&&console.log(r.step,"FDEF[]",a);t[++n]!==45;);r.ip=n,r.funcs[a]=t.slice(i+1,n)}function zi(r,e){var t=e.stack.pop(),n=e.z0[t],a=e.fv,i=e.pv;N.DEBUG&&console.log(e.step,"MDAP["+r+"]",t);var o=i.distance(n,nn);r&&(o=e.round(o)),a.setRelative(n,nn,o,i),a.touch(n),e.rp0=e.rp1=t}function Xi(r,e){var t=e.z2,n=t.length-2,a,i,o;N.DEBUG&&console.log(e.step,"IUP["+r.axis+"]");for(var x=0;x<n;x++)a=t[x],!r.touched(a)&&(i=a.prevTouched(r),i!==a&&(o=a.nextTouched(r),i===o&&r.setRelative(a,a,r.distance(i,i,!1,!0),r,!0),r.interpolate(a,i,o,r)))}function ji(r,e){for(var t=e.stack,n=r?e.rp1:e.rp2,a=(r?e.z0:e.z1)[n],i=e.fv,o=e.pv,x=e.loop,A=e.z2;x--;){var E=t.pop(),l=A[E],c=o.distance(a,a,!1,!0);i.setRelative(l,l,c,o),i.touch(l),N.DEBUG&&console.log(e.step,(e.loop>1?"loop "+(e.loop-x)+": ":"")+"SHP["+(r?"rp1":"rp2")+"]",E)}e.loop=1}function Qi(r,e){var t=e.stack,n=r?e.rp1:e.rp2,a=(r?e.z0:e.z1)[n],i=e.fv,o=e.pv,x=t.pop(),A=e.z2[e.contours[x]],E=A;N.DEBUG&&console.log(e.step,"SHC["+r+"]",x);var l=o.distance(a,a,!1,!0);do E!==a&&i.setRelative(E,E,l,o),E=E.nextPointOnContour;while(E!==A)}function qi(r,e){var t=e.stack,n=r?e.rp1:e.rp2,a=(r?e.z0:e.z1)[n],i=e.fv,o=e.pv,x=t.pop();N.DEBUG&&console.log(e.step,"SHZ["+r+"]",x);var A;switch(x){case 0:A=e.tZone;break;case 1:A=e.gZone;break;default:throw new Error("Invalid zone")}for(var E,l=o.distance(a,a,!1,!0),c=A.length-2,L=0;L<c;L++)E=A[L],i.setRelative(E,E,l,o)}function Ss(r){for(var e=r.stack,t=r.loop,n=r.fv,a=e.pop()/64,i=r.z2;t--;){var o=e.pop(),x=i[o];N.DEBUG&&console.log(r.step,(r.loop>1?"loop "+(r.loop-t)+": ":"")+"SHPIX[]",o,a),n.setRelative(x,x,a),n.touch(x)}r.loop=1}function Cs(r){for(var e=r.stack,t=r.rp1,n=r.rp2,a=r.loop,i=r.z0[t],o=r.z1[n],x=r.fv,A=r.dpv,E=r.z2;a--;){var l=e.pop(),c=E[l];N.DEBUG&&console.log(r.step,(r.loop>1?"loop "+(r.loop-a)+": ":"")+"IP[]",l,t,"<->",n),x.interpolate(c,i,o,A),x.touch(c)}r.loop=1}function $i(r,e){var t=e.stack,n=t.pop()/64,a=t.pop(),i=e.z1[a],o=e.z0[e.rp0],x=e.fv,A=e.pv;x.setRelative(i,o,n,A),x.touch(i),N.DEBUG&&console.log(e.step,"MSIRP["+r+"]",n,a),e.rp1=e.rp0,e.rp2=a,r&&(e.rp0=a)}function us(r){for(var e=r.stack,t=r.rp0,n=r.z0[t],a=r.loop,i=r.fv,o=r.pv,x=r.z1;a--;){var A=e.pop(),E=x[A];N.DEBUG&&console.log(r.step,(r.loop>1?"loop "+(r.loop-a)+": ":"")+"ALIGNRP[]",A),i.setRelative(E,n,0,o),i.touch(E)}r.loop=1}function Rs(r){N.DEBUG&&console.log(r.step,"RTDG[]"),r.round=Yl}function eo(r,e){var t=e.stack,n=t.pop(),a=t.pop(),i=e.z0[a],o=e.fv,x=e.pv,A=e.cvt[n];N.DEBUG&&console.log(e.step,"MIAP["+r+"]",n,"(",A,")",a);var E=x.distance(i,nn);r&&(Math.abs(E-A)<e.cvCutIn&&(E=A),E=e.round(E)),o.setRelative(i,nn,E,x),e.zp0===0&&(i.xo=i.x,i.yo=i.y),o.touch(i),e.rp0=e.rp1=a}function gs(r){var e=r.prog,t=r.ip,n=r.stack,a=e[++t];N.DEBUG&&console.log(r.step,"NPUSHB[]",a);for(var i=0;i<a;i++)n.push(e[++t]);r.ip=t}function ys(r){var e=r.ip,t=r.prog,n=r.stack,a=t[++e];N.DEBUG&&console.log(r.step,"NPUSHW[]",a);for(var i=0;i<a;i++){var o=t[++e]<<8|t[++e];o&32768&&(o=-((o^65535)+1)),n.push(o)}r.ip=e}function Ns(r){var e=r.stack,t=r.store;t||(t=r.store=[]);var n=e.pop(),a=e.pop();N.DEBUG&&console.log(r.step,"WS",n,a),t[a]=n}function Ds(r){var e=r.stack,t=r.store,n=e.pop();N.DEBUG&&console.log(r.step,"RS",n);var a=t&&t[n]||0;e.push(a)}function ms(r){var e=r.stack,t=e.pop(),n=e.pop();N.DEBUG&&console.log(r.step,"WCVTP",t,n),r.cvt[n]=t/64}function Os(r){var e=r.stack,t=e.pop();N.DEBUG&&console.log(r.step,"RCVT",t),e.push(r.cvt[t]*64)}function ro(r,e){var t=e.stack,n=t.pop(),a=e.z2[n];N.DEBUG&&console.log(e.step,"GC["+r+"]",n),t.push(e.dpv.distance(a,nn,r,!1)*64)}function to(r,e){var t=e.stack,n=t.pop(),a=t.pop(),i=e.z1[n],o=e.z0[a],x=e.dpv.distance(o,i,r,r);N.DEBUG&&console.log(e.step,"MD["+r+"]",n,a,"->",x),e.stack.push(Math.round(x*64))}function Bs(r){N.DEBUG&&console.log(r.step,"MPPEM[]"),r.stack.push(r.ppem)}function Hs(r){N.DEBUG&&console.log(r.step,"FLIPON[]"),r.autoFlip=!0}function Fs(r){var e=r.stack,t=e.pop(),n=e.pop();N.DEBUG&&console.log(r.step,"LT[]",t,n),e.push(n<t?1:0)}function fs(r){var e=r.stack,t=e.pop(),n=e.pop();N.DEBUG&&console.log(r.step,"LTEQ[]",t,n),e.push(n<=t?1:0)}function Ms(r){var e=r.stack,t=e.pop(),n=e.pop();N.DEBUG&&console.log(r.step,"GT[]",t,n),e.push(n>t?1:0)}function Gs(r){var e=r.stack,t=e.pop(),n=e.pop();N.DEBUG&&console.log(r.step,"GTEQ[]",t,n),e.push(n>=t?1:0)}function Ps(r){var e=r.stack,t=e.pop(),n=e.pop();N.DEBUG&&console.log(r.step,"EQ[]",t,n),e.push(t===n?1:0)}function bs(r){var e=r.stack,t=e.pop(),n=e.pop();N.DEBUG&&console.log(r.step,"NEQ[]",t,n),e.push(t!==n?1:0)}function Us(r){var e=r.stack,t=e.pop();N.DEBUG&&console.log(r.step,"ODD[]",t),e.push(Math.trunc(t)%2?1:0)}function vs(r){var e=r.stack,t=e.pop();N.DEBUG&&console.log(r.step,"EVEN[]",t),e.push(Math.trunc(t)%2?0:1)}function Ys(r){var e=r.stack.pop();N.DEBUG&&console.log(r.step,"IF[]",e),e||(ZA(r,!0),N.DEBUG&&console.log(r.step,"EIF[]"))}function ws(r){N.DEBUG&&console.log(r.step,"EIF[]")}function Ws(r){var e=r.stack,t=e.pop(),n=e.pop();N.DEBUG&&console.log(r.step,"AND[]",t,n),e.push(t&&n?1:0)}function ks(r){var e=r.stack,t=e.pop(),n=e.pop();N.DEBUG&&console.log(r.step,"OR[]",t,n),e.push(t||n?1:0)}function Ks(r){var e=r.stack,t=e.pop();N.DEBUG&&console.log(r.step,"NOT[]",t),e.push(t?0:1)}function Va(r,e){var t=e.stack,n=t.pop(),a=e.fv,i=e.pv,o=e.ppem,x=e.deltaBase+(r-1)*16,A=e.deltaShift,E=e.z0;N.DEBUG&&console.log(e.step,"DELTAP["+r+"]",n,t);for(var l=0;l<n;l++){var c=t.pop(),L=t.pop(),T=x+((L&240)>>4);if(T===o){var I=(L&15)-8;I>=0&&I++,N.DEBUG&&console.log(e.step,"DELTAPFIX",c,"by",I*A);var d=E[c];a.setRelative(d,d,I*A,i)}}}function Vs(r){var e=r.stack,t=e.pop();N.DEBUG&&console.log(r.step,"SDB[]",t),r.deltaBase=t}function Js(r){var e=r.stack,t=e.pop();N.DEBUG&&console.log(r.step,"SDS[]",t),r.deltaShift=Math.pow(.5,t)}function _s(r){var e=r.stack,t=e.pop(),n=e.pop();N.DEBUG&&console.log(r.step,"ADD[]",t,n),e.push(n+t)}function Zs(r){var e=r.stack,t=e.pop(),n=e.pop();N.DEBUG&&console.log(r.step,"SUB[]",t,n),e.push(n-t)}function zs(r){var e=r.stack,t=e.pop(),n=e.pop();N.DEBUG&&console.log(r.step,"DIV[]",t,n),e.push(n*64/t)}function Xs(r){var e=r.stack,t=e.pop(),n=e.pop();N.DEBUG&&console.log(r.step,"MUL[]",t,n),e.push(n*t/64)}function js(r){var e=r.stack,t=e.pop();N.DEBUG&&console.log(r.step,"ABS[]",t),e.push(Math.abs(t))}function Qs(r){var e=r.stack,t=e.pop();N.DEBUG&&console.log(r.step,"NEG[]",t),e.push(-t)}function qs(r){var e=r.stack,t=e.pop();N.DEBUG&&console.log(r.step,"FLOOR[]",t),e.push(Math.floor(t/64)*64)}function $s(r){var e=r.stack,t=e.pop();N.DEBUG&&console.log(r.step,"CEILING[]",t),e.push(Math.ceil(t/64)*64)}function vn(r,e){var t=e.stack,n=t.pop();N.DEBUG&&console.log(e.step,"ROUND[]"),t.push(e.round(n/64)*64)}function eL(r){var e=r.stack,t=e.pop(),n=e.pop();N.DEBUG&&console.log(r.step,"WCVTF[]",t,n),r.cvt[n]=t*r.ppem/r.font.unitsPerEm}function Ja(r,e){var t=e.stack,n=t.pop(),a=e.ppem,i=e.deltaBase+(r-1)*16,o=e.deltaShift;N.DEBUG&&console.log(e.step,"DELTAC["+r+"]",n,t);for(var x=0;x<n;x++){var A=t.pop(),E=t.pop(),l=i+((E&240)>>4);if(l===a){var c=(E&15)-8;c>=0&&c++;var L=c*o;N.DEBUG&&console.log(e.step,"DELTACFIX",A,"by",L),e.cvt[A]+=L}}}function rL(r){var e=r.stack.pop();N.DEBUG&&console.log(r.step,"SROUND[]",e),r.round=_A;var t;switch(e&192){case 0:t=.5;break;case 64:t=1;break;case 128:t=2;break;default:throw new Error("invalid SROUND value")}switch(r.srPeriod=t,e&48){case 0:r.srPhase=0;break;case 16:r.srPhase=.25*t;break;case 32:r.srPhase=.5*t;break;case 48:r.srPhase=.75*t;break;default:throw new Error("invalid SROUND value")}e&=15,e===0?r.srThreshold=0:r.srThreshold=(e/8-.5)*t}function tL(r){var e=r.stack.pop();N.DEBUG&&console.log(r.step,"S45ROUND[]",e),r.round=_A;var t;switch(e&192){case 0:t=Math.sqrt(2)/2;break;case 64:t=Math.sqrt(2);break;case 128:t=2*Math.sqrt(2);break;default:throw new Error("invalid S45ROUND value")}switch(r.srPeriod=t,e&48){case 0:r.srPhase=0;break;case 16:r.srPhase=.25*t;break;case 32:r.srPhase=.5*t;break;case 48:r.srPhase=.75*t;break;default:throw new Error("invalid S45ROUND value")}e&=15,e===0?r.srThreshold=0:r.srThreshold=(e/8-.5)*t}function nL(r){N.DEBUG&&console.log(r.step,"ROFF[]"),r.round=vl}function aL(r){N.DEBUG&&console.log(r.step,"RUTG[]"),r.round=Wl}function iL(r){N.DEBUG&&console.log(r.step,"RDTG[]"),r.round=kl}function oL(r){var e=r.stack.pop();N.DEBUG&&console.log(r.step,"SCANCTRL[]",e)}function no(r,e){var t=e.stack,n=t.pop(),a=t.pop(),i=e.z2[n],o=e.z1[a];N.DEBUG&&console.log(e.step,"SDPVTL["+r+"]",n,a);var x,A;r?(x=i.y-o.y,A=o.x-i.x):(x=o.x-i.x,A=o.y-i.y),e.dpv=un(x,A)}function AL(r){var e=r.stack,t=e.pop(),n=0;N.DEBUG&&console.log(r.step,"GETINFO[]",t),t&1&&(n=35),t&32&&(n|=4096),e.push(n)}function xL(r){var e=r.stack,t=e.pop(),n=e.pop(),a=e.pop();N.DEBUG&&console.log(r.step,"ROLL[]"),e.push(n),e.push(t),e.push(a)}function EL(r){var e=r.stack,t=e.pop(),n=e.pop();N.DEBUG&&console.log(r.step,"MAX[]",t,n),e.push(Math.max(n,t))}function lL(r){var e=r.stack,t=e.pop(),n=e.pop();N.DEBUG&&console.log(r.step,"MIN[]",t,n),e.push(Math.min(n,t))}function sL(r){var e=r.stack.pop();N.DEBUG&&console.log(r.step,"SCANTYPE[]",e)}function LL(r){var e=r.stack.pop(),t=r.stack.pop();switch(N.DEBUG&&console.log(r.step,"INSTCTRL[]",e,t),e){case 1:r.inhibitGridFit=!!t;return;case 2:r.ignoreCvt=!!t;return;default:throw new Error("invalid INSTCTRL[] selector")}}function kr(r,e){var t=e.stack,n=e.prog,a=e.ip;N.DEBUG&&console.log(e.step,"PUSHB["+r+"]");for(var i=0;i<r;i++)t.push(n[++a]);e.ip=a}function Kr(r,e){var t=e.ip,n=e.prog,a=e.stack;N.DEBUG&&console.log(e.ip,"PUSHW["+r+"]");for(var i=0;i<r;i++){var o=n[++t]<<8|n[++t];o&32768&&(o=-((o^65535)+1)),a.push(o)}e.ip=t}function P(r,e,t,n,a,i){var o=i.stack,x=r&&o.pop(),A=o.pop(),E=i.rp0,l=i.z0[E],c=i.z1[A],L=i.minDis,T=i.fv,I=i.dpv,d,p,S,u;p=d=I.distance(c,l,!0,!0),S=p>=0?1:-1,p=Math.abs(p),r&&(u=i.cvt[x],n&&Math.abs(p-u)<i.cvCutIn&&(p=u)),t&&p<L&&(p=L),n&&(p=i.round(p)),T.setRelative(c,l,S*p,I),T.touch(c),N.DEBUG&&console.log(i.step,(r?"MIRP[":"MDRP[")+(e?"M":"m")+(t?">":"_")+(n?"R":"_")+(a===0?"Gr":a===1?"Bl":a===2?"Wh":"")+"]",r?x+"("+i.cvt[x]+","+u+")":"",A,"(d =",d,"->",S*p,")"),i.rp1=i.rp0,i.rp2=A,e&&(i.rp0=A)}kA=[Ki.bind(void 0,fr),Ki.bind(void 0,Nr),Vi.bind(void 0,fr),Vi.bind(void 0,Nr),Ji.bind(void 0,fr),Ji.bind(void 0,Nr),_i.bind(void 0,0),_i.bind(void 0,1),Zi.bind(void 0,0),Zi.bind(void 0,1),Vl,Jl,_l,Zl,zl,Xl,jl,Ql,ql,$l,es,rs,ts,ns,as,is,os,As,xs,Es,void 0,void 0,ls,Ka,ss,Ls,cs,Is,ds,void 0,void 0,void 0,Ts,hs,ps,void 0,zi.bind(void 0,0),zi.bind(void 0,1),Xi.bind(void 0,fr),Xi.bind(void 0,Nr),ji.bind(void 0,0),ji.bind(void 0,1),Qi.bind(void 0,0),Qi.bind(void 0,1),qi.bind(void 0,0),qi.bind(void 0,1),Ss,Cs,$i.bind(void 0,0),$i.bind(void 0,1),us,Rs,eo.bind(void 0,0),eo.bind(void 0,1),gs,ys,Ns,Ds,ms,Os,ro.bind(void 0,0),ro.bind(void 0,1),void 0,to.bind(void 0,0),to.bind(void 0,1),Bs,void 0,Hs,void 0,void 0,Fs,fs,Ms,Gs,Ps,bs,Us,vs,Ys,ws,Ws,ks,Ks,Va.bind(void 0,1),Vs,Js,_s,Zs,zs,Xs,js,Qs,qs,$s,vn.bind(void 0,0),vn.bind(void 0,1),vn.bind(void 0,2),vn.bind(void 0,3),void 0,void 0,void 0,void 0,eL,Va.bind(void 0,2),Va.bind(void 0,3),Ja.bind(void 0,1),Ja.bind(void 0,2),Ja.bind(void 0,3),rL,tL,void 0,void 0,nL,void 0,aL,iL,Ka,Ka,void 0,void 0,void 0,void 0,void 0,oL,no.bind(void 0,0),no.bind(void 0,1),AL,void 0,xL,EL,lL,sL,LL,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,kr.bind(void 0,1),kr.bind(void 0,2),kr.bind(void 0,3),kr.bind(void 0,4),kr.bind(void 0,5),kr.bind(void 0,6),kr.bind(void 0,7),kr.bind(void 0,8),Kr.bind(void 0,1),Kr.bind(void 0,2),Kr.bind(void 0,3),Kr.bind(void 0,4),Kr.bind(void 0,5),Kr.bind(void 0,6),Kr.bind(void 0,7),Kr.bind(void 0,8),P.bind(void 0,0,0,0,0,0),P.bind(void 0,0,0,0,0,1),P.bind(void 0,0,0,0,0,2),P.bind(void 0,0,0,0,0,3),P.bind(void 0,0,0,0,1,0),P.bind(void 0,0,0,0,1,1),P.bind(void 0,0,0,0,1,2),P.bind(void 0,0,0,0,1,3),P.bind(void 0,0,0,1,0,0),P.bind(void 0,0,0,1,0,1),P.bind(void 0,0,0,1,0,2),P.bind(void 0,0,0,1,0,3),P.bind(void 0,0,0,1,1,0),P.bind(void 0,0,0,1,1,1),P.bind(void 0,0,0,1,1,2),P.bind(void 0,0,0,1,1,3),P.bind(void 0,0,1,0,0,0),P.bind(void 0,0,1,0,0,1),P.bind(void 0,0,1,0,0,2),P.bind(void 0,0,1,0,0,3),P.bind(void 0,0,1,0,1,0),P.bind(void 0,0,1,0,1,1),P.bind(void 0,0,1,0,1,2),P.bind(void 0,0,1,0,1,3),P.bind(void 0,0,1,1,0,0),P.bind(void 0,0,1,1,0,1),P.bind(void 0,0,1,1,0,2),P.bind(void 0,0,1,1,0,3),P.bind(void 0,0,1,1,1,0),P.bind(void 0,0,1,1,1,1),P.bind(void 0,0,1,1,1,2),P.bind(void 0,0,1,1,1,3),P.bind(void 0,1,0,0,0,0),P.bind(void 0,1,0,0,0,1),P.bind(void 0,1,0,0,0,2),P.bind(void 0,1,0,0,0,3),P.bind(void 0,1,0,0,1,0),P.bind(void 0,1,0,0,1,1),P.bind(void 0,1,0,0,1,2),P.bind(void 0,1,0,0,1,3),P.bind(void 0,1,0,1,0,0),P.bind(void 0,1,0,1,0,1),P.bind(void 0,1,0,1,0,2),P.bind(void 0,1,0,1,0,3),P.bind(void 0,1,0,1,1,0),P.bind(void 0,1,0,1,1,1),P.bind(void 0,1,0,1,1,2),P.bind(void 0,1,0,1,1,3),P.bind(void 0,1,1,0,0,0),P.bind(void 0,1,1,0,0,1),P.bind(void 0,1,1,0,0,2),P.bind(void 0,1,1,0,0,3),P.bind(void 0,1,1,0,1,0),P.bind(void 0,1,1,0,1,1),P.bind(void 0,1,1,0,1,2),P.bind(void 0,1,1,0,1,3),P.bind(void 0,1,1,1,0,0),P.bind(void 0,1,1,1,0,1),P.bind(void 0,1,1,1,0,2),P.bind(void 0,1,1,1,0,3),P.bind(void 0,1,1,1,1,0),P.bind(void 0,1,1,1,1,1),P.bind(void 0,1,1,1,1,2),P.bind(void 0,1,1,1,1,3)];function Wt(r){this.char=r,this.state={},this.activeState=null}function X0(r,e,t){this.contextName=t,this.startIndex=r,this.endOffset=e}function cL(r,e,t){this.contextName=r,this.openRange=null,this.ranges=[],this.checkStart=e,this.checkEnd=t}function cr(r,e){this.context=r,this.index=e,this.length=r.length,this.current=r[e],this.backtrack=r.slice(0,e),this.lookahead=r.slice(e+1)}function ga(r){this.eventId=r,this.subscribers=[]}function TL(r){var e=this,t=["start","end","next","newToken","contextStart","contextEnd","insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD","updateContextsRanges"];t.forEach(function(a){Object.defineProperty(e.events,a,{value:new ga(a)})}),r&&t.forEach(function(a){var i=r[a];typeof i=="function"&&e.events[a].subscribe(i)});var n=["insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD"];n.forEach(function(a){e.events[a].subscribe(e.updateContextsRanges)})}function Se(r){this.tokens=[],this.registeredContexts={},this.contextCheckers=[],this.events={},this.registeredModifiers=[],TL.call(this,r)}Wt.prototype.setState=function(r,e){return this.state[r]=e,this.activeState={key:r,value:this.state[r]},this.activeState};Wt.prototype.getState=function(r){return this.state[r]||null};Se.prototype.inboundIndex=function(r){return r>=0&&r<this.tokens.length};Se.prototype.composeRUD=function(r){var e=this,t=!0,n=r.map(function(i){return e[i[0]].apply(e,i.slice(1).concat(t))}),a=function(i){return typeof i=="object"&&i.hasOwnProperty("FAIL")};if(n.every(a))return{FAIL:"composeRUD: one or more operations hasn't completed successfully",report:n.filter(a)};this.dispatch("composeRUD",[n.filter(function(i){return!a(i)})])};Se.prototype.replaceRange=function(r,e,t,n){e=e!==null?e:this.tokens.length;var a=t.every(function(o){return o instanceof Wt});if(!isNaN(r)&&this.inboundIndex(r)&&a){var i=this.tokens.splice.apply(this.tokens,[r,e].concat(t));return n||this.dispatch("replaceToken",[r,e,t]),[i,t]}else return{FAIL:"replaceRange: invalid tokens or startIndex."}};Se.prototype.replaceToken=function(r,e,t){if(!isNaN(r)&&this.inboundIndex(r)&&e instanceof Wt){var n=this.tokens.splice(r,1,e);return t||this.dispatch("replaceToken",[r,e]),[n[0],e]}else return{FAIL:"replaceToken: invalid token or index."}};Se.prototype.removeRange=function(r,e,t){e=isNaN(e)?this.tokens.length:e;var n=this.tokens.splice(r,e);return t||this.dispatch("removeRange",[n,r,e]),n};Se.prototype.removeToken=function(r,e){if(!isNaN(r)&&this.inboundIndex(r)){var t=this.tokens.splice(r,1);return e||this.dispatch("removeToken",[t,r]),t}else return{FAIL:"removeToken: invalid token index."}};Se.prototype.insertToken=function(r,e,t){var n=r.every(function(a){return a instanceof Wt});return n?(this.tokens.splice.apply(this.tokens,[e,0].concat(r)),t||this.dispatch("insertToken",[r,e]),r):{FAIL:"insertToken: invalid token(s)."}};Se.prototype.registerModifier=function(r,e,t){this.events.newToken.subscribe(function(n,a){var i=[n,a],o=e===null||e.apply(this,i)===!0,x=[n,a];if(o){var A=t.apply(this,x);n.setState(r,A)}}),this.registeredModifiers.push(r)};ga.prototype.subscribe=function(r){return typeof r=="function"?this.subscribers.push(r)-1:{FAIL:"invalid '"+this.eventId+"' event handler"}};ga.prototype.unsubscribe=function(r){this.subscribers.splice(r,1)};cr.prototype.setCurrentIndex=function(r){this.index=r,this.current=this.context[r],this.backtrack=this.context.slice(0,r),this.lookahead=this.context.slice(r+1)};cr.prototype.get=function(r){switch(!0){case r===0:return this.current;case(r<0&&Math.abs(r)<=this.backtrack.length):return this.backtrack.slice(r)[0];case(r>0&&r<=this.lookahead.length):return this.lookahead[r-1];default:return null}};Se.prototype.rangeToText=function(r){if(r instanceof X0)return this.getRangeTokens(r).map(function(e){return e.char}).join("")};Se.prototype.getText=function(){return this.tokens.map(function(r){return r.char}).join("")};Se.prototype.getContext=function(r){var e=this.registeredContexts[r];return e||null};Se.prototype.on=function(r,e){var t=this.events[r];return t?t.subscribe(e):null};Se.prototype.dispatch=function(r,e){var t=this,n=this.events[r];n instanceof ga&&n.subscribers.forEach(function(a){a.apply(t,e||[])})};Se.prototype.registerContextChecker=function(r,e,t){if(this.getContext(r))return{FAIL:"context name '"+r+"' is already registered."};if(typeof e!="function")return{FAIL:"missing context start check."};if(typeof t!="function")return{FAIL:"missing context end check."};var n=new cL(r,e,t);return this.registeredContexts[r]=n,this.contextCheckers.push(n),n};Se.prototype.getRangeTokens=function(r){var e=r.startIndex+r.endOffset;return[].concat(this.tokens.slice(r.startIndex,e))};Se.prototype.getContextRanges=function(r){var e=this.getContext(r);return e?e.ranges:{FAIL:"context checker '"+r+"' is not registered."}};Se.prototype.resetContextsRanges=function(){var r=this.registeredContexts;for(var e in r)if(r.hasOwnProperty(e)){var t=r[e];t.ranges=[]}};Se.prototype.updateContextsRanges=function(){this.resetContextsRanges();for(var r=this.tokens.map(function(n){return n.char}),e=0;e<r.length;e++){var t=new cr(r,e);this.runContextCheck(t)}this.dispatch("updateContextsRanges",[this.registeredContexts])};Se.prototype.setEndOffset=function(r,e){var t=this.getContext(e).openRange.startIndex,n=new X0(t,r,e),a=this.getContext(e).ranges;return n.rangeId=e+"."+a.length,a.push(n),this.getContext(e).openRange=null,n};Se.prototype.runContextCheck=function(r){var e=this,t=r.index;this.contextCheckers.forEach(function(n){var a=n.contextName,i=e.getContext(a).openRange;if(!i&&n.checkStart(r)&&(i=new X0(t,null,a),e.getContext(a).openRange=i,e.dispatch("contextStart",[a,t])),i&&n.checkEnd(r)){var o=t-i.startIndex+1,x=e.setEndOffset(o,a);e.dispatch("contextEnd",[a,x])}})};Se.prototype.tokenize=function(r){this.tokens=[],this.resetContextsRanges();var e=Array.from(r);this.dispatch("start");for(var t=0;t<e.length;t++){var n=e[t],a=new cr(e,t);this.dispatch("next",[a]),this.runContextCheck(a);var i=new Wt(n);this.tokens.push(i),this.dispatch("newToken",[i,a])}return this.dispatch("end",[this.tokens]),this.tokens};function Qr(r){return/[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(r)}function zA(r){return/[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(r)}function tt(r){return/[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(r)}function Jn(r){return/[A-z]/.test(r)}function hL(r){return/\s/.test(r)}function tr(r){this.font=r,this.features={}}function Et(r){this.id=r.id,this.tag=r.tag,this.substitution=r.substitution}function Rn(r,e){if(!r)return-1;switch(e.format){case 1:return e.glyphs.indexOf(r);case 2:for(var t=e.ranges,n=0;n<t.length;n++){var a=t[n];if(r>=a.start&&r<=a.end){var i=r-a.start;return a.index+i}}break;default:return-1}return-1}function IL(r,e){var t=Rn(r,e.coverage);return t===-1?null:r+e.deltaGlyphId}function dL(r,e){var t=Rn(r,e.coverage);return t===-1?null:e.substitute[t]}function _a(r,e){for(var t=[],n=0;n<r.length;n++){var a=r[n],i=e.current;i=Array.isArray(i)?i[0]:i;var o=Rn(i,a);o!==-1&&t.push(o)}return t.length!==r.length?-1:t}function pL(r,e){var t=e.inputCoverage.length+e.lookaheadCoverage.length+e.backtrackCoverage.length;if(r.context.length<t)return[];var n=_a(e.inputCoverage,r);if(n===-1)return[];var a=e.inputCoverage.length-1;if(r.lookahead.length<e.lookaheadCoverage.length)return[];for(var i=r.lookahead.slice(a);i.length&&tt(i[0].char);)i.shift();var o=new cr(i,0),x=_a(e.lookaheadCoverage,o),A=[].concat(r.backtrack);for(A.reverse();A.length&&tt(A[0].char);)A.shift();if(A.length<e.backtrackCoverage.length)return[];var E=new cr(A,0),l=_a(e.backtrackCoverage,E),c=n.length===e.inputCoverage.length&&x.length===e.lookaheadCoverage.length&&l.length===e.backtrackCoverage.length,L=[];if(c)for(var T=0;T<e.lookupRecords.length;T++)for(var I=e.lookupRecords[T],d=I.lookupListIndex,p=this.getLookupByIndex(d),S=0;S<p.subtables.length;S++){var u=p.subtables[S],y=this.getLookupMethod(p,u),G=this.getSubstitutionType(p,u);if(G==="12")for(var m=0;m<n.length;m++){var D=r.get(m),H=y(D);H&&L.push(H)}}return L}function SL(r,e){var t=r.current,n=Rn(t,e.coverage);if(n===-1)return null;for(var a,i=e.ligatureSets[n],o=0;o<i.length;o++){a=i[o];for(var x=0;x<a.components.length;x++){var A=r.lookahead[x],E=a.components[x];if(A!==E)break;if(x===a.components.length-1)return a}}return null}function CL(r,e){var t=Rn(r,e.coverage);return t===-1?null:e.sequences[t]}tr.prototype.getDefaultScriptFeaturesIndexes=function(){for(var r=this.font.tables.gsub.scripts,e=0;e<r.length;e++){var t=r[e];if(t.tag==="DFLT")return t.script.defaultLangSys.featureIndexes}return[]};tr.prototype.getScriptFeaturesIndexes=function(r){var e=this.font.tables;if(!e.gsub)return[];if(!r)return this.getDefaultScriptFeaturesIndexes();for(var t=this.font.tables.gsub.scripts,n=0;n<t.length;n++){var a=t[n];if(a.tag===r&&a.script.defaultLangSys)return a.script.defaultLangSys.featureIndexes;var i=a.langSysRecords;if(i)for(var o=0;o<i.length;o++){var x=i[o];if(x.tag===r){var A=x.langSys;return A.featureIndexes}}}return this.getDefaultScriptFeaturesIndexes()};tr.prototype.mapTagsToFeatures=function(r,e){for(var t={},n=0;n<r.length;n++){var a=r[n].tag,i=r[n].feature;t[a]=i}this.features[e].tags=t};tr.prototype.getScriptFeatures=function(r){var e=this.features[r];if(this.features.hasOwnProperty(r))return e;var t=this.getScriptFeaturesIndexes(r);if(!t)return null;var n=this.font.tables.gsub;return e=t.map(function(a){return n.features[a]}),this.features[r]=e,this.mapTagsToFeatures(e,r),e};tr.prototype.getSubstitutionType=function(r,e){var t=r.lookupType.toString(),n=e.substFormat.toString();return t+n};tr.prototype.getLookupMethod=function(r,e){var t=this,n=this.getSubstitutionType(r,e);switch(n){case"11":return function(a){return IL.apply(t,[a,e])};case"12":return function(a){return dL.apply(t,[a,e])};case"63":return function(a){return pL.apply(t,[a,e])};case"41":return function(a){return SL.apply(t,[a,e])};case"21":return function(a){return CL.apply(t,[a,e])};default:throw new Error("lookupType: "+r.lookupType+" - substFormat: "+e.substFormat+" is not yet supported")}};tr.prototype.lookupFeature=function(r){var e=r.contextParams,t=e.index,n=this.getFeature({tag:r.tag,script:r.script});if(!n)return new Error("font '"+this.font.names.fullName.en+"' doesn't support feature '"+r.tag+"' for script '"+r.script+"'.");for(var a=this.getFeatureLookups(n),i=[].concat(e.context),o=0;o<a.length;o++)for(var x=a[o],A=this.getLookupSubtables(x),E=0;E<A.length;E++){var l=A[E],c=this.getSubstitutionType(x,l),L=this.getLookupMethod(x,l),T=void 0;switch(c){case"11":T=L(e.current),T&&i.splice(t,1,new Et({id:11,tag:r.tag,substitution:T}));break;case"12":T=L(e.current),T&&i.splice(t,1,new Et({id:12,tag:r.tag,substitution:T}));break;case"63":T=L(e),Array.isArray(T)&&T.length&&i.splice(t,1,new Et({id:63,tag:r.tag,substitution:T}));break;case"41":T=L(e),T&&i.splice(t,1,new Et({id:41,tag:r.tag,substitution:T}));break;case"21":T=L(e.current),T&&i.splice(t,1,new Et({id:21,tag:r.tag,substitution:T}));break}e=new cr(i,t),!(Array.isArray(T)&&!T.length)&&(T=null)}return i.length?i:null};tr.prototype.supports=function(r){if(!r.script)return!1;this.getScriptFeatures(r.script);var e=this.features.hasOwnProperty(r.script);if(!r.tag)return e;var t=this.features[r.script].some(function(n){return n.tag===r.tag});return e&&t};tr.prototype.getLookupSubtables=function(r){return r.subtables||null};tr.prototype.getLookupByIndex=function(r){var e=this.font.tables.gsub.lookups;return e[r]||null};tr.prototype.getFeatureLookups=function(r){return r.lookupListIndexes.map(this.getLookupByIndex.bind(this))};tr.prototype.getFeature=function(e){if(!this.font)return{FAIL:"No font was found"};this.features.hasOwnProperty(e.script)||this.getScriptFeatures(e.script);var t=this.features[e.script];return t?t.tags[e.tag]?this.features[e.script].tags[e.tag]:null:{FAIL:"No feature for script "+e.script}};function uL(r){var e=r.current,t=r.get(-1);return t===null&&Qr(e)||!Qr(t)&&Qr(e)}function RL(r){var e=r.get(1);return e===null||!Qr(e)}var gL={startCheck:uL,endCheck:RL};function yL(r){var e=r.current,t=r.get(-1);return(Qr(e)||tt(e))&&!Qr(t)}function NL(r){var e=r.get(1);switch(!0){case e===null:return!0;case(!Qr(e)&&!tt(e)):var t=hL(e);if(!t)return!0;if(t){var n=!1;if(n=r.lookahead.some(function(a){return Qr(a)||tt(a)}),!n)return!0}break;default:return!1}}var DL={startCheck:yL,endCheck:NL};function mL(r,e,t){e[t].setState(r.tag,r.substitution)}function OL(r,e,t){e[t].setState(r.tag,r.substitution)}function BL(r,e,t){r.substitution.forEach(function(n,a){var i=e[t+a];i.setState(r.tag,n)})}function HL(r,e,t){var n=e[t];n.setState(r.tag,r.substitution.ligGlyph);for(var a=r.substitution.components.length,i=0;i<a;i++)n=e[t+i+1],n.setState("deleted",!0)}var ao={11:mL,12:OL,63:BL,41:HL};function j0(r,e,t){r instanceof Et&&ao[r.id]&&ao[r.id](r,e,t)}function FL(r){for(var e=[].concat(r.backtrack),t=e.length-1;t>=0;t--){var n=e[t],a=zA(n),i=tt(n);if(!a&&!i)return!0;if(a)return!1}return!1}function fL(r){if(zA(r.current))return!1;for(var e=0;e<r.lookahead.length;e++){var t=r.lookahead[e],n=tt(t);if(!n)return!0}return!1}function ML(r){var e=this,t="arab",n=this.featuresTags[t],a=this.tokenizer.getRangeTokens(r);if(a.length!==1){var i=new cr(a.map(function(x){return x.getState("glyphIndex")}),0),o=new cr(a.map(function(x){return x.char}),0);a.forEach(function(x,A){if(!tt(x.char)){i.setCurrentIndex(A),o.setCurrentIndex(A);var E=0;FL(o)&&(E|=1),fL(o)&&(E|=2);var l;switch(E){case 1:l="fina";break;case 2:l="init";break;case 3:l="medi";break}if(n.indexOf(l)!==-1){var c=e.query.lookupFeature({tag:l,script:t,contextParams:i});if(c instanceof Error)return console.info(c.message);c.forEach(function(L,T){L instanceof Et&&(j0(L,a,T),i.context[T]=L.substitution)})}}})}}function io(r,e){var t=r.map(function(n){return n.activeState.value});return new cr(t,e||0)}function GL(r){var e=this,t="arab",n=this.tokenizer.getRangeTokens(r),a=io(n);a.context.forEach(function(i,o){a.setCurrentIndex(o);var x=e.query.lookupFeature({tag:"rlig",script:t,contextParams:a});x.length&&(x.forEach(function(A){return j0(A,n,o)}),a=io(n))})}function PL(r){var e=r.current,t=r.get(-1);return t===null&&Jn(e)||!Jn(t)&&Jn(e)}function bL(r){var e=r.get(1);return e===null||!Jn(e)}var UL={startCheck:PL,endCheck:bL};function oo(r,e){var t=r.map(function(n){return n.activeState.value});return new cr(t,e||0)}function vL(r){var e=this,t="latn",n=this.tokenizer.getRangeTokens(r),a=oo(n);a.context.forEach(function(i,o){a.setCurrentIndex(o);var x=e.query.lookupFeature({tag:"liga",script:t,contextParams:a});x.length&&(x.forEach(function(A){return j0(A,n,o)}),a=oo(n))})}function dr(r){this.baseDir=r||"ltr",this.tokenizer=new Se,this.featuresTags={}}dr.prototype.setText=function(r){this.text=r};dr.prototype.contextChecks={latinWordCheck:UL,arabicWordCheck:gL,arabicSentenceCheck:DL};function Za(r){var e=this.contextChecks[r+"Check"];return this.tokenizer.registerContextChecker(r,e.startCheck,e.endCheck)}function YL(){return Za.call(this,"latinWord"),Za.call(this,"arabicWord"),Za.call(this,"arabicSentence"),this.tokenizer.tokenize(this.text)}function wL(){var r=this,e=this.tokenizer.getContextRanges("arabicSentence");e.forEach(function(t){var n=r.tokenizer.getRangeTokens(t);r.tokenizer.replaceRange(t.startIndex,t.endOffset,n.reverse())})}dr.prototype.registerFeatures=function(r,e){var t=this,n=e.filter(function(a){return t.query.supports({script:r,tag:a})});this.featuresTags.hasOwnProperty(r)?this.featuresTags[r]=this.featuresTags[r].concat(n):this.featuresTags[r]=n};dr.prototype.applyFeatures=function(r,e){if(!r)throw new Error("No valid font was provided to apply features");this.query||(this.query=new tr(r));for(var t=0;t<e.length;t++){var n=e[t];this.query.supports({script:n.script})&&this.registerFeatures(n.script,n.tags)}};dr.prototype.registerModifier=function(r,e,t){this.tokenizer.registerModifier(r,e,t)};function Q0(){if(this.tokenizer.registeredModifiers.indexOf("glyphIndex")===-1)throw new Error("glyphIndex modifier is required to apply arabic presentation features.")}function WL(){var r=this,e="arab";if(this.featuresTags.hasOwnProperty(e)){Q0.call(this);var t=this.tokenizer.getContextRanges("arabicWord");t.forEach(function(n){ML.call(r,n)})}}function kL(){var r=this,e="arab";if(this.featuresTags.hasOwnProperty(e)){var t=this.featuresTags[e];if(t.indexOf("rlig")!==-1){Q0.call(this);var n=this.tokenizer.getContextRanges("arabicWord");n.forEach(function(a){GL.call(r,a)})}}}function KL(){var r=this,e="latn";if(this.featuresTags.hasOwnProperty(e)){var t=this.featuresTags[e];if(t.indexOf("liga")!==-1){Q0.call(this);var n=this.tokenizer.getContextRanges("latinWord");n.forEach(function(a){vL.call(r,a)})}}}dr.prototype.checkContextReady=function(r){return!!this.tokenizer.getContext(r)};dr.prototype.applyFeaturesToContexts=function(){this.checkContextReady("arabicWord")&&(WL.call(this),kL.call(this)),this.checkContextReady("latinWord")&&KL.call(this),this.checkContextReady("arabicSentence")&&wL.call(this)};dr.prototype.processText=function(r){(!this.text||this.text!==r)&&(this.setText(r),YL.call(this),this.applyFeaturesToContexts())};dr.prototype.getBidiText=function(r){return this.processText(r),this.tokenizer.getText()};dr.prototype.getTextGlyphs=function(r){this.processText(r);for(var e=[],t=0;t<this.tokenizer.tokens.length;t++){var n=this.tokenizer.tokens[t];if(!n.state.deleted){var a=n.activeState.value;e.push(Array.isArray(a)?a[0]:a)}}return e};function Ee(r){if(r=r||{},r.tables=r.tables||{},!r.empty){_t(r.familyName,"When creating a new Font object, familyName is required."),_t(r.styleName,"When creating a new Font object, styleName is required."),_t(r.unitsPerEm,"When creating a new Font object, unitsPerEm is required."),_t(r.ascender,"When creating a new Font object, ascender is required."),_t(r.descender<=0,"When creating a new Font object, negative descender value is required."),this.names={fontFamily:{en:r.familyName||" "},fontSubfamily:{en:r.styleName||" "},fullName:{en:r.fullName||r.familyName+" "+r.styleName},postScriptName:{en:r.postScriptName||(r.familyName+r.styleName).replace(/\s/g,"")},designer:{en:r.designer||" "},designerURL:{en:r.designerURL||" "},manufacturer:{en:r.manufacturer||" "},manufacturerURL:{en:r.manufacturerURL||" "},license:{en:r.license||" "},licenseURL:{en:r.licenseURL||" "},version:{en:r.version||"Version 0.1"},description:{en:r.description||" "},copyright:{en:r.copyright||" "},trademark:{en:r.trademark||" "}},this.unitsPerEm=r.unitsPerEm||1e3,this.ascender=r.ascender,this.descender=r.descender,this.slope=r.slope,this.italicAngle=r.italicAngle,this.createdTimestamp=r.createdTimestamp;var e=0;this.italicAngle<0?e|=this.fsSelectionValues.ITALIC:this.italicAngle>0&&(e|=this.fsSelectionValues.OBLIQUE),this.weightClass>=600&&(e|=this.fsSelectionValues.BOLD),e==0&&(e=this.fsSelectionValues.REGULAR),this.tables=Object.assign(r.tables,{os2:Object.assign({usWeightClass:r.weightClass||this.usWeightClasses.MEDIUM,usWidthClass:r.widthClass||this.usWidthClasses.MEDIUM,bFamilyType:r.panose[0]||0,bSerifStyle:r.panose[1]||0,bWeight:r.panose[2]||0,bProportion:r.panose[3]||0,bContrast:r.panose[4]||0,bStrokeVariation:r.panose[5]||0,bArmStyle:r.panose[6]||0,bLetterform:r.panose[7]||0,bMidline:r.panose[8]||0,bXHeight:r.panose[9]||0,fsSelection:e},r.tables.os2)})}this.supported=!0,this.glyphs=new Dr.GlyphSet(this,r.glyphs||[]),this.encoding=new sA(this),this.position=new Sn(this),this.substitution=new Ir(this),this.tables=this.tables||{},this._push=null,this._hmtxTableData={},Object.defineProperty(this,"hinting",{get:function(){if(this._hinting)return this._hinting;if(this.outlinesFormat==="truetype")return this._hinting=new VA(this)}})}Ee.prototype.hasChar=function(r){return this.encoding.charToGlyphIndex(r)!==null};Ee.prototype.charToGlyphIndex=function(r){return this.encoding.charToGlyphIndex(r)};Ee.prototype.charToGlyph=function(r){var e=this.charToGlyphIndex(r),t=this.glyphs.get(e);return t||(t=this.glyphs.get(0)),t};Ee.prototype.updateFeatures=function(r){return this.defaultRenderOptions.features.map(function(e){return e.script==="latn"?{script:"latn",tags:e.tags.filter(function(t){return r[t]})}:e})};Ee.prototype.stringToGlyphs=function(r,e){var t=this,n=new dr,a=function(c){return t.charToGlyphIndex(c.char)};n.registerModifier("glyphIndex",null,a);var i=e?this.updateFeatures(e.features):this.defaultRenderOptions.features;n.applyFeatures(this,i);for(var o=n.getTextGlyphs(r),x=o.length,A=new Array(x),E=this.glyphs.get(0),l=0;l<x;l+=1)A[l]=this.glyphs.get(o[l])||E;return A};Ee.prototype.nameToGlyphIndex=function(r){return this.glyphNames.nameToGlyphIndex(r)};Ee.prototype.nameToGlyph=function(r){var e=this.nameToGlyphIndex(r),t=this.glyphs.get(e);return t||(t=this.glyphs.get(0)),t};Ee.prototype.glyphIndexToName=function(r){return this.glyphNames.glyphIndexToName?this.glyphNames.glyphIndexToName(r):""};Ee.prototype.getKerningValue=function(r,e){r=r.index||r,e=e.index||e;var t=this.position.defaultKerningTables;return t?this.position.getKerningValue(t,r,e):this.kerningPairs[r+","+e]||0};Ee.prototype.defaultRenderOptions={kerning:!0,features:[{script:"arab",tags:["init","medi","fina","rlig"]},{script:"latn",tags:["liga","rlig"]}]};Ee.prototype.forEachGlyph=function(r,e,t,n,a,i){e=e!==void 0?e:0,t=t!==void 0?t:0,n=n!==void 0?n:72,a=Object.assign({},this.defaultRenderOptions,a);var o=1/this.unitsPerEm*n,x=this.stringToGlyphs(r,a),A;if(a.kerning){var E=a.script||this.position.getDefaultScriptName();A=this.position.getKerningTables(E,a.language)}for(var l=0;l<x.length;l+=1){var c=x[l];if(i.call(this,c,e,t,n,a),c.advanceWidth&&(e+=c.advanceWidth*o),a.kerning&&l<x.length-1){var L=A?this.position.getKerningValue(A,c.index,x[l+1].index):this.getKerningValue(c,x[l+1]);e+=L*o}a.letterSpacing?e+=a.letterSpacing*n:a.tracking&&(e+=a.tracking/1e3*n)}return e};Ee.prototype.getPath=function(r,e,t,n,a){var i=new Be;return this.forEachGlyph(r,e,t,n,a,function(o,x,A,E){var l=o.getPath(x,A,E,a,this);i.extend(l)}),i};Ee.prototype.getPaths=function(r,e,t,n,a){var i=[];return this.forEachGlyph(r,e,t,n,a,function(o,x,A,E){var l=o.getPath(x,A,E,a,this);i.push(l)}),i};Ee.prototype.getAdvanceWidth=function(r,e,t){return this.forEachGlyph(r,0,0,e,t,function(){})};Ee.prototype.draw=function(r,e,t,n,a,i){this.getPath(e,t,n,a,i).draw(r)};Ee.prototype.drawPoints=function(r,e,t,n,a,i){this.forEachGlyph(e,t,n,a,i,function(o,x,A,E){o.drawPoints(r,x,A,E)})};Ee.prototype.drawMetrics=function(r,e,t,n,a,i){this.forEachGlyph(e,t,n,a,i,function(o,x,A,E){o.drawMetrics(r,x,A,E)})};Ee.prototype.getEnglishName=function(r){var e=this.names[r];if(e)return e.en};Ee.prototype.validate=function(){var r=this;function e(n,a){}function t(n){var a=r.getEnglishName(n);a&&a.trim().length>0}t("fontFamily"),t("weightName"),t("manufacturer"),t("copyright"),t("version"),this.unitsPerEm>0};Ee.prototype.toTables=function(){return Hl.fontToTable(this)};Ee.prototype.toBuffer=function(){return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."),this.toArrayBuffer()};Ee.prototype.toArrayBuffer=function(){for(var r=this.toTables(),e=r.encode(),t=new ArrayBuffer(e.length),n=new Uint8Array(t),a=0;a<e.length;a++)n[a]=e[a];return t};Ee.prototype.download=function(r){var e=this.getEnglishName("fontFamily"),t=this.getEnglishName("fontSubfamily");r=r||e.replace(/\s/g,"")+"-"+t+".otf";var n=this.toArrayBuffer();if(fl())if(window.URL=window.URL||window.webkitURL,window.URL){var a=new DataView(n),i=new Blob([a],{type:"font/opentype"}),o=document.createElement("a");o.href=window.URL.createObjectURL(i),o.download=r;var x=document.createEvent("MouseEvents");x.initEvent("click",!0,!1),o.dispatchEvent(x)}else console.warn("Font file could not be downloaded. Try using a different browser.");else{var A=require("fs"),E=Ml(n);A.writeFileSync(r,E)}};Ee.prototype.fsSelectionValues={ITALIC:1,UNDERSCORE:2,NEGATIVE:4,OUTLINED:8,STRIKEOUT:16,BOLD:32,REGULAR:64,USER_TYPO_METRICS:128,WWS:256,OBLIQUE:512};Ee.prototype.usWidthClasses={ULTRA_CONDENSED:1,EXTRA_CONDENSED:2,CONDENSED:3,SEMI_CONDENSED:4,MEDIUM:5,SEMI_EXPANDED:6,EXPANDED:7,EXTRA_EXPANDED:8,ULTRA_EXPANDED:9};Ee.prototype.usWeightClasses={THIN:100,EXTRA_LIGHT:200,LIGHT:300,NORMAL:400,MEDIUM:500,SEMI_BOLD:600,BOLD:700,EXTRA_BOLD:800,BLACK:900};function XA(r,e){var t=JSON.stringify(r),n=256;for(var a in e){var i=parseInt(a);if(!(!i||i<256)){if(JSON.stringify(e[a])===t)return i;n<=i&&(n=i+1)}}return e[n]=r,n}function VL(r,e,t){var n=XA(e.name,t);return[{name:"tag_"+r,type:"TAG",value:e.tag},{name:"minValue_"+r,type:"FIXED",value:e.minValue<<16},{name:"defaultValue_"+r,type:"FIXED",value:e.defaultValue<<16},{name:"maxValue_"+r,type:"FIXED",value:e.maxValue<<16},{name:"flags_"+r,type:"USHORT",value:0},{name:"nameID_"+r,type:"USHORT",value:n}]}function JL(r,e,t){var n={},a=new b.Parser(r,e);return n.tag=a.parseTag(),n.minValue=a.parseFixed(),n.defaultValue=a.parseFixed(),n.maxValue=a.parseFixed(),a.skip("uShort",1),n.name=t[a.parseUShort()]||{},n}function _L(r,e,t,n){for(var a=XA(e.name,n),i=[{name:"nameID_"+r,type:"USHORT",value:a},{name:"flags_"+r,type:"USHORT",value:0}],o=0;o<t.length;++o){var x=t[o].tag;i.push({name:"axis_"+r+" "+x,type:"FIXED",value:e.coordinates[x]<<16})}return i}function ZL(r,e,t,n){var a={},i=new b.Parser(r,e);a.name=n[i.parseUShort()]||{},i.skip("uShort",1),a.coordinates={};for(var o=0;o<t.length;++o)a.coordinates[t[o].tag]=i.parseFixed();return a}function zL(r,e){var t=new Y.Table("fvar",[{name:"version",type:"ULONG",value:65536},{name:"offsetToData",type:"USHORT",value:0},{name:"countSizePairs",type:"USHORT",value:2},{name:"axisCount",type:"USHORT",value:r.axes.length},{name:"axisSize",type:"USHORT",value:20},{name:"instanceCount",type:"USHORT",value:r.instances.length},{name:"instanceSize",type:"USHORT",value:4+r.axes.length*4}]);t.offsetToData=t.sizeOf();for(var n=0;n<r.axes.length;n++)t.fields=t.fields.concat(VL(n,r.axes[n],e));for(var a=0;a<r.instances.length;a++)t.fields=t.fields.concat(_L(a,r.instances[a],r.axes,e));return t}function XL(r,e,t){var n=new b.Parser(r,e),a=n.parseULong();V.argument(a===65536,"Unsupported fvar table version.");var i=n.parseOffset16();n.skip("uShort",1);for(var o=n.parseUShort(),x=n.parseUShort(),A=n.parseUShort(),E=n.parseUShort(),l=[],c=0;c<o;c++)l.push(JL(r,e+i+c*x,t));for(var L=[],T=e+i+o*x,I=0;I<A;I++)L.push(ZL(r,T+I*E,l,t));return{axes:l,instances:L}}var jL={make:zL,parse:XL},Tr=new Array(10);Tr[1]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{posFormat:1,coverage:this.parsePointer(C.coverage),value:this.parseValueRecord()};if(t===2)return{posFormat:2,coverage:this.parsePointer(C.coverage),values:this.parseValueRecordList()};V.assert(!1,"0x"+e.toString(16)+": GPOS lookup type 1 format must be 1 or 2.")};Tr[2]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();V.assert(t===1||t===2,"0x"+e.toString(16)+": GPOS lookup type 2 format must be 1 or 2.");var n=this.parsePointer(C.coverage),a=this.parseUShort(),i=this.parseUShort();if(t===1)return{posFormat:t,coverage:n,valueFormat1:a,valueFormat2:i,pairSets:this.parseList(C.pointer(C.list(function(){return{secondGlyph:this.parseUShort(),value1:this.parseValueRecord(a),value2:this.parseValueRecord(i)}})))};if(t===2){var o=this.parsePointer(C.classDef),x=this.parsePointer(C.classDef),A=this.parseUShort(),E=this.parseUShort();return{posFormat:t,coverage:n,valueFormat1:a,valueFormat2:i,classDef1:o,classDef2:x,class1Count:A,class2Count:E,classRecords:this.parseList(A,C.list(E,function(){return{value1:this.parseValueRecord(a),value2:this.parseValueRecord(i)}}))}}};Tr[3]=function(){return{error:"GPOS Lookup 3 not supported"}};Tr[4]=function(){return{error:"GPOS Lookup 4 not supported"}};Tr[5]=function(){return{error:"GPOS Lookup 5 not supported"}};Tr[6]=function(){return{error:"GPOS Lookup 6 not supported"}};Tr[7]=function(){return{error:"GPOS Lookup 7 not supported"}};Tr[8]=function(){return{error:"GPOS Lookup 8 not supported"}};Tr[9]=function(){return{error:"GPOS Lookup 9 not supported"}};function QL(r,e){e=e||0;var t=new C(r,e),n=t.parseVersion(1);return V.argument(n===1||n===1.1,"Unsupported GPOS table version "+n),n===1?{version:n,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(Tr)}:{version:n,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(Tr),variations:t.parseFeatureVariationsList()}}var qL=new Array(10);function $L(r){return new Y.Table("GPOS",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new Y.ScriptList(r.scripts)},{name:"features",type:"TABLE",value:new Y.FeatureList(r.features)},{name:"lookups",type:"TABLE",value:new Y.LookupList(r.lookups,qL)}])}var ec={parse:QL,make:$L};function rc(r){var e={};r.skip("uShort");var t=r.parseUShort();V.argument(t===0,"Unsupported kern sub-table version."),r.skip("uShort",2);var n=r.parseUShort();r.skip("uShort",3);for(var a=0;a<n;a+=1){var i=r.parseUShort(),o=r.parseUShort(),x=r.parseShort();e[i+","+o]=x}return e}function tc(r){var e={};r.skip("uShort");var t=r.parseULong();t>1&&console.warn("Only the first kern subtable is supported."),r.skip("uLong");var n=r.parseUShort(),a=n&255;if(r.skip("uShort"),a===0){var i=r.parseUShort();r.skip("uShort",3);for(var o=0;o<i;o+=1){var x=r.parseUShort(),A=r.parseUShort(),E=r.parseShort();e[x+","+A]=E}}return e}function nc(r,e){var t=new b.Parser(r,e),n=t.parseUShort();if(n===0)return rc(t);if(n===1)return tc(t);throw new Error("Unsupported kern table version ("+n+").")}var ac={parse:nc};function ic(r,e,t,n){for(var a=new b.Parser(r,e),i=n?a.parseUShort:a.parseULong,o=[],x=0;x<t+1;x+=1){var A=i.call(a);n&&(A*=2),o.push(A)}return o}var oc={parse:ic};function Ac(r,e){var t=require("fs");t.readFile(r,function(n,a){if(n)return e(n.message);e(null,UA(a))})}function xc(r,e){var t=new XMLHttpRequest;t.open("get",r,!0),t.responseType="arraybuffer",t.onload=function(){return t.response?e(null,t.response):e("Font could not be loaded: "+t.statusText)},t.onerror=function(){e("Font could not be loaded")},t.send()}function Ao(r,e){for(var t=[],n=12,a=0;a<e;a+=1){var i=b.getTag(r,n),o=b.getULong(r,n+4),x=b.getULong(r,n+8),A=b.getULong(r,n+12);t.push({tag:i,checksum:o,offset:x,length:A,compression:!1}),n+=16}return t}function Ec(r,e){for(var t=[],n=44,a=0;a<e;a+=1){var i=b.getTag(r,n),o=b.getULong(r,n+4),x=b.getULong(r,n+8),A=b.getULong(r,n+12),E=void 0;x<A?E="WOFF":E=!1,t.push({tag:i,offset:o,compression:E,compressedLength:x,length:A}),n+=20}return t}function De(r,e){if(e.compression==="WOFF"){var t=new Uint8Array(r.buffer,e.offset+2,e.compressedLength-2),n=new Uint8Array(e.length);if(AE(t,n),n.byteLength!==e.length)throw new Error("Decompression error: "+e.tag+" decompressed length doesn't match recorded length");var a=new DataView(n.buffer,0);return{data:a,offset:0}}else return{data:r,offset:e.offset}}function q0(r,e){e=e??{};var t,n,a=new Ee({empty:!0}),i=new DataView(r,0),o,x=[],A=b.getTag(i,0);if(A==="\0\0\0"||A==="true"||A==="typ1")a.outlinesFormat="truetype",o=b.getUShort(i,4),x=Ao(i,o);else if(A==="OTTO")a.outlinesFormat="cff",o=b.getUShort(i,4),x=Ao(i,o);else if(A==="wOFF"){var E=b.getTag(i,4);if(E==="\0\0\0")a.outlinesFormat="truetype";else if(E==="OTTO")a.outlinesFormat="cff";else throw new Error("Unsupported OpenType flavor "+A);o=b.getUShort(i,12),x=Ec(i,o)}else throw new Error("Unsupported OpenType signature "+A);for(var l,c,L,T,I,d,p,S,u,y,G,m=0;m<o;m+=1){var D=x[m],H=void 0;switch(D.tag){case"cmap":H=De(i,D),a.tables.cmap=lA.parse(H.data,H.offset),a.encoding=new LA(a.tables.cmap);break;case"cvt ":H=De(i,D),G=new b.Parser(H.data,H.offset),a.tables.cvt=G.parseShortList(D.length/2);break;case"fvar":c=D;break;case"fpgm":H=De(i,D),G=new b.Parser(H.data,H.offset),a.tables.fpgm=G.parseByteList(D.length);break;case"head":H=De(i,D),a.tables.head=RA.parse(H.data,H.offset),a.unitsPerEm=a.tables.head.unitsPerEm,t=a.tables.head.indexToLocFormat;break;case"hhea":H=De(i,D),a.tables.hhea=gA.parse(H.data,H.offset),a.ascender=a.tables.hhea.ascender,a.descender=a.tables.hhea.descender,a.numberOfHMetrics=a.tables.hhea.numberOfHMetrics;break;case"hmtx":d=D;break;case"ltag":H=De(i,D),n=NA.parse(H.data,H.offset);break;case"maxp":H=De(i,D),a.tables.maxp=DA.parse(H.data,H.offset),a.numGlyphs=a.tables.maxp.numGlyphs;break;case"name":u=D;break;case"OS/2":H=De(i,D),a.tables.os2=p0.parse(H.data,H.offset);break;case"post":H=De(i,D),a.tables.post=fA.parse(H.data,H.offset),a.glyphNames=new _0(a.tables.post);break;case"prep":H=De(i,D),G=new b.Parser(H.data,H.offset),a.tables.prep=G.parseByteList(D.length);break;case"glyf":L=D;break;case"loca":S=D;break;case"CFF ":l=D;break;case"kern":p=D;break;case"GPOS":T=D;break;case"GSUB":I=D;break;case"meta":y=D;break}}var v=De(i,u);if(a.tables.name=FA.parse(v.data,v.offset,n),a.names=a.tables.name,L&&S){var J=t===0,Q=De(i,S),X=oc.parse(Q.data,Q.offset,a.numGlyphs,J),Ie=De(i,L);a.glyphs=WA.parse(Ie.data,Ie.offset,X,a,e)}else if(l){var Ye=De(i,l);uA.parse(Ye.data,Ye.offset,a,e)}else throw new Error("Font doesn't contain TrueType or CFF outlines.");var ge=De(i,d);if(yA.parse(a,ge.data,ge.offset,a.numberOfHMetrics,a.numGlyphs,a.glyphs,e),OE(a,e),p){var te=De(i,p);a.kerningPairs=ac.parse(te.data,te.offset)}else a.kerningPairs={};if(T){var ye=De(i,T);a.tables.gpos=ec.parse(ye.data,ye.offset),a.position.init()}if(I){var Te=De(i,I);a.tables.gsub=MA.parse(Te.data,Te.offset)}if(c){var Ce=De(i,c);a.tables.fvar=jL.parse(Ce.data,Ce.offset,a.names)}if(y){var He=De(i,y);a.tables.meta=GA.parse(He.data,He.offset),a.metas=a.tables.meta}return a}function lc(r,e,t){var n=typeof window>"u",a=n?Ac:xc;return new Promise(function(i,o){a(r,function(x,A){if(x){if(e)return e(x);o(x)}var E;try{E=q0(A,t)}catch(l){if(e)return e(l,null);o(l)}if(e)return e(null,E);i(E)})})}function sc(r,e){var t=require("fs"),n=t.readFileSync(r);return q0(UA(n),e)}var nt=Object.freeze({__proto__:null,Font:Ee,Glyph:rr,Path:Be,BoundingBox:Yr,_parse:b,parse:q0,load:lc,loadSync:sc});function Lc(r){let e,t;if(typeof window.DOMParser<"u")e=new window.DOMParser().parseFromString(r,"text/xml");else if(typeof window.ActiveXObject<"u"&&new window.ActiveXObject("Microsoft.XMLDOM"))e=new window.ActiveXObject("Microsoft.XMLDOM"),e.async="false",e.loadXML(r);else throw console.warn("No XML document parser found."),t=new SyntaxError("No XML document parser found."),t;if(e.getElementsByTagName("parsererror").length){const A=e.getElementsByTagName("div")[0].innerHTML;throw t=new SyntaxError(x(A)),t}return{name:e.documentElement.nodeName,attributes:o(e.documentElement.attributes),content:i(e.documentElement)};function i(A){const E=A.childNodes;if(E.length===0)return x(A.nodeValue);const l=[];let c,L,T;for(const I of E)c={},I.nodeName!=="#comment"&&(L=i(I),T=o(I.attributes),I.nodeName==="#text"&&JSON.stringify(T)==="{}"?c=x(L):(c.name=I.nodeName,c.attributes=T,c.content=L),c!==""&&l.push(c));return l}function o(A){if(!A||!A.length)return{};const E={};for(const l of A)E[l.name]=x(l.value);return E}function x(A){try{return A=A.replace(/^\s+|\s+$/g,""),A.replace(/(\r\n|\n|\r|\t)/gm,"")}catch{return""}}}let za=0;function Jr(r){const e=document.getElementById("progress-indicator__message"),t=document.getElementById("progress-indicator__bar");za=(za+.95)%100,t.style.backgroundPosition=`${za}%`,r&&(e.innerHTML=r)}function cc(){let r=s({id:"progress-indicator__wrapper"}),e=s({id:"progress-indicator__message",innerHTML:"Working..."}),t=s({tag:"div",id:"progress-indicator__bar"});return R(r,[e,t]),r}class pr{constructor(){}changed(){this.cache&&(this.cache={}),this.parent&&this.parent.changed&&this.parent.changed()}get ident(){return this.__ID||""}get objType(){return this._objType||this.constructor.name}get displayType(){if(this.id){if(this.id.startsWith("liga-"))return"Ligature";if(this.id.startsWith("comp-"))return"Component";if(this.id.startsWith("glyph-"))return"Glyph";if(this.id.startsWith("kern-"))return"Kern Group"}return this.objType}set objType(e){this._objType=e}get cache(){return this._cache||(this._cache={}),this._cache}set cache(e={}){this._cache=e}save(e=!1){const t=ze(this);return e?t.objType=this.objType:delete t.objType,t.cache&&delete t.cache,t}clone(){return new this.constructor(this.save(!0))}toString(){return qt(this.save())}print(e=0,t=!1){let n="";for(let x=0;x<e;x++)n+="  ";let a=`${n}{${this.objType} ${t||""}
`;n+="  ";const i=this.save();let o;for(const x of Object.keys(i))o=this[x],o.print?a+=`${n}${x}: ${o.print(e+1)}
`:typeof o!="function"&&(typeof o=="object"?a+=`${n}${x}: ${JSON.stringify(o)}
`:a+=`${n}${x}: ${o}
`);return a+=`${n.substring(2)}}/${this.objType} ${t||""}`,a}get isLockable(){return!1}isLocked(){return!1}lock(){}unlock(){}}function Tc(){let r=["💖","🦧","🐆","✅","🐋","😈","🦑"],e="";for(let t=0;t<3;t++)e+=r[Math.floor(Math.random()*r.length)];return e}const hc=Object.freeze(Object.defineProperty({__proto__:null,GlyphElement:pr,makeRandomID:Tc},Symbol.toStringTag,{value:"Module"}));class jA extends pr{constructor({x:e=0,y:t=0,parent:n=!1}={}){super(),this.parent=n,this.x=e,this.y=t,this.objType="Coord"}save(){return{x:Ve(this.x),y:Ve(this.y)}}print(e=0){let t="";for(let a=0;a<e;a++)t+="  ";let n=`${t}{`;return n+=`x: ${q(this._x)?this._x:"--"}  `,n+=`y: ${q(this._y)?this._y:"--"}`,n+="}",n}get x(){return isNaN(this._x)?(this._x=0,console.warn("Coord.x was NaN, setting to 0"),0):this._x}get y(){return isNaN(this._y)?(this._y=0,console.warn("Coord.y was NaN, setting to 0"),0):this._y}set x(e=0){e=Ve(e),isNaN(e)?this._x=0:this._x=e,this.changed()}set y(e=0){e=Ve(e),isNaN(e)?this._y=0:this._y=e,this.changed()}}const Ic=Object.freeze(Object.defineProperty({__proto__:null,Coord:jA},Symbol.toStringTag,{value:"Module"}));class ae extends pr{constructor({coord:e={x:0,y:0},use:t=!0,xLock:n=!1,yLock:a=!1,parent:i=!1,type:o=!1}={}){super(),this.parent=i,this.coord=e,this.use=t,this.xLock=n,this.yLock=a,this.type=o,this.objType="ControlPoint"}save(e=!1){const t={coord:this.coord.save(e)};return this.use||(t.use=!1),this.xLock&&(t.xLock=!0),this.yLock&&(t.yLock=!0),e&&(t.objType=this.objType),this.type==="p"&&delete t.use,!e&&this.__ID&&delete this.__ID,t}print(e=0){let t="";for(let a=0;a<e;a++)t+="  ";let n=`${t}{ControlPoint
`;return t+="  ",n+=`${t}coord: ${this.coord.print(e+1)}
`,this.type!=="p"&&(n+=`${t}use: ${this.use}
`),n+=`${t.substring(2)}}`,n}get x(){return this.use?this._coord.x:this.parent.p.x}get y(){return this.use?this._coord.y:this.parent.p.y}get coord(){return this._coord}get use(){return this._use!==!1}get xLock(){return this._xLock}get yLock(){return this._yLock}get type(){return this._type}set x(e){if(this.type==="p"){let t=e-this.x;this.parent.updatePathPointPosition("p",t,0)}else this.coord.x=e,this.use=!0}set y(e){if(this.type==="p"){let t=e-this.y;this.parent.updatePathPointPosition("p",0,t)}else this.coord.y=e,this.use=!0}set coord(e){this._coord=new jA(e),this._coord.parent=this,this.use=!0}set use(e){this._use=!!e,this.changed()}set xLock(e){this._xLock=!!e}set yLock(e){this._yLock=!!e}set type(e){this._type=e}get isLockable(){return!0}isLocked(e){return e==="x"?this.xLock:e==="y"?this.yLock:!1}lock(e){e==="x"&&(this.xLock=!0),e==="y"&&(this.yLock=!0)}unlock(e){e==="x"&&(this.xLock=!1),e==="y"&&(this.yLock=!1)}rotate(e,t){Qn(this.coord,e,t)}}const dc=Object.freeze(Object.defineProperty({__proto__:null,ControlPoint:ae},Symbol.toStringTag,{value:"Module"}));class qe extends pr{constructor({xMin:e,xMax:t,yMin:n,yMax:a}={}){return super(),this.xMin=e,this.xMax=t,this.yMin=n,this.yMax=a,this.objType="Maxes",this}save(e=!1){const t={};return q(this._xMin)&&(t.xMin=this._xMin),q(this._xMax)&&(t.xMax=this._xMax),q(this._yMin)&&(t.yMin=this._yMin),q(this._yMax)&&(t.yMax=this._yMax),e&&(t.objType=this.objType),t}print(e=0){let t="";for(let a=0;a<e;a++)t+="  ";let n=`${t}{`;return n+=`xMin:${this._xMin} `,n+=`xMax:${this._xMax} `,n+=`yMin:${this._yMin} `,n+=`yMax:${this._yMax}`,n+="}",n}get xMin(){return q(this._xMin)?this._xMin:Number.MAX_SAFE_INTEGER}get xMax(){return q(this._xMax)?this._xMax:Number.MIN_SAFE_INTEGER}get yMin(){return q(this._yMin)?this._yMin:Number.MAX_SAFE_INTEGER}get yMax(){return q(this._yMax)?this._yMax:Number.MIN_SAFE_INTEGER}get center(){return{x:this.width/2+this.xMin,y:this.height/2+this.yMin}}get width(){return this.xMax-this.xMin}get height(){return this.yMax-this.yMin}set xMin(e){e=parseFloat(e),isNaN(e)||(this._xMin=e)}set xMax(e){e=parseFloat(e),isNaN(e)?delete this._xMax:this._xMax=e}set yMin(e){e=parseFloat(e),isNaN(e)?delete this._yMin:this._yMin=e}set yMax(e){e=parseFloat(e),isNaN(e)?delete this._yMax:this._yMax=e}roundAll(e=3){this.xMin=g(this.xMin,e),this.xMax=g(this.xMax,e),this.yMin=g(this.yMin,e),this.yMax=g(this.yMax,e)}isPointInside(e,t){return e<=this.xMax&&e>=this.xMin&&t<=this.yMax&&t>=this.yMin}}function an(r,e,t=!0){let n;return t?n=r.xMin<e.xMax&&r.xMax>e.xMin&&r.yMin<e.yMax&&r.yMax>e.yMin:n=r.xMin<=e.xMax&&r.xMax>=e.xMin&&r.yMin<=e.yMax&&r.yMax>=e.yMin,n}function on(r){const e=QA();let t;for(let n=0;n<r.length;n++)t=new qe(r[n]),e.xMin=Math.min(e.xMin,t.xMin),e.xMax=Math.max(e.xMax,t.xMax),e.yMin=Math.min(e.yMin,t.yMin),e.yMax=Math.max(e.yMax,t.yMax);return new qe(e)}function $0(r){return r.xMax===0&&r.xMin===0&&r.yMax===0&&r.yMin===0}function QA(){return{xMin:Number.MAX_SAFE_INTEGER,xMax:Number.MIN_SAFE_INTEGER,yMin:Number.MAX_SAFE_INTEGER,yMax:Number.MIN_SAFE_INTEGER}}function pc(){return{xMin:Number.MIN_SAFE_INTEGER,xMax:Number.MAX_SAFE_INTEGER,yMin:Number.MIN_SAFE_INTEGER,yMax:Number.MAX_SAFE_INTEGER}}const Sc=Object.freeze(Object.defineProperty({__proto__:null,Maxes:qe,getOverallMaxes:on,isAllZeros:$0,maxesMaxBounds:pc,maxesMinBounds:QA,maxesOverlap:an},Symbol.toStringTag,{value:"Module"}));class Ge extends pr{constructor({p:e,h1:t,h2:n,type:a="corner",parent:i=!1}={}){super(),this.parent=i,this.p=e,this.h1=t,this.h2=n,this.type=a,this.objType="PathPoint",this.hasOverlappingHandle("h1")&&(this.h1.use=!1),this.hasOverlappingHandle("h2")&&(this.h2.use=!1)}save(e=!1){const t={type:this.type,p:this.p.save(e)};return(this.h1.use||!this.h1.use&&!this.hasOverlappingHandle("h1"))&&(t.h1=this.h1.save(e)),(this.h2.use||!this.h2.use&&!this.hasOverlappingHandle("h2"))&&(t.h2=this.h2.save(e)),e&&(t.objType=this.objType),!e&&this.__ID&&delete this.__ID,t}print(e=0,t=!1){let n="";for(let o=0;o<e;o++)n+="  ";let a=parseInt(t)?` ${parseInt(t)}`:"",i=`${n}{PathPoint${a}
`;return n+="  ",i+=`${n}type: ${this.type}
`,i+=`${n}p: ${this.p.print(e+1)}
`,i+=`${n}h1: ${this.h1.print(e+1)}
`,i+=`${n}h2: ${this.h2.print(e+1)}
`,i+=`${n.substring(2)}}/PathPoint${a}`,i}get p(){return this._p}get h1(){return this._h1}get h2(){return this._h2}get type(){return this._type}get pointNumber(){if(!this.parent)return!1;const e=this.parent.pathPoints;if(!e)return!1;for(let t=0;t<e.length;t++)if(e[t]===this)return t;return!1}set p(e={}){e.type="p",this._p=new ae(e),this._p.parent=this}set h1(e={}){e.coord||(e.coord={x:this.p.x-50,y:this.p.y},e.use=!1),e.type="h1",this._h1=new ae(e),this._h1.parent=this}set h2(e={}){e.coord||(e.coord={x:this.p.x+50,y:this.p.y},e.use=!1),e.type="h2",this._h2=new ae(e),this._h2.parent=this}set type(e){e==="symmetric"?this.makeSymmetric():e==="flat"?this.makeFlat():this._type="corner"}updatePathPointPosition(e="p",t=0,n=0){switch(t=parseFloat(t),n=parseFloat(n),t=Number.isFinite(t)?t:0,n=Number.isFinite(n)?n:0,e){case"p":this.p.coord.x+=t,this.p.coord.y+=n,this.h1.coord.x+=t,this.h1.coord.y+=n,this.h2.coord.x+=t,this.h2.coord.y+=n;break;case"h1":this.h1.coord.x+=t,this.h1.coord.y+=n,this.h1.use&&(this.type==="symmetric"?this.makeSymmetric("h1"):this.type==="flat"&&this.makeFlat("h1"));break;case"h2":this.h2.coord.x+=t,this.h2.coord.y+=n,this.h2.use&&(this.type==="symmetric"?this.makeSymmetric("h2"):this.type==="flat"&&this.makeFlat("h2"));break}}makeSymmetric(e){if(this._type="symmetric",!e&&(e=this.h1.use?"h1":"h2",!(this.h1.use||this.h2.use)&&se(this.p.coord,this.h1.coord)&&se(this.p.coord,this.h2.coord))){this.h2.x-=200,this.h1.x+=200,this.h1.use=!0,this.h2.use=!0;return}this.h1.use=!0,this.h2.use=!0;let t,n,a=!1;switch(e){case"h1":t=this.p.x-this.h1.x+this.p.x,this.h2.x!==t&&(this.h2.x=t,a=!0),n=this.p.y-this.h1.y+this.p.y,this.h2.y!==n&&(this.h2.y=n,a=!0);break;case"h2":t=this.p.x-this.h2.x+this.p.x,this.h1.x!==t&&(this.h1.x=t,a=!0),n=this.p.y-this.h2.y+this.p.y,this.h1.y!==n&&(this.h1.y=n,a=!0);break}return this._type="symmetric",a&&(this.h1.use=!0,this.h2.use=!0),this}makeFlat(e){if(this._type="flat",this.isFlat())return;if(!e&&(e=this.h1.use?"h1":"h2",!(this.h1.use||this.h2.use)&&se(this.p.coord,this.h1.coord)&&se(this.p.coord,this.h2.coord))){this.h2.x-=300,this.h1.x+=100;return}this.h1.use=!0,this.h2.use=!0;const t=_r(this.h1.coord,this.p.coord),n=_r(this.h2.coord,this.p.coord),a=Dt(this.p.coord,this.h1.coord),i=Dt(this.p.coord,this.h2.coord);let o,x,A,E;return e==="h1"?(A=Math.cos(t)*i,E=Math.tan(t)*A,o=this.p.x+A*-1,x=this.p.y+E*-1,!isNaN(o)&&!isNaN(x)&&(this.h2.x!==o&&(this.h2.x=o),this.h2.y!==x&&(this.h2.y=x))):e==="h2"&&(A=Math.cos(n)*a,E=Math.tan(n)*A,o=this.p.x+A*-1,x=this.p.y+E*-1,!isNaN(o)&&!isNaN(x)&&(this.h1.x!==o&&(this.h1.x=o),this.h1.y!==x&&(this.h1.y=x))),this}isFlat(){if(!this.h1.use||!this.h2.use)return!1;if(this.p.x===this.h1.x&&this.p.x===this.h2.x||this.p.y===this.h1.y&&this.p.y===this.h2.y)return!0;const e=_r(this.h1.coord,this.p.coord),t=_r(this.h2.coord,this.p.coord);return g(Math.abs(e)+Math.abs(t),2)===3.14}reconcileHandle(e="h1"){let t=e==="h1"?"h2":"h1";this.type==="symmetric"?this.makeSymmetric(t):this.type==="flat"&&this.makeFlat(t)}resolvePointType(){if(this.isFlat()){const e=Dt(this.p.coord,this.h1.coord),t=Dt(this.p.coord,this.h2.coord);e===t?this._type="symmetric":this._type="flat"}else this._type="corner";return this.type}makePointedTo(e,t,n=!1,a="h2",i=!1){const o=this.p.x-e,x=this.p.y-t,A=x>=0?-1:1,E=-1,l=Math.sqrt(o*o+x*x),c=Math.acos(o/l);return n=n||l/3,this[a].x=this.p.x+Math.cos(c)*n*E,this[a].y=this.p.y+Math.sin(c)*n*A,i||(this.type==="corner"?this.makeFlat(a):this.makeSymmetric(a)),this}hasOverlappingHandle(e){return!this[e]||!this[e].coord?!1:se(this[e].coord,this.p.coord)}rotate(e,t){return this.p.rotate(e,t),this.h1.rotate(e,t),this.h2.rotate(e,t),this}resetHandles(){return this.type="corner",this.h1.use=!0,this.h2.use=!0,this.h2.x=this.p.x-100,this.h2.y=this.p.y,this.h1.x=this.p.x+100,this.h1.y=this.p.y,this}roundAll(e=9){this.p.x=g(this.p.x,e),this.p.y=g(this.p.y,e);let t=this.h1.use;this.h1.x=g(this.h1.x,e),this.h1.y=g(this.h1.y,e),this.h1.use=t;let n=this.h2.use;return this.h2.x=g(this.h2.x,e),this.h2.y=g(this.h2.y,e),this.h2.use=n,this}}const Cc=Object.freeze(Object.defineProperty({__proto__:null,PathPoint:Ge},Symbol.toStringTag,{value:"Module"}));class Er{constructor(e=0,t=0){e=parseFloat(e),this.x=isNaN(e)?0:e,t=parseFloat(t),this.y=isNaN(t)?0:t}}const uc=Object.freeze(Object.defineProperty({__proto__:null,XYPoint:Er},Symbol.toStringTag,{value:"Module"}));class we extends pr{constructor({p1x:e=0,p1y:t=0,p2x:n,p2y:a,p3x:i,p3y:o,p4x:x=0,p4y:A=0,point1ID:E=!1,point2ID:l=!1}={}){super(),this.p1x=Ve(e),this.p1y=Ve(t),this.p4x=Ve(x),this.p4y=Ve(A),this.p2x=q(n)?Ve(n):this.p1x,this.p2y=q(a)?Ve(a):this.p1y,this.p3x=q(i)?Ve(i):this.p4x,this.p3y=q(o)?Ve(o):this.p4y,E&&(this.point1ID=E),l&&(this.point2ID=l),this.objType="Segment",this.recalculateMaxes()}save(e=!1){const t={p1x:this.p1x,p1y:this.p1y,p2x:this.p2x,p2y:this.p2y,p3x:this.p3x,p3y:this.p3y,p4x:this.p4x,p4y:this.p4y};return e&&(t.objType=this.objType),t}print(e=0){let t="";for(let a=0;a<e;a++)t+="  ";let n=`${t}{Segment
`;return t+="  ",n+=`${t+"  "}line: ${this.lineType}
`,n+=`${t+"  "}p1: ${this.p1x}/${this.p1y}
`,n+=`${t+"  "}p2: ${this.p2x}/${this.p2y}
`,n+=`${t+"  "}p3: ${this.p3x}/${this.p3y}
`,n+=`${t+"  "}p4: ${this.p4x}/${this.p4y}
`,n+=`${t+"  "}maxes: ${this.maxes.print(e+1)}
`,n+=`${t.substring(2)}}`,n}get lineType(){return q(this._lineType)||this.determineLineType(),this._lineType}get length(){return this.cache.length?this.cache.length:(this.cache.length=this.calculateLength(),this.cache.length)}get baseLength(){return zt(this.p1x,this.p1y,this.p4x,this.p4y)}get topLength(){const e=zt(this.p1x,this.p1y,this.p2x,this.p2y),t=zt(this.p2x,this.p2y,this.p3x,this.p3y),n=zt(this.p3x,this.p3y,this.p4x,this.p4y);return e+t+n}get quickLength(){return Math.max(this.topLength,this.baseLength)}get maxes(){return(!this.cache.maxes||Ia(this.cache.maxes))&&this.recalculateMaxes(),new qe(this.cache.maxes)}get valuesAsArray(){return[this.p1x,this.p1y,this.p2x,this.p2y,this.p3x,this.p3y,this.p4x,this.p4y]}set maxes(e){this.cache.maxes={},this.cache.maxes=new qe(e)}split(e=.5){return typeof e=="object"&&q(e.x)&&q(e.y)?this.splitAtPoint(e):isNaN(e)?!1:this.splitAtTime(e)}splitAtPoint(e){if(this.containsTerminalPoint(e,.1))return!1;if(this.lineType==="horizontal"||this.lineType==="vertical"){let t,n,a=!1;return this.lineType==="horizontal"?g(e.y,2)===g(this.p1y,2)&&e.x>Math.min(this.p1x,this.p4x)&&e.x<Math.max(this.p1x,this.p4x)&&(t=e.x,n=this.p1y,a=!0):this.lineType==="vertical"&&g(e.x,2)===g(this.p1x,2)&&e.y>Math.min(this.p1y,this.p4y)&&e.y<Math.max(this.p1y,this.p4y)&&(t=this.p1x,n=e.y,a=!0),a?[new we({p1x:this.p1x,p1y:this.p1y,p4x:t,p4y:n}),new we({p1x:t,p1y:n,p4x:this.p4x,p4y:this.p4y})]:!1}else if(this.pointIsWithinMaxes(e)){const n=this.getSplitFromXYPoint(e,.1);if(n&&n.distance<.1)return this.splitAtTime(n.split)}return!1}splitAtTime(e=.5){const t=1-e,n=this.p1x*t+this.p2x*e,a=this.p1y*t+this.p2y*e,i=this.p2x*t+this.p3x*e,o=this.p2y*t+this.p3y*e,x=this.p3x*t+this.p4x*e,A=this.p3y*t+this.p4y*e,E=n*t+i*e,l=a*t+o*e,c=i*t+x*e,L=o*t+A*e,T=E*t+c*e,I=l*t+L*e;return[new we({p1x:this.p1x,p1y:this.p1y,p2x:n,p2y:a,p3x:E,p3y:l,p4x:T,p4y:I}),new we({p1x:T,p1y:I,p2x:c,p2y:L,p3x:x,p3y:A,p4x:this.p4x,p4y:this.p4y})]}splitAtManyPoints(e,t=1){const n=[new we(ze(this))];let a;for(let i=0;i<e.length;i++)for(let o=0;o<n.length;o++)n[o].containsTerminalPoint(e[i],t)||(a=n[o].splitAtPoint(e[i]),a&&n.splice(o,1,a[0],a[1]));return n}pointIsWithinMaxes(e){const t=this.maxes;return e.x<=t.xMax&&e.x>=t.xMin&&e.y<=t.yMax&&e.y>=t.yMin}convertToLine(){return new we({p1x:this.p1x,p1y:this.p1y,p4x:this.p4x,p4y:this.p4y})}getSplitFromXYPoint(e,t=1){const n=this.quickLength*1e3;let a=999999999,i=!1,o,x;for(let A=0;A<1;A+=1/n)if(o=this.findXYPointFromSplit(A),x=Math.sqrt((o.x-e.x)*(o.x-e.x)+(o.y-e.y)*(o.y-e.y)),x<a&&(a=x,i={split:A,distance:x,x:o.x,y:o.y},t&&i.distance<t))return i;return i}calculateLength(){if(this.lineType)return this.baseLength;let e;if(this.quickLength<10)return this.quickLength;{const n=this.split();return e=n[0].calculateLength()+n[1].calculateLength(),e}}findXYPointFromSplit(e=.5){const t=1-e,n=this.p1x*t+this.p2x*e,a=this.p1y*t+this.p2y*e,i=this.p2x*t+this.p3x*e,o=this.p2y*t+this.p3y*e,x=this.p3x*t+this.p4x*e,A=this.p3y*t+this.p4y*e,E=n*t+i*e,l=a*t+o*e,c=i*t+x*e,L=o*t+A*e,T=E*t+c*e,I=l*t+L*e;return new Er(T,I)}getReverse(){return new we({p1x:this.p4x,p1y:this.p4y,p2x:this.p3x,p2y:this.p3y,p3x:this.p2x,p3y:this.p2y,p4x:this.p1x,p4y:this.p1y})}getXYPoint(e){if(e===1)return new Er(this.p1x,this.p1y);if(e===2)return new Er(this.p2x,this.p2y);if(e===3)return new Er(this.p3x,this.p3y);if(e===4)return new Er(this.p4x,this.p4y)}getFastMaxes(){const e={xMin:Math.min(this.p1x,Math.min(this.p2x,Math.min(this.p3x,this.p4x))),yMin:Math.min(this.p1y,Math.min(this.p2y,Math.min(this.p3y,this.p4y))),xMax:Math.max(this.p1x,Math.max(this.p2x,Math.max(this.p3x,this.p4x))),yMax:Math.max(this.p1y,Math.max(this.p2y,Math.max(this.p3y,this.p4y)))};return new qe(e)}recalculateMaxes(){function e(S,u){S.xMin>u?S.xMin=u:S.xMax<u&&(S.xMax=u)}function t(S,u){S.yMin>u?S.yMin=u:S.yMax<u&&(S.yMax=u)}function n(S,u,y,G,m){const D=1-S;return D*D*D*u+3*D*D*S*y+3*D*S*S*G+S*S*S*m}const a={xMin:Math.min(this.p1x,this.p4x),yMin:Math.min(this.p1y,this.p4y),xMax:Math.max(this.p1x,this.p4x),yMax:Math.max(this.p1y,this.p4y)};if(this.lineType)return this.maxes=a,this.maxes;const i=this.p2x-this.p1x,o=this.p2y-this.p1y;let x=this.p3x-this.p2x,A=this.p3y-this.p2y;const E=this.p4x-this.p3x,l=this.p4y-this.p3y;let c,L,T,I,d,p;return(this.p2x<a.xMin||this.p2x>a.xMax||this.p3x<a.xMin||this.p3x>a.xMax)&&(i+E!==2*x&&(x+=.01),c=2*(i-x),L=2*(i-2*x+E),T=(2*x-2*i)*(2*x-2*i)-2*i*L,I=Math.sqrt(T),d=(c+I)/L,p=(c-I)/L,0<d&&d<1&&e(a,n(d,this.p1x,this.p2x,this.p3x,this.p4x)),0<p&&p<1&&e(a,n(p,this.p1x,this.p2x,this.p3x,this.p4x))),(this.p2y<a.yMin||this.p2y>a.yMax||this.p3y<a.yMin||this.p3y>a.yMax)&&(o+l!==2*A&&(A+=.01),c=2*(o-A),L=2*(o-2*A+l),T=(2*A-2*o)*(2*A-2*o)-2*o*L,I=Math.sqrt(T),d=(c+I)/L,p=(c-I)/L,0<d&&d<1&&t(a,n(d,this.p1y,this.p2y,this.p3y,this.p4y)),0<p&&p<1&&t(a,n(p,this.p1y,this.p2y,this.p3y,this.p4y))),this.maxes=a,this.maxes}isLineOverlappedByLine(e){if(!this.lineType||!e.lineType)return!1;const t=e.containsPointOnLine(this.getXYPoint(1)),n=e.containsPointOnLine(this.getXYPoint(4));return t&&n}containsTerminalPoint(e,t=1){return this.containsStartPoint(e,t)?"start":this.containsEndPoint(e,t)?"end":!1}containsStartPoint(e,t=1){return se(this.getXYPoint(1),e,t)}containsEndPoint(e,t=1){return se(this.getXYPoint(4),e,t)}containsPointOnCurve(e,t){if(this.containsTerminalPoint(e,t))return!0;if(this.lineType)return this.containsPointOnLine(e);t=q(t)?t:.1;const n=this.getSplitFromXYPoint(e,t);return!!(n&&n.distance<t)}containsPointOnLine(e){if(!this.lineType||this.containsTerminalPoint(e))return!1;function t(n,a,i){return n<=a&&a<=i||i<=a&&a<=n}return!!(t(this.p1x,e.x,this.p4x)&&t(this.p1y,e.y,this.p4y)&&_n(this.getXYPoint(1),this.getXYPoint(4),e))}precedes(e,t=1){const n=this.getXYPoint(4),a=e.getXYPoint(1);return se(n,a,t)}determineLineType(e){e=q(e)?e:1;let t=!1;return g(this.p1x,e)===g(this.p2x,e)&&g(this.p1x,e)===g(this.p3x,e)&&g(this.p1x,e)===g(this.p4x,e)&&(t="vertical"),g(this.p1y,e)===g(this.p2y,e)&&g(this.p1y,e)===g(this.p3y,e)&&g(this.p1y,e)===g(this.p4y,e)&&(t="horizontal"),_n(this.getXYPoint(1),this.getXYPoint(4),this.getXYPoint(2))&&_n(this.getXYPoint(1),this.getXYPoint(4),this.getXYPoint(3))&&(t="diagonal"),this._lineType=t,t}roundAll(e=3){return this.p1x=g(this.p1x,e),this.p1y=g(this.p1y,e),this.p2x=g(this.p2x,e),this.p2y=g(this.p2y,e),this.p3x=g(this.p3x,e),this.p3y=g(this.p3y,e),this.p4x=g(this.p4x,e),this.p4y=g(this.p4y,e),this}}function zt(r,e,t,n){const a=Math.abs(r-t),i=Math.abs(e-n);return Math.sqrt(a*a+i*i)}function _n(r,e,t,n){n=q(n)?n:3;const a=(e.x-r.x)*(t.y-r.y),i=(t.x-r.x)*(e.y-r.y);return g(a,n)===g(i,n)}const Rc=Object.freeze(Object.defineProperty({__proto__:null,Segment:we,getLineLength:zt,pointsAreCollinear:_n},Symbol.toStringTag,{value:"Module"}));class qr extends pr{constructor({segments:e=[]}={}){super(),this.segments=e,this.objType="PolySegment"}save(e=!1){const t={segments:[]};for(let n=0;n<this._segments.length;n++)t.segments[n]=this._segments[n].save(e);return e&&(t.objType=this.objType),t}print(e=0){let t="";for(let a=0;a<e;a++)t+="  ";let n=`${t}{PolySegment
`;return t+="  ",n+=`${t}segments: [
`,this.segments.forEach(a=>{n+=a.print(e+2),n+=`
`}),n+=`${t}]
`,n+=`${t.substring(2)}}`,n}get segments(){return this._segments}set segments(e=[]){this._segments=[];for(let t=0;t<e.length;t++)this._segments[t]=new we(e[t])}get valuesAsArray(){let e=[];return this.segments.forEach(t=>e.push(t.valuesAsArray)),e}get path(){function e(x,A){const E={h1:{coord:{x:x.p3x,y:x.p3y}},p:{coord:{x:A.p1x,y:A.p1y}},h2:{coord:{x:A.p2x,y:A.p2y}}};return se(E.h1.coord,E.p.coord)&&(E.h1.use=!1),se(E.h2.coord,E.p.coord)&&(E.h2.use=!1),x.lineType&&(E.h1.use=!1),A.lineType&&(E.h2.use=!1),E}const t=[],n=ze(this._segments),a=new Er(n[0].p1x,n[0].p1y),i=new Er(n.at(-1).p4x,n.at(-1).p4y);se(a,i)||n.push(new we({p1x:i.x,p1y:i.y,p4x:a.x,p4y:a.y})),t.push(e(n.at(-1),n[0]));let o;for(let x=0;x<n.length-1;x++)o=n[x+1],t.push(e(n[x],o));return new je({pathPoints:t})}containsSegment(e){for(let t=0;t<this._segments.length;t++)if(C0(this._segments[t],e))return!0;return!1}roundAll(e=3){for(let t=0;t<this._segments.length;t++)this._segments[t].roundAll(e);return this}findIntersections(){let e,t,n=[];for(let a=0;a<this._segments.length;a++)for(let i=a;i<this._segments.length;i++)i!==a&&(e=new we(this._segments[a]),t=new we(this._segments[i]),n=n.concat(ya(e,t)));return n=n.filter(xr),n}splitSegmentsAtIntersections(e=this.findIntersections(),t=1){let n,a;e.forEach(function(o,x){n=o.split("/")[0],a=o.split("/")[1],e[x]=new Er(n,a)});let i=[];for(let o=0;o<this._segments.length;o++)i=i.concat(this._segments[o].splitAtManyPoints(e,t));return this._segments=i,this.cache.splits=e,this}stitchSegmentsTogether(){const e=this.segments;let t=[];const n=[];function a(A){let E,l;for(let c=0;c<e.length;c++)if(E=e[c],E.objType==="Segment"&&E.containsStartPoint(A,0))return l=new we(E),E.objType="-"+n.length+"."+t.length,l;for(let c=0;c<e.length;c++)if(E=e[c].getReverse(),e[c].objType==="Segment"&&E.containsStartPoint(A,0))return l=new we(E),e[c].objType="R"+n.length+"."+t.length,l;return!1}function i(){for(let A=0;A<e.length;A++)if(e[A].objType==="Segment")return e[A].getXYPoint(1)}let o,x=i();for(let A=0;A<e.length;A++)o=a(x),o?(t.push(o),x=o.getXYPoint(4)):t.length&&(n.push(new qr({segments:t})),t[t.length-1].containsEndPoint(t[0].getXYPoint(1)),t=[],x=i(),A--);return t.length&&(n.push(new qr({segments:t})),t[t.length-1].containsEndPoint(t[0].getXYPoint(1))),n}removeZeroLengthSegments(){let e;for(let t=0;t<this._segments.length;t++)e=this._segments[t],se(e.getXYPoint(1),e.getXYPoint(4))&&(e.lineType?e.objType="LINE ZERO":se(e.getXYPoint(1),e.getXYPoint(2))&&se(e.getXYPoint(1),e.getXYPoint(3))&&(e.objType="ZERO"));return this._segments=this._segments.filter(function(t){return t.objType==="Segment"}),this}removeRedundantLineSegments(){for(let e=0;e<this._segments.length;e++)for(let t=0;t<this._segments.length;t++)if(e!==t&&this._segments[e]&&this._segments[t]){let n=this._segments[e],a=this._segments[t];n.isLineOverlappedByLine(a)&&(n.objType="REDUNDANT"),a.isLineOverlappedByLine(n)&&(a.objType="REDUNDANT"),a.objType==="Segment"&&n.objType==="Segment"&&C0(n,a)&&(n.objType="DUPLICATE")}return this._segments=this._segments.filter(function(e){return e.objType==="Segment"}),this}removeNonConnectingSegments(){let e,t;const n=[],a=[];for(let o=0;o<this._segments.length;o++){e=this._segments[o],n[o]=!1,a[o]=!1;for(let x=0;x<this._segments.length&&(t=this._segments[x],!(o!==x&&(t.containsTerminalPoint(e.getXYPoint(1),1)&&(n[o]=!0),t.containsTerminalPoint(e.getXYPoint(4),1)&&(a[o]=!0),n[o]&&a[o])));x++);}for(let o=0;o<this._segments.length;o++)n[o]&&a[o]||(this._segments[o].objType="NON CONNECTED");return this._segments=this._segments.filter(function(o){return o.objType==="Segment"}),this}combineInlineSegments(){let e,t;for(let n=0;n<this.segments.length;n++)e=this.segments[n],t=this.segments[n+1],n===this.segments.length-1&&(t=this.segments[0]),e.lineType===t.lineType&&(this.segments[n]=new we({p1x:e.p1x,p1y:e.p1y,p4x:t.p4x,p4y:t.p4y}),this.segments.splice(n+1,1),n--)}}function ya(r,e,t){if(t=t||0,t===0){const p=qA(r,e);if(p.length)return p}if(t===0){const p=$A(r,e);if(p.length)return p}let n=[];t===0&&(r.lineType||e.lineType)&&(n=e1(r,e));const a=r.getFastMaxes(),i=e.getFastMaxes();if(!an(a,i))return[];const o=9e-4,x=3;let A=a.xMax-a.xMin,E=a.yMax-a.yMin,l=i.xMax-i.xMin,c=i.yMax-i.yMin;if(A<o&&E<o&&l<o&&c<o){A*=.5,E*=.5,l*=.5,c*=.5;let p=(a.xMin+A+(i.xMin+l))/2,S=(a.yMin+E+(i.yMin+c))/2;return p=g(p,x),S=g(S,x),[""+p+"/"+S]}let L=[];const T=r.splitAtTime(.5),I=e.splitAtTime(.5);let d=[[T[0],I[0]],[T[0],I[1]],[T[1],I[1]],[T[1],I[0]]];return d=d.filter(function(p){return an(p[0].getFastMaxes(),p[1].getFastMaxes(),"inclusive")}),d.forEach(function(p){L=L.concat(ya(p[0],p[1],t+1))}),L=L.concat(n),L=L.filter(xr),L}function C0(r,e,t=1){if(se(r.getXYPoint(1),e.getXYPoint(1),t)&&se(r.getXYPoint(4),e.getXYPoint(4),t)){if(r.lineType&&e.lineType)return!0;if(se(r.getXYPoint(2),e.getXYPoint(2),t)&&se(r.getXYPoint(3),e.getXYPoint(3),t))return!0}return!1}function qA(r,e){const t=[];return r.containsPointOnLine(e.getXYPoint(1))&&t.push(""+e.p1x+"/"+e.p1y),r.containsPointOnLine(e.getXYPoint(4))&&t.push(""+e.p4x+"/"+e.p4y),e.containsPointOnLine(r.getXYPoint(1))&&t.push(""+r.p1x+"/"+r.p1y),e.containsPointOnLine(r.getXYPoint(4))&&t.push(""+r.p4x+"/"+r.p4y),t.length,t}function $A(r,e){if(!r.lineType||!e.lineType)return[];const t=r.p4x-r.p1x,n=r.p4y-r.p1y,a=e.p4x-e.p1x,i=e.p4y-e.p1y,o=(-1*n*(r.p1x-e.p1x)+t*(r.p1y-e.p1y))/(-1*a*n+t*i),x=(a*(r.p1y-e.p1y)-i*(r.p1x-e.p1x))/(-1*a*n+t*i);if(o>=0&&o<=1&&x>=0&&x<=1){const A=Ve(r.p1x+x*t),E=Ve(r.p1y+x*n);return r.containsTerminalPoint({x:A,y:E})&&e.containsTerminalPoint({x:A,y:E})?[]:[""+A+"/"+E]}return[]}function e1(r,e){const t=r.getXYPoint(1),n=r.getXYPoint(4),a=e.getXYPoint(1),i=e.getXYPoint(4),o=[];return r.containsPointOnCurve(a)&&o.push(`${a.x}/${a.y}`),r.containsPointOnCurve(i)&&o.push(`${i.x}/${i.y}`),e.containsPointOnCurve(t)&&o.push(`${t.x}/${t.y}`),e.containsPointOnCurve(n)&&o.push(`${n.x}/${n.y}`),o}const gc=Object.freeze(Object.defineProperty({__proto__:null,PolySegment:qr,findCrossingLineSegmentIntersections:$A,findEndPointSegmentIntersections:e1,findOverlappingLineSegmentIntersections:qA,findSegmentIntersections:ya,segmentsAreEqual:C0},Symbol.toStringTag,{value:"Module"}));class je extends pr{constructor({name:e="Path",objType:t="Path",pathPoints:n=[],winding:a,xLock:i=!1,yLock:o=!1,wLock:x=!1,hLock:A=!1,transformOrigin:E=!1,ratioLock:l=!1,parent:c=!1}={}){super(),this.name=e,this.pathPoints=n,this.winding=a,this.xLock=i,this.yLock=o,this.wLock=x,this.hLock=A,this.transformOrigin=E,this.ratioLock=l,this.parent=c,this.objType=t}save(e=!1){const t={name:this.name,winding:this.winding,pathPoints:[]};return this.xLock&&(t.xLock=!0),this.yLock&&(t.yLock=!0),this.wLock&&(t.wLock=!0),this.hLock&&(t.hLock=!0),this.transformOrigin&&this.transformOrigin!=="baseline-left"&&(t.transformOrigin=this.transformOrigin),this.ratioLock&&(t.ratioLock=!0),this._pathPoints.forEach(n=>{t.pathPoints.push(n.save(e))}),e&&(t.objType=this.objType),!e&&this.__ID&&delete this.__ID,t}print(e=0){let t="";for(let a=0;a<e;a++)t+="  ";let n=`${t}{Path
`;return t+="  ",n+=`${t}winding: ${this.winding}
`,this.name!=="Path"&&(n+=`${t}name: ${this.name}
`),this.xLock&&(n+=`${t}xLock: ${this.xLock}
`),this.yLock&&(n+=`${t}yLock: ${this.yLock}
`),this.wLock&&(n+=`${t}wLock: ${this.wLock}
`),this.hLock&&(n+=`${t}hLock: ${this.hLock}
`),this.ratioLock&&(n+=`${t}ratioLock: ${this.ratioLock}
`),n+=`${t}pathPoints: [
`,this._pathPoints.forEach((a,i)=>{n+=a.print(e+2,i),n+=`
`}),n+=`${t}]
`,n+=`${t.substring(2)}}/Path`,n}get name(){return this._name}get pathPoints(){return this._pathPoints}get winding(){return q(this._winding)||(this.findWinding?this.findWinding():this._winding=0),this._winding}get x(){return this.maxes.xMin}get y(){return this.maxes.yMax}get height(){const e=this.maxes.yMax-this.maxes.yMin;return Math.max(e,0)}get width(){const e=this.maxes.xMax-this.maxes.xMin;return Math.max(e,0)}get xLock(){return this._xLock}get yLock(){return this._yLock}get wLock(){return this._wLock}get hLock(){return this._hLock}get transformOrigin(){return this._transformOrigin||(this._transformOrigin="baseline-left"),this._transformOrigin}get ratioLock(){return this._ratioLock}get maxes(){return this.cache.maxes?Ia(this.cache.maxes)?this.recalculateMaxes():$0(this.cache.maxes)&&this.recalculateMaxes():this.recalculateMaxes(),new qe(this.cache.maxes)}get svgPathData(){return this.cache.svgPathData?this.cache.svgPathData:(this.cache.svgPathData=this.makeSVGPathData(),this.cache.svgPathData)}set name(e){e=v0(e),e!==""&&(this._name=e)}set pathPoints(e){if(this._pathPoints=[],e&&e.length)for(let t=0;t<e.length;t++)this._pathPoints[t]=new Ge(e[t]),this._pathPoints[t].parent=this}set winding(e){q(e)?this._winding=e:this.findWinding()}set x(e){this.setShapePosition(e,!1)}set y(e){this.setShapePosition(!1,e)}set height(e){this.setShapeSize({height:e})}set width(e){this.setShapeSize({width:e})}set xLock(e){this._xLock=!!e}set yLock(e){this._yLock=!!e}set wLock(e){this._wLock=!!e}set hLock(e){this._hLock=!!e}set transformOrigin(e){Ln.indexOf(e)>-1?this._transformOrigin=e:this._transformOrigin=!1}set ratioLock(e){this._ratioLock=!!e}set maxes(e){this.cache.maxes={},this.cache.maxes=new qe(e)}set svgPathData(e){this.cache.svgPathData=e}get isLockable(){return!0}isLocked(e){return e==="x"?this.xLock:e==="y"?this.yLock:e==="width"?this.wLock:e==="height"?this.hLock:!1}lock(e){e==="x"&&(this.xLock=!0),e==="y"&&(this.yLock=!0),e==="width"&&(this.wLock=!0),e==="height"&&(this.hLock=!0)}unlock(e){e==="x"&&(this.xLock=!1),e==="y"&&(this.yLock=!1),e==="width"&&(this.wLock=!1),e==="height"&&(this.hLock=!1)}setShapeSize({width:e=!1,height:t=!1,ratioLock:n=!1,transformOrigin:a=!1}={}){e!==!1&&(e=parseFloat(e)),t!==!1&&(t=parseFloat(t));const i=e!==!1?e-this.width:0,o=t!==!1?t-this.height:0;return this.updateShapeSize({width:i,height:o,ratioLock:n,transformOrigin:a}),this}updateShapeSize({width:e=0,height:t=0,ratioLock:n=!1,transformOrigin:a=!1}={}){let i=parseFloat(e),o=parseFloat(t);if(!i&&!o)return;if(n&&i!==o){const p=this.width/this.height;Math.abs(i)>Math.abs(o)?o=i/p:i=o*p}let x=this.width;x===0&&(x=1);let A=this.height;A===0&&(A=1);const E=Math.max(x+i,1),l=Math.max(A+o,1),c=l/A,L=E/x;if(n&&(E<=1||l<=1))return;let T=w0(i,o,this.maxes,a),I=this.maxes.xMin,d=this.maxes.yMin;this.pathPoints.forEach(p=>{p.p.coord.x=(p.p.coord.x-this.maxes.xMin)*L+I,p.h1.coord.x=(p.h1.coord.x-this.maxes.xMin)*L+I,p.h2.coord.x=(p.h2.coord.x-this.maxes.xMin)*L+I,p.p.coord.y=(p.p.coord.y-this.maxes.yMin)*c+d,p.h1.coord.y=(p.h1.coord.y-this.maxes.yMin)*c+d,p.h2.coord.y=(p.h2.coord.y-this.maxes.yMin)*c+d}),this.updateShapePosition(T.deltaX,T.deltaY)}setShapePosition(e=!1,t=!1){e!==!1&&(e=parseFloat(e)),t!==!1&&(t=parseFloat(t));const n=e!==!1?e*1-this.maxes.xMin:0,a=t!==!1?t*1-this.maxes.yMax:0;this.updateShapePosition(n,a)}updateShapePosition(e=0,t=0){e=parseFloat(e),t=parseFloat(t);for(let n=0;n<this.pathPoints.length;n++)this.pathPoints[n].updatePathPointPosition("p",e,t)}rotate(e,t=this.maxes.center){for(let n=0;n<this.pathPoints.length;n++)this.pathPoints[n].rotate(e,t)}getNextPointNum(e=0){return e=parseInt(e),e+=1,e=e%this.pathPoints.length,e}getPreviousPointNum(e=0){return e=parseInt(e),e-=1,e<0&&(e=e+this.pathPoints.length),e}containsPoint(e,t){for(let n=0;n<this.pathPoints.length;n++)if(se(e,this.pathPoints[n].p,.01))if(t)t=!1;else return this.pathPoints[n];return!1}makeSVGPathData(e="not specified",t=8){if(!this.pathPoints||!this.pathPoints.length)return"";let n,a,i="",o="M"+g(this.pathPoints[0].p.x,t)+","+g(this.pathPoints[0].p.y,t);o.indexOf("NaN")>-1&&console.warn(e+" PathPoint 0 MOVE has NaN: "+o);for(let x=0;x<this.pathPoints.length;x++)n=this.pathPoints[x],a=this.pathPoints[this.getNextPointNum(x)],i=" C"+g(n.h2.x,t)+","+g(n.h2.y,t)+","+g(a.h1.x,t)+","+g(a.h1.y,t)+","+g(a.p.x,t)+","+g(a.p.y,t),i.indexOf("NaN")>-1&&console.warn(e+" PathPoint "+x+" has NaN: "+i),o+=i;return o+="Z",o}makePostScript(e=0,t=0){if(!this.pathPoints)return{re:"",lastX:e,lastY:t};let n,a,i,o,x,A,E,l,c="",L=`${this.pathPoints[0].p.x-e} ${this.pathPoints[0].p.y-t} rmoveto
		`;for(let T=0;T<this.pathPoints.length;T++)n=this.pathPoints[T],a=this.pathPoints[this.getNextPointNum(T)],i=n.h2.x-n.p.x,o=n.h2.y-n.p.y,x=a.h1.x-n.h2.x,A=a.h1.y-n.h2.y,E=a.p.x-a.h1.x,l=a.p.y-a.h1.y,c=`
					${i} ${o} ${x} ${A} ${E} ${l} rrcurveto
			`,L+=c;return{re:L.replaceAll("	",""),lastX:a.p.x,lastY:a.p.y}}makePolySegment(){const e=[];for(let n=0;n<this.pathPoints.length;n++)e.push(this.makeSegment(n));return new qr({segments:e})}makeSegment(e=0){if(e=e%this.pathPoints.length,this.cache.segments||(this.cache.segments=[]),this.cache.segments[e])return this.cache.segments[e];const t=this.pathPoints[e];let n=Math.round(Math.random()*1e4);t.pointID||(t.pointID=`point-${e}-${n}`);const a=this.getNextPointNum(e),i=this.pathPoints[a];i.pointID||(i.pointID=`point-${a}-${n}`);const o=new we({point1ID:t.pointID,p1x:t.p.x,p1y:t.p.y,p2x:t.h2.x,p2y:t.h2.y,p3x:i.h1.x,p3y:i.h1.y,p4x:i.p.x,p4y:i.p.y,point2ID:i.pointID});return this.cache.segments[e]=o,o}addPointsAtPathIntersections(){const e=this.makePolySegment();e.splitSegmentsAtIntersections();const t=e.path;this._pathPoints=t.pathPoints}calculateQuickSegmentLength(e=0){let t=this.makeSegment(e);return t=t.quickLength,t}findWinding(e){let t,n,a,i=-1;const o=this.pathPoints;if(o.length===2)i=o[1].p.x>o[0].p.x?-1:1;else if(o.length>2)for(let x=0;x<o.length;x++)t=(x+1)%o.length,n=(x+2)%o.length,a=(o[t].p.x-o[x].p.x)*(o[n].p.y-o[t].p.y),a-=(o[t].p.y-o[x].p.y)*(o[n].p.x-o[t].p.x),a<0?i--:a>0&&i++;return i===0&&!e&&(this.reverseWinding(),i=this.findWinding(!0)*-1,this.reverseWinding()),this._winding=i,i}reverseWinding(){let e;this.pathPoints&&(this.pathPoints.forEach(t=>{e=t.h1,t.h1=t.h2,t.h2=e}),this.pathPoints.reverse(),this.winding*=-1,(this.winding===0||!q(this.winding))&&this.findWinding(!0))}flipNS(e=this.maxes.center.y){this.pathPoints.forEach(t=>{t.p.coord.y+=(e-t.p.coord.y)*2,t.h1.coord.y+=(e-t.h1.coord.y)*2,t.h2.coord.y+=(e-t.h2.coord.y)*2}),this.reverseWinding()}flipEW(e=this.maxes.center.x){this.pathPoints.forEach(t=>{t.p.coord.x+=(e-t.p.coord.x)*2,t.h1.coord.x+=(e-t.h1.coord.x)*2,t.h2.coord.x+=(e-t.h2.coord.x)*2}),this.reverseWinding()}roundAll(e=0){return this.pathPoints.forEach(t=>t.roundAll(e)),this}addPathPoint(e){return e=new Ge(e),e.parent=this,this.pathPoints.push(e),this.findWinding(),this.changed(),e}insertPathPoint(e=0,t=.5,n=!1){const a=e===!1?this.pathPoints[0]:this.pathPoints[e],i=this.getNextPointNum(e),o=this.pathPoints[i];let x,A,E,l;if(this.pathPoints.length>1){const c=this.makeSegment(e).split(t),L=c[0],T=c[1];x={coord:{x:L.p4x,y:L.p4y}},A={coord:{x:L.p3x,y:L.p3y}},E={coord:{x:T.p2x,y:T.p2y}},l=new Ge({p:x,h1:A,h2:E}),a.type==="symmetric"&&(a.type="flat"),a.h2.x=L.p2x,a.h2.y=L.p2y,o.type==="symmetric"&&(o.type="flat"),o.h1.x=T.p3x,o.h1.y=T.p3y}else x=new ae({coord:{x:a.p.x+100,y:a.p.y+100}}),A=new ae({coord:{x:a.h2.x+100,y:a.h2.y+100}}),E=new ae({coord:{x:a.h1.x+100,y:a.h1.y+100}}),l=new Ge({p:x,h1:A,h2:E,type:a.type});return n&&l.roundAll(0),l.parent=this,this.pathPoints.splice(i,0,l),l}findClosestPointOnCurve(e=new Er,t=!1){let n=1e4,a=!1,i=!1,o=999999999,x,A;for(let l=0;l<this.pathPoints.length;l++){n=this.makeSegment(l).quickLength*100;for(let c=0;c<1;c+=1/n)x=this.findXYPointFromSplit(c,l),A=Math.sqrt((x.x-e.x)*(x.x-e.x)+(x.y-e.y)*(x.y-e.y)),A<o&&(a&&a.point!==l&&(i=ze(a)),o=A,a={point:l,split:c,distance:A,x:x.x,y:x.y})}return t?i:a}findXYPointFromSplit(e,t=0){return this.pathPoints.length>1?this.makeSegment(t).findXYPointFromSplit(e):this.pathPoints[0].p}recalculateMaxes(){this.cache.maxes=new qe,this.cache.segments||(this.cache.segments=[]);let e=this.pathPoints.map((t,n)=>this.makeSegment(n).maxes);this.cache.maxes=on(e)}checkForNaN(){for(let e=0;e<this.pathPoints.length;e++){const t=this.pathPoints[e];if(isNaN(t.p.x)||isNaN(t.p.y)||isNaN(t.h1.x)||isNaN(t.h1.y)||isNaN(t.h2.x)||isNaN(t.h2.y))return!0}return!1}}const yc=Object.freeze(Object.defineProperty({__proto__:null,Path:je},Symbol.toStringTag,{value:"Module"}));function Nc(r){let e=[],t=(r==null?void 0:r.attributes)||{},n=Number(t.r)||Number(t.rx)||100;n=Math.abs(n);let a=Number(t.r)||Number(t.ry)||100;a=Math.abs(a);let i=Number(t.cx)||0,o=Number(t.cy)||0;if(!(n===0&&a===0)){let x={xMin:i-n,xMax:i+n,yMin:o-a,yMax:o+a};e=Dc(x)}return[e]}function Dc(r){let e=r.xMin,t=r.yMax,n=r.xMax,a=r.yMin,i=(n-e)/2,o=(t-a)/2,x=i*.448,A=o*.448,E={x:e+i,y:t},l={x:e+x,y:t},c={x:n-x,y:t},L={x:n,y:a+o},T={x:n,y:t-A},I={x:n,y:a+A},d={x:e+i,y:a},p={x:n-x,y:a},S={x:e+x,y:a},u={x:e,y:a+o},y={x:e,y:a+A},G={x:e,y:t-A};return[[E,c,T,L],[L,I,p,d],[d,S,y,u],[u,G,l,E]]}function mc(r){var a;let e=[],t=(a=r==null?void 0:r.attributes)==null?void 0:a.points;t=i1(t);let n=u0(t);if(n.length>4){let i=Number(n[0]),o=Number(n[1]);for(let x=0;x<n.length;x+=2){let A=Number(n[x])||0,E=Number(n[x+1])||0;e.push([{x:i,y:o},!1,!1,{x:A,y:E}]),i=A,o=E}}return[e]}function r1(r,e,t,n,a,i,o,x,A,E){let l={x:r,y:e},c={x,y:A};if(r===x&&e===A||!t||!n)return[l.x,l.y,c.x,c.y,c.x,c.y];let L=Oc(a);i=!!i,o=!!o;let T={},I,d;if(E)I=E[0],d=E[1],T={x:E[2],y:E[3]};else{l=Yn(l,L*-1),c=Yn(c,L*-1);let Q=(l.x-c.x)/2,X=(l.y-c.y)/2,Ie=X*X,Ye=Q*Q,ge=Ye/(t*t)+Ie/(n*n);ge>1&&(ge=Math.sqrt(ge),t*=ge,n*=ge);let te=t*t,ye=n*n,Te=i===o?-1:1;Te*=Math.sqrt(Math.abs((te*ye-te*Ie-ye*Ye)/(te*Ie+ye*Ye))),T.x=Te*t*X/n+(l.x+c.x)/2,T.y=Te*-1*n*Q/t+(l.y+c.y)/2,I=Math.asin((l.y-T.y)/n),d=Math.asin((c.y-T.y)/n),I=l.x<T.x?Math.PI-I:I,d=c.x<T.x?Math.PI-d:d;let Ce=Math.PI*2;I<0&&(I=Ce+I),d<0&&(d=Ce+d),o&&I>d&&(I=I-Ce),!o&&d>I&&(d=d-Ce)}let p=d-I,S=[],u=Math.PI*120/180;if(Math.abs(p)>u){let Q=d,X=c.x,Ie=c.y;d=I+u*(o&&d>I?1:-1),c.x=T.x+t*Math.cos(d),c.y=T.y+n*Math.sin(d),S=r1(c.x,c.y,t,n,a,0,o,X,Ie,[d,Q,T.x,T.y])}let y={x:Math.cos(I),y:Math.sin(I)},G={x:Math.cos(d),y:Math.sin(d)};p=d-I;let m=Math.tan(p/4)*4/3,D={x:l.x,y:l.y},H={x:l.x+t*m*y.y,y:l.y-n*m*y.x};H.x=2*D.x-H.x,H.y=2*D.y-H.y;let v={x:c.x+t*m*G.y,y:c.y-n*m*G.x},J={x:c.x,y:c.y};if(S=[H.x,H.y,v.x,v.y,J.x,J.y].concat(S),E)return S;{let Q=[];for(let X=0;X<S.length;X++)X%2?Q[X]=Yn({x:S[X-1],y:S[X]},L).y:Q[X]=Yn({x:S[X],y:S[X+1]},L).x;return Q}}function Oc(r){return r*(Math.PI/180)}function Yn(r,e,t){if(!r)return;if(e===0)return r;t=t||{},t.x=t.x||0,t.y=t.y||0,r.x-=t.x,r.y-=t.y;let n=r.x*Math.cos(e)-r.y*Math.sin(e),a=r.x*Math.sin(e)+r.y*Math.cos(e);return r.x=n+t.x,r.y=a+t.y,r}function Bc(r={}){const e=r.attributes.d||"";if(e.length===0||e.length===1)return[];let t=Fc(e);return t=fc(t),t=Mc(t),t=Gc(t),t=Pc(t),t=bc(t),t=Uc(t),Hc(t)}function Hc(r){let e=[],t=[],n=0,a=0;return r.forEach(i=>{i.type==="M"&&(n=i.parameters[0],a=i.parameters[1]),i.type==="L"&&(t.push([{x:n,y:a},!1,!1,{x:i.parameters[0],y:i.parameters[1]}]),n=i.parameters[0],a=i.parameters[1]),i.type==="C"&&(t.push([{x:n,y:a},{x:i.parameters[0],y:i.parameters[1]},{x:i.parameters[2],y:i.parameters[3]},{x:i.parameters[4],y:i.parameters[5]}]),n=i.parameters[4],a=i.parameters[5]),i.type==="Z"&&(e.push(t),t=[])}),t.length&&e.push(t),e}function Fc(r){let e=[],t=!1,n=i1(r);for(let a=0;a<n.length;a++)if(xo(n.charAt(a))){t=a;break}if(t===!1)return[{type:"Z"}];for(let a=t+1;a<n.length;a++)xo(n.charAt(a))&&(e.push({type:n.charAt(t),parameters:u0(n.substring(t+1,a))}),t=a);return t<n.length-1&&e.push({type:n.charAt(t),parameters:u0(n.substring(t+1,n.length))}),e}function fc(r){let e=[],t={},n={x:0,y:0},a={x:0,y:0};return r.forEach(i=>{if(i.type==="m"||i.type==="l"){t={type:i.type==="m"?"M":"L",parameters:[]};for(let o=0;o<i.parameters.length;o+=2)a.x=i.parameters[o+0]+n.x,a.y=i.parameters[o+1]+n.y,t.parameters.push(a.x),t.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(t)}else if(i.type==="h"){t={type:"H",parameters:[]};for(let o=0;o<i.parameters.length;o++)a.x=i.parameters[o]+n.x,t.parameters.push(a.x),n.x=a.x;e.push(t)}else if(i.type==="v"){t={type:"V",parameters:[]};for(let o=0;o<i.parameters.length;o++)a.y=i.parameters[o]+n.y,t.parameters.push(a.y),n.y=a.y;e.push(t)}else if(i.type==="c"){t={type:"C",parameters:[]};for(let o=0;o<i.parameters.length;o+=6)t.parameters.push(i.parameters[o+0]+n.x),t.parameters.push(i.parameters[o+1]+n.y),t.parameters.push(i.parameters[o+2]+n.x),t.parameters.push(i.parameters[o+3]+n.y),a.x=i.parameters[o+4]+n.x,a.y=i.parameters[o+5]+n.y,t.parameters.push(a.x),t.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(t)}else if(i.type==="s"){t={type:"S",parameters:[]};for(let o=0;o<i.parameters.length;o+=4)t.parameters.push(i.parameters[o+0]+n.x),t.parameters.push(i.parameters[o+1]+n.y),a.x=i.parameters[o+2]+n.x,a.y=i.parameters[o+3]+n.y,t.parameters.push(a.x),t.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(t)}else if(i.type==="q"){t={type:"Q",parameters:[]};for(let o=0;o<i.parameters.length;o+=4)t.parameters.push(i.parameters[o+0]+n.x),t.parameters.push(i.parameters[o+1]+n.y),a.x=i.parameters[o+2]+n.x,a.y=i.parameters[o+3]+n.y,t.parameters.push(a.x),t.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(t)}else if(i.type==="t"){t={type:"T",parameters:[]};for(let o=0;o<i.parameters.length;o+=2)a.x=i.parameters[o+0]+n.x,a.y=i.parameters[o+1]+n.y,t.parameters.push(a.x),t.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(t)}else if(i.type==="a"){t={type:"A",parameters:[]};for(let o=0;o<i.parameters.length;o+=7)t.parameters.push(i.parameters[o+0]),t.parameters.push(i.parameters[o+1]),t.parameters.push(i.parameters[o+2]),t.parameters.push(i.parameters[o+3]),t.parameters.push(i.parameters[o+4]),a.x=i.parameters[o+5]+n.x,a.y=i.parameters[o+6]+n.y,t.parameters.push(a.x),t.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(t)}else i.type==="z"?e.push({type:"Z"}):(e.push(i),n=gn(n,i))}),e}function Mc(r){let e=[];return r.forEach(t=>{if(t.type)switch(t.type){case"Z":case"z":e.push({type:"Z"});break;case"H":case"V":case"h":case"v":for(let n=0;n<t.parameters.length;n+=2)e.push({type:t.type,parameters:[t.parameters[n]]});break;case"M":for(let n=0;n<t.parameters.length;n+=2)e.push({type:n<2?"M":"L",parameters:[t.parameters[n],t.parameters[n+1]]});break;case"m":for(let n=0;n<t.parameters.length;n+=2)e.push({type:n<2?"m":"l",parameters:[t.parameters[n],t.parameters[n+1]]});break;case"L":case"T":case"l":case"t":for(let n=0;n<t.parameters.length;n+=2)e.push({type:t.type,parameters:[t.parameters[n],t.parameters[n+1]]});break;case"Q":case"S":case"q":case"s":for(let n=0;n<t.parameters.length;n+=4)e.push({type:t.type,parameters:[t.parameters[n],t.parameters[n+1],t.parameters[n+2],t.parameters[n+3]]});break;case"C":case"c":for(let n=0;n<t.parameters.length;n+=6)e.push({type:t.type,parameters:[t.parameters[n],t.parameters[n+1],t.parameters[n+2],t.parameters[n+3],t.parameters[n+4],t.parameters[n+5]]});break;case"A":case"a":for(let n=0;n<t.parameters.length;n+=7)e.push({type:t.type,parameters:[t.parameters[n],t.parameters[n+1],t.parameters[n+2],t.parameters[n+3],t.parameters[n+4],t.parameters[n+5],t.parameters[n+6]]});break}}),e}function Gc(r){let e=[],t={x:0,y:0};return r.forEach(n=>{if(n.type==="H")for(let a=0;a<n.parameters.length;a++)e.push({type:"L",parameters:[n.parameters[a],t.y]});else if(n.type==="V")for(let a=0;a<n.parameters.length;a++)e.push({type:"L",parameters:[t.x,n.parameters[a]]});else e.push(n);t=gn(t,n)}),e}function Pc(r){let e=[],t={x:0,y:0},n={x:0,y:0},a={x:0,y:0},i;return r.forEach(o=>{o.type==="S"||o.type==="T"?(i=e.length>1?e.at(-1):!1,i&&i.type==="C"?(n.x=i.parameters[2],n.y=i.parameters[3]):i&&i.type==="Q"?(n.x=i.parameters[0],n.y=i.parameters[1]):(n.x=t.x,n.y=t.y),a={x:t.x-n.x+t.x,y:t.y-n.y+t.y},o.type==="S"?e.push({type:"C",parameters:[a.x,a.y,o.parameters[0],o.parameters[1],o.parameters[2],o.parameters[3]]}):o.type==="T"&&e.push({type:"Q",parameters:[a.x,a.y,o.parameters[0],o.parameters[1]]})):e.push(o),t=gn(t,o)}),e}function bc(r){let e=[],t={x:0,y:0},n,a,i,o,x,A,E,l,c,L;return r.forEach(T=>{T.type==="Q"?(n=t.x,a=t.y,i=T.parameters[0],o=T.parameters[1],x=T.parameters[2],A=T.parameters[3],E=n+2/3*(i-n),l=a+2/3*(o-a),c=x+2/3*(i-x),L=A+2/3*(o-A),e.push({type:"C",parameters:[E,l,c,L,x,A]})):e.push(T),t=gn(t,T)}),e}function Uc(r){let e=[],t=[],n={x:0,y:0};return r.forEach(a=>{if(a.type==="A")for(let i=0;i<a.parameters.length;i+=7){t=r1(n.x,n.y,a.parameters[i+0],a.parameters[i+1],a.parameters[i+2],a.parameters[i+3],a.parameters[i+4],a.parameters[i+5],a.parameters[i+6],!1);for(let o=0;o<t.length;o+=6)e.push({type:"C",parameters:[t[o+0],t[o+1],t[o+2],t[o+3],t[o+4],t[o+5]]});n={x:t.at(-2),y:t.at(-1)}}else e.push(a),n=gn(n,a)}),e}function gn(r,e){let t={x:r.x||0,y:r.y||0};switch(e.type){case"Z":case"z":break;case"H":t.x=e.parameters.at(-1);break;case"V":t.y=e.parameters.at(-1);break;case"M":case"L":case"C":case"S":case"A":case"Q":case"T":t.x=e.parameters.at(-2),t.y=e.parameters.at(-1);break;case"h":for(let n=0;n<e.parameters.length;n++)t.x+=e.parameters[n];break;case"v":for(let n=0;n<e.parameters.length;n++)t.y+=e.parameters[n];break;case"m":case"l":case"t":for(let n=0;n<e.parameters.length;n+=2)t.x+=e.parameters[n+0],t.y+=e.parameters[n+1];break;case"q":case"s":for(let n=0;n<e.parameters.length;n+=4)t.x+=e.parameters[n+2],t.y+=e.parameters[n+3];break;case"c":for(let n=0;n<e.parameters.length;n+=6)t.x+=e.parameters[n+4],t.y+=e.parameters[n+5];break;case"a":for(let n=0;n<e.parameters.length;n+=7)t.x+=e.parameters[n+5],t.y+=e.parameters[n+6];break}return t}function xo(r){return"MmLlCcSsZzHhVvAaQqTt".indexOf(r)>-1}function vc(r){let e=r.attributes||{},t=Number(e.x)||0,n=Number(e.y)||0,a=Number(e.width)||100,i=Number(e.height)||100,o=t+a,x=n+i,A={x:t,y:n},E={x:o,y:n},l={x:o,y:x},c={x:t,y:x};return[[[A,!1,!1,E],[E,!1,!1,l],[l,!1,!1,c],[c,!1,!1,A]]]}function Yc(r){let e,t;if(typeof window.DOMParser<"u")e=new window.DOMParser().parseFromString(r,"text/xml");else if(typeof window.ActiveXObject<"u"&&new window.ActiveXObject("Microsoft.XMLDOM"))e=new window.ActiveXObject("Microsoft.XMLDOM"),e.async="false",e.loadXML(r);else throw console.warn("No XML document parser found."),t=new SyntaxError("No XML document parser found."),t;if(e.getElementsByTagName("parserError").length){const i=e.getElementsByTagName("div")[0].innerHTML;throw t=new SyntaxError(oa(i)),t}return{name:e.documentElement.nodeName,attributes:n1(e.documentElement.attributes),content:t1(e.documentElement)}}function t1(r){const e=r.childNodes;if(e.length===0)return oa(r.nodeValue);const t=[];let n,a,i;for(const o of e)n={},o.nodeName!=="#comment"&&(a=t1(o),i=n1(o.attributes),o.nodeName==="#text"&&JSON.stringify(i)==="{}"?n=oa(a):(n.name=o.nodeName,n.attributes=i,n.content=a),n!==""&&t.push(n));return t}function n1(r){if(!r||!r.length)return{};const e={};for(const t of r)e[t.name]=oa(t.value);return e}function oa(r){try{return r=r.replace(/^\s+|\s+$/g,""),r.replace(/(\r\n|\n|\r|\t)/gm,"")}catch{return""}}function wc(r){let e=Yc(r);return a1(e)}function a1(r,e=!1){let t=[],n=!1;return r!=null&&r.content?(r.attributes.transform&&console.warn("Transform data is not supported!"),r.content.forEach(a=>{let i=a.name.toLowerCase();(i==="circle"||i==="ellipse")&&(t=t.concat(Nc(a))),(i==="path"||i==="glyph")&&(t=t.concat(Bc(a))),(i==="polygon"||i==="polyline")&&(t=t.concat(mc(a))),i==="rect"&&(t=t.concat(vc(a))),i==="g"&&(t=t.concat(a1(a,n)))}),t):[]}function i1(r){return r=r.replace(/\s+/g,","),r=r.replace(/e/gi,"e"),r=r.replace(/e-/g,"~~~"),r=r.replace(/-/g,",-"),r=r.replace(/~~~/g,"e-"),r=r.replace(/e\+/g,"~~~"),r=r.replace(/\+/g,","),r=r.replace(/~~~/g,"e+"),r=r.replace(/,+/g,","),r}function u0(r=""){let e=[];return r.charAt(0)===","&&(r=r.substring(1)),r.charAt(r.length-1)===","&&(r=r.substring(0,r.length-1)),r.length>0&&(r=r.split(","),r.forEach(t=>{if(t=t.split("."),t.length===1)e.push(Number(t[0]));else if(t.length===2)e.push(Number(t.join(".")));else if(t.length>2){e.push(+`${t[0]}.${t[1]}`);for(let n=2;n<t.length;n++)e.push(+`0.${t[n]}`)}})),e}class Ur extends pr{constructor({link:e=!1,name:t="Component Instance",translateX:n=0,translateY:a=0,resizeWidth:i=0,resizeHeight:o=0,isFlippedNS:x=!1,isFlippedEW:A=!1,reverseWinding:E=!1,rotation:l=0,rotateFirst:c=!1,xLock:L=!1,yLock:T=!1,wLock:I=!1,hLock:d=!1,ratioLock:p=!1,parent:S=!1}={}){super(),this.parent=S,this.name=t,this.link=e,this.translateX=n,this.translateY=a,this.resizeWidth=i,this.resizeHeight=o,this.isFlippedNS=x,this.isFlippedEW=A,this.reverseWinding=E,this.rotation=l,this.rotateFirst=c,this.xLock=L,this.yLock=T,this.wLock=I,this.hLock=d,this.ratioLock=p,this.objType="ComponentInstance"}save(e=!1){const t={link:this.link};return this.name!=="Component Instance"&&(t.name=this.name),this.translateX!==0&&(t.translateX=this.translateX),this.translateY!==0&&(t.translateY=this.translateY),this.resizeWidth!==0&&(t.resizeWidth=this.resizeWidth),this.resizeHeight!==0&&(t.resizeHeight=this.resizeHeight),this.isFlippedNS!==!1&&(t.isFlippedNS=this.isFlippedNS),this.isFlippedEW!==!1&&(t.isFlippedEW=this.isFlippedEW),this.reverseWinding!==!1&&(t.reverseWinding=this.reverseWinding),this.rotation!==0&&(t.rotation=this.rotation),this.rotateFirst!==!1&&(t.rotateFirst=this.rotateFirst),this.xLock!==!1&&(t.xLock=this.xLock),this.yLock!==!1&&(t.yLock=this.yLock),this.wLock!==!1&&(t.wLock=this.wLock),this.hLock!==!1&&(t.hLock=this.hLock),this.ratioLock!==!1&&(t.ratioLock=this.ratioLock),e&&(t.objType=this.objType),t}get transformedGlyph(){return this.cache.transformedGlyph||(this.cache.transformedGlyph=this.makeTransformedGlyph()),this.cache.transformedGlyph}makeTransformedGlyph(){const e=this.getCrossLinkedItem();if(!e)return console.warn(`Tried to get Component: ${this.link} but it doesn't exist - bad usedIn array maintenance.`),!1;const t=Rt(e);return(this.translateX||this.translateY||this.resizeWidth||this.resizeHeight||this.isFlippedEW||this.isFlippedNS||this.reverseWinding||this.rotation)&&(this.rotateFirst&&t.rotate($t(this.rotation*-1),t.maxes.center),this.isFlippedEW&&t.flipEW(),this.isFlippedNS&&t.flipNS(),t.updateGlyphPosition(this.translateX,this.translateY,!0),t.updateGlyphSize({width:this.resizeWidth,height:this.resizeHeight}),this.reverseWinding&&t.reverseWinding(),this.rotateFirst||t.rotate($t(this.rotation*-1),t.maxes.center)),t}getCrossLinkedItem(){var n;let e=(n=this==null?void 0:this.parent)==null?void 0:n.parent,t;return e&&e.getItem&&(t=e.getItem(this.link)),t}get link(){return this._link}get name(){return this._name}get translateX(){return this._translateX}get translateY(){return this._translateY}get resizeWidth(){return this._scaleW}get resizeHeight(){return this._scaleH}get isFlippedEW(){return this._isFlippedEW}get isFlippedNS(){return this._isFlippedNS}get reverseWinding(){return this._reverseWinding}get rotation(){return this._rotation}get rotateFirst(){return this._rotateFirst}get xLock(){return this._xLock}get yLock(){return this._yLock}get wLock(){return this._wLock}get hLock(){return this._hLock}get ratioLock(){return this._ratioLock}get x(){return this.maxes.xMin}get y(){return this.maxes.yMax}get width(){return this.transformedGlyph.maxes.width}get height(){return this.transformedGlyph.maxes.height}get maxes(){return this.transformedGlyph.maxes}get center(){return this.transformedGlyph.maxes.center}get svgPathData(){return this.transformedGlyph.svgPathData}set link(e){this._link=e,this.changed()}set name(e=""){e=v0(e),e!==""&&(this._name=e)}set translateX(e){this._translateX=parseFloat(e),isNaN(this._translateX)&&(this._translateX=0),this.changed()}set translateY(e){this._translateY=parseFloat(e),isNaN(this._translateY)&&(this._translateY=0),this.changed()}set resizeWidth(e){this._scaleW=parseFloat(e),isNaN(this._scaleW)&&(this._scaleW=0),this.changed()}set resizeHeight(e){this._scaleH=parseFloat(e),isNaN(this._scaleH)&&(this._scaleH=0),this.changed()}set isFlippedNS(e){this._isFlippedNS=!!e,this.changed()}set isFlippedEW(e){this._isFlippedEW=!!e,this.changed()}set reverseWinding(e){this._reverseWinding=!!e,this.changed()}set rotation(e){this._rotation=parseFloat(e),isNaN(this._rotation)&&(this._rotation=0),this.changed()}set rotateFirst(e){this._rotateFirst=!!e,this.changed()}set xLock(e){this._xLock=!!e}set yLock(e){this._yLock=!!e}set wLock(e){this._wLock=!!e}set hLock(e){this._hLock=!!e}set ratioLock(e){this._ratioLock=!!e}updateShapePosition(e,t){e=parseFloat(e)||0,t=parseFloat(t)||0,this.translateX=1*this.translateX+e,this.translateY=1*this.translateY+t}updateShapeSize({width:e=!1,height:t=!1,ratioLock:n=!1}){if(e!==!1&&(e=parseFloat(e)||0),t!==!1&&(t=parseFloat(t)||0),n){const a=this.transformedGlyph.maxes,i=a.xMax-a.xMin,o=a.yMax-a.yMin;Math.abs(e)>Math.abs(t)?t=e*(o/i):e=t*(i/o)}this.resizeWidth=1*this.resizeWidth+e,this.resizeHeight=1*this.resizeHeight+t,this.rotation===0&&(this.rotateFirst=!1)}flipEW(e){if(this.isFlippedEW=!this.isFlippedEW,e){const t=this.transformedGlyph.maxes;this.translateX+=e-t.xMax+e-t.xMin}return this.rotation===0&&(this.rotateFirst=!1),this}flipNS(e){if(this.isFlippedNS=!this.isFlippedNS,e){const t=this.transformedGlyph.maxes;this.translateY+=e-t.yMax+e-t.yMin}return this.rotation===0&&(this.rotateFirst=!1),this}rotate(e){const t=da(e)*-1;return this.rotation=this.rotation+t,this.resizeHeight===0&&this.resizeWidth===0&&!this.isFlippedEW&&!this.isFlippedNS&&(this.rotateFirst=!0),this}}const Wc=Object.freeze(Object.defineProperty({__proto__:null,ComponentInstance:Ur},Symbol.toStringTag,{value:"Module"}));class Ae extends pr{constructor({id:e=!1,parent:t=!1,objType:n="Glyph",name:a=!1,shapes:i=[],advanceWidth:o=0,transformOrigin:x=!1,ratioLock:A=!1,usedIn:E=[],gsub:l=[],contextCharacters:c=""}={}){super(),this.id=e,this.parent=t,this.name=a,this.shapes=i,this.advanceWidth=o,this.transformOrigin=x,this.ratioLock=A,this.usedIn=E,this.gsub=l,this.contextCharacters=c,this.objType=n}save(e=!1){const t={name:this.name,id:this._id,objType:this.objType};this.advanceWidth!==0&&(t.advanceWidth=this.advanceWidth),this.transformOrigin&&this.transformOrigin!=="baseline-left"&&(t.transformOrigin=this.transformOrigin),this.ratioLock!==!1&&(t.ratioLock=this.ratioLock),this.usedIn.length&&(t.usedIn=this.usedIn),this.gsub.length&&(t.gsub=this.gsub);let n=this.contextCharacters;if(n.length&&n!==this.char&&(t.contextCharacters=n),this.shapes&&this.shapes.length){t.shapes=[];for(let a=0;a<this.shapes.length;a++)t.shapes.push(this.shapes[a].save(e))}return e||(this.objType==="Glyph"&&delete t.name,delete t.objType),!e&&this.__ID&&delete this.__ID,t}print(e=0){let t="";for(let a=0;a<e;a++)t+="  ";let n=`${t}{Glyph
`;return t+="  ",n+=`${t}id: ${this.id}
`,n+=`${t}name: ${this.name}
`,this.advanceWidth!==0&&(n+=`${t}advanceWidth: ${this.advanceWidth}
`),this.transformOrigin!==!1&&(n+=`${t}transformOrigin: ${this.transformOrigin}
`),this.ratioLock!==!1&&(n+=`${t}ratioLock: ${this.ratioLock}
`),this.usedIn.length&&(n+=`${t}usedIn: ${JSON.stringify(this.usedIn)}
`),this.gsub.length&&(n+=`${t}gsub: ${JSON.stringify(this.gsub)}
`),this.shapes&&this.shapes.length?(n+=`${t}shapes: [
`,this._shapes.forEach(a=>{n+=a.print(e+2),n+=`
`}),n+=`${t}]
`):n+=`${t}shapes: []
`,this.maxes&&(n+=`${t}maxes: ${this.maxes.print(e+1)}
`),n+=`${t.substring(2)}}/Glyph ${this.id}`,n}get id(){return this._id}get shapes(){return this._shapes}get advanceWidth(){return this._advanceWidth}get transformOrigin(){return this._transformOrigin||(this._transformOrigin="baseline-left"),this._transformOrigin}get ratioLock(){return this._ratioLock}get usedIn(){return this._usedIn||[]}get gsub(){return this._gsub||[]}get contextCharacters(){return!this._contextCharacters||this._contextCharacters===this.char?this.char:this._contextCharacters}get x(){return this.maxes.xMin}get y(){return this.maxes.yMax}get width(){const e=this.maxes.xMax-this.maxes.xMin;return Math.max(e,0)}get height(){const e=this.maxes.yMax-this.maxes.yMin;return Math.max(e,0)}get leftSideBearing(){return this.maxes.xMin}get rightSideBearing(){let e=this.maxes.xMax;return this.advanceWidth-e}get name(){let e=this._name;if(!e&&!this.id)return"[no id]";if(!e){if(this.id.startsWith("liga-")){let t=ir(this.id,"liga-");t=t.split("-"),e="Ligature ",t.forEach(n=>{n.length===1?e+=n:e+=sr(n)})}else if(this.id.startsWith("comp-"))e=`Component ${ir(this.id,"comp-")}`;else if(this.id.startsWith("glyph-")){let t=ir(this.id,"glyph-");e=wt(t)}this._name=e}return e}get char(){let e;return this.gsub.length?e=this.gsub.reduce((t,n)=>`${t}${String.fromCodePoint(n)}`,""):e=sr(ir(this.id,"glyph-")),e}get chars(){return this.char}get contentType(){if(this.cache.contentType)return this.cache.contentType;let e="unknown",t=0,n=0;return this.shapes.forEach(a=>{a.objType==="ComponentInstance"&&n++,a.objType==="Path"&&t++}),t>0&&n===0&&(e="paths"),n>0&&t===0&&(e="component instances"),t>0&&n>0&&(e="items"),this.cache.contentType=e,e}set id(e){this._id=e}set shapes(e=[]){this._shapes=[],e&&e.length&&e.forEach(t=>{this.addOneShape(t)}),this.changed()}addOneShape(e){return q(e.link)?(e.parent=this,this._shapes.push(new Ur(e))):(e.parent=this,this._shapes.push(new je(e))),this.changed(),this._shapes.at(-1)}set advanceWidth(e){this._advanceWidth=parseFloat(e),isNaN(this._advanceWidth)&&(this._advanceWidth=0)}set transformOrigin(e){Ln.indexOf(e)>-1?this._transformOrigin=e:this._transformOrigin=!1}set ratioLock(e){this._ratioLock=!!e}set usedIn(e){this._usedIn=e||[]}set gsub(e){this._gsub=e||[]}set contextCharacters(e=!1){!e||e===this.char||typeof e!="string"?delete this._contextCharacters:this._contextCharacters=e}set name(e){this._name=e}set x(e){this.setGlyphPosition(e,!1)}set y(e){this.setGlyphPosition(!1,e)}set width(e){this.setGlyphSize({width:e})}set height(e){this.setGlyphSize({height:e})}set leftSideBearing(e){let t=e-this.leftSideBearing;this.setGlyphPosition(e),this.advanceWidth+=t}set rightSideBearing(e){let t=e-this.rightSideBearing;this.advanceWidth+=t}setGlyphPosition(e,t,n=!0){const a=this.maxes;e!==!1&&(e=parseFloat(e)),t!==!1&&(t=parseFloat(t));const i=e!==!1?e-a.xMin:0,o=t!==!1?t-a.yMax:0;this.updateGlyphPosition(i,o,n)}updateGlyphPosition(e,t,n=!0){e=parseFloat(e)||0,t=parseFloat(t)||0;for(let a=0;a<this.shapes.length;a++){const i=this.shapes[a];i.objType==="ComponentInstance"&&!n||i.updateShapePosition(e,t)}}setGlyphSize({width:e=!1,height:t=!1,ratioLock:n=!1,updateComponentInstances:a=!0,transformOrigin:i=!1}={}){const o=this.maxes;e!==!1&&(e=parseFloat(e)),t!==!1&&(t=parseFloat(t));const x=o.yMax-o.yMin,A=o.xMax-o.xMin;let E=e!==!1?e-A:0,l=t!==!1?t-x:0;n&&(Math.abs(t)>Math.abs(e)?E=A*(t/x)-A:l=x*(e/A)-x),this.updateGlyphSize({width:E,height:l,updateComponentInstances:a,transformOrigin:i})}updateGlyphSize({width:e=0,height:t=0,ratioLock:n=!1,updateComponentInstances:a=!0,transformOrigin:i=!1}={}){const o=this.maxes;let x=parseFloat(e)||0,A=parseFloat(t)||0;const E=o.width,l=o.height;let c=E+x,L=l+A;Math.abs(c)<1&&(c=1),Math.abs(L)<1&&(L=1);let T=L/l,I=c/E;n&&(x!==0&&A===0?(T=I,L=l*T,A=L-l):(I=T,c=E*I,x=c-E));const d=w0(x,A,this.maxes,i);this.shapes.forEach(p=>{if(p.objType==="ComponentInstance"&&!a)return;const S=p.maxes,u=S.xMax-S.xMin,y=u*I;let G=!1;I!==0&&(G=y-u);const m=S.yMax-S.yMin,D=m*T;let H=!1;T!==0&&(H=D-m),p.updateShapeSize({width:G,height:H,transformOrigin:"bottom-left"});const v=S.xMin-o.xMin,J=v*I;let Q=!1;I!==0&&(Q=J-v);const X=S.yMin-o.yMin,Ie=X*T;let Ye=!1;T!==0&&(Ye=Ie-X),p.updateShapePosition(Q,Ye,!0)}),this.updateGlyphPosition(d.deltaX,d.deltaY)}flipNS(e=this.maxes.center.y){for(let t=0;t<this.shapes.length;t++)this.shapes[t].flipNS(e);return this}flipEW(e=this.maxes.center.x){for(let t=0;t<this.shapes.length;t++)this.shapes[t].flipEW(e);return this}roundAll(e=0){return this.shapes.forEach(t=>{t.roundAll&&t.roundAll(e)}),this}rotate(e,t){t=t||this.maxes.center;for(let n=0;n<this.shapes.length;n++)this.shapes[n].rotate(e,t);return this}reverseWinding(){for(let e=0;e<this.shapes.length;e++)this.shapes[e].reverseWinding();return this}get svgPathData(){var e;return(e=this==null?void 0:this.cache)!=null&&e.svgPathData||(this.cache.svgPathData=this.makeSVGPathData(this)),this.cache.svgPathData}makeSVGPathData(){let e="M0,0";return this.shapes.forEach(t=>{if(t.objType==="ComponentInstance"){const n=t.transformedGlyph;n&&(e+=n.svgPathData)}else e+=t.svgPathData,e+=" "}),Y0(e)==="M0,0"&&(e="M0,0Z"),e}get maxes(){return this.cache.maxes?Ia(this.cache.maxes)?this.recalculateGlyphMaxes():$0(this.cache.maxes)&&this.recalculateGlyphMaxes():this.recalculateGlyphMaxes(),this.cache.maxes}recalculateGlyphMaxes(){let e={xMax:0,xMin:0,yMax:0,yMin:0};return this.shapes&&this.shapes.length>0&&(e=on(this.shapes.map(t=>t.maxes))),this.cache.maxes=new qe(e),this.cache.maxes}}const kc=Object.freeze(Object.defineProperty({__proto__:null,Glyph:Ae},Symbol.toStringTag,{value:"Module"}));function Aa(r){const e=wc(r);if(e.length===0)return new Ae;let t=0,n=[];e.forEach(i=>{if(i=i.filter(o=>!(o[0].x===o[3].x&&o[0].y===o[3].y&&o[1]===!1&&o[2]===!1)),i.length){t++;const o=i[0][0].x===i.at(-1)[3].x&&i[0][0].y===i.at(-1)[3].y;let x=new je({name:`Path ${t}`}),A;o||(A=new Ge({p:{coord:{x:i[0][0].x,y:i[0][0].y}}}),i[0][1]&&(A.h2=new ae({coord:{x:i[0][1].x,y:i[0][1].y}})),x.addPathPoint(A));for(let E=0;E<i.length-1;E++)x.addPathPoint(Eo(i[E],i[E+1]));o?x.addPathPoint(Eo(i.at(-1),i[0])):(A=new Ge({p:{coord:{x:i.at(-1)[3].x,y:i.at(-1)[3].y}}}),i.at(-1)[2]&&(A.h1=new ae({coord:{x:i.at(-1)[2].x,y:i.at(-1)[2].y}})),x.addPathPoint(A)),n.push(x)}});const a=new Ae({shapes:n});return a.changed(!0),a}function Eo(r,e){r[3].x!==e[0].x||(r[3].y,e[0].y);let t=new Ge({p:{coord:{x:e[0].x,y:e[0].y}}});return r[2]&&(t.h1=new ae({coord:{x:r[2].x,y:r[2].y},use:!0})),e[1]&&(t.h2=new ae({coord:{x:e[1].x,y:e[1].y},use:!0})),t}function R0(r,e="SVG"){const t=Aa(r);if(t&&t.shapes.length){t.flipNS(),t.reverseWinding();const n=h(),a=ut(t,n.selectedItem);n.history.addState("Pasted SVG to glyph "+n.selectedItem.name);const i=n.multiSelect.shapes;i.clear(),a.forEach(o=>i.add(o)),B().settings.app.moveShapesOnSVGDragDrop&&i.setShapePosition(0,i.maxes.height),n.publish("currentItem",n.selectedItem),U(`Pasted ${t.shapes.length} shapes from ${e}`)}else U("Could not import pasted SVG code.")}async function lo(r){var t;const e=r.clipboardData||window.clipboardData;if(e){let n=e.getData("Text");R0(n,"<br>the operating system clipboard")}else if((t=navigator==null?void 0:navigator.clipboard)!=null&&t.readText)navigator.clipboard.readText().then(n=>{n?R0(n,"<br>the operating system clipboard"):U("Could not import SVG from the operating system clipboard")});else{U("Could not import SVG from the operating system clipboard");return}}function Kc(r){ne(r);let e=r.dataTransfer;e=e.files[0]||"";let t=e.name.split(".");t=t[t.length-1].toLowerCase();const n=new FileReader;t==="svg"?(n.onload=function(){R0(n.result,"<br>from the dropped SVG file")},n.readAsText(e)):U("Only SVG files can be dropped on the canvas")}class Hr{constructor(e={}){this.text=e.text||"",this.fontSize=e.fontSize||48,this.lineGap=e.lineGap||12,this.pagePadding=e.pagePadding||10,this.pageWidth=e.pageWidth||"fit",this.pageHeight=e.pageHeight||"auto",this.showCharacterExtras=e.showCharacterExtras||!1,this.showLineExtras=e.showLineExtras||!1,this.showPageExtras=e.showPageExtras||!1,this.widthAdjustment=e.widthAdjustment||0}get text(){let e=this._text;return e.substring(0,2)==="{{"&&(e=e.substring(2,e.length-2),Me[e])?Me[e]:this._text}set text(e=""){this._text=e}get displayName(){let e="";return e+=`${this.text.substring(0,40)}...`,e}save(){let e={};return this.fontSize&&this.fontSize!==48&&(e.fontSize=this.fontSize),this.lineGap&&this.lineGap!==12&&(e.lineGap=this.lineGap),this.pagePadding&&this.pagePadding!==10&&(e.pagePadding=this.pagePadding),this.pageWidth&&this.pageWidth!=="fit"&&(e.pageWidth=this.pageWidth),this.pageHeight&&this.pageHeight!=="auto"&&(e.pageHeight=this.pageHeight),this.showCharacterExtras&&(e.showCharacterExtras=this.showCharacterExtras),this.showLineExtras&&(e.showLineExtras=this.showLineExtras),this.showPageExtras&&(e.showPageExtras=this.showPageExtras),this._text&&(e.text=this._text),this.text===Me.swadesh_207_short&&(e.text="{{swadesh_207_short}}"),this.text===Me.swadesh_207_frequent&&(e.text="{{swadesh_207_frequent}}"),this.text===Me.scowl_10_short&&(e.text="{{scowl_10_short}}"),this.text===Me.scowl_10_frequent&&(e.text="{{scowl_10_frequent}}"),this.text===Me.scowl_50_short&&(e.text="{{scowl_50_short}}"),this.text===Me.scowl_50_frequent&&(e.text="{{scowl_50_frequent}}"),this.text===Me.scowl_70_short&&(e.text="{{scowl_70_short}}"),this.text===Me.scowl_70_frequent&&(e.text="{{scowl_70_frequent}}"),e}}let Me={};Me.swadesh_207_short="I you they we you they this that here there who what where when how not all many some few other one two three four five big long wide thick heavy small short narrow thin woman man child wife husband mother father animal fish bird dog louse snake worm tree forest stick fruit seed leaf root bark flower grass rope skin meat blood bone fat egg horn tail feather hair head ear eye nose mouth tooth tongue fingernail foot leg knee hand wing belly guts neck back breast heart liver drink eat bite suck spit vomit blow breathe laugh see hear know think smell fear sleep live die kill fight hunt hit cut split stab scratch dig swim fly walk come lie sit stand turn fall give hold squeeze rub wash wipe pull push throw tie sew count say sing play float flow freeze swell sun moon star water rain river lake sea salt stone sand dust earth cloud fog sky wind snow ice smoke fire ash burn road mountain red green yellow white black night day year warm cold full new old good bad rotten dirty straight round sharp dull smooth wet dry correct near far right left at in with and if because name";Me.swadesh_207_frequent="stab black head leaf fingernail snake animal name husband narrow breast feather because heavy play bird blood bone breathe burn ice scratch thick cloud correct cut day wide dirty dog drink dust seed squeeze left egg yellow rotten sleep forest wet few they father flower freeze full straight give good grass tongue sharp short three die wife wipe this fruit liver skin knee sky laugh child walk salt belly smell vomit mountain stone nose many float smoke hold woman smooth rope mother spit split pull bark worm dry sing some suck swell stick guts turn two rub four mouth water where you";Me.scowl_10_short="able act add leaf age ahead aid major make all am an chaos gap are as at cause gave law tax day lazy bad rubber be bid object able submit box brand jobs doubt bug obvious by can occur ice char city back club code acquire cry cs act cup cycle day feedback broadcast add code edge did adjust badly admit midnight do dry adds due advice hardware body eat debate neck bed see left leg behalf being reject seek cell deem end video deep equal err hes bet queue even few sex eye fan fed off fit fly for fry left fun modify gap age meaningful bigger high girl glad sign go grew bugs length gun apology had forthcoming withdraw he hid highly algorithm technical hot three months eight huge worthwhile why via library ice aid die if big like ill aim in prior chip unique air is it medium five fix size object job jump package key background kid quickly knew asks awkward lucky law album welcome old led half algorithm lie bulk all film log help already also felt blue solve always fly mad dumb me harmful mix firmly common autumn mod dump aims much my name inch and net info hang unhappy nice enjoy bank only government annoy no input unreasonable runs cent numb invent unwanted any boat job lock mod doe of dog oh oil project book old come on too pop or cost got our love how box boy dozen pay update pen helpful graph pi plan equipment pop apple press chips kept put upwards copy quit ran nearby force card re perfect argue perhaps rid dark girl arm turn row sharp err bars art run serve forward cry sad husband disc see satisfy she sit ask slip small so spot square less best sum answer busy tax catch ate doubtful the tie title treatment to output try its putt tune two city equal club luck judge due stuff bug quit bulk sum fun quote up our us but buy van even via vote heavy war we awful who win awkward slowly own two write laws growth exact except boxes exist expand next maybe cycle eye dying style symbol syntax you type buys byte anyway bizarre size";Me.scowl_10_frequent="establishment accidentally administration afterwards disadvantage ahead straightforward majority mistaking alternatively fundamentally misunderstanding chaos applications broadcasting automatically available withdraw maximum displaying crazy embarrassing rubbish deliberately responsibility objections submitting borrowing observation doubtful contributions obviously thereby communications circumstances characters background conclusion acquiring descriptions electronics introduction consistency recommendation feedback additional knowledge adjust admittedly midnight documentation addressing misunderstands undergraduates hardware everybody disappearing somebody sophisticated guaranteeing definitions registering comprehensive rejecting seeking announcement simultaneously representation consequences interpretation queue nevertheless elsewhere experiencing keyboard facilities professional difficulties significantly reflecting frequently justifying investigate arrangements meaningful suggestions discouraging accordingly algorithms buildings strength terminology beforehand forthcoming thoroughly techniques authorities throughout months hundreds worthwhile philosophy appreciating opportunities likewise mediums fixing bizarre justification packages brackets quickly networks awkward lucky calculations album considerable yourself talking almost development helpful already individuals absolutely themselves always combinations harmful harmless autumn demonstration comparatively mysterious unfortunately unhappy enjoy thinking certainly environment unnecessarily unpleasant unreasonable continuously conventional unwanted anonymous misunderstood whatsoever programmers oh pointless projects looking controlling possibilities potentially improvements boxes destroying dozens updating developing upsetting manipulation upwards occupying disturbing performance perhaps particularly information instruction intervention unnecessary husband successfully asking criticism square answering symbols switching atmosphere output publication excluding sufficiently requirements corrupting buying individually avoiding heavy awful widespread unknown rewrite borrows growth examined exceptions executing complexity extending cycles destroyed style syntax everyone anyplace everything everywhere citizen";Me.scowl_50_short="salaam abed acme gad aery aft jag bah fain rajah hake alb lam ankh baobab apps aqua agar asp tat auk aver awl axon dray laze bah bobby webcam abductee abed clubfeet subgroups subhead bier abjure lambkin bleep submerse hobnail bola subplot brr albs bobtail bur obverse bobwhite bobby cads cocci apace achoo cis beck clew acme picnicker coda acquirable craw docs bract cud chancy czarina coda oddball redcap adder deb gadfly cadge dhoti ding adjure bodkin addle adman gladness doc midpoint dram ids hardtop duh adverted dweeb dyer adze lea deb beck zed jeep fief aegis meh lei deejay pekoe ell emo wen oleo hep coequal ere espy eta euro bevy clew hex fey wheezy fa halfback serfdom fey doff afghan wolfhound fie flan hafnium fob halfpence frack coifs aft futz daffy gad bugbear dogcatcher hangdog loge dogfish boggy aught gird glop magma cosign agog grog ergs dogtrot ague wigwag gyro haw highboy ashcans archduke hep mirthful flashgun fishhook hie babushka phlox bathmat techno hob dishpan thru ankhs aught hula schwa ashy iamb jib mica ids fie coif brig jihad piing demijohn wiki mil sim ding viol pip cliquish dirk cis clit odium diva antiwar nix sukiyaki baize jag jeep jib josh julep kale backbit crankcase workday hake sackful ginkgo ankh kith lockjaw yukked anklet milkmaid knave kook chickpea krone auks buckteeth haiku inkwell balky la alb milch veld lea milf bilge bullhorn clit killjoy bilk ell palmy ulna lo pulpy catafalque bulrush awls dolt alum salvo bulwark lynx maw iamb gimcrack slumdog meh brimful farmhand mid mkay armlet jimmy limn emo ump kumquat armrest ems emu triumvirate dimwit gamy nary inbox conch wend pone confab bong inhere nib ninja ankh wanly enmesh jinn noel unpin jonquil unripe duns nth nu convoke unwed lynx onyx benzene roan fob doc hod aloe oft agog oho poi emoji gook pol tom yon coon fop toque orb hos sot lout coven cowl lox soy boozy paps soapbox topcoat stepdad jape campfire popgun aphid pip bumpkin plait stepmom grapnel poi apps prig apps inapt pug pwn pyx aqua brad orb orc gird ere serf erg rho brig marjoram dirk purl berm lorn euro carpi marquis brr burs arty drub nervy airway aery furze mesa busby scat misdo apse misfire disgorge ashy sim disjointedly rusk slaw ism snaky sol asp squab disrobe buss sty suet svelte swag hussy eta catbird butch cote outfox outgo nth ti catkin fitly litmus botnet tom potpie tram lats attar tun outvote twain sty futz aqua nub deuce cud ague mufti pug duh quid jujube auk hula ump dun quoit yup bur buss abut muumuu uvula bauxite obloquy abuzz diva aver vim vole chevron ovule divvy bevy swag cowbird howdah wen lawfully gewgaw whey wiki hawker awl bowman pwn wooer cowpox wrack haws newtons wuss dewy frowzy fixate oxbow coxcomb fixer oxford foxglove foxhound axial laxly laxness axon sexpot coxswain sextet nexus boxwood epoxy yaw flyby lyceum hydra ye mayfly cygnet tallyho yip skyjack beryl hymen lynx yon hypo gyro cloys mythic yuk byword pyx piazza zed zing buzzkill drizzly hazmat kazoo gazpacho kudzu zwieback boozy";Me.scowl_50_frequent="salaaming imperturbability ultraconservatives disadvantageously aerodynamically afforestation tetrahedrons praiseworthiness majorettes groundbreakings electroencephalograms contemporaneously chaotically electroencephalographs aquaculture counterrevolutionaries overenthusiastic interrelationships authoritativeness circumnavigations straightaways axiomatically companionways nonhazardous flibbertigibbets subcontracting molybdenum disencumbering obfuscating subgroups subheadings comprehensibility unobjectionable lambkins bloodthirstiness submersibles abnegating chlorofluorocarbons subprograms transubstantiation obtrusiveness bureaucratically obviousness dumbwaiters labyrinthine electrocardiographs unacceptability lackadaisically counterclaiming acmes picnickers acquisitiveness aristocratically electrodynamics cryptocurrency czarinas daguerreotyping rebroadcasting featherbedding inconsiderateness crowdfunding foreknowledge hardheadedness maladjustment bodkins disconnectedly administratively lightheartedness ambassadorships sandpipers hydroelectricity fountainheads superconductivity hundredweights kudzus rebelliousness electioneering prefabrication gregariousness reinterpretations steeplejacks inconsequentially electromagnetism neurotransmitters exemplifications monkeyshines intermezzos multifariousness beefburger serfdom paraprofessionals afghans halfheartedness aloofness disinformation halfpennies disenfranchisement weatherproofs antiaircraft unfaithfulness misidentifying herringbone dogcatchers hangdog counterintelligence wrongfulness microaggressions bacteriological uncompromisingly phlegmatically nongovernmental dogtrotting wigwagging parapsychology archbishoprics beachcombers archdeacons thoroughgoing bathhouses babushkas arithmetically biotechnology catchphrase philanthropically mouthwatering inconspicuousness annihilators shanghaiing demijohns sportsmanlike deliquescent conversationalists triumvirates contrariwise transfixing sukiyaki prizefighters jitterbugging photojournalists jurisdictional blackballing blackcurrant backdating cantankerousness thankfulness blackguards blockhouses lockjaw yukking huckleberries brinkmanship kookaburras backpedals bankrolling backstretches blackthorns skulduggery anticlockwise buckyballs spellbinders spellcheckers officeholders overindulgence levelheadedness killjoys streetwalkers schoolmistresses invulnerability palpitations milquetoasts chivalrously galvanometers councilwoman discombobulating gimcracks humdingers interdepartmental circumflexes warmhearted interdenominational mkay circumlocutions telecommunication anthropomorphism kumquats armrests bantamweights mysteriousness boysenberries teleconferencing circumnavigating unhesitatingly conjunctivitis dimensionless environmentalism interconnections unpredictability inquisitiveness nonrepresentational counterrevolutions discontinuances overanxious mulligatawny extravaganzas prohibitionists boisterousness psychokinesis grandiloquence atmospherically incontrovertible flamethrowers detoxification spermatozoon shipbuilders slipcovers snapdragons sheepfolds popguns slipknots developmental pneumatically apprehensiveness circumscriptions unscrupulousness sleepwalkers aromatherapy noninterference hypoallergenic porterhouses crackerjacks telemarketing disorderliness predetermination overqualified incorruptibility counterweights counterrevolutionary overzealous crossbreeding conscientiousness disfranchisement thanksgivings disjointedly muskellunges unreasonableness misquotations disreputably transversely swashbucklers syllabification carpetbaggers boastfulness remortgaging catkins shuttlecocking forthrightness breastplates agriculturalists outvoting trustworthiness chintziest longitudinally genuflections lugubriousness brouhahas jujitsu interleukin muumuus antediluvian luxuriousness colloquy puzzlement chevrons skivvying waterboardings shadowboxing weatherproofing viewfinders lawgivers horsewhipping nighthawks sawmills clownishness cowpunchers wrongheadedness newspaperwoman swallowtails knockwursts billowy frowziest counterexamples oxbows unexceptionable oxfords foxgloves inexhaustibly sexless laxness exorbitantly expostulations coxswains extemporaneously waxwings oxyacetylene cyberbullies underemployed ladyfingers lollygagging policyholders skyjackers asymmetrically embryologists cryptocurrencies tyrannosauruses crystallographic electrolytes polyunsaturated pennyweights asphyxia quizzically buzzkills bedazzling hazmat gazpacho mazurkas zwieback lazybones";Me.scowl_70_short="aah ab ac ad ae aft aga ah ai haj aka al am an ciao ape aqua ar as at aud av aw ax aye azo aba abb bobcat bd be bf pibgorn abhor bi obj bk bl abmho cobnut boa bp br abs btl bu abvolt lbw bx by subzero ca ecbolic cc cd ace cf cg ch cig ck cl cm acne co cp acquit cr cs ct cu cw cyl czar dab db dc dd de gadfly dg edh di adj dk bdl dm ordn do dpi hdqrs dr ads obdt dub adv dwt dye dz ea deb dec ed bee def beg eh lei eject eek el em en eon dep eq er es et feu eve dew ex bey fez fa offbeat offcuts mfd fec ff mfg offhand fib fjeld offkey fl fm hafnium fo fp fr ifs ft fug fwd defy rugby agcy gds age bagful egg ugh gi logjam gl gm gnu go magpie gr gs gt gum dogvane hgwy gym zigzag ha cashbox ahchoo hd he hf hg hhd hi kishke hl chm john ho hp earthquake hr chs ht hub boschvark hwy hyp machzor ria ib hic id die if big ihram aalii bijou oik ail aim in bio dip liq air is it ilium civ iwis fix hiya biz ja jct jet jg jib hajj prajna jo jr adjt jug ka kb kc jackdaw eke nakfa kg ankh ki lockjaw dekko kl km kn koa kph kr ks kt haku kvass kw sky la lb talc eld ale elf lg pelham li killjoy alk ll lm ln lo alp calque dlr ls alt flu lv lwei lx fly colza ma mb emcee mdse me mf mg mho mi ramjet mk ml mm damn mo mp kumquat amrita ms mt mu duumvir dimwit my hamza ana inbox enc and ne inf eng sinh nib conj ink enl unman ann no tnpk cinque nr ans ant nu inv unwed jinx any bonze ob doc od doe of bog oh oi mojo oka col om on oo op loq or os bot fou gov ow ox boy oz pa peepbo pc pd pe pf pg pi kopje pk pl pm apnea pod pp pr ps pt pub pvt pwn pya pzazz qadi sheqel qi ql qoph sqq qr qt qu qwerty bra arb arc rd re barf erg rho interj ark birl rm urn bro rpm cirque arr rs rt cru arvo crwth cry orzo sac sb sc sd sea sf sgd sh si masjid ask isl ism assn so sp sq sri ss st sub svelte swab sym grosz ta tb etc gtd ate artful mtg fth ti muntjac latke atm tn to hatpin cotquean tr ts att tub outvote two qty ditz qua bub buck cue buff aug uh oui juju auk bul um bun duo up tuque bur us ut lituus guv thruway aux buy buzz ova vb avdp ave avg vhf via vlf avn vo livre vs ovum vv ivy evzone wad bawbee bawcock wd we awful gewgaw whf wig blowjob wk awl cwm awn wo twp wry bows wt swum bowwow fwy blowzy coxa oxbow exc flexdollars axed boxful foxglove exhale xi axle taxman laxness axon exp exquisite exr bxs ext xu paxwax boxy ya flyby syce yd ye dayfly tyg anyhow yid skyjack dyke syn yo gyp yr mys byte yuk gyve ywis pyx sayyid coryza zap whizzbang vizcacha samizdat zed fizgig muzhik zig britzka zloty gizmo kibbutznik chutzpah buzzsaw azure mitzvah buzzword cozy";Me.scowl_70_frequent="aardwolves honorificabilitudinitatibus psychopharmacologies contradistinctively aerothermodynamics tetrafluoroethylene supercalifragilisticexpialidocious tetrahydrocannabinol photoreconnaissance majoritarianism groundbreakings pneumonoultramicroscopicsilicovolcanoconiosis extraordinarily electroencephalographic anthraquinone antidisestablishmentarianisms overenthusiastically floccinaucinihilipilification circumnavigations unseaworthiness chemoprophylaxis companionways succinylsulfathiazole bacteriologically flabbergasting subclassification subdirectories overbearingnesses dumbfounding subglacial abhorrently objectionableness knobkerries subminiaturize subnormalities bourgeoisification subprofessionals tribromoethanols insubstantialities unobtrusiveness subventionary cobwebbiest bxs presbyterianism subzero ecbolic synecdochically cf cg dichlorodiphenyltrichloroethane buckminsterfullerene chlortetracyclines blancmanges chromaticness ecphonesis acquaintanceship colicweed czarevitch hippopotomonstrosesquipedalian rebroadcasting featherbedding departmentalization grandfathering curmudgeonliness goodheartedness adjudications handkerchiefs otherworldlinesses maladministration straightforwardness childproofing headquartering magnetohydrodynamics straightforwards bloodthirstiness individualistically disadvantageously hundredweights dziggetais chickenheartedness thrombophlebitides feeblemindednesses indefatigabilities photodisintegration incomprehensibility deinstitutionalization nonprejudicial triskaidekaphobias contemporaneousnesses inconsequentiality counterrevolutionaries praiseworthiness attorneyships piezoelectricities surfboardings unselfconsciousness chiefdom counteroffensives roofgarden halfheartedness fjords offkey engulfment aloofness halfpennyworth softheartednesses halfwitted interstratifying hummingbirds dogcatchers subkingdoms counterinsurgencies meaningfulness microaggressions logjams glomerulonephritides segmentalization otorhinolaryngologists stringpiece misunderstandings superstrength contradistinguished dogvane songwriters otorhinolaryngology zigzagging archbishoprics archconservative archdeaconries reproachfulness thoroughgoing highhandedness babushkas biotechnological thoroughpaced earthquakes pseudohermaphroditism electroencephalographs boschvark northwestwardly electroencephalography machzor triiodomethane bijouterie unsportsmanlike impressionistically hemidemisemiquavers microsporangium uncommunicativenesses contrariwise interlocutrix semiyearly compartmentalization straitjacketing jct jg jitterbugging hajjes prajna photojournalists jr adjt injudiciousness lackadaisicalness stockbrokerage blackcurrants backdating breakfasting backgrounders backhandedness counterattacking stockjobbers bookkeepers kaffeeklatsches acknowledgments cuckooflowers backpedaling bankruptcies backscratchers breakthroughs skulduggery kvetchers counterclockwise ankylostomiasis albuminurias tetramethyldiarsine algorithmically diphenylhydantoins killjoys phenylketonuria diacetylmorphine caesalpiniaceous unnilquadiums hexylresorcinol convolvulaceous pickerelweeds calxes calzone somnambulistically uncircumcision humdingers uncomfortableness circumgyration warmheartedness circumjacent gymkhanas circumlocutions kumquats steamrollering circumterrestrial multidimensionality circumvallating bantamweights dihydrostreptomycin hamza nonbelligerents undemonstrativeness videoconferencing environmentalists unpretentiousnesses inquisitiveness nonrepresentational deoxyribonuclease conversationalists unwholesomeness nasopharynxes dinitrobenzene unapproachabilities autobiographically chlorofluorocarbons brokenheartedly grandiloquently underemployment photozincography clapboarding stepchildren stepdaughters leapfrogging campgrounds flapjacks pumpkinseeds oversimplifications developmentally disproportionateness disputatiousness impv shipwrecking endocrinotherapy pzazz sheqalim sheqel qindarkas ql qophs seqq hdqrs qto qwerty electrocardiographic interjectionally disembarkation preternaturalness anthropomorphically overqualified electrodynamometers ultraconservatives bilharziases jurisdictional unsatisfactoriness disgracefulness disjointedness contemporaneously misrepresentations transvestitisms upperclasswoman groszy heartbreakingly postconvalescent outdistancing roentgenotherapy pocketknives indiscreetnesses bulletproofing cotquean glottochronologies bodhisattva untrustworthiness quartziferous intellectualization insufficiently superdreadnought kieselguhrs hallelujahs lukewarmness dichlorodifluoromethane chautauqua duumvirate chauvinistically rauwolfias juxtapositional ventriloquy muzzleloading vb avdp incontrovertibilities avg vhf pavlovas czarevna vraisemblance leitmotivs advt improvvisatore heavyweights evzone shadowboxings cowcatchers bowdlerizations weatherboardings sorrowfulness shadowgraphs wholeheartedness showjumping sparrowhawks snowmobiling downheartedness cowpunchers wrongheadedness newspaperwoman yellowthroats knockwursts hollowwares lawyerly frowziness hexamethylenetetramine boxberries excommunications sexdecillion exemplifications exfoliating foxgloves exhibitionistically lexicographically orthodoxly fluxmeter complexnesses inexorabilities exquisiteness boxrooms exsanguinate extemporaneousness heterosexuality maxwells cyanocobalamins cybernetician encephalomyelitis gillyflowers acanthopterygians platyhelminths skyjackings pyknic polymorphonuclear electromyographies hyperparathyroidism psychophysiological demythologizations polyunsaturated polyvalence archaeopteryxes sayyid psychoanalyzing whizzbangs mezcaline samizdat anthropomorphized wayzgoose muzhiks anthropomorphizing blitzkriegs bamboozlement quizmasters kibbutzniks chutzpah buzzsaw gazumping rendezvousing buzzwords zygophyllaceous";const Vc=":root{--gray-l97: hsl(200, 81%, 97%);--gray-l95: hsl(200, 81%, 94%);--gray-l90: hsl(200, 60%, 88%);--gray-l85: hsl(200, 52%, 82%);--gray-l80: hsl(200, 47%, 76%);--gray-l75: hsl(200, 42%, 71%);--gray-l70: hsl(200, 33%, 65%);--gray-l65: hsl(200, 27%, 60%);--gray-l60: hsl(200, 22%, 55%);--gray-l55: hsl(200, 18%, 50%);--gray-l50: hsl(200, 17%, 45%);--gray-l45: hsl(200, 17%, 40%);--gray-l40: hsl(200, 18%, 36%);--gray-l35: hsl(200, 18%, 31%);--gray-l30: hsl(200, 17%, 27%);--gray-l25: hsl(200, 18%, 23%);--gray-l20: hsl(200, 18%, 19%);--gray-l15: hsl(200, 17%, 15%);--gray-l10: hsl(200, 19%, 11%);--gray-l05: hsl(350, 17%, 7%);--blue-l98: hsl(200, 100%, 98%);--blue-l95: hsl(200, 100%, 94%);--blue-l90: hsl(200, 100%, 87%);--blue-l85: hsl(200, 100%, 80%);--blue-l80: hsl(200, 100%, 73%);--blue-l75: hsl(199, 100%, 64%);--blue-l70: hsl(200, 100%, 58%);--blue-l65: hsl(200, 100%, 49%);--blue-l60: hsl(200, 100%, 45%);--blue-l55: hsl(200, 100%, 41%);--blue-l50: hsl(200, 100%, 37%);--blue-l45: hsl(200, 100%, 33%);--blue-l40: hsl(200, 100%, 30%);--blue-l35: hsl(200, 100%, 25%);--blue-l30: hsl(200, 100%, 22%);--blue-l25: hsl(200, 100%, 19%);--blue-l20: hsl(200, 100%, 15%);--blue-l15: hsl(200, 100%, 12%);--blue-l10: hsl(200, 100%, 9%);--blue-l05: hsl(200, 100%, 6%);--orange-l98: hsl(20, 100%, 98%);--orange-l95: hsl(20, 100%, 95%);--orange-l90: hsl(20, 100%, 89%);--orange-l85: hsl(20, 100%, 84%);--orange-l80: hsl(20, 100%, 78%);--orange-d80: hsl(20, 50%, 78%);--orange-l75: hsl(20, 100%, 72%);--orange-l70: hsl(20, 100%, 66%);--orange-d70: hsl(20, 50%, 66%);--orange-l65: hsl(20, 100%, 56%);--orange-l60: hsl(20, 100%, 50%);--orange-d60: hsl(20, 50%, 50%);--orange-l55: hsl(20, 100%, 46%);--orange-l50: hsl(20, 100%, 42%);--orange-d50: hsl(20, 50%, 42%);--orange-l45: hsl(20, 100%, 37%);--orange-l40: hsl(20, 100%, 33%);--orange-d40: hsl(20, 50%, 33%);--orange-l35: hsl(20, 100%, 29%);--orange-l30: hsl(20, 100%, 25%);--orange-l25: hsl(20, 100%, 22%);--orange-l20: hsl(20, 100%, 17%);--orange-l15: hsl(20, 100%, 14%);--orange-l10: hsl(20, 100%, 10%);--orange-l05: hsl(20, 100%, 6%);--green-l98: hsl(125, 100%, 98%);--green-l95: hsl(125, 100%, 82%);--green-l90: hsl(125, 97%, 74%);--green-l85: hsl(125, 83%, 66%);--green-l80: hsl(125, 74%, 58%);--green-l75: hsl(125, 67%, 50%);--green-l70: hsl(125, 82%, 43%);--green-l65: hsl(125, 100%, 36%);--green-l60: hsl(125, 100%, 33%);--green-l55: hsl(125, 100%, 30%);--green-l50: hsl(125, 100%, 27%);--green-l45: hsl(125, 100%, 24%);--green-l40: hsl(125, 95%, 22%);--green-l35: hsl(125, 100%, 19%);--green-l30: hsl(125, 100%, 16%);--green-l25: hsl(125, 100%, 14%);--green-l20: hsl(125, 100%, 11%);--green-l15: hsl(125, 100%, 9%);--green-l10: hsl(125, 100%, 6%);--green-l05: hsl(125, 100%, 4%);--purple-l98: hsl(285, 100%, 98%);--purple-l95: hsl(285, 100%, 96%);--purple-l90: hsl(285, 100%, 92%);--purple-l85: hsl(285, 100%, 89%);--purple-l80: hsl(285, 100%, 85%);--purple-l75: hsl(285, 100%, 81%);--purple-l70: hsl(285, 100%, 77%);--purple-l65: hsl(285, 100%, 72%);--purple-l60: hsl(285, 100%, 66%);--purple-l55: hsl(285, 100%, 61%);--purple-l50: hsl(285, 100%, 50%);--purple-l45: hsl(285, 100%, 45%);--purple-l40: hsl(285, 100%, 40%);--purple-l35: hsl(285, 100%, 36%);--purple-l30: hsl(285, 100%, 31%);--purple-l25: hsl(285, 100%, 27%);--purple-l20: hsl(285, 100%, 22%);--purple-l15: hsl(285, 100%, 17%);--purple-l10: hsl(285, 100%, 13%);--purple-l05: hsl(285, 100%, 10%);--offWhite: hsl(200, 81%, 97%);--darkRed: hsl(0, 100%, 23%);--red: hsl(0, 100%, 48%);--lightRed: hsl(0, 100%, 90%);--accent-color: hsl(200, 100%, 37%);--accent-color-light: hsl(200, 100%, 49%);--enabled-resting-text: hsl(0, 0%, 5%);--enabled-resting-lightText: hsl(0, 0%, 10%);--enabled-resting-border: hsl(0, 0%, 75%);--enabled-resting-fill: hsl(0, 0%, 40%);--enabled-resting-background: hsl(0, 0%, 98%);--enabled-restingLight-text: hsl(0, 0%, 20%);--enabled-restingLight-lightText: hsl(0, 0%, 30%);--enabled-restingLight-border: hsl(0, 0%, 80%);--enabled-restingLight-fill: hsl(0, 0%, 60%);--enabled-restingLight-background: hsl(0, 0%, 98%);--enabled-focus-text: hsl(0, 0%, 0%);--enabled-focus-lightText: hsl(0, 0%, 10%);--enabled-focus-border: hsl(200, 25%, 63%);--enabled-focus-fill: hsl(200, 25%, 25%);--enabled-focus-background: white;--enabled-active-text: hsl(0, 0%, 0%);--enabled-active-lightText: hsl(0, 0%, 10%);--enabled-active-border: hsl(0, 0%, 63%);--enabled-active-fill: var(--accent-color);--enabled-active-background: white;--disabled-text: hsl(0, 0%, 40%);--disabled-text-light: hsl(0, 0%, 60%);--disabled-text-dark: hsl(0, 0%, 20%);--disabled-border: hsl(0, 0%, 82%);--disabled-fill: hsl(0, 0%, 82%);--disabled-background: hsl(0, 0%, 94%)}",Jc=`<?xml version="1.0" encoding="UTF-8"?>\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">\r
  <path fill="hsl(200, 100%, 41%)" d="m491.109,170.926c-89.722,0-162.715,82.261-162.715,183.377,0,124.258,113.791,137.671,162.715,137.671s162.715-13.413,162.715-137.671c0-101.116-72.993-183.377-162.715-183.377Z"/>\r
  <path fill="hsl(200, 100%, 41%)" d="m920.448,79.552C840.896,0,719.097,0,500,0S159.104,0,79.552,79.552C0,159.104,0,280.903,0,500s0,340.896,79.552,420.448c79.552,79.552,201.351,79.552,420.448,79.552s340.896,0,420.448-79.552c79.552-79.552,79.552-201.351,79.552-420.448s0-340.896-79.552-420.448Zm-146.744,112.456c0,2.761-2.239,5-5,5h-7.034c-.038,0-.074-.01-.112-.011-.004,0-.007.001-.01.001h-45.856c-1.075,0-2.087.506-2.731,1.366l-8.66,11.546c27.074,41.021,42.88,90.25,42.88,143.144,0,70.001-27.646,127.253-79.957,165.578-44.577,32.657-105.478,49.921-176.114,49.921-55.318,0-104.663-10.591-144.875-30.869-10.283,10.57-17.335,24.213-17.335,38.766,0,34.131,21.332,54.11,94.524,54.11,90.099,0,163.146-23.565,231.294-23.565,80.615,0,85.357,57.752,85.357,99.583,0,118.551-27.271,209.05-292.825,209.05-33.161,0-97.221-1.724-132.317-9.312-3.75-.811-6.015-4.609-5.018-8.314l20.862-78.928c.909-3.377,4.229-5.502,7.667-4.855,21.23,3.999,80.354,10.479,108.806,10.479,156.167,0,209.013,8.004,209.245-98.506-.071-11.553,3.771-19.614-12.673-19.614-61.646,0-130.08,16.099-239.25,16.099-126.868,0-158.866-87.434-158.866-144.64,0-26.761,14.174-60.59,39.162-86.528-32.729-36.272-49.828-83.42-49.828-138.455,0-142.651,114.875-258.706,256.071-258.706,59.47,0,114.268,20.59,157.783,55.082l12.693-16.924c7.611-10.15,19.559-16.123,32.245-16.123h67.717c.01,0,.019.003.029.003.032,0,.062-.009.094-.009h7.034c2.761,0,5,2.239,5,5v70.632Z"/>\r
</svg>`,_c=":root{--dark-gradient-background: linear-gradient(135deg, var(--blue-l15), var(--purple-l05));--global-focus-style: 1px dashed var(--purple-l50);--global-transition: all 80ms ease;--animate-fade-in-slide-down: .18s ease-in fade-slide-in;--animate-fade-in: .18s ease-in fade-in;--animate-fade-out: .18s ease-out fade-out;--animate-fade-update: .14s ease-in fade-in-update;--l1-shadow: 0px 0px 2px rgba(0, 0, 0, .1);--l1-shadow-down: 0px 2px 2px rgba(0, 0, 0, .1);--l2-shadow: 0px 0px 4px rgba(0, 0, 0, .2);--l2-shadow-upper-left: -1px -1px 4px rgba(0, 0, 0, .2);--l2-shadow-down: 0px 4px 4px rgba(0, 0, 0, .3);--l3-shadow: 0px 0px 6px rgba(0, 0, 0, .3);--l3-shadow-down: 0px 6px 6px rgba(0, 0, 0, .3)}@font-face{font-family:FiraGo;font-style:normal;font-weight:400;src:url(/app/assets/FiraGO-Regular-Gjg8N22e.woff2)}*{margin:0;padding:0;font-family:FiraGo,Tahoma,Verdana,sans-serif;font-size:14px;font-weight:400;text-align:left;box-sizing:border-box;transition:var(--global-transition)}html,body{background-color:var(--dark-gradient-background);height:100%;width:100%;min-height:100%;min-width:100%;overflow:hidden}::-webkit-scrollbar{width:8px;padding:1px;border-radius:4px;border:1px solid var(--gray-l90);background-color:var(--offWhite)}::-webkit-scrollbar-button{height:0px;background-color:transparent}::-webkit-scrollbar-track{width:8px}::-webkit-scrollbar-track-piece{background-color:transparent}::-webkit-scrollbar-thumb{margin:2px;background-color:var(--gray-l80);border-radius:4px}::-webkit-scrollbar-corner{display:none}::-webkit-resizer{display:block;border:2px outset var(--enabled-restingLight-background)}div,p,h1,h2,h3,table,td,label,button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}b,strong{font-weight:700}a,a:visited{background-color:transparent;border-radius:4px;color:var(--blue-l55);text-decoration:none}a:active{color:var(--blue-l40);background-color:#0099e61a}a:focus,a:hover{color:var(--blue-l65);text-decoration:underline;cursor:pointer}a[danger],a[danger]:visited{color:var(--darkRed)}a[danger]:hover,a[danger]:focus{color:var(--red)}p{display:block}span:disabled,span[disabled=disabled]{color:var(--disabled-text)}hr{border-style:solid;border-color:var(--gray-l85)}h1{margin-left:0;color:var(--gray-l55);font-size:2em;margin-bottom:8px;clear:right}h2{color:var(--gray-l45);font-size:1.6em}h3{color:var(--gray-l45);font-size:1.3em;margin-bottom:4px}h4{color:var(--gray-l45);font-size:1.2em;margin-bottom:4px}table{border-collapse:collapse}td{vertical-align:top}svg{overflow:visible}.number{font-family:monospace}label,label:focus,label:active{display:inline}label:hover{color:#000}input,textarea{border:none;padding:0 0 0 4px;height:24px;text-align:left;font-family:monospace;background-color:var(--enabled-restingLight-background);color:var(--enabled-restingLight-text);border:1px solid var(--enabled-restingLight-border);border-radius:4px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}input:hover,textarea:hover{background-color:var(--enabled-focus-background);color:var(--enabled-focus-text);border-color:var(--enabled-focus-border)}input:focus,textarea:focus{background-color:var(--enabled-focus-background);color:var(--enabled-focus-text);border-color:var(--enabled-focus-border)}textarea:hover::-webkit-resizer,textarea:focus::-webkit-resizer{display:block;border:2px outset var(--enabled-focus-background)}info-bubble{width:12px}input:focus,button:focus,textarea:focus,info-bubble:focus,glyph-tile:focus{outline:var(--global-focus-style);outline-offset:-1px}input[type=image]{height:auto;width:auto;background-color:transparent;border-width:0px}input[type=number]{text-align:right;width:70px;border:1px solid white;border:1px solid var(--gray-l90);cursor:default}input[type=text][disabled=disabled],input[type=number][disabled=disabled]{background-color:var(--gray-l90);border:1px solid var(--gray-l90);color:var(--gray-l65)}input[type=checkbox]{accent-color:var(--accent-color);opacity:.75}ul li{margin-left:20px;margin-top:10px}canvas:focus,canvas:focus-visible,edit-canvas:focus,edit-canvas:focus-visible{border:0;border-image:none;outline:0}@keyframes fade-slide-in{0%{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}@keyframes fade-in-update{0%{opacity:.6}to{opacity:1}}@keyframes fade-in{0%{opacity:0;transform:scale(1.01)}to{opacity:1;transform:scale(1)}}@keyframes fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.99)}}.span-all-columns{grid-column:-1 / 1!important}button,button:active,button:hover,button:focus{text-align:center;padding:4px 8px;margin:2px 0;cursor:pointer;border-radius:4px;border:1px solid var(--gray-l90);background-color:var(--gray-l90);color:var(--enabled-text);box-shadow:var(--l1-shadow)}button:hover{color:var(--enabled-focus-text);border-color:var(--blue-l85);box-shadow:var(--l1-shadow)}button[disabled],button[disabled]:active,button[disabled]:hover,button[disabled]:focus{background-color:var(--gray-l95);border-color:var(--gray-l95);color:var(--disabled-text);cursor:default}.button__call-to-action,.button__call-to-action:hover,.button__call-to-action:active,.button__call-to-action:focus{background-color:var(--blue-l60);color:var(--gray-l95)}.button__call-to-action:hover{color:#fff}",Zc="dialog{z-index:1000}#toast,#error{display:none;width:300px;position:absolute;left:520px;margin:5px 0;background-color:var(--green-l90);color:var(--green-l10);padding:4px 8px;z-index:2010;text-align:center;border:1px solid var(--green-l60);border-radius:4px;box-shadow:var(--l3-shadow-down);animation:var(--animate-fade-in-slide-down)}#toast[fancy]{background-color:var(--purple-l30);background:linear-gradient(135deg,var(--purple-l25),var(--purple-l10));color:var(--purple-l95);font-size:1.2em;border-color:var(--purple-l30);padding:10px}#toast a{color:var(--green-l10)}#notation{display:none;position:absolute;right:900px;top:400px;width:auto;height:auto;padding:0;z-index:2020;background-color:#e5eaef;border:5px solid rgb(229,234,239);border-radius:5px 5px 0;box-shadow:var(--l2-shadow-upper-left);animation:var(--animate-fade-in)}.notation__path-add-point{display:grid;grid-template-columns:20px min-content min-content;margin:0 5px 2px}.notation__path-add-point span{font-family:monospace}.notation__path-add-point label{font-family:monospace;color:var(--enabled-restingLight-lightText)}#error{margin-top:10px;border-color:var(--red);color:var(--darkRed);background-color:var(--lightRed);display:grid;grid-template-rows:20px 1fr;padding:10px 12px 12px;row-gap:10px}#error hr{border-color:var(--red);margin:10px 0}.error__header{display:grid;grid-template-columns:1fr 20px}.error__header h3{color:var(--darkRed)}.error__header button{background-color:var(--darkRed);border-color:var(--darkRed);color:var(--lightRed);width:20px;height:20px;line-height:20px;padding:0;margin:0}.error__header button:hover{color:#fff;border-color:var(--red)}#context-menu{display:grid;grid-template-columns:24px 1fr min-content min-content;column-gap:0px;row-gap:5px;width:fit-content;overflow-y:auto;padding:10px;position:absolute;z-index:2030;background-color:var(--enabled-resting-background);border:1px solid var(--enabled-focus-border);border-radius:0 4px 4px;box-shadow:var(--l3-shadow-down);animation:var(--animate-fade-in-slide-down)}#context-menu:focus{outline:0}.context-menu-row{display:contents;padding:5px 10px 5px 5px;height:24px;border-radius:4px}.context-menu-row:hover>span,.context-menu-row:hover>.row-notes,.context-menu-row:hover>.row-notes span,.context-menu-row:hover>.row-notes code{background-color:var(--enabled-focus-background);color:var(--blue-l45);cursor:pointer}.context-menu-row:focus{outline:var(--global-focus-style)}.context-menu-row[disabled]{opacity:.5;color:var(--disabled-text-light)}.context-menu-row[disabled]:hover>span,.context-menu-row[disabled]:hover>.row-notes,.context-menu-row[disabled]:hover>.row-notes span,.context-menu-row[disabled]:hover>.row-notes code{color:var(--disabled-text-light);cursor:default;background-color:transparent}.context-menu-row[disabled] svg g{fill:var(--disabled-text-light)!important}#context-menu .spanAll h2{font-size:.8em;color:var(--enabled-restingLight-lightText);font-family:monospace;padding:0 20px 0 0}.context-menu-row hr,.context-menu-row hr:hover,.context-menu-row hr:active,.context-menu-row hr:focus{margin:8px 0;grid-column:1 / -1;border-width:0px 0px 1px 0px;border-color:var(--gray-l90)}.context-menu-row .row-icon{height:24px;width:24px}.context-menu-row .row-icon svg{height:20px;width:20px;margin:2px}.context-menu-row .row-name{line-height:22px;height:24px;padding:2px 20px 0 10px;display:flex}.context-menu-row .row-name svg{margin-right:10px}.context-menu-row .row-notes{background-color:transparent;width:max-content;height:24px;opacity:.8;display:contents;margin-left:20px}.context-menu-row .row-notes code{height:20px;margin:2px;font-size:.8em}.context-menu-row .row-notes span{grid-column:span 2;font-size:.8em;line-height:24px;padding:0 0 0 4px;height:24px;margin:0}#modal-dialog{display:block;position:absolute;text-align:center;border-width:0px;padding:0px auto;left:0;top:0;width:100vw;height:100vh;z-index:2000;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);background-color:#ffffffbf;animation:var(--animate-fade-in)}.modal-dialog__content{display:grid;grid-template-rows:30px 1fr;width:clamp(500px,66vw,1000px);max-height:calc(100vh - 80px);overflow-y:hidden;margin:40px auto;text-align:left;background-color:var(--enabled-focus-background);border:1px solid var(--blue-l60);border-radius:8px;box-shadow:var(--l3-shadow-down);animation:var(--animate-fade-in-slide-down)}.modal-dialog__header{margin:4px;height:20px;display:grid;grid-template-columns:1fr 20px}.modal-dialog__body{display:block;max-height:calc(100vh - 120px);overflow-y:auto;padding:0 20px 20px}.modal-dialog__close-button{background-color:var(--blue-l95);border-color:var(--blue-l85);color:var(--blue-l50);text-align:center;width:20px;height:20px;line-height:14px;font-size:1.2em;padding:0 0 2px;margin:0}.modal-dialog__close-button:hover{background-color:var(--blue-l90);color:var(--blue-l30);border-color:var(--blue-l70);cursor:pointer;padding:0 0 2px;margin:0}.modal-dialog__close-button:active,.modal-dialog__close-button:focus{background-color:var(--blue-l90);color:var(--blue-l50);cursor:pointer;padding:0;margin:0}.modal-dialog__glyph-chooser-scroll-area{height:100%;padding:10px 5px 5px 10px;background-color:var(--offWhite);margin-bottom:10px}",zc="";class g0{constructor(e={}){this.textBlocks=[],this.lineBreakers=e.lineBreakers||[" "," "," "],this.data=[],this.pixelHeight=0,this.canvasMaxes=e.canvasMaxes,this.ctx=e.ctx,this.project=e.project||B(),this.options=new Hr(e.options),this.hasDrawableCharacters=!1,this.drawPageExtras=e.drawPageExtras||!1,this.drawLineExtras=e.drawLineExtras||!1,this.drawCharacterExtras=e.drawCharacterExtras||!1,this.drawCharacter=e.drawCharacter||!1,this.roundUp=e.roundUp||!1,this.generateData()}get canvasMaxes(){return this._canvasMaxes}set canvasMaxes(e={}){this._canvasMaxes=new qe({xMin:e.xMin||0,xMax:e.xMax||1/0,yMin:e.yMin||0,yMax:e.yMax||1/0})}draw({showPageExtras:e=!1,showLineExtras:t=!1,showCharacterExtras:n=!1,showCharacter:a=!1}={}){if(this.drawPageExtras&&e&&this.drawPageExtras(this.ctx,this),this.options.text==="")return;let i=-1;this.drawLineExtras&&t&&this.iterator(o=>{o.lineNumber!==i&&(this.drawLineExtras(this.ctx,o,this),i=o.lineNumber)}),this.drawCharacterExtras&&n&&this.iterator(o=>{this.drawCharacterExtras(this.ctx,o,this.roundUp)}),this.drawCharacter&&a&&this.iterator(o=>{this.drawCharacter(this.ctx,o)})}iterator(e){for(let t=0;t<this.data.length;t++)for(let n=0;n<this.data[t].length;n++)e(this.data[t][n],this)}drawCanvasMaxes(e){e.fillStyle="transparent",e.strokeStyle="lime",e.lineWidth=1,e.strokeRect(this.canvasMaxes.xMin,this.canvasMaxes.yMin,this.canvasMaxes.width,this.canvasMaxes.height)}generateData(){var y;let e,t,n,a,i=0,o,x,A;for(this.data=[],this.textBlocks=this.options.text.split(`
`),n=0;n<this.textBlocks.length;n++)for(e=o1(this.textBlocks[n].split(""),this.project),this.data[n]=[],a=0;a<e.length;a++)t=e[a],t.startsWith("liga-")?(A=this.project.ligatures[t],t=A.chars):A=this.project.getItem(`glyph-${mr(t)}`),(y=A==null?void 0:A.shapes)!=null&&y.length&&(this.hasDrawableCharacters=!0),o=A?A.advanceWidth:this.project.defaultAdvanceWidth,x=vr(t,e[a+1]),i+=o+x,this.data[n][a]={char:t,item:A,view:!1,widths:{advance:o,kern:x,aggregate:i},isLineBreaker:this.lineBreakers.indexOf(t)>-1,isVisible:!1,lineNumber:!1};let E,l,c,L=0,T=0,I=0,d=!1;const p=this.options.fontSize/this.project.totalVertical,S=this.project.settings.font.ascent,u={lineHeight:this.project.totalVertical+this.options.lineGap/p,width:this.canvasMaxes.width/p,yMax:this.canvasMaxes.yMax/p,yMin:this.canvasMaxes.yMin/p,xMin:this.canvasMaxes.xMin/p};for(this.options.pageHeight==="auto"&&(u.yMax=Number.Infinity),T=u.xMin,I=u.yMin+S,n=0;n<this.data.length;n++){for(e=this.data[n],a=0;a<e.length;a++){if(E=e[a],E.view===!1){if(d&&Number.isFinite(u.width)){if(l=Xc(e,a),c=l.widths.aggregate+l.widths.advance-E.widths.aggregate,T+c>u.width){if(L++,I+u.lineHeight>u.yMax)return;T=u.xMin,I=u.yMin+S+L*u.lineHeight}d=!1}E.isVisible=!0,E.lineNumber=L,E.view={dx:T*p,dy:I*p,dz:p},T+=E.widths.advance+E.widths.kern}E.isLineBreaker&&(d=!0)}if(L++,I+u.lineHeight>u.yMax)return;T=u.xMin,I=u.yMin+S+L*u.lineHeight,this.pixelHeight=L*u.lineHeight*p}}}function Xc(r,e){for(let n=e;n<r.length;n++)if(r[n].isLineBreaker)return r[n];return r[r.length-1]}function vr(r,e){if(!r||!e)return 0;r=Zr(r).join(""),e=Zr(e).join("");let t=B().kerning,n,a,i;for(let o of Object.keys(t))for(let x=0;x<t[o].leftGroup.length;x++)if(n=t[o].leftGroup[x],Zr(n)[0]===r){for(let A=0;A<t[o].rightGroup.length;A++)if(a=t[o].rightGroup[A],Zr(a)[0]===e)return i=t[o].value*-1,i}return 0}function o1(r,e){e=e||B();const t=e.sortedLigatures;let n,a;for(let i=0;i<r.length;i++)for(let o=0;o<t.length;o++)n=t[o].chars,a=r.slice(i,i+n.length).join(""),a===n&&r.splice(i,n.length,t[o].id);return r}class Na extends HTMLElement{constructor(e={}){super(),this.textBlockOptions=new Hr,Object.keys(e).forEach(t=>{t!=="_text"?(t!=="width"&&t!=="height"&&this.setAttribute(Wo(t),e[t]),this.textBlockOptions[t]&&(this.textBlockOptions[t]=e[t])):(this.textBlockOptions.text=e._text,this.setAttribute("text",this.textBlockOptions.text))}),this.isSetUp=!1}connectedCallback(){const e=this.attachShadow({mode:"open"}),t=s({tag:"style",innerHTML:zc});e.appendChild(t),this.canvas=s({tag:"canvas",id:"mainDisplayCanvas"}),e.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.drawCrisp=!1,this.isSetUp=!0,this.resizeAndRedraw()}resizeAndRedraw(){this.isSetUp&&(this.updateTextBlock(),this.updateCanvasSize(),this.redraw())}updateCanvasSize(){var o;const e=(o=this==null?void 0:this.parentElement)==null?void 0:o.getClientRects()[0],t=this.textBlockOptions.pageHeight,n=this.textBlockOptions.pageWidth;let a=1e3,i=1e3;t==="auto"?(a=this.textBlock.pixelHeight,a+=this.textBlockOptions.pagePadding):t==="fit"?a=e.height:isNaN(parseInt(t))||(a=parseInt(t)),n==="fit"?i=e.width:isNaN(parseInt(n))||(i=parseInt(n)),this.widthAdjustment&&(i+=this.widthAdjustment),this.height=a,this.width=i,this.canvas.height=a,this.canvas.width=i}updateTextBlock(){let e=this.calculatePageMaxes(),t=!1,n=parseInt(this.getAttribute("project-editor"));isNaN(n)||(t=Le().projectEditors[n].project),this.textBlock=new g0({options:this.textBlockOptions,canvasMaxes:e,ctx:this.ctx,drawPageExtras:this.drawDisplayPageExtras,drawLineExtras:this.drawDisplayLineExtras,drawCharacterExtras:this.drawDisplayCharacterExtras,drawCharacter:this.drawDisplayCharacter,project:t})}calculatePageMaxes(){var o;const e=(o=this==null?void 0:this.parentElement)==null?void 0:o.getClientRects()[0],t=this.textBlockOptions.pagePadding,n=this.textBlockOptions.pageHeight,a=this.textBlockOptions.pageWidth,i={xMin:t,yMin:t,xMax:1e3,yMax:1e3};return n==="auto"?i.yMax=1/0:n==="fit"?i.yMax=e.height-t:isNaN(parseInt(n))||(i.yMax=parseInt(n)),a==="fit"?i.xMax=e.width-t:isNaN(parseInt(a))||(i.xMax=parseInt(a)),this.widthAdjustment&&(i.xMax+=this.widthAdjustment),i}static get observedAttributes(){return["text","font-size","line-gap","page-padding","show-page-extras","show-line-extras","show-character-extras","show-placeholder-message","width-adjustment"]}attributeChangedCallback(e,t,n){e==="text"&&(this.textBlockOptions.text=n,this.resizeAndRedraw()),e==="font-size"&&(this.textBlockOptions.fontSize=Math.max(parseInt(n),1),this.resizeAndRedraw()),e==="line-gap"&&(this.textBlockOptions.lineGap=Math.max(parseInt(n),0),this.resizeAndRedraw()),e==="page-padding"&&(this.textBlockOptions.pagePadding=Math.max(parseInt(n),0),this.resizeAndRedraw()),e==="show-page-extras"&&(this.textBlockOptions.showPageExtras=n==="true",this.redraw()),e==="show-line-extras"&&(this.textBlockOptions.showLineExtras=n==="true",this.redraw()),e==="show-character-extras"&&(this.textBlockOptions.showCharacterExtras=n==="true",this.redraw()),e==="show-placeholder-message"&&(this.textBlockOptions.showPlaceholderMessage=n==="true",this.redraw()),e==="width-adjustment"&&(this.widthAdjustment=parseInt(n),this.resizeAndRedraw())}redraw(){if(this.isSetUp){if(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.textBlock.hasDrawableCharacters)this.textBlock.draw({showPageExtras:this.textBlockOptions.showPageExtras,showLineExtras:this.textBlockOptions.showLineExtras,showCharacterExtras:this.textBlockOptions.showCharacterExtras,showCharacter:!0});else if(this.textBlockOptions.showPlaceholderMessage){this.ctx.fillStyle=br.disabled.text,this.ctx.font="14px sans-serif",this.ctx.textBaseline="middle";let e=this.textBlock.canvasMaxes.xMin,t=this.height/2;this.ctx.fillText("Project preview text will be shown here.",e,t)}}}iterator(e){const t=this.textBlock.data;for(let n=0;n<t.length;n++)for(let a=0;a<t[n].length;a++)e(t[n][a],this)}drawDisplayPageExtras(e,t){const n=t.canvasMaxes,a=n.yMin||0,i=n.yMax===1/0?t.pixelHeight:n.yMax,o=n.xMin||0,A=(n.xMax||1e3)-o,E=i-a;e.fillStyle="transparent",e.strokeStyle=oe.gray.l90,e.lineWidth=1,e.strokeRect(ue(o),ue(a),g(A),g(E))}drawDisplayLineExtras(e,t,n){e.strokeStyle=oe.gray.l85,e.beginPath(),e.moveTo(n.canvasMaxes.xMin,t.view.dy),e.lineTo(n.canvasMaxes.xMax,t.view.dy),e.closePath(),e.stroke()}drawDisplayCharacterExtras(e,t){const n=B(),a=n.settings.font,i=t.view.dz;let o=t.widths.advance*i,x=n.totalVertical*i,A=t.view.dy-a.ascent*i,E=t.view.dx;const l=t.widths.kern*i*-1;t.widths.kern&&(e.fillStyle="orange",e.globalAlpha=.3,e.fillRect(E+o-l,A,l,x),e.globalAlpha=1),e.fillStyle="transparent",e.strokeStyle=oe.blue.l85,e.lineWidth=1,this.drawCrisp&&(E=ue(E),A=ue(A),o=g(o),x=g(x)),e.strokeRect(E,A,o,x)}drawDisplayCharacter(e,t){const n=t.item,a=ze(t.view);n&&(e.fillStyle=br.enabled.resting.text,e.strokeStyle="transparent",Xt(n,e,a,1,!0))}}const jc=`<?xml version="1.0" encoding="UTF-8"?>\r
<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 147 29">\r
	<g id="g">\r
		<path\r
			d="m13,6l-1,2c-1.15-.9-3-2-5-2C3,6,0,9,0,13c0,2,.45,3.04,1.32,4-.66.69-1.32,1.35-1.32,2.1,0,1.51,1.13,3.94,4.48,3.94,4.52,0,5.52-1,6.52-1,.43,0,1,.69,1,1,0,3-3,3-6,3-.75,0-2,0-3-1-.1-.02-1.1,2-1,2,1,1,3,1,4,1,7.01,0,8-2.86,8-6,0-1,0-2-1-2-4,0-5.64,1-8.02,1-1.93,0-2.98-1.08-2.98-2,0-.39.67-.75.94-1.03,1.1.54,2.6,1.01,4.1,1.01,4,0,7-2,7-6,0-2-.28-2.9-1-4l1-1h2v-2h-3Zm-6,11c-2,0-5-1-5-4s2.63-5,5-5,5,2,5,5-2,4-5,4Z" />\r
	</g>\r
	<path id="l" d="m20,19h-1V1c0-.66-.34-1-1-1h-2v2h1v17h-1v2h4v-2Z" />\r
	<g id="y">\r
		<path\r
			d="m33,6h-2v2h1v9c-.72,1.47-2.55,2-4,2-.55,0-4,.4-4-3V7c0-.66-.34-1-1-1h-3v2h2v8c0,3.14,1.48,5,6,5,1.65,0,2.99-.37,4-1v2c0,3-1.83,4-6,4-2,0-3-1-3-1l-1,2c1,1,3,1,4,1,7.1,0,8-3,8-6V7c0-.66-.34-1-1-1Z" />\r
	</g>\r
	<path id="p"\r
		d="m35,25v2h2c.65,0,1-.35,1-1v-6s2,1,4,1c3,0,6-2,6-5v-5c0-3-2-5-6-5-2,0-4,1-4,1,0,0-.35-1-1-1h-2v2h1v17h-1Zm7-17c2,0,4,1,4,3v5c0,2-1.73,3-4,3s-4-1-4-3v-5c0-2,2-3,4-3Z" />\r
	<path id="h"\r
		d="m63,19h-1s0-7,0-7c0-4-1.64-6-6-6-1.47,0-3.14.42-4,1V1c0-.66-.35-1-1-1h-2v2h1v17h-1v2h4v-2h-1v-9c1-1.21,3-2,4-2s4,0,4,4v7h-1v2h4v-2Z" />\r
	<path id="r"\r
		d="m75,7s-1-1-4-1c-2,0-3,1-4,2v-1c0-.66-.33-1-1-1h-2v2h1v11h-1v2h4v-2h-1v-8c.66-1.66,2-3,4-3,1,0,2,0,3,1l1-2Z" />\r
	<path id="s"\r
		d="m85,13c-2,0-2-2-2-3s2-2,4-2c1.68,0,3,0,4,1l1-2c-1-1-2.21-1-4-1-7,0-7,3.22-7,4,0,2,0,5,3,5,4,0,7-1,7,1,0,2.78-1.28,3-5,3-1,0-3,0-4-1-.1-0-1.1,2-1,2,1,1,3,1,5,1,6.37,0,7-1.9,7-5,0-5-5.63-3-8-3Z" />\r
	<path id="t" d="m100,6h-3V1h-2v5h-2v2h2v12c0,.72.27,1,1,1h3v-2h-2v-11h3v-2Z" />\r
	<path id="u"\r
		d="m114,6h-2c-.65,0-1,.35-1,1v10c0,2-3.23,2-4,2-1,0-4-.53-4-4v-7h1v-2h-2c-.65,0-1,.34-1,1v8c.11,3.13,1.77,6,6,6,1.53,0,4-1,4-1,0,0,.51,1,1,1h2v-2h-1v-11h1v-2Z" />\r
	<path id="d"\r
		d="m128,2V0h-2c-.65,0-1,.35-1,1v6s-2-1-4-1c-3,0-6,2-6,5v5c0,3,2,5,6,5,2,0,4-1,4-1,0,0,.35,1,1,1h2v-2h-1V2h1Zm-7,17c-2,0-4-1-4-3v-5c0-2,1.73-3,4-3s4,1,4,3v5c0,2-2,3-4,3Z" />\r
	<path id="i" d="m133,19h-1V7c0-.66-.35-1-1-1h-2v2h1v11h-1v2h4v-2Z" />\r
	<path id="i-2" d="m131,4.5c2,0,1.25-1.5,1.25-1.5,0,0-.35-1-1.25-1s-1.25,1-1.25,1c0,0-.75,1.5,1.25,1.5Z" />\r
	<path id="o"\r
		d="m146,12c0-4-3-6-6-6s-6,2-6,6v4c0,3,3,5,6,5s6-2,6-5v-4Zm-6,7c-2,0-4-1-4-3v-4c0-2,2-4,4-4s4,2,4,4v4c0,2-2,3-4,3Z" />\r
</svg>`;async function ei(r,e,t=!1){let n=h().loadedFileHandle;n&&r==="gs2"?(t&&(n=!1),await qc(r,e,n)):Qc(r,e)}function Qc(r,e){const t="text/plain;charset=utf-8",n=new Blob([e],{type:t,endings:"native"});let a=xa(r,!0);try{window.navigator.msSaveBlob(n,a)}catch{const o=document.createElement("a");window.URL=window.URL||window.webkitURL,o.href=window.URL.createObjectURL(n),o.download=a;const x=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});o.dispatchEvent(x)}}async function qc(r,e,t=!1){const a={suggestedName:xa(r),types:[{description:"Glyphr Studio Project file",accept:{"application/json":[".gs2"]}}]};t||(t=await window.showSaveFilePicker(a));const i=await t.createWritable();await i.write(e),await i.close();const o=h();o.loadedFileHandle=t}function xa(r,e=!1){let n=B().settings.project.name;return r==="gs2"?(n+=" - Glyphr Studio Project",e&&(n+=` - ${y0()}`)):r==="svg"&&(n+=` - SVG Font - ${y0()}`),n+=`.${r}`,n}function y0(){const r=new Date,e=r.getFullYear(),t=r.getMonth()+1,n=r.getDate(),a=r.getHours(),i=(r.getMinutes()<10?"0":"")+r.getMinutes(),o=(r.getSeconds()<10?"0":"")+r.getSeconds();return`${e}.${t}.${n}-${a}.${i}.${o}`}function A1(){const r=B(),e=Le(),t=r.settings.font,n=t.family,a=n.replace(/ /g,"_");let o=y0().split("-");o[0]=o[0].replace(/\./g,"-"),o[1]=o[1].replace(/\./g,":"),o=o.join(" at ");let x=`<?xml version="1.0"?>
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<metadata>
		Project: ${r.settings.project.name}
		Font exported on ${o}
		Created with Glyphr Studio - the free, web-based font editor
		Version: ${e.version}
		Find out more at www.glyphrstudio.com
	</metadata>
	<defs>
		<font id="${a}" horiz-adv-x="${t.upm}">
			<font-face ${$c()}
			>
				<font-face-src>
					<font-face-name name="${n}" />
				</font-face-src>
			</font-face>
${rT()}
${tT()}
${nT()}
		</font>
	</defs>

	<text x="100" y="150" style="font-size:48px;" font-family="${n}">
		${n}
	</text>
</svg>
`;ei("svg",x),U("Exported SVG Font File")}function $c(){const e=B().settings.font,t=eT(),n="		";let a="";return a+=`
		${n}font-family="${e.family}"
		${n}font-style="${e.style}"
		${n}panose-1="${e.panose}"
		${n}units-per-em="${e.upm}"
		${n}ascent="${e.ascent}"
		${n}cap-height="${e.capHeight}"
		${n}x-height="${e.xHeight}"
		${n}descent="${e.descent}"
		${n}bbox="${t.maxes.xMin}, ${t.maxes.yMin}, ${t.maxes.xMax}, ${t.maxes.yMax}"
		${n}unicode-range="U+20-${t.maxGlyph}"
		${n}font-variant="${e.variant}"
		${n}font-weight="${e.weight}"
		${n}font-stretch="${e.stretch}"
		${n}stemv="${e.stemv}"
		${n}stemh="${e.stemh}"
		${n}slope="${e.slope}"
		${n}underline-position="${e.underlinePosition}"
		${n}underline-thickness="${e.underlineThickness}"
		${n}strikethrough-position="${e.strikethroughPosition}"
		${n}strikethrough-thickness="${e.strikethroughThickness}"
		${n}overline-position="${e.overlinePosition}"
		${n}overline-thickness="${e.overlineThickness}"
	`,a}function eT(){const r=B(),e={maxGlyph:32,maxes:new qe};let t;r.settings.project.characterRanges.forEach(a=>{if(a.enabled){for(let i=a.begin;i<a.end;i++)t=r.getItem(`glyph-${ie(i)}`),t&&(e.maxes=on([e.maxes,t.maxes]));e.maxGlyph=Math.max(e.maxGlyph,a.end)}});for(const a of Object.keys(r.ligatures))e.maxes=on([e.maxes,r.ligatures[a]]);return e}function rT(){const r=B();let e=r.getItem("glyph-0x0");if(e)return N0(e,"glyph-0x0","missing-glyph");const t=r.settings.font.ascent,n=g(t*.618),a=g(t/100);let i=`
			<missing-glyph horiz-adv-x="${n}" `;return i+=`d="M0,0 v${t} h${n} v-${t} h-${n}z `,i+=`M${a},${a} v${t-a*2} h${n-a*2} `,i+=`v - ${t-a*2} h - ${n-a*2} z"/>
`,i}function tT(){const r=B(),e=[],t=[];r.settings.project.characterRanges.forEach(a=>{a.enabled&&a.getMemberIDs().forEach(i=>{if(e.indexOf(i)===-1){const o=r.getItem(`glyph-${i}`);o&&(t.push({xg:o,xc:i}),e.push(i))}})});let n="";if(n+=`			<!-- Glyphs -->
`,t.forEach(a=>{n+=N0(a.xg,a.xc)}),r.settings.app.exportLigatures){n+=`
`,n+=`			<!-- Ligatures -->
`;for(const a of Object.keys(r.ligatures))n+=N0(r.ligatures[a],a)}return n}function N0(r,e,t="glyph"){if(!r.shapes.length&&r.advanceWidth<=0)return console.warn(`Glyph ${e} not exported: No paths or advance width.`),"";if(!e)return console.warn(`Glyph ${e} not exported: Bad ID`),"";if(e==="glyph-0x0"&&t==="glyph")return"";let n=r.svgPathData;n=n||"M0,0Z";let a=ko(r.chars),i="			<";return i+=t,t==="missing-glyph"?(i+=` horiz-adv-x="${r.advanceWidth}" `,i+=`d="${n}" />
`):(i+=` glyph-name="${r.name.replace(/ /g,"_")}" `,i+=`unicode="${a}" `,i+=`horiz-adv-x="${r.advanceWidth}" `,i+=`d="${n}" />
`),i}function nT(){const r=B();if(!r.settings.app.exportKerning)return"";const e=r.kerning;let t=Object.keys(e);if(!t.length)return"";let n=`			<!-- Kern Pairs -->
`;for(const a of t)for(let i=0;i<e[a].leftGroup.length;i++)for(let o=0;o<e[a].rightGroup.length;o++)n+="			<hkern ",n+=`u1="${Ci(e[a].leftGroup[i])}" `,n+=`u2="${Ci(e[a].rightGroup[o])}" `,n+=`k="${e[a].value}" />
`;return n}const x1=`<?xml version="1.0" encoding="utf-8"?>\r
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"\r
	y="0px" viewBox="0 0 2661 1650" style="enable-background:new 0 0 2651 1640;" xml:space="preserve">\r
	<defs>\r
		<linearGradient id="logoGradient">\r
			<stop offset="0%" stop-color="var(--blue-l60)" />\r
			<stop offset="100%" stop-color="var(--purple-l50)" />\r
		</linearGradient>\r
	</defs>\r
	<path d="M500.77,240.66h-3.93h-6.56h-60.13c-11.89,0-23.1,5.6-30.23,15.12l-11.9,15.87C347.22,239.3,295.84,220,240.08,220\r
	C107.7,220,0,328.81,0,462.55c0,51.6,16.03,95.8,46.72,129.81C23.29,616.68,10,648.4,10,673.49c0,53.63,30,135.61,148.95,135.61\r
	c102.35,0,161.84-29.12,219.64-29.12c15.42,0,11.82,7.56,11.88,18.39c-0.22,99.86-45.09,107.16-191.5,107.16\r
	c-26.68,0-82.11-4.52-102.01-8.27c-3.22-0.61-6.34,1.39-7.19,4.55L70.2,973.47c-0.94,3.47,1.19,7.03,4.7,7.79\r
	c32.9,7.11,92.96,8.73,124.05,8.73c248.97,0,274.54-98.88,274.54-210.02c0-39.22-4.45-93.37-80.03-93.37\r
	c-63.89,0-132.38,36.12-216.85,36.12C108,722.73,88,704,88,672c0-13.64,6.61-26.44,16.25-36.35c37.7,19.01,83.97,28.94,135.83,28.94\r
	c66.22,0,123.32-16.19,165.12-46.8c49.04-35.93,74.96-89.61,74.96-155.24c0-49.59-14.82-95.75-40.2-134.21l9.08-12.11h47.79v-0.02\r
	h3.93c2.76,0,5-2.24,5-5v-65.57C505.77,242.9,503.53,240.66,500.77,240.66z M240.08,592.8c-45.87,0-152.56-12.58-152.56-129.07\r
	c0-94.8,68.44-171.93,152.56-171.93s152.56,77.12,152.56,171.93C392.64,580.22,285.95,592.8,240.08,592.8z" />\r
	<path d="M1131,241h-74h-2h-2c-2.76,0-5,2.24-5,5v74c0,2.76,2.24,5,5,5h2h2h32v294.5c-25.36,51.94-93.81,70.5-145,70.5\r
	c-19.59,0-149-6.19-149-126V283c0-23.2-18.8-42-42-42h-74h-2h-2c-2.76,0-5,2.24-5,5v74c0,2.76,2.24,5,5,5h2h2h37v239\r
	c0,110.81,68.5,206,228,206c58.34,0,105.27-13.01,141.09-35.38c0,23.82,0,47.13,0,51.92c0,89.46-46.98,116.23-194.07,116.23\r
	c-27.54,0-77.92-2.77-100.32-6.01c-6.57-0.95-10.59-0.76-12.75,8.05l-0.01,0.04l-0.01,0.04l-17.08,62.78\r
	c-1.74,7.34-0.82,11.67,8.36,13.73C803.11,989,877.33,990,891.02,990c250.21,0,278.58-120.83,281.63-200h0.35V283\r
	C1173,259.8,1154.2,241,1131,241z" />\r
	<path\r
		d="M671,675h-2v0h-39V43c0-23.2-18.8-42-42-42h-79h-2h-2c-2.76,0-5,2.24-5,5v74c0,2.76,2.24,5,5,5h2h2h37v590h-39v0h-2\r
	c-2.76,0-5,2.24-5,5v74c0,2.76,2.24,5,5,5h4c0,0,0,0,0,0H667c0,0,0,0,0,0h4c2.76,0,5-2.24,5-5v-74C676,677.24,673.76,675,671,675z" />\r
	<path d="M2647,250l-2.59-0.83l-0.03,0.01C2612.9,236.87,2575.85,230,2533.5,230c-71.87,0-121.1,25.18-153.5,60.35V283\r
	c0-23.2-18.8-42-42-42h-79h-2h-2c-2.76,0-5,2.24-5,5v74c0,2.76,2.24,5,5,5h2h2h37v240v111h-27v0h-2c-2.76,0-5,2.24-5,5v74\r
	c0,2.76,2.24,5,5,5h4c0,0,0,0,0,0H2417c0,0,0,0,0,0h4c2.76,0,5-2.24,5-5v-74c0-2.76-2.24-5-5-5h-2v0h-39V565V404.42\r
	c22.85-59.07,86.11-84.7,153.5-84.7c8.65,0,39.65,0.05,71.5,10.28c7,2,10,3,14-4l30-65C2652,255,2651,252,2647,250z" />\r
	<path d="M2238,676h-2v0h-26.25V436c0.08,0,0.17,0,0.25,0c0-114.81-73.5-206-228-206c-52.27,0-92.52,12.37-123,32.91V42\r
	c0-23.2-18.8-42-42-42h-79h-2h-2c-2.76,0-5,2.24-5,5v74c0,2.76,2.24,5,5,5h2h2h37v592h-39v0h-2c-2.76,0-5,2.24-5,5v74\r
	c0,2.76,2.24,5,5,5h4c0,0,0,0,0,0H1884c0,0,0,0,0,0h4c2.76,0,5-2.24,5-5v-74c0-2.76-2.24-5-5-5h-2v0h-27V356.6\r
	c36.17-42.63,95.53-52.6,123-52.6c19.59,0,143,9.19,143,132h-0.25v240H2086v0h-2c-2.76,0-5,2.24-5,5v74c0,2.76,2.24,5,5,5h4\r
	c0,0,0,0,0,0H2234c0,0,0,0,0,0h4c2.76,0,5-2.24,5-5v-74C2243,678.24,2240.76,676,2238,676z" />\r
	<path\r
		d="M1721.99,460c-0.48-133.51-104.79-230-230.49-230c-59.98,0-114.17,25.6-154.5,66.12V282c0-23.2-18.8-42-42-42h-79h-2h-2\r
	c-2.76,0-5,2.24-5,5v74c0,2.76,2.24,5,5,5h2h2h37v383v161v32h-37h-2h-2c-2.76,0-5,2.24-5,5v74c0,2.76,2.24,5,5,5h2h2h79\r
	c23.2,0,42-18.8,42-42v-74V710.14c31.83,36.2,80.71,59.86,153,59.86c154.5,0,232-91.19,232-206V460H1721.99z M1638,558\r
	c0,122.81-111,134-148,134c-55,0-151-24.19-151-144v-90.89c0-90.09,72.44-153.88,152.5-153.88S1638,369.94,1638,466.61V558z" />\r
	<path d="M2573.61,1327.19c-0.53-125.82-98.88-228.33-223.74-228.33c-0.18,0-0.36,0.02-0.55,0.03c-0.18-0.01-0.36-0.03-0.55-0.03\r
	c-125.2,0-223.75,103.06-223.75,229.35h0.14v101.93h0c0.4,109.7,65.74,208.86,223.74,208.86c0.17,0,0.34-0.01,0.51-0.01\r
	c0.17,0.01,0.34,0.01,0.51,0.01c158,0,223.34-99.15,223.74-208.86h0v-102.95H2573.61z M2349.93,1556.4c-0.17,0-0.34,0.01-0.51,0.02\r
	c-0.17-0.01-0.34-0.02-0.51-0.02c-54.65,0-140.16-8.22-140.16-127.27v-101.93h-0.12c0.46-89.01,60.9-155.57,140.15-155.57\r
	c0.18,0,0.36-0.02,0.55-0.03c0.18,0.01,0.36,0.03,0.55,0.03c79.55,0,140.16,67.07,140.16,156.59h0.06v100.92\r
	C2490.09,1548.17,2404.58,1556.4,2349.93,1556.4z" />\r
	<path d="M2078.54,1544.64l-36.55,0v-393.85c0-23.2-18.81-42-42-42h-85.46c-1.41,0-2.55,1.14-2.55,2.55v78.91\r
	c0,1.41,1.14,2.55,2.55,2.55h43.46v351.85l-38.36,0c-1.41,0-2.55,1.14-2.55,2.55v78.91c0,1.41,1.14,2.55,2.55,2.55h158.92\r
	c1.41,0,2.55-1.14,2.55-2.55v-78.91C2081.09,1545.79,2079.95,1544.64,2078.54,1544.64z" />\r
	<path d="M1938.43,1023.83c10.2,7.48,24.14,11.43,40.31,11.43s30.11-3.95,40.31-11.43c11.97-8.77,18.3-21.88,18.3-37.9\r
	c0-32.65-26.29-59.22-58.61-59.22c-32.32,0-58.61,26.56-58.61,59.22C1920.13,1001.95,1926.46,1015.06,1938.43,1023.83z" />\r
	<path d="M758.32,1108.73l-93.19,0V924.51c0-2.41-1.95-4.36-4.36-4.36h-75.44c-2.41,0-4.36,1.95-4.36,4.36v184.22l-55.04,0\r
	c-1.41,0-2.55,1.14-2.55,2.55v79.06c0,1.41,1.14,2.55,2.55,2.55l55.04,0v389.27c0,25.65,20.79,46.44,46.44,46.44h92.82\r
	c0.1,0,0.2-0.01,0.31-0.02c0.19,0.05,0.39,0.08,0.6,0.08h8.93c1.41,0,2.55-1.14,2.55-2.55v-79.06c0-1.41-1.14-2.55-2.55-2.55h-8.93\r
	c-0.04,0-0.08,0.01-0.12,0.01c-0.26-0.05-0.52-0.08-0.79-0.08h-50.74c-2.41,0-4.36-1.95-4.36-4.36v-347.19l93.19,0\r
	c1.41,0,2.55-1.14,2.55-2.55v-79.06C760.86,1109.87,759.72,1108.73,758.32,1108.73z" />\r
	<path d="M406.88,1329.37c-63.01,0-110.27,20.43-193.58,20.43c-67.68,0-77.11-18.57-77.11-50.13c0-25.32-6.99-118.97,183.68-118.97\r
	c58.91,0,107.84,22.84,125.84,26.91c6.47,1.47,10.6,0.76,12.75-8.05l0.01-0.04l0.01-0.04l17.09-62.8\r
	c1.74-7.34,0.42-10.35-8.37-13.73c-17.07-6.58-84.34-24.41-147.33-24.41C62.33,1098.55,55,1289.15,55,1316.74\r
	c0,52.1,29.61,113.05,135.87,113.05c100.95,0,149.42-13.43,206.42-13.43c15.21,0,11.65,7.45,11.72,18.14\r
	c-0.22,98.49-53,120.98-183.77,120.98c-26.31,0-121.75-4.45-141.38-8.15c-3.18-0.6-6.25,1.37-7.09,4.49l-19.29,70.68\r
	c-0.92,3.43,1.17,6.94,4.64,7.69c32.45,7.02,132.46,8.61,163.12,8.61c224.04,0,260.57-107.71,260.57-217.33\r
	C485.81,1382.78,481.43,1329.37,406.88,1329.37z" />\r
	<path d="M1812.64,952.47h43.16c1.41,0,2.55-1.14,2.55-2.55v-78.37c0-1.41-1.14-2.55-2.55-2.55h-84.89\r
	c-23.05,0-41.73,18.68-41.73,41.73l-0.16,251.69c-40.11-39.23-93.43-63.89-152.31-63.89c-125.76,0-230.12,96.53-230.6,230.11h-0.01\r
	v104.05c0,114.86,77.54,206.1,232.11,206.1c70.76,0,119.09-22.66,150.98-57.55v5.63c0,23.05,18.68,41.73,41.73,41.73h84.89\r
	c1.41,0,2.55-1.14,2.55-2.55v-78.37c0-1.41-1.14-2.55-2.55-2.55h-43.16V952.47z M1578.2,1560.75c-37.02,0-148.07-11.2-148.07-134.06\r
	v-91.43c0-96.71,66.47-163.46,146.57-163.46c78.5,0,149.67,61.3,152.48,148.6v102.67\r
	C1725.82,1537.41,1632.23,1560.75,1578.2,1560.75z" />\r
	<path d="M1312.95,1189.64v-78.37c0-1.41-1.14-2.55-2.55-2.55h-84.89c-23.05,0-41.73,18.69-41.73,41.73l0.01,360.86\r
	c-36.11,42.98-95.75,53.01-123.3,53.01c-19.58,0-142.89-9.18-142.89-131.9h0.25l-0.91-239.97h43.47c1.41,0,2.55-1.14,2.55-2.55\r
	v-78.93c0-1.41-1.14-2.55-2.55-2.55h-85.57c-23.2,0-42.01,18.81-42.01,42.01l0.01,291.09c3.81,110.4,77.39,196.73,227.66,196.73\r
	c54.46,0,95.85-13.44,126.75-35.56c6.46,14.9,21.28,25.32,38.55,25.32l82.16-0.04c2.76,0,5-2.24,5-5v-74c0-2.76-2.24-5-5-5\r
	l-40.16,0.03l-0.55-351.84h43.16C1311.81,1192.19,1312.95,1191.05,1312.95,1189.64z" />\r
</svg>`;let kt,Kt;function ri(r,e=!1,t=h()){kt=r,Kt=!0;let n=s({tag:"div",className:"item-chooser__wrapper"}),a=s({tag:"div",className:"item-chooser__header"});a.appendChild(iT(t)),n.appendChild(a);let i=e||t.nav.page;return i==="Ligatures"?n.appendChild(Da(t)):i==="Components"?n.appendChild(ma(t)):n.appendChild(ti(t)),n}function aT(r,e){kt=e,Kt=!0;let t=s({tag:"div",className:"item-chooser__wrapper"});if(r==="Ligatures")t.appendChild(Da()),t.appendChild(s({tag:"fancy-button",innerHTML:"Create new ligature",onClick:ox}));else if(r==="Components")t.appendChild(ma()),t.appendChild(s({tag:"fancy-button",innerHTML:"Create new component",onClick:b1}));else if(r==="Kerning")t.appendChild(l1()),t.appendChild(s({tag:"fancy-button",innerHTML:"Create a new kern group",onClick:()=>sa(!1)}));else{let n=s({tag:"div",className:"item-chooser__header"});t.appendChild(n),n.appendChild(oT()),t.appendChild(ti())}return t}function iT(r=h()){let e=r.selectedCharacterRange,t=s({tag:"option-chooser",attributes:{"selected-name":e.name,"selected-id":e.id}}),n,a=Oe(r.project.ligatures),i=Oe(r.project.components);return a&&(n=s({tag:"option",innerHTML:"Ligatures",attributes:{note:`${a}&nbsp;items`}}),n.addEventListener("click",()=>{r.selectedCharacterRange="Ligatures",document.querySelector(".item-chooser__tile-grid").remove(),document.querySelector(".item-chooser__wrapper").appendChild(Da())}),t.appendChild(n)),i&&(n=s({tag:"option",innerHTML:"Components",attributes:{note:`${i}&nbsp;items`}}),n.addEventListener("click",()=>{r.selectedCharacterRange="Components",document.querySelector(".item-chooser__tile-grid").remove(),document.querySelector(".item-chooser__wrapper").appendChild(ma())}),t.appendChild(n)),(a||i)&&t.appendChild(s({tag:"hr"})),E1(t,r),t}function oT(r=h()){let e=r.selectedCharacterRange,t=s({tag:"option-chooser",attributes:{"selected-name":e.name,"selected-id":e.id}});return E1(t),t}function E1(r,e=h()){let n=B().settings.project.characterRanges,a;n.forEach(i=>{i.enabled&&(a=s({tag:"option",innerHTML:i.name,attributes:{note:i.note}}),a.addEventListener("click",()=>{e.selectedCharacterRange=i,document.querySelector(".item-chooser__tile-grid").remove(),document.querySelector(".item-chooser__wrapper").appendChild(ti())}),r.appendChild(a))})}function ti(r=h()){let e=s({tag:"div",className:"item-chooser__tile-grid"}),t=r.selectedCharacterRange.getMemberIDs(r.project.settings.app.showNonCharPoints);return t!=null&&t.length&&t.forEach(n=>{const a=`glyph-${n}`;let i=new Ca({"displayed-item-id":a,project:r.project});r.selectedGlyphID===a&&i.setAttribute("selected",""),i.addEventListener("click",()=>kt(a)),Kt&&r.subscribe({topic:"whichGlyphIsSelected",subscriberID:`glyphTile.${a}`,callback:o=>{parseInt(o)===parseInt(a)?i.setAttribute("selected",""):i.removeAttribute("selected")}}),e.appendChild(i)}),e}function Da(r=h()){const e=s({tag:"div",className:"item-chooser__tile-grid"}),t=r.project.sortedLigatures,n=ni(t,r.chooserPage.ligatures,r);return t.length>n.length&&e.appendChild(ai("ligatures",t,r)),n.forEach(a=>{let i=new Ca({"displayed-item-id":a.id});r.selectedLigatureID===a.id&&i.setAttribute("selected",""),i.addEventListener("click",()=>kt(a.id)),Kt&&r.subscribe({topic:"whichLigatureIsSelected",subscriberID:`glyphTile.${a.id}`,callback:o=>{o===a.id?i.setAttribute("selected",""):i.removeAttribute("selected")}}),e.appendChild(i)}),e}function ma(r=h()){let e=s({tag:"div",className:"item-chooser__tile-grid"});const t=r.project.sortedComponents,n=ni(t,r.chooserPage.components,r);return t.length>n.length&&e.appendChild(ai("components",t,r)),n.forEach(a=>{let i=new Ca({"displayed-item-id":a.id});r.selectedComponentID===a.id&&i.setAttribute("selected",""),i.addEventListener("click",()=>kt(a.id)),Kt&&r.subscribe({topic:"whichComponentIsSelected",subscriberID:`glyphTile.${a.id}`,callback:o=>{o===a.id?i.setAttribute("selected",""):i.removeAttribute("selected")}}),e.appendChild(i)}),e}function l1(r=h()){let e=s({tag:"div",className:"kern-group-chooser__list"});const t=r.project.sortedKernGroups,n=ni(t,r.chooserPage.kerning,r);return t.length>n.length&&e.appendChild(ai("kerning",t,r)),n.forEach(a=>{let i=s1(a.id);r.selectedKernGroupID===a.id&&i.setAttribute("selected",""),i.addEventListener("click",()=>kt(a.id)),Kt&&r.subscribe({topic:"whichKernGroupIsSelected",subscriberID:`kernGroupRow.${a.id}`,callback:o=>{o===a.id?i.setAttribute("selected",""):i.removeAttribute("selected")}}),e.appendChild(i)}),e}function s1(r,e=B()){const t=e.getItem(r),n=s({className:"kern-group-chooser__row"}),a=s({className:"kern-group-chooser__left-members"});a.appendChild(Pt(t.leftGroup));const i=s({className:"kern-group-chooser__right-members"});return i.appendChild(Pt(t.rightGroup)),R(n,[s({content:r}),a,s({className:"kern-group-chooser__members-divider",content:"&emsp;|&emsp;"}),i]),n}function ni(r=[],e=0,t=h()){const n=parseInt(t.project.settings.app.itemChooserPageSize)||256;if(r.length<n)return r;const a=e*n,i=a+n;return r.slice(a,i)}function ai(r,e=[],t=h()){const n={ligatures:Da,components:ma,kerning:l1},a=parseInt(t.project.settings.app.itemChooserPageSize)||256,i=t.chooserPage[r],o=Math.ceil(e.length/a),x=s({tag:"button",className:"editor-page__tool",content:"◁"});t.chooserPage[r]===0?x.setAttribute("disabled",""):x.addEventListener("click",()=>{t.chooserPage[r]-=1,t.chooserPage[r]=Math.max(t.chooserPage[r],0);let l;r==="kerning"?l=document.querySelector(".kern-group-chooser__list"):l=document.querySelector(".item-chooser__tile-grid"),l.innerHTML="",l.appendChild(n[r]())});const A=s({tag:"button",className:"editor-page__tool",content:"▷"});t.chooserPage[r]===o-1?A.setAttribute("disabled",""):A.addEventListener("click",()=>{t.chooserPage[r]+=1,t.chooserPage[r]=Math.min(t.chooserPage[r],o-1);let l;r==="kerning"?l=document.querySelector(".kern-group-chooser__list"):l=document.querySelector(".item-chooser__tile-grid"),l.innerHTML="",l.appendChild(n[r]())});const E=s({tag:"div",className:"item-chooser__page-control"});return R(E,[x,s({content:`Page ${i+1} of ${o}`}),A]),E}function AT(r){let e=s({tag:"div",className:"panel__card",innerHTML:"<h3>Component instance</h3>"}),t=K("name"),n=Fe(r,"name","currentComponentInstance","input"),a=xT(r),i=ET(r),o=K("flip vertical",`
		Flip top to bottom,
		as compared to the root Glyph or Component
		that this Component Instance is linked to.
	`),x=lt(r,"isFlippedNS","currentComponentInstance"),A=K("flip horizontal",`
		Flip left to right,
		as compared to the root Glyph or Component
		that this Component Instance is linked to.
	`),E=lt(r,"isFlippedEW","currentComponentInstance"),l=K("reverse winding",`
		Reverse all the windings,
		as compared to the root Glyph or Component
		that this Component Instance is linked to.
	`),c=lt(r,"reverseWinding","currentComponentInstance"),L=K("rotate"),T=Fe(r,"rotation","currentComponentInstance","input-number"),I=K("rotate first",lT());I.querySelector("info-bubble").setAttribute("bubble-width","540px");let d=lt(r,"rotateFirst","currentComponentInstance"),p=s({tag:"h3",innerHTML:"Component root"}),S=rA(r.link);return R(e,[t,n,a,i,o,x,A,E,l,c,L,T]),r.rotation!==0&&R(e,[I,d]),R(e,[Or(),p,S]),R(e,Or()),R(e,Wd()),e}function xT(r){let e=K(`Δ x${In()}Δ y`,`
		The difference in x or y position,
		as compared to the root Glyph or Component
		that this Component Instance is linked to.
	`),t=s({tag:"div",className:"doubleInput"}),n=Fe(r,"translateX","currentComponentInstance","input-number"),a=Fe(r,"translateY","currentComponentInstance","input-number");return t.appendChild(n),t.appendChild(dn()),t.appendChild(a),[e,t]}function ET(r){let e=K(`Δ width${In()}Δ height`,`
		The difference in width or height,
		as compared to the root Glyph or Component
		that this Component Instance is linked to.
	`),t=s({tag:"div",className:"doubleInput"}),n=Fe(r,"resizeWidth","currentComponentInstance","input-number"),a=Fe(r,"resizeHeight","currentComponentInstance","input-number");t.appendChild(n),t.appendChild(dn()),t.appendChild(a);let i=K("lock aspect ratio",`
		When either the width or height is adjusted,
		the overall size will be kept proportional.
		<br><br>
		Maintaining aspect ratio will override value
		locks if need be.
	`),o=lt(r,"ratioLock","currentComponentInstance");return[e,t,i,o]}function lT(){return`
		<h1>Rotate First - Resize First</h1>
		<div style="width: 500px;">
		Component Instances are rotated around their center point.  But if they are resized, their center point changes.  When Component Instances are rendered, the Root Component is adjusted according to the delta values stored by the Component Instance.
		<br><br>
		This option changes how this Component Instance is rendered.  The default order is to resize, then rotate. When this option is selected to be true, the new order will be rotate, then resize. This order has an impact on the Component Instance's resulting shape.
		<br><br>
		<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAFXCAYAAABUXrzKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAFkJJREFUeNrs3btz29aCwOGjTLoUyyb10m1SRC5uHapNE7mIW0ttdmdszexsK6m9jZRitxXdKoWdJq3ov8Da4t42vPUtrC2yLReHAMSH+ab4wMH3zdC2KFkPCAc/HBAEQwAAAAAAAAAAAAAAAAAAAAAA2JTbXsNC2L4vLQJqsoFpZX8eZre4oXnIbvfh5UFnysceZ+97b6HByt5k46ibjaO2RSHo8FSzhPPsdlKEfPz9Mewx3JfZhqdb3Bc/9ia7HViAsJabbDwFURd0WDfmx0WYZx36axSxP84+/uxxIwSIegWZhZBizE/GwlzOxD9kt24R8u+nztyjlwcHS37NqxAPM076v7e93oz/eTRy6D//3uNRhWZ2i/efZe+/90tlB+OoWYyRVcTx1Rp6+3ShqOdf87z4v83i3jgOfvEwmKBTz43Qx6FQvy82Jg8TPjZ+zNXEjdYyQc8fn7+b+H/H3zcr6IOP7RQ7H6+Kn+PZxO8fNjuW5q27y5od9Xxn9ipMP6p2aqY/2xcWAYkZPszezjYAL6bGML//lzU3eo3ia3bnfGS3H/rPb52hj3ldfFyM/EU/9vnPcuzXSsXlJ6LO/5hGf9yG8LzYMX5W7JSHIvbM4DF0UppRxLPYW0MBPV3g49edgcSYx6MC16E85D4t6POVZ+APb+BCGBx6hG26L3YqVxGPLp0MrcdHcx86iofUb3vPHk9Qze/rFue3HPfHR37U4H5orL0f+bz5Dvbk9wk6VMrwTPZywZiv/nzZ/BDhcTGj+G1K0A+X+IxvQ34SUZydd4oZeyg+P2xXfgSrs+LYaC0V8+GAz9vJiN/Xbe+7Yuz92J/ND5QPod0XO9lm6FBR3w39e5EN0Ys1Yt4sNh5xA3Q2I9yNx79ve8NHA34L+UMCD0Mbs3axoTovbvF9pwts5GAfLRfz6U5GYp6LR99a/XEXd4DjQ1T5TsTJ4/treN6JoJOSxsJ7+utvZMrH6l8UM4Z5Hz8e/FY/2re90Q3ey4Oz7L74uH5zbAMGmxd3VJ9mB7L7JDHPj6SVR6rORo4e3PbiDvldMY46YfDMlsu6PjNE0GH5jcxFEeTLqVebG7guZirdMHhM/McweMrcu5Cf+BPGdkbMytn2eh2D+I/sdrH253qKs9Hzx8PLh8U+H2vx7dteee7Ku+Lj7osTSmtJ0ElJd2TPfhN76fmM4XzhDUc+wx5/LC9uiP4nlCfUbep7heVifhLmnXuyve9nOObtGWPtMoxeT+Kszr9GT1sjJR+G/v16Q1/jvPj7sH/BmPI2fLb84L5FZzBeyIJ9iPm+fD9xp/mPkD9MdTnn2SonY+PnVZ1/lS4sQ0obpkaxISgH+PMnn/nmJ7a1FvrYWRenyTdaHzf2fcJqMe+GVR/uiddPeJqYlzPzeReiaYbBRaTOip3t8ryWWl5VTtBJbQN1MTSLnn+Wbb4TcJJ9zPWaX7f1OEsfvVJc/H7aIycaDQ4nHob8+fLP/OLY8VhZ37KXS14n5qM71+/7F5C67cXH0q+KcV/LqysKOinO0stYllG/DONPEcs/9iQMLjXZnnshmtWC3psw8xme4b9wjWr2ZKzsOuifwvyHnzr9IwGDnZHReI9HXtAh2Q1VZ+jfh2Mbj7hBeL7yU3amB33a45PxqMHZAmfJwzbHyuXOzhKfd97JYAzHw+sfJ+4Qjx+GX/fIm6DD3myoYkyPF9xIvNjoIbr8cGLjMeaeX85+Rv2yzk/7EnTY741VnDnHM1/j382xGXncs39rloxx8hj13wQdAKoe9dueV/YDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAglK+9DCw2XhrFq7qxIV9YBLDSxim+1vrH4nXOgdkhv8j+9Uf/Fv8t7Bvh9dBhtZifFG/F11U/Ci8P7i0YGAt5CG+y2+vsNh7wOG5+yW7X2dh5sLAEHXYd8yDqsEDI/8yGyO9Zv//ZDeGn8xC+bgq7oMOexLzTzjdQ53chfNUQdZgV8t+v83+XWifCLuiwJzH/79P8/uahqCPki4Z8nLALOuxFzEuiTn3HRhwXV0uHfNwPb/Kwf9UQdkGHHcVc1KlvyM/jmr9WyIfFsRPD/sNrYRd02FHMRR0hXz3kwi7osFcxF3WE/GkJu6DDzmIu6gj5tsLezW6X2bhq+yUJOmwm5qKOkAu7oEMiMRd1hFzY9yro+bV366aTrRAdo1rM1465qCPkwr5HQe/VcHnEFeHC6BbzJyXqCLmw70XQf71Mfyl8+30I37QEXcyfPuaiThVCXq7/cXsfr7deRcI+8xfeK6Ke/u2ni17x84p53WJeruc/32x+PWse9sLNp3Jd++SlV9lJyG97fzyu9+W6/3Uzne35V418mz4Ya73iZz5J/dfr9dAxM9/kzHxYN5uQXx6VhzLjFOJO1NlqyEO4eZyVx/X+357l635VZ+WTxPH1azY3+/dn+RGHfLw1+z974mEXdMR8GzEXdXazrrdqE3JhF3TEfOtEne2E/K6/btUt5NPC/p/P82WQSzLsgo6Y74Kos/mQt2od8nHxZ4/LIC6LRMMu6Ii5qCPkwp5A2AUdMRd1hFzYPw97S9BBzEUdIa9+2O/6y7hCYRd0xFzUEXImh71VpbALOmIu6gg5CYRd0BFzUUfISSDsgo6YizpVCPnfO0Iu7IKOmIs6lQ55XBcujoRc2AUdMRd1Kh3yv3UsI2EXdMRc1BFy6hB2QUfMRZ3tr7fNYt0V8lTCHq8V//fOTsMu6Ii5qLP9kP/xuO4KeTpjNP4O4+9yR2EXdMRc1BFynkr8Xe4o7IKOmIs6Qs72w/7k41bQEXNRR8jZftg/9teRuK4IOmJ+Wt9lIepCTgphP+mvK08UdkFHzEUdISeBsAs6Yi7qCDkJhF3QEXNRR8hJIOyCjpiLOuuEvLywiJCz47ALOmIu6qwT8tFLf8LOwi7oiLmoI+QkEHZBR8xFnc/Xw0Z2uxJy9irscWzPCLugs1+zoRCOH9/+/RfLZJ2oD/bqY9RfWShLOXkMeenXSyFnt2H/fJsY19FzQWf/vDzIpkAh2w0N/allOL8LoWliuZKfb0L4y+O+UTtbtmcWylLr4nX2ZzYVD5eP62Ncpv+VTdhbJ5YP2xXXubjuxXVwoN1fR18enAo6+7ohvX+M+lcNUV815oPotIcHPEutiw/Z7WIk7F83hZ3dhDyue+MhzydBQdARdTFn+bBf9+8Tdjbp21YIf/24cMgFHVEXc5YP+1kR9raws5GQX9yNb+/mhlzQEXUxZ7X1slssX2Hn6UP+TWvpkAs6oi7mCDsJhFzQEXUxZ9Nhjxvrb1uWERsNuaAj6mLOpsMeN9ZxXRV2NhhyQUfUxRxhJ4GQCzqiLuYIOwmEXNARdTFH2Ekg5IKOqIs5ws7mQ97Jbs83GXJBR9TFHGFnsyE/yn7XR8W2auMEHVEXc4SdzYS8s81vR9ARdTFH2FlG3L7sUcgFHVEXc/Yz7EdFHIR935QXDIovnLJHIRd0RF3M2c/1uNOPg7DvX8hHL+m7NyEXdERdzBF2Egi5oCPqYk4KYR+8XjY1DbmgI+piTgphj9GJ646w1zbkgo6oizmphD2uO8Je25ALOqIu5gi7kCcQckFH1MUcYRfyBEIu6Ij6rqMu5gj7PoS8W/WQCzqivsuoiznCvg8hjy+Y8qzqIRd0RH1XURdzhH1fQt5O6ccVdER9m1EXc4RdyAUdKh51MWd/wt5NMuxxLP90kV9rvUYhLx1Mfc9tr1fDVf4y+4VfGPk1ctuLFc9qHhrhz4dsDci2dd0NvHSxmLN/635cIc+z26Dknax3v16G8M9u9UL+w5vs9jr/9yDkl6lHXNAFnW1GXcwRdiHfadBB1MUcYd/HsAu5oMNWoy7mpBD2OBZ+/yW7Xef/FnJBh1pFXcwRdiEXdKh41MUcYRdyQYeKR13MEXYhF3SoeNTFHGEXckGHikddzBH21cM+OeTxk2SfMFxn4+nBAhd02HzUxRxhXy3sQi7osDdRF3NYPuxCLuiwV1H/eyeEvxyLOXwe9qv+OJkU9hjyn86FXNBhj6I+IOYwOk7i+MjKHV6PhP3/HoZfBEbIBR32KupiDsuEXcgFHfYw6q+yDdKZhQELhz0IOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD77MAigBlue4f9v18e3FsY1HD9b2R/xjFwn42BBwtE0KHKG7RW9ue77HYk6tRknT/J/vwxux2PvScG/X12e5uNhc7Yxzez+y4svN36wiKAueIs5e5xtg5phvwwu33M/nUzIeblODgpxsK7/uw9j/mNhbcfvrQIYKmoLzdTz2f4reKtbnbrZP+/a3GydzGP63e+noeR9TWEf2S370J+6L1ZvO947O1Vvmb5ObrZmGgP3d8sdhwmGz8SkH/8cfG9t+s8vhxypy4brLuhsK4jHnacH/U85DdTNninIxsw2O3YiOvox6GYx3X7bOSw+vz1+nKpQ+75DsTH4q24k3s09L7Zs/6XBwdzdkRqO77M0GH5mfpVP+rTN1aNYiNTznLi447/G/LHJQ/7G6vbXnfiBhO272Ys5kdTT4CL6+xt75diDKz7NadpDo2dt3M+z1Wxk/28+PumuE/QIWGrntBWnuU7/HlezPwfcWN42zvt/9+XB9dD77nI7v+j2GC9CvnhTNjl7DzOuFtDAT2aeTZ7Pnu+WvNrXhVjqhNmHzV7u8Csv1UcHegWnzvubBz3f64a7jALOvXw8uBsjQ3e3UKzl9Gv1566kQrh/HFGNPr5j8bOHo4bvjfFzOOZpw2xAa+G/n25QMzXOwEuX9/fFDH/MCXo/7LEZ4wh/34s8OX9ZujA1Bn+0RNE9cfi7w9F+OMhzOtiIxcPxT8vZviHxX2hf0RAzNmMwwV2QkvNfvQnmz8bzh+KelfsoL4YWr+nf0/5DkDo/5/J562c9T9nfuTrofi/13U9MU7QYVsxzzdOh2HwfN7BzCifWRwWs/ezoZnQtcfa2ULQ569j6z/PvHys/kWx0zrv48+LWzl+uiE/We/90Pf0vv/MkxBeF5+71iecCjrpyWe359nAfrFHMT8sZieh2Ch1hzZK5WPuH/uzlvys4/zpPNNnRFClMXkS8qeWtUeCPFl5KL7cySjPY2kWs/EXY1HvBOej9LmwDCnGfPxpLKuLsV0/5o2h2Ul74gwiP5xYxru8qMepQ+1sWLlj2dzgmIyf+6r4WmcLjLmL/lPT4lPZ8ls8g/3Z0Pd67tcm6Ij5Lr+nwyLmp3OOBpQewupn5sOi7h+DvrkrIZY7s/FrxSNQF/3b4GS2ZnHfyYzId4d2eF2xcQqH3Ek15o2hE2qWn7U8xUk1o9/T7Mf2BrP4ctYUZzX5NeRhc34LgyNCceb7YgNfoxyHx2HyJWWbxdfuhNnPH3e0StCp6cy8vG8VcSZwsbWYj85iOsVG9Y/+hvC292bsuezwlOJj0VfFunfcnyUvclJZ3AFd/OGgaeeBfF/EPu7Avu3/Pfvzvho7qsAYl34l1aCv43KtM3pHv5/7YhY0SX7d6cHze/MrXuX3HYfBU3yeu/47Gxw/5bo2f/0fHEmKs+r1ThbND7vnM/Py0q+DS8vGHY0PxfrfKGI+fG5J2y/ODJ0UxRPK8qeuDEe93OtfRWfN7+h46Ps4DNMf8+sUT925GtqQdoufKT4d533xud6F/NKWsInxE9e1GMiT4p7z7O1Xxfgpx0Jcn38cW7fvNrRexp2FN2Hy89SvxdwMnfrN1Edf8GG730ecZbQW+Mj2UPAfPju0ns+Gyo3ae6/HzobX23LGvIj84jDrXCNhME7GX22tvH/4CnAfjAFBp75Rv99Z0KHa4+c8TD55rQx5PHJ05imVgg7b2yg9zYVloI5jqBk+f7io46qFwC42SA0LAQAAAAAAAAAAAAAAAAAAAAAAAABIQHw539vep+ISylSIa7kDMIh5/nrkUXzxlSOvcCboAFQ35kHUq+cLiwBAzB9j3s3afXkUwp/9V0eNL3J05/A7AFQh5re9Xv/214+98FWjl93bC83DXrj51Cve5zF1AKhczMubqANAxWMu6gCQSMxFHQASibmoA0AiMRd1AEgk5qIOAInEXNT3mivFAaQe88kXjVlPM2v4+V3Idg7iW64oJ+gAVC7moi7oACQSc1EXdAASibmoCzoAicRc1AUdgERiLuqCDkAiMRd1QQcgkZiLuqADkEjMRV3QAUgk5qIu6AAkEnNRF3QAEom5qAs6AInEXNQFHYBEYi7qgg5AIjEXdUEHEPNEYi7qgg4g5onEXNQFHUDME4m5qAs6gJgnRtQFHUDMRR1BBxBzURd0AMRc1KsS9NveXQ2Xx9ts5WlbLZbeCGWjMFxZEMYIYi7qu/PljPe1arg8PlglVtKo6foSjBHE/ImVP38e9bhtucuWj6ivGfRcXLCp+/5VlqMTa8NTqMP6UkfGiJiLegJB/1sn/aXwjcnlk6nD+lJHxoiYi/re+8IiABDzvY56vlzKqB9aMIIOIOaiLugAiLmoCzoAYi7qgg4g5qIu6oIOsHuDiy+9PRNzURd0gIqKF2nIK/4f7/IroiHqgg5QMfnzp/Oox8uaxudXi7qoCzqAqIu6qAs6gKiLuqADIOqiLugAiLqoCzqAqCPqgg4g6qIu6ACIuqgLOgCiLuqCDiDqiLqgA4i6qCccdUEHEHVRF3QARF3UBR0AURd1QQcQdURd0AFEXdSTibqgA4i6qCcQdUEHEHVRTyDqgg4g6qKeQNQFHUDURT2BqAs6gKiTQNQFHUDUSSDqgg4g6iQQdUEHEHUSiLqgA4g6CURd0AFEnQSiLugAok4CURd0AFEngagLOoCok0DUBR1A1Ekg6oIOIOokEHVBBxB1Eoi6oAOIOglEXdABRJ0Eoi7oAKJuuSQQdUEHEHVRTyDqgg4g6qKeQNQFHUDURT2BqAs6gKiLegJRF3QAURf1BKIu6ACIegJRF3QARH2TUc+VUW8IOgCiXjU/vB5+6yxbvg+CDoCoV8nPNyG0Tsq3TrPl2t7klxN0AES94jEXdABEPYGYCzoAop5AzAUdAFFPIObRl3M/4ttW+r+Er//VivhU6rC+1JExQoz6bS9G/S6LeqMf9fiUrPjULHYe88WCHn9psCjrC4i6mLd38W3MCnqnhr+WrhG7koeari/BGEHUax71PYk5AKwmXsb0tvcpu/XCzadeaB72snvrdfv5ptf/+fPbiZUCAFEXcwAQdTEHAFEXcwCoTdTFHABRF3MAEHUxBwBRF3MAqGvUxRwAKh51MQeAikddzAGg4lEXcwCoeNTFHAAqHnUxB4CKR13MAaDiURdzAKh41MUcACoedTEHgIpHXcwBoOJRF3MAqHjUxRwAKh51MQeAikddzAGg4lEXcwCoeNTFHAAqHnUxB4CKR13MAaDiURdzAKh41MUcACoedTEPB9YQACoV9RDuslsj/PkQwuVRCD+8DqH12PDT8PKgLegAUKWoj6ptzAUdgFSiXuuYA0C1o54/pn5iYQAAAAAAAAAAAAAAAAAAAAAAAACwf/5fgAEANYw/F5fXdHUAAAAASUVORK5CYII='/>
		<br><br>
		If a Component Instance is not resized, or not rotated, this option has no effect.
		</div>
	`}function sT(r){let e=s({tag:"div",className:"panel__card",innerHTML:`<h3>${r.displayType} ${r.ident}</h3>`}),t=K("advance width"),n=s({tag:"div",className:"doubleInput"}),a=Fe(r,"advanceWidth","currentItem","input-number"),i=s({tag:"button",className:"panel-card__action-button",title:`Auto-fit advance width
The advance width will be set to the x-max of the paths in this glyph.`,innerHTML:rt({name:"command_autoFit"}),onClick:()=>{let l=h();l.selectedItem.advanceWidth=l.selectedItem.maxes.xMax,l.publish("currentItem",l.selectedItem)}});R(n,[a,s(),i]);let o=s({tag:"label",className:"info",innerHTML:`
			<span>bearings: left${In()}right</span>
			<info-bubble>
				<h1>Side Bearings</h1>
				Side bearings are the blank space to the left and right
				of shapes in a glyph. The open space between
				characters is very important for legibility.
				<br><br>
				These are calculated values based on shape positions and the
				Advance Width. They are not properties that are saved with the
				glyph, but it's helpful to think about them as if they were.
				<br>
				<h2>Left side bearing</h2>
				Distance from x=0 to the leftmost side of shapes in the glyph.
				Editing this will move all the shapes in the glyph, and update
				the Advance Width.
				<br>
				<h2>Right side bearing</h2>
				Distance from the rightmost side of shapes in the glyph to the
				Advance Width.
			</info-bubble>
		`}),x=s({tag:"div",className:"doubleInput"}),A=Fe(r,"leftSideBearing","currentItem","input-number"),E=Fe(r,"rightSideBearing","currentItem","input-number");if(x.appendChild(A),x.appendChild(dn()),x.appendChild(E),r.displayType!=="Component"?(R(e,[t,n]),r.shapes.length&&R(e,[o,x])):R(e,[K("name"),Fe(r,"name","currentItem","input")]),r.shapes.length){const l=!!h().multiSelect.shapes.length;R(e,Or()),R(e,s({tag:"h4",content:l?"Overall paths":"Bulk-edit paths"})),R(e,hn(r,"",[],l)),R(e,W0(r,l))}return R(e,Or()),R(e,Yd()),R(e,wd()),e}function LT(r){if(!r.usedIn.length)return"";let e=s({tag:"div",className:"panel__card full-width item-links__rows-area",innerHTML:`
		<h3>Links</h3>
		This ${r.displayType} is linked to the following items.
		It is used as a component root and will show up in these items as a component instance.
		`});return r.usedIn.forEach(t=>{e.appendChild(rA(t))}),h().subscribe({topic:"currentItem",subscriberID:"ItemLinkRow",callback:()=>{const t=h(),n=B();document.querySelectorAll(".item-link__thumbnail").forEach(i=>{const o=i.getAttribute("target-item-id"),x=t.project.getItem(o);i.innerHTML=n.makeItemThumbnail(x)})}}),e}function cT(r){let e=s({tag:"div",className:"panel__card",innerHTML:`<h3>Path ${r.ident}</h3>`}),t=K("path name"),n=Fe(r,"name","currentPath","input"),a=s({tag:"label",className:"info",innerHTML:`
			<span>winding</span>
			<info-bubble>
				<h1>Winding</h1>
				Ordered Path Points that make up a path outline have either a clockwise or counter-clockwise direction.
				This path direction is also known as a path&rsquo;s &ldquo;winding&rdquo;.
				Paths with the same winding will combine, opposite windings will cut-out.
				<br><br>
				For example, to create the glyph &lsquo;o&rsquo;, draw two overlapping oval paths.
				If the outside oval has a clockwise winding, select the inside oval and change it&rsquo;s winding to counter-clockwise.
				This will result in the inside oval appearing in reverse (or cutting out) in relation to the outside oval.
				<br><br>
				<div style="display: grid; gap: 10px; grid-template-columns: 1fr 1fr; width: 350px;">
					<span>Same Winding</span>
					<span>Different Winding</span>
					<img
						alt="Paths with the same winding will visuall combine"
						class="winding-help-image"
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAABkCAYAAACcuzIHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACutJREFUeNrsXS1YI0kQ7SAXcWNYy+hdQQw60ZzYmMWCvhNwYjVg17CI08laTsCJW0vQKwji1jLYQ5ATnM3N6+qamYQkkGRmuqd66vuGQPib6nr1qrqmu1qpWmopWRqVudPzURh/xNWMr8C8u2ney0oUX/eZz+nabUQV0DHI6NfMfKc18ZPD+LrNfN3XH3cb/Rp0qwGsHV9bZvDbyfee4vG+H6SfR7fjv/s+Y5/N+FfXAzVhHPzytX61DcTzUdvo1ppwJqV+ZPATxbf89G/69Ubsa2+Nr72JfyVsTjod69iPdRzUoJttAIzcXnx1EvbCwP99TYP+ENHrMgKj6GuLXt8lGB4YIH4txTjkTB0Dsk4CKH3dkjNpgA0X/9sbIQERurGeGyGz4qUB4WWs59Bv0JERDhKgAVjf4/H5/mcMtoIjxfvYONsf4qvDxok0+JTq5c6A56P9+OMHrScABR1/XNPrU4EYgF7QD+y/3eF3e8bJ+n6BjsIKgY2B1v+6PJOtKmCFdkyyrX0Ox2CGs5UMQw61b/QMEh3xakOgF4C3c8DhGI51YoP9GhbAdqTzGITOv87sGWGWtPcJgBSC+9owi4CPwHakAQcW+xbr2O9ReuCKgAE/HpGuFH7jm1RfXAi9+YLtfHQVXyN1fDWKQ9softftC/eIe8U90703X5x5no+O9c//fjeKDeq+juvBSH08HqnuI3R8NGlA5cEGQ3QrBbZp4Pt8w+A7NWWN5zkbjAbjwYhV0xHg+6XLOt6YiFRJwHUSQ1TB61+6dg6zjNBJQikzOIwG41VZx7CZZffpDuYwu13oG/90UX1DTDICdCKjXGgAIpRWkcFf52B3L6YVTtTacKO44e2OLENkgcdsAD2lAY6vjTDLeoeuAo7yGuQ/uGGpgIN+ABvYgD+X6mC49k8ZeF3XAHec5DVSBx/5DgCGcIrPJxNwCXnrrAu6Ubi9cSPP49kpPF864MBs03JUZgO8Sh8D68BjwEn2ch5s5DfzJkUYAx/YnspHloDnE+BeCyQfgMd5benA843hFs1/pKcbAB5y29KAR7NU2YDDoM7L4V5T5/LFKVEcL+EZquyEmcMHPHmVwjbPanmmKxt43aIAF+o6HCryUgeRwYKBzAMsCM34W5KeysxKJwpZLID4var3V2UA8yr2cpheNC+sZgH5Md9HZlz8lRwq8BQFAMk7dcBjMukTC1w8o83xeWo1l+wsGgqLYnJesyb18eB4fnecT1gFiiUDjmebRT68B6Clh1k4F+V3zVUAdyg+rHLeVfSMnMOs5DJKGmavlgVcoJNDyeURToLLmmFiZix9MsbOxQtdF548SJ/uI8cqM8nnyYr0/JhqlHfLsZwPgwPmKTvv8cWZF6rd+cRyZedYnEPWbFezXOl5pK3/7QDbrU2BHRLAQH37osQK73bHZm8bgv+LDc/tfbljzJ0bqD/Ni6A70DvSn4ZyBwSAA/Cue3YN0t5TouWbduq26XowA3RU1GuaH5Yr6Odh27HQ1wStKzZCueOMJkjUTuNgHtPtrdSSqwoCI6OBDDpD2RTu2LTdke3gFGI780DXca6hTRGhldt12RaEd+khFoyONnCZR2NrE6E1ND8kV2BkVxwLDR/T5oUyhRtaZiYUWaZriw+t64EboXUyxKJBo/wQ254Gug+Fd7+0Ldz29YdDeuJe0BFUsoDRMUE1m3iyoGvqlqSSBW1Ql+3pW3SIlc90CdutZfK5QHRo1els0y2Wg6C5NXI6yXkd53bmmIK1hOXSb8gOr5NHAFhnOuMEb70AXSsLutA5BshbmElcdCzc0zvhkwly9jALupb6J5Kt9FuHQYeqAQ4kkSx04Ew4PpF4uJetNE7PeYjcZQHp4ZVJLZ4/rCWzCun5HGp0roIO8iaQPf7p2Acp0/03VLVYEuTT0ssmqQRr3hiWa3S12HUupeLwymudnjxguuxJgrVYkzWeUdQsUEuZoKullhp0tcgHHcVV6ctranEIdKKOW3xB1n+qLW5TTC3Sn/DqwxIi14XGf8CgG4pfWuOy6NUv3lQPhgy6gXjQ4THMpsNMJ/2JUIqvYYbpNuWDbt3R55s+PC3hBQ27jSS83nqzysHFWTpYQPrTElovGGUnEgPxiwjBdHjU52IagXsSv4h2k3A2Brp0diFXsJAw3HIstBpn92F/CiJqArrdRqTzOulsh7KJazrifpiFpQrvN1aqn2U6euN9SzboeN2aSxMKMK8v+40nwivkWj7TGeO61LQG9+LDfmMAzjz9yoLuMkODcgUbf9+13AEc35NkIT2TXh4p6Civi8R3EUJe5wrToZ2Eax0HiphAUMXg8jnomO186JfG7V9dYAAfumSBzHYbg1mgO9OolAw8zBQxobDN6Og3DPD7EVrHPGscdBRiB+K7CIFdMBg2C8XcJ8/lbZF5AI7GuDcbdMx28ELJCwC437Ct7uYYW1QKpIfWnw8oZSMymwO63QZQORTdbh6CZt5oeG2jZvfxKNvyXu4Egkpwr+ya7sOJOdDNxok5tk7qcejEnFkrh7/ERhmqnUO5nojwijC7d1ou2zHL9XuyWY4i5cliv8hsJ/k05rJPJfSF5XCY8pyj1eftkQDbRdozJZdPysztfu3KZzmsmqFc7rfl/gAOEyv6mHEXcjscDvfpotj/s90ZeTOWS59snQLvSvyJfUUDoixg276QpuAEzYmzwJYBXejFseoARFFHnZd5ZLutK2zyUZs5zT7xh3wIDQBG3mzELIrXOqwuDLwL8d7KANk5zHd2jJqV/JpcDmH1OegCXez7fCN7ABEKATyEi1W9H2OFS7KjwkEprBa0SgSHnADR0j0XdaZVa5QYI/yNVcFbhciAmm6hwmWUsgqqtnKUVViKwo3sHBjOBKc6H3XLKQAy8CRX1jkfWxR4VDaQPTYp4G74kLmygHfqzeC+FngYixpwhQOvm+tsr8rA45BaA64U4FENT/LkIgu8aRMDHwCH/NQJwE3meCisSi0PIMcD6DDwPEGArjzTlQy4tCzSdQNwKfDaupwyiw2kzGrhWDx7RxVeclkE+jKLI4d3Uug57Y02hOQ8jx750CV1vSEcCQRCTxoqsD2QZ7YIPZKMAl1ogeLI6HinHUzac1Uu+1D+FqrKCIXbu1JX5hYZZsYN0cw8GuyKcTDkqimLH6tKChnlWCsBZaqYbOOeyRCPMw3BDgY98ey2apMpOAvnqlgpUil2m5/rdSsFvhRsPGsLX6HnoQYns7vr4APY0onCXVm5W6P0kKsUduB29F6BP05o76crDWSwT6K1T5uE053pJ5ObhV9kd6UOjZ6B3g+BfRguddrEznt0GKCWD5HRsVfWv29YYz6ljjT4noaBBt73P+1tPsbgo5UGbZuDB1wuDLbp4OsYPUMNOuzov+7ZcTI4EfQD2Mih+go9RkoEm13QPTcMWKGpjQHgoUlgkQyIQde7lloEONoJRkagNgjDnPUEw+8ZXYMEgGjkUyQDQkc4U9pTJDIOdbaSQ1UadM/ZD0ZB9562fg8hGN0zH+7JQGjLv2jDGQw2jivAtji0Wk37pSljgGs1pd9GgXpmdQy1Y6EBN/rmAYA4xGTRdrDczBJ6sY7jLVeZ1ZyI8e6Abjo74NrSLMiHIUPYUPNk81lv4cgY4FYbYbfRd8TRoGPL6Nce+z6DcJ5DjTc6GhodB8aZ+i4eOOgu6KYbqanDExnopdlkZK6hKx6+ABBDo+drevH2E0aryImW/wswAEGrvdgr+YXFAAAAAElFTkSuQmCC"
					>
					<img
						alt="Paths with different windings will appear transparent where they overlap"
						class="winding-help-image"
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAABkCAYAAAB3jIkEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAChtJREFUeNrsXS1020gQ3hQ2oCYpjXADahIc4R6IyZXauCQh5T56xFdw2DH1ATvgjtrGAXZAS63QBtgFCdXp21lZ8k8cO5G0q9md97bKe/3bmf3mm5ldaVYIJ040yIHxM+yGlejXqhrH6inUs7Llb86jMVE/43mnnhPx+WBuoJ6xjl40PirdPDW2yUTpGqzoGDjg7Q+0WjTOouFLwweRLTHu7+j5GNn5Z2TX+y22PYrW63003kb/nBet59ExPT2JW/zFYTRG0ehrAWI39JV+pOe90uf7SCx+fpiTvtvkxKfncaTXe6Ujfj6szFM6DiMdJw5464vgKbDVpdf/GNICyOcw+/8Pi/UhGidn9CSW6CgQBjnqCR3Ppa73QUXc9BM9HzLGPhxP6hnpeFoDEAOpH/Q0AIQHmgEXg60mF+HmWsjnQ4EEdFihhTk9p2eyOP0MneoiGg0Jtn+/kY73BUdCMKFfJx2PvEA52l9Gph25hdJueBmNqfh7GopPl2G0+GH0O/oH5oH5YF6YXzdsqND/slDaDXvRCMWXdhgtvBk6YpzWQvG1F8q5dcO2cg7WoGtGYyaag1D4DXMW4qnFwTwxXzjKfoAbiPYsFL83zXGqTePII6dgC0CEVDDIn+MwyjvMBtzqwHwJgFOVGjwdUrF4ZQDcdgC2XszyBgHOW3i/6Qz33MD8KQQP1pghZnIsXpkAtwmACcs3ygq6S6lAo1XuxVjNAaFPHH6x99YNx5LJTcrhskgzQBbkZJWyAK4iJwx2KFtY3Sf8UlgiIHLUEU5GBchsa4phzO47JooJc2G5TQtC+dBUVq1gBk5stynFIPZrmQq6hmQAbEdwXQTkQAir6RAU6132HHbbgGOt6m0I6FrSK7iG1tj45PntJ5ke1SxX/cH0VHiMzQBfvIXAOdwkoGs8m2YgDHO1A0aSZlT1gg4UjBBkM+iWC6uxJeCb6QFfDDquRcS+oLMXfF6RoGvKBXFMtw18vHO+BHwF5XxYCO45HVicTimar95a4lztpsFXwD4d7+oVg7YO2hnYy5f24u6kWdlra/jgvE+HQUdi2YUPHK2BPTnnwki5XpqW7GDAgTyR4Aw6nFHmkTDjhIO77egYMeNK1wavhW7ktbWcosWUfbRAMZVZvkevNs3Y53V0IN7LMT/22e8EJPlxM5sQy/UNjPUwke+2AI4WcezE2ZYopOjNHe81hqpJL+UcYjFo66Qh8pa4QEMuyb9AG7zGUFP2+1CUlwxEUQKAA+icbZrky74zUOYGehX4xuwdGoUUiOtFbMe9oCia7dKFBnenflEK49iuCPAN2LMe9NuL9WzI7SgUDIQuscG5MXZ2blSy9oQBvR+x2JPOrO2PvtlgjroYdgRrifuHZNUf5eXSEZ8ueNt6eIVfa6v7em/W9pnwh+gPMwbeOS26frlSnZz42hrNiW76BL4tjFfT0slIB+Nh0XULtUTrq/kwZr0ORdItwDuXrcK4g+6wYlLHzGvFwHyFWs9V0+H2zVqYvekzB54xYTaWPvtwC0HzyVS4TTOeL9uePjDv00dhbWjMfKgx4kR1JmXMetcUUTcA74x9mPVUb2DD+gHLcIu2uJyFWgr7mxnvx5A/8Exiu1T6zZ7x4obiajM5Dbzqsx3Gyy4fJKvcGjiziXIKG1ivmgAPKIzb23OW956ZjBfneSfcWQ/XcMg7PBaM57FnO8l4PrGLmRLIKwL4V7beCvBueStNizo3uL3+LXvg4VIcVWDEwPvI/rSCwqzJtB4I7yP/AmOlqq2wB95b4zdoA/abyFLLiawpEuBxF6oaR845NMvjfInxqrncGeZkn8p2aMWWykqodeKkGKEtO88Bz0nBOd6tA54TF2qdOOA5cZKj0F5lkADPhj0kk6X0NybuKISzBfAmNpXyhkqV/WtpG0It/+vB6SWIM4dvzaLOoxPgHTNnvEfjfctj/1paDLzPB8MYeLfsczxiPN9o4NnxhtAS4wXs3/mP2cTcJN6WN4SGy8Dj/i4YhJJ3U3MKCz498AlrC+DhgBrAc+FWjxAL838LnPbwbtOMRxTI/UsnyqFMfNvSt2IrJfWVXxp4E9u+7TRIztizHSLqkbf4pjkNvJEl33ZW9F7y+wTjfR/xtv1KB4cEeOgVByrkXmQQ69UNyu88WVhw71lD0XS0DjwS/i2zqE2HSdTOv1ESilbCVf8p4F0Lv84ceIuWWaaE27oVreFQQ6Raw60zng3hlhhGv4fZEmaJzJZawy0Djz52vhK/Me/L+983/NowYCYN2faX8xktSIyK1qungUfSEWcN3sDD1gVVt7oVvRAj5o3OicSuVjs4rAMPpxho1eozB98/f+gNtwB9MKmw/qwURQWRWGd3o7jLP/IGnrug0BlGA9u5K7uccTTc3uic+hkDjeU/4C56yxJ0l/L6dOfQW43kW3FDN4AAQOQPOrqhm/v9ZV/aG+8v29dYPfG1x9tQAAIAsXLfVg7A68lFcbbcw0tPa7wN1mjlW2jgpkju0QO60a2Yl85o2oxmofNSiB1kbby2aA5sCRPVjG03YB9iqUjLIV0hrx3LkMR/G2Ca2ddo3bApixfO0cKrxlVsLa88pSpRzX0PCsVUFiEDe6FYECwM5xSFdgVaeW8J1CwyZvvVTso5r0vs1BOFiC2eTOGj6SLD1mJiXOxH8lgQ7uBLcpeGA50JoEtXuvaA73Jn0HGvYLWCzk7ma1vNdEg/qPAam9GDBqGoG4asjX7kJQXHqtFJf/6gI/3HZjU+QrUL43Pe54PxsYlOxveWGJ/zwf8ujK8ZfFW5KFgcMATvc92Z3OsDC3BOMz5dhjKaFfH2TgYnHFR0cN3Dgl7EAJRoczyVAHEQu08NbPmxQ+hFMsqF/aAHJdczpV9Fsh5eLuDkZGA5cqxWObvRp9kPZ6BlZgbMP85z1osLcrKypxjIU6mAmGr7CCpjAPoLZihb5Yf50utSg62LQU7WWoTfMgEwCauzF53UlACADelNMQBNZUDMKwHcdM+TC0+xovkABMOlAcf+khcC4ECGLlSIplSFAAnmQyF18KpOAwkAKQSbkgPGTkUhVRvgDrRvv6CNA1p14av6YYca6hTZ/Ry9PdDNCI1lvCraLKCDzre4c2UmeS71abkQD3NP6ofuUEU26onbhJ2eJ52bSMcrXUt/YBQLChFZRviyrwlaO/wYUSPFLIEIoKEjFhoFYhHQHpXANsp9IcjR6tLRAEL0PUYnUDyzbkV74lOzHOhJTXPwH3Skrql2YQ54q8UINU88k090U7qb0OI8/BJLjao39R45SdUAMPrhOwIbbi+izvZDQd0ph7JXjB4dvSUd0fUdev2MMHF/F7fNpT/7M1h3Pq+adOmP9UJX9dixCGgTpWd/tWmOA97uTIGFwvOdSO6qqIjN91bA4PPUz7/UM8gshOax9US6VJVe6U7om6rpudIp/vlW0B0SgTZn2kP+F2AAw6cPzxGbmzkAAAAASUVORK5CYII="
					>
				</div>
			</info-bubble>
		`}),i=s({tag:"option-toggle",innerHTML:"<option>Clockwise</option><option>Counter-clockwise</option>",attributes:{"selected-name":Xa(r.winding),"selected-value":Xa(r.winding)},onClick:()=>{const A=h();r.reverseWinding(),A.history.addState(`Toggled path winding to ${Xa(r.winding)}`),A.publish("currentPath",r)}}),o=hn(r),x=W0(r);return R(e,[t,n,a,i,o,x]),R(e,Or()),R(e,dx()),e}function Xa(r){let e="Unknown";return r>0&&(e="Counter-clockwise"),r<0&&(e="Clockwise"),e}function TT(r){let e=s({tag:"div",className:"panel__card",innerHTML:`<h3>${r.shapes.length} selected paths</h3>`});return R(e,hn(r)),R(e,W0(r)),R(e,dx()),e}function hT(r){const e=h();let t=s({tag:"div",className:"panel__card",innerHTML:`<h3>Path point ${r.pointNumber+1} ${r.ident}</h3>`}),n=hn(r.p,"point"),a=K("point type"),i=s();R(i,[ja("symmetric",r.type==="symmetric",()=>{r.type="symmetric",r.makeSymmetric(),e.publish("currentPathPoint",r)}),ja("flat",r.type==="flat",()=>{r.type="flat",r.makeFlat(),e.publish("currentPathPoint",r)}),ja("corner",r.type==="corner",()=>{r.type="corner",e.publish("currentPathPoint",r)})]),e.subscribe({topic:"currentPathPoint",subscriberID:"pointTypeButtons",callback:A=>{document.getElementById(`pointTypeButton-${A.type}`)&&(document.getElementById("pointTypeButton-symmetric").removeAttribute("selected"),document.getElementById("pointTypeButton-flat").removeAttribute("selected"),document.getElementById("pointTypeButton-corner").removeAttribute("selected"),document.getElementById(`pointTypeButton-${A.type}`).setAttribute("selected","")),Ea("h1",A),Ea("h2",A)}});let o=s({id:"h1Group",className:"span-all-columns"});R(o,so("h1",r));let x=s({id:"h2Group",className:"span-all-columns"});return R(x,so("h2",r)),R(t,n),R(t,[a,i]),R(t,[o,x]),R(t,Or()),R(t,px()),t}function so(r="h1",e){let t=s({className:"pre-checkbox"}),n=lt(e[r],"use","currentPathPoint");e.type!=="corner"&&n.setAttribute("disabled",""),R(t,[n,s({tag:"h4",content:`Use handle ${r.charAt(1)}`})]);let a=s({id:`${r}InputGroup`,style:`display: ${e[r].use?"grid":"none"}`}),i=hn(e[r],r);return R(a,i),h().subscribe({topic:"currentPathPoint",subscriberID:`controlPointInputGroup.${r}`,callback:o=>{o.type==="symmetric"&&o.makeSymmetric(r),o.type==="flat"&&o.makeFlat(r),Ea("h1",o),Ea("h2",o)}}),[t,a]}function Ea(r="h1",e){let t=e;e.objType==="ControlPoint"&&(t=e.parent);let n=document.getElementById(`${r}Group`);if(n){let a=t[r].use,i=n.querySelector("input");if(i.removeAttribute("checked"),i.removeAttribute("disabled"),a){i.setAttribute("checked",""),t.type!=="corner"&&i.setAttribute("disabled","");let o=document.getElementById(`${r}InputGroup`);o.style.display="grid",o.querySelectorAll("input-number")[0].setAttribute("value",t[r].x),o.querySelectorAll("input-number")[1].setAttribute("value",t[r].y)}}}function IT(r){let e=s({tag:"div",className:"panel__card",innerHTML:`<h3>${r.pathPoints.length} selected path points</h3>`});return R(e,px()),e}function ja(r,e,t){let n=oe.gray.l40,a=s({tag:"button",className:"pointTypeButton",id:`pointTypeButton-${r}`,attributes:{title:`point type: ${r}`}});a.addEventListener("click",t),e&&a.setAttribute("selected","");let i=`
	<svg version="1.1"
		xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
		x="0" y="0" width="20" height="20" viewBox="0 0 20 20" enable-background="new 0 0 20 20">
		<g fill="${n}">
		<rect x="8" y="8" width="1" height="4"/>
		<rect x="11" y="8" width="1" height="4"/>
		<rect x="8" y="8" width="4" height="1"/>
		<rect x="8" y="11" width="4" height="1"/>
		<rect x="4" y="4" width="1" height="1"/>
		<rect x="5" y="5" width="1" height="1"/>
		<rect x="6" y="6" width="1" height="1"/>
		<rect x="7" y="7" width="1" height="1"/>
		<circle cx="3" cy="3" r="1.5"/>
	`;switch(r){case"corner":i+=`
			<rect x="7" y="12" width="1" height="1"/>
			<rect x="6" y="13" width="1" height="1"/>
			<rect x="5" y="14" width="1" height="1"/>
			<rect x="4" y="15" width="1" height="1"/>
			<circle cx="3" cy="17" r="1.5"/>
			`;break;case"symmetric":i+=`
			<rect x="12" y="12" width="1" height="1"/>
			<rect x="13" y="13" width="1" height="1"/>
			<rect x="14" y="14" width="1" height="1"/>
			<rect x="15" y="15" width="1" height="1"/>
			<circle cx="17" cy="17" r="1.5"/>
			`;break;case"flat":i+=`
			<rect x="12" y="12" width="1" height="1"/>
			<rect x="13" y="13" width="1" height="1"/>
			<circle cx="15" cy="15" r="1.5"/>
			`;break}return i+="</g></svg>",a.innerHTML=i,a}function dT(){const r=h();let e=[],t=r.multiSelect.points;if(t.length===1)e.push(hT(t.singleton));else if(t.length>1){let i=t.virtualShape;e.push(IT(i))}let n=r.multiSelect.shapes;n.length===1?n.singleton.objType==="ComponentInstance"?e.push(AT(n.singleton)):e.push(cT(n.singleton)):n.length>1&&t.length===0&&e.push(TT(n.virtualGlyph)),e.push(sT(r.selectedItem));const a=LT(r.selectedItem);return a&&e.push(a),r.subscribe({topic:"whichShapeIsSelected",subscriberID:"attributesPanel",callback:()=>{or()}}),r.subscribe({topic:"whichPathPointIsSelected",subscriberID:"attributesPanel",callback:()=>{or()}}),e}function pT(r){let e=s({tag:"div",className:"panel__card",innerHTML:"<h3>Kern Group</h3>"}),t=K("Value"),n=Fe(r,"value","currentKernGroup","input-number"),a=K("Left group"),i=Pt(r.leftGroup),o=K("Right group"),x=Pt(r.rightGroup);return R(e,[t,n,a,i,o,x]),R(e,Or()),R(e,kd()),e}function ST(){let r=s({tag:"div",className:"panel__card",innerHTML:"<h3>Other kern group actions</h3>"}),e=s({tag:"div",className:"panel__actions-area"});return Ze(e,_e("otherKernGroupActions")),r.appendChild(e),r}function CT(){const r=h();return Oe(r.project.kerning)<=0?[]:[pT(r.selectedKernGroup),ST()]}function la(r=50,e=!1,t=0,n=100,a=1){let i=s({className:"fancy-slider__wrapper"}),o=s({className:"fancy-slider__slider-readout",innerHTML:r}),x=s({tag:"input",attributes:{type:"range",value:r,style:`accent-color: hsl(${r+200}, 100%, 40%);`,min:t,max:n,step:a},className:"fancy-slider__bar"});return x.addEventListener("input",A=>{const E=parseInt(A.target.value);o.innerHTML=E,x.setAttribute("style",`accent-color: hsl(${E+200}, 100%, 40%);`),e&&e(E)}),R(i,[x,o]),i}function uT(){const r=h(),e=B();let t=s({tag:"div",className:"panel__card",innerHTML:"<h3>Characters</h3>"}),n=s({tag:"p",className:"spanAll",content:`Context characters are a small set of letters that are shown around
		the character you are currently editing.`});const a=e.settings.app.contextCharacters;let i=K("Show&nbsp;context&nbsp;characters&nbsp;&nbsp;"),o=Je(a,"showCharacters",()=>{h().autoFitView(),Lo()}),x=Fe(r.selectedItem,"contextCharacters","editCanvasView","input",["input"]);x.addEventListener("input",()=>h().autoFitView());let A=K("Transparency"),E=la(a.characterTransparency,d=>{a.characterTransparency=d,h().editCanvas.redraw()});x.classList.add("spanAll"),R(t,[n,x,Or(),i,o,A,E]);let l=s({tag:"div",className:"panel__card",innerHTML:`<h3>Guides and labels</h3>
	`}),c=K("Show guides and labels"),L=Je(a,"showGuides",Lo),T=K("Transparency"),I=la(a.guidesTransparency,d=>{a.guidesTransparency=d,h().editCanvas.redraw()});return R(l,[c,L,T,I]),[t,l,f1(!0)]}function Lo(){h().editCanvas.redraw()}class ii{constructor(e={}){this.objType="Guide",this.angle=e.angle===0?0:90,this.name=e.name,this.location=isNaN(parseInt(e.location))?200:parseInt(e.location),this.color=e.color||co,this.visible=!!e.visible}save(){let e={},t=this.name;return t!=="Horizontal guide"&&t!=="Vertical guide"&&t!=="Guide"&&(e.name=this.name),this.angle!==90&&(e.angle=this.angle),this.location!==200&&(e.location=this.location),this.color!==co&&(e.color=this.color),this.visible||(e.visible=this.visible),e}get name(){return this._name||(this.angle===90?this._name="Horizontal guide":this.angle===0?this._name="Vertical guide":this._name="Guide"),this._name}set name(e=!1){e||(this.angle===90?e="Horizontal guide":this.angle===0?e="Vertical guide":e="Guide"),this._name=e}}const co="rgb(127, 0, 255)",D0="rgb(227, 190, 171)",m0="rgb(212, 154, 125)",Qt="rgb(191, 106, 64)";function L1({iconName:r="default",iconOptions:e=!1,title:t="",disabled:n=!1,onClick:a=!1,id:i=!1}={}){let o=s({tag:"button",innerHTML:j[r](e),attributes:{title:t}});return a&&o.addEventListener("click",a),n&&o.setAttribute("disabled","disabled"),i&&o.setAttribute("id",i),o}let j={};function $(r){return`
		<svg
			version="1.1" viewBox="0 0 30 30"
			height="100%" width="100%"
			xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
		>
			${r}
		</svg>
	`}let F={darkFill:oe.gray.l25,lightFill:oe.gray.l85,blueOutline:oe.blue.l70,greenOutline:oe.green.l70,grayOutline:oe.gray.l70,purpleOutline:oe.purple.l40,redX:br.red};j.copy=()=>{let r="",e=F.blueOutline,t=F.grayOutline,n=F.darkFill;return r+=`
		<polygon fill="${n}" points="1,22 1,10.4 10.4,1 18,1 18,22"/>
		<path fill="${t}" d="M17,2v19H2V10.8L10.8,2H17 M19,0h-9L0,10v13h19V0L19,0z"/>
		<polygon fill="${n}" points="12,29 12,17.4 21.4,8 29,8 29,29"/>
		<path fill="${e}" d="M28,9v19H13V17.8L21.8,9H28 M30,7h-9L11,17v13h19V7L30,7z"/>
	`,$(r)};j.paste=()=>{let r="",e=F.blueOutline,t=F.darkFill;return r+=`
		<rect fill="${t}" x="5" y="7"	width="20" height="22"/>
		<path fill="${e}" d="M24,8v20H6V8H24 M26,6H4v24h22V6L26,6z"/>
		<path fill="${t}" d="M9,9V4h3V3c0-1.3,1.8-2,3-2s3,0.7,3,2v1h3v5H9z"/>
		<path fill="${e}" d="M15,2c0.9,0,2,0.5,2,1v2h2h1v3H10V5h1h2V3C13,2.5,14.1,2,15,2 M15,0c-1.7,0-4,1-4,3H8v7h14V3h-3C19,1,16.7,0,15,0L15,0z"/>
	`,$(r)};j.clearClipboard=()=>{let r="",e=F.blueOutline,t=F.darkFill,n=F.redX;return r+=`
		<rect fill="${t}" x="5" y="7"	width="20" height="22"/>
		<path fill="${e}" d="M24,8v20H6V8H24 M26,6H4v24h22V6L26,6z"/>
		<path fill="${t}" d="M9,9V4h3V3c0-1.3,1.8-2,3-2s3,0.7,3,2v1h3v5H9z"/>
		<path fill="${e}" d="M15,2c0.9,0,2,0.5,2,1v2h2h1v3H10V5h1h2V3C13,2.5,14.1,2,15,2 M15,0c-1.7,0-4,1-4,3H8v7h14V3h-3C19,1,16.7,0,15,0L15,0z"/>
		<path fill="${n}" d="M26.4,29c0.6,0.8,3.5-0.8,2.4-2.2c-2.4-3.1-8.6-9.6-11.5-11.9c-2.1-1.7-4.1-0.4-4.1-0.4S21,21.9,26.4,29z"/>
		<path fill="${n}" d="M17.2,28.8c-0.9,1.6-3.7-0.2-2.3-2c2.7-3.6,7.9-10.4,11.5-13c2.3-1.7,3.7-0.1,3.7-0.1S22.1,20.7,17.2,28.8z"/>
	`,$(r)};j.pastePathsFromAnotherGlyph=()=>{let r="",e=F.blueOutline,t=F.darkFill;return r+=`
		<rect fill="${t}" x="5" y="7"	width="20" height="22"/>
		<path fill="${e}" d="M24,8v20H6V8H24 M26,6H4v24h22V6L26,6z"/>
		<path fill="${t}" d="M9,9V4h3V3c0-1.3,1.8-2,3-2s3,0.7,3,2v1h3v5H9z"/>
		<path fill="${e}" d="M15,2c0.9,0,2,0.5,2,1v2h2h1v3H10V5h1h2V3C13,2.5,14.1,2,15,2 M15,0c-1.7,0-4,1-4,3H8v7h14V3h-3C19,1,16.7,0,15,0L15,0z"/>
		<path fill="${e}" d="M17.4,20.6h-4.8l-1,3h1.6v1.7H8v-1.7h1.6l3.6-10.2h-1.6V12h6.8v1.5h-1.7l3.7,10.2H22v1.7h-5.2v-1.7h1.7L17.4,20.6z M16.9,19.1l-1.8-5.6H15l-1.8,5.6H16.9z"/>
	`,$(r)};j.pastePathsFromAnotherProject=()=>{let r=F.lightFill,e=F.purpleOutline;const t=`
		<path fill="${r}" d="m11.5,1c4.817,0,7.471,0,8.986,1.514,1.514,1.515,1.514,4.168,1.514,8.986s0,7.471-1.514,8.985c-1.515,1.515-4.168,1.515-8.986,1.515s-7.471,0-8.985-1.515c-1.515-1.514-1.515-4.168-1.515-8.985s0-7.471,1.515-8.986c1.514-1.514,4.168-1.514,8.985-1.514"/>
		<path fill="${e}" d="m11.5,23c-5.084,0-7.886,0-9.692-1.808-1.808-1.808-1.808-4.608-1.808-9.692S0,3.615,1.808,1.808C3.614,0,6.416,0,11.5,0s7.886,0,9.692,1.808c1.808,1.808,1.808,4.608,1.808,9.692s0,7.885-1.808,9.692c-1.807,1.808-4.608,1.808-9.692,1.808Zm0-21c-4.55,0-7.057,0-8.278,1.222s-1.222,3.729-1.222,8.278,0,7.057,1.222,8.278,3.728,1.222,8.278,1.222,7.057,0,8.278-1.222,1.222-3.729,1.222-8.278,0-7.057-1.222-8.278-3.728-1.222-8.278-1.222Z"/>
		<rect fill="${e}" x="5" y="5" width="3" height="3"/>
		<path fill="${r}" d="m18.5,8c4.817,0,7.471,0,8.986,1.514,1.514,1.515,1.514,4.168,1.514,8.986s0,7.471-1.514,8.985c-1.515,1.515-4.168,1.515-8.986,1.515s-7.471,0-8.985-1.515c-1.515-1.514-1.515-4.168-1.515-8.985s0-7.471,1.515-8.986c1.514-1.514,4.168-1.514,8.985-1.514"/>
		<path fill="${e}" d="m28.192,8.808c-1.807-1.808-4.608-1.808-9.692-1.808-.176,0-.329,0-.5,0v-2.001h-3v2.033c-.735.022-1.389.068-2,.133v-2.166h-3v2.961c-.437.228-.841.495-1.192.847-.352.352-.618.756-.847,1.192h-2.961v3h2.166c-.065.611-.111,1.265-.133,2h-2.033v3h2.001c0,.171,0,.324,0,.5,0,5.084,0,7.885,1.808,9.692,1.807,1.808,4.608,1.808,9.692,1.808s7.886,0,9.692-1.808c1.808-1.808,1.808-4.608,1.808-9.692s0-7.885-1.808-9.692Zm-1.414,17.971c-1.222,1.222-3.728,1.222-8.278,1.222s-7.057,0-8.278-1.222-1.222-3.729-1.222-8.278,0-7.057,1.222-8.278,3.728-1.222,8.278-1.222,7.057,0,8.278,1.222,1.222,3.729,1.222,8.278,0,7.057-1.222,8.278Z"/>
		<path fill="${e}" d="m20.233,20h-3.467l-1.092,3h1.525v2h-5.2v-2h1.733l3.467-9h-1.733v-2h6.067v2h-1.733l3.467,9h1.733v2h-5.2v-2h1.517l-1.083-3Zm-.433-1l-1.3-4-1.3,4h2.6Z"/>
	`;return $(t)};j.addPath=function(r=!1){let e="",t=F.blueOutline,n=F.darkFill;return r&&(t=F.greenOutline,n=F.lightFill),e+=`
		<rect fill="${n}" x="1" y="1"	width="16" height="16"/>
		<path fill="${t}" d="M16,2v14H2V2H16 M18,0H0v18h18V0L18,0z"/>
	`,e+=`
		<rect x="21" y="15" fill="${t}" width="3" height="15"/>
		<rect x="15" y="21" fill="${t}" width="15" height="3"/>
	`,$(e)};j.undo=()=>{let r="",e=F.blueOutline,t=F.darkFill;return r+=`
		<path fill="${t}" d="M20.1,23c4.6-5,6.6-9.6,5.5-12.8C24.9,8.2,22.9,7,20,7c-5.9,0-8.8,5.3-8.9,5.5L10.9,13l2.4,4.1l-12,0.8l4-14.4l2.5,4.2l0.9-1.1c0,0,4-4.6,11.2-4.6c4.1,0,7.9,2.8,8.8,6.5C29.4,10.8,29.3,16.3,20.1,23z"/>
		<path fill="${e}" d="M20,3c3.1,0,6.9,2,7.8,5.7c0.5,2.1-0.1,4.4-1.6,6.7c0.7-2,0.9-3.9,0.3-5.5C25.7,7.4,23.3,6,20,6c-6.5,0-9.6,5.8-9.8,6.1l-0.5,1l0.6,1l1.3,2.2l-8.9,0.6L5.7,6l0.6,1l1.4,2.4l1.8-2.2C9.6,7.2,13.2,3,20,3 M20,1C12.2,1,8,6,8,6L5,1L0,19l15-1l-3-5c0,0,2.6-5,8-5c7.7,0,7.2,9.2-8,21C39.8,15,29.5,1,20,1L20,1z"/>
	`,$(r)};j.linkToGlyph=()=>{let r="",e=F.greenOutline;return r+=`
		<path fill="${e}" d="M18,8.8L8.8,18c-0.5,0.5-1.3,0.5-1.8,0s-0.5-1.3,0-1.8L16.2,7c0.5-0.5,1.3-0.5,1.8,0S18.5,8.3,18,8.8z"/>
		<path fill="${e}" d="M7.5,21.2c-1.1,1.1-2.8,1.8-4.1,0.5s-0.6-3,0.5-4.1l5.9-5.9c-1.8-0.5-3.8,0.1-5.5,1.8L2,15.7c-2.4,2.4-2.6,5.7-0.5,7.8s5.4,2,7.8-0.5l2.3-2.3c1.7-1.7,2.3-3.7,1.8-5.5L7.5,21.2z"/>
		<path fill="${e}" d="M21.2,7.5c1.1-1.1,1.8-2.8,0.5-4.1s-3-0.6-4.1,0.5l-5.9,5.9c-0.5-1.8,0.1-3.8,1.8-5.5L15.7,2c2.4-2.4,5.7-2.6,7.8-0.5s2,5.4-0.5,7.8l-2.3,2.3c-1.7,1.7-3.7,2.3-5.5,1.8L21.2,7.5z"/>
		<rect x="21" y="15" fill="${e}" width="3" height="15"/>
		<rect x="15" y="21" fill="${e}" width="15" height="3"/>
	`,$(r)};j.round=()=>{let r=F.redX,e=F.darkFill,t=`
		<path fill="${r}" d="M17.4,21.9c0.4,0.5,2-0.5,1.4-1.4c-1.3-1.9-4.8-5.9-6.5-7.3C11.1,12.2,10,13,10,13S14.4,17.5,17.4,21.9z"/>
		<path fill="${r}" d="M12.2,21.6c-0.5,1-2.1-0.1-1.3-1.2c1.5-2.2,4.4-6.4,6.5-7.9c1.3-1,2.1-0.1,2.1-0.1S14.9,16.7,12.2,21.6z"/>
		<path fill="${r}" d="M28,21.9c0.4,0.5,2-0.5,1.4-1.4c-1.3-1.9-4.8-5.9-6.5-7.3c-1.2-1-2.3-0.3-2.3-0.3S24.9,17.5,28,21.9z"/>
		<path fill="${r}" d="M22.7,21.6c-0.5,1-2.1-0.1-1.3-1.2c1.5-2.2,4.4-6.4,6.5-7.9c1.3-1,2.1-0.1,2.1-0.1S25.5,16.7,22.7,21.6z"/>
		<path fill="${e}" d="M2,20V9H0V7h4v13h2v2H0v-2H2z"/>
		<path fill="${e}" d="M7,22v-2h2v2H7z"/>
	`;return $(t)};j.flipVertical=()=>{let r="",e=F.blueOutline,t=F.grayOutline,n=F.darkFill;return r+=`
		<polygon fill="${n}" points="6.4,13 1,7.6 1,1 14.7,1 29,9.6 29,13"/>
		<path fill="${t}" d="M14.2,2L28,10.1V12H6.8L2,7.2V2h12 M15,0H0v8l6,6h24V9L15,0L15,0z"/>
		<polygon fill="${n}" points="1,29 1,22.4 6.4,17 29,17 29,20.4 14.7,29"/>
		<path fill="${e}" d="M28,18v1.9L14.4,28H2v-5.2L6.8,18H28 M30,16H6l-6,6v8h15l15-9V16L30,16z"/>
	`,$(r)};j.flipHorizontal=()=>{let r="",e=F.blueOutline,t=F.grayOutline,n=F.darkFill;return r+=`
		<polygon fill="${n}" points="1,29 1,15.3 9.6,1 13,1 13,23.6 7.6,29"/>
		<path fill="${t}" d="M12,2v21.2L7.2,28H2V15.6L10.1,2H12 M14,0H9L0,15v15h8l6-6V0L14,0z"/>
		<polygon fill="${n}" points="22.4,29 17,23.6 17,1 20.4,1 29,15.3 29,29"/>
		<path fill="${e}" d="M19.9,2L28,15.6V28h-5.2L18,23.2V2H19.9 M21,0h-5v24l6,6h8V15L21,0L21,0z"/>
	`,$(r)};j.exportGlyphSVG=()=>{let r=F.blueOutline,t=`
		<polygon fill="${F.darkFill}" points="3,8 3,30 27,30 27,0 11,0"/>
		<path fill="${r}" d="M9.2,19.9c-0.4,0.4-1,0.6-1.6,0.6c-0.7,0-1.3-0.2-1.8-0.7v0.6H4.9v-2.6h0.9v0.6c0.4,0.8,1,1.2,1.7,1.2 c0.4,0,0.7-0.1,0.9-0.3c0.2-0.2,0.4-0.5,0.4-0.9c0-0.3-0.1-0.6-0.3-0.7c-0.2-0.2-0.6-0.3-1.1-0.5c-0.6-0.2-1.1-0.3-1.4-0.5 c-0.3-0.2-0.6-0.4-0.7-0.7c-0.2-0.3-0.3-0.6-0.3-1c0-0.6,0.2-1.1,0.6-1.5C5.9,13.2,6.4,13,7,13c0.6,0,1.1,0.2,1.6,0.6v-0.5h0.9 v2.2H8.6v-0.5c-0.4-0.6-0.9-0.8-1.5-0.8c-0.4,0-0.7,0.1-0.9,0.3c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.2,0.1,0.4,0.2,0.5 c0.1,0.1,0.2,0.3,0.4,0.3c0.2,0.1,0.5,0.2,1,0.3c0.6,0.2,1.1,0.3,1.4,0.5c0.3,0.1,0.5,0.4,0.7,0.7c0.2,0.3,0.3,0.7,0.3,1.2 C9.9,19,9.7,19.5,9.2,19.9z"/>
		<path fill="${r}" d="M21.4,13c1,0,1.9,0.3,2.5,0.9v-0.8h0.9v2.4H24c-0.2-0.4-0.5-0.8-0.9-1.1c-0.4-0.3-0.9-0.5-1.5-0.5 c-0.8,0-1.4,0.3-1.9,0.8c-0.5,0.5-0.7,1.2-0.7,1.9c0,0.9,0.3,1.5,0.8,2.1c0.5,0.5,1.2,0.8,1.9,0.8c0.6,0,1.1-0.2,1.5-0.5 c0.5-0.3,0.7-0.7,0.8-1.3h-1.3v-0.9h2.6c0,0.1,0,0.2,0,0.3c0,1-0.3,1.8-1,2.4c-0.7,0.6-1.5,0.9-2.6,0.9c-1.3,0-2.3-0.4-2.9-1.1 c-0.6-0.7-1-1.6-1-2.6c0-1.1,0.3-2,1-2.7C19.4,13.4,20.3,13,21.4,13z"/>
		<polygon fill="${r}" points="14.1,18.9 15.9,14 15,14 15,13.1 17.8,13.1 17.8,14 16.9,14 14.5,20.4 13.5,20.4 11.1,14 10.2,14 10.2,13.1 13.1,13.1 13.1,14 12.2,14"/>
	`;return $(t)};j.deleteGlyph=()=>{let r=F.redX,t=`
		<path fill="${F.darkFill}" d="M20.2,18.5H10L7.8,25h3.5v3.6H0V25h3.5l7.8-21.8H7.8V0h14.6v3.2h-3.6l8,21.8H30v3.6H18.8V25h3.5L20.2,18.5zM19.2,15.2L15.4,3.2H15l-4,11.9H19.2z"/>
		<path fill="${r}" d="M26.4,29c0.6,0.8,3.5-0.8,2.4-2.2c-2.4-3.1-8.6-9.6-11.5-11.9c-2.1-1.7-4.1-0.4-4.1-0.4S21,21.9,26.4,29z"/>
		<path fill="${r}" d="M17.2,28.8c-0.9,1.6-3.7-0.2-2.3-2c2.7-3.6,7.9-10.4,11.5-13c2.3-1.7,3.7-0.1,3.7-0.1S22.1,20.7,17.2,28.8z"/>
	`;return $(t)};j.reverseWinding=()=>{let r="",e=F.blueOutline,t=F.grayOutline;return r+=`
		<path fill="${t}" d="M3.7,7.8V5L0,8.7l3.7,3.7V9.6c6.2,0,11.2,5,11.2,11.2h1.9C16.8,13.6,10.9,7.8,3.7,7.8z"/>
		<path fill="${e}" d="M25.2,22.3C25.2,10,15.2,0,3,0v3.2c10.5,0,19.1,8.6,19.1,19.1h-4.8l6.4,6.4l6.4-6.4H25.2z"/>
	`,$(r)};j.switchPathComponent=function(r=!1){let e="",t=F.blueOutline,n=F.greenOutline,a=F.darkFill,i=F.lightFill;return r&&(t=F.greenOutline,n=F.blueOutline,a=F.lightFill,i=F.darkFill),e+=`
	<polygon fill="${a}" points="5.1,21 1,17.2 1,1 3.4,1 10,11.3 10,21"/>
	<path fill="${t}" d="M2.9,2L9,11.6V20H5.5L2,16.7V2H2.9 M3.9,0H0v17.6L4.7,22H11V11L3.9,0L3.9,0z"/>
	<polygon fill="${i}" points="21.8,29 16,23.6 16,1 19.8,1 29,15.3 29,29"/>
	<path fill="${n}" d="M19.1,2L28,15.6V28h-5.8L17,23.1V2h2 M20.4,0H15v24l6.4,6H30V15L20.4,0L20.4,0z"/>
	`,$(e)};j.subtractUsingBottom=()=>{let r="",e=F.blueOutline,t=F.darkFill,n=F.lightFill;return r+=`
		<path fill="${t}" d="M11,29v-6c6.6,0,12-5.4,12-12h6v18H11z"/>
		<path fill="${e}" d="M28,12v16H12v-4c6.4-0.5,11.5-5.6,12-12H28 M30,10h-8.1c0,0.3,0.1,0.7,0.1,1c0,6.1-4.9,11-11,11c-0.3,0-0.7,0-1-0.1V30h20V10L30,10z"/>
		<circle fill="${n}" cx="11" cy="11" r="11"/>
	`,$(r)};j.subtractUsingTop=()=>{let r="",e=F.blueOutline,t=F.darkFill,n=F.lightFill;return r+=`
		<rect fill="${n}" x="11" y="11" width="19" height="19"/>
		<path fill="${t}" d="M10,21c-5-0.5-9-4.8-9-10C1,5.5,5.5,1,11,1c5.2,0,9.4,4,10,9H10V21z"/>
		<path fill="${e}" d="M11,2c4.3,0,7.9,3,8.8,7H11H9v2v8.8c-4-0.9-7-4.5-7-8.8C2,6,6,2,11,2 M11,0C4.9,0,0,4.9,0,11s4.9,11,11,11V11h11C22,4.9,17.1,0,11,0L11,0z"/>
	`,$(r)};j.combine=()=>{let r="",e=F.blueOutline,t=F.darkFill;return r+=`
		<path fill="${t}" d="M11,29v-8L10.1,21C4.9,20.5,1,16.2,1,11C1,5.5,5.5,1,11,1c5.2,0,9.5,3.9,10,9.1L21,11h8v18H11z"/>
		<path fill="${e}" d="M11,2c4.7,0,8.5,3.5,9,8.2l0.2,1.8h1.8H28v16H12v-6.1v-1.8L10.2,20C5.5,19.5,2,15.7,2,11C2,6,6,2,11,2M11,0C4.9,0,0,4.9,0,11c0,5.7,4.4,10.4,10,10.9V30h20V10h-8.1C21.4,4.4,16.7,0,11,0L11,0z"/>
	`,$(r)};j.deletePath=function(r=!1){let e="",t=F.redX,n=F.blueOutline,a=F.darkFill;return r&&(n=F.greenOutline,a=F.lightFill),e+=`
		<rect fill="${a}" x="1" y="1"	width="16" height="16"/>
		<path fill="${n}" d="M16,2v14H2V2H16 M18,0H0v18h18V0L18,0z"/>
	`,e+=`
		<path fill="${t}" d="M26.4,29c0.6,0.8,3.5-0.8,2.4-2.2c-2.4-3.1-8.6-9.6-11.5-11.9c-2.1-1.7-4.1-0.4-4.1-0.4S21,21.9,26.4,29z"/>
		<path fill="${t}" d="M17.2,28.8c-0.9,1.6-3.7-0.2-2.3-2c2.7-3.6,7.9-10.4,11.5-13c2.3-1.7,3.7-0.1,3.7-0.1S22.1,20.7,17.2,28.8z"/>
	`,$(e)};j.edit=()=>{let r="",e=F.blueOutline,t=F.darkFill;return r+=`
		<path fill="${e}" d="m28.643,1.357c-1.577-1.577-4.109-1.891-5.651-.349L4,20,0,29l1,1,9-4L28.992,7.008c1.542-1.542,1.228-4.074-.349-5.651Z"/>
		<path fill="${t}" d="m28.643,1.357C27.771.486,26.608,0,25.482,0,24.57,0,23.682.318,22.992,1.008L4,20,0,29l1,1,9-4L28.992,7.008c1.542-1.542,1.228-4.074-.349-5.651ZM6.268,20.561l15.793-15.793,3.172,3.172-15.793,15.793-3.172-3.172Zm-.662.752l3.082,3.082-5.548,2.466,2.466-5.548ZM27.577,5.594l-1.638,1.638-3.172-3.172,1.638-1.638c.281-.28.643-.423,1.076-.423.611,0,1.264.288,1.747.771.44.44.719,1.018.765,1.586.028.346-.021.842-.416,1.237Z"/>
	`,$(r)};j.delete=()=>{let r="",e=F.redX;return r+=`
		<path fill="${e}" d="m23.597,28.681c1.121,1.472,6.349-1.368,4.386-3.98C23.74,19.055,12.613,7.416,7.367,3.301,3.535.295,0,2.518,0,2.518c0,0,13.846,13.354,23.597,26.164Z"/>
		<path fill="${e}" d="m6.893,28.339c-1.703,2.813-6.56-.4-4.174-3.566C7.551,18.364,16.797,6.057,23.298,1.396c4.182-2.998,6.702-.235,6.702-.235,0,0-14.277,12.59-23.107,27.178Z"/>
	`,$(r)};j.createNewKernGroup=()=>{let r="",e=F.greenOutline,t=F.darkFill;return r+=`
		<path d="m16.306,19.001l-4.324-11.39h-1.593v-1.611h5.08v1.611h-1.487l3.278,8.641,3.19-8.641h-1.501v-1.611h4.941v1.611h-1.563l-4.235,11.39h-1.786Z" fill="${t}"/>
		<path d="m12.197,17.375l-3.58-9.75h1.57v-1.625H3.548v1.625h1.517l-3.493,9.75H0v1.625h5.116v-1.625h-1.578l.994-2.941h4.679l.966,2.941h-1.615v1.625h5.088v-1.625h-1.453Zm-7.181-4.463l1.751-5.287h.273l1.682,5.287h-3.705Z" fill="${t}"/>
		<polygon points="13 20.5 13 22.5 0 22.5 0 23.5 13 23.5 13 25.5 14 25.5 14 20.5 13 20.5" fill="${t}"/>
		<polygon points="24 2 10 2 10 0 9 0 9 5 10 5 10 3 24 3 24 2" fill="${t}"/>
		<rect x="21" y="15" width="3" height="15" fill="${e}"/>
		<rect x="21" y="15" width="3" height="15" transform="translate(45 0) rotate(90)" fill="${e}"/>
	`,$(r)};j.deleteSingleLetterPair=()=>{let r="",e=F.redX,t=F.darkFill;return r+=`
		<path d="m16.306,19.001l-4.324-11.39h-1.593v-1.611h5.08v1.611h-1.487l3.278,8.641,3.19-8.641h-1.501v-1.611h4.941v1.611h-1.563l-4.235,11.39h-1.786Z" fill="${t}"/>
		<path d="m12.197,17.375l-3.58-9.75h1.57v-1.625H3.548v1.625h1.517l-3.493,9.75H0v1.625h5.116v-1.625h-1.578l.994-2.941h4.679l.966,2.941h-1.615v1.625h5.088v-1.625h-1.453Zm-7.181-4.463l1.751-5.287h.273l1.682,5.287h-3.705Z" fill="${t}"/>
		<path d="m26.428,29.033c.625.821,3.542-.763,2.447-2.22-2.367-3.149-8.574-9.642-11.5-11.938-2.138-1.677-4.11-.437-4.11-.437,0,0,7.723,7.449,13.163,14.595Z" fill="${e}"/>
		<path d="m17.111,28.842c-.95,1.569-3.659-.223-2.328-1.989,2.695-3.575,7.853-10.44,11.479-13.04,2.333-1.673,3.739-.131,3.739-.131,0,0-7.964,7.023-12.889,15.16Z" fill="${e}"/>
	`,$(r)};j.findSingleLetterPair=()=>{let r="",e=F.blueOutline,t=F.darkFill;return r+=`
		<path d="m16.306,19.001l-4.324-11.39h-1.593v-1.611h5.08v1.611h-1.487l3.278,8.641,3.19-8.641h-1.501v-1.611h4.941v1.611h-1.563l-4.235,11.39h-1.786Z" fill="${t}"/>
		<path d="m12.197,17.375l-3.58-9.75h1.57v-1.625H3.548v1.625h1.517l-3.493,9.75H0v1.625h5.116v-1.625h-1.578l.994-2.941h4.679l.966,2.941h-1.615v1.625h5.088v-1.625h-1.453Zm-7.181-4.463l1.751-5.287h.273l1.682,5.287h-3.705Z" fill="${t}"/>
		<path d="m30,28l-5.154-5.154c.728-1.104,1.154-2.425,1.154-3.846,0-3.866-3.134-7-7-7s-7,3.134-7,7,3.134,7,7,7c1.421,0,2.742-.426,3.846-1.154l5.154,5.154,2-2Zm-15.5-9c0-2.481,2.019-4.5,4.5-4.5s4.5,2.019,4.5,4.5-2.019,4.5-4.5,4.5-4.5-2.019-4.5-4.5Z" fill="${e}"/>
	`,$(r)};j.moveLayerDown=()=>{let r="",e=F.blueOutline,t=F.darkFill;return r+=`
		<rect fill="${e}" x="23" y="21" width="2" height="7"/>
		<path fill="${e}" d="M20,26h8l-4,4C24,30,19.9,25.9,20,26z"/>
		<polygon fill="${e}" points="15,17 5.4,12.5 0,15 15,22 30,15 24.6,12.5"/>
		<polygon fill="${t}" points="15,14 0,7 15,0 30,7"/>
	`,$(r)};j.moveLayerUp=()=>{let r="",e=F.blueOutline,t=F.darkFill;return r+=`
		<rect fill="${e}" x="23" y="23" width="2" height="7"/>
		<path fill="${e}" d="M20,25h8l-4-4C24,21,19.9,25.1,20,25z"/>
		<polygon fill="${t}" points="15,17 5.4,12.5 0,15 15,22 30,15 24.6,12.5"/>
		<polygon fill="${e}" points="15,14 0,7 15,0 30,7"/>
	`,$(r)};j.align=function(r){let e="",t=F.blueOutline,n=F.darkFill;switch(r){case"bottom":e+=`
				<rect fill="${n}" x="1" y="21" width="6" height="8"/>
				<path fill="${t}" d="M6,22v6H2v-6H6 M8,20H0v10h8V20L8,20z"/>
				<rect fill="${n}" x="12" y="5" width="6" height="24"/>
				<path fill="${t}" d="M17,6v22h-4V6H17 M19,4h-8v26h8V4L19,4z"/>
				<rect fill="${n}" x="23" y="15" width="6" height="14"/>
				<path fill="${t}" d="M28,16v12h-4V16H28 M30,14h-8v16h8V14L30,14z"/>
			`;break;case"middle":e+=`
				<rect fill="${n}" x="1" y="11" width="6" height="8"/>
				<path fill="${t}" d="M6,12v6H2v-6H6 M8,10H0v10h8V10L8,10z"/>
				<rect fill="${n}" x="12" y="3" width="6" height="24"/>
				<path fill="${t}" d="M17,4v22h-4V4H17 M19,2h-8v26h8V2L19,2z"/>
				<rect fill="${n}" x="23" y="8" width="6" height="14"/>
				<path fill="${t}" d="M28,9v12h-4V9H28 M30,7h-8v16h8V7L30,7z"/>
			`;break;case"top":e+=`
				<rect fill="${n}" x="1" y="1" width="6" height="8"/>
				<path fill="${t}" d="M6,2v6H2V2H6 M8,0H0v10h8V0L8,0z"/>
				<rect fill="${n}" x="12" y="1" width="6" height="24"/>
				<path fill="${t}" d="M17,2v22h-4V2H17 M19,0h-8v26h8V0L19,0z"/>
				<rect fill="${n}" x="23" y="1" width="6" height="14"/>
				<path fill="${t}" d="M28,2v12h-4V2H28 M30,0h-8v16h8V0L30,0z"/>
			`;break;case"left":e+=`
				<rect fill="${n}" x="1" y="1" width="8" height="6"/>
				<path fill="${t}" d="M8,2v4H2V2H8 M10,0H0v8h10V0L10,0z"/>
				<rect fill="${n}" x="1" y="12" width="24" height="6"/>
				<path fill="${t}" d="M24,13v4H2v-4H24 M26,11H0v8h26V11L26,11z"/>
				<rect fill="${n}" x="1" y="23" width="14" height="6"/>
				<path fill="${t}" d="M14,24v4H2v-4H14 M16,22H0v8h16V22L16,22z"/>
			`;break;case"center":e+=`
				<rect fill="${n}" x="11" y="1" width="8" height="6"/>
				<path fill="${t}" d="M18,2v4h-6V2H18 M20,0H10v8h10V0L20,0z"/>
				<rect fill="${n}" x="3" y="12" width="24" height="6"/>
				<path fill="${t}" d="M26,13v4H4v-4H26 M28,11H2v8h26V11L28,11z"/>
				<rect fill="${n}" x="8" y="23" width="14" height="6"/>
				<path fill="${t}" d="M21,24v4H9v-4H21 M23,22H7v8h16V22L23,22z"/>
			`;break;case"right":e+=`
				<rect fill="${n}" x="21" y="1" width="8" height="6"/>
				<path fill="${t}" d="M28,2v4h-6V2H28 M30,0H20v8h10V0L30,0z"/>
				<rect fill="${n}" x="5" y="12" width="24" height="6"/>
				<path fill="${t}" d="M28,13v4H6v-4H28 M30,11H4v8h26V11L30,11z"/>
				<rect fill="${n}" x="15" y="23" width="14" height="6"/>
				<path fill="${t}" d="M28,24v4H16v-4H28 M30,22H14v8h16V22L30,22z"/>
			`;break}return $(e)};j.resetPathPoint=()=>{let r="",e=F.blueOutline,t=F.grayOutline;return r+=`
		<circle display="inline" fill="${t}" cx="20" cy="27" r="3"/>
		<circle display="inline" fill="${t}" cx="27" cy="13" r="3"/>
		<line display="inline" fill="none" stroke="${t}" stroke-miterlimit="10" x1="20" y1="27" x2="13" y2="13"/>
		<line display="inline" fill="none" stroke="${t}" stroke-miterlimit="10" x1="13" y1="13" x2="27" y2="13"/>
	`,r+=`
		<line stroke="${e}" fill="none" stroke-miterlimit="10" x1="4" y1="22" x2="22" y2="4"/>
		<rect fill="#FFFFFF" x="9.5" y="9.5" width="7" height="7"/>
		<path fill="${e}" d="M16,10v6h-6v-6H16 M17,9h-1h-6H9v1v6v1h1h6h1v-1v-6V9L17,9z"/>
		<circle fill="${e}" cx="3" cy="23" r="3"/>
		<circle fill="${e}" cx="23" cy="3" r="3"/>
	`,$(r)};j.deletePathPoint=()=>{let r="",e=F.blueOutline,t=F.redX;return r+=`
		<line stroke="${e}" fill="none" stroke-miterlimit="10" x1="4" y1="22" x2="22" y2="4"/>
		<rect fill="#FFFFFF" x="9.5" y="9.5" width="7" height="7"/>
		<path fill="${e}" d="M16,10v6h-6v-6H16 M17,9h-1h-6H9v1v6v1h1h6h1v-1v-6V9L17,9z"/>
		<circle fill="${e}" cx="3" cy="23" r="3"/>
		<circle fill="${e}" cx="23" cy="3" r="3"/>
	`,r+=`
		<path fill="${t}" d="M26.4,29c0.6,0.8,3.5-0.8,2.4-2.2c-2.4-3.1-8.6-9.6-11.5-11.9c-2.1-1.7-4.1-0.4-4.1-0.4S21,21.9,26.4,29z"/>
		<path fill="${t}" d="M17.2,28.8c-0.9,1.6-3.7-0.2-2.3-2c2.7-3.6,7.9-10.4,11.5-13c2.3-1.7,3.7-0.1,3.7-0.1S22.1,20.7,17.2,28.8z"/>';
	`,$(r)};j.insertPathPoint=()=>{let r="",e=F.blueOutline;return r+=`
		<line stroke="${e}" fill="none" stroke-miterlimit="10" x1="4" y1="22" x2="22" y2="4"/>
		<rect fill="#FFFFFF" x="9.5" y="9.5" width="7" height="7"/>
		<path fill="${e}" d="M16,10v6h-6v-6H16 M17,9h-1h-6H9v1v6v1h1h6h1v-1v-6V9L17,9z"/>
		<circle fill="${e}" cx="3" cy="23" r="3"/>
		<circle fill="${e}" cx="23" cy="3" r="3"/>
	`,r+=`
		<rect x="21" y="15" fill="${e}" width="3" height="15"/>
		<rect x="15" y="21" fill="${e}" width="15" height="3"/>';
	`,$(r)};j.selectNextPathPoint=()=>{let r="",e=F.blueOutline,t=F.grayOutline;return r+=`
		<rect x="22.5" y="11.5" width="7" height="7" fill="white"/>
		<path d="m29,12v6h-6v-6h6m1-1h-8v8h8v-8h0Z" fill="${e}"/>
		<path d="m19,15s-7-7-7-7v5h-6v4h6v5s7-7,7-7Z" fill="${t}"/>
		<rect y="13" width="3" height="4" fill="${t}"/>
	`,$(r)};j.selectPreviousPathPoint=()=>{let r="",e=F.blueOutline,t=F.grayOutline;return r+=`
		<rect x=".5" y="11.5" width="7" height="7" fill="white"/>
		<path d="m7,12v6H1v-6h6m1-1H0v8h8v-8h0Z" fill="${e}"/>
		<path d="m11,15s7-7,7-7v5h6v4h-6s0,5,0,5l-7-7Z" fill="${t}"/>
		<rect x="27" y="13" width="3" height="4" fill="${t}"/>
	`,$(r)};j.default=()=>{let r=`<rect width="30" height="30" fill="${F.greenOutline}"/>`;return $(r)};j.test=()=>{let r=`
		<path d="M28.05,23.82c-1.65-1.79-9.55-13.02-9.55-17.82V3h1c.28,0,.5-.72,.5-1s-.22-1-.5-1H10.5c-.28,0-.5,.72-.5,1s.22,1,.5,1h1v3c0,4.8-7.9,16.03-9.55,17.82-.58,.55-.95,1.32-.95,2.18,0,1.66,1.34,3,3,3H26c1.66,0,3-1.34,3-3,0-.86-.37-1.63-.95-2.18ZM13.5,6V3h3v3c0,2.76,2.01,6.95,4.25,10.72-3.27,1.69-5.6-.72-7.75-.72-.34,0-1.86-.31-4,1.15,2.34-3.88,4.5-8.28,4.5-11.15Zm3.5,20c-1.66,0-3-1.34-3-3s1.34-3,3-3,3,1.34,3,3-1.34,3-3,3Zm-6-7.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5-.67,1.5-1.5,1.5-1.5-.67-1.5-1.5Z" fill="${F.redX}"/>
		<circle cx="15" cy="14" r="1" fill="${F.redX}"/>
	`;return $(r)};function RT(){let r=s({className:"panel__card guides-card__view-options",innerHTML:"<h3>View options</h3>"});const e=B().settings.app.guides,t=e.systemShowGuides,n=e.customShowGuides;R(r,[Je(e,"drawGuidesOnTop",Ht),s({tag:"label",style:"grid-column: 2 / -1;",content:"Draw guides over shapes"})]);const a=Je(e,"systemShowGuides");a.addEventListener("change",()=>{h().navigate()}),R(r,[a,s({tag:"h4",content:"Key metrics guides"})]),t&&R(r,[s(),K("Transparency"),la(e.systemTransparency,x=>{e.systemTransparency=x,h().editCanvas.redraw()}),s(),K("Show labels"),Je(e,"systemShowLabels",Ht),Or()]);const i=Je(e,"customShowGuides");i.addEventListener("change",()=>{h().navigate()}),R(r,[i,s({tag:"h4",content:"Custom guides"})]),n&&R(r,[s(),K("Transparency"),la(e.customTransparency,x=>{e.customTransparency=x,h().editCanvas.redraw()}),s(),K("Show labels"),Je(e,"customShowLabels",Ht)]);let o=[r];return t&&o.push(gT()),n&&o.push(yT()),o}function Ht(){or(),h().editCanvas.redraw()}function gT(){let r=s({className:"panel__card guides-card__system",innerHTML:"<h3>Key metrics guides</h3>"});const e=B().settings.font,t=h().selectedItem.advanceWidth;return R(r,[ot("ascent","Ascent",e.ascent,m0),ot("capHeight","Cap height",e.capHeight,D0),ot("xHeight","X height",e.xHeight,D0),ot("baseline","Baseline","0",Qt),ot("descent","Descent",e.descent,m0),ot("leftSide","Left side","0",Qt),ot("rightSide","Right side",t,Qt)]),r}function ot(r,e,t="0000",n){const a=h().systemGuides,i=Je(a,r,A=>{const E=h();let l=E.project.settings.app.guides.systemGuides;A?l.includes(r)||l.push(r):l.includes(r)&&(l=l.filter(c=>c!==r)),E.editCanvas.redraw()});i.setAttribute("title","Show / hide guide"),i.setAttribute("style",`accent-color: ${n};`);let o=s({className:"guide-system-angle",innerHTML:rt({name:"command_horizontalBar",color:n})});o.setAttribute("title","Horizontal guideline"),(r==="leftSide"||r==="rightSide")&&(o.innerHTML=rt({name:"command_verticalBar",color:n}),o.setAttribute("title","Vertical guideline"));const x=s({className:"guide-system-value",content:t});return x.setAttribute("title",`Guide line position
These are based on this font's key metrics,
which you can edit on the Font Settings page.`),[i,K(e),o,x]}function yT(){let r=s({className:"panel__card guides-card__custom",innerHTML:"<h3>Custom guides</h3>"});const e=B().settings.app.guides.custom;e.length&&(e.forEach((n,a)=>{R(r,NT(n,a))}),r.appendChild(Or()));const t=s({tag:"fancy-button",attributes:{secondary:""},innerHTML:"Add a custom guide"});return t.addEventListener("click",()=>{B().settings.app.guides.custom.push(new ii({visible:!0,color:eA()})),Ht()}),r.appendChild(t),r}function NT(r,e){const t=Je(r,"visible",()=>{h().editCanvas.redraw()});t.setAttribute("style",`accent-color: ${r.color}`),t.setAttribute("title","Show / hide guide");const n=Fe(r,"name","editCanvasView","input"),a=L1({iconName:"delete",title:"Delete guide"});a.setAttribute("class","guide-delete-button"),a.addEventListener("click",()=>{B().settings.app.guides.custom.splice(e,1),Ht()});const i=s({tag:"input",className:"guide-color-button",title:"Change guide color",attributes:{type:"color",style:`background-color: ${r.color};`,value:l0(r.color)}});i.addEventListener("input",A=>{let E=cn(A.target.value),l=`rgb(${E.r},${E.g},${E.b})`;i.setAttribute("value",l0(l)),i.style.backgroundColor=l,t.style.accentColor=l,o.querySelector("g").setAttribute("fill",l);const c=B().settings.app.guides.custom[e];c.color=l,h().editCanvas.redraw()});const o=s({tag:"button",title:"Toggle vertical / horizontal",className:"guide-angle-button",innerHTML:rt({name:"command_verticalBar",color:r.color})});r.angle===90&&(o.innerHTML=rt({name:"command_horizontalBar",color:r.color})),o.addEventListener("click",()=>{const A=B().settings.app.guides.custom[e];A.angle===90?(A.angle=0,A.name=A.name.replace("Horizontal","Vertical")):(A.angle=90,A.name=A.name.replace("Vertical","Horizontal")),Ht()});const x=Fe(r,"location","editCanvasView","input-number");return x.setAttribute("title","Guide line position"),[t,n,a,i,o,x]}function DT(){const r=h();let e=s({className:"panel__card history-list"}),t=r.history.length,n=s({tag:"button",className:t>0?"button__call-to-action number":"number",innerHTML:`undo ${t}`,style:"max-width: 30%; grid-column: 1 / -1;"});e.appendChild(n),t>0?n.addEventListener("click",()=>{r.history.restoreState()}):(n.setAttribute("disabled",""),e.appendChild(s({tag:"h3",innerHTML:r.project.getItemName(r.selectedItemID,!0)})));let a="initial";return r.history.queue.forEach(i=>{if(i.title!=="_whole_project_change_post_state_"){i.itemID&&i.itemID!==a&&(e.appendChild(s({tag:"h3",innerHTML:r.project.getItemName(i.itemID,!0)})),a=i.itemID);let o=i.title;i.wholeProjectSave&&(o=`<strong>${i.title}</strong>`),e.appendChild(s({className:"history-list__title",innerHTML:o})),e.appendChild(s({className:"history-list__date number",innerHTML:new Date(i.timeStamp).toLocaleTimeString(),title:new Date(i.timeStamp).toLocaleString()}))}}),e.appendChild(s({className:"history-list__title history-list__initial-entry",innerHTML:"Initial state"})),e.appendChild(s({className:"history-list__date number history-list__initial-entry",innerHTML:new Date(r.history.initialTimeStamp).toLocaleTimeString()})),e}function mT(){let r=s({className:"panel__card full-width item-links__rows-area"});const e=h(),t=B();let a=e.selectedItem.shapes;if(M.newBasicPath){let i=M.newBasicPath,o=s();o.setAttribute("class","item-link__row layer-panel__new-path"),o.classList.add("layer-panel__selected"),o.appendChild(s({className:"item-link__thumbnail",innerHTML:t.makeItemThumbnail(i)})),o.appendChild(s({className:"item-link__title",innerHTML:i.name})),r.appendChild(o)}if(a.length>0)for(let i=a.length-1;i>=0;i--){let o=a[i],x=s({attributes:{"target-path-index":i}});o.objType==="ComponentInstance"?x.setAttribute("class","item-link__row layer-panel__component-row"):x.setAttribute("class","item-link__row layer-panel__path-row"),e.multiSelect.shapes.isSelected(o)&&x.classList.add("layer-panel__selected"),e.subscribe({topic:"whichShapeIsSelected",subscriberID:`layersPanel.item-link-row-${i}`,callback:()=>{let l=e.multiSelect.shapes.isSelected(o);x.classList.toggle("layer-panel__selected",l)}}),x.addEventListener("click",()=>{e.multiSelect.shapes.select(o),e.publish("whichShapeIsSelected",o)});const A=s({className:"item-link__thumbnail",attributes:{"target-path-index":i},innerHTML:t.makeItemThumbnail(o)});x.appendChild(A),x.appendChild(s({className:"item-link__title",innerHTML:`${o.name}`}));let E="Path";o.link&&(E=`Component instance&emsp;|&emsp;${t.getItem(o.link).name}`),x.appendChild(s({className:"item-link__subtitle",innerHTML:E})),r.appendChild(x)}else r.appendChild(s({content:'No paths exist yet.  You can create one with the New Path tools on the canvas, or by pressing "add new path" below.'}));return e.subscribe({topic:["currentPath","currentItem"],subscriberID:"layersPanel",callback:()=>{const i=h(),o=B();document.querySelectorAll(".item-link__thumbnail").forEach(A=>{const E=A.getAttribute("target-path-index");A.innerHTML=o.makeItemThumbnail(i.selectedItem.shapes[E])})}}),[r,OT()]}function OT(){const r=h();let e=s({className:"panel__card full-width",content:"<h3>Actions</h3>"}),t=s({tag:"div",className:"panel__actions-area"});Ze(t,_e("addShapeActions"));let n=r.multiSelect.shapes.members;return r.selectedItem.shapes.length>1&&n.length===1&&Ze(t,_e("layerActions")),R(e,t),e}function yn(){const r=h();let e=s(),t=r.nav.panel;return r.nav.page==="Components"&&Oe(r.project.components)<=0||r.nav.page==="Ligatures"&&Oe(r.project.ligatures)<=0||r.nav.page==="Kerning"&&Oe(r.project.kerning)<=0||(t==="Attributes"?(r.unsubscribe({idToRemove:"layersPanel"}),r.unsubscribe({idToRemove:"historyPanel"}),r.unsubscribe({idToRemove:"guidesPanel"}),r.unsubscribe({idToRemove:"contextCharactersPanel"}),r.nav.page==="Kerning"?R(e,CT()):R(e,dT())):t==="Layers"?(r.unsubscribe({idToRemove:"attributesPanel"}),r.unsubscribe({idToRemove:"historyPanel"}),r.unsubscribe({idToRemove:"guidesPanel"}),r.unsubscribe({idToRemove:"contextCharactersPanel"}),R(e,mT())):t==="Context characters"?(r.unsubscribe({idToRemove:"attributesPanel"}),r.unsubscribe({idToRemove:"layersPanel"}),r.unsubscribe({idToRemove:"historyPanel"}),r.unsubscribe({idToRemove:"guidesPanel"}),R(e,uT())):t==="History"?(r.unsubscribe({idToRemove:"attributesPanel"}),r.unsubscribe({idToRemove:"layersPanel"}),r.unsubscribe({idToRemove:"guidesPanel"}),r.unsubscribe({idToRemove:"contextCharactersPanel"}),R(e,DT())):t==="Guides"&&(r.unsubscribe({idToRemove:"attributesPanel"}),r.unsubscribe({idToRemove:"layersPanel"}),r.unsubscribe({idToRemove:"historyPanel"}),r.unsubscribe({idToRemove:"contextCharactersPanel"}),R(e,RT()))),e}function or(){let r=document.querySelector("#editor-page__panel");if(r){let e=yn();r.innerHTML="",r.appendChild(e)}}class wr extends pr{constructor({leftGroup:e=[],rightGroup:t=[],value:n=0}={}){super(),this.leftGroup=e,this.rightGroup=t,this.value=n,this.objType="KernGroup"}save(e=!1){const t={leftGroup:this.leftGroup.slice(),rightGroup:this.rightGroup.slice(),value:this._value};return e&&(t.objType=this.objType),t}print(e=0){let t="";for(let a=0;a<e;a++)t+="  ";let n=`${t}{${this.objType} 
`;return t+="  ",n+=`${t}leftGroup: ${JSON.stringify(this.leftGroup)}
`,n+=`${t}rightGroup: ${JSON.stringify(this.rightGroup)}
`,n+=`${t}value: ${this.value}
`,n+=`${t.substring(2)}}/${this.objType}`,n}get leftGroup(){return this._leftGroup||[]}get rightGroup(){return this._rightGroup||[]}get value(){return this._value||0}get name(){return`${this.leftGroupAsString} | ${this.rightGroupAsString}`}get leftGroupAsString(){let e="";return this.leftGroup&&(e=sr(this.leftGroup.join(""))),e}get rightGroupAsString(){let e="";return this.rightGroup&&(e=sr(this.rightGroup.join(""))),e}set leftGroup(e=[]){e=e.map(t=>Xe(t)),e=e.filter(xr),this.changed(),this._leftGroup=e}set rightGroup(e=[]){e=e.map(t=>Xe(t)),e=e.filter(xr),this.changed(),this._rightGroup=e}set value(e){this._value=parseInt(e)||0,this.changed()}}const BT=Object.freeze(Object.defineProperty({__proto__:null,KernGroup:wr},Symbol.toStringTag,{value:"Module"}));function HT(){const r=h(),e=r.selectedKernGroupID,a=s({tag:"div",id:"app__page",innerHTML:`
		<div class="editor__page">
			<div class="editor-page__left-area">
				<div class="editor-page__nav-area">
					${Pe({level:"l1",superTitle:"PAGE",title:"Kerning"})}
				</div>
				<div id="editor-page__panel"></div>
			</div>
			${e?`
		<div class="editor-page__tools-area"></div>
		<div class="editor-page__edit-canvas-wrapper"></div>
		<div class="editor-page__zoom-area"></div>
	`:'<div class="editor-page__edit-canvas-wrapper" style="grid-column: span 2; overflow-y: scroll;"></div>'}
		</div>
	`});let i=a.querySelector("#nav-button-l1");i.addEventListener("click",function(){be(i)});const o=a.querySelector(".editor-page__nav-area"),x=a.querySelector(".editor-page__edit-canvas-wrapper");if(!e)return R(x,FT()),o.style.display="block",i.style.width="100%",i.style.borderRadius="4px",a;const A=r.selectedKernGroup,E=Pe({level:"l2",superTitle:"EDITING",title:A.name}),l=Pe({level:"l3",superTitle:"PANEL",title:r.nav.panel});o.appendChild(O(E)),o.appendChild(O(l));const c=s({tag:"edit-canvas",id:"editor-page__edit-canvas",attributes:{"editing-item-id":r.selectedKernGroupID}});x.appendChild(c);let L=a.querySelector("#nav-button-l2");L.addEventListener("click",function(){be(L)}),r.subscribe({topic:"whichKernGroupIsSelected",subscriberID:"nav.kernChooserButton",callback:()=>{var y;r.selectedKernGroup&&(L.innerHTML=Ut((y=r.selectedKernGroup)==null?void 0:y.name,"EDITING"))}});let T=a.querySelector("#nav-button-l3");T.addEventListener("click",function(){be(T)});const I=a.querySelector("#editor-page__panel");I.appendChild(yn()),I.addEventListener("scroll",Br),r.subscribe({topic:["whichKernGroupIsSelected"],subscriberID:"nav.panelChooserButton",callback:()=>{or()}}),r.selectedTool="kern";let d=a.querySelector(".editor-page__tools-area");d.innerHTML="";let p=xI();p&&R(d,p);let S=a.querySelector(".editor-page__zoom-area");S.innerHTML="";let u=Fa();return u&&R(S,u),r.subscribe({topic:"whichKernGroupIsSelected",subscriberID:"editCanvas.selectedKernGroup",callback:y=>{a.querySelector("#editor-page__edit-canvas").setAttribute("editing-item-id",y)}}),a}function FT(){const r=s({className:"editor-page__first-run",innerHTML:`
			<h1>There are no kern pairs in your project</h1>
			<p>
				Kerning is an advanced feature of fonts that recognizes a pair of characters, then
				adjusts the spacing between them to some custom value. The default spacing between
				characters is zero - which is to say, the white space (side bearings) within each
				character are the only space shown.
			</p>
			<p>
				Some letter combinations, like <code>VA</code>
				as an example, if the default side bearing spacing
				is used, the letters visually look very far apart. Kerning can help the visual flow of
				character pairs look more well considered. Many character pairs may need either negative
				or positive kern values to make them "look right".
			</p>
			<h2>Class-based kerning</h2>
			<p>
				Font files encode kerning values as three pieces of information: a left character, a right
				character, and a horizontal adjustment value. Fonts with many characters can end up having
				a huge amount of kern pairs. Glyphr Studio uses a system called Class-based Kerning, where
				groups of characters with similar edges (like
					<code>V</code><code>v</code><code>W</code><code>w</code>
					)
				can be treated as a single left-hand group, and a group of right-hand characters (for example,
				<code>A</code><code>/</code>) can be treated as single group - which can be given a single value.
				When a font is exported, the permutations are saved as individual kern pairs. But, while
				editing, grouping common characters often simplifies the overall kerning process.
			</p>
		`}),e=s({tag:"fancy-button",innerHTML:"Create a new kern group",onClick:()=>sa(!1)});return r.appendChild(e),r}function fT(r,e,t){const n=oi(),a=B();return a.addItemByType(new wr({leftGroup:r,rightGroup:e,value:t}),"KernGroup",n),a.kerning[n]}function oi(r=B().kerning){let e=Oe(r);for(;r[`kern-${e}`];)e++;return`kern-${e}`}function sa(r=!1){const e=s({innerHTML:`
		<h2>${r?"Edit this":"Create a new"} kern group</h2>
		Specify which characters should be in the left-side group,
		the right-side group, then what distance in <code>Em</code>
		units should be used for the kern value.
		<br><br>

		<h3>Left group</h3>
		<input id="kerning__add-new-kern-group__left-group" type="text"
		value="${r?r.leftGroupAsString:""}"
		autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
		/>
		<br><br>
		<h3>Right group</h3>
		<input id="kerning__add-new-kern-group__right-group" type="text"
		value="${r?r.rightGroupAsString:""}"
		autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
		/>
		<br><br>
		<h3>Value</h3>
		<input id="kerning__add-new-kern-group__value" type="text"
			value="${r?r.value:""}"
			autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
		/>
		<br><br>
		<fancy-button disabled id="kerning__add-new-kern-group__submit-button">
			${r?"Save changes":"Add new kern group"}
		</fancy-button>
		`}),t=e.querySelector("#kerning__add-new-kern-group__submit-button"),n=e.querySelector("#kerning__add-new-kern-group__left-group"),a=e.querySelector("#kerning__add-new-kern-group__right-group"),i=e.querySelector("#kerning__add-new-kern-group__value");n.addEventListener("change",o),a.addEventListener("change",o),i.addEventListener("change",o),n.addEventListener("keyup",o),a.addEventListener("keyup",o),i.addEventListener("keyup",o),r&&(t.removeAttribute("disabled"),t.addEventListener("click",x));function o(){n.value!==""&&a.value!==""&&i.value?(t.removeAttribute("disabled"),t.addEventListener("click",x)):(t.setAttribute("disabled",""),t.removeEventListener("click",x))}function x(){const A=h();let E=en(n.value),l=en(a.value),c=parseInt(i.value);if(r)r.leftGroup=E,r.rightGroup=l,r.value=c,A.history.addState("Edited kern group: "+A.selectedKernGroupID),A.publish("currentKernGroup",A.selectedKernGroup),A.navigate(),z();else{const L=fT(E,l,c);typeof L=="string"?Ar(L):(A.selectedItemID=L.id,A.navigate(),A.history.addWholeProjectChangePostState(),z())}}nr(e,500)}function MT(){const r=s({innerHTML:`
		<h2>Find a letter pair</h2>
		Specify a pair of letters below, and search will return all the Kern Groups
		that contain that pair. Clicking on a search result will select that Kern Group
		behind the dialog box.
		<br><br>
		It is good to not have duplicate values for a letter pair - the value that actually
		gets used may not be the expected one.
		<br><br>

		<div class="list__two-column" style="max-width: 100px;">
			<div class="list__column-header">Left group letter</div>
			<div class="list__column-header">Right group letter</div>
			<input
				id="kerning__letter-pair__left-group" type="text" value=""
				autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="1"
				onclick="this.select();"
			/>
			<input
				id="kerning__letter-pair__right-group" type="text" value=""
				autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="1"
				onclick="this.select();"
			/>
		</div>
		<br>

		<fancy-button disabled id="kerning__letter-pair__search-button">
			Search
		</fancy-button>
		<br><br>
		<hr/>
		<br>
		<div id="kerning__letter-pair__results">
			<i>Search results...</i>
		</div>
		`}),e=r.querySelector("#kerning__letter-pair__left-group");e.addEventListener("change",jr),e.addEventListener("keyup",jr);const t=r.querySelector("#kerning__letter-pair__right-group");t.addEventListener("change",jr),t.addEventListener("keyup",jr),r.querySelector("#kerning__letter-pair__search-button").addEventListener("click",PT),nr(r,800)}function GT(){const r=s({innerHTML:`
		<h2>Delete letter pairs</h2>
		Specify a pair of letters below, and search will find and attempt to delete all
		the letter pairs from the applicable Kern Groups.
		<br><br>
		<b>Note</b>: This will only affect Kern Groups where either the left group or the right group has only one member. Kern Groups affect all possible permutations of left group / right group.
		Because of this, if a left group and a right group both have multiple members, including
		the specified letter pair, removing the letters from the letter pair would remove more
		than just the kern value for those two letters.
		<br><br>

		<div class="list__two-column" style="max-width: 100px;">
			<div class="list__column-header">Left group letter</div>
			<div class="list__column-header">Right group letter</div>
			<input
				id="kerning__letter-pair__left-group" type="text" value=""
				autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="1"
				onclick="this.select();"
			/>
			<input
				id="kerning__letter-pair__right-group" type="text" value=""
				autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="1"
				onclick="this.select();"
			/>
		</div>
		<br>

		<fancy-button disabled danger id="kerning__letter-pair__search-button">
			Find and delete
		</fancy-button>
		<div id="kerning__result-message"></div>
		`}),e=r.querySelector("#kerning__letter-pair__left-group");e.addEventListener("change",jr),e.addEventListener("keyup",jr);const t=r.querySelector("#kerning__letter-pair__right-group");t.addEventListener("change",jr),t.addEventListener("keyup",jr),r.querySelector("#kerning__letter-pair__search-button").addEventListener("click",bT),nr(r,800)}function jr(){const r=document.querySelector("#kerning__letter-pair__left-group"),e=document.querySelector("#kerning__letter-pair__right-group"),t=document.querySelector("#kerning__letter-pair__search-button");r.value.length&&e.value.length?t.removeAttribute("disabled"):t.setAttribute("disabled","")}function PT(){const r=document.querySelector("#kerning__letter-pair__left-group").value.charAt(0),e=document.querySelector("#kerning__letter-pair__right-group").value.charAt(0),t=B().kerning,n=[];Object.keys(t).forEach(i=>{t[i].leftGroup.includes(mr(r))&&t[i].rightGroup.includes(mr(e))&&n.push(i)});const a=document.querySelector("#kerning__letter-pair__results");if(a.innerHTML="",n.length){const i=h().selectedKernGroupID;n.forEach(o=>{let x=s1(o);x.addEventListener("click",()=>{const A=h();A.selectedItemID=o,A.history.addState(`Navigated to ${A.project.getItemName(o,!0)}`),document.querySelectorAll(".kern-group-chooser__row").forEach(l=>l.removeAttribute("selected")),x.setAttribute("selected","")}),o===i&&x.setAttribute("selected",""),a.appendChild(x)})}else a.innerHTML="<i>No Kern Groups exist with that letter pair</i>"}function bT(){const r=document.querySelector("#kerning__letter-pair__left-group").value.charAt(0),e=document.querySelector("#kerning__letter-pair__right-group").value.charAt(0),t=document.querySelector("#kerning__result-message");t.innerHTML="";const n=B().kerning;let a,i=[],o=[];Object.keys(n).forEach(x=>{n[x].leftGroup.includes(mr(r))&&n[x].rightGroup.includes(mr(e))&&(a=UT(r,e,x),a?o.push(x):i.push(x))}),i.length&&(t.innerHTML=`
			<br><br>
			<b>Warning</b><br>
			The following Kern Groups contain the specified letter pair, but
			the letters could not be removed because both the left group and
			the right group contain multiple members.
			<br><br>
			${i.join(", ")}
			<br><br>
			<hr>
		`),o.length>0?(t.innerHTML+=`
			<br>
			Successfully removed letter pair from Kern Group${o.length>1?"s:":":"}
			<br><br>
			${o.join(", ")}
		`,h().navigate()):i.length||(t.innerHTML+=`
				<br>
				<i>No Kern Groups with the specified letter pair was found.</i>
			`)}function UT(r="",e="",t=!1){let n={},a=mr(r),i=mr(e);const o=h();let x=!1;if(t){let A=o.project.getItem(t);A&&(n[t]=A)}else n=o.project.kerning;return Object.keys(n).forEach(A=>{let E=n[A].leftGroup,l=n[A].rightGroup;E.includes(a)&&l.includes(i)&&(E.length===1&&l.length===1?(o.deleteItem(A,o.project.kerning),x=!0):E.length===1?(l.splice(l.indexOf(i),1),x=!0):l.length===1&&(E.splice(E.indexOf(a),1),x=!0))}),x}function Pt(r){const e=s();return r.forEach(t=>{e.appendChild(vT(t))}),e}function vT(r){let e=sr(r),t=wt(r),n=r;return t&&(n=`${t}
${r}`),s({tag:"code",innerHTML:e,attributes:{title:n}})}const c1={},T1={},O0={};let An=0,st=0;async function YT(r){const e=Fn(),t=e.project,n=r.glyphs.glyphs,a=r.substitution.getLigatures("liga"),i=r.kerningPairs;st=Oe(n)+a.length+Oe(i);for(const o of Object.keys(n))await Qa(),wT(n[o],t);for(const o of a){await Qa();let x=!1;try{x=r.glyphs.get(o.by)}catch{console.warn(`Ligature import error: could not get ${o.by} (${o.sub})`)}WT({glyph:x,gsub:o.sub},r)}for(const o of Object.keys(i))await Qa(),kT(o,i[o]);KT(r,t),t.glyphs=c1,t.ligatures=T1,t.kerning=O0,Pa(e),e.selectedCharacterRange=zr("Basic Latin"),e.nav.page="Overview",e.navigate()}async function Qa(){Jr(`
			Importing glyph:
			<span class="progress-indicator__counter">${An}</span>
			 of
			<span class="progress-indicator__counter">${st}</span>
		`),await Mt()}function wT(r,e){const t=ie(r.unicode||0);if(t===!1){st--;return}const n=h1(r);if(!n){console.warn("Something went wrong with importing this glyph."),console.log(r),st--;return}const a=`glyph-${t}`;n.id=a,c1[a]=n,Qo(t)&&(e.settings.app.showNonCharPoints=!0),e.incrementRangeCountFor(t),An++}function h1(r){const e=r.advanceWidth;let t=r.path.toSVG(),n;return t?n=Aa(`<svg>${t}</svg>`):n=new Ae,n&&(n.advanceWidth=e),n}function WT(r,e){if(r!=null&&r.glyph){const t=h1(r.glyph);if(!t){console.warn("Something went wrong with importing this glyph."),console.log(r),st--;return}let n=[];if(r.gsub.forEach(i=>{var o;(o=e.glyphs.get(i))!=null&&o.unicode&&n.push(e.glyphs.get(i).unicode)}),r.gsub.length!==n.length){st--;return}t.gsub=n,t.objType="Ligature";const a=Nn(String.fromCodePoint(...n));t.id=a,T1[a]=t,An++}else st--}function kT(r,e){r=r.split(",");let t=ie(r[0]),n=ie(r[1]);if(r.length!==2){console.warn(`Something went wrong with importing this kern pair: ${JSON.stringify(r)} | ${e} `),An--;return}const a=new wr({leftGroup:[t],rightGroup:[n],value:e}),i=oi(O0);O0[i]=a,An++}function KT(r,e){const t=e.settings.font,n=r.tables.os2,a=me(r.names.fontFamily)||"My Font";e.settings.project.name=a,t.name=a,t.upm=1*r.unitsPerEm||t.upm,t.ascent=1*me(n.sTypoAscender)||t.ascent,t.descent=-1*Math.abs(me(n.sTypoDescender))||t.descent,t.capHeight=1*me(n.sCapHeight)||t.capHeight,t.xHeight=1*me(n.sxHeight)||t.xHeight,t.overshoot=t.upm>2e3?30:20,t.lineGap=1*me(n.sTypoLineGap)||t.lineGap,t.family=a.substring(0,31),t.panose=me(n.panose)||"0 0 0 0 0 0 0 0 0 0",t.version=me(r.tables.head.fontRevision)||me(r.version)||me("Version 0.1"),t.style=me(r.tables.name.fontSubfamily)||"Regular",t.copyright=me(r.tables.name.copyright)||"",t.trademark=me(r.tables.name.trademark)||"",t.designer=me(r.tables.name.designer)||"",t.designerURL=me(r.tables.name.designerURL)||"",t.manufacturer=me(r.tables.name.manufacturer)||"",t.manufacturerURL=me(r.tables.name.manufacturerURL)||"",t.license=me(r.tables.name.license)||"",t.licenseURL=me(r.tables.name.licenseURL)||"",t.description=me(r.tables.name.description)||""}function me(r){try{if(typeof r=="object"&&typeof r.en=="string")return r.en;if(Object.prototype.toString.call(r)==="[object Array]")return r.join(" ")}catch{return 0}}const B0=`{\r
  "settings": {\r
    "project": {\r
      "name": "Oblegg",\r
      "latestVersion": "2.1.2",\r
      "initialVersion": "2.1.2",\r
      "id": "g2_OBLEGG2",\r
      "characterRanges": [\r
        {\r
          "name": "Basic Latin",\r
          "begin": "0x20",\r
          "end": "0x7F"\r
        },\r
        {\r
          "name": "General Punctuation",\r
          "begin": "0x2000",\r
          "end": "0x206F"\r
        }\r
      ]\r
    },\r
    "app": {\r
      "savePreferences": false,\r
      "stopPageNavigation": true,\r
      "autoSave": true,\r
      "showNonCharPoints": false,\r
      "itemChooserPageSize": 256,\r
      "formatSaveFile": true,\r
      "moveShapesOnSVGDragDrop": true,\r
      "guides": {\r
        "drawGuidesOnTop": false,\r
        "systemShowGuides": true,\r
        "systemShowLabels": false,\r
        "systemTransparency": 70,\r
        "systemGuides": [\r
          "baseline",\r
          "leftSide",\r
          "rightSide"\r
        ],\r
        "customShowGuides": true,\r
        "customShowLabels": false,\r
        "customTransparency": 70,\r
        "custom": []\r
      },\r
      "contextCharacters": {\r
        "showCharacters": true,\r
        "characterTransparency": 20,\r
        "showGuides": true,\r
        "guidesTransparency": 70\r
      },\r
      "saveLivePreviews": true,\r
      "livePreviews": [\r
        {\r
          "text": "the five boxing wizards jump quickly"\r
        },\r
        {\r
          "fontSize": 128,\r
          "text": "pack my box with five dozen liquor waffle coffins."\r
        },\r
        {\r
          "fontSize": 28,\r
          "text": "{{scowl_10_short}}"\r
        }\r
      ],\r
      "previewText": false\r
    },\r
    "font": {\r
      "family": "Oblegg",\r
      "style": "Regular",\r
      "version": "1.0",\r
      "description": "Test font for Glyphr Studio v2",\r
      "panose": "0 0 0 0 0 0 0 0 0 0",\r
      "upm": 2048,\r
      "ascent": 1490,\r
      "descent": -430,\r
      "capHeight": 1490,\r
      "xHeight": 1020,\r
      "overshoot": 20,\r
      "lineGap": 250,\r
      "italicAngle": 0,\r
      "designer": "Matt LaGrandeur",\r
      "designerURL": "mattlag.com",\r
      "manufacturer": "Matt LaGrandeur",\r
      "manufacturerURL": "mattlag.com",\r
      "license": "OFL",\r
      "licenseURL": "",\r
      "copyright": "2023",\r
      "trademark": "",\r
      "variant": "normal",\r
      "weight": 400,\r
      "stretch": "normal",\r
      "stemv": 0,\r
      "stemh": 0,\r
      "slope": 0,\r
      "underlinePosition": -50,\r
      "underlineThickness": 10,\r
      "strikethroughPosition": 300,\r
      "strikethroughThickness": 10,\r
      "overlinePosition": 750,\r
      "overlineThickness": 10\r
    }\r
  },\r
  "glyphs": {\r
    "glyph-0x41": {\r
      "id": "glyph-0x41",\r
      "advanceWidth": 1252,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 15,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1207,"y": 174}},\r
              "h1": {"coord": {"x": 1210,"y": 174}},\r
              "h2": {"coord": {"x": 1257,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1113,"y": 174}},\r
              "h1": {"coord": {"x": 1063,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 1163,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 755,"y": 1316}},\r
              "h1": {"coord": {"x": 705,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 805,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 1316}},\r
              "h1": {"coord": {"x": 750,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 803,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 805,"y": 1321}},\r
              "h1": {"coord": {"x": 805,"y": 1318}},\r
              "h2": {"coord": {"x": 855,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 805,"y": 1485}},\r
              "h1": {"coord": {"x": 755,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 805,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 1490}},\r
              "h1": {"coord": {"x": 803,"y": 1490}},\r
              "h2": {"coord": {"x": 850,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 439,"y": 1490}},\r
              "h1": {"coord": {"x": 389,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 436,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 434,"y": 1485}},\r
              "h1": {"coord": {"x": 434,"y": 1488}},\r
              "h2": {"coord": {"x": 484,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 434,"y": 1321}},\r
              "h1": {"coord": {"x": 384,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 434,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 439,"y": 1316}},\r
              "h1": {"coord": {"x": 436,"y": 1316}},\r
              "h2": {"coord": {"x": 489,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 484,"y": 1316}},\r
              "h1": {"coord": {"x": 434,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 534,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 126,"y": 174}},\r
              "h1": {"coord": {"x": 76,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 176,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 0}},\r
              "h1": {"coord": {"x": 321,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 5}},\r
              "h1": {"coord": {"x": 376,"y": 2}},\r
              "h2": {"coord": {"x": 426,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 169}},\r
              "h1": {"coord": {"x": 326,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 174}},\r
              "h1": {"coord": {"x": 374,"y": 174}},\r
              "h2": {"coord": {"x": 421,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 289,"y": 174}},\r
              "h1": {"coord": {"x": 239,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 339,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 378,"y": 456}},\r
              "h1": {"coord": {"x": 328,"y": 456}, "use": false},\r
              "h2": {"coord": {"x": 428,"y": 456}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 851,"y": 456}},\r
              "h1": {"coord": {"x": 801,"y": 456}, "use": false},\r
              "h2": {"coord": {"x": 901,"y": 456}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 940,"y": 174}},\r
              "h1": {"coord": {"x": 890,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 990,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 872,"y": 174}},\r
              "h1": {"coord": {"x": 822,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 869,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 867,"y": 169}},\r
              "h1": {"coord": {"x": 867,"y": 172}},\r
              "h2": {"coord": {"x": 917,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 867,"y": 5}},\r
              "h1": {"coord": {"x": 817,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 867,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 872,"y": 0}},\r
              "h1": {"coord": {"x": 869,"y": 0}},\r
              "h2": {"coord": {"x": 922,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1207,"y": 0}},\r
              "h1": {"coord": {"x": 1157,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1210,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1212,"y": 5}},\r
              "h1": {"coord": {"x": 1212,"y": 2}},\r
              "h2": {"coord": {"x": 1262,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1212,"y": 169}},\r
              "h1": {"coord": {"x": 1162,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 1212,"y": 172}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -4,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 432,"y": 630}},\r
              "h1": {"coord": {"x": 382,"y": 630}, "use": false},\r
              "h2": {"coord": {"x": 482,"y": 630}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 614,"y": 1211}},\r
              "h1": {"coord": {"x": 564,"y": 1211}, "use": false},\r
              "h2": {"coord": {"x": 664,"y": 1211}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 797,"y": 630}},\r
              "h1": {"coord": {"x": 747,"y": 630}, "use": false},\r
              "h2": {"coord": {"x": 847,"y": 630}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x42": {\r
      "id": "glyph-0x42",\r
      "advanceWidth": 1052,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 7,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 832,"y": 783}},\r
              "h1": {"coord": {"x": 978,"y": 686}},\r
              "h2": {"coord": {"x": 906,"y": 862}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 940,"y": 1058}},\r
              "h1": {"coord": {"x": 940,"y": 969}},\r
              "h2": {"coord": {"x": 940,"y": 1180}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 578,"y": 1490}},\r
              "h1": {"coord": {"x": 907,"y": 1483}},\r
              "h2": {"coord": {"x": 628,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 578,"y": 1490}},\r
              "h1": {"coord": {"x": 528,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 628,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1323}},\r
              "h1": {"coord": {"x": -10,"y": 1323}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1320}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1318}},\r
              "h1": {"coord": {"x": 42,"y": 1318}},\r
              "h2": {"coord": {"x": 95,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 150,"y": 1318}},\r
              "h1": {"coord": {"x": 100,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 200,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 150,"y": 172}},\r
              "h1": {"coord": {"x": 100,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 200,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 172}},\r
              "h1": {"coord": {"x": -5,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 167}},\r
              "h1": {"coord": {"x": 40,"y": 170}},\r
              "h2": {"coord": {"x": 90,"y": 167}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 628,"y": 0}},\r
              "h1": {"coord": {"x": 578,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 938,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1012,"y": 396}},\r
              "h1": {"coord": {"x": 1012,"y": 230}},\r
              "h2": {"coord": {"x": 1012,"y": 489}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -6,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 565,"y": 1318}},\r
              "h1": {"coord": {"x": 515,"y": 1318}},\r
              "h2": {"coord": {"x": 732,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 796,"y": 1058}},\r
              "h1": {"coord": {"x": 796,"y": 1225}},\r
              "h2": {"coord": {"x": 796,"y": 938}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 566,"y": 840}},\r
              "h1": {"coord": {"x": 708,"y": 840}},\r
              "h2": {"coord": {"x": 616,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 322,"y": 840}},\r
              "h1": {"coord": {"x": 272,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 322,"y": 1318}},\r
              "h1": {"coord": {"x": 272,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 1318}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 3",\r
          "winding": -6,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 628,"y": 172}},\r
              "h1": {"coord": {"x": 774,"y": 172}},\r
              "h2": {"coord": {"x": 578,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 322,"y": 172}},\r
              "h1": {"coord": {"x": 272,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 322,"y": 665}},\r
              "h1": {"coord": {"x": 272,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 628,"y": 665}},\r
              "h1": {"coord": {"x": 578,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 799,"y": 665}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 864,"y": 396}},\r
              "h1": {"coord": {"x": 864,"y": 568}},\r
              "h2": {"coord": {"x": 864,"y": 273}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x43": {\r
      "id": "glyph-0x43",\r
      "advanceWidth": 1062,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 852,"y": 1256}},\r
              "h1": {"coord": {"x": 849,"y": 1256}},\r
              "h2": {"coord": {"x": 902,"y": 1256}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1017,"y": 1256}},\r
              "h1": {"coord": {"x": 967,"y": 1256}, "use": false},\r
              "h2": {"coord": {"x": 1020,"y": 1256}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1022,"y": 1261}},\r
              "h1": {"coord": {"x": 1022,"y": 1258}},\r
              "h2": {"coord": {"x": 1072,"y": 1261}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1022,"y": 1407}},\r
              "h1": {"coord": {"x": 972,"y": 1407}, "use": false},\r
              "h2": {"coord": {"x": 1022,"y": 1453}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 939,"y": 1490}},\r
              "h1": {"coord": {"x": 985,"y": 1490}},\r
              "h2": {"coord": {"x": 989,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 704,"y": 1490}},\r
              "h1": {"coord": {"x": 654,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 490,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 196,"y": 1230}},\r
              "h1": {"coord": {"x": 314,"y": 1400}},\r
              "h2": {"coord": {"x": 144,"y": 1155}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 78,"y": 965}},\r
              "h1": {"coord": {"x": 104,"y": 1066}},\r
              "h2": {"coord": {"x": 53,"y": 870}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 657}},\r
              "h1": {"coord": {"x": 40,"y": 766}},\r
              "h2": {"coord": {"x": 40,"y": 431}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 207,"y": 159}},\r
              "h1": {"coord": {"x": 95,"y": 268}},\r
              "h2": {"coord": {"x": 317,"y": 52}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 704,"y": 0}},\r
              "h1": {"coord": {"x": 479,"y": 0}},\r
              "h2": {"coord": {"x": 754,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 939,"y": 0}},\r
              "h1": {"coord": {"x": 889,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 985,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1022,"y": 83}},\r
              "h1": {"coord": {"x": 1022,"y": 37}},\r
              "h2": {"coord": {"x": 1072,"y": 83}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1022,"y": 224}},\r
              "h1": {"coord": {"x": 972,"y": 224}, "use": false},\r
              "h2": {"coord": {"x": 1022,"y": 227}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1017,"y": 229}},\r
              "h1": {"coord": {"x": 1020,"y": 229}},\r
              "h2": {"coord": {"x": 1067,"y": 229}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 852,"y": 229}},\r
              "h1": {"coord": {"x": 802,"y": 229}, "use": false},\r
              "h2": {"coord": {"x": 849,"y": 229}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 847,"y": 224}},\r
              "h1": {"coord": {"x": 847,"y": 227}},\r
              "h2": {"coord": {"x": 897,"y": 224}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 847,"y": 172}},\r
              "h1": {"coord": {"x": 797,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 897,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 704,"y": 172}},\r
              "h1": {"coord": {"x": 654,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 350,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": 657}},\r
              "h1": {"coord": {"x": 212,"y": 308}},\r
              "h2": {"coord": {"x": 212,"y": 847}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 337,"y": 1132}},\r
              "h1": {"coord": {"x": 256,"y": 1016}},\r
              "h2": {"coord": {"x": 423,"y": 1255}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 704,"y": 1318}},\r
              "h1": {"coord": {"x": 547,"y": 1318}},\r
              "h2": {"coord": {"x": 754,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 847,"y": 1318}},\r
              "h1": {"coord": {"x": 797,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 897,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 847,"y": 1261}},\r
              "h1": {"coord": {"x": 797,"y": 1261}, "use": false},\r
              "h2": {"coord": {"x": 847,"y": 1258}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x44": {\r
      "id": "glyph-0x44",\r
      "advanceWidth": 1167,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 463,"y": 0}},\r
              "h1": {"coord": {"x": 413,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 688,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 960,"y": 159}},\r
              "h1": {"coord": {"x": 850,"y": 52}},\r
              "h2": {"coord": {"x": 1072,"y": 268}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1127,"y": 657}},\r
              "h1": {"coord": {"x": 1127,"y": 431}},\r
              "h2": {"coord": {"x": 1127,"y": 766}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1090,"y": 965}},\r
              "h1": {"coord": {"x": 1115,"y": 870}},\r
              "h2": {"coord": {"x": 1064,"y": 1066}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 971,"y": 1230}},\r
              "h1": {"coord": {"x": 1023,"y": 1155}},\r
              "h2": {"coord": {"x": 853,"y": 1400}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 463,"y": 1490}},\r
              "h1": {"coord": {"x": 677,"y": 1490}},\r
              "h2": {"coord": {"x": 513,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1323}},\r
              "h1": {"coord": {"x": -10,"y": 1323}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1320}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1318}},\r
              "h1": {"coord": {"x": 42,"y": 1318}},\r
              "h2": {"coord": {"x": 95,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 148,"y": 1318}},\r
              "h1": {"coord": {"x": 98,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 198,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 148,"y": 172}},\r
              "h1": {"coord": {"x": 98,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 198,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 172}},\r
              "h1": {"coord": {"x": -5,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 167}},\r
              "h1": {"coord": {"x": 40,"y": 170}},\r
              "h2": {"coord": {"x": 90,"y": 167}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 320,"y": 1318}},\r
              "h1": {"coord": {"x": 270,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 370,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 463,"y": 1318}},\r
              "h1": {"coord": {"x": 413,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 620,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 830,"y": 1132}},\r
              "h1": {"coord": {"x": 744,"y": 1255}},\r
              "h2": {"coord": {"x": 911,"y": 1016}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 955,"y": 657}},\r
              "h1": {"coord": {"x": 955,"y": 847}},\r
              "h2": {"coord": {"x": 955,"y": 308}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 463,"y": 172}},\r
              "h1": {"coord": {"x": 817,"y": 172}},\r
              "h2": {"coord": {"x": 513,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 320,"y": 172}},\r
              "h1": {"coord": {"x": 270,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 370,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 320,"y": 1318}},\r
              "h1": {"coord": {"x": 270,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 370,"y": 1318}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x45": {\r
      "id": "glyph-0x45",\r
      "advanceWidth": 1001,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 13,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 787,"y": 1232}},\r
              "h1": {"coord": {"x": 737,"y": 1232}, "use": false},\r
              "h2": {"coord": {"x": 787,"y": 1229}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 792,"y": 1227}},\r
              "h1": {"coord": {"x": 789,"y": 1227}},\r
              "h2": {"coord": {"x": 842,"y": 1227}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 956,"y": 1227}},\r
              "h1": {"coord": {"x": 906,"y": 1227}, "use": false},\r
              "h2": {"coord": {"x": 959,"y": 1227}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 961,"y": 1232}},\r
              "h1": {"coord": {"x": 961,"y": 1229}},\r
              "h2": {"coord": {"x": 1011,"y": 1232}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 961,"y": 1490}},\r
              "h1": {"coord": {"x": 911,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1011,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 101,"y": 1316}},\r
              "h1": {"coord": {"x": 51,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 151,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 101,"y": 174}},\r
              "h1": {"coord": {"x": 51,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 151,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 961,"y": 0}},\r
              "h1": {"coord": {"x": 911,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1011,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 961,"y": 258}},\r
              "h1": {"coord": {"x": 911,"y": 258}, "use": false},\r
              "h2": {"coord": {"x": 961,"y": 261}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 956,"y": 263}},\r
              "h1": {"coord": {"x": 959,"y": 263}},\r
              "h2": {"coord": {"x": 1006,"y": 263}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 792,"y": 263}},\r
              "h1": {"coord": {"x": 742,"y": 263}, "use": false},\r
              "h2": {"coord": {"x": 789,"y": 263}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 787,"y": 258}},\r
              "h1": {"coord": {"x": 787,"y": 261}},\r
              "h2": {"coord": {"x": 837,"y": 258}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 787,"y": 174}},\r
              "h1": {"coord": {"x": 737,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 837,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 274,"y": 174}},\r
              "h1": {"coord": {"x": 224,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 324,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 274,"y": 665}},\r
              "h1": {"coord": {"x": 224,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 324,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 583,"y": 665}},\r
              "h1": {"coord": {"x": 533,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 586,"y": 665}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 588,"y": 670}},\r
              "h1": {"coord": {"x": 588,"y": 667}},\r
              "h2": {"coord": {"x": 638,"y": 670}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 588,"y": 835}},\r
              "h1": {"coord": {"x": 538,"y": 835}, "use": false},\r
              "h2": {"coord": {"x": 588,"y": 838}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 583,"y": 840}},\r
              "h1": {"coord": {"x": 586,"y": 840}},\r
              "h2": {"coord": {"x": 633,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 274,"y": 840}},\r
              "h1": {"coord": {"x": 224,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 324,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 274,"y": 1316}},\r
              "h1": {"coord": {"x": 224,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 324,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 787,"y": 1316}},\r
              "h1": {"coord": {"x": 737,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 837,"y": 1316}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x46": {\r
      "id": "glyph-0x46",\r
      "advanceWidth": 1003,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 13,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 0}},\r
              "h1": {"coord": {"x": 321,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 5}},\r
              "h1": {"coord": {"x": 376,"y": 2}},\r
              "h2": {"coord": {"x": 426,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 169}},\r
              "h1": {"coord": {"x": 326,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 174}},\r
              "h1": {"coord": {"x": 374,"y": 174}},\r
              "h2": {"coord": {"x": 421,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 276,"y": 174}},\r
              "h1": {"coord": {"x": 226,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 326,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 276,"y": 665}},\r
              "h1": {"coord": {"x": 226,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 326,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 665}},\r
              "h1": {"coord": {"x": 550,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 603,"y": 665}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 605,"y": 670}},\r
              "h1": {"coord": {"x": 605,"y": 667}},\r
              "h2": {"coord": {"x": 655,"y": 670}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 605,"y": 835}},\r
              "h1": {"coord": {"x": 555,"y": 835}, "use": false},\r
              "h2": {"coord": {"x": 605,"y": 838}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 840}},\r
              "h1": {"coord": {"x": 603,"y": 840}},\r
              "h2": {"coord": {"x": 650,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 276,"y": 840}},\r
              "h1": {"coord": {"x": 226,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 326,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 276,"y": 1316}},\r
              "h1": {"coord": {"x": 226,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 326,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 789,"y": 1316}},\r
              "h1": {"coord": {"x": 739,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 839,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 789,"y": 1232}},\r
              "h1": {"coord": {"x": 739,"y": 1232}, "use": false},\r
              "h2": {"coord": {"x": 789,"y": 1229}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 794,"y": 1227}},\r
              "h1": {"coord": {"x": 791,"y": 1227}},\r
              "h2": {"coord": {"x": 844,"y": 1227}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 958,"y": 1227}},\r
              "h1": {"coord": {"x": 908,"y": 1227}, "use": false},\r
              "h2": {"coord": {"x": 961,"y": 1227}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 963,"y": 1232}},\r
              "h1": {"coord": {"x": 963,"y": 1229}},\r
              "h2": {"coord": {"x": 1013,"y": 1232}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 963,"y": 1490}},\r
              "h1": {"coord": {"x": 913,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1013,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 103,"y": 1316}},\r
              "h1": {"coord": {"x": 53,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 153,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 103,"y": 174}},\r
              "h1": {"coord": {"x": 53,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 153,"y": 174}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x47": {\r
      "id": "glyph-0x47",\r
      "advanceWidth": 1299,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 9,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 650,"y": -20}},\r
              "h1": {"coord": {"x": 268,"y": -20}},\r
              "h2": {"coord": {"x": 830,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1084,"y": 128}},\r
              "h1": {"coord": {"x": 978,"y": 23}},\r
              "h2": {"coord": {"x": 1134,"y": 128}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1084,"y": 4}},\r
              "h1": {"coord": {"x": 1034,"y": 4}, "use": false},\r
              "h2": {"coord": {"x": 1084,"y": 1}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1089,"y": -1}},\r
              "h1": {"coord": {"x": 1086,"y": -1}},\r
              "h2": {"coord": {"x": 1139,"y": -1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1254,"y": -1}},\r
              "h1": {"coord": {"x": 1204,"y": -1}, "use": false},\r
              "h2": {"coord": {"x": 1257,"y": -1}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1259,"y": 4}},\r
              "h1": {"coord": {"x": 1259,"y": 1}},\r
              "h2": {"coord": {"x": 1309,"y": 4}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1259,"y": 625}},\r
              "h1": {"coord": {"x": 1209,"y": 625}, "use": false},\r
              "h2": {"coord": {"x": 1259,"y": 628}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1254,"y": 630}},\r
              "h1": {"coord": {"x": 1257,"y": 630}},\r
              "h2": {"coord": {"x": 1304,"y": 630}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 714,"y": 630}},\r
              "h1": {"coord": {"x": 664,"y": 630}, "use": false},\r
              "h2": {"coord": {"x": 711,"y": 630}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 709,"y": 625}},\r
              "h1": {"coord": {"x": 709,"y": 628}},\r
              "h2": {"coord": {"x": 759,"y": 625}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 709,"y": 460}},\r
              "h1": {"coord": {"x": 659,"y": 460}, "use": false},\r
              "h2": {"coord": {"x": 709,"y": 457}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 714,"y": 455}},\r
              "h1": {"coord": {"x": 711,"y": 455}},\r
              "h2": {"coord": {"x": 764,"y": 455}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1058,"y": 455}},\r
              "h1": {"coord": {"x": 1008,"y": 455}, "use": false},\r
              "h2": {"coord": {"x": 1017,"y": 291}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 158}},\r
              "h1": {"coord": {"x": 911,"y": 158}},\r
              "h2": {"coord": {"x": 304,"y": 158}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 218,"y": 684}},\r
              "h1": {"coord": {"x": 218,"y": 434}},\r
              "h2": {"coord": {"x": 218,"y": 997}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 1332}},\r
              "h1": {"coord": {"x": 295,"y": 1332}},\r
              "h2": {"coord": {"x": 859,"y": 1332}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1029,"y": 1054}},\r
              "h1": {"coord": {"x": 972,"y": 1215}},\r
              "h2": {"coord": {"x": 1079,"y": 1054}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1202,"y": 1095}},\r
              "h1": {"coord": {"x": 1152,"y": 1095}, "use": false},\r
              "h2": {"coord": {"x": 1130,"y": 1314}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 1510}},\r
              "h1": {"coord": {"x": 975,"y": 1510}},\r
              "h2": {"coord": {"x": 117,"y": 1510}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 684}},\r
              "h1": {"coord": {"x": 40,"y": 954}},\r
              "h2": {"coord": {"x": 40,"y": 198}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x48": {\r
      "id": "glyph-0x48",\r
      "advanceWidth": 1221,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 19,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 0}},\r
              "h1": {"coord": {"x": 321,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 5}},\r
              "h1": {"coord": {"x": 376,"y": 2}},\r
              "h2": {"coord": {"x": 426,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 169}},\r
              "h1": {"coord": {"x": 326,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 174}},\r
              "h1": {"coord": {"x": 374,"y": 174}},\r
              "h2": {"coord": {"x": 421,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 174}},\r
              "h1": {"coord": {"x": 242,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 665}},\r
              "h1": {"coord": {"x": 242,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 665}},\r
              "h1": {"coord": {"x": 879,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 174}},\r
              "h1": {"coord": {"x": 879,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 174}},\r
              "h1": {"coord": {"x": 800,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 847,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 845,"y": 169}},\r
              "h1": {"coord": {"x": 845,"y": 172}},\r
              "h2": {"coord": {"x": 895,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 845,"y": 5}},\r
              "h1": {"coord": {"x": 795,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 845,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 0}},\r
              "h1": {"coord": {"x": 847,"y": 0}},\r
              "h2": {"coord": {"x": 900,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1176,"y": 0}},\r
              "h1": {"coord": {"x": 1126,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1179,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1181,"y": 5}},\r
              "h1": {"coord": {"x": 1181,"y": 2}},\r
              "h2": {"coord": {"x": 1231,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1181,"y": 169}},\r
              "h1": {"coord": {"x": 1131,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 1181,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1176,"y": 174}},\r
              "h1": {"coord": {"x": 1179,"y": 174}},\r
              "h2": {"coord": {"x": 1226,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1102,"y": 174}},\r
              "h1": {"coord": {"x": 1052,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 1152,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1102,"y": 1316}},\r
              "h1": {"coord": {"x": 1052,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1152,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1176,"y": 1316}},\r
              "h1": {"coord": {"x": 1126,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1179,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1181,"y": 1321}},\r
              "h1": {"coord": {"x": 1181,"y": 1318}},\r
              "h2": {"coord": {"x": 1231,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1181,"y": 1485}},\r
              "h1": {"coord": {"x": 1131,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 1181,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1176,"y": 1490}},\r
              "h1": {"coord": {"x": 1179,"y": 1490}},\r
              "h2": {"coord": {"x": 1226,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 1490}},\r
              "h1": {"coord": {"x": 800,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 847,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 845,"y": 1485}},\r
              "h1": {"coord": {"x": 845,"y": 1488}},\r
              "h2": {"coord": {"x": 895,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 845,"y": 1321}},\r
              "h1": {"coord": {"x": 795,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 845,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 1316}},\r
              "h1": {"coord": {"x": 847,"y": 1316}},\r
              "h2": {"coord": {"x": 900,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 1316}},\r
              "h1": {"coord": {"x": 879,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 840}},\r
              "h1": {"coord": {"x": 879,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 840}},\r
              "h1": {"coord": {"x": 242,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 1316}},\r
              "h1": {"coord": {"x": 242,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 1316}},\r
              "h1": {"coord": {"x": 321,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 1321}},\r
              "h1": {"coord": {"x": 376,"y": 1318}},\r
              "h2": {"coord": {"x": 426,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 1485}},\r
              "h1": {"coord": {"x": 326,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 1490}},\r
              "h1": {"coord": {"x": 374,"y": 1490}},\r
              "h2": {"coord": {"x": 421,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119,"y": 1316}},\r
              "h1": {"coord": {"x": 69,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 169,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119,"y": 174}},\r
              "h1": {"coord": {"x": 69,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 169,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x49": {\r
      "id": "glyph-0x49",\r
      "advanceWidth": 1096,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1056,"y": 0}},\r
              "h1": {"coord": {"x": 1006,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1106,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1056,"y": 231}},\r
              "h1": {"coord": {"x": 1006,"y": 231}, "use": false},\r
              "h2": {"coord": {"x": 1056,"y": 234}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1051,"y": 236}},\r
              "h1": {"coord": {"x": 1054,"y": 236}},\r
              "h2": {"coord": {"x": 1101,"y": 236}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 887,"y": 236}},\r
              "h1": {"coord": {"x": 837,"y": 236}, "use": false},\r
              "h2": {"coord": {"x": 884,"y": 236}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 882,"y": 231}},\r
              "h1": {"coord": {"x": 882,"y": 234}},\r
              "h2": {"coord": {"x": 932,"y": 231}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 882,"y": 174}},\r
              "h1": {"coord": {"x": 832,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 932,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 629,"y": 174}},\r
              "h1": {"coord": {"x": 579,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 679,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 629,"y": 1316}},\r
              "h1": {"coord": {"x": 579,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 679,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 882,"y": 1316}},\r
              "h1": {"coord": {"x": 832,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 932,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 882,"y": 1256}},\r
              "h1": {"coord": {"x": 832,"y": 1256}, "use": false},\r
              "h2": {"coord": {"x": 882,"y": 1253}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 887,"y": 1251}},\r
              "h1": {"coord": {"x": 884,"y": 1251}},\r
              "h2": {"coord": {"x": 937,"y": 1251}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1051,"y": 1251}},\r
              "h1": {"coord": {"x": 1001,"y": 1251}, "use": false},\r
              "h2": {"coord": {"x": 1054,"y": 1251}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1056,"y": 1256}},\r
              "h1": {"coord": {"x": 1056,"y": 1253}},\r
              "h2": {"coord": {"x": 1106,"y": 1256}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1056,"y": 1490}},\r
              "h1": {"coord": {"x": 1006,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1106,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1490}},\r
              "h1": {"coord": {"x": -10,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1256}},\r
              "h1": {"coord": {"x": -10,"y": 1256}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1253}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1251}},\r
              "h1": {"coord": {"x": 42,"y": 1251}},\r
              "h2": {"coord": {"x": 95,"y": 1251}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 209,"y": 1251}},\r
              "h1": {"coord": {"x": 159,"y": 1251}, "use": false},\r
              "h2": {"coord": {"x": 212,"y": 1251}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 1256}},\r
              "h1": {"coord": {"x": 214,"y": 1253}},\r
              "h2": {"coord": {"x": 264,"y": 1256}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 1316}},\r
              "h1": {"coord": {"x": 164,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 264,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 455,"y": 1316}},\r
              "h1": {"coord": {"x": 405,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 505,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 455,"y": 174}},\r
              "h1": {"coord": {"x": 405,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 505,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 174}},\r
              "h1": {"coord": {"x": 164,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 264,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 231}},\r
              "h1": {"coord": {"x": 164,"y": 231}, "use": false},\r
              "h2": {"coord": {"x": 214,"y": 234}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 209,"y": 236}},\r
              "h1": {"coord": {"x": 212,"y": 236}},\r
              "h2": {"coord": {"x": 259,"y": 236}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 236}},\r
              "h1": {"coord": {"x": -5,"y": 236}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 236}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 231}},\r
              "h1": {"coord": {"x": 40,"y": 234}},\r
              "h2": {"coord": {"x": 90,"y": 231}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 0}},\r
              "h1": {"coord": {"x": -10,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 0}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4A": {\r
      "id": "glyph-0x4A",\r
      "advanceWidth": 1009,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 964,"y": 1490}},\r
              "h1": {"coord": {"x": 967,"y": 1490}},\r
              "h2": {"coord": {"x": 1014,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 216,"y": 1490}},\r
              "h1": {"coord": {"x": 166,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 213,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 211,"y": 1485}},\r
              "h1": {"coord": {"x": 211,"y": 1488}},\r
              "h2": {"coord": {"x": 261,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 211,"y": 1321}},\r
              "h1": {"coord": {"x": 161,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 211,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 216,"y": 1316}},\r
              "h1": {"coord": {"x": 213,"y": 1316}},\r
              "h2": {"coord": {"x": 266,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 747,"y": 1316}},\r
              "h1": {"coord": {"x": 697,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 797,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 747,"y": 710}},\r
              "h1": {"coord": {"x": 697,"y": 710}, "use": false},\r
              "h2": {"coord": {"x": 797,"y": 710}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 747,"y": 710}},\r
              "h1": {"coord": {"x": 697,"y": 710}, "use": false},\r
              "h2": {"coord": {"x": 747,"y": 701}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 748,"y": 684}},\r
              "h1": {"coord": {"x": 748,"y": 693}},\r
              "h2": {"coord": {"x": 748,"y": 438}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 314,"y": 154}},\r
              "h1": {"coord": {"x": 688,"y": 156}},\r
              "h2": {"coord": {"x": 364,"y": 154}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 314,"y": 154}},\r
              "h1": {"coord": {"x": 264,"y": 154}, "use": false},\r
              "h2": {"coord": {"x": 364,"y": 154}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 154}},\r
              "h1": {"coord": {"x": 164,"y": 154}, "use": false},\r
              "h2": {"coord": {"x": 264,"y": 154}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 233}},\r
              "h1": {"coord": {"x": 164,"y": 233}, "use": false},\r
              "h2": {"coord": {"x": 214,"y": 236}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 209,"y": 238}},\r
              "h1": {"coord": {"x": 212,"y": 238}},\r
              "h2": {"coord": {"x": 259,"y": 238}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 238}},\r
              "h1": {"coord": {"x": -5,"y": 238}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 238}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 233}},\r
              "h1": {"coord": {"x": 40,"y": 236}},\r
              "h2": {"coord": {"x": 90,"y": 233}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 63}},\r
              "h1": {"coord": {"x": -10,"y": 63}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 17}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 123,"y": -20}},\r
              "h1": {"coord": {"x": 77,"y": -20}},\r
              "h2": {"coord": {"x": 173,"y": -20}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 314,"y": -20}},\r
              "h1": {"coord": {"x": 264,"y": -20}, "use": false},\r
              "h2": {"coord": {"x": 364,"y": -20}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 314,"y": -20}},\r
              "h1": {"coord": {"x": 264,"y": -20}, "use": false},\r
              "h2": {"coord": {"x": 681,"y": -19}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 920,"y": 684}},\r
              "h1": {"coord": {"x": 920,"y": 166}},\r
              "h2": {"coord": {"x": 920,"y": 693}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 920,"y": 710}},\r
              "h1": {"coord": {"x": 920,"y": 701}},\r
              "h2": {"coord": {"x": 970,"y": 710}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 920,"y": 710}},\r
              "h1": {"coord": {"x": 870,"y": 710}, "use": false},\r
              "h2": {"coord": {"x": 970,"y": 710}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 920,"y": 1316}},\r
              "h1": {"coord": {"x": 870,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 970,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 964,"y": 1316}},\r
              "h1": {"coord": {"x": 914,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 967,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 1321}},\r
              "h1": {"coord": {"x": 969,"y": 1318}},\r
              "h2": {"coord": {"x": 1019,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 1485}},\r
              "h1": {"coord": {"x": 919,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 969,"y": 1488}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4B": {\r
      "id": "glyph-0x4B",\r
      "advanceWidth": 1100,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 18,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 5}},\r
              "h1": {"coord": {"x": 376,"y": 2}},\r
              "h2": {"coord": {"x": 426,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 169}},\r
              "h1": {"coord": {"x": 326,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 174}},\r
              "h1": {"coord": {"x": 374,"y": 174}},\r
              "h2": {"coord": {"x": 421,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 174}},\r
              "h1": {"coord": {"x": 242,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 665}},\r
              "h1": {"coord": {"x": 242,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 361,"y": 665}},\r
              "h1": {"coord": {"x": 311,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 411,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 778,"y": 174}},\r
              "h1": {"coord": {"x": 728,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 828,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 729,"y": 174}},\r
              "h1": {"coord": {"x": 679,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 726,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 724,"y": 169}},\r
              "h1": {"coord": {"x": 724,"y": 172}},\r
              "h2": {"coord": {"x": 774,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 724,"y": 5}},\r
              "h1": {"coord": {"x": 674,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 724,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 729,"y": 0}},\r
              "h1": {"coord": {"x": 726,"y": 0}},\r
              "h2": {"coord": {"x": 779,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1055,"y": 0}},\r
              "h1": {"coord": {"x": 1005,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1058,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1060,"y": 5}},\r
              "h1": {"coord": {"x": 1060,"y": 2}},\r
              "h2": {"coord": {"x": 1110,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1060,"y": 169}},\r
              "h1": {"coord": {"x": 1010,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 1060,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1055,"y": 174}},\r
              "h1": {"coord": {"x": 1058,"y": 174}},\r
              "h2": {"coord": {"x": 1105,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1004,"y": 174}},\r
              "h1": {"coord": {"x": 954,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 1054,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 475,"y": 796}},\r
              "h1": {"coord": {"x": 425,"y": 796}, "use": false},\r
              "h2": {"coord": {"x": 525,"y": 796}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 891,"y": 1316}},\r
              "h1": {"coord": {"x": 841,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 941,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 985,"y": 1316}},\r
              "h1": {"coord": {"x": 935,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 988,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 990,"y": 1321}},\r
              "h1": {"coord": {"x": 990,"y": 1318}},\r
              "h2": {"coord": {"x": 1040,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 990,"y": 1485}},\r
              "h1": {"coord": {"x": 940,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 990,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 985,"y": 1490}},\r
              "h1": {"coord": {"x": 988,"y": 1490}},\r
              "h2": {"coord": {"x": 1035,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 659,"y": 1490}},\r
              "h1": {"coord": {"x": 609,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 656,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 654,"y": 1485}},\r
              "h1": {"coord": {"x": 654,"y": 1488}},\r
              "h2": {"coord": {"x": 704,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 654,"y": 1321}},\r
              "h1": {"coord": {"x": 604,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 654,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 659,"y": 1316}},\r
              "h1": {"coord": {"x": 656,"y": 1316}},\r
              "h2": {"coord": {"x": 709,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 714,"y": 1316}},\r
              "h1": {"coord": {"x": 664,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 764,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 320,"y": 840}},\r
              "h1": {"coord": {"x": 270,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 370,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 840}},\r
              "h1": {"coord": {"x": 242,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 1316}},\r
              "h1": {"coord": {"x": 242,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 1316}},\r
              "h1": {"coord": {"x": 321,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 1321}},\r
              "h1": {"coord": {"x": 376,"y": 1318}},\r
              "h2": {"coord": {"x": 426,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 1485}},\r
              "h1": {"coord": {"x": 326,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 1490}},\r
              "h1": {"coord": {"x": 374,"y": 1490}},\r
              "h2": {"coord": {"x": 421,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119,"y": 1316}},\r
              "h1": {"coord": {"x": 69,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 169,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119,"y": 174}},\r
              "h1": {"coord": {"x": 69,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 169,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 0}},\r
              "h1": {"coord": {"x": 321,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 0}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4C": {\r
      "id": "glyph-0x4C",\r
      "advanceWidth": 1003,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 963,"y": 256}},\r
              "h1": {"coord": {"x": 913,"y": 256}, "use": false},\r
              "h2": {"coord": {"x": 963,"y": 259}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 958,"y": 261}},\r
              "h1": {"coord": {"x": 961,"y": 261}},\r
              "h2": {"coord": {"x": 1008,"y": 261}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 794,"y": 261}},\r
              "h1": {"coord": {"x": 744,"y": 261}, "use": false},\r
              "h2": {"coord": {"x": 791,"y": 261}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 789,"y": 256}},\r
              "h1": {"coord": {"x": 789,"y": 259}},\r
              "h2": {"coord": {"x": 839,"y": 256}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 789,"y": 174}},\r
              "h1": {"coord": {"x": 739,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 839,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 276,"y": 174}},\r
              "h1": {"coord": {"x": 226,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 326,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 276,"y": 1316}},\r
              "h1": {"coord": {"x": 226,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 326,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 1316}},\r
              "h1": {"coord": {"x": 321,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 1321}},\r
              "h1": {"coord": {"x": 376,"y": 1318}},\r
              "h2": {"coord": {"x": 426,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 1485}},\r
              "h1": {"coord": {"x": 326,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 1490}},\r
              "h1": {"coord": {"x": 374,"y": 1490}},\r
              "h2": {"coord": {"x": 421,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 103,"y": 1316}},\r
              "h1": {"coord": {"x": 53,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 153,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 103,"y": 174}},\r
              "h1": {"coord": {"x": 53,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 153,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 963,"y": 0}},\r
              "h1": {"coord": {"x": 913,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1013,"y": 0}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4F": {\r
      "id": "glyph-0x4F",\r
      "advanceWidth": 1300,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 3,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 650,"y": 1510}},\r
              "h1": {"coord": {"x": 1187,"y": 1510}},\r
              "h2": {"coord": {"x": 117,"y": 1510}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 684}},\r
              "h1": {"coord": {"x": 40,"y": 954}},\r
              "h2": {"coord": {"x": 40,"y": 198}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": -20}},\r
              "h1": {"coord": {"x": 268,"y": -20}},\r
              "h2": {"coord": {"x": 1019,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1260,"y": 684}},\r
              "h1": {"coord": {"x": 1260,"y": 164}},\r
              "h2": {"coord": {"x": 1260,"y": 979}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 650,"y": 158}},\r
              "h1": {"coord": {"x": 1028,"y": 158}},\r
              "h2": {"coord": {"x": 304,"y": 158}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 218,"y": 684}},\r
              "h1": {"coord": {"x": 218,"y": 434}},\r
              "h2": {"coord": {"x": 218,"y": 997}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 1332}},\r
              "h1": {"coord": {"x": 295,"y": 1332}},\r
              "h2": {"coord": {"x": 1003,"y": 1332}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1081,"y": 684}},\r
              "h1": {"coord": {"x": 1081,"y": 997}},\r
              "h2": {"coord": {"x": 1081,"y": 437}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4E": {\r
      "id": "glyph-0x4E",\r
      "advanceWidth": 1221,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 13,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 0}},\r
              "h1": {"coord": {"x": 879,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1102,"y": 0}},\r
              "h1": {"coord": {"x": 1052,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1152,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1102,"y": 1315}},\r
              "h1": {"coord": {"x": 1052,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 1152,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1176,"y": 1315}},\r
              "h1": {"coord": {"x": 1126,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 1179,"y": 1315}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1181,"y": 1320}},\r
              "h1": {"coord": {"x": 1181,"y": 1317}},\r
              "h2": {"coord": {"x": 1231,"y": 1320}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1181,"y": 1484}},\r
              "h1": {"coord": {"x": 1131,"y": 1484}, "use": false},\r
              "h2": {"coord": {"x": 1181,"y": 1487}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1176,"y": 1489}},\r
              "h1": {"coord": {"x": 1179,"y": 1489}},\r
              "h2": {"coord": {"x": 1226,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 1489}},\r
              "h1": {"coord": {"x": 800,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 847,"y": 1489}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 845,"y": 1484}},\r
              "h1": {"coord": {"x": 845,"y": 1487}},\r
              "h2": {"coord": {"x": 895,"y": 1484}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 845,"y": 1320}},\r
              "h1": {"coord": {"x": 795,"y": 1320}, "use": false},\r
              "h2": {"coord": {"x": 845,"y": 1317}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 1315}},\r
              "h1": {"coord": {"x": 847,"y": 1315}},\r
              "h2": {"coord": {"x": 900,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 1315}},\r
              "h1": {"coord": {"x": 879,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 366}},\r
              "h1": {"coord": {"x": 879,"y": 366}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 366}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 297,"y": 1481}},\r
              "h1": {"coord": {"x": 247,"y": 1481}, "use": false},\r
              "h2": {"coord": {"x": 347,"y": 1481}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 297,"y": 1484}},\r
              "h1": {"coord": {"x": 247,"y": 1484}, "use": false},\r
              "h2": {"coord": {"x": 297,"y": 1487}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 1489}},\r
              "h1": {"coord": {"x": 295,"y": 1489}},\r
              "h2": {"coord": {"x": 343,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 1490}},\r
              "h1": {"coord": {"x": 242,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 291,"y": 1489}},\r
              "h1": {"coord": {"x": 241,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 341,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1489}},\r
              "h1": {"coord": {"x": -5,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1489}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1484}},\r
              "h1": {"coord": {"x": 40,"y": 1487}},\r
              "h2": {"coord": {"x": 90,"y": 1484}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1320}},\r
              "h1": {"coord": {"x": -10,"y": 1320}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1317}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1315}},\r
              "h1": {"coord": {"x": 42,"y": 1315}},\r
              "h2": {"coord": {"x": 95,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119,"y": 1315}},\r
              "h1": {"coord": {"x": 69,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 169,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119,"y": 174}},\r
              "h1": {"coord": {"x": 69,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 169,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 0}},\r
              "h1": {"coord": {"x": 321,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 5}},\r
              "h1": {"coord": {"x": 376,"y": 2}},\r
              "h2": {"coord": {"x": 426,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 169}},\r
              "h1": {"coord": {"x": 326,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 174}},\r
              "h1": {"coord": {"x": 374,"y": 174}},\r
              "h2": {"coord": {"x": 421,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 174}},\r
              "h1": {"coord": {"x": 242,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 1114}},\r
              "h1": {"coord": {"x": 242,"y": 1114}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 1114}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4D": {\r
      "id": "glyph-0x4D",\r
      "advanceWidth": 1336,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 15,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1291,"y": 1489}},\r
              "h1": {"coord": {"x": 1294,"y": 1489}},\r
              "h2": {"coord": {"x": 1341,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1048,"y": 1489}},\r
              "h1": {"coord": {"x": 998,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 1098,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1048,"y": 1489}},\r
              "h1": {"coord": {"x": 998,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 1098,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1047,"y": 1490}},\r
              "h1": {"coord": {"x": 997,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1097,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1046,"y": 1489}},\r
              "h1": {"coord": {"x": 996,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 1044,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 1484}},\r
              "h1": {"coord": {"x": 1043,"y": 1486}},\r
              "h2": {"coord": {"x": 1093,"y": 1484}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 1483}},\r
              "h1": {"coord": {"x": 993,"y": 1483}, "use": false},\r
              "h2": {"coord": {"x": 1093,"y": 1483}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 682,"y": 811}},\r
              "h1": {"coord": {"x": 632,"y": 811}, "use": false},\r
              "h2": {"coord": {"x": 732,"y": 811}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 1483}},\r
              "h1": {"coord": {"x": 243,"y": 1483}, "use": false},\r
              "h2": {"coord": {"x": 343,"y": 1483}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 1484}},\r
              "h1": {"coord": {"x": 243,"y": 1484}, "use": false},\r
              "h2": {"coord": {"x": 293,"y": 1486}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 290,"y": 1489}},\r
              "h1": {"coord": {"x": 292,"y": 1488}},\r
              "h2": {"coord": {"x": 340,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 289,"y": 1490}},\r
              "h1": {"coord": {"x": 239,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 339,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 288,"y": 1489}},\r
              "h1": {"coord": {"x": 238,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 338,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 288,"y": 1489}},\r
              "h1": {"coord": {"x": 238,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 338,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1489}},\r
              "h1": {"coord": {"x": -5,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1489}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1484}},\r
              "h1": {"coord": {"x": 40,"y": 1487}},\r
              "h2": {"coord": {"x": 90,"y": 1484}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1320}},\r
              "h1": {"coord": {"x": -10,"y": 1320}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1317}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1315}},\r
              "h1": {"coord": {"x": 42,"y": 1315}},\r
              "h2": {"coord": {"x": 95,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 120,"y": 1315}},\r
              "h1": {"coord": {"x": 70,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 170,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 120,"y": 174}},\r
              "h1": {"coord": {"x": 70,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 170,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 46,"y": 174}},\r
              "h1": {"coord": {"x": -4,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 43,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": 169}},\r
              "h1": {"coord": {"x": 41,"y": 172}},\r
              "h2": {"coord": {"x": 91,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": 5}},\r
              "h1": {"coord": {"x": -9,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 41,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 46,"y": 0}},\r
              "h1": {"coord": {"x": 43,"y": 0}},\r
              "h2": {"coord": {"x": 96,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 372,"y": 0}},\r
              "h1": {"coord": {"x": 322,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 375,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 377,"y": 5}},\r
              "h1": {"coord": {"x": 377,"y": 2}},\r
              "h2": {"coord": {"x": 427,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 377,"y": 169}},\r
              "h1": {"coord": {"x": 327,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 377,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 372,"y": 174}},\r
              "h1": {"coord": {"x": 375,"y": 174}},\r
              "h2": {"coord": {"x": 422,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 174}},\r
              "h1": {"coord": {"x": 243,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 343,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 1110}},\r
              "h1": {"coord": {"x": 243,"y": 1110}, "use": false},\r
              "h2": {"coord": {"x": 343,"y": 1110}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 678,"y": 451}},\r
              "h1": {"coord": {"x": 628,"y": 451}, "use": false},\r
              "h2": {"coord": {"x": 728,"y": 451}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 1103}},\r
              "h1": {"coord": {"x": 993,"y": 1103}, "use": false},\r
              "h2": {"coord": {"x": 1093,"y": 1103}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 174}},\r
              "h1": {"coord": {"x": 993,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 1093,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 964,"y": 174}},\r
              "h1": {"coord": {"x": 914,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 961,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 959,"y": 169}},\r
              "h1": {"coord": {"x": 959,"y": 172}},\r
              "h2": {"coord": {"x": 1009,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 959,"y": 5}},\r
              "h1": {"coord": {"x": 909,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 959,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 964,"y": 0}},\r
              "h1": {"coord": {"x": 961,"y": 0}},\r
              "h2": {"coord": {"x": 1014,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1290,"y": 0}},\r
              "h1": {"coord": {"x": 1240,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1293,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1295,"y": 5}},\r
              "h1": {"coord": {"x": 1295,"y": 2}},\r
              "h2": {"coord": {"x": 1345,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1295,"y": 169}},\r
              "h1": {"coord": {"x": 1245,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 1295,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1290,"y": 174}},\r
              "h1": {"coord": {"x": 1293,"y": 174}},\r
              "h2": {"coord": {"x": 1340,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1216,"y": 174}},\r
              "h1": {"coord": {"x": 1166,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 1266,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1216,"y": 1315}},\r
              "h1": {"coord": {"x": 1166,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 1266,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1291,"y": 1315}},\r
              "h1": {"coord": {"x": 1241,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 1294,"y": 1315}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1296,"y": 1320}},\r
              "h1": {"coord": {"x": 1296,"y": 1317}},\r
              "h2": {"coord": {"x": 1346,"y": 1320}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1296,"y": 1484}},\r
              "h1": {"coord": {"x": 1246,"y": 1484}, "use": false},\r
              "h2": {"coord": {"x": 1296,"y": 1487}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x50": {\r
      "id": "glyph-0x50",\r
      "advanceWidth": 994,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 7,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 573,"y": 666}},\r
              "h1": {"coord": {"x": 523,"y": 666}, "use": false},\r
              "h2": {"coord": {"x": 834,"y": 666}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 954,"y": 1059}},\r
              "h1": {"coord": {"x": 954,"y": 897}},\r
              "h2": {"coord": {"x": 954,"y": 1181}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 585,"y": 1490}},\r
              "h1": {"coord": {"x": 914,"y": 1483}},\r
              "h2": {"coord": {"x": 635,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 585,"y": 1490}},\r
              "h1": {"coord": {"x": 535,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 635,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 157,"y": 1316}},\r
              "h1": {"coord": {"x": 107,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 207,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 157,"y": 174}},\r
              "h1": {"coord": {"x": 107,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 207,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 422,"y": 0}},\r
              "h1": {"coord": {"x": 372,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 472,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": 1}},\r
              "h1": {"coord": {"x": 375,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 475,"y": 1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 426,"y": 1}},\r
              "h1": {"coord": {"x": 376,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 476,"y": 1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 426,"y": 2}},\r
              "h1": {"coord": {"x": 376,"y": 2}, "use": false},\r
              "h2": {"coord": {"x": 476,"y": 2}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 427,"y": 5}},\r
              "h1": {"coord": {"x": 377,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 477,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 427,"y": 169}},\r
              "h1": {"coord": {"x": 377,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 477,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 426,"y": 172}},\r
              "h1": {"coord": {"x": 376,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 476,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 426,"y": 173}},\r
              "h1": {"coord": {"x": 376,"y": 173}, "use": false},\r
              "h2": {"coord": {"x": 476,"y": 173}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": 173}},\r
              "h1": {"coord": {"x": 375,"y": 173}, "use": false},\r
              "h2": {"coord": {"x": 475,"y": 173}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 422,"y": 174}},\r
              "h1": {"coord": {"x": 372,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 472,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 329,"y": 174}},\r
              "h1": {"coord": {"x": 279,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 379,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 329,"y": 666}},\r
              "h1": {"coord": {"x": 279,"y": 666}, "use": false},\r
              "h2": {"coord": {"x": 379,"y": 666}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 572,"y": 1318}},\r
              "h1": {"coord": {"x": 522,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 739,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 803,"y": 1059}},\r
              "h1": {"coord": {"x": 803,"y": 1226}},\r
              "h2": {"coord": {"x": 803,"y": 939}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 573,"y": 841}},\r
              "h1": {"coord": {"x": 715,"y": 841}},\r
              "h2": {"coord": {"x": 623,"y": 841}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 329,"y": 840}},\r
              "h1": {"coord": {"x": 279,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 379,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 329,"y": 1318}},\r
              "h1": {"coord": {"x": 279,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 379,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 572,"y": 1318}},\r
              "h1": {"coord": {"x": 522,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 622,"y": 1318}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x51": {\r
      "id": "glyph-0x51",\r
      "advanceWidth": 1318,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1119,"y": 167}},\r
              "h1": {"coord": {"x": 1069,"y": 167}, "use": false},\r
              "h2": {"coord": {"x": 1209,"y": 279}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1260,"y": 684}},\r
              "h1": {"coord": {"x": 1260,"y": 446}},\r
              "h2": {"coord": {"x": 1260,"y": 979}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 1510}},\r
              "h1": {"coord": {"x": 1187,"y": 1510}},\r
              "h2": {"coord": {"x": 117,"y": 1510}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 684}},\r
              "h1": {"coord": {"x": 40,"y": 954}},\r
              "h2": {"coord": {"x": 40,"y": 198}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": -20}},\r
              "h1": {"coord": {"x": 268,"y": -20}},\r
              "h2": {"coord": {"x": 779,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 985,"y": 54}},\r
              "h1": {"coord": {"x": 892,"y": 2}},\r
              "h2": {"coord": {"x": 1035,"y": 54}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1155,"y": -116}},\r
              "h1": {"coord": {"x": 1105,"y": -116}, "use": false},\r
              "h2": {"coord": {"x": 1157,"y": -118}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1162,"y": -116}},\r
              "h1": {"coord": {"x": 1160,"y": -118}},\r
              "h2": {"coord": {"x": 1212,"y": -116}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1278,"y": 0}},\r
              "h1": {"coord": {"x": 1228,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1280,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1278,"y": 7}},\r
              "h1": {"coord": {"x": 1280,"y": 5}},\r
              "h2": {"coord": {"x": 1328,"y": 7}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -3,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 650,"y": 158}},\r
              "h1": {"coord": {"x": 729,"y": 158}},\r
              "h2": {"coord": {"x": 304,"y": 158}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 218,"y": 684}},\r
              "h1": {"coord": {"x": 218,"y": 434}},\r
              "h2": {"coord": {"x": 218,"y": 997}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 1332}},\r
              "h1": {"coord": {"x": 295,"y": 1332}},\r
              "h2": {"coord": {"x": 1003,"y": 1332}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1081,"y": 684}},\r
              "h1": {"coord": {"x": 1081,"y": 997}},\r
              "h2": {"coord": {"x": 1081,"y": 548}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 987,"y": 299}},\r
              "h1": {"coord": {"x": 1065,"y": 402}},\r
              "h2": {"coord": {"x": 1037,"y": 299}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 848,"y": 437}},\r
              "h1": {"coord": {"x": 798,"y": 437}, "use": false},\r
              "h2": {"coord": {"x": 846,"y": 439}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 841,"y": 437}},\r
              "h1": {"coord": {"x": 843,"y": 439}},\r
              "h2": {"coord": {"x": 891,"y": 437}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 725,"y": 322}},\r
              "h1": {"coord": {"x": 675,"y": 322}, "use": false},\r
              "h2": {"coord": {"x": 723,"y": 320}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 725,"y": 314}},\r
              "h1": {"coord": {"x": 723,"y": 316}},\r
              "h2": {"coord": {"x": 775,"y": 314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 847,"y": 192}},\r
              "h1": {"coord": {"x": 797,"y": 192}, "use": false},\r
              "h2": {"coord": {"x": 794,"y": 170}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x52": {\r
      "id": "glyph-0x52",\r
      "advanceWidth": 1103,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 9,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1058,"y": 175}},\r
              "h1": {"coord": {"x": 1061,"y": 175}},\r
              "h2": {"coord": {"x": 1108,"y": 175}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 930,"y": 175}},\r
              "h1": {"coord": {"x": 880,"y": 175}, "use": false},\r
              "h2": {"coord": {"x": 980,"y": 175}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 642,"y": 674}},\r
              "h1": {"coord": {"x": 592,"y": 674}, "use": false},\r
              "h2": {"coord": {"x": 847,"y": 716}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 942,"y": 1059}},\r
              "h1": {"coord": {"x": 942,"y": 915}},\r
              "h2": {"coord": {"x": 942,"y": 1181}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 573,"y": 1490}},\r
              "h1": {"coord": {"x": 902,"y": 1483}},\r
              "h2": {"coord": {"x": 623,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 573,"y": 1490}},\r
              "h1": {"coord": {"x": 523,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 623,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 44,"y": 1490}},\r
              "h1": {"coord": {"x": -6,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 94,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 44,"y": 1490}},\r
              "h1": {"coord": {"x": -6,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1487}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 145,"y": 1316}},\r
              "h1": {"coord": {"x": 95,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 195,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 145,"y": 174}},\r
              "h1": {"coord": {"x": 95,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 195,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 422,"y": 0}},\r
              "h1": {"coord": {"x": 372,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 425,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 427,"y": 5}},\r
              "h1": {"coord": {"x": 427,"y": 2}},\r
              "h2": {"coord": {"x": 477,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 427,"y": 169}},\r
              "h1": {"coord": {"x": 377,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 427,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 422,"y": 174}},\r
              "h1": {"coord": {"x": 425,"y": 174}},\r
              "h2": {"coord": {"x": 472,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 317,"y": 174}},\r
              "h1": {"coord": {"x": 267,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 367,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 317,"y": 666}},\r
              "h1": {"coord": {"x": 267,"y": 666}, "use": false},\r
              "h2": {"coord": {"x": 367,"y": 666}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 445,"y": 666}},\r
              "h1": {"coord": {"x": 395,"y": 666}, "use": false},\r
              "h2": {"coord": {"x": 495,"y": 666}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 806,"y": 1}},\r
              "h1": {"coord": {"x": 756,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 856,"y": 1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 809,"y": 1}},\r
              "h1": {"coord": {"x": 759,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 859,"y": 1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 809,"y": 1}},\r
              "h1": {"coord": {"x": 759,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 859,"y": 1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1058,"y": 1}},\r
              "h1": {"coord": {"x": 1008,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 1061,"y": 1}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1063,"y": 6}},\r
              "h1": {"coord": {"x": 1063,"y": 3}},\r
              "h2": {"coord": {"x": 1113,"y": 6}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1063,"y": 170}},\r
              "h1": {"coord": {"x": 1013,"y": 170}, "use": false},\r
              "h2": {"coord": {"x": 1063,"y": 173}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -3,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 317,"y": 1318}},\r
              "h1": {"coord": {"x": 267,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 367,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 560,"y": 1318}},\r
              "h1": {"coord": {"x": 510,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 727,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 791,"y": 1059}},\r
              "h1": {"coord": {"x": 791,"y": 1226}},\r
              "h2": {"coord": {"x": 791,"y": 939}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 561,"y": 841}},\r
              "h1": {"coord": {"x": 703,"y": 841}},\r
              "h2": {"coord": {"x": 611,"y": 841}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 503,"y": 841}},\r
              "h1": {"coord": {"x": 453,"y": 841}, "use": false},\r
              "h2": {"coord": {"x": 553,"y": 841}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 503,"y": 840}},\r
              "h1": {"coord": {"x": 453,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 553,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 317,"y": 840}},\r
              "h1": {"coord": {"x": 267,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 367,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 317,"y": 1318}},\r
              "h1": {"coord": {"x": 267,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 367,"y": 1318}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x53": {\r
      "id": "glyph-0x53",\r
      "advanceWidth": 981,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 7,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 490,"y": 849}},\r
              "h1": {"coord": {"x": 910,"y": 849}},\r
              "h2": {"coord": {"x": 540,"y": 849}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 490,"y": 850}},\r
              "h1": {"coord": {"x": 440,"y": 850}, "use": false},\r
              "h2": {"coord": {"x": 257,"y": 850}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 228,"y": 1054}},\r
              "h1": {"coord": {"x": 228,"y": 988}},\r
              "h2": {"coord": {"x": 228,"y": 1201}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 490,"y": 1316}},\r
              "h1": {"coord": {"x": 296,"y": 1316}},\r
              "h2": {"coord": {"x": 553,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 684,"y": 1316}},\r
              "h1": {"coord": {"x": 624,"y": 1316}},\r
              "h2": {"coord": {"x": 734,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 684,"y": 1234}},\r
              "h1": {"coord": {"x": 634,"y": 1234}, "use": false},\r
              "h2": {"coord": {"x": 684,"y": 1231}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 689,"y": 1229}},\r
              "h1": {"coord": {"x": 686,"y": 1229}},\r
              "h2": {"coord": {"x": 739,"y": 1229}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 853,"y": 1229}},\r
              "h1": {"coord": {"x": 803,"y": 1229}, "use": false},\r
              "h2": {"coord": {"x": 856,"y": 1229}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 858,"y": 1234}},\r
              "h1": {"coord": {"x": 858,"y": 1231}},\r
              "h2": {"coord": {"x": 908,"y": 1234}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 858,"y": 1407}},\r
              "h1": {"coord": {"x": 808,"y": 1407}, "use": false},\r
              "h2": {"coord": {"x": 858,"y": 1453}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 775,"y": 1490}},\r
              "h1": {"coord": {"x": 821,"y": 1490}},\r
              "h2": {"coord": {"x": 825,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 490,"y": 1490}},\r
              "h1": {"coord": {"x": 440,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 310,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 54,"y": 1054}},\r
              "h1": {"coord": {"x": 54,"y": 1395}},\r
              "h2": {"coord": {"x": 54,"y": 880}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 486,"y": 676}},\r
              "h1": {"coord": {"x": 207,"y": 676}},\r
              "h2": {"coord": {"x": 741,"y": 676}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 767,"y": 394}},\r
              "h1": {"coord": {"x": 767,"y": 552}},\r
              "h2": {"coord": {"x": 767,"y": 324}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 486,"y": 174}},\r
              "h1": {"coord": {"x": 762,"y": 174}},\r
              "h2": {"coord": {"x": 536,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 174}},\r
              "h1": {"coord": {"x": 164,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 264,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 254}},\r
              "h1": {"coord": {"x": 164,"y": 254}, "use": false},\r
              "h2": {"coord": {"x": 214,"y": 257}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 209,"y": 259}},\r
              "h1": {"coord": {"x": 212,"y": 259}},\r
              "h2": {"coord": {"x": 259,"y": 259}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 259}},\r
              "h1": {"coord": {"x": -5,"y": 259}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 259}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 254}},\r
              "h1": {"coord": {"x": 40,"y": 257}},\r
              "h2": {"coord": {"x": 90,"y": 254}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 83}},\r
              "h1": {"coord": {"x": -10,"y": 83}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 38}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 121,"y": 0}},\r
              "h1": {"coord": {"x": 76,"y": 1}},\r
              "h2": {"coord": {"x": 171,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 121,"y": 0}},\r
              "h1": {"coord": {"x": 71,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 171,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 486,"y": 0}},\r
              "h1": {"coord": {"x": 436,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 956,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 941,"y": 394}},\r
              "h1": {"coord": {"x": 941,"y": 331}},\r
              "h2": {"coord": {"x": 941,"y": 517}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x54": {\r
      "id": "glyph-0x54",\r
      "advanceWidth": 1104,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1064,"y": 1490}},\r
              "h1": {"coord": {"x": 1014,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1114,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1490}},\r
              "h1": {"coord": {"x": -10,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1215}},\r
              "h1": {"coord": {"x": -10,"y": 1215}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1212}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1210}},\r
              "h1": {"coord": {"x": 42,"y": 1210}},\r
              "h2": {"coord": {"x": 95,"y": 1210}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 210,"y": 1210}},\r
              "h1": {"coord": {"x": 160,"y": 1210}, "use": false},\r
              "h2": {"coord": {"x": 213,"y": 1210}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 215,"y": 1215}},\r
              "h1": {"coord": {"x": 215,"y": 1212}},\r
              "h2": {"coord": {"x": 265,"y": 1215}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 215,"y": 1315}},\r
              "h1": {"coord": {"x": 165,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 265,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 458,"y": 1315}},\r
              "h1": {"coord": {"x": 408,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 508,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 458,"y": 176}},\r
              "h1": {"coord": {"x": 408,"y": 176}, "use": false},\r
              "h2": {"coord": {"x": 508,"y": 176}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 359,"y": 176}},\r
              "h1": {"coord": {"x": 309,"y": 176}, "use": false},\r
              "h2": {"coord": {"x": 356,"y": 176}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 354,"y": 171}},\r
              "h1": {"coord": {"x": 354,"y": 174}},\r
              "h2": {"coord": {"x": 404,"y": 171}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 354,"y": 5}},\r
              "h1": {"coord": {"x": 304,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 354,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 359,"y": 0}},\r
              "h1": {"coord": {"x": 356,"y": 0}},\r
              "h2": {"coord": {"x": 409,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 723,"y": 0}},\r
              "h1": {"coord": {"x": 673,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 726,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 728,"y": 5}},\r
              "h1": {"coord": {"x": 728,"y": 2}},\r
              "h2": {"coord": {"x": 778,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 728,"y": 171}},\r
              "h1": {"coord": {"x": 678,"y": 171}, "use": false},\r
              "h2": {"coord": {"x": 728,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 723,"y": 176}},\r
              "h1": {"coord": {"x": 726,"y": 176}},\r
              "h2": {"coord": {"x": 773,"y": 176}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 634,"y": 176}},\r
              "h1": {"coord": {"x": 584,"y": 176}, "use": false},\r
              "h2": {"coord": {"x": 684,"y": 176}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 634,"y": 1315}},\r
              "h1": {"coord": {"x": 584,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 684,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 888,"y": 1315}},\r
              "h1": {"coord": {"x": 838,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 938,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 888,"y": 1215}},\r
              "h1": {"coord": {"x": 838,"y": 1215}, "use": false},\r
              "h2": {"coord": {"x": 888,"y": 1212}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 893,"y": 1210}},\r
              "h1": {"coord": {"x": 890,"y": 1210}},\r
              "h2": {"coord": {"x": 943,"y": 1210}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1058,"y": 1210}},\r
              "h1": {"coord": {"x": 1008,"y": 1210}, "use": false},\r
              "h2": {"coord": {"x": 1061,"y": 1210}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1063,"y": 1215}},\r
              "h1": {"coord": {"x": 1063,"y": 1212}},\r
              "h2": {"coord": {"x": 1113,"y": 1215}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x55": {\r
      "id": "glyph-0x55",\r
      "advanceWidth": 1301,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 12,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1256,"y": 1490}},\r
              "h1": {"coord": {"x": 1259,"y": 1490}},\r
              "h2": {"coord": {"x": 1306,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 892,"y": 1490}},\r
              "h1": {"coord": {"x": 842,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 889,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 887,"y": 1485}},\r
              "h1": {"coord": {"x": 887,"y": 1488}},\r
              "h2": {"coord": {"x": 937,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 887,"y": 1319}},\r
              "h1": {"coord": {"x": 837,"y": 1319}, "use": false},\r
              "h2": {"coord": {"x": 887,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 892,"y": 1314}},\r
              "h1": {"coord": {"x": 889,"y": 1314}},\r
              "h2": {"coord": {"x": 942,"y": 1314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 984,"y": 1314}},\r
              "h1": {"coord": {"x": 934,"y": 1314}, "use": false},\r
              "h2": {"coord": {"x": 1034,"y": 1314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 984,"y": 506}},\r
              "h1": {"coord": {"x": 934,"y": 506}, "use": false},\r
              "h2": {"coord": {"x": 984,"y": 379}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 907,"y": 237}},\r
              "h1": {"coord": {"x": 959,"y": 291}},\r
              "h2": {"coord": {"x": 854,"y": 182}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 642,"y": 155}},\r
              "h1": {"coord": {"x": 768,"y": 155}},\r
              "h2": {"coord": {"x": 518,"y": 155}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 385,"y": 235}},\r
              "h1": {"coord": {"x": 434,"y": 181}},\r
              "h2": {"coord": {"x": 336,"y": 288}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 312,"y": 506}},\r
              "h1": {"coord": {"x": 312,"y": 377}},\r
              "h2": {"coord": {"x": 362,"y": 506}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 312,"y": 1314}},\r
              "h1": {"coord": {"x": 262,"y": 1314}, "use": false},\r
              "h2": {"coord": {"x": 362,"y": 1314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 409,"y": 1314}},\r
              "h1": {"coord": {"x": 359,"y": 1314}, "use": false},\r
              "h2": {"coord": {"x": 412,"y": 1314}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 414,"y": 1319}},\r
              "h1": {"coord": {"x": 414,"y": 1316}},\r
              "h2": {"coord": {"x": 464,"y": 1319}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 414,"y": 1485}},\r
              "h1": {"coord": {"x": 364,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 414,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 409,"y": 1490}},\r
              "h1": {"coord": {"x": 412,"y": 1490}},\r
              "h2": {"coord": {"x": 459,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1319}},\r
              "h1": {"coord": {"x": -10,"y": 1319}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1314}},\r
              "h1": {"coord": {"x": 42,"y": 1314}},\r
              "h2": {"coord": {"x": 95,"y": 1314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 138,"y": 1314}},\r
              "h1": {"coord": {"x": 88,"y": 1314}, "use": false},\r
              "h2": {"coord": {"x": 188,"y": 1314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 138,"y": 506}},\r
              "h1": {"coord": {"x": 88,"y": 506}, "use": false},\r
              "h2": {"coord": {"x": 138,"y": 332}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 256,"y": 118}},\r
              "h1": {"coord": {"x": 176,"y": 205}},\r
              "h2": {"coord": {"x": 340,"y": 25}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 642,"y": -20}},\r
              "h1": {"coord": {"x": 466,"y": -20}},\r
              "h2": {"coord": {"x": 728,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 864,"y": 12}},\r
              "h1": {"coord": {"x": 800,"y": -9}},\r
              "h2": {"coord": {"x": 931,"y": 35}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1033,"y": 116}},\r
              "h1": {"coord": {"x": 988,"y": 69}},\r
              "h2": {"coord": {"x": 1117,"y": 205}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1159,"y": 506}},\r
              "h1": {"coord": {"x": 1159,"y": 332}},\r
              "h2": {"coord": {"x": 1209,"y": 506}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1159,"y": 1314}},\r
              "h1": {"coord": {"x": 1109,"y": 1314}, "use": false},\r
              "h2": {"coord": {"x": 1209,"y": 1314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1256,"y": 1314}},\r
              "h1": {"coord": {"x": 1206,"y": 1314}, "use": false},\r
              "h2": {"coord": {"x": 1259,"y": 1314}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1261,"y": 1319}},\r
              "h1": {"coord": {"x": 1261,"y": 1316}},\r
              "h2": {"coord": {"x": 1311,"y": 1319}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1261,"y": 1485}},\r
              "h1": {"coord": {"x": 1211,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 1261,"y": 1488}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x56": {\r
      "id": "glyph-0x56",\r
      "advanceWidth": 1276,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1231,"y": 1490}},\r
              "h1": {"coord": {"x": 1234,"y": 1490}},\r
              "h2": {"coord": {"x": 1281,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1018,"y": 1490}},\r
              "h1": {"coord": {"x": 968,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1016,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1013,"y": 1486}},\r
              "h1": {"coord": {"x": 1013,"y": 1488}},\r
              "h2": {"coord": {"x": 1063,"y": 1486}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 395}},\r
              "h1": {"coord": {"x": 600,"y": 395}, "use": false},\r
              "h2": {"coord": {"x": 700,"y": 395}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 263,"y": 1486}},\r
              "h1": {"coord": {"x": 213,"y": 1486}, "use": false},\r
              "h2": {"coord": {"x": 263,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 258,"y": 1490}},\r
              "h1": {"coord": {"x": 260,"y": 1490}},\r
              "h2": {"coord": {"x": 308,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 131,"y": 1316}},\r
              "h1": {"coord": {"x": 81,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 181,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 597,"y": 0}},\r
              "h1": {"coord": {"x": 547,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 647,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 705,"y": 0}},\r
              "h1": {"coord": {"x": 655,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 755,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1141,"y": 1316}},\r
              "h1": {"coord": {"x": 1091,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1191,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1231,"y": 1316}},\r
              "h1": {"coord": {"x": 1181,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1234,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1236,"y": 1321}},\r
              "h1": {"coord": {"x": 1236,"y": 1318}},\r
              "h2": {"coord": {"x": 1286,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1236,"y": 1485}},\r
              "h1": {"coord": {"x": 1186,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 1236,"y": 1488}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x57": {\r
      "id": "glyph-0x57",\r
      "advanceWidth": 1549,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 12,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1504,"y": 1490}},\r
              "h1": {"coord": {"x": 1507,"y": 1490}},\r
              "h2": {"coord": {"x": 1554,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1291,"y": 1490}},\r
              "h1": {"coord": {"x": 1241,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1288,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1286,"y": 1485}},\r
              "h1": {"coord": {"x": 1286,"y": 1488}},\r
              "h2": {"coord": {"x": 1336,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1067,"y": 385}},\r
              "h1": {"coord": {"x": 1017,"y": 385}, "use": false},\r
              "h2": {"coord": {"x": 1117,"y": 385}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 803,"y": 897}},\r
              "h1": {"coord": {"x": 753,"y": 897}, "use": false},\r
              "h2": {"coord": {"x": 853,"y": 897}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 741,"y": 897}},\r
              "h1": {"coord": {"x": 691,"y": 897}, "use": false},\r
              "h2": {"coord": {"x": 791,"y": 897}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 484,"y": 392}},\r
              "h1": {"coord": {"x": 434,"y": 392}, "use": false},\r
              "h2": {"coord": {"x": 534,"y": 392}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 263,"y": 1485}},\r
              "h1": {"coord": {"x": 213,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 263,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 258,"y": 1490}},\r
              "h1": {"coord": {"x": 261,"y": 1490}},\r
              "h2": {"coord": {"x": 308,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 123,"y": 1316}},\r
              "h1": {"coord": {"x": 73,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 173,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 366,"y": 0}},\r
              "h1": {"coord": {"x": 316,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 416,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 515,"y": 0}},\r
              "h1": {"coord": {"x": 465,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 565,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 771,"y": 523}},\r
              "h1": {"coord": {"x": 721,"y": 523}, "use": false},\r
              "h2": {"coord": {"x": 821,"y": 523}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1034,"y": 0}},\r
              "h1": {"coord": {"x": 984,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1084,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1183,"y": 0}},\r
              "h1": {"coord": {"x": 1133,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1233,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1428,"y": 1316}},\r
              "h1": {"coord": {"x": 1378,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1478,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1504,"y": 1316}},\r
              "h1": {"coord": {"x": 1454,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1507,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1509,"y": 1321}},\r
              "h1": {"coord": {"x": 1509,"y": 1318}},\r
              "h2": {"coord": {"x": 1559,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1509,"y": 1485}},\r
              "h1": {"coord": {"x": 1459,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 1509,"y": 1488}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x58": {\r
      "id": "glyph-0x58",\r
      "advanceWidth": 1180,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 19,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1135,"y": 174}},\r
              "h1": {"coord": {"x": 1138,"y": 174}},\r
              "h2": {"coord": {"x": 1185,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1022,"y": 174}},\r
              "h1": {"coord": {"x": 972,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 1072,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 702,"y": 759}},\r
              "h1": {"coord": {"x": 652,"y": 759}, "use": false},\r
              "h2": {"coord": {"x": 752,"y": 759}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1010,"y": 1316}},\r
              "h1": {"coord": {"x": 960,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1060,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1115,"y": 1316}},\r
              "h1": {"coord": {"x": 1065,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1118,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1120,"y": 1321}},\r
              "h1": {"coord": {"x": 1120,"y": 1318}},\r
              "h2": {"coord": {"x": 1170,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1120,"y": 1485}},\r
              "h1": {"coord": {"x": 1070,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 1120,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1115,"y": 1490}},\r
              "h1": {"coord": {"x": 1118,"y": 1490}},\r
              "h2": {"coord": {"x": 1165,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 902,"y": 1490}},\r
              "h1": {"coord": {"x": 852,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 900,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 898,"y": 1488}},\r
              "h1": {"coord": {"x": 848,"y": 1488}, "use": false},\r
              "h2": {"coord": {"x": 948,"y": 1488}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 897,"y": 1487}},\r
              "h1": {"coord": {"x": 847,"y": 1487}, "use": false},\r
              "h2": {"coord": {"x": 947,"y": 1487}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 945}},\r
              "h1": {"coord": {"x": 550,"y": 945}, "use": false},\r
              "h2": {"coord": {"x": 650,"y": 945}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 303,"y": 1487}},\r
              "h1": {"coord": {"x": 253,"y": 1487}, "use": false},\r
              "h2": {"coord": {"x": 353,"y": 1487}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 302,"y": 1488}},\r
              "h1": {"coord": {"x": 252,"y": 1488}, "use": false},\r
              "h2": {"coord": {"x": 352,"y": 1488}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 298,"y": 1490}},\r
              "h1": {"coord": {"x": 300,"y": 1490}},\r
              "h2": {"coord": {"x": 348,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 85,"y": 1490}},\r
              "h1": {"coord": {"x": 35,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 82,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 80,"y": 1485}},\r
              "h1": {"coord": {"x": 80,"y": 1488}},\r
              "h2": {"coord": {"x": 130,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 80,"y": 1321}},\r
              "h1": {"coord": {"x": 30,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 80,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 85,"y": 1316}},\r
              "h1": {"coord": {"x": 82,"y": 1316}},\r
              "h2": {"coord": {"x": 135,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 190,"y": 1316}},\r
              "h1": {"coord": {"x": 140,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 240,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 488,"y": 777}},\r
              "h1": {"coord": {"x": 438,"y": 777}, "use": false},\r
              "h2": {"coord": {"x": 538,"y": 777}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 157,"y": 174}},\r
              "h1": {"coord": {"x": 107,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 207,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 258,"y": 0}},\r
              "h1": {"coord": {"x": 208,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 260,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 262,"y": 2}},\r
              "h1": {"coord": {"x": 212,"y": 2}, "use": false},\r
              "h2": {"coord": {"x": 312,"y": 2}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 263,"y": 3}},\r
              "h1": {"coord": {"x": 213,"y": 3}, "use": false},\r
              "h2": {"coord": {"x": 313,"y": 3}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 590,"y": 593}},\r
              "h1": {"coord": {"x": 540,"y": 593}, "use": false},\r
              "h2": {"coord": {"x": 640,"y": 593}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 917,"y": 3}},\r
              "h1": {"coord": {"x": 867,"y": 3}, "use": false},\r
              "h2": {"coord": {"x": 967,"y": 3}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 918,"y": 2}},\r
              "h1": {"coord": {"x": 868,"y": 2}, "use": false},\r
              "h2": {"coord": {"x": 968,"y": 2}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 922,"y": 0}},\r
              "h1": {"coord": {"x": 920,"y": 0}},\r
              "h2": {"coord": {"x": 972,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1135,"y": 0}},\r
              "h1": {"coord": {"x": 1085,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1138,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1140,"y": 5}},\r
              "h1": {"coord": {"x": 1140,"y": 2}},\r
              "h2": {"coord": {"x": 1190,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1140,"y": 169}},\r
              "h1": {"coord": {"x": 1090,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 1140,"y": 172}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x59": {\r
      "id": "glyph-0x59",\r
      "advanceWidth": 1276,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 14,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1231,"y": 1490}},\r
              "h1": {"coord": {"x": 1234,"y": 1490}},\r
              "h2": {"coord": {"x": 1281,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1018,"y": 1490}},\r
              "h1": {"coord": {"x": 968,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1016,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1014,"y": 1488}},\r
              "h1": {"coord": {"x": 964,"y": 1488}, "use": false},\r
              "h2": {"coord": {"x": 1064,"y": 1488}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1014,"y": 1487}},\r
              "h1": {"coord": {"x": 964,"y": 1487}, "use": false},\r
              "h2": {"coord": {"x": 1064,"y": 1487}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 654,"y": 891}},\r
              "h1": {"coord": {"x": 604,"y": 891}, "use": false},\r
              "h2": {"coord": {"x": 704,"y": 891}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 262,"y": 1488}},\r
              "h1": {"coord": {"x": 212,"y": 1488}, "use": false},\r
              "h2": {"coord": {"x": 312,"y": 1488}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 262,"y": 1488}},\r
              "h1": {"coord": {"x": 212,"y": 1488}, "use": false},\r
              "h2": {"coord": {"x": 312,"y": 1488}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 258,"y": 1490}},\r
              "h1": {"coord": {"x": 260,"y": 1490}},\r
              "h2": {"coord": {"x": 308,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 145,"y": 1316}},\r
              "h1": {"coord": {"x": 95,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 195,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 572,"y": 657}},\r
              "h1": {"coord": {"x": 522,"y": 657}, "use": false},\r
              "h2": {"coord": {"x": 622,"y": 657}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 572,"y": 171}},\r
              "h1": {"coord": {"x": 522,"y": 171}, "use": false},\r
              "h2": {"coord": {"x": 622,"y": 171}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 493,"y": 171}},\r
              "h1": {"coord": {"x": 443,"y": 171}, "use": false},\r
              "h2": {"coord": {"x": 490,"y": 171}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 488,"y": 166}},\r
              "h1": {"coord": {"x": 488,"y": 169}},\r
              "h2": {"coord": {"x": 538,"y": 166}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 488,"y": 2}},\r
              "h1": {"coord": {"x": 438,"y": 2}, "use": false},\r
              "h2": {"coord": {"x": 488,"y": -1}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 493,"y": -3}},\r
              "h1": {"coord": {"x": 490,"y": -3}},\r
              "h2": {"coord": {"x": 543,"y": -3}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 819,"y": -3}},\r
              "h1": {"coord": {"x": 769,"y": -3}, "use": false},\r
              "h2": {"coord": {"x": 822,"y": -3}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 824,"y": 2}},\r
              "h1": {"coord": {"x": 824,"y": -1}},\r
              "h2": {"coord": {"x": 874,"y": 2}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 824,"y": 166}},\r
              "h1": {"coord": {"x": 774,"y": 166}, "use": false},\r
              "h2": {"coord": {"x": 824,"y": 169}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 819,"y": 171}},\r
              "h1": {"coord": {"x": 822,"y": 171}},\r
              "h2": {"coord": {"x": 869,"y": 171}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 745,"y": 171}},\r
              "h1": {"coord": {"x": 695,"y": 171}, "use": false},\r
              "h2": {"coord": {"x": 795,"y": 171}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 745,"y": 687}},\r
              "h1": {"coord": {"x": 695,"y": 687}, "use": false},\r
              "h2": {"coord": {"x": 795,"y": 687}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1124,"y": 1316}},\r
              "h1": {"coord": {"x": 1074,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1174,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1231,"y": 1316}},\r
              "h1": {"coord": {"x": 1181,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1234,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1236,"y": 1321}},\r
              "h1": {"coord": {"x": 1236,"y": 1318}},\r
              "h2": {"coord": {"x": 1286,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1236,"y": 1485}},\r
              "h1": {"coord": {"x": 1186,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 1236,"y": 1488}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x5A": {\r
      "id": "glyph-0x5A",\r
      "advanceWidth": 1146,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1101,"y": 242}},\r
              "h1": {"coord": {"x": 1104,"y": 242}},\r
              "h2": {"coord": {"x": 1151,"y": 242}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 933,"y": 242}},\r
              "h1": {"coord": {"x": 883,"y": 242}, "use": false},\r
              "h2": {"coord": {"x": 930,"y": 242}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 928,"y": 237}},\r
              "h1": {"coord": {"x": 928,"y": 240}},\r
              "h2": {"coord": {"x": 978,"y": 237}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 928,"y": 175}},\r
              "h1": {"coord": {"x": 878,"y": 175}, "use": false},\r
              "h2": {"coord": {"x": 978,"y": 175}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 334,"y": 175}},\r
              "h1": {"coord": {"x": 284,"y": 175}, "use": false},\r
              "h2": {"coord": {"x": 384,"y": 175}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1086,"y": 1460}},\r
              "h1": {"coord": {"x": 1036,"y": 1460}, "use": false},\r
              "h2": {"coord": {"x": 1136,"y": 1460}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1086,"y": 1490}},\r
              "h1": {"coord": {"x": 1036,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1136,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 86,"y": 1490}},\r
              "h1": {"coord": {"x": 36,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 83,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 81,"y": 1485}},\r
              "h1": {"coord": {"x": 81,"y": 1488}},\r
              "h2": {"coord": {"x": 131,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 81,"y": 1253}},\r
              "h1": {"coord": {"x": 31,"y": 1253}, "use": false},\r
              "h2": {"coord": {"x": 81,"y": 1250}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 86,"y": 1248}},\r
              "h1": {"coord": {"x": 83,"y": 1248}},\r
              "h2": {"coord": {"x": 136,"y": 1248}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 255,"y": 1248}},\r
              "h1": {"coord": {"x": 205,"y": 1248}, "use": false},\r
              "h2": {"coord": {"x": 258,"y": 1248}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 260,"y": 1253}},\r
              "h1": {"coord": {"x": 260,"y": 1250}},\r
              "h2": {"coord": {"x": 310,"y": 1253}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 260,"y": 1315}},\r
              "h1": {"coord": {"x": 210,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 310,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 793,"y": 1315}},\r
              "h1": {"coord": {"x": 743,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 843,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": 30}},\r
              "h1": {"coord": {"x": -9,"y": 30}, "use": false},\r
              "h2": {"coord": {"x": 91,"y": 30}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 0}},\r
              "h1": {"coord": {"x": -10,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1101,"y": 0}},\r
              "h1": {"coord": {"x": 1051,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1104,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1106,"y": 5}},\r
              "h1": {"coord": {"x": 1106,"y": 2}},\r
              "h2": {"coord": {"x": 1156,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1106,"y": 237}},\r
              "h1": {"coord": {"x": 1056,"y": 237}, "use": false},\r
              "h2": {"coord": {"x": 1106,"y": 240}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x61": {\r
      "id": "glyph-0x61",\r
      "advanceWidth": 949,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 7,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 904,"y": 165}},\r
              "h1": {"coord": {"x": 854,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 954,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 819,"y": 165}},\r
              "h1": {"coord": {"x": 769,"y": 165}},\r
              "h2": {"coord": {"x": 869,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 820,"y": 605}},\r
              "h1": {"coord": {"x": 820,"y": 571}},\r
              "h2": {"coord": {"x": 820,"y": 755}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 356,"y": 1040}},\r
              "h1": {"coord": {"x": 858,"y": 1040}},\r
              "h2": {"coord": {"x": 232,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 67,"y": 992}},\r
              "h1": {"coord": {"x": 100,"y": 1005}},\r
              "h2": {"coord": {"x": 50,"y": 985}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 51,"y": 965}},\r
              "h1": {"coord": {"x": 48,"y": 979}},\r
              "h2": {"coord": {"x": 101,"y": 965}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 84,"y": 842}},\r
              "h1": {"coord": {"x": 34,"y": 842}, "use": false},\r
              "h2": {"coord": {"x": 134,"y": 842}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 84,"y": 842}},\r
              "h1": {"coord": {"x": 34,"y": 842}, "use": false},\r
              "h2": {"coord": {"x": 134,"y": 842}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 84,"y": 842}},\r
              "h1": {"coord": {"x": 34,"y": 842}, "use": false},\r
              "h2": {"coord": {"x": 88,"y": 825}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 109,"y": 826}},\r
              "h1": {"coord": {"x": 96,"y": 823}},\r
              "h2": {"coord": {"x": 144,"y": 834}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 356,"y": 879}},\r
              "h1": {"coord": {"x": 240,"y": 879}},\r
              "h2": {"coord": {"x": 645,"y": 879}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 647,"y": 651}},\r
              "h1": {"coord": {"x": 647,"y": 827}},\r
              "h2": {"coord": {"x": 647,"y": 645}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 647,"y": 589}},\r
              "h1": {"coord": {"x": 647,"y": 619}},\r
              "h2": {"coord": {"x": 585,"y": 639}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 415,"y": 671}},\r
              "h1": {"coord": {"x": 505,"y": 671}},\r
              "h2": {"coord": {"x": 197,"y": 671}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 292}},\r
              "h1": {"coord": {"x": 40,"y": 512}},\r
              "h2": {"coord": {"x": 40,"y": 184}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": -20}},\r
              "h1": {"coord": {"x": 125,"y": -20}},\r
              "h2": {"coord": {"x": 522,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 669,"y": 37}},\r
              "h1": {"coord": {"x": 606,"y": 7}},\r
              "h2": {"coord": {"x": 684,"y": 15}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 737,"y": 1}},\r
              "h1": {"coord": {"x": 709,"y": 1}},\r
              "h2": {"coord": {"x": 787,"y": 1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 904,"y": 1}},\r
              "h1": {"coord": {"x": 854,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 907,"y": 1}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 909,"y": 6}},\r
              "h1": {"coord": {"x": 909,"y": 3}},\r
              "h2": {"coord": {"x": 959,"y": 6}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 909,"y": 160}},\r
              "h1": {"coord": {"x": 859,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 909,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 904,"y": 165}},\r
              "h1": {"coord": {"x": 907,"y": 165}},\r
              "h2": {"coord": {"x": 954,"y": 165}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -6,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 654,"y": 212}},\r
              "h1": {"coord": {"x": 604,"y": 212}, "use": false},\r
              "h2": {"coord": {"x": 654,"y": 164}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": 117}},\r
              "h1": {"coord": {"x": 593,"y": 117}},\r
              "h2": {"coord": {"x": 355,"y": 117}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 203,"y": 293}},\r
              "h1": {"coord": {"x": 203,"y": 116}},\r
              "h2": {"coord": {"x": 203,"y": 437}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 415,"y": 534}},\r
              "h1": {"coord": {"x": 287,"y": 534}},\r
              "h2": {"coord": {"x": 543,"y": 534}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 654,"y": 340}},\r
              "h1": {"coord": {"x": 654,"y": 458}},\r
              "h2": {"coord": {"x": 654,"y": 271}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x62": {\r
      "id": "glyph-0x62",\r
      "advanceWidth": 1085,\r
      "usedIn": [\r
        "glyph-0x64"\r
      ],\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 9,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": -5,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": 0}},\r
              "h1": {"coord": {"x": 162,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 257,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 82}},\r
              "h1": {"coord": {"x": 293,"y": 37}},\r
              "h2": {"coord": {"x": 343,"y": 82}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 93}},\r
              "h1": {"coord": {"x": 243,"y": 93}, "use": false},\r
              "h2": {"coord": {"x": 356,"y": 25}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 590,"y": -20}},\r
              "h1": {"coord": {"x": 451,"y": -20}},\r
              "h2": {"coord": {"x": 893,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1045,"y": 384}},\r
              "h1": {"coord": {"x": 1045,"y": 159}},\r
              "h2": {"coord": {"x": 1095,"y": 384}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1045,"y": 589}},\r
              "h1": {"coord": {"x": 995,"y": 589}, "use": false},\r
              "h2": {"coord": {"x": 1095,"y": 589}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1045,"y": 589}},\r
              "h1": {"coord": {"x": 995,"y": 589}, "use": false},\r
              "h2": {"coord": {"x": 1044,"y": 851}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 593,"y": 1040}},\r
              "h1": {"coord": {"x": 840,"y": 1040}},\r
              "h2": {"coord": {"x": 477,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": 915}},\r
              "h1": {"coord": {"x": 373,"y": 992}},\r
              "h2": {"coord": {"x": 344,"y": 915}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 1408}},\r
              "h1": {"coord": {"x": 243,"y": 1408}, "use": false},\r
              "h2": {"coord": {"x": 293,"y": 1453}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": 1490}},\r
              "h1": {"coord": {"x": 257,"y": 1490}},\r
              "h2": {"coord": {"x": 262,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1332}},\r
              "h1": {"coord": {"x": -10,"y": 1332}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1329}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1327}},\r
              "h1": {"coord": {"x": 42,"y": 1327}},\r
              "h2": {"coord": {"x": 95,"y": 1327}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 1327}},\r
              "h1": {"coord": {"x": 80,"y": 1327}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 1327}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 164}},\r
              "h1": {"coord": {"x": 80,"y": 164}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 164}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 164}},\r
              "h1": {"coord": {"x": -5,"y": 164}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 164}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 159}},\r
              "h1": {"coord": {"x": 40,"y": 162}},\r
              "h2": {"coord": {"x": 90,"y": 159}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -7,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 605}},\r
              "h1": {"coord": {"x": 243,"y": 605}, "use": false},\r
              "h2": {"coord": {"x": 299,"y": 776}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 593,"y": 896}},\r
              "h1": {"coord": {"x": 439,"y": 896}},\r
              "h2": {"coord": {"x": 750,"y": 896}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 880,"y": 576}},\r
              "h1": {"coord": {"x": 880,"y": 766}},\r
              "h2": {"coord": {"x": 930,"y": 576}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 880,"y": 396}},\r
              "h1": {"coord": {"x": 830,"y": 396}, "use": false},\r
              "h2": {"coord": {"x": 880,"y": 155}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 590,"y": 133}},\r
              "h1": {"coord": {"x": 663,"y": 133}},\r
              "h2": {"coord": {"x": 484,"y": 133}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 403}},\r
              "h1": {"coord": {"x": 300,"y": 179}},\r
              "h2": {"coord": {"x": 343,"y": 403}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x70": {\r
      "id": "glyph-0x70",\r
      "advanceWidth": 1090,\r
      "usedIn": [\r
        "glyph-0x71"\r
      ],\r
      "contextCharacters": "gpgy",\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1016}},\r
              "h1": {"coord": {"x": -10,"y": 1016}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 1016}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 863}},\r
              "h1": {"coord": {"x": -10,"y": 863}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 860}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 858}},\r
              "h1": {"coord": {"x": 42,"y": 858}},\r
              "h2": {"coord": {"x": 95,"y": 858}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 858}},\r
              "h1": {"coord": {"x": 80,"y": 858}},\r
              "h2": {"coord": {"x": 130,"y": 507}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": -265}},\r
              "h1": {"coord": {"x": 80,"y": -265}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": -265}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 46,"y": -265}},\r
              "h1": {"coord": {"x": -4,"y": -265}, "use": false},\r
              "h2": {"coord": {"x": 43,"y": -265}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": -270}},\r
              "h1": {"coord": {"x": 41,"y": -267}},\r
              "h2": {"coord": {"x": 91,"y": -270}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": -424}},\r
              "h1": {"coord": {"x": -9,"y": -424}, "use": false},\r
              "h2": {"coord": {"x": 41,"y": -427}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 46,"y": -429}},\r
              "h1": {"coord": {"x": 43,"y": -429}},\r
              "h2": {"coord": {"x": 96,"y": -429}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": -429}},\r
              "h1": {"coord": {"x": 162,"y": -429}, "use": false},\r
              "h2": {"coord": {"x": 257,"y": -429}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": -347}},\r
              "h1": {"coord": {"x": 294,"y": -392}},\r
              "h2": {"coord": {"x": 344,"y": -347}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": 99}},\r
              "h1": {"coord": {"x": 244,"y": 99}, "use": false},\r
              "h2": {"coord": {"x": 356,"y": 28}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 595,"y": -19}},\r
              "h1": {"coord": {"x": 453,"y": -19}},\r
              "h2": {"coord": {"x": 898,"y": -19}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1050,"y": 385}},\r
              "h1": {"coord": {"x": 1050,"y": 160}},\r
              "h2": {"coord": {"x": 1100,"y": 385}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1050,"y": 589}},\r
              "h1": {"coord": {"x": 1000,"y": 589}, "use": false},\r
              "h2": {"coord": {"x": 1049,"y": 851}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 598,"y": 1041}},\r
              "h1": {"coord": {"x": 845,"y": 1041}},\r
              "h2": {"coord": {"x": 480,"y": 1041}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 910}},\r
              "h1": {"coord": {"x": 372,"y": 990}},\r
              "h2": {"coord": {"x": 343,"y": 910}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 940}},\r
              "h1": {"coord": {"x": 243,"y": 940}, "use": false},\r
              "h2": {"coord": {"x": 293,"y": 985}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": 1021}},\r
              "h1": {"coord": {"x": 257,"y": 1021}},\r
              "h2": {"coord": {"x": 262,"y": 1021}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1021}},\r
              "h1": {"coord": {"x": -5,"y": 1021}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1021}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1016}},\r
              "h1": {"coord": {"x": 40,"y": 1019}},\r
              "h2": {"coord": {"x": 90,"y": 1016}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -7,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 298,"y": 417}},\r
              "h1": {"coord": {"x": 298,"y": 182}},\r
              "h2": {"coord": {"x": 298,"y": 422}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 298,"y": 595}},\r
              "h1": {"coord": {"x": 298,"y": 550}},\r
              "h2": {"coord": {"x": 298,"y": 772}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 598,"y": 897}},\r
              "h1": {"coord": {"x": 441,"y": 897}},\r
              "h2": {"coord": {"x": 755,"y": 897}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 885,"y": 577}},\r
              "h1": {"coord": {"x": 885,"y": 767}},\r
              "h2": {"coord": {"x": 935,"y": 577}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 885,"y": 397}},\r
              "h1": {"coord": {"x": 835,"y": 397}, "use": false},\r
              "h2": {"coord": {"x": 885,"y": 156}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 595,"y": 134}},\r
              "h1": {"coord": {"x": 668,"y": 134}},\r
              "h2": {"coord": {"x": 487,"y": 134}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x64": {\r
      "id": "glyph-0x64",\r
      "advanceWidth": 1085,\r
      "shapes": [\r
        {\r
          "link": "glyph-0x62",\r
          "isFlippedEW": true\r
        }\r
      ]\r
    },\r
    "glyph-0x63": {\r
      "id": "glyph-0x63",\r
      "advanceWidth": 898,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 6,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 849,"y": 272}},\r
              "h1": {"coord": {"x": 854,"y": 270}},\r
              "h2": {"coord": {"x": 824,"y": 282}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 720,"y": 331}},\r
              "h1": {"coord": {"x": 753,"y": 316}},\r
              "h2": {"coord": {"x": 717,"y": 332}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 714,"y": 327}},\r
              "h1": {"coord": {"x": 714,"y": 330}},\r
              "h2": {"coord": {"x": 714,"y": 173}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 142}},\r
              "h1": {"coord": {"x": 585,"y": 142}},\r
              "h2": {"coord": {"x": 372,"y": 142}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 392}},\r
              "h1": {"coord": {"x": 204,"y": 158}},\r
              "h2": {"coord": {"x": 254,"y": 392}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 592}},\r
              "h1": {"coord": {"x": 154,"y": 592}, "use": false},\r
              "h2": {"coord": {"x": 254,"y": 592}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 592}},\r
              "h1": {"coord": {"x": 154,"y": 592}, "use": false},\r
              "h2": {"coord": {"x": 205,"y": 767}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 897}},\r
              "h1": {"coord": {"x": 324,"y": 897}},\r
              "h2": {"coord": {"x": 529,"y": 897}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 897}},\r
              "h1": {"coord": {"x": 429,"y": 897}, "use": false},\r
              "h2": {"coord": {"x": 529,"y": 897}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 897}},\r
              "h1": {"coord": {"x": 429,"y": 897}, "use": false},\r
              "h2": {"coord": {"x": 590,"y": 897}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 696,"y": 739}},\r
              "h1": {"coord": {"x": 670,"y": 847}},\r
              "h2": {"coord": {"x": 698,"y": 729}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 712,"y": 736}},\r
              "h1": {"coord": {"x": 705,"y": 733}},\r
              "h2": {"coord": {"x": 742,"y": 750}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 837,"y": 799}},\r
              "h1": {"coord": {"x": 801,"y": 783}},\r
              "h2": {"coord": {"x": 840,"y": 800}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 842,"y": 808}},\r
              "h1": {"coord": {"x": 844,"y": 801}},\r
              "h2": {"coord": {"x": 801,"y": 949}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 1040}},\r
              "h1": {"coord": {"x": 670,"y": 1040}},\r
              "h2": {"coord": {"x": 529,"y": 1040}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 1040}},\r
              "h1": {"coord": {"x": 429,"y": 1040}, "use": false},\r
              "h2": {"coord": {"x": 529,"y": 1040}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 1040}},\r
              "h1": {"coord": {"x": 429,"y": 1040}, "use": false},\r
              "h2": {"coord": {"x": 233,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 590}},\r
              "h1": {"coord": {"x": 40,"y": 838}},\r
              "h2": {"coord": {"x": 90,"y": 590}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 590}},\r
              "h1": {"coord": {"x": -10,"y": 590}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 590}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 390}},\r
              "h1": {"coord": {"x": -10,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 390}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 390}},\r
              "h1": {"coord": {"x": -10,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 41,"y": 175}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": -20}},\r
              "h1": {"coord": {"x": 169,"y": -20}},\r
              "h2": {"coord": {"x": 785,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 858,"y": 262}},\r
              "h1": {"coord": {"x": 858,"y": 205}},\r
              "h2": {"coord": {"x": 858,"y": 267}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x71": {\r
      "id": "glyph-0x71",\r
      "advanceWidth": 1090,\r
      "contextCharacters": "gqpgy",\r
      "shapes": [\r
        {\r
          "link": "glyph-0x70",\r
          "isFlippedEW": true\r
        }\r
      ]\r
    },\r
    "glyph-0x6F": {\r
      "id": "glyph-0x6F",\r
      "advanceWidth": 959,\r
      "contextCharacters": "bgo",\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 2,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 919,"y": 592}},\r
              "h1": {"coord": {"x": 869,"y": 592}, "use": false},\r
              "h2": {"coord": {"x": 918,"y": 839}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 480,"y": 1040}},\r
              "h1": {"coord": {"x": 725,"y": 1040}},\r
              "h2": {"coord": {"x": 235,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": 592}},\r
              "h1": {"coord": {"x": 42,"y": 839}},\r
              "h2": {"coord": {"x": 91,"y": 592}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 592}},\r
              "h1": {"coord": {"x": -10,"y": 592}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 592}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 390}},\r
              "h1": {"coord": {"x": -10,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 390}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 390}},\r
              "h1": {"coord": {"x": -10,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 41,"y": 175}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 480,"y": -20}},\r
              "h1": {"coord": {"x": 170,"y": -20}},\r
              "h2": {"coord": {"x": 530,"y": -20}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 480,"y": -20}},\r
              "h1": {"coord": {"x": 430,"y": -20}, "use": false},\r
              "h2": {"coord": {"x": 790,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 919,"y": 390}},\r
              "h1": {"coord": {"x": 918,"y": 175}},\r
              "h2": {"coord": {"x": 969,"y": 390}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 919,"y": 390}},\r
              "h1": {"coord": {"x": 869,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 969,"y": 390}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 919,"y": 592}},\r
              "h1": {"coord": {"x": 869,"y": 592}, "use": false},\r
              "h2": {"coord": {"x": 969,"y": 592}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 480,"y": 142}},\r
              "h1": {"coord": {"x": 587,"y": 142}},\r
              "h2": {"coord": {"x": 430,"y": 142}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 142}},\r
              "h1": {"coord": {"x": 429,"y": 142}, "use": false},\r
              "h2": {"coord": {"x": 529,"y": 142}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 142}},\r
              "h1": {"coord": {"x": 429,"y": 142}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 142}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 392}},\r
              "h1": {"coord": {"x": 204,"y": 158}},\r
              "h2": {"coord": {"x": 254,"y": 392}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 590}},\r
              "h1": {"coord": {"x": 154,"y": 590}, "use": false},\r
              "h2": {"coord": {"x": 254,"y": 590}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 205,"y": 590}},\r
              "h1": {"coord": {"x": 155,"y": 590}, "use": false},\r
              "h2": {"coord": {"x": 205,"y": 766}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 480,"y": 897}},\r
              "h1": {"coord": {"x": 324,"y": 897}},\r
              "h2": {"coord": {"x": 636,"y": 897}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 755,"y": 590}},\r
              "h1": {"coord": {"x": 755,"y": 766}},\r
              "h2": {"coord": {"x": 805,"y": 590}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 755,"y": 590}},\r
              "h1": {"coord": {"x": 705,"y": 590}, "use": false},\r
              "h2": {"coord": {"x": 805,"y": 590}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 755,"y": 392}},\r
              "h1": {"coord": {"x": 705,"y": 392}, "use": false},\r
              "h2": {"coord": {"x": 755,"y": 158}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x65": {\r
      "id": "glyph-0x65",\r
      "advanceWidth": 932,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -1,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": -20}},\r
              "h1": {"coord": {"x": 429,"y": -20}, "use": false},\r
              "h2": {"coord": {"x": 529,"y": -20}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 480,"y": -20}},\r
              "h1": {"coord": {"x": 430,"y": -20}, "use": false},\r
              "h2": {"coord": {"x": 530,"y": -20}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 480,"y": -20}},\r
              "h1": {"coord": {"x": 430,"y": -20}, "use": false},\r
              "h2": {"coord": {"x": 714,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 877,"y": 155}},\r
              "h1": {"coord": {"x": 843,"y": 106}},\r
              "h2": {"coord": {"x": 886,"y": 168}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 734,"y": 244}},\r
              "h1": {"coord": {"x": 745,"y": 255}},\r
              "h2": {"coord": {"x": 680,"y": 187}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 480,"y": 142}},\r
              "h1": {"coord": {"x": 564,"y": 142}},\r
              "h2": {"coord": {"x": 530,"y": 142}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 142}},\r
              "h1": {"coord": {"x": 429,"y": 142}, "use": false},\r
              "h2": {"coord": {"x": 529,"y": 142}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 142}},\r
              "h1": {"coord": {"x": 429,"y": 142}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 142}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 392}},\r
              "h1": {"coord": {"x": 204,"y": 158}},\r
              "h2": {"coord": {"x": 254,"y": 392}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 462}},\r
              "h1": {"coord": {"x": 154,"y": 462}, "use": false},\r
              "h2": {"coord": {"x": 254,"y": 462}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 880,"y": 489}},\r
              "h1": {"coord": {"x": 830,"y": 489}, "use": false},\r
              "h2": {"coord": {"x": 887,"y": 489}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 892,"y": 502}},\r
              "h1": {"coord": {"x": 892,"y": 495}},\r
              "h2": {"coord": {"x": 942,"y": 502}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 891,"y": 573}},\r
              "h1": {"coord": {"x": 841,"y": 573}, "use": false},\r
              "h2": {"coord": {"x": 941,"y": 573}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 891,"y": 573}},\r
              "h1": {"coord": {"x": 841,"y": 573}, "use": false},\r
              "h2": {"coord": {"x": 886,"y": 887}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 482,"y": 1040}},\r
              "h1": {"coord": {"x": 724,"y": 1040}},\r
              "h2": {"coord": {"x": 532,"y": 1040}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 481,"y": 1040}},\r
              "h1": {"coord": {"x": 431,"y": 1040}, "use": false},\r
              "h2": {"coord": {"x": 531,"y": 1040}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 481,"y": 1040}},\r
              "h1": {"coord": {"x": 431,"y": 1040}, "use": false},\r
              "h2": {"coord": {"x": 236,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 592}},\r
              "h1": {"coord": {"x": 41,"y": 839}},\r
              "h2": {"coord": {"x": 90,"y": 592}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 592}},\r
              "h1": {"coord": {"x": -10,"y": 592}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 592}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 390}},\r
              "h1": {"coord": {"x": -10,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 390}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 390}},\r
              "h1": {"coord": {"x": -10,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 41,"y": 175}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": -20}},\r
              "h1": {"coord": {"x": 169,"y": -20}},\r
              "h2": {"coord": {"x": 529,"y": -20}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -6,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 481,"y": 897}},\r
              "h1": {"coord": {"x": 335,"y": 897}},\r
              "h2": {"coord": {"x": 531,"y": 897}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 481,"y": 897}},\r
              "h1": {"coord": {"x": 431,"y": 897}, "use": false},\r
              "h2": {"coord": {"x": 531,"y": 897}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 482,"y": 897}},\r
              "h1": {"coord": {"x": 432,"y": 897}, "use": false},\r
              "h2": {"coord": {"x": 624,"y": 897}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 725,"y": 636}},\r
              "h1": {"coord": {"x": 711,"y": 788}},\r
              "h2": {"coord": {"x": 775,"y": 636}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 207,"y": 622}},\r
              "h1": {"coord": {"x": 157,"y": 622}, "use": false},\r
              "h2": {"coord": {"x": 221,"y": 781}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x66": {\r
      "id": "glyph-0x66",\r
      "advanceWidth": 771,\r
      "usedIn": [\r
        "liga-f-i",\r
        "liga-f-f-i",\r
        "liga-f-f",\r
        "liga-f-f",\r
        "liga-f-l"\r
      ],\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 13,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 381,"y": 0}},\r
              "h1": {"coord": {"x": 331,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 384,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 386,"y": 5}},\r
              "h1": {"coord": {"x": 386,"y": 2}},\r
              "h2": {"coord": {"x": 436,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 386,"y": 160}},\r
              "h1": {"coord": {"x": 336,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 386,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 381,"y": 165}},\r
              "h1": {"coord": {"x": 384,"y": 165}},\r
              "h2": {"coord": {"x": 431,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 165}},\r
              "h1": {"coord": {"x": 246,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 346,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 855}},\r
              "h1": {"coord": {"x": 246,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 346,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 501,"y": 855}},\r
              "h1": {"coord": {"x": 451,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 504,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 506,"y": 860}},\r
              "h1": {"coord": {"x": 506,"y": 857}},\r
              "h2": {"coord": {"x": 556,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 506,"y": 1015}},\r
              "h1": {"coord": {"x": 456,"y": 1015}, "use": false},\r
              "h2": {"coord": {"x": 506,"y": 1018}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 501,"y": 1020}},\r
              "h1": {"coord": {"x": 504,"y": 1020}},\r
              "h2": {"coord": {"x": 551,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 1020}},\r
              "h1": {"coord": {"x": 246,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 346,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 1111}},\r
              "h1": {"coord": {"x": 246,"y": 1111}, "use": false},\r
              "h2": {"coord": {"x": 296,"y": 1287}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 514,"y": 1339}},\r
              "h1": {"coord": {"x": 368,"y": 1339}},\r
              "h2": {"coord": {"x": 568,"y": 1339}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 671,"y": 1327}},\r
              "h1": {"coord": {"x": 627,"y": 1333}},\r
              "h2": {"coord": {"x": 684,"y": 1325}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 696,"y": 1343}},\r
              "h1": {"coord": {"x": 692,"y": 1326}},\r
              "h2": {"coord": {"x": 746,"y": 1343}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 696,"y": 1343}},\r
              "h1": {"coord": {"x": 646,"y": 1343}, "use": false},\r
              "h2": {"coord": {"x": 746,"y": 1343}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 696,"y": 1343}},\r
              "h1": {"coord": {"x": 646,"y": 1343}, "use": false},\r
              "h2": {"coord": {"x": 746,"y": 1343}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 730,"y": 1466}},\r
              "h1": {"coord": {"x": 680,"y": 1466}, "use": false},\r
              "h2": {"coord": {"x": 733,"y": 1480}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 713,"y": 1493}},\r
              "h1": {"coord": {"x": 731,"y": 1489}},\r
              "h2": {"coord": {"x": 646,"y": 1508}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 514,"y": 1510}},\r
              "h1": {"coord": {"x": 541,"y": 1510}},\r
              "h2": {"coord": {"x": 136,"y": 1510}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 131,"y": 1076}},\r
              "h1": {"coord": {"x": 131,"y": 1226}},\r
              "h2": {"coord": {"x": 181,"y": 1076}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 131,"y": 1020}},\r
              "h1": {"coord": {"x": 81,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 181,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1020}},\r
              "h1": {"coord": {"x": -5,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1015}},\r
              "h1": {"coord": {"x": 40,"y": 1018}},\r
              "h2": {"coord": {"x": 90,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 860}},\r
              "h1": {"coord": {"x": -10,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 857}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 855}},\r
              "h1": {"coord": {"x": 42,"y": 855}},\r
              "h2": {"coord": {"x": 95,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 131,"y": 855}},\r
              "h1": {"coord": {"x": 81,"y": 855}},\r
              "h2": {"coord": {"x": 181,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 131,"y": 165}},\r
              "h1": {"coord": {"x": 81,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 181,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x67": {\r
      "id": "glyph-0x67",\r
      "advanceWidth": 1048,\r
      "contextCharacters": "bgy",\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 8,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1003,"y": 1020}},\r
              "h1": {"coord": {"x": 953,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 1053,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 872,"y": 1020}},\r
              "h1": {"coord": {"x": 822,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 849,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 814,"y": 991}},\r
              "h1": {"coord": {"x": 828,"y": 1009}},\r
              "h2": {"coord": {"x": 864,"y": 991}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 781,"y": 947}},\r
              "h1": {"coord": {"x": 731,"y": 947}, "use": false},\r
              "h2": {"coord": {"x": 704,"y": 1005}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 1040}},\r
              "h1": {"coord": {"x": 609,"y": 1040}},\r
              "h2": {"coord": {"x": 249,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 571}},\r
              "h1": {"coord": {"x": 40,"y": 830}},\r
              "h2": {"coord": {"x": 40,"y": 471}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 319}},\r
              "h1": {"coord": {"x": 71,"y": 385}},\r
              "h2": {"coord": {"x": 85,"y": 272}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 59,"y": 162}},\r
              "h1": {"coord": {"x": 59,"y": 211}},\r
              "h2": {"coord": {"x": 59,"y": 58}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 348,"y": -100}},\r
              "h1": {"coord": {"x": 118,"y": -100}},\r
              "h2": {"coord": {"x": 546,"y": -100}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 773,"y": -44}},\r
              "h1": {"coord": {"x": 661,"y": -44}},\r
              "h2": {"coord": {"x": 803,"y": -44}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 796,"y": -79}},\r
              "h1": {"coord": {"x": 796,"y": -58}},\r
              "h2": {"coord": {"x": 796,"y": -272}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": -287}},\r
              "h1": {"coord": {"x": 708,"y": -287}},\r
              "h2": {"coord": {"x": 373,"y": -287}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 228,"y": -271}},\r
              "h1": {"coord": {"x": 267,"y": -278}},\r
              "h2": {"coord": {"x": 222,"y": -270}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": -279}},\r
              "h1": {"coord": {"x": 216,"y": -273}},\r
              "h2": {"coord": {"x": 264,"y": -279}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 176,"y": -418}},\r
              "h1": {"coord": {"x": 126,"y": -418}, "use": false},\r
              "h2": {"coord": {"x": 174,"y": -425}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 185,"y": -433}},\r
              "h1": {"coord": {"x": 178,"y": -432}},\r
              "h2": {"coord": {"x": 249,"y": -447}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": -450}},\r
              "h1": {"coord": {"x": 365,"y": -450}},\r
              "h2": {"coord": {"x": 907,"y": -450}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 956,"y": -44}},\r
              "h1": {"coord": {"x": 956,"y": -259}},\r
              "h2": {"coord": {"x": 956,"y": 32}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 801,"y": 137}},\r
              "h1": {"coord": {"x": 947,"y": 137}},\r
              "h2": {"coord": {"x": 677,"y": 137}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 382,"y": 67}},\r
              "h1": {"coord": {"x": 545,"y": 67}},\r
              "h2": {"coord": {"x": 249,"y": 67}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 210,"y": 165}},\r
              "h1": {"coord": {"x": 210,"y": 103}},\r
              "h2": {"coord": {"x": 210,"y": 191}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 242,"y": 236}},\r
              "h1": {"coord": {"x": 223,"y": 217}},\r
              "h2": {"coord": {"x": 315,"y": 199}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 180}},\r
              "h1": {"coord": {"x": 405,"y": 180}},\r
              "h2": {"coord": {"x": 633,"y": 180}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 824,"y": 270}},\r
              "h1": {"coord": {"x": 743,"y": 211}},\r
              "h2": {"coord": {"x": 919,"y": 340}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 571}},\r
              "h1": {"coord": {"x": 969,"y": 444}},\r
              "h2": {"coord": {"x": 969,"y": 670}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 887,"y": 838}},\r
              "h1": {"coord": {"x": 939,"y": 762}},\r
              "h2": {"coord": {"x": 937,"y": 838}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 899,"y": 857}},\r
              "h1": {"coord": {"x": 849,"y": 857}, "use": false},\r
              "h2": {"coord": {"x": 949,"y": 857}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1003,"y": 857}},\r
              "h1": {"coord": {"x": 953,"y": 857}, "use": false},\r
              "h2": {"coord": {"x": 1006,"y": 857}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1008,"y": 862}},\r
              "h1": {"coord": {"x": 1008,"y": 859}},\r
              "h2": {"coord": {"x": 1058,"y": 862}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1008,"y": 1015}},\r
              "h1": {"coord": {"x": 958,"y": 1015}, "use": false},\r
              "h2": {"coord": {"x": 1008,"y": 1018}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1003,"y": 1020}},\r
              "h1": {"coord": {"x": 1006,"y": 1020}},\r
              "h2": {"coord": {"x": 1053,"y": 1020}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 209,"y": 568}},\r
              "h1": {"coord": {"x": 209,"y": 343}},\r
              "h2": {"coord": {"x": 209,"y": 751}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 901}},\r
              "h1": {"coord": {"x": 342,"y": 901}},\r
              "h2": {"coord": {"x": 668,"y": 901}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 568}},\r
              "h1": {"coord": {"x": 800,"y": 751}},\r
              "h2": {"coord": {"x": 800,"y": 343}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 319}},\r
              "h1": {"coord": {"x": 594,"y": 319}},\r
              "h2": {"coord": {"x": 416,"y": 319}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x68": {\r
      "id": "glyph-0x68",\r
      "advanceWidth": 1088,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 14,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 165}},\r
              "h1": {"coord": {"x": 1046,"y": 165}},\r
              "h2": {"coord": {"x": 1093,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 983,"y": 165}},\r
              "h1": {"coord": {"x": 933,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 1033,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 983,"y": 635}},\r
              "h1": {"coord": {"x": 933,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 1033,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 983,"y": 635}},\r
              "h1": {"coord": {"x": 933,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 983,"y": 860}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 536,"y": 1039}},\r
              "h1": {"coord": {"x": 839,"y": 1039}},\r
              "h2": {"coord": {"x": 434,"y": 1039}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 975}},\r
              "h1": {"coord": {"x": 355,"y": 1015}},\r
              "h2": {"coord": {"x": 345,"y": 975}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 1408}},\r
              "h1": {"coord": {"x": 245,"y": 1408}, "use": false},\r
              "h2": {"coord": {"x": 295,"y": 1453}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 213,"y": 1490}},\r
              "h1": {"coord": {"x": 258,"y": 1490}},\r
              "h2": {"coord": {"x": 263,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1330}},\r
              "h1": {"coord": {"x": -10,"y": 1330}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1327}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1325}},\r
              "h1": {"coord": {"x": 42,"y": 1325}},\r
              "h2": {"coord": {"x": 95,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 1325}},\r
              "h1": {"coord": {"x": 80,"y": 1325}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 165}},\r
              "h1": {"coord": {"x": 80,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 357,"y": 0}},\r
              "h1": {"coord": {"x": 307,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 360,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 362,"y": 5}},\r
              "h1": {"coord": {"x": 362,"y": 2}},\r
              "h2": {"coord": {"x": 412,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 362,"y": 160}},\r
              "h1": {"coord": {"x": 312,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 362,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 357,"y": 165}},\r
              "h1": {"coord": {"x": 360,"y": 165}},\r
              "h2": {"coord": {"x": 407,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 165}},\r
              "h1": {"coord": {"x": 245,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 345,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 791}},\r
              "h1": {"coord": {"x": 245,"y": 791}, "use": false},\r
              "h2": {"coord": {"x": 366,"y": 875}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 536,"y": 894}},\r
              "h1": {"coord": {"x": 482,"y": 894}},\r
              "h2": {"coord": {"x": 574,"y": 894}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 816,"y": 635}},\r
              "h1": {"coord": {"x": 816,"y": 876}},\r
              "h2": {"coord": {"x": 866,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 816,"y": 635}},\r
              "h1": {"coord": {"x": 766,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 866,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 816,"y": 165}},\r
              "h1": {"coord": {"x": 766,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 866,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 731,"y": 165}},\r
              "h1": {"coord": {"x": 681,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 728,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 726,"y": 160}},\r
              "h1": {"coord": {"x": 726,"y": 163}},\r
              "h2": {"coord": {"x": 776,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 726,"y": 5}},\r
              "h1": {"coord": {"x": 676,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 726,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 731,"y": 0}},\r
              "h1": {"coord": {"x": 728,"y": 0}},\r
              "h2": {"coord": {"x": 781,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 0}},\r
              "h1": {"coord": {"x": 993,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1046,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1048,"y": 5}},\r
              "h1": {"coord": {"x": 1048,"y": 2}},\r
              "h2": {"coord": {"x": 1098,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1048,"y": 160}},\r
              "h1": {"coord": {"x": 998,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 1048,"y": 163}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x69": {\r
      "id": "glyph-0x69",\r
      "advanceWidth": 412,\r
      "usedIn": [\r
        "liga-f-i"\r
      ],\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 855}},\r
              "h1": {"coord": {"x": 42,"y": 855}},\r
              "h2": {"coord": {"x": 95,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 855}},\r
              "h1": {"coord": {"x": 80,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 165}},\r
              "h1": {"coord": {"x": 80,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 55,"y": 165}},\r
              "h1": {"coord": {"x": 5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 52,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 50,"y": 160}},\r
              "h1": {"coord": {"x": 50,"y": 163}},\r
              "h2": {"coord": {"x": 100,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 50,"y": 5}},\r
              "h1": {"coord": {"x": 0,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 50,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 55,"y": 0}},\r
              "h1": {"coord": {"x": 52,"y": 0}},\r
              "h2": {"coord": {"x": 105,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 367,"y": 0}},\r
              "h1": {"coord": {"x": 317,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 370,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 372,"y": 5}},\r
              "h1": {"coord": {"x": 372,"y": 2}},\r
              "h2": {"coord": {"x": 422,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 372,"y": 160}},\r
              "h1": {"coord": {"x": 322,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 367,"y": 165}},\r
              "h1": {"coord": {"x": 370,"y": 165}},\r
              "h2": {"coord": {"x": 417,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 165}},\r
              "h1": {"coord": {"x": 245,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 345,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 938}},\r
              "h1": {"coord": {"x": 245,"y": 938}, "use": false},\r
              "h2": {"coord": {"x": 295,"y": 984}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 213,"y": 1020}},\r
              "h1": {"coord": {"x": 259,"y": 1020}},\r
              "h2": {"coord": {"x": 263,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1020}},\r
              "h1": {"coord": {"x": -5,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1015}},\r
              "h1": {"coord": {"x": 40,"y": 1018}},\r
              "h2": {"coord": {"x": 90,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 860}},\r
              "h1": {"coord": {"x": -10,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 857}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 92,"y": 1187}},\r
              "h1": {"coord": {"x": 69,"y": 1204}},\r
              "h2": {"coord": {"x": 112.10440353665814,"y": 1172.1402234729048}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 171,"y": 1164}},\r
              "h1": {"coord": {"x": 139,"y": 1164}},\r
              "h2": {"coord": {"x": 203,"y": 1164}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 250,"y": 1187}},\r
              "h1": {"coord": {"x": 230,"y": 1172}},\r
              "h2": {"coord": {"x": 273,"y": 1204}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 286,"y": 1261}},\r
              "h1": {"coord": {"x": 286,"y": 1230}},\r
              "h2": {"coord": {"x": 286,"y": 1325}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 171,"y": 1377}},\r
              "h1": {"coord": {"x": 234,"y": 1377}},\r
              "h2": {"coord": {"x": 108,"y": 1377}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 56,"y": 1261}},\r
              "h1": {"coord": {"x": 56,"y": 1325}},\r
              "h2": {"coord": {"x": 56,"y": 1230}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x6A": {\r
      "id": "glyph-0x6A",\r
      "advanceWidth": 300,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 57,"y": 1187}},\r
              "h1": {"coord": {"x": 34,"y": 1204}},\r
              "h2": {"coord": {"x": 77.10440353665814,"y": 1172.1402234729048}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 136,"y": 1165}},\r
              "h1": {"coord": {"x": 104,"y": 1165}},\r
              "h2": {"coord": {"x": 168,"y": 1165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 215,"y": 1187}},\r
              "h1": {"coord": {"x": 195,"y": 1172}},\r
              "h2": {"coord": {"x": 238,"y": 1204}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 251,"y": 1261}},\r
              "h1": {"coord": {"x": 251,"y": 1230}},\r
              "h2": {"coord": {"x": 251,"y": 1325}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 136,"y": 1378}},\r
              "h1": {"coord": {"x": 199,"y": 1378}},\r
              "h2": {"coord": {"x": 73,"y": 1378}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 21,"y": 1261}},\r
              "h1": {"coord": {"x": 21,"y": 1325}},\r
              "h2": {"coord": {"x": 21,"y": 1230}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": 7,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": -322,"y": -419}},\r
              "h1": {"coord": {"x": -340,"y": -415}},\r
              "h2": {"coord": {"x": -255,"y": -434}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -123,"y": -436}},\r
              "h1": {"coord": {"x": -150,"y": -436}},\r
              "h2": {"coord": {"x": 255,"y": -436}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 260,"y": -1}},\r
              "h1": {"coord": {"x": 260,"y": -151}},\r
              "h2": {"coord": {"x": 310,"y": -1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 260,"y": 938}},\r
              "h1": {"coord": {"x": 210,"y": 938}, "use": false},\r
              "h2": {"coord": {"x": 260,"y": 984}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 178,"y": 1020}},\r
              "h1": {"coord": {"x": 224,"y": 1020}},\r
              "h2": {"coord": {"x": 228,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 10,"y": 1020}},\r
              "h1": {"coord": {"x": -40,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 7,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 5,"y": 1015}},\r
              "h1": {"coord": {"x": 5,"y": 1018}},\r
              "h2": {"coord": {"x": 55,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 5,"y": 861}},\r
              "h1": {"coord": {"x": -45,"y": 861}, "use": false},\r
              "h2": {"coord": {"x": 5,"y": 858}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 10,"y": 856}},\r
              "h1": {"coord": {"x": 7,"y": 856}},\r
              "h2": {"coord": {"x": 60,"y": 856}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 95,"y": 856}},\r
              "h1": {"coord": {"x": 45,"y": 856}, "use": false},\r
              "h2": {"coord": {"x": 145,"y": 856}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 95,"y": -37}},\r
              "h1": {"coord": {"x": 45,"y": -37}, "use": false},\r
              "h2": {"coord": {"x": 95,"y": -213}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -123,"y": -265}},\r
              "h1": {"coord": {"x": 23,"y": -265}},\r
              "h2": {"coord": {"x": -177,"y": -265}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -280,"y": -253}},\r
              "h1": {"coord": {"x": -236,"y": -259}},\r
              "h2": {"coord": {"x": -293,"y": -251}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -305,"y": -269}},\r
              "h1": {"coord": {"x": -301,"y": -252}},\r
              "h2": {"coord": {"x": -255,"y": -269}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -305,"y": -269}},\r
              "h1": {"coord": {"x": -355,"y": -269}, "use": false},\r
              "h2": {"coord": {"x": -255,"y": -269}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -305,"y": -269}},\r
              "h1": {"coord": {"x": -355,"y": -269}, "use": false},\r
              "h2": {"coord": {"x": -255,"y": -269}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -339,"y": -392}},\r
              "h1": {"coord": {"x": -389,"y": -392}, "use": false},\r
              "h2": {"coord": {"x": -342,"y": -406}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x6B": {\r
      "id": "glyph-0x6B",\r
      "advanceWidth": 846,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 16,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 381,"y": 0}},\r
              "h1": {"coord": {"x": 331,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 384,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 386,"y": 5}},\r
              "h1": {"coord": {"x": 386,"y": 2}},\r
              "h2": {"coord": {"x": 436,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 386,"y": 160}},\r
              "h1": {"coord": {"x": 336,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 386,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 381,"y": 165}},\r
              "h1": {"coord": {"x": 384,"y": 165}},\r
              "h2": {"coord": {"x": 431,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 165}},\r
              "h1": {"coord": {"x": 246,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 346,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 524}},\r
              "h1": {"coord": {"x": 246,"y": 524}, "use": false},\r
              "h2": {"coord": {"x": 346,"y": 524}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 312,"y": 540}},\r
              "h1": {"coord": {"x": 262,"y": 540}, "use": false},\r
              "h2": {"coord": {"x": 400,"y": 394}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 623,"y": 26}},\r
              "h1": {"coord": {"x": 613,"y": 40}},\r
              "h2": {"coord": {"x": 636,"y": 8}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 685,"y": 0}},\r
              "h1": {"coord": {"x": 662,"y": 0}},\r
              "h2": {"coord": {"x": 735,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 801,"y": 0}},\r
              "h1": {"coord": {"x": 751,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 804,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 806,"y": 5}},\r
              "h1": {"coord": {"x": 806,"y": 2}},\r
              "h2": {"coord": {"x": 856,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 806,"y": 160}},\r
              "h1": {"coord": {"x": 756,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 806,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 801,"y": 165}},\r
              "h1": {"coord": {"x": 804,"y": 165}},\r
              "h2": {"coord": {"x": 851,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 726,"y": 165}},\r
              "h1": {"coord": {"x": 676,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 776,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": 650}},\r
              "h1": {"coord": {"x": 375,"y": 650}, "use": false},\r
              "h2": {"coord": {"x": 475,"y": 650}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 634,"y": 854}},\r
              "h1": {"coord": {"x": 584,"y": 854}, "use": false},\r
              "h2": {"coord": {"x": 684,"y": 854}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 801,"y": 854}},\r
              "h1": {"coord": {"x": 751,"y": 854}, "use": false},\r
              "h2": {"coord": {"x": 804,"y": 854}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 806,"y": 859}},\r
              "h1": {"coord": {"x": 806,"y": 856}},\r
              "h2": {"coord": {"x": 856,"y": 859}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 806,"y": 1014}},\r
              "h1": {"coord": {"x": 756,"y": 1014}, "use": false},\r
              "h2": {"coord": {"x": 806,"y": 1017}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 801,"y": 1019}},\r
              "h1": {"coord": {"x": 804,"y": 1019}},\r
              "h2": {"coord": {"x": 851,"y": 1019}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 632,"y": 1019}},\r
              "h1": {"coord": {"x": 582,"y": 1019}, "use": false},\r
              "h2": {"coord": {"x": 609,"y": 1019}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 574,"y": 995}},\r
              "h1": {"coord": {"x": 589,"y": 1010}},\r
              "h2": {"coord": {"x": 562,"y": 983}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 724}},\r
              "h1": {"coord": {"x": 376,"y": 802}},\r
              "h2": {"coord": {"x": 346,"y": 724}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 1407}},\r
              "h1": {"coord": {"x": 246,"y": 1407}, "use": false},\r
              "h2": {"coord": {"x": 296,"y": 1453}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 213,"y": 1490}},\r
              "h1": {"coord": {"x": 259,"y": 1490}},\r
              "h2": {"coord": {"x": 263,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1330}},\r
              "h1": {"coord": {"x": -10,"y": 1330}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1327}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1325}},\r
              "h1": {"coord": {"x": 42,"y": 1325}},\r
              "h2": {"coord": {"x": 95,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 1325}},\r
              "h1": {"coord": {"x": 80,"y": 1325}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 165}},\r
              "h1": {"coord": {"x": 80,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 165}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x6C": {\r
      "id": "glyph-0x6C",\r
      "advanceWidth": 426,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 381,"y": 0}},\r
              "h1": {"coord": {"x": 331,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 384,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 386,"y": 5}},\r
              "h1": {"coord": {"x": 386,"y": 2}},\r
              "h2": {"coord": {"x": 436,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 386,"y": 160}},\r
              "h1": {"coord": {"x": 336,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 386,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 381,"y": 165}},\r
              "h1": {"coord": {"x": 384,"y": 165}},\r
              "h2": {"coord": {"x": 431,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 165}},\r
              "h1": {"coord": {"x": 246,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 346,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 1407}},\r
              "h1": {"coord": {"x": 246,"y": 1407}, "use": false},\r
              "h2": {"coord": {"x": 296,"y": 1453}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 213,"y": 1490}},\r
              "h1": {"coord": {"x": 259,"y": 1490}},\r
              "h2": {"coord": {"x": 263,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1330}},\r
              "h1": {"coord": {"x": -10,"y": 1330}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1327}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1325}},\r
              "h1": {"coord": {"x": 42,"y": 1325}},\r
              "h2": {"coord": {"x": 95,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 1325}},\r
              "h1": {"coord": {"x": 80,"y": 1325}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 165}},\r
              "h1": {"coord": {"x": 80,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 165}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x6D": {\r
      "id": "glyph-0x6D",\r
      "advanceWidth": 1556,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 16,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1511,"y": 165}},\r
              "h1": {"coord": {"x": 1461,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 1561,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1451,"y": 165}},\r
              "h1": {"coord": {"x": 1401,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 1501,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1451,"y": 635}},\r
              "h1": {"coord": {"x": 1401,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 1501,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1451,"y": 635}},\r
              "h1": {"coord": {"x": 1401,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 1451,"y": 860}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1034,"y": 1039}},\r
              "h1": {"coord": {"x": 1337,"y": 1039}},\r
              "h2": {"coord": {"x": 920,"y": 1039}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 773,"y": 960}},\r
              "h1": {"coord": {"x": 835,"y": 1009}},\r
              "h2": {"coord": {"x": 707,"y": 1010}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 493,"y": 1039}},\r
              "h1": {"coord": {"x": 616,"y": 1039}},\r
              "h2": {"coord": {"x": 403,"y": 1039}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 275,"y": 989}},\r
              "h1": {"coord": {"x": 332,"y": 1021}},\r
              "h2": {"coord": {"x": 260,"y": 1007}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": 1019}},\r
              "h1": {"coord": {"x": 238,"y": 1019}},\r
              "h2": {"coord": {"x": 262,"y": 1019}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1019}},\r
              "h1": {"coord": {"x": -5,"y": 1019}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1019}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1014}},\r
              "h1": {"coord": {"x": 40,"y": 1017}},\r
              "h2": {"coord": {"x": 90,"y": 1014}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 859}},\r
              "h1": {"coord": {"x": -10,"y": 859}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 856}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 854}},\r
              "h1": {"coord": {"x": 42,"y": 854}},\r
              "h2": {"coord": {"x": 95,"y": 854}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 129,"y": 854}},\r
              "h1": {"coord": {"x": 79,"y": 854}, "use": false},\r
              "h2": {"coord": {"x": 179,"y": 854}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 129,"y": 165}},\r
              "h1": {"coord": {"x": 79,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 179,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 357,"y": 0}},\r
              "h1": {"coord": {"x": 307,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 360,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 362,"y": 5}},\r
              "h1": {"coord": {"x": 362,"y": 2}},\r
              "h2": {"coord": {"x": 412,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 362,"y": 160}},\r
              "h1": {"coord": {"x": 312,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 362,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 357,"y": 165}},\r
              "h1": {"coord": {"x": 360,"y": 165}},\r
              "h2": {"coord": {"x": 407,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": 165}},\r
              "h1": {"coord": {"x": 244,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 344,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": 830}},\r
              "h1": {"coord": {"x": 244,"y": 830}, "use": false},\r
              "h2": {"coord": {"x": 363,"y": 881}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 493,"y": 894}},\r
              "h1": {"coord": {"x": 449,"y": 894}},\r
              "h2": {"coord": {"x": 531,"y": 894}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 743,"y": 635}},\r
              "h1": {"coord": {"x": 743,"y": 876}},\r
              "h2": {"coord": {"x": 793,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 743,"y": 635}},\r
              "h1": {"coord": {"x": 693,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 793,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 743,"y": 165}},\r
              "h1": {"coord": {"x": 693,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 793,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 701,"y": 165}},\r
              "h1": {"coord": {"x": 651,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 698,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 696,"y": 160}},\r
              "h1": {"coord": {"x": 696,"y": 163}},\r
              "h2": {"coord": {"x": 746,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 696,"y": 5}},\r
              "h1": {"coord": {"x": 646,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 696,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 701,"y": 0}},\r
              "h1": {"coord": {"x": 698,"y": 0}},\r
              "h2": {"coord": {"x": 751,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 953,"y": 0}},\r
              "h1": {"coord": {"x": 903,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 956,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 958,"y": 5}},\r
              "h1": {"coord": {"x": 958,"y": 2}},\r
              "h2": {"coord": {"x": 1008,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 958,"y": 160}},\r
              "h1": {"coord": {"x": 908,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 958,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 953,"y": 165}},\r
              "h1": {"coord": {"x": 956,"y": 165}},\r
              "h2": {"coord": {"x": 1003,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 910,"y": 165}},\r
              "h1": {"coord": {"x": 860,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 960,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 910,"y": 635}},\r
              "h1": {"coord": {"x": 860,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 960,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 910,"y": 635}},\r
              "h1": {"coord": {"x": 860,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 910,"y": 714}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 865,"y": 849}},\r
              "h1": {"coord": {"x": 896,"y": 787}},\r
              "h2": {"coord": {"x": 927,"y": 884}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1034,"y": 894}},\r
              "h1": {"coord": {"x": 996,"y": 894}},\r
              "h2": {"coord": {"x": 1072,"y": 894}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1284,"y": 635}},\r
              "h1": {"coord": {"x": 1284,"y": 876}},\r
              "h2": {"coord": {"x": 1334,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1284,"y": 635}},\r
              "h1": {"coord": {"x": 1234,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 1334,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1284,"y": 165}},\r
              "h1": {"coord": {"x": 1234,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 1334,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1199,"y": 165}},\r
              "h1": {"coord": {"x": 1149,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 1196,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1194,"y": 160}},\r
              "h1": {"coord": {"x": 1194,"y": 163}},\r
              "h2": {"coord": {"x": 1244,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1194,"y": 5}},\r
              "h1": {"coord": {"x": 1144,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 1194,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1199,"y": 0}},\r
              "h1": {"coord": {"x": 1196,"y": 0}},\r
              "h2": {"coord": {"x": 1249,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1511,"y": 0}},\r
              "h1": {"coord": {"x": 1461,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1514,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1516,"y": 5}},\r
              "h1": {"coord": {"x": 1516,"y": 2}},\r
              "h2": {"coord": {"x": 1566,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1516,"y": 160}},\r
              "h1": {"coord": {"x": 1466,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 1516,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1511,"y": 165}},\r
              "h1": {"coord": {"x": 1514,"y": 165}},\r
              "h2": {"coord": {"x": 1561,"y": 165}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x6E": {\r
      "id": "glyph-0x6E",\r
      "advanceWidth": 1088,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 13,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 165}},\r
              "h1": {"coord": {"x": 1046,"y": 165}},\r
              "h2": {"coord": {"x": 1093,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 983,"y": 165}},\r
              "h1": {"coord": {"x": 933,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 1033,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 983,"y": 635}},\r
              "h1": {"coord": {"x": 933,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 983,"y": 860}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 536,"y": 1039}},\r
              "h1": {"coord": {"x": 839,"y": 1039}},\r
              "h2": {"coord": {"x": 429,"y": 1039}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 287,"y": 969}},\r
              "h1": {"coord": {"x": 348,"y": 1012}},\r
              "h2": {"coord": {"x": 274,"y": 998}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": 1019}},\r
              "h1": {"coord": {"x": 246,"y": 1019}},\r
              "h2": {"coord": {"x": 262,"y": 1019}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1019}},\r
              "h1": {"coord": {"x": -5,"y": 1019}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1019}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1014}},\r
              "h1": {"coord": {"x": 40,"y": 1017}},\r
              "h2": {"coord": {"x": 90,"y": 1014}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 859}},\r
              "h1": {"coord": {"x": -10,"y": 859}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 856}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 854}},\r
              "h1": {"coord": {"x": 42,"y": 854}},\r
              "h2": {"coord": {"x": 95,"y": 854}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 129,"y": 854}},\r
              "h1": {"coord": {"x": 79,"y": 854}, "use": false},\r
              "h2": {"coord": {"x": 179,"y": 854}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 129,"y": 165}},\r
              "h1": {"coord": {"x": 79,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 179,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 357,"y": 0}},\r
              "h1": {"coord": {"x": 307,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 360,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 362,"y": 5}},\r
              "h1": {"coord": {"x": 362,"y": 2}},\r
              "h2": {"coord": {"x": 412,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 362,"y": 160}},\r
              "h1": {"coord": {"x": 312,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 362,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 357,"y": 165}},\r
              "h1": {"coord": {"x": 360,"y": 165}},\r
              "h2": {"coord": {"x": 407,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": 165}},\r
              "h1": {"coord": {"x": 244,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 344,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": 790}},\r
              "h1": {"coord": {"x": 244,"y": 790}, "use": false},\r
              "h2": {"coord": {"x": 365,"y": 874}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 536,"y": 894}},\r
              "h1": {"coord": {"x": 482,"y": 894}},\r
              "h2": {"coord": {"x": 574,"y": 894}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 816,"y": 635}},\r
              "h1": {"coord": {"x": 816,"y": 876}},\r
              "h2": {"coord": {"x": 866,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 816,"y": 165}},\r
              "h1": {"coord": {"x": 766,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 866,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 731,"y": 165}},\r
              "h1": {"coord": {"x": 681,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 728,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 726,"y": 160}},\r
              "h1": {"coord": {"x": 726,"y": 163}},\r
              "h2": {"coord": {"x": 776,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 726,"y": 5}},\r
              "h1": {"coord": {"x": 676,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 726,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 731,"y": 0}},\r
              "h1": {"coord": {"x": 728,"y": 0}},\r
              "h2": {"coord": {"x": 781,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 0}},\r
              "h1": {"coord": {"x": 993,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1046,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1048,"y": 5}},\r
              "h1": {"coord": {"x": 1048,"y": 2}},\r
              "h2": {"coord": {"x": 1098,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1048,"y": 160}},\r
              "h1": {"coord": {"x": 998,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 1048,"y": 163}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x72": {\r
      "id": "glyph-0x72",\r
      "advanceWidth": 866,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 12,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 855}},\r
              "h1": {"coord": {"x": 42,"y": 855}},\r
              "h2": {"coord": {"x": 95,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 855}},\r
              "h1": {"coord": {"x": 80,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 165}},\r
              "h1": {"coord": {"x": 80,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 69,"y": 165}},\r
              "h1": {"coord": {"x": 19,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 66,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 64,"y": 160}},\r
              "h1": {"coord": {"x": 64,"y": 163}},\r
              "h2": {"coord": {"x": 114,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 64,"y": 5}},\r
              "h1": {"coord": {"x": 14,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 64,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 69,"y": 0}},\r
              "h1": {"coord": {"x": 66,"y": 0}},\r
              "h2": {"coord": {"x": 119,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 380,"y": 0}},\r
              "h1": {"coord": {"x": 330,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 383,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 385,"y": 5}},\r
              "h1": {"coord": {"x": 385,"y": 2}},\r
              "h2": {"coord": {"x": 435,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 385,"y": 160}},\r
              "h1": {"coord": {"x": 335,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 385,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 380,"y": 165}},\r
              "h1": {"coord": {"x": 383,"y": 165}},\r
              "h2": {"coord": {"x": 430,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 165}},\r
              "h1": {"coord": {"x": 245,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 345,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 698}},\r
              "h1": {"coord": {"x": 245,"y": 698}, "use": false},\r
              "h2": {"coord": {"x": 340,"y": 814}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 596,"y": 864}},\r
              "h1": {"coord": {"x": 464,"y": 864}},\r
              "h2": {"coord": {"x": 613,"y": 864}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 737,"y": 844}},\r
              "h1": {"coord": {"x": 675,"y": 864}},\r
              "h2": {"coord": {"x": 751,"y": 840}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 764,"y": 852}},\r
              "h1": {"coord": {"x": 756,"y": 838}},\r
              "h2": {"coord": {"x": 814,"y": 852}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 823,"y": 979}},\r
              "h1": {"coord": {"x": 773,"y": 979}, "use": false},\r
              "h2": {"coord": {"x": 829,"y": 991}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 819,"y": 1001}},\r
              "h1": {"coord": {"x": 827,"y": 997}},\r
              "h2": {"coord": {"x": 869,"y": 1001}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 814,"y": 1002}},\r
              "h1": {"coord": {"x": 764,"y": 1002}, "use": false},\r
              "h2": {"coord": {"x": 864,"y": 1002}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 814,"y": 1002}},\r
              "h1": {"coord": {"x": 764,"y": 1002}, "use": false},\r
              "h2": {"coord": {"x": 752,"y": 1026}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 596,"y": 1040}},\r
              "h1": {"coord": {"x": 679,"y": 1040}},\r
              "h2": {"coord": {"x": 455,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 922}},\r
              "h1": {"coord": {"x": 359,"y": 991}},\r
              "h2": {"coord": {"x": 345,"y": 922}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 938}},\r
              "h1": {"coord": {"x": 245,"y": 938}, "use": false},\r
              "h2": {"coord": {"x": 295,"y": 984}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 213,"y": 1020}},\r
              "h1": {"coord": {"x": 259,"y": 1020}},\r
              "h2": {"coord": {"x": 263,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1020}},\r
              "h1": {"coord": {"x": -5,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1015}},\r
              "h1": {"coord": {"x": 40,"y": 1018}},\r
              "h2": {"coord": {"x": 90,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 860}},\r
              "h1": {"coord": {"x": -10,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 857}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x73": {\r
      "id": "glyph-0x73",\r
      "advanceWidth": 925,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 6,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 307,"y": 390}},\r
              "h1": {"coord": {"x": 257,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 505,"y": 390}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 712,"y": 416}},\r
              "h1": {"coord": {"x": 600,"y": 416}},\r
              "h2": {"coord": {"x": 742,"y": 416}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 735,"y": 381}},\r
              "h1": {"coord": {"x": 735,"y": 402}},\r
              "h2": {"coord": {"x": 735,"y": 188}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 374,"y": 143}},\r
              "h1": {"coord": {"x": 631,"y": 143}},\r
              "h2": {"coord": {"x": 322,"y": 143}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 97,"y": 159}},\r
              "h1": {"coord": {"x": 136,"y": 152}},\r
              "h2": {"coord": {"x": 91,"y": 160}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 83,"y": 151}},\r
              "h1": {"coord": {"x": 85,"y": 157}},\r
              "h2": {"coord": {"x": 133,"y": 151}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 12}},\r
              "h1": {"coord": {"x": -5,"y": 12}, "use": false},\r
              "h2": {"coord": {"x": 43,"y": 5}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 54,"y": -3}},\r
              "h1": {"coord": {"x": 47,"y": -2}},\r
              "h2": {"coord": {"x": 118,"y": -17}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 374,"y": -20}},\r
              "h1": {"coord": {"x": 314,"y": -20}},\r
              "h2": {"coord": {"x": 814,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 885,"y": 406}},\r
              "h1": {"coord": {"x": 885,"y": 191}},\r
              "h2": {"coord": {"x": 885,"y": 482}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 730,"y": 587}},\r
              "h1": {"coord": {"x": 876,"y": 587}},\r
              "h2": {"coord": {"x": 606,"y": 587}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 351,"y": 547}},\r
              "h1": {"coord": {"x": 514,"y": 547}},\r
              "h2": {"coord": {"x": 218,"y": 547}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 199,"y": 645}},\r
              "h1": {"coord": {"x": 199,"y": 583}},\r
              "h2": {"coord": {"x": 199,"y": 695}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 560,"y": 879}},\r
              "h1": {"coord": {"x": 186,"y": 879}},\r
              "h2": {"coord": {"x": 676,"y": 879}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 807,"y": 826}},\r
              "h1": {"coord": {"x": 772,"y": 834}},\r
              "h2": {"coord": {"x": 820,"y": 823}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 832,"y": 842}},\r
              "h1": {"coord": {"x": 828,"y": 825}},\r
              "h2": {"coord": {"x": 882,"y": 842}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 832,"y": 842}},\r
              "h1": {"coord": {"x": 782,"y": 842}, "use": false},\r
              "h2": {"coord": {"x": 882,"y": 842}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 832,"y": 842}},\r
              "h1": {"coord": {"x": 782,"y": 842}, "use": false},\r
              "h2": {"coord": {"x": 882,"y": 842}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 865,"y": 965}},\r
              "h1": {"coord": {"x": 815,"y": 965}, "use": false},\r
              "h2": {"coord": {"x": 868,"y": 979}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 849,"y": 992}},\r
              "h1": {"coord": {"x": 866,"y": 985}},\r
              "h2": {"coord": {"x": 816,"y": 1005}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 560,"y": 1040}},\r
              "h1": {"coord": {"x": 684,"y": 1040}},\r
              "h2": {"coord": {"x": 55,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 612}},\r
              "h1": {"coord": {"x": 40,"y": 666}},\r
              "h2": {"coord": {"x": 40,"y": 510}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 307,"y": 390}},\r
              "h1": {"coord": {"x": 99,"y": 390}},\r
              "h2": {"coord": {"x": 357,"y": 390}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x74": {\r
      "id": "glyph-0x74",\r
      "advanceWidth": 546,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 501,"y": 855}},\r
              "h1": {"coord": {"x": 451,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 504,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 506,"y": 860}},\r
              "h1": {"coord": {"x": 506,"y": 857}},\r
              "h2": {"coord": {"x": 556,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 506,"y": 1015}},\r
              "h1": {"coord": {"x": 456,"y": 1015}, "use": false},\r
              "h2": {"coord": {"x": 506,"y": 1018}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 501,"y": 1020}},\r
              "h1": {"coord": {"x": 504,"y": 1020}},\r
              "h2": {"coord": {"x": 551,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 318,"y": 1020}},\r
              "h1": {"coord": {"x": 268,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 368,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 318,"y": 1382}},\r
              "h1": {"coord": {"x": 268,"y": 1382}, "use": false},\r
              "h2": {"coord": {"x": 318,"y": 1387}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 310,"y": 1390}},\r
              "h1": {"coord": {"x": 315,"y": 1390}},\r
              "h2": {"coord": {"x": 360,"y": 1390}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 162,"y": 1390}},\r
              "h1": {"coord": {"x": 112,"y": 1390}, "use": false},\r
              "h2": {"coord": {"x": 157,"y": 1390}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 153,"y": 1382}},\r
              "h1": {"coord": {"x": 153,"y": 1387}},\r
              "h2": {"coord": {"x": 203,"y": 1382}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 153,"y": 1020}},\r
              "h1": {"coord": {"x": 103,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 203,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1020}},\r
              "h1": {"coord": {"x": -5,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1015}},\r
              "h1": {"coord": {"x": 40,"y": 1018}},\r
              "h2": {"coord": {"x": 90,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 860}},\r
              "h1": {"coord": {"x": -10,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 857}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 855}},\r
              "h1": {"coord": {"x": 42,"y": 855}},\r
              "h2": {"coord": {"x": 95,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 153,"y": 855}},\r
              "h1": {"coord": {"x": 103,"y": 855}},\r
              "h2": {"coord": {"x": 203,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 153,"y": 91}},\r
              "h1": {"coord": {"x": 103,"y": 91}, "use": false},\r
              "h2": {"coord": {"x": 153,"y": 41}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 244,"y": 0}},\r
              "h1": {"coord": {"x": 194,"y": 0}},\r
              "h2": {"coord": {"x": 294,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 446,"y": 0}},\r
              "h1": {"coord": {"x": 396,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 449,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 451,"y": 5}},\r
              "h1": {"coord": {"x": 451,"y": 2}},\r
              "h2": {"coord": {"x": 501,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 451,"y": 160}},\r
              "h1": {"coord": {"x": 401,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 451,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 446,"y": 165}},\r
              "h1": {"coord": {"x": 449,"y": 165}},\r
              "h2": {"coord": {"x": 496,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 327,"y": 165}},\r
              "h1": {"coord": {"x": 277,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 322,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 318,"y": 174}},\r
              "h1": {"coord": {"x": 318,"y": 169}},\r
              "h2": {"coord": {"x": 368,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 318,"y": 855}},\r
              "h1": {"coord": {"x": 268,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 368,"y": 855}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x75": {\r
      "id": "glyph-0x75",\r
      "advanceWidth": 1022,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 366}},\r
              "h1": {"coord": {"x": -10,"y": 366}, "use": false},\r
              "h2": {"coord": {"x": 47,"y": 149}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 487,"y": -20}},\r
              "h1": {"coord": {"x": 192,"y": -20}},\r
              "h2": {"coord": {"x": 594,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 735,"y": 50}},\r
              "h1": {"coord": {"x": 674,"y": 7}},\r
              "h2": {"coord": {"x": 748,"y": 21}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 811,"y": 0}},\r
              "h1": {"coord": {"x": 777,"y": 0}},\r
              "h2": {"coord": {"x": 861,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 977,"y": 0}},\r
              "h1": {"coord": {"x": 927,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 980,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 982,"y": 5}},\r
              "h1": {"coord": {"x": 982,"y": 2}},\r
              "h2": {"coord": {"x": 1032,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 982,"y": 160}},\r
              "h1": {"coord": {"x": 932,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 982,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 977,"y": 165}},\r
              "h1": {"coord": {"x": 980,"y": 165}},\r
              "h2": {"coord": {"x": 1027,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 893,"y": 165}},\r
              "h1": {"coord": {"x": 843,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 943,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 892,"y": 855}},\r
              "h1": {"coord": {"x": 842,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 942,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 977,"y": 855}},\r
              "h1": {"coord": {"x": 927,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 980,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 982,"y": 860}},\r
              "h1": {"coord": {"x": 982,"y": 857}},\r
              "h2": {"coord": {"x": 1032,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 982,"y": 1014}},\r
              "h1": {"coord": {"x": 932,"y": 1014}, "use": false},\r
              "h2": {"coord": {"x": 982,"y": 1017}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 977,"y": 1019}},\r
              "h1": {"coord": {"x": 980,"y": 1019}},\r
              "h2": {"coord": {"x": 1027,"y": 1019}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 810,"y": 1019}},\r
              "h1": {"coord": {"x": 760,"y": 1019}, "use": false},\r
              "h2": {"coord": {"x": 765,"y": 1019}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 729,"y": 937}},\r
              "h1": {"coord": {"x": 729,"y": 982}},\r
              "h2": {"coord": {"x": 779,"y": 937}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 729,"y": 229}},\r
              "h1": {"coord": {"x": 679,"y": 229}, "use": false},\r
              "h2": {"coord": {"x": 658,"y": 145}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 487,"y": 125}},\r
              "h1": {"coord": {"x": 541,"y": 125}},\r
              "h2": {"coord": {"x": 449,"y": 125}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 206,"y": 384}},\r
              "h1": {"coord": {"x": 206,"y": 143}},\r
              "h2": {"coord": {"x": 256,"y": 384}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 205,"y": 855}},\r
              "h1": {"coord": {"x": 155,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 255,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 290,"y": 855}},\r
              "h1": {"coord": {"x": 240,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 293,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 860}},\r
              "h1": {"coord": {"x": 295,"y": 857}},\r
              "h2": {"coord": {"x": 345,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 1015}},\r
              "h1": {"coord": {"x": 245,"y": 1015}, "use": false},\r
              "h2": {"coord": {"x": 295,"y": 1018}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 290,"y": 1020}},\r
              "h1": {"coord": {"x": 293,"y": 1020}},\r
              "h2": {"coord": {"x": 340,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 122,"y": 1020}},\r
              "h1": {"coord": {"x": 72,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 76,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 937}},\r
              "h1": {"coord": {"x": 40,"y": 983}},\r
              "h2": {"coord": {"x": 90,"y": 937}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 366}},\r
              "h1": {"coord": {"x": -10,"y": 366}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 366}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x76": {\r
      "id": "glyph-0x76",\r
      "advanceWidth": 1089,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 6,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1044,"y": 1020}},\r
              "h1": {"coord": {"x": 1047,"y": 1020}},\r
              "h2": {"coord": {"x": 1094,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 906,"y": 1020}},\r
              "h1": {"coord": {"x": 856,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 873,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 831,"y": 972}},\r
              "h1": {"coord": {"x": 844,"y": 1000}},\r
              "h2": {"coord": {"x": 881,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 831,"y": 972}},\r
              "h1": {"coord": {"x": 781,"y": 972}, "use": false},\r
              "h2": {"coord": {"x": 881,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 571,"y": 292}},\r
              "h1": {"coord": {"x": 521,"y": 292}, "use": false},\r
              "h2": {"coord": {"x": 621,"y": 292}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 224,"y": 1020}},\r
              "h1": {"coord": {"x": 174,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 274,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1020}},\r
              "h1": {"coord": {"x": -10,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 521,"y": 0}},\r
              "h1": {"coord": {"x": 471,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 571,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 632,"y": 0}},\r
              "h1": {"coord": {"x": 582,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 682,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 953,"y": 855}},\r
              "h1": {"coord": {"x": 903,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 1003,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1044,"y": 855}},\r
              "h1": {"coord": {"x": 994,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 1047,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1049,"y": 860}},\r
              "h1": {"coord": {"x": 1049,"y": 857}},\r
              "h2": {"coord": {"x": 1099,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1049,"y": 1015}},\r
              "h1": {"coord": {"x": 999,"y": 1015}, "use": false},\r
              "h2": {"coord": {"x": 1049,"y": 1018}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x77": {\r
      "id": "glyph-0x77",\r
      "advanceWidth": 1374,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 8,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1329,"y": 1020}},\r
              "h1": {"coord": {"x": 1332,"y": 1020}},\r
              "h2": {"coord": {"x": 1379,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1191,"y": 1020}},\r
              "h1": {"coord": {"x": 1141,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 1158,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1116,"y": 972}},\r
              "h1": {"coord": {"x": 1129,"y": 1000}},\r
              "h2": {"coord": {"x": 1166,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1116,"y": 972}},\r
              "h1": {"coord": {"x": 1066,"y": 972}, "use": false},\r
              "h2": {"coord": {"x": 1166,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1115,"y": 970}},\r
              "h1": {"coord": {"x": 1065,"y": 970}, "use": false},\r
              "h2": {"coord": {"x": 1112,"y": 962}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1109,"y": 946}},\r
              "h1": {"coord": {"x": 1110,"y": 955}},\r
              "h2": {"coord": {"x": 1159,"y": 946}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 944,"y": 312}},\r
              "h1": {"coord": {"x": 894,"y": 312}, "use": false},\r
              "h2": {"coord": {"x": 994,"y": 312}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 726,"y": 820}},\r
              "h1": {"coord": {"x": 676,"y": 820}, "use": false},\r
              "h2": {"coord": {"x": 776,"y": 820}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 680,"y": 820}},\r
              "h1": {"coord": {"x": 630,"y": 820}, "use": false},\r
              "h2": {"coord": {"x": 730,"y": 820}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 451,"y": 334}},\r
              "h1": {"coord": {"x": 401,"y": 334}, "use": false},\r
              "h2": {"coord": {"x": 501,"y": 334}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 1020}},\r
              "h1": {"coord": {"x": 164,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 264,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1020}},\r
              "h1": {"coord": {"x": -10,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 391,"y": 0}},\r
              "h1": {"coord": {"x": 341,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 441,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 502,"y": 0}},\r
              "h1": {"coord": {"x": 452,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 552,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 700,"y": 458}},\r
              "h1": {"coord": {"x": 650,"y": 458}, "use": false},\r
              "h2": {"coord": {"x": 750,"y": 458}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 926,"y": 0}},\r
              "h1": {"coord": {"x": 876,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 976,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1037,"y": 0}},\r
              "h1": {"coord": {"x": 987,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1087,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1245,"y": 855}},\r
              "h1": {"coord": {"x": 1195,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 1295,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1329,"y": 855}},\r
              "h1": {"coord": {"x": 1279,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 1332,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1334,"y": 860}},\r
              "h1": {"coord": {"x": 1334,"y": 857}},\r
              "h2": {"coord": {"x": 1384,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1334,"y": 1015}},\r
              "h1": {"coord": {"x": 1284,"y": 1015}, "use": false},\r
              "h2": {"coord": {"x": 1334,"y": 1018}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x78": {\r
      "id": "glyph-0x78",\r
      "advanceWidth": 977,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": -5,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 183,"y": 0}},\r
              "h1": {"coord": {"x": 133,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 217,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 259,"y": 50}},\r
              "h1": {"coord": {"x": 246,"y": 21}},\r
              "h2": {"coord": {"x": 309,"y": 50}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 485,"y": 387}},\r
              "h1": {"coord": {"x": 435,"y": 387}, "use": false},\r
              "h2": {"coord": {"x": 535,"y": 387}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 711,"y": 43}},\r
              "h1": {"coord": {"x": 661,"y": 43}, "use": false},\r
              "h2": {"coord": {"x": 761,"y": 43}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 712,"y": 43}},\r
              "h1": {"coord": {"x": 662,"y": 43}, "use": false},\r
              "h2": {"coord": {"x": 726,"y": 17}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 784,"y": 0}},\r
              "h1": {"coord": {"x": 753,"y": 0}},\r
              "h2": {"coord": {"x": 834,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 922,"y": 0}},\r
              "h1": {"coord": {"x": 872,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 925,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 927,"y": 5}},\r
              "h1": {"coord": {"x": 927,"y": 2}},\r
              "h2": {"coord": {"x": 977,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 927,"y": 160}},\r
              "h1": {"coord": {"x": 877,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 927,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 922,"y": 165}},\r
              "h1": {"coord": {"x": 925,"y": 165}},\r
              "h2": {"coord": {"x": 972,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 823,"y": 165}},\r
              "h1": {"coord": {"x": 773,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 873,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 590,"y": 516}},\r
              "h1": {"coord": {"x": 540,"y": 516}, "use": false},\r
              "h2": {"coord": {"x": 640,"y": 516}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 825,"y": 855}},\r
              "h1": {"coord": {"x": 775,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 875,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 932,"y": 855}},\r
              "h1": {"coord": {"x": 882,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 935,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 937,"y": 860}},\r
              "h1": {"coord": {"x": 937,"y": 857}},\r
              "h2": {"coord": {"x": 987,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 937,"y": 1014}},\r
              "h1": {"coord": {"x": 887,"y": 1014}, "use": false},\r
              "h2": {"coord": {"x": 937,"y": 1017}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 932,"y": 1019}},\r
              "h1": {"coord": {"x": 935,"y": 1019}},\r
              "h2": {"coord": {"x": 982,"y": 1019}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 794,"y": 1019}},\r
              "h1": {"coord": {"x": 744,"y": 1019}, "use": false},\r
              "h2": {"coord": {"x": 761,"y": 1019}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 719,"y": 972}},\r
              "h1": {"coord": {"x": 732,"y": 1000}},\r
              "h2": {"coord": {"x": 769,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 719,"y": 972}},\r
              "h1": {"coord": {"x": 669,"y": 972}, "use": false},\r
              "h2": {"coord": {"x": 769,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 495,"y": 659}},\r
              "h1": {"coord": {"x": 445,"y": 659}, "use": false},\r
              "h2": {"coord": {"x": 545,"y": 659}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 288,"y": 972}},\r
              "h1": {"coord": {"x": 238,"y": 972}, "use": false},\r
              "h2": {"coord": {"x": 338,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 288,"y": 972}},\r
              "h1": {"coord": {"x": 238,"y": 972}, "use": false},\r
              "h2": {"coord": {"x": 275,"y": 1000}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 213,"y": 1019}},\r
              "h1": {"coord": {"x": 246,"y": 1019}},\r
              "h2": {"coord": {"x": 263,"y": 1019}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 75,"y": 1019}},\r
              "h1": {"coord": {"x": 25,"y": 1019}, "use": false},\r
              "h2": {"coord": {"x": 72,"y": 1019}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 70,"y": 1014}},\r
              "h1": {"coord": {"x": 70,"y": 1017}},\r
              "h2": {"coord": {"x": 120,"y": 1014}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 70,"y": 860}},\r
              "h1": {"coord": {"x": 20,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 70,"y": 857}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 75,"y": 855}},\r
              "h1": {"coord": {"x": 72,"y": 855}},\r
              "h2": {"coord": {"x": 125,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 178,"y": 855}},\r
              "h1": {"coord": {"x": 128,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 228,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 391,"y": 531}},\r
              "h1": {"coord": {"x": 341,"y": 531}, "use": false},\r
              "h2": {"coord": {"x": 441,"y": 531}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 140,"y": 165}},\r
              "h1": {"coord": {"x": 90,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 190,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x79": {\r
      "id": "glyph-0x79",\r
      "advanceWidth": 1067,\r
      "contextCharacters": "bgy",\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 9,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 474,"y": -279}},\r
              "h1": {"coord": {"x": 763,"y": -279}},\r
              "h2": {"coord": {"x": 420,"y": -279}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 277,"y": -267}},\r
              "h1": {"coord": {"x": 321,"y": -273}},\r
              "h2": {"coord": {"x": 264,"y": -265}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 252,"y": -283}},\r
              "h1": {"coord": {"x": 256,"y": -266}},\r
              "h2": {"coord": {"x": 302,"y": -283}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 252,"y": -283}},\r
              "h1": {"coord": {"x": 202,"y": -283}, "use": false},\r
              "h2": {"coord": {"x": 302,"y": -283}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 252,"y": -283}},\r
              "h1": {"coord": {"x": 202,"y": -283}, "use": false},\r
              "h2": {"coord": {"x": 302,"y": -283}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 218,"y": -406}},\r
              "h1": {"coord": {"x": 168,"y": -406}, "use": false},\r
              "h2": {"coord": {"x": 215,"y": -420}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 235,"y": -433}},\r
              "h1": {"coord": {"x": 217,"y": -429}},\r
              "h2": {"coord": {"x": 302,"y": -448}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 478,"y": -450}},\r
              "h1": {"coord": {"x": 451,"y": -450}},\r
              "h2": {"coord": {"x": 969,"y": -450}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1027,"y": -57}},\r
              "h1": {"coord": {"x": 1021,"y": -212}},\r
              "h2": {"coord": {"x": 1077,"y": -57}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1027,"y": -57}},\r
              "h1": {"coord": {"x": 977,"y": -57}, "use": false},\r
              "h2": {"coord": {"x": 1077,"y": -57}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1027,"y": 938}},\r
              "h1": {"coord": {"x": 977,"y": 938}, "use": false},\r
              "h2": {"coord": {"x": 1027,"y": 984}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 945,"y": 1020}},\r
              "h1": {"coord": {"x": 991,"y": 1020}},\r
              "h2": {"coord": {"x": 995,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 787,"y": 1020}},\r
              "h1": {"coord": {"x": 737,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 784,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 782,"y": 1015}},\r
              "h1": {"coord": {"x": 782,"y": 1018}},\r
              "h2": {"coord": {"x": 832,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 782,"y": 860}},\r
              "h1": {"coord": {"x": 732,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 782,"y": 857}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 787,"y": 855}},\r
              "h1": {"coord": {"x": 784,"y": 855}},\r
              "h2": {"coord": {"x": 837,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 862,"y": 855}},\r
              "h1": {"coord": {"x": 812,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 912,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 862,"y": 277}},\r
              "h1": {"coord": {"x": 812,"y": 277}, "use": false},\r
              "h2": {"coord": {"x": 812,"y": 175}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 578,"y": 139}},\r
              "h1": {"coord": {"x": 678,"y": 139}},\r
              "h2": {"coord": {"x": 540,"y": 139}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 285,"y": 386}},\r
              "h1": {"coord": {"x": 285,"y": 151}},\r
              "h2": {"coord": {"x": 335,"y": 386}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 285,"y": 938}},\r
              "h1": {"coord": {"x": 235,"y": 938}, "use": false},\r
              "h2": {"coord": {"x": 285,"y": 984}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 203,"y": 1020}},\r
              "h1": {"coord": {"x": 249,"y": 1020}},\r
              "h2": {"coord": {"x": 253,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1020}},\r
              "h1": {"coord": {"x": -5,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1015}},\r
              "h1": {"coord": {"x": 40,"y": 1018}},\r
              "h2": {"coord": {"x": 90,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 860}},\r
              "h1": {"coord": {"x": -10,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 857}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 855}},\r
              "h1": {"coord": {"x": 42,"y": 855}},\r
              "h2": {"coord": {"x": 95,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 855}},\r
              "h1": {"coord": {"x": 80,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 386}},\r
              "h1": {"coord": {"x": 80,"y": 386}, "use": false},\r
              "h2": {"coord": {"x": 130,"y": 169}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 578,"y": -18}},\r
              "h1": {"coord": {"x": 265,"y": -18}},\r
              "h2": {"coord": {"x": 693,"y": -18}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 855,"y": 51}},\r
              "h1": {"coord": {"x": 785,"y": 7}},\r
              "h2": {"coord": {"x": 855,"y": 4}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 855,"y": -51}},\r
              "h1": {"coord": {"x": 855,"y": -42}},\r
              "h2": {"coord": {"x": 855,"y": -227}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x7A": {\r
      "id": "glyph-0x7A",\r
      "advanceWidth": 971,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 926,"y": 241}},\r
              "h1": {"coord": {"x": 929,"y": 241}},\r
              "h2": {"coord": {"x": 976,"y": 241}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 772,"y": 241}},\r
              "h1": {"coord": {"x": 722,"y": 241}, "use": false},\r
              "h2": {"coord": {"x": 769,"y": 241}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 767,"y": 236}},\r
              "h1": {"coord": {"x": 767,"y": 239}},\r
              "h2": {"coord": {"x": 817,"y": 236}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 767,"y": 154}},\r
              "h1": {"coord": {"x": 717,"y": 154}, "use": false},\r
              "h2": {"coord": {"x": 817,"y": 154}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 331,"y": 154}},\r
              "h1": {"coord": {"x": 281,"y": 154}, "use": false},\r
              "h2": {"coord": {"x": 381,"y": 154}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 930,"y": 980}},\r
              "h1": {"coord": {"x": 880,"y": 980}, "use": false},\r
              "h2": {"coord": {"x": 980,"y": 980}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 930,"y": 980}},\r
              "h1": {"coord": {"x": 880,"y": 980}, "use": false},\r
              "h2": {"coord": {"x": 980,"y": 980}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 930,"y": 1020}},\r
              "h1": {"coord": {"x": 880,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 980,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 142,"y": 1020}},\r
              "h1": {"coord": {"x": 92,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 97,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 60,"y": 938}},\r
              "h1": {"coord": {"x": 60,"y": 983}},\r
              "h2": {"coord": {"x": 110,"y": 938}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 60,"y": 779}},\r
              "h1": {"coord": {"x": 10,"y": 779}, "use": false},\r
              "h2": {"coord": {"x": 60,"y": 776}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 65,"y": 774}},\r
              "h1": {"coord": {"x": 62,"y": 774}},\r
              "h2": {"coord": {"x": 115,"y": 774}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 219,"y": 774}},\r
              "h1": {"coord": {"x": 169,"y": 774}, "use": false},\r
              "h2": {"coord": {"x": 222,"y": 774}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 224,"y": 779}},\r
              "h1": {"coord": {"x": 224,"y": 776}},\r
              "h2": {"coord": {"x": 274,"y": 779}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 224,"y": 867}},\r
              "h1": {"coord": {"x": 174,"y": 867}, "use": false},\r
              "h2": {"coord": {"x": 274,"y": 867}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 663,"y": 867}},\r
              "h1": {"coord": {"x": 613,"y": 867}, "use": false},\r
              "h2": {"coord": {"x": 713,"y": 867}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 40}},\r
              "h1": {"coord": {"x": -10,"y": 40}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 40}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 0}},\r
              "h1": {"coord": {"x": -10,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 849,"y": 0}},\r
              "h1": {"coord": {"x": 799,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 894,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 931,"y": 82}},\r
              "h1": {"coord": {"x": 931,"y": 37}},\r
              "h2": {"coord": {"x": 981,"y": 82}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 931,"y": 236}},\r
              "h1": {"coord": {"x": 881,"y": 236}, "use": false},\r
              "h2": {"coord": {"x": 931,"y": 239}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x2C": {\r
      "id": "glyph-0x2C",\r
      "advanceWidth": 310,\r
      "shapes": [\r
        {\r
          "link": "comp-1",\r
          "translateX": 40\r
        }\r
      ]\r
    },\r
    "glyph-0x2E": {\r
      "id": "glyph-0x2E",\r
      "advanceWidth": 310,\r
      "shapes": [\r
        {\r
          "link": "comp-0",\r
          "translateX": 40\r
        }\r
      ]\r
    },\r
    "glyph-0x3A": {\r
      "id": "glyph-0x3A",\r
      "advanceWidth": 310,\r
      "shapes": [\r
        {\r
          "link": "comp-0",\r
          "translateX": 40,\r
          "translateY": 200\r
        },\r
        {\r
          "link": "comp-0",\r
          "name": "Component Instance (copy)",\r
          "translateX": 40,\r
          "translateY": 800\r
        }\r
      ]\r
    },\r
    "glyph-0x3B": {\r
      "id": "glyph-0x3B",\r
      "advanceWidth": 310,\r
      "shapes": [\r
        {\r
          "link": "comp-1",\r
          "translateX": 40\r
        },\r
        {\r
          "link": "comp-0",\r
          "translateX": 40,\r
          "translateY": 600\r
        }\r
      ]\r
    },\r
    "glyph-0x20": {\r
      "id": "glyph-0x20",\r
      "advanceWidth": 400\r
    },\r
    "glyph-0x30": {\r
      "id": "glyph-0x30",\r
      "advanceWidth": 1160,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -4,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 580,"y": 1530}},\r
              "h1": {"coord": {"x": 530,"y": 1530}, "use": false},\r
              "h2": {"coord": {"x": 47,"y": 1530}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 704}},\r
              "h1": {"coord": {"x": 40,"y": 974}},\r
              "h2": {"coord": {"x": 40,"y": 218}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 580,"y": 0}},\r
              "h1": {"coord": {"x": 198,"y": 0}},\r
              "h2": {"coord": {"x": 949,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1120,"y": 704}},\r
              "h1": {"coord": {"x": 1120,"y": 184}},\r
              "h2": {"coord": {"x": 1120,"y": 999}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 580,"y": 1530}},\r
              "h1": {"coord": {"x": 1117,"y": 1530}},\r
              "h2": {"coord": {"x": 630,"y": 1530}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": 2,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 580,"y": 155}},\r
              "h1": {"coord": {"x": 530,"y": 155}, "use": false},\r
              "h2": {"coord": {"x": 249,"y": 155}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 701}},\r
              "h1": {"coord": {"x": 214,"y": 441}},\r
              "h2": {"coord": {"x": 214,"y": 1027}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 580,"y": 1375}},\r
              "h1": {"coord": {"x": 249,"y": 1375}},\r
              "h2": {"coord": {"x": 930,"y": 1375}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 945,"y": 701}},\r
              "h1": {"coord": {"x": 945,"y": 1027}},\r
              "h2": {"coord": {"x": 945,"y": 445}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 580,"y": 155}},\r
              "h1": {"coord": {"x": 936,"y": 155}},\r
              "h2": {"coord": {"x": 630,"y": 155}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x27": {\r
      "id": "glyph-0x27",\r
      "advanceWidth": 190,\r
      "usedIn": [\r
        "glyph-0x22",\r
        "glyph-0x22"\r
      ],\r
      "contextCharacters": "it's",\r
      "shapes": [\r
        {\r
          "name": "Rectangle 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 20,"y": 1540}},\r
              "h1": {"coord": {"x": -30,"y": 1540}, "use": false},\r
              "h2": {"coord": {"x": 70,"y": 1540}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 170,"y": 1540}},\r
              "h1": {"coord": {"x": 120,"y": 1540}, "use": false},\r
              "h2": {"coord": {"x": 220,"y": 1540}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 150,"y": 1240}},\r
              "h1": {"coord": {"x": 100,"y": 1240}, "use": false},\r
              "h2": {"coord": {"x": 200,"y": 1240}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1240}},\r
              "h1": {"coord": {"x": -10,"y": 1240}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 1240}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x22": {\r
      "id": "glyph-0x22",\r
      "advanceWidth": 370,\r
      "contextCharacters": "\\"hello\\"",\r
      "shapes": [\r
        {\r
          "link": "glyph-0x27"\r
        },\r
        {\r
          "link": "glyph-0x27",\r
          "translateX": 180\r
        }\r
      ]\r
    },\r
    "glyph-0x2D": {\r
      "id": "glyph-0x2D",\r
      "advanceWidth": 540,\r
      "usedIn": [\r
        "glyph-0x3D",\r
        "glyph-0x3D",\r
        "glyph-0x5F",\r
        "glyph-0x2B",\r
        "glyph-0x2B",\r
        "glyph-0x2B"\r
      ],\r
      "contextCharacters": "g-y",\r
      "shapes": [\r
        {\r
          "name": "Rectangle 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 20,"y": 630}},\r
              "h1": {"coord": {"x": -30,"y": 630}, "use": false},\r
              "h2": {"coord": {"x": 70,"y": 630}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 520,"y": 630}},\r
              "h1": {"coord": {"x": 470,"y": 630}, "use": false},\r
              "h2": {"coord": {"x": 570,"y": 630}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 520,"y": 480}},\r
              "h1": {"coord": {"x": 470,"y": 480}, "use": false},\r
              "h2": {"coord": {"x": 570,"y": 480}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 20,"y": 480}},\r
              "h1": {"coord": {"x": -30,"y": 480}, "use": false},\r
              "h2": {"coord": {"x": 70,"y": 480}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x3D": {\r
      "id": "glyph-0x3D",\r
      "advanceWidth": 590,\r
      "shapes": [\r
        {\r
          "link": "glyph-0x2D",\r
          "translateY": -160,\r
          "resizeWidth": 50\r
        },\r
        {\r
          "link": "glyph-0x2D",\r
          "translateY": 80,\r
          "resizeWidth": 50\r
        }\r
      ]\r
    },\r
    "glyph-0x5F": {\r
      "id": "glyph-0x5F",\r
      "advanceWidth": 640,\r
      "shapes": [\r
        {\r
          "link": "glyph-0x2D",\r
          "translateY": -650,\r
          "resizeWidth": 100\r
        }\r
      ]\r
    },\r
    "glyph-0x60": {\r
      "id": "glyph-0x60",\r
      "advanceWidth": 340,\r
      "shapes": [\r
        {\r
          "name": "Rectangle 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 0,"y": 1540}},\r
              "h1": {"coord": {"x": -50,"y": 1540}, "use": false},\r
              "h2": {"coord": {"x": 50,"y": 1540}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 190,"y": 1540}},\r
              "h1": {"coord": {"x": 140,"y": 1540}, "use": false},\r
              "h2": {"coord": {"x": 240,"y": 1540}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 340,"y": 1240}},\r
              "h1": {"coord": {"x": 290,"y": 1240}, "use": false},\r
              "h2": {"coord": {"x": 390,"y": 1240}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 230,"y": 1240}},\r
              "h1": {"coord": {"x": 180,"y": 1240}, "use": false},\r
              "h2": {"coord": {"x": 280,"y": 1240}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x31": {\r
      "id": "glyph-0x31",\r
      "advanceWidth": 373,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -9,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 167,"y": 1230}},\r
              "h1": {"coord": {"x": 117,"y": 1230}, "use": false},\r
              "h2": {"coord": {"x": 217,"y": 1230}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 167,"y": 5}},\r
              "h1": {"coord": {"x": 117,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 167,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 172,"y": 0}},\r
              "h1": {"coord": {"x": 169,"y": 0}},\r
              "h2": {"coord": {"x": 222,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 328,"y": 0}},\r
              "h1": {"coord": {"x": 278,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 331,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 333,"y": 5}},\r
              "h1": {"coord": {"x": 333,"y": 2}},\r
              "h2": {"coord": {"x": 383,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 333,"y": 1410}},\r
              "h1": {"coord": {"x": 283,"y": 1410}, "use": false},\r
              "h2": {"coord": {"x": 333,"y": 1454}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 253,"y": 1490}},\r
              "h1": {"coord": {"x": 297,"y": 1490}},\r
              "h2": {"coord": {"x": 303,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 137,"y": 1490}},\r
              "h1": {"coord": {"x": 87,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 113,"y": 1390}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": 1276}},\r
              "h1": {"coord": {"x": 56,"y": 1299}},\r
              "h2": {"coord": {"x": 39,"y": 1273}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 44,"y": 1268}},\r
              "h1": {"coord": {"x": 41,"y": 1269}},\r
              "h2": {"coord": {"x": 94,"y": 1268}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x32": {\r
      "id": "glyph-0x32",\r
      "advanceWidth": 895,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -8,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 741,"y": 791}},\r
              "h1": {"coord": {"x": 691,"y": 791}, "use": false},\r
              "h2": {"coord": {"x": 848,"y": 898}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 855,"y": 1074}},\r
              "h1": {"coord": {"x": 855,"y": 980}},\r
              "h2": {"coord": {"x": 855,"y": 1315}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 413,"y": 1510}},\r
              "h1": {"coord": {"x": 661,"y": 1510}},\r
              "h2": {"coord": {"x": 265,"y": 1510}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 56,"y": 1319}},\r
              "h1": {"coord": {"x": 134,"y": 1434}},\r
              "h2": {"coord": {"x": 106,"y": 1319}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 179,"y": 1224}},\r
              "h1": {"coord": {"x": 129,"y": 1224}, "use": false},\r
              "h2": {"coord": {"x": 227,"y": 1312}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 413,"y": 1371}},\r
              "h1": {"coord": {"x": 314,"y": 1371}},\r
              "h2": {"coord": {"x": 564,"y": 1371}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 687,"y": 1072}},\r
              "h1": {"coord": {"x": 687,"y": 1243}},\r
              "h2": {"coord": {"x": 687,"y": 1004}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 610,"y": 875}},\r
              "h1": {"coord": {"x": 684,"y": 949}},\r
              "h2": {"coord": {"x": 430,"y": 695}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 161}},\r
              "h1": {"coord": {"x": 40,"y": 511}},\r
              "h2": {"coord": {"x": 90,"y": 161}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": -10,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": -10,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 825,"y": 0}},\r
              "h1": {"coord": {"x": 775,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 828,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 830,"y": 5}},\r
              "h1": {"coord": {"x": 830,"y": 2}},\r
              "h2": {"coord": {"x": 880,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 830,"y": 160}},\r
              "h1": {"coord": {"x": 780,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 830,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 825,"y": 165}},\r
              "h1": {"coord": {"x": 828,"y": 165}},\r
              "h2": {"coord": {"x": 875,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 227,"y": 165}},\r
              "h1": {"coord": {"x": 177,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 155,"y": 397}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 741,"y": 791}},\r
              "h1": {"coord": {"x": 575,"y": 625}},\r
              "h2": {"coord": {"x": 791,"y": 791}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x33": {\r
      "id": "glyph-0x33",\r
      "advanceWidth": 1003,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 817,"y": 775}},\r
              "h1": {"coord": {"x": 767,"y": 775}, "use": false},\r
              "h2": {"coord": {"x": 919,"y": 857}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 941,"y": 1143}},\r
              "h1": {"coord": {"x": 941,"y": 992}},\r
              "h2": {"coord": {"x": 941,"y": 1266}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 801,"y": 1433}},\r
              "h1": {"coord": {"x": 893,"y": 1366}},\r
              "h2": {"coord": {"x": 723,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 494,"y": 1520}},\r
              "h1": {"coord": {"x": 618,"y": 1520}},\r
              "h2": {"coord": {"x": 370,"y": 1520}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 50,"y": 1294}},\r
              "h1": {"coord": {"x": 176,"y": 1500}},\r
              "h2": {"coord": {"x": 100,"y": 1294}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 180,"y": 1223}},\r
              "h1": {"coord": {"x": 130,"y": 1223}, "use": false},\r
              "h2": {"coord": {"x": 251,"y": 1347}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 494,"y": 1376}},\r
              "h1": {"coord": {"x": 352,"y": 1376}},\r
              "h2": {"coord": {"x": 580,"y": 1376}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 787,"y": 1145}},\r
              "h1": {"coord": {"x": 787,"y": 1362}},\r
              "h2": {"coord": {"x": 787,"y": 975}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 538,"y": 844}},\r
              "h1": {"coord": {"x": 792,"y": 854}},\r
              "h2": {"coord": {"x": 588,"y": 844}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 483,"y": 844}},\r
              "h1": {"coord": {"x": 433,"y": 844}, "use": false},\r
              "h2": {"coord": {"x": 457,"y": 844}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 436,"y": 797}},\r
              "h1": {"coord": {"x": 436,"y": 823}},\r
              "h2": {"coord": {"x": 486,"y": 797}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 436,"y": 737}},\r
              "h1": {"coord": {"x": 386,"y": 737}, "use": false},\r
              "h2": {"coord": {"x": 436,"y": 711}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 483,"y": 690}},\r
              "h1": {"coord": {"x": 457,"y": 690}},\r
              "h2": {"coord": {"x": 533,"y": 690}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 499,"y": 690}},\r
              "h1": {"coord": {"x": 449,"y": 690}, "use": false},\r
              "h2": {"coord": {"x": 799,"y": 690}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 814,"y": 379}},\r
              "h1": {"coord": {"x": 814,"y": 562}},\r
              "h2": {"coord": {"x": 814,"y": 154}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 489,"y": 139}},\r
              "h1": {"coord": {"x": 578,"y": 139}},\r
              "h2": {"coord": {"x": 341,"y": 139}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 195,"y": 308}},\r
              "h1": {"coord": {"x": 259,"y": 215}},\r
              "h2": {"coord": {"x": 245,"y": 308}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 50,"y": 235}},\r
              "h1": {"coord": {"x": 0,"y": 235}, "use": false},\r
              "h2": {"coord": {"x": 74,"y": 173}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 169,"y": 81}},\r
              "h1": {"coord": {"x": 114,"y": 122}},\r
              "h2": {"coord": {"x": 250,"y": 22}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 489,"y": -10}},\r
              "h1": {"coord": {"x": 361,"y": -10}},\r
              "h2": {"coord": {"x": 617,"y": -10}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 828,"y": 81}},\r
              "h1": {"coord": {"x": 747,"y": 22}},\r
              "h2": {"coord": {"x": 923,"y": 151}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 973,"y": 381}},\r
              "h1": {"coord": {"x": 973,"y": 254}},\r
              "h2": {"coord": {"x": 973,"y": 551}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 817,"y": 775}},\r
              "h1": {"coord": {"x": 946,"y": 696}},\r
              "h2": {"coord": {"x": 867,"y": 775}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x34": {\r
      "id": "glyph-0x34",\r
      "advanceWidth": 795,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 87,"y": 623}},\r
              "h1": {"coord": {"x": 37,"y": 623}, "use": false},\r
              "h2": {"coord": {"x": 137,"y": 623}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 589,"y": 623}},\r
              "h1": {"coord": {"x": 539,"y": 623}, "use": false},\r
              "h2": {"coord": {"x": 639,"y": 623}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 589,"y": 5}},\r
              "h1": {"coord": {"x": 539,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 589,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 594,"y": 0}},\r
              "h1": {"coord": {"x": 591,"y": 0}},\r
              "h2": {"coord": {"x": 644,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 750,"y": 0}},\r
              "h1": {"coord": {"x": 700,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 753,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 755,"y": 5}},\r
              "h1": {"coord": {"x": 755,"y": 2}},\r
              "h2": {"coord": {"x": 805,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 755,"y": 1353}},\r
              "h1": {"coord": {"x": 705,"y": 1353}, "use": false},\r
              "h2": {"coord": {"x": 755,"y": 1397}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 675,"y": 1433}},\r
              "h1": {"coord": {"x": 719,"y": 1433}},\r
              "h2": {"coord": {"x": 725,"y": 1433}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 594,"y": 1433}},\r
              "h1": {"coord": {"x": 544,"y": 1433}, "use": false},\r
              "h2": {"coord": {"x": 591,"y": 1433}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 589,"y": 1428}},\r
              "h1": {"coord": {"x": 589,"y": 1431}},\r
              "h2": {"coord": {"x": 639,"y": 1428}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 589,"y": 783}},\r
              "h1": {"coord": {"x": 539,"y": 783}, "use": false},\r
              "h2": {"coord": {"x": 639,"y": 783}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 206,"y": 783}},\r
              "h1": {"coord": {"x": 156,"y": 783}, "use": false},\r
              "h2": {"coord": {"x": 256,"y": 783}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 206,"y": 1353}},\r
              "h1": {"coord": {"x": 156,"y": 1353}, "use": false},\r
              "h2": {"coord": {"x": 206,"y": 1397}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 126,"y": 1433}},\r
              "h1": {"coord": {"x": 170,"y": 1433}},\r
              "h2": {"coord": {"x": 176,"y": 1433}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1433}},\r
              "h1": {"coord": {"x": -5,"y": 1433}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1433}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1428}},\r
              "h1": {"coord": {"x": 40,"y": 1431}},\r
              "h2": {"coord": {"x": 90,"y": 1428}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 670}},\r
              "h1": {"coord": {"x": -10,"y": 670}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 644}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 87,"y": 623}},\r
              "h1": {"coord": {"x": 61,"y": 623}},\r
              "h2": {"coord": {"x": 137,"y": 623}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x35": {\r
      "id": "glyph-0x35",\r
      "advanceWidth": 1003,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 512,"y": 840}},\r
              "h1": {"coord": {"x": 462,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 562,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 512,"y": 840}},\r
              "h1": {"coord": {"x": 462,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 562,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 243,"y": 840}},\r
              "h1": {"coord": {"x": 193,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 293,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 243,"y": 1325}},\r
              "h1": {"coord": {"x": 193,"y": 1325}, "use": false},\r
              "h2": {"coord": {"x": 293,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 874,"y": 1325}},\r
              "h1": {"coord": {"x": 824,"y": 1325}, "use": false},\r
              "h2": {"coord": {"x": 877,"y": 1325}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 879,"y": 1330}},\r
              "h1": {"coord": {"x": 879,"y": 1327}},\r
              "h2": {"coord": {"x": 929,"y": 1330}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 879,"y": 1485}},\r
              "h1": {"coord": {"x": 829,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 879,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 874,"y": 1490}},\r
              "h1": {"coord": {"x": 877,"y": 1490}},\r
              "h2": {"coord": {"x": 924,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 157,"y": 1490}},\r
              "h1": {"coord": {"x": 107,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 113,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 77,"y": 1410}},\r
              "h1": {"coord": {"x": 77,"y": 1454}},\r
              "h2": {"coord": {"x": 127,"y": 1410}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 77,"y": 760}},\r
              "h1": {"coord": {"x": 27,"y": 760}, "use": false},\r
              "h2": {"coord": {"x": 77,"y": 716}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 157,"y": 680}},\r
              "h1": {"coord": {"x": 113,"y": 680}},\r
              "h2": {"coord": {"x": 207,"y": 680}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 509,"y": 680}},\r
              "h1": {"coord": {"x": 459,"y": 680}, "use": false},\r
              "h2": {"coord": {"x": 809,"y": 680}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 804,"y": 369}},\r
              "h1": {"coord": {"x": 804,"y": 552}},\r
              "h2": {"coord": {"x": 804,"y": 144}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 129}},\r
              "h1": {"coord": {"x": 568,"y": 129}},\r
              "h2": {"coord": {"x": 331,"y": 129}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 185,"y": 298}},\r
              "h1": {"coord": {"x": 249,"y": 205}},\r
              "h2": {"coord": {"x": 235,"y": 298}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 225}},\r
              "h1": {"coord": {"x": -10,"y": 225}, "use": false},\r
              "h2": {"coord": {"x": 64,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 159,"y": 71}},\r
              "h1": {"coord": {"x": 104,"y": 112}},\r
              "h2": {"coord": {"x": 240,"y": 12}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": -20}},\r
              "h1": {"coord": {"x": 351,"y": -20}},\r
              "h2": {"coord": {"x": 607,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 818,"y": 71}},\r
              "h1": {"coord": {"x": 737,"y": 12}},\r
              "h2": {"coord": {"x": 913,"y": 141}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 963,"y": 371}},\r
              "h1": {"coord": {"x": 963,"y": 244}},\r
              "h2": {"coord": {"x": 963,"y": 629}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 512,"y": 840}},\r
              "h1": {"coord": {"x": 900,"y": 839}},\r
              "h2": {"coord": {"x": 562,"y": 840}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x36": {\r
      "id": "glyph-0x36",\r
      "advanceWidth": 1047,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 542,"y": 840}},\r
              "h1": {"coord": {"x": 492,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 416,"y": 840}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 218,"y": 706}},\r
              "h1": {"coord": {"x": 302,"y": 789}},\r
              "h2": {"coord": {"x": 234,"y": 938}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 347,"y": 1138}},\r
              "h1": {"coord": {"x": 281,"y": 1044}},\r
              "h2": {"coord": {"x": 433,"y": 1261}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 764,"y": 1331}},\r
              "h1": {"coord": {"x": 511,"y": 1331}},\r
              "h2": {"coord": {"x": 814,"y": 1331}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 764,"y": 1331}},\r
              "h1": {"coord": {"x": 714,"y": 1331}, "use": false},\r
              "h2": {"coord": {"x": 814,"y": 1331}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 765,"y": 1331}},\r
              "h1": {"coord": {"x": 715,"y": 1331}, "use": false},\r
              "h2": {"coord": {"x": 815,"y": 1331}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 870,"y": 1331}},\r
              "h1": {"coord": {"x": 820,"y": 1331}, "use": false},\r
              "h2": {"coord": {"x": 873,"y": 1331}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 876,"y": 1336}},\r
              "h1": {"coord": {"x": 876,"y": 1333}},\r
              "h2": {"coord": {"x": 926,"y": 1336}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 876,"y": 1491}},\r
              "h1": {"coord": {"x": 826,"y": 1491}, "use": false},\r
              "h2": {"coord": {"x": 876,"y": 1494}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 870,"y": 1496}},\r
              "h1": {"coord": {"x": 873,"y": 1496}},\r
              "h2": {"coord": {"x": 920,"y": 1496}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 764,"y": 1496}},\r
              "h1": {"coord": {"x": 714,"y": 1496}, "use": false},\r
              "h2": {"coord": {"x": 509,"y": 1496}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 216,"y": 1236}},\r
              "h1": {"coord": {"x": 334,"y": 1406}},\r
              "h2": {"coord": {"x": 164,"y": 1161}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 523}},\r
              "h1": {"coord": {"x": 40,"y": 953}},\r
              "h2": {"coord": {"x": 40,"y": 361}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 126,"y": 178}},\r
              "h1": {"coord": {"x": 68,"y": 261}},\r
              "h2": {"coord": {"x": 149,"y": 138}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 219,"y": 73}},\r
              "h1": {"coord": {"x": 180,"y": 102}},\r
              "h2": {"coord": {"x": 229,"y": 64}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 244,"y": 56}},\r
              "h1": {"coord": {"x": 238,"y": 58}},\r
              "h2": {"coord": {"x": 323,"y": 6}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 542,"y": -20}},\r
              "h1": {"coord": {"x": 424,"y": -20}},\r
              "h2": {"coord": {"x": 670,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 862,"y": 71}},\r
              "h1": {"coord": {"x": 781,"y": 12}},\r
              "h2": {"coord": {"x": 957,"y": 141}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1007,"y": 371}},\r
              "h1": {"coord": {"x": 1007,"y": 244}},\r
              "h2": {"coord": {"x": 1007,"y": 630}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 542,"y": 840}},\r
              "h1": {"coord": {"x": 798,"y": 840}},\r
              "h2": {"coord": {"x": 592,"y": 840}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": 3,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 247,"y": 369}},\r
              "h1": {"coord": {"x": 247,"y": 144}},\r
              "h2": {"coord": {"x": 247,"y": 552}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 542,"y": 701}},\r
              "h1": {"coord": {"x": 379,"y": 701}},\r
              "h2": {"coord": {"x": 705,"y": 701}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 838,"y": 369}},\r
              "h1": {"coord": {"x": 838,"y": 552}},\r
              "h2": {"coord": {"x": 838,"y": 144}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 542,"y": 119}},\r
              "h1": {"coord": {"x": 631,"y": 119}},\r
              "h2": {"coord": {"x": 453,"y": 119}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x37": {\r
      "id": "glyph-0x37",\r
      "advanceWidth": 972,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 819,"y": 1490}},\r
              "h1": {"coord": {"x": 769,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 869,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 819,"y": 1490}},\r
              "h1": {"coord": {"x": 769,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 869,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1335}},\r
              "h1": {"coord": {"x": -10,"y": 1335}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1332}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1330}},\r
              "h1": {"coord": {"x": 42,"y": 1330}},\r
              "h2": {"coord": {"x": 95,"y": 1330}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 701,"y": 1330}},\r
              "h1": {"coord": {"x": 651,"y": 1330}, "use": false},\r
              "h2": {"coord": {"x": 751,"y": 1330}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 484,"y": 840}},\r
              "h1": {"coord": {"x": 434,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 534,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 206,"y": 840}},\r
              "h1": {"coord": {"x": 156,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 203,"y": 840}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 201,"y": 835}},\r
              "h1": {"coord": {"x": 201,"y": 838}},\r
              "h2": {"coord": {"x": 251,"y": 835}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 201,"y": 680}},\r
              "h1": {"coord": {"x": 151,"y": 680}, "use": false},\r
              "h2": {"coord": {"x": 201,"y": 677}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 206,"y": 675}},\r
              "h1": {"coord": {"x": 203,"y": 675}},\r
              "h2": {"coord": {"x": 256,"y": 675}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 411,"y": 675}},\r
              "h1": {"coord": {"x": 361,"y": 675}, "use": false},\r
              "h2": {"coord": {"x": 461,"y": 675}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 126,"y": 30}},\r
              "h1": {"coord": {"x": 76,"y": 30}, "use": false},\r
              "h2": {"coord": {"x": 176,"y": 30}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 125,"y": 0}},\r
              "h1": {"coord": {"x": 75,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 175,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 297,"y": 0}},\r
              "h1": {"coord": {"x": 247,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 347,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 932,"y": 1460}},\r
              "h1": {"coord": {"x": 882,"y": 1460}, "use": false},\r
              "h2": {"coord": {"x": 982,"y": 1460}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 931,"y": 1490}},\r
              "h1": {"coord": {"x": 881,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 981,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 819,"y": 1490}},\r
              "h1": {"coord": {"x": 769,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 869,"y": 1490}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x38": {\r
      "id": "glyph-0x38",\r
      "advanceWidth": 1009,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -8,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 371}},\r
              "h1": {"coord": {"x": -10,"y": 371}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 244}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 185,"y": 71}},\r
              "h1": {"coord": {"x": 90,"y": 141}},\r
              "h2": {"coord": {"x": 266,"y": 12}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": -20}},\r
              "h1": {"coord": {"x": 377,"y": -20}},\r
              "h2": {"coord": {"x": 633,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 824,"y": 71}},\r
              "h1": {"coord": {"x": 743,"y": 12}},\r
              "h2": {"coord": {"x": 919,"y": 141}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 371}},\r
              "h1": {"coord": {"x": 969,"y": 244}},\r
              "h2": {"coord": {"x": 969,"y": 536}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 756,"y": 766}},\r
              "h1": {"coord": {"x": 884,"y": 682}},\r
              "h2": {"coord": {"x": 772,"y": 775}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 802,"y": 794}},\r
              "h1": {"coord": {"x": 788,"y": 783}},\r
              "h2": {"coord": {"x": 890,"y": 859}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 936,"y": 1074}},\r
              "h1": {"coord": {"x": 936,"y": 956}},\r
              "h2": {"coord": {"x": 936,"y": 1315}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 1510}},\r
              "h1": {"coord": {"x": 743,"y": 1510}},\r
              "h2": {"coord": {"x": 267,"y": 1510}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 73,"y": 1074}},\r
              "h1": {"coord": {"x": 73,"y": 1315}},\r
              "h2": {"coord": {"x": 73,"y": 956}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 208,"y": 794}},\r
              "h1": {"coord": {"x": 120,"y": 859}},\r
              "h2": {"coord": {"x": 222,"y": 783}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 254,"y": 766}},\r
              "h1": {"coord": {"x": 238,"y": 775}},\r
              "h2": {"coord": {"x": 126,"y": 682}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 371}},\r
              "h1": {"coord": {"x": 40,"y": 536}},\r
              "h2": {"coord": {"x": 90,"y": 371}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": 2,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 230,"y": 1072}},\r
              "h1": {"coord": {"x": 180,"y": 1072}, "use": false},\r
              "h2": {"coord": {"x": 230,"y": 1243}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 1381}},\r
              "h1": {"coord": {"x": 354,"y": 1381}},\r
              "h2": {"coord": {"x": 656,"y": 1381}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 779,"y": 1072}},\r
              "h1": {"coord": {"x": 779,"y": 1243}},\r
              "h2": {"coord": {"x": 779,"y": 879}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 526,"y": 840}},\r
              "h1": {"coord": {"x": 616,"y": 844}},\r
              "h2": {"coord": {"x": 519,"y": 840}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 840}},\r
              "h1": {"coord": {"x": 512,"y": 840}},\r
              "h2": {"coord": {"x": 498,"y": 840}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 484,"y": 840}},\r
              "h1": {"coord": {"x": 491,"y": 840}},\r
              "h2": {"coord": {"x": 394,"y": 844}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 230,"y": 1072}},\r
              "h1": {"coord": {"x": 230,"y": 879}},\r
              "h2": {"coord": {"x": 280,"y": 1072}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 3",\r
          "winding": 2,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 701}},\r
              "h1": {"coord": {"x": 455,"y": 701}, "use": false},\r
              "h2": {"coord": {"x": 668,"y": 701}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 369}},\r
              "h1": {"coord": {"x": 800,"y": 552}},\r
              "h2": {"coord": {"x": 800,"y": 144}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 119}},\r
              "h1": {"coord": {"x": 594,"y": 119}},\r
              "h2": {"coord": {"x": 416,"y": 119}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 209,"y": 369}},\r
              "h1": {"coord": {"x": 209,"y": 144}},\r
              "h2": {"coord": {"x": 209,"y": 552}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 701}},\r
              "h1": {"coord": {"x": 342,"y": 701}},\r
              "h2": {"coord": {"x": 555,"y": 701}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x39": {\r
      "id": "glyph-0x39",\r
      "advanceWidth": 1009,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -16,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 1006}},\r
              "h1": {"coord": {"x": 919,"y": 1006}, "use": false},\r
              "h2": {"coord": {"x": 1019,"y": 1006}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 1007}},\r
              "h1": {"coord": {"x": 919,"y": 1007}, "use": false},\r
              "h2": {"coord": {"x": 969,"y": 1015}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 1029}},\r
              "h1": {"coord": {"x": 969,"y": 1022}},\r
              "h2": {"coord": {"x": 1019,"y": 1029}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 968,"y": 1032}},\r
              "h1": {"coord": {"x": 918,"y": 1032}, "use": false},\r
              "h2": {"coord": {"x": 1018,"y": 1032}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 968,"y": 1033}},\r
              "h1": {"coord": {"x": 918,"y": 1033}, "use": false},\r
              "h2": {"coord": {"x": 954,"y": 1279}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 1475}},\r
              "h1": {"coord": {"x": 752,"y": 1475}},\r
              "h2": {"coord": {"x": 249,"y": 1475}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1006}},\r
              "h1": {"coord": {"x": 40,"y": 1265}},\r
              "h2": {"coord": {"x": 40,"y": 879}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 185,"y": 706}},\r
              "h1": {"coord": {"x": 90,"y": 776}},\r
              "h2": {"coord": {"x": 266,"y": 647}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 615}},\r
              "h1": {"coord": {"x": 377,"y": 615}},\r
              "h2": {"coord": {"x": 618,"y": 615}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 793,"y": 685}},\r
              "h1": {"coord": {"x": 716,"y": 639}},\r
              "h2": {"coord": {"x": 782,"y": 518}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 702,"y": 348}},\r
              "h1": {"coord": {"x": 757,"y": 427}},\r
              "h2": {"coord": {"x": 617,"y": 226}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 350,"y": 165}},\r
              "h1": {"coord": {"x": 505,"y": 166}},\r
              "h2": {"coord": {"x": 400,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 350,"y": 165}},\r
              "h1": {"coord": {"x": 300,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 400,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 254,"y": 165}},\r
              "h1": {"coord": {"x": 204,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 251,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 249,"y": 160}},\r
              "h1": {"coord": {"x": 249,"y": 163}},\r
              "h2": {"coord": {"x": 299,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 249,"y": 5}},\r
              "h1": {"coord": {"x": 199,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 249,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 254,"y": 0}},\r
              "h1": {"coord": {"x": 251,"y": 0}},\r
              "h2": {"coord": {"x": 304,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 350,"y": 0}},\r
              "h1": {"coord": {"x": 300,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 400,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 350,"y": 0}},\r
              "h1": {"coord": {"x": 300,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 561,"y": 1}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 833,"y": 250}},\r
              "h1": {"coord": {"x": 716,"y": 81}},\r
              "h2": {"coord": {"x": 885,"y": 325}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 1006}},\r
              "h1": {"coord": {"x": 969,"y": 484}},\r
              "h2": {"coord": {"x": 1019,"y": 1006}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 1006}},\r
              "h1": {"coord": {"x": 919,"y": 1006}, "use": false},\r
              "h2": {"coord": {"x": 1019,"y": 1006}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 1006}},\r
              "h1": {"coord": {"x": 919,"y": 1006}, "use": false},\r
              "h2": {"coord": {"x": 1019,"y": 1006}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": 2,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 754}},\r
              "h1": {"coord": {"x": 455,"y": 754}, "use": false},\r
              "h2": {"coord": {"x": 416,"y": 754}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 209,"y": 1004}},\r
              "h1": {"coord": {"x": 209,"y": 779}},\r
              "h2": {"coord": {"x": 209,"y": 1187}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 1336}},\r
              "h1": {"coord": {"x": 342,"y": 1336}},\r
              "h2": {"coord": {"x": 668,"y": 1336}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 1004}},\r
              "h1": {"coord": {"x": 800,"y": 1187}},\r
              "h2": {"coord": {"x": 800,"y": 779}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 754}},\r
              "h1": {"coord": {"x": 594,"y": 754}},\r
              "h2": {"coord": {"x": 555,"y": 754}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x21": {\r
      "id": "glyph-0x21",\r
      "advanceWidth": 280,\r
      "usedIn": [\r
        "glyph-0x203C",\r
        "glyph-0x203C"\r
      ],\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -6,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 194,"y": 1509}},\r
              "h1": {"coord": {"x": 144,"y": 1509}, "use": false},\r
              "h2": {"coord": {"x": 244,"y": 1509}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 90,"y": 1509}},\r
              "h1": {"coord": {"x": 40,"y": 1509}, "use": false},\r
              "h2": {"coord": {"x": 62,"y": 1509}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1459}},\r
              "h1": {"coord": {"x": 40,"y": 1487}},\r
              "h2": {"coord": {"x": 90,"y": 1459}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 60,"y": 282}},\r
              "h1": {"coord": {"x": 10,"y": 282}, "use": false},\r
              "h2": {"coord": {"x": 60,"y": 270}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 83,"y": 260}},\r
              "h1": {"coord": {"x": 71,"y": 260}},\r
              "h2": {"coord": {"x": 133,"y": 260}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 198,"y": 260}},\r
              "h1": {"coord": {"x": 148,"y": 260}, "use": false},\r
              "h2": {"coord": {"x": 210,"y": 260}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 220,"y": 282}},\r
              "h1": {"coord": {"x": 220,"y": 270}},\r
              "h2": {"coord": {"x": 270,"y": 282}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 240,"y": 1459}},\r
              "h1": {"coord": {"x": 190,"y": 1459}, "use": false},\r
              "h2": {"coord": {"x": 240,"y": 1487}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 194,"y": 1509}},\r
              "h1": {"coord": {"x": 222,"y": 1509}},\r
              "h2": {"coord": {"x": 244,"y": 1509}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 65}},\r
              "h1": {"coord": {"x": 40,"y": 127}},\r
              "h2": {"coord": {"x": 40,"y": -11}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 140,"y": -20}},\r
              "h1": {"coord": {"x": 110,"y": -20}},\r
              "h2": {"coord": {"x": 170,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 240,"y": 65}},\r
              "h1": {"coord": {"x": 240,"y": -11}},\r
              "h2": {"coord": {"x": 240,"y": 127}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 140,"y": 177}},\r
              "h1": {"coord": {"x": 195,"y": 177}},\r
              "h2": {"coord": {"x": 85,"y": 177}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x23": {\r
      "id": "glyph-0x23",\r
      "advanceWidth": 1103,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -21,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 279,"y": 317}},\r
              "h1": {"coord": {"x": 229,"y": 317}, "use": false},\r
              "h2": {"coord": {"x": 329,"y": 317}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 252,"y": 4}},\r
              "h1": {"coord": {"x": 202,"y": 4}, "use": false},\r
              "h2": {"coord": {"x": 252,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 257,"y": 0}},\r
              "h1": {"coord": {"x": 254,"y": 0}},\r
              "h2": {"coord": {"x": 307,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 377,"y": 0}},\r
              "h1": {"coord": {"x": 327,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 380,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 382,"y": 4}},\r
              "h1": {"coord": {"x": 382,"y": 2}},\r
              "h2": {"coord": {"x": 432,"y": 4}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 409,"y": 317}},\r
              "h1": {"coord": {"x": 359,"y": 317}, "use": false},\r
              "h2": {"coord": {"x": 459,"y": 317}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 663,"y": 317}},\r
              "h1": {"coord": {"x": 613,"y": 317}, "use": false},\r
              "h2": {"coord": {"x": 713,"y": 317}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 636,"y": 4}},\r
              "h1": {"coord": {"x": 586,"y": 4}, "use": false},\r
              "h2": {"coord": {"x": 636,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 641,"y": 0}},\r
              "h1": {"coord": {"x": 638,"y": 0}},\r
              "h2": {"coord": {"x": 691,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 761,"y": 0}},\r
              "h1": {"coord": {"x": 711,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 764,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 766,"y": 4}},\r
              "h1": {"coord": {"x": 766,"y": 2}},\r
              "h2": {"coord": {"x": 816,"y": 4}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 793,"y": 317}},\r
              "h1": {"coord": {"x": 743,"y": 317}, "use": false},\r
              "h2": {"coord": {"x": 843,"y": 317}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1028,"y": 317}},\r
              "h1": {"coord": {"x": 978,"y": 317}, "use": false},\r
              "h2": {"coord": {"x": 1031,"y": 317}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1033,"y": 322}},\r
              "h1": {"coord": {"x": 1033,"y": 319}},\r
              "h2": {"coord": {"x": 1083,"y": 322}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 442}},\r
              "h1": {"coord": {"x": 993,"y": 442}, "use": false},\r
              "h2": {"coord": {"x": 1043,"y": 445}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1038,"y": 447}},\r
              "h1": {"coord": {"x": 1041,"y": 447}},\r
              "h2": {"coord": {"x": 1088,"y": 447}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 804,"y": 447}},\r
              "h1": {"coord": {"x": 754,"y": 447}, "use": false},\r
              "h2": {"coord": {"x": 854,"y": 447}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 828,"y": 715}},\r
              "h1": {"coord": {"x": 778,"y": 715}, "use": false},\r
              "h2": {"coord": {"x": 878,"y": 715}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1048,"y": 715}},\r
              "h1": {"coord": {"x": 998,"y": 715}, "use": false},\r
              "h2": {"coord": {"x": 1051,"y": 715}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1053,"y": 720}},\r
              "h1": {"coord": {"x": 1053,"y": 717}},\r
              "h2": {"coord": {"x": 1103,"y": 720}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1063,"y": 840}},\r
              "h1": {"coord": {"x": 1013,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 1063,"y": 843}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1058,"y": 845}},\r
              "h1": {"coord": {"x": 1061,"y": 845}},\r
              "h2": {"coord": {"x": 1108,"y": 845}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 839,"y": 845}},\r
              "h1": {"coord": {"x": 789,"y": 845}, "use": false},\r
              "h2": {"coord": {"x": 889,"y": 845}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 866,"y": 1146}},\r
              "h1": {"coord": {"x": 816,"y": 1146}, "use": false},\r
              "h2": {"coord": {"x": 866,"y": 1148}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 861,"y": 1150}},\r
              "h1": {"coord": {"x": 864,"y": 1150}},\r
              "h2": {"coord": {"x": 911,"y": 1150}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 741,"y": 1150}},\r
              "h1": {"coord": {"x": 691,"y": 1150}, "use": false},\r
              "h2": {"coord": {"x": 738,"y": 1150}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 736,"y": 1146}},\r
              "h1": {"coord": {"x": 736,"y": 1148}},\r
              "h2": {"coord": {"x": 786,"y": 1146}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 709,"y": 845}},\r
              "h1": {"coord": {"x": 659,"y": 845}, "use": false},\r
              "h2": {"coord": {"x": 759,"y": 845}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
            },\r
        },\r