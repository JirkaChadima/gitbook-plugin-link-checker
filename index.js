var urls = [];

module.exports = {
    hooks: {
      'page:before': function (page) {
        var config = this.config.get('pluginsConfig')
          && this.config.get('pluginsConfig')['link-checker'];
        if (!Array.isArray(config.fqdn)) {
          config.fqdn = [];
        }
        var links = page.content.match(/\[([^\[\]]+)\]\(([^()]+)\)/gmi);
        var urlRegex = /\(([^()]+)\)$/g;
        var domainRegexes = [];
        for (var i = 0; i < config.fqdn.length; i++) {
          domainRegexes.push(new RegExp('^https?://' + config.fqdn, 'gi'));
        }
        if (links) {
          for(var i = 0; i < links.length; i++) {
            var url = urlRegex.exec(links[i]);
            if (url && url.length > 1) {
              // store for dead relative links check
              if (!url[1].match(/^https?:\/\//gi) && url[1].match(/\.md$/gi)) {
                urls.push({
                  origin: page.path,
                  link: url[1],
                });
              }
              // check absolute links
              if (config && config.fqdn) {
                for (var j = 0; j < domainRegexes.length; j++) {
                  if (url[1].match(domainRegexes[j])) {
                    var message = 'Found an absolute link ' + url[0] + ' in ' + page.path;
                    if (config.dieOnError) {
                      throw new Error(message);
                    } else {
                      this.log.warn(message + '\n');
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
}