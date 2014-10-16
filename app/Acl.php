<?php
class Acl extends Vkwf_Acl_Component_IsiWeb
{
    public function __construct()
    {
        parent::__construct();
        $this->add(new Zend_Acl_Resource('api_people'));

        $this->allow(null, 'api_people');
    }
}
