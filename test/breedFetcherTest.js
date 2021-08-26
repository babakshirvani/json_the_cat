const { fetchBreedDescription } = require('../breedFetcher');
const assert = require('chai').assert;

describe(`#fetchBreedDescription`, () => {
  it('Should returns a string description for a valid breed.', (done) => {
    fetchBreedDescription('Persian', (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "Persians are sweet, gentle cats that can be playful or quiet and laid-back. Great with families and children, they absolutely love to lounge around the house. While they don’t mind a full house or active kids, they’ll usually hide when they need some alone time.";
      assert.equal(expectedDesc, desc[0].description.trim());
      done()
    });
  });
  it('Should returns null when input an invalid breed.', (done) => {
    fetchBreedDescription('gg', (err, desc) => {
      assert.equal(err, null);
      assert.deepEqual([], desc);
      done()
    });
  });

});