Blockly.Blocks['1756635800432'] = {
  init: function() {
    this.jsonInit({
      "type": "1756635800432",
      "message0": "摞起来放1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756635800432'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,90,55,127,100,125,185,35,100,110,145,73,100,0,0,100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,111,150,54,102,125,185,35,100,88,51,142,101,0,0,100)\nMOTOwait()\n\n\n-- MOTORE,100,71,128\nMOTOsetspeed(15)\nMOTOmove19(75,15,170,100,101,150,42,102,125,185,35,100,99,51,158,101,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(75,16,148,100,101,150,42,102,123,178,58,100,99,51,158,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,52,147,100,101,150,42,102,123,148,57,100,99,51,158,101,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756635800432'] = function(block) {
  let code = "base_action.action('摞起来放1')\n";
  return code;
}

Blockly.Blocks['1757422876112'] = {
  init: function() {
    this.jsonInit({
      "type": "1757422876112",
      "message0": "两个",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757422876112'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,20,170,55,158,140,55,60,125,180,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75,20,170,50,138,150,55,60,125,180,30,150,62,50,145,140,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75,20,170,70,128,145,75,70,125,180,30,130,72,55,125,130,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,98,142,145,77,98,125,185,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,93,55,124,100,125,185,35,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757422876112'] = function(block) {
  let code = "base_action.action('两个')\n";
  return code;
}

Blockly.Blocks['1757422900282'] = {
  init: function() {
    this.jsonInit({
      "type": "1757422900282",
      "message0": "放",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757422900282'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(60)\nMOTOmove19(75,15,170,100,90,55,127,100,125,185,35,100,110,145,73,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,91,150,42,102,125,185,35,100,107,51,158,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(75,20,180,55,158,140,55,60,125,180,20,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(74,52,180,55,158,140,55,60,124,152,19,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(74,52,180,56,138,150,54,60,124,152,19,146,59,50,147,140,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(25)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757422900282'] = function(block) {
  let code = "base_action.action('放')\n";
  return code;
}

Blockly.Blocks['1757422939220'] = {
  init: function() {
    this.jsonInit({
      "type": "1757422939220",
      "message0": "前倒地1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757422939220'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 起\nMOTOsetspeed(40)\nMOTOmove19(80,90,101,101,93,57,124,101,131,100,98,102,107,143,77,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(37,92,182,85,64,41,98,99,153,107,19,130,142,160,92,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,63,160,136,46,86,150,147,19,137,44,67,152,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,66,149,146,55,63,150,147,19,158,48,60,146,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(54,47,190,79,113,140,50,78,150,147,19,126,72,60,135,125,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,125,140,62,100,120,170,87,100,75,60,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,104,127,133,71,100,120,170,87,103,70,67,128,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,102,128,104,97,100,120,170,87,102,74,91,104,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(30)\nMOTOmove19(80,37,100,108,93,55,124,100,120,170,100,92,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757422939220'] = function(block) {
  let code = "base_action.action('前倒地1')\n";
  return code;
}

Blockly.Blocks['1757422965478'] = {
  init: function() {
    this.jsonInit({
      "type": "1757422965478",
      "message0": "后倒地1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757422965478'] = function(block) {
  let code = "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35,130,20,101,131,126,170,100,165,70,180,99,69,74,30,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21,105,21,101,131,126,170,100,179,95,180,99,69,74,30,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,16,46,100,80,150,60,100,108,184,154,100,120,50,140,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,18,58,100,73,150,40,100,108,182,142,100,127,50,160,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,25,135,100,124,150,50,100,108,175,65,100,76,50,150,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757422965478'] = function(block) {
  let code = "base_action.action('后倒地1')\n";
  return code;
}

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

Blockly.Blocks['1757504808250'] = {
  init: function() {
    this.jsonInit({
      "type": "1757504808250",
      "message0": "下台",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757504808250'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 22\nMOTOsetspeed(30)\nMOTOmove19(80,37,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n\n\n-- 17\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\n\n\n-- 15\nMOTOsetspeed(10)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\n\n\n-- 14\nMOTOsetspeed(30)\nMOTOmove19(80,30,160,99,160,91,79,100,120,170,40,99,40,104,122,99,0,0,100)\nMOTOwait()\n\n\n-- 9\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,152,132,48,100,120,170,30,99,122,50,127,100,0,0,100)\nMOTOwait()\n\n\n-- 8\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,152,132,48,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\n\n\n-- 6\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,101,84,150,41,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\n\n\n-- 5\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,129,55,166,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(10)\nMOTOmove19(80,30,190,100,153,55,124,100,120,170,10,100,46,145,76,100,0,0,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(80,30,190,100,93,55,124,100,120,170,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,63,160,136,46,86,150,147,19,137,44,67,152,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,66,149,146,55,63,150,147,19,158,48,60,146,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(54,47,190,79,113,140,50,78,150,147,19,126,72,60,135,125,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,125,140,62,100,120,170,87,100,75,60,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,104,127,133,71,100,120,170,87,103,70,67,128,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,102,128,104,97,100,120,170,87,102,74,91,104,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(40)\nMOTOmove19(80,37,100,108,93,55,124,100,120,170,100,92,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757504808250'] = function(block) {
  let code = "base_action.action('下台')\n";
  return code;
}

Blockly.Blocks['1757505975260'] = {
  init: function() {
    this.jsonInit({
      "type": "1757505975260",
      "message0": "下楼",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757505975260'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 22\nMOTOsetspeed(30)\nMOTOmove19(80,37,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n\n\n-- 17\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\n\n\n-- 15\nMOTOsetspeed(10)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\n\n\n-- 14\nMOTOsetspeed(30)\nMOTOmove19(80,30,160,99,160,91,79,100,120,170,40,99,40,104,122,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(79,28,151,100,93,55,124,100,119,170,51,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,190,100,93,55,124,100,120,170,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,63,160,136,46,86,150,147,19,137,44,67,152,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,66,149,146,55,63,150,147,19,158,48,60,146,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(54,47,190,79,113,140,50,78,150,147,19,126,72,60,135,125,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,125,140,62,100,120,170,87,100,75,60,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,104,127,133,71,100,120,170,87,103,70,67,128,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,102,128,104,97,100,120,170,87,102,74,91,104,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(40)\nMOTOmove19(80,37,100,108,93,55,124,100,120,170,100,92,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757505975260'] = function(block) {
  let code = "base_action.action('下楼')\n";
  return code;
}

Blockly.Blocks['1757506238414'] = {
  init: function() {
    this.jsonInit({
      "type": "1757506238414",
      "message0": "下台阶1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757506238414'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 22\nMOTOsetspeed(30)\nMOTOmove19(80,37,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n\n\n-- 17\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\n\n\n-- 15\nMOTOsetspeed(10)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\n\n\n-- 14\nMOTOsetspeed(30)\nMOTOmove19(80,30,160,99,160,91,79,100,120,170,40,99,40,104,122,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(79,28,151,100,93,55,124,100,119,170,51,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,190,100,93,55,124,100,120,170,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,63,160,136,46,86,150,147,19,137,44,67,152,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,66,149,146,55,63,150,147,19,158,48,60,146,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(54,47,190,79,113,140,50,78,150,147,19,126,72,60,135,125,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,125,140,62,100,120,170,87,100,75,60,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,104,127,133,71,100,120,170,87,103,70,67,128,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,102,128,104,97,100,120,170,87,102,74,91,104,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(40)\nMOTOmove19(80,37,100,108,93,55,124,100,120,170,100,92,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757506238414'] = function(block) {
  let code = "base_action.action('下台阶1')\n";
  return code;
}

Blockly.Blocks['1757506558929'] = {
  init: function() {
    this.jsonInit({
      "type": "1757506558929",
      "message0": "111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757506558929'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 22\nMOTOsetspeed(30)\nMOTOmove19(80,37,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n\n\n-- 17\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\n\n\n-- 15\nMOTOsetspeed(10)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\n\n\n-- 14\nMOTOsetspeed(30)\nMOTOmove19(80,30,160,99,160,91,79,100,120,170,40,99,40,104,122,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,28,173,100,93,55,124,100,119,169,27,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,190,100,93,55,124,100,120,170,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,190,100,93,55,190,100,120,170,10,100,107,145,10,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,63,160,136,46,86,150,147,19,137,44,67,152,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,66,149,146,55,63,150,147,19,158,48,60,146,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(54,47,190,79,113,140,50,78,150,147,19,126,72,60,135,125,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,125,140,62,100,120,170,87,100,75,60,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,104,127,133,71,100,120,170,87,103,70,67,128,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,102,128,104,97,100,120,170,87,102,74,91,104,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(40)\nMOTOmove19(80,37,100,108,93,55,124,100,120,170,100,92,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757506558929'] = function(block) {
  let code = "base_action.action('111')\n";
  return code;
}

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

Blockly.Blocks['1757507560143'] = {
  init: function() {
    this.jsonInit({
      "type": "1757507560143",
      "message0": "00",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757507560143'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 22\nMOTOsetspeed(30)\nMOTOmove19(80,37,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,37,100,100,104,149,38,99,120,170,100,100,94,50,162,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,28,190,98,160,149,39,98,119,170,12,98,40,50,162,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,28,151,100,93,55,96,100,119,170,51,100,107,145,102,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,190,100,93,55,124,100,120,170,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,190,100,93,55,190,100,120,170,10,100,107,145,10,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,63,160,136,46,86,150,147,19,137,44,67,152,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,66,149,146,55,63,150,147,19,158,48,60,146,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(54,47,190,79,113,140,50,78,150,147,19,126,72,60,135,125,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,125,140,62,100,120,170,87,100,75,60,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,104,127,133,71,100,120,170,87,103,70,67,128,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,102,128,104,97,100,120,170,87,102,74,91,104,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(25)\nMOTOmove19(80,37,100,108,93,55,124,100,120,170,100,92,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757507560143'] = function(block) {
  let code = "base_action.action('00')\n";
  return code;
}

Blockly.Blocks['1757557294461'] = {
  init: function() {
    this.jsonInit({
      "type": "1757557294461",
      "message0": "2个",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757557294461'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,98,142,145,77,98,125,185,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,20,170,55,158,140,55,60,125,180,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75,20,170,50,138,150,55,60,125,180,30,150,62,50,145,140,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75,20,170,70,128,145,75,70,125,180,30,130,72,55,125,130,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,98,142,145,77,98,125,185,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,100,93,55,124,100,125,185,35,100,106,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757557294461'] = function(block) {
  let code = "base_action.action('2个')\n";
  return code;
}

Blockly.Blocks['1757655124481'] = {
  init: function() {
    this.jsonInit({
      "type": "1757655124481",
      "message0": "222",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757655124481'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,20,170,55,158,140,55,60,125,180,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75,20,170,50,138,150,55,60,125,180,30,150,62,50,145,140,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75,20,170,70,128,145,75,70,125,180,30,130,72,55,125,130,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,98,142,145,77,98,125,185,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(75,15,170,100,93,55,124,100,125,185,35,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757655124481'] = function(block) {
  let code = "base_action.action('222')\n";
  return code;
}

Blockly.Blocks['1757827005268'] = {
  init: function() {
    this.jsonInit({
      "type": "1757827005268",
      "message0": "右",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757827005268'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(70,15,190,62,120,90,116,77,131,181,15,139,80,50,144,133,0,0,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(70,15,190,100,110,90,109,100,131,181,15,100,90,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757827005268'] = function(block) {
  let code = "base_action.action('右')\n";
  return code;
}

Blockly.Blocks['1757827177848'] = {
  init: function() {
    this.jsonInit({
      "type": "1757827177848",
      "message0": "左",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757827177848'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,51,125,150,64,68,118,189,28,133,95,92,115,120,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757827177848'] = function(block) {
  let code = "base_action.action('左')\n";
  return code;
}

Blockly.Blocks['1757827952072'] = {
  init: function() {
    this.jsonInit({
      "type": "1757827952072",
      "message0": "1左",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757827952072'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(59,12,165,84,115,150,58,77,147,182,40,164,90,92,110,120,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(59,12,165,100,106,90,109,100,147,182,40,100,95,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757827952072'] = function(block) {
  let code = "base_action.action('1左')\n";
  return code;
}

Blockly.Blocks['1758525523744'] = {
  init: function() {
    this.jsonInit({
      "type": "1758525523744",
      "message0": "正面上高台",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758525523744'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(80,30,190,100,93,55,124,100,120,170,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,190,100,153,55,124,100,120,170,10,100,46,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,190,100,93,55,124,100,120,170,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,129,55,166,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,101,84,150,41,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,152,132,48,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,152,132,48,100,120,170,30,99,122,50,127,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,99,141,101,59,100,120,170,30,100,40,50,165,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,99,141,101,59,100,120,170,30,99,40,75,142,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,99,155,132,40,100,120,170,30,99,40,75,142,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,160,99,160,92,77,100,120,170,40,99,71,148,114,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,160,99,160,91,79,100,120,170,40,99,40,104,122,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,66,149,146,55,63,150,147,19,158,48,60,146,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,79,113,140,50,78,150,147,19,126,72,60,135,125,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,113,100,125,140,62,100,120,170,87,100,75,60,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,113,104,127,133,71,100,120,170,87,103,70,67,128,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,113,102,128,104,97,100,120,170,87,102,74,91,104,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,37,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758525523744'] = function(block) {
  let code = "base_action.action('正面上高台')\n";
  return code;
}

Blockly.Blocks['1758634865360'] = {
  init: function() {
    this.jsonInit({
      "type": "1758634865360",
      "message0": "123456",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758634865360'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(80,30,190,100,93,55,124,100,120,170,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,190,100,153,55,124,100,120,170,10,100,46,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,190,100,93,55,124,100,120,170,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,129,55,166,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,101,84,150,41,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,160,150,39,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,152,132,48,100,120,170,30,99,122,50,127,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,99,141,101,59,100,120,170,30,100,40,50,165,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,99,141,101,59,100,120,170,30,99,40,75,142,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,99,155,132,40,100,120,170,30,99,40,75,142,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,160,99,160,92,77,100,120,170,40,99,71,148,114,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,160,99,160,91,79,100,120,170,40,99,40,104,122,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,66,149,146,55,63,150,147,19,158,48,60,146,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,79,113,140,50,78,150,147,19,126,72,60,135,125,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,113,100,125,140,62,100,120,170,87,100,75,60,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,113,104,127,133,71,100,120,170,87,103,70,67,128,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,113,102,128,104,97,100,120,170,87,102,74,91,104,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,37,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758634865360'] = function(block) {
  let code = "base_action.action('123456')\n";
  return code;
}

Blockly.Blocks['1758789623976'] = {
  init: function() {
    this.jsonInit({
      "type": "1758789623976",
      "message0": "12",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758789623976'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,110,120,170,99,105,106,144,75,117,0,0,99)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,98,50,142,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,156,50,142,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,102,104,150,42,98,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(79,29,100,102,113,150,45,84,120,156,98,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,102,113,150,45,84,120,156,98,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,100,120,170,99,100,106,144,75,100,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,100,120,170,99,100,106,144,75,100,0,0,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758789623976'] = function(block) {
  let code = "base_action.action('12')\n";
  return code;
}

Blockly.Blocks['1758802619268'] = {
  init: function() {
    this.jsonInit({
      "type": "1758802619268",
      "message0": "112",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758802619268'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,110,120,170,99,105,106,144,75,117,0,0,99)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,98,50,142,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,156,50,142,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,102,98,150,45,107,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,102,98,150,45,107,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(79,29,100,102,112,150,50,114,120,170,98,100,168,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,102,113,150,49,110,120,156,98,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,100,120,170,99,100,106,144,75,100,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,100,120,170,99,100,106,144,75,100,0,0,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758802619268'] = function(block) {
  let code = "base_action.action('112')\n";
  return code;
}

Blockly.Blocks['1758803724742'] = {
  init: function() {
    this.jsonInit({
      "type": "1758803724742",
      "message0": "102",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758803724742'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,110,120,170,99,105,106,144,75,117,0,0,99)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,98,50,142,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,156,50,142,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,102,98,150,45,107,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,160,132,128,95,120,170,99,100,125,128,107,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(79,29,100,102,112,150,50,114,120,170,98,100,168,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,102,113,150,49,110,120,156,98,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,100,120,170,99,100,106,144,75,100,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,100,120,170,99,100,106,144,75,100,0,0,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758803724742'] = function(block) {
  let code = "base_action.action('102')\n";
  return code;
}

Blockly.Blocks['1758808871898'] = {
  init: function() {
    this.jsonInit({
      "type": "1758808871898",
      "message0": "2201",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758808871898'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(79,29,100,112,110,25,156,110,120,170,99,113,80,161,47,109,0,0,99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,98,50,142,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,154,155,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,112,100,100,150,46,110,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,160,132,128,95,120,170,99,102,158,175,85,100,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,160,132,128,95,120,170,99,102,158,175,85,100,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,160,150,95,95,120,170,99,99,141,190,70,92,0,0,99)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(79,29,100,100,150,150,40,99,120,170,99,99,130,170,70,93,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,98,89,150,38,99,120,170,99,99,130,170,70,93,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,99,89,150,38,99,120,170,99,99,130,170,70,93,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,95,93,55,122,95,120,170,99,100,106,144,75,95,0,0,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758808871898'] = function(block) {
  let code = "base_action.action('2201')\n";
  return code;
}

Blockly.Blocks['1758863964547'] = {
  init: function() {
    this.jsonInit({
      "type": "1758863964547",
      "message0": "后退下台阶",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758863964547'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(79,29,100,112,110,25,156,110,120,170,99,113,80,161,47,109,0,0,99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,98,50,142,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79,29,100,102,117,144,53,109,120,170,99,100,179,154,56,97,0,0,99)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(79,29,100,102,117,150,45,110,120,170,99,100,179,154,56,97,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,112,100,100,150,46,110,120,170,99,101,190,155,55,99,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,160,132,128,95,120,170,99,102,158,175,85,100,0,0,99)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(79,29,55,100,160,132,128,95,120,160,65,102,158,175,85,100,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,55,96,140,150,41,95,120,160,65,94,160,190,70,90,0,0,99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79,29,55,77,112,150,41,96,120,160,65,94,160,190,70,88,0,0,99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79,29,55,77,112,150,41,96,120,160,65,94,160,190,70,87,0,0,99)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(79,29,55,87,89,150,38,99,120,160,65,90,140,172,71,88,0,0,99)\nMOTOwait()\nMOTOsetspeed(27)\nMOTOmove19(79,29,100,98,89,150,38,99,120,170,99,90,140,172,71,88,0,0,99)\nMOTOwait()\nDelayMs(70)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(79,29,100,95,93,55,122,95,120,170,99,100,106,144,75,95,0,0,99)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758863964547'] = function(block) {
  let code = "base_action.action('后退下台阶')\n";
  return code;
}

Blockly.Blocks['1758878491979'] = {
  init: function() {
    this.jsonInit({
      "type": "1758878491979",
      "message0": "左1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758878491979'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,51,125,150,64,68,118,189,28,133,95,92,115,120,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758878491979'] = function(block) {
  let code = "base_action.action('左1')\n";
  return code;
}

Blockly.Blocks['1758878756246'] = {
  init: function() {
    this.jsonInit({
      "type": "1758878756246",
      "message0": "抱2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758878756246'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,20,170,55,158,140,55,60,125,180,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75,20,170,50,138,150,55,60,125,180,30,150,62,50,145,140,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75,20,170,70,128,145,75,70,125,180,30,130,72,55,125,130,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,98,142,145,77,98,125,185,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,93,55,124,100,125,185,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758878756246'] = function(block) {
  let code = "base_action.action('抱2')\n";
  return code;
}

Blockly.Blocks['1758879483877'] = {
  init: function() {
    this.jsonInit({
      "type": "1758879483877",
      "message0": "抱2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758879483877'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,20,170,55,158,140,55,60,125,180,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75,20,170,50,138,150,55,60,125,180,30,150,62,50,145,140,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75,20,170,70,128,145,75,70,125,180,30,130,72,55,125,130,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,98,142,145,77,98,125,185,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,110,90,109,100,125,185,35,100,90,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758879483877'] = function(block) {
  let code = "base_action.action('抱2')\n";
  return code;
}

Blockly.Blocks['1758879596800'] = {
  init: function() {
    this.jsonInit({
      "type": "1758879596800",
      "message0": "右1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758879596800'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(45)\nMOTOmove19(70,15,190,62,120,90,116,77,131,181,15,139,80,50,144,133,0,0,100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(45)\nMOTOmove19(70,15,190,100,110,90,109,100,131,181,15,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758879596800'] = function(block) {
  let code = "base_action.action('右1')\n";
  return code;
}

Blockly.Blocks['1758879764709'] = {
  init: function() {
    this.jsonInit({
      "type": "1758879764709",
      "message0": "右11",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758879764709'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(45)\nMOTOmove19(70,15,190,62,120,90,116,77,131,181,15,139,80,50,144,133,0,0,100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(45)\nMOTOmove19(70,15,190,100,110,90,109,100,131,181,15,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(45)\nMOTOmove19(70,15,190,100,110,90,109,100,131,181,15,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758879764709'] = function(block) {
  let code = "base_action.action('右11')\n";
  return code;
}

Blockly.Blocks['1758880549888'] = {
  init: function() {
    this.jsonInit({
      "type": "1758880549888",
      "message0": "右2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758880549888'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(40)\nMOTOmove19(70,15,190,76,109,94,112,83,130,181,15,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(40)\nMOTOmove19(70,15,190,100,110,90,109,100,131,181,15,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1758880549888'] = function(block) {
  let code = "base_action.action('右2')\n";
  return code;
}

Blockly.Blocks['1758884376947'] = {
  init: function() {
    this.jsonInit({
      "type": "1758884376947",
      "message0": "fast",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758884376947'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,100,93,55,124,100,118,189,28,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,90,91,48,129,88,118,189,28,94,107,146,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,86,125,95,110,90,118,189,28,94,107,146,76,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,86,113,37,156,88,118,189,28,94,107,146,77,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,107,100,56,124,111,118,189,28,112,129,155,93,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,106,95,54,123,113,118,189,28,114,75,105,90,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,106,93,54,123,111,118,189,28,114,87,163,44,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,88,71,45,107,90,118,189,28,93,100,144,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,35,110,88,71,45,107,90,120,165,110,93,100,144,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,35,100,91,98,48,132,93,120,165,100,94,107,145,76,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758884376947'] = function(block) {
  let code = "base_action.action('fast')\n";
  return code;
}

Blockly.Blocks['1758884543101'] = {
  init: function() {
    this.jsonInit({
      "type": "1758884543101",
      "message0": "steady",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758884543101'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,100,93,55,124,100,118,189,28,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,90,91,48,129,88,118,189,28,94,107,146,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,86,125,95,110,90,118,189,28,94,107,146,76,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,86,113,37,156,88,118,189,28,94,107,146,77,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,107,100,56,124,111,118,189,28,112,129,155,93,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,106,95,54,123,113,118,189,28,114,75,105,90,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,106,93,54,123,111,118,189,28,114,87,163,44,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,88,71,45,107,90,118,189,28,93,100,144,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,88,71,45,107,90,118,189,28,93,100,144,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,91,98,48,132,93,118,189,28,94,107,145,76,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,100,93,55,124,100,118,189,28,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758884543101'] = function(block) {
  let code = "base_action.action('steady')\n";
  return code;
}

Blockly.Blocks['1758885594618'] = {
  init: function() {
    this.jsonInit({
      "type": "1758885594618",
      "message0": "f1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758885594618'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(150)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83,10,175,90,91,48,134,88,118,189,28,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(83,10,175,86,123,95,115,90,118,189,28,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(83,10,175,86,121,37,161,88,118,189,28,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(83,10,175,107,98,56,129,111,118,189,28,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(83,10,175,106,93,54,128,113,118,189,28,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(83,10,175,106,91,54,128,111,118,189,28,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,88,69,45,112,90,118,189,28,93,102,144,71,89,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,95,90,50,120,95,118,189,28,96,107,145,71,98,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758885594618'] = function(block) {
  let code = "base_action.action('f1')\n";
  return code;
}

Blockly.Blocks['1758893423851'] = {
  init: function() {
    this.jsonInit({
      "type": "1758893423851",
      "message0": "f2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758893423851'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(130)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83,10,175,90,91,48,134,88,118,189,28,93,108,149,65,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,86,123,95,115,90,118,189,28,93,108,149,65,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,86,121,37,161,88,118,189,28,93,108,149,65,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(83,10,175,107,98,56,129,111,118,189,28,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,106,93,54,128,113,118,189,28,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,106,91,54,128,111,118,189,28,114,89,163,39,112,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(15)\nMOTOmove19(83,10,175,88,69,45,112,90,118,189,28,94,92,141,62,97,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,96,109,98,87,97,118,189,28,102,92,141,62,97,0,0,100)\nMOTOwait()\nDelayMs(20)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,86,129,102,102,101,118,189,28,102,92,141,62,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(83,10,175,95,90,50,120,95,118,189,28,96,107,145,71,98,0,0,100)\nMOTOwait()\nDelayMs(70)\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1758893423851'] = function(block) {
  let code = "base_action.action('f2')\n";
  return code;
}

Blockly.Blocks['1758951049237'] = {
  init: function() {
    this.jsonInit({
      "type": "1758951049237",
      "message0": "f11",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758951049237'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(130)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83,10,175,90,91,48,134,88,118,189,28,93,108,149,65,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,86,123,95,115,90,118,189,28,93,108,149,65,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,86,121,37,161,88,118,189,28,93,108,149,65,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(83,10,175,107,98,56,129,111,118,189,28,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,106,93,54,128,113,118,189,28,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,106,91,54,128,111,118,189,28,114,89,163,39,112,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(15)\nMOTOmove19(83,10,175,88,69,45,112,90,118,189,28,94,80,141,62,97,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,99,150,133,86,107,118,189,28,100,90,140,70,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(83,10,175,95,90,50,120,95,118,189,28,96,107,145,71,98,0,0,100)\nMOTOwait()\nDelayMs(70)\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1758951049237'] = function(block) {
  let code = "base_action.action('f11')\n";
  return code;
}

Blockly.Blocks['1758953978031'] = {
  init: function() {
    this.jsonInit({
      "type": "1758953978031",
      "message0": "f111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758953978031'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(130)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83,10,175,90,91,48,134,88,118,189,28,93,108,149,65,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,86,123,95,115,90,118,189,28,93,108,149,65,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,86,121,37,161,88,118,189,28,93,108,149,65,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(83,10,175,107,98,56,129,111,118,189,28,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,106,93,54,128,113,118,189,28,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,106,91,54,128,111,118,189,28,114,89,163,39,112,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,106,91,54,128,106,118,189,28,107,89,163,38,107,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,88,69,45,112,90,118,189,28,94,80,141,62,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,91,91,44,122,89,118,189,28,94,80,141,62,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,99,150,133,86,107,118,189,28,100,90,140,70,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(83,10,175,95,90,50,120,95,118,189,28,96,107,145,71,98,0,0,100)\nMOTOwait()\nDelayMs(70)\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1758953978031'] = function(block) {
  let code = "base_action.action('f111')\n";
  return code;
}

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

Blockly.Blocks['1758956795890'] = {
  init: function() {
    this.jsonInit({
      "type": "1758956795890",
      "message0": "t11",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758956795890'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50)\nMOTOsetspeed(22)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(20)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,87,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,103,102,145,74,88,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,65,115,145,53,61,100,100,100,103,102,145,74,88,0,0,100)\nMOTOwait()\nDelayMs(100)\n\n\n-- 11\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,75,114,146,52,74,100,100,100,123,103,143,75,120,0,0,100)\nMOTOwait()\nDelayMs(150)\n\n\n-- 11\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,100,114,150,45,104,100,100,100,129,102,138,38,140,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,114,150,45,104,100,100,100,131,76,111,37,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,114,150,45,104,100,100,100,113,101,137,38,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,122,150,50,119,100,100,100,113,101,137,38,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,122,150,50,119,100,100,100,125,88,95,91,114,0,0,100)\nMOTOwait()\n\n\n-- 11\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,97,124,150,52,115,100,100,100,111,48,99,39,94,0,0,100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,97,124,150,52,115,100,100,100,108,74,71,121,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,97,124,150,52,115,100,100,100,126,49,97,37,91,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(15)\nMOTOmove19(100,100,100,97,131,120,87,114,100,100,100,111,48,99,39,119,0,0,100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 1\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,97,121,109,96,112,100,100,100,99,83,103,94,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758956795890'] = function(block) {
  let code = "base_action.action('t11')\n";
  return code;
}

Blockly.Blocks['1758957569834'] = {
  init: function() {
    this.jsonInit({
      "type": "1758957569834",
      "message0": "前进f",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758957569834'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,90,91,48,134,88,118,189,28,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,86,123,95,115,90,118,189,28,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(83,10,175,86,121,37,161,88,118,189,28,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83,10,175,107,98,56,129,111,118,189,28,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,106,93,54,128,113,118,189,28,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(83,10,175,106,91,54,128,111,118,189,28,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83,10,175,88,69,45,112,90,118,189,28,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,86,123,95,115,90,118,189,28,94,107,146,72,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(90)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758957569834'] = function(block) {
  let code = "base_action.action('前进f')\n";
  return code;
}

Blockly.Blocks['1758957826861'] = {
  init: function() {
    this.jsonInit({
      "type": "1758957826861",
      "message0": "后退f",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758957826861'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(150)\nMOTOmove19(83,10,175,100,93,55,124,98,118,189,28,100,107,145,76,102,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,105,93,55,124,108,118,189,28,111,102,136,78,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,105,93,55,124,107,118,189,28,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(83,10,175,92,116,55,144,85,118,189,28,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,92,75,55,106,95,118,189,28,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(83,10,175,105,93,55,124,107,118,189,28,108,84,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(83,10,175,105,92,55,124,107,118,189,28,111,107,136,78,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(83,10,175,100,93,55,124,98,118,189,28,100,107,145,76,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758957826861'] = function(block) {
  let code = "base_action.action('后退f')\n";
  return code;
}

Blockly.Blocks['1758958048403'] = {
  init: function() {
    this.jsonInit({
      "type": "1758958048403",
      "message0": "前进F",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758958048403'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,90,91,48,134,88,118,189,28,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,86,123,95,115,90,118,189,28,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(83,10,175,86,121,37,161,88,118,189,28,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83,10,175,107,98,56,129,111,118,189,28,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,106,93,54,128,113,118,189,28,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(83,10,175,106,91,54,128,111,118,189,28,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83,10,175,88,69,45,112,90,118,189,28,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,86,123,95,115,90,118,189,28,94,107,146,72,87,0,0,100)\nMOTOwait()\nDelayMs(600)\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758958048403'] = function(block) {
  let code = "base_action.action('前进F')\n";
  return code;
}

Blockly.Blocks['1758958483740'] = {
  init: function() {
    this.jsonInit({
      "type": "1758958483740",
      "message0": "左2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758958483740'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,51,125,150,64,68,118,189,28,133,95,92,115,120,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,72,125,150,62,82,118,189,28,133,95,92,115,120,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758958483740'] = function(block) {
  let code = "base_action.action('左2')\n";
  return code;
}

Blockly.Blocks['1758958558513'] = {
  init: function() {
    this.jsonInit({
      "type": "1758958558513",
      "message0": "左3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758958558513'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,72,125,150,62,82,118,189,28,133,95,92,115,120,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758958558513'] = function(block) {
  let code = "base_action.action('左3')\n";
  return code;
}

Blockly.Blocks['1758959466591'] = {
  init: function() {
    this.jsonInit({
      "type": "1758959466591",
      "message0": "左2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758959466591'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(40)\nMOTOmove19(83,10,175,72,125,150,62,82,118,189,28,122,94,91,115,121,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758959466591'] = function(block) {
  let code = "base_action.action('左2')\n";
  return code;
}

Blockly.Blocks['1758960130197'] = {
  init: function() {
    this.jsonInit({
      "type": "1758960130197",
      "message0": "左4",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758960130197'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,86,107,150,45,84,118,189,28,149,94,94,116,121,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758960130197'] = function(block) {
  let code = "base_action.action('左4')\n";
  return code;
}

Blockly.Blocks['1758971119992'] = {
  init: function() {
    this.jsonInit({
      "type": "1758971119992",
      "message0": "左4",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758971119992'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,66,119,150,59,75,118,189,28,132,94,88,114,120,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(55)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758971119992'] = function(block) {
  let code = "base_action.action('左4')\n";
  return code;
}

Blockly.Blocks['1758971623484'] = {
  init: function() {
    this.jsonInit({
      "type": "1758971623484",
      "message0": "右3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758971623484'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(38)\nMOTOmove19(70,15,190,76,107,94,112,92,130,181,15,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(50)\nMOTOmove19(70,15,190,100,110,90,109,100,131,181,15,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758971623484'] = function(block) {
  let code = "base_action.action('右3')\n";
  return code;
}

Blockly.Blocks['1758972294797'] = {
  init: function() {
    this.jsonInit({
      "type": "1758972294797",
      "message0": "左5",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758972294797'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,66,119,150,59,75,118,189,28,132,94,88,114,120,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,79,119,150,59,75,118,189,28,142,93,82,120,111,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(83,10,175,100,93,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758972294797'] = function(block) {
  let code = "base_action.action('左5')\n";
  return code;
}

Blockly.Blocks['1758973224776'] = {
  init: function() {
    this.jsonInit({
      "type": "1758973224776",
      "message0": "左6",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758973224776'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,79,119,150,59,75,118,189,28,142,93,82,120,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(83,10,175,100,93,60,125,100,118,189,28,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1758973224776'] = function(block) {
  let code = "base_action.action('左6')\n";
  return code;
}

Blockly.Blocks['1758973581826'] = {
  init: function() {
    this.jsonInit({
      "type": "1758973581826",
      "message0": "右3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758973581826'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(45)\nMOTOmove19(70,15,190,76,109,94,112,90,130,181,15,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(45)\nMOTOmove19(70,15,190,100,110,90,109,100,131,181,15,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1758973581826'] = function(block) {
  let code = "base_action.action('右3')\n";
  return code;
}

Blockly.Blocks['1758973698814'] = {
  init: function() {
    this.jsonInit({
      "type": "1758973698814",
      "message0": "右4",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758973698814'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(45)\nMOTOmove19(70,15,190,76,109,94,112,90,130,181,15,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(45)\nMOTOmove19(70,15,190,100,110,90,109,100,131,181,15,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(40)\nMOTOmove19(83,10,175,100,93,60,125,100,118,189,28,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1758973698814'] = function(block) {
  let code = "base_action.action('右4')\n";
  return code;
}

Blockly.Blocks['1758973786828'] = {
  init: function() {
    this.jsonInit({
      "type": "1758973786828",
      "message0": "右5",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758973786828'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(70,15,190,76,109,94,112,90,130,181,15,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,100,93,60,125,100,118,189,28,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1758973786828'] = function(block) {
  let code = "base_action.action('右5')\n";
  return code;
}

Blockly.Blocks['1758975766231'] = {
  init: function() {
    this.jsonInit({
      "type": "1758975766231",
      "message0": "一块后退f",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758975766231'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(150)\nMOTOmove19(65,12,165,100,93,55,124,98,140,188,40,100,107,145,76,102,0,0,100)\nMOTOwait()\nMOTOrigid16(65,12,165,85,50,50,50,85,140,188,40,85,50,50,50,85)\nMOTOrigid16(65,12,165,85,60,60,60,75,140,188,40,85,60,60,60,75)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(65,12,165,105,93,55,124,108,140,188,40,111,102,136,78,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(65,12,165,105,93,55,124,107,140,188,40,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,165,92,116,55,144,85,140,188,40,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,12,165,92,75,55,106,95,140,188,40,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,165,105,93,55,124,107,140,188,40,108,84,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,165,105,92,55,124,107,140,188,40,111,107,136,78,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,12,165,100,93,55,124,98,140,188,40,100,107,145,76,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758975766231'] = function(block) {
  let code = "base_action.action('一块后退f')\n";
  return code;
}

Blockly.Blocks['1758976351091'] = {
  init: function() {
    this.jsonInit({
      "type": "1758976351091",
      "message0": "ff",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758976351091'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(150)\nMOTOmove19(65,12,165,100,93,55,124,98,140,188,40,100,107,145,76,102,0,0,100)\nMOTOwait()\nMOTOrigid16(65,12,165,85,50,50,50,85,140,188,40,85,50,50,50,85)\nMOTOrigid16(65,12,165,85,60,60,60,75,140,188,40,85,60,60,60,75)\n\n\n-- 右抬腿\nMOTOsetspeed(15)\nMOTOmove19(65,12,165,105,93,55,124,108,140,188,40,111,102,136,78,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(65,12,165,105,93,55,124,107,140,188,40,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,12,165,92,116,55,144,85,140,188,40,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(65,12,165,92,75,55,106,95,140,188,40,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,12,165,105,93,55,124,107,140,188,40,108,84,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,12,165,105,92,55,124,107,140,188,40,111,107,136,78,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,12,165,100,93,55,124,98,140,188,40,100,107,145,76,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758976351091'] = function(block) {
  let code = "base_action.action('ff')\n";
  return code;
}

Blockly.Blocks['1758976687985'] = {
  init: function() {
    this.jsonInit({
      "type": "1758976687985",
      "message0": "1左1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758976687985'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(65,12,165,79,119,150,59,75,140,188,40,142,93,82,120,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(65,12,165,100,93,60,125,100,140,188,40,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1758976687985'] = function(block) {
  let code = "base_action.action('1左1')\n";
  return code;
}

Blockly.Blocks['1758976804836'] = {
  init: function() {
    this.jsonInit({
      "type": "1758976804836",
      "message0": "1右1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758976804836'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(65,12,165,76,109,94,112,90,140,188,40,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(45)\nMOTOmove19(65,12,165,100,93,60,125,100,140,188,40,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1758976804836'] = function(block) {
  let code = "base_action.action('1右1')\n";
  return code;
}

Blockly.Blocks['1758976990931'] = {
  init: function() {
    this.jsonInit({
      "type": "1758976990931",
      "message0": "2前进",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758976990931'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,90,91,48,134,88,118,189,28,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,86,123,95,115,90,118,189,28,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(83,10,175,86,121,37,161,88,118,189,28,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83,10,175,107,98,56,129,111,118,189,28,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,106,93,54,128,113,118,189,28,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(83,10,175,106,91,54,128,111,118,189,28,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83,10,175,88,69,45,112,90,118,189,28,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,86,123,95,115,90,118,189,28,94,107,146,72,87,0,0,100)\nMOTOwait()\nDelayMs(600)\nMOTOsetspeed(40)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758976990931'] = function(block) {
  let code = "base_action.action('2前进')\n";
  return code;
}

Blockly.Blocks['1759543794150'] = {
  init: function() {
    this.jsonInit({
      "type": "1759543794150",
      "message0": "抓2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759543794150'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,20,170,55,158,140,55,60,125,180,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(15)\nMOTOmove19(75,20,180,55,158,140,55,60,125,180,20,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,20,180,55,158,140,55,60,125,180,20,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,20,180,31,138,150,54,60,125,180,20,119,59,50,147,75,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(30)\nMOTOmove19(75,20,180,101,107,149,43,100,125,180,20,101,92,51,157,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(30)\nMOTOmove19(75,20,180,100,93,55,124,100,125,180,20,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759543794150'] = function(block) {
  let code = "base_action.action('抓2')\n";
  return code;
}

Blockly.Blocks['1759544640348'] = {
  init: function() {
    this.jsonInit({
      "type": "1759544640348",
      "message0": "左2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759544640348'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,79,119,150,59,75,118,189,28,142,93,82,120,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,99,96,102,81,99,118,189,28,102,103,97,116,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759544640348'] = function(block) {
  let code = "base_action.action('左2')\n";
  return code;
}

Blockly.Blocks['1759544770044'] = {
  init: function() {
    this.jsonInit({
      "type": "1759544770044",
      "message0": "左22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759544770044'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,79,119,150,59,75,118,189,28,142,93,82,120,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,99,96,102,81,99,118,189,28,102,103,97,116,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759544770044'] = function(block) {
  let code = "base_action.action('左22')\n";
  return code;
}

Blockly.Blocks['1759545664301'] = {
  init: function() {
    this.jsonInit({
      "type": "1759545664301",
      "message0": "左1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759545664301'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(51,16,173,79,119,150,59,75,161,169,30,142,93,82,120,110,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(80)\nMOTOmove19(51,16,173,99,96,102,81,99,161,169,30,102,103,97,116,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759545664301'] = function(block) {
  let code = "base_action.action('左1')\n";
  return code;
}

Blockly.Blocks['1759546000339'] = {
  init: function() {
    this.jsonInit({
      "type": "1759546000339",
      "message0": "右22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759546000339'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(69,13,189,79,118,98,109,84,130,181,15,132,91,50,153,121,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,97,117,97,111,96,118,189,28,102,79,100,86,97,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759546000339'] = function(block) {
  let code = "base_action.action('右22')\n";
  return code;
}

Blockly.Blocks['1759546273688'] = {
  init: function() {
    this.jsonInit({
      "type": "1759546273688",
      "message0": "抓2个",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759546273688'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,20,170,55,158,140,55,60,125,180,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(15)\nMOTOmove19(75,20,180,55,158,140,55,60,125,180,20,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,20,180,55,158,140,55,60,125,180,20,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,20,180,31,138,150,54,60,125,180,20,119,59,50,147,75,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(30)\nMOTOmove19(75,20,180,101,107,149,43,100,125,180,20,101,92,51,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,99,96,102,81,99,118,189,28,102,103,97,116,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759546273688'] = function(block) {
  let code = "base_action.action('抓2个')\n";
  return code;
}

Blockly.Blocks['1759546431355'] = {
  init: function() {
    this.jsonInit({
      "type": "1759546431355",
      "message0": "右2个",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759546431355'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(69,13,189,79,118,98,109,84,130,181,15,132,91,50,153,121,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,99,96,102,81,99,118,189,28,102,103,97,116,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759546431355'] = function(block) {
  let code = "base_action.action('右2个')\n";
  return code;
}

Blockly.Blocks['1759555079757'] = {
  init: function() {
    this.jsonInit({
      "type": "1759555079757",
      "message0": "1111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759555079757'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,20,170,55,158,140,55,60,125,180,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(15)\nMOTOmove19(75,20,180,55,158,140,55,60,125,180,20,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(74,52,180,55,158,140,55,60,124,152,19,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(74,52,180,56,138,150,54,60,124,152,19,146,59,50,147,140,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759555079757'] = function(block) {
  let code = "base_action.action('1111')\n";
  return code;
}

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

Blockly.Blocks['1759555821741'] = {
  init: function() {
    this.jsonInit({
      "type": "1759555821741",
      "message0": "左11",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759555821741'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,79,119,150,59,75,118,189,28,151,92,110,97,125,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(60)\nMOTOmove19(75,20,180,99,97,115,70,98,125,180,20,102,106,85,131,99,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759555821741'] = function(block) {
  let code = "base_action.action('左11')\n";
  return code;
}

Blockly.Blocks['1759556704195'] = {
  init: function() {
    this.jsonInit({
      "type": "1759556704195",
      "message0": "左22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759556704195'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,79,119,150,59,75,118,189,28,137,80,60,132,95,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,85,131,99)\nMOTOsetspeed(60)\nMOTOmove19(75,20,180,98,121,99,107,98,125,180,20,102,77,102,90,101,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1759556704195'] = function(block) {
  let code = "base_action.action('左22')\n";
  return code;
}

Blockly.Blocks['1759556860619'] = {
  init: function() {
    this.jsonInit({
      "type": "1759556860619",
      "message0": "1左",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759556860619'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(51,20,179,79,119,150,59,75,155,173,20,137,80,60,132,95,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(51,20,179,40,40,40,40,40,155,173,20,40,40,85,131,99)\nMOTOsetspeed(30)\nMOTOmove19(51,20,179,98,121,99,107,98,155,173,20,102,77,102,90,101,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759556860619'] = function(block) {
  let code = "base_action.action('1左')\n";
  return code;
}

Blockly.Blocks['1759557181314'] = {
  init: function() {
    this.jsonInit({
      "type": "1759557181314",
      "message0": "右22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759557181314'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(40)\nMOTOmove19(70,15,190,80,113,116,84,90,130,181,15,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(70)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(75,20,180,99,92,115,70,98,125,180,20,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1759557181314'] = function(block) {
  let code = "base_action.action('右22')\n";
  return code;
}

Blockly.Blocks['1759557510366'] = {
  init: function() {
    this.jsonInit({
      "type": "1759557510366",
      "message0": "右11",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759557510366'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(40)\nMOTOmove19(32,32,169,80,113,116,84,90,169,166,35,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(70)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(32,32,169,99,92,115,70,98,169,166,35,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1759557510366'] = function(block) {
  let code = "base_action.action('右11')\n";
  return code;
}

Blockly.Blocks['1759718484980'] = {
  init: function() {
    this.jsonInit({
      "type": "1759718484980",
      "message0": "111左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759718484980'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(40)\nMOTOmove19(67,10,165,100,91,55,129,100,135,190,40,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(67,10,165,95,71,55,109,95,135,190,40,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(25)\nMOTOmove19(67,10,165,100,91,55,129,100,135,190,40,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759718484980'] = function(block) {
  let code = "base_action.action('111左转')\n";
  return code;
}

Blockly.Blocks['1759718548879'] = {
  init: function() {
    this.jsonInit({
      "type": "1759718548879",
      "message0": "1左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759718548879'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(40)\nMOTOmove19(67,10,165,100,91,55,129,100,135,190,40,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(67,10,165,95,71,55,109,95,135,190,40,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(25)\nMOTOmove19(67,10,165,100,91,55,129,100,135,190,40,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759718548879'] = function(block) {
  let code = "base_action.action('1左转')\n";
  return code;
}

Blockly.Blocks['1759718760679'] = {
  init: function() {
    this.jsonInit({
      "type": "1759718760679",
      "message0": "11右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759718760679'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(10)\nMOTOmove19(65,11,149,95,110,55,149,95,140,189,50,105,130,145,91,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,11,149,100,90,55,129,100,140,189,50,100,110,145,71,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1759718760679'] = function(block) {
  let code = "base_action.action('11右转')\n";
  return code;
}

Blockly.Blocks['1759718890751'] = {
  init: function() {
    this.jsonInit({
      "type": "1759718890751",
      "message0": "2左移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759718890751'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,79,119,150,59,75,118,189,28,137,80,60,132,95,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,85,131,99)\nMOTOsetspeed(25)\nMOTOmove19(75,20,180,99,92,115,70,98,125,180,20,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1759718890751'] = function(block) {
  let code = "base_action.action('2左移')\n";
  return code;
}

Blockly.Blocks['1759719034329'] = {
  init: function() {
    this.jsonInit({
      "type": "1759719034329",
      "message0": "1左移动",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759719034329'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(51,20,179,79,119,150,59,75,155,173,20,137,80,60,132,95,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(51,20,179,40,40,40,40,40,155,173,20,40,40,85,131,99)\nMOTOsetspeed(25)\nMOTOmove19(32,32,169,99,92,115,70,98,169,166,35,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1759719034329'] = function(block) {
  let code = "base_action.action('1左移动')\n";
  return code;
}

Blockly.Blocks['1759719881681'] = {
  init: function() {
    this.jsonInit({
      "type": "1759719881681",
      "message0": "1左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759719881681'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(40)\nMOTOmove19(67,10,165,100,91,55,129,100,135,190,40,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(67,10,165,95,71,55,109,95,135,190,40,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(25)\nMOTOmove19(67,10,165,100,91,55,129,100,135,190,40,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759719881681'] = function(block) {
  let code = "base_action.action('1左转')\n";
  return code;
}

Blockly.Blocks['1759719971594'] = {
  init: function() {
    this.jsonInit({
      "type": "1759719971594",
      "message0": "1右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759719971594'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(25)\nMOTOmove19(65,11,149,95,110,55,149,95,140,189,50,105,130,145,91,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,11,149,100,90,55,129,100,140,189,50,100,110,145,71,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1759719971594'] = function(block) {
  let code = "base_action.action('1右转')\n";
  return code;
}

Blockly.Blocks['1759720057560'] = {
  init: function() {
    this.jsonInit({
      "type": "1759720057560",
      "message0": "2左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759720057560'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(83,10,175,95,71,55,109,95,118,189,28,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759720057560'] = function(block) {
  let code = "base_action.action('2左转')\n";
  return code;
}

Blockly.Blocks['1759720125737'] = {
  init: function() {
    this.jsonInit({
      "type": "1759720125737",
      "message0": "2右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759720125737'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,100,90,55,129,100,118,189,28,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(83,10,175,95,110,55,149,95,118,189,28,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,100,90,55,129,100,118,189,28,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759720125737'] = function(block) {
  let code = "base_action.action('2右转')\n";
  return code;
}

Blockly.Blocks['1759730263558'] = {
  init: function() {
    this.jsonInit({
      "type": "1759730263558",
      "message0": "抱两块",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759730263558'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(75,20,180,55,158,140,55,60,125,180,20,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(75,20,180,56,138,150,54,60,125,180,20,146,59,50,147,140,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(75,20,180,101,107,149,43,100,125,180,20,101,92,51,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,99,97,115,70,98,125,185,20,102,106,85,131,99,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759730263558'] = function(block) {
  let code = "base_action.action('抱两块')\n";
  return code;
}

Blockly.Blocks['1759730524987'] = {
  init: function() {
    this.jsonInit({
      "type": "1759730524987",
      "message0": "两块左移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759730524987'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(83,10,175,51,126,150,58,70,118,189,28,133,86,92,110,120,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(83,10,175,103,113,90,109,100,118,189,28,97,87,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759730524987'] = function(block) {
  let code = "base_action.action('两块左移')\n";
  return code;
}

Blockly.Blocks['1759731487879'] = {
  init: function() {
    this.jsonInit({
      "type": "1759731487879",
      "message0": "一块左移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759731487879'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(83,10,175,51,126,150,58,70,118,189,28,133,86,92,110,120,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(59,17,173,51,126,150,58,70,134,185,29,133,86,92,110,120,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(59,17,173,100,113,90,109,100,134,185,29,100,87,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759731487879'] = function(block) {
  let code = "base_action.action('一块左移')\n";
  return code;
}

Blockly.Blocks['1759731740281'] = {
  init: function() {
    this.jsonInit({
      "type": "1759731740281",
      "message0": "一块左移1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759731740281'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(59,17,173,51,126,150,58,70,134,185,29,133,86,92,110,120,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(59,17,173,100,113,90,109,100,134,185,29,100,87,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759731740281'] = function(block) {
  let code = "base_action.action('一块左移1')\n";
  return code;
}

Blockly.Blocks['1759739754642'] = {
  init: function() {
    this.jsonInit({
      "type": "1759739754642",
      "message0": "一块右转111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759739754642'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(12)\nMOTOmove19(65,11,149,95,110,55,149,95,140,189,50,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(65,11,149,100,90,55,129,100,140,189,50,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759739754642'] = function(block) {
  let code = "base_action.action('一块右转111')\n";
  return code;
}

Blockly.Blocks['1759827506165'] = {
  init: function() {
    this.jsonInit({
      "type": "1759827506165",
      "message0": "一块左滑B",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759827506165'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(20)\nMOTOmove19(59,17,173,100,113,90,109,100,134,185,29,100,87,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(59,17,173,51,126,150,58,70,134,185,29,133,86,92,110,120,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(59,17,173,100,113,90,109,100,134,185,29,100,87,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759827506165'] = function(block) {
  let code = "base_action.action('一块左滑B')\n";
  return code;
}

Blockly.Blocks['1759827540264'] = {
  init: function() {
    this.jsonInit({
      "type": "1759827540264",
      "message0": "一块右滑B",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759827540264'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(32,32,169,99,92,115,70,98,169,166,35,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(40)\nMOTOmove19(32,32,169,80,113,116,84,90,169,166,35,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(70)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(32,32,169,99,92,115,70,98,169,166,35,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1759827540264'] = function(block) {
  let code = "base_action.action('一块右滑B')\n";
  return code;
}

Blockly.Blocks['1759827582850'] = {
  init: function() {
    this.jsonInit({
      "type": "1759827582850",
      "message0": "两块左滑B",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759827582850'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(83,10,175,100,93,60,125,100,118,189,28,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,79,119,150,59,75,118,189,28,142,93,82,120,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(83,10,175,100,93,60,125,100,118,189,28,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1759827582850'] = function(block) {
  let code = "base_action.action('两块左滑B')\n";
  return code;
}

Blockly.Blocks['1759827617396'] = {
  init: function() {
    this.jsonInit({
      "type": "1759827617396",
      "message0": "两块右滑B",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759827617396'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(75,20,180,99,92,115,70,98,125,180,20,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(40)\nMOTOmove19(70,15,190,80,113,116,84,90,130,181,15,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(70)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(75,20,180,99,92,115,70,98,125,180,20,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1759827617396'] = function(block) {
  let code = "base_action.action('两块右滑B')\n";
  return code;
}

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

Blockly.Blocks['1759889580549'] = {
  init: function() {
    this.jsonInit({
      "type": "1759889580549",
      "message0": "抱两块111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759889580549'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,55,158,140,55,60,128,183,35,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,50,138,150,55,60,128,183,35,150,62,50,145,140,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,70,128,145,75,70,128,183,35,130,72,55,125,130,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,98,142,145,77,98,128,183,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,62,185,100,93,55,124,100,190,138,18,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759889580549'] = function(block) {
  let code = "base_action.action('抱两块111')\n";
  return code;
}

Blockly.Blocks['1759889777168'] = {
  init: function() {
    this.jsonInit({
      "type": "1759889777168",
      "message0": "两块左滑",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759889777168'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(75,15,180,100,93,60,125,100,118,189,28,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(50)\nMOTOmove19(75,15,180,79,119,150,59,75,118,189,28,142,93,82,120,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(75,15,180,100,93,60,125,100,118,189,28,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1759889777168'] = function(block) {
  let code = "base_action.action('两块左滑')\n";
  return code;
}

Blockly.Blocks['1759889931599'] = {
  init: function() {
    this.jsonInit({
      "type": "1759889931599",
      "message0": "两块右滑111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759889931599'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(75,15,180,99,92,115,70,98,125,185,20,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(40)\nMOTOmove19(75,15,180,80,113,116,84,90,125,185,20,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(70)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(75,15,180,99,92,115,70,98,125,185,20,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1759889931599'] = function(block) {
  let code = "base_action.action('两块右滑111')\n";
  return code;
}

Blockly.Blocks['1759890004231'] = {
  init: function() {
    this.jsonInit({
      "type": "1759890004231",
      "message0": "两块左滑1111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759890004231'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(75,15,180,100,93,60,125,100,125,185,20,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(50)\nMOTOmove19(75,15,180,79,119,150,59,75,125,185,20,142,93,82,120,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(75,15,180,100,93,60,125,100,125,185,20,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1759890004231'] = function(block) {
  let code = "base_action.action('两块左滑1111')\n";
  return code;
}

Blockly.Blocks['1759890186979'] = {
  init: function() {
    this.jsonInit({
      "type": "1759890186979",
      "message0": "一块左移1111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759890186979'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(20)\nMOTOmove19(65,12,162,100,113,90,109,100,140,188,40,100,87,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(65,12,162,51,126,150,58,70,140,188,40,133,86,92,110,120,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(65,12,162,100,113,90,109,100,140,188,40,100,87,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759890186979'] = function(block) {
  let code = "base_action.action('一块左移1111')\n";
  return code;
}

Blockly.Blocks['1759890373177'] = {
  init: function() {
    this.jsonInit({
      "type": "1759890373177",
      "message0": "一块右移动",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759890373177'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(65,12,162,99,92,115,70,98,140,188,40,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(40)\nMOTOmove19(65,12,162,80,113,116,84,90,140,188,40,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(70)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(65,12,162,99,92,115,70,98,140,188,40,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1759890373177'] = function(block) {
  let code = "base_action.action('一块右移动')\n";
  return code;
}

Blockly.Blocks['1759890472205'] = {
  init: function() {
    this.jsonInit({
      "type": "1759890472205",
      "message0": "一块左转22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759890472205'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(40)\nMOTOmove19(65,12,162,100,91,55,129,100,140,188,40,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,12,162,95,71,55,109,95,140,188,40,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(25)\nMOTOmove19(65,12,162,100,91,55,129,100,140,188,40,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759890472205'] = function(block) {
  let code = "base_action.action('一块左转22')\n";
  return code;
}

Blockly.Blocks['1759890660499'] = {
  init: function() {
    this.jsonInit({
      "type": "1759890660499",
      "message0": "一块前进22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759890660499'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(65,12,162,100,91,55,129,100,140,188,40,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(65,12,162,90,91,48,134,88,140,190,40,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(65,12,162,86,123,95,115,90,140,190,40,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(65,12,162,86,121,37,161,88,140,190,40,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(65,12,162,107,98,56,129,111,140,190,40,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(65,12,162,106,93,54,128,113,140,190,40,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(65,12,162,106,91,54,128,111,140,190,40,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(65,12,162,88,69,45,112,90,140,190,40,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(65,12,162,86,123,95,115,90,140,190,40,94,107,146,72,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,12,162,86,123,75,129,100,140,190,40,94,107,146,72,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,162,100,91,55,129,100,140,190,40,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759890660499'] = function(block) {
  let code = "base_action.action('一块前进22')\n";
  return code;
}

Blockly.Blocks['1759890742054'] = {
  init: function() {
    this.jsonInit({
      "type": "1759890742054",
      "message0": "一快后退222",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759890742054'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(150)\nMOTOmove19(65,12,162,100,93,55,124,98,140,188,40,100,107,145,76,102,0,0,100)\nMOTOwait()\nMOTOrigid16(65,12,165,85,50,50,50,85,140,188,40,85,50,50,50,85)\nMOTOrigid16(65,12,165,85,60,60,60,75,140,188,40,85,60,60,60,75)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(65,12,162,105,93,55,124,108,140,188,40,111,102,136,78,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(65,12,162,105,93,55,124,107,140,188,40,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,162,92,116,55,144,85,140,188,40,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,12,162,92,75,55,106,95,140,188,40,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,162,105,93,55,124,107,140,188,40,108,84,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,162,105,92,55,124,107,140,188,40,111,107,136,78,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,12,162,100,93,55,124,98,140,188,40,100,107,145,76,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759890742054'] = function(block) {
  let code = "base_action.action('一快后退222')\n";
  return code;
}

Blockly.Blocks['1759891015637'] = {
  init: function() {
    this.jsonInit({
      "type": "1759891015637",
      "message0": "两块前进22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759891015637'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,100,91,55,129,100,125,185,20,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(75,15,180,90,91,48,134,88,125,185,20,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(75,15,180,86,123,95,115,90,125,185,20,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(75,15,180,86,121,37,161,88,125,185,20,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(75,15,180,107,98,56,129,111,125,185,20,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(75,15,180,106,93,54,128,113,125,185,20,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(75,15,180,106,91,54,128,111,125,185,20,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(75,15,180,88,69,45,112,90,125,185,20,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(75,15,180,86,123,95,115,90,125,185,20,94,107,146,72,87,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,100,91,55,129,100,125,185,20,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759891015637'] = function(block) {
  let code = "base_action.action('两块前进22')\n";
  return code;
}

Blockly.Blocks['1759891275202'] = {
  init: function() {
    this.jsonInit({
      "type": "1759891275202",
      "message0": "两块后退222",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759891275202'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(150)\nMOTOmove19(75,15,180,100,93,55,124,98,125,185,20,100,107,145,76,102,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(75,15,180,105,93,55,124,108,125,185,20,111,102,136,78,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,105,93,55,124,107,125,185,20,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,180,92,116,55,144,85,125,185,20,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,92,75,55,106,95,125,185,20,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,180,105,93,55,124,107,125,185,20,108,84,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,180,105,92,55,124,107,125,185,20,111,107,136,78,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(75,15,180,100,93,55,124,98,125,185,20,100,107,145,76,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759891275202'] = function(block) {
  let code = "base_action.action('两块后退222')\n";
  return code;
}

Blockly.Blocks['1759891383796'] = {
  init: function() {
    this.jsonInit({
      "type": "1759891383796",
      "message0": "两块左转22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759891383796'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,100,91,55,129,100,125,185,20,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,180,95,71,55,109,95,125,185,20,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(75,15,180,100,91,55,129,100,125,185,20,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759891383796'] = function(block) {
  let code = "base_action.action('两块左转22')\n";
  return code;
}

Blockly.Blocks['1759891487811'] = {
  init: function() {
    this.jsonInit({
      "type": "1759891487811",
      "message0": "两块右转222",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759891487811'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,100,90,55,129,100,125,185,20,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,180,95,110,55,149,95,125,185,20,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(75,15,180,100,90,55,129,100,125,185,20,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759891487811'] = function(block) {
  let code = "base_action.action('两块右转222')\n";
  return code;
}

Blockly.Blocks['1760355077352'] = {
  init: function() {
    this.jsonInit({
      "type": "1760355077352",
      "message0": "000",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760355077352'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(75,15,180,79,119,150,59,75,125,185,20,142,93,82,120,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,79,119,150,59,75,125,185,20,116,92,50,155,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(75,15,180,100,93,60,125,100,125,185,20,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1760355077352'] = function(block) {
  let code = "base_action.action('000')\n";
  return code;
}

Blockly.Blocks['1760355587596'] = {
  init: function() {
    this.jsonInit({
      "type": "1760355587596",
      "message0": "33",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760355587596'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,98,127,119,92,98,125,185,20,102,71,74,107,103,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760355587596'] = function(block) {
  let code = "base_action.action('33')\n";
  return code;
}

Blockly.Blocks['1760356319216'] = {
  init: function() {
    this.jsonInit({
      "type": "1760356319216",
      "message0": "288",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760356319216'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,93,119,150,59,94,125,185,20,143,86,83,117,111,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,98,96,121,69,97,125,185,20,101,103,76,133,99,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760356319216'] = function(block) {
  let code = "base_action.action('288')\n";
  return code;
}

Blockly.Blocks['1760414402671'] = {
  init: function() {
    this.jsonInit({
      "type": "1760414402671",
      "message0": "2888",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760414402671'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(80)\nMOTOmove19(10,60,190,77,93,55,124,60,190,140,12,113,107,145,76,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(10,60,190,77,93,55,124,81,190,140,12,113,107,145,76,88,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(10,60,190,100,93,55,124,100,190,140,12,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760414402671'] = function(block) {
  let code = "base_action.action('2888')\n";
  return code;
}

Blockly.Blocks['1760414498086'] = {
  init: function() {
    this.jsonInit({
      "type": "1760414498086",
      "message0": "2188",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760414498086'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(75,20,180,55,158,140,55,60,125,180,20,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(75,20,180,56,138,150,54,60,125,180,20,146,59,50,147,140,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(75,20,180,101,107,149,43,100,125,180,20,101,92,51,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,60,190,100,93,55,124,100,190,140,12,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760414498086'] = function(block) {
  let code = "base_action.action('2188')\n";
  return code;
}

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

Blockly.Blocks['1760415399480'] = {
  init: function() {
    this.jsonInit({
      "type": "1760415399480",
      "message0": "2688",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760415399480'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(150)\nMOTOmove19(10,60,190,96,93,55,124,90,190,140,12,130,107,145,76,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(10,60,190,81,93,55,124,60,190,140,12,104,107,145,76,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(120)\nMOTOmove19(10,60,190,100,93,55,124,100,190,140,12,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760415399480'] = function(block) {
  let code = "base_action.action('2688')\n";
  return code;
}

Blockly.Blocks['1760415645999'] = {
  init: function() {
    this.jsonInit({
      "type": "1760415645999",
      "message0": "16",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760415645999'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(10,60,190,77,93,55,124,60,190,140,12,113,107,145,76,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,60,190,77,93,55,124,81,190,140,12,113,107,145,76,88,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,60,190,100,93,55,124,100,190,140,12,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760415645999'] = function(block) {
  let code = "base_action.action('16')\n";
  return code;
}

Blockly.Blocks['1760415667270'] = {
  init: function() {
    this.jsonInit({
      "type": "1760415667270",
      "message0": "17",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760415667270'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(10,60,190,96,93,55,124,90,190,140,12,130,107,145,76,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(10,60,190,81,93,55,124,60,190,140,12,104,107,145,76,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,60,190,100,93,55,124,100,190,140,12,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760415667270'] = function(block) {
  let code = "base_action.action('17')\n";
  return code;
}

Blockly.Blocks['1760427257857'] = {
  init: function() {
    this.jsonInit({
      "type": "1760427257857",
      "message0": "抱两",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760427257857'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(75,20,180,55,158,140,55,60,125,180,20,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(75,20,180,56,138,150,54,60,125,180,20,146,59,50,147,140,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(75,20,180,101,107,149,43,100,125,180,20,101,92,51,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,100,93,55,124,100,125,185,20,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760427257857'] = function(block) {
  let code = "base_action.action('抱两')\n";
  return code;
}

Blockly.Blocks['1760427380477'] = {
  init: function() {
    this.jsonInit({
      "type": "1760427380477",
      "message0": "左2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760427380477'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(130)\nMOTOmove19(75,20,170,74,125,86,125,89,125,180,30,108,101,155,60,102,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,99,86,55,124,100,125,185,20,102,112,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760427380477'] = function(block) {
  let code = "base_action.action('左2')\n";
  return code;
}

Blockly.Blocks['1760427562003'] = {
  init: function() {
    this.jsonInit({
      "type": "1760427562003",
      "message0": "右2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760427562003'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(100)\nMOTOmove19(75,15,180,90,92,52,127,100,125,185,20,115,88,116,88,100,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,100,93,55,124,100,125,185,20,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760427562003'] = function(block) {
  let code = "base_action.action('右2')\n";
  return code;
}

Blockly.Blocks['1760427909877'] = {
  init: function() {
    this.jsonInit({
      "type": "1760427909877",
      "message0": "左1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760427909877'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(130)\nMOTOmove19(58,10,180,74,125,86,125,89,130,190,20,108,101,155,60,102,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(68,10,180,99,86,55,124,100,130,190,20,102,112,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760427909877'] = function(block) {
  let code = "base_action.action('左1')\n";
  return code;
}

Blockly.Blocks['1760427981240'] = {
  init: function() {
    this.jsonInit({
      "type": "1760427981240",
      "message0": "右1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760427981240'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(100)\nMOTOmove19(68,10,180,90,92,52,127,100,130,190,20,115,88,116,88,100,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(68,10,180,99,86,55,124,100,130,190,20,102,112,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760427981240'] = function(block) {
  let code = "base_action.action('右1')\n";
  return code;
}

Blockly.Blocks['1760696757340'] = {
  init: function() {
    this.jsonInit({
      "type": "1760696757340",
      "message0": "1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760696757340'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(25)\nMOTOmove19(14,52,190,100,113,90,109,100,190,152,14,100,87,111,91,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,51,112,96,103,76,190,152,14,135,91,57,149,136,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,100,113,90,109,100,190,152,14,100,87,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760696757340'] = function(block) {
  let code = "base_action.action('1')\n";
  return code;
}

Blockly.Blocks['1760697009450'] = {
  init: function() {
    this.jsonInit({
      "type": "1760697009450",
      "message0": "右滑步A",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760697009450'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(25)\nMOTOmove19(14,52,190,100,113,90,109,100,190,152,14,100,87,111,91,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,51,112,96,103,76,190,152,14,135,91,57,149,136,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nDelayMs(100)\n\n\n-- 1\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,100,113,90,109,100,190,152,14,100,87,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760697009450'] = function(block) {
  let code = "base_action.action('右滑步A')\n";
  return code;
}

Blockly.Blocks['1760697639855'] = {
  init: function() {
    this.jsonInit({
      "type": "1760697639855",
      "message0": "左滑步A",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760697639855'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(25)\nMOTOmove19(14,52,190,100,113,90,109,100,190,152,14,100,87,111,91,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(40)\nMOTOmove19(14,52,190,84,122,150,58,77,190,152,14,166,90,98,109,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,137,95,85,123,137,0,0,100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 1\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,100,113,90,109,100,190,152,14,100,87,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760697639855'] = function(block) {
  let code = "base_action.action('左滑步A')\n";
  return code;
}

Blockly.Blocks['1760752200413'] = {
  init: function() {
    this.jsonInit({
      "type": "1760752200413",
      "message0": "左a",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760752200413'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(45)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(14,52,190,84,122,150,58,77,190,152,14,166,90,98,109,140,0,0,100)\nMOTOwait()\nDelayMs(80)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,137,95,85,123,137,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760752200413'] = function(block) {
  let code = "base_action.action('左a')\n";
  return code;
}

Blockly.Blocks['1760752950776'] = {
  init: function() {
    this.jsonInit({
      "type": "1760752950776",
      "message0": "右a",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760752950776'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,103,76,190,152,14,135,91,57,149,136,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760752950776'] = function(block) {
  let code = "base_action.action('右a')\n";
  return code;
}

Blockly.Blocks['1760752991039'] = {
  init: function() {
    this.jsonInit({
      "type": "1760752991039",
      "message0": "左b",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760752991039'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(14,52,190,84,122,150,58,77,190,152,14,166,90,98,109,140,0,0,100)\nMOTOwait()\nDelayMs(80)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,137,95,85,123,137,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760752991039'] = function(block) {
  let code = "base_action.action('左b')\n";
  return code;
}

Blockly.Blocks['1760753012159'] = {
  init: function() {
    this.jsonInit({
      "type": "1760753012159",
      "message0": "右b",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760753012159'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,103,76,190,152,14,135,91,57,149,136,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760753012159'] = function(block) {
  let code = "base_action.action('右b')\n";
  return code;
}

Blockly.Blocks['1760754411938'] = {
  init: function() {
    this.jsonInit({
      "type": "1760754411938",
      "message0": "芳",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760754411938'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(60)\nMOTOmove19(75,15,170,100,90,55,127,100,125,185,35,100,110,145,73,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,91,150,42,102,125,185,35,100,107,51,158,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(75,20,180,55,158,140,55,60,125,180,20,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(74,52,180,55,158,140,55,60,124,152,19,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(74,52,180,56,138,150,54,60,124,152,19,146,59,50,147,140,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760754411938'] = function(block) {
  let code = "base_action.action('芳')\n";
  return code;
}

Blockly.Blocks['1760754577591'] = {
  init: function() {
    this.jsonInit({
      "type": "1760754577591",
      "message0": "左c",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760754577591'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,100,94,50,157,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(10,62,185,84,122,150,58,77,190,138,18,166,90,98,109,140,0,0,100)\nMOTOwait()\nDelayMs(80)\nMOTOsetspeed(100)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,137,95,85,123,137,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(100)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,100,94,50,157,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760754577591'] = function(block) {
  let code = "base_action.action('左c')\n";
  return code;
}

Blockly.Blocks['1760754904770'] = {
  init: function() {
    this.jsonInit({
      "type": "1760754904770",
      "message0": "右c",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760754904770'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,62,185,51,112,96,103,76,190,138,18,135,91,57,149,136,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(10,62,185,62,112,96,95,61,190,138,18,111,89,50,162,103,0,0,100)\nMOTOwait()\nMOTOrigid16(10,62,185,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,100,94,50,157,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760754904770'] = function(block) {
  let code = "base_action.action('右c')\n";
  return code;
}

Blockly.Blocks['1760864490062'] = {
  init: function() {
    this.jsonInit({
      "type": "1760864490062",
      "message0": "12",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760864490062'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,103,76,190,152,14,135,91,57,149,136,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(600)\n";
  return code;
}

Blockly.Python['1760864490062'] = function(block) {
  let code = "base_action.action('12')\n";
  return code;
}

Blockly.Blocks['1760865084590'] = {
  init: function() {
    this.jsonInit({
      "type": "1760865084590",
      "message0": "112",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760865084590'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,103,76,190,152,14,135,95,60,155,136,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(600)\n";
  return code;
}

Blockly.Python['1760865084590'] = function(block) {
  let code = "base_action.action('112')\n";
  return code;
}

Blockly.Blocks['1760865401915'] = {
  init: function() {
    this.jsonInit({
      "type": "1760865401915",
      "message0": "221",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760865401915'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(14,52,190,84,122,150,58,77,190,152,14,166,90,98,109,140,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,137,95,85,123,137,0,0,100)\nMOTOwait()\nDelayMs(20)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760865401915'] = function(block) {
  let code = "base_action.action('221')\n";
  return code;
}

Blockly.Blocks['1760865489955'] = {
  init: function() {
    this.jsonInit({
      "type": "1760865489955",
      "message0": "222",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760865489955'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(14,52,190,84,122,150,58,77,190,152,14,166,90,98,109,140,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,137,95,85,123,137,0,0,100)\nMOTOwait()\nDelayMs(20)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1760865489955'] = function(block) {
  let code = "base_action.action('222')\n";
  return code;
}

Blockly.Blocks['1760865597027'] = {
  init: function() {
    this.jsonInit({
      "type": "1760865597027",
      "message0": "220",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760865597027'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(14,52,190,84,122,150,58,77,190,152,14,166,90,98,109,140,0,0,100)\nMOTOwait()\nDelayMs(80)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,137,95,85,123,137,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1760865597027'] = function(block) {
  let code = "base_action.action('220')\n";
  return code;
}

Blockly.Blocks['1760865633063'] = {
  init: function() {
    this.jsonInit({
      "type": "1760865633063",
      "message0": "110",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760865633063'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,103,76,190,152,14,135,95,60,155,136,0,0,100)\nMOTOwait()\nDelayMs(80)\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nDelayMs(80)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(400)\n";
  return code;
}

Blockly.Python['1760865633063'] = function(block) {
  let code = "base_action.action('110')\n";
  return code;
}

Blockly.Blocks['1760865806864'] = {
  init: function() {
    this.jsonInit({
      "type": "1760865806864",
      "message0": "1212",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760865806864'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,103,76,190,152,14,135,91,57,149,136,0,0,100)\nMOTOwait()\nDelayMs(80)\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nDelayMs(80)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1760865806864'] = function(block) {
  let code = "base_action.action('1212')\n";
  return code;
}

Blockly.Blocks['1760866260660'] = {
  init: function() {
    this.jsonInit({
      "type": "1760866260660",
      "message0": "01",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760866260660'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,95,76,190,152,14,135,106,77,141,136,0,0,100)\nMOTOwait()\nDelayMs(80)\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nDelayMs(80)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1760866260660'] = function(block) {
  let code = "base_action.action('01')\n";
  return code;
}

Blockly.Blocks['1760866447708'] = {
  init: function() {
    this.jsonInit({
      "type": "1760866447708",
      "message0": "02",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760866447708'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,95,76,190,152,14,135,106,77,145,136,0,0,100)\nMOTOwait()\nDelayMs(80)\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nDelayMs(80)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1760866447708'] = function(block) {
  let code = "base_action.action('02')\n";
  return code;
}

Blockly.Blocks['1760866516509'] = {
  init: function() {
    this.jsonInit({
      "type": "1760866516509",
      "message0": "03",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760866516509'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,95,76,190,152,14,135,106,77,145,136,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1760866516509'] = function(block) {
  let code = "base_action.action('03')\n";
  return code;
}

Blockly.Blocks['1760932358659'] = {
  init: function() {
    this.jsonInit({
      "type": "1760932358659",
      "message0": "04",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760932358659'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,95,76,190,152,14,135,89,59,147,136,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1760932358659'] = function(block) {
  let code = "base_action.action('04')\n";
  return code;
}

Blockly.Blocks['1760932711424'] = {
  init: function() {
    this.jsonInit({
      "type": "1760932711424",
      "message0": "033",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760932711424'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,95,76,190,152,14,135,95,70,145,136,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1760932711424'] = function(block) {
  let code = "base_action.action('033')\n";
  return code;
}

Blockly.Blocks['1760933039754'] = {
  init: function() {
    this.jsonInit({
      "type": "1760933039754",
      "message0": "左转身1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760933039754'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(45)\nMOTOmove19(65,11,149,100,90,55,129,100,140,189,50,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(65,11,149,95,110,55,149,95,140,189,50,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(65,11,149,100,90,55,129,100,140,189,50,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760933039754'] = function(block) {
  let code = "base_action.action('左转身1')\n";
  return code;
}

Blockly.Blocks['1760933060454'] = {
  init: function() {
    this.jsonInit({
      "type": "1760933060454",
      "message0": "右转身1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760933060454'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(45)\nMOTOmove19(65,11,149,100,90,55,129,100,140,189,50,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(65,11,149,95,110,55,149,95,140,189,50,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(65,11,149,100,90,55,129,100,140,189,50,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760933060454'] = function(block) {
  let code = "base_action.action('右转身1')\n";
  return code;
}

Blockly.Blocks['1760933212934'] = {
  init: function() {
    this.jsonInit({
      "type": "1760933212934",
      "message0": "后退步1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760933212934'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(50)\nMOTOmove19(65,12,162,100,93,55,124,98,140,188,40,100,107,145,76,102,0,0,100)\nMOTOwait()\nMOTOrigid16(65,12,165,85,50,50,50,85,140,188,40,85,50,50,50,85)\nMOTOrigid16(65,12,165,85,60,60,60,75,140,188,40,85,60,60,60,75)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(65,12,162,105,93,55,124,108,140,188,40,111,102,136,78,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(65,12,162,105,93,55,124,107,140,188,40,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,162,92,116,55,144,85,140,188,40,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,12,162,92,75,55,106,95,140,188,40,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,162,105,93,55,124,107,140,188,40,108,84,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,162,105,92,55,124,107,140,188,40,111,107,136,78,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,12,162,100,93,55,124,98,140,188,40,100,107,145,76,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760933212934'] = function(block) {
  let code = "base_action.action('后退步1')\n";
  return code;
}

Blockly.Blocks['1760933353357'] = {
  init: function() {
    this.jsonInit({
      "type": "1760933353357",
      "message0": "后退步10",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760933353357'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(50)\nMOTOmove19(14,52,190,100,93,55,124,98,190,152,14,100,107,145,76,102,0,0,100)\nMOTOwait()\nMOTOrigid16(65,12,165,85,50,50,50,85,140,188,40,85,50,50,50,85)\nMOTOrigid16(65,12,165,85,60,60,60,75,140,188,40,85,60,60,60,75)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(14,52,190,105,93,55,124,108,190,152,14,111,102,136,78,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,105,93,55,124,107,190,152,14,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,116,55,144,85,190,152,14,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,92,75,55,106,95,190,152,14,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,105,93,55,124,107,190,152,14,108,84,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,105,92,55,124,107,190,152,14,111,107,136,78,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(14,52,190,100,93,55,124,98,190,152,14,100,107,145,76,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760933353357'] = function(block) {
  let code = "base_action.action('后退步10')\n";
  return code;
}

Blockly.Blocks['1760933534757'] = {
  init: function() {
    this.jsonInit({
      "type": "1760933534757",
      "message0": "后退步11",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760933534757'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,100,93,55,124,98,190,152,14,100,107,145,76,102,0,0,100)\nMOTOwait()\nMOTOrigid16(65,12,165,85,50,50,50,85,140,188,40,85,50,50,50,85)\nMOTOrigid16(65,12,165,85,60,60,60,75,140,188,40,85,60,60,60,75)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(14,52,190,105,93,55,124,108,190,152,14,111,102,136,78,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,105,93,55,124,107,190,152,14,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,116,55,144,85,190,152,14,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,92,75,55,106,95,190,152,14,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,105,93,55,124,107,190,152,14,108,84,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,105,92,55,124,107,190,152,14,111,107,136,78,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(14,52,190,100,93,55,124,98,190,152,14,100,107,145,76,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760933534757'] = function(block) {
  let code = "base_action.action('后退步11')\n";
  return code;
}

Blockly.Blocks['1761045715274'] = {
  init: function() {
    this.jsonInit({
      "type": "1761045715274",
      "message0": "左1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761045715274'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(14,52,190,84,122,150,58,77,190,152,14,166,90,98,109,140,0,0,100)\nMOTOwait()\nDelayMs(180)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,85,190,152,14,137,95,85,123,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(150)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761045715274'] = function(block) {
  let code = "base_action.action('左1')\n";
  return code;
}

Blockly.Blocks['1761048529001'] = {
  init: function() {
    this.jsonInit({
      "type": "1761048529001",
      "message0": "右",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761048529001'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,103,76,190,152,14,135,91,57,149,136,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1761048529001'] = function(block) {
  let code = "base_action.action('右')\n";
  return code;
}

Blockly.Blocks['1761105899317'] = {
  init: function() {
    this.jsonInit({
      "type": "1761105899317",
      "message0": "左转01",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761105899317'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(65,12,162,100,91,55,129,100,140,188,40,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,12,162,95,71,55,109,95,140,188,40,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(25)\nMOTOmove19(65,12,162,100,91,55,129,100,140,188,40,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761105899317'] = function(block) {
  let code = "base_action.action('左转01')\n";
  return code;
}

Blockly.Blocks['1761105920408'] = {
  init: function() {
    this.jsonInit({
      "type": "1761105920408",
      "message0": "右转01",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761105920408'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(65,11,149,100,90,55,129,100,140,189,50,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(65,11,149,95,110,55,149,95,140,189,50,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(65,11,149,100,90,55,129,100,140,189,50,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761105920408'] = function(block) {
  let code = "base_action.action('右转01')\n";
  return code;
}

Blockly.Blocks['1761268621734'] = {
  init: function() {
    this.jsonInit({
      "type": "1761268621734",
      "message0": "左22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761268621734'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,100,94,50,157,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(80)\nMOTOmove19(10,62,185,84,122,150,58,77,190,138,18,166,90,98,109,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(50)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,137,95,85,123,137,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(80)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,100,94,50,157,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761268621734'] = function(block) {
  let code = "base_action.action('左22')\n";
  return code;
}

Blockly.Blocks['1761269534774'] = {
  init: function() {
    this.jsonInit({
      "type": "1761269534774",
      "message0": "22左",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761269534774'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,100,94,50,157,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(80)\nMOTOmove19(10,62,185,84,122,150,58,77,190,138,18,166,90,98,109,140,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(10,62,185,88,104,150,40,94,190,138,18,137,95,85,123,137,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(80)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,100,94,50,157,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761269534774'] = function(block) {
  let code = "base_action.action('22左')\n";
  return code;
}

Blockly.Blocks['1761269859844'] = {
  init: function() {
    this.jsonInit({
      "type": "1761269859844",
      "message0": "左移111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761269859844'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(83,10,175,72,125,150,62,82,118,189,28,133,95,92,115,120,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(100)\n";
  return code;
}

Blockly.Python['1761269859844'] = function(block) {
  let code = "base_action.action('左移111')\n";
  return code;
}

Blockly.Blocks['1761270290214'] = {
  init: function() {
    this.jsonInit({
      "type": "1761270290214",
      "message0": "左移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761270290214'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(65,12,151,100,110,90,109,100,140,188,50,100,90,111,91,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(65,12,151,72,125,150,62,82,140,188,50,133,95,92,115,120,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(45)\nMOTOmove19(65,12,151,100,110,90,109,100,140,188,50,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(100)\n";
  return code;
}

Blockly.Python['1761270290214'] = function(block) {
  let code = "base_action.action('左移')\n";
  return code;
}

Blockly.Blocks['1761270436311'] = {
  init: function() {
    this.jsonInit({
      "type": "1761270436311",
      "message0": "右移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761270436311'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,95,150,40,94,190,152,14,100,100,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,103,76,190,152,14,135,91,57,149,136,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,95,150,40,94,190,152,14,100,100,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1761270436311'] = function(block) {
  let code = "base_action.action('右移')\n";
  return code;
}

Blockly.Blocks['1761271611791'] = {
  init: function() {
    this.jsonInit({
      "type": "1761271611791",
      "message0": "前进2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761271611791'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(20)\nMOTOmove19(75,15,180,100,91,55,129,100,125,185,20,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(75,15,180,90,91,48,134,88,125,185,20,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,15,180,86,123,95,115,90,125,185,20,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(75,15,180,86,121,37,161,88,125,185,20,94,109,146,72,89,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(8)\nMOTOmove19(75,15,180,107,98,56,129,111,125,185,20,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,15,180,106,93,54,128,113,125,185,20,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(75,15,180,106,91,54,128,111,125,185,20,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(75,15,180,88,69,45,112,90,125,185,20,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,15,180,86,123,95,115,90,125,185,20,94,107,146,72,87,0,0,100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(15)\nMOTOmove19(75,15,180,100,91,55,129,100,125,185,20,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761271611791'] = function(block) {
  let code = "base_action.action('前进2')\n";
  return code;
}

Blockly.Blocks['1761293016190'] = {
  init: function() {
    this.jsonInit({
      "type": "1761293016190",
      "message0": "抱2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761293016190'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,138,140,55,60,100,110,30,145,62,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,55,158,140,55,60,128,183,35,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,50,138,150,55,60,128,183,35,150,62,50,145,140,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,70,128,145,75,70,128,183,35,130,72,55,125,130,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,98,142,145,77,98,128,183,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,62,185,100,93,55,124,100,190,138,18,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761293016190'] = function(block) {
  let code = "base_action.action('抱2')\n";
  return code;
}

Blockly.Blocks['1761293422211'] = {
  init: function() {
    this.jsonInit({
      "type": "1761293422211",
      "message0": "放",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761293422211'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(60)\nMOTOmove19(75,15,170,100,90,55,127,100,125,185,35,100,110,145,73,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,91,150,42,102,125,185,35,100,107,51,158,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(75,20,180,55,138,140,55,60,125,180,20,145,62,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(74,52,180,55,158,140,55,60,124,152,19,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(74,52,180,56,138,150,54,60,124,152,19,146,59,50,147,140,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761293422211'] = function(block) {
  let code = "base_action.action('放')\n";
  return code;
}

Blockly.Blocks['1761981674292'] = {
  init: function() {
    this.jsonInit({
      "type": "1761981674292",
      "message0": "反手放高台",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761981674292'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(110,139,10,100,93,55,124,100,110,52,190,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(110,139,10,100,93,145,38,100,110,52,190,100,106,55,162,100,0,0,100)\nMOTOwait()\nDelayMs(20)\nMOTOsetspeed(10)\nMOTOmove19(110,139,10,57,150,150,48,60,110,52,190,153,48,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,154,10,57,150,150,48,60,60,36,190,153,48,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,153,107,57,150,150,48,60,60,36,99,153,48,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(150,153,107,63,119,150,49,64,60,36,99,139,55,50,127,136,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,153,107,98,99,146,38,98,60,36,99,102,98,52,163,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,153,190,64,109,150,50,62,59,36,10,147,89,50,151,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(87,153,190,64,109,150,50,62,108,36,10,147,89,50,151,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,153,107,98,99,146,38,98,60,36,99,102,98,52,163,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761981674292'] = function(block) {
  let code = "base_action.action('反手放高台')\n";
  return code;
}

Blockly.Blocks['1761988282915'] = {
  init: function() {
    this.jsonInit({
      "type": "1761988282915",
      "message0": "反手抢高台",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761988282915'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(110,139,10,100,93,55,124,100,110,52,190,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(110,139,10,100,93,145,38,100,110,52,190,100,106,55,162,100,0,0,100)\nMOTOwait()\nDelayMs(20)\nMOTOsetspeed(10)\nMOTOmove19(110,139,10,57,150,150,48,60,110,52,190,153,48,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,154,10,57,150,150,48,60,60,36,190,153,48,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,153,107,57,150,150,48,60,60,36,99,153,48,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(150,153,107,63,119,150,49,64,60,36,99,139,55,50,127,136,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,153,107,98,99,146,38,98,60,36,99,102,98,52,163,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,153,190,64,109,150,50,62,59,36,10,147,89,50,151,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(87,153,190,64,109,150,50,62,108,36,10,147,89,50,151,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,153,107,98,99,146,38,98,60,36,99,102,98,52,163,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761988282915'] = function(block) {
  let code = "base_action.action('反手抢高台')\n";
  return code;
}

Blockly.Blocks['1764129745203'] = {
  init: function() {
    this.jsonInit({
      "type": "1764129745203",
      "message0": "2右",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764129745203'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(10,62,185,100,93,55,124,100,190,138,18,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,62,185,60,93,55,124,100,190,138,18,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(150)\nMOTOmove19(10,62,185,100,93,55,124,100,190,138,18,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764129745203'] = function(block) {
  let code = "base_action.action('2右')\n";
  return code;
}

Blockly.Blocks['1764129883397'] = {
  init: function() {
    this.jsonInit({
      "type": "1764129883397",
      "message0": "2左",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764129883397'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(10,62,185,100,93,55,124,100,190,138,18,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,62,185,100,93,55,124,100,190,138,18,140,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(150)\nMOTOmove19(10,62,185,100,93,55,124,100,190,138,18,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764129883397'] = function(block) {
  let code = "base_action.action('2左')\n";
  return code;
}

Blockly.Blocks['1764130186536'] = {
  init: function() {
    this.jsonInit({
      "type": "1764130186536",
      "message0": "1左",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764130186536'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,100,93,55,124,100,190,152,14,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,100,93,55,124,100,190,152,14,140,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(150)\nMOTOmove19(14,52,190,100,93,55,124,100,190,152,14,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764130186536'] = function(block) {
  let code = "base_action.action('1左')\n";
  return code;
}

Blockly.Blocks['1764130251771'] = {
  init: function() {
    this.jsonInit({
      "type": "1764130251771",
      "message0": "1右",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764130251771'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,100,93,55,124,100,190,152,14,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,60,93,55,124,100,190,152,14,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(150)\nMOTOmove19(14,52,190,100,93,55,124,100,190,152,14,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764130251771'] = function(block) {
  let code = "base_action.action('1右')\n";
  return code;
}

Blockly.Blocks['1764130373478'] = {
  init: function() {
    this.jsonInit({
      "type": "1764130373478",
      "message0": "1左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764130373478'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,100,91,55,129,100,190,152,14,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(14,52,190,95,71,55,109,95,190,152,14,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,100,91,55,129,100,190,152,14,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764130373478'] = function(block) {
  let code = "base_action.action('1左转')\n";
  return code;
}

Blockly.Blocks['1764130496749'] = {
  init: function() {
    this.jsonInit({
      "type": "1764130496749",
      "message0": "1右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764130496749'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,100,90,55,129,100,190,152,14,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(14,52,190,95,110,55,149,95,190,152,14,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,100,90,55,129,100,190,152,14,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764130496749'] = function(block) {
  let code = "base_action.action('1右转')\n";
  return code;
}

Blockly.Blocks['1764130613275'] = {
  init: function() {
    this.jsonInit({
      "type": "1764130613275",
      "message0": "02左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764130613275'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(10,62,185,100,91,55,129,100,190,138,18,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(10,62,185,95,71,55,109,95,190,138,18,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(10,62,185,100,91,55,129,100,190,138,18,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764130613275'] = function(block) {
  let code = "base_action.action('02左转')\n";
  return code;
}

Blockly.Blocks['1764130710011'] = {
  init: function() {
    this.jsonInit({
      "type": "1764130710011",
      "message0": "02右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764130710011'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(10,62,185,100,90,55,129,100,190,138,18,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(10,62,185,95,110,55,149,95,190,138,18,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(10,62,185,100,90,55,129,100,190,138,18,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764130710011'] = function(block) {
  let code = "base_action.action('02右转')\n";
  return code;
}

Blockly.Blocks['1764229182620'] = {
  init: function() {
    this.jsonInit({
      "type": "1764229182620",
      "message0": "2左1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764229182620'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(15)\nMOTOmove19(10,62,185,100,91,55,129,100,190,138,18,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(10,62,185,95,71,55,109,95,190,138,18,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(10,62,185,100,91,55,129,100,190,138,18,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764229182620'] = function(block) {
  let code = "base_action.action('2左1')\n";
  return code;
}

Blockly.Blocks['1764229256481'] = {
  init: function() {
    this.jsonInit({
      "type": "1764229256481",
      "message0": "2右1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764229256481'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(15)\nMOTOmove19(10,62,185,100,90,55,129,100,190,138,18,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(10,62,185,95,110,55,149,95,190,138,18,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(10,62,185,100,90,55,129,100,190,138,18,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764229256481'] = function(block) {
  let code = "base_action.action('2右1')\n";
  return code;
}

Blockly.Blocks['1764229380975'] = {
  init: function() {
    this.jsonInit({
      "type": "1764229380975",
      "message0": "2右2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764229380975'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(10,56,185,100,90,55,129,100,190,149,17,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(10,56,185,95,110,55,149,95,190,149,17,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(10,56,185,100,90,55,129,100,190,149,17,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764229380975'] = function(block) {
  let code = "base_action.action('2右2')\n";
  return code;
}

Blockly.Blocks['1764229587527'] = {
  init: function() {
    this.jsonInit({
      "type": "1764229587527",
      "message0": "抱222",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764229587527'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,138,140,55,60,100,110,30,145,62,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,55,158,140,55,60,128,183,35,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,50,138,150,55,60,128,183,35,150,62,50,145,140,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,70,128,145,75,70,128,183,35,130,72,55,125,130,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,98,142,145,77,98,128,183,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,63,184,100,93,55,124,100,190,147,18,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764229587527'] = function(block) {
  let code = "base_action.action('抱222')\n";
  return code;
}

Blockly.Blocks['1764230029257'] = {
  init: function() {
    this.jsonInit({
      "type": "1764230029257",
      "message0": "抱22222",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764230029257'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,138,140,55,60,100,110,30,145,62,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,55,158,140,55,60,128,183,35,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,50,138,150,55,60,128,183,35,150,62,50,145,140,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,70,128,145,75,70,128,183,35,130,72,55,125,130,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,98,142,145,77,98,128,183,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,63,183,100,93,55,124,100,190,140,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764230029257'] = function(block) {
  let code = "base_action.action('抱22222')\n";
  return code;
}

Blockly.Blocks['1764588689091'] = {
  init: function() {
    this.jsonInit({
      "type": "1764588689091",
      "message0": "抱俩",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764588689091'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,138,140,55,60,100,110,30,145,62,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,55,158,140,55,60,128,183,35,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,50,138,150,55,60,128,183,35,150,62,50,145,140,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,70,128,145,75,70,128,183,35,130,72,55,125,130,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,98,142,145,77,98,128,183,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764588689091'] = function(block) {
  let code = "base_action.action('抱俩')\n";
  return code;
}

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

Blockly.Blocks['1764589017246'] = {
  init: function() {
    this.jsonInit({
      "type": "1764589017246",
      "message0": "opp",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764589017246'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,91,150,42,102,190,145,19,100,107,51,158,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(10,60,183,55,138,140,55,60,190,145,19,145,62,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(74,52,180,55,158,140,55,60,124,152,19,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(74,52,180,56,138,150,54,60,124,152,19,146,59,50,147,140,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764589017246'] = function(block) {
  let code = "base_action.action('opp')\n";
  return code;
}

Blockly.Blocks['1764589280296'] = {
  init: function() {
    this.jsonInit({
      "type": "1764589280296",
      "message0": "放下2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764589280296'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,91,150,42,102,190,145,19,100,107,51,158,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(10,60,183,55,138,140,55,60,190,145,19,145,62,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(10,60,183,55,158,140,55,60,190,145,19,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(74,52,180,56,138,150,54,60,124,152,19,146,59,50,147,140,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764589280296'] = function(block) {
  let code = "base_action.action('放下2')\n";
  return code;
}

Blockly.Blocks['1764589357642'] = {
  init: function() {
    this.jsonInit({
      "type": "1764589357642",
      "message0": "左22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764589357642'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,140,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(150)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764589357642'] = function(block) {
  let code = "base_action.action('左22')\n";
  return code;
}

Blockly.Blocks['1764589408976'] = {
  init: function() {
    this.jsonInit({
      "type": "1764589408976",
      "message0": "22右",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764589408976'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,60,183,60,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(150)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764589408976'] = function(block) {
  let code = "base_action.action('22右')\n";
  return code;
}

Blockly.Blocks['1764589692593'] = {
  init: function() {
    this.jsonInit({
      "type": "1764589692593",
      "message0": "22前进",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764589692593'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(10,60,183,90,91,48,134,88,190,145,19,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,60,183,86,123,95,115,90,190,145,19,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(10,60,183,86,121,37,161,88,190,145,19,94,109,146,72,89,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(8)\nMOTOmove19(10,60,183,107,98,56,129,111,190,145,19,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,60,183,106,93,54,128,113,190,145,19,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(10,60,183,106,91,54,128,111,190,145,19,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(10,60,183,88,69,45,112,90,190,145,19,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,60,183,86,123,95,115,90,190,145,19,94,107,146,72,87,0,0,100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764589692593'] = function(block) {
  let code = "base_action.action('22前进')\n";
  return code;
}

Blockly.Blocks['1764590049118'] = {
  init: function() {
    this.jsonInit({
      "type": "1764590049118",
      "message0": "222前进",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764590049118'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(10,60,183,90,91,48,134,88,190,145,19,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,60,183,86,123,95,115,90,190,145,19,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(10,60,183,86,121,37,161,88,190,145,19,94,109,146,72,89,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(8)\nMOTOmove19(10,60,183,107,98,56,129,111,190,145,19,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,60,183,106,93,54,128,113,190,145,19,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(10,60,183,106,91,54,128,111,190,145,19,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(10,60,183,88,69,45,112,90,190,145,19,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764590049118'] = function(block) {
  let code = "base_action.action('222前进')\n";
  return code;
}

Blockly.Blocks['1764590179196'] = {
  init: function() {
    this.jsonInit({
      "type": "1764590179196",
      "message0": "后退2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764590179196'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(150)\nMOTOmove19(10,60,183,100,93,55,124,98,190,145,19,100,107,145,76,102,0,0,100)\nMOTOwait()\nMOTOrigid16(10,60,183,85,50,50,50,85,190,145,19,85,50,50,50,85)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(10,60,183,105,93,55,124,108,190,145,19,111,102,136,78,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,105,93,55,124,107,190,145,19,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(10,60,183,92,116,55,144,85,190,145,19,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,92,75,55,106,95,190,145,19,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(10,60,183,105,93,55,124,107,190,145,19,108,84,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(10,60,183,105,92,55,124,107,190,145,19,111,107,136,78,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(10,60,183,100,93,55,124,98,190,145,19,100,107,145,76,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764590179196'] = function(block) {
  let code = "base_action.action('后退2')\n";
  return code;
}

Blockly.Blocks['1764590354827'] = {
  init: function() {
    this.jsonInit({
      "type": "1764590354827",
      "message0": "22左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764590354827'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(15)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(10,62,185,95,71,55,109,95,190,138,18,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764590354827'] = function(block) {
  let code = "base_action.action('22左转')\n";
  return code;
}

Blockly.Blocks['1764590682087'] = {
  init: function() {
    this.jsonInit({
      "type": "1764590682087",
      "message0": "22右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764590682087'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(10,60,183,95,110,55,149,95,190,145,19,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764590682087'] = function(block) {
  let code = "base_action.action('22右转')\n";
  return code;
}

Blockly.Blocks['1764591623110'] = {
  init: function() {
    this.jsonInit({
      "type": "1764591623110",
      "message0": "2左转2222",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764591623110'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(10)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(10,62,185,95,71,55,109,95,190,138,18,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(15)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764591623110'] = function(block) {
  let code = "base_action.action('2左转2222')\n";
  return code;
}

Blockly.Blocks['1764591674979'] = {
  init: function() {
    this.jsonInit({
      "type": "1764591674979",
      "message0": "2右转2222",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764591674979'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(10)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(10,60,183,95,110,55,149,95,190,145,19,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(15)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764591674979'] = function(block) {
  let code = "base_action.action('2右转2222')\n";
  return code;
}

Blockly.Blocks['1764591838126'] = {
  init: function() {
    this.jsonInit({
      "type": "1764591838126",
      "message0": "左转抱2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764591838126'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(13)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(13)\nMOTOmove19(10,62,185,95,71,55,109,95,190,138,18,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764591838126'] = function(block) {
  let code = "base_action.action('左转抱2')\n";
  return code;
}

Blockly.Blocks['1764591891286'] = {
  init: function() {
    this.jsonInit({
      "type": "1764591891286",
      "message0": "右转抱2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764591891286'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(13)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(13)\nMOTOmove19(10,60,183,95,110,55,149,95,190,145,19,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764591891286'] = function(block) {
  let code = "base_action.action('右转抱2')\n";
  return code;
}

Blockly.Blocks['1764592315443'] = {
  init: function() {
    this.jsonInit({
      "type": "1764592315443",
      "message0": "抱块左转2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764592315443'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(13)\nMOTOmove19(10,62,185,95,71,55,109,95,190,138,18,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764592315443'] = function(block) {
  let code = "base_action.action('抱块左转2')\n";
  return code;
}

Blockly.Blocks['1764592340001'] = {
  init: function() {
    this.jsonInit({
      "type": "1764592340001",
      "message0": "抱块右转2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764592340001'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(13)\nMOTOmove19(10,60,183,95,110,55,149,95,190,145,19,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764592340001'] = function(block) {
  let code = "base_action.action('抱块右转2')\n";
  return code;
}

Blockly.Blocks['1764763578261'] = {
  init: function() {
    this.jsonInit({
      "type": "1764763578261",
      "message0": "BAO2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764763578261'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,138,140,55,60,100,110,30,145,62,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,55,158,140,55,60,128,183,35,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,50,138,150,55,60,128,183,35,150,62,50,145,140,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,70,128,145,75,70,128,183,35,130,72,55,125,130,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,98,142,145,77,98,128,183,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1764763578261'] = function(block) {
  let code = "base_action.action('BAO2')\n";
  return code;
}

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

Blockly.Blocks['1764763746914'] = {
  init: function() {
    this.jsonInit({
      "type": "1764763746914",
      "message0": "ZUO2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764763746914'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(60)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,140,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1764763746914'] = function(block) {
  let code = "base_action.action('ZUO2')\n";
  return code;
}

Blockly.Blocks['1764763794647'] = {
  init: function() {
    this.jsonInit({
      "type": "1764763794647",
      "message0": "YOU2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764763794647'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,15,170,60,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764763794647'] = function(block) {
  let code = "base_action.action('YOU2')\n";
  return code;
}

Blockly.Blocks['1764763861973'] = {
  init: function() {
    this.jsonInit({
      "type": "1764763861973",
      "message0": "QIANJIN2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764763861973'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(75,15,170,90,91,48,134,88,128,183,35,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,15,170,86,123,95,115,90,128,183,35,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(75,15,170,86,121,37,161,88,128,183,35,94,109,146,72,89,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(8)\nMOTOmove19(75,15,170,107,98,56,129,111,128,183,35,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,15,170,106,93,54,128,113,128,183,35,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(75,15,170,106,91,54,128,111,128,183,35,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(75,15,170,88,69,45,112,90,128,183,35,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764763861973'] = function(block) {
  let code = "base_action.action('QIANJIN2')\n";
  return code;
}

Blockly.Blocks['1764763957252'] = {
  init: function() {
    this.jsonInit({
      "type": "1764763957252",
      "message0": "HOUTUI2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764763957252'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,100,93,55,124,98,128,183,35,100,107,145,76,102,0,0,100)\nMOTOwait()\nMOTOrigid16(75,15,170,85,50,50,50,85,128,183,35,85,50,50,50,85)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(75,15,170,105,93,55,124,108,128,183,35,111,102,136,78,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,105,93,55,124,107,128,183,35,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,92,116,55,144,85,128,183,35,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,92,75,55,106,95,128,183,35,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,105,93,55,124,107,128,183,35,108,84,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,105,92,55,124,107,128,183,35,111,107,136,78,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(75,15,170,100,93,55,124,98,128,183,35,100,107,145,76,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764763957252'] = function(block) {
  let code = "base_action.action('HOUTUI2')\n";
  return code;
}

Blockly.Blocks['1764764017207'] = {
  init: function() {
    this.jsonInit({
      "type": "1764764017207",
      "message0": "ZUOZHUAN2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764764017207'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(13)\nMOTOmove19(75,15,170,95,71,55,109,95,128,183,35,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1764764017207'] = function(block) {
  let code = "base_action.action('ZUOZHUAN2')\n";
  return code;
}

Blockly.Blocks['1764764133846'] = {
  init: function() {
    this.jsonInit({
      "type": "1764764133846",
      "message0": "YOUZHUAN2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764764133846'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(13)\nMOTOmove19(75,15,170,95,110,55,149,95,128,183,35,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764764133846'] = function(block) {
  let code = "base_action.action('YOUZHUAN2')\n";
  return code;
}

Blockly.Blocks['1764764534160'] = {
  init: function() {
    this.jsonInit({
      "type": "1764764534160",
      "message0": "ZUO1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764764534160'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(62,15,170,100,93,55,124,100,138,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(60)\nMOTOmove19(62,15,170,100,93,55,124,100,138,183,35,140,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(150)\nMOTOmove19(62,15,170,100,93,55,124,100,138,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1764764534160'] = function(block) {
  let code = "base_action.action('ZUO1')\n";
  return code;
}

Blockly.Blocks['1764764659639'] = {
  init: function() {
    this.jsonInit({
      "type": "1764764659639",
      "message0": "YOU1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764764659639'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(62,15,170,100,93,55,124,100,138,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(62,15,170,60,93,55,124,100,138,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(150)\nMOTOmove19(62,15,170,100,93,55,124,100,138,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764764659639'] = function(block) {
  let code = "base_action.action('YOU1')\n";
  return code;
}

Blockly.Blocks['1764764906374'] = {
  init: function() {
    this.jsonInit({
      "type": "1764764906374",
      "message0": "QIANJIN1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764764906374'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(150)\nMOTOmove19(62,15,170,100,93,55,124,100,138,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(5)\nMOTOmove19(62,15,170,90,91,48,134,88,138,183,35,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(62,15,170,86,123,95,115,90,138,183,35,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(62,15,170,86,121,37,161,88,138,183,35,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(62,15,170,107,98,56,129,111,138,183,35,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(62,15,170,106,93,54,128,113,138,183,35,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(62,15,170,106,91,54,128,111,138,183,35,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(62,15,170,88,69,45,112,90,138,183,35,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(62,15,170,86,123,95,115,90,138,183,35,94,107,146,72,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(62,15,170,86,123,75,129,100,138,183,35,94,107,146,72,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(150)\nMOTOmove19(62,15,170,100,93,55,124,100,138,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1764764906374'] = function(block) {
  let code = "base_action.action('QIANJIN1')\n";
  return code;
}

Blockly.Blocks['1764765134340'] = {
  init: function() {
    this.jsonInit({
      "type": "1764765134340",
      "message0": "HOUTUI1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764765134340'] = function(block) {
  let code = "MOTOrigid16(62,15,170,65,100,100,100,65,100,100,35,65,100,100,100,65)\nMOTOsetspeed(35)\nMOTOmove19(62,15,170,100,93,55,124,98,138,183,35,100,107,145,76,102,0,0,100)\nMOTOwait()\nMOTOrigid16(62,15,170,85,50,50,50,85,138,183,35,85,50,50,50,85)\nMOTOrigid16(62,15,170,85,60,60,60,75,138,183,35,85,60,60,60,75)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(62,15,170,105,93,55,124,108,138,183,35,111,102,136,78,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(62,15,170,105,93,55,124,107,138,183,35,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(62,15,170,92,116,55,144,85,138,183,35,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(62,15,170,92,75,55,106,95,138,183,35,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(62,15,170,105,93,55,124,107,138,183,35,108,84,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(62,15,170,105,92,55,124,107,138,183,35,111,107,136,78,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(62,15,170,100,93,55,124,98,138,183,35,100,107,145,76,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764765134340'] = function(block) {
  let code = "base_action.action('HOUTUI1')\n";
  return code;
}

Blockly.Blocks['1764765208461'] = {
  init: function() {
    this.jsonInit({
      "type": "1764765208461",
      "message0": "ZUOZHUAN1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764765208461'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,138,183,30,65,65,65,65,65)\nMOTOsetspeed(20)\nMOTOmove19(62,15,170,100,91,55,129,100,138,183,35,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(62,15,170,95,71,55,109,95,138,183,35,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(62,15,170,100,91,55,129,100,138,183,35,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764765208461'] = function(block) {
  let code = "base_action.action('ZUOZHUAN1')\n";
  return code;
}

Blockly.Blocks['1764765277365'] = {
  init: function() {
    this.jsonInit({
      "type": "1764765277365",
      "message0": "YOUZHUAN1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764765277365'] = function(block) {
  let code = "MOTOrigid16(30,30,170,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(62,15,170,100,90,55,129,100,138,183,35,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(62,15,170,95,110,55,149,95,138,183,35,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(62,15,170,100,90,55,129,100,138,183,35,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764765277365'] = function(block) {
  let code = "base_action.action('YOUZHUAN1')\n";
  return code;
}

Blockly.Blocks['1764765789429'] = {
  init: function() {
    this.jsonInit({
      "type": "1764765789429",
      "message0": "ZUO222",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764765789429'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(60)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,140,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1764765789429'] = function(block) {
  let code = "base_action.action('ZUO222')\n";
  return code;
}

Blockly.Blocks['1764765818968'] = {
  init: function() {
    this.jsonInit({
      "type": "1764765818968",
      "message0": "YOU222",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764765818968'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,15,170,60,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764765818968'] = function(block) {
  let code = "base_action.action('YOU222')\n";
  return code;
}

Blockly.Blocks['1764765977228'] = {
  init: function() {
    this.jsonInit({
      "type": "1764765977228",
      "message0": "ZUO22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764765977228'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(60)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,140,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1764765977228'] = function(block) {
  let code = "base_action.action('ZUO22')\n";
  return code;
}

Blockly.Blocks['1764765996466'] = {
  init: function() {
    this.jsonInit({
      "type": "1764765996466",
      "message0": "YOU22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764765996466'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,15,170,60,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764765996466'] = function(block) {
  let code = "base_action.action('YOU22')\n";
  return code;
}

Blockly.Blocks['1764835924758'] = {
  init: function() {
    this.jsonInit({
      "type": "1764835924758",
      "message0": "FAN",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764835924758'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(110,139,10,100,93,55,124,100,110,52,190,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(109,139,10,78,93,55,124,80,110,52,190,125,107,145,76,125,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(110,139,10,57,150,150,48,60,110,52,190,153,48,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,154,10,57,150,150,48,60,60,36,190,153,48,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,153,190,64,109,150,50,62,59,36,10,147,89,50,151,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(87,153,190,64,109,150,50,62,108,36,10,147,89,50,151,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,153,107,98,99,146,38,98,60,36,99,102,98,52,163,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764835924758'] = function(block) {
  let code = "base_action.action('FAN')\n";
  return code;
}

