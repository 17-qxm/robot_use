Blockly.Blocks['1760427981240'] = {
  init: function() {
    this.jsonInit({
      "type": "1760427981240",
      "message0": "右1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760427981240'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(100)\nMOTOmove19(68,10,180,90,92,52,127,100,130,190,20,115,88,116,88,100,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(68,10,180,99,86,55,124,100,130,190,20,102,112,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760427981240'] = function(block) {
  let code = "base_action.action('右1')\n";
  return code;
}

