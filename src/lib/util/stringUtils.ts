export const replaceBrTag = (text: string): string => {
  return text
    .replace(/\r\n/gi, '<br>')
    .replace(/\\n/gi, '<br>')
    .replace(/\n/gi, '<br>');
};

export const camelize = (str: string | undefined) => {
  if (str === undefined) return '';
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
};

export const pascalize = (str: string) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return word.toUpperCase();
    })
    .replace(/\s+/g, '');
};

export const parseParamsToInt = (str: string | null) => {
  if (str === null) return undefined;
  return parseInt(str);
};
