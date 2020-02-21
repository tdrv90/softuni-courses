function extractFile(filePath) {
    filePath = filePath.split('\\');

    let lastElement = filePath.pop();

    let fileName = lastElement.substring(0, lastElement.lastIndexOf('.'));
    let extensionName = lastElement.substring(lastElement.lastIndexOf('.') + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extensionName}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');

console.log();

extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');