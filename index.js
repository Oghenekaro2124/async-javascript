//Iterating with Async/Await

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
        console.log(value);
    }
}

// Example usage
iterateWithAsyncAwait([1, 2, 3, 4, 5]);


//Awaiting a Call

async function awaitCall() {
    // Simulate fetching data with a delay
    const data = await new Promise(resolve => 
        setTimeout(() => resolve("Fetched data"), 1000)
    );
    console.log(data);
}

// Example usage
awaitCall();


//Handling Errors with Async/Await

async function awaitCall() {
    try {
        const data = await new Promise((resolve, reject) => 
            setTimeout(() => reject("API request failed"), 1000)
        );
        console.log(data);
    } catch (error) {
        console.log("An error occurred while fetching data:", error);
    }
}

// Example usage
awaitCall();
