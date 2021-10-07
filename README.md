JS application for ordering movie tickets
=======

- This application is course assignment for [DATA1700 - Web Programming](https://student.oslomet.no/en/studier/-/studieinfo/emne/DATA1700/2021/H%C3%98ST) 
at OsloMet, spring 2021. 


- URL to Heroku app: https://oblig-3-fuka100.herokuapp.com/


- Description of this application: <br>
This application is for ordering movie tickets.
The input data is stored in tabular format in a relational database using Spring Boot and Java.
The client side is styled with Bootstrap.
You can select a film title from the drop-down list and enter the required information in the blank fields.
When the "Kjøp billett (Buy ticket)" button is pressed, all the information about the tickets 
you have ordered will be displayed under "Alle billetter (All tickets)".
At this time, the ticket information is sorted alphabetically by last name.
If the "Kjøp billett (Buy ticket)" button is pressed without a film selected or with invalid input, 
you will not be able to buy tickets, and you will receive one or more error messages.
However, validly provided information will remain.
If you want to cancel the order, press the "Slett alle billettene (Delete all tickets)" button, and all information will be deleted.
