<cdr-tile-event-aggregator>
    <section class="tile">
        <div class="hidden-xs media-frame ratio-3-4 portrait center">
            <img src="{ opts.imgPath }" alt="{ opts.imgPathAlt }">
        </div>
        <div class="tile-block">
            <section class="event">
                <div class="event__date text-uppercase">
                    <div class="h2 event__title">{ opts.dateDayOfWeek }</div>
                    <div class="text-muted">{ opts.dateMonthAndDayOfMonth }</div>
                </div>
                <div class="event__content">
                    <h4 class="event__title">{ opts.title }</h4>
                    <div class="event__location text-muted">{ opts.location }</div>
                </div>
            </section>
        </div>
    </section>

    <style type="less">
        .event {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;

            .event__date {
                padding-right: 1rem;
                white-space: nowrap;
            }

            .event__content {
                border-left: 1px solid #ccc;
                padding-left: 1rem;
            }

             .event__title {
                font-family: inherit;
                &.h2 {
                    margin-bottom: 0;
                    line-height: 1;
                }
            }

            .event__location {
                line-height: 1;
            }
        }
    </style>
</cdr-tile-event-aggregator>
