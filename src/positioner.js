/* exported Positioner */

var Positioner = function (cloud) {

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
      var width = cloud.getContext().measureText(word).width;
      if (cloud.getWidth() <= width + position.x) {
        return false;
      }
      return true;
    }
  };

};