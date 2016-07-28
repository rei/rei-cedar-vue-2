<cedar-card class="{ card: true, card-block: isCardBlock }{ ' ' + mydata}">
    <cedar-card__image />
    <cedar-card__block />
    <yield />

    <script>
    this.mydata = opts.c

    this.isCardBlock = opts.isCardBlock;
    </script>
</cedar-card>

<cedar-card__image>
    <div class="card-img-top img-frame ratio-9-16 portrait center">
        <img src="http://placehold.it/350x150" alt="Card image cap">
    </div>
</cedar-card__image>

<cedar-card__block>
  <h4>Card Component</h4>
   <button class="btn btn-primary">Button</button>
</cedar-card__block>




