<?php
class People_Component extends Kwc_Abstract
{
    public static function getSettings()
    {
        $ret = parent::getSettings();
        $ret['assetsDefer']['dep'][] = 'Backbone';
        $ret['assetsDefer']['files'][] = 'web/components/People/backbone/App.js';
        $ret['assetsDefer']['files'][] = 'web/components/People/backbone/Model/Person.js'; //wird von Collection.People benötigt
        $ret['assetsDefer']['files'][] = 'web/components/People/backbone/*';
        return $ret;
    }
}
