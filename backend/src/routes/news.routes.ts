
import express from "express";
import { getArticles } from "../controller/controller.ts";
const router=express.Router()

router.get("/",getArticles)
export  const articleRoutes=router;