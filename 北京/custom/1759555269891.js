Blockly.Blocks['1759555269891'] = {
  init: function() {
    this.jsonInit({
      "type": "1759555269891",
      "message0": "抓2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759555269891'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(75,20,180,55,158,140,55,60,125,180,20,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(75,20,180,56,138,150,54,60,125,180,20,146,59,50,147,140,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(75,20,180,101,107,149,43,100,125,180,20,101,92,51,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,20,180,99,97,115,70,98,125,180,20,102,106,85,131,99,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759555269891'] = function(block) {
  let code = "base_action.action('抓2')\n";
  return code;
}

