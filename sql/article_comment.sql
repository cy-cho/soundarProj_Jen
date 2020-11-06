-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2020-11-06 02:20:40
-- 伺服器版本： 10.4.13-MariaDB
-- PHP 版本： 7.3.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `mfee09_b`
--

-- --------------------------------------------------------

--
-- 資料表結構 `article_comment`
--

CREATE TABLE `article_comment` (
  `sid` int(11) NOT NULL COMMENT '留言編號',
  `article_sid` int(11) NOT NULL DEFAULT 0 COMMENT '對應文章ID',
  `parentId` int(11) NOT NULL COMMENT '0=主留言',
  `memberId` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '會員Id',
  `nickname` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '會員暱稱',
  `content` text COLLATE utf8_unicode_ci NOT NULL COMMENT '留言內容',
  `upPoint` int(11) NOT NULL DEFAULT 0 COMMENT '讚分',
  `downPoint` int(11) NOT NULL DEFAULT 0 COMMENT '噓分',
  `accusePoint` int(11) NOT NULL DEFAULT 0 COMMENT '檢舉分數',
  `postTime` datetime NOT NULL COMMENT '發表時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 傾印資料表的資料 `article_comment`
--

INSERT INTO `article_comment` (`sid`, `article_sid`, `parentId`, `memberId`, `nickname`, `content`, `upPoint`, `downPoint`, `accusePoint`, `postTime`) VALUES
(1, 851, 0, '1', '台中恐龍妹', '最近也開始聽podcast了,請問有推薦的頻道?', 982, 2600, 0, '2020-10-26 01:00:02'),
(2, 851, 0, '2', '台北菜雞', '最近真的超多身邊的人都開始聽podcast了!!我自己也有一些固定聽的頻道，像是：台灣運通、百靈果、股癌等等，推薦給大家~~~', 8000, 5024, 0, '2020-10-26 01:01:08'),
(3, 851, 0, '3', 'LaxJJ', '搭車的時候比起看youtuber,聽podcast真的方便多了,又不用一直拿手機', 7888, 9760, 0, '2020-10-26 01:06:41'),
(4, 851, 1, '4', '貓奴先生', '看喜歡哪一方面的耶,理財我推股癌大大', 7283, 939, 0, '2020-10-26 01:09:01'),
(5, 851, 2, '5', '被外派的菜雞', '我也是!這幾個頻道必聽!', 1431, 8606, 0, '2020-10-26 01:09:01'),
(6, 851, 1, '6', 'Charlie@TP', '如果想聽國際新聞方面的,推敏迪', 7929, 7297, 0, '2020-10-26 01:10:02'),
(7, 851, 0, '7', '阿水0816', '想請問,最近最流行的主題是什麼?', 9550, 1383, 0, '2020-10-26 01:16:02'),
(8, 851, 0, '8', '偷尼', '搭公眾交通工具的時候，很適合聽語言類的，順便練練聽力XD', 7185, 1124, 0, '2020-10-26 01:16:02'),
(9, 851, 8, '3', '小港', '不要再說沒時間學英文啦!以後搭車都聽英文podcast', 9836, 9627, 0, '2020-10-26 01:17:28'),
(10, 851, 2, '9', 'fan', '推薦百齡果!!', 4250, 5373, 0, '2020-10-26 01:17:28'),
(11, 851, 0, '10', 'DVshu', '不過有的都好長喔...將近一個小時...', 8988, 1344, 0, '2020-10-26 01:19:10'),
(12, 851, 11, '2', '五歲喝啤酒', '我朋友是放著邊聽邊做自己的事欸XD', 4756, 4506, 0, '2020-10-26 01:19:10'),
(13, 851, 11, '7', '恰克與大鳥', '請問這樣子真的有聽進去嗎?XDDD', 2165, 9576, 0, '2020-10-26 03:25:05'),
(14, 851, 0, '13879855', '隱藏阿宅', '感謝分享', 8209, 6881, 0, '2020-10-26 03:25:05'),
(15, 851, 0, '50049284', '臺北周楊青', '最近也滿多youtuber都跨到podcast領域了耶', 6022, 5096, 0, '2020-10-26 03:26:17'),
(16, 851, 0, '74166094', '蔡阿雞', '有的頻道真的滿好笑的 邊聽邊做自己的事的人+1', 1792, 6714, 0, '2020-10-26 03:26:17'),
(26, 851, 0, '67774851', 'ttoo222', '很有趣的世代、族群、理念間的碰撞與溝通，', 7345, 6394, 0, '2020-10-26 03:32:28'),
(27, 851, 0, '', '', '大家有推薦的有趣的頻道嗎??', 0, 0, 0, '2020-10-28 15:51:52'),
(28, 851, 0, '', '', '最近真的好多youtuber都加入podcast了耶', 0, 0, 0, '2020-10-28 15:51:42');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `article_comment`
--
ALTER TABLE `article_comment`
  ADD PRIMARY KEY (`sid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `article_comment`
--
ALTER TABLE `article_comment`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT COMMENT '留言編號', AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
