import React from "react";

function GetTeamcode(code: string): string {
    var teamName;
    switch (code) {
        case "Arsenal":
            teamName = "120";
            break;
        case "Aston Villa":
            teamName = "121";
            break;
        case "Brentford":
            teamName = "129";
            break;
        case "Brighton":
            teamName = "130";
            break;
        case "Burnley":
            teamName = "131";
            break;
        case "Chelsea":
            teamName = "134";
            break;
        case "Crystal Palace":
            teamName = "136";
            break;
        case "Everton":
            teamName = "138";
            break;
        case "Leeds":
            teamName = "143";
            break;
        case "Leicester":
            teamName = "144";
            break;
        case "Liverpool":
            teamName = "145";
            break;
        case "Man City":
            teamName = "146";
            break;
        case "Man United":
            teamName = "147";
            break;
        case "Newcastle":
            teamName = "149";
            break;
        case "Norwich":
            teamName = "150";
            break;
        case "Southampton":
            teamName = "158";
            break;
        case "Tottenham":
            teamName = "163";
            break;
        case "Watford":
            teamName = "164";
            break;
        case "West Ham":
            teamName = "166";
            break;
        case "Wolves":
            teamName = "171";
            break;
        default:
            teamName = "NONE";
            break;
    }

    return teamName;
}

export default GetTeamcode;
