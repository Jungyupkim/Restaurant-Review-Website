-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: restaurant_review
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cuisine`
--

DROP TABLE IF EXISTS `cuisine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cuisine` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `cuisines` varchar(100) NOT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `cuisines_UNIQUE` (`cuisines`),
  UNIQUE KEY `_id_UNIQUE` (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuisine`
--

LOCK TABLES `cuisine` WRITE;
/*!40000 ALTER TABLE `cuisine` DISABLE KEYS */;
INSERT INTO `cuisine` VALUES (16,'Asian'),(3,'Chinese'),(2,'French'),(7,'Greek'),(5,'Indian'),(6,'Italian'),(4,'Japanese'),(14,'Korean'),(10,'Lebanese'),(15,'Local'),(9,'Mediterranean'),(11,'Moroccan'),(8,'Spanish'),(13,'Thai'),(12,'Turkish'),(1,'Western');
/*!40000 ALTER TABLE `cuisine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forget_password`
--

DROP TABLE IF EXISTS `forget_password`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `forget_password` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `new_password` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `verification_code` varchar(45) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `_id_UNIQUE` (`_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  CONSTRAINT `email` FOREIGN KEY (`email`) REFERENCES `user_profile` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forget_password`
--

LOCK TABLES `forget_password` WRITE;
/*!40000 ALTER TABLE `forget_password` DISABLE KEYS */;
/*!40000 ALTER TABLE `forget_password` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `restaurant_name` varchar(60) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `cuisineId` int NOT NULL,
  `average_rating` float DEFAULT NULL,
  `r_about` varchar(1000) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `address` varchar(500) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `menu` varchar(1000) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `opening_hours` varchar(60) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `thumb` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `food` varchar(1000) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `_id_UNIQUE` (`_id`),
  KEY `cuisineId_idx` (`cuisineId`),
  CONSTRAINT `cuisineId` FOREIGN KEY (`cuisineId`) REFERENCES `cuisine` (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES (1,'Krusty Krab',1,3.5,'The Krusty Krab is a fast food restaurant located in Bikini Bottom, founded and owned by Eugene H. Krabs. It is also the most popular restaurant in Bikini Bottom and one of the main locations of SpongeBob SquarePants. Famous for its Krabby Patty burgers, it is a rival to Plankton\'s highly unpopular across-the-street restaurant called the Chum Bucket. Its employees are SpongeBob SquarePants and Squidward Tentacles, respectively the fry cook and cashier.','under the sea','images/menu/m-KRUSTY KRAB.png','24hr','images/restaurant/t-Krusty Krab.jpg','images/menu/f-KRUSTY KRAB.jpg'),(2,'DIN TAI FUNG',3,2.5,NULL,'435 Orchard Rd Singapore, SG 238877',NULL,NULL,'images/restaurant/t-DIN TAI FUNG.jpg',NULL),(3,'SWEE CHOON TIM SUM',3,3.5,'dimpsum','183/185/187/189/191/193 Jalan Besar Singapore, SG 208882',NULL,NULL,'images/restaurant/t-SWEE CHOON TIM SUM.jpg',NULL),(4,'MAN MAN JAPANESE UNAGI',4,3,'japanese food','1 Keong Saik Rd Singapore, SG 089109',NULL,NULL,'images/restaurant/t-MAN MAN JAPANESE UNAGI.jpg',NULL),(5,'KILLINEY KOPITIAM',15,0,'kopitiam but fancy','67 Killiney Road Singapore, SG 239525',NULL,NULL,'images/restaurant/t-KILLINEY KOPITIAM.jpg',NULL),(6,'TIM HO WAN',3,0,'chinese food','1 Raffles Link Singapore, SG 039393',NULL,NULL,'images/restaurant/t-TIM HO WAN.jpg',NULL),(7,'LIAO FAN HAWKER CHAN',15,1,'hawker','78 Smith St Singapore, SG 058972','chimken rice ',NULL,'images/restaurant/t-LIAO FAN HAWKER CHAN.jpg',NULL),(8,'JOO BAR',14,NULL,'korea','5 Tan Quee Lan St Singapore, SG 188094',NULL,NULL,'images/restaurant/t-JOO BAR.jpg',NULL),(9,'NAKHON KITCHEN',13,0,NULL,'212 Hougang Street 21 Singapore, SG 530212',NULL,NULL,'images/restaurant/t-NAKHON KITCHEN.jpg',NULL),(10,'CHOUPINETTE',2,0,NULL,'607 Bukit Timah Road Singapore, SG 269708',NULL,NULL,'images/restaurant/t-CHOUPINETTE.jpg',NULL),(11,'IO ITALIAN OSTERIA',6,0,NULL,'4 Hillview Rise Hill V2 Singapore, SG 667979',NULL,NULL,'images/restaurant/t-IO ITALIAN OSTERIA.jpg',NULL),(12,'ASTONS SPECIALITIES',1,0,NULL,'Kitchener Rd, #04-14/16 · 6634 4755',NULL,NULL,'images/restaurant/t-ASTONS Specialities @ City Square Mall.jpg',NULL);
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `restaurantId` int NOT NULL,
  `username` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `restaurant_name` varchar(60) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `rating` float DEFAULT NULL,
  `review` text COLLATE utf8mb4_unicode_520_ci,
  `likes` int DEFAULT NULL,
  `datePosted` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `_id_UNIQUE` (`_id`),
  KEY `userId_idx` (`userId`),
  KEY `restaurantId_idx` (`restaurantId`),
  CONSTRAINT `restaurantId` FOREIGN KEY (`restaurantId`) REFERENCES `restaurant` (`_id`),
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `user_profile` (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (76,1,1,'avg','Krusty Krab',1,'avg',NULL,'Sat Jan 29 2022 15:23:00 GMT+0800 (Singapore Standard Time)'),(77,1,2,'twst','DIN TAI FUNG',1,'test',NULL,'Sat Jan 29 2022 15:26:40 GMT+0800 (Singapore Standard Time)'),(78,1,2,'h','DIN TAI FUNG',5,'h',NULL,'Sat Jan 29 2022 15:26:56 GMT+0800 (Singapore Standard Time)'),(79,1,1,'1','Krusty Krab',1,'1',NULL,'Sat Jan 29 2022 16:18:50 GMT+0800 (Singapore Standard Time)'),(80,1,1,'2','Krusty Krab',4,'2',NULL,'Sat Jan 29 2022 16:27:18 GMT+0800 (Singapore Standard Time)'),(81,1,1,'1','Krusty Krab',2,'1',NULL,'Sat Jan 29 2022 21:13:41 GMT+0800 (Singapore Standard Time)'),(82,1,2,'3','DIN TAI FUNG',3,'3',NULL,'Sat Jan 29 2022 21:14:01 GMT+0800 (Singapore Standard Time)'),(83,1,1,'testuser2','Krusty Krab',5,'testing avg rating',NULL,'Mon Jan 31 2022 01:09:03 GMT+0800 (Singapore Standard Time)'),(84,1,3,'','SWEE CHOON TIM SUM',1,'',NULL,'Mon Jan 31 2022 01:13:11 GMT+0800 (Singapore Standard Time)'),(85,1,2,'','DIN TAI FUNG',1,'',NULL,'Tue Feb 01 2022 20:48:06 GMT+0800 (Singapore Standard Time)'),(86,1,3,'testing','SWEE CHOON TIM SUM',4,'mictest',NULL,'Wed Feb 02 2022 20:37:42 GMT+0800 (Singapore Standard Time)'),(87,1,3,'1324','SWEE CHOON TIM SUM',5,'sss',NULL,'Thu Feb 03 2022 22:31:36 GMT+0800 (Singapore Standard Time)'),(88,1,4,'jungyup','MAN MAN JAPANESE UNAGI',1,'1',NULL,'Wed Feb 02 2022 21:50:56 GMT+0800 (Singapore Standard Time)'),(94,88,8,'demovid','JOO BAR',2,'',NULL,'Sun Feb 06 2022 02:32:09 GMT+0800 (Singapore Standard Time)'),(95,88,8,'demovid','JOO BAR',2,'',NULL,'Sun Feb 06 2022 02:43:04 GMT+0800 (Singapore Standard Time)'),(96,88,8,'demovid','JOO BAR',4,'',NULL,'Sun Feb 06 2022 02:46:14 GMT+0800 (Singapore Standard Time)'),(97,88,4,'demovid','MAN MAN JAPANESE UNAGI',3,'',NULL,'Sun Feb 06 2022 02:47:59 GMT+0800 (Singapore Standard Time)'),(98,83,4,'1324','MAN MAN JAPANESE UNAGI',5,'',NULL,'Sun Feb 06 2022 03:33:46 GMT+0800 (Singapore Standard Time)'),(99,90,1,'viddemo','Krusty Krab',5,'',NULL,'Sun Feb 06 2022 03:40:07 GMT+0800 (Singapore Standard Time)'),(100,90,1,'viddemo','Krusty Krab',5,'',NULL,'Sun Feb 06 2022 03:40:26 GMT+0800 (Singapore Standard Time)'),(101,90,7,'viddemo','LIAO FAN HAWKER CHAN',1,'',NULL,'Sun Feb 06 2022 03:40:49 GMT+0800 (Singapore Standard Time)');
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_profile`
--

DROP TABLE IF EXISTS `user_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_profile` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `username` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `first_name` varchar(45) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `last_name` varchar(45) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `gender` varchar(45) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `address` varchar(45) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `mobile_number` varchar(12) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `fav_restaurantId` text COLLATE utf8mb4_unicode_520_ci,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `_Id_UNIQUE` (`_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profile`
--

LOCK TABLES `user_profile` WRITE;
/*!40000 ALTER TABLE `user_profile` DISABLE KEYS */;
INSERT INTO `user_profile` VALUES (1,'trestttttt@hahaa','brrrrr','','','','','','',''),(71,'1234','1234','1234adfha','1234adfha','female','1234adfhadfhadfh','1234adfhadfhadfh','12345',NULL),(72,'13245','testing edit','1234','1234','female','1234','1234','1234',NULL),(73,'12344','12344','1234','1234','female','1234','1234','1234',NULL),(80,'123422','123422','','','female','','1234','',NULL),(82,'jungyupkim1212@gmail.com','jungyup','Jungyup','Jungyup','male','tG079186','','+6582863065',NULL),(83,'12341234','1324','12341234','21341234','other','1234','12341234','12341234',NULL),(88,'demovid@gmail.com','demovid','vid','demo','other','1234','sg','12345678',NULL),(90,'viddemo2@gmail.com','viddemo2','vid','demo','other','1234','','',NULL);
/*!40000 ALTER TABLE `user_profile` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-06  5:07:52
