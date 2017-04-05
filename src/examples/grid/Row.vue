<template>
  <div>
    <h2>The row</h2>
    <div class="container">
      <h3>row classes</h3>
      <ul>
        <li>cdr-row</li>
        <ul>
          <li>=-=-=- These are all responsive also by adding [-md, -lg, -xl, -xxl] (i.e. -rowTop-md) -=-=-=</li>
          <li>_row# (# = 1-12 for how many columns you want the row to have)</li>
          <li>-rowNoGutter</li>
          <li>-rowNoWrap</li>
          <li>-rowCenter</li>
          <li>-rowRight</li>
          <li>-rowTop</li>
          <li>-rowMiddle</li>
          <li>-rowBottom</li>
          <li>-rowSpaceBetween</li>
          <li>-rowSpaceAround</li>
          <li>-rowColumn</li>
        </ul>
        <li>cdr-col</li>
        <ul>
          <li>=-=-=- These are all responsive also by adding [-md, -lg, -xl, -xxl] (i.e. -colTop-md) -=-=-=</li>
          <li>_col# (# = 1-12 for how many columns it should take up*)</li>
          <li>-colHide (-&lt;breakpoint&gt; default is up can also add -&lt;breakpoint&gt;-down, -&lt;breakpoint&gt;-only)</li>
          <li>-colLeft# (# = number of columns to push over from left)</li>
          <li>-colRight# (# = number of columns to push over from right)</li>
          <li>-colRight# (# = number of columns to push over from right)</li>
          <li>-colTop</li>
          <li>-colMiddle</li>
          <li>-colBottom</li>
        </ul>
      </ul>
    </div>

    <h3>.cdr-row usage</h3>

    <h4>cdr-row _row#</h4>
    <div data-backstop="row-basic">
      <div class="cdr-row _row1">
        <div class="cdr-col">
          <div class="row-demo">1</div>
        </div>
      </div>

      <div class="cdr-row _row2">
        <div class="cdr-col">
          <div class="row-demo">2</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">2</div>
        </div>
      </div>

      <div class="cdr-row _row3">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
      </div>

      <div class="cdr-row _row4">
        <div class="cdr-col">
          <div class="row-demo">4</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">4</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">4</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">4</div>
        </div>
      </div>

      <div class="cdr-row _row5">
        <div class="cdr-col">
          <div class="row-demo">5</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">5</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">5</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">5</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">5</div>
        </div>
      </div>

      <div class="cdr-row _row6">
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
      </div>

      <div class="cdr-row _row7">
        <div class="cdr-col">
          <div class="row-demo">7</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">7</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">7</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">7</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">7</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">7</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">7</div>
        </div>
      </div>

      <div class="cdr-row _row8">
        <div class="cdr-col">
          <div class="row-demo">8</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">8</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">8</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">8</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">8</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">8</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">8</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">8</div>
        </div>
      </div>

      <div class="cdr-row _row9">
        <div class="cdr-col">
          <div class="row-demo">9</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">9</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">9</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">9</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">9</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">9</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">9</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">9</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">9</div>
        </div>
      </div>

      <div class="cdr-row _row10">
        <div class="cdr-col">
          <div class="row-demo">10</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">10</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">10</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">10</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">10</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">10</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">10</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">10</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">10</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">10</div>
        </div>
      </div>

      <div class="cdr-row _row11">
        <div class="cdr-col">
          <div class="row-demo">11</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">11</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">11</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">11</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">11</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">11</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">11</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">11</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">11</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">11</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">11</div>
        </div>
      </div>

      <div class="cdr-row _row12">
        <div class="cdr-col">
          <div class="row-demo">12</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">12</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">12</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">12</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">12</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">12</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">12</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">12</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">12</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">12</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">12</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">12</div>
        </div>
      </div>

      <div class="cdr-row _row2">
        <div class="cdr-col">
          <div class="row-demo">2</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">2</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">2</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">2</div>
        </div>
      </div>
    </div>

    <h4>cdr-row (auto sizes)</h4>
    <div data-backstop="row-auto">
      <div class="cdr-row">
        <div class="cdr-col">
          <div class="row-demo">auto</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">auto</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">auto</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">auto</div>
        </div>
      </div>
    </div>

    <h4>cdr-row -rowNoGutter</h4>
    <div data-backstop="row-noGutter">
      <div class="cdr-row _row3 -rowNoGutter">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
      </div>
    </div>

    <h4>cdr-row -rowNoWrap</h4>
    <div data-backstop="row-noWrap">
      <div class="cdr-row _row3 -rowNoWrap">
          <div class="cdr-col">
            <div class="row-demo">3</div>
          </div>
          <div class="cdr-col _col6">
            <div class="row-demo">3</div>
          </div>
          <div class="cdr-col">
            <div class="row-demo">3</div>
          </div>
          <div class="cdr-col">
            <div class="row-demo">3</div>
          </div>
      </div>
    </div>

    <h4>cdr-row -rowCenter</h4>
    <div data-backstop="row-center">
      <div class="cdr-row _row3 -rowCenter">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
      </div>
    </div>

    <h4>cdr-row -rowRight</h4>
    <div data-backstop="row-right">
      <div class="cdr-row _row3 -rowRight">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
      </div>
    </div>

    <h4>cdr-row -rowTop</h4>
    <div data-backstop="row-top">
      <div class="cdr-row _row3 -rowTop">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">
          3
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro assumenda aperiam officia corporis, repellat vitae reprehenderit nobis expedita! Neque molestiae tempora corrupti provident eos repellat est, ut, similique quaerat adipisci.</p>
          </div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
      </div>
    </div>

    <h4>cdr-row -rowMiddle</h4>
    <div data-backstop="row-middle">
      <div class="cdr-row _row3 -rowMiddle">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">
          3
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro assumenda aperiam officia corporis, repellat vitae reprehenderit nobis expedita! Neque molestiae tempora corrupti provident eos repellat est, ut, similique quaerat adipisci.</p>
          </div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
      </div>
    </div>

    <h4>cdr-row -rowBottom</h4>
    <div data-backstop="row-bottom">
      <div class="cdr-row _row3 -rowBottom">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">
          3
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro assumenda aperiam officia corporis, repellat vitae reprehenderit nobis expedita! Neque molestiae tempora corrupti provident eos repellat est, ut, similique quaerat adipisci.</p>
          </div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
      </div>
    </div>

    <h4>cdr-row -rowSpaceBetween</h4>
    <div data-backstop="row-rowSpaceBetween">
      <div class="cdr-row _row4 -rowSpaceBetween">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
      </div>
    </div>

    <h4>cdr-row -rowSpaceAround</h4>
    <div data-backstop="row-SpaceAround">
      <div class="cdr-row _row4 -rowSpaceAround">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
      </div>
    </div>

    <h4>cdr-row -rowColumn</h4>
    <div data-backstop="row-column">
      <div class="cdr-row _row3 -rowColumn">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col _col5">
          <div class="row-demo">5</div>
        </div>
      </div>
    </div>

    <h3>.cdr-col usage</h3>

    <h4>cdr-col _col#</h4>
    <div data-backstop="col-basic">
      <div class="cdr-row">
        <div class="cdr-col _col12">
          <div class="row-demo">_col12</div>
        </div>
        <div class="cdr-col _col11">
          <div class="row-demo">_col11</div>
        </div>
        <div class="cdr-col _col1">
          <div class="row-demo">_col1</div>
        </div>
        <div class="cdr-col _col10">
          <div class="row-demo">_col10</div>
        </div>
        <div class="cdr-col _col2">
          <div class="row-demo">_col2</div>
        </div>
        <div class="cdr-col _col9">
          <div class="row-demo">_col9</div>
        </div>
        <div class="cdr-col _col3">
          <div class="row-demo">_col3</div>
        </div>
        <div class="cdr-col _col8">
          <div class="row-demo">_col8</div>
        </div>
        <div class="cdr-col _col4">
          <div class="row-demo">_col4</div>
        </div>
        <div class="cdr-col _col7">
          <div class="row-demo">_col7</div>
        </div>
        <div class="cdr-col _col5">
          <div class="row-demo">_col5</div>
        </div>
        <div class="cdr-col _col6">
          <div class="row-demo">_col6</div>
        </div>
        <div class="cdr-col _col6">
          <div class="row-demo">_col6</div>
        </div>
      </div>
    </div>

    <h4>mixing cdr-row _row# and cdr-col _col#</h4>
    <div data-backstop="row-col-mix">
      <div class="cdr-row _row3">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col _col12">
          <div class="row-demo">_col12</div>
        </div>
        <div class="cdr-col _col11">
          <div class="row-demo">_col11</div>
        </div>
        <div class="cdr-col _col1">
          <div class="row-demo">_col1</div>
        </div>
        <div class="cdr-col _col10">
          <div class="row-demo">_col10</div>
        </div>
        <div class="cdr-col _col2">
          <div class="row-demo">_col2</div>
        </div>
        <div class="cdr-col _col9">
          <div class="row-demo">_col9</div>
        </div>
        <div class="cdr-col _col3">
          <div class="row-demo">_col3</div>
        </div>
        <div class="cdr-col _col8">
          <div class="row-demo">_col8</div>
        </div>
        <div class="cdr-col _col4">
          <div class="row-demo">_col4</div>
        </div>
        <div class="cdr-col _col7">
          <div class="row-demo">_col7</div>
        </div>
        <div class="cdr-col _col5">
          <div class="row-demo">_col5</div>
        </div>
        <div class="cdr-col _col6">
          <div class="row-demo">_col6</div>
        </div>
        <div class="cdr-col _col6">
          <div class="row-demo">_col6</div>
        </div>
      </div>
    </div>

    <h4>cdr-col -colTop, -colMiddle, -colBottom</h4>
    <div data-backstop="col-alignment">
      <div class="cdr-row _row4" style="height: 300px">
        <div class="cdr-col -colTop">
          <div class="row-demo">-colTop</div>
        </div>
        <div class="cdr-col -colMiddle">
          <div class="row-demo">-colMiddle</div>
        </div>
        <div class="cdr-col -colBottom">
          <div class="row-demo">-colBottom</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">auto</div>
        </div>
      </div>
    </div>

    <h4>cdr-col -colLeft#</h4>
    <div data-backstop="col-offset-left">
      <div class="cdr-row">
        <div class="cdr-col _col1 -colLeft0">
          <div class="row-demo">-colLeft0</div>
        </div>
      </div>
      <div class="cdr-row">
        <div class="cdr-col _col1 -colLeft1">
          <div class="row-demo">-colLeft1</div>
        </div>
      </div>
      <div class="cdr-row">
        <div class="cdr-col _col1 -colLeft2">
          <div class="row-demo">-colLeft2</div>
        </div>
      </div>
      <div class="cdr-row">
        <div class="cdr-col _col1 -colLeft3">
          <div class="row-demo">-colLeft3</div>
        </div>
      </div>
      <div class="cdr-row">
        <div class="cdr-col _col1 -colLeft4">
          <div class="row-demo">-colLeft4</div>
        </div>
      </div>
      <div class="cdr-row">
        <div class="cdr-col _col1 -colLeft5">
          <div class="row-demo">-colLeft5</div>
        </div>
      </div>
      <div class="cdr-row">
        <div class="cdr-col _col1 -colLeft6">
          <div class="row-demo">-colLeft6</div>
        </div>
      </div>
      <div class="cdr-row">
        <div class="cdr-col _col1 -colLeft7">
          <div class="row-demo">-colLeft7</div>
        </div>
      </div>
      <div class="cdr-row">
        <div class="cdr-col _col1 -colLeft8">
          <div class="row-demo">-colLeft8</div>
        </div>
      </div>
      <div class="cdr-row">
        <div class="cdr-col _col1 -colLeft9">
          <div class="row-demo">-colLeft9</div>
        </div>
      </div>
      <div class="cdr-row">
        <div class="cdr-col _col1 -colLeft10">
          <div class="row-demo">-colLeft10</div>
        </div>
      </div>
      <div class="cdr-row">
        <div class="cdr-col _col1 -colLeft11">
          <div class="row-demo">-colLeft11</div>
        </div>
      </div>
      <div class="cdr-row">
        <div class="cdr-col _col2 -colLeft2">
          <div class="row-demo">-colLeft2</div>
        </div>
        <div class="cdr-col _col2 -colLeft2">
          <div class="row-demo">-colLeft2</div>
        </div>
        <div class="cdr-col _col2 -colLeft2">
          <div class="row-demo">-colLeft2</div>
        </div>
      </div>
    </div>

    <h4>cdr-col -colRight#</h4>
    <div data-backstop="col-offset-right">
      <div class="cdr-row">
        <div class="cdr-col _col2 -colRight2">
          <div class="row-demo">-colRight2</div>
        </div>
        <div class="cdr-col _col2 -colRight2">
          <div class="row-demo">-colRight2</div>
        </div>
        <div class="cdr-col _col2 -colRight2">
          <div class="row-demo">-colRight2</div>
        </div>
      </div>
    </div>

    <h4>cdr-col -colRight# (with -rowRight)</h4>
    <div data-backstop="col-right-row-right">
      <div class="cdr-row -rowRight">
        <div class="cdr-col _col1 -colRight0">
          <div class="row-demo">-colRight0</div>
        </div>
      </div>
      <div class="cdr-row -rowRight">
        <div class="cdr-col _col1 -colRight1">
          <div class="row-demo">-colRight1</div>
        </div>
      </div>
      <div class="cdr-row -rowRight">
        <div class="cdr-col _col1 -colRight2">
          <div class="row-demo">-colRight2</div>
        </div>
      </div>
      <div class="cdr-row -rowRight">
        <div class="cdr-col _col1 -colRight3">
          <div class="row-demo">-colRight3</div>
        </div>
      </div>
      <div class="cdr-row -rowRight">
        <div class="cdr-col _col1 -colRight4">
          <div class="row-demo">-colRight4</div>
        </div>
      </div>
      <div class="cdr-row -rowRight">
        <div class="cdr-col _col1 -colRight5">
          <div class="row-demo">-colRight5</div>
        </div>
      </div>
      <div class="cdr-row -rowRight">
        <div class="cdr-col _col1 -colRight6">
          <div class="row-demo">-colRight6</div>
        </div>
      </div>
      <div class="cdr-row -rowRight">
        <div class="cdr-col _col1 -colRight7">
          <div class="row-demo">-colRight7</div>
        </div>
      </div>
      <div class="cdr-row -rowRight">
        <div class="cdr-col _col1 -colRight8">
          <div class="row-demo">-colRight8</div>
        </div>
      </div>
      <div class="cdr-row -rowRight">
        <div class="cdr-col _col1 -colRight9">
          <div class="row-demo">-colRight9</div>
        </div>
      </div>
      <div class="cdr-row -rowRight">
        <div class="cdr-col _col1 -colRight10">
          <div class="row-demo">-colRight10</div>
        </div>
      </div>
      <div class="cdr-row -rowRight">
        <div class="cdr-col _col1 -colRight11">
          <div class="row-demo">-colRight11</div>
        </div>
      </div>
    </div>

    <h4>cdr-row responsive row classes</h4>
    <h5>Medium breakpoint</h5>
    <p>_row2 _row4-md</p>
    <div data-backstop="row-md-sized">
      <div class="cdr-row _row2 _row4-md">
        <div class="cdr-col">
          <div class="row-demo">2, 4-md</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">2, 4-md</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">2, 4-md</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">2, 4-md</div>
        </div>
      </div>
    </div>
    <p>auto _row6-md</p>
    <div data-backstop="row-md-auto">
      <div class="cdr-row _row6-md">
        <div class="cdr-col">
          <div class="row-demo">6-md</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6-md</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6-md</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6-md</div>
        </div>
      </div>
    </div>
    <p>-rowNoGutter-md</p>
    <div data-backstop="row-md-noGutter">
      <div class="cdr-row _row6 -rowNoGutter-md">
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
      </div>
    </div>
    <p>-rowCenter-md</p>
    <div data-backstop="row-md-center">
      <div class="cdr-row _row6 -rowCenter-md">
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
      </div>
    </div>
    <p>-rowRight-md</p>
    <div data-backstop="row-md-right">
      <div class="cdr-row _row6 -rowRight-md">
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
      </div>
    </div>
    <p>-rowTop-md</p>
    <div data-backstop="row-md-top">
      <div class="cdr-row _row3 -rowTop-md">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolores perspiciatis iure officia doloribus, accusantium assumenda illum deleniti voluptas, suscipit quod cumque, mollitia! Minima debitis quia consequatur molestiae, consectetur error.</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
      </div>
    </div>
    <p>-rowMiddle-md</p>
    <div data-backstop="row-md-middle">
      <div class="cdr-row _row3 -rowMiddle-md">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolores perspiciatis iure officia doloribus, accusantium assumenda illum deleniti voluptas, suscipit quod cumque, mollitia! Minima debitis quia consequatur molestiae, consectetur error.</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
      </div>
    </div>
    <p>-rowBottom-md</p>
    <div data-backstop="row-md-bottom">
      <div class="cdr-row _row3 -rowBottom-md">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolores perspiciatis iure officia doloribus, accusantium assumenda illum deleniti voluptas, suscipit quod cumque, mollitia! Minima debitis quia consequatur molestiae, consectetur error.</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
      </div>
    </div>
    <p>-rowSpaceBetween-md</p>
    <div data-backstop="row-md-spaceBetween">
      <div class="cdr-row _row6 -rowSpaceBetween-md">
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
      </div>
    </div>
    <p>-rowSpaceAround-md</p>
    <div data-backstop="row-md-spaceAround">
      <div class="cdr-row _row6 -rowSpaceAround-md">
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
      </div>
    </div>
    <p>-rowColumn-md</p>
    <div data-backstop="row-md-column">
      <div class="cdr-row _row3 -rowColumn-md">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col _col3">
          <div class="row-demo">3</div>
        </div>
      </div>
    </div>

    <h5>Large breakpoint</h5>
    <p>_row2 _row4-lg</p>
    <div data-backstop="row-lg-sized">
      <div class="cdr-row _row2 _row4-lg">
        <div class="cdr-col">
          <div class="row-demo">2, 4-lg</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">2, 4-lg</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">2, 4-lg</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">2, 4-lg</div>
        </div>
      </div>
    </div>
    <p>auto _row3-lg</p>
    <div data-backstop="row-lg-auto">
      <div class="cdr-row _row3-lg">
        <div class="cdr-col">
          <div class="row-demo">3-lg</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3-lg</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3-lg</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3-lg</div>
        </div>
      </div>
    </div>
    <p>-rowNoGutter-lg</p>
    <div data-backstop="row-lg-noGutter">
      <div class="cdr-row _row6 -rowNoGutter-lg">
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
      </div>
    </div>
    <p>-rowCenter-lg</p>
    <div data-backstop="row-lg-center">
      <div class="cdr-row _row6 -rowCenter-lg">
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
      </div>
    </div>
    <p>-rowRight-lg</p>
    <div data-backstop="row-lg-right">
      <div class="cdr-row _row6 -rowRight-lg">
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
      </div>
    </div>
    <p>-rowTop-lg</p>
    <div data-backstop="row-lg-top">
      <div class="cdr-row _row3 -rowTop-lg">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolores perspiciatis iure officia doloribus, accusantium assumenda illum deleniti voluptas, suscipit quod cumque, mollitia! Minima debitis quia consequatur molestiae, consectetur error.</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
      </div>
    </div>
    <p>-rowMiddle-lg</p>
    <div data-backstop="row-lg-middle">
      <div class="cdr-row _row3 -rowMiddle-lg">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolores perspiciatis iure officia doloribus, accusantium assumenda illum deleniti voluptas, suscipit quod cumque, mollitia! Minima debitis quia consequatur molestiae, consectetur error.</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
      </div>
    </div>
    <p>-rowBottom-lg</p>
    <div data-backstop="row-lg-bottom">
      <div class="cdr-row _row3 -rowBottom-lg">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolores perspiciatis iure officia doloribus, accusantium assumenda illum deleniti voluptas, suscipit quod cumque, mollitia! Minima debitis quia consequatur molestiae, consectetur error.</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
      </div>
    </div>
    <p>-rowSpaceBetween-lg</p>
    <div data-backstop="row-lg-spaceBetween">
      <div class="cdr-row _row6 -rowSpaceBetween-lg">
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
      </div>
    </div>
    <p>-rowSpaceAround-lg</p>
    <div data-backstop="row-lg-spaceAround">
      <div class="cdr-row _row6 -rowSpaceAround-lg">
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
      </div>
    </div>
    <p>-rowColumn-lg</p>
    <div data-backstop="row-lg-column">
      <div class="cdr-row _row3 -rowColumn-lg">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col _col3">
          <div class="row-demo">3</div>
        </div>
      </div>
    </div>

    <h5>XLarge breakpoint</h5>
    <p>_row2 _row4-xl</p>
    <div data-backstop="row-xl-sized">
      <div class="cdr-row _row2 _row4-xl">
        <div class="cdr-col">
          <div class="row-demo">2, 4-xl</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">2, 4-xl</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">2, 4-xl</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">2, 4-xl</div>
        </div>
      </div>
    </div>
    <p>auto _row3-xl</p>
    <div data-backstop="row-xl-auto">
      <div class="cdr-row _row3-xl">
        <div class="cdr-col">
          <div class="row-demo">3-xl</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3-xl</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3-xl</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3-xl</div>
        </div>
      </div>
    </div>
    <p>-rowNoGutter-xl</p>
    <div data-backstop="row-xl-noGutter">
      <div class="cdr-row _row6 -rowNoGutter-xl">
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
      </div>
    </div>
    <p>-rowCenter-xl</p>
    <div data-backstop="row-xl-center">
      <div class="cdr-row _row6 -rowCenter-xl">
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
      </div>
    </div>
    <p>-rowRight-xl</p>
    <div data-backstop="row-xl-right">
      <div class="cdr-row _row6 -rowRight-xl">
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
      </div>
    </div>
    <p>-rowTop-xl</p>
    <div data-backstop="row-xl-top">
      <div class="cdr-row _row3 -rowTop-xl">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolores perspiciatis iure officia doloribus, accusantium assumenda illum deleniti voluptas, suscipit quod cumque, mollitia! Minima debitis quia consequatur molestiae, consectetur error.</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
      </div>
    </div>
    <p>-rowMiddle-xl</p>
    <div data-backstop="row-xl-middle">
      <div class="cdr-row _row3 -rowMiddle-xl">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolores perspiciatis iure officia doloribus, accusantium assumenda illum deleniti voluptas, suscipit quod cumque, mollitia! Minima debitis quia consequatur molestiae, consectetur error.</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
      </div>
    </div>
    <p>-rowBottom-xl</p>
    <div data-backstop="row-xl-bottom">
      <div class="cdr-row _row3 -rowBottom-xl">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolores perspiciatis iure officia doloribus, accusantium assumenda illum deleniti voluptas, suscipit quod cumque, mollitia! Minima debitis quia consequatur molestiae, consectetur error.</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
      </div>
    </div>
    <p>-rowSpaceBetween-xl</p>
    <div data-backstop="row-xl-spaceBetween">
      <div class="cdr-row _row6 -rowSpaceBetween-xl">
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
      </div>
    </div>
    <p>-rowSpaceAround-xl</p>
    <div data-backstop="row-xl-spaceAround">
      <div class="cdr-row _row6 -rowSpaceAround-xl">
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
      </div>
    </div>
    <p>-rowColumn-xl</p>
    <div data-backstop="row-xl-column">
      <div class="cdr-row _row3 -rowColumn-xl">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col _col3">
          <div class="row-demo">3</div>
        </div>
      </div>
    </div>

    <h5>XXLarge breakpoint</h5>
    <p>_row2 _row4-xxl</p>
    <div data-backstop="row-xxl-sized">
      <div class="cdr-row _row2 _row4-xxl">
        <div class="cdr-col">
          <div class="row-demo">2, 4-xxl</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">2, 4-xxl</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">2, 4-xxl</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">2, 4-xxl</div>
        </div>
      </div>
    </div>
    <p>auto _row3-xxl</p>
    <div data-backstop="row-xxl-auto">
      <div class="cdr-row _row3-xxl">
        <div class="cdr-col">
          <div class="row-demo">3-xxl</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3-xxl</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3-xxl</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3-xxl</div>
        </div>
      </div>
    </div>
    <p>-rowNoGutter-xxl</p>
    <div data-backstop="row-xxl-noGutter">
      <div class="cdr-row _row6 -rowNoGutter-xxl">
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
      </div>
    </div>
    <p>-rowCenter-xxl</p>
    <div data-backstop="row-xxl-center">
      <div class="cdr-row _row6 -rowCenter-xxl">
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
      </div>
    </div>
    <p>-rowRight-xxl</p>
    <div data-backstop="row-xxl-right">
      <div class="cdr-row _row6 -rowRight-xxl">
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
      </div>
    </div>
    <p>-rowTop-xxl</p>
    <div data-backstop="row-xxl-top">
      <div class="cdr-row _row3 -rowTop-xxl">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolores perspiciatis iure officia doloribus, accusantium assumenda illum deleniti voluptas, suscipit quod cumque, mollitia! Minima debitis quia consequatur molestiae, consectetur error.</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
      </div>
    </div>
    <p>-rowMiddle-xxl</p>
    <div data-backstop="row-xxl-middle">
      <div class="cdr-row _row3 -rowMiddle-xxl">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolores perspiciatis iure officia doloribus, accusantium assumenda illum deleniti voluptas, suscipit quod cumque, mollitia! Minima debitis quia consequatur molestiae, consectetur error.</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
      </div>
    </div>
    <p>-rowBottom-xxl</p>
    <div data-backstop="row-xxl-bottom">
      <div class="cdr-row _row3 -rowBottom-xxl">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolores perspiciatis iure officia doloribus, accusantium assumenda illum deleniti voluptas, suscipit quod cumque, mollitia! Minima debitis quia consequatur molestiae, consectetur error.</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
      </div>
    </div>
    <p>-rowSpaceBetween-xxl</p>
    <div data-backstop="row-xxl-spaceBetween">
      <div class="cdr-row _row6 -rowSpaceBetween-xxl">
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
      </div>
    </div>
    <p>-rowSpaceAround-xxl</p>
    <div data-backstop="row-xxl-SpaceAround">
      <div class="cdr-row _row6 -rowSpaceAround-xxl">
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">6</div>
        </div>
      </div>
    </div>
    <p>-rowColumn-xxl</p>
    <div data-backstop="row-xxl-column">
      <div class="cdr-row _row3 -rowColumn-xxl">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col _col3">
          <div class="row-demo">3</div>
        </div>
      </div>
    </div>

    <h4>Mix and match responsive row classes</h4>
    <p>1 > 2-md > 3-lg > 4-xl > 6-xxl</p>
    <div data-backstop="row-full-responsive">
      <div class="cdr-row _row1 _row2-md _row3-lg _row4-xl _row6-xxl">
        <div class="cdr-col">
          <div class="row-demo"></div>
        </div>
        <div class="cdr-col">
          <div class="row-demo"></div>
        </div>
        <div class="cdr-col">
          <div class="row-demo"></div>
        </div>
        <div class="cdr-col">
          <div class="row-demo"></div>
        </div>
        <div class="cdr-col">
          <div class="row-demo"></div>
        </div>
        <div class="cdr-col">
          <div class="row-demo"></div>
        </div>
      </div>
    </div>
    <p>normal > center > right > spaceAround > spaceBetween</p>
    <div data-backstop="row-justify-responsive">
      <div class="cdr-row _row6 -rowCenter-md -rowRight-lg -rowSpaceAround-xl -rowSpaceBetween-xxl">
        <div class="cdr-col">
          <div class="row-demo"></div>
        </div>
        <div class="cdr-col">
          <div class="row-demo"></div>
        </div>
      </div>
    </div>
    <p>normal > top > middle > bottom > column</p>
    <div data-backstop="row-alignment-responsive">
      <div class="cdr-row _row3 -rowTop-md -rowMiddle-lg -rowBottom-xl -rowColumn-xxl">
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolores culpa, sit iste, modi, cupiditate veritatis ratione aut omnis libero quae quas placeat eligendi voluptatibus asperiores totam numquam inventore accusamus!</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">3</div>
        </div>
      </div>
    </div>


    <h4>cdr-row responsive col classes</h4>
    
    <h5>Medium breakpoint</h5>
    <p>_col#</p>
    <div data-backstop="col-md-sized">
      <div class="cdr-row">
        <div class="cdr-col _col3-md">
          <div class="row-demo">auto > 3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo"></div>
        </div>
      </div>
    </div>
    <p>_colRight _colLeft</p>
    <div data-backstop="row-md-offset">
      <div class="cdr-row">
        <div class="cdr-col -colRight1-md">
          <div class="row-demo">-colRight1-md</div>
        </div>
        <div class="cdr-col -colLeft1-md">
          <div class="row-demo">-colLeft1-md</div>
        </div>
      </div>
    </div>
    <p>-colTop -colMiddle -colBottom</p>
    <div data-backstop="col-md-alignment">
      <div class="cdr-row">
        <div class="cdr-col -colTop-md">
          <div class="row-demo">-top</div>
        </div>
        <div class="cdr-col -colMiddle-md">
          <div class="row-demo">-mid</div>
        </div>
        <div class="cdr-col -colBottom-md">
          <div class="row-demo">-bot</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque odit illum quos praesentium eveniet, odio, commodi, quam quia nesciunt harum alias officia, mollitia sequi vel tempora rem eos exercitationem incidunt!</div>
        </div>
      </div>
    </div>

    <h5>Large breakpoint</h5>
    <p>_col#</p>
    <div data-backstop="col-lg-sized">
      <div class="cdr-row">
        <div class="cdr-col _col3-lg">
          <div class="row-demo">auto > 3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo"></div>
        </div>
      </div>
    </div>
    <p>_colRight _colLeft</p>
    <div data-backstop="col-lg-offset">
      <div class="cdr-row">
        <div class="cdr-col -colRight1-lg">
          <div class="row-demo">-colRight1-lg</div>
        </div>
        <div class="cdr-col -colLeft1-lg">
          <div class="row-demo">-colLeft1-lg</div>
        </div>
      </div>
    </div>
    <p>-colTop -colMiddle -colBottom</p>
    <div data-backstop="col-lg-alignment">
      <div class="cdr-row">
        <div class="cdr-col -colTop-lg">
          <div class="row-demo">-top</div>
        </div>
        <div class="cdr-col -colMiddle-lg">
          <div class="row-demo">-mid</div>
        </div>
        <div class="cdr-col -colBottom-lg">
          <div class="row-demo">-bot</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque odit illum quos praesentium eveniet, odio, commodi, quam quia nesciunt harum alias officia, mollitia sequi vel tempora rem eos exercitationem incidunt!</div>
        </div>
      </div>
    </div>

    <h5>XLarge breakpoint</h5>
    <p>_col#</p>
    <div data-backstop="col-xl-sized">
      <div class="cdr-row">
        <div class="cdr-col _col3-xl">
          <div class="row-demo">auto > 3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo"></div>
        </div>
      </div>
    </div>
    <p>_colRight _colLeft</p>
    <div data-backstop="col-xl-offset">
      <div class="cdr-row">
        <div class="cdr-col -colRight1-xl">
          <div class="row-demo">-colRight1-xl</div>
        </div>
        <div class="cdr-col -colLeft1-xl">
          <div class="row-demo">-colLeft1-xl</div>
        </div>
      </div>
    </div>
    <p>-colTop -colMiddle -colBottom</p>
    <div data-backstop="col-xl-alignment">
      <div class="cdr-row">
        <div class="cdr-col -colTop-xl">
          <div class="row-demo">-top</div>
        </div>
        <div class="cdr-col -colMiddle-xl">
          <div class="row-demo">-mid</div>
        </div>
        <div class="cdr-col -colBottom-xl">
          <div class="row-demo">-bot</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque odit illum quos praesentium eveniet, odio, commodi, quam quia nesciunt harum alias officia, mollitia sequi vel tempora rem eos exercitationem incidunt!</div>
        </div>
      </div>
    </div>

    <h5>XXLarge breakpoint</h5>
    <p>_col#</p>
    <div data-backstop="col-xxl-sized">
      <div class="cdr-row">
        <div class="cdr-col _col3-xxl">
          <div class="row-demo">auto > 3</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo"></div>
        </div>
      </div>
    </div>
    <p>_colRight _colLeft</p>
    <div data-backstop="col-xxl-offset">
      <div class="cdr-row">
        <div class="cdr-col -colRight1-xxl">
          <div class="row-demo">-colRight1-xxl</div>
        </div>
        <div class="cdr-col -colLeft1-xxl">
          <div class="row-demo">-colLeft1-xxl</div>
        </div>
      </div>
    </div>
    <p>-colTop -colMiddle -colBottom</p>
    <div data-backstop="col-xxl-alignment">
      <div class="cdr-row">
        <div class="cdr-col -colTop-xxl">
          <div class="row-demo">-top</div>
        </div>
        <div class="cdr-col -colMiddle-xxl">
          <div class="row-demo">-mid</div>
        </div>
        <div class="cdr-col -colBottom-xxl">
          <div class="row-demo">-bot</div>
        </div>
        <div class="cdr-col">
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque odit illum quos praesentium eveniet, odio, commodi, quam quia nesciunt harum alias officia, mollitia sequi vel tempora rem eos exercitationem incidunt!</div>
        </div>
      </div>
    </div>


    <h4>hiding columns</h4>
    <div data-backstop="col-sm-hide">
      <p>-colHide (hidden sm and up -- always)</p>
        <div class="cdr-row _row2">
          <div class="cdr-col -colHide">
            <div class="row-demo">hide &ge; sm</div>
          </div>
        </div>
      <p>-colHide-sm-down (hidden sm and below)</p>
      <div class="cdr-row _row2">
        <div class="cdr-col -colHide-sm-down">
          <div class="row-demo">hide &le; sm</div>
        </div>
      </div>
      <p>-colHide-sm-only (hidden only at sm)</p>
      <div class="cdr-row _row2">
        <div class="cdr-col -colHide-sm-only">
          <div class="row-demo">hide @ sm</div>
        </div>
      </div>
    </div>
    <div data-backstop="col-md-hide">
      <p>-colHide-md (hidden md and up)</p>
      <div class="cdr-row _row2">
        <div class="cdr-col -colHide-md">
          <div class="row-demo">hide &ge; md</div>
        </div>
      </div>
      <p>-colHide-md-down (hidden md and below)</p>
      <div class="cdr-row _row2">
        <div class="cdr-col -colHide-md-down">
          <div class="row-demo">hide &le; md</div>
        </div>
      </div>
      <p>-colHide-md-only (hidden only at md)</p>
      <div class="cdr-row _row2">
        <div class="cdr-col -colHide-md-only">
          <div class="row-demo">hide @ md</div>
        </div>
      </div>
    </div>
    <div data-backstop="col-lg-hide">
      <p>-colHide-lg (hidden lg and up)</p>
      <div class="cdr-row _row2">
        <div class="cdr-col -colHide-lg">
          <div class="row-demo">hide &ge; lg</div>
        </div>
      </div>
      <p>-colHide-lg-down (hidden lg and below)</p>
      <div class="cdr-row _row2">
        <div class="cdr-col -colHide-lg-down">
          <div class="row-demo">hide &le; lg</div>
        </div>
      </div>
      <p>-colHide-lg-only (hidden only at lg)</p>
      <div class="cdr-row _row2">
        <div class="cdr-col -colHide-lg-only">
          <div class="row-demo">hide @ lg</div>
        </div>
      </div>
    </div>
    <div data-backstop="col-xl-hide">
      <p>-colHide-xl (hidden xl and up)</p>
      <div class="cdr-row _row2">
        <div class="cdr-col -colHide-xl">
          <div class="row-demo">hide &ge; xl</div>
        </div>
      </div>
      <p>-colHide-xl-down (hidden xl and below)</p>
      <div class="cdr-row _row2">
        <div class="cdr-col -colHide-xl-down">
          <div class="row-demo">hide &le; xl</div>
        </div>
      </div>
      <p>-colHide-xl-only (hidden only at xl)</p>
      <div class="cdr-row _row2">
        <div class="cdr-col -colHide-xl-only">
          <div class="row-demo">hide @ xl</div>
        </div>
      </div>
    </div>
    <div data-backstop="col-xxl-hide">
      <p>-colHide-xxl (hidden xxl and up)</p>
      <div class="cdr-row _row2">
        <div class="cdr-col -colHide-xxl">
          <div class="row-demo">hide &ge; xxl</div>
        </div>
      </div>
      <p>-colHide-xxl-down (hidden xxl and below -- always)</p>
      <div class="cdr-row _row2">
        <div class="cdr-col -colHide-xxl-down">
          <div class="row-demo">hide &le; xxl</div>
        </div>
      </div>
      <p>-colHide-xxl-only (hidden only at xxl)</p>
      <div class="cdr-row _row2">
        <div class="cdr-col -colHide-xxl-only">
          <div class="row-demo">hide @ xxl</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'row',
  };
</script>

<style scoped>
  .row-demo {
    background-color: gray;
    text-align: center;
    padding: 10px;
    height: 100%;
    width: 100%;
  }
  
  .row-demo-wrap {
    background-color: lightgray;
  }
</style>
