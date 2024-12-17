CREATE DATABASE `Istres`;
USE `Istres`;

DROP TABLE IF EXISTS `Maintenances`;
CREATE TABLE `Maintenances` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(80) NOT NULL,
  `technicianID` int(11) NOT NULL,
  `planeRegistration` varchar(10) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_Flights-Technicians` (`technicianID`),
  KEY `fk_Flights-Planes` (`planeRegistration`),
  CONSTRAINT `fk_Flights-Planes` FOREIGN KEY (`planeRegistration`) REFERENCES `Planes` (`registration`),
  CONSTRAINT `fk_Flights-Technicians` FOREIGN KEY (`technicianID`) REFERENCES `Technicians` (`Id`)
);


DROP TABLE IF EXISTS `Planes`;
CREATE TABLE `Planes` (
  `registration` varchar(10) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `model` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`registration`)
);


DROP TABLE IF EXISTS `Technicians`;
CREATE TABLE `Technicians` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `surName` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
);