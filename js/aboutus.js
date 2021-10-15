if (screen.width>430){
   
   document.getElementById("bt1").addEventListener("click", function1=()=>{
      document.querySelector("#pop").innerHTML="<p>IEEE IAS VIT joins the league of other prominent professional student chapters functioning at the university in the academic year 2015-16. Our chapter focuses specifically on the unique needs of industry and commerce. Through a network of events, national and international conferences, the society keeps members abreast of current developments in the area of technology in electricity and electronics.  IAS  enriches both its members and the industry as a whole through the sharing of specific industry-related solutions. The purposes of the chapter are industrial, technical and academic. IAS’s commitment to excellence and long-run learning is the propulsion behind all its initiatives. We, the student chapter of VIT, has conducted several events for the field students which can facilitate them to succeed in their life. To convert this progress into a prosperous/victorious volume, the suggestions, feedback & valuable specifications are adopted from esteemed identities whose concepts converge on a realistic note.</p>";
   });

   document.getElementById("bt2").addEventListener("click", function2=()=>{
      document.querySelector("#pop").innerHTML="<p>Our chapter’s mission is to be the leading supplier of technological and industrial information to scholars whose skills and capabilities are wanted by larger industries and organizations. We will show you the path to achieve your dreams.  We tend to gift the various events, workshops, and webinars that we’ve organised to accomplish this with pride.</p>";
   });

   document.getElementById("bt3").addEventListener("click", function3=()=>{
      document.querySelector("#pop").innerHTML="<p>IEEE IAS vision lies in the advancement of technology linking theory and practice in the application of electrical and electronic systems for the benefit of humanity. We value the sharing of knowledge in our domains and the professional development of our membership.</p>";
   });
}
else{
   
   document.getElementById("pop").remove();
   document.getElementById("bt1").addEventListener("click", function1=()=>{
      document.querySelector("#bx1").innerHTML="<p>IEEE IAS VIT joins the league of other prominent professional student chapters functioning at the university in the academic year 2015-16. Our chapter focuses specifically on the unique needs of industry and commerce. Through a network of events, national and international conferences, the society keeps members abreast of current developments in the area of technology in electricity and electronics.  IAS  enriches both its members and the industry as a whole through the sharing of specific industry-related solutions. The purposes of the chapter are industrial, technical and academic. IAS’s commitment to excellence and long-run learning is the propulsion behind all its initiatives. We, the student chapter of VIT, has conducted several events for the field students which can facilitate them to succeed in their life. To convert this progress into a prosperous/victorious volume, the suggestions, feedback & valuable specifications are adopted from esteemed identities whose concepts converge on a realistic note.</p>";
      var x1=document.getElementById("bx1");
      x1.classList.add('main4');
      if(x1.style.display === "none"){
         x1.style.display="block";
      }
      else{
         x1.style.display="none";
      }
   });

   document.getElementById("bt2").addEventListener("click", function2=()=>{
      document.querySelector("#bx2").innerHTML="Our chapter’s mission is to be the leading supplier of technological and industrial information to scholars whose skills and capabilities are wanted by larger industries and organizations. We will show you the path to achieve your dreams.  We tend to gift the various events, workshops, and webinars that we’ve organised to accomplish this with pride.";
      
      var x2=document.getElementById("bx2");
      x2.classList.add('main4');
      if(x2.style.display === "none"){
         x2.style.display="block";
      }
      else{
         x2.style.display="none";
      }
   
   });

   document.getElementById("bt3").addEventListener("click", function3=()=>{
      document.querySelector("#bx3").innerHTML="IEEE IAS vision lies in the advancement of technology linking theory and practice in the application of electrical and electronic systems for the benefit of humanity. We value the sharing of knowledge in our domains and the professional development of our membership.";
      var x3=document.getElementById("bx3");
      x3.classList.add('main4');
      if(x3.style.display === "none"){
         x3.style.display="block";
      }
      else{
         x3.style.display="none";
      }
   });

}
console.log(screen.width);
