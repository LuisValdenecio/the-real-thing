// ----- On render -----

document.querySelector("body").onload = function() {

  function insertPhotoIntoHolder(id1, id2) {
      //'.profile'
      //.mediaFile

      $(function () {
          $(id1).addClass('dragging').removeClass('dragging');
      });

      $(id1).on('dragover', function () {
          $(id1).addClass('dragging')
      }).on('dragleave', function () {
          $(id1).removeClass('dragging')
      }).on('drop', function (e) {
          $(id).removeClass('dragging hasImage');

          if (e.originalEvent) {
              var file = e.originalEvent.dataTransfer.files[0];
              console.log(file);

              var reader = new FileReader();
              //attach event handlers here...

              reader.readAsDataURL(file);
              reader.onload = function (e) {
                  console.log(reader.result);
                  $(id1).css('background-image', 'url(' + reader.result + ')').addClass('hasImage');

              }
          }
      })
      $(id1).on('click', function (e) {
          //console.log('clicked')
          $(id2).click();
      });
      window.addEventListener("dragover", function (e) {
          e = e || event;
          e.preventDefault();
      }, false);
      window.addEventListener("drop", function (e) {
          e = e || event;
          e.preventDefault();
      }, false);
      $(id2).change(function (e) {

          var input = e.target;
          if (input.files && input.files[0]) {
              var file = input.files[0];

              var reader = new FileReader();

              reader.readAsDataURL(file);
              reader.onload = function (e) {
                  console.log(reader.result);
                  $(id1).css('background-image', 'url(' + reader.result + ')').addClass('hasImage');
              }
          }
      })
  }

  insertPhotoIntoHolder('.profile', '.mediaFile');
}
