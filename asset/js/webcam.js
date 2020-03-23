(function(){  
    // this is for take snapshot sound
    function play() {
        var audio = document.getElementById("snapshotSound");
        audio.play();
    }
    // this is for open camera modl
    $('.CameraOpen').on('click',function(){
        $('#videoCapterMain').addClass('show');
        $('#videoCapterMain').show();
        //opening camera text
        $('.cameraOpeninformation').addClass('show');
        // this is for starting camara text hide
        setTimeout(function() {
            $(".cameraOpeninformation").removeClass('show', {}, 500)
        }, 2000);// 2000(2 seconds ) incress and decress time
        // this is for take snapshot function
        // set web cam
        Webcam.set({
            width: 400,
            height: 400,
            image_format: 'jpeg',
            jpeg_quality: 1200
        });
        Webcam.attach('#my_camera');
        // SHOW THE SNAPSHOT.
        takeSnapShot = function () {
            Webcam.snap(function (data_uri) {
                document.getElementById('result').innerHTML = 
                    '<img src="' + data_uri + '" width="100%" height="100%" />';
                    document.getElementById('SnapShotResult2').innerHTML = 
                    '<img src="' + data_uri + '" width="160px" height="109px" /> SnapShotImageName.jpg';
                    document.getElementById('SnapShotResult3').innerHTML = 
                    '<img src="' + data_uri + '" width="160px" height="109px" /> SnapShotImageName.jpg';
                    play();
                    $('.videoCapterMainButtonVideo').addClass('hideVideoBtn');
                    $('.takeaSnapshotUploadBtn').addClass('show');
                    $('#result').show();
            });
        }  
    })// end open camera modl
    // delete capter function
    $('#DeletCapter').on('click',function(){
        $('.videoCapterMainButtonVideo').removeClass('hideVideoBtn');
        $('.takeaSnapshotUploadBtn').removeClass('show');
        $('#result').hide();
    })
    // stoping camera
    $('.StopCamere').on('click',function(){
        $('#videoCapterMain').hide();
    })
    // snapshot upload popup
    $('#SnapUploadBtn').on('click',function(){
        $('#snapShotUpload').addClass('show');
    })
    // snapshot submit
    $('.submitRevison').on('click',function(){
        $('#snapShotUploadview').addClass('show');
    })
})();// end main function