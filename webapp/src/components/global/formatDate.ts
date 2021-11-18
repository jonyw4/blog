let locale = "en-US";

export function setLocale(loc: string) {
  locale = loc;
}

export function formatDate(date: Date) {
  return date.toLocaleDateString(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}