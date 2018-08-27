# gbtohtml5
A dodgy autoloading version of the amazing [JavaScript GameBoy Color Emulator](https://github.com/taisel/GameBoy-Online)

### How to use:
----------------
Open game.js and set the following
Sound: toggles sound
RomBase64: base64 serialization of your game.gb rom
```js
game =
{
	"Sound": true,
	"RomBase64": "w2gA..."
}
```

### How to customize:
Open game.css to edit background color / image
Or restore shadows and rounded corners to the game window
```css
html 
{
	/* This sets the background color */
	background-color: rgb(255, 255, 255) !important;
	background-image: none !important;
}

.window, div, canvas
{
	/* This css disables shadows from the origonal style */
	-webkit-box-shadow: none !important;
	box-shadow: none !important;
	
	/* This css disables the rounded gameboy corners from the origonal style */
	-webkit-border-radius: 0px !important;
	border-radius: 0px !important;
}