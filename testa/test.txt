var request = require("request");
var assert = require('assert');
var base_url = "http://localhost:3000/"

describe("Hello World Server", () => {
  describe("GET /", () =>  {
    it("returns status code 200", (done) => {
      request.get(base_url, (error, response, body) => {
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it("returns Hello World", function(done) {
            request.get(base_url, function(error, response, body) {
            assert.equal("Hello World", body);
            done();
        });
    });   

    it("returns Hello World", (done) => {
        request.get(base_url, (error, response, body) => {
        //expect(body).toBe("Hello World");
        assert.equal("Hello World", body);
        done();
    });
    });

  });
});