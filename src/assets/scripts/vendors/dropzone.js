const dropzone = document.getElementById('dropzone')

if(!!dropzone){
 const myDropzone = new Dropzone("#dropzone", { 
    url: "/file/post", 
    maxFilesize: 256, 
    thumbnailWidth: 120, 
    thumbnailHeight: 120, 
    maxFiles: 1, 
    acceptedFiles: "image/jpg, image/png", 
    createImageThumbnails: true
  });
  myDropzone.on("complete", function(file) {
    const cleanDropzone =  document.getElementsByClassName("dz-delete-image")
    for(const cta of cleanDropzone){
      cta.onclick=function() {
        myDropzone.removeAllFiles();
      };
    }
  });
}