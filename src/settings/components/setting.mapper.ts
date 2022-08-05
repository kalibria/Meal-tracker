class SettingMapper {
  getHourFromBLToUI(time: number): number {
    return Math.trunc(time / 60);
  }

  getMinsFromBLToUI(time: number): number {
    const hourInTime = this.getHourFromBLToUI(time);
    return time - hourInTime * 60;
  }
}

export const settingMapper = new SettingMapper();
