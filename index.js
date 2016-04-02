var dragSrc = null;
var modIDN = 0;
var sketchContent;
var moduleName;
var chanArray;

window.onbeforeunload = function(e) {
  return 'Leaving this page will erase your current sketch!';
};

function handleDragStart(e) {
  dragSrc = this;
  e.dataTransfer.effectAllowed = 'copy';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnter(e) {
  var d = document.getElementById('canvas').classList.add('over');
}

function handleDragLeave(e) {
  var d = document.getElementById('canvas').classList.remove('over');
}

function handleDrop(e) {

  if (e.stopPropagation) {
    e.stopPropagation(); // Preventing random redirect.
  }

  if (dragSrc != this) {
    
    var newModule = document.createElement('div');
    modIDN++;
    newModule.id = 'module' + modIDN;

    if (dragSrc.id == 'latchky') {
      newModule.innerHTML = latchky;
      newModule.className = "latchky moduleSizeA";
      var d = document.getElementById('canvas').appendChild(newModule);
    }

    if (dragSrc.id == 'momento') {
      newModule.innerHTML = momento;
      newModule.className = "momento moduleSizeA";
      var d = document.getElementById('canvas').appendChild(newModule);
    }

    if (dragSrc.id == 'fad3d') {
      newModule.innerHTML = fader;
      newModule.className = "fad3d moduleSizeA";
      var d = document.getElementById('canvas').appendChild(newModule);
    }

    if (dragSrc.id == 'chas3r') {
      newModule.innerHTML = '<img draggable="false" class="moduleSizeA" src="./Resources/chaser.png">';
      newModule.className = '';
      var d = document.getElementById('canvas').appendChild(newModule);
    }

    if (dragSrc.id == 'blink3r') {
      newModule.innerHTML = blinker;
      newModule.className = "blink3r moduleSizeA";
      var d = document.getElementById('canvas').appendChild(newModule);
    }

    if (dragSrc.id == 'indic8r') {
      newModule.innerHTML = indik8r;
      newModule.className = "indik8r moduleSizeA";
      var d = document.getElementById('canvas').appendChild(newModule);
    }

    if (dragSrc.id == 'traverse') {
      newModule.innerHTML = traverse;
      newModule.className = "traverse moduleSizeA";
      var d = document.getElementById('canvas').appendChild(newModule);
    }

    if (dragSrc.id == 'oneshot') {
      newModule.innerHTML = oneshot;
      newModule.className = "oneshot moduleSizeA";
      var d = document.getElementById('canvas').appendChild(newModule);
    }

    if (dragSrc.id == 'boom') {
      newModule.innerHTML = '<img draggable="false" class="moduleSizeA" src="./Resources/boom.png">';
      newModule.className = '';
      var d = document.getElementById('canvas').appendChild(newModule);
    }

    if (dragSrc.id == 'zap') {
      newModule.innerHTML = '<img draggable="false" class="moduleSizeA" src="./Resources/zap.png">';
      newModule.className = '';
      var d = document.getElementById('canvas').appendChild(newModule);
    }

    if (dragSrc.id == 'metronome') {
      newModule.innerHTML = '<img draggable="false" class="moduleSizeA" src="./Resources/metronome.png">';
      newModule.className = '';
      var d = document.getElementById('canvas').appendChild(newModule);
    }

    if (dragSrc.id == 'newsboy') {
      newModule.innerHTML = '<img draggable="false" class="moduleSizeA" src="./Resources/newsboy.png">';
      newModule.className = '';
      var d = document.getElementById('canvas').appendChild(newModule);
    }

    if (dragSrc.id == 'fourears') {
      newModule.innerHTML = '<img draggable="false" class="moduleSizeA" src="./Resources/fourears.png">';
      newModule.className = '';
      var d = document.getElementById('canvas').appendChild(newModule);
    }

    
    if(document.getElementById("channel")){
	document.getElementById("channel").id = "channel_"+modIDN;}
    if(document.getElementById("pin")){
	document.getElementById("pin").id = "pin_"+modIDN;}
    if(document.getElementById("tempo")){
	document.getElementById("tempo").id = "tempo_"+modIDN;}
    if(document.getElementById("limit1")){
	document.getElementById("limit1").id = "limit1_"+modIDN;}
    if(document.getElementById("limit2")){
	document.getElementById("limit2").id = "limit2_"+modIDN;}
    if(document.getElementById("rada")){
	document.getElementById("rada").id = "rada_"+modIDN;
	document.getElementById("rada_"+modIDN).name = "rad_"+modIDN}
    if(document.getElementById("radb")){
	document.getElementById("radb").id = "radb_"+modIDN;
	document.getElementById("radb_"+modIDN).name = "rad_"+modIDN}



  }

  return false;
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }

  e.dataTransfer.dropEffect = 'copy';

  return false;
}

