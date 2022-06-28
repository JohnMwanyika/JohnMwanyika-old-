var currentTab = 0;
    document.addEventListener("DOMContentLoaded", function(event) {

    showTab(currentTab);

    });

    // function fixSubmit(){
    //     // var submitbn = document.createElement('button');
    //     // submitbn.type ='submit';
    //     // submitbn.innerHTML ='Submit'
    //     // submitbn.className ='btn btn-warning';
    //     // display.appendChild(submitbn);
    //     var chrs = this.
    //     if (condition) {
            
    //     }
    // }

    function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
    } else {
    document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length -1)) {
    // document.getElementById("nextBtn").innerHTML = '<i class="fa fa-angle-double-right"></i>';
    // document.getElementById("nextBtn").type ='submit';
    document.getElementById("nextBtn").style.display = "none";
    } else {
    document.getElementById("nextBtn").innerHTML = '<i class="fa fa-angle-double-right"></i>';
    }
    fixStepIndicator(n)
    }

    function nextPrev(n) {
        nextBtn.style.display ="inline";
        var x = document.getElementsByClassName("tab");
        if (n == 1 && !validateForm()) return false;
        x[currentTab].style.display = "none";
        currentTab = currentTab + n;
        if (currentTab >= x.length) {
            document.getElementById("text-message").style.display = "block";
            document.getElementById("nextprevious").style.display = "none";
            document.getElementById("all-steps").style.display = "none";
            document.getElementById("register").style.display = "none";
        }

    showTab(currentTab);
    }

    function validateForm() {
        var x, y, i,z,s, valid = true;
        x = document.getElementsByClassName("tab");
        y = x[currentTab].getElementsByTagName("input");
        z = x[currentTab].getElementsByTagName("textarea");
        s = x[currentTab].getElementsByTagName("select");

        for (i = 0; i < y.length; i++) {
            if (y[i].value == "" && y[i].placeholder != "optional" ) {
                y[i].className += " invalid";
                valid = false;
            }
        }

        for (i = 0; i < z.length; i++) {
            if (z[i].value == "") {
                z[i].className += " invalid";
                valid = false;
            }
        }

        for (i = 0; i < s.length; i++) {
            if (s[i].value == "") {
                s[i].className += " invalid";
                valid = false;
            }
        }

        if (valid) {
            document.getElementsByClassName("step")[currentTab].className += " finish";
        }

        return valid;
    }

    function fixStepIndicator(n) {
        var i, x = document.getElementsByClassName("step");
        for (i = 0; i < x.length; i++) {
            x[i].className = x[i].className.replace(" active", "");
        }
        x[n].className += " active";
    }
    

    var report = document.getElementById("report");
    var showmore = document.getElementById("showmore");
    var display = document.getElementById("display");
    
    function showmoreTab(){
        var nextBtn = document.getElementById('nextBtn');
        nextBtn.style.display ="none";
        showmore.style.display="block";

    }
               
    report.addEventListener('change', function() {
        // alert('You selected: ', this.value);
        var val = report.value;
        display.innerHTML = "";
    
        if (val == 'Complaint') {
            var lbl2 = document.createElement('h6');
            lbl2.innerHTML = "complaining about";
            var complaint_type = document.createElement('select');
            display.appendChild(lbl2);
            display.appendChild(complaint_type); 
            var complaints = ['','Billing','Staff','Water','Sewerage'];
            for (var index = 0; index < complaints.length; index++) {
                var el = complaints[index];
            var complaint_option = document.createElement('option');
                complaint_option.innerHTML= el;
                complaint_option.value= el;
                // complaint_type.onchange ='this.fixSubmit()';
                complaint_type.appendChild(complaint_option);
            }
            showmoreTab();
            // showmore.style.display="block"
        // var lbl = document.createElement('h6');
        // var txtbox = document.createElement('textarea');
        // txtbox.name = report.value;
        // txtbox.onclick = "this.className = ''";
        // // txtbox.value = 'Explain your answer';
        // lbl.innerHTML = 'Tell us more about the '+ val;
        // display.appendChild(lbl);
        // display.appendChild(txtbox);

        // fixSubmit();


        
        //else if choice is Qeury
        }else if(val == 'Query'){
            var lbl2 = document.createElement('h6');
            lbl2.innerHTML = "Asking about";
            var complaint_type = document.createElement('select');
            // complaint_type.setAttribute(placeholder) = 'Please Specify (Tafadhali Thibitisha)';
            display.appendChild(lbl2);
            display.appendChild(complaint_type); 
            var complaints = ['','New water connection','New sewer connection','Water bowser','Exhauster services','Bill balance'];
            for (var index = 0; index < complaints.length; index++) {
                var el = complaints[index];
            var complaint_option = document.createElement('option');
                complaint_option.innerHTML= el;
                complaint_option.value= el;
                complaint_type.appendChild(complaint_option);
            }
            
            showmoreTab();
        // var lbl = document.createElement('h6');
        // var txtbox = document.createElement('textarea')
        // txtbox.name = report.value;
        // txtbox.onclick = "this.className = ''";
        // // txtbox.value = 'Explain your answer';
        // lbl.innerHTML = 'Tell us more about the '+ val;
        // display.appendChild(lbl);
        // display.appendChild(txtbox);
    
        }else if(val !=='Complaint'){
            // var lbl = document.createElement('h6');
            // var txtbox = document.createElement('textarea')
            // txtbox.name = report.value;
            // txtbox.onclick = "this.className = ''";
            // // txtbox.value = 'Explain your answer';
            // lbl.innerHTML = 'Tell us more about the '+ val;
            // display.appendChild(lbl);
            // display.appendChild(txtbox);
            showmoreTab();
        }
        });