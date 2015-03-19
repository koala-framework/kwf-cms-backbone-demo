CREATE TABLE IF NOT EXISTS `app_people` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `zip` varchar(20) NOT NULL,
  `city` varchar(255) NOT NULL,
  `country` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

INSERT INTO `app_people` (`id`, `firstname`, `lastname`, `street`, `zip`, `city`, `country`) VALUES
(1, 'Hans', 'Huber', 'Honsstreet 23', '1234', 'Honstown', 'AT'),
(2, 'Josef', 'Maier', 'Seppstreet 23', '1235', 'Sepptown', 'AT'),
(3, 'Matthias', 'Huber', 'Hiasstreet 23', '1236', 'Hiastown', 'AT');
