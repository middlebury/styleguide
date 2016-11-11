# Middlebury Styleguide

Work in progress repo to host Middlebury's styleguides.

- [x] Editorial
- [ ] Code style
- [ ] Brand and identity
- [ ] Web components

## Requirements

You will need to install [Jekyll](http://jekyllrb.com/) to build the site:

```
gem install jekyll
```

## Developing

```bash
jekyll serve --watch --baseurl ''
```

Because the site is not hosted at the root of the domain, you have to set `--baseurl`. `_config.yml` defines the baseurl when the site is deployed at http://middlebury.github.io/styleguide.


## Publishing

```
git checkout gh-pages
git merge master
git push
```
