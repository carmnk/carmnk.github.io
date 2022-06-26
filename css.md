# CSS

Pure HTML5 does only structure but not format or style content. CSS is the standard language for HTML page stylings and therefore required to customize the browser's presentation of content on screen, on paper, in speech, or on other media.

The abbreviation CSS stands for Cascading Style Sheets often referring to the corresponding language/syntax. CSS is supported by all mayor browsers and enabled by default. It is absolutely essential to design non-trivial html document layouts. CSS is therefore an indispensable styling language *complementary* to HTML.

CSS seperates format styling from content which is advantagous regarding reusability. In addition a hierarchical system of cascades and inheritance is used to select and pass propertys from an HTML Element to it's Children (contained HTML Elements).

## CSS Syntax 

CSS declarations are embedded or linked to an HTML document. CSS can be declared directly in an HTML element's style attribute or in stylesheets. 

A CSS stylesheet represents a list of CSS rules. CSS rules assign declarations (property-value pairs) to certain HTML elements using selectors. 

### CSS Rules

A CSS rule consists of a selector and a declaration block: 

```css
/* scheme */
selector {
  property: value;
  property2: value2;
}
/* example for a rule*/
h1 {
  color: blue;
  background: "white";
}
```

HTML Elements that shall be styled are filtered using selectors. Various selectors can be chosen. The most important ones are:

- element selector `p for all <p> HTML elements`
- class selector `.headers for all HTML elements with class="headers"`
- id selector `#topic2 for the unique HTML elements with id="topic2"`

CSS declarations are property-value pairs seperated by semicolons. Both property-name and -value must be valid. 
Declarations in a CSS rule are enclosed by curly Brackets `{}`. 

### Implementation in HTML

CSS styles are meant to customize HTML elements in an HTML Document.   
An HTML Document offers three options to implement CSS styles: 

- External Stylesheet 
- Internal Stylesheet 
- Inline-Styles 

External stylesheets offer the best reusability. An external stylesheet is an additional text file with an `.css` filename extension containing css rules. It is not part of the page's `.html` page but it is linked to. 

```html 
<!-- mystyles.css -->
body {
  background-color: silver;
}

h1 {
  color: orange;
}
<!-- an html document like index.html -->
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="mystyles.css">
</head>
...
``` 


Internal Stylesheets are embedded in the current HTML document and are consequently only accessible within. 

```html 
<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: silver;
}

h1 {
  color: orange;
}
</style>
</head>
...
``` 

Inline-Styles are defined by one HTML Element's `style` attribute. In this case content and styles are not separated anymore. But the style attribute is adequate for element-specific styles which are not intended to be reused. Also interactive, animated or changing styles (in conjunction with JavaScript) can be modified easily with Inline-Styles. 

Inline-styles are directly related to a single HTML element. The style attribute accepts therefore only CSS declarations (property-value pairs without curly brackets).

```html
<p style="color:red;background:silver;">This is a paragraph.</p>
```
<p style="color:red;background:silver;">This is a paragraph.</p>

### Selectors
A selector refers to single or multiple HTML Elements whose styles shall be specified. Selectors can be grouped as shown below: 
- Simple Selectors 
- Combinator Selectors 
- Pseudo-class selectors 
- Pseudo-element selectors 
- Attribute selectors

Selectors can be composed to more specific selectors using combinators, pseudo-classes, pseusdo-elements or attribute selectors 
```css 
  p > span  /* selects all <span> that are inside of a <p>*/
  p:active  /* selects all <p> that are activated (clicked on)
```

#### Simple Selectors 

| Selector | Description | Example |
| --- | --- | --- |
| ID Selector |  selects an HTML element based on it's document-unique id attribute | `#header` selects<br/> `<${element} id="header">` |
| Class Selector | selects all html elements based on their class attribute | `.my-class {...}` <br/>selects all `<${element} class="my-class">`|
| Element Selector | selects all html elements based on their name, | `p {...}`<br/> selects all `<p>` elements |
| Universal Selector | selects all html elements in an html document | `* {...}`<br/> selects all elements on the page |

#### Combinator Selectors 

Combinators are special selectors used to compose a more specific selector using two base selectors. A combinator links the two base selectors with a certain relationship and the composed selector filters for elements complying with this relationship. 
```css
  p > span  /* selects all span elements with an <p> parent. */
```

| Selector | Description | Example |
| --- | --- | --- |
| grouping selector (selector list) |  joins multiple selectors (without relationship) in order to specify common styles | `p, span, .class1` selects `<p>` and `<span>` elements and elements with class="class1"   |
| Descendant Selector | joins two selectors: selects all elements that match the second selector and are descendants (also deep) of an element that matches the first selector.  | `p span {...}`<br/> selects all `<span>` elements that are inside of a `<p>` element |
| Child Selector | like the Descendant Selector but must descend directly (parent-child-relation) | `p > span {...}`<br/> selects all `<span>` elements that are a direct children of a `<p>` element |
| adjacent sibling selector |  joins two selectors: the second must additionally be the next adjacent sibling of the first selector | `p + span` selectes `<span>` elements that directly follow after an `<p>` element  |
| general sibling selector |  joins two selectors: the second selector must additionally be a following sibling of the first selector | `p ~ span` selectes `<span>` elements that follow after an `<p>` element  |

#### Pseudo-class Selectors 

A pseudo-class selector can be used to specify a base selector in greater detail e.g. `p:hover` selects `<p>` elements that are currently hovered by the user's mouse pointer. Pseudo-classes without base selector are applied on all element (universal selector). 

