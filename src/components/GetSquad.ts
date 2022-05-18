import React from 'react';

function GetSquad(code:string){
    var squad;
    switch(code){
        case '120':
            squad = '아스날'; break;
        case '121':
            squad = '아스톤빌라'; break;
        case '129':
            squad = '브렌트포드'; break;
        case '130':
            squad = '브라이튼'; break;
        case '131':
            squad = '번리'; break;
        case '134':
            squad = '첼시'; break;
        case '136':
            squad = '크팰'; break;
        case '138':
            squad = '에버튼'; break;
        case '143':
            squad = '리즈'; break;
        case '144':
            squad = '레스터시티'; break;
        case '145':
            squad = '리버풀'; break;
        case '146':
            squad = '맨시티'; break;
        case '147':
            squad = '맨유'; break;
        case '149':
            squad = '뉴캐슬'; break;
        case '150':
            squad = '노리치'; break;
        case '158':
            squad = '소튼'; break;
        case '163':
            squad = '토트넘'; break;
        case '164':
            squad = '왓포드'; break;
        case '166':
            squad = '웨스트햄'; break;
        case '171':
            squad = '울버햄튼'; break;
        default:
            squad = 'NONE'; break;
    }
}

export default GetSquad;