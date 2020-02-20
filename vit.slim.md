# vit slim
most minimal
target 100line
```
let lib={}
lib.xyz=(str,vit)=>{
return vit.next(x)
}
vit([],lib)

```
```
#start
xyz>aaaaa
xyz>{$$$}
//return $xyz
$aaa=eeaeare; //$head is single line javascript
{{{
}}}
{1}>>>#aaa
{1}>>>{$$$}

```
## vit(textary,lib) fps(frame,caller)
```
//tw
```

```
//fps
;(function(root){
 var fps = 30,ms=50,count=0,callary=[],running=false
 ;
 function loop() {
  callary.map(f=>f(count))
  setTimeout(()=>{return ++count,requestAnimationFrame(loop)},ms)
 }
 function entry(_fps,_caller){
  if(_caller) callary.push(_caller)
  if(running)return console.log('already running')
  return fps=_fps||60,ms=1000/fps,loop()
 }
 function getcount(){return count}
 root.fps=entry
 root.getcount=getcount
})(this); 
```
