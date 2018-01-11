import * as express from 'express';
import { APIRoute } from './api/api.route';
import { Config } from './config';


export class Server {
  private _app: express.Express;
  private _config: Config;

  constructor(config: Config) {
    this._config = config;
    this._app = express();
    this._app.set('etag', false);

    this._app.use('/api', APIRoute);
  }

  start() {
    this._app.listen(this._config.port, () => {
      console.log('Server Listening on:', this._config.port);
    });
  }
}
