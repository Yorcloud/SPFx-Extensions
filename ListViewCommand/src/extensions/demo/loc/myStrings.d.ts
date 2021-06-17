declare interface IDemoCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'DemoCommandSetStrings' {
  const strings: IDemoCommandSetStrings;
  export = strings;
}
