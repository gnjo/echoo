//v1.2 aryobj objobj
;(function(root){
 let num=/^([-+]?(?:\d*[\.]\d+|\d+))$/,headzero=/^0[0-9]/ //bugfix
 ,isstring=function(value){return toString.call(value) === '[object String]'}
 function __n(obj){
  //numable
  if(!isstring(obj))return obj;
  ///^0[0-9]/.test('001') //string like a color code
  if(headzero.test(obj))return obj; //string ex.color code
  if(num.test(obj))return parseFloat(obj);//right number
  return obj;//string
 }
 ;
 let c=/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm
 function __c(d){
  //comment trim
  return d.replace(c,'')
 } 
 ;
 function __t(d){
  return isstring(d)?d.trim():d
 }
 function typecheck(line){
  let re_keyhead=/^\$/
  ,re_single=/^\$.*=.+/
  ,re_comma=/,/
  ,re_multi=/^\$.*=$/
  ,re_readchunk=/^\%{{{|^}}}/
  ,re_image=/^\@/
  ,re_sound=/^\&/
  ,re_aryobj=/^\$.*={.+}/
  ,re_objobj=/^\$.*={\*.+}/
  ;
  if(re_readchunk.test(line))return 'chunk'
  //
  if(re_objobj.test(line))return 'objobj' //v1.2  
  if(re_aryobj.test(line))return 'aryobj' //v1.2
  //
  if(re_multi.test(line))return 'multi'
  if(re_single.test(line)&&re_comma.test(line))return 'singleary'
  if(re_single.test(line))return 'single'
  if(re_keyhead.test(line))return 'ary'
  if(re_image.test(line))return 'multi'//'image'
  if(re_sound.test(line))return 'multi'//'sound'
  return 'value'
 }
 
 function makeobj(kary,vary){
  let o={}
  kary.map((key,i)=>o[key]=vary[i])
  return o;
 }
 
 function entry(str,o){ 
  if(!str)return console.log('param 0 is null')
  let obj=o||this
  //type
  //multi,singleary,single,ary
  let key,type,keytype,a=__c(str).split('\n').map(__t).filter(d=>d)
  ,objkeys //v1.2 aryobj objobj
  for(let line of a){
   let flg=0
   type=typecheck(line)
   ;//console.log(type,line)
   if(type==='chunk')continue; //readchunk
   if(type==='value'&&keytype==='multi') obj[key]+=line+'\n',flg=1
   if(type==='value'&&keytype==='ary') obj[key].push(line.split(',').map(__n)),flg=1
   if(type==='value'&&keytype==='aryobj'){ //v1.2
    let vary=line.split(',').map(__n)
    if(objkeys.length===vary.length)
     obj[key].push( makeobj(objkeys,vary) ),flg=1
   }
   if(type==='value'&&keytype==='objobj'){ //v1.2
    let vary=line.split(',').map(__n)
    if(objkeys.length===vary.length)    
    obj[key][vary[0] ]=makeobj(objkeys,vary ),flg=1
   }
   if(flg)continue
   ;
   if(keytype==='multi')obj[key]=__t(obj[key])  //if old keytype multi is tailcut \n
   ;
   keytype=type;
   if(keytype==='multi') key=line.replace('=',''),/*obj[key]=[]*/obj[key]='',flg=1 //??
   if(keytype==='ary') key=line,obj[key]=[],flg=1
   if(flg)continue
   ;
   let b=line.split('=')
   key=b[0],line=b[1]
   if(keytype==='single') obj[key]=__n(line)
   if(keytype==='singleary') obj[key]=line.split(',').map(__n)
   if(keytype==='aryobj') obj[key]=[],objkeys=line.replace(/{|}|\*/g,'').split(',')
   if(keytype==='objobj') obj[key]={},objkeys=line.replace(/{|}|\*/g,'').split(',')
   
  }
  //special end linebreak 
  obj[key]=__t(obj[key]) //v1.2
  //
 }
 root.variable=entry;
})(this);

;(function(root){
 //vit apply
 let variable=root.variable
 function entry(str,o){
  let re=/%{{{([\s\S]*?)}}}/g
  if(!re.test(str))return;
  str.match(re).map(d=>variable(d,o))
 }
 root.variableRead=entry;
})(this);


