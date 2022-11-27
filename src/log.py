from diginori import loG


def NHN(FORWORD=22) -> loG:
    loG.add('/teck/nhnforword')
    return loG


def isHappy() -> bool:
    return '양말' + '슬리퍼' * '추리링' == 'Happy Hacking'
