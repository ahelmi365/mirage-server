import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
      request: Model,
    },

    seeds(server) {
      server.create("user", {
        id: Math.floor(Math.random() * 100),
        name: "Ali",
        age: 30,
      });
      server.create("user", {
        id: Math.floor(Math.random() * 100),
        name: "Taha",
        age: 50,
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/users", (schema) => {
        return schema.users.all();
      });

      this.post("/users", (schema, request) => {
        console.log("inside POST method");
        let attrs = JSON.parse(request.requestBody);
        attrs.id = Math.floor(Math.random() * 100);
        server.create("user", attrs);
        return { users: attrs };
      });
    },
  });

  return server;
}
