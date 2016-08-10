         ~==,
     ~NMMMMMMMMZ    MMMMMMMMMMM   NMMMMMMMMMMD       ~MMMMMM       MMMMMMMMMMM+
    ~MMMMMMMMMMMN   MMMMMMMMMMM   NMMMMMMMMMMMD      DMMMMMM~      MMMMMMMMMMMMD
    NMMMI    MMMO   MMMM,         NMMM,    MMMM,     MMMMMMMO      MMMM    DMMMM
    MMMM            MMMM,         NMMM,    ZMMMI    ,MMM8MMMM      MMMM     NMMM
    MMMM            MMMM,         NMMM,    ?MMMO    ZMMM~NMMM,     MMMM     ZMMM
    MMMM            MMMM,         NMMM,    ~MMMO    MMMM =MMM7     MMMM     MMMM
    MMMM            MMMMMMMM8     NMMM,    ~MMMN    MMMN  MMMM     MMMM    NMMMM
    MMMM            MMMMMMMM8     NMMM,    ~MMMN   =MMM?  MMMM     MMMMMMMMMMMM+
    MMMM            MMMM,         NMMM,    ~MMMN   ZMMM   $MMM?    MMMMMMMMMMZ
    MMMM            MMMM,         NMMM,    =MMMO   DMMM   :MMMN    MMMM  ,MMMM
    MMMM            MMMM,         NMMM,    ?MMMO   MMMMMMMMMMMM    MMMM   MMMM,
    MMMM      ,     MMMM,         NMMM,    OMMM=  ,MMMMMMMMMMMM    MMMM   NMMMD
    NMMM$    MMMM   MMMM          NMMM,    MMMM,  ?MMMMMMMMMMMM    MMMM   ?MMMM
    ,MMMMMMMMMMMN   MMMMMMMMMMM   NMMMMMMMMMMM$   NMMM      MMM+   MMMM    MMMM7
      MMMMMMMMM     MMMMMMMMMMM   NMMMMMMMMMM:    MMMM      MMMN   MMMM    OMMMM
         ~==

# REI Cedar Style Framework!
[![Build Status](https://travis-ci.org/rei/rei-cedar.svg?branch=master)](https://travis-ci.org/rei/rei-cedar)

Welcome to REI's style framework! The overall goals of this project are to provide a common scaffolding for UI elements,
and a set of themes that build on this scaffolding. We started this project in 2015 as a fork of
[Bootstrap](http://getbootstrap.com/) and have applied many of the concepts from [Semantic-ui](http://semantic-ui.com/).
The project has evolved into what it is today, and will continue to grow to fit our expanding needs. Feel free to watch
the Cedar grow and learn from what we are doing, or jump in and provide some recommendations.

The goal, at this point, is to generate multiple themed CSS resources that different web properties can consume.
In time, we will explore more atomic theming that will allow page creators to mix and match themes: essentially becoming
a theme generator.

This project will work in conjunction with an upcoming component framework that is in the works.  Stay tuned for that!

## Build

To build the CSS bundle, run `gulp`. The built bundle(s) will appear in
`dist/*.css`

## Docs

To generate the documentation site locally, follow these steps:

1. Install [Jekyll](http://jekyllrb.com/docs/installation) 2.5.x with
   `sudo gem install jekyll -v '>= 2.5'`
    - **Windows:** See ["Run Jekyll on Windows"](http://jekyll-windows.juthilo.com/)
1. Install [Rouge](https://github.com/jneen/rouge) with `sudo gem install rouge`
1. Install [Node](https://nodejs.org/download/) with `brew install node`
1. From the project root directory, run `npm install` to install the project's
   Node dependencies

## Contribution
1.) Pull master.
2.) Create a branch and when you are finished open a PR.
3.) Once it builds and is successful, all you need is one approver from the REI dev team.
4.) Someone from the REI cedar team will merge the PR.

### Usage

1. From the project root directory, run `gulp` to build the site
1. Run `jekyll serve` to start a local dev server
1. Open http://localhost:9002 in your browser, and voilà!

## Accessibility Audits and Testing

** Note: The following in currently in development.**

Accessibility audits can be performed against the generated documentation or on the templates used for the
documentation. We plan to following the rules defined within [https://www.w3.org/TR/WCAG20/](WCAG 2.0).

* `npm run accessibility:audit-templates` will audit the template files.
* `npm run accessibility:audit-docs` will audit the generated documentation.

### Additional Audits

In addition to a11y, we have added audits using [pa11y](https://www.npmjs.com/package/pa11y). These audits offer more
coverage, but with some limitation. pa11y offers a lot more coverage, but does not include DOM references to correct
errors. And it cannot audit local static files.

- `gulp accessibility:audit-pa11y`
## Visual Regression Audits

Our visual regressions audits can be performed against all patterns documented within the patterns site.
to do so, follow the steps below:

1. Build docs and start your jekyll server
1. navigate to the node_modules/backstopjs directory
1. `npm run reference` will create a base set of images providing coverage for all defined patterns. Ensure this is run against a clean build prior to any edits.
1. Make a change to the markup or css and re-run `npm run test`.

### Reports

 `npm run test` will spin up a local server at port 3001 that will auto render once tests in console have completed.
 if sever stops running after 15min and

### Folder Structure

```bash
├── backstop.json        # Test runner for all the docs
├── failures       # If sever is not auto generated run 'npm run openReport'
```

### Screenshot Files

Screenshots are all named with the value from the example's data attribute, `data-example-id`. They are also prefixed
with the section it came from.
```bash
components-panel-with-heading_138.png
# Page: /components
# data-example-id: panel-with-heading
```

### Road Map

* convert from backstop.json to npm dependency that auto loops through site structure capturing patterns via the `[data-example-id]` identifier.
* move reference screen captures to satchel and update Travis to generate new reference on commit to master.

### uCSS Testing - testing css rule usage
To run uCSS
* Note: `npm install` should have been run along with having the jekyll server running 
* From the project root run `npm run ucss`
* The test will print to the console as it runs and upon completion a html report will open in your default browser

## See Also
REI Cedar is a living, working project and will continue to grow, and change. Just like any healthy tree, this one will
lose limbs and may change direction at times.

We would like to thank the creators and contributors of the following tools that we have pulled inspiration from.

The following frameworks have been used / referenced thus far

 - [Bootstrap](http://getbootstrap.com/),
 - [Semantic-ui](http://semantic-ui.com/),
 - [Pattern lab](http://patternlab.io/about.html)

The following tools have been used / referenced thus far

### UI testing:

 - [PhantomCSS](https://github.com/Huddle/PhantomCSS/blob/master/README.md)

### Accessibility testing:

 - [Pa11y](http://pa11y.org/)
 - [A11y](https://addyosmani.com/a11y/)

### Icons

 - [Vecteezy](http://creativecommons.org/licenses/by/3.0/deed.en_US)

