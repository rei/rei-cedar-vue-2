## Usage

 By default the `cdr-link` component renders 
 ```
  <cdr-link>
    link text
  </cdr-link>
```
Note that the tag itself does not determine display.

### Variants
 In addition to our default link the following modifiers are provided which accommodate our standard link options.
* standalone


## Accessibility
The `cdr-link` component supports the element tags `a` and `button` which allows you to choose the proper element for the action you are performing. 

* Link color contrast must fulfill both of the following Level AA contrast ratios:
- A 4.5:1 contrast between the link text color and the background.
- A 3:1 contrast between the link text color and the surrounding non-link text color.
* Links are required to have two visually distinct properties when used within a body of text. Both the underline and color are both required.
* Hover and Focus states should match to ensure the same visual presentation is available when keyboard users navigate or 'tab' to the link.


## Installation

Placing the component into a your application is as simple as importing it:
```
npm i @rei/cdr-link
```

## Contributing
### Request an an enhancement
Join us on Slack at [#design-systems](https://rei.slack.com/messages/CA58YCGN4).