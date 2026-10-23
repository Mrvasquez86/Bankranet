(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`bank-lang`;function t(){if(typeof location>`u`)return`sv`;let t=new URLSearchParams(location.search).get(`lang`);if(t===`en`||t===`sv`){try{localStorage.setItem(e,t)}catch{}return t}try{let t=localStorage.getItem(e);if(t===`en`||t===`sv`)return t}catch{}return`sv`}var n=t(),r=n===`en`,i=(e,t)=>r?t:e,a=(e,t=1)=>r?e.toFixed(t):e.toFixed(t).replace(`.`,`,`);function o(t){try{localStorage.setItem(e,t)}catch{}let n=new URL(location.href);n.searchParams.delete(`lang`),t===`en`&&n.searchParams.set(`lang`,`en`),location.replace(n.toString())}typeof document<`u`&&(document.documentElement.lang=n,document.title=i(`Det Stora Bankrånet`,`The Great Bank Heist`));var s=null,c=null,l=`bank-guard`,u=()=>history.state?.[l]===!0;function d(){u()||history.pushState({[l]:!0},``,location.href)}function f(){c?.remove(),c=null}function p(e){c||(c=document.createElement(`div`),c.className=`radio-ask leave-ask`,c.setAttribute(`role`,`dialog`),c.setAttribute(`aria-modal`,`true`),c.innerHTML=`<div class="radio-ask-card">
      <div class="radio-ask-ico">🚪</div>
      <b>${e.title}</b>
      <p>${e.text}</p>
      <div class="radio-ask-btns"><button data-leave="yes">${i(`Ja, lämna`,`Yes, leave`)}</button><button data-leave="no" class="primary">${i(`Nej, stanna kvar`,`No, stay`)}</button></div>
    </div>`,c.addEventListener(`click`,t=>{let n=t.target.closest(`[data-leave]`);if(!n)return;if(n.dataset.leave===`no`)return f();let r=e.leave??(()=>location.replace(`${location.pathname}${m()}`));s=null,f(),r()}),document.body.appendChild(c),c.querySelector(`[data-leave=no]`)?.focus())}function m(){let e=new URLSearchParams(location.search).get(`room`);return e?`?room=${encodeURIComponent(e)}`:``}window.addEventListener(`popstate`,()=>{if(s){if(d(),c)return f();s.close?.()||p(s)}});function h(e){s=e,f(),d()}var g=`bank-quality`,_=`bank-quality-fallback-tried`,v={get(e){try{return localStorage.getItem(e)}catch{return null}},set(e,t){try{localStorage.setItem(e,t)}catch{}}},y=()=>v.get(g),b=null,x=[],S=`medium`;function C(e){S=e}function w(e,t){x.push(t),b||(b=document.createElement(`div`),b.className=`diag`,document.body.appendChild(b),b.addEventListener(`click`,e=>{let t=e.target.closest(`[data-diag]`);t&&(t.dataset.diag===`low`&&T(),t.dataset.diag===`close`&&(b?.remove(),b=null))})),b.innerHTML=`<b>${e}</b>
    <pre>${x.slice(-6).join(`
`).replace(/</g,`&lt;`).slice(0,1600)}</pre>
    <pre class="muted">${navigator.userAgent.replace(/</g,`&lt;`)}\n${i(`grafik`,`graphics`)}: ${S}</pre>
    <div class="row">${S===`low`?``:`<button data-diag="low">${i(`Prova enklare grafik`,`Try simpler graphics`)}</button>`}<button data-diag="close">${i(`Stäng`,`Close`)}</button></div>`}function T(){v.set(g,`low`);let e=new URL(location.href);e.searchParams.delete(`q`),location.replace(e.toString())}function E(e,t){if(console.warn(`[diag]`,e,t),S!==`low`&&!v.get(_)){v.set(_,`1`),T();return}w(e,t)}function D(e,t){e.debug.onShaderError=(e,n,r,a)=>{let o=[e.getProgramInfoLog(n),e.getShaderInfoLog(r),e.getShaderInfoLog(a)].filter(Boolean).join(` · `);E(i(`Grafiken gick inte att starta på den här enheten`,`The graphics could not start on this device`),`${t}: shaderfel ${o.slice(0,500)}`)},e.domElement.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),E(i(`Grafiken tappades (för lite minne på enheten?)`,`The graphics were lost (not enough memory on the device?)`),`${t}: webglcontextlost`)})}function O(e){let t=e.getContext(),n=t.drawingBufferWidth,r=t.drawingBufferHeight,i=new Uint8Array(36),a=!0;for(let e=0;e<9;e++){let o=Math.floor(n*(.3+e%3*.2)),s=Math.floor(r*(.3+.2*Math.floor(e/3)));t.readPixels(o,s,1,1,t.RGBA,t.UNSIGNED_BYTE,i.subarray(e*4,e*4+4)),(i[e*4]>3||i[e*4+1]>3||i[e*4+2]>3)&&(a=!1)}return a}function k(e){let t=e.getContext();return`fel=${t.getError()} texturer=${t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)} varyings=${t.getParameter(t.MAX_VARYING_VECTORS)} program=${e.info.programs?.length??`?`}`}var ee=new Set,A=/ResizeObserver|play\(\)|AbortError|NotAllowedError/;function te(e){!e||A.test(e)||ee.has(e)||(ee.add(e),w(i(`Ett fel uppstod`,`An error occurred`),e))}window.addEventListener(`error`,e=>te(`${e.message} (${e.filename?.split(`/`).pop()}:${e.lineno})`)),window.addEventListener(`unhandledrejection`,e=>te(String(e.reason?.message??e.reason)));var j=null,M=null;function N(){let e=navigator.audioSession;e&&e.type!==`play-and-record`&&(e.type=`play-and-record`)}function P(){j||(j=new AudioContext,M=j.createGain(),M.gain.value=.6,M.connect(j.destination)),j.state===`suspended`&&j.resume()}function ne(e){let t=j.createBuffer(1,Math.floor(j.sampleRate*e),j.sampleRate),n=t.getChannelData(0);for(let e=0;e<n.length;e++)n[e]=Math.random()*2-1;return t}function re(){if(!j||!M)return()=>{};let e=j.createGain();e.gain.value=.05,e.connect(M);let t=j.createOscillator();t.type=`sawtooth`,t.frequency.value=100;let n=j.createBiquadFilter();n.type=`lowpass`,n.frequency.value=260,t.connect(n).connect(e);let r=j.createBufferSource();r.buffer=ne(2),r.loop=!0;let i=j.createBiquadFilter();i.type=`lowpass`,i.frequency.value=500;let a=j.createGain();return a.gain.value=.5,r.connect(i).connect(a).connect(e),t.start(),r.start(),()=>{t.stop(),r.stop()}}function ie(e=3){if(!j||!M)return;let t=j.currentTime,n=j.createOscillator();n.type=`square`;let r=j.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(.16,t+.05),r.gain.setValueAtTime(.16,t+e-.3),r.gain.exponentialRampToValueAtTime(1e-4,t+e);for(let r=0;r<e/.5;r++)n.frequency.setValueAtTime(880,t+r*.5),n.frequency.setValueAtTime(660,t+r*.5+.25);let i=j.createBiquadFilter();i.type=`lowpass`,i.frequency.value=2400,n.connect(i).connect(r).connect(M),n.start(t),n.stop(t+e)}function ae(){if(!j||!M)return;let e=j.currentTime,t=j.createBufferSource();t.buffer=ne(1.6);let n=j.createBiquadFilter();n.type=`highpass`,n.frequency.value=1400;let r=j.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.35,e+.05),r.gain.exponentialRampToValueAtTime(1e-4,e+1.5),t.connect(n).connect(r).connect(M),t.start(e)}function F(e=!1){if(!j||!M)return;let t=j.currentTime,n=j.createOscillator();n.frequency.setValueAtTime(e?70:95,t),n.frequency.exponentialRampToValueAtTime(40,t+.1);let r=j.createGain();r.gain.setValueAtTime(e?.06:.12,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.14),n.connect(r).connect(M),n.start(t),n.stop(t+.15)}function I(e=1200,t=.08,n=.08){if(!j||!M)return;let r=j.currentTime,i=j.createOscillator();i.type=`square`,i.frequency.value=e;let a=j.createGain();a.gain.setValueAtTime(n,r),a.gain.exponentialRampToValueAtTime(1e-4,r+t),i.connect(a).connect(M),i.start(r),i.stop(r+t+.02)}function L(){if(!j||!M)return;let e=j.currentTime;for(let[t,n]of[[0,2400],[.07,1700]]){let r=j.createOscillator();r.type=`triangle`,r.frequency.value=n;let i=j.createGain();i.gain.setValueAtTime(.18,e+t),i.gain.exponentialRampToValueAtTime(1e-4,e+t+.06),r.connect(i).connect(M),r.start(e+t),r.stop(e+t+.08)}}function R(){if(!j||!M)return;let e=j.currentTime;for(let t=0;t<4;t++){let n=j.createOscillator();n.frequency.setValueAtTime(140,e+t*.22),n.frequency.exponentialRampToValueAtTime(45,e+t*.22+.2);let r=j.createGain();r.gain.setValueAtTime(.3,e+t*.22),r.gain.exponentialRampToValueAtTime(1e-4,e+t*.22+.22),n.connect(r).connect(M),n.start(e+t*.22),n.stop(e+t*.22+.25)}let t=j.createBufferSource();t.buffer=ne(3);let n=j.createBiquadFilter();n.type=`lowpass`,n.frequency.value=180;let r=j.createGain();r.gain.setValueAtTime(1e-4,e+1),r.gain.exponentialRampToValueAtTime(.5,e+1.6),r.gain.exponentialRampToValueAtTime(1e-4,e+3.6),t.connect(n).connect(r).connect(M),t.start(e+1)}function z(){if(!j||!M)return;let e=j.currentTime,t=j.createOscillator();t.type=`sawtooth`,t.frequency.setValueAtTime(28,e),t.frequency.exponentialRampToValueAtTime(62,e+1.2),t.frequency.exponentialRampToValueAtTime(48,e+2.6);let n=j.createOscillator();n.frequency.setValueAtTime(6,e),n.frequency.linearRampToValueAtTime(14,e+1.4);let r=j.createGain();r.gain.value=.5,n.connect(r);let i=j.createBiquadFilter();i.type=`lowpass`,i.frequency.value=220;let a=j.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(.5,e+.25),a.gain.setValueAtTime(.5,e+2.2),a.gain.exponentialRampToValueAtTime(1e-4,e+3.4),r.connect(a.gain),t.connect(i).connect(a).connect(M),t.start(e),n.start(e),t.stop(e+3.5),n.stop(e+3.5),L()}function oe(e){if(!j||!M)return;let t=j.currentTime,n=j.createOscillator();n.type=`square`,n.frequency.setValueAtTime(3200,t);let r=j.createGain();if(r.gain.setValueAtTime(.12,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.03),n.connect(r).connect(M),n.start(t),n.stop(t+.04),!e)return;let i=j.createBufferSource();i.buffer=ne(.5);let a=j.createBiquadFilter();a.type=`bandpass`,a.frequency.value=2500;let o=j.createGain();o.gain.setValueAtTime(.3,t+.02),o.gain.exponentialRampToValueAtTime(1e-4,t+.45),i.connect(a).connect(o).connect(M),i.start(t+.02)}function se(e){if(!j||!M)return;let t=j.currentTime;le(t,e?.22:.16),e||ue(t+.02,.12,.05)}function ce(e){if(!j||!M)return;let t=j.currentTime;e?(le(t,.12),ue(t,.08,.035)):ue(t,.28,.07)}function le(e,t){let n=j.createOscillator();n.type=`square`,n.frequency.setValueAtTime(1900,e),n.frequency.exponentialRampToValueAtTime(420,e+.025);let r=j.createGain();r.gain.setValueAtTime(t,e),r.gain.exponentialRampToValueAtTime(1e-4,e+.04),n.connect(r).connect(M),n.start(e),n.stop(e+.05)}function ue(e,t,n){let r=j.createBufferSource();r.buffer=ne(t+.05);let i=j.createBiquadFilter();i.type=`bandpass`,i.frequency.value=2600,i.Q.value=.7;let a=j.createGain();a.gain.setValueAtTime(n,e),a.gain.linearRampToValueAtTime(n*.7,e+t*.6),a.gain.exponentialRampToValueAtTime(1e-4,e+t),r.connect(i).connect(a).connect(M),r.start(e),r.stop(e+t+.05)}var B=1.1,V=2.8,de=-23.6,fe=.4,pe=[0,1,2,3,4,5,6].map(e=>-1.2-3.4*e),me=e=>(pe[e-1]+pe[e])/2,he=1.1,H=[1.45,-1.45],ge=-22.85,_e=1.78,ve=.95,U=.17;function ye(e){let t=2166136261;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),16777619);return t>>>0}function W(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var be=Math.PI/180;function xe(e){let t=W(ye(e||`solo`)),n=(e,n)=>e*(1+(t()-.5)*n),r=()=>t()*10;return[[{kind:`static`,y:1.32}],[{kind:`blink`,y:.55,on:n(1.7,.2),off:n(1.3,.2),phase:r()}],[{kind:`sweep`,y0:.15,y1:1.75,period:n(4.4,.2),phase:r()}],[{kind:`static`,y:1.42},{kind:`blink`,y:.38,on:n(1.3,.2),off:n(1.15,.2),phase:r()}],[{kind:`wiper`,py:1.35,a0:-50*be,a1:40*be,period:n(5.2,.2),phase:r()}],[{kind:`wiper`,py:1.5,a0:-45*be,a1:35*be,period:n(4.6,.2),phase:r()},{kind:`blink`,y:.45,on:n(1.9,.2),off:n(1.6,.2),phase:r()}]]}var Se=(e,t=!0)=>({on:t,ax:-1.1,ay:e,bx:B,by:e});function Ce(e,t){switch(e.kind){case`static`:return Se(e.y);case`blink`:{let n=((t+e.phase)%(e.on+e.off)+e.on+e.off)%(e.on+e.off);return Se(e.y,n<e.on)}case`sweep`:{let n=.5-.5*Math.cos(2*Math.PI*(t+e.phase)/e.period);return Se(e.y0+(e.y1-e.y0)*n)}case`wiper`:{let n=.5-.5*Math.cos(2*Math.PI*(t+e.phase)/e.period),r=e.a0+(e.a1-e.a0)*n,i=Math.tan(r),a=B,o=e.py+2*B*i;return o<0?(o=0,a=-1.1+(0-e.py)/i):o>2.8&&(o=V,a=-1.1+(V-e.py)/i),{on:!0,ax:-1.1,ay:e.py,bx:a,by:o}}}}function we(e,t){if(!e.on)return!1;let n=e.bx-e.ax,r=e.by-e.ay,i=0,a=1,o=(e,t)=>{if(e===0)return t>=0;let n=t/e;if(e<0){if(n>a)return!1;n>i&&(i=n)}else{if(n<i)return!1;n<a&&(a=n)}return!0};return o(-n,e.ax+.22)&&o(n,.22-e.ax)&&o(-r,e.ay-0)&&o(r,t-e.ay)&&i<=a}function Te(e,t){let n=Math.min(e,t)-U,r=Math.max(e,t)+U;for(let e=1;e<=6;e++)if(me(e)>n&&me(e)<r)return e;return 0}var G={VAULT:-1,TECH:10,CENTRAL:11,G0:20,KUR:21,PORT:22,CAR:23,VENT:30},Ee=(e=0)=>({slot:e,x:H[e]??H[0],z:2,h:1.78,yaw:0,sp:-1,sprays:3,hits:0,startedAt:null,alarmUntil:0,smoke:null,focus:null,vent:null}),De=`ABCDEFGHJKLMNPQRSTUVWXYZ`,Oe=e=>e.toUpperCase().replace(/[^A-Z]/g,``).slice(0,4);function ke(){let e=``;for(let t=0;t<4;t++)e+=De[Math.floor(Math.random()*24)];return e}function Ae(e,t){return e.filter(e=>e.kind===t).sort((e,t)=>e.at-t.at)}var je=2600,Me=5200,Ne=3500,Pe=3e3,Fe=3600;function Ie(e,t){let n=e.filter(e=>e.kind===`key`).sort((e,t)=>e.at-t.at),r=e.filter(e=>e.kind===`jam`),i=[],a=new Map,o=null,s=new Set,c=(e,t=0)=>r.some(n=>e>=n.peak&&e<=n.peak+1e3+t);for(let e of n){if(o!==null)break;if(s.has(e))continue;let r=n.find(t=>t!==e&&!s.has(t)&&t.slot!==e.slot&&Math.abs(t.at-e.at)<=600);if(r&&c(e.at,500)&&c(r.at,500)){o=Math.max(e.at,r.at);break}if(e.need<=1){c(e.at)?o=e.at:i.push(e.at);continue}r?(s.add(e),s.add(r),i.push(Math.max(e.at,r.at))):t-e.at>600&&(s.add(e),i.push(e.at+600))}for(let e of n)(o===null?t-e.at<1300:e.at<=o)&&a.set(e.slot,e.at);let l=r.length?r.reduce((e,t)=>t.at>e.at?t:e):null;return{openAt:o,fails:i,turned:a,jam:l?{at:l.at,peak:l.peak}:null}}var Le=[{id:`röd`,hex:`#c8231d`},{id:`blå`,hex:`#1f4fc4`},{id:`gul`,hex:`#e0b80f`},{id:`svart`,hex:`#18191b`},{id:`vit`,hex:`#e8e6df`},{id:`grön`,hex:`#1f8a3c`}];function Re(e){let t=2166136261;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),16777619);return t>>>0}function ze(e,t){let n=[...e];for(let e=n.length-1;e>0;e--){let r=Math.floor(t()*(e+1));[n[e],n[r]]=[n[r],n[e]]}return n}function Be(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Ve(e,t){let n=Be(Re(`${e||`solo`}:gd5:${t}`)),r=Array.from({length:5},()=>Le[Math.floor(n()*Le.length)].id),i=[110,230,400][Math.floor(n()*3)],a=``;for(let e=0;e<5;e++)a+=Math.floor(n()*10);return{wires:r,volt:i,serial:`GD5-${a}`}}function He(e){let t=t=>e.wires.map((e,n)=>e===t?n:-1).filter(e=>e>=0),n=t(`röd`),r=t(`blå`),i=t(`svart`),a=t(`grön`),o=e.serial.replace(/\D/g,``).slice(1),s=Number(o[0]),c=Number(o.at(-1));return e.volt===400&&n.length>1?{wire:n[n.length-1],rule:1}:t(`gul`).length===0&&c%2==1?{wire:(c-1)/2,rule:2}:r.length===1?{wire:r[0],rule:3}:e.volt===110&&i.length>0?{wire:i[0],rule:4}:a.length>n.length?{wire:a[a.length-1],rule:5}:{wire:Math.floor(s/2),rule:6}}var Ue={title:i(`Titan Lock GD-5 · Förbikoppling av garagedörrens lås`,`Titan Lock GD-5 · Bypassing the garage door lock`),intro:i(`Kablarna räknas uppifrån – kabel 1 är den översta. Gå igenom reglerna i ordning: den första som stämmer gäller. Kapa bara en kabel.`,`Wires are counted from the top – wire 1 is the highest. Go through the rules in order: the first one that matches applies. Cut only one wire.`),rules:[i(`Voltmätaren visar 400 V och det finns mer än en röd kabel → kapa den sista röda kabeln.`,`The voltmeter shows 400 V and there is more than one red wire → cut the last red wire.`),i(`Det finns ingen gul kabel och serienumrets sista siffra är udda → sista siffran 1 = kabel 1, 3 = kabel 2, 5 = kabel 3, 7 = kabel 4, 9 = kabel 5.`,`There is no yellow wire and the last digit of the serial number is odd → last digit 1 = wire 1, 3 = wire 2, 5 = wire 3, 7 = wire 4, 9 = wire 5.`),i(`Det finns exakt en blå kabel → kapa den blå kabeln.`,`There is exactly one blue wire → cut the blue wire.`),i(`Voltmätaren visar 110 V och det finns minst en svart kabel → kapa den första svarta kabeln.`,`The voltmeter shows 110 V and there is at least one black wire → cut the first black wire.`),i(`Det finns fler gröna kablar än röda → kapa den sista gröna kabeln.`,`There are more green wires than red ones → cut the last green wire.`),i(`Annars → serienumrets första siffra (efter GD5-): 0–1 = kabel 1, 2–3 = kabel 2, 4–5 = kabel 3, 6–7 = kabel 4, 8–9 = kabel 5.`,`Otherwise → the first digit of the serial number (after GD5-): 0–1 = wire 1, 2–3 = wire 2, 4–5 = wire 3, 6–7 = wire 4, 8–9 = wire 5.`)],outro:i(`Fel kabel: larmet går och reservkretsen kopplas in – ny kabeldragning, börja om från regel 1. Skåpet spärras en stund efter varje fel (längre för varje gång).`,`Wrong wire: the alarm goes off and the backup circuit kicks in – new wiring, start again from rule 1. The cabinet locks for a while after each mistake (longer each time).`)},We=[4e3,1e4,2e4];function Ge(e,t,n){let r=e.filter(e=>e.kind===`cut`).sort((e,t)=>e.at-t.at),i=0,a=null,o=null,s=[],c=null,l=0;for(let e of r){if(a!==null)break;e.attempt!==i||e.at<l||(e.wire===He(Ve(t,i)).wire?(a=e.at,o=e.wire):(s.push(e.at),c={at:e.at,wire:e.wire,attempt:i},l=e.at+We[Math.min(s.length,We.length)-1],i++))}return a===null?c&&n-c.at<1600?{attempt:i,shown:Ve(t,c.attempt),cutWire:c.wire,solvedAt:a,fails:s,lockUntil:l}:{attempt:i,shown:Ve(t,i),cutWire:null,solvedAt:a,fails:s,lockUntil:l}:{attempt:i,shown:Ve(t,i),cutWire:o,solvedAt:a,fails:s,lockUntil:l}}var Ke=r?[`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`]:[`måndag`,`tisdag`,`onsdag`,`torsdag`,`fredag`,`lördag`,`söndag`],qe=[`Leif`,`Lars`,`Karin`,`Kerstin`,`Mehdi`,`Maria`,`Sofia`,`Stefan`,`Anna`,`Ahmed`,`Elin`,`Erik`,`Patrik`,`Petra`,`Nadia`,`Niklas`,`Helena`,`Hassan`,`Jonas`,`Johanna`,`Tobias`,`Tove`],Je=[`Andersson`,`Johansson`,`Karlsson`,`Nilsson`,`Eriksson`,`Larsson`,`Olsson`,`Persson`,`Svensson`,`Gustafsson`,`Rahimi`,`Holm`,`Berg`,`Nyström`,`Sandberg`,`Lundqvist`,`Yusuf`,`Strand`,`Åberg`,`Virtanen`],Ye=r?[`Cashier`,`Branch manager`,`Private banker`,`IT technician`,`Cleaner`,`Receptionist`,`Credit analyst`]:[`Kassör`,`Kontorschef`,`Privatrådgivare`,`IT-tekniker`,`Lokalvårdare`,`Receptionist`,`Kreditanalytiker`];function Xe(e){let t=Be(Re(`${e||`solo`}:kur`)),n=e=>e[Math.floor(t()*e.length)],r=new Set,a=()=>{for(;;){let e=String(1e3+Math.floor(t()*9e3));if(!r.has(e)&&e!==[...e].reverse().join(``))return r.add(e),e}},o=Math.floor(t()*7),s=ze(Je,t),c=[];for(let e=0;e<7;e++)c.push({first:n(qe),last:s[e],id:a(),role:i(`Väktare`,`Security guard`)});let l=c[o],u=qe.filter(e=>e[0]===l.first[0]&&e!==l.first),d={first:u.length?n(u):`${l.first[0]}ennart`,last:l.last,id:a(),role:n(Ye)},f=c[(o+3)%7],p=qe.filter(e=>e[0]!==l.first[0]);f.last=l.last,f.first=n(p);let m=[];for(let e=0;e<6;e++)m.push({first:n(qe),last:s[7+e],id:a(),role:Ye[e]});let h=[...c,d,...m].sort((e,t)=>e.last.localeCompare(t.last,`sv`)||e.first.localeCompare(t.first,`sv`));return{today:o,date:i(`${Ke[o]} ${12+o} oktober`,`${Ke[o]} ${12+o} October`),schedule:c.map(e=>`${e.first[0]}. ${e.last}`),registry:h,guard:l,code:[...l.id].reverse().join(``)}}var Ze=5e3;function Qe(e,t){let n=Xe(t).code,r=null,i=0,a=0,o=[];for(let t of Ae(e,`code`)){if(r!==null)break;t.at<a||(t.code===n?r=t.at:(i++,i%3==0&&(o.push(t.at),a=t.at+Ze)))}return{solvedAt:r,wrongs:i,fails:o,lockUntil:a}}var $e=5e3;function et(e){return Math.floor(Be(Re(`${e||`solo`}:breaker`))()*12)}function tt(e,t){return 7e3+Be(Re(`${e||`solo`}:crank:${Math.round(t)}`))()*23e3}var nt=15e3;function rt(e,t,n){let r=et(t),i=null,a=[],o=0;for(let t of Ae(e,`breaker`).sort((e,t)=>e.at-t.at)){if(i!==null)break;t.at<o||(t.n===r?i=t.at:(a.push(t.at),o=t.at+nt))}let s=null,c=null,l=0,u=0,d=-1/0;if(i!==null){let r=e.filter(e=>(e.kind===`crank`||e.kind===`load`)&&e.at>=i).sort((e,t)=>e.at-t.at);for(let e of r){if(c!==null)break;if(s&&e.at>s.at+s.dur&&(d=s.at+s.dur,a.push(d),u=d+$e,s=null),e.kind===`crank`)!s&&e.at>=u&&(s={at:e.at,dur:tt(t,e.at)});else if(s){let t=(e.at-s.at)/s.dur;t<.65?(l++,a.push(e.at),u=e.at+$e,s=null):t<=.8?c=e.at:(d=e.at,a.push(e.at),u=e.at+$e,s=null)}}c===null&&s&&n>s.at+s.dur&&(d=s.at+s.dur,a.push(d),u=d+$e,s=null)}let f=0;return c===null?s?f=Math.min(1,(n-s.at)/s.dur):n<d+5e3&&(f=1-.8*((n-d)/$e)):f=.7,{breakerAt:i,fails:a,crank:s,runningAt:c,stalls:l,temp:f,coolUntil:u,breakerLockUntil:o}}var it=25e3,at=[{q:i(`Det här är Lena Ek, polisens förhandlare. Ingen behöver bli skadad. Vem pratar jag med?`,`This is Lena Ek, police negotiator. Nobody needs to get hurt. Who am I talking to?`),a:[{t:i(`”Kalla mig vad du vill. Vi vill bara prata.”`,`“Call me what you like. We just want to talk.”`),ms:6e4},{t:i(`”Det angår inte dig.”`,`“That’s none of your business.”`),ms:-3e4},{t:i(`”Kom in och hämta oss om ni vågar!”`,`“Come in and get us if you dare!”`),ms:-9e4}]},{q:i(`Är någon skadad där inne? Vakterna?`,`Is anyone hurt in there? The guards?`),a:[{t:i(`”Nej. Ingen är skadad och ingen kommer att bli det.”`,`“No. Nobody is hurt and nobody will be.”`),ms:6e4},{t:i(`”Det beror helt på er.”`,`“That depends entirely on you.”`),ms:-6e4},{t:i(`”Vilka vakter?”`,`“What guards?”`),ms:0}]},{q:i(`Jag behöver något att gå till mina chefer med. Vad vill ni?`,`I need something to take to my bosses. What do you want?`),a:[{t:i(`”Ge oss en timme, så kommer vi ut lugnt.”`,`“Give us an hour and we’ll come out quietly.”`),ms:9e4},{t:i(`”En helikopter. Och tio miljoner till.”`,`“A helicopter. And ten million more.”`),ms:-3e4},{t:i(`Lägg på.`,`Hang up.`),ms:-6e4}]}];function ot(e,t){let n=Be(Re(`${e||`solo`}:talk:${t}`));return ze(at[t].a.map((e,t)=>t),n)}function st(e,t,n){let r={state:`waiting`,step:0,askedAt:0,effectMs:0,transcript:[]};if(t===null||n<t)return r;let a=Ae(e,`answer`),o=a.find(e=>e.step===-1&&e.at>=t&&e.at<=t+25e3);if(!o)return n>t+25e3?(r.state=`done`,r.effectMs=-9e4,r.transcript.push({q:i(`Ingen svarade i telefonen.`,`Nobody answered the phone.`),a:null})):r.state=`ringing`,r;let s=o.at;for(let e=0;e<at.length;e++){let t=a.find(t=>t.step===e&&t.at>=s&&t.at<=s+25e3);if(!t)return n>s+25e3?(r.effectMs-=3e4,r.transcript.push({q:at[e].q,a:i(`(tystnad – förhandlaren lägger på)`,`(silence – the negotiator hangs up)`)}),r.state=`done`,r):(r.state=`talking`,r.step=e,r.askedAt=s,r.transcript.push({q:at[e].q,a:null}),r);let o=at[e].a[t.choice]??at[e].a[0];r.effectMs+=o.ms,r.transcript.push({q:at[e].q,a:o.t}),s=t.at}return r.state=`done`,r}var ct={kombi:{label:i(`Kombin`,`Estate car`),cap:4,driveMs:3e3},transport:{label:i(`Värdetransporten`,`Cash van`),cap:6,driveMs:7e3}},lt=2500,ut=24e3;function dt(e,t,n){let r={car:null,loadStart:null,departAt:null,bags:0,holders:new Set};for(let t of Ae(e,`car`))r.car=t.car;if(t===null)return r;let i=Ae(e,`hold`).filter(e=>e.at>=t);for(let t of i){if(r.departAt!==null)break;t.on?(r.holders.add(t.by),r.loadStart===null&&r.car&&(r.loadStart=t.at,r.car=Ae(e,`car`).filter(e=>e.at<=t.at).at(-1)?.car??r.car)):(r.holders.delete(t.by),r.loadStart!==null&&(r.departAt=t.at))}if(r.loadStart!==null&&r.car){let e=ct[r.car].cap,t=r.loadStart+e*lt;r.departAt===null&&n>=t&&(r.departAt=t),r.departAt!==null&&r.departAt>t&&(r.departAt=t),r.bags=Math.min(e,Math.floor(((r.departAt??n)-r.loadStart)/lt))}return r}var ft=21e5,pt=3e4,mt=.33;function ht(e,t,n,r,a=ft){let o=Ie(e,r),s=Ge(e,n,r),c=Qe(e,n),l=rt(e,n,r),u=Tt(e,n),d=l.runningAt!==null&&u.unlockedAt!==null?Math.max(l.runningAt,u.unlockedAt):null,f=d===null?null:Ae(e,`port`).find(e=>e.at>=d)?.at??null,p=dt(e,f,r),m=p.departAt??1/0,h=[...[...Ae(e,`hit`),...Ae(e,`sensor`)].map(e=>e.at),...o.fails,...s.fails,...c.fails,...l.fails,...u.fails].filter(e=>e<=r&&e<=m),g=Math.max(0,...t.map(e=>e.alarmUntil),...h.map(e=>e+Ne)),_=h.length,v=Math.max(0,...o.fails.map(e=>e+Pe)),y=Ae(e,`start`)[0],b=e.filter(e=>e.kind!==`reset`).reduce((e,t)=>Math.min(e,t.at),1/0),x=y?y.at:Number.isFinite(b)?b:null,S=st(e.filter(e=>!(e.kind===`answer`&&e.at>m)),x===null?null:x+mt*a,Math.min(r,m)),C=null,w=null;if(x!==null){let e=x+a-_*pt+S.effectMs,t=f===null?e:Math.min(e,f+ut),n=Math.min(1,Math.max(0,(r-x)/Math.max(1,e-x)));if(C={deadline:e,finaleDeadline:t,frac:n,powerCut:n>=.55,swat:n>=.75,blue:n>=.9||f!==null},p.departAt!==null&&p.car){let e=p.departAt+ct[p.car].driveMs;e<=t?r>=e&&(w={win:!0,at:e,bags:p.bags,money:p.bags*5,reason:i(`Ni kom undan i ${ct[p.car].label.toLowerCase()}.`,`You got away in the ${ct[p.car].label.toLowerCase()}.`)}):r>=t&&(w={win:!1,at:t,bags:p.bags,money:0,reason:i(`Polisen hann upp på rampen innan ni var ute.`,`The police reached the ramp before you got out.`)})}else r>=t&&(w={win:!1,at:t,bags:0,money:0,reason:f===null?i(`Insatsstyrkan stormade källaren.`,`The SWAT team stormed the basement.`):i(`Polisen hann upp på rampen innan ni var ute.`,`The police reached the ramp before you got out.`)})}return{vault:o,cabinet:s,kur:c,tech:l,central:u,talk:S,finale:p,police:C,alarmUntil:g,alarms:_,keyLockUntil:v,garageOpenAt:s.solvedAt,portOpenAt:f,startedAt:x,result:w}}var gt=[[0,-1],[1,0],[0,1],[-1,0]],_t=(e,t)=>e<t?`${e}|${t}`:`${t}|${e}`,vt=(e,t)=>{let n=e%5+gt[t][0],r=Math.floor(e/5)+gt[t][1];return n<0||n>=5||r<0||r>=6?-1:r*5+n};function yt(e,t,n){let r=new Map([[t,0]]),i=[t];for(;i.length;){let t=i.shift();for(let n=0;n<4;n++){let a=vt(t,n);a>=0&&e.has(_t(t,a))&&!r.has(a)&&(r.set(a,r.get(t)+1),i.push(a))}}return r.get(n)??1/0}function bt(e,t,n){let r=new Map([[t,-1]]),i=[t];for(;i.length;){let t=i.shift();if(t===n)break;for(let n=0;n<4;n++){let a=vt(t,n);a>=0&&e.has(_t(t,a))&&!r.has(a)&&(r.set(a,t),i.push(a))}}if(!r.has(n))return null;let a=[];for(let e=n;r.get(e)>=0;e=r.get(e))a.push(_t(e,r.get(e)));return a.reverse()}function xt(e){for(let t=0;;t++){let n=Be(Re(`${e||`solo`}:vent:${t}`)),r=new Set,i=new Set([24]),a=[24];for(;a.length;){let e=a[a.length-1],t=[0,1,2,3].map(t=>vt(e,t)).filter(e=>e>=0&&!i.has(e));if(!t.length){a.pop();continue}let o=t[Math.floor(n()*t.length)];r.add(_t(e,o)),i.add(o),a.push(o)}let o=[];for(let e=0;e<30;e++)for(let t of[1,2]){let n=vt(e,t);n>=0&&!r.has(_t(e,n))&&o.push(_t(e,n))}let s=ze(o,n);for(let e of s.slice(0,2))r.add(e);let c=new Set(s.slice(2,5)),l=new Set,u=e=>e.split(`|`).map(Number).some(e=>e===24||e===0),d=()=>new Set([...r].filter(e=>!l.has(e)));for(let e=0;e<3;e++){let e=bt(d(),24,0);if(!e||!ze(e.filter(e=>!u(e)),n).find(e=>{l.add(e);let t=yt(d(),24,0)<1/0;return t||l.delete(e),t}))break}let f=new Set(bt(d(),24,0)??[]);for(let e of ze([...r],n)){if(l.size>=4)break;l.has(e)||f.has(e)||u(e)||(l.add(e),yt(d(),24,0)===1/0&&l.delete(e))}let p=yt(d(),24,0);if(p<12&&t<40)continue;let m=new Map;m.set(24,{kind:`grille`,below:`teknik`}),m.set(0,{kind:`grille`,below:`central`});for(let e=0;e<6;e++)m.set(e*5+2,{kind:`grille`,below:`korridor`});let h=ze(Array.from({length:30},(e,t)=>t).filter(e=>!m.has(e)),n),g=h.filter(e=>[0,1,2,3].some(t=>{let n=vt(e,t);return n<0||!r.has(_t(e,n))&&!c.has(_t(e,n))})).slice(0,7),_=h.filter(e=>!g.includes(e)),v=new Set;for(let e of g){let t=``;do t=`V-${10+Math.floor(n()*80)}`;while(v.has(t));v.add(t),m.set(e,{kind:`code`,code:t})}for(let e of _.slice(0,3))m.set(e,{kind:`rust`});for(let e of _.slice(3,5))m.set(e,{kind:`cables`});return{open:r,fans:c,sensors:l,marks:m,shortest:p}}}var St=[{id:`valv`,place:i(`valvet`,`the vault`),sees:i(`den runda valvdörren på nära håll`,`the round vault door up close`),fixer:`cam01`},{id:`korrS`,place:i(`korridoren sedd från garagedörren`,`the corridor seen from the garage door`),sees:i(`lång korridor – den runda valvdörren längst bort`,`long corridor – the round vault door at the far end`),fixer:`cam02`},{id:`korrN`,place:i(`korridoren sedd från valvet`,`the corridor seen from the vault`),sees:i(`lång korridor – skylten SÄKERHETSZON B till höger, en stol till vänster`,`long corridor – the sign SECURITY ZONE B on the right, a chair on the left`),fixer:null},{id:`teknik`,place:i(`teknikrummet`,`the tech room`),sees:i(`säkringsskåpet och blinkande serverskåp`,`the breaker panel and blinking server racks`),fixer:null},{id:`garage`,place:i(`garaget`,`the garage`),sees:i(`pelare, koner och vaktkurens fönster`,`pillars, cones and the guard booth window`),fixer:`cam06`},{id:`port`,place:i(`garageporten inifrån`,`the garage gate from inside`),sees:i(`rullporten och en vit skåpbil`,`the roller gate and a white van`),fixer:null},{id:`trappa`,place:i(`trappa B`,`stairwell B`),sees:i(`trappsteg och en grön skylt`,`stairs and a green sign`),fixer:`cam07`},{id:`gata`,place:i(`gatan vid garagerampen`,`the street by the garage ramp`),sees:i(`rampen utomhus – rullporten utifrån`,`the ramp outdoors – the roller gate from outside`),fixer:null}];function Ct(e){let t=Be(Re(`${e||`solo`}:central`));return{order:ze(St.map(e=>e.id),t),watched:ze(St.map(e=>e.id),t).slice(0,3)}}var wt=8e3;function Tt(e,t){let{order:n,watched:r}=Ct(t),i=new Set,a=null,o=0,s=[];for(let t of e.filter(e=>e.kind===`loop`||e.kind===`unlock`).sort((e,t)=>e.at-t.at))t.kind===`loop`?t.on?i.add(t.k):i.delete(t.k):t.kind===`unlock`&&a===null&&t.at>=o&&(i.size===r.length&&r.every(e=>i.has(n.indexOf(e)))?a=t.at:(s.push(t.at),o=t.at+wt));return{loops:i,unlockedAt:a,fails:s,lockUntil:o}}var Et={"Det finns redan två rånare i det här rummet. Gå med som Fixaren i stället.":`There are already two robbers in this room. Join as the Fixer instead.`,"Båda rånarplatserna är tagna – välj Fixaren.":`Both robber seats are taken – choose the Fixer.`},Dt=e=>r?Et[e]??e:e;function Ot(e){let t=Math.random().toString(36).slice(2,10);if(!e)return t;try{let n=`bank-id:${e}`,r=sessionStorage.getItem(n);if(r)return r;sessionStorage.setItem(n,t)}catch{}return t}var kt=class{seed;local;selfId;restored=null;slot=0;robbers=new Map;roster=[];log=[];connected=!1;restoredOnce=!1;radioOn=!0;seat=`waiting`;seatError=``;epoch=null;offset=0;listeners=new Set;changeListeners=new Set;out=()=>{};radio=null;constructor(e,t,n=null){this.seed=e,this.local=t,this.selfId=Ot(n)}now(){return Date.now()+this.offset}setOffset(e){this.offset=e}activeRobbers(){if(this.local)return[...this.robbers].map(([e,t])=>({id:e,s:t}));let e=new Set(this.roster.filter(e=>e.role===`robber`).map(e=>e.id));return[...this.robbers].filter(([t])=>e.has(t)).map(([e,t])=>({id:e,s:t}))}need(){return Math.min(2,Math.max(1,this.activeRobbers().length))}limitMs=ft;shared(e=this.now()){return ht(this.log,this.activeRobbers().map(e=>e.s),this.seed,e,this.limitMs)}publishRobber(e){this.robbers.set(this.selfId,e),this.out({t:`robber`,s:e})}emit(e){let t={...e,at:this.now(),by:this.selfId};this.apply(t),this.out({t:`event`,e:t})}apply(e){e.kind===`reset`?this.log=[]:this.log.push(e);for(let t of this.listeners)t(e)}onEvent(e){return this.listeners.add(e),()=>this.listeners.delete(e)}onChange(e){return this.changeListeners.add(e),()=>this.changeListeners.delete(e)}changed(){for(let e of this.changeListeners)e()}};function At(){return`wss://bankranet.det-hemliga-projektet.workers.dev`}var jt=()=>At().replace(/^ws/,`http`),Mt=class{store;room;role;ws=null;closed=!1;samples=[];pingTimer=0;constructor(e,t,n){this.store=e,this.room=t,this.role=n,e.seat=n,e.out=e=>this.send(e),this.open()}open(){let e=this.ws=new WebSocket(`${At()}/room/${this.room}`);e.onopen=()=>{this.send({t:`hello`,role:this.role,id:this.store.selfId,radio:this.store.radioOn});let e=this.store.robbers.get(this.store.selfId);e&&this.role===`robber`&&this.send({t:`robber`,s:e});for(let e=0;e<5;e++)setTimeout(()=>this.send({t:`ping`,c:Date.now()}),e*150);this.pingTimer=window.setInterval(()=>this.send({t:`ping`,c:Date.now()}),5e3)},e.onmessage=e=>this.receive(JSON.parse(e.data)),e.onclose=()=>{clearInterval(this.pingTimer),this.store.connected=!1,this.store.changed(),this.closed||setTimeout(()=>this.open(),1500)}}receive(e){let t=this.store;switch(e.t){case`welcome`:{if(t.epoch!==null&&e.epoch!==t.epoch){location.reload();return}t.epoch=e.epoch,t.connected=!0,this.wantSeat&&=(this.send({t:`seat`,role:this.wantSeat}),null),t.roster=e.roster,e.slot!==null&&(t.slot=e.slot);let n=new Set(e.log.map(Nt)),r=t.log.filter(e=>e.by===t.selfId&&!n.has(Nt(e)));t.log=[...e.log,...r].sort((e,t)=>e.at-t.at);for(let e of r)this.send({t:`event`,e});for(let[n,r]of Object.entries(e.robbers))n!==t.selfId&&t.robbers.set(n,r);e.robbers[t.selfId]&&!t.restoredOnce&&(t.restored=e.robbers[t.selfId],t.restoredOnce=!0);break}case`roster`:t.roster=e.roster;break;case`seat`:this.role=e.role,t.seat=e.role,t.seatError=``,e.slot!==null&&(t.slot=e.slot);break;case`seatDenied`:t.seatError=Dt(e.msg);break;case`robber`:e.id!==t.selfId&&t.robbers.set(e.id,e.s);break;case`event`:t.apply(e.e);break;case`pong`:{let n=Date.now()-e.c;this.samples.push({rtt:n,off:e.s+n/2-Date.now()}),this.samples.length>12&&this.samples.shift(),t.setOffset(this.samples.reduce((e,t)=>t.rtt<e.rtt?t:e).off);return}case`error`:this.close(),alert(Dt(e.msg)),location.href=`${location.pathname}?room=${this.room}`;return;case`rtc`:case`ptt`:t.radio?.(e);return}t.changed()}wantSeat=null;setSeat(e){this.ws?.readyState===WebSocket.OPEN&&this.store.connected?this.send({t:`seat`,role:e}):this.wantSeat=e}send(e){this.ws?.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(e))}close(){this.closed=!0,this.ws?.close()}},Nt=e=>`${e.by}:${e.at}:${e.kind}`,Pt=e=>e.charAt(0).toUpperCase()+e.slice(1),Ft=[`pointerdown`,`pointerup`,`touchend`,`click`],It=[{urls:[`stun:stun.cloudflare.com:3478`,`stun:stun.l.google.com:19302`]}],Lt=()=>performance.now(),Rt=new URLSearchParams(location.search).has(`radiolog`),zt=[],Bt=null;function Vt(e){let t=new Date;zt.push(`${String(t.getMinutes()).padStart(2,`0`)}:${String(t.getSeconds()).padStart(2,`0`)} ${e}`),zt.length>40&&zt.splice(0,zt.length-40),Bt&&(Bt.textContent=zt.slice(-12).reverse().join(`
`))}var Ht={get(e){try{return localStorage.getItem(e)}catch{return null}},set(e,t){try{localStorage.setItem(e,t)}catch{}}},Ut=class{st;el;peers=new Map;ice;mic=null;micReq=null;pressed=!1;talking=!1;talkers=new Set;speaker=Ht.get(`bank-radio-speaker`)!==`off`;enabled=Ht.get(`bank-radio`)!==`off`;asked;dismissed=!1;onToggle=null;roster=[];note=``;noteTimer=0;watchTimer=0;lastSig=``;ui;constructor(e){this.st=e,this.ice=fetch(`${jt()}/ice`).then(e=>e.json()).then(e=>e.iceServers?.length?e.iceServers:It).catch(()=>It),this.asked=Ht.get(`bank-radio-asked`)===e.seed,this.dismissed=this.asked&&!this.enabled,this.el=document.createElement(`div`),this.el.className=`radio`,this.el.innerHTML=`
      <div class="radio-pill" data-ui="pill"></div>
      <button class="radio-spk" data-ui="spk" aria-label="${i(`Ljud från radion`,`Radio sound`)}"></button>
      <button class="radio-pwr" data-ui="pwr" aria-label="${i(`Stäng av walkie-talkien`,`Turn off the walkie-talkie`)}"><svg viewBox="0 0 24 24" width="16" height="16" style="display:block;margin:auto" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M7.05 6.6a8 8 0 1 0 9.9 0"/><path d="M12 3v8"/></svg></button>
      <button class="radio-off" data-ui="off" aria-label="${i(`Slå på walkie-talkien`,`Turn on the walkie-talkie`)}">📻 <span>${i(`Radio av`,`Radio off`)}</span></button>
      <button class="radio-ptt" data-ui="ptt" aria-label="${i(`Håll inne för att prata`,`Hold to talk`)}">
        <span class="radio-ico">📻</span><span class="radio-lbl">${i(`PRATA`,`TALK`)}</span><span class="radio-count" data-ui="count"></span>
      </button>
      <div class="radio-ask" data-ui="ask" role="dialog" aria-modal="true" aria-label="${i(`Walkie-talkien`,`Walkie-talkie`)}" hidden>
        <div class="radio-ask-card">
          <div class="radio-ask-ico">📻</div>
          <b>${i(`Sitter ni i samma rum?`,`Are you in the same room?`)}</b>
          <p>${i(`Sitter ni på olika ställen kan ni prata med varandra genom <strong>walkie-talkien</strong>. Håll inne knappen vid kanten av skärmen medan du pratar, och släpp när du är klar.`,`If you are in different places, you can talk to each other with the <strong>walkie-talkie</strong>. Hold the button at the edge of the screen while you talk, and let go when you are done.`)}</p>
          <p class="muted">${i(`Vill du aktivera walkie-talkien?`,`Do you want to turn on the walkie-talkie?`)}</p>
          <div class="radio-ask-btns"><button data-ui="no">${i(`Nej`,`No`)}</button><button data-ui="yes" class="primary">${i(`Ja, aktivera`,`Yes, turn on`)}</button></div>
        </div>
      </div>`,Rt&&(Bt=document.createElement(`pre`),Bt.className=`radio-log`,this.el.appendChild(Bt));let t=e=>this.el.querySelector(`[data-ui=${e}]`);this.ui={pill:t(`pill`),ptt:t(`ptt`),spk:t(`spk`),pwr:t(`pwr`),off:t(`off`),count:t(`count`),ask:t(`ask`)},e.radioOn=this.enabled,this.ui.pwr.addEventListener(`click`,()=>this.setEnabled(!1)),this.ui.off.addEventListener(`click`,()=>this.setEnabled(!0)),t(`yes`).addEventListener(`click`,()=>this.answer(!0)),t(`no`).addEventListener(`click`,()=>this.answer(!1));let n=this.ui.ptt;n.addEventListener(`pointerdown`,e=>{e.preventDefault();try{n.setPointerCapture(e.pointerId)}catch{}this.press()}),n.addEventListener(`pointerup`,()=>this.release(`släpp`)),n.addEventListener(`pointercancel`,()=>this.release(`avbrutet tryck (pointercancel)`)),n.addEventListener(`lostpointercapture`,()=>this.release(`släpp (lostpointercapture)`)),n.addEventListener(`contextmenu`,e=>e.preventDefault()),this.ui.spk.addEventListener(`click`,()=>{this.speaker=!this.speaker,Ht.set(`bank-radio-speaker`,this.speaker?`on`:`off`),this.flash(this.speaker?i(`Ljudet från radion är på`,`Radio sound is on`):i(`Ljudet från radion är av – du hör inte de andra`,`Radio sound is off – you can’t hear the others`)),this.applyMute()}),window.addEventListener(`keydown`,this.onKeyDown),window.addEventListener(`keyup`,this.onKeyUp),window.addEventListener(`blur`,this.onBlur);for(let e of Ft)document.addEventListener(e,this.unlock,!0);e.radio=e=>{e.t===`rtc`?this.onSignal(e.from,e.d):this.onPtt(e.id,e.on)},e.onChange(()=>this.sync()),this.watchTimer=window.setInterval(()=>this.watch(),2e3),this.sync(),this.render()}answer(e){this.asked=!0,Ht.set(`bank-radio-asked`,this.st.seed),this.dismissed=!e,P(),e===this.enabled?(e&&this.flash(i(`Walkie-talkien är på – håll inne knappen för att prata`,`The walkie-talkie is on – hold the button to talk`)),this.lastSig=``,this.render(),this.onToggle?.()):this.setEnabled(e,!e)}get on(){return this.enabled}setEnabled(e,t=!1){if(e&&(this.dismissed=!1),e!==this.enabled){if(this.enabled=e,Ht.set(`bank-radio`,e?`on`:`off`),this.st.radioOn=e,this.st.out({t:`radio`,on:e}),e)P();else{this.release(`radion stängdes av`);for(let e of[...this.peers.keys()])this.removePeer(e);for(let e of this.mic?.getTracks()??[])e.stop();this.mic=null,this.talkers.clear()}Vt(e?`radion påslagen`:`radion avstängd`),t||this.flash(e?i(`Walkie-talkien är på – håll inne knappen för att prata`,`The walkie-talkie is on – hold the button to talk`):i(`Walkie-talkien är av (📻 slår på den)`,`The walkie-talkie is off (📻 turns it on)`)),this.lastSig=``,this.sync(),this.render(),this.onToggle?.()}}sync(){let e=new Map(this.roster.map(e=>[e.id,e.radio!==!1]));this.roster=this.st.roster;for(let t of this.roster)t.id!==this.st.selfId&&e.has(t.id)&&e.get(t.id)!==(t.radio!==!1)&&this.flash(i(`${this.nameOf(t.id)} har ${t.radio===!1?`stängt av`:`slagit på`} sin walkie-talkie`,`${Pt(this.nameOf(t.id))} has turned ${t.radio===!1?`off`:`on`} their walkie-talkie`));for(let e of this.roster)e.radio===!1&&this.peers.has(e.id)&&this.removePeer(e.id);let t=new Set(this.enabled?this.roster.filter(e=>e.id!==this.st.selfId&&e.radio!==!1).map(e=>e.id):[]);if(!this.enabled)for(let e of[...this.peers.keys()])this.removePeer(e);if(this.st.connected)for(let e of t){let t=this.peers.get(e);t?t.goneSince=null:this.addPeer(e)}for(let[e,n]of this.peers)t.has(e)||(n.goneSince===null?n.goneSince=Lt():Lt()-n.goneSince>6e3&&this.removePeer(e));this.render()}watch(){if(this.sync(),!this.st.connected)return;let e=Lt();for(let t of this.peers.values()){if(t.goneSince!==null)continue;let n=t.pc,r=n?.connectionState;(n?r===`failed`||r===`closed`||t.badSince!==null&&e-t.badSince>6e3||n.signalingState===`have-local-offer`&&e-t.since>1e4||r!==`connected`&&e-t.since>25e3:e-t.added>6e3)&&(t.offerer?this.offer(t):e-t.askedAt>5e3&&(t.askedAt=e,this.closePc(t),this.signal(t.id,{restart:!0,have:null})))}}signal(e,t){this.st.out({t:`rtc`,to:e,d:t})}addPeer(e){let t=document.createElement(`audio`);t.autoplay=!0,t.setAttribute(`playsinline`,``),t.style.display=`none`,document.body.appendChild(t);let n=Lt(),r={id:e,offerer:this.st.selfId<e,pc:null,sid:null,tx:null,audio:t,queue:Promise.resolve(),added:n,since:n,badSince:null,askedAt:n,goneSince:null};return this.peers.set(e,r),this.applyMute(),r.offerer&&this.offer(r),r}removePeer(e){let t=this.peers.get(e);t&&(this.closePc(t),t.audio.remove(),this.peers.delete(e),this.talkers.delete(e)&&!this.talking&&this.speaker&&ce(!1))}closePc(e){e.pc?.close(),e.pc=null,e.sid=null,e.tx=null,e.audio.srcObject=null}newPc(e,t,n){this.closePc(e);let r=new RTCPeerConnection({iceServers:n});return e.pc=r,e.sid=t,e.since=Lt(),e.badSince=null,r.ontrack=t=>{e.pc===r&&(e.audio.srcObject=t.streams[0]??new MediaStream([t.track]),e.audio.play().then(()=>Vt(`ljud från ${this.nameOf(e.id)} spelas`),t=>Vt(`ljud från ${this.nameOf(e.id)} väntar på tryck (${t.name})`)))},r.onicecandidate=n=>{e.pc===r&&n.candidate&&this.signal(e.id,{sid:t,ice:n.candidate.toJSON()})},r.onconnectionstatechange=()=>{if(e.pc!==r)return;let t=r.connectionState;Vt(`uppkoppling ${this.nameOf(e.id)}: ${t}`),e.badSince=t===`disconnected`||t===`failed`?e.badSince??Lt():null,this.render()},r}async offer(e){let t=await this.ice;if(this.peers.get(e.id)!==e)return;let n=Math.random().toString(36).slice(2,10),r=this.newPc(e,n,t);e.tx=r.addTransceiver(`audio`,{direction:`sendrecv`}),this.attachMic(e);try{await r.setLocalDescription(await r.createOffer()),e.pc===r&&r.localDescription&&this.signal(e.id,{sid:n,sdp:r.localDescription.toJSON()})}catch(t){e.pc===r&&console.warn(`radio: inbjudan`,t)}}claim(e){let t=e.pc?.getTransceivers().find(e=>e.receiver.track.kind===`audio`);t&&(t.direction=`sendrecv`,e.tx=t,this.attachMic(e))}attachMic(e){let t=this.mic?.getAudioTracks()[0];t&&e.tx&&e.tx.sender.replaceTrack(t).catch(t=>Vt(`mikrofonen kopplas inte in hos ${this.nameOf(e.id)}: ${t.name} – ${t.message}`))}onSignal(e,t){if(!this.enabled)return;let n=this.peers.get(e)??this.addPeer(e);n.queue=n.queue.then(()=>this.handle(n,t)).catch(e=>console.warn(`radio:`,e))}async handle(e,t){if(this.peers.get(e.id)===e){if(t.restart){if(!e.offerer||t.have&&t.have===e.sid||e.pc?.signalingState===`have-local-offer`&&Lt()-e.since<4e3)return;await this.offer(e);return}if(t.sdp?.type===`offer`&&t.sid){if(e.offerer)return;let n=await this.ice;(t.sid!==e.sid||!e.pc)&&this.newPc(e,t.sid,n);let r=e.pc;await r.setRemoteDescription(t.sdp),this.claim(e),await r.setLocalDescription(await r.createAnswer()),e.pc===r&&r.localDescription&&this.signal(e.id,{sid:t.sid,sdp:r.localDescription.toJSON()});return}if(t.sdp?.type===`answer`){if(!e.offerer||t.sid!==e.sid||e.pc?.signalingState!==`have-local-offer`)return;await e.pc.setRemoteDescription(t.sdp);return}t.ice&&t.sid===e.sid&&e.pc&&await e.pc.addIceCandidate(t.ice).catch(()=>{})}}getMic(){return this.mic&&this.mic.getAudioTracks().every(e=>e.readyState===`ended`)&&(Vt(`mikrofonen hade stängts – hämtar den igen`),this.mic=null),this.mic?Promise.resolve(this.mic):this.micReq?this.micReq:navigator.mediaDevices?.getUserMedia?(N(),Vt(`mikrofonen frågas efter (ljudläge ${navigator.audioSession?.type??`–`})`),this.micReq=navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}}).then(e=>{Vt(`mikrofonen OK`),this.mic=e;for(let t of e.getAudioTracks())t.enabled=this.talking,t.addEventListener(`ended`,()=>Vt(`mikrofonen stängdes av telefonen`));for(let e of this.peers.values())this.attachMic(e);return e}).catch(e=>(console.warn(`radio: mikrofonen`,e),Vt(`mikrofonen FEL: ${e.name} – ${e.message}`),this.flash(e.name===`NotAllowedError`?i(`Mikrofonen är blockerad – tillåt den för sidan i webbläsaren`,`The microphone is blocked – allow it for this page in the browser`):e.name===`NotFoundError`?i(`Hittar ingen mikrofon`,`No microphone found`):i(`Mikrofonen gick inte att starta (${e.name}) – ladda om sidan och försök igen`,`The microphone couldn’t start (${e.name}) – reload the page and try again`)),null)).finally(()=>this.micReq=null),this.micReq):(this.flash(location.protocol===`https:`?i(`Mikrofonen stöds inte i den här webbläsaren`,`The microphone isn’t supported in this browser`):i(`Mikrofonen kräver en säker sida (https)`,`The microphone requires a secure page (https)`)),Promise.resolve(null))}async press(){if(Vt(this.pressed?`tryck (redan nere)`:`tryck`),this.pressed||!this.enabled||!this.asked)return;this.pressed=!0,P(),this.unlock(),this.render();let e=await this.getMic();if(e&&!this.pressed&&this.flash(i(`Mikrofonen är på – håll inne igen för att prata`,`The microphone is on – hold again to talk`)),!e||!this.pressed){this.pressed=!1,this.render();return}this.setTalking(!0)}release(e=`släpp`){this.unlock(),this.pressed&&(Vt(e),this.pressed=!1,this.talking&&this.setTalking(!1),this.render())}setTalking(e){Vt(e?`SÄNDER`:`sänder inte längre`),this.talking=e;for(let t of this.mic?.getAudioTracks()??[])t.enabled=e;this.st.out({t:`ptt`,on:e}),se(e),navigator.vibrate&&navigator.vibrate(e?18:10),this.applyMute(),this.render(),e&&Rt&&window.setTimeout(()=>void this.logSending(),1500)}async logSending(){let e=this.mic?.getAudioTracks()[0];Vt(`mikrofonspår: ${e?`${e.readyState}, enabled=${e.enabled}, muted=${e.muted}`:`saknas`}`);for(let e of this.peers.values()){if(!e.pc||!e.tx)continue;let t=`?`;try{(await e.pc.getStats()).forEach(e=>{e.type===`outbound-rtp`&&e.kind===`audio`&&(t=String(e.packetsSent??0))})}catch(e){t=`fel (${e.name})`}Vt(`till ${this.nameOf(e.id)}: spår=${e.tx.sender.track?`ja`:`nej`}, riktning=${e.tx.currentDirection??e.tx.direction}, paket=${t}`)}}onPtt(e,t){this.enabled&&t!==this.talkers.has(e)&&(Vt(`${this.nameOf(e)} ${t?`börjar`:`slutar`} prata`),t?this.talkers.add(e):this.talkers.delete(e),!this.talking&&this.speaker&&ce(t),this.render())}applyMute(){for(let e of this.peers.values())e.audio.muted=this.talking||!this.speaker;this.render()}unlock=()=>{P();for(let e of this.peers.values())e.audio.srcObject&&e.audio.paused&&e.audio.play().catch(()=>{})};onKeyDown=e=>{if(e.repeat||e.key.toLowerCase()!==`t`)return;let t=document.activeElement?.tagName;t!==`INPUT`&&t!==`TEXTAREA`&&this.press()};onKeyUp=e=>{e.key.toLowerCase()===`t`&&this.release()};onBlur=()=>this.release(`sidan tappade fokus`);flash(e){this.note=e,clearTimeout(this.noteTimer),this.noteTimer=window.setTimeout(()=>{this.note=``,this.render()},3500),this.render()}nameOf(e){let t=this.roster.find(t=>t.id===e);if(!t)return i(`Någon`,`someone`);if(t.role===`robber`)return`${i(`Rånare`,`Robber`)} ${(t.slot??0)+1}`;let n=this.roster.filter(e=>e.role===`fixer`).map(e=>e.id).sort();return n.length>1?`${i(`Fixare`,`Fixer`)} ${n.indexOf(e)+1}`:i(`Fixaren`,`the Fixer`)}render(){let{pill:e,ptt:t,spk:n,pwr:a,off:o,count:s}=this.ui,c=[...this.peers.values()].filter(e=>e.pc?.connectionState===`connected`),l=c.length,u=this.roster.filter(e=>e.id!==this.st.selfId&&e.radio!==!1).length,d=[this.enabled,this.asked,this.dismissed,this.talking,this.pressed,this.speaker,this.note,l,u,c[0]?.id,[...this.talkers].join(),this.roster.length].join(`|`);if(d===this.lastSig)return;this.lastSig=d,this.ui.ask.hidden=this.asked;for(let e of[t,n,a])e.hidden=!this.enabled||!this.asked;o.hidden=this.enabled||!this.asked||this.dismissed,t.classList.toggle(`on`,this.talking),t.classList.toggle(`wait`,this.pressed&&!this.talking),t.querySelector(`.radio-lbl`).textContent=this.talking?i(`SÄNDER`,`ON AIR`):i(`PRATA`,`TALK`),s.textContent=u?`${l}/${u}`:``,s.classList.toggle(`ok`,u>0&&l===u),n.textContent=this.speaker?`🔈`:`🔇`,n.classList.toggle(`off`,!this.speaker);let f=this.note,p=`note`;!f&&this.talking?(f=l?i(`● Du sänder till ${l===1?this.nameOf(c[0].id):`${l} st`}`,`● Transmitting to ${l===1?this.nameOf(c[0].id):`${l} players`}`):i(`● Ingen annan är uppkopplad än`,`● Nobody else is connected yet`),p=`tx`):!f&&this.talkers.size&&(f=r?`📻 ${Pt([...this.talkers].map(e=>this.nameOf(e)).join(` + `))} ${this.talkers.size>1?`are`:`is`} talking${this.speaker?``:` (sound off)`}`:`📻 ${[...this.talkers].map(e=>this.nameOf(e)).join(` + `)} ${this.speaker?`pratar`:`pratar (ljudet är av)`}`,p=`rx`),e.textContent=f,e.className=`radio-pill ${f?`show ${p}`:``}`}dispose(){this.release(),window.removeEventListener(`keydown`,this.onKeyDown),window.removeEventListener(`keyup`,this.onKeyUp),window.removeEventListener(`blur`,this.onBlur);for(let e of Ft)document.removeEventListener(e,this.unlock,!0);clearInterval(this.watchTimer);for(let e of[...this.peers.keys()])this.removePeer(e);for(let e of this.mic?.getTracks()??[])e.stop();this.el.remove()}},Wt=1e3,Gt=1001,Kt=1002,qt=1003,Jt=1004,Yt=1005,Xt=1006,Zt=1007,Qt=1008,$t=1009,en=1010,tn=1011,nn=1012,rn=1013,an=1014,on=1015,sn=1016,cn=1017,ln=1018,un=1020,dn=35902,fn=35899,pn=1021,mn=1022,hn=1023,gn=1026,_n=1027,vn=1028,yn=1029,bn=1030,xn=1031,Sn=1033,Cn=33776,wn=33777,Tn=33778,En=33779,Dn=35840,On=35841,kn=35842,An=35843,jn=36196,Mn=37492,Nn=37496,Pn=37488,Fn=37489,In=37490,Ln=37491,Rn=37808,zn=37809,Bn=37810,Vn=37811,Hn=37812,Un=37813,Wn=37814,Gn=37815,Kn=37816,qn=37817,Jn=37818,Yn=37819,Xn=37820,Zn=37821,Qn=36492,$n=36494,er=36495,tr=36283,nr=36284,rr=36285,ir=36286,ar=2300,or=2301,sr=2302,cr=2303,lr=2400,ur=2401,dr=2402,fr=3200,pr=`srgb`,mr=`srgb-linear`,hr=`linear`,gr=`srgb`,_r=7680,vr=35044,yr=2e3;function br(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function xr(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Sr(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Cr(){let e=Sr(`canvas`);return e.style.display=`block`,e}var wr={};function Tr(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Er(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function Dr(...e){e=Er(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Or(...e){e=Er(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function kr(...e){let t=e.join(` `);t in wr||(wr[t]=!0,Dr(...e))}function Ar(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var jr={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Mr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Nr=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Pr=1234567,Fr=Math.PI/180,Ir=180/Math.PI;function Lr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nr[e&255]+Nr[e>>8&255]+Nr[e>>16&255]+Nr[e>>24&255]+`-`+Nr[t&255]+Nr[t>>8&255]+`-`+Nr[t>>16&15|64]+Nr[t>>24&255]+`-`+Nr[n&63|128]+Nr[n>>8&255]+`-`+Nr[n>>16&255]+Nr[n>>24&255]+Nr[r&255]+Nr[r>>8&255]+Nr[r>>16&255]+Nr[r>>24&255]).toLowerCase()}function Rr(e,t,n){return Math.max(t,Math.min(n,e))}function zr(e,t){return(e%t+t)%t}function Br(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Vr(e,t,n){return e===t?0:(n-e)/(t-e)}function Hr(e,t,n){return(1-n)*e+n*t}function Ur(e,t,n,r){return Hr(e,t,1-Math.exp(-n*r))}function Wr(e,t=1){return t-Math.abs(zr(e,t*2)-t)}function Gr(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Kr(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function qr(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Jr(e,t){return e+Math.random()*(t-e)}function Yr(e){return e*(.5-Math.random())}function Xr(e){e!==void 0&&(Pr=e);let t=Pr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zr(e){return e*Fr}function Qr(e){return e*Ir}function $r(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function ei(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function ti(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function ni(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:Dr(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function ri(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function ii(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var ai={DEG2RAD:Fr,RAD2DEG:Ir,generateUUID:Lr,clamp:Rr,euclideanModulo:zr,mapLinear:Br,inverseLerp:Vr,lerp:Hr,damp:Ur,pingpong:Wr,smoothstep:Gr,smootherstep:Kr,randInt:qr,randFloat:Jr,randFloatSpread:Yr,seededRandom:Xr,degToRad:Zr,radToDeg:Qr,isPowerOfTwo:$r,ceilPowerOfTwo:ei,floorPowerOfTwo:ti,setQuaternionFromProperEuler:ni,normalize:ii,denormalize:ri},K=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rr(this.x,e.x,t.x),this.y=Rr(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rr(this.x,e,t),this.y=Rr(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Rr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rr(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},oi=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:Dr(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rr(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ci.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ci.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rr(this.x,e.x,t.x),this.y=Rr(this.y,e.y,t.y),this.z=Rr(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rr(this.x,e,t),this.y=Rr(this.y,e,t),this.z=Rr(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Rr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return si.copy(this).projectOnVector(e),this.sub(si)}reflect(e){return this.sub(si.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rr(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},si=new q,ci=new oi,li=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return kr(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(ui.makeScale(e,t)),this}rotate(e){return kr(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(ui.makeRotation(-e)),this}translate(e,t){return kr(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(ui.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ui=new li,di=new li().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fi=new li().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pi(){let e={enabled:!0,workingColorSpace:mr,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=hi(e.r),e.g=hi(e.g),e.b=hi(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=gi(e.r),e.g=gi(e.g),e.b=gi(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?hr:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return kr(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return kr(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[mr]:{primaries:t,whitePoint:r,transfer:hr,toXYZ:di,fromXYZ:fi,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:pr},outputColorSpaceConfig:{drawingBufferColorSpace:pr}},[pr]:{primaries:t,whitePoint:r,transfer:gr,toXYZ:di,fromXYZ:fi,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:pr}}}),e}var mi=pi();function hi(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function gi(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var _i,vi=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_i===void 0&&(_i=Sr(`canvas`)),_i.width=e.width,_i.height=e.height;let t=_i.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=_i}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Sr(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=hi(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(hi(t[e]/255)*255):t[e]=hi(t[e]);return{data:t,width:e.width,height:e.height}}return Dr(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},yi=0,bi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yi++}),this.uuid=Lr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(xi(r[t].image)):e.push(xi(r[t]))}else e=xi(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function xi(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?vi.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Dr(`Texture: Unable to serialize Texture.`),{})}var Si=0,Ci=new q,wi=class e extends Mr{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Gt,i=Gt,a=Xt,o=Qt,s=hn,c=$t,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Si++}),this.uuid=Lr(),this.name=``,this.source=new bi(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new li,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ci).x}get height(){return this.source.getSize(Ci).y}get depth(){return this.source.getSize(Ci).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Dr(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Dr(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wt:e.x-=Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case Kt:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Wt:e.y-=Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case Kt:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wi.DEFAULT_IMAGE=null,wi.DEFAULT_MAPPING=300,wi.DEFAULT_ANISOTROPY=1;var Ti=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rr(this.x,e.x,t.x),this.y=Rr(this.y,e.y,t.y),this.z=Rr(this.z,e.z,t.z),this.w=Rr(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rr(this.x,e,t),this.y=Rr(this.y,e,t),this.z=Rr(this.z,e,t),this.w=Rr(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Rr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ei=class extends Mr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ti(0,0,e,t),this.scissorTest=!1,this.viewport=new Ti(0,0,e,t),this.textures=[];let r=new wi({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new bi(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Di=class extends Ei{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Oi=class extends wi{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ki=class extends wi{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Ai=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/ji.setFromMatrixColumn(e,0).length(),i=1/ji.setFromMatrixColumn(e,1).length(),a=1/ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ni,e,Pi)}lookAt(e,t,n){let r=this.elements;return Li.subVectors(e,t),Li.lengthSq()===0&&(Li.z=1),Li.normalize(),Fi.crossVectors(n,Li),Fi.lengthSq()===0&&(Math.abs(n.z)===1?Li.x+=1e-4:Li.z+=1e-4,Li.normalize(),Fi.crossVectors(n,Li)),Fi.normalize(),Ii.crossVectors(Li,Fi),r[0]=Fi.x,r[4]=Ii.x,r[8]=Li.x,r[1]=Fi.y,r[5]=Ii.y,r[9]=Li.y,r[2]=Fi.z,r[6]=Ii.z,r[10]=Li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],ee=r[6],A=r[10],te=r[14],j=r[3],M=r[7],N=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*j,i[4]=a*S+o*E+s*ee+c*M,i[8]=a*C+o*D+s*A+c*N,i[12]=a*w+o*O+s*te+c*P,i[1]=l*x+u*T+d*k+f*j,i[5]=l*S+u*E+d*ee+f*M,i[9]=l*C+u*D+d*A+f*N,i[13]=l*w+u*O+d*te+f*P,i[2]=p*x+m*T+h*k+g*j,i[6]=p*S+m*E+h*ee+g*M,i[10]=p*C+m*D+h*A+g*N,i[14]=p*w+m*O+h*te+g*P,i[3]=_*x+v*T+y*k+b*j,i[7]=_*S+v*E+y*ee+b*M,i[11]=_*C+v*D+y*A+b*N,i[15]=_*w+v*O+y*te+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let ee=1/k;return e[0]=(o*O-s*D+c*E)*ee,e[1]=(r*D-n*O-i*E)*ee,e[2]=(m*S-h*x+g*b)*ee,e[3]=(d*x-u*S-f*b)*ee,e[4]=(s*T-a*O-c*w)*ee,e[5]=(t*O-r*T+i*w)*ee,e[6]=(h*y-p*S-g*v)*ee,e[7]=(l*S-d*y+f*v)*ee,e[8]=(a*D-o*T+c*C)*ee,e[9]=(n*T-t*D-i*C)*ee,e[10]=(p*x-m*y+g*_)*ee,e[11]=(u*y-l*x-f*_)*ee,e[12]=(o*w-a*E-s*C)*ee,e[13]=(t*E-n*w+r*C)*ee,e[14]=(m*v-p*b-h*_)*ee,e[15]=(l*b-u*v+d*_)*ee,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=ji.set(r[0],r[1],r[2]).length(),o=ji.set(r[4],r[5],r[6]).length(),s=ji.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Mi.copy(this);let c=1/a,l=1/o,u=1/s;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=l,Mi.elements[5]*=l,Mi.elements[6]*=l,Mi.elements[8]*=u,Mi.elements[9]*=u,Mi.elements[10]*=u,t.setFromRotationMatrix(Mi),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=yr,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=yr,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ji=new q,Mi=new Ai,Ni=new q(0,0,0),Pi=new q(1,1,1),Fi=new q,Ii=new q,Li=new q,Ri=new Ai,zi=new oi,Bi=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Rr(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Rr(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Rr(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Rr(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Rr(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Rr(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:Dr(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ri.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ri,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zi.setFromEuler(this),this.setFromQuaternion(zi,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bi.DEFAULT_ORDER=`XYZ`;var Vi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Hi=0,Ui=new q,Wi=new oi,Gi=new Ai,Ki=new q,qi=new q,Ji=new q,Yi=new oi,Xi=new q(1,0,0),Zi=new q(0,1,0),Qi=new q(0,0,1),$i={type:`added`},ea={type:`removed`},ta={type:`childadded`,child:null},na={type:`childremoved`,child:null},ra=class e extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hi++}),this.uuid=Lr(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new q,n=new Bi,r=new oi,i=new q(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ai},normalMatrix:{value:new li}}),this.matrix=new Ai,this.matrixWorld=new Ai,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(Xi,e)}rotateY(e){return this.rotateOnAxis(Zi,e)}rotateZ(e){return this.rotateOnAxis(Qi,e)}translateOnAxis(e,t){return Ui.copy(e).applyQuaternion(this.quaternion),this.position.add(Ui.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xi,e)}translateY(e){return this.translateOnAxis(Zi,e)}translateZ(e){return this.translateOnAxis(Qi,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ki.copy(e):Ki.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(qi,Ki,this.up):Gi.lookAt(Ki,qi,this.up),this.quaternion.setFromRotationMatrix(Gi),r&&(Gi.extractRotation(r.matrixWorld),Wi.setFromRotationMatrix(Gi),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(Or(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($i),ta.child=e,this.dispatchEvent(ta),ta.child=null):Or(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ea),na.child=e,this.dispatchEvent(na),na.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($i),ta.child=e,this.dispatchEvent(ta),ta.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,e,Ji),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,Yi,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};ra.DEFAULT_UP=new q(0,1,0),ra.DEFAULT_MATRIX_AUTO_UPDATE=!0,ra.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var J=class extends ra{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ia={type:`move`},aa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new J,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new J,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new J,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ia)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new J;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},oa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sa={h:0,s:0,l:0},ca={h:0,s:0,l:0};function la(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var ua=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mi.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=mi.workingColorSpace){return this.r=e,this.g=t,this.b=n,mi.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=mi.workingColorSpace){if(e=zr(e,1),t=Rr(t,0,1),n=Rr(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=la(i,r,e+1/3),this.g=la(i,r,e),this.b=la(i,r,e-1/3)}return mi.colorSpaceToWorking(this,r),this}setStyle(e,t=pr){function n(t){t!==void 0&&parseFloat(t)<1&&Dr(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:Dr(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);Dr(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pr){let n=oa[e.toLowerCase()];return n===void 0?Dr(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pr){return mi.workingToColorSpace(da.copy(this),e),Math.round(Rr(da.r*255,0,255))*65536+Math.round(Rr(da.g*255,0,255))*256+Math.round(Rr(da.b*255,0,255))}getHexString(e=pr){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mi.workingColorSpace){mi.workingToColorSpace(da.copy(this),t);let n=da.r,r=da.g,i=da.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=mi.workingColorSpace){return mi.workingToColorSpace(da.copy(this),t),e.r=da.r,e.g=da.g,e.b=da.b,e}getStyle(e=pr){mi.workingToColorSpace(da.copy(this),e);let t=da.r,n=da.g,r=da.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(sa),this.setHSL(sa.h+e,sa.s+t,sa.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(sa),e.getHSL(ca);let n=Hr(sa.h,ca.h,t),r=Hr(sa.s,ca.s,t),i=Hr(sa.l,ca.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},da=new ua;ua.NAMES=oa;var fa=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new ua(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},pa=class extends ra{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ma=new q,ha=new q,ga=new q,_a=new q,va=new q,ya=new q,ba=new q,xa=new q,Sa=new q,Ca=new q,wa=new Ti,Ta=new Ti,Ea=new Ti,Da=class e{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ma.subVectors(e,t),r.cross(ma);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){ma.subVectors(r,t),ha.subVectors(n,t),ga.subVectors(e,t);let a=ma.dot(ma),o=ma.dot(ha),s=ma.dot(ga),c=ha.dot(ha),l=ha.dot(ga),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,_a)!==null&&_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,_a)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,_a.x),s.addScaledVector(a,_a.y),s.addScaledVector(o,_a.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return wa.setScalar(0),Ta.setScalar(0),Ea.setScalar(0),wa.fromBufferAttribute(e,t),Ta.fromBufferAttribute(e,n),Ea.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(wa,i.x),a.addScaledVector(Ta,i.y),a.addScaledVector(Ea,i.z),a}static isFrontFacing(e,t,n,r){return ma.subVectors(n,t),ha.subVectors(e,t),ma.cross(ha).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ma.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),ma.cross(ha).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;va.subVectors(r,n),ya.subVectors(i,n),xa.subVectors(e,n);let s=va.dot(xa),c=ya.dot(xa);if(s<=0&&c<=0)return t.copy(n);Sa.subVectors(e,r);let l=va.dot(Sa),u=ya.dot(Sa);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(va,a);Ca.subVectors(e,i);let f=va.dot(Ca),p=ya.dot(Ca);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(ya,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return ba.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(ba,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(va,a).addScaledVector(ya,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Oa=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Aa.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Aa.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Aa.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Aa):Aa.fromBufferAttribute(r,t),Aa.applyMatrix4(e.matrixWorld),this.expandByPoint(Aa);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),ja.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Aa),Aa.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ra),za.subVectors(this.max,Ra),Ma.subVectors(e.a,Ra),Na.subVectors(e.b,Ra),Pa.subVectors(e.c,Ra),Fa.subVectors(Na,Ma),Ia.subVectors(Pa,Na),La.subVectors(Ma,Pa);let t=[0,-Fa.z,Fa.y,0,-Ia.z,Ia.y,0,-La.z,La.y,Fa.z,0,-Fa.x,Ia.z,0,-Ia.x,La.z,0,-La.x,-Fa.y,Fa.x,0,-Ia.y,Ia.x,0,-La.y,La.x,0];return!Ha(t,Ma,Na,Pa,za)||(t=[1,0,0,0,1,0,0,0,1],!Ha(t,Ma,Na,Pa,za))?!1:(Ba.crossVectors(Fa,Ia),t=[Ba.x,Ba.y,Ba.z],Ha(t,Ma,Na,Pa,za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Aa).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Aa).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ka[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ka[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ka[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ka[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ka[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ka[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ka[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ka[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ka),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ka=[new q,new q,new q,new q,new q,new q,new q,new q],Aa=new q,ja=new Oa,Ma=new q,Na=new q,Pa=new q,Fa=new q,Ia=new q,La=new q,Ra=new q,za=new q,Ba=new q,Va=new q;function Ha(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Va.fromArray(e,a);let o=i.x*Math.abs(Va.x)+i.y*Math.abs(Va.y)+i.z*Math.abs(Va.z),s=t.dot(Va),c=n.dot(Va),l=r.dot(Va);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Ua=new q,Wa=new K,Ga=0,Ka=class extends Mr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ga++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=vr,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wa.fromBufferAttribute(this,t),Wa.applyMatrix3(e),this.setXY(t,Wa.x,Wa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ua.fromBufferAttribute(this,t),Ua.applyMatrix3(e),this.setXYZ(t,Ua.x,Ua.y,Ua.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ua.fromBufferAttribute(this,t),Ua.applyMatrix4(e),this.setXYZ(t,Ua.x,Ua.y,Ua.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ua.fromBufferAttribute(this,t),Ua.applyNormalMatrix(e),this.setXYZ(t,Ua.x,Ua.y,Ua.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ua.fromBufferAttribute(this,t),Ua.transformDirection(e),this.setXYZ(t,Ua.x,Ua.y,Ua.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ii(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ii(t,this.array),n=ii(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ii(t,this.array),n=ii(n,this.array),r=ii(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=ii(t,this.array),n=ii(n,this.array),r=ii(r,this.array),i=ii(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},qa=class extends Ka{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Ja=class extends Ka{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ya=class extends Ka{constructor(e,t,n){super(new Float32Array(e),t,n)}},Xa=new Oa,Za=new q,Qa=new q,$a=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Xa.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Za.subVectors(e,this.center);let t=Za.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Za,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Za.copy(e.center).add(Qa)),this.expandByPoint(Za.copy(e.center).sub(Qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},eo=0,to=new Ai,no=new ra,ro=new q,io=new Oa,ao=new Oa,oo=new q,so=class e extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eo++}),this.uuid=Lr(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(br(e)?Ja:qa)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new li().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return to.makeRotationFromQuaternion(e),this.applyMatrix4(to),this}rotateX(e){return to.makeRotationX(e),this.applyMatrix4(to),this}rotateY(e){return to.makeRotationY(e),this.applyMatrix4(to),this}rotateZ(e){return to.makeRotationZ(e),this.applyMatrix4(to),this}translate(e,t,n){return to.makeTranslation(e,t,n),this.applyMatrix4(to),this}scale(e,t,n){return to.makeScale(e,t,n),this.applyMatrix4(to),this}lookAt(e){return no.lookAt(e),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Ya(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&Dr(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oa);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Or(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];io.setFromBufferAttribute(n),this.morphTargetsRelative?(oo.addVectors(this.boundingBox.min,io.min),this.boundingBox.expandByPoint(oo),oo.addVectors(this.boundingBox.max,io.max),this.boundingBox.expandByPoint(oo)):(this.boundingBox.expandByPoint(io.min),this.boundingBox.expandByPoint(io.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Or(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $a);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Or(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new q,1/0);return}if(e){let n=this.boundingSphere.center;if(io.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ao.setFromBufferAttribute(n),this.morphTargetsRelative?(oo.addVectors(io.min,ao.min),io.expandByPoint(oo),oo.addVectors(io.max,ao.max),io.expandByPoint(oo)):(io.expandByPoint(ao.min),io.expandByPoint(ao.max))}io.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)oo.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(oo));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)oo.fromBufferAttribute(a,t),o&&(ro.fromBufferAttribute(e,t),oo.add(ro)),r=Math.max(r,n.distanceToSquared(oo))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Or(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Or(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Ka(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new q,s[e]=new q;let c=new q,l=new q,u=new q,d=new K,f=new K,p=new K,m=new q,h=new q;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new q,y=new q,b=new q,x=new q;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Ka(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new q,i=new q,a=new q,o=new q,s=new q,c=new q,l=new q,u=new q;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)oo.fromBufferAttribute(e,t),oo.normalize(),e.setXYZ(t,oo.x,oo.y,oo.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Ka(a,r,i)}if(this.index===null)return Dr(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},co=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=vr,this.updateRanges=[],this.version=0,this.uuid=Lr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Lr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Lr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},lo=new q,uo=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)lo.fromBufferAttribute(this,t),lo.applyMatrix4(e),this.setXYZ(t,lo.x,lo.y,lo.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lo.fromBufferAttribute(this,t),lo.applyNormalMatrix(e),this.setXYZ(t,lo.x,lo.y,lo.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lo.fromBufferAttribute(this,t),lo.transformDirection(e),this.setXYZ(t,lo.x,lo.y,lo.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ii(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ii(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ii(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ii(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ii(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ii(t,this.array),n=ii(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ii(t,this.array),n=ii(n,this.array),r=ii(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ii(t,this.array),n=ii(n,this.array),r=ii(r,this.array),i=ii(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Tr(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Ka(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Tr(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fo=new q,po=new q,mo=new li,ho=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=fo.subVectors(n,t).cross(po.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(fo),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||mo.getNormalMatrix(e),r=this.coplanarPoint(fo).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},go=0,_o=class extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:go++}),this.uuid=Lr(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ua(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Dr(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Dr(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ua().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new ho().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new K().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new K().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},vo=class extends _o{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new ua(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yo,bo=new q,xo=new q,So=new q,Co=new K,wo=new K,To=new Ai,Eo=new q,Do=new q,Oo=new q,ko=new K,Ao=new K,jo=new K,Mo=class extends ra{constructor(e=new vo){if(super(),this.isSprite=!0,this.type=`Sprite`,yo===void 0){yo=new so;let e=new co(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);yo.setIndex([0,1,2,0,2,3]),yo.setAttribute(`position`,new uo(e,3,0,!1)),yo.setAttribute(`uv`,new uo(e,2,3,!1))}this.geometry=yo,this.material=e,this.center=new K(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Or(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),xo.setFromMatrixScale(this.matrixWorld),To.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),So.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xo.multiplyScalar(-So.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;No(Eo.set(-.5,-.5,0),So,a,xo,r,i),No(Do.set(.5,-.5,0),So,a,xo,r,i),No(Oo.set(.5,.5,0),So,a,xo,r,i),ko.set(0,0),Ao.set(1,0),jo.set(1,1);let o=e.ray.intersectTriangle(Eo,Do,Oo,!1,bo);if(o===null&&(No(Do.set(-.5,.5,0),So,a,xo,r,i),Ao.set(0,1),o=e.ray.intersectTriangle(Eo,Oo,Do,!1,bo),o===null))return;let s=e.ray.origin.distanceTo(bo);s<e.near||s>e.far||t.push({distance:s,point:bo.clone(),uv:Da.getInterpolation(bo,Eo,Do,Oo,ko,Ao,jo,new K),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function No(e,t,n,r,i,a){Co.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?wo.copy(Co):(wo.x=a*Co.x-i*Co.y,wo.y=i*Co.x+a*Co.y),e.copy(t),e.x+=wo.x,e.y+=wo.y,e.applyMatrix4(To)}var Po=new q,Fo=new q,Io=new q,Lo=new q,Ro=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Po)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Po.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Po.copy(this.origin).addScaledVector(this.direction,t),Po.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Fo.copy(e).add(t).multiplyScalar(.5),Io.copy(t).sub(e).normalize(),Lo.copy(this.origin).sub(Fo);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Io),o=Lo.dot(this.direction),s=-Lo.dot(Io),c=Lo.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Fo).addScaledVector(Io,d),f}intersectSphere(e,t){if(e.radius<0)return null;Po.subVectors(e.center,this.origin);let n=Po.dot(this.direction),r=Po.dot(Po)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Po)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,ee,A,te,j;if(y>=b&&y>=x?(w=s,D=u,ee=p,j=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,A=_,te=v):(S=l,C=c,T=f,E=d,O=h,k=m,A=v,te=_)):b>=x?(w=c,D=d,ee=m,j=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,A=v,te=g):(S=s,C=l,T=u,E=f,O=p,k=h,A=g,te=v)):(w=l,D=f,ee=h,j=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,A=g,te=_):(S=c,C=s,T=d,E=u,O=m,k=p,A=_,te=g)),w===0)return null;let M=S/w,N=C/w,P=1/w,ne=T-M*D,re=E-N*D,ie=O-M*ee,ae=k-N*ee,F=A-M*j,I=te-N*j,L=F*ae-I*ie,R=ne*I-re*F,z=ie*re-ae*ne;if(r){if(L<0||R<0||z<0)return null}else if((L<0||R<0||z<0)&&(L>0||R>0||z>0))return null;let oe=L+R+z;if(oe===0)return null;let se=P*(L*D+R*ee+z*j);return(oe>0?se<0:se>0)?null:this.at(se/oe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zo=class extends _o{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new ua(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Bo=new Ai,Vo=new Ro,Ho=new $a,Uo=new q,Wo=new q,Go=new q,Ko=new q,qo=new q,Jo=new q,Yo=new q,Xo=new q,Y=class extends ra{constructor(e=new so,t=new zo){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Jo.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(qo.fromBufferAttribute(s,e),a?Jo.addScaledVector(qo,r):Jo.addScaledVector(qo.sub(t),r))}t.add(Jo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(i),Vo.copy(e.ray).recast(e.near),!(Ho.containsPoint(Vo.origin)===!1&&(Vo.intersectSphere(Ho,Uo)===null||Vo.origin.distanceToSquared(Uo)>(e.far-e.near)**2))&&(Bo.copy(i).invert(),Vo.copy(e.ray).applyMatrix4(Bo),(n.boundingBox===null||Vo.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Vo)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Qo(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Qo(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Qo(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Qo(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Zo(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Xo.copy(s),Xo.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Xo);return l<n.near||l>n.far?null:{distance:l,point:Xo.clone(),object:e}}function Qo(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Wo),e.getVertexPosition(c,Go),e.getVertexPosition(l,Ko);let u=Zo(e,t,n,r,Wo,Go,Ko,Yo);if(u){let e=new q;Da.getBarycoord(Yo,Wo,Go,Ko,e),i&&(u.uv=Da.getInterpolatedAttribute(i,s,c,l,e,new K)),a&&(u.uv1=Da.getInterpolatedAttribute(a,s,c,l,e,new K)),o&&(u.normal=Da.getInterpolatedAttribute(o,s,c,l,e,new q),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new q,materialIndex:0};Da.getNormal(Wo,Go,Ko,t.normal),u.face=t,u.barycoord=e}return u}var $o=class extends wi{constructor(e=null,t=1,n=1,r,i,a,o,s,c=qt,l=qt,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},es=class extends Ka{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ts=new Ai,ns=new Ai,rs=[],is=new Oa,as=new Ai,os=new Y,ss=new $a,cs=class extends Y{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new es(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,as)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Oa),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ts),is.copy(e.boundingBox).applyMatrix4(ts),this.boundingBox.union(is)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $a),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ts),ss.copy(e.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(ss)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(os.geometry=this.geometry,os.material=this.material,os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ss.copy(this.boundingSphere),ss.applyMatrix4(n),e.ray.intersectsSphere(ss)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ts),ns.multiplyMatrices(n,ts),os.matrixWorld=ns,os.raycast(e,rs);for(let e=0,n=rs.length;e<n;e++){let n=rs[e];n.instanceId=i,n.object=this,t.push(n)}rs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new es(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new $o(new Float32Array(r*this.count),r,this.count,vn,on));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ls=new $a,us=new K(.5,.5),ds=new q,fs=class{constructor(e=new ho,t=new ho,n=new ho,r=new ho,i=new ho,a=new ho){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yr,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){return ls.center.set(0,0,0),ls.radius=.7071067811865476+us.distanceTo(e.center),ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ds.x=r.normal.x>0?e.max.x:e.min.x,ds.y=r.normal.y>0?e.max.y:e.min.y,ds.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ds)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ps=class extends _o{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new ua(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ms=new Ai,hs=new Ro,gs=new $a,_s=new q,vs=class extends ra{constructor(e=new so,t=new ps){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(r),gs.radius+=i,e.ray.intersectsSphere(gs)===!1)return;ms.copy(r).invert(),hs.copy(e.ray).applyMatrix4(ms);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);_s.fromBufferAttribute(l,n),ys(_s,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)_s.fromBufferAttribute(l,a),ys(_s,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ys(e,t,n,r,i,a,o){let s=hs.distanceSqToPoint(e);if(s<n){let n=new q;hs.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var bs=class extends wi{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},xs=class extends wi{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ss=class extends wi{constructor(e,t,n=an,r,i,a,o=qt,s=qt,c,l=gn,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Cs=class extends Ss{constructor(e,t=an,n=301,r,i,a=qt,o=qt,s,c=gn){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ws=class extends wi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ts=class e extends so{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Ya(c,3)),this.setAttribute(`normal`,new Ya(l,3)),this.setAttribute(`uv`,new Ya(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new q;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Es=class e extends so{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new q,g=new q;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new Ya(o,3)),this.setAttribute(`normal`,new Ya(s,3)),this.setAttribute(`uv`,new Ya(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ds=class e extends so{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new q,l=new K;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Ya(a,3)),this.setAttribute(`normal`,new Ya(o,3)),this.setAttribute(`uv`,new Ya(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Os=class e extends so{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Ya(u,3)),this.setAttribute(`normal`,new Ya(d,3)),this.setAttribute(`uv`,new Ya(f,2));function _(){let a=new q,_=new q,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new K,m=new q,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ks=class e extends Os{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},As=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Dr(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new K:new q);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new q,r=[],i=[],a=[],o=new q,s=new Ai;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new q)}i[0]=new q,a[0]=new q;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(Rr(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(Rr(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},js=class extends As{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new K){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ms=class extends js{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Ns(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Ps=new q,Fs=new q,Is=new Ns,Ls=new Ns,Rs=new Ns,zs=class extends As{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new q){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Fs.subVectors(r[0],r[1]).add(r[0]),c=Fs);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Ps.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Ps),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Is.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Ls.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Rs.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Is.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Ls.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Rs.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Is.calc(s),Ls.calc(s),Rs.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new q().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Bs(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Vs(e,t){let n=1-e;return n*n*t}function Hs(e,t){return 2*(1-e)*e*t}function Us(e,t){return e*e*t}function Ws(e,t,n,r){return Vs(e,t)+Hs(e,n)+Us(e,r)}function Gs(e,t){let n=1-e;return n*n*n*t}function Ks(e,t){let n=1-e;return 3*n*n*e*t}function qs(e,t){return 3*(1-e)*e*e*t}function Js(e,t){return e*e*e*t}function Ys(e,t,n,r,i){return Gs(e,t)+Ks(e,n)+qs(e,r)+Js(e,i)}var Xs=class extends As{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ys(e,r.x,i.x,a.x,o.x),Ys(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zs=class extends As{constructor(e=new q,t=new q,n=new q,r=new q){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ys(e,r.x,i.x,a.x,o.x),Ys(e,r.y,i.y,a.y,o.y),Ys(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qs=class extends As{constructor(e=new K,t=new K){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$s=class extends As{constructor(e=new q,t=new q){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ec=class extends As{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Ws(e,r.x,i.x,a.x),Ws(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tc=class extends As{constructor(e=new q,t=new q,n=new q){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Ws(e,r.x,i.x,a.x),Ws(e,r.y,i.y,a.y),Ws(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nc=class extends As{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new K){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Bs(o,s.x,c.x,l.x,u.x),Bs(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new K().fromArray(n))}return this}},rc=Object.freeze({__proto__:null,ArcCurve:Ms,CatmullRomCurve3:zs,CubicBezierCurve:Xs,CubicBezierCurve3:Zs,EllipseCurve:js,LineCurve:Qs,LineCurve3:$s,QuadraticBezierCurve:ec,QuadraticBezierCurve3:tc,SplineCurve:nc}),ic=class extends As{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new rc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new rc[n.type]().fromJSON(n))}return this}},ac=class extends ic{constructor(e){super(),this.type=`Path`,this.currentPoint=new K,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Qs(this.currentPoint.clone(),new K(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new ec(this.currentPoint.clone(),new K(e,t),new K(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Xs(this.currentPoint.clone(),new K(e,t),new K(n,r),new K(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new nc([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new js(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},oc=class extends ac{constructor(e){super(e),this.uuid=Lr(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new ac().fromJSON(n))}return this}};function sc(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=cc(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=hc(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return uc(a,o,n,s,c,l,0),o}function cc(e,t,n,r,i){let a;if(i===zc(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Ic(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Ic(i/r|0,e[i],e[i+1],a);return a&&Oc(a,a.next)&&(Lc(a),a=a.next),a}function lc(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Oc(n,n.next)||Dc(n.prev,n,n.next)===0)){if(Lc(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function uc(e,t,n,r,i,a,o){if(!e)return;!o&&a&&bc(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?fc(e,r,i,a):dc(e)){t.push(c.i,e.i,l.i),Lc(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=pc(lc(e),t),uc(e,t,n,r,i,a,2)):o===2&&mc(e,t,n,r,i,a):uc(lc(e),t,n,r,i,a,1);break}}}function dc(e){let t=e.prev,n=e,r=e.next;if(Dc(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Tc(i,s,a,c,o,l,m.x,m.y)&&Dc(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function fc(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Dc(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Sc(p,m,t,n,r),v=Sc(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Tc(s,u,c,d,l,f,y.x,y.y)&&Dc(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Tc(s,u,c,d,l,f,b.x,b.y)&&Dc(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Tc(s,u,c,d,l,f,y.x,y.y)&&Dc(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Tc(s,u,c,d,l,f,b.x,b.y)&&Dc(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function pc(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Oc(r,i)&&kc(r,n,n.next,i)&&Nc(r,i)&&Nc(i,r)&&(t.push(r.i,n.i,i.i),Lc(n),Lc(n.next),n=e=i),n=n.next}while(n!==e);return lc(n)}function mc(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Ec(o,e)){let s=Fc(o,e);o=lc(o,o.next),s=lc(s,s.next),uc(o,t,n,r,i,a,0),uc(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function hc(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=cc(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Cc(o))}i.sort(gc);for(let e=0;e<i.length;e++)n=_c(i[e],n);return n}function gc(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function _c(e,t){let n=vc(e,t);if(!n)return t;let r=Fc(n,e);return lc(r,r.next),lc(n,n.next)}function vc(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Oc(e,n))return n;do{if(Oc(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&wc(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Nc(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&yc(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function yc(e,t){return Dc(e.prev,e,t.prev)<0&&Dc(t.next,e,e.next)<0}function bc(e,t,n,r){let i=e;do i.z===0&&(i.z=Sc(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,xc(i)}function xc(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Sc(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Cc(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function wc(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Tc(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&wc(e,t,n,r,i,a,o,s)}function Ec(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Mc(e,t)&&(Nc(e,t)&&Nc(t,e)&&Pc(e,t)&&(Dc(e.prev,e,t.prev)||Dc(e,t.prev,t))||Oc(e,t)&&Dc(e.prev,e,e.next)>0&&Dc(t.prev,t,t.next)>0)}function Dc(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Oc(e,t){return e.x===t.x&&e.y===t.y}function kc(e,t,n,r){let i=jc(Dc(e,t,n)),a=jc(Dc(e,t,r)),o=jc(Dc(n,r,e)),s=jc(Dc(n,r,t));return!!(i!==a&&o!==s||i===0&&Ac(e,n,t)||a===0&&Ac(e,r,t)||o===0&&Ac(n,e,r)||s===0&&Ac(n,t,r))}function Ac(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function jc(e){return e>0?1:e<0?-1:0}function Mc(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&kc(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Nc(e,t){return Dc(e.prev,e,e.next)<0?Dc(e,t,e.next)>=0&&Dc(e,e.prev,t)>=0:Dc(e,t,e.prev)<0||Dc(e,e.next,t)<0}function Pc(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Fc(e,t){let n=Rc(e.i,e.x,e.y),r=Rc(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Ic(e,t,n,r){let i=Rc(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Lc(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Rc(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function zc(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Bc=class{static triangulate(e,t,n=2){return sc(e,t,n)}},Vc=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Hc(e),Uc(n,e);let a=e.length;t.forEach(Hc);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Uc(n,t[e]);let o=Bc.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Hc(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Uc(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Wc=class e extends so{constructor(e=new oc([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Ya(r,3)),this.setAttribute(`uv`,new Ya(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Gc:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new q,b=new q,x=new q}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Vc.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Vc.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));if(s<=10000000000000001e-36*c*c){e.splice(r,1),n--;continue}t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||Or(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function ee(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new K(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new K(r/a,i/a)}let A=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),A[e]=ee(D[e],D[n],D[r]);let te=[],j,M=A.concat();for(let e=0,t=E;e<t;e++){let t=w[e];j=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),j[e]=ee(t[e],t[r],t[i]);te.push(j),M=M.concat(j)}let N;if(p===0)N=Vc.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],A[t],a);F(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];j=te[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],j[e],a);F(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}N=Vc.triangulateShape(e,t)}let P=N.length,ne=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],M[e],ne):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),F(x.x,x.y,x.z)):F(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],M[t],ne):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),F(x.x,x.y,x.z)):F(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],A[e],r);F(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];j=te[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],j[e],r);_?F(i.x,i.y+g[s-1].y,g[s-1].x+n):F(i.x,i.y,c+n)}}}re(),ie();function re(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<P;e++){let n=N[e];I(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<P;e++){let n=N[e];I(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<P;e++){let t=N[e];I(t[2],t[1],t[0])}for(let e=0;e<P;e++){let t=N[e];I(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ie(){let e=r.length/3,t=0;ae(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ae(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ae(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);L(t+r+n,t+i+n,t+i+a,t+r+a)}}}function F(e,t,n){a.push(e),a.push(t),a.push(n)}function I(e,t,i){R(e),R(t),R(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);z(o[0]),z(o[1]),z(o[2])}function L(e,t,i,a){R(e),R(t),R(a),R(t),R(i),R(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);z(s[0]),z(s[1]),z(s[3]),z(s[1]),z(s[2]),z(s[3])}function R(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function z(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Kc(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new rc[i.type]().fromJSON(i)),new e(r,t.options)}},Gc={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new K(a,o),new K(s,c),new K(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new K(o,1-c),new K(l,1-d),new K(f,1-m),new K(h,1-_)]:[new K(s,1-c),new K(u,1-d),new K(p,1-m),new K(g,1-_)]}};function Kc(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var X=class e extends so{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Ya(p,3)),this.setAttribute(`normal`,new Ya(m,3)),this.setAttribute(`uv`,new Ya(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},qc=class e extends so{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new q,p=new K;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Ya(s,3)),this.setAttribute(`normal`,new Ya(c,3)),this.setAttribute(`uv`,new Ya(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Jc=class e extends so{constructor(e=new oc([new K(0,.5),new K(-.5,-.5),new K(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new Ya(r,3)),this.setAttribute(`normal`,new Ya(i,3)),this.setAttribute(`uv`,new Ya(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;Vc.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];Vc.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=Vc.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Yc(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function Yc(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var Xc=class e extends so{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new q,d=new q,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Ya(p,3)),this.setAttribute(`normal`,new Ya(m,3)),this.setAttribute(`uv`,new Ya(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Zc=class e extends so{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new q,f=new q,p=new q;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Ya(c,3)),this.setAttribute(`normal`,new Ya(l,3)),this.setAttribute(`uv`,new Ya(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Qc=class e extends so{constructor(e=new tc(new q(-1,-1,0),new q(-1,1,0),new q(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new q,s=new q,c=new K,l=new q,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new Ya(u,3)),this.setAttribute(`normal`,new Ya(d,3)),this.setAttribute(`uv`,new Ya(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new rc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function $c(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(tl(i))i.isRenderTargetTexture?(Dr(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(tl(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function el(e){let t={};for(let n=0;n<e.length;n++){let r=$c(e[n]);for(let e in r)t[e]=r[e]}return t}function tl(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function nl(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function rl(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:mi.workingColorSpace}var il={clone:$c,merge:el},al=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ol=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sl=class extends _o{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=al,this.fragmentShader=ol,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$c(e.uniforms),this.uniformsGroups=nl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new ua().setHex(r.value);break;case`v2`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Ti().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new li().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Ai().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},cl=class extends sl{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Z=class extends _o{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new ua(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ua(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ll=class extends Z{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new K(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rr(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ua(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ua(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ua(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},ul=class extends _o{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type=`MeshNormalMaterial`,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},dl=class extends _o{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=fr,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fl=class extends _o{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function pl(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function ml(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var hl=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},gl=class extends hl{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lr,endingEnd:lr}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case ur:i=e,o=2*t-n;break;case dr:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case ur:a=e,s=2*n-t;break;case dr:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},_l=class extends hl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},vl=class extends hl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},yl=class extends hl{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Sl(n,t,g,y,r);i[p]=bl(x,o,_,b,m)}return i}};function bl(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function xl(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Sl(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=bl(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=xl(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Cl=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=pl(t,this.TimeBufferType),this.values=pl(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pl(e.times,Array),values:pl(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),ml(e.settings)&&(n.settings={inTangents:pl(e.settings.inTangents,Array),outTangents:pl(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new yl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ar:t=this.InterpolantFactoryMethodDiscrete;break;case or:t=this.InterpolantFactoryMethodLinear;break;case sr:t=this.InterpolantFactoryMethodSmooth;break;case cr:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return Dr(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ar;case this.InterpolantFactoryMethodLinear:return or;case this.InterpolantFactoryMethodSmooth:return sr;case this.InterpolantFactoryMethodBezier:return cr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;ml(this.settings)&&(wl(this.settings.inTangents,e),wl(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Or(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(Or(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){Or(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){Or(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&xr(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){Or(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===sr,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,ml(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function wl(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Cl.prototype.ValueTypeName=``,Cl.prototype.TimeBufferType=Float32Array,Cl.prototype.ValueBufferType=Float32Array,Cl.prototype.DefaultInterpolation=or;var Tl=class extends Cl{constructor(e,t,n){super(e,t,n)}};Tl.prototype.ValueTypeName=`bool`,Tl.prototype.ValueBufferType=Array,Tl.prototype.DefaultInterpolation=ar,Tl.prototype.InterpolantFactoryMethodLinear=void 0,Tl.prototype.InterpolantFactoryMethodSmooth=void 0;var El=class extends Cl{constructor(e,t,n,r){super(e,t,n,r)}};El.prototype.ValueTypeName=`color`;var Dl=class extends Cl{constructor(e,t,n,r){super(e,t,n,r)}};Dl.prototype.ValueTypeName=`number`;var Ol=class extends hl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)oi.slerpFlat(i,0,a,c-o,a,c,s);return i}},kl=class extends Cl{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ol(this.times,this.values,this.getValueSize(),e)}};kl.prototype.ValueTypeName=`quaternion`,kl.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends Cl{constructor(e,t,n){super(e,t,n)}};Al.prototype.ValueTypeName=`string`,Al.prototype.ValueBufferType=Array,Al.prototype.DefaultInterpolation=ar,Al.prototype.InterpolantFactoryMethodLinear=void 0,Al.prototype.InterpolantFactoryMethodSmooth=void 0;var jl=class extends Cl{constructor(e,t,n,r){super(e,t,n,r)}};jl.prototype.ValueTypeName=`vector`;var Ml=class extends ra{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new ua(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Nl=class extends Ml{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(ra.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ua(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Pl=new Ai,Fl=new q,Il=new q,Ll=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.mapType=$t,this.map=null,this.mapPass=null,this.matrix=new Ai,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fs,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new Ti(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Fl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fl),Il.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Il),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Pl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Pl,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Pl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Rl=new q,zl=new oi,Bl=new q,Vl=class extends ra{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Ai,this.projectionMatrix=new Ai,this.projectionMatrixInverse=new Ai,this.coordinateSystem=yr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rl,zl,Bl),Bl.x===1&&Bl.y===1&&Bl.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rl,zl,Bl.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Rl,zl,Bl),Bl.x===1&&Bl.y===1&&Bl.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rl,zl,Bl.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hl=new q,Ul=new K,Wl=new K,Gl=class extends Vl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hl.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hl.x,Hl.y).multiplyScalar(-e/Hl.z),Hl.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hl.x,Hl.y).multiplyScalar(-e/Hl.z)}getViewSize(e,t){return this.getViewBounds(e,Ul,Wl),t.subVectors(Wl,Ul)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Kl=class extends Ll{constructor(){super(new Gl(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ir*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ql=class extends Ml{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(ra.DEFAULT_UP),this.updateMatrix(),this.target=new ra,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new Kl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Jl=class extends Ll{constructor(){super(new Gl(90,1,.5,500)),this.isPointLightShadow=!0}},Yl=class extends Ml{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Jl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Xl=class extends Vl{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zl=class extends so{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Ql=-90,$l=1,eu=class extends ra{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Gl(Ql,$l,e,t);r.layers=this.layers,this.add(r);let i=new Gl(Ql,$l,e,t);i.layers=this.layers,this.add(i);let a=new Gl(Ql,$l,e,t);a.layers=this.layers,this.add(a);let o=new Gl(Ql,$l,e,t);o.layers=this.layers,this.add(o);let s=new Gl(Ql,$l,e,t);s.layers=this.layers,this.add(s);let c=new Gl(Ql,$l,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},tu=class extends Gl{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},nu=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=ru.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function ru(){this._document.hidden===!1&&this.reset()}var iu=`\\[\\]\\.:\\/`,au=RegExp(`[\\[\\]\\.:\\/]`,`g`),ou=`[^\\[\\]\\.:\\/]`,su=`[^`+iu.replace(`\\.`,``)+`]`,cu=`((?:WC+[\\/:])*)`.replace(`WC`,ou),lu=`(WCOD+)?`.replace(`WCOD`,su),uu=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ou),du=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ou),fu=RegExp(`^`+cu+lu+uu+du+`$`),pu=[`material`,`materials`,`bones`,`map`],mu=class{constructor(e,t,n){let r=n||hu.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},hu=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(au,``)}static parseTrackName(e){let t=fu.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);pu.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Dr(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){Or(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){Or(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){Or(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){Or(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){Or(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){Or(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){Or(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;Or(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){Or(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){Or(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};hu.Composite=mu,hu.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},hu.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},hu.prototype.GetterByBindingType=[hu.prototype._getValue_direct,hu.prototype._getValue_array,hu.prototype._getValue_arrayElement,hu.prototype._getValue_toArray],hu.prototype.SetterByBindingTypeAndVersioning=[[hu.prototype._setValue_direct,hu.prototype._setValue_direct_setNeedsUpdate,hu.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[hu.prototype._setValue_array,hu.prototype._setValue_array_setNeedsUpdate,hu.prototype._setValue_array_setMatrixWorldNeedsUpdate],[hu.prototype._setValue_arrayElement,hu.prototype._setValue_arrayElement_setNeedsUpdate,hu.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[hu.prototype._setValue_fromArray,hu.prototype._setValue_fromArray_setNeedsUpdate,hu.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gu=new Ai,_u=class{constructor(e,t,n=0,r=1/0){this.ray=new Ro(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Vi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Or(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return gu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gu),this}intersectObject(e,t=!0,n=[]){return yu(e,this,n,t),n.sort(vu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)yu(e[r],this,n,t);return n.sort(vu),n}};function vu(e,t){return e.distance-t.distance}function yu(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)yu(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function bu(e,t,n,r){let i=xu(r);switch(n){case pn:return e*t;case vn:return e*t/i.components*i.byteLength;case yn:return e*t/i.components*i.byteLength;case bn:return e*t*2/i.components*i.byteLength;case xn:return e*t*2/i.components*i.byteLength;case mn:return e*t*3/i.components*i.byteLength;case hn:return e*t*4/i.components*i.byteLength;case Sn:return e*t*4/i.components*i.byteLength;case Cn:case wn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Tn:case En:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case On:case An:return Math.max(e,16)*Math.max(t,8)/4;case Dn:case kn:return Math.max(e,8)*Math.max(t,8)/2;case jn:case Mn:case Pn:case Fn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Nn:case In:case Ln:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Rn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case zn:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Bn:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Vn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Hn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Un:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Wn:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Gn:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Kn:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case qn:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Jn:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Yn:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Xn:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Zn:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Qn:case $n:case er:return Math.ceil(e/4)*Math.ceil(t/4)*16;case tr:case nr:return Math.ceil(e/4)*Math.ceil(t/4)*8;case rr:case ir:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function xu(e){switch(e){case $t:case en:return{byteLength:1,components:1};case nn:case tn:case sn:return{byteLength:2,components:1};case cn:case ln:return{byteLength:2,components:4};case an:case rn:case on:return{byteLength:4,components:1};case dn:case fn:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?Dr(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Su(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Cu(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var wu={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Q={common:{diffuse:{value:new ua(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new li},alphaMap:{value:null},alphaMapTransform:{value:new li},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new li}},envmap:{envMap:{value:null},envMapRotation:{value:new li},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new li}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new li}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new li},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new li},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new li},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new li}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new li}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new li}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ua(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new ua(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new li},alphaTest:{value:0},uvTransform:{value:new li}},sprite:{diffuse:{value:new ua(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new li},alphaMap:{value:null},alphaMapTransform:{value:new li},alphaTest:{value:0}}},Tu={basic:{uniforms:el([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:wu.meshbasic_vert,fragmentShader:wu.meshbasic_frag},lambert:{uniforms:el([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new ua(0)},envMapIntensity:{value:1}}]),vertexShader:wu.meshlambert_vert,fragmentShader:wu.meshlambert_frag},phong:{uniforms:el([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new ua(0)},specular:{value:new ua(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wu.meshphong_vert,fragmentShader:wu.meshphong_frag},standard:{uniforms:el([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new ua(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wu.meshphysical_vert,fragmentShader:wu.meshphysical_frag},toon:{uniforms:el([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new ua(0)}}]),vertexShader:wu.meshtoon_vert,fragmentShader:wu.meshtoon_frag},matcap:{uniforms:el([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:wu.meshmatcap_vert,fragmentShader:wu.meshmatcap_frag},points:{uniforms:el([Q.points,Q.fog]),vertexShader:wu.points_vert,fragmentShader:wu.points_frag},dashed:{uniforms:el([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wu.linedashed_vert,fragmentShader:wu.linedashed_frag},depth:{uniforms:el([Q.common,Q.displacementmap]),vertexShader:wu.depth_vert,fragmentShader:wu.depth_frag},normal:{uniforms:el([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:wu.meshnormal_vert,fragmentShader:wu.meshnormal_frag},sprite:{uniforms:el([Q.sprite,Q.fog]),vertexShader:wu.sprite_vert,fragmentShader:wu.sprite_frag},background:{uniforms:{uvTransform:{value:new li},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wu.background_vert,fragmentShader:wu.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new li}},vertexShader:wu.backgroundCube_vert,fragmentShader:wu.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wu.cube_vert,fragmentShader:wu.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wu.equirect_vert,fragmentShader:wu.equirect_frag},distance:{uniforms:el([Q.common,Q.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wu.distance_vert,fragmentShader:wu.distance_frag},shadow:{uniforms:el([Q.lights,Q.fog,{color:{value:new ua(0)},opacity:{value:1}}]),vertexShader:wu.shadow_vert,fragmentShader:wu.shadow_frag}};Tu.physical={uniforms:el([Tu.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new li},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new li},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new li},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new li},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new li},sheen:{value:0},sheenColor:{value:new ua(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new li},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new li},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new li},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new li},attenuationDistance:{value:0},attenuationColor:{value:new ua(0)},specularColor:{value:new ua(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new li},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new li},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new li}}]),vertexShader:wu.meshphysical_vert,fragmentShader:wu.meshphysical_frag};var Eu={r:0,b:0,g:0},Du=new Ai,Ou=new li;Ou.set(-1,0,0,0,1,0,0,0,1);function ku(e,t,n,r,i,a){let o=new ua(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Y(new Ts(1,1,1),new sl({name:`BackgroundCubeMaterial`,uniforms:$c(Tu.backgroundCube.uniforms),vertexShader:Tu.backgroundCube.vertexShader,fragmentShader:Tu.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Du.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ou),l.material.toneMapped=mi.getTransfer(i.colorSpace)!==gr,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Y(new X(2,2),new sl({name:`BackgroundMaterial`,uniforms:$c(Tu.background.uniforms),vertexShader:Tu.background.vertexShader,fragmentShader:Tu.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=mi.getTransfer(i.colorSpace)!==gr,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Eu,rl(e)),n.buffers.color.setClear(Eu.r,Eu.g,Eu.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Au(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ju(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Mu(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(Dr(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&Dr(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Nu(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ho,s=new li,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Pu=4,Fu=6,Iu=20,Lu=256,Ru=new Xl,zu=new ua,Bu=null,Vu=0,Hu=0,Uu=!1,Wu=new q,Gu=new q,Ku=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Wu}=i;Bu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bu,Vu,Hu),this._renderer.xr.enabled=Uu,e.scissorTest=!1,Yu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:sn,format:hn,colorSpace:mr,depthBuffer:!1},r=Ju(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ju(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=qu(r)),this._blurMaterial=Zu(r,e,t),this._ggxMaterial=Xu(r,e,t)}return r}_compileMaterial(e){let t=new Y(new so,e);this._renderer.compile(t,Ru)}_sceneToCubeUV(e,t,n,r,i){let a=new Gl(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(zu),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Y(new Ts,new zo({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(zu),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Yu(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$u()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qu());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Yu(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ru)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Pu?n-d+Pu:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Yu(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Ru),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Yu(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Ru)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Yu(t,3*l*(r>this._lodMax-Pu?r-this._lodMax+Pu:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Ru)}};function qu(e){let t=[],n=[],r=e,i=e-Pu+1+Fu;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Gu.set(1,r,n):e===1?Gu.set(-n,1,-r):e===2?Gu.set(-n,r,1):e===3?Gu.set(-1,r,-n):e===4?Gu.set(-n,-1,r):Gu.set(n,r,-1),Gu.toArray(l,(e*6+t)*3)}}let u=new so;u.setAttribute(`position`,new Ka(c,3)),u.setAttribute(`outputDirection`,new Ka(l,3)),n.push(new Y(u,null)),r>Pu&&r--}return{lodMeshes:n,sizeLods:t}}function Ju(e,t,n){let r=new Di(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Yu(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Xu(e,t,n){return new sl({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Lu,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ed(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zu(e,t,n){return new sl({name:`SphericalGaussianBlur`,defines:{SAMPLES:Iu,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ed(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qu(){return new sl({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function $u(){return new sl({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ed(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var td=class extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new bs(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ts(5,5,5),i=new sl({name:`CubemapFromEquirect`,uniforms:$c(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Y(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Xt),new eu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function nd(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new td(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Ku(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Ku(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function rd(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&kr(`WebGLRenderer: `+e+` extension not supported.`),t}}}function id(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Ja:qa)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ad(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function od(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Or(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function sd(e,t,n){let r=new WeakMap,i=new Ti;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Oi(h,p,m,u);g.type=on,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new K(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function cd(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var ld={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ud(e,t,n,r,i,a){let o=new Di(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new so;l.setAttribute(`position`,new Ya([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Ya([0,2,0,0,2,0],2));let u=new cl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Y(l,u),f=new Xl(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Di(t,n,{type:sn,depthBuffer:!1,stencilBuffer:!1}),c=new Di(t,n,{type:sn,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},mi.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=ld[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var dd=new wi,fd=new Ss(1,1),pd=new Oi,md=new ki,hd=new bs,gd=[],_d=[],vd=new Float32Array(16),yd=new Float32Array(9),bd=new Float32Array(4);function xd(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=gd[i];if(a===void 0&&(a=new Float32Array(i),gd[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Sd(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Cd(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function wd(e,t){let n=_d[t];n===void 0&&(n=new Int32Array(t),_d[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Td(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ed(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sd(n,t))return;e.uniform2fv(this.addr,t),Cd(n,t)}}function Dd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Sd(n,t))return;e.uniform3fv(this.addr,t),Cd(n,t)}}function Od(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sd(n,t))return;e.uniform4fv(this.addr,t),Cd(n,t)}}function kd(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Sd(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Cd(n,t)}else{if(Sd(n,r))return;bd.set(r),e.uniformMatrix2fv(this.addr,!1,bd),Cd(n,r)}}function Ad(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Sd(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Cd(n,t)}else{if(Sd(n,r))return;yd.set(r),e.uniformMatrix3fv(this.addr,!1,yd),Cd(n,r)}}function jd(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Sd(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Cd(n,t)}else{if(Sd(n,r))return;vd.set(r),e.uniformMatrix4fv(this.addr,!1,vd),Cd(n,r)}}function Md(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Nd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sd(n,t))return;e.uniform2iv(this.addr,t),Cd(n,t)}}function Pd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Sd(n,t))return;e.uniform3iv(this.addr,t),Cd(n,t)}}function Fd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sd(n,t))return;e.uniform4iv(this.addr,t),Cd(n,t)}}function Id(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ld(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sd(n,t))return;e.uniform2uiv(this.addr,t),Cd(n,t)}}function Rd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Sd(n,t))return;e.uniform3uiv(this.addr,t),Cd(n,t)}}function zd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sd(n,t))return;e.uniform4uiv(this.addr,t),Cd(n,t)}}function Bd(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(fd.compareFunction=n.isReversedDepthBuffer()?518:515,a=fd):a=dd,n.setTexture2D(t||a,i)}function Vd(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||md,i)}function Hd(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||hd,i)}function Ud(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||pd,i)}function Wd(e){switch(e){case 5126:return Td;case 35664:return Ed;case 35665:return Dd;case 35666:return Od;case 35674:return kd;case 35675:return Ad;case 35676:return jd;case 5124:case 35670:return Md;case 35667:case 35671:return Nd;case 35668:case 35672:return Pd;case 35669:case 35673:return Fd;case 5125:return Id;case 36294:return Ld;case 36295:return Rd;case 36296:return zd;case 35678:case 36198:case 36298:case 36306:case 35682:return Bd;case 35679:case 36299:case 36307:return Vd;case 35680:case 36300:case 36308:case 36293:return Hd;case 36289:case 36303:case 36311:case 36292:return Ud}}function Gd(e,t){e.uniform1fv(this.addr,t)}function Kd(e,t){let n=xd(t,this.size,2);e.uniform2fv(this.addr,n)}function qd(e,t){let n=xd(t,this.size,3);e.uniform3fv(this.addr,n)}function Jd(e,t){let n=xd(t,this.size,4);e.uniform4fv(this.addr,n)}function Yd(e,t){let n=xd(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Xd(e,t){let n=xd(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Zd(e,t){let n=xd(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Qd(e,t){e.uniform1iv(this.addr,t)}function $d(e,t){e.uniform2iv(this.addr,t)}function ef(e,t){e.uniform3iv(this.addr,t)}function tf(e,t){e.uniform4iv(this.addr,t)}function nf(e,t){e.uniform1uiv(this.addr,t)}function rf(e,t){e.uniform2uiv(this.addr,t)}function af(e,t){e.uniform3uiv(this.addr,t)}function of(e,t){e.uniform4uiv(this.addr,t)}function sf(e,t,n){let r=this.cache,i=t.length,a=wd(n,i);Sd(r,a)||(e.uniform1iv(this.addr,a),Cd(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?fd:dd;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function cf(e,t,n){let r=this.cache,i=t.length,a=wd(n,i);Sd(r,a)||(e.uniform1iv(this.addr,a),Cd(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||md,a[e])}function lf(e,t,n){let r=this.cache,i=t.length,a=wd(n,i);Sd(r,a)||(e.uniform1iv(this.addr,a),Cd(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||hd,a[e])}function uf(e,t,n){let r=this.cache,i=t.length,a=wd(n,i);Sd(r,a)||(e.uniform1iv(this.addr,a),Cd(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||pd,a[e])}function df(e){switch(e){case 5126:return Gd;case 35664:return Kd;case 35665:return qd;case 35666:return Jd;case 35674:return Yd;case 35675:return Xd;case 35676:return Zd;case 5124:case 35670:return Qd;case 35667:case 35671:return $d;case 35668:case 35672:return ef;case 35669:case 35673:return tf;case 5125:return nf;case 36294:return rf;case 36295:return af;case 36296:return of;case 35678:case 36198:case 36298:case 36306:case 35682:return sf;case 35679:case 36299:case 36307:return cf;case 35680:case 36300:case 36308:case 36293:return lf;case 36289:case 36303:case 36311:case 36292:return uf}}var ff=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wd(t.type)}},pf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=df(t.type)}},mf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},hf=/(\w+)(\])?(\[|\.)?/g;function gf(e,t){e.seq.push(t),e.map[t.id]=t}function _f(e,t,n){let r=e.name,i=r.length;for(hf.lastIndex=0;;){let a=hf.exec(r),o=hf.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){gf(n,l===void 0?new ff(s,e,t):new pf(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new mf(s),gf(n,e)),n=e}}}var vf=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);_f(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function yf(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var bf=37297,xf=0;function Sf(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Cf=new li;function wf(e){mi._getMatrix(Cf,mi.workingColorSpace,e);let t=`mat3( ${Cf.elements.map(e=>e.toFixed(4))} )`;switch(mi.getTransfer(e)){case hr:return[t,`LinearTransferOETF`];case gr:return[t,`sRGBTransferOETF`];default:return Dr(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Tf(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Sf(e.getShaderSource(t),r)}return i}function Ef(e,t){let n=wf(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Df={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Of(e,t){let n=Df[t];return n===void 0?(Dr(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var kf=new q;function Af(){return mi.getLuminanceCoefficients(kf),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${kf.x.toFixed(4)}, ${kf.y.toFixed(4)}, ${kf.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function jf(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Pf).join(`
`)}function Mf(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Nf(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Pf(e){return e!==``}function Ff(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function If(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Lf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rf(e){return e.replace(Lf,Bf)}var zf=new Map;function Bf(e,t){let n=wu[t];if(n===void 0){let e=zf.get(t);if(e!==void 0)n=wu[e],Dr(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Rf(n)}var Vf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hf(e){return e.replace(Vf,Uf)}function Uf(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Wf(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Gf={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Kf(e){return Gf[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var qf={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Jf(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:qf[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Yf={302:`ENVMAP_MODE_REFRACTION`};function Xf(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Yf[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Zf={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Qf(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Zf[e.combine]||`ENVMAP_BLENDING_NONE`}function $f(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function ep(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Kf(n),l=Jf(n),u=Xf(n),d=Qf(n),f=$f(n),p=jf(n),m=Mf(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Pf).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Pf).join(`
`),_.length>0&&(_+=`
`)):(g=[Wf(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Pf).join(`
`),_=[Wf(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:wu.tonemapping_pars_fragment,n.toneMapping===0?``:Of(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,wu.colorspace_pars_fragment,Ef(`linearToOutputTexel`,n.outputColorSpace),Af(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Pf).join(`
`)),o=Rf(o),o=Ff(o,n),o=If(o,n),s=Rf(s),s=Ff(s,n),s=If(s,n),o=Hf(o),s=Hf(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=yf(i,i.VERTEX_SHADER,y),S=yf(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Tf(i,x,`vertex`),n=Tf(i,S,`fragment`);Or(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):Dr(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new vf(i,h),T=Nf(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,bf)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xf++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var tp=0,np=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new rp(e),t.set(e,n)),n}},rp=class{constructor(e){this.id=tp++,this.code=e,this.usedTimes=0}};function ip(e){return e===1030||e===37490||e===36285}function ap(e,t,n,r,i,a){let o=new Vi,s=new np,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&Dr(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,ee;if(C){let e=Tu[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,ee=t.id}let A=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),j=h.isInstancedMesh===!0,M=h.isBatchedMesh===!0,N=!!i.map,P=!!i.matcap,ne=!!x,re=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,F=!!i.normalMap,I=!!i.displacementMap,L=!!i.emissiveMap,R=!!i.metalnessMap,z=!!i.roughnessMap,oe=i.anisotropy>0,se=i.clearcoat>0,ce=i.dispersion>0,le=i.retroreflectivity>0,ue=i.iridescence>0,B=i.sheen>0,V=i.transmission>0,de=oe&&!!i.anisotropyMap,fe=se&&!!i.clearcoatMap,pe=se&&!!i.clearcoatNormalMap,me=se&&!!i.clearcoatRoughnessMap,he=ue&&!!i.iridescenceMap,H=ue&&!!i.iridescenceThicknessMap,ge=B&&!!i.sheenColorMap,_e=B&&!!i.sheenRoughnessMap,ve=!!i.specularMap,U=!!i.specularColorMap,ye=!!i.specularIntensityMap,W=V&&!!i.transmissionMap,be=V&&!!i.thicknessMap,xe=!!i.gradientMap,Se=!!i.alphaMap,Ce=i.alphaTest>0,we=!!i.alphaHash,Te=!!i.extensions,G=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(G=e.toneMapping);let Ee={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:ee,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:M,batchingColor:M&&h._colorsTexture!==null,instancing:j,instancingColor:j&&h.instanceColor!==null,instancingMorph:j&&h.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:mi.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:N,matcap:P,envMap:ne,envMapMode:ne&&x.mapping,envMapCubeUVHeight:S,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:F,displacementMap:I,emissiveMap:L,normalMapObjectSpace:F&&i.normalMapType===1,normalMapTangentSpace:F&&i.normalMapType===0,packedNormalMap:F&&i.normalMapType===0&&ip(i.normalMap.format),metalnessMap:R,roughnessMap:z,anisotropy:oe,anisotropyMap:de,clearcoat:se,clearcoatMap:fe,clearcoatNormalMap:pe,clearcoatRoughnessMap:me,dispersion:ce,retroreflection:le,iridescence:ue,iridescenceMap:he,iridescenceThicknessMap:H,sheen:B,sheenColorMap:ge,sheenRoughnessMap:_e,specularMap:ve,specularColorMap:U,specularIntensityMap:ye,transmission:V,transmissionMap:W,thicknessMap:be,gradientMap:xe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Se,alphaTest:Ce,alphaHash:we,combine:i.combine,mapUv:N&&m(i.map.channel),aoMapUv:re&&m(i.aoMap.channel),lightMapUv:ie&&m(i.lightMap.channel),bumpMapUv:ae&&m(i.bumpMap.channel),normalMapUv:F&&m(i.normalMap.channel),displacementMapUv:I&&m(i.displacementMap.channel),emissiveMapUv:L&&m(i.emissiveMap.channel),metalnessMapUv:R&&m(i.metalnessMap.channel),roughnessMapUv:z&&m(i.roughnessMap.channel),anisotropyMapUv:de&&m(i.anisotropyMap.channel),clearcoatMapUv:fe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:pe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:H&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:_e&&m(i.sheenRoughnessMap.channel),specularMapUv:ve&&m(i.specularMap.channel),specularColorMapUv:U&&m(i.specularColorMap.channel),specularIntensityMapUv:ye&&m(i.specularIntensityMap.channel),transmissionMapUv:W&&m(i.transmissionMap.channel),thicknessMapUv:be&&m(i.thicknessMap.channel),alphaMapUv:Se&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(F||oe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(N||Se),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&F===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:G,decodeVideoTexture:N&&i.map.isVideoTexture===!0&&mi.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:L&&i.emissiveMap.isVideoTexture===!0&&mi.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Te&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Te&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Tu[t];n=il.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new ep(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function op(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function sp(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function cp(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function lp(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||sp),r.length>1&&r.sort(t||cp),i.length>1&&i.sort(t||cp)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function up(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new lp,e.set(t,[i])):n>=r.length?(i=new lp,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function dp(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new q,color:new ua};break;case`SpotLight`:n={position:new q,direction:new q,color:new ua,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new q,color:new ua,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new q,skyColor:new ua,groundColor:new ua};break;case`RectAreaLight`:n={color:new ua,position:new q,halfWidth:new q,halfHeight:new q}}return e[t.id]=n,n}}}function fp(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var pp=0;function mp(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function hp(e){let t=new dp,n=fp(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new q);let i=new q,a=new Ai,o=new Ai;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(mp);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=pp++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function gp(e){let t=new hp(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function _p(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new gp(e),t.set(n,[a])):r>=i.length?(a=new gp(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var vp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,bp=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],xp=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Sp=new Ai,Cp=new q,wp=new q;function Tp(e,t,n){let r=new fs,i=new K,a=new K,o=new Ti,s=new dl,c=new fl,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new sl({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:vp,fragmentShader:yp}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new so;m.setAttribute(`position`,new Ka(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Y(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(Dr(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){Dr(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){Dr(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Di(i.x,i.y,{format:bn,type:sn,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Ss(i.x,i.y,on),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=gn,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=qt,d.map.depthTexture.magFilter=qt}else l.isPointLight?(d.map=new td(i.x),d.map.depthTexture=new Cs(i.x,an)):(d.map=new Di(i.x,i.y),d.map.depthTexture=new Ss(i.x,i.y,an)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=gn,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Xt,d.map.depthTexture.magFilter=Xt):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=qt,d.map.depthTexture.magFilter=qt);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Cp.setFromMatrixPosition(l.matrixWorld),e.position.copy(Cp),wp.copy(e.position),wp.add(bp[t]),e.up.copy(xp[t]),e.lookAt(wp),e.updateMatrixWorld(),n.makeTranslation(-Cp.x,-Cp.y,-Cp.z),Sp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Sp,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Di(i.x,i.y,{format:bn,type:sn}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ep(e,t){function n(){let t=!1,n=new Ti,r=null,i=new Ti(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?R(e.DEPTH_TEST):z(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=jr[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?R(e.STENCIL_TEST):z(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new ua(0,0,0),T=0,E=!1,D=null,O=null,k=null,ee=null,A=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,M=0,N=e.getParameter(e.VERSION);N.indexOf(`WebGL`)===-1?N.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),j=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(N)[1]),j=M>=1);let P=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new Ti().fromArray(re),F=new Ti().fromArray(ie);function I(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let L={};L[e.TEXTURE_2D]=I(e.TEXTURE_2D,e.TEXTURE_2D,1),L[e.TEXTURE_CUBE_MAP]=I(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[e.TEXTURE_2D_ARRAY]=I(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),L[e.TEXTURE_3D]=I(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),R(e.DEPTH_TEST),o.setFunc(3),de(!1),fe(1),R(e.CULL_FACE),B(0);function R(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function z(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function oe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function se(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ce(t){return h!==t&&(e.useProgram(t),h=t,!0)}let le={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};le[103]=e.MIN,le[104]=e.MAX;let ue={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function B(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(z(e.BLEND),g=!1);return}if(g===!1&&(R(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Or(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Or(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Or(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Or(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(le[n],le[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ue[r],ue[i],ue[o],ue[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function V(t,n){t.side===2?z(e.CULL_FACE):R(e.CULL_FACE);let r=t.side===1;n&&(r=!r),de(r),t.blending===1&&t.transparent===!1?B(0):B(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),me(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?R(e.SAMPLE_ALPHA_TO_COVERAGE):z(e.SAMPLE_ALPHA_TO_COVERAGE)}function de(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function fe(t){t===0?z(e.CULL_FACE):(R(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function pe(t){t!==k&&(j&&e.lineWidth(t),k=t)}function me(t,n,r){t?(R(e.POLYGON_OFFSET_FILL),(ee!==n||A!==r)&&(ee=n,A=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):z(e.POLYGON_OFFSET_FILL)}function he(t){t?R(e.SCISSOR_TEST):z(e.SCISSOR_TEST)}function H(t){t===void 0&&(t=e.TEXTURE0+te-1),P!==t&&(e.activeTexture(t),P=t)}function ge(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+te-1:P);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||L[t]),i.type=t,i.texture=n)}function _e(){let t=ne[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ve(){try{e.compressedTexImage2D(...arguments)}catch(e){Or(`WebGLState:`,e)}}function U(){try{e.compressedTexImage3D(...arguments)}catch(e){Or(`WebGLState:`,e)}}function ye(){try{e.texSubImage2D(...arguments)}catch(e){Or(`WebGLState:`,e)}}function W(){try{e.texSubImage3D(...arguments)}catch(e){Or(`WebGLState:`,e)}}function be(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Or(`WebGLState:`,e)}}function xe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Or(`WebGLState:`,e)}}function Se(){try{e.texStorage2D(...arguments)}catch(e){Or(`WebGLState:`,e)}}function Ce(){try{e.texStorage3D(...arguments)}catch(e){Or(`WebGLState:`,e)}}function we(){try{e.texImage2D(...arguments)}catch(e){Or(`WebGLState:`,e)}}function Te(){try{e.texImage3D(...arguments)}catch(e){Or(`WebGLState:`,e)}}function G(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ee(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function De(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Oe(t){F.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),F.copy(t))}function ke(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ae(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function je(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,ne={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new ua(0,0,0),T=0,E=!1,D=null,O=null,k=null,ee=null,A=null,ae.set(0,0,e.canvas.width,e.canvas.height),F.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:R,disable:z,bindFramebuffer:oe,drawBuffers:se,useProgram:ce,setBlending:B,setMaterial:V,setFlipSided:de,setCullFace:fe,setLineWidth:pe,setPolygonOffset:me,setScissorTest:he,activeTexture:H,bindTexture:ge,unbindTexture:_e,compressedTexImage2D:ve,compressedTexImage3D:U,texImage2D:we,texImage3D:Te,pixelStorei:Ee,getParameter:G,updateUBOMapping:ke,uniformBlockBinding:Ae,texStorage2D:Se,texStorage3D:Ce,texSubImage2D:ye,texSubImage3D:W,compressedTexSubImage2D:be,compressedTexSubImage3D:xe,scissor:De,viewport:Oe,reset:je}}function Dp(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new K,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Sr(`canvas`)}function g(e,t,n){let r=1,i=ve(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),Dr(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&Dr(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];Dr(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||Dr(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?hr:mi.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,Dr(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function ee(){return O}function A(e){O=e}function te(){let e=O;return e>=i.maxTextures&&Dr(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function j(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function M(t,i){let a=r.get(t);if(t.isVideoTexture&&ge(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)Dr(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)Dr(`WebGLRenderer: Texture marked for update but image is incomplete`);else{z(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function N(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){z(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function P(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){z(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ne(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){oe(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let re={[Wt]:e.REPEAT,[Gt]:e.CLAMP_TO_EDGE,[Kt]:e.MIRRORED_REPEAT},ie={[qt]:e.NEAREST,[Jt]:e.NEAREST_MIPMAP_NEAREST,[Yt]:e.NEAREST_MIPMAP_LINEAR,[Xt]:e.LINEAR,[Zt]:e.LINEAR_MIPMAP_NEAREST,[Qt]:e.LINEAR_MIPMAP_LINEAR},ae={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function F(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&Dr(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,re[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,re[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,re[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ie[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ie[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ae[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function I(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=j(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function L(e,t,n){return Math.floor(Math.floor(e/n)/t)}function R(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=L(n.start,r.width,4),c=L(t.start,r.width,4);n.start<=i+1&&a===c&&L(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function z(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=I(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=mi.getPrimaries(mi.workingColorSpace),r=o.colorSpace===``?null:mi.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=_e(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);F(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===_n,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&R(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=bu(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else Dr(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?Dr(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=bu(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=ve(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=ve(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function oe(t,o,s){if(o.image.length!==6)return;let c=I(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=mi.getPrimaries(mi.workingColorSpace),r=o.colorSpace===``?null:mi.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=_e(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);F(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?Dr(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=ve(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function se(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),H(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,he(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ce(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;H(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,he(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,he(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);H(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,he(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,he(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function le(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),F(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else M(i.depthTexture,0);let u=l.__webglTexture,d=he(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)H(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)H(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ue(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)le(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?le(i.__webglFramebuffer[0],t,0):le(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ce(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ce(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function B(t,n,i){let a=r.get(t);n!==void 0&&se(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ue(t)}function V(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&H(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=he(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ce(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),F(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)se(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),F(c,a),se(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),F(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else se(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&ue(t)}function de(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let fe=[],pe=[];function me(t){if(t.samples>0){if(H(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(fe.length=0,pe.length=0,fe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(fe.push(l),pe.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,pe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,fe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function he(e){return Math.min(i.maxSamples,e.samples)}function H(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function ge(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function _e(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(mi.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&Dr(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Or(`WebGLTextures: Unsupported texture color space:`,n)),t}function ve(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=te,this.resetTextureUnits=k,this.getTextureUnits=ee,this.setTextureUnits=A,this.setTexture2D=M,this.setTexture2DArray=N,this.setTexture3D=P,this.setTextureCube=ne,this.rebindTextures=B,this.setupRenderTarget=V,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=se,this.useMultisampledRTT=H,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Op(e,t){function n(n,r=``){let i,a=mi.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var kp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ap=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,jp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ws(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new sl({vertexShader:kp,fragmentShader:Ap,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Y(new X(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mp=class extends Mr{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new jp,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new K,C=null,w=null,T=new Gl;T.viewport=new Ti;let E=new Gl;E.viewport=new Ti;let D=[T,E],O=new tu,k=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new aa,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new aa,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new aa,b[e]=t),t.getHandSpace()};function A(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function te(){r.removeEventListener(`select`,A),r.removeEventListener(`selectstart`,A),r.removeEventListener(`selectend`,A),r.removeEventListener(`squeeze`,A),r.removeEventListener(`squeezestart`,A),r.removeEventListener(`squeezeend`,A),r.removeEventListener(`end`,te),r.removeEventListener(`inputsourceschange`,j);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,ee=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,F.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&Dr(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&Dr(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,A),r.addEventListener(`selectstart`,A),r.addEventListener(`selectend`,A),r.addEventListener(`squeeze`,A),r.addEventListener(`squeezestart`,A),r.addEventListener(`squeezeend`,A),r.addEventListener(`end`,te),r.addEventListener(`inputsourceschange`,j),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?_n:gn,a=_.stencil?un:an);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Di(d.textureWidth,d.textureHeight,{format:hn,type:$t,depthTexture:new Ss(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Di(f.framebufferWidth,f.framebufferHeight,{format:hn,type:$t,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),F.setContext(r),F.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function j(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let M=new q,N=new q;function P(e,t,n){M.setFromMatrixPosition(t.matrixWorld),N.setFromMatrixPosition(n.matrixWorld);let r=M.distanceTo(N),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ne(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||ee!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,ee=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ne(O,i);for(let e=0;e<a.length;e++)ne(a[e],i);a.length===2?P(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),re(e,O,i)};function re(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ir*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ie=null;function ae(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Gl,o.layers.enable(n),o.viewport=new Ti,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new ws,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ie&&ie(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let F=new Su;F.setAnimationLoop(ae),this.setAnimationLoop=function(e){ie=e},this.dispose=function(){}}},Np=new Ai,Pp=new li;Pp.set(-1,0,0,0,1,0,0,0,1);function Fp(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,rl(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Np.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Pp),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ip(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return Or(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?Dr(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):Dr(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Lp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Rp=null;function zp(){return Rp===null&&(Rp=new $o(Lp,16,16,bn,sn),Rp.name=`DFG_LUT`,Rp.minFilter=Xt,Rp.magFilter=Xt,Rp.wrapS=Gt,Rp.wrapT=Gt,Rp.generateMipmaps=!1,Rp.needsUpdate=!0),Rp}var Bp=class{constructor(e={}){let{canvas:t=Cr(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=$t}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Sn,xn,yn]),g=new Set([$t,an,nn,un,cn,ln]),_=new Uint32Array(4),v=new Int32Array(4),y=new q,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,ee=null;this._outputColorSpace=pr;let A=0,te=0,j=null,M=-1,N=null,P=new Ti,ne=new Ti,re=null,ie=new ua(0),ae=0,F=t.width,I=t.height,L=1,R=null,z=null,oe=new Ti(0,0,F,I),se=new Ti(0,0,F,I),ce=!1,le=new fs,ue=!1,B=!1,V=new Ai,de=new q,fe=new Ti,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},me=!1;function he(){return j===null?L:1}let H=n;function ge(e,n){return t.getContext(e,n)}let _e,ve,U,ye,W,be,xe,Se,Ce,we,Te,G,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,ze,!1),t.addEventListener(`webglcontextrestored`,Be,!1),t.addEventListener(`webglcontextcreationerror`,Ve,!1),H===null){let t=`webgl2`;if(H=ge(t,e),H===null)throw ge(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Le()}catch(e){throw t.removeEventListener(`webglcontextlost`,ze,!1),t.removeEventListener(`webglcontextrestored`,Be,!1),t.removeEventListener(`webglcontextcreationerror`,Ve,!1),Or(`WebGLRenderer: `+e.message),e}function Le(){_e=new rd(H),_e.init(),Pe=new Op(H,_e),ve=new Mu(H,_e,e,Pe),U=new Ep(H,_e),ve.reversedDepthBuffer&&d&&U.buffers.depth.setReversed(!0),O=H.createFramebuffer(),k=H.createFramebuffer(),ee=H.createFramebuffer(),ye=new od(H),W=new op,be=new Dp(H,_e,U,W,ve,Pe,ye),xe=new nd(T),Se=new Cu(H),Fe=new Au(H,Se),Ce=new id(H,Se,ye,Fe),we=new cd(H,Ce,Se,Fe,ye),je=new sd(H,ve,be),Oe=new Nu(W),Te=new ap(T,xe,_e,ve,Fe,Oe),G=new Fp(T,W),Ee=new up,De=new _p(_e),Ae=new ku(T,xe,U,we,p,s),ke=new Tp(T,we,ve),Ie=new Ip(H,ye,ve,U),Me=new ju(H,_e,ye),Ne=new ad(H,_e,ye),ye.programs=Te.programs,T.capabilities=ve,T.extensions=_e,T.properties=W,T.renderLists=Ee,T.shadowMap=ke,T.state=U,T.info=ye}m!==1009&&(w=new ud(m,t.width,t.height,o,r,i));let Re=new Mp(T,H);this.xr=Re,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let e=_e.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=_e.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(e){e!==void 0&&(L=e,this.setSize(F,I,!1))},this.getSize=function(e){return e.set(F,I)},this.setSize=function(e,n,r=!0){if(Re.isPresenting){Dr(`WebGLRenderer: Can't change size while VR device is presenting.`);return}F=e,I=n,t.width=Math.floor(e*L),t.height=Math.floor(n*L),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(F*L,I*L).floor()},this.setDrawingBufferSize=function(e,n,r){F=e,I=n,L=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){Or(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){Dr(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(P)},this.getViewport=function(e){return e.copy(oe)},this.setViewport=function(e,t,n,r){e.isVector4?oe.set(e.x,e.y,e.z,e.w):oe.set(e,t,n,r),U.viewport(P.copy(oe).multiplyScalar(L).round())},this.getScissor=function(e){return e.copy(se)},this.setScissor=function(e,t,n,r){e.isVector4?se.set(e.x,e.y,e.z,e.w):se.set(e,t,n,r),U.scissor(ne.copy(se).multiplyScalar(L).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(e){U.setScissorTest(ce=e)},this.setOpaqueSort=function(e){R=e},this.setTransparentSort=function(e){z=e},this.getClearColor=function(e){return e.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(j!==null){let t=j.texture.format;e=h.has(t)}if(e){let e=j.texture.type,t=g.has(e),n=Ae.getClearColor(),r=Ae.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,H.clearBufferuiv(H.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,H.clearBufferiv(H.COLOR,0,v))}else r|=H.COLOR_BUFFER_BIT}t&&(r|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&H.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ze,!1),t.removeEventListener(`webglcontextrestored`,Be,!1),t.removeEventListener(`webglcontextcreationerror`,Ve,!1),Ae.dispose(),Ee.dispose(),De.dispose(),W.dispose(),xe.dispose(),we.dispose(),Fe.dispose(),Ie.dispose(),Te.dispose(),Re.dispose(),Re.removeEventListener(`sessionstart`,Je),Re.removeEventListener(`sessionend`,Ye),Xe.stop()};function ze(e){e.preventDefault(),Tr(`WebGLRenderer: Context Lost.`),E=!0}function Be(){Tr(`WebGLRenderer: Context Restored.`),E=!1;let e=ye.autoReset,t=ke.enabled,n=ke.autoUpdate,r=ke.needsUpdate,i=ke.type;Le(),ye.autoReset=e,ke.enabled=t,ke.autoUpdate=n,ke.needsUpdate=r,ke.type=i}function Ve(e){Or(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function He(e){let t=e.target;t.removeEventListener(`dispose`,He),Ue(t)}function Ue(e){We(e),W.remove(e)}function We(e){let t=W.get(e).programs;t!==void 0&&(t.forEach(function(e){Te.releaseProgram(e)}),e.isShaderMaterial&&Te.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=pe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=ot(e,t,n,r,i);U.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ce.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Fe.setup(i,r,s,n,c);let h,g=Me;if(c!==null&&(h=Se.get(c),g=Ne,g.setIndex(h)),i.isMesh)r.wireframe===!0?(U.setLineWidth(r.wireframeLinewidth*he()),g.setMode(H.LINES)):g.setMode(H.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),U.setLineWidth(e*he()),i.isLineSegments?g.setMode(H.LINES):i.isLineLoop?g.setMode(H.LINE_LOOP):g.setMode(H.LINE_STRIP)}else i.isPoints?g.setMode(H.POINTS):i.isSprite&&g.setMode(H.TRIANGLES);if(i.isBatchedMesh){if(_e.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Se.get(c).bytesPerElement:1,o=W.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(H,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ge(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),ue===!0&&Oe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,nt(e,t,r),e.side=0,e.needsUpdate=!0,nt(e,t,r),e.side=2):nt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=De.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),B=this.localClippingEnabled,ue=Oe.init(this.clippingPlanes,B),ue===!0&&Oe.setGlobalState(this.clippingPlanes,t),D!==null&&ke.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Ge(o,n,t,e),r.add(o)}else Ge(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=W.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}_e.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Ke=null;function qe(e){Ke&&Ke(e)}function Je(){Xe.stop()}function Ye(){Xe.start()}let Xe=new Su;Xe.setAnimationLoop(qe),typeof self<`u`&&Xe.setContext(self),this.setAnimationLoop=function(e){Ke=e,Re.setAnimationLoop(e),e===null?Xe.stop():Xe.start()},Re.addEventListener(`sessionstart`,Je),Re.addEventListener(`sessionend`,Ye),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Or(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Re.enabled===!0&&Re.isPresenting===!0,r=w!==null&&(j===null||n)&&w.begin(T,j);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(t),t=Re.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,j),x=De.get(e,C.length),x.init(t),x.state.textureUnits=be.getTextureUnits(),C.push(x),V.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),le.setFromProjectionMatrix(V,yr,t.reversedDepth),B=this.localClippingEnabled,ue=Oe.init(this.clippingPlanes,B),b=Ee.get(e,S.length),b.init(),S.push(b),Re.enabled===!0&&Re.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&Ze(e,t,-1/0,T.sortObjects)}Ze(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(R,z),me=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,me&&Ae.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ue===!0&&Oe.beginShadows();let i=x.state.shadowsArray;if(ke.render(i,e,t),ue===!0&&Oe.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];$e(n,r,e,a)}me&&Ae.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Qe(b,e,n,n.viewport)}}else r.length>0&&$e(n,r,e,t),me&&Ae.render(e),Qe(b,e,t)}j!==null&&te===0&&(be.updateMultisampleRenderTarget(j),be.updateRenderTargetMipmap(j)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Fe.resetDefaultState(),M=-1,N=null,C.pop(),C.length>0?(x=C[C.length-1],be.setTextureUnits(x.state.textureUnits),ue===!0&&Oe.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function Ze(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(le)){r&&fe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(V);let i=we.update(e),a=e.material;a.visible&&b.push(e,i,a,n,fe.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(le))){let i=we.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),fe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),fe.copy(e.boundingSphere.center)),fe.applyMatrix4(e.matrixWorld).applyMatrix4(V)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,fe.z,s,t)}}else a.visible&&b.push(e,i,a,n,fe.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ze(i[e],t,n,r)}function Qe(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),ue===!0&&Oe.setGlobalState(T.clippingPlanes,n),r&&U.viewport(P.copy(r)),i.length>0&&et(i,t,n),a.length>0&&et(a,t,n),o.length>0&&et(o,t,n),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function $e(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=_e.has(`EXT_color_buffer_half_float`)||_e.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Di(1,1,{generateMipmaps:!0,type:e?sn:$t,minFilter:Qt,samples:Math.max(4,ve.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:mi.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||P;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ie),ae=T.getClearAlpha(),ae<1&&T.setClearColor(16777215,.5),T.clear(),me&&Ae.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),ue===!0&&Oe.setGlobalState(T.clippingPlanes,r),et(e,n,r),be.updateMultisampleRenderTarget(a),be.updateRenderTargetMipmap(a),_e.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,tt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(be.updateMultisampleRenderTarget(a),be.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ie,ae),d!==void 0&&(r.viewport=d),T.toneMapping=u}function et(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&tt(o,t,n,s,l,c)}}function tt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function nt(e,t,n){t.isScene!==!0&&(t=pe);let r=W.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Te.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Te.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=xe.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,He),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return it(e,s),d}else s.uniforms=Te.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Te.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Oe.uniform),it(e,s),r.needsLights=ct(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function rt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=vf.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function it(e,t){let n=W.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function at(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function ot(e,t,n,r,i){t.isScene!==!0&&(t=pe),be.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=j===null?T.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:mi.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=xe.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=W.get(r),y=x.state.lights;if(ue===!0&&(B===!0||e!==N)){let t=e===N&&r.id===M;Oe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Oe.numPlanes||v.numIntersection!==Oe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=nt(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(U.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==M&&(M=r.id,w=!0),v.needsLights){let e=at(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||N!==e){U.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(H,`projectionMatrix`,e.projectionMatrix),O.setValue(H,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(H,de.setFromMatrixPosition(e.matrixWorld)),ve.logarithmicDepthBuffer&&O.setValue(H,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(H,`isOrthographic`,e.isOrthographicCamera===!0),N!==e&&(N=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(H,`sunShadowMap`,y.state.sunShadowMap,be),y.state.directionalShadowMap.length>0&&O.setValue(H,`directionalShadowMap`,y.state.directionalShadowMap,be),y.state.spotShadowMap.length>0&&O.setValue(H,`spotShadowMap`,y.state.spotShadowMap,be),y.state.pointShadowMap.length>0&&O.setValue(H,`pointShadowMap`,y.state.pointShadowMap,be)),i.isSkinnedMesh){O.setOptional(H,i,`bindMatrix`),O.setOptional(H,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(H,`boneTexture`,e.boneTexture,be))}i.isBatchedMesh&&(O.setOptional(H,i,`batchingTexture`),O.setValue(H,`batchingTexture`,i._matricesTexture,be),O.setOptional(H,i,`batchingIdTexture`),O.setValue(H,`batchingIdTexture`,i._indirectTexture,be),O.setOptional(H,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(H,`batchingColorTexture`,i._colorsTexture,be));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&je.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(H,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=zp()),w){if(O.setValue(H,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&st(k,E),a&&r.fog===!0&&G.refreshFogUniforms(k,a),G.refreshMaterialUniforms(k,r,L,I,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}vf.upload(H,rt(v),k,be)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(vf.upload(H,rt(v),k,be),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(H,`center`,i.center),O.setValue(H,`modelViewMatrix`,i.modelViewMatrix),O.setValue(H,`normalMatrix`,i.normalMatrix),O.setValue(H,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ie.update(n,S),Ie.bind(n,S)}}return S}function st(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function ct(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(e,t,n){let r=W.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),W.get(e.texture).__webglTexture=t,W.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=W.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){j=e,A=t,te=n;let r=null,i=!1,a=!1;if(e){let o=W.get(e);if(o.__useDefaultFramebuffer!==void 0){U.bindFramebuffer(H.FRAMEBUFFER,o.__webglFramebuffer),P.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest,U.viewport(P),U.scissor(ne),U.setScissorTest(re),M=-1;return}if(o.__webglFramebuffer===void 0)be.setupRenderTarget(e);else if(o.__hasExternalTextures)be.rebindTextures(e,W.get(e.texture).__webglTexture,W.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&W.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);be.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=W.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&be.useMultisampledRTT(e)===!1?W.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,P.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest}else P.copy(oe).multiplyScalar(L).floor(),ne.copy(se).multiplyScalar(L).floor(),re=ce;if(n!==0&&(r=O),U.bindFramebuffer(H.FRAMEBUFFER,r)&&U.drawBuffers(e,r),U.viewport(P),U.scissor(ne),U.setScissorTest(re),i){let r=W.get(e.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=W.get(e.textures[t]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=W.get(e.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,t.__webglTexture,n)}M=-1};function lt(e){let t=W.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=ve.textureFormatReadable(e.format),t.__typeReadable=ve.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Or(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=W.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){U.bindFramebuffer(H.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+s);let u=lt(o);if(u.__formatReadable===!1){Or(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){Or(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&H.readPixels(t,n,r,i,Pe.convert(c),Pe.convert(l),a)}finally{let e=j===null?null:W.get(j).__webglFramebuffer;U.bindFramebuffer(H.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=W.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){U.bindFramebuffer(H.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+s);let d=lt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,f),H.bufferData(H.PIXEL_PACK_BUFFER,a.byteLength,H.STREAM_READ),H.readPixels(t,n,r,i,Pe.convert(l),Pe.convert(u),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let p=j===null?null:W.get(j).__webglFramebuffer;U.bindFramebuffer(H.FRAMEBUFFER,p);let m=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Ar(H,m,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,f),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,a),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(f),H.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;be.setTexture2D(e,0),H.copyTexSubImage2D(H.TEXTURE_2D,n,0,0,o,s,i,a),U.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Pe.convert(t.format),_=Pe.convert(t.type),v;t.isData3DTexture?(be.setTexture3D(t,0),v=H.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(be.setTexture2DArray(t,0),v=H.TEXTURE_2D_ARRAY):(be.setTexture2D(t,0),v=H.TEXTURE_2D),U.activeTexture(H.TEXTURE0),U.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,t.flipY),U.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),U.pixelStorei(H.UNPACK_ALIGNMENT,t.unpackAlignment);let y=U.getParameter(H.UNPACK_ROW_LENGTH),b=U.getParameter(H.UNPACK_IMAGE_HEIGHT),x=U.getParameter(H.UNPACK_SKIP_PIXELS),S=U.getParameter(H.UNPACK_SKIP_ROWS),C=U.getParameter(H.UNPACK_SKIP_IMAGES);U.pixelStorei(H.UNPACK_ROW_LENGTH,h.width),U.pixelStorei(H.UNPACK_IMAGE_HEIGHT,h.height),U.pixelStorei(H.UNPACK_SKIP_PIXELS,l),U.pixelStorei(H.UNPACK_SKIP_ROWS,u),U.pixelStorei(H.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=W.get(e),r=W.get(t),h=W.get(n.__renderTarget),g=W.get(r.__renderTarget);U.bindFramebuffer(H.READ_FRAMEBUFFER,h.__webglFramebuffer),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,W.get(e).__webglTexture,i,d+n),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,W.get(t).__webglTexture,a,m+n)),H.blitFramebuffer(l,u,o,s,f,p,o,s,H.DEPTH_BUFFER_BIT,H.NEAREST);U.bindFramebuffer(H.READ_FRAMEBUFFER,null),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||W.has(e)){let n=W.get(e),r=W.get(t);U.bindFramebuffer(H.READ_FRAMEBUFFER,k),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,ee);for(let e=0;e<c;e++)w?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,n.__webglTexture,i),T?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,r.__webglTexture,a),i===0?T?H.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):H.copyTexSubImage2D(v,a,f,p,l,u,o,s):H.blitFramebuffer(l,u,o,s,f,p,o,s,H.COLOR_BUFFER_BIT,H.NEAREST);U.bindFramebuffer(H.READ_FRAMEBUFFER,null),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?H.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?H.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):H.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):H.texSubImage2D(H.TEXTURE_2D,a,f,p,o,s,g,_,h);U.pixelStorei(H.UNPACK_ROW_LENGTH,y),U.pixelStorei(H.UNPACK_IMAGE_HEIGHT,b),U.pixelStorei(H.UNPACK_SKIP_PIXELS,x),U.pixelStorei(H.UNPACK_SKIP_ROWS,S),U.pixelStorei(H.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&H.generateMipmap(v),U.unbindTexture()},this.initRenderTarget=function(e){W.get(e).__webglFramebuffer===void 0&&be.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?be.setTextureCube(e,0):e.isData3DTexture?be.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?be.setTexture2DArray(e,0):be.setTexture2D(e,0),U.unbindTexture()},this.resetState=function(){A=0,te=0,j=null,U.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return yr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=mi._getDrawingBufferColorSpace(e),t.unpackColorSpace=mi._getUnpackColorSpace()}};function Vp(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Hp(e,t=e){let n=document.createElement(`canvas`);return n.width=e,n.height=t,{c:n,g:n.getContext(`2d`,{willReadFrequently:!0})}}function Up(e,t=256){let n=Vp(e),r=new Float32Array(t*t);for(let e=0;e<r.length;e++)r[e]=n();let i=(e,n)=>r[(n%t+t)%t*t+(e%t+t)%t],a=e=>e*e*(3-2*e),o=(e,t)=>{let n=Math.floor(e),r=Math.floor(t),o=a(e-n),s=a(t-r),c=i(n,r),l=i(n+1,r),u=i(n,r+1),d=i(n+1,r+1);return c+(l-c)*o+(u-c)*s+(c-l-u+d)*o*s};return{value:o,fbm:(e,t,n=5)=>{let r=0,i=.5,a=1;for(let s=0;s<n;s++)r+=o(e*a,t*a)*i,a*=2,i*=.5;return r}}}function Wp(e,t=2){let n=e.width,r=e.height,i=e.getContext(`2d`).getImageData(0,0,n,r).data,{c:a,g:o}=Hp(n,r),s=o.createImageData(n,r),c=(e,t)=>i[((t+r)%r*n+(e+n)%n)*4]/255;for(let e=0;e<r;e++)for(let r=0;r<n;r++){let i=(c(r+1,e)-c(r-1,e))*t,a=(c(r,e+1)-c(r,e-1))*t,o=1/Math.sqrt(i*i+a*a+1),l=(e*n+r)*4;s.data[l]=(-i*o*.5+.5)*255,s.data[l+1]=(a*o*.5+.5)*255,s.data[l+2]=o*255,s.data[l+3]=255}return o.putImageData(s,0,0),a}var Gp=new Map;function Kp(e,t){return Gp.has(e)||Gp.set(e,t()),Gp.get(e)}function qp(e,{repeat:t=[1,1],srgb:n=!0,wrap:r=!0}={}){let i=new xs(e);return n&&(i.colorSpace=pr),r&&(i.wrapS=i.wrapT=Wt),i.repeat.set(...t),i.anisotropy=8,i}function Jp(e,t=[1,1]){return{map:qp(e.map,{repeat:t}),normalMap:e.normal?qp(e.normal,{repeat:t,srgb:!1}):void 0,roughnessMap:e.rough?qp(e.rough,{repeat:t,srgb:!1}):void 0}}var Yp=(e,t=0,n=255)=>e<t?t:e>n?n:e;function Xp(e,t,n){let r=Hp(e,t),i=Hp(e,t),a=Hp(e,t),o=r.g.createImageData(e,t),s=i.g.createImageData(e,t),c=a.g.createImageData(e,t);for(let r=0;r<t;r++)for(let t=0;t<e;t++){let[i,a,l,u,d]=n(t,r),f=(r*e+t)*4;o.data[f]=Yp(i),o.data[f+1]=Yp(a),o.data[f+2]=Yp(l),o.data[f+3]=255,s.data[f]=s.data[f+1]=s.data[f+2]=Yp(u*255),s.data[f+3]=255,c.data[f]=c.data[f+1]=c.data[f+2]=Yp(d*255),c.data[f+3]=255}return r.g.putImageData(o,0,0),i.g.putImageData(s,0,0),a.g.putImageData(c,0,0),{map:r.c,normal:Wp(i.c,2.2),rough:a.c}}function Zp(e=3){return Kp(`brushed${e}`,()=>{let{c:t,g:n}=Hp(512,512),r=Vp(e);n.fillStyle=`#7a7a7a`,n.fillRect(0,0,512,512);for(let e=0;e<2600;e++){let e=r()*512,t=90+r()*90;n.fillStyle=`rgba(${t},${t},${t},${.25+r()*.3})`,n.fillRect(r()*512-200,e,120+r()*400,1)}return t})}function Qp(){return Kp(`rivets`,()=>{let e=Up(51,128);return Xp(512,512,(t,n)=>{let r=t/512,i=n/512,a=e.fbm(r*5,i*5,4),o=t%256<3||n%512<3||Math.abs(t%256-n%256)<2,s=t%64-32,c=n%64-32;if((t%256<20||t%256>236)&&Math.hypot(s,c)<7)return[176,136,82,1,.3];if(o)return[10,10,11,.2,.7];let l=34+a*18;return[l,l,l+2,.6,.45+a*.2]})})}var $p=e=>e<0?0:e>1?1:e,em=e=>e*e*(3-2*e),$=(e,t)=>(e.traverse(e=>e.userData.heat=t),e),tm=(e,t)=>(e.traverse(e=>e.layers.set(t)),e);function nm(e,t={}){let{w:n=512,h:r=128,bg:i=`#e9e6dc`,fg:a=`#16181a`,font:o=`bold 64px "Arial Narrow", Arial, sans-serif`,border:s,sub:c}=t,{c:l,g:u}=Hp(n,r);u.fillStyle=i,u.fillRect(0,0,n,r),s&&(u.strokeStyle=s,u.lineWidth=r*.06,u.strokeRect(r*.05,r*.05,n-r*.1,r-r*.1)),u.fillStyle=a,u.font=o,u.textAlign=`center`,u.textBaseline=`middle`,u.fillText(e,n/2,c?r*.4:r/2),c&&(u.font=o.replace(/\d+px/,`${Math.round(r*.17)}px`),u.fillText(c,n/2,r*.75));let d=Vp(e.length*7+n);for(let e=0;e<60;e++)u.fillStyle=`rgba(60,50,30,${d()*.06})`,u.beginPath(),u.arc(d()*n,d()*r,d()*r*.3,0,7),u.fill();return qp(l,{wrap:!1})}function rm(){let{c:e,g:t}=Hp(512,64);t.fillStyle=`#d9a514`,t.fillRect(0,0,512,64),t.fillStyle=`#141414`;for(let e=-64;e<576;e+=48)t.beginPath(),t.moveTo(e,64),t.lineTo(e+24,64),t.lineTo(e+48,0),t.lineTo(e+24,0),t.fill();let n=Vp(5),r=t.getImageData(0,0,512,64);for(let e=0;e<r.data.length;e+=4){let t=n()<.18?.55+n()*.3:1;r.data[e]*=t,r.data[e+1]*=t,r.data[e+2]*=t}return t.putImageData(r,0,0),e}function im(e){let t=(t,n=e)=>(n.add(t),t);return{add:t,box:(n,r,i,a,o,s,c,l=e)=>{let u=new Y(new Ts(n,r,i),a);return u.position.set(o,s,c),t(u,l)},plane:(n,r,i,a,o,s,c=0,l=0,u=e)=>{let d=new Y(new X(n,r),i);return d.position.set(a,o,s),d.rotation.set(l,c,0,`YXZ`),t(d,u)},cyl:(n,r,i,a,o,s,c=e,l=16)=>{let u=new Y(new Os(n,n,r,l),i);return u.position.set(a,o,s),t(u,c)}}}function am(e,t,n,r,i,a,o=9,s=1.2){let c=new ql(t,n,o,s,.8,1.3);return c.position.set(r,i,a),c.target.position.set(r,0,a),c.userData.shadow=!0,e.add(c,c.target),c}var om=(e,t=3)=>new Z({color:`#000`,emissive:e,emissiveIntensity:t});function sm(e,t={}){let{w:n=512,h:r=640,bg:i=`#f4f1e6`,pad:a=36,rule:o=!1}=t,{c:s,g:c}=Hp(n,r);if(c.fillStyle=i,c.fillRect(0,0,n,r),o){c.strokeStyle=`rgba(80,110,160,0.25)`,c.lineWidth=2;for(let e=90;e<r;e+=40)c.beginPath(),c.moveTo(0,e),c.lineTo(n,e),c.stroke()}let l=a;for(let t of e){let e=t.size??30;c.font=`${t.bold?`bold `:``}${e}px ${t.mono?`"Courier New", monospace`:`Arial, sans-serif`}`,c.fillStyle=t.color??`#1d1d1d`,c.textAlign=t.align??`left`,c.textBaseline=`top`,c.fillText(t.t,t.align===`center`?n/2:a,l),l+=e*1.35}let u=Vp(n+r+e.length);for(let e=0;e<40;e++)c.fillStyle=`rgba(90,70,30,${u()*.05})`,c.beginPath(),c.arc(u()*n,u()*r,u()*60,0,7),c.fill();return qp(s,{wrap:!1})}var cm=e=>{let t=Math.sin(e*12.9898+78.233)*43758.5453;return t-Math.floor(t)};function lm(e,t,n=5,r=.5,i=.9){let a=Math.floor(e/n);if(cm(a*1.31+t*7.7)>r)return 1;let o=a*n+cm(a*2.17+t)*(n-i);if(e<o||e>o+i)return 1;let s=Math.floor((e-o)/.055);return cm(s*1.37+a*.71+t*3.3)<.45?.04+.35*cm(s+t*9.1):1}var um=e=>lm(e,2,4,.6,1.1),dm=e=>lm(e,7,6,.5,1.3),fm=[1,-35.4];function pm(){let e=null;return(t,n)=>{if(!t)return e=null,`on`;e===null&&(e=n);let r=n-e;return r>1.9?`cut`:r>1.3?`dark`:cm(Math.floor(r/.07)*3.1+5)<.5-r*.3?`on`:`dark`}}var mm=(()=>{let e=null;return()=>{if(e)return e;let{c:t,g:n}=Hp(128,128),r=Vp(17);n.clearRect(0,0,128,128);for(let e=0;e<14;e++){let e=r()*Math.PI*2,t=r()*26,i=64+Math.cos(e)*t,a=64+Math.sin(e)*t,o=18+r()*26,s=n.createRadialGradient(i,a,0,i,a,o);s.addColorStop(0,`rgba(255,255,255,${.22+r()*.2})`),s.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=s,n.fillRect(0,0,128,128)}let i=n.getImageData(0,0,128,128);for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=Math.hypot(t-64,e-64)/64,r=Math.max(0,1-n*n);i.data[(e*128+t)*4+3]*=r}return n.putImageData(i,0,0),e=new xs(t),e}})(),hm=(()=>{let e=null;return()=>{if(e)return e;let{c:t,g:n}=Hp(32,32),r=n.createRadialGradient(16,16,0,16,16,16);return r.addColorStop(0,`rgba(255,255,255,1)`),r.addColorStop(.35,`rgba(255,255,255,0.6)`),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.fillRect(0,0,32,32),e=new xs(t),e}})();function gm(e,t){let n=new Zl,r=new X(1,1);n.index=r.index,n.setAttribute(`position`,r.getAttribute(`position`)),n.setAttribute(`uv`,r.getAttribute(`uv`));let i=Vp(t),a=new Float32Array(e*4);for(let t=0;t<e*4;t++)a[t]=i();for(let t=0;t<e;t++)a[t*4]=(t+i()*.6)/e;return n.setAttribute(`aRand`,new es(a,4)),n.instanceCount=e,n}var _m=`
uniform float uTime;
uniform float uLife;
uniform vec3 uVel;
uniform float uSpread;
uniform float uRise;
uniform float uDrift;
uniform vec2 uSize;
attribute vec4 aRand;
varying vec2 vUv;
varying float vAge;
varying float vRot;
varying float vShade;
#include <fog_pars_vertex>
void main() {
  float age = fract(uTime / uLife + aRand.x);
  float s = age * uLife;
  // start: en liten skiva kring munstycket, sedan ut längs uVel som bromsar in och stiger
  float a = aRand.y * 6.2832;
  vec3 p = vec3(cos(a), 0.0, sin(a)) * uSpread * sqrt(aRand.z);
  p += uVel * s * (1.0 - 0.45 * age);
  p.y += uRise * s * s * 0.5;
  // virvlar
  p.x += sin(s * 1.7 + aRand.w * 20.0) * uDrift * age;
  p.z += cos(s * 1.3 + aRand.y * 17.0) * uDrift * age;
  vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
  float size = mix(uSize.x, uSize.y, sqrt(age)) * (0.75 + 0.5 * aRand.w);
  vRot = aRand.z * 6.2832 + s * (aRand.w - 0.5) * 0.8;
  mvPosition.xy += position.xy * size;
  vUv = uv;
  vAge = age;
  vShade = 0.85 + 0.3 * aRand.z;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}
`,vm=`
uniform sampler2D uMap;
uniform vec3 uColor;
uniform float uOpacity;
uniform float uStrength;
varying vec2 vUv;
varying float vAge;
varying float vRot;
varying float vShade;
#include <fog_pars_fragment>
void main() {
  vec2 c = vUv - 0.5;
  float cs = cos(vRot), sn = sin(vRot);
  vec2 uv = vec2(cs * c.x - sn * c.y, sn * c.x + cs * c.y) + 0.5;
  float m = texture2D(uMap, uv).a;
  float fade = smoothstep(0.0, 0.12, vAge) * pow(1.0 - vAge, 1.6);
  float alpha = m * fade * uOpacity * uStrength;
  if (alpha < 0.002) discard;
  gl_FragColor = vec4(uColor * vShade, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}
`;function ym(e,t,n,r,i={}){let a=i.n??40,o=new sl({uniforms:il.merge([Q.fog,{uTime:{value:0},uLife:{value:i.life??4},uVel:{value:new q(...i.vel??[0,.35,0])},uSpread:{value:i.spread??.05},uRise:{value:i.rise??.05},uDrift:{value:i.drift??.15},uSize:{value:new K(...i.size??[.12,.7])},uColor:{value:new ua(i.color??`#c9d0d0`)},uOpacity:{value:i.opacity??.35},uStrength:{value:1},uMap:{value:mm()}}]),vertexShader:_m,fragmentShader:vm,transparent:!0,depthWrite:!1,fog:!0}),s=new Y(gm(a,i.seed??Math.round(t*31+r*17)),o);return s.position.set(t,n,r),s.frustumCulled=!1,s.renderOrder=2,s.layers.set(6),e.add(s),{mesh:s,set strength(e){o.uniforms.uStrength.value=e,s.visible=e>.001},get strength(){return o.uniforms.uStrength.value},tick(e){o.uniforms.uTime.value=e%1200}}}var bm=`
uniform float uAge;
uniform float uSpeed;
uniform float uFloor;
uniform float uUp;
attribute vec4 aRand;
varying vec2 vUv;
varying float vFade;
void main() {
  // varje gnista har egen fart och livslängd; de faller med tyngdkraften och studsar mot golvet
  float life = 0.35 + aRand.w * 0.9;
  float s = uAge;
  float a = aRand.y * 6.2832;
  vec3 v = vec3(cos(a) * 0.9, uUp + aRand.z * 0.8, sin(a) * 0.9) * uSpeed * (0.4 + aRand.x);
  vec3 p = v * s;
  p.y -= 4.9 * s * s;
  if (p.y < uFloor) p.y = uFloor + abs(p.y - uFloor) * 0.04;
  vec3 vel = v - vec3(0.0, 9.8 * s, 0.0);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  // dra ut gnistan längs rörelsen (i bilden)
  vec4 mv2 = modelViewMatrix * vec4(p - vel * 0.032, 1.0);
  vec2 d = mv.xy - mv2.xy;
  float len = max(length(d), 0.0001);
  vec2 dir = d / len;
  vec2 nrm = vec2(dir.y, -dir.x); // (nrm, dir) högervänt – annars vänds fyrkanten bort och syns inte
  mv.xy += dir * position.y * (len + 0.02) + nrm * position.x * 0.014;
  vUv = uv;
  vFade = s < life ? 1.0 - s / life : 0.0;
  gl_Position = projectionMatrix * mv;
}
`,xm=`
uniform sampler2D uMap;
varying vec2 vUv;
varying float vFade;
void main() {
  if (vFade <= 0.0) discard;
  float m = texture2D(uMap, vUv).a;
  vec3 col = mix(vec3(1.0, 0.38, 0.06), vec3(1.0, 0.9, 0.6), vFade * vFade);
  gl_FragColor = vec4(col * 2.2 * m * vFade, 1.0);
}
`;function Sm(e,t,n,r,i={}){let a=new sl({uniforms:{uAge:{value:99},uSpeed:{value:i.speed??1.4},uFloor:{value:-n},uUp:{value:i.up??.2},uMap:{value:hm()}},vertexShader:bm,fragmentShader:xm,transparent:!0,depthWrite:!1,blending:2}),o=new Y(gm(i.n??26,i.seed??5),a);o.position.set(t,n,r),o.frustumCulled=!1,o.renderOrder=3,o.layers.set(6),o.visible=!1,e.add(o);let s=-1e9;return{mesh:o,burst(e){e!==s&&(s=e,o.updateWorldMatrix(!0,!1),a.uniforms.uFloor.value=-new q().setFromMatrixPosition(o.matrixWorld).y)},age(e){return e-s},tick(e){let t=e-s;o.visible=t>=0&&t<1.4,a.uniforms.uAge.value=t}}}function Cm(e,t,n,r,i,a=0,o=.008){let s=new J;s.position.set(t,0,r),e.add(s);let c=new zo({color:`#dfe8ee`,transparent:!0,opacity:.55,depthWrite:!1}),l=new Y(new Xc(.012,8,6),c);l.scale.set(1,1.8,1),s.add(l);let u=[0,1].map(()=>{let e=new zo({color:`#cfd8de`,transparent:!0,opacity:0,depthWrite:!1}),t=new Y(new qc(.93,1,40),e);return t.rotation.x=-Math.PI/2,t.position.y=o,s.add(t),{r:t,m:e}}),d=new Y(new Ds(.05,12),new zo({color:`#0a0c0d`,transparent:!0,opacity:.4,depthWrite:!1}));d.rotation.x=Math.PI/2,d.position.y=n-.004,s.add(d),s.traverse(e=>e.layers.set(6));let f=Math.sqrt(2*(n-o)/9.8);return{tick(e){let t=(e+a)%i,r=i-f;if(t<r){let e=t/r;l.position.y=n-.01-.012*e,l.scale.set(.4+.6*e,(.4+.6*e)*1.4,.4+.6*e),l.visible=e>.25}else{let e=t-r;l.position.y=n-.02-4.9*e*e,l.scale.set(.9,2.6,.9),l.visible=!0}u.forEach((e,n)=>{let r=t-n*.22,i=r/1.3;if(r<0||i>1){e.m.opacity=0;return}let a=.02+.3*Math.sqrt(i)*(n===1?.6:1);e.r.scale.setScalar(a),e.m.opacity=.16*(1-i)*(1-i)})}}}var wm=512,Tm=512;function Em(e){wm=e}var Dm=new Map,Om=(e,t=0,n=255)=>e<t?t:e>n?n:e,km=e=>{let t=parseInt(e.slice(1),16);return[t>>16&255,t>>8&255,t&255]};function Am(e,t,n,r=2.4){let i=Dm.get(e);if(i)return i;let a=Hp(wm),o=Hp(wm),s=Hp(wm),c=a.g.createImageData(wm,wm),l=o.g.createImageData(wm,wm),u=s.g.createImageData(wm,wm),d=512/wm;for(let e=0;e<wm;e++)for(let n=0;n<wm;n++){let[r,i,a,o,s]=t(n*d,e*d),f=(e*wm+n)*4;c.data[f]=Om(r),c.data[f+1]=Om(i),c.data[f+2]=Om(a),c.data[f+3]=255,l.data[f]=l.data[f+1]=l.data[f+2]=Om(o*255),l.data[f+3]=255,u.data[f]=u.data[f+1]=u.data[f+2]=Om(s*255),u.data[f+3]=255}if(a.g.putImageData(c,0,0),o.g.putImageData(l,0,0),s.g.putImageData(u,0,0),n){for(let e of[a.g,o.g,s.g])e.setTransform(1/d,0,0,1/d,0,0);n(a.g,o.g,s.g);for(let e of[a.g,o.g,s.g])e.setTransform(1,0,0,1,0,0)}let f={map:a.c,normal:Wp(o.c,r/d),rough:s.c};return Dm.set(e,f),f}function jm(e,t,n,r,i){let a=e.createRadialGradient(t,n,0,t,n,r);a.addColorStop(0,i),a.addColorStop(1,i.replace(/[\d.]+\)$/,`0)`)),e.fillStyle=a,e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fill()}function Mm(e,t,n,r,i){let a=[[n,r]],o=t()*Math.PI*2;for(let e=0;e<i;e++)o+=(t()-.5)*.9,n+=Math.cos(o)*4,r+=Math.sin(o)*4,a.push([n,r]);for(let[t,n,r]of e){t.strokeStyle=n,t.lineWidth=r,t.beginPath(),t.moveTo(...a[0]);for(let e of a)t.lineTo(...e);t.stroke()}}function Nm(e=`#3d5a48`,t=3){let n=Up(t,128),r=Vp(t),i=Array.from({length:26},()=>[r()*Tm,r()*Tm,3+r()*14]),a=km(e),o=[118,118,112];return Am(`lower${e}${t}`,(e,t)=>{let r=e/Tm,s=t/Tm,c=n.fbm(r*5,s*5,4),l=n.value(r*160,s*160),u=0;for(let[r,a,o]of i)Math.hypot(e-r,(t-a)*1.3)-o*(.7+.6*n.value(e*.2,t*.2))<0&&(u=1);let d=+(e%256<2),f=.86+c*.22+(l-.5)*.04;if(u)return[o[0]*f,o[1]*f,o[2]*f,.35+l*.1,.9];let p=d?.55:1;return[a[0]*f*p,a[1]*f*p,a[2]*f*p,d?.3:.62+c*.05,.42+c*.12+(d?.3:0)]},e=>{for(let t=0;t<90;t++){e.strokeStyle=`rgba(15,20,16,${.06+r()*.16})`,e.lineWidth=.8+r()*2;let t=120+r()*300,n=r()*Tm;e.beginPath(),e.moveTo(n,t),e.lineTo(n+20+r()*90,t+(r()-.5)*8),e.stroke()}})}function Pm(e=`#8f8b7d`,t=4){let n=Up(t,128),r=Vp(t),i=km(e);return Am(`upper${e}${t}`,(e,t)=>{let r=e/Tm,a=t/Tm,o=n.fbm(r*4,a*4,4),s=n.value(r*180,a*180),c=e%256-128,l=t%256-100,u=+(c*c+l*l<12),d=+(c*c+l*l<40),f=+(t%256<2),p=.84+o*.24+(s-.5)*.06,m=u?.6:d?.95:f?.85:1;return[i[0]*p*m,i[1]*p*m,i[2]*p*m,u?.1:f?.4:.6+o*.12,.8+o*.1]},e=>{for(let t=0;t<9;t++){let t=r()*Tm,n=10+r()*40,i=80+r()*260,a=e.createLinearGradient(0,0,0,i);a.addColorStop(0,`rgba(80,70,45,0.28)`),a.addColorStop(1,`rgba(80,70,45,0)`),e.fillStyle=a,e.fillRect(t,0,n,i)}})}function Fm(e=`#4b4e50`,t=17){let n=Up(t,128),r=Vp(t),i=km(e),a=new Map;for(let e=0;e<7e3;e++)a.set(Math.floor(r()*Tm)+Math.floor(r()*Tm)*Tm,r());return Am(`polished${e}${t}`,(e,t)=>{let r=e/Tm,o=t/Tm,s=n.fbm(r*3,o*3,4),c=n.value(r*200,o*200),l=a.get(e+t*Tm),u=e%256<2||t%256<2,d=.82+s*.3+(c-.5)*.05;l!==void 0&&(d*=l<.5?.75:1.2),u&&(d*=.45);let f=1-Math.abs(r-.5)*2;return[i[0]*d,i[1]*d,i[2]*d,u?.25:.6+s*.08,(u?.9:.32+(1-f)*.22)+s*.12]},(e,t)=>{for(let n=0;n<6;n++)Mm([[e,`rgba(20,20,20,0.5)`,1],[t,`rgba(0,0,0,0.6)`,1.5]],r,r()*Tm,r()*Tm,25+r()*40);for(let t=0;t<10;t++)jm(e,r()*Tm,r()*Tm,15+r()*60,`rgba(25,22,18,${.08+r()*.12})`)},1.6)}function Im(e=`#2e3032`,t=13){let n=Up(t,128),r=km(e);return Am(`formwork${e}${t}`,(e,t)=>{let i=t/Tm,a=Math.floor(t/64),o=n.value(e*.03+a*13,t*.6),s=+(t%64<2),c=.85+n.fbm(e/Tm*3,i*3,3)*.25+(o-.5)*.12+a*37%7*.012;return[r[0]*c*(s?.7:1),r[1]*c*(s?.7:1),r[2]*c*(s?.7:1),s?.3:.55+o*.15,.9]})}function Lm(e=31){let t=Up(e,128),n=Vp(e),r=Array.from({length:900},()=>[n()*Tm,n()*Tm,1.5+n()*5,n()]);return Am(`terrazzo${e}`,(e,n)=>{let r=t.fbm(e/Tm*4,n/Tm*4,3),i=.85+r*.2;return[48*i,44*i,42*i,.6,.2+r*.1]},e=>{for(let[t,n,i,a]of r)e.fillStyle=a<.4?`#8b8178`:a<.7?`#5b5650`:a<.9?`#a39686`:`#6b2a22`,e.beginPath(),e.ellipse(t,n,i,i*(.5+a*.5),a*6,0,Math.PI*2),e.fill();e.fillStyle=`#9a7a3a`,e.fillRect(0,0,Tm,3),e.fillRect(0,0,3,Tm)},1)}function Rm(e=51){let t=Up(e,128),n=Vp(e);return Am(`garagefloor${e}`,(e,n)=>{let r=e/Tm,i=n/Tm,a=t.fbm(r*4,i*4,4),o=t.value(r*220,i*220),s=.8+a*.3+(o-.5)*.08,c=e%256<2||n%256<2;return[74*s*(c?.5:1),77*s*(c?.5:1),75*s*(c?.5:1),c?.25:.6+o*.05,.55+a*.25]},(e,t,r)=>{for(let t=0;t<5;t++){e.strokeStyle=`rgba(10,10,10,${.1+n()*.12})`,e.lineWidth=14+n()*10,e.beginPath();let t=n()*Tm;e.moveTo(t,-20),e.bezierCurveTo(t+(n()-.5)*300,Tm*.3,t+(n()-.5)*300,Tm*.7,t+(n()-.5)*200,532),e.stroke()}for(let t=0;t<7;t++){let t=n()*Tm,i=n()*Tm,a=12+n()*45;jm(e,t,i,a,`rgba(12,10,8,0.55)`),jm(r,t,i,a,`rgba(20,20,20,0.85)`)}for(let r=0;r<5;r++)Mm([[e,`rgba(15,15,15,0.55)`,1.2],[t,`rgba(0,0,0,0.6)`,1.6]],n,n()*Tm,n()*Tm,30+n()*50)},1.8)}function zm(e=`#8d8f8a`,t=53){let n=Up(t,128),r=km(e);return Am(`block${e}${t}`,(e,t)=>{let i=Math.floor(t/64),a=i%2?64:0,o=Math.floor((e+a)/128),s=(e+a)%128,c=t%64,l=s<3||c<3,u=(o*73+i*31)%11/11,d=n.fbm(e/Tm*6,t/Tm*6,3),f=+(n.value(e*.7,t*.7)>.93),p=(l?.72:.9+u*.12)+d*.12-f*.25;return[r[0]*p,r[1]*p,r[2]*p,l?.3:.62+d*.08-f*.3,l?.95:.8]})}function Bm(e=57){let t=Up(e,128);return Am(`pillar${e}`,(e,n)=>{let r=Math.floor(e/64),i=e%64<2,a=t.value(e*.5+r*10,n*.02),o=.85+t.fbm(e/Tm*3,n/Tm*3,3)*.22+(a-.5)*.1;return[138*o*(i?.75:1),137*o*(i?.75:1),130*o*(i?.75:1),i?.35:.6+a*.12,.88]})}function Vm(e=`#3c4044`,t=43){let n=Up(t,128),r=km(e);return Am(`epoxy${e}${t}`,(e,t)=>{let i=n.fbm(e/Tm*3,t/Tm*3,3),a=n.value(e*.4,t*.4),o=.9+i*.15+(a-.5)*.04;return[r[0]*o,r[1]*o,r[2]*o,.6,.35+i*.2]})}function Hm(e=81){let t=Up(e,128);return Am(`carpet${e}`,(e,n)=>{let r=(Math.floor(e/128)+Math.floor(n/128))%2?t.value(e*1.6,n*.3):t.value(e*.3,n*1.6),i=e%128<1||n%128<1,a=.8+r*.35-(i?.3:0);return[38*a,44*a,56*a,.5+r*.2,.97]},void 0,1.2)}function Um(e=83){return Vp(e),Am(`acoustic${e}`,(e,t)=>{let n=e%128<3||t%128<3,r=e%8<2&&t%8<2,i=n?.55:r?.8:1;return[205*i,205*i,200*i,n?.2:r?.45:.6,.95]})}function Wm(e,t,n={},r=.7){let i=qp(e.map,{repeat:t}),a=e.normal?qp(e.normal,{repeat:t,srgb:!1}):void 0,o=e.rough?qp(e.rough,{repeat:t,srgb:!1}):void 0;return new ll({map:i,normalMap:a,normalScale:new K(r,r),roughnessMap:o,roughness:1,...n})}var Gm=de,Km=de-14,qm=3.2,Jm=1.6,Ym=5.4,Xm=-5.98,Zm=-31.35,Qm=-32.75,$m={kombi:new q(4.4,0,-28.9),transport:new q(4.4,0,-33.9)};function eh(e,t){let n=new J;e.add(n);let{add:r,box:a,plane:o,cyl:s}=im(n),c=Gm-Km,l=(Gm+Km)/2,u=Wm(Rm(),[6,7],{clearcoat:.3,clearcoatRoughness:.35},.6),d=Wm(zm(),[7,1.6],{},.8),f=Wm(zm(),[.5,.5],{},.8),p=Wm(Im(`#3a3b3c`,55),[6,7],{},.6),m=Wm(Bm(),[.25,1.6],{},.7),h=new Z({map:qp(rm(),{repeat:[1,1]}),roughness:.6}),g=new Z({color:`#d9a514`,roughness:.7}),_=new Z({color:`#8c9298`,metalness:.5,roughness:.45}),v=new Z({color:`#1c1e21`,roughness:.55,metalness:.3}),y=new Z({color:`#0f1011`,roughness:.5}),b=new ll({color:`#9fb2c0`,roughness:.05,transparent:!0,opacity:.18,depthWrite:!1}),x=new ll({color:`#0d1318`,roughness:.08,metalness:.3,clearcoat:1}),S=new Z({color:`#141516`,roughness:.9});$(o(12,c,u,0,0,l,0,-Math.PI/2),.11),$(o(12,c,p,0,qm,l,0,Math.PI/2),.14),$(o(c,qm,d,-6,qm/2,l,Math.PI/2),.13),$(o(c,qm,d,6,qm/2,l,-Math.PI/2),.13);let C=new oc;C.moveTo(-6,0),C.lineTo(6,0),C.lineTo(6,qm),C.lineTo(-6,qm);let w=new ac;w.moveTo(-.62,0),w.lineTo(-.62,2.12),w.lineTo(.62,2.12),w.lineTo(.62,0),C.holes.push(w);let T=new Y(new Jc(C),f);T.position.z=Gm-.07,T.rotation.y=Math.PI,$(r(T),.13);let E=new oc;E.moveTo(-6,0),E.lineTo(6,0),E.lineTo(6,qm),E.lineTo(-6,qm);let D=new ac;D.moveTo(Jm,0),D.lineTo(Jm,3),D.lineTo(Ym,3),D.lineTo(Ym,0),E.holes.push(D);let O=new Y(new Jc(E),f);O.position.z=Km,$(r(O),.13);for(let e of[-26.5,-31.3,-36.5])$(a(2.6,.004,.1,g,4.5,.003,e),.11);$(a(.1,.004,10,g,3.15,.003,-31.5),.11);let k=Vp(61);for(let e=0;e<9;e++){let t=new Y(new Ds(.2+k()*.5,20),new Z({color:`#141210`,roughness:.3,transparent:!0,opacity:.35+k()*.3,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.set(-4+k()*9,.004+e*3e-4,Gm-1.5-k()*(c-3)),r(t)}for(let e of[-2.2,2.6])for(let[t,n]of[-27.6,-31.8,-35.8].entries()){$(a(.45,qm,.45,m,e,qm/2,n),.14),$(a(.47,.5,.47,h,e,.25,n),.14);let i=new Y(new X(.34,.34),new Z({map:nm(`P${e<0?`A`:`B`}${t+1}`,{w:256,h:256,bg:`#1d5fa8`,fg:`#ffffff`,font:`bold 110px Arial, sans-serif`})}));i.position.set(e,2.2,n+.231),r(i)}let ee=new Z({color:`#4d5257`,metalness:.3,roughness:.7});for(let[e,t,n]of[[-1,.09,.42],[-.6,.06,.16],[1.2,.12,.16]]){let i=new Y(new Os(t,t,c,14),ee);i.rotation.x=Math.PI/2,i.position.set(e,3,l),$(r(i),n)}let A=new Z({color:`#000`,emissive:`#e9fff2`,emissiveIntensity:3}),te=A.clone(),j=pm(),M=[];for(let[e,t]of[[-2.4,-31.6],[2,-29],[1,-35.4]])$(a(.2,.06,1.3,e===fm[0]&&t===fm[1]?te:A,e,3.1500000000000004,t),.55);for(let[e,t]of[[-2.2,-31.4],[2.2,-32]])M.push(am(n,`#dff5e8`,9,e,3.0500000000000003,t,13,1.3));let N=new Z({color:`#2a2724`,metalness:.7,roughness:.5}),P={},ne=Xe(t),re=-30.4,ie=-33.6,ae=-3.2,F=2.4,I=new Z({color:`#c4c7c9`,metalness:.5,roughness:.4});$(a(.06,1,3.200000000000003,I,ae,.5,-32),.15),$(a(.06,1.4,3.200000000000003,b,ae,1.7,-32),.14),$(a(.08,.06,3.200000000000003,I,ae,F,-32),.15),$(a(-2.8,.06,3.200000000000003,I,-9.2/2,F,-32),.15),$(a(2.8,F,.06,b,-9.2/2,F/2,ie),.14),$(a(2.8,1,.06,I,-9.2/2,.5,ie),.15),$(a(2.8-1,F,.06,b,-5.1,F/2,re),.14),$(a(.06,F,.06,I,-4.2,F/2,re),.15);for(let e of[ae,-5.96])for(let t of[re,ie])$(a(.07,F,.07,I,e,F/2,t),.15);$(a(2.8,.05,3.200000000000003,v,-9.2/2,2.4299999999999997,-32),.15);let L=new Y(new X(1.2,.25),new Z({map:nm(i(`VAKTKUR · GARAGE`,`GUARD BOOTH · GARAGE`),{w:768,h:160,bg:`#1d2024`,fg:`#e9e6dc`,font:i(`bold 80px "Arial Narrow", Arial, sans-serif`,`bold 68px "Arial Narrow", Arial, sans-serif`)})}));L.position.set(-3.16,2.1999999999999997,-32),L.rotation.y=Math.PI/2,r(L),$(a(.65,.05,3.0000000000000027,new Z({color:`#6d5a44`,roughness:.6}),-5.65,.76,-32),.16),$(a(.6,.72,.04,v,-5.65,.37,-30.549999999999997),.15),$(a(.6,.72,.04,v,-5.65,.37,-33.45),.15);let R=e=>{let t=document.createElement(`canvas`);t.width=256,t.height=160;let n=t.getContext(`2d`);n.fillStyle=`#16191b`,n.fillRect(0,0,256,160);let r=Vp(e.length*13);for(let e=0;e<1800;e++){let e=40+r()*80;n.fillStyle=`rgb(${e},${e},${e})`,n.fillRect(r()*256,r()*160,2,2)}n.fillStyle=`#e8ece9`,n.font=`bold 16px "Courier New", monospace`,n.fillText(e,10,22);let i=new xs(t);return i.colorSpace=pr,i};for(let[e,t]of[i(`CAM 03 ZON B`,`CAM 03 ZONE B`),`CAM 06 GARAGE`].entries()){let n=-31-e*.75;$(a(.06,.38,.6,y,-5.65,1,n),.42);let i=new Y(new X(.56,.34),new Z({color:`#000`,emissive:`#ffffff`,emissiveMap:R(t),emissiveIntensity:.9}));i.position.set(-5.615,1,n),i.rotation.y=Math.PI/2,r(i)}$(s(.04,.09,new Z({color:`#e8e4da`}),-5.5,.83,-33.1),.5);let z=new J;z.position.set(Xm,1.55,Zm),z.rotation.y=Math.PI/2,r(z),$(a(1.1,.75,.03,new Z({color:`#a8835a`,roughness:.95}),0,0,0,z),.15);let oe=i(`Mån Tis Ons Tor Fre Lör Sön`,`Mon Tue Wed Thu Fri Sat Sun`).split(` `),se=sm([{t:i(`JOURSCHEMA · V. 42`,`DUTY ROSTER · WK 42`),size:34,bold:!0},{t:i(`Väktare, garage/valv – vakthavande per dag`,`Guards, garage/vault – on duty per day`),size:22,color:`#555`},{t:` `,size:10},...ne.schedule.map((e,t)=>({t:`${oe[t].padEnd(4,` `)} ${e}`,size:32,mono:!0}))],{w:512,h:600,rule:!0}),ce=new Y(new X(.36,.42),new Z({map:se,emissive:`#ffffff`,emissiveMap:se,emissiveIntensity:.25,roughness:.9}));ce.position.set(-.2,.02,.02),z.add(ce);let le=sm([{t:i(`NYCKELSKÅPET`,`KEY CABINET`),size:40,bold:!0},{t:` `,size:12},{t:i(`Koden = vakthavande`,`Code = the on-duty`),size:34},{t:i(`väktares personal-`,`guard's staff`),size:34},{t:i(`nummer – BAKLÄNGES!`,`number – BACKWARDS!`),size:34,bold:!0},{t:` `,size:12},{t:i(`/Säkerhetschefen`,`/Head of Security`),size:28,color:`#444`}],{w:512,h:420,bg:`#fff59a`}),ue=new Y(new X(.25,.205),new Z({map:le,emissive:`#ffffff`,emissiveMap:le,emissiveIntensity:.25,roughness:.9}));ue.position.set(.25,.14,.022),ue.rotation.z=.06,z.add(ue);let B=sm([{t:i(`KAFFELISTA`,`COFFEE ROTA`),size:34,bold:!0},{t:i(`v.41 Rahimi`,`wk 41 Rahimi`),size:28},{t:i(`v.42 Holm`,`wk 42 Holm`),size:28},{t:i(`v.43 ???`,`wk 43 ???`),size:28}],{w:384,h:300,bg:`#dff0ff`}),V=new Y(new X(.18,.14),new Z({map:B,roughness:.9}));V.position.set(.28,-.17,.021),V.rotation.z=-.08,z.add(V);for(let[e,t]of[[-.2,.22],[.25,.23],[.28,-.11]]){let n=new Y(new Xc(.012,8,6),new Z({color:`#d02020`}));n.position.set(e,t,.03),z.add(n)}let de=new zo({colorWrite:!1,depthWrite:!1}),fe=(e,t,n,r,i,a)=>{let o=new Y(new Ts(e,t,.1),de);return o.position.set(i,a,.03),o.layers.set(5),o.userData.pick=n,r.add(o),o},pe=[fe(.4,.46,`schedule`,z,-.2,.02),fe(.29,.25,`note`,z,.25,.14)],me=new J;me.position.set(Xm,1.45,Qm),me.rotation.y=Math.PI/2,r(me),$(a(.52,.62,.02,v,0,0,.01,me),.16);for(let e of[-1,1])$(a(.02,.62,.14,_,e*.25,0,.08,me),.16);for(let e of[-1,1])$(a(.52,.02,.14,_,0,e*.3,.08,me),.16);let he=new J;me.add(he);for(let e=0;e<4;e++)a(.01,.01,.05,_,-.15+e*.1,.16,.04,he),a(.04,.06,.005,new Z({color:e<2?`#e0b80f`:`#2f8bff`}),-.15+e*.1,.1,.05,he);for(let e=0;e<2;e++)a(.12,.075,.004,new Z({color:`#f4f4f0`,emissive:`#ffffff`,emissiveIntensity:.1}),-.08+e*.16,-.12,.03,he);let H=new J;H.position.set(-.26,0,.15),me.add(H),$(a(.52,.62,.03,_,.26,0,0,H),.16),$(a(.14,.2,.02,y,.26,-.02,.022,H),.3);let ge=new Z({color:`#d6d8d4`,roughness:.5});for(let e=0;e<12;e++)a(.03,.03,.01,ge,.22+e%3*.04,.03-Math.floor(e/3)*.04,.034,H);let _e=new Z({color:`#000`,emissive:`#ff2020`,emissiveIntensity:4});a(.02,.02,.01,_e,.36,.09,.034,H);let ve=new Y(new X(.3,.06),new Z({map:nm(i(`NYCKLAR · PASSERKORT`,`KEYS · ACCESS CARDS`),{w:512,h:100,bg:`#1d2024`,fg:`#e9e6dc`,font:`bold 50px "Arial Narrow", Arial, sans-serif`})}));ve.position.set(.26,.22,.017),H.add(ve),pe.push(fe(.56,.66,`keypad`,me,0,0)),pe[2].position.z=.17,$(a(.8,.04,.2,om(`#fff1d8`,2.5),-9.2/2,2.37,-32),.5);let U=3.8000000000000003,ye=(()=>{let e=document.createElement(`canvas`);e.width=64,e.height=256;let t=e.getContext(`2d`);for(let e=0;e<256;e+=16){let n=t.createLinearGradient(0,e,0,e+16);n.addColorStop(0,`#9aa0a3`),n.addColorStop(.5,`#c7ccce`),n.addColorStop(1,`#6d7275`),t.fillStyle=n,t.fillRect(0,e,64,16)}let n=new xs(e);return n.colorSpace=pr,n.wrapS=n.wrapT=Wt,n.repeat.set(4,3),n})(),W=o(U,3,new Z({map:ye,metalness:.5,roughness:.45,side:2}),7/2,3/2,Km+.05);$(W,.14),$(a(4.1000000000000005,.45,.45,_,7/2,3.1,Km+.2),.16);for(let e of[1.55,5.45])$(a(.1,3,.12,_,e,3/2,Km+.06),.16);$(a(U,.04,.3,h,7/2,.02,Km+.3),.12);let be=new J;be.position.set(.85,1.3,Km+.06),r(be),$(a(.42,.56,.12,new Z({color:`#d0c9b0`,roughness:.5}),0,0,0,be),.2);let xe=document.createElement(`canvas`);xe.width=256,xe.height=96;let Se=new xs(xe);Se.colorSpace=pr;let Ce=new Y(new X(.3,.11),new zo({map:Se,toneMapped:!1}));Ce.position.set(0,.16,.062),be.add(Ce);let we=``,Te=(e,t)=>{if(e===we)return;we=e;let n=xe.getContext(`2d`);n.fillStyle=`#05080a`,n.fillRect(0,0,256,96),n.fillStyle=t,n.font=`bold 30px "Courier New", monospace`,n.textAlign=`center`,n.fillText(e,128,58),Se.needsUpdate=!0},G=s(.045,.03,new Z({color:`#1f9a40`}),-.08,-.06,.07,be);G.rotation.x=Math.PI/2;let Ee=s(.045,.03,new Z({color:`#c81e1e`}),.08,-.06,.07,be);Ee.rotation.x=Math.PI/2;let De=new Y(new X(.36,.06),new zo({map:nm(i(`PORT P-2  ▲ UPP   ■ STOPP`,`GATE P-2  ▲ UP   ■ STOP`),{w:512,h:80,bg:`#d0c9b0`,font:`bold 40px Arial, sans-serif`})}));De.position.set(0,-.19,.062),be.add(De);let Oe=new Y(new X(4.4,9),u);Oe.rotation.x=-Math.PI/2+Math.atan2(2.2,9),Oe.position.set(7/2,1.1,Km-9/2),$(r(Oe),.1);for(let e of[1.3,5.7])$(a(.2,3.5,9,d,e,1.75,Km-9/2),.12);$(o(14,8,new zo({color:`#0b1430`}),7/2,4,Km-9-2),.05);let ke=[],Ae=new J;Ae.position.set(7/2,2.2,Km-9-.5),r(Ae);for(let[e,t]of[-1.4,1.4].entries()){$(a(1.8,.7,1,new Z({color:`#e6e8ea`,roughness:.4}),t,.6,0,Ae),.3),$(a(1.3,.45,.9,x,t,1.15,0,Ae),.3);for(let[n,r]of[-.3,.3].entries()){let i=new Z({color:`#000`,emissive:n?`#2050ff`:`#ff2030`,emissiveIntensity:0});a(.35,.1,.2,i,t+r,1.43,0,Ae),ke.push({m:i,phase:e+n*.5,blue:n===1})}}Ae.visible=!1;let je=new Yl(`#2a5bff`,0,16,1.1);je.position.set(7/2,1.6,Km-1.5),r(je);let Me=(e,t,n,r)=>{let i=new Y(new Os(r,r,.22,20),S);i.rotation.z=Math.PI/2,i.position.set(t,r,n),e.add(i);let a=new Y(new Os(r*.55,r*.55,.23,14),_);a.rotation.z=Math.PI/2,a.position.set(t,r,n),e.add(a)},Ne=new J;Ne.position.copy($m.kombi),r(Ne);let Pe=new ll({color:`#5c1d1b`,roughness:.45,clearcoat:.6,clearcoatRoughness:.3});$(a(1.76,.62,4.6,Pe,0,.6,0,Ne),.16),$(a(1.62,.56,2.9,x,0,1.18,.45,Ne),.15),$(a(1.56,.06,2.8,Pe,0,1.48,.5,Ne),.16),$(a(1.8,.16,.12,y,0,.4,-2.32,Ne),.15),$(a(1.8,.16,.12,y,0,.4,2.32,Ne),.15);let Fe=om(`#fff2c8`,0);for(let e of[-1,1])a(.32,.14,.04,Fe,e*.62,.72,-2.31,Ne),a(.3,.14,.04,om(`#ff1a10`,1.2),e*.66,.74,2.31,Ne);for(let[e,t]of[[-.82,-1.45],[.82,-1.45],[-.82,1.45],[.82,1.45]])Me(Ne,e,t,.32);let Ie=new Y(new X(.52,.12),new Z({map:nm(`ABC 123`,{w:512,h:118,bg:`#f2f2ee`,fg:`#111`,font:`bold 84px "Arial Narrow", Arial, sans-serif`,border:`#1d4fa0`})}));Ie.position.set(0,.42,2.39),Ne.add(Ie);let Le=new Z({color:`#4c5446`,roughness:.95,side:2});{let e=new Y(new Os(.03,.03,.22,10),N);e.rotation.x=Math.PI/2,e.position.set(-.55,.26,2.36),Ne.add(e),P.kombi=ym(Ne,-.55,.26,2.48,{n:34,life:3,vel:[.02,.06,.45],spread:.02,rise:.04,drift:.2,size:[.05,.6],color:`#767d80`,opacity:.15,seed:61})}let Re=new Y(new Xc(1,24,12,0,Math.PI*2,0,Math.PI/2),Le);Re.scale.set(1.05,1.6,2.55),Re.position.set($m.kombi.x,0,$m.kombi.z),$(r(Re),.14);let ze=new J;ze.position.copy($m.transport),r(ze);let Be=new ll({color:`#cfd3d6`,roughness:.4,clearcoat:.5});$(a(2.1,1.75,3.9,Be,0,1.3,.7,ze),.16),$(a(2,1.25,1.5,Be,0,1.05,-1.95,ze),.16),$(a(1.9,.6,.05,x,0,1.3,-2.72,ze),.15),$(a(2.12,.12,5.4,new Z({color:`#1d4fa0`}),0,1,0,ze),.16);{let e=new Y(new Os(.035,.035,.24,10),N);e.rotation.x=Math.PI/2,e.position.set(-.7,.3,2.62),ze.add(e),P.transport=ym(ze,-.7,.3,2.76,{n:34,life:3,vel:[.02,.06,.45],spread:.025,rise:.04,drift:.2,size:[.06,.65],color:`#767d80`,opacity:.15,seed:62})}let Ve=nm(i(`SÄKERHETSTRANSPORT`,`SECURITY TRANSPORT`),{w:1024,h:160,bg:`#cfd3d6`,fg:`#1d2b44`,font:`bold 110px "Arial Narrow", Arial, sans-serif`});for(let e of[-1,1]){let t=new Y(new X(2.6,.4),new Z({map:Ve}));t.position.set(e*1.056,1.65,.7),t.rotation.y=e*Math.PI/2,ze.add(t)}let He=om(`#fff2c8`,0);for(let e of[-1,1])a(.3,.16,.04,He,e*.7,.75,-2.72,ze);for(let[e,t]of[[-.95,-1.7],[.95,-1.7],[-.95,1.6],[.95,1.6]])Me(ze,e,t,.4);let Ue=[];for(let e of[-1,1]){let t=new J;t.position.set(e*1.04,0,2.66),ze.add(t),a(1.02,1.7,.04,Be,-e*.51,1.3,0,t),Ue.push(t)}let We=new Z({color:`#141516`,roughness:.75}),Ge=[];for(let e=0;e<6;e++){let e=new Y(new Es(.16,.4,6,12),We);e.rotation.z=Math.PI/2,e.visible=!1,$(r(e),.22),Ge.push(e)}let Ke=new J;r(Ke);let qe=im(Ke),Je=-15.899999999999999/2;$(qe.plane(3.3,4.800000000000001,u,Je,0,-52.400000000000006/2,0,-Math.PI/2),.11),$(qe.plane(4.800000000000001,5,d,-9.6,2.5,-52.400000000000006/2,Math.PI/2),.13),$(qe.plane(4.800000000000001,5,d,-6.3,2.5,-52.400000000000006/2,-Math.PI/2),.13),$(qe.plane(3.3,5,d,Je,2.5,-28.6,0),.13),$(qe.plane(3.3,5,d,Je,2.5,-23.8,Math.PI),.13);for(let e=0;e<12;e++)$(qe.box(1.4,.18*(e+1),.28,m,-8.85,.18*(e+1)/2,-24.2-e*.28),.13);$(qe.box(.05,1,3.4,_,-8.1,2.2,-25.8),.15),$(qe.box(.06,2.1,.95,new Z({color:`#5b6560`,roughness:.45}),-6.33,1.05,-26.2),.16);let Ye=new Y(new X(.7,.2),new Z({map:nm(i(`TRAPPA B · GARAGE`,`STAIRWELL B · GARAGE`),{w:640,h:180,bg:`#1d2024`,fg:`#e9e6dc`,font:i(`bold 80px "Arial Narrow", Arial, sans-serif`,`bold 68px "Arial Narrow", Arial, sans-serif`)})}));Ye.position.set(-6.37,2.35,-26.2),Ye.rotation.y=-Math.PI/2,Ke.add(Ye);let Ze=new Yl(`#c8ffd8`,1.5,7,1.5);Ze.position.set(Je,3.6,-26),Ke.add(Ze),$(qe.box(.3,.12,.08,om(`#1fbf55`,1.4),-6.359999999999999,2.6,-25.3),.4),$(a(.06,2.1,.95,new Z({color:`#5b6560`,roughness:.45}),-5.97,1.05,-26.2),.16);let Qe=new J;Ke.add(Qe);let $e=new Z({color:`#0d0e10`,roughness:.8}),et=new zo({color:`#fff6d8`,transparent:!0,opacity:.12,blending:2,depthWrite:!1,toneMapped:!1}),tt=[];for(let e=0;e<4;e++){let t=new J,n=new Y(new Es(.22,.9,6,12),$e);n.position.y=.9,t.add($(n,.82));let r=new Y(new Xc(.16,14,10),$e);r.position.y=1.62,t.add($(r,.9));let i=new Y(new Ts(.55,.9,.05),new Z({color:`#202428`,roughness:.3}));i.position.set(0,1,.3),e===0&&t.add($(i,.3));let a=new Y(new ks(.5,4,16,1,!0),et);a.rotation.x=-Math.PI/2-.25,a.position.set(.15,1.35,2.1),t.add(a),t.position.set(-8.85,.18*(3+e*2),-24.2-(3+e*2)*.28-.2),t.rotation.y=Math.PI,Qe.add(t),tt.push(t)}Qe.visible=!1;let nt=new q;function rt(e,t,n,r){let a=n.shared,o=a.police,s=j(!!o?.powerCut,e);for(let e of M)e.intensity=s===`on`?9:s===`cut`?1.8:0,e.color.set(s===`on`?`#dff5e8`:`#ff6a50`);A.emissiveIntensity=s===`on`?3:s===`cut`?.4:0,A.emissive.set(s===`on`?`#e9fff2`:`#ff6a50`),te.emissive.copy(A.emissive),te.emissiveIntensity=s===`on`?3*dm(e):0;let c=a.kur.solvedAt!==null;H.rotation.y=c?-1.8*em($p((r-a.kur.solvedAt)/800)):0,_e.emissive.set(c?`#22ff66`:r<a.kur.lockUntil?`#ffb020`:`#ff2020`),he.visible=c,Re.visible=!c;let l=a.tech.runningAt!==null,u=a.portOpenAt===null?0:$p((r-a.portOpenAt)/5e3);W.scale.y=Math.max(.02,1-u*.98),W.position.y=3-3*W.scale.y/2,ye.offset.y=-u*3,W.visible=u<.99,Te(a.portOpenAt===null?l?i(`RESERVKRAFT`,`BACKUP POWER`):i(`STRÖMLÖS`,`NO POWER`):u<1?i(`ÖPPNAR …`,`OPENING …`):i(`ÖPPEN`,`OPEN`),a.portOpenAt===null?l?`#ffb020`:`#ff3b30`:`#3dff7a`);let d=t=>Math.sin(e*12+t*Math.PI)>0?6:.2,f=a.portOpenAt!==null||!!o?.blue;Ae.visible=f;for(let e of ke)e.m.emissiveIntensity=f?d(e.phase):0;je.intensity=f?(a.portOpenAt===null?1.2:3+7*u)*(.6+.4*Math.sin(e*9)):0,Qe.visible=!!o?.swat,tt.forEach((t,n)=>t.position.x=-8.85+Math.sin(e*2+n)*.04);let p=a.finale,m=p.car;Ue.forEach((e,t)=>e.rotation.y=(t?-1:1)*(m===`transport`&&a.portOpenAt!==null?1.6:0));let h=m===`kombi`?Ne:m===`transport`?ze:null,g=p.loadStart===null?0:p.bags;Ge.forEach((e,t)=>{if(e.visible=!!h&&t<g,e.visible&&h){let n=$m[m];e.position.set(n.x-.4+t%2*.8,m===`kombi`?.95+Math.floor(t/2)*.3:.55+Math.floor(t/2)*.32,n.z+(m===`kombi`?1.6:2.2)-Math.floor(t/2)*.05)}}),Fe.emissiveIntensity=m===`kombi`&&p.loadStart!==null?4:0;for(let t of[`kombi`,`transport`]){let n=P[t],i=p.departAt!==null&&r-p.departAt>ct[t].driveMs;n.strength=m===t&&p.loadStart!==null&&!i?p.departAt===null?.7:1:0,n.tick(e)}He.emissiveIntensity=m===`transport`&&p.loadStart!==null?4:0;for(let e of[`kombi`,`transport`]){let t=e===`kombi`?Ne:ze,n=$m[e];if(p.departAt!==null&&m===e){let i=$p((r-p.departAt)/ct[e].driveMs),a=i*i,o=[n,new q(3.5,0,Km+1.5),new q(3.5,0,Km-.5),new q(3.5,2.2,Km-9)],s=Math.min(2,Math.floor(a*3)),c=a*3-s;nt.copy(o[s]).lerp(o[s+1],c),t.position.copy(nt),t.rotation.x=s===2?-Math.atan2(2.2,9):0,Ge.forEach(e=>e.visible=!1)}else t.position.copy(n),t.rotation.x=0}}return{update:rt,picks:pe}}var th=4.7,nh=-9.4,rh=-13.4,ih=pe[3],ah=.95,oh=new q(4.66,1.32,-11.25),sh=e=>oh.z-.605+e*.11;function ch(e,t){let n=new J;e.add(n);let{add:r,box:a,plane:o,cyl:s}=im(n),c=(B+th)/2,l=-22.8/2,u=th-B,d=Wm(zm(`#5d6670`,41),[2,1.4],{},.8),f=Wm(Vm(),[1.8,2],{clearcoat:.4,clearcoatRoughness:.25},.4),p=new Z({color:`#8a9096`,metalness:.35,roughness:.5,roughnessMap:qp(Zp(),{srgb:!1})}),m=new Z({color:`#202326`,roughness:.6,metalness:.3}),h=new Z({color:`#111214`,roughness:.5}),g=new Z({color:`#7d8389`,metalness:.6,roughness:.45}),_=new Z({color:`#2f5a3a`,metalness:.3,roughness:.55}),v=new Z({color:`#d9a514`,roughness:.6});$(o(u,4,f,c,0,l,0,-Math.PI/2),.13),$(o(u,4,d,c,V,l,0,Math.PI/2),.17),$(o(4,V,d,th,V/2,l,-Math.PI/2),.15),$(o(u,V,d,c,V/2,nh,Math.PI),.15),$(o(u,V,d,c,V/2,rh,0),.15);let y=ih+ah/2,b=ih-ah/2;$(o(nh-y,V,d,B+.002,V/2,(nh+y)/2,Math.PI/2),.15),$(o(b-rh,V,d,B+.002,V/2,(b+rh)/2,Math.PI/2),.15),$(o(ah,V-2.1,d,B+.002,2.1+(V-2.1)/2,ih,Math.PI/2),.15),$(a(.05,.004,1.6,v,3.8000000000000003,.002,oh.z),.13);let x=new J;x.position.set(B,0,ih+ah/2),r(x),$(a(.05,2.08,.8899999999999999,new Z({color:`#5b6560`,roughness:.45,metalness:.35}),.025,1.04,-.95/2,x),.22),$(a(.06,.03,.16,p,-.02,1.05,-.95+.17,x),.2);let S=new Y(new X(.6,.3),new Z({map:nm(i(`TEKNIK`,`TECH ROOM`),{w:512,h:256,bg:`#f2d23a`,sub:i(`OBEHÖRIGA ÄGA EJ TILLTRÄDE`,`AUTHORISED STAFF ONLY`),font:i(`bold 96px Arial, sans-serif`,`bold 78px Arial, sans-serif`)}),roughness:.5}));S.position.set(-.004,1.6,-.95/2),S.rotation.y=-Math.PI/2,x.add($(S,.2));let C=new Z({color:`#000`,emissive:`#ff2a2a`,emissiveIntensity:5});$(a(.03,.14,.09,h,B-.015,1.22,b-.16),.3),$(a(.01,.02,.02,C,B-.032,1.27,b-.16),.4);let w=new J;w.position.copy(oh),r(w),$(a(.08,.94,1.42,p,0,0,0,w),.24),$(a(.02,.86,1.34,m,-.045,0,0,w),.24);let T=[],E=new zo({colorWrite:!1,depthWrite:!1});for(let e=0;e<12;e++){let t=Math.floor(e/4),n=e%4,r=.24-t*.25,i=-.45+n*.3,o=a(.06,.15,.09,h,-.07,r,i,w),s=a(.035,.06,.03,new Z({color:`#d8d6cf`,roughness:.4}),-.105,r-.03,i,w),c=new Z({color:`#000`,emissive:`#330000`,emissiveIntensity:2});a(.01,.015,.015,c,-.101,r+.055,i+.03,w);let l=new Y(new X(.07,.05),new zo({map:nm(String(e+1),{w:128,h:96,bg:`#ecebe4`,font:`bold 80px Arial, sans-serif`})}));l.position.set(-.056,r-.1,i),l.rotation.y=-Math.PI/2,w.add(l);let u=new Y(new Ts(.14,.22,.22),E);u.position.set(-.09,r-.02,i),u.layers.set(5),u.userData.breaker=e,w.add(u),$(o,.25),T.push({lever:s,led:c,pick:u,base:o})}let D=new Y(new X(.5,.08),new zo({map:nm(i(`RESERVKRAFT · GRUPP 1–12`,`BACKUP POWER · GROUP 1–12`),{w:640,h:100,bg:`#1d2024`,fg:`#e5e9ec`,font:i(`bold 52px "Arial Narrow", Arial, sans-serif`,`bold 48px "Arial Narrow", Arial, sans-serif`)})}));D.position.set(-.042,.39,0),D.rotation.y=-Math.PI/2,w.add(D);let O=et(t),k=Vp(Number.parseInt(t.replace(/\W/g,``).slice(0,6),36)||7),ee=ze(Array.from({length:12},(e,t)=>t),k),A=ze(Array.from({length:12},(e,t)=>t),k),te=new Set;for(;te.size<2;){let e=Math.floor(k()*12);e!==O&&te.add(e)}let j=oh.y+.47,M=new Z({color:`#4b5056`,metalness:.5,roughness:.5});for(let e=0;e<12;e++){let t=-9.9-ee[e]*(3/11),n=sh(e),i=1.98+A[e]*.055,o=4.65-e%3*.035,s=new zs([new q(o,V,t),new q(o,i+.06,t),new q(o,i,t+Math.sign(n-t)*.06),new q(o,i,n-Math.sign(n-t)*.06),new q(o,i-.06,n),new q(o,j,n)],!1,`catmullrom`,.05),c=new Y(new Qc(s,60,.016,8),g),l=e===O?.86:te.has(e)?.44:.2;$(r(c),l),$(tm(r(new Y(new Qc(s,60,.032,6),g)),1),l),$(a(.07,.05,.06,M,4.63,j-.01,n),l),$(tm(a(.08,.09,.05,M,4.63,j-.02,n),1),Math.max(l,.34));let u=new Y(new X(.075,.06),new zo({map:nm(String(e+1),{w:128,h:100,bg:`#e8e3cf`,font:`bold 78px "Arial Narrow", Arial, sans-serif`})}));u.position.set(4.696000000000001,j+.075,n),u.rotation.y=-Math.PI/2,$(r(u),.15)}let N=new J;N.position.set(3.3,0,-12.75),r(N),$(a(1.7,.12,.9,m,0,.06,0,N),.2);let P=a(.8,.62,.6,_,-.25,.45,0,N),ne=[];for(let e=0;e<6;e++)ne.push(a(.82,.02,.62,_,-.25,.8+e*.035,0,N));let re=new Y(new Os(.24,.24,.55,20),new Z({color:`#c7c9c4`,metalness:.4,roughness:.4}));re.rotation.z=Math.PI/2,re.position.set(.48,.42,0),N.add(re);let ie=a(.08,.7,.62,h,-.7,.5,0,N),ae=new Y(new Os(.05,.05,V-1,12),new Z({color:`#5a4c40`,metalness:.6,roughness:.6}));ae.position.set(-.1,1+(V-1)/2,-.2),N.add(ae);let F=a(.02,.3,.4,h,.25,.75,.31,N);F.rotation.y=Math.PI/2;let I=new Z({color:`#000`,emissive:`#ff3010`,emissiveIntensity:3});a(.03,.03,.01,I,.15,.82,.325,N);let L=new Y(new X(.36,.1),new zo({map:nm(i(`RESERVKRAFT 40 kVA`,`BACKUP POWER 40 kVA`),{w:512,h:140,bg:`#1d2024`,fg:`#e5e9ec`,font:i(`bold 56px "Arial Narrow", Arial, sans-serif`,`bold 52px "Arial Narrow", Arial, sans-serif`)})}));L.position.set(.25,.95,.33),N.add(L),$(N,.2);let R=new xs((()=>{let e=document.createElement(`canvas`);e.width=128,e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#0a0b0c`,t.fillRect(0,0,128,256);let n=Vp(5);for(let e=8;e<256;e+=14)for(let r=10;r<120;r+=16)t.fillStyle=n()<.6?n()<.7?`#36ff7a`:`#ffb020`:`#1a2a1e`,t.fillRect(r,e,5,3);return e})());R.colorSpace=pr,R.wrapS=R.wrapT=Wt;let z=new Z({color:`#000`,emissive:`#ffffff`,emissiveMap:R,emissiveIntensity:1.6});for(let e=0;e<3;e++){let t=1.75+e*.66;$(a(.6,2,.9,h,t,1,-9.870000000000001),.55),$(o(.5,1.8,z,t,1,-10.33,Math.PI),.6)}let oe=new Y(new Os(.16,.16,u,20),p);oe.rotation.z=Math.PI/2,oe.position.set(c,V-.22,-9.700000000000001),$(r(oe),.16);let se=new J;se.position.set(3.9,2.35,-13.38),r(se),$(a(.7,.46,.04,m,0,0,0,se),.2),$(a(.6,.36,.02,h,0,0,.012,se),.18);let ce=new J;ce.position.set(0,-.2,.03),se.add(ce);for(let e=0;e<7;e++)a(.6,.025,.02,p,0,.03+e*.05,0,ce);let le=new Y(new X(.32,.08),new zo({map:nm(`VENT · TA 2`,{w:384,h:96,bg:`#d9a514`,fg:`#111`,font:`bold 60px "Arial Narrow", Arial, sans-serif`})}));le.position.set(0,.3,.025),se.add(le);let ue=new Z({color:`#000`,emissive:`#ff2010`,emissiveIntensity:2.5});a(.1,.06,.03,h,.3,-.28,.02,se),a(.03,.03,.01,ue,.3,-.28,.04,se);let de=am(n,`#ff3020`,6,c,V-.12,l,8,1.45),fe=new Yl(`#ff6040`,1.2,6,1.6);fe.position.set(c,1.4,l),r(fe);let pe=a(.2,.06,1,om(`#ff3020`,1.5),c,V-.04,l);$(pe,.4),$(s(.075,.05,new Z({color:`#3d342c`,metalness:.6,roughness:.7}),3.2,V-.42,-12.95),.2);let me=ym(n,3.2,V-.42,-12.95,{n:40,life:5,vel:[-.1,.07,.14],spread:.04,rise:.015,drift:.28,size:[.07,.95],color:`#8c8780`,opacity:.24,seed:33});me.strength=0;let he=Sm(n,oh.x-.12,oh.y+.1,oh.z,{n:24,speed:.9,seed:21}),H=0,ge=0,_e=0;function ve(e,t,n,r){let i=n.shared,a=i.kur.solvedAt!==null,o=a?-1.45:0;o!==ge&&(H=x.rotation.y,ge=o,_e=r),x.rotation.y=H+(ge-H)*em($p((r-_e)/900)),C.emissive.set(a?`#22ff66`:`#ff2a2a`),ce.rotation.x=n.robbers.some(e=>e.s.vent!==null||e.s.sp===11)||i.central.unlockedAt!==null?1.3:0;let s=i.tech;T.forEach((e,t)=>{let r=s.breakerAt!==null&&t===O;e.lever.position.y=.24-Math.floor(t/4)*.25+(r?.03:-.03),e.led.emissive.set(r?`#22ff66`:n.selectedBreaker===t?`#ffb020`:`#330000`)});let c=s.temp,l=.2+.78*c;$(P,l);for(let e of ne)$(e,l-.03);$(ie,.2+.4*c),$(ae,.2+.78*c);let u=s.runningAt!==null,d=s.crank!==null,f=u?.004:d?.008:0;N.position.set(3.3+(Math.random()-.5)*f,(Math.random()-.5)*f,-12.75),I.emissive.set(u?`#22ff66`:d?`#ffb020`:`#ff3010`),ue.emissive.set(u?`#22ff66`:`#ff2010`),de.color.set(u?`#e8f4ff`:`#ff3020`),de.intensity=u?8:6+(d?1.5*Math.sin(e*30):0),fe.color.set(u?`#cfe0ff`:`#ff6040`),pe.material.emissive.set(u?`#e8f4ff`:`#ff3020`),z.emissiveIntensity=1.2+.6*Math.sin(e*7+Math.sin(e*13));let p=Math.floor(e/.2);R.offset.set(Math.floor((Math.sin(p*12.9)*43758.5%1+1)%1*8)/8,Math.floor((Math.sin(p*7.3)*23421.6%1+1)%1*18)*(14/256)),me.strength=u?.75:d?.3+.5*Math.max(0,Math.sin(e*9)):0,me.tick(e),s.breakerAt!==null&&he.burst(s.breakerAt/1e3),he.tick(e)}return{update:ve,breakerPicks:T.map(e=>e.pick),live:O}}var lh=-4.6,uh=-15.9,dh=-20.5,fh=pe[5],ph=.95,mh=new q(-4.58,1.62,-36.4/2),hh={valv:{pos:new q(-2.25,2.38,fe+5.15),look:new q(.3,.95,fe+.7),fov:74},korrS:{pos:new q(.95,2.5,de+.32),look:new q(-.1,.9,-5),fov:66},korrN:{pos:new q(.62,2.5,fe-.28),look:new q(0,.75,-15),fov:64},teknik:{pos:new q(1.35,2.5,-13.1),look:new q(4.6,1.2,-11),fov:74},garage:{pos:new q(5.6,2.95,de-.4),look:new q(-1.5,.6,de-9),fov:78},port:{pos:new q(-3,2.9,-32.4),look:new q(3.5,.9,-37.6),fov:70},trappa:{pos:new q(-6.6,4.4,-28.3),look:new q(-8.8,1.2,-24.6),fov:72},gata:{pos:new q(3.5,4.2,Km-11.2),look:new q(3.5,.6,Km+.5),fov:60}};function gh(e,t){let n=new J;e.add(n);let{add:r,box:a,plane:o}=im(n),s=-B-lh,c=4.6,l=(lh-B)/2,u=-36.4/2,d=Ct(t),f=Wm(zm(`#4f565c`,81),[2.3,1.4],{},.7),p=Wm(Hm(),[1.75,2.3],{},.5),m=Wm(Um(),[1.75,2.3],{},.5),h=new Z({color:`#1a1d21`,roughness:.55,metalness:.3}),g=new Z({color:`#0d0e10`,roughness:.4}),_=new Z({color:`#3b4148`,roughness:.5,metalness:.2});$(o(s,c,p,l,0,u,0,-Math.PI/2),.13),$(o(s,c,m,l,V,u,0,Math.PI/2),.16),$(o(c,V,f,lh,V/2,u,Math.PI/2),.15),$(o(s,V,f,l,V/2,uh,Math.PI),.15),$(o(s,V,f,l,V/2,dh,0),.15);let v=fh+ph/2,y=fh-ph/2;$(o(uh-v,V,f,-B-.002,V/2,(uh+v)/2,-Math.PI/2),.15),$(o(y-dh,V,f,-B-.002,V/2,(y+dh)/2,-Math.PI/2),.15),$(o(ph,V-2.1,f,-B-.002,2.1+(V-2.1)/2,fh,-Math.PI/2),.15);let b=new J;b.position.set(-B,0,fh-ph/2),r(b),$(a(.06,2.08,.8899999999999999,new Z({color:`#4a5258`,roughness:.4,metalness:.5}),-.03,1.04,ph/2,b),.2);let x=new Y(new X(.62,.26),new Z({map:nm(i(`SÄKERHETSCENTRAL`,`SECURITY ROOM`),{w:640,h:270,bg:`#9b1c1c`,fg:`#ffffff`,sub:i(`ENDAST BEHÖRIGA`,`AUTHORISED ONLY`),font:`bold 74px "Arial Narrow", Arial, sans-serif`})}));x.position.set(.004,1.62,ph/2),x.rotation.y=Math.PI/2,b.add($(x,.2)),$(a(.04,.22,.12,g,.02,1.15,.14,b),.25);for(let e of[-1,1])$(a(.08,2.1,.05,h,-B+.02,1.05,fh+e*(ph/2-.02)),.18);$(a(.08,.05,ph,h,-B+.02,2.1,fh),.18);let S=[],C=[],w=[],T=new zo({colorWrite:!1,depthWrite:!1});$(a(.08,1.15,2.95,g,-4.56,1.68,u),.3);for(let e=0;e<8;e++){let t=Math.floor(e/4),n=-17.119999999999997-e%4*.72,i=2-t*.52,o=new Y(new X(.64,.4),new zo({color:`#0a0c0e`}));o.position.set(-4.515,i,n),o.rotation.y=Math.PI/2,r(o),$(o,.45),S.push(o);let s=new Y(new X(.12,.05),new zo({map:nm(`K${e+1}`,{w:128,h:56,bg:`#0d0e10`,fg:`#e5e9ec`,font:`bold 40px "Courier New", monospace`})}));s.position.set(-4.513999999999999,i-.235,n-.22),s.rotation.y=Math.PI/2,r(s);let c=new Z({color:`#000`,emissive:`#203020`,emissiveIntensity:2});a(.01,.025,.025,c,-4.513999999999999,i-.235,n+.26),C.push(c);let l=new Y(new Ts(.1,.46,.68),T);l.position.set(-4.4799999999999995,i,n),l.layers.set(5),l.userData.pick=`k${e}`,r(l),w.push(l)}let E=new Y(new X(1.2,.12),new zo({map:nm(i(`ÖVERVAKNING · LIND & SJÖBERG`,`SURVEILLANCE · LIND & SJÖBERG`),{w:1024,h:100,bg:`#0d0e10`,fg:`#9fb0bc`,font:`bold 56px "Arial Narrow", Arial, sans-serif`})}));E.position.set(-4.513999999999999,2.4,u),E.rotation.y=Math.PI/2,r(E),$(a(.8,.06,2.6,_,-3.7499999999999996,.76,u),.18),$(a(.75,.72,.05,h,-3.7499999999999996,.37,-16.93),.15),$(a(.75,.72,.05,h,-3.7499999999999996,.37,-19.47),.15),$(a(.25,.02,.6,g,-3.6499999999999995,.8,-17.849999999999998),.3);let D=new J;D.position.set(-3.8499999999999996,.86,-18.82),D.rotation.z=.35,r(D),$(a(.34,.12,.46,new Z({color:`#d0c9b0`,roughness:.5}),0,0,0,D),.25);let O=new Z({color:`#7a0f0f`,emissive:`#ff2020`,emissiveIntensity:.6,roughness:.4}),k=new Y(new Os(.07,.07,.05,24),O);k.position.set(.02,.08,-.07),D.add(k);let ee=document.createElement(`canvas`);ee.width=256,ee.height=128;let A=new xs(ee);A.colorSpace=pr;let te=new Y(new X(.2,.1),new zo({map:A,toneMapped:!1}));te.rotation.set(-Math.PI/2,0,-Math.PI/2),te.position.set(.02,.062,.13),D.add(te);let j=``,M=(e,t)=>{if(e===j)return;j=e;let n=ee.getContext(`2d`);n.fillStyle=`#05080a`,n.fillRect(0,0,256,128),n.fillStyle=`#9fb0bc`,n.font=`bold 22px "Courier New", monospace`,n.textAlign=`center`,n.fillText(i(`PORTLÅS P-2`,`GATE LOCK P-2`),128,34),n.fillStyle=t,n.font=`bold 34px "Courier New", monospace`,n.fillText(e,128,88),A.needsUpdate=!0},N=new Y(new Ts(.4,.3,.55),T);N.position.copy(D.position),N.layers.set(5),N.userData.pick=`unlock`,r(N),w.push(N);let P=new J;P.position.set(-3.05,0,-18.099999999999998),r(P),$(a(.48,.08,.46,new Z({color:`#202631`,roughness:.9}),0,.48,0,P),.25),$(a(.06,.55,.46,new Z({color:`#202631`,roughness:.9}),.24,.8,0,P),.2);let ne=document.createElement(`canvas`);ne.width=512,ne.height=320;let re=ne.getContext(`2d`);re.fillStyle=`#0d1014`,re.fillRect(0,0,512,320),re.strokeStyle=`#3c4650`,re.lineWidth=3,[i(`VALV`,`VAULT`),i(`ZON B`,`ZONE B`),i(`TEKNIK`,`TECH`),i(`CENTRAL`,`SECURITY`),`GARAGE`,i(`TRAPPA B`,`STAIRS B`),i(`ENTRÉ`,`LOBBY`),i(`KASSA`,`TELLERS`)].forEach((e,t)=>{let n=20+t%4*122,r=40+Math.floor(t/4)*140;re.strokeRect(n,r,108,110),re.fillStyle=`#ffb020`,re.beginPath(),re.arc(n+54,r+50,14,0,7),re.fill(),re.fillStyle=`#c9d2da`,re.font=`bold 18px Arial`,re.textAlign=`center`,re.fillText(e,n+54,r+95)}),re.fillStyle=`#ff3b30`,re.font=`bold 22px Arial`,re.fillText(i(`LARM AKTIVT`,`ALARM ACTIVE`),256,26);let ie=new xs(ne);ie.colorSpace=pr;let ae=new Y(new X(1.1,.7),new Z({color:`#000`,emissive:`#ffffff`,emissiveMap:ie,emissiveIntensity:.9}));ae.position.set(l-.3,1.6,-20.48),r($(ae,.35));let F=document.createElement(`canvas`);F.width=128,F.height=256;{let e=F.getContext(`2d`);e.fillStyle=`#08090a`,e.fillRect(0,0,128,256);for(let t=10;t<256;t+=22){e.fillStyle=`#16191c`,e.fillRect(6,t-6,116,18);for(let n=14;n<120;n+=13)e.fillStyle=(n*7+t)%5==0?`#ffb020`:(n+t*3)%4==0?`#1a2a1e`:`#36ff7a`,e.fillRect(n,t,4,3)}}let I=new xs(F);I.colorSpace=pr,I.wrapS=Wt;let L=new Z({color:`#111`,emissive:`#ffffff`,emissiveMap:I,emissiveIntensity:1.3,roughness:.4});for(let e=0;e<2;e++)$(a(.6,1.8,.7,g,-4.1499999999999995+e*.68,.9,-16.28),.5),$(o(.5,1.6,L,-4.1499999999999995+e*.68,.95,-16.64,Math.PI),.55);let R=new J;R.position.set(-3.2,V-.01,-18.2),r(R),$(a(.74,.02,.74,h,0,0,0,R),.16);let z=a(.7,.02,.7,new Z({color:`#6f7378`,metalness:.6,roughness:.4}),0,-.012,0,R);am(n,`#bcd2ff`,6.5,l,V-.12,u,8,1.45);let oe=new Yl(`#7d9bff`,1.6,6,1.5);oe.position.set(-3.3999999999999995,1.6,u),r(oe),$(a(.9,.05,.2,om(`#dfe8ff`,1.8),l+.4,V-.03,u),.45);let se=new Z({color:`#e7e3da`,roughness:.35}),ce=new J;ce.position.set(-3.5199999999999996,.79,-17.25),r(ce),$(r(new Y(new Os(.042,.038,.1,18,1,!0),se),ce).translateY(.05),.62),$(r(new Y(new Ds(.04,18),new Z({color:`#2a1a10`,roughness:.15})),ce).translateY(.085).rotateX(-Math.PI/2),.7);let le=new Y(new Zc(.025,.007,8,14,Math.PI),se);le.position.set(.045,.05,0),le.rotation.z=-Math.PI/2,$(r(le,ce),.5);let ue=ym(n,-3.5199999999999996,.88,-17.25,{n:16,life:3.2,vel:[0,.1,0],spread:.02,rise:.015,drift:.035,size:[.025,.16],color:`#e2e6e6`,opacity:.26,seed:5}),de=-1;function fe(e,t,n,r){let a=n.shared.central,o=n.robbers.some(e=>e.s.sp===11)||a.unlockedAt!==null;o&&de<0&&(de=r),o||(de=-1),b.rotation.y=de<0?0:-1.4*em($p((r-de)/900)),z.rotation.x=n.robbers.some(e=>e.s.sp===11||e.s.vent!==null)||a.unlockedAt!==null?-1.4:0,z.position.z=z.rotation.x?-.33:0,z.position.y=z.rotation.x?-.33:-.012,C.forEach((e,t)=>e.emissive.set(a.loops.has(t)?`#ffb020`:`#203020`));let s=r<a.lockUntil;M(a.unlockedAt===null?s?i(`SPÄRRAD`,`BLOCKED`):i(`LÅST`,`LOCKED`):i(`UPPLÅST`,`UNLOCKED`),a.unlockedAt===null?s?`#ffb020`:`#ff3b30`:`#3dff7a`),O.emissiveIntensity=a.unlockedAt===null?.5+.4*Math.sin(e*4):0,O.emissive.set(a.unlockedAt===null?`#ff2020`:`#20ff60`);let c=Math.floor(e/.16),l=Math.sin(c*17.1)*43758.5;I.offset.x=Math.floor((l-Math.floor(l))*9)/9.85,ue.tick(e)}return{update:fe,screens:S,picks:w,order:d.order,camNames:St}}function _h(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new so,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=vh(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=vh(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function vh(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Ka(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var yh=3.25,bh=.72,xh=1.6,Sh=e=>new q(-3.2+e%5*xh,yh,-18.2+Math.floor(e/5)*xh);function Ch(){let{c:e,g:t}=Hp(256,256),n=Vp(71);t.fillStyle=`#8c9095`,t.fillRect(0,0,256,256);for(let e=0;e<900;e++){let e=120+n()*60;t.fillStyle=`rgba(${e},${e+4},${e+8},0.25)`,t.fillRect(n()*256,n()*256,2+n()*30,2+n()*6)}t.fillStyle=`rgba(40,40,40,0.55)`,t.fillRect(0,124,256,4);for(let e=8;e<256;e+=24)t.beginPath(),t.arc(e,118,2.4,0,7),t.arc(e,134,2.4,0,7),t.fill();for(let e=0;e<30;e++)t.fillStyle=`rgba(60,50,40,${.05+n()*.08})`,t.beginPath(),t.arc(n()*256,n()*256,5+n()*25,0,7),t.fill();return e}function wh(){let{c:e,g:t}=Hp(128,128);t.clearRect(0,0,128,128),t.fillStyle=`#6f7378`;for(let e=0;e<128;e+=16)t.fillRect(e,0,6,128);return t.fillRect(0,0,128,8),t.fillRect(0,120,128,8),e}function Th(e){let{c:t,g:n}=Hp(256,128);n.clearRect(0,0,256,128),n.fillStyle=`rgba(232,190,30,0.92)`,n.font=`bold 76px "Arial Narrow", Arial, sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(e,128,66);let r=Vp(e.length*31+e.charCodeAt(2));n.globalCompositeOperation=`destination-out`;for(let e=0;e<160;e++)n.fillRect(r()*256,r()*128,2+r()*4,1+r()*3);return qp(t,{wrap:!1})}function Eh(e){return e?e.kind===`code`?i(`Gul stenciltext på väggen: ${e.code}`,`Yellow stencil on the wall: ${e.code}`):e.kind===`rust`?i(`Rostig plåt och vatten som droppar`,`Rusty metal and dripping water`):e.kind===`cables`?i(`Ett tjockt kabelknippe längs golvet`,`A thick bundle of cables along the floor`):e.below===`korridor`?i(`Galler i golvet – under dig: en korridor med lysrör`,`A grate in the floor – below you: a corridor with strip lights`):e.below===`teknik`?i(`Gallret ner till teknikrummet`,`The grate down to the tech room`):i(`Galler i golvet – blått sken av bildskärmar under dig`,`A grate in the floor – blue glow of monitors below you`):null}function Dh(e,t){let n=new J;e.add(n);let r=xt(t),i=bh,a=i/2,o=new Z({map:qp(Ch(),{repeat:[1,1]}),color:`#7a7f86`,metalness:.45,roughness:.55,side:2}),s=[],c=(e,t,n,r)=>{let i=new X(e,t);i.applyMatrix4(new Ai().makeRotationFromEuler(r).setPosition(n)),s.push(i)},l=[],u=new Z({map:qp(wh(),{wrap:!1}),alphaTest:.5,metalness:.6,roughness:.4,side:2}),d={korridor:new zo({color:`#cfe8d8`}),teknik:new zo({color:`#ff5030`}),central:new zo({color:`#4c7dff`})},f=new Z({color:`#6a3a1c`,roughness:.9,transparent:!0,opacity:.8,depthWrite:!1}),p=new Z({color:`#141414`,roughness:.6}),m=[];for(let e=0;e<30;e++){let t=Sh(e),o=r.marks.get(e);if(o?.kind===`grille`){let e=new Y(new X(i,i),u);e.rotation.x=-Math.PI/2,e.position.set(t.x,t.y-a,t.z),n.add(e);let r=new Y(new X(i,i),d[o.below]);r.rotation.x=-Math.PI/2,r.position.set(t.x,t.y-a-.12,t.z),n.add(r);for(let e=0;e<4;e++){let[n,r]=gt[e];c(i,.12,new q(t.x+n*a,t.y-a-.06,t.z+r*a),new Bi(0,n?Math.PI/2:0,0))}}else c(i,i,new q(t.x,t.y-a,t.z),new Bi(-Math.PI/2,0,0));c(i,i,new q(t.x,t.y+a,t.z),new Bi(Math.PI/2,0,0));for(let s=0;s<4;s++){let[u,d]=gt[s],f=vt(e,s),p=f>=0?_t(e,f):``,m=new q(t.x+u*a,t.y,t.z+d*a),h=new Bi(0,u?Math.PI/2:0,0);if(f>=0&&r.open.has(p)){if(e<f){let e=.8800000000000001,n=new q(t.x+u*.8,t.y,t.z+d*.8);u?(c(e,i,new q(n.x,t.y-a,n.z),new Bi(-Math.PI/2,0,0)),c(e,i,new q(n.x,t.y+a,n.z),new Bi(Math.PI/2,0,0)),c(e,i,new q(n.x,t.y,n.z-a),new Bi(0,0,0)),c(e,i,new q(n.x,t.y,n.z+a),new Bi(0,0,0))):(c(i,e,new q(n.x,t.y-a,n.z),new Bi(-Math.PI/2,0,0)),c(i,e,new q(n.x,t.y+a,n.z),new Bi(Math.PI/2,0,0)),c(e,i,new q(n.x-a,t.y,n.z),new Bi(0,Math.PI/2,0)),c(e,i,new q(n.x+a,t.y,n.z),new Bi(0,Math.PI/2,0)))}}else if(f>=0&&r.fans.has(p)){let e=new J;e.position.copy(m),e.rotation.y=u?Math.PI/2:0;let r=new Y(new Zc(a*.92,.03,8,32),new Z({color:`#3a3d41`,metalness:.6,roughness:.4}));e.add(r);let o=new J;for(let e=0;e<4;e++){let t=new Y(new Ts(.1,a*.85,.01),new Z({color:`#6b6f73`,metalness:.5,roughness:.4}));t.position.y=a*.42;let n=new J;n.rotation.z=e*Math.PI/2,n.add(t),o.add(n)}e.add(o);let s=new Y(new Os(.06,.06,.05,16),new Z({color:`#202225`}));s.rotation.x=Math.PI/2,e.add(s),n.add(e),l.push(o),c(i,i,new q(t.x+u*.86,t.y,t.z+d*.86),h);for(let e of[-1,1])u?c(.5,i,new q(t.x+u*.61,t.y,t.z+e*a),new Bi(0,0,0)):c(.5,i,new q(t.x+e*a,t.y,t.z+d*.61),new Bi(0,Math.PI/2,0))}else if(c(i,i,m,h),o?.kind===`code`){let e=new Y(new X(.5,.25),new Z({map:Th(o.code),transparent:!0,depthWrite:!1,roughness:.8}));e.position.copy(m).add(new q(-u*.005,.05,-d*.005)),e.rotation.y=u?u>0?-Math.PI/2:Math.PI/2:d>0?Math.PI:0,n.add(e)}}if(o?.kind===`rust`){let e=new Y(new Ds(.26,20),f);e.rotation.x=-Math.PI/2,e.position.set(t.x+.05,t.y-a+.004,t.z-.04),n.add(e);let r=new Y(new Xc(.012,8,6),new Z({color:`#9fb4c0`,roughness:.1,metalness:.2}));r.position.set(t.x+.05,t.y+a-.02,t.z-.04),n.add(r),m.push(r)}if(o?.kind===`cables`)for(let e=0;e<4;e++){let r=new Y(new Os(.018,.018,1.6,8),p);r.rotation.x=Math.PI/2,r.position.set(t.x-a+.06+e*.04,t.y-a+.02,t.z),n.add(r)}}let h=new Y(_h(s),o);n.add(h),$(n,.16);let g=m.map(e=>e.position.y);function _(e,t,n,r){for(let t of l)t.rotation.z=e*14;m.forEach((t,n)=>{let r=(e*.6+n*.37)%1;t.position.y=g[n]-r*.6799999999999999})}return{update:_,maze:r}}function Oh(){let{c:e,g:t}=Hp(1024,512),n=t.createLinearGradient(0,0,0,512);n.addColorStop(0,`#2a2f33`),n.addColorStop(.45,`#151819`),n.addColorStop(.55,`#0e1011`),n.addColorStop(1,`#070808`),t.fillStyle=n,t.fillRect(0,0,1024,512);for(let e=0;e<9;e++){let n=e*118+20,r=t.createLinearGradient(0,40,0,90);r.addColorStop(0,`rgba(230,255,240,0)`),r.addColorStop(.5,`rgba(235,255,245,1)`),r.addColorStop(1,`rgba(230,255,240,0)`),t.fillStyle=r,t.fillRect(n,40,70,50)}let r=t.createRadialGradient(260,300,0,260,300,160);r.addColorStop(0,`rgba(255,90,60,0.35)`),r.addColorStop(1,`rgba(255,90,60,0)`),t.fillStyle=r,t.fillRect(0,0,1024,512);let i=new xs(e);return i.mapping=303,i.colorSpace=pr,i}function kh(e,t=4,n=256){let{c:r,g:i}=Hp(t,n),a=i.createLinearGradient(0,0,0,n);for(let[t,n]of e)a.addColorStop(t,n);i.fillStyle=a,i.fillRect(0,0,t,n);let o=new xs(r);return o.colorSpace=pr,o}function Ah(e){e.environment=Oh(),e.environmentIntensity=.32;let t=new J;e.add(t);let{add:n,box:r,plane:a,cyl:o}=im(t),s=new J;t.add(s);let c=new ll({color:`#a3161a`,roughness:.35,clearcoat:.8,clearcoatRoughness:.2}),l=new Z({color:`#e8e9e6`,roughness:.5}),u=new Z({color:`#9aa0a6`,metalness:.85,roughness:.32}),d=new Z({color:`#3a3f45`,metalness:.7,roughness:.45}),f=new Z({color:`#7c8288`,metalness:.4,roughness:.5}),p=new ll({color:`#c7d6e0`,roughness:.03,transparent:!0,opacity:.22,depthWrite:!1}),m=new ll({color:`#d4a644`,metalness:1,roughness:.18,clearcoat:.6}),h=new Z({color:`#8f9a74`,roughness:.75}),g=new Z({color:`#e8e2c8`,roughness:.6}),_=new Z({color:`#ff5a14`,roughness:.55}),v=new zo({color:`#000`,alphaMap:kh([[0,`#000`],[1,`#fff`]]),transparent:!0,opacity:.55,depthWrite:!1}),y=new zo({color:`#000`,alphaMap:kh([[0,`#fff`],[1,`#000`]]),transparent:!0,opacity:.45,depthWrite:!1}),b=(e,t,n,r,i,o=.38,c=.5)=>[a(e,o,v,t,o/2,n,r,0,s),a(e,c,y,t,i-c/2,n,r,0,s)],x=fe-de,S=(fe+de)/2;b(x,-B+.004,S,Math.PI/2,V),b(x,B-.004,S,-Math.PI/2,V),b(nh-rh,th-.004,(nh+rh)/2,-Math.PI/2,V),b(uh-dh,lh+.004,(uh+dh)/2,Math.PI/2,V),b(Gm-Km,-5.996,(Gm+Km)/2,Math.PI/2,qm,.5,.7),b(Gm-Km,5.996,(Gm+Km)/2,-Math.PI/2,qm,.5,.7),b(12,0,Km+.004,0,qm,.5,.7);for(let e=0;e<pe.length;e++){let t=pe[e]-1.7;t<-23.1||$(r(2*B,.16,.26,new Z({color:`#3a3c3e`,roughness:.9}),0,V-.08,t),.15)}let C=new Y(new Os(.03,.03,x,10),c);C.rotation.x=Math.PI/2,C.position.set(.32,V-.26,S),$(n(C),.16);for(let e=fe-1.2;e>de+.5;e-=2.4)$(o(.012,.08,u,.32,V-.32,e),.16),$(o(.035,.012,u,.32,V-.37,e),.16);for(let e=fe-2.6;e>de+1;e-=4.6){$(o(.07,.035,l,-.35,V-.02,e),.2);let t=o(.008,.01,om(`#ff2020`,6),-.32,V-.042,e);t.userData.blink=!0}let w=new Y(new Os(.022,.022,x,8),f);w.rotation.x=Math.PI/2,w.position.set(-B+.04,2.38,S),$(n(w),.17);for(let e=fe-2;e>de+1;e-=4.2)$(r(.06,.12,.12,f,-B+.04,2.38,e),.17);let T=new J;T.position.set(-B+.09,1.25,-11.75),T.rotation.y=Math.PI/2,n(T),$(r(.42,.75,.16,c,0,0,-.08,T),.18),$(r(.34,.62,.01,p,0,0,.005,T),.17),$(o(.07,.45,c,0,-.04,-.07,T),.17);let E=new Y(new X(.3,.12),new Z({map:nm(i(`BRANDSLÄCKARE`,`FIRE EXTINGUISHER`),{w:512,h:200,bg:`#c81e1e`,fg:`#ffffff`,font:i(`bold 70px "Arial Narrow", Arial, sans-serif`,`bold 62px "Arial Narrow", Arial, sans-serif`)})}));E.position.set(0,.5,0),T.add(E);let D=new J;D.position.set(B-.1,1.3,-15.2),D.rotation.y=-Math.PI/2,n(D),$(r(.62,.72,.18,c,0,0,-.09,D),.18);let O=new Y(new Zc(.2,.06,10,30),new Z({color:`#c42020`,roughness:.6}));O.position.set(0,0,.01),D.add(O),$(r(.55,.65,.01,p,0,0,.012,D),.17);let k=new Y(new X(.4,.12),new Z({map:nm(i(`BRANDPOST`,`FIRE HOSE`),{w:512,h:160,bg:`#c81e1e`,fg:`#ffffff`,font:`bold 84px "Arial Narrow", Arial, sans-serif`})}));k.position.set(0,.48,0),D.add(k);let ee=(()=>{let{c:e,g:t}=Hp(64,64);t.fillStyle=`#2a2c2e`,t.fillRect(0,0,64,64),t.fillStyle=`#0b0c0d`;for(let e=6;e<60;e+=9)t.fillRect(e,6,4,52);return qp(e,{wrap:!1})})();for(let e of[-7.9,-14.9,-21])$(a(.3,.3,new Z({map:ee,metalness:.6,roughness:.5}),.62,.004,e,0,-Math.PI/2),.11);let A=he,te=new J;te.position.set(-1.5,0,A+3.3),te.rotation.y=.4,n(te),$(r(.9,.04,.55,u,0,.75,0,te),.16),$(r(.9,.04,.55,u,0,.25,0,te),.16);for(let[e,t]of[[-.42,-.25],[.42,-.25],[-.42,.25],[.42,.25]])$(r(.03,.75,.03,u,e,.4,t,te),.16),$(o(.04,.03,d,e,.04,t,te),.15);let j=Vp(13);for(let e=0;e<2;e++)for(let t=0;t<10;t++){let n=r(.16,.05,.075,h,-.33+t%5*.165,.79-e*.5+Math.floor(t/5)*.052,-.1+(j()-.5)*.04,te);n.rotation.y=(j()-.5)*.15,$(n,.16),$(r(.03,.052,.077,g,n.position.x,n.position.y,n.position.z,te),.16)}let M=new Ts(.18,.045,.08);M.translate(0,.0225,0);for(let e=0;e<7;e++){let t=new Y(M,m),r=e<4?0:1;t.position.set(-.1+e%4*.2+r*.1,.85+r*.045,A+2.95),$(n(t),.16)}let N=(e,n,r)=>{let i=new Z({color:r,metalness:.4,roughness:.5});$(o(.29,.88,i,e,.44,n,t,24),.14);for(let r of[.25,.62])$(o(.3,.03,i,e,r,n,t,24),.14)};N(5.45,Km+.5,`#1d4fa0`),N(5.45,Km+1.15,`#a3161a`),N(-5.4,Gm-2.6,`#2f5a3a`);let P=(e,t)=>{let i=new Y(new ks(.16,.6,18),_);i.position.set(e,.32,t),$(n(i),.13),$(r(.36,.03,.36,new Z({color:`#1a1a1a`}),e,.015,t),.12);let a=new Y(new Os(.075,.095,.08,18),l);a.position.set(e,.4,t),n(a)};P(2,-26.4),P(2.4,-26),P(-1.8,-36.6);for(let e of[-27.2,-30.7,-35.9])$(r(1.3,.1,.16,new Z({color:`#d9a514`,roughness:.7}),5.3,.05,e),.12);let ne=new J;ne.position.set((Jm+Ym)/2,2.85,Km+2.2),n(ne);let re=new Z({map:qp(rm(),{repeat:[3,1]}),roughness:.6});$(r(Ym-Jm+.4,.12,.12,re,0,0,0,ne),.14);for(let e of[-1.6,1.6])$(r(.01,qm-2.85,.01,d,e,(qm-2.85)/2+.06,0,ne),.14);let ie=new Y(new X(.5,.16),new Z({map:nm(i(`MAX 2,9 M`,`MAX 2.9 M`),{w:512,h:160,bg:`#f2f2ee`,fg:`#c81e1e`,font:`bold 100px Arial, sans-serif`,border:`#c81e1e`})}));ie.position.set(0,-.15,.07),ne.add(ie);let ae=new Z({color:`#d9a514`,roughness:.7});$(a(Gm-Km,.12,ae,5.994,1,(Gm+Km)/2,-Math.PI/2),.13),$(a(Gm-Km-4.5,.12,ae,-5.994,1,(Gm+(Km+4.5))/2-2.3,Math.PI/2),.13);let F=new ll({color:`#3a4044`,roughness:.02,metalness:.6,clearcoat:1,transparent:!0,opacity:.32,depthWrite:!1}),I=[[.8,-29,.7],[-.6,-34.3,.5],[3,-36.8,.6]];for(let[e,t,r]of I){let i=new Y(new Ds(r,24),F);i.rotation.x=-Math.PI/2,i.scale.set(1.4,1,1),i.position.set(e,.006,t),$(n(i),.1)}let L=new Y(new X(.6,.6),new Z({map:nm(`P-2`,{w:256,h:256,bg:`#1d5fa8`,fg:`#ffffff`,font:`bold 120px Arial, sans-serif`}),emissive:`#1d5fa8`,emissiveIntensity:.2}));L.position.set(5.99,2.3,Gm-1.5),L.rotation.y=-Math.PI/2,n(L);let R=new Y(new Ts(.9,.22,.06),[om(`#1fbf55`,1),om(`#1fbf55`,1),om(`#1fbf55`,1),om(`#1fbf55`,1),new Z({emissiveMap:nm(i(`UTFART ➜`,`EXIT ➜`),{w:512,h:128,bg:`#1fbf55`,fg:`#ffffff`,font:`bold 80px Arial, sans-serif`}),emissive:`#ffffff`,emissiveIntensity:1.5,color:`#000`}),om(`#1fbf55`,1)]);R.position.set((Jm+Ym)/2,qm-.2,Km+.4),$(n(R),.4);let z=new Y(new X(.34,.24),new Z({map:nm(i(`⚡ VARNING`,`⚡ WARNING`),{w:384,h:270,bg:`#f2d23a`,sub:i(`HÖGSPÄNNING`,`HIGH VOLTAGE`),font:i(`bold 74px Arial, sans-serif`,`bold 70px Arial, sans-serif`)})}));z.position.set(th-.005,1.35,-10.25),z.rotation.y=-Math.PI/2,n(z);for(let e of[2.55,2.4])$(r(.3,.04,nh-rh-.4,d,th-.6-(e-2.4)*2,e,(nh+rh)/2),.2);let oe=new J;oe.position.set(-2.3,2.3,uh-.02),oe.rotation.y=Math.PI,n(oe),$(o(.18,.04,l,0,0,0,oe,32),.2).rotation.x=Math.PI/2;let se=r(.012,.13,.005,new zo({color:`#111`}),0,.06,.025,oe),ce=r(.016,.09,.005,new zo({color:`#111`}),0,.04,.026,oe),le=new J,ue=new J;oe.add(le,ue),le.add(se),ue.add(ce);for(let e=0;e<6;e++)$(r(.06,.3,.24,new Z({color:[`#1d4fa0`,`#a3161a`,`#2f5a3a`,`#d9a514`][e%4],roughness:.7}),-2,1.95,dh+.5+e*.065),.16);$(r(.3,.02,1,u,-2,1.78,dh+.65),.16);let me=kh([[0,`rgba(255,255,255,0.9)`],[.35,`rgba(255,255,255,0.25)`],[1,`rgba(255,255,255,0)`]]),H=[],ge=(e,t,n,r,i,a,o,c,l)=>{let u=new zo({color:o,alphaMap:me,transparent:!0,opacity:c,blending:2,depthWrite:!1,side:2,toneMapped:!1}),d=new Y(new Os(i,a,r,28,1,!0),u);d.position.set(e,t-r/2,n),s.add(d),H.push({m:d,mat:u,base:c,kind:l})};for(let e=0;e<pe.length;e++)e!==4&&ge(0,V-.1,pe[e],V-.1,.25,1,`#d9ffe6`,.008,e===2?`tubeFlick`:`tube`);for(let[e,t]of[[-2.4,-31.6],[2,-29],[1,-35.4]])ge(e,qm-.1,t,qm-.1,.3,1.8,`#e9f5ea`,.011,e===fm[0]&&t===fm[1]?`garageFlick`:`garage`);ge(0,2.55,he+1.6,2.5,.12,1.3,`#ff3020`,.035,`red`);let _e=new Float32Array(1560),ve=[],U=Vp(99);for(let e=0;e<520;e++){let t=U(),n,r;t<.55?(n=(U()-.5)*2*B,r=fe-U()*x):t<.7?(n=(U()-.5)*4.8,r=he+U()*4.5):(n=-6+U()*12,r=Gm-U()*(Gm-Km));let i=.2+U()*2.5;ve.push([n,i,r,U()*10]),_e.set([n,i,r],e*3)}let ye=new so;ye.setAttribute(`position`,new Ka(_e,3));let W=new vs(ye,new ps({map:(()=>{let{c:e,g:t}=Hp(32,32),n=t.createRadialGradient(16,16,0,16,16,16);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,32,32),new xs(e)})(),size:.018,color:`#e9efe6`,transparent:!0,opacity:.55,depthWrite:!1,blending:2,toneMapped:!1}));W.frustumCulled=!1,s.add(W);let be=I.map(([e,n],r)=>Cm(t,e+.12*(r-1),qm,n+.1,2.6+r*.9,r*1.3)),xe=new Z({color:`#2b2d2f`,metalness:.7,roughness:.55}),Se=new J;Se.position.set(-3,0,-36),t.add(Se),$(r(.62,.02,.62,xe,0,.01,0,Se),.3);for(let e=-2;e<=2;e++)$(r(.04,.024,.56,d,e*.11,.014,0,Se),.3);let Ce=ym(t,-3,.16,-36,{n:32,life:6.5,vel:[.02,.3,0],spread:.2,rise:.03,drift:.32,size:[.16,1.5],color:`#858c8e`,opacity:.11,seed:77}),we=pm();tm(s,6);let Te=[];t.traverse(e=>{e.userData.blink&&Te.push(e)});function G(e,t,n,r){let i=we(!!n.shared.police?.powerCut,e),a=um(e),o=dm(e);for(let t of H){if(t.kind===`red`){t.mat.opacity=t.base*(.6+.4*Math.max(0,Math.sin(e*3.2)));continue}let n=t.kind===`tube`||t.kind===`tubeFlick`,r=t.kind===`tubeFlick`?a:t.kind===`garageFlick`?o:1;t.mat.opacity=i===`on`?t.base*r:i===`cut`&&t.kind===`tube`?.004:0,n&&t.mat.color.set(i===`on`?`#d9ffe6`:`#ff6a50`)}for(let t of be)t.tick(e);Ce.tick(e);let s=ye.attributes.position;for(let t=0;t<520;t++){let[n,r,i,a]=ve[t];s.setXYZ(t,n+Math.sin(e*.13+a)*.15,r+Math.sin(e*.09+a*1.7)*.2,i+Math.cos(e*.11+a)*.15)}s.needsUpdate=!0;for(let t of Te)t.visible=Math.sin(e*2+t.position.z)>.6;let c=new Date(r);le.rotation.z=-((c.getMinutes()+c.getSeconds()/60)/60)*Math.PI*2,ue.rotation.z=-((c.getHours()%12+c.getMinutes()/60)/12)*Math.PI*2}return{update:G}}function jh(e){e.traverse(e=>{let t=e;if(!t.isMesh)return;let n=(Array.isArray(t.material)?t.material:[t.material]).some(e=>e.transparent||e.blending===2||e.colorWrite===!1),r=t.layers.isEnabled(0)||t.layers.isEnabled(2)||t.layers.isEnabled(4),i=t.geometry?.type,a=i===`PlaneGeometry`||i===`ShapeGeometry`||i===`CircleGeometry`;t.receiveShadow=!n,t.castShadow=!n&&r&&!a&&!t.userData.noShadow})}function Mh(e,t,n){let r=[];if(n===`low`)return{update:()=>{},lights:r};t.shadowMap.enabled=!0,t.shadowMap.type=1,t.shadowMap.autoUpdate=!0;let i=n===`high`?1024:512;e.traverse(e=>{let t=e;t.isSpotLight&&t.userData.shadow&&(t.castShadow=!0,t.shadow.mapSize.set(i,i),t.shadow.camera.near=.15,t.shadow.camera.far=Math.min(14,t.distance||14),t.shadow.bias=-6e-4,t.shadow.normalBias=.025,t.shadow.radius=n===`high`?4:1,t.shadow.autoUpdate=!1,t.shadow.needsUpdate=!0,r.push(t))}),jh(e);let a=n===`high`?3:2,o=0,s=new q;function c(e){let t=[];for(let n of r)n.getWorldPosition(s),s.distanceTo(e)<11&&n.intensity>0&&(n.userData.dynamic?n.shadow.needsUpdate=!0:t.push(n));for(let e=0;e<Math.min(a,t.length);e++)t[(o+e)%t.length].shadow.needsUpdate=!0;o+=a}return{update:c,lights:r}}var Nh=[{id:`cam01`,label:i(`CAM 01 · VALVET`,`CAM 01 · VAULT`),kind:`normal`,pos:new q(-2.25,2.38,he+4.45),look:new q(.3,.95,he),fov:74},{id:`cam04`,label:i(`CAM 04 · ZON B · TERMISK`,`CAM 04 · ZONE B · THERMAL`),kind:`thermal`,pos:new q(.62,2.5,fe-.28),look:new q(0,.75,-15),fov:64},{id:`cam03`,label:i(`CAM 03 · ZON B · TERMISK`,`CAM 03 · ZONE B · THERMAL`),kind:`thermal`,pos:new q(.72,2.5,de+.32),look:new q(0,.85,-7),fov:64},{id:`cam02`,label:i(`CAM 02 · ZON B`,`CAM 02 · ZONE B`),kind:`normal`,pos:new q(.95,2.5,de+.32),look:new q(-.1,.9,-5),fov:66},{id:`cam05`,label:i(`CAM 05 · TEKNIK · TERMISK`,`CAM 05 · TECH · THERMAL`),kind:`thermal`,pos:new q(1.35,2.5,-13.1),look:new q(4.7,1.95,-11.15),fov:44},{id:`cam06`,label:`CAM 06 · GARAGE`,kind:`normal`,pos:new q(5.6,2.95,de-.4),look:new q(-1.5,.6,de-9),fov:78},{id:`cam07`,label:i(`CAM 07 · TRAPPA B`,`CAM 07 · STAIRS B`),kind:`normal`,pos:new q(-6.6,4.4,-28.3),look:new q(-8.8,1.2,-24.6),fov:72}];function Ph(e,t,n){let r=Math.tan(n*Math.PI/360),i=Fh[e]??Fh.cab,a=Math.max(i.min,i.hw/(r*t),i.hh/r),o=i.at.clone();o.y-=i.drop;let s=o.clone().addScaledVector(i.normal,a);return s.y+=.08,{pos:s,look:o}}var Fh={cab:{at:new q(B-.03,1.24,ge),normal:new q(-1,0,0),hw:.38,hh:.6,drop:.12,min:.6},tech:{at:new q(oh.x,oh.y+.2,oh.z),normal:new q(-1,0,0),hw:.8,hh:.8,drop:.12,min:.8},central:{at:mh.clone(),normal:new q(1,0,0),hw:1.55,hh:.95,drop:.25,min:1},kur:{at:new q(Xm,1.55,(Zm+Qm)/2+.12),normal:new q(1,0,0),hw:1.35,hh:.62,drop:.12,min:.8}},Ih=()=>new Promise(e=>setTimeout(e,16));async function Lh(e,t=()=>{}){let n=[()=>Nm(),()=>Pm(),()=>Fm(),()=>Im(),()=>Lm(),()=>Rm(),()=>zm(),()=>zm(`#5d6670`,41),()=>zm(`#4f565c`,81),()=>Im(`#3a3b3c`,55),()=>Bm(),()=>Vm(),()=>Hm(),()=>Um(),()=>Qp(),()=>Zp()];for(let e=0;e<n.length;e++)t(e/n.length*.55,i(`Målar väggar och golv`,`Painting walls and floors`)),await Ih(),n[e]();t(.55,i(`Bygger valvet och korridoren`,`Building the vault and the corridor`)),await Ih();let r=new pa;r.background=new ua(`#050806`),r.fog=new fa(`#0a120e`,.018);let a=fe-de,o=(fe+de)/2,s=(e,t)=>Wm(e?Nm():Pm(),[t[0]*1.2,e?.6:.8],{},e?.6:.8),c=Wm(Pm(),[.5,.5],{},.8),l=Wm(Fm(),[1.1,(fe-de)/2],{clearcoat:.5,clearcoatRoughness:.2},.5),u=Wm(Im(),[1.1,(fe-de)/2],{},.6),d=Wm(Lm(),[2.5,2.3],{clearcoat:.8,clearcoatRoughness:.12},.4),f=qp(Zp(),{srgb:!1}),p=(e,t=.4)=>new Z({color:e,metalness:1,roughness:t,roughnessMap:f}),m=p(`#8a9099`,.38),h=p(`#3a3f46`,.5),g=p(`#b08a4c`,.32),_=new Z({color:`#121314`,roughness:.55}),v=new Z({color:`#7d8287`,roughness:.5,metalness:.3}),y=new Z({color:`#5b6560`,roughness:.45,metalness:.35}),b=(e,t=3)=>new Z({color:`#000`,emissive:e,emissiveIntensity:t}),x=b(`#e9fff2`,3.2),S=new Z({color:`#c9cfcb`,roughness:.3,emissive:`#e9fff2`,emissiveIntensity:0}),C=b(`#ff2a2a`,.5),w=Jp(Qp(),[2,2]),T=new Z({color:`#9aa1a8`,metalness:1,roughness:.32,map:w.map,normalMap:w.normalMap,roughnessMap:f}),E=(e,t=r)=>(t.add(e),e),D=(e,t,n,i,a,o,s,c=r)=>{let l=new Y(new Ts(e,t,n),i);return l.position.set(a,o,s),E(l,c)},O=(e,t,n,r,i,a,o=0,s=0)=>{let c=new Y(new X(e,t),n);return c.position.set(r,i,a),c.rotation.set(s,o,0,`YXZ`),E(c)},k=1.2;$(O(2*B,a,l,0,0,o,0,-Math.PI/2),.11),$(O(2*B,a,u,0,V,o,0,Math.PI/2),.13);let ee=pe[5];for(let[e,t]of[[fe,ee+.95/2],[ee-.95/2,de]]){let n=e-t;$(O(n,k,s(!0,[n/2.4,1]),-B,k/2,(e+t)/2,Math.PI/2),.13),$(O(n,V-k,s(!1,[n/2.4,1]),-B,k+(V-k)/2,(e+t)/2,Math.PI/2),.15)}$(O(.95,V-2.1,s(!1,[.4,.3]),-B,2.1+(V-2.1)/2,ee,Math.PI/2),.15);let A=pe[3],te=.95,j=2.1,M=[[fe,A+te/2],[A-te/2,de]];for(let[e,t]of M){let n=e-t;$(O(n,k,s(!0,[n/2.4,1]),B,k/2,(e+t)/2,-Math.PI/2),.13),$(O(n,V-k,s(!1,[n/2.4,1]),B,k+(V-k)/2,(e+t)/2,-Math.PI/2),.15)}$(O(te,V-j,s(!1,[.4,.3]),B,j+(V-j)/2,A,-Math.PI/2),.15);for(let e of[-1,1])$(D(.012,.05,a,new Z({color:`#1f3328`,roughness:.5}),e*(B-.006),k,o),.13);let N=new oc;N.moveTo(-B,0),N.lineTo(B,0),N.lineTo(B,V),N.lineTo(-B,V);let P=new ac;P.moveTo(-.62,0),P.lineTo(-.62,2.12),P.lineTo(.62,2.12),P.lineTo(.62,0),N.holes.push(P);let ne=new Y(new Jc(N),c);ne.position.z=de,$(E(ne),.15);let re=1.12,ie=new oc;ie.moveTo(-B,0),ie.lineTo(B,0),ie.lineTo(B,V),ie.lineTo(-B,V);let ae=new ac;ae.absarc(0,re,1,0,Math.PI*2,!0),ie.holes.push(ae);let F=new Y(new Wc(ie,{depth:.7,bevelEnabled:!1,curveSegments:48}),[c,new Z({color:`#2a2c2e`,roughness:.7})]);F.position.z=fe,$(E(F),.15);let I=new Y(new Zc(1.04,.07,12,64),m);I.position.set(0,re,fe-.02),$(E(I),.16),$(D(1.5,.12,.7,h,0,.06,fe+.35),.14);let L=new J;E(L);let R=fe+.7,z=R+4.6,oe=2.5,se=2.6,ce=new Y(new X(oe*2,z-R),d);ce.rotation.x=-Math.PI/2,ce.position.set(0,0,(R+z)/2),L.add(ce);let le=new Y(new X(oe*2,z-R),u);le.rotation.x=Math.PI/2,le.position.set(0,se,(R+z)/2),L.add(le);let ue=[],he=.3,U=.24;for(let e=0;e<9;e++)for(let t=0;t<16;t++){let n=new Ai().makeTranslation(-2.33+t*he+.03,.35+e*U+U/2,z-.02);ue.push(n)}for(let e of[-1,1])for(let t=0;t<9;t++)for(let n=0;n<13;n++){let r=new Ai().makeRotationY(e*-Math.PI/2).setPosition(e*2.48,.35+t*U+U/2,R+.55+n*he);ue.push(r)}let ye=new cs(new Ts(.27999999999999997,.22,.03),g,ue.length);ue.forEach((e,t)=>ye.setMatrixAt(t,e)),L.add(ye);let W=new Z({color:`#2b2418`,roughness:.8}),be=new Y(new X(oe*2,se),W);be.position.set(0,se/2,z),be.rotation.y=Math.PI,L.add(be);for(let e of[-1,1]){let t=new Y(new X(z-R,se),W);t.position.set(e*oe,se/2,(R+z)/2),t.rotation.y=e*-Math.PI/2,L.add(t)}let Se=new Z({color:`#7d8186`,metalness:.25,roughness:.55,map:w.map,normalMap:w.normalMap});for(let e of[-1,1]){let t=oe-B,n=new Y(new X(t,se),Se);n.position.set(e*(B+t/2),se/2,R),L.add(n)}let we=new Y(new X(2*B,.02),Se);we.position.set(0,2.5900000000000003,R+.001),L.add(we);let Te=new J,G=new Y(new Os(.98,.98,.48,48),T);G.rotation.x=Math.PI/2,Te.add(G);let Ee=new Y(new Os(.16,.16,.1,24),m);Ee.rotation.x=Math.PI/2,Ee.position.z=.29,Te.add(Ee);for(let e=0;e<4;e++){let t=new Y(new Os(.025,.025,.7,8),m);t.rotation.z=e*Math.PI/4,t.position.z=.33,Te.add(t)}let De=[];for(let e=0;e<12;e++){let t=e/12*Math.PI*2,n=new Y(new Os(.045,.045,.22,12),m);n.position.set(Math.cos(t)*.98,Math.sin(t)*.98,0),n.rotation.z=t+Math.PI/2,Te.add(n),De.push({m:n,a:t})}let Oe=new J;Oe.position.set(-1,re,R+.25),Te.position.set(1,0,0),Oe.add(Te),L.add(Oe);let ke=D(1.6,.05,.8,m,.5,.82,R+2.6,L);for(let[e,t]of[[-.25,-.33],[.75,-.33],[-.25,.33],[.75,.33]])D(.04,.8,.04,h,ke.position.x+e-.25,.4,ke.position.z+t,L);let Ae=new Z({color:`#141516`,roughness:.75});for(let e=0;e<3;e++){let t=new Y(new Es(.17,.42,6,14),Ae);t.rotation.z=Math.PI/2,t.position.set(.1+e*.4,1.02,R+2.6+(e-1)*.08),L.add(t)}let je=new Z({color:`#8c8f6a`,roughness:.8}),Me=Vp(77);for(let e=0;e<9;e++){let e=D(.16,.04,.07,je,-.05+Me()*1.1,.87,R+2.3+Me()*.12,L);e.rotation.y=Me()*.6}$(L,.16),$(Oe,.14);let Ne=new Z({color:`#a4aab0`,metalness:.4,roughness:.4,roughnessMap:f}),Pe=new Z({color:`#d6ad5c`,metalness:.55,roughness:.32}),Ie=H.map((e,t)=>{let n=new J;n.position.set(e,1.15,R+.015),L.add(n),D(.26,.38,.03,Ne,0,0,0,n),D(.28,.4,.02,_,0,0,-.01,n);let r=new Y(new Os(.042,.042,.03,24),Pe);r.rotation.x=Math.PI/2,r.position.set(0,-.04,.025),n.add(r);let a=new J;a.position.set(0,-.04,.04),n.add(a);let o=new Y(new Os(.008,.008,.04,8),Pe);o.rotation.x=Math.PI/2,o.position.z=.01,a.add(o),D(.04,.075,.01,Pe,0,0,.035,a);let s=new Y(new X(.2,.06),new Z({map:nm(`${i(`NYCKEL`,`KEY`)} ${`AB`[t]}`,{w:384,h:116,bg:`#1b1c1e`,fg:`#e8e2cf`,font:`bold 70px "Arial Narrow", Arial, sans-serif`}),roughness:.5}));s.position.set(0,.12,.017),n.add(s);let c=new Y(new Xc(.012,10,8),new Z({color:`#000`,emissive:`#ff2020`,emissiveIntensity:4}));return c.position.set(.09,-.13,.02),n.add(c),$(n,.2),{group:n,key:a,led:c.material}}),Re=Hp(512,192),ze=new xs(Re.c);ze.colorSpace=pr;let Be=new Y(new X(.66,.25),new zo({map:ze,toneMapped:!1}));Be.position.set(0,2.36,R+.025),L.add(Be),D(.72,.31,.03,_,0,2.36,R+.008,L),$(Be,.35);let Ve=``,He=(e,t,n)=>{let r=`${e}|${t}|${n}`;if(r===Ve)return;Ve=r;let a=Re.g;a.fillStyle=`#04070a`,a.fillRect(0,0,512,192),a.fillStyle=`#5fd6ff`,a.font=`bold 30px "Courier New", monospace`,a.textAlign=`left`,a.fillText(`TITAN LOCK`,22,42),a.fillStyle=`#4a5560`,a.fillText(`v4.2`,410,42),a.font=`bold 40px "Courier New", monospace`,a.fillStyle=e?`#3dff7a`:n?`#ffb020`:`#ff3b30`,a.fillText(e?i(`UPPLÅST`,`UNLOCKED`):n?i(`SPÄRRAD…`,`BLOCKED…`):i(`NÖDLÅSNING AKTIV`,`EMERGENCY LOCKDOWN`),22,104),a.font=`26px "Courier New", monospace`,a.fillStyle=`#9fb0bc`,a.fillText(e?i(`VALVDÖRR ÖPPNAS`,`VAULT DOOR OPENING`):t>=2?i(`DUBBELKONTROLL: NYCKEL A + B`,`DUAL CONTROL: KEY A + B`):i(`LJUDSENSOR: AKTIV`,`SOUND SENSOR: ACTIVE`),22,156),ze.needsUpdate=!0},Ue=new Y(new Xc(.06,16,8,0,Math.PI*2,0,Math.PI/2),new Z({color:`#e6e6e2`,roughness:.4}));Ue.rotation.x=Math.PI,Ue.position.set(.9,2.595,R+.9),$(E(Ue,L),.3);let We=new Y(new Xc(.008,8,6),b(`#33ff66`,6));We.position.set(.9,2.54,R+.9),L.add(We);let Ge=new Yl(`#ffd9bf`,5,7,1.3);Ge.position.set(0,2.2,R+1.1),L.add(Ge);let Ke=new Y(new Xc(.11,16,8,0,Math.PI*2,0,Math.PI/2),b(`#ff2a1a`,6));Ke.rotation.x=Math.PI,Ke.position.set(0,2.5900000000000003,R+1.6),$(E(Ke,L),.5);let qe=new ql(`#ff2a14`,22,9,.5,.7,1.3);qe.userData.shadow=!0,qe.userData.dynamic=!0,qe.position.copy(Ke.position),L.add(qe,qe.target);let Je=new Yl(`#ff1e10`,6,7,1.6);Je.position.set(0,1.6,R+1.6),L.add(Je);let Ye=new Y(new Os(.065,.065,a,16),p(`#6f6a5e`,.6));Ye.rotation.x=Math.PI/2,Ye.position.set(-.26,V-.13,o),$(E(Ye),.42);let Xe=new Y(new Os(.04,.04,a,12),p(`#9a3a2a`,.5));Xe.rotation.x=Math.PI/2,Xe.position.set(.9,V-.1,o),$(E(Xe),.16),$(D(.34,.05,a,h,-.62,V-.12,o),.15);let Ze=new Z({color:`#1a1a1a`,roughness:.7});for(let e=0;e<4;e++)$(D(.03,.03,a,Ze,-.74+e*.07,V-.085,o),.2);for(let e=fe-1;e>de;e-=2.2)$(D(.5,.03,.04,h,-.3,V-.05,e),.16);let Qe=[];pe.forEach((e,t)=>{$(D(.22,.06,1.3,v,0,V-.04,e),.25);let n=t===4?`dead`:t===2?`flicker`:`on`,i=new Y(new Os(.022,.022,1.2,10),n===`dead`?S.clone():x.clone());i.rotation.x=Math.PI/2,i.position.set(0,V-.09,e),$(E(i),n===`dead`?.2:.62);let a=null;(t%2==0||t===3)&&n!==`dead`&&(a=am(r,`#d9ffe6`,6,0,V-.15,e,9,1.25)),Qe.push({mesh:i,light:a,mode:n})}),E(new Nl(`#9fb8aa`,`#1a1612`,.35));let $e=pe[4],et=Sm(r,.05,V-.12,$e,{n:30,speed:1.1,seed:41,up:-.45}),tt=new Yl(`#ffc070`,0,3.5,1.6);tt.position.set(0,V-.3,$e),E(tt);let nt=Qe[4].mesh.material,rt=pm(),it=xe(e),at=[],ot=new zo({color:`#fff`}),st=new zo({color:`#ff3326`,toneMapped:!1}),ct=new zo({color:`#ff2a1a`,transparent:!0,opacity:.16,blending:2,depthWrite:!1,toneMapped:!1}),lt=new Os(1,1,1,10,1,!0);lt.rotateZ(Math.PI/2);for(let e=1;e<=6;e++){let t=me(e);for(let n of[-1,1]){$(D(.1,V-.2,.14,_,n*(B-.05),(V-.2)/2+.05,t),.3),$(D(.012,V-.45,.025,C,n*(B-.105),(V-.2)/2+.05,t),.38);let r=new Y(new X(.34,.2),new Z({map:nm(`B${e}`,{w:256,h:150,bg:`#efece3`,font:`bold 110px Arial, sans-serif`,border:`#16181a`}),roughness:.6}));r.position.set(n*(B-.005),1.95,t+.32),r.rotation.y=n*-Math.PI/2,$(E(r),.15)}for(let n of it[e-1]){if(n.kind===`wiper`){let e=new Y(new Os(.09,.09,.12,20),h);e.rotation.z=Math.PI/2,e.position.set(-B+.1,n.py,t),$(E(e),.45);let r=new Y(new Ds(.03,16),C);r.position.set(-B+.161,n.py,t),r.rotation.y=Math.PI/2,E(r)}let r=tm(new Y(lt,ot),1);r.userData.heat=1,r.position.z=t;let i=tm(new Y(lt,st),3),a=tm(new Y(lt,ct),3);i.position.z=a.position.z=t,E(r),E(i),E(a),at.push({sec:e,beam:n,thermal:r,core:i,glow:a})}let n=new Y(new X(2*B-.02,.16),new Z({map:qp(rm(),{repeat:[2.2,1]}),roughness:.6}));n.rotation.x=-Math.PI/2,n.position.set(0,.003,t),$(E(n),.11)}let ut=pe[1]+.3,dt=new J;dt.position.set(-.78,0,ut),dt.rotation.y=.5,E(dt);let ft=new Z({color:`#2a3140`,roughness:.9});$(D(.46,.08,.44,ft,0,.47,0,dt),.42),$(D(.46,.5,.06,ft,0,.78,.2,dt),.3);for(let[e,t]of[[-.2,-.18],[.2,-.18],[-.2,.18],[.2,.18]])$(D(.03,.45,.03,m,e,.22,t,dt),.16);let pt=new Y(new X(.3,.38),new Z({map:nm(`KVÄLLS-POSTEN`,{w:256,h:320,bg:`#e4e0d4`,font:`bold 34px Georgia, serif`,sub:i(`RÅNARLIGAN SLÅR TILL IGEN?`,`ROBBER GANG STRIKES AGAIN?`)}),roughness:.9}));pt.rotation.set(-Math.PI/2,0,.3),pt.position.set(.02,.515,-.02),dt.add(pt);let mt=new Y(new Os(.045,.045,.3,16),new Z({color:`#7a1f1f`,roughness:.35,metalness:.4}));mt.position.set(-.5,.15,ut-.45),$(E(mt),.8);let ht=new Y(new Os(.045,.035,.08,14),new Z({color:`#e8e4da`,roughness:.5}));ht.position.set(-.4,.04,ut-.38),$(E(ht),.72);for(let e of[-1,1])$(D(.08,j,.05,h,B-.02,j/2,A+e*(te/2-.02)),.18);$(D(.08,.05,te,h,B-.02,j,A),.18);let gt=new Y(new X(1.1,.28),new Z({map:nm(i(`SÄKERHETSZON B`,`SECURITY ZONE B`),{w:768,h:196,bg:`#1d2b22`,fg:`#e9e6dc`,font:`bold 92px "Arial Narrow", Arial, sans-serif`}),roughness:.6}));gt.position.set(B-.005,2.2,fe-1.6),gt.rotation.y=-Math.PI/2,$(E(gt),.15);let _t=new Y(new X(.4,.4),new Z({map:nm(i(`KAMERA`,`CAMERA`),{w:256,h:256,bg:`#f2d23a`,sub:i(`ÖVERVAKAT OMRÅDE`,`MONITORED AREA`),font:`bold 64px Arial, sans-serif`}),roughness:.5}));_t.position.set(-B+.005,1.7,pe[2]-.6),_t.rotation.y=Math.PI/2,$(E(_t),.15);let vt=new J;vt.position.set(0,0,de-.02),E(vt);let yt=new Z({color:`#0d1612`,roughness:.1,metalness:.4}),bt=[];for(let e of[-1,1]){let t=new J;t.position.set(e*.61,0,0),vt.add(t);let n=-e*.3;$(D(.6,2.1,.06,y,n,1.05,0,t),.16),$(D(.22,.35,.065,yt,n,1.55,0,t),.13),$(D(.48,.05,.08,m,n,1,.07,t),.18),bt.push({pivot:t,sx:e})}$(D(1.36,.08,.1,h,0,2.15,.02,vt),.15),$(D(.09,.14,.03,_,.85,1.25,.02,vt),.32);let xt=new Z({color:`#000`,emissive:`#ff2a2a`,emissiveIntensity:5});$(D(.02,.02,.01,xt,.85,1.29,.04,vt),.4);let St=new Y(new Ts(.5,.18,.06),[b(`#1fbf55`,1),b(`#1fbf55`,1),b(`#1fbf55`,1),b(`#1fbf55`,1),new Z({emissiveMap:nm(i(`NÖDUTGÅNG ➜`,`EXIT ➜`),{w:512,h:184,bg:`#1fbf55`,fg:`#f4fff6`,font:`bold 84px Arial, sans-serif`}),emissive:`#ffffff`,emissiveIntensity:1.6,color:`#000`}),b(`#1fbf55`,1)]);St.position.set(0,2.42,.06),$(E(St,vt),.45);let Ct=new Y(new X(.5,.25),new Z({map:nm(`GARAGE P-2`,{w:512,h:256,bg:`#e9e6dc`,font:`bold 100px Arial, sans-serif`}),roughness:.6}));Ct.position.set(-.86,1.7,.035),vt.add(Ct),t(.68,i(`Bygger teknikrummet`,`Building the tech room`)),await Ih();let wt=ch(r,e);t(.74,i(`Bygger säkerhetscentralen`,`Building the security room`)),await Ih();let Tt=gh(r,e);t(.8,i(`Bygger ventilationen`,`Building the vents`)),await Ih();let Et=Dh(r,e);t(.85,i(`Möblerar`,`Furnishing`)),await Ih();let Dt=Ah(r);t(.9,i(`Bygger garaget`,`Building the garage`)),await Ih();let Ot=eh(r,e);t(.96,i(`Sista detaljerna`,`Final touches`)),await Ih();let kt=.6,At=.9,jt=.24,Mt=new J;Mt.position.set(B,1.25,ge),E(Mt),$(D(.02,At,kt,v,-.01,0,0,Mt),.42);for(let e of[-1,1])$(D(jt,.02,kt,v,-.24/2,e*(At/2-.01),0,Mt),.42);for(let e of[-1,1])$(D(jt,At,.02,v,-.24/2,0,e*(kt/2-.01),Mt),.42);let Nt=new Y(new X(.5599999999999999,.86),new Z({color:`#b5b9b2`,metalness:.45,roughness:.5,map:qp(Zp(),{repeat:[1,1]})}));Nt.position.x=-.022,Nt.rotation.y=-Math.PI/2,Mt.add(Nt),$(Nt,.4);let Pt=new J;Pt.position.set(-.24,0,kt/2),Mt.add(Pt),$(D(.02,At,kt,v,-.01,0,-.6/2,Pt),.42);let Ft=new Y(new X(.24,.12),new Z({map:nm(i(`⚡ FARA`,`⚡ DANGER`),{w:256,h:128,bg:`#f2d23a`,font:i(`bold 70px Arial, sans-serif`,`bold 50px Arial, sans-serif`)})}));Ft.position.set(-.021,.25,-.6/2),Ft.rotation.y=-Math.PI/2,Pt.add(Ft);let It=new Y(new X(.26,.07),new Z({map:nm(`TITAN LOCK GD-5`,{w:512,h:138,bg:`#1d2024`,fg:`#cfd6dc`,font:`bold 62px "Arial Narrow", Arial, sans-serif`})}));It.position.set(-.021,.05,-.6/2),It.rotation.y=-Math.PI/2,Pt.add(It),$(D(.03,.12,.025,m,-.035,0,-.6+.05,Pt),.2);let Lt=-.03,Rt=e=>.15-e*.11,zt=Hp(256);{let e=zt.g;e.fillStyle=`#f1efe6`,e.beginPath(),e.arc(128,128,126,0,Math.PI*2),e.fill(),e.strokeStyle=`#1b1b1b`,e.fillStyle=`#1b1b1b`,e.textAlign=`center`,e.textBaseline=`middle`;let t=[0,110,230,400,500];for(let n=0;n<=500;n+=5){if(n%25!=0&&!t.includes(n))continue;let r=(-120+240*n/500)*Math.PI/180,i=t.includes(n);e.strokeStyle=e.fillStyle=n===110||n===230||n===400?`#b3161a`:`#1b1b1b`;let a=i?88:98;e.lineWidth=i?4:2,e.beginPath(),e.moveTo(128+Math.sin(r)*a,128-Math.cos(r)*a),e.lineTo(128+Math.sin(r)*112,128-Math.cos(r)*112),e.stroke(),i&&(e.font=`bold 22px Arial, sans-serif`,e.fillText(String(n),128+Math.sin(r)*68,128-Math.cos(r)*68))}e.font=`bold 34px Arial, sans-serif`,e.fillText(`V`,128,176),e.font=`13px Arial, sans-serif`,e.fillText(`TITAN LOCK`,128,206)}let Bt=new q(Lt,.28,-.14),Vt=qp(zt.c,{wrap:!1}),Ht=new Y(new Ds(.085,48),new Z({map:Vt,emissiveMap:Vt,emissive:`#ffffff`,emissiveIntensity:.3,roughness:.35}));Ht.position.copy(Bt),Ht.rotation.y=-Math.PI/2,Mt.add(Ht);let Ut=new Y(new Zc(.088,.008,8,40),m);Ut.position.copy(Bt),Ut.rotation.y=Math.PI/2,Mt.add(Ut);let Wt=new J;Wt.position.copy(Bt).add(new q(-.005,0,0)),Mt.add(Wt);let Gt=new Y(new Ts(.003,.075,.004),new zo({color:`#c81e1e`}));Gt.position.y=.032,Wt.add(Gt);let Kt=new Y(new Os(.008,.008,.006,12),_);Kt.rotation.z=Math.PI/2,Wt.add(Kt);let qt=Hp(512,224),Jt=new xs(qt.c);Jt.colorSpace=pr;let Yt=new Y(new X(.22,.096),new Z({map:Jt,emissiveMap:Jt,emissive:`#ffffff`,emissiveIntensity:.3,roughness:.6}));Yt.position.set(Lt,.3,.13),Yt.rotation.y=-Math.PI/2,Mt.add(Yt);let Xt=e=>{let t=qt.g;t.fillStyle=`#ecebe4`,t.fillRect(0,0,512,224),t.strokeStyle=`#222`,t.lineWidth=6,t.strokeRect(6,6,500,212),t.fillStyle=`#222`,t.font=`bold 40px Arial, sans-serif`,t.textAlign=`left`,t.fillText(`TITAN LOCK  GD-5`,26,64),t.font=`30px Arial, sans-serif`,t.fillText(`SN`,26,150),t.font=`bold 64px "Courier New", monospace`,t.fillText(e,82,156),t.font=`22px Arial, sans-serif`,t.fillText(`AC · 50 Hz · IP54`,26,200),Jt.needsUpdate=!0};$(D(.004,.6,.47,new Z({color:`#a4a8aa`,roughness:.8,metalness:.2}),-.024,-.07,0,Mt),.42);for(let e of[-1,1])$(D(.025,.56,.05,_,-.034999999999999996,-.07,e*.2,Mt),.4);for(let e=0;e<5;e++){let t=new Y(new X(.04,.04),new zo({map:nm(String(e+1),{w:96,h:96,bg:`#ecebe4`,font:`bold 70px Arial, sans-serif`})}));t.position.set(Lt,Rt(e),-.25),t.rotation.y=-Math.PI/2,Mt.add(t);for(let t of[-1,1]){let n=new Y(new Os(.009,.009,.01,12),g);n.rotation.z=Math.PI/2,n.position.set(-.05,Rt(e),t*.2),Mt.add(n)}}let Zt=new zo({colorWrite:!1,depthWrite:!1}),Qt=[0,1,2,3,4].map(e=>{let t=Rt(e),n=new zs([new q(-.044,t,-.19),new q(-.07,t-.022,0),new q(-.044,t,.19)]),r=new Z({color:`#888`,roughness:.42,emissive:`#ffffff`,emissiveIntensity:0}),i=new Y(new Qc(n,28,.0095,8),r),a=n.getPoints(40),o=new Y(new Qc(new zs(a.slice(0,18)),14,.0095,8),r),s=new Y(new Qc(new zs(a.slice(23)),14,.0095,8),r),c=new Z({color:`#c77a3a`,metalness:1,roughness:.3}),l=new Y(new Xc(.006,8,6),c);l.position.copy(a[17]);let u=new Y(new Xc(.006,8,6),c);u.position.copy(a[23]);let d=new J;d.add(o,s,l,u),d.visible=!1;let f=new Y(new Qc(n,10,.03,6),Zt);return f.layers.set(5),f.userData.wire=e,Mt.add(i,d,f),$(i,.45),$(d,.45),{full:i,cut:d,pick:f,mat:r,mid:a[20]}}),$t=new Mo(new vo({map:(()=>{let{c:e,g:t}=Hp(64),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(255,255,230,1)`),n.addColorStop(.3,`rgba(255,190,80,0.8)`),n.addColorStop(1,`rgba(255,120,20,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),new xs(e)})(),blending:2,depthWrite:!1,transparent:!0,toneMapped:!1}));$t.scale.setScalar(.09),$t.visible=!1,Mt.add($t);let en=``,tn=!1,nn=0,rn=0,an=e=>{let t=JSON.stringify(e);t!==en&&(en=t,e.wires.forEach((e,t)=>Qt[t].mat.color.set(Le.find(t=>t.id===e).hex)),Wt.rotation.x=(-120+240*e.volt/500)*Math.PI/180,Xt(e.serial))},on=(e,t)=>{let n=new J;n.position.copy(e),n.lookAt(t);let r=new Y(new Ts(.12,.11,.3),new Z({color:`#d9dbd8`,roughness:.4}));r.position.z=-.08,n.add(r);let i=new Y(new Ts(.15,.015,.34),r.material);i.position.set(0,.065,-.06),n.add(i);let a=new Y(new Ds(.035,16),new Z({color:`#05070a`,roughness:.05,metalness:.6}));a.position.z=.071,n.add(a);let o=new Y(new Xc(.008,8,6),b(`#ff2020`,8));o.position.set(.04,-.035,.072),n.add(o);let s=new Y(new Os(.015,.015,.22,8),h);return s.position.set(0,.14,-.15),n.add(s),$(n,.4),E(n),n};for(let e of Nh)on(e.pos,e.look);let sn=[];for(let[e,t]of[[.8,fe-.15],[-.75,de+.15]]){let n=new Y(new Xc(.08,16,8,0,Math.PI*2,0,Math.PI/2),b(`#ff3010`,0));n.rotation.x=Math.PI,n.position.set(e,V-.01,t),$(E(n),.35);let r=new Yl(`#ff2010`,0,14,1.2);r.position.set(e,V-.25,t+(t>-1?-.4:.4)),E(r),sn.push({dome:n,light:r})}let cn=new Z({color:`#1d1e20`,roughness:.6}),ln=new Z({color:`#1b1e22`,roughness:.8}),un=new Z({color:`#1d2430`,roughness:.85}),dn=new Z({color:`#0c0c0d`,roughness:.5}),fn=new Z({color:`#111214`,roughness:.6});function pn(){let e=new J,t=new J;e.add(t);let n=new Y(new Es(.19,.36,6,16),ln);n.scale.set(1,1,.75),n.position.y=1.2,t.add($(n,.8));let r=new Y(new Es(.16,.08,4,12),un);r.scale.set(1.05,1,.75),r.position.y=.86,t.add($(r,.74));let i=new Y(new Os(.06,.07,.1,10),cn);i.position.y=1.52,t.add($(i,.9));let a=new Y(new Xc(.11,20,14),cn);a.scale.set(.95,1.1,1),a.position.y=1.65,t.add($(a,.95));let o=new Y(new Ts(.12,.03,.02),new Z({color:`#c99a7a`,roughness:.6}));o.position.set(0,1.68,-.1),t.add($(o,1));let s=new Y(new Xc(.135,16,10,0,Math.PI*2,0,Math.PI*.6),ln);s.position.set(0,1.66,.025),s.rotation.x=-.25,t.add($(s,.7));for(let e of[-1,1]){let n=new Y(new Es(.075,.34,4,10),un);n.position.set(e*.1,.62,0),t.add($(n,.72));let r=new Y(new Es(.065,.32,4,10),un);r.position.set(e*.1,.25,.01),t.add($(r,.7));let i=new Y(new Ts(.1,.07,.24),dn);i.position.set(e*.1,.035,-.04),t.add($(i,.45));let a=new Y(new Es(.058,.26,4,10),ln);a.position.set(e*.25,1.24,0),a.rotation.z=e*.12,t.add($(a,.78));let o=new Y(new Es(.05,.24,4,10),ln);o.position.set(e*.28,.96,-.08),o.rotation.x=.45,t.add($(o,.78));let s=new Y(new Xc(.05,10,8),fn);s.position.set(e*.28,.82,-.17),t.add($(s,.82))}let c=new Y(new Es(.15,.36,6,12),Ae);c.rotation.z=Math.PI/2,c.position.set(0,1.25,.21),t.add($(c,.24));for(let e of[-1,1]){let n=new Y(new Zc(.2,.015,6,16,Math.PI),Ae);n.rotation.y=Math.PI/2,n.position.set(e*.12,1.25,.02),t.add($(n,.3))}return E(e),jh(e),{body:e,fig:t,layer:-1}}let mn=new Map,hn=new vo({map:(()=>{let{c:e,g:t}=Hp(128),n=t.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,`rgba(235,240,238,0.9)`),n.addColorStop(.5,`rgba(220,226,224,0.35)`),n.addColorStop(1,`rgba(220,226,224,0)`),t.fillStyle=n,t.fillRect(0,0,128,128);let r=new xs(e);return r.colorSpace=pr,r})(),transparent:!0,depthWrite:!1,opacity:0,color:`#c8d4ce`}),gn=[],_n=Vp(91),vn=Array.from({length:34},()=>({x:(_n()-.5)*1.8,y:.25+_n()*2.1,z:(_n()-.5)*1.3,s:1.1+_n()*1.2,sp:.3+_n()*.6}));for(let e of vn){let t=new Mo(hn);t.scale.setScalar(e.s),t.layers.set(3),t.visible=!1,E(t),gn.push(t)}let yn=ym(r,0,.1,fe+.3,{n:34,life:7,vel:[0,.02,-.42],spread:.75,rise:-.004,drift:.35,size:[.5,1.7],color:`#b4c4cd`,opacity:.22,seed:12}),bn=Sm(Mt,0,0,0,{n:22,speed:.9,seed:9}),xn=null,Sn=new oi,Cn=new q;function wn(e,t,n,i){let a=n.shared,o=Math.min(1,t*10),s=um(e);for(let e of Qe)e.mode===`flicker`&&(e.mesh.material.emissiveIntensity=3.2*s,e.light&&(e.light.intensity=6*s));{let t=Math.floor(e/8),n=e=>{let t=Math.sin(e*91.7+3.1)*43758.5453;return t-Math.floor(t)};n(t)<.45&&et.burst(t*8+1+n(t+.5)*6),et.tick(e);let r=et.age(e),i=r>=0&&r<.25?(Math.floor(r/.04)%2?.3:1)*(1-r/.25):0;tt.intensity=a.police?.powerCut?0:5*i,nt.emissiveIntensity=a.police?.powerCut?0:2.4*i}let c=e*3.2;qe.target.position.set(Ke.position.x+Math.cos(c)*3,.4,Ke.position.z+Math.sin(c)*3),Je.intensity=4+3*Math.max(0,Math.sin(c));let l=a.vault.openAt===null?0:$p((i-a.vault.openAt)/Fe),u=em($p(l/.3));for(let e of De)e.m.position.set(Math.cos(e.a)*(.98-.1*u),Math.sin(e.a)*(.98-.1*u),0);Oe.rotation.y=-1.15*em($p((l-.3)/.7)),Ie[1].group.visible=n.need>=2,Ie.forEach((e,t)=>{let n=a.vault.turned.has(t)?-Math.PI/2:0;e.key.rotation.z+=(n-e.key.rotation.z)*o,e.led.emissive.set(a.vault.openAt===null?`#ff2020`:`#22ff66`)}),He(a.vault.openAt!==null,n.need,i<a.keyLockUntil),We.visible=a.vault.openAt===null&&Math.sin(e*6)>0;let d=i<a.alarmUntil,f=d?.5+.5*Math.sin(e*14):0;for(let e of sn)e.light.intensity=d?4+18*f:0,e.dome.material.emissiveIntensity=d?2+10*f:.15;let p=r.fog;p.density+=((d?.16:.018)-p.density)*Math.min(1,t*(d?3:.5));let m=n.robbers.map(e=>e.s.smoke).find(e=>e&&i<e.until)??null;for(let t of at){let n=Ce(t.beam,e),r=Math.hypot(n.bx-n.ax,n.by-n.ay),a=Math.atan2(n.by-n.ay,n.bx-n.ax);Sn.setFromAxisAngle(Cn.set(0,0,1),a);for(let[e,i]of[[t.thermal,.016],[t.core,.0045],[t.glow,.03]])e.position.x=(n.ax+n.bx)/2,e.position.y=(n.ay+n.by)/2,e.quaternion.copy(Sn),e.scale.set(r,i,i);t.thermal.visible=n.on;let o=n.on&&!!m&&m.sec===t.sec;if(t.core.visible=t.glow.visible=o,o){let e=(m.until-i)/1e3;t.glow.material.opacity=.16*Math.min(1,e/1.5)}}if(m){let t=(m.until-i)/1e3,n=Math.max(0,9-t);hn.opacity=Math.max(0,Math.min(.42,.15+n*1.2)*Math.min(1,t/2)),gn.forEach((t,r)=>{let i=vn[r];t.visible=!0,t.position.set(i.x+Math.sin(e*i.sp+r)*.15,i.y+n*.03,me(m.sec)+i.z+Math.cos(e*i.sp*.7+r)*.12),t.material.rotation=e*.1*(r%2?1:-1)})}else gn.forEach(e=>e.visible=!1);let h=a.cabinet;an(h.shown);let g=h.solvedAt!==null||n.robbers.some(e=>e.s.focus===`cab`);g!==tn&&(tn=g,nn=i,rn=Pt.rotation.y),Pt.rotation.y=rn+((g?2.95:0)-rn)*em($p((i-nn)/650)),Qt.forEach((t,r)=>{let i=h.cutWire===r;t.full.visible=!i,t.cut.visible=i,t.mat.emissiveIntensity=n.selectedWire===r&&h.cutWire===null?.18+.12*Math.sin(e*8):0}),h.cutWire!==null&&h.cutWire!==xn&&(bn.mesh.position.copy(Qt[h.cutWire].mid),bn.burst(e)),xn=h.cutWire,bn.tick(e);let _=h.cutWire!==null&&(h.solvedAt===null||i-h.solvedAt<700);$t.visible=_&&Math.random()<.7,$t.visible&&h.cutWire!==null&&($t.position.copy(Qt[h.cutWire].mid).add(new q(-.01,(Math.random()-.5)*.02,(Math.random()-.5)*.03)),$t.scale.setScalar(.05+Math.random()*.08));let v=a.garageOpenAt===null?0:$p((i-a.garageOpenAt-600)/1800);for(let e of bt)e.pivot.rotation.y=-e.sx*1.45*em(v);xt.emissive.set(a.garageOpenAt===null?`#ff2a2a`:`#22ff66`);let y=rt(!!a.police?.powerCut,e);for(let e of Qe){if(e.mode===`dead`)continue;let t=e.mesh.material;if(y===`on`){if(e.mode===`flicker`)continue;e.light&&(e.light.intensity=6,e.light.color.set(`#d9ffe6`)),t.emissiveIntensity=3.2}else{let n=y===`cut`&&e.mode!==`flicker`;e.light&&(e.light.intensity=n?1.3:0,e.light.color.set(`#ff5a40`)),t.emissiveIntensity=n?.25:0}}if(a.vault.openAt!==null){let e=(i-a.vault.openAt)/1e3;yn.strength=$p((e-1.2)/1.5)*$p(1-(e-6)/24)}else yn.strength=0;yn.tick(e),wt.update(e,t,n,i),Tt.update(e,t,n,i),Et.update(e,t,n,i),Dt.update(e,t,n,i),Ot.update(e,t,n,i);let b=new Set;for(let e of n.robbers){b.add(e.id);let t=mn.get(e.id);t||mn.set(e.id,t=pn());let n=e.self?2:4;t.layer!==n&&(tm(t.body,n),jh(t.body),t.layer=n),t.body.visible=(a.finale.departAt===null||e.s.sp!==23)&&e.s.vent===null,t.body.position.set(e.s.x,0,e.s.z),t.body.rotation.y=e.s.yaw;let r=(e.s.h-ve)/(_e-ve);t.fig.scale.y=.55+.45*r,t.fig.rotation.x=-(1-r)*.35}for(let[e,t]of mn)b.has(e)||(t.body.removeFromParent(),mn.delete(e))}return{scene:r,sections:it,lasers:at,wirePicks:Qt.map(e=>e.pick),breakerPicks:wt.breakerPicks,kurPicks:Ot.picks,centralPicks:Tt.picks,centralScreens:Tt.screens,update:wn,dispose(){r.traverse(e=>{let t=e;t.geometry&&t.geometry.dispose()})}}}var Rh=.14,zh=`
varying vec3 vWorld;
varying vec3 vViewN;
varying float vDist;
void main() {
  vec4 p = vec4(position, 1.0);
  vec3 n = normal;
  #ifdef USE_INSTANCING
    p = instanceMatrix * p;
    n = mat3(instanceMatrix) * n;
  #endif
  vec4 w = modelMatrix * p;
  vWorld = w.xyz;
  vViewN = normalize(normalMatrix * n);
  vec4 mv = viewMatrix * w;
  vDist = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`,Bh=`
uniform float uHeat;
varying vec3 vWorld;
varying vec3 vViewN;
varying float vDist;
float hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
void main() {
  float h = uHeat;
  float facing = abs(vViewN.z);
  // kalla ytor: lite struktur och varmare luft uppåt; varma föremål: kanterna svalare
  float cold = 1.0 - smoothstep(0.3, 0.7, uHeat);
  h += (facing - 0.6) * mix(0.12, 0.03, cold);
  h += (hash(floor(vWorld * 14.0)) - 0.5) * 0.025 * cold;
  h += clamp(vWorld.y / 2.8, 0.0, 1.0) * 0.025 * cold;
  // långt bort: allt flyter mot omgivningens temperatur
  // (lasrarna – heat 1 – är så heta att de syns hela vägen)
  h = mix(h, 0.13, clamp(vDist / 45.0, 0.0, 0.45) * mix(0.5, 1.0, cold) * step(uHeat, 0.97));
  gl_FragColor = vec4(h, h, h, 1.0);
}
`,Vh=new Map;function Hh(e){let t=Math.round(e*100),n=Vh.get(t);return n||(n=new sl({uniforms:{uHeat:{value:t/100}},vertexShader:zh,fragmentShader:Bh,side:2}),Vh.set(t,n)),n}function Uh(e,t){let n=[],r=[],i=e.background,a=e.fog;e.traverse(e=>{if(e.isMesh){let t=e;n.push([t,t.material]),t.material=Hh(t.userData.heat??Rh)}else e.isSprite&&e.visible&&(r.push(e),e.visible=!1)}),e.background=new ua(.12,.12,.12),e.fog=null;try{t()}finally{for(let[e,t]of n)e.material=t;for(let e of r)e.visible=!0;e.background=i,e.fog=a}}function Wh(){return new sl({uniforms:{tDiffuse:{value:null},uMode:{value:0},uTime:{value:0},uRes:{value:new K(640,360)},uSignal:{value:1},uSmall:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
    `,fragmentShader:`
      uniform sampler2D tDiffuse;
      uniform float uMode;
      uniform float uTime;
      uniform vec2 uRes;
      uniform float uSignal;
      uniform float uSmall;
      varying vec2 vUv;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      vec3 ironbow(float t) {
        t = clamp(t, 0.0, 1.0);
        vec3 c0 = vec3(0.0, 0.0, 0.02);
        vec3 c1 = vec3(0.16, 0.02, 0.38);
        vec3 c2 = vec3(0.70, 0.05, 0.42);
        vec3 c3 = vec3(0.96, 0.36, 0.06);
        vec3 c4 = vec3(1.0, 0.80, 0.18);
        vec3 c5 = vec3(1.0, 1.0, 0.92);
        if (t < 0.2) return mix(c0, c1, t / 0.2);
        if (t < 0.45) return mix(c1, c2, (t - 0.2) / 0.25);
        if (t < 0.68) return mix(c2, c3, (t - 0.45) / 0.23);
        if (t < 0.88) return mix(c3, c4, (t - 0.68) / 0.2);
        return mix(c4, c5, (t - 0.88) / 0.12);
      }
      void main() {
        // fisheye
        vec2 c = vUv - 0.5;
        float r2 = dot(c, c);
        vec2 uv = 0.5 + c * (1.0 - 0.16 * r2) * 1.04;
        if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }
        vec2 px = 1.0 / uRes;
        float n = hash(vUv * uRes + fract(uTime * 7.0) * 100.0);
        vec3 col;
        if (uMode > 0.5) {
          // värmebild: lätt oskärpa (sensorn är grov) och järnbåge
          float h = texture2D(tDiffuse, uv).r * 0.4;
          h += texture2D(tDiffuse, uv + vec2(px.x, 0.0)).r * 0.15;
          h += texture2D(tDiffuse, uv - vec2(px.x, 0.0)).r * 0.15;
          h += texture2D(tDiffuse, uv + vec2(0.0, px.y)).r * 0.15;
          h += texture2D(tDiffuse, uv - vec2(0.0, px.y)).r * 0.15;
          float t = (h - 0.06) / 0.9;
          t += (n - 0.5) * 0.035;
          col = ironbow(t);
        } else {
          vec3 s = texture2D(tDiffuse, uv).rgb;
          s = s / (1.0 + s); // enkel tonmappning (RT är linjär HDR)
          float l = dot(s, vec3(0.299, 0.587, 0.114));
          l = pow(l, 0.62);
          l = smoothstep(0.02, 0.85, l);
          l += (n - 0.5) * 0.12;
          col = vec3(l) * vec3(0.92, 1.0, 0.94);
        }
        // svepande linjer och ett långsamt ljusband
        float line = 0.92 + 0.08 * sin(vUv.y * uRes.y * 1.6);
        float band = 1.0 + 0.06 * smoothstep(0.0, 0.08, 0.08 - abs(fract(vUv.y * 0.6 - uTime * 0.07) - 0.5));
        col *= line * band;
        // vinjett
        col *= 1.0 - smoothstep(0.25, 0.75, r2 * 1.8) * 0.55;
        // ingen signal → snö
        if (uSignal < 0.5) col = vec3(n * 0.7);
        gl_FragColor = vec4(col, 1.0);
      }
    `,depthTest:!1,depthWrite:!1})}var Gh={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Kh=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},qh=new Xl(-1,1,1,-1,0,1),Jh=new class extends so{constructor(){super(),this.setAttribute(`position`,new Ya([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new Ya([0,2,0,0,2,0],2))}},Yh=class{constructor(e){this._mesh=new Y(Jh,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,qh)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Xh=class extends Kh{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof sl?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=il.clone(e.uniforms),this.material=new sl({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Yh(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Zh=class extends Kh{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Qh=class extends Kh{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},$h=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new K);this._width=n.width,this._height=n.height,t=new Di(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:sn}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Xh(Gh),this.copyPass.material.blending=0,this.timer=new nu}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Zh!==void 0&&(r instanceof Zh?n=!0:r instanceof Qh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new K);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},eg={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},tg=class extends Kh{constructor(){super(),this.isOutputPass=!0,this.uniforms=il.clone(eg.uniforms),this.material=new cl({name:eg.name,uniforms:this.uniforms,vertexShader:eg.vertexShader,fragmentShader:eg.fragmentShader}),this._fsQuad=new Yh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},mi.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},ng=class extends Kh{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ua}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},rg={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ua(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},ig=class e extends Kh{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new K(256,256):new K(e.x,e.y),this.clearColor=new ua(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Di(i,a,{type:sn,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Di(i,a,{type:sn,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Di(i,a,{type:sn,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=rg;this.highPassUniforms=il.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new sl({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new K(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=il.clone(Gh.uniforms),this.blendMaterial=new sl({uniforms:this.copyUniforms,vertexShader:Gh.vertexShader,fragmentShader:Gh.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ua,this._oldClearAlpha=1,this._basic=new zo,this._fsQuad=new Yh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new K(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new sl({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new K(.5,.5)},direction:{value:new K(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new sl({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ig.BlurDirectionX=new K(1,0),ig.BlurDirectionY=new K(0,1);var ag={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:`x`,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new K},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ai},cameraProjectionMatrixInverse:{value:new Ai},cameraWorldMatrix:{value:new Ai},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new q(-1,-1,-1)},sceneBoxMax:{value:new q(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},og={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},sg={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function cg(e=5){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=lg(t),r=n.length,i=new Uint8Array(r*4);for(let e=0;e<r;++e){let t=n[e],a=2*Math.PI*t/r,o=new q(Math.cos(a),Math.sin(a),0).normalize();i[e*4]=(o.x*.5+.5)*255,i[e*4+1]=(o.y*.5+.5)*255,i[e*4+2]=127,i[e*4+3]=255}let a=new $o(i,t,t);return a.wrapS=Wt,a.wrapT=Wt,a.needsUpdate=!0,a}function lg(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;){if(i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]!==0){a-=2,i++;continue}r[i*t+a]=e++,a++,i--}return r}var ug={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:dg(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new K},cameraProjectionMatrixInverse:{value:new Ai},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function dg(e,t,n){let r=fg(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function fg(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,o=(i/(e-1))**n;r.push(new q(Math.cos(a),Math.sin(a),o))}return r}var pg=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,k=_-C+2*d,ee=v-w+2*d,A=g-1+3*d,te=_-1+3*d,j=v-1+3*d,M=c&255,N=l&255,P=u&255,ne=this.perm[M+this.perm[N+this.perm[P]]]%12,re=this.perm[M+y+this.perm[N+b+this.perm[P+x]]]%12,ie=this.perm[M+S+this.perm[N+C+this.perm[P+w]]]%12,ae=this.perm[M+1+this.perm[N+1+this.perm[P+1]]]%12,F=.6-g*g-_*_-v*v;F<0?r=0:(F*=F,r=F*F*this._dot3(this.grad3[ne],g,_,v));let I=.6-T*T-E*E-D*D;I<0?i=0:(I*=I,i=I*I*this._dot3(this.grad3[re],T,E,D));let L=.6-O*O-k*k-ee*ee;L<0?a=0:(L*=L,a=L*L*this._dot3(this.grad3[ie],O,k,ee));let R=.6-A*A-te*te-j*j;return R<0?o=0:(R*=R,o=R*R*this._dot3(this.grad3[ae],A,te,j)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,k=w>E?16:0,ee=T>E?8:0,A=w>D?4:0,te=T>D?2:0,j=+(E>D),M=O+k+ee+A+te+j,N=+(a[M][0]>=3),P=+(a[M][1]>=3),ne=+(a[M][2]>=3),re=+(a[M][3]>=3),ie=+(a[M][0]>=2),ae=+(a[M][1]>=2),F=+(a[M][2]>=2),I=+(a[M][3]>=2),L=+(a[M][0]>=1),R=+(a[M][1]>=1),z=+(a[M][2]>=1),oe=+(a[M][3]>=1),se=w-N+c,ce=T-P+c,le=E-ne+c,ue=D-re+c,B=w-ie+2*c,V=T-ae+2*c,de=E-F+2*c,fe=D-I+2*c,pe=w-L+3*c,me=T-R+3*c,he=E-z+3*c,H=D-oe+3*c,ge=w-1+4*c,_e=T-1+4*c,ve=E-1+4*c,U=D-1+4*c,ye=h&255,W=g&255,be=_&255,xe=v&255,Se=o[ye+o[W+o[be+o[xe]]]]%32,Ce=o[ye+N+o[W+P+o[be+ne+o[xe+re]]]]%32,we=o[ye+ie+o[W+ae+o[be+F+o[xe+I]]]]%32,Te=o[ye+L+o[W+R+o[be+z+o[xe+oe]]]]%32,G=o[ye+1+o[W+1+o[be+1+o[xe+1]]]]%32,Ee=.6-w*w-T*T-E*E-D*D;Ee<0?l=0:(Ee*=Ee,l=Ee*Ee*this._dot4(i[Se],w,T,E,D));let De=.6-se*se-ce*ce-le*le-ue*ue;De<0?u=0:(De*=De,u=De*De*this._dot4(i[Ce],se,ce,le,ue));let Oe=.6-B*B-V*V-de*de-fe*fe;Oe<0?d=0:(Oe*=Oe,d=Oe*Oe*this._dot4(i[we],B,V,de,fe));let ke=.6-pe*pe-me*me-he*he-H*H;ke<0?f=0:(ke*=ke,f=ke*ke*this._dot4(i[Te],pe,me,he,H));let Ae=.6-ge*ge-_e*_e-ve*ve-U*U;return Ae<0?p=0:(Ae*=Ae,p=Ae*Ae*this._dot4(i[G],ge,_e,ve,U)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},mg=class e extends Kh{constructor(e,t,n=512,r=512,i,a,o){super(),this.width=n,this.height=r,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=cg(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Di(this.width,this.height,{type:sn,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new sl({defines:Object.assign({},ag.defines),uniforms:il.clone(ag.uniforms),vertexShader:ag.vertexShader,fragmentShader:ag.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ul,this.normalMaterial.blending=0,this.pdMaterial=new sl({defines:Object.assign({},ug.defines),uniforms:il.clone(ug.uniforms),vertexShader:ug.vertexShader,fragmentShader:ug.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new sl({defines:Object.assign({},og.defines),uniforms:il.clone(og.uniforms),vertexShader:og.vertexShader,fragmentShader:og.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new sl({uniforms:il.clone(Gh.uniforms),vertexShader:Gh.vertexShader,fragmentShader:Gh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new sl({uniforms:il.clone(sg.uniforms),vertexShader:sg.vertexShader,fragmentShader:sg.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new Yh(null),this._originalClearColor=new ua,this.setGBuffer(i?i.depthTexture:void 0,i?i.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e===void 0?(this.depthTexture=new Ss,this.depthTexture.format=_n,this.depthTexture.type=un,this.normalRenderTarget=new Di(this.width,this.height,{minFilter:qt,magFilter:qt,type:sn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0):(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1);let n=+!!this.normalTexture,r=this.depthTexture===this.normalTexture?`w`:`x`;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=dg(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case e.OUTPUT.Off:break;case e.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new pg,n=e*e*4,r=new Uint8Array(n);for(let n=0;n<e;n++)for(let i=0;i<e;i++){let a=n,o=i;r[(n*e+i)*4]=(t.noise(a,o)*.5+.5)*255,r[(n*e+i)*4+1]=(t.noise(a+e,o)*.5+.5)*255,r[(n*e+i)*4+2]=(t.noise(a,o+e)*.5+.5)*255,r[(n*e+i)*4+3]=(t.noise(a+e,o+e)*.5+.5)*255}let i=new $o(r,e,e,hn,$t);return i.wrapS=Wt,i.wrapT=Wt,i.needsUpdate=!0,i}};mg.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var hg={uniforms:{tDiffuse:{value:null},uTime:{value:0},uRed:{value:0},uTint:{value:new q(1,1,1)},uSat:{value:1},uCon:{value:1}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uTime; uniform float uRed; uniform vec3 uTint; uniform float uSat; uniform float uCon; varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec2 d = vUv - 0.5;
      float r2 = dot(d, d);
      // kromatisk aberration ut mot kanterna
      vec2 off = d * r2 * 0.012;
      vec3 c = vec3(texture2D(tDiffuse, vUv + off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - off).b);
      // färgton
      c *= uTint;
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c = mix(vec3(l), c, uSat);
      c = (c - 0.5) * uCon + 0.5;
      c = max(c, 0.0);
      c *= 1.0 - smoothstep(0.2, 0.85, r2 * 2.2) * 0.6;
      c += (hash(vUv * 900.0 + fract(uTime) * 50.0) - 0.5) * 0.035;
      c = mix(c, c * vec3(1.4, 0.35, 0.3) + vec3(0.12, 0.0, 0.0), uRed);
      gl_FragColor = vec4(c, 1.0);
    }`},gg={vault:{tint:[1.08,.94,.9],sat:1.05,con:1.08},corridor:{tint:[.95,1.03,.99],sat:.88,con:1.1},tech:{tint:[.93,1,1.07],sat:.95,con:1.08},central:{tint:[.9,.97,1.13],sat:.95,con:1.1},vent:{tint:[1.06,1,.9],sat:.72,con:1.16},garage:{tint:[1.07,1,.88],sat:.92,con:1.08}},_g={[G.TECH]:{x:2.4,z:ih,yaw:-Math.PI/2,name:i(`Teknikrummet`,`Tech room`)},[G.CENTRAL]:{x:-2.6,z:pe[5],yaw:Math.PI/2,name:i(`Säkerhetscentralen`,`Security room`)},[G.G0]:{x:0,z:Gm-1.4,yaw:0,name:i(`Garaget`,`Garage`)},[G.KUR]:{x:-4.3,z:-31.9,yaw:Math.PI/2,name:i(`Vaktkuren`,`Guard booth`)},[G.PORT]:{x:.9,z:Km+1.3,yaw:0,name:i(`Porten`,`Gate`)},[G.CAR]:{x:1.2,z:-30.4,yaw:-Math.PI/2-.15,name:i(`Bilarna`,`Cars`)}},vg=[G.G0,G.KUR,G.PORT,G.CAR],yg=[0,-Math.PI/2,Math.PI,Math.PI/2],bg=[.3,-30.2],xg={[G.KUR]:[-3.7,-29.9]},Sg=e=>e>=0&&e<=6?[0,pe[e]]:[_g[e].x,_g[e].z];function Cg(e,t){let n=Sg(e),r=Sg(t);if(vg.includes(e)&&vg.includes(t)){let i=[n];return xg[e]&&i.push(xg[e]),i.push(bg),xg[t]&&i.push(xg[t]),i.push(r),i}return e===5&&t===G.CENTRAL||e===G.CENTRAL&&t===5?[n,[-1.35,pe[5]],r]:e===3&&t===G.TECH||e===G.TECH&&t===3?[n,[1.35,ih],r]:e===6&&t===G.G0||e===G.G0&&t===6?[n,[0,de],r]:vg.includes(e)&&t===6?[...Cg(e,G.G0),...Cg(G.G0,6).slice(1)]:[n,r]}function wg(e,t){let n=e.slice(1).map((t,n)=>Math.hypot(t[0]-e[n][0],t[1]-e[n][1])),r=t*n.reduce((e,t)=>e+t,0);for(let t=0;t<n.length;t++){if(r<=n[t]||t===n.length-1){let i=n[t]?Math.min(1,r/n[t]):1;return[e[t][0]+(e[t+1][0]-e[t][0])*i,e[t][1]+(e[t+1][1]-e[t][1])*i]}r-=n[t]}return e[e.length-1]}var Tg=e=>e.slice(1).reduce((t,n,r)=>t+Math.hypot(n[0]-e[r][0],n[1]-e[r][1]),0),Eg=e=>e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),Dg=class{world;store;roomCode;el;renderer;camera;composer;fx;s;sh;move=null;duck=!1;duckFrom=_e;duckT0=0;lockedUntil=0;myKeyAt=0;selected=null;lookYaw=0;lookPitch=-.04;drag=null;lastSent=0;dirty=!0;bob=0;shake=0;lastAlarm=0;seen=new Set;focusK=0;maze;crawl=null;flash;monitors=[];monitorTurn=0;shadows;lastFocus=`cab`;holding=!1;holdPointer=null;holdTimer=0;keypad=``;overlay=`none`;zoom=null;btnKey=``;toastTimer=0;ui={};stopHum=()=>{};ro;raycaster=new _u;keyHandler=e=>this.onKey(e);keyUpHandler=e=>{e.key.toLowerCase()===`h`&&this.setHold(!1)};constructor(e,t,n,r){this.world=e,this.store=t,this.roomCode=r,this.s=Ee(t.slot),this.faceKey(),this.sh=t.shared(),this.el=document.createElement(`div`),this.el.className=`view robber`,this.el.innerHTML=`
      <canvas></canvas>
      <div class="flash"></div>
      <div class="hud top">
        <div class="tag">LIND &amp; SJÖBERG · ${i(`KÄLLARPLAN`,`BASEMENT`)} −2${r?` · ${i(`RUM`,`ROOM`)} ${r}`:``}</div>
        <div class="where" data-ui="where"></div>
        <div class="goal" data-ui="goal"></div>
        <div class="stats"><span data-ui="police" class="police"></span><span data-ui="hits"></span><span data-ui="fixer"></span></div>
      </div>
      <div class="toast" data-ui="toast"></div>
      <div class="zoom-tag" data-ui="zoomTag" hidden></div>
      <div class="hint" data-ui="hint">
        ${i(`<b>Du är rånaren.</b> Ni är i valvet med bytet, och polisen är på väg.`,`<b>You are the Robber.</b> You’re in the vault with the loot, and the police are on their way.`)}
        <ul>
          <li>${i(`Fixaren ser kamerorna och har manualerna. Du ser rummet. <b>Prata hela tiden.</b>`,`The Fixer sees the cameras and has the manuals. You see the room. <b>Keep talking.</b>`)}</li>
          <li>${i(`Raden <b>🎯</b> överst visar vad ni ska göra härnäst.`,`The <b>🎯</b> line at the top shows what to do next.`)}</li>
        </ul>
        <button data-act="hint-ok">${i(`Uppfattat – kör!`,`Copy that – go!`)}</button>
      </div>
      <div class="focus-hint" data-ui="focusHint"></div>
      <div class="vent-info" data-ui="ventInfo"></div>
      <div class="fade" data-ui="fade"></div>
      <div class="controls-wrap">
        <div class="nav" data-ui="nav"></div>
        <div class="controls" data-ui="controls"></div>
      </div>
      <div class="sheet" data-ui="sheet"></div>
      <div class="talk" data-ui="talk"></div>
      <div class="done" data-ui="done"></div>
    `;for(let e of this.el.querySelectorAll(`[data-ui]`))this.ui[e.dataset.ui]=e;this.el.addEventListener(`click`,e=>{let t=e.target.closest(`[data-act]`);t&&!t.hasAttribute(`disabled`)&&(P(),this.act(t.dataset.act))}),this.el.addEventListener(`pointerdown`,e=>{let t=e.target.closest(`[data-hold]`);if(t&&!t.hasAttribute(`disabled`)){e.preventDefault(),P();let t=e.pointerId;this.holdPointer=t,clearTimeout(this.holdTimer),this.holdTimer=window.setTimeout(()=>this.holdPointer===t&&this.setHold(!0),300)}});let a=e=>{e.pointerId===this.holdPointer&&(this.holdPointer=null,clearTimeout(this.holdTimer),this.setHold(!1))};window.addEventListener(`pointerup`,a),window.addEventListener(`pointercancel`,a);let o=this.el.querySelector(`canvas`);if(this.renderer=new Bp({canvas:o,antialias:n!==`low`,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,{low:1,medium:1.5,high:2}[n])),D(this.renderer,`rånarvyn`),this.renderer.toneMapping=6,this.renderer.toneMappingExposure=1,this.camera=new Gl(72,1,.05,80),this.camera.rotation.order=`YXZ`,this.camera.layers.set(0),this.camera.layers.enable(3),this.camera.layers.enable(4),this.camera.layers.enable(6),this.raycaster.layers.set(5),this.maze=xt(t.seed),this.flash=new ql(`#fff3dc`,0,7,.62,.6,1.1),e.scene.add(this.flash,this.flash.target),this.composer=new $h(this.renderer),this.composer.addPass(new ng(e.scene,this.camera)),n===`high`){let t=new mg(e.scene,this.camera,512,512);t.blendIntensity=.9,t.updateGtaoMaterial({radius:.4,distanceExponent:1.4,thickness:1.2,scale:1.1}),this.composer.addPass(t)}n!==`low`&&this.composer.addPass(new ig(new K(256,256),.36,.5,.88)),this.composer.addPass(new tg),this.fx=new Xh(hg),this.composer.addPass(this.fx),this.shadows=Mh(e.scene,this.renderer,n),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(this.el),this.bindPointer(o),window.addEventListener(`keydown`,this.keyHandler),window.addEventListener(`keyup`,this.keyUpHandler),this.store.onEvent(e=>{e.kind===`reset`&&e.by!==t.selfId&&this.reset(!1)}),this.store.onChange(()=>{this.store.slot!==this.s.slot&&this.s.sp===-1&&!this.move&&(this.s.slot=this.store.slot,this.s.x=H[this.s.slot],this.faceKey(),this.publish(!0))}),this.publish(!0)}faceKey(){this.lookYaw=this.s.slot===1?-.35:.35,this.lookPitch=-.38}get state(){return this.s}resize(){let e=this.el.clientWidth,t=this.el.clientHeight;e&&t&&(this.renderer.setSize(e,t,!1),this.composer.setSize(e,t),this.camera.aspect=e/t,this.camera.fov=e/t<.8?84:72,this.camera.updateProjectionMatrix())}bindPointer(e){e.addEventListener(`pointerdown`,t=>{P(),this.drag={x:t.clientX,y:t.clientY,yaw:this.lookYaw,pitch:this.lookPitch,id:t.pointerId,moved:!1},e.setPointerCapture(t.pointerId)}),e.addEventListener(`pointermove`,e=>{if(!this.drag||e.pointerId!==this.drag.id||(Math.hypot(e.clientX-this.drag.x,e.clientY-this.drag.y)>8&&(this.drag.moved=!0),this.s.focus))return;let t=e.pointerType===`touch`?.006:.004;if(this.lookYaw=this.drag.yaw-(e.clientX-this.drag.x)*t,this.s.sp===G.VENT&&this.s.vent&&!this.crawl){let e=yg[this.s.vent[1]],t=this.lookYaw-e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;this.lookYaw=e+ai.clamp(t,-.6,.6)}this.lookPitch=ai.clamp(this.drag.pitch-(e.clientY-this.drag.y)*t,-.9,.7)}),e.addEventListener(`pointerup`,t=>{let n=this.drag;if(this.drag=null,!n||n.moved||!this.s.focus||this.zoom!==null)return;let r=e.getBoundingClientRect(),i=new K((t.clientX-r.left)/r.width*2-1,-((t.clientY-r.top)/r.height)*2+1);this.raycaster.setFromCamera(i,this.camera);let a=this.s.focus,o=a===`cab`?this.world.wirePicks:a===`tech`?this.world.breakerPicks:a===`kur`?this.world.kurPicks:a===`central`?this.world.centralPicks:[],s=this.raycaster.intersectObjects(o,!1)[0];if(!s)return;let c=s.object.userData;a===`cab`?this.select(c.wire):a===`tech`?this.select(c.breaker):a===`kur`?this.openKur(c.pick):a===`central`&&this.centralPick(c.pick)}),e.addEventListener(`pointercancel`,()=>this.drag=null)}onKey(e){if(e.repeat)return;let t=e.key.toLowerCase();if(this.overlay===`keypad`)return/^[0-9]$/.test(t)?this.act(`d${t}`):t===`backspace`?this.act(`del`):t===`enter`?this.act(`ok`):t===`escape`?this.act(`sheet-close`):void 0;if(this.overlay===`doc`){(t===`escape`||t===`enter`)&&this.act(`sheet-close`);return}if(t===`h`){this.setHold(!0);return}if(this.s.focus)return this.s.focus===`cab`&&t>=`1`&&t<=`5`?this.select(Number(t)-1):t===`x`||t===`enter`?this.act(this.s.focus===`cab`?`cut`:this.s.focus===`tech`?`flip`:`none`):t===`escape`||t===`s`||t===`arrowdown`?this.act(`close`):void 0;if(this.s.sp===G.VENT){let n={arrowup:`vfwd`,w:`vfwd`,arrowleft:`vleft`,a:`vleft`,arrowright:`vright`,d:`vright`,arrowdown:`vback`,s:`vback`};n[t]&&(e.preventDefault(),this.act(n[t]));return}let n={arrowup:`main`,w:`main`,enter:`main`,arrowdown:`back`,s:`back`," ":`duck`,c:`duck`,f:`spray`};n[t]&&(e.preventDefault(),P(),this.act(n[t]))}select(e){(this.s.focus!==`cab`||this.sh.cabinet.cutWire===null)&&(this.s.focus!==`tech`||this.sh.tech.breakerAt===null)&&(this.selected=e,I(1800,.03,.04))}banner(e,t,n=4500){this.ui.toast.innerHTML=`<b>${Eg(e)}</b><span>${Eg(t)}</span>`,this.ui.toast.classList.add(`show`,`banner`),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.ui.toast.classList.remove(`show`),n)}toast(e,t=3200){this.ui.toast.textContent=e,this.ui.toast.classList.remove(`banner`),this.ui.toast.classList.add(`show`),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.ui.toast.classList.remove(`show`),t)}mainBtn(e){let t=this.s,n=this.sh;if(t.sp===G.VAULT)return n.vault.openAt===null?{act:`key`,icon:`🔑`,text:e<n.keyLockUntil?i(`Låset spärrat …`,`Lock blocked …`):i(`Vrid nyckel ${`AB`[t.slot]}`,`Turn key ${`AB`[t.slot]}`),off:e<n.keyLockUntil||e-this.myKeyAt<1300,cls:`key`}:{act:`fwd`,icon:`▲`,text:i(`Gå ut`,`Exit`),off:e-n.vault.openAt<2600};if(this.toTech()&&t.sp>=0&&t.sp<=6){if(t.sp===3)return{act:`go:10`,icon:`🚪`,text:i(`Teknikrummet`,`Tech room`)};let e=t.sp>3;return{act:e?`back`:`fwd`,icon:this.arrow(e),text:i(`Mot teknikrummet`,`To the tech room`)}}if(t.sp===6)return n.cabinet.solvedAt===null?{act:`cab`,icon:`⚡`,text:i(`Elskåpet`,`Electrical cabinet`)}:{act:`go:20`,icon:`▲`,text:i(`Garaget`,`Garage`)};if(t.sp>=0&&t.sp<6)return{act:`fwd`,icon:`▲`,text:i(`Framåt`,`Forward`)};if(t.sp===G.TECH){let t=n.tech;return t.breakerAt===null?{act:`focus:tech`,icon:`⚡`,text:i(`Säkringarna`,`Breakers`)}:t.runningAt===null?t.crank?{act:`load`,icon:`⇄`,text:i(`Lägg över lasten`,`Switch the load`),cls:`key`}:{act:`crank`,icon:`⟳`,text:i(`Dra igång`,`Crank it`),off:e<t.coolUntil}:{act:`none`,icon:`✓`,text:i(`Generatorn går`,`Generator running`),off:!0}}if(t.sp===G.KUR)return{act:`focus:kur`,icon:`🔍`,text:i(`Undersök`,`Search`)};if(t.sp===G.CENTRAL)return{act:`focus:central`,icon:`🖥`,text:i(`Bildväggen`,`Monitor wall`)};if(t.sp===G.PORT)return n.portOpenAt===null?{act:`port`,icon:`▲`,text:i(`Öppna porten`,`Open the gate`)}:{act:`none`,icon:`✓`,text:i(`Porten öppen`,`Gate open`),off:!0};if(t.sp===G.CAR){let e=n.finale;return e.departAt===null?{act:`hold`,icon:`⇪`,text:i(`HÅLL – LASTA`,`HOLD – LOAD`),off:n.portOpenAt===null||!e.car,cls:`hold`}:{act:`none`,icon:`🚗`,text:i(`Iväg!`,`Go, go, go!`),off:!0}}return{act:`none`,icon:`·`,text:``,off:!0}}toTech(){let e=this.sh;return e.kur.solvedAt!==null&&(e.tech.runningAt===null||e.central.unlockedAt===null)&&e.portOpenAt===null}arrow(e){return e===Math.cos(this.lookYaw)<0?`▲`:`▼`}buttons(e){let t=this.s,n=this.sh,r=[],a=[];if(t.focus===`cab`){a.push({act:`close`,icon:`✕`,text:i(`Stäng`,`Close`),cls:`small`});let e=Math.ceil((n.cabinet.lockUntil-this.store.now())/1e3);return e>0&&n.cabinet.solvedAt===null?a.push({act:`none`,icon:`⏳`,text:i(`Reservkretsen – ${e} s`,`Backup circuit – ${e} s`),off:!0,cls:`big wide`}):a.push({act:`cut`,icon:`✂`,text:this.selected===null?i(`Välj kabel`,`Pick a wire`):i(`Kapa kabel ${this.selected+1}`,`Cut wire ${this.selected+1}`),off:this.selected===null,cls:`big wide danger`}),{nav:r,main:a}}if(t.focus===`tech`){a.push({act:`close`,icon:`✕`,text:i(`Stäng`,`Close`),cls:`small`});let e=Math.ceil((n.tech.breakerLockUntil-this.store.now())/1e3);return e>0&&n.tech.breakerAt===null?a.push({act:`none`,icon:`⏳`,text:i(`Huvudsäkringen löste ut – ${e} s`,`Main breaker tripped – ${e} s`),off:!0,cls:`big wide`}):a.push({act:`flip`,icon:`⚡`,text:this.selected===null?i(`Välj säkring`,`Pick a breaker`):i(`Slå på säkring ${this.selected+1}`,`Flip breaker ${this.selected+1}`),off:this.selected===null||n.tech.breakerAt!==null,cls:`big wide danger`}),{nav:r,main:a}}if(t.focus===`kur`)return a.push({act:`close`,icon:`✕`,text:i(`Stäng`,`Close`),cls:`small`}),{nav:r,main:a};if(t.focus===`central`&&this.zoom!==null){let e=this.zoom,t=n.central.loops.has(e);return a.push({act:`zoom-close`,icon:`◀`,text:i(`Alla skärmar`,`All screens`),cls:`small`}),a.push({act:`zoom-loop`,icon:`⟲`,text:t?i(`Sluta loopa K${e+1}`,`Stop looping K${e+1}`):i(`Loopa K${e+1}`,`Loop K${e+1}`),off:n.central.unlockedAt!==null,cls:`big wide ${t?`on`:``}`}),{nav:r,main:a}}if(t.focus===`central`){let t=n.central;return a.push({act:`close`,icon:`✕`,text:i(`Stäng`,`Close`),cls:`small`}),a.push({act:`unlock`,icon:`🔓`,text:t.unlockedAt===null?e<t.lockUntil?i(`Spärrad …`,`Locked out …`):i(`Lås upp porten`,`Unlock the gate`):i(`Porten upplåst`,`Gate unlocked`),off:t.unlockedAt!==null||e<t.lockUntil,cls:`big wide danger`}),{nav:r,main:a}}if(t.sp===G.VENT&&t.vent){let[e,n]=t.vent,o=[[`vleft`,(n+3)%4,`◀`],[`vfwd`,n,`▲`],[`vright`,(n+1)%4,`▶`]],s={vleft:i(`Vänster`,`Left`),vfwd:i(`Rakt fram`,`Straight`),vright:i(`Höger`,`Right`)};for(let[t,n,r]of o){let o=this.ventSide(e,n);o===`open`?a.push({act:t,icon:r,text:s[t],cls:t===`vfwd`?`big`:``,off:!!this.crawl}):o===`fan`&&a.push({act:`none`,icon:`✣`,text:i(`Fläkt`,`Fan`),off:!0,cls:t===`vfwd`?`big`:``})}return this.ventSide(e,(n+2)%4)===`open`&&a.push({act:`vback`,icon:`▼`,text:i(`Vänd`,`Turn back`),cls:`small`,off:!!this.crawl}),e===24&&r.push({act:`vexit`,icon:`◀`,text:i(`Kryp ut (teknikrummet)`,`Crawl out (tech room)`),off:!!this.crawl}),e===0&&r.push({act:`vdrop`,icon:`⬇`,text:i(`Lyft gallret och hoppa ner`,`Lift the grate, drop down`),off:!!this.crawl}),{nav:r,main:a}}let o=this.mainBtn(e),s=t.sp>=0&&t.sp<=6;if(s&&this.toTech()){t.sp===3?a.push({act:`back`,icon:this.arrow(!0),text:i(`Mot valvet`,`To the vault`),cls:`small`}):t.sp<3?a.push({act:`back`,icon:this.arrow(!0),text:i(`Mot valvet`,`To the vault`),off:t.sp<=0,cls:`small`}):t.sp<6?a.push({act:`fwd`,icon:this.arrow(!1),text:i(`Mot garaget`,`To the garage`),cls:`small`}):a.push({act:`go:20`,icon:this.arrow(!1),text:i(`Garaget`,`Garage`),cls:`small`}),a.push({act:`duck`,icon:`⤓`,text:i(`Huka`,`Crouch`),cls:this.duck?`on`:``}),a.push({...o,act:o.act===`back`||o.act===`fwd`?o.act:`main`,cls:`big ${o.cls??``}`});let e=this.spraysLeft();a.push({act:`spray`,icon:`🧯`,text:String(e),off:e<=0||!this.spraySec()}),t.sp===3&&n.kur.solvedAt!==null&&r.push({act:`fwd`,icon:this.arrow(!1),text:i(`Mot garaget`,`To the garage`)}),t.sp===5&&r.push({act:`go:11`,icon:`🚪`,text:n.central.unlockedAt===null?i(`Säkerhetscentralen 🔒`,`Security room 🔒`):i(`Säkerhetscentralen`,`Security room`)})}else if(s){a.push({act:`back`,icon:`▼`,text:i(`Bakåt`,`Back`),off:t.sp<=0,cls:`small`}),a.push({act:`duck`,icon:`⤓`,text:i(`Huka`,`Crouch`),cls:this.duck?`on`:``}),a.push({...o,act:`main`,cls:`big ${o.cls??``}`});let e=this.spraysLeft();a.push({act:`spray`,icon:`🧯`,text:String(e),off:e<=0||t.sp>=6}),t.sp===3&&r.push({act:`go:10`,icon:`🚪`,text:n.kur.solvedAt===null?i(`Teknikdörren 🔒`,`Tech door 🔒`):i(`Teknikrummet`,`Tech room`)}),t.sp===5&&r.push({act:`go:11`,icon:`🚪`,text:n.central.unlockedAt===null?i(`Säkerhetscentralen 🔒`,`Security room 🔒`):i(`Säkerhetscentralen`,`Security room`)}),t.sp===6&&n.cabinet.solvedAt===null&&r.push({act:`none`,icon:``,text:i(`Garagedörren är låst`,`Garage door is locked`),off:!0})}else if(t.sp===G.VAULT)a.push({act:`duck`,icon:`⤓`,text:i(`Huka`,`Crouch`),cls:this.duck?`on`:``}),a.push({...o,act:`main`,cls:`big ${o.cls??``}`});else{if(t.sp===G.CAR&&n.finale.loadStart===null&&n.kur.solvedAt!==null)for(let e of[`kombi`,`transport`])a.push({act:`car:${e}`,icon:e===`kombi`?`🚙`:`🚐`,text:i(`${ct[e].label} · ${ct[e].cap} väskor · ${ct[e].driveMs/1e3} s ut`,`${ct[e].label} · ${ct[e].cap} bags · ${ct[e].driveMs/1e3} s out`),cls:`small car ${n.finale.car===e?`on`:``}`});if(o.text&&a.push({...o,act:o.act===`hold`?`hold`:`main`,cls:`big ${o.cls??``}`}),t.sp===G.TECH&&(r.push({act:`go:3`,icon:`◀`,text:i(`Korridoren`,`Corridor`)}),r.push({act:`venter`,icon:`🕳`,text:n.tech.runningAt===null?i(`Ventilationen 🔒`,`Vents 🔒`):i(`Ventilationen`,`Vents`)})),t.sp===G.CENTRAL&&r.push({act:`go:5`,icon:`◀`,text:i(`Ut i korridoren`,`Out to the corridor`)}),vg.includes(t.sp)){for(let e of vg)e!==t.sp&&e!==G.G0&&r.push({act:`go:${e}`,icon:`›`,text:_g[e].name});r.push({act:`go:6`,icon:`◀`,text:n.kur.solvedAt!==null&&n.tech.runningAt===null?i(`Korridoren · teknikrummet`,`Corridor · tech room`):i(`Korridoren`,`Corridor`)})}}return{nav:r,main:a}}renderButtons(e){let{nav:t,main:n}=this.buttons(e),r=JSON.stringify([t,n]);if(r===this.btnKey)return;this.btnKey=r;let i=e=>`<button ${e.act===`hold`?`data-hold="1"`:`data-act="${e.act}"`} class="${e.cls??``}" ${e.off?`disabled`:``}><i>${e.icon}</i><span>${Eg(e.text)}</span></button>`;this.ui.nav.innerHTML=t.map(e=>`<button data-act="${e.act}" ${e.off?`disabled`:``}>${e.icon} ${Eg(e.text)}</button>`).join(``),this.ui.controls.innerHTML=n.map(i).join(``)}act(e){let t=this.store.now(),n=this.sh;if(e===`hint-ok`){this.ui.hint.remove(),this.stopHum=re(),(n.startedAt===null||!this.store.log.some(e=>e.kind===`start`))&&this.store.emit({kind:`start`});return}if(e===`again`)return this.reset(!0);if(e===`sheet-close`)return this.closeSheet();if(e.startsWith(`talk:`)){let[,t,n]=e.split(`:`).map(Number);this.store.emit({kind:`answer`,step:t,choice:n}),I(700,.05,.05);return}if(this.overlay===`keypad`){e.startsWith(`d`)&&e.length===2&&this.keypad.length<4?this.keypad+=e[1]:e===`del`?this.keypad=this.keypad.slice(0,-1):e===`ok`&&this.submitCode(),this.drawKeypad();return}if(e===`zoom-close`){this.zoom=null,this.dirty=!0;return}if(e===`zoom-loop`){this.zoom!==null&&this.toggleLoop(this.zoom);return}if(e===`close`){this.zoom=null,this.s.focus=null,this.selected=null,this.dirty=!0;return}if(!n.result){if(e===`main`){let n=this.mainBtn(t);if(n.off)return;e=n.act}if(e===`duck`){this.duck=!this.duck,this.duckFrom=this.s.h,this.duckT0=t,this.dirty=!0;return}if(e===`cut`){if(this.selected===null||n.cabinet.cutWire!==null||t<n.cabinet.lockUntil)return;this.store.emit({kind:`cut`,wire:this.selected,attempt:n.cabinet.attempt}),this.selected=null,oe(this.store.shared().cabinet.solvedAt===null);return}if(e===`flip`){if(this.selected===null||n.tech.breakerAt!==null||t<n.tech.breakerLockUntil)return;this.store.emit({kind:`breaker`,n:this.selected});let e=this.store.shared().tech.breakerAt!==null;oe(!e),this.toast(e?i(`Klick. Startbatteriet laddar – dra igång generatorn.`,`Click. The starter battery is charging – crank the generator.`):i(`Gnistor! Fel säkring – larmet går och huvudsäkringen löste ut en stund.`,`Sparks! Wrong breaker – the alarm is going and the main breaker tripped for a while.`)),e&&(this.s.focus=null,this.dirty=!0),this.selected=null;return}if(e===`crank`){this.store.emit({kind:`crank`}),R(),this.toast(i(`Generatorn hostar igång … lägg över lasten när Fixaren säger till.`,`The generator coughs to life … switch the load when the Fixer says so.`));return}if(e===`load`){this.store.emit({kind:`load`});let e=this.store.shared().tech;e.runningAt!==null||(e.crank===null&&e.fails.length>n.tech.fails.length?this.toast(i(`För sent – motorn överhettades!`,`Too late – the engine overheated!`)):this.toast(i(`För tidigt – motorn hostade och tjuvstannade. Det hördes – larmet går. Vänta på startbatteriet.`,`Too early – the engine coughed and stalled. Someone heard it – the alarm is going. Wait for the starter battery.`)));return}if(e===`unlock`){if(n.central.unlockedAt!==null||t<n.central.lockUntil)return;this.store.emit({kind:`unlock`});let e=this.store.shared().central.unlockedAt!==null;e&&L(),this.toast(e?i(`Portlåset släpper. Polisen såg ingenting.`,`The gate lock releases. The police saw nothing.`):i(`Polisen såg det på kamerorna! Larm – portlåset spärras en stund.`,`The police saw it on the cameras! Alarm – the gate lock is blocked for a while.`),4500);return}if(e===`venter`||e===`vexit`||e===`vdrop`)return this.ventTransition(e,t);if(e===`vleft`||e===`vfwd`||e===`vright`||e===`vback`)return this.ventCrawl(e,t);if(e===`port`){if(n.tech.runningAt===null)return this.toast(i(`Strömlös. Porten behöver reservkraft – generatorn står i teknikrummet.`,`No power. The gate needs backup power – the generator is in the tech room.`));if(n.central.unlockedAt===null)return this.toast(i(`Porten är låst: PORTLÅS – FJÄRRSTYRT FRÅN SÄKERHETSCENTRALEN.`,`The gate is locked: GATE LOCK – REMOTE-CONTROLLED FROM THE SECURITY ROOM.`));this.store.emit({kind:`port`});let e=this.store.shared().police,r=Math.round(((e?.finaleDeadline??t+24e3)-t)/1e3);this.toast(i(`Porten går upp – polisen hör det! ${r} sekunder till de är på rampen.`,`The gate is going up – the police can hear it! ${r} seconds until they’re on the ramp.`),4500);return}if(e.startsWith(`car:`)){this.store.emit({kind:`car`,car:e.slice(4)});return}if(e.startsWith(`focus:`)){this.s.focus=e.slice(6),this.lastFocus=this.s.focus,this.selected=null,this.dirty=!0;return}if(!(t<this.lockedUntil||this.move)){if(e===`key`){this.myKeyAt=t,this.s.startedAt===null&&(this.s.startedAt=t),this.store.emit({kind:`key`,slot:this.s.slot,need:this.store.need()}),L(),this.dirty=!0;return}if(e===`cab`){this.s.focus=`cab`,this.lastFocus=`cab`,this.dirty=!0;return}if(e.startsWith(`go:`)){let r=Number(e.slice(3));if(r===G.TECH&&n.kur.solvedAt===null)return this.toast(i(`Kortläsaren blinkar rött. Ni behöver ett passerkort.`,`The card reader blinks red. You need a keycard.`));let a=this.store.activeRobbers().some(e=>e.id!==this.store.selfId&&e.s.sp===G.CENTRAL);if(r===G.CENTRAL&&this.s.sp===5&&n.central.unlockedAt===null&&!a)return this.toast(i(`Kodlås – och dörren är spärrad inifrån. Det måste finnas en annan väg in …`,`Code lock – and the door is barred from inside. There must be another way in …`));if(r===G.G0&&n.garageOpenAt===null)return;this.goPlace(r,t);return}if(e===`fwd`){if(this.s.sp===G.VAULT){if(n.vault.openAt===null)return;this.lookYaw=0,this.lookPitch=-.04,this.go(0,t,[[this.s.x,this.s.z],[0,1.8],[0,pe[0]]],2400)}else this.s.sp>=0&&this.s.sp<6&&this.go(this.s.sp+1,t)}e===`back`&&this.s.sp>0&&this.s.sp<=6&&this.go(this.s.sp-1,t),e===`spray`&&this.sprayNext(t)}}}setHold(e){if(e===this.holding)return;let t=this.sh;(!e||this.s.sp===G.CAR&&t.portOpenAt!==null&&t.finale.car&&t.finale.departAt===null)&&(this.holding=e,this.store.emit({kind:`hold`,on:e}))}go(e,t,n,r){this.s.startedAt===null&&(this.s.startedAt=t);let i=n??[[this.s.x,this.s.z],[0,pe[e]]];this.move={pts:i,to:e,t0:t,dur:r??(this.duck?1.5:1)*1e3,collide:!n},F(this.duck)}ventSide(e,t){let n=vt(e,t);if(n<0)return`wall`;let r=_t(e,n);return this.maze.open.has(r)?`open`:this.maze.fans.has(r)?`fan`:`wall`}fade(e){this.ui.fade.classList.add(`on`),setTimeout(()=>{e(),setTimeout(()=>this.ui.fade.classList.remove(`on`),120)},450)}ventTransition(e,t){let n=this.s;this.crawl||(e===`venter`&&n.sp===G.TECH&&this.sh.tech.runningAt===null?(I(300,.15,.06),this.toast(i(`Gallret sitter fast – det elektriska låset är strömlöst. Starta generatorn först.`,`The grate is stuck – its electric lock has no power. Start the generator first.`),4e3)):e===`venter`&&n.sp===G.TECH?(oe(!1),this.fade(()=>{n.sp=G.VENT,n.vent=[24,3];let e=Sh(24);n.x=e.x,n.z=e.z,n.focus=null,this.lookYaw=yg[3],this.lookPitch=-.12,this.dirty=!0})):e===`vexit`&&n.vent?.[0]===24?this.fade(()=>{n.sp=G.TECH,n.vent=null,n.x=_g[G.TECH].x,n.z=_g[G.TECH].z,this.lookYaw=_g[G.TECH].yaw,this.lookPitch=-.04,this.dirty=!0}):e===`vdrop`&&n.vent?.[0]===0&&(F(!1),this.fade(()=>{n.sp=G.CENTRAL,n.vent=null,n.x=-3,n.z=pe[5],this.lookYaw=_g[G.CENTRAL].yaw,this.lookPitch=-.04,this.dirty=!0,this.toast(i(`Du landar i säkerhetscentralen. Bildväggen visar bankens egna kameror.`,`You land in the security room. The monitor wall shows the bank’s own cameras.`),4e3)})))}ventCrawl(e,t){let n=this.s;if(!n.vent||this.crawl)return;let[r,i]=n.vent,a=e===`vleft`?(i+3)%4:e===`vright`?(i+1)%4:e===`vback`?(i+2)%4:i;if(this.ventSide(r,a)!==`open`)return;let o=vt(r,a),s=yg[a];for(;s-this.lookYaw>Math.PI;)s-=Math.PI*2;for(;s-this.lookYaw<-Math.PI;)s+=Math.PI*2;this.crawl={from:r,to:o,t0:t,dur:e===`vfwd`?1300:1700,yaw0:this.lookYaw,yaw1:s},n.vent=[r,a],F(!0)}centralPick(e){if(e===`unlock`)return this.act(`unlock`);e.startsWith(`k`)&&(this.zoom=Number(e.slice(1)),this.dirty=!0,I(2e3,.03,.04))}toggleLoop(e){if(this.sh.central.unlockedAt!==null)return;let t=!this.sh.central.loops.has(e);this.store.emit({kind:`loop`,k:e,on:t}),I(t?1400:900,.05,.05)}renderZoom(e){this.ensureMonitors();let t=this.monitors[e],n=this.renderer,{x:r,y:a}=n.getSize(new K),o=Math.max(120,a-120-170),s=r-16,c=s/1.6;c>o&&(c=o,s=c*1.6);let l=(r-s)/2,u=120+(o-c)/2;n.setRenderTarget(null),n.setScissorTest(!1),n.setViewport(0,0,r,a),n.setClearColor(`#000`),n.clear(),n.setViewport(l,a-u-c,s,c),n.setScissor(l,a-u-c,s,c),n.setScissorTest(!0),n.render(this.world.scene,t.cam),n.setScissorTest(!1),n.setViewport(0,0,r,a);let d=this.ui.zoomTag,f=this.sh.central.loops.has(e),p=`K${e+1} · ${f?i(`⟲ LOOPAD`,`⟲ LOOPED`):`● LIVE`}`;d.textContent!==p&&(d.textContent=p),d.classList.toggle(`looped`,f),d.style.top=`${u+6}px`,d.style.left=`${l+8}px`}ensureMonitors(){if(this.monitors.length)return;let e=Ct(this.store.seed).order;this.monitors=e.map((e,t)=>{let n=hh[e],r=new Gl(n.fov,1.6,.14,60);r.position.copy(n.pos),r.lookAt(n.look),r.layers.set(0),r.layers.enable(2),r.layers.enable(4),r.layers.enable(6);let i=new Di(224,140,{type:sn}),a=this.world.centralScreens[t];return a.material=new zo({map:i.texture,color:new ua(1.7,1.85,1.75)}),{cam:r,rt:i,drawn:!1}})}renderMonitors(){if(this.s.sp!==G.CENTRAL&&!(this.s.vent&&this.s.vent[0]===0))return;this.ensureMonitors();let e=this.sh.central.loops;for(let t=0;t<2;t++){let t=this.monitorTurn++%this.monitors.length,n=this.monitors[t];e.has(t)&&n.drawn||(n.drawn=!0,this.renderer.setRenderTarget(n.rt),this.renderer.render(this.world.scene,n.cam))}this.renderer.setRenderTarget(null)}goPlace(e,t){let n=Cg(this.s.sp,e);this.s.focus=null,this.lookPitch=-.04,this.go(e,t,n,Math.max(800,Tg(n)/2.4*1e3))}spraysLeft(){return Math.max(0,Ee(0).sprays-this.store.log.filter(e=>e.kind===`spray`).length)}spraySec(){let e=this.s.sp;return e<0||e>6?0:this.toTech()&&e>3?e:e<6?e+1:0}sprayNext(e){let t=this.spraySec();this.spraysLeft()<=0||!t||(this.s.sprays--,this.s.smoke={sec:t,until:e+9e3},ae(),this.store.emit({kind:`spray`,sec:t}),this.dirty=!0)}hit(e,t,n){this.s.hits++,this.s.alarmUntil=t+3500,this.lockedUntil=t+2200,this.move={pts:[[0,this.s.z],[0,pe[n]]],to:n,t0:t,dur:700,collide:!1,keepYaw:!0},this.shake=1,this.store.emit({kind:`hit`,sec:e}),this.publish(!0)}openKur(e){let t=Xe(this.store.seed);if(e===`keypad`){if(this.sh.kur.solvedAt!==null)return this.toast(i(`Skåpet är redan öppet – ni har nycklarna och passerkorten.`,`The cabinet is already open – you have the keys and keycards.`));this.overlay=`keypad`,this.keypad=``,this.drawKeypad();return}this.overlay=`doc`;let n=Ke.map(e=>e[0].toUpperCase()+e.slice(1,3));this.ui.sheet.innerHTML=e===`schedule`?`<div class="paper"><h3>${i(`JOURSCHEMA · V. 42`,`DUTY ROSTER · WK 42`)}</h3><p class="muted">${i(`Väktare, garage/valv – vakthavande per dag`,`Guards, garage/vault – on duty by day`)}</p>
           <table>${t.schedule.map((e,t)=>`<tr><td>${n[t]}</td><td>${Eg(e)}</td></tr>`).join(``)}</table>
           <button data-act="sheet-close">${i(`Stäng`,`Close`)}</button></div>`:`<div class="paper yellow"><h3>${i(`NYCKELSKÅPET`,`KEY CABINET`)}</h3><p>${i(`Koden = vakthavande väktares personalnummer – <b>BAKLÄNGES!</b>`,`Code = the on-duty guard’s employee number – <b>BACKWARDS!</b>`)}</p><p class="muted">${i(`/Säkerhetschefen`,`/Head of Security`)}</p>
           <button data-act="sheet-close">${i(`Stäng`,`Close`)}</button></div>`,this.ui.sheet.classList.add(`show`)}drawKeypad(){if(this.overlay!==`keypad`)return;let e=this.store.now(),t=this.sh.kur,n=e<t.lockUntil,r=3-t.wrongs%3,a=Array.from({length:4},(e,t)=>this.keypad[t]??`·`).join(` `);this.ui.sheet.innerHTML=`<div class="keypad ${n?`locked`:``}">
      <div class="kp-title">${i(`NYCKELSKÅP · KOD`,`KEY CABINET · CODE`)}</div>
      <div class="kp-display">${n?i(`SPÄRRAD`,`LOCKED`):a}</div>
      <div class="kp-info">${t.wrongs?i(`Fel kod ${t.wrongs} gång${t.wrongs>1?`er`:``} – ${r} till ger larm`,`Wrong code ${t.wrongs} time${t.wrongs>1?`s`:``} – ${r} more trips the alarm`):i(`4 siffror`,`4 digits`)}</div>
      <div class="kp-grid">${[1,2,3,4,5,6,7,8,9].map(e=>`<button data-act="d${e}">${e}</button>`).join(``)}<button data-act="del">⌫</button><button data-act="d0">0</button><button data-act="ok" class="ok">OK</button></div>
      <button data-act="sheet-close" class="kp-close">${i(`Stäng`,`Close`)}</button></div>`,this.ui.sheet.classList.add(`show`)}submitCode(){if(this.keypad.length!==4||this.store.now()<this.sh.kur.lockUntil)return;let e=this.sh.kur;this.store.emit({kind:`code`,code:this.keypad});let t=this.store.shared().kur;this.keypad=``,t.solvedAt===null?(I(300,.25,.1),t.fails.length>e.fails.length&&this.toast(i(`Tre fel – larmet går och knappsatsen spärras!`,`Three wrong – the alarm is going and the keypad locks!`)),this.sh=this.store.shared()):(L(),this.closeSheet(),this.toast(i(`Klick! Bilnycklar och passerkort. Kortet öppnar teknikdörren i korridoren.`,`Click! Car keys and keycards. The card opens the tech door in the corridor.`),5e3))}back(){return this.zoom===null?this.overlay===`none`?this.s.focus?(this.act(`close`),!0):!1:(this.closeSheet(),!0):(this.zoom=null,this.dirty=!0,!0)}closeSheet(){this.overlay=`none`,this.ui.sheet.classList.remove(`show`),this.ui.sheet.innerHTML=``}renderTalk(e){let t=this.sh.talk,n=this.ui.talk,r=``;if(t.state===`ringing`)r=`<div class="call"><div class="ring">📞</div><b>${i(`Polisens förhandlare anropar er radio`,`The police negotiator is calling your radio`)}</b><button data-act="talk:-1:0">${i(`Svara`,`Answer`)}</button></div>`;else if(t.state===`talking`){let n=at[t.step],a=Math.max(0,Math.ceil((t.askedAt+it-e)/1e3));r=`<div class="call open"><div class="who">LENA EK · ${i(`POLISENS FÖRHANDLARE`,`POLICE NEGOTIATOR`)} <span>${a} s</span></div><p>${i(`”${Eg(n.q)}”`,`“${Eg(n.q)}”`)}</p>
        ${ot(this.store.seed,t.step).map(e=>`<button data-act="talk:${t.step}:${e}">${Eg(n.a[e].t)}</button>`).join(``)}</div>`}n.dataset.html!==r&&(n.dataset.html=r,n.innerHTML=r)}reset(e){e&&this.store.emit({kind:`reset`}),this.s=Ee(this.store.slot),this.move=null,this.duck=!1,this.duckFrom=_e,this.lockedUntil=0,this.myKeyAt=0,this.selected=null,this.faceKey(),this.lastAlarm=0,this.seen.clear(),this.holding=!1,this.crawl=null,this.closeSheet(),this.ui.done.classList.remove(`show`),this.publish(!0),e&&this.store.emit({kind:`start`})}publish(e=!1){let t=performance.now();!e&&!this.dirty&&t-this.lastSent<250||!e&&t-this.lastSent<80||(this.lastSent=t,this.dirty=!1,this.store.publishRobber({...this.s,smoke:this.s.smoke?{...this.s.smoke}:null}))}once(e){return!this.seen.has(e)&&(this.seen.add(e),!0)}step(e){let t=this.store.now(),n=t/1e3,r=this.s,a=this.sh=this.store.shared(t),o=this.store.restored;o&&(this.store.restored=null,Object.assign(r,{x:o.x,z:o.z,h:o.h,yaw:o.yaw,sp:o.sp,sprays:o.sprays,hits:o.hits,startedAt:o.startedAt,vent:o.vent,focus:null,smoke:null}),this.lookYaw=o.yaw,this.dirty=!0);let s=this.duck?ve:_e;if(r.h!==s){let e=Math.min(1,(t-this.duckT0)/260);r.h=this.duckFrom+(s-this.duckFrom)*e,this.dirty=!0}if(this.crawl){let n=this.crawl,a=Math.min(1,(t-n.t0)/n.dur),o=Math.min(1,a/.3);this.lookYaw=n.yaw0+(n.yaw1-n.yaw0)*(o*o*(3-2*o));let s=Math.max(0,(a-.25)/.75),c=s*s*(3-2*s),l=Sh(n.from),u=Sh(n.to);if(r.x=l.x+(u.x-l.x)*c,r.z=l.z+(u.z-l.z)*c,this.bob+=e*6,this.dirty=!0,a>=1){this.crawl=null,r.vent=[n.to,r.vent?r.vent[1]:0],F(!0);let e=_t(n.from,n.to);this.maze.sensors.has(e)&&(r.alarmUntil=t+3500,this.shake=1,this.store.emit({kind:`sensor`,edge:e}),this.toast(i(`🚨 En rörelsevakt i trumman – larmet gick! Fråga Fixaren var de sitter.`,`🚨 A motion sensor in the duct – the alarm went off! Ask the Fixer where they are.`)),this.publish(!0))}}if(this.move){let i=this.move,a=Math.min(1,(t-i.t0)/i.dur),o=a*a*(3-2*a),s=r.x,c=r.z;if([r.x,r.z]=wg(i.pts,o),this.bob+=e*(this.duck?7:10),this.dirty=!0,i.collide){let e=Te(c,r.z);if(e&&this.world.sections[e-1].some(e=>we(Ce(e,n),r.h))){this.hit(e,t,r.sp);return}}else if(!i.keepYaw&&Math.hypot(r.x-s,r.z-c)>.001&&i.to!==0){let t=Math.atan2(-(r.x-s),-(r.z-c))-this.lookYaw;t=Math.atan2(Math.sin(t),Math.cos(t)),this.lookYaw+=t*Math.min(1,e*6)}a>=1&&(this.move=null,r.sp=i.to,i.collide&&F(this.duck),_g[r.sp]?this.lookYaw=_g[r.sp].yaw:!i.collide&&!i.keepYaw&&r.sp>=0&&r.sp<=6&&(this.lookYaw=r.sp===6&&i.pts[0][1]<-23.6?Math.PI:0))}if(r.smoke&&t>r.smoke.until&&(r.smoke=null,this.dirty=!0),a.alarmUntil>t&&a.alarmUntil>this.lastAlarm+500&&(ie(Math.min(3.5,(a.alarmUntil-t)/1e3)),this.shake=Math.max(this.shake,.7)),this.lastAlarm=Math.max(this.lastAlarm,a.alarmUntil),a.vault.openAt!==null&&this.once(`vault`)&&t-a.vault.openAt<3e3&&R(),a.tech.runningAt!==null&&this.once(`running`)&&t-a.tech.runningAt<6e3&&(r.sp===G.TECH&&z(),this.banner(i(`⚡ Reservkraften går!`,`⚡ Backup power is on!`),i(`Porten har ström och ventilationsgallret är upplåst.`,`The gate has power and the vent grate is unlocked.`))),a.police?.powerCut&&this.once(`power`)&&this.toast(i(`Polisen har brutit strömmen – nödbelysning.`,`The police cut the power – emergency lighting.`),4500),a.talk.state===`ringing`&&this.once(`ring`)&&ie(.6),a.talk.state===`done`&&a.talk.transcript.length&&this.once(`talkdone`)){let e=Math.round(a.talk.effectMs/1e3);this.toast(e>=0?i(`Förhandlaren lägger på. Ni köpte ${e} sekunder.`,`The negotiator hangs up. You bought ${e} seconds.`):i(`Förhandlaren lägger på. Polisen skyndar på: ${-e} sekunder kortare.`,`The negotiator hangs up. The police speed up: ${-e} seconds less.`),4500)}a.portOpenAt!==null&&this.once(`port`)&&t-a.portOpenAt<3e3&&ie(2),a.result&&this.once(`result`)&&this.showResult(a),this.overlay===`keypad`&&Math.floor(t/500)!==Math.floor((t-e*1e3)/500)&&this.drawKeypad(),r.yaw=this.lookYaw,this.publish()}showResult(e){let t=e.result;this.setHold(!1);let n=e.startedAt?Math.round((t.at-e.startedAt)/1e3):0,r=this.store.activeRobbers().filter(({s:e})=>e.sp!==G.CAR).map(({s:e})=>i(`Rånare ${`AB`[e.slot]}`,`Robber ${`AB`[e.slot]}`));this.ui.done.innerHTML=`
      <div class="card ${t.win?`win`:`lose`}">
        <div class="kicker">${t.win?i(`FLYKTEN LYCKADES`,`CLEAN GETAWAY`):i(`GRIPNA`,`BUSTED`)}</div>
        <h2>${t.win?i(`Ni kom undan med ${t.money} miljoner`,`You got away with ${t.money} million`):i(`Insatsstyrkan tog er`,`The SWAT team got you`)}</h2>
        <p>${Eg(t.reason)}${t.win&&r.length?i(` ${r.join(` och `)} blev kvar i garaget.`,` ${r.join(` and `)} got left behind in the garage.`):``}</p>
        <p>${i(`Tid`,`Time`)} <b>${Og(n)}</b> · ${i(`Larm`,`Alarms`)} <b>${e.alarms}</b> · ${i(`Väskor`,`Bags`)} <b>${t.bags}</b></p>
        <button data-act="again">${i(`Spela igen`,`Play again`)}</button>
      </div>`,this.ui.done.classList.add(`show`)}render(e){let t=this.store.now(),n=this.s,r=this.sh;this.shake=Math.max(0,this.shake-e*1.4);let a=this.shake*.03;n.focus&&(this.lastFocus=n.focus),this.focusK+=(+!!n.focus-this.focusK)*Math.min(1,e*6),this.focusK<.002&&(this.focusK=0);let o=this.move?Math.sin(this.bob)*(this.duck?.025:.035):0,s=n.sp===G.VENT,c=s?yh-.08+(this.crawl?Math.sin(this.bob)*.02:0):n.h-.1+o;if(this.camera.position.set(n.x+(Math.random()-.5)*a,c+(Math.random()-.5)*a,n.z),this.camera.rotation.set(this.lookPitch,this.lookYaw,0),this.focusK>0){let e=Ph(this.lastFocus,this.camera.aspect,this.camera.fov),t=this.camera.quaternion.clone();this.camera.position.lerp(e.pos,this.focusK),this.camera.lookAt(e.look),this.camera.quaternion.slerpQuaternions(t,this.camera.quaternion.clone(),this.focusK)}let l=t<r.alarmUntil;this.fx.uniforms.uTime.value=t/1e3,this.fx.uniforms.uRed.value=l?.25+.25*Math.sin(t/70):0;let u=n.sp===G.VAULT?`vault`:n.sp===G.VENT?`vent`:n.sp===G.TECH?`tech`:n.sp===G.CENTRAL?`central`:n.sp>=G.G0&&n.sp<G.VENT?`garage`:`corridor`,d=gg[u],f=!!r.police?.powerCut&&u!==`vent`,p=Math.min(1,e*2.5),m=this.fx.uniforms;m.uTint.value.lerp(new q(d.tint[0]*(f?1.1:1),d.tint[1]*(f?.9:1),d.tint[2]*(f?.88:1)),p),m.uSat.value+=(d.sat-m.uSat.value)*p,m.uCon.value+=(d.con-m.uCon.value)*p;let h=r.finale,g=n.sp===G.CAR&&r.portOpenAt!==null&&h.car&&h.departAt===null&&r.police?Math.floor((r.police.finaleDeadline-ct[h.car].driveMs-t)/1e3):null,_=g!==null&&h.loadStart!==null?i(` · ${h.bags}/${ct[h.car].cap} väskor`,` · ${h.bags}/${ct[h.car].cap} bags`):``,v=kg(n,r);this.ui.goal.textContent!==v&&(this.ui.goal.textContent=v),this.ui.where.textContent=Ag(n,r,this.move)+_+(g===null?``:g>=0?i(` · kör inom ${g} s`,` · drive within ${g} s`):i(` · KÖR NU – släpp!`,` · DRIVE NOW – let go!`));let y=r.police;if(y&&!r.result){let e=Math.max(0,Math.ceil((y.finaleDeadline-t)/1e3));this.ui.police.textContent=`🚔 ${Og(e)}`,this.ui.police.classList.toggle(`urgent`,e<120||r.portOpenAt!==null)}else this.ui.police.textContent=``;if(this.ui.hits.textContent=r.alarms?`🚨 ${r.alarms}`:``,this.roomCode){let e=this.store.roster.some(e=>e.role===`fixer`);this.ui.fixer.textContent=e?i(`📡 Fixaren`,`📡 Fixer`):i(`📡 Väntar på Fixaren…`,`📡 Waiting for the Fixer…`),this.ui.fixer.className=e?`ok`:`wait`}if(this.flash.intensity=s?1.1:0,s){this.flash.position.copy(this.camera.position);let e=new q(0,0,-1).applyQuaternion(this.camera.quaternion);this.flash.target.position.copy(this.camera.position).add(e)}let b=s&&n.vent?this.ventText(n.vent[0],n.vent[1]):``;this.ui.ventInfo.innerHTML!==b&&(this.ui.ventInfo.innerHTML=b),this.el.classList.toggle(`in-vent`,s);let x=[...r.central.loops].sort((e,t)=>e-t),S=n.focus===`cab`?i(`Beskriv <b>kablarna uppifrån</b>, <b>voltmätaren</b> och <b>serienumret</b>. Tryck på en kabel för att välja den.`,`Describe <b>the wires from the top</b>, <b>the voltmeter</b> and <b>the serial number</b>. Tap a wire to select it.`):n.focus===`tech`?i(`Fixaren ser vilken säkring som är rätt. Tryck på en säkring för att välja den.`,`The Fixer can see which breaker is right. Tap a breaker to select it.`):n.focus===`kur`?i(`Tryck på <b>jourschemat</b>, <b>lappen</b> eller <b>nyckelskåpets knappsats</b>.`,`Tap the <b>duty roster</b>, <b>the note</b> or the <b>key cabinet keypad</b>.`):n.focus===`central`&&this.zoom!==null?i(`Beskriv bilden på <b>K${this.zoom+1}</b> för Fixaren. Loopa den om polisen tittar här.`,`Describe the picture on <b>K${this.zoom+1}</b> to the Fixer. Loop it if the police are watching it.`):n.focus===`central`?i(`Tryck på en skärm för att se den i stort. Loopa de tre som polisen tittar på. Loopade: <b>${x.length?x.map(e=>`K${e+1}`).join(`, `):`inga`}</b>`,`Tap a screen to see it up close. Loop the three the police are watching. Looped: <b>${x.length?x.map(e=>`K${e+1}`).join(`, `):`none`}</b>`):``;this.ui.focusHint.innerHTML!==S&&(this.ui.focusHint.innerHTML=S),this.el.classList.toggle(`focused`,!!n.focus),this.el.classList.toggle(`locked`,t<this.lockedUntil),this.renderButtons(t),this.renderTalk(t),this.shadows.update(this.camera.position),this.renderMonitors(),n.focus!==`central`&&this.zoom!==null&&(this.zoom=null);let C=this.zoom!==null&&this.focusK>.9;this.ui.zoomTag.hidden=!C,this.el.classList.toggle(`zoomed`,C),C?this.renderZoom(this.zoom):this.composer.render(e),this.checkBlack()}blackChecks=0;blackSeen=0;lastBlackCheck=0;checkBlack(){if(this.blackChecks>=12||this.s.sp!==G.VAULT)return;let e=performance.now();e-this.lastBlackCheck<1200||(this.lastBlackCheck=e,this.blackChecks++,O(this.renderer)?this.blackSeen++:this.blackSeen=0,this.blackSeen>=3&&(this.blackChecks=99,E(i(`Bilden är helt svart på den här enheten`,`The picture is completely black on this device`),`rånarvyn: ${k(this.renderer)}`)))}ventText(e,t){if(this.crawl)return i(`<b>Kryper …</b>`,`<b>Crawling …</b>`);let n=Eh(this.maze.marks.get(e)),r=[],a=[i(`till vänster`,`to the left`),i(`rakt fram`,`straight ahead`),i(`till höger`,`to the right`),i(`bakom dig`,`behind you`)];return[(t+3)%4,t,(t+1)%4,(t+2)%4].forEach((t,n)=>{let o=this.ventSide(e,t);o===`open`&&r.push(i(`öppet ${a[n]}`,`open ${a[n]}`)),o===`fan`&&r.push(i(`fläkt ${a[n]}`,`fan ${a[n]}`))}),`${n?`<b>${n}</b><br>`:``}${r.join(` · `)}`}dispose(){this.stopHum(),this.ro.disconnect(),window.removeEventListener(`keydown`,this.keyHandler),window.removeEventListener(`keyup`,this.keyUpHandler),this.composer.dispose(),this.renderer.dispose()}},Og=e=>`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`;function kg(e,t){if(t.result)return``;if(t.vault.openAt===null)return i(`🎯 Vrid nyckeln när Fixaren säger NU`,`🎯 Turn the key when the Fixer says NOW`);if(t.garageOpenAt===null)return e.sp<6?i(`🎯 Ta er förbi lasrarna till garagedörren`,`🎯 Get past the lasers to the garage door`):i(`🎯 Elskåpet: beskriv det för Fixaren`,`🎯 Electrical cabinet: describe it to the Fixer`);if(t.kur.solvedAt===null)return i(`🎯 Hitta koden till nyckelskåpet i vaktkuren`,`🎯 Find the key cabinet code in the guard booth`);let n=t.tech.runningAt!==null,r=t.central.unlockedAt!==null;return!n||!r?e.sp===G.CENTRAL?r?i(`🎯 Klart här. Tillbaka till korridoren`,`🎯 Done here. Back to the corridor`):i(`🎯 Loopa rätt skärmar och lås upp porten`,`🎯 Loop the right screens and unlock the gate`):e.sp===G.VENT?i(`🎯 Kryp till säkerhetscentralen – Fixaren har ritningen`,`🎯 Crawl to the security room – the Fixer has the blueprint`):e.sp===G.TECH?t.tech.breakerAt===null?i(`🎯 Slå på rätt säkring`,`🎯 Flip the right breaker`):n?i(`🎯 Säkerhetscentralen: kryp genom ventilationen`,`🎯 Security room: crawl through the vents`):i(`🎯 Starta generatorn, lägg över lasten på Fixarens NU`,`🎯 Start the generator, switch the load on the Fixer’s NOW`):n?i(`🎯 Säkerhetscentralen: via ventilationen i teknikrummet`,`🎯 Security room: via the vents in the tech room`):vg.includes(e.sp)?i(`🎯 Teknikrummet: tillbaka genom korridoren till B3`,`🎯 Tech room: back through the corridor to B3`):i(`🎯 Teknikrummet: dörren vid B3`,`🎯 Tech room: the door at B3`):t.portOpenAt===null?t.finale.car?i(`🎯 Öppna porten`,`🎯 Open the gate`):i(`🎯 Välj bil vid bilarna, öppna sedan porten`,`🎯 Pick a car, then open the gate`):i(`🎯 Håll inne vid bilen för att lasta – och kör i tid!`,`🎯 Hold at the car to load – and get out in time!`)}function Ag(e,t,n){return t.result?t.result.win?i(`På väg bort`,`Getting away`):i(`Gripen`,`Arrested`):e.focus===`cab`?i(`Vid elskåpet`,`At the electrical cabinet`):e.focus===`tech`?i(`Vid säkringsskåpet`,`At the breaker box`):e.focus===`kur`?i(`Undersöker vaktkuren`,`Searching the guard booth`):n&&n.collide?n.to>e.sp?i(`Går mot ${n.to===6?`garagedörren`:`ståplats ${n.to}`} – passerar B${n.to}`,`Heading for ${n.to===6?`the garage door`:`spot ${n.to}`} – passing B${n.to}`):i(`Backar – passerar B${e.sp}`,`Backing up – passing B${e.sp}`):n?n.to===0&&e.sp===G.VAULT?i(`Går ut ur valvet`,`Leaving the vault`):i(`På väg till ${_g[n.to]?.name.toLowerCase()??`korridoren`}`,`Heading to the ${_g[n.to]?.name.toLowerCase()??`corridor`}`):e.sp===G.VAULT?t.vault.openAt===null?i(`I valvet · vid nyckel ${`AB`[e.slot]??`A`}`,`In the vault · at key ${`AB`[e.slot]??`A`}`):i(`I valvet · dörren är öppen`,`In the vault · the door is open`):e.sp===G.VENT?i(`I ventilationen`,`In the vents`):e.focus===`central`?i(`Vid bildväggen`,`At the monitor wall`):_g[e.sp]?e.sp===G.G0?i(`I garaget`,`In the garage`):`${_g[e.sp].name}`:e.sp===0?i(`Utanför valvet · nästa pelare B1`,`Outside the vault · next pillar B1`):e.sp===6?i(`Vid garagedörren`,`At the garage door`):e.sp===3?i(`Mellan B3 och B4 · vid teknikdörren`,`Between B3 and B4 · at the tech door`):e.sp===5?i(`Mellan B5 och B6 · vid säkerhetscentralen`,`Between B5 and B6 · at the security room`):i(`Mellan B${e.sp} och B${e.sp+1}`,`Between B${e.sp} and B${e.sp+1}`)}var jg=250,Mg=1500,Ng=e=>e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),Pg=class{world;store;el;renderer;feeds;main=0;switched=new Set;quad;quadScene=new pa;ortho=new Xl(-1,1,1,-1,0,1);mat=Wh();rects={main:{x:0,y:0,w:1,h:1},thumbs:[]};labels=[];mainLabel;ui={};ro;canvas;monitors;log=[];lastAlarm=0;fails={vault:0,cab:0,kur:0,tech:0,central:0};lastHitAt=0;beeped=new Set;tab=`state`;shownTabs=new Set([`state`]);constructor(e,t,n){this.world=e,this.store=t;let r=Xe(t.seed);this.el=document.createElement(`div`),this.el.className=`view fixer`,this.el.innerHTML=`<div class="fx">
      <div class="bar">
        <span class="rec">● REC</span>
        <span>LIND &amp; SJÖBERG · ${r.date.toUpperCase()}</span>
        ${n?`<span class="room">${i(`RUM`,`ROOM`)} ${n}</span>`:``}
      </div>
      <div class="monitors"><canvas></canvas><div class="overlays"></div></div>
      <aside class="panel">
        <div class="tabs">
          <button data-act="tab:state" class="on">${i(`LÄGE`,`STATUS`)}</button>
          <button data-act="tab:manual" hidden>${i(`MANUALER`,`MANUALS`)}</button>
          <button data-act="tab:register" hidden>REGISTER</button>
          <button data-act="tab:vent" hidden>${i(`VENT`,`VENTS`)}</button>
          <button data-act="tab:radio" data-ui="radioTab" hidden>RADIO</button>
        </div>
        <div class="tab-body" data-tab="state">
          <div class="clock-row"><span class="k">${i(`INSATSSTYRKAN STORMAR OM`,`SWAT TEAM STORMS IN`)}</span><b data-ui="police">–</b></div>
          <div class="robbers" data-ui="robbers"></div>
          <div class="box" data-ui="task"></div>
          <div class="grid">
            <div class="row"><span class="k">${i(`TID`,`TIME`)}</span><span data-ui="clock">00:00</span></div>
            <div class="row"><span class="k">${i(`LARM`,`ALARMS`)}</span><span data-ui="hits">0</span></div>
            <div class="row"><span class="k">${i(`KLART`,`DONE`)}</span><span data-ui="progress">0/7</span></div>
          </div>
          <div class="sects" data-ui="sects"></div>
          <div class="help" data-ui="help">
            ${i(`<b>Du är Fixaren.</b> Du ser kamerorna, rånarna gör det inte. Tryck på en liten bild för att byta kamera. Nya flikar dyker upp när ni behöver dem.`,`<b>You are the Fixer.</b> You see the cameras, the robbers don’t. Tap a small image to switch camera. New tabs appear when you need them.`)}
          </div>
          <div class="log" data-ui="log"></div>
        </div>
        <div class="tab-body manual" data-tab="manual" hidden>
          <h3>${Ue.title}</h3>
          <p>${Ue.intro}</p>
          <ol>${Ue.rules.map(e=>`<li>${e}</li>`).join(``)}</ol>
          <p class="warn">${Ue.outro}</p>
          <div data-ui="manualPower" hidden>
          <h3>${i(`Reservkraft · teknikrummet`,`Backup power · tech room`)}</h3>
          <ol>
            <li>${i(`Det strömförande kabelröret är <b>varmast</b>. Följ det på <b>CAM 05</b> ner till skåpet. Rören och säkringarna är numrerade <b>1–12 från vänster</b>. Fel säkring ger larm och 15 s spärr.`,`The live cable conduit is the <b>hottest</b>. Follow it on <b>CAM 05</b> down to the cabinet. Conduits and breakers are numbered <b>1–12 from the left</b>. Wrong breaker = alarm and 15 s lockout.`)}</li>
            <li>${i(`Rånaren drar igång generatorn. Titta på <b>avgasröret</b> (lodrätt, längst till vänster på CAM 05).`,`The Robber cranks the generator. Watch the <b>exhaust pipe</b> (vertical, far left on CAM 05).`)}</li>
            <li>${i(`Säg <b>NU</b> när avgasröret är <b>ORANGE–GULT</b>. Rött/lila = för kallt, vitt = för varmt. Båda ger larm.`,`Say <b>NOW</b> when the exhaust pipe is <b>ORANGE–YELLOW</b>. Red/purple = too cold, white = too hot. Both trigger the alarm.`)}</li>
          </ol>
          </div>
        </div>
        <div class="tab-body register" data-tab="register" hidden>
          <h3>${i(`PERSONALREGISTER`,`STAFF REGISTER`)} · LIND &amp; SJÖBERG</h3>
          <p>${i(`I dag är det <b>${r.date}</b>.`,`Today is <b>${r.date}</b>.`)}</p>
          <table><tr><th>${i(`Namn`,`Name`)}</th><th>${i(`Befattning`,`Position`)}</th><th>${i(`Pers.nr`,`Emp. no.`)}</th></tr>
          ${r.registry.map(e=>`<tr><td>${Ng(e.last)}, ${Ng(e.first)}</td><td>${Ng(e.role)}</td><td class="num">${e.id}</td></tr>`).join(``)}</table>
          <p class="muted">${i(`Koden till nyckelskåpet finns här. Fråga rånaren vad som står på lapparna i vaktkuren.`,`The key cabinet code is in here. Ask the Robber what the notes in the guard booth say.`)}</p>
        </div>
        <div class="tab-body vent" data-tab="vent" hidden>
          <h3>${i(`VENTILATIONSRITNING · TA 2 (ovanför korridoren)`,`VENT BLUEPRINT · TA 2 (above the corridor)`)}</h3>
          ${Fg(t.seed)}
          <p class="muted">${i(`Rånaren kryper från <b>T</b> (åt vänster) till <b>C</b>. Du ser inte rånaren – fråga vad hen ser. <b>Röda ringar</b> är rörelsevakter som larmar. Led hen runt dem.`,`The Robber crawls from <b>T</b> (heading left) to <b>C</b>. You can’t see the Robber – ask what they see. <b>Red rings</b> are motion sensors that trigger the alarm. Guide them around.`)}</p>
        </div>
        <div class="tab-body police-radio" data-tab="radio" hidden>
          <div data-ui="radio"></div>
        </div>
      </aside>
    </div>`;for(let e of this.el.querySelectorAll(`[data-ui]`))this.ui[e.dataset.ui]=e;this.ui.sects.innerHTML=Array.from({length:6},(e,t)=>`<span>B${t+1}</span>`).join(``),this.canvas=this.el.querySelector(`canvas`),this.monitors=this.el.querySelector(`.monitors`),this.renderer=new Bp({canvas:this.canvas,antialias:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),D(this.renderer,i(`Fixarens vy`,`Fixer view`)),this.renderer.autoClear=!1,this.feeds=Nh.map(e=>{let t=new Gl(e.fov,16/10,.14,60);return t.position.copy(e.pos),t.lookAt(e.look),t.layers.set(0),t.layers.enable(2),t.layers.enable(4),e.kind===`thermal`?t.layers.enable(1):t.layers.enable(6),{def:e,camera:t,rt:e.kind===`thermal`?new Di(480,300,{depthBuffer:!0}):new Di(960,600,{type:sn,depthBuffer:!0}),lastDrawn:-1e9}}),this.quad=new Y(new X(2,2),this.mat),this.quadScene.add(this.quad);let a=this.el.querySelector(`.overlays`);this.labels=this.feeds.map(()=>{let e=document.createElement(`div`);return e.className=`cam-label`,a.appendChild(e),e}),this.mainLabel=document.createElement(`div`),this.mainLabel.className=`cam-label main`,a.appendChild(this.mainLabel),this.canvas.addEventListener(`click`,e=>this.onClick(e)),this.el.addEventListener(`click`,e=>{let t=e.target.closest(`[data-act]`);t&&!t.hasAttribute(`disabled`)&&this.act(t.dataset.act)}),this.el.addEventListener(`pointerdown`,()=>P()),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(this.monitors),t.onEvent(e=>{let t=new Date(e.at).toLocaleTimeString(`sv-SE`),n=this.robberName(e.by);if(e.kind===`sensor`)this.lastHitAt=performance.now(),this.addLog(i(`${t}  LARM – rörelsevakt i ventilationen`,`${t}  ALARM – motion sensor in the vents`),!0);else if(e.kind===`hit`)this.lastHitAt=performance.now(),this.addLog(i(`${t}  LARM – laser vid B${e.sec}`,`${t}  ALARM – laser at B${e.sec}`),!0);else if(e.kind===`spray`)this.addLog(i(`${t}  ${n}: spray vid B${e.sec}`,`${t}  ${n}: smoke at B${e.sec}`));else if(e.kind===`key`)this.addLog(i(`${t}  Nyckel ${`AB`[e.slot]} vreds`,`${t}  Key ${`AB`[e.slot]} turned`));else if(e.kind===`jam`)this.addLog(i(`${t}  Störsändaren laddas`,`${t}  Jammer charging`));else if(e.kind===`cut`)this.addLog(i(`${t}  ${n}: kabel ${e.wire+1} kapad`,`${t}  ${n}: wire ${e.wire+1} cut`));else if(e.kind===`code`)this.addLog(i(`${t}  ${n}: kod ${e.code} på nyckelskåpet`,`${t}  ${n}: code ${e.code} on the key cabinet`));else if(e.kind===`breaker`)this.addLog(i(`${t}  ${n}: säkring ${e.n+1}`,`${t}  ${n}: breaker ${e.n+1}`));else if(e.kind===`crank`)this.addLog(i(`${t}  Generatorn dras igång`,`${t}  Generator cranking`));else if(e.kind===`load`){let n=this.store.shared().tech.runningAt===e.at;this.addLog(n?i(`${t}  RESERVKRAFTEN GÅR ✓`,`${t}  BACKUP POWER ON ✓`):i(`${t}  Lasten lades över – fel ögonblick`,`${t}  Load switched – wrong moment`),!n)}else e.kind===`port`?this.addLog(i(`${t}  PORTEN ÖPPNAS`,`${t}  GATE OPENING`),!0):e.kind===`loop`?this.addLog(`${t}  ${n}: ${e.on?i(`loopar`,`loops`):i(`släpper`,`releases`)} K${e.k+1}`):e.kind===`unlock`?this.addLog(i(`${t}  ${n}: försöker låsa upp porten`,`${t}  ${n}: tries to unlock the gate`)):e.kind===`car`?this.addLog(i(`${t}  ${n}: väljer ${ct[e.car].label.toLowerCase()}`,`${t}  ${n}: picks the ${ct[e.car].label.toLowerCase()}`)):e.kind===`reset`&&(this.log=[],this.fails={vault:0,cab:0,kur:0,tech:0,central:0},this.switched.clear(),this.beeped.clear(),this.main=0,this.addLog(i(`${t}  Ny omgång`,`${t}  New round`)))})}robberName(e){let t=this.store.robbers.get(e);return t?this.store.activeRobbers().length>1?i(`Rånare ${`AB`[t.slot]}`,`Robber ${`AB`[t.slot]}`):i(`Rånaren`,`The Robber`):i(`Fixaren`,`The Fixer`)}act(e){if(P(),e.startsWith(`tab:`)){this.tab=e.slice(4),this.el.querySelectorAll(`[data-tab]`).forEach(e=>e.hidden=e.dataset.tab!==this.tab),this.el.querySelectorAll(`.tabs button`).forEach(t=>t.classList.toggle(`on`,t.dataset.act===e)),this.el.querySelector(`.tabs [data-act="${e}"]`)?.classList.remove(`new`);return}if(e===`jam`){let e=this.store.now(),t=this.store.shared(e);if(!this.jamReady(t,e))return;let n=e+je+Math.random()*(Me-je);this.store.emit({kind:`jam`,peak:Math.round(n)}),I(600,.1,.06)}e===`again`&&this.store.emit({kind:`reset`})}jamReady(e,t){if(e.vault.openAt!==null)return!1;let n=e.vault.jam;return!n||t>n.peak+1e3+Mg}addLog(e,t=!1){this.log.unshift(t?`<span class="bad">${e}</span>`:e),this.log=this.log.slice(0,8),this.ui.log.innerHTML=this.log.join(`<br>`)}resize(){let e=this.monitors.clientWidth,t=this.monitors.clientHeight;e&&t&&(this.renderer.setSize(e,t,!1),this.layout(e,t))}layout(e,t){let n=this.feeds.length,r=Math.min(4,n),i=Math.ceil(n/r),a=(e-6*(r-1))/r,o=a/1.6,s=t*.32;o*i+6*(i-1)>s&&(o=(s-6*(i-1))/i,a=o*1.6);let c=o*i+6*(i-1),l=t-c-6,u=e,d=u/1.6;d>l&&(d=l,u=d*1.6);let f=Math.max(0,(t-(d+6+c))/2),p=a*r+6*(r-1),m=[];for(let t=0;t<n;t++){let n=Math.floor(t/r),i=t%r;m.push({x:(e-p)/2+i*(a+6),y:f+d+6+n*(o+6),w:a,h:o})}this.rects={main:{x:(e-u)/2,y:f,w:u,h:d},thumbs:m};for(let e of this.feeds)e.camera.aspect=1.6,e.camera.updateProjectionMatrix()}onClick(e){let t=this.canvas.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top;this.rects.thumbs.forEach((e,t)=>{n>=e.x&&n<=e.x+e.w&&r>=e.y&&r<=e.y+e.h&&t!==this.main&&this.pick(t)})}pick(e){this.main=e,this.feeds[e].lastDrawn=-1e9,I(2200,.03,.05)}autoSwitch(e,t){if(this.switched.has(e))return;this.switched.add(e);let n=this.feeds.findIndex(e=>e.def.id===t);n>=0&&(this.main=n)}draw(e){let t=this.renderer;t.setRenderTarget(e.rt),t.setClearColor(`#000`),t.clear(),e.def.kind===`thermal`?Uh(this.world.scene,()=>t.render(this.world.scene,e.camera)):t.render(this.world.scene,e.camera),t.setRenderTarget(null)}blit(e,t,n,r){let i=this.renderer,a=n-t.y-t.h;i.setViewport(t.x,a,t.w,t.h),i.setScissor(t.x,a,t.w,t.h),i.setScissorTest(!0);let o=this.mat.uniforms;o.tDiffuse.value=e.rt.texture,o.uMode.value=+(e.def.kind===`thermal`),o.uRes.value.set(e.rt.width,e.rt.height),o.uSignal.value=+!!r,i.render(this.quadScene,this.ortho)}place(e,t){e.style.left=`${t.x}px`,e.style.top=`${t.y}px`,e.style.width=`${t.w}px`,e.style.height=`${t.h}px`}render(e){let t=this.store.now(),n=this.monitors.clientWidth,r=this.monitors.clientHeight;if(!n||!r)return;this.rects.thumbs.length||this.resize();let a=this.store.shared(t),o=this.store.activeRobbers();a.vault.openAt!==null&&t-a.vault.openAt>2500&&this.main===0&&this.autoSwitch(`vault`,`cam04`),o.some(e=>e.s.sp===G.TECH)&&this.autoSwitch(`tech`,`cam05`),o.some(e=>e.s.sp>=G.G0)&&a.kur.solvedAt===null&&this.autoSwitch(`garage`,`cam06`),a.police?.swat&&this.autoSwitch(`swat`,`cam07`),a.portOpenAt!==null&&this.autoSwitch(`port`,`cam06`);let s=e=>!!a.police?.powerCut&&e.def.id===`cam02`,c=Ct(this.store.seed).order,l=new Set([...a.central.loops].map(e=>St.find(t=>t.id===c[e])?.fixer??``));this.mat.uniforms.uTime.value=t/1e3;let u=performance.now();this.feeds.forEach((e,t)=>{s(e)||l.has(e.def.id)&&e.lastDrawn>0||(t===this.main||u-e.lastDrawn>jg)&&(this.draw(e),e.lastDrawn=u)});let d=this.renderer;d.setScissorTest(!1),d.setViewport(0,0,n,r),d.setClearColor(`#050605`),d.clear(),this.blit(this.feeds[this.main],this.rects.main,r,!s(this.feeds[this.main])),this.feeds.forEach((e,t)=>this.blit(e,this.rects.thumbs[t],r,!s(e))),d.setScissorTest(!1);let f=new Date(t).toLocaleTimeString(`sv-SE`);this.feeds.forEach((e,t)=>{let n=this.labels[t],r=e.def.label.replace(` · ZON B`,``).replace(` · ZONE B`,``).replace(` · TERMISK`,` · T`).replace(` · THERMAL`,` · T`);n.dataset.txt!==r&&(n.innerHTML=`<span>${r}</span>`,n.dataset.txt=r),this.place(n,this.rects.thumbs[t]),n.classList.toggle(`active`,t===this.main),n.classList.toggle(`warn`,e.def.id===`cam07`&&!!a.police?.swat)}),this.place(this.mainLabel,this.rects.main);let p=this.feeds[this.main];this.mainLabel.innerHTML=`<span>${p.def.label}${s(p)?i(` · INGEN SIGNAL`,` · NO SIGNAL`):l.has(p.def.id)?i(` · ⟲ LOOPAD`,` · ⟲ LOOPED`):``}</span><span>${f}</span>`,this.renderPanel(a,t)}renderPanel(e,t){let n=this.store.activeRobbers().sort((e,t)=>e.s.slot-t.s.slot),r=this.store.need(),a=e.police;if(a&&!e.result){let n=Math.max(0,Math.ceil((a.finaleDeadline-t)/1e3));this.ui.police.textContent=Og(n),this.ui.police.className=n<120||e.portOpenAt!==null?`urgent`:``}else this.ui.police.textContent=e.result?e.result.win?i(`NI KOM UNDAN`,`YOU GOT AWAY`):i(`GRIPNA`,`ARRESTED`):i(`väntar på rånarna`,`waiting for the robbers`);let o=n.length?n.map(({s:t})=>`<div class="rb"><b>${n.length>1?i(`RÅNARE ${`AB`[t.slot]}`,`ROBBER ${`AB`[t.slot]}`):i(`RÅNAREN`,`ROBBER`)}</b><span>${Ng(Ag(t,e))}</span><em>${t.h<1.2?i(`HUKAR`,`CROUCHING`):i(`STÅR`,`STANDING`)}</em></div>`).join(``):`<div class="rb"><b>${i(`RÅNAREN`,`ROBBER`)}</b><span class="wait">${i(`Väntar på anslutning…`,`Waiting for connection…`)}</span></div>`;this.ui.robbers.dataset.html!==o&&(this.ui.robbers.innerHTML=o,this.ui.robbers.dataset.html=o);let s=this.taskHtml(e,t,r);this.ui.task.dataset.html!==s&&(this.ui.task.innerHTML=s,this.ui.task.dataset.html=s);let c=e.startedAt?Math.floor(((e.result?.at??t)-e.startedAt)/1e3):0;this.ui.clock.textContent=Og(Math.max(0,c)),this.ui.hits.textContent=String(e.alarms);let l=[e.vault.openAt,e.garageOpenAt,e.kur.solvedAt,e.tech.breakerAt,e.tech.runningAt,e.central.unlockedAt,e.portOpenAt].filter(e=>e!==null).length;this.ui.progress.textContent=`${l}/7`;let u=Math.max(-1,...n.map(e=>Math.min(e.s.sp,6)));this.ui.sects.querySelectorAll(`span`).forEach((e,t)=>{e.className=t+1<=u?`passed`:t+1===u+1?`next`:``}),this.revealTabs(e);let d=this.radioHtml(e);if(this.ui.radio.dataset.html!==d&&(this.ui.radio.innerHTML=d,this.ui.radio.dataset.html=d,this.tab!==`radio`&&this.shownTabs.has(`radio`)&&this.ui.radioTab.classList.add(`new`)),this.tab===`radio`&&this.ui.radioTab.classList.remove(`new`),e.alarmUntil>t&&e.alarmUntil>this.lastAlarm+500){I(1600,.12,.1),setTimeout(()=>I(1600,.12,.1),180),setTimeout(()=>I(1600,.12,.1),360);let n=new Date(t).toLocaleTimeString(`sv-SE`);e.vault.fails.length>this.fails.vault?this.addLog(i(`${n}  LARM – ljudsensorn i valvet${r>=2?` (nycklarna ska vridas samtidigt, under blockeringen)`:` hörde nyckeln`}`,`${n}  ALARM – the vault sound sensor${r>=2?` (turn both keys at once, while it’s blocked)`:` heard the key`}`),!0):e.cabinet.fails.length>this.fails.cab?this.addLog(i(`${n}  LARM – fel kabel, reservkretsen kopplas in`,`${n}  ALARM – wrong wire, backup circuit kicks in`),!0):e.kur.fails.length>this.fails.kur?this.addLog(i(`${n}  LARM – tre fel koder på nyckelskåpet`,`${n}  ALARM – three wrong codes on the key cabinet`),!0):e.tech.fails.length>this.fails.tech?this.addLog(i(`${n}  LARM – ${e.tech.breakerAt===null?`fel säkring`:`generatorn överhettades`}`,`${n}  ALARM – ${e.tech.breakerAt===null?`wrong breaker`:`the generator overheated`}`),!0):e.central.fails.length>this.fails.central?this.addLog(i(`${n}  LARM – polisen såg portlåset på kamerorna`,`${n}  ALARM – the police saw the gate lock on camera`),!0):performance.now()-this.lastHitAt>1e3&&this.addLog(i(`${n}  LARM`,`${n}  ALARM`),!0)}this.fails={vault:e.vault.fails.length,cab:e.cabinet.fails.length,kur:e.kur.fails.length,tech:e.tech.fails.length,central:e.central.fails.length},this.lastAlarm=Math.max(this.lastAlarm,e.alarmUntil),this.el.classList.toggle(`alarm`,t<e.alarmUntil),this.el.classList.toggle(`dark`,!!e.police?.powerCut)}revealTabs(e){let t=(...e)=>this.store.activeRobbers().some(t=>e.includes(t.s.sp)),n=[[`manual`,e.vault.openAt!==null],[`register`,e.garageOpenAt!==null],[`vent`,e.tech.runningAt!==null||t(G.VENT,G.CENTRAL)||e.central.unlockedAt!==null],[`radio`,e.talk.state!==`waiting`||t(G.VENT,G.CENTRAL)||e.central.unlockedAt!==null]];for(let[e,t]of n){if(!t||this.shownTabs.has(e))continue;this.shownTabs.add(e);let n=this.el.querySelector(`.tabs [data-act="tab:${e}"]`);n.hidden=!1,n.classList.add(`new`),I(1200,.06,.05)}let r=e.kur.solvedAt!==null;this.ui.manualPower.hidden===r&&(this.ui.manualPower.hidden=!r),r&&!this.shownPower&&this.tab!==`manual`&&this.el.querySelector(`.tabs [data-act="tab:manual"]`).classList.add(`new`),this.shownPower||=r,this.ui.help.hidden=e.vault.openAt!==null}shownPower=!1;taskHtml(e,t,n){if(e.result){let t=e.result;return`<div class="box-h ${t.win?`ok`:`bad`}">${t.win?i(`NI KOM UNDAN · ${t.money} MILJONER`,`YOU GOT AWAY · ${t.money} MILLION`):i(`GRIPNA`,`ARRESTED`)}</div><div class="muted">${Ng(t.reason)}</div><button data-act="again">${i(`Spela igen`,`Play again`)}</button>`}if(e.vault.openAt===null){let r=n>=2,o=t=>e.vault.turned.has(t)?`<b class="on">●</b>`:`<b>○</b>`,s=r?i(`<div class="keys">Nyckel A ${o(0)}&nbsp;&nbsp;Nyckel B ${o(1)}</div>`,`<div class="keys">Key A ${o(0)}&nbsp;&nbsp;Key B ${o(1)}</div>`):``,c=e.vault.jam,l=``,u=r?i(`Båda nycklarna ska vridas samtidigt, medan sensorn är blockerad.`,`Both keys must be turned at once, while the sensor is blocked.`):i(`Nyckeln får bara vridas medan sensorn är blockerad.`,`The key may only be turned while the sensor is blocked.`),d=``;if(c&&t<c.peak){let e=Math.min(1,(t-c.at)/(c.peak-c.at)),n=(c.peak-t)/1e3;l=`<div class="gauge"><i style="width:${(e*100).toFixed(1)}%"></i></div>`,u=i(`LADDAR – blockerar om <b>${a(n)} s</b>`,`CHARGING – blocks in <b>${a(n)} s</b>`);for(let e of[3,2,1]){let t=`${c.at}:${e}`;n<=e&&n>e-.5&&!this.beeped.has(t)&&(this.beeped.add(t),I(900,.08,.06))}}else if(c&&t<c.peak+1e3+(r?500:0)){l=`<div class="gauge full"><i style="width:100%"></i></div>`,u=i(`<b>SENSOR BLOCKERAD – NU!</b>`,`<b>SENSOR BLOCKED – NOW!</b>`),d=`now`;let e=`${c.at}:now`;this.beeped.has(e)||(this.beeped.add(e),I(1500,.5,.08))}return`<div class="box-h">${i(`VALVDÖRREN · STÖRSÄNDARE${r?` + DUBBELKONTROLL`:``}`,`VAULT DOOR · JAMMER${r?` + TWO-KEY CHECK`:``}`)}</div>
        ${s}${l}<div class="status ${d}">${u}</div>
        <button data-act="jam" ${this.jamReady(e,t)?``:`disabled`}>${i(`⚡ Ladda störsändaren`,`⚡ Charge the jammer`)}</button>
        <div class="muted">${i(`Bara du ser mätaren. Säg <b>NU</b> när sensorn är blockerad.`,`Only you see the gauge. Say <b>NOW</b> when the sensor is blocked.`)}</div>`}if(e.garageOpenAt===null)return i(`<div class="box-h">KORRIDOREN → ELSKÅPET</div><div class="muted">Lasrarna syns bara på värmekamerorna. Guida rånarna fram till elskåpet. Reglerna: <b>MANUALER</b>.</div>`,`<div class="box-h">CORRIDOR → ELECTRICAL CABINET</div><div class="muted">The lasers only show on the thermal cameras. Guide the robbers to the electrical cabinet. The rules: <b>MANUALS</b>.</div>`);if(e.kur.solvedAt===null)return i(`<div class="box-h">GARAGET · VAKTKUREN</div><div class="muted">Nyckelskåpet i vaktkuren har en kod. Ledtråden: <b>REGISTER</b>.</div>`,`<div class="box-h">GARAGE · GUARD BOOTH</div><div class="muted">The key cabinet in the guard booth has a code. The clue: <b>REGISTER</b>.</div>`);if(e.tech.runningAt===null||e.central.unlockedAt===null){let n=e.tech,r=this.store.activeRobbers().some(e=>e.s.sp===G.TECH),a=n.runningAt===null?n.breakerAt===null?r||n.fails.length?i(`Rätt säkring – se <b>MANUALER</b> och CAM 05.`,`Right breaker – see <b>MANUALS</b> and CAM 05.`):i(`Rånarna ska <b>tillbaka genom korridoren</b> till teknikdörren vid B3. Akta lasrarna!`,`The robbers must go <b>back through the corridor</b> to the tech room door at B3. Mind the lasers!`):n.crank?i(`<b>Säg NU</b> när avgasröret är orange–gult.`,`<b>Say NOW</b> when the exhaust pipe is orange–yellow.`):t<n.coolUntil?i(`Motorn svalnar …`,`Engine cooling …`):i(`Rånaren drar igång generatorn. Titta på avgasröret och säg <b>NU</b> när det är orange–gult.`,`The Robber cranks the generator. Watch the exhaust pipe and say <b>NOW</b> when it’s orange–yellow.`):i(`✓ Klart.`,`✓ Done.`),o=this.store.activeRobbers(),s=o.some(e=>e.s.sp===G.VENT),c=o.some(e=>e.s.sp===G.CENTRAL),l=Ct(this.store.seed).watched.map(e=>St.find(t=>t.id===e)),u=e.central.unlockedAt===null?c?i(`Polisen tittar på tre av bankens kameror. Loopa exakt de tre – inga fler. Rånaren trycker på en skärm för att se den i stort.`,`The police are watching three of the bank’s cameras. Loop exactly those three – no more. The Robber taps a screen to see it full size.`):s?i(`Led rånaren med ritningen under <b>VENT</b>.`,`Guide the Robber with the blueprint under <b>VENTS</b>.`):n.runningAt===null?i(`Dörren är låst. Vägen in: ventilationen i teknikrummet – gallret får ström när generatorn går.`,`The door is locked. The way in: the vents in the tech room – the grate gets power when the generator runs.`):i(`Dörren är låst. Vägen in: ventilationen i teknikrummet.`,`The door is locked. The way in: the vents in the tech room.`):i(`✓ Klart.`,`✓ Done.`),d=c&&e.central.unlockedAt===null?`<ul class="watched">${l.map(e=>`<li><b>${Ng(e.place[0].toUpperCase()+e.place.slice(1))}</b><span>${Ng(e.sees)}</span></li>`).join(``)}</ul>`:``;return`<div class="box-h">${i(`PORTEN BEHÖVER TVÅ SAKER`,`THE GATE NEEDS TWO THINGS`)}</div>
        <div class="status">${i(`<b>Ström</b> · teknikrummet`,`<b>Power</b> · tech room`)}: ${a}</div>
        <div class="status">${i(`<b>Portlås</b> · säkerhetscentralen`,`<b>Gate lock</b> · security room`)}: ${u}</div>${d}`}if(e.portOpenAt===null)return i(`<div class="box-h ok">PORTEN ÄR REDO ✓</div><div class="muted">Välj bil först. När porten går upp blir det bråttom.</div>`,`<div class="box-h ok">THE GATE IS READY ✓</div><div class="muted">Pick a car first. Once the gate goes up, time is short.</div>`);let r=e.finale,o=r.car?ct[r.car]:null,s=e.police?.finaleDeadline??t,c=Math.max(0,Math.ceil((s-t)/1e3)),l=o&&r.departAt===null?Math.floor((s-o.driveMs-t)/1e3):null,u=l===null?``:l>=0?i(`<div class="status ${l<=5?`now`:``}">Bilen måste köra inom <b>${l} s</b> – säg till!</div>`,`<div class="status ${l<=5?`now`:``}">The car must leave within <b>${l} s</b> – tell them!</div>`):i(`<div class="status now"><b>KÖR NU!</b> Bilen hinner inte ut annars.</div>`,`<div class="status now"><b>DRIVE NOW!</b> Or the car won’t make it out.</div>`);return`<div class="box-h bad">${i(`PORTEN ÄR UPPE – POLISEN PÅ RAMPEN OM ${c} s`,`GATE IS UP – POLICE ON THE RAMP IN ${c} s`)}</div>
      <div class="status">${o?i(`${o.label}: <b>${r.bags}/${o.cap}</b> väskor${r.loadStart!==null&&r.departAt===null?` – lastar …`:``} · behöver ${o.driveMs/1e3} s ut`,`${o.label}: <b>${r.bags}/${o.cap}</b> bags${r.loadStart!==null&&r.departAt===null?` – loading …`:``} · needs ${o.driveMs/1e3} s to get out`):i(`Rånarna väljer bil vid bilarna.`,`The robbers pick a car by the cars.`)}</div>
      ${u}
      <div class="muted">${i(`Rånaren håller inne för att lasta (${a(lt/1e3)} s per väska). Släpper man kör bilen.`,`The Robber holds to load (${a(lt/1e3)} s per bag). Let go and the car drives.`)}</div>`}radioHtml(e){let t=e.police,n=[];if(e.startedAt!==null){n.push(i(`Larm från Lind & Sjöberg Privatbank, källarplan −2. Patruller på väg.`,`Alarm from Lind & Sjöberg Private Bank, basement level −2. Patrols en route.`));let e=Ct(this.store.seed).watched.map(e=>St.find(t=>t.id===e).place);n.push(i(`Insatsledningen har fått bild från bankens egna kameror: ${e.join(`, `)}.`,`Command has a feed from the bank’s own cameras: ${e.join(`, `)}.`))}e.talk.state!==`waiting`&&n.push(i(`Förhandlaren Lena Ek försöker nå rånarna på deras radio.`,`Negotiator Lena Ek is trying to reach the robbers on their radio.`)),t?.powerCut&&n.push(i(`Insatsledningen: huvudströmmen till fastigheten är bruten.`,`Command: main power to the building is cut.`)),t?.swat&&n.push(i(`Insatsstyrkan går ner via trappa B.`,`SWAT team going down via stairwell B.`)),t?.blue&&n.push(i(`Bilar på plats vid garagerampen.`,`Units in position at the garage ramp.`)),e.portOpenAt!==null&&n.push(i(`GARAGEPORTEN ÖPPNAS! Alla enheter till rampen!`,`GARAGE GATE OPENING! All units to the ramp!`));let r=e.talk.transcript.map(e=>`<p class="q">”${Ng(e.q)}”</p>${e.a?`<p class="a">${Ng(e.a)}</p>`:`<p class="a muted">…</p>`}`).join(``),a=Math.round(e.talk.effectMs/1e3);return`<h3>${i(`POLISRADION`,`POLICE RADIO`)}</h3>${n.map(e=>`<p class="msg">▸ ${Ng(e)}</p>`).join(``)||i(`<p class="muted">Tyst än så länge.</p>`,`<p class="muted">Quiet so far.</p>`)}
      ${r?`<h3>${i(`SAMTALET MED FÖRHANDLAREN`,`THE CALL WITH THE NEGOTIATOR`)}</h3>${r}${e.talk.state===`done`?`<p class="muted">${a>=0?i(`Köpte ${a} s.`,`Bought ${a} s.`):i(`Kostade ${-a} s.`,`Cost ${-a} s.`)}</p>`:``}`:``}`}dispose(){this.ro.disconnect();for(let e of this.feeds)e.rt.dispose();this.renderer.dispose()}};function Fg(e){let t=xt(e),n=e=>[30+e%5*52,30+Math.floor(e/5)*52],r=[];r.push(`<rect x="114" y="4" width="40" height="312" fill="rgba(125,255,168,0.07)" />`),r.push(`<text x="134" y="314" class="lbl" text-anchor="middle">${i(`korridoren under`,`corridor below`)}</text>`);for(let e=0;e<30;e++)for(let i of[1,2]){let a=vt(e,i);if(a<0)continue;let o=_t(e,a),[s,c]=n(e),[l,u]=n(a);t.open.has(o)?(r.push(`<line x1="${s}" y1="${c}" x2="${l}" y2="${u}" class="duct" />`),t.sensors.has(o)&&r.push(`<circle cx="${(s+l)/2}" cy="${(c+u)/2}" r="7" class="sensor" /><circle cx="${(s+l)/2}" cy="${(c+u)/2}" r="2.5" class="sensor-dot" />`)):t.fans.has(o)&&(r.push(`<line x1="${s}" y1="${c}" x2="${(s+l)/2}" y2="${(c+u)/2}" class="duct stub" />`),r.push(`<text x="${(s+l)/2}" y="${(c+u)/2+6}" class="fan" text-anchor="middle">✣</text>`))}for(let e=0;e<30;e++){let[i,a]=n(e),o=t.marks.get(e);r.push(`<rect x="${i-7}" y="${a-7}" width="14" height="14" class="node" />`),o?.kind===`code`&&r.push(`<text x="${i+9}" y="${a-9}" class="code">${o.code}</text>`),o?.kind===`grille`&&o.below===`korridor`&&r.push(`<rect x="${i-7}" y="${a-7}" width="14" height="14" class="grille" />`),o?.kind===`rust`&&r.push(`<circle cx="${i+11}" cy="${a+11}" r="4" class="rust" />`),o?.kind===`cables`&&r.push(`<path d="M${i-10} ${a+12} q 5 -5 10 0 t 10 0" class="cables" />`)}let[a,o]=n(24),[s,c]=n(0);return r.push(`<circle cx="${a}" cy="${o}" r="12" class="start" /><text x="${a}" y="${o+5}" text-anchor="middle" class="big">T</text>`),r.push(`<path d="M${a-16} ${o} l -14 0 m 0 0 l 6 -5 m -6 5 l 6 5" class="arrow" />`),r.push(`<circle cx="${s}" cy="${c}" r="12" class="goal" /><text x="${s}" y="${c+5}" text-anchor="middle" class="big">C</text>`),r.push(`<text x="134" y="14" text-anchor="middle" class="lbl">${i(`▲ mot garaget`,`▲ toward the garage`)}</text>`),`<svg class="vent-map" viewBox="0 0 268 320" xmlns="http://www.w3.org/2000/svg">${r.join(``)}</svg>
    <div class="legend"><span><i class="g"></i> ${i(`galler (ljus underifrån)`,`grate (light from below)`)}</span><span>${i(`✣ fläkt – stängt`,`✣ fan – blocked`)}</span><span><i class="s"></i> ${i(`rörelsevakt – larmar`,`motion sensor – alarm`)}</span><span><i class="r"></i> ${i(`rost/dropp`,`rust/drips`)}</span><span>${i(`〰 kablar`,`〰 cables`)}</span><span><b>V-xx</b> ${i(`stenciltext`,`stencil text`)}</span></div>`}var Ig=document.getElementById(`app`),Lg=new URLSearchParams(location.search),Rg=matchMedia(`(pointer: coarse)`).matches,zg=Lg.get(`q`)??y()??(Rg?`medium`:`high`);C(zg),Em(Rg||zg===`low`?256:512);var Bg=e=>e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]);function Vg(e){let t={world:Promise.resolve(null),f:0,what:i(`Förbereder`,`Preparing`),done:!1,listeners:new Set};return t.world=Lh(e,(e,n)=>{t.f=e,t.what=n,t.listeners.forEach(e=>e())}).then(e=>(t.f=1,t.done=!0,t.listeners.forEach(e=>e()),e)),t}function Hg(e,t){let n=new kt(e,!1,e),r=Number(Lg.get(`min`));r>0&&(n.limitMs=r*6e4);let i=new Mt(n,e,t),a=new Ut(n);return n.onEvent(e=>e.kind===`reset`&&setTimeout(()=>location.reload(),400)),{room:e,store:n,net:i,radio:a,build:Vg(e)}}function Ug(e){Ig.className=`lobby`;let t=document.createElement(`div`);t.className=`loading`,t.innerHTML=`<div class="spin"></div><b>${i(`Bygger banken …`,`Building the bank …`)}</b><div class="bar"><i></i></div><span class="what"></span><p class="muted">${i(`Det kan ta en halv minut på en mobil – stäng inte sidan.`,`This can take half a minute on a phone – don’t close the page.`)}</p>`,Ig.innerHTML=``,Ig.appendChild(t);let n=t.querySelector(`.bar i`),r=t.querySelector(`.what`),a=()=>{n.style.width=`${Math.round(e.f*100)}%`,r.textContent=`${e.what} · ${Math.round(e.f*100)} %`};return e.listeners.add(a),a(),()=>e.listeners.delete(a)}async function Wg(e,t){let n=t?.room??null,r=t?.store??new kt(`solo`,!0),a=t?.build??Vg(`solo`),o=null;t&&h({title:i(`Vill du lämna spelet?`,`Leave the game?`),text:i(`Spelet fortsätter för de andra. Du kan gå med igen med samma rumskod.`,`The game goes on for the others. You can rejoin with the same room code.`),close:()=>o?.back()??!1});let s=a.done?null:Ug(a);t&&!a.done&&Ig.appendChild(t.radio.el);let c=await a.world;s?.(),Ig.innerHTML=``,Ig.className=`game ${e}`;let l=e===`solo`||e===`robber`?new Dg(c,r,zg,n):null,u=e===`solo`||e===`fixer`?new Pg(c,r,n):null;o=l,l&&Ig.appendChild(l.el),u&&Ig.appendChild(u.el),t&&Ig.appendChild(t.radio.el),n&&history.replaceState(history.state,``,`?room=${n}&role=${e}`);let d=performance.now(),f=()=>{requestAnimationFrame(f);let e=performance.now(),t=Math.min(.05,(e-d)/1e3);d=e,l?.step(t);let n=r.now();c.update(n/1e3,t,{robbers:r.activeRobbers().map(({id:e,s:t})=>e===r.selfId&&l?{id:e,s:l.state,self:!0}:{id:e,s:t,self:!1}),shared:r.shared(n),need:r.need(),selectedWire:l?.state.focus===`cab`?l.selected:null,selectedBreaker:l?.state.focus===`tech`?l.selected:null},n),l?.render(t),u?.render(t)};requestAnimationFrame(f),Object.assign(window,{__game:{store:r,world:c,robber:l,fixer:u,radio:t?.radio??null,net:t?.net??null}})}function Gg(){Ig.className=`lobby`;let e=Oe(Lg.get(`room`)??``),t=e?`join`:null,r=ke(),a=document.createElement(`div`);a.className=`lobby-card`,Ig.innerHTML=``,Ig.appendChild(a);let s=()=>{a.innerHTML=`
      <div class="lang-switch" role="group" aria-label="Språk / Language">
        <button data-act="lang:sv" class="${n===`sv`?`on`:``}">🇸🇪 Svenska</button>
        <button data-act="lang:en" class="${n===`en`?`on`:``}">🇬🇧 English</button>
      </div>
      <div class="kicker">${i(`ETT SAMARBETSSPEL FÖR 2–4`,`A CO-OP GAME FOR 2–4`)}</div>
      <h1>${i(`Det Stora Bankrånet`,`The Great Bank Heist`)}</h1>
      <p class="lead">${i(`Ta er ut ur valvet, genom laserkorridoren, in i garaget och iväg – innan insatsstyrkan stormar. Rånarna rör sig men ser inte allt. Fixaren ser kamerorna och har manualerna och registret – men kan inte röra något.`,`Get out of the vault, through the laser corridor, into the garage and away – before the SWAT team storms in. The robbers can move but can’t see everything. The Fixer sees the cameras and has the manuals and the register – but can’t touch anything.`)}</p>
      <div class="step"><span class="n">1</span> ${i(`Skapa ett rum eller gå med i ett`,`Create a room or join one`)}</div>
      <div class="choice">
        <button data-act="mode:new" class="${t===`new`?`on`:``}"><b>＋ ${i(`Skapa ett nytt rum`,`Create a new room`)}</b><span>${i(`Du får en kod att dela`,`You get a code to share`)}</span></button>
        <button data-act="mode:join" class="${t===`join`?`on`:``}"><b>→ ${i(`Gå med i ett rum`,`Join a room`)}</b><span>${i(`Någon har gett dig en kod`,`Someone gave you a code`)}</span></button>
      </div>
      ${t===`new`?`<div class="panel">
              <div class="muted">${i(`Rumskoden blir`,`Your room code`)}</div>
              <div class="code-big">${r}</div>
              <div class="row"><button data-act="reroll" class="small">${i(`Ny kod`,`New code`)}</button></div>
              <button class="primary" data-act="create">${i(`Skapa rummet ${r}`,`Create room ${r}`)}</button>
            </div>`:t===`join`?`<div class="panel">
              <label>${i(`Rumskod (fyra bokstäver)`,`Room code (four letters)`)}
                <div class="code-row"><input data-ui="code" maxlength="4" placeholder="ABCD" value="${e}" autocomplete="off" autocapitalize="characters" /></div>
              </label>
              <button class="primary" data-act="join">${i(`Gå med i rummet`,`Join the room`)}</button>
            </div>`:``}
      <p class="muted">${i(`2 spelare: en rånare + Fixaren. 3: två rånare + Fixaren. 4: två rånare + två Fixare. Prata med varandra – sitt ihop, eller håll inne 📻-knappen: den är en walkie-talkie till alla i rummet.`,`2 players: one robber + the Fixer. 3: two robbers + the Fixer. 4: two robbers + two Fixers. Talk to each other – sit together, or hold the 📻 button: it’s a walkie-talkie to everyone in the room.`)}</p>`;let o=a.querySelector(`[data-ui=code]`);o&&(o.addEventListener(`input`,()=>{o.value=Oe(o.value),o.classList.remove(`bad`)}),o.addEventListener(`keydown`,e=>e.key===`Enter`&&c(`join`)),e||o.focus())},c=e=>{if(P(),e===`lang:sv`||e===`lang:en`){let t=e===`lang:en`?`en`:`sv`;t!==n&&o(t);return}if(e===`mode:new`||e===`mode:join`)return t=e===`mode:new`?`new`:`join`,s();if(e===`reroll`)return r=ke(),s();if(e===`create`)return Kg(r,!0);if(e===`join`){let e=a.querySelector(`[data-ui=code]`),t=Oe(e.value);if(t.length!==4){e.classList.add(`bad`),e.focus();return}Kg(t,!1)}};a.addEventListener(`click`,e=>{let t=e.target.closest(`[data-act]`);t&&c(t.dataset.act)}),s()}function Kg(e,t){Ig.className=`lobby`,history.replaceState(history.state,``,`?room=${e}`);let n=Hg(e,`waiting`);h({title:i(`Vill du lämna rummet?`,`Leave the room?`),text:i(`Du går tillbaka till startskärmen.`,`You’ll go back to the start screen.`)});let{store:r,net:a}=n,o=document.createElement(`div`);o.className=`lobby-card waiting`,Ig.innerHTML=``,Ig.appendChild(o),Ig.appendChild(n.radio.el);let s=!1,c=``,l=()=>{if(s)return;let a=r.roster,l=r.seat,u=r.log.some(e=>e.kind===`start`);if(u&&(l===`robber`||l===`fixer`)){s=!0,Wg(l,n);return}let d=e=>a.find(t=>t.role===`robber`&&t.slot===e),f=a.filter(e=>e.role===`fixer`),p=a.filter(e=>e.role===`robber`),m=e=>e?e===r.selfId?i(`Du`,`You`):i(`Tagen`,`Taken`):``,h=(e,t,n,r,a,o,s)=>`<button data-act="${e}" class="seat ${o?`mine`:a?`taken`:``}" ${s&&!o?`disabled`:``}>
        <span class="ico">${t}</span><b>${n}</b><span class="sub">${r}</span>
        <span class="state">${o?`✓ ${i(`Du`,`You`)}`:a||i(`Ledig`,`Free`)}</span>
      </button>`,g=d(0),_=d(1),v=l===`fixer`,y=f.filter(e=>e.id!==r.selfId).length,b=p.length>=1&&f.length>=1&&(l===`robber`||l===`fixer`),x=a.filter(e=>e.role===`waiting`).length,S=`
      <div class="kicker">${t?i(`DU HAR SKAPAT RUMMET`,`YOU CREATED THE ROOM`):i(`DU ÄR MED I RUMMET`,`YOU’RE IN THE ROOM`)}</div>
      <div class="code-big">${e}</div>
      <p class="muted">${i(`Ge koden till de andra – de väljer "Gå med i ett rum".`,`Give the code to the others – they choose “Join a room”.`)}${r.connected?``:` <b>${i(`Ansluter …`,`Connecting …`)}</b>`}</p>
      <div class="step"><span class="n">2</span> ${i(`Välj din roll`,`Choose your role`)}</div>
      <div class="seats">
        ${h(`seat:robber`,`🕶️`,i(`Rånare A`,`Robber A`),i(`Vrider nyckel A`,`Turns key A`),m(g?.id),l===`robber`&&g?.id===r.selfId,!!g)}
        ${h(`seat:robber`,`🕶️`,i(`Rånare B`,`Robber B`),i(`Bara när ni är 3–4`,`Only with 3–4 players`),m(_?.id),l===`robber`&&_?.id===r.selfId,!!_)}
        ${h(`seat:fixer`,`📡`,i(`Fixaren`,`The Fixer`),f.length>1?i(`${f.length} st`,`${f.length} players`):i(`Ser kamerorna`,`Sees the cameras`),v?``:y?y>1?i(`Båda tagna`,`Both taken`):i(`Tagen · 1 till`,`Taken · 1 more`):``,v,!1)}
      </div>
      ${r.seatError?`<p class="warn">${Bg(r.seatError)}</p>`:``}
      ${l===`waiting`?``:`<button data-act="seat:waiting" class="small">${i(`Lämna rollen`,`Leave the role`)}</button>`}
      <div class="people build">${n.build.done?i(`✓ Banan är laddad`,`✓ The level is loaded`):i(`Laddar banan … ${Math.round(n.build.f*100)} %`,`Loading the level … ${Math.round(n.build.f*100)} %`)}</div>
      <div class="people">${i(`${a.length} i rummet`,`${a.length} in the room`)}${x?i(` · ${x} har inte valt roll än`,` · ${x} haven’t chosen a role yet`):``}${p.length>=2?i(` · båda rånarplatserna tagna`,` · both robber seats taken`):``}</div>
      <div class="people radio-line">📻 Walkie-talkie: <b>${n.radio.on?i(`på`,`on`):i(`av`,`off`)}</b> <button data-act="radio" class="small">${n.radio.on?i(`Stäng av`,`Turn off`):i(`Slå på`,`Turn on`)}</button></div>
      <div class="step"><span class="n">3</span> ${i(`Starta när alla är med`,`Start when everyone’s in`)}</div>
      ${u?`<p class="lead">${i(`Spelet har redan startat – välj en ledig roll så kommer du in.`,`The game has already started – pick a free role to get in.`)}</p>`:`<button class="primary start" data-act="start" ${b?``:`disabled`}>▶ ${i(`Starta spelet`,`Start the game`)}</button>
            <p class="muted">${b?i(`När någon trycker startar spelet för alla, och polisklockan börjar ticka.`,`When someone presses it, the game starts for everyone and the police clock starts ticking.`):i(`Det behövs minst en rånare och en Fixare.`,`You need at least one robber and one Fixer.`)}</p>`}`;S!==c&&(c=S,o.innerHTML=S)};o.addEventListener(`click`,e=>{let t=e.target.closest(`[data-act]`);if(!t||t.disabled)return;P();let i=t.dataset.act;if(i.startsWith(`seat:`)){let e=i.slice(5);r.seatError=``,a.setSeat(e===r.seat?`waiting`:e);return}if(i===`radio`){n.radio.setEnabled(!n.radio.on);return}if(i===`start`){if(r.log.some(e=>e.kind===`start`))return;r.emit({kind:`start`}),l()}}),r.onChange(l),r.onEvent(l),n.build.listeners.add(l),n.radio.onToggle=l,l()}var qg=Oe(Lg.get(`room`)??``),Jg=Lg.get(`role`);qg.length===4&&(Jg===`robber`||Jg===`fixer`)?Wg(Jg,Hg(qg,Jg)):Gg();