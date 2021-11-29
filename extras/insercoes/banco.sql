-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema sapataria
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sapataria` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `sapataria` ;

-- -----------------------------------------------------
-- Table `sapataria`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sapataria`.`cliente` (
  `CPF` CHAR(11) NOT NULL,
  `Nome` VARCHAR(255) NOT NULL,
  `Telefone` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`CPF`),
  UNIQUE INDEX `CPF` (`CPF` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sapataria`.`funcionario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sapataria`.`funcionario` (
  `CPF` CHAR(11) NOT NULL,
  `Nome` VARCHAR(255) NOT NULL,
  `Salario` DECIMAL(7,2) NOT NULL,
  `Complemento` VARCHAR(255) NULL DEFAULT NULL,
  `Logradouro` VARCHAR(255) NOT NULL,
  `Cidade` VARCHAR(255) NOT NULL,
  `Estado` CHAR(2) NOT NULL,
  `Numero` INT NOT NULL,
  `Bairro` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`CPF`),
  UNIQUE INDEX `CPF` (`CPF` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sapataria`.`venda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sapataria`.`venda` (
  `ID` INT NOT NULL,
  `Situacao` CHAR(1) NOT NULL,
  `Data` DATE NOT NULL,
  `FormaPagamento` CHAR(2) NOT NULL,
  `PrecoTotal` DECIMAL(7,2) NOT NULL,
  `CPFFuncionario` CHAR(11) NOT NULL,
  `CPFCliente` CHAR(11) NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `Venda_fk0` (`CPFFuncionario` ASC) VISIBLE,
  INDEX `Venda_fk1` (`CPFCliente` ASC) VISIBLE,
  CONSTRAINT `Venda_fk0`
    FOREIGN KEY (`CPFFuncionario`)
    REFERENCES `sapataria`.`funcionario` (`CPF`),
  CONSTRAINT `Venda_fk1`
    FOREIGN KEY (`CPFCliente`)
    REFERENCES `sapataria`.`cliente` (`CPF`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sapataria`.`produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sapataria`.`produto` (
  `Referencia` INT NOT NULL,
  `PrecoVenda` DECIMAL(7,2) NOT NULL,
  `Nome` VARCHAR(255) NOT NULL,
  `Descricao` VARCHAR(255) NOT NULL,
  `Marca` VARCHAR(255) NOT NULL,
  `Tamanho` INT NOT NULL,
  `QuantidadeEstoque` INT NOT NULL,
  PRIMARY KEY (`Referencia`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sapataria`.`foivendido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sapataria`.`foivendido` (
  `IdVenda` INT NOT NULL,
  `RefProduto` INT NOT NULL,
  `QuantidadeVendida` INT NOT NULL,
  `PrecoVendido` DECIMAL(7,2) NOT NULL,
  PRIMARY KEY (`IdVenda`, `RefProduto`),
  INDEX `FoiVendido_fk1` (`RefProduto` ASC) VISIBLE,
  CONSTRAINT `FoiVendido_fk0`
    FOREIGN KEY (`IdVenda`)
    REFERENCES `sapataria`.`venda` (`ID`),
  CONSTRAINT `FoiVendido_fk1`
    FOREIGN KEY (`RefProduto`)
    REFERENCES `sapataria`.`produto` (`Referencia`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sapataria`.`login`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sapataria`.`login` (
  `idlogin` INT NOT NULL AUTO_INCREMENT,
  `User` VARCHAR(45) NOT NULL,
  `Senha` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idlogin`),
  UNIQUE INDEX `idlogin_UNIQUE` (`idlogin` ASC) VISIBLE,
  UNIQUE INDEX `user_UNIQUE` (`User` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
