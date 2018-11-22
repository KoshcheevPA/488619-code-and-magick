'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green']

var wizardRandomOptions = function(wizardOption) {
  var random = Math.floor(Math.random() * wizardOption.length);
  return random;
};

var wizardOptions = [
  {
    name: wizardNames[wizardRandomOptions(wizardNames)] + ' ' + wizardSurnames[wizardRandomOptions(wizardSurnames)]
  },
  {
    coatColor: wizardCoatColor[wizardRandomOptions(wizardCoatColor)]
  },
  {
    eyesColor: wizardEyesColor[wizardRandomOptions(wizardEyesColor)]
  }
];

console.log(wizardOptions[0].name);
console.log(wizardOptions[1].coatColor);
console.log(wizardOptions[2].eyesColor);
