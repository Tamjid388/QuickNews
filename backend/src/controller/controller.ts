
import Articles from "../models/Articles.ts";



export const getArticles = async (req:any, res:any) => {
  try {
    const { category, limit, source } = req.query;

    const query: any = {};

    if (category) query.category = category;
    if (source) query.sourceName = source;

    const articles = await Articles.find(query)
      .sort({ publishedAt: -1 }) 
  

    res.status(200).json({
      status: "success",
      total: articles.length,
      data: articles,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Failed to fetch articles" });
  }
};
