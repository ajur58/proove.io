import { canWriteToLocalStorage } from '../../helpers/browser'
import { load } from '../actions/user'

export const loadCurrentState = (store) => (next) => (action) => {
  const { type } = action
  if (type === 'INIT_RESTORE_USER') {
    let localState = null
    if (canWriteToLocalStorage()) {
      localState = localStorage.getItem('PROOVE_STATE')
    }

    if (localState) {
      const storedState = JSON.parse(localState)
      if (storedState) store.dispatch(load(storedState))
    }
    // else handle with cookie?
  }
  next(action)
}
