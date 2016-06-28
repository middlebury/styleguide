# Middlebury Styleguide

## Dependencies

You will need the following dependencies on your development machine:

- [GulpJS](http://gulpjs.com/) `npm install --global gulp`
- [Jekyll](http://jekyllrb.com/) `gem install jekyll`
- [rouge](https://github.com/jneen/rouge) syntax highlighter `gem install rouge`
- [Bower](http://bower.io/) `npm install -g bower`

Once you have those, `cd` into the repository folder and install the Node dependencies:

```bash
npm install
```

Install Bower components:

```bash
bower install
```

## Development

This project uses Gulp to compile Sass and handle a few other development tasks.

```bash
gulp
```

To serve the Jekyll site, open another terminal window and run:

```bash
jekyll serve --watch --baseurl ''
```

You have to set `--baseurl` because the Github Page url is http://middleburydigitalservices.github.io/online-style-guide. The baseurl is set in the `_config.yml` to `/online-style-guide` so adding the flag in the command line resets it while developing (since in development, it runs at `http://localhost:4000`)

The processes run independently of one another, so it doesn't matter which order you run them in. `gulp` compiles the `scss/` folder and outputs it into `css/` while the Jekyll command compiles the `site/` folder and outputs to `_site/`.

Currently, Jekyll is set up to import the `scss/main.scss` file into its own Sass, so it doesn't get the benefits of gulp such as autoprefixer or sourcemaps. This is likely to change.

## Publishing

This project uses [gulp-gh-pages](https://www.npmjs.com/package/gulp-gh-pages) to deploy a `gh-pages` branch to Github to utilize their static site serving.


```bash
gulp deploy
```

Run the above command to build the Jekyll files, compile Sass, run [Parker](https://www.npmjs.com/package/gulp-parker) stylesheet analysis, and deploy the `_site` Jekyll output to the `gh-pages` branch and push to Github.

Read more about Github Pages at https://pages.github.com/

## Jekyll Plugins

This project uses a custom Jekyll plugin (credit goes to [GitHub Primer](https://github.com/primer/primer/blob/master/docs/_plugins/example.rb) which it was ripped from)  for displaying code snippets and elements. Instead of having to write:

```html

<button>my button</button>

```html
<button>my button</button>
`` `

# imagine there's no space in the bottom backticks. Can't have nested backticks for the example since this is already within triple backticks...

```

You can have DRY code by doing this instead:

```liquid

{% example html %}

<button>my button</button>

{% endexample %}

```

This will output the HTML into the file as well as create a code snippet with `<code>`

## To-do
- [x] Separate site styles from styleguide Sass yet share variables/styles
- [x] Fix/add syntax highlighting for code examples
- [x] Dynamic site navigation~~ use `_data/nav.yml` to generate static navigation
- [ ] Code style
- [ ] Email practices

## Credits

Heavily inspired by GitHub's [Primer CSS Toolkit](https://github.com/primer/primer)
