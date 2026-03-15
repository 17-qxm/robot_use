Blockly.Blocks['1758955412438'] = {
  init: function() {
    this.jsonInit({
      "type": "1758955412438",
      "message0": "t1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758955412438'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50)\nMOTOsetspeed(22)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(20)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,87,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,103,102,145,74,88,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,65,115,145,53,61,100,100,100,103,102,145,74,88,0,0,100)\nMOTOwait()\nDelayMs(100)\n\n\n-- 11\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,75,114,146,52,74,100,100,100,123,103,143,75,120,0,0,100)\nMOTOwait()\nDelayMs(150)\n\n\n-- 11\nMOTOsetspeed(20)\nMOTOmove19(100,100,100,100,114,150,45,104,100,100,100,129,102,138,38,140,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,114,150,45,104,100,100,100,113,101,137,38,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,114,150,45,112,100,100,100,131,71,91,61,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(99,48,101,100,114,150,45,112,98,16,101,131,71,91,61,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(99,48,101,110,114,150,45,119,98,16,101,144,71,91,61,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(99,48,101,110,114,150,45,119,98,16,101,135,71,91,61,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(99,48,101,112,114,150,45,119,96,16,101,131,71,91,61,117,0,0,100)\nMOTOwait()\n\n\n-- 11\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,97,124,150,52,115,100,100,100,111,48,99,39,119,0,0,100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,101,128,135,66,111,100,100,100,111,48,99,39,119,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,97,124,150,52,115,100,100,100,121,46,62,108,118,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(15)\nMOTOmove19(100,100,100,97,131,120,87,114,100,100,100,111,48,99,39,119,0,0,100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 1\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,97,121,109,96,112,100,100,100,99,83,103,94,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758955412438'] = function(block) {
  let code = "base_action.action('t1')\n";
  return code;
}

