<template>
  <div>
    <h2>The row</h2>

    <h3>cdr-row usage</h3>

    <h4>:cols="#"</h4>
    <div data-backstop="row-basic">
      <cdr-row :cols="1">
        <cdr-col>
          <div class="row-demo">1</div>
        </cdr-col>
      </cdr-row>

      <cdr-row :cols="2">
        <cdr-col>
          <div class="row-demo">2</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">2</div>
        </cdr-col>
      </cdr-row>

      <cdr-row :cols="3">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>

      <cdr-row :cols="4">
        <cdr-col>
          <div class="row-demo">4</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">4</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">4</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">4</div>
        </cdr-col>
      </cdr-row>

      <cdr-row :cols="5">
        <cdr-col>
          <div class="row-demo">5</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">5</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">5</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">5</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">5</div>
        </cdr-col>
      </cdr-row>

      <cdr-row :cols="6">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>

      <cdr-row :cols="7">
        <cdr-col>
          <div class="row-demo">7</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">7</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">7</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">7</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">7</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">7</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">7</div>
        </cdr-col>
      </cdr-row>

      <cdr-row :cols="8">
        <cdr-col>
          <div class="row-demo">8</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">8</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">8</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">8</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">8</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">8</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">8</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">8</div>
        </cdr-col>
      </cdr-row>

      <cdr-row :cols="9">
        <cdr-col>
          <div class="row-demo">9</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">9</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">9</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">9</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">9</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">9</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">9</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">9</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">9</div>
        </cdr-col>
      </cdr-row>

      <cdr-row :cols="10">
        <cdr-col>
          <div class="row-demo">10</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">10</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">10</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">10</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">10</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">10</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">10</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">10</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">10</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">10</div>
        </cdr-col>
      </cdr-row>

      <cdr-row :cols="11">
        <cdr-col>
          <div class="row-demo">11</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">11</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">11</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">11</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">11</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">11</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">11</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">11</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">11</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">11</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">11</div>
        </cdr-col>
      </cdr-row>

      <cdr-row :cols="12">
        <cdr-col>
          <div class="row-demo">12</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">12</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">12</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">12</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">12</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">12</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">12</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">12</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">12</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">12</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">12</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">12</div>
        </cdr-col>
      </cdr-row>

      <cdr-row :cols="2">
        <cdr-col>
          <div class="row-demo">2</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">2</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">2</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">2</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h4>(auto sizes)</h4>
    <div data-backstop="row-auto">
      <cdr-row>
        <cdr-col>
          <div class="row-demo">auto auto auto auto auto auto auto auto</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">auto</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">auto</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">auto</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h4>:gutter="0"</h4>
    <div data-backstop="row-noGutter">
      <cdr-row :cols="3" :gutter="0">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h4>:noWrap="true"</h4>
    <div data-backstop="row-noWrap">
      <cdr-row :cols="3" :noWrap="true">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h4>:justify="'left'"</h4>
    <div data-backstop="row-left">
      <cdr-row :cols="3" :justify="'left'">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h4>:justify="'center'"</h4>
    <div data-backstop="row-center">
      <cdr-row :cols="3" :justify="'center'">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h4>:justify="'right'"</h4>
    <div data-backstop="row-right">
      <cdr-row :cols="3" :justify="'right'">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h4>:justify="'between'"</h4>
    <div data-backstop="row-rowSpaceBetween">
      <cdr-row :cols="4" :justify="'between'">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h4>:justify="'around'"</h4>
    <div data-backstop="row-rowSpaceAround">
      <cdr-row :cols="4" :justify="'around'">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h4>:align="'top'"</h4>
    <div data-backstop="row-top">
      <cdr-row :cols="3" :align="'top'">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">
          3
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro assumenda aperiam officia corporis, repellat vitae reprehenderit nobis expedita! Neque molestiae tempora corrupti provident eos repellat est, ut, similique quaerat adipisci.</p>
          </div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h4>:align="'middle'"</h4>
    <div data-backstop="row-middle">
      <cdr-row :cols="3" :align="'middle'">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">
          3
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro assumenda aperiam officia corporis, repellat vitae reprehenderit nobis expedita! Neque molestiae tempora corrupti provident eos repellat est, ut, similique quaerat adipisci.</p>
          </div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h4>:align="'bottom'"</h4>
    <div data-backstop="row-bottom">
      <cdr-row :cols="3" :align="'bottom'">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">
          3
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro assumenda aperiam officia corporis, repellat vitae reprehenderit nobis expedita! Neque molestiae tempora corrupti provident eos repellat est, ut, similique quaerat adipisci.</p>
          </div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h4>:vertical="true"</h4>
    <div data-backstop="row-column">
      <cdr-row :cols="3" :vertical="true">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col :span="5">
          <div class="row-demo">5</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h3>cdr-col usage</h3>

    <h4>:span="#"</h4>
    <div data-backstop="col-basic">
      <cdr-row>
        <cdr-col :span="12">
          <div class="row-demo">12</div>
        </cdr-col>
        <cdr-col :span="11">
          <div class="row-demo">11</div>
        </cdr-col>
        <cdr-col :span="1">
          <div class="row-demo">1</div>
        </cdr-col>
        <cdr-col :span="10">
          <div class="row-demo">10</div>
        </cdr-col>
        <cdr-col :span="2">
          <div class="row-demo">2</div>
        </cdr-col>
        <cdr-col :span="9">
          <div class="row-demo">9</div>
        </cdr-col>
        <cdr-col :span="3">
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col :span="8">
          <div class="row-demo">8</div>
        </cdr-col>
        <cdr-col :span="4">
          <div class="row-demo">4</div>
        </cdr-col>
        <cdr-col :span="7">
          <div class="row-demo">7</div>
        </cdr-col>
        <cdr-col :span="5">
          <div class="row-demo">5</div>
        </cdr-col>
        <cdr-col :span="6">
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col :span="6">
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h4>mixing cdr-row :cols="#" and cdr-col :span="#"</h4>
    <div data-backstop="row-col-mix">
      <cdr-row :cols="3">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col :span="12">
          <div class="row-demo">12</div>
        </cdr-col>
        <cdr-col :span="11">
          <div class="row-demo">11</div>
        </cdr-col>
        <cdr-col :span="1">
          <div class="row-demo">1</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h4>:align-self</h4>
    <div data-backstop="col-alignment">
      <cdr-row :cols="4" style="height: 300px">
        <cdr-col :align-self="'top'">
          <div class="row-demo">:align-self="'top'"</div>
        </cdr-col>
        <cdr-col :align-self="'middle'">
          <div class="row-demo">:align-self="'middle'"</div>
        </cdr-col>
        <cdr-col :align-self="'bottom'">
          <div class="row-demo">:align-self="'bottom'"</div>
        </cdr-col>
        <cdr-col :align-self="'stretch'">
          <div class="row-demo">:align-self="'stretch'" (default)</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h4>:offset-left="#"</h4>
    <div data-backstop="col-offset-left">
      <cdr-row>
        <cdr-col :span="1" :offset-left="0">
          <div class="row-demo">0</div>
        </cdr-col>
      </cdr-row>
      <cdr-row>
        <cdr-col :span="1" :offset-left="1">
          <div class="row-demo">1</div>
        </cdr-col>
      </cdr-row>
      <cdr-row>
        <cdr-col :span="1" :offset-left="2">
          <div class="row-demo">2</div>
        </cdr-col>
      </cdr-row>
      <cdr-row>
        <cdr-col :span="1" :offset-left="3">
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
      <cdr-row>
        <cdr-col :span="1" :offset-left="4">
          <div class="row-demo">4</div>
        </cdr-col>
      </cdr-row>
      <cdr-row>
        <cdr-col :span="1" :offset-left="5">
          <div class="row-demo">5</div>
        </cdr-col>
      </cdr-row>
      <cdr-row>
        <cdr-col :span="1" :offset-left="6">
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>
      <cdr-row>
        <cdr-col :span="1" :offset-left="7">
          <div class="row-demo">7</div>
        </cdr-col>
      </cdr-row>
      <cdr-row>
        <cdr-col :span="1" :offset-left="8">
          <div class="row-demo">8</div>
        </cdr-col>
      </cdr-row>
      <cdr-row>
        <cdr-col :span="1" :offset-left="9">
          <div class="row-demo">9</div>
        </cdr-col>
      </cdr-row>
      <cdr-row>
        <cdr-col :span="1" :offset-left="10">
          <div class="row-demo">10</div>
        </cdr-col>
      </cdr-row>
      <cdr-row>
        <cdr-col :span="1" :offset-left="11">
          <div class="row-demo">11</div>
        </cdr-col>
      </cdr-row>
      <cdr-row>
        <cdr-col :span="2" :offset-left="2">
          <div class="row-demo">2</div>
        </cdr-col>
        <cdr-col :span="2" :offset-left="2">
          <div class="row-demo">2</div>
        </cdr-col>
        <cdr-col :span="2" :offset-left="2">
          <div class="row-demo">2</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h4>:offset-right="#"</h4>
    <div data-backstop="col-offset-right">
      <cdr-row>
        <cdr-col :span="2" :offset-right="2">
          <div class="row-demo">2</div>
        </cdr-col>
        <cdr-col :span="2" :offset-right="2">
          <div class="row-demo">2</div>
        </cdr-col>
        <cdr-col :span="2" :offset-right="2">
          <div class="row-demo">2</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h4>:offset-right="#" (with cdr-row :justify="'right'")</h4>
    <div data-backstop="col-right-row-right">
      <cdr-row :justify="'right'">
        <cdr-col :span="1" :offset-right="0">
          <div class="row-demo">0</div>
        </cdr-col>
      </cdr-row>
      <cdr-row :justify="'right'">
        <cdr-col :span="1" :offset-right="1">
          <div class="row-demo">1</div>
        </cdr-col>
      </cdr-row>
      <cdr-row :justify="'right'">
        <cdr-col :span="1" :offset-right="2">
          <div class="row-demo">2</div>
        </cdr-col>
      </cdr-row>
      <cdr-row :justify="'right'">
        <cdr-col :span="1" :offset-right="3">
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
      <cdr-row :justify="'right'">
        <cdr-col :span="1" :offset-right="4">
          <div class="row-demo">4</div>
        </cdr-col>
      </cdr-row>
      <cdr-row :justify="'right'">
        <cdr-col :span="1" :offset-right="5">
          <div class="row-demo">5</div>
        </cdr-col>
      </cdr-row>
      <cdr-row :justify="'right'">
        <cdr-col :span="1" :offset-right="6">
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>
      <cdr-row :justify="'right'">
        <cdr-col :span="1" :offset-right="7">
          <div class="row-demo">7</div>
        </cdr-col>
      </cdr-row>
      <cdr-row :justify="'right'">
        <cdr-col :span="1" :offset-right="8">
          <div class="row-demo">8</div>
        </cdr-col>
      </cdr-row>
      <cdr-row :justify="'right'">
        <cdr-col :span="1" :offset-right="9">
          <div class="row-demo">9</div>
        </cdr-col>
      </cdr-row>
      <cdr-row :justify="'right'">
        <cdr-col :span="1" :offset-right="10">
          <div class="row-demo">10</div>
        </cdr-col>
      </cdr-row>
      <cdr-row :justify="'right'">
        <cdr-col :span="1" :offset-right="11">
          <div class="row-demo">11</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h4>cdr-row responsive options</h4>

    <h5>Medium breakpoint</h5>

    <p>:cols="2" :cols-md="4"</p>
    <div data-backstop="row-md-sized">
      <cdr-row :cols="2" :cols-md="4">
        <cdr-col>
          <div class="row-demo">2, 4-md</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">2, 4-md</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">2, 4-md</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">2, 4-md</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:cols-md="6"</p>
    <div data-backstop="row-md-auto">
      <cdr-row :cols-md="6">
        <cdr-col>
          <div class="row-demo">auto, 6-md</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">auto, 6-md</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">auto, 6-md</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">auto, 6-md</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:gutter-md="0"</p>
    <div data-backstop="row-md-noGutter">
      <cdr-row :cols="6" :gutter-md="0">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:justify-md="'center'"</p>
    <div data-backstop="row-md-center">
      <cdr-row :cols="6" :justify-md="'center'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:justify-md="'right'"</p>
    <div data-backstop="row-md-right">
      <cdr-row :cols="6" :justify-md="'right'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:justify-md="'between'"</p>
    <div data-backstop="row-md-spaceBetween">
      <cdr-row :cols="6" :justify-md="'between'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:justify-md="'around'"</p>
    <div data-backstop="row-md-spaceAround">
      <cdr-row :cols="6" :justify-md="'around'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:align-md="'top'"</p>
    <div data-backstop="row-md-top">
      <cdr-row :cols="3" :align-md="'top'">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolores perspiciatis iure officia doloribus, accusantium assumenda illum deleniti voluptas, suscipit quod cumque, mollitia! Minima debitis quia consequatur molestiae, consectetur error.</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:align-md="'middle'"</p>
    <div data-backstop="row-md-middle">
      <cdr-row :cols="3" :align-md="'middle'">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolores perspiciatis iure officia doloribus, accusantium assumenda illum deleniti voluptas, suscipit quod cumque, mollitia! Minima debitis quia consequatur molestiae, consectetur error.</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:align-md="'bottom'"</p>
    <div data-backstop="row-md-bottom">
      <cdr-row :cols="3" :align-md="'bottom'">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolores perspiciatis iure officia doloribus, accusantium assumenda illum deleniti voluptas, suscipit quod cumque, mollitia! Minima debitis quia consequatur molestiae, consectetur error.</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:vertical-md="true"</p>
    <div data-backstop="row-md-column">
      <cdr-row :cols="3" :vertical-md="true">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col :span="3">
          <div class="row-demo">span 3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h5>Large breakpoint</h5>

    <p>:cols="2" :cols-lg="4"</p>
    <div data-backstop="row-lg-sized">
      <cdr-row :cols="2" :cols-lg="4">
        <cdr-col>
          <div class="row-demo">2, 4-lg</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">2, 4-lg</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">2, 4-lg</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">2, 4-lg</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:cols-lg="6"</p>
    <div data-backstop="row-lg-auto">
      <cdr-row :cols-lg="6">
        <cdr-col>
          <div class="row-demo">auto, 6-lg</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">auto, 6-lg</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">auto, 6-lg</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">auto, 6-lg</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:gutter-lg="0"</p>
    <div data-backstop="row-lg-noGutter">
      <cdr-row :cols="6" :gutter-lg="0">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:justify-lg="'center'"</p>
    <div data-backstop="row-lg-center">
      <cdr-row :cols="6" :justify-lg="'center'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:justify-lg="'right'"</p>
    <div data-backstop="row-lg-right">
      <cdr-row :cols="6" :justify-lg="'right'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:justify-lg="'between'"</p>
    <div data-backstop="row-lg-spaceBetween">
      <cdr-row :cols="6" :justify-lg="'between'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:justify-lg="'around'"</p>
    <div data-backstop="row-lg-spaceAround">
      <cdr-row :cols="6" :justify-lg="'around'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:align-lg="'top'"</p>
    <div data-backstop="row-lg-top">
      <cdr-row :cols="3" :align-lg="'top'">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolores perspiciatis iure officia doloribus, accusantium assumenda illum deleniti voluptas, suscipit quod cumque, mollitia! Minima debitis quia consequatur molestiae, consectetur error.</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:align-lg="'middle'"</p>
    <div data-backstop="row-lg-middle">
      <cdr-row :cols="3" :align-lg="'middle'">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolores perspiciatis iure officia doloribus, accusantium assumenda illum deleniti voluptas, suscipit quod cumque, mollitia! Minima debitis quia consequatur molestiae, consectetur error.</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:align-lg="'bottom'"</p>
    <div data-backstop="row-lg-bottom">
      <cdr-row :cols="3" :align-lg="'bottom'">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolores perspiciatis iure officia doloribus, accusantium assumenda illum deleniti voluptas, suscipit quod cumque, mollitia! Minima debitis quia consequatur molestiae, consectetur error.</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:vertical-lg="true"</p>
    <div data-backstop="row-lg-column">
      <cdr-row :cols="3" :vertical-lg="true">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col :span="3">
          <div class="row-demo">span 3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h5>XLarge breakpoint</h5>

    <p>:cols="2" :cols-xl="4"</p>
    <div data-backstop="row-xl-sized">
      <cdr-row :cols="2" :cols-xl="4">
        <cdr-col>
          <div class="row-demo">2, 4-xl</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">2, 4-xl</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">2, 4-xl</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">2, 4-xl</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:cols-xl="6"</p>
    <div data-backstop="row-xl-auto">
      <cdr-row :cols-xl="6">
        <cdr-col>
          <div class="row-demo">auto, 6-xl</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">auto, 6-xl</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">auto, 6-xl</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">auto, 6-xl</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:gutter-xl="0"</p>
    <div data-backstop="row-xl-noGutter">
      <cdr-row :cols="6" :gutter-xl="0">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:justify-xl="'center'"</p>
    <div data-backstop="row-xl-center">
      <cdr-row :cols="6" :justify-xl="'center'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:justify-xl="'right'"</p>
    <div data-backstop="row-xl-right">
      <cdr-row :cols="6" :justify-xl="'right'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:justify-xl="'between'"</p>
    <div data-backstop="row-xl-spaceBetween">
      <cdr-row :cols="6" :justify-xl="'between'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:justify-xl="'around'"</p>
    <div data-backstop="row-xl-spaceAround">
      <cdr-row :cols="6" :justify-xl="'around'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:align-xl="'top'"</p>
    <div data-backstop="row-xl-top">
      <cdr-row :cols="3" :align-xl="'top'">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolores perspiciatis iure officia doloribus, accusantium assumenda illum deleniti voluptas, suscipit quod cumque, mollitia! Minima debitis quia consequatur molestiae, consectetur error.</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:align-xl="'middle'"</p>
    <div data-backstop="row-xl-middle">
      <cdr-row :cols="3" :align-xl="'middle'">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolores perspiciatis iure officia doloribus, accusantium assumenda illum deleniti voluptas, suscipit quod cumque, mollitia! Minima debitis quia consequatur molestiae, consectetur error.</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:align-xl="'bottom'"</p>
    <div data-backstop="row-xl-bottom">
      <cdr-row :cols="3" :align-xl="'bottom'">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolores perspiciatis iure officia doloribus, accusantium assumenda illum deleniti voluptas, suscipit quod cumque, mollitia! Minima debitis quia consequatur molestiae, consectetur error.</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:vertical-xl="true"</p>
    <div data-backstop="row-xl-column">
      <cdr-row :cols="3" :vertical-xl="true">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col :span="3">
          <div class="row-demo">span 3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h5>Xxl breakpoint</h5>

    <p>:cols="2" :cols-xxl="4"</p>
    <div data-backstop="row-xxl-sized">
      <cdr-row :cols="2" :cols-xxl="4">
        <cdr-col>
          <div class="row-demo">2, 4-xxl</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">2, 4-xxl</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">2, 4-xxl</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">2, 4-xxl</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:cols-xxl="6"</p>
    <div data-backstop="row-xxl-auto">
      <cdr-row :cols-xxl="6">
        <cdr-col>
          <div class="row-demo">auto, 6-xxl</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">auto, 6-xxl</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">auto, 6-xxl</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">auto, 6-xxl</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:gutter-xxl="0"</p>
    <div data-backstop="row-xxl-noGutter">
      <cdr-row :cols="6" :gutter-xxl="0">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:justify-xxl="'center'"</p>
    <div data-backstop="row-xxl-center">
      <cdr-row :cols="6" :justify-xxl="'center'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:justify-xxl="'right'"</p>
    <div data-backstop="row-xxl-right">
      <cdr-row :cols="6" :justify-xxl="'right'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:justify-xxl="'between'"</p>
    <div data-backstop="row-xxl-spaceBetween">
      <cdr-row :cols="6" :justify-xxl="'between'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:justify-xxl="'around'"</p>
    <div data-backstop="row-xxl-spaceAround">
      <cdr-row :cols="6" :justify-xxl="'around'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:align-xxl="'top'"</p>
    <div data-backstop="row-xxl-top">
      <cdr-row :cols="3" :align-xxl="'top'">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolores perspiciatis iure officia doloribus, accusantium assumenda illum deleniti voluptas, suscipit quod cumque, mollitia! Minima debitis quia consequatur molestiae, consectetur error.</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:align-xxl="'middle'"</p>
    <div data-backstop="row-xxl-middle">
      <cdr-row :cols="3" :align-xxl="'middle'">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolores perspiciatis iure officia doloribus, accusantium assumenda illum deleniti voluptas, suscipit quod cumque, mollitia! Minima debitis quia consequatur molestiae, consectetur error.</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:align-xxl="'bottom'"</p>
    <div data-backstop="row-xxl-bottom">
      <cdr-row :cols="3" :align-xxl="'bottom'">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolores perspiciatis iure officia doloribus, accusantium assumenda illum deleniti voluptas, suscipit quod cumque, mollitia! Minima debitis quia consequatur molestiae, consectetur error.</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>:vertical-xxl="true"</p>
    <div data-backstop="row-xxl-column">
      <cdr-row :cols="3" :vertical-xxl="true">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col :span="3">
          <div class="row-demo">span 3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h4>Mix and match responsive row classes</h4>
    <p>1 > 2-md > 3-lg > 4-xl > 6-xxl</p>
    <div data-backstop="row-full-responsive">
      <cdr-row :cols="1" :cols-md="2" :cols-lg="3" :cols-xl="4" :cols-xxl="6">
        <cdr-col>
          <div class="row-demo"></div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo"></div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo"></div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo"></div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo"></div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo"></div>
        </cdr-col>
      </cdr-row>
    </div>
    <p>:justify (default > center > right > spaceAround > spaceBetween)</p>
    <div data-backstop="row-justify-responsive">
      <cdr-row :cols="6" :justify-md="'center'" :justify-lg="'right'" :justify-xl="'around'" :justify-xxl="'between'">
        <cdr-col>
          <div class="row-demo"></div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo"></div>
        </cdr-col>
      </cdr-row>
    </div>
    <p>:align (default > top > middle > bottom) > :vertical</p>
    <div data-backstop="row-alignment-responsive">
      <cdr-row :cols="3" :align-md="'top'" :align-lg="'middle'" :align-xl="'bottom'" :vertical-xxl="true">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolores culpa, sit iste, modi, cupiditate veritatis ratione aut omnis libero quae quas placeat eligendi voluptatibus asperiores totam numquam inventore accusamus!</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>


    <h4>cdr-col responsive options</h4>
    
    <h5>Medium breakpoint</h5>
    <p>:span-md="#"</p>
    <div data-backstop="col-md-sized">
      <cdr-row>
        <cdr-col :span-md="3">
          <div class="row-demo">auto, 3-md</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">auto</div>
        </cdr-col>
      </cdr-row>
    </div>
    <p>:offset-right-md="1" :offset-left-md="1"</p>
    <div data-backstop="row-md-offset">
      <cdr-row>
        <cdr-col :offset-right-md="1">
          <div class="row-demo">right 1</div>
        </cdr-col>
        <cdr-col :offset-left-md="1">
          <div class="row-demo">left 1</div>
        </cdr-col>
      </cdr-row>
    </div>
    <p>:align-self-md</p>
    <div data-backstop="col-md-alignment">
      <cdr-row>
        <cdr-col :align-self-md="'top'">
          <div class="row-demo">top</div>
        </cdr-col>
        <cdr-col :align-self-md="'middle'">
          <div class="row-demo">middle</div>
        </cdr-col>
        <cdr-col :align-self-md="'bottom'">
          <div class="row-demo">bottom</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque odit illum quos praesentium eveniet, odio, commodi, quam quia nesciunt harum alias officia, mollitia sequi vel tempora rem eos exercitationem incidunt!</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h5>Large breakpoint</h5>
    <p>:span-lg="#"</p>
    <div data-backstop="col-lg-sized">
      <cdr-row>
        <cdr-col :span-lg="3">
          <div class="row-demo">auto, 3-lg</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">auto</div>
        </cdr-col>
      </cdr-row>
    </div>
    <p>:offset-right-lg="1" :offset-left-lg="1"</p>
    <div data-backstop="row-lg-offset">
      <cdr-row>
        <cdr-col :offset-right-lg="1">
          <div class="row-demo">right 1</div>
        </cdr-col>
        <cdr-col :offset-left-lg="1">
          <div class="row-demo">left 1</div>
        </cdr-col>
      </cdr-row>
    </div>
    <p>:align-self-lg</p>
    <div data-backstop="col-lg-alignment">
      <cdr-row>
        <cdr-col :align-self-lg="'top'">
          <div class="row-demo">top</div>
        </cdr-col>
        <cdr-col :align-self-lg="'middle'">
          <div class="row-demo">middle</div>
        </cdr-col>
        <cdr-col :align-self-lg="'bottom'">
          <div class="row-demo">bottom</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque odit illum quos praesentium eveniet, odio, commodi, quam quia nesciunt harum alias officia, mollitia sequi vel tempora rem eos exercitationem incidunt!</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h5>XLarge breakpoint</h5>
    <p>:span-xl="#"</p>
    <div data-backstop="col-xl-sized">
      <cdr-row>
        <cdr-col :span-xl="3">
          <div class="row-demo">auto, 3-xl</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">auto</div>
        </cdr-col>
      </cdr-row>
    </div>
    <p>:offset-right-xl="1" :offset-left-xl="1"</p>
    <div data-backstop="row-xl-offset">
      <cdr-row>
        <cdr-col :offset-right-xl="1">
          <div class="row-demo">right 1</div>
        </cdr-col>
        <cdr-col :offset-left-xl="1">
          <div class="row-demo">left 1</div>
        </cdr-col>
      </cdr-row>
    </div>
    <p>:align-self-xl</p>
    <div data-backstop="col-xl-alignment">
      <cdr-row>
        <cdr-col :align-self-xl="'top'">
          <div class="row-demo">top</div>
        </cdr-col>
        <cdr-col :align-self-xl="'middle'">
          <div class="row-demo">middle</div>
        </cdr-col>
        <cdr-col :align-self-xl="'bottom'">
          <div class="row-demo">bottom</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque odit illum quos praesentium eveniet, odio, commodi, quam quia nesciunt harum alias officia, mollitia sequi vel tempora rem eos exercitationem incidunt!</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h5>XXLarge breakpoint</h5>
    <p>:span-xxl="#"</p>
    <div data-backstop="col-xxl-sized">
      <cdr-row>
        <cdr-col :span-xxl="3">
          <div class="row-demo">auto, 3-xxl</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">auto</div>
        </cdr-col>
      </cdr-row>
    </div>
    <p>:offset-right-xxl="1" :offset-left-xxl="1"</p>
    <div data-backstop="row-xxl-offset">
      <cdr-row>
        <cdr-col :offset-right-xxl="1">
          <div class="row-demo">right 1</div>
        </cdr-col>
        <cdr-col :offset-left-xxl="1">
          <div class="row-demo">left 1</div>
        </cdr-col>
      </cdr-row>
    </div>
    <p>:align-self-xxl</p>
    <div data-backstop="col-xxl-alignment">
      <cdr-row>
        <cdr-col :align-self-xxl="'top'">
          <div class="row-demo">top</div>
        </cdr-col>
        <cdr-col :align-self-xxl="'middle'">
          <div class="row-demo">middle</div>
        </cdr-col>
        <cdr-col :align-self-xxl="'bottom'">
          <div class="row-demo">bottom</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque odit illum quos praesentium eveniet, odio, commodi, quam quia nesciunt harum alias officia, mollitia sequi vel tempora rem eos exercitationem incidunt!</div>
        </cdr-col>
      </cdr-row>
    </div>


    <h4>hiding columns</h4>
    <div data-backstop="col-sm-hide">
      <p>:hide="'up'" (hidden sm and up -- always)</p>
      <cdr-row :cols="2">
        <cdr-col :hide="'up'">
          <div class="row-demo">hide &ge; sm</div>
        </cdr-col>
      </cdr-row>
      <p>:hide="'down'" (hidden sm and below)</p>
      <cdr-row :cols="2">
        <cdr-col :hide="'down'">
          <div class="row-demo">hide &le; sm</div>
        </cdr-col>
      </cdr-row>
      <p>:hide="'only'" (hidden only at sm)</p>
      <cdr-row :cols="2">
        <cdr-col :hide="'only'">
          <div class="row-demo">hide @ sm</div>
        </cdr-col>
      </cdr-row>
    </div>
    <div data-backstop="col-md-hide">
      <p>:hide-md="'up'" (hidden md and up)</p>
      <cdr-row :cols="2">
        <cdr-col :hide-md="'up'">
          <div class="row-demo">hide &ge; md</div>
        </cdr-col>
      </cdr-row>
      <p>:hide-md="'down'" (hidden md and below)</p>
      <cdr-row :cols="2">
        <cdr-col :hide-md="'down'">
          <div class="row-demo">hide &le; md</div>
        </cdr-col>
      </cdr-row>
      <p>:hide-md="'only'" (hidden only at md)</p>
      <cdr-row :cols="2">
        <cdr-col :hide-md="'only'">
          <div class="row-demo">hide @ md</div>
        </cdr-col>
      </cdr-row>
    </div>
    <div data-backstop="col-lg-hide">
       <p>:hide-lg="'up'" (hidden lg and up)</p>
      <cdr-row :cols="2">
        <cdr-col :hide-lg="'up'">
          <div class="row-demo">hide &ge; lg</div>
        </cdr-col>
      </cdr-row>
      <p>:hide-lg="'down'" (hidden lg and below)</p>
      <cdr-row :cols="2">
        <cdr-col :hide-lg="'down'">
          <div class="row-demo">hide &le; lg</div>
        </cdr-col>
      </cdr-row>
      <p>:hide-lg="'only'" (hidden only at lg)</p>
      <cdr-row :cols="2">
        <cdr-col :hide-lg="'only'">
          <div class="row-demo">hide @ lg</div>
        </cdr-col>
      </cdr-row>
    </div>
    <div data-backstop="col-xl-hide">
       <p>:hide-xl="'up'" (hidden xl and up)</p>
      <cdr-row :cols="2">
        <cdr-col :hide-xl="'up'">
          <div class="row-demo">hide &ge; xl</div>
        </cdr-col>
      </cdr-row>
      <p>:hide-xl="'down'" (hidden xl and below)</p>
      <cdr-row :cols="2">
        <cdr-col :hide-xl="'down'">
          <div class="row-demo">hide &le; xl</div>
        </cdr-col>
      </cdr-row>
      <p>:hide-xl="'only'" (hidden only at xl)</p>
      <cdr-row :cols="2">
        <cdr-col :hide-xl="'only'">
          <div class="row-demo">hide @ xl</div>
        </cdr-col>
      </cdr-row>
    </div>
    <div data-backstop="col-xxl-hide">
       <p>:hide-xxl="'up'" (hidden xxl and up)</p>
      <cdr-row :cols="2">
        <cdr-col :hide-xxl="'up'">
          <div class="row-demo">hide &ge; xxl</div>
        </cdr-col>
      </cdr-row>
      <p>:hide-xxl="'down'" (hidden xxl and below -- always)</p>
      <cdr-row :cols="2">
        <cdr-col :hide-xxl="'down'">
          <div class="row-demo">hide &le; xxl</div>
        </cdr-col>
      </cdr-row>
      <p>:hide-xxl="'only'" (hidden only at xxl)</p>
      <cdr-row :cols="2">
        <cdr-col :hide-xxl="'only'">
          <div class="row-demo">hide @ xxl</div>
        </cdr-col>
      </cdr-row>
    </div>

    <p>Complex Mosaic/Metro/Masonry-ish Demo</p>
    <div data-backstop="row-mosaic">
      <cdr-row :cols="1" :cols-md="4">
        <cdr-col>
          <div class="row-demo">One</div>
        </cdr-col>
        <cdr-col :cols="7">
          <div class="row-demo">Two</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">Three</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">Four</div>
        </cdr-col>
        <cdr-col :span="12" :isRow="true">
          <cdr-col :span="12" :span-md="9" :isRow="true">
            <cdr-col :span="12" :span-md="4">
              <div class="row-demo">
                Five
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, labore. Quos dolor tempore accusamus eius, voluptas, ipsum nulla. At fugiat quas est modi autem quam dolores maxime, provident commodi alias.</p>
              </div>
            </cdr-col>
            <cdr-col :span="12" :span-md="8" :isRow="true" :cols="1" :cols-md="2">
              <cdr-col>
                <div class="row-demo">Six</div>
              </cdr-col>
              <cdr-col>
                <div class="row-demo">Seven</div>
              </cdr-col>
              <cdr-col :span="12">
                <div class="row-demo">Eight</div>
              </cdr-col>
            </cdr-col>
            <cdr-col :span="12" :span-md="9">
              <div class="row-demo">
                Nine
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos minima aliquam reprehenderit iusto ratione nihil ipsum, perferendis quasi nulla ad quis. Consequuntur odio blanditiis aliquid voluptatem, veniam porro, ad assumenda!</p>
              </div>
            </cdr-col>
            <cdr-col :span="12" :span-md="3">
              <div class="row-demo">
                Ten
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </cdr-col>
          </cdr-col>
          <cdr-col :span="12" :span-md="3">
            <div class="row-demo">
              Eleven
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis deserunt, at, illum, earum quibusdam temporibus, molestiae doloremque iure ad est pariatur? Minima, fugit, accusantium. Aspernatur consectetur, labore enim ratione ducimus.</p>
            </div>
          </cdr-col>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">
            Twelve
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </cdr-col>
        <cdr-col :span="12" :span-md="6">
          <div class="row-demo">
            Thirteen
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque suscipit cum nemo aperiam esse, error ipsam, at aliquam similique optio est quaerat impedit id hic asperiores veritatis unde quod voluptatibus.</p>
          </div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">
            Fourteen
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </cdr-col>
      </cdr-row>
    </div>

  </div>
</template>

<script>
  import cdrRow from '../../components/layouts/Row';
  import cdrCol from '../../components/layouts/Col';

  export default {
    name: 'grid',
    components: { cdrRow, cdrCol },
  };
</script>

<style scoped>
  .row-demo {
    background-color: gray;
    text-align: center;
    padding: 10px;
    width: 100%;
  }
  
  .row-demo-wrap {
    background-color: lightgray;
  }
</style>
