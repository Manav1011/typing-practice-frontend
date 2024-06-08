const produceEasy = async () => {
  try {
    const res = await fetch('/most_common.json', { method: 'GET' });
    const data = await res.json();

    const wordCount = 300;
    const maxIndex = Object.values(data).length - wordCount;
    const index = Math.floor(Math.random() * maxIndex);

    console.log('Random Index:', index);
    console.log('Max Index:', maxIndex);

    let sendableWords = '';
    for (let i = 0; i < wordCount; i++) {
      sendableWords += data[index + i][0] + ' ';
    }

    return sendableWords.trim().split(/\s+/).filter(e => e.trim().length > 0);
  } catch (err) {
    console.log(err);
  }
};

const produceMedium = async () => {
  try {
    const res = await fetch('/words.json', { method: 'GET' });
    const data = await res.json();

    const wordCount = 400;
    const maxIndex = Object.values(data).length - wordCount;
    const index = Math.floor(Math.random() * maxIndex);

    console.log('Random Index:', index);
    console.log('Max Index:', maxIndex);

    let sendableWords = '';
    for (let i = 0; i < wordCount; i++) {
      sendableWords += data[index + i][0] + ' ';
    }

    return sendableWords.trim().split(/\s+/).filter(e => e.trim().length > 0);
  } catch (err) {
    console.log(err);
  }
}

const produceHard = async () => {
  try {
    const res = await fetch('/para.json', { method: 'GET' });
    const data = await res.json();
    const index = Math.floor(Math.random() * Object.keys(data).length);
    const randomParagraph = data[index.toString()];
    return randomParagraph
  } catch (err) {
    console.log(err);
  }
}

export {produceEasy,produceMedium,produceHard}