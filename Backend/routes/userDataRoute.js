import express from "express";
import { getUserData , getLastUpdates , updateUserData} from "../controllers/userDataController,js";

const router = express.Router();

router.get("/", getUserData);
router.get("/:id/last-updates", getLastUpdates);
router.put("/:id", updateUserData);



export default router;