var Name = [];
function submit() {
    var guest_name = document.getElementById("en").value;
    Name.push(guest_name)
    document.getElementById("nd").innerHTML=Name;
    console.log(Name);
    var length = Name.length;
    console.log("length");
document.getElementById("en").value=" ";
}

    function Shown() {
        var i = Name.join("<br>")
        console.log("Name");
        document.getElementById("Sh").innerHTML=i.toString();}

        function Sorting() {
            Name.sort();
            var i = Name.join("<br>");
            console.log(Name);
            document.getElementById("sorted").innerHTML=i.toString();}

            function Search() {
                var Sv = document.getElementById("Sn").value;
                var found = 0;
                var smv;
                for (smv=0; smv<Name.length; smv++) {
                   if(Sv==Name[smv]) {
                   found = found+1;
                }
            }
            document.getElementById("searchname").innerHTML = "Name found " + found + "Time/s";
            console.log("Found Name "+found+" Time/s");

        }