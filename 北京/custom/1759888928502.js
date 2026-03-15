Blockly.Blocks['1759888928502'] = {
  init: function() {
    this.jsonInit({
      "type": "1759888928502",
      "message0": "抱一块11",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759888928502'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(80,30,149,100,93,55,124,100,120,170,50,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80,30,149,100,136,150,62,100,120,170,50,100,72,50,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,148,100,148,150,59,99,119,169,50,99,52,50,141,99,0,0,101)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(20)\nMOTOmove19(65,12,151,100,149,150,59,100,140,188,50,100,52,50,141,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,151,100,119,132,70,100,140,188,50,100,77,69,130,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,12,151,100,115,97,97,100,140,188,50,100,84,105,98,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,12,162,100,98,77,115,100,140,188,40,100,101,123,86,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759888928502'] = function(block) {
  let code = "base_action.action('抱一块11')\n";
  return code;
}

