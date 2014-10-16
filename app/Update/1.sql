CREATE TABLE  `app_people` (
`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`firstname` VARCHAR( 255 ) NOT NULL ,
`lastname` VARCHAR( 255 ) NOT NULL ,
`street` VARCHAR( 255 ) NOT NULL ,
`zip` VARCHAR( 20 ) NOT NULL ,
`city` VARCHAR( 255 ) NOT NULL ,
`country` VARCHAR( 10 ) NOT NULL
) ENGINE = INNODB;

INSERT INTO  `app_people` (
`id` ,
`firstname` ,
`lastname` ,
`street` ,
`zip` ,
`city` ,
`country`
)
VALUES (
NULL ,  'Hans',  'Huber',  'Honsstreet 23',  '1234',  'Honstown',  'AT'
);

INSERT INTO  `app_people` (
`id` ,
`firstname` ,
`lastname` ,
`street` ,
`zip` ,
`city` ,
`country`
)
VALUES (
NULL ,  'Josef',  'Maier',  'Seppstreet 23',  '1235',  'Sepptown',  'AT'
);

INSERT INTO  `app_people` (
`id` ,
`firstname` ,
`lastname` ,
`street` ,
`zip` ,
`city` ,
`country`
)
VALUES (
NULL ,  'Matthias',  'Huber',  'Hiasstreet 23',  '1236',  'Hiastown',  'AT'
);
