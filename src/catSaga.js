import { call, put, takeEvery } from "redux-saga/effects";
import { getCatsSuccess, getCatsFailure } from "./catState";

async function callApi() {
  const data = await fetch(`https://api.thecatapi.com/v1/breeds`);
  const formattedCats = await data.json();
  const formattedCatsShortened = formattedCats.slice(0, 10);
  return formattedCatsShortened;
}

function* workGetCatsFetch() {
  try {
    const cats = yield call(callApi);
    yield put(getCatsSuccess(cats));
  } catch (error) {
    yield put(getCatsFailure(error.message));
  }
}
function* catSaga() {
  yield takeEvery("cats/getCatsFetch", workGetCatsFetch);
}

export default catSaga;
