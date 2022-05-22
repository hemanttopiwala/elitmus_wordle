import words from './words.txt';

export const generateWordSet = async () => {
  let wordSet;
  await fetch(words)
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      let arr = data.split('\n');
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace('\r', '');
      }
      wordSet = new Set(arr);
    });
  return { wordSet };
};