function handleDragEnd(e) {
    var d = document.getElementById('canvas').classList.remove('over');
}

var cols = document.querySelectorAll('.ico');
[].forEach.call(cols, function(col) {
  col.addEventListener('dragstart', handleDragStart, false);
  col.addEventListener('dragend', handleDragEnd, false);
});

var cols = document.querySelectorAll('.canvas');
[].forEach.call(cols, function(col) {
  col.addEventListener('drop', handleDrop, false);
  col.addEventListener('dragover', handleDragOver, false);
  col.addEventListener('dragend', handleDragEnd, false);
  col.addEventListener('dragenter', handleDragEnter, false);
  col.addEventListener('dragleave', handleDragLeave, false);
});

var fader = '<div class="taskIcons"><img onclick="javascript:halp()" src="./Resources/halp.png">&nbsp;&nbsp;<img onclick="javascript:closeDiv(this.parentNode.parentNode)" src="./Resources/kill.png"></div><span title="Control Channel"><input class="numberField inchan" type="number" min="0" max="255" step="1" value="0" id="channel" name="channel"><input class="numberFieldBG inchan" type="number" min="0" max="255" step="1" value="88"></span><span title="LED Pin"><input type="text" name="ledPin" id="pin" class="textField pin"><input type="text" class="textFieldBG pin" value="~~"></span><span title="Fader Speed"><input id="tempo" type="range" min="100" max="500" step="1" class="tempo"></span><div class="labels">&nbsp;&nbsp;led pin &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; input channel &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; fader speed</div>';

var blinker = '<div class="taskIcons"><img onclick="javascript:halp()" src="./Resources/halp.png">&nbsp;&nbsp;<img onclick="javascript:closeDiv(this.parentNode.parentNode)" src="./Resources/kill.png"></div><span title="Control Channel"><input class="numberField inchan" type="number" min="0" max="255" step="1" value="0" id="channel" name="channel"><input class="numberFieldBG inchan" type="number" min="0" max="255" step="1" value="88"></span><span title="LED Pin"><input type="text" name="ledPin" id="pin" class="textField pin"><input type="text" class="textFieldBG pin" value="~~"></span><span title="Blink Speed"><input id="tempo" type="range" min="100" max="500" step="1" class="tempo"></span><div class="labels">&nbsp;&nbsp;led pin &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; input channel &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; blink speed</div>';

var momento = '<div class="taskIcons"><img onclick="javascript:halp()" src="./Resources/halp.png">&nbsp;&nbsp;<img onclick="javascript:closeDiv(this.parentNode.parentNode)" src="./Resources/kill.png"></div><span title="Control Channel"><input class="numberField inchan" type="number" min="0" max="255" step="1" value="0" id="channel" name="channel"><input class="numberFieldBG inchan" type="number" min="0" max="255" step="1" value="88"></span><span title="Switch Pin"><input type="text" name="switchPin" id="pin" class="textField pin"><input type="text" class="textFieldBG pin" value="~~"></span><span title="Default Switch Position"><input type="radio" id="rada" name="rad" class="radioB nOn"><div class="radioLabels">ON&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OFF</div><input type="radio" name="rad" id="radb" class="radioB nOff"></span><div class="labels">switch pin &nbsp;&nbsp;&nbsp;&nbsp; input channel &nbsp;&nbsp; default position</div>'

var latchky = '<div class="taskIcons"><img onclick="javascript:halp()" src="./Resources/halp.png">&nbsp;&nbsp;<img onclick="javascript:closeDiv(this.parentNode.parentNode)" src="./Resources/kill.png"></div><span title="Control Channel"><input class="numberField inchan" type="number" min="0" max="255" step="1" value="0" id="channel" name="channel"><input class="numberFieldBG inchan" type="number" min="0" max="255" step="1" value="88"></span><span title="Switch Pin"><input type="text" name="switchPin" id="pin" class="textField pin"><input type="text" class="textFieldBG pin" value="~~"></span><span title="Default Switch Position"><input type="radio" name="rad" id="rada" class="radioB nOn"><div class="radioLabels">ON&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OFF</div><input type="radio" name="rad" id="radb" class="radioB nOff"></span><div class="labels">switch pin &nbsp;&nbsp;&nbsp;&nbsp; input channel &nbsp;&nbsp;&nbsp;&nbsp; start position</div>'

