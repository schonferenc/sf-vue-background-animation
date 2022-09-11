# sf-vue-background-animation

The component is made for vue version 3. With the help of predefined animations, we can use almost anything as a background animation.


## Preview

<img src="./src/assets/sf-vue-background-animation.gif?raw=true" alt="sf-vue-background-animation.gif"  height="500" />

## Installing

    npm install sf-vue-background-animation


## Usage

> main.js
```pug
import { createApp } from 'vue'
import App from './App.vue'
import VueBackgroundAnimation from 'sf-vue-background-animation'

const app = createApp(App)

app.use(VueBackgroundAnimation)

app.mount('#app')
```

Then we simply place it in the scope where we want to use it.

### Example

>some-component.vue
```pug
<template lang="pug">

	.container
		sf-vue-background-animation(animation="float", :top="15", :left="50")
			img(src="@/assets/images/some-picture.svg")

</template>
```
```pug
<style  lang="scss" scoped>
	.container{
		position: relative;
	}
</style>
```
If the component is not parameterized, or if a non-existent animation is specified, the default values apply.
>Tip: give the parent component a relative position!
  
### Props

|***Name***	   |***Type***|***Description***																	|***Possible values***	|***Defaults***|
|--------------|----------|-------------------------------------------------------------------------------------|-----------------------|-------------:|
|**animation** |`String`  |predefined animations   		    													|float, pulse    	  	|`default`	   |
|**show**	   |`Boolean` |visibility of the component     														|any valid boolean value|`true`		   |
|**top**	   |`Number`  |the position of the component from the top, the value is calculated as a percentage 	|any valid number value	|`18`		   |
|**left**	   |`Number`  |the position of the component from the left, the value is calculated as a percentage	|any valid number value	|`58`	  	   |
|**rotate**	   |`Number`  |rotation		    																	|any valid number value	|`0`		   |
|**zIndex**	   |`Number`  |z-index		    																	|any valid css value    |`10`	  	   |
|**position**  |`String`  |position		    																	|any valid css value  	|`absolute`    |
|**transition**|`String`  |transition		    																|any valid css value  	|`all 7s ease` |

### Slots

***default*** slot


## License

  Released under [MIT](https://github.com/schonferenc/sf-vue-background-animation/blob/main/LICENSE) by [Schön Ferenc](https://github.com/schonferenc).
