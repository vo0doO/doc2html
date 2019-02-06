// СТАРТ ПРИЛОЖЕНИЯ
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
} 

// ОБРАБОТКА ФОРМЫ
function processForm(formObject) {
  // ОБРАБАТЫВАЕМ ФОРМУ
  // 
  var formBlob = formObject.myFile;

  var documentId = formBlob.split('/')[5]
  Logger.log(formBlob)
  // ОТКРЫВАЕМ ДОКУМЕНТ
  var doc = DocumentApp.openById(documentId);
  Logger.log('INFO', doc.getName())
  // ПРОВЕРЯЕМ ПРАВИЛЬНО ЛИ УСТАНОВЛЕННЫ ЗАГОЛОВКИ
  // workHeaderLevels(doc)
  // Logger.log(workHeaderLevels)
    // ИЗМЕНЯЕТ ТЕКСТ НА ШАБЛОН HTML
  var txtToWp = rwDoc(doc)
  Logger.log(txtToWp)
  // СОЗДАЕМ НОВЫЙ ФАЙЛ В КОТОРЫЙ ЗАПИСЫВАЕМ ВЫХОДНОЙ ТЕКСТ
  // var docName = doc.getName() + "__TXT";
  // var newDoc = DocumentApp.create(docName);
  /// newDoc.getBody().setText(txtToWp);
  // var url = newDoc.getUrl();
  // var id = newDoc.getId();
  // var driveFile = DriveApp.getFileById(id)
  // var downloadurl = "https://docs.google.com/document/export?format=txt&id="+id
  //  Logger.getLog()
  return txtToWp
}