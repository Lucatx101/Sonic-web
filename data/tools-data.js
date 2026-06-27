const TOOLS_TEXT_REPLACEMENTS = {
  "Flank socket 6 pt": "Khẩu flank 6 cạnh",
  "Flank deep socket 6 pt": "Khẩu flank dài 6 cạnh",
  "Deep flank socket 6 pt": "Khẩu flank dài 6 cạnh",
  "Socket 12 pt": "Khẩu 12 cạnh",
  "Impact socket 6 pt": "Khẩu impact 6 cạnh",
  "Deep impact socket 6 pt": "Khẩu impact dài 6 cạnh",
  "Socket TX Plus": "Khẩu TX Plus",
  "Bit socket TX Plus": "Khẩu bit TX Plus",
  "Double open wrench": "Cờ lê hai đầu miệng",
  "Combination wrench DIN 3113": "Cờ lê vòng miệng DIN 3113",
  "Stubby combination wrench": "Cờ lê vòng miệng ngắn",
  "TX wrench": "Cờ lê TX",
  "75° offset ring wrench": "Cờ lê vòng lệch 75°",
  "Flare nut wrench": "Cờ lê ống dầu",
  "Reversible ratcheting wrench 12 pt": "Cờ lê vòng bánh cóc đảo chiều 12 cạnh",
  "Ultra-thin ratcheting wrench 12 pt": "Cờ lê vòng bánh cóc siêu mỏng 12 cạnh",
  "Socket set 3/8”, 6 pt. on rail": "Bộ khẩu 3/8” 6 cạnh trên rail",
  "Socket set 3/8”, TX on rail": "Bộ khẩu TX 3/8” trên rail",
  "Socket set 1/2”, TX on rail": "Bộ khẩu TX 1/2” trên rail",
  "Socket set 1/2”, 12 pt. on rail": "Bộ khẩu 1/2” 12 cạnh trên rail",
  "Deep socket set 1/4”, 12 pt. on rail": "Bộ khẩu dài 1/4” 12 cạnh trên rail",
  "Deep socket set 1/2”, 6 pt. on rail": "Bộ khẩu dài 1/2” 6 cạnh trên rail",
  "Deep socket set 1/2”, 12 pt. on rail": "Bộ khẩu dài 1/2” 12 cạnh trên rail",
  "Flank deep socket set 1/4”, 6 pt. on rail": "Bộ khẩu flank dài 1/4” 6 cạnh trên rail",
  "Flank deep socket 3/8”, 6 pt. on rail": "Bộ khẩu flank dài 3/8” 6 cạnh trên rail",
  "Flank socket set 3/8”, 12 pt. on rail": "Bộ khẩu flank 3/8” 12 cạnh trên rail",
  "Flank deep socket set 3/8”, 12 pt. on rail": "Bộ khẩu flank dài 3/8” 12 cạnh trên rail",
  "Flank socket 1/4” & 3/8” TX plus on rail": "Bộ khẩu TX Plus 1/4” & 3/8” trên rail",
  "TX socket set 1/4”, TX on rail": "Bộ khẩu TX 1/4” trên rail",
  "Bit socket set 1/4”, hex on rail": "Bộ khẩu bit hex 1/4” trên rail",
  "Bit socket set 1/4”, TX on rail": "Bộ khẩu bit TX 1/4” trên rail",
  "Bit socket set 1/4” TX plus on rail": "Bộ khẩu bit TX Plus 1/4” trên rail",
  "Bit socket set 3/8”, hex on rail": "Bộ khẩu bit hex 3/8” trên rail",
  "Bit socket set 3/8”, hex long on rail": "Bộ khẩu bit hex dài 3/8” trên rail",
  "Bit socket set 3/8”, TX on rail": "Bộ khẩu bit TX 3/8” trên rail",
  "Bit socket set 3/8”, TX tamperproof on rail": "Bộ khẩu bit TX chống tháo 3/8” trên rail",
  "Bit socket set 3/8”, ribe & spline on rail": "Bộ khẩu bit ribe & spline 3/8” trên rail",
  "Bit socket set 3/8”, star low on rail": "Bộ khẩu bit star low 3/8” trên rail",
  "Bit socket set 1/2”, hex on rail": "Bộ khẩu bit hex 1/2” trên rail",
  "Bit socket set 1/2”, TX on rail": "Bộ khẩu bit TX 1/2” trên rail",
  "Bit socket 1/2” TX plus on rail": "Bộ khẩu bit TX Plus 1/2” trên rail",
  "Bitdopset 1/2”, veeltand op rail": "Bộ khẩu bit veeltand 1/2” trên rail"
};

function toolsDisplayText(value) {
  return TOOLS_TEXT_REPLACEMENTS[value] || value;
}

function toolsRows(text) {
  return text
    .trim()
    .split(/\n+/)
    .map((line) =>
      line.split("|").map((cell) => {
        const value = cell.trim();
        return value === "" ? null : toolsDisplayText(value);
      })
    );
}

const TOOLS_STANDARD_DEEP_SOCKET_ROWS = toolsRows(`
Flank socket 6 pt|1/4”|21503|3|25|10
Flank socket 6 pt|1/4”|21504|4|25|10
Flank socket 6 pt|1/4”|21545|4.5|25|10
Flank socket 6 pt|1/4”|21505|5|25|10
Flank socket 6 pt|1/4”|21555|5.5|25|10
Flank socket 6 pt|1/4”|21506|6|25|10
Flank socket 6 pt|1/4”|21507|7|25|12
Flank socket 6 pt|1/4”|21508|8|25|10
Flank socket 6 pt|1/4”|21509|9|25|12
Flank socket 6 pt|1/4”|21510|10|25|12
Flank socket 6 pt|1/4”|21511|11|25|16
Flank socket 6 pt|1/4”|21512|12|25|18
Flank socket 6 pt|1/4”|21513|13|25|18
Flank socket 6 pt|1/4”|21514|14|25|26
Flank socket 6 pt|3/8”|22506|6|28|20
Flank socket 6 pt|3/8”|22507|7|28|22
Flank socket 6 pt|3/8”|22508|8|28|22
Flank socket 6 pt|3/8”|22509|9|28|22
Flank socket 6 pt|3/8”|22510|10|28|22
Flank socket 6 pt|3/8”|22511|11|28|24
Flank socket 6 pt|3/8”|22512|12|28|22
Flank socket 6 pt|3/8”|22513|13|28|24
Flank socket 6 pt|3/8”|22514|14|28|28
Flank socket 6 pt|3/8”|22515|15|28|34
Flank socket 6 pt|3/8”|22516|16|28|32
Flank socket 6 pt|3/8”|22517|17|30|40
Flank socket 6 pt|3/8”|22518|18|30|42
Flank socket 6 pt|3/8”|22519|19|30|46
Flank socket 6 pt|3/8”|22520|20|30|60
Flank socket 6 pt|3/8”|22521|21|30|50
Flank socket 6 pt|3/8”|22522|22|32|60
Flank socket 6 pt|3/8”|22524|24|32|62
Flank socket 6 pt|1/2”|23508|8|38|46
Flank socket 6 pt|1/2”|23509|9|38|48
Flank socket 6 pt|1/2”|23510|10|38|48
Flank socket 6 pt|1/2”|23511|11|38|50
Flank socket 6 pt|1/2”|23512|12|38|50
Flank socket 6 pt|1/2”|23513|13|38|52
Flank socket 6 pt|1/2”|23514|14|38|54
Flank socket 6 pt|1/2”|23515|15|38|52
Flank socket 6 pt|1/2”|23516|16|38|48
Flank socket 6 pt|1/2”|23517|17|38|60
Flank socket 6 pt|1/2”|23518|18|38|70
Flank socket 6 pt|1/2”|23519|19|38|58
Flank socket 6 pt|1/2”|23520|20|38|70
Flank socket 6 pt|1/2”|23521|21|38|60
Flank socket 6 pt|1/2”|23522|22|38|88
Flank socket 6 pt|1/2”|23523|23|38|98
Flank socket 6 pt|1/2”|23524|24|38|90
Flank socket 6 pt|1/2”|23525|25|42|118
Flank socket 6 pt|1/2”|23526|26|42|142
Flank socket 6 pt|1/2”|23527|27|42|136
Flank socket 6 pt|1/2”|23528|28|43|154
Flank socket 6 pt|1/2”|23529|29|43|134
Flank socket 6 pt|1/2”|23530|30|43|158
Flank socket 6 pt|1/2”|23532|32|43|168
Flank socket 6 pt|1/2”|23536|36|43|226
Flank deep socket 6 pt|1/4”|2155004|4|50|16
Flank deep socket 6 pt|1/4”|21550045|4.5|50|16
Flank deep socket 6 pt|1/4”|2155005|5|50|16
Flank deep socket 6 pt|1/4”|21550055|5.5|50|14
Flank deep socket 6 pt|1/4”|2155006|6|50|18
Flank deep socket 6 pt|1/4”|2155007|7|50|22
Flank deep socket 6 pt|1/4”|2155008|8|50|22
Flank deep socket 6 pt|1/4”|2155009|9|50|28
Flank deep socket 6 pt|1/4”|2155010|10|50|32
Flank deep socket 6 pt|1/4”|2155011|11|50|38
Flank deep socket 6 pt|1/4”|2155012|12|50|42
Flank deep socket 6 pt|1/4”|2155013|13|50|46
Flank deep socket 6 pt|1/4”|2155014|14|50|52
Deep flank socket 6 pt|3/8”|2256306|6|63|34
Deep flank socket 6 pt|3/8”|2256307|7|63|36
Deep flank socket 6 pt|3/8”|2256308|8|63|34
Deep flank socket 6 pt|3/8”|2256309|9|63|44
Deep flank socket 6 pt|3/8”|2256310|10|63|46
Deep flank socket 6 pt|3/8”|2256311|11|63|50
Deep flank socket 6 pt|3/8”|2256312|12|63|62
Deep flank socket 6 pt|3/8”|2256313|13|63|68
Deep flank socket 6 pt|3/8”|2256314|14|63|74
Deep flank socket 6 pt|3/8”|2256315|15|63|96
Deep flank socket 6 pt|3/8”|2256316|16|63|82
Deep flank socket 6 pt|3/8”|2256317|17|63|106
Deep flank socket 6 pt|3/8”|2256318|18|63|130
Deep flank socket 6 pt|3/8”|2256319|19|63|116
Deep flank socket 6 pt|3/8”|2256320|20|63|148
Deep flank socket 6 pt|3/8”|2256321|21|63|126
Deep flank socket 6 pt|3/8”|2256322|22|63|160
Flank deep socket 6 pt|1/2”|2357708|8|77|70
Flank deep socket 6 pt|1/2”|2357709|9|77|74
Flank deep socket 6 pt|1/2”|2357710|10|77|66
Flank deep socket 6 pt|1/2”|2357711|11|77|78
Flank deep socket 6 pt|1/2”|2357712|12|77|82
Flank deep socket 6 pt|1/2”|2357713|13|77|96
Flank deep socket 6 pt|1/2”|2357714|14|77|104
Flank deep socket 6 pt|1/2”|2357715|15|77|98
Flank deep socket 6 pt|1/2”|2357716|16|77|100
Flank deep socket 6 pt|1/2”|2357717|17|77|130
Flank deep socket 6 pt|1/2”|2357718|18|77|154
Flank deep socket 6 pt|1/2”|2357719|19|77|142
Flank deep socket 6 pt|1/2”|2357720|20|77|168
Flank deep socket 6 pt|1/2”|2357721|21|77|152
Flank deep socket 6 pt|1/2”|2357722|22|77|204
Flank deep socket 6 pt|1/2”|2357723|23|77|228
Flank deep socket 6 pt|1/2”|2357724|24|77|218
Flank deep socket 6 pt|1/2”|2357725|25|77|254
Flank deep socket 6 pt|1/2”|2357726|26|77|300
Flank deep socket 6 pt|1/2”|2357727|27|77|286
Flank deep socket 6 pt|1/2”|2357728|28|77|320
Flank deep socket 6 pt|1/2”|2357729|29|77|300
Flank deep socket 6 pt|1/2”|2357730|30|77|346
Flank deep socket 6 pt|1/2”|2357732|32|77|364
Socket 12 pt|3/4”|24917|17|50|140
Socket 12 pt|3/4”|24918|18|50|150
Socket 12 pt|3/4”|24919|19|50|164
Socket 12 pt|3/4”|24920|20|50|170
Socket 12 pt|3/4”|24921|21|50|166
Socket 12 pt|3/4”|24922|22|50|208
Socket 12 pt|3/4”|24923|23|50|208
Socket 12 pt|3/4”|24924|24|51|214
Socket 12 pt|3/4”|24925|25|52|220
Socket 12 pt|3/4”|24926|26|52|214
Socket 12 pt|3/4”|24927|27|52|214
Socket 12 pt|3/4”|24928|28|52|240
Socket 12 pt|3/4”|24929|29|52|232
Socket 12 pt|3/4”|24930|30|54|274
Socket 12 pt|3/4”|24932|32|56|286
Socket 12 pt|3/4”|24933|33|56|320
Socket 12 pt|3/4”|24934|34|56|340
Socket 12 pt|3/4”|24935|35|58|376
Socket 12 pt|3/4”|24936|36|58|400
Socket 12 pt|3/4”|24938|38|60|464
Socket 12 pt|3/4”|24941|41|64|526
Socket 12 pt|3/4”|24942|42|64|560
Socket 12 pt|3/4”|24946|46|66|632
Socket 12 pt|3/4”|24950|50|70|760
Socket 12 pt|3/4”|24955|55|76|900
Socket 12 pt|3/4”|24960|60|78|1050
Socket 12 pt|1”|25835|35|61|430
Socket 12 pt|1”|25836|36|65|454
Socket 12 pt|1”|25838|38|65|485
Socket 12 pt|1”|25841|41|70|580
Socket 12 pt|1”|25846|46|75|806
Socket 12 pt|1”|25850|50|75|956
Socket 12 pt|1”|25854|54|80|1150
Socket 12 pt|1”|25855|55|80|1190
Socket 12 pt|1”|25858|58|80|1285
Socket 12 pt|1”|25860|60|84|1248
Socket 12 pt|1”|25863|63|87|1500
Socket 12 pt|1”|25865|65|87|1450
Socket 12 pt|1”|25867|67|90|1640
Socket 12 pt|1”|25870|70|93|1946
Socket 12 pt|1”|25871|71|93|2100
Socket 12 pt|1”|25875|75|97|2294
Socket 12 pt|1”|25877|77|103|2500
Socket 12 pt|1”|25880|80|103|2328
`);

