Simple-Range 
===

## Кроссбраузерная реализация элемента HTML5 Range

###Достоинства:

* вес ~ 1300 байт
* не требует jQuery
* простой и функциональный
* потдержка модулей CommonJS AMD
* css по BEViS

###Установка:

#####npm
```bash
npm i simple-range --save
```
####bower
```bash
bower install simple-range --save
```

###Использование:

```html
<link rel="stylesheet" href="default.css"/>

<div id="Range"></div>
```
```js
// horizontal
Range(document.getElementById('Range'), {
        value: 20,
        step: 5
    });
```
```js
// vertical    
Range(document.getElementById('Range'), {
        value: 20,
        vertical: true,
        step: 5
    });
```
```js
// custom steps
Range(document.getElementById('Range'), {
        value: 20,
        step: [0,20,50,100]
    });    
```