const randomNumber = function (minCoordinate, maxCoordinate, countPoint = 0){
  if (minCoordinate >= 0 && maxCoordinate >= 0){
    if (minCoordinate < maxCoordinate){
      return  (Math.random() * (maxCoordinate - minCoordinate) + minCoordinate).toFixed(countPoint); // Формула взята из интернета
    }
    return (minCoordinate === maxCoordinate) ? minCoordinate : 'Error: Диапазон с такими значениями невозможен';
  }
  return 'Error: Диапазон не должен быть отрицательным';
};
randomNumber(1,100);  // Функция для рандомного числа
randomNumber(1, 100, 2);



const TITLE = ['Удобное жилье', 'Лучшее расположение', 'Отличное место', 'Красивый вид', 'Спокойное проживание', 'Близко до метро'];
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const DESCRIPTION = ['Отличный вариант за минимальную цену','Разумный минимум за хорошую цену',
  'Отличный выбор за минимальную цену','Идеальный выбор за эту цену','Отличный вариант за эту цену',
  'Хороший максимум за минимальную цену','Лучший минимум за хорошую цену','Отличный набор опций за минимальную цену',
  'Хороший вариант за лучшую цену','Лучший максимум за минимальную цену'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const MIN_LAT = 35.65000;
const MAX_LAT = 35.70000;
const MIN_LNG = 139.70000;
const MAX_LNG = 139.80000;
const DECIMAL = 5;

const createUser = function(index){
  const avatar = (index >= 10) ? `img/avatars/user${index}.png`: `img/avatars/user0${index}.png`;
  return{
    avatar: avatar,
  };
};

const createOffer = function(){
  const randomTitle = randomNumber(0, TITLE.length - 1);
  const randomType = randomNumber(0, TYPE.length - 1);
  const randomCheckin = randomNumber(0, CHECKIN.length - 1);
  const randomCheckout = randomNumber(0, CHECKOUT.length - 1);
  const randomDescription = randomNumber(0, DESCRIPTION.length - 1);
  const randomFeature = randomNumber(0, FEATURES.length - 1);
  const randomPhoto = randomNumber(0, PHOTOS.length - 1);

  return {
    title: TITLE[randomTitle],
    address: `${randomNumber(MIN_LAT, MAX_LAT, DECIMAL)}, ${randomNumber(MIN_LNG, MAX_LNG, DECIMAL)}`,
    price: randomNumber(1, 99999),
    type: TYPE[randomType],
    rooms: randomNumber(1, 10),
    guests: randomNumber(0, 7),
    checkin: CHECKIN[randomCheckin],
    checkout: CHECKOUT[randomCheckout],
    features: FEATURES[randomFeature],
    description: DESCRIPTION[randomDescription],
    photos: PHOTOS[randomPhoto],
  };
};

const createLocation = function(){
  return{
    lat: randomNumber(MIN_LAT, MAX_LAT, DECIMAL),
    lng: randomNumber(MIN_LNG, MAX_LNG, DECIMAL),
  };
};

const createAd = function(amount){
  const ads = [];
  for(let i = 1; i <= amount; i++){
    const ad = {};
    ad.author = createUser(i);
    ad.offer = createOffer();
    ad.location = createLocation();
    ads.push(ad);
  };
  return ads;
};

console.log(createAd(10));
