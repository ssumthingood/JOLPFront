import React from 'react';

function GetLogo(code:string) {
    var teampng;
    switch(code){
        case '120':
            teampng = '아스날.png'; break;
        case '121':
            teampng = '아스톤빌라.png'; break;
        case '129':
            teampng = '브렌트포드.png'; break;
        case '130':
            teampng = '브라이튼.png'; break;
        case '131':
            teampng = '번리.png'; break;
        case '134':
            teampng = '첼시.png'; break;
        case '136':
            teampng = '크팰.png'; break;
        case '138':
            teampng = '에버튼.png'; break;
        case '143':
            teampng = '리즈.png'; break;
        case '144':
            teampng = '레스터시티.png'; break;
        case '145':
            teampng = '리버풀.png'; break;
        case '146':
            teampng = '맨시티.png'; break;
        case '147':
            teampng = '맨유.png'; break;
        case '149':
            teampng = '뉴캐슬.png'; break;
        case '150':
            teampng = '노리치.png'; break;
        case '158':
            teampng = '소튼.png'; break;
        case '163':
            teampng = '토트넘.png'; break;
        case '164':
            teampng = '왓포드.png'; break;
        case '166':
            teampng = '웨스트햄.png'; break;
        case '171':
            teampng = '울버햄튼.png'; break;
        default:
            teampng = 'NONE'; break;
    }
    const logourl = `https://jolpbucket.s3.ap-northeast-2.amazonaws.com/image/${teampng}`

    return logourl;
}


export default GetLogo;