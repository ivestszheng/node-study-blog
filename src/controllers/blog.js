// 博客相关的方法
const getList = (author, keyword) => {
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
const getDetail = (id) => {
  // 先返回假数据
  return {
    id: 1,
    title: "标题1",
    content: "内容1",
    author: "张三",
    createAt: "1642333505015",
  };
};

module.exports = {
  getList,
  getDetail,
};
