# vit
```
//keycall jump select output wait modechange
//message five, choice 1+4
```
```
$$m //mode
$$k //key
$$n //select number -1 is cancel
$$s //select list
$$o //output
$$a //nowaddress
$$l //nowread line
$$j //jumpback line
$$$ //return

#mark
!xyz //mode change
k> //keywait
>{$$n} //output select number
> //clear
>choice is are?
{{{
aaa
bbb
ccc
ddd
}}}
?>{$$$}
**** //one astrisk wait 50ms
{1}>>>#aaaa
```

```
vitRead(text)
function vit(str,o){
 //callback;
}
```


```
;(function(root){

///
//'MRK,MOD,KWT,SEL,MES,WIT,JMP,EVM,EVL,CMM'
let cmds={}
cmds.MOD=(str,o)=>{
 $$m=str.slice(1)
 return o.next()
}
cmds.CMM=(str,o)=>{
 //comment
 return o.next()
}
cmds.EVL=(str,o)=>{
 $$$ = _(_t(str));
 return o.next();
}
cmds.EVM=(str,o)=>{
 $$$ =_m(_t2(str));///
 return o.next();
}
cmds.JMP=(str,o)=>{
 let a=str.split('>>>'),i=o.search(_m(a[1]))
 //console.log(a) 
 let flg = _(_t(a[0]));
 $$$ =flg;
 //console.log('!jump!',i)
 return (!flg || i==void 0)?o.next():o.next(i)
}

cmds.MRK=(str,o)=>{
 $$$ = o.line////////
 return o.next();
}
cmds.WIT=(str,o)=>{
 let time=o.waitms*str.length
 let cl=setTimeout(()=>{clearTimeout(cl),o.next()},time)
 return;
}
cmds.KWT=(str,o)=>{
 o.ctrl.flash()
 $$k=void 0
 let cl=setInterval(()=>{ if($$k) clearInterval(cl),o.next()},1000/o.fps)
 return;
} 
cmds.SEL=(str,o)=>{
 //...
 let se=$m9.split('\n'),n=0//($$n!=-1)?$$n:0
 $m9=se[n]
 o.ctrl.flash()
 let cl=setInterval(()=>{
  $$k=o.ctrl.key0
  if($$k==='A')return clearInterval(cl),$$$=$$0=$$n=n,$$1=se[n],o.next();
  if($$k==='B')return clearInterval(cl),$$$=$$0=$$n=-1,$$1='',o.next();
  if($$k==='^'){
   n=(Math.max(n-1,0))%se.length,$$n=n,$m9=se[n]
   //console.log($$k,n,$m9,se.length,se)
   return o.ctrl.flash();
  }
  if($$k==='v'){
   n=(n+1)%se.length,$$n=n,$m9=se[n]
   //console.log($$k,n,$m9)   
   return o.ctrl.flash();
  }
  
 },1000/o.fps) 

 }
cmds.MES=(str,o)=>{
 let a=str.split('>'),mes=_m(a[1],1)
 $$$=$$o=mes,o.next()
 return o.next()
 }

///
 function entry(text,debugflg){
  let o=reader();
  o.fps=20
  o.waitms=50
  o.keyset='w,a,s,d,j,k,i,l,u,o'
  o.ctrl=controller
  o.cmds=cmds
  o.jumpback=0
  o.setjumpback=()=>{return o.jumpback=o.line+1}  
  o.search=(d)=>{return (d==='###')?o.jumpback:o.jumps[d]}
  o.cmd=(list)=>{
   //{str,type,line}
   return (o.cmds[list.type]||o.cmds['CMM'])(list.str,o)
  }
  ;
  o.add(text)
  if(debugflg)console.log(o.lists)
  o.ctrl.add(o.keyset);
  o.ctrl.done();
  //
  o.cl=setInterval(()=>{
  if(o.isend())return clearInterval(o.cl),console.log('endline') /////
  let list=o.get();
  if(list) o.cmd(list)
  if(vit) vit($$o,o)
  },1000/o.fps)  
  //
  return o;
 }
 root.vitRead=entry;
})(this);



vitRead(text)
function vit(mes,o){fn.q('pre').textContent=str}

```



