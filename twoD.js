// array = {
//     "GoogleSheetData": [
//     [
//     "Index",
//     "Last",
//     "Change",
//     "%Change",
//     "High",
//     "Low",
//     "Volume\n('000 Shares)",
//     "Value\n(M.Baht)"
//     ],
//     [
//     "SET",
//     1624.96,
//     "+0.56",
//     "+0.03",
//     1630.08,
//     1621.57,
//     13450438,
//     45931.18
//     ],
//     [
//     "SET50",
//     988.13,
//     "+0.29",
//     "+0.03",
//     992.12,
//     984.82,
//     948244,
//     22999.42
//     ],
//     [
//     "SET100",
//     2220.33,
//     "+0.94",
//     "+0.04",
//     2228.26,
//     2213.65,
//     1482624,
//     29862.36
//     ],
//     [
//     "sSET",
//     1042.85,
//     -0.28,
//     -0.03,
//     1043.98,
//     1040.3,
//     1018973,
//     3232.04
//     ],
//     [
//     "SETCLMV",
//     994.76,
//     "+0.29",
//     "+0.03",
//     998.45,
//     992.5,
//     644190,
//     16670.92
//     ],
//     [
//     "SETHD",
//     1184.66,
//     -0.98,
//     -0.08,
//     1188.46,
//     1181.16,
//     525556,
//     10978.76
//     ],
//     [
//     "SETTHSI",
//     1042.28,
//     "+0.48",
//     "+0.05",
//     1046.02,
//     1039.18,
//     1163977,
//     23204.01
//     ],
//     [
//     "SETWB",
//     1002.21,
//     -3.49,
//     -0.35,
//     1008.55,
//     997.74,
//     341542,
//     8930.49
//     ],
//     [
//     "mai",
//     580.47,
//     -9.39,
//     -1.59,
//     590.76,
//     578.22,
//     6443870,
//     5220.78
//     ]
//     ]
//     }

const url = "https://script.googleusercontent.com/macros/echo?user_content_key=hVrn3Ulul6UaUOC8rh9kiAbk3z6EbpHsdG8lD-Fg7y5S23U3yzQUHpIxS6ivWyEtzQXUuxd3Z_PChF21mTk9LRJKXCx3RFSCm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLeAt4fwEj9n7XMm8vvGrxQp2nGWh_GsWiFqJJbRNihBwpMDuNYu1pMu55KMbRtiAhSg_Csd7_q-xzvJW-ck2XPZeqtKjwkCk9z9Jw9Md8uu&lib=MMCP5uA-rpTL_Fb5yE0eBOaYEaSESECOi";
   interval=()=>{fetch(url)
    .then(response=>
        response.json()).then(array_response=>
            array= array_response
        )
         
          console.log(array);
         run();
  
   }
    // console.log(array);
    // let array;
    // const buildUI = async () =>{
    //     const responses = await fetch(url)
    //     response = responses.json()
    //     console.log(response)
    //     const userdata = await response
    //     console.log(userdata)
    //     array = userdata
    //     run()
    //  }

//  buildUI()
   setInterval(() => {
    interval()
   }, 2000);
    jsonarray = [];
    run=()=>{
    set  = array['GoogleSheetData'][1][1]
    console.log(set);
    value = array['GoogleSheetData'][1][7]
    console.log(value);
    result_1 = set.toString()
    result_2 = value.toString()
    result_1_ = result_1.split('.')[1];
     result_1_split = result_1_[result_1_.length-1];
    result_2_ = result_2.split('.')[0];
    result_2_split = result_2_[result_2_.length-1];
    result =parseInt(result_1_split + result_2_split,10)
    console.log(result);
    document.querySelector("#result").textContent = `${result}`
    document.querySelector("#set").textContent = `${set}`
    document.querySelector("#value").textContent = `${value}`
    // console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()==="2:48:00");
    // jsonarray.push(result,result_1_split,result_2_split)
    //     json=JSON.stringify(jsonarray)
    //     console.log(json);
}

