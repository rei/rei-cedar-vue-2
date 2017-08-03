<cdr-tab-docs>
  <div class="well well-tabs" role="tabpanel" data-example-id="togglable-tabs">
    <ul id="{ opts.elementId }" class="nav-tabs" role="tablist">
      <li role="presentation" class="active"><a href="#usage" id="usage-tab" role="tab" data-toggle="tab" aria-controls="usage" aria-expanded="true">Usage</a></li>
      <li role="presentation"><a href="#implementation" role="tab" id="implementation-tab" data-toggle="tab" aria-controls="implementation">implementation</a></li>
    </ul>
    <div id="usageContent" class="tab-content">
      <div role="tabpanel" class="tab-pane fade in active" id="usage" aria-labelledBy="usage-tab">
        <yield from="usageContent" />
      </div>
      <div role="tabpanel" class="tab-pane fade" id="implementation" aria-labelledBy="implementation-tab">
        <yield from="implementationContent" />
      </div>
    </div>
  </div>
</cdr-tab-docs>
