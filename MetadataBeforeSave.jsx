//MetadataBeforeSafe_v2.jsx
//An InDesign CS3 JavaScript
#targetengine "session"
//Creates a simple event listener.
main();

function main() {
  var myEventListener1 = app.addEventListener("beforeSave", setMetadata, false);
  var myEventListener2 = app.addEventListener("beforeSaveAs", setMetadata, false);
}


function setMetadata() {
  if (app.activeDocument.metadataPreferences.author == "")
    if (app.activeDocument.metadataPreferences.keywords.length == 0)
      if (app.activeDocument.metadataPreferences.documentTitle == "")
        if (app.activeDocument.metadataPreferences.description == "")
          if (app.activeDocument.metadataPreferences.copyrightNotice == "")
            if (app.activeDocument.metadataPreferences.copyrightInfoURL == "")
              if (app.activeDocument.metadataPreferences.jobName == "") {
                app.activeDocument.metadataPreferences.author = "Gunther S. Gurkengabel";
                app.activeDocument.metadataPreferences.keywords = ["Katafrakt", "Kolfaktor", "Kekskrümel"];
                app.activeDocument.metadataPreferences.documentTitle = "Millionen von Metadaten";
                app.activeDocument.metadataPreferences.description = "Detlef R. Düsterdoktor dengelte dies Dokument durch";
                app.activeDocument.metadataPreferences.copyrightNotice = "gehoert: Hubert P. Honighobel";
                app.activeDocument.metadataPreferences.copyrightInfoURL = "http://www.wasndas.wa";
                app.activeDocument.metadataPreferences.jobName = "Tausend-Tumult-Test-Projekt";
                //  app.activeDocument.metadataPreferences.copyrightStatus = CopyrightStatus.NO;
                //  app.activeDocument.metadataPreferences.copyrightStatus = CopyrightStatus.UNKNOWN;
                app.activeDocument.metadataPreferences.copyrightStatus = CopyrightStatus.YES;
              }
}