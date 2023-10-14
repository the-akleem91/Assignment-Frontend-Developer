# Assignment-Frontend-Developer
This is a simple single-page React application that enables users to search for locations, visualize their boundaries on a map, and retrieve population data using the Nominatim API. The application is designed to be responsive and should function properly on all modern web browsers.

# How Application Work
1) __Search for Locations:__On the home page, you'll find an input field where you can enter a location you want to search for. By default, the map marker is set to Boston, MA. Once you've entered the location, click the "Search" button or press Enter to initiate the search.
2) __View Search Results:__ The application will retrieve data from the Nominatim API and display a list of search results, which include location names.
3) __Select Desired search Result:__ By selecting a search result, you can view the location on the map with its visual boundaries displayed on the map. Additionally, you can see information about the location's population and the year in which the population data was recorded.
4) __Share and Copy:__ In the search results, there's a "Share" button. Clicking this "Share" button will copy this link to your clipboard. If a friend shares a link to the application with you, clicking it will bring you to the application with the same search query, results, and the selected result that your friend originally shared.
5) __Recent Searches:__ On the home page, you'll find a section for recent searches. Here, you can view your recent searches. Clicking on one of these recent searches will return you to that search with the exact same results and selected result as in your previous search.


# Application Demo Video Link :
Link : https://drive.google.com/file/d/1waMIiicl1PuUzfP7kLo-Wg-R1TymkuBy/view?usp=sharing

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
