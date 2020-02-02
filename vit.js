/////////////////////////////////////////
var $$m //mode
var $$k //key
var $$n //select number -1 is cancel
var $$s //select list
var $$o //output
var $$a //nowaddress
var $$l //nowread line
var $$j //jumpback line
//var $$w //waitcount
var $$$ //return

/////////////////////////////////////////
var $keyconf=keyconfig('w,a,s,d,j,k,i,l,u,o')
function keyconfig(str){
  //$keyconf={37:'<',39:'>',38:'^',40:'v',70:'A',68:'B',65:'X',83:'Y',82:'R',69:'L'}
  let t="^,<,v,>,A,B,X,Y,L,R".split(',')
  ,k=str.split(',').map(d=>(d.length>1)?d:d.toUpperCase().charCodeAt(0))
  ,keys={}
  k.map((d,i)=>{ keys[d]=t[i] })
  return keys
}
function keycall(caller){
 $$k=''//oldkey reset
 let el=document.documentElement,del=()=>{el.onkeydown=void 0}
 //caller(k,del) //if use end, need the del()
 el.onkeydown=function(ev){
   if(/*$waitcount||*/!$keyconf[ev.which])return;
   $$k=$keyconf[ev.which],caller($$k,del)
 }
}
/*
keycall((k,del)=>{
 fn.q('pre').textContent=k
 if(k==='X')del();
})
*/
/////////////////////////////////////////

;(function(root){
 let ma={
  group:/#.*|\!.*|{.*}>>>(#.*|{.*})|k>.*|(|\*|\?|[ims][0-9])>.*|\*[^>].*|{{{([\s\S]*?)}}}|{.*}|.*/g
  ,trim:/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm
  ,types:'MRK,MOD,KWT,SEL,MES,WIT,JMP,EVM,EVL,CMM'.split(',')
  ,MRK:/^#.*/
  ,MOD:/^\!.*/
  ,JMP:/^{.*}>>>(#.*|{.*})/ //jump
  ,MES:/^>.*/ //message input
  ,SEL:/^\?>.*/ //select
  ,EVL:/^{.*}/ //eval javascript
  ,EVM:/^{{{([\s\S]*?)}}}/ //eval message
  ,KWT:/^k>.*/ //key wait
  ,WIT:/^\*/ //increase the wait
  ,CMM:/^.*/
 }
 function lexs(text,offset){
  let oi=offset||0
  let jumps={}
  let lists=text.replace(ma.trim,'').match(ma.group)
  .map((d,i)=>{
   let type='CMM';
   for(type of ma.types)
    if(ma[type].test(d))break;
   if(type==='MRK') jumps[d]=i+oi
   return {str:d,type:type,line:i+oi}
  })
  return {jumps:jumps,lists:lists}
 }
 ;
 root.lexs=lexs
})(this);

/////////////////////////////////////////
;(function(root){
 let lexs=root.lexs
 function entry(){
  let o={}
  o.lists=[] //lists
  o.jumps={}
  o.line=0 //count
  o.block=0 //flg
  o.end=0 //flg
  o.lexs=lexs
  ;
  o.add=(text)=>{
   let l=o.lists.length
   let x=o.lexs(text,l)
   o.lists=o.lists.concat(x.lists)
   o.jumps=Object.assign(o.jumps,x.jumps)
   return o;
  }
  ;
  o.get=()=>{
   let s=o.block?void 0:o.lists[o.line]
   if(s) o.block=1;
   return s;
  }
  o.next=(d)=>{
   (d!=null)?o.line=d:o.line++;
   o.end=(o.lists.length-1<o.line)?1:0;
   return o.block=0
  }
  o.reload=(_list)=>{
   o.block=1;
   o.line=999;
   o.lists=_list||[]
   o.line=0;
   o.block=0;
   return;
  }
  o.isend=()=>{return o.end}
  o.isEnd=o.isend
  return o;
 }
 root.reader=entry;
/*
let li=`MRK\nCMM\nEVL「「あいうえを入れておく」」`.split('\n');
let rd=reader(li);
fn.q('button').onclick=()=>{
 fn.q('pre').textContent=rd.get();
 fn.q('pre.line').textContent=rd.line +','+ rd.end
 fn.q('pre.end').textContent=rd.isEnd()?'end':'not'
 rd.next();
}*/
})(this);
/////////////////////////////////////////

;(function(root){
 let fn={}
 fn.toSmall=(str)=>{
  return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
   return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  }) 
 }
 fn.toBig=(str)=>{
  return str.replace(/[A-Za-z0-9]/g, function(s) {
   return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
  });
 }
 root.toSmall=fn.toSmall;
 root.toBig=fn.toBig
})(this);
///////////////////////////////////////////
;(function(root){
 let toBig=root.toBig
 ;
 //comment trim 
 function _c(d){return d.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm,'')}
 //eval
 function _(obj){return Function('return (' + obj + ')')()}
 //message rep
 function _m(obj,bigflg){return obj.replace(/{(.*?)}/g,(d,dd)=>{return $$$=_(dd),bigflg?toBig(''+$$$):$$$})}
 //trim { and }
 function _t(obj){return obj.replace(/{|}/g,'')}
 function _t2(obj){return obj.replace(/{{{|}}}/g,'').trim()}
 root._c=_c
 root._=_
 root._m=_m
 root._t=_t
 root._t2=_t2 
})(this);
//////////////////////////////////////////////
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
 $$k=void 0
 keycall((k,del)=>{
  if(k) del(),o.next();
 })
 return;
} 
cmds.SEL=(str,o)=>{
 //...
 let se=$$s.split('\n'),n=0//($$n!=-1)?$$n:0
 ,head=$$o//=se[n]
 keycall((k,del)=>{
  if(k==='B') $$n=-1,del(),o.next();
  if(k==='A') del(),o.next();
 })

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

