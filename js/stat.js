'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_POSITION_X = 100;
  var CLOUD_POSITION_Y = 10;
  var CLOUD_SHADOW_GAP = 10;
  var TITLE_TEXT_X = 160;
  var TITLE_TEXT_Y = 40;
  var TITLE_TEXT_GAP = 20;
  var CLOUD_X = 130;
  var CLOUD_Y = 250;
  var GAP = 10;
  var TEXT_HEIGHT = 20;
  var BAR_GAP = 50;
  var BAR_WIDTH = 40;
  var barHeight = 150;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_POSITION_X + CLOUD_SHADOW_GAP, CLOUD_POSITION_Y + CLOUD_SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_POSITION_X, CLOUD_POSITION_Y, '#ffffff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';

    ctx.fillText('Ура вы победили!', TITLE_TEXT_X, TITLE_TEXT_Y);
    ctx.fillText('Список результатов:', TITLE_TEXT_X, TITLE_TEXT_Y + TITLE_TEXT_GAP);

    ctx.fillStyle = '#000';

    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      ctx.fillStyle = '#000000';
      ctx.fillText(names[i], CLOUD_X + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP);
      ctx.fillText(Math.round(times[i]), CLOUD_X + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y - ((barHeight * times[i]) / maxTime) - TEXT_HEIGHT);

      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'rgb(0, 0, ' + Math.floor(Math.random() * 255) + ')';
      }
      ctx.fillRect(CLOUD_X + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y - GAP - ((barHeight * times[i]) / maxTime), BAR_WIDTH, (barHeight * times[i]) / maxTime);
    }
  };
})();
