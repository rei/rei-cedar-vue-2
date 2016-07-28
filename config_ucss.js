var createFile = require('create-file');
var del = require('delete');
var open = require("open");

module.exports = {
    "pages": { // (Required) Pages to check. Crawl or include is required.
        "crawl": "http://localhost:9002/"
    },
    "headers": { "Accept-Language": "nb-no" }, // (Optional) Headers to send server
    "css": [ // (Required) List of CSS files to check.
        "./dist/rei-cedar.css"
    ],
    "whitelist": [""], // (Optional) List of CSS rules to ignore,
    "timeout": 4000, // (Optional) Timeout for HTTP requests. (default is 4000ms).
    "output": { // (Optional) How to output information from uCSS
        "logger": function(res, originalUrl, loggedIn) {
            // (Optional) Function that is called for each URL that is visited.
            // Use null for if you want it to be silent.
            console.log("Visited: ", originalUrl);
        },
        "result": function(result) { 

            // result object
            // selectors
            //     table ( this is the css style name )
            //         ignored
            //         whitelisted
            //         matches_html
            //         occurences_css
            //         pos_css
            // total
            // total_used
            // total_unused
            // total_duplicates
            // total_ignored
            // load_errors   

            var mainPageContent = "<html><head><title>uCSS REPORT!!!</title><link href='rei-cedar.css' rel='stylesheet'></head><body>";
            var mainPageContent2 = "</body></html>";
            for (var s in result.selectors) {
                
                var tempName = "<div class='row'>" + s;
                var itemName = "";
                for (var i in s) {
                    itemName += " " + i;
                }

                tempName += " " + itemName + "</div>";

                // Only unused rules:
                // if (result.selectors[s].matches_html === 0) {
                //     // Print position(s), given it's only one CSS file:
                //     var pos_css = result.selectors[s].pos_css;
                //     var key = Object.keys(pos_css)[0];
                //     console.log(s + ": " + pos_css[key]);
                // }
            }

            mainPageContent += tempName + mainPageContent2;

            del('./docs_dist/ucssreport.html', function(err) {
              if (err) throw err;
              console.log('done!');
            });

            createFile('./docs_dist/ucssreport.html', mainPageContent, function (err) {
                // TODO
                // Open browser to created file
                open("http://localhost:9002/ucssreport.html");
            });
            
        }
    }
};