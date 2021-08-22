import mapData from "../assets/mapData";
const cData = {
    0: {R:0,G:0,H:0},
    1: {R:-1,G:0,H:1},
    2: {R:2,G:-1,H:-1},
    3: {R:-2,G:2,H:0},
    4: {R:1,G:-2,H:1},
    5: {R:0,G:1,H:-1},
}
async function after_2 (classRef,classData) {
    let result = classData?.upstream?.MINIGAME?.result;
    if(!result) result=0
    const location = classData.map.location;
    const character = classData.character;
    const ret = mapData[location].value[result];
    let dv = {"G":0,"R":0,"H":0,"B":0};
    console.log(classData.score,ret)
    if (location === 20) {
        const x = "RGHB".charAt(Math.floor(Math.random()*4));
        dv[x]=[30,40,50][result];
    }
    else dv = {...ret};
    console.log(location,dv)
    dv.R = classData.score.R.value + dv.R + Math.abs(Math.floor(dv.R * cData[character].R/10));
    dv.G = classData.score.G.value + dv.G + Math.abs(Math.floor(dv.G * cData[character].G/10));
    dv.H = classData.score.H.value + dv.H + Math.abs(Math.floor(dv.H * cData[character].H/10));
    dv.B += classData.score.B.value;

    return classRef.update({"score/R/value":dv.R,"score/G/value":dv.G,"score/H/value":dv.H,"score/B/value":dv.B});
};

export default after_2;