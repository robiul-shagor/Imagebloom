# Image Bloom - Quick Image Loading 
Image Bloom is a pure JavaScript library for Quick Image Loading. It's include with preloader effect and blur effect to reduce your page load time; 

### Demo
https://robiul-shagor.github.io/Imagebloom

### How

1. Link files to your site or application (add `<script>` to bottom of page)

  ```html
  <link rel="stylesheet" href="css/imagebloom.css">
  <script src="js/imagebloom.js"></script>
  ```

2. Set markup 

  ```html
  <figure class="image-bloom">
  	<div class="image-thumb">	
  		<img src="small-image-path" data-thumb-url="original-image-path" data-full-width="950" data-full-height="633" alt="">
  	</div><!-- /.image-thumb -->
  </figure>
  ```

3. Add `src` small-image-path for small size image thumbnail 

4. Set `data-thumb-url="path"` original-image-path  

5. Set original image size (width, height) that you used in `data-thumb-url="path"` to `data-full-width` and `data-full-height`. For example:

  ```html
  <img src="small-image-path" data-thumb-url="original-image-path" data-width="1920" data-height="1080" alt="">
  ```
6. Finally declare the plugin settings after `<script src="js/imagebloom.js"></script>` .

	```html
	<script>
		new imageBloom();
	</script>
	```
7. By default it's give you blur effect. If you want to change it on preloader effect Just do this.

	```html
	<script>
		new imageBloom({
		    blurEffect: false,
		    imageSrc: 'img/rolling.svg'
		});
	</script>
	```
	add `blurEffect` false and set your image preloader and set `imageSrc: 'YOUR PATH'`. Or you can add any type of image format. We use `svg`. You can use `gif` or any formated Image. Depended on your needs.

### Why this?

It's the best way to load an image. No dependencies. Pure JavaScript. Progressive Image Loading with a blur and preloader effect. Reduce the page loading time. Better user experience. Wow.


### Is Cross Browser Compatibility ?

Image Bloom should (in theory) work in all relevant browsers (ie9+). If not, create an issue! Thanks!


### Who Write this?

Written by <a href="http://robiul-shagor.github.io/">Robiul Shagor</a>, made better by you.