```css
  /* scheme */
  base: pseudo-class {...}
  /* example */
  p:hover {...}
```

Pseudo-classes are implicitely defined according to: 
- user actions impacting the base element (`:hover`, `:active`, `:focus`, ... )
- the document's location (`:link`, `:visited`, ...)
- The document's tree structure and the base element's position within (`:root`, `:first-child`, `:last-child`, ...) 
- form specific state and settings (`:enabled`, `:checked`, `:valid`, ...)
- the base element's linguistic (language and direction, `:lang`, `:dir`)
- the state of the base element's embedded content (video, audio, webvtt)

| Selector | Description | Example |
| ---  | --- | --- |
| :active | selects elements that are currently activated (clicked on), often combined with links | `a:active` <br/>selects an activated `<a>` element. |
| :checked | selects `<imput>` elements that are currently checked <br/>only for `<input type="checkbox">`, `<input type="radio">` and `<option>` | `option:checked` selects all checked `<options>` of an `<select>` |
| :disabled | selects `<input>` elements that are disabled (html attribute) <br/>only for form elements with disable attribute | `input:disabled` selects all disabled `<input>` elements. |
| :empty | selects elements without content or children | `p:empty` selects all empty `<p/>` elements. |
| :enabled | selects `<input>` elements that are not disabled | `button:enabled` selects all enabled `<button>` elements. |
| :first-child | selects base elements that are first child of it's parent | `p:first-child` selects all `<p>` elements that are the first child of it's parent. |
| :first-of-type | selects base elements that are first child of it's parent and type | `p:first-of-type` selects all `<p>` elements that are the first `<p>`-element child of it's parent. |
| :focus | selects base `<input>` element that is currently in focus | `input[type=text]:focus` selects an `<input type="text">` elements if it's in focus. |
| :hover | selects base elements that is currently hovered by the user's mouse pointer | `p:hover` selects an `<p>` elements if it's in hovered. |
| :in-range | selects base `<input>` elements whose value is within a range specified by max and min attributes | `input[type=number]:in-range` selects `<input type="number">` elements if value is in range. |
| :invalid | selects base `<input>` elements whose value acc. to specified or implicit restrictions is invalid(`:in-range`, implicit rules that apply to `<input type="email"> or <input type="url">`) | `input:invalid` selects `<input>` elements if value is in invalid. |
| :lang(lng) | selects all elements whose lang attribute begins with lng | `p:lang(de)` selects `<p>` elements if lang attribute is "de" |
| :last-child | selects base elements that are last child of it's parent | `p:last-child` selects all `<p>` elements that are the last child of it's parent. |
| :last-of-type | selects base elements that are last child of it's parent and type | `p:last-of-type` selects all `<p>` elements that are the last `<p>`-element child of it's parent. |
| :link | selects links whose target has not been visited yet | `a:link` selects all unvisited link elements |
| :not(subselector) | selects elements that do not match the subselector | `p:not(.class1)` selects all `<p>` elements whose class is not "class1"|
| :nth-child(n) | selects elements that are the nth child of it's parent | `p:nth-child(2)` selects all `<p>` elements that are 2nd child of it's parent |
| :nth-last-child(n) | selects elements that are the nth-last-child of it's parent | `p:nth-last-child(2)` selects all `<p>` elements that are 2nd last child of it's parent |
| :nth-last-of-type(n) | selects elements that are the nth-last-child of type and parent. | `p:nth-last-of-type(2)` selects all `<p>` elements that are 2nd last `<p>`-child of it's parent |
| :nth-of-type(n) | selects elements that are the nth-child of type and parent. | `p:nth-of-type(2)` selects all `<p>` elements that are 2nd `<p>`-child of it's parent |
| :only-of-type | selects elements that are the only-child of type and parent. | `p:only-of-type` selects all `<p>` elements that the only child of type `<p>` of it's parent |
| :only-child | selects elements that are the only-child of it's parent. | `p:only-child` selects all `<p>` elements that the only child of it's parent |
| :optional | selects base form elements whose attribute `required` is false (or not present) <br/>applicable only for `<input>`, `<select>` and `<textarea>` | `input:optional` selects all optional (not required) `<input>` elements  |
| :out-of-range | selects base `<input>` elements that are not `:in-range` | `input:out-of-range` selects all `<input>` elements whose values are out-of-range |
| :read-only | selects base form elements whose readonly attribute is set/present | `input:read-only` selects all readonly `<input>` elements |
| :read-write | selects base form elements whose readonly attribute is set | `input:read-write` selects all `<input>` elements that are not readonly |
| :required | selects base form elements whose attribute required is set <br/>applicable only for `<input>`, `<select>` and `<textarea>` | `input:required` selects all required `<input>` elements  |
| :root | selects the document's root element | `:root` selects the `<html>` element of a document |
| :target | selects an element with id (=bookmark, hash-link) if the hash-link or anchor is the current browsers location | `:target` selects the element whose id corresponds to the current hash-/anchor-link  |
| :valid | selects base `<input>` elements whose value acc. to specified or implicit restrictions is valid (`:in-range`, implicit rules that apply to `<input type="email"> or <input type="url">`) | `input:invalid` selects `<input>` elements if value is in invalid. |
| :visited | selects links whose target has already been visited yet | `a:visited` selects all visited link elements |

<!-- expandable -->
<!-- label Types of Pseudo-Class-Selectors: -->

#### Pseudo-element Selectors

Pseudo-element Selectors are used to filter for a specific part of a single or multiple base elements. 

