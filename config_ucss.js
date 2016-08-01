var createFile = require("create-file");
var del = require("delete");
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
            console.log(result);
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

            var mainPageContent = "<html><head><title>uCSS REPORT!!!</title><link href='rei-cedar.css' rel='stylesheet'></head><body><div class='container'><div class='row'><p>Note: Printing non-html matching, not ignored, non-whitelisted classes</p>";
            var mainPageContent2 = "</div></div></body></html>";
            var middleContent = "";
            for ( var s in result.selectors ) {
                
                // Only unused rules:
                if ( result.selectors[s].matches_html === 0 
                    && !result.selectors[s].ignored 
                    && !result.selectors[s].whitelisted ) {

                    var tempName = "<div class='col-xs-12'><strong>SELECTOR:</strong><p> " + s;
                    middleContent += " " + tempName + "</p></div>";
                }
            }

            middleContent += " <div class='col-xs-12'><strong>TOTAL:</strong> " + result.total + "</div>";
            middleContent += " <div class='col-xs-12'><strong>TOTAL USED:</strong> " + result.total_used + "</div>";
            middleContent += " <div class='col-xs-12'><strong>TOTAL NOT USED:</strong> " + result.total_unused + "</div>";
            middleContent += " <div class='col-xs-12'><strong>TOTAL DUPLICATES:</strong> " + result.total_duplicates + "</div>";
            middleContent += " <div class='col-xs-12'><strong>TOTAL IGNORED:</strong> " + result.total_ignored + "</div>";

            var errors = "";
            for (var e in result.load_errors) {
                errors += "<p><strong>URI:</strong> " + result.load_errors[e].uri + " <br/><strong>ERROR:</strong>" + result.load_errors[e].error + "</p>";
            }

            middleContent += " <div class='col-xs-12'><strong>LOAD ERRORS:</strong> " + errors + "</div>";

            mainPageContent += middleContent + mainPageContent2;

            del('./docs_dist/ucssreport.html', function(err) {
              if (err) throw err;
              console.log('done!');
            });

            createFile('./docs_dist/ucssreport.html', mainPageContent, function (err) {
                open("http://localhost:9002/ucssreport.html");
            });
            
        }
    }
};