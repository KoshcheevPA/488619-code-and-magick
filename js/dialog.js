'use strict';

var setupDialog = document.querySelector('.setup');
var setupUserPic = setupDialog.querySelector('.upload');

setupUserPic.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  var dragged = false;

  var onMouseMove = function (evtMove) {
    evtMove.preventDefault();
    dragged = true;

    var shift = {
      x: startCoords.x - evtMove.clientX,
      y: startCoords.y - evtMove.clientY
    };

    startCoords = {
      x: evtMove.clientX,
      y: evtMove.clientY
    };

    setupDialog.style.top = (setupDialog.offsetTop - shift.y) + 'px';
    setupDialog.style.left = (setupDialog.offsetLeft - shift.x) + 'px';
  };

  var onMouseUp = function (evtUp) {
    evtUp.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (dragged) {
      var onClickPreventDefault = function (evtClick) {
        evtClick.preventDefault();
        setupUserPic.removeEventListener('click', onClickPreventDefault);
      };
      setupUserPic.addEventListener('click', onClickPreventDefault);
    }
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});
