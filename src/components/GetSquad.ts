import React from 'react';

function GetSquad(code:string){
    var squad:string[]=[];
    var myUrl = `https://jolpbucket.s3.ap-northeast-2.amazonaws.com/image/squad/`;
    switch(code){
        case '120':
            squad.push(myUrl+'아스날-1.PNG');
            squad.push(myUrl+'아스날-2.PNG');
            break;
        case '121':
            squad.push(myUrl+'아스톤빌라-1.PNG');
            squad.push(myUrl+'아스톤 빌라-2.PNG');
            break;
        case '129':
            squad.push(myUrl+'브렌트포드-1.PNG');
            squad.push(myUrl+'브렌트포드-2.PNG');
            break;
        case '130':
            squad.push(myUrl+'브라이튼-1.PNG');
            squad.push(myUrl+'브라이즌-2.PNG');
            break;
        case '131':
            squad.push(myUrl+'번리-1.PNG');
            squad.push(myUrl+'번리-2.PNG');
            break;
        case '134':
            squad.push(myUrl+'첼시-1.PNG');
            squad.push(myUrl+'첼시-2.PNG');
            break;
        case '136':
            squad.push(myUrl+'크팰-1.PNG');
            squad.push(myUrl+'크팰-2.PNG');
            break;
        case '138':
            squad.push(myUrl+'에버턴-1.PNG');
            squad.push(myUrl+'에버턴-2.PNG');
            break;
        case '143':
            squad.push(myUrl+'리즈-1.PNG');
            squad.push(myUrl+'리즈-2.PNG');
            break;
        case '144':
            squad.push(myUrl+'레스터-1.PNG');
            squad.push(myUrl+'레스터-2.PNG');
            break;
        case '145':
            squad.push(myUrl+'리버풀-1.PNG');
            squad.push(myUrl+'리버풀-2.PNG');
            break;
        case '146':
            squad.push(myUrl+'맨시티-1.PNG');
            squad.push(myUrl+'맨시티-2.PNG');
            break;
        case '147':
            squad.push(myUrl+'맨유-1.PNG');
            squad.push(myUrl+'맨유-2.PNG');
            break;
        case '149':
            squad.push(myUrl+'뉴캐슬-1.PNG');
            squad.push(myUrl+'뉴캐슬-2.PNG');
            break;
        case '150':
            squad.push(myUrl+'노리치-1.PNG');
            squad.push(myUrl+'노리치-2.PNG');
            break;
        case '158':
            squad.push(myUrl+'소튼-1.PNG');
            squad.push(myUrl+'소튼-2.PNG');
            break;
        case '163':
            squad.push(myUrl+'토트넘-1.PNG');
            squad.push(myUrl+'토트넘-2.PNG');
            break;
        case '164':
            squad.push(myUrl+'왓포드-1.PNG');
            squad.push(myUrl+'왓포드-2.PNG');
            break;
        case '166':
            squad.push(myUrl+'웨스트햄-1.PNG');
            squad.push(myUrl+'웨스트햄-2.PNG');
            break;
        case '171':
            squad.push(myUrl+'울브스-1.PNG');
            squad.push(myUrl+'울브스-2.PNG');
            break;
        default:
            squad.push('NONE');
            break;
    }
    return squad;
}

export default GetSquad;