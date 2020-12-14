const earliestDepartTime = 1000390;
const busTimes = [13,"x","x",41,"x","x","x","x","x","x","x","x","x",997,"x","x","x","x","x","x","x",23,"x","x","x","x","x","x","x","x","x","x",19,"x","x","x","x","x","x","x","x","x",29,"x",619,"x","x","x","x","x",37,"x","x","x","x","x","x","x","x","x","x",17];

const workingBuses = busTimes.filter(value => typeof value === "number").sort((a,b) => a-b);

const calculatedWaitTimes = workingBuses
  .map(time => ({id: time, waitTime: time * Math.ceil(earliestDepartTime / time) - earliestDepartTime}))
  .sort((a,b) => a.waitTime - b.waitTime);

const answer = calculatedWaitTimes[0].id * calculatedWaitTimes[0].waitTime;

console.log(answer);

const testData = [17,"x",13,19];

const filteredBusTimes = [...busTimes.entries()]
  .filter(([index, busTime]) => typeof busTime === "number")
  .map(value => value.map(BigInt))
  .map(([index, value]) => ([value, value-index]));

function modularInverse(a, mod) {
  const b = a % mod;
  for (let x = 1n; x < mod; x++) {
    if ((b * x) % mod === 1n) {
      return x;
    }
  }
  return 1n;
}

function chineseRemainderTheorem(congruences) {
  const product = congruences.reduce((total, [val]) => total * val, 1n);
  return congruences.reduce((total, [ni, ai]) => {
    const div = product / ni;
    return total + ai * modularInverse(div, ni) * div;
  }, 0n) % product;
}

const answer2 = chineseRemainderTheorem(filteredBusTimes);
console.log(answer2);


