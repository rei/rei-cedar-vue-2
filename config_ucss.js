module.exports = {
    "pages": { // (Required) Pages to check. Crawl or include is required.
        "crawl": "http://localhost:9002/"
    },
    "headers": { "Accept-Language": "nb-no" }, // (Optional) Headers to send
                                               // to server.
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
        "result": function(result) { console.log(result); } // (Optional)
    }
};