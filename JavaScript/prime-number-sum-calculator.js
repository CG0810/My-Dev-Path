const sumPrimes = (num) => {
   return getPrimes(num).reduce((acc, prime) => acc + prime, 0);
};

const getPrimes = (num) => {
   const primes = [];
   for (let i = 2; i <= num; i++) {
       if (isPrime(i)) {
           primes.push(i);
       }
   }
   return primes;
};
const isPrime = (num) => {
   for (let i = 2; i <= Math.sqrt(num); i++) {
       if (num % i === 0) {
              return false;     
         }
    }
    return true;        
};