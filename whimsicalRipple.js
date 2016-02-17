(function() {
  'use strict';

  angular.module('whimsicalRipple', [])
    .config(function() {
      var styleEl = document.createElement('style'),
        styleSheet,
        rippleCSS,
        rippleLightCSS,
        rippleKeyframes,
        rippleWebkitKeyframes;

      rippleCSS = [
        '-webkit-animation: ripple 800ms ease-out;',
        'animation: ripple 800ms ease-out;',
        'background-color: rgba(0, 0, 0, 0.16);',
        'border-radius: 100%;',
        'height: 10px;',
        'pointer-events: none;',
        'position: absolute;',
        'transform: scale(0);',
        'width: 10px;'
      ];

      rippleLightCSS = 'background-color: rgba(255, 255, 255, 0.32);';

      rippleKeyframes = [
        '@keyframes ripple {',
          'to {',
            'transform: scale(2);',
            'opacity: 0;',
          '}',
        '}'
      ];

      rippleWebkitKeyframes = [
        '@-webkit-keyframes ripple {',
          'to {',
            '-webkit-transform: scale(2);',
            'opacity: 0;',
          '}',
        '}'
      ];

      document.head.appendChild(styleEl);
      styleSheet = styleEl.sheet;
      styleSheet.insertRule('.ripple-effect {' + rippleCSS.join('') + '}', 0);
      styleSheet.insertRule('.ripple-light .ripple-effect {' + rippleLightCSS  + '}', 0);

      if (CSSRule.WEBKIT_KEYFRAMES_RULE) { // WebKit
        styleSheet.insertRule(rippleWebkitKeyframes.join(''), 0);
      }
      else if (CSSRule.KEYFRAMES_RULE) { // W3C
        styleSheet.insertRule(rippleKeyframes.join(''), 0);
      }
    })
    .directive('ripple', function() {
      return {
        restrict: 'C',
        link: function(scope, element, attrs) {
          element[0].style.position = 'relative';
          element[0].style.overflow = 'hidden';
          element[0].style.userSelect = 'none';

          element[0].style.msUserSelect = 'none';
          element[0].style.mozUserSelect = 'none';
          element[0].style.webkitUserSelect = 'none';


          function createRipple(evt) {
            var ripple = angular.element('<span class="ripple-effect animate">'),
              rect = element[0].getBoundingClientRect(),
              radius = Math.max(rect.height, rect.width),
              left = evt.pageX - rect.left - radius / 2 - document.body.scrollLeft,
              top = evt.pageY - rect.top - radius / 2 - document.body.scrollTop;

            ripple[0].style.width = ripple[0].style.height = radius + 'px';
            ripple[0].style.left = left + 'px';
            ripple[0].style.top = top + 'px';
            ripple.on('animationend webkitAnimationEnd', function() {
              angular.element(this).remove();
            });

            element.append(ripple);
          }

          element.on('click', createRipple);
        }
      };
    });
})();
