import express from "express";

interface ServerOptions {
  port?: number;
}

export class Server {
  public readonly app = express();
  private readonly port: number;

  constructor(options: ServerOptions) {
    const { port = 3100 } = options;

    this.port = port;
  }

  async start() {
    this.app.listen(this.port, () => {
      console.log(`Server runing at http://localhost:${this.port}`);
    });
  }
}
