Blockly.Blocks['1759890004231'] = {
  init: function() {
    this.jsonInit({
      "type": "1759890004231",
      "message0": "两块左滑1111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759890004231'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(75,15,180,100,93,60,125,100,125,185,20,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(50)\nMOTOmove19(75,15,180,79,119,150,59,75,125,185,20,142,93,82,120,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(75,15,180,100,93,60,125,100,125,185,20,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1759890004231'] = function(block) {
  let code = "base_action.action('两块左滑1111')\n";
  return code;
}

