var pdfFilesDirectory = '/Database/';

// get auto-generated page 
$.ajax({url: pdfFilesDirectory}).then(function(html) {
    // create temporary DOM element
    var document = $(html);

    // find all links ending with .pdf 
    document.find('a[href$=.html]').each(function() {
        var pdfName = $(this).text();
        var pdfUrl = $(this).attr('href');

        // do what you want here 
        
    })
});