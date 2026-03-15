Blockly.Blocks['1764763659072'] = {
  init: function() {
    this.jsonInit({
      "type": "1764763659072",
      "message0": "FABNG2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764763659072'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,91,150,42,102,125,185,35,100,107,51,158,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(75,20,180,55,138,140,55,60,125,180,20,145,62,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(74,52,180,55,158,140,55,60,124,152,19,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(74,52,180,56,138,150,54,60,124,152,19,146,59,50,147,140,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764763659072'] = function(block) {
  let code = "base_action.action('FABNG2')\n";
  return code;
}

