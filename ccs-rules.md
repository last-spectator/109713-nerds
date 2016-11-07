# Правила оформления CSS
## Порядок свойств
```css
.declaration-order {
  /* Позиционирование */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* Блочная модель */
  display: block;
  float: right;
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;

  /* Типографика */
  font: normal 13px/1.5 "Arial", sans-serif;
  font-style: normal;
  font-size: 13px;
  line-height: 1.5;
  font-family: "Arial", sans-serif;
  text-align: center;

  /* Оформление */
  color: #333333;
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  opacity: 1;

  /* Анимация */
  transition: color 1s;

  /* Разное */
  will-change: auto;
}
```
## Синтаксис
1. Состояния элементов не отбиваем пробелами

```scss
.selector {
  padding: 15px;
  &:hover {
    padding: 10px;
  }
}
```
2. Последовательность написания состояния элементов

```scss
.selector {
  padding: 15px;
  &:hover {
    padding: 10px;
  }
  &:active {
    padding: 10px;
  }
  &:focus {
    padding: 10px;
  }
  &:visited {
    padding: 10px;
  }
}
```
3. Правила написания свойств с множественными значениями

```scss
.selector {
  border: 1px solid #ffffff;
  border-top: 1px solid #ffffff;
  border-right: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
  border-left: 1px solid #ffffff;
}

.selector {
  padding: 0 auto;
  padding: 5px 10px;
  /* Если значения разные или схожие по одной оси, но разные по другой */
  padding-top: 5px;
  padding-right: 3px;
  padding-bottom: 5px;
  padding-left: 6px;
}

.selector {
  background: #ffffff url("img/image.jpg") no-repeat 10px 10px fixed;
  /* Использовать короткую запись с 3-х значений, иначе использовать запись для отдельного значения. */
  background-color: #ffffff;
  background-image: url("img/image.jpg");
  background-repeat: repeat;
  background-position: top center;
  background-attachment: scroll;
}
```
4. Комментарии должны нести смысловую нагрузку

```scss
.selector {
  /* Временный хак (допустимо) */
  padding-top: 5px;
}

  /* Плохо!!! */
.selector {
  border-right: 2px solid red;
  //border: 1px solid #FFF;
  border: 3px dotted #ccc;
}
```

5. Правила написания значения цвета

```scss
/* Хорошо */
.selector {
  background-color: #ffffff;
  color: #ff0000;
  border: 1px solid #c1c1c1;
}

/* Плохо!!! */
.selector {
  background-color: #FFF;
  color: red;
  border: 1px solid #c1C1E1;
}
```
