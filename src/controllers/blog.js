const { execSQL } = require("../db/mysql");

// 博客相关的方法
const getBlogList = (author, keyword) => {
  // 从数据库中拿
  let sql = `select * from blogs where 1=1`;

  if (author) {
    sql += ` and author='${author}'`;
  }

  if (keyword) {
    sql += ` and title like '%${keyword}%'`;
  }

  return execSQL(sql);
};

// 获取博客详情数据
const getBlogDetail = (id) => {
  let sql = `select * from blogs where id='${id}'`

  return execSQL(sql).then(rows=>{
    console.log('rows',rows);
    return rows[0]
  })
};

// 创建博客
const createNewBlog = (blogData = {}) => {
  // blogData title content
  console.log("blogData", blogData);
  return {
    id: 1,
  };
};

// 更新博客
const updateBlog = (id, blogData = {}) => {
  console.log("id", id);
  console.log("blogData", blogData);

  return true;
};

// 删除博客
const deleteBlog = (id) => {
  console.log("id", id);

  return true;
};

module.exports = {
  getBlogList,
  getBlogDetail,
  createNewBlog,
  updateBlog,
  deleteBlog,
};
