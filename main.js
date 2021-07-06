var Name = [];
function submit() {
    var guest_name = document.getElementById("en").value;
    Name.push(guest_name)
    document.getElementById("nd").innerHTML="Name";
    console.log("Name");
    var length = Names.length;
    console.log("length");}

    function Shown() {
        var i = Name.join("<br>")
        console.log("Name");
        document.getElementById("Sh").innerHTML=i.toString();}

        function Sorting() {
            Name.sort();
            var i = Name.join("<br>");
            console.log("Name");
            document.getElementById("sorted").innerHTML=i.toString();}

            function Search() {
                var ank = document.getElementById("searchname").value;
                var gnf = 0;
                var smv;
                for (j=0; j<Name; j++) {
                   if (ank == Name[j])
                   gnf = gnf+1;
                }
            }
            document.getElementById("searchname").innerHTML = "Name found"+gnf+"Time/s"
            console.log("Found Name"+gnf+"Time/s");