const TOOLS_IMPACT_SOCKET_ROWS = toolsRows(`
Impact socket 6 pt|1/2”|33508|8|38|60
Impact socket 6 pt|1/2”|33509|9|38|60
Impact socket 6 pt|1/2”|33510|10|38|60
Impact socket 6 pt|1/2”|33511|11|38|62
Impact socket 6 pt|1/2”|33512|12|38|64
Impact socket 6 pt|1/2”|33513|13|38|68
Impact socket 6 pt|1/2”|33514|14|38|80
Impact socket 6 pt|1/2”|33515|15|38|76
Impact socket 6 pt|1/2”|33516|16|38|72
Impact socket 6 pt|1/2”|33517|17|38|90
Impact socket 6 pt|1/2”|33518|18|38|108
Impact socket 6 pt|1/2”|33519|19|38|102
Impact socket 6 pt|1/2”|33520|20|38|120
Impact socket 6 pt|1/2”|33521|21|38|114
Impact socket 6 pt|1/2”|33522|22|38|132
Impact socket 6 pt|1/2”|33523|23|38|118
Impact socket 6 pt|1/2”|33524|24|38|126
Impact socket 6 pt|1/2”|33525|25|38|142
Impact socket 6 pt|1/2”|33526|26|38|134
Impact socket 6 pt|1/2”|33527|27|39|156
Impact socket 6 pt|1/2”|33528|28|40|164
Impact socket 6 pt|1/2”|33529|29|40|162
Impact socket 6 pt|1/2”|33530|30|40|184
Impact socket 6 pt|1/2”|33532|32|40|188
Impact socket 6 pt|1/2”|33533|33|44|310
Impact socket 6 pt|1/2”|33534|34|44|320
Impact socket 6 pt|1/2”|33535|35|48|330
Impact socket 6 pt|1/2”|33536|36|48|330
Impact socket 6 pt|1/2”|33538|38|48|480
Deep impact socket 6 pt|1/2”|3358508|8|78|125
Deep impact socket 6 pt|1/2”|3358509|9|78|125
Deep impact socket 6 pt|1/2”|3358510|10|78|138
Deep impact socket 6 pt|1/2”|3358511|11|78|152
Deep impact socket 6 pt|1/2”|3358512|12|78|160
Deep impact socket 6 pt|1/2”|3358513|13|78|148
Deep impact socket 6 pt|1/2”|3358514|14|78|158
Deep impact socket 6 pt|1/2”|3358515|15|78|168
Deep impact socket 6 pt|1/2”|3358516|16|78|160
Deep impact socket 6 pt|1/2”|3358517|17|78|176
Deep impact socket 6 pt|1/2”|3358518|18|78|214
Deep impact socket 6 pt|1/2”|3358519|19|78|210
Deep impact socket 6 pt|1/2”|3358520|20|78|266
Deep impact socket 6 pt|1/2”|3358521|21|78|238
Deep impact socket 6 pt|1/2”|3358522|22|78|266
Deep impact socket 6 pt|1/2”|3358523|23|78|312
Deep impact socket 6 pt|1/2”|3358524|24|78|384
Deep impact socket 6 pt|1/2”|3358525|25|78|338
Deep impact socket 6 pt|1/2”|3358526|26|78|364
Deep impact socket 6 pt|1/2”|3358527|27|78|346
Deep impact socket 6 pt|1/2”|3358528|28|78|414
Deep impact socket 6 pt|1/2”|3358529|29|78|400
Deep impact socket 6 pt|1/2”|3358530|30|78|422
Deep impact socket 6 pt|1/2”|3358532|32|78|436
Deep impact socket 6 pt|1/2”|3358533|33|78|440
Deep impact socket 6 pt|1/2”|3358534|34|78|480
Deep impact socket 6 pt|1/2”|3358535|35|78|520
Deep impact socket 6 pt|1/2”|3358536|36|78|500
Deep impact socket 6 pt|1/2”|3358538|38|78|600
Impact socket 6 pt|3/4”|34517|17|51|328
Impact socket 6 pt|3/4”|34518|18|51|320
Impact socket 6 pt|3/4”|34519|19|51|325
Impact socket 6 pt|3/4”|34520|20|51|330
Impact socket 6 pt|3/4”|34521|21|51|340
Impact socket 6 pt|3/4”|34522|22|51|345
Impact socket 6 pt|3/4”|34523|23|51|350
Impact socket 6 pt|3/4”|34524|24|51|350
Impact socket 6 pt|3/4”|34525|25|54|360
Impact socket 6 pt|3/4”|34526|26|54|360
Impact socket 6 pt|3/4”|34527|27|54|370
Impact socket 6 pt|3/4”|34528|28|54|386
Impact socket 6 pt|3/4”|34529|29|54|410
Impact socket 6 pt|3/4”|34530|30|54|410
Impact socket 6 pt|3/4”|34532|32|57|450
Impact socket 6 pt|3/4”|34533|33|57|480
Impact socket 6 pt|3/4”|34534|34|57|490
Impact socket 6 pt|3/4”|34535|35|57|490
Impact socket 6 pt|3/4”|34536|36|57|536
Impact socket 6 pt|3/4”|34538|38|57|540
Impact socket 6 pt|3/4”|34539|39|57|540
Impact socket 6 pt|3/4”|34540|40|57|560
Impact socket 6 pt|3/4”|34541|41|58|610
Impact socket 6 pt|3/4”|34542|42|58|630
Impact socket 6 pt|3/4”|34543|43|63|670
Impact socket 6 pt|3/4”|34544|44|63|670
Impact socket 6 pt|3/4”|34545|45|63|710
Impact socket 6 pt|3/4”|34546|46|63|710
Impact socket 6 pt|3/4”|34547|47|68|800
Impact socket 6 pt|3/4”|34548|48|68|800
Impact socket 6 pt|3/4”|34550|50|68|850
Impact socket 6 pt|3/4”|34552|52|68|900
Impact socket 6 pt|3/4”|34554|54|73|950
Impact socket 6 pt|3/4”|34555|55|73|1100
Impact socket 6 pt|3/4”|34557|57|73|1200
Impact socket 6 pt|3/4”|34558|58|73|1300
Impact socket 6 pt|3/4”|34559|59|73|1400
Impact socket 6 pt|3/4”|34560|60|75|1400
Impact socket 6 pt|3/4”|34563|63|75|1600
Impact socket 6 pt|3/4”|34565|65|78|1700
Impact socket 6 pt|3/4”|34570|70|84|1900
Deep impact socket 6 pt|3/4”|3459017|17|90|540
Deep impact socket 6 pt|3/4”|3459018|18|90|530
Deep impact socket 6 pt|3/4”|3459019|19|90|550
Deep impact socket 6 pt|3/4”|3459020|20|90|560
Deep impact socket 6 pt|3/4”|3459021|21|90|570
Deep impact socket 6 pt|3/4”|3459022|22|90|590
Deep impact socket 6 pt|3/4”|3459023|23|90|610
Deep impact socket 6 pt|3/4”|3459024|24|90|610
Deep impact socket 6 pt|3/4”|3459025|25|90|620
Deep impact socket 6 pt|3/4”|3459026|26|90|620
Deep impact socket 6 pt|3/4”|3459027|27|90|640
Deep impact socket 6 pt|3/4”|3459028|28|90|644
Deep impact socket 6 pt|3/4”|3459029|29|90|680
Deep impact socket 6 pt|3/4”|3459030|30|90|700
Deep impact socket 6 pt|3/4”|3459032|32|90|730
Deep impact socket 6 pt|3/4”|3459033|33|90|780
Deep impact socket 6 pt|3/4”|3459034|34|90|810
Deep impact socket 6 pt|3/4”|3459035|35|90|810
Deep impact socket 6 pt|3/4”|3459036|36|90|850
Deep impact socket 6 pt|3/4”|3459038|38|90|880
Deep impact socket 6 pt|3/4”|3459039|39|90|920
Deep impact socket 6 pt|3/4”|3459040|40|90|920
Deep impact socket 6 pt|3/4”|3459041|41|90|960
Deep impact socket 6 pt|3/4”|3459042|42|90|1050
Deep impact socket 6 pt|3/4”|3459043|43|90|1150
Deep impact socket 6 pt|3/4”|3459044|44|90|1150
Deep impact socket 6 pt|3/4”|3459045|45|90|1200
Deep impact socket 6 pt|3/4”|3459046|46|90|1200
Deep impact socket 6 pt|3/4”|3459047|47|90|1300
Deep impact socket 6 pt|3/4”|3459048|48|90|1300
Deep impact socket 6 pt|3/4”|3459050|50|90|1400
Deep impact socket 6 pt|3/4”|3459052|52|90|1600
Deep impact socket 6 pt|3/4”|3459054|54|90|1900
Deep impact socket 6 pt|3/4”|3459055|55|90|1940
Impact socket 6 pt|1”|35524|24|58|574
Impact socket 6 pt|1”|35525|25|58|570
Impact socket 6 pt|1”|35526|26|58|570
Impact socket 6 pt|1”|35527|27|58|580
Impact socket 6 pt|1”|35528|28|58|580
Impact socket 6 pt|1”|35530|30|62|610
Impact socket 6 pt|1”|35532|32|62|660
Impact socket 6 pt|1”|35533|33|62|682
Impact socket 6 pt|1”|35534|34|62|710
Impact socket 6 pt|1”|35535|35|62|710
Impact socket 6 pt|1”|35536|36|65|720
Impact socket 6 pt|1”|35538|38|65|740
Impact socket 6 pt|1”|35540|40|65|750
Impact socket 6 pt|1”|35541|41|68|792
Impact socket 6 pt|1”|35542|42|68|850
Impact socket 6 pt|1”|35543|43|68|890
Impact socket 6 pt|1”|35544|44|68|930
Impact socket 6 pt|1”|35545|45|68|930
Impact socket 6 pt|1”|35546|46|72|1010
Impact socket 6 pt|1”|35548|48|72|1060
Impact socket 6 pt|1”|35550|50|75|1164
Impact socket 6 pt|1”|35551|51|75|1250
Impact socket 6 pt|1”|35552|52|75|1250
Impact socket 6 pt|1”|35553|53|80|1300
Impact socket 6 pt|1”|35554|54|80|1400
Impact socket 6 pt|1”|35555|55|83|1480
Impact socket 6 pt|1”|35557|57|83|1540
Impact socket 6 pt|1”|35558|58|83|1650
Impact socket 6 pt|1”|35559|59|87|1700
Impact socket 6 pt|1”|35560|60|87|1750
Impact socket 6 pt|1”|35563|63|87|1800
Impact socket 6 pt|1”|35565|65|90|1850
Impact socket 6 pt|1”|35566|66|90|1950
Impact socket 6 pt|1”|35568|68|93|2000
Impact socket 6 pt|1”|35570|70|93|2100
Impact socket 6 pt|1”|35571|71|95|2500
Impact socket 6 pt|1”|35575|75|95|2800
Impact socket 6 pt|1”|35580|80|95|2900
Impact socket 6 pt|1”|35585|85|100|3200
Impact socket 6 pt|1”|35590|90|105|3800
Impact socket 6 pt|1”|35595|95|105|5250
Deep impact socket 6 pt|1”|3559024|24|90|868
Deep impact socket 6 pt|1”|3559025|25|90|850
Deep impact socket 6 pt|1”|3559026|26|90|870
Deep impact socket 6 pt|1”|3559027|27|90|890
Deep impact socket 6 pt|1”|3559028|28|90|890
Deep impact socket 6 pt|1”|3559030|30|90|930
Deep impact socket 6 pt|1”|3559032|32|90|960
Deep impact socket 6 pt|1”|3559033|33|90|1000
Deep impact socket 6 pt|1”|3559034|34|90|1000
Deep impact socket 6 pt|1”|3559035|35|90|1000
Deep impact socket 6 pt|1”|3559036|36|90|1050
Deep impact socket 6 pt|1”|3559038|38|95|1150
Deep impact socket 6 pt|1”|3559040|40|95|1200
Deep impact socket 6 pt|1”|3559041|41|95|1220
Deep impact socket 6 pt|1”|3559042|42|95|1250
Deep impact socket 6 pt|1”|3559043|43|95|1270
Deep impact socket 6 pt|1”|3559044|44|95|1300
Deep impact socket 6 pt|1”|3559045|45|95|1300
Deep impact socket 6 pt|1”|3559046|46|95|1350
Deep impact socket 6 pt|1”|3559048|48|100|1500
Deep impact socket 6 pt|1”|3559050|50|100|1600
Deep impact socket 6 pt|1”|3559051|51|100|1650
Deep impact socket 6 pt|1”|3559052|52|100|1650
Deep impact socket 6 pt|1”|3559053|53|100|1700
Deep impact socket 6 pt|1”|3559054|54|100|1750
Deep impact socket 6 pt|1”|3559055|55|105|1900
Deep impact socket 6 pt|1”|3559057|57|105|1950
Deep impact socket 6 pt|1”|3559058|58|105|2000
Deep impact socket 6 pt|1”|3559059|59|110|2050
Deep impact socket 6 pt|1”|3559060|60|110|2100
Deep impact socket 6 pt|1”|3559063|63|110|2200
Deep impact socket 6 pt|1”|3559065|65|115|2350
Deep impact socket 6 pt|1”|3559066|66|115|2450
Deep impact socket 6 pt|1”|3559068|68|120|2550
Deep impact socket 6 pt|1”|3559070|70|120|2650
Deep impact socket 6 pt|1”|3559071|71|135|3000
Deep impact socket 6 pt|1”|3559075|75|135|4000
Deep impact socket 6 pt|1”|3559076|76|135|4000
Deep impact socket 6 pt|1”|3559080|80|135|4500
Deep impact socket 6 pt|1”|3559085|85|140|5250
Deep impact socket 6 pt|1”|3559090|90|140|5750
Deep impact socket 6 pt|1”|3559095|95|140|6300
`);

