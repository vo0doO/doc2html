// если уровни заголовка испорчены то будут перенастроены
// это гарантирует, что уровень заголовка никогда не будет больше чем на один уровень выше предыдущего
function workHeaderLevels(doc) {
  //////
  //  var url = "https://docs.google.com/document/d/1q1yQCmRm000nOoVzbig7Ms6FXIjTsZBp4quJrCITc3o/edit"
  //  var doc = DocumentApp.openByUrl(url)
  //////
    // Устанавливаем значение false когда все, так как нужно
    var DRY_RUN = true
    
    // Это единственные свойства которые мы будем учитывать и проверять
    var heirarchy = [
      DocumentApp.ParagraphHeading.HEADING1,
      DocumentApp.ParagraphHeading.HEADING2,
      DocumentApp.ParagraphHeading.HEADING3,
      DocumentApp.ParagraphHeading.HEADING4,
      DocumentApp.ParagraphHeading.HEADING5,
      DocumentApp.ParagraphHeading.HEADING6,
    ];
    
    doc.getBody().getParagraphs().reduce(function (p, c) {
        var heading = c.getHeading();
        var text = c.getText();
        var idx = heirarchy.indexOf(heading);
        // проверить, что с ним делать
        if (idx !== -1) {
            if (idx > p + 1) {
                p++;
                console.log((DRY_RUN? 'Требует настройка':
                "настроен") + c.getText().slice(0, 10) + 'от' + heading +
                    "до" + heirarchy[p]);

                // действительно делаем это
                if (!DRY_RUN) {
                    c.setHeading(heirarchy[p]);
                }
            }
            else {
                p = idx;
            }
        };
        return p;
    }, 1);
}
  
