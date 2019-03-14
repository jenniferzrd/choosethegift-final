-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Lun 11 Mars 2019 à 11:23
-- Version du serveur :  5.6.20-log
-- Version de PHP :  5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `titrepro_authent`
--

-- --------------------------------------------------------

--
-- Structure de la table `idea`
--

CREATE TABLE IF NOT EXISTS `idea` (
`id` bigint(20) NOT NULL,
  `comment` varchar(45) NOT NULL,
  `img` varchar(255) NOT NULL,
  `jaime` bit(1) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `title` varchar(45) NOT NULL
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `idea`
--

INSERT INTO `idea` (`id`, `comment`, `img`, `jaime`, `price`, `quantity`, `title`) VALUES
(2, 'test', 'https://vignette.wikia.nocookie.net/blogclan-2/images/b/b9/Random-image-15.jpg/revision/latest?cb=20160706220047', b'0', 2, 0, 'test');

-- --------------------------------------------------------

--
-- Structure de la table `project`
--

CREATE TABLE IF NOT EXISTS `project` (
`id` bigint(20) NOT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `totalmoney` int(11) DEFAULT NULL
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Contenu de la table `project`
--

INSERT INTO `project` (`id`, `comment`, `title`, `totalmoney`) VALUES
(1, 'test', 'test', 1);

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE IF NOT EXISTS `roles` (
`id` bigint(20) NOT NULL,
  `name` varchar(60) DEFAULT NULL
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'ROLE_ADMIN'),
(2, 'ROLE_PM'),
(3, 'ROLE_USER');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`id` bigint(20) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `money` int(11) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`id`, `email`, `money`, `name`, `password`, `username`) VALUES
(1, 'test@test.com', 1, 'test', 'test', 'test'),
(2, 'user@user.com', 0, 'user', '$2a$10$Gin5KFp8xJnjUVbTK0Kvgus/qHQnNzJOhVM1oOjX0vkdEffOjpOdO', 'user');

-- --------------------------------------------------------

--
-- Structure de la table `user_projets`
--

CREATE TABLE IF NOT EXISTS `user_projets` (
  `userp_id` bigint(20) NOT NULL,
  `projet_id` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `user_roles`
--

CREATE TABLE IF NOT EXISTS `user_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `role_id`) VALUES
(1, 1),
(2, 3);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `idea`
--
ALTER TABLE `idea`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `project`
--
ALTER TABLE `project`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `UK_nb4h0p6txrmfc0xbrd1kglp9t` (`name`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`), ADD UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`);

--
-- Index pour la table `user_projets`
--
ALTER TABLE `user_projets`
 ADD PRIMARY KEY (`userp_id`,`projet_id`), ADD KEY `FKk4jd7olsjtjkvhaxpf5htt9r` (`projet_id`);

--
-- Index pour la table `user_roles`
--
ALTER TABLE `user_roles`
 ADD PRIMARY KEY (`user_id`,`role_id`), ADD KEY `FKh8ciramu9cc9q3qcqiv4ue8a6` (`role_id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `idea`
--
ALTER TABLE `idea`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `project`
--
ALTER TABLE `project`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
