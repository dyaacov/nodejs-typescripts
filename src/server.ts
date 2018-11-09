import "reflect-metadata" // this shim is required
import bootstrap from "./config/bootstrap"

async function init() {
    const app = await bootstrap();
    const port = process.env.PORT || 3007
    app.listen(port);
    console.log(`User-Discovery service listening on port ${port}`);
}

init()