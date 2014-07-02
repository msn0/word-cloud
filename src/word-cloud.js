/* exported WordCloud */
/* globals Font */

var WordCloud = function (canvas) {

  var font = new Font(canvas);

  return {

    /**
     * Returns context object
     * @returns {*}
     */
    getContext: function () {
      return canvas.getContext("2d");
    },

    /**
     * Returns font object
     * @returns {Font|*}
     */
    getFont: function () {
      return font;
    },

    /**
     * Returns canvas width
     * @returns {*}
     */
    getWidth: function () {
      return canvas.width;
    },

    /**
     * Returns canvas height
     * @returns {*}
     */
    getHeight: function () {
      return canvas.height;
    }
  };

};