import { AlarmClock } from "./index.ts";

describe("AlarmClock", () => {
    let alarmClock: AlarmClock;
  
test('通常 -> アラームセット中: アラーム設定', () => {
    alarmClock = new AlarmClock("normal");

    // アラーム設定
    const action = alarmClock.setAlarm();
    // アクションはnoneを返す
    expect(action).toBe("none");

    // 状態がalarmSetに変わる
    expect(alarmClock.getState()).toBe("alarmSet");

});

test('アラームセット中 -> 通常: アラーム解除', () => {
  alarmClock = new AlarmClock("alarmSet");
  // アラーム解除
  const action = alarmClock.cancelAlarm();

 // アクションは"none"を返す
  expect(action).toBe("none");

  // 状態がnormalに変わる
  expect(alarmClock.getState()).toBe("normal");
});

test('アラームセット中 --> アラーム鳴動中: アラーム設定時刻到達', () => {
  alarmClock = new AlarmClock("alarmSet");
  // アラーム設定時刻到達
  const action = alarmClock.reachedToAlarmTime();

  // アラーム設定イベントは"soundAlarm"を返す
  expect(action).toBe("soundAlarm");

  // 状態がalarmSoundingに変わる
  expect(alarmClock.getState()).toBe("alarmSounding");
});

test('アラーム鳴動中 --> 通常: アラーム解除', () => {
  alarmClock = new AlarmClock("alarmSounding");
  // アラーム解除
  const action = alarmClock.cancelAlarm();

  // アラーム設定イベントは"stopAlarm"を返す
  expect(action).toBe("stopAlarm");

  // 状態がnormalに変わる
  expect(alarmClock.getState()).toBe("normal");
});

test('アラーム鳴動中 --> スヌーズ中: スヌーズ', () => {
  alarmClock = new AlarmClock("alarmSounding");
  // スヌーズ
  const action = alarmClock.snooze();

  // アラーム設定イベントは"stopAlarm"を返す
  expect(action).toBe("stopAlarm");

  // 状態がsnoozingに変わる
  expect(alarmClock.getState()).toBe("snoozing");
});

test('スヌーズ中 --> アラーム鳴動中: スヌーズ設定時間経過', () => {
  alarmClock = new AlarmClock("snoozing");
  // スヌーズ
  const action = alarmClock.elapseSnoozeTime();

  // アラーム設定イベントは"soundAlarm"を返す
  expect(action).toBe("soundAlarm");

  // 状態がalarmSoundingに変わる
  expect(alarmClock.getState()).toBe("alarmSounding");
});

test('スヌーズ中 --> 通常: アラーム解除', () => {
  alarmClock = new AlarmClock("snoozing");
  // スヌーズ
  const action = alarmClock.cancelAlarm();

  // アラーム設定イベントは"none"を返す
  expect(action).toBe("none");

  // 状態がnormalに変わる
  expect(alarmClock.getState()).toBe("normal");
});
});