// Helper function to calculate average of an array
function calculateAverage(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
}

// Question 1: Coding Assessment
function codingScoreCheck(marks, cutoff) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const avg = calculateAverage(marks);
      if (avg >= cutoff) {
        resolve(avg);
      } else {
        reject("Sorry, you have not cleared the Coding Assessment.");
      }
    }, 2000);
  });
}

// Question 2: Technical Interview
function technicalInterviewCheck(marks, cutoff) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const avg = calculateAverage(marks);
      if (avg >= cutoff) {
        resolve(avg);
      } else {
        reject("Sorry, you have not cleared the Technical Interview.");
      }
    }, 2000);
  });
}

// Question 3: Final Selection Review
function finalSelectionCheck(codingAverage, technicalAverage, cutoff) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const finalAvg = (codingAverage + technicalAverage) / 2;
      if (finalAvg >= cutoff) {
        resolve(finalAvg);
      } else {
        reject("Sorry, you have not cleared the final selection cutoff.");
      }
    }, 2000);
  });
}

// --- Execution using .then() and .catch() ---

// Sample Marks and Cutoffs
const codingMarks = [80, 85, 90];
const codingCutoff = 70;

const technicalMarks = [75, 80, 85];
const technicalCutoff = 70;

const finalCutoff = 75;

// Chaining the evaluation stages
codingScoreCheck(codingMarks, codingCutoff)
  .then((codingAvg) => {
    console.log(`Coding Assessment Cleared! Average Score: ${codingAvg}`);
    return technicalInterviewCheck(technicalMarks, technicalCutoff)
      .then((techAvg) => {
        return { codingAvg, techAvg };
      });
  })
  .then(({ codingAvg, techAvg }) => {
    console.log(`Technical Interview Cleared! Average Score: ${techAvg}`);
    return finalSelectionCheck(codingAvg, techAvg, finalCutoff);
  })
  .then((finalAvg) => {
    console.log(`Congratulations! You passed Final Selection with a total average of: ${finalAvg}`);
  })
  .catch((error) => {
    console.log(error);
  });