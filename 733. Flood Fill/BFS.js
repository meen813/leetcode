const floodFill = (image, sr, sc, newColor) => {
    const queue = [[sr, sc]];
    const originalColor = image[sr][sc];
    
    if (originalColor === newColor) {
      return image;
    }
    
    while (queue.length) {
      const [row, col] = queue.shift();
      image[row][col] = newColor;
      
      if (row > 0 && image[row - 1][col] === originalColor) {
        queue.push([row - 1, col]);
      }
      if (row < image.length - 1 && image[row + 1][col] === originalColor) {
        queue.push([row + 1, col]);
      }
      if (col > 0 && image[row][col - 1] === originalColor) {
        queue.push([row, col - 1]);
      }
      if (col < image[0].length - 1 && image[row][col + 1] === originalColor) {
        queue.push([row, col + 1]);
      }
    }
    //변환된 이미지를 반환. 이미지 자체를 변환시킴.
    return image;
  };