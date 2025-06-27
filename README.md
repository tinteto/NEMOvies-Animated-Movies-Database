# NEMOvies_Animated-Movies-Database

React Project, part of the SoftUni React Course Project Defence

# NEMOvies_Animated-Movies-Database
 - SoftUni Project Defence

NEMOvies_Animated-Movies-Database
Softuni Exam, React project, April 2025
1.	Application Name: NEMOvies – Children’s Animated Movies Database
2.	Frameworks, Libraries and Technologies Used: React, SoftUni Practice Server.
3.	How to use the SofUni Practice Server: https://github.com/softuni-practice-server/softuni-practice-server. To run the server: In the terminal navigate to the server directory and run ‘node server.js’ command.
4.	How to run the application: 
In the terminal navigate to the project directory: cd client, run ‘npm install’ to install dependencies. Start the React server using ‘npm run dev’ command.
On http://localhost:3003/ access the application.

5.	Architecture and Functionality:

a. Homepage: 
Navigation Bar: 
Contains links to Home, Movie Catalog, Add Movie, About and Search pages. 
Login and Register visible for guest users. 
Add Movie, User's profile and Logout visible for registered users. 
Welcome page: 
Contains welcome message and movies sorted by date (most recently added first).

b. Create Movie Page: 
Only registered users can create movies.

c. Movie Catalog: 
Contains a collection of all movies. Each movie card contains movie name and release date, image, and a link to its detailed page. 
Pagination implemented.

d. Detailed Movie Page: 
Each movie page contains name, release date, movie creators and actors, detailed description and image.
Edit and Delete buttons are visible only to the movie page creator. Each movie can be edited and deleted only by its creator.
All users can see the reviews section. Only registered users can review movies. 


e. User Profile Page: 
Contains information about the user: name and email, as well as a collection of all movies the user has uploaded.

f. About Page: 
Contains information about the creators of NEMOvies application.

g. Footer: 
Contains links to Movie Catalog and About page.

h. Page Not Found

i. Guards: 
Logged-in users cannot access Login and Register page.
Only registered users can access Create Movie page. Non-users are redirected to Login page.
Only registered users can access Edit Movie page. Non-users are redirected to Login page.
Only registered users can access User’s Profile page. Non-users are redirected to 404 page.
Not logged-in users cannot access logout, they are redirected to Login page.


Regards, Radostina Georgieva

Disclaimer:
All trademarks, logos, and content are the property of their respective owners. 
We do not claim ownership of any copyrighted content featured in this app. 
This app is intended for non-commercial use only. All movie data is provided for educational or informational purposes.

