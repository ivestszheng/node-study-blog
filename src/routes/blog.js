// 处理博客相关的路由
const { SuccessModel, ErrorModel } = require("../model/responseModel");
const {
  getBlogList,
  getBlogDetail,
  createNewBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog");

const handleBlogRoute = (req, res) => {
  // 定义处理路由的逻辑
  const method = req.method;
  const id = req.query.id;
  const blogData = req.body;

  // 博客列表
  if (method === "GET" && res.path === "/api/blog/list") {
    // /api/blog/list?author=zhangsan&keyword=123
    const author = req.query.author ?? "";
    const keyword = req.query.keyword ?? "";
    const listDataPromise = getBlogList(author, keyword);
    return listDataPromise.then((listData) => {
      return new SuccessModel(listData);
    });
  }

  // 博客详情
  if (method === "GET" && res.path === "/api/blog/detail") {
    // const detailData = getBlogDetail(id);

    // return new SuccessModel(detailData);

    const detailDataPromise = getBlogDetail(id);
    return detailDataPromise.then((detailData) => {
      return new SuccessModel(detailData);
    });
  }

  // 新建博客
  if (method === "POST" && res.path === "/api/blog/new") {
    // const newBlogData = createNewBlog(blogData);
    // return new SuccessModel(newBlogData);
    const author = "zhangsan";
    req.body.author = author;
    const newBlogDataPromise = createNewBlog(blogData);

    return newBlogDataPromise.then((newBlogData) => {
      return new SuccessModel(newBlogData);
    });
  }

  // 更新博客
  if (method === "POST" && res.path === "/api/blog/update") {
    const updateBlogPromise = updateBlog(id, blogData);

    return updateBlogPromise.then((updateBlogData) => {
      if (updateBlogData) {
        return new SuccessModel("更新博客成功！");
      } else {
        return new ErrorModel("更新博客失败...");
      }
    });
  }

  // 删除博客
  if (method === "POST" && res.path === "/api/blog/delete") {
    const author = "zhangsan";
    const deleteBlogPromise = deleteBlog(id, author);

    return deleteBlogPromise.then((deleteBlogData) => {
      if (deleteBlogData) {
        return new SuccessModel("删除博客成功！");
      } else {
        return new ErrorModel("删除博客失败...");
      }
    });
  }
};

module.exports = handleBlogRoute;
