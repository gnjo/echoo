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
>{$$k} //output select number
k>
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
function vit(mes,o){fn.q('pre').textContent=str}
```



