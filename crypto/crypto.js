const crypto = require('crypto');

let password = 'my_secure_password';
let password2 = 'rubicon';


const hash = crypto.createHash('sha256').update(password).digest('hex'); // used to create a hash of the password
const hash2 = crypto.createHash('sha256').update(password2).digest('hex');
const hmac = crypto.createHmac('sha256','secret-key').update('password').digest('hex'); // used to create a HMAC of the password

// used to generate random bytes

crypto.randomBytes(32,(err, buffer)=>{
    if (err) throw err;
    console.log(`Random Bytes: ${buffer.toString('hex')}`);
})   

// Generate a random integer between 1 and 10

crypto.randomInt(1, 10, (err, n) => {
  if (err) throw err;
  console.log('Random Integer:', n);
});

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// Encrypt
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('hello', 'utf8', 'hex');
encrypted += cipher.final('hex');

console.log('Encrypted:', encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');

console.log('Decrypted:', decrypted);

crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log('PBKDF2 Hash:', derivedKey.toString('hex'));
});  // password based key derivation function 2

crypto.scrypt('password', 'salt', 64, (err, derivedKey) => {
  if (err) throw err;
  console.log('Scrypt Hash:', derivedKey.toString('hex'));
});

console.log(`Password: ${password}`);
console.log(`SHA-256 Hash: ${hash}`);
console.log(`Password2: ${password2}`);
console.log(`SHA-256 Hash: ${hash2}`);
console.log(`HMAC: ${hmac}`);
