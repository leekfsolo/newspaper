import DOMPurify from "dompurify";

export const purifyHTML = (htmlString: string) =>
  DOMPurify.sanitize(htmlString);
