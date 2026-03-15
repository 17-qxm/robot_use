Blockly.Blocks['1764229256481'] = {
  init: function() {
    this.jsonInit({
      "type": "1764229256481",
      "message0": "2右1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764229256481'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(15)\nMOTOmove19(10,62,185,100,90,55,129,100,190,138,18,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(10,62,185,95,110,55,149,95,190,138,18,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(10,62,185,100,90,55,129,100,190,138,18,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764229256481'] = function(block) {
  let code = "base_action.action('2右1')\n";
  return code;
}

