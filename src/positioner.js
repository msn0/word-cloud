/* exported Positioner */

var Positioner = function (cloud, fontManager) {

  return {

    /**
     * Naive implementation of getting
     * next possible coords on canvas
     *
     * @returns {{x: number, y: number}}
     */
    getNextPosition: function () {
      return {
        x: Math.floor(Math.random() * cloud.getWidth()),
        y: Math.floor(Math.random() * cloud.getHeight())
      };
    },

    fitsCanvas: function (word, position) {
      var width = cloud.measureText(word).width;
      if (cloud.getWidth() <= width + position.x) {
        return false;
      }
      if (position.y <= fontManager.getHeight()) {
        return false;
      }
      return true;
    }
  };

};