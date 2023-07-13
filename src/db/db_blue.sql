/*
SQLyog Community v13.2.0 (64 bit)
MySQL - 10.4.28-MariaDB : Database - db_blue
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`db_blue` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `db_blue`;

/*Table structure for table `categoria` */

DROP TABLE IF EXISTS `categoria`;

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `status` varchar(10) DEFAULT 'ativo',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `categoria` */

insert  into `categoria`(`id`,`nome`,`status`) values 
(1,'Beleza','ativo'),
(2,'Saúde','ativo'),
(3,'Eletrônico','ativo'),
(4,'Smarthphone','ativo'),
(5,'Casa e Cozinha','ativo'),
(6,'Bebidas','ativo'),
(7,'Comida','ativo'),
(8,'Periféricos','ativo');

/*Table structure for table `produto` */

DROP TABLE IF EXISTS `produto`;

CREATE TABLE `produto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `descricao` text DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  `preco` tinyint(1) DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `produto` */

insert  into `produto`(`id`,`nome`,`descricao`,`imagem`,`preco`,`id_categoria`) values 
(1,'Smartphone Topaz','Descrição do Produto 1','imagem1.jpg',11,4),
(2,'Shampoo Revital','Descrição do Produto 2','imagem2.jpg',20,6),
(3,'Smart TV Crystal','Descrição do Produto 3','imagem3.jpg',50,3),
(4,'Teclado Mecânico Falcon','Descrição do Produto 4','imagem4.jpg',30,8),
(5,'Liquidificador PowerBlend','Descrição do Produto 5','imagem5.jpg',40,7),
(6,'Celular Júpiter','Descrição do Produto 6','imagem6.jpg',16,4),
(7,'Jogo de Panelas Premium','Descrição do Produto 7','imagem7.jpg',10,5),
(8,'Monitor LED ProView','Descrição do Produto 8','imagem8.jpg',80,2),
(9,'Creme Facial Renew','Descrição do Produto 9','imagem9.jpg',25,1),
(10,'Fone de Ouvido Acoustic','Descrição do Produto 10','imagem10.jpg',90,3),
(11,'Mouse Óptico Eagle','Descrição do Produto 11','imagem11.jpg',12,8),
(12,'Cafeteira Aroma','Descrição do Produto 12','imagem12.jpg',35,6),
(13,'Chocolate Cremoso','Descrição do Produto 13','imagem13.jpg',60,7),
(14,'Smartphone Ruby','Descrição do Produto 14','imagem14.jpg',22,4),
(15,'Liquidificador PowerMix','Descrição do Produto 15','imagem15.jpg',50,5),
(16,'Creme Hidratante Lumina','Descrição do Produto 16','imagem16.jpg',16,1),
(17,'Barbeador Elite','Descrição do Produto 17','imagem17.jpg',30,2),
(18,'Frigobar Compact','Descrição do Produto 18','imagem18.jpg',80,5),
(19,'Chá Verde Energize','Descrição do Produto 19','imagem19.jpg',10,7),
(20,'Aspirador de Pó MaxClean','Descrição do Produto 20','imagem20.jpg',40,3);

/*Table structure for table `produto_caracteristica` */

DROP TABLE IF EXISTS `produto_caracteristica`;

CREATE TABLE `produto_caracteristica` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `produto_caracteristica` */

insert  into `produto_caracteristica`(`id`,`descricao`) values 
(1,'Tela de alta resolução'),
(2,'Câmera com estabilização óptica'),
(3,'Bateria de longa duração'),
(4,'Processador de última geração'),
(5,'Memória RAM generosa'),
(6,'Tela de alta resolução'),
(7,'Conectividade Bluetooth'),
(8,'Design moderno e elegante'),
(9,'Função de gravação em alta definição'),
(10,'Sistema de som de alta qualidade'),
(11,'Ingredientes frescos e selecionados'),
(12,'Preparo artesanal'),
(13,'Sem adição de conservantes'),
(14,'Opções vegetarianas e veganas'),
(15,'Sabor irresistível'),
(16,'Refrescante'),
(17,'Sabores variados'),
(18,'Sem adição de açúcar'),
(19,'Fonte de vitaminas'),
(20,'Produto orgânico');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
