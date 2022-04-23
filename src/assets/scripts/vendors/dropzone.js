const dropzones = document.getElementsByClassName("dropzone");

if (dropzones.length > 0) {
  Dropzone.autoDiscover = false;
  const myDropzone = new Dropzone(".dropzone", {
    url: "/file/post",
    maxFilesize: 256,
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    maxFiles: 1,
    acceptedFiles: "image/jpeg, image/png, application/pdf",
    createImageThumbnails: true,
    autoProcessQueue: false,
    autoQueue: true,
    init: function () {},
    /**
     * The text used before any files are dropped.
     */
    dictDefaultMessage: "Arrastra tus archivos hasta aquí",

    /**
     * The text that replaces the default message text it the browser is not supported.
     */
    dictFallbackMessage: "Tu navegador no soporta drag'n'drop.",

    /**
     * The text that will be added before the fallback form.
     * If you provide a  fallback element yourself, or if this option is `null` this will
     * be ignored.
     */
    dictFallbackText:
      "Utiliza el campo a continuacion para cargar tus archivos.",

    /**
     * If the filesize is too big.
     * `{{filesize}}` and `{{maxFilesize}}` will be replaced with the respective configuration values.
     */
    dictFileTooBig:
      "El archivo es muy grande ({{filesize}}MiB). Máximo permitido: {{maxFilesize}}MiB.",

    /**
     * If the file doesn't match the file type.
     */
    dictInvalidFileType: "Formato de archivo no soportado.",

    /**
     * If the server response was invalid.
     * `{{statusCode}}` will be replaced with the servers status code.
     */
    dictResponseError: "Server responded with {{statusCode}} code.",

    /**
     * If `addRemoveLinks` is true, the text to be used for the cancel upload link.
     */
    dictCancelUpload: "Cancelar carga",

    /**
     * The text that is displayed if an upload was manually canceled
     */
    dictUploadCanceled: "Carga cancelada.",

    /**
     * If `addRemoveLinks` is true, the text to be used for confirmation when cancelling upload.
     */
    dictCancelUploadConfirmation: "Estas seguro que quieres cancelar la carga?",

    /**
     * If `addRemoveLinks` is true, the text to be used to remove a file.
     */
    dictRemoveFile: "Eliminar archivo",

    /**
     * If this is not null, then the user will be prompted before removing a file.
     */
    dictRemoveFileConfirmation: null,

    /**
     * Displayed if `maxFiles` is st and exceeded.
     * The string `{{maxFiles}}` will be replaced by the configuration value.
     */
    dictMaxFilesExceeded: "No puedes cargar mas archivos.",
  });

  const setInputFileValue = (input, file) => {
    if(!!file ){
      let list = new DataTransfer();
      let newfile = new File([file], file.name, {
        type: file.type,
      });
      
      list.items.add(newfile);

      let myFileList = list.files;
      input.files = myFileList;
    } else {
      input.value = ''
    }
  };

  const cleanDropzone = document.getElementsByClassName("dz-delete-image")[0];
  cleanDropzone.onclick = function () {
    const input =
      cleanDropzone.parentElement.querySelector("input[type='file']");
    setInputFileValue(input, null);
    myDropzone.removeAllFiles();
  };

  myDropzone.on("maxfilesexceeded", function (file) {
    myDropzone.removeFile(file);
  });

  myDropzone.on("addedfile", function (file) {
    file.previewElement.classList.remove('field-error')
    const input =
      file.previewElement.parentElement.querySelector('input[type="file"]');
    setInputFileValue(input, file);
  });
}
