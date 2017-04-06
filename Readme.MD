Event based slug generator. No need any framework or library. Written in VanillaJS

## Usage

```html
<input type="text" id="first">
<textarea id="second"></textarea>
```

**Basic Usage**

Import Slugit library and use like this

**Params:**
  event: focusout, click, keyup, keydown, keypress
  timeout: default (0)
  el: Typed input field
  target: When you finished typing, formatted output assign to this element

```js
var slug = new Slugit()

slug.doSlug({
    event: 'focusout',
    timeout: 800,
    el: '#first',
    target: '#second',
})
```
