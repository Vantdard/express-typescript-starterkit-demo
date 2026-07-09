export type LogMeta = Record<string, unknown>;

const formatMeta = (meta?: LogMeta) => {
  if (!meta) {
    return '';
  }

  try {
    return ` ${JSON.stringify(meta)}`;
  } catch {
    return ' {"meta":"[unserializable]"}';
  }
};

export const logger = {
  info(message: string, meta?: LogMeta) {
    console.log(`[info] ${message}${formatMeta(meta)}`);
  },
  error(message: string, meta?: LogMeta) {
    console.error(`[error] ${message}${formatMeta(meta)}`);
  }
};
