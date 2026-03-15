Blockly.Blocks['1723447011994'] = {
  init: function() {
    this.jsonInit({
      "type": "1723447011994",
      "message0": "555555",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1723447011994'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 1\nMOTOsetspeed(25)\nMOTOmove19(37, 92, 182, 101, 93, 57, 124, 101, 153, 107, 19, 102, 107, 143, 77, 99, 0, 0, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(37, 92, 182, 79, 92, 57, 123, 79, 153, 107, 19, 131, 107, 142, 81, 126, 0, 0, 100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(25)\nMOTOmove19(37, 90, 169, 41, 158, 141, 54, 60, 167, 104, 30, 150, 41, 57, 147, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(36, 90, 157, 41, 158, 141, 54, 60, 167, 103, 44, 150, 41, 57, 147, 140, 0, 0, 100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(25)\nMOTOmove19(36, 34, 168, 41, 158, 141, 54, 60, 170, 165, 30, 150, 41, 57, 147, 140, 0, 0, 100)\nMOTOwait()\n\n\n-- 5\nMOTOsetspeed(25)\nMOTOmove19(36, 34, 168, 59, 148, 150, 82, 60, 170, 165, 30, 136, 76, 50, 146, 137, 0, 0, 100)\nMOTOwait()\n\n\n-- 6\nMOTOsetspeed(25)\nMOTOmove19(36, 34, 168, 100, 104, 132, 70, 100, 170, 165, 30, 100, 93, 69, 130, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 7\nMOTOsetspeed(27)\nMOTOmove19(36, 34, 168, 100, 90, 55, 127, 100, 170, 165, 30, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1723447011994'] = function(block) {
  let code = "base_action.action('555555')\n";
  return code;
}

