# 14-03-26
- every browser has it own user agent style sheet(built-in)
- text elements:
   headings,paras,lists
- link element 
   anchor tag -- <a href="/link"></a>
- image element
  image tag -- <img src="" alt=""> -- no closing tag as no content  
- div is a non semantic element
- semantic elemet - has self contained menaing
<!--group elements
<div>
</div>

<nav>
</nav>

<main>
</main>

<article>
</article>

<section>
</section>

<footer>    
</footer>. -->
- display property of each element
- block level element
- inline level element
- box model

# 16-03-26
- Box Model
  - margin and padding - space around the element(outside) and space inside of the element
  - all sides -- 1 value
  - tb lr -- 2 values
  - t lr b -- 3 values
  - t r b l -- 4 values
- border
- width and height and max
- box sizing
- universal selector -- * -- reset

- Text Styles
 - fonts
   - web safe fonts
   - google fonts (popular)
 - colors
   - named colors(better to avoid)
   - rgb , hexa decimal, hsl -- hex colours
 - size

- Pseudo Classes
  - focus
  - visited
  - hover
  - active
  - first-child
  - last-child
  - nth- child
    - even
    - odd
    - (number)

- styling images
- user card
- styling tables and forms

- Positions
  - relative
  - absolute
  - fixed
  - sticky
- top
- bottom
- left
- right

- flex

- font size units
 do not use px u can use em-font size of parnt element
or rem-font size of root element (em and rem are calssed as relative units)
-rem is moste useful for font size as it is relative to root element and not parent element
- view port unita
=>vw - view port width
=>vh - view port height

- layouts
- flex and grid
- media queries

Imperative vs Declarative
- imperative programming - how to do something(step-by-step instructions to achieve a specific result)
- declarative programming - what to do( the end goal you want to achieve)
 React-js=>uses virtual DOM and is a declarative library for building user interfaces
 Angular-js=>uses real DOM and is an imperative framework for building web applications