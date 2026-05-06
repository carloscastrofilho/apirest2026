import { Router } from "express";
import userRoutes from "./usersRoutes.js";
import municipiosRoutes from "./municipiosRoutes.js"
import estadosRoutes from "./estadosRoutes.js"
import dependenciasRoutes from "./dependenciaRoutes.js"
import authRoutes from "./authRoutes.js"
const swRoutes = Router();

swRoutes.use( authRoutes) ;

swRoutes.use(userRoutes);
swRoutes.use(municipiosRoutes);
swRoutes.use( estadosRoutes);
swRoutes.use(dependenciasRoutes);


export default swRoutes;