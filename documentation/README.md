<h1>ZephyrJS | Documentation</h1>
  <p>Zephyr is designed to extend the functionality of <span id="compatibility" class="nightly">PixiJS</span>, rather than wrapping it so that you can always use Pixi without Zephyr.</p>
  <p>The <span class="return">Return</span> line below the function indicates the object type that is returned.</p>
  <p>The <span class="nightly">Nightly</span> features can only be found in the current nightly version of Zephyr. Consider trying it out, and letting us know of any bugs you find!</p>
  <p>The <span class="deprecated">Deprecated</span> features are set to be removed in the next stable release.</p>
  <h2>PIXI.Zephyr</h2>
  <dl>
    <dt>PIXI.Zephyr.useKeys()</dt>
    <dd>Sets up the key tracking system for use</dd>
    <dt>PIXI.Zephyr.useMouse()</dt>
    <dd>Sets up the mouse tracking system for use</dd>
    <dt>PIXI.Zephyr.useAudio()</dt>
    <dd>Sets up the WebAudio API for Pixi-style usage</dd>
    <dt>PIXI.Zephyr.useFile()</dt>
    <dd>Sets up the File reading/writing system</dd>
  </dl>
  <h2>PIXI.Keys</h2>
  <p>keyName is a string that is returned by keyboardEvent.code. Check out the <a href="https://zephyrjs.netlify.app/keyname">Key Namer</a> to get specific key names.</p>
  <dl>
    <dt>PIXI.Keys.down(keyName)</dt>
    <dd>Returns true if the key is actively pressed down.</dd>
    <dd class="return">Boolean</dd>
    <dt>PIXI.Keys.fired(keyName)</dt>
    <dd>Returns true if this is the first time the key value has been accessed since the key has been pressed.</dd>
    <dd class="return">Boolean</dd>
  </dl>
  <h2 id="PIXI.Mouse">PIXI.Mouse</h2>
  <p>For button-related functions, the button names are 'Primary', 'Middle', and 'Secondary'</p>
  <dl>
    <dt>PIXI.Mouse.setContainer(domElement)</dt>
    <dd>What the mouse’s coordinates should be scaled according to (Generally, this should be your Pixi app.view).</dd>
    <dd class="warning"><strong>NOTE</strong>: Please ensure that this element has already been appended to the DOM. As of version 23.1, calling this method with an unappended element will fail with a console error about using an "invalid element".</dd>
    <dt>PIXI.Mouse.down([mouse button])</dt>
    <dd>Returns true if the button is actively pressed down.</dd>
    <dd class="return">Boolean</dd>
    <dt>PIXI.Mouse.fired(mouseEvent.button)</dt>
    <dd>Returns true if this is the first time the button value has been accessed since the button has been pressed.</dd>
    <dd class="return">Boolean</dd>
    <dt>PIXI.Mouse.x</dt>
    <dd>The last seen mouse X coordinate, scaled to the mouseContainer horizontally from left to right.</dd>
    <dd class="return">Number</dd>
    <dt>PIXI.Mouse.y</dt>
    <dd>The last seen mouse Y coordinate, scaled to the mouseContainer vertically from top to bottom.</dd>
    <dd class="return">Number</dd>
  </dl>
  <h2>PIXI.Audio</h2>
  <dl>
    <dt>PIXI.Audio.from(src)</dt>
    <dd>Returns a "Pixi Audio" object. These can have .play() called on them to play their sound.</dd>
    <dd class="return">Pixi Audio object</dd>
  </dl>
  <h2>PIXI.File</h2>
  <dl>
    <dt>PIXI.File.write(object, fileName)</dt>
    <dd>Converts the passed object into JSON and prompting the user to download the resulting fileName.json</dd>
    <dt>PIXI.File.open()</dt>
    <dd>Prompts the user to select a file, which it then attempts to parse as JSON and return</dd>
    <dd class="return">Object</dd>
  </dl>
  <h2>PIXI.collision</h2>
  <dl>
    <dt>PIXI.collision.aabb(Sprite, Sprite)</dt>
    <dd>Checks if the two provided Sprites are colliding with the aabb algorithm - NOTE: Both a and b are formatted as javascript objects with x, y, width, and height, and optionally anchor positions.</dd>
    <dd class="return">Boolean</dd>
    <dt>PIXI.collision.radius(Sprite, Sprite)</dt>
    <dd>Checks if the two provided Sprites are colliding with the standard point-radius method of circle collision - NOTE: Both a and b are formatted as javascript objects with x, y, and r, and optionally anchor positions.</dd>
    <dd class="return">Boolean</dd>
  </dl>
  <h2>PIXI.utils</h2>
  <dl>
    <dt>PIXI.utils.requestFullScreen(domElement)</dt>
    <dd>The element passed in (typically use the Application view) will attempt to go fullscreen</dd>
  </dl>
  <h2>Added Functions</h2>
  <dl>
    <dt>PIXI.clamp(x, min, max)</dt>
    <dd>Returns the value of x if it is between the bounds of min and max, or the closest bound if x is outside</dd>
    <dd class="return">Number</dd>
    <dt>PIXI.mix(a, b, m)</dt>
    <dd>Linearly interpolate between values a and b</dd>
    <dd class="return">Number</dd>
    <dt>PIXI.rand(min, max)</dt>
    <dd>Generates a random integer between min and max, inclusive</dd>
    <dd class="return">Number</dd>
  </dl>