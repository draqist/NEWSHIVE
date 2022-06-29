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

export { business, sports, health, tech, entertainment, politics };
