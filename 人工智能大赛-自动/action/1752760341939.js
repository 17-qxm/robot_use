Blockly.Blocks['1752760341939'] = {
  init: function() {
    this.jsonInit({
      "type": "1752760341939",
      "message0": "Box_move_right3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752760341939'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(50)\nMOTOmove19(54,15,190,90,93,54,129,100,138,187,10,115,88,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,80,84,40,137,70,138,187,10,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,97,93,54,129,95,138,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(54,15,190,100,93,55,129,95,138,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(54,15,190,100,93,55,129,100,138,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752760341939'] = function(block) {
  let code = "base_action.action('Box_move_right3')\n";
  return code;
}