var traverse = '<div class="taskIcons"><img onclick="javascript:halp()" src="./Resources/halp.png">&nbsp;&nbsp;<img onclick="javascript:closeDiv(this.parentNode.parentNode)" src="./Resources/kill.png"></div><span title="Control Channel"><input class="numberField inchan" type="number" min="0" max="255" step="1" value="0" id="channel" name="channel"><input class="numberFieldBG inchan" type="number" min="0" max="255" step="1" value="88"></span><span title="LED Pin"><input type="text" name="ledPin" id="pin" class="textField pin"><input type="text" class="textFieldBG pin" value="~~"></span><span title="Servo Limits"><input id="limit1" type="range" value="0" min="0" max="180" step="1" class="limit1"><input id="limit2" type="range" value="180" min="0" max="180" step="1" class="limit2"></span><div class="servoLabels"> 0|---------|---------|180 </div><div class="labels orng">&nbsp;&nbsp;led pin &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; input channel &nbsp;&nbsp;&nbsp;&nbsp; servo limits</div>' 

var oneshot = '<div class="taskIcons"><img onclick="javascript:halp()" src="./Resources/halp.png">&nbsp;&nbsp;<img onclick="javascript:closeDiv(this.parentNode.parentNode)" src="./Resources/kill.png"></div><span title="Control Channel"><input class="numberField inchan" type="number" min="0" max="255" step="1" value="0" id="channel" name="channel"><input class="numberFieldBG inchan" type="number" min="0" max="255" step="1" value="88"></span><span title="LED Pin"><input type="text" name="ledPin" id="pin" class="textField pin"><input type="text" class="textFieldBG pin" value="~~"></span><span title="Servo Limits"><input id="limit1" type="range" value="0" min="0" max="180" step="1" class="limit1"><input id="limit2" type="range" value="180" min="0" max="180" step="1" class="limit2"></span><div class="servoLabels"> 0|---------|---------|180 </div><div class="labels orng">&nbsp;&nbsp;led pin &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; input channel &nbsp;&nbsp;&nbsp;&nbsp; servo limits</div>' 

var indik8r = '<div class="taskIcons"><img onclick="javascript:halp()" src="./Resources/halp.png">&nbsp;&nbsp;<img onclick="javascript:closeDiv(this.parentNode.parentNode)" src="./Resources/kill.png"></div><span title="Control Channel"><input class="numberField inchan" type="number" min="0" max="255" step="1" value="0" id="channel" name="channel"><input class="numberFieldBG inchan" type="number" min="0" max="255" step="1" value="88"></span><span title="Switch Pin"><input type="text" name="switchPin" id="pin" class="textField pin"><input type="text" class="textFieldBG pin" value="~~"></span><span title="Default Switch Position"><input type="radio" name="rad" id="rada" class="radioB nOn"><div class="radioLabels">ON&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OFF</div><input type="radio" name="rad" id="radb" class="radioB nOff"></span><div class="labels">switch pin &nbsp;&nbsp;&nbsp;&nbsp; input channel &nbsp;&nbsp;&nbsp;&nbsp; start position</div>'

function closeDiv(deadman) {
deadman.parentNode.removeChild(deadman);
}

function halp() {
alert("Hello! I am halp!!");
}


