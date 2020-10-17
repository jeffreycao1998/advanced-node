const dns = require('dns'); // name -- address

// dns.lookup('moodify.ca', (err, address) => {
//   console.log(address);
// });

// dns.resolve4('moodify.ca', (err, address) => {
//   console.log(address);
// });

// dns.resolveMx('moodify.ca', (err, address) => {
//   console.log(address);
// });

dns.reverse('144.217.5.126', (err, hostnames) => {
  console.log(hostnames);
});