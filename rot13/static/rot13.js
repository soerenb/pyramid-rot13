$(document).ready(function() {
    $('#in-lfile').change(function(e) {
        file = $(this).prop('files')[0]
        var reader = new FileReader()
        reader.onload = fileLoaded
        reader.onerror = fileError
        reader.readAsText(file, 'UTF-8')
    })
})

function fileLoaded(evt) {
    var $ta = document.getElementById('inputarea')
    $ta.value = evt.target.result
}

function fileError(evt) {
    alert("Error reading file")
}

function encryptText()
{
    var $ta = document.getElementById('inputarea')
    var mode = $("input[name=rot_mode]:checked").val();
    var args = {rot_mode: mode,
	        text: $ta.value}
    $.post('/encr', args,
            function(data) {
                var $ta = document.getElementById('inputarea')
                $ta.value = data},
            "text")
}

function loadFile()
{
    $('#in-lfile').trigger('click')
    return false
}
