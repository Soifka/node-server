const http = require("http");
const fs = require("fs/promises");

const PORT = 3000;

const requestListener = async (req, res) => {
  const { url, method } = req;

  if(method === 'GET') {
    if (url === "/index.html") {
      try {
        const data = await fs.readFile("./views/index.html", "utf8");
        res.end(data);
      } catch(err) {
          res.statusCode = 404;
          res.end();
      }
    } else if (url === "/style.css") {
        try {
            const data = await fs.readFile("./views/style.css", "utf8");
            res.end(data);
          } catch(err) {
              res.statusCode = 404;
              res.end();
          }
    } else {
        try {
            const error = await fs.readFile("./views/error.html", "utf8");
            res.end(error);
        } catch(err) {
            res.statusCode = 404;
            res.end();
        }
    }
  } else if(method === 'POST') {
      if(url === '/user') {
        let jsonString = '';
        req.on('data', (chunk) => {
          jsonString += chunk;
        });
        req.on('end', () => {
          const user = JSON.parse(jsonString);
          console.log(user);
        })
      }
  } else {
      res.statusCode = 404;
      res.end();    
  }


};

/*
  if (url === "/index.html") {
    fs.readFile("./views/index.html", "utf8").then((data) => {
    res.end(data);
    });
  } else {
    res.statusCode = 404;
    fs.readFile("./views/error.html", "utf8").then((data) => {
      res.end(data);
    });
  }
  */

const server = http.createServer(requestListener);

server.listen(PORT); // указали серверу, что он должен прослушивать 3000 порт
