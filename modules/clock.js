import { DateTime } from './luxon.min.js';

export default class Clock {
  constructor(domElement) {
    this.date = document.getElementById(domElement);
    setInterval(this.updateTime, 1000);
  }

  updateTime = () => {
    const currentDateTime = DateTime.now();
    const timeFormat = DateTime.DATETIME_SHORT_WITH_SECONDS;

    this.date.innerHTML = currentDateTime.toLocaleString(timeFormat);
  }
}