<?php
class Acl extends Kwf_Acl_Component
{
    public function __construct()
    {
        parent::__construct();
        $this->add(new Zend_Acl_Resource('api_people'));

        $this->allow(null, 'api_people');
    }
}
