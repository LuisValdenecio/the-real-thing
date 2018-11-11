// ----- On render -----

var test = "what's in it";

document.querySelector("body").load = function () {

    $(function () {
        $(".profile_two")[0].addClass('dragging').removeClass('dragging');
    });

    $(".profile_two")[0].addEventListener('dragover', function () {
        $(".profile_two")[0].addClass('dragging')
    }).addEventListener('dragleave', function () {
        $(".profile_two")[0].removeClass('dragging')
    }).addEventListener('drop', function (e) {
        $(".profile_two")[0].removeClass('dragging hasImage');

        if (e.originalEvent) {
            var file = e.originalEvent.dataTransfer.files[0];
            console.log(file);

            var reader = new FileReader();
            //attach event handlers here...

            reader.readAsDataURL(file);
            reader.onload = function (e) {
                console.log(reader.result);
                $(".profile_two")[0].css('background-image', 'url(' + reader.result + ')').addClass('hasImage');
            }
        }
    })
    $(".profile_two")[0].addEventListener('click', function (e) {
        alert('clicked')
        $(".mediaFile_two")[0].click();
    });
    window.addEventListener("dragover", function (e) {
        e = e || event;
        e.preventDefault();
    }, false);
    window.addEventListener("drop", function (e) {
        e = e || event;
        e.preventDefault();
    }, false);
    $(".mediaFile_two")[0].change(function (e) {

        var input = e.target;
        if (input.files && input.files[0]) {
            var file = input.files[0];

            var reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onload = function (e) {
                console.log(reader.result);
                $(".profile_two")[0].css('background-image', 'url(' + reader.result + ')').addClass('hasImage');
            }
        }
    })
}

alert(test);
