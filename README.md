jQuery element placer 1.0
=========================

A nifty little helper that enables you to place elements into a viewport in a way that they will always appear within the desired viewport. This is extremely useful in combination with various pop-up overlays and tooltips which can have a variable width and height.

Copyright (c) 2010 Martin Tajur (martin@tajur.ee)
Licensed under the GPL license and MIT:

* http://www.opensource.org/licenses/GPL-license.php
* http://www.opensource.org/licenses/mit-license.php
 
Usage examples
--------------

    $('.element').place({ top: 400, left: 400 });
    $('.element').place({ top: 400, left: 400, area: 'document' });
 
Parameters
----------

* `top`: desired top offset of the placeable element in pixels (default 20)
* `left`: desired left offset of the placeable element in pixels (default 20)
* `margin`: desired margin from the viewport edges in pixels (default 0)
* `area`: desired viewport area in which the element should be visible in (either 'window' or 'document', default 'window')

