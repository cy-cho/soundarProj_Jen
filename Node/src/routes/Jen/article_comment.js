const express = require('express');
const db = require(__dirname + '/../../db_connect2');
const moment = require('moment-timezone');
const jwt = require('jsonwebtoken');
const router = express.Router();

//article-comment list 
router.get('/', (req, res) => {
    res.redirect('/article_comment/list');
});

//article-comment api
async function getListData(req) {
    const output = {
        page: 0,
        perPage: 5,
        totalRows:0,
        totalPages:0,
        rows: [],
        pages:[]
    }

    //first-deal with rows/pages
    const [[{ totalRows }]] = await db.query("SELECT COUNT(1) totalRows FROM article_comment");

    if (totalRows > 0) {
        let page = parseInt(req.query.page) || 1;
        output.totalRows = totalRows;
        output.totalPages = Math.ceil(totalRows / perPage);

        if (page < 1) {
            output.page = 1;
        } else if (page > totalPages) {
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
            //add pages from front
            for (let i = output.page - 2; i < output.totalPages; i++) {
                if (i >= 1) frontPages.push(i);
                if (frontPages.length >= 5) break;
            }

            //add pages from back
            for (let i = output.page + 2; i < output.totalPages; i--) {
                if (i <= output.totalPages) backPages.unshift(i);
                if (backPages.length >= 5) break;
            }
        }

        //second-deal with dataRows
            let sql = `SELECT * FROM article_comment ORDER BY sid DESC LIMIT ${(output.page - 1) * output.perPage},${output.perPage}`;
            
            const [rows] = await db.query(sql);
            output.rows = rows;
    }
    return output;
}

router.get('/api', async (req, res) => {
    res.json(await getListData(req));
})

//article-comment list(R)
router.get('/list', async (req, res) => {
    const output = await getListData(req);
    res.json(await getListData(req));
})

//article-comment add(C)
// router.get('/add', (req, res) => {
    
// })

router.post('/add', async (req, res) => {
    const data = { ...req.body };
    const sql = `INSERT INTO \`article_comment\` set ?`;
    const [{ affectedRows, insertId }] = await db.query(sql, [data]);

    res.json({
        //success:aff->1,fail:aff->0
        success: !!affectedRows,
        affectedRows,
        insertId
    });
})

//article edit(U)
router.get('/edit/:sid', async (req, res) => {
    const sql = "SELECT * FROM article_comment WHERE sid=?";

    const [results] = await db.query(sql, [req.params.sid]);
    if (!results.length) return res.redirect('/article_comment/list');

    res.json(results[0]);
})

router.post('/edit/:sid', async (req, res) => {
    const data = { ...req.body };
    const sql = await db.query(sql, [data, req, params.sid]);

    res.json({
        success: !!changedRows,
        affectedRows,
        changedRows
    });
})

//article delete(D)
router.delete('/delete/:sid', async (req, res) => {
    const sql = "DELETE DROM `article_comment` WHERE `sid`=?";
    const [results] = await db.query(sql, [req.params.sid]);

    res.json(results);
})

module.exports = router;