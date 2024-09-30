DROP DATABASE IF EXISTS Istres;

CREATE DATABASE Istres;

USE Istres;

CREATE TABLE `Planes` (
	`registration` VARCHAR(10) NOT NULL,
	`brand` VARCHAR(100) NOT NULL,
	`model` VARCHAR(100),
	PRIMARY KEY (`registration`)
);

CREATE TABLE `Technicians` (
	`Id` INT NOT NULL AUTO_INCREMENT,
	`firstName` VARCHAR(50) NOT NULL,
	`surName` VARCHAR(50) NOT NULL,
	PRIMARY KEY (`Id`)
);

CREATE TABLE `Maintenances` (
	`Id` INT NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(80) NOT NULL,
	`technicianID` INT NOT NULL,
	`planeRegistration` VARCHAR(10) NOT NULL,
	`start` DATETIME NOT NULL,
	`end` DATETIME,
	PRIMARY KEY (`Id`),
    CONSTRAINT `fk_Flights-Technicians` FOREIGN KEY (technicianID) REFERENCES Technicians (Id),
    CONSTRAINT `fk_Flights-Planes` FOREIGN KEY (planeRegistration) REFERENCES Planes (registration)
);