const TOOLS_TX_PLUS_SOCKET_ROWS = toolsRows(`
Socket TX Plus|1/4”|21204|E4|25|12
Socket TX Plus|1/4”|21205|E5|25|12
Socket TX Plus|1/4”|21206|E6|25|18
Socket TX Plus|1/4”|21207|E7|25|18
Socket TX Plus|1/4”|21208|E8|25|19
Socket TX Plus|1/4”|21210|E10|25|20
Socket TX Plus|1/4”|21211|E11|25|50
Socket TX Plus|1/4”|21212|E12|25|52
Socket TX Plus|1/2”|23210|E10|45|50
Socket TX Plus|1/2”|23211|E11|45|52
Socket TX Plus|1/2”|23212|E12|45|53
Socket TX Plus|1/2”|23214|E14|45|57
Socket TX Plus|1/2”|23216|E16|45|65
Socket TX Plus|1/2”|23218|E18|45|89
Socket TX Plus|1/2”|23220|E20|45|92
Socket TX Plus|1/2”|23222|E22|45|111
Bit socket TX Plus|3/8”|82624808|T8|48|35
Bit socket TX Plus|3/8”|82624810|T10|48|35
Bit socket TX Plus|3/8”|82624815|T15|48|36
Bit socket TX Plus|3/8”|82624820|T20|48|36
Bit socket TX Plus|3/8”|82624825|T25|48|36
Bit socket TX Plus|3/8”|82624827|T27|48|36
Bit socket TX Plus|3/8”|82624830|T30|48|37
Bit socket TX Plus|3/8”|82624840|T40|48|38
Bit socket TX Plus|3/8”|82624845|T45|48|39
Bit socket TX Plus|3/8”|82624850|T50|48|40
Bit socket TX Plus|3/8”|82624855|T55|48|50
Bit socket TX Plus|3/8”|82624860|T60|48|60
Socket TX Plus|3/8”|22210|E10|37|52
Socket TX Plus|3/8”|22211|E11|37|54
Socket TX Plus|3/8”|22212|E12|37|54
Socket TX Plus|3/8”|22214|E14|37|57
Socket TX Plus|3/8”|22216|E16|37|63
Socket TX Plus|3/8”|22218|E18|37|62
Socket TX Plus|3/8”|22220|E20|37|64
Socket TX Plus|3/8”|22222|E22|37|108
Bit socket TX Plus|1/4”|81623706|T6|37|14
Bit socket TX Plus|1/4”|81623707|T7|37|14
Bit socket TX Plus|1/4”|81623708|T8|37|14
Bit socket TX Plus|1/4”|81623709|T9|37|14
Bit socket TX Plus|1/4”|81623710|T10|37|14
Bit socket TX Plus|1/4”|81623715|T15|37|14
Bit socket TX Plus|1/4”|81623720|T20|37|15
Bit socket TX Plus|1/4”|81623725|T25|37|15
Bit socket TX Plus|1/4”|81623727|T27|37|15
Bit socket TX Plus|1/4”|81623730|T30|37|15
Bit socket TX Plus|1/4”|81623740|T40|37|16
Bit socket TX Plus|1/2”|836205520|T20|55|66
Bit socket TX Plus|1/2”|836205525|T25|55|66
Bit socket TX Plus|1/2”|836205527|T27|55|67
Bit socket TX Plus|1/2”|836205530|T30|55|67
Bit socket TX Plus|1/2”|836205540|T40|55|68
Bit socket TX Plus|1/2”|836205545|T45|55|69
Bit socket TX Plus|1/2”|836205550|T50|55|71
Bit socket TX Plus|1/2”|836205555|T55|55|82
Bit socket TX Plus|1/2”|836205560|T60|55|116
Bit socket TX Plus|1/2”|836205570|T70|55|121
`);

const TOOLS_WRENCH_ROWS = toolsRows(`
Double open wrench||4140607|6X7|22
Double open wrench||4140809|8X9|32
Double open wrench||4141011|10X11|58
Double open wrench||4141213|12X13|80
Double open wrench||4141415|14X15|98
Double open wrench||4141617|16X17|134
Double open wrench||4141819|18X19|158
Double open wrench||4142022|20X22|212
Double open wrench||4142123|21X23|232
Double open wrench||4142224|22X24|225
Double open wrench||4142427|24X27|314
Double open wrench||4142528|25X28|386
Double open wrench||4143032|30X32|486
Double open wrench||4143436|34X36|600
Combination wrench DIN 3113||41706|6|12
Combination wrench DIN 3113||41707|7|18
Combination wrench DIN 3113||41708|8|26
Combination wrench DIN 3113||41709|9|34
Combination wrench DIN 3113||41710|10|40
Combination wrench DIN 3113||41711|11|50
Combination wrench DIN 3113||41712|12|60
Combination wrench DIN 3113||41713|13|72
Combination wrench DIN 3113||41714|14|84
Combination wrench DIN 3113||41715|15|100
Combination wrench DIN 3113||41716|16|110
Combination wrench DIN 3113||41717|17|146
Combination wrench DIN 3113||41718|18|165
Combination wrench DIN 3113||41719|19|180
Combination wrench DIN 3113||41720|20|195
Combination wrench DIN 3113||41721|21|217
Combination wrench DIN 3113||41722|22|258
Combination wrench DIN 3113||41723|23|287
Combination wrench DIN 3113||41724|24|314
Combination wrench DIN 3113||41725|25|350
Combination wrench DIN 3113||41726|26|386
Combination wrench DIN 3113||41727|27|443
Combination wrench DIN 3113||41728|28|472
Combination wrench DIN 3113||41729|29|530
Combination wrench DIN 3113||41730|30|601
Combination wrench DIN 3113||41732|32|697
Stubby combination wrench||42608|8|20
Stubby combination wrench||42609|9|20
Stubby combination wrench||42610|10|30
Stubby combination wrench||42611|11|30
Stubby combination wrench||42612|12|40
Stubby combination wrench||42613|13|40
Stubby combination wrench||42614|14|40
Stubby combination wrench||42615|15|40
Stubby combination wrench||42616|16|45
Stubby combination wrench||42617|17|50
Combination wrench DIN 3113||41506|6|14
Combination wrench DIN 3113||41507|7|20
Combination wrench DIN 3113||41508|8|30
Combination wrench DIN 3113||41509|9|32
Combination wrench DIN 3113||41510|10|38
Combination wrench DIN 3113||41511|11|50
Combination wrench DIN 3113||41512|12|66
Combination wrench DIN 3113||41513|13|70
Combination wrench DIN 3113||41514|14|84
Combination wrench DIN 3113||41515|15|94
Combination wrench DIN 3113||41516|16|108
Combination wrench DIN 3113||41517|17|128
Combination wrench DIN 3113||41518|18|148
Combination wrench DIN 3113||41519|19|160
Combination wrench DIN 3113||41520|20|178
Combination wrench DIN 3113||41521|21|210
Combination wrench DIN 3113||41522|22|250
Combination wrench DIN 3113||41523|23|254
Combination wrench DIN 3113||41524|24|328
Combination wrench DIN 3113||41525|25|314
Combination wrench DIN 3113||41526|26|348
Combination wrench DIN 3113||41527|27|380
Combination wrench DIN 3113||41528|28|430
Combination wrench DIN 3113||41529|29|436
Combination wrench DIN 3113||41530|30|530
Combination wrench DIN 3113||41532|32|570
Combination wrench DIN 3113||41533|33|630
Combination wrench DIN 3113||41534|34|630
Combination wrench DIN 3113||41535|35|800
Combination wrench DIN 3113||41536|36|800
Combination wrench DIN 3113||41538|38|1000
Combination wrench DIN 3113||41541|41|1160
Combination wrench DIN 3113||41543|43|1160
Combination wrench DIN 3113||41546|46|1700
Combination wrench DIN 3113||41548|48|2000
Combination wrench DIN 3113||41550|50|2000
Combination wrench DIN 3113||41555|55|2800
Combination wrench DIN 3113||41558|58|3900
Combination wrench DIN 3113||41560|60|3900
Combination wrench DIN 3113||41565|65|5800
Combination wrench DIN 3113||41570|70|5800
Combination wrench DIN 3113||41575|75|6650
Combination wrench DIN 3113||41580|80|6650
TX wrench||4160608|E6XE8|22
TX wrench||4160711|E7XE11|24
TX wrench||4161012|E10XE12|42
TX wrench||4161418|E14XE18|82
TX wrench||4161622|E16XE22|116
TX wrench||4162024|E20XE24|200
75° offset ring wrench||4190607|6X7|52
75° offset ring wrench||4190809|8X9|56
75° offset ring wrench||4191011|10X11|94
75° offset ring wrench||4191213|12X13|122
75° offset ring wrench||4191415|14X15|164
75° offset ring wrench||4191617|16X17|196
75° offset ring wrench||4191819|18X19|260
75° offset ring wrench||4192022|20X22|320
75° offset ring wrench||4192122|21X22|382
75° offset ring wrench||4192123|21X23|344
75° offset ring wrench||4192326|23X26|490
75° offset ring wrench||4192427|24X27|498
75° offset ring wrench||4192528|25X28|546
75° offset ring wrench||4193032|30X32|632
75° offset ring wrench||4193436|34X36|1000
Flare nut wrench||4110810|8X10|52
Flare nut wrench||4111113|11X13|84
Flare nut wrench||4111214|12X14|116
Flare nut wrench||4111618|16X18|130
Flare nut wrench||4111719|17X19|184
Flare nut wrench||4111922|19X22|244
Flare nut wrench||4112427|24X27|342
Flare nut wrench||4113032|30X32|470
Flare nut wrench||4113641|36X41|470
Reversible ratcheting wrench 12 pt||4170208|8|36
Reversible ratcheting wrench 12 pt||4170209|9|44
Reversible ratcheting wrench 12 pt||4170210|10|58
Reversible ratcheting wrench 12 pt||4170211|11|70
Reversible ratcheting wrench 12 pt||4170212|12|84
Reversible ratcheting wrench 12 pt||4170213|13|100
Reversible ratcheting wrench 12 pt||4170214|14|116
Reversible ratcheting wrench 12 pt||4170215|15|140
Reversible ratcheting wrench 12 pt||4170216|16|158
Reversible ratcheting wrench 12 pt||4170217|17|200
Reversible ratcheting wrench 12 pt||4170218|18|202
Reversible ratcheting wrench 12 pt||4170219|19|250
Reversible ratcheting wrench 12 pt||4170221|21|358
Reversible ratcheting wrench 12 pt||4170222|22|361
Reversible ratcheting wrench 12 pt||4170224|24|484
Reversible ratcheting wrench 12 pt||4170227|27|632
Ultra-thin ratcheting wrench 12 pt||4170908|8|36
Ultra-thin ratcheting wrench 12 pt||4170909|9|42
Ultra-thin ratcheting wrench 12 pt||4170910|10|54
Ultra-thin ratcheting wrench 12 pt||4170911|11|60
Ultra-thin ratcheting wrench 12 pt||4170912|12|68
Ultra-thin ratcheting wrench 12 pt||4170913|13|84
Ultra-thin ratcheting wrench 12 pt||4170914|14|102
Ultra-thin ratcheting wrench 12 pt||4170915|15|116
Ultra-thin ratcheting wrench 12 pt||4170916|16|138
Ultra-thin ratcheting wrench 12 pt||4170917|17|160
Ultra-thin ratcheting wrench 12 pt||4170918|18|178
Ultra-thin ratcheting wrench 12 pt||4170919|19|196
`);

