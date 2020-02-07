
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
  if(re_multi.test(line))return 'multi'
  if(re_single.test(line)&&re_comma.test(line))return 'singleary'
  if(re_single.test(line))return 'single'
  if(re_keyhead.test(line))return 'ary'
  return 'value'
 }
 function entry(str,o){
  if(!str)return console.log('param 0 is null')
  let obj=o||this
  //type
  //multi,singleary,single,ary
  let key,type,keytype,a=__c(str).split('\n').map(__t).filter(d=>d)
  for(let line of a){
   let flg=0
   type=typecheck(line)
   ;//console.log(type,line)
   if(type==='value'&&keytype==='multi') obj[key]+=line+'\n',flg=1
   if(type==='value'&&keytype==='ary') obj[key].push(line.split(',').map(__n)),flg=1
   if(flg)continue
   ;
   if(keytype==='multi')obj[key]=__t(obj[key])  //if old keytype multi is tailcut \n
   ;
   keytype=type;
   if(keytype==='multi') key=line.replace('=',''),obj[key]=[],flg=1
   if(keytype==='ary') key=line,obj[key]=[],flg=1
   if(flg)continue
   ;
   let b=line.split('=')
   key=b[0],line=b[1]
   if(keytype==='single') obj[key]=__n(line)
   if(keytype==='singleary') obj[key]=line.split(',').map(__n)   
  }
  //special end linebreak
  obj[key]=__t(obj[key])
  //
 }
 root.variable=entry;
})(this);
