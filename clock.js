function showtime(){	
	const d = new Date();
	let h=d.getHours();
	let m=d.getMinutes();
	let s=d.getSeconds();
	let session="AM"

	if(h>=12){
		session="pm";
		if(h>12){
			h=h-12;
		}
	}
	if(h==0){
		h=12;
	}
	if(h<10){
		h="0"+h;
	}
	if(m<10){
		m="0"+m;
	}
	if(s<10){
		s="0"+s;
	}

	var time=h+":"+m+":"+s+" "+session;	
	document.getElementById("timeclock").innerHTML="<center><h1 style='color:blue;font-size:55'>"+time+"</center></h1>";
	setInterval(showtime,1000);
}


showtime();