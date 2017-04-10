/*
Navicat MySQL Data Transfer

Source Server         : 本地mySQL
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : aolaigo

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-04-10 19:05:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodlist
-- ----------------------------
DROP TABLE IF EXISTS `goodlist`;
CREATE TABLE `goodlist` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `productID` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `price` float(10,0) unsigned NOT NULL,
  `color` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `count` int(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=600678020 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of goodlist
-- ----------------------------
INSERT INTO `goodlist` VALUES ('600678012', '1322124D', '七匹狼 男士时尚休闲短袖POLO衫 111630602244', '280', '本白', '1');
INSERT INTO `goodlist` VALUES ('600678013', '283953D', '七匹狼 圆领印花短袖T恤 111640602750', '150', '黑色', '8');
INSERT INTO `goodlist` VALUES ('600678014', '361106D', '七匹狼 翻领条纹短袖T恤 111630602767', '249', '杏黄', '5');
INSERT INTO `goodlist` VALUES ('600678015', '153619D', '七匹狼 男士时尚混纺平纹正装单西 111510302036', '699', '草绿', '1');
INSERT INTO `goodlist` VALUES ('600678016', '1322034D', '七匹狼 男士时尚休闲牛仔长裤 111620403925', '359', '黑色', '1');
INSERT INTO `goodlist` VALUES ('600678017', '306849D', '七匹狼 男士时尚毛料平纹单褶西裤 111410401141', '199', '藏青', '1');
INSERT INTO `goodlist` VALUES ('600678018', '1350953D', '七匹狼 男士卡其无褶休闲裤 1E1720402208', '299', '卡其', '2');
INSERT INTO `goodlist` VALUES ('600678019', '276621D', '七匹狼 男士纯色时尚休闲单西 111620104752', '700', '宝蓝', '1');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `tel-number` int(11) unsigned NOT NULL COMMENT '注册页面',
  `password` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gender` varchar(2) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`tel-number`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
SET FOREIGN_KEY_CHECKS=1;
