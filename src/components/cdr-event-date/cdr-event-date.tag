<cdr-event-date>
    <section class="event">
        <div class="event__date text-uppercase">
            <div class="h2 event__title">{ opts.item.dateDayOfWeek }</div>
            <div class="text-muted">{ opts.item.dateMonthAndDayOfMonth }</div>
        </div>
        <div class="event__content">
            <h4 class="event__title">{ opts.item.title }</h4>
            <div class="event__location text-muted">{ opts.item.location }</div>
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
</cdr-event-date>