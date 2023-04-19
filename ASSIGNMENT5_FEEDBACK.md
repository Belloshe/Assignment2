Hi Isabelle!

Wow, I hope this doesn't sound rude but you've really come a long way in this course. It's great to see how much you've learnt. I know it's been hard to find time to study, and this stuff is not easy to learn, so you should be really proud of yourself!

There's a few things I'd like to see that you missed - a local font for example - and the project organisation needs some work. On the whole this is a good assignment, well done!

You've earned a Godkänt grade, but unfortunately you'll need to fix up most of the things below if you want that VG.

Please let me know if you are happy with the G grade or want to refactor.


*************************************

CRITERIA FOR GRADING

*************************************

GODKÄNT:
-------------------------------------

HTML
  index.html at root level for publishing on github pages ✅

  Multiple pages ✅

  Header, footer and navigational menu on all main pages (where possible) ✅
      On the project page, on desktop, the menu gets a bit wider.

  H1 on every page ✅

  Mail to Contact form ✅
      Works well!

  Links to specific projects opening in new windows ✅
      Nice!

CSS
  External CSS ✅

  General style sheets for common elements ✅ ❌
    all.css is a good start, but things like main { .. } appear in a lot of files.
    project.css has a lot of menu styling that it perhaps doesn't need.

  Typography style sheet ❌

  Locally installed font ❌
  
  Separate stylesheets for each page ✅
     Great! 

  RWD
    Desktop ✅
    Mobile ❌ ✅
       No menu on mobile!

JS
  jQuery plugin (such as a carousel) ✅

  JS/jQuery multi level menu (min 2 levels) ✅ ❌
     Nice, but should be on every page. The main menu should always be the same on every page!

-------------------------------------

VÄLGODKÄNT:
-------------------------------------

  Project organisation ❌
     create folders for html, css and JS. All the owl.carousel files should be inside the OwlCarousel directory.

  CSS prefixing where required ❌
    Use a tool like https://autoprefixer.github.io/ - just past our entire file in and it will produce the prefixing you need.

  jQuery effects ✅
    Nice jon on th menu, would have liked to see more.

  Semantic element naming ✅ ❌
     There's room for improvement, try to avoid things like:
     <p class="text-1"> or <div class="r">

  Code style
   HTML: ❌ ✅ 
      Too many empty lines and too many odd indentations. eg the header in index.html
   CSS:  ❌ ✅ 
      Similar to html, there's too many empty lines and the indentation is a bit out.
   JS: ✅ ❌
     Really good. A few things:
     const variable names should always be written in SNAKE_CASE
     You only need one $(document).ready(function() { in each file, and it can be shortened to $(function() {