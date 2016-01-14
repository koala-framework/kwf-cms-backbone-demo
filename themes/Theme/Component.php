<?php
class Theme_Component extends Kwf_Component_Theme_Abstract
{
    public static function getSettings()
    {
        $ret = parent::getSettings();
        $ret['componentName'] = 'Theme';
        $ret['flags']['resetMaster'] = true;
        return $ret;
    }

    public static function getRootSettings()
    {
        $ret = array();
        $ret['masterTemplate'] = 'themes/Theme/Master.tpl';
        $ret['contentWidth'] = 1100;

        $ret['generators']['box'] = array(
            'class' => 'Kwf_Component_Generator_Box_Static',
            'component' => array(
                'mainMenu' => 'Theme_Menu_Main_Component',
                'subMenu' => 'Theme_Menu_Sub_Component',
                'bottomMenu' => 'Theme_Menu_Bottom_Component'
            ),
            'inherit' => true,
        );

        $ret['editComponents'] = array();

        $ret['assets']['files'][] = 'web/themes/Theme/Master.scss';
        $ret['assets']['files'][] = 'web/themes/Theme/Web.scss';
        $ret['assets']['files'][] = 'web/themes/Theme/Master.js';
        $ret['assets']['dep'][] = 'ModernizrCssMediaqueries';
        return $ret;
    }
}
