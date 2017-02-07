module.exports = function slugify (string) {
  var re = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,.\/:;<=>?@\[\]^`{|}~]/g
  var maintainCase = false
  var replacement = '-'

  slugify.occurrences = slugify.occurrences || {}

  if (typeof string !== 'string') return ''
  if (!maintainCase) string = string.toLowerCase()

  var slug = string.trim()
    .replace(/<[^>\d]+>/g, '')
    .replace(re, '')
    .replace(/\s/g, replacement)
    .replace(/-+/g, replacement)
    .replace(/^(\d)/, '_$1')
  var occurrences = slugify.occurrences[slug]

  if (occurrences) {
    slug = slug + '-' + occurrences
  }
  if (slugify.occurrences.hasOwnProperty(slug)) {
    occurrences++
  } else {
    occurrences = 0
  }

  slugify.occurrences[slug] = occurrences

  return encodeURIComponent(slug)
}
