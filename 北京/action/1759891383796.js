Blockly.Blocks['1759891383796'] = {
  init: function() {
    this.jsonInit({
      "type": "1759891383796",
      "message0": "两块左转22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759891383796'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,100,91,55,129,100,125,185,20,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,180,95,71,55,109,95,125,185,20,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(75,15,180,100,91,55,129,100,125,185,20,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759891383796'] = function(block) {
  let code = "base_action.action('两块左转22')\n";
  return code;
}

