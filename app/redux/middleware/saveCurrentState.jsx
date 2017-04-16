import { canWriteToLocalStorage } from '../../helpers/browser'

const LS_KEY = 'PROOVE_STATE'

export const saveCurrentState = (store) => (next) => (action) => {
  const state = store.getState().auth
  const { type } = action
  if (type === '@@router/LOCATION_CHANGE') {
    next(action)
    return
  }

  if (canWriteToLocalStorage()) {
    if (state.isLoggedIn) {
      localStorage.setItem(LS_KEY, JSON.stringify(state))
    } else {
      localStorage.removeItem(LS_KEY)
    }
  }

  next(action)
}
