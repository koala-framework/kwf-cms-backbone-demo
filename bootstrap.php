<?php
chdir(dirname(__FILE__));
require 'vendor/vivid-planet/vkwf/Vkwf/Setup.php';
Vkwf_Setup::setUp();
Vkwf_Setup::dispatchKwc();
Vkwf_Setup::dispatchMedia();

$front = Kwf_Controller_Front_Component::getInstance();

// acl ist in Kwf_Template_Acl und in config ist die aclClass gesetzt

$response = $front->dispatch();
$response->sendResponse();
