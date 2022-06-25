# HTML

HTML stands for Hypertext Markup Language. HTML is the standard technology to display content in web browsers. While programming languages are more flexible providing tools and methods to manipulate data in general by accessing the computer hardware like cpu, markup languages are exclusively used to format resp. present content.

Therefore HTML is the foundation for frontend developers. Due to the mentioned restrictions of markup languages it is usually combined with other tools like CSS (seperates formating style from content and provides extensive style rules) and Javascript (programming language).

## HTML Elements

Any instruction that shall be applied to an html page must be added to the HTML source code using HTML Elements. An HTML element is defined by it's _HTML Tag_ which is characterized by a tagname allways enclosed by angle brackets e.g. `<element>`. Each contentful HTML Element is composed of an opening tag `<element>`, a closing tag `</element>` and content in between. Regarding the _closing tag_ the additional slash `/` after the opening angle bracket has to be considered.

Some HTML elements do not need to be specified by content. For example `<br/>` displays a line break which is per se contentless. These elements are called _empty or void HTML elements_. These elements must not have an ending tag (otherwise they may be interpreted twice). A good practice and requirement for React (JSX syntax) is an additional `/` before the closing angle bracket.

Another important point about HTML elements is they can be nested meaning they can contain other HTML elements between their opening and closing tag.

```html
<!-- scheme -->
<element>Content</element>
<!-- example -->
<p>p is an html paragraph element</p>
<br />
<p>
  <span>these are nested </span>
  <span>inline texts</span>
</p>
```

The HTML element's name (resp. the tagname) must refer to a valid HTML5 element name. An element's name determines the way it is interpreted and presented in the browser. For instance: a `<p>Content</p>` element renders a text block (paragraph) wheras a `<br/>` element displays a line break.

HTML element names (tagnames) are not case-sensitive, however lower-case tags are a requirement for stricter document types like XHTML and additional tools like React (JSX).

### Classification of HTML Elements

HTML5 offers an extensive amount of HTML elements for various purposes. A comprehensive html element reference is available at [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). Below you will find a list of all html elements grouped according to their puropse.

- html document structure `<html>`, `<head>`, `<body>`
- metadata (children of `<head>`) `<base>`, `<link>`, `<meta>`, `<style>`, `<title>`
- layout elements `<aside>`, `<footer>`, `<header>`, `<h1>`...`<h6>`, `<main>`, `<nav>`, `<section>`, `<div>`, `<figure>`, `<details>`, `<dialog>`, `<menu>`, `<summary>`
- text block elements: `<address>`, `<article>`, `<meta>`, `<blockquote>`, `<figcaption>`, `<p>`, `<pre>`
- inline text elements: `<a>`, `<abbr>`, `<b>`, `<bdi>`, `<bdo>`, `<cite>`, `<code>`, `<data>`, `<dfn>`, `<em>`, `<i>`, `<kbd>`, `<mark>`, `<q>`, `<rp>`, `<rt>`, `<ruby>`, `<s>`, `<samp>`, `<small>`, `<span>`, `<strong>`, `<sub>`, `<sup>`, `<time>`, `<u>`, `<var>`, `<wbr>`, `<del>`, `<ins>`
- image and media: `<area>`, `<audio>`, `<img>`, `<map>`, `<video>`
- list elements: `<dd>`, `<dl>`, `<dt>`, `<li>`, `<ol>`, `<ul>`
- table elements: `<caption>`, `<col>`, `<colgroup>`, `<table>`, `<tbody>`, `<td>`, `<tfoot>`, `<th>`, `<thead>`, `<tr>`
- form elements: `<buttom>`, `<datalist>`, `<fieldset>`, `<form>`, `<input>`, `<label>`, `<legend>`, `<meter>`, `<optgroup>`, `<option>`, `<output>`, `<progress>`, `<select>`, `<textarea>`
- graphics: `<svg>`, `<canvas>`
- embedded content: `<embed>`, `<iframe>`, `<object>`, `<param>`, `<picture>`, `<portal>`, `<source>`
- other `<br>`, `<hr>`

## HTML Attributes

HTML elements (like `<img>`) can accept additional input data or parameters which are defined by attributes. Attributes are added inside the opening tag of an HTML element in the following way: `key="value"`. Attribute keys are not case-sensitive but lower-case is highly recommended.

Enclosing the attribute value in quotes is also a good practice and required if attribute value contains at least one space. Single and double quotes are both possible. If an attribute value itself contains quotes it can either be wrapped in the other type of quotes (if they do not occure) or HTML Character Entities can be used (`&quot;` for double quotes or `&apos;` for single quotes).

```html
<img
  src="https://some-url.com/some-img.jpg"
  alt="some-image's alternative text"
  title="some say: 'this image is nice'"
/>
```

In addition to element-specific attributes all HTML elements accept [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes). Even though that doesn't mean they are effective for every element.

Global attributes can be either

- global html attributes,
- aria-\* attributes (Accessible Rich Internet Applications, define additional information to make websites more accessible to people with disabilities),
- event handler attributes
- legacy xhtml specifications: `xml:lang` and `xml:base`

global html attributes:

- common attributes:
  - class: Specifies one or more classnames for an element (refers to a class in a style sheet)
  - contenteditable: Specifies whether the content of an element is editable or not
  - dir: Specifies the text direction for the content in an element
  - draggable: Specifies whether an element is draggable or not
  - hidden Specifies that an element is not yet, or is no longer, relevant
  - id Specifies a unique id for an element
  - lang Specifies the language of the element's content
  - style Specifies an inline CSS style for an element
  - tabindex Specifies the tabbing order of an element
  - title Specifies extra information about an element
  - translate Specifies whether the content of an element should be translated or not

<br/>

- less common attributes
  - accesskey
  - autocapitalize
  - autofocus
  - data-\*
  - enterkeyhint
  - exportparts
  - inputmode
  - itemid
  - itemprop
  - itemref
  - itemscope
  - itemtype
  - is
  - nonce
  - part
  - slot
  - spellcheck
    <!-- expandable -->

