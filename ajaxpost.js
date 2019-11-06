//Sample code only not part of the project

function ajax_post(){
            var url = "ajaxpost.php";
            var hr = new XMLHttpRequest();
            var ET = document.getElementById('EventTitle').value;
            var encodedVars = "Event=" + ET;
            hr.open('POST', url, true);
            
           hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            hr.onreadystatechange = function(){
                if (hr.readyState ==4 && hr.status==200){
                    var return_data = hr.responseText;
                    document.getElementById("Status").innerHTML = return_data;
                }
            }
            hr.send(encodedVars);
            //console.log();
            document.getElementById("Status").innerHTML = "processing ....";
        }
        
