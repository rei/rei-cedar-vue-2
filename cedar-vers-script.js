// 1. do bitbucket search for `"rei cedar" path:package.json` or  `"rei cdr tokens" path:package.json`
// https://git.rei.com/plugins/servlet/search?q=%22rei%20cedar%22%20path%3Apackage.json
// https://git.rei.com/plugins/servlet/search?q=%22rei%20cdr%20tokens%22%20path%3Apackage.json
// 2. scroll so all results shown on 1 page
// 3. update target to match last word of target repo
var target = "cedar"; // "tokens";
// 4. paste this entire script into dev console and press enter
// TODO: make script that combines cedar/tokens results

var results = document.querySelectorAll('.search-result');
var data = [`name,${target} version,link`]
for (var i = 0; i < results.length; i++) {
  var result = results[i];
  var link = result.querySelector('.code-search-repo-link');
  var { href } = link;
  var project = link.querySelector('.code-search-project').textContent;
  var repo = link.querySelector('.code-search-repository').textContent;
  var projectName = `${project}/${repo}`;

  if (!href.match('https://git.rei.com/users/')) {

    if (!repo.match('.backup')) {

      var code = result.querySelector('.hit-contexts').textContent;

      var match = code.match(new RegExp(`${target}": "(.+)"`));

      if (match) {
        data.push(`${projectName},${match[1]},${href}`)
      } else {
        // code formatted weirdly, etc.
        console.log('skipping: ', projectName, code);
      }
    } else {
      // it's a backup repo
      // console.log('skipping: ', projectName);
    }
  } else {
    // its a user repo
    // console.log('skipping: ', projectName);
  }
}
console.log(data.join("\n"))
