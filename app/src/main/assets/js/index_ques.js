/*
const myQuestions = [
    {
      question: "Who is the strongest?",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously",
        A: "Waluigi, obviously"
      },
      leap: {
        a: "100",
        b: "200",
        c: "300"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the best site ever created?",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      leap: {
        a: "400",
        b: "500",
        c: "600"
      },
      correctAnswer: "c"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      leap: {
        a: "700",
        b: "800",
        c: "900",
        d: "901"
      },
      correctAnswer: "d"
    },
    {
      question: "What is 10/2?",
      answers: {
        a: "2",
        b: "5",
        c: "3"
      },
      leap: {
        a: "1000",
        b: "1100",
        c: "1200"
      },
      correctAnswer: "b"
    },
    {
      question: "What is 10/5?",
      answers: {
        a: "6",
        b: "5",
        c: "3",
        d: "2"
      },
      leap: {
        a: "1300",
        b: "1400",
        c: "1500",
        d: "1600"
      },
      correctAnswer: "d"
    },
    {
      question: "What is 30/5?",
      answers: {
        a: "5",
        b: "6",
        c: "3",
        d: "2",
        f: "20"
      },
      leap: {
        a: "1700",
        b: "1800",
        c: "1900",
        d: "2000"
      },
      correctAnswer: "b"
    }
  ];
*/  
  //export { myQuestions };
  
  
  var que_map = [  
  //"A0", "A2", "A3", "A4", "A5", "A6", "A7", "A9", "A10", "A11", "A12", "A13", "A14", "A15", "A16", "A17", "A18", "A19", "A20", "A22",
	//"A23", "A24", "A25", "A26", "A28", "A29", "A30", "A32", 
	/*
	"A0", "A2", "A3", "A4", "A5", "A6", "A7", "A9", "A10", "A11", "A12", "A13", "A14", "A15", "A16", "A17", "A18", "A19", "A20", "A22", "A23", 
	"A24", "A25", "A26", "A28", "A29", "A30", "A32", "A33",
	
	
	"A33", "A500", "A01", "A02", "A03", "A04", "A05", "A06", "A07", "A08", "A09", "A10",
	"A11", "A12", "A13", "A14", "A15", "A16", "A17", "A18", "A19", "A20", "A501", "A80", "A81", "A82", "A83", "A84", "A85", "A86", "A87", "A88",
	"A89", "A90", "A91", "A92", "A93", "A94", "A95", "A96", "A97", "A98", "A502", "A130", "A131", "A132", "A133", "A134", "A135", "A136", "A137", "A138",
	"A139", "A140", "A141", "A142", "A143", "A144", "A145", "A146", "A147", "A148", "A149", "A150", "A503", "A190", "A191", "A192", "A193", "A194", "A195", "A196",
	"A197", "A198", "A199", "A200", "A201", "B500", "B01", "B02", "B03", "B04", "B05", "B06", "B07", "B08", "B09", "B10", "B11", "B501", "B20", "B21",
	"B22", "B23", "B24", "B502", "B30", "B31", "B32", "B33", "B34", "B35", "B36", "B37", "B503", "B40", "B41", "B42", "B43", "B44", "B504", "B50",
	"B51", "B52", "B53", "B54", "B55", "B56", "B57", "B58", "B59", "B60", "B70", "B71", "B72", "B73", "B74", "B75", "B505", "B90", "B91", "B92",
	"B93", "B94", "B95", "C500", "C01", "C02", "C03", "C04", "C05", "C06", "C07", "C08", "C09", "C10", "C11", "C12", "C501", "C30", "C31", "C32",
	"C33", "C34", "C35", "C36", "C37", "C38", "C39", "C40", "C41", "C502", "C60", "C61", "C62", "C63", "C64", "C65", "C66", "C67", "C68", "C69",
	"C503", "C80", "C81", "C82", "C83", "C84", "C85", "C86", "D500", "D01", "D02", "D03", "D04", "D05", "D06", "D07", "D08", "D09", "D501", "D20",
	"D21", "D22", "D23", "D24", "D25", "D26", "D27", "D28", "D29", "D30", "D31", "D32", "D33", "D34", "D35", "D502", "D50", "D51", "D52", "D53",
	"D54", "D55", "D56", "D57", "D58", "D59", "D60", "D61", "D62", "D75", "D76", "D77", "D78", "D79", "D503", "D90", "D91", "D92", "D93", "D94",
	"D95", "D96", "D97", "D98", "D99", "D100", "E500", "E01", "E02", "E03", "E04", "E05", "E06", "E07", "E08", "E09", "E10", "E11", "E12", "E501",
	"E30", "E31", "E32", "E33", "E34", "E35", "F500", "F01", "F02", "F03", "F04", "F05", "F06", "F07", "F08", "F09", "F10", "F11", "F12", "F13",
	"F14", "F15", "F25", "F26", "F27", "F28", "F29", "F30", "F501", "F40", "F41", "F42", "F43", "F44", "F45", "F46", "F47", "F48", "F49", "F50",
	"F502", "F60", "F61", "F62", "F63", "F64", "F65", "F66", "F67", "F68", "F69", "F70", "F71", "F72", "F73", "F74", "F503", "F90", "F91", "F92",
	"F93", "F94", "F95", "F96", "F97", "F98", "F99", "F100", "F101", "F102", "F103", "F504", "F120", "F121", "F122", "F123", "F124", "F125", "F126", "F127",
	"F128", "F505", "F130", "F131", "F132", "F133", "F134", "F135", "F136", "F137", "F138", "G500", "G01", "G02", "G03", "G04", "G05", "G06", "G07", "G08",
	"H500", "H01", "H02", "H03", "H04", "H05", "H06", "H07", "H08", "H09", "H10", "H11", "H12", "H13", "H14", "H15", "H30", "H31", "H32", "H33",
	"H34", "H35", "H36", "H37", "H38", "H39", "H40", "H41", "H501", "H60", "H61", "H62", "H63", "H64", "H65", "H66", "I500", "I01", "I02", "I03",
	"I04", "I05", "I06", "I07", "I08", "I09", "I30", "I31", "I32", "I33", "I34", "I35", "I36", "I37", "I38", "I501", "I50", "I51", "I52", "I53",
	"I54", "I55", "I56", "J500", "J01", "J02", "J03", "J04", "J05", "J06", "J07", "J08", "J09", "J10", "J11", "J12", "J13", "J30", "J31", "J32",
	"J33", "J34", "J35", "J36", "J37", "J38", "J39", "J40", "J41", "J42", "K500", "K01", "K02", "K03", "K04", "K05", "K06", "K07", "K08", "K09",
	"K10", "K11", "K12", "K30", "K31", "K32", "K33", "K34", "K35", "K36", "K37", "K38", "K39", "K501", "K50", "K51", "K52", "K53", "K54", "K55",
	"K56", "K57", "K58", "L500", "L01", "L02", "L03", "L04", "L05", "L06", "L07", "L08", "L09", "L10", "L11", "L12", "L13", "L14", "L15", "L30",
	"L31", "L32", "L33", "L34", "L35", "L36", "L37", "L38", "L39", "L40", "L41", "L42", "L501", "L50", "L51", "L52", "L53", "L54", "L55", "L56",
	"L57", "M500", "M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M30", "M31", "M32", "M33", "M34", "M35", "M36",
	"M501", "M50", "M51", "M52", "M53", "M54", "M55", "M56", "M57", "N500", "N01", "N02", "N03", "N04", "N05", "N06", "N07", "N08", "N09", "N10",
	"N11", "N12", "N13", "N14", "N15", "N16", "N17", "N18", "N19", "N20", "N21", "N30", "N31", "N32", "N33", "N34", "N35", "N36", "N37", "N38",
	"N39", "N40", "N41", "N501", "N60", "N61", "N62", "N63", "N64", "N65", "N66", "N67", "O500", "O01", "O02", "O03", "O04", "O05", "O06", "O07",
	"O08", "O09", "O10", "O11", "O12", "O13", "O14", "O30", "O31", "O32", "O33", "O34", "O501", "O60", "O61", "O62", "O63", "O64", "O65", "O66",
	"O67", "P500", "P01", "P02", "P03", "P04", "P05", "P06", "P07", "P08", "P09", "P10", "P11", "P12", "P13", "P14", "P15", "P16", "P17", "P18",
	"P19", "P20", "P21", "P22", "P30", "P31", "P32", "P33", "P501", "P60", "P61", "P62", "P63", "P64", "P65", "P66", "P67", "Q500", "Q01", "Q02",
	"Q03", "Q04", "Q05", "Q06", "Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q30", "Q31", "Q32", "Q33", "Q34", "Q35", "Q36", "Q37", "Q38", "Q39",
	"Q501", "Q60", "Q61", "Q62", "Q63", "Q64", "Q65", "Q66", "Q67", "R500", "R01", "R501", "R10", "R11", "S500", "S01", "S02", "S03", "S04", "S05",
	"S06", "S07", "S08", "S09", "S10", "S11", "S12", "S13", "S501", "S50", "S51", "S52", "S53", "S54", "S55", "S56", "S57", "S58", "S59", "S60",
	"S61", "S62", "S63", "S502", "S70", "S71", "S72", "S73", "S74", "S75", "S76", "S77", "S78", "S79", "S80", "S81", "T500", "T01", "T02", "T03",
	"T04", "T05", "T06", "T07", "T08", "T09", "T10", "T11", "T12", "T13", "T14", "T15", "T16", "T17", "T18", "T19", "U500", "U01", "U02", "U03",
	"U04", "U05", "U06", "U07", "U08", "U09", "U10", "U11", "U501", "U30", "U31", "U32", "U33", "U34", "U35", "U36", "U37", "U38", "U39", "U50",
	"U51", "U52", "U53", "U54", "U55", "U56", "U57", "U58", "U59", "U60", "U61", "U502", "U70", "U71", "U72", "U73", "U74", "U75", "U76", "U503",
	"U90", "U91", "U92", "U93", "U94", "U95", "U96", "U97", "U504", "U110", "U111", "U112", "U113", "U114", "U115", "U116", "U117", "U118", "U130", "U131",
	"U132", "U133", "U134", "U135", "U136", "U137", "U138", "U139", "U140", "U141", "U142", "U143", "U144", "U145", "U505", "U160", "U161", "U162", "U163", "U164",
	"U165", "U166", "U167", "U168", "U169", "U506", "U180", "U181", "U182", "U183", "U184", "U185", "U186", "U507", "U200", "U201", "U202", "U203", "U204", "U205",
	"U206", "V500", "V01", "V02", "V03", "V04", "V05", "V06", "V07", "V08", "V09", "V10", "V11", "V12", "V501", "V20", "V21", "V22", "V23", "V24",
	"V25", "V26", "V27", "V28", "V29", "V30", "V31", "V32", "V33", "W500", "W01", "W02", "W03", "W04", "W05", "W06", "W07", "W08", "W20", "W21",
	"W22", "W23", "W24", "W25", "W26", "W27", "W28", "W501", "W40", "W41", "W42", "W43", "W44", "W45", "W46", "W47", "W502", "W60", "W61", "W62",
	"W63", "W64", "W65", "W66", "W67", "W68", "W503", "W80", "W81", "W82", "W83", "W84", "W85", "W86", "W87", "W88", "W504", "W100", "W101", "W102",
	"W103", "W104", "W105", "W106", "W505", "W120", "W121", "W122", "W123", "W124", "W125", "W126", "W127", "W128", "W129", "W130", "W131", "W132", "W133", "W134",
	"W135", "X500", "X01", "X02", "X03", "X04", "X05", "X06", "X501", "X20", "X21", "X22", "X23", "X24", "X25", "X26", "X27", "X502", "X40", "X41",
	"X42", "X43", "X44", "X45", "X46", "X47", "X48", "X49", "X50", "X60", "X61", "X62", "X63", "X64", "X65", "X66", "X67", "X68", "X69", "X503",
	"X80", "X81", "X82", "X83", "X84", "X85", "X86", "X87", "X88", "X100", "X101", "X102", "X103", "X104", "X105", "X106", "X107", "X504", "X120", "X121",
	"X122", "X123", "X124", "X125", "X126", "X127", "X128", "X140", "X141", "X142", "X143", "X144", "X145", "X146", "X147", "X505", "X170", "X171", "X172", "X173",
	"X174", "X175", "X176", "X177", "X178", "X179", "X180", "X181", "X182", "X183", "X184", "X185", "X186", "Y500", "Y01", "Y02", "Y03", "Y04", "Y05", "Y06",
	"Y07", "Y08", "Y09", "Y10", "Y11", "Y501", "Y30", "Y31", "Y32", "Y33", "Y34", "Y35", "Y36", "Y37", "Y38", "Y502", "Y50", "Y51", "Y52", "Y53",
	"Y54", "Y55", "Y56", "Y57", "Y58", "Y59", "Y60", "Y61", "Y62", "Y63", "Y64", "Y65", "Y66", "Y67", "Y68", "Y69", "Y70", "Y71", "Y72", "Y73",
	"Y90", "Y91", "Y92", "Y93", "Y94", "Y95", "Y96", "Y97", "Y98", "Y99", "Y100", "Y101", "Y102", "Y103", "Y104", "Y105", "Y106", "Y107", "Y108", "Y109",
	"Y110", "Y111", "Y112", "Y113", "Y114", "Y503", "Y130", "Y131", "Y132", "Y133", "Y134", "Y135", "Y136", "Y137", "Y138", "Y139", "Y140", "Y141", "Y142", "Y143",
	"Y144", "Y145", "Y507", "Y280", "Y281", "Y282", "Y283", "Y284", "Y285", "Y286", "Y287", "Y508", "Y300", "Y301", "Y302", "Y303", "Y304", "Y305", "Y306", "Y307",
	"Y308"  */
	
	//"A0", "A2", "A3", "A4", "A5", "A6", "A7", "A9", "A10", "A11", "A12", "A13", "A14", "A15", "A16", "A17", "A18", "A19", "A20", "A22", "A23", "A24", "A25", "A26", "A28", "A29", "A30", "A32", "A33",
	"0", "2", "3", "4", "5", "6", "7", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "22", "23", "24", "25", "26", "28", "29", "30", "32", "33",
	"A500", "A01", "A02", "A03", "A04", "A05", "A06", "A07", "A08", "A09", "A10", "A11", "A12", "A13", "A14", "A15", "A16", "A17", "A18", "A19", "A20", "A501", "A80", "A81", "A82", "A83", "A84", "A85", "A86", "A87", "A88", "A89", "A90", "A91", "A92", "A93", "A94", "A95", "A96", "A97", "A98", "A502", "A130", "A131", "A132", "A133", "A134", "A135", "A136", "A137", "A138", "A139", "A140", "A141", "A142", "A143", "A144", "A145", "A146", "A147", "A148", "A149", "A150", "A503", "A190", "A191", "A192", "A193", "A194", "A195", "A196", "A197", "A198", "A199", "A200", "A201", "B500", "B01", "B02", "B03", "B04", "B05", "B06", "B07", "B08", "B09", "B10", "B11", "B501", "B20", "B21", "B22", "B23", "B24", "B502", "B30", "B31", "B32", "B33", "B34", "B35", "B36", "B37", "B503", "B40", "B41", "B42", "B43", "B44", "B504", "B50", "B51", "B52", "B53", "B54", "B55", "B56", "B57", "B58", "B59", "B60", "B70", "B71", "B72", "B73", "B74", "B75", "B505", "B90", "B91", "B92", "B93", "B94", "B95", "C500", "C01", "C02", "C03", "C04", "C05", "C06", "C07", "C08", "C09", "C10", "C11", "C12", "C501", "C30", "C31", "C32", "C33", "C34", "C35", "C36", "C37", "C38", "C39", "C40", "C41", "C502", "C60", "C61", "C62", "C63", "C64", "C65", "C66", "C67", "C68", "C69", "C503", "C80", "C81", "C82", "C83", "C84", "C85", "C86", "D500", "D01", "D02", "D03", "D04", "D05", "D06", "D07", "D08", "D09", "D501", "D20", "D21", "D22", "D23", "D24", "D25", "D26", "D27", "D28", "D29", "D30", "D31", "D32", "D33", "D34", "D35", "D502", "D50", "D51", "D52", "D53", "D54", "D55", "D56", "D57", "D58", "D59", "D60", "D61", "D62", "D75", "D76", "D77", "D78", "D79", "D503", "D90", "D91", "D92", "D93", "D94", "D95", "D96", "D97", "D98", "D99", "D100", "E500", "E01", "E02", "E03", "E04", "E05", "E06", "E07", "E08", "E09", "E10", "E11", "E12", "E501", "E30", "E31", "E32", "E33", "E34", "E35", "F500", "F01", "F02", "F03", "F04", "F05", "F06", "F07", "F08", "F09", "F10", "F11", "F12", "F13", "F14", "F15", "F25", "F26", "F27", "F28", "F29", "F30", "F501", "F40", "F41", "F42", "F43", "F44", "F45", "F46", "F47", "F48", "F49", "F50", "F502", "F60", "F61", "F62", "F63", "F64", "F65", "F66", "F67", "F68", "F69", "F70", "F71", "F72", "F73", "F74", "F503", "F90", "F91", "F92", "F93", "F94", "F95", "F96", "F97", "F98", "F99", "F100", "F101", "F102", "F103", "F504", "F120", "F121", "F122", "F123", "F124", "F125", "F126", "F127", "F128", "F505", "F130", "F131", "F132", "F133", "F134", "F135", "F136", "F137", "F138", "G500", "G01", "G02", "G03", "G04", "G05", "G06", "G07", "G08", "H500", "H01", "H02", "H03", "H04", "H05", "H06", "H07", "H08", "H09", "H10", "H11", "H12", "H13", "H14", "H15", "H30", "H31", "H32", "H33", "H34", "H35", "H36", "H37", "H38", "H39", "H40", "H41", "H501", "H60", "H61", "H62", "H63", "H64", "H65", "H66", "I500", "I01", "I02", "I03", "I04", "I05", "I06", "I07", "I08", "I09", "I30", "I31", "I32", "I33", "I34", "I35", "I36", "I37", "I38", "I501", "I50", "I51", "I52", "I53", "I54", "I55", "I56", "J500", "J01", "J02", "J03", "J04", "J05", "J06", "J07", "J08", "J09", "J10", "J11", "J12", "J13", "J30", "J31", "J32", "J33", "J34", "J35", "J36", "J37", "J38", "J39", "J40", "J41", "J42", "K500", "K01", "K02", "K03", "K04", "K05", "K06", "K07", "K08", "K09", "K10", "K11", "K12", "K30", "K31", "K32", "K33", "K34", "K35", "K36", "K37", "K38", "K39", "K501", "K50", "K51", "K52", "K53", "K54", "K55", "K56", "K57", "K58", "L500", "L01", "L02", "L03", "L04", "L05", "L06", "L07", "L08", "L09", "L10", "L11", "L12", "L13", "L14", "L15", "L30", "L31", "L32", "L33", "L34", "L35", "L36", "L37", "L38", "L39", "L40", "L41", "L42", "L501", "L50", "L51", "L52", "L53", "L54", "L55", "L56", "L57", "M500", "M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M30", "M31", "M32", "M33", "M34", "M35", "M36", "M501", "M50", "M51", "M52", "M53", "M54", "M55", "M56", "M57", "N500", "N01", "N02", "N03", "N04", "N05", "N06", "N07", "N08", "N09", "N10", "N11", "N12", "N13", "N14", "N15", "N16", "N17", "N18", "N19", "N20", "N21", "N30", "N31", "N32", "N33", "N34", "N35", "N36", "N37", "N38", "N39", "N40", "N41", "N501", "N60", "N61", "N62", "N63", "N64", "N65", "N66", "N67", "O500", "O01", "O02", "O03", "O04", "O05", "O06", "O07", "O08", "O09", "O10", "O11", "O12", "O13", "O14", "O30", "O31", "O32", "O33", "O34", "O501", "O60", "O61", "O62", "O63", "O64", "O65", "O66", "O67", "P500", "P01", "P02", "P03", "P04", "P05", "P06", "P07", "P08", "P09", "P10", "P11", "P12", "P13", "P14", "P15", "P16", "P17", "P18", "P19", "P20", "P21", "P22", "P30", "P31", "P32", "P33", "P501", "P60", "P61", "P62", "P63", "P64", "P65", "P66", "P67", "Q500", "Q01", "Q02", "Q03", "Q04", "Q05", "Q06", "Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q30", "Q31", "Q32", "Q33", "Q34", "Q35", "Q36", "Q37", "Q38", "Q39", "Q501", "Q60", "Q61", "Q62", "Q63", "Q64", "Q65", "Q66", "Q67", "R500", "R01", "R501", "R10", "R11", "S500", "S01", "S02", "S03", "S04", "S05", "S06", "S07", "S08", "S09", "S10", "S11", "S12", "S13", "S501", "S50", "S51", "S52", "S53", "S54", "S55", "S56", "S57", "S58", "S59", "S60", "S61", "S62", "S63", "S502", "S70", "S71", "S72", "S73", "S74", "S75", "S76", "S77", "S78", "S79", "S80", "S81", "T500", "T01", "T02", "T03", "T04", "T05", "T06", "T07", "T08", "T09", "T10", "T11", "T12", "T13", "T14", "T15", "T16", "T17", "T18", "T19", "U500", "U01", "U02", "U03", "U04", "U05", "U06", "U07", "U08", "U09", "U10", "U11", "U501", "U30", "U31", "U32", "U33", "U34", "U35", "U36", "U37", "U38", "U39", "U50", "U51", "U52", "U53", "U54", "U55", "U56", "U57", "U58", "U59", "U60", "U61", "U502", "U70", "U71", "U72", "U73", "U74", "U75", "U76", "U503", "U90", "U91", "U92", "U93", "U94", "U95", "U96", "U97", "U504", "U110", "U111", "U112", "U113", "U114", "U115", "U116", "U117", "U118", "U130", "U131", "U132", "U133", "U134", "U135", "U136", "U137", "U138", "U139", "U140", "U141", "U142", "U143", "U144", "U145", "U505", "U160", "U161", "U162", "U163", "U164", "U165", "U166", "U167", "U168", "U169", "U506", "U180", "U181", "U182", "U183", "U184", "U185", "U186", "U507", "U200", "U201", "U202", "U203", "U204", "U205", "U206", "V500", "V01", "V02", "V03", "V04", "V05", "V06", "V07", "V08", "V09", "V10", "V11", "V12", "V501", "V20", "V21", "V22", "V23", "V24", "V25", "V26", "V27", "V28", "V29", "V30", "V31", "V32", "V33", "W500", "W01", "W02", "W03", "W04", "W05", "W06", "W07", "W08", "W20", "W21", "W22", "W23", "W24", "W25", "W26", "W27", "W28", "W501", "W40", "W41", "W42", "W43", "W44", "W45", "W46", "W47", "W502", "W60", "W61", "W62", "W63", "W64", "W65", "W66", "W67", "W68", "W503", "W80", "W81", "W82", "W83", "W84", "W85", "W86", "W87", "W88", "W504", "W100", "W101", "W102", "W103", "W104", "W105", "W106", "W505", "W120", "W121", "W122", "W123", "W124", "W125", "W126", "W127", "W128", "W129", "W130", "W131", "W132", "W133", "W134", "W135", "X500", "X01", "X02", "X03", "X04", "X05", "X06", "X501", "X20", "X21", "X22", "X23", "X24", "X25", "X26", "X27", "X502", "X40", "X41", "X42", "X43", "X44", "X45", "X46", "X47", "X48", "X49", "X50", "X60", "X61", "X62", "X63", "X64", "X65", "X66", "X67", "X68", "X69", "X503", "X80", "X81", "X82", "X83", "X84", "X85", "X86", "X87", "X88", "X100", "X101", "X102", "X103", "X104", "X105", "X106", "X107", "X504", "X120", "X121", "X122", "X123", "X124", "X125", "X126", "X127", "X128", "X140", "X141", "X142", "X143", "X144", "X145", "X146", "X147", "X505", "X170", "X171", "X172", "X173", "X174", "X175", "X176", "X177", "X178", "X179", "X180", "X181", "X182", "X183", "X184", "X185", "X186", "Y500", "Y01", "Y02", "Y03", "Y04", "Y05", "Y06", "Y07", "Y08", "Y09", "Y10", "Y11", "Y501", "Y30", "Y31", "Y32", "Y33", "Y34", "Y35", "Y36", "Y37", "Y38", "Y502", "Y50", "Y51", "Y52", "Y53", "Y54", "Y55", "Y56", "Y57", "Y58", "Y59", "Y60", "Y61", "Y62", "Y63", "Y64", "Y65", "Y66", "Y67", "Y68", "Y69", "Y70", "Y71", "Y72", "Y73", "Y90", "Y91", "Y92", "Y93", "Y94", "Y95", "Y96", "Y97", "Y98", "Y99", "Y100", "Y101", "Y102", "Y103", "Y104", "Y105", "Y106", "Y107", "Y108", "Y109", "Y110", "Y111", "Y112", "Y113", "Y114", "Y503", "Y130", "Y131", "Y132", "Y133", "Y134", "Y135", "Y136", "Y137", "Y138", "Y139", "Y140", "Y141", "Y142", "Y143", "Y144", "Y145", "Y507", "Y280", "Y281", "Y282", "Y283", "Y284", "Y285", "Y286", "Y287", "Y508", "Y300", "Y301", "Y302", "Y303", "Y304", "Y305", "Y306", "Y307", "Y308", "finish"
	
  ];
  
