let dataInput = [
  44,
  41,
  48,
  17,
  35,
  146,
  73,
  3,
  16,
  159,
  11,
  29,
  32,
  63,
  65,
  62,
  126,
  151,
  6,
  124,
  87,
  115,
  122,
  43,
  12,
  85,
  2,
  98,
  59,
  156,
  149,
  66,
  10,
  82,
  26,
  79,
  56,
  22,
  74,
  49,
  25,
  69,
  54,
  19,
  108,
  18,
  55,
  131,
  140,
  15,
  125,
  37,
  129,
  91,
  51,
  158,
  117,
  136,
  142,
  109,
  64,
  36,
  160,
  150,
  42,
  118,
  101,
  78,
  28,
  105,
  110,
  40,
  157,
  70,
  97,
  139,
  152,
  47,
  104,
  81,
  27,
  116,
  132,
  143,
  1,
  80,
  75,
  141,
  133,
  9,
  50,
  153,
  123,
  111,
  119,
  130,
  112,
  94,
  90,
  86
];

let noOfOneJumps = 0;
let noOfThreeJumps = 0;

dataInput = dataInput.sort((a,b) => a-b);
dataInput.unshift(0);
dataInput.push(dataInput[dataInput.length -1 ] + 3);

dataInput.forEach((adapterVoltage, index) => {
  if(dataInput[index + 1] === adapterVoltage + 1){
    noOfOneJumps+=1
  } else if(dataInput[index + 1] === adapterVoltage + 3){
    noOfThreeJumps+=1
  }
});

console.log(noOfOneJumps*noOfThreeJumps);

const group = [];
const groupLengths = [];

dataInput.forEach((adapter, index) => {
  if(group.length === 0){
    group.push(adapter);
  } else if(group[group.length - 1] === adapter - 1){
    group.push(adapter);
  } else {
    groupLengths.push(group.length);
    group.splice(0, group.length, adapter);
  }
});

const answer2 = groupLengths
  .filter(a => a > 2)
  .map(a => {
    switch (a) {
      case 3:
        return 2
      case 5:
        return 7;
      default:
        return a;
    }
  })
  .reduce((total, number) => total * number)

console.log(answer2);

