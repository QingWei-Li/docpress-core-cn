# bookdown

How it works:

1. make a toc in `docs/README.md`
2. renders a site based on it

sample:

```
README.md
docs/
  README.md
  usage.md
  installation.md
  getting-started.md
```

## API

* `bookdown/base0` - Metalsmith middleware.
* `bookdown` - Metalsmith generator.