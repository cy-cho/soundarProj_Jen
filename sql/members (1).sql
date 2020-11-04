-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2020-10-27 16:32:27
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
-- 資料庫： `mfee0902`
--

-- --------------------------------------------------------

--
-- 資料表結構 `members`
--

CREATE TABLE `members` (
  `sid` int(11) NOT NULL,
  `profile_picture` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `account` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `nickname` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `gender` int(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `cardnumber` int(255) DEFAULT NULL,
  `verify` int(255) NOT NULL DEFAULT 0,
  `podcaster` int(255) NOT NULL DEFAULT 0,
  `payingmember` int(255) NOT NULL DEFAULT 0,
  `channel_collect` varchar(255) DEFAULT NULL,
  `audio_collect` varchar(255) DEFAULT NULL,
  `google_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `google_name` varchar(255) DEFAULT NULL,
  `google_photo` varchar(255) DEFAULT NULL,
  `gmail` varchar(255) DEFAULT NULL,
  `hashcode` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `members`
--

INSERT INTO `members` (`sid`, `profile_picture`, `account`, `password`, `name`, `nickname`, `gender`, `birthday`, `phone`, `address`, `cardnumber`, `verify`, `podcaster`, `payingmember`, `channel_collect`, `audio_collect`, `google_id`, `google_name`, `google_photo`, `gmail`, `hashcode`, `created_at`) VALUES
(1, '37a4fd218fc1513e4a35b7884a1a5909.png', 'podcasttest168@gmail.com', 'mfee09', 'manager', 'manager', 1, '2020-11-20', '0975379482', ' 106台北市大安區復興南路一段390號2樓', 123456789, 1, 1, 1, NULL, NULL, '0', NULL, NULL, NULL, NULL, '2020-09-02 15:19:41'),
(2, '5fd567e7f4883edc2da7a66cc5aedd01.jpg', 'michael.sps168@gmail.com', 'michael', 'michael', 'michael', 1, '2019-11-28', '0977777555', '106台北市大安區復興南路一段390號3樓', 123456789, 1, 0, 0, NULL, NULL, '0', NULL, NULL, NULL, '6c4bc44b-93d2-4ee3-a977-dcfd7e9fcf87', '2020-09-02 15:19:05'),
(3, '8f2f7b6bc3b753fe420cd43fac51a6d8.jpg', 'demo1@gmail.com', 'demo1', 'demo1', 'demo1', 0, '1995-05-06', '0978638752', '106台北市大安區復興南路一段390號4樓', 123456789, 1, 1, 1, NULL, NULL, '0', NULL, NULL, NULL, NULL, '2020-09-02 15:24:23'),
(4, '38b6bc9ce7fa9c51970847edea2648bf.jpg', 'demo2@gmail.com', 'demo2', 'demo2', 'demo2', 1, '2000-03-05', '0999888555', '106台北市大安區復興南路一段390號5樓', 123456789, 1, 1, 0, NULL, NULL, '0', NULL, NULL, NULL, NULL, '2020-09-02 15:24:23'),
(5, '8ad2025d4be74af9b2c586672fb9e0a3.jpg', 'demo3@gmail.com', 'demo3', 'demo3', 'demo3', 1, '2001-10-10', '0987157852', '106台北市大安區復興南路一段390號6樓', 123456789, 0, 0, 0, NULL, NULL, '0', NULL, NULL, NULL, NULL, '2020-09-02 15:27:09'),
(6, '7a53c77757be2ab6282c388091788cea.jpg', 'test6@gmail.com', 'test6', 'test6', 'test6', 1, '2005-03-02', '0987598321', NULL, 123456789, 1, 0, 0, NULL, NULL, '0', NULL, NULL, NULL, NULL, '2020-09-02 15:29:48'),
(7, '4f51cf87879f6fe960a184ff9e64ded3.jpg', 'test7@gmail.com', 'test7', 'test7', 'test7', 0, '1997-06-08', '0963852741', NULL, 123456789, 0, 0, 0, NULL, NULL, '0', NULL, NULL, NULL, NULL, '2020-09-02 15:31:48'),
(8, '9b64a4a8bca0b57f1c21a0020f696370.jpg', 'test8@gmail.com', 'test8', 'test8', 'test8', 1, '2011-11-11', '0965723852', NULL, 123456789, 1, 1, 0, NULL, NULL, '0', NULL, NULL, NULL, NULL, '2020-09-02 15:34:12'),
(9, '9b3c5f07988abe1268ab62ac38f7e908.jpg', 'test9@gmail.com', 'test9', 'test9', 'test9', 1, '2000-03-27', '0963987951', NULL, 123456789, 0, 0, 0, NULL, NULL, '0', NULL, NULL, NULL, NULL, '2020-09-02 15:36:24'),
(10, '417e6bc7f41eb4e4d85cb43245372cf5.jpg', 'test10@gmail.com', 'test10', 'test10', 'test10', 1, '2011-09-01', '0985654147', NULL, 123456789, 1, 0, 0, NULL, NULL, '0', NULL, NULL, NULL, NULL, '2020-09-02 15:44:48'),
(11, 'c3ea5f03368b0015ec22026677bfa7c0.png', 'test11@gmail.com', 'test11', 'test11', 'test11', 0, '1988-01-01', '0987635852', NULL, 123456789, 0, 0, 0, NULL, NULL, '0', NULL, NULL, NULL, NULL, '2020-09-02 15:46:20'),
(12, 'b06eae637bb5231dd7d3368109626ce3.jpg', 'abc@yahoo.com.tw', '123456', 'abccc15', 'abceda', 0, '2020-09-25', '0963874592', NULL, 0, 0, 0, 0, NULL, NULL, '0', NULL, NULL, NULL, NULL, '2020-09-08 14:06:13'),
(13, '05928bec83d23ada493a77f1d21bfeb5.jpg', 'kevin@gmail.com', 'qwertasd', 'kevin', 'kevin', 1, '1993-03-04', '0963987456', NULL, 0, 0, 0, 0, NULL, NULL, '0', NULL, NULL, NULL, NULL, '2020-09-08 14:06:13'),
(14, '5c8a2d0080b3126299dc1a4610fca12d.jpg', 'test1@gmail.com', '23455', '傑哥是神', '666', 1, '2020-09-02', '0910984388', NULL, 0, 1, 1, 1, NULL, NULL, '0', NULL, NULL, NULL, NULL, '2020-09-06 22:29:40'),
(17, '241a26581cda7b72e27a2dece20fe491.jpg', 'shin@gmail.com', '12312', '132', '123', 1, '2020-10-01', '0987412581', NULL, 2147483647, 0, 0, 0, NULL, NULL, '0', NULL, NULL, NULL, NULL, '2020-09-09 15:16:57'),
(18, '6d95a4d8de5305e316afa307c85dc930.jpg', 'shinder@gmail.com', '12345', '123', '123', 0, '2020-09-25', '0987654321', NULL, 0, 0, 0, 0, NULL, NULL, '0', NULL, NULL, NULL, NULL, '2020-09-09 15:39:40'),
(19, 'e4c8be76ef204229f1c04266be43894d.jpg', 'shinder@yahoo.com.tw', '1123456', '132', '老明2', 0, '2020-09-25', '0985236974', NULL, 0, 0, 0, 0, NULL, NULL, '0', NULL, NULL, NULL, NULL, '2020-09-09 16:05:00'),
(20, 'd75d258795e467b1b07d81333c36ae52.jpg', 'shinder1@gmail.com', '12345', '132', '123', 0, '2020-09-09', '0963852741', NULL, 2147483647, 0, 0, 0, NULL, NULL, '0', NULL, NULL, NULL, NULL, '2020-09-09 16:22:21'),
(21, '7397154093cfde9db5a000c403b9a89f.jpg', '123456@yahoo.com.tw', '12345', '132', '123', 0, '2020-09-10', '0963897123', NULL, 0, 0, 0, 0, NULL, NULL, '0', NULL, NULL, NULL, NULL, '2020-09-09 16:41:06'),
(22, '93944fb88f323c83fe904d6e00ce2ef1.jpg', 'shinder2@gmail.com', '12345', 'test', '123', 0, '2020-09-25', '0987445632', NULL, 0, 0, 0, 0, NULL, NULL, '0', NULL, NULL, NULL, NULL, '2020-09-10 08:51:17'),
(23, 'c8b48785d272b2329a841d4bcfa5c842.jpg', 'shinder3@gmail.com', '12345', 'test', '123', 0, '2020-09-25', '0963852741', NULL, 0, 0, 0, 0, NULL, NULL, '0', NULL, NULL, NULL, NULL, '2020-09-10 08:52:09'),
(24, '38b6bc9ce7fa9c51970847edea2648bf.jpg', 'demo2@gmail.com', 'demo2', 'demo2', 'demo2', 1, '2000-03-05', '0999888555', '106台北市大安區復興南路一段390號5樓', 123456789, 1, 1, 0, NULL, NULL, '0', NULL, NULL, NULL, NULL, '2020-09-02 15:24:23');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`sid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `members`
--
ALTER TABLE `members`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
