(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(n,t,e){n.exports=e(21)},20:function(n,t,e){},21:function(n,t,e){"use strict";e.r(t);var a,o,i,r,c=e(0),d=e.n(c),s=e(8),l=e.n(s),m=(e(20),e(3)),u=e(4);const w=u.a.div(a||(a=Object(m.a)(["\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground-color: black;\n"])));u.a.button(o||(o=Object(m.a)(["\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\theight: 30px;\n"]))),u.a.button(i||(i=Object(m.a)(["\n\tposition: absolute;\n\tright: 0;\n\ttop: 60px;\n\theight: 30px;\n"]))),u.a.div(r||(r=Object(m.a)(["\n\tposition: absolute;\n\tbackground-color: #fff;\n\tborder-radius: 50%;\n"])));var h,p=e(5),g=e.n(p);const b=u.a.div(h||(h=Object(m.a)(["\n\twidth: 100vw;\n\theight: 100vh;\n"])));var v=()=>(Object(c.useEffect)(()=>{const{Composites:n,Engine:t,Render:e,Body:a,Runner:o,Common:i,Mouse:r,MouseConstraint:c,Composite:d,Bodies:s}=g.a,l=t.create(),m=l.world,u=e.create({element:document.body,engine:l,options:{width:window.innerWidth,height:window.innerHeight,showAngleIndicator:!1,wireframes:!1}});e.run(u);const w=o.create();o.run(w,l);const h=d.create();d.add(h,n.stack(50,50,30,25,0,0,(n,t)=>{const e=Math.round(i.random(1,8));let a=null;switch(e>2&&i.random()>.7&&(a={radius:10}),Math.round(i.random(0,1))){case 0:return s.rectangle(n,t,i.random(10,20),i.random(10,20),{chamfer:a});case 1:return s.polygon(n,t,e,i.random(10,30),{chamfer:a});default:return null}}));const p=window.innerWidth,b=window.innerHeight;d.add(m,[h,s.rectangle(p/2,0,p,50,{isStatic:!0}),s.rectangle(p/2,b,p,50,{isStatic:!0}),s.rectangle(p,b/2,50,b,{isStatic:!0}),s.rectangle(0,b/2,50,b,{isStatic:!0})]);const v=r.create(u.canvas),f=c.create(l,{mouse:v,constraint:{stiffness:.2,render:{visible:!1}}});d.add(m,f),u.mouse=v,e.lookAt(u,{min:{x:0,y:0},max:{x:window.innerWidth,y:window.innerHeight}});const y=n=>{const t="undefined"!==typeof window.orientation?window.orientation:0,e=l.gravity;0===t?(e.x=i.clamp(n.gamma,-90,90)/90,e.y=i.clamp(n.beta,-90,90)/90):180===t?(e.x=i.clamp(n.gamma,-90,90)/90,e.y=i.clamp(-n.beta,-90,90)/90):90===t?(e.x=i.clamp(n.beta,-90,90)/90,e.y=i.clamp(-n.gamma,-90,90)/90):-90===t&&(e.x=i.clamp(-n.beta,-90,90)/90,e.y=i.clamp(n.gamma,-90,90)/90)};return window.addEventListener("deviceorientation",y),()=>{g.a.Render.stop(u),g.a.Runner.stop(w),"undefined"!==typeof window&&window.removeEventListener("deviceorientation",y)}},[]),d.a.createElement(b,null));var f=()=>d.a.createElement(w,null,d.a.createElement(v,null));l.a.createRoot(document.getElementById("root")).render(d.a.createElement(f,null))}},[[12,1,2]]]);
//# sourceMappingURL=main.127f1ef1.chunk.js.map