The `::after` and `::before` pseudo elements are special since they can insert a contenttful and styled pseudo-element after or before the content of the base-selectors elements. 

```css

base::pseudo-element { ...}

```
| Selector | Description | Example |
| ---  | --- | --- |
| ::after | inserts a pseudo-element (content attribute is valid) after the content of the base selector | `p::after` <br/>inserts an `::after` pseudo-element after the content of each `<p>` |
| ::before | inserts a pseudo-element (content attribute is valid) before the content of the base selector | `p::before` <br/>inserts an `::before` pseudo-element before the content of each `<p>` |
| ::first-letter | selects the first letter of the base selector's element(s) | `p::first-letter` <br/>selects the first letter of all `<p>` elements |
| ::first-line | selects the first line of the base selector's element(s) | `p::first-line` <br/> selects the first line of all `<p>` elements |
| ::marker | selects the marker of List Items `<li>` | `::marker` <br/> selects the markers of all (`<li>`) elements |
| ::selection | filters the content of the base selector's element(s) that is selected by a user | `::slection` <br/> selects content that is selected by the user  |

#### Attribute Selectors 

HTML Elements can be selected in CSS using the elements' attributes. Attribute selectors filter the base selector's elements according to their HTML attributes. 
```css
  a[href="/"] {
    color: red; /* selects all <a> elements with href attribute set*/
  }
```

Either the presence or the value of an attribute can be used as filter criteria. In case of attribute values different matcher are available: 

| Selector | Description | Example | 
| --- | --- | --- |
| `[attribute]` | selects all elements with a present `attribute` | a[href] {...}, <br/> all `<a>` elements with a present href attr | 
| `[attribute="value"]` |  selects all element with an `attribute` set to `value` | a[href="/"] {...}, <br/> all `<a>` elements with href pointing to page's root `/` | 
| `[attribute~="value"]` |  selects all element with an `attribute` containing the string `value` (whitespace separated list?) | [id~="menu"] {}, <br/> all elements with an id attr containing menu | 
| `[attribute\|="value"]` |  selects all element with an `attribute` set to `value` or starting with `value-` | [lang\|="en"] {...}, <br/> all elements with a lang attr that is "en" or starts with "en-" | 
| `[attribute^="value"]` |  selects all element with an `attribute` whose value begins with the string `value` | [lang^="en"] {...}, <br/> all elements with a lang attr that starts with "en" | 
| `[attribute$="value"]` |  selects all element with an `attribute` whose value ends with the string `value` | p[class$="content"] {...}, <br/> all `<p>` elements with a classname that end with "content"| 
| `[attribute*="value"]` |  selects all element with an `attribute` containing the string `value`| div[id~="menu"] {...}, <br/> all `<div>` elements with an id attr containing menu | 

### Attribute Values 

#### Colors
HTML/CSS support color values in rgb, hex, hsl, rgba and hsla format. Alternatively a color can be defined using one of approx. 150 standard color names.
E.g. to apply a red background color to a div element the following color values are valid. 

```html
<div style="background-color:red;">red div using color name</div>
<div style="background-color:rgb(255, 0, 0);">red div using rgb values</div>
<div style="background-color:rgba(255, 0, 0, 1);">red div using rgba values</div>
<div style="background-color:hsl(0, 100%, 50%);">red div using hsl values</div>
<div style="background-color:hsl(0, 100%, 50%, 1);">red div using hsla values</div>
```

#### Lengths 

Many CSS propertys accept length values like width, height, margin, padding and font-size. Length Values are composed of a number and a unit. 
Number and unit must be concatenated without any symbol or space, e.g. `1px`, `1mm`, `1in`. Only in case of `0` the unit can be ommitted.

Additionally CSS offers two keywords specifying lengths according to the content's size: `min-content`, `max-content`.

```css 
  .navmenu {
    width: 320px;  
  }
  .navmenu2 {
    width: 75%;  
  }
```

CSS accepts both absolute and relative lengths which can be provided with different units. 
As shown in the table below there are many valid units in CSS. The most important are marked with bold text.

| Unit | Description | type 
| --- | --- | --- |
| cm | centimeter | absolute |
| ch | relative to the width of a "0" (zero literal) | relative |
| **em** | relative to the element's font-size | relative | 
| ex | (uncommon) relative to the element's x-height <br/>(font specific size, represents approximately the height of a small letter) | relative |
| in | inch (1n=96px=2.54cm) | absolute  |
| mm | milimeters | absolute |
| pc | picas (1pc=12pt) | absolute |
| pt | points (1pt=1/72in) | absolute |
| **px** | pixels (=1/96in), <br/> may concern multiple device pixels on printers and high resolution screens. | absolute | 
| **rem** | relative to the font-size of the root element (commonly body or html) | relative | 
| **vw** | relative to the viewport width | relative | 
| **vh** | relative to the viewport height  | relative | 
| vmin | relative to the 1percent of the viewport's width or height whatever is smaller | relative | 
| vmax | relative to the 1percent of the viewport's width or height whatever is bigger | relative | 
| **%** | relative to the parent element | relative |
| **min-content** | defines a length according to the intrinsic minimum of the element's content<br/> In case of text all soft-wrapping opportunities are taken, *the size represents the longest word*. | max-content |
| **max-content** | defines a length according to the intrinsic maximum of the element's content<br/> Text is not wrapped at all, may cause overflow. 

#### Directional Values

