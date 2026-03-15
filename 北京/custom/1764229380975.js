Blockly.Blocks['1764229380975'] = {
  init: function() {
    this.jsonInit({
      "type": "1764229380975",
      "message0": "2右2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764229380975'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(10,56,185,100,90,55,129,100,190,149,17,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(10,56,185,95,110,55,149,95,190,149,17,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(10,56,185,100,90,55,129,100,190,149,17,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764229380975'] = function(block) {
  let code = "base_action.action('2右2')\n";
  return code;
}

