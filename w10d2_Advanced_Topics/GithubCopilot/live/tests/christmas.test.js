// mocha test for the route to show the number of days until Christmas
//

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server.js');
const should = chai.should();

chai.use(chaiHttp);

describe('days until Christmas', function() {
  it('should return the number of days until Christmas', function(done) {
    chai.request(server)
      .get('/days-until-christmas')
      .end(function(err, res) {
        res.should.have.status(200);
        res.text.should.equal('days until Christmas: 0');
        done();
      });
  });
});
