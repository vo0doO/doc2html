var Set = cEs6Shim.Set;
var Map = cEs6Shim.Map;


var model = {

  Document: {
    Link: "",
    Id: "",
    Name: "",
    head: {
      title: "",
      sources: [],
      teaser: "",
      image: "",
      tags: []
    },
    body: {
      PageHead: "",
      BlockHeadings: [],
      Paragraphs: [],
      Address: [],
      InstaLinks: [],
      JobTime: [],
      Separators: []
    }
  },

  HTMLPageElem : {
    head: {
      headpaagraph: "",
      firstemptyline: "",
      firstlinebreack: "",
    },
    body: {
      blockhead: [],
      paragraph: [],
      address: [],
      instaembed: [],
      emptylines: [],
      linesbreack: []
    }
  },

  Helper: {
    HTMLpagehead: '<p>%data%</p>',
    HTMLblockhead: '<h3>data%</h3>',
    HTMLparagraph: '<p>%data%</p>',
    HTMLaddress: '<p><strong>Address</strong>: <a href="https://google.com/maps/search/"%data%>%data%</a></p>',
    HTMLinstaembed: '[instagram url = %data% width = 320]',
    HTMKlinebreaks: '<br/>'
  }

};

var octopus = {

  init: function () {
    viewHTML.init();
  },

  getDocument: function () {
    return DocumentApp.openByUrl(formBlob)
  }

};



var viewHTML = {

  // ГЛАВНЫЙ ИНИЦИАЛИЗАТОР ПОТОКА ВЫПОЛНЕНИЯ
  init: function doGet() {
    // РАЗВОРАЧИВАЕТ НА СЕРВЕРЕ ШТМЛ СОЗДАННОЕ ИЗ ШАБЛОНА Index.html

    return HtmlService.createHtmlOutputFromFile('Index');
    viewHTML.control(formObject)
  },

  // ОБРАБОТЧИК ФОРМЫ
  control: function processForm(formObject) {
    var formBlob = formObject.myFile;
    var doc = octopus.getDocument();
    var docName = doc.getName() + "__TXT";
    var paragraphs = doc.getBody().getParagraphs();
    for (var i = 0; i < paragraphs.length; i++ ) {
      tpar.push(paragraphs[i].getText());
    };
    var mystring = tpar.join("\n");
    var newDoc = DocumentApp.create(docName);
    newDoc.getBody().setText(mystring);
    var url = newDoc.getUrl();
    var id = newDoc.getId();
    var driveFile = DriveApp.getFileById(id)
    var downloadurl = "https://docs.google.com/document/export?format=txt&id="+id
    return downloadurl
  }

};

