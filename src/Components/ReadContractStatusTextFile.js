import contractStatusFile from "../data/contractStatus.txt";

let contractStatus = 'errorReadingFile';
async function readTxtFile() {
    await fetch(contractStatusFile)
        .then(t => t.text()).then(text => {
            contractStatus = text;   
        });  
    const linesArray = contractStatus.split(/\r?\n/);
    contractStatus = linesArray[0];
    return contractStatus;
}  

export const ContractStatusInFile = readTxtFile();