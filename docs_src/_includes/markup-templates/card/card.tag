<card>
   <card-image />
   <card-block copy={ copy } />

   this.copy = []
</card>

<card-image>
    <div class="card-img-top img-frame ratio-9-16 portrait center">
        <img src="http://placehold.it/350x150" alt="Card image cap">
    </div>
</card-image>

<card-block>
  <copy each={ opts.copy } />
</card-block>

<copy>
   <h4>Card Component</h4>
   <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <button class="btn btn-primary">Button</button>
</copy>