### id attribute

The id attribute of an HTML element is a unique identifier within the current HTML document. The value specified by an id attribute must at least contain one character and must not contain any whitespaces. Moreover it has to be considered that the id attribute is case-sensitive. The id attribute is important to select specific elements by using CSS selectors (id with hashtag-prefix e.g. `#someid`) or JavaScript (`document.getElementById("someid")`). The id attribute is also used to create bookmarks (link targets within current html doc, see [HTML Links](#html-links).

### Style attribute

An HTML element's style attribute defines it's styles resp. appearance. It accepts CSS property-value-pairs separated by semicolon.

```html
<!-- scheme -->
<element style="property:value;">
  <!-- example: div-block with grey background and red font -->
  <div style="background:grey; color:white;"></div
></element>
```

Inline styles (element-specific styles applied via the element's style attribute) are defined specifically for a certain HTML element. The styles can only be re-used by copy and paste from an existing html element (not true anymore when using component-based frameworks like react). CSS classes are more suitable for reusable styles and provide additional functionality like access to media querys, too. Especially for complex CSS layouts styling with reusable classes may also reduce the page's bundle-size.

### Class attribute

Using classes is another option to adjust an HTML elements appearance using CSS. The class attribute does not define the styles directly but refers to a classname. The classes and their styles have to be defined seperately either in the same html document `<html/>`-`<head/>`-`<style/>` or in an external .css-file linked via `<html/>`-`<head/>`-`<link/>`.

## HTML Comments

In programming or markup languages like HTML, comments are used to annotate source code without being processed by compiler or interpreter. In case of HTML this means comments are not displayed in the browser but they are publicly accessible in the source code. The HTML comment tag differs slightly from HTML element tags. The comment (source-code annotation) is wrapped inside of a single, special tag: The opening angle bracket is followed by an exclamation mark and two dashes and the closing angle bracket is preceeded by two dashes. An HTML comment can be placed anywhere in an HTML document. Also multi-line comments are valid.

```html
<!-- This is a comment -->
<p>
  <!-- inline comment -->
  comment is not shown
</p>
<!-- 
multi-line 
comment
-->
```

## HTML Document

HTML source code (HTML Elements and comments) is stored in html documents. Conventionally HTML documents contain a filename extension `.html` (or less commonly .htm) like "index.html". Most operating systems will open files with these extensions by default in a browser. The browser is responsible to display the source code of an HTML document. HTML documents are commonly provided by web servers (mostly using http(s) protocol) but other sources like local files are also possible. HTML documents don't need to be compiled or any sort of preprocessing. Consequently they can be created and edited in any text editor (like notepad on windows) and be displayed directly in the browser.

The structure of an HTML document is given by an announcing `<!DOCTYPE>` declaration followed by an `<html>` element containing a head section `(<head>...</head>)` and a body section (`<body>...</body>`).

```html
<!DOCTYPE html>
<!-- simple html document example -->
<html>
  <head>
    <title>Title of the document</title>
  </head>
  <body>
    Document Content
    <br />
    Additional Document Content
  </body>
</html>
```

The <!DOCTYPE> Declaration is not considered an HTML element but a type declaration instructing the browser how to render the page. Due to legacy support it's not allowed to close the declaration with a `/`. Also, in contrast to HTML elements it must not have an ending tag. Every HTML5 document must start with `<!DOCTYPE html>`. If it's not included the browser will render the document in a quirks mode (supporting legacy documents) which may not support all features of HTML5.

The `<html>` element is the root or container of an HTML document. Only one `<head>` and one `<body>` element is permitted as content. It can include global attributes as well as manifest, version, xmlns. The global "lang" attribute is recommended in order to faciliate document processing by browsers (e.g. screen-reader) or search engines.

The `<head>` element contains the document's metadata which is not intended to be displayed in the browser window. Metadata elements can be `<title>`, `<style>`, `<base>`, `<link>`, `<meta>`, `<script>` or `<noscript>`. Beside global attributes a "profile" attribute is accepted. A full reference for permitted content elements and attributes is accessible on the [MDN website](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)

The section described by the `<body>` element includes the content which shall be displayed inside the browser window. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body) provides a reference for permitted content and attributes.

## HTML Head Element

The html `<head>` element has to be placed between the opening tag of an `<html>` element and the opening tag of the `<body>` element. It is a special and document-unique HTML element containing metadata which is not meant to be displayed inside the browser window. Metadata is specified by a special group of HTML elements called _Metadata Elements_: `<base>`, `<link>`, `<meta>`, `<noscript>`, `<script>`, `<style>`, `<title>`.
The document `<title>` is a required element, the rest is optional.

### Title Element

The HTML Title element specifies the document's title which is displayed in the title bar or in the page's tab title. The document title does also represent the page's title in search-engine results and will be the default title when the page is added to favorites/bookmarks. HTML documents require a title definition. The content of a `<title>` element must be text-only, nesting is not permitted.

```html
<html>
  <head>
    <title>This is the current website's title</title>
  </head>
  <body>
    Look at the title bar resp. current tabs title.
  </body>
</html>
```

### Link Element

The link metadata element defines a relationship to an external resource, most oftenly used to link to external CSS stylesheets. But the `<link>` element is suitable to link to various other ressources like site icons (favicon).

most important attributes:

- href: URL of the external ressource
- rel: relation of the linked ressource to the current document.
  - Values are usually [link type values](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
  - Most common values for rel are `icon`, `manifest`, `preload` and `stylesheet`.
  - The `<link rel="icon">` defines the page's favicon.
  - Since Apple's iOS system does not use the `<link rel="icon">` as webpage icon for web clip or a start-up placeholder additional apple-specific `<link>` elements can be defined: `<link rel="apple-touch-icon" />` or `<link rel="apple-touch-startup-image" />`
- sizes: only necessary in case of non-standarad icons: e.g. `<link rel="apple-touch-icon" />`
  - value can be "any" (if icon is in a scalable vector format like `image/svg+xml`)
  - or more commonly `<width in pixels>x<height in pixels>` resp. `<width in pixels>X<height in pixels>`
- media: The media the linked source should apply to. Must be a valid media type or media query (like "print" or "screen and (max-width: 600px)")
- type: specifies a MIME type like "text/html", "text/css" etc. Should be ommitted for stylesheets, scripts (css and javascript are default ) and default icons.
- as: if `rel="preload"` or `rel="prefetch"` the as property specifies the content of the ressource.
  - valid values: audio, document, embed, fetch, font, image, object, script, style, track, video, worker

### Meta Element

The meta element is used to define metadata which can not be specified by the other HTML Metadata elements. The type of metadata is either

- document-level metadata: if `name` attribute is set.
- a pragma directive: if `http-equiv` is set, it's providing information equivalent to what can be given by a similarly-named HTTP header.
- a charset declaration: if `charset` is set.
- user-defined-metadata: if `itemprop` is set (itemprop is global html attribute).

Different metadata types shall not be mixed. Thus `<meta>` elements shall have either a name, a http-equiv, a charset or an itemprop attribute but not any combination.

Attributes:

- charset: defines document's charset encoding. The value defaults to "utf-8", which is the recommended charset for HTML documents.
- content: contains the value for `https-equiv` or `name`
- http-equiv: defines a pragma directive providing information equivalent to what can be given by a similarly-named HTTP header.
- name: name and content attributes can be used to provide document metadata nama-value-pairs. While the name attribute represents the name or key, the values have to be stored in the content attribute.

### Noscript Element

JavaScript is by default enabled in most browsers. But users (or a security policy) can disable JavaScript. The `<noscript>` Element in general can be used to display alternate content if JavaScript is disabled. Inside the header it can only contain `<link>`, `<style>` and `<meta>` elements. Alternatively `<noscript>` elements can be placed inside the `<body>`.

### Script Element

The script element is used to execute client-side JavaScript. It can be placed inside the `<head>` and also inside the `<body>`. When placed in `<head>`, scripts load before the document content is loaded (inside `<body>`). Scripts inside the body will be interpreted after the preceeding content in the body. Therefore it may improve display speed by placing script elements at the end of an document's body. A script element can either contain JavaScript code directly or refer to an external script file by using the src atrribute.

Important Attributes

- async: (boolean: value is true if attribute key is present), indicates if external scripts are executed asynchronously. Inline scripts are always interpreted immediately.
- defer: (boolean: value is true if attribute key is present) specifies if external script is executed when the page has finished parsing (inline scripts are always interpreted immediately).
- nomodule: (boolean: value is true if attribute key is present) disables script execution for browsers supporting ES2015 modules. In effect a `<script nomodule/>` element becomes a fallback-script for browsers not supporting modules.
- src: URI to execute external scripts.
- type: since JavaScript is the default scripting language it is not recommended any more to specify a MIME type with the type attribute. But setting type="module" will cause the script to loaded as ES2015 module.

### Style Element

The `<style>` element is only permitted inside the `<head>`. CSS definitions are permitted content. The `style` element is only accessible in the current html document. Therefore linking external stylesheets with `<link>` should often be preferred.

Important ttributes:

- media: The media the stylesheet should apply to. Must be a valid media type or media query (like "print" or "screen and (max-width: 600px)")

## Block Elements

HTML Elements inside `<body>` are meant to be displayed in the browser window. By default each HTML Element can either be displayed as Bock element or as Inline element. More flexibility is offered with CSS. The CSS display-property can manipulate an HTML element's display mode ("block", "inline") and offers additional layout options like "flex", "grid", "inline-block". However the block model is a crucial foundation to understand HTML an CSS layouts:

- Block Elements always start on a new line
- Block Elements always fill the full width available. (if width is not specified with CSS)
- Block Elements will only fill the height needed to display the content

### Layout Block Elements

The `<div>` element is a very commonly used Block element because it's a non-semantic generic container for content (content division element).

In combination with CSS, Block elements are often used for _layout_ purposes. In addition to the non-semantic `<div>` element various _semantic layout block elements_ are available: `<aside>`, `<details>`,`<dialog>`, `<figure>`,`<footer>`, `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`, `<header>`, `<main>`, `<menu>`, `<mark>`,`<nav>`,`<section>`, `<summary>`.

### Headings:

Headings are block elements with text and layout semantics. Users might skim website headings to find relevant content. They are also crucial for search-engines to process a website. Browsers, plugins or assistive technologies like screen-readers can use them to navigate within one page.

An HTML heading can represent 1 of 6 heading levels according to the element name:
`<h1/>`, `<h2/>`, `<h3>`, `<h4>`, `<h5>` or `<h6>`.
According to WCAG (Web content accessbility guidelines) headings should be structured in a strict hierarchical way. Heading levels should not be skipped (e.g. the next lower subheading of an `<h1>` must always be `<h2>`).

Browsers display headings by default with bold text and space (vertical margin) before and after the element, example: <h3>Heading Example</h3>

### Text Block Elements

Some Block Elements have text-related semantics like `<address>`, `<article>`, `<blockquote>`, `<figcaption>`, `<p>` and `<pre>`. Consequently the content of these elements should be text or at least other html elements containing text.

The `<article>` element can be used to represent a (large) coherent text section usually with common topic(s). The Paragraph `<p>` element typically represents smaller text sections which for instance could include one or multiple related points of a topic. Browsers usually add some space (vertical) before and after each `<p>` element (margin).

`<address>`, `<blockquote>`and `<figcaption>` element are suitable for special content (address, quotes, caption of figure).
Content of block elements is by default displayed on the same line and only wrapped if the line becomes wider than the available width. Line breaks in source code are not considered - only HTML Linebreak elements `<br>`.  
In order to display pre-formated text (like a poem) the `<pre>` element can be chosen.

## Inline Elements

Inline Elements are suitable to structure or style content within Block Elements:

- Inline Elements do not start on a new line
- Inline Elements fill only the space needed to display the content.

For example words in a paragraph can be underlined using Inline Elements.

Important Inline Elements are

- `<span>`: a non-semantic, generic inline element corresponding to `<div>-Block`.
- `<a>`: a Link is an important inline element with additional navigation functionality , see [HMTL Links](#html-links) for details.
- `<br/>`: a line break (`<wbr/>` is a line break opportunity). Line breaks should be avoided. Starting a new paragraph or adjusting margin/padding should be preferred if possible.
- `<data>`: in combination with it's value attribute it can be used to associate text content to a machine-readable translation or id.

Inline Elements can be grouped as shown:

- elements for specific text content (`<abbr>`, `<bdi>`, `<bdo>`, `<code>`, `<dfn>`, `<kbd>`, `<rp>`, `<rt>`, `<ruby>`, `<samp>`, `<time>`, `<var>`,`<cite>`, `<q>`)
- elements with a special function (`<a>`, `<br>`, `<data>`, `<wbr>`)
- elements to format or highlight content (`<b>`,`<em>`,`<i>`,`<mark>`, `<small>`, `<strong>`, `<sub>`, `<sup>`, `<u>`, `<del>`, `<ins>`).

### Specific Inline Text Elements

Specific Inline Text Elements are semantic elements used for a specific type or part of text content.

- `<abbr>` can be used to define an abbreviation, example: <abbr>HTML</abbr>
- `<bdi>` and `<bdo>` relevant when content with different directions (ltr, rtl) is combined
- `<code>` can be used to define computer code, example: <code>console.log("hello")</code>
- `<dfn>` can be used to specify a definition explained within surrounding element, example: <dfn>HTML</dfn> stands for ...
- `<kbd>` can be used to define a keyboard input (feedback), example: <kbd> Press C</kbd>
- `<rp>`, `<rt>` and `<ruby>` are relevant for ruby annotation (common for chinese or japanese texts)
- `<samp>` can be used to defined output of a computer programm, example: <samp> Hello World!</samp>
- `<time>` defines a (date-)time like `<time datetime="2022-01-01 00:00">Happy New Year</time>`. The datetime attribute can refer to a machine-readable date.
- `<var>` an option to define math or programming variables semanticly, example <var>x</var>=1
- `<cite>` may be used to define a title of a creative work, example: <cite>artwork title</cite>
- `<q>` suitable for short (inline) quotations, example: <q>someone said...</q>

### Text Formatting Elements

HTML5 provides some elements to format nested html elements or content. CSS should be preferred if the formatting intent is mainly about styling (like `<b>`, `<strong>`, `<em>`, `<i>` or `<small>`).
CSS styling rules are often more flexible, e.g. Whereas `<b>...</b>` is either bold or not, `<p style="font-weight:800;">...</p>` can define the level of boldness, too.

- `<b>` <b> Defines bold text </b>
- `<strong>` <strong> Defines important text</strong>
- `<em>` <em> Defines emphasized text</em>
- `<i>` <i> Defines a part of text in an alternate voice or mood</i>
- `<small>` <small> Defines smaller text</small>
- `<sub>` <sub> Defines subscripted text</sub>
- `<sup>` <sup> Defines superscripted text</sup>
- `<ins>` <ins> Defines inserted text (for document edits)</ins>
- `<del>` <del> Defines deleted text (for document edits)</del>
- `<mark>` <mark> Defines marked/highlighted text</mark>
- `<s>` <s>defines deleted (strike-through) text</s>

## HTML Links

HTML Links are very important Inline Elements with an additional navigation functionality. HTML Links represent a clickable element which when clicked navigates to the specified target. In other words an HTML Link creates a hyperlink to a target defined by `href` attribute. The target must be a valid URL, bookmark or script (but buttons are more adequate for scripts).

HTML Link content is often text but most non-interactive content elements like images are permitted, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a). Interactive elements like `<button>` are not permitted as content for `<a>` elements. These elements are required to navigate using JavaScript by taking advantage of the onclick event handler.

Instead of navigating to a new website it is also possible to navigate within the current website to any HTML element using bookmarks. In order to do so the target HTML element needs a document-unique id like `<div id="destination"/>`. The Link element's href attribute must then point to the destination element id with an #-prefix like this `<a href="#destination">Let's go</a>`.

Browsers usually apply several default CSS styles to HTML links like color, cursor and text-decoration (underline), example: <a href="#html-links">back to HTML Links</a>

```html
<!-- a simple link-->
<a href="https://www.google.com">Search on Google</a>
<!-- a link to a bookmark -->
<div id="C4">Chapter 4</div>
<a href="#C4">Jump to Chapter 4</a>
```

- attributes
  - href: specifies the navigation target (URL, bookmark or a script)
  - target attribute:
    - \_self: default and fallback, opens document in current window and tab.
    - \_blank: opens document in new window or tab
    - \_parent: opens document in parent frame
    - \_top: opens document in the full body of the window
  - title attribute:
    - additional textual information which will display as tooltip on most browsers running on desktop computers.

### URL

a uniform resource locator (url) is a digital, unique adress of any type of data stored on the internet, intranet or locally. A full or absolute URL follows the following scheme:

```
scheme: service://prefix.domain:port/path/filename
example: https://www.example.my-own-domain.com/images/some-image.png
```

- service: defines the service (protocol) to be used (mostly http or https, less commonly ftp or file)
- prefix defines a domain prefix (default for http(s) is www)
- domain - defines the Internet domain name (like google.com), can include subdomains (like news.google.com)
- port - defines the port number at the host (default port for http is 80, can be ommited in that case)
- path - defines a path at the server (If omitted: the root directory of the site)
- filename - defines the name of a document or resource (If omitted: the index.html file)

The scheme describes the structure of an absolute URL. But URLs can also be expressed

- relative to the current path or
- relative to the root path:

```html
example: current page https://www.example.my-own-domain.com/blog/article1.html target page:
https://www.example.my-own-domain.com/about/index.html relative to current path:
<a href="../about">About the author</a> relative to root path: <a href="/about">About the author</a>
```

## HTML Image Element

An image is displayed in the browser using the `<img>` element. Images are not inserted into a web page but embedded and linked to it. This way the HTML document will only refer to but not include images which is advantageous regarding reusability and filesize.

The `<img>` element is an empty html element - without content or closing tag. Instead the image's paremeters (like image path or URL) are specified with attributes. An `<img>` element is by default displayed as Inline Element. However it's default dimensions are defined by its embedded image size. Thus it actually behaves like an element with CSS attribute display set to "inline-block" (like an inline element but width and height can be specified).

Most important Attributes

- src (required): path or URL of the image file
- alt (recommended): text for screen-readers and fallback-text if image can not be fetched from specified path.
- width and height: specifies the image's intrinsic width/height. Must be integer value without units. Setting a CSS width/height property in the \<img>'s style attribute is an alternative.

```html
<img src="/sceme.svg" alt="Fullstack Scheme" width="400px" height="192px" />
```

Result:
<img src="/sceme.svg" alt="Fullstack Scheme" width="400px" height="192px" />

All mayor browsers support the following image formats:

- Animated Portable Network Graphics (APNG)
- Graphics Interchange Format (GIF)
- Joint Photographic Expert Group image (JPEG)
- Portable Network Graphics (PNG)
- Scalable Vector Graphics (SVG)

## HTML Lists

Three types of HTML Lists have to be distinguished:

- unordered list `<ul>` (bulleted list).
- ordered list `<ol>` (numbered list)
- description list `<dl>` (without enumeration char or symbol)

Permitted content for a ordered `<ol>` or unordered list `<ul>` are List Item elements `<li>`. A List Item element represents one point in a list. It accepts a specific value attribute which is effective only in ordered lists to manipulate the list number or enumeration char. The value attribute's value must be a number.

Nested lists are composed by inserting a new list element in the higher level list item:

```html
<ul>
  <li>Coffee</li>
  <li>
    Tea
    <ul>
      <li>Black tea</li>
      <li>Green tea</li>
    </ul>
  </li>
  <li>Milk</li>
</ul>
```

### unordered list

The unordered list elment `<ul>` will display list items as bulleted list. It has no specific attributes. The bullet point char can be changed via CSS style-property "list-style-type".

```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

result:

<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

### ordered list

The ordered list element `<ol>` is used to add a numbered list. The numbering behavior can be specified with the following attributes:

- reversed: boolean, indicates if list shall be displayed in reversed order.
- start: defines a start number or corresponding char for the list.
- type: sets the numbering type, resp. charset:
  - `a` or `A` for lowercase resp. uppercase letters
  - `i` or `I` for lowercase resp. uppercase roman letters
  - `1` for numbers, default

```html
<ol start="3" reversed>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

result:

<ol start="3" reversed>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

### description list

A description list `<dl>` is a numeration of terms and descriptions details. Permitted content of a description list are description term `<dt>` and description detail `<dd>` elements. The sequence of `<dt>` and `<dd>` can be chosen freely, e.g. multiple terms can have multiple descriptions.

Common use-cases for description lists are glossarys or displaying metdata.

```html
<dl>
  <dt>Coffee</dt>
  <dd>a warm drink</dd>
  <dd>with caffeine</dd>
  <dt>Tea</dt>
  <dd>a warm drink</dd>
</dl>
```

result:

<dl>
  <dt>Coffee</dt>
  <dd>a warm drink</dd>
  <dd>with caffeine</dd>
  <dt>Tea</dt>
  <dd>a warm drink</dd>
</dl>

## HTML Tables

Complex tabular data can be displayed in HTML Table elements. The `<table>` element itself is just a container which has to be filled with sub-element to arrange the data in rows and columns. It doesn't have any specific attributes. HTML tables require a strict hierachy of content resp. sub-elements as follows in the given order:

- an optional `<caption>` element,
- zero or more `<colgroup>` elements,
- an optional `<thead>` element,
- either one of the following:
  - zero or more `<tbody>` elements
  - one or more `<tr>` elements
- an optional `<tfoot>` element

```html
<table>
  <caption>
    An example table
  </caption>
  <thead>
    <tr>
      <th>Months</th>
      <th scope="col">Days</th>
      <th scope="col">Workouts</th>
      <th scope="col">Bike trips</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">January</th>
      <td>31</td>
      <td>12</td>
      <td>0</td>
    </tr>
    <tr>
      <th scope="row">February</th>
      <td>28</td>
      <td>9</td>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">March</th>
      <td>31</td>
      <td colspan="2" style="border:1px solid black">8</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Total</th>
      <td>90</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tfoot>
</table>
```

Result:

<table>
  <caption>An example table caption</caption>
  <thead>
    <tr>
      <th>Months</th>
      <th scope="col">Days</th>
      <th scope="col">Workouts</th>
      <th scope="col">Bike trips</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">January</th>
      <td>31</td>
      <td>12</td>
      <td>0</td>
    </tr>
    <tr>
      <th scope="row">February</th>
      <td>28</td>
      <td>9</td>
      <td>1</td>
    </tr>
      <tr>
      <th scope="row">March</th>
      <td>31</td>
      <td colspan="2" style="border:1px solid black">8</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Total</th>
      <td>90</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tfoot>
</table>

### Caption element

- specifies a caption or title to display, see [example table](#html-tables)

### Colgroup and Col elements

The `<colgroup>` element can be used to select and process columns with CSS or JS. The amount of columns to select is defined via the `<colgroup>`'s span attribute or _alternativly_ by `<col>` sub-elements. These `<col>` elements each represents a single or multiple columns. The span attribute of a `<col>` element defines the amount of columns which are selected.

### Thead Element

The table head element `<thead>` is a container for the table column headers. It has no specific attributes and can hold zero or more Table row elements`<tr>` elements.

```html
<table>
  <thead>
    <tr>
      <th>column 1</th>
      <th>column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>value 1</td>
      <td>value 2</td>
    </tr>
  </tbody>
</table>
```

<table>
    <thead>
        <tr>
            <th>column 1</th>
            <th>column 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>value 1</td>
            <td>value 2</td>
        </tr>
    </tbody>
</table>

### TBody Element

The rows and cols of the table can be grouped in a Table Body element `<tbody>`. According to the `<thead>` element it doesn't have specific attributes and can hold zero or more Table row elements`<tr>` elements.

### TFoot Element

The HTML Table Foot element `<tfoot>` is a container suitable to group one (ore more) summary row(s). It doesn't accept specific attributes and can hold zero or more Table row elements`<tr>` elements.

### Table Row Elements

The table's rows are defined by Table Row elements `<tr>` which may be located either directly in the `<table>` element (if `<tbody>` is not present) or inside the `<thead>`, `<tbody>`, `<tfoot>` sub-elements. Table Row elements can contain Table cells elements `<td>` or `<th>`. No specific attributes are accepted.

### Table Cell Elements

The table's data is stored in HTML Table Cell elements. There are two types of table cells:

- Data Cells `<tr>` and
- Header Cells `<th>`

While `<tr>` should be used to represent table data, `<th>` is meant to define a cell as header of a group of cells. Typically `<th>` elements are used inside the table head `<thead>` and/or at the beginning or ending of a row.

Common attributes for `<td>` And `<th>`:

- colspan: defines the amount of columns a cell is supposed to encompass.
- header: can be used to provide a space-separated list of `<th>` element id values.
- rowspan: defines the amount of rows a cell is supposed to encompass.
  specific attributes for `<th>`:
- abbr: short abbreviated description of cell content which is presented by some user agents like screen-readers.
- scope: specifies the group which shall be associated to the head cell. Allowed values: row, col, rowgroup (all rows followed), colgroup (all cols that follow).

## HTML Forms

In general forms in a browser context are document sections containing interactive input fields, controls and instructions how to fill resp. use them. The purposes of a form is to request data from the user. In order to collect and pass data to a processing script the HTML Form element `<form>` can be used. JavaScript is an alternative to collect user input data. `<form>` elements are special containers with additional attributes to specify the form submission. They can hold any type of content but not another `<form>` element.

Form Elements typically contain several special user input elements: `<input>`, `<label>`, `<select>`, `<textarea>`, `<button>`, `<fieldset>`, `<legend>`, `<datalist>`, `<output>`, `<option>`, `<optgroup>`

Below a simple example to request a username and email address

```html
<form action="" method="get">
  <div>
    <label for="username">Enter your username: </label>
    <input type="text" name="username" id="username" required />
  </div>
  <div>
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required />
  </div>
  <div>
    <input type="submit" value="Subscribe!" />
  </div>
</form>
```

<form action="" method="get">
  <div>
    <label for="username">Enter your username: </label>
    <input type="text" name="username" id="username" required>
  </div>
  <div>
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required>
  </div>
  <div>
    <input type="submit" value="Subscribe!">
  </div>
</form>

Attributes

- accept-charset: can be used to define a charset, if not present same encoding as current document.
- autocomplete: Browsers can save previously entered input data like username, email and also passwords if user allows it. The autocomplete attribute determines whether the browser should offer matching datasets to complete resp. as alternative to the current user input.
- name: can be used to specify a name for the form
- rel: Specifies the relationship between a linked resource and the current document
- action: specifies URL that processes form submission. `<button>`, `<imput type="submit">`, `<input type="image">` elements can override the form's action attribute with their `formaction` attribute.
- enctype: if method attribute value is `post`, enctype can specify a MIME type.
  - `application/x-www-form-urlencoded`, default
  - `multipart/form-data`, to be used if form contains `<input type="file">`
  - `text/plain`, debugging purposes.
- method: specifies http method so submit the form. `<button>`, `<imput type="submit">`, `<input type="image">` elements can override the form's action attribute bwith their `formmethod` attribute. Possible values:
  - post: [the http post method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5)
  - get: [the http get method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3)
  - dialog: if form is in dialog, dialog is closed on submission.
- novalidate: boolean, can be set to indicate that form should not be validated. `<button>`, `<imput type="submit">`, `<input type="image">` elements can override the form's action attribute bwith their `formnovalidate` attribute.
- target: specifies where to display the response after form is submitted: `<button>`, `<imput type="submit">`, `<input type="image">` elements can override the form's action attribute bwith their `formtarget` attribute.
  - `_self` (default): in same browsing context.
  - `_blank: `: in new browsing context
  - `_parent:`: in parent browsing context or if no parent in same context.
  - `_top:`: in top-level-browsing context or if no parent in same context.

### Input Element

HTML input elments are very flexible regarding the type of data which shall be requested. By setting the type attribute input elements can easily be transformed into different input elements. E.g. `<input type="text>` will display the default textfield while `<input type="button>` will display a button.

The type attribute can have the following values:
| Type | Description | Example |
|--------------- | ----------------- | ----------------- |
| button | a button, label is defined with value attribute | <input type="button" value="submit"/> |
| checkbox | a checkbox to toggle boolean values | `<input type="checkbox"/> |
| color | an input to select colors | <input type="color"/> |
| date | a control to select a date without time | <input type="date"/> |
| datetime-local | a control to select a datetime without timezone | <input type="datetime-local"/> |
| email | an input to enter and validate email addresses | <input type="email"/> |
| file | an input control to select single or multiple files on the current device | <input type="file"/> |
| hidden | an input element which is not displayed but its value is sent | <input type="hidden"/> |
| image | a graphical submit button | <input type="image" src="/react-logo.png" alt="no image src defined" width="24px" height="24px"/> |
| month | a control to select month and year without timezone | <input type="month"/> |
| number | similiar to the default textfield but only accepting numbers. Decimals are accepted, too. | <input type="number"/> |
| password | textfield showing obscured chars instead of entered text. user will be alerted if site is not safe. | <input type="password"/> |
| radio | radio buttons restrict users to select one item of a given list of options. Radio Buttons with the same name attribute are grouped and will uncheck if another member of the group is selected | <input type="radio" name="demo"/><input type="radio" name="demo"/> |
| range | a slide bar control to select a value within a given range, easy for user to change values but harder to select specific values. | <input type="range"/> |
| reset | a control to reset values of all form elements to default values, not recommended by MDN| <form><input type="text"/><input type="reset"/></form> |
| search | a special textfield which automatically removes line breaks and some subtle rendering differences on supporting devices | <input type="search"/> |
| submit | a btton to submit the form | <input type="submit"/> |
| tel | a control to enter telephone numbers and some subtle rendering differences on supporting devices| <input type="tel"/> |
| text | default textfield | <input type="text"/> |
| time | an input control to select a time without timezone | <input type="time"/> |
| url | a special textfield to enter urls with additional validation and some subtle rendering differences on supporting devices | <input type="search"/> |
| week | an input control to enter a calendar week number and a year without timezone. (probably not ISO-week?) | <input type="week"/> |

An Input element should have a document-unique id. It accepts the listed attributes depending on the type attribute.

| Attribute      | Type or Types                    | Description                                                                           |
| -------------- | -------------------------------- | ------------------------------------------------------------------------------------- |
| accept         | file                             | Hint for expected file type in file upload controls                                   |
| alt            | image                            | alt attribute for the image type. Required for accessibility                          |
| autocomplete   | all                              | Hint for browsers form autofill feature                                               |
| autofocus      | all                              | Automatically focus the form control when the page is loaded                          |
| capture        | file                             | Media capture input method in file upload controls                                    |
| checked        | radio, checkbox                  | Whether the command or control is checked                                             |
| dirname        | text, search                     | Name of form field to use for sending the element's directionality in form submission |
| disabled       | all                              | Whether the form control is disabled                                                  |
| form           | all                              | Associates the control with a form element                                            |
| formaction     | image, submit                    | URL to use for form submission                                                        |
| formenctype    | image, submit                    | Form data set encoding type to use for form submission                                |
| formmethod     | image, submit                    | HTTP method to use for form submission                                                |
| formnovalidate | image, submit                    | Bypass form control validation for form submission                                    |
| formtarget     | image, submit                    | Browsing context for form submission                                                  |
| height         | image                            | Same as height attribute for `<img>` vertical dimension                               |
| list           | almost all                       | Value of the id attribute of the `<datalist>` of autocomplete options                 |
| max            | numeric types                    | Maximum value                                                                         |
| maxlength      | password, search, tel, text, url | Maximum length (number of characters) of value                                        |
| min            | numeric types                    | Minimum value                                                                         |
| minlength      | password, search, tel, text, url | Minimum length (number of characters) of value                                        |
| multiple       | email, file                      | Boolean. Whether to allow multiple values                                             |
| name           | all                              | Name of the form control. Submitted with the form as part of a name/value pair.       |
| pattern        | password, text, tel              | Pattern the value must match to be valid                                              |
| placeholder    | password, search, tel, text, url | Text that appears in the form control when it has no value set                        |
| readonly       | almost all                       | Boolean. The value is not editable                                                    |
| required       | almost all                       | Boolean. A value is required or must be check for the form to be submittable          |
| size           | email, password, tel, text       | Size of the control                                                                   |
| src            | image                            | Same as src attribute for `<img>`, address of image resource                          |
| step           | numeric types                    | Incremental values that are valid.                                                    |
| type           | all                              | Type of form control (see table above)                                                |
| value          | all                              | The initial value of the control.                                                     |
| width          | image                            | Same as width attribute for `<img>`                                                   |

<!-- expandable -->
<!-- label Attributes: -->

### Label Element

Label elements are semantic elements supposed to describe form elements. Therefore they have to be linked with the corresponding element's id using the `for` attribute.

Attributes:

- for: if present, defines the element the label should be linked to by id. e.g.

```html
<form>
  <label for="age">Demo Label</label>
  <input id="age" type="number" />
</form>
```

<form>
<label for="age">Demo Label</label>
<input id="age" type="number"/>
</form>

### Select / Dropdown menu

The `<select>` element (also called dropdown menu) enables users to select a single or multiple items of a list of options. It will be displayed as menu of options/items in the browser. Permitted content is an arbitrary amount of `<option>` or `<optgroup>` elements.

```html
<select name="pets" id="pet-select">
  <option value="">--Please choose an option--</option>
  <optgroup label="Popular">
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
  </optgroup>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
</select>
```

<select name="pets" id="pet-select">
    <option value="">--Please choose an option--</option>
    <optgroup label="Popular">
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    </optgroup>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
</select>

Attributes:

- autocomplete: Hint for form autofill feature
- disabled: boolean, if present or true will disable user interactions
- form: can be used to associate the `<select/>` element to a `<form/>` element. If not present it is associated to the ancestor `<form>` element if any
- multiple: if present or true user is allowed to select multiple items
- name: specifys a name for the select element
- required: if present or true a non-empty string value must be chosen
- size: if multiple is true the element renders as scrollable list. The size attribute defines the numbers of rows this list will display.

The `<optgroup>` element is optional to group options. `<optgroup>` elements may not be nested consequently grouping is limited to 1 level. Only `<select>` elements are allowed as content. The label attribute is required.

Each input option of a Select is represented by an `<option>` element. Permitted content of an `<option>` element must be text-only content displaying the option's label.

The submitted value of `<select>` element is by default the text content. The value to submit can be specified for each `<option>` with it's value attribute. An `<option>` can be suggested resp. pre-selected with the selected attribute.

### Button element

Buttons are click- resp. touchable controls that trigger some sort of functionality. They are commonly placed in `<form>` elements but can also occure independently as action buttons.

A Button Element can contain phrasing content but there must other interactive content is not permitted, [see MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).

```html
<button type="button">Do something</button>
```

<button type="button">Do something</button>

Attributes:

- disabled: if present or true user interactions are disabled
- form, formaction, formenctype, formmethod, formnovalid, formtarget: see [Input Element](#input-element)
- name: name of the button, if button is clicked and used to submit a form, the buttons' name and value are included in submitted form data.
- type
  - submit: submits a form if present
  - reset: resets all elements of form that contains the button
  - button: no default behavior.
- value: value of the button which if button provokes a form submission is included togehter with buttons name in the submitted form data.

### Textarea element

Textarea elements are editable multiline plan-text input controls. They are suitable for use-cases involving a free-form-text like reviews or feedbacks.

```html
<textarea> Enter long text </textarea>
```

<textarea> Enter long text </textarea>

Attributes:

- autocomplete: Hint for form autofill feature
- cols: defiines texarea's width by average char widths.
- disabled: if present or true, user interactions are disabled
- form: see `<input>`
- maxlength: maximum number of chars the user is allowed to enter
- minlength: minimum number of chars the user is required to enter
- name: name of element
- placeholder: placeholder text shown if input is empty
- readinly: if present or true, disables user interactions but clicking and selecting is still permitted
- required: indicated whether element is required to submit a form
- rows: number of visible text-lines for the control
- spellcheck: if present specifies whether element is subject of browser or os-specific spellchecking. If not present browser- or os-specific default behavior is applied.
- wrap: specifies how to wrap text:
  - hard: browser will automatically add line breaks if text is longer than cols attribute
  - soft: does not insert new line breaks but ensures all line breaks are represented by CR+LF
  - off: Text is not wrapped. instead the element becomes horizontally scrollable

### Fieldset Element

The `<fieldset>` element is a container to group inputs/controls typically in a `<form>`. Browsers display `<fieldset>` elements usually with a border. The Fieldset Legend (`<legend>`) element can be implemente to show a group label.

```html
<form>
  <fieldset>
    <legend>Choose your favorite color</legend>
    <input type="radio" id="red" name="red" />
    <label for="red">Red</label><br />
    <input type="radio" id="blue" name="blue" />
    <label for="blue">Blue</label><br />
    <input type="radio" id="green" name="green" />
    <label for="green">Green</label>
  </fieldset>
</form>
```

<form>
  <fieldset>
    <legend>Choose your favorite color</legend>
    <input type="radio" id="red" name="red">
    <label for="red">Red</label><br/>
    <input type="radio" id="blue" name="blue">
    <label for="blue">Blue</label><br/>
    <input type="radio" id="green" name="green">
    <label for="green">Green</label>
  </fieldset>
</form>


### Datalist

### Output

## HTML Graphics

### SVG

### Canvas

## HTML Multimedia

### HTML Audio

### HTML Video

### HTML Map ?

## HTML Web Components ? and Other

## Common HTML Body Elements

HTML offers an extensive amount of elements which can be either semantic or non-semantic. A semantic element's name defines it's content (e.g. `<header/>`, ` <section/>`, `<article>`) wheras a non-semantic element's name is not related to it's content (e.g. `<div/>`, `<span/>`). Semantic elements may offer a clearer document structure but come with additional effort when it comes to chose or swap elements. Additionally when combining HTML with other tools like CSS or React the semantic information becomes less important. In case of react's source code the actual html element will only appear inside the consuming component.

In the author's opinion semantic elements offer little additional information about the HTML elemente and can be passed on especially when using additional tools like react. Therefore this article is focussing on common non-semantic elements.

## JavaScript

## HTML Entities

## HTML Graphics old

HTML 5 offers two graphics elements to render drawings and graphics.

- HTML Graphics Canvas element
- HTML Graphics SVG element

### SVG element

A HTML <svg> element is a container for Scalable Vector Graphics - which is a vector image format based on XML-syntax for twodimensional images. In contrast to HTML canvas element which is a raster-based graphics container they can be scaled easily. SVG can render static images without any usage of Javascript. In combination with CSS or JavaScript animated content is possible. Another contrary point to canvas elements is that graphical subelement defined within a `<svg>` element become present in DOM.

Attributes:

- height: height of svg container, not height of it's coordinate system
- preserveAspectRatio: defines how svg fragment is deformed if it is displayed with different aspect ratio
- viewBox: SVG viewport coordinates of current SVG fragment.
- width: width of svg container, not width of it's coordinate system
- x: displayed x coordinate of svg container (no effect for outermost svg element)
- y: displayed y coordinate of svg container (no effect for outermost svg element)

Permitted Content

- Animation elements
- Descriptive elements
- Shape elements
- Structural elements
- Gradient elements
- <a>, <altGlyphDef>, <clipPath>, <color-profile>, <cursor>, <filter>, <font>, <font-face>, <foreignObject>, <image>, <marker>, <mask>, <pattern>, <script>, <style>, <switch>, <text>, <view>

## HTML Media (audio, video)

### File Path format

HTML accepts absolute as well as relative paths. Relative paths starting with a slash refer to the root folder of the current website while relative paths without starting slash refer to the folder of the current document. By starting a relative path with double-dot and a slash the parent folder of the current document's folder is adressed.

```html
<img src="picture.jpg" /> The "picture.jpg" file is located in the same folder as the current page
<img src="images/picture.jpg" /> The "picture.jpg" file is located in the images folder in the current folder
<img src="/images/picture.jpg" /> The "picture.jpg" file is located in the images folder at the root of the current web
<img src="../picture.jpg" /> The "picture.jpg" file is located in the folder one level up from the current folder
```

### HTML Colors

HTML and CSS support color values in rgb, hex, hsl, rgba and hsla format. Alternatively color can be defined using one of 140 standard color names.
E.g. to apply a red background color to a div element the following via inline style is done as follows:

```html
<div style="background-color:red;">red div using color name</div>
<div style="background-color:rgb(255, 0, 0);">red div using rgb values</div>
<div style="background-color:rgba(255, 0, 0, 1);">red div using rgba values</div>
<div style="background-color:hsl(0, 100%, 50%);">red div using hsl values</div>
<div style="background-color:hsl(0, 100%, 50%, 1);">red div using hsla values</div>
```
