import { default as fetch, Request } from "node-fetch";

const modules = {

  fn1: () => {
    return "A";
  },

  fn2: () => {
    return "B";
  },

  fn3: () => {
    return "C";
  },

  fn4: async() => {
    let text = "";
    text += await modules.fn5();
    return text + "E";
  },

  fn5: async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    return "D";
  },

  main: async() => {
    let text = "";
    text += modules.fn1();
    text += modules.fn2();
    text += modules.fn3();
    text += await modules.fn4();
    return text;
  },
};

const handler = ()=>{
  modules.main();
}

export { handler, modules };
