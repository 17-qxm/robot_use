Blockly.Blocks['1760414969392'] = {
  init: function() {
    this.jsonInit({
      "type": "1760414969392",
      "message0": "11111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760414969392'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(100)\nMOTOmove19(10,60,190,100,93,55,124,100,190,140,12,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(10,60,190,103,93,55,124,100,190,140,12,130,107,145,76,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,60,190,72,93,55,124,110,190,140,12,101,107,145,76,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(10,60,190,100,93,55,124,100,190,140,12,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760414969392'] = function(block) {
  let code = "base_action.action('11111')\n";
  return code;
}