Some propertys are related to an HTML element's edges/sides and accept side-specific values. Especially positioning propertys (`margin`, `padding`, `inset`, `scroll-margin`, `scroll-padding`) but also border-related propertys (`border-width`, `border-style`, `border-color`) support directional values.  

CSS offers two options to define values for each side individually: 

1. using side-specific propertys adding a suffix to the property name, e.g. `margin` becomes `margin-top`, `margin-right`, `margin-bottom`, `margin-left`. 
2. using shorthand propertys (e.g. `margin`) with unidirectional or side specific values (space seperated list of values) 
  - 1 value: unidirectional, applies to all sides (e.g. `margin: 8px`)
  - 2 values: first value is each applied to top and bottom, the second is for left and right (e.g.` margin: 8px 16px`)
  - 3 values: first value concerns top, second each for left and right and third refers to the bottom (e.g. `margin: 4px 16px 8px`)
  - 4 values: values accordint the following order *top, right, bottom, left* (e.g. `margin: 8px 16px 16px 8px`)

```css
  p {
    padding: 16px; /* applies to all sides */
    border-width: 2px 4px; /* applies vertical (top and bottom, each 2px) and horizontal (left and right, each 4px) values*/
    margin: 8px 4px 6px 16px; /* applies specific values for each side in the following order: top, right, bottom, left*/ 
  }
```

The border property is already a shorthand for `border-width`, `border-style`, `border-color`. Thus another side-related shorthand for `border` is not valid.

### Comments
Comments are annotations in source code which are ignored by the interpreter. Comments in CSS don't share the same syntax with HTML comments. A CSS comment begins with `/*` and ends with `*/`. It can be inline, span a single or multiple lines. 

```css
/* styles for nav-elements when hovered */
.nav-element:hover {...}
```

### Cascade and Inheritance

CSS's hierarchical system of cascading and inheritance is essential when designing more complex layouts. The cascading algorihtm is responsible to filter and merge conflicting CSS rules for each HTML Element. 

Competetive or conflicting CSS rules may be from: 
- different declarations 
  - inline styles, 
  - internal and external stylesheets
- different origins  
  - user agent 
  - author/developer (internal and external stylesheets)
  - user 
  - animations
  - transitions. 

Browsers apply default styles for each HTML Element. These styles are called user agent styles. The styles and the implementation (actual or virtual user agent stylesheet) is browser-specific. 

In addition users can define custom user-specific stylesheets likely by using browser addons or tools like screen readers.  

CSS Animations and Transitions create 'virtual rules' when running. Both can therefore be an origin of CSS rules relevant for the cascading algorithm.  

Finally inheritance takes action when no style rules are defined for an element.  

#### Cascading Algorithms 

The first step is to identify and filter CSS declarations from all sources and origins that are applicable to an element. Therefore a style rule must meet the following conditions: 
- It belongs to a style attribute or style sheet that currently applies to the document 
- it must not be inside of a false conditional rule (e.g. `@media (min-width: 900px) {... the rule ... }` when viewport width < 900px)
- Selector must match to the element 
- Syntax is valid, property and value are valid inputs

The conclusive step is to weight and select competetive styles according the rules listed below: 

1. Different Declarations: Inline styles allways overwrite styles defined in stylesheets
2. Different Origins: Declarations are weighted in the following descending order
    1. Transition declarations 
    2. User Agent declarations with !important 
    3. User declarations with !important
    4. Author declarations with !important
    5. Animation declarations 
    6. Author Declarations
    7. User Declarations 
    8. User Agent Declarations 
