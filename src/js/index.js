require("@babel/polyfill");
import Search from "./model/Search";
/* 
web app tuluv
hailtiin query, ur dun
tuhain uzuulj baigaa jor
like darsan joruud
zahialj baigaa joriin orts
*/
const state = {};
const controlSearch = async () => {
  //console.log("daragdlaa ");
  //web s hailtiin tulhuur ugiig gargaj avna
  const query = "pizza";

  if (query) {
    //tulhuur ugeer haisan object iig shineer uusgene
    state.search = new Search(query);
    //hailt hiihed zoriulj ui beltgene
    //hailtiig hiine
    await state.search.doSearch();
    //hailtiin ur dung delgetsend gargana
    console.log(state.search.result);
  } else {
  }
};
document.querySelector(".search").addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});
