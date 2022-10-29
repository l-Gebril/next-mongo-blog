import Article from "../../../model/article";
import {
  findDoc,
  findDocs,
  createDoc,
  updateDoc,
  deleteDocs,
  deleteDoc
} from "../../../controllers/mongoControllers";
import { isValidObjectId } from "mongoose";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      if (!Object.keys(req.query).length)
        res.json(await findDocs(Article));
      else if(Object.keys(req.query).length && isValidObjectId(req.query.id[0])) 
        res.json(await findDoc(Article, req.query.id[0]));
      break;

    case "POST":
      if(req.body) res.json(await createDoc(Article, req.body));
      break;

    case "PUT":
      if(Object.keys(req.query).length && isValidObjectId(req.query.id[0]))
        res.json(await updateDoc(Article, req.query.id[0], req.body));
      break;

    case "DELETE":
      if(!(Object.keys(req.query).length && isValidObjectId(req.query.id[0])))
        res.json(await deleteDocs(Article));
      else
        res.json(await deleteDoc(Article, req.query.id[0]));
      break;

    default:
      break;
  }
}
