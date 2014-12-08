-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Host: 172.21.1.87
-- Generation Time: Dec 08, 2014 at 12:12 PM
-- Server version: 5.5.40-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `thomastoyekaas3f`
--

-- --------------------------------------------------------

--
-- Table structure for table `wa_opdr2_highscores`
--

CREATE TABLE IF NOT EXISTS `wa_opdr2_highscores` (
`ID` bigint(20) NOT NULL,
  `name` varchar(30) NOT NULL,
  `score` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wa_opdr2_highscores`
--

INSERT INTO `wa_opdr2_highscores` (`ID`, `name`, `score`) VALUES
(61, 'Thomas', 20),
(62, 'Koen', 213),
(63, 'Sander', 55),
(64, 'Tycho', 756),
(65, 'Thomas', 485),
(66, '[FAZE]Karel', 420),
(67, 'Glennnn', 419),
(68, 'Satan', 666),
(69, 'Mama', 49),
(70, 'Arn', 1),
(71, 'Thomas', 102620),
(72, 'justijn', 95040),
(73, 'Thomas', 104320);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wa_opdr2_highscores`
--
ALTER TABLE `wa_opdr2_highscores`
 ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `wa_opdr2_highscores`
--
ALTER TABLE `wa_opdr2_highscores`
MODIFY `ID` bigint(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=74;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
