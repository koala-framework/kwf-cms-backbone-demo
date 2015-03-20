
INSERT INTO `kwc_basic_cards` (`component_id`, `component`) VALUES
('1-2-1-linkTag', 'intern');

INSERT INTO `kwc_basic_link` (`component_id`, `text`) VALUES
('1-2-1', 'People');

INSERT INTO `kwc_basic_link_intern` (`component_id`, `target`, `anchor`, `rel`, `param`) VALUES
('1-2-1-linkTag-child', 'root_people', NULL, NULL, NULL);

INSERT INTO `kwc_composite_list` (`id`, `component_id`, `pos`, `visible`, `data`) VALUES
(1, '1-2', 1, 1, '[]');

INSERT INTO `kwc_paragraphs` (`id`, `component_id`, `pos`, `visible`, `device_visible`, `component`) VALUES
(2, '1', 1, 1, 'all', 'links');

INSERT INTO `kwf_pages` (`id`, `pos`, `parent_id`, `parent_subroot_id`, `is_home`, `filename`, `name`, `visible`, `device_visible`, `hide`, `component`, `custom_filename`) VALUES
(1, 1, 'root-main', 'root', 1, 'home', 'Home', 1, 'all', 0, 'paragraphs', 0);

INSERT INTO `kwf_users` (`id`, `role`, `language`, `email`, `password`, `password_salt`, `gender`, `title`, `firstname`, `lastname`, `created`, `deleted`, `logins`, `last_login`, `autologin`, `activate_token`) VALUES
(9, 'admin', 'en', 'demo@koala-framework.org', 'b2c5ae6bb7bec6021e3224f316d8a0c0', '684e86989d', 'male', '', 'Koala', 'Framework', '2011-10-25 10:06:07', 0, 1, '2015-03-20 09:02:09', NULL, NULL);
