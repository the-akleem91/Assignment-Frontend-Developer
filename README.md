# Assignment-Frontend-Developer
This is a simple sinle page React application that allows users to search for locations and visulize their boundary on map and get population data using the Nominatim API. The application is responsive and should work on all modern browsers.

# How Application Work
1) __Search for Locations:__ On the home page, you'll find a search bar and a map marker at Boston, MA default. Enter the location you want to search for and click the "Search" button or press Enter.
2) __View Search Results:__ The application will fetch data from the Nominatim API and display a list of search results, including location names.
3) __Select Desired search Result:__ On selecting a search result we can view the location on the map with the visuale boundaries of the polygon visible & iew the location’s population and the year the population data.
4) __Share and Copy:__ In search result their is copy button on clicking this "Share" button will copy the current search as a shareable link to your clipboard , If a friend shares a link to the application with you then on clicking it will display the same search query, results, and the selected result as originally shared by your friend.
5) __Recent Searches:__ On home page you will find a recent saerch section where you can view your recent searches and clicking on one should return you to that search with exact same result as previous.


# Setup Instructions
To set up the project locally, please follow the steps below:

# Prerequisites
Make sure you have the following software installed on your system:
```bash
Node.js
npm
```

# Clone the Repository
1. Open your terminal or command prompt.
2. Change the current working directory to the location where you want to clone the repository.
3. Run the following command to clone the repository:
```bash  
git clone https://github.com/the-akleem91/Assignment-Frontend-Developer.git
```

# Frontend Setup
1. Change the current working directory to the cloned repository:
```bash 
cd Assignment-Frontend-Developer
```

2. Install the required dependencies by running the following command:  
```bash
npm install
```
3. Start the frontend development server by running this command in the client directory:  
```bash
npm run dev
```
   This command will start the frontend application and open it in your default browser.
Congratulations! You have successfully set up repo locally. You can now access the application by opening your browser and navigating to the URL http://localhost:5173/
