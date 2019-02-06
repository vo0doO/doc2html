function rwDoc(doc) {
    //////
    // var url = "1EbEto4w0VNIfw3S_kjbikuSIkBzdBrGuoDjPoxeFEeY"
    // var doc = DocumentApp.openById(url)
    // Это свойства которые мы будем проверять
    //////
    var heirarchy = [
      DocumentApp.ParagraphHeading.HEADING1,
      DocumentApp.ParagraphHeading.HEADING2,
      DocumentApp.ParagraphHeading.HEADING3,
      DocumentApp.ParagraphHeading.NORMAL,
      DocumentApp.ParagraphHeading.HEADING5,
      DocumentApp.ParagraphHeading.HEADING6,
    ];

    // ПОЛУЧАЕМ ПАРАГРАФЫ
    var paragraph = doc.getBody().getParagraphs();
      // АНАЛИЗИРУЕМ СОСТОЯНИЕ ЗАПОЛНЯЕМ МОДЕЛЬ КОМПИЛИРУЕМ ТЕКСТ ПО ШАБЛОНУ
      for (var count = 0; count < paragraph.length; count ++) {
            // ЗНАЧЕНИЕ ЗАГОЛОВКА
            var heading = paragraph[count].getHeading();
            // ИНДЕКС ЗАГОЛОВКА
            var idx = heirarchy.indexOf(heading);
            
            if (idx > 0) {
            
              if (idx == 1) {
              this.model.HTMLPageElem.head.headparagraph = '<p>' + paragraph[count].getText() + '</p>'
              }
              
            if(idx == 2) {
              this.model.HTMLPageElem.body.blockhead.push("<h3>" + paragraph[count].getText() + "</h3>")
              }
              
            if(idx == 3) {
              if (paragraph[count].getText() !== "")
              this.model.HTMLPageElem.body.paragraph.push("<p>" + paragraph[count].getText() + "</p>")
              }
            
            if (idx == 4) {
              var addrAddData = this.model.Helper.HTMLaddress.replace('%address%', paragraph[count].getText().replace('Address: ', ""))
              this.model.HTMLPageElem.body.address.push(addrAddData.replace('%address%', paragraph[count].getText().replace('Address: ', "")));
            }
            
            if (idx == 5) {
              this.model.HTMLPageElem.body.instaembed.push(this.model.Helper.HTMLinstaembed.replace('%data%', paragraph[count].getText().split('/')[4]))
            }      
         }    
      }
    
    
    
    for (i = 0; i < this.model.HTMLPageElem.body.blockhead.length; i ++) {
      var strFromRepl = this.model.HTMLPageElem.body.blockhead[i].toString().replace("<h3>", "").replace("</h3>", "")
      var strToRepl = this.model.HTMLPageElem.body.address[i]
      var newAddr = strToRepl.replace("%name%", strFromRepl);
      newAddr.replace("%address")
      this.model.HTMLPageElem.body.address[i] = newAddr
      var newInstaHtml = instaEmbetGetHtml(this.model.HTMLPageElem.body.instaembed[i])
      this.model.HTMLPageElem.body.instaembed[i] = newInstaHtml      
    }
    
    var head = this.model.HTMLPageElem.head.toString();
    
    var body = this.model.HTMLPageElem.body.toString();
    
    var txtToWp = head + body
    
    console.log(body);
    
  return txtToWp
}

