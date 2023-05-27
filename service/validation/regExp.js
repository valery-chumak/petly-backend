const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegExp = /^\S{7,32}$/;
const nameRegExp = /^[a-zA-Zа-яёА-ЯЁА-ЩЬЮЯҐЄІЇа-щьюяґєії]+$/;
const locationRegExp =
  /^[A-ZА-ЯЁАЩЬЮЯҐЄІЇ][a-zA-Zа-яёА-ЯЁА-ЩЬЮЯҐЄІЇа-щьюяґєії\-]+,\s?[A-ZА-ЯЁАЩЬЮЯҐЄІЇ][a-zA-Zа-яёА-ЯЁА-ЩЬЮЯҐЄІЇа-щьюяґєії]+$/;
const locationUpdateRegExp =
  /^[A-ZА-ЯЁАЩЬЮЯҐЄІЇ][a-zA-Zа-яёА-ЯЁА-ЩЬЮЯҐЄІЇа-щьюяґєії]+(?:[\s-][a-zA-Zа-яёА-ЯЁА-ЩЬЮЯҐЄІЇа-щьюяґєії]+)*$/;
const telRegExp = /^\+\d{11,12}$/;
const namePetRegExp = /^[a-zA-Zа-яёА-ЯЁА-ЩЬЮЯҐЄІЇа-щьюяґєії]{2,16}$/;
const dataRegExp =
  /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)((-(\d{2}):(\d{2})|Z)?)$/;
const breedRegExp = /^[a-zA-Zа-яёА-ЯЁА-ЩЬЮЯҐЄІЇа-щьюяґєії]{2,16}$/;
const commentsRegExp = /^(.|\n){8,120}$/;
const titleRegExp = /^.{2,48}$/;
const noticeNameRegExp = /^[a-zA-Zа-яёА-ЯЁА-ЩЬЮЯҐЄІЇа-щьюяґєії]{2,16}$/;
const noticeBreedRegExp = /^[a-zA-Zа-яёА-ЯЁА-ЩЬЮЯҐЄІЇа-щьюяґєії\s]{2,24}$/;
const noticePriceRegExp = /^[1-9]{1}\d*$/;

module.exports = {
  emailRegExp,
  passwordRegExp,
  nameRegExp,
  locationRegExp,
  locationUpdateRegExp,
  telRegExp,
  namePetRegExp,
  dataRegExp,
  breedRegExp,
  commentsRegExp,
  titleRegExp,
  noticeNameRegExp,
  noticeBreedRegExp,
  noticePriceRegExp,
};
