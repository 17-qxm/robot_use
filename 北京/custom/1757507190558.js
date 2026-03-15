Blockly.Blocks['1757507190558'] = {
  init: function() {
    this.jsonInit({
      "type": "1757507190558",
      "message0": "0",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757507190558'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 22\nMOTOsetspeed(30)\nMOTOmove19(80,37,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,37,100,100,104,149,38,99,120,170,100,100,94,50,162,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,28,190,99,160,91,79,100,119,170,12,99,40,104,122,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,28,151,100,93,55,96,100,119,170,51,100,107,145,102,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,190,100,93,55,124,100,120,170,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,190,100,93,55,190,100,120,170,10,100,107,145,10,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,63,160,136,46,86,150,147,19,137,44,67,152,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,66,149,146,55,63,150,147,19,158,48,60,146,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(54,47,190,79,113,140,50,78,150,147,19,126,72,60,135,125,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,125,140,62,100,120,170,87,100,75,60,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,104,127,133,71,100,120,170,87,103,70,67,128,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,102,128,104,97,100,120,170,87,102,74,91,104,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(40)\nMOTOmove19(80,37,100,108,93,55,124,100,120,170,100,92,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757507190558'] = function(block) {
  let code = "base_action.action('0')\n";
  return code;
}

