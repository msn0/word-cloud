describe("word-cloud", function () {

  beforeEach(function () {
    this.context = jasmine.createSpy("context");
    this.canvas = {
      getContext: jasmine
        .createSpy("getContext")
        .andReturn(this.context),
      width: 11,
      height: 22
    };
    this.cloud = new WordCloud(this.canvas);
  });

  it("getContext returns desired context", function () {
    expect(this.cloud.getContext()).toBe(this.context);
  });

  it("getWidth returns canvas width", function () {
    expect(this.cloud.getWidth()).toEqual(11);
  });

  it("getHeight returns canvas height", function () {
    expect(this.cloud.getHeight()).toEqual(22);
  });

});