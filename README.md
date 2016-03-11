**angular-whimsical-ripple** is a Angular directive to create a ripple effect.

Preview
---
[http://pioug.github.io/angular-whimsical-ripple](http://pioug.github.io/angular-whimsical-ripple)


Usage
---

1. Install package via `bower`:
  ```sh
    bower install --save angular-whimsical-ripple
  ```

2. Embed the script in your HTML file:
  ```html
    <script src="whimsicalRipple.js"></script>
  ```

3. Load `whimsicalRipple` as a module dependency of your Angular application:
  ```js
    angular.module('demoRipple', ['whimsicalRipple']);
  ```

4. Use the HTML class `ripple` (and `ripple-light`) to create a ripple effect on a clickable element:
  ```html
    <a class="ripple">Link #1</a>
    <a class="ripple ripple-light">Link #2</a>
  ```

Browser compatibility
---

- Chrome
- Firefox
- Safari 8
- Internet Explorer 11
