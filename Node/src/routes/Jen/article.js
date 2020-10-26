const express = require("express");
const db = require(__dirname + "/../../db_connect2");
const moment = require("moment-timezone");
const jwt = require("jsonwebtoken");
const upload_module = require(__dirname + "/../../upload_module");
const router = express.Router();

//article
router.get("/", (req, res) => {
  res.redirect("/article/list");
});

//article api
async function getListData(req) {
  const output = {
    page: 0,
    perPage: 10,
    totalRows: 0,
    totalPages: 0,
    rows: [],
    pages: [],
  };

  // search/ category/ tags/ all
  // const search = null;
  // const category = ['', '官方公告', '活動訊息', 'Podcast相關', '每週頻道推薦'];
  // const tags = ['', '新聞', '商業', '科技', '教育', '故事', '運動', '娛樂'];

  //   let search = req.query.search;
  //   let category = req.query.category;
  //   let tags = req.query.tags;

  const t_sql = "SELECT COUNT(1) totalRows FROM article";
  //   if (search) {
  //     t_sql = `SELECT * FROM article WHERE (article_title LIKE '%${search}%') OR (article_content LIKE '%${search}%') ORDER BY sid DESC`;
  //   } else if (category) {
  //     t_sql = `SELECT COUNT(1) totalRows FROM article WHERE (article_category LIKE '%${category}%') ORDER BY sid DESC`;
  //   } else if (tags) {
  //     t_sql = `SELECT COUNT(1) totalRows FROM article WHERE (article_tags LIKE '%${tags}%') ORDER BY sid DESC`;
  //   }

  //first-deal with rows/pages
  const [[{ totalRows }]] = await db.query(t_sql);

  if (totalRows > 0) {
    let page = parseInt(req.query.page) || 1;
    output.totalRows = totalRows;
    output.totalPages = Math.ceil(totalRows / output.perPage);

    if (page < 1) {
      output.page = 1;
    } else if (page > output.totalPages) {
      output.page = output.totalPages;
    } else {
      output.page = page;
    }

    //pagination(show 5 pages)
    if (output.totalPages < 5) {
      for (let i = 0; i < totalPages.length; i++) {
        output.pages.push(i);
      }
    } else {
      const frontPages = [];
      const backPages = [];
      //add pages from front,(output-2 means adding 2 pages before page)
      for (let i = output.page - 2; i < output.totalPages; i++) {
        if (i >= 1) frontPages.push(i); //only push page>=1
        if (frontPages.length >= 5) break;
      }

      //add pages from back,(output+2 means adding 2 pages after page)
      for (let i = output.page + 2; i < output.totalPages; i--) {
        if (i <= output.totalPages) backPages.unshift(i); //only push page under totalpages
        if (backPages.length >= 5) break;
      }
    }

    //second-deal with dataRows

    let sql = `SELECT * FROM article ORDER BY sid DESC LIMIT ${
      (output.page - 1) * output.perPage
    },${output.perPage}`;

    // if (search) {
    //   sql = `SELECT * FROM article WHERE (article_title LIKE '%${search}%') OR (article_content LIKE '%${search}%') ORDER BY sid DESC`;
    // } else if (category) {
    //   sql = `SELECT * FROM article WHERE (article_category LIKE '%${category}%') ORDER BY sid DESC`;
    // } else if (tags) {
    //   sql = `SELECT * FROM article WHERE (article_tags LIKE '%${tags}%') ORDER BY sid DESC`;
    // } else {
    // }

    const [rows] = await db.query(sql);
    // console.log(rArticle);
    // rArticle.forEach((element) => {
    //     moment(element.article_created_at).format('YYYY-MM-DD');
    // });
    output.rows = rows;
  }
  return output;
}

router.get("/api", async (req, res) => {
  res.json(await getListData(req));
});

//article list(R)
router.get("/list", async (req, res) => {
  const output = await getListData(req);
  res.json(await getListData(req));
});

//article detail(R)
router.get("/list/:sid", async (req, res) => {
  const sql = "SELECT * FROM article WHERE sid=?";
  const [results] = await db.query(sql, [req.params.sid]);
  res.json(results[0]);
});

//article list (search/cate/tag)
router.post("/list", async (req, res) => {
  const search = req.body.search;
  const category = req.body.category;
  const tags = req.body.tags;

  const s_sql = `AND (article_title LIKE '%${search}%') OR (article_content LIKE '%${search}%')`;
  const c_sql = `AND (article_category = '${category}')`;
  const ta_sql = `AND (article_tags LIKE '%${tags}%')`;
  const order = `ORDER BY sid DESC`;
  let sql = `SELECT * FROM article WHERE 1 `;
    let results = null;
    
    (search) ? sql += s_sql : sql;
    (tags) ? sql += ta_sql : sql;
    (category) ? sql += c_sql : sql;
    sql += order;
    // if (search) {
    //     sql += s_sql;
    //     if (tags) {
    //         sql += ta_sql;
    //         if (category) {
    //             sql += c_sql;
    //         }
    //     }
    //     sql = sql + order;
        console.log(sql);
        [results] = await db.query(sql,[req.body.category]);
    //}


  // if (search) {
  //   let sql = `SELECT * FROM article WHERE (article_title LIKE '%${search}%') OR (article_content LIKE '%${search}%') ORDER BY sid DESC`;
  //     [results] = await db.query(sql);
  // }
  // if (category) {
  //     let sql = `SELECT * FROM article WHERE article_category = ? ORDER BY sid DESC`;
  //     [results] = await db.query(sql, [category]);
  // }
  // if (tags) {
  //     let c_sql = `SELECT * FROM article WHERE article_tags LIKE '%${tags}%' ORDER BY sid DESC`;
  //     [results] = await db.query(sql);
  // }

  res.json(results);
});

router.post("/add", upload_module.none(), async (req, res) => {
  const data = { ...req.body };
  const sql = `INSERT INTO \`article\` set ?`;
  const [{ affectedRows, insertId }] = await db.query(sql, [data]);

  res.json({
    //success:aff->1,fail:aff->0
    success: !!affectedRows,
    affectedRows,
    inserId,
  });
});

//article edit(U)
router.get("/edit/:sid", async (req, res) => {
  const sql = "SELECT * FROM article WHERE sid=?";

  const [results] = await db.query(sql, [req.params.sid]);
  if (!results.length) return res.redirect("/article/list");

  res.json(results[0]);
});

router.post("/edit/:sid", upload_module.none(), async (req, res) => {
  const data = { ...req.body };
  const sql = "UPDATE `article` SET ? WHERE `sid` =?";
  const [{ affectedRows, changedRows }] = await db.query(sql, [
    data,
    req.params.sid,
  ]);

  res.json({
    success: !!changedRows,
    affectedRows,
    changedRows,
  });
});

//article delete(D)
router.delete("/delete/:sid", async (req, res) => {
  const sql = "DELETE FROM `article` WHERE `sid`=?";
  const [results] = await db.query(sql, [req.params.sid]);

  res.json(results);
});

module.exports = router;
