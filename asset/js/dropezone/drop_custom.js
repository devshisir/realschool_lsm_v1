$(document).ready(function() {
    $('#qu_form_1, #qu_form_2, #qu_form_3, #qu_form_4, #qu_form_5, #qu_form_6, #qu_form_7, #qu_form_8, #qu_form_9, #qu_form_10, #qu_form_11, #qu_form_12, #qu_form_13, #qu_form_14, #qu_form_15, #qu_form_16, #qu_form_17, #qu_form_18, #qu_form_19, #qu_form_20, #qu_form_21, #qu_form_22, #qu_form_23, #qu_form_24, #qu_form_25').FancyFileUpload({
        // send data to this url
        'url' : '',
        // key-value pairs to send to the server
        'params' : {},
        // editable file name?
        'edit' : true,
        // max file size
        'maxfilesize' : -1,
        // a list of allowed file extensions
        'accept' : null,
        // 'iec_windows', 'iec_formal', or 'si' to specify what units to use when displaying file sizes
        'displayunits' : 'iec_windows',
        // adjust the final precision when displaying file sizes
        'adjustprecision' : true,
        // the number of retries to perform before giving up
        'retries' : 5,
        // the base delay, in milliseconds, to apply between retries
        'retrydelay' : 500,
        // called for each item after it has been added to the DOM
        'added' : null,
        // called whenever starting the upload
        'startupload' : null,
        // called whenever progress is up<a href="https://www.jqueryscript.net/time-clock/">date</a>d
        'continueupload' : null,
        // called whenever an upload has been cancelled
        'uploadcancelled' : null,
        // called whenever an upload has successfully completed
        'uploadcompleted' : null,
        // jQuery File Upload options
        'fileupload' : {},
        // translation strings here
        'lang<a href="https://www.jqueryscript.net/tags.php?/map/">map</a>' : {},
        // A valid callback function that is called during initialization to allow for last second changes to the settings. 
        // Useful for altering fileupload options on the fly. 
        'preinit' : null,
      
      });





});