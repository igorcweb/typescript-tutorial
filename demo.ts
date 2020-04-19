export interface IObject {
  a: number;
  b: string;
  c?: boolean;
}

const obj = {
  a: 123,
  b: "abc",
  // c: true,
};

const validateObj = (obj: IObject) => {
  return obj;
};

validateObj(obj);

console.log("test");
