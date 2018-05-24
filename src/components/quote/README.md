# <span class="display-name">CdrQuote</span>

### Markup Tag
the Tag attribute of cdr-quote allows one of the following options:

  * blockquote (default)
  * aside
  * q
  * div
  
### <span class="modifiers">Modifiers</span>
Modifier values of cdr-quote:

  * block
  * pull

### Note:
the blockquote element allows for a `cite` attribute that allows for a URL path to the source. This attribute should be added when using blockquote and is different that the display option `citation`
```
<div>
  <cdr-quote
    modifier="block"
    summary="Blockquote Summary..."
    citation="Blockquote Citation..."
  />
  <cdr-quote
      tag="aside"
      modifier="pull"
      summary="Aside Pullquote Summary..."
    />
</div>
```
