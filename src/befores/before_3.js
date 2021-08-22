const titles = [
    ["[First Half of Fall Semester]\n해당 시즌 이벤트를 선택한 팀끼리 '???' 스탯 100점을 나눠 가진다.",""],
    ["[Second Half of Fall Semester]\n타 팀(한 반)의 '???' 스탯을 40점 하락시킨다.",""],
    ["[First Half of Spring Semester] 타 팀(한 반)의 '???' 스탯을 40점 빼앗을 수 있다.",""],
    ["[Second Half of Spring Semester]",""]
]
const descs = [
    [
        ["[개강] 겹강 구해요\n설명: 개강도 했겠다, 슬슬 시작해야죠?\n적용 스탯: ???",""],
        ["[KAMF] 같이 즐기는 KAMF\n설명: KAMF는 KAIST Art & Music Festival의 약자랍니다.\n적용 스탯: ???",""],
        ["[카포전] 질 수 없는 싸움\n설명: 하지만 무엇보다 안전이 가장 중요해요.\n적용 스탯: ???",""],
    ],
    [
        ["[단풍 구경] 단풍은 못 참지\n설명: 알록달록 단풍 때문에 뭔가에 집중이 하나도 안 되는 것만 같은 기분이에요.\n적용 스탯: ???",""],
        ["[종강] 본가로 돌아가요\n설명: 짐 챙겨서 본가로 돌아가는 친구들이 하나둘 보이기 시작해요.\n적용 스탯: ???",""],
        ["[Year-End Party] 아무리 연말파티라도\n설명: 과식은 금물이지요.\n적용 스탯: ???",""],
    ],
    [
        ["[벚꽃 구경] 같이 갈 사람?\n설명: 하지만 벚꽃이 필 즈음엔 다들 바빠진답니다.\n적용 스탯: ???",""],
        ["[딸기파티] 딸기 나눠 먹기\n설명: 딸기를 같이 먹으면 아무튼 이런저런 효과가 있다고 합니다.\n적용 스탯: ???",""],
        ["[중간고사] 교양분관의 망령\n설명: 이상하죠. 공부만 시작하면 자꾸 졸려요.\n적용 스탯: ???",""],
    ],
    [
        ["[축제] 즐거운 하루\n설명: 즐거운 날에는 생각지도 못했던 일들이 일어나곤 하죠.\n효과: 본인 팀의 '보너스' 스탯을 2배로 증가시킬 수 있다.",""],
        ["[학과설명회] 이젠 새내기가 아니야\n설명: 학과 선택의 갈림길에서 학과 설명회는 필수가 아닐까요?\n효과: '학과 진입' 이벤트에 대한 힌트를 제공한다.",""],
        ["[기말고사] 복습은 철저히\n설명: 열심히 복습할수록 좋은 결과가 나올 거예요!\n효과: 앞선 시즌 이벤트의 일부 가운데 하나를 선택할 수 있다.",""],
    ],
]
async function before_3 (classRef,state) {
    const stream = {};
    stream.title = titles[Math.floor(state.turn/3)]
    stream.desc = descs[Math.floor(state.turn/3)]
    return classRef.update({'downstream/SEASON_SELECT':stream});
};

export default before_3;