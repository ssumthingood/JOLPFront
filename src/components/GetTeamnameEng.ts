import React from "react";

function GetTeamnameEng(code:string):string {
    var teamName;
    switch(code){
        case '120':
            teamName = ' Arsenal'; break;
        case '121':
            teamName = 'Aston Villa'; break;
        case '129':
            teamName = ' Brentford'; break;
        case '130':
            teamName = ' Brighton'; break;
        case '131':
            teamName = ' Burnley'; break;
        case '134':
            teamName = ' Chelsea'; break;
        case '136':
            teamName = ' Crystal Palace'; break;
        case '138':
            teamName = ' Everton'; break;
        case '143':
            teamName = ' Leeds'; break;
        case '144':
            teamName = ' Leicester'; break;
        case '145':
            teamName = ' Liverpool'; break;
        case '146':
            teamName = ' Man City'; break;
        case '147':
            teamName = ' Man United'; break;
        case '149':
            teamName = ' Newcastle'; break;
        case '150':
            teamName = ' Norwich'; break;
        case '158':
            teamName = ' Southampton'; break;
        case '163':
            teamName = ' Tottenham'; break;
        case '164':
            teamName = ' Watford'; break;
        case '166':
            teamName = ' West Ham'; break;
        case '171':
            teamName = ' Wolves'; break;
        default:
            teamName = 'NONE'; break;
    }

    return teamName;
}


export default GetTeamnameEng;