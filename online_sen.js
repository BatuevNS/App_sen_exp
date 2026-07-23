/******************* 
 * Online_Sen *
 *******************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2025.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'online_sen';  // from the Builder filename that created this script
let expInfo = {
    'Возраст': '',
    'Пол': ["\u041c", "\u0416"],
    'Является ли русский Вашим родным языком?': ["\u0414\u0430", "\u041d\u0435\u0442"],
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('white'),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const trials_1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_1LoopBegin(trials_1LoopScheduler));
flowScheduler.add(trials_1LoopScheduler);
flowScheduler.add(trials_1LoopEnd);






















const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);





























flowScheduler.add(end_trRoutineBegin());
flowScheduler.add(end_trRoutineEachFrame());
flowScheduler.add(end_trRoutineEnd());
flowScheduler.add(ans_instr_1RoutineBegin());
flowScheduler.add(ans_instr_1RoutineEachFrame());
flowScheduler.add(ans_instr_1RoutineEnd());
const trials_14LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_14LoopBegin(trials_14LoopScheduler));
flowScheduler.add(trials_14LoopScheduler);
flowScheduler.add(trials_14LoopEnd);



















flowScheduler.add(ans_aha_1RoutineBegin());
flowScheduler.add(ans_aha_1RoutineEachFrame());
flowScheduler.add(ans_aha_1RoutineEnd());
const trials_20LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_20LoopBegin(trials_20LoopScheduler));
flowScheduler.add(trials_20LoopScheduler);
flowScheduler.add(trials_20LoopEnd);










const trials_24LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_24LoopBegin(trials_24LoopScheduler));
flowScheduler.add(trials_24LoopScheduler);
flowScheduler.add(trials_24LoopEnd);


const trials_25LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_25LoopBegin(trials_25LoopScheduler));
flowScheduler.add(trials_25LoopScheduler);
flowScheduler.add(trials_25LoopEnd);


const trials_33LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_33LoopBegin(trials_33LoopScheduler));
flowScheduler.add(trials_33LoopScheduler);
flowScheduler.add(trials_33LoopEnd);


const trials_26LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_26LoopBegin(trials_26LoopScheduler));
flowScheduler.add(trials_26LoopScheduler);
flowScheduler.add(trials_26LoopEnd);
































const trials_34LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_34LoopBegin(trials_34LoopScheduler));
flowScheduler.add(trials_34LoopScheduler);
flowScheduler.add(trials_34LoopEnd);











flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(data_saveRoutineBegin());
flowScheduler.add(data_saveRoutineEachFrame());
flowScheduler.add(data_saveRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'stim_tr.xlsx', 'path': 'stim_tr.xlsx'},
    {'name': 'stim_exp.xlsx', 'path': 'stim_exp.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["\u0412\u043e\u0437\u0440\u0430\u0441\u0442"]}_${expInfo["\u041f\u043e\u043b"]}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instr_tr_1Clock;
var nTr1;
var nTr2;
var nTr3;
var nTr4;
var nTr5;
var nTr6;
var nTr7;
var num_inst_tr_1;
var title_tr_1;
var head_tr_1;
var body_tr_1;
var text_arrow_tr_1;
var arrow_right_tr_1;
var key_resp;
var instr_tr_2Clock;
var num_inst_tr_2;
var title_tr_2;
var head_tr_2;
var body_tr_2;
var text_arrow_tr;
var arrow_right_tr;
var arrow_left_tr_1;
var key_resp_2;
var inst_tr7Clock;
var num_inst_tr;
var title_tr;
var head_tr_6;
var body_tr;
var text_arrow_tr_14;
var arrow_right_tr_11;
var arrow_left_tr_11;
var key_resp_8;
var instr_tr_3Clock;
var num_inst_tr_3;
var title_tr_3;
var head_tr_3;
var body_tr_3;
var text_arrow_tr_2;
var arrow_right_tr_2;
var arrow_left_tr;
var key_resp_3;
var instr_tr_4Clock;
var num_inst_tr_4;
var title_tr_4;
var head_tr_4;
var body_tr_4;
var text_arrow_tr_3;
var arrow_right_tr_3;
var arrow_left_tr_2;
var key_resp_4;
var instr_tr_5Clock;
var num_inst_tr_5;
var title_tr_5;
var head_tr_5;
var body_tr_5;
var text_arrow_tr_4;
var arrow_right_tr_4;
var arrow_left_tr_3;
var key_resp_5;
var instr_tr_6Clock;
var head_tr;
var text_arrow_tr_5;
var arrow_left_tr_4;
var key_resp_6;
var tr_1Clock;
var cross_tr;
var n_trial_tr;
var nTr11;
var nTr12;
var nTr13;
var nTr14;
var nTr15;
var nTr16;
var nTr17;
var nTr18;
var nTr19;
var tr_2Clock;
var num_tr;
var senten_tr;
var text_answ_tr;
var key_resp_7;
var text_slow_tr;
var tr_9Clock;
var impass_txt_tr;
var yes_impass_tr;
var no_impass_tr;
var tr_10Clock;
var type_impass_txt_tr;
var type_impass_confl_tr;
var type_impass_empty_tr;
var tr_3Clock;
var entr_ans_txt_tr;
var entr_ans_tr;
var button_entr_ans_tr;
var tr_4Clock;
var aha_quest_tr;
var aha_quest_tr_yes;
var aha_quest_tr_no;
var tr_5Clock;
var conf_quest_tr;
var conf_quest_tr_yes;
var conf_quest_tr_no;
var tr_6Clock;
var sen_txt_tr;
var right_ans_txt_tr;
var right_ans_quest_tr;
var right_ans_quest_tr_yes;
var right_ans_quest_tr_no;
var tr_7Clock;
var ind_aha_quest_tr;
var ind_aha_quest_tr_yes;
var ind_aha_quest_tr_no;
var ind_aha_quest_tr_dont_und;
var routine_1Clock;
var like_quest_tr;
var like_quest_tr_yes;
var like_quest_tr_no;
var tr_8Clock;
var sen_txt_wout_ans_tr;
var right_ans_wout_ans_txt_tr;
var right_ans_quest_wout_ans_tr;
var right_ans_quest_wout_ans_tr_yes;
var right_ans_quest_wout_ans_tr_no;
var right_ans_quest_wout_ans_tr_dont_und;
var routineClock;
var like_quest_tr_2;
var like_quest_wout_ans_tr_yes;
var like_quest_wout_ans_tr_no;
var end_trClock;
var text_end_tr;
var ans_instr_1Clock;
var nTr20;
var nTr21;
var nTr22;
var nTr23;
var nTr24;
var nTr25;
var nTr26;
var nTr41;
var nTr50;
var nTr49;
var nTr48;
var inst_quest_1;
var inst_quest_yes_1;
var inst_quest_no_1;
var inst_rep_1Clock;
var num_inst_rep_1;
var title_rep_1;
var head_rep_1;
var body_rep_1;
var text_arrow_tr_6;
var arrow_right_tr_5;
var key_resp_10;
var inst_rep_2Clock;
var num_inst_rep_2;
var title_rep_2;
var head_rep_2;
var body_rep_2;
var text_arrow_tr_7;
var arrow_right_tr_6;
var arrow_left_tr_5;
var key_resp_11;
var instr_rep_6Clock;
var num_inst_tr_6;
var title_tr_6;
var head_tr_7;
var body_tr_6;
var text_arrow_tr_15;
var arrow_right_tr_12;
var arrow_left_tr_12;
var key_resp_9;
var inst_rep_3Clock;
var num_inst_rep_3;
var title_rep_3;
var head_rep_3;
var body_rep_3;
var text_arrow_tr_8;
var arrow_right_tr_7;
var arrow_left_tr_6;
var key_resp_12;
var inst_rep_4Clock;
var num_inst_rep_4;
var title_rep_4;
var head_rep_4;
var body_rep_4;
var text_arrow_tr_9;
var arrow_right_tr_8;
var arrow_left_tr_7;
var key_resp_13;
var inst_rep_5Clock;
var head_rep_5;
var text_arrow_tr_10;
var arrow_left_tr_8;
var key_resp_14;
var ans_aha_1Clock;
var nTr30;
var nTr31;
var nTr32;
var nTr33;
var nTr42;
var aha_quest_1;
var aha_inst_quest_yes_1;
var aha_inst_quest_no_1;
var aha_rep_1Clock;
var num_aha_rep_1;
var aha_title_rep_1;
var aha_body_rep_1;
var text_arrow_tr_11;
var arrow_right_tr_9;
var key_resp_16;
var aha_rep_2Clock;
var num_aha_rep_2;
var aha_title_rep_2;
var aha_body_rep_2;
var text_arrow_tr_12;
var arrow_left_tr_9;
var arrow_right_tr_10;
var key_resp_17;
var aha_rep_3Clock;
var aha_head_rep_3;
var text_arrow_tr_13;
var arrow_left_tr_10;
var key_resp_15;
var ans_inst_2Clock;
var inst_quest_2;
var inst_quest_yes_2;
var inst_quest_no_2;
var ans_aha_2Clock;
var aha_quest_2;
var aha_inst_quest_yes_2;
var aha_inst_quest_no_2;
var start_expClock;
var aha_head_rep;
var key_resp_21;
var exp_pauseClock;
var title_exp_pause;
var head_exp_pause;
var key_resp_20;
var exp_1Clock;
var cross_exp;
var n_trial_exp;
var nTr51;
var nTr52;
var nTr53;
var nTr54;
var nTr55;
var nTr56;
var nTr57;
var nTr58;
var nTr59;
var nTr60;
var exp_2Clock;
var num_exp;
var senten_exp;
var text_answ_exp;
var key_resp_18;
var text_slow_exp;
var routine_2Clock;
var impass_txt_tr_2;
var yes_impass_tr_2;
var no_impass_tr_2;
var routine_3Clock;
var type_impass_txt;
var type_impass_confl;
var type_impass_empty;
var exp_3Clock;
var entr_ans_txt_exp;
var entr_ans_exp;
var button_entr_ans_exp;
var exp_4Clock;
var aha_quest_exp;
var aha_quest_exp_yes;
var aha_quest_exp_no;
var exp_5Clock;
var conf_quest_exp;
var conf_quest_exp_yes;
var conf_quest_exp_no;
var exp_6Clock;
var sen_txt_exp;
var right_ans_txt_exp;
var right_ans_quest_exp;
var right_ans_quest_exp_yes;
var right_ans_quest_exp_no;
var exp_7Clock;
var ind_aha_quest_exp;
var ind_aha_quest_exp_yes;
var ind_aha_quest_exp_no;
var ind_aha_quest_exp_dont_und;
var routine_4Clock;
var like_quest;
var like_quest_yes;
var like_quest_no;
var exp_8Clock;
var sen_txt_wout_ans_exp;
var right_ans_wout_ans_txt_exp;
var right_ans_quest_wout_ans_exp;
var right_ans_quest_wout_ans_exp_yes;
var right_ans_quest_wout_ans_exp_no;
var right_ans_quest_wout_ans_exp_dont_und;
var routine_5Clock;
var like_quest_2;
var like_quest_wout_ans_yes;
var like_quest_wout_ans_no;
var end_expClock;
var text_end_exp;
var p_exp_int_1Clock;
var entr_ans_txt_intr_1;
var entr_ans_intr_1;
var button_entr_ans_intr_1;
var p_exp_int_2Clock;
var nTr61;
var entr_ans_txt_intr_2;
var aha_quest_intr_yes;
var aha_quest_intr_no;
var p_exp_int_3Clock;
var entr_ans_txt_intr_3;
var entr_ans_txt_intr_3_1;
var entr_ans_intr_3;
var button_entr_ans_intr_3;
var p_exp_int_4Clock;
var entr_ans_txt_intr_4;
var entr_ans_txt_intr_4_1;
var entr_ans_intr_4;
var button_entr_ans_intr_4;
var p_exp_int_5Clock;
var entr_ans_txt_intr_5;
var slider;
var text_easy;
var text_hard;
var button_entr_ans_intr_5;
var p_exp_int_6Clock;
var entr_ans_txt_intr_6;
var entr_ans_intr_6;
var button_entr_ans_intr_6;
var p_exp_int_7Clock;
var entr_ans_txt_intr_7;
var entr_ans_intr_7;
var button_entr_ans_intr_7;
var endClock;
var text_end;
var data_saveClock;
var text_data_save;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr_tr_1"
  instr_tr_1Clock = new util.Clock();
  // Run 'Begin Experiment' code from code
  nTr1 = 1;
  nTr2 = 1;
  nTr3 = 1;
  nTr4 = 1;
  nTr5 = 1;
  nTr6 = 1;
  nTr7 = 1;
  psychoJS.window.mouseVisible = false;
  
  num_inst_tr_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'num_inst_tr_1',
    text: '1/6',
    font: 'Arial',
    units: undefined, 
    pos: [0.725, 0.43], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  title_tr_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'title_tr_1',
    text: 'Инструкция',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.085,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  head_tr_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'head_tr_1',
    text: 'В чем суть заданий?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.065,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  body_tr_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'body_tr_1',
    text: 'Вам будут предъявляться неполные предложения\nс описанием некоторой ситуации.\nВаша цель – понять, какое пропущено слово / словосочетание, поясняющее суть ситуации.\n\nПример предложения: \nГусеницы были старые, потому что у фермера не было денег\nОтвет:\nТрактор',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.075)], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_arrow_tr_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_arrow_tr_1',
    text: 'Используйте стрелки, чтобы перемещаться между листами инструкции',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.455)], draggable: false, height: 0.03,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  arrow_right_tr_1 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_right_tr_1', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 90.0, 
    pos: [0.75, (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr_tr_2"
  instr_tr_2Clock = new util.Clock();
  num_inst_tr_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'num_inst_tr_2',
    text: '2/6',
    font: 'Arial',
    units: undefined, 
    pos: [0.725, 0.43], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  title_tr_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'title_tr_2',
    text: 'Инструкция',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.085,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  head_tr_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'head_tr_2',
    text: 'Как отвечать?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.065,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  body_tr_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'body_tr_2',
    text: '- Перед Вами появится предложение на 30 секунд.\n- Если Вы найдете решение (пропущенное слово) нажмите «ПРОБЕЛ»\n- После нажатия у Вас появиться поле, куда нужно вписать ответ.\n- Чтобы отправить ответ, нажмите мышкой на кнопку «ОТВЕТИТЬ»',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.022)], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_arrow_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_arrow_tr',
    text: 'Используйте стрелки, чтобы перемещаться между листами инструкции',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.455)], draggable: false, height: 0.03,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  arrow_right_tr = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_right_tr', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 90.0, 
    pos: [0.75, (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  arrow_left_tr_1 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_left_tr_1', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 270.0, 
    pos: [(- 0.75), (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -7, 
    interpolate: true, 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "inst_tr7"
  inst_tr7Clock = new util.Clock();
  num_inst_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'num_inst_tr',
    text: '3/6',
    font: 'Arial',
    units: undefined, 
    pos: [0.725, 0.43], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  title_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'title_tr',
    text: 'Инструкция',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.085,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  head_tr_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'head_tr_6',
    text: 'Если не успел найти решение?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.065,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  body_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'body_tr',
    text: 'Если Вы не успели найти решение, то появится вопрос:\n«Ваш процесс решения задачи был перерван в состоянии тупика?»\nТупик - это период времени, когда Вы не можете решить задачу и топчитесь на одном месте.\n\nЕсли ответите «ДА», то нужно будет выбрать тип тупика:\n- Застряла неверная идея;\n- Пустота (нет идей).',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.075)], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_arrow_tr_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_arrow_tr_14',
    text: 'Используйте стрелки, чтобы перемещаться между листами инструкции',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.455)], draggable: false, height: 0.03,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  arrow_right_tr_11 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_right_tr_11', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 90.0, 
    pos: [0.75, (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  arrow_left_tr_11 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_left_tr_11', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 270.0, 
    pos: [(- 0.75), (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -7, 
    interpolate: true, 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr_tr_3"
  instr_tr_3Clock = new util.Clock();
  num_inst_tr_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'num_inst_tr_3',
    text: '4/6',
    font: 'Arial',
    units: undefined, 
    pos: [0.725, 0.43], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  title_tr_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'title_tr_3',
    text: 'Инструкция',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.085,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  head_tr_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'head_tr_3',
    text: 'Что будет после?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.065,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  body_tr_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'body_tr_3',
    text: '1. Перед Вами появиться вопрос о том, испытали ли Вы «Ага-переживание» при нахождении ответа;\n2. После отчета о наличии / отсутствии «Ага-переживания» нужно будет оценить уверенность в своем ответе.\n\nОтветы нужно давать с помощью мышки, нажав на один из вариантов (да / нет)',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.022)], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_arrow_tr_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_arrow_tr_2',
    text: 'Используйте стрелки, чтобы перемещаться между листами инструкции',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.455)], draggable: false, height: 0.03,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  arrow_right_tr_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_right_tr_2', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 90.0, 
    pos: [0.75, (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  arrow_left_tr = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_left_tr', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 270.0, 
    pos: [(- 0.75), (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -7, 
    interpolate: true, 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr_tr_4"
  instr_tr_4Clock = new util.Clock();
  num_inst_tr_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'num_inst_tr_4',
    text: '5/6',
    font: 'Arial',
    units: undefined, 
    pos: [0.725, 0.43], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  title_tr_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'title_tr_4',
    text: 'Инструкция',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.085,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  head_tr_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'head_tr_4',
    text: 'Что после оценки уверенности?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.065,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  body_tr_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'body_tr_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.022)], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_arrow_tr_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_arrow_tr_3',
    text: 'Используйте стрелки, чтобы перемещаться между листами инструкции',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.455)], draggable: false, height: 0.03,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  arrow_right_tr_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_right_tr_3', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 90.0, 
    pos: [0.75, (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  arrow_left_tr_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_left_tr_2', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 270.0, 
    pos: [(- 0.75), (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -7, 
    interpolate: true, 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr_tr_5"
  instr_tr_5Clock = new util.Clock();
  num_inst_tr_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'num_inst_tr_5',
    text: '6/6',
    font: 'Arial',
    units: undefined, 
    pos: [0.725, 0.43], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  title_tr_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'title_tr_5',
    text: 'Инструкция',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.085,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  head_tr_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'head_tr_5',
    text: 'Описание “Ага-переживания”',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.065,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  body_tr_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'body_tr_5',
    text: 'Это чувство, когда Вы внезапно понимаете решение задачи. \nОно характеризуется переживанием ВНЕЗАПНОСТИ перехода от непонимания к пониманию и ПОЗИТИВНЫМИ эмоциями (Ага! Точно! Вот оно!).\n\nПри этом, “Ага-переживание” может возникать как при самостоятельном решении задачи, так и при знакомстве с ответом (Так вот какой ответ!).',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.075)], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_arrow_tr_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_arrow_tr_4',
    text: 'Используйте стрелки, чтобы перемещаться между листами инструкции',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.455)], draggable: false, height: 0.03,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  arrow_right_tr_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_right_tr_4', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 90.0, 
    pos: [0.75, (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  arrow_left_tr_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_left_tr_3', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 270.0, 
    pos: [(- 0.75), (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -7, 
    interpolate: true, 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr_tr_6"
  instr_tr_6Clock = new util.Clock();
  head_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'head_tr',
    text: 'Нажмите “ПРОБЕЛ”, чтобы начать тренировочный блок',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.065,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_arrow_tr_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_arrow_tr_5',
    text: 'Используйте стрелки, чтобы перемещаться между листами инструкции',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.455)], draggable: false, height: 0.03,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  arrow_left_tr_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_left_tr_4', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 270.0, 
    pos: [(- 0.75), (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "tr_1"
  tr_1Clock = new util.Clock();
  cross_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'cross_tr',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.085,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Run 'Begin Experiment' code from code_8
  n_trial_tr = 0;
  nTr11 = 0;
  nTr12 = 0;
  nTr13 = 0;
  nTr14 = 0;
  nTr15 = 0;
  nTr16 = 0;
  nTr17 = 0;
  nTr18 = 0;
  nTr19 = 0;
  
  // Initialize components for Routine "tr_2"
  tr_2Clock = new util.Clock();
  num_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'num_tr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.725, 0.43], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  senten_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'senten_tr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_answ_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_answ_tr',
    text: 'Нашел ответ\n“ПРОБЕЛ”',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_slow_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_slow_tr',
    text: 'Время закончилось',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('Black'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "tr_9"
  tr_9Clock = new util.Clock();
  impass_txt_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'impass_txt_tr',
    text: 'Ваш процесс решения задачи был перерван в состоянии тупика?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  yes_impass_tr = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'yes_impass_tr',
    text: 'Да',
    font: 'Arial',
    pos: [(- 0.3), (- 0.15)],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  yes_impass_tr.clock = new util.Clock();
  
  no_impass_tr = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'no_impass_tr',
    text: 'Нет',
    font: 'Arial',
    pos: [0.3, (- 0.15)],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  no_impass_tr.clock = new util.Clock();
  
  // Initialize components for Routine "tr_10"
  tr_10Clock = new util.Clock();
  type_impass_txt_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'type_impass_txt_tr',
    text: 'Выберете тип тупика',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  type_impass_confl_tr = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'type_impass_confl_tr',
    text: 'Застряла неверная идея',
    font: 'Arial',
    pos: [(- 0.35), (- 0.1)],
    size: [0.57, 0.14],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  type_impass_confl_tr.clock = new util.Clock();
  
  type_impass_empty_tr = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'type_impass_empty_tr',
    text: 'Пустота (нет идей)',
    font: 'Arial',
    pos: [0.35, (- 0.1)],
    size: [0.57, 0.14],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  type_impass_empty_tr.clock = new util.Clock();
  
  // Initialize components for Routine "tr_3"
  tr_3Clock = new util.Clock();
  entr_ans_txt_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'entr_ans_txt_tr',
    text: 'Введите слово / словосочетание поясняющее суть задачи',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.07,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  entr_ans_tr = new visual.TextBox({
    win: psychoJS.window,
    name: 'entr_ans_tr',
    text: '',
    placeholder: 'Пишите здесь...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 0.06],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  button_entr_ans_tr = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_entr_ans_tr',
    text: 'Ответить',
    font: 'Arial',
    pos: [0, (- 0.1)],
    size: [0.8, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  button_entr_ans_tr.clock = new util.Clock();
  
  // Initialize components for Routine "tr_4"
  tr_4Clock = new util.Clock();
  aha_quest_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'aha_quest_tr',
    text: 'В момент нахождения ответа было ли у Вас “Ага-переживание”?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.07,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  aha_quest_tr_yes = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'aha_quest_tr_yes',
    text: 'Да',
    font: 'Arial',
    pos: [(- 0.3), 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  aha_quest_tr_yes.clock = new util.Clock();
  
  aha_quest_tr_no = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'aha_quest_tr_no',
    text: 'Нет',
    font: 'Arial',
    pos: [0.3, 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  aha_quest_tr_no.clock = new util.Clock();
  
  // Initialize components for Routine "tr_5"
  tr_5Clock = new util.Clock();
  conf_quest_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'conf_quest_tr',
    text: 'Уверены ли Вы в правильности своего ответа?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.07,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  conf_quest_tr_yes = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'conf_quest_tr_yes',
    text: 'Да',
    font: 'Arial',
    pos: [(- 0.3), 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  conf_quest_tr_yes.clock = new util.Clock();
  
  conf_quest_tr_no = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'conf_quest_tr_no',
    text: 'Нет',
    font: 'Arial',
    pos: [0.3, 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  conf_quest_tr_no.clock = new util.Clock();
  
  // Initialize components for Routine "tr_6"
  tr_6Clock = new util.Clock();
  sen_txt_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'sen_txt_tr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  right_ans_txt_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'right_ans_txt_tr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  right_ans_quest_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'right_ans_quest_tr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.06,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  right_ans_quest_tr_yes = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'right_ans_quest_tr_yes',
    text: 'Да',
    font: 'Arial',
    pos: [(- 0.3), (- 0.15)],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  right_ans_quest_tr_yes.clock = new util.Clock();
  
  right_ans_quest_tr_no = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'right_ans_quest_tr_no',
    text: 'Нет',
    font: 'Arial',
    pos: [0.3, (- 0.15)],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  right_ans_quest_tr_no.clock = new util.Clock();
  
  // Initialize components for Routine "tr_7"
  tr_7Clock = new util.Clock();
  ind_aha_quest_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'ind_aha_quest_tr',
    text: 'Было ли у Вас “Ага-переживание” при знакомстве с ответом?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.07,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  ind_aha_quest_tr_yes = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ind_aha_quest_tr_yes',
    text: 'Да',
    font: 'Arial',
    pos: [(- 0.3), 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  ind_aha_quest_tr_yes.clock = new util.Clock();
  
  ind_aha_quest_tr_no = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ind_aha_quest_tr_no',
    text: 'Нет',
    font: 'Arial',
    pos: [0.3, 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  ind_aha_quest_tr_no.clock = new util.Clock();
  
  ind_aha_quest_tr_dont_und = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ind_aha_quest_tr_dont_und',
    text: 'Не понял ответ',
    font: 'Arial',
    pos: [0, (- 0.15)],
    size: [0.55, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  ind_aha_quest_tr_dont_und.clock = new util.Clock();
  
  // Initialize components for Routine "routine_1"
  routine_1Clock = new util.Clock();
  like_quest_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'like_quest_tr',
    text: 'Понравилось ли Вам предложение?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.07,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  like_quest_tr_yes = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'like_quest_tr_yes',
    text: 'Да',
    font: 'Arial',
    pos: [(- 0.3), 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  like_quest_tr_yes.clock = new util.Clock();
  
  like_quest_tr_no = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'like_quest_tr_no',
    text: 'Нет',
    font: 'Arial',
    pos: [0.3, 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  like_quest_tr_no.clock = new util.Clock();
  
  // Initialize components for Routine "tr_8"
  tr_8Clock = new util.Clock();
  sen_txt_wout_ans_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'sen_txt_wout_ans_tr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  right_ans_wout_ans_txt_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'right_ans_wout_ans_txt_tr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  right_ans_quest_wout_ans_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'right_ans_quest_wout_ans_tr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.06,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  right_ans_quest_wout_ans_tr_yes = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'right_ans_quest_wout_ans_tr_yes',
    text: 'Да',
    font: 'Arial',
    pos: [(- 0.3), (- 0.15)],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  right_ans_quest_wout_ans_tr_yes.clock = new util.Clock();
  
  right_ans_quest_wout_ans_tr_no = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'right_ans_quest_wout_ans_tr_no',
    text: 'Нет',
    font: 'Arial',
    pos: [0.3, (- 0.15)],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  right_ans_quest_wout_ans_tr_no.clock = new util.Clock();
  
  right_ans_quest_wout_ans_tr_dont_und = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'right_ans_quest_wout_ans_tr_dont_und',
    text: 'Не понял ответ',
    font: 'Arial',
    pos: [0, (- 0.3)],
    size: [0.55, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -6,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  right_ans_quest_wout_ans_tr_dont_und.clock = new util.Clock();
  
  // Initialize components for Routine "routine"
  routineClock = new util.Clock();
  like_quest_tr_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'like_quest_tr_2',
    text: 'Понравилось ли Вам предложение?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.07,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  like_quest_wout_ans_tr_yes = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'like_quest_wout_ans_tr_yes',
    text: 'Да',
    font: 'Arial',
    pos: [(- 0.3), 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  like_quest_wout_ans_tr_yes.clock = new util.Clock();
  
  like_quest_wout_ans_tr_no = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'like_quest_wout_ans_tr_no',
    text: 'Нет',
    font: 'Arial',
    pos: [0.3, 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  like_quest_wout_ans_tr_no.clock = new util.Clock();
  
  // Initialize components for Routine "end_tr"
  end_trClock = new util.Clock();
  text_end_tr = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end_tr',
    text: 'Тренировочный блок закончен',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('Black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "ans_instr_1"
  ans_instr_1Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_15
  nTr20 = 0;
  nTr21 = 1;
  nTr22 = 1;
  nTr23 = 1;
  nTr24 = 1;
  nTr25 = 1;
  nTr26 = 1;
  nTr41 = 0;
  nTr50 = 1;
  nTr49 = 1;
  nTr48 = 1;
  
  inst_quest_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'inst_quest_1',
    text: 'Поняли ли Вы как решать задачи?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.07,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  inst_quest_yes_1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'inst_quest_yes_1',
    text: 'Да',
    font: 'Arial',
    pos: [(- 0.3), 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  inst_quest_yes_1.clock = new util.Clock();
  
  inst_quest_no_1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'inst_quest_no_1',
    text: 'Нет',
    font: 'Arial',
    pos: [0.3, 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  inst_quest_no_1.clock = new util.Clock();
  
  // Initialize components for Routine "inst_rep_1"
  inst_rep_1Clock = new util.Clock();
  num_inst_rep_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'num_inst_rep_1',
    text: '1/4',
    font: 'Arial',
    units: undefined, 
    pos: [0.725, 0.43], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  title_rep_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'title_rep_1',
    text: 'Инструкция',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.085,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  head_rep_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'head_rep_1',
    text: 'В чем суть заданий?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.065,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  body_rep_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'body_rep_1',
    text: 'Вам будут предъявляться неполные предложения\nс описанием некоторой ситуации.\nВаша цель – понять, какое пропущено слово / словосочетание, поясняющее суть ситуации.\n\nПример предложения: \nСтог сена был важен, потому что ткань порвалась\nОтвет:\nПарашют',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.075)], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_arrow_tr_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_arrow_tr_6',
    text: 'Используйте стрелки, чтобы перемещаться между листами инструкции',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.455)], draggable: false, height: 0.03,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  arrow_right_tr_5 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_right_tr_5', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 90.0, 
    pos: [0.75, (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "inst_rep_2"
  inst_rep_2Clock = new util.Clock();
  num_inst_rep_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'num_inst_rep_2',
    text: '2/4',
    font: 'Arial',
    units: undefined, 
    pos: [0.725, 0.43], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  title_rep_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'title_rep_2',
    text: 'Инструкция',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.085,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  head_rep_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'head_rep_2',
    text: 'Как отвечать?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.065,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  body_rep_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'body_rep_2',
    text: '- Перед Вами появится предложение на 30 секунд.\n- Если Вы найдете решение (пропущенное слово) нажмите «ПРОБЕЛ»\n- После нажатия у Вас появиться поле, куда нужно вписать ответ.\n- Чтобы отправить ответ, нажмите мышкой на кнопку «ОТВЕТИТЬ»',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.022)], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_arrow_tr_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_arrow_tr_7',
    text: 'Используйте стрелки, чтобы перемещаться между листами инструкции',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.455)], draggable: false, height: 0.03,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  arrow_right_tr_6 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_right_tr_6', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 90.0, 
    pos: [0.75, (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  arrow_left_tr_5 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_left_tr_5', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 270.0, 
    pos: [(- 0.75), (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -7, 
    interpolate: true, 
  });
  
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr_rep_6"
  instr_rep_6Clock = new util.Clock();
  num_inst_tr_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'num_inst_tr_6',
    text: '3/6',
    font: 'Arial',
    units: undefined, 
    pos: [0.725, 0.43], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  title_tr_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'title_tr_6',
    text: 'Инструкция',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.085,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  head_tr_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'head_tr_7',
    text: 'Если не успел найти решение?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.065,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  body_tr_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'body_tr_6',
    text: 'Если Вы не успели найти решение, то появится вопрос:\n«Ваш процесс решения задачи был перерван в состоянии тупика?»\nТупик - это период времени, когда Вы не можете решить задачу и топчитесь на одном месте.\n\nЕсли ответите «ДА», то нужно будет выбрать тип тупика:\n- Застряла неверная идея;\n- Пустота (нет идей).',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.075)], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_arrow_tr_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_arrow_tr_15',
    text: 'Используйте стрелки, чтобы перемещаться между листами инструкции',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.455)], draggable: false, height: 0.03,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  arrow_right_tr_12 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_right_tr_12', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 90.0, 
    pos: [0.75, (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  arrow_left_tr_12 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_left_tr_12', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 270.0, 
    pos: [(- 0.75), (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -7, 
    interpolate: true, 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "inst_rep_3"
  inst_rep_3Clock = new util.Clock();
  num_inst_rep_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'num_inst_rep_3',
    text: '3/4',
    font: 'Arial',
    units: undefined, 
    pos: [0.725, 0.43], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  title_rep_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'title_rep_3',
    text: 'Инструкция',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.085,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  head_rep_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'head_rep_3',
    text: 'Что будет после?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.065,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  body_rep_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'body_rep_3',
    text: '1. Перед Вами появиться вопрос о том, испытали ли Вы «Ага-переживание» при нахождении ответа;\n2. После отчета о наличии / отсутствии «Ага-переживания» нужно будет оценить уверенность в своем ответе.\n\nОтветы нужно давать с помощью мышки, нажав на один из вариантов (да / нет)',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.022)], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_arrow_tr_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_arrow_tr_8',
    text: 'Используйте стрелки, чтобы перемещаться между листами инструкции',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.455)], draggable: false, height: 0.03,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  arrow_right_tr_7 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_right_tr_7', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 90.0, 
    pos: [0.75, (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  arrow_left_tr_6 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_left_tr_6', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 270.0, 
    pos: [(- 0.75), (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -7, 
    interpolate: true, 
  });
  
  key_resp_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "inst_rep_4"
  inst_rep_4Clock = new util.Clock();
  num_inst_rep_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'num_inst_rep_4',
    text: '4/4',
    font: 'Arial',
    units: undefined, 
    pos: [0.725, 0.43], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  title_rep_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'title_rep_4',
    text: 'Инструкция',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.085,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  head_rep_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'head_rep_4',
    text: 'Что после оценки уверенности?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.065,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  body_rep_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'body_rep_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.022)], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_arrow_tr_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_arrow_tr_9',
    text: 'Используйте стрелки, чтобы перемещаться между листами инструкции',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.455)], draggable: false, height: 0.03,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  arrow_right_tr_8 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_right_tr_8', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 90.0, 
    pos: [0.75, (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  arrow_left_tr_7 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_left_tr_7', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 270.0, 
    pos: [(- 0.75), (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -7, 
    interpolate: true, 
  });
  
  key_resp_13 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "inst_rep_5"
  inst_rep_5Clock = new util.Clock();
  head_rep_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'head_rep_5',
    text: 'Нажмите “ПРОБЕЛ”, чтобы завершить повторение инструкции',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.065,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_arrow_tr_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_arrow_tr_10',
    text: 'Используйте стрелки, чтобы перемещаться между листами инструкции',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.455)], draggable: false, height: 0.03,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  arrow_left_tr_8 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_left_tr_8', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 270.0, 
    pos: [(- 0.75), (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  key_resp_14 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ans_aha_1"
  ans_aha_1Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_18
  nTr30 = 0;
  nTr31 = 1;
  nTr32 = 1;
  nTr33 = 1;
  nTr42 = 0;
  
  aha_quest_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'aha_quest_1',
    text: 'Поняли ли Вы что такое “Ага-переживание”?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.07,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  aha_inst_quest_yes_1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'aha_inst_quest_yes_1',
    text: 'Да',
    font: 'Arial',
    pos: [(- 0.3), 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  aha_inst_quest_yes_1.clock = new util.Clock();
  
  aha_inst_quest_no_1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'aha_inst_quest_no_1',
    text: 'Нет',
    font: 'Arial',
    pos: [0.3, 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  aha_inst_quest_no_1.clock = new util.Clock();
  
  // Initialize components for Routine "aha_rep_1"
  aha_rep_1Clock = new util.Clock();
  num_aha_rep_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'num_aha_rep_1',
    text: '1/2',
    font: 'Arial',
    units: undefined, 
    pos: [0.725, 0.43], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  aha_title_rep_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'aha_title_rep_1',
    text: 'Описание “Ага-переживания”',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.085,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  aha_body_rep_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'aha_body_rep_1',
    text: 'Ага-переживание - это чувство «Эврики» или озарения, которое Вы можете испытать, когда внезапно понимаете решение задачи. \nОно характеризуется переживанием внезапности перехода от непонимания к пониманию и позитивными эмоциями.\n\nОчень ярким примером Ага-переживания является история про Архимеда, который, решив задачу, выскочил из ванной и побежал голым по улице.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.03], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_arrow_tr_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_arrow_tr_11',
    text: 'Используйте стрелки, чтобы перемещаться между листами инструкции',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.455)], draggable: false, height: 0.03,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  arrow_right_tr_9 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_right_tr_9', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 90.0, 
    pos: [0.75, (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -5, 
    interpolate: true, 
  });
  
  key_resp_16 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "aha_rep_2"
  aha_rep_2Clock = new util.Clock();
  num_aha_rep_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'num_aha_rep_2',
    text: '2/2',
    font: 'Arial',
    units: undefined, 
    pos: [0.725, 0.43], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  aha_title_rep_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'aha_title_rep_2',
    text: 'Примеры',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.085,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  aha_body_rep_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'aha_body_rep_2',
    text: '☑ Отметьте, что испытали “Ага-переживание”: \n- Если самостоятельно найденный ответ был с ощущением внезапного понимания (Ага! Точно! Вот оно!);\n- Если прочитав предъявленный ответ Вы внезапно поняли, что он верный (Аааа! Так вот какой ответ!).\n\n⮽ Отметьте, что НЕ испытали “Ага-переживание”:\n- Если самостоятельно найденный ответ был постепенным “шаг за шагом”;\n- Если прочитав предъявленный ответ Вы подумали, подставили его в предложение и поняли, что он верный.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.022)], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_arrow_tr_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_arrow_tr_12',
    text: 'Используйте стрелки, чтобы перемещаться между листами инструкции',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.455)], draggable: false, height: 0.03,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  arrow_left_tr_9 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_left_tr_9', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 270.0, 
    pos: [(- 0.75), (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -5, 
    interpolate: true, 
  });
  
  arrow_right_tr_10 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_right_tr_10', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 90.0, 
    pos: [0.75, (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  key_resp_17 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "aha_rep_3"
  aha_rep_3Clock = new util.Clock();
  aha_head_rep_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'aha_head_rep_3',
    text: 'Нажмите “ПРОБЕЛ”, чтобы завершить повторение описания “Ага-переживания”',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.065,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_arrow_tr_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_arrow_tr_13',
    text: 'Используйте стрелки, чтобы перемещаться между листами инструкции',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.455)], draggable: false, height: 0.03,  wrapWidth: 1.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  arrow_left_tr_10 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_left_tr_10', 
    vertices: 'arrow', size:[0.03, 0.05],
    ori: 270.0, 
    pos: [(- 0.75), (- 0.45)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  key_resp_15 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ans_inst_2"
  ans_inst_2Clock = new util.Clock();
  inst_quest_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'inst_quest_2',
    text: 'Поняли ли Вы как решать задачи?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.07,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  inst_quest_yes_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'inst_quest_yes_2',
    text: 'Да',
    font: 'Arial',
    pos: [(- 0.3), 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  inst_quest_yes_2.clock = new util.Clock();
  
  inst_quest_no_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'inst_quest_no_2',
    text: 'Нет',
    font: 'Arial',
    pos: [0.3, 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  inst_quest_no_2.clock = new util.Clock();
  
  // Initialize components for Routine "ans_aha_2"
  ans_aha_2Clock = new util.Clock();
  aha_quest_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'aha_quest_2',
    text: 'Поняли ли Вы что такое “Ага-переживание”?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.07,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  aha_inst_quest_yes_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'aha_inst_quest_yes_2',
    text: 'Да',
    font: 'Arial',
    pos: [(- 0.3), 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  aha_inst_quest_yes_2.clock = new util.Clock();
  
  aha_inst_quest_no_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'aha_inst_quest_no_2',
    text: 'Нет',
    font: 'Arial',
    pos: [0.3, 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  aha_inst_quest_no_2.clock = new util.Clock();
  
  // Initialize components for Routine "start_exp"
  start_expClock = new util.Clock();
  aha_head_rep = new visual.TextStim({
    win: psychoJS.window,
    name: 'aha_head_rep',
    text: 'Если готовы начать основной блок, нажмите “ПРОБЕЛ”',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.065,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_21 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exp_pause"
  exp_pauseClock = new util.Clock();
  title_exp_pause = new visual.TextStim({
    win: psychoJS.window,
    name: 'title_exp_pause',
    text: 'Если Вы устали, то можете отдохнуть ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  head_exp_pause = new visual.TextStim({
    win: psychoJS.window,
    name: 'head_exp_pause',
    text: 'Нажмите “ПРОБЕЛ”, чтобы продолжить',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.065,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_20 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exp_1"
  exp_1Clock = new util.Clock();
  cross_exp = new visual.TextStim({
    win: psychoJS.window,
    name: 'cross_exp',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.085,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Run 'Begin Experiment' code from code_23
  n_trial_exp = 0;
  nTr51 = 0;
  nTr52 = 0;
  nTr53 = 0;
  nTr54 = 0;
  nTr55 = 0;
  nTr56 = 0;
  nTr57 = 0;
  nTr58 = 0;
  nTr59 = 0;
  nTr60 = 0;
  
  // Initialize components for Routine "exp_2"
  exp_2Clock = new util.Clock();
  num_exp = new visual.TextStim({
    win: psychoJS.window,
    name: 'num_exp',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.725, 0.43], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  senten_exp = new visual.TextStim({
    win: psychoJS.window,
    name: 'senten_exp',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_answ_exp = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_answ_exp',
    text: 'Нашел ответ\n“ПРОБЕЛ”',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_18 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_slow_exp = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_slow_exp',
    text: 'Время закончилось',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('Black'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "routine_2"
  routine_2Clock = new util.Clock();
  impass_txt_tr_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'impass_txt_tr_2',
    text: 'Ваш процесс решения задачи был перерван в состоянии тупика?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  yes_impass_tr_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'yes_impass_tr_2',
    text: 'Да',
    font: 'Arial',
    pos: [(- 0.3), (- 0.15)],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  yes_impass_tr_2.clock = new util.Clock();
  
  no_impass_tr_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'no_impass_tr_2',
    text: 'Нет',
    font: 'Arial',
    pos: [0.3, (- 0.15)],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  no_impass_tr_2.clock = new util.Clock();
  
  // Initialize components for Routine "routine_3"
  routine_3Clock = new util.Clock();
  type_impass_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'type_impass_txt',
    text: 'Выберете тип тупика',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  type_impass_confl = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'type_impass_confl',
    text: 'Застряла неверная идея',
    font: 'Arial',
    pos: [(- 0.35), (- 0.1)],
    size: [0.57, 0.14],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  type_impass_confl.clock = new util.Clock();
  
  type_impass_empty = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'type_impass_empty',
    text: 'Пустота (нет идей)',
    font: 'Arial',
    pos: [0.35, (- 0.1)],
    size: [0.57, 0.14],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  type_impass_empty.clock = new util.Clock();
  
  // Initialize components for Routine "exp_3"
  exp_3Clock = new util.Clock();
  entr_ans_txt_exp = new visual.TextStim({
    win: psychoJS.window,
    name: 'entr_ans_txt_exp',
    text: 'Введите слово / словосочетание поясняющее суть задачи',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.07,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  entr_ans_exp = new visual.TextBox({
    win: psychoJS.window,
    name: 'entr_ans_exp',
    text: '',
    placeholder: 'Пишите здесь...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 0.06],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  button_entr_ans_exp = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_entr_ans_exp',
    text: 'Ответить',
    font: 'Arial',
    pos: [0, (- 0.1)],
    size: [0.8, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  button_entr_ans_exp.clock = new util.Clock();
  
  // Initialize components for Routine "exp_4"
  exp_4Clock = new util.Clock();
  aha_quest_exp = new visual.TextStim({
    win: psychoJS.window,
    name: 'aha_quest_exp',
    text: 'В момент нахождения ответа было ли у Вас “Ага-переживание”?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.07,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  aha_quest_exp_yes = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'aha_quest_exp_yes',
    text: 'Да',
    font: 'Arial',
    pos: [(- 0.3), 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  aha_quest_exp_yes.clock = new util.Clock();
  
  aha_quest_exp_no = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'aha_quest_exp_no',
    text: 'Нет',
    font: 'Arial',
    pos: [0.3, 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  aha_quest_exp_no.clock = new util.Clock();
  
  // Initialize components for Routine "exp_5"
  exp_5Clock = new util.Clock();
  conf_quest_exp = new visual.TextStim({
    win: psychoJS.window,
    name: 'conf_quest_exp',
    text: 'Уверены ли Вы в правильности своего ответа?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.07,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  conf_quest_exp_yes = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'conf_quest_exp_yes',
    text: 'Да',
    font: 'Arial',
    pos: [(- 0.3), 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  conf_quest_exp_yes.clock = new util.Clock();
  
  conf_quest_exp_no = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'conf_quest_exp_no',
    text: 'Нет',
    font: 'Arial',
    pos: [0.3, 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  conf_quest_exp_no.clock = new util.Clock();
  
  // Initialize components for Routine "exp_6"
  exp_6Clock = new util.Clock();
  sen_txt_exp = new visual.TextStim({
    win: psychoJS.window,
    name: 'sen_txt_exp',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  right_ans_txt_exp = new visual.TextStim({
    win: psychoJS.window,
    name: 'right_ans_txt_exp',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  right_ans_quest_exp = new visual.TextStim({
    win: psychoJS.window,
    name: 'right_ans_quest_exp',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.06,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  right_ans_quest_exp_yes = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'right_ans_quest_exp_yes',
    text: 'Да',
    font: 'Arial',
    pos: [(- 0.3), (- 0.15)],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  right_ans_quest_exp_yes.clock = new util.Clock();
  
  right_ans_quest_exp_no = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'right_ans_quest_exp_no',
    text: 'Нет',
    font: 'Arial',
    pos: [0.3, (- 0.15)],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  right_ans_quest_exp_no.clock = new util.Clock();
  
  // Initialize components for Routine "exp_7"
  exp_7Clock = new util.Clock();
  ind_aha_quest_exp = new visual.TextStim({
    win: psychoJS.window,
    name: 'ind_aha_quest_exp',
    text: 'Было ли у Вас “Ага-переживание” при знакомстве с ответом?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.07,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  ind_aha_quest_exp_yes = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ind_aha_quest_exp_yes',
    text: 'Да',
    font: 'Arial',
    pos: [(- 0.3), 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  ind_aha_quest_exp_yes.clock = new util.Clock();
  
  ind_aha_quest_exp_no = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ind_aha_quest_exp_no',
    text: 'Нет',
    font: 'Arial',
    pos: [0.3, 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  ind_aha_quest_exp_no.clock = new util.Clock();
  
  ind_aha_quest_exp_dont_und = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ind_aha_quest_exp_dont_und',
    text: 'Не понял ответ',
    font: 'Arial',
    pos: [0, (- 0.15)],
    size: [0.55, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  ind_aha_quest_exp_dont_und.clock = new util.Clock();
  
  // Initialize components for Routine "routine_4"
  routine_4Clock = new util.Clock();
  like_quest = new visual.TextStim({
    win: psychoJS.window,
    name: 'like_quest',
    text: 'Понравилось ли Вам предложение?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.07,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  like_quest_yes = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'like_quest_yes',
    text: 'Да',
    font: 'Arial',
    pos: [(- 0.3), 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  like_quest_yes.clock = new util.Clock();
  
  like_quest_no = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'like_quest_no',
    text: 'Нет',
    font: 'Arial',
    pos: [0.3, 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  like_quest_no.clock = new util.Clock();
  
  // Initialize components for Routine "exp_8"
  exp_8Clock = new util.Clock();
  sen_txt_wout_ans_exp = new visual.TextStim({
    win: psychoJS.window,
    name: 'sen_txt_wout_ans_exp',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  right_ans_wout_ans_txt_exp = new visual.TextStim({
    win: psychoJS.window,
    name: 'right_ans_wout_ans_txt_exp',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  right_ans_quest_wout_ans_exp = new visual.TextStim({
    win: psychoJS.window,
    name: 'right_ans_quest_wout_ans_exp',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.06,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  right_ans_quest_wout_ans_exp_yes = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'right_ans_quest_wout_ans_exp_yes',
    text: 'Да',
    font: 'Arial',
    pos: [(- 0.3), (- 0.15)],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  right_ans_quest_wout_ans_exp_yes.clock = new util.Clock();
  
  right_ans_quest_wout_ans_exp_no = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'right_ans_quest_wout_ans_exp_no',
    text: 'Нет',
    font: 'Arial',
    pos: [0.3, (- 0.15)],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  right_ans_quest_wout_ans_exp_no.clock = new util.Clock();
  
  right_ans_quest_wout_ans_exp_dont_und = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'right_ans_quest_wout_ans_exp_dont_und',
    text: 'Не понял ответ',
    font: 'Arial',
    pos: [0, (- 0.3)],
    size: [0.55, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -6,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  right_ans_quest_wout_ans_exp_dont_und.clock = new util.Clock();
  
  // Initialize components for Routine "routine_5"
  routine_5Clock = new util.Clock();
  like_quest_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'like_quest_2',
    text: 'Понравилось ли Вам предложение?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.07,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  like_quest_wout_ans_yes = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'like_quest_wout_ans_yes',
    text: 'Да',
    font: 'Arial',
    pos: [(- 0.3), 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  like_quest_wout_ans_yes.clock = new util.Clock();
  
  like_quest_wout_ans_no = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'like_quest_wout_ans_no',
    text: 'Нет',
    font: 'Arial',
    pos: [0.3, 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  like_quest_wout_ans_no.clock = new util.Clock();
  
  // Initialize components for Routine "end_exp"
  end_expClock = new util.Clock();
  text_end_exp = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end_exp',
    text: 'Основной блок завершен\n\nОсталось ответить на 5 вопросов',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('Black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "p_exp_int_1"
  p_exp_int_1Clock = new util.Clock();
  entr_ans_txt_intr_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'entr_ans_txt_intr_1',
    text: 'Опишите, что Вы делали, чтобы найти ответ на задачу.\nВозникла ли у Вас какая-то стратегия, если да то какая?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.06,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  entr_ans_intr_1 = new visual.TextBox({
    win: psychoJS.window,
    name: 'entr_ans_intr_1',
    text: '',
    placeholder: 'Пишите здесь...',
    font: 'Arial',
    pos: [0, (- 0.1)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.3, 0.4],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  button_entr_ans_intr_1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_entr_ans_intr_1',
    text: 'Ответить',
    font: 'Arial',
    pos: [0, (- 0.4)],
    size: [0.8, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  button_entr_ans_intr_1.clock = new util.Clock();
  
  // Initialize components for Routine "p_exp_int_2"
  p_exp_int_2Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_37
  nTr61 = 0;
  
  entr_ans_txt_intr_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'entr_ans_txt_intr_2',
    text: 'Возникали ли у Вас “Ага-переживания” по ходу исследования?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.06,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  aha_quest_intr_yes = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'aha_quest_intr_yes',
    text: 'Да',
    font: 'Arial',
    pos: [(- 0.3), 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  aha_quest_intr_yes.clock = new util.Clock();
  
  aha_quest_intr_no = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'aha_quest_intr_no',
    text: 'Нет',
    font: 'Arial',
    pos: [0.3, 0],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  aha_quest_intr_no.clock = new util.Clock();
  
  // Initialize components for Routine "p_exp_int_3"
  p_exp_int_3Clock = new util.Clock();
  entr_ans_txt_intr_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'entr_ans_txt_intr_3',
    text: 'Опишите на какие критерии Вы опирались, когда сообщали, что у Вас было “Ага-переживание”',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.06,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  entr_ans_txt_intr_3_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'entr_ans_txt_intr_3_1',
    text: 'При самостоятельном решении',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  entr_ans_intr_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'entr_ans_intr_3',
    text: '',
    placeholder: 'Пишите здесь...',
    font: 'Arial',
    pos: [0, (- 0.15)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.3, 0.35],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  button_entr_ans_intr_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_entr_ans_intr_3',
    text: 'Ответить',
    font: 'Arial',
    pos: [0, (- 0.4)],
    size: [0.8, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  button_entr_ans_intr_3.clock = new util.Clock();
  
  // Initialize components for Routine "p_exp_int_4"
  p_exp_int_4Clock = new util.Clock();
  entr_ans_txt_intr_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'entr_ans_txt_intr_4',
    text: 'Опишите на какие критерии Вы опирались, когда сообщали, что у Вас было “Ага-переживание”',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.06,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  entr_ans_txt_intr_4_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'entr_ans_txt_intr_4_1',
    text: 'При знакомстве с правильным ответом',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  entr_ans_intr_4 = new visual.TextBox({
    win: psychoJS.window,
    name: 'entr_ans_intr_4',
    text: '',
    placeholder: 'Пишите здесь...',
    font: 'Arial',
    pos: [0, (- 0.15)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.3, 0.35],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  button_entr_ans_intr_4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_entr_ans_intr_4',
    text: 'Ответить',
    font: 'Arial',
    pos: [0, (- 0.4)],
    size: [0.8, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  button_entr_ans_intr_4.clock = new util.Clock();
  
  // Initialize components for Routine "p_exp_int_5"
  p_exp_int_5Clock = new util.Clock();
  entr_ans_txt_intr_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'entr_ans_txt_intr_5',
    text: 'Оцените насколько сложно было решать задачи в основном блоке',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.06,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    startValue: undefined,
    size: [1.0, 0.05], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: undefined, fontSize: 0.05, ticks: [1, 5],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('red'), markerColor: new util.Color('Red'), lineColor: new util.Color('LightGray'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  text_easy = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_easy',
    text: 'Очень просто',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), (- 0.05)], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_hard = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_hard',
    text: 'Очень сложно',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, (- 0.05)], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  button_entr_ans_intr_5 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_entr_ans_intr_5',
    text: 'Ответить',
    font: 'Arial',
    pos: [0, (- 0.3)],
    size: [0.8, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  button_entr_ans_intr_5.clock = new util.Clock();
  
  // Initialize components for Routine "p_exp_int_6"
  p_exp_int_6Clock = new util.Clock();
  entr_ans_txt_intr_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'entr_ans_txt_intr_6',
    text: 'Возникали ли у Вас какие-либо трудности во время решения задач? \nЕсли да, то какие?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.06,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  entr_ans_intr_6 = new visual.TextBox({
    win: psychoJS.window,
    name: 'entr_ans_intr_6',
    text: '',
    placeholder: 'Пишите здесь...',
    font: 'Arial',
    pos: [0, (- 0.1)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.3, 0.4],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  button_entr_ans_intr_6 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_entr_ans_intr_6',
    text: 'Ответить',
    font: 'Arial',
    pos: [0, (- 0.4)],
    size: [0.8, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  button_entr_ans_intr_6.clock = new util.Clock();
  
  // Initialize components for Routine "p_exp_int_7"
  p_exp_int_7Clock = new util.Clock();
  entr_ans_txt_intr_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'entr_ans_txt_intr_7',
    text: 'Свободное поле для ввода предложений / пожеланий',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.06,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  entr_ans_intr_7 = new visual.TextBox({
    win: psychoJS.window,
    name: 'entr_ans_intr_7',
    text: '',
    placeholder: 'Пишите здесь...',
    font: 'Arial',
    pos: [0, (- 0.1)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.3, 0.4],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  button_entr_ans_intr_7 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_entr_ans_intr_7',
    text: 'Ответить',
    font: 'Arial',
    pos: [0, (- 0.4)],
    size: [0.8, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'lightgray',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  button_entr_ans_intr_7.clock = new util.Clock();
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  text_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end',
    text: 'Спасибо за участие!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('Black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "data_save"
  data_saveClock = new util.Clock();
  text_data_save = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_data_save',
    text: 'Подождите, идет запись данных эксперимента',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var trials_1;
function trials_1LoopBegin(trials_1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 99, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_1'
    });
    psychoJS.experiment.addLoop(trials_1); // add the loop to the experiment
    currentLoop = trials_1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_1 of trials_1) {
      snapshot = trials_1.getSnapshot();
      trials_1LoopScheduler.add(importConditions(snapshot));
      const trials_2LoopScheduler = new Scheduler(psychoJS);
      trials_1LoopScheduler.add(trials_2LoopBegin(trials_2LoopScheduler, snapshot));
      trials_1LoopScheduler.add(trials_2LoopScheduler);
      trials_1LoopScheduler.add(trials_2LoopEnd);
      const trials_3LoopScheduler = new Scheduler(psychoJS);
      trials_1LoopScheduler.add(trials_3LoopBegin(trials_3LoopScheduler, snapshot));
      trials_1LoopScheduler.add(trials_3LoopScheduler);
      trials_1LoopScheduler.add(trials_3LoopEnd);
      const trials_35LoopScheduler = new Scheduler(psychoJS);
      trials_1LoopScheduler.add(trials_35LoopBegin(trials_35LoopScheduler, snapshot));
      trials_1LoopScheduler.add(trials_35LoopScheduler);
      trials_1LoopScheduler.add(trials_35LoopEnd);
      const trials_4LoopScheduler = new Scheduler(psychoJS);
      trials_1LoopScheduler.add(trials_4LoopBegin(trials_4LoopScheduler, snapshot));
      trials_1LoopScheduler.add(trials_4LoopScheduler);
      trials_1LoopScheduler.add(trials_4LoopEnd);
      const trials_5LoopScheduler = new Scheduler(psychoJS);
      trials_1LoopScheduler.add(trials_5LoopBegin(trials_5LoopScheduler, snapshot));
      trials_1LoopScheduler.add(trials_5LoopScheduler);
      trials_1LoopScheduler.add(trials_5LoopEnd);
      const trials_6LoopScheduler = new Scheduler(psychoJS);
      trials_1LoopScheduler.add(trials_6LoopBegin(trials_6LoopScheduler, snapshot));
      trials_1LoopScheduler.add(trials_6LoopScheduler);
      trials_1LoopScheduler.add(trials_6LoopEnd);
      const trials_7LoopScheduler = new Scheduler(psychoJS);
      trials_1LoopScheduler.add(trials_7LoopBegin(trials_7LoopScheduler, snapshot));
      trials_1LoopScheduler.add(trials_7LoopScheduler);
      trials_1LoopScheduler.add(trials_7LoopEnd);
      trials_1LoopScheduler.add(trials_1LoopEndIteration(trials_1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(instr_tr_1RoutineBegin(snapshot));
      trials_2LoopScheduler.add(instr_tr_1RoutineEachFrame());
      trials_2LoopScheduler.add(instr_tr_1RoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_3 of trials_3) {
      snapshot = trials_3.getSnapshot();
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(instr_tr_2RoutineBegin(snapshot));
      trials_3LoopScheduler.add(instr_tr_2RoutineEachFrame());
      trials_3LoopScheduler.add(instr_tr_2RoutineEnd(snapshot));
      trials_3LoopScheduler.add(trials_3LoopEndIteration(trials_3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_35;
function trials_35LoopBegin(trials_35LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_35 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_35'
    });
    psychoJS.experiment.addLoop(trials_35); // add the loop to the experiment
    currentLoop = trials_35;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_35 of trials_35) {
      snapshot = trials_35.getSnapshot();
      trials_35LoopScheduler.add(importConditions(snapshot));
      trials_35LoopScheduler.add(inst_tr7RoutineBegin(snapshot));
      trials_35LoopScheduler.add(inst_tr7RoutineEachFrame());
      trials_35LoopScheduler.add(inst_tr7RoutineEnd(snapshot));
      trials_35LoopScheduler.add(trials_35LoopEndIteration(trials_35LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_35LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_35);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_35LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_4;
function trials_4LoopBegin(trials_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr4, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_4'
    });
    psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
    currentLoop = trials_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_4 of trials_4) {
      snapshot = trials_4.getSnapshot();
      trials_4LoopScheduler.add(importConditions(snapshot));
      trials_4LoopScheduler.add(instr_tr_3RoutineBegin(snapshot));
      trials_4LoopScheduler.add(instr_tr_3RoutineEachFrame());
      trials_4LoopScheduler.add(instr_tr_3RoutineEnd(snapshot));
      trials_4LoopScheduler.add(trials_4LoopEndIteration(trials_4LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_4LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_4);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_4LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_5;
function trials_5LoopBegin(trials_5LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_5 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_5'
    });
    psychoJS.experiment.addLoop(trials_5); // add the loop to the experiment
    currentLoop = trials_5;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_5 of trials_5) {
      snapshot = trials_5.getSnapshot();
      trials_5LoopScheduler.add(importConditions(snapshot));
      trials_5LoopScheduler.add(instr_tr_4RoutineBegin(snapshot));
      trials_5LoopScheduler.add(instr_tr_4RoutineEachFrame());
      trials_5LoopScheduler.add(instr_tr_4RoutineEnd(snapshot));
      trials_5LoopScheduler.add(trials_5LoopEndIteration(trials_5LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_5LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_5);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_5LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_6;
function trials_6LoopBegin(trials_6LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_6 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr6, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_6'
    });
    psychoJS.experiment.addLoop(trials_6); // add the loop to the experiment
    currentLoop = trials_6;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_6 of trials_6) {
      snapshot = trials_6.getSnapshot();
      trials_6LoopScheduler.add(importConditions(snapshot));
      trials_6LoopScheduler.add(instr_tr_5RoutineBegin(snapshot));
      trials_6LoopScheduler.add(instr_tr_5RoutineEachFrame());
      trials_6LoopScheduler.add(instr_tr_5RoutineEnd(snapshot));
      trials_6LoopScheduler.add(trials_6LoopEndIteration(trials_6LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_6LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_6);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_6LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_7;
function trials_7LoopBegin(trials_7LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_7 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr7, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_7'
    });
    psychoJS.experiment.addLoop(trials_7); // add the loop to the experiment
    currentLoop = trials_7;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_7 of trials_7) {
      snapshot = trials_7.getSnapshot();
      trials_7LoopScheduler.add(importConditions(snapshot));
      trials_7LoopScheduler.add(instr_tr_6RoutineBegin(snapshot));
      trials_7LoopScheduler.add(instr_tr_6RoutineEachFrame());
      trials_7LoopScheduler.add(instr_tr_6RoutineEnd(snapshot));
      trials_7LoopScheduler.add(trials_7LoopEndIteration(trials_7LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_7LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_7);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_7LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trials_1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stim_tr.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(tr_1RoutineBegin(snapshot));
      trialsLoopScheduler.add(tr_1RoutineEachFrame());
      trialsLoopScheduler.add(tr_1RoutineEnd(snapshot));
      trialsLoopScheduler.add(tr_2RoutineBegin(snapshot));
      trialsLoopScheduler.add(tr_2RoutineEachFrame());
      trialsLoopScheduler.add(tr_2RoutineEnd(snapshot));
      const trials_37LoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trials_37LoopBegin(trials_37LoopScheduler, snapshot));
      trialsLoopScheduler.add(trials_37LoopScheduler);
      trialsLoopScheduler.add(trials_37LoopEnd);
      const trials_8LoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trials_8LoopBegin(trials_8LoopScheduler, snapshot));
      trialsLoopScheduler.add(trials_8LoopScheduler);
      trialsLoopScheduler.add(trials_8LoopEnd);
      const trials_10LoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trials_10LoopBegin(trials_10LoopScheduler, snapshot));
      trialsLoopScheduler.add(trials_10LoopScheduler);
      trialsLoopScheduler.add(trials_10LoopEnd);
      const trials_12LoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trials_12LoopBegin(trials_12LoopScheduler, snapshot));
      trialsLoopScheduler.add(trials_12LoopScheduler);
      trialsLoopScheduler.add(trials_12LoopEnd);
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_37;
function trials_37LoopBegin(trials_37LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_37 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr18, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_37'
    });
    psychoJS.experiment.addLoop(trials_37); // add the loop to the experiment
    currentLoop = trials_37;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_37 of trials_37) {
      snapshot = trials_37.getSnapshot();
      trials_37LoopScheduler.add(importConditions(snapshot));
      trials_37LoopScheduler.add(tr_9RoutineBegin(snapshot));
      trials_37LoopScheduler.add(tr_9RoutineEachFrame());
      trials_37LoopScheduler.add(tr_9RoutineEnd(snapshot));
      const trials_38LoopScheduler = new Scheduler(psychoJS);
      trials_37LoopScheduler.add(trials_38LoopBegin(trials_38LoopScheduler, snapshot));
      trials_37LoopScheduler.add(trials_38LoopScheduler);
      trials_37LoopScheduler.add(trials_38LoopEnd);
      trials_37LoopScheduler.add(trials_37LoopEndIteration(trials_37LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_38;
function trials_38LoopBegin(trials_38LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_38 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr19, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_38'
    });
    psychoJS.experiment.addLoop(trials_38); // add the loop to the experiment
    currentLoop = trials_38;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_38 of trials_38) {
      snapshot = trials_38.getSnapshot();
      trials_38LoopScheduler.add(importConditions(snapshot));
      trials_38LoopScheduler.add(tr_10RoutineBegin(snapshot));
      trials_38LoopScheduler.add(tr_10RoutineEachFrame());
      trials_38LoopScheduler.add(tr_10RoutineEnd(snapshot));
      trials_38LoopScheduler.add(trials_38LoopEndIteration(trials_38LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_38LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_38);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_38LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trials_37LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_37);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_37LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_8;
function trials_8LoopBegin(trials_8LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_8 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr11, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_8'
    });
    psychoJS.experiment.addLoop(trials_8); // add the loop to the experiment
    currentLoop = trials_8;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_8 of trials_8) {
      snapshot = trials_8.getSnapshot();
      trials_8LoopScheduler.add(importConditions(snapshot));
      trials_8LoopScheduler.add(tr_3RoutineBegin(snapshot));
      trials_8LoopScheduler.add(tr_3RoutineEachFrame());
      trials_8LoopScheduler.add(tr_3RoutineEnd(snapshot));
      trials_8LoopScheduler.add(tr_4RoutineBegin(snapshot));
      trials_8LoopScheduler.add(tr_4RoutineEachFrame());
      trials_8LoopScheduler.add(tr_4RoutineEnd(snapshot));
      trials_8LoopScheduler.add(tr_5RoutineBegin(snapshot));
      trials_8LoopScheduler.add(tr_5RoutineEachFrame());
      trials_8LoopScheduler.add(tr_5RoutineEnd(snapshot));
      trials_8LoopScheduler.add(trials_8LoopEndIteration(trials_8LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_8LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_8);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_8LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_10;
function trials_10LoopBegin(trials_10LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_10 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr13, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_10'
    });
    psychoJS.experiment.addLoop(trials_10); // add the loop to the experiment
    currentLoop = trials_10;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_10 of trials_10) {
      snapshot = trials_10.getSnapshot();
      trials_10LoopScheduler.add(importConditions(snapshot));
      trials_10LoopScheduler.add(tr_6RoutineBegin(snapshot));
      trials_10LoopScheduler.add(tr_6RoutineEachFrame());
      trials_10LoopScheduler.add(tr_6RoutineEnd(snapshot));
      const trials_11LoopScheduler = new Scheduler(psychoJS);
      trials_10LoopScheduler.add(trials_11LoopBegin(trials_11LoopScheduler, snapshot));
      trials_10LoopScheduler.add(trials_11LoopScheduler);
      trials_10LoopScheduler.add(trials_11LoopEnd);
      const trials_9LoopScheduler = new Scheduler(psychoJS);
      trials_10LoopScheduler.add(trials_9LoopBegin(trials_9LoopScheduler, snapshot));
      trials_10LoopScheduler.add(trials_9LoopScheduler);
      trials_10LoopScheduler.add(trials_9LoopEnd);
      trials_10LoopScheduler.add(trials_10LoopEndIteration(trials_10LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_11;
function trials_11LoopBegin(trials_11LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_11 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr14, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_11'
    });
    psychoJS.experiment.addLoop(trials_11); // add the loop to the experiment
    currentLoop = trials_11;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_11 of trials_11) {
      snapshot = trials_11.getSnapshot();
      trials_11LoopScheduler.add(importConditions(snapshot));
      trials_11LoopScheduler.add(tr_7RoutineBegin(snapshot));
      trials_11LoopScheduler.add(tr_7RoutineEachFrame());
      trials_11LoopScheduler.add(tr_7RoutineEnd(snapshot));
      trials_11LoopScheduler.add(trials_11LoopEndIteration(trials_11LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_11LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_11);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_11LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_9;
function trials_9LoopBegin(trials_9LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_9 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr16, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_9'
    });
    psychoJS.experiment.addLoop(trials_9); // add the loop to the experiment
    currentLoop = trials_9;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_9 of trials_9) {
      snapshot = trials_9.getSnapshot();
      trials_9LoopScheduler.add(importConditions(snapshot));
      trials_9LoopScheduler.add(routine_1RoutineBegin(snapshot));
      trials_9LoopScheduler.add(routine_1RoutineEachFrame());
      trials_9LoopScheduler.add(routine_1RoutineEnd(snapshot));
      trials_9LoopScheduler.add(trials_9LoopEndIteration(trials_9LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_9LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_9);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_9LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trials_10LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_10);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_10LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_12;
function trials_12LoopBegin(trials_12LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_12 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr15, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_12'
    });
    psychoJS.experiment.addLoop(trials_12); // add the loop to the experiment
    currentLoop = trials_12;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_12 of trials_12) {
      snapshot = trials_12.getSnapshot();
      trials_12LoopScheduler.add(importConditions(snapshot));
      trials_12LoopScheduler.add(tr_8RoutineBegin(snapshot));
      trials_12LoopScheduler.add(tr_8RoutineEachFrame());
      trials_12LoopScheduler.add(tr_8RoutineEnd(snapshot));
      const trials_39LoopScheduler = new Scheduler(psychoJS);
      trials_12LoopScheduler.add(trials_39LoopBegin(trials_39LoopScheduler, snapshot));
      trials_12LoopScheduler.add(trials_39LoopScheduler);
      trials_12LoopScheduler.add(trials_39LoopEnd);
      trials_12LoopScheduler.add(trials_12LoopEndIteration(trials_12LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_39;
function trials_39LoopBegin(trials_39LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_39 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr17, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_39'
    });
    psychoJS.experiment.addLoop(trials_39); // add the loop to the experiment
    currentLoop = trials_39;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_39 of trials_39) {
      snapshot = trials_39.getSnapshot();
      trials_39LoopScheduler.add(importConditions(snapshot));
      trials_39LoopScheduler.add(routineRoutineBegin(snapshot));
      trials_39LoopScheduler.add(routineRoutineEachFrame());
      trials_39LoopScheduler.add(routineRoutineEnd(snapshot));
      trials_39LoopScheduler.add(trials_39LoopEndIteration(trials_39LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_39LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_39);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_39LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trials_12LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_12);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_12LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_14;
function trials_14LoopBegin(trials_14LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_14 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr20, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_14'
    });
    psychoJS.experiment.addLoop(trials_14); // add the loop to the experiment
    currentLoop = trials_14;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_14 of trials_14) {
      snapshot = trials_14.getSnapshot();
      trials_14LoopScheduler.add(importConditions(snapshot));
      const trials_15LoopScheduler = new Scheduler(psychoJS);
      trials_14LoopScheduler.add(trials_15LoopBegin(trials_15LoopScheduler, snapshot));
      trials_14LoopScheduler.add(trials_15LoopScheduler);
      trials_14LoopScheduler.add(trials_15LoopEnd);
      const trials_16LoopScheduler = new Scheduler(psychoJS);
      trials_14LoopScheduler.add(trials_16LoopBegin(trials_16LoopScheduler, snapshot));
      trials_14LoopScheduler.add(trials_16LoopScheduler);
      trials_14LoopScheduler.add(trials_16LoopEnd);
      const trials_36LoopScheduler = new Scheduler(psychoJS);
      trials_14LoopScheduler.add(trials_36LoopBegin(trials_36LoopScheduler, snapshot));
      trials_14LoopScheduler.add(trials_36LoopScheduler);
      trials_14LoopScheduler.add(trials_36LoopEnd);
      const trials_17LoopScheduler = new Scheduler(psychoJS);
      trials_14LoopScheduler.add(trials_17LoopBegin(trials_17LoopScheduler, snapshot));
      trials_14LoopScheduler.add(trials_17LoopScheduler);
      trials_14LoopScheduler.add(trials_17LoopEnd);
      const trials_18LoopScheduler = new Scheduler(psychoJS);
      trials_14LoopScheduler.add(trials_18LoopBegin(trials_18LoopScheduler, snapshot));
      trials_14LoopScheduler.add(trials_18LoopScheduler);
      trials_14LoopScheduler.add(trials_18LoopEnd);
      const trials_19LoopScheduler = new Scheduler(psychoJS);
      trials_14LoopScheduler.add(trials_19LoopBegin(trials_19LoopScheduler, snapshot));
      trials_14LoopScheduler.add(trials_19LoopScheduler);
      trials_14LoopScheduler.add(trials_19LoopEnd);
      trials_14LoopScheduler.add(trials_14LoopEndIteration(trials_14LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_15;
function trials_15LoopBegin(trials_15LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_15 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr21, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_15'
    });
    psychoJS.experiment.addLoop(trials_15); // add the loop to the experiment
    currentLoop = trials_15;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_15 of trials_15) {
      snapshot = trials_15.getSnapshot();
      trials_15LoopScheduler.add(importConditions(snapshot));
      trials_15LoopScheduler.add(inst_rep_1RoutineBegin(snapshot));
      trials_15LoopScheduler.add(inst_rep_1RoutineEachFrame());
      trials_15LoopScheduler.add(inst_rep_1RoutineEnd(snapshot));
      trials_15LoopScheduler.add(trials_15LoopEndIteration(trials_15LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_15LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_15);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_15LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_16;
function trials_16LoopBegin(trials_16LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_16 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr22, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_16'
    });
    psychoJS.experiment.addLoop(trials_16); // add the loop to the experiment
    currentLoop = trials_16;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_16 of trials_16) {
      snapshot = trials_16.getSnapshot();
      trials_16LoopScheduler.add(importConditions(snapshot));
      trials_16LoopScheduler.add(inst_rep_2RoutineBegin(snapshot));
      trials_16LoopScheduler.add(inst_rep_2RoutineEachFrame());
      trials_16LoopScheduler.add(inst_rep_2RoutineEnd(snapshot));
      trials_16LoopScheduler.add(trials_16LoopEndIteration(trials_16LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_16LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_16);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_16LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_36;
function trials_36LoopBegin(trials_36LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_36 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr23, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_36'
    });
    psychoJS.experiment.addLoop(trials_36); // add the loop to the experiment
    currentLoop = trials_36;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_36 of trials_36) {
      snapshot = trials_36.getSnapshot();
      trials_36LoopScheduler.add(importConditions(snapshot));
      trials_36LoopScheduler.add(instr_rep_6RoutineBegin(snapshot));
      trials_36LoopScheduler.add(instr_rep_6RoutineEachFrame());
      trials_36LoopScheduler.add(instr_rep_6RoutineEnd(snapshot));
      trials_36LoopScheduler.add(trials_36LoopEndIteration(trials_36LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_36LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_36);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_36LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_17;
function trials_17LoopBegin(trials_17LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_17 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr24, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_17'
    });
    psychoJS.experiment.addLoop(trials_17); // add the loop to the experiment
    currentLoop = trials_17;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_17 of trials_17) {
      snapshot = trials_17.getSnapshot();
      trials_17LoopScheduler.add(importConditions(snapshot));
      trials_17LoopScheduler.add(inst_rep_3RoutineBegin(snapshot));
      trials_17LoopScheduler.add(inst_rep_3RoutineEachFrame());
      trials_17LoopScheduler.add(inst_rep_3RoutineEnd(snapshot));
      trials_17LoopScheduler.add(trials_17LoopEndIteration(trials_17LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_17LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_17);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_17LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_18;
function trials_18LoopBegin(trials_18LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_18 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr25, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_18'
    });
    psychoJS.experiment.addLoop(trials_18); // add the loop to the experiment
    currentLoop = trials_18;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_18 of trials_18) {
      snapshot = trials_18.getSnapshot();
      trials_18LoopScheduler.add(importConditions(snapshot));
      trials_18LoopScheduler.add(inst_rep_4RoutineBegin(snapshot));
      trials_18LoopScheduler.add(inst_rep_4RoutineEachFrame());
      trials_18LoopScheduler.add(inst_rep_4RoutineEnd(snapshot));
      trials_18LoopScheduler.add(trials_18LoopEndIteration(trials_18LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_18LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_18);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_18LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_19;
function trials_19LoopBegin(trials_19LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_19 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr26, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_19'
    });
    psychoJS.experiment.addLoop(trials_19); // add the loop to the experiment
    currentLoop = trials_19;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_19 of trials_19) {
      snapshot = trials_19.getSnapshot();
      trials_19LoopScheduler.add(importConditions(snapshot));
      trials_19LoopScheduler.add(inst_rep_5RoutineBegin(snapshot));
      trials_19LoopScheduler.add(inst_rep_5RoutineEachFrame());
      trials_19LoopScheduler.add(inst_rep_5RoutineEnd(snapshot));
      trials_19LoopScheduler.add(trials_19LoopEndIteration(trials_19LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_19LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_19);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_19LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trials_14LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_14);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_14LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_20;
function trials_20LoopBegin(trials_20LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_20 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr30, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_20'
    });
    psychoJS.experiment.addLoop(trials_20); // add the loop to the experiment
    currentLoop = trials_20;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_20 of trials_20) {
      snapshot = trials_20.getSnapshot();
      trials_20LoopScheduler.add(importConditions(snapshot));
      const trials_21LoopScheduler = new Scheduler(psychoJS);
      trials_20LoopScheduler.add(trials_21LoopBegin(trials_21LoopScheduler, snapshot));
      trials_20LoopScheduler.add(trials_21LoopScheduler);
      trials_20LoopScheduler.add(trials_21LoopEnd);
      const trials_22LoopScheduler = new Scheduler(psychoJS);
      trials_20LoopScheduler.add(trials_22LoopBegin(trials_22LoopScheduler, snapshot));
      trials_20LoopScheduler.add(trials_22LoopScheduler);
      trials_20LoopScheduler.add(trials_22LoopEnd);
      const trials_23LoopScheduler = new Scheduler(psychoJS);
      trials_20LoopScheduler.add(trials_23LoopBegin(trials_23LoopScheduler, snapshot));
      trials_20LoopScheduler.add(trials_23LoopScheduler);
      trials_20LoopScheduler.add(trials_23LoopEnd);
      trials_20LoopScheduler.add(trials_20LoopEndIteration(trials_20LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_21;
function trials_21LoopBegin(trials_21LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_21 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr31, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_21'
    });
    psychoJS.experiment.addLoop(trials_21); // add the loop to the experiment
    currentLoop = trials_21;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_21 of trials_21) {
      snapshot = trials_21.getSnapshot();
      trials_21LoopScheduler.add(importConditions(snapshot));
      trials_21LoopScheduler.add(aha_rep_1RoutineBegin(snapshot));
      trials_21LoopScheduler.add(aha_rep_1RoutineEachFrame());
      trials_21LoopScheduler.add(aha_rep_1RoutineEnd(snapshot));
      trials_21LoopScheduler.add(trials_21LoopEndIteration(trials_21LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_21LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_21);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_21LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_22;
function trials_22LoopBegin(trials_22LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_22 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr32, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_22'
    });
    psychoJS.experiment.addLoop(trials_22); // add the loop to the experiment
    currentLoop = trials_22;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_22 of trials_22) {
      snapshot = trials_22.getSnapshot();
      trials_22LoopScheduler.add(importConditions(snapshot));
      trials_22LoopScheduler.add(aha_rep_2RoutineBegin(snapshot));
      trials_22LoopScheduler.add(aha_rep_2RoutineEachFrame());
      trials_22LoopScheduler.add(aha_rep_2RoutineEnd(snapshot));
      trials_22LoopScheduler.add(trials_22LoopEndIteration(trials_22LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_22LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_22);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_22LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_23;
function trials_23LoopBegin(trials_23LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_23 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr33, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_23'
    });
    psychoJS.experiment.addLoop(trials_23); // add the loop to the experiment
    currentLoop = trials_23;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_23 of trials_23) {
      snapshot = trials_23.getSnapshot();
      trials_23LoopScheduler.add(importConditions(snapshot));
      trials_23LoopScheduler.add(aha_rep_3RoutineBegin(snapshot));
      trials_23LoopScheduler.add(aha_rep_3RoutineEachFrame());
      trials_23LoopScheduler.add(aha_rep_3RoutineEnd(snapshot));
      trials_23LoopScheduler.add(trials_23LoopEndIteration(trials_23LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_23LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_23);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_23LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trials_20LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_20);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_20LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_24;
function trials_24LoopBegin(trials_24LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_24 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr41, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_24'
    });
    psychoJS.experiment.addLoop(trials_24); // add the loop to the experiment
    currentLoop = trials_24;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_24 of trials_24) {
      snapshot = trials_24.getSnapshot();
      trials_24LoopScheduler.add(importConditions(snapshot));
      trials_24LoopScheduler.add(ans_inst_2RoutineBegin(snapshot));
      trials_24LoopScheduler.add(ans_inst_2RoutineEachFrame());
      trials_24LoopScheduler.add(ans_inst_2RoutineEnd(snapshot));
      trials_24LoopScheduler.add(trials_24LoopEndIteration(trials_24LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_24LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_24);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_24LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_25;
function trials_25LoopBegin(trials_25LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_25 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr42, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_25'
    });
    psychoJS.experiment.addLoop(trials_25); // add the loop to the experiment
    currentLoop = trials_25;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_25 of trials_25) {
      snapshot = trials_25.getSnapshot();
      trials_25LoopScheduler.add(importConditions(snapshot));
      trials_25LoopScheduler.add(ans_aha_2RoutineBegin(snapshot));
      trials_25LoopScheduler.add(ans_aha_2RoutineEachFrame());
      trials_25LoopScheduler.add(ans_aha_2RoutineEnd(snapshot));
      trials_25LoopScheduler.add(trials_25LoopEndIteration(trials_25LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_25LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_25);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_25LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_33;
function trials_33LoopBegin(trials_33LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_33 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr49, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_33'
    });
    psychoJS.experiment.addLoop(trials_33); // add the loop to the experiment
    currentLoop = trials_33;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_33 of trials_33) {
      snapshot = trials_33.getSnapshot();
      trials_33LoopScheduler.add(importConditions(snapshot));
      trials_33LoopScheduler.add(start_expRoutineBegin(snapshot));
      trials_33LoopScheduler.add(start_expRoutineEachFrame());
      trials_33LoopScheduler.add(start_expRoutineEnd(snapshot));
      trials_33LoopScheduler.add(trials_33LoopEndIteration(trials_33LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_33LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_33);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_33LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_26;
function trials_26LoopBegin(trials_26LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_26 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr50, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stim_exp.xlsx',
      seed: undefined, name: 'trials_26'
    });
    psychoJS.experiment.addLoop(trials_26); // add the loop to the experiment
    currentLoop = trials_26;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_26 of trials_26) {
      snapshot = trials_26.getSnapshot();
      trials_26LoopScheduler.add(importConditions(snapshot));
      const trials_32LoopScheduler = new Scheduler(psychoJS);
      trials_26LoopScheduler.add(trials_32LoopBegin(trials_32LoopScheduler, snapshot));
      trials_26LoopScheduler.add(trials_32LoopScheduler);
      trials_26LoopScheduler.add(trials_32LoopEnd);
      trials_26LoopScheduler.add(exp_1RoutineBegin(snapshot));
      trials_26LoopScheduler.add(exp_1RoutineEachFrame());
      trials_26LoopScheduler.add(exp_1RoutineEnd(snapshot));
      trials_26LoopScheduler.add(exp_2RoutineBegin(snapshot));
      trials_26LoopScheduler.add(exp_2RoutineEachFrame());
      trials_26LoopScheduler.add(exp_2RoutineEnd(snapshot));
      const trials_28LoopScheduler = new Scheduler(psychoJS);
      trials_26LoopScheduler.add(trials_28LoopBegin(trials_28LoopScheduler, snapshot));
      trials_26LoopScheduler.add(trials_28LoopScheduler);
      trials_26LoopScheduler.add(trials_28LoopEnd);
      const trials_27LoopScheduler = new Scheduler(psychoJS);
      trials_26LoopScheduler.add(trials_27LoopBegin(trials_27LoopScheduler, snapshot));
      trials_26LoopScheduler.add(trials_27LoopScheduler);
      trials_26LoopScheduler.add(trials_27LoopEnd);
      const trials_29LoopScheduler = new Scheduler(psychoJS);
      trials_26LoopScheduler.add(trials_29LoopBegin(trials_29LoopScheduler, snapshot));
      trials_26LoopScheduler.add(trials_29LoopScheduler);
      trials_26LoopScheduler.add(trials_29LoopEnd);
      const trials_13LoopScheduler = new Scheduler(psychoJS);
      trials_26LoopScheduler.add(trials_13LoopBegin(trials_13LoopScheduler, snapshot));
      trials_26LoopScheduler.add(trials_13LoopScheduler);
      trials_26LoopScheduler.add(trials_13LoopEnd);
      trials_26LoopScheduler.add(trials_26LoopEndIteration(trials_26LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_32;
function trials_32LoopBegin(trials_32LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_32 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr60, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_32'
    });
    psychoJS.experiment.addLoop(trials_32); // add the loop to the experiment
    currentLoop = trials_32;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_32 of trials_32) {
      snapshot = trials_32.getSnapshot();
      trials_32LoopScheduler.add(importConditions(snapshot));
      trials_32LoopScheduler.add(exp_pauseRoutineBegin(snapshot));
      trials_32LoopScheduler.add(exp_pauseRoutineEachFrame());
      trials_32LoopScheduler.add(exp_pauseRoutineEnd(snapshot));
      trials_32LoopScheduler.add(trials_32LoopEndIteration(trials_32LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_32LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_32);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_32LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_28;
function trials_28LoopBegin(trials_28LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_28 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr56, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_28'
    });
    psychoJS.experiment.addLoop(trials_28); // add the loop to the experiment
    currentLoop = trials_28;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_28 of trials_28) {
      snapshot = trials_28.getSnapshot();
      trials_28LoopScheduler.add(importConditions(snapshot));
      trials_28LoopScheduler.add(routine_2RoutineBegin(snapshot));
      trials_28LoopScheduler.add(routine_2RoutineEachFrame());
      trials_28LoopScheduler.add(routine_2RoutineEnd(snapshot));
      const trials_40LoopScheduler = new Scheduler(psychoJS);
      trials_28LoopScheduler.add(trials_40LoopBegin(trials_40LoopScheduler, snapshot));
      trials_28LoopScheduler.add(trials_40LoopScheduler);
      trials_28LoopScheduler.add(trials_40LoopEnd);
      trials_28LoopScheduler.add(trials_28LoopEndIteration(trials_28LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_40;
function trials_40LoopBegin(trials_40LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_40 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr57, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_40'
    });
    psychoJS.experiment.addLoop(trials_40); // add the loop to the experiment
    currentLoop = trials_40;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_40 of trials_40) {
      snapshot = trials_40.getSnapshot();
      trials_40LoopScheduler.add(importConditions(snapshot));
      trials_40LoopScheduler.add(routine_3RoutineBegin(snapshot));
      trials_40LoopScheduler.add(routine_3RoutineEachFrame());
      trials_40LoopScheduler.add(routine_3RoutineEnd(snapshot));
      trials_40LoopScheduler.add(trials_40LoopEndIteration(trials_40LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_40LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_40);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_40LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trials_28LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_28);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_28LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_27;
function trials_27LoopBegin(trials_27LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_27 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr51, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_27'
    });
    psychoJS.experiment.addLoop(trials_27); // add the loop to the experiment
    currentLoop = trials_27;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_27 of trials_27) {
      snapshot = trials_27.getSnapshot();
      trials_27LoopScheduler.add(importConditions(snapshot));
      trials_27LoopScheduler.add(exp_3RoutineBegin(snapshot));
      trials_27LoopScheduler.add(exp_3RoutineEachFrame());
      trials_27LoopScheduler.add(exp_3RoutineEnd(snapshot));
      trials_27LoopScheduler.add(exp_4RoutineBegin(snapshot));
      trials_27LoopScheduler.add(exp_4RoutineEachFrame());
      trials_27LoopScheduler.add(exp_4RoutineEnd(snapshot));
      trials_27LoopScheduler.add(exp_5RoutineBegin(snapshot));
      trials_27LoopScheduler.add(exp_5RoutineEachFrame());
      trials_27LoopScheduler.add(exp_5RoutineEnd(snapshot));
      trials_27LoopScheduler.add(trials_27LoopEndIteration(trials_27LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_27LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_27);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_27LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_29;
function trials_29LoopBegin(trials_29LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_29 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr53, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_29'
    });
    psychoJS.experiment.addLoop(trials_29); // add the loop to the experiment
    currentLoop = trials_29;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_29 of trials_29) {
      snapshot = trials_29.getSnapshot();
      trials_29LoopScheduler.add(importConditions(snapshot));
      trials_29LoopScheduler.add(exp_6RoutineBegin(snapshot));
      trials_29LoopScheduler.add(exp_6RoutineEachFrame());
      trials_29LoopScheduler.add(exp_6RoutineEnd(snapshot));
      const trials_30LoopScheduler = new Scheduler(psychoJS);
      trials_29LoopScheduler.add(trials_30LoopBegin(trials_30LoopScheduler, snapshot));
      trials_29LoopScheduler.add(trials_30LoopScheduler);
      trials_29LoopScheduler.add(trials_30LoopEnd);
      const trials_41LoopScheduler = new Scheduler(psychoJS);
      trials_29LoopScheduler.add(trials_41LoopBegin(trials_41LoopScheduler, snapshot));
      trials_29LoopScheduler.add(trials_41LoopScheduler);
      trials_29LoopScheduler.add(trials_41LoopEnd);
      trials_29LoopScheduler.add(trials_29LoopEndIteration(trials_29LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_30;
function trials_30LoopBegin(trials_30LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_30 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr54, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_30'
    });
    psychoJS.experiment.addLoop(trials_30); // add the loop to the experiment
    currentLoop = trials_30;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_30 of trials_30) {
      snapshot = trials_30.getSnapshot();
      trials_30LoopScheduler.add(importConditions(snapshot));
      trials_30LoopScheduler.add(exp_7RoutineBegin(snapshot));
      trials_30LoopScheduler.add(exp_7RoutineEachFrame());
      trials_30LoopScheduler.add(exp_7RoutineEnd(snapshot));
      trials_30LoopScheduler.add(trials_30LoopEndIteration(trials_30LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_30LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_30);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_30LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_41;
function trials_41LoopBegin(trials_41LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_41 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr58, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_41'
    });
    psychoJS.experiment.addLoop(trials_41); // add the loop to the experiment
    currentLoop = trials_41;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_41 of trials_41) {
      snapshot = trials_41.getSnapshot();
      trials_41LoopScheduler.add(importConditions(snapshot));
      trials_41LoopScheduler.add(routine_4RoutineBegin(snapshot));
      trials_41LoopScheduler.add(routine_4RoutineEachFrame());
      trials_41LoopScheduler.add(routine_4RoutineEnd(snapshot));
      trials_41LoopScheduler.add(trials_41LoopEndIteration(trials_41LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_41LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_41);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_41LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trials_29LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_29);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_29LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_13;
function trials_13LoopBegin(trials_13LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_13 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr55, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_13'
    });
    psychoJS.experiment.addLoop(trials_13); // add the loop to the experiment
    currentLoop = trials_13;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_13 of trials_13) {
      snapshot = trials_13.getSnapshot();
      trials_13LoopScheduler.add(importConditions(snapshot));
      trials_13LoopScheduler.add(exp_8RoutineBegin(snapshot));
      trials_13LoopScheduler.add(exp_8RoutineEachFrame());
      trials_13LoopScheduler.add(exp_8RoutineEnd(snapshot));
      const trials_42LoopScheduler = new Scheduler(psychoJS);
      trials_13LoopScheduler.add(trials_42LoopBegin(trials_42LoopScheduler, snapshot));
      trials_13LoopScheduler.add(trials_42LoopScheduler);
      trials_13LoopScheduler.add(trials_42LoopEnd);
      trials_13LoopScheduler.add(trials_13LoopEndIteration(trials_13LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_42;
function trials_42LoopBegin(trials_42LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_42 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr59, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_42'
    });
    psychoJS.experiment.addLoop(trials_42); // add the loop to the experiment
    currentLoop = trials_42;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_42 of trials_42) {
      snapshot = trials_42.getSnapshot();
      trials_42LoopScheduler.add(importConditions(snapshot));
      trials_42LoopScheduler.add(routine_5RoutineBegin(snapshot));
      trials_42LoopScheduler.add(routine_5RoutineEachFrame());
      trials_42LoopScheduler.add(routine_5RoutineEnd(snapshot));
      trials_42LoopScheduler.add(trials_42LoopEndIteration(trials_42LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_42LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_42);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_42LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trials_13LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_13);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_13LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trials_26LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_26);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_26LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_34;
function trials_34LoopBegin(trials_34LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_34 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr48, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_34'
    });
    psychoJS.experiment.addLoop(trials_34); // add the loop to the experiment
    currentLoop = trials_34;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_34 of trials_34) {
      snapshot = trials_34.getSnapshot();
      trials_34LoopScheduler.add(importConditions(snapshot));
      trials_34LoopScheduler.add(end_expRoutineBegin(snapshot));
      trials_34LoopScheduler.add(end_expRoutineEachFrame());
      trials_34LoopScheduler.add(end_expRoutineEnd(snapshot));
      trials_34LoopScheduler.add(p_exp_int_1RoutineBegin(snapshot));
      trials_34LoopScheduler.add(p_exp_int_1RoutineEachFrame());
      trials_34LoopScheduler.add(p_exp_int_1RoutineEnd(snapshot));
      trials_34LoopScheduler.add(p_exp_int_2RoutineBegin(snapshot));
      trials_34LoopScheduler.add(p_exp_int_2RoutineEachFrame());
      trials_34LoopScheduler.add(p_exp_int_2RoutineEnd(snapshot));
      const trials_31LoopScheduler = new Scheduler(psychoJS);
      trials_34LoopScheduler.add(trials_31LoopBegin(trials_31LoopScheduler, snapshot));
      trials_34LoopScheduler.add(trials_31LoopScheduler);
      trials_34LoopScheduler.add(trials_31LoopEnd);
      trials_34LoopScheduler.add(p_exp_int_5RoutineBegin(snapshot));
      trials_34LoopScheduler.add(p_exp_int_5RoutineEachFrame());
      trials_34LoopScheduler.add(p_exp_int_5RoutineEnd(snapshot));
      trials_34LoopScheduler.add(p_exp_int_6RoutineBegin(snapshot));
      trials_34LoopScheduler.add(p_exp_int_6RoutineEachFrame());
      trials_34LoopScheduler.add(p_exp_int_6RoutineEnd(snapshot));
      trials_34LoopScheduler.add(p_exp_int_7RoutineBegin(snapshot));
      trials_34LoopScheduler.add(p_exp_int_7RoutineEachFrame());
      trials_34LoopScheduler.add(p_exp_int_7RoutineEnd(snapshot));
      trials_34LoopScheduler.add(trials_34LoopEndIteration(trials_34LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_31;
function trials_31LoopBegin(trials_31LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_31 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nTr61, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_31'
    });
    psychoJS.experiment.addLoop(trials_31); // add the loop to the experiment
    currentLoop = trials_31;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_31 of trials_31) {
      snapshot = trials_31.getSnapshot();
      trials_31LoopScheduler.add(importConditions(snapshot));
      trials_31LoopScheduler.add(p_exp_int_3RoutineBegin(snapshot));
      trials_31LoopScheduler.add(p_exp_int_3RoutineEachFrame());
      trials_31LoopScheduler.add(p_exp_int_3RoutineEnd(snapshot));
      trials_31LoopScheduler.add(p_exp_int_4RoutineBegin(snapshot));
      trials_31LoopScheduler.add(p_exp_int_4RoutineEachFrame());
      trials_31LoopScheduler.add(p_exp_int_4RoutineEnd(snapshot));
      trials_31LoopScheduler.add(trials_31LoopEndIteration(trials_31LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_31LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_31);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_31LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trials_34LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_34);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_34LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instr_tr_1MaxDurationReached;
var _key_resp_allKeys;
var instr_tr_1MaxDuration;
var instr_tr_1Components;
function instr_tr_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_tr_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instr_tr_1Clock.reset();
    routineTimer.reset();
    instr_tr_1MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    head_tr_1.alignText = "left";
    head_tr_1.italic = true;
    body_tr_1.alignText = "left";
    
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    instr_tr_1MaxDuration = null
    // keep track of which components have finished
    instr_tr_1Components = [];
    instr_tr_1Components.push(num_inst_tr_1);
    instr_tr_1Components.push(title_tr_1);
    instr_tr_1Components.push(head_tr_1);
    instr_tr_1Components.push(body_tr_1);
    instr_tr_1Components.push(text_arrow_tr_1);
    instr_tr_1Components.push(arrow_right_tr_1);
    instr_tr_1Components.push(key_resp);
    
    for (const thisComponent of instr_tr_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_tr_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_tr_1' ---
    // get current time
    t = instr_tr_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *num_inst_tr_1* updates
    if (t >= 0.0 && num_inst_tr_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      num_inst_tr_1.tStart = t;  // (not accounting for frame time here)
      num_inst_tr_1.frameNStart = frameN;  // exact frame index
      
      num_inst_tr_1.setAutoDraw(true);
    }
    
    
    // if num_inst_tr_1 is active this frame...
    if (num_inst_tr_1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *title_tr_1* updates
    if (t >= 0.0 && title_tr_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      title_tr_1.tStart = t;  // (not accounting for frame time here)
      title_tr_1.frameNStart = frameN;  // exact frame index
      
      title_tr_1.setAutoDraw(true);
    }
    
    
    // if title_tr_1 is active this frame...
    if (title_tr_1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *head_tr_1* updates
    if (t >= 0.0 && head_tr_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      head_tr_1.tStart = t;  // (not accounting for frame time here)
      head_tr_1.frameNStart = frameN;  // exact frame index
      
      head_tr_1.setAutoDraw(true);
    }
    
    
    // if head_tr_1 is active this frame...
    if (head_tr_1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *body_tr_1* updates
    if (t >= 0.0 && body_tr_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      body_tr_1.tStart = t;  // (not accounting for frame time here)
      body_tr_1.frameNStart = frameN;  // exact frame index
      
      body_tr_1.setAutoDraw(true);
    }
    
    
    // if body_tr_1 is active this frame...
    if (body_tr_1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_arrow_tr_1* updates
    if (t >= 0.0 && text_arrow_tr_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_arrow_tr_1.tStart = t;  // (not accounting for frame time here)
      text_arrow_tr_1.frameNStart = frameN;  // exact frame index
      
      text_arrow_tr_1.setAutoDraw(true);
    }
    
    
    // if text_arrow_tr_1 is active this frame...
    if (text_arrow_tr_1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *arrow_right_tr_1* updates
    if (t >= 0.0 && arrow_right_tr_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow_right_tr_1.tStart = t;  // (not accounting for frame time here)
      arrow_right_tr_1.frameNStart = frameN;  // exact frame index
      
      arrow_right_tr_1.setAutoDraw(true);
    }
    
    
    // if arrow_right_tr_1 is active this frame...
    if (arrow_right_tr_1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.1 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({
        keyList: typeof 'right' === 'string' ? ['right'] : 'right', 
        waitRelease: false
      });
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_tr_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_tr_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_tr_1' ---
    for (const thisComponent of instr_tr_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code
    if ((key_resp.keys === "right")) {
        nTr2 = 1;
    }
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "instr_tr_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instr_tr_2MaxDurationReached;
var _key_resp_2_allKeys;
var instr_tr_2MaxDuration;
var instr_tr_2Components;
function instr_tr_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_tr_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instr_tr_2Clock.reset();
    routineTimer.reset();
    instr_tr_2MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    head_tr_2.alignText = "left";
    head_tr_2.italic = true;
    body_tr_2.alignText = "left";
    
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    instr_tr_2MaxDuration = null
    // keep track of which components have finished
    instr_tr_2Components = [];
    instr_tr_2Components.push(num_inst_tr_2);
    instr_tr_2Components.push(title_tr_2);
    instr_tr_2Components.push(head_tr_2);
    instr_tr_2Components.push(body_tr_2);
    instr_tr_2Components.push(text_arrow_tr);
    instr_tr_2Components.push(arrow_right_tr);
    instr_tr_2Components.push(arrow_left_tr_1);
    instr_tr_2Components.push(key_resp_2);
    
    for (const thisComponent of instr_tr_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_tr_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_tr_2' ---
    // get current time
    t = instr_tr_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *num_inst_tr_2* updates
    if (t >= 0.0 && num_inst_tr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      num_inst_tr_2.tStart = t;  // (not accounting for frame time here)
      num_inst_tr_2.frameNStart = frameN;  // exact frame index
      
      num_inst_tr_2.setAutoDraw(true);
    }
    
    
    // if num_inst_tr_2 is active this frame...
    if (num_inst_tr_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *title_tr_2* updates
    if (t >= 0.0 && title_tr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      title_tr_2.tStart = t;  // (not accounting for frame time here)
      title_tr_2.frameNStart = frameN;  // exact frame index
      
      title_tr_2.setAutoDraw(true);
    }
    
    
    // if title_tr_2 is active this frame...
    if (title_tr_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *head_tr_2* updates
    if (t >= 0.0 && head_tr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      head_tr_2.tStart = t;  // (not accounting for frame time here)
      head_tr_2.frameNStart = frameN;  // exact frame index
      
      head_tr_2.setAutoDraw(true);
    }
    
    
    // if head_tr_2 is active this frame...
    if (head_tr_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *body_tr_2* updates
    if (t >= 0.0 && body_tr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      body_tr_2.tStart = t;  // (not accounting for frame time here)
      body_tr_2.frameNStart = frameN;  // exact frame index
      
      body_tr_2.setAutoDraw(true);
    }
    
    
    // if body_tr_2 is active this frame...
    if (body_tr_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_arrow_tr* updates
    if (t >= 0.0 && text_arrow_tr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_arrow_tr.tStart = t;  // (not accounting for frame time here)
      text_arrow_tr.frameNStart = frameN;  // exact frame index
      
      text_arrow_tr.setAutoDraw(true);
    }
    
    
    // if text_arrow_tr is active this frame...
    if (text_arrow_tr.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *arrow_right_tr* updates
    if (t >= 0.0 && arrow_right_tr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow_right_tr.tStart = t;  // (not accounting for frame time here)
      arrow_right_tr.frameNStart = frameN;  // exact frame index
      
      arrow_right_tr.setAutoDraw(true);
    }
    
    
    // if arrow_right_tr is active this frame...
    if (arrow_right_tr.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *arrow_left_tr_1* updates
    if (t >= 0.0 && arrow_left_tr_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow_left_tr_1.tStart = t;  // (not accounting for frame time here)
      arrow_left_tr_1.frameNStart = frameN;  // exact frame index
      
      arrow_left_tr_1.setAutoDraw(true);
    }
    
    
    // if arrow_left_tr_1 is active this frame...
    if (arrow_left_tr_1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.1 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    // if key_resp_2 is active this frame...
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({
        keyList: typeof ['right','left'] === 'string' ? [['right','left']] : ['right','left'], 
        waitRelease: false
      });
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_tr_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_tr_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_tr_2' ---
    for (const thisComponent of instr_tr_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_2
    if ((key_resp_2.keys === "right")) {
        nTr3 = 1;
    } else {
        if ((key_resp_2.keys === "left")) {
            nTr3 = 0;
            nTr4 = 0;
            nTr5 = 0;
            nTr6 = 0;
            nTr7 = 0;
            nTr1 = 1;
        }
    }
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "instr_tr_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var inst_tr7MaxDurationReached;
var _key_resp_8_allKeys;
var inst_tr7MaxDuration;
var inst_tr7Components;
function inst_tr7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'inst_tr7' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    inst_tr7Clock.reset();
    routineTimer.reset();
    inst_tr7MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_43
    head_tr_6.alignText = "left";
    head_tr_6.italic = true;
    body_tr.alignText = "left";
    
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    psychoJS.experiment.addData('inst_tr7.started', globalClock.getTime());
    inst_tr7MaxDuration = null
    // keep track of which components have finished
    inst_tr7Components = [];
    inst_tr7Components.push(num_inst_tr);
    inst_tr7Components.push(title_tr);
    inst_tr7Components.push(head_tr_6);
    inst_tr7Components.push(body_tr);
    inst_tr7Components.push(text_arrow_tr_14);
    inst_tr7Components.push(arrow_right_tr_11);
    inst_tr7Components.push(arrow_left_tr_11);
    inst_tr7Components.push(key_resp_8);
    
    for (const thisComponent of inst_tr7Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function inst_tr7RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'inst_tr7' ---
    // get current time
    t = inst_tr7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *num_inst_tr* updates
    if (t >= 0.0 && num_inst_tr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      num_inst_tr.tStart = t;  // (not accounting for frame time here)
      num_inst_tr.frameNStart = frameN;  // exact frame index
      
      num_inst_tr.setAutoDraw(true);
    }
    
    
    // if num_inst_tr is active this frame...
    if (num_inst_tr.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *title_tr* updates
    if (t >= 0.0 && title_tr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      title_tr.tStart = t;  // (not accounting for frame time here)
      title_tr.frameNStart = frameN;  // exact frame index
      
      title_tr.setAutoDraw(true);
    }
    
    
    // if title_tr is active this frame...
    if (title_tr.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *head_tr_6* updates
    if (t >= 0.0 && head_tr_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      head_tr_6.tStart = t;  // (not accounting for frame time here)
      head_tr_6.frameNStart = frameN;  // exact frame index
      
      head_tr_6.setAutoDraw(true);
    }
    
    
    // if head_tr_6 is active this frame...
    if (head_tr_6.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *body_tr* updates
    if (t >= 0.0 && body_tr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      body_tr.tStart = t;  // (not accounting for frame time here)
      body_tr.frameNStart = frameN;  // exact frame index
      
      body_tr.setAutoDraw(true);
    }
    
    
    // if body_tr is active this frame...
    if (body_tr.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_arrow_tr_14* updates
    if (t >= 0.0 && text_arrow_tr_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_arrow_tr_14.tStart = t;  // (not accounting for frame time here)
      text_arrow_tr_14.frameNStart = frameN;  // exact frame index
      
      text_arrow_tr_14.setAutoDraw(true);
    }
    
    
    // if text_arrow_tr_14 is active this frame...
    if (text_arrow_tr_14.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *arrow_right_tr_11* updates
    if (t >= 0.0 && arrow_right_tr_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow_right_tr_11.tStart = t;  // (not accounting for frame time here)
      arrow_right_tr_11.frameNStart = frameN;  // exact frame index
      
      arrow_right_tr_11.setAutoDraw(true);
    }
    
    
    // if arrow_right_tr_11 is active this frame...
    if (arrow_right_tr_11.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *arrow_left_tr_11* updates
    if (t >= 0.0 && arrow_left_tr_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow_left_tr_11.tStart = t;  // (not accounting for frame time here)
      arrow_left_tr_11.frameNStart = frameN;  // exact frame index
      
      arrow_left_tr_11.setAutoDraw(true);
    }
    
    
    // if arrow_left_tr_11 is active this frame...
    if (arrow_left_tr_11.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_8* updates
    if (t >= 0.1 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }
    
    // if key_resp_8 is active this frame...
    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({
        keyList: typeof ['right','left'] === 'string' ? [['right','left']] : ['right','left'], 
        waitRelease: false
      });
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        key_resp_8.duration = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of inst_tr7Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function inst_tr7RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'inst_tr7' ---
    for (const thisComponent of inst_tr7Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('inst_tr7.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_43
    if ((key_resp_8.keys === "right")) {
        nTr4 = 1;
    } else {
        if ((key_resp_8.keys === "left")) {
            nTr1 = 0;
            nTr2 = 1;
            nTr4 = 0;
            nTr5 = 0;
            nTr6 = 0;
            nTr7 = 0;
        }
    }
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_8.corr, level);
    }
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        psychoJS.experiment.addData('key_resp_8.duration', key_resp_8.duration);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    // the Routine "inst_tr7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instr_tr_3MaxDurationReached;
var _key_resp_3_allKeys;
var instr_tr_3MaxDuration;
var instr_tr_3Components;
function instr_tr_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_tr_3' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instr_tr_3Clock.reset();
    routineTimer.reset();
    instr_tr_3MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    head_tr_3.alignText = "left";
    head_tr_3.italic = true;
    body_tr_3.alignText = "left";
    
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    instr_tr_3MaxDuration = null
    // keep track of which components have finished
    instr_tr_3Components = [];
    instr_tr_3Components.push(num_inst_tr_3);
    instr_tr_3Components.push(title_tr_3);
    instr_tr_3Components.push(head_tr_3);
    instr_tr_3Components.push(body_tr_3);
    instr_tr_3Components.push(text_arrow_tr_2);
    instr_tr_3Components.push(arrow_right_tr_2);
    instr_tr_3Components.push(arrow_left_tr);
    instr_tr_3Components.push(key_resp_3);
    
    for (const thisComponent of instr_tr_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_tr_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_tr_3' ---
    // get current time
    t = instr_tr_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *num_inst_tr_3* updates
    if (t >= 0.0 && num_inst_tr_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      num_inst_tr_3.tStart = t;  // (not accounting for frame time here)
      num_inst_tr_3.frameNStart = frameN;  // exact frame index
      
      num_inst_tr_3.setAutoDraw(true);
    }
    
    
    // if num_inst_tr_3 is active this frame...
    if (num_inst_tr_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *title_tr_3* updates
    if (t >= 0.0 && title_tr_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      title_tr_3.tStart = t;  // (not accounting for frame time here)
      title_tr_3.frameNStart = frameN;  // exact frame index
      
      title_tr_3.setAutoDraw(true);
    }
    
    
    // if title_tr_3 is active this frame...
    if (title_tr_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *head_tr_3* updates
    if (t >= 0.0 && head_tr_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      head_tr_3.tStart = t;  // (not accounting for frame time here)
      head_tr_3.frameNStart = frameN;  // exact frame index
      
      head_tr_3.setAutoDraw(true);
    }
    
    
    // if head_tr_3 is active this frame...
    if (head_tr_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *body_tr_3* updates
    if (t >= 0.0 && body_tr_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      body_tr_3.tStart = t;  // (not accounting for frame time here)
      body_tr_3.frameNStart = frameN;  // exact frame index
      
      body_tr_3.setAutoDraw(true);
    }
    
    
    // if body_tr_3 is active this frame...
    if (body_tr_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_arrow_tr_2* updates
    if (t >= 0.0 && text_arrow_tr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_arrow_tr_2.tStart = t;  // (not accounting for frame time here)
      text_arrow_tr_2.frameNStart = frameN;  // exact frame index
      
      text_arrow_tr_2.setAutoDraw(true);
    }
    
    
    // if text_arrow_tr_2 is active this frame...
    if (text_arrow_tr_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *arrow_right_tr_2* updates
    if (t >= 0.0 && arrow_right_tr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow_right_tr_2.tStart = t;  // (not accounting for frame time here)
      arrow_right_tr_2.frameNStart = frameN;  // exact frame index
      
      arrow_right_tr_2.setAutoDraw(true);
    }
    
    
    // if arrow_right_tr_2 is active this frame...
    if (arrow_right_tr_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *arrow_left_tr* updates
    if (t >= 0.0 && arrow_left_tr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow_left_tr.tStart = t;  // (not accounting for frame time here)
      arrow_left_tr.frameNStart = frameN;  // exact frame index
      
      arrow_left_tr.setAutoDraw(true);
    }
    
    
    // if arrow_left_tr is active this frame...
    if (arrow_left_tr.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.1 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    // if key_resp_3 is active this frame...
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({
        keyList: typeof ['right','left'] === 'string' ? [['right','left']] : ['right','left'], 
        waitRelease: false
      });
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_tr_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_tr_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_tr_3' ---
    for (const thisComponent of instr_tr_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_3
    if ((key_resp_3.keys === "right")) {
        nTr5 = 1;
    } else {
        if ((key_resp_3.keys === "left")) {
            nTr1 = 0;
            nTr2 = 0;
            nTr3 = 1;
            nTr5 = 0;
            nTr6 = 0;
            nTr7 = 0;
        }
    }
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "instr_tr_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instr_tr_4MaxDurationReached;
var _key_resp_4_allKeys;
var instr_tr_4MaxDuration;
var instr_tr_4Components;
function instr_tr_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_tr_4' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instr_tr_4Clock.reset();
    routineTimer.reset();
    instr_tr_4MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_4
    head_tr_4.alignText = "left";
    head_tr_4.italic = true;
    body_tr_4.alignText = "left";
    
    body_tr_4.setText('Появится правильный ответ, который нужно будет оценить, ответив на вопрос: «Совпадает ли он с Вашим?»\n\nДля ответа нажмите на один из вариантов:\n- Если нажмете «ДА», то появится следующая задача;\n- Если нажмете «НЕТ», то нужно будет оценить было ли «Ага-переживание» при знакомстве с ответом.');
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    instr_tr_4MaxDuration = null
    // keep track of which components have finished
    instr_tr_4Components = [];
    instr_tr_4Components.push(num_inst_tr_4);
    instr_tr_4Components.push(title_tr_4);
    instr_tr_4Components.push(head_tr_4);
    instr_tr_4Components.push(body_tr_4);
    instr_tr_4Components.push(text_arrow_tr_3);
    instr_tr_4Components.push(arrow_right_tr_3);
    instr_tr_4Components.push(arrow_left_tr_2);
    instr_tr_4Components.push(key_resp_4);
    
    for (const thisComponent of instr_tr_4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_tr_4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_tr_4' ---
    // get current time
    t = instr_tr_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *num_inst_tr_4* updates
    if (t >= 0.0 && num_inst_tr_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      num_inst_tr_4.tStart = t;  // (not accounting for frame time here)
      num_inst_tr_4.frameNStart = frameN;  // exact frame index
      
      num_inst_tr_4.setAutoDraw(true);
    }
    
    
    // if num_inst_tr_4 is active this frame...
    if (num_inst_tr_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *title_tr_4* updates
    if (t >= 0.0 && title_tr_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      title_tr_4.tStart = t;  // (not accounting for frame time here)
      title_tr_4.frameNStart = frameN;  // exact frame index
      
      title_tr_4.setAutoDraw(true);
    }
    
    
    // if title_tr_4 is active this frame...
    if (title_tr_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *head_tr_4* updates
    if (t >= 0.0 && head_tr_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      head_tr_4.tStart = t;  // (not accounting for frame time here)
      head_tr_4.frameNStart = frameN;  // exact frame index
      
      head_tr_4.setAutoDraw(true);
    }
    
    
    // if head_tr_4 is active this frame...
    if (head_tr_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *body_tr_4* updates
    if (t >= 0.0 && body_tr_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      body_tr_4.tStart = t;  // (not accounting for frame time here)
      body_tr_4.frameNStart = frameN;  // exact frame index
      
      body_tr_4.setAutoDraw(true);
    }
    
    
    // if body_tr_4 is active this frame...
    if (body_tr_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_arrow_tr_3* updates
    if (t >= 0.0 && text_arrow_tr_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_arrow_tr_3.tStart = t;  // (not accounting for frame time here)
      text_arrow_tr_3.frameNStart = frameN;  // exact frame index
      
      text_arrow_tr_3.setAutoDraw(true);
    }
    
    
    // if text_arrow_tr_3 is active this frame...
    if (text_arrow_tr_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *arrow_right_tr_3* updates
    if (t >= 0.0 && arrow_right_tr_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow_right_tr_3.tStart = t;  // (not accounting for frame time here)
      arrow_right_tr_3.frameNStart = frameN;  // exact frame index
      
      arrow_right_tr_3.setAutoDraw(true);
    }
    
    
    // if arrow_right_tr_3 is active this frame...
    if (arrow_right_tr_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *arrow_left_tr_2* updates
    if (t >= 0.0 && arrow_left_tr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow_left_tr_2.tStart = t;  // (not accounting for frame time here)
      arrow_left_tr_2.frameNStart = frameN;  // exact frame index
      
      arrow_left_tr_2.setAutoDraw(true);
    }
    
    
    // if arrow_left_tr_2 is active this frame...
    if (arrow_left_tr_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.1 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    // if key_resp_4 is active this frame...
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({
        keyList: typeof ['right','left'] === 'string' ? [['right','left']] : ['right','left'], 
        waitRelease: false
      });
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_tr_4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_tr_4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_tr_4' ---
    for (const thisComponent of instr_tr_4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_4
    if ((key_resp_4.keys === "right")) {
        nTr6 = 1;
    } else {
        if ((key_resp_4.keys === "left")) {
            nTr1 = 0;
            nTr2 = 0;
            nTr3 = 0;
            nTr4 = 1;
            nTr6 = 0;
            nTr7 = 0;
        }
    }
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "instr_tr_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instr_tr_5MaxDurationReached;
var _key_resp_5_allKeys;
var instr_tr_5MaxDuration;
var instr_tr_5Components;
function instr_tr_5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_tr_5' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instr_tr_5Clock.reset();
    routineTimer.reset();
    instr_tr_5MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_5
    head_tr_5.alignText = "left";
    head_tr_5.italic = true;
    body_tr_5.alignText = "left";
    
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    instr_tr_5MaxDuration = null
    // keep track of which components have finished
    instr_tr_5Components = [];
    instr_tr_5Components.push(num_inst_tr_5);
    instr_tr_5Components.push(title_tr_5);
    instr_tr_5Components.push(head_tr_5);
    instr_tr_5Components.push(body_tr_5);
    instr_tr_5Components.push(text_arrow_tr_4);
    instr_tr_5Components.push(arrow_right_tr_4);
    instr_tr_5Components.push(arrow_left_tr_3);
    instr_tr_5Components.push(key_resp_5);
    
    for (const thisComponent of instr_tr_5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_tr_5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_tr_5' ---
    // get current time
    t = instr_tr_5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *num_inst_tr_5* updates
    if (t >= 0.0 && num_inst_tr_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      num_inst_tr_5.tStart = t;  // (not accounting for frame time here)
      num_inst_tr_5.frameNStart = frameN;  // exact frame index
      
      num_inst_tr_5.setAutoDraw(true);
    }
    
    
    // if num_inst_tr_5 is active this frame...
    if (num_inst_tr_5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *title_tr_5* updates
    if (t >= 0.0 && title_tr_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      title_tr_5.tStart = t;  // (not accounting for frame time here)
      title_tr_5.frameNStart = frameN;  // exact frame index
      
      title_tr_5.setAutoDraw(true);
    }
    
    
    // if title_tr_5 is active this frame...
    if (title_tr_5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *head_tr_5* updates
    if (t >= 0.0 && head_tr_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      head_tr_5.tStart = t;  // (not accounting for frame time here)
      head_tr_5.frameNStart = frameN;  // exact frame index
      
      head_tr_5.setAutoDraw(true);
    }
    
    
    // if head_tr_5 is active this frame...
    if (head_tr_5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *body_tr_5* updates
    if (t >= 0.0 && body_tr_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      body_tr_5.tStart = t;  // (not accounting for frame time here)
      body_tr_5.frameNStart = frameN;  // exact frame index
      
      body_tr_5.setAutoDraw(true);
    }
    
    
    // if body_tr_5 is active this frame...
    if (body_tr_5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_arrow_tr_4* updates
    if (t >= 0.0 && text_arrow_tr_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_arrow_tr_4.tStart = t;  // (not accounting for frame time here)
      text_arrow_tr_4.frameNStart = frameN;  // exact frame index
      
      text_arrow_tr_4.setAutoDraw(true);
    }
    
    
    // if text_arrow_tr_4 is active this frame...
    if (text_arrow_tr_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *arrow_right_tr_4* updates
    if (t >= 0.0 && arrow_right_tr_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow_right_tr_4.tStart = t;  // (not accounting for frame time here)
      arrow_right_tr_4.frameNStart = frameN;  // exact frame index
      
      arrow_right_tr_4.setAutoDraw(true);
    }
    
    
    // if arrow_right_tr_4 is active this frame...
    if (arrow_right_tr_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *arrow_left_tr_3* updates
    if (t >= 0.0 && arrow_left_tr_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow_left_tr_3.tStart = t;  // (not accounting for frame time here)
      arrow_left_tr_3.frameNStart = frameN;  // exact frame index
      
      arrow_left_tr_3.setAutoDraw(true);
    }
    
    
    // if arrow_left_tr_3 is active this frame...
    if (arrow_left_tr_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_5* updates
    if (t >= 0.1 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    // if key_resp_5 is active this frame...
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({
        keyList: typeof ['right','left'] === 'string' ? [['right','left']] : ['right','left'], 
        waitRelease: false
      });
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_tr_5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_tr_5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_tr_5' ---
    for (const thisComponent of instr_tr_5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_5
    if ((key_resp_5.keys === "right")) {
        nTr7 = 1;
    } else {
        if ((key_resp_5.keys === "left")) {
            nTr1 = 0;
            nTr2 = 0;
            nTr3 = 0;
            nTr4 = 0;
            nTr5 = 1;
            nTr7 = 0;
        }
    }
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        psychoJS.experiment.addData('key_resp_5.duration', key_resp_5.duration);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "instr_tr_5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instr_tr_6MaxDurationReached;
var _key_resp_6_allKeys;
var instr_tr_6MaxDuration;
var instr_tr_6Components;
function instr_tr_6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_tr_6' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instr_tr_6Clock.reset();
    routineTimer.reset();
    instr_tr_6MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_6
    head_tr_2.alignText = "left";
    head_tr_2.italic = true;
    body_tr_2.alignText = "left";
    
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    instr_tr_6MaxDuration = null
    // keep track of which components have finished
    instr_tr_6Components = [];
    instr_tr_6Components.push(head_tr);
    instr_tr_6Components.push(text_arrow_tr_5);
    instr_tr_6Components.push(arrow_left_tr_4);
    instr_tr_6Components.push(key_resp_6);
    
    for (const thisComponent of instr_tr_6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_tr_6RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_tr_6' ---
    // get current time
    t = instr_tr_6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *head_tr* updates
    if (t >= 0.0 && head_tr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      head_tr.tStart = t;  // (not accounting for frame time here)
      head_tr.frameNStart = frameN;  // exact frame index
      
      head_tr.setAutoDraw(true);
    }
    
    
    // if head_tr is active this frame...
    if (head_tr.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_arrow_tr_5* updates
    if (t >= 0.0 && text_arrow_tr_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_arrow_tr_5.tStart = t;  // (not accounting for frame time here)
      text_arrow_tr_5.frameNStart = frameN;  // exact frame index
      
      text_arrow_tr_5.setAutoDraw(true);
    }
    
    
    // if text_arrow_tr_5 is active this frame...
    if (text_arrow_tr_5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *arrow_left_tr_4* updates
    if (t >= 0.0 && arrow_left_tr_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow_left_tr_4.tStart = t;  // (not accounting for frame time here)
      arrow_left_tr_4.frameNStart = frameN;  // exact frame index
      
      arrow_left_tr_4.setAutoDraw(true);
    }
    
    
    // if arrow_left_tr_4 is active this frame...
    if (arrow_left_tr_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_6* updates
    if (t >= 0.1 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }
    
    // if key_resp_6 is active this frame...
    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({
        keyList: typeof ['space','left'] === 'string' ? [['space','left']] : ['space','left'], 
        waitRelease: false
      });
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        key_resp_6.duration = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_tr_6Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_tr_6RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_tr_6' ---
    for (const thisComponent of instr_tr_6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_6
    if ((key_resp_6.keys === "space")) {
        trials_1.finished = true;
    } else {
        if ((key_resp_6.keys === "left")) {
            nTr1 = 0;
            nTr2 = 0;
            nTr3 = 0;
            nTr4 = 0;
            nTr5 = 0;
            nTr6 = 1;
        }
    }
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        psychoJS.experiment.addData('key_resp_6.duration', key_resp_6.duration);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "instr_tr_6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var tr_1MaxDurationReached;
var tr_1MaxDuration;
var tr_1Components;
function tr_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'tr_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    tr_1Clock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    tr_1MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_8
    psychoJS.window.mouseVisible = false;
    
    tr_1MaxDuration = null
    // keep track of which components have finished
    tr_1Components = [];
    tr_1Components.push(cross_tr);
    
    for (const thisComponent of tr_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function tr_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'tr_1' ---
    // get current time
    t = tr_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cross_tr* updates
    if (t >= 0.0 && cross_tr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_tr.tStart = t;  // (not accounting for frame time here)
      cross_tr.frameNStart = frameN;  // exact frame index
      
      cross_tr.setAutoDraw(true);
    }
    
    
    // if cross_tr is active this frame...
    if (cross_tr.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cross_tr.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      cross_tr.tStop = t;  // not accounting for scr refresh
      cross_tr.frameNStop = frameN;  // exact frame index
      // update status
      cross_tr.status = PsychoJS.Status.FINISHED;
      cross_tr.setAutoDraw(false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of tr_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function tr_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'tr_1' ---
    for (const thisComponent of tr_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_8
    n_trial_tr += 1;
    nTr11 = 0;
    nTr12 = 0;
    nTr13 = 0;
    nTr14 = 0;
    nTr15 = 0;
    nTr16 = 0;
    nTr17 = 0;
    nTr18 = 0;
    nTr19 = 0;
    
    if (routineForceEnded) {
        routineTimer.reset();} else if (tr_1MaxDurationReached) {
        tr_1Clock.add(tr_1MaxDuration);
    } else {
        tr_1Clock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var tr_2MaxDurationReached;
var _key_resp_7_allKeys;
var tr_2MaxDuration;
var tr_2Components;
function tr_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'tr_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    tr_2Clock.reset(routineTimer.getTime());
    routineTimer.add(30.800000);
    tr_2MaxDurationReached = false;
    // update component parameters for each repeat
    num_tr.setText((n_trial_tr.toString() + "/5"));
    senten_tr.setText(sen_tr);
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    psychoJS.experiment.addData('tr_2.started', globalClock.getTime());
    tr_2MaxDuration = null
    // keep track of which components have finished
    tr_2Components = [];
    tr_2Components.push(num_tr);
    tr_2Components.push(senten_tr);
    tr_2Components.push(text_answ_tr);
    tr_2Components.push(key_resp_7);
    tr_2Components.push(text_slow_tr);
    
    for (const thisComponent of tr_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function tr_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'tr_2' ---
    // get current time
    t = tr_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *num_tr* updates
    if (t >= 0.0 && num_tr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      num_tr.tStart = t;  // (not accounting for frame time here)
      num_tr.frameNStart = frameN;  // exact frame index
      
      num_tr.setAutoDraw(true);
    }
    
    
    // if num_tr is active this frame...
    if (num_tr.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 30.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (num_tr.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      num_tr.tStop = t;  // not accounting for scr refresh
      num_tr.frameNStop = frameN;  // exact frame index
      // update status
      num_tr.status = PsychoJS.Status.FINISHED;
      num_tr.setAutoDraw(false);
    }
    
    
    // *senten_tr* updates
    if (t >= 0.0 && senten_tr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      senten_tr.tStart = t;  // (not accounting for frame time here)
      senten_tr.frameNStart = frameN;  // exact frame index
      
      senten_tr.setAutoDraw(true);
    }
    
    
    // if senten_tr is active this frame...
    if (senten_tr.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 30.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (senten_tr.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      senten_tr.tStop = t;  // not accounting for scr refresh
      senten_tr.frameNStop = frameN;  // exact frame index
      // update status
      senten_tr.status = PsychoJS.Status.FINISHED;
      senten_tr.setAutoDraw(false);
    }
    
    
    // *text_answ_tr* updates
    if (t >= 0.0 && text_answ_tr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_answ_tr.tStart = t;  // (not accounting for frame time here)
      text_answ_tr.frameNStart = frameN;  // exact frame index
      
      text_answ_tr.setAutoDraw(true);
    }
    
    
    // if text_answ_tr is active this frame...
    if (text_answ_tr.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 30.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_answ_tr.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_answ_tr.tStop = t;  // not accounting for scr refresh
      text_answ_tr.frameNStop = frameN;  // exact frame index
      // update status
      text_answ_tr.status = PsychoJS.Status.FINISHED;
      text_answ_tr.setAutoDraw(false);
    }
    
    
    // *key_resp_7* updates
    if (t >= 0.5 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }
    frameRemains = 0.5 + 29.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      key_resp_7.tStop = t;  // not accounting for scr refresh
      key_resp_7.frameNStop = frameN;  // exact frame index
      // update status
      key_resp_7.status = PsychoJS.Status.FINISHED;
      frameRemains = 0.5 + 29.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (key_resp_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        key_resp_7.tStop = t;  // not accounting for scr refresh
        key_resp_7.frameNStop = frameN;  // exact frame index
        // update status
        key_resp_7.status = PsychoJS.Status.FINISHED;
        key_resp_7.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if key_resp_7 is active this frame...
      if (key_resp_7.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_7.getKeys({
          keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
          waitRelease: false
        });
        _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
        if (_key_resp_7_allKeys.length > 0) {
          key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
          key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
          key_resp_7.duration = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      
      // *text_slow_tr* updates
      if (t >= 30.0 && text_slow_tr.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_slow_tr.tStart = t;  // (not accounting for frame time here)
        text_slow_tr.frameNStart = frameN;  // exact frame index
        
        text_slow_tr.setAutoDraw(true);
      }
      
      
      // if text_slow_tr is active this frame...
      if (text_slow_tr.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 30.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_slow_tr.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_slow_tr.tStop = t;  // not accounting for scr refresh
        text_slow_tr.frameNStop = frameN;  // exact frame index
        // update status
        text_slow_tr.status = PsychoJS.Status.FINISHED;
        text_slow_tr.setAutoDraw(false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of tr_2Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function tr_2RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'tr_2' ---
      for (const thisComponent of tr_2Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('tr_2.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_7.corr, level);
      }
      psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
      if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
          psychoJS.experiment.addData('key_resp_7.duration', key_resp_7.duration);
          routineTimer.reset();
          }
      
      key_resp_7.stop();
      // Run 'End Routine' code from code_7
      if ((key_resp_7.keys === "space")) {
          nTr11 = 1;
          nTr13 = 1;
      } else {
          nTr15 = 1;
          nTr18 = 1;
      }
      
      if (routineForceEnded) {
          routineTimer.reset();} else if (tr_2MaxDurationReached) {
          tr_2Clock.add(tr_2MaxDuration);
      } else {
          tr_2Clock.add(30.800000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var tr_9MaxDurationReached;
var tr_9MaxDuration;
var tr_9Components;
function tr_9RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'tr_9' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      tr_9Clock.reset();
      routineTimer.reset();
      tr_9MaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_47
      psychoJS.window.mouseVisible = true;
      
      // reset yes_impass_tr to account for continued clicks & clear times on/off
      yes_impass_tr.reset()
      // reset no_impass_tr to account for continued clicks & clear times on/off
      no_impass_tr.reset()
      psychoJS.experiment.addData('tr_9.started', globalClock.getTime());
      tr_9MaxDuration = null
      // keep track of which components have finished
      tr_9Components = [];
      tr_9Components.push(impass_txt_tr);
      tr_9Components.push(yes_impass_tr);
      tr_9Components.push(no_impass_tr);
      
      for (const thisComponent of tr_9Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function tr_9RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'tr_9' ---
      // get current time
      t = tr_9Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *impass_txt_tr* updates
      if (t >= 0.0 && impass_txt_tr.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        impass_txt_tr.tStart = t;  // (not accounting for frame time here)
        impass_txt_tr.frameNStart = frameN;  // exact frame index
        
        impass_txt_tr.setAutoDraw(true);
      }
      
      
      // if impass_txt_tr is active this frame...
      if (impass_txt_tr.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *yes_impass_tr* updates
      if (t >= 0.5 && yes_impass_tr.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        yes_impass_tr.tStart = t;  // (not accounting for frame time here)
        yes_impass_tr.frameNStart = frameN;  // exact frame index
        
        yes_impass_tr.setAutoDraw(true);
      }
      
      
      // if yes_impass_tr is active this frame...
      if (yes_impass_tr.status === PsychoJS.Status.STARTED) {
      }
      
      if (yes_impass_tr.status === PsychoJS.Status.STARTED) {
        // check whether yes_impass_tr has been pressed
        if (yes_impass_tr.isClicked) {
          if (!yes_impass_tr.wasClicked) {
            // store time of first click
            yes_impass_tr.timesOn.push(yes_impass_tr.clock.getTime());
            // store time clicked until
            yes_impass_tr.timesOff.push(yes_impass_tr.clock.getTime());
          } else {
            // update time clicked until;
            yes_impass_tr.timesOff[yes_impass_tr.timesOff.length - 1] = yes_impass_tr.clock.getTime();
          }
          if (!yes_impass_tr.wasClicked) {
            // end routine when yes_impass_tr is clicked
            continueRoutine = false;
            
          }
          // if yes_impass_tr is still clicked next frame, it is not a new click
          yes_impass_tr.wasClicked = true;
        } else {
          // if yes_impass_tr is clicked next frame, it is a new click
          yes_impass_tr.wasClicked = false;
        }
      } else {
        // keep clock at 0 if yes_impass_tr hasn't started / has finished
        yes_impass_tr.clock.reset();
        // if yes_impass_tr is clicked next frame, it is a new click
        yes_impass_tr.wasClicked = false;
      }
      
      // *no_impass_tr* updates
      if (t >= 0.5 && no_impass_tr.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        no_impass_tr.tStart = t;  // (not accounting for frame time here)
        no_impass_tr.frameNStart = frameN;  // exact frame index
        
        no_impass_tr.setAutoDraw(true);
      }
      
      
      // if no_impass_tr is active this frame...
      if (no_impass_tr.status === PsychoJS.Status.STARTED) {
      }
      
      if (no_impass_tr.status === PsychoJS.Status.STARTED) {
        // check whether no_impass_tr has been pressed
        if (no_impass_tr.isClicked) {
          if (!no_impass_tr.wasClicked) {
            // store time of first click
            no_impass_tr.timesOn.push(no_impass_tr.clock.getTime());
            // store time clicked until
            no_impass_tr.timesOff.push(no_impass_tr.clock.getTime());
          } else {
            // update time clicked until;
            no_impass_tr.timesOff[no_impass_tr.timesOff.length - 1] = no_impass_tr.clock.getTime();
          }
          if (!no_impass_tr.wasClicked) {
            // end routine when no_impass_tr is clicked
            continueRoutine = false;
            
          }
          // if no_impass_tr is still clicked next frame, it is not a new click
          no_impass_tr.wasClicked = true;
        } else {
          // if no_impass_tr is clicked next frame, it is a new click
          no_impass_tr.wasClicked = false;
        }
      } else {
        // keep clock at 0 if no_impass_tr hasn't started / has finished
        no_impass_tr.clock.reset();
        // if no_impass_tr is clicked next frame, it is a new click
        no_impass_tr.wasClicked = false;
      }
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of tr_9Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function tr_9RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'tr_9' ---
      for (const thisComponent of tr_9Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('tr_9.stopped', globalClock.getTime());
      // Run 'End Routine' code from code_47
      if (no_impass_tr.isClicked) {
          nTr19 = 0;
      } else {
          if (yes_impass_tr.isClicked) {
              nTr19 = 1;
          }
      }
      
      psychoJS.experiment.addData('yes_impass_tr.numClicks', yes_impass_tr.numClicks);
      psychoJS.experiment.addData('yes_impass_tr.timesOn', yes_impass_tr.timesOn);
      psychoJS.experiment.addData('yes_impass_tr.timesOff', yes_impass_tr.timesOff);
      psychoJS.experiment.addData('no_impass_tr.numClicks', no_impass_tr.numClicks);
      psychoJS.experiment.addData('no_impass_tr.timesOn', no_impass_tr.timesOn);
      psychoJS.experiment.addData('no_impass_tr.timesOff', no_impass_tr.timesOff);
      // the Routine "tr_9" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var tr_10MaxDurationReached;
var tr_10MaxDuration;
var tr_10Components;
function tr_10RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'tr_10' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      tr_10Clock.reset();
      routineTimer.reset();
      tr_10MaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_48
      psychoJS.window.mouseVisible = true;
      
      // reset type_impass_confl_tr to account for continued clicks & clear times on/off
      type_impass_confl_tr.reset()
      // reset type_impass_empty_tr to account for continued clicks & clear times on/off
      type_impass_empty_tr.reset()
      psychoJS.experiment.addData('tr_10.started', globalClock.getTime());
      tr_10MaxDuration = null
      // keep track of which components have finished
      tr_10Components = [];
      tr_10Components.push(type_impass_txt_tr);
      tr_10Components.push(type_impass_confl_tr);
      tr_10Components.push(type_impass_empty_tr);
      
      for (const thisComponent of tr_10Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function tr_10RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'tr_10' ---
      // get current time
      t = tr_10Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *type_impass_txt_tr* updates
      if (t >= 0.0 && type_impass_txt_tr.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        type_impass_txt_tr.tStart = t;  // (not accounting for frame time here)
        type_impass_txt_tr.frameNStart = frameN;  // exact frame index
        
        type_impass_txt_tr.setAutoDraw(true);
      }
      
      
      // if type_impass_txt_tr is active this frame...
      if (type_impass_txt_tr.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *type_impass_confl_tr* updates
      if (t >= 0.5 && type_impass_confl_tr.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        type_impass_confl_tr.tStart = t;  // (not accounting for frame time here)
        type_impass_confl_tr.frameNStart = frameN;  // exact frame index
        
        type_impass_confl_tr.setAutoDraw(true);
      }
      
      
      // if type_impass_confl_tr is active this frame...
      if (type_impass_confl_tr.status === PsychoJS.Status.STARTED) {
      }
      
      if (type_impass_confl_tr.status === PsychoJS.Status.STARTED) {
        // check whether type_impass_confl_tr has been pressed
        if (type_impass_confl_tr.isClicked) {
          if (!type_impass_confl_tr.wasClicked) {
            // store time of first click
            type_impass_confl_tr.timesOn.push(type_impass_confl_tr.clock.getTime());
            // store time clicked until
            type_impass_confl_tr.timesOff.push(type_impass_confl_tr.clock.getTime());
          } else {
            // update time clicked until;
            type_impass_confl_tr.timesOff[type_impass_confl_tr.timesOff.length - 1] = type_impass_confl_tr.clock.getTime();
          }
          if (!type_impass_confl_tr.wasClicked) {
            // end routine when type_impass_confl_tr is clicked
            continueRoutine = false;
            
          }
          // if type_impass_confl_tr is still clicked next frame, it is not a new click
          type_impass_confl_tr.wasClicked = true;
        } else {
          // if type_impass_confl_tr is clicked next frame, it is a new click
          type_impass_confl_tr.wasClicked = false;
        }
      } else {
        // keep clock at 0 if type_impass_confl_tr hasn't started / has finished
        type_impass_confl_tr.clock.reset();
        // if type_impass_confl_tr is clicked next frame, it is a new click
        type_impass_confl_tr.wasClicked = false;
      }
      
      // *type_impass_empty_tr* updates
      if (t >= 0.5 && type_impass_empty_tr.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        type_impass_empty_tr.tStart = t;  // (not accounting for frame time here)
        type_impass_empty_tr.frameNStart = frameN;  // exact frame index
        
        type_impass_empty_tr.setAutoDraw(true);
      }
      
      
      // if type_impass_empty_tr is active this frame...
      if (type_impass_empty_tr.status === PsychoJS.Status.STARTED) {
      }
      
      if (type_impass_empty_tr.status === PsychoJS.Status.STARTED) {
        // check whether type_impass_empty_tr has been pressed
        if (type_impass_empty_tr.isClicked) {
          if (!type_impass_empty_tr.wasClicked) {
            // store time of first click
            type_impass_empty_tr.timesOn.push(type_impass_empty_tr.clock.getTime());
            // store time clicked until
            type_impass_empty_tr.timesOff.push(type_impass_empty_tr.clock.getTime());
          } else {
            // update time clicked until;
            type_impass_empty_tr.timesOff[type_impass_empty_tr.timesOff.length - 1] = type_impass_empty_tr.clock.getTime();
          }
          if (!type_impass_empty_tr.wasClicked) {
            // end routine when type_impass_empty_tr is clicked
            continueRoutine = false;
            
          }
          // if type_impass_empty_tr is still clicked next frame, it is not a new click
          type_impass_empty_tr.wasClicked = true;
        } else {
          // if type_impass_empty_tr is clicked next frame, it is a new click
          type_impass_empty_tr.wasClicked = false;
        }
      } else {
        // keep clock at 0 if type_impass_empty_tr hasn't started / has finished
        type_impass_empty_tr.clock.reset();
        // if type_impass_empty_tr is clicked next frame, it is a new click
        type_impass_empty_tr.wasClicked = false;
      }
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of tr_10Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function tr_10RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'tr_10' ---
      for (const thisComponent of tr_10Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('tr_10.stopped', globalClock.getTime());
      psychoJS.experiment.addData('type_impass_confl_tr.numClicks', type_impass_confl_tr.numClicks);
      psychoJS.experiment.addData('type_impass_confl_tr.timesOn', type_impass_confl_tr.timesOn);
      psychoJS.experiment.addData('type_impass_confl_tr.timesOff', type_impass_confl_tr.timesOff);
      psychoJS.experiment.addData('type_impass_empty_tr.numClicks', type_impass_empty_tr.numClicks);
      psychoJS.experiment.addData('type_impass_empty_tr.timesOn', type_impass_empty_tr.timesOn);
      psychoJS.experiment.addData('type_impass_empty_tr.timesOff', type_impass_empty_tr.timesOff);
      // the Routine "tr_10" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var tr_3MaxDurationReached;
var tr_3MaxDuration;
var tr_3Components;
function tr_3RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'tr_3' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      tr_3Clock.reset();
      routineTimer.reset();
      tr_3MaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_9
      psychoJS.window.mouseVisible = true;
      
      entr_ans_tr.setText('');
      entr_ans_tr.refresh();
      // reset button_entr_ans_tr to account for continued clicks & clear times on/off
      button_entr_ans_tr.reset()
      psychoJS.experiment.addData('tr_3.started', globalClock.getTime());
      tr_3MaxDuration = null
      // keep track of which components have finished
      tr_3Components = [];
      tr_3Components.push(entr_ans_txt_tr);
      tr_3Components.push(entr_ans_tr);
      tr_3Components.push(button_entr_ans_tr);
      
      for (const thisComponent of tr_3Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function tr_3RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'tr_3' ---
      // get current time
      t = tr_3Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      // Run 'Each Frame' code from code_9
      if ((entr_ans_tr.text && entr_ans_tr.text.trim())) {
          button_entr_ans_tr.setAutoDraw(true);
      } else {
          button_entr_ans_tr.setAutoDraw(false);
      }
      
      
      // *entr_ans_txt_tr* updates
      if (t >= 0.0 && entr_ans_txt_tr.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        entr_ans_txt_tr.tStart = t;  // (not accounting for frame time here)
        entr_ans_txt_tr.frameNStart = frameN;  // exact frame index
        
        entr_ans_txt_tr.setAutoDraw(true);
      }
      
      
      // if entr_ans_txt_tr is active this frame...
      if (entr_ans_txt_tr.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *entr_ans_tr* updates
      if (t >= 0.0 && entr_ans_tr.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        entr_ans_tr.tStart = t;  // (not accounting for frame time here)
        entr_ans_tr.frameNStart = frameN;  // exact frame index
        
        entr_ans_tr.setAutoDraw(true);
      }
      
      
      // if entr_ans_tr is active this frame...
      if (entr_ans_tr.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *button_entr_ans_tr* updates
      
      // if button_entr_ans_tr is active this frame...
      if (button_entr_ans_tr.status === PsychoJS.Status.STARTED) {
      }
      
      if (button_entr_ans_tr.status === PsychoJS.Status.STARTED) {
        // check whether button_entr_ans_tr has been pressed
        if (button_entr_ans_tr.isClicked) {
          if (!button_entr_ans_tr.wasClicked) {
            // store time of first click
            button_entr_ans_tr.timesOn.push(button_entr_ans_tr.clock.getTime());
            // store time clicked until
            button_entr_ans_tr.timesOff.push(button_entr_ans_tr.clock.getTime());
          } else {
            // update time clicked until;
            button_entr_ans_tr.timesOff[button_entr_ans_tr.timesOff.length - 1] = button_entr_ans_tr.clock.getTime();
          }
          if (!button_entr_ans_tr.wasClicked) {
            // end routine when button_entr_ans_tr is clicked
            continueRoutine = false;
            
          }
          // if button_entr_ans_tr is still clicked next frame, it is not a new click
          button_entr_ans_tr.wasClicked = true;
        } else {
          // if button_entr_ans_tr is clicked next frame, it is a new click
          button_entr_ans_tr.wasClicked = false;
        }
      } else {
        // keep clock at 0 if button_entr_ans_tr hasn't started / has finished
        button_entr_ans_tr.clock.reset();
        // if button_entr_ans_tr is clicked next frame, it is a new click
        button_entr_ans_tr.wasClicked = false;
      }
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of tr_3Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function tr_3RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'tr_3' ---
      for (const thisComponent of tr_3Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('tr_3.stopped', globalClock.getTime());
      psychoJS.experiment.addData('entr_ans_tr.text',entr_ans_tr.text)
      psychoJS.experiment.addData('button_entr_ans_tr.numClicks', button_entr_ans_tr.numClicks);
      psychoJS.experiment.addData('button_entr_ans_tr.timesOn', button_entr_ans_tr.timesOn);
      psychoJS.experiment.addData('button_entr_ans_tr.timesOff', button_entr_ans_tr.timesOff);
      // the Routine "tr_3" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var tr_4MaxDurationReached;
var tr_4MaxDuration;
var tr_4Components;
function tr_4RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'tr_4' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      tr_4Clock.reset();
      routineTimer.reset();
      tr_4MaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_28
      psychoJS.window.mouseVisible = true;
      
      // reset aha_quest_tr_yes to account for continued clicks & clear times on/off
      aha_quest_tr_yes.reset()
      // reset aha_quest_tr_no to account for continued clicks & clear times on/off
      aha_quest_tr_no.reset()
      psychoJS.experiment.addData('tr_4.started', globalClock.getTime());
      tr_4MaxDuration = null
      // keep track of which components have finished
      tr_4Components = [];
      tr_4Components.push(aha_quest_tr);
      tr_4Components.push(aha_quest_tr_yes);
      tr_4Components.push(aha_quest_tr_no);
      
      for (const thisComponent of tr_4Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function tr_4RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'tr_4' ---
      // get current time
      t = tr_4Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *aha_quest_tr* updates
      if (t >= 0.0 && aha_quest_tr.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        aha_quest_tr.tStart = t;  // (not accounting for frame time here)
        aha_quest_tr.frameNStart = frameN;  // exact frame index
        
        aha_quest_tr.setAutoDraw(true);
      }
      
      
      // if aha_quest_tr is active this frame...
      if (aha_quest_tr.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *aha_quest_tr_yes* updates
      if (t >= 0.5 && aha_quest_tr_yes.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        aha_quest_tr_yes.tStart = t;  // (not accounting for frame time here)
        aha_quest_tr_yes.frameNStart = frameN;  // exact frame index
        
        aha_quest_tr_yes.setAutoDraw(true);
      }
      
      
      // if aha_quest_tr_yes is active this frame...
      if (aha_quest_tr_yes.status === PsychoJS.Status.STARTED) {
      }
      
      if (aha_quest_tr_yes.status === PsychoJS.Status.STARTED) {
        // check whether aha_quest_tr_yes has been pressed
        if (aha_quest_tr_yes.isClicked) {
          if (!aha_quest_tr_yes.wasClicked) {
            // store time of first click
            aha_quest_tr_yes.timesOn.push(aha_quest_tr_yes.clock.getTime());
            // store time clicked until
            aha_quest_tr_yes.timesOff.push(aha_quest_tr_yes.clock.getTime());
          } else {
            // update time clicked until;
            aha_quest_tr_yes.timesOff[aha_quest_tr_yes.timesOff.length - 1] = aha_quest_tr_yes.clock.getTime();
          }
          if (!aha_quest_tr_yes.wasClicked) {
            // end routine when aha_quest_tr_yes is clicked
            continueRoutine = false;
            
          }
          // if aha_quest_tr_yes is still clicked next frame, it is not a new click
          aha_quest_tr_yes.wasClicked = true;
        } else {
          // if aha_quest_tr_yes is clicked next frame, it is a new click
          aha_quest_tr_yes.wasClicked = false;
        }
      } else {
        // keep clock at 0 if aha_quest_tr_yes hasn't started / has finished
        aha_quest_tr_yes.clock.reset();
        // if aha_quest_tr_yes is clicked next frame, it is a new click
        aha_quest_tr_yes.wasClicked = false;
      }
      
      // *aha_quest_tr_no* updates
      if (t >= 0.5 && aha_quest_tr_no.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        aha_quest_tr_no.tStart = t;  // (not accounting for frame time here)
        aha_quest_tr_no.frameNStart = frameN;  // exact frame index
        
        aha_quest_tr_no.setAutoDraw(true);
      }
      
      
      // if aha_quest_tr_no is active this frame...
      if (aha_quest_tr_no.status === PsychoJS.Status.STARTED) {
      }
      
      if (aha_quest_tr_no.status === PsychoJS.Status.STARTED) {
        // check whether aha_quest_tr_no has been pressed
        if (aha_quest_tr_no.isClicked) {
          if (!aha_quest_tr_no.wasClicked) {
            // store time of first click
            aha_quest_tr_no.timesOn.push(aha_quest_tr_no.clock.getTime());
            // store time clicked until
            aha_quest_tr_no.timesOff.push(aha_quest_tr_no.clock.getTime());
          } else {
            // update time clicked until;
            aha_quest_tr_no.timesOff[aha_quest_tr_no.timesOff.length - 1] = aha_quest_tr_no.clock.getTime();
          }
          if (!aha_quest_tr_no.wasClicked) {
            // end routine when aha_quest_tr_no is clicked
            continueRoutine = false;
            
          }
          // if aha_quest_tr_no is still clicked next frame, it is not a new click
          aha_quest_tr_no.wasClicked = true;
        } else {
          // if aha_quest_tr_no is clicked next frame, it is a new click
          aha_quest_tr_no.wasClicked = false;
        }
      } else {
        // keep clock at 0 if aha_quest_tr_no hasn't started / has finished
        aha_quest_tr_no.clock.reset();
        // if aha_quest_tr_no is clicked next frame, it is a new click
        aha_quest_tr_no.wasClicked = false;
      }
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of tr_4Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function tr_4RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'tr_4' ---
      for (const thisComponent of tr_4Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('tr_4.stopped', globalClock.getTime());
      psychoJS.experiment.addData('aha_quest_tr_yes.numClicks', aha_quest_tr_yes.numClicks);
      psychoJS.experiment.addData('aha_quest_tr_yes.timesOn', aha_quest_tr_yes.timesOn);
      psychoJS.experiment.addData('aha_quest_tr_yes.timesOff', aha_quest_tr_yes.timesOff);
      psychoJS.experiment.addData('aha_quest_tr_no.numClicks', aha_quest_tr_no.numClicks);
      psychoJS.experiment.addData('aha_quest_tr_no.timesOn', aha_quest_tr_no.timesOn);
      psychoJS.experiment.addData('aha_quest_tr_no.timesOff', aha_quest_tr_no.timesOff);
      // the Routine "tr_4" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var tr_5MaxDurationReached;
var tr_5MaxDuration;
var tr_5Components;
function tr_5RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'tr_5' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      tr_5Clock.reset();
      routineTimer.reset();
      tr_5MaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_29
      psychoJS.window.mouseVisible = true;
      
      // reset conf_quest_tr_yes to account for continued clicks & clear times on/off
      conf_quest_tr_yes.reset()
      // reset conf_quest_tr_no to account for continued clicks & clear times on/off
      conf_quest_tr_no.reset()
      psychoJS.experiment.addData('tr_5.started', globalClock.getTime());
      tr_5MaxDuration = null
      // keep track of which components have finished
      tr_5Components = [];
      tr_5Components.push(conf_quest_tr);
      tr_5Components.push(conf_quest_tr_yes);
      tr_5Components.push(conf_quest_tr_no);
      
      for (const thisComponent of tr_5Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function tr_5RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'tr_5' ---
      // get current time
      t = tr_5Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *conf_quest_tr* updates
      if (t >= 0.0 && conf_quest_tr.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        conf_quest_tr.tStart = t;  // (not accounting for frame time here)
        conf_quest_tr.frameNStart = frameN;  // exact frame index
        
        conf_quest_tr.setAutoDraw(true);
      }
      
      
      // if conf_quest_tr is active this frame...
      if (conf_quest_tr.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *conf_quest_tr_yes* updates
      if (t >= 0.5 && conf_quest_tr_yes.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        conf_quest_tr_yes.tStart = t;  // (not accounting for frame time here)
        conf_quest_tr_yes.frameNStart = frameN;  // exact frame index
        
        conf_quest_tr_yes.setAutoDraw(true);
      }
      
      
      // if conf_quest_tr_yes is active this frame...
      if (conf_quest_tr_yes.status === PsychoJS.Status.STARTED) {
      }
      
      if (conf_quest_tr_yes.status === PsychoJS.Status.STARTED) {
        // check whether conf_quest_tr_yes has been pressed
        if (conf_quest_tr_yes.isClicked) {
          if (!conf_quest_tr_yes.wasClicked) {
            // store time of first click
            conf_quest_tr_yes.timesOn.push(conf_quest_tr_yes.clock.getTime());
            // store time clicked until
            conf_quest_tr_yes.timesOff.push(conf_quest_tr_yes.clock.getTime());
          } else {
            // update time clicked until;
            conf_quest_tr_yes.timesOff[conf_quest_tr_yes.timesOff.length - 1] = conf_quest_tr_yes.clock.getTime();
          }
          if (!conf_quest_tr_yes.wasClicked) {
            // end routine when conf_quest_tr_yes is clicked
            continueRoutine = false;
            
          }
          // if conf_quest_tr_yes is still clicked next frame, it is not a new click
          conf_quest_tr_yes.wasClicked = true;
        } else {
          // if conf_quest_tr_yes is clicked next frame, it is a new click
          conf_quest_tr_yes.wasClicked = false;
        }
      } else {
        // keep clock at 0 if conf_quest_tr_yes hasn't started / has finished
        conf_quest_tr_yes.clock.reset();
        // if conf_quest_tr_yes is clicked next frame, it is a new click
        conf_quest_tr_yes.wasClicked = false;
      }
      
      // *conf_quest_tr_no* updates
      if (t >= 0.5 && conf_quest_tr_no.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        conf_quest_tr_no.tStart = t;  // (not accounting for frame time here)
        conf_quest_tr_no.frameNStart = frameN;  // exact frame index
        
        conf_quest_tr_no.setAutoDraw(true);
      }
      
      
      // if conf_quest_tr_no is active this frame...
      if (conf_quest_tr_no.status === PsychoJS.Status.STARTED) {
      }
      
      if (conf_quest_tr_no.status === PsychoJS.Status.STARTED) {
        // check whether conf_quest_tr_no has been pressed
        if (conf_quest_tr_no.isClicked) {
          if (!conf_quest_tr_no.wasClicked) {
            // store time of first click
            conf_quest_tr_no.timesOn.push(conf_quest_tr_no.clock.getTime());
            // store time clicked until
            conf_quest_tr_no.timesOff.push(conf_quest_tr_no.clock.getTime());
          } else {
            // update time clicked until;
            conf_quest_tr_no.timesOff[conf_quest_tr_no.timesOff.length - 1] = conf_quest_tr_no.clock.getTime();
          }
          if (!conf_quest_tr_no.wasClicked) {
            // end routine when conf_quest_tr_no is clicked
            continueRoutine = false;
            
          }
          // if conf_quest_tr_no is still clicked next frame, it is not a new click
          conf_quest_tr_no.wasClicked = true;
        } else {
          // if conf_quest_tr_no is clicked next frame, it is a new click
          conf_quest_tr_no.wasClicked = false;
        }
      } else {
        // keep clock at 0 if conf_quest_tr_no hasn't started / has finished
        conf_quest_tr_no.clock.reset();
        // if conf_quest_tr_no is clicked next frame, it is a new click
        conf_quest_tr_no.wasClicked = false;
      }
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of tr_5Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function tr_5RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'tr_5' ---
      for (const thisComponent of tr_5Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('tr_5.stopped', globalClock.getTime());
      psychoJS.experiment.addData('conf_quest_tr_yes.numClicks', conf_quest_tr_yes.numClicks);
      psychoJS.experiment.addData('conf_quest_tr_yes.timesOn', conf_quest_tr_yes.timesOn);
      psychoJS.experiment.addData('conf_quest_tr_yes.timesOff', conf_quest_tr_yes.timesOff);
      psychoJS.experiment.addData('conf_quest_tr_no.numClicks', conf_quest_tr_no.numClicks);
      psychoJS.experiment.addData('conf_quest_tr_no.timesOn', conf_quest_tr_no.timesOn);
      psychoJS.experiment.addData('conf_quest_tr_no.timesOff', conf_quest_tr_no.timesOff);
      // the Routine "tr_5" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var tr_6MaxDurationReached;
var tr_6MaxDuration;
var tr_6Components;
function tr_6RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'tr_6' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      tr_6Clock.reset();
      routineTimer.reset();
      tr_6MaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_10
      psychoJS.window.mouseVisible = true;
      
      sen_txt_tr.setText(("\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435: " + sen_tr));
      right_ans_txt_tr.setText(("\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442: " + ans_tr));
      right_ans_quest_tr.setText('Совпал ли Ваш ответ с правильным?');
      // reset right_ans_quest_tr_yes to account for continued clicks & clear times on/off
      right_ans_quest_tr_yes.reset()
      // reset right_ans_quest_tr_no to account for continued clicks & clear times on/off
      right_ans_quest_tr_no.reset()
      psychoJS.experiment.addData('tr_6.started', globalClock.getTime());
      tr_6MaxDuration = null
      // keep track of which components have finished
      tr_6Components = [];
      tr_6Components.push(sen_txt_tr);
      tr_6Components.push(right_ans_txt_tr);
      tr_6Components.push(right_ans_quest_tr);
      tr_6Components.push(right_ans_quest_tr_yes);
      tr_6Components.push(right_ans_quest_tr_no);
      
      for (const thisComponent of tr_6Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function tr_6RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'tr_6' ---
      // get current time
      t = tr_6Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *sen_txt_tr* updates
      if (t >= 0.0 && sen_txt_tr.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        sen_txt_tr.tStart = t;  // (not accounting for frame time here)
        sen_txt_tr.frameNStart = frameN;  // exact frame index
        
        sen_txt_tr.setAutoDraw(true);
      }
      
      
      // if sen_txt_tr is active this frame...
      if (sen_txt_tr.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *right_ans_txt_tr* updates
      if (t >= 0.0 && right_ans_txt_tr.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        right_ans_txt_tr.tStart = t;  // (not accounting for frame time here)
        right_ans_txt_tr.frameNStart = frameN;  // exact frame index
        
        right_ans_txt_tr.setAutoDraw(true);
      }
      
      
      // if right_ans_txt_tr is active this frame...
      if (right_ans_txt_tr.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *right_ans_quest_tr* updates
      if (t >= 0.0 && right_ans_quest_tr.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        right_ans_quest_tr.tStart = t;  // (not accounting for frame time here)
        right_ans_quest_tr.frameNStart = frameN;  // exact frame index
        
        right_ans_quest_tr.setAutoDraw(true);
      }
      
      
      // if right_ans_quest_tr is active this frame...
      if (right_ans_quest_tr.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *right_ans_quest_tr_yes* updates
      if (t >= 0.5 && right_ans_quest_tr_yes.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        right_ans_quest_tr_yes.tStart = t;  // (not accounting for frame time here)
        right_ans_quest_tr_yes.frameNStart = frameN;  // exact frame index
        
        right_ans_quest_tr_yes.setAutoDraw(true);
      }
      
      
      // if right_ans_quest_tr_yes is active this frame...
      if (right_ans_quest_tr_yes.status === PsychoJS.Status.STARTED) {
      }
      
      if (right_ans_quest_tr_yes.status === PsychoJS.Status.STARTED) {
        // check whether right_ans_quest_tr_yes has been pressed
        if (right_ans_quest_tr_yes.isClicked) {
          if (!right_ans_quest_tr_yes.wasClicked) {
            // store time of first click
            right_ans_quest_tr_yes.timesOn.push(right_ans_quest_tr_yes.clock.getTime());
            // store time clicked until
            right_ans_quest_tr_yes.timesOff.push(right_ans_quest_tr_yes.clock.getTime());
          } else {
            // update time clicked until;
            right_ans_quest_tr_yes.timesOff[right_ans_quest_tr_yes.timesOff.length - 1] = right_ans_quest_tr_yes.clock.getTime();
          }
          if (!right_ans_quest_tr_yes.wasClicked) {
            // end routine when right_ans_quest_tr_yes is clicked
            continueRoutine = false;
            
          }
          // if right_ans_quest_tr_yes is still clicked next frame, it is not a new click
          right_ans_quest_tr_yes.wasClicked = true;
        } else {
          // if right_ans_quest_tr_yes is clicked next frame, it is a new click
          right_ans_quest_tr_yes.wasClicked = false;
        }
      } else {
        // keep clock at 0 if right_ans_quest_tr_yes hasn't started / has finished
        right_ans_quest_tr_yes.clock.reset();
        // if right_ans_quest_tr_yes is clicked next frame, it is a new click
        right_ans_quest_tr_yes.wasClicked = false;
      }
      
      // *right_ans_quest_tr_no* updates
      if (t >= 0.5 && right_ans_quest_tr_no.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        right_ans_quest_tr_no.tStart = t;  // (not accounting for frame time here)
        right_ans_quest_tr_no.frameNStart = frameN;  // exact frame index
        
        right_ans_quest_tr_no.setAutoDraw(true);
      }
      
      
      // if right_ans_quest_tr_no is active this frame...
      if (right_ans_quest_tr_no.status === PsychoJS.Status.STARTED) {
      }
      
      if (right_ans_quest_tr_no.status === PsychoJS.Status.STARTED) {
        // check whether right_ans_quest_tr_no has been pressed
        if (right_ans_quest_tr_no.isClicked) {
          if (!right_ans_quest_tr_no.wasClicked) {
            // store time of first click
            right_ans_quest_tr_no.timesOn.push(right_ans_quest_tr_no.clock.getTime());
            // store time clicked until
            right_ans_quest_tr_no.timesOff.push(right_ans_quest_tr_no.clock.getTime());
          } else {
            // update time clicked until;
            right_ans_quest_tr_no.timesOff[right_ans_quest_tr_no.timesOff.length - 1] = right_ans_quest_tr_no.clock.getTime();
          }
          if (!right_ans_quest_tr_no.wasClicked) {
            // end routine when right_ans_quest_tr_no is clicked
            continueRoutine = false;
            
          }
          // if right_ans_quest_tr_no is still clicked next frame, it is not a new click
          right_ans_quest_tr_no.wasClicked = true;
        } else {
          // if right_ans_quest_tr_no is clicked next frame, it is a new click
          right_ans_quest_tr_no.wasClicked = false;
        }
      } else {
        // keep clock at 0 if right_ans_quest_tr_no hasn't started / has finished
        right_ans_quest_tr_no.clock.reset();
        // if right_ans_quest_tr_no is clicked next frame, it is a new click
        right_ans_quest_tr_no.wasClicked = false;
      }
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of tr_6Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function tr_6RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'tr_6' ---
      for (const thisComponent of tr_6Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('tr_6.stopped', globalClock.getTime());
      // Run 'End Routine' code from code_10
      if (right_ans_quest_tr_yes.isClicked) {
          trials_10.finished = true;
      }
      if (right_ans_quest_tr_no.isClicked) {
          nTr14 = 1;
      }
      
      psychoJS.experiment.addData('right_ans_quest_tr_yes.numClicks', right_ans_quest_tr_yes.numClicks);
      psychoJS.experiment.addData('right_ans_quest_tr_yes.timesOn', right_ans_quest_tr_yes.timesOn);
      psychoJS.experiment.addData('right_ans_quest_tr_yes.timesOff', right_ans_quest_tr_yes.timesOff);
      psychoJS.experiment.addData('right_ans_quest_tr_no.numClicks', right_ans_quest_tr_no.numClicks);
      psychoJS.experiment.addData('right_ans_quest_tr_no.timesOn', right_ans_quest_tr_no.timesOn);
      psychoJS.experiment.addData('right_ans_quest_tr_no.timesOff', right_ans_quest_tr_no.timesOff);
      // the Routine "tr_6" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var tr_7MaxDurationReached;
var tr_7MaxDuration;
var tr_7Components;
function tr_7RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'tr_7' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      tr_7Clock.reset();
      routineTimer.reset();
      tr_7MaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_30
      psychoJS.window.mouseVisible = true;
      
      // reset ind_aha_quest_tr_yes to account for continued clicks & clear times on/off
      ind_aha_quest_tr_yes.reset()
      // reset ind_aha_quest_tr_no to account for continued clicks & clear times on/off
      ind_aha_quest_tr_no.reset()
      // reset ind_aha_quest_tr_dont_und to account for continued clicks & clear times on/off
      ind_aha_quest_tr_dont_und.reset()
      psychoJS.experiment.addData('tr_7.started', globalClock.getTime());
      tr_7MaxDuration = null
      // keep track of which components have finished
      tr_7Components = [];
      tr_7Components.push(ind_aha_quest_tr);
      tr_7Components.push(ind_aha_quest_tr_yes);
      tr_7Components.push(ind_aha_quest_tr_no);
      tr_7Components.push(ind_aha_quest_tr_dont_und);
      
      for (const thisComponent of tr_7Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function tr_7RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'tr_7' ---
      // get current time
      t = tr_7Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *ind_aha_quest_tr* updates
      if (t >= 0.0 && ind_aha_quest_tr.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        ind_aha_quest_tr.tStart = t;  // (not accounting for frame time here)
        ind_aha_quest_tr.frameNStart = frameN;  // exact frame index
        
        ind_aha_quest_tr.setAutoDraw(true);
      }
      
      
      // if ind_aha_quest_tr is active this frame...
      if (ind_aha_quest_tr.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *ind_aha_quest_tr_yes* updates
      if (t >= 0.5 && ind_aha_quest_tr_yes.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        ind_aha_quest_tr_yes.tStart = t;  // (not accounting for frame time here)
        ind_aha_quest_tr_yes.frameNStart = frameN;  // exact frame index
        
        ind_aha_quest_tr_yes.setAutoDraw(true);
      }
      
      
      // if ind_aha_quest_tr_yes is active this frame...
      if (ind_aha_quest_tr_yes.status === PsychoJS.Status.STARTED) {
      }
      
      if (ind_aha_quest_tr_yes.status === PsychoJS.Status.STARTED) {
        // check whether ind_aha_quest_tr_yes has been pressed
        if (ind_aha_quest_tr_yes.isClicked) {
          if (!ind_aha_quest_tr_yes.wasClicked) {
            // store time of first click
            ind_aha_quest_tr_yes.timesOn.push(ind_aha_quest_tr_yes.clock.getTime());
            // store time clicked until
            ind_aha_quest_tr_yes.timesOff.push(ind_aha_quest_tr_yes.clock.getTime());
          } else {
            // update time clicked until;
            ind_aha_quest_tr_yes.timesOff[ind_aha_quest_tr_yes.timesOff.length - 1] = ind_aha_quest_tr_yes.clock.getTime();
          }
          if (!ind_aha_quest_tr_yes.wasClicked) {
            // end routine when ind_aha_quest_tr_yes is clicked
            continueRoutine = false;
            
          }
          // if ind_aha_quest_tr_yes is still clicked next frame, it is not a new click
          ind_aha_quest_tr_yes.wasClicked = true;
        } else {
          // if ind_aha_quest_tr_yes is clicked next frame, it is a new click
          ind_aha_quest_tr_yes.wasClicked = false;
        }
      } else {
        // keep clock at 0 if ind_aha_quest_tr_yes hasn't started / has finished
        ind_aha_quest_tr_yes.clock.reset();
        // if ind_aha_quest_tr_yes is clicked next frame, it is a new click
        ind_aha_quest_tr_yes.wasClicked = false;
      }
      
      // *ind_aha_quest_tr_no* updates
      if (t >= 0.5 && ind_aha_quest_tr_no.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        ind_aha_quest_tr_no.tStart = t;  // (not accounting for frame time here)
        ind_aha_quest_tr_no.frameNStart = frameN;  // exact frame index
        
        ind_aha_quest_tr_no.setAutoDraw(true);
      }
      
      
      // if ind_aha_quest_tr_no is active this frame...
      if (ind_aha_quest_tr_no.status === PsychoJS.Status.STARTED) {
      }
      
      if (ind_aha_quest_tr_no.status === PsychoJS.Status.STARTED) {
        // check whether ind_aha_quest_tr_no has been pressed
        if (ind_aha_quest_tr_no.isClicked) {
          if (!ind_aha_quest_tr_no.wasClicked) {
            // store time of first click
            ind_aha_quest_tr_no.timesOn.push(ind_aha_quest_tr_no.clock.getTime());
            // store time clicked until
            ind_aha_quest_tr_no.timesOff.push(ind_aha_quest_tr_no.clock.getTime());
          } else {
            // update time clicked until;
            ind_aha_quest_tr_no.timesOff[ind_aha_quest_tr_no.timesOff.length - 1] = ind_aha_quest_tr_no.clock.getTime();
          }
          if (!ind_aha_quest_tr_no.wasClicked) {
            // end routine when ind_aha_quest_tr_no is clicked
            continueRoutine = false;
            
          }
          // if ind_aha_quest_tr_no is still clicked next frame, it is not a new click
          ind_aha_quest_tr_no.wasClicked = true;
        } else {
          // if ind_aha_quest_tr_no is clicked next frame, it is a new click
          ind_aha_quest_tr_no.wasClicked = false;
        }
      } else {
        // keep clock at 0 if ind_aha_quest_tr_no hasn't started / has finished
        ind_aha_quest_tr_no.clock.reset();
        // if ind_aha_quest_tr_no is clicked next frame, it is a new click
        ind_aha_quest_tr_no.wasClicked = false;
      }
      
      // *ind_aha_quest_tr_dont_und* updates
      if (t >= 0.5 && ind_aha_quest_tr_dont_und.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        ind_aha_quest_tr_dont_und.tStart = t;  // (not accounting for frame time here)
        ind_aha_quest_tr_dont_und.frameNStart = frameN;  // exact frame index
        
        ind_aha_quest_tr_dont_und.setAutoDraw(true);
      }
      
      
      // if ind_aha_quest_tr_dont_und is active this frame...
      if (ind_aha_quest_tr_dont_und.status === PsychoJS.Status.STARTED) {
      }
      
      if (ind_aha_quest_tr_dont_und.status === PsychoJS.Status.STARTED) {
        // check whether ind_aha_quest_tr_dont_und has been pressed
        if (ind_aha_quest_tr_dont_und.isClicked) {
          if (!ind_aha_quest_tr_dont_und.wasClicked) {
            // store time of first click
            ind_aha_quest_tr_dont_und.timesOn.push(ind_aha_quest_tr_dont_und.clock.getTime());
            // store time clicked until
            ind_aha_quest_tr_dont_und.timesOff.push(ind_aha_quest_tr_dont_und.clock.getTime());
          } else {
            // update time clicked until;
            ind_aha_quest_tr_dont_und.timesOff[ind_aha_quest_tr_dont_und.timesOff.length - 1] = ind_aha_quest_tr_dont_und.clock.getTime();
          }
          if (!ind_aha_quest_tr_dont_und.wasClicked) {
            // end routine when ind_aha_quest_tr_dont_und is clicked
            continueRoutine = false;
            
          }
          // if ind_aha_quest_tr_dont_und is still clicked next frame, it is not a new click
          ind_aha_quest_tr_dont_und.wasClicked = true;
        } else {
          // if ind_aha_quest_tr_dont_und is clicked next frame, it is a new click
          ind_aha_quest_tr_dont_und.wasClicked = false;
        }
      } else {
        // keep clock at 0 if ind_aha_quest_tr_dont_und hasn't started / has finished
        ind_aha_quest_tr_dont_und.clock.reset();
        // if ind_aha_quest_tr_dont_und is clicked next frame, it is a new click
        ind_aha_quest_tr_dont_und.wasClicked = false;
      }
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of tr_7Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function tr_7RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'tr_7' ---
      for (const thisComponent of tr_7Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('tr_7.stopped', globalClock.getTime());
      // Run 'End Routine' code from code_30
      if (ind_aha_quest_tr_dont_und.isClicked) {
          nTr16 = 0;
      } else {
          nTr16 = 1;
      }
      
      psychoJS.experiment.addData('ind_aha_quest_tr_yes.numClicks', ind_aha_quest_tr_yes.numClicks);
      psychoJS.experiment.addData('ind_aha_quest_tr_yes.timesOn', ind_aha_quest_tr_yes.timesOn);
      psychoJS.experiment.addData('ind_aha_quest_tr_yes.timesOff', ind_aha_quest_tr_yes.timesOff);
      psychoJS.experiment.addData('ind_aha_quest_tr_no.numClicks', ind_aha_quest_tr_no.numClicks);
      psychoJS.experiment.addData('ind_aha_quest_tr_no.timesOn', ind_aha_quest_tr_no.timesOn);
      psychoJS.experiment.addData('ind_aha_quest_tr_no.timesOff', ind_aha_quest_tr_no.timesOff);
      psychoJS.experiment.addData('ind_aha_quest_tr_dont_und.numClicks', ind_aha_quest_tr_dont_und.numClicks);
      psychoJS.experiment.addData('ind_aha_quest_tr_dont_und.timesOn', ind_aha_quest_tr_dont_und.timesOn);
      psychoJS.experiment.addData('ind_aha_quest_tr_dont_und.timesOff', ind_aha_quest_tr_dont_und.timesOff);
      // the Routine "tr_7" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var routine_1MaxDurationReached;
var routine_1MaxDuration;
var routine_1Components;
function routine_1RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'routine_1' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      routine_1Clock.reset();
      routineTimer.reset();
      routine_1MaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_45
      psychoJS.window.mouseVisible = true;
      
      // reset like_quest_tr_yes to account for continued clicks & clear times on/off
      like_quest_tr_yes.reset()
      // reset like_quest_tr_no to account for continued clicks & clear times on/off
      like_quest_tr_no.reset()
      psychoJS.experiment.addData('routine_1.started', globalClock.getTime());
      routine_1MaxDuration = null
      // keep track of which components have finished
      routine_1Components = [];
      routine_1Components.push(like_quest_tr);
      routine_1Components.push(like_quest_tr_yes);
      routine_1Components.push(like_quest_tr_no);
      
      for (const thisComponent of routine_1Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function routine_1RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'routine_1' ---
      // get current time
      t = routine_1Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *like_quest_tr* updates
      if (t >= 0.0 && like_quest_tr.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        like_quest_tr.tStart = t;  // (not accounting for frame time here)
        like_quest_tr.frameNStart = frameN;  // exact frame index
        
        like_quest_tr.setAutoDraw(true);
      }
      
      
      // if like_quest_tr is active this frame...
      if (like_quest_tr.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *like_quest_tr_yes* updates
      if (t >= 0.5 && like_quest_tr_yes.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        like_quest_tr_yes.tStart = t;  // (not accounting for frame time here)
        like_quest_tr_yes.frameNStart = frameN;  // exact frame index
        
        like_quest_tr_yes.setAutoDraw(true);
      }
      
      
      // if like_quest_tr_yes is active this frame...
      if (like_quest_tr_yes.status === PsychoJS.Status.STARTED) {
      }
      
      if (like_quest_tr_yes.status === PsychoJS.Status.STARTED) {
        // check whether like_quest_tr_yes has been pressed
        if (like_quest_tr_yes.isClicked) {
          if (!like_quest_tr_yes.wasClicked) {
            // store time of first click
            like_quest_tr_yes.timesOn.push(like_quest_tr_yes.clock.getTime());
            // store time clicked until
            like_quest_tr_yes.timesOff.push(like_quest_tr_yes.clock.getTime());
          } else {
            // update time clicked until;
            like_quest_tr_yes.timesOff[like_quest_tr_yes.timesOff.length - 1] = like_quest_tr_yes.clock.getTime();
          }
          if (!like_quest_tr_yes.wasClicked) {
            // end routine when like_quest_tr_yes is clicked
            continueRoutine = false;
            
          }
          // if like_quest_tr_yes is still clicked next frame, it is not a new click
          like_quest_tr_yes.wasClicked = true;
        } else {
          // if like_quest_tr_yes is clicked next frame, it is a new click
          like_quest_tr_yes.wasClicked = false;
        }
      } else {
        // keep clock at 0 if like_quest_tr_yes hasn't started / has finished
        like_quest_tr_yes.clock.reset();
        // if like_quest_tr_yes is clicked next frame, it is a new click
        like_quest_tr_yes.wasClicked = false;
      }
      
      // *like_quest_tr_no* updates
      if (t >= 0.5 && like_quest_tr_no.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        like_quest_tr_no.tStart = t;  // (not accounting for frame time here)
        like_quest_tr_no.frameNStart = frameN;  // exact frame index
        
        like_quest_tr_no.setAutoDraw(true);
      }
      
      
      // if like_quest_tr_no is active this frame...
      if (like_quest_tr_no.status === PsychoJS.Status.STARTED) {
      }
      
      if (like_quest_tr_no.status === PsychoJS.Status.STARTED) {
        // check whether like_quest_tr_no has been pressed
        if (like_quest_tr_no.isClicked) {
          if (!like_quest_tr_no.wasClicked) {
            // store time of first click
            like_quest_tr_no.timesOn.push(like_quest_tr_no.clock.getTime());
            // store time clicked until
            like_quest_tr_no.timesOff.push(like_quest_tr_no.clock.getTime());
          } else {
            // update time clicked until;
            like_quest_tr_no.timesOff[like_quest_tr_no.timesOff.length - 1] = like_quest_tr_no.clock.getTime();
          }
          if (!like_quest_tr_no.wasClicked) {
            // end routine when like_quest_tr_no is clicked
            continueRoutine = false;
            
          }
          // if like_quest_tr_no is still clicked next frame, it is not a new click
          like_quest_tr_no.wasClicked = true;
        } else {
          // if like_quest_tr_no is clicked next frame, it is a new click
          like_quest_tr_no.wasClicked = false;
        }
      } else {
        // keep clock at 0 if like_quest_tr_no hasn't started / has finished
        like_quest_tr_no.clock.reset();
        // if like_quest_tr_no is clicked next frame, it is a new click
        like_quest_tr_no.wasClicked = false;
      }
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of routine_1Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function routine_1RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'routine_1' ---
      for (const thisComponent of routine_1Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('routine_1.stopped', globalClock.getTime());
      psychoJS.experiment.addData('like_quest_tr_yes.numClicks', like_quest_tr_yes.numClicks);
      psychoJS.experiment.addData('like_quest_tr_yes.timesOn', like_quest_tr_yes.timesOn);
      psychoJS.experiment.addData('like_quest_tr_yes.timesOff', like_quest_tr_yes.timesOff);
      psychoJS.experiment.addData('like_quest_tr_no.numClicks', like_quest_tr_no.numClicks);
      psychoJS.experiment.addData('like_quest_tr_no.timesOn', like_quest_tr_no.timesOn);
      psychoJS.experiment.addData('like_quest_tr_no.timesOff', like_quest_tr_no.timesOff);
      // the Routine "routine_1" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var tr_8MaxDurationReached;
var tr_8MaxDuration;
var tr_8Components;
function tr_8RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'tr_8' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      tr_8Clock.reset();
      routineTimer.reset();
      tr_8MaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_31
      psychoJS.window.mouseVisible = true;
      
      sen_txt_wout_ans_tr.setText(("\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435: " + sen_tr));
      right_ans_wout_ans_txt_tr.setText(("\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442: " + ans_tr));
      right_ans_quest_wout_ans_tr.setText('Было ли у Вас “Ага-переживание” при знакомстве с ответом?');
      // reset right_ans_quest_wout_ans_tr_yes to account for continued clicks & clear times on/off
      right_ans_quest_wout_ans_tr_yes.reset()
      // reset right_ans_quest_wout_ans_tr_no to account for continued clicks & clear times on/off
      right_ans_quest_wout_ans_tr_no.reset()
      // reset right_ans_quest_wout_ans_tr_dont_und to account for continued clicks & clear times on/off
      right_ans_quest_wout_ans_tr_dont_und.reset()
      psychoJS.experiment.addData('tr_8.started', globalClock.getTime());
      tr_8MaxDuration = null
      // keep track of which components have finished
      tr_8Components = [];
      tr_8Components.push(sen_txt_wout_ans_tr);
      tr_8Components.push(right_ans_wout_ans_txt_tr);
      tr_8Components.push(right_ans_quest_wout_ans_tr);
      tr_8Components.push(right_ans_quest_wout_ans_tr_yes);
      tr_8Components.push(right_ans_quest_wout_ans_tr_no);
      tr_8Components.push(right_ans_quest_wout_ans_tr_dont_und);
      
      for (const thisComponent of tr_8Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function tr_8RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'tr_8' ---
      // get current time
      t = tr_8Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *sen_txt_wout_ans_tr* updates
      if (t >= 0.0 && sen_txt_wout_ans_tr.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        sen_txt_wout_ans_tr.tStart = t;  // (not accounting for frame time here)
        sen_txt_wout_ans_tr.frameNStart = frameN;  // exact frame index
        
        sen_txt_wout_ans_tr.setAutoDraw(true);
      }
      
      
      // if sen_txt_wout_ans_tr is active this frame...
      if (sen_txt_wout_ans_tr.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *right_ans_wout_ans_txt_tr* updates
      if (t >= 0.0 && right_ans_wout_ans_txt_tr.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        right_ans_wout_ans_txt_tr.tStart = t;  // (not accounting for frame time here)
        right_ans_wout_ans_txt_tr.frameNStart = frameN;  // exact frame index
        
        right_ans_wout_ans_txt_tr.setAutoDraw(true);
      }
      
      
      // if right_ans_wout_ans_txt_tr is active this frame...
      if (right_ans_wout_ans_txt_tr.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *right_ans_quest_wout_ans_tr* updates
      if (t >= 0.0 && right_ans_quest_wout_ans_tr.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        right_ans_quest_wout_ans_tr.tStart = t;  // (not accounting for frame time here)
        right_ans_quest_wout_ans_tr.frameNStart = frameN;  // exact frame index
        
        right_ans_quest_wout_ans_tr.setAutoDraw(true);
      }
      
      
      // if right_ans_quest_wout_ans_tr is active this frame...
      if (right_ans_quest_wout_ans_tr.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *right_ans_quest_wout_ans_tr_yes* updates
      if (t >= 0.5 && right_ans_quest_wout_ans_tr_yes.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        right_ans_quest_wout_ans_tr_yes.tStart = t;  // (not accounting for frame time here)
        right_ans_quest_wout_ans_tr_yes.frameNStart = frameN;  // exact frame index
        
        right_ans_quest_wout_ans_tr_yes.setAutoDraw(true);
      }
      
      
      // if right_ans_quest_wout_ans_tr_yes is active this frame...
      if (right_ans_quest_wout_ans_tr_yes.status === PsychoJS.Status.STARTED) {
      }
      
      if (right_ans_quest_wout_ans_tr_yes.status === PsychoJS.Status.STARTED) {
        // check whether right_ans_quest_wout_ans_tr_yes has been pressed
        if (right_ans_quest_wout_ans_tr_yes.isClicked) {
          if (!right_ans_quest_wout_ans_tr_yes.wasClicked) {
            // store time of first click
            right_ans_quest_wout_ans_tr_yes.timesOn.push(right_ans_quest_wout_ans_tr_yes.clock.getTime());
            // store time clicked until
            right_ans_quest_wout_ans_tr_yes.timesOff.push(right_ans_quest_wout_ans_tr_yes.clock.getTime());
          } else {
            // update time clicked until;
            right_ans_quest_wout_ans_tr_yes.timesOff[right_ans_quest_wout_ans_tr_yes.timesOff.length - 1] = right_ans_quest_wout_ans_tr_yes.clock.getTime();
          }
          if (!right_ans_quest_wout_ans_tr_yes.wasClicked) {
            // end routine when right_ans_quest_wout_ans_tr_yes is clicked
            continueRoutine = false;
            
          }
          // if right_ans_quest_wout_ans_tr_yes is still clicked next frame, it is not a new click
          right_ans_quest_wout_ans_tr_yes.wasClicked = true;
        } else {
          // if right_ans_quest_wout_ans_tr_yes is clicked next frame, it is a new click
          right_ans_quest_wout_ans_tr_yes.wasClicked = false;
        }
      } else {
        // keep clock at 0 if right_ans_quest_wout_ans_tr_yes hasn't started / has finished
        right_ans_quest_wout_ans_tr_yes.clock.reset();
        // if right_ans_quest_wout_ans_tr_yes is clicked next frame, it is a new click
        right_ans_quest_wout_ans_tr_yes.wasClicked = false;
      }
      
      // *right_ans_quest_wout_ans_tr_no* updates
      if (t >= 0.5 && right_ans_quest_wout_ans_tr_no.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        right_ans_quest_wout_ans_tr_no.tStart = t;  // (not accounting for frame time here)
        right_ans_quest_wout_ans_tr_no.frameNStart = frameN;  // exact frame index
        
        right_ans_quest_wout_ans_tr_no.setAutoDraw(true);
      }
      
      
      // if right_ans_quest_wout_ans_tr_no is active this frame...
      if (right_ans_quest_wout_ans_tr_no.status === PsychoJS.Status.STARTED) {
      }
      
      if (right_ans_quest_wout_ans_tr_no.status === PsychoJS.Status.STARTED) {
        // check whether right_ans_quest_wout_ans_tr_no has been pressed
        if (right_ans_quest_wout_ans_tr_no.isClicked) {
          if (!right_ans_quest_wout_ans_tr_no.wasClicked) {
            // store time of first click
            right_ans_quest_wout_ans_tr_no.timesOn.push(right_ans_quest_wout_ans_tr_no.clock.getTime());
            // store time clicked until
            right_ans_quest_wout_ans_tr_no.timesOff.push(right_ans_quest_wout_ans_tr_no.clock.getTime());
          } else {
            // update time clicked until;
            right_ans_quest_wout_ans_tr_no.timesOff[right_ans_quest_wout_ans_tr_no.timesOff.length - 1] = right_ans_quest_wout_ans_tr_no.clock.getTime();
          }
          if (!right_ans_quest_wout_ans_tr_no.wasClicked) {
            // end routine when right_ans_quest_wout_ans_tr_no is clicked
            continueRoutine = false;
            
          }
          // if right_ans_quest_wout_ans_tr_no is still clicked next frame, it is not a new click
          right_ans_quest_wout_ans_tr_no.wasClicked = true;
        } else {
          // if right_ans_quest_wout_ans_tr_no is clicked next frame, it is a new click
          right_ans_quest_wout_ans_tr_no.wasClicked = false;
        }
      } else {
        // keep clock at 0 if right_ans_quest_wout_ans_tr_no hasn't started / has finished
        right_ans_quest_wout_ans_tr_no.clock.reset();
        // if right_ans_quest_wout_ans_tr_no is clicked next frame, it is a new click
        right_ans_quest_wout_ans_tr_no.wasClicked = false;
      }
      
      // *right_ans_quest_wout_ans_tr_dont_und* updates
      if (t >= 0.5 && right_ans_quest_wout_ans_tr_dont_und.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        right_ans_quest_wout_ans_tr_dont_und.tStart = t;  // (not accounting for frame time here)
        right_ans_quest_wout_ans_tr_dont_und.frameNStart = frameN;  // exact frame index
        
        right_ans_quest_wout_ans_tr_dont_und.setAutoDraw(true);
      }
      
      
      // if right_ans_quest_wout_ans_tr_dont_und is active this frame...
      if (right_ans_quest_wout_ans_tr_dont_und.status === PsychoJS.Status.STARTED) {
      }
      
      if (right_ans_quest_wout_ans_tr_dont_und.status === PsychoJS.Status.STARTED) {
        // check whether right_ans_quest_wout_ans_tr_dont_und has been pressed
        if (right_ans_quest_wout_ans_tr_dont_und.isClicked) {
          if (!right_ans_quest_wout_ans_tr_dont_und.wasClicked) {
            // store time of first click
            right_ans_quest_wout_ans_tr_dont_und.timesOn.push(right_ans_quest_wout_ans_tr_dont_und.clock.getTime());
            // store time clicked until
            right_ans_quest_wout_ans_tr_dont_und.timesOff.push(right_ans_quest_wout_ans_tr_dont_und.clock.getTime());
          } else {
            // update time clicked until;
            right_ans_quest_wout_ans_tr_dont_und.timesOff[right_ans_quest_wout_ans_tr_dont_und.timesOff.length - 1] = right_ans_quest_wout_ans_tr_dont_und.clock.getTime();
          }
          if (!right_ans_quest_wout_ans_tr_dont_und.wasClicked) {
            // end routine when right_ans_quest_wout_ans_tr_dont_und is clicked
            continueRoutine = false;
            
          }
          // if right_ans_quest_wout_ans_tr_dont_und is still clicked next frame, it is not a new click
          right_ans_quest_wout_ans_tr_dont_und.wasClicked = true;
        } else {
          // if right_ans_quest_wout_ans_tr_dont_und is clicked next frame, it is a new click
          right_ans_quest_wout_ans_tr_dont_und.wasClicked = false;
        }
      } else {
        // keep clock at 0 if right_ans_quest_wout_ans_tr_dont_und hasn't started / has finished
        right_ans_quest_wout_ans_tr_dont_und.clock.reset();
        // if right_ans_quest_wout_ans_tr_dont_und is clicked next frame, it is a new click
        right_ans_quest_wout_ans_tr_dont_und.wasClicked = false;
      }
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of tr_8Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function tr_8RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'tr_8' ---
      for (const thisComponent of tr_8Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('tr_8.stopped', globalClock.getTime());
      // Run 'End Routine' code from code_31
      if (right_ans_quest_wout_ans_tr_dont_und.isClicked) {
          nTr16 = 0;
      } else {
          nTr16 = 1;
      }
      
      psychoJS.experiment.addData('right_ans_quest_wout_ans_tr_yes.numClicks', right_ans_quest_wout_ans_tr_yes.numClicks);
      psychoJS.experiment.addData('right_ans_quest_wout_ans_tr_yes.timesOn', right_ans_quest_wout_ans_tr_yes.timesOn);
      psychoJS.experiment.addData('right_ans_quest_wout_ans_tr_yes.timesOff', right_ans_quest_wout_ans_tr_yes.timesOff);
      psychoJS.experiment.addData('right_ans_quest_wout_ans_tr_no.numClicks', right_ans_quest_wout_ans_tr_no.numClicks);
      psychoJS.experiment.addData('right_ans_quest_wout_ans_tr_no.timesOn', right_ans_quest_wout_ans_tr_no.timesOn);
      psychoJS.experiment.addData('right_ans_quest_wout_ans_tr_no.timesOff', right_ans_quest_wout_ans_tr_no.timesOff);
      psychoJS.experiment.addData('right_ans_quest_wout_ans_tr_dont_und.numClicks', right_ans_quest_wout_ans_tr_dont_und.numClicks);
      psychoJS.experiment.addData('right_ans_quest_wout_ans_tr_dont_und.timesOn', right_ans_quest_wout_ans_tr_dont_und.timesOn);
      psychoJS.experiment.addData('right_ans_quest_wout_ans_tr_dont_und.timesOff', right_ans_quest_wout_ans_tr_dont_und.timesOff);
      // the Routine "tr_8" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var routineMaxDurationReached;
var routineMaxDuration;
var routineComponents;
function routineRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'routine' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      routineClock.reset();
      routineTimer.reset();
      routineMaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_46
      psychoJS.window.mouseVisible = true;
      
      // reset like_quest_wout_ans_tr_yes to account for continued clicks & clear times on/off
      like_quest_wout_ans_tr_yes.reset()
      // reset like_quest_wout_ans_tr_no to account for continued clicks & clear times on/off
      like_quest_wout_ans_tr_no.reset()
      psychoJS.experiment.addData('routine.started', globalClock.getTime());
      routineMaxDuration = null
      // keep track of which components have finished
      routineComponents = [];
      routineComponents.push(like_quest_tr_2);
      routineComponents.push(like_quest_wout_ans_tr_yes);
      routineComponents.push(like_quest_wout_ans_tr_no);
      
      for (const thisComponent of routineComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function routineRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'routine' ---
      // get current time
      t = routineClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *like_quest_tr_2* updates
      if (t >= 0.0 && like_quest_tr_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        like_quest_tr_2.tStart = t;  // (not accounting for frame time here)
        like_quest_tr_2.frameNStart = frameN;  // exact frame index
        
        like_quest_tr_2.setAutoDraw(true);
      }
      
      
      // if like_quest_tr_2 is active this frame...
      if (like_quest_tr_2.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *like_quest_wout_ans_tr_yes* updates
      if (t >= 0.5 && like_quest_wout_ans_tr_yes.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        like_quest_wout_ans_tr_yes.tStart = t;  // (not accounting for frame time here)
        like_quest_wout_ans_tr_yes.frameNStart = frameN;  // exact frame index
        
        like_quest_wout_ans_tr_yes.setAutoDraw(true);
      }
      
      
      // if like_quest_wout_ans_tr_yes is active this frame...
      if (like_quest_wout_ans_tr_yes.status === PsychoJS.Status.STARTED) {
      }
      
      if (like_quest_wout_ans_tr_yes.status === PsychoJS.Status.STARTED) {
        // check whether like_quest_wout_ans_tr_yes has been pressed
        if (like_quest_wout_ans_tr_yes.isClicked) {
          if (!like_quest_wout_ans_tr_yes.wasClicked) {
            // store time of first click
            like_quest_wout_ans_tr_yes.timesOn.push(like_quest_wout_ans_tr_yes.clock.getTime());
            // store time clicked until
            like_quest_wout_ans_tr_yes.timesOff.push(like_quest_wout_ans_tr_yes.clock.getTime());
          } else {
            // update time clicked until;
            like_quest_wout_ans_tr_yes.timesOff[like_quest_wout_ans_tr_yes.timesOff.length - 1] = like_quest_wout_ans_tr_yes.clock.getTime();
          }
          if (!like_quest_wout_ans_tr_yes.wasClicked) {
            // end routine when like_quest_wout_ans_tr_yes is clicked
            continueRoutine = false;
            
          }
          // if like_quest_wout_ans_tr_yes is still clicked next frame, it is not a new click
          like_quest_wout_ans_tr_yes.wasClicked = true;
        } else {
          // if like_quest_wout_ans_tr_yes is clicked next frame, it is a new click
          like_quest_wout_ans_tr_yes.wasClicked = false;
        }
      } else {
        // keep clock at 0 if like_quest_wout_ans_tr_yes hasn't started / has finished
        like_quest_wout_ans_tr_yes.clock.reset();
        // if like_quest_wout_ans_tr_yes is clicked next frame, it is a new click
        like_quest_wout_ans_tr_yes.wasClicked = false;
      }
      
      // *like_quest_wout_ans_tr_no* updates
      if (t >= 0.5 && like_quest_wout_ans_tr_no.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        like_quest_wout_ans_tr_no.tStart = t;  // (not accounting for frame time here)
        like_quest_wout_ans_tr_no.frameNStart = frameN;  // exact frame index
        
        like_quest_wout_ans_tr_no.setAutoDraw(true);
      }
      
      
      // if like_quest_wout_ans_tr_no is active this frame...
      if (like_quest_wout_ans_tr_no.status === PsychoJS.Status.STARTED) {
      }
      
      if (like_quest_wout_ans_tr_no.status === PsychoJS.Status.STARTED) {
        // check whether like_quest_wout_ans_tr_no has been pressed
        if (like_quest_wout_ans_tr_no.isClicked) {
          if (!like_quest_wout_ans_tr_no.wasClicked) {
            // store time of first click
            like_quest_wout_ans_tr_no.timesOn.push(like_quest_wout_ans_tr_no.clock.getTime());
            // store time clicked until
            like_quest_wout_ans_tr_no.timesOff.push(like_quest_wout_ans_tr_no.clock.getTime());
          } else {
            // update time clicked until;
            like_quest_wout_ans_tr_no.timesOff[like_quest_wout_ans_tr_no.timesOff.length - 1] = like_quest_wout_ans_tr_no.clock.getTime();
          }
          if (!like_quest_wout_ans_tr_no.wasClicked) {
            // end routine when like_quest_wout_ans_tr_no is clicked
            continueRoutine = false;
            
          }
          // if like_quest_wout_ans_tr_no is still clicked next frame, it is not a new click
          like_quest_wout_ans_tr_no.wasClicked = true;
        } else {
          // if like_quest_wout_ans_tr_no is clicked next frame, it is a new click
          like_quest_wout_ans_tr_no.wasClicked = false;
        }
      } else {
        // keep clock at 0 if like_quest_wout_ans_tr_no hasn't started / has finished
        like_quest_wout_ans_tr_no.clock.reset();
        // if like_quest_wout_ans_tr_no is clicked next frame, it is a new click
        like_quest_wout_ans_tr_no.wasClicked = false;
      }
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of routineComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function routineRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'routine' ---
      for (const thisComponent of routineComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('routine.stopped', globalClock.getTime());
      psychoJS.experiment.addData('like_quest_wout_ans_tr_yes.numClicks', like_quest_wout_ans_tr_yes.numClicks);
      psychoJS.experiment.addData('like_quest_wout_ans_tr_yes.timesOn', like_quest_wout_ans_tr_yes.timesOn);
      psychoJS.experiment.addData('like_quest_wout_ans_tr_yes.timesOff', like_quest_wout_ans_tr_yes.timesOff);
      psychoJS.experiment.addData('like_quest_wout_ans_tr_no.numClicks', like_quest_wout_ans_tr_no.numClicks);
      psychoJS.experiment.addData('like_quest_wout_ans_tr_no.timesOn', like_quest_wout_ans_tr_no.timesOn);
      psychoJS.experiment.addData('like_quest_wout_ans_tr_no.timesOff', like_quest_wout_ans_tr_no.timesOff);
      // the Routine "routine" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var end_trMaxDurationReached;
var end_trMaxDuration;
var end_trComponents;
function end_trRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'end_tr' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      end_trClock.reset(routineTimer.getTime());
      routineTimer.add(0.800000);
      end_trMaxDurationReached = false;
      // update component parameters for each repeat
      psychoJS.experiment.addData('end_tr.started', globalClock.getTime());
      end_trMaxDuration = null
      // keep track of which components have finished
      end_trComponents = [];
      end_trComponents.push(text_end_tr);
      
      for (const thisComponent of end_trComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function end_trRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'end_tr' ---
      // get current time
      t = end_trClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_end_tr* updates
      if (t >= 0 && text_end_tr.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_end_tr.tStart = t;  // (not accounting for frame time here)
        text_end_tr.frameNStart = frameN;  // exact frame index
        
        text_end_tr.setAutoDraw(true);
      }
      
      
      // if text_end_tr is active this frame...
      if (text_end_tr.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_end_tr.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_end_tr.tStop = t;  // not accounting for scr refresh
        text_end_tr.frameNStop = frameN;  // exact frame index
        // update status
        text_end_tr.status = PsychoJS.Status.FINISHED;
        text_end_tr.setAutoDraw(false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of end_trComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function end_trRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'end_tr' ---
      for (const thisComponent of end_trComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('end_tr.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (end_trMaxDurationReached) {
          end_trClock.add(end_trMaxDuration);
      } else {
          end_trClock.add(0.800000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var ans_instr_1MaxDurationReached;
var ans_instr_1MaxDuration;
var ans_instr_1Components;
function ans_instr_1RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'ans_instr_1' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      ans_instr_1Clock.reset();
      routineTimer.reset();
      ans_instr_1MaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_15
      psychoJS.window.mouseVisible = true;
      
      // reset inst_quest_yes_1 to account for continued clicks & clear times on/off
      inst_quest_yes_1.reset()
      // reset inst_quest_no_1 to account for continued clicks & clear times on/off
      inst_quest_no_1.reset()
      psychoJS.experiment.addData('ans_instr_1.started', globalClock.getTime());
      ans_instr_1MaxDuration = null
      // keep track of which components have finished
      ans_instr_1Components = [];
      ans_instr_1Components.push(inst_quest_1);
      ans_instr_1Components.push(inst_quest_yes_1);
      ans_instr_1Components.push(inst_quest_no_1);
      
      for (const thisComponent of ans_instr_1Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function ans_instr_1RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'ans_instr_1' ---
      // get current time
      t = ans_instr_1Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *inst_quest_1* updates
      if (t >= 0.0 && inst_quest_1.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        inst_quest_1.tStart = t;  // (not accounting for frame time here)
        inst_quest_1.frameNStart = frameN;  // exact frame index
        
        inst_quest_1.setAutoDraw(true);
      }
      
      
      // if inst_quest_1 is active this frame...
      if (inst_quest_1.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *inst_quest_yes_1* updates
      if (t >= 0.5 && inst_quest_yes_1.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        inst_quest_yes_1.tStart = t;  // (not accounting for frame time here)
        inst_quest_yes_1.frameNStart = frameN;  // exact frame index
        
        inst_quest_yes_1.setAutoDraw(true);
      }
      
      
      // if inst_quest_yes_1 is active this frame...
      if (inst_quest_yes_1.status === PsychoJS.Status.STARTED) {
      }
      
      if (inst_quest_yes_1.status === PsychoJS.Status.STARTED) {
        // check whether inst_quest_yes_1 has been pressed
        if (inst_quest_yes_1.isClicked) {
          if (!inst_quest_yes_1.wasClicked) {
            // store time of first click
            inst_quest_yes_1.timesOn.push(inst_quest_yes_1.clock.getTime());
            // store time clicked until
            inst_quest_yes_1.timesOff.push(inst_quest_yes_1.clock.getTime());
          } else {
            // update time clicked until;
            inst_quest_yes_1.timesOff[inst_quest_yes_1.timesOff.length - 1] = inst_quest_yes_1.clock.getTime();
          }
          if (!inst_quest_yes_1.wasClicked) {
            // end routine when inst_quest_yes_1 is clicked
            continueRoutine = false;
            
          }
          // if inst_quest_yes_1 is still clicked next frame, it is not a new click
          inst_quest_yes_1.wasClicked = true;
        } else {
          // if inst_quest_yes_1 is clicked next frame, it is a new click
          inst_quest_yes_1.wasClicked = false;
        }
      } else {
        // keep clock at 0 if inst_quest_yes_1 hasn't started / has finished
        inst_quest_yes_1.clock.reset();
        // if inst_quest_yes_1 is clicked next frame, it is a new click
        inst_quest_yes_1.wasClicked = false;
      }
      
      // *inst_quest_no_1* updates
      if (t >= 0.5 && inst_quest_no_1.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        inst_quest_no_1.tStart = t;  // (not accounting for frame time here)
        inst_quest_no_1.frameNStart = frameN;  // exact frame index
        
        inst_quest_no_1.setAutoDraw(true);
      }
      
      
      // if inst_quest_no_1 is active this frame...
      if (inst_quest_no_1.status === PsychoJS.Status.STARTED) {
      }
      
      if (inst_quest_no_1.status === PsychoJS.Status.STARTED) {
        // check whether inst_quest_no_1 has been pressed
        if (inst_quest_no_1.isClicked) {
          if (!inst_quest_no_1.wasClicked) {
            // store time of first click
            inst_quest_no_1.timesOn.push(inst_quest_no_1.clock.getTime());
            // store time clicked until
            inst_quest_no_1.timesOff.push(inst_quest_no_1.clock.getTime());
          } else {
            // update time clicked until;
            inst_quest_no_1.timesOff[inst_quest_no_1.timesOff.length - 1] = inst_quest_no_1.clock.getTime();
          }
          if (!inst_quest_no_1.wasClicked) {
            // end routine when inst_quest_no_1 is clicked
            continueRoutine = false;
            
          }
          // if inst_quest_no_1 is still clicked next frame, it is not a new click
          inst_quest_no_1.wasClicked = true;
        } else {
          // if inst_quest_no_1 is clicked next frame, it is a new click
          inst_quest_no_1.wasClicked = false;
        }
      } else {
        // keep clock at 0 if inst_quest_no_1 hasn't started / has finished
        inst_quest_no_1.clock.reset();
        // if inst_quest_no_1 is clicked next frame, it is a new click
        inst_quest_no_1.wasClicked = false;
      }
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of ans_instr_1Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function ans_instr_1RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'ans_instr_1' ---
      for (const thisComponent of ans_instr_1Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('ans_instr_1.stopped', globalClock.getTime());
      // Run 'End Routine' code from code_15
      if (inst_quest_no_1.isClicked) {
          nTr20 = 99;
      }
      psychoJS.window.mouseVisible = false;
      
      psychoJS.experiment.addData('inst_quest_yes_1.numClicks', inst_quest_yes_1.numClicks);
      psychoJS.experiment.addData('inst_quest_yes_1.timesOn', inst_quest_yes_1.timesOn);
      psychoJS.experiment.addData('inst_quest_yes_1.timesOff', inst_quest_yes_1.timesOff);
      psychoJS.experiment.addData('inst_quest_no_1.numClicks', inst_quest_no_1.numClicks);
      psychoJS.experiment.addData('inst_quest_no_1.timesOn', inst_quest_no_1.timesOn);
      psychoJS.experiment.addData('inst_quest_no_1.timesOff', inst_quest_no_1.timesOff);
      // the Routine "ans_instr_1" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var inst_rep_1MaxDurationReached;
var _key_resp_10_allKeys;
var inst_rep_1MaxDuration;
var inst_rep_1Components;
function inst_rep_1RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'inst_rep_1' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      inst_rep_1Clock.reset();
      routineTimer.reset();
      inst_rep_1MaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_11
      head_rep_1.alignText = "left";
      head_rep_1.italic = true;
      body_rep_1.alignText = "left";
      
      key_resp_10.keys = undefined;
      key_resp_10.rt = undefined;
      _key_resp_10_allKeys = [];
      psychoJS.experiment.addData('inst_rep_1.started', globalClock.getTime());
      inst_rep_1MaxDuration = null
      // keep track of which components have finished
      inst_rep_1Components = [];
      inst_rep_1Components.push(num_inst_rep_1);
      inst_rep_1Components.push(title_rep_1);
      inst_rep_1Components.push(head_rep_1);
      inst_rep_1Components.push(body_rep_1);
      inst_rep_1Components.push(text_arrow_tr_6);
      inst_rep_1Components.push(arrow_right_tr_5);
      inst_rep_1Components.push(key_resp_10);
      
      for (const thisComponent of inst_rep_1Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function inst_rep_1RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'inst_rep_1' ---
      // get current time
      t = inst_rep_1Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *num_inst_rep_1* updates
      if (t >= 0.0 && num_inst_rep_1.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        num_inst_rep_1.tStart = t;  // (not accounting for frame time here)
        num_inst_rep_1.frameNStart = frameN;  // exact frame index
        
        num_inst_rep_1.setAutoDraw(true);
      }
      
      
      // if num_inst_rep_1 is active this frame...
      if (num_inst_rep_1.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *title_rep_1* updates
      if (t >= 0.0 && title_rep_1.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        title_rep_1.tStart = t;  // (not accounting for frame time here)
        title_rep_1.frameNStart = frameN;  // exact frame index
        
        title_rep_1.setAutoDraw(true);
      }
      
      
      // if title_rep_1 is active this frame...
      if (title_rep_1.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *head_rep_1* updates
      if (t >= 0.0 && head_rep_1.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        head_rep_1.tStart = t;  // (not accounting for frame time here)
        head_rep_1.frameNStart = frameN;  // exact frame index
        
        head_rep_1.setAutoDraw(true);
      }
      
      
      // if head_rep_1 is active this frame...
      if (head_rep_1.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *body_rep_1* updates
      if (t >= 0.0 && body_rep_1.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        body_rep_1.tStart = t;  // (not accounting for frame time here)
        body_rep_1.frameNStart = frameN;  // exact frame index
        
        body_rep_1.setAutoDraw(true);
      }
      
      
      // if body_rep_1 is active this frame...
      if (body_rep_1.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *text_arrow_tr_6* updates
      if (t >= 0.0 && text_arrow_tr_6.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_arrow_tr_6.tStart = t;  // (not accounting for frame time here)
        text_arrow_tr_6.frameNStart = frameN;  // exact frame index
        
        text_arrow_tr_6.setAutoDraw(true);
      }
      
      
      // if text_arrow_tr_6 is active this frame...
      if (text_arrow_tr_6.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *arrow_right_tr_5* updates
      if (t >= 0.0 && arrow_right_tr_5.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        arrow_right_tr_5.tStart = t;  // (not accounting for frame time here)
        arrow_right_tr_5.frameNStart = frameN;  // exact frame index
        
        arrow_right_tr_5.setAutoDraw(true);
      }
      
      
      // if arrow_right_tr_5 is active this frame...
      if (arrow_right_tr_5.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_10* updates
      if (t >= 0.1 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_10.tStart = t;  // (not accounting for frame time here)
        key_resp_10.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
      }
      
      // if key_resp_10 is active this frame...
      if (key_resp_10.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_10.getKeys({
          keyList: typeof 'right' === 'string' ? ['right'] : 'right', 
          waitRelease: false
        });
        _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
        if (_key_resp_10_allKeys.length > 0) {
          key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
          key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
          key_resp_10.duration = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of inst_rep_1Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function inst_rep_1RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'inst_rep_1' ---
      for (const thisComponent of inst_rep_1Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('inst_rep_1.stopped', globalClock.getTime());
      // Run 'End Routine' code from code_11
      if ((key_resp_10.keys === "right")) {
          nTr22 = 1;
      }
      
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_10.corr, level);
      }
      psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
      if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
          psychoJS.experiment.addData('key_resp_10.duration', key_resp_10.duration);
          routineTimer.reset();
          }
      
      key_resp_10.stop();
      // the Routine "inst_rep_1" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var inst_rep_2MaxDurationReached;
var _key_resp_11_allKeys;
var inst_rep_2MaxDuration;
var inst_rep_2Components;
function inst_rep_2RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'inst_rep_2' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      inst_rep_2Clock.reset();
      routineTimer.reset();
      inst_rep_2MaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_12
      head_rep_2.alignText = "left";
      head_rep_2.italic = true;
      body_rep_2.alignText = "left";
      
      key_resp_11.keys = undefined;
      key_resp_11.rt = undefined;
      _key_resp_11_allKeys = [];
      psychoJS.experiment.addData('inst_rep_2.started', globalClock.getTime());
      inst_rep_2MaxDuration = null
      // keep track of which components have finished
      inst_rep_2Components = [];
      inst_rep_2Components.push(num_inst_rep_2);
      inst_rep_2Components.push(title_rep_2);
      inst_rep_2Components.push(head_rep_2);
      inst_rep_2Components.push(body_rep_2);
      inst_rep_2Components.push(text_arrow_tr_7);
      inst_rep_2Components.push(arrow_right_tr_6);
      inst_rep_2Components.push(arrow_left_tr_5);
      inst_rep_2Components.push(key_resp_11);
      
      for (const thisComponent of inst_rep_2Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function inst_rep_2RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'inst_rep_2' ---
      // get current time
      t = inst_rep_2Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *num_inst_rep_2* updates
      if (t >= 0.0 && num_inst_rep_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        num_inst_rep_2.tStart = t;  // (not accounting for frame time here)
        num_inst_rep_2.frameNStart = frameN;  // exact frame index
        
        num_inst_rep_2.setAutoDraw(true);
      }
      
      
      // if num_inst_rep_2 is active this frame...
      if (num_inst_rep_2.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *title_rep_2* updates
      if (t >= 0.0 && title_rep_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        title_rep_2.tStart = t;  // (not accounting for frame time here)
        title_rep_2.frameNStart = frameN;  // exact frame index
        
        title_rep_2.setAutoDraw(true);
      }
      
      
      // if title_rep_2 is active this frame...
      if (title_rep_2.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *head_rep_2* updates
      if (t >= 0.0 && head_rep_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        head_rep_2.tStart = t;  // (not accounting for frame time here)
        head_rep_2.frameNStart = frameN;  // exact frame index
        
        head_rep_2.setAutoDraw(true);
      }
      
      
      // if head_rep_2 is active this frame...
      if (head_rep_2.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *body_rep_2* updates
      if (t >= 0.0 && body_rep_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        body_rep_2.tStart = t;  // (not accounting for frame time here)
        body_rep_2.frameNStart = frameN;  // exact frame index
        
        body_rep_2.setAutoDraw(true);
      }
      
      
      // if body_rep_2 is active this frame...
      if (body_rep_2.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *text_arrow_tr_7* updates
      if (t >= 0.0 && text_arrow_tr_7.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_arrow_tr_7.tStart = t;  // (not accounting for frame time here)
        text_arrow_tr_7.frameNStart = frameN;  // exact frame index
        
        text_arrow_tr_7.setAutoDraw(true);
      }
      
      
      // if text_arrow_tr_7 is active this frame...
      if (text_arrow_tr_7.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *arrow_right_tr_6* updates
      if (t >= 0.0 && arrow_right_tr_6.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        arrow_right_tr_6.tStart = t;  // (not accounting for frame time here)
        arrow_right_tr_6.frameNStart = frameN;  // exact frame index
        
        arrow_right_tr_6.setAutoDraw(true);
      }
      
      
      // if arrow_right_tr_6 is active this frame...
      if (arrow_right_tr_6.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *arrow_left_tr_5* updates
      if (t >= 0.0 && arrow_left_tr_5.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        arrow_left_tr_5.tStart = t;  // (not accounting for frame time here)
        arrow_left_tr_5.frameNStart = frameN;  // exact frame index
        
        arrow_left_tr_5.setAutoDraw(true);
      }
      
      
      // if arrow_left_tr_5 is active this frame...
      if (arrow_left_tr_5.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_11* updates
      if (t >= 0.1 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_11.tStart = t;  // (not accounting for frame time here)
        key_resp_11.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_11.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_11.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_11.clearEvents(); });
      }
      
      // if key_resp_11 is active this frame...
      if (key_resp_11.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_11.getKeys({
          keyList: typeof ['right','left'] === 'string' ? [['right','left']] : ['right','left'], 
          waitRelease: false
        });
        _key_resp_11_allKeys = _key_resp_11_allKeys.concat(theseKeys);
        if (_key_resp_11_allKeys.length > 0) {
          key_resp_11.keys = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].name;  // just the last key pressed
          key_resp_11.rt = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].rt;
          key_resp_11.duration = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of inst_rep_2Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function inst_rep_2RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'inst_rep_2' ---
      for (const thisComponent of inst_rep_2Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('inst_rep_2.stopped', globalClock.getTime());
      // Run 'End Routine' code from code_12
      if ((key_resp_11.keys === "right")) {
          nTr23 = 1;
      } else {
          if ((key_resp_11.keys === "left")) {
              nTr21 = 1;
              nTr23 = 0;
              nTr24 = 0;
              nTr25 = 0;
              nTr26 = 0;
          }
      }
      
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_11.corr, level);
      }
      psychoJS.experiment.addData('key_resp_11.keys', key_resp_11.keys);
      if (typeof key_resp_11.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_11.rt', key_resp_11.rt);
          psychoJS.experiment.addData('key_resp_11.duration', key_resp_11.duration);
          routineTimer.reset();
          }
      
      key_resp_11.stop();
      // the Routine "inst_rep_2" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var instr_rep_6MaxDurationReached;
var _key_resp_9_allKeys;
var instr_rep_6MaxDuration;
var instr_rep_6Components;
function instr_rep_6RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'instr_rep_6' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      instr_rep_6Clock.reset();
      routineTimer.reset();
      instr_rep_6MaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_44
      head_tr_7.alignText = "left";
      head_tr_7.italic = true;
      body_tr_6.alignText = "left";
      
      key_resp_9.keys = undefined;
      key_resp_9.rt = undefined;
      _key_resp_9_allKeys = [];
      psychoJS.experiment.addData('instr_rep_6.started', globalClock.getTime());
      instr_rep_6MaxDuration = null
      // keep track of which components have finished
      instr_rep_6Components = [];
      instr_rep_6Components.push(num_inst_tr_6);
      instr_rep_6Components.push(title_tr_6);
      instr_rep_6Components.push(head_tr_7);
      instr_rep_6Components.push(body_tr_6);
      instr_rep_6Components.push(text_arrow_tr_15);
      instr_rep_6Components.push(arrow_right_tr_12);
      instr_rep_6Components.push(arrow_left_tr_12);
      instr_rep_6Components.push(key_resp_9);
      
      for (const thisComponent of instr_rep_6Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function instr_rep_6RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'instr_rep_6' ---
      // get current time
      t = instr_rep_6Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *num_inst_tr_6* updates
      if (t >= 0.0 && num_inst_tr_6.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        num_inst_tr_6.tStart = t;  // (not accounting for frame time here)
        num_inst_tr_6.frameNStart = frameN;  // exact frame index
        
        num_inst_tr_6.setAutoDraw(true);
      }
      
      
      // if num_inst_tr_6 is active this frame...
      if (num_inst_tr_6.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *title_tr_6* updates
      if (t >= 0.0 && title_tr_6.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        title_tr_6.tStart = t;  // (not accounting for frame time here)
        title_tr_6.frameNStart = frameN;  // exact frame index
        
        title_tr_6.setAutoDraw(true);
      }
      
      
      // if title_tr_6 is active this frame...
      if (title_tr_6.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *head_tr_7* updates
      if (t >= 0.0 && head_tr_7.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        head_tr_7.tStart = t;  // (not accounting for frame time here)
        head_tr_7.frameNStart = frameN;  // exact frame index
        
        head_tr_7.setAutoDraw(true);
      }
      
      
      // if head_tr_7 is active this frame...
      if (head_tr_7.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *body_tr_6* updates
      if (t >= 0.0 && body_tr_6.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        body_tr_6.tStart = t;  // (not accounting for frame time here)
        body_tr_6.frameNStart = frameN;  // exact frame index
        
        body_tr_6.setAutoDraw(true);
      }
      
      
      // if body_tr_6 is active this frame...
      if (body_tr_6.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *text_arrow_tr_15* updates
      if (t >= 0.0 && text_arrow_tr_15.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_arrow_tr_15.tStart = t;  // (not accounting for frame time here)
        text_arrow_tr_15.frameNStart = frameN;  // exact frame index
        
        text_arrow_tr_15.setAutoDraw(true);
      }
      
      
      // if text_arrow_tr_15 is active this frame...
      if (text_arrow_tr_15.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *arrow_right_tr_12* updates
      if (t >= 0.0 && arrow_right_tr_12.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        arrow_right_tr_12.tStart = t;  // (not accounting for frame time here)
        arrow_right_tr_12.frameNStart = frameN;  // exact frame index
        
        arrow_right_tr_12.setAutoDraw(true);
      }
      
      
      // if arrow_right_tr_12 is active this frame...
      if (arrow_right_tr_12.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *arrow_left_tr_12* updates
      if (t >= 0.0 && arrow_left_tr_12.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        arrow_left_tr_12.tStart = t;  // (not accounting for frame time here)
        arrow_left_tr_12.frameNStart = frameN;  // exact frame index
        
        arrow_left_tr_12.setAutoDraw(true);
      }
      
      
      // if arrow_left_tr_12 is active this frame...
      if (arrow_left_tr_12.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_9* updates
      if (t >= 0.1 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_9.tStart = t;  // (not accounting for frame time here)
        key_resp_9.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
      }
      
      // if key_resp_9 is active this frame...
      if (key_resp_9.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_9.getKeys({
          keyList: typeof ['right','left'] === 'string' ? [['right','left']] : ['right','left'], 
          waitRelease: false
        });
        _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
        if (_key_resp_9_allKeys.length > 0) {
          key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
          key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
          key_resp_9.duration = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of instr_rep_6Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function instr_rep_6RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'instr_rep_6' ---
      for (const thisComponent of instr_rep_6Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('instr_rep_6.stopped', globalClock.getTime());
      // Run 'End Routine' code from code_44
      if ((key_resp_9.keys === "right")) {
          nTr24 = 1;
      } else {
          if ((key_resp_9.keys === "left")) {
              nTr21 = 0;
              nTr22 = 1;
              nTr24 = 0;
              nTr25 = 0;
              nTr26 = 0;
          }
      }
      
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_9.corr, level);
      }
      psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
      if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
          psychoJS.experiment.addData('key_resp_9.duration', key_resp_9.duration);
          routineTimer.reset();
          }
      
      key_resp_9.stop();
      // the Routine "instr_rep_6" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var inst_rep_3MaxDurationReached;
var _key_resp_12_allKeys;
var inst_rep_3MaxDuration;
var inst_rep_3Components;
function inst_rep_3RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'inst_rep_3' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      inst_rep_3Clock.reset();
      routineTimer.reset();
      inst_rep_3MaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_13
      head_rep_3.alignText = "left";
      head_rep_3.italic = true;
      body_rep_3.alignText = "left";
      
      key_resp_12.keys = undefined;
      key_resp_12.rt = undefined;
      _key_resp_12_allKeys = [];
      psychoJS.experiment.addData('inst_rep_3.started', globalClock.getTime());
      inst_rep_3MaxDuration = null
      // keep track of which components have finished
      inst_rep_3Components = [];
      inst_rep_3Components.push(num_inst_rep_3);
      inst_rep_3Components.push(title_rep_3);
      inst_rep_3Components.push(head_rep_3);
      inst_rep_3Components.push(body_rep_3);
      inst_rep_3Components.push(text_arrow_tr_8);
      inst_rep_3Components.push(arrow_right_tr_7);
      inst_rep_3Components.push(arrow_left_tr_6);
      inst_rep_3Components.push(key_resp_12);
      
      for (const thisComponent of inst_rep_3Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function inst_rep_3RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'inst_rep_3' ---
      // get current time
      t = inst_rep_3Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *num_inst_rep_3* updates
      if (t >= 0.0 && num_inst_rep_3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        num_inst_rep_3.tStart = t;  // (not accounting for frame time here)
        num_inst_rep_3.frameNStart = frameN;  // exact frame index
        
        num_inst_rep_3.setAutoDraw(true);
      }
      
      
      // if num_inst_rep_3 is active this frame...
      if (num_inst_rep_3.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *title_rep_3* updates
      if (t >= 0.0 && title_rep_3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        title_rep_3.tStart = t;  // (not accounting for frame time here)
        title_rep_3.frameNStart = frameN;  // exact frame index
        
        title_rep_3.setAutoDraw(true);
      }
      
      
      // if title_rep_3 is active this frame...
      if (title_rep_3.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *head_rep_3* updates
      if (t >= 0.0 && head_rep_3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        head_rep_3.tStart = t;  // (not accounting for frame time here)
        head_rep_3.frameNStart = frameN;  // exact frame index
        
        head_rep_3.setAutoDraw(true);
      }
      
      
      // if head_rep_3 is active this frame...
      if (head_rep_3.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *body_rep_3* updates
      if (t >= 0.0 && body_rep_3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        body_rep_3.tStart = t;  // (not accounting for frame time here)
        body_rep_3.frameNStart = frameN;  // exact frame index
        
        body_rep_3.setAutoDraw(true);
      }
      
      
      // if body_rep_3 is active this frame...
      if (body_rep_3.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *text_arrow_tr_8* updates
      if (t >= 0.0 && text_arrow_tr_8.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_arrow_tr_8.tStart = t;  // (not accounting for frame time here)
        text_arrow_tr_8.frameNStart = frameN;  // exact frame index
        
        text_arrow_tr_8.setAutoDraw(true);
      }
      
      
      // if text_arrow_tr_8 is active this frame...
      if (text_arrow_tr_8.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *arrow_right_tr_7* updates
      if (t >= 0.0 && arrow_right_tr_7.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        arrow_right_tr_7.tStart = t;  // (not accounting for frame time here)
        arrow_right_tr_7.frameNStart = frameN;  // exact frame index
        
        arrow_right_tr_7.setAutoDraw(true);
      }
      
      
      // if arrow_right_tr_7 is active this frame...
      if (arrow_right_tr_7.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *arrow_left_tr_6* updates
      if (t >= 0.0 && arrow_left_tr_6.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        arrow_left_tr_6.tStart = t;  // (not accounting for frame time here)
        arrow_left_tr_6.frameNStart = frameN;  // exact frame index
        
        arrow_left_tr_6.setAutoDraw(true);
      }
      
      
      // if arrow_left_tr_6 is active this frame...
      if (arrow_left_tr_6.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_12* updates
      if (t >= 0.1 && key_resp_12.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_12.tStart = t;  // (not accounting for frame time here)
        key_resp_12.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_12.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_12.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_12.clearEvents(); });
      }
      
      // if key_resp_12 is active this frame...
      if (key_resp_12.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_12.getKeys({
          keyList: typeof ['right','left'] === 'string' ? [['right','left']] : ['right','left'], 
          waitRelease: false
        });
        _key_resp_12_allKeys = _key_resp_12_allKeys.concat(theseKeys);
        if (_key_resp_12_allKeys.length > 0) {
          key_resp_12.keys = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].name;  // just the last key pressed
          key_resp_12.rt = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].rt;
          key_resp_12.duration = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of inst_rep_3Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function inst_rep_3RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'inst_rep_3' ---
      for (const thisComponent of inst_rep_3Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('inst_rep_3.stopped', globalClock.getTime());
      // Run 'End Routine' code from code_13
      if ((key_resp_12.keys === "right")) {
          nTr25 = 1;
      } else {
          if ((key_resp_12.keys === "left")) {
              nTr21 = 0;
              nTr22 = 0;
              nTr23 = 1;
              nTr25 = 0;
              nTr26 = 0;
          }
      }
      
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_12.corr, level);
      }
      psychoJS.experiment.addData('key_resp_12.keys', key_resp_12.keys);
      if (typeof key_resp_12.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_12.rt', key_resp_12.rt);
          psychoJS.experiment.addData('key_resp_12.duration', key_resp_12.duration);
          routineTimer.reset();
          }
      
      key_resp_12.stop();
      // the Routine "inst_rep_3" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var inst_rep_4MaxDurationReached;
var _key_resp_13_allKeys;
var inst_rep_4MaxDuration;
var inst_rep_4Components;
function inst_rep_4RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'inst_rep_4' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      inst_rep_4Clock.reset();
      routineTimer.reset();
      inst_rep_4MaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_14
      head_rep_4.alignText = "left";
      head_rep_4.italic = true;
      body_rep_4.alignText = "left";
      
      body_rep_4.setText('Появится правильный ответ, который нужно будет оценить, ответив на вопрос: «Совпадает ли он с Вашим?»\n\nДля ответа нажмите на один из вариантов:\n- Если нажмете «ДА», то появится следующая задача;\n- Если нажмете «НЕТ», то нужно будет оценить было ли «Ага-переживание» при знакомстве с ответом.');
      key_resp_13.keys = undefined;
      key_resp_13.rt = undefined;
      _key_resp_13_allKeys = [];
      psychoJS.experiment.addData('inst_rep_4.started', globalClock.getTime());
      inst_rep_4MaxDuration = null
      // keep track of which components have finished
      inst_rep_4Components = [];
      inst_rep_4Components.push(num_inst_rep_4);
      inst_rep_4Components.push(title_rep_4);
      inst_rep_4Components.push(head_rep_4);
      inst_rep_4Components.push(body_rep_4);
      inst_rep_4Components.push(text_arrow_tr_9);
      inst_rep_4Components.push(arrow_right_tr_8);
      inst_rep_4Components.push(arrow_left_tr_7);
      inst_rep_4Components.push(key_resp_13);
      
      for (const thisComponent of inst_rep_4Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function inst_rep_4RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'inst_rep_4' ---
      // get current time
      t = inst_rep_4Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *num_inst_rep_4* updates
      if (t >= 0.0 && num_inst_rep_4.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        num_inst_rep_4.tStart = t;  // (not accounting for frame time here)
        num_inst_rep_4.frameNStart = frameN;  // exact frame index
        
        num_inst_rep_4.setAutoDraw(true);
      }
      
      
      // if num_inst_rep_4 is active this frame...
      if (num_inst_rep_4.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *title_rep_4* updates
      if (t >= 0.0 && title_rep_4.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        title_rep_4.tStart = t;  // (not accounting for frame time here)
        title_rep_4.frameNStart = frameN;  // exact frame index
        
        title_rep_4.setAutoDraw(true);
      }
      
      
      // if title_rep_4 is active this frame...
      if (title_rep_4.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *head_rep_4* updates
      if (t >= 0.0 && head_rep_4.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        head_rep_4.tStart = t;  // (not accounting for frame time here)
        head_rep_4.frameNStart = frameN;  // exact frame index
        
        head_rep_4.setAutoDraw(true);
      }
      
      
      // if head_rep_4 is active this frame...
      if (head_rep_4.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *body_rep_4* updates
      if (t >= 0.0 && body_rep_4.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        body_rep_4.tStart = t;  // (not accounting for frame time here)
        body_rep_4.frameNStart = frameN;  // exact frame index
        
        body_rep_4.setAutoDraw(true);
      }
      
      
      // if body_rep_4 is active this frame...
      if (body_rep_4.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *text_arrow_tr_9* updates
      if (t >= 0.0 && text_arrow_tr_9.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_arrow_tr_9.tStart = t;  // (not accounting for frame time here)
        text_arrow_tr_9.frameNStart = frameN;  // exact frame index
        
        text_arrow_tr_9.setAutoDraw(true);
      }
      
      
      // if text_arrow_tr_9 is active this frame...
      if (text_arrow_tr_9.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *arrow_right_tr_8* updates
      if (t >= 0.0 && arrow_right_tr_8.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        arrow_right_tr_8.tStart = t;  // (not accounting for frame time here)
        arrow_right_tr_8.frameNStart = frameN;  // exact frame index
        
        arrow_right_tr_8.setAutoDraw(true);
      }
      
      
      // if arrow_right_tr_8 is active this frame...
      if (arrow_right_tr_8.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *arrow_left_tr_7* updates
      if (t >= 0.0 && arrow_left_tr_7.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        arrow_left_tr_7.tStart = t;  // (not accounting for frame time here)
        arrow_left_tr_7.frameNStart = frameN;  // exact frame index
        
        arrow_left_tr_7.setAutoDraw(true);
      }
      
      
      // if arrow_left_tr_7 is active this frame...
      if (arrow_left_tr_7.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_13* updates
      if (t >= 0.1 && key_resp_13.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_13.tStart = t;  // (not accounting for frame time here)
        key_resp_13.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_13.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_13.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_13.clearEvents(); });
      }
      
      // if key_resp_13 is active this frame...
      if (key_resp_13.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_13.getKeys({
          keyList: typeof ['right','left'] === 'string' ? [['right','left']] : ['right','left'], 
          waitRelease: false
        });
        _key_resp_13_allKeys = _key_resp_13_allKeys.concat(theseKeys);
        if (_key_resp_13_allKeys.length > 0) {
          key_resp_13.keys = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].name;  // just the last key pressed
          key_resp_13.rt = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].rt;
          key_resp_13.duration = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of inst_rep_4Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function inst_rep_4RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'inst_rep_4' ---
      for (const thisComponent of inst_rep_4Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('inst_rep_4.stopped', globalClock.getTime());
      // Run 'End Routine' code from code_14
      if ((key_resp_13.keys === "right")) {
          nTr26 = 1;
      } else {
          if ((key_resp_13.keys === "left")) {
              nTr21 = 0;
              nTr22 = 0;
              nTr23 = 0;
              nTr24 = 1;
              nTr26 = 0;
          }
      }
      
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_13.corr, level);
      }
      psychoJS.experiment.addData('key_resp_13.keys', key_resp_13.keys);
      if (typeof key_resp_13.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_13.rt', key_resp_13.rt);
          psychoJS.experiment.addData('key_resp_13.duration', key_resp_13.duration);
          routineTimer.reset();
          }
      
      key_resp_13.stop();
      // the Routine "inst_rep_4" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var inst_rep_5MaxDurationReached;
var _key_resp_14_allKeys;
var inst_rep_5MaxDuration;
var inst_rep_5Components;
function inst_rep_5RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'inst_rep_5' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      inst_rep_5Clock.reset();
      routineTimer.reset();
      inst_rep_5MaxDurationReached = false;
      // update component parameters for each repeat
      key_resp_14.keys = undefined;
      key_resp_14.rt = undefined;
      _key_resp_14_allKeys = [];
      psychoJS.experiment.addData('inst_rep_5.started', globalClock.getTime());
      inst_rep_5MaxDuration = null
      // keep track of which components have finished
      inst_rep_5Components = [];
      inst_rep_5Components.push(head_rep_5);
      inst_rep_5Components.push(text_arrow_tr_10);
      inst_rep_5Components.push(arrow_left_tr_8);
      inst_rep_5Components.push(key_resp_14);
      
      for (const thisComponent of inst_rep_5Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function inst_rep_5RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'inst_rep_5' ---
      // get current time
      t = inst_rep_5Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *head_rep_5* updates
      if (t >= 0.0 && head_rep_5.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        head_rep_5.tStart = t;  // (not accounting for frame time here)
        head_rep_5.frameNStart = frameN;  // exact frame index
        
        head_rep_5.setAutoDraw(true);
      }
      
      
      // if head_rep_5 is active this frame...
      if (head_rep_5.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *text_arrow_tr_10* updates
      if (t >= 0.0 && text_arrow_tr_10.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_arrow_tr_10.tStart = t;  // (not accounting for frame time here)
        text_arrow_tr_10.frameNStart = frameN;  // exact frame index
        
        text_arrow_tr_10.setAutoDraw(true);
      }
      
      
      // if text_arrow_tr_10 is active this frame...
      if (text_arrow_tr_10.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *arrow_left_tr_8* updates
      if (t >= 0.0 && arrow_left_tr_8.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        arrow_left_tr_8.tStart = t;  // (not accounting for frame time here)
        arrow_left_tr_8.frameNStart = frameN;  // exact frame index
        
        arrow_left_tr_8.setAutoDraw(true);
      }
      
      
      // if arrow_left_tr_8 is active this frame...
      if (arrow_left_tr_8.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_14* updates
      if (t >= 0.1 && key_resp_14.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_14.tStart = t;  // (not accounting for frame time here)
        key_resp_14.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_14.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_14.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_14.clearEvents(); });
      }
      
      // if key_resp_14 is active this frame...
      if (key_resp_14.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_14.getKeys({
          keyList: typeof ['space','left'] === 'string' ? [['space','left']] : ['space','left'], 
          waitRelease: false
        });
        _key_resp_14_allKeys = _key_resp_14_allKeys.concat(theseKeys);
        if (_key_resp_14_allKeys.length > 0) {
          key_resp_14.keys = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].name;  // just the last key pressed
          key_resp_14.rt = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].rt;
          key_resp_14.duration = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of inst_rep_5Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function inst_rep_5RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'inst_rep_5' ---
      for (const thisComponent of inst_rep_5Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('inst_rep_5.stopped', globalClock.getTime());
      // Run 'End Routine' code from code_16
      if ((key_resp_14.keys === "space")) {
          trials_14.finished = true;
          nTr41 = 1;
      } else {
          if ((key_resp_14.keys === "left")) {
              nTr21 = 0;
              nTr22 = 0;
              nTr23 = 0;
              nTr24 = 0;
              nTr25 = 1;
          }
      }
      
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_14.corr, level);
      }
      psychoJS.experiment.addData('key_resp_14.keys', key_resp_14.keys);
      if (typeof key_resp_14.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_14.rt', key_resp_14.rt);
          psychoJS.experiment.addData('key_resp_14.duration', key_resp_14.duration);
          routineTimer.reset();
          }
      
      key_resp_14.stop();
      // the Routine "inst_rep_5" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var ans_aha_1MaxDurationReached;
var ans_aha_1MaxDuration;
var ans_aha_1Components;
function ans_aha_1RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'ans_aha_1' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      ans_aha_1Clock.reset();
      routineTimer.reset();
      ans_aha_1MaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_18
      psychoJS.window.mouseVisible = true;
      
      // reset aha_inst_quest_yes_1 to account for continued clicks & clear times on/off
      aha_inst_quest_yes_1.reset()
      // reset aha_inst_quest_no_1 to account for continued clicks & clear times on/off
      aha_inst_quest_no_1.reset()
      psychoJS.experiment.addData('ans_aha_1.started', globalClock.getTime());
      ans_aha_1MaxDuration = null
      // keep track of which components have finished
      ans_aha_1Components = [];
      ans_aha_1Components.push(aha_quest_1);
      ans_aha_1Components.push(aha_inst_quest_yes_1);
      ans_aha_1Components.push(aha_inst_quest_no_1);
      
      for (const thisComponent of ans_aha_1Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function ans_aha_1RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'ans_aha_1' ---
      // get current time
      t = ans_aha_1Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *aha_quest_1* updates
      if (t >= 0.0 && aha_quest_1.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        aha_quest_1.tStart = t;  // (not accounting for frame time here)
        aha_quest_1.frameNStart = frameN;  // exact frame index
        
        aha_quest_1.setAutoDraw(true);
      }
      
      
      // if aha_quest_1 is active this frame...
      if (aha_quest_1.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *aha_inst_quest_yes_1* updates
      if (t >= 0.5 && aha_inst_quest_yes_1.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        aha_inst_quest_yes_1.tStart = t;  // (not accounting for frame time here)
        aha_inst_quest_yes_1.frameNStart = frameN;  // exact frame index
        
        aha_inst_quest_yes_1.setAutoDraw(true);
      }
      
      
      // if aha_inst_quest_yes_1 is active this frame...
      if (aha_inst_quest_yes_1.status === PsychoJS.Status.STARTED) {
      }
      
      if (aha_inst_quest_yes_1.status === PsychoJS.Status.STARTED) {
        // check whether aha_inst_quest_yes_1 has been pressed
        if (aha_inst_quest_yes_1.isClicked) {
          if (!aha_inst_quest_yes_1.wasClicked) {
            // store time of first click
            aha_inst_quest_yes_1.timesOn.push(aha_inst_quest_yes_1.clock.getTime());
            // store time clicked until
            aha_inst_quest_yes_1.timesOff.push(aha_inst_quest_yes_1.clock.getTime());
          } else {
            // update time clicked until;
            aha_inst_quest_yes_1.timesOff[aha_inst_quest_yes_1.timesOff.length - 1] = aha_inst_quest_yes_1.clock.getTime();
          }
          if (!aha_inst_quest_yes_1.wasClicked) {
            // end routine when aha_inst_quest_yes_1 is clicked
            continueRoutine = false;
            
          }
          // if aha_inst_quest_yes_1 is still clicked next frame, it is not a new click
          aha_inst_quest_yes_1.wasClicked = true;
        } else {
          // if aha_inst_quest_yes_1 is clicked next frame, it is a new click
          aha_inst_quest_yes_1.wasClicked = false;
        }
      } else {
        // keep clock at 0 if aha_inst_quest_yes_1 hasn't started / has finished
        aha_inst_quest_yes_1.clock.reset();
        // if aha_inst_quest_yes_1 is clicked next frame, it is a new click
        aha_inst_quest_yes_1.wasClicked = false;
      }
      
      // *aha_inst_quest_no_1* updates
      if (t >= 0.5 && aha_inst_quest_no_1.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        aha_inst_quest_no_1.tStart = t;  // (not accounting for frame time here)
        aha_inst_quest_no_1.frameNStart = frameN;  // exact frame index
        
        aha_inst_quest_no_1.setAutoDraw(true);
      }
      
      
      // if aha_inst_quest_no_1 is active this frame...
      if (aha_inst_quest_no_1.status === PsychoJS.Status.STARTED) {
      }
      
      if (aha_inst_quest_no_1.status === PsychoJS.Status.STARTED) {
        // check whether aha_inst_quest_no_1 has been pressed
        if (aha_inst_quest_no_1.isClicked) {
          if (!aha_inst_quest_no_1.wasClicked) {
            // store time of first click
            aha_inst_quest_no_1.timesOn.push(aha_inst_quest_no_1.clock.getTime());
            // store time clicked until
            aha_inst_quest_no_1.timesOff.push(aha_inst_quest_no_1.clock.getTime());
          } else {
            // update time clicked until;
            aha_inst_quest_no_1.timesOff[aha_inst_quest_no_1.timesOff.length - 1] = aha_inst_quest_no_1.clock.getTime();
          }
          if (!aha_inst_quest_no_1.wasClicked) {
            // end routine when aha_inst_quest_no_1 is clicked
            continueRoutine = false;
            
          }
          // if aha_inst_quest_no_1 is still clicked next frame, it is not a new click
          aha_inst_quest_no_1.wasClicked = true;
        } else {
          // if aha_inst_quest_no_1 is clicked next frame, it is a new click
          aha_inst_quest_no_1.wasClicked = false;
        }
      } else {
        // keep clock at 0 if aha_inst_quest_no_1 hasn't started / has finished
        aha_inst_quest_no_1.clock.reset();
        // if aha_inst_quest_no_1 is clicked next frame, it is a new click
        aha_inst_quest_no_1.wasClicked = false;
      }
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of ans_aha_1Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function ans_aha_1RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'ans_aha_1' ---
      for (const thisComponent of ans_aha_1Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('ans_aha_1.stopped', globalClock.getTime());
      // Run 'End Routine' code from code_18
      if (aha_inst_quest_no_1.isClicked) {
          nTr30 = 99;
      }
      psychoJS.window.mouseVisible = false;
      
      psychoJS.experiment.addData('aha_inst_quest_yes_1.numClicks', aha_inst_quest_yes_1.numClicks);
      psychoJS.experiment.addData('aha_inst_quest_yes_1.timesOn', aha_inst_quest_yes_1.timesOn);
      psychoJS.experiment.addData('aha_inst_quest_yes_1.timesOff', aha_inst_quest_yes_1.timesOff);
      psychoJS.experiment.addData('aha_inst_quest_no_1.numClicks', aha_inst_quest_no_1.numClicks);
      psychoJS.experiment.addData('aha_inst_quest_no_1.timesOn', aha_inst_quest_no_1.timesOn);
      psychoJS.experiment.addData('aha_inst_quest_no_1.timesOff', aha_inst_quest_no_1.timesOff);
      // the Routine "ans_aha_1" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var aha_rep_1MaxDurationReached;
var _key_resp_16_allKeys;
var aha_rep_1MaxDuration;
var aha_rep_1Components;
function aha_rep_1RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'aha_rep_1' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      aha_rep_1Clock.reset();
      routineTimer.reset();
      aha_rep_1MaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_19
      aha_body_rep_1.alignText = "left";
      
      key_resp_16.keys = undefined;
      key_resp_16.rt = undefined;
      _key_resp_16_allKeys = [];
      psychoJS.experiment.addData('aha_rep_1.started', globalClock.getTime());
      aha_rep_1MaxDuration = null
      // keep track of which components have finished
      aha_rep_1Components = [];
      aha_rep_1Components.push(num_aha_rep_1);
      aha_rep_1Components.push(aha_title_rep_1);
      aha_rep_1Components.push(aha_body_rep_1);
      aha_rep_1Components.push(text_arrow_tr_11);
      aha_rep_1Components.push(arrow_right_tr_9);
      aha_rep_1Components.push(key_resp_16);
      
      for (const thisComponent of aha_rep_1Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function aha_rep_1RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'aha_rep_1' ---
      // get current time
      t = aha_rep_1Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *num_aha_rep_1* updates
      if (t >= 0.0 && num_aha_rep_1.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        num_aha_rep_1.tStart = t;  // (not accounting for frame time here)
        num_aha_rep_1.frameNStart = frameN;  // exact frame index
        
        num_aha_rep_1.setAutoDraw(true);
      }
      
      
      // if num_aha_rep_1 is active this frame...
      if (num_aha_rep_1.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *aha_title_rep_1* updates
      if (t >= 0.0 && aha_title_rep_1.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        aha_title_rep_1.tStart = t;  // (not accounting for frame time here)
        aha_title_rep_1.frameNStart = frameN;  // exact frame index
        
        aha_title_rep_1.setAutoDraw(true);
      }
      
      
      // if aha_title_rep_1 is active this frame...
      if (aha_title_rep_1.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *aha_body_rep_1* updates
      if (t >= 0.0 && aha_body_rep_1.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        aha_body_rep_1.tStart = t;  // (not accounting for frame time here)
        aha_body_rep_1.frameNStart = frameN;  // exact frame index
        
        aha_body_rep_1.setAutoDraw(true);
      }
      
      
      // if aha_body_rep_1 is active this frame...
      if (aha_body_rep_1.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *text_arrow_tr_11* updates
      if (t >= 0.0 && text_arrow_tr_11.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_arrow_tr_11.tStart = t;  // (not accounting for frame time here)
        text_arrow_tr_11.frameNStart = frameN;  // exact frame index
        
        text_arrow_tr_11.setAutoDraw(true);
      }
      
      
      // if text_arrow_tr_11 is active this frame...
      if (text_arrow_tr_11.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *arrow_right_tr_9* updates
      if (t >= 0.0 && arrow_right_tr_9.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        arrow_right_tr_9.tStart = t;  // (not accounting for frame time here)
        arrow_right_tr_9.frameNStart = frameN;  // exact frame index
        
        arrow_right_tr_9.setAutoDraw(true);
      }
      
      
      // if arrow_right_tr_9 is active this frame...
      if (arrow_right_tr_9.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_16* updates
      if (t >= 0.1 && key_resp_16.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_16.tStart = t;  // (not accounting for frame time here)
        key_resp_16.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_16.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_16.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_16.clearEvents(); });
      }
      
      // if key_resp_16 is active this frame...
      if (key_resp_16.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_16.getKeys({
          keyList: typeof 'right' === 'string' ? ['right'] : 'right', 
          waitRelease: false
        });
        _key_resp_16_allKeys = _key_resp_16_allKeys.concat(theseKeys);
        if (_key_resp_16_allKeys.length > 0) {
          key_resp_16.keys = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].name;  // just the last key pressed
          key_resp_16.rt = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].rt;
          key_resp_16.duration = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of aha_rep_1Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function aha_rep_1RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'aha_rep_1' ---
      for (const thisComponent of aha_rep_1Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('aha_rep_1.stopped', globalClock.getTime());
      // Run 'End Routine' code from code_19
      if ((key_resp_16.keys === "right")) {
          nTr32 = 1;
      }
      
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_16.corr, level);
      }
      psychoJS.experiment.addData('key_resp_16.keys', key_resp_16.keys);
      if (typeof key_resp_16.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_16.rt', key_resp_16.rt);
          psychoJS.experiment.addData('key_resp_16.duration', key_resp_16.duration);
          routineTimer.reset();
          }
      
      key_resp_16.stop();
      // the Routine "aha_rep_1" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var aha_rep_2MaxDurationReached;
var _key_resp_17_allKeys;
var aha_rep_2MaxDuration;
var aha_rep_2Components;
function aha_rep_2RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'aha_rep_2' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      aha_rep_2Clock.reset();
      routineTimer.reset();
      aha_rep_2MaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_20
      aha_body_rep_2.alignText = "left";
      
      key_resp_17.keys = undefined;
      key_resp_17.rt = undefined;
      _key_resp_17_allKeys = [];
      psychoJS.experiment.addData('aha_rep_2.started', globalClock.getTime());
      aha_rep_2MaxDuration = null
      // keep track of which components have finished
      aha_rep_2Components = [];
      aha_rep_2Components.push(num_aha_rep_2);
      aha_rep_2Components.push(aha_title_rep_2);
      aha_rep_2Components.push(aha_body_rep_2);
      aha_rep_2Components.push(text_arrow_tr_12);
      aha_rep_2Components.push(arrow_left_tr_9);
      aha_rep_2Components.push(arrow_right_tr_10);
      aha_rep_2Components.push(key_resp_17);
      
      for (const thisComponent of aha_rep_2Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function aha_rep_2RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'aha_rep_2' ---
      // get current time
      t = aha_rep_2Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *num_aha_rep_2* updates
      if (t >= 0.0 && num_aha_rep_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        num_aha_rep_2.tStart = t;  // (not accounting for frame time here)
        num_aha_rep_2.frameNStart = frameN;  // exact frame index
        
        num_aha_rep_2.setAutoDraw(true);
      }
      
      
      // if num_aha_rep_2 is active this frame...
      if (num_aha_rep_2.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *aha_title_rep_2* updates
      if (t >= 0.0 && aha_title_rep_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        aha_title_rep_2.tStart = t;  // (not accounting for frame time here)
        aha_title_rep_2.frameNStart = frameN;  // exact frame index
        
        aha_title_rep_2.setAutoDraw(true);
      }
      
      
      // if aha_title_rep_2 is active this frame...
      if (aha_title_rep_2.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *aha_body_rep_2* updates
      if (t >= 0.0 && aha_body_rep_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        aha_body_rep_2.tStart = t;  // (not accounting for frame time here)
        aha_body_rep_2.frameNStart = frameN;  // exact frame index
        
        aha_body_rep_2.setAutoDraw(true);
      }
      
      
      // if aha_body_rep_2 is active this frame...
      if (aha_body_rep_2.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *text_arrow_tr_12* updates
      if (t >= 0.0 && text_arrow_tr_12.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_arrow_tr_12.tStart = t;  // (not accounting for frame time here)
        text_arrow_tr_12.frameNStart = frameN;  // exact frame index
        
        text_arrow_tr_12.setAutoDraw(true);
      }
      
      
      // if text_arrow_tr_12 is active this frame...
      if (text_arrow_tr_12.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *arrow_left_tr_9* updates
      if (t >= 0.0 && arrow_left_tr_9.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        arrow_left_tr_9.tStart = t;  // (not accounting for frame time here)
        arrow_left_tr_9.frameNStart = frameN;  // exact frame index
        
        arrow_left_tr_9.setAutoDraw(true);
      }
      
      
      // if arrow_left_tr_9 is active this frame...
      if (arrow_left_tr_9.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *arrow_right_tr_10* updates
      if (t >= 0.0 && arrow_right_tr_10.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        arrow_right_tr_10.tStart = t;  // (not accounting for frame time here)
        arrow_right_tr_10.frameNStart = frameN;  // exact frame index
        
        arrow_right_tr_10.setAutoDraw(true);
      }
      
      
      // if arrow_right_tr_10 is active this frame...
      if (arrow_right_tr_10.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_17* updates
      if (t >= 0.1 && key_resp_17.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_17.tStart = t;  // (not accounting for frame time here)
        key_resp_17.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_17.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_17.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_17.clearEvents(); });
      }
      
      // if key_resp_17 is active this frame...
      if (key_resp_17.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_17.getKeys({
          keyList: typeof ['right','left'] === 'string' ? [['right','left']] : ['right','left'], 
          waitRelease: false
        });
        _key_resp_17_allKeys = _key_resp_17_allKeys.concat(theseKeys);
        if (_key_resp_17_allKeys.length > 0) {
          key_resp_17.keys = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].name;  // just the last key pressed
          key_resp_17.rt = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].rt;
          key_resp_17.duration = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of aha_rep_2Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function aha_rep_2RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'aha_rep_2' ---
      for (const thisComponent of aha_rep_2Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('aha_rep_2.stopped', globalClock.getTime());
      // Run 'End Routine' code from code_20
      if ((key_resp_17.keys === "right")) {
          nTr33 = 1;
      } else {
          if ((key_resp_17.keys === "left")) {
              nTr33 = 0;
              nTr31 = 1;
          }
      }
      
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_17.corr, level);
      }
      psychoJS.experiment.addData('key_resp_17.keys', key_resp_17.keys);
      if (typeof key_resp_17.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_17.rt', key_resp_17.rt);
          psychoJS.experiment.addData('key_resp_17.duration', key_resp_17.duration);
          routineTimer.reset();
          }
      
      key_resp_17.stop();
      // the Routine "aha_rep_2" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var aha_rep_3MaxDurationReached;
var _key_resp_15_allKeys;
var aha_rep_3MaxDuration;
var aha_rep_3Components;
function aha_rep_3RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'aha_rep_3' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      aha_rep_3Clock.reset();
      routineTimer.reset();
      aha_rep_3MaxDurationReached = false;
      // update component parameters for each repeat
      key_resp_15.keys = undefined;
      key_resp_15.rt = undefined;
      _key_resp_15_allKeys = [];
      psychoJS.experiment.addData('aha_rep_3.started', globalClock.getTime());
      aha_rep_3MaxDuration = null
      // keep track of which components have finished
      aha_rep_3Components = [];
      aha_rep_3Components.push(aha_head_rep_3);
      aha_rep_3Components.push(text_arrow_tr_13);
      aha_rep_3Components.push(arrow_left_tr_10);
      aha_rep_3Components.push(key_resp_15);
      
      for (const thisComponent of aha_rep_3Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function aha_rep_3RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'aha_rep_3' ---
      // get current time
      t = aha_rep_3Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *aha_head_rep_3* updates
      if (t >= 0.0 && aha_head_rep_3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        aha_head_rep_3.tStart = t;  // (not accounting for frame time here)
        aha_head_rep_3.frameNStart = frameN;  // exact frame index
        
        aha_head_rep_3.setAutoDraw(true);
      }
      
      
      // if aha_head_rep_3 is active this frame...
      if (aha_head_rep_3.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *text_arrow_tr_13* updates
      if (t >= 0.0 && text_arrow_tr_13.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_arrow_tr_13.tStart = t;  // (not accounting for frame time here)
        text_arrow_tr_13.frameNStart = frameN;  // exact frame index
        
        text_arrow_tr_13.setAutoDraw(true);
      }
      
      
      // if text_arrow_tr_13 is active this frame...
      if (text_arrow_tr_13.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *arrow_left_tr_10* updates
      if (t >= 0.0 && arrow_left_tr_10.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        arrow_left_tr_10.tStart = t;  // (not accounting for frame time here)
        arrow_left_tr_10.frameNStart = frameN;  // exact frame index
        
        arrow_left_tr_10.setAutoDraw(true);
      }
      
      
      // if arrow_left_tr_10 is active this frame...
      if (arrow_left_tr_10.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_15* updates
      if (t >= 0.1 && key_resp_15.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_15.tStart = t;  // (not accounting for frame time here)
        key_resp_15.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_15.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_15.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_15.clearEvents(); });
      }
      
      // if key_resp_15 is active this frame...
      if (key_resp_15.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_15.getKeys({
          keyList: typeof ['space','left'] === 'string' ? [['space','left']] : ['space','left'], 
          waitRelease: false
        });
        _key_resp_15_allKeys = _key_resp_15_allKeys.concat(theseKeys);
        if (_key_resp_15_allKeys.length > 0) {
          key_resp_15.keys = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].name;  // just the last key pressed
          key_resp_15.rt = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].rt;
          key_resp_15.duration = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of aha_rep_3Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function aha_rep_3RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'aha_rep_3' ---
      for (const thisComponent of aha_rep_3Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('aha_rep_3.stopped', globalClock.getTime());
      // Run 'End Routine' code from code_17
      if ((key_resp_15.keys === "space")) {
          trials_20.finished = true;
          nTr42 = 1;
      } else {
          if ((key_resp_15.keys === "left")) {
              nTr31 = 0;
              nTr32 = 1;
          }
      }
      
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_15.corr, level);
      }
      psychoJS.experiment.addData('key_resp_15.keys', key_resp_15.keys);
      if (typeof key_resp_15.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_15.rt', key_resp_15.rt);
          psychoJS.experiment.addData('key_resp_15.duration', key_resp_15.duration);
          routineTimer.reset();
          }
      
      key_resp_15.stop();
      // the Routine "aha_rep_3" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var ans_inst_2MaxDurationReached;
var ans_inst_2MaxDuration;
var ans_inst_2Components;
function ans_inst_2RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'ans_inst_2' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      ans_inst_2Clock.reset();
      routineTimer.reset();
      ans_inst_2MaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_21
      psychoJS.window.mouseVisible = true;
      
      // reset inst_quest_yes_2 to account for continued clicks & clear times on/off
      inst_quest_yes_2.reset()
      // reset inst_quest_no_2 to account for continued clicks & clear times on/off
      inst_quest_no_2.reset()
      psychoJS.experiment.addData('ans_inst_2.started', globalClock.getTime());
      ans_inst_2MaxDuration = null
      // keep track of which components have finished
      ans_inst_2Components = [];
      ans_inst_2Components.push(inst_quest_2);
      ans_inst_2Components.push(inst_quest_yes_2);
      ans_inst_2Components.push(inst_quest_no_2);
      
      for (const thisComponent of ans_inst_2Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function ans_inst_2RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'ans_inst_2' ---
      // get current time
      t = ans_inst_2Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *inst_quest_2* updates
      if (t >= 0.0 && inst_quest_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        inst_quest_2.tStart = t;  // (not accounting for frame time here)
        inst_quest_2.frameNStart = frameN;  // exact frame index
        
        inst_quest_2.setAutoDraw(true);
      }
      
      
      // if inst_quest_2 is active this frame...
      if (inst_quest_2.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *inst_quest_yes_2* updates
      if (t >= 0.5 && inst_quest_yes_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        inst_quest_yes_2.tStart = t;  // (not accounting for frame time here)
        inst_quest_yes_2.frameNStart = frameN;  // exact frame index
        
        inst_quest_yes_2.setAutoDraw(true);
      }
      
      
      // if inst_quest_yes_2 is active this frame...
      if (inst_quest_yes_2.status === PsychoJS.Status.STARTED) {
      }
      
      if (inst_quest_yes_2.status === PsychoJS.Status.STARTED) {
        // check whether inst_quest_yes_2 has been pressed
        if (inst_quest_yes_2.isClicked) {
          if (!inst_quest_yes_2.wasClicked) {
            // store time of first click
            inst_quest_yes_2.timesOn.push(inst_quest_yes_2.clock.getTime());
            // store time clicked until
            inst_quest_yes_2.timesOff.push(inst_quest_yes_2.clock.getTime());
          } else {
            // update time clicked until;
            inst_quest_yes_2.timesOff[inst_quest_yes_2.timesOff.length - 1] = inst_quest_yes_2.clock.getTime();
          }
          if (!inst_quest_yes_2.wasClicked) {
            // end routine when inst_quest_yes_2 is clicked
            continueRoutine = false;
            
          }
          // if inst_quest_yes_2 is still clicked next frame, it is not a new click
          inst_quest_yes_2.wasClicked = true;
        } else {
          // if inst_quest_yes_2 is clicked next frame, it is a new click
          inst_quest_yes_2.wasClicked = false;
        }
      } else {
        // keep clock at 0 if inst_quest_yes_2 hasn't started / has finished
        inst_quest_yes_2.clock.reset();
        // if inst_quest_yes_2 is clicked next frame, it is a new click
        inst_quest_yes_2.wasClicked = false;
      }
      
      // *inst_quest_no_2* updates
      if (t >= 0.5 && inst_quest_no_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        inst_quest_no_2.tStart = t;  // (not accounting for frame time here)
        inst_quest_no_2.frameNStart = frameN;  // exact frame index
        
        inst_quest_no_2.setAutoDraw(true);
      }
      
      
      // if inst_quest_no_2 is active this frame...
      if (inst_quest_no_2.status === PsychoJS.Status.STARTED) {
      }
      
      if (inst_quest_no_2.status === PsychoJS.Status.STARTED) {
        // check whether inst_quest_no_2 has been pressed
        if (inst_quest_no_2.isClicked) {
          if (!inst_quest_no_2.wasClicked) {
            // store time of first click
            inst_quest_no_2.timesOn.push(inst_quest_no_2.clock.getTime());
            // store time clicked until
            inst_quest_no_2.timesOff.push(inst_quest_no_2.clock.getTime());
          } else {
            // update time clicked until;
            inst_quest_no_2.timesOff[inst_quest_no_2.timesOff.length - 1] = inst_quest_no_2.clock.getTime();
          }
          if (!inst_quest_no_2.wasClicked) {
            // end routine when inst_quest_no_2 is clicked
            continueRoutine = false;
            
          }
          // if inst_quest_no_2 is still clicked next frame, it is not a new click
          inst_quest_no_2.wasClicked = true;
        } else {
          // if inst_quest_no_2 is clicked next frame, it is a new click
          inst_quest_no_2.wasClicked = false;
        }
      } else {
        // keep clock at 0 if inst_quest_no_2 hasn't started / has finished
        inst_quest_no_2.clock.reset();
        // if inst_quest_no_2 is clicked next frame, it is a new click
        inst_quest_no_2.wasClicked = false;
      }
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of ans_inst_2Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function ans_inst_2RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'ans_inst_2' ---
      for (const thisComponent of ans_inst_2Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('ans_inst_2.stopped', globalClock.getTime());
      // Run 'End Routine' code from code_21
      psychoJS.window.mouseVisible = false;
      if (inst_quest_no_2.isClicked) {
          nTr50 = 0;
          nTr49 = 0;
          nTr48 = 0;
      }
      
      psychoJS.experiment.addData('inst_quest_yes_2.numClicks', inst_quest_yes_2.numClicks);
      psychoJS.experiment.addData('inst_quest_yes_2.timesOn', inst_quest_yes_2.timesOn);
      psychoJS.experiment.addData('inst_quest_yes_2.timesOff', inst_quest_yes_2.timesOff);
      psychoJS.experiment.addData('inst_quest_no_2.numClicks', inst_quest_no_2.numClicks);
      psychoJS.experiment.addData('inst_quest_no_2.timesOn', inst_quest_no_2.timesOn);
      psychoJS.experiment.addData('inst_quest_no_2.timesOff', inst_quest_no_2.timesOff);
      // the Routine "ans_inst_2" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var ans_aha_2MaxDurationReached;
var ans_aha_2MaxDuration;
var ans_aha_2Components;
function ans_aha_2RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'ans_aha_2' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      ans_aha_2Clock.reset();
      routineTimer.reset();
      ans_aha_2MaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_22
      psychoJS.window.mouseVisible = true;
      
      // reset aha_inst_quest_yes_2 to account for continued clicks & clear times on/off
      aha_inst_quest_yes_2.reset()
      // reset aha_inst_quest_no_2 to account for continued clicks & clear times on/off
      aha_inst_quest_no_2.reset()
      psychoJS.experiment.addData('ans_aha_2.started', globalClock.getTime());
      ans_aha_2MaxDuration = null
      // keep track of which components have finished
      ans_aha_2Components = [];
      ans_aha_2Components.push(aha_quest_2);
      ans_aha_2Components.push(aha_inst_quest_yes_2);
      ans_aha_2Components.push(aha_inst_quest_no_2);
      
      for (const thisComponent of ans_aha_2Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function ans_aha_2RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'ans_aha_2' ---
      // get current time
      t = ans_aha_2Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *aha_quest_2* updates
      if (t >= 0.0 && aha_quest_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        aha_quest_2.tStart = t;  // (not accounting for frame time here)
        aha_quest_2.frameNStart = frameN;  // exact frame index
        
        aha_quest_2.setAutoDraw(true);
      }
      
      
      // if aha_quest_2 is active this frame...
      if (aha_quest_2.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *aha_inst_quest_yes_2* updates
      if (t >= 0.5 && aha_inst_quest_yes_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        aha_inst_quest_yes_2.tStart = t;  // (not accounting for frame time here)
        aha_inst_quest_yes_2.frameNStart = frameN;  // exact frame index
        
        aha_inst_quest_yes_2.setAutoDraw(true);
      }
      
      
      // if aha_inst_quest_yes_2 is active this frame...
      if (aha_inst_quest_yes_2.status === PsychoJS.Status.STARTED) {
      }
      
      if (aha_inst_quest_yes_2.status === PsychoJS.Status.STARTED) {
        // check whether aha_inst_quest_yes_2 has been pressed
        if (aha_inst_quest_yes_2.isClicked) {
          if (!aha_inst_quest_yes_2.wasClicked) {
            // store time of first click
            aha_inst_quest_yes_2.timesOn.push(aha_inst_quest_yes_2.clock.getTime());
            // store time clicked until
            aha_inst_quest_yes_2.timesOff.push(aha_inst_quest_yes_2.clock.getTime());
          } else {
            // update time clicked until;
            aha_inst_quest_yes_2.timesOff[aha_inst_quest_yes_2.timesOff.length - 1] = aha_inst_quest_yes_2.clock.getTime();
          }
          if (!aha_inst_quest_yes_2.wasClicked) {
            // end routine when aha_inst_quest_yes_2 is clicked
            continueRoutine = false;
            
          }
          // if aha_inst_quest_yes_2 is still clicked next frame, it is not a new click
          aha_inst_quest_yes_2.wasClicked = true;
        } else {
          // if aha_inst_quest_yes_2 is clicked next frame, it is a new click
          aha_inst_quest_yes_2.wasClicked = false;
        }
      } else {
        // keep clock at 0 if aha_inst_quest_yes_2 hasn't started / has finished
        aha_inst_quest_yes_2.clock.reset();
        // if aha_inst_quest_yes_2 is clicked next frame, it is a new click
        aha_inst_quest_yes_2.wasClicked = false;
      }
      
      // *aha_inst_quest_no_2* updates
      if (t >= 0.5 && aha_inst_quest_no_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        aha_inst_quest_no_2.tStart = t;  // (not accounting for frame time here)
        aha_inst_quest_no_2.frameNStart = frameN;  // exact frame index
        
        aha_inst_quest_no_2.setAutoDraw(true);
      }
      
      
      // if aha_inst_quest_no_2 is active this frame...
      if (aha_inst_quest_no_2.status === PsychoJS.Status.STARTED) {
      }
      
      if (aha_inst_quest_no_2.status === PsychoJS.Status.STARTED) {
        // check whether aha_inst_quest_no_2 has been pressed
        if (aha_inst_quest_no_2.isClicked) {
          if (!aha_inst_quest_no_2.wasClicked) {
            // store time of first click
            aha_inst_quest_no_2.timesOn.push(aha_inst_quest_no_2.clock.getTime());
            // store time clicked until
            aha_inst_quest_no_2.timesOff.push(aha_inst_quest_no_2.clock.getTime());
          } else {
            // update time clicked until;
            aha_inst_quest_no_2.timesOff[aha_inst_quest_no_2.timesOff.length - 1] = aha_inst_quest_no_2.clock.getTime();
          }
          if (!aha_inst_quest_no_2.wasClicked) {
            // end routine when aha_inst_quest_no_2 is clicked
            continueRoutine = false;
            
          }
          // if aha_inst_quest_no_2 is still clicked next frame, it is not a new click
          aha_inst_quest_no_2.wasClicked = true;
        } else {
          // if aha_inst_quest_no_2 is clicked next frame, it is a new click
          aha_inst_quest_no_2.wasClicked = false;
        }
      } else {
        // keep clock at 0 if aha_inst_quest_no_2 hasn't started / has finished
        aha_inst_quest_no_2.clock.reset();
        // if aha_inst_quest_no_2 is clicked next frame, it is a new click
        aha_inst_quest_no_2.wasClicked = false;
      }
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of ans_aha_2Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function ans_aha_2RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'ans_aha_2' ---
      for (const thisComponent of ans_aha_2Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('ans_aha_2.stopped', globalClock.getTime());
      // Run 'End Routine' code from code_22
      psychoJS.window.mouseVisible = false;
      if (aha_inst_quest_no_2.isClicked) {
          nTr50 = 0;
          nTr49 = 0;
          nTr48 = 0;
      }
      
      psychoJS.experiment.addData('aha_inst_quest_yes_2.numClicks', aha_inst_quest_yes_2.numClicks);
      psychoJS.experiment.addData('aha_inst_quest_yes_2.timesOn', aha_inst_quest_yes_2.timesOn);
      psychoJS.experiment.addData('aha_inst_quest_yes_2.timesOff', aha_inst_quest_yes_2.timesOff);
      psychoJS.experiment.addData('aha_inst_quest_no_2.numClicks', aha_inst_quest_no_2.numClicks);
      psychoJS.experiment.addData('aha_inst_quest_no_2.timesOn', aha_inst_quest_no_2.timesOn);
      psychoJS.experiment.addData('aha_inst_quest_no_2.timesOff', aha_inst_quest_no_2.timesOff);
      // the Routine "ans_aha_2" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var start_expMaxDurationReached;
var _key_resp_21_allKeys;
var start_expMaxDuration;
var start_expComponents;
function start_expRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'start_exp' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      start_expClock.reset();
      routineTimer.reset();
      start_expMaxDurationReached = false;
      // update component parameters for each repeat
      key_resp_21.keys = undefined;
      key_resp_21.rt = undefined;
      _key_resp_21_allKeys = [];
      psychoJS.experiment.addData('start_exp.started', globalClock.getTime());
      start_expMaxDuration = null
      // keep track of which components have finished
      start_expComponents = [];
      start_expComponents.push(aha_head_rep);
      start_expComponents.push(key_resp_21);
      
      for (const thisComponent of start_expComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function start_expRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'start_exp' ---
      // get current time
      t = start_expClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *aha_head_rep* updates
      if (t >= 0.0 && aha_head_rep.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        aha_head_rep.tStart = t;  // (not accounting for frame time here)
        aha_head_rep.frameNStart = frameN;  // exact frame index
        
        aha_head_rep.setAutoDraw(true);
      }
      
      
      // if aha_head_rep is active this frame...
      if (aha_head_rep.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_21* updates
      if (t >= 0.1 && key_resp_21.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_21.tStart = t;  // (not accounting for frame time here)
        key_resp_21.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_21.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_21.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_21.clearEvents(); });
      }
      
      // if key_resp_21 is active this frame...
      if (key_resp_21.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_21.getKeys({
          keyList: typeof ['space','left'] === 'string' ? [['space','left']] : ['space','left'], 
          waitRelease: false
        });
        _key_resp_21_allKeys = _key_resp_21_allKeys.concat(theseKeys);
        if (_key_resp_21_allKeys.length > 0) {
          key_resp_21.keys = _key_resp_21_allKeys[_key_resp_21_allKeys.length - 1].name;  // just the last key pressed
          key_resp_21.rt = _key_resp_21_allKeys[_key_resp_21_allKeys.length - 1].rt;
          key_resp_21.duration = _key_resp_21_allKeys[_key_resp_21_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of start_expComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function start_expRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'start_exp' ---
      for (const thisComponent of start_expComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('start_exp.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_21.corr, level);
      }
      psychoJS.experiment.addData('key_resp_21.keys', key_resp_21.keys);
      if (typeof key_resp_21.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_21.rt', key_resp_21.rt);
          psychoJS.experiment.addData('key_resp_21.duration', key_resp_21.duration);
          routineTimer.reset();
          }
      
      key_resp_21.stop();
      // the Routine "start_exp" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var exp_pauseMaxDurationReached;
var _key_resp_20_allKeys;
var exp_pauseMaxDuration;
var exp_pauseComponents;
function exp_pauseRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'exp_pause' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      exp_pauseClock.reset();
      routineTimer.reset();
      exp_pauseMaxDurationReached = false;
      // update component parameters for each repeat
      key_resp_20.keys = undefined;
      key_resp_20.rt = undefined;
      _key_resp_20_allKeys = [];
      psychoJS.experiment.addData('exp_pause.started', globalClock.getTime());
      exp_pauseMaxDuration = null
      // keep track of which components have finished
      exp_pauseComponents = [];
      exp_pauseComponents.push(title_exp_pause);
      exp_pauseComponents.push(head_exp_pause);
      exp_pauseComponents.push(key_resp_20);
      
      for (const thisComponent of exp_pauseComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function exp_pauseRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'exp_pause' ---
      // get current time
      t = exp_pauseClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *title_exp_pause* updates
      if (t >= 0.0 && title_exp_pause.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        title_exp_pause.tStart = t;  // (not accounting for frame time here)
        title_exp_pause.frameNStart = frameN;  // exact frame index
        
        title_exp_pause.setAutoDraw(true);
      }
      
      
      // if title_exp_pause is active this frame...
      if (title_exp_pause.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *head_exp_pause* updates
      if (t >= 0.0 && head_exp_pause.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        head_exp_pause.tStart = t;  // (not accounting for frame time here)
        head_exp_pause.frameNStart = frameN;  // exact frame index
        
        head_exp_pause.setAutoDraw(true);
      }
      
      
      // if head_exp_pause is active this frame...
      if (head_exp_pause.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_20* updates
      if (t >= 0.1 && key_resp_20.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_20.tStart = t;  // (not accounting for frame time here)
        key_resp_20.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_20.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_20.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_20.clearEvents(); });
      }
      
      // if key_resp_20 is active this frame...
      if (key_resp_20.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_20.getKeys({
          keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
          waitRelease: false
        });
        _key_resp_20_allKeys = _key_resp_20_allKeys.concat(theseKeys);
        if (_key_resp_20_allKeys.length > 0) {
          key_resp_20.keys = _key_resp_20_allKeys[_key_resp_20_allKeys.length - 1].name;  // just the last key pressed
          key_resp_20.rt = _key_resp_20_allKeys[_key_resp_20_allKeys.length - 1].rt;
          key_resp_20.duration = _key_resp_20_allKeys[_key_resp_20_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of exp_pauseComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function exp_pauseRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'exp_pause' ---
      for (const thisComponent of exp_pauseComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('exp_pause.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_20.corr, level);
      }
      psychoJS.experiment.addData('key_resp_20.keys', key_resp_20.keys);
      if (typeof key_resp_20.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_20.rt', key_resp_20.rt);
          psychoJS.experiment.addData('key_resp_20.duration', key_resp_20.duration);
          routineTimer.reset();
          }
      
      key_resp_20.stop();
      // the Routine "exp_pause" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var exp_1MaxDurationReached;
var exp_1MaxDuration;
var exp_1Components;
function exp_1RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'exp_1' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      exp_1Clock.reset(routineTimer.getTime());
      routineTimer.add(0.500000);
      exp_1MaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_23
      psychoJS.window.mouseVisible = false;
      
      psychoJS.experiment.addData('exp_1.started', globalClock.getTime());
      exp_1MaxDuration = null
      // keep track of which components have finished
      exp_1Components = [];
      exp_1Components.push(cross_exp);
      
      for (const thisComponent of exp_1Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function exp_1RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'exp_1' ---
      // get current time
      t = exp_1Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *cross_exp* updates
      if (t >= 0.0 && cross_exp.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        cross_exp.tStart = t;  // (not accounting for frame time here)
        cross_exp.frameNStart = frameN;  // exact frame index
        
        cross_exp.setAutoDraw(true);
      }
      
      
      // if cross_exp is active this frame...
      if (cross_exp.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (cross_exp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        cross_exp.tStop = t;  // not accounting for scr refresh
        cross_exp.frameNStop = frameN;  // exact frame index
        // update status
        cross_exp.status = PsychoJS.Status.FINISHED;
        cross_exp.setAutoDraw(false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of exp_1Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function exp_1RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'exp_1' ---
      for (const thisComponent of exp_1Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('exp_1.stopped', globalClock.getTime());
      // Run 'End Routine' code from code_23
      n_trial_exp += 1;
      nTr51 = 0;
      nTr52 = 0;
      nTr53 = 0;
      nTr54 = 0;
      nTr55 = 0;
      nTr56 = 0;
      nTr57 = 0;
      nTr58 = 0;
      nTr59 = 0;
      if ((n_trial_exp === 25)) {
          nTr60 = 1;
      } else {
          if ((n_trial_exp === 50)) {
              nTr60 = 1;
          } else {
              nTr60 = 0;
          }
      }
      
      if (routineForceEnded) {
          routineTimer.reset();} else if (exp_1MaxDurationReached) {
          exp_1Clock.add(exp_1MaxDuration);
      } else {
          exp_1Clock.add(0.500000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var exp_2MaxDurationReached;
var _key_resp_18_allKeys;
var exp_2MaxDuration;
var exp_2Components;
function exp_2RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'exp_2' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      exp_2Clock.reset(routineTimer.getTime());
      routineTimer.add(30.800000);
      exp_2MaxDurationReached = false;
      // update component parameters for each repeat
      num_exp.setText((n_trial_exp.toString() + "/"));
      senten_exp.setText(sen_exp);
      key_resp_18.keys = undefined;
      key_resp_18.rt = undefined;
      _key_resp_18_allKeys = [];
      psychoJS.experiment.addData('exp_2.started', globalClock.getTime());
      exp_2MaxDuration = null
      // keep track of which components have finished
      exp_2Components = [];
      exp_2Components.push(num_exp);
      exp_2Components.push(senten_exp);
      exp_2Components.push(text_answ_exp);
      exp_2Components.push(key_resp_18);
      exp_2Components.push(text_slow_exp);
      
      for (const thisComponent of exp_2Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function exp_2RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'exp_2' ---
      // get current time
      t = exp_2Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *num_exp* updates
      if (t >= 0.0 && num_exp.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        num_exp.tStart = t;  // (not accounting for frame time here)
        num_exp.frameNStart = frameN;  // exact frame index
        
        num_exp.setAutoDraw(true);
      }
      
      
      // if num_exp is active this frame...
      if (num_exp.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 30.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (num_exp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        num_exp.tStop = t;  // not accounting for scr refresh
        num_exp.frameNStop = frameN;  // exact frame index
        // update status
        num_exp.status = PsychoJS.Status.FINISHED;
        num_exp.setAutoDraw(false);
      }
      
      
      // *senten_exp* updates
      if (t >= 0.0 && senten_exp.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        senten_exp.tStart = t;  // (not accounting for frame time here)
        senten_exp.frameNStart = frameN;  // exact frame index
        
        senten_exp.setAutoDraw(true);
      }
      
      
      // if senten_exp is active this frame...
      if (senten_exp.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 30.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (senten_exp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        senten_exp.tStop = t;  // not accounting for scr refresh
        senten_exp.frameNStop = frameN;  // exact frame index
        // update status
        senten_exp.status = PsychoJS.Status.FINISHED;
        senten_exp.setAutoDraw(false);
      }
      
      
      // *text_answ_exp* updates
      if (t >= 0.0 && text_answ_exp.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_answ_exp.tStart = t;  // (not accounting for frame time here)
        text_answ_exp.frameNStart = frameN;  // exact frame index
        
        text_answ_exp.setAutoDraw(true);
      }
      
      
      // if text_answ_exp is active this frame...
      if (text_answ_exp.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 30.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_answ_exp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_answ_exp.tStop = t;  // not accounting for scr refresh
        text_answ_exp.frameNStop = frameN;  // exact frame index
        // update status
        text_answ_exp.status = PsychoJS.Status.FINISHED;
        text_answ_exp.setAutoDraw(false);
      }
      
      
      // *key_resp_18* updates
      if (t >= 0.5 && key_resp_18.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_18.tStart = t;  // (not accounting for frame time here)
        key_resp_18.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_18.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_18.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_18.clearEvents(); });
      }
      frameRemains = 30.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if ((key_resp_18.status === PsychoJS.Status.STARTED || key_resp_18.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
        // keep track of stop time/frame for later
        key_resp_18.tStop = t;  // not accounting for scr refresh
        key_resp_18.frameNStop = frameN;  // exact frame index
        // update status
        key_resp_18.status = PsychoJS.Status.FINISHED;
        frameRemains = 30.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if ((key_resp_18.status === PsychoJS.Status.STARTED || key_resp_18.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
          // keep track of stop time/frame for later
          key_resp_18.tStop = t;  // not accounting for scr refresh
          key_resp_18.frameNStop = frameN;  // exact frame index
          // update status
          key_resp_18.status = PsychoJS.Status.FINISHED;
          key_resp_18.status = PsychoJS.Status.FINISHED;
            }
          
        }
        
        // if key_resp_18 is active this frame...
        if (key_resp_18.status === PsychoJS.Status.STARTED) {
          let theseKeys = key_resp_18.getKeys({
            keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
            waitRelease: false
          });
          _key_resp_18_allKeys = _key_resp_18_allKeys.concat(theseKeys);
          if (_key_resp_18_allKeys.length > 0) {
            key_resp_18.keys = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].name;  // just the last key pressed
            key_resp_18.rt = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].rt;
            key_resp_18.duration = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        
        // *text_slow_exp* updates
        if (t >= 30.0 && text_slow_exp.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_slow_exp.tStart = t;  // (not accounting for frame time here)
          text_slow_exp.frameNStart = frameN;  // exact frame index
          
          text_slow_exp.setAutoDraw(true);
        }
        
        
        // if text_slow_exp is active this frame...
        if (text_slow_exp.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 30.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_slow_exp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_slow_exp.tStop = t;  // not accounting for scr refresh
          text_slow_exp.frameNStop = frameN;  // exact frame index
          // update status
          text_slow_exp.status = PsychoJS.Status.FINISHED;
          text_slow_exp.setAutoDraw(false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of exp_2Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function exp_2RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'exp_2' ---
        for (const thisComponent of exp_2Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('exp_2.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(key_resp_18.corr, level);
        }
        psychoJS.experiment.addData('key_resp_18.keys', key_resp_18.keys);
        if (typeof key_resp_18.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('key_resp_18.rt', key_resp_18.rt);
            psychoJS.experiment.addData('key_resp_18.duration', key_resp_18.duration);
            routineTimer.reset();
            }
        
        key_resp_18.stop();
        // Run 'End Routine' code from code_24
        if ((key_resp_18.keys === "space")) {
            nTr51 = 1;
            nTr53 = 1;
        } else {
            nTr55 = 1;
            nTr56 = 1;
        }
        
        if (routineForceEnded) {
            routineTimer.reset();} else if (exp_2MaxDurationReached) {
            exp_2Clock.add(exp_2MaxDuration);
        } else {
            exp_2Clock.add(30.800000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var routine_2MaxDurationReached;
var routine_2MaxDuration;
var routine_2Components;
function routine_2RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'routine_2' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        routine_2Clock.reset();
        routineTimer.reset();
        routine_2MaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_51
        psychoJS.window.mouseVisible = true;
        
        // reset yes_impass_tr_2 to account for continued clicks & clear times on/off
        yes_impass_tr_2.reset()
        // reset no_impass_tr_2 to account for continued clicks & clear times on/off
        no_impass_tr_2.reset()
        psychoJS.experiment.addData('routine_2.started', globalClock.getTime());
        routine_2MaxDuration = null
        // keep track of which components have finished
        routine_2Components = [];
        routine_2Components.push(impass_txt_tr_2);
        routine_2Components.push(yes_impass_tr_2);
        routine_2Components.push(no_impass_tr_2);
        
        for (const thisComponent of routine_2Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function routine_2RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'routine_2' ---
        // get current time
        t = routine_2Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *impass_txt_tr_2* updates
        if (t >= 0.0 && impass_txt_tr_2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          impass_txt_tr_2.tStart = t;  // (not accounting for frame time here)
          impass_txt_tr_2.frameNStart = frameN;  // exact frame index
          
          impass_txt_tr_2.setAutoDraw(true);
        }
        
        
        // if impass_txt_tr_2 is active this frame...
        if (impass_txt_tr_2.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *yes_impass_tr_2* updates
        if (t >= 0.5 && yes_impass_tr_2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          yes_impass_tr_2.tStart = t;  // (not accounting for frame time here)
          yes_impass_tr_2.frameNStart = frameN;  // exact frame index
          
          yes_impass_tr_2.setAutoDraw(true);
        }
        
        
        // if yes_impass_tr_2 is active this frame...
        if (yes_impass_tr_2.status === PsychoJS.Status.STARTED) {
        }
        
        if (yes_impass_tr_2.status === PsychoJS.Status.STARTED) {
          // check whether yes_impass_tr_2 has been pressed
          if (yes_impass_tr_2.isClicked) {
            if (!yes_impass_tr_2.wasClicked) {
              // store time of first click
              yes_impass_tr_2.timesOn.push(yes_impass_tr_2.clock.getTime());
              // store time clicked until
              yes_impass_tr_2.timesOff.push(yes_impass_tr_2.clock.getTime());
            } else {
              // update time clicked until;
              yes_impass_tr_2.timesOff[yes_impass_tr_2.timesOff.length - 1] = yes_impass_tr_2.clock.getTime();
            }
            if (!yes_impass_tr_2.wasClicked) {
              // end routine when yes_impass_tr_2 is clicked
              continueRoutine = false;
              
            }
            // if yes_impass_tr_2 is still clicked next frame, it is not a new click
            yes_impass_tr_2.wasClicked = true;
          } else {
            // if yes_impass_tr_2 is clicked next frame, it is a new click
            yes_impass_tr_2.wasClicked = false;
          }
        } else {
          // keep clock at 0 if yes_impass_tr_2 hasn't started / has finished
          yes_impass_tr_2.clock.reset();
          // if yes_impass_tr_2 is clicked next frame, it is a new click
          yes_impass_tr_2.wasClicked = false;
        }
        
        // *no_impass_tr_2* updates
        if (t >= 0.5 && no_impass_tr_2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          no_impass_tr_2.tStart = t;  // (not accounting for frame time here)
          no_impass_tr_2.frameNStart = frameN;  // exact frame index
          
          no_impass_tr_2.setAutoDraw(true);
        }
        
        
        // if no_impass_tr_2 is active this frame...
        if (no_impass_tr_2.status === PsychoJS.Status.STARTED) {
        }
        
        if (no_impass_tr_2.status === PsychoJS.Status.STARTED) {
          // check whether no_impass_tr_2 has been pressed
          if (no_impass_tr_2.isClicked) {
            if (!no_impass_tr_2.wasClicked) {
              // store time of first click
              no_impass_tr_2.timesOn.push(no_impass_tr_2.clock.getTime());
              // store time clicked until
              no_impass_tr_2.timesOff.push(no_impass_tr_2.clock.getTime());
            } else {
              // update time clicked until;
              no_impass_tr_2.timesOff[no_impass_tr_2.timesOff.length - 1] = no_impass_tr_2.clock.getTime();
            }
            if (!no_impass_tr_2.wasClicked) {
              // end routine when no_impass_tr_2 is clicked
              continueRoutine = false;
              
            }
            // if no_impass_tr_2 is still clicked next frame, it is not a new click
            no_impass_tr_2.wasClicked = true;
          } else {
            // if no_impass_tr_2 is clicked next frame, it is a new click
            no_impass_tr_2.wasClicked = false;
          }
        } else {
          // keep clock at 0 if no_impass_tr_2 hasn't started / has finished
          no_impass_tr_2.clock.reset();
          // if no_impass_tr_2 is clicked next frame, it is a new click
          no_impass_tr_2.wasClicked = false;
        }
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of routine_2Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function routine_2RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'routine_2' ---
        for (const thisComponent of routine_2Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('routine_2.stopped', globalClock.getTime());
        // Run 'End Routine' code from code_51
        if (no_impass_tr_2.isClicked) {
            nTr57 = 0;
        } else {
            if (yes_impass_tr_2.isClicked) {
                nTr57 = 1;
            }
        }
        
        psychoJS.experiment.addData('yes_impass_tr_2.numClicks', yes_impass_tr_2.numClicks);
        psychoJS.experiment.addData('yes_impass_tr_2.timesOn', yes_impass_tr_2.timesOn);
        psychoJS.experiment.addData('yes_impass_tr_2.timesOff', yes_impass_tr_2.timesOff);
        psychoJS.experiment.addData('no_impass_tr_2.numClicks', no_impass_tr_2.numClicks);
        psychoJS.experiment.addData('no_impass_tr_2.timesOn', no_impass_tr_2.timesOn);
        psychoJS.experiment.addData('no_impass_tr_2.timesOff', no_impass_tr_2.timesOff);
        // the Routine "routine_2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var routine_3MaxDurationReached;
var routine_3MaxDuration;
var routine_3Components;
function routine_3RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'routine_3' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        routine_3Clock.reset();
        routineTimer.reset();
        routine_3MaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_52
        psychoJS.window.mouseVisible = true;
        
        // reset type_impass_confl to account for continued clicks & clear times on/off
        type_impass_confl.reset()
        // reset type_impass_empty to account for continued clicks & clear times on/off
        type_impass_empty.reset()
        psychoJS.experiment.addData('routine_3.started', globalClock.getTime());
        routine_3MaxDuration = null
        // keep track of which components have finished
        routine_3Components = [];
        routine_3Components.push(type_impass_txt);
        routine_3Components.push(type_impass_confl);
        routine_3Components.push(type_impass_empty);
        
        for (const thisComponent of routine_3Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function routine_3RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'routine_3' ---
        // get current time
        t = routine_3Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *type_impass_txt* updates
        if (t >= 0.0 && type_impass_txt.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          type_impass_txt.tStart = t;  // (not accounting for frame time here)
          type_impass_txt.frameNStart = frameN;  // exact frame index
          
          type_impass_txt.setAutoDraw(true);
        }
        
        
        // if type_impass_txt is active this frame...
        if (type_impass_txt.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *type_impass_confl* updates
        if (t >= 0.5 && type_impass_confl.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          type_impass_confl.tStart = t;  // (not accounting for frame time here)
          type_impass_confl.frameNStart = frameN;  // exact frame index
          
          type_impass_confl.setAutoDraw(true);
        }
        
        
        // if type_impass_confl is active this frame...
        if (type_impass_confl.status === PsychoJS.Status.STARTED) {
        }
        
        if (type_impass_confl.status === PsychoJS.Status.STARTED) {
          // check whether type_impass_confl has been pressed
          if (type_impass_confl.isClicked) {
            if (!type_impass_confl.wasClicked) {
              // store time of first click
              type_impass_confl.timesOn.push(type_impass_confl.clock.getTime());
              // store time clicked until
              type_impass_confl.timesOff.push(type_impass_confl.clock.getTime());
            } else {
              // update time clicked until;
              type_impass_confl.timesOff[type_impass_confl.timesOff.length - 1] = type_impass_confl.clock.getTime();
            }
            if (!type_impass_confl.wasClicked) {
              // end routine when type_impass_confl is clicked
              continueRoutine = false;
              
            }
            // if type_impass_confl is still clicked next frame, it is not a new click
            type_impass_confl.wasClicked = true;
          } else {
            // if type_impass_confl is clicked next frame, it is a new click
            type_impass_confl.wasClicked = false;
          }
        } else {
          // keep clock at 0 if type_impass_confl hasn't started / has finished
          type_impass_confl.clock.reset();
          // if type_impass_confl is clicked next frame, it is a new click
          type_impass_confl.wasClicked = false;
        }
        
        // *type_impass_empty* updates
        if (t >= 0.5 && type_impass_empty.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          type_impass_empty.tStart = t;  // (not accounting for frame time here)
          type_impass_empty.frameNStart = frameN;  // exact frame index
          
          type_impass_empty.setAutoDraw(true);
        }
        
        
        // if type_impass_empty is active this frame...
        if (type_impass_empty.status === PsychoJS.Status.STARTED) {
        }
        
        if (type_impass_empty.status === PsychoJS.Status.STARTED) {
          // check whether type_impass_empty has been pressed
          if (type_impass_empty.isClicked) {
            if (!type_impass_empty.wasClicked) {
              // store time of first click
              type_impass_empty.timesOn.push(type_impass_empty.clock.getTime());
              // store time clicked until
              type_impass_empty.timesOff.push(type_impass_empty.clock.getTime());
            } else {
              // update time clicked until;
              type_impass_empty.timesOff[type_impass_empty.timesOff.length - 1] = type_impass_empty.clock.getTime();
            }
            if (!type_impass_empty.wasClicked) {
              // end routine when type_impass_empty is clicked
              continueRoutine = false;
              
            }
            // if type_impass_empty is still clicked next frame, it is not a new click
            type_impass_empty.wasClicked = true;
          } else {
            // if type_impass_empty is clicked next frame, it is a new click
            type_impass_empty.wasClicked = false;
          }
        } else {
          // keep clock at 0 if type_impass_empty hasn't started / has finished
          type_impass_empty.clock.reset();
          // if type_impass_empty is clicked next frame, it is a new click
          type_impass_empty.wasClicked = false;
        }
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of routine_3Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function routine_3RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'routine_3' ---
        for (const thisComponent of routine_3Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('routine_3.stopped', globalClock.getTime());
        psychoJS.experiment.addData('type_impass_confl.numClicks', type_impass_confl.numClicks);
        psychoJS.experiment.addData('type_impass_confl.timesOn', type_impass_confl.timesOn);
        psychoJS.experiment.addData('type_impass_confl.timesOff', type_impass_confl.timesOff);
        psychoJS.experiment.addData('type_impass_empty.numClicks', type_impass_empty.numClicks);
        psychoJS.experiment.addData('type_impass_empty.timesOn', type_impass_empty.timesOn);
        psychoJS.experiment.addData('type_impass_empty.timesOff', type_impass_empty.timesOff);
        // the Routine "routine_3" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var exp_3MaxDurationReached;
var exp_3MaxDuration;
var exp_3Components;
function exp_3RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'exp_3' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        exp_3Clock.reset();
        routineTimer.reset();
        exp_3MaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_25
        psychoJS.window.mouseVisible = true;
        
        entr_ans_exp.setText('');
        entr_ans_exp.refresh();
        // reset button_entr_ans_exp to account for continued clicks & clear times on/off
        button_entr_ans_exp.reset()
        psychoJS.experiment.addData('exp_3.started', globalClock.getTime());
        exp_3MaxDuration = null
        // keep track of which components have finished
        exp_3Components = [];
        exp_3Components.push(entr_ans_txt_exp);
        exp_3Components.push(entr_ans_exp);
        exp_3Components.push(button_entr_ans_exp);
        
        for (const thisComponent of exp_3Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function exp_3RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'exp_3' ---
        // get current time
        t = exp_3Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        // Run 'Each Frame' code from code_25
        if ((entr_ans_exp.text && entr_ans_exp.text.trim())) {
            button_entr_ans_exp.setAutoDraw(true);
        } else {
            button_entr_ans_exp.setAutoDraw(false);
        }
        
        
        // *entr_ans_txt_exp* updates
        if (t >= 0.0 && entr_ans_txt_exp.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          entr_ans_txt_exp.tStart = t;  // (not accounting for frame time here)
          entr_ans_txt_exp.frameNStart = frameN;  // exact frame index
          
          entr_ans_txt_exp.setAutoDraw(true);
        }
        
        
        // if entr_ans_txt_exp is active this frame...
        if (entr_ans_txt_exp.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *entr_ans_exp* updates
        if (t >= 0.0 && entr_ans_exp.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          entr_ans_exp.tStart = t;  // (not accounting for frame time here)
          entr_ans_exp.frameNStart = frameN;  // exact frame index
          
          entr_ans_exp.setAutoDraw(true);
        }
        
        
        // if entr_ans_exp is active this frame...
        if (entr_ans_exp.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *button_entr_ans_exp* updates
        
        // if button_entr_ans_exp is active this frame...
        if (button_entr_ans_exp.status === PsychoJS.Status.STARTED) {
        }
        
        if (button_entr_ans_exp.status === PsychoJS.Status.STARTED) {
          // check whether button_entr_ans_exp has been pressed
          if (button_entr_ans_exp.isClicked) {
            if (!button_entr_ans_exp.wasClicked) {
              // store time of first click
              button_entr_ans_exp.timesOn.push(button_entr_ans_exp.clock.getTime());
              // store time clicked until
              button_entr_ans_exp.timesOff.push(button_entr_ans_exp.clock.getTime());
            } else {
              // update time clicked until;
              button_entr_ans_exp.timesOff[button_entr_ans_exp.timesOff.length - 1] = button_entr_ans_exp.clock.getTime();
            }
            if (!button_entr_ans_exp.wasClicked) {
              // end routine when button_entr_ans_exp is clicked
              continueRoutine = false;
              
            }
            // if button_entr_ans_exp is still clicked next frame, it is not a new click
            button_entr_ans_exp.wasClicked = true;
          } else {
            // if button_entr_ans_exp is clicked next frame, it is a new click
            button_entr_ans_exp.wasClicked = false;
          }
        } else {
          // keep clock at 0 if button_entr_ans_exp hasn't started / has finished
          button_entr_ans_exp.clock.reset();
          // if button_entr_ans_exp is clicked next frame, it is a new click
          button_entr_ans_exp.wasClicked = false;
        }
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of exp_3Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function exp_3RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'exp_3' ---
        for (const thisComponent of exp_3Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('exp_3.stopped', globalClock.getTime());
        psychoJS.experiment.addData('entr_ans_exp.text',entr_ans_exp.text)
        psychoJS.experiment.addData('button_entr_ans_exp.numClicks', button_entr_ans_exp.numClicks);
        psychoJS.experiment.addData('button_entr_ans_exp.timesOn', button_entr_ans_exp.timesOn);
        psychoJS.experiment.addData('button_entr_ans_exp.timesOff', button_entr_ans_exp.timesOff);
        // the Routine "exp_3" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var exp_4MaxDurationReached;
var exp_4MaxDuration;
var exp_4Components;
function exp_4RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'exp_4' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        exp_4Clock.reset();
        routineTimer.reset();
        exp_4MaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_32
        psychoJS.window.mouseVisible = true;
        
        // reset aha_quest_exp_yes to account for continued clicks & clear times on/off
        aha_quest_exp_yes.reset()
        // reset aha_quest_exp_no to account for continued clicks & clear times on/off
        aha_quest_exp_no.reset()
        psychoJS.experiment.addData('exp_4.started', globalClock.getTime());
        exp_4MaxDuration = null
        // keep track of which components have finished
        exp_4Components = [];
        exp_4Components.push(aha_quest_exp);
        exp_4Components.push(aha_quest_exp_yes);
        exp_4Components.push(aha_quest_exp_no);
        
        for (const thisComponent of exp_4Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function exp_4RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'exp_4' ---
        // get current time
        t = exp_4Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *aha_quest_exp* updates
        if (t >= 0.0 && aha_quest_exp.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          aha_quest_exp.tStart = t;  // (not accounting for frame time here)
          aha_quest_exp.frameNStart = frameN;  // exact frame index
          
          aha_quest_exp.setAutoDraw(true);
        }
        
        
        // if aha_quest_exp is active this frame...
        if (aha_quest_exp.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *aha_quest_exp_yes* updates
        if (t >= 0.5 && aha_quest_exp_yes.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          aha_quest_exp_yes.tStart = t;  // (not accounting for frame time here)
          aha_quest_exp_yes.frameNStart = frameN;  // exact frame index
          
          aha_quest_exp_yes.setAutoDraw(true);
        }
        
        
        // if aha_quest_exp_yes is active this frame...
        if (aha_quest_exp_yes.status === PsychoJS.Status.STARTED) {
        }
        
        if (aha_quest_exp_yes.status === PsychoJS.Status.STARTED) {
          // check whether aha_quest_exp_yes has been pressed
          if (aha_quest_exp_yes.isClicked) {
            if (!aha_quest_exp_yes.wasClicked) {
              // store time of first click
              aha_quest_exp_yes.timesOn.push(aha_quest_exp_yes.clock.getTime());
              // store time clicked until
              aha_quest_exp_yes.timesOff.push(aha_quest_exp_yes.clock.getTime());
            } else {
              // update time clicked until;
              aha_quest_exp_yes.timesOff[aha_quest_exp_yes.timesOff.length - 1] = aha_quest_exp_yes.clock.getTime();
            }
            if (!aha_quest_exp_yes.wasClicked) {
              // end routine when aha_quest_exp_yes is clicked
              continueRoutine = false;
              
            }
            // if aha_quest_exp_yes is still clicked next frame, it is not a new click
            aha_quest_exp_yes.wasClicked = true;
          } else {
            // if aha_quest_exp_yes is clicked next frame, it is a new click
            aha_quest_exp_yes.wasClicked = false;
          }
        } else {
          // keep clock at 0 if aha_quest_exp_yes hasn't started / has finished
          aha_quest_exp_yes.clock.reset();
          // if aha_quest_exp_yes is clicked next frame, it is a new click
          aha_quest_exp_yes.wasClicked = false;
        }
        
        // *aha_quest_exp_no* updates
        if (t >= 0.5 && aha_quest_exp_no.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          aha_quest_exp_no.tStart = t;  // (not accounting for frame time here)
          aha_quest_exp_no.frameNStart = frameN;  // exact frame index
          
          aha_quest_exp_no.setAutoDraw(true);
        }
        
        
        // if aha_quest_exp_no is active this frame...
        if (aha_quest_exp_no.status === PsychoJS.Status.STARTED) {
        }
        
        if (aha_quest_exp_no.status === PsychoJS.Status.STARTED) {
          // check whether aha_quest_exp_no has been pressed
          if (aha_quest_exp_no.isClicked) {
            if (!aha_quest_exp_no.wasClicked) {
              // store time of first click
              aha_quest_exp_no.timesOn.push(aha_quest_exp_no.clock.getTime());
              // store time clicked until
              aha_quest_exp_no.timesOff.push(aha_quest_exp_no.clock.getTime());
            } else {
              // update time clicked until;
              aha_quest_exp_no.timesOff[aha_quest_exp_no.timesOff.length - 1] = aha_quest_exp_no.clock.getTime();
            }
            if (!aha_quest_exp_no.wasClicked) {
              // end routine when aha_quest_exp_no is clicked
              continueRoutine = false;
              
            }
            // if aha_quest_exp_no is still clicked next frame, it is not a new click
            aha_quest_exp_no.wasClicked = true;
          } else {
            // if aha_quest_exp_no is clicked next frame, it is a new click
            aha_quest_exp_no.wasClicked = false;
          }
        } else {
          // keep clock at 0 if aha_quest_exp_no hasn't started / has finished
          aha_quest_exp_no.clock.reset();
          // if aha_quest_exp_no is clicked next frame, it is a new click
          aha_quest_exp_no.wasClicked = false;
        }
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of exp_4Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function exp_4RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'exp_4' ---
        for (const thisComponent of exp_4Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('exp_4.stopped', globalClock.getTime());
        psychoJS.experiment.addData('aha_quest_exp_yes.numClicks', aha_quest_exp_yes.numClicks);
        psychoJS.experiment.addData('aha_quest_exp_yes.timesOn', aha_quest_exp_yes.timesOn);
        psychoJS.experiment.addData('aha_quest_exp_yes.timesOff', aha_quest_exp_yes.timesOff);
        psychoJS.experiment.addData('aha_quest_exp_no.numClicks', aha_quest_exp_no.numClicks);
        psychoJS.experiment.addData('aha_quest_exp_no.timesOn', aha_quest_exp_no.timesOn);
        psychoJS.experiment.addData('aha_quest_exp_no.timesOff', aha_quest_exp_no.timesOff);
        // the Routine "exp_4" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var exp_5MaxDurationReached;
var exp_5MaxDuration;
var exp_5Components;
function exp_5RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'exp_5' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        exp_5Clock.reset();
        routineTimer.reset();
        exp_5MaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_33
        psychoJS.window.mouseVisible = true;
        
        // reset conf_quest_exp_yes to account for continued clicks & clear times on/off
        conf_quest_exp_yes.reset()
        // reset conf_quest_exp_no to account for continued clicks & clear times on/off
        conf_quest_exp_no.reset()
        psychoJS.experiment.addData('exp_5.started', globalClock.getTime());
        exp_5MaxDuration = null
        // keep track of which components have finished
        exp_5Components = [];
        exp_5Components.push(conf_quest_exp);
        exp_5Components.push(conf_quest_exp_yes);
        exp_5Components.push(conf_quest_exp_no);
        
        for (const thisComponent of exp_5Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function exp_5RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'exp_5' ---
        // get current time
        t = exp_5Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *conf_quest_exp* updates
        if (t >= 0.0 && conf_quest_exp.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          conf_quest_exp.tStart = t;  // (not accounting for frame time here)
          conf_quest_exp.frameNStart = frameN;  // exact frame index
          
          conf_quest_exp.setAutoDraw(true);
        }
        
        
        // if conf_quest_exp is active this frame...
        if (conf_quest_exp.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *conf_quest_exp_yes* updates
        if (t >= 0.5 && conf_quest_exp_yes.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          conf_quest_exp_yes.tStart = t;  // (not accounting for frame time here)
          conf_quest_exp_yes.frameNStart = frameN;  // exact frame index
          
          conf_quest_exp_yes.setAutoDraw(true);
        }
        
        
        // if conf_quest_exp_yes is active this frame...
        if (conf_quest_exp_yes.status === PsychoJS.Status.STARTED) {
        }
        
        if (conf_quest_exp_yes.status === PsychoJS.Status.STARTED) {
          // check whether conf_quest_exp_yes has been pressed
          if (conf_quest_exp_yes.isClicked) {
            if (!conf_quest_exp_yes.wasClicked) {
              // store time of first click
              conf_quest_exp_yes.timesOn.push(conf_quest_exp_yes.clock.getTime());
              // store time clicked until
              conf_quest_exp_yes.timesOff.push(conf_quest_exp_yes.clock.getTime());
            } else {
              // update time clicked until;
              conf_quest_exp_yes.timesOff[conf_quest_exp_yes.timesOff.length - 1] = conf_quest_exp_yes.clock.getTime();
            }
            if (!conf_quest_exp_yes.wasClicked) {
              // end routine when conf_quest_exp_yes is clicked
              continueRoutine = false;
              
            }
            // if conf_quest_exp_yes is still clicked next frame, it is not a new click
            conf_quest_exp_yes.wasClicked = true;
          } else {
            // if conf_quest_exp_yes is clicked next frame, it is a new click
            conf_quest_exp_yes.wasClicked = false;
          }
        } else {
          // keep clock at 0 if conf_quest_exp_yes hasn't started / has finished
          conf_quest_exp_yes.clock.reset();
          // if conf_quest_exp_yes is clicked next frame, it is a new click
          conf_quest_exp_yes.wasClicked = false;
        }
        
        // *conf_quest_exp_no* updates
        if (t >= 0.5 && conf_quest_exp_no.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          conf_quest_exp_no.tStart = t;  // (not accounting for frame time here)
          conf_quest_exp_no.frameNStart = frameN;  // exact frame index
          
          conf_quest_exp_no.setAutoDraw(true);
        }
        
        
        // if conf_quest_exp_no is active this frame...
        if (conf_quest_exp_no.status === PsychoJS.Status.STARTED) {
        }
        
        if (conf_quest_exp_no.status === PsychoJS.Status.STARTED) {
          // check whether conf_quest_exp_no has been pressed
          if (conf_quest_exp_no.isClicked) {
            if (!conf_quest_exp_no.wasClicked) {
              // store time of first click
              conf_quest_exp_no.timesOn.push(conf_quest_exp_no.clock.getTime());
              // store time clicked until
              conf_quest_exp_no.timesOff.push(conf_quest_exp_no.clock.getTime());
            } else {
              // update time clicked until;
              conf_quest_exp_no.timesOff[conf_quest_exp_no.timesOff.length - 1] = conf_quest_exp_no.clock.getTime();
            }
            if (!conf_quest_exp_no.wasClicked) {
              // end routine when conf_quest_exp_no is clicked
              continueRoutine = false;
              
            }
            // if conf_quest_exp_no is still clicked next frame, it is not a new click
            conf_quest_exp_no.wasClicked = true;
          } else {
            // if conf_quest_exp_no is clicked next frame, it is a new click
            conf_quest_exp_no.wasClicked = false;
          }
        } else {
          // keep clock at 0 if conf_quest_exp_no hasn't started / has finished
          conf_quest_exp_no.clock.reset();
          // if conf_quest_exp_no is clicked next frame, it is a new click
          conf_quest_exp_no.wasClicked = false;
        }
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of exp_5Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function exp_5RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'exp_5' ---
        for (const thisComponent of exp_5Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('exp_5.stopped', globalClock.getTime());
        psychoJS.experiment.addData('conf_quest_exp_yes.numClicks', conf_quest_exp_yes.numClicks);
        psychoJS.experiment.addData('conf_quest_exp_yes.timesOn', conf_quest_exp_yes.timesOn);
        psychoJS.experiment.addData('conf_quest_exp_yes.timesOff', conf_quest_exp_yes.timesOff);
        psychoJS.experiment.addData('conf_quest_exp_no.numClicks', conf_quest_exp_no.numClicks);
        psychoJS.experiment.addData('conf_quest_exp_no.timesOn', conf_quest_exp_no.timesOn);
        psychoJS.experiment.addData('conf_quest_exp_no.timesOff', conf_quest_exp_no.timesOff);
        // the Routine "exp_5" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var exp_6MaxDurationReached;
var exp_6MaxDuration;
var exp_6Components;
function exp_6RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'exp_6' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        exp_6Clock.reset();
        routineTimer.reset();
        exp_6MaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_34
        psychoJS.window.mouseVisible = true;
        
        sen_txt_exp.setText(("\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435: " + sen_exp));
        right_ans_txt_exp.setText(("\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442: " + ans_exp));
        right_ans_quest_exp.setText('Совпал ли Ваш ответ с правильным?');
        // reset right_ans_quest_exp_yes to account for continued clicks & clear times on/off
        right_ans_quest_exp_yes.reset()
        // reset right_ans_quest_exp_no to account for continued clicks & clear times on/off
        right_ans_quest_exp_no.reset()
        psychoJS.experiment.addData('exp_6.started', globalClock.getTime());
        exp_6MaxDuration = null
        // keep track of which components have finished
        exp_6Components = [];
        exp_6Components.push(sen_txt_exp);
        exp_6Components.push(right_ans_txt_exp);
        exp_6Components.push(right_ans_quest_exp);
        exp_6Components.push(right_ans_quest_exp_yes);
        exp_6Components.push(right_ans_quest_exp_no);
        
        for (const thisComponent of exp_6Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function exp_6RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'exp_6' ---
        // get current time
        t = exp_6Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *sen_txt_exp* updates
        if (t >= 0.0 && sen_txt_exp.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          sen_txt_exp.tStart = t;  // (not accounting for frame time here)
          sen_txt_exp.frameNStart = frameN;  // exact frame index
          
          sen_txt_exp.setAutoDraw(true);
        }
        
        
        // if sen_txt_exp is active this frame...
        if (sen_txt_exp.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *right_ans_txt_exp* updates
        if (t >= 0.0 && right_ans_txt_exp.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          right_ans_txt_exp.tStart = t;  // (not accounting for frame time here)
          right_ans_txt_exp.frameNStart = frameN;  // exact frame index
          
          right_ans_txt_exp.setAutoDraw(true);
        }
        
        
        // if right_ans_txt_exp is active this frame...
        if (right_ans_txt_exp.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *right_ans_quest_exp* updates
        if (t >= 0.0 && right_ans_quest_exp.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          right_ans_quest_exp.tStart = t;  // (not accounting for frame time here)
          right_ans_quest_exp.frameNStart = frameN;  // exact frame index
          
          right_ans_quest_exp.setAutoDraw(true);
        }
        
        
        // if right_ans_quest_exp is active this frame...
        if (right_ans_quest_exp.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *right_ans_quest_exp_yes* updates
        if (t >= 0.5 && right_ans_quest_exp_yes.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          right_ans_quest_exp_yes.tStart = t;  // (not accounting for frame time here)
          right_ans_quest_exp_yes.frameNStart = frameN;  // exact frame index
          
          right_ans_quest_exp_yes.setAutoDraw(true);
        }
        
        
        // if right_ans_quest_exp_yes is active this frame...
        if (right_ans_quest_exp_yes.status === PsychoJS.Status.STARTED) {
        }
        
        if (right_ans_quest_exp_yes.status === PsychoJS.Status.STARTED) {
          // check whether right_ans_quest_exp_yes has been pressed
          if (right_ans_quest_exp_yes.isClicked) {
            if (!right_ans_quest_exp_yes.wasClicked) {
              // store time of first click
              right_ans_quest_exp_yes.timesOn.push(right_ans_quest_exp_yes.clock.getTime());
              // store time clicked until
              right_ans_quest_exp_yes.timesOff.push(right_ans_quest_exp_yes.clock.getTime());
            } else {
              // update time clicked until;
              right_ans_quest_exp_yes.timesOff[right_ans_quest_exp_yes.timesOff.length - 1] = right_ans_quest_exp_yes.clock.getTime();
            }
            if (!right_ans_quest_exp_yes.wasClicked) {
              // end routine when right_ans_quest_exp_yes is clicked
              continueRoutine = false;
              
            }
            // if right_ans_quest_exp_yes is still clicked next frame, it is not a new click
            right_ans_quest_exp_yes.wasClicked = true;
          } else {
            // if right_ans_quest_exp_yes is clicked next frame, it is a new click
            right_ans_quest_exp_yes.wasClicked = false;
          }
        } else {
          // keep clock at 0 if right_ans_quest_exp_yes hasn't started / has finished
          right_ans_quest_exp_yes.clock.reset();
          // if right_ans_quest_exp_yes is clicked next frame, it is a new click
          right_ans_quest_exp_yes.wasClicked = false;
        }
        
        // *right_ans_quest_exp_no* updates
        if (t >= 0.5 && right_ans_quest_exp_no.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          right_ans_quest_exp_no.tStart = t;  // (not accounting for frame time here)
          right_ans_quest_exp_no.frameNStart = frameN;  // exact frame index
          
          right_ans_quest_exp_no.setAutoDraw(true);
        }
        
        
        // if right_ans_quest_exp_no is active this frame...
        if (right_ans_quest_exp_no.status === PsychoJS.Status.STARTED) {
        }
        
        if (right_ans_quest_exp_no.status === PsychoJS.Status.STARTED) {
          // check whether right_ans_quest_exp_no has been pressed
          if (right_ans_quest_exp_no.isClicked) {
            if (!right_ans_quest_exp_no.wasClicked) {
              // store time of first click
              right_ans_quest_exp_no.timesOn.push(right_ans_quest_exp_no.clock.getTime());
              // store time clicked until
              right_ans_quest_exp_no.timesOff.push(right_ans_quest_exp_no.clock.getTime());
            } else {
              // update time clicked until;
              right_ans_quest_exp_no.timesOff[right_ans_quest_exp_no.timesOff.length - 1] = right_ans_quest_exp_no.clock.getTime();
            }
            if (!right_ans_quest_exp_no.wasClicked) {
              // end routine when right_ans_quest_exp_no is clicked
              continueRoutine = false;
              
            }
            // if right_ans_quest_exp_no is still clicked next frame, it is not a new click
            right_ans_quest_exp_no.wasClicked = true;
          } else {
            // if right_ans_quest_exp_no is clicked next frame, it is a new click
            right_ans_quest_exp_no.wasClicked = false;
          }
        } else {
          // keep clock at 0 if right_ans_quest_exp_no hasn't started / has finished
          right_ans_quest_exp_no.clock.reset();
          // if right_ans_quest_exp_no is clicked next frame, it is a new click
          right_ans_quest_exp_no.wasClicked = false;
        }
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of exp_6Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function exp_6RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'exp_6' ---
        for (const thisComponent of exp_6Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('exp_6.stopped', globalClock.getTime());
        // Run 'End Routine' code from code_34
        if (right_ans_quest_exp_yes.isClicked) {
            trials_29.finished = true;
        }
        if (right_ans_quest_exp_no.isClicked) {
            nTr54 = 1;
        }
        
        psychoJS.experiment.addData('right_ans_quest_exp_yes.numClicks', right_ans_quest_exp_yes.numClicks);
        psychoJS.experiment.addData('right_ans_quest_exp_yes.timesOn', right_ans_quest_exp_yes.timesOn);
        psychoJS.experiment.addData('right_ans_quest_exp_yes.timesOff', right_ans_quest_exp_yes.timesOff);
        psychoJS.experiment.addData('right_ans_quest_exp_no.numClicks', right_ans_quest_exp_no.numClicks);
        psychoJS.experiment.addData('right_ans_quest_exp_no.timesOn', right_ans_quest_exp_no.timesOn);
        psychoJS.experiment.addData('right_ans_quest_exp_no.timesOff', right_ans_quest_exp_no.timesOff);
        // the Routine "exp_6" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var exp_7MaxDurationReached;
var exp_7MaxDuration;
var exp_7Components;
function exp_7RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'exp_7' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        exp_7Clock.reset();
        routineTimer.reset();
        exp_7MaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_35
        psychoJS.window.mouseVisible = true;
        
        // reset ind_aha_quest_exp_yes to account for continued clicks & clear times on/off
        ind_aha_quest_exp_yes.reset()
        // reset ind_aha_quest_exp_no to account for continued clicks & clear times on/off
        ind_aha_quest_exp_no.reset()
        // reset ind_aha_quest_exp_dont_und to account for continued clicks & clear times on/off
        ind_aha_quest_exp_dont_und.reset()
        psychoJS.experiment.addData('exp_7.started', globalClock.getTime());
        exp_7MaxDuration = null
        // keep track of which components have finished
        exp_7Components = [];
        exp_7Components.push(ind_aha_quest_exp);
        exp_7Components.push(ind_aha_quest_exp_yes);
        exp_7Components.push(ind_aha_quest_exp_no);
        exp_7Components.push(ind_aha_quest_exp_dont_und);
        
        for (const thisComponent of exp_7Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function exp_7RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'exp_7' ---
        // get current time
        t = exp_7Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *ind_aha_quest_exp* updates
        if (t >= 0.0 && ind_aha_quest_exp.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          ind_aha_quest_exp.tStart = t;  // (not accounting for frame time here)
          ind_aha_quest_exp.frameNStart = frameN;  // exact frame index
          
          ind_aha_quest_exp.setAutoDraw(true);
        }
        
        
        // if ind_aha_quest_exp is active this frame...
        if (ind_aha_quest_exp.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *ind_aha_quest_exp_yes* updates
        if (t >= 0.5 && ind_aha_quest_exp_yes.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          ind_aha_quest_exp_yes.tStart = t;  // (not accounting for frame time here)
          ind_aha_quest_exp_yes.frameNStart = frameN;  // exact frame index
          
          ind_aha_quest_exp_yes.setAutoDraw(true);
        }
        
        
        // if ind_aha_quest_exp_yes is active this frame...
        if (ind_aha_quest_exp_yes.status === PsychoJS.Status.STARTED) {
        }
        
        if (ind_aha_quest_exp_yes.status === PsychoJS.Status.STARTED) {
          // check whether ind_aha_quest_exp_yes has been pressed
          if (ind_aha_quest_exp_yes.isClicked) {
            if (!ind_aha_quest_exp_yes.wasClicked) {
              // store time of first click
              ind_aha_quest_exp_yes.timesOn.push(ind_aha_quest_exp_yes.clock.getTime());
              // store time clicked until
              ind_aha_quest_exp_yes.timesOff.push(ind_aha_quest_exp_yes.clock.getTime());
            } else {
              // update time clicked until;
              ind_aha_quest_exp_yes.timesOff[ind_aha_quest_exp_yes.timesOff.length - 1] = ind_aha_quest_exp_yes.clock.getTime();
            }
            if (!ind_aha_quest_exp_yes.wasClicked) {
              // end routine when ind_aha_quest_exp_yes is clicked
              continueRoutine = false;
              
            }
            // if ind_aha_quest_exp_yes is still clicked next frame, it is not a new click
            ind_aha_quest_exp_yes.wasClicked = true;
          } else {
            // if ind_aha_quest_exp_yes is clicked next frame, it is a new click
            ind_aha_quest_exp_yes.wasClicked = false;
          }
        } else {
          // keep clock at 0 if ind_aha_quest_exp_yes hasn't started / has finished
          ind_aha_quest_exp_yes.clock.reset();
          // if ind_aha_quest_exp_yes is clicked next frame, it is a new click
          ind_aha_quest_exp_yes.wasClicked = false;
        }
        
        // *ind_aha_quest_exp_no* updates
        if (t >= 0.5 && ind_aha_quest_exp_no.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          ind_aha_quest_exp_no.tStart = t;  // (not accounting for frame time here)
          ind_aha_quest_exp_no.frameNStart = frameN;  // exact frame index
          
          ind_aha_quest_exp_no.setAutoDraw(true);
        }
        
        
        // if ind_aha_quest_exp_no is active this frame...
        if (ind_aha_quest_exp_no.status === PsychoJS.Status.STARTED) {
        }
        
        if (ind_aha_quest_exp_no.status === PsychoJS.Status.STARTED) {
          // check whether ind_aha_quest_exp_no has been pressed
          if (ind_aha_quest_exp_no.isClicked) {
            if (!ind_aha_quest_exp_no.wasClicked) {
              // store time of first click
              ind_aha_quest_exp_no.timesOn.push(ind_aha_quest_exp_no.clock.getTime());
              // store time clicked until
              ind_aha_quest_exp_no.timesOff.push(ind_aha_quest_exp_no.clock.getTime());
            } else {
              // update time clicked until;
              ind_aha_quest_exp_no.timesOff[ind_aha_quest_exp_no.timesOff.length - 1] = ind_aha_quest_exp_no.clock.getTime();
            }
            if (!ind_aha_quest_exp_no.wasClicked) {
              // end routine when ind_aha_quest_exp_no is clicked
              continueRoutine = false;
              
            }
            // if ind_aha_quest_exp_no is still clicked next frame, it is not a new click
            ind_aha_quest_exp_no.wasClicked = true;
          } else {
            // if ind_aha_quest_exp_no is clicked next frame, it is a new click
            ind_aha_quest_exp_no.wasClicked = false;
          }
        } else {
          // keep clock at 0 if ind_aha_quest_exp_no hasn't started / has finished
          ind_aha_quest_exp_no.clock.reset();
          // if ind_aha_quest_exp_no is clicked next frame, it is a new click
          ind_aha_quest_exp_no.wasClicked = false;
        }
        
        // *ind_aha_quest_exp_dont_und* updates
        if (t >= 0.5 && ind_aha_quest_exp_dont_und.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          ind_aha_quest_exp_dont_und.tStart = t;  // (not accounting for frame time here)
          ind_aha_quest_exp_dont_und.frameNStart = frameN;  // exact frame index
          
          ind_aha_quest_exp_dont_und.setAutoDraw(true);
        }
        
        
        // if ind_aha_quest_exp_dont_und is active this frame...
        if (ind_aha_quest_exp_dont_und.status === PsychoJS.Status.STARTED) {
        }
        
        if (ind_aha_quest_exp_dont_und.status === PsychoJS.Status.STARTED) {
          // check whether ind_aha_quest_exp_dont_und has been pressed
          if (ind_aha_quest_exp_dont_und.isClicked) {
            if (!ind_aha_quest_exp_dont_und.wasClicked) {
              // store time of first click
              ind_aha_quest_exp_dont_und.timesOn.push(ind_aha_quest_exp_dont_und.clock.getTime());
              // store time clicked until
              ind_aha_quest_exp_dont_und.timesOff.push(ind_aha_quest_exp_dont_und.clock.getTime());
            } else {
              // update time clicked until;
              ind_aha_quest_exp_dont_und.timesOff[ind_aha_quest_exp_dont_und.timesOff.length - 1] = ind_aha_quest_exp_dont_und.clock.getTime();
            }
            if (!ind_aha_quest_exp_dont_und.wasClicked) {
              // end routine when ind_aha_quest_exp_dont_und is clicked
              continueRoutine = false;
              
            }
            // if ind_aha_quest_exp_dont_und is still clicked next frame, it is not a new click
            ind_aha_quest_exp_dont_und.wasClicked = true;
          } else {
            // if ind_aha_quest_exp_dont_und is clicked next frame, it is a new click
            ind_aha_quest_exp_dont_und.wasClicked = false;
          }
        } else {
          // keep clock at 0 if ind_aha_quest_exp_dont_und hasn't started / has finished
          ind_aha_quest_exp_dont_und.clock.reset();
          // if ind_aha_quest_exp_dont_und is clicked next frame, it is a new click
          ind_aha_quest_exp_dont_und.wasClicked = false;
        }
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of exp_7Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function exp_7RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'exp_7' ---
        for (const thisComponent of exp_7Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('exp_7.stopped', globalClock.getTime());
        // Run 'End Routine' code from code_35
        if (ind_aha_quest_exp_dont_und.isClicked) {
            nTr58 = 0;
        } else {
            nTr58 = 1;
        }
        
        psychoJS.experiment.addData('ind_aha_quest_exp_yes.numClicks', ind_aha_quest_exp_yes.numClicks);
        psychoJS.experiment.addData('ind_aha_quest_exp_yes.timesOn', ind_aha_quest_exp_yes.timesOn);
        psychoJS.experiment.addData('ind_aha_quest_exp_yes.timesOff', ind_aha_quest_exp_yes.timesOff);
        psychoJS.experiment.addData('ind_aha_quest_exp_no.numClicks', ind_aha_quest_exp_no.numClicks);
        psychoJS.experiment.addData('ind_aha_quest_exp_no.timesOn', ind_aha_quest_exp_no.timesOn);
        psychoJS.experiment.addData('ind_aha_quest_exp_no.timesOff', ind_aha_quest_exp_no.timesOff);
        psychoJS.experiment.addData('ind_aha_quest_exp_dont_und.numClicks', ind_aha_quest_exp_dont_und.numClicks);
        psychoJS.experiment.addData('ind_aha_quest_exp_dont_und.timesOn', ind_aha_quest_exp_dont_und.timesOn);
        psychoJS.experiment.addData('ind_aha_quest_exp_dont_und.timesOff', ind_aha_quest_exp_dont_und.timesOff);
        // the Routine "exp_7" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var routine_4MaxDurationReached;
var routine_4MaxDuration;
var routine_4Components;
function routine_4RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'routine_4' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        routine_4Clock.reset();
        routineTimer.reset();
        routine_4MaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_49
        psychoJS.window.mouseVisible = true;
        
        // reset like_quest_yes to account for continued clicks & clear times on/off
        like_quest_yes.reset()
        // reset like_quest_no to account for continued clicks & clear times on/off
        like_quest_no.reset()
        psychoJS.experiment.addData('routine_4.started', globalClock.getTime());
        routine_4MaxDuration = null
        // keep track of which components have finished
        routine_4Components = [];
        routine_4Components.push(like_quest);
        routine_4Components.push(like_quest_yes);
        routine_4Components.push(like_quest_no);
        
        for (const thisComponent of routine_4Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function routine_4RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'routine_4' ---
        // get current time
        t = routine_4Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *like_quest* updates
        if (t >= 0.0 && like_quest.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          like_quest.tStart = t;  // (not accounting for frame time here)
          like_quest.frameNStart = frameN;  // exact frame index
          
          like_quest.setAutoDraw(true);
        }
        
        
        // if like_quest is active this frame...
        if (like_quest.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *like_quest_yes* updates
        if (t >= 0.5 && like_quest_yes.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          like_quest_yes.tStart = t;  // (not accounting for frame time here)
          like_quest_yes.frameNStart = frameN;  // exact frame index
          
          like_quest_yes.setAutoDraw(true);
        }
        
        
        // if like_quest_yes is active this frame...
        if (like_quest_yes.status === PsychoJS.Status.STARTED) {
        }
        
        if (like_quest_yes.status === PsychoJS.Status.STARTED) {
          // check whether like_quest_yes has been pressed
          if (like_quest_yes.isClicked) {
            if (!like_quest_yes.wasClicked) {
              // store time of first click
              like_quest_yes.timesOn.push(like_quest_yes.clock.getTime());
              // store time clicked until
              like_quest_yes.timesOff.push(like_quest_yes.clock.getTime());
            } else {
              // update time clicked until;
              like_quest_yes.timesOff[like_quest_yes.timesOff.length - 1] = like_quest_yes.clock.getTime();
            }
            if (!like_quest_yes.wasClicked) {
              // end routine when like_quest_yes is clicked
              continueRoutine = false;
              
            }
            // if like_quest_yes is still clicked next frame, it is not a new click
            like_quest_yes.wasClicked = true;
          } else {
            // if like_quest_yes is clicked next frame, it is a new click
            like_quest_yes.wasClicked = false;
          }
        } else {
          // keep clock at 0 if like_quest_yes hasn't started / has finished
          like_quest_yes.clock.reset();
          // if like_quest_yes is clicked next frame, it is a new click
          like_quest_yes.wasClicked = false;
        }
        
        // *like_quest_no* updates
        if (t >= 0.5 && like_quest_no.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          like_quest_no.tStart = t;  // (not accounting for frame time here)
          like_quest_no.frameNStart = frameN;  // exact frame index
          
          like_quest_no.setAutoDraw(true);
        }
        
        
        // if like_quest_no is active this frame...
        if (like_quest_no.status === PsychoJS.Status.STARTED) {
        }
        
        if (like_quest_no.status === PsychoJS.Status.STARTED) {
          // check whether like_quest_no has been pressed
          if (like_quest_no.isClicked) {
            if (!like_quest_no.wasClicked) {
              // store time of first click
              like_quest_no.timesOn.push(like_quest_no.clock.getTime());
              // store time clicked until
              like_quest_no.timesOff.push(like_quest_no.clock.getTime());
            } else {
              // update time clicked until;
              like_quest_no.timesOff[like_quest_no.timesOff.length - 1] = like_quest_no.clock.getTime();
            }
            if (!like_quest_no.wasClicked) {
              // end routine when like_quest_no is clicked
              continueRoutine = false;
              
            }
            // if like_quest_no is still clicked next frame, it is not a new click
            like_quest_no.wasClicked = true;
          } else {
            // if like_quest_no is clicked next frame, it is a new click
            like_quest_no.wasClicked = false;
          }
        } else {
          // keep clock at 0 if like_quest_no hasn't started / has finished
          like_quest_no.clock.reset();
          // if like_quest_no is clicked next frame, it is a new click
          like_quest_no.wasClicked = false;
        }
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of routine_4Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function routine_4RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'routine_4' ---
        for (const thisComponent of routine_4Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('routine_4.stopped', globalClock.getTime());
        psychoJS.experiment.addData('like_quest_yes.numClicks', like_quest_yes.numClicks);
        psychoJS.experiment.addData('like_quest_yes.timesOn', like_quest_yes.timesOn);
        psychoJS.experiment.addData('like_quest_yes.timesOff', like_quest_yes.timesOff);
        psychoJS.experiment.addData('like_quest_no.numClicks', like_quest_no.numClicks);
        psychoJS.experiment.addData('like_quest_no.timesOn', like_quest_no.timesOn);
        psychoJS.experiment.addData('like_quest_no.timesOff', like_quest_no.timesOff);
        // the Routine "routine_4" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var exp_8MaxDurationReached;
var exp_8MaxDuration;
var exp_8Components;
function exp_8RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'exp_8' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        exp_8Clock.reset();
        routineTimer.reset();
        exp_8MaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_36
        psychoJS.window.mouseVisible = true;
        
        sen_txt_wout_ans_exp.setText(("\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435: " + sen_exp));
        right_ans_wout_ans_txt_exp.setText(("\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442: " + ans_exp));
        right_ans_quest_wout_ans_exp.setText('Было ли у Вас “Ага-переживание” при знакомстве с ответом?');
        // reset right_ans_quest_wout_ans_exp_yes to account for continued clicks & clear times on/off
        right_ans_quest_wout_ans_exp_yes.reset()
        // reset right_ans_quest_wout_ans_exp_no to account for continued clicks & clear times on/off
        right_ans_quest_wout_ans_exp_no.reset()
        // reset right_ans_quest_wout_ans_exp_dont_und to account for continued clicks & clear times on/off
        right_ans_quest_wout_ans_exp_dont_und.reset()
        psychoJS.experiment.addData('exp_8.started', globalClock.getTime());
        exp_8MaxDuration = null
        // keep track of which components have finished
        exp_8Components = [];
        exp_8Components.push(sen_txt_wout_ans_exp);
        exp_8Components.push(right_ans_wout_ans_txt_exp);
        exp_8Components.push(right_ans_quest_wout_ans_exp);
        exp_8Components.push(right_ans_quest_wout_ans_exp_yes);
        exp_8Components.push(right_ans_quest_wout_ans_exp_no);
        exp_8Components.push(right_ans_quest_wout_ans_exp_dont_und);
        
        for (const thisComponent of exp_8Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function exp_8RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'exp_8' ---
        // get current time
        t = exp_8Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *sen_txt_wout_ans_exp* updates
        if (t >= 0.0 && sen_txt_wout_ans_exp.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          sen_txt_wout_ans_exp.tStart = t;  // (not accounting for frame time here)
          sen_txt_wout_ans_exp.frameNStart = frameN;  // exact frame index
          
          sen_txt_wout_ans_exp.setAutoDraw(true);
        }
        
        
        // if sen_txt_wout_ans_exp is active this frame...
        if (sen_txt_wout_ans_exp.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *right_ans_wout_ans_txt_exp* updates
        if (t >= 0.0 && right_ans_wout_ans_txt_exp.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          right_ans_wout_ans_txt_exp.tStart = t;  // (not accounting for frame time here)
          right_ans_wout_ans_txt_exp.frameNStart = frameN;  // exact frame index
          
          right_ans_wout_ans_txt_exp.setAutoDraw(true);
        }
        
        
        // if right_ans_wout_ans_txt_exp is active this frame...
        if (right_ans_wout_ans_txt_exp.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *right_ans_quest_wout_ans_exp* updates
        if (t >= 0.0 && right_ans_quest_wout_ans_exp.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          right_ans_quest_wout_ans_exp.tStart = t;  // (not accounting for frame time here)
          right_ans_quest_wout_ans_exp.frameNStart = frameN;  // exact frame index
          
          right_ans_quest_wout_ans_exp.setAutoDraw(true);
        }
        
        
        // if right_ans_quest_wout_ans_exp is active this frame...
        if (right_ans_quest_wout_ans_exp.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *right_ans_quest_wout_ans_exp_yes* updates
        if (t >= 0.5 && right_ans_quest_wout_ans_exp_yes.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          right_ans_quest_wout_ans_exp_yes.tStart = t;  // (not accounting for frame time here)
          right_ans_quest_wout_ans_exp_yes.frameNStart = frameN;  // exact frame index
          
          right_ans_quest_wout_ans_exp_yes.setAutoDraw(true);
        }
        
        
        // if right_ans_quest_wout_ans_exp_yes is active this frame...
        if (right_ans_quest_wout_ans_exp_yes.status === PsychoJS.Status.STARTED) {
        }
        
        if (right_ans_quest_wout_ans_exp_yes.status === PsychoJS.Status.STARTED) {
          // check whether right_ans_quest_wout_ans_exp_yes has been pressed
          if (right_ans_quest_wout_ans_exp_yes.isClicked) {
            if (!right_ans_quest_wout_ans_exp_yes.wasClicked) {
              // store time of first click
              right_ans_quest_wout_ans_exp_yes.timesOn.push(right_ans_quest_wout_ans_exp_yes.clock.getTime());
              // store time clicked until
              right_ans_quest_wout_ans_exp_yes.timesOff.push(right_ans_quest_wout_ans_exp_yes.clock.getTime());
            } else {
              // update time clicked until;
              right_ans_quest_wout_ans_exp_yes.timesOff[right_ans_quest_wout_ans_exp_yes.timesOff.length - 1] = right_ans_quest_wout_ans_exp_yes.clock.getTime();
            }
            if (!right_ans_quest_wout_ans_exp_yes.wasClicked) {
              // end routine when right_ans_quest_wout_ans_exp_yes is clicked
              continueRoutine = false;
              
            }
            // if right_ans_quest_wout_ans_exp_yes is still clicked next frame, it is not a new click
            right_ans_quest_wout_ans_exp_yes.wasClicked = true;
          } else {
            // if right_ans_quest_wout_ans_exp_yes is clicked next frame, it is a new click
            right_ans_quest_wout_ans_exp_yes.wasClicked = false;
          }
        } else {
          // keep clock at 0 if right_ans_quest_wout_ans_exp_yes hasn't started / has finished
          right_ans_quest_wout_ans_exp_yes.clock.reset();
          // if right_ans_quest_wout_ans_exp_yes is clicked next frame, it is a new click
          right_ans_quest_wout_ans_exp_yes.wasClicked = false;
        }
        
        // *right_ans_quest_wout_ans_exp_no* updates
        if (t >= 0.5 && right_ans_quest_wout_ans_exp_no.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          right_ans_quest_wout_ans_exp_no.tStart = t;  // (not accounting for frame time here)
          right_ans_quest_wout_ans_exp_no.frameNStart = frameN;  // exact frame index
          
          right_ans_quest_wout_ans_exp_no.setAutoDraw(true);
        }
        
        
        // if right_ans_quest_wout_ans_exp_no is active this frame...
        if (right_ans_quest_wout_ans_exp_no.status === PsychoJS.Status.STARTED) {
        }
        
        if (right_ans_quest_wout_ans_exp_no.status === PsychoJS.Status.STARTED) {
          // check whether right_ans_quest_wout_ans_exp_no has been pressed
          if (right_ans_quest_wout_ans_exp_no.isClicked) {
            if (!right_ans_quest_wout_ans_exp_no.wasClicked) {
              // store time of first click
              right_ans_quest_wout_ans_exp_no.timesOn.push(right_ans_quest_wout_ans_exp_no.clock.getTime());
              // store time clicked until
              right_ans_quest_wout_ans_exp_no.timesOff.push(right_ans_quest_wout_ans_exp_no.clock.getTime());
            } else {
              // update time clicked until;
              right_ans_quest_wout_ans_exp_no.timesOff[right_ans_quest_wout_ans_exp_no.timesOff.length - 1] = right_ans_quest_wout_ans_exp_no.clock.getTime();
            }
            if (!right_ans_quest_wout_ans_exp_no.wasClicked) {
              // end routine when right_ans_quest_wout_ans_exp_no is clicked
              continueRoutine = false;
              
            }
            // if right_ans_quest_wout_ans_exp_no is still clicked next frame, it is not a new click
            right_ans_quest_wout_ans_exp_no.wasClicked = true;
          } else {
            // if right_ans_quest_wout_ans_exp_no is clicked next frame, it is a new click
            right_ans_quest_wout_ans_exp_no.wasClicked = false;
          }
        } else {
          // keep clock at 0 if right_ans_quest_wout_ans_exp_no hasn't started / has finished
          right_ans_quest_wout_ans_exp_no.clock.reset();
          // if right_ans_quest_wout_ans_exp_no is clicked next frame, it is a new click
          right_ans_quest_wout_ans_exp_no.wasClicked = false;
        }
        
        // *right_ans_quest_wout_ans_exp_dont_und* updates
        if (t >= 0.5 && right_ans_quest_wout_ans_exp_dont_und.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          right_ans_quest_wout_ans_exp_dont_und.tStart = t;  // (not accounting for frame time here)
          right_ans_quest_wout_ans_exp_dont_und.frameNStart = frameN;  // exact frame index
          
          right_ans_quest_wout_ans_exp_dont_und.setAutoDraw(true);
        }
        
        
        // if right_ans_quest_wout_ans_exp_dont_und is active this frame...
        if (right_ans_quest_wout_ans_exp_dont_und.status === PsychoJS.Status.STARTED) {
        }
        
        if (right_ans_quest_wout_ans_exp_dont_und.status === PsychoJS.Status.STARTED) {
          // check whether right_ans_quest_wout_ans_exp_dont_und has been pressed
          if (right_ans_quest_wout_ans_exp_dont_und.isClicked) {
            if (!right_ans_quest_wout_ans_exp_dont_und.wasClicked) {
              // store time of first click
              right_ans_quest_wout_ans_exp_dont_und.timesOn.push(right_ans_quest_wout_ans_exp_dont_und.clock.getTime());
              // store time clicked until
              right_ans_quest_wout_ans_exp_dont_und.timesOff.push(right_ans_quest_wout_ans_exp_dont_und.clock.getTime());
            } else {
              // update time clicked until;
              right_ans_quest_wout_ans_exp_dont_und.timesOff[right_ans_quest_wout_ans_exp_dont_und.timesOff.length - 1] = right_ans_quest_wout_ans_exp_dont_und.clock.getTime();
            }
            if (!right_ans_quest_wout_ans_exp_dont_und.wasClicked) {
              // end routine when right_ans_quest_wout_ans_exp_dont_und is clicked
              continueRoutine = false;
              
            }
            // if right_ans_quest_wout_ans_exp_dont_und is still clicked next frame, it is not a new click
            right_ans_quest_wout_ans_exp_dont_und.wasClicked = true;
          } else {
            // if right_ans_quest_wout_ans_exp_dont_und is clicked next frame, it is a new click
            right_ans_quest_wout_ans_exp_dont_und.wasClicked = false;
          }
        } else {
          // keep clock at 0 if right_ans_quest_wout_ans_exp_dont_und hasn't started / has finished
          right_ans_quest_wout_ans_exp_dont_und.clock.reset();
          // if right_ans_quest_wout_ans_exp_dont_und is clicked next frame, it is a new click
          right_ans_quest_wout_ans_exp_dont_und.wasClicked = false;
        }
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of exp_8Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function exp_8RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'exp_8' ---
        for (const thisComponent of exp_8Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('exp_8.stopped', globalClock.getTime());
        // Run 'End Routine' code from code_36
        if (right_ans_quest_wout_ans_exp_dont_und.isClicked) {
            nTr59 = 0;
        } else {
            nTr59 = 1;
        }
        
        psychoJS.experiment.addData('right_ans_quest_wout_ans_exp_yes.numClicks', right_ans_quest_wout_ans_exp_yes.numClicks);
        psychoJS.experiment.addData('right_ans_quest_wout_ans_exp_yes.timesOn', right_ans_quest_wout_ans_exp_yes.timesOn);
        psychoJS.experiment.addData('right_ans_quest_wout_ans_exp_yes.timesOff', right_ans_quest_wout_ans_exp_yes.timesOff);
        psychoJS.experiment.addData('right_ans_quest_wout_ans_exp_no.numClicks', right_ans_quest_wout_ans_exp_no.numClicks);
        psychoJS.experiment.addData('right_ans_quest_wout_ans_exp_no.timesOn', right_ans_quest_wout_ans_exp_no.timesOn);
        psychoJS.experiment.addData('right_ans_quest_wout_ans_exp_no.timesOff', right_ans_quest_wout_ans_exp_no.timesOff);
        psychoJS.experiment.addData('right_ans_quest_wout_ans_exp_dont_und.numClicks', right_ans_quest_wout_ans_exp_dont_und.numClicks);
        psychoJS.experiment.addData('right_ans_quest_wout_ans_exp_dont_und.timesOn', right_ans_quest_wout_ans_exp_dont_und.timesOn);
        psychoJS.experiment.addData('right_ans_quest_wout_ans_exp_dont_und.timesOff', right_ans_quest_wout_ans_exp_dont_und.timesOff);
        // the Routine "exp_8" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var routine_5MaxDurationReached;
var routine_5MaxDuration;
var routine_5Components;
function routine_5RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'routine_5' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        routine_5Clock.reset();
        routineTimer.reset();
        routine_5MaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_50
        psychoJS.window.mouseVisible = true;
        
        // reset like_quest_wout_ans_yes to account for continued clicks & clear times on/off
        like_quest_wout_ans_yes.reset()
        // reset like_quest_wout_ans_no to account for continued clicks & clear times on/off
        like_quest_wout_ans_no.reset()
        psychoJS.experiment.addData('routine_5.started', globalClock.getTime());
        routine_5MaxDuration = null
        // keep track of which components have finished
        routine_5Components = [];
        routine_5Components.push(like_quest_2);
        routine_5Components.push(like_quest_wout_ans_yes);
        routine_5Components.push(like_quest_wout_ans_no);
        
        for (const thisComponent of routine_5Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function routine_5RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'routine_5' ---
        // get current time
        t = routine_5Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *like_quest_2* updates
        if (t >= 0.0 && like_quest_2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          like_quest_2.tStart = t;  // (not accounting for frame time here)
          like_quest_2.frameNStart = frameN;  // exact frame index
          
          like_quest_2.setAutoDraw(true);
        }
        
        
        // if like_quest_2 is active this frame...
        if (like_quest_2.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *like_quest_wout_ans_yes* updates
        if (t >= 0.5 && like_quest_wout_ans_yes.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          like_quest_wout_ans_yes.tStart = t;  // (not accounting for frame time here)
          like_quest_wout_ans_yes.frameNStart = frameN;  // exact frame index
          
          like_quest_wout_ans_yes.setAutoDraw(true);
        }
        
        
        // if like_quest_wout_ans_yes is active this frame...
        if (like_quest_wout_ans_yes.status === PsychoJS.Status.STARTED) {
        }
        
        if (like_quest_wout_ans_yes.status === PsychoJS.Status.STARTED) {
          // check whether like_quest_wout_ans_yes has been pressed
          if (like_quest_wout_ans_yes.isClicked) {
            if (!like_quest_wout_ans_yes.wasClicked) {
              // store time of first click
              like_quest_wout_ans_yes.timesOn.push(like_quest_wout_ans_yes.clock.getTime());
              // store time clicked until
              like_quest_wout_ans_yes.timesOff.push(like_quest_wout_ans_yes.clock.getTime());
            } else {
              // update time clicked until;
              like_quest_wout_ans_yes.timesOff[like_quest_wout_ans_yes.timesOff.length - 1] = like_quest_wout_ans_yes.clock.getTime();
            }
            if (!like_quest_wout_ans_yes.wasClicked) {
              // end routine when like_quest_wout_ans_yes is clicked
              continueRoutine = false;
              
            }
            // if like_quest_wout_ans_yes is still clicked next frame, it is not a new click
            like_quest_wout_ans_yes.wasClicked = true;
          } else {
            // if like_quest_wout_ans_yes is clicked next frame, it is a new click
            like_quest_wout_ans_yes.wasClicked = false;
          }
        } else {
          // keep clock at 0 if like_quest_wout_ans_yes hasn't started / has finished
          like_quest_wout_ans_yes.clock.reset();
          // if like_quest_wout_ans_yes is clicked next frame, it is a new click
          like_quest_wout_ans_yes.wasClicked = false;
        }
        
        // *like_quest_wout_ans_no* updates
        if (t >= 0.5 && like_quest_wout_ans_no.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          like_quest_wout_ans_no.tStart = t;  // (not accounting for frame time here)
          like_quest_wout_ans_no.frameNStart = frameN;  // exact frame index
          
          like_quest_wout_ans_no.setAutoDraw(true);
        }
        
        
        // if like_quest_wout_ans_no is active this frame...
        if (like_quest_wout_ans_no.status === PsychoJS.Status.STARTED) {
        }
        
        if (like_quest_wout_ans_no.status === PsychoJS.Status.STARTED) {
          // check whether like_quest_wout_ans_no has been pressed
          if (like_quest_wout_ans_no.isClicked) {
            if (!like_quest_wout_ans_no.wasClicked) {
              // store time of first click
              like_quest_wout_ans_no.timesOn.push(like_quest_wout_ans_no.clock.getTime());
              // store time clicked until
              like_quest_wout_ans_no.timesOff.push(like_quest_wout_ans_no.clock.getTime());
            } else {
              // update time clicked until;
              like_quest_wout_ans_no.timesOff[like_quest_wout_ans_no.timesOff.length - 1] = like_quest_wout_ans_no.clock.getTime();
            }
            if (!like_quest_wout_ans_no.wasClicked) {
              // end routine when like_quest_wout_ans_no is clicked
              continueRoutine = false;
              
            }
            // if like_quest_wout_ans_no is still clicked next frame, it is not a new click
            like_quest_wout_ans_no.wasClicked = true;
          } else {
            // if like_quest_wout_ans_no is clicked next frame, it is a new click
            like_quest_wout_ans_no.wasClicked = false;
          }
        } else {
          // keep clock at 0 if like_quest_wout_ans_no hasn't started / has finished
          like_quest_wout_ans_no.clock.reset();
          // if like_quest_wout_ans_no is clicked next frame, it is a new click
          like_quest_wout_ans_no.wasClicked = false;
        }
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of routine_5Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function routine_5RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'routine_5' ---
        for (const thisComponent of routine_5Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('routine_5.stopped', globalClock.getTime());
        psychoJS.experiment.addData('like_quest_wout_ans_yes.numClicks', like_quest_wout_ans_yes.numClicks);
        psychoJS.experiment.addData('like_quest_wout_ans_yes.timesOn', like_quest_wout_ans_yes.timesOn);
        psychoJS.experiment.addData('like_quest_wout_ans_yes.timesOff', like_quest_wout_ans_yes.timesOff);
        psychoJS.experiment.addData('like_quest_wout_ans_no.numClicks', like_quest_wout_ans_no.numClicks);
        psychoJS.experiment.addData('like_quest_wout_ans_no.timesOn', like_quest_wout_ans_no.timesOn);
        psychoJS.experiment.addData('like_quest_wout_ans_no.timesOff', like_quest_wout_ans_no.timesOff);
        // the Routine "routine_5" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var end_expMaxDurationReached;
var end_expMaxDuration;
var end_expComponents;
function end_expRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'end_exp' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        end_expClock.reset(routineTimer.getTime());
        routineTimer.add(0.800000);
        end_expMaxDurationReached = false;
        // update component parameters for each repeat
        psychoJS.experiment.addData('end_exp.started', globalClock.getTime());
        end_expMaxDuration = null
        // keep track of which components have finished
        end_expComponents = [];
        end_expComponents.push(text_end_exp);
        
        for (const thisComponent of end_expComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function end_expRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'end_exp' ---
        // get current time
        t = end_expClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_end_exp* updates
        if (t >= 0 && text_end_exp.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_end_exp.tStart = t;  // (not accounting for frame time here)
          text_end_exp.frameNStart = frameN;  // exact frame index
          
          text_end_exp.setAutoDraw(true);
        }
        
        
        // if text_end_exp is active this frame...
        if (text_end_exp.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_end_exp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_end_exp.tStop = t;  // not accounting for scr refresh
          text_end_exp.frameNStop = frameN;  // exact frame index
          // update status
          text_end_exp.status = PsychoJS.Status.FINISHED;
          text_end_exp.setAutoDraw(false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of end_expComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function end_expRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'end_exp' ---
        for (const thisComponent of end_expComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('end_exp.stopped', globalClock.getTime());
        if (routineForceEnded) {
            routineTimer.reset();} else if (end_expMaxDurationReached) {
            end_expClock.add(end_expMaxDuration);
        } else {
            end_expClock.add(0.800000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var p_exp_int_1MaxDurationReached;
var p_exp_int_1MaxDuration;
var p_exp_int_1Components;
function p_exp_int_1RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'p_exp_int_1' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        p_exp_int_1Clock.reset();
        routineTimer.reset();
        p_exp_int_1MaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_27
        psychoJS.window.mouseVisible = true;
        
        entr_ans_intr_1.setText('');
        entr_ans_intr_1.refresh();
        // reset button_entr_ans_intr_1 to account for continued clicks & clear times on/off
        button_entr_ans_intr_1.reset()
        psychoJS.experiment.addData('p_exp_int_1.started', globalClock.getTime());
        p_exp_int_1MaxDuration = null
        // keep track of which components have finished
        p_exp_int_1Components = [];
        p_exp_int_1Components.push(entr_ans_txt_intr_1);
        p_exp_int_1Components.push(entr_ans_intr_1);
        p_exp_int_1Components.push(button_entr_ans_intr_1);
        
        for (const thisComponent of p_exp_int_1Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function p_exp_int_1RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'p_exp_int_1' ---
        // get current time
        t = p_exp_int_1Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        // Run 'Each Frame' code from code_27
        if ((entr_ans_int_1.text && entr_ans_int_1.text.strip())) {
            button_entr_ans_intr_1.setAutoDraw(true);
        } else {
            button_entr_ans_intr_1.setAutoDraw(false);
        }
        
        
        // *entr_ans_txt_intr_1* updates
        if (t >= 0.0 && entr_ans_txt_intr_1.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          entr_ans_txt_intr_1.tStart = t;  // (not accounting for frame time here)
          entr_ans_txt_intr_1.frameNStart = frameN;  // exact frame index
          
          entr_ans_txt_intr_1.setAutoDraw(true);
        }
        
        
        // if entr_ans_txt_intr_1 is active this frame...
        if (entr_ans_txt_intr_1.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *entr_ans_intr_1* updates
        if (t >= 0.0 && entr_ans_intr_1.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          entr_ans_intr_1.tStart = t;  // (not accounting for frame time here)
          entr_ans_intr_1.frameNStart = frameN;  // exact frame index
          
          entr_ans_intr_1.setAutoDraw(true);
        }
        
        
        // if entr_ans_intr_1 is active this frame...
        if (entr_ans_intr_1.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *button_entr_ans_intr_1* updates
        
        // if button_entr_ans_intr_1 is active this frame...
        if (button_entr_ans_intr_1.status === PsychoJS.Status.STARTED) {
        }
        
        if (button_entr_ans_intr_1.status === PsychoJS.Status.STARTED) {
          // check whether button_entr_ans_intr_1 has been pressed
          if (button_entr_ans_intr_1.isClicked) {
            if (!button_entr_ans_intr_1.wasClicked) {
              // store time of first click
              button_entr_ans_intr_1.timesOn.push(button_entr_ans_intr_1.clock.getTime());
              // store time clicked until
              button_entr_ans_intr_1.timesOff.push(button_entr_ans_intr_1.clock.getTime());
            } else {
              // update time clicked until;
              button_entr_ans_intr_1.timesOff[button_entr_ans_intr_1.timesOff.length - 1] = button_entr_ans_intr_1.clock.getTime();
            }
            if (!button_entr_ans_intr_1.wasClicked) {
              // end routine when button_entr_ans_intr_1 is clicked
              continueRoutine = false;
              
            }
            // if button_entr_ans_intr_1 is still clicked next frame, it is not a new click
            button_entr_ans_intr_1.wasClicked = true;
          } else {
            // if button_entr_ans_intr_1 is clicked next frame, it is a new click
            button_entr_ans_intr_1.wasClicked = false;
          }
        } else {
          // keep clock at 0 if button_entr_ans_intr_1 hasn't started / has finished
          button_entr_ans_intr_1.clock.reset();
          // if button_entr_ans_intr_1 is clicked next frame, it is a new click
          button_entr_ans_intr_1.wasClicked = false;
        }
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of p_exp_int_1Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function p_exp_int_1RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'p_exp_int_1' ---
        for (const thisComponent of p_exp_int_1Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('p_exp_int_1.stopped', globalClock.getTime());
        psychoJS.experiment.addData('entr_ans_intr_1.text',entr_ans_intr_1.text)
        psychoJS.experiment.addData('button_entr_ans_intr_1.numClicks', button_entr_ans_intr_1.numClicks);
        psychoJS.experiment.addData('button_entr_ans_intr_1.timesOn', button_entr_ans_intr_1.timesOn);
        psychoJS.experiment.addData('button_entr_ans_intr_1.timesOff', button_entr_ans_intr_1.timesOff);
        // the Routine "p_exp_int_1" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var p_exp_int_2MaxDurationReached;
var p_exp_int_2MaxDuration;
var p_exp_int_2Components;
function p_exp_int_2RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'p_exp_int_2' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        p_exp_int_2Clock.reset();
        routineTimer.reset();
        p_exp_int_2MaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_37
        psychoJS.window.mouseVisible = true;
        
        // reset aha_quest_intr_yes to account for continued clicks & clear times on/off
        aha_quest_intr_yes.reset()
        // reset aha_quest_intr_no to account for continued clicks & clear times on/off
        aha_quest_intr_no.reset()
        psychoJS.experiment.addData('p_exp_int_2.started', globalClock.getTime());
        p_exp_int_2MaxDuration = null
        // keep track of which components have finished
        p_exp_int_2Components = [];
        p_exp_int_2Components.push(entr_ans_txt_intr_2);
        p_exp_int_2Components.push(aha_quest_intr_yes);
        p_exp_int_2Components.push(aha_quest_intr_no);
        
        for (const thisComponent of p_exp_int_2Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function p_exp_int_2RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'p_exp_int_2' ---
        // get current time
        t = p_exp_int_2Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *entr_ans_txt_intr_2* updates
        if (t >= 0.0 && entr_ans_txt_intr_2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          entr_ans_txt_intr_2.tStart = t;  // (not accounting for frame time here)
          entr_ans_txt_intr_2.frameNStart = frameN;  // exact frame index
          
          entr_ans_txt_intr_2.setAutoDraw(true);
        }
        
        
        // if entr_ans_txt_intr_2 is active this frame...
        if (entr_ans_txt_intr_2.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *aha_quest_intr_yes* updates
        if (t >= 0.5 && aha_quest_intr_yes.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          aha_quest_intr_yes.tStart = t;  // (not accounting for frame time here)
          aha_quest_intr_yes.frameNStart = frameN;  // exact frame index
          
          aha_quest_intr_yes.setAutoDraw(true);
        }
        
        
        // if aha_quest_intr_yes is active this frame...
        if (aha_quest_intr_yes.status === PsychoJS.Status.STARTED) {
        }
        
        if (aha_quest_intr_yes.status === PsychoJS.Status.STARTED) {
          // check whether aha_quest_intr_yes has been pressed
          if (aha_quest_intr_yes.isClicked) {
            if (!aha_quest_intr_yes.wasClicked) {
              // store time of first click
              aha_quest_intr_yes.timesOn.push(aha_quest_intr_yes.clock.getTime());
              // store time clicked until
              aha_quest_intr_yes.timesOff.push(aha_quest_intr_yes.clock.getTime());
            } else {
              // update time clicked until;
              aha_quest_intr_yes.timesOff[aha_quest_intr_yes.timesOff.length - 1] = aha_quest_intr_yes.clock.getTime();
            }
            if (!aha_quest_intr_yes.wasClicked) {
              // end routine when aha_quest_intr_yes is clicked
              continueRoutine = false;
              
            }
            // if aha_quest_intr_yes is still clicked next frame, it is not a new click
            aha_quest_intr_yes.wasClicked = true;
          } else {
            // if aha_quest_intr_yes is clicked next frame, it is a new click
            aha_quest_intr_yes.wasClicked = false;
          }
        } else {
          // keep clock at 0 if aha_quest_intr_yes hasn't started / has finished
          aha_quest_intr_yes.clock.reset();
          // if aha_quest_intr_yes is clicked next frame, it is a new click
          aha_quest_intr_yes.wasClicked = false;
        }
        
        // *aha_quest_intr_no* updates
        if (t >= 0.5 && aha_quest_intr_no.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          aha_quest_intr_no.tStart = t;  // (not accounting for frame time here)
          aha_quest_intr_no.frameNStart = frameN;  // exact frame index
          
          aha_quest_intr_no.setAutoDraw(true);
        }
        
        
        // if aha_quest_intr_no is active this frame...
        if (aha_quest_intr_no.status === PsychoJS.Status.STARTED) {
        }
        
        if (aha_quest_intr_no.status === PsychoJS.Status.STARTED) {
          // check whether aha_quest_intr_no has been pressed
          if (aha_quest_intr_no.isClicked) {
            if (!aha_quest_intr_no.wasClicked) {
              // store time of first click
              aha_quest_intr_no.timesOn.push(aha_quest_intr_no.clock.getTime());
              // store time clicked until
              aha_quest_intr_no.timesOff.push(aha_quest_intr_no.clock.getTime());
            } else {
              // update time clicked until;
              aha_quest_intr_no.timesOff[aha_quest_intr_no.timesOff.length - 1] = aha_quest_intr_no.clock.getTime();
            }
            if (!aha_quest_intr_no.wasClicked) {
              // end routine when aha_quest_intr_no is clicked
              continueRoutine = false;
              
            }
            // if aha_quest_intr_no is still clicked next frame, it is not a new click
            aha_quest_intr_no.wasClicked = true;
          } else {
            // if aha_quest_intr_no is clicked next frame, it is a new click
            aha_quest_intr_no.wasClicked = false;
          }
        } else {
          // keep clock at 0 if aha_quest_intr_no hasn't started / has finished
          aha_quest_intr_no.clock.reset();
          // if aha_quest_intr_no is clicked next frame, it is a new click
          aha_quest_intr_no.wasClicked = false;
        }
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of p_exp_int_2Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function p_exp_int_2RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'p_exp_int_2' ---
        for (const thisComponent of p_exp_int_2Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('p_exp_int_2.stopped', globalClock.getTime());
        // Run 'End Routine' code from code_37
        if (aha_quest_intr_yes.isClicked) {
            nTr61 = 1;
        }
        
        psychoJS.experiment.addData('aha_quest_intr_yes.numClicks', aha_quest_intr_yes.numClicks);
        psychoJS.experiment.addData('aha_quest_intr_yes.timesOn', aha_quest_intr_yes.timesOn);
        psychoJS.experiment.addData('aha_quest_intr_yes.timesOff', aha_quest_intr_yes.timesOff);
        psychoJS.experiment.addData('aha_quest_intr_no.numClicks', aha_quest_intr_no.numClicks);
        psychoJS.experiment.addData('aha_quest_intr_no.timesOn', aha_quest_intr_no.timesOn);
        psychoJS.experiment.addData('aha_quest_intr_no.timesOff', aha_quest_intr_no.timesOff);
        // the Routine "p_exp_int_2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var p_exp_int_3MaxDurationReached;
var p_exp_int_3MaxDuration;
var p_exp_int_3Components;
function p_exp_int_3RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'p_exp_int_3' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        p_exp_int_3Clock.reset();
        routineTimer.reset();
        p_exp_int_3MaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_38
        psychoJS.window.mouseVisible = true;
        entr_ans_txt_intr_3_1.alignText = "left";
        
        entr_ans_intr_3.setText('');
        entr_ans_intr_3.refresh();
        // reset button_entr_ans_intr_3 to account for continued clicks & clear times on/off
        button_entr_ans_intr_3.reset()
        psychoJS.experiment.addData('p_exp_int_3.started', globalClock.getTime());
        p_exp_int_3MaxDuration = null
        // keep track of which components have finished
        p_exp_int_3Components = [];
        p_exp_int_3Components.push(entr_ans_txt_intr_3);
        p_exp_int_3Components.push(entr_ans_txt_intr_3_1);
        p_exp_int_3Components.push(entr_ans_intr_3);
        p_exp_int_3Components.push(button_entr_ans_intr_3);
        
        for (const thisComponent of p_exp_int_3Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function p_exp_int_3RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'p_exp_int_3' ---
        // get current time
        t = p_exp_int_3Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        // Run 'Each Frame' code from code_38
        if ((entr_ans_int_3.text && entr_ans_int_3.text.strip())) {
            button_entr_ans_intr_3.setAutoDraw(true);
        } else {
            button_entr_ans_intr_3.setAutoDraw(false);
        }
        
        
        // *entr_ans_txt_intr_3* updates
        if (t >= 0.0 && entr_ans_txt_intr_3.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          entr_ans_txt_intr_3.tStart = t;  // (not accounting for frame time here)
          entr_ans_txt_intr_3.frameNStart = frameN;  // exact frame index
          
          entr_ans_txt_intr_3.setAutoDraw(true);
        }
        
        
        // if entr_ans_txt_intr_3 is active this frame...
        if (entr_ans_txt_intr_3.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *entr_ans_txt_intr_3_1* updates
        if (t >= 0.0 && entr_ans_txt_intr_3_1.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          entr_ans_txt_intr_3_1.tStart = t;  // (not accounting for frame time here)
          entr_ans_txt_intr_3_1.frameNStart = frameN;  // exact frame index
          
          entr_ans_txt_intr_3_1.setAutoDraw(true);
        }
        
        
        // if entr_ans_txt_intr_3_1 is active this frame...
        if (entr_ans_txt_intr_3_1.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *entr_ans_intr_3* updates
        if (t >= 0.0 && entr_ans_intr_3.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          entr_ans_intr_3.tStart = t;  // (not accounting for frame time here)
          entr_ans_intr_3.frameNStart = frameN;  // exact frame index
          
          entr_ans_intr_3.setAutoDraw(true);
        }
        
        
        // if entr_ans_intr_3 is active this frame...
        if (entr_ans_intr_3.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *button_entr_ans_intr_3* updates
        
        // if button_entr_ans_intr_3 is active this frame...
        if (button_entr_ans_intr_3.status === PsychoJS.Status.STARTED) {
        }
        
        if (button_entr_ans_intr_3.status === PsychoJS.Status.STARTED) {
          // check whether button_entr_ans_intr_3 has been pressed
          if (button_entr_ans_intr_3.isClicked) {
            if (!button_entr_ans_intr_3.wasClicked) {
              // store time of first click
              button_entr_ans_intr_3.timesOn.push(button_entr_ans_intr_3.clock.getTime());
              // store time clicked until
              button_entr_ans_intr_3.timesOff.push(button_entr_ans_intr_3.clock.getTime());
            } else {
              // update time clicked until;
              button_entr_ans_intr_3.timesOff[button_entr_ans_intr_3.timesOff.length - 1] = button_entr_ans_intr_3.clock.getTime();
            }
            if (!button_entr_ans_intr_3.wasClicked) {
              // end routine when button_entr_ans_intr_3 is clicked
              continueRoutine = false;
              
            }
            // if button_entr_ans_intr_3 is still clicked next frame, it is not a new click
            button_entr_ans_intr_3.wasClicked = true;
          } else {
            // if button_entr_ans_intr_3 is clicked next frame, it is a new click
            button_entr_ans_intr_3.wasClicked = false;
          }
        } else {
          // keep clock at 0 if button_entr_ans_intr_3 hasn't started / has finished
          button_entr_ans_intr_3.clock.reset();
          // if button_entr_ans_intr_3 is clicked next frame, it is a new click
          button_entr_ans_intr_3.wasClicked = false;
        }
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of p_exp_int_3Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function p_exp_int_3RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'p_exp_int_3' ---
        for (const thisComponent of p_exp_int_3Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('p_exp_int_3.stopped', globalClock.getTime());
        psychoJS.experiment.addData('entr_ans_intr_3.text',entr_ans_intr_3.text)
        psychoJS.experiment.addData('button_entr_ans_intr_3.numClicks', button_entr_ans_intr_3.numClicks);
        psychoJS.experiment.addData('button_entr_ans_intr_3.timesOn', button_entr_ans_intr_3.timesOn);
        psychoJS.experiment.addData('button_entr_ans_intr_3.timesOff', button_entr_ans_intr_3.timesOff);
        // the Routine "p_exp_int_3" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var p_exp_int_4MaxDurationReached;
var p_exp_int_4MaxDuration;
var p_exp_int_4Components;
function p_exp_int_4RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'p_exp_int_4' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        p_exp_int_4Clock.reset();
        routineTimer.reset();
        p_exp_int_4MaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_39
        psychoJS.window.mouseVisible = true;
        entr_ans_txt_intr_4_1.alignText = "left";
        
        entr_ans_intr_4.setText('');
        entr_ans_intr_4.refresh();
        // reset button_entr_ans_intr_4 to account for continued clicks & clear times on/off
        button_entr_ans_intr_4.reset()
        psychoJS.experiment.addData('p_exp_int_4.started', globalClock.getTime());
        p_exp_int_4MaxDuration = null
        // keep track of which components have finished
        p_exp_int_4Components = [];
        p_exp_int_4Components.push(entr_ans_txt_intr_4);
        p_exp_int_4Components.push(entr_ans_txt_intr_4_1);
        p_exp_int_4Components.push(entr_ans_intr_4);
        p_exp_int_4Components.push(button_entr_ans_intr_4);
        
        for (const thisComponent of p_exp_int_4Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function p_exp_int_4RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'p_exp_int_4' ---
        // get current time
        t = p_exp_int_4Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        // Run 'Each Frame' code from code_39
        if ((entr_ans_int_4.text && entr_ans_int_4.text.strip())) {
            button_entr_ans_intr_4.setAutoDraw(true);
        } else {
            button_entr_ans_intr_4.setAutoDraw(false);
        }
        
        
        // *entr_ans_txt_intr_4* updates
        if (t >= 0.0 && entr_ans_txt_intr_4.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          entr_ans_txt_intr_4.tStart = t;  // (not accounting for frame time here)
          entr_ans_txt_intr_4.frameNStart = frameN;  // exact frame index
          
          entr_ans_txt_intr_4.setAutoDraw(true);
        }
        
        
        // if entr_ans_txt_intr_4 is active this frame...
        if (entr_ans_txt_intr_4.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *entr_ans_txt_intr_4_1* updates
        if (t >= 0.0 && entr_ans_txt_intr_4_1.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          entr_ans_txt_intr_4_1.tStart = t;  // (not accounting for frame time here)
          entr_ans_txt_intr_4_1.frameNStart = frameN;  // exact frame index
          
          entr_ans_txt_intr_4_1.setAutoDraw(true);
        }
        
        
        // if entr_ans_txt_intr_4_1 is active this frame...
        if (entr_ans_txt_intr_4_1.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *entr_ans_intr_4* updates
        if (t >= 0.0 && entr_ans_intr_4.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          entr_ans_intr_4.tStart = t;  // (not accounting for frame time here)
          entr_ans_intr_4.frameNStart = frameN;  // exact frame index
          
          entr_ans_intr_4.setAutoDraw(true);
        }
        
        
        // if entr_ans_intr_4 is active this frame...
        if (entr_ans_intr_4.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *button_entr_ans_intr_4* updates
        
        // if button_entr_ans_intr_4 is active this frame...
        if (button_entr_ans_intr_4.status === PsychoJS.Status.STARTED) {
        }
        
        if (button_entr_ans_intr_4.status === PsychoJS.Status.STARTED) {
          // check whether button_entr_ans_intr_4 has been pressed
          if (button_entr_ans_intr_4.isClicked) {
            if (!button_entr_ans_intr_4.wasClicked) {
              // store time of first click
              button_entr_ans_intr_4.timesOn.push(button_entr_ans_intr_4.clock.getTime());
              // store time clicked until
              button_entr_ans_intr_4.timesOff.push(button_entr_ans_intr_4.clock.getTime());
            } else {
              // update time clicked until;
              button_entr_ans_intr_4.timesOff[button_entr_ans_intr_4.timesOff.length - 1] = button_entr_ans_intr_4.clock.getTime();
            }
            if (!button_entr_ans_intr_4.wasClicked) {
              // end routine when button_entr_ans_intr_4 is clicked
              continueRoutine = false;
              
            }
            // if button_entr_ans_intr_4 is still clicked next frame, it is not a new click
            button_entr_ans_intr_4.wasClicked = true;
          } else {
            // if button_entr_ans_intr_4 is clicked next frame, it is a new click
            button_entr_ans_intr_4.wasClicked = false;
          }
        } else {
          // keep clock at 0 if button_entr_ans_intr_4 hasn't started / has finished
          button_entr_ans_intr_4.clock.reset();
          // if button_entr_ans_intr_4 is clicked next frame, it is a new click
          button_entr_ans_intr_4.wasClicked = false;
        }
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of p_exp_int_4Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function p_exp_int_4RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'p_exp_int_4' ---
        for (const thisComponent of p_exp_int_4Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('p_exp_int_4.stopped', globalClock.getTime());
        psychoJS.experiment.addData('entr_ans_intr_4.text',entr_ans_intr_4.text)
        psychoJS.experiment.addData('button_entr_ans_intr_4.numClicks', button_entr_ans_intr_4.numClicks);
        psychoJS.experiment.addData('button_entr_ans_intr_4.timesOn', button_entr_ans_intr_4.timesOn);
        psychoJS.experiment.addData('button_entr_ans_intr_4.timesOff', button_entr_ans_intr_4.timesOff);
        // the Routine "p_exp_int_4" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var p_exp_int_5MaxDurationReached;
var p_exp_int_5MaxDuration;
var p_exp_int_5Components;
function p_exp_int_5RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'p_exp_int_5' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        p_exp_int_5Clock.reset();
        routineTimer.reset();
        p_exp_int_5MaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_40
        psychoJS.window.mouseVisible = true;
        
        slider.reset()
        // reset button_entr_ans_intr_5 to account for continued clicks & clear times on/off
        button_entr_ans_intr_5.reset()
        psychoJS.experiment.addData('p_exp_int_5.started', globalClock.getTime());
        p_exp_int_5MaxDuration = null
        // keep track of which components have finished
        p_exp_int_5Components = [];
        p_exp_int_5Components.push(entr_ans_txt_intr_5);
        p_exp_int_5Components.push(slider);
        p_exp_int_5Components.push(text_easy);
        p_exp_int_5Components.push(text_hard);
        p_exp_int_5Components.push(button_entr_ans_intr_5);
        
        for (const thisComponent of p_exp_int_5Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function p_exp_int_5RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'p_exp_int_5' ---
        // get current time
        t = p_exp_int_5Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        // Run 'Each Frame' code from code_40
        if ((slider.getRating() !== null)) {
            button_entr_ans_intr_5.setAutoDraw(true);
        } else {
            button_entr_ans_intr_5.setAutoDraw(false);
        }
        
        
        // *entr_ans_txt_intr_5* updates
        if (t >= 0.0 && entr_ans_txt_intr_5.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          entr_ans_txt_intr_5.tStart = t;  // (not accounting for frame time here)
          entr_ans_txt_intr_5.frameNStart = frameN;  // exact frame index
          
          entr_ans_txt_intr_5.setAutoDraw(true);
        }
        
        
        // if entr_ans_txt_intr_5 is active this frame...
        if (entr_ans_txt_intr_5.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *slider* updates
        if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          slider.tStart = t;  // (not accounting for frame time here)
          slider.frameNStart = frameN;  // exact frame index
          
          slider.setAutoDraw(true);
        }
        
        
        // if slider is active this frame...
        if (slider.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *text_easy* updates
        if (t >= 0.0 && text_easy.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_easy.tStart = t;  // (not accounting for frame time here)
          text_easy.frameNStart = frameN;  // exact frame index
          
          text_easy.setAutoDraw(true);
        }
        
        
        // if text_easy is active this frame...
        if (text_easy.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *text_hard* updates
        if (t >= 0.0 && text_hard.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_hard.tStart = t;  // (not accounting for frame time here)
          text_hard.frameNStart = frameN;  // exact frame index
          
          text_hard.setAutoDraw(true);
        }
        
        
        // if text_hard is active this frame...
        if (text_hard.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *button_entr_ans_intr_5* updates
        
        // if button_entr_ans_intr_5 is active this frame...
        if (button_entr_ans_intr_5.status === PsychoJS.Status.STARTED) {
        }
        
        if (button_entr_ans_intr_5.status === PsychoJS.Status.STARTED) {
          // check whether button_entr_ans_intr_5 has been pressed
          if (button_entr_ans_intr_5.isClicked) {
            if (!button_entr_ans_intr_5.wasClicked) {
              // store time of first click
              button_entr_ans_intr_5.timesOn.push(button_entr_ans_intr_5.clock.getTime());
              // store time clicked until
              button_entr_ans_intr_5.timesOff.push(button_entr_ans_intr_5.clock.getTime());
            } else {
              // update time clicked until;
              button_entr_ans_intr_5.timesOff[button_entr_ans_intr_5.timesOff.length - 1] = button_entr_ans_intr_5.clock.getTime();
            }
            if (!button_entr_ans_intr_5.wasClicked) {
              // end routine when button_entr_ans_intr_5 is clicked
              continueRoutine = false;
              
            }
            // if button_entr_ans_intr_5 is still clicked next frame, it is not a new click
            button_entr_ans_intr_5.wasClicked = true;
          } else {
            // if button_entr_ans_intr_5 is clicked next frame, it is a new click
            button_entr_ans_intr_5.wasClicked = false;
          }
        } else {
          // keep clock at 0 if button_entr_ans_intr_5 hasn't started / has finished
          button_entr_ans_intr_5.clock.reset();
          // if button_entr_ans_intr_5 is clicked next frame, it is a new click
          button_entr_ans_intr_5.wasClicked = false;
        }
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of p_exp_int_5Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function p_exp_int_5RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'p_exp_int_5' ---
        for (const thisComponent of p_exp_int_5Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('p_exp_int_5.stopped', globalClock.getTime());
        psychoJS.experiment.addData('slider.response', slider.getRating());
        psychoJS.experiment.addData('button_entr_ans_intr_5.numClicks', button_entr_ans_intr_5.numClicks);
        psychoJS.experiment.addData('button_entr_ans_intr_5.timesOn', button_entr_ans_intr_5.timesOn);
        psychoJS.experiment.addData('button_entr_ans_intr_5.timesOff', button_entr_ans_intr_5.timesOff);
        // the Routine "p_exp_int_5" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var p_exp_int_6MaxDurationReached;
var p_exp_int_6MaxDuration;
var p_exp_int_6Components;
function p_exp_int_6RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'p_exp_int_6' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        p_exp_int_6Clock.reset();
        routineTimer.reset();
        p_exp_int_6MaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_41
        psychoJS.window.mouseVisible = true;
        entr_ans_txt_intr_3_1.alignText = "left";
        
        entr_ans_intr_6.setText('');
        entr_ans_intr_6.refresh();
        // reset button_entr_ans_intr_6 to account for continued clicks & clear times on/off
        button_entr_ans_intr_6.reset()
        psychoJS.experiment.addData('p_exp_int_6.started', globalClock.getTime());
        p_exp_int_6MaxDuration = null
        // keep track of which components have finished
        p_exp_int_6Components = [];
        p_exp_int_6Components.push(entr_ans_txt_intr_6);
        p_exp_int_6Components.push(entr_ans_intr_6);
        p_exp_int_6Components.push(button_entr_ans_intr_6);
        
        for (const thisComponent of p_exp_int_6Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function p_exp_int_6RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'p_exp_int_6' ---
        // get current time
        t = p_exp_int_6Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        // Run 'Each Frame' code from code_41
        if ((entr_ans_int_6.text && entr_ans_int_6.text.strip())) {
            button_entr_ans_intr_6.setAutoDraw(true);
        } else {
            button_entr_ans_intr_6.setAutoDraw(false);
        }
        
        
        // *entr_ans_txt_intr_6* updates
        if (t >= 0.0 && entr_ans_txt_intr_6.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          entr_ans_txt_intr_6.tStart = t;  // (not accounting for frame time here)
          entr_ans_txt_intr_6.frameNStart = frameN;  // exact frame index
          
          entr_ans_txt_intr_6.setAutoDraw(true);
        }
        
        
        // if entr_ans_txt_intr_6 is active this frame...
        if (entr_ans_txt_intr_6.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *entr_ans_intr_6* updates
        if (t >= 0.0 && entr_ans_intr_6.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          entr_ans_intr_6.tStart = t;  // (not accounting for frame time here)
          entr_ans_intr_6.frameNStart = frameN;  // exact frame index
          
          entr_ans_intr_6.setAutoDraw(true);
        }
        
        
        // if entr_ans_intr_6 is active this frame...
        if (entr_ans_intr_6.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *button_entr_ans_intr_6* updates
        
        // if button_entr_ans_intr_6 is active this frame...
        if (button_entr_ans_intr_6.status === PsychoJS.Status.STARTED) {
        }
        
        if (button_entr_ans_intr_6.status === PsychoJS.Status.STARTED) {
          // check whether button_entr_ans_intr_6 has been pressed
          if (button_entr_ans_intr_6.isClicked) {
            if (!button_entr_ans_intr_6.wasClicked) {
              // store time of first click
              button_entr_ans_intr_6.timesOn.push(button_entr_ans_intr_6.clock.getTime());
              // store time clicked until
              button_entr_ans_intr_6.timesOff.push(button_entr_ans_intr_6.clock.getTime());
            } else {
              // update time clicked until;
              button_entr_ans_intr_6.timesOff[button_entr_ans_intr_6.timesOff.length - 1] = button_entr_ans_intr_6.clock.getTime();
            }
            if (!button_entr_ans_intr_6.wasClicked) {
              // end routine when button_entr_ans_intr_6 is clicked
              continueRoutine = false;
              
            }
            // if button_entr_ans_intr_6 is still clicked next frame, it is not a new click
            button_entr_ans_intr_6.wasClicked = true;
          } else {
            // if button_entr_ans_intr_6 is clicked next frame, it is a new click
            button_entr_ans_intr_6.wasClicked = false;
          }
        } else {
          // keep clock at 0 if button_entr_ans_intr_6 hasn't started / has finished
          button_entr_ans_intr_6.clock.reset();
          // if button_entr_ans_intr_6 is clicked next frame, it is a new click
          button_entr_ans_intr_6.wasClicked = false;
        }
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of p_exp_int_6Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function p_exp_int_6RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'p_exp_int_6' ---
        for (const thisComponent of p_exp_int_6Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('p_exp_int_6.stopped', globalClock.getTime());
        psychoJS.experiment.addData('entr_ans_intr_6.text',entr_ans_intr_6.text)
        psychoJS.experiment.addData('button_entr_ans_intr_6.numClicks', button_entr_ans_intr_6.numClicks);
        psychoJS.experiment.addData('button_entr_ans_intr_6.timesOn', button_entr_ans_intr_6.timesOn);
        psychoJS.experiment.addData('button_entr_ans_intr_6.timesOff', button_entr_ans_intr_6.timesOff);
        // the Routine "p_exp_int_6" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var p_exp_int_7MaxDurationReached;
var p_exp_int_7MaxDuration;
var p_exp_int_7Components;
function p_exp_int_7RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'p_exp_int_7' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        p_exp_int_7Clock.reset();
        routineTimer.reset();
        p_exp_int_7MaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_42
        psychoJS.window.mouseVisible = true;
        entr_ans_txt_intr_3_1.alignText = "left";
        
        entr_ans_intr_7.setText('');
        entr_ans_intr_7.refresh();
        // reset button_entr_ans_intr_7 to account for continued clicks & clear times on/off
        button_entr_ans_intr_7.reset()
        psychoJS.experiment.addData('p_exp_int_7.started', globalClock.getTime());
        p_exp_int_7MaxDuration = null
        // keep track of which components have finished
        p_exp_int_7Components = [];
        p_exp_int_7Components.push(entr_ans_txt_intr_7);
        p_exp_int_7Components.push(entr_ans_intr_7);
        p_exp_int_7Components.push(button_entr_ans_intr_7);
        
        for (const thisComponent of p_exp_int_7Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function p_exp_int_7RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'p_exp_int_7' ---
        // get current time
        t = p_exp_int_7Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        // Run 'Each Frame' code from code_42
        if ((entr_ans_int_7.text && entr_ans_int_7.text.strip())) {
            button_entr_ans_intr_7.setAutoDraw(true);
        } else {
            button_entr_ans_intr_7.setAutoDraw(false);
        }
        
        
        // *entr_ans_txt_intr_7* updates
        if (t >= 0.0 && entr_ans_txt_intr_7.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          entr_ans_txt_intr_7.tStart = t;  // (not accounting for frame time here)
          entr_ans_txt_intr_7.frameNStart = frameN;  // exact frame index
          
          entr_ans_txt_intr_7.setAutoDraw(true);
        }
        
        
        // if entr_ans_txt_intr_7 is active this frame...
        if (entr_ans_txt_intr_7.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *entr_ans_intr_7* updates
        if (t >= 0.0 && entr_ans_intr_7.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          entr_ans_intr_7.tStart = t;  // (not accounting for frame time here)
          entr_ans_intr_7.frameNStart = frameN;  // exact frame index
          
          entr_ans_intr_7.setAutoDraw(true);
        }
        
        
        // if entr_ans_intr_7 is active this frame...
        if (entr_ans_intr_7.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *button_entr_ans_intr_7* updates
        
        // if button_entr_ans_intr_7 is active this frame...
        if (button_entr_ans_intr_7.status === PsychoJS.Status.STARTED) {
        }
        
        if (button_entr_ans_intr_7.status === PsychoJS.Status.STARTED) {
          // check whether button_entr_ans_intr_7 has been pressed
          if (button_entr_ans_intr_7.isClicked) {
            if (!button_entr_ans_intr_7.wasClicked) {
              // store time of first click
              button_entr_ans_intr_7.timesOn.push(button_entr_ans_intr_7.clock.getTime());
              // store time clicked until
              button_entr_ans_intr_7.timesOff.push(button_entr_ans_intr_7.clock.getTime());
            } else {
              // update time clicked until;
              button_entr_ans_intr_7.timesOff[button_entr_ans_intr_7.timesOff.length - 1] = button_entr_ans_intr_7.clock.getTime();
            }
            if (!button_entr_ans_intr_7.wasClicked) {
              // end routine when button_entr_ans_intr_7 is clicked
              continueRoutine = false;
              
            }
            // if button_entr_ans_intr_7 is still clicked next frame, it is not a new click
            button_entr_ans_intr_7.wasClicked = true;
          } else {
            // if button_entr_ans_intr_7 is clicked next frame, it is a new click
            button_entr_ans_intr_7.wasClicked = false;
          }
        } else {
          // keep clock at 0 if button_entr_ans_intr_7 hasn't started / has finished
          button_entr_ans_intr_7.clock.reset();
          // if button_entr_ans_intr_7 is clicked next frame, it is a new click
          button_entr_ans_intr_7.wasClicked = false;
        }
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of p_exp_int_7Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function p_exp_int_7RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'p_exp_int_7' ---
        for (const thisComponent of p_exp_int_7Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('p_exp_int_7.stopped', globalClock.getTime());
        psychoJS.experiment.addData('entr_ans_intr_7.text',entr_ans_intr_7.text)
        psychoJS.experiment.addData('button_entr_ans_intr_7.numClicks', button_entr_ans_intr_7.numClicks);
        psychoJS.experiment.addData('button_entr_ans_intr_7.timesOn', button_entr_ans_intr_7.timesOn);
        psychoJS.experiment.addData('button_entr_ans_intr_7.timesOff', button_entr_ans_intr_7.timesOff);
        // the Routine "p_exp_int_7" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var endMaxDurationReached;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'end' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        endClock.reset(routineTimer.getTime());
        routineTimer.add(0.800000);
        endMaxDurationReached = false;
        // update component parameters for each repeat
        psychoJS.experiment.addData('end.started', globalClock.getTime());
        endMaxDuration = null
        // keep track of which components have finished
        endComponents = [];
        endComponents.push(text_end);
        
        for (const thisComponent of endComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function endRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'end' ---
        // get current time
        t = endClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_end* updates
        if (t >= 0 && text_end.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_end.tStart = t;  // (not accounting for frame time here)
          text_end.frameNStart = frameN;  // exact frame index
          
          text_end.setAutoDraw(true);
        }
        
        
        // if text_end is active this frame...
        if (text_end.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_end.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_end.tStop = t;  // not accounting for scr refresh
          text_end.frameNStop = frameN;  // exact frame index
          // update status
          text_end.status = PsychoJS.Status.FINISHED;
          text_end.setAutoDraw(false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of endComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function endRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'end' ---
        for (const thisComponent of endComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('end.stopped', globalClock.getTime());
        if (routineForceEnded) {
            routineTimer.reset();} else if (endMaxDurationReached) {
            endClock.add(endMaxDuration);
        } else {
            endClock.add(0.800000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var data_saveMaxDurationReached;
var data_saveMaxDuration;
var data_saveComponents;
function data_saveRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'data_save' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        data_saveClock.reset(routineTimer.getTime());
        routineTimer.add(3.000000);
        data_saveMaxDurationReached = false;
        // update component parameters for each repeat
        // Отключаем стандартное сохранение
        psychoJS._saveResults = 0;
        
        // Формируем имя файла
        let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
        
        // Получаем все данные 
        let dataObj = psychoJS._experiment._trialsData;
        
        // Составляем полный список компонентов
        let allKeys = [];
        
        dataObj.forEach(trial => {
            Object.keys(trial).forEach(key => {
                if (!allKeys.includes(key)) {
                    allKeys.push(key);
                }
            });
        });
        
        // Формируем CSV с заголовками
        let csv = allKeys.join(',') + '\n';
        
        dataObj.forEach(trial => {
            let row = allKeys.map(key => {
                let val = trial[key];
                // если значение undefined, ставим пустую строку
                return val !== undefined ? val : '';
            }).join(',');
            csv += row + '\n';
        });
        
        // Отправляем на OSF через DataPipe
        console.log('Saving data...');
        
        fetch('https://pipe.jspsych.org/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
            },
            body: JSON.stringify({
                experimentID: 'woctwG5yByeU', // меняем на свой ID
                filename: filename,
                data: csv,
            }),
        })
        
        .then(response => response.json())
        .then(data => {
            console.log('Data saved:', data);
            quitPsychoJS();
        })
        
        .catch(err => {
            console.error('Error saving data:', err);
            quitPsychoJS();
        });
        psychoJS.experiment.addData('data_save.started', globalClock.getTime());
        data_saveMaxDuration = null
        // keep track of which components have finished
        data_saveComponents = [];
        data_saveComponents.push(text_data_save);
        
        for (const thisComponent of data_saveComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function data_saveRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'data_save' ---
        // get current time
        t = data_saveClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_data_save* updates
        if (t >= 0.0 && text_data_save.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_data_save.tStart = t;  // (not accounting for frame time here)
          text_data_save.frameNStart = frameN;  // exact frame index
          
          text_data_save.setAutoDraw(true);
        }
        
        
        // if text_data_save is active this frame...
        if (text_data_save.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_data_save.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_data_save.tStop = t;  // not accounting for scr refresh
          text_data_save.frameNStop = frameN;  // exact frame index
          // update status
          text_data_save.status = PsychoJS.Status.FINISHED;
          text_data_save.setAutoDraw(false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of data_saveComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function data_saveRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'data_save' ---
        for (const thisComponent of data_saveComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('data_save.stopped', globalClock.getTime());
        if (routineForceEnded) {
            routineTimer.reset();} else if (data_saveMaxDurationReached) {
            data_saveClock.add(data_saveMaxDuration);
        } else {
            data_saveClock.add(3.000000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
function importConditions(currentLoop) {
      return async function () {
        psychoJS.importAttributes(currentLoop.getCurrentTrial());
        return Scheduler.Event.NEXT;
        };
    }
    
    
async function quitPsychoJS(message, isCompleted) {
      // Check for and save orphaned data
      if (psychoJS.experiment.isEntryEmpty()) {
        psychoJS.experiment.nextEntry();
      }
      psychoJS.window.close();
      psychoJS.quit({message: message, isCompleted: isCompleted});
      
      return Scheduler.Event.QUIT;
    }
