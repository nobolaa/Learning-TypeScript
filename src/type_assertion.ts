let channel : any = 'Canal';

let channelStr = <string>channel;
let channelStr2 = channel as string;

const myCanvas = <HTMLCanvasElement>document.getElementById('main');
const myCanvas2 = document.getElementById('main') as HTMLCanvasElement;