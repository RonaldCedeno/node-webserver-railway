const http = require("http");

http
  .createServer((req, res) => {
    console.log(req);
    res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    res.writeHead(200, { "Content-Type": "application/csv" });

    // const persona = {
    //   id: 1,
    //   nombre: "Ronald",
    // };
    // res.write(JSON.stringify(persona));

    res.write("id, nombre\n");
    res.write("1, Ronald\n");
    res.write("2, Adrian\n");
    res.end();
  })
  .listen(8080);

console.log("Escuchando el puerto 8080");
