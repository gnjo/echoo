```
//dungeron script
//dungeron B00 - B99

%{{{
//resource load
$B01.bg=
data:base64...

$B01.side=
...

$B01.face=
...

$B01.ground=
...

$B01.ceiling=

$B01.s0=
...

$B01.s1=
...

$B01.s2=
...

$B01.s3=
...

$B01.s4=
...

$B01.map=

$B01.title=flower graden 01
$B01.desc=
...

}}}//%

#B01
{$nowfloor==="B01"}>>>#B01.loaded
//

//
#B01.loaded
//event jump


{1}>>>#walk
```

```
//クエスト一覧から侵入先の迷宮を変更する。
#Quest

{1}>>>#Quest

#Q00




{1}>>>#B01
```

