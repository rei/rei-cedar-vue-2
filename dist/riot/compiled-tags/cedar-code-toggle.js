riot.tag2('cedar-code-toggle', '<div class="code-toggle--control checkbox toggle-show-hide text-xs-right" data-theme="light-20"> <input type="checkbox" value="" id="{elementId}" data-toggle="collapse" data-target="{dataTarget}"> <label for="{labelFor}">View code</label> </div> <div class="collapse code-toggle--document" id="{targetId}" data-theme="light-20"> <pre>\n{codeExample}\n		</pre> </div>', '', '', function(opts) {
        this.elementId = opts.elementId;
        this.dataTarget = opts.dataTarget;
        this.labelFor = opts.labelFor;
        this.targetId = opts.targetId;
        this.codeExample = opts.codeExample;
});
