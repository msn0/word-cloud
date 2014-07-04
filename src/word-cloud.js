/* exported WordCloud */
/* globals FontManager */

var WordCloud = function (canvas) {

  return {

    /**
     * Returns context object
     * @returns {*}
     */
    getContext: function () {
      return canvas.getContext("2d");
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
    },

    /**
     * Measure text width
     * @param text
     * @returns {*}
     */
    measureText: function (text) {
      return this.getContext().measureText(text);
    }
  };

};