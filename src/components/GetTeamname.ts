import React from 'react';

function GetTeamname(code:string):string {
    var teamName;
    switch(code){
        case '120':
            teamName = '아스날 FC'; break;
        case '121':
            teamName = '아스톤 빌라'; break;
        case '129':
            teamName = '브렌트포드'; break;
        case '130':
            teamName = '브라이튼 앤 호프 알비온'; break;
        case '131':
            teamName = '번리'; break;
        case '134':
            teamName = '첼시 FC'; break;
        case '136':
            teamName = '크리스탈 팰리스'; break;
        case '138':
            teamName = '에버튼 FC'; break;
        case '143':
            teamName = '리즈 유나이티드'; break;
        case '144':
            teamName = '레스터 시티'; break;
        case '145':
            teamName = '리버풀 FC'; break;
        case '146':
            teamName = '맨체스터 시티'; break;
        case '147':
            teamName = '맨체스터 유나이티드'; break;
        case '149':
            teamName = '뉴캐슬'; break;
        case '150':
            teamName = '노리치 시티'; break;
        case '158':
            teamName = '사우스햄튼'; break;
        case '163':
            teamName = '토트넘 핫스퍼'; break;
        case '164':
            teamName = '왓포드 FC'; break;
        case '166':
            teamName = '웨스트햄 유나이티드'; break;
        case '171':
            teamName = '울버햄튼 원더러스'; break;
        default:
            teamName = 'NONE'; break;
    }

    return teamName;
}


export default GetTeamname;