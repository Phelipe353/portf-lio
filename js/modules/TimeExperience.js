export default class TimeExperience {

  constructor(initTime, el) {
    this.initTime = initTime.split('/');
    this.el = el;
    this.currentTime;
    this.date;
  }

  getYears() {
    this.years = Number(this.date[2] - this.initTime[2]);
  }

  yearEqualZero() {
    this.years <= 1 ? this.years = 0 : this.years -= 1;
  }

  getMonths() {
    if (this.date[1] >= this.initTime[1]) this.months = this.date[1] - this.initTime[1];
    else {
      this.yearEqualZero();
      const result = (Number(this.initTime[1]) - Number(this.date[1]))
      this.months = 12 - result;
    }
  }

  getDays() {
    if (this.date[0] >= this.initTime[0]) this.days = this.date[0] - this.initTime[0];
    else {
      this.days = 30 - (Number(this.initTime[0]) - Number(this.date[0]))
      if (this.months <= 1) {
        this.yearEqualZero()
        this.months = 11;
      } else this.months -= 1;
    }
  }

  showTimeOnEl() {
    this.el.innerHTML = ` Tempo de experiência: <br>
    ${this.years} anos, ${this.months} meses, ${this.days} dias - ${this.time}`
  }

  getDateNow() {
    this.currentTime = new Date().toLocaleString().split(', ');
    this.date = this.currentTime[0].split('/');
    this.time = this.currentTime[1];
  }

  start() {
    setInterval(() => {
      this.getDateNow();
      this.getYears();
      this.getMonths();
      this.getDays();
      this.showTimeOnEl();
    }, 1000)
  }
}
