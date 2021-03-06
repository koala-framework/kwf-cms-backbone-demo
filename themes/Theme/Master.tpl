<!DOCTYPE html>
   <html lang="<?=$this->pageLanguage?>">
    <head>
        <?=$this->includeCode('header')?>
        <meta http-equiv="X-UA-Compatible" content="IE=EDGE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body class="<?=$this->rootElementClass?>">
        <div id="page">
            <div id="outerHeader">
                <div id="header">&nbsp;</div>
            </div>
            <div id="outerContent">
                <div id="content">
                    <div id="mainMenu">
                        <?=$this->component($this->boxes['mainMenu']);?>
                    </div>
                    <div id="innerContent">
                        <?=$this->component($this->boxes['subMenu']);?>
                        <?=$this->componentWithMaster($this->componentWithMaster);?>
                    </div>
                </div>
            </div>
            <div id="outerFooter">
                <div id="footer">
                    <?=$this->component($this->boxes['bottomMenu']);?>
                </div>
            </div>
        </div>
        <?=$this->includeCode('footer')?>
    </body>
</html>
