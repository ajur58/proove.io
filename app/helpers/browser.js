export const isIE = (versions = [9, 10, 11]) => {
  for (var i = 0; i < versions.length; i++) {
    const ieVersion = versions[i]
    let browserRegex = null
    switch (ieVersion) {
      case 11:
        browserRegex = /Trident.*rv:11\./g
        break
      case 10:
        browserRegex = /MSIE\s10\./g
        break
      case 9:
        browserRegex = /MSIE\s9\./g
        break
      case 8:
        browserRegex = /MSIE\s8\./g
        break
      case 7:
        browserRegex = /MSIE\s7\./g
        break
    }

    if (window.navigator.userAgent.match(browserRegex)) {
      return true
    }
  }
  return false
}

export const isBrowserOutdated = () => {
  return isIE([7, 8, 9])
}

export const canWriteToLocalStorage = () => {
  try {
    localStorage.setItem('testLocalStorageSupport', 'testLocalStorageSupport')
    localStorage.removeItem('testLocalStorageSupport')
    return true
  } catch (e) {
    return false
  }
}
