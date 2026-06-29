console.clear();

/*
1. Create the data for a small social media post. Create a constant variable for each data point listed below:
	- a title for the post
	- text content for the post
	- the number of likes the post has received
	- the user who created the post
	- a boolean called `isReported` to indicate whether the post has been reported
*/
const postTitle = "My first trip to Europe";
const postContent = "I saw a lot of things...";
let likeNumber = 89;
const userAuthor = "Felix";
const isReported = true;
// --v-- write your code here --v--
console.log(postTitle, postContent, likeNumber, userAuthor, isReported);
// --^-- write your code here --^--

/*
2. Log all variables to the console. Then increase the number of likes by one and log the updated like count. Modify your code from step 1 if necessary.
*/

// --v-- write your code here --v--

likeNumber = likeNumber + 1;
// --^-- write your code here --^--
console.log(likeNumber);
