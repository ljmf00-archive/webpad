ace.require("ace/ext/language_tools");
var editor = ace.edit("editor");
var StatusBar = ace.require("ace/ext/statusbar").StatusBar;
var statusBar = new StatusBar(editor, document.getElementById("statusBar"));
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/c_cpp");
/*editor.commands.addCommand({
    name: 'myCommand',
    bindKey: {win: 'Ctrl-M',  mac: 'Command-M'},
    exec: function(editor) {
        //...
    },
    readOnly: true // false if this command should not apply in readOnly mode
});*/
document.getElementById('editor').style.fontSize='14px';

editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});
