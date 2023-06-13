import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import util from "util";

dayjs.extend(relativeTime, {
  thresholds: [
    { l: "s", r: 59, d: "second" },
    { l: "m", r: 299, d: "second" },
    { l: "mm", r: 60, d: "minute" },
  ],
});
dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  relativeTime: {
    future: (result: string) => {
      if (result === "now") {
        return "now";
      }
      return util.format("in %s", result);
    },
    past: (result: string) => {
      if (result === "now") {
        return "now";
      }
      return util.format("%s ago", result);
    },
    s: (number: number) => {
      if (number < 5) {
        return "now";
      }
      return `${Math.ceil(number / 5) * 5}s`;
    },
    m: (number: number) =>
      `${Math.ceil(number / 60)}m ${Math.ceil((number % 60) / 5) * 5}s`,
    mm: "%dm",
  },
});

export {
  dayjs
}
