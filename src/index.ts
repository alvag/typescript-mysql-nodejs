import Server from "./server/server";
import router from './router/router';

const server = Server.init(process.env.PORT)

server.app.use(router);

server.start((error: any) => {
    if (error) throw new Error(error);
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}.`);
});
