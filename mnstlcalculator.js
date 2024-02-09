function createCalculatorHTML() {
    return `
    <div class="mns-tlp-calculator-outer">
    <div class="mns-tlp-calculator">
        <div class="mns-tlp-calculator-inputs">
            <div class="mns-tlp-calculator-inputa">
                <label for="mtcSelector">Calculation Type</label>
                <div class="mns-tlp-calculate">
                    <select id="mtcSelector" onchange="calType()">
                        <option value="0">Time-lapse Duration</option>
                        <option value="1">Event Duration</option>
                        <option value="2">Shooting Interval</option>
                    </select>
                </div>
            </div>
            <div class="mns-tlp-calculator-inputb">
                <label for="tlDuration">Time-lapse Duration</label>
                <input type="number" id="tlDuration" value="40">
                <span class="mns-tlp-calculator-inputb-unit">in Seconds</span>
            </div>
            <div class="mns-tlp-calculator-inputc">
                <label for="evDuration">Event Duration</label>
                <input type="number" id="evDuration" value="40">
                <span class="mns-tlp-calculator-inputc-unit">in Days</span>
            </div>
            <div class="mns-tlp-calculator-inputd">
                <label for="shInterval">Shooting Interval</label>
                <input type="number" id="shInterval" value="10">
                <span class="mns-tlp-calculator-inputd-unit">in Minutes</span>
            </div>
            <div class="mns-tlp-calculator-inpute">
                <label for="shHours">Shooting Hours</label>
                <input type="number" id="shHours" value="4">
                <span class="mns-tlp-calculator-inpute-unit">per Day</span>
            </div>
            <div class="mns-tlp-calculator-inputf">
                <label for="frRate">Frame Rate</label>
                <input type="number" id="frRate" value="24">
                <span class="mns-tlp-calculator-inputf-unit">Frames Per Second</span>
            </div>
            <div class="mns-tlp-calculator-inputg">
                <label for="imSize">Image Size</label>
                <input type="number" id="imSize" value="6">
                <span class="mns-tlp-calculator-inputg-unit">in MB</span>
            </div>
        </div>
        <div class="mns-tlp-calculator-outputs">
            <div class="mns-tlp-calculator-outputa">
                <span class="mns-tlp-calculator-outputa-type">Time-lapse Duration</span>
                <span class="mns-tlp-calculator-outputa-value"></span>
                <span class="mns-tlp-calculator-outputa-unit">Sec</span>
            </div>
            <div class="mns-tlp-calculator-outputb">
                <span class="mns-tlp-calculator-outputb-type">Event Duration</span>
                <span class="mns-tlp-calculator-outputb-value"></span>
                <span class="mns-tlp-calculator-outputb-unit">Days</span>
            </div>
            <div class="mns-tlp-calculator-outputc">
                <span class="mns-tlp-calculator-outputc-type">Shooting Interval</span>
                <span class="mns-tlp-calculator-outputc-value"></span>
                <span class="mns-tlp-calculator-outputc-unit">Minutes</span>
            </div>
            <div class="mns-tlp-calculator-outputd">
                <span class="mns-tlp-calculator-outputd-type">Number of Images</span>
                <span class="mns-tlp-calculator-outputd-value"></span>
                <span class="mns-tlp-calculator-outputd-unit"></span>
            </div>
            <div class="mns-tlp-calculator-outpute">
                <span class="mns-tlp-calculator-outpute-type">Total Memory Usage</span>
                <span class="mns-tlp-calculator-outpute-value"></span>
                <span class="mns-tlp-calculator-outpute-unit">GB</span>
            </div>
        </div>
    </div>
</div>
    `;
}


