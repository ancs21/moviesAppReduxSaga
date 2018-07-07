import { call, put } from 'redux-saga/effects'
import MoviesActions from '../Redux/MoviesRedux'
// import { MoviesSelectors } from '../Redux/MoviesRedux'

export function * getMovies (api, action) {
  const { data } = action
  const response = yield call(api.getPopular, data)

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(MoviesActions.moviesSuccess(response.data))
  } else {
    yield put(MoviesActions.moviesFailure('Request fail'))
  }
}
