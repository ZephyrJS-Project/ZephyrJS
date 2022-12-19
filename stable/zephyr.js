"use strict";PIXI.Keys={},PIXI.Mouse={},PIXI.Audio={},PIXI.File={},PIXI.Zephyr={color:{PRIMARY:"#ef6f6c",WARNING:"#f0cf6b",SUCCESS:"#6bf097",MESSAGE:"#6c6fef",ADVANCE:"#a36cef",PIXIJS:"#ea1e63"},version:"ZephyrJS 22.12.06",compatible:"PixiJS v7.0.4",useKeys(){PIXI.Keys.map=new Map,PIXI.Keys.down=e=>!!(PIXI.Keys.map.size>0&&PIXI.Keys.map.has(e))&&(PIXI.Keys.map.set(e,!1),!0),PIXI.Keys.fired=e=>!!(PIXI.Keys.map.size>0&&PIXI.Keys.map.get(e))&&(PIXI.Keys.map.set(e,!1),!0),window.addEventListener("keydown",e=>{e.preventDefault(),PIXI.Keys.map.set(e.code,!0)}),window.addEventListener("keyup",e=>{PIXI.Keys.map.delete(e.code)})},useMouse(){PIXI.Mouse.bounds=document.getElementsByTagName("html")[0].getBoundingClientRect(),PIXI.Mouse.container=document.getElementsByTagName("html")[0],PIXI.Mouse.x=0,PIXI.Mouse.y=0,PIXI.Mouse.setContainer=e=>{PIXI.Mouse.container=e,PIXI.Mouse.bounds=PIXI.Mouse.container.getBoundingClientRect()},window.onresize=()=>{PIXI.Mouse.bounds=PIXI.Mouse.container.getBoundingClientRect()},PIXI.Mouse.alias=["Primary","Middle","Secondary"],PIXI.Mouse.map=new Map,PIXI.Mouse.down=e=>!!(PIXI.Mouse.map.size>0&&PIXI.Mouse.map.has(e))&&(PIXI.Mouse.map.set(e,!1),!0),PIXI.Mouse.fired=e=>!!(PIXI.Mouse.map.size>0&&PIXI.Mouse.map.get(e))&&(PIXI.Mouse.map.set(e,!1),!0),window.addEventListener("mouseup",e=>{PIXI.Mouse.map.delete(PIXI.Mouse.alias[e.button])}),window.addEventListener("mousedown",e=>{PIXI.Mouse.map.set(PIXI.Mouse.alias[e.button],!0)}),window.addEventListener("mousemove",e=>{PIXI.Mouse.x=(e.x-PIXI.Mouse.bounds.left)/PIXI.Mouse.bounds.width*PIXI.Mouse.container.width,PIXI.Mouse.y=(e.y-PIXI.Mouse.bounds.top)/PIXI.Mouse.bounds.height*PIXI.Mouse.container.height})},useAudio(){PIXI.Audio.ctx=new AudioContext,PIXI.Audio.buffers=new Map,PIXI.Audio.player=function(){if(PIXI.Audio.buffers.has(this.src)){let e=PIXI.Audio.ctx.createBufferSource();e.buffer=PIXI.Audio.buffers.get(this.src),e.connect(PIXI.Audio.ctx.destination),e.start(0)}},PIXI.Audio.from=e=>{let s=new XMLHttpRequest;return s.open("GET",e,!0),s.responseType="arraybuffer",s.onload=()=>{PIXI.Audio.ctx.decodeAudioData(s.response,function(s){PIXI.Audio.buffers.set(e,s)})},s.send(),{src:e,play:PIXI.Audio.player}}},useFile(){PIXI.File.write=async(e,s)=>{let t=new Blob([JSON.stringify(e)],{type:JSON});var o=document.createElement("a"),i=URL.createObjectURL(t);o.href=i,o.download=s+".json",document.body.appendChild(o),o.click(),setTimeout(()=>{document.body.removeChild(o),window.URL.revokeObjectURL(i)},0)},PIXI.File.open=async()=>([fileHandle]=await window.showOpenFilePicker(),JSON.parse(await (await fileHandle.getFile()).text()))},spriteFix(e){let s=e.anchor?e.anchor:{x:0,y:0};return{x:-e.width*s.x+e.x,y:-e.height*s.y+e.y,width:e.width,height:e.height}}},PIXI.collision={aabb(e,s){let t=PIXI.Zephyr.spriteFix(e),o=PIXI.Zephyr.spriteFix(s);return!(t.x+e.width<o.x||t.y+e.height<o.y||t.x>o.x+s.width||t.y>o.y+s.height)},radius(e,s){let t=PIXI.Zephyr.spriteFix(e),o=PIXI.Zephyr.spriteFix(s);return Math.sqrt(Math.pow(t.x-o.x,2)+Math.pow(t.y-o.y,2))<=e.r+s.r}},PIXI.clamp=(e,s,t)=>Math.min(Math.max(e,s),t),PIXI.mix=(e,s,t)=>e*(1-t)+s*t,PIXI.rand=(e,s)=>Math.random()*(s-e+1)^0+e,PIXI.utils.requestFullScreen=e=>{e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},window.addEventListener("contextmenu",e=>{e.preventDefault()}),console.log("%cUsing "+PIXI.Zephyr.version+"! https://github.com/OttCS/ZephyrJS","color:"+PIXI.Zephyr.color.PRIMARY),console.log("%cCompatible with "+PIXI.Zephyr.compatible,"color:"+PIXI.Zephyr.color.PIXIJS);