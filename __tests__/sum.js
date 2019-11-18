const sum = require('../sum');
var request = require("request");
const a = require('../app');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

var base_url = "http://localhost:3000/"

describe("Hello World Server", () => {
  describe("GET /", () =>  {
    it("returns status code 200", (done) => {
      request.get(base_url, (error, response, body) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns Hello World", function(done) {
            request.get(base_url, function(error, response, body) {
            expect(body).toBe("Hello World");
            done();
        });
    });   

    it("returns Hello World", (done) => {
        request.get(base_url, (error, response, body) => {
        expect(body).toBe("Hello World");
        done();
    });
    });

  });
});