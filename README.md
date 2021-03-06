# React SVG Drawing

![React SVG Drawing](https://i.imgur.com/GjX4VsT.gif)

React SVG Drawing helps you to easily create a SVG drawing animation in your ReactJS app. All you need to do is put your svg inside DrawSVG tag.

First Step:
```bash
npm install react-svg-drawing --save
```

Second Step:
```bash
import DrawSVG from 'react-svg-drawing'
```

Third Step:
```bash
 <DrawSVG>
  Your SVG code here
</DrawSVG>
```


##Example
```bash
  import DrawSVG from 'react-svg-drawing';

  <DrawSVG strokeWidth="0.5" loop={true}>
   <svg viewBox="0 0 60 60">
   <path d="M22.404,21.173c2.126,0,3.895-1.724,3.895-3.85V3.849C26.299,1.724,24.53,0,22.404,0c-2.126,0-3.895,1.724-3.895,3.849
			v13.475C18.51,19.449,20.278,21.173,22.404,21.173z"/>
		<path d="M30.727,3.33c-0.481-0.2-1.03-0.147-1.466,0.142c-0.434,0.289-0.695,0.776-0.695,1.298v5.113
			c0,0.56,0.301,1.076,0.784,1.354c4.192,2.407,6.918,6.884,6.918,11.999c0,7.654-6.217,13.882-13.87,13.882
			c-7.654,0-13.86-6.228-13.86-13.882c0-5.113,2.813-9.589,6.931-11.997c0.478-0.279,0.773-0.794,0.773-1.348V4.769
			c0-0.521-0.261-1.009-0.695-1.298c-0.435-0.29-0.984-0.342-1.466-0.142C6.257,6.593,0.845,14.276,0.845,23.236
			c0,11.92,9.653,21.58,21.572,21.58c11.917,0,21.555-9.66,21.555-21.58C43.971,14.276,38.554,6.593,30.727,3.33z"/>
   </svg>
</DrawSVG>
```

### Props

| Name | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| easing | string | easeInOutElastic | Animation Timing function easeInOutElastic, easeInQuad, easeInQuart, easeInSine, easeInExpo, easeInCirc, easeInBack, easeInElastic, easeOutQuad, easeOutCubic, easeOutQuart, easeOutQuint, easeOutSine, easeOutExpo, easeOutCirc, easeOutBack, easeOutElastic, easeInOutQuad, easeInOutCubic, easeInOutQuart, easeInOutQuint, easeInOutSine, easeInOutExpo, easeInOutCirc, easeInCubic, easeInQuart, easeInQuint,
| duration | number | 2000 | Duration for the animation to work.
| delay | number, function | function(el, i) { return i * 250 } | Set the time to delay the svg animation.
| loop | bool | false | Set true for continuous animation
| targets | string | 'svg path' | Set target of the animation. It can be anything like class, tag or id.
| width | number, string | 200 | Set the width of your svg.
| fill | string | 'none' | Set the color of your SVG. Note: Setting this will stop your animation to work.
| stroke | string | '#000' | Set the stroke color of your svg.
| strokeWidth | string, number | 1 | Set the stroke width of your svg.
| SVGClass | string | 'react-svg-drawing' | Set the class for the SVG


