skate-template
==============

A component that loads templates using Ajax or a DOM element into the bound element.

Usage
-----

A template has two parts:

1. The template.
2. The elmement that renders the template.

### The Template

The template defines the markup in the template.

It can be a file accessible via Ajax (templates/my-tmp.html):

    <dialog title="Dialog Title">
      <p>Dialog content.</p>
    </dialog>

Or in an element:

    <script id="templates/my-tmp.html">
      <dialog title="Dialog Title">
        <p>Dialog content.</p>
      </dialog>
    </script>

### The Renderer

The renderer renders a defined template:

    <div data-template="templates/my-tmp.html"></div>

License
-------

The MIT License (MIT)

Copyright (c) 2014 Trey Shugart

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
