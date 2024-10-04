// Fungsi untuk menghasilkan 100 nilai acak antara 1 sampai 50
function generateRandomArray(size, minValue, maxValue) {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
    }
    return array;
}

// Fungsi untuk memecah array menjadi dua array (genap dan ganjil) berdasarkan index
function splitArrayByIndex(arr) {
    const evenArray = [];
    const oddArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            evenArray.push(arr[i]);
        } else {
            oddArray.push(arr[i]);
        }
    }
    return { evenArray, oddArray };
}

// Fungsi untuk mendapatkan nilai min dari array
function getMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Fungsi untuk mendapatkan nilai max dari array
function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Fungsi untuk menghitung total dari array
function getTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// Fungsi untuk menghitung rata-rata dari array
function getAverage(arr) {
    return getTotal(arr) / arr.length;
}

// Fungsi untuk membandingkan dua array
function compareArrays(arrEven, arrOdd) {
    const evenMin = getMin(arrEven);
    const oddMin = getMin(arrOdd);
    const evenMax = getMax(arrEven);
    const oddMax = getMax(arrOdd);
    const evenTotal = getTotal(arrEven);
    const oddTotal = getTotal(arrOdd);
    const evenAvg = getAverage(arrEven);
    const oddAvg = getAverage(arrOdd);

    console.log(`Array genap (${arrEven.length} elemen): ${arrEven}`);
    console.log(`Array ganjil (${arrOdd.length} elemen): ${arrOdd}`);

    console.log("\nPerbandingan Nilai:");
    console.log(`- Min lebih besar: ${evenMin > oddMin ? 'Array Genap' : 'Array Ganjil'}`);
    console.log(`- Max lebih besar: ${evenMax > oddMax ? 'Array Genap' : 'Array Ganjil'}`);
    console.log(`- Total lebih besar: ${evenTotal > oddTotal ? 'Array Genap' : 'Array Ganjil'}`);
    console.log(`- Rata-rata lebih besar: ${evenAvg > oddAvg ? 'Array Genap' : 'Array Ganjil'}`);
}

// Main program
const randomArray = generateRandomArray(100, 1, 50);  // Buat array acak 100 elemen
const { evenArray, oddArray } = splitArrayByIndex(randomArray);  // Pecah menjadi array genap dan ganjil

// Tampilkan hasil
console.log("Array dengan jumlah index 100:");
console.log(randomArray);

console.log(`\nMin, Max, Total, dan Rata-rata untuk Array Genap:`);
console.log(`- Min: ${getMin(evenArray)}`);
console.log(`- Max: ${getMax(evenArray)}`);
console.log(`- Total: ${getTotal(evenArray)}`);
console.log(`- Rata-rata: ${getAverage(evenArray)}`);

console.log(`\nMin, Max, Total, dan Rata-rata untuk Array Ganjil:`);
console.log(`- Min: ${getMin(oddArray)}`);
console.log(`- Max: ${getMax(oddArray)}`);
console.log(`- Total: ${getTotal(oddArray)}`);
console.log(`- Rata-rata: ${getAverage(oddArray)}`);

// Bandingkan array genap dan ganjil
compareArrays(evenArray, oddArray);
