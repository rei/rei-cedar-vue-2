# Patterns, Style guides, Components, and Widgets 
The above terms have permeated our understanding around reusable and modular UI design patterns and systems for REI.com. Often they are used in a manner that leaves the listener believing that they are interchangeable or, that these all solve the same problem. This following outline intends to provide clarity to what each term is. The hope is to cauterize our use of these terms moving forward so that future convocations may have a more acute . 

As the matureness of Digital Design System progresses we will be updating these outlines.

----------



## UI Design Patterns

User Interface Design patterns are recurring solutions which solve common design problems. Design patterns are standard reference points for the experienced user interface designer.


**DDS UI Design patterns are:**

- *Patterns describe the reoccurring expectations of a user interface.*
- **Patterns describe how something SHOULD work** under preferred conditions and suggestions of how to cope with tradeoffs.
- **Patterns are independent of any particular theme** 
- Pattern flexibly adapts across any visual language.

**Example:**


----------



## Style guides
https://d2mxuefqeaa7sj.cloudfront.net/s_3FC642744948F01435DE3708CEF30845C64CF3A211690BAFB11B5A4CE64D7881_1486759493212_Screen+Shot+2017-02-10+at+10.31.09+AM.png



----------



## Components
https://d2mxuefqeaa7sj.cloudfront.net/s_3FC642744948F01435DE3708CEF30845C64CF3A211690BAFB11B5A4CE64D7881_1486594548111_Screen+Shot+2017-02-08+at+2.54.39+PM.png


**DDS Components Are:**

- A Component is the general term referring to the highly **reusable** part or piece of code maintained in our REI-Cedar framework and documented on patterns.rei.com.
- **Components are implementations of how something should work to how something actually works**
- Completed **components exhibit a visual language** 
- DDS Components are **modularized** implementations of our UI design patterns.
- Components ****are ****to be added to an overall layout
- Founded wholly on **atomic** methodology.
- They contain **Atoms**, **Molecules**, **Organisms**, and are starting to deliver **Templates**. 
- They are **generic** and have been developed as a solution to reoccurring, global user patterns.
- delivered as **code snippets** and as an **NPM template library.**
- They are distributed via [github](https://github.com/rei/rei-cedar) and are open source
- Making them **available to all customers** who consume javascript and css.

**Example of a DDS component:**

https://d2mxuefqeaa7sj.cloudfront.net/s_3FC642744948F01435DE3708CEF30845C64CF3A211690BAFB11B5A4CE64D7881_1486692811323_Screen+Shot+2017-02-09+at+2.18.28+PM.png


**Components are  not:**

- Components are not patterns
- Components are not widgets 

**More Information:**
[REI-Cedar Component taxonomy](/doc/The-taxonomy-of-REI-Cedar-Components-K6hQFqaYVSV8PzfKRc8U6) 


----------



## REI.com Widgets
https://d2mxuefqeaa7sj.cloudfront.net/s_3FC642744948F01435DE3708CEF30845C64CF3A211690BAFB11B5A4CE64D7881_1486594540803_Screen+Shot+2017-02-08+at+2.54.20+PM.png

- A Widget is a component that contains **both logic and presentation**.
- A Widget template can **consume** our **Components** or define their own.
- Our Widgets are delivered via the **Hippo content management system**.
- They are server side templates than are delivered with a **data model**.
- Developed as a **solution to a feature request.**
- A Widget is created once and referenced on one to n pages.



**Example of an REI.com Widget using DDS components**

https://d2mxuefqeaa7sj.cloudfront.net/s_3FC642744948F01435DE3708CEF30845C64CF3A211690BAFB11B5A4CE64D7881_1486669651836_Screen+Shot+2017-02-09+at+11.47.05+AM.png

----------


## External references:
| Pattern Library                                                        | Style Guide / Visual Language                                           | Component library                                                                                | Widget library                                                          |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| [Yahoo Design Pattern Library](https://developer.yahoo.com/ypatterns/) | [Google Material-ui](http://www.material-ui.com/#/customization/colors) | [salesforce Lightning design system](https://www.lightningdesignsystem.com/platforms/lightning/) | [Widget Catalog](http://confluence.rei.com/display/WDGT/Widget+Catalog) |
|                                                                        |                                                                         | [Google Material-ui](http://www.material-ui.com/#/customization/colors)                          |                                                                         |
|                                                                        |                                                                         | [Microsoft web framework](http://getmwf.com)                                                     |                                                                         |
|                                                                        |                                                                         | [BBC GEL](http://www.bbc.co.uk/gel)                                                              |                                                                         |
|                                                                        |                                                                         |                                                                                                  |                                                                         |
|                                                                        |                                                                         |                                                                                                  |                                                                         |
|                                                                        |                                                                         |                                                                                                  |                                                                         |
|                                                                        |                                                                         |                                                                                                  |                                                                         |
|                                                                        |                                                                         |                                                                                                  |                                                                         |



