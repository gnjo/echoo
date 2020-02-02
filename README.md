# echoo

//keycall jump select output wait modechange
//message five, choice 1+4
```
$$m //mode
$$k //key
$$n //select number
$$s //select list
$$$ //return
$$o //output
$$a //address
$$l //nowread line

#mark
m>xyz //mode change
k> //keywait
>{$$n} //output select number
> //clear
>choice is are?
{{{
aaa
bbb
ccc
ddd
}}}
s>{$$$}
**** //one astrisk wait 50ms
{1}>>>#aaaa
```

```
echoo(text,(mes,o)=>{ })
```