3. Same origin: the rule's selector is weighted according to it's *specifity score*: 
    - Element and Pseudo-Element Selectors: each inside the (composed) selector adds +1 to an Element's specificity score
    - Class, Attributes and Pseudo-Class Selectors: each inside the selector adds +10 to an Element's specificity score
    - ID Selectors: each inside the selector adds +100 to an Element's specificity score 
    - Not relevant for Specificity (score=0): Universal Selector `*`, combinators (`+`, `>`, `~`, ` ` (space), `||` ) and negation pseudo-class (`:not()`, but it's enclosed selector does)
    - Rule with highest specificity is chosen 
4. Same specifity: the last stylesheet read prevails (html document flow)

#### Inheritance 

If a property is not defined by style rules inheritance is the subordinate procedure to determine style values.  
In other words **style rules that directly target an Element allways take precedence over inherited styles**. 

The inheritance process depends on the the specific property. CSS propertys can be either inherited or not. Mostly text propertys are inherited.
Common inherited propertys are `color`, `cursor`, `direction`, `font-family`, `font-size`, `font-style`, `font-variant`, `font-weight`, `font`, `letter-spacing`, `line-height`, `text-align`, `text-indent`, `text-transform`, `visibility`, and some more. 

1. Inherited propertys are taken over from the closest parent's *computed* value. (root elements gets initial value)
2. Non-inherited propertys are set to the property's initial (default) value 

The computed value is the value which is transferred from a parent to a child. 
It refers to the styles which are actually applied to an element.

This behavior can be controlled by using universal keywords `inherit`, `initial`, `unset`, `revert`. 
The keywords are applicable to all elements and all propertys (inherited or not). 
- `inherit`:  force the element to inherit a property
- `initial`:  forces an element to take the default value. 
- `unset`:    if a property is inherited acts like `inherit`, if it's not inherited it acts like `initial`. 
- `revert`:   reverts all styles of the current origin (see above) meaning resets back to user-styles if any or user-agent styles. 

The cascade treats theses keywords just like other values. They can be overrriden by specificity, origin or inline-styles. 
`unset` and `revert` are similar having the same effect as long as no user- or user-agent styles are defined     
The keywords can be used in conjunction with the `all` property to affect (usually reset) all propertys (except `unicode-bidi`, `direction` and CSS variables). 

## CSS Layouts 

### The Box Model

The CSS Box Model extends the HTML Block Model by adding positioning, sizing and styling rules for elements. 
<img src="/box-model.svg" alt="CSS Box Model">

#### Margin and Padding 

The Box element or it's content can be positioned using the CSS properties `margin` and `padding`. 
While margin sets an offset for the whole Box, padding adjusts the content's position. 

Both propertys can be applied to each individual side of a Box. 
- by using the side-specific propertys: `margin-top`, `margin-right`, `margin-bottom`, `margin-left`, `padding-top`, `padding-right`, `padding-bottom`, `padding-left`
- by using `margin` or `padding` shorthand (see block-side specific lengths)

Both accept the following values: 
- `length` values 
- `percentage` values (relative to the size of the containing block)
- only for margin: `auto`, centers a box horizontally which does not fill full width of it's parent container width 

#### Width and Height 

The size of an HTML element is represented by it's width and height property. Accepted values are: 
- `length` values
- `percentage` values (relative to the containing's block size)
- `auto`
- `max-content` (intrinsic prefered width of content)
- `min-content` (intrinsic minimum width of content)
- `fit-content` (uses available space but no more than max-content)

The `auto` value is the default value for both width and height. But the meaning depends on the element name/type and it's `display` property. HTML Block elements (most html elements are blocks) fill the full width and cover only the height necessary to display the content. Inline Elements cover only the width and height as needed. 
As a consequence empty elements (sometimes needed for layout styling) must always specify the height property if they shall be displayed. 

The CSS Box model offers two modes to calculate the Box's size: 
- `box-sizing: content-box;` (default): width and height are determined by the content's size. 
- `box-sizing: border-box`: width and height are determined by a Box that covers content, padding and border. 
 
Many developers prefer the `border-box` mode. Since the `box-sizing` property is inherited it can be easily applied to all elements in an HTML document or body. Alternatively the universal selector can be used. 
```css
body {
  box-sizing: border-box;
}
```

#### Borders and Background

HTML elements can be styled with borders or (less commonly) with outlines. Borders are lines that span an imaginary Padding-Box. If `box-sizing: border-box` borders contribute to an elements width or height so the available space of the Padding-Box is reduced. 

Borders can be formatted with several propertys (e.g. `border-width`, `border-style`) or the `border` shorthand. 
| Property | Description | Example | 
| --- | --- | --- | 
| `border-width` | specifies the thickness of a border | `border-width: 4px;` | 
| `border-style` | determines the line style of an border | `border-style: dotted;` |
| `border-color` | defines the line color of an border | `border-color: red;` |
| `border` | border shorthand list for `borderwidth` `border-style` and `border-color`. A space separated list of values for each property is accepted `border: 1px solid red;`   
| `border-radius` | applies a radius in the border corners | `border-color: red;` |

Each basic border attribute (width, style, color) is side-specific meaning it accepts either one unidirectional value or a space-separeted list of directional values acc. to side-specif lengths (see above). Side-specific attributes are available, too. Their names are composed of `border-${side}-${attribute}`, e.g. border-left-style or border-top-width. 

`border-radius` is also a side-specific attribute. But it refers to the corners. The sequence and syntax of the shorthand is the same like for other side-specific attributes but it starts with the top left corner: 
- 1 value refers to all corners
- 2 values: first refers to the top-left and bottom-right corners, second to the top-right and bottom-left corners
- 3 values: first for top-left, second for top-right and bottom-left, third for bottom-right 
- 4 values: top-left, top-right, bottom-right, bottom-left

Outlines are defined accordingly: `outline-color`, `outline-style`, `outline-width` are also side-specific attributes. However there is no attribute to defina an outline's corner radius.

Backgrounds cover an HTML element's `padding-box` (inside borders) background. The background is always displayed below an HTML element's content.  A background may be defines using  
- a color 
- gradient 
- image 

`background-color` is used to specify a background color. Valid values are HTML colors. 

The `background-image` property can define both gradients and images. Even multiple images and or gradients can be added and mixed. Images are added with an url as shown below. The gradient definition syntax is explaned in (CSS GRADIENTS). 
Multiple images are defined with a comma-seperated list of url- or gradient definitions. The last definition is drawn first, the first definiton is drawn on top of all other images. 

```css 
.simple-background {
    background-color: teal;
  }
  .multi-background {
    background-image: 
      linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)), /* drawn on top but with opacity! */
      url("some-image.png");
  }

```

Multiple images are defined with a comma-separated list 

### Element Display Types 
CSS offers a powerful attribute called `display` capable of changing one elements display type. HTML elements are by default associated with one of the two html element display types: `block`, `inline`, , 
e.g. a `<div>` element is a generic html block element, a `<span>` element is a generic html inline element.

Accepted display type values are
- `block`
- `flex`
- `grid`
- `inline`
- `inline-block`
- `inline-flex`
- `inline-grid`
- `inline-table`
- `list-item`
- `table`
- `table-caption`, `table-column-group`, `table-header-group`, `table-footer-group`, `table-row-group`, `table-cell`, `table-column`
- `none` 

As a consequence each html element's display and layout behavior can be completely changed. The disply property introduces even new display resp. layout types: `flex`, `grid` and derived inline-types (`inline-block`, `inline-flex`, `inline-grid`, `inline-table`). 

#### Block Elements

By specifying `display: block;` an element is displayed as HTML Block element. Most HTML elements are displayer by default as block element. 

The charateristics of Block elements are: 
- they always start on a new line
- they fill the full width available. (if width property is not specified)
- fill the height needed to display the content

An element's height depends on the content height. An empty block element (possibly with a background) without height property is therefore not displayed. 

#### Inline Elements

Inline elements are another basic HTML display type `display: inline;` suitable to arrange elements within a line: 
- they  do not start on a new line 
- they fill only the space (width and height) needed to display the content.
- width and height do not have an effect on inline elements 

#### Flex-box

CSS introduces a new disply type `display: flex;`. A flexbox element builds upon block elements but adds flexible layout options for it's children: 
- flex boxes (container) are block elements
- a flex box (container) can flexibly position it's children
- a flex box is a one-dimensional layout element (but can wrap)
- flex items do not stretch on the main axis direction. 
- flex items stretch to fill the size of the  cross axis 

The Children of a Flex container are called flex-items. Flex-items can be aligned vertically or horizontally with the `flex-direction` property. Items taking more space than available can be wrapped by setting `flex-wrap: wrap;`. The position of a flex item can be justified around the main axis using `justify-content`. The items can be aligned perpendicular to the main axis using `align-items` if there is just one flex-axis (`flexwrap: no-wrap;`). If flex items are wrapped (with `flex-wrap: wrap;`) `the align-content` property has to be used to align the flex axises. 

the relevant layout propertys for an flex-box (container) element are: 
| Property | Description | Values  
| --- | --- | --- | 
| `flex-direction` | defines the main axis the children are aligned. | `row` (=default), `column`, `row-reverse`, `column-reverse` | 
| `flex-wrap` | can bes used to enable wrap behavior. | `nowrap` (default), `wrap`, `wrap-reverse` |
| `flex-flow` | shorthand for `flex-direction` and `flex-wrap` | `row` or `column` or `row-reverse` + " " + `nowrap`, `wrap`, `wrap-reverse`| 
| `justify-content` | justifies children around flex axis (row, column) | `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenlty`, `stretch` | 
| `align-items` | aligns children around cross axis (vertically or horizontall if flex-direction=column), not effective if items are wrapped. | `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenlty`, `stretch` | 
| `align-content` | if `flex-wrap:wrap` aligns children's flex axises | `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenlty`, `stretch` |

Single flex items can be adjusted, too. Flex items (children of a flex container) accept addition propertys: 
| Property | Description | Values  
| --- | --- | --- | 
| `order` | can adjust an item's order in a flex container. | integer number | 
| `flex-grow` | flex items do by default not stretch on the main axis. By setting a positive number for `flex-grow` a flex item does stretch on main axis. If multiple flex items specify `flex-grow` the additional space is distributed according to the item's values (numbers) | number |
| `flex-shrink` | if all flex items need more space than the flex container offers `flex-shrink` specifys the shrink ratio according to `flex-grow` | number | 
| `flex-basis` | specifies an element's base dimension on the main axis (width in row, height in column). `flex-basis` has a higher priority than `width` and `height`  | same as `width` and `height` | 
| `align-self` | can align single items on the cross axis | `auto`, `stretch`, `center`, `flex-start`, `flex-end`, `baseline` | 

#### Grid

Grids are a two-dimensional layout elements defined by the `display: grid;` property. A grid container behaves like a block element but provides propertys to position it's children 
- grid containers care block elements 
- grid container can position it's children in a twodimensional grid 
- by default the children are positioned in a vertical stack. 
- grid items fill the full width available (definition of columns limits the available space accordingly)
- grid items fill only height as needed for content 

According to flex box elements the children of a grid are called grid items. The grid container can position them as a group with the `grid-template-columns`, `grid-template-rows` and `grid-template-areas`  properties. 

The columns of a grid are specified with `grid-template-columns`. It accepts a space-seperated list of length values. Each value relates to a column. 
Default length values and additionaly the fractions length unit and the minmax-formula are introduced. 

A fraction is a flex factor representing a share of the grid container's remaining space. Absolute or relative length values are applied first. The remaining space is distributed among all columns with a fraction length value. 

The minmax-formula `minmax(min, max)` sets the column's width flexibly according to the available space. The resulting width of a minmax-formula shall allways be >= min and <= max. 

Instead of a space separated list defining each column individually a `repeat(n, length)` formula is also accepted. The parameter n is either the amount of columns to length value shall be applied to or `auto-fill` or `auto-fit`. The two keywords can be used to design responsive grids. Therefore the grid items must either have a size (width) or the length in the repeat formula must be an absolute or relative length value (but can be in combination with fractions and minmax-formula), e.g. 
```css
.grid-container {
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}
```

<div style="display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p><p>5</p>
  <p>6</p>
  </div>

The `grid-template-rows` sets the grid's rows and their heights. The property works according to `grid-template-columns`. `fraction units`, `minmax` and `repeat` inputs are supported, too. However since the user usually scrolls a page vertically `repeat(auto-fill, ...)` and `repeat(auto-fit, ...)` are barely used. 

More flexible grids can be defined using the `grid-template-areas` property. Instead of columns and rows, areas are defined. Areas must  be associated with grid items. Therefore the grid item's `grid-area` property must be set to an unique id (string). These id's are now used in the `grid-template-areas` definition. The property `grid-template-areas` accepts a space-separated list of row-definitions. A row-definition is a quoted list of ids each representing a column. 

```css
.grid-container {
  grid-template-areas: 
    "a a ."
    "a a ."
    ". b c";
}
```
<div style='display: grid; grid-template-areas: "a a ."
    "a a ."
    ". b c"'>
  <p style="grid-area:a;">a</p>
  <p style="grid-area:b;">b</p>
  <p style="grid-area:c;">c</p>
  </div>

Similar to flex boxes a grid container can align and justfy it's content. The `justify-content` property justifies the children as a whole grid horizontally. `align-content` aligns the children vertically as a whole grid. 
`justify-items` sets the default `justify-self` behavior of the grid items. In contrast not the grid as a whole is justified but each item within it's dedicated space. Same applies to `align-items`. Each grid item is aligned within it's dedicated position. 

The grid items can individually specify their layout. The property `grid-column` controls the amount of columns to span, `grid-rows` the amount of rows to span. Both accept the same value scheme: The start column (starts with 1) is followed by a `/` and the excluded end column. Alternatively either start or end column can be specified with the amount of columns resp. rows to span. 

E.g.
```css
  grid-column: 2 / 5; /* spans 2nd column and ends with column 4*/
  grid-column: 2 / span 3; /* spans 2nd column and ends with column 4*/
  grid-rows: 2 / 5; /* spans 2nd row and ends with row 4*/
  grid-rows: 2 / span 3; /* spans 2nd row and ends with row 4*/
```

As already mentioned an grid item's `grid-area` can be used to compose an area-based grid. The value can be either a unique identifier used with `grid-template-areas` or an immidiate area defintion: 
```css
grid-area: row-start / column-start / row-end / column-end; 
```
Grid items can be aligned within an item's dedicated space. Vertical alignment is realized with `align-self`, horizontal alignment with `justify-self`.   

### Positioning 

CSS offers different modes to position items. An item's positioning mode can be changed using the `position` property. It is also important when it comes to the stacking order resp. context. The `position` property accepts the following values: 
- `static` (default)
- `relative`
- `absolute`
- `fixed`
- `sticky`

Elements are considered positioned if `position` has any other value than `static` and at least one positioning property (`top`, `left`, `right`, `bottom`) specified. 

#### Static Position 

All elements are positioned by default with `position: static`. 

The default positioning mode is characterized: 
- positioning propertys (`top`, `left`, `right`, `bottom`) do not have any effect 
- stacked according to the document flow (last siblings are on top)


#### Relative Position 

A relative positioned element is positioned relative to it's dedicated static position. Therefore `position: relative` and at least one positioning property (`top`, `left`, `right`, `bottom`) must be set. Nevertheless the default static position remains reserved. Other elements are placed in the layout just like the element was not positioned (`static`). This means that other elements do not fill the resulting space caused by positioning and might cover or be covered by the new element's position. 

Relative positioned elements 
- are positiones relative to the static position using positioning propertys (`top`, `left`, `right`, `bottom`)
- are considered positioned 
- element positioning has no effect on other elements (others are placed as if the element was not positioned)
- stacked above non-positioned sibling-elements, positioned sibling elements are stacked according to the document flow. 

#### Absolute Position 
Absolute positioning intends to position an element relative to it's *closest positioned ancestor element* if there's any otherwise relative to the root container (body or html). Elements with `position: absolute` are removed from the normal document flow, other elements are placed as if the absolute positioned element did not exist. Absolute positioning is therefore a good choice when elements should be placed in a (partly covered) layout. 

The following rules apply to absolute positioning 
- elements are positioned to the nearest positioned ancestor (or if none the root element) using positioning propertys (`top`, `left`, `right`, `bottom`)
- are considered positioned 
- removed from document flow (others are positioned as if the element did not exist)
- stacked above none-positioned sibling-elements, positioned sibling elements are stacked according to the document flow.  

#### Fixed Position 

Some elements (e.g. navigation user interfaces) are supposed to remain on a fixed position on the screen (resp. the browser window). These elements are set to `position: fixed`. Fixed positioned elements are placed relative to the viewport. The viewport corresponds to the browser's window size. As with absolute positioning fixed elements are removed from the normal document flow. 

Fixed positioned elements share the following characteristics: 
- elements are positioned relative to the viewport (window size) using positioning propertys (`top`, `left`, `right`, `bottom`)
- are considered positioned 
- removed from document flow (others are positioned as if the element did not exist)
- stacked above none-positioned sibling-elements, positioned sibling elements are stacked according to the document flow.  

#### Sticky Position 

Sticky positioning is a mix of relative and fixed positiong. The actual positioning modes depends on the element's scroll position in the nearest scrolling ancestor. Sticky elements are positioned `relative` without parameters (just like static positioning) as long as the scroll position does not fall below a treshold defined by the positioning propertys (`top`, `left`, `right`, `bottom`). If a treshold is undercut the element becomes `fixed` and remains in the position defined by the positioning propoertys.  

Sticky positioning 
- sticky elements are either `relative` or `fixed` positioned
- elements are positioned relative (no parameters, like static) until scrollposition undercuts a treshold
- if the scrollposition falls under a treshold defined by the positioning propertys the element becomes `fixed` and remains in treshold position. 
- sticky elements are considered positioned  
- stacked above none-positioned sibling-elements, positioned sibling elements are stacked according to the document flow.  

### Stacking

CSS Layouts follow a complex hierarchical stacking and layering logic which is based on `stacking contexts`. A stacking context represents all elements which shall be stacked with the same priorities resp. rules. 

 The `<html>` element allways forms a stacking context for it's children. Other elements only form a stacking context when certain propertys are set:
 - elements with `position:` `absolute` or `relative` and `z-index` other than `auto`
 - elements with `position:` `fixed` or `sticky`
 - children of a flex- or grid- container with `z-index` other than auto. 
 - elements with `opacity` less than 1
 - elements with any of the following propertys `transform`, `filter`, `perspective`, `clip-path`, `mask`/`mask-image`/`mask-border` other than `none`
 - elements with `mix-blend-mode` other than `normal`, with `ìsolation: isolate`, with `-webkit-overflow-scrolling: touch`, with `will-change:` `transform` or `opacity`, with `contain:` `layout`, `paint` or any derivative.    

Within a stacking context elements are stacked in the following order (from back to top): 
    1. background and borders of root element 
    2. descendant non-positioned (static) elements, according to their positition in the document flow 
    3. Floating blocks (but non-positioned inline elements are placed afterwards, next to the floating block)  
    3. descendant positioned elements, according to their position in the document flow

In addition elements can be assigned to new layers using the `z-index` property. A `z-index` layer is only valid **within a stacking context and only within a stacking-group** (like non-positioned or positioned elements). The only option to put a non-positioned element in front of positioned elements is to set  `position: relative`. 

Accepted values for `z-index` are negative or positive (integer) numbers. The number represents the layer level. Negative layers are behind the default layer with z-index:0. 


### Overflow

Default Block elements usually expand vertically according to the content's height. Elements with a limited size can't do that. They may overflow if the content does not fit in the specified size. For instance elements with height property set may overflow in this case. Overflowing is the default behavior but can be customized using `overflow` property: 

- visible: may be displayed outside the padding box
- hidden: content is clipped to fit in the padding box 
- clip: similar to hidden, but forbids scrollen also programmatically 
- scroll: scrollbar is added 
- auto (depends on useragent, either like visible when element fits in padding box or scroll on desktops)

The overflowing behavior can be defined for vertical overflow (`overflow-y`) or horizontal overflow (`overflow-x`) individually. 

### Floating Elements

Elements can be aligned on the left or right side of it's container allowing inline-elements and text content to wrap around. Accepted values are `left`, `right` and `none`. Floating elements are removed from the normal document flow and reinserted in the floating position (in contrast to absolute positioning). Floating elements are placed in the document flow order. A floating element reserves the space on the defined side, the next floating elements are placed in the remaining space.  

Floating elements are treated as block elements overriding the display property if necessary. Floating elements do not contribute to the container's height. If a floating element is higher than the other elements within the container it will overflow. This behavior can be avoided by setting the container's `overflow` property to `auto`. 

## Text Styling

Text content can be styled using the following propertys 

| Property | Description | Example | 
| --- | --- | --- |
| color | defines the color of text content | `<p style="color:blue;">Content</p>`<p style="color:blue;">Content</p> |
| text-align | specifies horizontal alignment of text content | `<p style="text-align: center;">Content</p>`<p style="text-align: center;">Content</p> |
| text-align-last | specifies horizontal alignment of text content's last line | `<p style="text-align-last: center;">Content</p>`<p style="text-align-last: center;">Content</p> | 
| direction | can be used in conjunction with `unicode-bidi` to support languages with different text directions<br/> values: `ltr`, `rtl` | ... | 
| `unicode-bidi` | `unicode-bide: bidi-override` can be used in conjunction with `direction` to support languages with different text directions <br/> values `normal`, `bidi-override`, `embed`, `isolate`, `isolate-override`, `plaintext`| ... | 
| `vertical-align` | `vertical-align` defines the position of an element within a line,  <br/> values `baseline` (default), `length values`, `%-values`, `super`, `top`, `text-top`, `middle`, `bottom`, `text-bottom`| ... |
| `text-dedoration-line` | defines a text-decoration line type <br/> values: `none` (default), `underline`, `overline`, `line-through` | ... | 
| text-decoration-color | specifies a color for the text decoration <br/> values: colors | ... | 
| `text-decoration-style` | defines a line style for the text decoration <br/> values: `solid`, `double`, `dotted`, `dashed`, `wavy`|  ... | 
| `text-decoration-thickness` | defines a line width for the text decoration <br/> values: `auto`, `from-font`, `length or % value` |  ... | 
| `text-transform` | can transform letters of a text according to the following values: <br/> `none`(default), `capitalize`, `uppercase`, `lowercase` | ... |
| `text-indent` | | ... |
| `letter-spacing` | | ... |
| `line-height` | | ... |
| `word-spacing` | | ... |
| `white-space` | | ... |
| `text-shadow` | | ... |
| `font-family` | | ... |
| `font-style` | <br> values: `normal`, `italic`, `oblique`| ... |
| `font-weight` | <br/> values: `normal`, `bold`, `bolder`, `lighter`, `thickness values fron 100 ... 900` (400 is normal, 700 is bold) | ... |
| `font-variant` | <br/> values: `normal`, `small-caps`  | ... |
| `font-size` | <br/> values: `length values`  | ... |
| `font` | shorthand for `font-style`, `font-variant`, `font-weight`, `font-size`/`line-height`, `font-family`


## Style for special HTML Elements 

### Links

### List styles

### Table styles

### Form styles


## Missing 
### Background details 
### Max-width / Min-width 
### !important 
### Math functions 
### CSS Variables 
### Media Queries 
### Transformations 
### Animations 
### Transitions 
### Fonts Details 