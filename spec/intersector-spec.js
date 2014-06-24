jasmine.getFixtures().fixturesPath = '/base/spec/javascripts/fixtures';

describe("canvas-manager", function () {

  beforeEach(function () {
    loadFixtures("canvas.html");
    this.canvas1 = document.getElementById("canvas1");
    this.canvas2 = document.getElementById("canvas2");
    this.context1 = this.canvas1.getContext("2d");
    this.context2 = this.canvas2.getContext("2d");
    this.intersector = new Intersector();
  });

  afterEach(function () {
    $("#canvas-container").remove();
  });

  it("intersects returns false for blank canvases", function () {
    expect(this.intersector.intersects(this.context1, this.context2)).toBeFalsy();
  });

  it("intersects returns true when both are non white", function () {
    this.context1.fillRect(0, 0, this.canvas1.width, this.canvas1.height);
    this.context2.fillRect(0, 0, this.canvas2.width, this.canvas2.height);
    expect(this.intersector.intersects(this.context1, this.context2)).toBeTruthy();
  });

  it("intersects returns true if canvases have a point in common", function () {
    this.context1.fillRect(6, 9, 1, 1);
    this.context2.fillRect(6, 9, 1, 1);
    expect(this.intersector.intersects(this.context1, this.context2)).toBeTruthy();
  });

  it("intersects returns false if canvases don't have any points in common", function () {
    this.context1.fillRect(6, 10, 1, 1);
    this.context2.fillRect(6, 9, 1, 1);
    expect(this.intersector.intersects(this.context1, this.context2)).toBeFalsy();
  });


});
