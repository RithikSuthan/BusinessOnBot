# BusinessOnBot
 To create a REST service that can fetch bank details, using the data given in the API’s query parameters.
 
 Case 1

Search API to return possible matches across all columns and all rows, ordered by IFSC code (ascending order) with limit and offset.
Request URL  - /api/search?q=Mumbai&limit=2&offset=1

![image](https://user-images.githubusercontent.com/72434153/221596909-3330786c-a5fb-4d50-832e-ba77baf51bc9.png)

Case 2

Branch API to return possible matches based on the branch name ordered by IFSC code (descending order) with limit and offset
Request URL  - /api/branch?q=LONI&limit=1&offset=1 

![image](https://user-images.githubusercontent.com/72434153/221596524-808a737f-ae30-4f1c-9a78-52734f6d3b17.png)
