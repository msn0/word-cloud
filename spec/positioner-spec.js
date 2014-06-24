jasmine.getFixtures().fixturesPath = '/base/spec/javascripts/fixtures';

describe("positioner", function () {

  beforeEach(function () {
    loadFixtures("canvas.html");
    this.canvas = document.getElementById("canvas1");

    this.positioner = new Positioner(this.canvas);
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



});