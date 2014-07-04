jasmine.getFixtures().fixturesPath = '/base/spec/javascripts/fixtures';

describe("positioner", function () {

  beforeEach(function () {
    loadFixtures("canvas.html");
    this.canvas = document.getElementById("canvas1");
    this.cloud = new WordCloud(this.canvas);
    this.fontManager = new FontManager(this.cloud);
    this.positioner = new Positioner(this.cloud, this.fontManager);
  });

  afterEach(function () {
    $("#canvas-container").remove();
  });

  it("getNextPosition returns object with x and y properties", function () {
    expect(this.positioner.getNextPosition().hasOwnProperty('x')).toBeTruthy();
    expect(this.positioner.getNextPosition().hasOwnProperty('y')).toBeTruthy();
  });

  it("getNextPosition returns Numbers", function () {
    expect(!isNaN(this.positioner.getNextPosition().x)).toBeTruthy();
    expect(!isNaN(this.positioner.getNextPosition().y)).toBeTruthy();
  });

  it("getNextPosition returns x not greater than canvas width", function () {
    expect(this.positioner.getNextPosition().x <= this.canvas.width).toBeTruthy();
  });

  it("getNextPosition returns y not greater than canvas height", function () {
    expect(this.positioner.getNextPosition().y <= this.canvas.height).toBeTruthy();
  });

  it("fitsCanvas returns false when word's width reaches right boundary", function () {
    expect(this.positioner.fitsCanvas("Lorem ipsum dolor sit amet", { x: 0, y: 50 })).toBeFalsy()
  });

  it("fitsCanvas returns false when part of a word is above cloud", function () {
    expect(this.positioner.fitsCanvas("a", { x: 0, y: 10 })).toBeFalsy()
  });

  it("fitsCanvas returns true when whole word is inside cloud", function () {
    expect(this.positioner.fitsCanvas(".", { x: 50, y: 50 })).toBeTruthy()
  });

});