### Modifiers

{responsive, rounded, circle, thumbnail}

### Examples

```
<div>
  <h4>Cropping (with landscape images)</h4>
  <cdr-row cols="1" cols-md="3">
    <cdr-col>
      <div>
        <p>Left</p>
        <cdr-img ratio="square" crop="left" alt="crop left" src="http://placehold.it/1920x1080"></cdr-img>
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <p>Center</p>
        <cdr-img ratio="square" crop="x-center" alt="crop x-center" src="http://placehold.it/1920x1080"></cdr-img>
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <p>Right</p>
        <cdr-img ratio="square" crop="right" alt="crop right" src="http://placehold.it/1920x1080"></cdr-img>
      </div>
    </cdr-col>
  </cdr-row>

  <h4>Cropping (with portrait images)</h4>
  <cdr-row cols="1" cols-md="3">
    <cdr-col>
      <div>
        <p>Top</p>
        <cdr-img ratio="square" crop="top" alt="crop top" src="http://placehold.it/1080x1920"></cdr-img>
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <p>Center</p>
        <cdr-img ratio="square" crop="y-center" alt="crop y-center" src="http://placehold.it/1080x1920"></cdr-img>
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <p>Bottom</p>
        <cdr-img ratio="square" crop="bottom" alt="crop bottom" src="http://placehold.it/1080x1920"></cdr-img>
      </div>
    </cdr-col>
  </cdr-row>

  <h4>Cropping (combinations)</h4>
  <cdr-row justify="center">
    <cdr-col span="9">
      <div>
        <p>Reference Image</p>
        <cdr-img alt="reference image" src="http://lorempixel.com/960/540/sports/9"></cdr-img>
      </div>
    </cdr-col>
  </cdr-row>
  <cdr-row cols="1" cols-md="3">
    <cdr-col>
      <div>
        <p>top left</p>
        <cdr-img ratio="16-9" crop="top left" alt="crop top left" src="http://lorempixel.com/960/540/sports/9"></cdr-img>
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <p>top x-center</p>
        <cdr-img ratio="16-9" crop="top x-center" alt="crop top x-center" src="http://lorempixel.com/960/540/sports/9"></cdr-img>
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <p>top right</p>
        <cdr-img ratio="16-9" crop="top right" alt="crop top right" src="http://lorempixel.com/960/540/sports/9"></cdr-img>
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <p>y-center left</p>
        <cdr-img ratio="16-9" crop="y-center left" alt="crop y-center left" src="http://lorempixel.com/960/540/sports/9"></cdr-img>
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <p>y-center x-center</p>
        <cdr-img ratio="16-9" crop="y-center x-center" alt="crop y-center x-center" src="http://lorempixel.com/960/540/sports/9"></cdr-img>
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <p>y-center right</p>
        <cdr-img ratio="16-9" crop="y-center right" alt="crop y-center right" src="http://lorempixel.com/960/540/sports/9"></cdr-img>
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <p>bottom left</p>
        <cdr-img ratio="16-9" crop="bottom left" alt="crop bottom left" src="http://lorempixel.com/960/540/sports/9"></cdr-img>
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <p>bottom x-center</p>
        <cdr-img ratio="16-9" crop="bottom x-center" alt="crop bottom x-center" src="http://lorempixel.com/960/540/sports/9"></cdr-img>
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <p>bottom right</p>
        <cdr-img ratio="16-9" crop="bottom right" alt="crop bottom right" src="http://lorempixel.com/960/540/sports/9"></cdr-img>
      </div>
    </cdr-col>
  </cdr-row>

  <h4>Ratios</h4>
  <cdr-row cols="2" cols-md="4">
    <cdr-col>
      <div>
        <p>Square</p>
        <cdr-img ratio="square" alt="ratio square" src="http://placehold.it/300x100"></cdr-img>
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <p>1-2</p>
        <cdr-img ratio="1-2" alt="ratio 1-2" src="http://placehold.it/300x100"></cdr-img>
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <p>2-3</p>
        <cdr-img ratio="2-3" alt="ratio 2-3" src="http://placehold.it/300x100"></cdr-img>
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <p>3-4</p>
        <cdr-img ratio="3-4" alt="ratio 3-4" src="http://placehold.it/300x100"></cdr-img>
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <p>9-16</p>
        <cdr-img ratio="9-16" alt="ratio 9-16" src="http://placehold.it/300x100"></cdr-img>
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <p>2-1</p>
        <cdr-img ratio="2-1" alt="ratio 2-1" src="http://placehold.it/300x100"></cdr-img>
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <p>3-2</p>
        <cdr-img ratio="3-2" alt="ratio 3-2" src="http://placehold.it/300x100"></cdr-img>
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <p>4-3</p>
        <cdr-img ratio="4-3" alt="ratio 4-3" src="http://placehold.it/300x100"></cdr-img>
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <p>16-9</p>
        <cdr-img ratio="16-9" alt="ratio 16-9" src="http://placehold.it/300x100"></cdr-img>
      </div>
    </cdr-col>
  </cdr-row>

  <h4>Image modifiers</h4>
  <cdr-row cols="2" cols-md="4">
    <cdr-col>
      <div>
        <p>Responsive</p>
        <cdr-img ratio="4-3" modifier="responsive" alt="ratio responsive" src="http://placehold.it/200x200"></cdr-img>
        <cdr-img modifier="responsive" alt="standard responsive" src="http://placehold.it/200x200"></cdr-img>
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <p>Rounded</p>
        <cdr-img ratio="4-3" modifier="rounded" alt="ratio rounded" src="http://placehold.it/200x200"></cdr-img>
        <cdr-img modifier="rounded" alt="landscape rounded" src="http://placehold.it/350x150"></cdr-img>
        <cdr-img modifier="rounded" alt="square rounded" src="http://placehold.it/200x200"></cdr-img>
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <p>circle</p>
        <cdr-img ratio="4-3" modifier="circle" alt="ratio circle" src="http://placehold.it/200x200"></cdr-img>
        <cdr-img modifier="circle" alt="landscape circle" src="http://placehold.it/350x150"></cdr-img>
        <cdr-img modifier="circle" alt="square circle" src="http://placehold.it/200x200"></cdr-img>
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        <p>thumbnail</p>
        <cdr-img ratio="4-3" modifier="thumbnail" alt="ratio thumbnail" src="http://placehold.it/200x200"></cdr-img>
        <cdr-img modifier="thumbnail" alt="landscape thumbnail" src="http://placehold.it/350x150"></cdr-img>
        <cdr-img modifier="thumbnail" alt="square thumbnail" src="http://placehold.it/200x200"></cdr-img>
      </div>
    </cdr-col>
  </cdr-row>

  <h4>Standard image:</h4>
  <cdr-img ratio="16-9" alt="ratio standard" src="http://placehold.it/200x200"></cdr-img>
  <cdr-img alt="standard landscape" src="http://placehold.it/350x150"></cdr-img>
  <cdr-img alt="standard portrait" src="http://placehold.it/150x350"></cdr-img>

</div>
```