const myQuestions = [
	{//QUESTION No.:  1
		question: "Select the body region which is most affected.",
		answers: {
			a: "head",
			b: "Eye",
			c: "nose",
			d: "mouth",
			e: "ear",
			f: "neck",
			g: "Nape",
			h: "shoulder",
			i: "elbow",
			j: "wrist",
			k: "hand",
			l: "finger",
			m: "Thigh",
			n: "knee",
			o: "calf",
			p: "Ankle",
			q: "foot",
			r: "toes",
			s: "breast",
			t: "chest",
			u: "Etc",
			v: "ship",
			w: "waist",
			x: "side",
			y: "Ass  Anal",
			z: "Around belly and thigh",
			A: "reproductive organs"
		},
		leap: {
			a: "2",
			b: "3",
			c: "4",
			d: "5",
			e: "6",
			f: "7",
			g: "9",
			h: "10",
			i: "11",
			j: "12",
			k: "13",
			l: "14",
			m: "15",
			n: "16",
			o: "17",
			p: "18",
			q: "19",
			r: "20",
			s: "22",
			t: "23",
			u: "24",
			v: "25",
			w: "26",
			x: "26",
			y: "28",
			z: "29",
			A: "30"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.:  2
		question: "Select one of the following that applies the most.",
		answers: {
			a: "I feel dizzy.",
			b: "I have a headache.",
			c: "I feel as if I have a fever.",
			d: "I have fainted or lost consciousness.",
			e: "My head is itchy.",
			f: "I have skin issues."
		},
		leap: {
			a: "A500",
			b: "A501",
			c: "A502",
			d: "A503",
			e: "Y308",
			f: "Y308"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.:  3
		question: "Select one of the following that applies the most.",
		answers: {
			a: "My vision got blurry and I can't see very well.",
			b: "I have problems with my vision.",
			c: "My eye is tingling.",
			d: "My eye is dazzled.",
			e: "I have tears even though I am not sad.",
			f: "My eye has discomfort  like I have eye boogers gunk.",
			g: "My eye is itchy.",
			h: "The color of my eyes changed.",
			i: "My eye hurts.",
			j: "I have a stye in my eye."
		},
		leap: {
			a: "B500",
			b: "B501",
			c: "B502",
			d: "B502",
			e: "B503",
			f: "B503",
			g: "B503",
			h: "B504",
			i: "B505",
			j: "Y308"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.:  4
		question: "Select one of the following that applies the most.",
		answers: {
			a: "I have a runny nose.",
			b: "I have a stuffy nose and can't breathe well.",
			c: "I sneeze.",
			d: "My nose hurts.",
			e: "I have skin issues."
		},
		leap: {
			a: "C500",
			b: "C501",
			c: "C502",
			d: "C503",
			e: "Y308"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.:  5
		question: "Select one of the following that applies the most.",
		answers: {
			a: "I drool.",
			b: "I vomited blood.",
			c: "It is hard to swallow food or water due to the pain in my throat.",
			d: "I have bad breath even though I do not have any issues with my teeth or gums.",
			e: "I have a blister on my lips.",
			f: "I have chancre sores in on my mouth or tongue.",
			g: "I cannot open my mouth.",
			h: "It is painful to chew.",
			i: "My gums are hurting.",
			j: "My molars hurt.",
			k: "I have sensitive teeth."
		},
		leap: {
			a: "D500",
			b: "D501",
			c: "D502",
			d: "D503",
			e: "Y308",
			f: "Y308",
			g: "Y308",
			h: "Y308",
			i: "Y308",
			j: "Y308",
			k: "Y308"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.:  6
		question: "Select one of the following that applies the most.",
		answers: {
			a: "My ear hurts.",
			b: "I have discharge in my ear.",
			c: "My ear is itchy.",
			d: "I can't hear very well.",
			e: "I hear noise in my ear.",
			f: "I hear noises that others can't (tinnitus ringing noise).",
			g: "I have skin issues."
		},
		leap: {
			a: "E500",
			b: "E501",
			c: "E501",
			d: "E501",
			e: "E501",
			f: "E501",
			g: "Y308"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.:  7
		question: "Select one of the following that applies the most.",
		answers: {
			a: "It is hard to swallow (saliva or food).",
			b: "My throat is swollen.",
			c: "I vomited blood.",
			d: "My throat hurts.",
			e: "I feel a lump in my throat.",
			f: "I have a cough.",
			g: "I have phlegm.",
			h: "My throat itches.",
			i: "My voice changed even though I am postpubescent.",
			j: "I have severe thirst I am very thirsty."
		},
		leap: {
			a: "D502",
			b: "D502",
			c: "D501",
			d: "F500",
			e: "F501",
			f: "F502",
			g: "F503",
			h: "F504",
			i: "F505",
			j: "Y507"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.:  8
		question: "Select one of the following that applies the most.",
		answers: {
			a: "The back side of my neck hurts.",
			b: "It is hard to move my neck.",
			c: "I have skin issues."
		},
		leap: {
			a: "G500",
			b: "G500",
			c: "Y308"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.:  9
		question: "Select one of the following that applies the most.",
		answers: {
			a: "My shoulder hurts.",
			b: "I can't move my shoulders.",
			c: "My shoulder feels less sensitive.",
			d: "I have skin issues."
		},
		leap: {
			a: "H500",
			b: "H500",
			c: "H501",
			d: "Y308"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 10
		question: "Select one of the following that applies the most.",
		answers: {
			a: "My elbow hurts.",
			b: "It is hard to move my elbow.",
			c: "The area around my elbow swelled.",
			d: "My elbow doesn't feel sensitive.",
			e: "I have skin issues."
		},
		leap: {
			a: "I500",
			b: "I500",
			c: "I500",
			d: "I501",
			e: "Y308"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 11
		question: "Select one of the following that applies the most.",
		answers: {
			a: "My wrist hurts.",
			b: "It is difficult to move my wrist.",
			c: "My wrist swelled.",
			d: "I have skin issues."
		},
		leap: {
			a: "J500",
			b: "J500",
			c: "J500",
			d: "Y308"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 12
		question: "Select one of the following that applies the most.",
		answers: {
			a: "My hand hurts.",
			b: "It is difficult to move my hands.",
			c: "The shape of my hands has changed.",
			d: "My hand(s) feel numb.",
			e: "My hands feel numb.",
			f: "My hands feel less sensitive.",
			g: "I have skin issues."
		},
		leap: {
			a: "K500",
			b: "K500",
			c: "K500",
			d: "K501",
			e: "K501",
			f: "K501",
			g: "Y308"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 13
		question: "Select one of the following that applies the most.",
		answers: {
			a: "My finger(s) hurt.",
			b: "It is difficult to move my fingers.",
			c: "My finger joint(s) make noises.",
			d: "My finger(s) are a different color.",
			e: "My finger(s) feel numb ache.",
			f: "My fingers are numb.",
			g: "My finger(s) sensation has decreased.",
			h: "I have skin issues."
		},
		leap: {
			a: "L500",
			b: "L500",
			c: "L500",
			d: "L500",
			e: "K501",
			f: "K501",
			g: "K501",
			h: "Y308"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 14
		question: "Select one of the following that applies the most.",
		answers: {
			a: "My thigh hurts.",
			b: "I feel numb ache on my thigh.",
			c: "I have some sensitivity on my thigh.",
			d: "I have skin issues."
		},
		leap: {
			a: "M500",
			b: "M500",
			c: "M501",
			d: "Y308"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 15
		question: "Select one of the following that applies the most.",
		answers: {
			a: "My knee hurts.",
			b: "I have knee cramps.",
			c: "It is difficult to move my knee.",
			d: "My knee swelled.",
			e: "My knee feels hot.",
			f: "I have diminished sensation in my knee.",
			g: "I have skin issues."
		},
		leap: {
			a: "N500",
			b: "N500",
			c: "N500",
			d: "N500",
			e: "N500",
			f: "N501",
			g: "Y308"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 16
		question: "Select one of the following that applies the most.",
		answers: {
			a: "My calf hurts.",
			b: "My calf feels numb.",
			c: "My calf feels odd.",
			d: "I feel like my calf is numb.",
			e: "The blood vessels on my calf look wavy.",
			f: "I have skin issues."
		},
		leap: {
			a: "M500",
			b: "M500",
			c: "M501",
			d: "M501",
			e: "Y308",
			f: "Y308"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 17
		question: "Select one of the following that applies the most.",
		answers: {
			a: "I have ankle pain.",
			b: "It is difficult to move my ankle.",
			c: "My ankle swelled.",
			d: "My ankle is losing sensitivity.",
			e: "I have skin issues."
		},
		leap: {
			a: "O500",
			b: "O500",
			c: "Y508",
			d: "O501",
			e: "Y308"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 18
		question: "Select one of the following that applies the most.",
		answers: {
			a: "My foot hurts as well.",
			b: "My toes feel hot burning.",
			c: "My foot is swollen.",
			d: "My foot is losing sensitivity.",
			e: "I have numbness on my foot feet.",
			f: "I have cramps in my foot.",
			g: "I have skin issues."
		},
		leap: {
			a: "P500",
			b: "P500",
			c: "Y508",
			d: "P501",
			e: "P501",
			f: "P501",
			g: "Y308"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 19
		question: "Select one of the following that applies the most.",
		answers: {
			a: "My toes hurt.",
			b: "My toes cramp.",
			c: "I have ingrown toe nails.",
			d: "My big toe looks crooked.",
			e: "My toes change color.",
			f: "My toes are swollen.",
			g: "I sense a strange feeling on my toes.",
			h: "I have skin issues."
		},
		leap: {
			a: "Q500",
			b: "Q500",
			c: "Q500",
			d: "Q500",
			e: "Q500",
			f: "Q500",
			g: "Q501",
			h: "Y308"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 20
		question: "Select one of the following that applies the most.",
		answers: {
			a: "I feel a lump on my breast.",
			b: "I get discharge from my nipple.",
			c: "My breast hurts.",
			d: "I am male but I have breasts.",
			e: "I have skin issues."
		},
		leap: {
			a: "R500",
			b: "R500",
			c: "R500",
			d: "R501",
			e: "Y308"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 21
		question: "Select one of the following that applies the most.",
		answers: {
			a: "I experience chest pain that feels like it is inside of my chest.",
			b: "I have a cough.",
			c: "I have discomfort in my chest.",
			d: "I have difficulty breathing.",
			e: "I feel a tickle on the inside of my chest."
		},
		leap: {
			a: "S500",
			b: "F502",
			c: "S500",
			d: "S501",
			e: "F502"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 22
		question: "Select one of the following that applies the most.",
		answers: {
			a: "My back hurts (including shoulder).",
			b: "I feel tightness in my back (including shoulder).",
			c: "I have skin issues."
		},
		leap: {
			a: "T500",
			b: "T500",
			c: "Y308"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 23
		question: "Select one of the following that applies the most.",
		answers: {
			a: "I feel pain in my upper abdomen.",
			b: "I have pain in my lower abdomen. ",
			c: "My stomach feels gassy bloated.",
			d: "I have indigestion.",
			e: "I feel like I have to throw up or have already vomitted.",
			f: "I burp frequently.",
			g: "I have diarrhea.",
			h: "I have skin issues."
		},
		leap: {
			a: "U500",
			b: "U501",
			c: "U502",
			d: "U503",
			e: "U504",
			f: "U505",
			g: "U506",
			h: "Y308"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 24
		question: "Select one of the following that applies the most.",
		answers: {
			a: "My side hurts.",
			b: "My back hurts.",
			c: "I have skin issues."
		},
		leap: {
			a: "V500",
			b: "V501",
			c: "Y308"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 25
		question: "Select one of the following that applies the most.",
		answers: {
			a: "My buttock or anus hurts.",
			b: "My anus bleeds.",
			c: "I have hemorrhoids.",
			d: "My stool leaks out by itself.",
			e: "My anus is itchy.",
			f: "I have diarrhea.",
			g: "The color of my stool has changed.",
			h: "I have skin issues."
		},
		leap: {
			a: "W500",
			b: "W501",
			c: "W502",
			d: "W503",
			e: "W504",
			f: "U506",
			g: "W505",
			h: "Y308"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 26
		question: "Select one of the following that applies the most.",
		answers: {
			a: "My lower abdomen and thigh hurt.",
			b: "I have skin issues."
		},
		leap: {
			a: "U507",
			b: "Y308"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 27
		question: "Select one of the following that applies the most.",
		answers: {
			a: "The color of my urine has changed.",
			b: "I am unable to urinate.",
			c: "I don't feel empty after I urinate  or I have urinary incontinence (urge to urinate).",
			d: "It hurts when I urinate.",
			e: "I feel like I have to urinate frequently.",
			f: "I have issues with my period volume or cycle.",
			g: "My genital hurts.",
			h: "I have discharge from my genital.",
			i: "My genital is itchy.",
			j: "I have skin issues."
		},
		leap: {
			a: "X500",
			b: "X501",
			c: "X502",
			d: "X503",
			e: "X504",
			f: "X505",
			g: "Y308",
			h: "Y308",
			i: "Y308",
			j: "Y308"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 28
		question: "Do you want to see the result?",
		answers: {
			a: "Yes. I woud like to see the result.",
			b: "No  I want to go back to the first."
		},
		leap: {
			a: "finish",
			b: "0"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 29
		question: "Under 16 years old  they tend to experience different symptoms and react more rapidly so it is recommended that they visit a pediatrician.",
		answers: {
			a: "??? ?? ?????? ??? ????.",
			b: "No  I want to go back to the first."
		},
		leap: {
			a: "search_11",
			b: "0"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 30
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "A01"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 31
		question: "Did you pass out Are you forgetful Did you fall asleep frequently?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "A02",
			b: "A03"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 32
		question: "How long has your issue been like that? ",
		answers: {
			a: "I recovered within 24hrs.",
			b: "24?? ?? ??? ??.",
			c: "I haven't fainted or lost consciousness but I was sleepy."
		},
		leap: {
			a: "A03",
			b: "A03",
			c: "A03"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 33
		question: "When you press the pink part of your nail for 1 second  does it return to pink color from white color?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "A04",
			b: "A04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 34
		question: "Do you get phlegm?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "A05",
			b: "A06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 35
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have phlegm.",
			b: "I have sticky phlegm.",
			c: "I have yellow phlegm.",
			d: "I have blood in my phlegm.",
			e: "None of the above below"
		},
		leap: {
			a: "A06",
			b: "A06",
			c: "A06",
			d: "A06",
			e: "A06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 36
		question: "Do you cough?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "A07",
			b: "A08"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 37
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cough.",
			b: "I have a cough that sounds like a dogs bark.",
			c: "I have a cough that is dry.",
			d: "I cough frequently.",
			e: "I cough more at night.",
			f: "I cough very hard and it leaves me out of breath."
		},
		leap: {
			a: "A08",
			b: "A08",
			c: "A08",
			d: "A08",
			e: "A08",
			f: "A08"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 38
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "I have a light fever.",
			c: "My body temperature has dropped decreased.",
			d: "????? ??.",
			e: "I am sweating more than I used to.",
			f: "None of the above below"
		},
		leap: {
			a: "A09",
			b: "A09",
			c: "A09",
			d: "A09",
			e: "A09",
			f: "A09"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 39
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I had an accident (Car accident Physical activity).",
			b: "I feel unusually dizzy.",
			c: "I feel dizziness when I move my head. ",
			d: "When I stand up from laying down or sitting I feel dizzy.",
			e: "None of the above below"
		},
		leap: {
			a: "A10",
			b: "A10",
			c: "A10",
			d: "A10",
			e: "A10"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 40
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have numbness on my face or on the side of my face.",
			b: "My arms legs have twitched before.",
			c: "My body arms legs feel weak whenever I stand up walk.",
			d: "I have hypoesthesia.",
			e: "None of the above below"
		},
		leap: {
			a: "A11",
			b: "A11",
			c: "A11",
			d: "A11",
			e: "A11"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 41
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My entire body has chills.",
			b: "My face looks pale.",
			c: "I have been exposed to AC for hours.",
			d: "I have been exposed to strong sun light for hours.",
			e: "I feel like I have to throw up or have already vomitted.",
			f: "None of the above below"
		},
		leap: {
			a: "A12",
			b: "A12",
			c: "A12",
			d: "A12",
			e: "A12",
			f: "A12"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 42
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I smoke more than I used to.",
			b: "I drink more than I used to.",
			c: "I have diabetes.",
			d: "I have high blood pressue.",
			e: "I recently had a cold or periodontitis.",
			f: "None of the above below"
		},
		leap: {
			a: "A13",
			b: "A13",
			c: "A13",
			d: "A13",
			e: "A13",
			f: "A13"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 43
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have discharge in my ear.",
			b: "I can not hear it  or I can barely hear it.",
			c: "I hear noises that others can't (machine noise).",
			d: "My vision has worsened and I have double vision.",
			e: "My eyelid feels like it's twitching.",
			f: "None of the above below"
		},
		leap: {
			a: "A14",
			b: "A14",
			c: "A14",
			d: "A14",
			e: "A14",
			f: "A14"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 44
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I can't move my chin.",
			b: "I cannot open close my mouth.",
			c: "When I move my chin  my chin makes noises or something is stuck.",
			d: "I have a productive cough with blood.",
			e: "There is blood in my spit.",
			f: "None of the above below"
		},
		leap: {
			a: "A15",
			b: "A15",
			c: "A15",
			d: "A15",
			e: "A15",
			f: "A15"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 45
		question: "Does your head hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "A16",
			b: "A18"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 46
		question: "How does your head hurt?",
		answers: {
			a: "My head hurts  like it gets tightened.",
			b: "It feels like a splitting pain.",
			c: "I have a pounding headache.",
			d: "I have a headache with throbbing at my temples.",
			e: "The back of my head hurts.",
			f: "None of the above below"
		},
		leap: {
			a: "A17",
			b: "A17",
			c: "A17",
			d: "A17",
			e: "A17",
			f: "A17"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 47
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "I have a migrane.",
			c: "My pain doesn't subside even after I take pain medication.",
			d: "I feel more pain when I cough or move.",
			e: "I feel better after I take a deep breath or throw up.",
			f: "My headaches are worse in the morning or while im sleeping.",
			g: "None of the above below"
		},
		leap: {
			a: "A18",
			b: "A18",
			c: "A18",
			d: "A18",
			e: "A18",
			f: "A18",
			g: "A18"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 48
		question: "Does your ear hurt as well?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "A19",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 49
		question: "How does your ear bother you?",
		answers: {
			a: "I have hearing loss and ear pain.",
			b: "I have sharp pain in my ear.",
			c: "None of the above below"
		},
		leap: {
			a: "A20",
			b: "A20",
			c: "A20"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 50
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 51
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "A80"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 52
		question: "Does your head hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "A81",
			b: "A83"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 53
		question: "How does your head hurt?",
		answers: {
			a: "My head hurts  like it gets tightened.",
			b: "It feels like a splitting pain.",
			c: "I have a pounding headache.",
			d: "I have a headache with throbbing at my temples.",
			e: "The back of my head hurts.",
			f: "None of the above below"
		},
		leap: {
			a: "A82",
			b: "A82",
			c: "A82",
			d: "A82",
			e: "A82",
			f: "A82"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 54
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "I have a migrane.",
			c: "My pain doesn't subside even after I take pain medication.",
			d: "I feel more pain when I cough or move.",
			e: "I feel better after I take a deep breath or throw up.",
			f: "My headaches are worse in the morning or while im sleeping.",
			g: "None of the above below"
		},
		leap: {
			a: "A83",
			b: "A83",
			c: "A83",
			d: "A83",
			e: "A83",
			f: "A83",
			g: "A83"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 55
		question: "Did you pass out Are you forgetful Did you fall asleep frequently?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "A84",
			b: "A85"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 56
		question: "How long has your issue been like that? ",
		answers: {
			a: "I recovered within 24hrs.",
			b: "24?? ?? ??? ??.",
			c: "I haven't fainted or lost consciousness but I was sleepy."
		},
		leap: {
			a: "A85",
			b: "A85",
			c: "A85"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 57
		question: "Does your arm feel numb?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "A86",
			b: "A86"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 58
		question: "Do you feel weak on your arm or lose muscles?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "A87",
			b: "A87"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 59
		question: "Has your pronunciation went unclear or speaking went bad or you have issue with others well?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "A88",
			b: "A88"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 60
		question: "Do you get phlegm?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "A89",
			b: "A90"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 61
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have phlegm.",
			b: "I have sticky phlegm.",
			c: "I have yellow phlegm.",
			d: "I have blood in my phlegm.",
			e: "None of the above below"
		},
		leap: {
			a: "A90",
			b: "A90",
			c: "A90",
			d: "A90",
			e: "A90"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 62
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have discomfort in my chest when breathing  or when breathing through my mouth.",
			b: "When I exhale  it sounds very shallow.",
			c: "I have a short shallow breath. I breathe fast.",
			d: "I have a cough.",
			e: "None of the above below"
		},
		leap: {
			a: "A91",
			b: "A91",
			c: "A91",
			d: "A91",
			e: "A91"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 63
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I feel unusually dizzy.",
			b: "????? ??.",
			c: "I have a high fever.",
			d: "I have a light fever.",
			e: "My entire body has chills.",
			f: "None of the above below"
		},
		leap: {
			a: "A92",
			b: "A92",
			c: "A92",
			d: "A92",
			e: "A92",
			f: "A92"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 64
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I can't digest properly and feel bloated.",
			b: "My stomach feels gassy bloated.",
			c: "I have decreased appetite.",
			d: "I feel like I have to throw up or have already vomitted.",
			e: "I burp frequently.",
			f: "None of the above below"
		},
		leap: {
			a: "A93",
			b: "A93",
			c: "A93",
			d: "A93",
			e: "A93",
			f: "A93"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 65
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a runny nose.",
			b: "I have a stuffy nose and can't breathe well.",
			c: "I sneeze.",
			d: "None of the above below"
		},
		leap: {
			a: "A94",
			b: "A94",
			c: "A94",
			d: "A94"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 66
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My vision has worsened and I have double vision.",
			b: "The area between my ear and neck swelled and I feel a lump.",
			c: "I am sweating more than I used to.",
			d: "None of the above below"
		},
		leap: {
			a: "A95",
			b: "A95",
			c: "A95",
			d: "A95"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 67
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have numbness on my face or on the side of my face.",
			b: "My arms legs have twitched before.",
			c: "I have hypoesthesia.",
			d: "I do not feel like I have full range of motion when I move my neck (front  back  side to side).",
			e: "My body arms legs feel weak whenever I stand up walk.",
			f: "None of the above below"
		},
		leap: {
			a: "A96",
			b: "A96",
			c: "A96",
			d: "A96",
			e: "A96",
			f: "A96"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 68
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I smoke more than I used to.",
			b: "I have high blood pressue.",
			c: "I have cerebrovascular diseases.",
			d: "I have had a cold or periodontitis recently.",
			e: "None of the above below"
		},
		leap: {
			a: "A97",
			b: "A97",
			c: "A97",
			d: "A97",
			e: "A97"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 69
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have been exposed to AC for hours.",
			b: "I have been exposed to strong sun light for hours.",
			c: "I had an accident (Car accident Physical activity).",
			d: "My legs bend automatically when I bend my head forward while lying down. ",
			e: "None of the above below"
		},
		leap: {
			a: "A98",
			b: "A98",
			c: "A98",
			d: "A98",
			e: "A98"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 70
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "My chin hurts.",
			b: "My ear hurts.",
			c: "?(?)? ???.",
			d: "The back side of my neck hurts.",
			e: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 71
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "A130"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 72
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "????? ??.",
			b: "I have a high fever.",
			c: "I have a light fever.",
			d: "I am sweating more than I used to.",
			e: "None of the above below"
		},
		leap: {
			a: "A131",
			b: "A131",
			c: "A131",
			d: "A131",
			e: "A131"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 73
		question: "Did you pass out Are you forgetful Did you fall asleep frequently?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "A132",
			b: "A133"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 74
		question: "How long has your issue been like that? ",
		answers: {
			a: "I recovered within 24hrs.",
			b: "24?? ?? ??? ??.",
			c: "I haven't fainted or lost consciousness but I was sleepy."
		},
		leap: {
			a: "A133",
			b: "A133",
			c: "A133"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 75
		question: "Has your pronunciation went unclear or speaking went bad or you have issue with others well?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "A134",
			b: "A134"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 76
		question: "Does your eye skin get yellow?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "A135",
			b: "A135"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 77
		question: "Do you have mucus in your nose?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "A136",
			b: "A137"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 78
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My mucus from my nose is clear in color.",
			b: "I have yellow discharge from my nose.",
			c: "My mucus from my nose is sticky.",
			d: "None of the above below"
		},
		leap: {
			a: "A137",
			b: "A137",
			c: "A137",
			d: "A137"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 79
		question: "Do you cough?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "A138",
			b: "A139"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 80
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cough.",
			b: "I have a cough that sounds like a dogs bark.",
			c: "I have a cough that is dry.",
			d: "I cough frequently.",
			e: "I cough more at night.",
			f: "I cough very hard and it leaves me out of breath."
		},
		leap: {
			a: "A139",
			b: "A139",
			c: "A139",
			d: "A139",
			e: "A139",
			f: "A139"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 81
		question: "Do you get phlegm?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "A140",
			b: "A141"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 82
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have phlegm.",
			b: "I have sticky phlegm.",
			c: "I have yellow phlegm.",
			d: "I have blood in my phlegm.",
			e: "None of the above below"
		},
		leap: {
			a: "A141",
			b: "A141",
			c: "A141",
			d: "A141",
			e: "A141"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 83
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I am anxious and depressed.",
			b: "I feel unusually dizzy.",
			c: "I feel tired and dizzy.",
			d: "My legs bend automatically when I bend my head forward while lying down. ",
			e: "None of the above below"
		},
		leap: {
			a: "A142",
			b: "A142",
			c: "A142",
			d: "A142",
			e: "A142"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 84
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My entire body has chills.",
			b: "I lost weight very suddenly.",
			c: "The area between my ear and neck swelled and I feel a lump.",
			d: "My armpit is swollen and has a lump.",
			e: "I have a lump when I feel my upper thigh crease upper femoral region.",
			f: "None of the above below"
		},
		leap: {
			a: "A143",
			b: "A143",
			c: "A143",
			d: "A143",
			e: "A143",
			f: "A143"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 85
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I recently had a cold or periodontitis.",
			b: "I have been exposed to AC for hours.",
			c: "I have been exposed to strong sun light for hours.",
			d: "I have been outside in the sun or been in a place which felt hot .",
			e: "None of the above below"
		},
		leap: {
			a: "A144",
			b: "A144",
			c: "A144",
			d: "A144",
			e: "A144"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 86
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I feel like my chin is numb.",
			b: "I have unusual hand shakes tremors.",
			c: "I have numbness on my face or on the side of my face.",
			d: "My arms legs have twitched before.",
			e: "My eyes get blinded or hurt with light.",
			f: "My vision has worsened and I have double vision.",
			g: "None of the above below"
		},
		leap: {
			a: "A145",
			b: "A145",
			c: "A145",
			d: "A145",
			e: "A145",
			f: "A145",
			g: "A145"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 87
		question: "Does your cheek have a rash that looks like butterfly or do you have any ulcer over your mouth membranes?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "A146",
			b: "A147"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 88
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain in my joint.",
			b: "I experience chest pain that feels like it is inside of my chest.",
			c: "I have a headache.",
			d: "I feel tired and dizzy.",
			e: "None of the above below"
		},
		leap: {
			a: "A147",
			b: "A147",
			c: "A147",
			d: "A147",
			e: "A147"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 89
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I can't move my chin.",
			b: "I cannot open close my mouth.",
			c: "My body arms legs feel weak whenever I stand up walk.",
			d: "I have bad breath.",
			e: "None of the above below"
		},
		leap: {
			a: "A148",
			b: "A148",
			c: "A148",
			d: "A148",
			e: "A148"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 90
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a runny nose.",
			b: "I have a stuffy nose and can't breathe well.",
			c: "I sneeze.",
			d: "I can't swallow because of the discomfort in my neck.",
			e: "?? ?? ?? ? ?? ????.",
			f: "My voice sounds hoarse.",
			g: "None of the above below"
		},
		leap: {
			a: "A149",
			b: "A149",
			c: "A149",
			d: "A149",
			e: "A149",
			f: "A149",
			g: "A149"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 91
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have discomfort in my chest when breathing  or when breathing through my mouth.",
			b: "My face turns red.",
			c: "I have decreased appetite.",
			d: "I feel like I have to throw up or have already vomitted.",
			e: "None of the above below"
		},
		leap: {
			a: "A150",
			b: "A150",
			c: "A150",
			d: "A150",
			e: "A150"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 92
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "I have a headache.",
			b: "I feel pain in my upper abdomen.",
			c: "I have pain in my lower abdomen. ",
			d: "My chin hurts.",
			e: "My ear hurts.",
			f: "?(?)? ???.",
			g: "I experience chest pain that feels like it is inside of my chest.",
			h: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32",
			f: "32",
			g: "32",
			h: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 93
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "A190"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 94
		question: "Did you pass out Are you forgetful Did you fall asleep frequently?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "A191",
			b: "A192"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 95
		question: "How long has your issue been like that? ",
		answers: {
			a: "I recovered within 24hrs.",
			b: "24?? ?? ??? ??.",
			c: "I haven't fainted or lost consciousness but I was sleepy."
		},
		leap: {
			a: "A192",
			b: "A192",
			c: "A192"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 96
		question: "Has your pronunciation went unclear or speaking went bad or you have issue with others well?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "A193",
			b: "A193"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 97
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I had an accident (Car accident Physical activity).",
			b: "I feel unusually dizzy.",
			c: "None of the above below"
		},
		leap: {
			a: "A194",
			b: "A194",
			c: "A194"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 98
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "I have a light fever.",
			c: "My body temperature has dropped decreased.",
			d: "I have been outside in the sun or been in a place which felt hot .",
			e: "None of the above below"
		},
		leap: {
			a: "A195",
			b: "A195",
			c: "A195",
			d: "A195",
			e: "A195"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 99
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I smoke more than I used to.",
			b: "I drink more than I used to.",
			c: "I have diabetes.",
			d: "I have high blood pressue.",
			e: "I have cerebrovascular diseases.",
			f: "None of the above below"
		},
		leap: {
			a: "A196",
			b: "A196",
			c: "A196",
			d: "A196",
			e: "A196",
			f: "A196"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 100
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have numbness on my face or on the side of my face.",
			b: "My arms legs have twitched before.",
			c: "I have hypoesthesia.",
			d: "My vision has worsened and I have double vision.",
			e: "None of the above below"
		},
		leap: {
			a: "A197",
			b: "A197",
			c: "A197",
			d: "A197",
			e: "A197"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 101
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a short shallow breath. I breathe fast.",
			b: "I breathe slow.",
			c: "I feel like I have to throw up or have already vomitted.",
			d: "None of the above below"
		},
		leap: {
			a: "A198",
			b: "A198",
			c: "A198",
			d: "A198"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 102
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My face turns red.",
			b: "My face looks pale.",
			c: "None of the above below"
		},
		leap: {
			a: "A199",
			b: "A199",
			c: "A199"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 103
		question: "Does your head hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "A200",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 104
		question: "How does your head hurt?",
		answers: {
			a: "My head hurts  like it gets tightened.",
			b: "It feels like a splitting pain.",
			c: "I have a pounding headache.",
			d: "I have a headache with throbbing at my temples.",
			e: "None of the above below"
		},
		leap: {
			a: "A201",
			b: "A201",
			c: "A201",
			d: "A201",
			e: "A201"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 105
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "I have a migrane.",
			c: "My pain doesn't subside even after I take pain medication.",
			d: "I feel more pain when I cough or move.",
			e: "I feel better after I take a deep breath or throw up.",
			f: "My headaches are worse in the morning or while im sleeping.",
			g: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32",
			f: "32",
			g: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 106
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "B01"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 107
		question: "Has your eye been poked or hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "B02",
			b: "B02"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 108
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have diabetes.",
			b: "My eye is dry.",
			c: "I feel like my eye pops out.",
			d: "The white part of my eye turned red.",
			e: "None of the above below"
		},
		leap: {
			a: "B03",
			b: "B03",
			c: "B03",
			d: "B03",
			e: "B03"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 109
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cry more than I used to.",
			b: "I feel like something is in my eyes.",
			c: "I have eye boogers gunk.",
			d: "My eye is itchy.",
			e: "None of the above below"
		},
		leap: {
			a: "B04",
			b: "B04",
			c: "B04",
			d: "B04",
			e: "B04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 110
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My vision got blurry and I can't see very well.",
			b: "My eye is dazzed and tingles.",
			c: "I have double vision.",
			d: "I see dust or my vision gets murky as it draws curtains.",
			e: "I see something shinny or there is a glimmer in my eyes.",
			f: "The center of objects appear blurry or crooked.",
			g: "I see dark spots in the center of objects or I can't see some of the area.",
			h: "None of the above below"
		},
		leap: {
			a: "B05",
			b: "B05",
			c: "B05",
			d: "B05",
			e: "B05",
			f: "B05",
			g: "B05",
			h: "B05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 111
		question: "Take a look at the center of gridlines from 30cm away then select all of the followings below (multiple selection).",
		answers: {
			a: "I can't see the dot in the center of the gridlines.",
			b: "I cannot view the small sized grid.",
			c: "I am unable to see straight lines  they appear wavy.",
			d: "I see dimmed  or blank spaces  or twisted.",
			e: "None of the above below"
		},
		leap: {
			a: "B06",
			b: "B06",
			c: "B06",
			d: "B06",
			e: "B06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 112
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I smoke more than I used to.",
			b: "I enjoy eating foods like meat  pizza  burgers (fast food).",
			c: "None of the above below"
		},
		leap: {
			a: "B07",
			b: "B07",
			c: "B07"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 113
		question: "Do you have other part of your body hurt?",
		answers: {
			a: "I have a headache.",
			b: "My eye hurts.",
			c: "None of the above below"
		},
		leap: {
			a: "B08",
			b: "B10",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 114
		question: "How does your head hurt?",
		answers: {
			a: "My head hurts  like it gets tightened.",
			b: "It feels like a splitting pain.",
			c: "I have a pounding headache.",
			d: "I have a headache with throbbing at my temples.",
			e: "None of the above below"
		},
		leap: {
			a: "B09",
			b: "B09",
			c: "B09",
			d: "B09",
			e: "B09"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 115
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "I have a migrane.",
			c: "My pain doesn't subside even after I take pain medication.",
			d: "I feel more pain when I cough or move.",
			e: "I feel better after I take a deep breath or throw up.",
			f: "My headaches are worse in the morning or while im sleeping.",
			g: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32",
			f: "32",
			g: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 116
		question: "How does it hurt?",
		answers: {
			a: "My eye hurts like it wants to pop out.",
			b: "I feel a pulse in my eye.",
			c: "My eye is tingling.",
			d: "It feels lke a sharp stabbing pain.",
			e: "None of the above below"
		},
		leap: {
			a: "B11",
			b: "B11",
			c: "B11",
			d: "B11",
			e: "B11"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 117
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My pain doesn't subside even after I take pain medication.",
			b: "It hurts more when I blink or move my eyes.",
			c: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 118
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "B20"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 119
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have diabetes.",
			b: "The white part of my eye turned red.",
			c: "None of the above below"
		},
		leap: {
			a: "B11",
			b: "B11",
			c: "B11"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 120
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My vision got blurry and I can't see very well.",
			b: "My eye is dazzed and tingles.",
			c: "I have double vision.",
			d: "I see dust or my vision gets murky as it draws curtains.",
			e: "I see something shinny or there is a glimmer in my eyes.",
			f: "The center of objects appear blurry or crooked.",
			g: "I see dark spots in the center of objects or I can't see some of the area.",
			h: "None of the above below"
		},
		leap: {
			a: "B22",
			b: "B22",
			c: "B22",
			d: "B22",
			e: "B22",
			f: "B22",
			g: "B22",
			h: "B22"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 121
		question: "Take a look at the center of gridlines from 30cm away then select all of the followings below (multiple selection).",
		answers: {
			a: "I can't see the dot in the center of the gridlines.",
			b: "I cannot view the small sized grid.",
			c: "I am unable to see straight lines  they appear wavy.",
			d: "I see dimmed  or blank spaces  or twisted.",
			e: "None of the above below"
		},
		leap: {
			a: "B23",
			b: "B23",
			c: "B23",
			d: "B23",
			e: "B23"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 122
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I smoke more than I used to.",
			b: "I enjoy eating foods like meat  pizza  burgers (fast food).",
			c: "None of the above below"
		},
		leap: {
			a: "B24",
			b: "B24",
			c: "B24"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 123
		question: "Does your pupil get clouded?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "32",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 124
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "B30"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 125
		question: "Do you have diabetes?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "B31",
			b: "B31"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 126
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My vision got blurry and I can't see very well.",
			b: "My eye is dazzed and tingles.",
			c: "I have double vision.",
			d: "I see dust or my vision gets murky as it draws curtains.",
			e: "I see something shinny or there is a glimmer in my eyes.",
			f: "None of the above below"
		},
		leap: {
			a: "B32",
			b: "B32",
			c: "B32",
			d: "B32",
			e: "B32",
			f: "B32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 127
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cry more than I used to.",
			b: "I feel like something is in my eyes.",
			c: "I have eye boogers gunk.",
			d: "My eye is itchy.",
			e: "The white part of my eye turned red.",
			f: "I feel like my eye pops out.",
			g: "None of the above below"
		},
		leap: {
			a: "B33",
			b: "B33",
			c: "B33",
			d: "B33",
			e: "B33",
			f: "B33",
			g: "B33"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 128
		question: "Do you have other part of your body hurt?",
		answers: {
			a: "I have a headache.",
			b: "My eye hurts.",
			c: "None of the above below"
		},
		leap: {
			a: "B34",
			b: "B36",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 129
		question: "How does your head hurt?",
		answers: {
			a: "My head hurts  like it gets tightened.",
			b: "It feels like a splitting pain.",
			c: "I have a pounding headache.",
			d: "I have a headache with throbbing at my temples.",
			e: "None of the above below"
		},
		leap: {
			a: "B35",
			b: "B35",
			c: "B35",
			d: "B35",
			e: "B35"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 130
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "I have a migrane.",
			c: "My pain doesn't subside even after I take pain medication.",
			d: "I feel more pain when I cough or move.",
			e: "I feel better after I take a deep breath or throw up.",
			f: "My headaches are worse in the morning or while im sleeping.",
			g: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32",
			f: "32",
			g: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 131
		question: "How does it hurt?",
		answers: {
			a: "My eye hurts like it wants to pop out.",
			b: "I feel a pulse in my eye.",
			c: "My eye is tingling.",
			d: "It feels lke a sharp stabbing pain.",
			e: "None of the above below"
		},
		leap: {
			a: "B37",
			b: "B37",
			c: "B37",
			d: "B37",
			e: "B37"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 132
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My pain doesn't subside even after I take pain medication.",
			b: "It hurts more when I blink or move my eyes.",
			c: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 133
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "B40"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 134
		question: "Does your eye hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "B41",
			b: "B43"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 135
		question: "How does it hurt?",
		answers: {
			a: "My eye hurts like it wants to pop out.",
			b: "I feel a pulse in my eye.",
			c: "My eye is tingling.",
			d: "It feels lke a sharp stabbing pain.",
			e: "None of the above below"
		},
		leap: {
			a: "B42",
			b: "B42",
			c: "B42",
			d: "B42",
			e: "B42"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 136
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My pain doesn't subside even after I take pain medication.",
			b: "It hurts more when I blink or move my eyes.",
			c: "None of the above below"
		},
		leap: {
			a: "B43",
			b: "B43",
			c: "B43"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 137
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My vision got blurry and I can't see very well.",
			b: "My eye is dazzed and tingles.",
			c: "I got an infection on my eyelid.",
			d: "I feel like my eye pops out.",
			e: "None of the above below"
		},
		leap: {
			a: "B44",
			b: "B44",
			c: "B44",
			d: "B44",
			e: "B44"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 138
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cry more than I used to.",
			b: "I feel like something is in my eyes.",
			c: "I have eye boogers gunk.",
			d: "My eye is itchy.",
			e: "The white part of my eye turned red.",
			f: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32",
			f: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 139
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "B50"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 140
		question: "Which part of your eyes have issue with?",
		answers: {
			a: "White part of your eye",
			b: "?? ??"
		},
		leap: {
			a: "B51",
			b: "B70"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 141
		question: "Does your white part of eye turn yellow?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "B52",
			b: "B52"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 142
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a light fever.",
			b: "I lost weight very suddenly.",
			c: "I have decreased appetite.",
			d: "I drink more than I used to.",
			e: "None of the above below"
		},
		leap: {
			a: "B53",
			b: "B53",
			c: "B53",
			d: "B53",
			e: "B53"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 143
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I feel a lump on my upper abdomen.",
			b: "My stomach feels gassy bloated.",
			c: "My entire body is itchy.",
			d: "None of the above below"
		},
		leap: {
			a: "B54",
			b: "B54",
			c: "B54",
			d: "B54"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 144
		question: "Does your excrement have any issue?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "B55",
			b: "B57"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 145
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is difficult to poop defecate.",
			b: "My poop defecation leaks out unconsciously.",
			c: "After I poop defecate  I do not feel empty.",
			d: "I unusually urinate defecate frequently.",
			e: "I have constipation and am unable to poop defecate.",
			f: "None of the above below"
		},
		leap: {
			a: "B56",
			b: "B56",
			c: "B56",
			d: "B56",
			e: "B56",
			f: "B56"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 146
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I see red blood in my stool.",
			b: "My stool is dark  almost black in color.",
			c: "I have watery stool.",
			d: "I have phlegmatic diarreah.",
			e: "My stool doesn't look normal  it looks grey in color.",
			f: "I see grease floating on the toilet water with my stool.",
			g: "None of the above below"
		},
		leap: {
			a: "B57",
			b: "B57",
			c: "B57",
			d: "B57",
			e: "B57",
			f: "B57",
			g: "B57"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 147
		question: "Do you have any issue when you urinate? Or your urine doesn't look right?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "B58",
			b: "B60"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 148
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain during urination.",
			b: "I go to the bathroom very often to urinate.",
			c: "I unusually urinate frequently.",
			d: "I urinate longer than I used to.",
			e: "My urine doesn't come out normal when I try to urinate.",
			f: "It is difficult to hold my bladder  and after I urinate  it doesn't feel like I have emptied my bladder (feel like I still have to pee).",
			g: "None of the above below"
		},
		leap: {
			a: "B59",
			b: "B59",
			c: "B59",
			d: "B59",
			e: "B59",
			f: "B59",
			g: "B59"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 149
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The color of my urine looks more red than yellow. I think there is blood in my urine.",
			b: "My urine is darker. It is almost the color of coca-cola.",
			c: "My urine looks muddy.",
			d: "I have bubbles in my urine.",
			e: "None of the above below"
		},
		leap: {
			a: "B60",
			b: "B60",
			c: "B60",
			d: "B60",
			e: "B60"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 150
		question: "Select all parts of your body have pain.",
		answers: {
			a: "My back hurts (including shoulder).",
			b: "I feel pain in my upper abdomen.",
			c: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 151
		question: "Does your pupil get clouded?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "B71",
			b: "B71"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 152
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cry more than I used to.",
			b: "I feel like something is in my eyes.",
			c: "I have eye boogers gunk.",
			d: "My eye is itchy.",
			e: "The white part of my eye turned red.",
			f: "None of the above below"
		},
		leap: {
			a: "B72",
			b: "B72",
			c: "B72",
			d: "B72",
			e: "B72",
			f: "B72"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 153
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have diabetes.",
			b: "My eye is dry.",
			c: "I feel like my eye pops out.",
			d: "I got an infection on my eyelid.",
			e: "None of the above below"
		},
		leap: {
			a: "B73",
			b: "B73",
			c: "B73",
			d: "B73",
			e: "B73"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 154
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My vision got blurry and I can't see very well.",
			b: "My eye is dazzed and tingles.",
			c: "I have double vision.",
			d: "I see dust or my vision gets murky as it draws curtains.",
			e: "None of the above below"
		},
		leap: {
			a: "B74",
			b: "B74",
			c: "B74",
			d: "B74",
			e: "B74"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 155
		question: "Has your eye been poked or hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "B75",
			b: "B75"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 156
		question: "Select all parts of your body have pain.",
		answers: {
			a: "I have a headache.",
			b: "My eye hurts.",
			c: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 157
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "B91"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 158
		question: "Does your eye hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "B91",
			b: "B93"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 159
		question: "How does it hurt?",
		answers: {
			a: "My eye hurts like it wants to pop out.",
			b: "I feel a pulse in my eye.",
			c: "My eye is tingling.",
			d: "It feels lke a sharp stabbing pain.",
			e: "None of the above below"
		},
		leap: {
			a: "B92",
			b: "B92",
			c: "B92",
			d: "B92",
			e: "B92"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 160
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My pain doesn't subside even after I take pain medication.",
			b: "It hurts more when I blink or move my eyes.",
			c: "None of the above below"
		},
		leap: {
			a: "B93",
			b: "B93",
			c: "B93"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 161
		question: "Has your eye been poked or hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "B94",
			b: "B94"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 162
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My vision got blurry and I can't see very well.",
			b: "My eye is dazzed and tingles.",
			c: "I feel like my eye pops out.",
			d: "None of the above below"
		},
		leap: {
			a: "B95",
			b: "B95",
			c: "B95",
			d: "B95"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 163
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My eye is dry.",
			b: "I feel like something is in my eyes.",
			c: "I have eye boogers gunk.",
			d: "My eye is itchy.",
			e: "The white part of my eye turned red.",
			f: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32",
			f: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 164
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "C01"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 165
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I feel dizzy.",
			b: "????? ??.",
			c: "I have a light fever.",
			d: "My entire body has chills.",
			e: "None of the above below"
		},
		leap: {
			a: "C02",
			b: "C02",
			c: "C02",
			d: "C02",
			e: "C02"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 166
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My nose and throat are itchy.",
			b: "I sneeze.",
			c: "I have a runny nose.",
			d: "I have a stuffy nose and can't breathe well.",
			e: "None of the above below"
		},
		leap: {
			a: "C03",
			b: "C03",
			c: "C03",
			d: "C03",
			e: "C03"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 167
		question: "Do you have mucus in your nose?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "C04",
			b: "C05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 168
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My mucus from my nose is clear in color.",
			b: "I have yellow discharge from my nose.",
			c: "My mucus from my nose is sticky."
		},
		leap: {
			a: "C05",
			b: "C05",
			c: "C05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 169
		question: "Do you have difficulty with breathing?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "C06",
			b: "C07"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 170
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have discomfort in my chest when breathing  or when breathing through my mouth.",
			b: "When I exhale  it sounds very shallow.",
			c: "I have a short shallow breath. I breathe fast.",
			d: "None of the above below"
		},
		leap: {
			a: "C07",
			b: "C07",
			c: "C07",
			d: "C07"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 171
		question: "Do you cough?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "C08",
			b: "C09"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 172
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cough.",
			b: "I have a cough that sounds like a dogs bark.",
			c: "I have a cough that is dry.",
			d: "I cough frequently.",
			e: "I cough more at night.",
			f: "I cough very hard and it leaves me out of breath."
		},
		leap: {
			a: "C09",
			b: "C09",
			c: "C09",
			d: "C09",
			e: "C09",
			f: "C09"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 173
		question: "Do you get phlegm?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "C10",
			b: "C11"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 174
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have phlegm.",
			b: "I have sticky phlegm.",
			c: "I have yellow phlegm.",
			d: "I have blood in my phlegm."
		},
		leap: {
			a: "C11",
			b: "C11",
			c: "C11",
			d: "C11"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 175
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have unusually bad breath.",
			b: "I have decreased appetite.",
			c: "I feel like I have to throw up or have already vomitted.",
			d: "I feel like something is in my throat.",
			e: "I have been exposed to AC for hours.",
			f: "When I press next to my nose  it hurts.",
			g: "None of the above below"
		},
		leap: {
			a: "C12",
			b: "C12",
			c: "C12",
			d: "C12",
			e: "C12",
			f: "C12",
			g: "C12"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 176
		question: "Select all parts of your body have pain.",
		answers: {
			a: "I have a headache.",
			b: "?(?)? ???.",
			c: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 177
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "C30"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 178
		question: "Do you have difficulty with breathing?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "C31",
			b: "C32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 179
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have discomfort in my chest when breathing  or when breathing through my mouth.",
			b: "When I exhale  it sounds very shallow.",
			c: "I have a short shallow breath. I breathe fast.",
			d: "None of the above below"
		},
		leap: {
			a: "C32",
			b: "C32",
			c: "C32",
			d: "C32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 180
		question: "Do you cough?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "C33",
			b: "C34"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 181
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cough.",
			b: "I have a cough that sounds like a dogs bark.",
			c: "I have a cough that is dry.",
			d: "I cough frequently.",
			e: "I cough more at night.",
			f: "I cough very hard and it leaves me out of breath."
		},
		leap: {
			a: "C34",
			b: "C34",
			c: "C34",
			d: "C34",
			e: "C34",
			f: "C34"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 182
		question: "Do you get phlegm?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "C35",
			b: "C36"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 183
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have phlegm.",
			b: "I have sticky phlegm.",
			c: "I have yellow phlegm.",
			d: "I have blood in my phlegm."
		},
		leap: {
			a: "C36",
			b: "C36",
			c: "C36",
			d: "C36"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 184
		question: "Do you have mucus in your nose?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "C37",
			b: "C38"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 185
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My mucus from my nose is clear in color.",
			b: "I have yellow discharge from my nose.",
			c: "My mucus from my nose is sticky."
		},
		leap: {
			a: "C38",
			b: "C38",
			c: "C38"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 186
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My nose and throat are itchy.",
			b: "I sneeze.",
			c: "I have a runny nose.",
			d: "I have a stuffy nose and can't breathe well.",
			e: "None of the above below"
		},
		leap: {
			a: "C39",
			b: "C39",
			c: "C39",
			d: "C39",
			e: "C39"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 187
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have unusually bad breath.",
			b: "I feel like something is in my throat.",
			c: "When I press next to my nose  it hurts.",
			d: "None of the above below"
		},
		leap: {
			a: "C40",
			b: "C40",
			c: "C40",
			d: "C40"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 188
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I feel dizzy.",
			b: "????? ??.",
			c: "I have a light fever.",
			d: "None of the above below"
		},
		leap: {
			a: "C41",
			b: "C41",
			c: "C41",
			d: "C41"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 189
		question: "Select all parts of your body have pain.",
		answers: {
			a: "I have a headache.",
			b: "?(?)? ???.",
			c: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 190
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "C60"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 191
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I feel dizzy.",
			b: "????? ??.",
			c: "I have a light fever.",
			d: "My entire body has chills.",
			e: "None of the above below"
		},
		leap: {
			a: "C61",
			b: "C61",
			c: "C61",
			d: "C61",
			e: "C61"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 192
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My nose and throat are itchy.",
			b: "I sneeze.",
			c: "I have a stuffy nose and can't breathe well.",
			d: "None of the above below"
		},
		leap: {
			a: "C62",
			b: "C62",
			c: "C62",
			d: "C62"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 193
		question: "Do you have mucus in your nose?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "C63",
			b: "C64"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 194
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My mucus from my nose is clear in color.",
			b: "I have yellow discharge from my nose.",
			c: "My mucus from my nose is sticky."
		},
		leap: {
			a: "C64",
			b: "C64",
			c: "C64"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 195
		question: "Do you cough?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "C65",
			b: "C66"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 196
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cough.",
			b: "I have a cough that sounds like a dogs bark.",
			c: "I have a cough that is dry.",
			d: "I cough frequently.",
			e: "I cough more at night.",
			f: "I cough very hard and it leaves me out of breath."
		},
		leap: {
			a: "C66",
			b: "C66",
			c: "C66",
			d: "C66",
			e: "C66",
			f: "C66"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 197
		question: "Do you get phlegm?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "C67",
			b: "C68"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 198
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have phlegm.",
			b: "I have sticky phlegm.",
			c: "I have yellow phlegm.",
			d: "I have blood in my phlegm."
		},
		leap: {
			a: "C68",
			b: "C68",
			c: "C68",
			d: "C68"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 199
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have been exposed to AC for hours.",
			b: "I have decreased appetite.",
			c: "I feel like I have to throw up or have already vomitted.",
			d: "None of the above below"
		},
		leap: {
			a: "C69",
			b: "C69",
			c: "C69",
			d: "C69"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 200
		question: "Does your head hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "32",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 201
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "C80"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 202
		question: "Do you feel light heat on your body?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "C81",
			b: "C81"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 203
		question: "Do you have mucus in your nose?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "C82",
			b: "C83"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 204
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My mucus from my nose is clear in color.",
			b: "I have yellow discharge from my nose.",
			c: "My mucus from my nose is sticky.",
			d: "I have a runny nose.",
			e: "I can't breathe well because of my stuffy nose."
		},
		leap: {
			a: "C83",
			b: "C83",
			c: "C83",
			d: "C83",
			e: "C83"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 205
		question: "Do you cough?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "C84",
			b: "C85"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 206
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cough.",
			b: "I have a cough that sounds like a dogs bark.",
			c: "I have a cough that is dry.",
			d: "I cough frequently.",
			e: "I cough more at night.",
			f: "I cough very hard and it leaves me out of breath."
		},
		leap: {
			a: "C85",
			b: "C85",
			c: "C85",
			d: "C85",
			e: "C85",
			f: "C85"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 207
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have unusually bad breath.",
			b: "When I press next to my nose  it hurts.",
			c: "None of the above below"
		},
		leap: {
			a: "C86",
			b: "C86",
			c: "C86"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 208
		question: "Select all parts of your body have pain.",
		answers: {
			a: "I have a headache.",
			b: "My nose hurts.",
			c: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 209
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "D01"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 210
		question: "Did you pass out Are you forgetful Did you fall asleep frequently?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "D02",
			b: "D03"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 211
		question: "How long has your issue been like that? ",
		answers: {
			a: "I recovered within 24hrs.",
			b: "24?? ?? ??? ??.",
			c: "I haven't fainted or lost consciousness but I was sleepy."
		},
		leap: {
			a: "D03",
			b: "D03",
			c: "D03"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 212
		question: "Has your pronunciation went unclear or speaking went bad or you have issue with others well?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "D04",
			b: "D04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 213
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have numbness on my face or on the side of my face.",
			b: "My arms legs have twitched before.",
			c: "I have hypoesthesia.",
			d: "My vision has worsened and I have double vision.",
			e: "My vision is normal but I see blind spots.",
			f: "My eyes get blinded or hurt with light.",
			g: "None of the above below"
		},
		leap: {
			a: "D05",
			b: "D05",
			c: "D05",
			d: "D05",
			e: "D05",
			f: "D05",
			g: "D05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 214
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have experienced dizziness.",
			b: "My body arms legs feel weak whenever I stand up walk.",
			c: "I feel like I have to throw up or have already vomitted.",
			d: "None of the above below"
		},
		leap: {
			a: "D06",
			b: "D06",
			c: "D06",
			d: "D06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 215
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I smoke more than I used to.",
			b: "I drink more than I used to.",
			c: "I have diabetes.",
			d: "I have high blood pressue.",
			e: "None of the above below"
		},
		leap: {
			a: "D07",
			b: "D07",
			c: "D07",
			d: "D07",
			e: "D07"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 216
		question: "Does your head hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "D08",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 217
		question: "How does your head hurt?",
		answers: {
			a: "My head hurts  like it gets tightened.",
			b: "It feels like a splitting pain.",
			c: "I have a pounding headache.",
			d: "I have a headache with throbbing at my temples.",
			e: "None of the above below"
		},
		leap: {
			a: "D09",
			b: "D09",
			c: "D09",
			d: "D09",
			e: "D09"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 218
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "I have a migrane.",
			c: "My pain doesn't subside even after I take pain medication.",
			d: "I feel more pain when I cough or move.",
			e: "I feel better after I take a deep breath or throw up.",
			f: "My headaches are worse in the morning or while im sleeping.",
			g: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32",
			f: "32",
			g: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 219
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "D20"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 220
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My throat hurts and there is blood in my vomit.",
			b: "I have chest pain and blood in my vomit. ",
			c: "My upper abdomen hurts and I vomit blood.",
			d: "None of the above below"
		},
		leap: {
			a: "D21",
			b: "D21",
			c: "D21",
			d: "D21"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 221
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I feel unusually dizzy.",
			b: "I have a light fever.",
			c: "I am sweating more than I used to.",
			d: "I lost weight very suddenly.",
			e: "None of the above below"
		},
		leap: {
			a: "D22",
			b: "D22",
			c: "D22",
			d: "D22",
			e: "D22"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 222
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have decreased appetite.",
			b: "I feel like I have to throw up or have already vomitted.",
			c: "I can't digest properly and feel bloated.",
			d: "My stomach feels gassy bloated.",
			e: "My stool is dark  almost black in color.",
			f: "I have watery stool.",
			g: "None of the above below"
		},
		leap: {
			a: "D23",
			b: "D23",
			c: "D23",
			d: "D23",
			e: "D23",
			f: "D23",
			g: "D23"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 223
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I can't swallow because of the discomfort in my neck.",
			b: "I feel like something is in my throat.",
			c: "I have a lump on my throat.",
			d: "None of the above below"
		},
		leap: {
			a: "D24",
			b: "D24",
			c: "D24",
			d: "D24"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 224
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I smoke more than I used to.",
			b: "I drink more than I used to.",
			c: "None of the above below"
		},
		leap: {
			a: "D25",
			b: "D25",
			c: "D25"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 225
		question: "Do you have any spots looks like spider web on your neck chest stomach?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "D26",
			b: "D26"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 226
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have red palms soles.",
			b: "I get bruised easily and my gums are bleeding.",
			c: "My skin is darker.",
			d: "My finger toe nails are dry and brittle easy to break.",
			e: "None of the above below"
		},
		leap: {
			a: "D27",
			b: "D27",
			c: "D27",
			d: "D27",
			e: "D27"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 227
		question: "Do you have difficulty with breathing?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "D28",
			b: "D28"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 228
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have discomfort in my chest when breathing  or when breathing through my mouth.",
			b: "When I exhale  it sounds very shallow.",
			c: "I have a short shallow breath. I breathe fast.",
			d: "None of the above below"
		},
		leap: {
			a: "D29",
			b: "D29",
			c: "D29",
			d: "D29"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 229
		question: "Do you cough?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "D30",
			b: "D30"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 230
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cough.",
			b: "I have a cough that sounds like a dogs bark.",
			c: "I have a cough that is dry.",
			d: "I cough frequently.",
			e: "I cough more at night.",
			f: "I cough very hard and it leaves me out of breath."
		},
		leap: {
			a: "D31",
			b: "D31",
			c: "D31",
			d: "D31",
			e: "D31",
			f: "D31"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 231
		question: "Do you get phlegm?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "D32",
			b: "D32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 232
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have phlegm.",
			b: "I have sticky phlegm.",
			c: "I have yellow phlegm.",
			d: "I have blood in my phlegm."
		},
		leap: {
			a: "D33",
			b: "D33",
			c: "D33",
			d: "D33"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 233
		question: "Does your throat hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "D34",
			b: "D35"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 234
		question: "How does your throat hurt?",
		answers: {
			a: "I get a tingling feeling when I swallow saliva.",
			b: "I experience throat pain without talking.",
			c: "I get hot flashes.",
			d: "I feel like there is a scar in my throat.",
			e: "None of the above below"
		},
		leap: {
			a: "D35",
			b: "D35",
			c: "D35",
			d: "D35",
			e: "D35"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 235
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "My ear hurts.",
			b: "I experience chest pain that feels like it is inside of my chest.",
			c: "My back hurts (including shoulder).",
			d: "I feel pain in my upper abdomen.",
			e: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 236
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "D50"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 237
		question: "Do you have hard time to swallow food water?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "D51",
			b: "D51"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 238
		question: "Did you have something stuck in your throat eat something extremely hot?",
		answers: {
			a: "Fish bone got stuck in my throat.",
			b: "My throat hurts when I eat foods that are hot in temperature.",
			c: "No."
		},
		leap: {
			a: "D75",
			b: "D75",
			c: "D52"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 239
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "?? ?? ?? ??? ???? ??.",
			b: "My voice sounds hoarse.",
			c: "I have a lump on my throat.",
			d: "None of the above below"
		},
		leap: {
			a: "D53",
			b: "D53",
			c: "D53",
			d: "D53"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 240
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My chin feels numb.",
			b: "I cannot chew or move my mouth.",
			c: "None of the above below"
		},
		leap: {
			a: "D54",
			b: "D54",
			c: "D54"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 241
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I feel like I am getting body aches.",
			b: "I have a high fever.",
			c: "I have a light fever.",
			d: "My entire body has chills.",
			e: "I lost weight very suddenly.",
			f: "I have decreased appetite.",
			g: "None of the above below"
		},
		leap: {
			a: "D55",
			b: "D55",
			c: "D55",
			d: "D55",
			e: "D55",
			f: "D55",
			g: "D55"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 242
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I smoke more than I used to.",
			b: "I drink more than I used to.",
			c: "None of the above below"
		},
		leap: {
			a: "D56",
			b: "D56",
			c: "D56"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 243
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My throat hurts and there is blood in my vomit.",
			b: "I have chest pain and blood in my vomit. ",
			c: "None of the above below"
		},
		leap: {
			a: "D57",
			b: "D57",
			c: "D57"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 244
		question: "Has your pronunciation went unclear or speaking went bad or you have issue with others well?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "D58",
			b: "D58"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 245
		question: "Do you have difficulty with breathing?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "D59",
			b: "D60"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 246
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have discomfort in my chest when breathing  or when breathing through my mouth.",
			b: "When I exhale  it sounds very shallow.",
			c: "I have a short shallow breath. I breathe fast.",
			d: "None of the above below"
		},
		leap: {
			a: "D60",
			b: "D60",
			c: "D60",
			d: "D60"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 247
		question: "Do you cough?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "D61",
			b: "D62"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 248
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cough.",
			b: "I have a cough that sounds like a dogs bark.",
			c: "I have a cough that is dry.",
			d: "I cough frequently.",
			e: "I cough more at night.",
			f: "I cough very hard and it leaves me out of breath."
		},
		leap: {
			a: "D62",
			b: "D62",
			c: "D62",
			d: "D62",
			e: "D62",
			f: "D62"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 249
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "I have a headache.",
			b: "My chin hurts.",
			c: "My ear hurts.",
			d: "?(?)? ???.",
			e: "I experience chest pain that feels like it is inside of my chest.",
			f: "My back hurts (including shoulder).",
			g: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32",
			f: "32",
			g: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 250
		question: "Do you feel like something is in the throat?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "D76",
			b: "D76"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 251
		question: "Do you cough?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "D77",
			b: "D78"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 252
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cough.",
			b: "I have a cough that sounds like a dogs bark.",
			c: "I have a cough that is dry.",
			d: "I cough frequently.",
			e: "I cough more at night.",
			f: "I cough very hard and it leaves me out of breath."
		},
		leap: {
			a: "D78",
			b: "D78",
			c: "D78",
			d: "D78",
			e: "D78",
			f: "D78"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 253
		question: "Does your throat hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "D79",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 254
		question: "How does your throat hurt?",
		answers: {
			a: "I get a tingling feeling when I swallow saliva.",
			b: "I experience throat pain without talking.",
			c: "I get hot flashes.",
			d: "I feel like there is a scar in my throat.",
			e: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 255
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "D90"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 256
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have bad breath.",
			b: "Something that appeared like yellow rice grain came out of my mouth.",
			c: "I burp a lot.",
			d: "None of the above below"
		},
		leap: {
			a: "D91",
			b: "D91",
			c: "D91",
			d: "D91"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 257
		question: "Does your area between chin and neck get swollen or have lumps?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "D92",
			b: "D92"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 258
		question: "Do you have mucus in your nose?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "D93",
			b: "D95"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 259
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My mucus from my nose is clear in color.",
			b: "I have yellow discharge from my nose.",
			c: "My mucus from my nose is sticky.",
			d: "None of the above below"
		},
		leap: {
			a: "D94",
			b: "D94",
			c: "D94",
			d: "D94"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 260
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a runny nose.",
			b: "I have a stuffy nose and can't breathe well.",
			c: "None of the above below"
		},
		leap: {
			a: "D95",
			b: "D95",
			c: "D95"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 261
		question: "Do you cough?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "D96",
			b: "D97"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 262
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cough.",
			b: "I have a cough that sounds like a dogs bark.",
			c: "I have a cough that is dry.",
			d: "I cough frequently.",
			e: "I cough more at night.",
			f: "I cough very hard and it leaves me out of breath."
		},
		leap: {
			a: "D97",
			b: "D97",
			c: "D97",
			d: "D97",
			e: "D97",
			f: "D97"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 263
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "?? ?? ?? ??? ???? ??.",
			b: "My voice is hoarse.",
			c: "None of the above below"
		},
		leap: {
			a: "D98",
			b: "D98",
			c: "D98"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 264
		question: "Do you have any fever?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "D99",
			b: "D99"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 265
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I smoke more than I used to.",
			b: "I drink more than I used to.",
			c: "None of the above below"
		},
		leap: {
			a: "D100",
			b: "D100",
			c: "D100"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 266
		question: "Select all parts of your body have pain.",
		answers: {
			a: "I have a headache.",
			b: "My chin hurts.",
			c: "My ear hurts.",
			d: "?(?)? ???.",
			e: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 267
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "E01"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 268
		question: "Does your ear hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "E02",
			b: "E04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 269
		question: "How does your ear bother you?",
		answers: {
			a: "I have hearing loss and ear pain.",
			b: "I have sharp pain in my ear.",
			c: "None of the above below"
		},
		leap: {
			a: "E03",
			b: "E03",
			c: "E03"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 270
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "None of the above below"
		},
		leap: {
			a: "E04",
			b: "E04",
			c: "E04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 271
		question: "Does your chin hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "E05",
			b: "E07"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 272
		question: "How does your chin hurt?",
		answers: {
			a: "My chin feels stiff and painful.",
			b: "It feels like stabbing pain.",
			c: "I feel electrocution type pain.",
			d: "None of the above below"
		},
		leap: {
			a: "E06",
			b: "E06",
			c: "E06",
			d: "E06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 273
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "It is hard to speak due to the chin pain.",
			d: "None of the above below"
		},
		leap: {
			a: "E07",
			b: "E07",
			c: "E07",
			d: "E07"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 274
		question: "When you move your chin  does it make sound or have uneasiness?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "E08",
			b: "E08"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 275
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "I have a headache.",
			b: "?(?)? ???.",
			c: "None of the above below"
		},
		leap: {
			a: "E09",
			b: "E09",
			c: "E09"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 276
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I feel unusually dizzy.",
			b: "I have a high fever.",
			c: "I have a light fever.",
			d: "My entire body has chills.",
			e: "I can't sleep well at night.",
			f: "None of the above below"
		},
		leap: {
			a: "E10",
			b: "E10",
			c: "E10",
			d: "E10",
			e: "E10",
			f: "E10"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 277
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My ears feel heavy or filled.",
			b: "I have discharge in my ear.",
			c: "My ear is itchy.",
			d: "I can not hear it  or I can barely hear it.",
			e: "None of the above below"
		},
		leap: {
			a: "E11",
			b: "E11",
			c: "E11",
			d: "E11",
			e: "E11"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 278
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My chin feels numb.",
			b: "I cannot chew or move my mouth.",
			c: "It is hard to swallow food or water due to the pain in my throat.",
			d: "None of the above below"
		},
		leap: {
			a: "E12",
			b: "E12",
			c: "E12",
			d: "E12"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 279
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "??? ??? ???? ??.",
			b: "I recently had a cold or periodontitis.",
			c: "My pain starts when I begin eating.",
			d: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 280
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "E30"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 281
		question: "Do you feel dizzy more than you used to?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "E31",
			b: "E31"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 282
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My ears feel heavy or filled.",
			b: "I have discharge in my ear.",
			c: "My ear is itchy.",
			d: "I can not hear it  or I can barely hear it.",
			e: "None of the above below"
		},
		leap: {
			a: "E32",
			b: "E32",
			c: "E32",
			d: "E32",
			e: "E32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 283
		question: "Did you have any infectious sickness like a cold recently?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "E33",
			b: "E33"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 284
		question: "Do you have other part of your body hurt?",
		answers: {
			a: "I have a headache.",
			b: "My ear hurts.",
			c: "None of the above below"
		},
		leap: {
			a: "32",
			b: "E34",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 285
		question: "How does your ear bother you?",
		answers: {
			a: "I have hearing loss and ear pain.",
			b: "I have sharp pain in my ear.",
			c: "None of the above below"
		},
		leap: {
			a: "E35",
			b: "E35",
			c: "E35"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 286
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 287
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "F01"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 288
		question: "Did you have something stuck in your throat eat something extremely hot?",
		answers: {
			a: "Fish bone got stuck in my throat.",
			b: "My throat hurts when I eat foods that are hot in temperature.",
			c: "No."
		},
		leap: {
			a: "F25",
			b: "F25",
			c: "F02"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 289
		question: "Does your throat hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F03",
			b: "F04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 290
		question: "How does your throat hurt?",
		answers: {
			a: "I get a tingling feeling when I swallow saliva.",
			b: "I experience throat pain without talking.",
			c: "I get hot flashes.",
			d: "I feel like there is a scar in my throat.",
			e: "None of the above below"
		},
		leap: {
			a: "F04",
			b: "F04",
			c: "F04",
			d: "F04",
			e: "F04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 291
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is hard to swallow food or water due to the pain in my throat.",
			b: "?? ?? ?? ??? ???? ??.",
			c: "My voice sounds hoarse.",
			d: "I have a lump on my throat.",
			e: "None of the above below"
		},
		leap: {
			a: "F05",
			b: "F05",
			c: "F05",
			d: "F05",
			e: "F05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 292
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My chin feels numb.",
			b: "I cannot chew or move my mouth.",
			c: "I have bad breath.",
			d: "??? ?? ???.",
			e: "None of the above below"
		},
		leap: {
			a: "F06",
			b: "F06",
			c: "F06",
			d: "F06",
			e: "F06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 293
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I feel like I am getting body aches.",
			b: "I feel unusually dizzy.",
			c: "I have a high fever.",
			d: "I have a light fever.",
			e: "My entire body has chills.",
			f: "I lost weight very suddenly.",
			g: "I have decreased appetite.",
			h: "None of the above below"
		},
		leap: {
			a: "F07",
			b: "F07",
			c: "F07",
			d: "F07",
			e: "F07",
			f: "F07",
			g: "F07",
			h: "F07"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 294
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I smoke more than I used to.",
			b: "I drink more than I used to.",
			c: "None of the above below"
		},
		leap: {
			a: "F08",
			b: "F08",
			c: "F08"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 295
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My throat hurts and there is blood in my vomit.",
			b: "I have chest pain and blood in my vomit. ",
			c: "None of the above below"
		},
		leap: {
			a: "F09",
			b: "F09",
			c: "F09"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 296
		question: "Do you have difficulty with breathing?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F10",
			b: "F11"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 297
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have discomfort in my chest when breathing  or when breathing through my mouth.",
			b: "When I exhale  it sounds very shallow.",
			c: "I have a short shallow breath. I breathe fast.",
			d: "None of the above below"
		},
		leap: {
			a: "F11",
			b: "F11",
			c: "F11",
			d: "F11"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 298
		question: "Do you cough?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F12",
			b: "F13"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 299
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cough.",
			b: "I have a cough that sounds like a dogs bark.",
			c: "I have a cough that is dry.",
			d: "I cough frequently.",
			e: "I cough more at night.",
			f: "I cough very hard and it leaves me out of breath."
		},
		leap: {
			a: "F13",
			b: "F13",
			c: "F13",
			d: "F13",
			e: "F13",
			f: "F13"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 300
		question: "Do you have mucus in your nose?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F14",
			b: "F15"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 301
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My mucus from my nose is clear in color.",
			b: "I have yellow discharge from my nose.",
			c: "My mucus from my nose is sticky.",
			d: "None of the above below"
		},
		leap: {
			a: "F15",
			b: "F15",
			c: "F15",
			d: "F15"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 302
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "I have a headache.",
			b: "My ear hurts.",
			c: "I experience chest pain that feels like it is inside of my chest.",
			d: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 303
		question: "Does your throat hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F26",
			b: "F27"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 304
		question: "How does your throat hurt?",
		answers: {
			a: "I get a tingling feeling when I swallow saliva.",
			b: "I experience throat pain without talking.",
			c: "I get hot flashes.",
			d: "I feel like there is a scar in my throat.",
			e: "None of the above below"
		},
		leap: {
			a: "F27",
			b: "F27",
			c: "F27",
			d: "F27",
			e: "F27"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 305
		question: "Do you have hard time to swallow food water?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F28",
			b: "F28"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 306
		question: "Do you feel like something is in the throat?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F29",
			b: "F29"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 307
		question: "Do you cough?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F30",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 308
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cough.",
			b: "I have a cough that sounds like a dogs bark.",
			c: "I have a cough that is dry.",
			d: "I cough frequently.",
			e: "I cough more at night.",
			f: "I cough very hard and it leaves me out of breath."
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32",
			f: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 309
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "F40"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 310
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is hard to swallow food or water due to the pain in my throat.",
			b: "I feel like something is in my throat.",
			c: "My voice sounds hoarse.",
			d: "I have a lump on my throat.",
			e: "None of the above below"
		},
		leap: {
			a: "F41",
			b: "F41",
			c: "F41",
			d: "F41",
			e: "F41"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 311
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My throat hurts and there is blood in my vomit.",
			b: "I have chest pain and blood in my vomit. ",
			c: "None of the above below"
		},
		leap: {
			a: "F42",
			b: "F42",
			c: "F42"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 312
		question: "Do you have difficulty with breathing?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F43",
			b: "F44"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 313
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have discomfort in my chest when breathing  or when breathing through my mouth.",
			b: "When I exhale  it sounds very shallow.",
			c: "I have a short shallow breath. I breathe fast.",
			d: "None of the above below"
		},
		leap: {
			a: "F44",
			b: "F44",
			c: "F44",
			d: "F44"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 314
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I smoke more than I used to.",
			b: "I drink more than I used to.",
			c: "None of the above below"
		},
		leap: {
			a: "F45",
			b: "F45",
			c: "F45"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 315
		question: "Did you lose weight recently?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F46",
			b: "F46"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 316
		question: "Does your throat hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F47",
			b: "F48"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 317
		question: "How does your throat hurt?",
		answers: {
			a: "I get a tingling feeling when I swallow saliva.",
			b: "I experience throat pain without talking.",
			c: "I get hot flashes.",
			d: "I feel like there is a scar in my throat.",
			e: "None of the above below"
		},
		leap: {
			a: "F48",
			b: "F48",
			c: "F48",
			d: "F48",
			e: "F48"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 318
		question: "Does your ear hurt as well?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F49",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 319
		question: "How does your ear bother you?",
		answers: {
			a: "I have hearing loss and ear pain.",
			b: "I have sharp pain in my ear.",
			c: "None of the above below"
		},
		leap: {
			a: "F50",
			b: "F50",
			c: "F50"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 320
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 321
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "F60"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 322
		question: "Do you cough?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F61",
			b: "F63"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 323
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cough.",
			b: "I have a cough that sounds like a dogs bark.",
			c: "I have a cough that is dry.",
			d: "I cough frequently.",
			e: "I cough more at night.",
			f: "I cough very hard and it leaves me out of breath."
		},
		leap: {
			a: "F62",
			b: "F62",
			c: "F62",
			d: "F62",
			e: "F62",
			f: "F62"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 324
		question: "Did you get blood when you cough",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F63",
			b: "F63"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 325
		question: "Do you have mucus in your nose?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F64",
			b: "F65"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 326
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My mucus from my nose is clear in color.",
			b: "I have yellow discharge from my nose.",
			c: "My mucus from my nose is sticky.",
			d: "None of the above below"
		},
		leap: {
			a: "F65",
			b: "F65",
			c: "F65",
			d: "F65"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 327
		question: "Do you have difficulty with breathing?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F66",
			b: "F67"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 328
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have discomfort in my chest when breathing  or when breathing through my mouth.",
			b: "When I exhale  it sounds very shallow.",
			c: "I have a short shallow breath. I breathe fast.",
			d: "None of the above below"
		},
		leap: {
			a: "F67",
			b: "F67",
			c: "F67",
			d: "F67"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 329
		question: "Do you get phlegm?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F68",
			b: "F69"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 330
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have phlegm.",
			b: "I have sticky phlegm.",
			c: "I have yellow phlegm.",
			d: "I have blood in my phlegm."
		},
		leap: {
			a: "F69",
			b: "F69",
			c: "F69",
			d: "F69"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 331
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I feel like I am getting body aches.",
			b: "I feel unusually dizzy.",
			c: "I have a high fever.",
			d: "I have a light fever.",
			e: "My entire body has chills.",
			f: "I am sweating more than I used to.",
			g: "I lost weight very suddenly.",
			h: "None of the above below"
		},
		leap: {
			a: "F70",
			b: "F70",
			c: "F70",
			d: "F70",
			e: "F70",
			f: "F70",
			g: "F70",
			h: "F70"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 332
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My nose and throat are itchy.",
			b: "I sneeze.",
			c: "I have a stuffy nose and can't breathe well.",
			d: "None of the above below"
		},
		leap: {
			a: "F71",
			b: "F71",
			c: "F71",
			d: "F71"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 333
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have bad breath.",
			b: "I have decreased appetite.",
			c: "I feel like I have to throw up or have already vomitted.",
			d: "??? ?? ???.",
			e: "None of the above below"
		},
		leap: {
			a: "F72",
			b: "F72",
			c: "F72",
			d: "F72",
			e: "F72"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 334
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is hard to swallow food or water due to the pain in my throat.",
			b: "?? ?? ?? ??? ???? ??.",
			c: "My voice sounds hoarse.",
			d: "None of the above below"
		},
		leap: {
			a: "F73",
			b: "F73",
			c: "F73",
			d: "F73"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 335
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I smoke more than I used to.",
			b: "I drink more than I used to.",
			c: "None of the above below"
		},
		leap: {
			a: "F74",
			b: "F74",
			c: "F74"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 336
		question: "Select all parts of your body have pain.",
		answers: {
			a: "I have a headache.",
			b: "My ear hurts.",
			c: "?(?)? ???.",
			d: "I experience chest pain that feels like it is inside of my chest.",
			e: "My back hurts (including shoulder).",
			f: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32",
			f: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 337
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "F90"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 338
		question: "Do you get phlegm?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F91",
			b: "F92"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 339
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have phlegm.",
			b: "I have sticky phlegm.",
			c: "I have yellow phlegm.",
			d: "I have blood in my phlegm."
		},
		leap: {
			a: "F92",
			b: "F92",
			c: "F92",
			d: "F92"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 340
		question: "Do you cough?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F93",
			b: "F94"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 341
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cough.",
			b: "I have a cough that sounds like a dogs bark.",
			c: "I have a cough that is dry.",
			d: "I cough frequently.",
			e: "I cough more at night.",
			f: "I cough very hard and it leaves me out of breath."
		},
		leap: {
			a: "F94",
			b: "F94",
			c: "F94",
			d: "F94",
			e: "F94",
			f: "F94"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 342
		question: "Do you have mucus in your nose?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F95",
			b: "F96"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 343
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My mucus from my nose is clear in color.",
			b: "I have yellow discharge from my nose.",
			c: "My mucus from my nose is sticky.",
			d: "None of the above below"
		},
		leap: {
			a: "F96",
			b: "F96",
			c: "F96",
			d: "F96"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 344
		question: "Do you have difficulty with breathing?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F97",
			b: "F98"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 345
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have discomfort in my chest when breathing  or when breathing through my mouth.",
			b: "When I exhale  it sounds very shallow.",
			c: "I have a short shallow breath. I breathe fast.",
			d: "None of the above below"
		},
		leap: {
			a: "F98",
			b: "F98",
			c: "F98",
			d: "F98"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 346
		question: "Do you smoke?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F99",
			b: "F99"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 347
		question: "Do you feel like something is in the throat?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F100",
			b: "F100"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 348
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I feel like I am getting body aches.",
			b: "I feel unusually dizzy.",
			c: "I have a high fever.",
			d: "I have a light fever.",
			e: "My entire body has chills.",
			f: "I am sweating more than I used to.",
			g: "I lost weight very suddenly.",
			h: "None of the above below"
		},
		leap: {
			a: "F101",
			b: "F101",
			c: "F101",
			d: "F101",
			e: "F101",
			f: "F101",
			g: "F101",
			h: "F101"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 349
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have decreased appetite.",
			b: "I feel like I have to throw up or have already vomitted.",
			c: "I have a stuffy nose and can't breathe well.",
			d: "None of the above below"
		},
		leap: {
			a: "F102",
			b: "F102",
			c: "F102",
			d: "F102"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 350
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My throat hurts and there is blood in my vomit.",
			b: "I have chest pain and blood in my vomit. ",
			c: "None of the above below"
		},
		leap: {
			a: "F103",
			b: "F103",
			c: "F103"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 351
		question: "Select all parts of your body have pain.",
		answers: {
			a: "I have a headache.",
			b: "?(?)? ???.",
			c: "I experience chest pain that feels like it is inside of my chest.",
			d: "My back hurts (including shoulder).",
			e: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 352
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "F120"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 353
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My nose and throat are itchy.",
			b: "I sneeze.",
			c: "I have a stuffy nose and can't breathe well.",
			d: "None of the above below"
		},
		leap: {
			a: "F121",
			b: "F121",
			c: "F121",
			d: "F121"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 354
		question: "Do you have mucus in your nose?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F122",
			b: "F123"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 355
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My mucus from my nose is clear in color.",
			b: "I have yellow discharge from my nose.",
			c: "My mucus from my nose is sticky.",
			d: "None of the above below"
		},
		leap: {
			a: "F123",
			b: "F123",
			c: "F123",
			d: "F123"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 356
		question: "Do you have difficulty with breathing?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F124",
			b: "F125"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 357
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have discomfort in my chest when breathing  or when breathing through my mouth.",
			b: "When I exhale  it sounds very shallow.",
			c: "I have a short shallow breath. I breathe fast.",
			d: "None of the above below"
		},
		leap: {
			a: "F125",
			b: "F125",
			c: "F125",
			d: "F125"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 358
		question: "Do you cough?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F126",
			b: "F127"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 359
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cough.",
			b: "I have a cough that sounds like a dogs bark.",
			c: "I have a cough that is dry.",
			d: "I cough frequently.",
			e: "I cough more at night.",
			f: "I cough very hard and it leaves me out of breath."
		},
		leap: {
			a: "F127",
			b: "F127",
			c: "F127",
			d: "F127",
			e: "F127",
			f: "F127"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 360
		question: "Do you get phlegm?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F128",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 361
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have phlegm.",
			b: "I have sticky phlegm.",
			c: "I have yellow phlegm.",
			d: "I have blood in my phlegm."
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 362
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "F130"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 363
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is hard to swallow food or water due to the pain in my throat.",
			b: "?? ?? ?? ??? ???? ??.",
			c: "I have a lump on my throat.",
			d: "None of the above below"
		},
		leap: {
			a: "F131",
			b: "F132",
			c: "F132",
			d: "F132"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 364
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a light fever.",
			b: "I lost weight very suddenly.",
			c: "None of the above below"
		},
		leap: {
			a: "F132",
			b: "F132",
			c: "F132"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 365
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I smoke more than I used to.",
			b: "I drink more than I used to.",
			c: "None of the above below"
		},
		leap: {
			a: "F133",
			b: "F133",
			c: "F133"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 366
		question: "Do you have difficulty with breathing?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F134",
			b: "F135"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 367
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have discomfort in my chest when breathing  or when breathing through my mouth.",
			b: "When I exhale  it sounds very shallow.",
			c: "I have a short shallow breath. I breathe fast.",
			d: "None of the above below"
		},
		leap: {
			a: "F135",
			b: "F135",
			c: "F135",
			d: "F135"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 368
		question: "Do you cough?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F136",
			b: "F137"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 369
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cough.",
			b: "I have a cough that sounds like a dogs bark.",
			c: "I have a cough that is dry."
		},
		leap: {
			a: "F137",
			b: "F137",
			c: "F137"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 370
		question: "Does your throat hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "F138",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 371
		question: "How does your throat hurt?",
		answers: {
			a: "I get a tingling feeling when I swallow saliva.",
			b: "I experience throat pain without talking.",
			c: "I get hot flashes.",
			d: "I feel like there is a scar in my throat.",
			e: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 372
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "G01"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 373
		question: "Do you feel the pain in the back of your neck?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "G02",
			b: "G04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 374
		question: "How does it hurt?",
		answers: {
			a: "I can't turn my neck due to pain.",
			b: "I feel pain and stiffness.",
			c: "It hurts like it's pulled.",
			d: "None of the above below"
		},
		leap: {
			a: "G03",
			b: "G03",
			c: "G03",
			d: "G03"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 375
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "It hurts more when I move.",
			c: "My pain doesn't subside even after I take pain medication.",
			d: "None of the above below"
		},
		leap: {
			a: "G04",
			b: "G04",
			c: "G04",
			d: "G04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 376
		question: "Are you not able to lift or spin due to the arm pain?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "G05",
			b: "G05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 377
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "My forehead and top front part of my head hurts.",
			b: "The back side of my head hurts.",
			c: "My back hurts (including shoulder).",
			d: "My shoulder hurts.",
			e: "My arm hurts.",
			f: "None of the above below"
		},
		leap: {
			a: "G06",
			b: "G06",
			c: "G06",
			d: "G06",
			e: "G06",
			f: "G06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 378
		question: "Does your arm feel numb?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "G07",
			b: "G07"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 379
		question: "Do you feel weak on your arm or lose muscles?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "G08",
			b: "G08"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 380
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "?? ???? ??? ??? ????.",
			b: "My finger(s) feel numb  or less sensitive.",
			c: "I do not feel like I have full range of motion when I move my neck (front  back  side to side).",
			d: "My legs bend automatically when I bend my head forward while lying down. ",
			e: "It is hard to move my shoulders.",
			f: "I can't sleep well at night.",
			g: "I use computer or smartphone frequently.",
			h: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32",
			f: "32",
			g: "32",
			h: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 381
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "H01"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 382
		question: "Have you had any accidents (Car accident bumped in hurt while workout)?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "H30",
			b: "H02"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 383
		question: "Does your sholder hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "H03",
			b: "H05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 384
		question: "How does your sholder hurt?",
		answers: {
			a: "My shoulder feels numb.",
			b: "My shoulder feels like it is throbbing.",
			c: "I have a stabbing pain.",
			d: "I have stiffness in my shoulder.",
			e: "None of the above below"
		},
		leap: {
			a: "H04",
			b: "H04",
			c: "H04",
			d: "H04",
			e: "H04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 385
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "??? ? ? ???.",
			d: "When I lay down on my side  my shoulder hurts and it is hard to stretch my arms behind me.",
			e: "None of the above below"
		},
		leap: {
			a: "H05",
			b: "H05",
			c: "H05",
			d: "H05",
			e: "H05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 386
		question: "Does your chest hurt as well?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "H06",
			b: "H07"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 387
		question: "when you breath or move  does your chest hurt more?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "H07",
			b: "H07"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 388
		question: "Does your arm hurt as well?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "H08",
			b: "H09"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 389
		question: "Are you not able to lift or spin due to the arm pain?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "H09",
			b: "H09"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 390
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "The back side of my head hurts.",
			b: "The back side of my neck hurts.",
			c: "My hand hurts.",
			d: "My finger(s) hurt.",
			e: "None of the above below"
		},
		leap: {
			a: "H10",
			b: "H10",
			c: "H10",
			d: "H10",
			e: "H10"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 391
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "My entire body has chills.",
			c: "I am sweating more than I used to.",
			d: "None of the above below"
		},
		leap: {
			a: "H11",
			b: "H11",
			c: "H11",
			d: "H11"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 392
		question: "Does your arm feel numb?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "H12",
			b: "H12"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 393
		question: "Do you feel weak on your arm or lose muscles?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "H13",
			b: "H13"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 394
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My hand(s) feel numb or have lost sensation.",
			b: "My finger(s) feel numb  or less sensitive.",
			c: "None of the above below"
		},
		leap: {
			a: "H14",
			b: "H14",
			c: "H14"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 395
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I do not feel like I have full range of motion when I move my neck (front  back  side to side).",
			b: "It is hard to move my shoulders.",
			c: "I am unable to sleep at night due to shoulder pain.",
			d: "I use computer or smartphone frequently.",
			e: "None of the above below"
		},
		leap: {
			a: "H15",
			b: "H15",
			c: "H15",
			d: "H15",
			e: "H15"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 396
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I lift my arm or rotate my shoulder  it hurts more.",
			b: "My shoulder is in pain and swollen.",
			c: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 397
		question: "Does your sholder hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "H31",
			b: "H33"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 398
		question: "How does your sholder hurt?",
		answers: {
			a: "My shoulder feels numb.",
			b: "My shoulder feels like it is throbbing.",
			c: "I have a stabbing pain.",
			d: "I have stiffness in my shoulder.",
			e: "None of the above below"
		},
		leap: {
			a: "H32",
			b: "H32",
			c: "H32",
			d: "H32",
			e: "H32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 399
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "??? ? ? ???.",
			d: "When I lay down on my side  my shoulder hurts and it is hard to stretch my arms behind me.",
			e: "None of the above below"
		},
		leap: {
			a: "H33",
			b: "H33",
			c: "H33",
			d: "H33",
			e: "H33"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 400
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "I experience chest pain that feels like it is inside of my chest.",
			b: "My arm hurts.",
			c: "The back side of my head hurts.",
			d: "The back side of my neck hurts.",
			e: "My hand hurts.",
			f: "My finger(s) hurt.",
			g: "None of the above below"
		},
		leap: {
			a: "H34",
			b: "H35",
			c: "H36",
			d: "H36",
			e: "H36",
			f: "H36",
			g: "H36"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 401
		question: "when you breath or move  does your chest hurt more?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "H36",
			b: "H36"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 402
		question: "Are you not able to lift or spin due to the arm pain?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "H36",
			b: "H36"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 403
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "My entire body has chills.",
			c: "I am sweating more than I used to.",
			d: "None of the above below"
		},
		leap: {
			a: "H37",
			b: "H37",
			c: "H37",
			d: "H37"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 404
		question: "Does your arm feel numb?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "H38",
			b: "H38"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 405
		question: "Do you feel weak on your arm or lose muscles?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "H39",
			b: "H39"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 406
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My hand(s) feel numb or have lost sensation.",
			b: "My finger(s) feel numb  or less sensitive.",
			c: "None of the above below"
		},
		leap: {
			a: "H40",
			b: "H40",
			c: "H40"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 407
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I do not feel like I have full range of motion when I move my neck (front  back  side to side).",
			b: "It is hard to move my shoulders.",
			c: "I am unable to sleep at night due to shoulder pain.",
			d: "I use computer or smartphone frequently.",
			e: "None of the above below"
		},
		leap: {
			a: "H41",
			b: "H41",
			c: "H41",
			d: "H41",
			e: "H41"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 408
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I feel like my shoulder dislocated.",
			b: "I have sprained my shoulder excessively.",
			c: "I have pain and when I press on the painful area  it increases my pain.",
			d: "I feel numb decreased sensation on my arm hand fingers.",
			e: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 409
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "H60"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 410
		question: "Do you have any numbness on your sholder?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "H61",
			b: "H61"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 411
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My hand(s) feel numb or have lost sensation.",
			b: "My finger(s) feel numb  or less sensitive.",
			c: "None of the above below"
		},
		leap: {
			a: "H62",
			b: "H62",
			c: "H62"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 412
		question: "Does your sholder hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "H63",
			b: "H65"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 413
		question: "How does your sholder hurt?",
		answers: {
			a: "My shoulder feels numb.",
			b: "My shoulder feels like it is throbbing.",
			c: "I have a stabbing pain.",
			d: "I have stiffness in my shoulder.",
			e: "None of the above below"
		},
		leap: {
			a: "H64",
			b: "H64",
			c: "H64",
			d: "H64",
			e: "H64"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 414
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "??? ? ? ???.",
			d: "When I lay down on my side  my shoulder hurts and it is hard to stretch my arms behind me.",
			e: "None of the above below"
		},
		leap: {
			a: "H65",
			b: "H65",
			c: "H65",
			d: "H65",
			e: "H65"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 415
		question: "Select which part of your body have pain other than your shoulder.",
		answers: {
			a: "My arm hurts.",
			b: "The back side of my neck hurts.",
			c: "My hand hurts.",
			d: "My finger(s) hurt.",
			e: "None of the above below"
		},
		leap: {
			a: "H66",
			b: "H66",
			c: "H66",
			d: "H66",
			e: "H66"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 416
		question: "Do you feel weak on your arm or lose muscles?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "32",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 417
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "I01"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 418
		question: "Have you had any accidents (Car accident bumped in hurt while workout)?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "I30",
			b: "I02"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 419
		question: "Does your elbow hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "I03",
			b: "I05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 420
		question: "How does your elbow hurt?",
		answers: {
			a: "My elbow hurts all over.",
			b: "I feel stabbing and numbness. I feel stabbing sharp pain.",
			c: "I feel inflammation that is hot.",
			d: "None of the above below"
		},
		leap: {
			a: "I04",
			b: "I04",
			c: "I04",
			d: "I04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 421
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "It hurts more when my elbow move.",
			d: "None of the above below"
		},
		leap: {
			a: "I05",
			b: "I05",
			c: "I05",
			d: "I05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 422
		question: "Place your palm faces down toward ground with straight your elbow. Clench your fist. Then when you lift back of your hand up  does it hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "I06",
			b: "I06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 423
		question: "Place your palm faces up toward ceiling with straight your elbow. When bend your palm and fingers toward to the wrist  does it hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "I07",
			b: "I07"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 424
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I recently developed scars around the affected area.",
			b: "My painful area gets swollen and looks red and feels hot.",
			c: "My painful area has a fungus  or my skin is festered infected.",
			d: "It hurts when I press on the painful area.",
			e: "None of the above below"
		},
		leap: {
			a: "I08",
			b: "I08",
			c: "I08",
			d: "I08",
			e: "I08"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 425
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "I have a light fever.",
			c: "I have chills all over my body.",
			d: "None of the above below"
		},
		leap: {
			a: "I09",
			b: "I09",
			c: "I09",
			d: "I09"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 426
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "Both of my elbows are in pain and swollen.",
			b: "It hurts more when my elbow move.",
			c: "My pain is severe in the morning.",
			d: "My pain is worse at night.",
			e: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 427
		question: "Does your elbow hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "I31",
			b: "I33"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 428
		question: "How does your elbow hurt?",
		answers: {
			a: "My elbow hurts all over.",
			b: "I feel stabbing and numbness. I feel stabbing sharp pain.",
			c: "I feel inflammation that is hot.",
			d: "None of the above below"
		},
		leap: {
			a: "I32",
			b: "I32",
			c: "I32",
			d: "I32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 429
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "It hurts more when my elbow move.",
			d: "None of the above below"
		},
		leap: {
			a: "I33",
			b: "I33",
			c: "I33",
			d: "I33"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 430
		question: "Place your palm faces down toward ground with straight your elbow. Clench your fist. Then when you lift back of your hand up  does it hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "I34",
			b: "I34"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 431
		question: "Place your palm faces up toward ceiling with straight your elbow. When bend your palm and fingers toward to the wrist  does it hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "I35",
			b: "I35"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 432
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I recently developed scars around the affected area.",
			b: "My painful area gets swollen and looks red and feels hot.",
			c: "My painful area has a fungus  or my skin is festered infected.",
			d: "It hurts when I press on the painful area.",
			e: "None of the above below"
		},
		leap: {
			a: "I36",
			b: "I36",
			c: "I36",
			d: "I36",
			e: "I36"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 433
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "I have a light fever.",
			c: "I have chills all over my body.",
			d: "None of the above below"
		},
		leap: {
			a: "I37",
			b: "I37",
			c: "I37",
			d: "I37"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 434
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My bruising and swelling don?t seem to be getting better after 3 days.",
			b: "My bruising and swelling are getting better.",
			c: "I have sprained my elbow before.",
			d: "None of the above below"
		},
		leap: {
			a: "I38",
			b: "I38",
			c: "I38",
			d: "I38"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 435
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain and when I press on the painful area  it increases my pain.",
			b: "When I tap my wrist  my elbow hurts.",
			c: "When someone helps me move  My elbow hurts so bad I can't move it.",
			d: "When someone helps me move  I can move my knee a little bit.",
			e: "My affected arm was twisted or looks twisted at an angle.",
			f: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32",
			f: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 436
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "I50"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 437
		question: "Do you feel like your elbow is numb?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "I51",
			b: "I51"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 438
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My hand(s) feel numb or have lost sensation.",
			b: "My finger(s) feel numb  or less sensitive.",
			c: "None of the above below"
		},
		leap: {
			a: "I52",
			b: "I52",
			c: "I52"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 439
		question: "Does your sholder hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "I53",
			b: "I55"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 440
		question: "How does your sholder hurt?",
		answers: {
			a: "My shoulder feels numb.",
			b: "My shoulder feels like it is throbbing.",
			c: "I have a stabbing pain.",
			d: "I have stiffness in my shoulder.",
			e: "None of the above below"
		},
		leap: {
			a: "I54",
			b: "I54",
			c: "I54",
			d: "I54",
			e: "I54"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 441
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "??? ? ? ???.",
			d: "When I lay down on my side  my shoulder hurts and it is hard to stretch my arms behind me.",
			e: "None of the above below"
		},
		leap: {
			a: "I55",
			b: "I55",
			c: "I55",
			d: "I55",
			e: "I55"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 442
		question: "Select which part of your body have pain other than your shoulder.",
		answers: {
			a: "My arm hurts.",
			b: "The back side of my neck hurts.",
			c: "My hand hurts.",
			d: "My finger(s) hurt.",
			e: "None of the above below"
		},
		leap: {
			a: "I56",
			b: "I56",
			c: "I56",
			d: "I56",
			e: "I56"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 443
		question: "Do you feel weak on your arm or lose muscles?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "32",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 444
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "J01"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 445
		question: "Have you had any accidents (Car accident bumped in hurt while workout)?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "J30",
			b: "J02"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 446
		question: "Does your wrist hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "J03",
			b: "J05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 447
		question: "How does your wrist hurt?",
		answers: {
			a: "I have sharp pain on my wrist.",
			b: "My wrist throbs or feels numb.",
			c: "I have stabbing pain on my wrist.",
			d: "I have sharp pain.",
			e: "None of the above below"
		},
		leap: {
			a: "J04",
			b: "J04",
			c: "J04",
			d: "J04",
			e: "J04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 448
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "When I move my wrist  it hurts more.",
			d: "None of the above below"
		},
		leap: {
			a: "J05",
			b: "J05",
			c: "J05",
			d: "J05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 449
		question: "Does your arm hurt as well?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "J06",
			b: "J06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 450
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My painful area gets swollen and looks red and feels hot.",
			b: "My painful area has a fungus  or my skin is festered infected.",
			c: "I recently developed scars around the affected area.",
			d: "It hurts when I press on the painful area.",
			e: "None of the above below"
		},
		leap: {
			a: "J07",
			b: "J07",
			c: "J07",
			d: "J07",
			e: "J07"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 451
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "I have a light fever.",
			c: "My entire body has chills.",
			d: "None of the above below"
		},
		leap: {
			a: "J08",
			b: "J08",
			c: "J08",
			d: "J08"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 452
		question: "Fold your thumb of painful hand and wrap with rest of fingers. Then press painful hand towards to the pinky with other hand. Does it hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "J09",
			b: "J09"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 453
		question: "Do you have any issues on your hand fingers?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "J10",
			b: "J12"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 454
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The back of my hands or palms are in pain.",
			b: "My finger(s) hurt.",
			c: "?? ???? ??? ??? ????.",
			d: "?? ???(?? 1 2 3??)? ???? ??? ????.",
			e: "It is dificult to bend my finger(s) well.",
			f: "None of the above below"
		},
		leap: {
			a: "J11",
			b: "J11",
			c: "J11",
			d: "J11",
			e: "J11",
			f: "J11"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 455
		question: "Against both back of hands together and try to pose as the picture below. After 1~2 mins  do you have any numbness on your hands?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "J12",
			b: "J12"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 456
		question: "Do you use computer or smartphone often?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "J13",
			b: "J13"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 457
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have severe joint pain with swollen joints and redness.",
			b: "When I move my wrist  it hurts more.",
			c: "My pain is severe in the morning.",
			d: "My pain is worse at night.",
			e: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 458
		question: "Does your wrist hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "J31",
			b: "J33"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 459
		question: "How does your wrist hurt?",
		answers: {
			a: "I have sharp pain on my wrist.",
			b: "My wrist throbs or feels numb.",
			c: "I have stabbing pain on my wrist.",
			d: "I have sharp pain.",
			e: "None of the above below"
		},
		leap: {
			a: "J32",
			b: "J32",
			c: "J32",
			d: "J32",
			e: "J32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 460
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "When I move my wrist  it hurts more.",
			d: "None of the above below"
		},
		leap: {
			a: "J33",
			b: "J33",
			c: "J33",
			d: "J33"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 461
		question: "Does your arm hurt as well?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "J34",
			b: "J34"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 462
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My painful area gets swollen and looks red and feels hot.",
			b: "My painful area has a fungus  or my skin is festered infected.",
			c: "I recently developed scars around the affected area.",
			d: "It hurts when I press on the painful area.",
			e: "None of the above below"
		},
		leap: {
			a: "J35",
			b: "J35",
			c: "J35",
			d: "J35",
			e: "J35"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 463
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "I have a light fever.",
			c: "My entire body has chills.",
			d: "None of the above below"
		},
		leap: {
			a: "J36",
			b: "J36",
			c: "J36",
			d: "J36"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 464
		question: "Fold your thumb of painful hand and wrap with rest of fingers. Then press painful hand towards to the pinky with other hand. Does it hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "J37",
			b: "J37"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 465
		question: "Do you have any issues on your hand fingers?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "J38",
			b: "J40"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 466
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The back of my hands or palms are in pain.",
			b: "My finger(s) hurt.",
			c: "?? ???? ??? ??? ????.",
			d: "?? ???(?? 1 2 3??)? ???? ??? ????.",
			e: "It is dificult to bend my finger(s) well.",
			f: "None of the above below"
		},
		leap: {
			a: "J39",
			b: "J39",
			c: "J39",
			d: "J39",
			e: "J39",
			f: "J39"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 467
		question: "Against both back of hands together and try to pose as the picture below. After 1~2 mins  do you have any numbness on your hands?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "J40",
			b: "J40"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 468
		question: "Do you use computer or smartphone often?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "J41",
			b: "J41"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 469
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My bruising and swelling don?t seem to be getting better after 3 days.",
			b: "My bruising and swelling are getting better.",
			c: "I have sprained my wrist before.",
			d: "None of the above below"
		},
		leap: {
			a: "J42",
			b: "J42",
			c: "J42",
			d: "J42"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 470
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain and when I press on the painful area  it increases my pain.",
			b: "When I tap my elbow region  my wrist hurts.",
			c: "When someone helps me move  My wrist hurts so bad I can't move it.",
			d: "When someone helps me move  I can move my wrist a little bit.",
			e: "My affected arm was twisted or looks twisted at an angle.",
			f: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32",
			f: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 471
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "K01"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 472
		question: "Have you had any accidents (Car accident bumped in hurt while workout)?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "K30",
			b: "K02"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 473
		question: "Do you have pain on your back of hand palm?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "K03",
			b: "K05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 474
		question: "How does your back of hand palm hurt?",
		answers: {
			a: "I feel stiff.",
			b: "I feel numb.",
			c: "Stabbing.",
			d: "??? ? ?? ???.",
			e: "None of the above below"
		},
		leap: {
			a: "K04",
			b: "K04",
			c: "K04",
			d: "K04",
			e: "K04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 475
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "Opening Closing my fist increases my pain.",
			d: "None of the above below"
		},
		leap: {
			a: "K05",
			b: "K05",
			c: "K05",
			d: "K05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 476
		question: "Select all parts of your body have pain.",
		answers: {
			a: "My wrist hurts as well.",
			b: "My fingers are in pain.",
			c: "None of the above below"
		},
		leap: {
			a: "K06",
			b: "K06",
			c: "K06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 477
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My painful area gets swollen and looks red and feels hot.",
			b: "My painful area has a fungus  or my skin is festered infected.",
			c: "I recently developed scars around the affected area.",
			d: "It hurts when I press on the painful area.",
			e: "None of the above below"
		},
		leap: {
			a: "K07",
			b: "K07",
			c: "K07",
			d: "K07",
			e: "K07"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 478
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "I have a light fever.",
			c: "My entire body has chills.",
			d: "None of the above below"
		},
		leap: {
			a: "K08",
			b: "K08",
			c: "K08",
			d: "K08"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 479
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "?? ???? ??? ??? ????.",
			b: "My fingers (especially 1st 2nd 3rd) feel numb or less sensitive.",
			c: "I use computer or smartphone frequently.",
			d: "None of the above below"
		},
		leap: {
			a: "K09",
			b: "K09",
			c: "K09",
			d: "K09"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 480
		question: "Against both back of hands together and try to pose as the picture below. After 1~2 mins  do you have any numbness on your hands?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "K10",
			b: "K10"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 481
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "Both of my hands are in pain and swollen.",
			b: "My hand(s) is in severe pain and appears more red.",
			c: "Opening Closing my fist increases my pain.",
			d: "My palms are painful and swelled.",
			e: "None of the above below"
		},
		leap: {
			a: "K11",
			b: "K11",
			c: "K11",
			d: "K11",
			e: "K11"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 482
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My pain is severe in the morning.",
			b: "My pain is worse at night.",
			c: "None of the above below"
		},
		leap: {
			a: "K12",
			b: "K12",
			c: "K12"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 483
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a larger body compared to average people.",
			b: "I drank a lot 3 days before I developed this pain.",
			c: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 484
		question: "Do you have pain on your back of hand palm?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "K31",
			b: "K33"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 485
		question: "How does your back of hand palm hurt?",
		answers: {
			a: "I feel stiff.",
			b: "I feel numb.",
			c: "Stabbing.",
			d: "??? ? ?? ???.",
			e: "None of the above below"
		},
		leap: {
			a: "K32",
			b: "K32",
			c: "K32",
			d: "K32",
			e: "K32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 486
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "Opening Closing my fist increases my pain.",
			d: "None of the above below"
		},
		leap: {
			a: "K33",
			b: "K33",
			c: "K33",
			d: "K33"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 487
		question: "Select all parts of your body have pain.",
		answers: {
			a: "My wrist hurts as well.",
			b: "My fingers are in pain.",
			c: "None of the above below"
		},
		leap: {
			a: "K34",
			b: "K34",
			c: "K34"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 488
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My painful area gets swollen and looks red and feels hot.",
			b: "My painful area has a fungus  or my skin is festered infected.",
			c: "I get scars around near the painful area.",
			d: "It hurts when I press on the painful area.",
			e: "None of the above below"
		},
		leap: {
			a: "K35",
			b: "K35",
			c: "K35",
			d: "K35",
			e: "K35"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 489
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "I have a light fever.",
			c: "My entire body has chills.",
			d: "None of the above below"
		},
		leap: {
			a: "K36",
			b: "K36",
			c: "K36",
			d: "K36"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 490
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "?? ???? ??? ??? ????.",
			b: "My fingers (especially 1st 2nd 3rd) feel numb or less sensitive.",
			c: "I use computer or smartphone frequently.",
			d: "None of the above below"
		},
		leap: {
			a: "K37",
			b: "K37",
			c: "K37",
			d: "K37"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 491
		question: "Against both back of hands together and try to pose as the picture below. After 1~2 mins  do you have any numbness on your hands?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "K38",
			b: "K38"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 492
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My bruising and swelling don?t seem to be getting better after 3 days.",
			b: "My bruising and swelling are getting better.",
			c: "None of the above below"
		},
		leap: {
			a: "K39",
			b: "K39",
			c: "K39"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 493
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have sprained my hands before.",
			b: "I have pain and when I press on the painful area  it increases my pain.",
			c: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 494
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "K50"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 495
		question: "Does your hand feel numb?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "K51",
			b: "K51"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 496
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My finger(s) feel numb  or less sensitive.",
			b: "My fingers (especially 1st 2nd 3rd) feel numb or less sensitive.",
			c: "My arm feels weak  like my muscles are weaker.",
			d: "I use computer or smartphone frequently.",
			e: "None of the above below"
		},
		leap: {
			a: "K52",
			b: "K52",
			c: "K52",
			d: "K52",
			e: "K52"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 497
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I can't bend my finger nail well.",
			b: "My finger(s) appear pale  blue  red or have some type of color change.",
			c: "My finger(s) feel numb  or less sensitive.",
			d: "None of the above below"
		},
		leap: {
			a: "K53",
			b: "K53",
			c: "K53",
			d: "K53"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 498
		question: "Against both back of hands together and try to pose as the picture below. After 1~2 mins  do you have any numbness on your hands?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "K54",
			b: "K54"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 499
		question: "Does your sholder hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "K55",
			b: "K57"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 500
		question: "How does your sholder hurt?",
		answers: {
			a: "My shoulder feels numb.",
			b: "My shoulder feels like it is throbbing.",
			c: "I have a stabbing pain.",
			d: "I have stiffness in my shoulder.",
			e: "None of the above below"
		},
		leap: {
			a: "K56",
			b: "K56",
			c: "K56",
			d: "K56",
			e: "K56"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 501
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "??? ? ? ???.",
			d: "When I lay down on my side  my shoulder hurts and it is hard to stretch my arms behind me.",
			e: "None of the above below"
		},
		leap: {
			a: "K57",
			b: "K57",
			c: "K57",
			d: "K57",
			e: "K57"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 502
		question: "Select which part of your body have pain other than your shoulder.",
		answers: {
			a: "My arm hurts.",
			b: "The back side of my neck hurts.",
			c: "My hand hurts.",
			d: "My finger(s) hurt.",
			e: "None of the above below"
		},
		leap: {
			a: "K58",
			b: "K58",
			c: "K58",
			d: "K58",
			e: "K58"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 503
		question: "Do you feel weak on your arm or lose muscles?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "32",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 504
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "L01"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 505
		question: "Have you had any accidents (Car accident bumped in hurt while workout)?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "L30",
			b: "L02"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 506
		question: "Does your finger hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "L03",
			b: "L05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 507
		question: "How does your finger hurt?",
		answers: {
			a: "I feel stiff.",
			b: "I feel numb.",
			c: "Stabbing.",
			d: "It feels like a cramp.",
			e: "None of the above below"
		},
		leap: {
			a: "L04",
			b: "L04",
			c: "L04",
			d: "L04",
			e: "L04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 508
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "There pain when I bend my fingers.",
			d: "None of the above below"
		},
		leap: {
			a: "L05",
			b: "L05",
			c: "L05",
			d: "L05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 509
		question: "Select all parts of your body have pain.",
		answers: {
			a: "My wrist hurts as well.",
			b: "The back of my hand or palm is where I feel the pain.",
			c: "My arm hurts all over.",
			d: "None of the above below"
		},
		leap: {
			a: "L06",
			b: "L06",
			c: "L06",
			d: "L06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 510
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My painful area gets swollen and looks red and feels hot.",
			b: "My painful area has a fungus  or my skin is festered infected.",
			c: "I recently developed scars around the affected area.",
			d: "It hurts when I press on the painful area.",
			e: "None of the above below"
		},
		leap: {
			a: "L07",
			b: "L07",
			c: "L07",
			d: "L07",
			e: "L07"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 511
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "I have a light fever.",
			c: "My entire body has chills.",
			d: "None of the above below"
		},
		leap: {
			a: "L08",
			b: "L08",
			c: "L08",
			d: "L08"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 512
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "?? ???? ??? ??? ????.",
			b: "My fingers (especially 1st 2nd 3rd) feel numb or less sensitive.",
			c: "I use computer or smartphone frequently.",
			d: "None of the above below"
		},
		leap: {
			a: "L09",
			b: "L09",
			c: "L09",
			d: "L09"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 513
		question: "Against both back of hands together and try to pose as the picture below. After 1~2 mins  do you have any numbness on your hands?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "L10",
			b: "L10"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 514
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I can't bend my finger nail well.",
			b: "When I open close my fingers  it feels like they get stuck.",
			c: "My finger(s) appear pale  blue  red or have some type of color change.",
			d: "My finger(s) feel numb  or less sensitive.",
			e: "None of the above below"
		},
		leap: {
			a: "L11",
			b: "L11",
			c: "L11",
			d: "L11",
			e: "L11"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 515
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My pain started from one of my finger joints (knuckle).",
			b: "More than one finger is in pain and swollen.",
			c: "None of the above below"
		},
		leap: {
			a: "L12",
			b: "L12",
			c: "L12"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 516
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I move my affected finger  it hurts more.",
			b: "When I wake up and try to move my hands  they feel too stiff to move. As time goes by they get better.",
			c: "None of the above below"
		},
		leap: {
			a: "L13",
			b: "L13",
			c: "L13"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 517
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My pain is severe in the morning.",
			b: "My pain is worse at night.",
			c: "None of the above below"
		},
		leap: {
			a: "L14",
			b: "L14",
			c: "L14"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 518
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My finger(s) joint(s) are painful and swollen.",
			b: "My finger tips are swollen or painful.",
			c: "None of the above below"
		},
		leap: {
			a: "L15",
			b: "L15",
			c: "L15"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 519
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a larger body compared to average people.",
			b: "I drank a lot 3 days before I developed this pain.",
			c: "I have severe joint pain with swollen joints and redness.",
			d: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 520
		question: "Does your finger hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "L31",
			b: "L33"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 521
		question: "How does your finger hurt?",
		answers: {
			a: "I feel stiff.",
			b: "I feel numb.",
			c: "Stabbing.",
			d: "It feels like a cramp.",
			e: "None of the above below"
		},
		leap: {
			a: "L32",
			b: "L32",
			c: "L32",
			d: "L32",
			e: "L32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 522
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "There pain when I bend my fingers.",
			d: "None of the above below"
		},
		leap: {
			a: "L33",
			b: "L33",
			c: "L33",
			d: "L33"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 523
		question: "Select all parts of your body have pain.",
		answers: {
			a: "My wrist hurts as well.",
			b: "The back of my hand or palm is where I feel the pain.",
			c: "My arm hurts all over.",
			d: "None of the above below"
		},
		leap: {
			a: "L34",
			b: "L34",
			c: "L34",
			d: "L34"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 524
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My painful area gets swollen and looks red and feels hot.",
			b: "My painful area has a fungus  or my skin is festered infected.",
			c: "I recently developed scars around the affected area.",
			d: "It hurts when I press on the painful area.",
			e: "None of the above below"
		},
		leap: {
			a: "L35",
			b: "L35",
			c: "L35",
			d: "L35",
			e: "L35"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 525
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "I have a light fever.",
			c: "My entire body has chills.",
			d: "None of the above below"
		},
		leap: {
			a: "L36",
			b: "L36",
			c: "L36",
			d: "L36"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 526
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "?? ???? ??? ??? ????.",
			b: "My fingers (especially 1st 2nd 3rd) feel numb or less sensitive.",
			c: "I use computer or smartphone frequently.",
			d: "None of the above below"
		},
		leap: {
			a: "L37",
			b: "L37",
			c: "L37",
			d: "L37"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 527
		question: "Against both back of hands together and try to pose as the picture below. After 1~2 mins  do you have any numbness on your hands?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "L38",
			b: "L38"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 528
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I can't bend my finger nail well.",
			b: "When I open close my fingers  it feels like they get stuck.",
			c: "My finger(s) appear pale  blue  red or have some type of color change.",
			d: "None of the above below"
		},
		leap: {
			a: "L39",
			b: "L39",
			c: "L39",
			d: "L39"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 529
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My bruising and swelling don?t seem to be getting better after 3 days.",
			b: "My bruising and swelling are getting better.",
			c: "None of the above below"
		},
		leap: {
			a: "L40",
			b: "L40",
			c: "L40"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 530
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have sprained my finger(s) before.",
			b: "My injured finger does not look straight (appears crooked).",
			c: "None of the above below"
		},
		leap: {
			a: "L41",
			b: "L41",
			c: "L41"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 531
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain and when I press on the painful area  it increases my pain.",
			b: "My fingers hurt when I touch my wrist area.",
			c: "None of the above below"
		},
		leap: {
			a: "L42",
			b: "L42",
			c: "L42"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 532
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When someone helps me move  My finger hurts so bad I can't move it.",
			b: "When someone helps me move  I can move my finger a little bit.",
			c: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 533
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "L50"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 534
		question: "Do you feel numb on your fingers?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "L51",
			b: "L51"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 535
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My hand(s) feel numb or have lost sensation.",
			b: "My fingers (especially 1st 2nd 3rd) feel numb or less sensitive.",
			c: "My arm feels weak  like my muscles are weaker.",
			d: "I use computer or smartphone frequently.",
			e: "None of the above below"
		},
		leap: {
			a: "L52",
			b: "L52",
			c: "L52",
			d: "L52",
			e: "L52"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 536
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I can't bend my finger nail well.",
			b: "My finger(s) appear pale  blue  red or have some type of color change.",
			c: "My finger(s) feel numb  or less sensitive.",
			d: "None of the above below"
		},
		leap: {
			a: "L53",
			b: "L53",
			c: "L53",
			d: "L53"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 537
		question: "Does your sholder hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "L54",
			b: "L56"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 538
		question: "How does your sholder hurt?",
		answers: {
			a: "My shoulder feels numb.",
			b: "My shoulder feels like it is throbbing.",
			c: "I have a stabbing pain.",
			d: "I have stiffness in my shoulder.",
			e: "None of the above below"
		},
		leap: {
			a: "L55",
			b: "L55",
			c: "L55",
			d: "L55",
			e: "L55"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 539
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "??? ? ? ???.",
			d: "When I lay down on my side  my shoulder hurts and it is hard to stretch my arms behind me.",
			e: "None of the above below"
		},
		leap: {
			a: "L56",
			b: "L56",
			c: "L56",
			d: "L56",
			e: "L56"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 540
		question: "Select which part of your body have pain other than your shoulder.",
		answers: {
			a: "My arm hurts.",
			b: "The back side of my neck hurts.",
			c: "My hand hurts.",
			d: "My finger(s) hurt.",
			e: "None of the above below"
		},
		leap: {
			a: "L57",
			b: "L57",
			c: "L57",
			d: "L57",
			e: "L57"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 541
		question: "Do you feel weak on your arm or lose muscles?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "32",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 542
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "M01"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 543
		question: "Have you had any accidents (Car accident bumped in hurt while workout)?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "M30",
			b: "M02"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 544
		question: "Do your calf or thigh hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "M03",
			b: "M05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 545
		question: "How do your calf or thigh hurt?",
		answers: {
			a: "I feel burning in my painful area.",
			b: "I feel numb.",
			c: "It is a stabbing pain.",
			d: "I feel stiffness  and feel constant straining.",
			e: "None of the above below"
		},
		leap: {
			a: "M04",
			b: "M04",
			c: "M04",
			d: "M04",
			e: "M04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 546
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "When I pose differently  it hurts.",
			c: "None of the above below"
		},
		leap: {
			a: "M05",
			b: "M05",
			c: "M05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 547
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "My buttock hurts as well.",
			b: "??? ???.",
			c: "My knee hurts as well.",
			d: "My ankle hurts as well.",
			e: "My foot hurts as well.",
			f: "None of the above below"
		},
		leap: {
			a: "M06",
			b: "M06",
			c: "M06",
			d: "M06",
			e: "M06",
			f: "M06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 548
		question: "Do you have tingling sensation in your legs or do you experience difficulty?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "M07",
			b: "M07"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 549
		question: "Do you get cramped in the morning night?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "M08",
			b: "M08"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 550
		question: "Do you feel numb on your leg?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "M09",
			b: "M09"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 551
		question: "Does your leg feel weak or did you lose leg muscles?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "M10",
			b: "M10"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 552
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My painful area gets swollen and looks red and feels hot.",
			b: "My painful area has a fungus  or my skin is festered infected.",
			c: "I recently developed scars around the affected area.",
			d: "It hurts when I press on the painful area.",
			e: "None of the above below"
		},
		leap: {
			a: "M11",
			b: "M11",
			c: "M11",
			d: "M11",
			e: "M11"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 553
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "I have a light fever.",
			c: "My entire body has chills.",
			d: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 554
		question: "Do your calf or thigh hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "M31",
			b: "M33"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 555
		question: "How do your calf or thigh hurt?",
		answers: {
			a: "I feel burning in my painful area.",
			b: "I feel numb.",
			c: "It is a stabbing pain.",
			d: "I feel stiffness  and feel constant straining.",
			e: "None of the above below"
		},
		leap: {
			a: "M32",
			b: "M32",
			c: "M32",
			d: "M32",
			e: "M32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 556
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "When I pose differently  it hurts.",
			c: "None of the above below"
		},
		leap: {
			a: "M33",
			b: "M33",
			c: "M33"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 557
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My painful area gets swollen and looks red and feels hot.",
			b: "My painful area has a fungus  or my skin is festered infected.",
			c: "I recently developed scars around the affected area.",
			d: "It hurts when I press on the painful area.",
			e: "None of the above below"
		},
		leap: {
			a: "M34",
			b: "M34",
			c: "M34",
			d: "M34",
			e: "M34"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 558
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "I have a light fever.",
			c: "My entire body has chills.",
			d: "None of the above below"
		},
		leap: {
			a: "M35",
			b: "M35",
			c: "M35",
			d: "M35"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 559
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My bruising and swelling don?t seem to be getting better after 3 days.",
			b: "My bruising and swelling are getting better.",
			c: "None of the above below"
		},
		leap: {
			a: "M36",
			b: "M36",
			c: "M36"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 560
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain and when I press on the painful area  it increases my pain.",
			b: "My thigh hurts even though my knee was touched.",
			c: "My injured leg does not look straight (appears crooked).",
			d: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 561
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "M50"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 562
		question: "Do you feel numb on your leg?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "M51",
			b: "M51"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 563
		question: "Does your leg feel weak or did you lose leg muscles?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "M52",
			b: "M52"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 564
		question: "Do you have tingling sensation in your legs or do you experience difficulty?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "M53",
			b: "M53"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 565
		question: "Do you get cramped in the morning night?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "M54",
			b: "M54"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 566
		question: "Are you having back pain as well?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "M55",
			b: "M57"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 567
		question: "Can you describe your back pain?",
		answers: {
			a: "There is pain and it feels heavy (not severe  but weight).",
			b: "I feel stabbing and numbness.",
			c: "It is a stabbing pain.",
			d: "I have sharp pain.",
			e: "I feel stiffness  and feel constant straining.",
			f: "None of the above below"
		},
		leap: {
			a: "M56",
			b: "M56",
			c: "M56",
			d: "M56",
			e: "M56",
			f: "M56"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 568
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "I can't stand up due to pain.",
			d: "When I bend over backwards  my back pain gets worse.",
			e: "When I bend over forward  my pain gets worse.",
			f: "I have more pain in the mornings  it seems to get better with movement.",
			g: "None of the above below"
		},
		leap: {
			a: "M57",
			b: "M57",
			c: "M57",
			d: "M57",
			e: "M57",
			f: "M57",
			g: "M57"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 569
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "My buttock hurts as well.",
			b: "My knee hurts as well.",
			c: "My ankle hurts as well.",
			d: "My foot hurts as well.",
			e: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 570
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "N01"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 571
		question: "Have you had any accidents (Car accident bumped in hurt while workout)?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "N30",
			b: "N02"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 572
		question: "Does your knee hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "N03",
			b: "N05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 573
		question: "How does your knee hurt?",
		answers: {
			a: "I have a tingling pain.",
			b: "I feel a sharp poker poking.",
			c: "My knee tingles.",
			d: "I am in severe pain and feel like it will explode soon."
		},
		leap: {
			a: "N04",
			b: "N04",
			c: "N04",
			d: "N04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 574
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "It hurts more when I move.",
			d: "The back of my knee hurts.",
			e: "When I sit with my legs crossed  it causes pain.",
			f: "None of the above below"
		},
		leap: {
			a: "N05",
			b: "N05",
			c: "N05",
			d: "N05",
			e: "N05",
			f: "N05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 575
		question: "Is your knee swollen?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "N06",
			b: "N06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 576
		question: "Does your knee make noise?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "N07",
			b: "N07"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 577
		question: "Do you like to wear high heels or pose squatting?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "N08",
			b: "N08"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 578
		question: "Do you have tingling sensation in your legs or do you experience difficulty?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "N09",
			b: "N09"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 579
		question: "Do you get cramped in the morning night?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "N10",
			b: "N10"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 580
		question: "Do you feel numb on your leg?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "N11",
			b: "N11"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 581
		question: "Does your leg feel weak or did you lose leg muscles?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "N12",
			b: "N12"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 582
		question: "Are you having back pain as well?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "N13",
			b: "N15"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 583
		question: "Can you describe your back pain?",
		answers: {
			a: "There is pain and it feels heavy (not severe  but weight).",
			b: "I feel stabbing and numbness.",
			c: "It is a stabbing pain.",
			d: "I have sharp pain.",
			e: "I feel stiffness  and feel constant straining.",
			f: "None of the above below"
		},
		leap: {
			a: "N14",
			b: "N14",
			c: "N14",
			d: "N14",
			e: "N14",
			f: "N14"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 584
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "I can't stand up due to pain.",
			d: "When I bend over backwards  my back pain gets worse.",
			e: "When I bend over forward  my pain gets worse.",
			f: "I have more pain in the mornings  it seems to get better with movement.",
			g: "None of the above below"
		},
		leap: {
			a: "N15",
			b: "N15",
			c: "N15",
			d: "N15",
			e: "N15",
			f: "N15",
			g: "N15"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 585
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "My buttock hurts as well.",
			b: "???? ???? ???.",
			c: "My foot hurts as well.",
			d: "None of the above below"
		},
		leap: {
			a: "N16",
			b: "N16",
			c: "N16",
			d: "N16"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 586
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My painful area gets swollen and looks red and feels hot.",
			b: "My painful area has a fungus  or my skin is festered infected.",
			c: "I recently developed scars around the affected area.",
			d: "It hurts when I press on the painful area.",
			e: "None of the above below"
		},
		leap: {
			a: "N17",
			b: "N17",
			c: "N17",
			d: "N17",
			e: "N17"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 587
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "I have a light fever.",
			c: "My entire body has chills.",
			d: "None of the above below"
		},
		leap: {
			a: "N18",
			b: "N18",
			c: "N18",
			d: "N18"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 588
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "More often then not  both of my knees are in pain and swollen.",
			b: "I have severe joint pain with swollen joints and redness.",
			c: "None of the above below"
		},
		leap: {
			a: "N19",
			b: "N19",
			c: "N19"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 589
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I move my knee  I have more pain.",
			b: "When I stay in one position for a while then move  it is hard to move and only gets better with time.",
			c: "None of the above below"
		},
		leap: {
			a: "N20",
			b: "N20",
			c: "N20"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 590
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My pain is severe in the morning.",
			b: "My pain is worse at night.",
			c: "None of the above below"
		},
		leap: {
			a: "N21",
			b: "N21",
			c: "N21"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 591
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a larger body compared to average people.",
			b: "I drank a lot 3 days before I developed this pain.",
			c: "My knee swelled and was in pain.",
			d: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 592
		question: "Does your knee hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "N31",
			b: "N33"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 593
		question: "How does your knee hurt?",
		answers: {
			a: "I have a tingling pain.",
			b: "I feel a sharp poker poking.",
			c: "My knee tingles.",
			d: "I am in severe pain and feel like it will explode soon."
		},
		leap: {
			a: "N32",
			b: "N32",
			c: "N32",
			d: "N32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 594
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "It hurts more when I move.",
			d: "The back of my knee hurts.",
			e: "When I sit with my legs crossed  it causes pain.",
			f: "None of the above below"
		},
		leap: {
			a: "N33",
			b: "N33",
			c: "N33",
			d: "N33",
			e: "N33",
			f: "N33"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 595
		question: "Is your knee swollen?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "N34",
			b: "N34"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 596
		question: "Does your knee make noise?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "N35",
			b: "N35"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 597
		question: "Do you like to wear high heels or pose squatting?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "N36",
			b: "N36"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 598
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My painful area gets swollen and looks red and feels hot.",
			b: "My painful area has a fungus  or my skin is festered infected.",
			c: "I recently developed scars around the affected area.",
			d: "It hurts when I press on the painful area.",
			e: "None of the above below"
		},
		leap: {
			a: "N37",
			b: "N37",
			c: "N37",
			d: "N37",
			e: "N37"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 599
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "I have a light fever.",
			c: "My entire body has chills.",
			d: "None of the above below"
		},
		leap: {
			a: "N38",
			b: "N38",
			c: "N38",
			d: "N38"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 600
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My bruising and swelling don?t seem to be getting better after 3 days.",
			b: "My bruising and swelling are getting better.",
			c: "None of the above below"
		},
		leap: {
			a: "N39",
			b: "N39",
			c: "N39"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 601
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have not been able to stretch my leg out ever since I bumped my knee.",
			b: "I have sprained twisted my knee before.",
			c: "None of the above below"
		},
		leap: {
			a: "N40",
			b: "N40",
			c: "N40"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 602
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain and when I press on the painful area  it increases my pain.",
			b: "My injured leg does not look straight (appears crooked).",
			c: "None of the above below"
		},
		leap: {
			a: "N41",
			b: "N41",
			c: "N41"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 603
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When someone helps me move  My knee hurts so bad I can't move it.",
			b: "When someone helps me move  I can move my knee a little bit.",
			c: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 604
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "N60"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 605
		question: "Are you having unusual sensation on your knee?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "N61",
			b: "N61"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 606
		question: "Does your leg feel weak or did you lose leg muscles?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "N62",
			b: "N62"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 607
		question: "Do you have tingling sensation in your legs or do you experience difficulty?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "N63",
			b: "N63"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 608
		question: "Do you get cramped in the morning night?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "N64",
			b: "N64"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 609
		question: "Are you having back pain as well?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "N65",
			b: "N67"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 610
		question: "Can you describe your back pain?",
		answers: {
			a: "There is pain and it feels heavy (not severe  but weight).",
			b: "I feel stabbing and numbness.",
			c: "It is a stabbing pain.",
			d: "I have sharp pain.",
			e: "I feel stiffness  and feel constant straining.",
			f: "None of the above below"
		},
		leap: {
			a: "N66",
			b: "N66",
			c: "N66",
			d: "N66",
			e: "N66",
			f: "N66"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 611
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "I can't stand up due to pain.",
			d: "When I bend over backwards  my back pain gets worse.",
			e: "When I bend over forward  my pain gets worse.",
			f: "I have more pain in the mornings  it seems to get better with movement.",
			g: "None of the above below"
		},
		leap: {
			a: "N67",
			b: "N67",
			c: "N67",
			d: "N67",
			e: "N67",
			f: "N67",
			g: "N67"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 612
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "My buttock hurts as well.",
			b: "My thigh and calf are in pain.",
			c: "My ankle hurts as well.",
			d: "My foot hurts as well.",
			e: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 613
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "O01"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 614
		question: "Have you had any accidents (Car accident bumped in hurt while workout)?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "O30",
			b: "O02"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 615
		question: "Does your ankle hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "O03",
			b: "O03"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 616
		question: "Are you having back pain as well?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "O04",
			b: "O06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 617
		question: "Can you describe your back pain?",
		answers: {
			a: "There is pain and it feels heavy (not severe  but weight).",
			b: "I feel stabbing and numbness.",
			c: "It is a stabbing pain.",
			d: "I have sharp pain.",
			e: "I feel stiffness  and feel constant straining.",
			f: "None of the above below"
		},
		leap: {
			a: "O05",
			b: "O05",
			c: "O05",
			d: "O05",
			e: "O05",
			f: "O05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 618
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "I can't stand up due to pain.",
			d: "When I bend over backwards  my back pain gets worse.",
			e: "When I bend over forward  my pain gets worse.",
			f: "I have more pain in the mornings  it seems to get better with movement.",
			g: "None of the above below"
		},
		leap: {
			a: "O06",
			b: "O06",
			c: "O06",
			d: "O06",
			e: "O06",
			f: "O06",
			g: "O06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 619
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "My buttock hurts as well.",
			b: "My thigh and calf are in pain.",
			c: "My knee hurts as well.",
			d: "My foot hurts as well.",
			e: "None of the above below"
		},
		leap: {
			a: "O07",
			b: "O07",
			c: "O07",
			d: "O07",
			e: "O07"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 620
		question: "Do you have tingling sensation in your legs or do you experience difficulty?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "O08",
			b: "O08"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 621
		question: "Do you get cramped in the morning night?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "O09",
			b: "O09"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 622
		question: "Do you feel numb on your leg?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "O10",
			b: "O10"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 623
		question: "Does your leg feel weak or did you lose leg muscles?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "O11",
			b: "O11"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 624
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My painful area gets swollen and looks red and feels hot.",
			b: "My painful area has a fungus  or my skin is festered infected.",
			c: "I recently developed scars around the affected area.",
			d: "It hurts when I press on the painful area.",
			e: "None of the above below"
		},
		leap: {
			a: "O12",
			b: "O12",
			c: "O12",
			d: "O12",
			e: "O12"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 625
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "I have a light fever.",
			c: "My entire body has chills.",
			d: "None of the above below"
		},
		leap: {
			a: "O13",
			b: "O13",
			c: "O13",
			d: "O13"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 626
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "More often then not  both of my ankles are in pain and swollen.",
			b: "I have severe joint pain with swollen joints and redness.",
			c: "When I move the area in pain  the pain increases.",
			d: "None of the above below"
		},
		leap: {
			a: "O14",
			b: "O14",
			c: "O14",
			d: "O14"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 627
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a larger body compared to average people.",
			b: "I drank a lot 3 days before I developed this pain.",
			c: "My ankle swelled and was in pain.",
			d: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 628
		question: "Does your ankle hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "O31",
			b: "O31"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 629
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My painful area gets swollen and looks red and feels hot.",
			b: "My painful area has a fungus  or my skin is festered infected.",
			c: "I recently developed scars around the affected area.",
			d: "It hurts when I press on the painful area.",
			e: "None of the above below"
		},
		leap: {
			a: "O32",
			b: "O32",
			c: "O32",
			d: "O32",
			e: "O32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 630
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "I have a light fever.",
			c: "My entire body has chills.",
			d: "None of the above below"
		},
		leap: {
			a: "O33",
			b: "O33",
			c: "O33",
			d: "O33"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 631
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My bruising and swelling don?t seem to be getting better after 3 days.",
			b: "My bruising and swelling are getting better.",
			c: "None of the above below"
		},
		leap: {
			a: "O34",
			b: "O34",
			c: "O34"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 632
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain and when I press on the painful area  it increases my pain.",
			b: "I have sprained my ankles before.",
			c: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 633
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "O60"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 634
		question: "Do you feel anything abnormal on or around your ankle?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "O61",
			b: "O61"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 635
		question: "Does your leg feel weak or did you lose leg muscles?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "O62",
			b: "O62"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 636
		question: "Do you have tingling sensation in your legs or do you experience difficulty?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "O63",
			b: "O63"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 637
		question: "Do you get cramped in the morning night?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "O64",
			b: "O64"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 638
		question: "Are you having back pain as well?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "O65",
			b: "O67"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 639
		question: "Can you describe your back pain?",
		answers: {
			a: "There is pain and it feels heavy (not severe  but weight).",
			b: "I feel stabbing and numbness.",
			c: "It is a stabbing pain.",
			d: "I have sharp pain.",
			e: "I feel stiffness  and feel constant straining.",
			f: "None of the above below"
		},
		leap: {
			a: "O66",
			b: "O66",
			c: "O66",
			d: "O66",
			e: "O66",
			f: "O66"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 640
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "I can't stand up due to pain.",
			d: "When I bend over backwards  my back pain gets worse.",
			e: "When I bend over forward  my pain gets worse.",
			f: "I have more pain in the mornings  it seems to get better with movement.",
			g: "None of the above below"
		},
		leap: {
			a: "O67",
			b: "O67",
			c: "O67",
			d: "O67",
			e: "O67",
			f: "O67",
			g: "O67"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 641
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "My buttock hurts as well.",
			b: "My thigh and calf are in pain.",
			c: "My knee hurts as well.",
			d: "My foot hurts as well.",
			e: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 642
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "P01"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 643
		question: "Have you had any accidents (Car accident bumped in hurt while workout)?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "P30",
			b: "P02"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 644
		question: "Does your foot hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "P03",
			b: "P10"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 645
		question: "When you stand up in the morning  do you have any pain on your bottom foot or heels?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "P04",
			b: "P04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 646
		question: "When you get on your toes  do you experience pain on the sole bottom of your foot?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "P05",
			b: "P05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 647
		question: "Do you walk or stand a lot recently?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "P06",
			b: "P06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 648
		question: "Do you have pain in your midfoot or heel?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "P07",
			b: "P07"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 649
		question: "Do you feel tingling on your between toes whenever you touch on the ground?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "P08",
			b: "P08"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 650
		question: "When you press your painful area between your toes  do you feel tingling? ",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "P09",
			b: "P09"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 651
		question: "Does your sole of forefoot hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "P10",
			b: "P10"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 652
		question: "Are you having back pain as well?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "P11",
			b: "P13"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 653
		question: "Can you describe your back pain?",
		answers: {
			a: "There is pain and it feels heavy (not severe  but weight).",
			b: "I feel stabbing and numbness.",
			c: "It is a stabbing pain.",
			d: "I have sharp pain.",
			e: "I feel stiffness  and feel constant straining.",
			f: "None of the above below"
		},
		leap: {
			a: "P12",
			b: "P12",
			c: "P12",
			d: "P12",
			e: "P12",
			f: "P12"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 654
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "I can't stand up due to pain.",
			d: "When I bend over backwards  my back pain gets worse.",
			e: "When I bend over forward  my pain gets worse.",
			f: "I have more pain in the mornings  it seems to get better with movement.",
			g: "None of the above below"
		},
		leap: {
			a: "P13",
			b: "P13",
			c: "P13",
			d: "P13",
			e: "P13",
			f: "P13",
			g: "P13"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 655
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "My buttock hurts as well.",
			b: "My thigh and calf are in pain.",
			c: "My knee hurts as well.",
			d: "My ankle hurts as well.",
			e: "None of the above below"
		},
		leap: {
			a: "P14",
			b: "P14",
			c: "P14",
			d: "P14",
			e: "P14"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 656
		question: "Do you have tingling sensation in your legs or do you experience difficulty?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "P15",
			b: "P15"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 657
		question: "Do you get cramped in the morning night?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "P16",
			b: "P16"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 658
		question: "Do you feel numb on your leg?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "P17",
			b: "P17"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 659
		question: "Does your leg feel weak or did you lose leg muscles?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "P18",
			b: "P18"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 660
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My painful area gets swollen and looks red and feels hot.",
			b: "My painful area has a fungus  or my skin is festered infected.",
			c: "I recently developed scars around the affected area.",
			d: "It hurts when I press on the painful area.",
			e: "None of the above below"
		},
		leap: {
			a: "P19",
			b: "P19",
			c: "P19",
			d: "P19",
			e: "P19"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 661
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "I have a light fever.",
			c: "My entire body has chills.",
			d: "None of the above below"
		},
		leap: {
			a: "P20",
			b: "P20",
			c: "P20",
			d: "P20"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 662
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "More often then not  both of my feet are in pain and swollen.",
			b: "I have more than 3 places on my foot.",
			c: "My foot has severe pain with redness color change.",
			d: "None of the above below"
		},
		leap: {
			a: "P21",
			b: "P21",
			c: "P21",
			d: "P21"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 663
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I move the area in pain  the pain increases.",
			b: "My pain is severe in the morning.",
			c: "My pain is worse at night.",
			d: "None of the above below"
		},
		leap: {
			a: "P22",
			b: "P22",
			c: "P22",
			d: "P22"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 664
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a larger body compared to average people.",
			b: "I drank a lot 3 days before I developed this pain.",
			c: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 665
		question: "Does your foot hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "P31",
			b: "P31"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 666
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My painful area gets swollen and looks red and feels hot.",
			b: "My painful area has a fungus  or my skin is festered infected.",
			c: "I recently developed scars around the affected area.",
			d: "It hurts when I press on the painful area.",
			e: "None of the above below"
		},
		leap: {
			a: "P32",
			b: "P32",
			c: "P32",
			d: "P32",
			e: "P32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 667
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "I have a light fever.",
			c: "My entire body has chills.",
			d: "None of the above below"
		},
		leap: {
			a: "P33",
			b: "P33",
			c: "P33",
			d: "P33"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 668
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My bruising and swelling don?t seem to be getting better after 3 days.",
			b: "My bruising and swelling are getting better.",
			c: "I have pain and when I press on the painful area  it increases my pain.",
			d: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 669
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "P60"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 670
		question: "Do you feel discomfort on top of your foot?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "P61",
			b: "P61"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 671
		question: "Does your leg feel weak or did you lose leg muscles?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "P62",
			b: "P62"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 672
		question: "Do you have tingling sensation in your legs or do you experience difficulty?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "P63",
			b: "P63"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 673
		question: "Do you get cramped in the morning night?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "P64",
			b: "P64"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 674
		question: "Are you having back pain as well?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "P65",
			b: "P67"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 675
		question: "Can you describe your back pain?",
		answers: {
			a: "There is pain and it feels heavy (not severe  but weight).",
			b: "I feel stabbing and numbness.",
			c: "It is a stabbing pain.",
			d: "I have sharp pain.",
			e: "I feel stiffness  and feel constant straining.",
			f: "None of the above below"
		},
		leap: {
			a: "P66",
			b: "P66",
			c: "P66",
			d: "P66",
			e: "P66",
			f: "P66"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 676
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "I can't stand up due to pain.",
			d: "When I bend over backwards  my back pain gets worse.",
			e: "When I bend over forward  my pain gets worse.",
			f: "I have more pain in the mornings  it seems to get better with movement.",
			g: "None of the above below"
		},
		leap: {
			a: "P67",
			b: "P67",
			c: "P67",
			d: "P67",
			e: "P67",
			f: "P67",
			g: "P67"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 677
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "My buttock hurts as well.",
			b: "My thigh and calf are in pain.",
			c: "My ankle hurts as well.",
			d: "My knee hurts as well.",
			e: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 678
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "Q01"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 679
		question: "Have you had any accidents (Car accident bumped in hurt while workout)?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Q30",
			b: "Q02"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 680
		question: "Does your toe hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Q03",
			b: "Q05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 681
		question: "How does your toe hurt?",
		answers: {
			a: "My toes feel like they are burning.",
			b: "My toes feel like they are throbbing.",
			c: "My toes feel like they are tingling.",
			d: "I am in severe pain and feel like it will explode soon."
		},
		leap: {
			a: "Q04",
			b: "Q04",
			c: "Q04",
			d: "Q04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 682
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "It hurts more when I move.",
			d: "None of the above below"
		},
		leap: {
			a: "Q05",
			b: "Q05",
			c: "Q05",
			d: "Q05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 683
		question: "Does your toe look pale or blue red?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Q06",
			b: "Q06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 684
		question: "Do you have ingrown toe nails that are swollen or have pus-like discharge?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Q07",
			b: "Q07"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 685
		question: "Does your big toe have bended shape or second toe over big toe?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Q08",
			b: "Q08"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 686
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My painful area gets swollen and looks red and feels hot.",
			b: "My painful area has a fungus  or my skin is festered infected.",
			c: "I recently developed scars around the affected area.",
			d: "It hurts when I press on the painful area.",
			e: "None of the above below"
		},
		leap: {
			a: "Q09",
			b: "Q09",
			c: "Q09",
			d: "Q09",
			e: "Q09"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 687
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "I have a light fever.",
			c: "My entire body has chills.",
			d: "None of the above below"
		},
		leap: {
			a: "Q10",
			b: "Q10",
			c: "Q10",
			d: "Q10"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 688
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The pain started from one toe.",
			b: "More often then not  both pairs of my toes are in pain and swollen.",
			c: "I have more than 3 painful spots on my toes.",
			d: "I have severe joint pain with swollen joints and redness.",
			e: "When I move the area in pain  the pain increases.",
			f: "None of the above below"
		},
		leap: {
			a: "Q11",
			b: "Q11",
			c: "Q11",
			d: "Q11",
			e: "Q11",
			f: "Q11"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 689
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My pain is severe in the morning.",
			b: "My pain is worse at night.",
			c: "None of the above below"
		},
		leap: {
			a: "Q12",
			b: "Q12",
			c: "Q12"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 690
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a larger body compared to average people.",
			b: "I drank a lot 3 days before I developed this pain.",
			c: "My big toe is in pain and swollen.",
			d: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 691
		question: "Does your toe hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Q31",
			b: "Q33"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 692
		question: "How does your toe hurt?",
		answers: {
			a: "My toes feel like they are burning.",
			b: "My toes feel like they are throbbing.",
			c: "My toes feel like they are tingling.",
			d: "I am in severe pain and feel like it will explode soon."
		},
		leap: {
			a: "Q32",
			b: "Q32",
			c: "Q32",
			d: "Q32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 693
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "It hurts more when I move.",
			d: "None of the above below"
		},
		leap: {
			a: "Q33",
			b: "Q33",
			c: "Q33",
			d: "Q33"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 694
		question: "Does your toe look pale or blue red?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Q34",
			b: "Q34"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 695
		question: "Do you have ingrown toe nails that are swollen or have pus-like discharge?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Q35",
			b: "Q35"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 696
		question: "Does your big toe have bended shape or second toe over big toe?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Q36",
			b: "Q36"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 697
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My painful area gets swollen and looks red and feels hot.",
			b: "My painful area has a fungus  or my skin is festered infected.",
			c: "I recently developed scars around the affected area.",
			d: "It hurts when I press on the painful area.",
			e: "None of the above below"
		},
		leap: {
			a: "Q37",
			b: "Q37",
			c: "Q37",
			d: "Q37",
			e: "Q37"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 698
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "I have a light fever.",
			c: "My entire body has chills.",
			d: "None of the above below"
		},
		leap: {
			a: "Q38",
			b: "Q38",
			c: "Q38",
			d: "Q38"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 699
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My bruising and swelling don?t seem to be getting better after 3 days.",
			b: "My bruising and swelling are getting better.",
			c: "None of the above below"
		},
		leap: {
			a: "Q39",
			b: "Q39",
			c: "Q39"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 700
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain and when I press on the painful area  it increases my pain.",
			b: "I have sprained my toes before.",
			c: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 701
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "Q60"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 702
		question: "Do you feel different on your toe?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Q61",
			b: "Q61"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 703
		question: "Does your leg feel weak or did you lose leg muscles?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Q62",
			b: "Q62"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 704
		question: "Do you have tingling sensation in your legs or do you experience difficulty?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Q63",
			b: "Q63"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 705
		question: "Do you get cramped in the morning night?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Q64",
			b: "Q64"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 706
		question: "Are you having back pain as well?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Q65",
			b: "Q67"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 707
		question: "Can you describe your back pain?",
		answers: {
			a: "There is pain and it feels heavy (not severe  but weight).",
			b: "I feel stabbing and numbness.",
			c: "It is a stabbing pain.",
			d: "I have sharp pain.",
			e: "I feel stiffness  and feel constant straining.",
			f: "None of the above below"
		},
		leap: {
			a: "Q66",
			b: "Q66",
			c: "Q66",
			d: "Q66",
			e: "Q66",
			f: "Q66"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 708
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "I can't stand up due to pain.",
			d: "When I bend over backwards  my back pain gets worse.",
			e: "When I bend over forward  my pain gets worse.",
			f: "I have more pain in the mornings  it seems to get better with movement.",
			g: "None of the above below"
		},
		leap: {
			a: "Q67",
			b: "Q67",
			c: "Q67",
			d: "Q67",
			e: "Q67",
			f: "Q67",
			g: "Q67"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 709
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "My buttock hurts as well.",
			b: "My thigh and calf are in pain.",
			c: "My ankle hurts as well.",
			d: "My knee hurts as well.",
			e: "My foot hurts as well.",
			f: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32",
			f: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 710
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "R01"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 711
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I feel a lump on my breast.",
			b: "Only one of my breasts grew unusually bigger.",
			c: "I all of a sudden experienced my nipple retract.",
			d: "The skin over my breast or nipple increased in thickness (like an orage peel) or turned red.",
			e: "My nipple got smaller  or the height of my nipples shortened.",
			f: "My nipple appears red  like nipple eczema."
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32",
			f: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 712
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "R10"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 713
		question: "What is your sex?",
		answers: {
			a: "Male",
			b: "Female"
		},
		leap: {
			a: "R11",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 714
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My breast size increased during adulthood.",
			b: "I feel a lump around my nipples.",
			c: "When I press on the lump near my nipple  it hurts.",
			d: "I feel stressed because of the appearance of my breasts."
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 715
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "S01"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 716
		question: "Do you have pain in your chest?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "S02",
			b: "S04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 717
		question: "How is your chest pain?",
		answers: {
			a: "I feel discomfort that feels like something heavy is pressing on me.",
			b: "I feel a squeezing pain in my chest.",
			c: "I have burning chest pains. ",
			d: "I have sharp pain that comes in bursts.",
			e: "None of the above below"
		},
		leap: {
			a: "S03",
			b: "S03",
			c: "S03",
			d: "S03",
			e: "S03"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 718
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My pain doesn't subside even after I take pain medication.",
			b: "The pain increases when I take a deep breath.",
			c: "My pain lasts longer than 30mins.",
			d: "None of the above below"
		},
		leap: {
			a: "S04",
			b: "S04",
			c: "S04",
			d: "S04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 719
		question: "Select all parts of your body have pain.",
		answers: {
			a: "My back hurts (including shoulder).",
			b: "I feel pain in my upper abdomen.",
			c: "My shoulder hurts.",
			d: "None of the above below"
		},
		leap: {
			a: "S05",
			b: "S05",
			c: "S05",
			d: "S05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 720
		question: "Do you get sweaty more than you used to?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "S06",
			b: "S06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 721
		question: "Do you have difficulty with breathing?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "S07",
			b: "S08"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 722
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have discomfort in my chest when breathing  or when breathing through my mouth.",
			b: "When I exhale  it sounds very shallow.",
			c: "I have a short shallow breath. I breathe fast.",
			d: "None of the above below"
		},
		leap: {
			a: "S08",
			b: "S08",
			c: "S08",
			d: "S08"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 723
		question: "Do you cough?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "S09",
			b: "S10"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 724
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cough.",
			b: "I have a cough that sounds like a dogs bark.",
			c: "I have a cough that is dry.",
			d: "I cough frequently.",
			e: "I cough more at night.",
			f: "I cough very hard and it leaves me out of breath."
		},
		leap: {
			a: "S10",
			b: "S10",
			c: "S10",
			d: "S10",
			e: "S10",
			f: "S10"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 725
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "????? ??.",
			b: "I have a high fever.",
			c: "I have a light fever.",
			d: "My entire body has chills.",
			e: "I lost weight very suddenly.",
			f: "My hands feet are unusually cold.",
			g: "None of the above below"
		},
		leap: {
			a: "S11",
			b: "S11",
			c: "S11",
			d: "S11",
			e: "S11",
			f: "S11",
			g: "S11"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 726
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have bad breath.",
			b: "I have decreased appetite.",
			c: "I feel like I have to throw up or have already vomitted.",
			d: "??? ?? ???.",
			e: "I can't digest properly and feel bloated.",
			f: "My stomach feels gassy bloated.",
			g: "None of the above below"
		},
		leap: {
			a: "S12",
			b: "S12",
			c: "S12",
			d: "S12",
			e: "S12",
			f: "S12",
			g: "S12"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 727
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is hard to swallow food or water due to the pain in my throat.",
			b: "?? ?? ?? ??? ???? ??.",
			c: "My voice sounds hoarse.",
			d: "None of the above below"
		},
		leap: {
			a: "S13",
			b: "S13",
			c: "S13",
			d: "S13"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 728
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I smoke more than I used to.",
			b: "I drink more than I used to.",
			c: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 729
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "S50"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 730
		question: "Do you have pain in your chest?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "S51",
			b: "S53"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 731
		question: "How is your chest pain?",
		answers: {
			a: "I feel discomfort that feels like something heavy is pressing on me.",
			b: "I feel a squeezing pain in my chest.",
			c: "I have burning chest pains. ",
			d: "I have sharp pain that comes in bursts.",
			e: "None of the above below"
		},
		leap: {
			a: "S52",
			b: "S52",
			c: "S52",
			d: "S52",
			e: "S52"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 732
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My pain doesn't subside even after I take pain medication.",
			b: "The pain increases when I take a deep breath.",
			c: "My pain lasts longer than 30mins.",
			d: "None of the above below"
		},
		leap: {
			a: "S53",
			b: "S53",
			c: "S53",
			d: "S53"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 733
		question: "Select all parts of your body have pain.",
		answers: {
			a: "I have a headache.",
			b: "My shoulder hurts.",
			c: "My back hurts (including shoulder).",
			d: "None of the above below"
		},
		leap: {
			a: "S54",
			b: "S54",
			c: "S54",
			d: "S54"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 734
		question: "Do you have difficulty with breathing?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "S55",
			b: "S55"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 735
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have discomfort in my chest when breathing  or when breathing through my mouth.",
			b: "When I exhale  it sounds very shallow.",
			c: "I have a short shallow breath. I breathe fast.",
			d: "None of the above below"
		},
		leap: {
			a: "S56",
			b: "S56",
			c: "S56",
			d: "S56"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 736
		question: "Do you cough?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "S57",
			b: "S57"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 737
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cough.",
			b: "I have a cough that sounds like a dogs bark.",
			c: "I have a cough that is dry.",
			d: "I cough frequently.",
			e: "I cough more at night.",
			f: "I cough very hard and it leaves me out of breath."
		},
		leap: {
			a: "S58",
			b: "S58",
			c: "S58",
			d: "S58",
			e: "S58",
			f: "S58"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 738
		question: "Do you get phlegm?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "S59",
			b: "S59"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 739
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have phlegm.",
			b: "I have sticky phlegm.",
			c: "I have yellow phlegm.",
			d: "I have blood in my phlegm."
		},
		leap: {
			a: "S60",
			b: "S60",
			c: "S60",
			d: "S60"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 740
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I feel unusually dizzy.",
			b: "????? ??.",
			c: "I have a light fever.",
			d: "My entire body has chills.",
			e: "I lost weight very suddenly.",
			f: "None of the above below"
		},
		leap: {
			a: "S61",
			b: "S61",
			c: "S61",
			d: "S61",
			e: "S61",
			f: "S61"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 741
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have decreased appetite.",
			b: "I feel like I have to throw up or have already vomitted.",
			c: "None of the above below"
		},
		leap: {
			a: "S62",
			b: "S62",
			c: "S62"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 742
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My throat hurts and there is blood in my vomit.",
			b: "I have chest pain and blood in my vomit. ",
			c: "None of the above below"
		},
		leap: {
			a: "S63",
			b: "S63",
			c: "S63"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 743
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I smoke more than I used to.",
			b: "I drink more than I used to.",
			c: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 744
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "S70"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 745
		question: "Do you have difficulty with breathing?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "S71",
			b: "S72"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 746
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have discomfort in my chest when breathing  or when breathing through my mouth.",
			b: "When I exhale  it sounds very shallow.",
			c: "I have a short shallow breath. I breathe fast.",
			d: "None of the above below"
		},
		leap: {
			a: "S72",
			b: "S72",
			c: "S72",
			d: "S72"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 747
		question: "Do you cough?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "S73",
			b: "S74"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 748
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cough.",
			b: "I have a cough that sounds like a dogs bark.",
			c: "I have a cough that is dry.",
			d: "I cough frequently.",
			e: "I cough more at night.",
			f: "I cough very hard and it leaves me out of breath."
		},
		leap: {
			a: "S74",
			b: "S74",
			c: "S74",
			d: "S74",
			e: "S74",
			f: "S74"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 749
		question: "Do you get phlegm?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "S75",
			b: "S76"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 750
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have phlegm.",
			b: "I have sticky phlegm.",
			c: "I have yellow phlegm.",
			d: "I have blood in my phlegm."
		},
		leap: {
			a: "S76",
			b: "S76",
			c: "S76",
			d: "S76"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 751
		question: "Do you get sweaty more than you used to?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "S77",
			b: "S77"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 752
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I feel unusually dizzy.",
			b: "????? ??.",
			c: "I have a high fever.",
			d: "I have a light fever.",
			e: "My entire body has chills.",
			f: "I lost weight very suddenly.",
			g: "None of the above below"
		},
		leap: {
			a: "S78",
			b: "S78",
			c: "S78",
			d: "S78",
			e: "S78",
			f: "S78",
			g: "S78"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 753
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have decreased appetite.",
			b: "I feel like I have to throw up or have already vomitted.",
			c: "None of the above below"
		},
		leap: {
			a: "S79",
			b: "S79",
			c: "S79"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 754
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My throat hurts and there is blood in my vomit.",
			b: "I have chest pain and blood in my vomit. ",
			c: "None of the above below"
		},
		leap: {
			a: "S80",
			b: "S80",
			c: "S80"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 755
		question: "Select all parts of your body have pain.",
		answers: {
			a: "I have a headache.",
			b: "I experience chest pain that feels like it is inside of my chest.",
			c: "My back hurts (including shoulder).",
			d: "None of the above below"
		},
		leap: {
			a: "S81",
			b: "S81",
			c: "S81",
			d: "S81"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 756
		question: "Do you smoke?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "32",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 757
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "T01"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 758
		question: "Does your back hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "T02",
			b: "T02"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 759
		question: "Does your flank hurt as well?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "T03",
			b: "T06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 760
		question: "Describe the pain in your flank.(multiple selection).",
		answers: {
			a: "My side feels like it is throbbing.",
			b: "It feels like stabbing pain.",
			c: "I have sharp pain that comes in bursts.",
			d: "I feel like I am going to poop defecate but I can't.",
			e: "None of the above below"
		},
		leap: {
			a: "T04",
			b: "T04",
			c: "T04",
			d: "T04",
			e: "T04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 761
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "It hurts more when I move.",
			d: "When I tap my side with my fist  it is an intolerable pain.",
			e: "None of the above below"
		},
		leap: {
			a: "T05",
			b: "T05",
			c: "T05",
			d: "T05",
			e: "T05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 762
		question: "Does your pain go away and come back repeatly?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "T06",
			b: "T06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 763
		question: "Are you having pain in your upper abdomen as well?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "T07",
			b: "T09"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 764
		question: "Describe the pain in your upper abdomen.",
		answers: {
			a: "My upper abdomen hurts.",
			b: "It feels like a squeezing pain.",
			c: "I have a burning sensation.",
			d: "I have a stabbing pain.",
			e: "None of the above below"
		},
		leap: {
			a: "T08",
			b: "T08",
			c: "T08",
			d: "T08",
			e: "T08"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 765
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "When I press on the painful area and then release  it increases the pain.",
			c: "My pain doesn't subside even after I take pain medication.",
			d: "The pain increases when I take a deep breath.",
			e: "My pain goes away after I eat.",
			f: "My pain returns one hour after I eat.",
			g: "None of the above below"
		},
		leap: {
			a: "T09",
			b: "T09",
			c: "T09",
			d: "T09",
			e: "T09",
			f: "T09",
			g: "T09"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 766
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "The back side of my neck hurts.",
			b: "My shoulder hurts.",
			c: "My arm hurts all over.",
			d: "None of the above below"
		},
		leap: {
			a: "T10",
			b: "T10",
			c: "T10",
			d: "T10"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 767
		question: "Does your excrement have any issue?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "T11",
			b: "T13"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 768
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is difficult to poop defecate.",
			b: "My poop defecation leaks out unconsciously.",
			c: "After I poop defecate  I do not feel empty.",
			d: "I unusually urinate defecate frequently.",
			e: "I have constipation and am unable to poop defecate.",
			f: "None of the above below"
		},
		leap: {
			a: "T12",
			b: "T12",
			c: "T12",
			d: "T12",
			e: "T12",
			f: "T12"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 769
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I see red blood in my stool.",
			b: "My stool is dark  almost black in color.",
			c: "I have watery stool.",
			d: "I have phlegmatic diarreah.",
			e: "My stool doesn't look normal  it looks grey in color.",
			f: "I see grease floating on the toilet water with my stool.",
			g: "None of the above below"
		},
		leap: {
			a: "T13",
			b: "T13",
			c: "T13",
			d: "T13",
			e: "T13",
			f: "T13",
			g: "T13"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 770
		question: "Do you have any issue when you urinate? Or your urine doesn't look right?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "T14",
			b: "T16"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 771
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain during urination.",
			b: "I go to the bathroom very often to urinate.",
			c: "I unusually urinate frequently.",
			d: "I urinate longer than I used to.",
			e: "My urine doesn't come out normal when I try to urinate.",
			f: "It is difficult to hold my bladder  and after I urinate  it doesn't feel like I have emptied my bladder (feel like I still have to pee).",
			g: "None of the above below"
		},
		leap: {
			a: "T15",
			b: "T15",
			c: "T15",
			d: "T15",
			e: "T15",
			f: "T15",
			g: "T15"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 772
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The color of my urine looks more red than yellow. I think there is blood in my urine.",
			b: "My urine is darker. It is almost the color of coca-cola.",
			c: "My urine looks muddy.",
			d: "I have bubbles in my urine.",
			e: "None of the above below"
		},
		leap: {
			a: "T16",
			b: "T16",
			c: "T16",
			d: "T16",
			e: "T16"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 773
		question: "Does your white part of eye turn yellow?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "T17",
			b: "T17"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 774
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a light fever.",
			b: "My entire body has chills.",
			c: "I lost weight very suddenly.",
			d: "None of the above below"
		},
		leap: {
			a: "T18",
			b: "T18",
			c: "T18",
			d: "T18"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 775
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have decreased appetite.",
			b: "I feel like I have to throw up or have already vomitted.",
			c: "It is hard to swallow food or water due to the pain in my throat.",
			d: "None of the above below"
		},
		leap: {
			a: "T19",
			b: "T19",
			c: "T19",
			d: "T19"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 776
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I smoke more than I used to.",
			b: "I drink more than I used to.",
			c: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 777
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "U01"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 778
		question: "Are you having pain in your upper abdomen?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "U02",
			b: "U04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 779
		question: "Describe the pain in your upper abdomen.",
		answers: {
			a: "My upper abdomen hurts.",
			b: "It feels like a squeezing pain.",
			c: "I have a burning sensation.",
			d: "I have a stabbing pain.",
			e: "None of the above below"
		},
		leap: {
			a: "U03",
			b: "U03",
			c: "U03",
			d: "U03",
			e: "U03"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 780
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "When I press on the painful area and then release  it increases the pain.",
			c: "My pain doesn't subside even after I take pain medication.",
			d: "The pain increases when I take a deep breath.",
			e: "My pain goes away after I eat.",
			f: "My pain returns one hour after I eat.",
			g: "None of the above below"
		},
		leap: {
			a: "U04",
			b: "U04",
			c: "U04",
			d: "U04",
			e: "U04",
			f: "U04",
			g: "U04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 781
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "I have pain in my lower abdomen. ",
			b: "The back of my shoulders hurt.",
			c: "None of the above below"
		},
		leap: {
			a: "U05",
			b: "U05",
			c: "U05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 782
		question: "Does your excrement have any issue?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "U06",
			b: "U08"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 783
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is difficult to poop defecate.",
			b: "My poop defecation leaks out unconsciously.",
			c: "After I poop defecate  I do not feel empty.",
			d: "I unusually urinate defecate frequently.",
			e: "I have constipation and am unable to poop defecate.",
			f: "None of the above below"
		},
		leap: {
			a: "U07",
			b: "U07",
			c: "U07",
			d: "U07",
			e: "U07",
			f: "U07"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 784
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I see red blood in my stool.",
			b: "My stool is dark  almost black in color.",
			c: "I have watery stool.",
			d: "I have phlegmatic diarreah.",
			e: "My stool doesn't look normal  it looks grey in color.",
			f: "I see grease floating on the toilet water with my stool.",
			g: "None of the above below"
		},
		leap: {
			a: "U08",
			b: "U08",
			c: "U08",
			d: "U08",
			e: "U08",
			f: "U08",
			g: "U08"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 785
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a light fever.",
			b: "My entire body has chills.",
			c: "I am sweating more than I used to.",
			d: "I lost weight very suddenly.",
			e: "My hands feet are unusually cold.",
			f: "I can't sleep well at night.",
			g: "None of the above below"
		},
		leap: {
			a: "U09",
			b: "U09",
			c: "U09",
			d: "U09",
			e: "U09",
			f: "U09",
			g: "U09"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 786
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have decreased appetite.",
			b: "I feel like I have to throw up or have already vomitted.",
			c: "I can't digest properly and feel bloated.",
			d: "My stomach feels gassy bloated.",
			e: "I burp frequently.",
			f: "None of the above below"
		},
		leap: {
			a: "U10",
			b: "U10",
			c: "U10",
			d: "U10",
			e: "U10",
			f: "U10"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 787
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I smoke more than I used to.",
			b: "I drink more than I used to.",
			c: "I vomited blood.",
			d: "I feel a lump on my upper abdomen.",
			e: "None of the above below"
		},
		leap: {
			a: "U11",
			b: "U11",
			c: "U11",
			d: "U11",
			e: "U11"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 788
		question: "Does your eye skin get yellow?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "32",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 789
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "U30"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 790
		question: "What is your sex?",
		answers: {
			a: "Male",
			b: "Female"
		},
		leap: {
			a: "U31",
			b: "U50"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 791
		question: "Are you having pain in your lower abdomen?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "U32",
			b: "U34"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 792
		question: "Describe the pain in your lower abdomen.",
		answers: {
			a: "My lower abdomen stings.",
			b: "It feels like a squeezing pain.",
			c: "I feel like something is boiling inside of me.",
			d: "I have a stabbing pain.",
			e: "None of the above below"
		},
		leap: {
			a: "U33",
			b: "U33",
			c: "U33",
			d: "U33",
			e: "U33"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 793
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "When I press on the painful area and then release  it increases the pain.",
			c: "My pain doesn't subside even after I take pain medication.",
			d: "The pain increases when I take a deep breath.",
			e: "After I poop  my pain goes away.",
			f: "When I poop defacate  the pain starts.",
			g: "None of the above below"
		},
		leap: {
			a: "U34",
			b: "U34",
			c: "U34",
			d: "U34",
			e: "U34",
			f: "U34",
			g: "U34"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 794
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "My head hurst as well.",
			b: "I feel pain in my uppper abdomen as well. ",
			c: "???? ???.",
			d: "My anus is painful.",
			e: "None of the above below"
		},
		leap: {
			a: "U35",
			b: "U35",
			c: "U35",
			d: "U35",
			e: "U35"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 795
		question: "Does your excrement have any issue?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "U36",
			b: "U38"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 796
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is difficult to poop defecate.",
			b: "My poop defecation leaks out unconsciously.",
			c: "After I poop defecate  I do not feel empty.",
			d: "I unusually urinate defecate frequently.",
			e: "I have constipation and am unable to poop defecate.",
			f: "None of the above below"
		},
		leap: {
			a: "U37",
			b: "U37",
			c: "U37",
			d: "U37",
			e: "U37",
			f: "U37"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 797
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I see red blood in my stool.",
			b: "My stool is dark  almost black in color.",
			c: "I have watery stool.",
			d: "I have phlegmatic diarreah.",
			e: "My stool doesn't look normal  it looks grey in color.",
			f: "I see grease floating on the toilet water with my stool.",
			g: "None of the above below"
		},
		leap: {
			a: "U38",
			b: "U38",
			c: "U38",
			d: "U38",
			e: "U38",
			f: "U38",
			g: "U38"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 798
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a light fever.",
			b: "I am sweating more than I used to.",
			c: "I lost weight very suddenly.",
			d: "I can't sleep well at night.",
			e: "My entire body has chills.",
			f: "None of the above below"
		},
		leap: {
			a: "U39",
			b: "U39",
			c: "U39",
			d: "U39",
			e: "U39",
			f: "U39"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 799
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have decreased appetite.",
			b: "I feel like I have to throw up or have already vomitted.",
			c: "I can't digest properly and feel bloated.",
			d: "My stomach feels gassy bloated.",
			e: "I burp frequently.",
			f: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32",
			f: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 800
		question: "Are you having pain in your lower abdomen?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "U51",
			b: "U53"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 801
		question: "Describe the pain in your lower abdomen.",
		answers: {
			a: "My lower abdomen stings.",
			b: "It feels like a squeezing pain.",
			c: "I feel like something is boiling inside of me.",
			d: "I have a stabbing pain.",
			e: "None of the above below"
		},
		leap: {
			a: "U52",
			b: "U52",
			c: "U52",
			d: "U52",
			e: "U52"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 802
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "When I press on the painful area and then release  it increases the pain.",
			c: "My pain doesn't subside even after I take pain medication.",
			d: "The pain increases when I take a deep breath.",
			e: "After I poop  my pain goes away.",
			f: "When I poop defacate  the pain starts.",
			g: "None of the above below"
		},
		leap: {
			a: "U53",
			b: "U53",
			c: "U53",
			d: "U53",
			e: "U53",
			f: "U53",
			g: "U53"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 803
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "I feel pain in my uppper abdomen as well. ",
			b: "??(???)? ???.",
			c: "My genital hurts as well.",
			d: "My head hurst as well.",
			e: "None of the above below"
		},
		leap: {
			a: "U54",
			b: "U54",
			c: "U54",
			d: "U54",
			e: "U54"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 804
		question: "Does your excrement have any issue?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "U55",
			b: "U57"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 805
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is difficult to poop defecate.",
			b: "My poop defecation leaks out unconsciously.",
			c: "After I poop defecate  I do not feel empty.",
			d: "I unusually urinate defecate frequently.",
			e: "I have constipation and am unable to poop defecate.",
			f: "None of the above below"
		},
		leap: {
			a: "U56",
			b: "U56",
			c: "U56",
			d: "U56",
			e: "U56",
			f: "U56"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 806
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I see red blood in my stool.",
			b: "My stool is dark  almost black in color.",
			c: "I have watery stool.",
			d: "I have phlegmatic diarreah.",
			e: "My stool doesn't look normal  it looks grey in color.",
			f: "I see grease floating on the toilet water with my stool.",
			g: "None of the above below"
		},
		leap: {
			a: "U57",
			b: "U57",
			c: "U57",
			d: "U57",
			e: "U57",
			f: "U57",
			g: "U57"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 807
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a light fever.",
			b: "I am sweating more than I used to.",
			c: "I lost weight very suddenly.",
			d: "I can't sleep well at night.",
			e: "None of the above below"
		},
		leap: {
			a: "U58",
			b: "U58",
			c: "U58",
			d: "U58",
			e: "U58"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 808
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have decreased appetite.",
			b: "I feel like I have to throw up or have already vomitted.",
			c: "I can't digest properly and feel bloated.",
			d: "My stomach feels gassy bloated.",
			e: "I burp frequently.",
			f: "None of the above below"
		},
		leap: {
			a: "U59",
			b: "U59",
			c: "U59",
			d: "U59",
			e: "U59",
			f: "U59"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 809
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain during urination.",
			b: "I have given birth before.",
			c: "I have discharge from my genital.",
			d: "My urethra or vagina bleeds.",
			e: "None of the above below"
		},
		leap: {
			a: "U60",
			b: "U60",
			c: "U60",
			d: "U60",
			e: "U60"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 810
		question: "Has your period volume cramp days changed?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "U61",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 811
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My period volume has increased.",
			b: "My menstrual cycle became irregular.",
			c: "My period takes longer than it used to.",
			d: "I have bad cramps during my period.",
			e: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 812
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "U70"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 813
		question: "Do you feel like you have gas in your stomach?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "U71",
			b: "U71"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 814
		question: "Does your excrement have any issue?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "U72",
			b: "U74"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 815
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is difficult to poop defecate.",
			b: "My poop defecation leaks out unconsciously.",
			c: "After I poop defecate  I do not feel empty.",
			d: "I unusually urinate defecate frequently.",
			e: "I have constipation and am unable to poop defecate.",
			f: "None of the above below"
		},
		leap: {
			a: "U73",
			b: "U73",
			c: "U73",
			d: "U73",
			e: "U73",
			f: "U73"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 816
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I see red blood in my stool.",
			b: "My stool is dark  almost black in color.",
			c: "I have watery stool.",
			d: "I have phlegmatic diarreah.",
			e: "My stool doesn't look normal  it looks grey in color.",
			f: "I see grease floating on the toilet water with my stool.",
			g: "None of the above below"
		},
		leap: {
			a: "U74",
			b: "U74",
			c: "U74",
			d: "U74",
			e: "U74",
			f: "U74",
			g: "U74"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 817
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I am sweating more than I used to.",
			b: "I can't sleep well at night.",
			c: "None of the above below"
		},
		leap: {
			a: "U75",
			b: "U75",
			c: "U75"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 818
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My hands feet are unusually cold.",
			b: "I feel like I have to throw up or have already vomitted.",
			c: "I can't digest properly and feel bloated.",
			d: "I burp frequently.",
			e: "None of the above below"
		},
		leap: {
			a: "U76",
			b: "U76",
			c: "U76",
			d: "U76",
			e: "U76"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 819
		question: "Select all parts of your body have pain.",
		answers: {
			a: "I have a headache.",
			b: "I feel pain in my upper abdomen.",
			c: "I have pain in my lower abdomen. ",
			d: "My side hurts.",
			e: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 820
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "U90"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 821
		question: "Do you have digestion issue?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "U91",
			b: "U91"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 822
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have decreased appetite.",
			b: "I feel like I have to throw up or have already vomitted.",
			c: "My stomach feels gassy bloated.",
			d: "I burp frequently.",
			e: "None of the above below"
		},
		leap: {
			a: "U92",
			b: "U92",
			c: "U92",
			d: "U92",
			e: "U92"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 823
		question: "Does your excrement have any issue?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "U93",
			b: "U95"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 824
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is difficult to poop defecate.",
			b: "My poop defecation leaks out unconsciously.",
			c: "After I poop defecate  I do not feel empty.",
			d: "I unusually urinate defecate frequently.",
			e: "I have constipation and am unable to poop defecate.",
			f: "None of the above below"
		},
		leap: {
			a: "U94",
			b: "U94",
			c: "U94",
			d: "U94",
			e: "U94",
			f: "U94"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 825
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I see red blood in my stool.",
			b: "My stool is dark  almost black in color.",
			c: "I have watery stool.",
			d: "I have phlegmatic diarreah.",
			e: "My stool doesn't look normal  it looks grey in color.",
			f: "I see grease floating on the toilet water with my stool.",
			g: "None of the above below"
		},
		leap: {
			a: "U95",
			b: "U95",
			c: "U95",
			d: "U95",
			e: "U95",
			f: "U95",
			g: "U95"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 826
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I am sweating more than I used to.",
			b: "I lost weight very suddenly.",
			c: "My hands feet are unusually cold.",
			d: "None of the above below"
		},
		leap: {
			a: "U96",
			b: "U96",
			c: "U96",
			d: "U96"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 827
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I drink more than I used to.",
			b: "I smoke more than I used to.",
			c: "None of the above below"
		},
		leap: {
			a: "U97",
			b: "U97",
			c: "U97"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 828
		question: "Select all parts of your body have pain.",
		answers: {
			a: "I have a headache.",
			b: "I feel pain in my upper abdomen.",
			c: "I experience chest pain that feels like it is inside of my chest.",
			d: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 829
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "U110"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 830
		question: "Does your head hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "U130",
			b: "U111"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 831
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "I experience chest pain that feels like it is inside of my chest.",
			b: "My back hurts (including shoulder).",
			c: "I feel pain in my upper abdomen.",
			d: "My side hurts.",
			e: "None of the above below"
		},
		leap: {
			a: "U112",
			b: "U112",
			c: "U112",
			d: "U112",
			e: "U112"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 832
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My hands feet are unusually cold.",
			b: "I have a light fever.",
			c: "My entire body has chills.",
			d: "I am sweating more than I used to.",
			e: "I have body aches.",
			f: "I lost weight very suddenly.",
			g: "None of the above below"
		},
		leap: {
			a: "U113",
			b: "U113",
			c: "U113",
			d: "U113",
			e: "U113",
			f: "U113",
			g: "U113"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 833
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have decreased appetite.",
			b: "I feel like I have to throw up or have already vomitted.",
			c: "I can't digest properly and feel bloated.",
			d: "My stomach feels gassy bloated.",
			e: "None of the above below"
		},
		leap: {
			a: "U114",
			b: "U114",
			c: "U114",
			d: "U114",
			e: "U114"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 834
		question: "Do you feel dizzy more than you used to?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "U115",
			b: "U115"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 835
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I smoke more than I used to.",
			b: "I drink more than I used to.",
			c: "None of the above below"
		},
		leap: {
			a: "U116",
			b: "U116",
			c: "U116"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 836
		question: "Does your excrement have any issue?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "U117",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 837
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is difficult to poop defecate.",
			b: "My poop defecation leaks out unconsciously.",
			c: "After I poop defecate  I do not feel empty.",
			d: "I unusually urinate defecate frequently.",
			e: "I have constipation and am unable to poop defecate.",
			f: "None of the above below"
		},
		leap: {
			a: "U118",
			b: "U118",
			c: "U118",
			d: "U118",
			e: "U118",
			f: "U118"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 838
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I see red blood in my stool.",
			b: "My stool is dark  almost black in color.",
			c: "I have watery stool.",
			d: "I have phlegmatic diarreah.",
			e: "My stool doesn't look normal  it looks grey in color.",
			f: "I see grease floating on the toilet water with my stool.",
			g: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32",
			f: "32",
			g: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 839
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "I feel pain in my upper abdomen.",
			b: "I have pain in my lower abdomen. ",
			c: "None of the above below"
		},
		leap: {
			a: "U131",
			b: "U131",
			c: "U131"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 840
		question: "Did you pass out Are you forgetful Did you fall asleep frequently?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "U132",
			b: "U133"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 841
		question: "How long has your issue been like that? ",
		answers: {
			a: "I recovered within 24hrs.",
			b: "24?? ?? ??? ??.",
			c: "I haven't fainted or lost consciousness but I was sleepy."
		},
		leap: {
			a: "U133",
			b: "U133",
			c: "U133"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 842
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I had an accident (Car accident Physical activity).",
			b: "My pronunciation was unclear or can't communicate understand well.",
			c: "I feel dizzy.",
			d: "None of the above below"
		},
		leap: {
			a: "U134",
			b: "U134",
			c: "U134",
			d: "U134"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 843
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have numbness on my face or on the side of my face.",
			b: "My arms legs have twitched before.",
			c: "I have hypoesthesia.",
			d: "My legs bend automatically when I bend my head forward while lying down. ",
			e: "My body arms legs feel weak whenever I stand up walk.",
			f: "None of the above below"
		},
		leap: {
			a: "U135",
			b: "U135",
			c: "U135",
			d: "U135",
			e: "U135",
			f: "U135"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 844
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My eyes get blinded or hurt with light.",
			b: "My vision has worsened and I have double vision.",
			c: "None of the above below"
		},
		leap: {
			a: "U136",
			b: "U136",
			c: "U136"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 845
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "I have a light fever.",
			c: "My entire body has chills.",
			d: "I am sweating more than I used to.",
			e: "My hands feet are unusually cold.",
			f: "None of the above below"
		},
		leap: {
			a: "U137",
			b: "U137",
			c: "U137",
			d: "U137",
			e: "U137",
			f: "U137"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 846
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I smoke more than I used to.",
			b: "I drink more than I used to.",
			c: "I have diabetes.",
			d: "I have high blood pressue.",
			e: "I have cerebrovascular diseases.",
			f: "I recently had a cold or periodontitis.",
			g: "None of the above below"
		},
		leap: {
			a: "U138",
			b: "U138",
			c: "U138",
			d: "U138",
			e: "U138",
			f: "U138",
			g: "U138"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 847
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My face looks pale.",
			b: "My face turns red.",
			c: "None of the above below"
		},
		leap: {
			a: "U139",
			b: "U139",
			c: "U139"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 848
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have decreased appetite.",
			b: "I feel like I have to throw up or have already vomitted.",
			c: "I can't digest properly and feel bloated.",
			d: "My stomach feels gassy bloated.",
			e: "None of the above below"
		},
		leap: {
			a: "U140",
			b: "U140",
			c: "U140",
			d: "U140",
			e: "U140"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 849
		question: "Does your excrement have any issue?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "U141",
			b: "U143"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 850
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is difficult to poop defecate.",
			b: "My poop defecation leaks out unconsciously.",
			c: "After I poop defecate  I do not feel empty.",
			d: "I unusually urinate defecate frequently.",
			e: "I have constipation and am unable to poop defecate.",
			f: "None of the above below"
		},
		leap: {
			a: "U142",
			b: "U142",
			c: "U142",
			d: "U142",
			e: "U142",
			f: "U142"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 851
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I see red blood in my stool.",
			b: "My stool is dark  almost black in color.",
			c: "I have watery stool.",
			d: "I have phlegmatic diarreah.",
			e: "My stool doesn't look normal  it looks grey in color.",
			f: "I see grease floating on the toilet water with my stool.",
			g: "None of the above below"
		},
		leap: {
			a: "U143",
			b: "U143",
			c: "U143",
			d: "U143",
			e: "U143",
			f: "U143",
			g: "U143"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 852
		question: "Do you have any issue when you urinate? Or your urine doesn't look right?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "U144",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 853
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain during urination.",
			b: "I go to the bathroom very often to urinate.",
			c: "I unusually urinate frequently.",
			d: "I urinate longer than I used to.",
			e: "My urine doesn't come out normal when I try to urinate.",
			f: "It is difficult to hold my bladder  and after I urinate  it doesn't feel like I have emptied my bladder (feel like I still have to pee).",
			g: "None of the above below"
		},
		leap: {
			a: "U145",
			b: "U145",
			c: "U145",
			d: "U145",
			e: "U145",
			f: "U145",
			g: "U145"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 854
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The color of my urine looks more red than yellow. I think there is blood in my urine.",
			b: "My urine is darker. It is almost the color of coca-cola.",
			c: "My urine looks muddy.",
			d: "I have bubbles in my urine.",
			e: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 855
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "U160"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 856
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I feel like I have to throw up or have already vomitted.",
			b: "I can't digest properly and feel bloated.",
			c: "My stomach feels gassy bloated.",
			d: "I burp frequently.",
			e: "None of the above below"
		},
		leap: {
			a: "U161",
			b: "U161",
			c: "U161",
			d: "U161",
			e: "U161"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 857
		question: "Does your excrement have any issue?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "U162",
			b: "U164"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 858
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is difficult to poop defecate.",
			b: "My poop defecation leaks out unconsciously.",
			c: "After I poop defecate  I do not feel empty.",
			d: "I unusually urinate defecate frequently.",
			e: "I have constipation and am unable to poop defecate.",
			f: "None of the above below"
		},
		leap: {
			a: "U163",
			b: "U163",
			c: "U163",
			d: "U163",
			e: "U163",
			f: "U163"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 859
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I see red blood in my stool.",
			b: "My stool is dark  almost black in color.",
			c: "I have watery stool.",
			d: "I have phlegmatic diarreah.",
			e: "My stool doesn't look normal  it looks grey in color.",
			f: "I see grease floating on the toilet water with my stool.",
			g: "None of the above below"
		},
		leap: {
			a: "U164",
			b: "U164",
			c: "U164",
			d: "U164",
			e: "U164",
			f: "U164",
			g: "U164"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 860
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "I feel pain in my upper abdomen.",
			b: "I have pain in my lower abdomen. ",
			c: "I experience chest pain that feels like it is inside of my chest.",
			d: "I have a headache.",
			e: "?(?)? ???.",
			f: "None of the above below"
		},
		leap: {
			a: "U165",
			b: "U165",
			c: "U165",
			d: "U165",
			e: "U165",
			f: "U165"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 861
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I am sweating more than I used to.",
			b: "My hands feet are unusually cold.",
			c: "I can't sleep well at night.",
			d: "None of the above below"
		},
		leap: {
			a: "U166",
			b: "U166",
			c: "U166",
			d: "U166"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 862
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I smoke more than I used to.",
			b: "I drink more than I used to.",
			c: "None of the above below"
		},
		leap: {
			a: "U167",
			b: "U167",
			c: "U167"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 863
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "?? ?? ?? ??? ???? ??.",
			b: "My voice sounds hoarse.",
			c: "None of the above below"
		},
		leap: {
			a: "U168",
			b: "U168",
			c: "U168"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 864
		question: "Do you cough?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "U169",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 865
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cough.",
			b: "I have a cough that sounds like a dogs bark.",
			c: "I have a cough that is dry.",
			d: "I cough frequently.",
			e: "I cough more at night.",
			f: "I cough very hard and it leaves me out of breath."
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32",
			f: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 866
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "U180"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 867
		question: "Does your excrement have any issue?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "U181",
			b: "U183"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 868
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is difficult to poop defecate.",
			b: "My poop defecation leaks out unconsciously.",
			c: "After I poop defecate  I do not feel empty.",
			d: "I unusually urinate defecate frequently.",
			e: "I have constipation and am unable to poop defecate.",
			f: "None of the above below"
		},
		leap: {
			a: "U182",
			b: "U182",
			c: "U182",
			d: "U182",
			e: "U182",
			f: "U182"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 869
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I see red blood in my stool.",
			b: "My stool is dark  almost black in color.",
			c: "I have watery stool.",
			d: "I have phlegmatic diarreah.",
			e: "My stool doesn't look normal  it looks grey in color.",
			f: "I see grease floating on the toilet water with my stool.",
			g: "None of the above below"
		},
		leap: {
			a: "U183",
			b: "U183",
			c: "U183",
			d: "U183",
			e: "U183",
			f: "U183",
			g: "U183"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 870
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a light fever.",
			b: "I have a high fever.",
			c: "My entire body has chills.",
			d: "I lost weight very suddenly.",
			e: "I can't sleep well at night.",
			f: "None of the above below"
		},
		leap: {
			a: "U184",
			b: "U184",
			c: "U184",
			d: "U184",
			e: "U184",
			f: "U184"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 871
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have decreased appetite.",
			b: "I feel like I have to throw up or have already vomitted.",
			c: "My stomach feels gassy bloated.",
			d: "I burp frequently.",
			e: "None of the above below"
		},
		leap: {
			a: "U185",
			b: "U185",
			c: "U185",
			d: "U185",
			e: "U185"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 872
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My anus skin is loose I have anal skin tags.",
			b: "I have been overseas recently.",
			c: "None of the above below"
		},
		leap: {
			a: "U186",
			b: "U186",
			c: "U186"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 873
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "I feel pain in my upper abdomen.",
			b: "I have pain in my lower abdomen. ",
			c: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 874
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "U200"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 875
		question: "Do your lower abdomen and thigh area hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "U201",
			b: "U203"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 876
		question: "How does your groin hurt?",
		answers: {
			a: "My bladder feels bloated like it's going to explode.",
			b: "I can barely tolerate my severe pain.",
			c: "It stings.",
			d: "None of the above below"
		},
		leap: {
			a: "U202",
			b: "U202",
			c: "U202",
			d: "U202"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 877
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "It hurts more when I move.",
			d: "After I poop  my pain goes away.",
			e: "When I poop defacate  the pain starts.",
			f: "None of the above below"
		},
		leap: {
			a: "U203",
			b: "U203",
			c: "U203",
			d: "U203",
			e: "U203",
			f: "U203"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 878
		question: "Are you having back pain as well?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "U204",
			b: "U204"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 879
		question: "Do you have any issue when you urinate? Or your urine doesn't look right?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "U205",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 880
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain during urination.",
			b: "I go to the bathroom very often to urinate.",
			c: "I unusually urinate frequently.",
			d: "I urinate longer than I used to.",
			e: "My urine doesn't come out normal when I try to urinate.",
			f: "It is difficult to hold my bladder  and after I urinate  it doesn't feel like I have emptied my bladder (feel like I still have to pee).",
			g: "None of the above below"
		},
		leap: {
			a: "U206",
			b: "U206",
			c: "U206",
			d: "U206",
			e: "U206",
			f: "U206",
			g: "U206"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 881
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The color of my urine looks more red than yellow. I think there is blood in my urine.",
			b: "My urine is darker. It is almost the color of coca-cola.",
			c: "My urine looks muddy.",
			d: "I have bubbles in my urine.",
			e: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 882
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "V01"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 883
		question: "Do you have any fever?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "V02",
			b: "V02"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 884
		question: "Does your flank hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "V03",
			b: "V06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 885
		question: "Describe the pain in your flank.(multiple selection).",
		answers: {
			a: "My side feels like it is throbbing.",
			b: "It feels like stabbing pain.",
			c: "I have sharp pain that comes in bursts.",
			d: "I feel like I am going to poop defecate but I can't.",
			e: "None of the above below"
		},
		leap: {
			a: "V04",
			b: "V04",
			c: "V04",
			d: "V04",
			e: "V04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 886
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "It hurts more when I move.",
			d: "When I tap my side with my fist  it is an intolerable pain.",
			e: "None of the above below"
		},
		leap: {
			a: "V05",
			b: "V05",
			c: "V05",
			d: "V05",
			e: "V05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 887
		question: "Does your pain go away and come back repeatly?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "V06",
			b: "V06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 888
		question: "Select all parts of your body have pain.",
		answers: {
			a: "My back hurts (including shoulder).",
			b: "I feel pain in my upper abdomen.",
			c: "I have pain in my lower abdomen. ",
			d: "None of the above below"
		},
		leap: {
			a: "V07",
			b: "V07",
			c: "V07",
			d: "V07"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 889
		question: "Do you feel chilly?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "V08",
			b: "V08"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 890
		question: "Do you drink alcohol?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "V09",
			b: "V09"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 891
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have decreased appetite.",
			b: "I feel like I have to throw up or have already vomitted.",
			c: "My stomach feels gassy bloated.",
			d: "None of the above below"
		},
		leap: {
			a: "V10",
			b: "V10",
			c: "V10",
			d: "V10"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 892
		question: "Do you have any issue when you urinate? Or your urine doesn't look right?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "V11",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 893
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain during urination.",
			b: "I go to the bathroom very often to urinate.",
			c: "I unusually urinate frequently.",
			d: "I urinate longer than I used to.",
			e: "My urine doesn't come out normal when I try to urinate.",
			f: "It is difficult to hold my bladder  and after I urinate  it doesn't feel like I have emptied my bladder (feel like I still have to pee).",
			g: "None of the above below"
		},
		leap: {
			a: "V12",
			b: "V12",
			c: "V12",
			d: "V12",
			e: "V12",
			f: "V12",
			g: "V12"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 894
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The color of my urine looks more red than yellow. I think there is blood in my urine.",
			b: "My urine is darker. It is almost the color of coca-cola.",
			c: "My urine looks muddy.",
			d: "I have bubbles in my urine.",
			e: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 895
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "V20"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 896
		question: "Have you had any accidents (Car accident bumped in hurt while workout)?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "V21",
			b: "V21"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 897
		question: "Are you having back pain?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "V22",
			b: "V24"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 898
		question: "Can you describe your back pain?",
		answers: {
			a: "There is pain and it feels heavy (not severe  but weight).",
			b: "I feel stabbing and numbness.",
			c: "It is a stabbing pain.",
			d: "I have sharp pain.",
			e: "I feel stiffness  and feel constant straining.",
			f: "None of the above below"
		},
		leap: {
			a: "V23",
			b: "V23",
			c: "V23",
			d: "V23",
			e: "V23",
			f: "V23"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 899
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "I can't stand up due to pain.",
			d: "When I bend over backwards  my back pain gets worse.",
			e: "When I bend over forward  my pain gets worse.",
			f: "I have more pain in the mornings  it seems to get better with movement.",
			g: "None of the above below"
		},
		leap: {
			a: "V24",
			b: "V24",
			c: "V24",
			d: "V24",
			e: "V24",
			f: "V24",
			g: "V24"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 900
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "My buttock hurts.",
			b: "My pervic region hurts.",
			c: "All parts of my leg hurt.",
			d: "None of the above below"
		},
		leap: {
			a: "V25",
			b: "V25",
			c: "V25",
			d: "V25"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 901
		question: "Do you have tingling sensation in your legs or do you experience difficulty?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "V26",
			b: "V26"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 902
		question: "Do you get cramped in the morning night?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "V27",
			b: "V27"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 903
		question: "Do you feel numb on your leg?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "V28",
			b: "V28"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 904
		question: "Does your leg feel weak or did you lose leg muscles?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "V29",
			b: "V29"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 905
		question: "Does your body temporature get changed?",
		answers: {
			a: "I have a high fever.",
			b: "I can't stand the cold (temperature).",
			c: "No change"
		},
		leap: {
			a: "V30",
			b: "V30",
			c: "V30"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 906
		question: "Do you get sweaty more than you used to?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "V31",
			b: "V31"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 907
		question: "Do you have any issue when you urinate? Or your urine doesn't look right?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "V32",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 908
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain during urination.",
			b: "I go to the bathroom very often to urinate.",
			c: "I unusually urinate frequently.",
			d: "I urinate longer than I used to.",
			e: "My urine doesn't come out normal when I try to urinate.",
			f: "It is difficult to hold my bladder  and after I urinate  it doesn't feel like I have emptied my bladder (feel like I still have to pee).",
			g: "None of the above below"
		},
		leap: {
			a: "V33",
			b: "V33",
			c: "V33",
			d: "V33",
			e: "V33",
			f: "V33",
			g: "V33"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 909
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The color of my urine looks more red than yellow. I think there is blood in my urine.",
			b: "My urine is darker. It is almost the color of coca-cola.",
			c: "My urine looks muddy.",
			d: "I have bubbles in my urine.",
			e: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 910
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "W01"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 911
		question: "Which part does it hurt (buttocks anus)?",
		answers: {
			a: "My buttock hurts.",
			b: "My anus hurts."
		},
		leap: {
			a: "W02",
			b: "W20"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 912
		question: "Are you having back pain as well?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "W03",
			b: "W05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 913
		question: "Can you describe your back pain?",
		answers: {
			a: "There is pain and it feels heavy (not severe  but weight).",
			b: "I feel stabbing and numbness.",
			c: "It is a stabbing pain.",
			d: "I have sharp pain.",
			e: "I feel stiffness  and feel constant straining.",
			f: "None of the above below"
		},
		leap: {
			a: "W04",
			b: "W04",
			c: "W04",
			d: "W04",
			e: "W04",
			f: "W04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 914
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I press on the painful area  it increases pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "I can't stand up due to pain.",
			d: "When I bend over backwards  my back pain gets worse.",
			e: "When I bend over forward  my pain gets worse.",
			f: "I have more pain in the mornings  it seems to get better with movement.",
			g: "None of the above below"
		},
		leap: {
			a: "W05",
			b: "W05",
			c: "W05",
			d: "W05",
			e: "W05",
			f: "W05",
			g: "W05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 915
		question: "Do your calf or thigh hurt?",
		answers: {
			a: "Yes.",
			b: "No.",
			c: "None of the above below"
		},
		leap: {
			a: "W06",
			b: "W06",
			c: "W06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 916
		question: "Do you get cramped in the morning night?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "W07",
			b: "W07"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 917
		question: "Do you feel numb on your leg?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "W08",
			b: "W08"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 918
		question: "Does your leg feel weak or did you lose leg muscles?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "32",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 919
		question: "How does your anus hurt?",
		answers: {
			a: "I feel sore.",
			b: "It is difficult to sit because of the sharp pains.",
			c: "It is itchy  but hurts when I wipe with a tissue.",
			d: "None of the above below"
		},
		leap: {
			a: "W21",
			b: "W21",
			c: "W21",
			d: "W21"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 920
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I can't sit due to pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "It hurts more when I move.",
			d: "When I poop defacate  the pain starts.",
			e: "None of the above below"
		},
		leap: {
			a: "W22",
			b: "W22",
			c: "W22",
			d: "W22",
			e: "W22"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 921
		question: "Select all parts of your body have pain.",
		answers: {
			a: "I feel pain in my upper abdomen.",
			b: "I have pain in my lower abdomen. ",
			c: "None of the above below"
		},
		leap: {
			a: "W23",
			b: "W23",
			c: "W23"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 922
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My anus skin is loose I have anal skin tags.",
			b: "My anus is itchy.",
			c: "My anus bleeds.",
			d: "I am unable to push it out from my anus.",
			e: "None of the above below"
		},
		leap: {
			a: "W24",
			b: "W24",
			c: "W24",
			d: "W24",
			e: "W24"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 923
		question: "Does your excrement have any issue?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "W25",
			b: "W27"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 924
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is difficult to poop defecate.",
			b: "My poop defecation leaks out unconsciously.",
			c: "After I poop defecate  I do not feel empty.",
			d: "I unusually urinate defecate frequently.",
			e: "I have constipation and am unable to poop defecate.",
			f: "None of the above below"
		},
		leap: {
			a: "W26",
			b: "W26",
			c: "W26",
			d: "W26",
			e: "W26",
			f: "W26"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 925
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I see red blood in my stool.",
			b: "My stool is dark  almost black in color.",
			c: "I have watery stool.",
			d: "I have phlegmatic diarreah.",
			e: "My stool doesn't look normal  it looks grey in color.",
			f: "I see grease floating on the toilet water with my stool.",
			g: "None of the above below"
		},
		leap: {
			a: "W27",
			b: "W27",
			c: "W27",
			d: "W27",
			e: "W27",
			f: "W27",
			g: "W27"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 926
		question: "Did you lose weight recently?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "W28",
			b: "W28"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 927
		question: "Do you have any fever?",
		answers: {
			a: "Yes.",
			b: "No.",
			c: "I have a high fever."
		},
		leap: {
			a: "32",
			b: "32",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 928
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "W40"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 929
		question: "Does your anus hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "W41",
			b: "W43"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 930
		question: "How does your anus hurt?",
		answers: {
			a: "I feel sore.",
			b: "It is difficult to sit because of the sharp pains.",
			c: "It is itchy  but hurts when I wipe with a tissue.",
			d: "None of the above below"
		},
		leap: {
			a: "W42",
			b: "W42",
			c: "W42",
			d: "W42"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 931
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I can't sit due to pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "It hurts more when I move.",
			d: "When I poop defacate  the pain starts.",
			e: "None of the above below"
		},
		leap: {
			a: "W43",
			b: "W43",
			c: "W43",
			d: "W43",
			e: "W43"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 932
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My anus skin is loose I have anal skin tags.",
			b: "My anus is itchy.",
			c: "My anus bleeds.",
			d: "I am unable to push it out from my anus.",
			e: "None of the above below"
		},
		leap: {
			a: "W44",
			b: "W44",
			c: "W44",
			d: "W44",
			e: "W44"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 933
		question: "Does your excrement have any issue?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "W45",
			b: "W47"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 934
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is difficult to poop defecate.",
			b: "My poop defecation leaks out unconsciously.",
			c: "After I poop defecate  I do not feel empty.",
			d: "I unusually urinate defecate frequently.",
			e: "I have constipation and am unable to poop defecate.",
			f: "None of the above below"
		},
		leap: {
			a: "W46",
			b: "W46",
			c: "W46",
			d: "W46",
			e: "W46",
			f: "W46"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 935
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I see red blood in my stool.",
			b: "My stool is dark  almost black in color.",
			c: "I have watery stool.",
			d: "I have phlegmatic diarreah.",
			e: "My stool doesn't look normal  it looks grey in color.",
			f: "I see grease floating on the toilet water with my stool.",
			g: "None of the above below"
		},
		leap: {
			a: "W47",
			b: "W47",
			c: "W47",
			d: "W47",
			e: "W47",
			f: "W47",
			g: "W47"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 936
		question: "Did you lose weight recently?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "32",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 937
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "W60"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 938
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My anus skin is loose I have anal skin tags.",
			b: "My anus is itchy.",
			c: "My anus bleeds.",
			d: "I am unable to push it out from my anus.",
			e: "None of the above below"
		},
		leap: {
			a: "W61",
			b: "W61",
			c: "W61",
			d: "W61",
			e: "W61"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 939
		question: "Does your anus hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "W62",
			b: "W64"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 940
		question: "How does your anus hurt?",
		answers: {
			a: "I feel sore.",
			b: "It is difficult to sit because of the sharp pains.",
			c: "It is itchy  but hurts when I wipe with a tissue.",
			d: "None of the above below"
		},
		leap: {
			a: "W63",
			b: "W63",
			c: "W63",
			d: "W63"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 941
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I can't sit due to pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "It hurts more when I move.",
			d: "When I poop defacate  the pain starts.",
			e: "None of the above below"
		},
		leap: {
			a: "W64",
			b: "W64",
			c: "W64",
			d: "W64",
			e: "W64"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 942
		question: "Are you having pain in your lower abdomen as well?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "W65",
			b: "W65"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 943
		question: "Does your excrement have any issue?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "W66",
			b: "W68"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 944
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is difficult to poop defecate.",
			b: "My poop defecation leaks out unconsciously.",
			c: "After I poop defecate  I do not feel empty.",
			d: "I unusually urinate defecate frequently.",
			e: "I have constipation and am unable to poop defecate.",
			f: "None of the above below"
		},
		leap: {
			a: "W67",
			b: "W67",
			c: "W67",
			d: "W67",
			e: "W67",
			f: "W67"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 945
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I see red blood in my stool.",
			b: "My stool is dark  almost black in color.",
			c: "I have watery stool.",
			d: "I have phlegmatic diarreah.",
			e: "My stool doesn't look normal  it looks grey in color.",
			f: "I see grease floating on the toilet water with my stool.",
			g: "None of the above below"
		},
		leap: {
			a: "W68",
			b: "W68",
			c: "W68",
			d: "W68",
			e: "W68",
			f: "W68",
			g: "W68"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 946
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a light fever.",
			b: "I have a high fever.",
			c: "I lost weight very suddenly.",
			d: "I do not have an appetite.",
			e: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 947
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "W80"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 948
		question: "Does your excrement have any issue?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "W81",
			b: "W83"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 949
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is difficult to poop defecate.",
			b: "My poop defecation leaks out unconsciously.",
			c: "After I poop defecate  I do not feel empty.",
			d: "I unusually urinate defecate frequently.",
			e: "I have constipation and am unable to poop defecate.",
			f: "None of the above below"
		},
		leap: {
			a: "W82",
			b: "W82",
			c: "W82",
			d: "W82",
			e: "W82",
			f: "W82"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 950
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I see red blood in my stool.",
			b: "My stool is dark  almost black in color.",
			c: "I have watery stool.",
			d: "I have phlegmatic diarreah.",
			e: "My stool doesn't look normal  it looks grey in color.",
			f: "I see grease floating on the toilet water with my stool.",
			g: "None of the above below"
		},
		leap: {
			a: "W83",
			b: "W83",
			c: "W83",
			d: "W83",
			e: "W83",
			f: "W83",
			g: "W83"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 951
		question: "Does your anus hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "W84",
			b: "W86"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 952
		question: "How does your anus hurt?",
		answers: {
			a: "I feel sore.",
			b: "It is difficult to sit because of the sharp pains.",
			c: "It is itchy  but hurts when I wipe with a tissue.",
			d: "None of the above below"
		},
		leap: {
			a: "W85",
			b: "W85",
			c: "W85",
			d: "W85"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 953
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I can't sit due to pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "It hurts more when I move.",
			d: "When I poop defacate  the pain starts.",
			e: "None of the above below"
		},
		leap: {
			a: "W86",
			b: "W86",
			c: "W86",
			d: "W86",
			e: "W86"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 954
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "???? ???.",
			b: "I feel pain in my uppper abdomen as well. ",
			c: "None of the above below"
		},
		leap: {
			a: "W87",
			b: "W87",
			c: "W87"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 955
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My anus skin is loose I have anal skin tags.",
			b: "My anus is itchy.",
			c: "My anus bleeds.",
			d: "I am unable to push it out from my anus.",
			e: "None of the above below"
		},
		leap: {
			a: "W88",
			b: "W88",
			c: "W88",
			d: "W88",
			e: "W88"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 956
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I feel like I have to throw up or have already vomitted.",
			b: "I feel as if I have a fever.",
			c: "I lost weight very suddenly.",
			d: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 957
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "W100"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 958
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My anus skin is loose I have anal skin tags.",
			b: "My anus is itchy.",
			c: "My anus bleeds.",
			d: "I am unable to push it out from my anus.",
			e: "None of the above below"
		},
		leap: {
			a: "W101",
			b: "W101",
			c: "W101",
			d: "W101",
			e: "W101"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 959
		question: "Does your anus hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "W102",
			b: "W104"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 960
		question: "How does your anus hurt?",
		answers: {
			a: "I feel sore.",
			b: "It is difficult to sit because of the sharp pains.",
			c: "It is itchy  but hurts when I wipe with a tissue.",
			d: "None of the above below"
		},
		leap: {
			a: "W103",
			b: "W103",
			c: "W103",
			d: "W103"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 961
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I can't sit due to pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "It hurts more when I move.",
			d: "When I poop defacate  the pain starts.",
			e: "None of the above below"
		},
		leap: {
			a: "W104",
			b: "W104",
			c: "W104",
			d: "W104",
			e: "W104"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 962
		question: "Does your excrement have any issue?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "W105",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 963
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is difficult to poop defecate.",
			b: "My poop defecation leaks out unconsciously.",
			c: "After I poop defecate  I do not feel empty.",
			d: "I unusually urinate defecate frequently.",
			e: "I have constipation and am unable to poop defecate.",
			f: "None of the above below"
		},
		leap: {
			a: "W106",
			b: "W106",
			c: "W106",
			d: "W106",
			e: "W106",
			f: "W106"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 964
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I see red blood in my stool.",
			b: "My stool is dark  almost black in color.",
			c: "I have watery stool.",
			d: "I have phlegmatic diarreah.",
			e: "My stool doesn't look normal  it looks grey in color.",
			f: "I see grease floating on the toilet water with my stool.",
			g: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32",
			f: "32",
			g: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 965
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "W120"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 966
		question: "Does your excrement have any issue?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "W121",
			b: "W123"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 967
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is difficult to poop defecate.",
			b: "My poop defecation leaks out unconsciously.",
			c: "After I poop defecate  I do not feel empty.",
			d: "I unusually urinate defecate frequently.",
			e: "I have constipation and am unable to poop defecate.",
			f: "None of the above below"
		},
		leap: {
			a: "W122",
			b: "W122",
			c: "W122",
			d: "W122",
			e: "W122",
			f: "W122"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 968
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I see red blood in my stool.",
			b: "My stool is dark  almost black in color.",
			c: "I have watery stool.",
			d: "I have phlegmatic diarreah.",
			e: "My stool doesn't look normal  it looks grey in color.",
			f: "I see grease floating on the toilet water with my stool.",
			g: "None of the above below"
		},
		leap: {
			a: "W123",
			b: "W123",
			c: "W123",
			d: "W123",
			e: "W123",
			f: "W123",
			g: "W123"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 969
		question: "Do you get blood from your anus?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "W124",
			b: "W124"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 970
		question: "Do you have any issue with squeezing or tightening your anus sphincter?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "W125",
			b: "W125"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 971
		question: "Select all parts of your body have pain.",
		answers: {
			a: "I have pain in my lower abdomen. ",
			b: "I feel pain in my upper abdomen.",
			c: "My back hurts (including shoulder).",
			d: "My anus hurts.",
			e: "None of the above below"
		},
		leap: {
			a: "W126",
			b: "W126",
			c: "W126",
			d: "W126",
			e: "W126"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 972
		question: "Do you have any lump on your stoamch (multiple selection).",
		answers: {
			a: "I feel a lump on my upper abdomen.",
			b: "I feel a lump on my lower abdomen.",
			c: "None of the above below"
		},
		leap: {
			a: "W127",
			b: "W127",
			c: "W127"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 973
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a light fever.",
			b: "I feel unusually dizzy.",
			c: "I lost weight very suddenly.",
			d: "My body feels itchy.",
			e: "None of the above below"
		},
		leap: {
			a: "W128",
			b: "W128",
			c: "W128",
			d: "W128",
			e: "W128"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 974
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have decreased appetite.",
			b: "I feel like I have to throw up or have already vomitted.",
			c: "I burp frequently.",
			d: "I have indigestion.",
			e: "I feel bloating in my stomach.",
			f: "None of the above below"
		},
		leap: {
			a: "W129",
			b: "W129",
			c: "W129",
			d: "W129",
			e: "W129",
			f: "W129"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 975
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I smoke more than I used to.",
			b: "I drink more than I used to.",
			c: "None of the above below"
		},
		leap: {
			a: "W130",
			b: "W130",
			c: "W130"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 976
		question: "Do you have any spots looks like spider web on your neck chest stomach?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "W131",
			b: "W132"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 977
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have red palms soles.",
			b: "I get bruised easily and my gums are bleeding.",
			c: "My skin is darker.",
			d: "My finger toe nails are dry and brittle easy to break.",
			e: "None of the above below"
		},
		leap: {
			a: "W132",
			b: "W132",
			c: "W132",
			d: "W132",
			e: "W132"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 978
		question: "Does your eye skin get yellow?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "W133",
			b: "W133"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 979
		question: "Do you have any issue when you urinate? Or your urine doesn't look right?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "W134",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 980
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain during urination.",
			b: "I go to the bathroom very often to urinate.",
			c: "I unusually urinate frequently.",
			d: "I urinate longer than I used to.",
			e: "My urine doesn't come out normal when I try to urinate.",
			f: "It is difficult to hold my bladder  and after I urinate  it doesn't feel like I have emptied my bladder (feel like I still have to pee).",
			g: "None of the above below"
		},
		leap: {
			a: "W135",
			b: "W135",
			c: "W135",
			d: "W135",
			e: "W135",
			f: "W135",
			g: "W135"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 981
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The color of my urine looks more red than yellow. I think there is blood in my urine.",
			b: "My urine is darker. It is almost the color of coca-cola.",
			c: "My urine looks muddy.",
			d: "I have bubbles in my urine.",
			e: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 982
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "X01"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 983
		question: "Do you have any issue when you urinate? Or your urine doesn't look right?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "X02",
			b: "X04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 984
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain during urination.",
			b: "I go to the bathroom very often to urinate.",
			c: "I unusually urinate frequently.",
			d: "I urinate longer than I used to.",
			e: "My urine doesn't come out normal when I try to urinate.",
			f: "It is difficult to hold my bladder  and after I urinate  it doesn't feel like I have emptied my bladder (feel like I still have to pee).",
			g: "None of the above below"
		},
		leap: {
			a: "X03",
			b: "X03",
			c: "X03",
			d: "X03",
			e: "X03",
			f: "X03",
			g: "X03"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 985
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The color of my urine looks more red than yellow. I think there is blood in my urine.",
			b: "My urine is darker. It is almost the color of coca-cola.",
			c: "My urine looks muddy.",
			d: "I have bubbles in my urine.",
			e: "None of the above below"
		},
		leap: {
			a: "X04",
			b: "X04",
			c: "X04",
			d: "X04",
			e: "X04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 986
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a light fever.",
			b: "My entire body has chills.",
			c: "My body is swollen compared to what it was before.",
			d: "None of the above below"
		},
		leap: {
			a: "X05",
			b: "X05",
			c: "X05",
			d: "X05"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 987
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My stomach feels gassy bloated.",
			b: "I feel like I have to throw up or have already vomitted.",
			c: "None of the above below"
		},
		leap: {
			a: "X06",
			b: "X06",
			c: "X06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 988
		question: "Select all parts of your body have pain.",
		answers: {
			a: "My back hurts.",
			b: "My side hurts.",
			c: "My back hurts (including shoulder).",
			d: "My pervic region hurts.",
			e: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 989
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "X20"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 990
		question: "Do you have any issue when you urinate? Or your urine doesn't look right?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "X21",
			b: "X23"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 991
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain during urination.",
			b: "I go to the bathroom very often to urinate.",
			c: "I unusually urinate frequently.",
			d: "I urinate longer than I used to.",
			e: "My urine doesn't come out normal when I try to urinate.",
			f: "It is difficult to hold my bladder  and after I urinate  it doesn't feel like I have emptied my bladder (feel like I still have to pee).",
			g: "None of the above below"
		},
		leap: {
			a: "X22",
			b: "X22",
			c: "X22",
			d: "X22",
			e: "X22",
			f: "X22",
			g: "X22"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 992
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The color of my urine looks more red than yellow. I think there is blood in my urine.",
			b: "My urine is darker. It is almost the color of coca-cola.",
			c: "My urine looks muddy.",
			d: "I have bubbles in my urine.",
			e: "None of the above below"
		},
		leap: {
			a: "X23",
			b: "X23",
			c: "X23",
			d: "X23",
			e: "X23"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 993
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My body definitely got swollen.",
			b: "My ankle swelled.",
			c: "None of the above below"
		},
		leap: {
			a: "X24",
			b: "X24",
			c: "X24"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 994
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I do not have an appetite.",
			b: "I feel like I have to throw up or have already vomitted.",
			c: "None of the above below"
		},
		leap: {
			a: "X25",
			b: "X25",
			c: "X25"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 995
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have diabetes.",
			b: "I have high blood pressue.",
			c: "None of the above below"
		},
		leap: {
			a: "X26",
			b: "X26",
			c: "X26"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 996
		question: "Do you have any fever?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "X27",
			b: "X27"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 997
		question: "Do you have cramp twitch over your body or arms legs?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "32",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 998
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "X40"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 999
		question: "What is your sex?",
		answers: {
			a: "Male",
			b: "Female"
		},
		leap: {
			a: "X41",
			b: "X60"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1000
		question: "Do you have any issue when you urinate? Or your urine doesn't look right?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "X42",
			b: "X44"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1001
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain during urination.",
			b: "I go to the bathroom very often to urinate.",
			c: "I unusually urinate frequently.",
			d: "I urinate longer than I used to.",
			e: "My urine doesn't come out normal when I try to urinate.",
			f: "It is difficult to hold my bladder  and after I urinate  it doesn't feel like I have emptied my bladder (feel like I still have to pee).",
			g: "None of the above below"
		},
		leap: {
			a: "X43",
			b: "X43",
			c: "X43",
			d: "X43",
			e: "X43",
			f: "X43",
			g: "X43"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1002
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The color of my urine looks more red than yellow. I think there is blood in my urine.",
			b: "My urine is darker. It is almost the color of coca-cola.",
			c: "My urine looks muddy.",
			d: "I have bubbles in my urine.",
			e: "None of the above below"
		},
		leap: {
			a: "X44",
			b: "X44",
			c: "X44",
			d: "X44",
			e: "X44"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1003
		question: "Do you experience urinary incontinence when you have consciousness degradation?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "X45",
			b: "X45"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1004
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have unusual discharge from my genitals.",
			b: "My genital is itchy.",
			c: "None of the above below"
		},
		leap: {
			a: "X46",
			b: "X46",
			c: "X46"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1005
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My vision got blurry and I have double vision.",
			b: "My body arms legs feel weak whenever I stand up walk.",
			c: "I feel a decrease in sensitivity when something touches me.",
			d: "None of the above below"
		},
		leap: {
			a: "X47",
			b: "X47",
			c: "X47",
			d: "X47"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1006
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I feel as if I have a fever.",
			b: "My entire body has chills.",
			c: "None of the above below"
		},
		leap: {
			a: "X48",
			b: "X48",
			c: "X48"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1007
		question: "Do you feel nautious or vomit?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "X49",
			b: "X49"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1008
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have cerebrovascular diseases.",
			b: "I have high blood pressue.",
			c: "None of the above below"
		},
		leap: {
			a: "X50",
			b: "X50",
			c: "X50"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1009
		question: "Select all parts of your body have pain.",
		answers: {
			a: "I have a headache.",
			b: "My back hurts.",
			c: "My side hurts.",
			d: "My back hurts (including shoulder).",
			e: "My pervic region hurts.",
			f: "My genital hurts.",
			g: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32",
			f: "32",
			g: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1010
		question: "Do you have any issue when you urinate? Or your urine doesn't look right?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "X61",
			b: "X63"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1011
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain during urination.",
			b: "I go to the bathroom very often to urinate.",
			c: "I unusually urinate frequently.",
			d: "I urinate longer than I used to.",
			e: "My urine doesn't come out normal when I try to urinate.",
			f: "It is difficult to hold my bladder  and after I urinate  it doesn't feel like I have emptied my bladder (feel like I still have to pee).",
			g: "None of the above below"
		},
		leap: {
			a: "X62",
			b: "X62",
			c: "X62",
			d: "X62",
			e: "X62",
			f: "X62",
			g: "X62"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1012
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The color of my urine looks more red than yellow. I think there is blood in my urine.",
			b: "My urine is darker. It is almost the color of coca-cola.",
			c: "My urine looks muddy.",
			d: "I have bubbles in my urine.",
			e: "None of the above below"
		},
		leap: {
			a: "X63",
			b: "X63",
			c: "X63",
			d: "X63",
			e: "X63"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1013
		question: "Do you experience urinary incontinence when you have consciousness degradation?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "X64",
			b: "X64"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1014
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have more vaginal discharge.",
			b: "My genital is itchy.",
			c: "None of the above below"
		},
		leap: {
			a: "X65",
			b: "X65",
			c: "X65"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1015
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My vision got blurry and I have double vision.",
			b: "My body arms legs feel weak whenever I stand up walk.",
			c: "I feel a decrease in sensitivity when something touches me.",
			d: "None of the above below"
		},
		leap: {
			a: "X66",
			b: "X66",
			c: "X66",
			d: "X66"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1016
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I feel as if I have a fever.",
			b: "My entire body has chills.",
			c: "None of the above below"
		},
		leap: {
			a: "X67",
			b: "X67",
			c: "X67"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1017
		question: "Do you feel nautious or vomit?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "X68",
			b: "X68"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1018
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have cerebrovascular diseases.",
			b: "I have high blood pressue.",
			c: "None of the above below"
		},
		leap: {
			a: "X69",
			b: "X69",
			c: "X69"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1019
		question: "Select all parts of your body have pain.",
		answers: {
			a: "I have a headache.",
			b: "My back hurts.",
			c: "My side hurts.",
			d: "My back hurts (including shoulder).",
			e: "My pervic region hurts.",
			f: "My genital hurts.",
			g: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32",
			f: "32",
			g: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1020
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "X80"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1021
		question: "What is your sex?",
		answers: {
			a: "Male",
			b: "Female"
		},
		leap: {
			a: "X81",
			b: "X100"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1022
		question: "Do you have any issue when you urinate? Or your urine doesn't look right?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "X82",
			b: "X84"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1023
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain during urination.",
			b: "I go to the bathroom very often to urinate.",
			c: "I unusually urinate frequently.",
			d: "I urinate longer than I used to.",
			e: "My urine doesn't come out normal when I try to urinate.",
			f: "It is difficult to hold my bladder  and after I urinate  it doesn't feel like I have emptied my bladder (feel like I still have to pee).",
			g: "None of the above below"
		},
		leap: {
			a: "X83",
			b: "X83",
			c: "X83",
			d: "X83",
			e: "X83",
			f: "X83",
			g: "X83"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1024
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The color of my urine looks more red than yellow. I think there is blood in my urine.",
			b: "My urine is darker. It is almost the color of coca-cola.",
			c: "My urine looks muddy.",
			d: "I have bubbles in my urine.",
			e: "None of the above below"
		},
		leap: {
			a: "X84",
			b: "X84",
			c: "X84",
			d: "X84",
			e: "X84"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1025
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have unusual discharge from my genitals.",
			b: "My genital is itchy.",
			c: "None of the above below"
		},
		leap: {
			a: "X85",
			b: "X85",
			c: "X85"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1026
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "My back hurts.",
			b: "My side hurts.",
			c: "My back hurts (including shoulder).",
			d: "My pervic region hurts.",
			e: "My genital hurts.",
			f: "None of the above below"
		},
		leap: {
			a: "X86",
			b: "X86",
			c: "X86",
			d: "X86",
			e: "X86",
			f: "X86"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1027
		question: "Do you have any fever?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "X87",
			b: "X87"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1028
		question: "Do you have chill?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "X88",
			b: "X88"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1029
		question: "Do you feel nautious or vomit?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "32",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1030
		question: "Do you have any issue when you urinate? Or your urine doesn't look right?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "X101",
			b: "X103"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1031
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain during urination.",
			b: "I go to the bathroom very often to urinate.",
			c: "I unusually urinate frequently.",
			d: "I urinate longer than I used to.",
			e: "My urine doesn't come out normal when I try to urinate.",
			f: "It is difficult to hold my bladder  and after I urinate  it doesn't feel like I have emptied my bladder (feel like I still have to pee).",
			g: "None of the above below"
		},
		leap: {
			a: "X102",
			b: "X102",
			c: "X102",
			d: "X102",
			e: "X102",
			f: "X102",
			g: "X102"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1032
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The color of my urine looks more red than yellow. I think there is blood in my urine.",
			b: "My urine is darker. It is almost the color of coca-cola.",
			c: "My urine looks muddy.",
			d: "I have bubbles in my urine.",
			e: "None of the above below"
		},
		leap: {
			a: "X103",
			b: "X103",
			c: "X103",
			d: "X103",
			e: "X103"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1033
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have more vaginal discharge.",
			b: "My genital is itchy.",
			c: "None of the above below"
		},
		leap: {
			a: "X104",
			b: "X104",
			c: "X104"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1034
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "My back hurts.",
			b: "My side hurts.",
			c: "My back hurts (including shoulder).",
			d: "My pervic region hurts.",
			e: "My genital hurts.",
			f: "None of the above below"
		},
		leap: {
			a: "X105",
			b: "X105",
			c: "X105",
			d: "X105",
			e: "X105",
			f: "X105"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1035
		question: "Do you have any fever?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "X106",
			b: "X106"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1036
		question: "Do you have chill?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "X107",
			b: "X107"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1037
		question: "Do you feel nautious or vomit?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "32",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1038
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "X120"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1039
		question: "What is your sex?",
		answers: {
			a: "Male",
			b: "Female"
		},
		leap: {
			a: "X121",
			b: "X140"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1040
		question: "Do you have any issue when you urinate? Or your urine doesn't look right?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "X122",
			b: "X124"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1041
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain during urination.",
			b: "I go to the bathroom very often to urinate.",
			c: "I unusually urinate frequently.",
			d: "I urinate longer than I used to.",
			e: "My urine doesn't come out normal when I try to urinate.",
			f: "It is difficult to hold my bladder  and after I urinate  it doesn't feel like I have emptied my bladder (feel like I still have to pee).",
			g: "None of the above below"
		},
		leap: {
			a: "X123",
			b: "X123",
			c: "X123",
			d: "X123",
			e: "X123",
			f: "X123",
			g: "X123"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1042
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The color of my urine looks more red than yellow. I think there is blood in my urine.",
			b: "My urine is darker. It is almost the color of coca-cola.",
			c: "My urine looks muddy.",
			d: "I have bubbles in my urine.",
			e: "None of the above below"
		},
		leap: {
			a: "X124",
			b: "X124",
			c: "X124",
			d: "X124",
			e: "X124"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1043
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have diabetes.",
			b: "I feel anxious or depressed.",
			c: "I am sweating more than I used to.",
			d: "None of the above below"
		},
		leap: {
			a: "X125",
			b: "X125",
			c: "X125",
			d: "X125"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1044
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "I have a light fever.",
			c: "I can't stand the cold (temperature).",
			d: "My entire body has chills.",
			e: "I lost weight very suddenly.",
			f: "None of the above below"
		},
		leap: {
			a: "X126",
			b: "X126",
			c: "X126",
			d: "X126",
			e: "X126",
			f: "X126"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1045
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I am thirsty more often than usual.",
			b: "I feel like I have to throw up or have already vomitted.",
			c: "None of the above below"
		},
		leap: {
			a: "X127",
			b: "X127",
			c: "X127"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1046
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "My back hurts.",
			b: "My side hurts.",
			c: "My back hurts (including shoulder).",
			d: "My pervic region hurts.",
			e: "My genital hurts.",
			f: "None of the above below"
		},
		leap: {
			a: "X128",
			b: "X128",
			c: "X128",
			d: "X128",
			e: "X128",
			f: "X128"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1047
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have unusual discharge from my genitals.",
			b: "My genital is itchy.",
			c: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1048
		question: "Do you have any issue when you urinate? Or your urine doesn't look right?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "X141",
			b: "X143"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1049
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain during urination.",
			b: "I go to the bathroom very often to urinate.",
			c: "I unusually urinate frequently.",
			d: "I urinate longer than I used to.",
			e: "My urine doesn't come out normal when I try to urinate.",
			f: "It is difficult to hold my bladder  and after I urinate  it doesn't feel like I have emptied my bladder (feel like I still have to pee).",
			g: "None of the above below"
		},
		leap: {
			a: "X142",
			b: "X142",
			c: "X142",
			d: "X142",
			e: "X142",
			f: "X142",
			g: "X142"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1050
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The color of my urine looks more red than yellow. I think there is blood in my urine.",
			b: "My urine is darker. It is almost the color of coca-cola.",
			c: "My urine looks muddy.",
			d: "I have bubbles in my urine.",
			e: "None of the above below"
		},
		leap: {
			a: "X143",
			b: "X143",
			c: "X143",
			d: "X143",
			e: "X143"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1051
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have diabetes.",
			b: "I feel anxious or depressed.",
			c: "I am sweating more than I used to.",
			d: "None of the above below"
		},
		leap: {
			a: "X144",
			b: "X144",
			c: "X144",
			d: "X144"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1052
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "I have a light fever.",
			c: "I can't stand the cold (temperature).",
			d: "My entire body has chills.",
			e: "I lost weight very suddenly.",
			f: "None of the above below"
		},
		leap: {
			a: "X145",
			b: "X145",
			c: "X145",
			d: "X145",
			e: "X145",
			f: "X145"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1053
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I am thirsty more often than usual.",
			b: "I feel like I have to throw up or have already vomitted.",
			c: "None of the above below"
		},
		leap: {
			a: "X146",
			b: "X146",
			c: "X146"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1054
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "My back hurts.",
			b: "My side hurts.",
			c: "My back hurts (including shoulder).",
			d: "My pervic region hurts.",
			e: "My genital hurts.",
			f: "None of the above below"
		},
		leap: {
			a: "X147",
			b: "X147",
			c: "X147",
			d: "X147",
			e: "X147",
			f: "X147"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1055
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have more vaginal discharge.",
			b: "My genital is itchy.",
			c: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1056
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "X170"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1057
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a high fever.",
			b: "I have a light fever.",
			c: "I can't stand the heat.",
			d: "None of the above below"
		},
		leap: {
			a: "X171",
			b: "X171",
			c: "X171",
			d: "X171"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1058
		question: "Do you get sweaty more than you used to?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "X172",
			b: "X172"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1059
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I am anxious and depressed.",
			b: "I feel unusually dizzy.",
			c: "I can't sleep well at night.",
			d: "None of the above below"
		},
		leap: {
			a: "X173",
			b: "X173",
			c: "X173",
			d: "X173"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1060
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My stomach feels gassy bloated.",
			b: "I have decreased appetite.",
			c: "I have indigestion issues when I eat.",
			d: "None of the above below"
		},
		leap: {
			a: "X174",
			b: "X174",
			c: "X174",
			d: "X174"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1061
		question: "Do you smoke?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "X175",
			b: "X175"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1062
		question: "Have you given a birth before?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "X176",
			b: "X176"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1063
		question: "Do you have any issue when you urinate? Or your urine doesn't look right?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "X177",
			b: "X179"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1064
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain during urination.",
			b: "I go to the bathroom very often to urinate.",
			c: "I unusually urinate frequently.",
			d: "I urinate longer than I used to.",
			e: "My urine doesn't come out normal when I try to urinate.",
			f: "It is difficult to hold my bladder  and after I urinate  it doesn't feel like I have emptied my bladder (feel like I still have to pee).",
			g: "None of the above below"
		},
		leap: {
			a: "X178",
			b: "X178",
			c: "X178",
			d: "X178",
			e: "X178",
			f: "X178",
			g: "X178"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1065
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The color of my urine looks more red than yellow. I think there is blood in my urine.",
			b: "My urine is darker. It is almost the color of coca-cola.",
			c: "My urine looks muddy.",
			d: "I have bubbles in my urine.",
			e: "None of the above below"
		},
		leap: {
			a: "X179",
			b: "X179",
			c: "X179",
			d: "X179",
			e: "X179"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1066
		question: "Has your period volume cramp days changed?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "X180",
			b: "X181"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1067
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My period volume has decreased  changed  or I stopped getting my period.",
			b: "My period volume has increased.",
			c: "My menstrual cycle became irregular.",
			d: "My period takes longer than it used to.",
			e: "I have bad cramps during my period."
		},
		leap: {
			a: "X181",
			b: "X181",
			c: "X181",
			d: "X181",
			e: "X181"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1068
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have more vaginal discharge.",
			b: "My genital is itchy.",
			c: "My vagina bleeds when I am not on my period.",
			d: "My genitals unusually smell bad.",
			e: "None of the above below"
		},
		leap: {
			a: "X182",
			b: "X182",
			c: "X182",
			d: "X182",
			e: "X182"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1069
		question: "Does your genital hurt?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "X183",
			b: "X185"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1070
		question: "How does your genital hurt?",
		answers: {
			a: "I have a tingling pain.",
			b: "I have a stabbing pain.",
			c: "I feel sore.",
			d: "I have severe pain."
		},
		leap: {
			a: "X184",
			b: "X184",
			c: "X184",
			d: "X184"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1071
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "When I sit or put pressure it increases the pain.",
			b: "My pain doesn't subside even after I take pain medication.",
			c: "??? ? ? ???.",
			d: "I feel better after I poop defecate.",
			e: "When I poop defecate  my pain begins.",
			f: "None of the above below"
		},
		leap: {
			a: "X185",
			b: "X185",
			c: "X185",
			d: "X185",
			e: "X185",
			f: "X185"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1072
		question: "Select all the part that you have problem with (multiple selection).",
		answers: {
			a: "The back side of my neck hurts.",
			b: "I have pain in my lower abdomen. ",
			c: "My groin hip hurts.",
			d: "None of the above below"
		},
		leap: {
			a: "X186",
			b: "X186",
			c: "X186",
			d: "X186"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1073
		question: "Do you get any pain while having sex?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "32",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1074
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "Y01"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1075
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I feel unusually dizzy.",
			b: "????? ??.",
			c: "I have a light fever.",
			d: "My entire body has chills.",
			e: "None of the above below"
		},
		leap: {
			a: "Y02",
			b: "Y02",
			c: "Y02",
			d: "Y02",
			e: "Y02"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1076
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have decreased appetite.",
			b: "I feel like I have to throw up or have already vomitted.",
			c: "None of the above below"
		},
		leap: {
			a: "Y03",
			b: "Y03",
			c: "Y03"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1077
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a runny nose.",
			b: "I have a stuffy nose and can't breathe well.",
			c: "I sneeze.",
			d: "None of the above below"
		},
		leap: {
			a: "Y04",
			b: "Y04",
			c: "Y04",
			d: "Y04"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1078
		question: "Do you have difficulty with breathing?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y05",
			b: "Y06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1079
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have discomfort in my chest when breathing  or when breathing through my mouth.",
			b: "When I exhale  it sounds very shallow.",
			c: "I have a short shallow breath. I breathe fast.",
			d: "None of the above below"
		},
		leap: {
			a: "Y06",
			b: "Y06",
			c: "Y06",
			d: "Y06"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1080
		question: "Do you cough?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y07",
			b: "Y08"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1081
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cough.",
			b: "I have a cough that sounds like a dogs bark.",
			c: "I have a cough that is dry.",
			d: "I cough frequently.",
			e: "I cough more at night.",
			f: "I cough very hard and it leaves me out of breath."
		},
		leap: {
			a: "Y08",
			b: "Y08",
			c: "Y08",
			d: "Y08",
			e: "Y08",
			f: "Y08"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1082
		question: "Do you get phlegm?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y09",
			b: "Y10"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1083
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have phlegm.",
			b: "I have sticky phlegm.",
			c: "I have yellow phlegm.",
			d: "I have blood in my phlegm."
		},
		leap: {
			a: "Y10",
			b: "Y10",
			c: "Y10",
			d: "Y10"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1084
		question: "Select all parts of your body have pain.",
		answers: {
			a: "I have a headache.",
			b: "I experience chest pain that feels like it is inside of my chest.",
			c: "?(?)? ???.",
			d: "None of the above below"
		},
		leap: {
			a: "Y11",
			b: "Y11",
			c: "Y11",
			d: "Y11"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1085
		question: "Have you been exposed to AC for hours?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "32",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1086
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "Y30"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1087
		question: "Is your body itchy?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y31",
			b: "Y31"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1088
		question: "Does your eye skin get yellow?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y32",
			b: "Y32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1089
		question: "Do you drink alcohol?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y33",
			b: "Y33"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1090
		question: "Do you have any issue when you urinate? Or your urine doesn't look right?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y34",
			b: "Y36"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1091
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain during urination.",
			b: "I go to the bathroom very often to urinate.",
			c: "I unusually urinate frequently.",
			d: "I urinate longer than I used to.",
			e: "My urine doesn't come out normal when I try to urinate.",
			f: "It is difficult to hold my bladder  and after I urinate  it doesn't feel like I have emptied my bladder (feel like I still have to pee).",
			g: "None of the above below"
		},
		leap: {
			a: "Y35",
			b: "Y35",
			c: "Y35",
			d: "Y35",
			e: "Y35",
			f: "Y35",
			g: "Y35"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1092
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The color of my urine looks more red than yellow. I think there is blood in my urine.",
			b: "My urine is darker. It is almost the color of coca-cola.",
			c: "My urine looks muddy.",
			d: "I have bubbles in my urine.",
			e: "None of the above below"
		},
		leap: {
			a: "Y36",
			b: "Y36",
			c: "Y36",
			d: "Y36",
			e: "Y36"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1093
		question: "Does your excrement have any issue?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y37",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1094
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is difficult to poop defecate.",
			b: "My poop defecation leaks out unconsciously.",
			c: "After I poop defecate  I do not feel empty.",
			d: "I unusually urinate defecate frequently.",
			e: "I have constipation and am unable to poop defecate.",
			f: "None of the above below"
		},
		leap: {
			a: "Y38",
			b: "Y38",
			c: "Y38",
			d: "Y38",
			e: "Y38",
			f: "Y38"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1095
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I see red blood in my stool.",
			b: "My stool is dark  almost black in color.",
			c: "I have watery stool.",
			d: "I have phlegmatic diarreah.",
			e: "My stool doesn't look normal  it looks grey in color.",
			f: "I see grease floating on the toilet water with my stool.",
			g: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32",
			f: "32",
			g: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1096
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "Y50"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1097
		question: "What is your sex?",
		answers: {
			a: "Male",
			b: "Female"
		},
		leap: {
			a: "Y51",
			b: "Y90"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1098
		question: "Do you get sweaty more than you used to?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y52",
			b: "Y52"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1099
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a light fever.",
			b: "I can't stand the heat.",
			c: "I lost weight very suddenly.",
			d: "My heart beats fast and I can feel my heart beat.",
			e: "I can't sleep well at night.",
			f: "None of the above below"
		},
		leap: {
			a: "Y53",
			b: "Y53",
			c: "Y53",
			d: "Y53",
			e: "Y53",
			f: "Y53"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1100
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I am anxious and depressed.",
			b: "I feel unusually dizzy.",
			c: "None of the above below"
		},
		leap: {
			a: "Y54",
			b: "Y54",
			c: "Y54"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1101
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have unusual hand shakes tremors.",
			b: "My hands feet are unusually cold.",
			c: "None of the above below"
		},
		leap: {
			a: "Y55",
			b: "Y55",
			c: "Y55"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1102
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I can't digest properly and feel bloated.",
			b: "My stomach feels gassy bloated.",
			c: "I have decreased appetite.",
			d: "I feel like I have to throw up or have already vomitted.",
			e: "I burp frequently.",
			f: "I am thirsty more often than usual.",
			g: "None of the above below"
		},
		leap: {
			a: "Y56",
			b: "Y56",
			c: "Y56",
			d: "Y56",
			e: "Y56",
			f: "Y56",
			g: "Y56"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1103
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The area between my ear and neck swelled and I feel a lump.",
			b: "My armpit is swollen and has a lump.",
			c: "I have a lump when I feel my upper thigh crease upper femoral region.",
			d: "None of the above below"
		},
		leap: {
			a: "Y57",
			b: "Y57",
			c: "Y57",
			d: "Y57"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1104
		question: "Do you feel like your eyes are protruding?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y58",
			b: "Y58"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1105
		question: "Did you get exposed to the sun for hours?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y59",
			b: "Y59"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1106
		question: "Do you have diabetes?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y60",
			b: "Y60"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1107
		question: "Select all parts of your body have pain.",
		answers: {
			a: "I have a headache.",
			b: "I experience chest pain that feels like it is inside of my chest.",
			c: "I feel pain in my upper abdomen.",
			d: "None of the above below"
		},
		leap: {
			a: "Y61",
			b: "Y61",
			c: "Y61",
			d: "Y61"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1108
		question: "Do you have difficulty with breathing?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y62",
			b: "Y63"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1109
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have discomfort in my chest when breathing  or when breathing through my mouth.",
			b: "When I exhale  it sounds very shallow.",
			c: "I have a short shallow breath. I breathe fast.",
			d: "None of the above below"
		},
		leap: {
			a: "Y63",
			b: "Y63",
			c: "Y63",
			d: "Y63"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1110
		question: "Do you cough?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y64",
			b: "Y65"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1111
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cough.",
			b: "I have a cough that sounds like a dogs bark.",
			c: "I have a cough that is dry.",
			d: "I cough frequently.",
			e: "I cough more at night.",
			f: "I cough very hard and it leaves me out of breath."
		},
		leap: {
			a: "Y65",
			b: "Y65",
			c: "Y65",
			d: "Y65",
			e: "Y65",
			f: "Y65"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1112
		question: "Do you get phlegm?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y66",
			b: "Y67"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1113
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have phlegm.",
			b: "I have sticky phlegm.",
			c: "I have yellow phlegm.",
			d: "I have blood in my phlegm."
		},
		leap: {
			a: "Y67",
			b: "Y67",
			c: "Y67",
			d: "Y67"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1114
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My throat hurts and there is blood in my vomit.",
			b: "I have chest pain and blood in my vomit. ",
			c: "None of the above below"
		},
		leap: {
			a: "Y68",
			b: "Y68",
			c: "Y68"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1115
		question: "Do you have any issue when you urinate? Or your urine doesn't look right?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y69",
			b: "Y71"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1116
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain during urination.",
			b: "I go to the bathroom very often to urinate.",
			c: "I unusually urinate frequently.",
			d: "I urinate longer than I used to.",
			e: "My urine doesn't come out normal when I try to urinate.",
			f: "It is difficult to hold my bladder  and after I urinate  it doesn't feel like I have emptied my bladder (feel like I still have to pee).",
			g: "None of the above below"
		},
		leap: {
			a: "Y70",
			b: "Y70",
			c: "Y70",
			d: "Y70",
			e: "Y70",
			f: "Y70",
			g: "Y70"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1117
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The color of my urine looks more red than yellow. I think there is blood in my urine.",
			b: "My urine is darker. It is almost the color of coca-cola.",
			c: "My urine looks muddy.",
			d: "I have bubbles in my urine.",
			e: "None of the above below"
		},
		leap: {
			a: "Y71",
			b: "Y71",
			c: "Y71",
			d: "Y71",
			e: "Y71"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1118
		question: "Does your excrement have any issue?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y72",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1119
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is difficult to poop defecate.",
			b: "My poop defecation leaks out unconsciously.",
			c: "After I poop defecate  I do not feel empty.",
			d: "I unusually urinate defecate frequently.",
			e: "I have constipation and am unable to poop defecate.",
			f: "None of the above below"
		},
		leap: {
			a: "Y73",
			b: "Y73",
			c: "Y73",
			d: "Y73",
			e: "Y73",
			f: "Y73"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1120
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I see red blood in my stool.",
			b: "My stool is dark  almost black in color.",
			c: "I have watery stool.",
			d: "I have phlegmatic diarreah.",
			e: "My stool doesn't look normal  it looks grey in color.",
			f: "I see grease floating on the toilet water with my stool.",
			g: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32",
			f: "32",
			g: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1121
		question: "Do you get sweaty more than you used to?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y91",
			b: "Y91"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1122
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a light fever.",
			b: "I can't stand the heat.",
			c: "I lost weight very suddenly.",
			d: "My heart beats fast and I can feel my heart beat.",
			e: "I can't sleep well at night.",
			f: "None of the above below"
		},
		leap: {
			a: "Y92",
			b: "Y92",
			c: "Y92",
			d: "Y92",
			e: "Y92",
			f: "Y92"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1123
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I am anxious and depressed.",
			b: "I feel unusually dizzy.",
			c: "None of the above below"
		},
		leap: {
			a: "Y93",
			b: "Y93",
			c: "Y93"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1124
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have unusual hand shakes tremors.",
			b: "My hands feet are unusually cold.",
			c: "None of the above below"
		},
		leap: {
			a: "Y94",
			b: "Y94",
			c: "Y94"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1125
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I can't digest properly and feel bloated.",
			b: "My stomach feels gassy bloated.",
			c: "I have decreased appetite.",
			d: "I feel like I have to throw up or have already vomitted.",
			e: "I burp frequently.",
			f: "I am thirsty more often than usual.",
			g: "None of the above below"
		},
		leap: {
			a: "Y95",
			b: "Y95",
			c: "Y95",
			d: "Y95",
			e: "Y95",
			f: "Y95",
			g: "Y95"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1126
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The area between my ear and neck swelled and I feel a lump.",
			b: "My armpit is swollen and has a lump.",
			c: "I have a lump when I feel my upper thigh crease upper femoral region.",
			d: "None of the above below"
		},
		leap: {
			a: "Y96",
			b: "Y96",
			c: "Y96",
			d: "Y96"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1127
		question: "Do you feel like your eyes are protruding?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y97",
			b: "Y97"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1128
		question: "Did you get exposed to the sun for hours?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y98",
			b: "Y98"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1129
		question: "Do you have diabetes?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y99",
			b: "Y99"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1130
		question: "Select all parts of your body have pain.",
		answers: {
			a: "I have a headache.",
			b: "I experience chest pain that feels like it is inside of my chest.",
			c: "I feel pain in my upper abdomen.",
			d: "None of the above below"
		},
		leap: {
			a: "Y100",
			b: "Y100",
			c: "Y100",
			d: "Y100"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1131
		question: "Do you have difficulty with breathing?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y101",
			b: "Y102"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1132
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have discomfort in my chest when breathing  or when breathing through my mouth.",
			b: "When I exhale  it sounds very shallow.",
			c: "I have a short shallow breath. I breathe fast.",
			d: "None of the above below"
		},
		leap: {
			a: "Y102",
			b: "Y102",
			c: "Y102",
			d: "Y102"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1133
		question: "Do you cough?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y103",
			b: "Y104"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1134
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cough.",
			b: "I have a cough that sounds like a dogs bark.",
			c: "I have a cough that is dry.",
			d: "I cough frequently.",
			e: "I cough more at night.",
			f: "I cough very hard and it leaves me out of breath."
		},
		leap: {
			a: "Y104",
			b: "Y104",
			c: "Y104",
			d: "Y104",
			e: "Y104",
			f: "Y104"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1135
		question: "Do you get phlegm?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y105",
			b: "Y106"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1136
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have phlegm.",
			b: "I have sticky phlegm.",
			c: "I have yellow phlegm.",
			d: "I have blood in my phlegm."
		},
		leap: {
			a: "Y106",
			b: "Y106",
			c: "Y106",
			d: "Y106"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1137
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My throat hurts and there is blood in my vomit.",
			b: "I have chest pain and blood in my vomit. ",
			c: "None of the above below"
		},
		leap: {
			a: "Y107",
			b: "Y107",
			c: "Y107"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1138
		question: "Do you have any issue when you urinate? Or your urine doesn't look right?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y108",
			b: "Y110"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1139
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain during urination.",
			b: "I go to the bathroom very often to urinate.",
			c: "I unusually urinate frequently.",
			d: "I urinate longer than I used to.",
			e: "My urine doesn't come out normal when I try to urinate.",
			f: "It is difficult to hold my bladder  and after I urinate  it doesn't feel like I have emptied my bladder (feel like I still have to pee).",
			g: "None of the above below"
		},
		leap: {
			a: "Y109",
			b: "Y109",
			c: "Y109",
			d: "Y109",
			e: "Y109",
			f: "Y109",
			g: "Y109"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1140
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The color of my urine looks more red than yellow. I think there is blood in my urine.",
			b: "My urine is darker. It is almost the color of coca-cola.",
			c: "My urine looks muddy.",
			d: "I have bubbles in my urine.",
			e: "None of the above below"
		},
		leap: {
			a: "Y110",
			b: "Y110",
			c: "Y110",
			d: "Y110",
			e: "Y110"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1141
		question: "Does your excrement have any issue?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y111",
			b: "Y113"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1142
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is difficult to poop defecate.",
			b: "My poop defecation leaks out unconsciously.",
			c: "After I poop defecate  I do not feel empty.",
			d: "I unusually urinate defecate frequently.",
			e: "I have constipation and am unable to poop defecate.",
			f: "None of the above below"
		},
		leap: {
			a: "Y112",
			b: "Y112",
			c: "Y112",
			d: "Y112",
			e: "Y112",
			f: "Y112"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1143
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I see red blood in my stool.",
			b: "My stool is dark  almost black in color.",
			c: "I have watery stool.",
			d: "I have phlegmatic diarreah.",
			e: "My stool doesn't look normal  it looks grey in color.",
			f: "I see grease floating on the toilet water with my stool.",
			g: "None of the above below"
		},
		leap: {
			a: "Y113",
			b: "Y113",
			c: "Y113",
			d: "Y113",
			e: "Y113",
			f: "Y113",
			g: "Y113"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1144
		question: "Has your period volume cramp days changed?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y114",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1145
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My period volume has decreased  changed  or I stopped getting my period.",
			b: "My period volume has increased.",
			c: "My menstrual cycle became irregular.",
			d: "My period takes longer than it used to.",
			e: "I have bad cramps during my period.",
			f: "When I took the pregnancy test  it was negative.",
			g: "I've had sex recently.",
			h: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32",
			f: "32",
			g: "32",
			h: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1146
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "Y130"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1147
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have diabetes.",
			b: "I am thirsty more often than usual.",
			c: "None of the above below"
		},
		leap: {
			a: "Y131",
			b: "Y131",
			c: "Y131"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1148
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a light fever.",
			b: "I lost weight very suddenly.",
			c: "I feel anxious or depressed.",
			d: "I am sweating more than I used to.",
			e: "None of the above below"
		},
		leap: {
			a: "Y132",
			b: "Y132",
			c: "Y132",
			d: "Y132",
			e: "Y132"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1149
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I can't digest properly and feel bloated.",
			b: "My stomach feels gassy bloated.",
			c: "I have decreased appetite.",
			d: "I feel like I have to throw up or have already vomitted.",
			e: "None of the above below"
		},
		leap: {
			a: "Y133",
			b: "Y133",
			c: "Y133",
			d: "Y133",
			e: "Y133"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1150
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My armpit is swollen and has a lump.",
			b: "I feel a lump on my upper abdomen.",
			c: "I feel a lump on my lower abdomen.",
			d: "I have a lump when I feel my upper thigh crease upper femoral region.",
			e: "My anus skin is loose I have anal skin tags.",
			f: "None of the above below"
		},
		leap: {
			a: "Y134",
			b: "Y134",
			c: "Y134",
			d: "Y134",
			e: "Y134",
			f: "Y134"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1151
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My anus bleeds.",
			b: "I am unable to push it out from my anus.",
			c: "None of the above below"
		},
		leap: {
			a: "Y135",
			b: "Y135",
			c: "Y135"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1152
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I smoke more than I used to.",
			b: "I drink more than I used to.",
			c: "None of the above below"
		},
		leap: {
			a: "Y136",
			b: "Y136",
			c: "Y136"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1153
		question: "Select all parts of your body have pain.",
		answers: {
			a: "?(?)? ???.",
			b: "I experience chest pain that feels like it is inside of my chest.",
			c: "My back hurts (including shoulder).",
			d: "I feel pain in my upper abdomen.",
			e: "I have pain in my lower abdomen. ",
			f: "My anus hurts.",
			g: "None of the above below"
		},
		leap: {
			a: "Y137",
			b: "Y137",
			c: "Y137",
			d: "Y137",
			e: "Y137",
			f: "Y137",
			g: "Y137"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1154
		question: "Does your eye skin get yellow?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y138",
			b: "Y138"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1155
		question: "Do you cough?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y139",
			b: "Y140"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1156
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I cough.",
			b: "I have a cough that sounds like a dogs bark.",
			c: "I have a cough that is dry.",
			d: "I cough frequently.",
			e: "I cough more at night.",
			f: "I cough very hard and it leaves me out of breath."
		},
		leap: {
			a: "Y140",
			b: "Y140",
			c: "Y140",
			d: "Y140",
			e: "Y140",
			f: "Y140"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1157
		question: "Does your excrement have any issue?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y141",
			b: "Y143"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1158
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "It is difficult to poop defecate.",
			b: "My poop defecation leaks out unconsciously.",
			c: "After I poop defecate  I do not feel empty.",
			d: "I unusually urinate defecate frequently.",
			e: "I have constipation and am unable to poop defecate.",
			f: "None of the above below"
		},
		leap: {
			a: "Y142",
			b: "Y142",
			c: "Y142",
			d: "Y142",
			e: "Y142",
			f: "Y142"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1159
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I see red blood in my stool.",
			b: "My stool is dark  almost black in color.",
			c: "I have watery stool.",
			d: "I have phlegmatic diarreah.",
			e: "My stool doesn't look normal  it looks grey in color.",
			f: "I see grease floating on the toilet water with my stool.",
			g: "None of the above below"
		},
		leap: {
			a: "Y143",
			b: "Y143",
			c: "Y143",
			d: "Y143",
			e: "Y143",
			f: "Y143",
			g: "Y143"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1160
		question: "Do you have any issue when you urinate? Or your urine doesn't look right?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y144",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1161
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain during urination.",
			b: "I go to the bathroom very often to urinate.",
			c: "I unusually urinate frequently.",
			d: "I urinate longer than I used to.",
			e: "My urine doesn't come out normal when I try to urinate.",
			f: "It is difficult to hold my bladder  and after I urinate  it doesn't feel like I have emptied my bladder (feel like I still have to pee).",
			g: "None of the above below"
		},
		leap: {
			a: "Y145",
			b: "Y145",
			c: "Y145",
			d: "Y145",
			e: "Y145",
			f: "Y145",
			g: "Y145"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1162
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The color of my urine looks more red than yellow. I think there is blood in my urine.",
			b: "My urine is darker. It is almost the color of coca-cola.",
			c: "My urine looks muddy.",
			d: "I have bubbles in my urine.",
			e: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1163
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "Y280"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1164
		question: "Do you get thirsty more than you used to?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y281",
			b: "Y281"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1165
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have diabetes.",
			b: "I am sweating more than I used to.",
			c: "None of the above below"
		},
		leap: {
			a: "Y282",
			b: "Y282",
			c: "Y282"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1166
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I feel like I am getting body aches.",
			b: "My entire body has chills.",
			c: "??? ???.",
			d: "My entire body is itchy.",
			e: "I feel anxious or depressed.",
			f: "None of the above below"
		},
		leap: {
			a: "Y283",
			b: "Y283",
			c: "Y283",
			d: "Y283",
			e: "Y283",
			f: "Y283"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1167
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I gained weight very suddenly.",
			b: "I lost weight very suddenly.",
			c: "I have decreased appetite.",
			d: "I feel like I have to throw up or have already vomitted.",
			e: "None of the above below"
		},
		leap: {
			a: "Y284",
			b: "Y284",
			c: "Y284",
			d: "Y284",
			e: "Y284"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1168
		question: "Do you have any issue when you urinate? Or your urine doesn't look right?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y285",
			b: "Y287"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1169
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain during urination.",
			b: "I go to the bathroom very often to urinate.",
			c: "I unusually urinate frequently.",
			d: "I urinate longer than I used to.",
			e: "My urine doesn't come out normal when I try to urinate.",
			f: "It is difficult to hold my bladder  and after I urinate  it doesn't feel like I have emptied my bladder (feel like I still have to pee).",
			g: "None of the above below"
		},
		leap: {
			a: "Y286",
			b: "Y286",
			c: "Y286",
			d: "Y286",
			e: "Y286",
			f: "Y286",
			g: "Y286"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1170
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The color of my urine looks more red than yellow. I think there is blood in my urine.",
			b: "My urine is darker. It is almost the color of coca-cola.",
			c: "My urine looks muddy.",
			d: "I have bubbles in my urine.",
			e: "None of the above below"
		},
		leap: {
			a: "Y287",
			b: "Y287",
			c: "Y287",
			d: "Y287",
			e: "Y287"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1171
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "My vision got blurry and I can't see very well.",
			b: "My eye is dazzed and tingles.",
			c: "I see dust or my vision gets murky as it draws curtains.",
			d: "The white part of my eye turned red.",
			e: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1172
		question: "Are you under 16?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "33",
			b: "Y300"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1173
		question: "Do you have swollen ankle especially?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y301",
			b: "Y301"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1174
		question: "Do you have cramp twitch over your body or arms legs?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y302",
			b: "Y302"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1175
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have a light fever.",
			b: "My entire body has chills.",
			c: "????? ??.",
			d: "None of the above below"
		},
		leap: {
			a: "Y303",
			b: "Y303",
			c: "Y303",
			d: "Y303"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1176
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I gained weight very suddenly.",
			b: "I am thirsty more often than usual.",
			c: "My body feels itchy.",
			d: "None of the above below"
		},
		leap: {
			a: "Y304",
			b: "Y304",
			c: "Y304",
			d: "Y304"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1177
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have diabetes.",
			b: "I have high blood pressue.",
			c: "None of the above below"
		},
		leap: {
			a: "Y305",
			b: "Y305",
			c: "Y305"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1178
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have decreased appetite.",
			b: "I feel like I have to throw up or have already vomitted.",
			c: "None of the above below"
		},
		leap: {
			a: "Y306",
			b: "Y306",
			c: "Y306"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1179
		question: "Do you have any issue when you urinate? Or your urine doesn't look right?",
		answers: {
			a: "Yes.",
			b: "No."
		},
		leap: {
			a: "Y307",
			b: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1180
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "I have pain during urination.",
			b: "I go to the bathroom very often to urinate.",
			c: "I unusually urinate frequently.",
			d: "I urinate longer than I used to.",
			e: "My urine doesn't come out normal when I try to urinate.",
			f: "It is difficult to hold my bladder  and after I urinate  it doesn't feel like I have emptied my bladder (feel like I still have to pee).",
			g: "None of the above below"
		},
		leap: {
			a: "Y308",
			b: "Y308",
			c: "Y308",
			d: "Y308",
			e: "Y308",
			f: "Y308",
			g: "Y308"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: 1181
		question: "Select all your symptoms that you have (multiple selection).",
		answers: {
			a: "The color of my urine looks more red than yellow. I think there is blood in my urine.",
			b: "My urine is darker. It is almost the color of coca-cola.",
			c: "My urine looks muddy.",
			d: "I have bubbles in my urine.",
			e: "None of the above below"
		},
		leap: {
			a: "32",
			b: "32",
			c: "32",
			d: "32",
			e: "32"
		},
	correctAnswer: "c"
	},
	{//QUESTION No.: finish
		question: "Showing Conclusions",
		answers: {
			a: "Showing results"
		},
		leap: {
			a: "finish"
		},
	correctAnswer: "c"
	}
];
