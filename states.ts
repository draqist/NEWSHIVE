import { atom } from 'recoil';

const politics = atom({
  key: 'politicspage',
  default: 1,
});
const health = atom({
  key: 'healthpage',
  default: 1,
});
const tech = atom({
  key: 'techpage',
  default: 1,
});
const entertainment = atom({
  key: 'enterainmentpage',
  default: 1,
});
const sports = atom({
  key: 'sportspage',
  default: 1,
});
const business = atom({
  key: 'businesspage',
  default: 1,
});

const searchData = atom({
  key: 'search_response',
  default: [],
});
const SearchQueryText = atom({
  key: 'search_query_text',
  default: '',
});
const pager = atom({
  key: 'pager',
  default: 1,
});
const resultTally = atom({
  key: 'total_results',
  default: 1,
});

export {
  business,
  sports,
  health,
  tech,
  entertainment,
  politics,
  searchData,
  SearchQueryText,
  pager,
  resultTally,
};
