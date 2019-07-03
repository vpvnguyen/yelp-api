'use strict';

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'RbTNkJeE4PUo6FP2Ju85ZDYaxkSrgMNW-4FvrPDCzrMRnAwZqaAQIeKm8E65AsqkSM7jXFElk4zc7FYwZykM0h_75bH6WBBm7AX8Q5VCEQjisnuiARr2mw4XI1ocXXYx';

const searchRequest = {
  term:'starbucks',
  location: 'irvine, ca'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});