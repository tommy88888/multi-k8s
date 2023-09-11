const keys = require('./keys');

const redis = require('redis');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 5000,
});

const sub = redisClient.duplicate();

const results = {};

function fib(n) {
  if (n <= 1) return n;

  if (n in results) {
    return results[n];
  } else {
    results[n] = fib(n - 2) + fib(n - 1);
  }
  return results[n];
}

// function fib(index) {
//   if (index === 0) return 0;
//   if (index < 2) return 1;
//   return fib(index - 1) + fib(index - 2);
// }

sub.on('message', (channel, message) => {
  redisClient.hset('values', message, fib(parseInt(message)));
});

sub.subscribe('insert');
