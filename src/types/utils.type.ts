export type ObjectValues<T extends Object> = T[keyof T];

export type ObjectValuesArray<T extends Object> = ObjectValues<T>[];
