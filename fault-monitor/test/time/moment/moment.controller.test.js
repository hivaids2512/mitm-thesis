const expect = require("chai").expect;
const should = require("chai").should();
const request = require("request");
const path = require('path');
const appUtils = require(path.resolve('./app/lib/utils/utils.lib'));

var resBody;

describe("Moment sub module test", function () {
    before(done => {
        done();
    });

    describe("get current date", function () {
        it("should return the status code 200", function (done) {
            request.get(
                {
                    url: "http://localhost:3000/api/current-date",
                    headers: { "content-type": "application/json" }
                },
                function (err, res, body) {
                    expect(res.statusCode).to.equal(200);
                    resBody = body;
                    done();
                }
            );
        });
        it("should return date in right format", function (done) {
            expect(JSON.parse(resBody).date).to.equal(appUtils.getCurrentDate());
            done();
        });
    });
});
