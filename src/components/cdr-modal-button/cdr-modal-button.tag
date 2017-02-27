<!-- When calling the tag, specify the opts attribute and pass to it a value from the avail below to choose which button to display -->
<!-- If no value is specified, the button with the null condition will display by default -->
<cdr-modal-button>
    <button if="{ opts.cedarbutton == 1 || opts.cedarbutton == null }" type="button" class="btn btn-primary" id="{opts.hashtag}">{opts.buttontext}</button>
    <button if="{ opts.cedarbutton == 2 }" type="button" class="btn btn-contrast btn-primary" id="{opts.hashtag}">{opts.buttontext}</button>
    <button if="{ opts.cedarbutton == 3 }" type="button" class="btn btn-primary btn-sm" id="{opts.hashtag}">{opts.buttontext}</button>
    <button if="{ opts.cedarbutton == 4 }" type="button" class="btn btn-contrast btn-primary btn-xs" id="{opts.hashtag}">{opts.buttontext}</button>
    <button if="{ opts.cedarbutton == 5 }" type="button" class="btn btn-default" id="{opts.hashtag}">{opts.buttontext}</button>
    <button if="{ opts.cedarbutton == 6 }" type="button" class="btn btn-block btn-link" id="{opts.hashtag}">{opts.buttontext}</button>
    <button if="{ opts.cedarbutton == 7 }" type="button" class="btn btn-fixed btn-link-body" id="{opts.hashtag}">{opts.buttontext}</button>
    <button if="{ opts.cedarbutton == 8 }" type="button" class="btn btn-fixed btn-link_stag" id="{opts.hashtag}">{opts.buttontext}</button>

    <style type="less" scoped>
        .btn-link-body {
            font-family: inherit;
            font-size: inherit;
            font-weight: normal;
            color: #06c;
            background: transparent;
            text-decoration: underline;
            vertical-align: unset;
            padding: 0;
                
            &:hover,
            &:focus,
            &:active {
                color: #06c;
                text-decoration: underline;
            }
        }

        .btn-link_stag {
            font-family: inherit;
            font-size: inherit;
            color: #06c;
            background: transparent;
            vertical-align: unset;
            padding: 0;
            
            &:hover,
            &:focus,
            &:active {
                color: #06c;
                text-decoration: underline;
            }
        }
    </style>
</cdr-modal-button>