function generate() {

sketchContent = '';
document.getElementById('sketch').value = '';
chanArray = '';

//First, write header boilerplate and channel globals

sketchContent += '// Here is your sketch!\n\n/* if there are any required libraries or other boilerplate, they will live here. */\n\n';

for(m = 0; m <= modIDN; m++){

    if(document.getElementById("module"+m)){

        moduleName = document.getElementById("module"+m).className;
	moduleName = moduleName.substr(0,moduleName.indexOf(' '));

	var chan = document.getElementById("channel_"+m).value;

	if(chanArray.indexOf(chan) == -1){ // if channel hasn't been addressed 
	chanArray += chan; // add channel to the list
	sketchContent += '// global channel ' + chan + '\n';
	sketchContent += 'int chan' + chan + ' = 0;\n\n';}

	if(moduleName == 'traverse' || moduleName == 'oneshot'){
	sketchContent += 'Servo servo' + m + '; // declare servo for ' + moduleName + ' (unit ' + m + ')\n\n';
	}

	if(moduleName == 'latchky' || moduleName == 'momento' || moduleName == 'blink3r'){
	sketchContent += '// ' + moduleName + ' globals (unit ' + m + ')\n';
	sketchContent += 'boolean ' + moduleName + m + 'State = 0;\n\n';
	}

}}

//Now we must write the setup routine

sketchContent += '\n\nvoid setup() {\n\n';

for(m = 0; m <= modIDN; m++){
    if(document.getElementById("module"+m)){

        moduleName = document.getElementById("module"+m).className;
	moduleName = moduleName.substr(0,moduleName.indexOf(' '));

	
	sketchContent += '\n// ' + moduleName + ' setup (unit ' + m + ')\n';
	

	if(moduleName == 'latchky' || moduleName == 'momento'){
		var pin = document.getElementById("pin_"+m).value;
	 	sketchContent += 'pinMode(' + pin + ', INPUT); // set input \n';
	 	sketchContent += 'digitalWrite(' + pin + ', 1); // set pullup \n';		
		}
	if(moduleName == 'fad3d' || moduleName == 'chaser' || moduleName == 'blink3r' || moduleName == 'indik8r'){
		var pin = document.getElementById("pin_"+m).value;
		sketchContent += 'pinMode(' + pin + ', OUTPUT); // set output \n';
		sketchContent += 'digitalWrite(' + pin + ', 0); // turn off \n';
		}
	if(moduleName == 'traverse' || moduleName == 'oneshot'){
		var pin = document.getElementById("pin_"+m).value;
		sketchContent += 'servo' + m + '.attach(' + pin + '); // attach servo\n';
		}
	
}}

sketchContent += '\n} \n'; //close the setup routine

//Now, the loop!

sketchContent += '\n\nvoid loop() { \n\n';

for(m = 0; m <= modIDN; m++){
    if(document.getElementById("module"+m)){
        moduleName = document.getElementById("module"+m).className;
	moduleName = moduleName.substr(0,moduleName.indexOf(' '));
	sketchContent += moduleName + m + '(); // call the "' + moduleName + m + '" routine \n';
}}

sketchContent += '\n} \n';
    
//Finally, the meat! (module routines)

for(m = 0; m <= modIDN; m++){
    if(document.getElementById("module"+m)){
        moduleName = document.getElementById("module"+m).className;
	moduleName = moduleName.substr(0,moduleName.indexOf(' '));
	sketchContent += '\n\n' + 'void ' + moduleName + m +'(){ // "' + moduleName +'" routine (unit ' + m + ')\n\n';
	var chan = document.getElementById("channel_"+m).value;

	if(moduleName == 'latchky'){
		var pin = document.getElementById("pin_"+m).value;
		sketchContent += 'if(!digitalRead(' + pin + ')) {\n';
		sketchContent += '    if(' + moduleName + m + 'State){\n';
		sketchContent += '        chan' + chan + ' = 0;\n    }else{\n';
		sketchContent += '        chan' + chan + ' = 1;};\n';
		sketchContent += '};\n';
	} 

	if(moduleName == 'momento'){
		sketchContent += '// "momento" stuff';
	} 

	if(moduleName == 'blink3r'){
		sketchContent += '// "blink3r" stuff';
	} 

	if(moduleName == 'fad3d'){
		sketchContent += '// "fad3d" stuff';
	} 

	if(moduleName == 'indik8r'){
		sketchContent += '// "indik8r" stuff';
	} 

	if(moduleName == 'traverse'){
		sketchContent += '// "traverse" stuff';
	} 

	if(moduleName == 'oneshot'){
		sketchContent += '// "oneshot" stuff';
	} 

	//close up the routine
	sketchContent += '\n\n' + '}' + '\n';
}}

document.getElementById('sketch').value = sketchContent;

}

function saveSketch()
{
    var textToWrite = document.getElementById('sketch').value;
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    var fileNameToSaveAs = 'SketchBay.ino';

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null)
    {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else
    {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();

}
