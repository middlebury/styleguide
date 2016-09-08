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

You have to set `--baseurl` when developing because the GitHub Page url is http://middlebury.github.io/styleguide and not the root of the domain.


## Publishing

```
git checkout gh-pages
git merge master
git push
```
