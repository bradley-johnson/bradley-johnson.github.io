var webmaps =
  [
    ["Radio Garden",
    "https://radio.garden/",
    "The primary purpose of Radio Garden is to allow users to scroll around the globe to find radio stations that have been submitted online and listen to them. In doing so individuals are connected across the world and foreign cultures are brought close. The primary GIS function Radio Garden utilizes is geocoding the coordinates of radio stations and displaying them along with aerial imagery of the world."
    ],
    ["Airbnb",
    "https://www.airbnb.com/map",
    "The primary purpose of this Airbnb application is to show the current activity of Airbnb customers around the globe. The primary GIS function used by this application is geocoding the locations of guests, check-ins, and posts related to Airbnb. This application was designed for general use, specifically for potential Airbnb customers."
    ]
  ];

function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";

  // A prompt box is used to prompt users to input a value before entering a page.
  user_name = window.prompt(a, b);

  message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"

  return message;
}

function webmap_table()
{
  document.write("<table width = 100%>");
  for (var row = 0; row < webmaps.length; row++)
  {
    document.write("<tr>");
    for (var column = 0; column < webmaps[0].length; column++)
    {
      document.write("<td>" + webmaps[row][column] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table");
}
