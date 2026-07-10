# CJC_Attrle

Attrle is a simple JS library providing standard logic and styles for the web in an easy to use package.

Attrle is a re-write and improvement on the Generic-Interactive subsystem I designed at Carters Jewel Chest,
I would like to someday rework all those pages to use attrle, but alas, thats a lotta work.

# How to get started
Simply vendor a release of Attrle into your codebase, or use a CDN. 
Then use `<link href="./initAttrle.js">` to enable, everything from there will be loaded dynamically.


Here is an example of Attrle:
```html
<script href="./initAttrle.js" defer></script>

<div id="demoCarosel" attrle="carosel attrleDemo">
    <!-- attrle="carosel" initializes attrle and dynamically loads the carosel module's logic & styles -->
    <!-- attrle="attrleDemo" sets the a name for this component -->

    <div class="caroselSlide" attrleDemo> 
    <!-- you include the component name as an attribute to have attrle keep track of this element-->
        <p attrleDemo="prev">Previous</p> 
        <p attrleDemo="next">Next</p>
        <!-- modules often have keywords, in carosel's case, "prev" and "next" trigger the move to the prev/next slide -->

        <p> this is slide one </p>
    </div>
    
    <div class="caroselSlide" attrleDemo> 
        <p attrleDemo="prev">Previous</p> 
        <p attrleDemo="next">Next</p>

        <p> this is slide 2 </p>
    </div>

</div>
```

Attrle has a decoupled controls archetecture, allowing for maximum flexibility with interactions:

```html
<div id="mainPage">
    <h1> Hi mom </h1>
    <p modal1="open"> click here </p>
</div>

<dialog id="modal1" attrle="modal modal1">
    <p modal1="close" modal2="open">clopen?</p>
</dialog>

<dialog id="modal2" attrle="modal modal2">
    <p modal2="close">close</p>
    <p modal2="close" modal1="open">go back</p>
</dialog>


```

Thats all for the README, for more details on specific modules, navigate 
to its JS file, there will likely be some explanatory comments at the top.

Contributions to Attrle are welcome, but please keep them small and highquality,
slop isnt something I want to introduce to my little library.
