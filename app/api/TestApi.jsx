var $ = require('jquery')

module.exports = {
  filterTests: function (tests, showCompleted, searchText) {
    var filteredTests = tests

    // Filter by showCompleted
    // filteredTests = filteredTests.filter((test) => {
    //   return !test.completed || showCompleted
    // })
    // Filter by searchText
    filteredTests = filteredTests.filter((test) => {
      var testText = test.core.title.toLowerCase()
      var testPlatform = test.core.platform.toLowerCase()
      return testText.indexOf(searchText.toLowerCase()) >= 0 || searchText.length === 0 || testPlatform.indexOf(searchText.toLowerCase()) >= 0
    })

    // Sort tests
    // filteredTests.sort((a, b) => {
    //   if (!a.completed && b.completed) {
    //     return -1
    //   } else if (a.completed && !b.completed) {
    //     return 1
    //   } else {
    //     return 0
    //   }
    // })

    return filteredTests
  }
}
