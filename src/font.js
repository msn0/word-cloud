/* exported Font */

var Font = function (canvas) {

  var PATTERN = /([0-9]+)(px|pt|em|rem)\s+([a-z\s0-9]+)/i;
  var DEFAULT = [16, "px", "Arial"];
  var HEIGHT_FACTOR = 1.5;
  var WIDE_CHAR = "W";

  var getContext = function () {
    return canvas.getContext("2d");
  };

  var getFontObject = function () {
    var match = getContext().font.match(PATTERN);
    return match && match.length ? match.splice(1) : DEFAULT;
  };

  return {

    /**
     * Get font size
     * @returns {number}
     */
    getSize: function () {
      return 1 * getFontObject()[0];
    },

    /**
     * Get unit
     * @returns {number}
     */
    getUnit: function () {
      return getFontObject()[1];
    },

    /**
     * Get font family
     * @returns {number}
     */
    getFamily: function () {
      return getFontObject()[2];
    },

    /**
     * Gets estimated font height
     * @returns {number}
     */
    getHeight: function () {
      return HEIGHT_FACTOR * getContext().measureText(WIDE_CHAR).width;
    }
  };
};
