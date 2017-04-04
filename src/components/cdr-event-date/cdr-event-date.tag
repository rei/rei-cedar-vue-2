<cdr-event-date>
    <section class="event">
        <div class="event__date text-uppercase">
            <div class="h2 event__title">{ opts.item.dateDayOfWeek }</div>
            <div class="text-muted">{ opts.item.dateMonthAndDayOfMonth }</div>
        </div>
        <div class="event__content">
            <h4 class="event__title">{ opts.item.title }</h4>
            <p class="event__location">{ opts.item.location }</p>
            <div if={ opts.item.spots > 0 || opts.item.spots == 0 } class="event__availability">
                <div if={ opts.item.spots > 0 } class="text-muted">{ opts.item.spots } spots available</div>
                <div class="event__waitList" if={ opts.item.spots == 0 }><span class="text-off-price">Event is full.</span> <a href="{ opts.item.waitListUrl }" class="link_navigation text-nowrap">Join wait list</a></div>
            </div>
        </div>
    </section>

    <style type="less" scoped>
        .event {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
        }

        .event__location:last-child {
            margin-bottom: 0;
        }

        .event__date {
            padding-right: 1rem;
            white-space: nowrap;

            @media screen and (max-width: 768px) {
                min-width: 7.5rem;
            }
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

                @media screen and (min-width: 1200px) {
                    font-size: 2.843rem;
                }
            }
        }

        .event__waitList {
            a {
                text-decoration: underline;
            }

            > * {
                @media screen and (min-width: 768px) {
                    display: block;
                }
            }
        }
    </style>
</cdr-event-date>
