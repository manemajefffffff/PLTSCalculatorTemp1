let wattVar, wattUnit, wattInput;
var aTemp = [], bTemp = [], cTemp = [], dTemp = [], eTemp = [], fTemp = [], gTemp = [];
var aMats = [], bMats = [], cMats = [], dMats = [], eMats = [], fMats = [], gMats = [];
var a = [], b = [], c = [], d = [], e = [], f = [], g = [];
var wattDivisor;
// a13 b8 c6 d7 e5 f7 g3

document.getElementById("buttonSubmit").onclick = function () {
    //Reset Arrays
    aTemp = [], bTemp = [], cTemp = [], dTemp = [], eTemp = [], fTemp = [], gTemp = [];
    aMats = [], bMats = [], cMats = [], dMats = [], eMats = [], fMats = [], gMats = [];
    a = [], b = [], c = [], d = [], e = [], f = [], g = [];

    wattVar = document.getElementById("wattVar").value;
    wattUnit = document.getElementById("wattUnit").value;
    /* console.log(wattVar, wattUnit); //display on F12 console */

    if(wattUnit == "kW"){
        wattInput = wattVar;
    }
    else{
        wattInput = wattVar * 1000;
    }
    document.getElementById("wattInputText").innerHTML = "Watt Input: " + wattVar + " " + wattUnit; //change object in html file



    //Calculations according to presets
    if(wattInput < 50){ //using 10kWp values ;maybe change to more accurate value later depending on mats; e.g. 0-99kW can use cable in 10kW preset, but 100kW cannot.
        wattDivisor = wattInput / 10; //wattDivisor = value to multiply base preset with
        aTemp = [19, 40, 6, 10, 2, 10, 36, 100, 50, 3, 5, 2, 1];//13
        bTemp = [1, 1, 50, 50, 5, 1, 4, 4];//8
        cTemp = [1, 1, 1, 1, 20, 1];//6
        dTemp = [1, 1, 1, 1, 1, 2, 1];//7
        eTemp = [4, 2, 40, 2, 2];//5
        fTemp = [1, 1, 1, 50, 1, 3, 6];//7
        gTemp = [1, 1, 1];//3
        
        aMats = ["Solar Panel 550 Wp Monocrystalline", "Mid clamp", "End Clamp", "Alumunium rail @4 meter", "Alumunium rail @2,6 meter", "Jointing Alumunium Rail", "Tile Hook Rooftop", "Kabel PV XLPO 1x6 sqmm ", "Kabel Y/G 1x6 sqmm", "Schoen untuk kabel 6 sqmm (6 - M8)", "Cable tray Type U 100x50 @panjang = 3 meter", "Connector MC4", "DC Combiner 1 in 1 out with SPD"];//13
        bMats = ["Grid Tie Inverter Growatt 9 kW 3 phase", "Zero Export", "Kabel NYY 4x2,5 sqmm", "Kabel Y/G 1x2,5 sqmm", "Cable tray Type U 100x50 @panjang = 3 meter", "Cable Ties", "Schoen untuk kabel 2,5 sqmm", "Vinyl R-S-T-N-PE untuk kabel 2,5 sqmm"];//8
        cMats = ["Android TV 32 Inch", "Modem GSM Orbit", "Wifi Router", "Terminal Stop Kontak Lubang 6", "Kabel NYY 3x1,5 sqmm", "Steker Listrik 2 pole Plug with Earth"];//6
        dMats = ["Panel Ukuran 40x60 cm", "MCB AC 32A 3 phasa", "SPD AC 4P, 40 kA", "Digital Meter 3 phase Selec 383", "Busbar 100 A Ukuran 3x25 mm", "Isolator Busbar 100 A - SM 35", "CT 40/5A"];//7
        eMats = ["Ground Rod 5/8", "Clamp Ground Rod 5/8", "Kabel Y/G 1x35 sqmm", "Shock Rod 5/8", "Grounding Pit Ukuran 29x29x21"];//5
        fMats = ["Splitzen", "Ground Rod 5/8 panjang 2,5 meter", "Tiang pipa panjang 6 meter", "Cable Y/G NYAF 35 sqmm", "Clamp Ground rod 5/8", "Schoen Cable 35 mm - M8", "Clamp cable 35 mm"];//7
        gMats = ["Transportasi Pengiriman", "SLO & Perijinan PLN", "Instalasi, Testing & Commissioning"];//3
    }
    else if(50 <= wattInput < 500){//using 100kWp values ;maybe change to more accurate value later
        wattDivisor = wattInput / 100; //wattDivisor = value to multiply base preset with
        aTemp = [182, 355, 30, 105, 100, 300, 750, 300, 7, 15, 22, 1, 1];//13
        bTemp = [1, 1, 75, 50, 10, 2, 4, 4];//8
        cTemp = [1, 1, 1, 1, 1, 20, 1];//7
        dTemp = [1, 1, 1, 1, 4, 8, 3];//7
        eTemp = [6, 3, 60, 3, 3];//5
        fTemp = [1, 1, 1, 50, 1, 3, 6];//7
        gTemp = [1, 1, 1];//3
        
        aMats = ["Solar Panel 550 Wp Monocrystalline", "Mid clamp", "End Clamp", "Alumunium rail @4 meter", "Alumunium rail @2,6 meter", "Jointing Alumunium Rail", "Tile Hook Rooftop", "Kabel PV XLPO 1x6 sqmm ", "Kabel Y/G 1x6 sqmm", "Schoen untuk kabel 6 sqmm (6 - M8)", "Cable tray Type U 100x50 @panjang = 3 meter", "Connector MC4", "DC Combiner 1 in 1 out with SPD"];//13
        bMats = ["Grid Tie Inverter Growatt 9 kW 3 phase", "Zero Export", "Kabel NYY 4x2,5 sqmm", "Kabel Y/G 1x2,5 sqmm", "Cable tray Type U 100x50 @panjang = 3 meter", "Cable Ties", "Schoen untuk kabel 2,5 sqmm", "Vinyl R-S-T-N-PE untuk kabel 2,5 sqmm"];//8
        cMats = ["Android TV 32 Inch", "Modem GSM Orbit", "Wifi Router", "Terminal Stop Kontak Lubang 6", "Kabel NYY 3x1,5 sqmm", "Steker Listrik 2 pole Plug with Earth"];//6
        dMats = ["Panel Ukuran 40x60 cm", "MCB AC 32A 3 phasa", "SPD AC 4P, 40 kA", "Digital Meter 3 phase Selec 383", "Busbar 100 A Ukuran 3x25 mm", "Isolator Busbar 100 A - SM 35", "CT 40/5A"];//7
        eMats = ["Ground Rod 5/8", "Clamp Ground Rod 5/8", "Kabel Y/G 1x35 sqmm", "Shock Rod 5/8", "Grounding Pit Ukuran 29x29x21"];//5
        fMats = ["Splitzen", "Ground Rod 5/8 panjang 2,5 meter", "Tiang pipa panjang 6 meter", "Cable Y/G NYAF 35 sqmm", "Clamp Ground rod 5/8", "Schoen Cable 35 mm - M8", "Clamp cable 35 mm"];//7
        gMats = ["Transportasi Pengiriman", "SLO & Perijinan PLN", "Instalasi, Testing & Commissioning"];//3
    }
    else{//using 1mWp values ;maybe change to more accurate value later
        wattDivisor = wattInput / 1000; //wattDivisor = value to multiply base preset with
        aTemp = [1824, 3600, 100, 1008, 960, 3024, 6000, 2400, 32, 150, 192, 16];//12
        bTemp = [8, 1, 200, 25, 100, 25, 40, 4, 32, 32, 4, 4];//12
        cTemp = [1, 1, 1, 1, 1, 1, 20, 1];//8
        dTemp = [1, 8, 1, 1, 1, 4, 8, 3];//8
        eTemp = [6, 3, 60, 3, 3];//5
        fTemp = [2, 2, 2, 100, 2, 4, 12];//7
        gTemp = [1, 1, 1];//3
        
        aMats = ["Solar Panel 550 Wp Monocrystalline", "Mid clamp", "End Clamp", "Alumunium rail @4 meter", "Alumunium rail @2,6 meter", "Jointing Alumunium Rail", "Tile Hook Rooftop", "Kabel PV XLPO 1x6 sqmm ", "Kabel Y/G 1x6 sqmm", "Schoen untuk kabel 6 sqmm (6 - M8)", "Cable tray Type U 100x50 @panjang = 3 meter", "Connector MC4", "DC Combiner 1 in 1 out with SPD"];//13
        bMats = ["Grid Tie Inverter Growatt 9 kW 3 phase", "Zero Export", "Kabel NYY 4x2,5 sqmm", "Kabel Y/G 1x2,5 sqmm", "Cable tray Type U 100x50 @panjang = 3 meter", "Cable Ties", "Schoen untuk kabel 2,5 sqmm", "Vinyl R-S-T-N-PE untuk kabel 2,5 sqmm"];//8
        cMats = ["Android TV 32 Inch", "Modem GSM Orbit", "Wifi Router", "Terminal Stop Kontak Lubang 6", "Kabel NYY 3x1,5 sqmm", "Steker Listrik 2 pole Plug with Earth"];//6
        dMats = ["Panel Ukuran 40x60 cm", "MCB AC 32A 3 phasa", "SPD AC 4P, 40 kA", "Digital Meter 3 phase Selec 383", "Busbar 100 A Ukuran 3x25 mm", "Isolator Busbar 100 A - SM 35", "CT 40/5A"];//7
        eMats = ["Ground Rod 5/8", "Clamp Ground Rod 5/8", "Kabel Y/G 1x35 sqmm", "Shock Rod 5/8", "Grounding Pit Ukuran 29x29x21"];//5
        fMats = ["Splitzen", "Ground Rod 5/8 panjang 2,5 meter", "Tiang pipa panjang 6 meter", "Cable Y/G NYAF 35 sqmm", "Clamp Ground rod 5/8", "Schoen Cable 35 mm - M8", "Clamp cable 35 mm"];//7
        gMats = ["Transportasi Pengiriman", "SLO & Perijinan PLN", "Instalasi, Testing & Commissioning"];//3
    }

    //Calculate final values of Array
    for(var i = 0, length = aTemp.length; i < length; i++){
        a[i] = Math.ceil(aTemp[i] * wattDivisor); //calculation here e.g. 20 = 10*2 <-- 20/10 = 2 || 5 = 10*.5 <-- 5/10 = .5
    }
    for(var i = 0, length = bTemp.length; i < length; i++){
        b[i] = Math.ceil(bTemp[i] * wattDivisor);
    }
    for(var i = 0, length = cTemp.length; i < length; i++){
        c[i] = Math.ceil(cTemp[i] * wattDivisor);
    }
    for(var i = 0, length = dTemp.length; i < length; i++){
        d[i] = Math.ceil(dTemp[i] * wattDivisor);
    }
    for(var i = 0, length = eTemp.length; i < length; i++){
        e[i] = Math.ceil(eTemp[i] * wattDivisor);
    }
    for(var i = 0, length = fTemp.length; i < length; i++){
        f[i] = Math.ceil(fTemp[i] * wattDivisor);
    }
    for(var i = 0, length = gTemp.length; i < length; i++){
        g[i] = Math.ceil(gTemp[i] * wattDivisor);
    }



    //Append array data after values have been assigned through condition check
    for(var i = 0, length = a.length; i < length; i++){
        document.getElementById("a" + i).innerHTML = a[i]; //change object in html file
        document.getElementById("aMats" + i).innerHTML = aMats[i];
        /* var trRef = document.getElementById("tableResult");
        let template = `
        <tr>
            <td>${i}<td>
            <td>Kabel<td>
            <td>${a[i]}</td>
        </tr>`;
        trRef.innerHTML += template */
    }
    for(var i = 0, length = b.length; i < length; i++){
        document.getElementById("b" + i).innerHTML = b[i]; //change object in html file
        document.getElementById("bMats" + i).innerHTML = bMats[i];
    }
    for(var i = 0, length = c.length; i < length; i++){
        document.getElementById("c" + i).innerHTML = c[i]; //change object in html file
        document.getElementById("cMats" + i).innerHTML = cMats[i];
    }
    for(var i = 0, length = d.length; i < length; i++){
        document.getElementById("d" + i).innerHTML = d[i]; //change object in html file
        document.getElementById("dMats" + i).innerHTML = dMats[i];
    }
    for(var i = 0, length = e.length; i < length; i++){
        document.getElementById("e" + i).innerHTML = e[i]; //change object in html file
        document.getElementById("eMats" + i).innerHTML = eMats[i];
    }
    for(var i = 0, length = f.length; i < length; i++){
        document.getElementById("f" + i).innerHTML = f[i]; //change object in html file
        document.getElementById("fMats" + i).innerHTML = fMats[i];
    }
    for(var i = 0, length = g.length; i < length; i++){
        document.getElementById("g" + i).innerHTML = g[i]; //change object in html file
        document.getElementById("gMats" + i).innerHTML = gMats[i];
    }

    document.getElementById("subheadingA").innerHTML = "I";
    document.getElementById("subheadingB").innerHTML = "II";
    document.getElementById("subheadingNA").innerHTML = "III";
    document.getElementById("textNA").innerHTML = "NOT APPLICABLE";
    document.getElementById("subheadingC").innerHTML = "IV";
    document.getElementById("subheadingD").innerHTML = "V";
    document.getElementById("subheadingE").innerHTML = "VI";
    document.getElementById("subheadingF").innerHTML = "VII";
    document.getElementById("subheadingG").innerHTML = "VIII";
}