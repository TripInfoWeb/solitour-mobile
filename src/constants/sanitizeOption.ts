import {IOptions} from 'sanitize-html';

export const SANITIZE_OPTION: IOptions = {
  allowedTags: ['p', 'strong', 'em', 'u', 's'],
  allowedAttributes: {
    p: ['class', 'style'],
    strong: ['class', 'style'],
    em: ['class', 'style'],
    u: ['class', 'style'],
    s: ['class', 'style'],
  },
  allowedSchemes: ['data', 'http', 'https'],
} as const;
