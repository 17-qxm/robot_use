Blockly.Blocks['1760866516509'] = {
  init: function() {
    this.jsonInit({
      "type": "1760866516509",
      "message0": "03",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760866516509'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,95,76,190,152,14,135,106,77,145,136,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1760866516509'] = function(block) {
  let code = "base_action.action('03')\n";
  return code;
}

