export default function classNames(...args: Array<string | Record<string, boolean>>): string {
  const classNamesList = [];

  for (const arg of args) {
    if (typeof arg === "object") {

      Object.keys(arg).forEach(key => {
        if (arg[key]) classNamesList.push(key);
      });

      continue;
    }

    classNamesList.push(arg);
  }

  return classNamesList.join(" ");
}
