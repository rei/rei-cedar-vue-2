<cdr-tile-event-aggregator>
    <section class="tile">
        <div class="hidden-sm-down media-frame ratio-3-4 portrait center">
            <img src="{ opts.imgPath }" alt="{ opts.imgPathAlt }">
        </div>
        <div class="group group-display-fixed event-wrapper">
            <div class="col-xs-4">
                <div class="well event-date">
                    <span class="h2">{ opts.dateDayOfWeek }</span>
                    <span class="text-muted">{ opts.dateMonthAndDayOfMonth }</span>
                </div>
            </div>
            <div class="col-xs-8">
                <div class="well">
                <!--the heading value needs to be conditional so we can be sure to deliver an accessible component-->
                    <h2 class="h4" class="description"> { opts.title } </h2>
                    <span class="location text-muted">{ opts.location }</span>
                </div>
            </div>
        </div>
    </section>
</cdr-tile-event-aggregator>
