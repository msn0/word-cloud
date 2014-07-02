describe("font", function () {

  beforeEach(function () {
    this.canvas = {
      getContext: jasmine
        .createSpy("getContext")
        .andReturn({
          font: "30px Arial",
          measureText: jasmine
            .createSpy("measureText")
            .andReturn({
              width: 24
            })
        })
    };
    this.font = new Font(this.canvas);
  });

  it("getSize should return size", function () {
    expect(this.font.getSize()).toEqual(30);
  });

  it("getUnit should return unit", function () {
    expect(this.font.getUnit()).toEqual("px");
  });

  it("getFamily should return font family", function () {
    expect(this.font.getFamily()).toEqual("Arial");
  });

  it("default values should be returned for invalid font", function () {
    var canvas = {
      getContext: jasmine
        .createSpy("getContext")
        .andReturn({ font: "30px" })
    };
    var font = new Font(canvas);

    expect(font.getSize()).toEqual(16);
    expect(font.getUnit()).toEqual("px");
    expect(font.getFamily()).toEqual("Arial");
  });

  it("getHeight should return estimated height", function () {
    expect(this.font.getHeight()).toEqual(36);
  });

});