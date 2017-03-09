<cdr-tile-event-aggregator>
    <section class="tile">
        <div class="hidden-xs media-frame ratio-3-4 portrait center">
            <img src="{ opts.imgPath }" alt="{ opts.imgPathAlt }">
        </div>
        <div class="group group-display-fixed event_wrapper">
            <div class="event__date text-uppercase">
                <div class="h2 event__date--title">{ opts.dateDayOfWeek }</div>
                <div class="text-muted">{ opts.dateMonthAndDayOfMonth }</div>
            </div>
            <div class="col-xs-8 col-sm-7">
                <div class="event__content">
                <!--the heading value needs to be conditional so we can be sure to deliver an accessible component-->
                    <h2 class="h4 event__date--title">{ opts.title }</h2>
                    <div class="location text-muted">{ opts.location }</div>
                </div>
            </div>
        </div>
    </section>

    <style type="less">
        .event__date {
            padding: 1.2rem;
        }

        .event__date--title {
            font-family: inherit;

            &.h2 {
                margin-bottom: 0;
                line-height: 1;
            }
        }

        .event__content {
            border-left: 1px solid #ccc;
            padding-left: 1.2rem;
            padding-right: 1.2rem;
            margin: 1.2rem 0;
        }

        .location {
            line-height: 1;
        }
    </style>
</cdr-tile-event-aggregator>
