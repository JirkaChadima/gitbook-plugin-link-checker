# gitbook-plugin-link-checker

To add this plugin, enter the following the `book.json` file:

Options:

- `fqdn` - List of domains that the checker should check. If any of those occur in a link, it's bad.
- `dieOnError` - If set to true, the build will stop, otherwise the plugin will flush only warnings

```json
{
    "plugins": [ "link-checker" ],
    "pluginsConfig": {
        "link-checker": {
            "fqdn": [
              "developers.windingtree.com"
            ],
            "dieOnError": false
        }
    }
}
```
