Blockly.Blocks['1757493799548'] = {
  init: function() {
    this.jsonInit({
      "type": "1757493799548",
      "message0": "下",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757493799548'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 22\nMOTOsetspeed(30)\nMOTOmove19(80,37,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n\n\n-- 17\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\n\n\n-- 15\nMOTOsetspeed(10)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\n\n\n-- 14\nMOTOsetspeed(30)\nMOTOmove19(80,30,160,99,160,91,79,100,120,170,40,99,40,104,122,99,0,0,100)\nMOTOwait()\n\n\n-- 9\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,152,132,48,100,120,170,30,99,122,50,127,100,0,0,100)\nMOTOwait()\n\n\n-- 8\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,152,132,48,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\n\n\n-- 6\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,101,84,150,41,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\n\n\n-- 5\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,129,55,166,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(10)\nMOTOmove19(80,30,190,100,153,55,124,100,120,170,10,100,46,145,76,100,0,0,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(80,30,190,100,93,55,124,100,120,170,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757493799548'] = function(block) {
  let code = "base_action.action('下')\n";
  return code;
}

