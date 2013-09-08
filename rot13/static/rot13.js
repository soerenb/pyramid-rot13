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
