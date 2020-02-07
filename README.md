# vit
## v1.1
```
script(src="https://gnjo.github.io/vit/variable.js?v=1.0")
script(src="https://gnjo.github.io/vit/vit.js?v=1.1")
```
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
$$b //v1.1 background image @
$$c //v1.2 center image @@
$$d //v1.3 soun"d" bgm &
$$e //v1.4 sound effect &&
///
$$r //v1.1 resource object ex)$$r['@castle']
$$x //v1.5 labyrinth pos x
$$y //v1.5 labyrinth pos y
$$z //v1.5 labyrinth pos z, floor number
$$v //v1.5 labyrinth vector N|E|W|S
//

#mark
!xyz //mode change
@castle //background
@@king //center image
&honorsong //bgm
&&rap //se
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

%{{{ //v1.1 resource load. early load //$$r['@citybackground']
@citybackground=
base64 png...

&sound=
base64 ogg...
&&effect1=
base64 ogg...
}}}

```
```
vitRead(text)
//vitRead([text1,text2]) //v1.1
function vit(mes,o){fn.q('pre').textContent=str}
```

# note
```
スクリプトの実行順を固定する。

#SETUP
{1}>>>#TITLE

#TITLE
{{{
START
LOAD
CONFIG
}}}
?>{$$$}
{$$n===0}>>>#CITY
{$$n===1}>>>#LOAD
{$$n===2}>>>#CONFIG
{$$n===-1}>>>#TITLE

{1}>>>#TITLE

#LOAD
...
{1}>>>###
#CONFIG
{1}>>>#TITLE
...

#CITY
{{{
}}}
?>{$$$}
{1}>>>#CITY

#B01...B99
```


