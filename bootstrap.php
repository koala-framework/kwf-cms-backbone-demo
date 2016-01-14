<?php
chdir(dirname(__FILE__));
require 'vendor/koala-framework/koala-framework/Kwf/Setup.php';
Kwf_Setup::setUp();


//  $pl = Kwf_Assets_Package_Default::getDefaultProviderList();
//  $d = $pl->findDependency('BackboneApp');
//  d($d);

Kwf_Setup::dispatchKwc();
Kwf_Setup::dispatchMedia();

$front = Kwf_Controller_Front_Component::getInstance();
$response = $front->dispatch();
$response->sendResponse();
