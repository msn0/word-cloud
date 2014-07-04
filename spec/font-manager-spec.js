describe("font-manager", function () {

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
    this.cloud = new WordCloud(this.canvas);
    this.manager = new FontManager(this.cloud);
  });

  it("getSize should return size", function () {
    expect(this.manager.getSize()).toEqual(30);
  });

  it("getUnit should return unit", function () {
    expect(this.manager.getUnit()).toEqual("px");
  });

  it("getFamily should return font family", function () {
    expect(this.manager.getFamily()).toEqual("Arial");
  });

  it("default values should be returned for invalid font", function () {
    var canvas = {
      getContext: jasmine
        .createSpy("getContext")
        .andReturn({ font: "30px" })
    };
    var manager = new FontManager(canvas);

    expect(manager.getSize()).toEqual(16);
    expect(manager.getUnit()).toEqual("px");
    expect(manager.getFamily()).toEqual("Arial");
  });

  it("getHeight should return estimated height", function () {
    expect(this.manager.getHeight()).toEqual(36);
  });

});