function calType() {
    var selectValue = document.getElementById("mtcSelector").value;

    var tlDuration = document.getElementsByClassName("mns-tlp-calculator-inputb")[0];
    var evDuration = document.getElementsByClassName("mns-tlp-calculator-inputc")[0];
    var shInterval = document.getElementsByClassName("mns-tlp-calculator-inputd")[0];

    var tlDurationIn = document.getElementById("tlDuration");
    var shIntervalIn = document.getElementById("shInterval");
    var evDurationIn = document.getElementById("evDuration");
    var shHoursIn = document.getElementById("shHours");
    var frRateIn = document.getElementById("frRate");
    var imSizeIn = document.getElementById("imSize");

    var tlDurationOp = document.getElementsByClassName("mns-tlp-calculator-outputa")[0];
    var evDurationOp = document.getElementsByClassName("mns-tlp-calculator-outputb")[0];
    var shIntervalOp = document.getElementsByClassName("mns-tlp-calculator-outputc")[0];

    if (selectValue === "0") {
        tlDuration.classList.add("mns-tlp-d-none");
        shInterval.classList.remove("mns-tlp-d-none");
        evDuration.classList.remove("mns-tlp-d-none");
        tlDurationOp.classList.remove("mns-tlp-d-none");
        shIntervalOp.classList.add("mns-tlp-d-none");
        evDurationOp.classList.add("mns-tlp-d-none");

        // Add event listeners to the input fields
        shIntervalIn.addEventListener("input", updateOutputs);
        evDurationIn.addEventListener("input", updateOutputs);
        shHoursIn.addEventListener("input", updateOutputs);
        frRateIn.addEventListener("input", updateOutputs);
        imSizeIn.addEventListener("input", updateOutputs);

    } else if (selectValue === "1") {
        tlDuration.classList.remove("mns-tlp-d-none");
        evDuration.classList.add("mns-tlp-d-none");
        shInterval.classList.remove("mns-tlp-d-none");
        tlDurationOp.classList.add("mns-tlp-d-none");
        shIntervalOp.classList.add("mns-tlp-d-none");
        evDurationOp.classList.remove("mns-tlp-d-none");

        // Add event listeners to the input fields
        tlDurationIn.addEventListener("input", updateOutputs);
        shIntervalIn.addEventListener("input", updateOutputs);
        shHoursIn.addEventListener("input", updateOutputs);
        frRateIn.addEventListener("input", updateOutputs);
        imSizeIn.addEventListener("input", updateOutputs);

    } else {
        tlDuration.classList.remove("mns-tlp-d-none");
        evDuration.classList.remove("mns-tlp-d-none");
        shInterval.classList.add("mns-tlp-d-none");
        tlDurationOp.classList.add("mns-tlp-d-none");
        shIntervalOp.classList.remove("mns-tlp-d-none");
        evDurationOp.classList.add("mns-tlp-d-none");

        // Add event listeners to the input fields
        tlDurationIn.addEventListener("input", updateOutputs);
        evDurationIn.addEventListener("input", updateOutputs);
        shHoursIn.addEventListener("input", updateOutputs);
        frRateIn.addEventListener("input", updateOutputs);
        imSizeIn.addEventListener("input", updateOutputs);
    }

    updateOutputs();
}

function updateOutputs() {
    var selectValue = document.getElementById("mtcSelector").value;

    var tlDurationInput = parseFloat(document.getElementById("tlDuration").value) || 0;
    var evDurationInput = parseFloat(document.getElementById("evDuration").value) || 0;
    var shIntervalInput = parseFloat(document.getElementById("shInterval").value) || 0;
    var shHoursInput = parseFloat(document.getElementById("shHours").value) || 0;
    var frRateInput = parseFloat(document.getElementById("frRate").value) || 0;
    var imSizeInput = parseFloat(document.getElementById("imSize").value) || 0;

    var tlDurationCal, shIntervalCal, evDurationCal, noImagesCal, tmSizeCal;

    if (selectValue === "0") {
        // Calculation logic for Time-lapse Duration
        shIntervalCal = shIntervalInput;
        evDurationCal = evDurationInput;
        tlDurationCal = (((evDurationInput * shHoursInput) * 60) / shIntervalInput) / frRateInput;
        noImagesCal = tlDurationCal * frRateInput;
        tmSizeCal = (noImagesCal * imSizeInput) * (0.0009765625);
    } else if (selectValue === "1") {
        // Calculation logic for Event Duration
        tlDurationCal = tlDurationInput;
        shIntervalCal = shIntervalInput;
        evDurationCal = (tlDurationInput * frRateInput * shIntervalInput) / (60 * shHoursInput);
        noImagesCal = tlDurationInput * frRateInput;
        tmSizeCal = (noImagesCal * imSizeInput) * (0.0009765625);
    } else {
        // Calculation logic for Shooting Interval
        tlDurationCal = tlDurationInput;
        evDurationCal = evDurationInput;
        shIntervalCal = ((evDurationInput * shHoursInput * 60) / tlDurationInput) / frRateInput;
        noImagesCal = tlDurationInput * frRateInput;
        tmSizeCal = (noImagesCal * imSizeInput) * (0.0009765625);
    }

    // Update the output elements
    document.getElementsByClassName("mns-tlp-calculator-outputa-value")[0].innerText = tlDurationCal;
    document.getElementsByClassName("mns-tlp-calculator-outputc-value")[0].innerText = shIntervalCal;
    document.getElementsByClassName("mns-tlp-calculator-outputb-value")[0].innerText = evDurationCal;
    document.getElementsByClassName("mns-tlp-calculator-outputd-value")[0].innerText = noImagesCal;
    document.getElementsByClassName("mns-tlp-calculator-outpute-value")[0].innerText = tmSizeCal;
}

function initializeCalculator() {
    document.getElementById("mnstlpCalculator").innerHTML = createCalculatorHTML();

    document.getElementById("mtcSelector").value = "0";
    calType();
}


initializeCalculator();
