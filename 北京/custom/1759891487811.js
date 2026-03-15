Blockly.Blocks['1759891487811'] = {
  init: function() {
    this.jsonInit({
      "type": "1759891487811",
      "message0": "两块右转222",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759891487811'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,100,90,55,129,100,125,185,20,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,180,95,110,55,149,95,125,185,20,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(75,15,180,100,90,55,129,100,125,185,20,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759891487811'] = function(block) {
  let code = "base_action.action('两块右转222')\n";
  return code;
}

