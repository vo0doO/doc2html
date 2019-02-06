var data = {
  "documents": [{
    "docLink": "https://docs.google.com/document/d/1d08I86HcPTf1SP4FqWAwxAbnGYs1dArLEYIqWmZ9CeU/edit",
    "document": "",
    "atribute": "",
    "body": "",
    "text": "",
    "paragraph": ""
  }]
}

var octopus = {
  init: function() {
    documentParser.init()
  }
}

// АНАЛИЗАТОР ДОКУМЕНТА
var documentParser = {
  init: function() {
    var textParagraphs = []
    var app = DocumentApp;
    var attribite = app.Attribute
    var doc = DocumentApp.openByUrl("https://docs.google.com/document/d/1d08I86HcPTf1SP4FqWAwxAbnGYs1dArLEYIqWmZ9CeU/edit");
    var docName = doc.getName() + "__TXT";
    var body = doc.getBody()
    var paragraphs = doc.getBody().getParagraphs();
    for (var i = 0; i < paragraphs.length; i++ ) {
      textParagraphs.push(paragraphs[i].getText());
      }
    return textParagraphs
  }
}


// РАЗБИРАЕМ МАССИВ ПАРАГРАФОВ
function parsingParagraphsArray(absArray) {
  var fuckArray = absArray;
  return fuckArray
}



function startTest(){
  var fuckingArray = getStringArray();
  var goodArray = parsingParagraphsArray(fuckingArray);
  var stop = 0
}









function pushResult(mystring) {
  // ПИХАЕМ СТРОКУ НА ВЫДАЧУ
  var mystring = tpar.join("\n");
  var newDoc = DocumentApp.create(docName);
  newDoc.getBody().setText(mystring);
  var url = newDoc.getUrl();
  var id = newDoc.getId();
  var driveFile = DriveApp.getFileById(id);
  driveFile.setShareableByEditors(true);
  driveFile.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
  var downloadurl = driveFile.getDownloadUrl();
  var downloadNewDoc = newDoc.getAs("application/pdf");
  var stop = 0;
}