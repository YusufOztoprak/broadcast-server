const argv = (process.argv[2])

if (argv === "start") {
    require("../server/server.js")
}
else if (argv === "connect") {
    require("../client.js")
}

else {
    console.log("Invalid command")
    process.exit(1);
}