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
  let sql = `select * from blogs where id='${id}'`;

  return execSQL(sql).then((rows) => {
    console.log("rows", rows);
    return rows[0];
  });
};

// 创建博客
const createNewBlog = (blogData = {}) => {
  // blogData title content
  const title = blogData.title;
  const content = blogData.content;
  const author = blogData.author;
  const createdAt = Date.now();

  const sql = `insert into blogs (title, content, author, createdAt) values ('${title}', '${content}', '${author}', ${createdAt});`;

  return execSQL(sql).then((insertedResult) => {
    console.log("insertedResult", insertedResult);
    return {
      id: insertedResult.insertId,
    };
  });
};

// 更新博客
const updateBlog = (id, blogData = {}) => {
  const title = blogData.title;
  const content = blogData.content;

  const sql = `update blogs set title='${title}', content='${content}' where id =${id};`;

  return execSQL(sql).then((updateResult) => {
    console.log("updateResult", updateResult);

    if (updateResult.affectedRows > 0) {
      return true;
    }
    return false;
  });
};

// 删除博客
const deleteBlog = (id, author) => {
  const sql = `delete from blogs where id=${id} and author='${author}';`;

  return execSQL(sql).then((deleteResult) => {
    console.log("deleteResult", deleteResult);

    if (deleteResult.affectedRows > 0) {
      return true;
    }
    return false;
  });
};

module.exports = {
  getBlogList,
  getBlogDetail,
  createNewBlog,
  updateBlog,
  deleteBlog,
};
