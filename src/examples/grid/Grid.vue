<template>
  <div>
    <h2>The row</h2>

    <h3>cdr-row usage</h3>
    <div data-backstop="row-basic">
    <h4>:cols="#"</h4>
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

    <h4>(auto sizes)</h4>
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

    <h4>:gutter="'none'"</h4>
      <cdr-row :cols="3" :gutter="'none'">
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

    <h4>:nowrap="true"</h4>
      <cdr-row :cols="3" :nowrap="true">
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

    <h4>:justify="'left'"</h4>
      <cdr-row :cols="3" :justify="'left'">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>

    <h4>:justify="'center'"</h4>
      <cdr-row :cols="3" :justify="'center'">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>

    <h4>:justify="'right'"</h4>
      <cdr-row :cols="3" :justify="'right'">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>

    <h4>:justify="'between'"</h4>
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

    <h4>:justify="'around'"</h4>
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

    <h4>:align="'top'"</h4>
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

    <h4>:align="'middle'"</h4>
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

    <h4>:align="'bottom'"</h4>
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

    <h4>:vertical="true"</h4>
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

    <h3>cdr-col usage</h3>

    <h4>:span="#"</h4>
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

    <h4>mixing cdr-row :cols="#" and cdr-col :span="#"</h4>
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

    <h4>:align-self</h4>
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

    <h4>:offset-left="#"</h4>
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

    <h4>:offset-right="#"</h4>
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

    <h4>:offset-right="#" (with cdr-row :justify="'right'")</h4>
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
    
    <div data-backstop="row-md">
    <p>:cols="2" :cols-md="4"</p>
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

    <p>:cols-md="6"</p>
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

    <p>:gutter-md="'none'"</p>
      <cdr-row :cols="6" :gutter-md="'none'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>

    <p>:justify-md="'center'"</p>
      <cdr-row :cols="6" :justify-md="'center'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>

    <p>:justify-md="'right'"</p>
      <cdr-row :cols="6" :justify-md="'right'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>

    <p>:justify-md="'between'"</p>
      <cdr-row :cols="6" :justify-md="'between'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>

    <p>:justify-md="'around'"</p>
      <cdr-row :cols="6" :justify-md="'around'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>

    <p>:align-md="'top'"</p>
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

    <p>:align-md="'middle'"</p>
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

    <p>:align-md="'bottom'"</p>
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

    <p>:vertical-md="true"</p>
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

    <p>:wrap-md="true"</p>
      <cdr-row :cols="3" :nowrap="true" :wrap-md="true">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col :span="6">
          <div class="row-demo">span 6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>

    <p>:nowrap-md="true"</p>
      <cdr-row :cols="3" :nowrap-md="true">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col :span="6">
          <div class="row-demo">span 6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h5>Large breakpoint</h5>

    <div data-backstop="row-lg">
    <p>:cols="2" :cols-lg="4"</p>
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

    <p>:cols-lg="6"</p>
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

    <p>:gutter-lg="'none'"</p>
      <cdr-row :cols="6" :gutter-lg="'none'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>

    <p>:justify-lg="'center'"</p>
      <cdr-row :cols="6" :justify-lg="'center'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>

    <p>:justify-lg="'right'"</p>
      <cdr-row :cols="6" :justify-lg="'right'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>

    <p>:justify-lg="'between'"</p>
      <cdr-row :cols="6" :justify-lg="'between'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>

    <p>:justify-lg="'around'"</p>
      <cdr-row :cols="6" :justify-lg="'around'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>

    <p>:align-lg="'top'"</p>
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

    <p>:align-lg="'middle'"</p>
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

    <p>:align-lg="'bottom'"</p>
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

    <p>:vertical-lg="true"</p>
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

    <p>:wrap-lg="true"</p>
      <cdr-row :cols="3" :nowrap="true" :wrap-lg="true">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col :span="6">
          <div class="row-demo">span 6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>

    <p>:nowrap-lg="true"</p>
      <cdr-row :cols="3" :nowrap-lg="true">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col :span="6">
          <div class="row-demo">span 6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h5>XLarge breakpoint</h5>

    <div data-backstop="row-xl">
    <p>:cols="2" :cols-xl="4"</p>
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

    <p>:cols-xl="6"</p>
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

    <p>:gutter-xl="'none'"</p>
      <cdr-row :cols="6" :gutter-xl="'none'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>

    <p>:justify-xl="'center'"</p>
      <cdr-row :cols="6" :justify-xl="'center'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>

    <p>:justify-xl="'right'"</p>
      <cdr-row :cols="6" :justify-xl="'right'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>

    <p>:justify-xl="'between'"</p>
      <cdr-row :cols="6" :justify-xl="'between'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>

    <p>:justify-xl="'around'"</p>
      <cdr-row :cols="6" :justify-xl="'around'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>

    <p>:align-xl="'top'"</p>
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

    <p>:align-xl="'middle'"</p>
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

    <p>:align-xl="'bottom'"</p>
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

    <p>:vertical-xl="true"</p>
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

    <p>:wrap-xl="true"</p>
      <cdr-row :cols="3" :nowrap="true" :wrap-xl="true">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col :span="6">
          <div class="row-demo">span 6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>

    <p>:nowrap-xl="true"</p>
      <cdr-row :cols="3" :nowrap-xl="true">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col :span="6">
          <div class="row-demo">span 6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>
    </div>

    <h5>Xxl breakpoint</h5>

    <div data-backstop="row-xxl">
    <p>:cols="2" :cols-xxl="4"</p>
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

    <p>:cols-xxl="6"</p>
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

    <p>:gutter-xxl="'none'"</p>
      <cdr-row :cols="6" :gutter-xxl="'none'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>

    <p>:justify-xxl="'center'"</p>
      <cdr-row :cols="6" :justify-xxl="'center'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>

    <p>:justify-xxl="'right'"</p>
      <cdr-row :cols="6" :justify-xxl="'right'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>

    <p>:justify-xxl="'between'"</p>
      <cdr-row :cols="6" :justify-xxl="'between'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>

    <p>:justify-xxl="'around'"</p>
      <cdr-row :cols="6" :justify-xxl="'around'">
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">6</div>
        </cdr-col>
      </cdr-row>

    <p>:align-xxl="'top'"</p>
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

    <p>:align-xxl="'middle'"</p>
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

    <p>:align-xxl="'bottom'"</p>
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

    <p>:vertical-xxl="true"</p>
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

    <p>:wrap-xxl="true"</p>
      <cdr-row :cols="3" :nowrap="true" :wrap-xxl="true">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col :span="6">
          <div class="row-demo">span 6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
      </cdr-row>

    <p>:nowrap-xxl="true"</p>
      <cdr-row :cols="3" :nowrap-xxl="true">
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col :span="6">
          <div class="row-demo">span 6</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">3</div>
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
    <p>:justify (default > center > right > around > between)</p>
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
    
    <div data-backstop="col-md">
    <h5>Medium breakpoint</h5>
    <p>:span-md="#"</p>
      <cdr-row>
        <cdr-col :span-md="3">
          <div class="row-demo">auto, 3-md</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">auto</div>
        </cdr-col>
      </cdr-row>
    <p>:offset-right-md="1" :offset-left-md="1"</p>
      <cdr-row>
        <cdr-col :offset-right-md="1">
          <div class="row-demo">right 1</div>
        </cdr-col>
        <cdr-col :offset-left-md="1">
          <div class="row-demo">left 1</div>
        </cdr-col>
      </cdr-row>
    <p>:align-self-md</p>
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

    <div data-backstop="col-lg">
    <h5>Large breakpoint</h5>
    <p>:span-lg="#"</p>
      <cdr-row>
        <cdr-col :span-lg="3">
          <div class="row-demo">auto, 3-lg</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">auto</div>
        </cdr-col>
      </cdr-row>
    <p>:offset-right-lg="1" :offset-left-lg="1"</p>
      <cdr-row>
        <cdr-col :offset-right-lg="1">
          <div class="row-demo">right 1</div>
        </cdr-col>
        <cdr-col :offset-left-lg="1">
          <div class="row-demo">left 1</div>
        </cdr-col>
      </cdr-row>
    <p>:align-self-lg</p>
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

    <div data-backstop="col-xl">
    <h5>XLarge breakpoint</h5>
    <p>:span-xl="#"</p>
      <cdr-row>
        <cdr-col :span-xl="3">
          <div class="row-demo">auto, 3-xl</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">auto</div>
        </cdr-col>
      </cdr-row>
    <p>:offset-right-xl="1" :offset-left-xl="1"</p>
      <cdr-row>
        <cdr-col :offset-right-xl="1">
          <div class="row-demo">right 1</div>
        </cdr-col>
        <cdr-col :offset-left-xl="1">
          <div class="row-demo">left 1</div>
        </cdr-col>
      </cdr-row>
    <p>:align-self-xl</p>
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

    <div data-backstop="col-xxl">
    <h5>XXLarge breakpoint</h5>
    <p>:span-xxl="#"</p>
      <cdr-row>
        <cdr-col :span-xxl="3">
          <div class="row-demo">auto, 3-xxl</div>
        </cdr-col>
        <cdr-col>
          <div class="row-demo">auto</div>
        </cdr-col>
      </cdr-row>
    <p>:offset-right-xxl="1" :offset-left-xxl="1"</p>
      <cdr-row>
        <cdr-col :offset-right-xxl="1">
          <div class="row-demo">right 1</div>
        </cdr-col>
        <cdr-col :offset-left-xxl="1">
          <div class="row-demo">left 1</div>
        </cdr-col>
      </cdr-row>
    <p>:align-self-xxl</p>
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


    <div data-backstop="col-hide">
    <h4>hiding columns</h4>
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
