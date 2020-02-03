# wire
https://codepen.io/gnjo/pen/XWJLgxd?editors=1010

```
wall="0" //face side
road="1" //ground
door="2" //face side
object="3" //ground
event="4" //ground
downstair="5" //ground
upstair="6" //ceiling

4L,4C,4R
3L,3C,3R
2L,2C,2R
1L,1C,1R
0L,0C,0R


$wire //globalobject
{'4L':{w,d,c},...}
$wire['4L'].w //wallable
$wire['4L'].d //doorable
$wire['4L'].c='0' //0-6 //char

wireMake(w,h,ox,oy)//
wire(`
000
012
010
010
010
`)
;//ex)draw($wire)

```
