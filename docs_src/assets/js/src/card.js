riot.tag2('cedar-card', '<cedar-card__image></cedar-card__image> <cedar-card__block></cedar-card__block> <yield></yield>', '', 'class="{card: true, card-block: isCardBlock}{\' \' + mydata}"', function(opts) {
    this.mydata = opts.c

    this.isCardBlock = opts.isCardBlock;
});

riot.tag2('cedar-card__image', '<div class="card-img-top img-frame ratio-9-16 portrait center"> <img src="http://placehold.it/350x150" alt="Card image cap"> </div>', '', '', function(opts) {
});

riot.tag2('cedar-card__block', '<h4>Card Component</h4> <button class="btn btn-primary">Button</button>', '', '', function(opts) {
});




