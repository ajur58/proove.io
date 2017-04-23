var $ = require('jquery')

export var filterTests = (tests, showCompleted, searchText) => {
  var filteredTests = tests

  // Filter by showCompleted
  filteredTests = filteredTests.filter((test) => {
    return !test.completed || showCompleted
  })
  // Filter by searchText
  filteredTests = filteredTests.filter((test) => {
    var testText = test.title.toLowerCase()
    var testPlatform = test.platform.toLowerCase()
    return testText.indexOf(searchText.toLowerCase()) >= 0 || searchText.length === 0 || testPlatform.indexOf(searchText.toLowerCase()) >= 0
  })

  // Sort tests
  filteredTests.sort((a, b) => {
    return a.createdAt < b.createdAt ? 1 : -1
  })

  return filteredTests
}
