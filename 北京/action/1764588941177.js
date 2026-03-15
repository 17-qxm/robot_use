Blockly.Blocks['1764588941177'] = {
  init: function() {
    this.jsonInit({
      "type": "1764588941177",
      "message0": "op",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764588941177'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,91,150,42,102,190,145,19,100,107,51,158,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(10,60,183,55,138,140,55,60,190,145,19,145,62,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(74,52,180,55,158,140,55,60,124,152,19,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(74,52,180,56,138,150,54,60,124,152,19,146,59,50,147,140,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764588941177'] = function(block) {
  let code = "base_action.action('op')\n";
  return code;
}

