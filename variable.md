# variable
```
//usage
variableRead(text,this)
variable(text,this)  //target the this[...]
```

$value\n a,b,c,d,
```
//comment $ head is mark and $\{}={} 
$testa
a,b,c,d //$testa[0]=[a,b,c,d]

$xxxx  //aryary
sword,300,this is sword. //$xxxx[0]=['sword',300,'this is sword'] //number is num
shild,130,this is shild. //$xxxx[1]=['shild',130,'this is shild']

$zzzz={name,price,about} //aryobj
sword,300,this is sword. //$zzzz[0]={name:'sword',price:300,about:'this is sword'} //number is num
shild,130,this is shild. //$zzzz[1]={name:'shild',price:130,about:'this is shild'}

$kkkk={{name},price,about} //key choice firstparam only //objobj
sword,300,this is sword. //$kkkk['sword']={name:'sword',price:300,about:'this is sword'} //number is num
shild,130,this is shild. //$kkkk['shild']={name:'shild',price:130,about:'this is shild'}

$aaaa=xyz //$aaaa='xyz'
$singleary=0,1,2,3,4 //$singleary=[0,1,2,3,4]

$bbbb=  //$bbbb='aaa...bbb...' multi string
aaa
bbb
ccc
ddd
eee
fff
```
