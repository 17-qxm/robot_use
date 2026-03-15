Blockly.Blocks['1757827952072'] = {
  init: function() {
    this.jsonInit({
      "type": "1757827952072",
      "message0": "1左",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757827952072'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(59,12,165,84,115,150,58,77,147,182,40,164,90,92,110,120,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(59,12,165,100,106,90,109,100,147,182,40,100,95,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757827952072'] = function(block) {
  let code = "base_action.action('1左')\n";
  return code;
}

