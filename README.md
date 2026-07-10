# Attrelle

Attrelle is a simple JS library providing standard logic and styles for the web in an easy to use package.

Attrelle is a re-write and improvement on an internal library called Generic-Interactive I designed at Carters Jewel Chest,
I would like to someday rework all those pages to use attrelle, but alas, thats a lotta work.

# How to get started
Simply vendor a release of Attrelle into your codebase, or use a CDN. 
Then use `<script href="./initAttrelle.js" defer>` to enable, everything from there will be loaded dynamically.


Here is an example of Attrelle:
```html
<script href="./initAttrelle.js" defer></script>

<div id="demoCarosel" attrelle="carosel attrelleDemo">
    <!-- attrelle="carosel" initializes attrelle and dynamically loads the carosel module's logic & styles -->
    <!-- attrelle="attrelleDemo" sets the a name for this component -->

    <div attrelleDemo> 
    <!-- you include the component name as an attribute to have attrelle keep track of this element-->
        <p attrelleDemo="prev">Previous</p> 
        <p attrelleDemo="next">Next</p>
        <!-- modules often have keywords, in carosel's case, "prev" and "next" trigger the move to the prev/next slide -->

        <p> this is slide one </p>
    </div>
    
    <div attrelleDemo> 
        <p attrelleDemo="prev">Previous</p> 
        <p attrelleDemo="next">Next</p>

        <p> this is slide 2 </p>
    </div>

</div>
```
Attrelle's default carosel module dynamically adds classes to hide(by default) and show carosel slides,
the end user of Attrelle can configure which class is used in the carosel module.

Attrelle has a decoupled controls archetecture, allowing for maximum flexibility with interactions:

```html
<div id="mainPage">
    <h1> Hi mom </h1>
    <p global-modal1="open"> click here </p>
</div>

<dialog id="global-modal1" attrelle="modal global-modal1">
    <p global-modal1="close" global-modal2="open">clopen?</p>
</dialog>

<dialog id="global-modal2" attrelle="modal global-modal2">
    <p global-modal2="close">close</p>
    <p global-modal2="close" global-modal1="open">go back</p>
</dialog>


```
here we're using the global- prefix to allow our buttons to function as non-child nodes,
unlike non global- prefixed components, there can only be one global-xNamespace on a page.





Thats all for the README, for more details on specific modules, navigate 
to its JS file, there will likely be some explanatory comments at the top.

Contributions to Attrelle are welcome, but please keep them small and highquality,
slop isnt something I want to introduce to the library.
