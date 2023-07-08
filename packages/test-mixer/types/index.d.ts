declare const version: string;
type PlainObject = {
  [name: string]: any;
};
type PlainObjectOfBool = {
  [name: string]: boolean;
};
declare function mixer(
  ref?: PlainObject,
  defaultsObj?: PlainObject,
): PlainObjectOfBool[];

export { PlainObject, PlainObjectOfBool, mixer, version };
