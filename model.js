var model = {

  document: {
    link: "",
    id: "",
    name: "",
    head: {
      title: "",
      sources: [],
      teaser: "",
      image: "",
      tags: []
    },
    body: {
      head: "",
      name: [],
      text: [],
      addr: [],
      InstaLinks: [],
      jobTime: [],
     }
    },
    
    
  HTMLPageElem : {
    head: {
      headparagraph: "",
      firstemptyline: "\n",
      firstlinebreack: "<br/>",
      fullstring: "",
      toString: function () {
        var headpar = this.headparagraph + this.firstemptyline
        this.fullstring = headpar
        return headpar
      }
    },
    body: {
      blockhead: [],
      paragraph: [],
      address: [],
      instaembed: [],
      emptylines: "\n",
      linesbreack: "<br/>",
      fullString: "",
      toString: function () {
        var outputStrings = "";
        for (var i = 0, n = this.blockhead.length; i < n; ++i) {           
            
            outputStrings+=" ";
            outputStrings+=this.emptylines;
            outputStrings+=this.linesbreack;
            outputStrings+=this.emptylines;
            outputStrings+=this.blockhead[i]
            outputStrings+=this.emptylines;
            outputStrings+=this.paragraph[i]
            outputStrings+=this.emptylines;
            outputStrings+=this.address[i]
            outputStrings+=this.emptylines;
            outputStrings+=this.instaembed[i];
            outputStrings+=this.emptylines;
            
            
            
          }
          outputStrings.toLocaleString();
          return outputStrings
      }
   }
},

  Helper: {
    HTMLpagehead: '<p>%data%</p>',
    HTMLblockhead: '<h3>data%</h3>',
    HTMLparagraph: '<p>%data%</p>',
    HTMLaddress: '<p><strong>Address</strong>: <a href="https://google.com/maps/search/%name% %address%">%address%</a></p>',
    HTMLinstaembed: 'https://api.instagram.com/oembed/?url=http://instagr.am/p/%data%/&maxwidth=1024&hidecaption=true',
    HTMKlinebreaks: '<br/>'
  }
};