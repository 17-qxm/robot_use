Blockly.Blocks['1756635800432'] = {
  init: function() {
    this.jsonInit({
      "type": "1756635800432",
      "message0": "摞起来放1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756635800432'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,90,55,127,100,125,185,35,100,110,145,73,100,0,0,100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,111,150,54,102,125,185,35,100,88,51,142,101,0,0,100)\nMOTOwait()\n\n\n-- MOTORE,100,71,128\nMOTOsetspeed(15)\nMOTOmove19(75,15,170,100,101,150,42,102,125,185,35,100,99,51,158,101,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(75,16,148,100,101,150,42,102,123,178,58,100,99,51,158,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,52,147,100,101,150,42,102,123,148,57,100,99,51,158,101,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756635800432'] = function(block) {
  let code = "base_action.action('摞起来放1')\n";
  return code;
}

