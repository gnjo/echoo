# vit
```
全てが一枚のスクリプトにまとまるように、ただし、音源は除く。
ワイアーフレーム専用のスクリプトエンジン。
ogg2base64
png2base64

%addr //リソース。先読みされる、変数は基本固定される。
#addr //インタプリタ。変数は常にかわる可能性がある。
```
```
//リソースの登録
%resource
@catsle= //城背景
data:base64/png;....

@@treagurebox= //宝箱
```

## v1.0
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
```
```
vitRead(text)
function vit(mes,o){fn.q('pre').textContent=str}
```



