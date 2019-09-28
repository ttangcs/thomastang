const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/thomastang/Documents/Personal Page/thomastang/.cache/dev-404-page.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/thomastang/Documents/Personal Page/thomastang/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/thomastang/Documents/Personal Page/thomastang/src/pages/index.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("/Users/thomastang/Documents/Personal Page/thomastang/src/pages/resume.js")))
}

