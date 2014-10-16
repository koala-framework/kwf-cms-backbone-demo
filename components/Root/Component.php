<?php
class Root_Component extends Kwc_Root_Component
{
    public static function getSettings()
    {
        $ret = parent::getSettings();
        Kwf_Component_Theme_Abstract::applySettings($ret, Kwf_Config::getValue('kwc.theme'));

        $ret['generators']['people'] = array(
            'class' => 'Kwf_Component_Generator_Page_Static',
            'component' => 'People_Component',
            'name' => trlStatic('People')
        );
        return $ret;
    }
}
