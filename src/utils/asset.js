// Resolves a file from /public against the configured Vite `base`.
export const asset = (file) => `${import.meta.env.BASE_URL}${file}`;
