# vit slim
most minimal
target 100line
```
let lib={}
//$$$ is special
lib.$$=(str,o)=>{
 $$$=str;
 o.next();
}
lib.k=(str,o)=>{

 o.next();
 $k=
}
vit([],lib)

```
```
#start
mode>xyz
xyz>aaaaa
xyz>{$$$}
//return $xyz
$aaa=eeaeare; //$head is single line javascript
{{{
}}}
{1}>>>#aaa
{1}>>>{$$$}

```
## vit(textary,lib) vlib={} fps(frame,caller)
```
vit=(ary,lib)=>{

 vlib=Object.assign(vlib,lib)
}

```

```
//fps
;(function(root){
 var fps=60,ms=50,count=0,callary=[],running=false,stopflg=false,cl=void 0
 ;
 function loop() {
  callary.map(f=>f(count))
  if(stopflg)return clearTimeout(cl)
  return cl=setTimeout(()=>{return ++count,requestAnimationFrame(loop)},ms)
 }
 function entry(_fps,_caller){
  if(_caller) callary.push(_caller)
  if(running)return console.log('already running')
  return fps=_fps||60,ms=1000/fps,loop()
 }
 function getcount(){return count}
 function fpsclear(debugmes){return stopflg=true,console.log(debugmes,'fpsclear')}
 ;
 root.fps=entry
 root.fpsclear=fpsclear
 root.getcount=getcount
})(this); 
```
