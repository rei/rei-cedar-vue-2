The basic card is intended as a container for grouping like content.

### Examples

#### Simple card 
```
<cdr-card>
  <cdr-img alt="" modifier="responsive" src="http://placehold.it/350x150"></cdr-img>
</cdr-card>
```
#### Simple card with a card block to provide internal spacing
```
<cdr-card 
  wrapper-a="cdr-card__block"
>
 <cdr-img alt="" modifier="responsive" src="http://placehold.it/350x150"></cdr-img>
</cdr-card>
```
#### placing content in multiple slots
```
<cdr-card
 wrapper-b="cdr-card__block"
 header
 headerClass="cdr-card__block"
 footer
 footerClass="cdr-card__block"
>
  <cdr-media-object
  level="3"
  media-url="http://rei.com"
  media-title="Article attribution"
  media-figure="http://placehold.it/50x50"
  media-extend-style="cdr-card__media"
  media-img-shape="circle"
  modifier="center"
  slot="header">
  </cdr-media-object>
  <section slot="bodyB">
    <cdr-row cols="3" gutter="none">
     <cdr-col>
       <cdr-img alt="" modifier="responsive" src="http://placehold.it/350x150"></cdr-img>
    </cdr-col>
    <cdr-col>
      <cdr-img alt="" modifier="responsive" src="http://placehold.it/350x150"></cdr-img>
    </cdr-col>
    <cdr-col>
      <cdr-img alt="" modifier="responsive" src="http://placehold.it/350x150"></cdr-img>
    </cdr-col>
    <cdr-col>
       <cdr-img alt="" modifier="responsive" src="http://placehold.it/350x150"></cdr-img>
    </cdr-col>
    <cdr-col>
      <cdr-img alt="" modifier="responsive" src="http://placehold.it/350x150"></cdr-img>
    </cdr-col>
    <cdr-col>
      <cdr-img alt="" modifier="responsive" src="http://placehold.it/350x150"></cdr-img>
    </cdr-col>
  </cdr-row>
</section>
<section slot="bodyC">
    <cdr-row cols="3" gutter="none">
     <cdr-col>
       <cdr-img alt="" modifier="responsive" src="http://placehold.it/350x150"></cdr-img>
    </cdr-col>
    <cdr-col>
      <cdr-img alt="" modifier="responsive" src="http://placehold.it/350x150"></cdr-img>
    </cdr-col>
    <cdr-col>
      <cdr-img alt="" modifier="responsive" src="http://placehold.it/350x150"></cdr-img>
    </cdr-col>
    <cdr-col>
       <cdr-img alt="" modifier="responsive" src="http://placehold.it/350x150"></cdr-img>
    </cdr-col>
    <cdr-col>
      <cdr-img alt="" modifier="responsive" src="http://placehold.it/350x150"></cdr-img>
    </cdr-col>
    <cdr-col>
      <cdr-img alt="" modifier="responsive" src="http://placehold.it/350x150"></cdr-img>
    </cdr-col>
  </cdr-row>
</section>
<cdr-media-object
  level="3"
  media-url="http://rei.com"
  media-title="Backpacking Tents: How to Choose"
  media-figure="http://placehold.it/350x150"
  media-extend-style="cdr-card__media"
  media-img-shape="responsive"
  modifier="top block">
  </cdr-media-object>
  <cdr-button-group slot="footer">
    <cdr-button >B1</cdr-button>
    <cdr-button class="cdr-card__action" modifier="secondary">B2</cdr-button>
  </cdr-button-group>
</cdr-card>
```
