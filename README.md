# plugin-link-fixer

Fixes a [GitBook issue](https://github.com/GitbookIO/gitbook/issues/1708) where the trailing backslash is not included with relative links.

To add this plugin, enter the following the `book.json` file:

```json
{
    "plugins": [ "link-fixer" ],
    "pluginsConfig": {
        "link-fixer": {
            "link": "https://www.baseurl.com/"
        }
    }
}
```

The `link` option should be set as the base uri of your site.