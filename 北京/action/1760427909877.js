Blockly.Blocks['1760427909877'] = {
  init: function() {
    this.jsonInit({
      "type": "1760427909877",
      "message0": "左1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760427909877'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(130)\nMOTOmove19(58,10,180,74,125,86,125,89,130,190,20,108,101,155,60,102,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(68,10,180,99,86,55,124,100,130,190,20,102,112,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760427909877'] = function(block) {
  let code = "base_action.action('左1')\n";
  return code;
}

