import * as express from 'express'
import * as bodyParser from 'body-parser'
import { ProductRoutes } from "./routes/product-routes";

class App {
    public app: express.Application;
    public routes: ProductRoutes; 

    constructor() {
        this.app = express();
        this.middleware();
        this.routes = new ProductRoutes();
        this.routes.routes(this.app);
    }

    // Configure Express middleware
    private middleware(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended : false }));
    }
}

export default new App().app;