import React from "react";

function GetLogo(code: string): string {
    var teampng;
    switch (code) {
        case "Arsenal":
            teampng = "아스날.png";
            break;
        case "Aston Villa":
            teampng = "아스톤빌라.png";
            break;
        case "Brentford":
            teampng = "브렌트포드.png";
            break;
        case "Brighton":
            teampng = "브라이튼.png";
            break;
        case "Burnley":
            teampng = "번리.png";
            break;
        case "Chelsea":
            teampng = "첼시.png";
            break;
        case "Crystal Palace":
            teampng = "크팰.png";
            break;
        case "Everton":
            teampng = "에버튼.png";
            break;
        case "Leeds":
            teampng = "리즈.png";
            break;
        case "Leicester":
            teampng = "레스터시티.png";
            break;
        case "LeicesterCity":
            teampng = "레스터시티.png";
            break;
        case "Liverpool":
            teampng = "리버풀.png";
            break;
        case "Man City":
            teampng = "맨시티.png";
            break;
        case "Man United":
            teampng = "맨유.png";
            break;
        case "Newcastle":
            teampng = "뉴캐슬.png";
            break;
        case "Norwich":
            teampng = "노리치.png";
            break;
        case "Southampton":
            teampng = "소튼.png";
            break;
        case "Tottenham":
            teampng = "토트넘.png";
            break;
        case "Watford":
            teampng = "왓포드.png";
            break;
        case "West Ham":
            teampng = "웨스트햄.png";
            break;
        case "Wolves":
            teampng = "울버햄튼.png";
            break;
        default:
            teampng = "NONE";
            break;
    }
    const logourl = `https://jolpbucket.s3.ap-northeast-2.amazonaws.com/image/${teampng}`;

    return logourl;
}

export default GetLogo;
