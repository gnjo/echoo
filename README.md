# vit
## v0.8
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
$$a //v0.9 nowaddress
$$l //v0.9 nowread line
$$j //v0.9 jumpback line
$$$ //return
///
$$f //v1.0 footstep address jump history
$$b //v1.1 background image
$$c //v1.2 center image
///

#mark
!xyz //mode change
k> //keywait
>{$$k} //pressed key
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
>select is {$$n} {$$$}
k>
**** //one astrisk wait 50ms
{1}>>>#aaaa
```
```
vitRead(text)
function vit(mes,o){fn.q('pre').textContent=str}
```



