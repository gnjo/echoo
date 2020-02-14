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

function spacebeauty(ary,max){
 let sp='　'
 ,a=ary.map(fn.toBig)
 ,str=Array(max+1).join(sp)
 ,l=a[0].length,c=a[1].length,r=a[2].length
 ,wk=max-l-c-r,tipflg=wk%2,space=Math.floor(wk/2)
 ;
 if(l+r+c+2>max)space=1,tipflg=false,a[1]=a[1].slice(0,max-(l+r+2));
 ;
 let rsp=str.slice(0,space),lsp=tipflg?str.slice(0,space+1):rsp
 return a[0]+rsp+a[1]+lsp+a[2]
}

 root.spacebeauty=spacebeauty
})(this);
