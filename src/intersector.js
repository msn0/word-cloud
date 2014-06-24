/* exported Intersector */

var Intersector = function () {

  var getImageData = function (context) {
    var canvas = context.canvas;
    return context.getImageData(0, 0, canvas.width, canvas.height);
  };

  return {

    /**
     * Checks whether two contexts
     * have any points in common
     *
     * @param context1
     * @param context2
     * @returns {boolean}
     */
    intersects: function (context1, context2) {
      var data1 = getImageData(context1).data;
      var data2 = getImageData(context2).data;
      var hasCommonPoints = false;

      for (var i = 0; i < data1.length; i += 4) {
        if (data1[i + 3] > 0 && data2[i + 3] > 0) {
          hasCommonPoints = true;
          break;
        }
      }

      return hasCommonPoints;
    }
  };
};