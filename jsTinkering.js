

  //----------below is the code that executes the declared functions above--------

  //this app is designed to take in data from a .txt file. The code below reads the file passed in as an argument containing data in the form of a matrix structure
  let rawData;
  const fs = require('node:fs');
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    rawData = data;
    //if there is an error, return the error and interrupt the rest of the application from running
  } catch (error) {
    return error;
  }

  //convert incoming data into a matrix array data format
  convertRawData(0, rawData);

  //check if there is a source in the provided matrix characterized by the "*" symbol
  const startingSource = getInitialSource(matrix);
  if (startingSource === 'there is no * in the matrix') {
    //don't proceed with further data processing if there is no provided source in the matrix
    return 'there is no source in the provided matrix';
    //if there is a source in the matrix set a variable containing important info about the source location in the matrix
  }

  //declare an object to act like a previous source data. this variable is necessary in order to pass in as an argument for the getConnectedPipe function. It is initiated as empty data for the first iteration of the recursion function getConnectedPipe
  const initialPreviousSource = {
    index: 'empty',
    icon: 'empty',
    matrixCoordinates: 'empty'
  };

  //check if there are pipes in the provided matrix
  const pipesInMatrix = compareMapAndMatrixIcons(matrix, mappedPipes);

  //if there are pipes in the matrix 
  if (pipesInMatrix !== 'there are no pipes in the matrix') {

    //declare a variable containing important information regarding the pipe's location and the location of the pipe's openings, this information will enable the app to identify what is connected at the ends of each pipe
    const pipeInfo = getPipeInfo(pipesInMatrix, mappedPipes);
    //run the getConnectedPipe with the pipeInfo
    getConnectedPipe(matrix, pipeInfo, startingSource, initialPreviousSource);

    //if there are no pipes in the matrix
  } else if (pipesInMatrix === 'there are no pipes in the matrix') {
    const pipeInfo = 'there are no pipes in the matrix';
    //run the getConnectedPipe with the pipeInfo argument set to a string with a notice
    getConnectedPipe(matrix, pipeInfo, startingSource, initialPreviousSource);
  }

  if (finalAnswer === 'there is nothing connected to the source') {
    return finalAnswer;
  } else {
    //reorder final answer to alphabetical order
    return finalAnswer.split('').sort().join('');
  }


};

console.log(sinkSystem('./testData/dataABG.txt'));
console.log(sinkSystem('./testData/dataABGPR.txt'));
// console.log(sinkSystem('./testData/dataABZ.txt'));
// console.log(sinkSystem('./testData/dataAC.txt'));
// console.log(sinkSystem('./testData/dataAG.txt'));
// console.log(sinkSystem('./testData/dataAGM.txt'));
// console.log(sinkSystem('./testData/dataB.txt'));
// console.log(sinkSystem('./testData/dataNoSorce.txt'));
// console.log(sinkSystem('./testData/dataNotConnected.txt'));



