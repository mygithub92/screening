import * as moment from 'moment';

export class DateUtils {
  iso8601 = /^\d{4}-\d\d-\d\d \d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/;

  convertToDate(body) {
    if (body === null || body === undefined) {
      return body;
    }

    if (typeof body !== "object") {
      return body;
    }

    for (const key of Object.keys(body)) {
      const value = body[key];
      if (this.isIso8601(value)) {
        body[key] = new Date(value);
      } else if (typeof value === "object") {
        this.convertToDate(value);
      }
    }
  }

  isIso8601(value) {
    if (value === null || value === undefined) {
      return false;
    }

    return this.iso8601.test(value);
  }

  static format(date) {
    return moment(date).format("MM/DD/YYYY");
  }

  static formatDOB(date) {
    return moment(date).format("DD/MM/YYYY");
  }

  static formatDateTime(date) {
    return moment(date).format("MM/DD/YYYY HH:mm:ss");
  }
}
