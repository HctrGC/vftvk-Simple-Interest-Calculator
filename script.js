function compute() {
    const principal = document.getElementById("principal").value;
    if (principal > 0) {
        const rate = document.getElementById("rate").value;
        const years = document.getElementById("years").value;
        let interest = principal * years * rate / 100;
        let year = new Date().getFullYear()+parseInt(years);
        const result = document.getElementById("result");
        result.innerHTML = `If you deposit \<b>${principal}\</b>, \<br>
            at an interest rate of \<b>${rate}\</b>%. \<br>
            You will receive \<b>${interest}\</b> \<br>
            in the year \<b>${year}\</b>`;
    } else {
      alert("Enter a positive number");
    }
}
        
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = `${rateval}%`;
}