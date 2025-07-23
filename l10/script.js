// const { Readable } = require('stream');

// // Create a simple readable stream
// const stream = new Readable({
//     read(size) {
//         this.push('Hello, Stream!\n');
//         this.push('Streaming data...\n');
//         this.push(null); // No more data
//     }
// });

// // Consume the stream and print data to console
// stream.on('data', (chunk) => {
//     console.log(`Received: ${chunk}`);
// });

// stream.on('end', () => {
//     console.log('Stream ended.');
// });




// const { Readable, Writable, pipeline } = require('stream');

// // Create a readable stream
// const readable = new Readable({
//     read(size) {
//         this.push('Hello, Pipeline!\n');
//         this.push('Streaming with pipeline...\n');
//         this.push(null); // End of stream
//     }
// });

// // Create a writable stream
// const writable = new Writable({
//     write(chunk, encoding, callback) {
//         console.log(`Writable received: ${chunk.toString()}`);
//         callback();
//     }
// });

// // Use pipeline to connect readable to writable
// pipeline(
//     readable,
//     writable,
//     (err) => {
//         if (err) {
//             console.error('Pipeline failed.', err);
//         } else {
//             console.log('Pipeline succeeded.');
//             }
//         }
//     );



const http = require('http');

let blogcontent = {
    "title": "My First Blog Post",
    "content": "This is"

}
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!\n');
    } else {
       console.log("error");
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});