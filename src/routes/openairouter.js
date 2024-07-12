import { Router } from "express";
import openaiclient from "../openaiclient/client.js";

const routes = Router();

routes.post("/", async (req, res) => {
  try {
    const input = req.body.input || "What can I give here?";
    const response = await openaiclient.getFunctionCall(input);
    res.status(200).send(response);
  } catch (e) {
    res.status(500).send("Internal server error");
  }
});

export default routes;