const TOOLS_DATA = {
  schemaVersion: 2,
  dataScope: {
    implementedCatalogPages: [76, 97],
    productModel: "category-family-variants"
  },
  hero: {
    image: "assets/products/tools/hero/tools-hero.jpg",
    imageAlt:
      "Kỹ thuật viên làm việc trên xe đua trong khu vực paddock với tủ dụng cụ Sonic"
  },
  intro: {
    title: "CÔNG CỤ TOÀN DIỆN CHO MÔI TRƯỜNG CHUYÊN NGHIỆP",
    paragraphs: [
      "Từ dụng cụ cầm tay và bộ dụng cụ hoàn chỉnh đến giải pháp di động và dụng cụ chuyên dụng cho sửa chữa ô tô.",
      "Sonic giúp gara, xưởng dịch vụ và kỹ thuật viên tổ chức công việc hiệu quả, lựa chọn đúng dụng cụ cho từng nhu cầu."
    ],
    image: "assets/products/tools/tools-intro-workshop.jpg",
    imageAlt:
      "Kỹ thuật viên lựa chọn dụng cụ từ vali chuyên nghiệp tại khu vực motorsport"
  },
  categories: [
    {
      id: "ratchets-torque",
      name: "Cần siết và dụng cụ cân lực",
      description:
        "Tay cóc, tay vặn, tay T nhanh và cân lực cho thao tác lắp ráp, bảo dưỡng.",
      scope: ["Tay cóc", "Cân lực", "Phụ kiện truyền lực"],
      image: "assets/products/tools/categories/ratchets-torque.jpg",
      imageAlt: "Cần siết Sonic được sử dụng trên động cơ ô tô",
      sourcePages: [76, 77, 78, 79],
      sourceImage: "page076_img05.png",
      sharedUsage: "category-card-and-preview",
      enabled: true,
      families: [
        {
          id: "next-ratchets",
          name: "Tay cóc NEXT 60 răng",
          description:
            "Tay cóc NEXT theo các đầu truyền động 1/4”, 3/8” và 1/2”, kèm thông số trọng lượng, kích thước và lực siết.",
          image: "assets/products/tools/families/next-ratchets.jpg",
          imageAlt: "Tay cóc Sonic NEXT 60 răng",
          sourcePages: [76],
          sourceImage: "page076_img01.png",
          sharedImage: false,
          verified: true,
          columns: [
            { key: "sku", label: "SKU" },
            { key: "drive", label: "Đầu truyền động" },
            { key: "description", label: "Mô tả" },
            { key: "weightG", label: "Khối lượng (g)" },
            { key: "lengthMm", label: "Dài (mm)" },
            { key: "widthMm", label: "Rộng (mm)" },
            { key: "heightMm", label: "Cao (mm)" },
            { key: "torqueNm", label: "Nm" }
          ],
          variants: toolsRows(`
7121501|1/4”|Tay cóc 1/4” 60 răng|90|147|21|20|90
7121502|3/8”|Tay cóc 3/8” 60 răng|214|195|28|28|300
7121503|1/2”|Tay cóc 1/2” 60 răng|492|260|37|35|757
`)
        },
        {
          id: "ratchets-handles",
          name: "Tay cóc, tay vặn và tay T nhanh",
          description:
            "Các dòng tay cóc xoay, tay cóc đầu lắc, tay cóc ngắn, tay cóc đầu rotor, tay cóc đĩa, VDE và tay T nhanh.",
          image: "assets/products/tools/families/ratchets-handles.jpg",
          imageAlt: "Tay cóc và tay vặn Sonic",
          sourcePages: [77],
          sourceImage: "page077_img11.png",
          sharedImage: false,
          verified: true,
          columns: [
            { key: "sku", label: "SKU" },
            { key: "family", label: "Dòng" },
            { key: "drive", label: "Đầu truyền động" },
            { key: "teeth", label: "Số răng" },
            { key: "length", label: "Chiều dài / ghi chú" }
          ],
          variants: toolsRows(`
7121101|Tay cóc xoay|1/4”||
7121102|Tay cóc xoay|3/8”||
7121103|Tay cóc xoay|1/2”||
7110801|Tay cóc đầu lắc có khóa|1/4”|45|
7110802|Tay cóc đầu lắc có khóa|3/8”|45|
7110803|Tay cóc đầu lắc có khóa|1/2”|45|
7120101|Tay cóc ngắn|1/4”|45|
7120102|Tay cóc ngắn|3/8”|45|
7120901|Tay vặn|1/4”|45|
7120902|Tay vặn|3/8”|45|
7120903|Tay vặn|1/2”|45|
7110101|Tay cóc đầu lắc|1/4”|45|
7110102|Tay cóc đầu lắc|3/8”|45|
711013300|Tay cóc đầu lắc|1/2”|45|300mml
711013440|Tay cóc đầu lắc|1/2”|45|440mml
7120701|Tay vặn|1/4”|72|
7120702|Tay vặn|3/8”|72|
7120703|Tay vặn|1/2”|72|
7110201|Tay cóc đầu lắc|1/4”|72|
7110202|Tay cóc đầu lắc|3/8”|72|
7110203|Tay cóc đầu lắc|1/2”|72|
7110402|Tay cóc ngắn đầu rotor|3/8”|72|
7110403|Tay cóc ngắn đầu rotor|1/2”|72|
4813902|Thanh nối VDE|3/8”||125mmL
4813901|Tay cóc VDE|3/8”||
7110301|Tay cóc đĩa|1/4”|72|
7110302|Tay cóc đĩa|3/8”|72|
7110303|Tay cóc đĩa|1/2”|72|
300313|Bộ tay cóc đĩa|1/4”, 3/8”, 1/2”|72|3-pcs
7121403|Tay cóc kéo dài|1/2”|36|
72601|Tay T nhanh|1/4”||
72602|Tay T nhanh|3/8”||
72603|Tay T nhanh|1/2”||
`)
        },
        {
          id: "next-torque-wrenches",
          name: "Cân lực NEXT 5–340 Nm",
          description:
            "Cân lực Sonic NEXT với dải 5–340 Nm, gồm bản công bố phù hợp và bản chứng nhận.",
          image: "assets/products/tools/families/next-torque-wrenches.jpg",
          imageAlt: "Cân lực Sonic NEXT",
          sourcePages: [78],
          sourceImage: "page078_img02.png",
          sharedImage: false,
          verified: true,
          columns: [
            { key: "sku", label: "SKU" },
            { key: "size", label: "Size" },
            { key: "torqueNm", label: "Nm" },
            { key: "dMm", label: "D (mm)" },
            { key: "tMm", label: "T (mm)" },
            { key: "lMm", label: "L (mm)" },
            { key: "weightG", label: "G" },
            { key: "certificate", label: "Chuẩn" }
          ],
          variants: toolsRows(`
733105251|1/4”|5-25|22,5|20|254|345|ISO 6789-1:2017 công bố phù hợp
733210501|3/8”|10-50|31|26,5|416|1145|ISO 6789-1:2017 công bố phù hợp
7332201001|3/8”|20-100|31|26,5|413|1145|ISO 6789-1:2017 công bố phù hợp
7333201001|1/2”|20-100|31|31|413|1150|ISO 6789-1:2017 công bố phù hợp
7333402001|1/2”|40-200|41|36,5|524|1535|ISO 6789-1:2017 công bố phù hợp
7333603401|1/2”|60-340|41|36,5|615|1730|ISO 6789-1:2017 công bố phù hợp
733105252|1/4”|5-25|22,5|20|254|345|ISO 6789-2:2017 chứng nhận
733210502|3/8”|10-50|31|26,5|416|1145|ISO 6789-2:2017 chứng nhận
7332201002|3/8”|20-100|31|26,5|413|1145|ISO 6789-2:2017 chứng nhận
7333201002|1/2”|20-100|31|31|413|1150|ISO 6789-2:2017 chứng nhận
7333402002|1/2”|40-200|41|36,5|524|1535|ISO 6789-2:2017 chứng nhận
7333603402|1/2”|60-340|41|36,5|615|1730|ISO 6789-2:2017 chứng nhận
`)
        },
        {
          id: "heavy-torque-wrenches",
          name: "Cân lực tải lớn",
          description:
            "Các dòng cân lực theo đầu 3/8”, 1/2”, 3/4” và 1”, với dải Nm, kích thước D/T/L và khối lượng.",
          image: "assets/products/tools/families/heavy-torque-wrenches.jpg",
          imageAlt: "Cân lực Sonic tải lớn",
          sourcePages: [79],
          sourceImage: "page079_img03.png",
          sharedImage: false,
          verified: true,
          columns: [
            { key: "sku", label: "SKU" },
            { key: "size", label: "Size" },
            { key: "torqueNm", label: "Nm" },
            { key: "dMm", label: "D (mm)" },
            { key: "tMm", label: "T (mm)" },
            { key: "lMm", label: "L (mm)" },
            { key: "weightG", label: "G" }
          ],
          variants: toolsRows(`
7324550|3/4''|110-550|63.0|58|970|3700
7324750|3/4''|150-750|63.0|58|1150|5600
73241000|3/4''|200-1000|63.0|63|1250|7200
7325750|1''|150-750|63.0|58|1150|5600
73251000|1''|200-1000|63.0|63|1250|7200
73021050|3/8"|10-50|40.5|37|360|920
730220100|3/8"|20-100|40.5|37|405|1020
730320100|1/2"|20-100|40.5|40|405|1020
730340200|1/2"|40-200|40.5|40|500|1220
7304110550|3/4"|110-550|63.0|58|970|3700
7304150750|3/4"|150-750|63.0|58|1150|5600
`)
        }
      ],
      featuredProducts: []
    },
    {
      id: "sockets-accessories",
      name: "Khẩu, đầu khẩu và đầu nối",
      description:
        "Khẩu, đầu bit, thanh nối và phụ kiện theo nhiều chuẩn đầu truyền động.",
      scope: ["Khẩu tiêu chuẩn", "Khẩu dài và bit", "Đầu nối"],
      image: "assets/products/tools/categories/sockets-accessories.jpg",
      imageAlt: "Các loại khẩu và đầu bit Sonic được sắp xếp trong khay dụng cụ",
      sourcePages: [80, 81, 82, 83, 84, 85, 86, 87],
      sourceImage: "page081_img11.png",
      sharedUsage: "category-card-and-preview",
      enabled: true,
      families: [
        {
          id: "socket-bit-rails-quarter-three-eighth",
          name: "Bộ khẩu và bit trên rail 1/4” và 3/8”",
          description:
            "Các bộ khẩu, đầu bit và TX/TX Plus trên rail cho đầu 1/4” và 3/8”.",
          image:
            "assets/products/tools/families/socket-bit-rails-quarter-three-eighth.jpg",
          imageAlt: "Bộ khẩu và bit trên rail 1/4 inch và 3/8 inch",
          sourcePages: [80],
          sourceImage: "page080_img10.png",
          sharedImage: false,
          verified: true,
          columns: [
            { key: "sku", label: "SKU" },
            { key: "drive", label: "Đầu" },
            { key: "name", label: "Tên sản phẩm" },
            { key: "pieces", label: "Số món" },
            { key: "contents", label: "Thành phần / size" }
          ],
          variants: toolsRows(`
101204|1/4”|Flank deep socket set 1/4”, 6 pt. on rail|12-pcs|4, 4.5, 5, 5.5, 6, 7, 8, 9, 10, 11, 12, 13mm
101202|1/4”|Deep socket set 1/4”, 12 pt. on rail|12-pcs|4, 4.5, 5, 5.5, 6, 7, 8, 9, 10, 11, 12, 13mm
101002|1/4”|TX socket set 1/4”, TX on rail|10-pcs|E5, E6, E7, E8, E10 short; E5, E6, E7, E8, E10 deep
100904|1/4”|Bit socket set 1/4”, hex on rail|9-pcs|3, 4, 5, 5.5, 6, 7, 8, 9, 10mm
100702|1/4”|Bit socket set 1/4”, hex on rail|7-pcs|1/8”, 5/32”, 3/16”, 7/32”, 1/4”, 5/16”, 3/8”
101004|1/4”|Bit socket set 1/4”, TX on rail|10-pcs|TX 1/4”: T8, T10, T15, T20, T25; TX tamperproof 1/4”: T8H, T10H, T15H, T20H, T25H
101008|1/4”|Bit socket set 1/4” TX plus on rail|10-pcs|IP6, IP7, IP8, IP10, IP15, IP20, IP25, IP27, IP30, IP40
201204|1/4” & 3/8”|Flank socket 1/4” & 3/8” TX plus on rail|12-pcs|1/4” EP6, EP7, EP8, EP10, EP11, EP12; 3/8” EP10, EP11, EP12, EP14, EP16, EP18
201001|3/8”|Socket set 3/8”, 6 pt. on rail|10-pcs|8, 9, 10, 11, 12, 13, 14, 15, 16, 17mm
201008|3/8”|Flank deep socket 3/8”, 6 pt. on rail|10-pcs|8, 9, 10, 11, 12, 13, 14, 15, 16, 17mm
201009|3/8”|Flank socket set 3/8”, 12 pt. on rail|10-pcs|8, 10, 11, 12, 13, 14, 15, 16, 17, 19mm
201010|3/8”|Flank deep socket set 3/8”, 12 pt. on rail|10-pcs|8, 10, 11, 12, 13, 14, 15, 16, 17, 19mm
201002|3/8”|Socket set 3/8”, TX on rail|10-pcs|E10, E11, E12, E14, E16 short; E10, E11, E12, E14, E16 deep
201003|3/8”|Bit socket set 3/8”, hex on rail|10-pcs|3, 4, 5, 5.5, 6, 7, 8, 9, 10, 12mm
200903|3/8”|Bit socket set 3/8”, hex long on rail|9-pcs|90mml 3, 4, 5, 5.5, 6, 7, 8, 9, 10mm
200902|3/8”|Bit socket set 3/8”, hex on rail|9-pcs|3/8”, 1/8”, 5/32”, 3/16”, 7/32”, 1/4”, 5/16”, 3/8”, 7/16”, 1/2”
201005|3/8”|Bit socket set 3/8”, TX on rail|10-pcs|T8, T10, T15, T20, T25, T27, T30, T40, T45, T50
201006|3/8”|Bit socket set 3/8”, TX tamperproof on rail|10-pcs|T8H, T10H, T15H, T20H, T25H, T27H, T30H, T40H, T45H, T50H
201201|3/8”|Bit socket set 3/8”, ribe & spline on rail|12-pcs|Spline M5, M6, M8, M9, M10, M12; Ribe M5, M6, M7, M8, M9, M10
201016|3/8”|Bit socket set 3/8”, star low on rail|10-pcs|T10, T15, T20, T25, T27, T30, T40, T45, T50, T55
`)
        },
        {
          id: "socket-rails-half-inch",
          name: "Bộ khẩu trên rail 1/2”",
          description:
            "Các bộ rail 1/2” gồm khẩu, khẩu dài, bit, TX và TX Plus.",
          image: "assets/products/tools/families/socket-rails-half-inch.jpg",
          imageAlt: "Bộ khẩu rail 1/2 inch trong ngăn tủ Sonic",
          sourcePages: [81],
          sourceImage: "page081_img11.png",
          sharedImage: false,
          verified: true,
          columns: [
            { key: "sku", label: "SKU" },
            { key: "drive", label: "Đầu" },
            { key: "name", label: "Tên sản phẩm" },
            { key: "pieces", label: "Số món" },
            { key: "contents", label: "Thành phần / size" }
          ],
          variants: toolsRows(`
301202|1/2”|Deep socket set 1/2”, 6 pt. on rail|12-pcs|8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19mm
301203|1/2”|Socket set 1/2”, 12 pt. on rail|12-pcs|8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19mm
301204|1/2”|Deep socket set 1/2”, 12 pt. on rail|12-pcs|8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19mm
300902|1/2”|Socket set 1/2”, TX on rail|9-pcs|E10, E11, E12, E14, E16, E18, E20, E22, E24
301503|1/2”|Socket set 1/2”, 12 pt. on rail|15-pcs|3/8”, 7/16”, 1/2”, 9/16”, 5/8”, 11/16”, 3/4”, 13/16”, 7/8”, 15/16”, 1”, 1.1/16”, 1.1/8”, 1.3/16”, 1.1/4”
301003|1/2”|Bit socket set 1/2”, hex on rail|10-pcs|4, 5, 5.5, 6, 7, 8, 9, 10, 12, 14mm
301002|1/2”|Bit socket set 1/2”, hex on rail|10-pcs|3/16”, 1/4”, 9/32”, 5/16”, 11/32”, 3/8”, 7/16”, 1/2”, 9/16”, 5/8”
301005|1/2”|Bit socket set 1/2”, TX on rail|10-pcs|T20, T25, T27, T30, T40, T45, T50, T55, T60, T70
300906|1/2”|Bitdopset 1/2”, veeltand op rail|9-pcs|M5, M6, M8, M9, M10, M12, M14, M16; M16-T
301009|1/2”|Bit socket 1/2” TX plus on rail|10-pcs|IP20, IP25, IP27, IP30, IP40, IP45, IP50, IP55, IP60, IP70
`)
        },
        {
          id: "standard-deep-sockets",
          name: "Khẩu tiêu chuẩn và khẩu dài",
          description:
            "Khẩu 6 cạnh, khẩu dài và khẩu 12 cạnh theo các đầu 1/4”, 3/8”, 1/2”, 3/4” và 1”.",
          image: "assets/products/tools/families/standard-deep-sockets.jpg",
          imageAlt: "Khẩu tiêu chuẩn và khẩu dài Sonic",
          sourcePages: [82, 83],
          sourceImage: "page082_img04.png",
          sharedImage: false,
          verified: true,
          columns: [
            { key: "type", label: "Dòng" },
            { key: "drive", label: "Đầu" },
            { key: "sku", label: "SKU" },
            { key: "size", label: "Size" },
            { key: "lengthMm", label: "L (mm)" },
            { key: "weightG", label: "G" }
          ],
          variants: TOOLS_STANDARD_DEEP_SOCKET_ROWS
        },
        {
          id: "impact-sockets",
          name: "Khẩu impact",
          description:
            "Khẩu impact và khẩu impact dài 6 cạnh cho đầu 1/2”, 3/4” và 1”.",
          image: "assets/products/tools/families/impact-sockets.jpg",
          imageAlt: "Khẩu impact Sonic",
          sourcePages: [83, 84, 85],
          sourceImage: "page083_img06.png",
          sharedImage: false,
          verified: true,
          columns: [
            { key: "type", label: "Dòng" },
            { key: "drive", label: "Đầu" },
            { key: "sku", label: "SKU" },
            { key: "size", label: "Size" },
            { key: "lengthMm", label: "L (mm)" },
            { key: "weightG", label: "G" }
          ],
          variants: TOOLS_IMPACT_SOCKET_ROWS
        },
        {
          id: "tx-plus-sockets",
          name: "Khẩu TX Plus và bit TX Plus",
          description:
            "Khẩu TX Plus và bit TX Plus cho các đầu 1/4”, 3/8” và 1/2”.",
          image: "assets/products/tools/families/tx-plus-sockets.jpg",
          imageAlt: "Bit socket TX Plus Sonic",
          sourcePages: [86],
          sourceImage: "page086_img04.png",
          sharedImage: false,
          verified: true,
          columns: [
            { key: "type", label: "Dòng" },
            { key: "drive", label: "Đầu" },
            { key: "sku", label: "SKU" },
            { key: "size", label: "Size" },
            { key: "lengthMm", label: "L (mm)" },
            { key: "weightG", label: "G" }
          ],
          variants: TOOLS_TX_PLUS_SOCKET_ROWS
        },
        {
          id: "specialty-sockets-adaptors",
          name: "Khẩu chuyên dụng, đầu chuyển và khớp nối lắc",
          description:
            "Các bộ khẩu chuyên dụng, đầu chuyển lực siết, đầu tháo bu-lông hỏng, khẩu xoắn, khẩu moay-ơ và khớp nối lắc.",
          image: "assets/products/tools/families/specialty-sockets-adaptors.jpg",
          imageAlt: "Khớp nối lắc Sonic",
          sourcePages: [87],
          sourceImage: "page087_img13.png",
          sharedImage: false,
          verified: true,
          columns: [
            { key: "sku", label: "SKU" },
            { key: "name", label: "Tên sản phẩm" },
            { key: "drive", label: "Đầu" },
            { key: "pieces", label: "Số món" },
            { key: "contents", label: "Thông tin xác minh" }
          ],
          variants: toolsRows(`
300311|Bộ khẩu impact 1/2”|1/2”|3-pcs|17, 19, 21mm; thành mỏng
300303|Bộ khẩu bánh xe siêu dài 1/2”|1/2”|3-pcs|17, 19, 21mm
300304|Bộ đầu chuyển lực siết impact 1/2”|1/2”|3-pcs|3/8”, 1/2”, 3/4”
300302|Bộ đầu chuyển lực siết impact 1/2”|1/2”|3-pcs|17, 19, 21mm; thành mỏng; chặn nhựa; 105mml; tối đa 200Nm
300312|Bộ khẩu bánh xe 1/2” 6 cạnh có vòng màu 150mml|1/2”|3-pcs|17, 19, 21mm
3310617|Khẩu impact 1/2”|1/2”|1|17mm dùng cho Mercedes-Benz, 88mml
805019|Khẩu cùm phanh, 1/2”|1/2”|1|10 pt. 38mml
807001|Bộ khẩu impact đai ốc moay-ơ 1/2”, 12 cạnh|1/2”|3-pcs|30, 32, 36mm
300910|Bộ khẩu E dài impact 1/2”|1/2”|9-pcs|E10, E11, E12, E14, E16, E18, E20, E22, E24
300601|Bộ khẩu bit impact 1/2’’|1/2”|6-pcs|M14, M16, M18; dài 43mml & 78mml
801206|Bộ khẩu tháo bu-lông hỏng 3/8”|3/8”|6-pcs|2, 3, 4, 6, 8, 10mm
801305|Bộ khẩu tháo bu-lông hỏng 1/2”|1/2”|5-pcs|8, 10, 12, 14, 16mm
300504|Bộ khẩu xoắn 1/2”|1/2”|5-pcs|Dùng để tháo đai ốc và bu-lông hỏng; 17, 19, 21, 23, 27mm
300901|Bộ khẩu xoắn 3/8”|3/8”|10-pcs|Dùng để tháo đai ốc và bu-lông hỏng; 10, 11, 12, 13, 14, 15, 16, 17, 19mm
818026|Bộ khẩu xoắn 1/4” & 1/2”|1/4” & 1/2”|15-pcs|
805001|Bộ khẩu bugi sấy 3/8”|3/8”|3-pcs|8, 10, 12mm
301601|Bộ khẩu đa năng 1/2”|1/2”|16-pcs|8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24mm
71514|Khớp nối lắc 1/4” (tự hồi)|1/4”|1|Tự hồi
71524|Khớp nối lắc 3/8” (tự hồi)|3/8”|1|Tự hồi
71534|Khớp nối lắc 1/2” (tự hồi)|1/2”|1|Tự hồi
`)
        }
      ],
      featuredProducts: []
    },
    {
      id: "wrenches",
      name: "Cờ lê",
      description:
        "Cờ lê vòng miệng, cờ lê bánh cóc và các bộ cờ lê được tổ chức theo ứng dụng.",
      scope: ["Cờ lê vòng miệng", "Cờ lê bánh cóc", "Bộ cờ lê"],
      image: "assets/products/tools/categories/wrenches.jpg",
      imageAlt: "Bộ cờ lê Sonic được sắp xếp trong túi cuộn",
      sourcePages: [96, 97],
      sourceImage: "page097_img07.png",
      sharedUsage: "category-card-and-preview",
      enabled: true,
      families: [
        {
          id: "wrenches",
          name: "Cờ lê và bộ cờ lê",
          description:
            "Cờ lê hai đầu miệng, vòng miệng, vòng miệng ngắn, TX, vòng lệch, ống dầu, bánh cóc và các bộ cờ lê trong túi.",
          image: "assets/products/tools/families/wrenches.jpg",
          imageAlt: "Bộ cờ lê Sonic trong túi cuộn",
          sourcePages: [96, 97],
          sourceImage: "page097_img07.png",
          sharedImage: false,
          verified: true,
          columns: [
            { key: "type", label: "Dòng" },
            { key: "drive", label: "Ghi chú" },
            { key: "sku", label: "SKU" },
            { key: "size", label: "Size" },
            { key: "weightG", label: "G / thành phần" }
          ],
          variants: TOOLS_WRENCH_ROWS.concat(
            toolsRows(`
Bộ cờ lê vòng miệng trong túi||601401|14-pcs|6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 22mm
Bộ cờ lê vòng miệng trong túi||601702|17-pcs|6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22mm
Bộ cờ lê vòng bánh cóc đảo chiều 12 cạnh trong túi||601219|12-pcs|8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19mm
Bộ cờ lê vòng bánh cóc đầu lắc 12 cạnh trong túi||601218|12-pcs|8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19mm
Bộ cờ lê vòng miệng trong túi||602603|26-pcs|6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32mm
Bộ cờ lê bánh cóc 4 trong 1 trong túi||600203|2-pcs|Cờ lê X-ring 4 trong 1 8-10, 12-13mm; 16-17, 18-19mm
`)
          )
        }
      ],
      featuredProducts: []
    },
    {
      id: "screwdrivers-hex-tx",
      name: "Tua vít, lục giác và TX",
      description:
        "Tua vít và chìa lục giác, TX với nhiều kiểu đầu và chiều dài phục vụ thao tác kỹ thuật.",
      scope: ["Tua vít", "Lục giác", "TX"],
      image: "assets/products/tools/categories/screwdrivers-hex-tx.jpg",
      imageAlt: "Bộ tua vít Sonic trong ngăn kéo dụng cụ",
      sourcePages: [88, 89, 95],
      sourceImage: "page088_img10.png",
      sharedUsage: "category-card-and-preview",
      enabled: true,
      families: [
        {
          id: "screwdrivers",
          name: "Tua vít",
          description:
            "Bộ tua vít, tua vít khẩu linh hoạt, tua vít siêu dài, dẹt, PH, TX và tua vít ngắn.",
          image: "assets/products/tools/families/screwdrivers.jpg",
          imageAlt: "Bộ tua vít Sonic trong ngăn kéo",
          sourcePages: [88, 89],
          sourceImage: "page088_img10.png",
          sharedImage: false,
          verified: true,
          columns: [
            { key: "sku", label: "SKU" },
            { key: "type", label: "Dòng" },
            { key: "size", label: "Cỡ / bộ" },
            { key: "lengthMm", label: "L (mm)" },
            { key: "weightG", label: "G" },
            { key: "contents", label: "Thành phần / ghi chú" }
          ],
          variants: toolsRows(`
600618|Bộ tua vít trong hộp màu|6-pcs|||3, 4, 5.5, 6.5mm, PH1, PH2
600619|Bộ tua vít TX trong hộp màu|6-pcs|||T10, T15, T20, T25, T27, T30
600620|Bộ tua vít TX-H trong hộp màu|6-pcs|||T10H, T15H, T20H, T25H, T27H, T30H
602006|Bộ tua vít trong hộp màu|20-pcs|||PH.1, PH.2, PH.3; PZ.1, PZ.2, PZ.3; 3, 4, 5.5, 6.5, 8mm; T10, T15, T20, T25, T27, T30
47536|Tua vít khẩu linh hoạt|hex 6mm|||
47537|Tua vít khẩu linh hoạt|hex 7mm|||
47538|Tua vít khẩu linh hoạt|hex 8mm|||
17320002|Tua vít điện tử|2mm|||
600439|Bộ móc mini|4-pcs|||
600514|Bộ tua vít xuyên cán trong hộp màu|5-pcs|||PH.1, PH.2, 5.5, 6.5, 8mm
4753701|Tua vít khẩu linh hoạt|hex 7mm|545||
13625015|Tua vít siêu dài|TX15|250||
13625020|Tua vít siêu dài|TX20|250||
13625025|Tua vít siêu dài|TX25|250||
13625027|Tua vít siêu dài|TX27|250||
13625030|Tua vít siêu dài|TX30|250||
13625040|Tua vít siêu dài|TX40|250||
13625045|Tua vít siêu dài|TX45|250||
1312502|Tua vít siêu dài|PH.2|250||
13325004|Tua vít siêu dài|4mm|250||
13325055|Tua vít siêu dài|5.5mm|250||
13325065|Tua vít siêu dài|6.5mm|250||
1342503|Tua vít siêu dài|hex 3mm|250||
1342504|Tua vít siêu dài|hex 4mm|250||
1342505|Tua vít siêu dài|hex 5mm|250||
1342506|Tua vít siêu dài|hex 6mm|250||
13303|Tua vít dẹt|3|167|20|
13335|Tua vít dẹt|3.5|192|24|
13304|Tua vít dẹt|4|192|28|
13355|Tua vít dẹt|5.5|228|72|
13365|Tua vít dẹt|6.5|265|104|
13308|Tua vít dẹt|8|299|164|
13310|Tua vít dẹt|10|324|228|
13312|Tua vít dẹt|12|324|238|
1310|Tua vít PH|PH.0|152|20|
1311|Tua vít PH|PH.1|183|62|
1312|Tua vít PH|PH.2|215|94|
1313|Tua vít PH|PH.3|274|156|
13605|Tua vít TX|T5|167|24|
13606|Tua vít TX|T6|167|24|
13607|Tua vít TX|T7|167|24|
13608|Tua vít TX|T8|167|24|
13609|Tua vít TX|T9|167|26|
13610|Tua vít TX|T10|203|64|
13615|Tua vít TX|T15|203|66|
13620|Tua vít TX|T20|203|68|
13625|Tua vít TX|T25|215|94|
13627|Tua vít TX|T27|215|94|
13630|Tua vít TX|T30|215|94|
13640|Tua vít TX|T40|215|102|
13645|Tua vít TX|T45|224|136|
1311S|Tua vít ngắn PH|PH.1|104|44|
1312S|Tua vít ngắn PH|PH.2|104|48|
133055S|Tua vít dẹt ngắn|5.5|104|44|
133065S|Tua vít dẹt ngắn|6.5|104|48|
`)
        },
        {
          id: "hex-tx-keys",
          name: "Bộ lục giác và TX",
          description:
            "Bộ chìa lục giác, TX, đầu bi, loại ngắn, loại gập và bộ chìa hai đầu.",
          image: "assets/products/tools/families/hex-tx-keys.jpg",
          imageAlt: "Bộ chìa lục giác và TX Sonic",
          sourcePages: [95],
          sourceImage: "page095_img11.png",
          sharedImage: false,
          verified: true,
          columns: [
            { key: "sku", label: "SKU" },
            { key: "name", label: "Tên sản phẩm" },
            { key: "pieces", label: "Số món" },
            { key: "contents", label: "Thành phần / size" }
          ],
          variants: toolsRows(`
600931|Bộ lục giác bi siêu dài có nam châm|9-pcs|1.5, 2, 2.5, 3, 4, 5, 6, 8, 10mm
601003|Bộ lục giác siêu dài SAE|10-pcs|1/16”, 5/64”, 3/32”, 1/8”, 5/32”, 3/16”, 7/32”, 1/4”, 5/16”, 3/8”
600902|Bộ chìa TX siêu dài|9-pcs|T10, T15, T20, T25, T27, T30, T40, T45, T50
601006|Bộ lục giác bi dài|10-pcs|1.27, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10mm
601007|Bộ chìa lục giác siêu dài|10-pcs|1.27, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10mm
601008|Bộ lục giác bi siêu dài|10-pcs|1.27, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10mm
600912|Bộ lục giác bi ngắn|9-pcs|1.5, 2, 2.5, 3, 4, 5, 6, 8, 10mm
600622|Bộ chìa TX 600mml|6-pcs|T20, T25, T30, T40, T45, T50
601305|Bộ lục giác bi có nam châm|13-pcs|2, 2.5, 3, 4, 5, 6, 7, 8, 10, 12, 14, 17, 19mm
601908|Bộ chìa lục giác bi dài và TX-H hai đầu|19-pcs|1.5, 2, 2.5, 3, 4, 5, 6, 8, 10mm; T10, T15, T20, T25, T27, T30, T40, T45, T50
600716|Bộ lục giác gập|7-pcs|2.5, 3, 4, 5, 6, 8, 10mm
`)
        }
      ],
      featuredProducts: []
    },
    {
      id: "pliers-cutters",
      name: "Kìm và dụng cụ cắt",
      description:
        "Kìm thao tác, kìm giữ và dụng cụ cắt cho các công việc cơ khí và bảo dưỡng.",
      scope: ["Kìm thao tác", "Kìm giữ", "Dụng cụ cắt"],
      image: "assets/products/tools/categories/pliers-cutters.jpg",
      imageAlt: "Kìm Sonic với tay cầm đỏ đen",
      sourcePages: [90, 91],
      sourceImage: "page090_img09.png",
      sharedUsage: "category-card-and-preview",
      enabled: true,
      families: [
        {
          id: "pliers-cutters",
          name: "Kìm và dụng cụ cắt",
          description:
            "Kìm bộ, kìm mũi dài, kìm cắt chéo, kìm tổ hợp, kìm mỏ quạ, kìm phe, kìm bấm chết, kìm lọc dầu và kìm tuốt dây.",
          image: "assets/products/tools/families/pliers-cutters.jpg",
          imageAlt: "Kìm Sonic tay cầm đỏ đen",
          sourcePages: [90, 91],
          sourceImage: "page090_img09.png",
          sharedImage: false,
          verified: true,
          columns: [
            { key: "sku", label: "SKU" },
            { key: "type", label: "Dòng" },
            { key: "size", label: "Cỡ / bộ" },
            { key: "lengthMm", label: "L (mm)" },
            { key: "weightG", label: "G" }
          ],
          variants: toolsRows(`
4342200|Kìm cắt chéo trợ lực|8”||
4342240|Kìm cắt chéo|9”||
4312200|Kìm tổ hợp trợ lực công thái học|8”||
600322|Bộ kìm|3-pcs||
600440|Bộ kìm|4-pcs||
4321200|Kìm mũi dài|8”|205|218
4321170|Kìm mũi dài|6”|170|156
4343200|Kìm cắt cạnh tải nặng|8”|210|290
4331200|Kìm mũi dài cong|8”|195|198
4341175|Kìm cắt cạnh chéo|7”|170|200
4341180|Kìm cắt cạnh chéo||190|236
4311175|Kìm tổ hợp|7”|185|302
4341190|Kìm cắt cạnh chéo đa năng||180|130
4351180|Kìm mỏ quạ||180|145
4351250|Kìm mỏ quạ||250|322
4351300|Kìm mỏ quạ||300|580
4353250|Kìm mỏ quạ K2|10”|250|420
4352180|Kìm mỏ quạ MX||180|200
4352250|Kìm mỏ quạ MX||250|335
4352300|Kìm mỏ quạ MX||300|530
4352400|Kìm mỏ quạ MX||400|1065
43614|Kìm phe cong đóng||167|150
43613|Kìm phe cong mở||167|150
43611|Kìm phe thẳng mở||178|150
43612|Kìm phe thẳng đóng||178|150
47034340|Kìm ống 90°||310|785
47034550|Kìm ống 90°||560|2690
47034680|Kìm ống 90°||635|3450
4380250|Kìm bấm chết|10”|230|570
4476007|Kìm khớp kéo cong siêu dài||336|396
4410265|Kìm rút rive|10.5”|257|486
4450250|Kìm lọc dầu|12”|260|396
4450300|Kìm lọc dầu|12”|305|466
813003|Kìm tuốt dây||210|276
4471180|Kìm tuốt dây tự động|7”|172|144
`)
        }
      ],
      featuredProducts: []
    },
    {
      id: "hammers-punches",
      name: "Búa, đục, đột và dụng cụ phụ",
      description:
        "Búa, đục, đột cùng các dụng cụ hỗ trợ cho tháo lắp và hoàn thiện công việc.",
      scope: ["Búa", "Đục và đột", "Dụng cụ hỗ trợ"],
      image: "assets/products/tools/categories/hammers-punches.jpg",
      imageAlt: "Búa và dụng cụ phụ Sonic trong khay foam",
      sourcePages: [92, 93, 94],
      sourceImage: "page092_img01.png",
      sharedUsage: "category-card-and-preview",
      enabled: true,
      families: [
        {
          id: "chisels-punches",
          name: "Đục và đột",
          description:
            "Đục tay cầm, đục rãnh, đục dẹt, đột chốt, đột côn và đột tâm.",
          image: "assets/products/tools/families/chisels-punches.jpg",
          imageAlt: "Grip chisel Sonic",
          sourcePages: [92],
          sourceImage: "page092_img04.png",
          sharedImage: false,
          verified: true,
          columns: [
            { key: "sku", label: "SKU" },
            { key: "type", label: "Dòng" },
            { key: "lengthMm", label: "L (mm)" },
            { key: "weightG", label: "G" }
          ],
          variants: toolsRows(`
45110141|Đục tay cầm|140|60
45112160|Đục tay cầm|160|96
45116170|Đục tay cầm|170|116
45118190|Đục tay cầm|190|196
45124220|Đục tay cầm|220|350
4527190|Đục rãnh tay cầm|190|186
4831101|Đục dẹt|240|370
4532140|Đột chốt tay cầm|140|50
4533150|Đột chốt tay cầm|150|54
4534180|Đột chốt tay cầm|180|88
4535200|Đột chốt tay cầm|200|102
4536210|Đột chốt tay cầm|210|182
4538220|Đột chốt tay cầm|220|176
45310230|Đột chốt tay cầm|230|176
45312250|Đột chốt tay cầm|250|176
45314290|Đột chốt tay cầm|290|176
45316310|Đột chốt tay cầm|310|176
4552185|Đột côn tay cầm|185|98
4553185|Đột côn tay cầm|185|100
4554185|Đột côn tay cầm|185|102
4564185|Đột tâm tay cầm|185|102
45602|Đột tâm tự động|155|37
`)
        },
        {
          id: "hammers",
          name: "Búa",
          description:
            "Búa nguội, búa đầu tròn, búa đá, búa lắp ráp mềm/cứng và búa đầu nylon.",
          image: "assets/products/tools/families/hammers.jpg",
          imageAlt: "Dòng búa Sonic cán gỗ",
          sourcePages: [93],
          sourceImage: "page093_img02.png",
          sharedImage: false,
          verified: true,
          columns: [
            { key: "sku", label: "SKU" },
            { key: "type", label: "Dòng" },
            { key: "lengthMm", label: "Dài (mm)" },
            { key: "weightG", label: "Khối lượng (g)" }
          ],
          variants: toolsRows(`
4611200|Búa nguội cán gỗ tần bì|287|262
4611300|Búa nguội cán gỗ tần bì|300|380
4611400|Búa nguội cán gỗ tần bì|311|512
4640500|Búa nguội cán gỗ tần bì|347|630
4640600|Búa nguội cán gỗ tần bì|360|760
4640800|Búa nguội cán gỗ tần bì|383|994
4621000|Búa nguội cán gỗ tần bì|396|1166
4641500|Búa nguội cán gỗ tần bì|422|1672
4642000|Búa nguội cán gỗ tần bì|447|2170
4822503|Búa đầu tròn cán gỗ tần bì|320|454
4631000|Búa đá cán gỗ tần bì|278|1106
4822102|Búa lắp ráp mềm/cứng cán gỗ tần bì|300|372
4620400|Búa lắp ráp mềm/cứng cán gỗ tần bì|290|608
4652035|Búa đầu nylon cán gỗ tần bì|335|610
4652060|Búa đầu nylon cán gỗ tần bì|355|1340
`)
        },
        {
          id: "utility-tools",
          name: "Dụng cụ phụ",
          description:
            "Dao, kéo, cưa, giũa, chổi, nam châm và bộ đột chốt.",
          image: "assets/products/tools/families/utility-tools.jpg",
          imageAlt: "Dao utility Sonic",
          sourcePages: [94],
          sourceImage: "page094_img07.png",
          sharedImage: false,
          verified: true,
          columns: [
            { key: "sku", label: "SKU" },
            { key: "name", label: "Tên sản phẩm" },
            { key: "details", label: "Thông tin xác minh" }
          ],
          variants: toolsRows(`
46808|Dao rọc đa năng|kèm 10 lưỡi dự phòng
46804|Dao đa năng|
46807|Dao rọc đa năng|kèm 13 lưỡi
46701|Kéo thẳng|
46704|Kéo đa năng|
47033|Kìm cắt ống nhựa|
46601|Cưa sắt tải nặng|415mml
600624|Bộ đột chốt|6 món: 115 mm x Ø2 mm; 125 mm x Ø3 mm; 150 mm x Ø4 mm; 165 mm x Ø5 mm; 180 mm x Ø6 mm; 180 mm x Ø8 mm
46905|Giũa tam giác cho phanh|8”
4811260|Bàn chải đồng|Dùng cho cùm phanh nhôm và bề mặt kim loại
4820207|Nam châm nhặt linh hoạt|500gr. 400mmL
4820106|Nam châm nhặt kéo dài|2.8kg, 160-620mm
4811254|Bàn chải thép|
`)
        }
      ],
      featuredProducts: []
    },
    {
      id: "tool-sets",
      name: "Bộ dụng cụ",
      description:
        "Bộ dụng cụ BMCS, VDE và các bộ thao tác độc lập cho kỹ thuật viên chuyên nghiệp.",
      scope: ["BMCS", "VDE", "Bộ dụng cụ độc lập"],
      image: "assets/products/tools/categories/tool-sets.jpg",
      imageAlt: "Bộ khẩu và cần siết Sonic trong vali cứng",
      sourcePages: [98, 99, 100, 101],
      sourceImage: "page099_img03.png",
      sharedUsage: "category-card-and-preview",
      enabled: true,
      items: [
        {
          id: "bmcs-quarter-inch",
          type: "family",
          name: "Bộ dụng cụ BMCS 1/4”",
          description:
            "Các bộ dụng cụ BMCS 1/4” nhỏ gọn cho thao tác lắp ráp, bảo dưỡng và bổ sung dụng cụ cơ bản.",
          image: "assets/products/tools/toolsets/bmcs-46-pcs-quarter-inch.jpg",
          imageAlt: "Bộ dụng cụ BMCS 1/4 inch 46 chi tiết Sonic",
          sharedImage: true,
          sourcePages: [98, 99],
          sourceImage: "page098_img01.png",
          products: [
            {
              sku: "104602",
              name: "Bộ dụng cụ BMCS 1/4” 46 chi tiết",
              details: "Cấu hình 1/4” trong vali BMCS."
            },
            {
              sku: "104001",
              name: "Bộ bit socket BMCS 1/4” 40 chi tiết",
              details: "Bộ bit socket 1/4” trong vali BMCS."
            },
            {
              sku: "107403",
              name: "Bộ khẩu BMCS 1/4” 74 chi tiết",
              details: "Bộ khẩu 1/4” trong vali BMCS."
            }
          ]
        },
        {
          id: "bmcs-three-eighth-drive",
          type: "family",
          name: "Bộ dụng cụ BMCS 3/8”",
          description:
            "Các bộ khẩu, bit và cờ lê BMCS 3/8” cho dải công việc bảo dưỡng phổ biến.",
          image: "assets/products/tools/toolsets/bmcs-61-pcs-socket-bit.jpg",
          imageAlt: "Bộ khẩu và bit BMCS 3/8 inch 61 chi tiết Sonic",
          sharedImage: true,
          sourcePages: [98, 99],
          sourceImage: "page098_img03.png",
          products: [
            {
              sku: "204003",
              name: "Bộ dụng cụ BMCS 3/8” 40 chi tiết",
              details: "Cấu hình 3/8” trong vali BMCS."
            },
            {
              sku: "206102",
              name: "Bộ khẩu và bit BMCS 3/8” 61 chi tiết",
              details: "Kết hợp khẩu và bit socket 3/8”."
            },
            {
              sku: "202803",
              name: "Bộ khẩu BMCS 3/8” 28 chi tiết",
              details: "Bộ khẩu 3/8” trong vali BMCS."
            },
            {
              sku: "203703",
              name: "Bộ khẩu và cờ lê BMCS 3/8” 37 chi tiết",
              details: "Bộ kết hợp khẩu và cờ lê 3/8”."
            }
          ]
        },
        {
          id: "bmcs-half-inch-drive",
          type: "family",
          name: "Bộ dụng cụ BMCS 1/2”",
          description:
            "Các bộ khẩu và cờ lê BMCS 1/2” cho thao tác siết mở cần lực lớn hơn.",
          image: "assets/products/tools/toolsets/bmcs-socket-wrench-half-inch.jpg",
          imageAlt: "Bộ khẩu và cờ lê BMCS 1/2 inch Sonic",
          sharedImage: true,
          sourcePages: [98],
          sourceImage: "page098_img05.png",
          products: [
            {
              sku: "301904",
              name: "Bộ khẩu BMCS 1/2” 19 chi tiết",
              details: "Cấu hình khẩu 1/2” trong vali BMCS."
            },
            {
              sku: "304501",
              name: "Bộ khẩu và cờ lê BMCS 1/2” 45 chi tiết",
              details: "Kết hợp khẩu 1/2” và cờ lê."
            }
          ]
        },
        {
          id: "bmcs-multi-drive",
          type: "family",
          name: "Bộ dụng cụ BMCS đa cỡ",
          description:
            "Các bộ BMCS phối hợp nhiều đầu vuông, phù hợp khi cần một vali bao phủ nhiều tình huống.",
          image: "assets/products/tools/toolsets/bmcs-99-pcs-three-drive.jpg",
          imageAlt: "Bộ khẩu BMCS nhiều đầu vuông Sonic 99 chi tiết",
          sharedImage: true,
          sourcePages: [99],
          sourceImage: "page099_img10.png",
          products: [
            {
              sku: "307603",
              name: "Bộ khẩu BMCS 1/4” và 1/2” 76 chi tiết",
              details: "Bộ phối hợp hai đầu vuông."
            },
            {
              sku: "309101",
              name: "Bộ khẩu BMCS 1/4” và 1/2” 91 chi tiết",
              details: "Bộ phối hợp hai đầu vuông."
            },
            {
              sku: "309402",
              name: "Bộ khẩu BMCS 1/4” và 1/2” 94 chi tiết",
              details: "Bộ phối hợp hai đầu vuông."
            },
            {
              sku: "309901",
              name: "Bộ khẩu BMCS 1/4”, 3/8” và 1/2” 99 chi tiết",
              details: "Bộ phối hợp ba đầu vuông."
            }
          ]
        },
        {
          id: "bmcs-bit-socket-sets",
          type: "family",
          name: "Bộ bit socket BMCS 1/2”",
          description:
            "Các bộ bit socket 1/2” chuyên dụng cho đầu TX và spline, đóng trong vali BMCS riêng.",
          image: "assets/products/tools/toolsets/bmcs-bit-socket-half-inch.jpg",
          imageAlt: "Bộ bit socket BMCS 1/2 inch Sonic",
          sharedImage: true,
          sourcePages: [99],
          sourceImage: "page099_img08.png",
          products: [
            {
              sku: "300819",
              name: "Bộ bit socket spline BMCS 1/2” 8 chi tiết",
              details: "Bộ bit socket spline 1/2”."
            },
            {
              sku: "301702",
              name: "Bộ bit socket TX BMCS 1/2” 17 chi tiết",
              details: "Bộ bit socket TX 1/2”."
            }
          ]
        },
        {
          id: "vde-screwdrivers-kits",
          type: "family",
          name: "Tua vít và bộ VDE cách điện",
          description:
            "Tua vít VDE lẻ, bộ tua vít slim và bộ dụng cụ VDE gọn cho thao tác điện cần cách điện.",
          image: "assets/products/tools/toolsets/vde-screwdriver-set-10-pcs.jpg",
          imageAlt: "Bộ tua vít cách điện VDE slim Sonic 10 chi tiết",
          sharedImage: true,
          sourcePages: [100],
          sourceImage: "page100_img09.png",
          products: [
            {
              sku: "1610",
              name: "Tua vít VDE PH.0",
              details: "Tua vít cách điện VDE đầu PH.0."
            },
            {
              sku: "1611",
              name: "Tua vít VDE PH.1",
              details: "Tua vít cách điện VDE đầu PH.1."
            },
            {
              sku: "1612",
              name: "Tua vít VDE PH.2",
              details: "Tua vít cách điện VDE đầu PH.2."
            },
            {
              sku: "16325",
              name: "Tua vít dẹt VDE 2.5 mm",
              details: "Tua vít cách điện VDE đầu dẹt 2.5 mm."
            },
            {
              sku: "16304",
              name: "Tua vít dẹt VDE 4 mm",
              details: "Tua vít cách điện VDE đầu dẹt 4 mm."
            },
            {
              sku: "16355",
              name: "Tua vít dẹt VDE 5.5 mm",
              details: "Tua vít cách điện VDE đầu dẹt 5.5 mm."
            },
            {
              sku: "16365",
              name: "Tua vít dẹt VDE 6.5 mm",
              details: "Tua vít cách điện VDE đầu dẹt 6.5 mm."
            },
            {
              sku: "601020",
              name: "Bộ tua vít cách điện VDE slim 10 chi tiết",
              details: "Bộ tua vít VDE slim trong ví mềm."
            },
            {
              sku: "601115",
              name: "Bộ dụng cụ VDE 11 chi tiết",
              details: "Bộ dụng cụ VDE gọn cho thao tác điện."
            }
          ]
        },
        {
          sku: "605003",
          type: "product",
          categoryId: "tool-sets",
          name: "Bộ dụng cụ VDE 50 chi tiết",
          description:
            "Bộ dụng cụ cách điện VDE trong vali đỏ, gồm khẩu 3/8”, tua vít, kìm và phụ kiện bảo vệ cho thao tác điện.",
          image: "assets/products/tools/toolsets/vde-tool-kit-50-pcs.jpg",
          imageAlt: "Bộ dụng cụ VDE 50 chi tiết trong vali đỏ Sonic",
          specs: {
            "Số chi tiết": "50",
            "Chuẩn": "VDE",
            "Lưu trữ": "Vali đỏ bảo vệ"
          },
          features: [
            "Cấu hình cho kỹ thuật viên cần dụng cụ cách điện VDE.",
            "Vali đỏ giúp nhận diện nhanh và bảo vệ dụng cụ khi di chuyển.",
            "Bao gồm nhóm khẩu, tua vít, kìm và phụ kiện bảo vệ đã được catalog xác minh."
          ],
          includedItems: [
            "Bộ khẩu VDE 3/8”: 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22 mm",
            "Đầu nối dài VDE 3/8”: 150 mm và 250 mm",
            "Tua vít VDE PH.1 x 80 mm, PH.2 x 100 mm, PH.2 x 150 mm",
            "Tua vít dẹt VDE 2.5 x 75 mm, 3 x 100 mm, 3.5 x 100 mm",
            "Tua vít TX VDE T20 x 100 mm, T25 x 125 mm, T30 x 150 mm",
            "Ống bảo vệ 100 mm: 5 x 18 mm và 5 x 24 mm"
          ],
          sourcePages: [100],
          sourceImage: "page100_img06.png",
          verified: true,
          detailEnabled: true
        },
        {
          id: "mixed-toolsets",
          type: "family",
          name: "Bộ khẩu, bit và đầu chuyển độc lập",
          description:
            "Các bộ dụng cụ đóng hộp riêng, phù hợp bổ sung nhanh cho xe dụng cụ hoặc vali kỹ thuật.",
          image: "assets/products/tools/toolsets/socket-bit-set-36-pcs.jpg",
          imageAlt: "Bộ khẩu và bit 1/4 inch 36 chi tiết Sonic",
          sharedImage: true,
          sourcePages: [101],
          sourceImage: "page101_img05.png",
          products: [
            {
              sku: "104101",
              name: "Bộ bit 1/4” 41 chi tiết",
              details: "Bộ bit 1/4” đóng hộp."
            },
            {
              sku: "104601",
              name: "Bộ khẩu flank 1/4” 6 cạnh 46 chi tiết",
              details: "Bộ khẩu flank 1/4” 6 cạnh."
            },
            {
              sku: "300603",
              name: "Bộ đầu chuyển 6 chi tiết",
              details: "Bộ đầu chuyển cho đầu vuông."
            },
            {
              sku: "300605",
              name: "Bộ đầu chuyển impact 6 chi tiết",
              details: "Bộ đầu chuyển impact cho đầu vuông."
            },
            {
              sku: "402001",
              name: "Bộ khẩu 3/4” 12 cạnh 20 chi tiết",
              details: "Khẩu bi-hex 19–50 mm, đầu nối dài 100–200 mm."
            },
            {
              sku: "601408",
              name: "Tay cóc nối dài 14 trong 1",
              details: "Bộ tay cóc nối dài đa năng."
            },
            {
              sku: "601906",
              name: "Bộ vặn cổ dê linh hoạt 19 chi tiết",
              details: "Bộ dụng cụ vặn cổ dê linh hoạt."
            },
            {
              sku: "75214",
              name: "Bộ khẩu và bit 1/4” 36 chi tiết",
              details: "Bộ khẩu và bit 1/4” trong hộp."
            }
          ]
        },
        {
          sku: "601510",
          type: "product",
          categoryId: "tool-sets",
          name: "Bộ tua vít điện 15 chi tiết",
          description:
            "Bộ tua vít điện nhỏ gọn đi kèm đầu bit, phù hợp thao tác nhanh trong bảo dưỡng và lắp ráp nhẹ.",
          image: "assets/products/tools/toolsets/electric-screwdriver-set.jpg",
          imageAlt: "Bộ tua vít điện Sonic 15 chi tiết",
          specs: {
            "Số chi tiết": "15",
            "Kích thước": "180 x 49 x 49 mm",
            "Dạng bộ": "Tua vít điện kèm bit"
          },
          features: [
            "Thiết kế nhỏ gọn cho thao tác cầm tay.",
            "Bộ bit đi kèm đã được catalog xác minh.",
            "Phù hợp công việc lắp ráp nhẹ và bảo dưỡng nhanh."
          ],
          includedItems: [
            "Thân tua vít điện",
            "Nhóm đầu bit đi kèm theo bộ",
            "Phụ kiện lưu trữ trong hộp"
          ],
          sourcePages: [101],
          sourceImage: "page101_img10.png",
          verified: true,
          detailEnabled: true
        }
      ],
      families: [],
      featuredProducts: []
    },
    {
      id: "mobile-tool-solutions",
      name: "Vali và giải pháp dụng cụ di động",
      description:
        "Vali dụng cụ, hộp dụng cụ, vali có bánh xe và túi dụng cụ cho công việc cần di chuyển.",
      scope: ["Vali dụng cụ", "Hộp dụng cụ", "Túi dụng cụ"],
      image: "assets/products/tools/categories/mobile-tool-solutions.jpg",
      imageAlt: "Ba lô dụng cụ Sonic mở trên khu vực đường đua",
      sourcePages: [103, 104, 105, 106, 107],
      sourceImage: "page107_img05.png",
      sharedUsage: "category-card-and-preview",
      enabled: true,
      items: [
        {
          id: "carry-case-series",
          type: "family",
          name: "Vali dụng cụ Sonic",
          description:
            "Vali dụng cụ xách tay, có lựa chọn không kèm dụng cụ hoặc bộ hoàn chỉnh.",
          image: "assets/products/tools/mobile-solutions/carry-case-filled.jpg",
          imageAlt: "Vali dụng cụ Sonic kèm dụng cụ",
          sharedImage: true,
          sourcePages: [103],
          sourceImage: "page103_img25.png",
          products: [
            {
              sku: "49502",
              name: "Vali dụng cụ không kèm dụng cụ",
              details: "Kích thước W 410 x D 485 x H 215 mm, khối lượng 5.8 kg."
            },
            {
              sku: "713203",
              name: "Vali dụng cụ hoàn chỉnh",
              details: "Kích thước W 410 x D 485 x H 215 mm, khối lượng 6.8 kg."
            }
          ]
        },
        {
          id: "portable-case-trolley-series",
          type: "family",
          name: "Vali dụng cụ có bánh xe",
          description:
            "Giải pháp vali kéo dành cho kỹ thuật viên cần di chuyển dụng cụ giữa nhiều khu vực làm việc.",
          image: "assets/products/tools/mobile-solutions/portable-case-trolley.jpg",
          imageAlt: "Vali dụng cụ Sonic có bánh xe",
          sharedImage: true,
          sourcePages: [103],
          sourceImage: "page103_img13.png",
          products: [
            {
              sku: "49503",
              name: "Vali dụng cụ có bánh xe không kèm dụng cụ",
              details: "Phiên bản vali kéo không kèm dụng cụ."
            },
            {
              sku: "713204",
              name: "Vali dụng cụ có bánh xe hoàn chỉnh",
              details: "Phiên bản vali kéo kèm dụng cụ."
            }
          ]
        },
        {
          id: "topbox-filled-series",
          type: "family",
          name: "Hộp dụng cụ Sonic kèm dụng cụ",
          description:
            "Các cấu hình hộp dụng cụ kèm dụng cụ, có lựa chọn nắp đậy tùy nhu cầu lưu trữ.",
          image: "assets/products/tools/mobile-solutions/topbox-filled-with-lid.jpg",
          imageAlt: "Hộp dụng cụ Sonic kèm dụng cụ và nắp đậy",
          sharedImage: true,
          sourcePages: [104],
          sourceImage: "page104_img10.png",
          products: [
            {
              sku: "704721",
              name: "Hộp dụng cụ 47 chi tiết",
              details: "Phiên bản kèm dụng cụ 47 chi tiết."
            },
            {
              sku: "704771",
              name: "Hộp dụng cụ có nắp 47 chi tiết",
              details: "Phiên bản có nắp, kèm dụng cụ 47 chi tiết."
            },
            {
              sku: "709601",
              name: "Hộp dụng cụ 96 chi tiết",
              details: "Phiên bản kèm dụng cụ 96 chi tiết."
            },
            {
              sku: "709671",
              name: "Hộp dụng cụ có nắp 96 chi tiết",
              details: "Phiên bản có nắp, kèm dụng cụ 96 chi tiết."
            }
          ]
        },
        {
          sku: "708971",
          type: "product",
          categoryId: "mobile-tool-solutions",
          name: "Hộp dụng cụ có nắp 89 chi tiết",
          description:
            "Hộp dụng cụ có nắp, kèm cấu hình 89 chi tiết cho nhu cầu sửa chữa và bảo dưỡng lưu động.",
          image: "assets/products/tools/mobile-solutions/topbox-drawer-set.jpg",
          imageAlt: "Hộp dụng cụ Sonic có nắp kèm 89 chi tiết",
          specs: {
            "Số chi tiết": "89",
            "Dạng sản phẩm": "Hộp dụng cụ có nắp",
            "Tình trạng": "Kèm dụng cụ"
          },
          features: [
            "Cấu hình kèm dụng cụ được catalog xác minh.",
            "Dạng hộp có nắp giúp bảo vệ dụng cụ khi di chuyển.",
            "Phù hợp gara, xe dịch vụ hoặc khu vực làm việc tạm thời."
          ],
          includedItems: [
            "Nhóm khẩu và phụ kiện siết mở",
            "Nhóm cờ lê",
            "Nhóm tua vít và dụng cụ cầm tay"
          ],
          sourcePages: [105],
          sourceImage: "page105_img04.png",
          verified: true,
          detailEnabled: true
        },
        {
          sku: "706201",
          type: "product",
          categoryId: "mobile-tool-solutions",
          name: "Hộp dụng cụ di động 62 chi tiết",
          description:
            "Hộp dụng cụ di động kèm 62 chi tiết, thiết kế dạng xách tay cho công việc ngoài vị trí cố định.",
          image: "assets/products/tools/mobile-solutions/portable-toolbox-filled.jpg",
          imageAlt: "Hộp dụng cụ di động Sonic kèm 62 chi tiết",
          specs: {
            "Số chi tiết": "62",
            "Dạng sản phẩm": "Hộp dụng cụ di động",
            "Tình trạng": "Kèm dụng cụ"
          },
          features: [
            "Dạng hộp xách tay dễ mang theo.",
            "Kèm bộ dụng cụ 62 chi tiết đã được catalog xác minh.",
            "Phù hợp kỹ thuật viên cần bộ dụng cụ cơ bản tại hiện trường."
          ],
          includedItems: [
            "Nhóm khẩu và phụ kiện siết mở",
            "Nhóm tua vít",
            "Nhóm cờ lê và dụng cụ cầm tay cơ bản"
          ],
          sourcePages: [105],
          sourceImage: "page105_img05.png",
          verified: true,
          detailEnabled: true
        },
        {
          sku: "712404",
          type: "product",
          categoryId: "mobile-tool-solutions",
          name: "Vali dụng cụ mô-đun 124 chi tiết",
          description:
            "Vali dụng cụ mô-đun dạng trolley, kèm 124 chi tiết và tay kéo mở rộng 990 mm cho công việc lưu động.",
          image: "assets/products/tools/mobile-solutions/modular-tool-case-124-pcs.jpg",
          imageAlt: "Vali dụng cụ mô-đun Sonic 124 chi tiết",
          specs: {
            "Số chi tiết": "124",
            "Dạng sản phẩm": "Vali dụng cụ mô-đun có bánh xe",
            "Tay kéo": "Mở rộng 990 mm",
            "Cấu hình": "Automotive 124 chi tiết"
          },
          features: [
            "Cấu hình 124 chi tiết cho sửa chữa ô tô và bảo dưỡng lưu động.",
            "Tay kéo trolley mở rộng 990 mm giúp di chuyển dễ hơn.",
            "Ngăn kéo có chặn tự giữ, hạn chế trượt ra ngoài ngoài ý muốn.",
            "Kèm nhiều nhóm dụng cụ: khẩu, cờ lê, kìm, búa và tua vít."
          ],
          includedItems: [
            "Bộ búa và kìm 13 chi tiết",
            "Bộ cờ lê 17 chi tiết",
            "Bộ khẩu 1/4” và 1/2” 79 chi tiết",
            "Bộ tua vít 15 chi tiết"
          ],
          sourcePages: [106],
          sourceImage: "page106_img07.png",
          verified: true,
          detailEnabled: true
        },
        {
          id: "toolbag-series",
          type: "family",
          name: "Túi dụng cụ Sonic",
          description:
            "Túi dụng cụ dạng ba lô với đế nhựa, có lựa chọn không kèm dụng cụ hoặc bộ hoàn chỉnh.",
          image: "assets/products/tools/mobile-solutions/toolbag-series.jpg",
          imageAlt: "Túi dụng cụ Sonic dạng ba lô mở cùng khay dụng cụ",
          sharedImage: true,
          sourcePages: [107],
          sourceImage: "page107_img05.png",
          products: [
            {
              sku: "47799",
              name: "Túi dụng cụ không kèm dụng cụ",
              details: "Kích thước 33 x 24 x 47 cm, khối lượng rỗng 2.6 kg, tải tối đa 20 kg."
            },
            {
              sku: "708401",
              name: "Túi dụng cụ 84 chi tiết",
              details: "Phiên bản kèm bộ dụng cụ cơ bản 84 chi tiết."
            },
            {
              sku: "711201",
              name: "Túi dụng cụ 112 chi tiết",
              details: "Phiên bản kèm bộ dụng cụ nâng cao 112 chi tiết."
            }
          ]
        }
      ],
      families: [],
      featuredProducts: []
    },
    {
      id: "automotive-specialty",
      name: "Dụng cụ chuyên dụng ô tô",
      description:
        "Dụng cụ phục vụ tháo lắp, kiểm tra và bảo dưỡng ô tô theo từng ứng dụng.",
      scope: ["Tháo lắp", "Kiểm tra", "Bảo dưỡng ô tô"],
      image: "assets/products/tools/categories/automotive-specialty-tools.jpg",
      imageAlt: "Bộ dụng cụ tách vòng bi chuyên dụng cho ô tô",
      sourcePages: [108, 109, 110, 111, 112],
      sourceImage: "page110_img03.png",
      sharedUsage: "category-card-and-preview",
      enabled: true,
      families: [],
      featuredProducts: []
    }
  ]
};
