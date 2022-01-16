// 博客相关的方法
const getBlogList = (author, keyword) => {
  // 从数据库中拿
  // 先返回假数据
  return [
    {
      id: 1,
      title: "标题1",
      content: "内容1",
      author: "张三",
      createAt: "1642333505015",
    },
    {
      id: 2,
      title: "标题2",
      content: "内容2",
      author: "李四",
      createAt: "1642333505044",
    },
  ];
};

// 获取博客详情数据
const getBlogDetail = (id) => {
  // 先返回假数据
  return {
    id: 1,
    title: "标题1",
    content: "内容1",
    author: "张三",
    createAt: "1642333505015",
  };
};

// 创建博客
const createNewBlog = (blogData) => {
  // blogData title content
  console.log("blogData", blogData);
  return {
    id: 1,
  };
};

module.exports = {
  getBlogList,
  getBlogDetail,
  createNewBlog,
};
