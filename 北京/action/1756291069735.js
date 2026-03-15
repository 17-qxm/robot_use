Blockly.Blocks['1756291069735'] = {
  init: function() {
    this.jsonInit({
      "type": "1756291069735",
      "message0": "放块",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756291069735'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- RIGEND\nMOTOsetspeed(35)\nMOTOmove19(71, 10, 149, 100, 90, 55, 127, 100, 130, 190, 50, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(40)\nMOTOmove19(71, 10, 149, 100, 111, 150, 54, 102, 130, 190, 50, 100, 88, 51, 142, 101, 0, 0, 100)\nMOTOwait()\n\n\n-- MOTORE,100,71,128\nMOTOsetspeed(15)\nMOTOmove19(71, 10, 149, 100, 101, 150, 42, 102, 130, 190, 50, 100, 99, 51, 158, 101, 0, 0, 100)\nMOTOwait()\nDelayMs(400)\n\n\n-- 放\nMOTOsetspeed(20)\nMOTOmove19(71, 10, 149, 101, 107, 149, 43, 100, 130, 190, 50, 101, 92, 51, 157, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(30)\nMOTOmove19(80, 33, 130, 101, 107, 149, 43, 100, 120, 165, 66, 101, 92, 51, 157, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 33, 130, 100, 111, 150, 54, 102, 120, 165, 66, 100, 88, 51, 142, 101, 0, 0, 100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756291069735'] = function(block) {
  let code = "base_action.action('放块')\n";
  return code;
}

