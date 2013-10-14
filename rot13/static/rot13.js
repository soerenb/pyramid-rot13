inf = document.getElementById('in-lfile')
inf.onchange = function(evt) {
    file = evt.target.files[0]
    var reader = new FileReader()
    reader.onload = fileLoaded
    reader.onerror = fileError
    reader.readAsText(file, 'UTF-8')
}

function fileLoaded(evt) {
    var ta = document.getElementById('inputarea')
    ta.value = evt.target.result
}

function fileError(evt) {
    alert("Error reading file")
}

function encryptText()
{
    var xhr = new XMLHttpRequest()
    var ta = document.getElementById('inputarea')
    var rd_mode = document.getElementsByName('rot_mode')
    var args = new FormData();

    /* get encryption mode */
    for (var i = 0; i < rd_mode.length; i++) {
        if (rd_mode[i].checked)
            mode = rd_mode[i].value
    }

    /* request data */
    args.append('rot_mode', mode)
    args.append('text', ta.value)

    /* send POST request */
    xhr.open('POST', 'encr', true)
    xhr.onload = function() {
                var ta = document.getElementById('inputarea')
                ta.value = this.responseText
    }
    xhr.send(args)
}

function loadFile()
{
    inf = document.getElementById('in-lfile')
    inf.click()
}

function clearText()
{
    var ta = document.getElementById('inputarea')
    var btn = document.getElementById('in-lfile')
    ta.value = ""
    btn.value = ""
}

/* provide textarea content as file download */
function saveText()
{
    var ta = document.getElementById('inputarea')
    download("rot13.txt", ta.value)
}

function download(filename, text)
{
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' +
          encodeURIComponent(text));
    pom.setAttribute('download', filename);
    pom.click();
}
