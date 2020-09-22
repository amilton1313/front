function addSWF (URL, WIDTH, HEIGHT, TRANSPARENT)
{
document.write (' <object classid="clsid:27CDB6E-AE6D-11cf-96B8-444553540000" ');
document.write (' codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" ');
document.write (' width="'+ WIDTH +'" height="'+ HEIGHT +'">');
document.write (' <param name="movie" value="'+ URL +'" />');
document.write (' <param name="quality" value="high" />');

if ( TRANSPARENT ) {
  document.write (' <param name="Wmode" value="Transparent" />'); 
}

document.write (' <embed src="'+ URL +'" quality="high" ');

if ( TRANSPARENT ) {
document.write (' Wmode = "transparent" ');
}

document.write (' pluginspage="http://www.macromedia.com/go/getflashplayer" ');
document.write (' type="application/x-shockwave-flash" width="'+ WIDTH +'" height="'+ HEIGHT +'"></embed> ');
document.write (' </object>');

}

