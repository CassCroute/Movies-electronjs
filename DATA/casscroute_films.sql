-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: casscroute
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `films`
--

DROP TABLE IF EXISTS `films`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `films` (
  `ID` int NOT NULL,
  `TITLE` text,
  `ORIGINALTITLE` text,
  `LINK` text,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `films`
--

LOCK TABLES `films` WRITE;
/*!40000 ALTER TABLE `films` DISABLE KEYS */;
INSERT INTO `films` VALUES (1,'Vendredi 13 (2009)','Vendredi 13 (2009)','https://uqload.org/embed-xkqywv19p2m2.html'),(2,'Pacific Rim : Uprising','Pacific Rim : Uprising','https://uqload.org/embed-3w9vrevwu3y9.html'),(3,'A star is born','A star is born','https://uqload.org/embed-7qm2fq16z5hd.html'),(4,'Conjuring Les dossiers Warren','Conjuring Les dossiers Warren','https://uqload.org/embed-re19mjjv4tcx.html'),(5,'Conjuring 2','Conjuring 2','https://uqload.org/embed-rl2dxdghzhrp.html'),(6,'Conjuring 3 sous l’emprise du diable','Conjuring 3 sous l’emprise du diable','https://uqload.org/embed-7d3i7cnxbvbh.html'),(7,'Maxi-papa','Maxi-papa','https://uqload.com/embed-l2t1x9f7sbax.html'),(8,'Le Tonnerre De Dieu','Le Tonnerre De Dieu','https://archive.org/details/JeanGabinLeTonnerreDeDieuFilmEntier360p'),(9,'Le Drapeau Noir Flotte Sur La Marmite','Le Drapeau Noir Flotte Sur La Marmite','https://archive.org/details/1971LeDrapeauNoirFlotteSurLaMarmite'),(10,'La Marie du Port de 1950','La Marie du Port de 1950','https://www.youtube.com/watch?v=Wc_MfiOehnc'),(11,'Victor de 1951','Victor de 1951','https://www.youtube.com/watch?v=Q0knGB6VGYQ'),(12,'Zouzou 1934','Zouzou 1934','https://www.youtube.com/watch?v=NjxA1LHqj0w'),(13,'Le Président (1961)','Le Président (1961)','https://archive.org/details/LePresident'),(14,'Terminator','Terminator','https://uqload.com/embed-4uk6w7gn8hwr.html'),(15,'Terminator 2','Terminator 2','https://uqload.com/embed-zk5qbviyhfpo.html'),(16,'Terminator 3','Terminator 3','https://uqload.com/embed-hwkyb6t39whm.html'),(17,'Terminator 4','Terminator 4','https://uqload.com/embed-6f63g0tlxa3u.html'),(18,'Terminator 5','Terminator 5','https://uqload.com/embed-qia7xmdlaoqq.html'),(19,'Terminator 6','Terminator 6','https://uqload.com/embed-0zfy2wx50eny.html'),(20,'I Robot','I Robot','https://urlz.fr/hpAa'),(21,'Monstre & cie','Monstre & cie','https://uqload.org/embed-l3md0wmw5ybe.html'),(22,'Monstre Academy','Monstre Academy','https://uqload.org/embed-jbkj4nth30lm.html'),(23,'Star Wars : Episode I : La Menace fantôme','Star Wars : Episode I : La Menace fantôme','https://uqload.org/embed-gv85blttit0v.html'),(24,'Star Wars : Episode II : L\'Attaque des clones','Star Wars : Episode II : L\'Attaque des clones','https://uqload.com/embed-sxlgywn4c4v2.html'),(25,'Star Wars : Episode III : La Revanche des Sith','Star Wars : Episode III : La Revanche des Sith','https://uqload.org/embed-0ljktzhh690z.html'),(26,'Star Wars : Episode IV : Un nouvel espoir (La Guerre des étoiles)','Star Wars : Episode IV : Un nouvel espoir (La Guerre des étoiles)','https://uqload.org/embed-ktddysf9gwew.html'),(27,'Star Wars : Episode V : l\'empire contre attaque','Star Wars : Episode V : l\'empire contre attaque','https://uqload.com/embed-zskmddcj83nw.html'),(28,'Star Wars : Episode VI : Le Retour du Jedi','Star Wars : Episode VI : Le Retour du Jedi','https://uqload.org/embed-evpygcm7kbmb.html'),(29,'Star Wars : Episode VII : Le Réveil de la Force','Star Wars : Episode VII : Le Réveil de la Force','https://uqload.org/embed-gy87vyby414z.html'),(30,'Star Wars : épisode VIII : Les Derniers Jedi','Star Wars : épisode VIII : Les Derniers Jedi','https://uqload.org/embed-vsmgq262kdbu.html'),(31,'Star Wars : Episode IX : L\'Ascension de Skywalker','Star Wars : Episode IX : L\'Ascension de Skywalker','https://uqload.org/embed-pn22t5pntxe5.html'),(32,'Wonder Woman','Wonder Woman','https://uqload.org/embed-xdbbq4ergnjp.html'),(33,'Wonder Woman 1984','Wonder Woman 1984','https://uqload.org/embed-fyd1pwe71bsy.html'),(34,'Harry Potter à l\'Ecole des Sorciers','Harry Potter à l\'Ecole des Sorciers','https://uqload.org/embed-qr7qgx5on3jl.html'),(35,'Harry Potter 2 : La Chambre des Secrets','Harry Potter 2 : La Chambre des Secrets','https://uqload.org/embed-zdbooo0quy4c.html'),(36,'Harry Potter 3 : Le Prisonnier d\'Azkaban','Harry Potter 3 : Le Prisonnier d\'Azkaban','https://uqload.org/embed-diwo2c0mayw1.html'),(37,'Harry Potter 4 : La Coupe de Feu','Harry Potter 4 : La Coupe de Feu','https://uqload.org/embed-vm6dlkr4hwcg.html'),(38,'Harry Potter 5 : L\'ordre du Phénix','Harry Potter 5 : L\'ordre du Phénix','https://uqload.org/embed-299d9ntkvxma.html'),(39,'Harry Potter 6 : Le Prince de Sang-Mêlé','Harry Potter 6 : Le Prince de Sang-Mêlé','https://uqload.org/embed-al4hpnb42vmt.html'),(40,'Harry Potter 7 : Les Reliques de la Mort : 1ère Partie','Harry Potter 7 : Les Reliques de la Mort : 1ère Partie','https://uqload.org/embed-4eyod2tijzva.html'),(41,'Harry Potter fête ses 20 ans : retour à Poudlard','Harry Potter fête ses 20 ans : retour à Poudlard','https://uqload.org/embed-fl44byhgicit.html'),(42,'Sans un bruit','Sans un bruit','https://uqload.org/embed-v971nh47idi3.html'),(43,'Sans un bruit 2','Sans un bruit 2','https://uqload.org/embed-08b7z2ydqmf6.html'),(44,'Raiponce','Raiponce','https://uqload.org/embed-zk4j2rdjo34w.html'),(45,'Space Jam : Nouvelle ère','Space Jam : Nouvelle ère','https://uqload.org/embed-0o1t8gyz8jy3.html'),(46,'Chasing Mavericks','Chasing Mavericks','https://uqload.org/embed-jzj6ofjujkls.html'),(47,'Sam, je suis Sam','Sam, je suis Sam','https://uqload.org/embed-6r6ltvtp2ybs.html'),(48,'Kiss & Kill','Kiss & Kill','https://uqload.org/embed-kb2pac50kqlx.html'),(49,'Nanny Mcphee','Nanny Mcphee','https://uqload.org/embed-ffintxnq5uax.html'),(50,'Les Mitchell contre les machines','Les Mitchell contre les machines','https://uqload.org/embed-yya97bx7us00.html'),(51,'Bird of Prey','Bird of Prey','https://uqload.com/embed-l9izjz729ey9.html'),(52,'Soupe au choux','Soupe au choux','https://uqload.com/embed-28myg3p6i443.html'),(53,'Les Croods','Les Croods','https://uqload.org/embed-c7w9d7jitv3p.html'),(54,'Les Croods 2','Les Croods 2','https://uqload.org/embed-uyfrwmymib1s.html'),(55,'Dumbo','Dumbo','https://uqload.com/embed-isdidbbt4d0a.html'),(56,'Tous en scène','Tous en scène','https://uqload.org/embed-qceecrhp2889.html'),(57,'Tous en scène 2','Tous en scène 2','https://uqload.com/embed-q6miop6bgmps.html'),(58,'Destination Finale 1','Destination Finale 1','https://vudeo.net/embed-cviiry9vuuga.html'),(59,'Destination Finale 2','Destination Finale 2','https://uqload.org/embed-zyidamzti81m.html'),(60,'Destination Finale 3','Destination Finale 3','https://uqload.org/embed-qmsgp2svtki3.html'),(61,'Destination Finale 4','Destination Finale 4','https://uqload.org/embed-sfageet33zwe.html'),(62,'Destination Finale 5','Destination Finale 5','https://uqload.org/embed-7ctnjdo3bnu5.html'),(63,'Le Bossu de Notre-Dame','Le Bossu de Notre-Dame','https://uqload.org/embed-sxvzceupmx1g.html'),(64,'Le Bossu de Notre-Dame 2 : Le Secret de Quasimodo','Le Bossu de Notre-Dame 2 : Le Secret de Quasimodo','https://uqload.org/embed-90ds9gaq78tc.html'),(65,'Astroboy','Astroboy','https://uqload.org/embed-yc4ahgfwf35m.html'),(66,'Vaiana','Vaiana','https://uqload.org/embed-ahi75u100eav.html'),(67,'Mortal Kombat','Mortal Kombat','https://uqload.com/embed-ljyepz8df1dt.html'),(68,'Criminal Squad','Criminal Squad','https://uqload.org/embed-xkbg4mw7knvs.html'),(69,'Les 3 frères','Les 3 frères','https://vudeo.net/embed-ayk99r7h96s9.html'),(70,'Jumanji : Bienvenue dans la jungle','Jumanji : Bienvenue dans la jungle','https://uqload.org/embed-g84asp91xcf7.html'),(71,'Jumanji : Next Level','Jumanji : Next Level','https://uqload.org/embed-wc732stp6mlm.html'),(72,'Rebelle','Rebelle','https://uqload.com/embed-2jjieqw8y884.html'),(73,'Rio 1','Rio 1','https://uqload.org/embed-uo9z4igqqna4.html'),(74,'Rio 2','Rio 2','https://uqload.org/embed-epse4hs6ivxf.html'),(75,'Creed','Creed','https://uqload.org/embed-mc8tlo06vyts.html'),(76,'Creed 2','Creed 2','https://uqload.org/embed-n8jgscez18qe.html'),(77,'Magic basket','Magic basket','https://uqload.com/embed-z3qfogjxqcxl.html'),(78,'50 nuances de Grey','50 nuances de Grey','https://uqload.org/embed-l6nub1zv4o4b.html'),(79,'Soul','Soul','https://uqload.org/embed-f9ispsrr3599.html'),(80,'Toy Story 1','Toy Story 1','https://uqload.org/embed-6q35y5hkbqno.html'),(81,'Toy Story 2','Toy Story 2','https://uqload.org/embed-lcx1g8ck7twt.html'),(82,'Toy Story 3','Toy Story 3','https://uqload.org/embed-w0kg39g52cnv.html'),(83,'Toy Story 4','Toy Story 4','https://uqload.org/embed-m5ojnuecxzd4.html'),(84,'Uncharted','Uncharted','https://uqload.com/embed-56bds1qfso89.html'),(85,'La  Vie Scolaire','La  Vie Scolaire','https://uqload.com/embed-6b4sax5id7gd.html'),(86,'Esther','Esther','https://uqload.org/embed-cigv1kbrk4o9.html'),(87,'The Suicide Squad','The Suicide Squad','https://uqload.org/embed-lb3jv19i9epl.html'),(88,'The Suicide Squad 2','The Suicide Squad 2','https://uqload.org/embed-aanhf5vmihi8.html'),(89,'365 Jours','365 Jours','https://uqload.com/embed-1fwin2012i0n.html'),(90,'365 Jours : Au lendemain','365 Jours : Au lendemain','https://uqload.com/embed-iel361rak999.html'),(91,'Jungle Cruise','Jungle Cruise','https://uqload.com/embed-9ctqqoz2hll3.html'),(92,'Black Widow','Black Widow','https://uqload.org/embed-gomn9h85d9ya.html'),(93,'Spiderman (new generation)','Spiderman (new generation)','https://uqload.com/embed-74nes3nk0sti.html'),(94,'Dragons 1','Dragons 1','https://uqload.org/embed-325hgixp0h9x.html'),(95,'Dragons 2','Dragons 2','https://uqload.org/embed-t1j3vceu02af.html'),(96,'Dragons 3','Dragons 3','https://uqload.org/embed-bvj81gi4aqmg.html'),(97,'Annabelle : La Maison du mal','Annabelle : La Maison du mal','https://uqload.com/embed-xvixjlh4wtqf.html'),(98,'Annabelle 2 : la Création du Mal','Annabelle 2 : la Création du Mal','https://uqload.com/embed-ml3yshbqa5tw.html'),(99,'Men in Black','Men in Black','https://uqload.com/embed-qd0o5aazl2pi.html'),(100,'Men in Black 2','Men in Black 2','https://uqload.com/embed-jfqwzmyhmfng.html'),(101,'Men in Black 3','Men in Black 3','https://uqload.com/embed-e04j8so8dc8p.html'),(102,'Men in Black : International','Men in Black : International','https://uqload.com/embed-9g7fc38oiv7s.html'),(103,'La 5ème Vague','La 5ème Vague','https://uqload.org/embed-yb8pn2sj4soy.html'),(104,'Saw','Saw','https://uqload.com/embed-tvxj5reke1ds.html'),(105,'Saw 2','Saw 2','https://uqload.org/embed-g04hqjhxrf0h.html'),(106,'Saw 3','Saw 3','https://uqload.org/embed-8mntztdle517.html'),(107,'Saw 4','Saw 4','https://uqload.org/embed-7j5i88zo84lc.html'),(108,'Saw 5','Saw 5','https://vudeo.net/embed-afl5nl7tiopr.html'),(109,'Saw 6','Saw 6','https://vudeo.net/embed-247nrvunlujv.html'),(110,'Jigsaw','Jigsaw','https://uqload.com/embed-hc7nnmce4iro.html'),(111,'Spirale : l\'heritage de Saw','Spirale : l\'heritage de Saw','https://uqload.org/embed-c3aufu2ydp6t.html'),(112,'The Hate u Give','The Hate u Give','https://uqload.org/embed-2z056qqrk4cb.html'),(113,'Les mondes de Ralph','Les mondes de Ralph','https://uqload.org/embed-k2kko7o4mxtk.html'),(114,'Les mondes de Ralph 2','Les mondes de Ralph 2','https://uqload.org/embed-szsoyu6orx88.html'),(115,'Les Indestructibles','Les Indestructibles','https://uqload.org/embed-uwyo4p0fc2ge.html'),(116,'Les Indestructibles 2','Les Indestructibles 2','https://uqload.org/embed-jqigow2qypuj.html'),(117,'Labyrinthe : La terre brulée','Labyrinthe : La terre brulée','https://uqload.com/embed-fl9at5dc1w1r.html'),(118,'Labyrinthe : Le remède mortel','Labyrinthe : Le remède mortel','https://uqload.com/embed-ql61hq4lkqjt.html'),(119,'Ratatouille','Ratatouille','https://uqload.org/embed-3ktnb2qabqh6.html'),(120,'Transformers 1','Transformers 1','https://uqload.com/embed-qz07u45y74gh.html'),(121,'Transformers 2','Transformers 2','https://uqload.com/embed-s8p0bvvxl17q.html'),(122,'Transformers 3','Transformers 3','https://uqload.com/embed-ohhunzrk2o1k.html'),(123,'Transformers 4','Transformers 4','https://uqload.com/embed-vh7itw5eeukb.html'),(124,'Transformers 5','Transformers 5','https://uqload.com/embed-e42p80ska830.html'),(125,'Veronica','Veronica','https://uqload.com/embed-6675pxbi0e1a.html'),(126,'Sherlock Holmes','Sherlock Holmes','https://uqload.com/embed-bn5a6iipsh4s.html'),(127,'Sherlock Holmes 2 : Jeu d\'ombres','Sherlock Holmes 2 : Jeu d\'ombres','https://uqload.com/embed-g5w0hjmgjcxz.html'),(128,'Lara Croft : Tomb Raider : Le Berceau de la vie','Lara Croft : Tomb Raider : Le Berceau de la vie','https://uqload.org/embed-yaylgyjwemf2.html'),(129,'Attack the block','Attack the block','https://uqload.com/embed-jm7fq3e69ipz.html'),(130,'Arnaqueur-de-tinder','Arnaqueur-de-tinder','https://uqload.com/embed-n5u3reorxxa3.html'),(131,'Les Trolls','Les Trolls','https://uqload.org/embed-dz329ti2zmje.html'),(132,'Les Trolls 2','Les Trolls 2','https://uqload.org/embed-0u25ryusm8yd.html'),(133,'Les Trolls Spécial fêtes','Les Trolls Spécial fêtes','https://uqload.org/embed-bc9uwmfyvgga.html'),(134,'The Mask','The Mask','https://uqload.org/embed-svw9rixxwojt.html'),(135,'Les segpa','Les segpa','https://uqload.com/embed-xgb69s4dojbq.html'),(136,'L\'odyssée de pi','L\'odyssée de pi','https://uqload.com/embed-6jjxfb669gd2.html'),(137,'Walkinh Chaos','Walkinh Chaos','https://uqload.org/embed-g26scz35sp6s.html'),(138,'Zombieland','Zombieland','https://uqload.org/embed-mz36nx00vvn9.html'),(139,'Retour à Zombieland','Retour à Zombieland','https://uqload.org/embed-1q6j5dau36g8.html'),(140,'Ma','Ma','https://uqload.com/embed-y2m8bxdb0rp8.html'),(141,'Escape Game 1','Escape Game 1','https://uqload.com/embed-mijft7fl4ufo.html'),(142,'Escape Game 2','Escape Game 2','https://uqload.com/embed-bp9iv21whc2g.html'),(143,'Tomb Raider','Tomb Raider','https://uqload.org/embed-9wn2uu0mwequ.html'),(144,'Hunger Games 1','Hunger Games 1','https://uqload.org/embed-slrz3rts6rnk.html'),(145,'Hunger Games 2 : L\'Embrasement','Hunger Games 2 : L\'Embrasement','https://uqload.org/embed-0ydb7sahfnfe.html'),(146,'Hunger Games 3 : La Révolte : Partie 1','Hunger Games 3 : La Révolte : Partie 1','https://uqload.org/embed-veipmfp20h6q.html'),(147,'Hunger Games 3 : La Révolte : Partie 2','Hunger Games 3 : La Révolte : Partie 2','https://uqload.org/embed-u107fkpoa6ep.html'),(148,'Justice League','Justice League','https://uqload.org/embed-t9g3pkme6w6d.html'),(149,'Zack Snyder\'s Justice League','Zack Snyder\'s Justice League','https://uqload.org/embed-ybdfch4fw1ps.html'),(150,'Aladdin','Aladdin','https://uqload.org/embed-1lfnesxhxqwr.html'),(151,'Aladdin disney','Aladdin disney','https://uqload.com/embed-3aqs8dsvmkuy.html'),(152,'Hulk','Hulk','https://uqload.org/embed-2stahbunue38.html'),(153,'L\'incroyable Hulk','L\'incroyable Hulk','https://uqload.com/embed-wbe3x3gbutzz.html'),(154,'Camping 1','Camping 1','https://uqload.com/embed-divqs81khahp.html'),(155,'Camping 2','Camping 2','https://uqload.com/embed-rdacyste9ald.html'),(156,'Camping 3','Camping 3','https://uqload.com/embed-8y1gasbye4z1.html'),(157,'Captain Marvel','Captain Marvel','https://uqload.org/embed-e29zzqletnuw.html'),(158,'Twilight : Chapitre 1 : Fascination','Twilight : Chapitre 1 : Fascination','https://uqload.org/embed-nkm5xupm7hu3.html'),(159,'Twilight : Chapitre 2 : Tentation','Twilight : Chapitre 2 : Tentation','https://uqload.org/embed-4a0si90964qu.html'),(160,'Twilight : Chapitre 3 : Hésitation','Twilight : Chapitre 3 : Hésitation','https://uqload.org/embed-eowqx86d3wh9.html'),(161,'Twilight : Chapitre 4 : Révélation, 1ère partie','Twilight : Chapitre 4 : Révélation, 1ère partie','https://uqload.org/embed-prsvf7ljqx21.html'),(162,'Twilight : Chapitre 5 : Révélation 2e partie','Twilight : Chapitre 5 : Révélation 2e partie','https://uqload.com/embed-67xweat9jnuk.html'),(163,'Sauvez Willy','Sauvez Willy','https://uqload.org/embed-nddtixdmq3oe.html'),(164,'Sauvez Willy 2','Sauvez Willy 2','https://uqload.org/embed-c8kisy7eccgt.html'),(165,'Sauvez Willy 3','Sauvez Willy 3','https://uqload.org/embed-yoqzj9s56u7e.html'),(166,'Sauvez Willy 4','Sauvez Willy 4','https://vudeo.net/embed-uorftuxpkh75.html'),(167,'Lolita malgré moi','Lolita malgré moi','https://uqload.org/embed-vbqx9whx18k5.html'),(168,'2012, Le Jugement Dernier','2012, Le Jugement Dernier','https://uqload.org/embed-m0h151xevr9k.html'),(169,'Aquaman','Aquaman','https://uqload.org/embed-cjmowv74aj2v.html'),(170,'Nos étoiles contraires','Nos étoiles contraires','https://uqload.org/embed-uo8d4x6rh35w.html'),(171,'Ant-Man','Ant-Man','https://uqload.org/embed-0e1nkj6me0v6.html'),(172,'Ant-Man et la Guêpe','Ant-Man et la Guêpe','https://uqload.org/embed-n64vvnc89tam.html'),(173,'Les minions','Les minions','https://uqload.org/embed-lbwpewsrle7j.html'),(174,'Les minions 2 , il était une fois gru','Les minions 2 , il était une fois gru','https://uqload.com/embed-l6q9seyd7xqj.html');
/*!40000 ALTER TABLE `films` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-27 22:26:38
