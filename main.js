/* function Iterating with Async/Await */

async function iterateWithAsyncAwait (data) {
  for (const value of data) {
    await new Promise(resolve => setTimeout(resolve, 1000)) // Wait for 1 second
    console.log(value)
  }
}
iterateWithAsyncAwait([1, 15, 36, 40, 21])

/* Awaiting a Call */

async function fetchDataFromAPI () {
  // Simulate fetching data from an API
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Data from API')
    }, 2000) // Simulating a delay of 2 seconds
  })
}

async function awaitCall () {
  console.log('Fetching data...')
  const data = await fetchDataFromAPI()
  console.log('Data fetched:', data)
}

/* Handling Errors with Async/Awai */

async function awaitCall () {
  try {
    const response = await fetch('https://api.com/data')
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error('An error occurred:', error.message)
  }
}
/*  if the API call fails (e.g., due to a network error or server issue), the catch block will catch the error and log a user-friendly error message instead of crashing the application. */

awaitCall()
