Blockly.Blocks['1723800606389'] = {
  init: function() {
    this.jsonInit({
      "type": "1723800606389",
      "message0": "Box_move_left2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1723800606389'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(54,15,190,85,112,90,110,90,138,187,10,110,107,146,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(54,15,190,95,93,53,126,105,138,187,10,120,116,160,63,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,100,93,54,129,98,138,187,10,103,107,146,71,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(54,15,190,100,93,55,129,95,138,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(54,15,190,100,93,55,129,100,138,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1723800606389'] = function(block) {
  let code = "base_action.action('Box_move_left2')\n";
  return code;
}

