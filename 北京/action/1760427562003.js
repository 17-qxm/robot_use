Blockly.Blocks['1760427562003'] = {
  init: function() {
    this.jsonInit({
      "type": "1760427562003",
      "message0": "右2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760427562003'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(100)\nMOTOmove19(75,15,180,90,92,52,127,100,125,185,20,115,88,116,88,100,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,100,93,55,124,100,125,185,20,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760427562003'] = function(block) {
  let code = "base_action.action('右2')\n";
  return code;
}

