# wire
https://codepen.io/gnjo/pen/XWJLgxd?editors=1010
```
let o={}
o.staircount=(i)=>{
 //fn.q('pre').textContent=f(4) 
 return Array.from({length:i+1}).map((d,i)=>i).reduce((a,b)=>a+b)
}
o.genpoints=()=>{
 let cx=12,cy=12,sw=2,sh=2,f=o.staircount
 ;
 //a,b,c,d,e,l
 let p={}
 ;[4,3,2,1,0].map(d=>{
  let i=4-d,x=cx-sw-f(i),y=cy-sh-f(i),lx=(sw+f(i))*2,ly=lx
  p[d]={}
  p[d].l=[lx,ly]
  p[d].a=[x,y],p[d].b=[x+lx,y],p[d].c=[x+lx,y+ly],p[d].d=[x,y+ly]
  p[d].e=[cx,cy]
 })
 return p
}
o.points=o.genpoints()
o.getground=(wide,depth,flg)=>{
 if(wide!='c'||!o.points[depth+1])return [];
 let x=o.points,i=depth
 let ary= [x[i+1].d,x[i+1].c,x[i].c,x[i].d]
 if(!flg)return ary;
 //ground object
 let dl=Math.abs(x[i+1].l[0]-x[i].l[0]),z=0.2/1.4142
 let dx=-x[i].l[0]*z  ,dy=x[i].l[1]*0.2
 ,dx1=dl*z,dy1=x[i+1].l[1]*z
 ,diff=[ [dx1,dx1],[-1*dx1,dx1],[dx,-dx1],[-dx,-dx1] ]
 return ary.map((d,j)=>[d[0]+diff[j][0],d[1]+diff[j][1]] ) 
}
o.getceiling=(wide,depth,flg)=>{
 if(wide!='c'||!o.points[depth+1])return [];
 let x=o.points,i=depth
 let ary=[x[i+1].a,x[i+1].b,x[i].b,x[i].a]
 if(!flg)return ary;
 //ceiling object
 let dl=Math.abs(x[i+1].l[0]-x[i].l[0]),z=0.2/1.4142
 let dx=-x[i].l[0]*z  ,dy=x[i].l[1]*0.2
 ,dx1=dl*z,dy1=x[i+1].l[1]*z
 ,diff=[ [dx1,-dx1],[-1*dx1,-dx1],[dx,dx1],[-dx,dx1] ]
 return ary.map((d,j)=>[d[0]+diff[j][0],d[1]+diff[j][1]] )  
}
o.getface=(wide,depth,flg)=>{
 //if(wide!='c'||!o.points[depth+1])return [];
 let x=o.points,i=depth,move=(wide==='l')?-1*x[i].l[0]:(wide==='r')?1*x[i].l[0]:0
 let ary=[x[i].a,x[i].b,x[i].c,x[i].d]
 if(!flg)return ary.map(d=>[d[0]+move,d[1]])//
 let dx=x[i].l[0]*0.2,dy=x[i].l[1]*0.2
 ,diff=[ [dx,dy],[-1*dx,dy],[-1*dx,0],[dx,0] ]
 return ary.map((d,j)=>[d[0]+diff[j][0],d[1]+diff[j][1]] ).map(d=>[d[0]+move,d[1]])
}
o.getside=(wide,depth,flg)=>{
 if(wide=='c'||!o.points[depth+1])return [];
 let x=o.points,i=depth
 ,ary=(wide=='l')?[x[i].a,x[i+1].a,x[i+1].d,x[i].d]: [x[i].b,x[i+1].b,x[i+1].c,x[i].c]
 if(!flg)return ary;
 let dl=Math.abs(x[i+1].l[0]-x[i].l[0]),z=0.2/1.4142
 let dx=dl*z,dy=x[i].l[1]*0.2
 ,dx1=dx,dy1=x[i+1].l[1]*z
 ,diff=(wide=='l')?[ [dx,dy],[-1*dx1,dy1],[-1*dx1,dx],[dx,-dx] ]:[ [-dx,dy],[dx,dy1],[dx,dx],[-dx1,-dx] ]
 return ary.map((d,j)=>[d[0]+diff[j][0],d[1]+diff[j][1]] )   
}
o.gg=o.getground,o.gc=o.getceiling,o.gf=o.getface,o.gs=o.getside

function p2d(ary,scale,offsetx,offsety){
 let p=new Path2D(),s=scale||1,ox=offsetx||0,oy=offsety||0
 ,f=(d)=>{return [d[0]*s+ox,d[1]*s+oy] }
 ary.map(f).map((d,i)=>{return (i===0)?p.moveTo(d[0],d[1]):p.lineTo(d[0],d[1])});
 p.closePath();
 return p
}

let ret=o.getceiling('c',1)
fn.q("pre").textContent=ret//JSON.stringify(ret,null,2)
let s=10,ox=200,oy=0
let ctx=fn.q('canvas').getContext('2d')
ctx.canvas.width=500
ctx.canvas.height=300

//,pc=p2d(o.gf('c',1),s,ox,oy)
//ctx.stroke(pc2)

;[0,1,2,3,4].map(d=>{
 let p=p2d(o.gs('l',d),s,ox,oy)
 ,p1=p2d(o.gs('l',d,'flg'),s,ox,oy)
 ctx.stroke(p),ctx.stroke(p1)
})

```
