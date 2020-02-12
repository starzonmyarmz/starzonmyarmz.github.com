const pluginRss = require('@11ty/eleventy-plugin-rss')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

const dateFilter = require('./src/filters/date-filter.js')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.addPassthroughCopy('src/favicon.ico')
  eleventyConfig.addPassthroughCopy('src/css')
  eleventyConfig.addPassthroughCopy('src/font')
  eleventyConfig.addPassthroughCopy('src/img')

  eleventyConfig.addFilter('dateFilter', dateFilter)

  eleventyConfig.addCollection('posts', collection => {
    return [
      ...collection.getFilteredByGlob('./src/posts/*.md')
    ].reverse()
  })

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
