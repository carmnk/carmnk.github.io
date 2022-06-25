 # HTML

HTML stands for Hypertext Markup Language. HTML is the standard for displaying content in web browsers. While programming languages are more flexible providing tools and methods to manipulate data in general by accessing the computer hardware like cpu, markup languages are exclusively used to format resp. present content.

<del>Therefore HTML</del> is the ~~foundation~~ for frontend developers. Due to the mentioned restrictions of markup languages it is usually combined with other tools like CSS (seperates formating style from content and provides extensive style rules) and Javascript (programming language).

## HTML Elements

Content and formatting rules in general are defined by HTML elements. An html element is wrapped between a starting `<tag\>` and an ending `</tag>`. HTML tags are always enclosed by **angle brackets** `<>`. The closing tag is characterized by an additional `/` after the opening angle bracket. HTML tags are not case-sensitive, however lower-case tags are a requirement for stricter document types like XHTML and additional tools like *React* (JSX).

```html
<p>Content</p>
<br />
<p>p is an HTML paragraph Element explained later</p>
```

Some *HTML* elements do not need to be specified by content. For example `<br/>` displays a line break which is per se contentless. These tags are called empty HTML elements. These elements must not have an ending tag (otherwise they may be interpreted twice). A good practice and requirement for React (JSX syntax) is an additional `/` before the closing angle bracket.

> HTML elements can be nested meaning they can contain other HTML elements between their starting and ending tag. In practive every non-empty document respecting the HTML document structure is nested. An example of nested HTML elements is shown in chapter HTML Document.

All HTML elements (like `<img>`) accept additional input data which is defined by attributes. Attributes are added inside the opening tag in the following way: key="value". Attribute keys (or names) are not case-sensitive but lower-case is highly recommended.

Enclosing the attribute value in quotes is also a good practice and required if attribute value contains at least one space. Single and double quotes are both possible. If an attribute value itself contains quotes it can either be wrapped in the other type of quotes (if they do not occure) or HTML Character Entities can be used (`&quot;` for double quotes or `&apos;` for single quotes).

```html
<img
  src="https://some-url.com/some-img.jpg"
  alt="some-image's alternative text"
  title='some say: "this image is nice"'
/>
```

## HTML Element Attributes

In addition to element-specific attributes all HTML elements will accept [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes). Even though that doesn't mean they are effective for every element. Global attributes can be either

- basic global attributes,
- aria-\* attributes (Accessible Rich Internet Applications, define additional information to make websites more accessible to people with disabilities),
- event handler attributes
- legacy xhtml specifications: `xml:lang` and `xml:base`

Basic global attributes can be:

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
    <!-- collapsedLabel Show less common attributes -->
    <!-- expandedLabel Hide Proless common attributes -->

### id attribute

The id attribute of an HTML element is a unique identifier within the current HTML document. The value specified by an id attribute must at least contain one character and must not contain any whitespaces. Moreover it has to be considered that the id attribute is case-sensitive. The id attribute is important to select specific elements by using CSS selectors (id with hashtag-prefix e.g. `#someid`) or JavaScript (`document.getElementById("someid")`). The id attribute is also used to create bookmarks (link targets within current html doc, see LINKS).

### Style attribute

An HTML element's style attribute defines it's styles resp. appearance. It accepts CSS property-value-pairs separated by semicolon.

```html
<!-- scheme -->
<element style="property:value;">
<!-- example: div-block with grey background and red font -->
<div style="background:grey; color:white;">
```

Inline styles (element-specific styles applied via the element's style attribute) are defined specifically for a certain HTML element. The styles can only be re-used by copy and paste from an existing html element. CSS classes provide more flexibility and also additional functionality like access to media querys. Especially for complex CSS layouts styling with reusable classes may also reduce the filesize.

### Class attribute

Using classes is another option to adjust an HTML elements appearance using CSS. The class attribute does not define the styles directly but refers to a classname. The classes have to be defined seperately either in the same html document `<html/>`-`<head/>`-`<style/>` or in an external .css-file by using `<html/>`-`<head/>`-`<link/>`. 

## HTML Comments

In programming or markup languages like HTML comments are used to annotate source code without being processed by compiler or interpreter. In case of HTML this means comments are not displayed in the browser but they are publicly accessible in the source code. HTML comments are charaterized by a starting tag containing an exclamation mark and two dashed and an ending tag including two dashes.

```html
<!-- This is a comment -->
```

## HTML Document

Content to be displayed using HTML is stored in html documents. Conventionally HTML documents contain a filename extension ".html" (or less commonly .htm) like "index.html". Most operating systems will open files with these extensions by default in a browser. HTML documents are commonly provided by web servers (mostly using http(s) protocol) but other sources like local files are also possible. HTML documents doesn't need to be compiled or any sort of preprocessing. Consequently they can be created and edited in any text editor and be displayed in the browser.

The structure of an HTML document is given by an announcing `<!DOCTYPE>` Declaration followed by an `<html>` element containing a head section `(<head>...</head>)` and a body section (`<body>...</body>`).

```html
<!DOCTYPE html>
<!-- see chapter HTML document -->
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

The <!DOCTYPE> Declaration is not considered an HTML element but a type declaration instructing the browser how to render the page. Due to legacy support it's not allowed to close the declaration with a "/". Also, in contrast to HTML elements it must not have an ending tag. Every HTML5 document must start with `<!DOCTYPE html>`. If it's not included the browser will render the document in a quirks mode (supporting legacy documents) which may not support all features of HTML5.

The `<html>` element is the root or container of an HTML document. Only one `<head>` and one `<body>` element is permitted as content. It can include [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) as well as manifest, version, xmlns. The global "lang" attribute is recommended in order to faciliate document processing by browsers (e.g. screen-reader) or search engines.

The `<head>` element contains the document's metadata which is not intended to be displayed in the browser window. Metadata elements can be `<title>`, `<style>`, `<base>`, `<link>`, `<meta>`, `<script>` or `<noscript>`. Beside global attributes a "profile" attribute is accepted. A full reference for permitted content elements and attributes is accessible on the [MDN website](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)

The section described by the `<body>` element includes the content which shall be displayed inside the browser window. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body) provides a reference for permitted content and attributes. Some attributes like "background" can be used to define global styles but CSS style attributes should be prefered.

## HTML Head Element

As mentioned in (HTML Document) the html head element has to be placed between the opening tag of html element and the opening tag of the body element. It is a special and unique HTML element containing metadata which is not meant to be displayed.

Attributes

- profile: URIs of one or more metadata profiles separated by whitespace.

Permitted Content/Children:

- One or more elements of metadata elements (see METADATA ELEMENTS) whereas one must be `<title>`

### Metadata Elements

The following HTML elements are called metadata elements: `<base>`, `<command>`, `<link>`, `<meta>`, `<noscript>`, `<script>`, `<style>`, `<title>`. Title is the only mandatory metadata element in an HTML document.

#### Title \<title>

The title HTML element defines the documents title which is displayed in the title bar or in the pages tab. Besides it is used as title when the document is added to favorites and will represent the document's title in search-engine results. HTML documents require a title definition. It must be text-only:

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

