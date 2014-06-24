/* exported Positioner */

var Positioner = function (canvas) {

  return {

    /**
     * Naive implementation of getting
     * next possible coords on canvas
     *
     * @returns {{x: number, y: number}}
     */
    getNextPosition: function () {
      return {
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height)
      };
    }
  };

};